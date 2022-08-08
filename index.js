const output = document.getElementById("output");
const btnBurung = document.getElementById("btnBurung");
const txtBurung = document.getElementById("txtBurung");

function tampilGambar() {
    let text = txtBurung.value.toLowerCase();
    if(text == "burung"){
        output.innerHTML = '<img src="asset/burung.jpg" alt="" class="img-fit">';
    }
    else if(text == "harimau"){
        output.innerHTML = '<img src="asset/harimau.jpg" alt="" class="img-fit">';
    }
    else if(text == "kucing"){
        output.innerHTML = '<img src="asset/kucing.jpg" alt="" class="img-fit">';
    }
    else{
        output.innerHTML = '<img src="asset/manusia.jpg" alt="" class="img-fit">';
    }
}
btnBurung.addEventListener("click", tampilGambar);