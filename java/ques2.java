package ques2;
import java.util.*;

public class CloudVandana {

	public static int romanToInteger(String s) {
		Map<Character,Integer> map=new HashMap<>();
		map.put('I',1);
		map.put('V',5);
		map.put('X',10);
		map.put('L',50);
		map.put('C',100);
		map.put('D',500);
		map.put('M',1000);
		
		int res=0;
		int prev=0;
		for(int i=s.length()-1;i>=0;i--) {
			int curr=map.get(s.charAt(i));
			if(curr<prev) res-=curr;
			else res+=curr;
			prev=curr;
		}
		return res;
	}
	
	public static void main(String[] args) {
		Scanner num = new Scanner(System.in);  
		System.out.print("Enter a roman number: ");  
		String str= num.nextLine();  
	    int res=romanToInteger(str);
	    System.out.print("Integer number:  "+res);
	}

}
