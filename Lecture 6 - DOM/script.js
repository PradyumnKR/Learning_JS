let h2 = document.querySelector("h2");
h2.append(" from Apna College students.");
// document.querySelector(".Box").style.backgroundColor = "#ff0000";document.querySelectorAll(".Box").forEach(box => {
//   box.style.backgroundColor = "#ff0000";
// });
let box =  document.querySelectorAll(".Box");
box.forEach(element => {
    element.classList.add("box");
})
