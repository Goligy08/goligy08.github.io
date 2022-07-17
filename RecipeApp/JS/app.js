const main = document.querySelector('.main')
const chicken = document.querySelector('#chicken')
const beef = document.querySelector('#beef')
const fish = document.querySelector('#fish')
const pork = document.querySelector('#pork')
const vegetarian = document.querySelector('#vegetarian')
const vegan = document.querySelector('#vegan')
const recipes = document.getElementById('recipe-list')
const searchURL = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const searchBtn = document.getElementById('searchBtn')
const searchTerm = document.getElementById('search')
const form = document.getElementById('form')
const favourite = document.getElementById('favourite')
const savedList = document.getElementById('favourite-list')
const removeFav = document.getElementById('remove')
const seemoreFav = document.getElementById('see-more')
const favItemContainer = document.getElementById('favourite-item-container')
const modalContainer = document.getElementById('modal-container')
const modalClose = document.getElementById('modal-close')
const modal = document.querySelector('.modal')
const favouriteClose = document.getElementById('exit')
const favouritePanel = document.getElementById('favourite-panel')
const favouriteOpen = document.getElementById('open-fav-panel')


favouriteOpen.addEventListener('click', function() {
    favouritePanel.classList.add('show')
})

favouriteClose.addEventListener('click', function() {
    favouritePanel.classList.remove('show')
})



getRandomMeal()
fetchFavMeals() 

async function getRandomMeal() {
     //const resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      const respData =  await resp.json()
      const randomMeal = respData.meals[0]

      console.log(randomMeal)

      addMeal(randomMeal, true)
}

async function getMealId(id) {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id ) 
    
   const respData = await resp.json()
   const meal = respData.meals[0]
    
   return meal

}

async function getMealByIngredient(ingredient){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + ingredient)
    
    const respData = await resp.json()
    const meals =  respData.meals

    
}

async function getSearchedMeal(term) {

    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term)

    const respData = await resp.json() 
    const meals =  respData.meals

    return meals
    console.log(getSearchedMeal)

}



function addMeal(mealData, random = false) {
    
    const recipe = document.createElement('div')
    recipe.classList.add("recipe-container")

    recipe.innerHTML = `
    
    
    <img class="recipe-img" src="${mealData.strMealThumb}" alt="${mealData.strMeal}"/>
    <h3 class="recipe-title">${mealData.strMeal}</h3>
    <p class="recipe-location">${mealData.strArea}</p>
    <p class="recipe-instructions">${mealData.strInstructions}</p>
    <button class="favourite"><i class="far fa-bookmark"></i></button> 
    <button class="more-info">More Info <i class="far fa-arrow-alt-circle-right"></i></button> `
     
    recipe.querySelector('.favourite').addEventListener("click", () => {
        addFavToStorage(mealData.idMeal)
        console.log('reciped saved!')

       
        fetchFavMeals()
       
    })

    recipe.querySelector('.more-info').addEventListener("click", () => {
        addFavToStorage(mealData.idMeal)
        console.log('reciped saved!')

     
        showModal()
    })

    recipes.appendChild(recipe)

}

chicken.addEventListener('click', async () => {
    const search = 'chicken'
    const meals = await getSearchedMeal(search)
    recipes.innerHTML = ''
    meals.forEach((meal) => {
        addMeal(meal)
    })
})

beef.addEventListener('click', async () => {
    const search = 'beef'
    const meals = await getSearchedMeal(search)
    recipes.innerHTML = ''
    meals.forEach((meal) => {
        addMeal(meal)
    })
})

fish.addEventListener('click', async () => {
    const search = 'fish'
    const meals = await getSearchedMeal(search)
    recipes.innerHTML = ''
    meals.forEach((meal) => {
        addMeal(meal)
    })
})

pork.addEventListener('click', async () => {
    const search = 'pork'
    const meals = await getSearchedMeal(search)
    recipes.innerHTML = ''
    meals.forEach((meal) => {
        addMeal(meal)
    })
})

vegetarian.addEventListener('click', async () => {
    const search = 'vegetarian'
    const meals = await getSearchedMeal(search)
    recipes.innerHTML = ''
    meals.forEach((meal) => {
        addMeal(meal)
    })
})

vegan.addEventListener('click', async () => {
    const search = 'vegan'
    const meals = await getSearchedMeal(search)
    recipes.innerHTML = ''
    meals.forEach((meal) => {
        addMeal(meal)
    })
})



modalClose.addEventListener('click', function() {
    modalContainer.classList.remove('show')
})
/*
modalClose.addEventListener('click', () => {
    closeModal()
}) */

function addRecipeToSavedList(mealData) {

    const savedRecipe = document.createElement('div')
    savedRecipe.classList.add('favouriteItemContainer')

    
    savedRecipe.innerHTML = `

    <div class="favourite-item-container">
    <img class="favourite-img" src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    <h3 class="recipe-title">${mealData.strMeal}</h3>
     <button class="remove"><i class="far fa-trash-alt"></i></button>
     <button class="see-more"><i class="far fa-arrow-alt-circle-right"></i></button>
</div>
    `
     savedList.appendChild(savedRecipe)
     console.log("recipe saved")
     
     const removeBtn = savedRecipe.querySelector('.remove')

     removeBtn.addEventListener('click', () => {
         removeFavFromStorage(mealData.idMeal)

         fetchFavMeals()
     }) 
     
}

function showModal(mealData) {
    modalContainer.classList.add('show')

    const seeMoreRecipe = document.createElement('div')

    seeMoreRecipe.classList.add('see-more-recipe')
    
    //console.log(mealData.strMeal)

    seeMoreRecipe.innerHTML = `
    <div class="modal-container">
    <div class="modal">
    <img class="modal-img" src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
      <h2 class="modal-title">${mealData.strMeal}</h2>
      <p class="modal-instructions">
      </p>
    </div>
       <button class="modal-close" id="modal-close"><i class="fa-solid fa-xmark"></i></button>
       </div>
    `
    
     modal.appendChild(seeMoreRecipe)
     console.log("see more recipe")

     
}



function addFavToStorage(mealId) {
  const mealIds = getFavFromStorage()

  localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]))

  
}

function getFavFromStorage() {
    const mealIds = JSON.parse(localStorage.getItem('mealIds'))
    
    return mealIds === null ? [] : mealIds

}

function removeFavFromStorage(mealId) {
    const mealIds = getFavFromStorage()

    localStorage.setItem('mealIds', JSON.stringify(mealIds.filter(id => id !== mealId)))
}

async function fetchFavMeals() {
    savedList.innerHTML = ''

    const mealIds = getFavFromStorage() 

    const meals = [] 

    for (let i=0; i<mealIds.length; i++){
        const mealId = mealIds[i]

        meal = await getMealId(mealId)
        
        addRecipeToSavedList(meal)
        /* need similar function for seemore
        */
        

       

    }

    console.log(meals)
}



form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const search = searchTerm.value 

    const meals = await getSearchedMeal(search)

    console.log(getSearchedMeal(search))
    recipes.innerHTML = ''
    meals.forEach((meal) => {
       
        addMeal(meal)
    })
})




