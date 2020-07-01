const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  mealsEl = document.getElementById('meals'),
  resultHeading = document.getElementById('result-heading'),
  singleMealEl = document.getElementById('single-meal');

const searchMeal = (e) => {
  e.preventDefault();
  singleMealEl.innerHTML = '';
  const term = search.value;
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resultHeading.innerHTML = `<h2> Search result for '${term}': </h2>`;
        if (data.meals === null) {
          mealsEl.innerHTML = '';
          resultHeading.innerHTML = `<p>There are no search results for ${term}. try again!</p>`;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              (meal) => `
                <div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                    <div class="meal-info" data-mealId="${meal.idMeal}">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div>
            `
            )
            .join('');
        }
      });
    search.value = '';
  } else {
    alert('Please enter a search term.');
  }
};

const getMealById = (id) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];

      addMealToDOM(meal);
    });
};

const getRandomMeal = () => {
  mealsEl.innerHTML = '';
  resultHeading.innerHTML = '';
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];
      addMealToDOM(meal);
    });
};

const addMealToDOM = (meal) => {
  const ingredients = [];
  for (let index = 1; index < 20; index++) {
    if (meal[`strIngredient${index}`]) {
      ingredients.push(
        `${meal[`strIngredient${index}`]} - ${meal[`strMeasure${index}`]}`
      );
    } else {
      break;
    }
  }
  const youtubeUrlId = meal.strYoutube.split('=');
  const videoUrl = `https://www.youtube.com/embed/${youtubeUrlId[1]}`;

  singleMealEl.innerHTML = `
  <div class="single-meal">
    <h1>${meal.strMeal}</h1>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
    <div class="single-meal-info">
      ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
      ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
    </div>
    <div class="main">
      <p>${meal.strInstructions}</p>
      <h2>Ingredients</h2>
      <ul>
        ${ingredients.map((ing) => `<li>${ing}</li>`).join('')}
      </ul>
    </div>
    <div class="video">
    <iframe 
        width="420" 
        height="345" 
        src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>`;
};

submit.addEventListener('submit', searchMeal);
random.addEventListener('click', getRandomMeal);

mealsEl.addEventListener('click', (e) => {
  const mealInfo = e.path.find((item) => {
    if (item.classList) {
      return item.classList.contains('meal-info');
    } else {
      return false;
    }
  });
  if (mealInfo) {
    const mealId = mealInfo.getAttribute('data-mealid');
    getMealById(mealId);
  }
});

// addition
