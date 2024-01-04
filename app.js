let aboutBTn = document
  .querySelector('.abtBtn')
  .addEventListener('click', function () {
    window.location.href = 'about.html';
  });
async function getRandomdfood(input) {
  try {
    let a = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    Display(a.data.meals[0]);
    console.log(a);
  } catch (error) {
    console.log(error.message);
  }
}
getRandomdfood();

function Display(dataOfItem) {
  //   console.log(dataOfItem);
  let randomImg = document.getElementById('randomDishDiv');

  randomImg.innerHTML = `<img src="${dataOfItem.strMealThumb}" alt="" id="insideImg" style="width: 160px" />
  <p style="color: white; position: absolute; top: 80%; left: 12%;" id="insideTEXT">${dataOfItem.strMeal}</p>`;
}

//search api bottm
document.querySelector('.search').addEventListener('click', getInputHtml);

function getInputHtml() {
  let picran = document.querySelector('#SearchBar').value;
  getRandomdfood(picran);
}
