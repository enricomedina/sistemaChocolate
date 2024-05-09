import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/teste.css';

const TabelaLogin = () => {
  const [login, setLogin] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/login");
        setLogin(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);
  const handleExcluirUsuario = async (idLogin) => {
    try {
      await axios.delete(`http://localhost:3001/login/${idLogin}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/login");
      setLogin(data);
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
            <th>ID</th>
            <th>Ação</th>
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {login.map((login) => (
            <tr key={login.idLogin}>
              <td>{login.idLogin}</td>
              <td>{login.usuario}</td>
              <td>{login.email}</td>
              <td>{login.senha}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(login.idLogin)}
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

export default TabelaLogin;