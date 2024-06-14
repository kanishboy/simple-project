const ame=document.getElementById('mlo')
setInterval(function(){
    const date=new Date();
    ame.innerHTML=date.toLocaleTimeString();
})