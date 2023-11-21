var info = "";
    for(let i=1; i<=13; i++){
        const items = ["BOOK","Key","Money","Wallet","Charger","Khata","Adepter","ID Card","Mouse","Sunglass","Ticket","Toy","T-shirt"];
        const location = ["Food court", "Accounts", "Library", "Green Garden", "Auditorium", "BONOMAYA-1", "FOOTSAL"];
        info += `<div class="box item-info">
                    <a href="#"><img src="img/item-${i}.jpg"  id="Img"></a>
                    <h4>Item : ${items[i-1]}<br>
                    Location : ${location[i%7]}</h>
                </div>`;

    }
document.querySelector(".content").innerHTML = info;

