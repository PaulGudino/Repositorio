var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Producto = require('../models').producto;  
const Categoria = require('../models').categoria;  
const Usuario = require('../models').usuario;


router.get('/usuario', function(req, res, next) {
    Usuario.findAll({  
    attributes: { exclude: ["updatedAt", "createdAt"] }  
})  
.then(usuario => {  
    res.json(usuario);  
})  
.catch(error => res.status(400).send(error)) 
});

router.post('/usuario', function(req, res, next) {
    Usuario.create({
        nombre: req.body.nombre,
        contraseña: req.body.contraseña
    })
    .then(usuario => {
        res.json(usuario);
    })
    .catch(error => res.status(400).send(error))
});
  
router.get('/productos', function(req, res, next) {
  Producto.findAll({  
    attributes: { exclude: ["updatedAt"] },
})  
.then(productos => {  
    res.json(productos);  
})  
.catch(error => res.status(400).send(error)) 
});

router.get('/categoria', function(req, res, next) {
    Categoria.findAll({  
      attributes: { exclude: ["updatedAt"] }  
  })  
  .then(productos => {  
      res.json(productos);  
  })  
  .catch(error => res.status(400).send(error)) 
  });
  router.get('/categoria/:id', function(req, res, next) {
    Categoria.findOne({  
      where: { id: req.params.id }
  })  
  .then(productos => {  
      res.json(productos);  
  })  
  .catch(error => res.status(400).send(error)) 
  });
router.get('/productos/:id', function(req, res, next){
  Producto.findOne({
    where: { id: req.params.id }
  })
  .then(producto => {
    res.json(producto);
  })
  .catch(error => res.status(400).send(error))
})
router.get('/productos/categoria/:categoria', function(req, res, next){
  Producto.findAll({
    where: { categoria: req.params.categoria }
  })
  .then(producto => {
    res.json(producto);
  })
  .catch(error => res.status(400).send(error))
})
module.exports = router;