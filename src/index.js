const init = () => {
    const inputForm = document.getElementById('form');

const init = () => {const ids = []
    fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            ids.push(element.id)   
        });
       })
       inputForm.addEventListener('submit', (event) => {
           event.preventDefault()})

       const input = document.querySelector('input#searchByID');
        let userSearch = input.value

        if (ids.includes(parseInt(userSearch))){
           fetch(`http://localhost:3000/movies/${userSearch}`)
           .then(response => response.json())
           .then(data => {
           const title = document.querySelector('section#movieDetails h4');
           const summary = document.querySelector('section#movieDetails p');
           title.innerText = data.title;
           summary.innerText = data.summary;})
       }else{
           alert(`${userSearch} is not a valid id`)
       }
 
  
}
}

document.addEventListener('DOMContentLoaded', init);