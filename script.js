

 

let value = true;

function btcDropDown() {
  let btcDropinfo = document.querySelector('.btc-dropdown');
  
  if (value === true) {
    btcDropinfo.style.display = "flex";
    value = false;
  } else {
    btcDropinfo.style.display = "none";
    value = true;
  }
}

function ethDropDown() {
  let ethDropinfo = document.querySelector('.eth-dropdown');

  if (value === true) {
    ethDropinfo.style.display = "flex";
    value = false;
  } else {
    ethDropinfo.style.display = "none";
    value = true;
  }
}

function bnbDropDown() {
  let bnbDropinfo = document.querySelector('.bnb-dropdown');

  if (value === true) {
    bnbDropinfo.style.display = "flex";
    value = false;
  } else {
    bnbDropinfo.style.display = "none";
    value = true;
  }
}

function xrpDropDown() {
  let xrpDropinfo = document.querySelector('.xrp-dropdown');

  if (value === true) {
    xrpDropinfo.style.display = "flex";
    value = false;
  } else {
    xrpDropinfo.style.display = "none";
    value = true;
  }
}

function adaDropDown() {
  let adaDropinfo = document.querySelector('.ada-dropdown');

  if (value === true) {
    adaDropinfo.style.display = "flex";
    value = false;
  } else {
    adaDropinfo.style.display = "none";
    value = true;
  }
}

function solDropDown() {
  let solDropinfo = document.querySelector('.sol-dropdown');

  if (value === true) {
    solDropinfo.style.display = "flex";
    value = false;
  } else {
    solDropinfo.style.display = "none";
    value = true;
  }
}

function dogeDropDown() {
  let dogeDropinfo = document.querySelector('.doge-dropdown');

  if (value === true) {
    dogeDropinfo.style.display = "flex";
    value = false;
  } else {
    dogeDropinfo.style.display = "none";
    value = true;
  }
}

function dotDropDown() {
  let dotDropinfo = document.querySelector('.dot-dropdown');

  if (value === true) {
    dotDropinfo.style.display = "flex";
    value = false;
  } else {
    dotDropinfo.style.display = "none";
    value = true;
  }
}

function shibDropDown() {
  let shibDropinfo = document.querySelector('.shib-dropdown');

  if (value === true) {
    shibDropinfo.style.display = "flex";
    value = false;
  } else {
    shibDropinfo.style.display = "none";
    value = true;
  }
}

function tronDropDown() {
  let tronDropinfo = document.querySelector('.tron-dropdown');

  if (value === true) {
    tronDropinfo.style.display = "flex";
    value = false;
  } else {
    tronDropinfo.style.display = "none";
    value = true;
  }
}

let btcBtn = document.querySelector('.btc-btn');
btcBtn.addEventListener("click", btcDropDown);

let ethBtn = document.querySelector('.eth-btn');
ethBtn.addEventListener("click", ethDropDown);

let bnbBtn = document.querySelector('.bnb-btn');
bnbBtn.addEventListener("click", bnbDropDown);

let xrpBtn = document.querySelector('.xrp-btn');
xrpBtn.addEventListener("click", xrpDropDown);

let adaBtn = document.querySelector('.ada-btn');
adaBtn.addEventListener("click", adaDropDown);

let solBtn = document.querySelector('.sol-btn');
solBtn.addEventListener("click", solDropDown);

let dogeBtn = document.querySelector('.doge-btn');
dogeBtn.addEventListener("click", dogeDropDown);

let dotBtn = document.querySelector('.dot-btn');
dotBtn.addEventListener("click", dotDropDown);

let shibBtn = document.querySelector('.shib-btn');
shibBtn.addEventListener("click", shibDropDown);

let tronBtn = document.querySelector('.tron-btn');
tronBtn.addEventListener("click", tronDropDown);