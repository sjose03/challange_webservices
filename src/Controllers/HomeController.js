const connection = require('../connection')


const getAllIntegrantes = (request,response) =>{
  connection.connect();
  connection.query('SELECT * from integrantes', function(err, rows, fields) {
    if (err) throw err;
      console.log(rows[0].id)
      response.send(`Aluno nome: ${rows[0].nome}, rm: ${rows[0].rm}, trabalho: ${rows[0].trabalho}`);

  });
}

module.exports = {
  getAllIntegrantes
}

