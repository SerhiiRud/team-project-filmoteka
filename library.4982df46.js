!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r);var i=r("bpxeT"),o=r("2TvXO"),s=r("dIxxU"),c=r("9hinH"),l=(c=r("9hinH"),"https://api.themoviedb.org/3"),d="9e4f0ad78cbe1148a9d4c0c8389afc83",u=document.querySelector(".library-list"),p=document.querySelector(".backdrop"),f=document.querySelector(".modal"),m="";function g(e){if(e.preventDefault(),e.currentTarget!==e.target)return e.target.closest("li").dataset.id}function v(e){return h.apply(this,arguments)}function h(){return(h=e(i)(e(o).mark((function t(n){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.default.get("".concat(l,"/movie/").concat(n,"?api_key=").concat(d,"&language=en-US"));case 3:return a=e.sent.data,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function y(e){return b.apply(this,arguments)}function b(){return(b=e(i)(e(o).mark((function t(n){var a,r,i,s,l,d,u,p,f,m,g,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=document.querySelector(".js-watchedBtn"),r=n.target.dataset.id,i=JSON.parse(localStorage.getItem("addToWatched")).find((function(e){return e.id===Number(r)})),console.log("watched status",i),!i){e.next=8;break}a.textContent="ADD TO WATCHED",s=JSON.parse(localStorage.getItem("addToWatched")).filter((function(e){return e.id!==Number(r)})),localStorage.setItem("addToWatched",JSON.stringify(s)),e.next=21;break;case 8:return a.textContent="REMOVE FROM WATCHED",l=JSON.parse(localStorage.getItem("addToWatched")),e.next=12,v(r);case 12:d=e.sent,u=d.poster_path,p=d.original_title?d.original_title:d.title,f=d.genres.map((function(e){return e.name})).join(", "),m=d.release_date.slice(0,4),g=d.id,h={poster:u,title:p,genreList:f,releaseDate:m,id:g},l.push(h),localStorage.setItem("addToWatched",JSON.stringify(l));case 21:c.refs.watchedBtn.classList.add("active"),c.refs.queueBtn.classList.remove("active"),location.reload();case 24:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function S(e){return T.apply(this,arguments)}function T(){return(T=e(i)(e(o).mark((function t(n){var a,r,i,s,l,d,u,p,f,m,g;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=document.querySelector(".js-queueBtn"),r=n.target.dataset.id,!JSON.parse(localStorage.getItem("addToQueue")).find((function(e){return e.id===Number(r)}))){e.next=7;break}a.textContent="ADD TO QUEUE",i=JSON.parse(localStorage.getItem("addToQueue")).filter((function(e){return e.id!==Number(r)})),localStorage.setItem("addToQueue",JSON.stringify(i)),e.next=20;break;case 7:return a.textContent="REMOVE FROM QUEUE",s=JSON.parse(localStorage.getItem("addToQueue")),e.next=11,v(r);case 11:l=e.sent,d=l.poster_path,u=l.original_title?l.original_title:l.title,p=l.genres.map((function(e){return e.name})).join(", "),f=l.release_date.slice(0,4),m=l.id,g={poster:d,title:u,genreList:p,releaseDate:f,id:m},s.push(g),localStorage.setItem("addToQueue",JSON.stringify(s));case 20:c.refs.watchedBtn.classList.add("active"),c.refs.queueBtn.classList.remove("active"),location.reload();case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function w(){return(w=e(i)(e(o).mark((function t(n){var a,r,i,s,c,l,d,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=g(n),e.next=3,v(a);case 3:r=e.sent,i=localStorage.getItem("addToWatched"),s=localStorage.getItem("addToQueue"),c=JSON.parse(i).find((function(e){return e.id===Number(a)})),l=JSON.parse(s).find((function(e){return e.id===Number(a)})),O(r,c?"REMOVE FROM WATCHED":"ADD TO WATCHED",l?"REMOVE FROM QUEUE":"ADD TO QUEUE"),document.querySelector(".modal-close").addEventListener("click",k),document.addEventListener("keydown",(function(e){27===e.keyCode&&k()})),p.addEventListener("click",(function(e){e.target===e.currentTarget&&k()})),d=document.querySelector(".js-watchedBtn"),u=document.querySelector(".js-queueBtn"),d.addEventListener("click",y),u.addEventListener("click",S);case 19:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function k(){p.classList.add("visually-hidden"),f.innerHTML="",m=""}function O(e,t,n){f.innerHTML="",p.classList.remove("visually-hidden");var a=e.poster_path,r=e.original_title,i=e.name,o=e.vote_average,s=e.vote_count,c=e.popularity,l=e.genres,d=e.release_date,u=void 0===d?"":d,g=e.first_air_date,v=void 0===g?"":g,h=e.overview,y=e.id,b=r||i,S=(u?u.slice(0,4):v.slice(0,4),l.map((function(e){return e.name})).join(", "));m='\n   <button type="button" class="modal-close" data-modal-close>\n    '.concat('<svg\n      width="30"\n      height="30"\n      viewBox="0 0 30 30"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path d="M8 8L22 22" stroke="black" stroke-width="2" />\n      <path d="M8 22L22 8" stroke="black" stroke-width="2" />\n    </svg>','\n  </button>\n  <div class="modal-poster"><img\n      class="img-film"\n      src="').concat("https://image.tmdb.org/t/p/original/").concat(a,'"\n      alt=""\n    />\n  </div>\n  <div class="modal-description">\n    <h2 class="modal-title">').concat(b,'</h2>\n    <div class="data-wrapper">\n      <div class="data-keys">\n        <ul class="keys-list">\n          <li class="keys-item">Vote / Votes</li>\n          <li class="keys-item">Popularity</li>\n          <li class="keys-item">Original Title</li>\n          <li class="keys-item">Genre</li>\n        </ul>\n      </div>\n      <div class="data-values">\n        <ul class="values-list">\n          <li class="value-item">\n            <span class="rating">').concat(o,'</span>/<span class="votes">').concat(s,'</span>\n          </li>\n          <li class="value-item popularity">').concat(c,'</li>\n          <li class="value-item movie-title">').concat(b,'</li>\n          <li class="value-item movie-genres">').concat(S,'</li>\n        </ul>\n      </div>\n    </div>\n    <h2 class="about-film">ABOUT</h2>\n    <p class="description-film-info">').concat(h,' \n    </p>\n    <div class="btn-block">\n      <button type="button" class="modal-button js-watchedBtn" data-id=\'').concat(y,"'>").concat(t,'</button>\n      <button type="button" class="modal-button js-queueBtn" data-id=\'').concat(y,"'>").concat(n,"</button>\n    </div>\n  </div>"),f.insertAdjacentHTML("afterbegin",m)}u.addEventListener("click",(function(e){return w.apply(this,arguments)}))}();
//# sourceMappingURL=library.4982df46.js.map
