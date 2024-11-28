const express = require('express');
const router = express.Router();

const lineageRoutes = require('./RoutesMap/lineageRoutes');
const personRoutes  = require("./RoutesMap/personRoutes");
const villageRoutes = require("./RoutesMap/villageRoutes");

//router.use('/users',userRoutes);

router.use('/person',personRoutes);

router.use('/village',villageRoutes);

router.use('/lineage',lineageRoutes);

//router.use('/marrriage',marriageRoutes);

//router.use('/maternal',maternalRoutes);

module.exports = router;