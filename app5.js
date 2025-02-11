/**
 * 
 * ---------------------------------Ejercicio - Introducción a EXPRESS Parte 2 --------------------------
 * Acá se valida la ruta http://localhost/hola-mundoo
 * 
 * 
 */
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Home Page')
  /**
   * Aca se esta enviando un mensaje directo, pero podriamos enviar
   * un sitio web, una opcion del sistema, etc
   */

})

app.get('/hola-mundo', function (req, res) {
  res.send('Hola mundo en su respectiva ruta')
})

app.listen(8080);

/**
 * Al ejecutar esta aplicacion comprobar las siguientes rutas en el navegador 
 * ¿Que mensajes despliega y por que?
 * Comprobar una ruta no válida y analizar.
 */


/**
 * Corrección en la Ruta: La ruta original /hola mundo se ha cambiado a /hola-mundo. Las rutas no deben contener espacios. Si necesitas separar palabras en una ruta, usa guiones (-) o guiones bajos (_).
*/
