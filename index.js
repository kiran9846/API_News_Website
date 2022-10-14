//variable
const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const entertainmentBtn = document.getElementById("entertainment");
const sportsBtn = document.getElementById("sports");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newType = document.getElementById("newsType");
const newDetails = document.getElementById("newsdetails");

// Array
var newsDataArr = [];

//api section
const API_Key = "ff23b375cbe24ed6b5e9cd2c64015f49";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=Apple&from=2022-10-11&sortBy=popularity&apiKey=";

window.onload = function(){
    newType.innerHTML="<h4>HeadLines</h4>";
    fetchHeadLine();
};
generalBtn.addEventListener("click",function(){
    newType.innerHTML="<h4>GeneralNews</h4>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click",function(){
    newType.innerHTML="<h4>Business</h4>";
    fetchBusinessNews();
});

sportsBtn.addEventListener("click",function(){
    newType.innerHTML="<h4>sports</h4>";
    fetchSportsNews();
});

entertainmentBtn.addEventListener("click",function(){
    newType.innerHTML="<h4>entertainment</h4>";
    fetchEntertainmentNews();

});
technologyBtn.addEventListener("click",function(){
    newType.innerHTML="<h4>technology</h4>";
    fetchTechnologyNews();
});

searchBtn.addEventListener("click",function(){
    newType.innerHTML="<h4>Seacrh : "+newsQuery.value+"</h4>";
    fetchQueryNews();
});
const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_Key);
    newsDataArr =[];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }else{
        console.log(response.status, response.statusText);
    }

    displayNews();
}
const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS+API_Key);
    newsDataArr =[];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }else{
        console.log(response.status, response.statusText);
    }

    displayNews();
}
const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS+API_Key);
    newsDataArr =[];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }else{
        console.log(response.status, response.statusText);
    }

    displayNews();
}
const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS+API_Key);
    newsDataArr =[];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }else{
        console.log(response.status, response.statusText);
    }

    displayNews();
}
const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_Key);
    newsDataArr =[];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }else{
        console.log(response.status, response.statusText);
    }

    displayNews();
}
const fetchQueryNews = async () => {
    if(newsQuery.value == null)
        return;
        const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_Key);
    newsDataArr =[];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }else{
        console.log(response.status, response.statusText);
    }

    displayNews();
}
const fetchHeadLine = async () => {
    const response = await fetch(HEADLINES_NEWS+API_Key);
    newsDataArr =[];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }else{
        console.log(response.status, response.statusText);
    }

    displayNews();
}

function displayNews(){

    newDetails.innerHTML = "";
    if(newsDataArr.length == 0){
        newDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");

        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height", "matchparnt");
        image.setAttribute("width","100%");
        image.src = news.urlToImage;

        var cardBody = document.createElement('div');

        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML =news.discription;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target","_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newDetails.appendChild(col);

    });
}