import { sneakerList } from "./data.js";

//Afficher mes sneakers 
const sneakerContainer = document.querySelector('#sneakers-container')
sneakerList.forEach(vetementobj => {
sneakerContainer .innerHTML += `      
 <div class=" cursor-pointer p-4 hover:scale-105 transition border-slate-100 border-2 p-4" >
    <img class="h-40 w-40 rounded w-full object-cover  object-center shadow hover:shadow-lg mb-6" src="${vetementobj.img}">
    <div class=" tracking-widest p-2 text-indigo-500 text-xs font-medium title-font">${vetementobj.nom}</div>
    <div class=" text-lg text-gray-900 p-8 mt-6 flex font-medium title-font mb-4">${vetementobj.prix}</div>

    <div class=" leading-relaxed p-4 mb-6 text-base">${vetementobj.description}</div>
    </div>

 `
})