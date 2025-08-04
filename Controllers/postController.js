//importo i post
const posts = require(`../data/posts.js`);

//index
const index = (req, res) => {
  res.send(`lista dei post che devo cambiare`)
}

//show
const show = (req, res) => {
  res.send(`Visualizzo il post con id ${req.params.id}`)
}

//create
const create = (req, res) => {
  res.send(`Creazione di un nuovo post`)
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
  res.send(`Cancellazzione del post con id ${req.params.id}`)
}

module.exports = {
  index,
  show,
  create,
  update,
  modify,
  destroy
}