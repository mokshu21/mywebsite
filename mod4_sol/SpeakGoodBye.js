(function(window){
var byespeaker ={};
 byespeaker.speak=function(name){
 	console.log(speakWord+ " "+name)
 }
var speakWord = "Good Bye";
window.byespeaker = byespeaker;
})(window);
 
