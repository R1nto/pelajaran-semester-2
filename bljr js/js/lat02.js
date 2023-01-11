// document.querySelector("#paragraf").innerHTML = "saya belajar javascript";

// document.querySelector("#content").innerHTML = "<h1> Ganti Isi </h1>";

let tgl = 2;
let bln = 12;
let hasil = "tanggal dan bulan salah";
if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
    hasil = "zodiak belum dibuat";
    if (bln == 1 && tgl < 32) {
        hasil = "Capricorn";
        if (tgl > 21) {
            hasil = "Aquarius";
        }
    }
    if (bln == 2 && tgl < 30)  {
        hasil = "Aquarius";
        if (tgl > 18) {
            hasil = "Pisces";
        }
    }
    if (bln == 3 && tgl < 32) {
        hasil = "Pisces";
        if (tgl > 21 ) {
            hasil = "Aries";
        }
    }
    if (bln == 4 && tgl < 31) {
        hasil = "Aries";
        if (tgl > 21) {
            hasil = "Taurus";
        }
    }
    if (bln == 5 && tgl < 32) {
        hasil = "Taurus";
        if (tgl > 21) {
            hasil = "Gemini";
        }
    }
    if (bln == 6 && tgl < 31) {
        hasil = "Gemini";
        if (tgl > 21){
            hasil = "Cancer";
        }
    }
    if (bln == 7 && tgl < 32) {
        hasil = "Cancer";
        if (tgl > 21) {
            hasil = "Leo";
        }
    }
    if (bln == 8 && tgl < 31) {
        hasil = "Leo";
        if (tgl > 21) {
            hasil = "Virgo";
        }
    }
    if (bln == 9 && tgl < 32) {
        hasil = "Virgo";
        if (tgl > 21) {
            hasil = "Libra";
        }
    }
    if (bln == 10 && tgl < 31) {
        hasil = "Libra";
        if (tgl > 21) {
            hasil = "Scorpio";
        }
    }
    if (bln == 11 && tgl < 32) {
        hasil = "Scorpio";
        if (tgl > 21) {
            hasil = "Sagitarius";
        }
    }
    if (bln == 12 && tgl < 31) {
        hasil = "Sagitarius";
        if (tgl > 21) {
            hasil = "Capricorn";
        }
    }

}
// console.log(hsl);
document.querySelector("#content").innerHTML = "<h1>" + hasil + "</h1>";
