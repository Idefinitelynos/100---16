canvas=document.getElementById("MC")
ctx=canvas.getContext("2d")
roverheight=100
roverwidth=90
roverx=10
rovery=10
array=["img 1.jpg", "img 2.jpg", "img 3.jpg", "img 4.jpg", "mars.jpg"]
r=Math.floor(Math.random()*5)
bg=array[r]
roverimage="rover.png"
function add() {
    bg_tag=new Image()
    bg_tag.onload=uploadbackground
    bg_tag.src=bg
    rover_tag=new Image()
    rover_tag.onload=uploadrover
    rover_tag.src=roverimage
}
function uploadbackground(){
    ctx.drawImage(bg_tag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_tag,roverx,rovery,roverwidth,roverheight)
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    keypressed=e.keyCode
    console.log(keypressed)
    if (keypressed=="38") {
    up()
    console.log("up")    
    }
    if (keypressed=="39") {
        right()
        console.log("right")    
        }
        if (keypressed=="37") {
            left()
            console.log("left")    
            }
            if (keypressed=="40") {
                down()
                console.log("down")    
                }
}
function up() {
    if (rovery>0) {
        rovery=rovery-10;
        uploadbackground()
        uploadrover()
        console.log("x= "+roverx + " ,y= " +rovery)
    }

}
function down() {
    if (rovery<500) {
        rovery=rovery+10;
        uploadbackground()
        uploadrover()
        console.log("x= "+roverx + " ,y= " +rovery)
    }

}
function right() {
    if (roverx<700) {
        roverx=roverx+10;
        uploadbackground()
        uploadrover()
        console.log("x= "+roverx + " ,y= " +rovery)
    }

}
function left() {
    if (roverx>0) {
        roverx=roverx-10;
        uploadbackground()
        uploadrover()
        console.log("x= "+roverx + " ,y= " +rovery)
    }

}