const clock = document.getElementById('clock')

setInterval(function(){
    const time = new Date()
    clock.innerText = time.toLocaleTimeString()
}, 1000)