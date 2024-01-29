const URL = "https://restcountries.com/v3.1/all";

const xml =new XMLHttpRequest();
xml.open("GET",URL);
xml.send();

xml.onreadystatechange = () =>
{
    console.log(xml.readystate);
};
xml.onload = () => {
    console.log(JSON.parse(xml.response));
};