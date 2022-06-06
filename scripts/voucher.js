var amount = Number(localStorage.getItem("user.amount")) + Number(document.getElementById("amount"));
document.getElementById("wallet_balance").innerText = amount;




let url =  "https://masai-vouchers-api.herokuapp.com/api/vouchers";

fetch(url).then(function(res){
       return res.json();
}).then(function(res){
   append(res[0].vouchers);
}).catch(function(err){
    console.log(err);
})

function append(data){
    data.forEach(function(el){
        let div = document.createElement("div");
        div.style.width = "350px"
        div.style.height = "450px";
        div.style.border = "1px solid black";
        div.style.borderRadius = "10px";
       let name = document.createElement("p");
       name.style.textAlign = "center";
       let image = document.createElement("img");
       image.style.width = "100%";
       image.style.height = "330px";
       let price = document.createElement("p");
       price.style.textAlign = "center";
       let btn = document.createElement("button");
       btn.innerText = "Buy";
       btn.style.marginLeft = "160px";
       btn.setAttribute("class","buy_voucher")
       btn.addEventListener("click",buyFun);
       function buyFun(){
             let post = image.src;
             let pri = price.innerText;
             let nam = name.innerText;
             let arr = [post,pri,nam];
             localStorage.setItem("purchase",arr);
             window.location.href = "purchase.html";
       }
       name.innerText = el.name;
       image.src = el.image;
       price.innerText = el.price;
      div.append(image,name,price,btn);
      voucher_list.append(div);
    })
}
