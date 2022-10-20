const form = document.querySelector("form");
const ul = document.querySelector("ul");
const colorGenerated = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
const colorGenerated2 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
var orient = Math.floor(Math.random() * (359 - 1) + 1)
console.log(orient + " " + colorGenerated + " " + colorGenerated2);
// let changeText = colorGenerated.split("");
// alert(changeText);

//& document.body.style.background = colorGenerated;
document.body.style.backgroundImage = 'linear-gradient(' + orient + "deg" + ', ' + (colorGenerated.length === 6 ? colorGenerated + "1" : colorGenerated) + ', ' + (colorGenerated2.length === 6 ? colorGenerated2 + "1" : colorGenerated2) + ')'
// document.querySelector("#add_item").style.background = colorGenerated;
// document.querySelector("#add_item").style.color = ((changeText[1] < 6 ? "white" : (changeText[3] < 6 ? "white" : (changeText[5] < 6 ? "white" : 'black'))));

// let arrayItem;
// if (localStorage.getItem("itens")) {
//   arrayItem = JSON.parse(localStorage.getItem("itens"));
// }
// else {
//   arrayItem = [];
//   JSON.parse(localStorage.getItem("itens"));
// }

let arrayItem = (localStorage.getItem("itens")) ? JSON.parse(localStorage.getItem("itens")) : [];

//& GET FROM LOCALSTORAGE
if (localStorage.getItem("itens")) {
  let arrayLocal = JSON.parse(localStorage.getItem("itens"));
  arrayLocal.forEach((e) => {
    ul.innerHTML += `<li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between">
    <span>${e}</span><button class="text-red-700 delete material-icons">cancel</button></li>`;
  })
}

//* SUBMIT FUNCTION
form.onsubmit = function (event) {
  event.preventDefault();

  let textInput = document.getElementById("input-add").value;
  // let textValid = document.querySelector("#input-add").value.split();

  if (textInput == '' || textInput == ' ' || textInput == '  ' || textInput == '   ' || textInput.length > 35) {
    return
  }
  else {
    arrayItem.push(textInput);
    localStorage.setItem("itens", JSON.stringify(arrayItem));
  }

  if (!ul.querySelector("li")) {
    ul.innerHTML += `<li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between">
  <span>${textInput}</span><button class="text-red-700 delete material-icons">cancel</button></li>`;
  }
  else {
    const li = ul.querySelector("li").cloneNode(true);
    ul.appendChild(li);
    li.querySelector("span").textContent = textInput;
  }
  document.getElementById("input-add").value = '';
}

//! REMOVE FUNCTION
ul.onclick = function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();

    let teste = event.target.parentElement.textContent;
    teste = teste.replace("    ", '');
    teste = teste.replace("   ", '');
    teste = teste.replace("  ", '');
    teste = teste.replace(/(\r\n|\n|\r)/gm, "");
    teste = teste.replace("cancel", "");
    console.log(teste);

    arrayItem = arrayItem.filter((e) => {
      return teste !== e
    });
    localStorage.setItem("itens", JSON.stringify(arrayItem));
    // alert("Novo array: " + arrayItem);
  }
}