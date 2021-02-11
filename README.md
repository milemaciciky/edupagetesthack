# EduPageTestHack
Hack na správne odpovede

## Status
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
### Chrome
Na Chrome Web Store sa bohužiaľ tento doplnok zadarmo dať nedá, preto použi tento návod: 
- Stiahni si kod tohto doplnku
- V novom tabe si otvor 'chrome://extensions'
- V pravom hornom rohu zapni Developer Mode
- Stiahni si [kod doplnku](https://github.com/ivanhrabcak/EduPageTestAnswers/archive/main.zip)
- Zip subor s kodom extrahuj na nejake miesto
- V chrome vyber 'Load Unpacked' (v lavom hornom rohu)
- Vyber priecinok kde si extrahoval kod doplnku
- Otvor test
- Klikni na ikonu doplnku Edupage


Pozor: 
- ak je test viac-stranový, musíš na ikonu kliknúť na každej strane.
- priecinok s kodom nevymazavaj! 

### Firefox
- Stiahni si [doplnok](https://addons.mozilla.org/sk/firefox/addon/edupagetesthack/)
- Pokračuj v inštalácií v ľavom hornom rohu
- Otvor Edupage test
- Klikni na Edupage ikonu medzi doplnkami

Pozor: ak je test viac-stranový, musíš na ikonu kliknúť na každej strane.

### Ako otvoriť konzolu
Klikni pravým tlačidlom myši a stlač Inspect element/Preskúmať prvok alebo jednoducšie stlač `F12` na klávesnici (pre Operu je to `Ctrl + Shift + I`). Ak ešte nie si v konzole, tak sa tam preklikni.

## Bugs
Ak doplnok nefunguje, nahlás všetky problémy na stránke [Issues](https://github.com/ivanhrabcak/EduPageTestHack/issues)
