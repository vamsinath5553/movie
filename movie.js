let API='http://www.omdbapi.com/?apikey=61e576a4&t='
let loadingStatus=false;
let title=document.getElementById('title');
let desc=document.getElementById('desc');
let img=document.getElementById('img');
let actor=document.getElementById('actor');
let awards=document.getElementById('awards');
let collection=document.getElementById('collection');
let director=document.getElementById('director');
let writers=document.getElementById('writers')
let year=document.getElementById('year');
let movieContainer = document.getElementById('movieContainer');
let errorContainer = document.getElementById('errorContainer');
let genre = document.getElementById('genre');
let ratings = document.getElementById('ratings');
movieContainer.classList.add('d-none')
errorContainer.classList.add('d-none')


function  checkLoadingStatus()
{
    let intro=document.getElementById('intro');
    intro.style.display='none';
    let loader=document.getElementById('loader');
    if( loadingStatus == true )
    {
        loader.classList.add('loader');
    }
    else
    {
        loader.classList.remove('loader');
    }
}
function renderMovie(data)
{
    img.src=data.Poster;
    title.innerText=data.Title;
    desc.innerText=data.Plot;
    actor.innerText=data.Actors;
    awards.innerText=data.Awards;
    director.innerText=data.Director;
    writers.innerText=data.Writer;
    collection.innerText=data.BoxOffice;
    year.innerText=data.Year;
    genre.innerText = data.Genre;
    ratings.innerText = data.imdbRating;


    movieContainer.classList.remove('d-none');
    errorContainer.classList.add('d-none');
}

function fetchMoviedetails()
{
    loadingStatus=true;
    checkLoadingStatus();
    let movieName=document.getElementById('movieName');
    let apiQuery=API+movieName.value;
    console.log(apiQuery);
    fetch(apiQuery).then((response)=>{
        return response.json();
    }).then((data)=>{
        
        console.log(data);
      
        if(data.Error != 'Movie not found!')
        {
            loadingStatus=false;
            checkLoadingStatus();
            renderMovie(data);
        }
        else
        {
            movieContainer.classList.add('d-none');
            errorContainer.classList.remove('d-none');
            loadingStatus = false;
            checkLoadingStatus();
        }
    })
}
