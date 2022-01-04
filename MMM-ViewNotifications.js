/*
 * MagicMirror² Module: MMM-ViewNotifications
 * Version: 2.0.0
 * 
 * A module to display the notifications broadcast to all modules, for the purpose of assisting in the module development process.
 * 
 * Copyright © David Dearden
 * License: MIT
 * 
 * This file is auto-generated. Do not edit.
 */

(function (moment, Log) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
    var Log__default = /*#__PURE__*/_interopDefaultLegacy(Log);

    var extendStatics=function(e,t){return (extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);})(e,t)};function __extends(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e;}extendStatics(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r);}var util,__assign=function(){return (__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function __awaiter(e,s,i,u){return new(i=i||Promise)(function(r,t){function n(e){try{o(u.next(e));}catch(e){t(e);}}function a(e){try{o(u.throw(e));}catch(e){t(e);}}function o(e){var t;e.done?r(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t);})).then(n,a);}o((u=u.apply(e,s||[])).next());})}function __generator(r,n){var a,o,s,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return "function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,o&&(s=2&t[0]?o.return:t[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,t[1])).done)return s;switch(o=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:case 1:s=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,o=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(!(s=0<(s=i.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){i=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){i.label=t[1];break}if(6===t[0]&&i.label<s[1]){i.label=s[1],s=t;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(t);break}s[2]&&i.ops.pop(),i.trys.pop();continue}t=n.call(r,i);}catch(e){t=[6,e],o=0;}finally{a=s=0;}if(5&t[0])throw t[1];return {value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return {next:function(){return {value:(e=e&&n>=e.length?void 0:e)&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,o=r.call(e),s=[];try{for(;(void 0===t||0<t--)&&!(n=o.next()).done;)s.push(n.value);}catch(e){a={error:e};}finally{try{n&&!n.done&&(r=o.return)&&r.call(o);}finally{if(a)throw a.error}}return s}function __spreadArray(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||((n=n||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}!function(u){u.assertNever=function(e){throw new Error},u.arrayToEnum=function(e){var t,r,n={};try{for(var a=__values(e),o=a.next();!o.done;o=a.next()){var s=o.value;n[s]=s;}}catch(e){t={error:e};}finally{try{o&&!o.done&&(r=a.return)&&r.call(a);}finally{if(t)throw t.error}}return n},u.getValidEnumValues=function(t){var r,e,n=u.objectKeys(t).filter(function(e){return "number"!=typeof t[t[e]]}),a={};try{for(var o=__values(n),s=o.next();!s.done;s=o.next()){var i=s.value;a[i]=t[i];}}catch(e){r={error:e};}finally{try{s&&!s.done&&(e=o.return)&&e.call(o);}finally{if(r)throw r.error}}return u.objectValues(a)},u.objectValues=function(t){return u.objectKeys(t).map(function(e){return t[e]})},u.objectKeys="function"==typeof Object.keys?function(e){return Object.keys(e)}:function(e){var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r},u.find=function(e,t){var r,n;try{for(var a=__values(e),o=a.next();!o.done;o=a.next()){var s=o.value;if(t(s))return s}}catch(e){r={error:e};}finally{try{o&&!o.done&&(n=a.return)&&n.call(a);}finally{if(r)throw r.error}}},u.isInteger="function"==typeof Number.isInteger?function(e){return Number.isInteger(e)}:function(e){return "number"==typeof e&&isFinite(e)&&Math.floor(e)===e};}(util=util||{});var ZodIssueCode=util.arrayToEnum(["invalid_type","custom","invalid_union","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of"]),quotelessJson=function(e){return JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:")},ZodError=function(r){function t(e){var t=this.constructor,u=r.call(this)||this;u.issues=[],u.format=function(){var p={_errors:[]},c=function(e){var t,r;try{for(var n=__values(e.issues),a=n.next();!a.done;a=n.next()){var o=a.value;if("invalid_union"===o.code)o.unionErrors.map(c);else if("invalid_return_type"===o.code)c(o.returnTypeError);else if("invalid_arguments"===o.code)c(o.argumentsError);else if(0===o.path.length)p._errors.push(o.message);else for(var s=p,i=0;i<o.path.length;){var u,d=o.path[i];i===o.path.length-1?(s[d]=s[d]||{_errors:[]},s[d]._errors.push(o.message)):"string"==typeof d?s[d]=s[d]||{_errors:[]}:"number"==typeof d&&((u=[])._errors=[],s[d]=s[d]||u),s=s[d],i++;}}}catch(e){t={error:e};}finally{try{a&&!a.done&&(r=n.return)&&r.call(n);}finally{if(t)throw t.error}}};return c(u),p},u.addIssue=function(e){u.issues=__spreadArray(__spreadArray([],__read(u.issues),!1),[e],!1);},u.addIssues=function(e){void 0===e&&(e=[]),u.issues=__spreadArray(__spreadArray([],__read(u.issues),!1),__read(e),!1);},u.flatten=function(e){var t,r;void 0===e&&(e=function(e){return e.message});var n={},a=[];try{for(var o=__values(u.issues),s=o.next();!s.done;s=o.next()){var i=s.value;0<i.path.length?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(e(i))):a.push(e(i));}}catch(e){t={error:e};}finally{try{s&&!s.done&&(r=o.return)&&r.call(o);}finally{if(t)throw t.error}}return {formErrors:a,fieldErrors:n}};t=t.prototype;return Object.setPrototypeOf?Object.setPrototypeOf(u,t):u.__proto__=t,u.name="ZodError",u.issues=e,u}return __extends(t,r),Object.defineProperty(t.prototype,"errors",{get:function(){return this.issues},enumerable:!1,configurable:!0}),t.prototype.toString=function(){return this.message},Object.defineProperty(t.prototype,"message",{get:function(){return JSON.stringify(this.issues,null,2)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isEmpty",{get:function(){return 0===this.issues.length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"formErrors",{get:function(){return this.flatten()},enumerable:!1,configurable:!0}),t.create=function(e){return new t(e)},t}(Error),defaultErrorMap=function(e,t){var r;switch(e.code){case ZodIssueCode.invalid_type:r="undefined"===e.received?"Required":"Expected "+e.expected+", received "+e.received;break;case ZodIssueCode.unrecognized_keys:r="Unrecognized key(s) in object: "+e.keys.map(function(e){return "'"+e+"'"}).join(", ");break;case ZodIssueCode.invalid_union:r="Invalid input";break;case ZodIssueCode.invalid_enum_value:r="Invalid enum value. Expected "+e.options.map(function(e){return "string"==typeof e?"'"+e+"'":e}).join(" | ")+", received "+("string"==typeof t.data?"'"+t.data+"'":t.data);break;case ZodIssueCode.invalid_arguments:r="Invalid function arguments";break;case ZodIssueCode.invalid_return_type:r="Invalid function return type";break;case ZodIssueCode.invalid_date:r="Invalid date";break;case ZodIssueCode.invalid_string:r="regex"!==e.validation?"Invalid "+e.validation:"Invalid";break;case ZodIssueCode.too_small:r="array"===e.type?"Should have "+(e.inclusive?"at least":"more than")+" "+e.minimum+" items":"string"===e.type?"Should be "+(e.inclusive?"at least":"over")+" "+e.minimum+" characters":"number"===e.type?"Value should be greater than "+(e.inclusive?"or equal to ":"")+e.minimum:"Invalid input";break;case ZodIssueCode.too_big:r="array"===e.type?"Should have "+(e.inclusive?"at most":"less than")+" "+e.maximum+" items":"string"===e.type?"Should be "+(e.inclusive?"at most":"under")+" "+e.maximum+" characters long":"number"===e.type?"Value should be less than "+(e.inclusive?"or equal to ":"")+e.maximum:"Invalid input";break;case ZodIssueCode.custom:r="Invalid input";break;case ZodIssueCode.invalid_intersection_types:r="Intersection results could not be merged";break;case ZodIssueCode.not_multiple_of:r="Should be multiple of "+e.multipleOf;break;default:r=t.defaultError,util.assertNever(e);}return {message:r}},overrideErrorMap=defaultErrorMap,setErrorMap=function(e){overrideErrorMap=e;},ZodParsedType=util.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]);function cacheAndReturn(e,t,r){return r&&r.set(e,t),t}var getParsedType=function(e,t){if(t&&t.has(e))return t.get(e);switch(typeof e){case"undefined":return cacheAndReturn(e,ZodParsedType.undefined,t);case"string":return cacheAndReturn(e,ZodParsedType.string,t);case"number":return cacheAndReturn(e,isNaN(e)?ZodParsedType.nan:ZodParsedType.number,t);case"boolean":return cacheAndReturn(e,ZodParsedType.boolean,t);case"function":return cacheAndReturn(e,ZodParsedType.function,t);case"bigint":return cacheAndReturn(e,ZodParsedType.bigint,t);case"object":return Array.isArray(e)?cacheAndReturn(e,ZodParsedType.array,t):null===e?cacheAndReturn(e,ZodParsedType.null,t):e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch?cacheAndReturn(e,ZodParsedType.promise,t):e instanceof Map?cacheAndReturn(e,ZodParsedType.map,t):e instanceof Set?cacheAndReturn(e,ZodParsedType.set,t):e instanceof Date?cacheAndReturn(e,ZodParsedType.date,t):cacheAndReturn(e,ZodParsedType.object,t);default:return cacheAndReturn(e,ZodParsedType.unknown,t)}},makeIssue=function(e){var t,r,n=e.data,a=e.path,o=e.errorMaps,e=e.issueData,a=__spreadArray(__spreadArray([],__read(a),!1),__read(e.path||[]),!1),s=__assign(__assign({},e),{path:a}),i="",o=o.filter(function(e){return !!e}).slice().reverse();try{for(var u=__values(o),d=u.next();!d.done;d=u.next())i=(0,d.value)(s,{data:n,defaultError:i}).message;}catch(e){t={error:e};}finally{try{d&&!d.done&&(r=u.return)&&r.call(u);}finally{if(t)throw t.error}}return __assign(__assign({},e),{path:a,message:e.message||i})},EMPTY_PATH=[];function addIssueToContext(e,t){t=makeIssue({issueData:t,data:e.data,path:e.path,errorMaps:[e.contextualErrorMap,e.schemaErrorMap,overrideErrorMap,defaultErrorMap].filter(function(e){return !!e})});e.issues.push(t);}var errorUtil,ParseStatus=function(){function l(){this.value="valid";}return l.prototype.dirty=function(){"valid"===this.value&&(this.value="dirty");},l.prototype.abort=function(){"aborted"!==this.value&&(this.value="aborted");},l.mergeArray=function(e,t){var r,n,a=[];try{for(var o=__values(t),s=o.next();!s.done;s=o.next()){var i=s.value;if("aborted"===i.status)return INVALID;"dirty"===i.status&&e.dirty(),a.push(i.value);}}catch(e){r={error:e};}finally{try{s&&!s.done&&(n=o.return)&&n.call(o);}finally{if(r)throw r.error}}return {status:e.value,value:a}},l.mergeObjectAsync=function(p,c){return __awaiter(this,void 0,void 0,function(){var t,r,n,a,o,s,i,u,d;return __generator(this,function(e){switch(e.label){case 0:t=[],e.label=1;case 1:e.trys.push([1,7,8,9]),r=__values(c),n=r.next(),e.label=2;case 2:return n.done?[3,6]:(a=n.value,s=(o=t).push,d={},[4,a.key]);case 3:return d.key=e.sent(),[4,a.value];case 4:s.apply(o,[(d.value=e.sent(),d)]),e.label=5;case 5:return n=r.next(),[3,2];case 6:return [3,9];case 7:return i=e.sent(),i={error:i},[3,9];case 8:try{n&&!n.done&&(u=r.return)&&u.call(r);}finally{if(i)throw i.error}return [7];case 9:return [2,l.mergeObjectSync(p,t)]}})})},l.mergeObjectSync=function(e,t){var r,n,a={};try{for(var o=__values(t),s=o.next();!s.done;s=o.next()){var i=s.value,u=i.key,d=i.value;if("aborted"===u.status)return INVALID;if("aborted"===d.status)return INVALID;"dirty"===u.status&&e.dirty(),"dirty"===d.status&&e.dirty(),void 0===d.value&&!i.alwaysSet||(a[u.value]=d.value);}}catch(e){r={error:e};}finally{try{s&&!s.done&&(n=o.return)&&n.call(o);}finally{if(r)throw r.error}}return {status:e.value,value:a}},l}(),INVALID=Object.freeze({status:"aborted"}),DIRTY=function(e){return {status:"dirty",value:e}},OK=function(e){return {status:"valid",value:e}},isAborted=function(e){return "aborted"===e.status},isDirty=function(e){return "dirty"===e.status},isValid=function(e){return "valid"===e.status},isAsync=function(e){return e instanceof Promise};!function(e){e.errToObj=function(e){return "string"==typeof e?{message:e}:e||{}},e.toString=function(e){return "string"==typeof e?e:null==e?void 0:e.message};}(errorUtil=errorUtil||{});var handleResult=function(e,t){if(isValid(t))return {success:!0,data:t.value};if(!e.issues.length)throw new Error("Validation failed but no issues detected.");return {success:!1,error:new ZodError(e.issues)}};function processCreateParams(r){if(!r)return {};if(r.errorMap&&(r.invalid_type_error||r.required_error))throw new Error('Can\'t use "invalid" or "required" in conjunction with custom error map.');if(r.errorMap)return {errorMap:r.errorMap};return {errorMap:function(e,t){return "invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data&&r.required_error?{message:r.required_error}:r.invalid_type_error?{message:r.invalid_type_error}:{message:t.defaultError}}}}var objectUtil,ZodType=function(){function e(e){this.spa=this.safeParseAsync,this.superRefine=this._refinement,this._def=e,this.transform=this.transform.bind(this),this.default=this.default.bind(this);}return Object.defineProperty(e.prototype,"description",{get:function(){return this._def.description},enumerable:!1,configurable:!0}),e.prototype._processInputParams=function(e){return {status:new ParseStatus,ctx:__assign(__assign({},e.parent),{data:e.data,parsedType:getParsedType(e.data,e.parent.typeCache),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent})}},e.prototype._parseSync=function(e){e=this._parse(e);if(isAsync(e))throw new Error("Synchronous parse encountered promise.");return e},e.prototype._parseAsync=function(e){e=this._parse(e);return Promise.resolve(e)},e.prototype.parse=function(e,t){t=this.safeParse(e,t);if(t.success)return t.data;throw t.error},e.prototype.safeParse=function(e,t){t={path:(null==t?void 0:t.path)||[],issues:[],contextualErrorMap:null==t?void 0:t.errorMap,schemaErrorMap:this._def.errorMap,async:null!==(t=null==t?void 0:t.async)&&void 0!==t&&t,typeCache:new Map,parent:null,data:e,parsedType:getParsedType(e)},e=this._parseSync({data:e,path:t.path,parent:t});return handleResult(t,e)},e.prototype.parseAsync=function(r,n){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return [4,this.safeParseAsync(r,n)];case 1:if((t=e.sent()).success)return [2,t.data];throw t.error}})})},e.prototype.safeParseAsync=function(n,a){return __awaiter(this,void 0,void 0,function(){var t,r;return __generator(this,function(e){switch(e.label){case 0:return t={path:(null==a?void 0:a.path)||[],issues:[],contextualErrorMap:null==a?void 0:a.errorMap,schemaErrorMap:this._def.errorMap,async:!0,typeCache:new Map,parent:null,data:n,parsedType:getParsedType(n)},r=this._parse({data:n,path:[],parent:t}),[4,isAsync(r)?r:Promise.resolve(r)];case 1:return r=e.sent(),[2,handleResult(t,r)]}})})},e.prototype.refine=function(a,o){return this._refinement(function(t,r){function n(){return r.addIssue(__assign({code:ZodIssueCode.custom},(e=t,"string"==typeof o||void 0===o?{message:o}:"function"==typeof o?o(e):o)));var e;}var e=a(t);return e instanceof Promise?e.then(function(e){return !!e||(n(),!1)}):!!e||(n(),!1)})},e.prototype.refinement=function(r,n){return this._refinement(function(e,t){return !!r(e)||(t.addIssue("function"==typeof n?n(e,t):n),!1)})},e.prototype._refinement=function(e){return new ZodEffects({schema:this,typeName:ZodFirstPartyTypeKind.ZodEffects,effect:{type:"refinement",refinement:e}})},e.prototype.optional=function(){return ZodOptional.create(this)},e.prototype.nullable=function(){return ZodNullable.create(this)},e.prototype.nullish=function(){return this.optional().nullable()},e.prototype.array=function(){return ZodArray.create(this)},e.prototype.promise=function(){return ZodPromise.create(this)},e.prototype.or=function(e){return ZodUnion.create([this,e])},e.prototype.and=function(e){return ZodIntersection.create(this,e)},e.prototype.transform=function(e){return new ZodEffects({schema:this,typeName:ZodFirstPartyTypeKind.ZodEffects,effect:{type:"transform",transform:e}})},e.prototype.default=function(e){return new ZodDefault({innerType:this,defaultValue:"function"==typeof e?e:function(){return e},typeName:ZodFirstPartyTypeKind.ZodDefault})},e.prototype.describe=function(e){return new this.constructor(__assign(__assign({},this._def),{description:e}))},e.prototype.isOptional=function(){return this.safeParse(void 0).success},e.prototype.isNullable=function(){return this.safeParse(null).success},e}(),cuidRegex=/^c[^\s-]{8,}$/i,uuidRegex=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,emailRegex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,ZodString=function(e){function t(){var n=null!==e&&e.apply(this,arguments)||this;return n._regex=function(t,e,r){return n.refinement(function(e){return t.test(e)},__assign({validation:e,code:ZodIssueCode.invalid_string},errorUtil.errToObj(r)))},n.nonempty=function(e){return n.min(1,errorUtil.errToObj(e))},n}return __extends(t,e),t.prototype._parse=function(e){var t,r,e=this._processInputParams(e),n=e.status,a=e.ctx;if(a.parsedType!==ZodParsedType.string)return addIssueToContext(a,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.string,received:a.parsedType}),INVALID;try{for(var o=__values(this._def.checks),s=o.next();!s.done;s=o.next()){var i=s.value;if("min"===i.kind)a.data.length<i.value&&(addIssueToContext(a,{code:ZodIssueCode.too_small,minimum:i.value,type:"string",inclusive:!0,message:i.message}),n.dirty());else if("max"===i.kind)a.data.length>i.value&&(addIssueToContext(a,{code:ZodIssueCode.too_big,maximum:i.value,type:"string",inclusive:!0,message:i.message}),n.dirty());else if("email"===i.kind)emailRegex.test(a.data)||(addIssueToContext(a,{validation:"email",code:ZodIssueCode.invalid_string,message:i.message}),n.dirty());else if("uuid"===i.kind)uuidRegex.test(a.data)||(addIssueToContext(a,{validation:"uuid",code:ZodIssueCode.invalid_string,message:i.message}),n.dirty());else if("cuid"===i.kind)cuidRegex.test(a.data)||(addIssueToContext(a,{validation:"cuid",code:ZodIssueCode.invalid_string,message:i.message}),n.dirty());else if("url"===i.kind)try{new URL(a.data);}catch(e){addIssueToContext(a,{validation:"url",code:ZodIssueCode.invalid_string,message:i.message}),n.dirty();}else "regex"===i.kind&&(i.regex.lastIndex=0,i.regex.test(a.data)||(addIssueToContext(a,{validation:"regex",code:ZodIssueCode.invalid_string,message:i.message}),n.dirty()));}}catch(e){t={error:e};}finally{try{s&&!s.done&&(r=o.return)&&r.call(o);}finally{if(t)throw t.error}}return {status:n.value,value:a.data}},t.prototype._addCheck=function(e){return new t(__assign(__assign({},this._def),{checks:__spreadArray(__spreadArray([],__read(this._def.checks),!1),[e],!1)}))},t.prototype.email=function(e){return this._addCheck(__assign({kind:"email"},errorUtil.errToObj(e)))},t.prototype.url=function(e){return this._addCheck(__assign({kind:"url"},errorUtil.errToObj(e)))},t.prototype.uuid=function(e){return this._addCheck(__assign({kind:"uuid"},errorUtil.errToObj(e)))},t.prototype.cuid=function(e){return this._addCheck(__assign({kind:"cuid"},errorUtil.errToObj(e)))},t.prototype.regex=function(e,t){return this._addCheck(__assign({kind:"regex",regex:e},errorUtil.errToObj(t)))},t.prototype.min=function(e,t){return this._addCheck(__assign({kind:"min",value:e},errorUtil.errToObj(t)))},t.prototype.max=function(e,t){return this._addCheck(__assign({kind:"max",value:e},errorUtil.errToObj(t)))},t.prototype.length=function(e,t){return this.min(e,t).max(e,t)},Object.defineProperty(t.prototype,"isEmail",{get:function(){return !!this._def.checks.find(function(e){return "email"===e.kind})},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isURL",{get:function(){return !!this._def.checks.find(function(e){return "url"===e.kind})},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isUUID",{get:function(){return !!this._def.checks.find(function(e){return "uuid"===e.kind})},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isCUID",{get:function(){return !!this._def.checks.find(function(e){return "cuid"===e.kind})},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"minLength",{get:function(){var t=-1/0;return this._def.checks.map(function(e){"min"===e.kind&&(null===t||e.value>t)&&(t=e.value);}),t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxLength",{get:function(){var t=null;return this._def.checks.map(function(e){"max"===e.kind&&(null===t||e.value<t)&&(t=e.value);}),t},enumerable:!1,configurable:!0}),t.create=function(e){return new t(__assign({checks:[],typeName:ZodFirstPartyTypeKind.ZodString},processCreateParams(e)))},t}(ZodType),ZodNumber=function(t){function a(){var e=null!==t&&t.apply(this,arguments)||this;return e.min=e.gte,e.max=e.lte,e.step=e.multipleOf,e}return __extends(a,t),a.prototype._parse=function(e){var t,r,e=this._processInputParams(e),n=e.status,a=e.ctx;if(a.parsedType!==ZodParsedType.number)return addIssueToContext(a,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.number,received:a.parsedType}),INVALID;try{for(var o=__values(this._def.checks),s=o.next();!s.done;s=o.next()){var i=s.value;"int"===i.kind?util.isInteger(a.data)||(addIssueToContext(a,{code:ZodIssueCode.invalid_type,expected:"integer",received:"float",message:i.message}),n.dirty()):"min"===i.kind?(i.inclusive?a.data<i.value:a.data<=i.value)&&(addIssueToContext(a,{code:ZodIssueCode.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,message:i.message}),n.dirty()):"max"===i.kind?(i.inclusive?a.data>i.value:a.data>=i.value)&&(addIssueToContext(a,{code:ZodIssueCode.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,message:i.message}),n.dirty()):"multipleOf"===i.kind?a.data%i.value!=0&&(addIssueToContext(a,{code:ZodIssueCode.not_multiple_of,multipleOf:i.value,message:i.message}),n.dirty()):util.assertNever(i);}}catch(e){t={error:e};}finally{try{s&&!s.done&&(r=o.return)&&r.call(o);}finally{if(t)throw t.error}}return {status:n.value,value:a.data}},a.prototype.gte=function(e,t){return this.setLimit("min",e,!0,errorUtil.toString(t))},a.prototype.gt=function(e,t){return this.setLimit("min",e,!1,errorUtil.toString(t))},a.prototype.lte=function(e,t){return this.setLimit("max",e,!0,errorUtil.toString(t))},a.prototype.lt=function(e,t){return this.setLimit("max",e,!1,errorUtil.toString(t))},a.prototype.setLimit=function(e,t,r,n){return new a(__assign(__assign({},this._def),{checks:__spreadArray(__spreadArray([],__read(this._def.checks),!1),[{kind:e,value:t,inclusive:r,message:errorUtil.toString(n)}],!1)}))},a.prototype._addCheck=function(e){return new a(__assign(__assign({},this._def),{checks:__spreadArray(__spreadArray([],__read(this._def.checks),!1),[e],!1)}))},a.prototype.int=function(e){return this._addCheck({kind:"int",message:errorUtil.toString(e)})},a.prototype.positive=function(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:errorUtil.toString(e)})},a.prototype.negative=function(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:errorUtil.toString(e)})},a.prototype.nonpositive=function(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:errorUtil.toString(e)})},a.prototype.nonnegative=function(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:errorUtil.toString(e)})},a.prototype.multipleOf=function(e,t){return this._addCheck({kind:"multipleOf",value:e,message:errorUtil.toString(t)})},Object.defineProperty(a.prototype,"minValue",{get:function(){var t,e,r=null;try{for(var n=__values(this._def.checks),a=n.next();!a.done;a=n.next()){var o=a.value;"min"===o.kind&&(null===r||o.value>r)&&(r=o.value);}}catch(e){t={error:e};}finally{try{a&&!a.done&&(e=n.return)&&e.call(n);}finally{if(t)throw t.error}}return r},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"maxValue",{get:function(){var t,e,r=null;try{for(var n=__values(this._def.checks),a=n.next();!a.done;a=n.next()){var o=a.value;"max"===o.kind&&(null===r||o.value<r)&&(r=o.value);}}catch(e){t={error:e};}finally{try{a&&!a.done&&(e=n.return)&&e.call(n);}finally{if(t)throw t.error}}return r},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"isInt",{get:function(){return !!this._def.checks.find(function(e){return "int"===e.kind})},enumerable:!1,configurable:!0}),a.create=function(e){return new a(__assign(__assign({checks:[],typeName:ZodFirstPartyTypeKind.ZodNumber},processCreateParams(e)),processCreateParams(e)))},a}(ZodType),ZodBigInt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._parse=function(e){e=this._processInputParams(e).ctx;return e.parsedType!==ZodParsedType.bigint?(addIssueToContext(e,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.bigint,received:e.parsedType}),INVALID):OK(e.data)},t.create=function(e){return new t(__assign({typeName:ZodFirstPartyTypeKind.ZodBigInt},processCreateParams(e)))},t}(ZodType),ZodBoolean=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._parse=function(e){e=this._processInputParams(e).ctx;return e.parsedType!==ZodParsedType.boolean?(addIssueToContext(e,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.boolean,received:e.parsedType}),INVALID):OK(e.data)},t.create=function(e){return new t(__assign({typeName:ZodFirstPartyTypeKind.ZodBoolean},processCreateParams(e)))},t}(ZodType),ZodDate=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._parse=function(e){var t=this._processInputParams(e),e=t.status,t=t.ctx;return t.parsedType!==ZodParsedType.date?(addIssueToContext(t,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.date,received:t.parsedType}),INVALID):isNaN(t.data.getTime())?(addIssueToContext(t,{code:ZodIssueCode.invalid_date}),INVALID):{status:e.value,value:new Date(t.data.getTime())}},t.create=function(e){return new t(__assign({typeName:ZodFirstPartyTypeKind.ZodDate},processCreateParams(e)))},t}(ZodType),ZodUndefined=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._parse=function(e){e=this._processInputParams(e).ctx;return e.parsedType!==ZodParsedType.undefined?(addIssueToContext(e,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.undefined,received:e.parsedType}),INVALID):OK(e.data)},t.create=function(e){return new t(__assign({typeName:ZodFirstPartyTypeKind.ZodUndefined},processCreateParams(e)))},t}(ZodType),ZodNull=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._parse=function(e){e=this._processInputParams(e).ctx;return e.parsedType!==ZodParsedType.null?(addIssueToContext(e,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.null,received:e.parsedType}),INVALID):OK(e.data)},t.create=function(e){return new t(__assign({typeName:ZodFirstPartyTypeKind.ZodNull},processCreateParams(e)))},t}(ZodType),ZodAny=function(t){function r(){var e=null!==t&&t.apply(this,arguments)||this;return e._any=!0,e}return __extends(r,t),r.prototype._parse=function(e){e=this._processInputParams(e).ctx;return OK(e.data)},r.create=function(e){return new r(__assign({typeName:ZodFirstPartyTypeKind.ZodAny},processCreateParams(e)))},r}(ZodType),ZodUnknown=function(t){function r(){var e=null!==t&&t.apply(this,arguments)||this;return e._unknown=!0,e}return __extends(r,t),r.prototype._parse=function(e){e=this._processInputParams(e).ctx;return OK(e.data)},r.create=function(e){return new r(__assign({typeName:ZodFirstPartyTypeKind.ZodUnknown},processCreateParams(e)))},r}(ZodType),ZodNever=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._parse=function(e){e=this._processInputParams(e).ctx;return addIssueToContext(e,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.never,received:e.parsedType}),INVALID},t.create=function(e){return new t(__assign({typeName:ZodFirstPartyTypeKind.ZodNever},processCreateParams(e)))},t}(ZodType),ZodVoid=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._parse=function(e){e=this._processInputParams(e).ctx;return e.parsedType!==ZodParsedType.undefined?(addIssueToContext(e,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.void,received:e.parsedType}),INVALID):OK(e.data)},t.create=function(e){return new t(__assign({typeName:ZodFirstPartyTypeKind.ZodVoid},processCreateParams(e)))},t}(ZodType),ZodArray=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),r.prototype._parse=function(e){var e=this._processInputParams(e),t=e.status,r=e.ctx,n=this._def;if(r.parsedType!==ZodParsedType.array)return addIssueToContext(r,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.array,received:r.parsedType}),INVALID;if(null!==n.minLength&&r.data.length<n.minLength.value&&(addIssueToContext(r,{code:ZodIssueCode.too_small,minimum:n.minLength.value,type:"array",inclusive:!0,message:n.minLength.message}),t.dirty()),null!==n.maxLength&&r.data.length>n.maxLength.value&&(addIssueToContext(r,{code:ZodIssueCode.too_big,maximum:n.maxLength.value,type:"array",inclusive:!0,message:n.maxLength.message}),t.dirty()),r.async)return Promise.all(r.data.map(function(e,t){return n.type._parseAsync({parent:r,path:__spreadArray(__spreadArray([],__read(r.path),!1),[t],!1),data:e})})).then(function(e){return ParseStatus.mergeArray(t,e)});e=r.data.map(function(e,t){return n.type._parseSync({parent:r,path:__spreadArray(__spreadArray([],__read(r.path),!1),[t],!1),data:e})});return ParseStatus.mergeArray(t,e)},Object.defineProperty(r.prototype,"element",{get:function(){return this._def.type},enumerable:!1,configurable:!0}),r.prototype.min=function(e,t){return new r(__assign(__assign({},this._def),{minLength:{value:e,message:errorUtil.toString(t)}}))},r.prototype.max=function(e,t){return new r(__assign(__assign({},this._def),{maxLength:{value:e,message:errorUtil.toString(t)}}))},r.prototype.length=function(e,t){return this.min(e,t).max(e,t)},r.prototype.nonempty=function(e){return this.min(1,e)},r.create=function(e,t){return new r(__assign({type:e,minLength:null,maxLength:null,typeName:ZodFirstPartyTypeKind.ZodArray},processCreateParams(t)))},r}(ZodType);(objectUtil||(objectUtil={})).mergeShapes=function(e,t){return __assign(__assign({},e),t)};var AugmentFactory=function(t){return function(e){return new ZodObject(__assign(__assign({},t),{shape:function(){return __assign(__assign({},t.shape()),e)}}))}};function deepPartialify(e){if(e instanceof ZodObject){var t,r={};for(t in e.shape){var n=e.shape[t];r[t]=ZodOptional.create(deepPartialify(n));}return new ZodObject(__assign(__assign({},e._def),{shape:function(){return r}}))}return e instanceof ZodArray?ZodArray.create(deepPartialify(e.element)):e instanceof ZodOptional?ZodOptional.create(deepPartialify(e.unwrap())):e instanceof ZodNullable?ZodNullable.create(deepPartialify(e.unwrap())):e instanceof ZodTuple?ZodTuple.create(e.items.map(function(e){return deepPartialify(e)})):e}var ZodObject=function(t){function s(){var e=null!==t&&t.apply(this,arguments)||this;return e._cached=null,e.nonstrict=e.passthrough,e.augment=AugmentFactory(e._def),e.extend=AugmentFactory(e._def),e}return __extends(s,t),s.prototype._getCached=function(){if(null!==this._cached)return this._cached;var e=this._def.shape(),t=util.objectKeys(e);return this._cached={shape:e,keys:t}},s.prototype._parse=function(e){var t,r,n,a,o,s=this,i=this._processInputParams(e),u=i.status,d=i.ctx;if(d.parsedType!==ZodParsedType.object)return addIssueToContext(d,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.object,received:d.parsedType}),INVALID;var e=this._getCached(),p=e.shape,i=e.keys,e=util.objectKeys(d.data).filter(function(e){return !(e in p)}),c=[];try{for(var l=__values(i),y=l.next();!y.done;y=l.next()){var f=y.value,_=p[f],h=d.data[f];c.push({key:{status:"valid",value:f},value:_._parse({parent:d,data:h,path:__spreadArray(__spreadArray([],__read(d.path),!1),[f],!1)}),alwaysSet:f in d.data});}}catch(e){v={error:e};}finally{try{y&&!y.done&&(t=l.return)&&t.call(l);}finally{if(v)throw v.error}}if(this._def.catchall instanceof ZodNever){var v=this._def.unknownKeys;if("passthrough"===v)try{for(var m=__values(e),Z=m.next();!Z.done;Z=m.next()){f=Z.value;c.push({key:{status:"valid",value:f},value:{status:"valid",value:d.data[f]}});}}catch(e){r={error:e};}finally{try{Z&&!Z.done&&(n=m.return)&&n.call(m);}finally{if(r)throw r.error}}else if("strict"===v)0<e.length&&(addIssueToContext(d,{code:ZodIssueCode.unrecognized_keys,keys:e}),u.dirty());else if("strip"!==v)throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else {var g=this._def.catchall;try{for(var T=__values(e),b=T.next();!b.done;b=T.next()){f=b.value,h=d.data[f];c.push({key:{status:"valid",value:f},value:g._parse({parent:d,path:__spreadArray(__spreadArray([],__read(d.path),!1),[f],!1),data:h}),alwaysSet:f in d.data});}}catch(e){a={error:e};}finally{try{b&&!b.done&&(o=T.return)&&o.call(T);}finally{if(a)throw a.error}}}return d.async?Promise.resolve().then(function(){return __awaiter(s,void 0,void 0,function(){var t,r,n,a,o,s,i,u,d;return __generator(this,function(e){switch(e.label){case 0:t=[],e.label=1;case 1:e.trys.push([1,7,8,9]),r=__values(c),n=r.next(),e.label=2;case 2:return n.done?[3,6]:[4,(a=n.value).key];case 3:return d=e.sent(),s=(o=t).push,d={key:d},[4,a.value];case 4:s.apply(o,[(d.value=e.sent(),d.alwaysSet=a.alwaysSet,d)]),e.label=5;case 5:return n=r.next(),[3,2];case 6:return [3,9];case 7:return i=e.sent(),i={error:i},[3,9];case 8:try{n&&!n.done&&(u=r.return)&&u.call(r);}finally{if(i)throw i.error}return [7];case 9:return [2,t]}})})}).then(function(e){return ParseStatus.mergeObjectSync(u,e)}):ParseStatus.mergeObjectSync(u,c)},Object.defineProperty(s.prototype,"shape",{get:function(){return this._def.shape()},enumerable:!1,configurable:!0}),s.prototype.strict=function(a){var o=this;return errorUtil.errToObj,new s(__assign(__assign(__assign({},this._def),{unknownKeys:"strict"}),void 0!==a?{errorMap:function(e,t){var r,n,t=null!==(n=null===(r=(n=o._def).errorMap)||void 0===r?void 0:r.call(n,e,t).message)&&void 0!==n?n:t.defaultError;return "unrecognized_keys"===e.code?{message:null!==(e=errorUtil.errToObj(a).message)&&void 0!==e?e:t}:{message:t}}}:{}))},s.prototype.strip=function(){return new s(__assign(__assign({},this._def),{unknownKeys:"strip"}))},s.prototype.passthrough=function(){return new s(__assign(__assign({},this._def),{unknownKeys:"passthrough"}))},s.prototype.setKey=function(e,t){var r;return this.augment(((r={})[e]=t,r))},s.prototype.merge=function(e){var t=objectUtil.mergeShapes(this._def.shape(),e._def.shape());return new s({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:function(){return t},typeName:ZodFirstPartyTypeKind.ZodObject})},s.prototype.catchall=function(e){return new s(__assign(__assign({},this._def),{catchall:e}))},s.prototype.pick=function(e){var t=this,r={};return util.objectKeys(e).map(function(e){r[e]=t.shape[e];}),new s(__assign(__assign({},this._def),{shape:function(){return r}}))},s.prototype.omit=function(t){var r=this,n={};return util.objectKeys(this.shape).map(function(e){-1===util.objectKeys(t).indexOf(e)&&(n[e]=r.shape[e]);}),new s(__assign(__assign({},this._def),{shape:function(){return n}}))},s.prototype.deepPartial=function(){return deepPartialify(this)},s.prototype.partial=function(t){var e,r=this,n={};if(t)return util.objectKeys(this.shape).map(function(e){-1===util.objectKeys(t).indexOf(e)?n[e]=r.shape[e]:n[e]=r.shape[e].optional();}),new s(__assign(__assign({},this._def),{shape:function(){return n}}));for(e in this.shape){var a=this.shape[e];n[e]=a.optional();}return new s(__assign(__assign({},this._def),{shape:function(){return n}}))},s.prototype.required=function(){var e,t={};for(e in this.shape){for(var r=this.shape[e];r instanceof ZodOptional;)r=r._def.innerType;t[e]=r;}return new s(__assign(__assign({},this._def),{shape:function(){return t}}))},s.create=function(e,t){return new s(__assign({shape:function(){return e},unknownKeys:"strip",catchall:ZodNever.create(),typeName:ZodFirstPartyTypeKind.ZodObject},processCreateParams(t)))},s.strictCreate=function(e,t){return new s(__assign({shape:function(){return e},unknownKeys:"strict",catchall:ZodNever.create(),typeName:ZodFirstPartyTypeKind.ZodObject},processCreateParams(t)))},s.lazycreate=function(e,t){return new s(__assign({shape:e,unknownKeys:"strip",catchall:ZodNever.create(),typeName:ZodFirstPartyTypeKind.ZodObject},processCreateParams(t)))},s}(ZodType),ZodUnion=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),r.prototype._parse=function(e){var t=this,c=this._processInputParams(e).ctx,e=this._def.options;function r(e){var t,r,n,a,o;try{for(var s=__values(e),i=s.next();!i.done;i=s.next())if("valid"===(u=i.value).result.status)return u.result}catch(e){t={error:e};}finally{try{i&&!i.done&&(r=s.return)&&r.call(s);}finally{if(t)throw t.error}}try{for(var u,d=__values(e),p=d.next();!p.done;p=d.next())if("dirty"===(u=p.value).result.status)return (o=c.issues).push.apply(o,__spreadArray([],__read(u.ctx.issues),!1)),u.result}catch(e){n={error:e};}finally{try{p&&!p.done&&(a=d.return)&&a.call(d);}finally{if(n)throw n.error}}e=e.map(function(e){return new ZodError(e.ctx.issues)});return addIssueToContext(c,{code:ZodIssueCode.invalid_union,unionErrors:e}),INVALID}return c.async?Promise.all(e.map(function(n){return __awaiter(t,void 0,void 0,function(){var t,r;return __generator(this,function(e){switch(e.label){case 0:return t=__assign(__assign({},c),{issues:[],parent:null}),r={},[4,n._parseAsync({data:c.data,path:c.path,parent:t})];case 1:return [2,(r.result=e.sent(),r.ctx=t,r)]}})})})).then(r):r(e.map(function(e){var t=__assign(__assign({},c),{issues:[],parent:null});return {result:e._parseSync({data:c.data,path:c.path,parent:t}),ctx:t}}))},Object.defineProperty(r.prototype,"options",{get:function(){return this._def.options},enumerable:!1,configurable:!0}),r.create=function(e,t){return new r(__assign({options:e,typeName:ZodFirstPartyTypeKind.ZodUnion},processCreateParams(t)))},r}(ZodType);function mergeValues(e,t){var r,n,a=getParsedType(e),o=getParsedType(t);if(e===t)return {valid:!0,data:e};if(a===ZodParsedType.object&&o===ZodParsedType.object){var s=util.objectKeys(t),i=util.objectKeys(e).filter(function(e){return -1!==s.indexOf(e)}),u=__assign(__assign({},e),t);try{for(var d=__values(i),p=d.next();!p.done;p=d.next()){var c=p.value;if(!(l=mergeValues(e[c],t[c])).valid)return {valid:!1};u[c]=l.data;}}catch(e){r={error:e};}finally{try{p&&!p.done&&(n=d.return)&&n.call(d);}finally{if(r)throw r.error}}return {valid:!0,data:u}}if(a!==ZodParsedType.array||o!==ZodParsedType.array)return {valid:!1};if(e.length!==t.length)return {valid:!1};for(var l,y=[],f=0;f<e.length;f++){if(!(l=mergeValues(e[f],t[f])).valid)return {valid:!1};y.push(l.data);}return {valid:!0,data:y}}var ZodIntersection=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return __extends(n,e),n.prototype._parse=function(e){function r(e,t){if(isAborted(e)||isAborted(t))return INVALID;var r=mergeValues(e.value,t.value);return r.valid?((isDirty(e)||isDirty(t))&&n.dirty(),{status:n.value,value:r.data}):(addIssueToContext(a,{code:ZodIssueCode.invalid_intersection_types}),INVALID)}var e=this._processInputParams(e),n=e.status,a=e.ctx;return a.async?Promise.all([this._def.left._parseAsync({data:a.data,path:a.path,parent:a}),this._def.right._parseAsync({data:a.data,path:a.path,parent:a})]).then(function(e){var t=__read(e,2),e=t[0],t=t[1];return r(e,t)}):r(this._def.left._parseSync({data:a.data,path:a.path,parent:a}),this._def.right._parseSync({data:a.data,path:a.path,parent:a}))},n.create=function(e,t,r){return new n(__assign({left:e,right:t,typeName:ZodFirstPartyTypeKind.ZodIntersection},processCreateParams(r)))},n}(ZodType),ZodTuple=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),r.prototype._parse=function(e){var n=this,e=this._processInputParams(e),t=e.status,a=e.ctx;if(a.parsedType!==ZodParsedType.array)return addIssueToContext(a,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.array,received:a.parsedType}),INVALID;if(a.data.length<this._def.items.length)return addIssueToContext(a,{code:ZodIssueCode.too_small,minimum:this._def.items.length,inclusive:!0,type:"array"}),INVALID;!this._def.rest&&a.data.length>this._def.items.length&&(addIssueToContext(a,{code:ZodIssueCode.too_big,maximum:this._def.items.length,inclusive:!0,type:"array"}),t.dirty());e=a.data.map(function(e,t){var r=n._def.items[t]||n._def.rest;return r?r._parse({data:e,path:__spreadArray(__spreadArray([],__read(a.path),!1),[t],!1),parent:a}):null}).filter(function(e){return !!e});return a.async?Promise.all(e).then(function(e){return ParseStatus.mergeArray(t,e)}):ParseStatus.mergeArray(t,e)},Object.defineProperty(r.prototype,"items",{get:function(){return this._def.items},enumerable:!1,configurable:!0}),r.prototype.rest=function(e){return new r(__assign(__assign({},this._def),{rest:e}))},r.create=function(e,t){return new r(__assign({items:e,typeName:ZodFirstPartyTypeKind.ZodTuple,rest:null},processCreateParams(t)))},r}(ZodType),ZodRecord=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return __extends(n,e),Object.defineProperty(n.prototype,"keySchema",{get:function(){return this._def.keyType},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"valueSchema",{get:function(){return this._def.valueType},enumerable:!1,configurable:!0}),n.prototype._parse=function(e){var t=this._processInputParams(e),e=t.status,r=t.ctx;if(r.parsedType!==ZodParsedType.object)return addIssueToContext(r,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.object,received:r.parsedType}),INVALID;var n,a=[],o=this._def.keyType,s=this._def.valueType;for(n in r.data)a.push({key:o._parse({data:n,path:__spreadArray(__spreadArray([],__read(r.path),!1),[n],!1),parent:r}),value:s._parse({data:r.data[n],path:__spreadArray(__spreadArray([],__read(r.path),!1),[n],!1),parent:r})});return r.async?ParseStatus.mergeObjectAsync(e,a):ParseStatus.mergeObjectSync(e,a)},Object.defineProperty(n.prototype,"element",{get:function(){return this._def.valueType},enumerable:!1,configurable:!0}),n.create=function(e,t,r){return new n(t instanceof ZodType?__assign({keyType:e,valueType:t,typeName:ZodFirstPartyTypeKind.ZodRecord},processCreateParams(r)):__assign({keyType:ZodString.create(),valueType:e,typeName:ZodFirstPartyTypeKind.ZodRecord},processCreateParams(t)))},n}(ZodType),ZodMap=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return __extends(n,e),n.prototype._parse=function(e){var t,r,n=this,e=this._processInputParams(e),u=e.status,a=e.ctx;if(a.parsedType!==ZodParsedType.map)return addIssueToContext(a,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.map,received:a.parsedType}),INVALID;var o=this._def.keyType,s=this._def.valueType,d=__spreadArray([],__read(a.data.entries()),!1).map(function(e,t){var r=__read(e,2),e=r[0],r=r[1];return {key:o._parse({data:e,path:__spreadArray(__spreadArray([],__read(a.path),!1),[t,"key"],!1),parent:a}),value:s._parse({data:r,path:__spreadArray(__spreadArray([],__read(a.path),!1),[t,"value"],!1),parent:a})}});if(a.async){var p=new Map;return Promise.resolve().then(function(){return __awaiter(n,void 0,void 0,function(){var t,r,n,a,o,s,i;return __generator(this,function(e){switch(e.label){case 0:e.trys.push([0,6,7,8]),t=__values(d),r=t.next(),e.label=1;case 1:return r.done?[3,5]:[4,(n=r.value).key];case 2:return a=e.sent(),[4,n.value];case 3:if(o=e.sent(),"aborted"===a.status||"aborted"===o.status)return [2,INVALID];"dirty"!==a.status&&"dirty"!==o.status||u.dirty(),p.set(a.value,o.value),e.label=4;case 4:return r=t.next(),[3,1];case 5:return [3,8];case 6:return s=e.sent(),s={error:s},[3,8];case 7:try{r&&!r.done&&(i=t.return)&&i.call(t);}finally{if(s)throw s.error}return [7];case 8:return [2,{status:u.value,value:p}]}})})})}var i=new Map;try{for(var c=__values(d),l=c.next();!l.done;l=c.next()){var y=l.value,f=y.key,_=y.value;if("aborted"===f.status||"aborted"===_.status)return INVALID;"dirty"!==f.status&&"dirty"!==_.status||u.dirty(),i.set(f.value,_.value);}}catch(e){t={error:e};}finally{try{l&&!l.done&&(r=c.return)&&r.call(c);}finally{if(t)throw t.error}}return {status:u.value,value:i}},n.create=function(e,t,r){return new n(__assign({valueType:t,keyType:e,typeName:ZodFirstPartyTypeKind.ZodMap},processCreateParams(r)))},n}(ZodType),ZodSet=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),r.prototype._parse=function(e){var e=this._processInputParams(e),i=e.status,r=e.ctx;if(r.parsedType!==ZodParsedType.set)return addIssueToContext(r,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.set,received:r.parsedType}),INVALID;var n=this._def.valueType;function t(e){var t,r,n=new Set;try{for(var a=__values(e),o=a.next();!o.done;o=a.next()){var s=o.value;if("aborted"===s.status)return INVALID;"dirty"===s.status&&i.dirty(),n.add(s.value);}}catch(e){t={error:e};}finally{try{o&&!o.done&&(r=a.return)&&r.call(a);}finally{if(t)throw t.error}}return {status:i.value,value:n}}e=__spreadArray([],__read(r.data.values()),!1).map(function(e,t){return n._parse({data:e,path:__spreadArray(__spreadArray([],__read(r.path),!1),[t],!1),parent:r})});return r.async?Promise.all(e).then(t):t(e)},r.create=function(e,t){return new r(__assign({valueType:e,typeName:ZodFirstPartyTypeKind.ZodSet},processCreateParams(t)))},r}(ZodType),ZodFunction=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.validate=e.implement,e}return __extends(n,t),n.prototype._parse=function(e){var o=this,r=this._processInputParams(e).ctx;if(r.parsedType!==ZodParsedType.function)return addIssueToContext(r,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.function,received:r.parsedType}),INVALID;function s(e,t){return makeIssue({data:e,path:r.path,errorMaps:[r.contextualErrorMap,r.schemaErrorMap,overrideErrorMap,defaultErrorMap].filter(function(e){return !!e}),issueData:{code:ZodIssueCode.invalid_arguments,argumentsError:t}})}function i(e,t){return makeIssue({data:e,path:r.path,errorMaps:[r.contextualErrorMap,r.schemaErrorMap,overrideErrorMap,defaultErrorMap].filter(function(e){return !!e}),issueData:{code:ZodIssueCode.invalid_return_type,returnTypeError:t}})}var u={errorMap:r.contextualErrorMap},d=r.data;return this._def.returns instanceof ZodPromise?OK(function(){for(var a=[],e=0;e<arguments.length;e++)a[e]=arguments[e];return __awaiter(o,void 0,void 0,function(){var t,r,n;return __generator(this,function(e){switch(e.label){case 0:return t=new ZodError([]),[4,this._def.args.parseAsync(a,u).catch(function(e){throw t.addIssue(s(a,e)),t})];case 1:return r=e.sent(),[4,d.apply(void 0,__spreadArray([],__read(r),!1))];case 2:return n=e.sent(),[4,this._def.returns._def.type.parseAsync(n,u).catch(function(e){throw t.addIssue(i(n,e)),t})];case 3:return [2,e.sent()]}})})}):OK(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=o._def.args.safeParse(e,u);if(!r.success)throw new ZodError([s(e,r.error)]);var n=d.apply(void 0,__spreadArray([],__read(r.data),!1)),r=o._def.returns.safeParse(n,u);if(!r.success)throw new ZodError([i(n,r.error)]);return r.data})},n.prototype.parameters=function(){return this._def.args},n.prototype.returnType=function(){return this._def.returns},n.prototype.args=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return new n(__assign(__assign({},this._def),{args:ZodTuple.create(e).rest(ZodUnknown.create())}))},n.prototype.returns=function(e){return new n(__assign(__assign({},this._def),{returns:e}))},n.prototype.implement=function(e){return this.parse(e)},n.prototype.strictImplement=function(e){return this.parse(e)},n.create=function(e,t,r){return new n(__assign({args:(e||ZodTuple.create([])).rest(ZodUnknown.create()),returns:t||ZodUnknown.create(),typeName:ZodFirstPartyTypeKind.ZodFunction},processCreateParams(r)))},n}(ZodType),ZodLazy=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),Object.defineProperty(r.prototype,"schema",{get:function(){return this._def.getter()},enumerable:!1,configurable:!0}),r.prototype._parse=function(e){e=this._processInputParams(e).ctx;return this._def.getter()._parse({data:e.data,path:e.path,parent:e})},r.create=function(e,t){return new r(__assign({getter:e,typeName:ZodFirstPartyTypeKind.ZodLazy},processCreateParams(t)))},r}(ZodType),ZodLiteral=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),r.prototype._parse=function(e){var t=this._processInputParams(e),e=t.status,t=t.ctx;return t.data!==this._def.value?(addIssueToContext(t,{code:ZodIssueCode.invalid_type,expected:this._def.value,received:t.data}),INVALID):{status:e.value,value:t.data}},Object.defineProperty(r.prototype,"value",{get:function(){return this._def.value},enumerable:!1,configurable:!0}),r.create=function(e,t){return new r(__assign({value:e,typeName:ZodFirstPartyTypeKind.ZodLiteral},processCreateParams(t)))},r}(ZodType);function createZodEnum(e){return new ZodEnum({values:e,typeName:ZodFirstPartyTypeKind.ZodEnum})}var ZodFirstPartyTypeKind,ZodEnum=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._parse=function(e){e=this._processInputParams(e).ctx;return -1===this._def.values.indexOf(e.data)?(addIssueToContext(e,{code:ZodIssueCode.invalid_enum_value,options:this._def.values}),INVALID):OK(e.data)},Object.defineProperty(t.prototype,"options",{get:function(){return this._def.values},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"enum",{get:function(){var t,e,r={};try{for(var n=__values(this._def.values),a=n.next();!a.done;a=n.next()){var o=a.value;r[o]=o;}}catch(e){t={error:e};}finally{try{a&&!a.done&&(e=n.return)&&e.call(n);}finally{if(t)throw t.error}}return r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Values",{get:function(){var t,e,r={};try{for(var n=__values(this._def.values),a=n.next();!a.done;a=n.next()){var o=a.value;r[o]=o;}}catch(e){t={error:e};}finally{try{a&&!a.done&&(e=n.return)&&e.call(n);}finally{if(t)throw t.error}}return r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Enum",{get:function(){var t,e,r={};try{for(var n=__values(this._def.values),a=n.next();!a.done;a=n.next()){var o=a.value;r[o]=o;}}catch(e){t={error:e};}finally{try{a&&!a.done&&(e=n.return)&&e.call(n);}finally{if(t)throw t.error}}return r},enumerable:!1,configurable:!0}),t.create=createZodEnum,t}(ZodType),ZodNativeEnum=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),r.prototype._parse=function(e){var t=this._processInputParams(e).ctx,e=util.getValidEnumValues(this._def.values);return -1===e.indexOf(t.data)?(addIssueToContext(t,{code:ZodIssueCode.invalid_enum_value,options:util.objectValues(e)}),INVALID):OK(t.data)},r.create=function(e,t){return new r(__assign({values:e,typeName:ZodFirstPartyTypeKind.ZodNativeEnum},processCreateParams(t)))},r}(ZodType),ZodPromise=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),r.prototype._parse=function(e){var t=this,r=this._processInputParams(e).ctx;if(r.parsedType!==ZodParsedType.promise&&!1===r.async)return addIssueToContext(r,{code:ZodIssueCode.invalid_type,expected:ZodParsedType.promise,received:r.parsedType}),INVALID;e=r.parsedType===ZodParsedType.promise?r.data:Promise.resolve(r.data);return OK(e.then(function(e){return t._def.type.parseAsync(e,{path:r.path,errorMap:r.contextualErrorMap})}))},r.create=function(e,t){return new r(__assign({type:e,typeName:ZodFirstPartyTypeKind.ZodPromise},processCreateParams(t)))},r}(ZodType),ZodEffects=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return __extends(n,e),n.prototype.innerType=function(){return this._def.schema},n.prototype._parse=function(e){var t=this,e=this._processInputParams(e),r=e.status,n=e.ctx,a=this._def.effect||null;if("preprocess"===a.type){e=a.transform(n.data);return n.async?Promise.resolve(e).then(function(e){return t._def.schema._parseAsync({data:e,path:n.path,parent:n})}):this._def.schema._parseSync({data:e,path:n.path,parent:n})}if("refinement"===a.type){var o={addIssue:function(e){addIssueToContext(n,e),e.fatal?r.abort():r.dirty();},get path(){return n.path}};o.addIssue=o.addIssue.bind(o);function s(e){var t=a.refinement(e,o);if(n.async)return Promise.resolve(t);if(t instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e}if(!1!==n.async)return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(function(e){return "aborted"===e.status?INVALID:("dirty"===e.status&&r.dirty(),s(e.value).then(function(){return {status:r.value,value:e.value}}))});var i=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return "aborted"===i.status?INVALID:("dirty"===i.status&&r.dirty(),s(i.value),{status:r.value,value:i.value})}if("transform"===a.type){if(!1!==n.async)return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(function(e){return isValid(e)?Promise.resolve(a.transform(e.value)).then(OK):e});i=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!isValid(i))return i;i=a.transform(i.value);if(i instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return OK(i)}util.assertNever(a);},n.create=function(e,t,r){return new n(__assign({schema:e,typeName:ZodFirstPartyTypeKind.ZodEffects,effect:t},processCreateParams(r)))},n.createWithPreprocess=function(e,t,r){return new n(__assign({schema:t,effect:{type:"preprocess",transform:e},typeName:ZodFirstPartyTypeKind.ZodEffects},processCreateParams(r)))},n}(ZodType),ZodOptional=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),r.prototype._parse=function(e){e=this._processInputParams(e).ctx;return e.parsedType===ZodParsedType.undefined?OK(void 0):this._def.innerType._parse({data:e.data,path:e.path,parent:e})},r.prototype.unwrap=function(){return this._def.innerType},r.create=function(e,t){return new r(__assign({innerType:e,typeName:ZodFirstPartyTypeKind.ZodOptional},processCreateParams(t)))},r}(ZodType),ZodNullable=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return __extends(r,e),r.prototype._parse=function(e){e=this._processInputParams(e).ctx;return e.parsedType===ZodParsedType.null?OK(null):this._def.innerType._parse({data:e.data,path:e.path,parent:e})},r.prototype.unwrap=function(){return this._def.innerType},r.create=function(e,t){return new r(__assign({innerType:e,typeName:ZodFirstPartyTypeKind.ZodNullable},processCreateParams(t)))},r}(ZodType),ZodDefault=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype._parse=function(e){var t=this._processInputParams(e).ctx,e=t.data;return t.parsedType===ZodParsedType.undefined&&(e=this._def.defaultValue()),this._def.innerType._parse({data:e,path:t.path,parent:t})},t.prototype.removeDefault=function(){return this._def.innerType},t.create=function(e,t){return new ZodOptional(__assign({innerType:e,typeName:ZodFirstPartyTypeKind.ZodOptional},processCreateParams(t)))},t}(ZodType),custom=function(e,t){return e?ZodAny.create().refine(e,t):ZodAny.create()},late={object:ZodObject.lazycreate};!function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodPromise="ZodPromise";}(ZodFirstPartyTypeKind=ZodFirstPartyTypeKind||{});var instanceOfType=function(t,e){return void 0===e&&(e={message:"Input not instance of "+t.name}),custom(function(e){return e instanceof t},e)},stringType=ZodString.create,numberType=ZodNumber.create,bigIntType=ZodBigInt.create,booleanType=ZodBoolean.create,dateType=ZodDate.create,undefinedType=ZodUndefined.create,nullType=ZodNull.create,anyType=ZodAny.create,unknownType=ZodUnknown.create,neverType=ZodNever.create,voidType=ZodVoid.create,arrayType=ZodArray.create,objectType=ZodObject.create,strictObjectType=ZodObject.strictCreate,unionType=ZodUnion.create,intersectionType=ZodIntersection.create,tupleType=ZodTuple.create,recordType=ZodRecord.create,mapType=ZodMap.create,setType=ZodSet.create,functionType=ZodFunction.create,lazyType=ZodLazy.create,literalType=ZodLiteral.create,enumType=ZodEnum.create,nativeEnumType=ZodNativeEnum.create,promiseType=ZodPromise.create,effectsType=ZodEffects.create,optionalType=ZodOptional.create,nullableType=ZodNullable.create,preprocessType=ZodEffects.createWithPreprocess,ostring=function(){return stringType().optional()},onumber=function(){return numberType().optional()},oboolean=function(){return booleanType().optional()},external=Object.freeze({__proto__:null,ZodParsedType:ZodParsedType,getParsedType:getParsedType,makeIssue:makeIssue,EMPTY_PATH:EMPTY_PATH,addIssueToContext:addIssueToContext,ParseStatus:ParseStatus,INVALID:INVALID,DIRTY:DIRTY,OK:OK,isAborted:isAborted,isDirty:isDirty,isValid:isValid,isAsync:isAsync,ZodType:ZodType,ZodString:ZodString,ZodNumber:ZodNumber,ZodBigInt:ZodBigInt,ZodBoolean:ZodBoolean,ZodDate:ZodDate,ZodUndefined:ZodUndefined,ZodNull:ZodNull,ZodAny:ZodAny,ZodUnknown:ZodUnknown,ZodNever:ZodNever,ZodVoid:ZodVoid,ZodArray:ZodArray,get objectUtil(){return objectUtil},ZodObject:ZodObject,ZodUnion:ZodUnion,ZodIntersection:ZodIntersection,ZodTuple:ZodTuple,ZodRecord:ZodRecord,ZodMap:ZodMap,ZodSet:ZodSet,ZodFunction:ZodFunction,ZodLazy:ZodLazy,ZodLiteral:ZodLiteral,ZodEnum:ZodEnum,ZodNativeEnum:ZodNativeEnum,ZodPromise:ZodPromise,ZodEffects:ZodEffects,ZodTransformer:ZodEffects,ZodOptional:ZodOptional,ZodNullable:ZodNullable,ZodDefault:ZodDefault,custom:custom,Schema:ZodType,ZodSchema:ZodType,late:late,get ZodFirstPartyTypeKind(){return ZodFirstPartyTypeKind},any:anyType,array:arrayType,bigint:bigIntType,boolean:booleanType,date:dateType,effect:effectsType,enum:enumType,function:functionType,instanceof:instanceOfType,intersection:intersectionType,lazy:lazyType,literal:literalType,map:mapType,nativeEnum:nativeEnumType,never:neverType,null:nullType,nullable:nullableType,number:numberType,object:objectType,oboolean:oboolean,onumber:onumber,optional:optionalType,ostring:ostring,preprocess:preprocessType,promise:promiseType,record:recordType,set:setType,strictObject:strictObjectType,string:stringType,transformer:effectsType,tuple:tupleType,undefined:undefinedType,union:unionType,unknown:unknownType,void:voidType,ZodIssueCode:ZodIssueCode,quotelessJson:quotelessJson,ZodError:ZodError,defaultErrorMap:defaultErrorMap,get overrideErrorMap(){return overrideErrorMap},setErrorMap:setErrorMap});

    var module_config_schema = external.object({
        timeout: external
            .number()
            .min(0)
            .default(8)
            .transform(function (x) { return x * 1000; }),
        maximum: external.number().int().min(0).default(8),
        defaultIcon: external.string().nonempty().default('bullhorn'),
        icons: external.record(external.string()).default({
            calendar: 'calendar-check-o',
            clock: 'clock-o',
            currentweather: 'thermometer',
            weatherforecast: 'thermometer',
        }),
        newestOnTop: external.boolean().default(true),
        includeModules: external.string().nonempty().array().default([]),
        excludeModules: external.string().nonempty().array().default([]),
        includeNotifications: external.string().nonempty().array().default([]),
        excludeNotifications: external.string().nonempty().array().default([]),
        format: external.string().nonempty().default('{time}: "{module}" sent "{notification}"'),
        logLevel: external.enum(['INFO', 'WARN', 'ERROR', 'DEBUG']).default('ERROR'),
    });

    function replaceAll(input, find, replace) {
        if (find === replace) {
            return input;
        }
        var processing = input;
        var output = '';
        var idx = input.indexOf(find);
        while (idx >= 0) {
            output += processing.substring(0, idx) + replace;
            processing = processing.substring(idx + find.length);
            idx = processing.indexOf(find);
        }
        output += processing;
        return output;
    }

    var MmmLogger = (function () {
        function MmmLogger(properties, level, transport) {
            if (level === void 0) { level = 2; }
            if (transport === void 0) { transport = Log__default["default"]; }
            this.level = 2;
            this.properties = properties;
            this.setLogLevel(level);
            this.transport = transport;
        }
        MmmLogger.prototype.setLogLevel = function (level) {
            if (typeof level === 'string') {
                this.level = this.convertLevel(level);
            }
            else {
                this.level = level;
            }
        };
        MmmLogger.prototype.log = function (message) {
            this.transport.log(this.processMessage(message));
        };
        MmmLogger.prototype.info = function (message) {
            this.transport.info(this.processMessage(message));
        };
        MmmLogger.prototype.warn = function (message) {
            if (this.level >= 1) {
                this.transport.warn(this.processMessage(message));
            }
        };
        MmmLogger.prototype.error = function (message) {
            if (this.level >= 2) {
                this.transport.error(this.processMessage(message));
            }
        };
        MmmLogger.prototype.debug = function (message) {
            if (this.level >= 3) {
                this.transport.info(this.processMessage(message));
            }
        };
        MmmLogger.prototype.processMessage = function (message) {
            if (this.level === 3) {
                var date = new Date();
                var time = "".concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds());
                return "".concat(this.properties.name, ": (").concat(this.properties.data.index, ")(").concat(time, ") ").concat(message);
            }
            return "".concat(this.properties.name, ": ").concat(message);
        };
        MmmLogger.prototype.convertLevel = function (level) {
            switch (level) {
                case 'INFO':
                    return 0;
                case 'WARN':
                    return 1;
                case 'ERROR':
                    return 2;
                case 'DEBUG':
                    return 3;
                default:
                    throw new Error('Invalid Logger Level');
            }
        };
        return MmmLogger;
    }());

    /* eslint-disable */
    const keys = Object.keys;
    function isBoolean(val) {
      return typeof val === "boolean"
    }
    function isElement(val) {
      return val && typeof val.nodeType === "number"
    }
    function isString(val) {
      return typeof val === "string"
    }
    function isNumber(val) {
      return typeof val === "number"
    }
    function isObject(val) {
      return typeof val === "object" ? val !== null : isFunction(val)
    }
    function isFunction(val) {
      return typeof val === "function"
    }
    function isComponentClass(Component) {
      const { prototype } = Component;
      return !!(prototype && prototype.isReactComponent)
    }
    function isArrayLike(obj) {
      return isObject(obj) && typeof obj.length === "number" && typeof obj.nodeType !== "number"
    }
    function forEach(value, fn) {
      if (!value) return

      for (const key of keys(value)) {
        fn(value[key], key);
      }
    }
    function isRef(maybeRef) {
      return isObject(maybeRef) && "current" in maybeRef
    }

    const isUnitlessNumber = {
      animationIterationCount: 0,
      borderImageOutset: 0,
      borderImageSlice: 0,
      borderImageWidth: 0,
      boxFlex: 0,
      boxFlexGroup: 0,
      boxOrdinalGroup: 0,
      columnCount: 0,
      columns: 0,
      flex: 0,
      flexGrow: 0,
      flexPositive: 0,
      flexShrink: 0,
      flexNegative: 0,
      flexOrder: 0,
      gridArea: 0,
      gridRow: 0,
      gridRowEnd: 0,
      gridRowSpan: 0,
      gridRowStart: 0,
      gridColumn: 0,
      gridColumnEnd: 0,
      gridColumnSpan: 0,
      gridColumnStart: 0,
      fontWeight: 0,
      lineClamp: 0,
      lineHeight: 0,
      opacity: 0,
      order: 0,
      orphans: 0,
      tabSize: 0,
      widows: 0,
      zIndex: 0,
      zoom: 0,
      fillOpacity: 0,
      floodOpacity: 0,
      stopOpacity: 0,
      strokeDasharray: 0,
      strokeDashoffset: 0,
      strokeMiterlimit: 0,
      strokeOpacity: 0,
      strokeWidth: 0,
    };

    function prefixKey(prefix, key) {
      return prefix + key.charAt(0).toUpperCase() + key.substring(1)
    }

    const prefixes = ["Webkit", "ms", "Moz", "O"];
    keys(isUnitlessNumber).forEach(prop => {
      prefixes.forEach(prefix => {
        isUnitlessNumber[prefixKey(prefix, prop)] = 0;
      });
    });

    const SVGNamespace = "http://www.w3.org/2000/svg";
    const XLinkNamespace = "http://www.w3.org/1999/xlink";
    const XMLNamespace = "http://www.w3.org/XML/1998/namespace";

    function isVisibleChild(value) {
      return !isBoolean(value) && value != null
    }

    function className(value) {
      if (Array.isArray(value)) {
        return value.map(className).filter(Boolean).join(" ")
      } else if (isObject(value)) {
        return keys(value)
          .filter(k => value[k])
          .join(" ")
      } else if (isVisibleChild(value)) {
        return "" + value
      } else {
        return ""
      }
    }
    const svg = {
      animate: 0,
      circle: 0,
      clipPath: 0,
      defs: 0,
      desc: 0,
      ellipse: 0,
      feBlend: 0,
      feColorMatrix: 0,
      feComponentTransfer: 0,
      feComposite: 0,
      feConvolveMatrix: 0,
      feDiffuseLighting: 0,
      feDisplacementMap: 0,
      feDistantLight: 0,
      feFlood: 0,
      feFuncA: 0,
      feFuncB: 0,
      feFuncG: 0,
      feFuncR: 0,
      feGaussianBlur: 0,
      feImage: 0,
      feMerge: 0,
      feMergeNode: 0,
      feMorphology: 0,
      feOffset: 0,
      fePointLight: 0,
      feSpecularLighting: 0,
      feSpotLight: 0,
      feTile: 0,
      feTurbulence: 0,
      filter: 0,
      foreignObject: 0,
      g: 0,
      image: 0,
      line: 0,
      linearGradient: 0,
      marker: 0,
      mask: 0,
      metadata: 0,
      path: 0,
      pattern: 0,
      polygon: 0,
      polyline: 0,
      radialGradient: 0,
      rect: 0,
      stop: 0,
      svg: 0,
      switch: 0,
      symbol: 0,
      text: 0,
      textPath: 0,
      tspan: 0,
      use: 0,
      view: 0,
    };
    const nonPresentationSVGAttributes =
      /^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;
    function Fragment(attr) {
      const fragment = document.createDocumentFragment();
      appendChild(attr.children, fragment);
      return fragment
    }
    class Component {
      constructor(props) {
        this.props = props;
      }

      render() {
        return null
      }
    }
    Object.defineProperties(Component.prototype, {
      isReactComponent: {
        value: true,
      },
    });

    function initComponentClass(Class, attr, children) {
      attr = { ...attr, children };
      const instance = new Class(attr);
      return instance.render()
    }

    function jsx(tag, { children, ...attr }) {
      if (!attr.namespaceURI && svg[tag] === 0) {
        attr = { ...attr, namespaceURI: SVGNamespace };
      }

      let node;

      if (isString(tag)) {
        node = attr.namespaceURI
          ? document.createElementNS(attr.namespaceURI, tag)
          : document.createElement(tag);
        attributes(attr, node);
        appendChild(children, node);

        if (node instanceof window.HTMLSelectElement && attr.value != null) {
          if (attr.multiple === true && Array.isArray(attr.value)) {
            const values = attr.value.map(value => String(value));
            node
              .querySelectorAll("option")
              .forEach(option => (option.selected = values.includes(option.value)));
          } else {
            node.value = attr.value;
          }
        }

        if (isRef(attr.ref)) {
          attr.ref.current = node;
        } else if (isFunction(attr.ref)) {
          attr.ref(node);
        }
      } else if (isFunction(tag)) {
        if (isObject(tag.defaultProps)) {
          attr = { ...tag.defaultProps, ...attr };
        }

        node = isComponentClass(tag)
          ? initComponentClass(tag, attr, children)
          : tag({ ...attr, children });
      }

      return node
    }
    function createElement(tag, attr, ...children) {
      if (isString(attr) || Array.isArray(attr)) {
        children.unshift(attr);
        attr = {};
      }

      attr = attr || {};

      if (attr.children != null && !children.length) {
    ({ children, ...attr } = attr);
      }

      return jsx(tag, { ...attr, children }, attr.key)
    }

    function appendChild(child, node) {
      if (isArrayLike(child)) {
        appendChildren(child, node);
      } else if (isString(child) || isNumber(child)) {
        appendChildToNode(document.createTextNode(child), node);
      } else if (child === null) {
        appendChildToNode(document.createComment(""), node);
      } else if (isElement(child)) {
        appendChildToNode(child, node);
      }
    }

    function appendChildren(children, node) {
      for (const child of [...children]) {
        appendChild(child, node);
      }

      return node
    }

    function appendChildToNode(child, node) {
      if (node instanceof window.HTMLTemplateElement) {
        node.content.appendChild(child);
      } else {
        node.appendChild(child);
      }
    }

    function normalizeAttribute(s, separator) {
      return s.replace(/[A-Z\d]/g, match => separator + match.toLowerCase())
    }

    function style(node, value) {
      if (value == null || value === false);
      else if (Array.isArray(value)) {
        value.forEach(v => style(node, v));
      } else if (isString(value)) {
        node.setAttribute("style", value);
      } else if (isObject(value)) {
        forEach(value, (val, key) => {
          if (isNumber(val) && isUnitlessNumber[key] !== 0) {
            node.style[key] = val + "px";
          } else {
            node.style[key] = val;
          }
        });
      }
    }

    function attribute(key, value, node) {
      switch (key) {
        case "xlinkActuate":
        case "xlinkArcrole":
        case "xlinkHref":
        case "xlinkRole":
        case "xlinkShow":
        case "xlinkTitle":
        case "xlinkType":
          attrNS(node, XLinkNamespace, normalizeAttribute(key, ":"), value);
          return

        case "xmlnsXlink":
          attr(node, normalizeAttribute(key, ":"), value);
          return

        case "xmlBase":
        case "xmlLang":
        case "xmlSpace":
          attrNS(node, XMLNamespace, normalizeAttribute(key, ":"), value);
          return
      }

      switch (key) {
        case "htmlFor":
          attr(node, "for", value);
          return

        case "dataset":
          forEach(value, (dataValue, dataKey) => {
            if (dataValue != null) {
              node.dataset[dataKey] = dataValue;
            }
          });
          return

        case "innerHTML":
        case "innerText":
        case "textContent":
          if (isVisibleChild(value)) {
            node[key] = value;
          }

          return

        case "dangerouslySetInnerHTML":
          if (isObject(value)) {
            node.innerHTML = value["__html"];
          }

          return

        case "value":
          if (value == null || node instanceof window.HTMLSelectElement) {
            return
          } else if (node instanceof window.HTMLTextAreaElement) {
            node.value = value;
            return
          }

          break

        case "spellCheck":
          node.spellcheck = value;
          return

        case "class":
        case "className":
          if (isFunction(value)) {
            value(node);
          } else {
            attr(node, "class", className(value));
          }

          return

        case "ref":
        case "namespaceURI":
          return

        case "style":
          style(node, value);
          return
      }

      if (isFunction(value)) {
        if (key[0] === "o" && key[1] === "n") {
          const attribute = key.toLowerCase();

          if (node[attribute] == null) {
            node[attribute] = value;
          } else {
            node.addEventListener(key, value);
          }
        }
      } else if (isObject(value)) {
        node[key] = value;
      } else if (value === true) {
        attr(node, key, "");
      } else if (value !== false && value != null) {
        if (node instanceof SVGElement && !nonPresentationSVGAttributes.test(key)) {
          attr(node, normalizeAttribute(key, "-"), value);
        } else {
          attr(node, key, value);
        }
      }
    }

    function attr(node, key, value) {
      node.setAttribute(key, value);
    }

    function attrNS(node, namespace, key, value) {
      node.setAttributeNS(namespace, key, value);
    }

    function attributes(attr, node) {
      for (const key of keys(attr)) {
        attribute(key, attr[key], node);
      }

      return node
    }

    const cache = new Map();

    const createStyledComponent =
      name =>
      (list, ...interpolations) =>
      ({ style, ...props }) => {
        const lastIndex = list.length - 1;
        const css =
          list.slice(0, lastIndex).reduce((p, s, i) => p + s + interpolations[i](props), "") +
          list[lastIndex];
        return createElement(name, {
          style: [css, style],
          ...props,
        })
      };

    const baseStyled = customComponent => createStyledComponent(customComponent);

    new Proxy(baseStyled, {
      get(_, name) {
        return setIfAbsent(cache, name, () => createStyledComponent(name))
      },
    });

    function setIfAbsent(map, key, getValue) {
      if (map.has(key)) {
        return map.get(key)
      } else {
        const value = getValue(key);
        map.set(key, value);
        return value
      }
    }

    var index = {
      Component,
      PureComponent: Component,
      createElement,
      Fragment,
    };

    var LoadingErrors = function (_a) {
        var error_list = _a.error_list;
        return (index.createElement("div", { className: "loading small" },
            "Configuration error!",
            error_list.map(function (e) { return (index.createElement(index.Fragment, null,
                index.createElement("br", null),
                e)); })));
    };

    Module.register('MMM-ViewNotifications', {
        init: function () {
            this.has_config_error = false;
            this.config_errors = [];
            this.logger = new MmmLogger(this);
            this.requiresVersion = '2.1.0';
            this.last_update = new Date();
            this.notifications = [];
        },
        setConfig: function (config) {
            var _a, _b;
            var result = module_config_schema.safeParse(config);
            this.has_config_error = !result.success;
            if (result.success) {
                this.config = result.data;
                (_b = (_a = this.logger).setLogLevel) === null || _b === void 0 ? void 0 : _b.call(_a, this.config.logLevel);
            }
            else {
                for (var _i = 0, _c = result.error.errors; _i < _c.length; _i++) {
                    var ze = _c[_i];
                    var message = "'".concat(ze.path, "': ").concat(ze.message);
                    this.config_errors.push(message);
                    this.logger.warn("Configuration error '".concat(ze.code, "' in option ").concat(message));
                }
            }
        },
        getScripts: function () {
            return ['moment.js'];
        },
        getStyles: function () {
            return ['MMM-ViewNotifications.css', 'font-awesome.css'];
        },
        start: function () {
            this.logger.debug("start(): this.data: ".concat(JSON.stringify(this.data)));
            this.logger.debug("start(): this.config: ".concat(JSON.stringify(this.config)));
        },
        notificationReceived: function (notification, payload, sender) {
            var _this = this;
            if (this.has_config_error) {
                return;
            }
            if (sender) {
                this.logger.debug("notificationReceived(): ".concat(notification, " ").concat(JSON.stringify(payload), " ").concat(sender.name));
                this.last_update = new Date();
                if (this.config.timeout > 0) {
                    var timeout_offset_in_ms = 50;
                    setTimeout(function () {
                        _this.cleanupNotificationsList();
                        _this.updateDom();
                    }, this.config.timeout + timeout_offset_in_ms);
                }
                this.addNotification({
                    datetime: new Date(),
                    timeout: new Date(new Date().getTime() + this.config.timeout),
                    notification: notification,
                    payload: payload,
                    sender: sender,
                });
                this.updateDom();
            }
        },
        shouldAddNotification: function (n) {
            var is_excluded = this.config.excludeModules.includes(n.sender.name) ||
                this.config.excludeNotifications.includes(n.notification);
            if (is_excluded) {
                return false;
            }
            var is_name_not_included = this.config.includeModules.length && !this.config.includeModules.includes(n.sender.name);
            if (is_name_not_included) {
                return false;
            }
            var is_notification_not_included = this.config.includeNotifications.length &&
                !this.config.includeNotifications.includes(n.notification);
            if (is_notification_not_included) {
                return false;
            }
            return true;
        },
        addNotification: function (n) {
            if (!this.shouldAddNotification(n)) {
                return;
            }
            var is_maximum_size = this.config.maximum && this.notifications.length === this.config.maximum;
            if (this.config.newestOnTop) {
                this.notifications.unshift(n);
                if (is_maximum_size) {
                    this.notifications.pop();
                }
            }
            else {
                this.notifications.push(n);
                if (is_maximum_size) {
                    this.notifications.shift();
                }
            }
        },
        cleanupNotificationsList: function () {
            if (!this.notifications.length) {
                return;
            }
            var now = new Date();
            this.notifications = this.notifications.filter(function (n) { return now < n.timeout; });
        },
        formatNotification: function (n) {
            var output = this.config.format;
            output = replaceAll(output, '{notification}', n.notification);
            output = replaceAll(output, '{module}', n.sender.name);
            output = replaceAll(output, '{date}', moment__default["default"](n.datetime.getTime()).format('YYYY-MM-DD'));
            output = replaceAll(output, '{time}', moment__default["default"](n.datetime.getTime()).format('HH:mm:ss'));
            var match;
            while ((match = output.match(/\{date\|([^\}]+)\}/i))) {
                output = output.replace(match[0], moment__default["default"](n.datetime.getTime()).format(match[1]));
            }
            if (n.payload === null || n.payload === undefined) {
                output = replaceAll(output, '{payloadList}', 'no payload');
                output = replaceAll(output, '{payloadData}', 'no payload');
            }
            else {
                if (Array.isArray(n.payload)) {
                    output = replaceAll(output, '{payloadList}', "Array (".concat(n.payload.length, ")"));
                }
                else {
                    output = replaceAll(output, '{payloadList}', Object.keys(n.payload).toString());
                }
                output = replaceAll(output, '{payloadData}', JSON.stringify(n.payload));
            }
            return output;
        },
        getDom: function () {
            var _this = this;
            if (this.has_config_error) {
                return index.createElement(LoadingErrors, { error_list: this.config_errors });
            }
            var now = new Date();
            return (index.createElement("div", { className: "small" },
                index.createElement("ul", { className: "fa-ul" }, this.notifications
                    .filter(function (n) { return _this.config.timeout === 0 || now < n.timeout; })
                    .map(function (n) {
                    var icon_name = _this.config.icons[n.sender.name]
                        ? _this.config.icons[n.sender.name]
                        : _this.config.defaultIcon;
                    return (index.createElement("li", null,
                        index.createElement("span", { className: "fa-li fa fa-".concat(icon_name) }),
                        _this.formatNotification(n)));
                }))));
        },
    });

})(moment, Log);
