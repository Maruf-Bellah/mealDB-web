const mealsearch = () => {
     const searchInput = document.getElementById('search-input');
     const error = document.getElementById('error');
     // console.log(error);
     const searchText = searchInput.value;
     if(typeof searchText == 'string'){
          error.innerText='please try agian'
     }
}

