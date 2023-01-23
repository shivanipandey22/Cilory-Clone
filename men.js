

var menArr = [
    {
        img: "https://static.cilory.com/634710-large_default/white-cotton-polo-t-shirt-by-grunt.jpg.webp",
        name: "White Polo T-shirt By Grunt",
        brand:"GRUNT",
        category:"Solid Polos",
        size:"Free Size",
        price:799.00
    },

    {
        img: "https://static.cilory.com/624453-large_default/grunt-ocean-blue-contrast-collar-t-shirt.jpg.webp",
        name: "Grunt Ocean Blue T-shirt",
        brand:"GRUNT",
        category:"Solid Polos",
        size:"Free Size",
        price:699.00
    },

    {
        img: "https://static.cilory.com/634731-large_default/navy-cotton-polo-t-shirt-by-grunt.jpg.webp",
        name: "Navy Polo T-shirt By Grunt",
        brand:"GRUNT",
        category:"Solid Polos",
        size:"Medium",
        price:799.00
    },

    {
        img: "https://static.cilory.com/624484-large_default/olive-tipping-collar-t-shirt-by-nologo.jpg.webp",
        name: "Grunt Olive Polo T-shirt",
        brand:"GRUNT",
        category:"Solid Polos",
        size:"Medium",
        price:599.00
    },

    {
        img: "https://static.cilory.com/528186-large_default/black-club-master-round-sunglasses.jpg.webp",
        name: "Black Club Round Sunglasses",
        brand:"Black Club",
        category:"Sunglasses",
        size:"Medium",
        price:399.00
    },

    {
        img: "https://static.cilory.com/528229-large_default/hubris-clear-and-black-square-frames.jpg.webp",
        name: "Black Club Square Frames",
        brand:"Black Club",
        category:"Sunglasses",
        size:"Large",
        price:449.00
    },

    {
        img: "https://static.cilory.com/635408-large_default/estonished-wayfarer-style-dual-tone-sunglasses.jpg.webp",
        name: "Estonished Wayfarer Sunglasses",
        brand:"Estonished",
        category:"Sunglasses",
        size:"Small",
        price:449.00
    },

    {
        img: "https://static.cilory.com/602758-large_default/estonished-red-golden-triangle-unisex-sunglasses.jpg.webp",
        name: "Estonished Red & Golden Sunglasses",
        brand:"Estonished",
        category:"Sunglasses",
        size:"Small",
        price:299.00
    },

    {
        img: "https://static.cilory.com/641268-large_default/cd-by-monte-carlo-black-woollen-checks-socks.jpg.webp",
        name: "Monte Carlo Black Formal Socks",
        brand:" Monte Carlo",
        category:"Socks",
        size:"Large",
        price:549.00
    },

    {
        img: "https://static.cilory.com/620293-large_default/monte-carlo-grey-mens-active-wear-socks.jpg.webp",
        name: "Monte Carlo Grey Socks",
        brand:" Monte Carlo",
        category:"Socks",
        size:"Free Size",
        price:439.00
    },

    {
        img: "https://static.cilory.com/641388-large_default/cd-by-monte-carlo-printed-wooly-socks.jpg.webp",
        name: "C&D Printed Socks",
        brand:" Monte Carlo",
        category:"Socks",
        size:"Small",
        price:199.00
    },

    {
        img: "https://static.cilory.com/641394-large_default/cd-by-monte-carlo-printed-wooly-socks.jpg.webp",
        name: "C&D Printed Wooly Socks",
        brand:" Monte Carlo",
        category:"Socks",
        size:"Large",
        price:349.00
    },

    {
        img: "https://static.cilory.com/626980-large_default/nologo-black-leather-two-fold-wallet.jpg.webp",
        name: "NoLogo Black Leather Wallet",
        brand:"NoLogo",
        category:"Wallet",
        size:"Medium",
        price:475.00
    },

    {
        img: "https://static.cilory.com/627000-large_default/nologo-black-leather-three-fold-wallet.jpg.webp",
        name: "NoLogo Black Leather Three Fold Wallet",
        brand:"NoLogo",
        category:"Wallet",
        size:"Free Size",
        price:499.00
    },

    {
        img: "https://static.cilory.com/626992-large_default/nologo-black-leather-three-fold-wallet.jpg.webp",
        name: "NoLogo Black Leather Three Fold Wallet",
        brand:"NoLogo",
        category:"Wallet",
        size:"Small",
        price:359.00
    },

    {
        img: "https://static.cilory.com/297481-large_default/peter-england-blue-tie-with-pocket-square.jpg.webp",
        name: "Peter England Blue Tie",
        category:"Tie",
        size:"Medium",
        price:400.00
    },

    {
        img: "https://static.cilory.com/297697-large_default/peter-england-statements-royal-blue-neck-tie.jpg.webp",
        name: "Peter England Red Men's Tie",
        brand:"Peter England",
        category:"Tie",
        size:"Small",
        price:699.00
    },

    {
        img: "https://static.cilory.com/365801-large_default/peter-england-statements-navy-neck-tie.jpg.webp",
        name: "Peter England Statements Navy Neck Tie",
        brand:"Peter England",
        category:"Tie",
        size:"Large",
        price:699.00
    },

    {
        img: "https://static.cilory.com/581215-large_default/nologo-navy-long-sleeves-short-kurta.jpg.webp",
        name: "NoLogo Navy Short Kurta",
        brand:"NoLogo",
        size:"Free Size",
        price:699.00
    },

    {
        img: "https://static.cilory.com/563317-large_default/green-cotton-printed-short-kurta-by-nologo.jpg.webp",
        name: "Green Cotton Kurta NoLogo",
        brand:"NoLogo",
        size:"Medium",
        price:947.00
    },
];

// **///Brand Filter/*** */
let monte_brand=document.getElementById("monte");

monte_brand.addEventListener("change", ()=>{
    let monteValue=document.getElementById("monte").value;
    let monteFilter=menArr.filter((elem)=>elem.brand == monteValue)
    display(monteFilter)
});
let grunt_brand=document.getElementById("grunt");

grunt_brand.addEventListener("change", ()=>{
    let gruntValue=document.getElementById("grunt").value;
    let gruntFilter=menArr.filter((elem)=>elem.brand == gruntValue)
    display(gruntFilter)
});
let nologo_brand=document.getElementById("nologo");

nologo_brand.addEventListener("change", ()=>{
    let nologoValue=document.getElementById("nologo").value;
    let nologoFilter=menArr.filter((elem)=>elem.brand == nologoValue)
    display(nologoFilter)
});
let peter_brand=document.getElementById("peter");

peter_brand.addEventListener("change", ()=>{
    let peterValue=document.getElementById("peter").value;
    let peterFilter=menArr.filter((elem)=>elem.brand == peterValue)
    display(peterFilter)
});
let club_brand=document.getElementById("club");

club_brand.addEventListener("change", ()=>{
    let clubValue=document.getElementById("club").value;
    let clubFilter=menArr.filter((elem)=>elem.brand == clubValue)
    display(clubFilter)
});
let estonished_brand=document.getElementById("estonished");

estonished_brand.addEventListener("change", ()=>{
    let estonishedValue=document.getElementById("estonished").value;
    let estonishedFilter=menArr.filter((elem)=>elem.brand == estonishedValue)
    display(estonishedFilter)
});
// **///Brand Filter/*** */

// **////*** */
// category filter
let solid=document.getElementById("polo");
solid.addEventListener("change", ()=>{
    let poloValue=document.getElementById("polo").value;
    let poloFilter=menArr.filter((elem)=>elem.category == poloValue)
    display(poloFilter)
});
let socks=document.getElementById("socks");
socks.addEventListener("change", ()=>{
    let socksValue=document.getElementById("socks").value;
    let socksFilter=menArr.filter((elem)=>elem.category == socksValue)
    display(socksFilter)
});

let wallet=document.getElementById("wallet");
wallet.addEventListener("change", ()=>{
    let walletValue=document.getElementById("wallet").value;
    let walletFilter=menArr.filter((elem)=>elem.category == walletValue)
    display(walletFilter)
});

let tie=document.getElementById("tie");
tie.addEventListener("change", ()=>{
    let tieValue=document.getElementById("tie").value;
    let tieFilter=menArr.filter((elem)=>elem.category == tieValue)
    display(tieFilter)
});

let sunglasses=document.getElementById("sunglasses");
sunglasses.addEventListener("change", ()=>{
    let sunglassesValue=document.getElementById("sunglasses").value;
    let sunglassesFilter=menArr.filter((elem)=>elem.category == sunglassesValue)
    display(sunglassesFilter)
});
// category filter

// **///Size Filter/*** */
let freeSize=document.getElementById("free");
freeSize.addEventListener("change", ()=>{
    let freeSizeValue=document.getElementById("free").value;
    let freeSizeFilter=menArr.filter((elem)=>elem.size == freeSizeValue)
    display(freeSizeFilter)
});
let small=document.getElementById("small");
small.addEventListener("change", ()=>{
    let smallValue=document.getElementById("small").value;
    let smallFilter=menArr.filter((elem)=>elem.size == smallValue)
    display(smallFilter)
});
let medium=document.getElementById("medium");
medium.addEventListener("change", ()=>{
    let mediumValue=document.getElementById("medium").value;
    let mediumFilter=menArr.filter((elem)=>elem.size == mediumValue)
    display(mediumFilter)
});
let large=document.getElementById("large");
large.addEventListener("change", ()=>{
    let largeValue=document.getElementById("large").value;
    let largeFilter=menArr.filter((elem)=>elem.size == largeValue)
    display(largeFilter)
});
// **///Size Filter/*** */
// **////*** */
// sorting
let menSort=document.getElementById("sort");
menSort.addEventListener("change", ()=>{
    let menSortValue=document.getElementById("sort").value;
    
    let menSortNew;
    if(menSortValue=="lth"){
     menSortNew=menArr.sort((a,b)=>{return a.price-b.price})
    }
    if(menSortValue=="htl") {
        menSortNew=menArr.sort((a,b)=>{return b.price-a.price}) 
    }
    display(menSortNew);
    
})

// sorting

function display(menArr){
let prod=document.getElementById("products");
prod.innerHTML="";
menArr.map((elem)=> {
    
    var box=document.createElement("div");

    var image=document.createElement("img");
    image.setAttribute("src",elem.img);

    var name=document.createElement("p");
    name.innerText=elem.name;

    var price=document.createElement("p");
    price.innerText=`₹ ${elem.price}`;

    box.append(image, name,price);
    box.addEventListener("click",()=>{
        localStorage.setItem("item",JSON.stringify(elem));
        window.location.href="productDetail.html"
    })
    document.getElementById("products").append(box)
})
}
display(menArr)

