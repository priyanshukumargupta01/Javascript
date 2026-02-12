/*  directly in js using DOM
let h2 = document.createElement("h1")
h2.innerHTML= "hihihihihiii"
document.querySelector("#root").append(h2)
console.dir(h2)
*/

const h2 = React.createElement(
  'h2' , 
  {
    className :  "subHeading",id :"container"},
    [
    React.createElement("section",{},[
      React.createElement( 
      "p",
      {},
       "Hello react"
      )
    ])
  ]
   )

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h2);
 