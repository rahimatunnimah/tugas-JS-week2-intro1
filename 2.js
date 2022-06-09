const hasilUjian = (mtk, indo, inggris, IPA) => {
  const nilai = [mtk, indo, inggris, IPA];
  let total = 0;
  const banyakNilai = nilai.length;
  for (i = 0; i < nilai.length; i++) {
    total += nilai[i];
  }
  const average = total / banyakNilai;
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
};

hasilUjian(80, 90, 89, 69);
