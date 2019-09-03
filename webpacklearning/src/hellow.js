// const data = require('./msg.json');
import data from "./msg.json"
import base from "./css/cssmo.css"

// module.exports = function hello (){
//     var divs = document.createElement("div")
//     console.log(data.msg)
//     divs.innerText = data.msg
//     document.querySelector("body").appendChild(divs);
// }

export function hello (){
    var divs = document.createElement("div")
    console.log(data.msg)
    divs.innerText = data.msg
    divs.className = "box"
    document.querySelector("body").appendChild(divs);
}