const arr = [
    { name: "A", class: 5 },
    { name: "B", class: 6 },
    { name: "C", class: 6 },
    { name: "D", class: 5 },
];

const grouped = arr.reduce((acc, curr) => {
    // Check if the class already exists in the accumulator
    let existingGroup = acc.find(group => group.class === curr.class);
    if (existingGroup) {
        // Add the name to the existing group
        existingGroup.name.push(curr.name);
    } else {
        // Create a new group
        acc.push({ class: curr.class, name: [curr.name] });
    }
    return acc;
}, []);

console.log(grouped);
