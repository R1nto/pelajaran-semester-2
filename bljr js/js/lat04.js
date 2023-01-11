zodiak(2,22);
lulus(101);
console.log(terbilang(1234987));
console.log(prima(5));

function zodiak(bln,tgl) {
    let hasil = "salah";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        hasil = "zodiak belum dibuat";
        if (bln == 1 && tgl < 32) {
            hasil = "Capricorn";
            if (tgl > 21) {
                hasil = "Aquarius";
            }
        }
        if (bln == 2 && tgl < 30)  {
            hasil = "Aqauarius";
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
    console.log(hasil);    
}

function lulus(nil) {
    if (nil >= 0 && nil <= 100) {
        if (nil >= 80) {
            console.log("lulus");
        } else {
            console.log("tidak lulus");
        }
    } else {
        console.log("nilai tidak valid");
    }
}

function terbilang(num) {
    var bilne=["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"];
		if(num < 12){
			return bilne[num];
		}else if(num < 20){
			return terbilang(num-10)+" belas";
		}else if(num < 100){
			return terbilang(Math.floor((num)/10))+" puluh "+terbilang((num)%10);
		}else if(num < 200){
			return "seratus "+terbilang((num)-100);
		}else if(num < 1000){
			return terbilang(Math.floor((num)/100))+" ratus "+terbilang((num)%100);
		}else if(num < 2000){
			return "seribu "+terbilang((num)-1000);
		}else if(num < 1000000){
			return terbilang(Math.floor((num)/1000))+" ribu "+terbilang((num)%1000);
		}else if(num < 1000000000){
			return terbilang(Math.floor((num)/1000000))+" juta "+terbilang((num)%1000000);
		}else if(num < 1000000000000){
			return terbilang(Math.floor((num)/1000000000))+" milyar "+terbilang((num)%1000000000);
		}else if(num < 1000000000000000){
			return terbilang(Math.floor((num)/1000000000000))+" trilyun "+terbilang((num)%1000000000000);
		}
	}


function prima(bil) {
    let bagi = 0;
    for (let i = 0; i <= bil; i++) {
        if (bil % i == 0) {
            bagi++;
        }    
    }    
    if (bagi == 2) {
        return "Bilangan Prima";
    } else {
        return "Tidak Bilangan Prima";
    }
}

