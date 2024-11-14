const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const wordCount = content.split(" ");
const regex = /React/ig;
const reactWordCount = wordCount.filter( word => word.match(regex) );

console.log( 'Palabras:', reactWordCount.length );