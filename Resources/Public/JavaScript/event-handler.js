import*as t from"@typo3/core/ajax/ajax-request.js";import*as e from"@typo3/backend/notification.js";import*as r from"@typo3/backend/action-button/deferred-action.js";var n={d:(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},o={};n.d(o,{Z:()=>f});const a=(i={default:()=>t.default},u={},n.d(u,i),u);var i,u;const c=(t=>{var e={};return n.d(e,t),e})({default:()=>e.default}),l=(t=>{var e={};return n.d(e,t),e})({default:()=>r.default});var s=function(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{c(n.next(t))}catch(t){a(t)}}function u(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,u)}c((n=n.apply(t,e||[])).next())}))},d=function(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(c){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(i=0)),i;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,n=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=e.call(t,i)}catch(t){u=[6,t],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}};const f=new(function(){function t(){var t=this;document.addEventListener("typo3:redirects:slugChanged",(function(e){return t.onSlugChanged(e.detail)}))}return t.prototype.dispatchCustomEvent=function(t,e){void 0===e&&(e=null);var r=new CustomEvent(t,{detail:e});document.dispatchEvent(r)},t.prototype.onSlugChanged=function(t){var e=this,r=[],n=t.correlations;t.autoUpdateSlugs&&r.push({label:TYPO3.lang["notification.redirects.button.revert_update"],action:new l.default((function(){return s(e,void 0,void 0,(function(){return d(this,(function(t){switch(t.label){case 0:return[4,this.revert([n.correlationIdSlugUpdate,n.correlationIdRedirectCreation])];case 1:return t.sent(),[2]}}))}))}))}),t.autoCreateRedirects&&r.push({label:TYPO3.lang["notification.redirects.button.revert_redirect"],action:new l.default((function(){return s(e,void 0,void 0,(function(){return d(this,(function(t){switch(t.label){case 0:return[4,this.revert([n.correlationIdRedirectCreation])];case 1:return t.sent(),[2]}}))}))}))});var o=TYPO3.lang["notification.slug_only.title"],a=TYPO3.lang["notification.slug_only.message"];t.autoCreateRedirects&&(o=TYPO3.lang["notification.slug_and_redirects.title"],a=TYPO3.lang["notification.slug_and_redirects.message"]),c.default.info(o,a,60,r)},t.prototype.revert=function(t){var e=this,r=new a.default(TYPO3.settings.ajaxUrls.redirects_revert_correlation).withQueryArguments({correlation_ids:t}).get();return r.then((function(t){return s(e,void 0,void 0,(function(){var e;return d(this,(function(r){switch(r.label){case 0:return[4,t.resolve()];case 1:return"ok"===(e=r.sent()).status&&c.default.success(e.title,e.message),"error"===e.status&&c.default.error(e.title,e.message),[2]}}))}))})).catch((function(){c.default.error(TYPO3.lang.redirects_error_title,TYPO3.lang.redirects_error_message)})),r},t}());var p=o.Z;export{p as default};