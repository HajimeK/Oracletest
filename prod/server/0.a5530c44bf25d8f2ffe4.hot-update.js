exports.id=0,exports.modules={"./src/server/server.js":function(e,t,o){"use strict";o.r(t);var s=o("./build/contracts/EmitOracle.json"),r=o("./src/server/config.json"),n=o("web3"),c=o.n(n),l=o("express"),a=o.n(l);let u=r.localhost;console.log(u.url);let d=new c.a(new c.a.providers.WebsocketProvider(u.url.replace("http","ws")));d.eth.defaultAccount=d.eth.accounts[0];let i=new d.eth.Contract(s.abi,u.appAddress);d.eth.defaultAccount=d.eth.accounts[0],console.log(d.eth.defaultAccount),i.events.allEvents().on("data",e=>{console.log(e)}).on("error",console.error);const p=a()();p.get("/api",(e,t)=>{t.send({message:"An API for use with your Dapp!"})}),t.default=p}};