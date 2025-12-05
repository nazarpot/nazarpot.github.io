<svelte:head>
    <title>Monty Hall Sim</title>
</svelte:head>

<script>
    import {simulateMontyHall} from "$lib/montyHall.js";

    function getSimulationResults() {
        let iterations = Number(document.querySelector('input[type=radio]:checked').value);
        console.log("iterations: " + iterations);

        let result = simulateMontyHall(iterations);
        console.log(result);

        let stayWinRate = (result[0]/iterations) * 100;
        let switchWinRate = (result[1]/iterations) * 100;

        document.getElementById("stay-win-rate").textContent = "\t" + String(stayWinRate.toFixed(2)) + "%";
        document.getElementById("switch-win-rate").textContent = "\t" + String(switchWinRate.toFixed(2)) + "%";

    }
</script>

<div
    class="flex m-8 justify-center flex-col">
    <div class="flex justify-center">
        <div
                class="m-4">
            <fieldset>
                <legend>Select number of iterations</legend>

                <input type="radio" id="ten" name="iterations" value="10"/>
                <label for="ten">10</label>

                <input type="radio" id="hundred" name="iterations" value="100"/>
                <label for="hundred">100</label>

                <input type="radio" id="thousand" name="iterations" value="1000"/>
                <label for="thousand">1000</label>
            </fieldset>

            <button type="button" id="submit-iterations" on:click={getSimulationResults}>Run Simulation</button>
        </div>

        <div
                class="m-4">
            <h1>Results</h1>

            <div class="flex">
                <h3>Stay Win Rate:</h3>
                <p id="stay-win-rate" class="ml-8"></p>
            </div>

            <div class="flex">
                <h3>Switch Win Rate:</h3>
                <p id="switch-win-rate" class="ml-4"></p>
            </div>

        </div>
    </div>

    <div>
        <h2>Explanation</h2>
        <p>I made this in order to help see if one does indeed have a better chance of winning in the
            Monty Hall Problem by switching than by staying. While creating this program, I realized why one has a
            a higher chance when switching. Here is an explanation:

            When initially choosing a door, you have a 33% chance of choosing the door with the prize.
            That means majority of the time(66%) you will choose a door without the prize. When
            choosing a door with the prize and when you're offered to switch, you will always get the prize.
            You simply lose 33% of the time because you initially chose the correct door. Hope this helps!</p>
    </div>

</div>




