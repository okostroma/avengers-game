(this.webpackJsonpdog=this.webpackJsonpdog||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/thanos.b0f4a42c.jpg"},15:function(e,t,n){e.exports=n.p+"static/media/zvuk.e3cc934d.mp3"},16:function(e,t,n){e.exports=n.p+"static/media/avengers-endgame.f04f6770.jpg"},17:function(e,t,n){e.exports=n.p+"static/media/the_avengers_theme.0fc52361.mp3"},19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(24),n(2)),s=n(3),u=n(5),p=n(4),l=(n(9),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},10===this.props.state.counter?r.a.createElement("div",{className:"finish"}," CONGRATS! ",r.a.createElement("button",{onClick:this.props.startAgain},"Start again")," "):r.a.createElement("span",null," ",this.props.state.counter))}}]),n}(r.a.Component)),m=n(14),d=n.n(m),h=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.index===this.props.id?"show":"";return r.a.createElement("div",{className:"item"},r.a.createElement("img",{onClick:this.props.onClick,src:d.a,className:"photo + ".concat(e)}))}}]),n}(r.a.Component),f=n(15),g=n.n(f),v=n(16),b=n.n(v),O=n(17),j=n.n(O),C=n(8),E=n(1),A=n(7),N={counter:0,index:1,time:700,item:[{},{},{},{},{},{},{},{},{}]},k=Object(A.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLICK_COUNTER":return Object(E.a)(Object(E.a)({},e),{},{counter:e.counter+1});case"GET_RANDOM_INDEX":return Object(E.a)(Object(E.a)({},e),{},{index:Math.floor(9*Math.random())});case"START_AGAIN":return Object(E.a)(Object(E.a)({},e),{},{counter:0});default:return e}})),y=k,I=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).setNewInterval=function(t){setInterval((function(){e.getRandomImageIndex()}),t)},e.onCounterClick=function(){e.props.clickCounter(e.props.counter),new Audio(g.a).play();var t=new Audio(j.a);9===e.props.counter&&t.play()},e.getRandomImageIndex=function(){e.props.getRandomImageIndex(e.props.index)},e.startAgain=function(){e.props.startAgain(e.props.counter)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setNewInterval(this.props.time)}},{key:"render",value:function(){var e=this,t=this.props.item.map((function(t,n){return r.a.createElement(h,{onClick:e.onCounterClick,index:e.props.index,key:n,id:n})}));return r.a.createElement("div",{className:"gameScreen"},r.a.createElement("img",{className:"logo",src:b.a}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"title"},"Can you catch 10 ?"),t,r.a.createElement(l,{startAgain:this.startAgain,state:this.props})))}}]),n}(r.a.Component),x=Object(C.b)((function(e){return{counter:e.counter,index:e.index,time:e.time,item:e.item}}),(function(e){return{clickCounter:function(){e({type:"CLICK_COUNTER"})},getRandomImageIndex:function(){e({type:"GET_RANDOM_INDEX"})},startAgain:function(){e({type:"START_AGAIN"})}}}))(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C.a,{store:y},r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.0b8f7169.chunk.js.map