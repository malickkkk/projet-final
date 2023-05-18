import { accesoireList } from "./data.js";

const accesoireContainer = document.querySelector('#accessoires-container');

// Fonction pour afficher un seul accessoire 
  accesoireContainer.innerHTML = '';
  
  
  const accessoire = accesoireList[index];
  
  const accessoireElement = document.createElement('div');  accessoireElement.innerHTML = `
  <div class="bg-red-100 rounded shadow p-4 m-2 cursor-pointer transition transform hover:scale-105">
    <img class="w-40 h-40 object-cover" src="${accessoire.img}">
    <div class="text-indigo-500 text-xs font-medium">${accessoire.nom}</div>
    <div class="text-gray-900 text-lg font-medium">${accessoire.prix}</div>
    <div class="text-base">${accessoire.description}</div> `

  accesoireContainer.appendChild(accessoireElement);

accesoireList.forEach((accessoire, index) => {
  const accessoireElement = document.createElement('div');

  accessoireElement.innerHTML = `
  <div class="bg-red-100 rounded shadow p-4 m-2 cursor-pointer transition transform hover:scale-105">
    <img class="w-40 h-40 object-cover" src="${accessoire.img}">
    <div class="text-indigo-500 text-xs font-medium">${accessoire.nom}</div>
    <div class="text-gray-900 text-lg font-medium">${accessoire.prix}</div>
    <div class="text-base">${accessoire.description}</div> `

  
  accessoireElement.addEventListener('click', () => {
    afficherAccessoire(index);
  });

  accesoireContainer.appendChild(accessoireElement);
});
