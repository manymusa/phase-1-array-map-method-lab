const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let arrayTitleCase = tutorials.map(string=> 
    string.split(' ').map(words=> 
      words.charAt(0).toUpperCase() + words.slice(1)));
  let stringsTitleCase = arrayTitleCase.map(arr=> arr.join(' '));
  for(let i =0; i<tutorials.length ; i++){
    tutorials[i] = stringsTitleCase[i];
  }
  return tutorials
}
