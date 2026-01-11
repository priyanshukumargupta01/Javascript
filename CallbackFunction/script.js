console.log("happu");

setTimeout(() => {
  console.log("I'm inside timeout");
}, 0);

console.log("pappu");

const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;

  // call callback AFTER script is loaded
  sc.onload = () => {
    callback("harry");
  };

  document.head.append(sc);
};

// example script URL
loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
  callback
);
