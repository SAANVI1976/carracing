canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image= "car1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image= "car2.png";
car2_x=10;
car2_y=100;

images_array=["racing.jpg","car.jpeg","car(1).jpeg"];

random_number = Math.floor(Math.random()*3);

console.log(random_number);

background_image = images_array[random_number];

console.log("background_image"+background_image);

car1_image="car1.png";

car2_image="car2.png";

function add(){
    background_imagetag= new Image();

    background_imagetag.onload = upload_background;

    background_imagetag.src=background_image;

    car1_imagetag= new Image();

    car1_imagetag.onload = upload_car1;

    car1_imagetag.src=car1_image;

    car2_imagetag= new Image();

    car2_imagetag.onload = upload_car2;

    car2_imagetag.src=car2_image;
}




function upload_background(){
    ctx.drawImage(background_imagetag,0,0,canvas.width, canvas.height);
}

function upload_car1(){
    ctx.drawImage(car1_imagetag,car1_x,car1_y,car1_width, car1_height);
}
function upload_car2(){
    ctx.drawImage(car2_imagetag,car2_x,car2_y,car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;

  console.log(e.keypressed);
  
  if(keypressed == '38'){
      up();
      console.log("up");

  }

  if(keypressed == '39'){
    right();
    console.log("right");
    
}

if(keypressed == '40'){
    down();
    console.log("down");
    
}

if(keypressed == '37'){
    left();
    console.log("left");
    
}

if(keypressed == '83'){
    s_left();
    console.log("s_left");
    
}
if(keypressed == '65'){
    a_right();
    console.log("a_right");
    
}
if(keypressed == '78'){
    n_down();
    console.log("n_down");
}
if(keypressed == '86'){
    v_up();
    console.log("v_up");
}
}
function up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        console.log("when the up arrow is pressed, x="+car1_x+",y="+car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }

}

function down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        console.log("when the down arrow is pressed, x="+car1_x+",y="+car1_y);
        upload_background();
        upload_car1();
        upload_car2();  
    }

}

function left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        console.log("when the left arrow is pressed, x="+car1_x+",y="+car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }

}

function right(){
    if(car1_x<=700){
        car1_x=car1_x+10;
        console.log("when the right arrow is pressed, x="+car1_x+",y="+car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }

}



function v_up(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        console.log("when the v letter is pressed, x="+car2_x+",y="+car2_y);
        upload_background();
        upload_car2();        
        upload_car1();


    }

}

function n_down(){
    if(car2_y<=500){
        car2_y=car2_y+10;
        console.log("when the n letter is pressed, x="+car2_x+",y="+car2_y);
        upload_background();
        upload_car2();
        upload_car1();

    }



}

function s_left(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        console.log("when the s letter is pressed, x="+car2_x+",y="+car2_y);
        upload_background();
        upload_car2();
        upload_car1();
 
    }

}

function a_right(){
    if(car2_x<=700){
        car2_x=car2_x+10;
        console.log("when the a letter is pressed, x="+car2_x+",y="+car2_y);
        upload_background();
        upload_car2();
        upload_car1();

    }

}

