const express = require('express')
const dbConnect = require('../database/index')


const router = express.Router();
router.use(express.json())

router.get('/searchAll', (req, res) =>{
    var sql = "SELECT * FROM clientes";
    dbConnect.connection.query(sql, (err, result) => {
        console.log(result)
        return res.json(result);  
    });
})

router.get('/searchByClientCode/:id', (req, res) =>{
    let id = req.params.id;
    var sql = `SELECT * FROM clientes WHERE CodigoDoCliente = ?`;
    dbConnect.connection.query(sql, id, (err, result) => {
     res.send(result);  
    });
})

router.post('/creatNewClient', (req, res) =>{
    const {CodigoDoCliente, NomeDaEmpresa, NomeDoContato, CargoDoContato, Endereço, Cidade, Região, CEP, Pais, Telefone, Fax} = req.body;

    var sql = `INSERT INTO clientes (CodigoDoCliente, NomeDaEmpresa, NomeDoContato, CargoDoContato, Endereço, Cidade, Região, CEP, Pais, Telefone, Fax) VALUES ('${CodigoDoCliente}', '${NomeDaEmpresa}', '${NomeDoContato}', '${CargoDoContato}', '${Endereço}', '${Cidade}', '${Região}', '${CEP}', '${Pais}', '${Telefone}', '${Fax}')`;

    dbConnect.connection.query(sql, function (err, result) {
        if(err){
            console.log("Erro: " + err)
        }else{
            res.json({
                "statusCode": 200
            }) 
        }
    });
})

//DESCOBRIR DPS PQ N EXCLUI
// router.delete('/delete/:id', (req, res)=>{
//     let id = req.params.id;
//     "DELETE FROM students WHERE id = 1";
//     var sql = `DELETE FROM clientes WHERE CodigoDoCliente = ${id}`;
//     dbConnect.connection.query(sql, function (err, result) {
//         if(err){
//             console.log("Erro: " + err)
//         }else{
//             res.json({
//                 "statusCode": 200
//             }) 
//         }
//     });
// } )

module.exports = router;