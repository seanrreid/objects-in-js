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
    
};