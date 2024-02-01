let getflag = () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all", true);

  xhr.responseType = "json";


xhr.onload = () => {
  let data = xhr.response;
  
  
  getData(data);
   };
  
xhr.send();
}
getflag();

function getData (data){
  const container= document.createElement("div");
container.className ="container";
document.body.append(container);

const row=document.createElement("div");
row.className ="row";
document.body.append (row);
  
  data.forEach ((country) => {
    
const txtFlag= document.createElement ('img');
txtFlag.className = 'info';
txtFlag.src = country.flags.png;
document.body.appendChild(txtFlag);

const txtName= document.createElement ('h3');
txtName.innerHTML = country.name.common;
document.body.appendChild(txtName);
 
        });
}
