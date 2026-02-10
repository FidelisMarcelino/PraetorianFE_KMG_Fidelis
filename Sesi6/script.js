// ISO Date
const isoDate = new Date("2023-05-31");
console.log(isoDate);

const isoDateTime = new Date("2023-05-31T14:30:00Z");
console.log(isoDateTime);

const shortDateUS = new Date("05/31/2023");
console.log(shortDateUS);

const longDate = new Date("May 31, 2023");
console.log(longDate);


// Spread
const originalOrganization = {
    name: "BNCC",
    age: 35,
};

console.log(originalOrganization);

const updateOrganization = {
    name: "Bina Nusantara Computer Club",
};

const myUpdatedOrganization = {
    ...originalOrganization,
    ...updateOrganization,
};

console.log(myUpdatedOrganization);

// Gabungin 2 properti
const frontEnd = ["HTML", "CSS", "JS"];
const backEnd = ["PHP", "Node", "Express"];

const fullstack = [...frontEnd, ...backEnd];
console.log(fullstack);

// Nambah properti baru
const user = {
    username: "Tes",
};

const userWithRole = {
    ...user,
    role: "superadmin",
}
console.log(userWithRole);

// Ambil properti tertentu
const color = ["Red", "Blue", "Green", "Yellow"];
const [first, second, ...others] = color;

console.log(first);
console.log(others);

// Find
const users = [{id: 1}, {id: 2}, {id: 3}];
const cari = users.find(u => u.id == 1);
console.log(cari);

// Menjumlahkan
function jumlahkan(...angka){
    return angka.reduce((total, nilai) => total + nilai, 0);
}

console.log(jumlahkan(2, 4, 6));


// Metode Map
const angka = [1, 2, 3];
const kuadrat = angka.map(n => n * n);

console.log(angka);
console.log(kuadrat);


// Try Catch
try{
    // kode yang mungkin menimbulkan error
    console.log("Hello world");
} catch(error){
    // menangani error
    console.log("Print error");
} finally {
    // mungkin dijalankan
    console.log("Program selesai");
}