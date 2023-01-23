var womenArr = [
    {
        img: "https://static.cilory.com/631997-large_default/black-sweetheart-neck-tiered-maxi-dress.jpg.webp",
        name: "Black Neck Tiered Maxi Dress",
        brand:"Cinderella",
        category:"Dress",
        size:"Free Size",
        price:1399.00
    },

    {
        img: "https://static.cilory.com/640454-large_default/balloon-sleeves-pre-winter-flannel-check-dress-by-estonished.jpg.webp",
        name: "Balloon Sleeves Maxi Dress",
        brand:"Cinderella",
        category:"Dress",
        size:"Large",
        price:949.00
    },

    {
        img: "https://static.cilory.com/443383-large_default/estonished-extended-cape-jumpsuit-with-choker-neck.jpg.webp",
        name: "Estonished Cape Jumpsuit",
        brand:"Estonished",
        category:"Dress",
        size:"Medium",
        price:1499.00
    },

    {
        img: "https://static.cilory.com/644870-large_default/floral-printed-balloon-sleeves-jumpsuit-with-belt.jpg.webp",
        name: "Floral printed Jumpsuit",
        brand:"Estonished",
        category:"Dress",
        size:"Small",
        price:1249.00
    },

    {
        img: "https://static.cilory.com/589434-large_default/red-hoddie-jogger-co-ordinate-set-by-estonished.jpg.webp",
        name: "Red Hoddie &Jogger",
        brand:"Desire",
        category:"Dress",
        size:"Free Size",
        price:1599.00
    },

    {
        img: "https://static.cilory.com/589451-large_default/maroon-hoddie-jogger-co-ordinate-set-by-estonished.jpg.webp",
        name: "Maroon Hoddie &Jogger",
        brand:"Desire",
        category:"Dress",
        size:"Large",
        price:1499.00
    },

    {
        img: "https://static.cilory.com/589902-large_default/peach-textured-knitted-sports-shoes.jpg.webp",
        name: "Peach Textured Kinitted Sport Shoes",
        brand:"Monte Carlo",
        category:"Sneakers",
        size:"Small",
        price:749.00
    },

    {
        img: "https://static.cilory.com/491646-large_default/estonished-grey-heeled-sneakers.jpg.webp",
        name: "Estonished Grey Heeled Sneakers",
        brand:"Estonished",
        category:"Sneakers",
        size:"Medium",
        price:375.00
    },

    {
        img: "https://static.cilory.com/642195-large_default/black-solid-hand-bag.jpg.webp",
        name: "Black Solid Hand Bag",
        brand:"Monte Carlo",
        category:"Handbags",
        size:"Free Size",
        price:499.00
    },

    {
        img: "https://static.cilory.com/653530-large_default/dark-pink-metallic-tote-bags-with-tassels.jpg.webp",
        name: "Dark Pink Metallic Bags",
        brand:"Cinderella",
        category:"Handbags",
        size:"Large",
        price:949.00
    },

    {
        img: "https://static.cilory.com/652919-large_default/silver-stone-american-diamond-beaded-dangler-earrings.jpg.webp",
        name: "Silver Stone & American Diamond",
        brand:"Bhagya",
        category:"Accessories",
        size:"Small",
        price:799.00
    },

    {
        img: "https://static.cilory.com/652780-large_default/rose-gold-faux-stone-adjustable-bracelet.jpg.webp",
        name: "Rose Gold Adjustable Bracelet",
        brand:"Bhagya",
        category:"Accessories",
        size:"Large",
        price:99.00
    },

    {
        img: "https://static.cilory.com/651594-large_default/purple-rayon-printed-flared-long-kurti.jpg.webp",
        name: "Purple Rayon Flared Long Kurti",
        brand:"Desire",
        category:"Dress",
        size:"Medium",
        price:1499.00
    },

    {
        img: "https://static.cilory.com/570784-large_default/flared-foil-print-navy-blue-rayon-long-kurti.jpg.webp",
        name: "Flared Foil Blue Rayon Long Kurti",
        brand:"Desire",
        category:"Dress",
        size:"Small",
        price:1299.00
    },

    {
        img: "https://static.cilory.com/640629-large_default/golden-stone-embellished-antique-finished-choker-set.jpg.webp",
        name: "Golden Stone Antique Necklace",
        brand:"Bhagya",
        category:"Accessories",
        size:"Medium",
        price:1599.00
    },

    {
        img: "https://static.cilory.com/640619-large_default/golden-stone-embellished-antique-finished-choker-set.jpg.webp",
        name: "Golden Stone Embellished Necklace",
        brand:"Bhagya",
        category:"Accessories",
        size:"Small",
        price:799.00
    }
]
let monte=document.getElementById("monte");

monte.addEventListener("change", ()=>{
    let monteValue=document.getElementById("monte").value;
    let monteFilter=womenArr.filter((elem)=>elem.brand == monteValue)
    display(monteFilter)
});
let bhagya=document.getElementById("bhagya");

bhagya.addEventListener("change", ()=>{
    let bhagyaValue=document.getElementById("bhagya").value;
    let bhagyaFilter=womenArr.filter((elem)=>elem.brand == bhagyaValue)
    display(bhagyaFilter)
});
let cinderella=document.getElementById("cinderella");

cinderella.addEventListener("change", ()=>{
    let cinderellaValue=document.getElementById("cinderella").value;
    let cinderellaFilter=womenArr.filter((elem)=>elem.brand == cinderellaValue)
    display(cinderellaFilter)
});
let desire=document.getElementById("desire");
desire.addEventListener("change", ()=>{
    let desireValue=document.getElementById("desire").value;
    let desireFilter=womenArr.filter((elem)=>elem.brand == desireValue)
    display(desireFilter)
});
let estonished=document.getElementById("estonished");

estonished.addEventListener("change", ()=>{
    let estonishedValue=document.getElementById("estonished").value;
    let estonishedFilter=womenArr.filter((elem)=>elem.brand == estonishedValue)
    display(estonishedFilter)
});
// category filter
let dress=document.getElementById("dress");
dress.addEventListener("change", ()=>{
    let dressValue=document.getElementById("dress").value;
    let dressFilter=womenArr.filter((elem)=>elem.category == dressValue)
    display(dressFilter)
});

let accessories=document.getElementById("acc");
accessories.addEventListener("change", ()=>{
    let accessoriesValue=document.getElementById("acc").value;
    let accessoriesFilter=womenArr.filter((elem)=>elem.category == accessoriesValue)
    display(accessoriesFilter)
});

let sneaker=document.getElementById("sneaker");
sneaker.addEventListener("change", ()=>{
    let sneakerValue=document.getElementById("sneaker").value;
    let sneakerFilter=womenArr.filter((elem)=>elem.category == sneakerValue)
    display(sneakerFilter)
});

let handbags=document.getElementById("handbag");
handbags.addEventListener("change", ()=>{
    let handbagsValue=document.getElementById("handbag").value;
    let handbagsFilter=womenArr.filter((elem)=>elem.category == handbagsValue)
    display(handbagsFilter)
});

// category filter

// **///Size Filter/*** */
let freeSize=document.getElementById("free");
freeSize.addEventListener("change", ()=>{
    let freeSizeValue=document.getElementById("free").value;
    let freeSizeFilter=womenArr.filter((elem)=>elem.size == freeSizeValue)
    display(freeSizeFilter)
});
let small=document.getElementById("small");
small.addEventListener("change", ()=>{
    let smallValue=document.getElementById("small").value;
    let smallFilter=womenArr.filter((elem)=>elem.size == smallValue)
    display(smallFilter)
});
let medium=document.getElementById("medium");
medium.addEventListener("change", ()=>{
    let mediumValue=document.getElementById("medium").value;
    let mediumFilter=womenArr.filter((elem)=>elem.size == mediumValue)
    display(mediumFilter)
});
let large=document.getElementById("large");
large.addEventListener("change", ()=>{
    let largeValue=document.getElementById("large").value;
    let largeFilter=womenArr.filter((elem)=>elem.size == largeValue)
    display(largeFilter)
});
// **///Size Filter/*** */

// sorting
let womenSort=document.getElementById("sort");
womenSort.addEventListener("change", ()=>{
    let womenSortValue=document.getElementById("sort").value;
    
    let womenSortNew;
    if(womenSortValue=="lth"){
     womenSortNew=womenArr.sort((a,b)=>{return a.price-b.price})
    }
    if(womenSortValue=="htl") {
        womenSortNew=womenArr.sort((a,b)=>{return b.price-a.price}) 
    }
    display(womenSortNew);
    
})

// sorting
function display(womenArr) {
    let prod=document.getElementById("products");
prod.innerHTML="";
    womenArr.map((elem) => {

        var box = document.createElement("div");

        var image = document.createElement("img");
        image.setAttribute("src", elem.img);

        var name = document.createElement("p");
        name.innerText = elem.name;

        var price = document.createElement("p");
        price.innerText = `₹ ${elem.price}`;

        box.append(image, name, price);
        box.addEventListener("click",()=>{
            localStorage.setItem("item",JSON.stringify(elem));
            window.location.href="productDetail.html"
        })
        document.getElementById("products").append(box)
    })
}
display(womenArr)
