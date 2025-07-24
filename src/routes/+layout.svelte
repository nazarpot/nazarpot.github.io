<script>
	import '../app.css';
	
	let { children } = $props();
</script>

<nav>
    <a href="/">
        <img src="/logo.png" alt="logo" style="max-width: 50px"/>
    </a>
</nav>

{@render children()}
