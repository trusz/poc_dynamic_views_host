<script lang="ts">
	import { page } from '$app/stores';
	import { plugin$, type Plugin } from "$lib/plugins"


	$: url = new URL($page.url) 
	$: paths = url.pathname.split("/").filter(Boolean)
	$: viewPath = paths[0]
	$: plugin = $plugin$.get(viewPath)

	$: (async function (plugin?: Plugin){
		if(!plugin) { return }

		const result = await import(plugin.src)
		console.log({level:"dev", message: "loading plugin", plugin, result})

	})(plugin)


</script>

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

<div id="view-root" >
	No View Loaded
</div>