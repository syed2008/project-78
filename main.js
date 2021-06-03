var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
superhero_image_width = 30;
superhero_image_height = 30;
var superhero_object = "";
var superhero_image_object = "";
function player_update(){
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png", function(Img){
        superhero_object = Img;
        superhero_object.scaleToWidth(150);
        superhero_object.scaleToHeight(140);
        superhero_object.set({
            top: player_y,
            left:player_x
        });
        canvas.add(superhero_object);

    
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        superhero_image_object = Img;
        superhero_image_object.scaleToWidth(superhero_image_width);
        superhero_image_object.scaleToHeight(superhero_image_height);
        superhero_image_object.set({
            top: player_y,
            left:player_x
        });
        canvas.add(superhero_image_object);

    
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift pressed together");
        superhero_image_width = superhero_image_width + 10;
        superhero_image_height = superhero_image_height + 10;
        document.getElementById("current_width").innerHTML = superhero_image_width;
        document.getElementById("current_height").innerHTML = superhero_image_height;
    }
    if (e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift pressed together");
        superhero_image_width = superhero_image_width - 10;
        superhero_image_height = superhero_image_height - 10;
        document.getElementById("current_width").innerHTML = superhero_image_width;
        document.getElementById("current_height").innerHTML = superhero_image_height;
    }
    if(keyPressed == '38'){
        up();
         console.log("up");
     }
     if(keyPressed == '40'){
         down();
        console.log("down");
    }
    if(keyPressed == '37'){
       left();
        console.log("left");
    }
    if(keyPressed == '39'){
       right();
        console.log("right");
    }
    if (keyPressed == '70'){
        new_image('https://pngimg.com/uploads/ironman/ironman_PNG13.png');
        console.log("f");
    }
    if (keyPressed == '66'){
        new_image('spiderman_body.png');
        console.log("b");
    }
    if (keyPressed == '76'){
        new_image('hulk_legs.png');
        console.log("l");
    }
    if (keyPressed == '72'){
        new_image('captain_america_left_hand.png');
        console.log("h");
    }
    if (keyPressed == '82'){
        new_image('thor_right_hand.png');
        console.log("r");
    }
}
function up(){
    if(player_y >=0){
        player_y = player_y - superhero_image_height;
        console.log("block image height = " + superhero_image_height);
        console.log("When Up Arrow Key Is Pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(superhero_object);
        player_update();
    }
}
function down(){
    if(player_y <=500){
        player_y = player_y + superhero_image_height;
        console.log("block image height = " + superhero_image_height);
        console.log("When Down Arrow Key Is Pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(superhero_object);
        player_update();
    }
}

function left(){
    if(player_x >=0){
        player_x = player_x - superhero_image_width;
        console.log("block image width = " + superhero_image_width);
        console.log("When Left Arrow Key Is Pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(superhero_object);
        player_update();
    }
}
function right(){
    if(player_x <=850){
        player_x = player_x + superhero_image_width;
        console.log("block image width = " + superhero_image_width);
        console.log("When Right Arrow Key Is Pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(superhero_object);
        player_update();
    }
}

