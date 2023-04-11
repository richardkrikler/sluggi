import*as t from"@typo3/core/document-service.js";import*as e from"@typo3/core/event/regular-event.js";var n={d:(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},i={};n.d(i,{Z:()=>s});const o=(r={default:()=>t.default},l={},n.d(l,r),l);var r,l;const u=(t=>{var e={};return n.d(e,t),e})({default:()=>e.default});var c;!function(t){t.toggleButton=".t3js-form-field-slug-toggle",t.recreateButton=".t3js-form-field-slug-recreate",t.inputField=".t3js-form-field-slug-input",t.readOnlyField=".t3js-form-field-slug-readonly",t.hiddenField=".t3js-form-field-slug-hidden",t.synchronizationToggleButton='input[data-formengine-input-name$="[tx_sluggi_sync]"]',t.lockToggleButton='input[data-formengine-input-name$="[slug_locked]"]'}(c||(c={}));const s=new(function(){function t(){var t=this;this.slugWrapperElement=null,this.slugWrapperElement=document.querySelector('div[id^="t3js-form-field-slug-id"]'),o.default.ready().then((function(e){t.setDefaults(),t.registerEvents()}))}return t.prototype.setDefaults=function(){this.synchronizationActive()?this.disableSlugEditingFunctions("Synchronization active"):this.lockActive()&&this.disableSlugEditingFunctions("Lock active")},t.prototype.registerEvents=function(){this.registerSynchronizationToggleEvents(),this.registerLockToggleEvents(),this.registerSlugImpactBlurEvents(),this.registerInputDoubleClickEvents()},t.prototype.enableSlugEditingFunctions=function(){var t=this.slugWrapperElement.querySelector(c.toggleButton),e=this.slugWrapperElement.querySelector(c.recreateButton);t.style.display="inline-flex",e.style.visibility="visible",e.style.position="relative",e.parentElement.removeAttribute("title")},t.prototype.disableSlugEditingFunctions=function(t){var e=this.slugWrapperElement.querySelector(c.toggleButton),n=this.slugWrapperElement.querySelector(c.recreateButton);e.style.display="none",n.style.visibility="hidden",n.style.position="absolute",n.parentElement.setAttribute("title",t)},t.prototype.registerSynchronizationToggleEvents=function(){var t=this,e=document.querySelector(c.synchronizationToggleButton),n=document.querySelector(c.lockToggleButton),i=this.slugWrapperElement.querySelector(c.inputField);e&&new u.default("click",(function(o){"1"===document.querySelector('input[name="'+e.getAttribute("data-formengine-input-name")+'"]').value?(t.lockActive()||t.enableSlugEditingFunctions(),i.dataset.txSluggiSync="0"):(t.triggerSlugProposal(),i.dataset.txSluggiSync="1",t.lockActive()&&n.click(),window.setTimeout((function(){t.disableSlugEditingFunctions("Synchronization active")}),100))})).bindTo(e)},t.prototype.registerLockToggleEvents=function(){var t=this,e=document.querySelector(c.lockToggleButton),n=document.querySelector(c.synchronizationToggleButton),i=this.slugWrapperElement.querySelector(c.inputField);e&&new u.default("click",(function(o){"1"===document.querySelector('input[name="'+e.getAttribute("data-formengine-input-name")+'"]').value?(t.synchronizationActive()||t.enableSlugEditingFunctions(),i.dataset.txSluggiLock="0"):(i.dataset.txSluggiLock="1",t.synchronizationActive()&&n.click(),window.setTimeout((function(){t.disableSlugEditingFunctions("Lock active")}),100))})).bindTo(e)},t.prototype.registerSlugImpactBlurEvents=function(){var t=this;document.querySelectorAll(".slug-impact").forEach((function(e){new u.default("blur",(function(e){t.synchronizationActive()&&t.triggerSlugProposal()})).bindTo(e)}))},t.prototype.registerInputDoubleClickEvents=function(){var t=this,e=this.slugWrapperElement.querySelector(c.readOnlyField),n=this.slugWrapperElement.querySelector(c.inputField);e.addEventListener("dblclick",(function(){if(!t.synchronizationActive()&&!t.lockActive()){var e=t.slugWrapperElement.querySelector(c.toggleButton),i=function(){e.click(),n.removeEventListener("blur",i)};n.addEventListener("blur",i),e.click()}}))},t.prototype.triggerSlugProposal=function(){this.slugWrapperElement.querySelector(c.recreateButton).click()},t.prototype.synchronizationActive=function(){var t=this.slugWrapperElement.querySelector(c.inputField),e=!1;return parseInt(t.dataset.txSluggiSync)&&(e=!0),e},t.prototype.lockActive=function(){var t=this.slugWrapperElement.querySelector(c.inputField),e=!1;return parseInt(t.dataset.txSluggiLock)&&(e=!0),e},t}());var a=i.Z;export{a as default};