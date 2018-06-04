
var theDiv = document.getElementById("disp");
theDiv.style.backgroundColor = "yellow";
theDiv.style.width = "200px";

function myfunction()
{
 document.getElementById("display").innerHTML = "Its cute, you dont need to edit this ;) ";   
}

//search


var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

 
btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






