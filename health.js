var healthArr = [
    {
        img: "https://static.cilory.com/411630-large_default/old-spice-after-shave-lotion-musk.jpg.webp",
        name: "After Shave Lotion",
        brand:"Bajaj",
        category:"Skin Care",
        price:199.00
    },

    {
        img: "https://static.cilory.com/563307-large_default/gillette-mach3-start-mens-razor-blades-cartridge-4-pcs.jpg.webp",
        name: "Gillette Match3-Start Men Razor Blade",
        brand:"Gillette",
        category:"Skin Care",
        price:499.00
 },

    {
        img: "https://static.cilory.com/449487-large_default/estonished-2-layer-smile-inside-resuable-mask.jpg.webp",
        name: "Estonished Regular Fir Reusable Mask",
        brand:"Estonished",
        category:"Masks",
        price:199.00
},

    {
        img: "https://static.cilory.com/586998-large_default/solid-brown-corduroy-mens-masks-by-estonished.jpg.webp",
        name: "Solid Brown Mask",
        brand:"Estonished",
        category:"Masks",
        price:99.00
 },

    {
        img: "https://static.cilory.com/447617-large_default/lifebuoy-total-10-antibacterial-alcohol-based-hand-sanitizer-500ml.jpg.webp",
        name: "Lifebuoy Total Alchohal Sanitizer",
        brand:"Lifebuoy",
        category:"Sanitizer",
        price:250.00
 },

    {
        img: "https://static.cilory.com/547797-large_default/hand-in-hand-surface-disinfectant-spray-75ml.jpg.webp",
        name: "Hand in Hand Spray",
        brand:"Lifebuoy",
        category:"Sanitizer",
        price:149.00
 },

    {
        img: "https://static.cilory.com/543403-large_default/lakme-absolute-matte-melt-mini-liquid-coral-camp.jpg.webp",
        name: "Lakme Matte Lipstick",
        brand:"Lakme",
        category:"Lips",
        price:400.00
 },

    {
        img: "https://static.cilory.com/597434-large_default/facescanada-no-transfer-matte-lipstick-tea-spiller-06.jpg.webp",
        name: "Lakme Matte Lipstick",
        brand:"Lakme",
        category:"Lips",
        price:549.00
 },

 {
    img: "https://static.cilory.com/445264-large_default/charak-pharma-m2tone-tablets-30s.jpg.webp",
    name: "Charak Pharma M2Tone Tablets",
    brand:"Bajaj",
    category:"Skin Care",
    price:153.00
},

{
    img: "https://static.cilory.com/587624-large_default/dewska-moisturizing-cream-100gm.jpg.webp",
    name: "Moisturizing Cream",
    brand:"Ponds",
    category:"Skin Care",
    price:299.00
},

{
    img: "https://static.cilory.com/587619-large_default/caloedryl-lotion-100-ml.jpg.webp",
    name: "Caloedryl Lotion",
    brand:"Ponds",
    category:"Skin Care",
    price:199.00
},

{
    img: "https://static.cilory.com/578750-large_default/pond-s-triple-vitamin-moisturising-body-lotion-40ml.jpg.webp",
    name: "POND'S Triple Vitamin Powder",
    brand:"Ponds",
    category:"Skin Care",
    price:250.00
},

{
    img: "https://static.cilory.com/594563-large_default/skin-tatva-glow-win-cream-for-all-skin-types-100g.jpg.webp",
    name: "Skin Tatva Glow Win Cream For All Skin Type",
    brand:"Gillette",
    category:"Skin Care",
    price:175.00
},

{
    img: "https://static.cilory.com/594571-large_default/skin-tatva-fruit-cream-for-all-skin-types-skin-100g.jpg.webp",
    name: "Skin Tatva Fruit Cream For All Skin Type",
    brand:"Lakme",
    category:"Skin Care",
    price:250.00
},

{
    img: "https://static.cilory.com/531418-large_default/bajaj-amla-aloe-vera-hair-oil-80-ml.jpg.webp",
    name: "Bajaj Amla Aloe Vera Hair Oil",
    brand:"Bajaj",
    category:"Hair Oil",
    price:20.00
},

{
    img: "https://static.cilory.com/510450-large_default/dabur-sarson-amla-175ml.jpg.webp",
    name: "Bajaj sarson Amla",
    brand:"Bajaj",
    category:"Hair Oil",
    price:55.00
},
];
let bajaj=document.getElementById("bajaj");
bajaj.addEventListener("change",()=>{
    let bajajValue=document.getElementById("bajaj").value;
    let bajajFilter=healthArr.filter((elem)=>elem.brand == bajajValue);
    display(bajajFilter);
});

let estonished=document.getElementById("estonished");
estonished.addEventListener("change",()=>{
    let estonishedValue=document.getElementById("estonished").value;
    let estonishedFilter=healthArr.filter((elem)=>elem.brand == estonishedValue);
    display(estonishedFilter);
});

let lifebuoy=document.getElementById("lifebuoy");
lifebuoy.addEventListener("change",()=>{
    let lifebuoyValue=document.getElementById("lifebuoy").value;
    let lifebuoyFilter=healthArr.filter((elem)=>elem.brand == lifebuoyValue);
    display(lifebuoyFilter);
});

let ponds=document.getElementById("ponds");
ponds.addEventListener("change",()=>{
    let pondsValue=document.getElementById("ponds").value;
    let pondsFilter=healthArr.filter((elem)=>elem.brand == pondsValue);
    display(pondsFilter);
});

let lakme=document.getElementById("lakme");
lakme.addEventListener("change",()=>{
    let lakmeValue=document.getElementById("lakme").value;
    let lakmeFilter=healthArr.filter((elem)=>elem.brand == lakmeValue);
    display(lakmeFilter);
});

let gillette=document.getElementById("gillette");
gillette.addEventListener("change",()=>{
    let gilletteValue=document.getElementById("gillette").value;
    let gilletteFilter=healthArr.filter((elem)=>elem.brand == gilletteValue);
    display(gilletteFilter);
});

// ***Category Filter**//
let masks=document.getElementById("masks");
masks.addEventListener("change",()=>{
    let masksValue=document.getElementById("masks").value;
    let masksFilter=healthArr.filter((elem)=>elem.category== masksValue);
    display(masksFilter);
});

let skin=document.getElementById("skin");
skin.addEventListener("change",()=>{
    let skinValue=document.getElementById("skin").value;
    let skinFilter=healthArr.filter((elem)=>elem.category == skinValue);
    display(skinFilter);
});

let lips=document.getElementById("lips");
lips.addEventListener("change",()=>{
    let lipsValue=document.getElementById("lips").value;
    let lipsFilter=healthArr.filter((elem)=>elem.category == lipsValue);
    display(lipsFilter);
});

let sanitizer=document.getElementById("sanitizer");
sanitizer.addEventListener("change",()=>{
    let sanitizerValue=document.getElementById("sanitizer").value;
    let sanitizerFilter=healthArr.filter((elem)=>elem.category == sanitizerValue);
    display(sanitizerFilter);
});

let hairOil=document.getElementById("hair");
hairOil.addEventListener("change",()=>{
    let hairOilValue=document.getElementById("hair").value;
    let hairOilFilter=healthArr.filter((elem)=>elem.category == hairOilValue);
    display(hairOilFilter);
});
// ***Category Filter**//
// sorting
let healthSort=document.getElementById("sort");
healthSort.addEventListener("change", ()=>{
    let healthSortValue=document.getElementById("sort").value;
    
    let healthSortNew;
    if(healthSortValue=="lth"){
     healthSortNew=healthArr.sort((a,b)=>{return a.price-b.price})
    }
    if(healthSortValue=="htl") {
        healthSortNew=healthArr.sort((a,b)=>{return b.price-a.price}) 
    }
    display(healthSortNew);
    
})

// sorting

function display(healthArr) {
    let prod=document.getElementById("products");
    prod.innerHTML="";
    healthArr.map((elem) => {

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
display(healthArr)