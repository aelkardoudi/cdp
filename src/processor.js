module.exports = (data, parsedArguments) => {
    return data.map(country => {
        let animalCounter = 0;
        const people = country.people.map(people => {
            // Filter animals based on parsedArguments.filterOn
            const animals = people.animals.filter(animal => animal.name.includes(parsedArguments.filterOn));
            if (parsedArguments.count) {
                // Increment animalCounter by the number of animals in the current person
                animalCounter += animals.length;
                return {
                    name: `${people.name} [${animals.length}]`,
                    animals
                };
                }
             // Return a new object with the filtered animals
            return Object.assign({}, people, {animals});
        }).filter(({ animals }) => animals.length !== 0);
        if (parsedArguments.count) {
            // Return a new object with the filtered people and the animalCounter
            return {
                people,
                name: `${country.name} [${animalCounter}]`
            };
            }
         // Return a new object with the filtered people
        return Object.assign({}, country, {people});
    }).filter(({ people }) => people.length !== 0);
}