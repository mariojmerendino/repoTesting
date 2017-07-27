function unique(){
    alert("test");    
    var og = [1, 4, 2, 2, 3, 4, 8];
    var a = [];
    for (var i=0, l=og.length; i<l; i++){
        if (a.indexOf(og[i]) === -1){
            a.push(og[i]);
        }
    }
    for (var i =0; i < a.length; i++){
        document.getElementById("u").innerHTML += a[i] + ',';
    }
    
}
unique();