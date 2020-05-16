import { parsePackets } from './Packet';

// Info about the parser
let quartzDir = `${__dirname}/../../`;
let dataDir = `${__dirname}/../data`;
let version = 'v0.1.0';

// Handle command line args
let args = process.argv;
args.shift();
args.shift();

if(args.includes('-v') || args.includes('--version')) {
	console.log(`Pickaxe ${version}`);
	process.exit();
}
if(args.includes('-o') || args.includes('--outputDir') || args.includes('--quartzDir')) {
	let i = args.indexOf('-o') + 1 || args.indexOf('--outputDir') + 1 || args.indexOf('--quartzDir') + 1;
	quartzDir = args[i];
	if(!quartzDir.endsWith('/')) quartzDir += '/';
}

parsePackets(`${dataDir}/packet/`, quartzDir);