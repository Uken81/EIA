document.getElementById("name-submit").addEventListener("click", function(event) {
    //Name
    const customerFname = document.getElementById("fname");
    const customerLname = document.getElementById("lname");
    localStorage.setItem("fname", customerFname.value);
    localStorage.setItem("lname", customerLname.value);
    //Adress
    const customerAddress = document.getElementById("address");
    localStorage.setItem("address", customerAddress.value);
    //Phone
    const customerHomePhone = document.getElementById("home-phone");
    const customerMobilePhone = document.getElementById("mobile-phone");
    localStorage.setItem("hPhone", customerHomePhone.value);
    localStorage.setItem("mPhone", customerMobilePhone.value);

    event.preventDefault();
})
