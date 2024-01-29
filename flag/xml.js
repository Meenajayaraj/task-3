const URL = "https://restcountries.com/v3.1/all";

const xml =new XMLHttpRequest();
xml.open("GET",URL);
xml.send();

xml.onreadystatechange 