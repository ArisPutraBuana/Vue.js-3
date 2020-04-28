var V = new Vue({
    // el = tempat Vue.js beraksi
    el: "#app",
    data: {
        search: '',
        dataPegawai: [{
                nama: "Aris Putra Buana",
                umur: 12
            },
            {
                nama: "Aris",
                umur: 14
            },
            {
                nama: "Desi Ratna Sari",
                umur: 16
            },
            {
                nama: "Dena",
                umur: 18
            },
            {
                nama: "Joko",
                umur: 20
            },
            {
                nama: "Joni",
                umur: 22
            },
            {
                nama: "Zai",
                umur: 24
            },
            {
                nama: "Zaki",
                umur: 26
            },
            {
                nama: "Mela",
                umur: 28
            },
            {
                nama: "Meyka Setyawai",
                umur: 30
            }
        ],
    },
    computed: {
        CariData() {
            return this.dataPegawai.filter(dataPeg => {
                return dataPeg.nama.indexOf(this.search.toLowerCase()) > -1
            });
        }
    }
});