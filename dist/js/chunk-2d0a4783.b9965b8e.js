(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4783"],{"0728":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c=Object(n["O"])("data-v-772db3be");Object(n["w"])("data-v-772db3be");var r=Object(n["h"])("strong",null,"Имя владельца",-1),u=Object(n["h"])("strong",null,"Телефон владельца",-1),s=Object(n["h"])("strong",null,"сумма владельца",-1),o=Object(n["h"])("strong",null,"Статус владельца",-1),b=Object(n["g"])(": "),l={class:"form-control"},p=Object(n["h"])("label",{for:"status"},"Статус",-1),i=Object(n["h"])("option",{value:"done"},"Завершен",-1),O=Object(n["h"])("option",{value:"cancelled"},"Отменен",-1),j=Object(n["h"])("option",{value:"active"},"Активен",-1),d=Object(n["h"])("option",{value:"pending"},"Выполняется",-1),v={key:2,class:"text-center text-white"};Object(n["u"])();var h=c((function(e,t,a,h,f,g){var m=Object(n["B"])("app-loader"),w=Object(n["B"])("app-status"),y=Object(n["B"])("app-page");return h.loading?(Object(n["t"])(),Object(n["e"])(m,{key:0})):h.request?(Object(n["t"])(),Object(n["e"])(y,{key:1,back:"",title:"Заявка"},{default:c((function(){return[Object(n["h"])("p",null,[r,Object(n["g"])(": "+Object(n["E"])(h.request.fio),1)]),Object(n["h"])("p",null,[u,Object(n["g"])(": "+Object(n["E"])(h.request.phone),1)]),Object(n["h"])("p",null,[s,Object(n["g"])(": "+Object(n["E"])(h.currency(h.request.amount)),1)]),Object(n["h"])("p",null,[o,b,Object(n["h"])(w,{type:h.request.status},null,8,["type"])]),Object(n["h"])("div",l,[p,Object(n["M"])(Object(n["h"])("select",{id:"status","onUpdate:modelValue":t[1]||(t[1]=function(e){return h.status=e})},[i,O,j,d],512),[[n["H"],h.status]])]),Object(n["h"])("button",{class:"btn danger",onClick:t[2]||(t[2]=function(){return h.remove&&h.remove.apply(h,arguments)})},"Удалить"),h.hasChanges?(Object(n["t"])(),Object(n["e"])("button",{key:0,class:"btn",onClick:t[3]||(t[3]=function(){return h.update&&h.update.apply(h,arguments)})},"Обновить")):Object(n["f"])("",!0)]})),_:1})):(Object(n["t"])(),Object(n["e"])("h3",v," Заявки с ID = "+Object(n["E"])(e.$route.params.id)+" — нет!",1))})),f=a("5530"),g=(a("96cf"),a("1da1")),m=a("1da6"),w=a("6c02"),y=a("5502"),k=a("ddc6"),q=a("0aeb"),x=a("3f9b"),R={name:"Request",setup:function(){var e=Object(n["y"])(!0),t=Object(w["c"])(),a=Object(w["d"])(),c=Object(y["b"])(),r=Object(n["y"])({}),u=Object(n["y"])(),s=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.dispatch("request/remove",t.params.id);case 2:a.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(f["a"])(Object(f["a"])({},r.value),{},{status:u.value,id:t.params.id}),e.next=3,c.dispatch("request/update",a);case 3:r.value.status=u.value;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n["r"])(Object(g["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.value=!0,a.next=3,c.dispatch("request/loadOne",t.params.id);case 3:r.value=a.sent,u.value=null===(n=r.value)||void 0===n?void 0:n.status,e.value=!1;case 6:case"end":return a.stop()}}),a)}))));var b=Object(n["c"])((function(){return r.value.status!==u.value}));return console.log(t.params.id),{loading:e,request:r,currency:x["a"],remove:s,update:o,status:u,hasChanges:b}},components:{AppPage:m["a"],AppLoader:k["a"],AppStatus:q["a"]}};R.render=h,R.__scopeId="data-v-772db3be";t["default"]=R}}]);
//# sourceMappingURL=chunk-2d0a4783.b9965b8e.js.map