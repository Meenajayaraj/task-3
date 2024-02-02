const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.responseType = "json";

xhr.open("GET",URL);
xhr.send();

xhr.onload = () =>{
    const data = xhr.response;
    getData(data);
};
function getData(data){
    data.foreach((country) => {
        console.log("Name:"+country.name.common);
        console.log("Region:"+country.region);
        console.log("Sub Region:"+country.subregion);
        console.log("Population:"+country.population);   

        
    });
}
