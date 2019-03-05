function transl33t(originalString) {
    const leetDictionary = {
        // Keys are strings, just like in python
        // But in JS, quotes are optional
        A:  4,
        E:  3,
        G:  6,
        I:  1,
        O:  0,
        S:  5,
        T:  7,    
    };
    let result = '';

    // loop through each letter in originalString
    // if it's in the dictionary, and if it is
    // put its value in `result`
    for (let i = 0; i < originalString.length; i++){
        let theLetter = originalString[i].toUpperCase();
        // console.log(theLetter);
        // console.log(leetDictionary[theLetter]);
        if (leetDictionary[theLetter] !== undefined) {
            result += leetDictionary[theLetter];
        } else {
            // if it's not, just copy the letter into `result`
            result += theLetter;
        }
    }

    return result;
}

const addressBook = {
    DigitalCrafts: {
        phone: '404-123-1234', 
        address: '3423 Piedmont', 
        city: 'Atlanta',
    },
    "Chris Aquino": {
        phone: '404-999-1234', 
        address: '3421 Piedmont', 
        city: 'Atlanta',
    },
};



function prettyPrintAddressBook(book) {
    // grab all the keys
    const allTheKeys = Object.keys(book);

    // using each key, look up the entry
    allTheKeys.forEach(function (stringKey) {
        // look up stringKey in book
        let entry = book[stringKey];
        // print the entry
        console.log(stringKey);
        console.log(entry);
    });
}

function prettyPrintItemInAddressBook(book, item) {
    // grab all the keys
    const allTheKeys = Object.keys(book);

    // using each key, look up the entry
    allTheKeys.forEach(function (stringKey) {
        // look up stringKey in book
        let entry = book[stringKey];
        // print the entry
        // console.log(item);
        // debugger;
        console.log(entry[item]);
    });
}

function callAnotherFunction(jeff) {
    let msg = jeff();
    console.log(`Your message said: ${msg}`);
}

function returnWoof() {
    return "woof";
}

function returnMeow() {
    return "meow";
}

callAnotherFunction(returnWoof);
callAnotherFunction(function () {
    return "chirp";
});