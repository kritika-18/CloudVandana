package ques3;
import java.util.*;

public class CloudVandana {

	public static boolean isPangram(String s) {
		Set <Character> set=new HashSet<>();
		for(char c:s.toCharArray()) {
			if(Character.isLetter(c)) set.add(c);
		}
		return set.size()==26;
	}
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);  
		System.out.print("Enter a string: ");  
		String str= sc.nextLine();
		boolean res=isPangram(str.toLowerCase());
		if(res) {
			System.out.print("Yes, the string is pangram.");
		}
		else System.out.print("No, the string is not pangram.");

	}

}
