var arr = JSON.parse(localStorage.getItem("user"))||[];
function submitForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var amount = document.getElementById("amount").value;
    localStorage.setItem("user",amount);
    var obj = {
        name:name,
        email:email,
        address:address,
    }
    arr.push(obj);
    localStorage.setItem("user",JSON.stringify(arr));
    window.location.reload();
}
