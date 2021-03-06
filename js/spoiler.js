window.onload = () => {

    (function () {

        const btnTextContent = "afficher le spoiler"
        // on sélectionne les span qui ont la classe .spoiler
        let spans = document.querySelectorAll(".spoiler")

        // on parcours la liste des elements
        for (let index = 0; index < spans.length; index++) {
            const element = spans[index];
            createSpoilerButton(element)
        }

        /**
         * permet de créer un button pour un spoiler
         * @param {HTMLElement} element
         */
        function createSpoilerButton(element) {
            //on crée le button
            let button = document.createElement("button")
            //on modifie le text du button
            button.textContent = btnTextContent
            // button.dataset.spoilerContent=span.innerHTML
            // injecte le button après le span
            element.after(button)

            // on ecoute sur le click de chaque button
            button.addEventListener("click", () => {
                // on ajoute la classe visible au span
                element.classList.add("visible")
                // on supprimer le button
                button.parentNode.removeChild(button)
                console.log('btn clicked')
            })
        }

    })()
}
