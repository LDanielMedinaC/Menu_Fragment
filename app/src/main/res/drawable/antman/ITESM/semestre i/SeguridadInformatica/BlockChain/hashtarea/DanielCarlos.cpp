#include <bits/stdc++.h>

using namespace std;

map <long long int, int> colition;

unsigned int mod = -1;

long long int large(long long int num){
    long long int ans = 1;
    while(ans < num){
        ans *= 10;
    }
    return ans;
}

long long int Hash(long long int ant, long long int newNumber){
    ant *= large(newNumber);
    ant += newNumber;
    ant %= mod;
    return ant;
}

long long int makeHash(vector<long long int> arr){
    long long int indice = 0;
    for(int i = 0; i < arr.size(); i++){
        indice = Hash(indice, arr[i]);
    }
    return indice;
}
void printMap(){
    for (map<long long int,int>::iterator it=colition.begin(); it!=colition.end(); ++it)
            printf("el hash %X aparece %d veces \n", it->first, it->second );
}


void leer(){
     int n, m;
     n = 100000;
     m = 1;
     int col = 0;
     //cin >> n;
     vector <long long int>aux;
     for(int i = 0; i < n;i++){
        //cin >> m;
        aux.clear();
        for(int  j = 0; j < m; j++){
            int num;
            cin>>num;
            aux.push_back(num);
        }
        long long int actual = makeHash(aux);
        if(colition[actual]){
            col++;
        }
        colition[actual]++;
        printf("%d: %X\n", i, actual);
     }
}


int main()
{

    ios_base::sync_with_stdio(0);
    freopen("input1k.txt","r",stdin);
    freopen("D_C_output1k.txt","w",stdout);
    leer();
    /*
    int cantidadDeArreglos = 0;

    int cantidadDeNumeros = 0;
    int col = 0;
    while(1){
        int arrays;
        int limitMin;
        int limitMax;

        vector <long long int>aux;
        cout << "Dame la cantidad de arreglos que generare\n";
        cin >> arrays;
        cout << " Dame la cantidad de numeros minima que debe tener cada arreglo\n";
        cin >> limitMin;
        cout << " Dame la cantidad de numeros minima que debe tener cada arreglo\n";
        cin >> limitMax;
        cantidadDeArreglos += arrays;

        for(int i = 0;i < arrays; i++){
            aux.clear();
            int limit = rand() % (limitMax - limitMin) + limitMin;
            cantidadDeNumeros += limit;
            //cout << " el arreglo " << i << " tiene " << limit << "numeros\n";
            for(int j = 0; j < limit; j++){
                int numero = rand()%mod;
                //cout << numero << " ";
                aux.push_back(numero);
            }
            long long int actual = makeHash(aux);
            if(colition[actual]){
                col++;
            }
            colition[actual]++;
            //printf(" el arreglo %d tiene el hash %X \n",i, actual);
        }

        cout << "has metido " << cantidadDeNumeros << "numeros\n";
        cout <<"has metido " << cantidadDeArreglos << " arreglos\n";
        cout <<"tiens " << col << " numero de colisiones \n\n";
       // printMap();
    }*/
    return 0;

}
