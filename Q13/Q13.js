"use strict";
let favouriteTransportation = [];
favouriteTransportation.push(["motorcycle", "honda"]);
favouriteTransportation.push(["car", "toyota"]);
favouriteTransportation.push(["cycle", "bmx"]);
favouriteTransportation.forEach(([transport, brand]) => { console.log(`I would like to buy a ${brand} ${transport}.`); });
