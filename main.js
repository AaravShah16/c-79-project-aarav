display_menu_array=["Chicken Tandoori Pizza",
"Veg Suprime Pizza",
"Panner Tikka Pizza",
"Deluxe Veggie Pizza",
"Veg Extravaganza Pizza",];

 function getmenu(){
    var htmldata;
    htmldata="<ol class='displaymenulist'>"
    display_menu_array.sort();
    for(var  i=0;i<display_menu_array.length;i++){
htmldata=htmldata+'<li>'+ display_menu_array[i]+'</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;
 }
 function  addmenu(){
 var htmldata;
 var item=document.getElementById("add").value;
 display_menu_array.push(item);
 display_menu_array.sort();
 htmldata="<section class='cards'>"
 for(var  i=0;i<display_menu_array.length;i++){
     htmldata=htmldata+'<div class="cards">'+'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2UtXilgcQ9iWuA5oMghGObkKfA2v06bEJQ&usqp=CAU">'+display_menu_array[i]+'</div>'
 }
 htmldata=htmldata+"</section>"
 document.getElementById("display_added_menu").innerHTML=htmldata;
 }