const getFlagValues = require('./getFlag')

console.log(`Oi ${getFlagValues('--name')}. ${getFlagValues('--greeting')}`)
