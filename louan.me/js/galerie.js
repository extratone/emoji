(function () {
    "use strict";
    $(document).ready(initialiser);
    
    function initialiser(evt) {
        let lesDivCreation = $(".creation");
        lesDivCreation.hover(afficherBoutons, cacherBoutons);
        
        let lesBoutonsPlus = $(".btnPlus")
        lesBoutonsPlus.click(afficherImage);
        
        let lesBoutonsPlay = $(".btnPlay");
        lesBoutonsPlay.click(jouerVideo);

    }
    
    function afficherBoutons(evt) {
        let leThis = $(this);
        let laZoneBoutons = leThis.children();
        laZoneBoutons.css("display", "flex");
    }
    
    function cacherBoutons(evt) {
        let leThis = $(this);
        let laZoneBoutons = leThis.children();
        laZoneBoutons.hide();
    }
    
    function afficherImage(evt) {
        let leThis = $(this);
        let leNomFichier = $(this).data("source");
        let leCheminFichier = "medias/creations/contenu/"+leNomFichier ;
        let leModalGalerie = $(".modalGalerie");
        let lImage = $(".imageAffichee");
        
        lImage.attr("src", leCheminFichier);
        leModalGalerie.css("display", "flex");
        leModalGalerie.click(cacherModal)
    }
    
    function cacherModal(evt) {
        let leModalGalerie = $(".modalGalerie");
        leModalGalerie.css("display", "none");
    }
    
    function jouerVideo(evt) {
        let leThis = $(this);
        let laVideoYoutube = $(this).data("videoyt");
        let lesBoutons = $(this).parent().parent();
        
        lesBoutons.replaceWith("<iframe width=\"560\" height=\"315\" src=\"" + laVideoYoutube + "?autoplay=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");
        
    }
    
    
}());