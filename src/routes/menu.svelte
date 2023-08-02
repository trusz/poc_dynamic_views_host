<script lang="ts">
	import { base } from '$app/paths';
	import { plugin$ } from "$lib/plugins"
    import { SideNavItems, SideNavLink } from "carbon-components-svelte";


	$: console.log({level:"dev", message: "menu.svelte", $plugin$})

</script>

<SideNavItems>
	{#each $plugin$ as [_, plugin]}
		<SideNavLink text="{plugin.name}" href="{`${base}/${plugin.path}`}" />
	{/each}
</SideNavItems>