const express = require('express');
const router = express.Router();

const {createPerson,updatePerson,deletePerson,getAllPerson} = require('../../controllers/personControllers/crudPerson');
const {validationOnCreatePerson, validationOnUpdatePerson} = require("../../middlewares/PersonMiddleware/person");
const { getPersonDetails } = require('../../controllers/personControllers/getPersonDetails');

router.post('/createPerson',validationOnCreatePerson,createPerson);
router.patch('/updatePerson',validationOnUpdatePerson,updatePerson);
router.delete('/deletePerson',deletePerson);
router.get('/getAllPerson',getAllPerson)
router.get('/fetchPersonDetails/:id',getPersonDetails);



module.exports = router; 