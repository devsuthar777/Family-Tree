const express = require('express');
const router = express.Router();

const {createPerson,updatePerson,deletePerson,getAllPerson} = require('../../controllers/personControllers/crudPerson');
const {validationOnCreatePerson} = require("../../middlewares/PersonMiddleware/person");

router.post('/createPerson',validationOnCreatePerson,createPerson);
router.post('/updatePerson',updatePerson);
router.post('/deletePerson',deletePerson);
router.get('/getAllPerson',getAllPerson)



module.exports = router; 