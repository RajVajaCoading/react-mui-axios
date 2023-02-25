import React from 'react'

 const DynamicNameChange = () => {
    let curDate = new Date();
    curDate = curDate.getHours();
    let getHour = "";

    let cssStyle = {};

    if(curDate >= 1 && curDate<12){
        getHour = "Good Morning Raj ";
        cssStyle.color = "green";
    }else if (curDate >= 12 && curDate < 19 ){
        getHour = "Good Afternoon Raj ";
        cssStyle.color = "orange";

    }else{
        getHour = "Good Night Raj ";
        cssStyle.color = "pink";


    }
  return (
    <div>
        <h1>Hello Sir 😄 📺,<span style={cssStyle}>{getHour}</span></h1>
    </div>
  )
}

export default DynamicNameChange