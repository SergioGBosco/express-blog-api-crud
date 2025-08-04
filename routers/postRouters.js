// recupero express

const express = require(`express`)

//definisco il router

const router = express.Router();

//definisco le rotte

//index 
router.get(`/`, (req, res) => {
  res.send(`lista dei post`)
});
//show
router.get(`/:id`, (req, res) => {
  res.send(`Visualizzo il post con id ${req.params.id}`)
});
//Create
router.post(`/`, (req, res) => {
  res.send(`Creazione di un nuovo post`)
});

//update
router.put(`/:id`, (req, res) => {
  res.send(`Modifica totale del post ${req.params.id}`)
});

//modifica Parziale
router.patch(`/:id`, (req, res) => {
  res.send(`Modifica Parziale del post ${req.params.id}`)
});

//Cancellazzione
router.delete(`/:id`, (req, res) => {
  res.send(`Cancellazzione del post con id ${req.params.id}`)
})


module.exports = router