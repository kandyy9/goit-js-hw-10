import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const i=document.querySelector(".form");document.querySelector("button[submit]");let o=0,r="";i.addEventListener("submit",t=>{t.preventDefault(),new Promise((e,m)=>{r=t.target.elements.state.value,o=t.target.elements.delay.value,r=="fulfilled"?e(o):m(o),i.reset()}).then(e=>{setTimeout(()=>{s.show({message:`✅ Fulfilled promise in ${e}ms`,messageColor:"#FFFFFF",backgroundColor:"#59A10D",position:"topRight",newestOnTop:!1})},e)}).catch(e=>{setTimeout(()=>{s.show({message:`❌ Rejected promise in ${e}ms`,messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",newestOnTop:!1})},e)})});
//# sourceMappingURL=commonHelpers2.js.map
