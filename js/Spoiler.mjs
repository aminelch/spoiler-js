class Spoiler {

    constructor(targetClass="spoiler") {
        this.targetClass="spoiler"
        this.defaultTextContent = "afficher le spoiler";
        this.spoilerElements = []; //tableau qui va contenir les spoilers
        this.spoilerElements = this.getAllSpoilers()
    }

    /**
     * Retourne les elements qui ont la classe .spoiler
     * @return {HTMLElement}
     */
    getAllSpoilers= ()=> {
        return document.querySelectorAll(this.targetClass)
    }

    /*
    * permet de créer un button pour un spoiler
    * @param {HTMLElement} element
    */
    createSpoilerButton = (element) => {
        //on crée le button
        let button = document.createElement("button")
        //on modifie le text du button
        button.textContent = this.defaultTextContent
        element.after(button)

        // on écoute sur le click de chaque button
        button.addEventListener("click", () => {
            // on ajoute la classe visible au span
            element.classList.add("visible")
            // on supprimer le button
            button.parentNode.removeChild(button)
            console.log('btn clicked')
        })


    }

    /**
     * Créer des buttons spoilers
     */
    spoilIt() {
        // on parcours la liste des elements
        for (const singleSpoiler of this.spoilerElements) {
            this.createSpoilerButton(singleSpoiler)
        }
    }
}

export {Spoiler};

