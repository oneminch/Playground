import"./modulepreload-polyfill.b7f2da20.js";/* empty css              */import{Q as o,a as s}from"./axios.f2edd1e8.js";const a={"css-tinker":["css","fundamentals","content","hacks"],"drag-n-drop":["drag-and-drop","vanilla-js","windi-css"],"landing-page":["parallax","lightbox"],"random-jokes":["petite-vue","water-css","humor-api"]};Object.keys(a).forEach(e=>{let t=`
		<a
			class="exp-link"
			href="./${e}/index.html"
			target="_blank"
			rel="noopener noreferer">
			<div class="w-full flex flex-col justify-between items-start">
				<p class="text-lg mb-2 pl-2 font-extrabold">
					${e}
				</p>

				<div>`;a[e].forEach(r=>{t+='<span class="tag">'+r+"</span>"}),t+=`	
				</div>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
			</svg>
		</a>`,document.querySelector("#app").innerHTML+=t});const n=document.querySelectorAll(".card");n.forEach(e=>{e.addEventListener("dragstart",t=>{t.dataTransfer.setData("text/plain",t.target.id)})});document.addEventListener("drop",e=>{e.preventDefault(),e.target.classList.contains("dropzone")&&(e.target.appendChild(e.dataTransfer.mozSourceNode),e.target.classList.remove("bg-gray-200"),e.target.classList.add("bg-gray-100"))});document.addEventListener("dragleave",e=>{e.preventDefault(),e.target.classList.contains("dropzone")&&(e.target.classList.remove("bg-gray-200"),e.target.classList.add("bg-gray-100"))});document.addEventListener("dragover",e=>{e.preventDefault(),e.target.classList.contains("dropzone")&&(e.target.classList.remove("bg-gray-100"),e.target.classList.add("bg-gray-200"))});document.querySelectorAll(".outline-link").forEach(e=>e.addEventListener("click",t=>{t.preventDefault(),window.scrollTo({behavior:"smooth",top:document.querySelector(t.currentTarget.attributes.href.nodeValue).getBoundingClientRect().top-document.body.getBoundingClientRect().top-5})}));o({joke:"",modal:!1,get showQuote(){return this.joke.length>0},hideModal(){this.modal=!1},fetchNewJoke(){let e=this;s.get("https://api.humorapi.com/jokes/random?api-key=c1be3de018d14210981b291d6e2b3dde").then(function(t){e.joke=t.data.joke}).catch(function(t){e.modal=!0,console.log(t)})}}).mount();
