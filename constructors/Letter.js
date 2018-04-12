module.exports = (char) => {
    let state={
        guess: false, //characters not guess yet
        value: char,
        filler: "_",
    }
    // gets
    const getGuess = () =>state.guess
    const getValue = () =>state.value
    const getFiller = () =>state.filler

    // sets
    const setGuess=(value)=>state.guess=value
   
    // methods - If return is true get value, if false get filler.
    const getLetter = () =>
        getGuess() ? getValue() : getFiller()

    const getMatch = (choice) =>
    choice === getValue() ? setGuess(true) : ''

    return {
        getLetter: getLetter,
        getMatch: getMatch,
    }
}