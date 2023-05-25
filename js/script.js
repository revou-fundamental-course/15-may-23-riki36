
let sisiLuas, sisiKeliling;
let outputLuasPersegi, outputKelilingPersegi;

const luasPersegi = (s) => {
    console.log(s.value * s.value);
    sisiLuas = s.value;
    outputLuasPersegi = s.value * s.value;
}

const kelilingPersegi = (s) => {
    console.log(4 * s.value);
    sisiKeliling = s.value;
    outputKelilingPersegi = 4 * s.value;
}

const hitungLuasPersegi = (h) => {
const output = h.previousElementSibling;


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

const hitungKelilingPersegi = (h) => {
    
const output = h.previousElementSibling;


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
const submitButton = form.querySelector('input[type="submit"]');
output.innerHTML = "";
sisiLuas = undefined;
sisiKeliling = undefined;
form.reset();

}