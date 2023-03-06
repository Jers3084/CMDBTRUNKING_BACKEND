const mercadopago = require("mercadopago");
const {pagoProductos } = require("../bussinesLogic/productBL");
const { GenericResponse } = require("../utils/genericResponse");
const { CustomMessages } = require("../utils/messages");
const { validationResult } = require("express-validator");

// Agrega credenciales
mercadopago.configure({
  access_token: "TEST-3787643141484724-031915-c05b541b74319c382610c0c7541a2034-363863618"
});



 
 const pago = async (req, res) => {
const response = new GenericResponse();
const {articulos} = req.body;
try {
 let preference = {
  items: []
}; 

//Sacar de articulos cada producto y pasarlo a como lo requiere mercado pago
articulos.forEach((prod) => {
  const add = {
    tittle: prod.nombre,
    unit_price: prod.precio,
    quantity: prod.cantidad
  };
  preference.items.push(add);
});
// response.body.id
const result = await mercadopago.preferences.create(preference);
response.data = result.body.id;
return res.json(response);

} catch (error) {
console.log(error);
response.message = CustomMessages.error_500;
response.success = false;
return res.status(500).json(response); 
}

} 
 module.exports = { pago };
 