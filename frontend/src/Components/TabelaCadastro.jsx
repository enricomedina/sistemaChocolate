import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/teste.css";

const TabelaCadastro = () => {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/fornecedores");
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (idFornecedores) => {
    try {
      await axios.delete(
        `http://localhost:3001/fornecedores/${idFornecedores}`
      );
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/fornecedores");
      setCadastros(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <div>
      <table className="teste-color" border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>NomeEmpresa</th>
            <th>Atuacao</th>
            <th>CEP</th>
            <th>CNPJ</th>
            <th>Estado</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>TipoFornecedor</th>
            <th>NumeroRegistro</th>
            <th>Status</th>
            <th>DataCadastro</th>
            <th>Avaliacoes</th>
            <th>Ação</th>
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {cadastros.map((Fornecedores) => (
            <tr key={Fornecedores.idFornecedores}>
              <td>{Fornecedores.idFornecedores}</td>
              <td>{Fornecedores.nomeEmpresa}</td>
              <td>{Fornecedores.atuacao}</td>
              <td>{Fornecedores.cep}</td>
              <td>{Fornecedores.cnpj}</td>
              <td>{Fornecedores.estado}</td>
              <td>{Fornecedores.email}</td>
              <td>{Fornecedores.telefone}</td>
              <td>{Fornecedores.tipoFornecedor}</td>
              <td>{Fornecedores.numeroRegistro}</td>
              <td>{Fornecedores.status}</td>
              <td>{Fornecedores.dataCadastro}</td>
              <td>{Fornecedores.avaliacoes}</td>

              <td>
                <button
                  variant="danger"
                  onClick={() =>
                    handleExcluirUsuario(Fornecedores.idFornecedores)
                  }
                >
                  Excluir
                </button>
              </td>
              {/* Renderizar outras colunas, se necessário */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaCadastro;
