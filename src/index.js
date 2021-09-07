const init = () => {
  const inputForm = document.querySelector('form')

  //addEventListener accepts the type of event, and what it should do when it happens.
  //In this case, we're saying the type is a submit event, and when it happens, we want to take the event and inject it into some logic
  //the logic being lines 8 and 9, to prevent the default refreshing of the page and to create a new variable called input where we're storing the number that the user typed in the 'search by ID' text box
  inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector(`input#searchByID`);


      //here we are using string interpolation to fetch the movie that's associated with the value that the user typed into the submission box.
      //then, once we have that data, we're taking the response and injecting it into the json method to translate the response
      //then, once we have the translated data, we're injecting it into some logic that first selects the title and summary elements from our html page, creates new variables for them, and finally sets those new variables equal to the title and summary that we got from our json data from the user's number submission. 
      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => {

          const title = document.querySelector('section#movieDetails h4');
          const summary = document.querySelector('section#movieDetails p');
        
          title.innerText = data.tile;
          summary.innerText = data.summary;
      });
  });
}

//this, along with lines 1 and 2 are written before the rest of the functionality. 
//this tells the document to wait for the dom content to be loaded, and once it's loaded for the doc to run the init function.
//then, once it's loaded, the init function executes and we do the rest of the code. 
document.addEventListener('DOMContentLoaded', init);