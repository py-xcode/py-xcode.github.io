function playMusic() {  
    var btn=document.getElementById("playbgm");
    var music=document.getElementById("audio");
    if (btn.innerHTML == "播放音乐"){
        btn.innerHTML="停止播放";
        music.currentTime = 0;
        music.play();
        music.loop =true;
    } else {
        btn.innerHTML="播放音乐";
        music.pause()
    }
    
}  

window.onload = function(){
    var music=document.getElementById("audio");
    var btn=document.getElementById("playbgm");
    music.play();
    btn.innerHTML="停止播放";
}