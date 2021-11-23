var nameArray=[];
function submit() {
    var n1=document.getElementById("Name1").value;
    var n2=document.getElementById("Name2").value;
    var n3=document.getElementById("Name3").value;
    var n4=document.getElementById("Name4").value;
    nameArray.push(n1);
    nameArray.push(n2);
    nameArray.push(n3);
    nameArray.push(n4);
    document.getElementById("display").innerHTML=nameArray;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sort() {
    nameArray.sort();
    document.getElementById("display").innerHTML=nameArray;
}