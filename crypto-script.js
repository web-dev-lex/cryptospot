

 
// A true/false statement to be used in conjuction with functions
let value = true;

// Functions for dropdown info and changes color of button when clicked

// Bitcoin
function btcDropDown() {
  let btcDropinfo = document.querySelector('.btc-dropdown');
  let btcBtn = document.querySelector('.btc-btn');
  
  if (value === true) {
    btcDropinfo.style.display = "flex";
    btcBtn.style.cssText = "background-color: #f9f9f9; color: #000;";
    value = false;
  } else {
    btcDropinfo.style.display = "none";
    btcBtn.style.cssText = "background-color: #3b4260; color: #fff;"
    value = true;
  }
}

// Ethereum
function ethDropDown() {
  let ethDropinfo = document.querySelector('.eth-dropdown');
  let ethBtn = document.querySelector('.eth-btn');

  if (value === true) {
    ethDropinfo.style.display = "flex";
    ethBtn.style.cssText = "background-color: #f9f9f9; color: #000;";
    value = false;
  } else {
    ethDropinfo.style.display = "none";
    ethBtn.style.cssText = "background-color: #3b4260; color: #fff;"
    value = true;
  }
}

// Binance
function bnbDropDown() {
  let bnbDropinfo = document.querySelector('.bnb-dropdown');
  let bnbBtn = document.querySelector('.bnb-btn');

  if (value === true) {
    bnbDropinfo.style.display = "flex";
    bnbBtn.style.cssText = "background-color: #f9f9f9; color: #000;";
    value = false;
  } else {
    bnbDropinfo.style.display = "none";
    bnbBtn.style.cssText = "background-color: #3b4260; color: #fff;"
    value = true;
  }
}

// Ripple
function xrpDropDown() {
  let xrpDropinfo = document.querySelector('.xrp-dropdown');
  let xrpBtn = document.querySelector('.xrp-btn');

  if (value === true) {
    xrpDropinfo.style.display = "flex";
    xrpBtn.style.cssText = "background-color: #f9f9f9; color: #000;";
    value = false;
  } else {
    xrpDropinfo.style.display = "none";
    xrpBtn.style.cssText = "background-color: #3b4260; color: #fff;"
    value = true;
  }
}

// Cardano
function adaDropDown() {
  let adaDropinfo = document.querySelector('.ada-dropdown');
  let adaBtn = document.querySelector('.ada-btn');

  if (value === true) {
    adaDropinfo.style.display = "flex";
    adaBtn.style.cssText = "background-color: #f9f9f9; color: #000;";
    value = false;
  } else {
    adaDropinfo.style.display = "none";
    adaBtn.style.cssText = "background-color: #3b4260; color: #fff;"
    value = true;
  }
}

// Solana
function solDropDown() {
  let solDropinfo = document.querySelector('.sol-dropdown');
  let solBtn = document.querySelector('.sol-btn');

  if (value === true) {
    solDropinfo.style.display = "flex";
    solBtn.style.cssText = "background-color: #f9f9f9; color: #000;";
    value = false;
  } else {
    solDropinfo.style.display = "none";
    solBtn.style.cssText = "background-color: #3b4260; color: #fff;"
    value = true;
  }
}

// Dogecoin
function dogeDropDown() {
  let dogeDropinfo = document.querySelector('.doge-dropdown');
  let dogeBtn = document.querySelector('.doge-btn');

  if (value === true) {
    dogeDropinfo.style.display = "flex";
    dogeBtn.style.cssText = "background-color: #f9f9f9; color: #000;";
    value = false;
  } else {
    dogeDropinfo.style.display = "none";
    dogeBtn.style.cssText = "background-color: #3b4260; color: #fff;"
    value = true;
  }
}

// Polkadot
function dotDropDown() {
  let dotDropinfo = document.querySelector('.dot-dropdown');
  let dotBtn = document.querySelector('.dot-btn');

  if (value === true) {
    dotDropinfo.style.display = "flex";
    dotBtn.style.cssText = "background-color: #f9f9f9; color: #000;";
    value = false;
  } else {
    dotDropinfo.style.display = "none";
    dotBtn.style.cssText = "background-color: #3b4260; color: #fff;"
    value = true;
  }
}

// Shiba Inu
function shibDropDown() {
  let shibDropinfo = document.querySelector('.shib-dropdown');
  let shibBtn = document.querySelector('.shib-btn');

  if (value === true) {
    shibDropinfo.style.display = "flex";
    shibBtn.style.cssText = "background-color: #f9f9f9; color: #000;";
    value = false;
  } else {
    shibDropinfo.style.display = "none";
    shibBtn.style.cssText = "background-color: #3b4260; color: #fff;"
    value = true;
  }
}

// Tron
function tronDropDown() {
  let tronDropinfo = document.querySelector('.tron-dropdown');
  let tronBtn = document.querySelector('.tron-btn');

  if (value === true) {
    tronDropinfo.style.display = "flex";
    tronBtn.style.cssText = "background-color: #f9f9f9; color: #000;";
    value = false;
  } else {
    tronDropinfo.style.display = "none";
    tronBtn.style.cssText = "background-color: #3b4260; color: #fff;";
    value = true;
  }
}

// Event listeners for each drop down info button

// Bitcoin
let btcBtn = document.querySelector('.btc-btn');
btcBtn.addEventListener("click", btcDropDown);

// Ethereum
let ethBtn = document.querySelector('.eth-btn');
ethBtn.addEventListener("click", ethDropDown);

// Binance
let bnbBtn = document.querySelector('.bnb-btn');
bnbBtn.addEventListener("click", bnbDropDown);

// Ripple
let xrpBtn = document.querySelector('.xrp-btn');
xrpBtn.addEventListener("click", xrpDropDown);

// Cardano
let adaBtn = document.querySelector('.ada-btn');
adaBtn.addEventListener("click", adaDropDown);

// Solana
let solBtn = document.querySelector('.sol-btn');
solBtn.addEventListener("click", solDropDown);

// Dogecoin
let dogeBtn = document.querySelector('.doge-btn');
dogeBtn.addEventListener("click", dogeDropDown);

// Polkadot
let dotBtn = document.querySelector('.dot-btn');
dotBtn.addEventListener("click", dotDropDown);

// Shiba Inu
let shibBtn = document.querySelector('.shib-btn');
shibBtn.addEventListener("click", shibDropDown);

// Tron
let tronBtn = document.querySelector('.tron-btn');
tronBtn.addEventListener("click", tronDropDown);

// Websockets for live price data

// Bitcoin
let ws1 = new WebSocket('wss://stream.binance.us:9443/ws/btcusd@trade');
let btcPriceElement = document.getElementById('btc-price');

ws1.onmessage = (event) => {
  let btcObject = JSON.parse(event.data);
  btcPriceElement.innerText = `$${parseFloat(btcObject.p).toFixed(2)}`;
}

// Ethereum
let ws2 = new WebSocket('wss://stream.binance.us:9443/ws/ethusd@trade');
let ethPriceElement = document.getElementById('eth-price');

ws2.onmessage = (event) => {
  let ethObject = JSON.parse(event.data);
  ethPriceElement.innerText = `$${parseFloat(ethObject.p).toFixed(2)}`;
}

// Binance Coin
let ws3 = new WebSocket('wss://stream.binance.us:9443/ws/bnbusd@trade');
let bnbPriceElement = document.getElementById('bnb-price');

ws3.onmessage = (event) => {
  let bnbObject = JSON.parse(event.data);
  bnbPriceElement.innerText = `$${parseFloat(bnbObject.p).toFixed(2)}`;
}

// Ripple
let ws4 = new WebSocket('wss://stream.binance.us:9443/ws/xrpusd@trade');
let xrpPriceElement = document.getElementById('xrp-price');

ws4.onmessage = (event) => {
  let xrpObject = JSON.parse(event.data);
  xrpPriceElement.innerText = `$${parseFloat(xrpObject.p).toFixed(3)}`;
}

//Cardano
let ws5 = new WebSocket('wss://stream.binance.us:9443/ws/adausd@trade');
let adaPriceElement = document.getElementById('ada-price');

ws5.onmessage = (event) => {
  let adaObject = JSON.parse(event.data);
  adaPriceElement.innerText = `$${parseFloat(adaObject.p).toFixed(4)}`;
}

// Solana
let ws6 = new WebSocket('wss://stream.binance.us:9443/ws/solusd@trade');
let solPriceElement = document.getElementById('sol-price');

ws6.onmessage = (event) => {
  let solObject = JSON.parse(event.data);
  solPriceElement.innerText = `$${parseFloat(solObject.p).toFixed(2)}`;
}

// Dogecoin
let ws7 = new WebSocket('wss://stream.binance.us:9443/ws/dogeusd@trade');
let dogePriceElement = document.getElementById('doge-price');

ws7.onmessage = (event) => {
  let dogeObject = JSON.parse(event.data);
  dogePriceElement.innerText = `$${parseFloat(dogeObject.p).toFixed(3)}`;
}

// Polkapot
let ws8 = new WebSocket('wss://stream.binance.us:9443/ws/dotusd@trade');
let dotPriceElement = document.getElementById('dot-price');

ws8.onmessage = (event) => {
  let dotObject = JSON.parse(event.data);
  dotPriceElement.innerText = `$${parseFloat(dotObject.p).toFixed(2)}`;
}

// Shiba Inu
let ws9 = new WebSocket('wss://stream.binance.us:9443/ws/shibusd@trade');
let shibPriceElement = document.getElementById('shib-price');

ws9.onmessage = (event) => {
  let shibObject = JSON.parse(event.data);
  shibPriceElement.innerText = `$${parseFloat(shibObject.p).toFixed(6)}`;
}

// Tron
let ws10 = new WebSocket('wss://stream.binance.us:9443/ws/trxusd@trade');
let trxPriceElement = document.getElementById('trx-price');

ws10.onmessage = (event) => {
  let trxObject = JSON.parse(event.data);
  trxPriceElement.innerText = `$${parseFloat(trxObject.p).toFixed(3)}`;
}

