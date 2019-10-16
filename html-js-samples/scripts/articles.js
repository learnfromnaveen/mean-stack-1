//callbacks 
var Resources = { 
    Articles: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=79352531aafb4b529c15a639bec6340e'
}

function getArticles(){
    HttpGet(Resources.Articles, onSuccessCallback,onErrorCallback);
}

function onSuccessCallback(data){
    var parentContainer = document.getElementById("container");
    var articles = data.articles; 
    if(articles && articles.length > 0){
        parentContainer.innerHTML  = '';
        articles.forEach(function(article){
            var child = getArticleTemplate(article); 
            parentContainer.appendChild(child); 
        });
    } 
}

function onErrorCallback(error){
   console.log('Error:'+ error);
}