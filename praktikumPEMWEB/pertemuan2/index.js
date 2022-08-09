const { createApp, ref } = Vue

const app = createApp({
    setup(){
       const url = "https://randomuser.me/api/";
       const imgUser = ref("");
       const nameUser = ref("");
       const lastname = ref("");

       const generateUser = async () => {
            const resUser = await axios.get(url);
            nameUser.value = resUser.data.results[0].name.first;
            lastname.value = resUser.data.results[0].name.last;
            imgUser.value = resUser.data.results[0].picture.large;
            console.log(imgUser.value);
       }
        return {
            generateUser,
            imgUser,
            nameUser,
            lastname
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