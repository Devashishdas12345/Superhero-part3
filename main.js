var a = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;

var block_width = 50;
var block_height = 50;

var player_object = "";
var image_object = "";

function player_update() {
    fabric.Image.fromURL("Superhero.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set(
            {top:player_y,left:player_x}
        );
        a.add(player_object);
    });
}

function new_image(get_Img) {
    fabric.Image.fromURL(get_Img,function(Img){
        image_object = Img;
        image_object.scaleToWidth(block_width);
        image_object.scaleToHeight(block_height);
        image_object.set(
            {top:player_y,left:player_x}
        );
        a.add(image_object);
    });
}

window.addEventListener ("keydown",my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80") {
        console.log("P and Shift key pressed together");
        block_width = block_width+10;
        block_height = block_height+10;
        document.getElementById("Width_123").innerHTML = block_width;
        document.getElementById("Height_123").innerHTML = block_height;
    }
    if (e.shiftKey == true && keyPressed == "77") {
        console.log("M and Shift key pressed together");
        block_width = block_width-10;
        block_height = block_height-10;
        document.getElementById("Width_123").innerHTML = block_width;
        document.getElementById("Height_123").innerHTML = block_height;
    }


    if (keyPressed == 38) {
        up();
        console.log("up arrow key");
    }
    if (keyPressed == 40) {
        down();
        console.log("down arrow key");
    }
    if (keyPressed == 37) {
        left();
        console.log("left arrow key");
    }
    if (keyPressed == 39) {
        right();
        console.log("right arrow key");
    }


    if (keyPressed == 70) {
        new_image("ironman_face.png");
        console.log("f key");
    }

    if (keyPressed == 66) {
        new_image("spiderman_body.png");
        console.log("b key");
    }

    if (keyPressed == 76) {
        new_image("hulk_legs.png");
        console.log("l key");
    }

    if (keyPressed == 82) {
        new_image("thor_right_hand.png");
        console.log("r key");
    }

    if (keyPressed == 72) {
        new_image("captain_america_left_hand.png");
        console.log("h key");
    }
}

function up() {
    if (player_y >= 20) {
        player_y = player_y - block_height;
        console.log("Block height = " + block_height);
        console.log("Up arrow is pressed");
        console.log("x = " + player_x + "y = " + player_y);
        a.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 450) {
        player_y = player_y + block_height;
        console.log("Block height = " + block_height);
        console.log("Down arrow is pressed");
        console.log("x = " + player_x + "y = " + player_y);
        a.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 20) {
        player_x = player_x - block_width;
        console.log("Block width = " + block_width);
        console.log("Left arrow is pressed");
        console.log("x = " + player_x + "y = " + player_y);
        a.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_width;
        console.log("Block width = " + block_width);
        console.log("Right arrow is pressed");
        console.log("x = " + player_x + "y = " + player_y);
        a.remove(player_object);
        player_update();
    }
}