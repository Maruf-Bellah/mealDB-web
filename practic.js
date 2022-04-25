const mealsearch = () => {
     const searchInput = document.getElementById('search-input');
     const searchText = searchInput.value =' ';
     console.log(typeof searchText);
     if( isNaN(searchText) ){
          const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
          fetch(url)
          .then(res => res.json())
          .then(data => displaySearch(data.meals))
     }
     else{
          error.innerText='please try agian'
     }
   
}

const displaySearch = meals => {
       
     const mealContainer = document.getElementById('meal-container');
     mealContainer.textContent = '';
               for(const meal of meals) {
                    console.log(meal);
                    const div = document.createElement('div');
                    div.innerHTML =`
                    <div onclick="displayUp('${meal.idMeal}')" class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p>${meal.strInstructions.slice(0, 150)}</p>
                      <button onclick='' >Go anyware</button>
                    </div>
                  </div>
                    `
                    mealContainer.appendChild(div);
          
} 

const displayUp = above => {
     // console.log(above);

     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${above}`;
     fetch(url)
     .then(res => res.json())
     .then(data =>  displayShow(data.meals[0]))
}

const displayShow = details =>{
     const display = document.getElementById('meals');
     console.log(display);

     const div = document.createElement('div');
     div.innerHTML=`
     <div class="card">
     <img src="${details.strMealThumb}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="${details.strYoutube}" target='_blank' class="btn btn-primary">Go somewhere</a>
     </div>
   </div> 
     `
     display.appendChild(div);
}