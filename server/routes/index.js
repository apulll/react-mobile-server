/*
* @Author: perry
* @Date:   2018-01-28 15:05:26
* @Last Modified by:   perry
* @Last Modified time: 2018-01-28 15:18:55
*/
const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/getCaptcha', controller.getCaptcha);


module.exports = router;