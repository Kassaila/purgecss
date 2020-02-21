"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var PurgeCSS=require("purgecss"),PurgeCSS__default=_interopDefault(PurgeCSS);function getAvailableFiles(e,t=[]){return t.filter(t=>!!e.file.exists(t)||(e.log.warn(`Source file "${t}" not found.`),!1))}function gruntPurgeCSS(e){e.registerMultiTask("purgecss","Grunt plugin for PurgeCSS",(function(){const t=this.async(),r=this.options(PurgeCSS.defaultOptions);for(const u of this.files){const i=getAvailableFiles(e,u.src);(new PurgeCSS__default).purge({...r,css:i}).then(r=>{e.file.write(u.dest,r[0].css),e.log.writeln(`File "${u.dest}" created.`),t()}).catch(()=>{t(!1)})}}))}module.exports=gruntPurgeCSS;
