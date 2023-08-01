import { derived, writable, type Writable } from 'svelte/store';
import type { PathPluginMap } from './plugin';
import { defaultPlugins } from './default-plugins';

export type Plugin$ = Writable<PathPluginMap>

const _plugin$: Plugin$ = writable(defaultPlugins);
export const plugin$ = derived(_plugin$, p => p)

