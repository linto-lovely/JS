// "  hello world"
// Write a function

var word = ' hello world'
// 1.convert a given string to uppercase.
function toUpper(word){
    console.log('Upper case of the given word is: ',word.toUpperCase());
}
// 2.Find the Length of a String
function findLength(word){
    console.log('Length of the given word is: ',word.length);
}
// 3.check if the word "hello" exists in a given string.
function findWordExistance(word,wordToCheck){
    console.log('The word "hello" is in the given word: ',word.includes(wordToCheck,word));
}
// 4.Remove Extra Spaces
function removeExtraSpaces(word){
    console.log('Trimmed version of the given word: ',word.trim());
}
// 5.replace the word "world" with "World"
function replaceWord(word, wordToBeReplaced,wordToReplace){
    console.log('Replace the given word with another word and the result is: ',word.replace(wordToBeReplaced,wordToReplace));
}
// 6.Get the First Character of string
function getFirstCharacter(word){
    let wordSplit = word.split('')
    //console.log('The first character of the given word is: ',word.trim()[0]);
    console.log('The first character of the given word is: ',wordSplit[1]);
}
// 7.Convert first letter to upper case
function getFirstCharacterUpper(word){
    // let wordSplit = word.split('')
    console.log('The first character of the given word in upper case is: ',word.split('')[1].toUpperCase());
}

// 8.append "!!!" to the end of a given string.
function appendWordToString(word,wordToAppend){
    console.log('Result after appending is: ' + word + wordToAppend);
}

toUpper(word)
findLength(word)
findWordExistance(word,'hello')
removeExtraSpaces(word)
replaceWord(word,'world','World')
getFirstCharacter(word)
getFirstCharacterUpper(word)
appendWordToString(word,'!!!')