import java.util.Scanner;
public class compara{
	public static void main(String[] arg){
		Scanner sc= new Scanner(System.in);
		int a,b;
		a=sc.nextInt();
		b= sc.nextInt();
		if(a>b){
			System.out.println("mayor");
		}else if(a==b){
			System.out.println("iguales");
		}else System.out.println("menor");
	}
}