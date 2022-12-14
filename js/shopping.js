const cartArray = [];

function display(cartProducts) {
  // console.log(cartProducts);
  let totalPrice = 0;
  const tableBody = document.getElementById('products-cart');
  tableBody.innerHTML = '';

  for (let i = 0; i < cartProducts.length; i++) {
    // console.log(cartProducts[i]);

    const name = cartProducts[i].productName;
    const price = cartProducts[i].productPrice;

    totalPrice = totalPrice + price;

    const tr = document.createElement('tr');

    tr.innerHTML = `
    <th>${i + 1}</th>
    <td>${name}</td>
    <td>$ ${price}</td>
    `;

    tableBody.appendChild(tr);
  };

  const tr = document.createElement('tr');

  tr.innerHTML = `
  
  <th colspan="2" class='text-center'>Total Price</th>
  <th>$ ${totalPrice}</th>
  `
  tableBody.appendChild(tr)
}

function addToCart(element) {
  // console.log('product clicked');
  // console.log(x.parentNode.parentNode.childNodes[3].childNodes[1].innerText);
  // console.log(x.parentNode.parentNode.children[1].children[0].innerText);

  const productName = element.parentNode.parentNode.children[0].innerText;
  // console.log(productName);

  const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
  // console.log(productPrice);

  const productObj = {
    productName,
    productPrice: parseFloat(productPrice),
  }
  // console.log(productObj);
  cartArray.push(productObj);
  // console.log(cartArray);

  document.getElementById('total-products').innerText = cartArray.length;

  display(cartArray);
}