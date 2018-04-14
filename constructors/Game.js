const Word = require("./Word");

module.exports = (arr) => {
    let state = {
        maxGuess: 8,
        guesses: 0,
        word: "",

    }

    // gets
    const getWord = () => state.word
    const getGuesses = () => state.guesses
    const getMaxGuesses = () => state.maxGuess

    // sets
    const setWord = (value) => state.word = value
    const setGuesses = () => state.guesses += 1

    // methods
    const randomizeIndex = (arr) => Math.floor(Math.random() * arr.length)

    const randomElement = (arr) => arr[randomizeIndex(arr)]

    const getDisplayedWord = () => getWord().displayWord()

    const updateLtrStates = (choice) => getWord().checkChoice(choice)

    const loading = () => {
        const randomWord = randomElement(arr)
        const newWord = Word(randomWord)
        setWord(newWord);
    }

    const playRound = (choice) => {
        updateLtrStates(choice)
        setGuesses()
        return getWord().displayWord()
    }

    function isHanged() {
        return getGuesses() === getMaxGuesses()
    }

    return {
        loading: loading,
        playRound: playRound,
        chosenWord: getDisplayedWord,
        isHanged: isHanged,
    }
}