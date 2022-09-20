console.log("page loaded...");

var number = [9, 12, 9];
var span = [
    document.getElementById("nine1"),
    document.getElementById("twelve"),
    document.getElementById("nine")
];

function like(id){
    number[id]++;
    span[id].innerHTML = number[id] + " like(s)";
}
