#include <iostream>
#include <iomanip>
using namespace std;

int totalSKS = 0;
float totalNilai = 0;
float hasil = 0;

void Print(){
    system("CLS");
    cout << fixed << setprecision(2);
    cout << "Total nilai = " << totalNilai << endl;
    cout << "Total SKS = " << totalSKS << endl;
    cout << fixed << setprecision(2); //Menampilkan 2 angka dibelakang koma
    hasil = totalNilai / totalSKS;
    cout << endl;
    cout << "Nilai IP Semester anda adalah = " << hasil << endl;
    system("PAUSE");
}

void HitungIPS(float Jumlah, int Sks){    
    totalSKS += Sks; 
    totalNilai += Jumlah;
}

void HitungNilaiMatkul(string Abjad, int Sks){
    float Nilai;
    float Jumlah;
    
    //Mengecek nilai berdasarkan abjad
    if(Abjad == "a"|| Abjad == "A") {
        Nilai = 4;
    }
        
    else if(Abjad == "ab"|| Abjad == "AB") {
        Nilai = 3.5;
    }
        
    else if(Abjad == "b"|| Abjad == "B") {
        Nilai = 3;
    }
        
    else if(Abjad == "bc"|| Abjad == "BC"){
        Nilai = 2.5;
    }
            
    else if(Abjad == "c"|| Abjad == "C"){
        Nilai = 2;
    }
        
    else if(Abjad == "d"|| Abjad == "D"){
        Nilai = 1;
    }
        
    else if(Abjad == "e"|| Abjad == "E"){
        Nilai = 0;
    }
        
    else {
        cout << "Huruf yang anda masukkan salah" << endl;
    }
        
    Jumlah = Nilai*Sks; // Menghitung hasil nilai tiap mata kuliah
    HitungIPS(Jumlah,Sks);
}
    
void Display(){
    int JumMatkul;
    int Sks;
    string NamaMatkul;
    string Abjad;

    cout << "===== KALKULATOR IP SEMESTER =====" << endl;
    cout << endl;
    cout << "Masukkan banyak mata kuliah = "; 
    cin >> JumMatkul;

    
    while(JumMatkul--){
        cin.ignore();
        cout << "Nama Mata Kuliah = "; getline(cin,NamaMatkul); //Mengambil seluruh kata dalam kalimat
        cout << "Nilai Mata Kuliah (berupa abjad) = "; cin >> Abjad;
        cout << "Bobot Kredit = "; cin >> Sks;
        cout << endl;
        HitungNilaiMatkul(Abjad,Sks);
    }
    
}

int main() {
    Display();
    Print();
}
    