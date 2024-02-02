const getRegion = () =>
{
    const xhr = new XMLHttpRequest();
    const URL = "https://restcountries.com/v3.1/all";
    xhr.open("GET",URL);
    xhr.responseType = "json";
}
xhr.onload = () =>{
    const data = xhr.response;
    getData(data);
};
xhr.send();
getRegion();

function getData(data){
    data.foreach((country) => {
        console.log("Name:"+country.name.common);
        console.log("Region:"+country.region);
        console.log("Sub Region:"+country.subregion);
        console.log("Population:"+country.population);   

        
    });
}
