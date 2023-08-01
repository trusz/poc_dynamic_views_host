<script lang="ts">
	import { plugin$ } from "$lib/plugins"
    import { SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem } from "carbon-components-svelte";


	$: console.log({level:"dev", message: "menu.svelte", $plugin$})

</script>

<SideNavItems>
	{#each $plugin$ as [_, plugin]}
		<SideNavLink text="{plugin.name}" href="/{plugin.path}" />
	{/each}
</SideNavItems>