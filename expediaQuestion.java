import java.util.*;

public class expediaQuestion{
	public static void main(String[] args){
		String words = "WORDS TO BE REVERSED";
		System.out.println(words);
		System.out.println(reverseWords(words));
	}

	//Reverse the words in string 
	//eg: 'The Sky is Blue'. then print 'Blue is Sky The'.
	public static String reverseWords(String words){
		String ans = new String();
		String[] sArr = words.split(" ");
		for(int i= sArr.length-1; i >= 0 ; i--){
			if(i == sArr.length-1)
				ans = sArr[i];
			else{
				ans = ans + " " + sArr[i]; 
			}
		}
		return ans;
	}
}
