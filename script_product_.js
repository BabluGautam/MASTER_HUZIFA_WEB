let isAuth=localStorage.getItem("isAuth") || "not Authoricated ";
if(isAuth !=="Authoricated"){
    window.location.href="./login.html"
}
let productdiv=document.getElementById("product")
let mainData=[];
function addtocartfunc(obj){
    // console.log(obj)
   let cartDetails= JSON.parse(localStorage.getItem(" cartDetails")) || [];
   cartDetails.push(obj);
   localStorage.setItem("cartDetails",JSON.stringify(cartDetails))
}
function dispalyproduct(data){
    data.forEach((obj) => {
        let div=document.createElement("div");
        let h3=document.createElement("h3")
        h3.innerText=obj.title;
        let img=document.createElement("img");
        img.src=obj.image;
        img.style.height="100px"
        let price=document.createElement("p")
        price.innerText=`₹${obj.price}`;
        let rating=document.createElement("p")
        rating.innerText=`${obj.rating.rate}★`;
        let addtocart=document.createElement("button")
        addtocart.innerText="Add to Cart";
        addtocart.onclick=function(){
            addtocartfunc(obj)
        }
        div.append(h3,img,price,rating,addtocart)
        productdiv.append(div)
    });

}
function sortRateHightoLow(){
    // fetch("./db.json")
    // .then((res)=>res.json())
    // .then((data)=>{
        // sort this data w.r.t to rating//
        mainData.sort(function(a,b){
return b.rating.rate - a.rating.rate;
        })
        // previous data will erase//
        productdiv.innerHTML=null;
        dispalyproduct(mainData);

    }
//     .catch((err)=>console.log(err))

function sortRateLowtoHigh() {
    // fetch("./db.json")
    // .then((res)=>res.json())
    // .then((data)=>{
        // sort this data w.r.t to rating//
        mainData.sort(function(a,b){
return a.rating.rate - b.rating.rate;
        })
        // previous data will erase//
        productdiv.innerHTML=null;
        dispalyproduct(mainData);

    }
    // .catch((err)=>console.log(err))


function sortRateLowtoHigh(){
    // fetch("./db.json")
    // .then((res)=>res.json())
    // .then((data)=>{
        // sort this data w.r.t to rating//
        mainData.sort(function(a,b){
return a.price - b.price;
        })
        // previous data will erase//
        productdiv.innerHTML=null;
        dispalyproduct(mainData);

    }
    // .catch((err)=>console.log(err))


function sortRateHightoLow(){
    // fetch("./db.json")
    // .then((res)=>res.json())
    // .then((data)=>{
        // sort this data w.r.t to rating//
        mainData.sort(function(a,b){
return b.price - a.price;
        })
        // previous data will erase//
        productdiv.innerHTML=null;
        dispalyproduct(mainData);

    }
    // .catch((err)=>console.log(err))



fetch("./db.json")
.then((res)=>res.json())
.then((data)=>{
mainData=data;
dispalyproduct(mainData)

})
.catch((err)=>console.log(err))