function getArticleTemplate(article){

    var container = document.createElement("div");  
    container.className = "article";
    //1.Create title layout  
    var titleContiner = document.createElement("div");  
    var title  = document.createElement("h2");
    title.innerText = article.title;
    titleContiner.appendChild(title); 

    //2. Create image layout
    var imageContainer  = document.createElement("div");
    imageContainer.className = 'article-image';  
    var image  = document.createElement("img");
    image.style = "width:100%;";
    image.className = "article-image-control";
    image.src = article.urlToImage;  
    imageContainer.appendChild(image);

    //3. Create source layout
    var sourceContainer  = document.createElement("div");  
    var soure  = document.createElement("span");
    soure.innerHTML = "<strong>Source: </strong>" + article.source.name;  
    sourceContainer.appendChild(soure);


    container.appendChild(titleContiner);
    container.appendChild(imageContainer);
    container.appendChild(sourceContainer);

    return container;
}

