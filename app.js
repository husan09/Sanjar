const product = [
  {
    id: 0,
    image: "./img/air.jpg__391x391_q85_crop_subsampling-2.jpg",
    title: "Z Flip Foldable Mobile",
    price: 120,
  },
  {
    id: 1,
    image: "./img/pow.jpeg",
    title: "Air Pods Pro",
    price: 200,
  },
  {
    id: 2,
    image: "./img/pow.jpeg",
    title: "Z Flip Foldable Mobile",
    price: 80,
  },
  {
    id: 3,
    image: "./img/naush",
    title: "Air Pods Pro",
    price: 60,
  },
];



const categories = [...new Set(product.map((item) => { return item }))];
let i = 0;
document.getElementById("root").innerHTML += categories.map((item) => {
  var { image, title, price } = item;
  return (
    ` <div class='box'>
          <div class='img-box'>
              <img class="images" src=${image} alt="">
              </div>
          <div class='bottom'>
                <p>${title}</p>
                <h2>${price}.00</h2>` +
               "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
              `</div>
        </div>`
  )
}).join("");


var card = []
function addtocart(a){
  card.push({...categories[a]})
  displaycart(a)
}

function delElement(a){
  card.splice(a,1)
  displaycart()
}

function displaycart(a) {
  let j = 0, total = 0;
  document.getElementById("count").innerHTML = card.length
  if (card.length == 0) {
      document.getElementById("cartItem").innerHTML = "Your card is empty"
      document.getElementById("total").innerHTML = "$" + 0 + ".00"
  }
  else {
      document.getElementById("cartItem").innerHTML = card.map((items) => {
          var { image, title, price } = items;
          total = total + price
          document.getElementById("total").innerHTML = "$" + total + ".00"
          return (
              `
          <div class='cart-item'>
            <div class='row-img'>
              <img class='rowimg'src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
              "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
          );
      }).join("")
  }
}




// const categories = [...new Set(product.map((item)=> {
//   return(item)
// }))]
// let i  = 0
// document.getElementById("root").innerHTML+= categories.map((item) => {
//   var {image,title,price} = item
//   return(
//     ` <div class='box'>
//           <div class='img-box'>
//               <img class="images" src=${image} alt="">
//               </div>
//           <div class='bottom'>
//                 <p>${title}</p>
//                 <h2>${price}.00</h2>` +
//                "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
//               `</div>
//         </div>`
//   )
// }).join()
