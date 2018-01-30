/*
* @Author: perry
* @Date:   2018-01-26 11:09:36
* @Last Modified by:   perry
* @Last Modified time: 2018-01-30 14:03:11
*/
const cookieParser = require('cookie-parser');
const fetch = require('../utils/fetch');

module.exports = function(app) {
	app.use(cookieParser())

	async function getAccessToken(req, res, next){
		const newData = await fetch({
						url:`http://oauth.dev.mila66.com/oauth/access_token`,
						data:{
							grant_type : 'client_credentials',
							client_id : 100013,
							client_secret : admin123,
						}
					})
		if(newData){

		}
	}

	const auth = async function(req, res, next){

	}
	return auth
}
