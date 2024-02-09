function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r,n,a,i=globalThis,s={},o={},c=i.parcelRequire7e89;null==c&&((c=function(e){if(e in s)return s[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return s[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},i.parcelRequire7e89=c);var l=c.register;l("27Lyk",function(t,r){e(t.exports,"register",()=>n,e=>n=e);var n,a=new Map;n=function(e,t){for(var r=0;r<t.length-1;r+=2)a.set(t[r],{baseUrl:e,path:t[r+1]})}}),l("1is5Y",function(t,r){e(t.exports,"state",()=>i),e(t.exports,"loadRecipe",()=>s),e(t.exports,"loadSearchResults",()=>o),e(t.exports,"updateServings",()=>l),e(t.exports,"getSearchResultsPage",()=>d),e(t.exports,"addBookmark",()=>p),e(t.exports,"deleteBookmark",()=>h);var n=c("fZ5A9"),a=c("i9R9q");let i={recipe:{},search:{page:1,query:"",results:[],resultsPerPage:n.RES_PER_PAGE},bookmarks:[]},s=async function(e){try{let{recipe:t}=(await (0,a.getJSON)(`${n.API_URL}/${e}`)).data;i.recipe={id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients},i.bookmarks.some(t=>t.id===e)?i.recipe.bookmarked=!0:i.recipe.bookmarked=!1,console.log(i.recipe)}catch(e){throw e}},o=async function(e){try{i.search.query=e;let t=await (0,a.getJSON)(`${n.API_URL}?search=${e}`);i.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})),i.search.page=1}catch(e){}},l=function(e){i.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/i.recipe.servings}),i.recipe.servings=e},d=function(e=i.search.page){this.state.search.page=e,console.log(" page:-",this.state.page);let t=(e-1)*i.search.resultsPerPage,r=e*i.search.resultsPerPage;return i.search.results.slice(t,r)},u=function(e){localStorage.setItem("bookmarks",JSON.stringify(i.bookmarks))},p=function(e){i.bookmarks.push(e),e.id===i.recipe.id&&(i.recipe.bookmarked=!0),u()},h=function(e){let t=i.bookmarks.findIndex(t=>t.id===e);i.bookmarks.splice(t,1),e===i.recipe.id?i.recipe.bookmarked=!1:console.log("din not"),u()};!function(){let e=localStorage.getItem("bookmarks");e&&(i.bookmarks=JSON.parse(e))}()}),l("fZ5A9",function(t,r){e(t.exports,"API_URL",()=>n),e(t.exports,"TIMEOUT_SEC",()=>a),e(t.exports,"RES_PER_PAGE",()=>i);let n="https://forkify-api.herokuapp.com/api/v2/recipes",a=10,i=10}),l("i9R9q",function(t,r){e(t.exports,"getJSON",()=>a);var n=c("fZ5A9");let a=async function(e){try{var t;let r=await Promise.race([fetch(e),(t=n.TIMEOUT_SEC,new Promise(function(e,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${t} second`))},1e3*t)}))]),a=await r.json();if(!r.ok)throw Error(`${a.message} (${r.status})`);return a}catch(e){throw e}}}),c("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.3ab3200b.js","eyyUD","icons.c14567a0.svg"]'));var d=c("1is5Y"),u={};u=new URL("icons.c14567a0.svg",import.meta.url).toString(),(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,a=num.split(" ");if(a[0]&&(r=a[0]),a[1]&&(n=a[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var i=r.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var a=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=a,this.denominator/=a,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),a=Fraction.primeFactors(t);return(n.forEach(function(e){var t=a.indexOf(e);t>=0&&(r.push(e),a.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},a=Fraction;class p{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));console.log(r),r.forEach((e,t)=>{let r=n[t];console.log(r,e.isEqualNode(r)),e.isEqualNode(r)||""===e.firstChild.nodeValue.trim()||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
              <svg>
                <use href="${t(u)}#icon-loader"></use>
              </svg>
            </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let r=`
  <div class="error">
              <div>
                <svg>
                  <use href="${t(u)}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${e}</p>
            </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMesssage(e=this._successMessage){let r=`
  <div class="message">
              <div>
                <svg>
                  <use href="${t(u)}#icon-smile"></use>
                </svg>
              </div>
              <p>${e}</p>
            </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}class h extends p{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_successMessage="";addHandlerRender(e){["haschange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServing(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&(console.log("clicked"),e())})}_generateMarkup(){return`<figure class="recipe__fig">
    <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${t(u)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${t(u)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings-1}>
          <svg>
            <use href="${t(u)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings+1}>
          <svg>
            <use href="${t(u)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="${t(u)}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round btn--bookmark ">
      <svg class="">
        <use href="${t(u)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
       </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${t(u)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`}_generateMarkupIngredient(e){return`
        <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${t(u)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?new a(e.quantity).toString():""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>`}}var g=new h;class m{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this.clearInput(),e}clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var _=new m,f=new class extends p{_parentElement="";_generateMarkup(e){let t=window.location.hash.slice(1);return`
    <li class="preview">
    <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="#${this._data.id}">
      <figure class="preview__fig">
        <img src="${this._data.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._data.title}</h4>
        <p class="preview__publisher">${this._data.publisher}</p>
    
        </div>
      </div>
    </a>
  </li>
    `}};class v extends p{_parentElement=document.querySelector(".recipe");_errorMessage="No recipe found for your query! please try again";_successMessage="";_parentElement=document.querySelector(".results");_generateMarkup(){return console.log(this._data),this._data.map(e=>f.render(e,!1)).join("")}}var k=new v;class b extends p{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;console.log(r);let n=+r.dataset.goto;console.log("data goto",n),e(n)})}_generateMarkup(){let e=this._data.page;console.log("this._data",this._data);let r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(console.log(r),1===e&&r>1)?`
      <button data-goto=${e+1} class="btn--inline pagination__btn--next">
      <span>${e+1}</span>
      <svg class="search__icon">
        <use href="${t(u)}#icon-arrow-right"></use>
      </svg>
    </button> `:e===r&&r>1?`
      <button data-goto=${e-1} class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${t(u)}#icon-arrow-left"></use>
            </svg>
            <span>${e-1}</span>
          </button>`:e<r?`
      <button data-goto=${e-1} class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${t(u)}#icon-arrow-left"></use>
            </svg>
            <span>${e-1}</span>
          </button>
          <button data-goto=${e+1} class="btn--inline pagination__btn--next">
          <span>${e+1}</span>
          <svg class="search__icon">
            <use href="${t(u)}#icon-arrow-right"></use>
          </svg>
        </button>
          `:""}}var y=new b;class w extends p{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark.";_successMessage="";_parentElement=document.querySelector(".bookmarks__list");addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return console.log(this._data),this._data.map(e=>f.render(e,!1)).join("")}}var E=new w;const $=async function(){try{let e=window.location.hash.slice(1);if(console.log(e),!e)return;g.renderSpinner(),k.update(d.getSearchResultsPage()),E.update(d.state.bookmarks),await d.loadRecipe(e),g.render(d.state.recipe)}catch(e){g.renderError()}},S=async function(){try{k.renderSpinner();let e=_.getQuery();if(!e)return;await d.loadSearchResults(e),console.log(d.state.search.results),k.render(d.getSearchResultsPage()),console.log("model page no",d.state.search.page),y.render(d.state.search)}catch(e){console.log(e)}};E.addHandlerRender(function(){E.render(d.state.bookmarks)}),g.addHandlerRender($),_.addHandlerSearch(S),window.addEventListener("hashchange",$),window.addEventListener("load",$),y.addHandlerClick(function(e){console.log("pag controller",e),k.render(d.getSearchResultsPage(e)),y.render(d.state.search)}),g.addHandlerUpdateServing(function(e){d.updateServings(e),g.update(d.state.recipe)}),g.addHandlerAddBookmark(function(){console.log(d.state.recipe),d.state.recipe.bookmarked?(console.log(!1),d.deleteBookmark(d.state.recipe.id)):d.addBookmark(d.state.recipe),g.render(d.state.recipe),E.render(d.state.bookmarks)});
//# sourceMappingURL=index.3ab3200b.js.map
