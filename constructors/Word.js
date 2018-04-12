const Letter =require("./Letter");

module.exports = (string) => {
    // method
    const ltrArr = Array.from(string).map(ltr => Letter(ltr))
    
    const displayWord = () => ltrArr.map(ltr => ltr.getLetter()).join("")

    const checkChoice = (choice) => ltrArr.map(ltr => ltr.getMatch())

    return {
        displayWord: displayWord,
        checkChoice: checkChoice,
    }
}