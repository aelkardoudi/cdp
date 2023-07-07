const {data} = require('./src/data');
const processor = require('./src/processor');


const parsedArguments = require('./src/parseArguments')(process.argv);

console.log('input >', parsedArguments);

const result = processor(data, parsedArguments);
console.log('output >', JSON.stringify(result, null, 2));