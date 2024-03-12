// ecosystem.config.js

module.exports = {
	apps: [
		{
			name: 'brc_deploy_server',
			script: './.output/server/index.mjs',
			env: {},
			port: '9005',
			exec_mode: 'cluster',
			instances: 'max',
			env: {
				DB_HOST: mysql.buffalorugby.org,
				DB_USER: rastridge,
				DB_PASSWORD: a1s2d3f4,
				DB_DATABASE: buffalorugby,

				TO: 'ron.astridge@icloud.com',
				TO_FLAG: 'lexmaccubbin@yahoo.com',
				FROM: 'secretary@buffalorugby.org',
				FROM_NAME: BUFFALO_RUGBY_CLUB,
				EE_USERNAME: 'secretary@buffalorugby.org',
				EE_API_KEY:
					C097AD82F43370EECD358E09B424D17FF8104D1607F800C3CECBAAA7A30071F3BD36C7DC5E59652FE0F68522CA160AF8,

				TWILIO_NUMBER: +17169954691,
				TWILIO_ACCOUNT_SID: ACa186c5ef78d7b7e0fca8fdb19189deb7,
				TWILIO_AUTH_TOKEN: fabb9c1dfd6e0ddf37f453af6077036d,

				API_SECRET: ronaldfastridgejr,

				SEASON_DIVIDE_DATE: '-07-25',

				TITLE: 'Buffalo Rugby Club',

				GOOGLE_ANALYTICS_ID: 'G-ZP8342GYFQ',
			},
		},
	],
}
