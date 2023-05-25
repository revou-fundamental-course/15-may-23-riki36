
let sisiLuas, sisiKeliling;
let outputLuasPersegi, outputKelilingPersegi;

const inputLuas = (sisiluas) => {

    sisiLuas = sisiluas.value;
    outputLuasPersegi = sisiluas.value * sisiluas.value;
}

const inputKeliling = (sisikeliling) => {

    sisiKeliling = sisikeliling.value;
    outputKelilingPersegi = 4 * sisikeliling.value;
}

const hitungLuas = (hitungluas) => {
const output = hitungluas.previousElementSibling;


    if (!sisiLuas) {
    output.innerHTML = "Nilai sisi harus di isi";
    output.classList.add("error");
    return;
    } else if (isNaN(sisiLuas)) {
    output.innerHTML = "Nilai sisi harus di isi dengan angka";
    output.classList.add("error");
    return;
    }

    output.classList.remove("error");

    const outputTag = `
    <p>L = S x S</p>
    <p>L = ${sisiLuas} x ${sisiLuas}</p>
    <p>L = ${outputLuasPersegi}</p>
    `;

    output.innerHTML = outputTag;
    
}

const hitungKeliling = (hitungkeliling) => {
    
const output = hitungkeliling.previousElementSibling;


    if (!sisiKeliling) {
    output.innerHTML = "Nilai sisi harus di isi";
    output.classList.add("error");
    return;
    } else if (isNaN(sisiKeliling)) {
    output.innerHTML = "Nilai sisi harus di isi dengan angka";
    output.classList.add("error");
    return;
    }

    output.classList.remove("error");

    const outputTag = `
    <p>K = 4 x S</p>
    <p>K = 4 x ${sisiKeliling}</p>
    <p>K = ${outputKelilingPersegi}</p>
    `;

    output.innerHTML = outputTag;

}

const resetAll = (r) => {
const form = r.closest('form');
const output = form.querySelector('.output');
const submitButton = form.querySelector('input[id="hitung-luas"][id="hitung-keliling"]');
output.innerHTML = "";
sisiLuas = undefined;
sisiKeliling = undefined;
form.reset();

}

  
  
  
  
  