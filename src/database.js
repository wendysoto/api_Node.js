const mysql=require('mysql');

 const mysqlConnection=mysql.createConnection({
host:'mysql-wendys.alwaysdata.net',
database:'wendys_eximioprueba',
user:'wendys',
password:'Poli7991'
});

mysqlConnection.connect(function(error){
    if(error){
        throw error;
        }else{
            console.log('CONEXION EXITOSA');
        }
    });

module.exports=mysqlConnection;