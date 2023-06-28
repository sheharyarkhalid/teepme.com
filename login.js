const loginFormEl = document.getElementById("login-form"); //selection du formulaire par la méthode getElementbyId
loginFormEl.addEventListener("submit",   async (event) => { //au click sur le formulaire, ajout d'un event pour eviter le caractére 
  event.preventDefault();

  const emailInputEl = loginFormEl.querySelector('.emailCl'); //selection du placeholder email
  console.log(emailInputEl);
  const passwordInputEl = loginFormEl.querySelector('.passwordCl'); //selection du placeholder password
  console.log(passwordInputEl);

  const userEmail = emailInputEl.value; //  dans cette propriété (value) que sera stocker l'input saisi par l'utiisateur 
  const userPassword = passwordInputEl.value; //

  if (!userEmail) alert("entrez un mail"); //si userEmail est vide alors affiche l'alerte

  console.log(userEmail);
  console.log(userPassword);





  try {      //method post pour envoyer mes informations
    const requestParams = { //technique
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
      headers:{
        "Content-type": "application/json"
      }
    };

    const response = await fetch("http://localhost:5678/api/users/login", requestParams);

    if (!response.ok) {
      throw new Error(`${response.status} : ${response.statusText}`); //exemple 404 : Not Found
    }

    const data = await response.json(); //reponse est stockée dans cette constante 
    console.log(data);
    // on verifie si la réponse contient un token(nos informations son crrct) ou pas (sont incorrectes)
    if(data.token){
      localStorage.setItem('token',data.token);
    }else
      alert('Email ou mot de passe incorrect');

    window.location.href = "index.html"
    console.log(data.message); //{message : "L'utilisateur à bien été enregistré"}
  } catch (error) {
    console.log(error.message); 
  }
});






