//importo i post
const posts = require(`../data/posts.js`);

//index
const index = (req, res) => {
  const tag = req.query.tag
  //creo la variabile per il filtraggio
  let filteredPost = posts;

  //pongo la condizione
  if (tag) {
    filteredPost = posts.filter(item => {
      return item.tag.map(tag => tag.toLowerCase()).includes(tag.toLowerCase())
    });
  }

  res.json(filteredPost)
}


//show
const show = (req, res) => {
  const id = parseInt(req.params.id);

  //utilizzo l'id per recuperare uno dei post con find
  const post = posts.find(item => item.id === id);

  //ultilizzo un messaggio di errore di post non trovato, non appena viene inserito un id che non esiste nella lista dei posts

  if (!post) {
    return res.status(404).json({ error: "Non trovato", message: "Post inesistente" })
  }
  res.json(post)
}

//create
const create = (req, res) => {

  //inserisco il nuovo id per poi trvare il post tramite il nuovo id
  const newId = posts[posts.length - 1].id + 1;

  const { title, content, tags } = req.body;
  //pusho allinterno dell'array dei post il nuovo post
  posts.push({
    id: newId,
    title,
    content,
    tags
  });
  console.log(req.body);
  console.log(posts);
  res.status(201).json("Inserimento avvenuto con successo")
}

//update
const update = (req, res) => {
  //recupero l'id e lo trasfornmo in formato Numero
  const id = parseInt(req.params.id);
  //Cerco nell'array il post da modificare
  const post = posts.find(item => item.id === id);
  //genero una risposta nel caso in cui l'oggetto non viene trovato
  if (!post) {
    return res.status(404).json("Post non trovato ")
  }
  //recupero le coppie chiave valore della richiesta passata attraverso il body
  const { title, content, tags } = req.body;

  //i dat i dei post da modificare
  post.title = title,
    post.content = content,
    post.tags = tags,

    res.json(post)
}

//modify
const modify = (req, res) => {
  res.send(`Modifica Parziale del post ${req.params.id}`)
}

//Delete
const destroy = (req, res) => {
  const id = parseInt(req.params.id);

  //utilizzo l'id per recuperare uno dei post con find
  const post = posts.find(item => item.id === id);

  //ultilizzo un messaggio di errore di post non trovato, non appena viene inserito un id che non esiste nella lista dei posts

  if (!post) {
    return res.status(404).json({ error: "Non trovato", message: "Post inesistente" })
  }
  posts.splice(posts.indexOf(post), 1);
  console.log(posts)
  res.sendStatus(204);
}

module.exports = {
  index,
  show,
  create,
  update,
  modify,
  destroy
}