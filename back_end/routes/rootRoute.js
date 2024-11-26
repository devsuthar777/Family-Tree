const express = require('express');
const router = express.Router();


router.use('/users',userRoutes);

router.use('/person',personRoute);

router.use('/village',villageRoutes);

router.use('/lineage',lineageRoutes);

module.exports = router;