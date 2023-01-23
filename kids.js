kidsArr = [
    {
        img: "https://static.cilory.com/589841-large_default/eteenz-printed-t-shirts-for-boys.jpg.webp",
        name: "Eteenz Printed T-shirts",
        brand:"Bhagya",
        category:"Boys Tshirt",
        price:279.00
    },

    {
        img: "https://static.cilory.com/577305-large_default/sundae-printed-boys-full-sleeves-t-shirt.jpg.webp",
        name: "Sundae Printed T-shirt",
        brand:"Bhagya",
        category:"Boys Tshirt",
        price:305.00
     },

    {
        img: "https://static.cilory.com/578613-large_default/flock-print-velvet-yoke-fit-and-flare-dress-by-estonished.jpg.webp",
        name: "Flock Print Girl Dress",
        brand:"Flair",
        category:"Girl Dress",
        price:489.00
     },

    {
        img: "https://static.cilory.com/612648-large_default/printed-gotta-work-kurta-with-skirt-dupatta.jpg.webp",
        name: "Printed Gotta Work Skirt",
        brand:"Flair",
        category:"Girl Dress",
        price:899.00
     },

    {
        img: "https://static.cilory.com/329353-large_default/estonished-blue-pencil-box.jpg.webp",
        name: "Estonished Blue Pencil Box",
        brand:"Estonished",
        category:"Stationary",
        price:280.00
    },

    {
        img: "https://static.cilory.com/329302-large_default/estonished-light-pink-pencil-box.jpg.webp",
        name: "Estonished Pink Pencil Box",
        brand:"Estonished",
        category:"Stationary",
        price:231.00
     },

    {
        img: "https://static.cilory.com/491746-large_default/parker-vector-gold-roller-ball-pen-refillable.jpg.webp",
        name: "Parker Vector Gold Pen ",
        brand:"Parker",
        category:"Stationary",
        price:780.00
     },

    {
        img: "https://static.cilory.com/491740-large_default/parker-frontier-stainless-steel-roller-ball-pen-refillable.jpg.webp",
        name: "Parker Frontier Steel Ballpen",
        brand:"Parker",
        category:"Stationary",
        price:600.00
      },

    {
        img: "https://static.cilory.com/594726-large_default/estonished-dark-pink-disney-princess-kids-backpack.jpg.webp",
        name: "Estonished Dark Disney Bag",
        brand:"Estonished",
        category:"Stationary",
        price:749.00
      },

    {
        img: "https://static.cilory.com/594654-large_default/estonished-red-puppy-face-kids-backpack.jpg.webp",
        name: "Estonished Red Puppy Backpack",
        brand:"Estonished",
        category:"Stationary",
        price:525.00
    },

    {
        img: "https://static.cilory.com/564787-large_default/sawans-jataka-kathae-hindi.jpg.webp",
        name: "Sawan's jatak Kathae",
        brand:"GRUNT",
        category:"Stationary",
        price:180.00
    },

    {
        img: "https://static.cilory.com/564828-large_default/timeless-fables-cinderella-storybook-hindi.jpg.webp",
        name: "Timeless Fables Story Book",
        brand:"GRUNT",
        category:"Stationary",
        price:60.00
    },

    {
        img: "https://static.cilory.com/470263-large_default/birds-with-sun-tray-wooden-block.jpg.webp",
        name: "Birds With Sun Tray Wooden Block",
        brand:"GRUNT",
        category:"Stationary",
        price:238.00
    },

    {
        img: "https://static.cilory.com/470204-large_default/flower-tray-wooden-puzzle-blocks.jpg.webp",
        name: "Flower Tray Wooden Puzzle Blocks",
        brand:"GRUNT",
        category:"Stationary",
        price:238.00
    },

    {
        img: "https://static.cilory.com/622861-large_default/orange-round-kids-sunglasses.jpg.webp",
        name: "Orange Round Kids Sunglasses",
        brand:"Lotus",
        category:"Accessories",
        price:149.00
    },

    {
        img: "https://static.cilory.com/622806-large_default/blue-oval-kids-sunglasses.jpg.webp",
        name: "Blue Oval Sunglass",
        brand:"Lotus",
        category:"Accessories",
        price:149.00
    },
];
let bhagya=document.getElementById("bhagya");

bhagya.addEventListener("change", ()=>{
    let bhagyaValue=document.getElementById("bhagya").value;
    let bhagyaFilter=kidsArr.filter((elem)=>elem.brand == bhagyaValue)
    display(bhagyaFilter)
});
let estonished=document.getElementById("estonished");

estonished.addEventListener("change", ()=>{
    let estonishedValue=document.getElementById("estonished").value;
    let estonishedFilter=kidsArr.filter((elem)=>elem.brand == estonishedValue)
    display(estonishedFilter)
});

let flair=document.getElementById("flair");

flair.addEventListener("change", ()=>{
    let flairValue=document.getElementById("flair").value;
    let flairFilter=kidsArr.filter((elem)=>elem.brand == flairValue)
    display(flairFilter)
});

let grunt=document.getElementById("grunt");

grunt.addEventListener("change", ()=>{
    let gruntValue=document.getElementById("grunt").value;
    let gruntFilter=kidsArr.filter((elem)=>elem.brand == gruntValue)
    display(gruntFilter)
});

let lotus=document.getElementById("lotus");

lotus.addEventListener("change", ()=>{
    let lotusValue=document.getElementById("lotus").value;
    let lotusFilter=kidsArr.filter((elem)=>elem.brand == lotusValue)
    display(lotusFilter)
});

let parker=document.getElementById("parker");
parker.addEventListener("change", ()=>{
    let parkerValue=document.getElementById("parker").value;
    let parkerFilter=kidsArr.filter((elem)=>elem.brand == parkerValue)
    display(parkerFilter)
});
// category filter
let boys=document.getElementById("tshirt");
boys.addEventListener("change", ()=>{
    let boysValue=document.getElementById("tshirt").value;
    let boysFilter=kidsArr.filter((elem)=>elem.category == boysValue)
    display(boysFilter)
});

let girl=document.getElementById("girl_dress");
girl.addEventListener("change", ()=>{
    let girlValue=document.getElementById("girl_dress").value;
    let girlFilter=kidsArr.filter((elem)=>elem.category== girlValue)
    display(girlFilter)
});

let stationary=document.getElementById("stationary");
stationary.addEventListener("change", ()=>{
    let stationaryValue=document.getElementById("stationary").value;
    let stationaryFilter=kidsArr.filter((elem)=>elem.category == stationaryValue)
    display(stationaryFilter)
});

let acc=document.getElementById("acc1");
acc.addEventListener("change", ()=>{
    let accValue=document.getElementById("acc1").value;
    let accFilter=kidsArr.filter((elem)=>elem.category == accValue)
    display(accFilter)
});

// category filter

// sorting
let kidsSort=document.getElementById("sort");
kidsSort.addEventListener("change", ()=>{
    let kidsSortValue=document.getElementById("sort").value;
    
    let kidsSortNew;
    if(kidsSortValue=="lth"){
     kidsSortNew=kidsArr.sort((a,b)=>{return a.price-b.price})
    }
    if(kidsSortValue=="htl") {
        kidsSortNew=kidsArr.sort((a,b)=>{return b.price-a.price}) 
    }
    display(kidsSortNew);
    
})

// sorting
function display(kidsArr) {
    let prod=document.getElementById("products");
    prod.innerHTML="";
    kidsArr.map((elem) => {

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
display(kidsArr)