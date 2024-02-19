<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";
</script>



<Router>
	<nav>
		<Link to='/'>Home</Link>
		<Link to='/about'>About</Link>
	</nav>

	<p>뭐지;;;</p>

	<Route path='/' component={Home} />
	<Route path='/about' component={About} />
</Router>