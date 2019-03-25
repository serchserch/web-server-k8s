const rc = require('rc')

module.exports = rc('webserver', {
  aws: {
    accessKeyId: process.env.AWS_KEY || 'KEY',
    secretAccessKey: process.env.AWS_SECRET || 'SECRET',
    region: process.env.AWS_REGION || 'us-west-2',
  },
  mongodb: process.env.MONGODB || '',
  message: process.env.MESSAGE || 'Hola!'
})
