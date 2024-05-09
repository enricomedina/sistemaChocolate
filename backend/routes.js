const express = require("express");
const connection = require("./db");
const router = express.Router();

// Rota para listar todos os registros
router.get("/fornecedores", (req, res) => {
  connection.query("SELECT * FROM fornecedores", (err, results) => {
    if (err) {
      console.error("Erro ao buscar os registros:", err);
      res.status(500).json({ error: "Erro ao buscar os registros" });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get("/fornecedores/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT * FROM fornecedores WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.error("Erro ao buscar o registro:", err);
        res.status(500).json({ error: "Erro ao buscar o registro" });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: "Registro não encontrado" });
        return;
      }
      res.json(results[0]);
    }
  );
});

// Rota para criar um novo registro
router.post("/fornecedores", (req, res) => {
  const {
    nomeEmpresa,
    atuacao,
    cep,
    cnpj,
    estado,
    email,
    telefone,
    tipoFornecedor,
    numeroRegistro,
    status,
    dataCadastro,
    avaliacoes,
  } = req.body;
  connection.query(
    "INSERT INTO fornecedores (nomeEmpresa, atuacao, cep, cnpj, estado, email, telefone, tipoFornecedor, numeroRegistro, status, dataCadastro, avaliacoes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      nomeEmpresa,
      atuacao,
      cep,
      cnpj,
      estado,
      email,
      telefone,
      tipoFornecedor,
      numeroRegistro,
      status,
      dataCadastro,
      avaliacoes,
    ],
    (err, result) => {
      if (err) {
        console.error("Erro ao criar o registro:", err);
        res.status(500).json({ error: "Erro ao criar o registro" });
        return;
      }
      res
        .status(201)
        .json({ message: "Registro criado com sucesso", id: result.insertId });
    }
  );
});

// Rota para atualizar um registro existente pelo ID
router.put("/fornecedores/:id", (req, res) => {
  const { id } = req.params;
  const {
    nomeEmpresa,
    atuacao,
    cep,
    cnpj,
    estado,
    email,
    telefone,
    tipoFornecedor,
    numeroRegistro,
    status,
    dataCadastro,
  } = req.body;
  connection.query(
    "UPDATE fornecedores SET nomeEmpresa = ?, atuacao = ?, cep = ?, cnpj = ?, estado = ?, email = ?, telefone = ?, tipoFornecedor = ?, numeroRegistro = ?, status = ?, dataCadastro = ?, WHERE id = ?",
    [
      nomeEmpresa,
      atuacao,
      cep,
      cnpj,
      estado,
      email,
      telefone,
      tipoFornecedor,
      numeroRegistro,
      status,
      dataCadastro,
      avaliacoes,
      id,
    ],
    (err, result) => {
      if (err) {
        console.error("Erro ao atualizar o registro:", err);
        res.status(500).json({ error: "Erro ao atualizar o registro" });
        return;
      }
      res.json({ message: "Registro atualizado com sucesso" });
    }
  );
});

// Rota para excluir um registro pelo ID
router.delete("/fornecedores/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "DELETE FROM fornecedores WHERE idFornecedores = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error("Erro ao excluir o registro:", err);
        res.status(500).json({ error: "Erro ao excluir o registro" });
        return;
      }
      res.json({ message: "Registro excluído com sucesso" });
    }
  );
});

module.exports = router;
