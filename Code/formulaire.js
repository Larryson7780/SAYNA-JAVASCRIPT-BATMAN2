let key = "556db057140c4b8f118864feb42715fa";
let id = 69; // batman

fetch(`https://www.superheroapi.com/api.php/${key}/${id}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur de connexion' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const batman = {
            questions: [
                {
                    question: "Quel est le nom complet de Batman II ?",
                    response: ["Bruce Wayne", "Clark Kent", data.biography["full-name"], "Peter Parker", "Wade Wilson"],
                    correct: "Terry McGinnis"
                },
                {
                    question: "Quelle est l'intelligence de Batman II sur une échelle de 100 ?",
                    response: ["50", data.powerstats.intelligence, "30", "90", "100"],
                    correct: 81
                },
                {
                    question: "Quelle est la première apparition de Batman II dans les comics ?",
                    response: [data.biography["first-appearance"],"Detective Comics #27", "Superman #1", "Spider-Man #1", "X-Men #1"],
                    correct: "Batman Beyond #1"
                },
                {
                    question: "Quel éditeur publie les histoires de Batman II ?",
                    response: ["DC Comics", "Marvel Comics", "Image Comics", data.biography.publisher, "Dark Horse Comics"],
                    correct: "DC Comics"
                },
                {
                    question: "Quel est l'alignement moral de Batman II ?",
                    response: [data.biography.alignment, "neutral", "chaotic", "selfish"],
                    correct: "good"
                },
                {
                    question: "Qui sont les parents de Batman II ?",
                    response: ["Thomas Wayne (father)", "Martha Wayne (mother)", data.connections.relatives, "Tony Stark (father, deceased)", "Natasha Romanoff (mother)"],
                    correct: "Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother)"
                },
                {
                    question: "À quel groupe Batman II est-il affilié ?",
                    response: ["Justice League", "Avengers", "X-Men", "Fantastic Four", data.connections["group-affiliation"]],
                    correct: "group-affiliation"
                },
                {
                    question: "Peux-tu montrer une image de Batman II ?",
                    response: [`<img src="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg" alt="batman">`, `<img src="data:image/jpeg;base64,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" alt="cameleon">                    `, `<img src="data:image/jpeg;base64,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" alt="oiseau">`, `<img src="data:image/jpeg;base64,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" alt="chat">`]
                }
            ],
            indexQuestion: 0,

            affichage: function () {
                const batmanObjet = this.questions[this.indexQuestion];
                const question = document.querySelector(".questionQuiz");
                const submit = document.querySelector(".submit");
                const numeroQuestion = document.querySelector(".numero_question");

                // Afficher le numéro de la question
                numeroQuestion.textContent = `${this.indexQuestion + 1} / ${this.questions.length}`;

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
                    const choix = document.querySelectorAll("input[name='choix']:checked");
                    const valeurs = Array.from(choix).map(choix => choix.value);

                    /*if (valeurs === batmanObjet.response) {

                    }*/
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
                    reponse.style.width = "200px";
                    reponse.innerHTML = `
<div class="message">
    Bravo, tu as terminé le quizz !
</div>
`;
                }
            }
        }

        batman.affichage();

    })
    .catch(error => {
        console.error(`Il y a eu un problème lors de l'utilisation de l'API`, error);
    });