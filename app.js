const express = require("express");

//inizializzo laa variabine app di express
const app = express();

//definisco la porta

const port = 3000;

//importo i middlewares precedenemente creati
//errorsHandler
const errorsHandler = require(`./middlewares/errorsHandler`)
//Not found
const notFound = require(`./middlewares/notFound`)
//recupero il router
const postsRouter = require(`./routers/postRouters`);

//aggiungo gli asset statici

app.use(express.static(`public`));

//aggiungo il formato per il body
app.use(express.json())

app.use(`/posts`, postsRouter);

//*definisco la rotta base del server

//Utilizzo i middlewar
//errorsHandler
app.use(errorsHandler);
app.use(notFound);



app.listen(port, () => {
  console.log(`server del blog in attesa nella porta ${port}`)

});






