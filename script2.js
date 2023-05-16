//Create DOM
let containerFetch = document.getElementsByClassName("container-fetch")[0];
let buttonFetch = document.createElement("button");
buttonFetch.innerText = "Click Me";
let inputText = document.createElement("input");
inputText.setAttribute("type", "text");
containerFetch.appendChild(inputText);
containerFetch.appendChild(buttonFetch);

//ARRAY DE MES COUILLES
let newArray = [];

//create select country
let select = document.createElement("select");

let option1 = document.createElement("option");
option1.text = "IT";
select.add(option1);

let option2 = document.createElement("option");
option2.text = "FR";
select.add(option2);

let option3 = document.createElement("option");
option3.text = "ES";
select.add(option3);
containerFetch.appendChild(select);

//create event on button // take name and country
buttonFetch.addEventListener("click", () => {
  //value inputText
  let innerTextValue = inputText.value;
  //value option select
  let selectValue = select.value;
  // console.log(selectValue);
  //create new Div
  let newDiv = document.createElement("div");
  // console.log(innerTextValue);

  // request with de input value
  const fetchName = (name, country) =>
    fetch("https://api.agify.io/?name=" + name + "&country_id=" + country);

  //display the response
  fetchName(innerTextValue, selectValue)
    .then((response) => response.json())
    .then((json) => {
      let age = json.age;
      let count = json.count;
      let country = json.country_id;
      let content = `
      <p>${innerTextValue}</p>
      <p>Number or person with that name : ${count}</p>
      <p>and their median age : ${age}</p>
      <p>for the country : ${country}</p>
      `;
      newDiv.innerHTML += content;
      containerFetch.appendChild(newDiv);
      console.log(JSON.stringify(json));
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });
});

// newArray.push(JSON.stringify(json));
// newArray.forEach((element) => {
//   localStorage.setItem("Async", element);
// });
