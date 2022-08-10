import express from "express";

const app = express();

app.use(express.json());

const port = 7000;

app.get("/", (req, res)=>{
    res.send(
            {nama : "Yusron Fauzan"}
        );
});
app.get("/makanan", (req, res)=>{
    res.send(
            [
                {
                    id: 1,
                    nama: "Indomie",
                    rasa: "Rendang"
                },
                {
                    id: 2,
                    nama: "Mie Sedap",
                    rasa: "Sop Kucing"
                }
            ]
        );
});
app.get("/minuman", (req, res)=>{
    res.send(
            [
                {
                    id: 1,
                    nama: "Jus",
                    rasa: "Wortel"
                },
                {
                    id: 2,
                    nama: "Nutrisari",
                    rasa: "Kucing"
                }
            ]
        );
});
app.get("/create", (req, res)=>{
    // const request = req.body(
    //         {nama: ""}
    //     );
    res.send(
            {
                nama : req.body
            }
        );
});

app.listen(port, () => {
    console.log(`Aplikasinya berjalan pada port ${port}`);
});