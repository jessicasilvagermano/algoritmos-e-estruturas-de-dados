
//Inverter uma String

 

 function reverteString(txt) {
    let transformaTxtEmArrayDeStringsEinverte = txt.split('').reverse();
    let txtInvertida = transformaTxtEmArrayDeStringsEinverte.join('');
    return txtInvertida;
    
    }
    
    console.log(reverteString("hello"))