const express = require('express');
const router = express.Router();

const lineageRoutes = require('./RoutesMap/lineageRoutes');

//router.use('/users',userRoutes);

router.use('/person',personRoute);

//router.use('/native',nativeRoutes);

router.use('/lineage',lineageRoutes);

//router.use('/marrriage',marriageRoutes);

//router.use('/maternal',maternalRoutes);

module.exports = router;