<script>
    //export let imageSrc;
    //let matched = false;
    //export let flipped = true;
    let {id, imageSrc, matched = false, flipped = $bindable(), checking = $bindable()} = $props();

    // card is clicked
    function flip() {
        if (!checking) {
            flipped = true;
        }
    }
</script>

<button id={id} class="card" onclick={flip} aria-label="card">
    {#if flipped}
        <img src={imageSrc} alt="memory card"/>
    {:else}
        <div class="back"></div>
    {/if}
</button>

<style>
    .card {
        width: 90px;
        height: 120px;

        margin: 1em 1em;
        border: 5px solid var(--color-flame);
        border-radius: 10px;
        color: var(--color-flame);
        background-color: white;
        cursor: pointer;

        display: flex;
    }

    .back {
        background-color:white;
    }
</style>