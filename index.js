// 1. Simpan 5 data ke dalam 3 array
const alatElektronik = ['TV', 'Kulkas', 'Lampu', 'Laptop', 'AC'];
const namaBuah = ['Semangka', 'Apel', 'Durian', 'Jeruk', 'Anggur'];
const alatSekolah = ['Buku', 'Pensil', 'Penghapus', 'Bulpoint', 'Spidol'];

const getIsiArrayIndexGanjil = (isiArray, namaArray) => {
  console.log(`Index ke 1 dan ke 3 dari array ${namaArray} adalah :`);
  for (let index = 0; index < isiArray.length; index++) {
    // 2. Ambil data index ganjil saja
    if (index % 2 !== 0) {
      console.log(isiArray[index]);
    }
  }
  console.log('\n');
};

getIsiArrayIndexGanjil(alatElektronik, 'alatElektronik');
getIsiArrayIndexGanjil(namaBuah, 'namaBuah');
getIsiArrayIndexGanjil(alatSekolah, 'alatSekolah');
