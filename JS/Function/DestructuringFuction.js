// function userInfo({ name, age }) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }

// const user = {
//   name: "Priyanshu",
//   age: 20
// };

// userInfo(user);

 


function getUsers({ data: { users } }) {
  console.log(users);
}

const response = {
  data: {
    users: ["A", "B", "C"]
  }
};

getUsers(response);


function printNumbers([a, b, c]) {
  console.log(a, b, c);
}

printNumbers([10, 20, 30]);