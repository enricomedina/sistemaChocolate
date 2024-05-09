import React, { useState } from 'react';
import axios from 'axios';

const CadastroForms = () => {
  const [formData, setFormData] = useState({
    nome: '',
    categoria: '',
    preco: '',
    quantidade: '',
    descricao: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/cadastros', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        categoria: '',
        preco: '',
        quantidade: '',
        descricao: '',
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
      <input type="text" name="categoria" placeholder="Categoria" value={formData.categoria} onChange={handleChange} />
      <input type="text" name="preco" placeholder="Preço" value={formData.preco} onChange={handleChange} />
      <input type="text" name="quantidade" placeholder="Quantidade" value={formData.quantidade} onChange={handleChange} />
      <input type="text" name="descricao" placeholder="Descrição" value={formData.descricao} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default CadastroForms;
