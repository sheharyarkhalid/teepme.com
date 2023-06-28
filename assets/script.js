//NOTE:Ne jamais partager un node_modules
//NOTE:Pourquoi les filtre viennent d'une api ?

const gallery = document.querySelector(".gallery");
let works = [];
let categories = [];
const Filters = document.querySelector(".Filters");

async function recupererPortfolio() {
   try {
  const response = await fetch("http://localhost:5678/api/works");
  if (!response.ok) {
   throw new Error ("Une erreur est survenue");
   }

  works = await response.json();
  console.log(works);

  displayElements(works);
} catch (error) {
   console.log(error.message);
}
}

recupererPortfolio();

function displayElements(works) {
  for (let i = 0; i < works.length; i++) {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const figCaption = document.createElement("figcaption");

    image.src = works[i].imageUrl;
    figure.dataset.categoryId = works[i].categoryId;
    figCaption.innerHTML = works[i].title;

    figure.appendChild(image);
    figure.appendChild(figCaption);
    gallery.appendChild(figure);
    console.log(i);
  }
}

async function recupererFiltres() {
  try {
    const responseFilters = await fetch("http://localhost:5678/api/categories");
    if (!responseFilters.ok) {
      throw new Error("Une erreur est survenue");
    }

    categories = await responseFilters.json();

    console.log(categories);

    displayFilters(categories);
  } catch (error) {
    console.log(error.message);
  }
}

// function recupererFiltres() {
//   fetch("https://catfact.ninja/facts")
//     .then((response) => {
//       if (!response.ok) {
//         //si reponse pas ok alors ...
//         throw new Error(response.status + " : " + response.statusText); //404 : Not Found
//       }

//       return response.json();
//     })
//     .then((object) => {
//       console.log(object.data);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     })
//     .finally(() => {
//       console.log("finally !");
//     });
// }

// async function recupererFiltres() {
//   try {
//     const response = await fetch("https://catfact.ninja/facts");

//     if (!response.ok) {
//       throw new Error("Mince une erreur");
//     }

//     const object = await response.json();
//     console.log(object.data);
//   } catch (error) {
//     console.log(error.message);
//   }
//   console.log("finally");
// }

recupererFiltres();

function displayFilters(categories) {   // fonction me permettant la creation de mes filtres sur fichier.html
  for (let i = 0; i < categories.length; i++) {
    const buttonFilterContainer = document.querySelector(".buttonSpace");
    const containerFilter = document.createElement("div");
    const buttonFilter = document.createElement("button");
    const textFilter = document.createElement("p");
    let buttonClass = document.querySelector(".buttonClass");

    buttonFilter.dataset.id = categories[i].id;
    textFilter.innerHTML = categories[i].name;

    buttonFilter.classList.add("buttonClass"); //creation d'une class à la div//

    buttonFilter.appendChild(textFilter);
    containerFilter.appendChild(buttonFilter);
    buttonFilterContainer.appendChild(containerFilter);
    Filters.appendChild(buttonFilterContainer);

    buttonFilter.addEventListener("click", function () { 
      //au clic sur le bouton, on lancer la fonction de filtrage
      getFilteredWorks(buttonFilter.dataset.id);
    });

    console.log(i);
  }

  //Récupération du button permettant l'affichage de toutes les figures -------------------------------------------------------------
  const buttonShowAllEl = document.querySelector("#button-show-all");
  buttonShowAllEl.addEventListener("click", showAllWorks);
}

function getFilteredWorks(categoryId) {
  //fonction qui filtre mes elements

  //Correction : seuls les figures présent dans la gallery doivent être filtrée -------------------------------------------------------
  //Sinon la photo de présentation disparait aussi étant donné que c'est une figure ---------------------------------------------------
  const figs = document.querySelectorAll(".gallery figure");
  for (let i = 0; i < figs.length; i++) {
    if (categoryId !== figs[i].dataset.categoryId) {
      figs[i].classList.add("hide");
    } else {
      figs[i].classList.remove("hide");
    }
  }
}

/**
 * Fonction permettant d'afficher toutes les figures présent sur la page  -----------------------------------------------------------------
 */
function showAllWorks() {
   console.log('click');
  const figs = document.querySelectorAll("figure");
  for (let i = 0; i < figs.length; i++) {
    figs[i].classList.remove("hide");
  }
}
