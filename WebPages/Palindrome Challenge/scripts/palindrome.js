var p =[];

function main(){
    var sentance = "the racecar is not a kayak kayak"
    var stringSplit = sentance.split(" ");

    getPal(stringSplit);
}


function pal(){
    this.word;
    this.amount = 0;
}

function getPal(stringArray){
    //var index;
    for(var i = 0; i < stringArray.length; i ++ ){
        if(checkPal(stringArray[i])){
            if(exists(stringArray[i]) !== -1){
                p[exists(stringArray[i])].amount++;
            }
            else{
                p.push(new pal());
                p[p.length-1].word = stringArray[i];
                p[p.length-1].amount++ 
            }
        
        }
    }
}
function checkPal(string){
    var half = (string.length)/2;
    var word1;
    var word2;

    for(var i=0; i < half; i++){
        if(i == 0){
            word1 = string[i];
            word2 = string[string.length-1-i];
        }
        else{
            word1 = word1 + string[i];
            word2 = word2 + string[string.length-1-i];
        }
    }
    alert(word1 + " " + word2)
    if(word1 == word2){
        return true;
    }
    else{
        return false;
    }
}
function exists(string){
    for(var i = 0; i < p.length; i++){
        if(string == p[i].word){
            
            return i;

        }
    }
    return -1;

}