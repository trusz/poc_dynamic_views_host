import type { PathPluginMap, Plugin } from "./plugin"

const defaults: Plugin[] = [
	{name: "_Employees", path: "employees", src:"http://localhost:52952/employees.js", },
	{name: "_Admins", path: "admins", src:"http://localhost:53173/leads.js", },
] 

const m: PathPluginMap = new Map()

defaults.forEach(p => m.set(p.path, p))


export const defaultPlugins = m