const express = require('express');
const { connect } = require('../database');
const router = express.Router();
const mysqlConnection = require('../database');

router.get('/', (req, res) => {
   res.sendFile(__dirname +'/index.html');
});

//GET EMPLEADOS
router.get('/api/getEmpleado', (req, res) => {
    mysqlConnection.query('select * from empleados', (err, rows, fields)=> {
        if(!err) {
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

//GET EMPLEADOS BY ID
router.get('/api/getEmpleado/:id',(req, res)=>{
    const {id}=req.params;
    mysqlConnection.query('select * from empleados where id=?',[id],(err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }else{
            console.log(err);
        } 
    })
});

//POST EMPLEADOS
router.post('/api/postEmpleado', (req, res)=>{
    const consulta='insert into empleados set?'
    const empleadoObj={
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        cargo:req.body.cargo,
        telefono:req.body.telefono
    }
    mysqlConnection.query(consulta,empleadoObj, error=>{
        if (error) throw error;
    res.send('Empleado created!');
    })
});

//PUT 
router.put('/api/putEmpleado/:id', (req, res)=>{
    const {id}=req.params;
    const{nombre, apellido, cargo, telefono}=req.body;
    const consulta=`update empleados set nombre='${nombre}', apellido='${apellido}',cargo='${cargo}',telefono='${telefono}'where id=${id}`;
    mysqlConnection.query(consulta, error=>{
        if (error) throw error;
        res.send('Empleado Actualizado!');

    })
})

//DELETE
router.delete('/api/deleteEmpleado/:id', (req, res) => {
    const { id } = req.params;
    const sql = `delete from empleados where id= ${id}`;
  
    mysqlConnection.query(sql, error => {
      if (error) throw error;
      res.send('Delete Empleado');
    });
  });

module.exports = router;