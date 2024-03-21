var btn =document.getElementById('header_anime');
btn.onclick =function(){
    var morphing = anime({
        targets:'.box1',
        points:[
            {value:'1024,500 0,500 0,0 444,286 442.58,0 768.39,0 1024,0'},
            {value:'1024,500 0,500 0,0 444,286 770,500 768.39,0 1024,0'},
            {value:'1024,500 0,500 0,0 444,286 770,500 1024,500 1024,0'}
        ],
        easing: 'easeOutQuad',
        duration: 2000,
        loop: false
    });
    }

    anime({
        targets:'#text',
        opacity:1,
        duration: 8000,
        translateY:180
    })


function bigImg(x) {    
    x.style.height = "145px";
    x.style.width = "145px";

}

function normalImg(x) {
    x.style.height = "130px";
    x.style.width = "130px";

}


