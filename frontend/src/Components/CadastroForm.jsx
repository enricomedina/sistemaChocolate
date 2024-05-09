// CadastroForm.jsx
import React, { useState } from "react";
import axios from "axios";

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    atuacao: "",
    cep: "",
    cnpj: "",
    estado: "",
    email: "",
    tipoFornecedor: "",
    numeroRegistro: "",
    status: "",
    dataCadastro: "",
    avaliacoes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/fornecedores", formData);
      alert("Cadastro criado com sucesso!");
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nomeEmpresa: "",
        atuacao: "",
        cep: "",
        cnpj: "",
        estado: "",
        email: "",
        tipoFornecedor: "",
        numeroRegistro: "",
        status: "",
        dataCadastro: "",
        avaliacoes: "",
      });
    } catch (error) {
      console.error("Erro ao criar cadastro:", error);
      alert("Erro ao criar cadastro. Verifique o console para mais detalhes.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nomeEmpresa"
        placeholder="nomeEmpresa"
        value={formData.nome}
        onChange={handleChange}
      />
      <input
        type="text"
        name="atuacao"
        placeholder="Atuação"
        value={formData.nome}
        onChange={handleChange}
      />
      <input
        type="number"
        name="cep"
        placeholder="CEP"
        value={formData.cep}
        onChange={handleChange}
      />
      <input
        type="number"
        name="cnpj"
        placeholder="CNPJ"
        value={formData.cnpj}
        onChange={handleChange}
      />
      <input
        type="text"
        name="estado"
        placeholder="Estado"
        value={formData.estado}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="telefone"
        placeholder="Telefone"
        value={formData.telefone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="tipoFornecedor"
        placeholder="Tipo de Fornecedor"
        value={formData.tipoFornecedor}
        onChange={handleChange}
      />

      <input
        type="text"
        name="numeroRegistro"
        placeholder="Número de Registro"
        value={formData.numeroRegistro}
        onChange={handleChange}
      />

      <input
        type="text"
        name="status"
        placeholder="Status"
        value={formData.status}
        onChange={handleChange}
      />

      <input
        type="date"
        name="dataCadastro"
        placeholder="Data de Cadastro"
        value={formData.dataCadastro}
        onChange={handleChange}
      />

      <input
        type="text"
        name="avaliacoes"
        placeholder="Avaliações"
        value={formData.avaliacoes}
        onChange={handleChange}
      />

      <button type="submit">Salvar</button>
    </form>
  );
};

export default CadastroForm;
