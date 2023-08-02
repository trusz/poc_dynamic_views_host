<script>
	import { UnorderedList, ListItem } from "carbon-components-svelte";
	import { assets, base } from '$app/paths';
</script>

<h1>Dynamic Views</h1>
<q>A POC to demonstrate a micro-frontend architecture</q>

<br />
<br />

<h2>What is this Demo?</h2>

<UnorderedList>
	<ListItem>A demo of a micro-frontend architecture</ListItem>
	<ListItem>It is a proof of concept to demonstrate how to dynamically load views from an external source</ListItem>
	<ListItem>Each view is a self-contained app that are loaded dynamically</ListItem>
</UnorderedList>

<br />
<br />

<h2>Architecture</h2>

<p>
	The host app defines how a plugin looks like.<br />
	
</p>

<p>
	Currently it needs to be an esmodule and its default export has to be
	an <code>init()</code> function. <br />
	The plugins can use <code>div[id="view-root"]</code> as their root element.
	Every time we navigate to a new view we clear this element and load the defined
	plugin and execute its <code>init()</code> function.
	The plugins can use any technology until they can attache themselves to the
	the <code>div[id="view-root"]</code> element.
</p>

<p>
	The plugins are cached so in case the plugin's host is offline we still 
	can use the last version we loaded. <br />
	
</p>

<h2>Example</h2>

<p>In this demo we have two views:</p>

<UnorderedList>
	<ListItem>Employees: displays all employees and can turn them into admins</ListItem>
	<ListItem>Admins: display only the employees that are admins</ListItem>
</UnorderedList>

<p>
	We persist a few users in the local storage and we use them as our employees
	to show that different plugins can have access to the same data source and 
	that they are really part of the same website.
</p>

<img 
	src={`${assets}/architecture.svg`} 
	alt="architecture" 
	width="50%"
/>

<p>
	If you navigate to the <code>/employees</code> through the menu or through the url
	the host will fetch the the employee plugin and execute its <code>init()</code> function
</p>

<img 
	src={`${assets}/nav_1.svg`} 
	alt="architecture" 
	width="50%"
/>

<p>
	If you navigate to the <code>/admins</code> through the menu or through the url
	the host will fetch the the admin plugin and execute its <code>init()</code> function
</p>

<img 
	src={`${assets}/nav_2.svg`} 
	alt="architecture" 
	width="50%"
/>


<hr />

<h2>Links</h2>

<UnorderedList>
	<ListItem>Repo of the Host app: <a target="_blank" href="https://github.com/trusz/poc_dynmic_views_host">poc_dynmic_views_host</a> </ListItem>
	<ListItem>Repo of the Admins plugin: <a target="_blank" href="https://github.com/trusz/poc_dynmic_views_admins">poc_dynmic_views_admins</a> </ListItem>
	<ListItem>Repo of the Employees plugin: <a target="_blank" href="https://github.com/trusz/poc_dynmic_views_employees">poc_dynmic_views_employees</a> </ListItem>
</UnorderedList>



<p>

</p>

<style>
	p{
		margin: 1rem 0;
	}
</style>
