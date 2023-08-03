<script lang="ts">
	import { base } from '$app/paths';
	import { page } from "$app/stores"
	import { plugin$ } from "$lib/plugins"
    import { SideNavItems, SideNavLink } from "carbon-components-svelte";

	$: url = new URL($page.url) 
	$: paths = url.pathname
		.replace(base,"")
		.split("/")
		.filter(Boolean)
	$: viewPath = paths[0]

</script>

<SideNavItems>
	<SideNavLink text="Home" href="{base}" isSelected="{!viewPath}"/>
	{#each $plugin$ as [_, plugin]}
		<SideNavLink 
			text="{plugin.name}" 
			href="{`${base}/${plugin.path}`}"
			isSelected="{plugin.path === viewPath}"
		/>
	{/each}
</SideNavItems>