exports.id=0,exports.modules={"./src/server/server.js":function(e,r,s){"use strict";s.r(r);var o=s("./build/contracts/EmitOracle.json"),t=s("./src/server/config.json"),n=s("web3"),l=s.n(n),a=s("express"),c=s.n(a);let i=t.localhost;console.log(i.url);let p=new(new l.a(new l.a.providers.WebsocketProvider(i.url.replace("http","ws"))).eth.Contract)(o.abi,i.appAddress);console.log(p.events.evHelloOracle),p.events.allEvents().on("data",e=>{console.log(e)}).on("error",console.error);const d=c()();d.get("/api",(e,r)=>{r.send({message:"An API for use with your Dapp!"})}),r.default=d}};