import { readFileSync, writeFileSync } from 'fs';

export const addDefault = (dataDir: string, quartzDir: string) => {
	let input: { [key: string]: Block } = JSON.parse(readFileSync(`${dataDir}/blocks.json`).toString());

	for (let block of Object.keys(input)) {
		for (let state of input[block].states) {
			if (state.default) input[block].default = state.id;
		}
	}

	writeFileSync(`${quartzDir}/src/assets/blocks.json`, JSON.stringify(input));
}

// Type definitions
type Block = {
	states: [State],
	default: number
}
type State = {
	id: number,
	default?: boolean
}