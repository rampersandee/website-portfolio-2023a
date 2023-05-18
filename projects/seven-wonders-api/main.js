// GLOBALS
let userButton = document.querySelector('button')

// FUNCTIONS
userButton.addEventListener('click', continentCheck)

function continentCheck() {
  let userInput = document.querySelector('input').value
  let wonderStorage = document.querySelector('#wonder-storage')
  let wonderName = document.querySelector('#wonder-name')
  console.log('1st SUCCESS')
  wonderStorage.innerHTML = ''
  wonderName.innerHTML = ''
  if (!userInput) {
    wonderName.innerText = 'Please enter a continent'
    wonderStorage.innerText = 'EXPLORE'
    console.log('2nd SUCCESS')
    return;
  }
  fetch(`api/${userInput}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((wonderData) => {
      console.log(wonderData);
      console.log('3rd SUCCESS')
      for (let i = 0; i < wonderData.length; i++) {
        let wonderItem = document.createElement('span');
        wonderItem.innerHTML = `
          <p>Name: ${wonderData[i].name}</p>
          <p>Location: ${wonderData[i].location}</p>
          <p>Description: ${wonderData[i].description}</p>
          <img src="${wonderData[i].image}">
        `;
        wonderStorage.appendChild(wonderItem);
      }
    })
    .catch((error) => {
      console.error(`Error fetching data: ${error}`);
    });
}
