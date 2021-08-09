

const throwDe = function () {
    const nbre = (Math.floor(Math.random() * 6) + 1);
    return nbre
}

const clickBtn = function() {
    // Lancer le dé virtuel et récupérer le résultat
    const resultat = throwDe()
    //Récupérer l'image
    const img = document.getElementById('img-de')

    //Ajouter l'attribut src avec le résultat
    img.src = 'img/de' + resultat + '.jpg'

    //Afficher le résultat dans le container
    let container = document.getElementById('container')

    //Ajouter le texte au container
    container.textContent = resultat
}

//Récupérer le bouton
const throwBtn = document.getElementById('throw-btn')


//Executer le lancer de dé lors du click

throwBtn.addEventListener('click', clickBtn)
const deTxt = {
    '1' : 'un',
    '2' : 'deux',
    '3' : 'trois',
    '4' : 'quatre',
    '5' : 'cinq',
    '6' : 'six',
}







//sinon stocker le résultat dans round
//ajouter le résultat du round avec le bouton hold
//réinitialiser round à 0 à chaque tour
//Le premier arrivé à 100 points à gagné