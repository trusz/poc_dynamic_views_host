<script lang="ts">
	import { page } from '$app/stores';
	import { assets, base } from '$app/paths';
	import { plugin$, type Plugin } from "$lib/plugins"
    import { EmployeeProvider } from "$lib/providers/employee-provider"

	$: console.log({level:"dev", assets, base})	

	$: url = new URL($page.url) 
	$: paths = url.pathname
		.replace(base,"")
		.split("/")
		.filter(Boolean)
	$: viewPath = paths[0]
	$: plugin = $plugin$.get(viewPath)

	let viewRoot: HTMLDivElement | undefined = undefined
	$: (async function (plugin?: Plugin){
		if(!plugin) { return }
		if(!viewRoot) { return }

		viewRoot.innerHTML = ""
		const result = await import(/* @vite-ignore */ plugin.src)
		const initFn = result.default
		initFn()
		console.log({
			level:"dev", 
			message: "loading plugin", 
			plugin, result, 
			default: result.default,
		})

	})(plugin)


</script>

<EmployeeProvider />

<main>
<p>
you are viewing:
</p>

<p>
	<code>
	<pre>
 url: {url}
path: {paths}
	</pre>
	</code>
</p>

<p>
plugin:
</p>

<p>
	<code>
	<pre>
 name: {plugin?.name}
 path: {plugin?.path}
  src: {plugin?.src}
	</pre>
	</code>
</p>

<hr />

<h5>View's Content:</h5>
<div id="view-root" bind:this={viewRoot}>
</div>
</main>

<style>
	main{

	}
</style>