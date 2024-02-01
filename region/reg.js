const getregion = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all", true);
  
    xhr.responseType = "json";
  
  
  xhr.onload = () => {
    const data = xhr.response;
    getData(data);
     };
    
  xhr.send();
  }
  getregion();
  
  function getData (data){
    data.forEach ((country) => {
   console.log ("Name: " + country.name.common);
   console.log ("Region : "+country.region);
   console.log("Sub Region : "+country.subregion);
   console.log("Population : "+country.population);
          });
  }  