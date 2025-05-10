import{a as n,S as u}from"./assets/vendor-CuoSnFBQ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();n.defaults.baseURL="https://pixabay.com/api/";function f(i){return n("",{params:{q:i,key:"50190409-57f653f3b13017a76580224dc",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}//! Sorry, there are no images matching your search query. Please try again!
const d=new u(".js-gallery .image-link");function m(i){return i.map(({tags:s,largeImageURL:l,webformatURL:o,likes:e,views:t,comments:a,downloads:c})=>`<li class="gallery-item">
                <div>
                  <a href="${l}" class="image-link">
                    <img
                      src="${o}"
                      alt="${s}"
                      class="gallery-image"
                    />
                  </a>
                </div>
                <div>
                  <ul class="image-info">
                    <li class="info-item">
                      <p class="info-value-tittle">Likes</p>
                      <p class="info-value" data-likes>${e}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Views</p>
                      <p class="info-value" data-views>${t}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Comments</p>
                      <p class="label" data-comments>${a}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Downloads</p>
                      <p class="info-value" data-downloads>${c}</p>
                    </li>
                  </ul>
                </div>
              </li>`).join("")}function p(){d.refresh()}function y(i){i.classList.remove("hidden")}function h(i){i.classList.add("hidden")}const g=document.querySelector(".js-form"),v=document.querySelector(".js-gallery"),r=document.querySelector(".js-loader");g.addEventListener("submit",L);function L(i){i.preventDefault();const s=i.target.elements["search-text"].value;y(r),f(s).then(l=>{v.innerHTML=m(l.hits),p()}).catch(l=>{alert(l)}).finally(()=>h(r))}
//# sourceMappingURL=index.js.map
