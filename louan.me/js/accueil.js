(function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", initialiser);
    var leMain
    var leCodeSection

    function initialiser(evt) {
        window.addEventListener("wheel", modifierPage);
        document.querySelector(".instructionScroll").addEventListener("click", modifierPage);
        
        
        /* Les centres d'intérêt */
        let lesCentresInteret = document.querySelectorAll(".ci");
        for (let unCentreInteret of lesCentresInteret) {
            unCentreInteret.addEventListener("mouseenter", afficherLabelCI);
            unCentreInteret.addEventListener("mouseleave", cacherLabelCI);
        }
        
        /* Les points du parcours */
        let lesTextesParcours = document.querySelectorAll("#parcours .texte");
        let unDelai = 1
        for (let unTexteParcours of lesTextesParcours) {
            unTexteParcours.style.animationDelay = 300 * unDelai + "ms";
            unDelai++
        }
    }

    function modifierPage(evt) {
        
        /* Modification de la page */
        let lInstructionScroll = document.querySelector(".instructionScroll");
        lInstructionScroll.style.animationName="transitionInstrucScroll";
        lInstructionScroll.style.animationDelay="0s";
        

        leMain = document.querySelector("main");
        leMain.classList.add("postScroll");
        leMain.classList.remove("preScroll");

        let leTitre = document.querySelector("h1");
        leTitre.style.animationName = "transitionTitre";
        leTitre.style.animationDelay = "0s";
        leTitre.style.animationDuration = "1s";

        let leTitreSpan = document.querySelector("h1 span");
        leTitreSpan.style.animationName = "transitionTitreSpan";
        leTitreSpan.style.animationDelay = "0s";
        leTitreSpan.style.animationDuration = "1s";

        let laPartieGauche = document.querySelector(".partieGauche");
        laPartieGauche.style.display = "flex";

        let lesBoutons = document.querySelectorAll(".listeBoutons button");
        var count = 0
        for(let unBouton of lesBoutons) {
            count++
            unBouton.style.animationDelay = 400 * (count / 2) + "ms";
            unBouton.addEventListener("click", afficherSection);
        }
        let leNav = document.querySelector("nav");
        leNav.style.display = "block";
        
        let leBoutonLang = document.querySelector(".selectLang");
        leBoutonLang.style.display = "block";
        
        let leFooter = document.querySelector("footer");
        leFooter.style.display = "flex";
    }

    function afficherSection(evt) {
        
        /* Afficher une section */
        document.querySelector("h1").style.display = "none";
        
        leCodeSection = this.dataset.section;
        
        if (leMain.classList.contains("postClick")) {
            leMain.setAttribute("id", "changementSection");
            var lesH2 = document.querySelectorAll(".partieDroite h2");
            for (let unH2 of lesH2) {
                unH2.style.visibility = "hidden";
            }
            var lesDetails =
            document.querySelectorAll(".partieDroite .details");
            for (let unDetail of lesDetails) {
                unDetail.style.visibility = "hidden";
            }
            
            window.setTimeout(afficherSectionSuite, 700);
        } else {
            afficherSectionSuite();
        }
    }
    
    function afficherSectionSuite(evt) {
        leMain.removeAttribute("id");
        var lesH2 = document.querySelectorAll(".partieDroite h2");
            for (let unH2 of lesH2) {
                unH2.style.visibility = "visible";
            }
          var lesDetails =
            document.querySelectorAll(".partieDroite .details");
            for (let unDetail of lesDetails) {
                unDetail.style.visibility = "visible";
            }
        
        let lesSections = document.querySelectorAll(".partieDroite section");
        for(let uneSection of lesSections) {
            if(uneSection.dataset.section == leCodeSection) {
                uneSection.style.display = "block";
            } else {
                uneSection.style.display = "none";
            }
        }
        leMain.classList.add("postClick");

    }
    
    /* Les centres d'intérêt */
    function afficherLabelCI(evt) {
        let leLabel = this.dataset.label;
        document.querySelector(".ci_label").textContent = leLabel;
        document.querySelector(".ci_label").style.visibility = "visible";
    }
    
    function cacherLabelCI(evt) {
        document.querySelector(".ci_label").style.visibility = "hidden";
    }
}());




