exports.id=0,exports.modules={"./src/server/server.js":function(e,o,r){"use strict";r.r(o);var s=r("./build/contracts/EmitOracle.json"),l=r("./src/server/config.json"),t=r("web3"),n=r.n(t),c=r("express"),a=r.n(c);let i=l.localhost;console.log(i.url);let p=new(new n.a(new n.a.providers.WebsocketProvider(i.url.replace("http","ws"))).eth.Contract)(s.abi,i.appAddress);console.log(p.events.evHelloOracle),p.events.evHelloOracle({fromBlock:0},(function(e,o){e&&console.log("error"),console.log("hello")}));const u=a()();u.get("/api",(e,o)=>{o.send({message:"An API for use with your Dapp!"})}),o.default=u}};