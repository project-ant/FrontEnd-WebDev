// Javascript Conditional

console.log("JavaScript Conditional..")

let is_married = true;
let first_name = "John";

if (is_married === true){
    console.log(first_name + " is married.");
} else{
    console.log(first_name + " will hopefully marry soon");
}


let nilaiAndi = 95;

if (nilaiAndi > 80) {
  console.log("SANGAT MEMUASKAN");
} else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
  console.log("MEMUASKAN");
} else {
  console.log("JANGAN MENYERAH, COBA LAGI!");
}


let seragamSekolah;
let hari = "senin";

switch (hari) {
  case "senin":
    seragamSekolah = "kemeja putih bawahan merah";
    break;
  case "selasa":
    seragamSekolah = "kemeja hijau bawahan hitam";
    break;
  case "rabu":
    seragamSekolah = "kemeja putih bawahan putih";
    break;
  case "kamis":
    seragamSekolah = "kemeja batik merah bawahan hitam";
    break;
  case "jumat":
    seragamSekolah = "baju pramuka";
    break;
  default:
    seragamSekolah = "baju bebas";
}


//fuction declaration

function namaFungsi(){
    // Kode yang akan dijalankan
  }

// Fungsi yang disimpan di dalam variabel
let namaVariabelFungsi = function(){
    // Kode yang akan dijalankan
  }
  
// Fungsi yang berdiri sendiri
function sapa() {
    return "Selamat Pagi!";
  }
  
  console.log(sapa()); // Output: Selamat Pagi!
  
  // Fungsi disimpan di dalam variabel
  
  let berkenalan = function() {
    return "Hallo, nama saya Sarah.";
  };
  
  console.log(berkenalan()); // Output: Hallo, nama saya Sarah.

  
//Misalnya seperti contoh di bawah ini:
let umur = 21;

function ulangTahun() {
    umur += 1;
}

console.log(ulangTahun()); // Output: undefined




const olahraga = 'basketball';

function namaAtlet() {
  let atlet = 'Lionel Messi';
  const noMessi = 10;
  console.log(olahraga); // Output: basketball
  if (olahraga === 'basketball') {
     atlet = 'Kobe Bryant';
     const noKobe = 24;
     console.log(olahraga); // Output: basketball
  }
  return atlet;
}

console.log(namaAtlet()); // Output: Kobe Bryant
console.log(olahraga); // Output: basketball





const olahraga = 'basketball';

function namaAtlet() {
  let atlet = 'Lionel Messi'; // lingkup fungsi
  const noMessi = 10; // lingkup fungsi
  if (olahraga === 'basketball') { 
     atlet = 'Kobe Bryant';
     const noKobe = 24; // lingkup blok
     console.log(noMessi); // Output: 10  
  }
  console.log(noKobe); // Output: Uncaught ReferenceError: noKobe is not defined
  return atlet;
}

namaAtlet();



