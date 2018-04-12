const Word =require("./Word");

module.exports = (arr) => {
    let state = {
        maxGuess: 8,
        guesses: 0,
        word: "",
        
    }

    // gets
    const getWord = () => state.word
    
    // sets
    const setWord = (value) => state.word = value

    // methods
    const randomizeIndex = (arr) => Math.floor(Math.random() * arr.length)

    const randomElement = (arr) => arr[randomizeIndex(arr)]

    const getDisplayedWord = () => getWord().displayWord()

    const updateLtrStates = () => getWord().checkChoice()

    const loading = () => {
        const randomWord = randomElement(arr)
        const newWord = word(randomWord)
        setWord(newWord);
    }

    const playRound = (choice) => {
        updateLtrStates(choice)
        return getDisplayedWord()
    }

    return {
        loading: loading,
        playRound: playRound,
    }
}