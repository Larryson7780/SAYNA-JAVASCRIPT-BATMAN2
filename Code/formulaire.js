let key = "556db057140c4b8f118864feb42715fa";
let id = 69; // batman

const batman = {
    questions: [
        {
            question: "Quel est le nom complet de Batman II ?",
            response: ["Bruce Wayne", "Clark Kent", "Peter Parker", "Wade Wilson"]
        },
        {
            question: "Quelle est l'intelligence de Batman II sur une échelle de 100 ?",
            response: ["50", "30", "90", "100"]
        },
        {
            question: "Quelle est la première apparition de Batman II dans les comics ?",
            response: ["Detective Comics #27", "Superman #1", "Spider-Man #1", "X-Men #1"]
        },
        {
            question: "Quel éditeur publie les histoires de Batman II ?",
            response: ["DC Comics", "Marvel Comics", "Image Comics", "Dark Horse Comics"]
        },
        {
            question: "Quel est l'alignement moral de Batman II ?",
            response: ["good", "neutral", "chaotic", "selfish"]
        },
        {
            question: "Qui sont les parents de Batman II ?",
            response: ["Thomas Wayne (father)", "Martha Wayne (mother)", "Tony Stark (father, deceased)", "Natasha Romanoff (mother)"]
        },
        {
            question: "À quel groupe Batman II est-il affilié ?",
            response: ["Justice League", "Avengers", "X-Men", "Fantastic Four"]
        },
        {
            question: "Quelle est la couleur des yeux et des cheveux de Batman II ?",
            response: ["Yeux : Brown, Cheveux : Black", "Yeux : Green, Cheveux : Blonde", "Yeux : Hazel, Cheveux : Gray", "Yeux : Black, Cheveux : White"]
        },
        {
            question: "Peux-tu montrer une image de Batman II ?",
            response: ["![Image de Batman](https://www.example.com/batman.jpg)", "![Image de Superman](https://www.example.com/superman.jpg)", "![Image de Spider-Man](https://www.example.com/spiderman.jpg)", "![Image de Iron Man](https://www.example.com/ironman.jpg)"]
        }
    ],
    indexQuestion: 0,

    affichage: function () {
        const batmanObjet = this.questions[this.indexQuestion];
        const question = document.querySelector(".questionQuiz");
        const submit = document.querySelector(".submit");

        // Afficher la question
        question.textContent = batmanObjet.question;

        // Afficher les réponses
        const reponse = document.querySelector(".reponseQuiz");
        reponse.innerHTML = "";

        batmanObjet.response.forEach((element, index) => {
            const label = `
                <label for="chk_question${index}">
                    <input type="checkbox" name="choix" id="chk_question${index}" value="${element}">
                    ${element}
                </label>
            `;
            reponse.innerHTML += label;
        });

        // Utiliser une fonction fléchée pour conserver le contexte de `this`
        submit.addEventListener("click", (event) => {
            event.preventDefault(); // Empêche le comportement par défaut
            this.suivante();
        });
    },

    suivante: function () {
        this.indexQuestion++;

        // Vérifier si l'index est toujours dans les limites du tableau de questions
        if (this.indexQuestion < this.questions.length) {
            this.affichage();
        } else {
            // Afficher le message de fin si toutes les questions ont été posées
            const reponse = document.querySelector(".reponseQuiz");
            reponse.innerHTML = "Bravo, tu as terminé le quizz !";
        }
    }
}

batman.affichage();

// Mbola tsy tafiditra lay valiny marina avy @ API


/*

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

*/

