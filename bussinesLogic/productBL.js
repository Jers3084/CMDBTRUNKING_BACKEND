const {ListarProductos, NuevoProducto} = require("../repositorys/productRepository");
 /*const {encryptPassword} = require('../utils/password');*/
 
 const obtenerProductos = async () => {
   return await ListarProductos();
 };
 
 
 const crearProducto = async (producto) => {
    return await NuevoProducto(producto);
 };
 
/* 
 const eliminarUsuarioActivo = async (_id) => {
   return await eliminarUsuario(_id);
 };*/
 
 module.exports = {obtenerProductos, crearProducto };
 