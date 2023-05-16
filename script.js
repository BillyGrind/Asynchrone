//create DOM
let containerFetch = document.getElementsByClassName("container-fetch")[0];
let buttonFetch = document.createElement("button");
buttonFetch.innerText = "Click Me";
containerFetch.appendChild(buttonFetch);

//function create fetch button
buttonFetch.addEventListener("click", () => {
  // create request
  const request = fetch("./array.json");
  const response = request.then((response) => response.json());
  //   console.log(response);
  response.then((json) => {
    console.log(json);
    for (let elem of json) {
      let fetchList = document.getElementsByClassName("fetch-list")[0];
      let content = `
        <li>${elem.line}</li>
      `;
      fetchList.innerHTML += content;
    }
  });
});
