(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{23:function(n,e,t){n.exports=t(34)},28:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(13),o=t.n(i),c=(t(28),t(10)),l=t(14),u=t(15),p=t(20),f=t(16),s=t(21),d=t(1),m=t(2),x=t(4),h=t(5),g="375px",b="525px",w="768px",v="1024px",y="1440px",E="2560px",z={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(g,")"),mobileL:"(min-width: ".concat(b,")"),tablet:"(min-width: ".concat(w,")"),laptop:"(min-width: ".concat(v,")"),laptopL:"(min-width: ".concat(y,")"),desktop:"(min-width: ".concat(E,")"),desktopL:"(min-width: ".concat(E,")")};function j(){var n=Object(d.a)(["\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 22px;\n  transform: translate(-50%, -50%);\n  height: 14px;\n  width: 14px;\n  font-size: 14px;\n  color: #c5c5c5;\n  @media "," {\n    height: 15px;\n    width: 15px;\n    font-size: 15px;\n  }\n  @media "," {\n    height: 16px;\n    width: 16px;\n    font-size: 16px;\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(d.a)(["\n  width: 100%;\n  border: none;\n  background-color: #ffffff;\n  font-size: 16px;\n  padding: 10px 15px 10px 40px;\n  color: #c5c5c5;\n  transition: 0.2s;\n  border-radius: 20px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  &:focus {\n    color: #191919;\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n    outline: none;\n  }\n  @media "," {\n    font-size: 18px;\n  }\n  @media "," {\n    padding: 15px 20px 15px 45px;\n    border-radius: 30px;\n  }\n"]);return O=function(){return n},n}function S(){var n=Object(d.a)(["\n  top: ",";\n  position: relative;\n  margin: 0 auto;\n  max-width: 500px;\n  transition: 0.8s 0.5s;\n  @media "," {\n    max-width: 600px;\n  }\n  @media "," {\n    max-width: 700px;\n  }\n"]);return S=function(){return n},n}var F=m.a.form(S(),(function(n){return n.showResult?"0%":"30%"}),z.laptopL,z.desktop),k=m.a.input(O(),z.tablet,z.laptop),L=m.a.span(j(),z.tablet,z.laptop),T=function(n){var e=n.submit,t=n.value,a=n.change,i=n.showResult;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{showResult:i,onSubmit:e},r.a.createElement(k,{type:"text",value:t,placeholder:"Enter city",onChange:a}),r.a.createElement(L,null,r.a.createElement(x.a,{icon:h.f}))))};function C(){var n=Object(d.a)(["\n  color: ",";\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  text-align: ",";\n  padding: 5px 0;\n  ","\n  @media "," {\n    font-size: ",";\n  }\n  @media "," {\n    font-size: ",";\n  } \n  @media "," {\n    font-size: ",";\n  }\n"]);return C=function(){return n},n}var D=m.a.h4(C(),(function(n){return n.color||"#FFFFFF"}),(function(n){return n.weight||"600"}),(function(n){return n.fontSize||"15px"}),(function(n){return n.align||"left"}),(function(n){return n.firstToUpperCase&&"\n  &:first-letter {\n    text-transform: uppercase;\n  }\n  "}),z.tablet,(function(n){return n.fontSize||"20px"}),z.laptop,(function(n){return n.fontSize||"23px"}),z.laptopL,(function(n){return n.fontSize||"26px"}));function I(){var n=Object(d.a)(["\n  color: ",";\n  display: block;\n  font-size: ",";\n  text-align: ",";\n\n  ","\n  @media "," {\n    font-size: ",";\n  }\n  @media "," {\n    font-size: ",";\n  } \n  @media "," {\n    font-size: ",";\n  }\n"]);return I=function(){return n},n}var M=m.a.span(I(),(function(n){return n.color||"#FFFFFF"}),(function(n){return n.fontSize||"12px"}),(function(n){return n.align||"left"}),(function(n){return n.firstToUpperCase&&"\n  &:first-letter {\n    text-transform: uppercase;\n  }\n  "}),z.tablet,(function(n){return n.fontSize||"15px"}),z.laptop,(function(n){return n.fontSize||"17px"}),z.laptopL,(function(n){return n.fontSize||"19px"}));function R(){var n=Object(d.a)(["\n  display: block;\n  height: 50px;\n  width: 50px;\n  margin: 0 auto;\n"]);return R=function(){return n},n}function P(){var n=Object(d.a)(["\n  flex-shrink: 0;\n  flex-basis: 90px;\n  padding: 10px;\n  margin: 0 5px;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.2);\n  &:first-child {\n    margin-left: 0;\n  }\n  &:last-child {\n    margin-right: 0;\n  }\n  @media "," {\n    flex-basis: 110px;\n  }\n  @media "," {\n    flex-basis: 125px;\n  }\n  @media "," {\n    flex-basis: 140px;\n  }\n"]);return P=function(){return n},n}var W=m.a.div(P(),z.tablet,z.laptop,z.laptopL),A=m.a.img(R()),J=function(n){var e=n.temp,t=n.month,a=n.day,i=n.hour,o=n.icon,c="https://openweathermap.org/img/w/".concat(o,".png");return r.a.createElement(W,null,r.a.createElement(M,{align:"center"},t,".",a),r.a.createElement(M,{align:"center"},i,":00"),r.a.createElement(A,{src:c}),r.a.createElement(D,{align:"center",weight:"400"},e,"\xb0"))};function U(){var n=Object(d.a)(["\n  to {\n    opacity: 1;\n    visibility: visible;\n     top: 0;\n  }\n"]);return U=function(){return n},n}var _=Object(m.b)(U());function q(){var n=Object(d.a)(["\n  color: ",";\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  text-align: ",";\n  padding: 5px 0;\n  ","\n  @media "," {\n    font-size: ",";\n  }\n  @media "," {\n    font-size: ",";\n  } \n  @media "," {\n    font-size: ",";\n  } \n"]);return q=function(){return n},n}var B=m.a.h2(q(),(function(n){return n.color||"#FFFFFF"}),(function(n){return n.weight||"600"}),(function(n){return n.fontSize||"30px"}),(function(n){return n.align||"left"}),(function(n){return n.firstToUpperCase&&"\n  &:first-letter {\n    text-transform: uppercase;\n  }\n  "}),z.tablet,(function(n){return n.fontSize||"37px"}),z.laptop,(function(n){return n.fontSize||"43px"}),z.laptopL,(function(n){return n.fontSize||"52px"}));function H(){var n=Object(d.a)(["\n  color: ",";\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  text-align: ",";\n  padding: 5px 0;\n  ","\n  @media "," {\n    font-size: ",";\n  }\n  @media "," {\n    font-size: ",";\n  } \n  @media "," {\n    font-size: ",";\n  }\n"]);return H=function(){return n},n}var N=m.a.h3(H(),(function(n){return n.color||"#FFFFFF"}),(function(n){return n.weight||"600"}),(function(n){return n.fontSize||"20px"}),(function(n){return n.align||"left"}),(function(n){return n.firstToUpperCase&&"\n  &:first-letter {\n    text-transform: uppercase;\n  }\n  "}),z.tablet,(function(n){return n.fontSize||"23px"}),z.laptop,(function(n){return n.fontSize||"26px"}),z.laptopL,(function(n){return n.fontSize||"29px"}));function $(){var n=Object(d.a)(["\n  position: relative;\n  display: flex;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  scrollbar-color: lightgray #ffffff;\n  scrollbar-width: thin;\n  margin-top: 20px;\n  padding-bottom: 20px;\n  @media "," {\n    order: 4;\n  }\n"]);return $=function(){return n},n}function G(){var n=Object(d.a)(["\n  flex-basis: 100%;\n  margin: 20px 0;\n  overflow: hidden;\n"]);return G=function(){return n},n}function K(){var n=Object(d.a)(["\n  flex-basis: calc(100% / 3);\n  padding: 10px;\n  @media "," {\n    padding: 20px 10px;\n  }\n"]);return K=function(){return n},n}function Q(){var n=Object(d.a)(["\n  flex-basis: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px 0;\n  margin: 20px 0;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  align-self: flex-start;\n  @media "," {\n    flex-basis: 50%;\n  }\n"]);return Q=function(){return n},n}function V(){var n=Object(d.a)(["\n  display: block;\n  font-size: 50px;\n  font-weight: 400;\n  color: #ffffff;\n  @media "," {\n    font-size: 70px;\n  }\n  @media "," {\n    font-size: 90px;\n  }\n  @media "," {\n    font-size: 110px;\n  }\n"]);return V=function(){return n},n}function X(){var n=Object(d.a)([""]);return X=function(){return n},n}function Y(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 70px;\n  color: #ffffff;\n  @media "," {\n    font-size: 100px;\n    justify-content: flex-end;\n  }\n  @media "," {\n    font-size: 120px;\n  }\n  @media "," {\n    font-size: 140px;\n  }\n"]);return Y=function(){return n},n}function Z(){var n=Object(d.a)(["\n  flex-basis: 100%;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-columns: auto 1fr;\n  margin: 20px 0;\n  grid-gap: 30px;\n  @media "," {\n    flex-basis: 50%;\n    padding-right: 10px;\n  }\n  @media "," {\n    grid-template-columns: 1fr 1fr;\n    padding-right: 20px;\n  }\n"]);return Z=function(){return n},n}function nn(){var n=Object(d.a)(["\n  flex-basis: 100%;\n"]);return nn=function(){return n},n}function en(){var n=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 40px 0;\n  opacity: 0;\n  visibility: hidden;\n  position: relative;\n  top: 20px;\n  animation: "," 0.5s 1.4s forwards;\n"]);return en=function(){return n},n}var tn=m.a.div(en(),_),an=m.a.div(nn()),rn=m.a.div(Z(),z.mobileL,z.tablet),on=m.a.div(Y(),z.tablet,z.laptop,z.laptopL),cn=m.a.div(X()),ln=m.a.h3(V(),z.tablet,z.laptop,z.laptopL),un=m.a.div(Q(),z.mobileL),pn=m.a.div(K(),z.laptop),fn=m.a.div(G()),sn=m.a.div($(),z.laptop),dn=function(n){var e=n.weather,t=e.city,a=e.country,i=e.date,o=e.description,c=e.main,l=e.temp,u=e.sunset,p=e.sunrise,f=e.humidity,s=e.wind,d=e.highestTemp,m=e.lowestTemp,g=e.forecast.map((function(n){return r.a.createElement(J,{key:n.dt,temp:Math.floor(1*n.main.temp)/1,icon:n.weather[0].icon,month:n.dt_txt.slice(5,7),day:n.dt_txt.slice(8,10),hour:1*n.dt_txt.slice(11,13)})})),b=null;return b="Thunderstorm"===c?r.a.createElement(x.a,{icon:h.a}):"Drizzle"===c?r.a.createElement(x.a,{icon:h.c}):"Rain"===c?r.a.createElement(x.a,{icon:h.d}):"Snow"===c?r.a.createElement(x.a,{icon:h.h}):"Clear"===c?r.a.createElement(x.a,{icon:h.i}):"Clouds"===c?r.a.createElement(x.a,{icon:h.b}):r.a.createElement(x.a,{icon:h.g}),r.a.createElement(tn,null,r.a.createElement(an,null,r.a.createElement(B,null,t,", ",a),r.a.createElement(D,{weight:"400"},i)),r.a.createElement(rn,null,r.a.createElement(on,null,b),r.a.createElement(cn,null,r.a.createElement(ln,null,Math.floor(l),"\xb0"),r.a.createElement(D,{weight:"400",firstToUpperCase:!0},o))),r.a.createElement(un,null,r.a.createElement(pn,null,r.a.createElement(D,{align:"center",weight:"400"},Math.floor(d),"\xb0"),r.a.createElement(M,{align:"center"},"Hight")),r.a.createElement(pn,null,r.a.createElement(D,{align:"center",weight:"400"},s,"mph"),r.a.createElement(M,{align:"center"},"Wind")),r.a.createElement(pn,null,r.a.createElement(D,{align:"center",weight:"400"},p),r.a.createElement(M,{align:"center"},"Sunrise")),r.a.createElement(pn,null,r.a.createElement(D,{align:"center",weight:"400"},Math.floor(m),"\xb0"),r.a.createElement(M,{align:"center"},"Low")),r.a.createElement(pn,null,r.a.createElement(D,{align:"center",weight:"400"},f,"%"),r.a.createElement(M,{align:"center"},"Rain")),r.a.createElement(pn,null,r.a.createElement(D,{align:"center",weight:"400"},u),r.a.createElement(M,{align:"center"},"Sunset"))),r.a.createElement(fn,null,r.a.createElement(N,{weight:"400"},"Forecast"),r.a.createElement(sn,null,g)))};function mn(){var n=Object(d.a)(["\n  color: #ffffff;\n  font-size: 17px;\n"]);return mn=function(){return n},n}function xn(){var n=Object(d.a)(["\n  display: block;\n  text-align: center;\n  color: #ffffff;\n  font-size: 40px;\n  margin-right: 10px;\n"]);return xn=function(){return n},n}function hn(){var n=Object(d.a)(["\n  max-width: 600px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 100px auto 0;\n  padding: 20px;\n  opacity: 0;\n  visibility: hidden;\n  position: relative;\n  border-radius: 10px;\n  top: 20px;\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 10px;\n  animation: "," 0.5s 1.4s forwards;\n"]);return hn=function(){return n},n}var gn=m.a.div(hn(),_),bn=m.a.span(xn()),wn=m.a.span(mn()),vn=function(){return r.a.createElement(gn,null,r.a.createElement(bn,null,r.a.createElement(x.a,{icon:h.e})),r.a.createElement(wn,null,"Sorry, the specified city was not found.."))};function yn(){var n=Object(d.a)(["\n  max-width: 1500px;\n  margin: 0 auto;\n  height: calc(100vh - 64px);\n  width: 100%;\n  position: relative;\n"]);return yn=function(){return n},n}function En(){var n=Object(d.a)(["\n  display: block;\n  height: 64px;\n  margin: 0;\n  padding: 20px 0;\n  font-size: 20px;\n  text-transform: uppercase;\n  font-weight: 400;\n  color: #ffffff;\n  transition: 0.3s 1.4s;\n  opacity: ",";\n\n  ","\n\n  ","\n"]);return En=function(){return n},n}var zn=m.a.h1(En(),(function(n){return n.showLabel?1:0}),(function(n){return n.secondary&&"\n    opacity: 1;\n    height: auto;\n    position: relative;\n    padding: 20px 0;\n    font-size: 30px;\n    top: 20%;\n    text-align: center;\n    transition: .5s;\n    @media ".concat(z.tablet," {\n      font-size: 40px;\n    }\n    @media ").concat(z.laptop," {\n      font-size: 50px;\n    }\n    @media ").concat(z.laptopL," {\n      font-size: 60px;\n    }\n    @media ").concat(z.desktop," {\n      font-size: 70px;\n    }\n    \n  ")}),(function(n){return n.showResult&&"\n    opacity: 0;\n    visibility: hidden;\n    top: 10%;\n  "})),jn=m.a.div(yn()),On=function(n){function e(){var n,t;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(p.a)(this,(n=Object(f.a)(e)).call.apply(n,[this].concat(r)))).state={value:"",weatherInfo:null,error:!1},t.handleInputChange=function(n){t.setState({value:n.target.value})},t.handleSearchCity=function(n){n.preventDefault();var e=t.state.value,a="84f0c05e16abc57b03ca8fa00b59f78e",r="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=").concat(a,"&units=metric"),i="https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&APPID=").concat(a,"&units=metric");Promise.all([fetch(r),fetch(i)]).then((function(n){var e=Object(c.a)(n,2),t=e[0],a=e[1];if(t.ok&&a.ok)return Promise.all([t.json(),a.json()]);throw Error(t.statusText,a.statusText)})).then((function(n){var e=Object(c.a)(n,2),a=e[0],r=e[1],i=new Date,o="".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][i.getDay()]," ").concat(i.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","Nocvember","December"][i.getMonth()]),l=new Date(1e3*a.sys.sunset).toLocaleTimeString().slice(0,5),u=new Date(1e3*a.sys.sunrise).toLocaleTimeString().slice(0,5),p={city:a.name,country:a.sys.country,date:o,description:a.weather[0].description,main:a.weather[0].main,temp:a.main.temp,highestTemp:a.main.temp_max,lowestTemp:a.main.temp_min,sunrise:u,sunset:l,clouds:a.clouds.all,humidity:a.main.humidity,wind:a.wind.speed,forecast:r.list};t.setState({weatherInfo:p,error:!1})})).catch((function(n){console.log(n),t.setState({error:!0,weatherInfo:null})}))},t}return Object(s.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this.state,e=n.value,t=n.weatherInfo,a=n.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(zn,{showLabel:(t||a)&&!0},"Weather app"),r.a.createElement(jn,null,r.a.createElement(zn,{secondary:!0,showResult:(t||a)&&!0},"Weather app"),r.a.createElement(T,{value:e,showResult:(t||a)&&!0,change:this.handleInputChange,submit:this.handleSearchCity}),t&&r.a.createElement(dn,{weather:t}),a&&r.a.createElement(vn,{error:a})))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(On,null),document.getElementById("weather-app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.5fc89b9d.chunk.js.map