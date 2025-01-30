const list = [
    { id: "1", group: "fruit", price: 30 },
    { id: "2", group: "vegitable", price: 45 },
    { id: "3", group: "fruit", price: 17 },
    { id: "4", group: "grocery", price: 1212 }
  ];
  
  const output = list.reduce((acc, item) => {
    // If the group already exists, add the price, otherwise initialize it
    acc[item.group] = (acc[item.group] || 0) + item.price;
    return acc;
  }, {});
  console.log(output)