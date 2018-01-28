/*
* @Author: perry
* @Date:   2018-01-28 15:06:45
* @Last Modified by:   perry
* @Last Modified time: 2018-01-28 18:34:38
*/
const svgCaptcha = require('svg-captcha');
// const jsonFormatter = require('utils')


exports.getCaptcha = function (req,res) {
	const captcha = svgCaptcha.create({width:116, height:44});

    return res.status(200).send({res:captcha,msg:'',error:'',code:200,status:true});
}