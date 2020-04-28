var app = new Vue({
    // el = tempat Vue.js beraksi
    el: "#app",
    data: {
        dataSiswa: [{
                id: 1,
                nama: "Aris Putra Buana",
                // FALSE => Harus huruf kecil (false) agar tdk error
                hadir: false
            },
            {
                id: 2,
                nama: "Meyka Setyawati",
                // TRUE => Harus huruf kecil (true) agar tdk error
                hadir: true
            },
            {
                id: 3,
                nama: "Desi Ratna Sari",
                hadir: true
            },
            {
                id: 4,
                nama: "Sutejo",
                hadir: false
            },
            {
                id: 5,
                nama: "Sukarmin",
                hadir: false
            }
        ]
    }
});