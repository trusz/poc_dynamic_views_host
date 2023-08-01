import type { PathPluginMap, Plugin } from "./plugin"

const defaults: Plugin[] = [
	{name: "News", path: "news", src:"http://localhost:52952/index.js", },
	{name: "Domains", path: "domains", src:"http://localhost:52952/index.js", },
	{name: "Domain Services", path: "domain-services", src:"http://localhost:52952/index.js", },
	{name: "Projects", path: "projects", src:"http://localhost:52952/index.js", },
	{name: "Leads", path: "leads", src:"http://localhost:52952/index.js", },
	{name: "Time Tracking", path: "time-tracking", src:"http://localhost:52952/index.js", },
	{name: "Absence", path: "absence", src:"http://localhost:52952/index.js", },
	{name: "Bulleting Board", path: "bulletin-board", src:"http://localhost:52952/index.js", },
] 

const m: PathPluginMap = new Map()

defaults.forEach(p => m.set(p.path, p))


export const defaultPlugins = m