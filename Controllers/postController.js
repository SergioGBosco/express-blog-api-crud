//importo i post
const posts = require(`../data/posts.js`);

//index
const index = (req, res) => {
  const tags = req.query.tags
  //creo la variabile per il filtraggio
  let filteredPost = posts;

  //pongo la condizione
  if (tags != undefined) {
    filteredPost = posts.filter(item => item.tags.includes(tags.toLowerCase()))
  }

  res.json(filteredPost);
}


//show
const show = (req, res) => {
  const id = parseInt(req.params.id);

  //utilizzo l'id per recuperare uno dei post con find
  const post = posts.find(item => item.id === id);
  res.json(post)
}

//create
const create = (req, res) => {
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
  res.send(`Cancellazzione del post con ${req.params.id}`)
}

module.exports = {
  index,
  show,
  create,
  update,
  modify,
  destroy
}