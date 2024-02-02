var jumlahMataKuliah;
var totalSKS = 0;
var totalNilai = 0;
var inputMatkulArray = [];  // Membuat array untuk menyimpan input nama mata kuliah
var inputNilaiArray = [];   // Membuat array untuk menyimpan input nilai mata kuliah
var inputSKSArray = [];     // Membuat array untuk menyimpan input bobot kredit

function lanjutTahap2() {
    // Mengambil nilai jumlah mata kuliah dari input
    jumlahMataKuliah = document.getElementById("jumlahMataKuliah").value;

    // Menampilkan tahap 2, menyembunyikan tahap 1
    document.getElementById("tahap1").style.display = "none";
    document.getElementById("tahap2").style.display = "block";

    // Memanggil fungsi untuk menampilkan formulir input nilai
    tampilkanFormulirInput();
}

function lanjutTahap3() {
    // Menampilkan tahap 3, menyembunyikan tahap 2
    document.getElementById("tahap2").style.display = "none";
    document.getElementById("tahap3").style.display = "block";

    // Memanggil fungsi untuk menampilkan hasil IP
    tampilkanHasilIP();
}

function tampilkanFormulirInput() {
    var inputTable = document.getElementById("inputTable");
    inputTable.innerHTML = ""; // Mengosongkan inputTable sebelum menampilkan input baru

    // Tambahkan baris header tabel
    var headerRow = inputTable.insertRow();
    var headerCell1 = headerRow.insertCell(0);
    headerCell1.innerHTML = "<b>Nama Mata Kuliah</b>";
    var headerCell2 = headerRow.insertCell(1);
    headerCell2.innerHTML = "<b>Nilai</b>";
    var headerCell3 = headerRow.insertCell(2);
    headerCell3.innerHTML = "<b>Bobot Kredit</b>";

    for (var i = 0; i < jumlahMataKuliah; i++) {
        var row = inputTable.insertRow();

        // Input untuk Nama Mata Kuliah
        var inputMatkul = document.createElement("input");
        inputMatkul.type = "text";
        var cell1 = row.insertCell(0);
        cell1.appendChild(inputMatkul);
        inputMatkulArray.push(inputMatkul);  // Menambahkan input ke dalam array

        // Input untuk Nilai Mata Kuliah
        var inputNilai = document.createElement("input");
        inputNilai.type = "text";
        var cell2 = row.insertCell(1);
        cell2.appendChild(inputNilai);
        inputNilaiArray.push(inputNilai);  // Menambahkan input ke dalam array

        // Input untuk Bobot Kredit
        var inputSKS = document.createElement("input");
        inputSKS.type = "number";
        var cell3 = row.insertCell(2);
        cell3.appendChild(inputSKS);
        inputSKSArray.push(inputSKS);  // Menambahkan input ke dalam array

        // Tambahkan logika nilai yang lain sesuai kebutuhan
    }
}

function tampilkanHasilIP() {
    var hasilContainer = document.getElementById("hasilContainer");
    hasilContainer.innerHTML = ""; // Mengosongkan hasilContainer sebelum menampilkan hasil baru

    for (var i = 0; i < jumlahMataKuliah; i++) {
        // Tampilkan hasil per mata kuliah di hasilContainer
        hasilContainer.innerHTML += '<p>Mata Kuliah: ' + inputMatkulArray[i].value + ', Nilai: ' + (hitungNilai(inputNilaiArray[i].value) * inputSKSArray[i].value).toFixed(2) + '</p>';

        // Hitung IP per mata kuliah
        totalSKS += parseInt(inputSKSArray[i].value);
        totalNilai += hitungNilai(inputNilaiArray[i].value) * inputSKSArray[i].value;
    }

    // Hitung IPK
    var ipk = totalNilai / totalSKS;

    // Tampilkan hasil IPK di hasilContainer
    hasilContainer.innerHTML += '<p>Total Nilai: ' + totalNilai.toFixed(2) + ', Total SKS: ' + totalSKS + ', IPK: ' + ipk.toFixed(2) + '</p>';
}

function hitungNilai(abjad){
    if (abjad.toUpperCase() == "A") {
        nilai = 4.0;
    } else if (abjad.toUpperCase() == "AB") {
        nilai = 3.5;
    } else if (abjad.toUpperCase() == "B") {
        nilai = 3;
    } else if (abjad.toUpperCase() == "BC") {
        nilai = 2.5;
    } else if (abjad.toUpperCase() == "C") {
        nilai = 2;
    } else if (abjad.toUpperCase() == "D") {
        nilai = 1;
    } else if (abjad.toUpperCase() == "E") {
        nilai = 0;
    } 
    return nilai;  // Mengembalikan nilai yang telah dihitung
}

function selesai() {
    alert("Terima kasih! Perhitungan IP selesai.");
}

function kembaliKeMenuUtama() {
    // Mereset variabel global
    jumlahMataKuliah = null;
    totalSKS = 0;
    totalNilai = 0;
    inputMatkulArray = [];
    inputNilaiArray = [];
    inputSKSArray = [];

    // Menampilkan tahap 1, menyembunyikan tahap 2 dan 3
    document.getElementById("tahap1").style.display = "block";
    document.getElementById("tahap2").style.display = "none";
    document.getElementById("tahap3").style.display = "none";
}