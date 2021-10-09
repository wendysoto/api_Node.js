## Api with Node.js

API de prueba con Node.js y Mysql 

La Api se encuentra desplegada en la plataforma Heroku.
Url de acceso a la API: https://apiservicesnode.herokuapp.com/  
- [x] [acceder](https://apiservicesnode.herokuapp.com/)


### 1. Herramientas y Plataformas Utilizadas

- [x] [Node](https://nodejs.org/es/)
- [x] [AlwaysData](https://www.alwaysdata.com/en/)
- [x] [Heroku](https://www.heroku.com/)
- [x] [TypeScript](https://www.typescriptlang.org/)

La api de prueba es una lista de empleados; las rutas de acceso creadas son:
| **METODO GET** :pager: | **METODO GET by ID** :computer: | 
| ------------- | ------------- | 
|Leer la lista completa de empleados https://apiservicesnode.herokuapp.com/api/getEmpleado ![myimage-alt-tag](https://github.com/wendysoto/api_Node.js/blob/main/img/getheroku.PNG) |Leer un empleado especifico de la lista, se requiere id único https://apiservicesnode.herokuapp.com/api/getEmpleado/1 ![myimage-alt-tag](https://github.com/wendysoto/api_Node.js/blob/main/img/getId.PNG)|
| **METODO POST** :pager: | **METODO PUT** :computer: | 
|Guardar nuevo empleado en la lista https://apiservicesnode.herokuapp.com/api/postEmpleado ![myimage-alt-tag](https://github.com/wendysoto/api_Node.js/blob/main/img/post.PNG)|Actualizar un empleado en especifico, requiere id único https://apiservicesnode.herokuapp.com/api/putEmpleado/4 ![myimage-alt-tag](https://github.com/wendysoto/api_Node.js/blob/main/img/put.PNG)|
| **METODO DELETE** :pager: | **Base de Datos** :computer: | 
|Eliminar un empleado de la lista, se requiere id único https://apiservicesnode.herokuapp.com/api/deleteEmpleado/9 ![myimage-alt-tag](https://github.com/wendysoto/api_Node.js/blob/main/img/delete.PNG)|Base de datos almacenada en AlwaysData ![myimage-alt-tag](https://github.com/wendysoto/api_Node.js/blob/main/img/bdd.PNG)|



