(function () {
    "use strict";
    $(document).ready(initialiser);
    var lIconLang
    
    function initialiser(evt) {
        lIconLang = $(".selectLang img");
        lIconLang.hover(langHover, langNotHover);
    }
    
    function langHover(evt) {
        lIconLang.parent().parent().addClass("hoverActive");
        
        window.setTimeout(switchIcon, 250);
        
    }
    
    function langNotHover(evt) {
        lIconLang.parent().parent().removeClass("hoverActive");
        
        window.setTimeout(switchIcon, 250);
    }
    
    function switchIcon(evt) {
        if(lIconLang.attr("src") == "medias/lang_fr.svg") {
            lIconLang.attr("src", "medias/lang_en.svg");
        } else {
            lIconLang.attr("src", "medias/lang_fr.svg");
        }
    }
    
}());