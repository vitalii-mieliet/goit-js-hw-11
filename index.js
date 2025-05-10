import{a as u,S as m,i as l}from"./assets/vendor-C9vNCoLC.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com/api/";function p(s){return u("",{params:{q:s,key:"50190409-57f653f3b13017a76580224dc",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>i.data).catch(i=>i)}const g=new m(".js-gallery .image-link",{captionsData:"alt",captionDelay:250}),y=document.querySelector(".js-gallery");function h(s){return s.map(({tags:i,largeImageURL:r,webformatURL:a,likes:e,views:t,comments:o,downloads:d})=>`<li class="gallery-item">
                <div>
                  <a href="${r}" class="image-link">
                    <img
                      src="${a}"
                      alt="${i}"
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
                      <p class="info-value" data-comments>${o}</p>
                    </li>
                    <li class="info-item">
                      <p class="info-value-tittle">Downloads</p>
                      <p class="info-value" data-downloads>${d}</p>
                    </li>
                  </ul>
                </div>
              </li>`).join("")}function n(){y.innerHTML=""}function v(s){s.classList.remove("hidden")}function L(s){s.classList.add("hidden")}const f=document.querySelector(".js-form"),b=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader");f.addEventListener("submit",q);function q(s){s.preventDefault();const i=s.target.elements["search-text"].value.trim();if(i===""){l.warning({position:"topRight",message:"Please enter the correct query!"});return}n(),v(c),p(i).then(r=>{if(r.hits.length===0){l.warning({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n();return}b.innerHTML=h(r.hits),g.refresh()}).catch(r=>{console.log(r),l.error({position:"topRight",message:`ERROR: ${r}`})}).finally(()=>{L(c),f.reset()})}
//# sourceMappingURL=index.js.map
