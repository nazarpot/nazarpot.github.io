<svelte:head>
    <title>DJ Toad</title>
</svelte:head>


<button id="play">play</button>
<button id="stop">stop</button>

<script>
    import { onMount } from 'svelte';
    //import { initStrudel } from '@strudel/web';

    //initStrudel();
    onMount(() => {
        document.getElementById('play').addEventListener('click', () => note('<c a f e>(3,8)').jux(rev).play());
        document.getElementById('stop').addEventListener('click', () => hush());
    })

</script>