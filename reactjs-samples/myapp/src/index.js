import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

//Example 1:
/*
const name  = 'Vivaan';

const element = <h1>Hello, {name}!!!</h1>

ReactDOM.render(element, document.getElementById('root') );

*/


//Example 2:  
/*
function formantName(user){ 
    return user.firstName + ', ' + user.lastName;  
}

var user = { 
    firstName: 'Vivaan',  
    lastName: 'Naveen'
}

const element  =  <h1>Hello { formantName(user) }</h1>

ReactDOM.render(element, document.getElementById('root'));
*/

//Example 3:  
/*
var user = { 
    firstName: 'Vivaan',  
    lastName: 'Naveen'
}


function formantName(user){ 
    return user.firstName + ', ' + user.lastName;  
}

function greetUser(user){
    if(user){
        return <h1>Hello {formantName(user)}</h1>
    }
    else{
        return <h1>Hello stranger!!!</h1>
    }
}

const element  = <div>{greetUser(user)}</div>

ReactDOM.render(element, document.getElementById('root'));

*/



var article = {
    "source": {
    "id": "cnbc",
    "name": "CNBC"
    },
    "author": "Michael Wayland",
    "title": "UAW's deal to end strike forfeits right to sue GM for idling plants last year - CNBC",
    "description": "The UAW filed the lawsuit in February, saying GM's plans to idle up to four U.S. plants was in breach of its 2015 contract.",
    "url": "https://www.cnbc.com/2019/10/23/uaw-deal-to-end-strike-forfeits-right-to-sue-gm-for-idling-plants.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/105900690-1557331431479gettyimages-1128941526r.jpg?v=1557331454",
    "publishedAt": "2019-10-23T12:11:23Z",
    "content": "DETROIT The UAW's proposed deal to end the 38-day strike against General Motors includes the union's agreement to drop a lawsuit that accused the automaker of violating the previous contract if it went ahead with plans to close some U.S. plants.\r\n The issue w… [+2255 chars]"
}

/*
var element = <div className='article-container'> 
    <div className='article-title'>{article.title}</div>
    <div className='article-image-container'>
        <img className='article-image' src={article.urlToImage}/></div> 
    <div className='article-source'><strong>Source:</strong>{article.source.name}</div>
</div>
*/

/*
var malaciousScript  =  <script type='text/javascript'>
    alert('hi');
</script>;

var element  = <div>
{malaciousScript}    
</div>
ReactDOM.render(element, document.getElementById('root'));

*/


//Example 5:  

function tick() { 
    const element =  <div id='clock' className='clock'>
        <h2>Hello Vivaan!!!</h2>
        <h3>Time now is {new Date().toLocaleTimeString()}</h3>
    </div>
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(() => {
    tick();
}, 1000);