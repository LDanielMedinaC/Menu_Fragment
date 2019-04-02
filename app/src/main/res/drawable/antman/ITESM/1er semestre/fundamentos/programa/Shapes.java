/*
	Shapes.java
	Pablo Manuel Urrutia Gonzalez  A01651282
	Luis Daniel Medina Cazarez A01651070
	Samantha Gonzalez Estrada  A01335690
	crea un triangulo o un cuadrado, de diferente volumne
*/

import java.util.Scanner;
public class Shapes
{

    public static void imprimeCar(int lim, char car)
    {
        for(int j = 0; j < lim; j++)
		{
			System.out.print(car + " ");
		}
    }


	public static void cuadro(char a, int vol)
	{
		for(int i = 0; i < vol; i++)
		{
			imprimeCar(vol,a);
			System.out.println();
		}
	}

	public static void triangulo(char a, int vol)
	{
	    int spc = vol - 1;
	    for(int i = 0; i < vol; i++)
	    {
	        imprimeCar(spc,' ');
	        imprimeCar(i*2+1,a);
	        System.out.println();
	        spc--;
	    }

	}

	public static void main(String[] arg)
	{
		Scanner sc = new Scanner(System.in);
		int vol, fig;
		String car;
		System.out.println("Shape (0=square, 1=triangle)?");
		fig = sc.nextInt();
		System.out.println("Height (from 3 to 10)?");
		vol = sc.nextInt();
		System.out.println("char?");
		car = sc.next();
		char aux = car.charAt(0);
		if(fig == 0)
		{
			cuadro(aux,vol);
		}else
			triangulo(aux,vol);
	}
}

