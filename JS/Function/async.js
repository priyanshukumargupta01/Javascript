// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   });
// }



// async function showData() {
//   let result = await getData();
//   console.log(result);
// }

// showData();

async function getData() {
  try {
    let res = await Promise.reject("Error occurred");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

getData();