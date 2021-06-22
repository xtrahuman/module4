
(function(window){

 var byeSpeaker={}
// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";


byeSpeaker.speak=function (name) {
  console.log(speakWord + " " + name);
}

//  Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker; 

window.byeSpeaker=byeSpeaker
})(window);


