import type { PathPluginMap, Plugin } from "./plugin"

const defaults: Plugin[] = [
	// {name: "Employees", path: "employees", src:"http://localhost:52952/employees.js", },
	// {name: "Admins", path: "admins", src:"http://localhost:53173/admins.js", },
	{name: "Employees", path: "employees", src:"https://trusz.github.io/poc_dynamic_views_employees/employees.js", },
	{name: "Admins", path: "admins", src:"https://trusz.github.io/poc_dynamic_views_admins/admins.js", },
] 

const m: PathPluginMap = new Map()

defaults.forEach(p => m.set(p.path, p))


export const defaultPlugins = m