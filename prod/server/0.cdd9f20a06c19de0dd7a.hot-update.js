exports.id=0,exports.modules={"./src/server/server.js":function(e,o,r){"use strict";r.r(o);var s=r("./build/contracts/EmitOracle.json"),l=r("./src/server/config.json"),n=r("web3"),t=r.n(n),c=r("express"),a=r.n(c);let i=l.localhost;new(new t.a(new t.a.providers.WebsocketProvider(i.url.replace("http","ws"))).eth.Contract)(s.abi,i.appAddress).events.evHelloOracle({fromBlock:0},(function(e,o){console.log("evHelloOracle"),e&&console.log("error"),o&&console.log(o)}));const d=a()();d.get("/api",(e,o)=>{o.send({message:"An API if you want."})}),o.default=d}};