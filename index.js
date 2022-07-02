

const listOfProducts = [{
  productName: "TV",
  quantity: 10,
  description: "television"
},
{
  productName: "AC",
  quantity: 5,
  description: "air conditioner"
},
{
  productName: "TV",
  quantity: 10,
  description: "television"
},
{
  productName: "AC",
  quantity: 5,
  description: "air conditioner"
},
{
  productName: "FAN",
  quantity: 10,
  description: "Ceiling Fan"
}
];


// {
//     "TV": 2,
//     "AC": 2,
//     "FAN": 1
//   }



const getUniqueProductCount = (listOfProducts) => {
  let obj = {}

  for (let i = 0; i < listOfProducts.length; i++) {
    let item = listOfProducts[i].productName;

    if (obj[item] === undefined) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
  }

  return obj
}

//console.log(getUniqueProductCount(listOfProducts));


const getUniquePrducts = (listOfProducts) => {

  let ans = [];

  for (let i = 0; i < listOfProducts.length; i++) {
    let itemProduct = listOfProducts[i].productName;
    let itemQuant = listOfProducts[i].quantity;
    let itemDesc = listOfProducts[i].description;


    let index = -1;
    for (let j = 0; j < ans.length; j++) {
      if (ans[j].productName === itemProduct) {
        index = j;
      }
    }

    if (index >= 0) {
      ans[index].quantity = ans[index].quantity + itemQuant;

    } else {
      let obj = {
        productName: itemProduct,
        quantity: itemQuant,
        description: itemDesc
      };

      ans.push(obj)

    }
  }

  // return ans;
  console.log("ans", ans)
}

// console.log(getUniquePrducts(listOfProducts));
getUniquePrducts(listOfProducts)