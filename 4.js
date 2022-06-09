let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt.556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031x56442",
  website: "hildegard.org",
};

let newData = {
  ...data,
  name: "Rahimatun Ni'mah",
  email: "rahimatunnimah@gmail.com",
  hobby: "listening to music",
};
console.log(newData);

const {
  address: { street, city },
} = data;
console.log(street);
console.log(city);
