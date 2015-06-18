window.addEventListener("load", initialiser);

function initialiser(evt)
{
    var popupCorrespondance = document.getElementById("popupCorrespondance");
    popupCorrespondance.style.display = "none";
    var boiteAuxLettres = document.getElementById("boiteAuxLettres");
    boiteAuxLettres.addEventListener("click", afficherCorrespondances);
}

function afficherCorrespondances(evt)
{
    var popupCorrespondance = document.getElementById("popupCorrespondance");
    popupCorrespondance.style.display = "block";
    var croix = document.getElementById("croix");
    croix.addEventListener("click", fermerPopupCorrespondance);
}

function fermerPopupCorrespondance (evt)
{
    var popupCorrespondance = document.getElementById("popupCorrespondance");
    popupCorrespondance.style.display = "none";
}