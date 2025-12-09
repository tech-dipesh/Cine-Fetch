 let selectButton = document.querySelector("button")
    let takeInput = document.querySelector("input")
    let divFetech = document.getElementById("Fetch")
   const createLinkandAppendToParent = (c) => {
      let learnMore = document.createElement("button")
      let createALink=document.createElement("a")
      // createALink.setAttribute("href", `http://www.omdbapi.com/?i=${c}`)
      // localStorage.setItem("id", c)
      localStorage["id"]=c;

      createALink.setAttribute("href", `./single-Page.html`)
      createALink.innerText="Learn More"
      learnMore.appendChild(createALink)
      return learnMore;
    }
    
    const iterateArrayOfObject = (el) => {
      // e.forEach(e => {
      for (let e of el) {
        let createSpan = document.createElement("span")
        let takeInput = document.createElement("img")
        takeInput.setAttribute("src", e.Poster)
        takeInput.setAttribute("alt", e.Title)
        takeInput.setAttribute("id", "Poster")

        let createTitle = document.createElement("div")
        createTitle.setAttribute("id", "title")
        createTitle.innerHTML = `Title: ${e.Title}`;


        let createId = document.createElement("div")
        createId.setAttribute("id", "imdbID")
        createId.innerText = `IMDB ID: ${e.imdbID}`;


        let createYear = document.createElement("div")
        createYear.setAttribute("id", "releaseYear")
        createYear.innerText = `Release Year: ${e.Year}`;


        let movieOrSeries = document.createElement("p")
        movieOrSeries.innerText = e.Type;

       let Button= createLinkandAppendToParent(e.imdbID)
        createSpan.append(takeInput, createTitle, createId, createYear, movieOrSeries, Button)
        divFetech.appendChild(createSpan)
      }
    }

    selectButton.addEventListener("click", async (e) => {

      if (takeInput.value == "") {
        alert("Please enter something.")
        return;
      }
      try {
        // Fetch the data from omdb api:
        // let fetchData = await fetch(`https://www.omdbapi.com/?t=${takeInput.value}&plot=full&apikey=7e268f3e`)
        let fetchData = await fetch(`https://www.omdbapi.com/?s=${takeInput.value}&apikey=7e268f3e`)
        selectButton.innerText="Sending..."
        selectButton.disabled=true;
        let js = await fetchData.json()
        // When movie doesn't exist.
        if (!(fetchData.ok)) throw `Error on fetching data: ${fetchData.Error}`;
        iterateArrayOfObject(js.Search);
      } catch (error) {
        divFetech.innerText="Please Enter the correct Movie Name"
        console.log(error);
      }
      finally{
        selectButton.disabled=false;
        selectButton.innerText="Send."
        takeInput.value=""
      }
    })