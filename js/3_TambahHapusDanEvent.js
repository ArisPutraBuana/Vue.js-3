var app = new Vue({
  // el = tempat Vue.js beraksi
  el: "#app",
  data: {
    newNama: "",
    newAlamat: "",
    newJurusan: "",
    dataSiswa: [],
  },
  methods: {
    // Tambah Data
    tambahData() {
      var nNama = this.newNama;
      var nAlamat = this.newAlamat;
      var nJurusan = this.newJurusan;
      // push() = untuk TAMBAH Data Array di JavaScript
      this.dataSiswa.push({
        nama: nNama,
        alamat: nAlamat,
        jurusan: nJurusan,
      });
    },
    // Hapus Data
    hapusData(index) {
      // splice() = untuk HAPUS Data Array di JavaScript
      this.dataSiswa.splice(index, 1);
    },
  },
});
