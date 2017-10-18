window.addEventListener("load", initialiser, false);
window.addEventListener("load", choisirFeculent, false);
window.addEventListener("load", choisirProteine, false);
window.addEventListener("load", choisirRecette, false);

function initialiser (evt)
{
    //Rendre le bouton bonjour réactif au click
    var btnRecette = document.getElementById("CliquerRecette");
    btnRecette.addEventListener("click", choisirRecette);
    var btnFeculent = document.getElementById("CliquerFeculent");
    btnFeculent.addEventListener("click", choisirFeculent);
    var btnProteine = document.getElementById("CliquerProteine");
    btnProteine.addEventListener("click", choisirProteine);
    var saison = document.getElementById('saison');
    saison.addEventListener("change", choisirLegume);
}

function choisirLegume (evt)
{  
    var saison = document.getElementById('saison');
    var saisonChoisie = saison.options[saison.selectedIndex].innerHTML;
    
    switch(saisonChoisie)
    {
        case "Printemps" :
        //Charger les éléments dans les tableaux
        var tableauLegumePrintemps = ['a','b','c'];
    
        //Choisi un chiffre entre 0 et 2 (0 ou 1 ou 2)
        var nbAleaPrintemps = Math.floor((Math.random()*3));
    
        //Attribuer la recette
        var legumeChoisiPrintemps = tableauLegumePrintemps[nbAleaPrintemps];
        document.getElementById("legume").innerHTML = legumeChoisiPrintemps;
        var nvLegumePrintemps=document.getElementById("legumeNope");
            nvLegumePrintemps.addEventListener("click",choisirNvLegumePrintemps);
            break;
            
            
        case "Ete" :
        //Charger les éléments dans les tableaux
        var tableauLegumeEte = ['d','e','f'];
    
        //Choisi un chiffre entre 0 et 2 (0 ou 1 ou 2)
        var nbAleaEte = Math.floor((Math.random()*3));
    
        //Attribuer la recette
        var legumeChoisiEte = tableauLegumeEte[nbAleaEte];
        document.getElementById("legume").innerHTML = legumeChoisiEte;
        var nvLegumeEte=document.getElementById("legumeNope");
        nvLegumeEte.addEventListener("click",choisirNvLegumeEte);
            break;
            
            
        case "Automne" :
        //Charger les éléments dans les tableaux
        var tableauLegumeAutomne = ['g','h','i'];
    
        //Choisi un chiffre entre 0 et 2 (0 ou 1 ou 2)
        var nbAleaAutomne = Math.floor((Math.random()*3));
    
        //Attribuer la recette
        var legumeChoisiAutomne = tableauLegumeAutomne[nbAleaAutomne];
        document.getElementById("legume").innerHTML = legumeChoisiAutomne;
        var nvLegumeAutomne=document.getElementById("legumeNope");
        nvLegumeAutomne.addEventListener("click",choisirNvLegumeAutomne);
            break;
            
            
        case "Hiver" :
        //Charger les éléments dans les tableaux
        var tableauLegumeHiver = ['j','k','l'];
    
        //Choisi un chiffre entre 0 et 2 (0 ou 1 ou 2)
        var nbAleaHiver = Math.floor((Math.random()*3));
    
        //Attribuer la recette
        var legumeChoisiHiver = tableauLegumeHiver[nbAleaHiver];
        document.getElementById("legume").innerHTML = legumeChoisiHiver;
        var nvLegumeHiver=document.getElementById("legumeNope");
        nvLegumeHiver.addEventListener("click",choisirNvLegumeHiver);
            break;
    }
    //Faire boucler la fonction
    var saison = document.getElementById('saison');
    saison.addEventListener("change", choisirLegume);    
}

function choisirNvLegumePrintemps (evt)
{
    //Charger les éléments dans les tableaux
    var tableauLegumePrintemps = ['a','b','c'];
    
    //Choisi un chiffre entre 0 et 2 (0 ou 1 ou 2)
    var nbAleaPrintemps = Math.floor((Math.random()*3));
    
    //Attribuer la recette
    var legumeChoisiPrintemps = tableauLegumePrintemps[nbAleaPrintemps];
    document.getElementById("legume").innerHTML = legumeChoisiPrintemps;
    var nvLegume=document.getElementById("legumeNope");
    nvLegume.addEventListener("click",choisirNvLegumePrintemps);  
}

function choisirNvLegumeEte (evt)
{
    //Charger les éléments dans les tableaux
    var tableauLegumeEte = ['d','e','f'];
    
    //Choisi un chiffre entre 0 et 2 (0 ou 1 ou 2)        
    var nbAleaEte = Math.floor((Math.random()*3));
    
    //Attribuer la recette
    var legumeChoisiEte = tableauLegumeEte[nbAleaEte];
    document.getElementById("legume").innerHTML = legumeChoisiEte;
    var nvLegumeEte=document.getElementById("legumeNope");
    nvLegumeEte.addEventListener("click",choisirNvLegumeEte);
}

function choisirNvLegumeAutomne (evt)
{
    //Charger les éléments dans les tableaux
    var tableauLegumeAutomne = ['g','h','i'];
    
    //Choisi un chiffre entre 0 et 2 (0 ou 1 ou 2)
    var nbAleaAutomne = Math.floor((Math.random()*3));
    
    //Attribuer la recette
    var legumeChoisiAutomne = tableauLegumeAutomne[nbAleaAutomne];
    document.getElementById("legume").innerHTML = legumeChoisiAutomne;
    var nvLegumeAutomne=document.getElementById("legumeNope");
    nvLegumeAutomne.addEventListener("click",choisirNvLegumeAutomne);
}

function choisirNvLegumeHiver (evt)
{
    //Charger les éléments dans les tableaux
    var tableauLegumeHiver = ['j','k','l'];
    
    //Choisi un chiffre entre 0 et 2 (0 ou 1 ou 2)
    var nbAleaHiver = Math.floor((Math.random()*3));
    
    //Attribuer la recette
    var legumeChoisiHiver = tableauLegumeHiver[nbAleaHiver];
    document.getElementById("legume").innerHTML = legumeChoisiHiver;
    var nvLegumeHiver=document.getElementById("legumeNope");
    nvLegumeHiver.addEventListener("click",choisirNvLegumeHiver);
}


function choisirRecette (evt)
{
    //Charger les éléments dans les tableaux
    var tableauRecette = ['Croque Monsieur','Salade froide','Crêpes'];
    
    //Choisi un chiffre entre 0 et 2 (0 ou 1 ou 2)
    var nbAlea = Math.floor((Math.random()*3));
    
    //Attribuer la recette
    var recetteChoisie = tableauRecette[nbAlea];
    document.getElementById("recette").innerHTML = recetteChoisie;
    
    //Faire boucler la fonction
    var btn = document.getElementById("CliquerRecette");
    btn.addEventListener("click", choisirRecette);
}

function choisirFeculent (evt)
{
    //Charger les éléments dans les tableaux
    var tableauFeculent = ['Pomme de terre','Riz','Blé'];
    
    //Choisi un chiffre entre 0 et 2 (0 ou 1 ou 2)
    var nbAlea = Math.floor((Math.random()*3));
    
    //Attribuer le légume
    var feculentChoisie = tableauFeculent[nbAlea];
    document.getElementById("feculent").innerHTML = feculentChoisie;
    
    //Faire boucler la fonction
    var btn = document.getElementById("CliquerFeculent");
    btn.addEventListener("click", choisirFeculent);
}

function choisirProteine (evt)
{    
    //Charger les éléments dans les tableaux
    var tableauProteine = ['Oeufs','Lentilles','Amandes'];
    
    //Choisi un chiffre entre 0 et 2 (0 ou 1 ou 2)
    var nbAlea = Math.floor((Math.random()*3));
    
    //Attribuer la recette
    var proteineChoisie = tableauProteine[nbAlea];
    document.getElementById("proteine").innerHTML = proteineChoisie;
    
    //Faire boucler la fonction
    var btn = document.getElementById("CliquerProteine");
    btn.addEventListener("click", choisirProteine);
}