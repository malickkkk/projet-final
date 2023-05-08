import { vetementList } from "./data.js";
const input = document.querySelector('#new')
//Afficher tous les vetements 
const vetementContainer = document.querySelector('#vetement-container')
vetementList.forEach(vetementobj => {
vetementContainer .innerHTML += `    <div class="grid cell-25 ">
<div class="cursor-pointer flex space-around hover:scale-105 transition border-slate  border-2 p-4  burger">
    <img class="w-40 h-40 object-covervml-2" src="${vetementobj.img}">
    <div class=" tracking-widest p-2 text-indigo-500 text-xs font-medium title-font">${vetementobj.nom}</div>
    <div class=" text-lg text-gray-900 p-8 mt-6 flex font-medium title-font mb-4">${vetementobj.prix}</div>

    <div class=" leading-relaxed p-4 mb-6 text-base">${vetementobj.description}</div>
    </div>

 `
})

