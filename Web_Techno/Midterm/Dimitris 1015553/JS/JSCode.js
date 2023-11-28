function add_to_basket(ee) {
  const new_product = document.createElement("p");
  new_product.innerHTML = ee.innerHTML;
  new_product.classList = ee.innerHTML;
  new_product.addEventListener("click", remove_prod);

  const shoppingBusket = document.getElementById("shoppingBusket");
  shoppingBusket.appendChild(new_product);
}

function remove_prod() {
  this.remove();
}

function count_basket() {
  const info = document.createElement("p");
  let bold = document.createElement("strong");

  bold.innerHTML = "You bought the following items: ";
  info.appendChild(bold);

  const po = document.getElementById("result");
  po.appendChild(info);

  const bread = document.querySelectorAll(".Bread");
  const milk = document.querySelectorAll(".Milk");
  const pasta = document.querySelectorAll(".Pasta");
  const rise = document.querySelectorAll(".Rise");
  const noodles = document.querySelectorAll(".Noodles");
  let oo;
  if (bread.length !== 0) {
    const info = document.createElement("p");
    let ol = document.createElement("strong");
    ol.innerHTML = bread.length + " Bread";
    info.appendChild(ol);
    oo = document.getElementById("result");
    oo.appendChild(info);
  }

  if (milk.length !== 0) {
    const info = document.createElement("p");
    let ol = document.createElement("strong");
    ol.innerHTML = milk.length + " Milk";
    info.appendChild(ol);
    oo = document.getElementById("result");
    oo.appendChild(info);
  }

  if (pasta.length !== 0) {
    const info = document.createElement("p");
    let ol = document.createElement("strong");
    ol.innerHTML = pasta.length + " Pasta";
    info.appendChild(ol);
    oo = document.getElementById("result");
    oo.appendChild(info);
  }

  if (rise.length !== 0) {
    const info = document.createElement("p");
    let ol = document.createElement("strong");
    ol.innerHTML = rise.length + " Rise";
    info.appendChild(ol);
    oo = document.getElementById("result");
    oo.appendChild(info);
  }

  if (noodles.length !== 0) {
    const info = document.createElement("p");
    let ol = document.createElement("strong");
    ol.innerHTML = noodles.length + " Noodles";
    info.appendChild(ol);
    oo = document.getElementById("result");
    oo.appendChild(info);
  }
}

const btn = document.getElementById("btn");
btn.addEventListener("click", count_basket);
