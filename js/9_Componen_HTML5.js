// Tempat memunculkan isi dari template ini
Vue.component('header_atas', {
    // mengarah ke ID(banner_web)
    template: "#banner_web"
});

// Mengaktifkan Vue.js
var app = new Vue({
    // el = tempat Vue.js beraksi
    el: "#app"
});