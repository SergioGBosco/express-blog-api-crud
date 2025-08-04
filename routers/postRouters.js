// recupero express

const express = require(`express`)

//definisco il router

const router = express.Router();

//importo il controller
const postController = require(`../controllers/postController.js`)

//definisco le rotte

//index 
router.get(`/`, postController.index);
//show
router.get(`/:id`, postController.show);
//Create
router.post(`/`, postController.create);

//update
router.put(`/:id`, postController.update);

//modifica Parziale
router.patch(`/:id`, postController.modify);

//Cancellazzione
router.delete(`/:id`, postController.destroy)


module.exports = router