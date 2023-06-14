document.writeln("</br>");
document.writeln("ini hello world di file javascript");
document.writeln("</br>");


let fullName = "Argi Fachri Atmaji";
let firstName = "Argi";
let middleName = "Fachri";
let lastName = "Atmaji";

document.writeln("Nama lengkap : " + fullName);
document.writeln("</br>");
document.writeln("Nama pertama : " + firstName);
document.writeln("</br>");
document.writeln("Nama tengah : " + middleName);
document.writeln("</br>");
document.writeln("Nama terakhir : " + lastName);
document.writeln("</br>");



for (let counter=1; counter <= 10;counter++)
{document.writeln("<p>Perulamngan ke " + counter + "</p>")
}
//for(let counter=1); counter <=10;counter++)

function segitiga1(baris) {
    let pola ='';
    for(let i=1; i <= baris; i++){
        for (let j =1; j <=i; j++){
            pola +='*';
        }
        pola += '</br>';
    }
    return pola;
}
document.writeln(segitiga1(5));

function segitiga4(baris) {
    let pola = ''
    ;
    for(let i=1; i <= baris; i++){
    for (let j = baris - 1; j >= i; j--){
    pola += "_"
    ;
    }
    for (let k=1; k <= i; k++){
    pola += '*'
    ;
    }
    for (let m=1; m<=i-1; m++){
    pola += '*'
    ;
    }
    pola += '</br>'
    ;
    }
    return pola;
    }
    document.writeln(segitiga4(5));
