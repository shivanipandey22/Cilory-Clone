var productData=JSON.parse(localStorage.getItem("item"));

function display(elem){


var box = document.createElement("div");

        var image = document.createElement("img");
        image.setAttribute("src", elem.img);

        var name = document.createElement("p");
        name.innerText = elem.name;

        var price = document.createElement("p");
        price.innerText = `₹ ${elem.price}`;

        box.append(image, name, price)
        document.getElementById("products1").append(box)
}
display(productData);