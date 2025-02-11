/**
 * ---------------------Ejercicio - Utilizar Handlebars---------------
 * El sitio web como se encuentra actualmente es totalmente estático es decri que
 * si queremos modificar ciertas cosas, nosotros tenemos que modificar directamente
 * desde el HTML. Si queremos volver este sitio sitio web semidinamico se puede aplciar
 * al template HANDLEBARS un paquete de terceros en NPM muy popular que sirve para
 * poder renerizar el sitio web y enviarselo de esa forma al cliente.
 * 
 * Si aun no se ha instalado hbs entonces instalarlo con:    npm install hbs
 */

/**
 * Buscar la página de NPM el paquete handlebars o visitar el istio
 * https://www.npmjs.com/package/handlebars
 * para instalar el paquete utiliza se tien que buscar la isntalación hbs
 * especificamente para express verificar el código en GITHUB
 * 
 * npm install hbs
 * 
 * El objetivo de hbs es pre-renderizar las paginas con hbs y enviarle al cliente
 * un sitio web totalmente renderizado, esto me ayuda a poder por ejemplo
 * reutilizar código coo por ejemplo el de la barra de opciones y otras
 * partes de las páginas web a nivel de vsitas
 * 
 * Tenemos que tener en cuenta cosas quen o vamos a renderizar como por ejemplo
 * los assets como css, fonts, js y las imágenes.
 * El objetivo de hbs es también separar el modelo, la vista y el controlador
 * es decir aplicar el famoso MVC
 */
const express = require('express')
const app = express()
const port = 8080

/** 
 * -----------------Instrucciones para crea todoeste ejercicio----------------------
 * 1- Crear carpeta public3 en la razi, crear una subcarpeta llamada template
 * 2- Cortar todo los archivos del sitio web y pasarlos a la carpeta template
 * como backup del sitio, se necesitaran para tomar el código HTML
 * 3- Utilizar en este código el template engine que es agregar el código de esta
 * app la línea app.set('view engine', 'hbs')
 * 4- crear en la raiz la carpeta views, dentro de esta carpeta crear home.hbs
 * 5- Copiar todo el contenido del index.html y pegarlo en home.hbs, con esto ya
 * poseemos la capacidad de reutilizar el código como los headers, el menu (nav)
 * o el footer
 * 6- Modificar el home.hbs en sus links principales para no utlizar .html
*/

//utilizacion de hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

/**
 *  ste archivo necesita crear la carpeta public3, todos los archivos del templated
 * se trsanladarán a la carpeta de template para hacer un backup
 * Y poder empezar el trabajo de hbs (handkebars) para renderizar el sitio semi estático
 * Al momento de compilar el app12.js el sitio estará roto y saldrá la pagina de error.
 * 
*/

//Servir contenido estático public3 donde esta el templated
app.use(express.static('public3'))

//Controlador de la ruta principal
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + './public3/template/generic.html')
})


app.get('/elements', (req, res) => {
  res.sendFile(__dirname + './public3/elements.html')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + './public/404.html')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


/**
 * Para ejecutar esta aplicación se tiene que utilizar   node app12.js
 * En este momento ya tenemos renderizado la homepage pero aún no hemos
 * renderizado las demás partes de la pagina es decir sus opciones de
 * elements y generic.
 * visitar el sitio web http://localhost:8080
 * El beneficio en este punto, es que ya podemos tener la capacidad de
 * reutilizar código
 */
