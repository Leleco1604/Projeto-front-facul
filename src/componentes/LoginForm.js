import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //autenticação ou envio dos dados
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* Campo do formulário para o nome de usuário */}
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Campo do formulário para a senha */}
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Botão de submissão do formulário */}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
