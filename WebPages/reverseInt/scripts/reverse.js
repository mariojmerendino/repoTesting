function reverse(x){
    var ans = 0;
    var input = x;
    while((input).toFixed(0)!= 0){
        ans = ((ans*10) + (input%10)).toFixed(0);
        input = input / 10;
    }
   
    return ans;

}