const data = [
    { value: "ABC", Label: "ABC" },
    { value: "ABC", Label: "ABC" },
    { value: "DEF", Label: "ABC" },
    { value: "XYZ", Label: "ABC" },
    { value: "DEF", Label: "ABC" },
  ];
  
  const uniqueData = data.filter((item, index, self) => {
    // console.log("Item:", item);
    // console.log("Index:", index);
    // console.log("Self:", self);
    return index === self.findIndex((t) => t.value === item.value);
  });

  console.log(uniqueData)
  
  const seen = new Set();

const uniqueDataBetterway = data.filter(item => {
  if (seen.has(item.value)) return false;
  seen.add(item.value);
  return true;
});

console.log(uniqueDataBetterway);
