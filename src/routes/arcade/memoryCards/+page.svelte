<script>
    import Card from './card.svelte';

    const imageModule = import.meta.glob('/src/lib/images/memoryCard/*.svg', {eager: true});
    const images = Object.values(imageModule).map(mod => mod.default);

    let cards = $state([]);
    let matchedCardsNum = 0;
    let isChecking = $state(false);
    let columns;
    let flippedCards = [];

    function getNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function startGame() {
        //reset cards
        cards.length = 0;
        matchedCardsNum = 0;

        let difficulty = Number(document.querySelector('input[type=radio]:checked').value);

        cards.length = difficulty;

        //make cards
        let imagesSelected = []
        for (let i = 0; i < difficulty; i = i + 2) {
            let num = getNumber(0, images.length);
            let repeated = true;
            while (repeated) {
                if (imagesSelected.indexOf(num) === -1) {
                    repeated = false;
                } else {
                    num = getNumber(0, images.length);
                }
            }
            imagesSelected.push(num);

            while (true) {
                let num1 = getNumber(0, cards.length);
                if (cards[num1] === undefined) {
                    cards[num1] = {id: i, src: images[num], flipped: false};
                    break;
                }
            }
            while (true) {
                let num2 = getNumber(0, cards.length);
                if (cards[num2] === undefined) {
                    cards[num2] = {id: i + 1, src: images[num], flipped: false};
                    break;
                }
            }
        }

        //set up columns
        switch (difficulty) {
            case 10:
                columns = 5;
                break;
            case 16:
                columns = 4;
                break;
            case 24:
                columns = 6;
                break;
            case 36:
                columns = 9;
        }
        document.documentElement.style.setProperty('--columns', columns);

        //set-up component visibility for game
        document.getElementById("game-modes").style.display = "none";
        document.getElementById("game-messages").style.display = "block";
    }

    function checkCards() {
        console.log('checking cards');
        flippedCards = cards.filter(card => card.flipped);

        if (flippedCards.length === 2) {
            isChecking = true;
            if (flippedCards[0].src === flippedCards[1].src) {
                setTimeout(() => {
                    console.log("matched!");
                    console.log(flippedCards[0].id);
                    document.getElementById(flippedCards[0].id).style.visibility = 'hidden';
                    document.getElementById(flippedCards[1].id).style.visibility = 'hidden';
                    flippedCards[0].flipped = false;
                    flippedCards[1].flipped = false;
                    matchedCardsNum += 2;

                    if (matchedCardsNum === cards.length) {
                        document.getElementById("win-message").style.visibility = "visible";
                    }
                    isChecking = false;
                }, 1000);
            } else {
                setTimeout(() => {
                    console.log('wrong');
                    flippedCards[0].flipped = false;
                    flippedCards[1].flipped = false;
                    isChecking = false;
                }, 1000);
            }
        }
    }

    function restart() {
        cards.length = 0;
        document.getElementById("game-modes").style.display = "flex";
        document.getElementById("game-messages").style.display = "none";
        document.getElementById("win-message").style.visibility = "hidden";
    }

    $effect(() =>  checkCards() );

</script>

<div class="inline">
    <div class="flex justify-center">
        <div id="game-modes" class="m-4 flex items-center justify-center flex-col">
            <fieldset>
                <legend>Select Difficulty</legend>

                <input type="radio" id="easy" name="difficulty" value="10">
                <label for="easy">Easy</label>

                <input type="radio" id="medium" name="difficulty" value="16">
                <label for="medium">Medium</label>

                <input type="radio" id="hard" name="difficulty" value="24">
                <label for="hard">Hard</label>

                <input type="radio" id="expert" name="difficulty" value="36">
                <label for="expert">Expert</label>
            </fieldset>
            <button type="button" id="submit-difficulty" onclick={startGame}>Start Game</button>
        </div>
        <div id="game-messages" class="p-10">
            <button type="button" onclick={restart}>New Game</button>
            <h1 id="win-message" class="text-xl">You won</h1>
        </div>
    </div>
    <div class="flex justify-center">
        <div id="memory-card-grid">
            {#each cards as card}
                <Card id={card.id} imageSrc={card.src}
                      bind:flipped={card.flipped} bind:checking={isChecking}
                />
            {/each}
        </div>
    </div>

</div>


<style>
    :root {
        --columns: 5;
    }

    #memory-card-grid {
        max-width: 80%;
        display: grid;
        grid-template-columns: repeat(var(--columns), 1fr);
        gap: 1px;


    }

    #game-messages {
        display: none;
    }

    h1 {
        color: var(--color-roseda);
        visibility: hidden;
        margin: 0.5rem;
    }

    button {
        padding: 0.5rem;
        background-color: var(--color-myrtle);
        border-radius: 0.5rem;

    }


</style>