// Membuat Komponen ke-1
Vue.component('selamatdatang', {
    template: "<h2>Selamat Datang di Website Vue.js (Komponen ke-1)</h2>"
});
// Membuat Komponen ke-2
Vue.component('sampaijumpa', {
    template: "<h2>Sampai jumpa lagi (Komponen ke-2)</h2>"
});

// Mengaktifkan Vue.js
var app = new Vue({
    // el = tempat Vue.js beraksi / berkerja
    el: "#app"
});