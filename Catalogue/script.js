import { vetementList } from "./data.js";
const input = document.querySelector('#new')
//Afficher tous les vetements 
const vetementContainer = document.querySelector('#vetement-container')


// Je me suis documenté sur internet pour le click

// Fonction pour afficher un seulvetement
function afficherVetement(index) {
    // Vider le container
    vetementContainer.innerHTML = '';
    
    // Récupérer le vetement  sélectionné
    const vetement = vetementList[index];
    
    const vetementElement = document.createElement('div');  vetementElement.innerHTML = `
    <div class="bg-red-100 rounded shadow p-4 m-2 cursor-pointer transition transform hover:scale-105">
      <img class="w-40 h-40 object-cover" src="${vetement.img}">
      <div class="text-indigo-500 text-xs font-medium">${vetement.nom}</div>
      <div class="text-gray-900 text-lg font-medium">${vetement.prix}</div>
      <div class="text-base">${vetement.description}</div> `
    // Ajouter l'élément HTML au conteneur de vetement
    vetementContainer.appendChild(vetementElement);
  }
  
  // Ajouter  "click" pour chaque vetement
  vetementList.forEach((vetement, index) => {
    const vetementElement = document.createElement('div');
  
    vetementElement.innerHTML = `
    <div class="bg-red-100 rounded shadow p-4 m-2 cursor-pointer transition transform hover:scale-105">
      <img class="w-40 h-40 object-cover" src="${vetement.img}">
      <div class="text-indigo-500 text-xs font-medium">${vetement.nom}</div>
      <div class="text-gray-900 text-lg font-medium">${vetement.prix}</div>
      <div class="text-base">${vetement.description}</div> `
  
    // Ajouter  "click"
    vetementElement.addEventListener('click', () => {
      afficherVetement(index);
    });
  
    // Ajouter l'élément HTML au conteneur de vetement
    vetementContainer.appendChild(vetementElement);
  });
  