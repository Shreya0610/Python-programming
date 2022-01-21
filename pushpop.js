var arrays=[,,,];
var count = arrays.length;
console.log(arrays);
console.log(count);
function ppush() {
    var i;
    for(i=0; i<4;i++){
        if(arrays[i] === null){
            arrays.push("x");
            console.log(arrays);
            break;
        }
        else{
            console.log("stack full");
            break;
        }
    }
}
ppush();