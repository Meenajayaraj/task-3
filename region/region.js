 const xhr = new XMLHttpRequest();
    const URL = "https://restcountries.com/v3.1/all";
    xhr.open("GET",URL);
    xhr.responseType = "json";
    xhr.send();

};
xhr.onload=()=>{
   for(let reg of (JSON.parse(xhr.response))){
    console.log("NAME :" ,reg.name.common);
    console.log("REGION :" ,reg.region);
    console.log("SUBREGION :" ,reg.subregion);
    console.log("POPULATION :" ,reg.population);
   }
};
};
