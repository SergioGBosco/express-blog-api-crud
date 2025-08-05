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
  console.log(req.body);
  res.send(`Creazione di un nuovo post `)
}

//update
const update = (req, res) => {
  res.send(`Modifica totale del post ${req.params.id}`)
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