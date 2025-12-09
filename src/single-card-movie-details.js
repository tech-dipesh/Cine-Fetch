let selectBookmark=document.getElementById("bookmark")
const storeIMDB = localStorage["id"]

let storeBookMarkDup=[];
// storeBookMark.push("First")
storeBookMarkDup.push(JSON.parse(localStorage.getItem("bookmark")) || []);
// Add this line below:
// console.log("Type of storeBookMark:", typeof storeBookMark, "Value:", storeBookMark);



// const onlyStoreUniqueLocal=(value, index, array)=>{
//   return array.indexOf(value)===index;
// }

// const uniqueBookMark=storeBookMarkDup.filter(onlyStoreUniqueLocal)
const uniqueBookMark=storeBookMarkDup;

console.log(uniqueBookMark);

  const goBack=()=> location.href="index.html"
    
    let getDiv = document.getElementById("Fetch")

    let Title = document.getElementById("Title")
    let Id = document.getElementById("imdbID")
    let releasedYear = document.getElementById("releaseDate")
    let runTime = document.getElementById("runTime")
    let Genre = document.getElementById('Genre');
    let Director = document.getElementById('Director');
    let Actors = document.getElementById('Actors');
    let Description = document.getElementById('Description');
    let Awards = document.getElementById('Awards');


    const createEveryElementAndAppend = async (convertToJson) => {
      let imgButton = document.getElementById("Poster")
      imgButton.setAttribute("src", convertToJson.Poster)
      imgButton.setAttribute("alt", convertToJson.Title)
      Title.innerHTML = `Title: ${convertToJson.Title}`;
      Id.innerText = `IMDB ID: ${convertToJson.imdbID}`;
      releasedYear.innerText = `Release Year: ${convertToJson.Released}`;
      runTime.innerText = `RunTime: ${convertToJson.Runtime}`;
      Genre.innerText = `Genre: ${convertToJson.Genre}`;
      Director.innerText = `Director: ${convertToJson.Director}`;
      Actors.innerText = `Actors: ${convertToJson.Actors}`;
      Description.innerText = `Description: ${convertToJson.Plot}`;
      Awards.innerText = `Awards: ${convertToJson.Awards}`;
    }

    const fetchIDData = async () => {
      try {
        let storeURL = await fetch(`https://www.omdbapi.com/?i=${storeIMDB}&apikey=7e268f3e`);
        let convertToJson = await storeURL.json()
        // if(!(convertToJson.ok)) throw `Erorr while fetching data: ${convertToJson.statusText}`
        createEveryElementAndAppend(convertToJson)
      }
      catch (error) {
        console.log(error);
      }
    }

   

let isBook=false;
selectBookmark.addEventListener("click", (e)=>{
  console.log("Store BookMark: ");
    if(isBook==false){
      storeBookMarkDup.push(storeIMDB);
      selectBookmark.setAttribute("src", "../assets/star.png")
      isBook=true;
    }
    else{

      selectBookmark.setAttribute("src", "../assets/bookmark.png")
      isBook=false;
    }
}) 

    fetchIDData()


