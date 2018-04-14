const Game = require('./constructors/Game')
let wordBank = require('./data/wordbank').words
const node = require('./constructors/CLI').view


    function playGame(arr) {
        let game = Game(arr);
        game.loading();

        function recursion() {
            if (game.chosenWord().indexOf("_") === -1) return node.print("User, the jury finds you NOT GUILTY and you have WON YOUR FREEDOM! You are FREE to go!")
            if (game.isHanged()) return node.print("User, you have been found GUILTY for your crimes. The punishment is DEATH BY HANGING! Dare to play again?")
            return node.prompt()
                .then(function (data) {
                    return game.playRound(data.q1)
                }).then(currentWord => node.print(currentWord))
                .then(() => recursion())
        }
        recursion();
    }

playGame(wordBank);