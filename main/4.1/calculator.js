const yargs = require('yargs');

let res = 0;
yargs.command({
	command: 'add',
	describe: 'add operator',
	handler: function (argv) {
		console.log(argv, 'adding operator');
		res = argv.secondArg + argv.firstArg;
	},
});
yargs.command({
	command: 'sub',
	describe: 'sub operator',
	handler: function (argv) {
		console.log(argv, 'substruct operator');
		res = argv.firstArg - argv.secondArg;
	},
});
yargs.command({
	command: 'mult',
	describe: 'mult operator',
	handler: function (argv) {
		console.log(argv, 'multiple operator');
		res = argv.firstArg * argv.secondArg;
	},
});
yargs.command({
	command: 'pow',
	describe: 'pow operator',
	handler: function (argv) {
		console.log(argv, 'power operator');
		res = Math.pow(argv.firstArg, argv.secondArg);
	},
});
console.log(yargs.argv);
console.log(res);
