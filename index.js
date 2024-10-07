var path ="./assets/blue.mp3";
var audio= new Audio(path);
var path1 ="./assets/1.mp3";
var audio1= new Audio(path1);
var path2 ="./assets/2.mp3";
var audio2= new Audio(path2);
var path3 ="./assets/3.mp3";
var audio3= new Audio(path3);
var path4 ="./assets/4.mp3";
var audio4= new Audio(path4);
var path5 ="./assets/5.mp3";
var audio5= new Audio(path5);
var path6 ="./assets/6.mp3";
var audio6= new Audio(path6);
var path7 ="./assets/7.mp3";
var audio7= new Audio(path7);
var path8 ="./assets/8.mp3";
var audio8= new Audio(path8);
var path9 ="./assets/9.mp3";
var audio9= new Audio(path9);
var array = [];
gameOver();
function gameOver(){
    array=[]
    document.addEventListener("keypress", restart);
    document.addEventListener("click", restart);
};
function restart(){
    audio.play();
    document.removeEventListener("keypress", restart);
    document.removeEventListener("click", restart);
    start(1);
}
function start(n) {
    var random = Math.floor(((Math.random()) * 9) + 1);
    array.push(random);
    setTimeout(function(){
        var number= array[n-1]
        clicked(number.toString())     
     },800)
    console.log(array, "hi");
    $("h1").text("LEVEL " + n);
    keyp(0, n);
}

function keyp(i, n) {
    if (i == n) {
        console.log("wtf happened", i, n, i == n);
        start(n + 1);
    } else if (i < n) {
        console.log("looped", i, n, i < n);
        
        // Attach the keypress event listener
        // Remove any previous listener
        document.addEventListener("keypress", handleKeypress);
        for(var x=0; x<9 ;x++){
        document.querySelectorAll(".num")[x].addEventListener("click", handlemousepress);
        };

        function handleKeypress(event) {
            done(event.key, i, n);
        }
        function handlemousepress(){
            done(this.innerHTML,i,n);
        };

        function done(m, i, n) {
            console.log(m, i, n);
            if (m == array[i]) {
                console.log(m, i, n);
                clicked(m)
                document.removeEventListener("keypress", handleKeypress);
                for(var x=0; x<9 ;x++){
                    document.querySelectorAll(".num")[x].removeEventListener("click", handlemousepress);
                    }; // Remove listener before calling next
                keyp(i + 1, n); // Go to the next key in the sequence
            } else {
                $("body").addClass("finish") 
                var path ="./assets/1.mp3";
                var audio= new Audio(path);
                audio.play();      
                setTimeout(function(){
                    $("body").removeClass("finish");  
                    var path ="./assets/1.mp3";
                    var audio= new Audio(path);
                    audio.play();   
                 },100)
                 setTimeout(function(){
                    $("body").addClass("finish");  
                    var path ="./assets/1.mp3";
                    var audio= new Audio(path);
                    audio.play();      
                 },200)
                 setTimeout(function(){
                    $("body").removeClass("finish");       
                 },300)
                for(var x=0; x<9 ;x++){
                    document.querySelectorAll(".num")[x].removeEventListener("click", handlemousepress);
                    };
                document.removeEventListener("keypress", handleKeypress);
                
                $("h1").text("FINISHED, Your score was: "+n+" Press any key to Restart");
                gameOver();
            }
        }
    }
}
function clicked(item){
    switch(item) {
        case "1":
          audio1.play()
          break;
        case "2":
          audio2.play()
          break;
        case "3":
          audio3.play()
          break;
        case "4":
          audio4.play()
          break;
        case "5":
          audio5.play()
          break;
        case "6":
          audio6.play()
          break;
        case "7":
          audio7.play()
          break;
        case "8":
          audio8.play()
          break;
        case "9":
          audio9.play()
          break;
        default:
          console.log(item)
      }
    document.querySelector(".num"+item).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(".num"+item).classList.remove("pressed");     
     },100)

};
