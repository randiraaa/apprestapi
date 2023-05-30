"use strict";

exports.ok = (values, res) => {
  const data = {
    status: 200,
    values: values,
  };
  res.json(data);
  res.end();
};

// Response/Connection Nested
exports.okNested = (values, res) => {
  // Melakukan akumulasi/penggabungan
  const hasil = values.reduce((akumulasiGroup, item) => {
    // Menentukan Key Group
    if (akumulasiGroup[item.nama]) {
      // Membuat variable untuk group nama mahasiswa
      const group = akumulasiGroup[item.nama];
      // Mengecek isi array adalah matakuliah yang sama
      if (Array.isArray(group.matakuliah)) {
        // Maka tambahkan value ke dalam group matakuliah
        group.matakuliah.push(item.matakuliah);
      } else {
        group.matakuliah = [group.matakuliah, item.matakuliah];
      }
    } else {
      akumulasiGroup[item.nama] = item;
    }
    return akumulasiGroup;
  }, {});

  const data = {
    status: 200,
    values: hasil,
  };

  res.json(data);
  res.end();
};
