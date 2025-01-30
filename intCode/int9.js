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
  