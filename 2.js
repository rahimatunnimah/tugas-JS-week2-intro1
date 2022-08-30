const mtk = 80;
const bahasaIndo = 85;
const bahasaInggris = 90;
const ipa = 90;
const value = mtk && bahasaIndo && bahasaInggris && ipa;

// validasi nilai harus angka
if (typeof value !== "number") {
  return console.log("value must be number");
}

//validasi nilai tidak boleh angka negatif
if (mtk < 0) {
  return console.log(`mtk value cannot be negative`);
}
if (bahasaIndo < 0) {
  return console.log(`bahasa indo value cannot be negative`);
}
if (bahasaInggris < 0) {
  return console.log(`bahasa inggris value cannot be negative`);
}
if (ipa < 0) {
  return console.log(`ipa value cannot be negative`);
}

const average = (mtk + bahasaIndo + bahasaInggris + ipa) / 4;
console.log(`Rata-rata = ${average}`);

if (average >= 90) {
  console.log("Grade = A");
} else if (average >= 80) {
  console.log("Grade = B");
} else if (average >= 70) {
  console.log("Grade = C");
} else if (average >= 60) {
  console.log("Grade = D");
} else {
  console.log("Grade = E");
}
