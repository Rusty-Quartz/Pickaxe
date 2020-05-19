import { readFileSync, writeFileSync } from 'fs';

export const addDefault = (dataDir: string, quartzDir: string) => {
	let input: { [key: string]: Block } = JSON.parse(readFileSync(`${dataDir}/blocks.json`).toString());
	let output: { [key: string]: OutputBlock } = <{ [key: string]: OutputBlock }>input;
	
	for(let block of Object.keys(output)) {
		for(let state of output[block].states) {
			if(state.default) output[block].default = state.id;
		}
	}

	writeFileSync(`${quartzDir}/src/assets/blocks_default.json`, JSON.stringify(output));
}

// Type definitions
type Block = {
	states: [State],
	properties?: PropertyDef
}
type OutputBlock = {
	states: [State],
	properties?: PropertyDef,
	default: number
}

type State = {
	properties: Properties
	id: number,
	default?: boolean
}

type Properties = { [key: string]: string }
type PropertyDef = { [key: string]: [string] }