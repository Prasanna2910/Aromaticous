let aboutBtn = document
  .querySelector('.abtBtn')
  .addEventListener('click', function () {
    window.location.href = 'about.html';
  });
let dialog = document.querySelector('dialog');
let closeButton = document.querySelector('dialog button');

async function getRandomFood() {
  try {
    let response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    display(response.data.meals[0]);
    let meal = response.data.meals[0];
    let listOfIngredients = '';

    for (let i = 1; i < 13; i++) {
      // console.log('jhhwgechj', ``);
      listOfIngredients += `<div class="fetching"><li> ${
        meal['strIngredient' + i]
      }</li></div>`;
    }

    let showingInModal = `<h3>INGREDIENTS</h3>
    <p>${listOfIngredients}</p>
    <button  id="ButtonForClose" style="width:30%; border:none; height:20px; background-color:red; border-radius: 5px; font-weight:bolder; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;" >${'Close'}
  </button>`;
    dialog.innerHTML = showingInModal;
    showingInModal.innerHTML = listOfIngredients;
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

getRandomFood();

let randomImg = document.getElementById('randomDishDiv');

function display(dataOfItem) {
  randomImg.innerHTML = `<img src="${dataOfItem.strMealThumb}" alt="" id="insideImg";/>
    <p id="insideTEXT">${dataOfItem.strMeal}</p>`;
}

let gettingName = document.querySelector('#container');
let searchButton = document.querySelector('.search');
searchButton.addEventListener('click', abc);

async function filterByCategory(inputCategory) {
  try {
    let response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputCategory}`
    );
    let data = response.data.meals;
    let container = '';
    gettingName.innerHTML = '';
    data.forEach(function (element, index) {
      container += `<div class="ingredient">
        <img src="${element.strMealThumb}" alt="logo image" class="logoMain" />
        <h3>"${element.strMeal}"</h3>
      </div>`;
    });
    gettingName.innerHTML += container;
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}

function abc() {
  let picran = document.querySelector('#SearchBar').value;
  filterByCategory(picran);
}

randomImg.addEventListener('click', function () {
  dialog.showModal();
});

document.querySelector('dialog').addEventListener('click', () => {
  dialog.close();
});
