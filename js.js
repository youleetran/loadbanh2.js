
window.onload = function()
{

(function () {
  
//    setInterval(function(){
  
  var div_ThemTT = document.createElement("script");
div_ThemTT.src="https://www.aiscore.com/_nuxt/xxxxx.js";
//div_ThemTT.innerHTML ='<span data-v-03113714="">                    Home              </span> <span data-v-03113714="">                   Away               </span>';
  document.body.appendChild(div_ThemTT); 
  
  
      
var div_ThemTT = document.createElement("li");
//div_ThemTT.className="title";
div_ThemTT.innerHTML ='<span data-v-03113714="">                    Shots                </span> <span data-v-03113714="">                   on Target                </span>';
  document.getElementsByClassName("odds")[0].appendChild(div_ThemTT);  

var div_ThemTT = document.createElement("li");
//div_ThemTT.className="title";
div_ThemTT.innerHTML ='<span data-v-03113714="">                    Attacks                </span> <span data-v-03113714="">                   D Attacks               </span>';
  document.getElementsByClassName("odds")[0].appendChild(div_ThemTT);  

var div_ThemTT = document.createElement("li");
//div_ThemTT.className="title";
div_ThemTT.innerHTML ='<span data-v-03113714="">                    Home              </span> <span data-v-03113714="">                   Away               </span>';
  document.getElementsByClassName("odds")[0].appendChild(div_ThemTT); 


var xhttpp = new XMLHttpRequest();   
xhttpp.open("GET", "https://www.aiscore.com/en/match-bristol-city-u23-birmingham-city-u23/edq09ioew5vceqx", false); 
xhttpp.setRequestHeader('Access-Control-Allow-Origin', '*');
xhttpp.setRequestHeader('Content-Type', 'application/xml');
xhttpp.send();
var text = xhttpp.responseText;
//alert(text);
//console.log(this.text);




// Possession
if((text.match(/<div class=\"ml-20 mr-xs flex align-center\" .*?>(.*?)</m)) !== null) {
  var Home_Possession =text.match(/<div class=\"ml-20 mr-xs flex align-center\" .*?>(.*?)</m);
  Home_Possession = Home_Possession[1];
}

if((text.match(/<div class=\"mr-20 ml-xs flex align-center\" .*?>(.*?)</m)) !== null) {
  var Away_Possession =text.match(/<div class=\"mr-20 ml-xs flex align-center\" .*?>(.*?)</m);
  Away_Possession = Away_Possession[1];
}

/*** Possession

if((text.match(/<div class=\"mr-xs flex align-center\" .*?>(.*?)</m)) !== null) {
  var Home_Attacks =text.match(/<div class=\"mr-xs flex align-center\" .*?>(.*?)</m);
  Home_Attacks = Home_Attacks[1];
}

if((text.match(/<div class=\"ml-xs flex align-center\" .*?>(.*?)</m)) !== null) {
  var Away_Attacks =text.match(/<div class=\"ml-xs flex align-center\" .*?>(.*?)</m);
  Away_Attacks = Away_Attacks[1];
}
*/

if((text.match(/<div class=\"list-item color-eee text-center fs-12 flex pl-15 pr-15 flex-col justify-center\" (.*?)<\/div><\/div><\/div><!----><\/div><\/div><\/div><\/div>/g)) !== null) {
  var Line =text.match(/<div class=\"list-item color-eee text-center fs-12 flex pl-15 pr-15 flex-col justify-center\" (.*?)<\/div><\/div><\/div><!----><\/div><\/div><\/div><\/div>/g);
  Line_Shots = Line[1];
  Line_on_Target = Line[2];
  Line_Attacks = Line[3];
  Line_D_Attacks = Line[4];
}

//        }, 2000);
      
      
})();
  
  
    
};
