var array = [];
gameOver();
function gameOver(){
    array=[]
    document.addEventListener("keypress", restart);
    document.addEventListener("click", restart);
};
function restart(){
    document.removeEventListener("keypress", restart);
    document.removeEventListener("click", restart);
    start(1);
}
function start(n) {
    var random = Math.floor(((Math.random()) * 9) + 1);
    array.push(random);
    setTimeout(function(){
        clicked(array[n-1])     
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
    var path ="./assets/"+item+".mp3";
    var audio= new Audio(path);
    audio.play();
    document.querySelector(".num"+item).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(".num"+item).classList.remove("pressed");     
     },100)

};
