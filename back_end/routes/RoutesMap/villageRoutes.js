const express = require("express");
const router= express.Router();

const {createVillage,updateVillage,deleteVillage,getAllVillages} = require('../../controllers/villageController.js/crudVillage')

router.post("/createVillage",createVillage);
router.post("/updateVillage",updateVillage);
router.post("/deleteVillage",deleteVillage);
router.post("/getAllVillages",getAllVillages);

module.exports =  router;