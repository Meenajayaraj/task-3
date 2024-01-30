const URL = "https://restcountries.com/v3.1/all";

const xml =new XMLHttpRequest();
xml.open("GET",URL);
xml.responseType = "json";
  
{
  xml.onload = () => {
    const data = xml.response;
    //const datas = data;
    getData(data);
     };
    
  xml.send();
  }
  getUSDollar();
  
  function getData (data){
    data.forEach ((country) => {
   console.log ("Name: " + country.name.common);
   console.log ("Region : "+country.region);
   console.log("Sub Region : "+country.subregion);
   console.log("Population : "+country.population);
          });