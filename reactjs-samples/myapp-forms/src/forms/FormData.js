import React from 'react';  

function FormData(props){

    console.log(props.formData);

    if (props.formData === null) return (<div></div>);


    const keys  = Object.keys(props.formData);
    
    const listItems = keys.map(key => {
        return <li key={key.toString()}>{key} : { props.formData[key] } </li>
    });

    return(
        <div>
            <ul>
               {listItems}
            </ul>
        </div>
    );
}

export default FormData;