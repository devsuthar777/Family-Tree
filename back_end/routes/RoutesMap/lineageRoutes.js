const express = require('express');
const router =  express.Router();

const {createLineage,updateLineage,deleteLineage,getAllLineage}= require('../../controllers/lineageControllers/crudLineage');

router.post('/createLineage',createLineage);
router.post('/updateLineage',updateLineage);
router.post('/deleteLineage',deleteLineage);
router.get('/getAllLineage',getAllLineage);

module.exports = router;