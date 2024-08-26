let key = "556db057140c4b8f118864feb42715fa";
let id = 69; // batman

const form = document.querySelector("form");

fetch(`https://www.superheroapi.com/api.php/${key}/${id}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur de connexion' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        // Afficher l'image du super-héros
        const image = document.createElement("img");
        image.width = 200;
        image.src = data.image.url;
        document.querySelector("#image").appendChild(image);

        // Créer les cases à cocher
        const tableau = ["Le Sphinx", "Saphir", "Le Joker", "Batman"];
        tableau.forEach(function(element, index) {
            const label = document.createElement("label");
            label.htmlFor = `chk_question${index + 1}`;
            const input = document.createElement("input");
            input.type = "checkbox";
            input.name = "choix";
            input.id = `chk_question${index + 1}`;
            input.value = element;
            const span = document.createElement("span");
            span.textContent = element;
            label.appendChild(input);
            label.appendChild(span);
            document.querySelector("form").appendChild(label);
        });
        const submit = document.createElement("input");
        submit.type = "submit";
        submit.value = "Question suivante";
        document.querySelector("form").appendChild(submit);
    })
    .catch(error => {
        console.error(`Il y a eu un problème lors de l'utilisation de l'API`, error);
    });



form.addEventListener('submit', (event) => {
    event.preventDefault();
    const choix = document.querySelectorAll('input[name="choix"]:checked');
    const valeurs = [];
    choix.forEach(function (choix) {
        valeurs.push(choix.value);
    });
    console.log(valeurs);
})
