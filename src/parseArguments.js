module.exports = (argv) => {
    let parsedArguments = {
        count: false,
        filterOn: '',
    };
    // Early exit If there are no additional arguments, return the parsed arguments object as is
    if (argv.length === 2) {
        return parsedArguments;
    }
    // Loop through the additional arguments
    for (let index = 2; index < argv.length; index++) {
        const argument = argv[index].split('=');
        // Check if the argument is for filtering
        if (argument[0] === '--filter') {
            parsedArguments.filterOn = argument[1];
        } else if (argument[0] === '--count') { // Check if the argument is for counting
            parsedArguments.count = true;
        }
    }
    return parsedArguments;
};