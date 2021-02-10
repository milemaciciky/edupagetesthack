# EduPageTestHack
Hack na správne odpovede

# TENTO HACK UŽ NEFUNGUJE A BUDE ARCHIVOVANÝ
Bug, na ktorom tento hack fungoval bol patchnutý. Tento hack viac nefunguje.

## Iný spôsob
K dispozícii som mal ak iný kód no patchnutý bol aj ten ([zdroj](https://pastebin.com/XjypNaSr)):
```javascript
// Inicializácia jQuery:
var jq=document.createElement("script");
jq.src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName("head")[0].appendChild(jq);
jQuery.noConflict();

var ziak = 2; // Ziak podla triedneho výkazu, treba experimentovať. 
var cmd = "VysledkyPridelenia"; // MaterialPlayer pre vypracovanie testu ako ziak.
var offset = 8; // Poradie ziaka, ktory skript vykonava, podla triedneho vykazu, aspon myslim. Treba experimentovat.
jQuery('#bar_mainDiv > div > table > tbody > tr > td:first-child > a').each(function() {
var strarr = $(this).attr("href").split("&");
var testid = strarr[1].substr(7,strarr[1].length);
var pridelenieid = (parseInt(strarr[2].substr(13,strarr[2].length)) - offset + ziak);
console.log("testid: " + testid + ", pridelenieid: " + pridelenieid + ", ziak: " + ziak);
$(this).attr("href", "/elearning/?cmd=" + cmd + "&testid=" + testid + "&pridelenieid=" + pridelenieid);
});
```

## Použite
Použitie je jednoduché:
1. otvor test na EduPage,
2. otvor konzolu,
3. prilep kód do konzoly.

### Ako otvoriť konzolu
Klikni pravým tlačidlom myši a stlač Inspect element/Preskúmať prvok alebo jednoducšie stlač `F12` na klávesnici (pre Operu je to `Ctrl + Shift + I`). Ak ešte nie si v konzole, tak sa tam preklikni.

## Bugs
Bugs nahlás na stránke pre [Issues](https://github.com/markotomcik/EduPageTestHack/issues)
