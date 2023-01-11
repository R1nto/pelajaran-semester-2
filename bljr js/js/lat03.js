let isi = document.querySelector("#isi");
isi.innerHTML+="<h1>Soto</h1>"+"<p>Deskripsi Soto</p>"+' <img src="/bljr js/images/sotolamongan.jpg" alt="">'
isi.innerHTML+="<h1>Rawon</h1>";
isi.innerHTML+="<p>Deskripsi Rawon</p>";
isi.innerHTML+='<img src="/bljr js/images/rawondaging.jpg" alt="">';
for (let i = 0; i < 10; i++) {
    document.querySelector("#paragraf").innerHTML += "<h1>" +  i + "</h1>";
    
}

// let tabel = document.querySelector("#tabel");
// tabel.innerHTML = "<table>"
//                 + "<thead><tr><th>No</th></tr></thead>"
//                 + "<tbody>"
//                 + "<tr><td>1</td></tr>"
//                 + "<tr><td>2</td></tr>"
//                 + "<tr><td>3</td></tr>"
//                 + "<tr><td>4</td></tr>"
//                 + "<tr><td>5</td></tr>"
//                 + "</tbody>"
//                 + "</table>"

let tabel = document.querySelector("#tabel");
tabel.innerHTML = "<table>"
tabel.innerHTML += "<thead><tr><th>No</th></tr></thead>"
tabel.innerHTML += "<tbody>"
// tabel.innerHTML += "<tr><td>1</td></tr>"  
// tabel.innerHTML += "<tr><td>2</td></tr>"  
// tabel.innerHTML += "<tr><td>3</td></tr>"  
// tabel.innerHTML += "</tbody>"
// tabel.innerHTML += "</table>"

for (let j = 1; j <= 10; j++) {
    tabel.innerHTML += "<tr><td>" +j+ "</td></tr>";
}

tabel.innerHTML += "</tbody>"
tabel.innerHTML += "</table>"
