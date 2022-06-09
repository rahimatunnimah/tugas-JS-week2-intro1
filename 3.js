const printSegitiga = (height) => {
  if (typeof height != "number") {
    console.log("Data harus number");
    return;
  }
  let s = "";
  for (let i = height; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      s += `${j}`;
    }
    if (i !== 1) {
      s += "\n";
    }
  }
  console.log(s);
};
printSegitiga(5);
