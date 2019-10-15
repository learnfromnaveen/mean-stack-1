var names =  [];  
        
function addName(name){ 
    names.push(name);  
}

function add(controlId){
    var control  =  document.getElementById(controlId);  

    try{
        var name  = control.value;  
        addName(name);
    }  
    catch(e){
        alert('something went wrong...');
    }
    finally{
        //excecutes always 
    }
}

function getTemplate(){ 

    var template =  '';  

    for(var i=0; i<names.length; i++){ 
        template += '<div>' + names[i] + '</div>'
    }

    return template;
}


function renderNames(controlId) { 
    var control  = document.getElementById(controlId);  
    if(control){ 
        control.innerHTML = getTemplate();
    }
}
