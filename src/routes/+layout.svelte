<script>
	import '../app.css';
	
	let { children } = $props();


</script>

<nav class="flex flex-row items-center">
    <a class="nav-link" href="/">
        <img src="/monogram.png" alt="logo" style="max-width: 50px"/>
    </a>
    <a class="nav-link" href="/projects/montyHallSim">Monty Hall Sim</a>
    <a class="nav-link" href="/arcade/memoryCards">Memory Cards Game</a>
</nav>

<main class="main">
    {@render children()}
</main>


<!--<footer>
    <a href="https://www.linkedin.com/in/nazar-potapchuk-6b30641b6/" target="_blank" >LinkedIn</a>
    <a href="https://github.com/nazarpot" target="_blank" >GitHub</a>
    <img src="/octopus.png" alt="octopus" style="max-height: 100px"/>
    <a href="/contact">Contact Me</a>
</footer>-->
