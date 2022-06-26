const area1 = document.getElementById('area1')
const area2 = document.getElementById('area2')
const joys1 = document.getElementById('joystick1')
const joys2 = document.getElementById('joystick2')

const EX    = document.getElementById('eje1')
const EY    = document.getElementById('eje2')
const EZ    = document.getElementById('eje3')

const tray1 = document.getElementById('tray1')

const ancho = screen.width
const alto = screen.height

const anchoJ2 = joys2.clientWidth
const altoJ2  = joys2.clientHeight

// console.log(ancho, " ",alto)

function posCoor(elemento, X, Y){
    if(X>=0){
        elemento.style.left = X-elemento.clientWidth/2 +"px"
    }
    if(Y>=0){
        elemento.style.top = Y-elemento.clientHeight/2+"px"
    }
}

var coorA1 = [ancho/4, alto/2]
var coorA2 = [ancho/4*3, alto/2]

posCoor(area1, coorA1[0], coorA1[1])
posCoor(area2, coorA2[0], coorA2[1])

posCoor(joys2, ancho/4, alto/2)
posCoor(joys1, ancho/4*3, alto/2)

area1.addEventListener('touchstart', e=>{
    var coorX = e.changedTouches[0].clientX
    var difX  = coorA1[0]-coorX
    if(difX<0){
        difX*=-1
    }
    var coorX = e.changedTouches[0].clientX
    var coef = Math.round(difX*25/90)

    joys2.style.width = anchoJ2 - coef + "px"
    joys2.style.height= altoJ2 - coef + "px"
    posCoor(joys2, coorX, alto/2)

    // console.log(coorX)
    area1.addEventListener('touchmove', e=>{
        var coorX = e.changedTouches[0].clientX
        var difX  = coorA1[0]-coorX
        if(difX<0){
            difX*=-1
        }

        if(difX<(area1.clientWidth/2)-20){
            var coef = Math.round(difX*25/90)
            // console.log() 
            joys2.style.width = anchoJ2 - coef + "px"
            joys2.style.height= altoJ2 - coef + "px"
            posCoor(joys2, coorX, alto/2)
        }else if(coorX<ancho/4){
            posCoor(joys2, (ancho/4)-(area1.clientWidth/2)+20, alto/2)
        }else{
            posCoor(joys2, (ancho/4)+(area1.clientWidth/2)-20, alto/2)
        }
        
        
    })

    area1.addEventListener('touchend', ()=>{
        joys2.style.width = anchoJ2 + "px"
        joys2.style.height= altoJ2 + "px"
        posCoor(joys2, coorA1[0], coorA1[1])
        
        // posCoor(joys2, coorX, alto/2)
    })
    
})

area2.addEventListener('touchstart', e=>{
    var coorY = e.changedTouches[0].clientY
    var difY  = coorA2[1]-coorY
    if(difY<0){
        difY*=-1
    }
    var coorY = e.changedTouches[0].clientY
    var coef = Math.round(difY*25/90)

    joys1.style.height = anchoJ2 - coef + "px"
    joys1.style.width= altoJ2 - coef + "px"
    posCoor(joys1, ancho/4*3, coorY)

    // console.log(coorX)
    area2.addEventListener('touchmove', e=>{
        var coorY = e.changedTouches[0].clientY
        var difY  = coorA2[1]-coorY
        if(difY<0){
            difY*=-1
        }

        if(difY<(area2.clientHeight/2)-20){
            var coef = Math.round(difY*25/90)
            // console.log() 
            joys1.style.height = anchoJ2 - coef + "px"
            joys1.style.width= altoJ2 - coef + "px"
            posCoor(joys1, ancho/4*3, coorY)
        }else if(coorY<alto/2){
            posCoor(joys1, ancho/4*3, (alto/2)-(area2.clientHeight/2)+20)
        }else{
            posCoor(joys1, ancho/4*3, (alto/2)+(area2.clientHeight/2)-20)
        }
        
        
    })
    
})

window.addEventListener("deviceorientation",function(event) {
    alpha = Math.round(event.alpha);
    beta = Math.round(event.beta);
    gamma = Math.round(event.gamma);
    console.log(alpha)
    console.log(beta)
    console.log(gamma)

    EX.innerHTML = "X:"+alpha
    EY.innerHTML = "Y:"+beta 
    EZ.innerHTML = "Z:"+gamma

}, true);

// console.log("as")