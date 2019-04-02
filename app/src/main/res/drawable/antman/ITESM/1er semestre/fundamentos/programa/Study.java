
import java.util.Random;
public class Study
{
	public static void imp(int n)
	{
		for(int i = 1; i <= n; i++)
			System.out.print("*");
		System.out.print();
	}
	public static void main(String[] arg)
	{
		Random ran = new Random();
		int gen;
		int[] dom = new int[4];
		dom[0] = 0;
		dom[1] = 0;
		for(int i = 1; i <= 200; i++)
		{
			gen = ran.nextInt(4);
			dom[gen]++;
		}
		dom[0] /= 10;
		dom[1] /= 10;
		System.out.print("G: ");
		imp(dom[0]);
		System.out.print("A: ");
		imp(dom[1]);
		System.out.print("T: ");
		imp(dom[2]);
		System.out.print("C: ");
		imp(dom[3]);
	}
}