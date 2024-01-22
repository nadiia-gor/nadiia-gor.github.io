const cart = [];

function _el(id) {
  return document.getElementById(id);
}

function addToCart() {
  const title = _el('prod_title').value;
  const qty = _el('prod_qty').valueAsNumber;
  const price = _el('prod_price').valueAsNumber;

  if (title === '') {
    toast.error('Enter the title of product');
    return;
  }

  if (isNaN(qty)) {
    toast.error('Enter quantity');
    return;
  }

  if (qty <= 0) {
    toast.error('Incorrect quantity');
    return;
  }

  if (isNaN(price)) {
    toast.error('Enter the price of product');
    return;
  }

  const prodIndex = cart.findIndex((prod) => prod.title === title);
  if (prodIndex === -1) {
    cart.push({
      title,
      qty,
      price,
    });
  } else {
    cart[prodIndex].qty += qty;
  }

  _el('prod_title').value = '';
  _el('prod_qty').valueAsNumber = 1;
  _el('prod_price').value = '';
  toast.success('Product successfully added!');
  productList();
}

function productList() {
  let tbody = '';
  cart.forEach((prod, index) => {
    tbody += `<tr>
      <td>${index + 1}</td>
      <td>${prod.title}</td>
      <td>
      <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button" onclick="changeQty(${index}, 'dec')">-</button>
        <input type="text" class="form-control" value="${prod.qty}">
        <button class="btn btn-outline-secondary" type="button" onclick="changeQty(${index}, 'inc')">+</button>
      </div>
      </td>
      <td>${prod.price.toFixed(2)}</td>
      <td>${(prod.qty * prod.price).toFixed(2)}</td>
      <td>
      <button type='button' class="btn btn-danger btn-sm" onclick='deleteProd(${index}, "${
      prod.title
    }")'>Remove</button>
      </td>
    </tr>`;
  });
  _el('cart_tbody').innerHTML = tbody;
  _el('cart_total').innerHTML = sumProduct();
}

function deleteProd(index, title) {
  if (confirm(`Do you want to delete ${title}?`)) {
    cart.splice(index, 1);
    productList();
    toast.success('Product was deleted');
  }
}

function sumProduct() {
  return cart
    .reduce((accum, prod) => accum + prod.qty * prod.price, 0)
    .toFixed(2);
}

function changeQty(index, action) {
  let qtyFirst = cart[index].qty;
  if (action === 'inc') {
    cart[index].qty++;
  } else if (action === 'dec') {
    if (qtyFirst === 1) {
      deleteProd(index, cart[index].title);
    } else {
      cart[index].qty--;
    }
  }
  productList();
}
