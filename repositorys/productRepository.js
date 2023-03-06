const ProductModel = require('../models/productModel');

const ListarProductos = async () => {
   return await ProductModel.find();
};


const NuevoProducto = async (model) => {
  const addProduct = new ProductModel(model);
  return await addProduct.save();;
} 
/*
const actualizaUsuario = async (id, password, telefono, rol) => {
  return await UserModel.updateOne(
     { _id: id },
     { password, telefono, rol },
   )};

const eliminarProducto = async (id) => {
   return await ProductModel.deleteOne({_id: id});
};*/


module.exports={ ListarProductos, NuevoProducto};