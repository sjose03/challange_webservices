const { Router} = require('express')
const {getAllIntegrantes} = require('./Controllers/HomeController')
const routes = Router()

routes.get("/",(request,response)=>{
  response.sendFile(`${__dirname}/Views/home.html`);
})

routes.get("/teste",getAllIntegrantes)



module.exports = routes;