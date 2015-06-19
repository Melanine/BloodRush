window.addEventListener("load", initialiser);
window.addEventListener("load", genererHistoire);
var leGroupe;
var secondes = 30;
var numTimer;
var nbClick = 1;
var idGroupeSelected = "";
var idLvlSelected = "";
var aPlus = new Array(5); 
for (var a=0; a < 5; a++) { 
  aPlus[a] = new Image();
  aPlus[a].src = "../www/img/pocheA+_"+a+".jpg"; 
} 

var aMoins = new Array(5); 
for (var b=0; b < 5; b++) { 
  aMoins[b] = new Image();
  aMoins[b].src = "../www/img/pocheA-_"+b+".jpg"; 
} 

var abPlus = new Array(5); 
for (var c=0; c < 5; c++) { 
  abPlus[c] = new Image();
  abPlus[c].src = "../www/img/pocheAB+_"+c+".jpg"; 
}

var abMoins = new Array(5); 
for (var d=0; d < 5; d++) { 
  abMoins[d] = new Image();
  abMoins[d].src = "../www/img/pocheAB-_"+d+".jpg"; 
} 

var bPlus = new Array(5); 
for (var e=0; e < 5; e++) { 
  bPlus[e] = new Image();
  bPlus[e].src = "../www/img/pocheB+_"+e+".jpg"; 
} 

var bMoins = new Array(5); 
for (var f=0; f < 5; f++) { 
  bMoins[f] = new Image();
  bMoins[f].src = "../www/img/pocheB-_"+f+".jpg"; 
} 

var oPlus = new Array(5); 
for (var g=0; g < 5; g++) { 
  oPlus[g] = new Image();
  oPlus[g].src = "../www/img/pocheO+_"+g+".jpg"; 
} 

var oMoins = new Array(5); 
for (var h=0; h < 5; h++) { 
  oMoins[h] = new Image();
  oMoins[h].src = "../www/img/pocheO-_"+h+".jpg"; 
} 

var tableauPrenom = ["Étienne", "Stéphane", "Éliane", "Émilie", "Erwan"];

var tableauCorrespondance = {groupeAPlus : {"correspondances" : ["A+","A-","O+","O-"], "nom" : "A+"},groupeAMoins : {"correspondances" : ["A-","O-"], "nom" : "A-"}, groupeBPlus : {"correspondances" : ["O-", "O+", "B-", "B+"], "nom" : "B+"}, groupeBMoins : {"correspondances" : ["O-","B-"], "nom" : "B-"}, groupeABPlus : {"correspondances" : ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], "nom" : "AB+"}, groupeABMoins : {"correspondances" : ["O-", "A-", "B-", "AB-"], "nom" : "AB-"}, groupeOPlus : {"correspondances" : ["O-", "O+"], "nom" : "O+"}, groupeOMoins : {"correspondances" : ["O-"], "nom" : "O-"}};

var tableauNomGroupe =["groupeAPlus", "groupeAMoins", "groupeBMoins", "groupeBPlus", "groupeABMoins", "groupeABPlus",  "groupeOMoins", "groupeOPlus"];

function initialiser(evt)
{
    var popupFin1 = document.getElementById("popupFin1");
    popupFin1.style.display = "none";
    var popupFin2 = document.getElementById("popupFin2");
    popupFin2.style.display = "none";
    var popupFin3 = document.getElementById("popupFin3");
    popupFin3.style.display = "none";
    var choisirPopup = document.getElementById("choisirPopup");
    choisirPopup.style.display = "none";
    var chrono = document.getElementById("chrono");
    chrono.style.display = "none";
    var popupDebut = document.getElementById("popupDebut");
    popupDebut.style.display = "none";
    var btnRecommencer = document.getElementsByClassName("btnRecommencer");
    for (var i =0; i<btnRecommencer.length; i++)
    {
        btnRecommencer[i].addEventListener("touchstart", rejouer);
    }           
    var btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("touchstart", afficherRegles);
    var audio = document.querySelector ("audio");
    audio.play();
    audio.volume = 1;
    var logoSon = document.getElementById("logoSon");
    logoSon.addEventListener("touchstart", couperSon);
}

function genererHistoire(evt)
{   
    var maladie = document.getElementById("maladie");
    var nbAlea = Math.floor((Math.random() * 3) + 1);
    switch (nbAlea)
    {
        case 1 : maladie.innerHTML = "cardiomyopathie hypertrophique";
            break;
        case 2 : maladie.innerHTML = "leucémie";
            break;
        case 3 : maladie.innerHTML = "aplasie médullaire idiopathique";
            break;
    }
    var prenom = document.getElementsByClassName("prenom");
    var nbAlea2 = Math.floor((Math.random() * 5));
    for (var i = 0; i <prenom.length; i++)
    {
        prenom[i].innerHTML = tableauPrenom[nbAlea2];
    }
    var groupe = document.getElementsByClassName("groupe");
    var nbAlea3=Math.floor(Math.random()*tableauNomGroupe.length);
    for (var j = 0; j <groupe.length; j++)
    {
        groupe[j].innerHTML = tableauCorrespondance[tableauNomGroupe[nbAlea3]]["nom"];
        leGroupe = tableauCorrespondance[tableauNomGroupe[nbAlea3]];
    }         
}

function afficherRegles(evt)
{
    var histoirePopup = document.getElementById("histoirePopup");
    histoirePopup.style.display = "none";
    var popupDebut = document.getElementById("popupDebut");
    popupDebut.style.display = "block";
    var btnGoJeu = document.getElementById("btnGoJeu");
    btnGoJeu.addEventListener("touchstart", demarrerPopupChoix);
}

function demarrerPopupChoix(evt)
{
    var popupDebut = document.getElementById("popupDebut");
    popupDebut.style.display = "none";
    var choisirPopup = document.getElementById("choisirPopup");
    choisirPopup.style.display = "block";
    var lesPGroupe = document.querySelectorAll("#choixGroupe>p");
    for(var j=0; j<lesPGroupe.length; j++)
    {
        lesPGroupe[j].addEventListener("touchstart", choisirGr); 
    }
    var lesPNiveau = document.getElementById("choixNiveau").children;
    for(var k=0; k<lesPNiveau.length; k++)
    {
        lesPNiveau[k].addEventListener("touchstart",choisirLvl);       
    }
}

function choisirGr (evt)
{
    var idGroupe = this.id;
	var PSelect = document.querySelector (".selectedGr");
	if (PSelect!=null)
	{		
		PSelect.classList.toggle("selectedGr");
	}
	this.classList.add("selectedGr");
    idGroupeSelected = this.id;
    
    switch (idGroupe)
    {
        case "A+" : 
            var srcFond = aPlus[1].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
            break;
        case "A-" : 
            this.src = "../www/img/a--.jpg";
            var srcFond = aMoins[1].src;
             document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
            break;
        case "B+" : 
            this.src = "../www/img/b++.jpg";
            var srcFond = bPlus[1].src;
             document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
            break;
        case "B-" : 
            this.src = "../www/img/b--.jpg";
            var srcFond = bMoins[1].src;
             document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
            break;
        case "AB+" : 
            this.src = "../www/img/ab++.jpg";
            var srcFond = abPlus[1].src;
             document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
            break;
        case "AB-" : 
            this.src = "../www/img/ab--.jpg";
            var srcFond = abMoins[1].src;
             document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
            break;
        case "O+" : 
            this.src = "../www/img/o++.jpg";
            var srcFond = oPlus[1].src;
             document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
            break;
        case "O-" : 
            this.src = "../www/img/o--.jpg";
            var srcFond = oMoins[1].src;
             document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
            break;
    }
    if(idGroupeSelected!="" && idLvlSelected!="")
    {
        var btnChoisir = document.getElementById("btnChoisir");
        btnChoisir.addEventListener("touchstart", goJouer);
    }
}

function choisirLvl(evt)
{
    idLvlSelected = this.id;
	var PSelectLvl = document.querySelector (".selectedLvl");
	if (PSelectLvl!=null)
	{		
		PSelectLvl.classList.toggle("selectedLvl");
	}
	this.classList.add("selectedLvl");
    if(idGroupeSelected!="" && idLvlSelected!="")
    {
        var btnChoisir = document.getElementById("btnChoisir");
        btnChoisir.addEventListener("touchstart", goJouer);
    }
}

function goJouer(evt)
{
    var choisirPopup = document.getElementById("choisirPopup");
    choisirPopup.style.display = "none";
    var btnRemplir = document.getElementById("btnRemplir");
    btnRemplir.addEventListener("touchstart", goJouer2);
    var chrono = document.getElementById("chrono");
    chrono.style.display = "block";
    var secondes = document.getElementById("secondes");
    secondes.innerHTML = "30''"
}

function goJouer2 (evt)
{
    numTimer = setInterval(goChrono, 1000);
    this.removeEventListener("touchstart", goJouer2);
    this.addEventListener("touchstart",compterClick);    
}


function goChrono (evt)
{
    var audio = document.querySelector ("audio");
    var secondesVar = document.getElementById("secondes");
    secondes=secondes-1; 
    if (secondes>=0)
    {
        secondesVar.innerHTML = secondes + "''";  
    }
    else
    {
        secondesVar.innerHTML = "fini";
        clearInterval(numTimer);
        var popupFin2 = document.getElementById("popupFin2");
        popupFin2.style.display = "block";
        var btnRemplir = document.getElementById("btnRemplir");
        btnRemplir.removeEventListener("touchstart",compterClick);
        var chrono = document.getElementById("chrono");
        chrono.style.display = "none";
        //Récupérer la balise audio et changer le source
        audio.src =("../www/audio/cardiac.mp3");
        audio.volume=0.2;
    }
    if(secondes==5)
    {
        //Récupérer la balise audio et changer le source
        audio.src =("../www/audio/speed.mp3");
        audio.volume=0.4; 
    }
}

function compterClick(evt)
{
    nbClick = nbClick + 1;
    var nbClick1;
    var nbClick2;
    var nbClick3;
    var nbClick4;
    switch(idLvlSelected)
    {
        case "facile": 
            nbClick1 = 15;
            nbClick2 = 30;
            nbClick3 = 45;
            nbClick4 = 60;
            break;
        case "moyen": 
            nbClick1 = 30;
            nbClick2 = 60;
            nbClick3 = 90;
            nbClick4 = 120;
            break;
        case "difficile": 
            nbClick1 = 50;
            nbClick2 = 100;
            nbClick3 = 150;
            nbClick4 = 200;
            break;    
    }
    if (nbClick == nbClick1)
    {
       switch (idGroupeSelected)
       {
            case "A+" : 
            var srcFond = aPlus[2].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "A-" : 
            var srcFond = aMoins[2].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "B+" : 
            var srcFond = bPlus[2].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "b-" : 
            var srcFond = bMoins[2].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "AB+" : 
            var srcFond = abPlus[2].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "AB-" : 
            var srcFond = abMoins[2].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "O+" : 
            var srcFond = oPlus[2].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "O-" : 
            var srcFond = oMoins[2].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break; 
       }
    }
    
    if (nbClick == nbClick2)
    {
       switch (idGroupeSelected)
       {
            case "A+" : 
            var srcFond = aPlus[3].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "A-" : 
            var srcFond = aMoins[3].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "B+" : 
            var srcFond = bPlus[3].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "B-" : 
            var srcFond = bMoins[3].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "AB+" : 
            var srcFond = abPlus[3].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "AB-" : 
            var srcFond = abMoins[3].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "O+" : 
            var srcFond = oPlus[3].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "O-" : 
            var srcFond = oMoins[3].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break; 
       }
    }
    
   if (nbClick == nbClick3)
    {
       switch (idGroupeSelected)
       {
            case "A+" : 
            var srcFond = aPlus[4].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "A-" : 
            var srcFond = aMoins[4].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "B+" : 
            var srcFond = bPlus[4].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "B-" : 
            var srcFond = bMoins[4].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "AB+" : 
            var srcFond = abPlus[4].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "AB-" : 
            var srcFond = abMoins[4].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "O+" : 
            var srcFond = oPlus[4].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "O-" : 
            var srcFond = oMoins[4].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break; 
       }
    }
    
    if (nbClick == nbClick4)
    {
        clearInterval(numTimer);
       switch (idGroupeSelected)
       {
            case "A+" : 
            var srcFond = aPlus[0].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "A-" : 
            var srcFond = aMoins[0].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "B+" : 
            var srcFond = bPlus[0].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "B-" : 
            var srcFond = bMoins[0].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "AB+" : 
            var srcFond = abPlus[0].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "AB-" : 
            var srcFond = abMoins[0].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "O+" : 
            var srcFond = oPlus[0].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break;
            case "O-" : 
            var srcFond = oMoins[0].src;
            document.getElementById("main").style.backgroundImage = "url("+srcFond+")";
                break; 
       }
        nbClick=0;
        this.removeEventListener("touchstartstart", goJouer);
        var boolGagne = false;
        for (var i= 0; i<leGroupe["correspondances"].length;i++)
        {
            if (idGroupeSelected === leGroupe["correspondances"][i])
            {
                boolGagne = true;
            }
        }
        if (boolGagne)
        {
            var popupFin1 = document.getElementById("popupFin1");
            popupFin1.style.display = "block";
            var btnRemplir = document.getElementById("btnRemplir");
            btnRemplir.removeEventListener("touchstart",compterClick);
            //Récupérer balise audio et changer la source
            var audio = document.querySelector ("audio");
            audio.src =("../www/audio/applause.mp3");
            audio.volume=0.5;
        }
        else
        {
            var popupFin3 = document.getElementById("popupFin3");
            popupFin3.style.display = "block";
            var btnRemplir = document.getElementById("btnRemplir");
            btnRemplir.removeEventListener("touchstart",compterClick);
            //Récupérer balise audio et changer la source
            var audio = document.querySelector ("audio");
            audio.src =("../www/audio/cardiac.mp3");
            audio.volume=0.2;
        }
        var chrono = document.getElementById("chrono");
        chrono.style.display = "none";
    }
}

function rejouer(evt)
{
    location.reload();
}

function couperSon(evt)
{
    
    var logoSon = document.getElementById("logoSon");
    var sourceLogo = logoSon.getAttribute("src");
    var audio = document.querySelector ("audio");
    if (sourceLogo=="../www/son.png")
    {
        logoSon.src = ("../www/img/pasdeson.png");
        audio.pause();
    }
    else
    {
        logoSon.src = ("../www/img/son.png");
        audio.play(); 
    }
}