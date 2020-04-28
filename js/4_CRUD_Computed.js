var app = new Vue({
    // el = tempat Vue.js beraksi
    el: "#app",
    data: {
        nA: 0,
        nB: 0
    },
    // Properti computed (Untuk melakukan perhitungan tertentu)
    computed: {
        hasilKali() {
            return parseInt(this.nA * this.nB)
        },
        hasilBagi() {
            // THIS tdk bisa di gabungkan
            return parseInt(this.nA) / parseInt(this.nB)
        },
        hasilTambah() {
            // THIS tdk bisa di gabungkan
            return parseInt(this.nA) + parseInt(this.nB)
        },
        hasilKurang() {
            return parseInt(this.nA - this.nB)
        }
    }
});