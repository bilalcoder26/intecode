const arr = [
    { name: "A", class: 5 },
    { name: "B", class: 6 },
    { name: "C", class: 6 },
    { name: "D", class: 5 },
];
//correct logic but it is ineffienct use of find methode here make it uneffienct ---> vis using o(n2)
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
// const arr = [
//   { name: "A", class: 5 },
//   { name: "B", class: 6 },
//   { name: "C", class: 6 },
//   { name: "D", class: 5 },
// ];


//better way to handle this using map more optimized
const map = new Map();

arr.forEach(item => {
  if (!map.has(item.class)) {
    map.set(item.class, {
      class: item.class,
      name: []
    });
  }
  map.get(item.class).name.push(item.name);
});

const result = Array.from(map.values());

console.log(result);

