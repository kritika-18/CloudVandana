package ques1;

import java.util.*;

public class CloudVandana {

	public static void main(String[] args) {
		List<Integer> list=new ArrayList<>();
	      list.add(1);
	      list.add(2);
	      list.add(3);
	      list.add(4);
	      list.add(5);
	      list.add(6);
	      list.add(7);
	      Collections.shuffle(list);
	      for(Integer i:list){
	        System.out.print(i+" ");
	      }

	}

}
