
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
    const outputTag = `
    <p>L = S x S</p>
    <p>L = ${sisiLuas} x ${sisiLuas}</p>
    <p>L = ${outputLuasPersegi}</p>
    `;
   
    output.innerHTML = outputTag;
    
}

const hitungKelilingPersegi = (h) => {
    const output = h.previousElementSibling;
    const outputTag = `
    <p>K = 4 x S</p>
    <p>K = 4 x ${sisiKeliling}</p>
    <p>K = ${outputKelilingPersegi}</p>
    `;

    output.innerHTML = outputTag;
}

const resetAll = (r) => {
    r.closest('form').querySelector('.output').innerHTML = "";
}