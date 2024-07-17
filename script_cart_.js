let isAuth=localStorage.getItem("isAuth") || "not Authoricated ";
if(isAuth !=="Authoricated"){
    window.location.href="./login.html"
}


let productdiv=document.getElementById("product")
let mainData=JSON.parse(localStorage.getItem("cartDetails"))
dispalyproduct(mainData)
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







// fetch("./db.json")
// .then((res)=>res.json())
// .then((data)=>{
// mainData=data;
// dispalyproduct(mainData)

// })
// .catch((err)=>console.log(err))