(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('{"affenpinscher":[],"african":[],"airedale":[],"akita":[],"appenzeller":[],"basenji":[],"beagle":[],"bluetick":[],"borzoi":[],"bouvier":[],"boxer":[],"brabancon":[],"briard":[],"buhund":["norwegian"],"bulldog":["boston","english","french"],"bullterrier":["staffordshire"],"cairn":[],"cattledog":["australian"],"chihuahua":[],"chow":[],"clumber":[],"cockapoo":[],"collie":["border"],"coonhound":[],"corgi":["cardigan"],"cotondetulear":[],"dachshund":[],"dalmatian":[],"dane":["great"],"deerhound":["scottish"],"dhole":[],"dingo":[],"doberman":[],"elkhound":["norwegian"],"entlebucher":[],"eskimo":[],"frise":["bichon"],"germanshepherd":[],"greyhound":["italian"],"groenendael":[],"hound":["afghan","basset","blood","english","ibizan","walker"],"husky":[],"keeshond":[],"kelpie":[],"komondor":[],"kuvasz":[],"labrador":[],"leonberg":[],"lhasa":[],"malamute":[],"malinois":[],"maltese":[],"mastiff":["bull","english","tibetan"],"mexicanhairless":[],"mix":[],"mountain":["bernese","swiss"],"newfoundland":[],"otterhound":[],"papillon":[],"pekinese":[],"pembroke":[],"pinscher":["miniature"],"pitbull":[],"pointer":["german","germanlonghair"],"pomeranian":[],"poodle":["miniature","standard","toy"],"pug":[],"puggle":[],"pyrenees":[],"redbone":[],"retriever":["chesapeake","curly","flatcoated","golden"],"ridgeback":["rhodesian"],"rottweiler":[],"saluki":[],"samoyed":[],"schipperke":[],"schnauzer":["giant","miniature"],"setter":["english","gordon","irish"],"sheepdog":["english","shetland"],"shiba":[],"shihtzu":[],"spaniel":["blenheim","brittany","cocker","irish","japanese","sussex","welsh"],"springer":["english"],"stbernard":[],"terrier":["american","australian","bedlington","border","dandie","fox","irish","kerryblue","lakeland","norfolk","norwich","patterdale","russell","scottish","sealyham","silky","tibetan","toy","westhighland","wheaten","yorkshire"],"vizsla":[],"waterdog":["spanish"],"weimaraner":[],"whippet":[],"wolfhound":["irish"]}')},function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(7),i=t.n(o),l=(t(14),t(1)),c=t(2),s=t(4),u=t(3),d=t(5),h=(t(15),t(8)),m=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this,n=this.props.breed;return a.a.createElement("input",{autoComplete:"off",onChange:function(n){return e.props.setDogBreed(n.target.value)},value:n,type:"text",name:"dogsearch",placeholder:"Type breed name e.g. vizsla"})}}]),n}(a.a.Component),p={border:"1px solid black",backgroundColor:"lightpink",cursor:"pointer"},g=function(e){var n=e.breed,t=e.breedList,r=e.onInputBreedClick;return a.a.createElement("div",{style:{width:"181px"}},t.filter((function(e){return""!==n&&e.includes(n)})).map((function(e){return a.a.createElement("div",{onClick:function(){return r(e)},style:p},e)})))},b=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.props.singleImgUrl;return a.a.createElement("div",null,e.map((function(e){return a.a.createElement("img",{key:e,src:e,alt:"dog"})})))}}]),n}(a.a.Component),f=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.props,n=e.randomImgUrl,t=e.onRandomBreedClick;return console.log(n),""===n?a.a.createElement("button",{onClick:t},"Wygeneruj zdj\u0119cie"):a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:t},"Wygeneruj zdj\u0119cie"),a.a.createElement("img",{src:n,alt:"dog"}))}}]),n}(a.a.Component),k=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.props,n=e.dropDownImgUrl,t=e.onDropDownClick,r=e.breedList,o=e.onDropDownBtnClick;return""!==n?a.a.createElement(a.a.Fragment,null,a.a.createElement("select",{onChange:function(e){return t(e.target.value)}},r.map((function(e){return a.a.createElement("option",{key:e,value:e},e)}))),a.a.createElement("button",{onClick:o},"Wygeneruj psa"),a.a.createElement("img",{src:n,alt:"dog"})):a.a.createElement(a.a.Fragment,null,a.a.createElement("select",{onChange:function(e){return t(e.target.value)}},r.map((function(e){return a.a.createElement("option",{key:e,value:e},e)}))))}}]),n}(a.a.Component),w=Object.keys(h),y=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={breed:"",randomImgUrl:"",dropDownImgUrl:"",singleImgUrl:[],isLoading:!1,error:null},t.onInputBreedClick=function(e){fetch("https://dog.ceo/api/breed/".concat(e,"/images")).then((function(e){return e.json()})).then((function(n){return t.setState({singleImgUrl:n.message,breed:e})}))},t.onRandomBreedClick=function(){fetch("https://dog.ceo/api/breeds/image/random").then((function(e){return e.json()})).then((function(e){return t.setState({randomImgUrl:e.message})}))},t.onDropDownClick=function(e){fetch("https://dog.ceo/api/breed/".concat(e,"/images/random")).then((function(e){return e.json()})).then((function(n){return t.setState({dropDownImgUrl:n.message,breed:e})}))},t.onDropDownBtnClick=function(){fetch("https://dog.ceo/api/breed/".concat(t.state.breed,"/images/random")).then((function(e){return e.json()})).then((function(e){return t.setState({dropDownImgUrl:e.message})}))},t.setDogBreed=function(e){t.setState({breed:e})},t}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,{randomImgUrl:this.state.randomImgUrl,onRandomBreedClick:this.onRandomBreedClick}),a.a.createElement(k,{dropDownImgUrl:this.state.dropDownImgUrl,onDropDownClick:this.onDropDownClick,breed:this.state.breed,setDogBreed:this.setDogBreed,breedList:w,onDropDownBtnClick:this.onDropDownBtnClick}),a.a.createElement(m,{breed:this.state.breed,setDogBreed:this.setDogBreed}),a.a.createElement(g,{breed:this.state.breed,breedList:w,onInputBreedClick:this.onInputBreedClick}),a.a.createElement(b,{singleImgUrl:this.state.singleImgUrl}))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a8ca9a13.chunk.js.map