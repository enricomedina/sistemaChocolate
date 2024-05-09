import React from 'react';

const LoginItem = ({ cadastro, onDelete }) => {
  return (
    <tr>
      <td>{login.id}</td>
      <td>{login.usuario}</td>
      <td>{login.email}</td>
      <td>{login.email}</td>
      <td>
        <button onClick={() => onDelete(cadastro.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default LoginItem;
