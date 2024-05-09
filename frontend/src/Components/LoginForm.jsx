// CadastroForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    email: '',
    senha: ''
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
      await axios.post('http://localhost:3001/login', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        usuario: '',
        email: '',
        senha: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="usuario" placeholder="Usuário" value={formData.usuario} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default LoginForm;
