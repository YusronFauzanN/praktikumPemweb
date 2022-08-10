const { createApp, ref } = Vue

const app = createApp({
    setup(){
       const url = "http://localhost:7000/";
       const nameUser = ref("");
       const namaMakanan = ref([]);
       const namaMinuman = ref([]);
       

        const generateUser = async () => {
            const resUser = await axios.get(url);
            nameUser.value = resUser.data.nama;
        };
        const generateMakanan = async () => {
            const res = await axios.get(url+"makanan");
            namaMakanan.value = res.data;
            namaMinuman.value = "";
        };
        const generateMinuman = async () => {
            const res = await axios.get(url+"minuman");
            namaMinuman.value = res.data;
            namaMakanan.value = "";


        };
        return {
            generateUser,
            generateMakanan,
            generateMinuman,
            nameUser,
            namaMakanan,
            namaMinuman
        };
    }
});
app.mount("#app");



        // let kegiatan = ref("");
        // let modeUpdate = ref(false);
        // const dataKegiatan = ref(["Makan","Minum"]);
        // const tambahKegiatan = () => {
        //     dataKegiatan.value.push(kegiatan.value);
        //     kegiatan.value = "";
        //     modeUpdate.value = false;
        // }
        // const getDataKegiatan = (kegiatan) => {
        //     kegiatan.value = kegiatan;
        //     modeUpdate = false;
        // }
        // const updateKegiatan = (index) => {
        //     modeUpdate.value = true;
        //     dataKegiatan.value[index] = kegiatan.value;
        //     modeUpdate = false;
        //     kegiatan.value = "";
        // }
        // const hapusKegiatan = (index) => {
        //     dataKegiatan.value.splice(index, 1);
        // }

        // return{
        //     modeUpdate,
        //     kegiatan,
        //     dataKegiatan,
        //     tambahKegiatan,
        //     hapusKegiatan,
        //     updateKegiatan,
        //     getDataKegiatan
        // };