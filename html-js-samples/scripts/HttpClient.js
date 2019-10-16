function HttpGet(url, onSuccessCallback, onErrorCallback){
    fetch(url)
    .then( response => response.json())
    .then( data => onSuccessCallback(data))
    .catch( error => onErrorCallback(error));
}