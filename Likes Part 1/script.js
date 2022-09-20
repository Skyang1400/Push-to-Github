console.log ("page loading...");

var number = 3

function like(){
    var count = document.getElementById('count');

    number++;
    count.innerHTML = number + " like(s)";
}