 const xhr = new XMLHttpRequest();
    const URL = "https://restcountries.com/v3.1/all";
    xhr.open("GET",URL);
    //xhr.responseType = "json";
    xhr.send();

}

xhr.onload=()=>{
   for(let rcf of (JSON.parse(xhr.response))){
    console.log("NAME :" ,rcf.name.common);
    console.log("REGION :" ,rcf.region);
    console.log("SUBREGION :" ,rcf.subregion);
    console.log("POPULATION :" ,rcf.population);
   }
};
}
