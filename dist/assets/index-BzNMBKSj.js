(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tc="170",Ld=0,Vc=1,Id=2,Jf=1,Qf=2,Zn=3,yi=0,Ye=1,Ne=2,Qn=0,Ni=1,_n=2,Wc=3,Xc=4,kd=5,ki=100,Dd=101,Ud=102,Nd=103,zd=104,Fd=200,Od=201,Bd=202,Hd=203,$o=204,Ko=205,Gd=206,Vd=207,Wd=208,Xd=209,qd=210,Yd=211,jd=212,Zd=213,$d=214,Jo=0,Qo=1,tl=2,bs=3,el=4,nl=5,il=6,sl=7,ec=0,Kd=1,Jd=2,vi=0,tu=1,eu=2,nu=3,nc=4,Qd=5,iu=6,su=7,ru=300,Ms=301,ws=302,rl=303,al=304,Ia=306,ya=1e3,gi=1001,ol=1002,un=1003,tp=1004,vr=1005,zn=1006,Va=1007,Ui=1008,ni=1009,au=1010,ou=1011,lr=1012,ic=1013,Oi=1014,Fn=1015,On=1016,sc=1017,rc=1018,Ss=1020,lu=35902,cu=1021,hu=1022,Ln=1023,fu=1024,uu=1025,vs=1026,Ts=1027,ac=1028,oc=1029,du=1030,lc=1031,cc=1033,ua=33776,da=33777,pa=33778,ma=33779,ll=35840,cl=35841,hl=35842,fl=35843,ul=36196,dl=37492,pl=37496,ml=37808,gl=37809,xl=37810,vl=37811,_l=37812,yl=37813,bl=37814,Ml=37815,wl=37816,Sl=37817,Tl=37818,El=37819,Al=37820,Cl=37821,ga=36492,Rl=36494,Pl=36495,pu=36283,Ll=36284,Il=36285,kl=36286,ep=3200,np=3201,hc=0,ip=1,pi="",We="srgb",Rs="srgb-linear",ka="linear",ce="srgb",qi=7680,qc=519,sp=512,rp=513,ap=514,mu=515,op=516,lp=517,cp=518,hp=519,Dl=35044,ir=35048,Yc="300 es",$n=2e3,ba=2001;class Ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wa=Math.PI/180,Ul=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function fp(i,t){return(i%t+t)%t}function Xa(i,t,e){return(1-e)*i+e*t}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,s,r,a,o,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],h=n[7],u=n[2],d=n[5],g=n[8],x=s[0],p=s[3],m=s[6],y=s[1],v=s[4],_=s[7],E=s[2],w=s[5],S=s[8];return r[0]=a*x+o*y+l*E,r[3]=a*p+o*v+l*w,r[6]=a*m+o*_+l*S,r[1]=c*x+f*y+h*E,r[4]=c*p+f*v+h*w,r[7]=c*m+f*_+h*S,r[2]=u*x+d*y+g*E,r[5]=u*p+d*v+g*w,r[8]=u*m+d*_+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*a*f-e*o*c-n*r*f+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],h=f*a-o*c,u=o*l-f*r,d=c*r-a*l,g=e*h+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*c-f*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(f*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new Xt;function gu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function up(){const i=Ma("canvas");return i.style.display="block",i}const jc={};function tr(i){i in jc||(jc[i]=!0,console.warn(i))}function dp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function pp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(i.r=_s(i.r),i.g=_s(i.g),i.b=_s(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pi?ka:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Zc=[.64,.33,.3,.6,.15,.06],$c=[.2126,.7152,.0722],Kc=[.3127,.329],Jc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Rs]:{primaries:Zc,whitePoint:Kc,transfer:ka,toXYZ:Jc,fromXYZ:Qc,luminanceCoefficients:$c,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:Zc,whitePoint:Kc,transfer:ce,toXYZ:Jc,fromXYZ:Qc,luminanceCoefficients:$c,outputColorSpaceConfig:{drawingBufferColorSpace:We}}});let Yi;class gp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=Ma("canvas")),Yi.width=t.width,Yi.height=t.height;const n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ma("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ei(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xp=0;class xu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ya(s[a].image)):r.push(Ya(s[a]))}else r=Ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vp=0;class je extends Ps{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=gi,s=gi,r=zn,a=Ui,o=Ln,l=ni,c=je.DEFAULT_ANISOTROPY,f=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=ti(),this.name="",this.source=new xu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ru)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ya:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ya:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=ru;je.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],f=l[4],h=l[8],u=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,_=(d+1)/2,E=(m+1)/2,w=(f+u)/4,S=(h+x)/4,A=(g+p)/4;return v>_&&v>E?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=S/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=A/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=S/r,s=A/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(u-f)*(u-f));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-x)/y,this.z=(u-f)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _p extends Ps{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends _p{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vu extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yp extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],f=n[s+2],h=n[s+3];const u=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h;return}if(o===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(h!==x||l!==u||c!==d||f!==g){let p=1-o;const m=l*u+c*d+f*g+h*x,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const E=Math.sqrt(v),w=Math.atan2(E,m*y);p=Math.sin(p*w)/E,o=Math.sin(o*w)/E}const _=o*y;if(l=l*p+u*_,c=c*p+d*_,f=f*p+g*_,h=h*p+x*_,p===1-o){const E=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=E,c*=E,f*=E,h*=E}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],f=n[s+3],h=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+f*h+l*d-c*u,t[e+1]=l*g+f*u+c*h-o*d,t[e+2]=c*g+f*d+o*u-l*h,t[e+3]=f*g-o*h-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(s/2),h=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*f*h+c*d*g,this._y=c*d*h-u*f*g,this._z=c*f*g+u*d*h,this._w=c*f*h-u*d*g;break;case"YXZ":this._x=u*f*h+c*d*g,this._y=c*d*h-u*f*g,this._z=c*f*g-u*d*h,this._w=c*f*h+u*d*g;break;case"ZXY":this._x=u*f*h-c*d*g,this._y=c*d*h+u*f*g,this._z=c*f*g+u*d*h,this._w=c*f*h-u*d*g;break;case"ZYX":this._x=u*f*h-c*d*g,this._y=c*d*h+u*f*g,this._z=c*f*g-u*d*h,this._w=c*f*h+u*d*g;break;case"YZX":this._x=u*f*h+c*d*g,this._y=c*d*h+u*f*g,this._z=c*f*g-u*d*h,this._w=c*f*h-u*d*g;break;case"XZY":this._x=u*f*h-c*d*g,this._y=c*d*h-u*f*g,this._z=c*f*g+u*d*h,this._w=c*f*h+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],f=e[6],h=e[10],u=n+o+h;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(f-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-n*c,this._z=r*f+a*c+n*l-s*o,this._w=a*f-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),h=Math.sin((1-e)*f)/c,u=Math.sin(e*f)/c;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(th.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),f=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*f,this.y=n+l*f+o*c-r*h,this.z=s+l*h+r*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new N,th=new Mn;class Vi{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),yr.subVectors(this.max,zs),ji.subVectors(t.a,zs),Zi.subVectors(t.b,zs),$i.subVectors(t.c,zs),ai.subVectors(Zi,ji),oi.subVectors($i,Zi),wi.subVectors(ji,$i);let e=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-wi.z,wi.y,ai.z,0,-ai.x,oi.z,0,-oi.x,wi.z,0,-wi.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-wi.y,wi.x,0];return!Za(e,ji,Zi,$i,yr)||(e=[1,0,0,0,1,0,0,0,1],!Za(e,ji,Zi,$i,yr))?!1:(br.crossVectors(ai,oi),e=[br.x,br.y,br.z],Za(e,ji,Zi,$i,yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Wn=[new N,new N,new N,new N,new N,new N,new N,new N],Tn=new N,_r=new Vi,ji=new N,Zi=new N,$i=new N,ai=new N,oi=new N,wi=new N,zs=new N,yr=new N,br=new N,Si=new N;function Za(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Si.fromArray(i,r);const o=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),f=n.dot(Si);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const bp=new Vi,Fs=new N,$a=new N;class Ls{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):bp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);const e=Fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add($a)),this.expandByPoint(Fs.copy(t.center).sub($a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new N,Ka=new N,Mr=new N,li=new N,Ja=new N,wr=new N,Qa=new N;class _u{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ka.copy(t).add(e).multiplyScalar(.5),Mr.copy(e).sub(t).normalize(),li.copy(this.origin).sub(Ka);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Mr),o=li.dot(this.direction),l=-li.dot(Mr),c=li.lengthSq(),f=Math.abs(1-a*a);let h,u,d,g;if(f>0)if(h=a*l-o,u=a*o-l,g=r*f,h>=0)if(u>=-g)if(u<=g){const x=1/f;h*=x,u*=x,d=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ka).addScaledVector(Mr,u),d}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(r=(t.min.y-u.y)*f,a=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,a=(t.min.y-u.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){Ja.subVectors(e,t),wr.subVectors(n,t),Qa.crossVectors(Ja,wr);let a=this.direction.dot(Qa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,t);const l=o*this.direction.dot(wr.crossVectors(li,wr));if(l<0)return null;const c=o*this.direction.dot(Ja.cross(li));if(c<0||l+c>a)return null;const f=-o*li.dot(Qa);return f<0?null:this.at(f/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,r,a,o,l,c,f,h,u,d,g,x,p){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,f,h,u,d,g,x,p)}set(t,e,n,s,r,a,o,l,c,f,h,u,d,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=f,m[10]=h,m[14]=u,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),a=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const u=a*f,d=a*h,g=o*f,x=o*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*f,d=l*h,g=c*f,x=c*h;e[0]=u+x*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*f,e[9]=-o,e[2]=d*o-g,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*f,d=l*h,g=c*f,x=c*h;e[0]=u-x*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*f,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*f,d=a*h,g=o*f,x=o*h;e[0]=l*f,e[4]=g*c-d,e[8]=u*c+x,e[1]=l*h,e[5]=x*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*f,e[4]=x-u*h,e[8]=g*h+d,e[1]=h,e[5]=a*f,e[9]=-o*f,e[2]=-c*f,e[6]=d*h+g,e[10]=u-x*h}else if(t.order==="XZY"){const u=a*l,d=a*c,g=o*l,x=o*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=u*h+x,e[5]=a*f,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*f,e[10]=x*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mp,t,wp)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ci.crossVectors(n,an),ci.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ci.crossVectors(n,an)),ci.normalize(),Sr.crossVectors(an,ci),s[0]=ci.x,s[4]=Sr.x,s[8]=an.x,s[1]=ci.y,s[5]=Sr.y,s[9]=an.y,s[2]=ci.z,s[6]=Sr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],h=n[5],u=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],y=n[3],v=n[7],_=n[11],E=n[15],w=s[0],S=s[4],A=s[8],b=s[12],M=s[1],P=s[5],z=s[9],U=s[13],F=s[2],H=s[6],G=s[10],Y=s[14],W=s[3],V=s[7],Q=s[11],tt=s[15];return r[0]=a*w+o*M+l*F+c*W,r[4]=a*S+o*P+l*H+c*V,r[8]=a*A+o*z+l*G+c*Q,r[12]=a*b+o*U+l*Y+c*tt,r[1]=f*w+h*M+u*F+d*W,r[5]=f*S+h*P+u*H+d*V,r[9]=f*A+h*z+u*G+d*Q,r[13]=f*b+h*U+u*Y+d*tt,r[2]=g*w+x*M+p*F+m*W,r[6]=g*S+x*P+p*H+m*V,r[10]=g*A+x*z+p*G+m*Q,r[14]=g*b+x*U+p*Y+m*tt,r[3]=y*w+v*M+_*F+E*W,r[7]=y*S+v*P+_*H+E*V,r[11]=y*A+v*z+_*G+E*Q,r[15]=y*b+v*U+_*Y+E*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],f=t[2],h=t[6],u=t[10],d=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*h-s*c*h-r*o*u+n*c*u+s*o*d-n*l*d)+x*(+e*l*d-e*c*u+r*a*u-s*a*d+s*c*f-r*l*f)+p*(+e*c*h-e*o*d-r*a*h+n*a*d+r*o*f-n*c*f)+m*(-s*o*f-e*l*h+e*o*u+s*a*h-n*a*u+n*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],h=t[9],u=t[10],d=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=h*p*c-x*u*c+x*l*d-o*p*d-h*l*m+o*u*m,v=g*u*c-f*p*c-g*l*d+a*p*d+f*l*m-a*u*m,_=f*x*c-g*h*c+g*o*d-a*x*d-f*o*m+a*h*m,E=g*h*l-f*x*l-g*o*u+a*x*u+f*o*p-a*h*p,w=e*y+n*v+s*_+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return t[0]=y*S,t[1]=(x*u*r-h*p*r-x*s*d+n*p*d+h*s*m-n*u*m)*S,t[2]=(o*p*r-x*l*r+x*s*c-n*p*c-o*s*m+n*l*m)*S,t[3]=(h*l*r-o*u*r-h*s*c+n*u*c+o*s*d-n*l*d)*S,t[4]=v*S,t[5]=(f*p*r-g*u*r+g*s*d-e*p*d-f*s*m+e*u*m)*S,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*m-e*l*m)*S,t[7]=(a*u*r-f*l*r+f*s*c-e*u*c-a*s*d+e*l*d)*S,t[8]=_*S,t[9]=(g*h*r-f*x*r-g*n*d+e*x*d+f*n*m-e*h*m)*S,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*m+e*o*m)*S,t[11]=(f*o*r-a*h*r-f*n*c+e*h*c+a*n*d-e*o*d)*S,t[12]=E*S,t[13]=(f*x*s-g*h*s+g*n*u-e*x*u-f*n*p+e*h*p)*S,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*p-e*o*p)*S,t[15]=(a*h*s-f*o*s+f*n*l-e*h*l-a*n*u+e*o*u)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+n,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,f=a+a,h=o+o,u=r*c,d=r*f,g=r*h,x=a*f,p=a*h,m=o*h,y=l*c,v=l*f,_=l*h,E=n.x,w=n.y,S=n.z;return s[0]=(1-(x+m))*E,s[1]=(d+_)*E,s[2]=(g-v)*E,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(u+m))*w,s[6]=(p+y)*w,s[7]=0,s[8]=(g+v)*S,s[9]=(p-y)*S,s[10]=(1-(u+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ki.set(s[0],s[1],s[2]).length();const a=Ki.set(s[4],s[5],s[6]).length(),o=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);const c=1/r,f=1/a,h=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=f,En.elements[5]*=f,En.elements[6]*=f,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,e.setFromRotationMatrix(En),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=$n){const l=this.elements,c=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),u=(n+s)/(n-s);let d,g;if(o===$n)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ba)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=$n){const l=this.elements,c=1/(e-t),f=1/(n-s),h=1/(a-r),u=(e+t)*c,d=(n+s)*f;let g,x;if(o===$n)g=(a+r)*h,x=-2*h;else if(o===ba)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ki=new N,En=new ee,Mp=new N(0,0,0),wp=new N(1,1,1),ci=new N,Sr=new N,an=new N,eh=new ee,nh=new Mn;class Ze{constructor(t=0,e=0,n=0,s=Ze.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],h=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nh.setFromEuler(this),this.setFromQuaternion(nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ze.DEFAULT_ORDER="XYZ";class yu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sp=0;const ih=new N,Ji=new Mn,qn=new ee,Tr=new N,Os=new N,Tp=new N,Ep=new Mn,sh=new N(1,0,0),rh=new N(0,1,0),ah=new N(0,0,1),oh={type:"added"},Ap={type:"removed"},Qi={type:"childadded",child:null},to={type:"childremoved",child:null};class Ce extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new N,e=new Ze,n=new Mn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Xt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(sh,t)}rotateY(t){return this.rotateOnAxis(rh,t)}rotateZ(t){return this.rotateOnAxis(ah,t)}translateOnAxis(t,e){return ih.copy(t).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sh,t)}translateY(t){return this.translateOnAxis(rh,t)}translateZ(t){return this.translateOnAxis(ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tr.copy(t):Tr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Os,Tr,this.up):qn.lookAt(Tr,Os,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(qn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ap),to.child=t,this.dispatchEvent(to),to.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Tp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Ep,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),f=a(t.images),h=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new N(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new N,Yn=new N,eo=new N,jn=new N,ts=new N,es=new N,lh=new N,no=new N,io=new N,so=new N,ro=new de,ao=new de,oo=new de;class yn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),Yn.subVectors(n,e),eo.subVectors(t,e);const a=An.dot(An),o=An.dot(Yn),l=An.dot(eo),c=Yn.dot(Yn),f=Yn.dot(eo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,d=(c*l-o*f)*u,g=(a*f-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ro.setScalar(0),ao.setScalar(0),oo.setScalar(0),ro.fromBufferAttribute(t,e),ao.fromBufferAttribute(t,n),oo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ro,r.x),a.addScaledVector(ao,r.y),a.addScaledVector(oo,r.z),a}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),Yn.subVectors(t,e),An.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),An.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ts.subVectors(s,n),es.subVectors(r,n),no.subVectors(t,n);const l=ts.dot(no),c=es.dot(no);if(l<=0&&c<=0)return e.copy(n);io.subVectors(t,s);const f=ts.dot(io),h=es.dot(io);if(f>=0&&h<=f)return e.copy(s);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(ts,a);so.subVectors(t,r);const d=ts.dot(so),g=es.dot(so);if(g>=0&&d<=g)return e.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(es,o);const p=f*g-d*h;if(p<=0&&h-f>=0&&d-g>=0)return lh.subVectors(r,s),o=(h-f)/(h-f+(d-g)),e.copy(s).addScaledVector(lh,o);const m=1/(p+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Er={h:0,s:0,l:0};function lo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=fp(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=lo(a,r,t+1/3),this.g=lo(a,r,t),this.b=lo(a,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=bu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return te.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Ue(Oe.r*255,0,255))*65536+Math.round(Ue(Oe.g*255,0,255))*256+Math.round(Ue(Oe.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=We){te.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Er);const n=Xa(hi.h,Er.h,e),s=Xa(hi.s,Er.s,e),r=Xa(hi.l,Er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Nt;Nt.NAMES=bu;let Cp=0;class bi extends Ps{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=ti(),this.name="",this.blending=Ni,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$o,this.blendDst=Ko,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$o&&(n.blendSrc=this.blendSrc),this.blendDst!==Ko&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xe extends bi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new N,Ar=new ft;class Zt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dl&&(t.usage=this.usage),t}}class Mu extends Zt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wu extends Zt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends Zt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rp=0;const gn=new ee,co=new Ce,ns=new N,on=new Vi,Bs=new Vi,Le=new N;class fe extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gu(t)?wu:Mu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return co.lookAt(t),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(on.min,Bs.min),on.expandByPoint(Le),Le.addVectors(on.max,Bs.max),on.expandByPoint(Le)):(on.expandByPoint(Bs.min),on.expandByPoint(Bs.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Le.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(t,c),Le.add(ns)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new N,l[A]=new N;const c=new N,f=new N,h=new N,u=new ft,d=new ft,g=new ft,x=new N,p=new N;function m(A,b,M){c.fromBufferAttribute(n,A),f.fromBufferAttribute(n,b),h.fromBufferAttribute(n,M),u.fromBufferAttribute(r,A),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),f.sub(c),h.sub(c),d.sub(u),g.sub(u);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),p.copy(h).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(P),o[A].add(x),o[b].add(x),o[M].add(x),l[A].add(p),l[b].add(p),l[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,b=y.length;A<b;++A){const M=y[A],P=M.start,z=M.count;for(let U=P,F=P+z;U<F;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new N,_=new N,E=new N,w=new N;function S(A){E.fromBufferAttribute(s,A),w.copy(E);const b=o[A];v.copy(b),v.sub(E.multiplyScalar(E.dot(b))).normalize(),_.crossVectors(w,b);const P=_.dot(l[A])<0?-1:1;a.setXYZW(A,v.x,v.y,v.z,P)}for(let A=0,b=y.length;A<b;++A){const M=y[A],P=M.start,z=M.count;for(let U=P,F=P+z;U<F;U+=3)S(t.getX(U+0)),S(t.getX(U+1)),S(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,f=new N,h=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(f),l.add(f),c.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,h=o.normalized,u=new c.constructor(l.length*f);let d=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*f;for(let m=0;m<f;m++)u[g++]=c[d++]}return new Zt(u,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let f=0,h=c.length;f<h;f++){const u=c[f],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const d=c[h];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(e))}const r=t.morphAttributes;for(const c in r){const f=[],h=r[c];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ch=new ee,Ti=new _u,Cr=new Ls,hh=new N,Rr=new N,Pr=new N,Lr=new N,ho=new N,Ir=new N,fh=new N,kr=new N;class Ct extends Ce{constructor(t=new fe,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=o[l],h=r[l];f!==0&&(ho.fromBufferAttribute(h,t),a?Ir.addScaledVector(ho,f):Ir.addScaledVector(ho.sub(e),f))}e.add(Ir)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Cr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Cr,hh)===null||Ti.origin.distanceToSquared(hh)>(t.far-t.near)**2))&&(ch.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(ch),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let _=y,E=v;_<E;_+=3){const w=o.getX(_),S=o.getX(_+1),A=o.getX(_+2);s=Dr(this,m,t,n,c,f,h,w,S,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const y=o.getX(p),v=o.getX(p+1),_=o.getX(p+2);s=Dr(this,a,t,n,c,f,h,y,v,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=y,E=v;_<E;_+=3){const w=_,S=_+1,A=_+2;s=Dr(this,m,t,n,c,f,h,w,S,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const y=p,v=p+1,_=p+2;s=Dr(this,a,t,n,c,f,h,y,v,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Pp(i,t,e,n,s,r,a,o){let l;if(t.side===Ye?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===yi,o),l===null)return null;kr.copy(o),kr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(kr);return c<e.near||c>e.far?null:{distance:c,point:kr.clone(),object:i}}function Dr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Rr),i.getVertexPosition(l,Pr),i.getVertexPosition(c,Lr);const f=Pp(i,t,e,n,Rr,Pr,Lr,fh);if(f){const h=new N;yn.getBarycoord(fh,Rr,Pr,Lr,h),s&&(f.uv=yn.getInterpolatedAttribute(s,o,l,c,h,new ft)),r&&(f.uv1=yn.getInterpolatedAttribute(r,o,l,c,h,new ft)),a&&(f.normal=yn.getInterpolatedAttribute(a,o,l,c,h,new N),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new N,materialIndex:0};yn.getNormal(Rr,Pr,Lr,u.normal),f.face=u,f.barycoord=h}return f}class pn extends fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],f=[],h=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(h,2));function g(x,p,m,y,v,_,E,w,S,A,b){const M=_/S,P=E/A,z=_/2,U=E/2,F=w/2,H=S+1,G=A+1;let Y=0,W=0;const V=new N;for(let Q=0;Q<G;Q++){const tt=Q*P-U;for(let ut=0;ut<H;ut++){const L=ut*M-z;V[x]=L*y,V[p]=tt*v,V[m]=F,c.push(V.x,V.y,V.z),V[x]=0,V[p]=0,V[m]=w>0?1:-1,f.push(V.x,V.y,V.z),h.push(ut/S),h.push(1-Q/A),Y+=1}}for(let Q=0;Q<A;Q++)for(let tt=0;tt<S;tt++){const ut=u+tt+H*Q,L=u+tt+H*(Q+1),T=u+(tt+1)+H*(Q+1),C=u+(tt+1)+H*Q;l.push(ut,L,C),l.push(L,T,C),W+=6}o.addGroup(d,W,b),d+=W,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ke(i){const t={};for(let e=0;e<i.length;e++){const n=Es(i[e]);for(const s in n)t[s]=n[s]}return t}function Lp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Su(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const cr={clone:Es,merge:Ke};var Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qe extends bi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=Lp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Tu extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=$n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new N,uh=new ft,dh=new ft;class cn extends Tu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ul*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,uh,dh),e.subVectors(dh,uh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class Dp extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(is,ss,t,e);s.layers=this.layers,this.add(s);const r=new cn(is,ss,t,e);r.layers=this.layers,this.add(r);const a=new cn(is,ss,t,e);a.layers=this.layers,this.add(a);const o=new cn(is,ss,t,e);o.layers=this.layers,this.add(o);const l=new cn(is,ss,t,e);l.layers=this.layers,this.add(l);const c=new cn(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,f),t.setRenderTarget(h,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eu extends je{constructor(t,e,n,s,r,a,o,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,n,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Up extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Eu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pn(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Qn});r.uniforms.tEquirect.value=e;const a=new Ct(s,r),o=e.minFilter;return e.minFilter===Ui&&(e.minFilter=zn),new Dp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const fo=new N,Np=new N,zp=new Xt;class Li{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=fo.subVectors(n,e).cross(Np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zp.getNormalMatrix(t),s=this.coplanarPoint(fo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Ls,Ur=new N;class fc{constructor(t=new Li,e=new Li,n=new Li,s=new Li,r=new Li,a=new Li){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],f=s[5],h=s[6],u=s[7],d=s[8],g=s[9],x=s[10],p=s[11],m=s[12],y=s[13],v=s[14],_=s[15];if(n[0].setComponents(l-r,u-c,p-d,_-m).normalize(),n[1].setComponents(l+r,u+c,p+d,_+m).normalize(),n[2].setComponents(l+a,u+f,p+g,_+y).normalize(),n[3].setComponents(l-a,u-f,p-g,_-y).normalize(),n[4].setComponents(l-o,u-h,p-x,_-v).normalize(),e===$n)n[5].setComponents(l+o,u+h,p+x,_+v).normalize();else if(e===ba)n[5].setComponents(o,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ur.x=s.normal.x>0?t.max.x:t.min.x,Ur.y=s.normal.y>0?t.max.y:t.min.y,Ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Au(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fp(i){const t=new WeakMap;function e(o,l){const c=o.array,f=o.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const f=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,f);else{h.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<h.length;d++){const g=h[u],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,h[u]=x)}h.length=u+1;for(let d=0,g=h.length;d<g;d++){const x=h[d];i.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Ae extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,f=l+1,h=t/o,u=e/l,d=[],g=[],x=[],p=[];for(let m=0;m<f;m++){const y=m*u-a;for(let v=0;v<c;v++){const _=v*h-r;g.push(_,-y,0),x.push(0,0,1),p.push(v/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const v=y+c*m,_=y+c*(m+1),E=y+1+c*(m+1),w=y+1+c*m;d.push(v,_,w),d.push(_,E,w)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.width,t.height,t.widthSegments,t.heightSegments)}}var Op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,l0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,h0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,O0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,om=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Im=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,km=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Om=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ym=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ig=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ag=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:Op,alphahash_pars_fragment:Bp,alphamap_fragment:Hp,alphamap_pars_fragment:Gp,alphatest_fragment:Vp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:qp,batching_pars_vertex:Yp,batching_vertex:jp,begin_vertex:Zp,beginnormal_vertex:$p,bsdfs:Kp,iridescence_fragment:Jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:t0,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:n0,clipping_planes_vertex:i0,color_fragment:s0,color_pars_fragment:r0,color_pars_vertex:a0,color_vertex:o0,common:l0,cube_uv_reflection_fragment:c0,defaultnormal_vertex:h0,displacementmap_pars_vertex:f0,displacementmap_vertex:u0,emissivemap_fragment:d0,emissivemap_pars_fragment:p0,colorspace_fragment:m0,colorspace_pars_fragment:g0,envmap_fragment:x0,envmap_common_pars_fragment:v0,envmap_pars_fragment:_0,envmap_pars_vertex:y0,envmap_physical_pars_fragment:L0,envmap_vertex:b0,fog_vertex:M0,fog_pars_vertex:w0,fog_fragment:S0,fog_pars_fragment:T0,gradientmap_pars_fragment:E0,lightmap_pars_fragment:A0,lights_lambert_fragment:C0,lights_lambert_pars_fragment:R0,lights_pars_begin:P0,lights_toon_fragment:I0,lights_toon_pars_fragment:k0,lights_phong_fragment:D0,lights_phong_pars_fragment:U0,lights_physical_fragment:N0,lights_physical_pars_fragment:z0,lights_fragment_begin:F0,lights_fragment_maps:O0,lights_fragment_end:B0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:G0,logdepthbuf_pars_vertex:V0,logdepthbuf_vertex:W0,map_fragment:X0,map_pars_fragment:q0,map_particle_fragment:Y0,map_particle_pars_fragment:j0,metalnessmap_fragment:Z0,metalnessmap_pars_fragment:$0,morphinstance_vertex:K0,morphcolor_vertex:J0,morphnormal_vertex:Q0,morphtarget_pars_vertex:tm,morphtarget_vertex:em,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:am,normalmap_pars_fragment:om,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:fm,opaque_fragment:um,packing:dm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:xm,roughnessmap_fragment:vm,roughnessmap_pars_fragment:_m,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:bm,shadowmap_vertex:Mm,shadowmask_pars_fragment:wm,skinbase_vertex:Sm,skinning_pars_vertex:Tm,skinning_vertex:Em,skinnormal_vertex:Am,specularmap_fragment:Cm,specularmap_pars_fragment:Rm,tonemapping_fragment:Pm,tonemapping_pars_fragment:Lm,transmission_fragment:Im,transmission_pars_fragment:km,uv_pars_fragment:Dm,uv_pars_vertex:Um,uv_vertex:Nm,worldpos_vertex:zm,background_vert:Fm,background_frag:Om,backgroundCube_vert:Bm,backgroundCube_frag:Hm,cube_vert:Gm,cube_frag:Vm,depth_vert:Wm,depth_frag:Xm,distanceRGBA_vert:qm,distanceRGBA_frag:Ym,equirect_vert:jm,equirect_frag:Zm,linedashed_vert:$m,linedashed_frag:Km,meshbasic_vert:Jm,meshbasic_frag:Qm,meshlambert_vert:tg,meshlambert_frag:eg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:sg,meshnormal_frag:rg,meshphong_vert:ag,meshphong_frag:og,meshphysical_vert:lg,meshphysical_frag:cg,meshtoon_vert:hg,meshtoon_frag:fg,points_vert:ug,points_frag:dg,shadow_vert:pg,shadow_frag:mg,sprite_vert:gg,sprite_frag:xg},yt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Un={basic:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ke([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ke([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ke([yt.points,yt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ke([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ke([yt.common,yt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ke([yt.sprite,yt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ke([yt.common,yt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ke([yt.lights,yt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Un.physical={uniforms:Ke([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Nr={r:0,b:0,g:0},Ai=new Ze,vg=new ee;function _g(i,t,e,n,s,r,a){const o=new Nt(0);let l=r===!0?0:1,c,f,h=null,u=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1;const _=g(y);_===null?m(o,l):_&&_.isColor&&(m(_,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,v){const _=g(v);_&&(_.isCubeTexture||_.mapping===Ia)?(f===void 0&&(f=new Ct(new pn(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:Es(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(E,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),Ai.copy(v.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(Ai)),f.material.toneMapped=te.getTransfer(_.colorSpace)!==ce,(h!==_||u!==_.version||d!==i.toneMapping)&&(f.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ct(new Ae(2,2),new qe({name:"BackgroundMaterial",uniforms:Es(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=te.getTransfer(_.colorSpace)!==ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(Nr,Su(i)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:x,addToRenderList:p}}function yg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(M,P,z,U,F){let H=!1;const G=h(U,z,P);r!==G&&(r=G,c(r.object)),H=d(M,U,z,F),H&&g(M,U,z,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,_(M,P,z,U),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function f(M){return i.deleteVertexArray(M)}function h(M,P,z){const U=z.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let H=F[P.id];H===void 0&&(H={},F[P.id]=H);let G=H[U];return G===void 0&&(G=u(l()),H[U]=G),G}function u(M){const P=[],z=[],U=[];for(let F=0;F<e;F++)P[F]=0,z[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:U,object:M,attributes:{},index:null}}function d(M,P,z,U){const F=r.attributes,H=P.attributes;let G=0;const Y=z.getAttributes();for(const W in Y)if(Y[W].location>=0){const Q=F[W];let tt=H[W];if(tt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),Q===void 0||Q.attribute!==tt||tt&&Q.data!==tt.data)return!0;G++}return r.attributesNum!==G||r.index!==U}function g(M,P,z,U){const F={},H=P.attributes;let G=0;const Y=z.getAttributes();for(const W in Y)if(Y[W].location>=0){let Q=H[W];Q===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor));const tt={};tt.attribute=Q,Q&&Q.data&&(tt.data=Q.data),F[W]=tt,G++}r.attributes=F,r.attributesNum=G,r.index=U}function x(){const M=r.newAttributes;for(let P=0,z=M.length;P<z;P++)M[P]=0}function p(M){m(M,0)}function m(M,P){const z=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;z[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),F[M]!==P&&(i.vertexAttribDivisor(M,P),F[M]=P)}function y(){const M=r.newAttributes,P=r.enabledAttributes;for(let z=0,U=P.length;z<U;z++)P[z]!==M[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function v(M,P,z,U,F,H,G){G===!0?i.vertexAttribIPointer(M,P,z,F,H):i.vertexAttribPointer(M,P,z,U,F,H)}function _(M,P,z,U){x();const F=U.attributes,H=z.getAttributes(),G=P.defaultAttributeValues;for(const Y in H){const W=H[Y];if(W.location>=0){let V=F[Y];if(V===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),V!==void 0){const Q=V.normalized,tt=V.itemSize,ut=t.get(V);if(ut===void 0)continue;const L=ut.buffer,T=ut.type,C=ut.bytesPerElement,B=T===i.INT||T===i.UNSIGNED_INT||V.gpuType===ic;if(V.isInterleavedBufferAttribute){const O=V.data,J=O.stride,dt=V.offset;if(O.isInstancedInterleavedBuffer){for(let nt=0;nt<W.locationSize;nt++)m(W.location+nt,O.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let nt=0;nt<W.locationSize;nt++)p(W.location+nt);i.bindBuffer(i.ARRAY_BUFFER,L);for(let nt=0;nt<W.locationSize;nt++)v(W.location+nt,tt/W.locationSize,T,Q,J*C,(dt+tt/W.locationSize*nt)*C,B)}else{if(V.isInstancedBufferAttribute){for(let O=0;O<W.locationSize;O++)m(W.location+O,V.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let O=0;O<W.locationSize;O++)p(W.location+O);i.bindBuffer(i.ARRAY_BUFFER,L);for(let O=0;O<W.locationSize;O++)v(W.location+O,tt/W.locationSize,T,Q,tt*C,tt/W.locationSize*O*C,B)}}else if(G!==void 0){const Q=G[Y];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(W.location,Q);break;case 3:i.vertexAttrib3fv(W.location,Q);break;case 4:i.vertexAttrib4fv(W.location,Q);break;default:i.vertexAttrib1fv(W.location,Q)}}}}y()}function E(){A();for(const M in n){const P=n[M];for(const z in P){const U=P[z];for(const F in U)f(U[F].object),delete U[F];delete P[z]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const z in P){const U=P[z];for(const F in U)f(U[F].object),delete U[F];delete P[z]}delete n[M.id]}function S(M){for(const P in n){const z=n[P];if(z[M.id]===void 0)continue;const U=z[M.id];for(const F in U)f(U[F].object),delete U[F];delete z[M.id]}}function A(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function bg(i,t,e){let n;function s(c){n=c}function r(c,f){i.drawArrays(n,c,f),e.update(f,n,1)}function a(c,f,h){h!==0&&(i.drawArraysInstanced(n,c,f,h),e.update(f,n,h))}function o(c,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,h);let d=0;for(let g=0;g<h;g++)d+=f[g];e.update(d,n,1)}function l(c,f,h,u){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],f[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,f,0,u,0,h);let g=0;for(let x=0;x<h;x++)g+=f[x]*u[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Mg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==Ln&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const A=S===On&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==ni&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Fn&&!A)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:E,maxSamples:w}}function wg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Li,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const d=h.length!==0||u||n!==0||s;return s=u,n=h.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,d){const g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?f(null):c();else{const y=r?0:n,v=y*4;let _=m.clippingState||null;l.value=_,_=f(g,u,v,d);for(let E=0;E!==v;++E)_[E]=e[E];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(h,u,d,g){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=d+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,_=d;v!==x;++v,_+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Sg(i){let t=new WeakMap;function e(a,o){return o===rl?a.mapping=Ms:o===al&&(a.mapping=ws),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===rl||o===al)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Up(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class uc extends Tu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ms=4,ph=[.125,.215,.35,.446,.526,.582],Di=20,uo=new uc,mh=new Nt;let po=null,mo=0,go=0,xo=!1;const Ii=(1+Math.sqrt(5))/2,rs=1/Ii,gh=[new N(-Ii,rs,0),new N(Ii,rs,0),new N(-rs,0,Ii),new N(rs,0,Ii),new N(0,Ii,-rs),new N(0,Ii,rs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Nl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(po,mo,go),this._renderer.xr.enabled=xo,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:On,format:Ln,colorSpace:Rs,depthBuffer:!1},s=xh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tg(r)),this._blurMaterial=Eg(r,t,e)}return s}_compileMaterial(t){const e=new Ct(this._lodPlanes[0],t);this._renderer.compile(e,uo)}_sceneToCubeUV(t,e,n,s){const o=new cn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(mh),f.toneMapping=vi,f.autoClear=!1;const d=new xe({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new Ct(new pn,d);let x=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(mh),x=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const v=this._cubeSize;zr(s,y*v,m>2?v:0,v,v),f.setRenderTarget(s),x&&f.render(g,o),f.render(t,o)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=u,f.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ms||t.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;zr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,uo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gh[(s-r-1)%gh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Ct(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Di-1),x=r/g,p=isFinite(r)?1+Math.floor(f*x):Di;p>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Di}`);const m=[];let y=0;for(let S=0;S<Di;++S){const A=S/x,b=Math.exp(-A*A/2);m.push(b),S===0?y+=b:S<p&&(y+=2*b)}for(let S=0;S<m.length;S++)m[S]=m[S]/y;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const _=this._sizeLods[s],E=3*_*(s>v-ms?s-v+ms:0),w=4*(this._cubeSize-_);zr(e,E,w,3*_,2*_),l.setRenderTarget(e),l.render(h,uo)}}function Tg(i){const t=[],e=[],n=[];let s=i;const r=i-ms+1+ph.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ms?l=ph[a-i+ms-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],d=6,g=6,x=3,p=2,m=1,y=new Float32Array(x*g*d),v=new Float32Array(p*g*d),_=new Float32Array(m*g*d);for(let w=0;w<d;w++){const S=w%3*2/3-1,A=w>2?0:-1,b=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];y.set(b,x*g*w),v.set(u,p*g*w);const M=[w,w,w,w,w,w];_.set(M,m*g*w)}const E=new fe;E.setAttribute("position",new Zt(y,x)),E.setAttribute("uv",new Zt(v,p)),E.setAttribute("faceIndex",new Zt(_,m)),t.push(E),s>ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xh(i,t,e){const n=new bn(i,t,e);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Eg(i,t,e){const n=new Float32Array(Di),s=new N(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function vh(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function _h(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ag(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===rl||l===al,f=l===Ms||l===ws;if(c||f){let h=t.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Nl(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||f&&d&&s(d)?(e===null&&(e=new Nl(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Cg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&tr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rg(i,t,e,n){const s={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const x=d[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(h){const u=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const y=d.array;x=d.version;for(let v=0,_=y.length;v<_;v+=3){const E=y[v+0],w=y[v+1],S=y[v+2];u.push(E,w,w,S,S,E)}}else if(g!==void 0){const y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){const E=v+0,w=v+1,S=v+2;u.push(E,w,w,S,S,E)}}else return;const p=new(gu(u)?wu:Mu)(u,1);p.version=x;const m=r.get(h);m&&t.remove(m),r.set(h,p)}function f(h){const u=r.get(h);if(u){const d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function Pg(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,u*a,g),e.update(d,n,g))}function f(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function h(u,d,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/a,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,x,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y]*x[y];e.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Lg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ig(i,t,e){const n=new WeakMap,s=new de;function r(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let M=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var d=M;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),p===!0&&(_=3);let E=o.attributes.position.count*_,w=1;E>t.maxTextureSize&&(w=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const S=new Float32Array(E*w*4*h),A=new vu(S,E,w,h);A.type=Fn,A.needsUpdate=!0;const b=_*4;for(let P=0;P<h;P++){const z=m[P],U=y[P],F=v[P],H=E*w*4*P;for(let G=0;G<z.count;G++){const Y=G*b;g===!0&&(s.fromBufferAttribute(z,G),S[H+Y+0]=s.x,S[H+Y+1]=s.y,S[H+Y+2]=s.z,S[H+Y+3]=0),x===!0&&(s.fromBufferAttribute(U,G),S[H+Y+4]=s.x,S[H+Y+5]=s.y,S[H+Y+6]=s.z,S[H+Y+7]=0),p===!0&&(s.fromBufferAttribute(F,G),S[H+Y+8]=s.x,S[H+Y+9]=s.y,S[H+Y+10]=s.z,S[H+Y+11]=F.itemSize===4?s.w:1)}}u={count:h,texture:A,size:new ft(E,w)},n.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function kg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Cu extends je{constructor(t,e,n,s,r,a,o,l,c,f=vs){if(f!==vs&&f!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===vs&&(n=Oi),n===void 0&&f===Ts&&(n=Ss),super(null,s,r,a,o,l,f,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ru=new je,yh=new Cu(1,1),Pu=new vu,Lu=new yp,Iu=new Eu,bh=[],Mh=[],wh=new Float32Array(16),Sh=new Float32Array(9),Th=new Float32Array(4);function Is(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=bh[s];if(r===void 0&&(r=new Float32Array(s),bh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Da(i,t){let e=Mh[t];e===void 0&&(e=new Int32Array(t),Mh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Dg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function Ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function Fg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;Th.set(n),i.uniformMatrix2fv(this.addr,!1,Th),Pe(e,n)}}function Og(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;Sh.set(n),i.uniformMatrix3fv(this.addr,!1,Sh),Pe(e,n)}}function Bg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;wh.set(n),i.uniformMatrix4fv(this.addr,!1,wh),Pe(e,n)}}function Hg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function Wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function Xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Zg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yh.compareFunction=mu,r=yh):r=Ru,e.setTexture2D(t||r,s)}function $g(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lu,s)}function Kg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Iu,s)}function Jg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pu,s)}function Qg(i){switch(i){case 5126:return Dg;case 35664:return Ug;case 35665:return Ng;case 35666:return zg;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return Hg;case 35667:case 35671:return Gg;case 35668:case 35672:return Vg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Jg}}function t1(i,t){i.uniform1fv(this.addr,t)}function e1(i,t){const e=Is(t,this.size,2);i.uniform2fv(this.addr,e)}function n1(i,t){const e=Is(t,this.size,3);i.uniform3fv(this.addr,e)}function i1(i,t){const e=Is(t,this.size,4);i.uniform4fv(this.addr,e)}function s1(i,t){const e=Is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function r1(i,t){const e=Is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function a1(i,t){const e=Is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function o1(i,t){i.uniform1iv(this.addr,t)}function l1(i,t){i.uniform2iv(this.addr,t)}function c1(i,t){i.uniform3iv(this.addr,t)}function h1(i,t){i.uniform4iv(this.addr,t)}function f1(i,t){i.uniform1uiv(this.addr,t)}function u1(i,t){i.uniform2uiv(this.addr,t)}function d1(i,t){i.uniform3uiv(this.addr,t)}function p1(i,t){i.uniform4uiv(this.addr,t)}function m1(i,t,e){const n=this.cache,s=t.length,r=Da(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ru,r[a])}function g1(i,t,e){const n=this.cache,s=t.length,r=Da(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Lu,r[a])}function x1(i,t,e){const n=this.cache,s=t.length,r=Da(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Iu,r[a])}function v1(i,t,e){const n=this.cache,s=t.length,r=Da(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Pu,r[a])}function _1(i){switch(i){case 5126:return t1;case 35664:return e1;case 35665:return n1;case 35666:return i1;case 35674:return s1;case 35675:return r1;case 35676:return a1;case 5124:case 35670:return o1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return h1;case 5125:return f1;case 36294:return u1;case 36295:return d1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return x1;case 36289:case 36303:case 36311:case 36292:return v1}}class y1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qg(e.type)}}class b1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_1(e.type)}}class M1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function Eh(i,t){i.seq.push(t),i.map[t.id]=t}function w1(i,t,e){const n=i.name,s=n.length;for(vo.lastIndex=0;;){const r=vo.exec(n),a=vo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Eh(e,c===void 0?new y1(o,i,t):new b1(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new M1(o),Eh(e,h)),e=h}}}class xa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);w1(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ah(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const S1=37297;let T1=0;function E1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ch=new Xt;function A1(i){te._getMatrix(Ch,te.workingColorSpace,i);const t=`mat3( ${Ch.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case ka:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Rh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+E1(i.getShaderSource(t),a)}else return s}function C1(i,t){const e=A1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function R1(i,t){let e;switch(t){case tu:e="Linear";break;case eu:e="Reinhard";break;case nu:e="Cineon";break;case nc:e="ACESFilmic";break;case iu:e="AgX";break;case su:e="Neutral";break;case Qd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fr=new N;function P1(){te.getLuminanceCoefficients(Fr);const i=Fr.x.toFixed(4),t=Fr.y.toFixed(4),e=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function I1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function k1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function er(i){return i!==""}function Ph(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const D1=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(i){return i.replace(D1,N1)}const U1=new Map;function N1(i,t){let e=jt[t];if(e===void 0){const n=U1.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return zl(e)}const z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(i){return i.replace(z1,F1)}function F1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function O1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function B1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ms:case ws:t="ENVMAP_TYPE_CUBE";break;case Ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function G1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ec:t="ENVMAP_BLENDING_MULTIPLY";break;case Kd:t="ENVMAP_BLENDING_MIX";break;case Jd:t="ENVMAP_BLENDING_ADD";break}return t}function V1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function W1(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=O1(e),c=B1(e),f=H1(e),h=G1(e),u=V1(e),d=L1(e),g=I1(r),x=s.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`)):(p=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),m=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?jt.tonemapping_pars_fragment:"",e.toneMapping!==vi?R1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,C1("linearToOutputTexel",e.outputColorSpace),P1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),a=zl(a),a=Ph(a,e),a=Lh(a,e),o=zl(o),o=Ph(o,e),o=Lh(o,e),a=Ih(a),o=Ih(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=y+p+a,_=y+m+o,E=Ah(s,s.VERTEX_SHADER,v),w=Ah(s,s.FRAGMENT_SHADER,_);s.attachShader(x,E),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function S(P){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(E).trim(),F=s.getShaderInfoLog(w).trim();let H=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,w);else{const Y=Rh(s,E,"vertex"),W=Rh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Y+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(U===""||F==="")&&(G=!1);G&&(P.diagnostics={runnable:H,programLog:z,vertexShader:{log:U,prefix:p},fragmentShader:{log:F,prefix:m}})}s.deleteShader(E),s.deleteShader(w),A=new xa(s,x),b=k1(s,x)}let A;this.getUniforms=function(){return A===void 0&&S(this),A};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,S1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=w,this}let X1=0;class q1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Y1(t),e.set(t,n)),n}}class Y1{constructor(t){this.id=X1++,this.code=t,this.usedTimes=0}}function j1(i,t,e,n,s,r,a){const o=new yu,l=new q1,c=new Set,f=[],h=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,M,P,z,U){const F=z.fog,H=U.geometry,G=b.isMeshStandardMaterial?z.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),W=Y&&Y.mapping===Ia?Y.image.height:null,V=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,tt=Q!==void 0?Q.length:0;let ut=0;H.morphAttributes.position!==void 0&&(ut=1),H.morphAttributes.normal!==void 0&&(ut=2),H.morphAttributes.color!==void 0&&(ut=3);let L,T,C,B;if(V){const le=Un[V];L=le.vertexShader,T=le.fragmentShader}else L=b.vertexShader,T=b.fragmentShader,l.update(b),C=l.getVertexShaderID(b),B=l.getFragmentShaderID(b);const O=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),dt=U.isInstancedMesh===!0,nt=U.isBatchedMesh===!0,gt=!!b.map,K=!!b.matcap,st=!!Y,D=!!b.aoMap,xt=!!b.lightMap,Z=!!b.bumpMap,rt=!!b.normalMap,ht=!!b.displacementMap,Lt=!!b.emissiveMap,bt=!!b.metalnessMap,k=!!b.roughnessMap,R=b.anisotropy>0,$=b.clearcoat>0,lt=b.dispersion>0,mt=b.iridescence>0,ct=b.sheen>0,It=b.transmission>0,Mt=R&&!!b.anisotropyMap,At=$&&!!b.clearcoatMap,$t=$&&!!b.clearcoatNormalMap,vt=$&&!!b.clearcoatRoughnessMap,Rt=mt&&!!b.iridescenceMap,Ot=mt&&!!b.iridescenceThicknessMap,Bt=ct&&!!b.sheenColorMap,Pt=ct&&!!b.sheenRoughnessMap,Qt=!!b.specularMap,qt=!!b.specularColorMap,pe=!!b.specularIntensityMap,X=It&&!!b.transmissionMap,wt=It&&!!b.thicknessMap,ot=!!b.gradientMap,pt=!!b.alphaMap,Et=b.alphaTest>0,St=!!b.alphaHash,Vt=!!b.extensions;let Me=vi;b.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Me=i.toneMapping);const ze={shaderID:V,shaderType:b.type,shaderName:b.name,vertexShader:L,fragmentShader:T,defines:b.defines,customVertexShaderID:C,customFragmentShaderID:B,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:nt,batchingColor:nt&&U._colorsTexture!==null,instancing:dt,instancingColor:dt&&U.instanceColor!==null,instancingMorph:dt&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:O===null?i.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Rs,alphaToCoverage:!!b.alphaToCoverage,map:gt,matcap:K,envMap:st,envMapMode:st&&Y.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:xt,bumpMap:Z,normalMap:rt,displacementMap:u&&ht,emissiveMap:Lt,normalMapObjectSpace:rt&&b.normalMapType===ip,normalMapTangentSpace:rt&&b.normalMapType===hc,metalnessMap:bt,roughnessMap:k,anisotropy:R,anisotropyMap:Mt,clearcoat:$,clearcoatMap:At,clearcoatNormalMap:$t,clearcoatRoughnessMap:vt,dispersion:lt,iridescence:mt,iridescenceMap:Rt,iridescenceThicknessMap:Ot,sheen:ct,sheenColorMap:Bt,sheenRoughnessMap:Pt,specularMap:Qt,specularColorMap:qt,specularIntensityMap:pe,transmission:It,transmissionMap:X,thicknessMap:wt,gradientMap:ot,opaque:b.transparent===!1&&b.blending===Ni&&b.alphaToCoverage===!1,alphaMap:pt,alphaTest:Et,alphaHash:St,combine:b.combine,mapUv:gt&&x(b.map.channel),aoMapUv:D&&x(b.aoMap.channel),lightMapUv:xt&&x(b.lightMap.channel),bumpMapUv:Z&&x(b.bumpMap.channel),normalMapUv:rt&&x(b.normalMap.channel),displacementMapUv:ht&&x(b.displacementMap.channel),emissiveMapUv:Lt&&x(b.emissiveMap.channel),metalnessMapUv:bt&&x(b.metalnessMap.channel),roughnessMapUv:k&&x(b.roughnessMap.channel),anisotropyMapUv:Mt&&x(b.anisotropyMap.channel),clearcoatMapUv:At&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:$t&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(b.sheenRoughnessMap.channel),specularMapUv:Qt&&x(b.specularMap.channel),specularColorMapUv:qt&&x(b.specularColorMap.channel),specularIntensityMapUv:pe&&x(b.specularIntensityMap.channel),transmissionMapUv:X&&x(b.transmissionMap.channel),thicknessMapUv:wt&&x(b.thicknessMap.channel),alphaMapUv:pt&&x(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(rt||R),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(gt||pt),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:J,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:gt&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===ce,decodeVideoTextureEmissive:Lt&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ne,flipSided:b.side===Ye,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Vt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&b.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function m(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(M,b),v(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){const M=g[b.type];let P;if(M){const z=Un[M];P=cr.clone(z.uniforms)}else P=b.uniforms;return P}function E(b,M){let P;for(let z=0,U=f.length;z<U;z++){const F=f[z];if(F.cacheKey===M){P=F,++P.usedTimes;break}}return P===void 0&&(P=new W1(i,M,b,r),f.push(P)),P}function w(b){if(--b.usedTimes===0){const M=f.indexOf(b);f[M]=f[f.length-1],f.pop(),b.destroy()}}function S(b){l.remove(b)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:_,acquireProgram:E,releaseProgram:w,releaseShaderCache:S,programs:f,dispose:A}}function Z1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function $1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Dh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,u,d,g,x,p){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:u,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},i[t]=m):(m.id=h.id,m.object=h,m.geometry=u,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=x,m.group=p),t++,m}function o(h,u,d,g,x,p){const m=a(h,u,d,g,x,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(h,u,d,g,x,p){const m=a(h,u,d,g,x,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(h,u){e.length>1&&e.sort(h||$1),n.length>1&&n.sort(u||Dh),s.length>1&&s.sort(u||Dh)}function f(){for(let h=t,u=i.length;h<u;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:f,sort:c}}function K1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Uh,i.set(n,[a])):s>=r.length?(a=new Uh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function J1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Nt};break;case"SpotLight":e={position:new N,direction:new N,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Q1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let tx=0;function ex(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function nx(i){const t=new J1,e=Q1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new ee,a=new ee;function o(c){let f=0,h=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,y=0,v=0,_=0,E=0,w=0,S=0;c.sort(ex);for(let b=0,M=c.length;b<M;b++){const P=c[b],z=P.color,U=P.intensity,F=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=z.r*U,h+=z.g*U,u+=z.b*U;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],U);S++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,W=e.get(P);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=G,d++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(z).multiplyScalar(U),G.distance=F,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[x]=G;const Y=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,Y.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[x]=Y.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=H,_++}x++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(z).multiplyScalar(U),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=G,p++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const Y=P.shadow,W=e.get(P);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(U),G.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[m]=G,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=u;const A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==y||A.numPointShadows!==v||A.numSpotShadows!==_||A.numSpotMaps!==E||A.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=S,A.directionalLength=d,A.pointLength=g,A.spotLength=x,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=y,A.numPointShadows=v,A.numSpotShadows=_,A.numSpotMaps=E,A.numLightProbes=S,n.version=tx++)}function l(c,f){let h=0,u=0,d=0,g=0,x=0;const p=f.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const v=c[m];if(v.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),h++}else if(v.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function Nh(i){const t=new nx(i),e=[],n=[];function s(f){c.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function a(f){n.push(f)}function o(){t.setup(e)}function l(f){t.setupView(e,f)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ix(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Nh(i),t.set(s,[o])):r>=a.length?(o=new Nh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class sx extends bi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rx extends bi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lx(i,t,e){let n=new fc;const s=new ft,r=new ft,a=new de,o=new sx({depthPacking:np}),l=new rx,c={},f=e.maxTextureSize,h={[yi]:Ye,[Ye]:yi,[Ne]:Ne},u=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:ax,fragmentShader:ox}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new fe;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ct(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jf;let m=this.type;this.render=function(w,S,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Qn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const U=m!==Zn&&this.type===Zn,F=m===Zn&&this.type!==Zn;for(let H=0,G=w.length;H<G;H++){const Y=w[H],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const V=W.getFrameExtents();if(s.multiply(V),r.copy(W.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/V.x),s.x=r.x*V.x,W.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/V.y),s.y=r.y*V.y,W.mapSize.y=r.y)),W.map===null||U===!0||F===!0){const tt=this.type!==Zn?{minFilter:un,magFilter:un}:{};W.map!==null&&W.map.dispose(),W.map=new bn(s.x,s.y,tt),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const Q=W.getViewportCount();for(let tt=0;tt<Q;tt++){const ut=W.getViewport(tt);a.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),z.viewport(a),W.updateMatrices(Y,tt),n=W.getFrustum(),_(S,A,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Zn&&y(W,A),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,M,P)};function y(w,S){const A=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new bn(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,A,u,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,A,d,x,null)}function v(w,S,A,b){let M=null;const P=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=A.isPointLight===!0?l:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const z=M.uuid,U=S.uuid;let F=c[z];F===void 0&&(F={},c[z]=F);let H=F[U];H===void 0&&(H=M.clone(),F[U]=H,S.addEventListener("dispose",E)),M=H}if(M.visible=S.visible,M.wireframe=S.wireframe,b===Zn?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:h[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=A}return M}function _(w,S,A,b,M){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const U=t.update(w),F=w.material;if(Array.isArray(F)){const H=U.groups;for(let G=0,Y=H.length;G<Y;G++){const W=H[G],V=F[W.materialIndex];if(V&&V.visible){const Q=v(w,V,b,M);w.onBeforeShadow(i,w,S,A,U,Q,W),i.renderBufferDirect(A,null,U,Q,w,W),w.onAfterShadow(i,w,S,A,U,Q,W)}}}else if(F.visible){const H=v(w,F,b,M);w.onBeforeShadow(i,w,S,A,U,H,null),i.renderBufferDirect(A,null,U,H,w,null),w.onAfterShadow(i,w,S,A,U,H,null)}}const z=w.children;for(let U=0,F=z.length;U<F;U++)_(z[U],S,A,b,M)}function E(w){w.target.removeEventListener("dispose",E);for(const A in c){const b=c[A],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const cx={[Jo]:Qo,[tl]:il,[el]:sl,[bs]:nl,[Qo]:Jo,[il]:tl,[sl]:el,[nl]:bs};function hx(i,t){function e(){let X=!1;const wt=new de;let ot=null;const pt=new de(0,0,0,0);return{setMask:function(Et){ot!==Et&&!X&&(i.colorMask(Et,Et,Et,Et),ot=Et)},setLocked:function(Et){X=Et},setClear:function(Et,St,Vt,Me,ze){ze===!0&&(Et*=Me,St*=Me,Vt*=Me),wt.set(Et,St,Vt,Me),pt.equals(wt)===!1&&(i.clearColor(Et,St,Vt,Me),pt.copy(wt))},reset:function(){X=!1,ot=null,pt.set(-1,0,0,0)}}}function n(){let X=!1,wt=!1,ot=null,pt=null,Et=null;return{setReversed:function(St){if(wt!==St){const Vt=t.get("EXT_clip_control");wt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const Me=Et;Et=null,this.setClear(Me)}wt=St},getReversed:function(){return wt},setTest:function(St){St?O(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(St){ot!==St&&!X&&(i.depthMask(St),ot=St)},setFunc:function(St){if(wt&&(St=cx[St]),pt!==St){switch(St){case Jo:i.depthFunc(i.NEVER);break;case Qo:i.depthFunc(i.ALWAYS);break;case tl:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case el:i.depthFunc(i.EQUAL);break;case nl:i.depthFunc(i.GEQUAL);break;case il:i.depthFunc(i.GREATER);break;case sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=St}},setLocked:function(St){X=St},setClear:function(St){Et!==St&&(wt&&(St=1-St),i.clearDepth(St),Et=St)},reset:function(){X=!1,ot=null,pt=null,Et=null,wt=!1}}}function s(){let X=!1,wt=null,ot=null,pt=null,Et=null,St=null,Vt=null,Me=null,ze=null;return{setTest:function(le){X||(le?O(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(le){wt!==le&&!X&&(i.stencilMask(le),wt=le)},setFunc:function(le,wn,Gn){(ot!==le||pt!==wn||Et!==Gn)&&(i.stencilFunc(le,wn,Gn),ot=le,pt=wn,Et=Gn)},setOp:function(le,wn,Gn){(St!==le||Vt!==wn||Me!==Gn)&&(i.stencilOp(le,wn,Gn),St=le,Vt=wn,Me=Gn)},setLocked:function(le){X=le},setClear:function(le){ze!==le&&(i.clearStencil(le),ze=le)},reset:function(){X=!1,wt=null,ot=null,pt=null,Et=null,St=null,Vt=null,Me=null,ze=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let f={},h={},u=new WeakMap,d=[],g=null,x=!1,p=null,m=null,y=null,v=null,_=null,E=null,w=null,S=new Nt(0,0,0),A=0,b=!1,M=null,P=null,z=null,U=null,F=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=Y>=2);let V=null,Q={};const tt=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),L=new de().fromArray(tt),T=new de().fromArray(ut);function C(X,wt,ot,pt){const Et=new Uint8Array(4),St=i.createTexture();i.bindTexture(X,St),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<ot;Vt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(wt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return St}const B={};B[i.TEXTURE_2D]=C(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=C(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=C(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=C(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),O(i.DEPTH_TEST),a.setFunc(bs),Z(!1),rt(Vc),O(i.CULL_FACE),D(Qn);function O(X){f[X]!==!0&&(i.enable(X),f[X]=!0)}function J(X){f[X]!==!1&&(i.disable(X),f[X]=!1)}function dt(X,wt){return h[X]!==wt?(i.bindFramebuffer(X,wt),h[X]=wt,X===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=wt),X===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function nt(X,wt){let ot=d,pt=!1;if(X){ot=u.get(wt),ot===void 0&&(ot=[],u.set(wt,ot));const Et=X.textures;if(ot.length!==Et.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Vt=Et.length;St<Vt;St++)ot[St]=i.COLOR_ATTACHMENT0+St;ot.length=Et.length,pt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,pt=!0);pt&&i.drawBuffers(ot)}function gt(X){return g!==X?(i.useProgram(X),g=X,!0):!1}const K={[ki]:i.FUNC_ADD,[Dd]:i.FUNC_SUBTRACT,[Ud]:i.FUNC_REVERSE_SUBTRACT};K[Nd]=i.MIN,K[zd]=i.MAX;const st={[Fd]:i.ZERO,[Od]:i.ONE,[Bd]:i.SRC_COLOR,[$o]:i.SRC_ALPHA,[qd]:i.SRC_ALPHA_SATURATE,[Wd]:i.DST_COLOR,[Gd]:i.DST_ALPHA,[Hd]:i.ONE_MINUS_SRC_COLOR,[Ko]:i.ONE_MINUS_SRC_ALPHA,[Xd]:i.ONE_MINUS_DST_COLOR,[Vd]:i.ONE_MINUS_DST_ALPHA,[Yd]:i.CONSTANT_COLOR,[jd]:i.ONE_MINUS_CONSTANT_COLOR,[Zd]:i.CONSTANT_ALPHA,[$d]:i.ONE_MINUS_CONSTANT_ALPHA};function D(X,wt,ot,pt,Et,St,Vt,Me,ze,le){if(X===Qn){x===!0&&(J(i.BLEND),x=!1);return}if(x===!1&&(O(i.BLEND),x=!0),X!==kd){if(X!==p||le!==b){if((m!==ki||_!==ki)&&(i.blendEquation(i.FUNC_ADD),m=ki,_=ki),le)switch(X){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _n:i.blendFunc(i.ONE,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _n:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}y=null,v=null,E=null,w=null,S.set(0,0,0),A=0,p=X,b=le}return}Et=Et||wt,St=St||ot,Vt=Vt||pt,(wt!==m||Et!==_)&&(i.blendEquationSeparate(K[wt],K[Et]),m=wt,_=Et),(ot!==y||pt!==v||St!==E||Vt!==w)&&(i.blendFuncSeparate(st[ot],st[pt],st[St],st[Vt]),y=ot,v=pt,E=St,w=Vt),(Me.equals(S)===!1||ze!==A)&&(i.blendColor(Me.r,Me.g,Me.b,ze),S.copy(Me),A=ze),p=X,b=!1}function xt(X,wt){X.side===Ne?J(i.CULL_FACE):O(i.CULL_FACE);let ot=X.side===Ye;wt&&(ot=!ot),Z(ot),X.blending===Ni&&X.transparent===!1?D(Qn):D(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),r.setMask(X.colorWrite);const pt=X.stencilWrite;o.setTest(pt),pt&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Lt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(X){M!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),M=X)}function rt(X){X!==Ld?(O(i.CULL_FACE),X!==P&&(X===Vc?i.cullFace(i.BACK):X===Id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):J(i.CULL_FACE),P=X}function ht(X){X!==z&&(G&&i.lineWidth(X),z=X)}function Lt(X,wt,ot){X?(O(i.POLYGON_OFFSET_FILL),(U!==wt||F!==ot)&&(i.polygonOffset(wt,ot),U=wt,F=ot)):J(i.POLYGON_OFFSET_FILL)}function bt(X){X?O(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function k(X){X===void 0&&(X=i.TEXTURE0+H-1),V!==X&&(i.activeTexture(X),V=X)}function R(X,wt,ot){ot===void 0&&(V===null?ot=i.TEXTURE0+H-1:ot=V);let pt=Q[ot];pt===void 0&&(pt={type:void 0,texture:void 0},Q[ot]=pt),(pt.type!==X||pt.texture!==wt)&&(V!==ot&&(i.activeTexture(ot),V=ot),i.bindTexture(X,wt||B[X]),pt.type=X,pt.texture=wt)}function $(){const X=Q[V];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(X){L.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),L.copy(X))}function Pt(X){T.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),T.copy(X))}function Qt(X,wt){let ot=c.get(wt);ot===void 0&&(ot=new WeakMap,c.set(wt,ot));let pt=ot.get(X);pt===void 0&&(pt=i.getUniformBlockIndex(wt,X.name),ot.set(X,pt))}function qt(X,wt){const pt=c.get(wt).get(X);l.get(wt)!==pt&&(i.uniformBlockBinding(wt,pt,X.__bindingPointIndex),l.set(wt,pt))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},V=null,Q={},h={},u=new WeakMap,d=[],g=null,x=!1,p=null,m=null,y=null,v=null,_=null,E=null,w=null,S=new Nt(0,0,0),A=0,b=!1,M=null,P=null,z=null,U=null,F=null,L.set(0,0,i.canvas.width,i.canvas.height),T.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:O,disable:J,bindFramebuffer:dt,drawBuffers:nt,useProgram:gt,setBlending:D,setMaterial:xt,setFlipSided:Z,setCullFace:rt,setLineWidth:ht,setPolygonOffset:Lt,setScissorTest:bt,activeTexture:k,bindTexture:R,unbindTexture:$,compressedTexImage2D:lt,compressedTexImage3D:mt,texImage2D:Rt,texImage3D:Ot,updateUBOMapping:Qt,uniformBlockBinding:qt,texStorage2D:$t,texStorage3D:vt,texSubImage2D:ct,texSubImage3D:It,compressedTexSubImage2D:Mt,compressedTexSubImage3D:At,scissor:Bt,viewport:Pt,reset:pe}}function zh(i,t,e,n){const s=fx(n);switch(e){case cu:return i*t;case fu:return i*t;case uu:return i*t*2;case ac:return i*t/s.components*s.byteLength;case oc:return i*t/s.components*s.byteLength;case du:return i*t*2/s.components*s.byteLength;case lc:return i*t*2/s.components*s.byteLength;case hu:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case cc:return i*t*4/s.components*s.byteLength;case ua:case da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cl:case fl:return Math.max(i,16)*Math.max(t,8)/4;case ll:case hl:return Math.max(i,8)*Math.max(t,8)/2;case ul:case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ga:case Rl:case Pl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case pu:case Ll:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Il:case kl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fx(i){switch(i){case ni:case au:return{byteLength:1,components:1};case lr:case ou:case On:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case Oi:case ic:case Fn:return{byteLength:4,components:1};case lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ux(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,f=new WeakMap;let h;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(k,R){return d?new OffscreenCanvas(k,R):Ma("canvas")}function x(k,R,$){let lt=1;const mt=bt(k);if((mt.width>$||mt.height>$)&&(lt=$/Math.max(mt.width,mt.height)),lt<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const ct=Math.floor(lt*mt.width),It=Math.floor(lt*mt.height);h===void 0&&(h=g(ct,It));const Mt=R?g(ct,It):h;return Mt.width=ct,Mt.height=It,Mt.getContext("2d").drawImage(k,0,0,ct,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ct+"x"+It+")."),Mt}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),k;return k}function p(k){return k.generateMipmaps}function m(k){i.generateMipmap(k)}function y(k){return k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?i.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(k,R,$,lt,mt=!1){if(k!==null){if(i[k]!==void 0)return i[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let ct=R;if(R===i.RED&&($===i.FLOAT&&(ct=i.R32F),$===i.HALF_FLOAT&&(ct=i.R16F),$===i.UNSIGNED_BYTE&&(ct=i.R8)),R===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ct=i.R8UI),$===i.UNSIGNED_SHORT&&(ct=i.R16UI),$===i.UNSIGNED_INT&&(ct=i.R32UI),$===i.BYTE&&(ct=i.R8I),$===i.SHORT&&(ct=i.R16I),$===i.INT&&(ct=i.R32I)),R===i.RG&&($===i.FLOAT&&(ct=i.RG32F),$===i.HALF_FLOAT&&(ct=i.RG16F),$===i.UNSIGNED_BYTE&&(ct=i.RG8)),R===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ct=i.RG8UI),$===i.UNSIGNED_SHORT&&(ct=i.RG16UI),$===i.UNSIGNED_INT&&(ct=i.RG32UI),$===i.BYTE&&(ct=i.RG8I),$===i.SHORT&&(ct=i.RG16I),$===i.INT&&(ct=i.RG32I)),R===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),$===i.UNSIGNED_INT&&(ct=i.RGB32UI),$===i.BYTE&&(ct=i.RGB8I),$===i.SHORT&&(ct=i.RGB16I),$===i.INT&&(ct=i.RGB32I)),R===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),$===i.UNSIGNED_INT&&(ct=i.RGBA32UI),$===i.BYTE&&(ct=i.RGBA8I),$===i.SHORT&&(ct=i.RGBA16I),$===i.INT&&(ct=i.RGBA32I)),R===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),R===i.RGBA){const It=mt?ka:te.getTransfer(lt);$===i.FLOAT&&(ct=i.RGBA32F),$===i.HALF_FLOAT&&(ct=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ct=It===ce?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function _(k,R){let $;return k?R===null||R===Oi||R===Ss?$=i.DEPTH24_STENCIL8:R===Fn?$=i.DEPTH32F_STENCIL8:R===lr&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Oi||R===Ss?$=i.DEPTH_COMPONENT24:R===Fn?$=i.DEPTH_COMPONENT32F:R===lr&&($=i.DEPTH_COMPONENT16),$}function E(k,R){return p(k)===!0||k.isFramebufferTexture&&k.minFilter!==un&&k.minFilter!==zn?Math.log2(Math.max(R.width,R.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?R.mipmaps.length:1}function w(k){const R=k.target;R.removeEventListener("dispose",w),A(R),R.isVideoTexture&&f.delete(R)}function S(k){const R=k.target;R.removeEventListener("dispose",S),M(R)}function A(k){const R=n.get(k);if(R.__webglInit===void 0)return;const $=k.source,lt=u.get($);if(lt){const mt=lt[R.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&b(k),Object.keys(lt).length===0&&u.delete($)}n.remove(k)}function b(k){const R=n.get(k);i.deleteTexture(R.__webglTexture);const $=k.source,lt=u.get($);delete lt[R.__cacheKey],a.memory.textures--}function M(k){const R=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(R.__webglFramebuffer[lt]))for(let mt=0;mt<R.__webglFramebuffer[lt].length;mt++)i.deleteFramebuffer(R.__webglFramebuffer[lt][mt]);else i.deleteFramebuffer(R.__webglFramebuffer[lt]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[lt])}else{if(Array.isArray(R.__webglFramebuffer))for(let lt=0;lt<R.__webglFramebuffer.length;lt++)i.deleteFramebuffer(R.__webglFramebuffer[lt]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let lt=0;lt<R.__webglColorRenderbuffer.length;lt++)R.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[lt]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const $=k.textures;for(let lt=0,mt=$.length;lt<mt;lt++){const ct=n.get($[lt]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove($[lt])}n.remove(k)}let P=0;function z(){P=0}function U(){const k=P;return k>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+s.maxTextures),P+=1,k}function F(k){const R=[];return R.push(k.wrapS),R.push(k.wrapT),R.push(k.wrapR||0),R.push(k.magFilter),R.push(k.minFilter),R.push(k.anisotropy),R.push(k.internalFormat),R.push(k.format),R.push(k.type),R.push(k.generateMipmaps),R.push(k.premultiplyAlpha),R.push(k.flipY),R.push(k.unpackAlignment),R.push(k.colorSpace),R.join()}function H(k,R){const $=n.get(k);if(k.isVideoTexture&&ht(k),k.isRenderTargetTexture===!1&&k.version>0&&$.__version!==k.version){const lt=k.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{T($,k,R);return}}e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+R)}function G(k,R){const $=n.get(k);if(k.version>0&&$.__version!==k.version){T($,k,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+R)}function Y(k,R){const $=n.get(k);if(k.version>0&&$.__version!==k.version){T($,k,R);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+R)}function W(k,R){const $=n.get(k);if(k.version>0&&$.__version!==k.version){C($,k,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+R)}const V={[ya]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[ol]:i.MIRRORED_REPEAT},Q={[un]:i.NEAREST,[tp]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Va]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},tt={[sp]:i.NEVER,[hp]:i.ALWAYS,[rp]:i.LESS,[mu]:i.LEQUAL,[ap]:i.EQUAL,[cp]:i.GEQUAL,[op]:i.GREATER,[lp]:i.NOTEQUAL};function ut(k,R){if(R.type===Fn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===zn||R.magFilter===Va||R.magFilter===vr||R.magFilter===Ui||R.minFilter===zn||R.minFilter===Va||R.minFilter===vr||R.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,V[R.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,V[R.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,V[R.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,Q[R.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,Q[R.minFilter]),R.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,tt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===un||R.minFilter!==vr&&R.minFilter!==Ui||R.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(k,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function L(k,R){let $=!1;k.__webglInit===void 0&&(k.__webglInit=!0,R.addEventListener("dispose",w));const lt=R.source;let mt=u.get(lt);mt===void 0&&(mt={},u.set(lt,mt));const ct=F(R);if(ct!==k.__cacheKey){mt[ct]===void 0&&(mt[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),mt[ct].usedTimes++;const It=mt[k.__cacheKey];It!==void 0&&(mt[k.__cacheKey].usedTimes--,It.usedTimes===0&&b(R)),k.__cacheKey=ct,k.__webglTexture=mt[ct].texture}return $}function T(k,R,$){let lt=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(lt=i.TEXTURE_3D);const mt=L(k,R),ct=R.source;e.bindTexture(lt,k.__webglTexture,i.TEXTURE0+$);const It=n.get(ct);if(ct.version!==It.__version||mt===!0){e.activeTexture(i.TEXTURE0+$);const Mt=te.getPrimaries(te.workingColorSpace),At=R.colorSpace===pi?null:te.getPrimaries(R.colorSpace),$t=R.colorSpace===pi||Mt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let vt=x(R.image,!1,s.maxTextureSize);vt=Lt(R,vt);const Rt=r.convert(R.format,R.colorSpace),Ot=r.convert(R.type);let Bt=v(R.internalFormat,Rt,Ot,R.colorSpace,R.isVideoTexture);ut(lt,R);let Pt;const Qt=R.mipmaps,qt=R.isVideoTexture!==!0,pe=It.__version===void 0||mt===!0,X=ct.dataReady,wt=E(R,vt);if(R.isDepthTexture)Bt=_(R.format===Ts,R.type),pe&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Bt,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,vt.width,vt.height,0,Rt,Ot,null));else if(R.isDataTexture)if(Qt.length>0){qt&&pe&&e.texStorage2D(i.TEXTURE_2D,wt,Bt,Qt[0].width,Qt[0].height);for(let ot=0,pt=Qt.length;ot<pt;ot++)Pt=Qt[ot],qt?X&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,Rt,Ot,Pt.data):e.texImage2D(i.TEXTURE_2D,ot,Bt,Pt.width,Pt.height,0,Rt,Ot,Pt.data);R.generateMipmaps=!1}else qt?(pe&&e.texStorage2D(i.TEXTURE_2D,wt,Bt,vt.width,vt.height),X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt.width,vt.height,Rt,Ot,vt.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,vt.width,vt.height,0,Rt,Ot,vt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){qt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Bt,Qt[0].width,Qt[0].height,vt.depth);for(let ot=0,pt=Qt.length;ot<pt;ot++)if(Pt=Qt[ot],R.format!==Ln)if(Rt!==null)if(qt){if(X)if(R.layerUpdates.size>0){const Et=zh(Pt.width,Pt.height,R.format,R.type);for(const St of R.layerUpdates){const Vt=Pt.data.subarray(St*Et/Pt.data.BYTES_PER_ELEMENT,(St+1)*Et/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,St,Pt.width,Pt.height,1,Rt,Vt)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,vt.depth,Rt,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Bt,Pt.width,Pt.height,vt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,vt.depth,Rt,Ot,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Bt,Pt.width,Pt.height,vt.depth,0,Rt,Ot,Pt.data)}else{qt&&pe&&e.texStorage2D(i.TEXTURE_2D,wt,Bt,Qt[0].width,Qt[0].height);for(let ot=0,pt=Qt.length;ot<pt;ot++)Pt=Qt[ot],R.format!==Ln?Rt!==null?qt?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,Rt,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Bt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?X&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,Rt,Ot,Pt.data):e.texImage2D(i.TEXTURE_2D,ot,Bt,Pt.width,Pt.height,0,Rt,Ot,Pt.data)}else if(R.isDataArrayTexture)if(qt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Bt,vt.width,vt.height,vt.depth),X)if(R.layerUpdates.size>0){const ot=zh(vt.width,vt.height,R.format,R.type);for(const pt of R.layerUpdates){const Et=vt.data.subarray(pt*ot/vt.data.BYTES_PER_ELEMENT,(pt+1)*ot/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,vt.width,vt.height,1,Rt,Ot,Et)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Rt,Ot,vt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,vt.width,vt.height,vt.depth,0,Rt,Ot,vt.data);else if(R.isData3DTexture)qt?(pe&&e.texStorage3D(i.TEXTURE_3D,wt,Bt,vt.width,vt.height,vt.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Rt,Ot,vt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,vt.width,vt.height,vt.depth,0,Rt,Ot,vt.data);else if(R.isFramebufferTexture){if(pe)if(qt)e.texStorage2D(i.TEXTURE_2D,wt,Bt,vt.width,vt.height);else{let ot=vt.width,pt=vt.height;for(let Et=0;Et<wt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Bt,ot,pt,0,Rt,Ot,null),ot>>=1,pt>>=1}}else if(Qt.length>0){if(qt&&pe){const ot=bt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Bt,ot.width,ot.height)}for(let ot=0,pt=Qt.length;ot<pt;ot++)Pt=Qt[ot],qt?X&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Rt,Ot,Pt):e.texImage2D(i.TEXTURE_2D,ot,Bt,Rt,Ot,Pt);R.generateMipmaps=!1}else if(qt){if(pe){const ot=bt(vt);e.texStorage2D(i.TEXTURE_2D,wt,Bt,ot.width,ot.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Ot,vt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Rt,Ot,vt);p(R)&&m(lt),It.__version=ct.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function C(k,R,$){if(R.image.length!==6)return;const lt=L(k,R),mt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+$);const ct=n.get(mt);if(mt.version!==ct.__version||lt===!0){e.activeTexture(i.TEXTURE0+$);const It=te.getPrimaries(te.workingColorSpace),Mt=R.colorSpace===pi?null:te.getPrimaries(R.colorSpace),At=R.colorSpace===pi||It===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const $t=R.isCompressedTexture||R.image[0].isCompressedTexture,vt=R.image[0]&&R.image[0].isDataTexture,Rt=[];for(let pt=0;pt<6;pt++)!$t&&!vt?Rt[pt]=x(R.image[pt],!0,s.maxCubemapSize):Rt[pt]=vt?R.image[pt].image:R.image[pt],Rt[pt]=Lt(R,Rt[pt]);const Ot=Rt[0],Bt=r.convert(R.format,R.colorSpace),Pt=r.convert(R.type),Qt=v(R.internalFormat,Bt,Pt,R.colorSpace),qt=R.isVideoTexture!==!0,pe=ct.__version===void 0||lt===!0,X=mt.dataReady;let wt=E(R,Ot);ut(i.TEXTURE_CUBE_MAP,R);let ot;if($t){qt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Qt,Ot.width,Ot.height);for(let pt=0;pt<6;pt++){ot=Rt[pt].mipmaps;for(let Et=0;Et<ot.length;Et++){const St=ot[Et];R.format!==Ln?Bt!==null?qt?X&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et,0,0,St.width,St.height,Bt,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et,Qt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et,0,0,St.width,St.height,Bt,Pt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et,Qt,St.width,St.height,0,Bt,Pt,St.data)}}}else{if(ot=R.mipmaps,qt&&pe){ot.length>0&&wt++;const pt=bt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Qt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(vt){qt?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Rt[pt].width,Rt[pt].height,Bt,Pt,Rt[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Qt,Rt[pt].width,Rt[pt].height,0,Bt,Pt,Rt[pt].data);for(let Et=0;Et<ot.length;Et++){const Vt=ot[Et].image[pt].image;qt?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et+1,0,0,Vt.width,Vt.height,Bt,Pt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et+1,Qt,Vt.width,Vt.height,0,Bt,Pt,Vt.data)}}else{qt?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Bt,Pt,Rt[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Qt,Bt,Pt,Rt[pt]);for(let Et=0;Et<ot.length;Et++){const St=ot[Et];qt?X&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et+1,0,0,Bt,Pt,St.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et+1,Qt,Bt,Pt,St.image[pt])}}}p(R)&&m(i.TEXTURE_CUBE_MAP),ct.__version=mt.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function B(k,R,$,lt,mt,ct){const It=r.convert($.format,$.colorSpace),Mt=r.convert($.type),At=v($.internalFormat,It,Mt,$.colorSpace),$t=n.get(R),vt=n.get($);if(vt.__renderTarget=R,!$t.__hasExternalTextures){const Rt=Math.max(1,R.width>>ct),Ot=Math.max(1,R.height>>ct);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,ct,At,Rt,Ot,R.depth,0,It,Mt,null):e.texImage2D(mt,ct,At,Rt,Ot,0,It,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,k),rt(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,mt,vt.__webglTexture,0,Z(R)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,mt,vt.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function O(k,R,$){if(i.bindRenderbuffer(i.RENDERBUFFER,k),R.depthBuffer){const lt=R.depthTexture,mt=lt&&lt.isDepthTexture?lt.type:null,ct=_(R.stencilBuffer,mt),It=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=Z(R);rt(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,ct,R.width,R.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,ct,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ct,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,k)}else{const lt=R.textures;for(let mt=0;mt<lt.length;mt++){const ct=lt[mt],It=r.convert(ct.format,ct.colorSpace),Mt=r.convert(ct.type),At=v(ct.internalFormat,It,Mt,ct.colorSpace),$t=Z(R);$&&rt(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,At,R.width,R.height):rt(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,At,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,At,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function J(k,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,k),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=n.get(R.depthTexture);lt.__renderTarget=R,(!lt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H(R.depthTexture,0);const mt=lt.__webglTexture,ct=Z(R);if(R.depthTexture.format===vs)rt(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0);else if(R.depthTexture.format===Ts)rt(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function dt(k){const R=n.get(k),$=k.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==k.depthTexture){const lt=k.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),lt){const mt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,lt.removeEventListener("dispose",mt)};lt.addEventListener("dispose",mt),R.__depthDisposeCallback=mt}R.__boundDepthTexture=lt}if(k.depthTexture&&!R.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");J(R.__webglFramebuffer,k)}else if($){R.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[lt]),R.__webglDepthbuffer[lt]===void 0)R.__webglDepthbuffer[lt]=i.createRenderbuffer(),O(R.__webglDepthbuffer[lt],k,!1);else{const mt=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=R.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,ct)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),O(R.__webglDepthbuffer,k,!1);else{const lt=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(k,R,$){const lt=n.get(k);R!==void 0&&B(lt.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&dt(k)}function gt(k){const R=k.texture,$=n.get(k),lt=n.get(R);k.addEventListener("dispose",S);const mt=k.textures,ct=k.isWebGLCubeRenderTarget===!0,It=mt.length>1;if(It||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=R.version,a.memory.textures++),ct){$.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer[Mt]=[];for(let At=0;At<R.mipmaps.length;At++)$.__webglFramebuffer[Mt][At]=i.createFramebuffer()}else $.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer=[];for(let Mt=0;Mt<R.mipmaps.length;Mt++)$.__webglFramebuffer[Mt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(It)for(let Mt=0,At=mt.length;Mt<At;Mt++){const $t=n.get(mt[Mt]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),a.memory.textures++)}if(k.samples>0&&rt(k)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Mt=0;Mt<mt.length;Mt++){const At=mt[Mt];$.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[Mt]);const $t=r.convert(At.format,At.colorSpace),vt=r.convert(At.type),Rt=v(At.internalFormat,$t,vt,At.colorSpace,k.isXRRenderTarget===!0),Ot=Z(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Rt,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,$.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),O($.__webglDepthRenderbuffer,k,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),ut(i.TEXTURE_CUBE_MAP,R);for(let Mt=0;Mt<6;Mt++)if(R.mipmaps&&R.mipmaps.length>0)for(let At=0;At<R.mipmaps.length;At++)B($.__webglFramebuffer[Mt][At],k,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,At);else B($.__webglFramebuffer[Mt],k,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);p(R)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let Mt=0,At=mt.length;Mt<At;Mt++){const $t=mt[Mt],vt=n.get($t);e.bindTexture(i.TEXTURE_2D,vt.__webglTexture),ut(i.TEXTURE_2D,$t),B($.__webglFramebuffer,k,$t,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),p($t)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Mt=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,lt.__webglTexture),ut(Mt,R),R.mipmaps&&R.mipmaps.length>0)for(let At=0;At<R.mipmaps.length;At++)B($.__webglFramebuffer[At],k,R,i.COLOR_ATTACHMENT0,Mt,At);else B($.__webglFramebuffer,k,R,i.COLOR_ATTACHMENT0,Mt,0);p(R)&&m(Mt),e.unbindTexture()}k.depthBuffer&&dt(k)}function K(k){const R=k.textures;for(let $=0,lt=R.length;$<lt;$++){const mt=R[$];if(p(mt)){const ct=y(k),It=n.get(mt).__webglTexture;e.bindTexture(ct,It),m(ct),e.unbindTexture()}}}const st=[],D=[];function xt(k){if(k.samples>0){if(rt(k)===!1){const R=k.textures,$=k.width,lt=k.height;let mt=i.COLOR_BUFFER_BIT;const ct=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(k),Mt=R.length>1;if(Mt)for(let At=0;At<R.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let At=0;At<R.length;At++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[At]);const $t=n.get(R[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,$,lt,0,0,$,lt,mt,i.NEAREST),l===!0&&(st.length=0,D.length=0,st.push(i.COLOR_ATTACHMENT0+At),k.depthBuffer&&k.resolveDepthBuffer===!1&&(st.push(ct),D.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let At=0;At<R.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,It.__webglColorRenderbuffer[At]);const $t=n.get(R[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&l){const R=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Z(k){return Math.min(s.maxSamples,k.samples)}function rt(k){const R=n.get(k);return k.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ht(k){const R=a.render.frame;f.get(k)!==R&&(f.set(k,R),k.update())}function Lt(k,R){const $=k.colorSpace,lt=k.format,mt=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||$!==Rs&&$!==pi&&(te.getTransfer($)===ce?(lt!==Ln||mt!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),R}function bt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=z,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=nt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=B,this.useMultisampledRTT=rt}function dx(i,t){function e(n,s=pi){let r;const a=te.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return i.BYTE;if(n===ou)return i.SHORT;if(n===lr)return i.UNSIGNED_SHORT;if(n===ic)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===cu)return i.ALPHA;if(n===hu)return i.RGB;if(n===Ln)return i.RGBA;if(n===fu)return i.LUMINANCE;if(n===uu)return i.LUMINANCE_ALPHA;if(n===vs)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===ac)return i.RED;if(n===oc)return i.RED_INTEGER;if(n===du)return i.RG;if(n===lc)return i.RG_INTEGER;if(n===cc)return i.RGBA_INTEGER;if(n===ua||n===da||n===pa||n===ma)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ul||n===dl||n===pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ul||n===dl)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===gl||n===xl||n===vl||n===_l||n===yl||n===bl||n===Ml||n===wl||n===Sl||n===Tl||n===El||n===Al||n===Cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ml)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ml)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ga||n===Rl||n===Pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ga)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pu||n===Ll||n===Il||n===kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class px extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class hn extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mx={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qe({vertexShader:gx,fragmentShader:xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new Ae(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _x extends Ps{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,u=null,d=null,g=null;const x=new vx,p=e.getContextAttributes();let m=null,y=null;const v=[],_=[],E=new ft;let w=null;const S=new cn;S.viewport=new de;const A=new cn;A.viewport=new de;const b=[S,A],M=new px;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let C=v[T];return C===void 0&&(C=new _o,v[T]=C),C.getTargetRaySpace()},this.getControllerGrip=function(T){let C=v[T];return C===void 0&&(C=new _o,v[T]=C),C.getGripSpace()},this.getHand=function(T){let C=v[T];return C===void 0&&(C=new _o,v[T]=C),C.getHandSpace()};function U(T){const C=_.indexOf(T.inputSource);if(C===-1)return;const B=v[C];B!==void 0&&(B.update(T.inputSource,T.frame,c||a),B.dispatchEvent({type:T.type,data:T.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",H);for(let T=0;T<v.length;T++){const C=_[T];C!==null&&(_[T]=null,v[T].disconnect(C))}P=null,z=null,x.reset(),t.setRenderTarget(m),d=null,u=null,h=null,s=null,y=null,L.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){o=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(T){c=T},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(T){if(s=T,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){const C={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,C),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new bn(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let C=null,B=null,O=null;p.depth&&(O=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,C=p.stencil?Ts:vs,B=p.stencil?Ss:Oi);const J={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:r};h=new XRWebGLBinding(s,e),u=h.createProjectionLayer(J),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new bn(u.textureWidth,u.textureHeight,{format:Ln,type:ni,depthTexture:new Cu(u.textureWidth,u.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),L.setContext(s),L.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(T){for(let C=0;C<T.removed.length;C++){const B=T.removed[C],O=_.indexOf(B);O>=0&&(_[O]=null,v[O].disconnect(B))}for(let C=0;C<T.added.length;C++){const B=T.added[C];let O=_.indexOf(B);if(O===-1){for(let dt=0;dt<v.length;dt++)if(dt>=_.length){_.push(B),O=dt;break}else if(_[dt]===null){_[dt]=B,O=dt;break}if(O===-1)break}const J=v[O];J&&J.connect(B)}}const G=new N,Y=new N;function W(T,C,B){G.setFromMatrixPosition(C.matrixWorld),Y.setFromMatrixPosition(B.matrixWorld);const O=G.distanceTo(Y),J=C.projectionMatrix.elements,dt=B.projectionMatrix.elements,nt=J[14]/(J[10]-1),gt=J[14]/(J[10]+1),K=(J[9]+1)/J[5],st=(J[9]-1)/J[5],D=(J[8]-1)/J[0],xt=(dt[8]+1)/dt[0],Z=nt*D,rt=nt*xt,ht=O/(-D+xt),Lt=ht*-D;if(C.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(Lt),T.translateZ(ht),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),J[10]===-1)T.projectionMatrix.copy(C.projectionMatrix),T.projectionMatrixInverse.copy(C.projectionMatrixInverse);else{const bt=nt+ht,k=gt+ht,R=Z-Lt,$=rt+(O-Lt),lt=K*gt/k*bt,mt=st*gt/k*bt;T.projectionMatrix.makePerspective(R,$,lt,mt,bt,k),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}}function V(T,C){C===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(C.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(s===null)return;let C=T.near,B=T.far;x.texture!==null&&(x.depthNear>0&&(C=x.depthNear),x.depthFar>0&&(B=x.depthFar)),M.near=A.near=S.near=C,M.far=A.far=S.far=B,(P!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,z=M.far),S.layers.mask=T.layers.mask|2,A.layers.mask=T.layers.mask|4,M.layers.mask=S.layers.mask|A.layers.mask;const O=T.parent,J=M.cameras;V(M,O);for(let dt=0;dt<J.length;dt++)V(J[dt],O);J.length===2?W(M,S,A):M.projectionMatrix.copy(S.projectionMatrix),Q(T,M,O)};function Q(T,C,B){B===null?T.matrix.copy(C.matrixWorld):(T.matrix.copy(B.matrixWorld),T.matrix.invert(),T.matrix.multiply(C.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(C.projectionMatrix),T.projectionMatrixInverse.copy(C.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=Ul*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(T){l=T,u!==null&&(u.fixedFoveation=T),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=T)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let tt=null;function ut(T,C){if(f=C.getViewerPose(c||a),g=C,f!==null){const B=f.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let O=!1;B.length!==M.cameras.length&&(M.cameras.length=0,O=!0);for(let dt=0;dt<B.length;dt++){const nt=B[dt];let gt=null;if(d!==null)gt=d.getViewport(nt);else{const st=h.getViewSubImage(u,nt);gt=st.viewport,dt===0&&(t.setRenderTargetTextures(y,st.colorTexture,u.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(y))}let K=b[dt];K===void 0&&(K=new cn,K.layers.enable(dt),K.viewport=new de,b[dt]=K),K.matrix.fromArray(nt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(nt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(gt.x,gt.y,gt.width,gt.height),dt===0&&(M.matrix.copy(K.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),O===!0&&M.cameras.push(K)}const J=s.enabledFeatures;if(J&&J.includes("depth-sensing")){const dt=h.getDepthInformation(B[0]);dt&&dt.isValid&&dt.texture&&x.init(t,dt,s.renderState)}}for(let B=0;B<v.length;B++){const O=_[B],J=v[B];O!==null&&J!==void 0&&J.update(O,C,c||a)}tt&&tt(T,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),g=null}const L=new Au;L.setAnimationLoop(ut),this.setAnimationLoop=function(T){tt=T},this.dispose=function(){}}}const Ci=new Ze,yx=new ee;function bx(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Su(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,v,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),f(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ye&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ye&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),v=y.envMap,_=y.envMapRotation;v&&(p.envMap.value=v,Ci.copy(_),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),p.envMapRotation.value.setFromMatrix4(yx.makeRotationFromEuler(Ci)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function f(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ye&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const _=v.program;n.uniformBlockBinding(y,_)}function c(y,v){let _=s[y.id];_===void 0&&(g(y),_=f(y),s[y.id]=_,y.addEventListener("dispose",p));const E=v.program;n.updateUBOMapping(y,E);const w=t.render.frame;r[y.id]!==w&&(u(y),r[y.id]=w)}function f(y){const v=h();y.__bindingPointIndex=v;const _=i.createBuffer(),E=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,E,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const v=s[y.id],_=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,S=_.length;w<S;w++){const A=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,M=A.length;b<M;b++){const P=A[b];if(d(P,w,b,E)===!0){const z=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let H=0;H<U.length;H++){const G=U[H],Y=x(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,z+F,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,F),F+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,v,_,E){const w=y.value,S=v+"_"+_;if(E[S]===void 0)return typeof w=="number"||typeof w=="boolean"?E[S]=w:E[S]=w.clone(),!0;{const A=E[S];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return E[S]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(y){const v=y.uniforms;let _=0;const E=16;for(let S=0,A=v.length;S<A;S++){const b=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,P=b.length;M<P;M++){const z=b[M],U=Array.isArray(z.value)?z.value:[z.value];for(let F=0,H=U.length;F<H;F++){const G=U[F],Y=x(G),W=_%E,V=W%Y.boundary,Q=W+V;_+=V,Q!==0&&E-Q<Y.storage&&(_+=E-Q),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=Y.storage}}}const w=_%E;return w>0&&(_+=E-w),y.__size=_,y.__cache={},this}function x(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class wx{constructor(t={}){const{canvas:e=up(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,m=null;const y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=vi,this.toneMappingExposure=1;const _=this;let E=!1,w=0,S=0,A=null,b=-1,M=null;const P=new de,z=new de;let U=null;const F=new Nt(0);let H=0,G=e.width,Y=e.height,W=1,V=null,Q=null;const tt=new de(0,0,G,Y),ut=new de(0,0,G,Y);let L=!1;const T=new fc;let C=!1,B=!1;const O=new ee,J=new ee,dt=new N,nt=new de,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function st(){return A===null?W:1}let D=n;function xt(I,q){return e.getContext(I,q)}try{const I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tc}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",St,!1),D===null){const q="webgl2";if(D=xt(q,I),D===null)throw xt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Z,rt,ht,Lt,bt,k,R,$,lt,mt,ct,It,Mt,At,$t,vt,Rt,Ot,Bt,Pt,Qt,qt,pe,X;function wt(){Z=new Cg(D),Z.init(),qt=new dx(D,Z),rt=new Mg(D,Z,t,qt),ht=new hx(D,Z),rt.reverseDepthBuffer&&u&&ht.buffers.depth.setReversed(!0),Lt=new Lg(D),bt=new Z1,k=new ux(D,Z,ht,bt,rt,qt,Lt),R=new Sg(_),$=new Ag(_),lt=new Fp(D),pe=new yg(D,lt),mt=new Rg(D,lt,Lt,pe),ct=new kg(D,mt,lt,Lt),Bt=new Ig(D,rt,k),vt=new wg(bt),It=new j1(_,R,$,Z,rt,pe,vt),Mt=new bx(_,bt),At=new K1,$t=new ix(Z),Ot=new _g(_,R,$,ht,ct,d,l),Rt=new lx(_,ct,rt),X=new Mx(D,Lt,rt,ht),Pt=new bg(D,Z,Lt),Qt=new Pg(D,Z,Lt),Lt.programs=It.programs,_.capabilities=rt,_.extensions=Z,_.properties=bt,_.renderLists=At,_.shadowMap=Rt,_.state=ht,_.info=Lt}wt();const ot=new _x(_,D);this.xr=ot,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const I=Z.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Z.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(I){I!==void 0&&(W=I,this.setSize(G,Y,!1))},this.getSize=function(I){return I.set(G,Y)},this.setSize=function(I,q,et=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=I,Y=q,e.width=Math.floor(I*W),e.height=Math.floor(q*W),et===!0&&(e.style.width=I+"px",e.style.height=q+"px"),this.setViewport(0,0,I,q)},this.getDrawingBufferSize=function(I){return I.set(G*W,Y*W).floor()},this.setDrawingBufferSize=function(I,q,et){G=I,Y=q,W=et,e.width=Math.floor(I*et),e.height=Math.floor(q*et),this.setViewport(0,0,I,q)},this.getCurrentViewport=function(I){return I.copy(P)},this.getViewport=function(I){return I.copy(tt)},this.setViewport=function(I,q,et,it){I.isVector4?tt.set(I.x,I.y,I.z,I.w):tt.set(I,q,et,it),ht.viewport(P.copy(tt).multiplyScalar(W).round())},this.getScissor=function(I){return I.copy(ut)},this.setScissor=function(I,q,et,it){I.isVector4?ut.set(I.x,I.y,I.z,I.w):ut.set(I,q,et,it),ht.scissor(z.copy(ut).multiplyScalar(W).round())},this.getScissorTest=function(){return L},this.setScissorTest=function(I){ht.setScissorTest(L=I)},this.setOpaqueSort=function(I){V=I},this.setTransparentSort=function(I){Q=I},this.getClearColor=function(I){return I.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(I=!0,q=!0,et=!0){let it=0;if(I){let j=!1;if(A!==null){const _t=A.texture.format;j=_t===cc||_t===lc||_t===oc}if(j){const _t=A.texture.type,Tt=_t===ni||_t===Oi||_t===lr||_t===Ss||_t===sc||_t===rc,kt=Ot.getClearColor(),Dt=Ot.getClearAlpha(),Ht=kt.r,Wt=kt.g,Ut=kt.b;Tt?(g[0]=Ht,g[1]=Wt,g[2]=Ut,g[3]=Dt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Ht,x[1]=Wt,x[2]=Ut,x[3]=Dt,D.clearBufferiv(D.COLOR,0,x))}else it|=D.COLOR_BUFFER_BIT}q&&(it|=D.DEPTH_BUFFER_BIT),et&&(it|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",St,!1),At.dispose(),$t.dispose(),bt.dispose(),R.dispose(),$.dispose(),ct.dispose(),pe.dispose(),X.dispose(),It.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Uc),ot.removeEventListener("sessionend",Nc),Mi.stop()};function pt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const I=Lt.autoReset,q=Rt.enabled,et=Rt.autoUpdate,it=Rt.needsUpdate,j=Rt.type;wt(),Lt.autoReset=I,Rt.enabled=q,Rt.autoUpdate=et,Rt.needsUpdate=it,Rt.type=j}function St(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Vt(I){const q=I.target;q.removeEventListener("dispose",Vt),Me(q)}function Me(I){ze(I),bt.remove(I)}function ze(I){const q=bt.get(I).programs;q!==void 0&&(q.forEach(function(et){It.releaseProgram(et)}),I.isShaderMaterial&&It.releaseShaderCache(I))}this.renderBufferDirect=function(I,q,et,it,j,_t){q===null&&(q=gt);const Tt=j.isMesh&&j.matrixWorld.determinant()<0,kt=Cd(I,q,et,it,j);ht.setMaterial(it,Tt);let Dt=et.index,Ht=1;if(it.wireframe===!0){if(Dt=mt.getWireframeAttribute(et),Dt===void 0)return;Ht=2}const Wt=et.drawRange,Ut=et.attributes.position;let ie=Wt.start*Ht,me=(Wt.start+Wt.count)*Ht;_t!==null&&(ie=Math.max(ie,_t.start*Ht),me=Math.min(me,(_t.start+_t.count)*Ht)),Dt!==null?(ie=Math.max(ie,0),me=Math.min(me,Dt.count)):Ut!=null&&(ie=Math.max(ie,0),me=Math.min(me,Ut.count));const ve=me-ie;if(ve<0||ve===1/0)return;pe.setup(j,it,kt,et,Dt);let Je,re=Pt;if(Dt!==null&&(Je=lt.get(Dt),re=Qt,re.setIndex(Je)),j.isMesh)it.wireframe===!0?(ht.setLineWidth(it.wireframeLinewidth*st()),re.setMode(D.LINES)):re.setMode(D.TRIANGLES);else if(j.isLine){let zt=it.linewidth;zt===void 0&&(zt=1),ht.setLineWidth(zt*st()),j.isLineSegments?re.setMode(D.LINES):j.isLineLoop?re.setMode(D.LINE_LOOP):re.setMode(D.LINE_STRIP)}else j.isPoints?re.setMode(D.POINTS):j.isSprite&&re.setMode(D.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)re.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))re.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const zt=j._multiDrawStarts,Vn=j._multiDrawCounts,ae=j._multiDrawCount,Sn=Dt?lt.get(Dt).bytesPerElement:1,Xi=bt.get(it).currentProgram.getUniforms();for(let rn=0;rn<ae;rn++)Xi.setValue(D,"_gl_DrawID",rn),re.render(zt[rn]/Sn,Vn[rn])}else if(j.isInstancedMesh)re.renderInstances(ie,ve,j.count);else if(et.isInstancedBufferGeometry){const zt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Vn=Math.min(et.instanceCount,zt);re.renderInstances(ie,ve,Vn)}else re.render(ie,ve)};function le(I,q,et){I.transparent===!0&&I.side===Ne&&I.forceSinglePass===!1?(I.side=Ye,I.needsUpdate=!0,xr(I,q,et),I.side=yi,I.needsUpdate=!0,xr(I,q,et),I.side=Ne):xr(I,q,et)}this.compile=function(I,q,et=null){et===null&&(et=I),m=$t.get(et),m.init(q),v.push(m),et.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),I!==et&&I.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights();const it=new Set;return I.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const _t=j.material;if(_t)if(Array.isArray(_t))for(let Tt=0;Tt<_t.length;Tt++){const kt=_t[Tt];le(kt,et,j),it.add(kt)}else le(_t,et,j),it.add(_t)}),v.pop(),m=null,it},this.compileAsync=function(I,q,et=null){const it=this.compile(I,q,et);return new Promise(j=>{function _t(){if(it.forEach(function(Tt){bt.get(Tt).currentProgram.isReady()&&it.delete(Tt)}),it.size===0){j(I);return}setTimeout(_t,10)}Z.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let wn=null;function Gn(I){wn&&wn(I)}function Uc(){Mi.stop()}function Nc(){Mi.start()}const Mi=new Au;Mi.setAnimationLoop(Gn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(I){wn=I,ot.setAnimationLoop(I),I===null?Mi.stop():Mi.start()},ot.addEventListener("sessionstart",Uc),ot.addEventListener("sessionend",Nc),this.render=function(I,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(q),q=ot.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,q,A),m=$t.get(I,v.length),m.init(q),v.push(m),J.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),T.setFromProjectionMatrix(J),B=this.localClippingEnabled,C=vt.init(this.clippingPlanes,B),p=At.get(I,y.length),p.init(),y.push(p),ot.enabled===!0&&ot.isPresenting===!0){const _t=_.xr.getDepthSensingMesh();_t!==null&&Ga(_t,q,-1/0,_.sortObjects)}Ga(I,q,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(V,Q),K=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,K&&Ot.addToRenderList(p,I),this.info.render.frame++,C===!0&&vt.beginShadows();const et=m.state.shadowsArray;Rt.render(et,I,q),C===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=p.opaque,j=p.transmissive;if(m.setupLights(),q.isArrayCamera){const _t=q.cameras;if(j.length>0)for(let Tt=0,kt=_t.length;Tt<kt;Tt++){const Dt=_t[Tt];Fc(it,j,I,Dt)}K&&Ot.render(I);for(let Tt=0,kt=_t.length;Tt<kt;Tt++){const Dt=_t[Tt];zc(p,I,Dt,Dt.viewport)}}else j.length>0&&Fc(it,j,I,q),K&&Ot.render(I),zc(p,I,q);A!==null&&(k.updateMultisampleRenderTarget(A),k.updateRenderTargetMipmap(A)),I.isScene===!0&&I.onAfterRender(_,I,q),pe.resetDefaultState(),b=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],C===!0&&vt.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function Ga(I,q,et,it){if(I.visible===!1)return;if(I.layers.test(q.layers)){if(I.isGroup)et=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(q);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||T.intersectsSprite(I)){it&&nt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(J);const Tt=ct.update(I),kt=I.material;kt.visible&&p.push(I,Tt,kt,et,nt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||T.intersectsObject(I))){const Tt=ct.update(I),kt=I.material;if(it&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),nt.copy(I.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),nt.copy(Tt.boundingSphere.center)),nt.applyMatrix4(I.matrixWorld).applyMatrix4(J)),Array.isArray(kt)){const Dt=Tt.groups;for(let Ht=0,Wt=Dt.length;Ht<Wt;Ht++){const Ut=Dt[Ht],ie=kt[Ut.materialIndex];ie&&ie.visible&&p.push(I,Tt,ie,et,nt.z,Ut)}}else kt.visible&&p.push(I,Tt,kt,et,nt.z,null)}}const _t=I.children;for(let Tt=0,kt=_t.length;Tt<kt;Tt++)Ga(_t[Tt],q,et,it)}function zc(I,q,et,it){const j=I.opaque,_t=I.transmissive,Tt=I.transparent;m.setupLightsView(et),C===!0&&vt.setGlobalState(_.clippingPlanes,et),it&&ht.viewport(P.copy(it)),j.length>0&&gr(j,q,et),_t.length>0&&gr(_t,q,et),Tt.length>0&&gr(Tt,q,et),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Fc(I,q,et,it){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[it.id]===void 0&&(m.state.transmissionRenderTarget[it.id]=new bn(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?On:ni,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const _t=m.state.transmissionRenderTarget[it.id],Tt=it.viewport||P;_t.setSize(Tt.z,Tt.w);const kt=_.getRenderTarget();_.setRenderTarget(_t),_.getClearColor(F),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),K&&Ot.render(et);const Dt=_.toneMapping;_.toneMapping=vi;const Ht=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),m.setupLightsView(it),C===!0&&vt.setGlobalState(_.clippingPlanes,it),gr(I,et,it),k.updateMultisampleRenderTarget(_t),k.updateRenderTargetMipmap(_t),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ut=0,ie=q.length;Ut<ie;Ut++){const me=q[Ut],ve=me.object,Je=me.geometry,re=me.material,zt=me.group;if(re.side===Ne&&ve.layers.test(it.layers)){const Vn=re.side;re.side=Ye,re.needsUpdate=!0,Oc(ve,et,it,Je,re,zt),re.side=Vn,re.needsUpdate=!0,Wt=!0}}Wt===!0&&(k.updateMultisampleRenderTarget(_t),k.updateRenderTargetMipmap(_t))}_.setRenderTarget(kt),_.setClearColor(F,H),Ht!==void 0&&(it.viewport=Ht),_.toneMapping=Dt}function gr(I,q,et){const it=q.isScene===!0?q.overrideMaterial:null;for(let j=0,_t=I.length;j<_t;j++){const Tt=I[j],kt=Tt.object,Dt=Tt.geometry,Ht=it===null?Tt.material:it,Wt=Tt.group;kt.layers.test(et.layers)&&Oc(kt,q,et,Dt,Ht,Wt)}}function Oc(I,q,et,it,j,_t){I.onBeforeRender(_,q,et,it,j,_t),I.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),j.onBeforeRender(_,q,et,it,I,_t),j.transparent===!0&&j.side===Ne&&j.forceSinglePass===!1?(j.side=Ye,j.needsUpdate=!0,_.renderBufferDirect(et,q,it,j,I,_t),j.side=yi,j.needsUpdate=!0,_.renderBufferDirect(et,q,it,j,I,_t),j.side=Ne):_.renderBufferDirect(et,q,it,j,I,_t),I.onAfterRender(_,q,et,it,j,_t)}function xr(I,q,et){q.isScene!==!0&&(q=gt);const it=bt.get(I),j=m.state.lights,_t=m.state.shadowsArray,Tt=j.state.version,kt=It.getParameters(I,j.state,_t,q,et),Dt=It.getProgramCacheKey(kt);let Ht=it.programs;it.environment=I.isMeshStandardMaterial?q.environment:null,it.fog=q.fog,it.envMap=(I.isMeshStandardMaterial?$:R).get(I.envMap||it.environment),it.envMapRotation=it.environment!==null&&I.envMap===null?q.environmentRotation:I.envMapRotation,Ht===void 0&&(I.addEventListener("dispose",Vt),Ht=new Map,it.programs=Ht);let Wt=Ht.get(Dt);if(Wt!==void 0){if(it.currentProgram===Wt&&it.lightsStateVersion===Tt)return Hc(I,kt),Wt}else kt.uniforms=It.getUniforms(I),I.onBeforeCompile(kt,_),Wt=It.acquireProgram(kt,Dt),Ht.set(Dt,Wt),it.uniforms=kt.uniforms;const Ut=it.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ut.clippingPlanes=vt.uniform),Hc(I,kt),it.needsLights=Pd(I),it.lightsStateVersion=Tt,it.needsLights&&(Ut.ambientLightColor.value=j.state.ambient,Ut.lightProbe.value=j.state.probe,Ut.directionalLights.value=j.state.directional,Ut.directionalLightShadows.value=j.state.directionalShadow,Ut.spotLights.value=j.state.spot,Ut.spotLightShadows.value=j.state.spotShadow,Ut.rectAreaLights.value=j.state.rectArea,Ut.ltc_1.value=j.state.rectAreaLTC1,Ut.ltc_2.value=j.state.rectAreaLTC2,Ut.pointLights.value=j.state.point,Ut.pointLightShadows.value=j.state.pointShadow,Ut.hemisphereLights.value=j.state.hemi,Ut.directionalShadowMap.value=j.state.directionalShadowMap,Ut.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ut.spotShadowMap.value=j.state.spotShadowMap,Ut.spotLightMatrix.value=j.state.spotLightMatrix,Ut.spotLightMap.value=j.state.spotLightMap,Ut.pointShadowMap.value=j.state.pointShadowMap,Ut.pointShadowMatrix.value=j.state.pointShadowMatrix),it.currentProgram=Wt,it.uniformsList=null,Wt}function Bc(I){if(I.uniformsList===null){const q=I.currentProgram.getUniforms();I.uniformsList=xa.seqWithValue(q.seq,I.uniforms)}return I.uniformsList}function Hc(I,q){const et=bt.get(I);et.outputColorSpace=q.outputColorSpace,et.batching=q.batching,et.batchingColor=q.batchingColor,et.instancing=q.instancing,et.instancingColor=q.instancingColor,et.instancingMorph=q.instancingMorph,et.skinning=q.skinning,et.morphTargets=q.morphTargets,et.morphNormals=q.morphNormals,et.morphColors=q.morphColors,et.morphTargetsCount=q.morphTargetsCount,et.numClippingPlanes=q.numClippingPlanes,et.numIntersection=q.numClipIntersection,et.vertexAlphas=q.vertexAlphas,et.vertexTangents=q.vertexTangents,et.toneMapping=q.toneMapping}function Cd(I,q,et,it,j){q.isScene!==!0&&(q=gt),k.resetTextureUnits();const _t=q.fog,Tt=it.isMeshStandardMaterial?q.environment:null,kt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Rs,Dt=(it.isMeshStandardMaterial?$:R).get(it.envMap||Tt),Ht=it.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Wt=!!et.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Ut=!!et.morphAttributes.position,ie=!!et.morphAttributes.normal,me=!!et.morphAttributes.color;let ve=vi;it.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ve=_.toneMapping);const Je=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,re=Je!==void 0?Je.length:0,zt=bt.get(it),Vn=m.state.lights;if(C===!0&&(B===!0||I!==M)){const mn=I===M&&it.id===b;vt.setState(it,I,mn)}let ae=!1;it.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Vn.state.version||zt.outputColorSpace!==kt||j.isBatchedMesh&&zt.batching===!1||!j.isBatchedMesh&&zt.batching===!0||j.isBatchedMesh&&zt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&zt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&zt.instancing===!1||!j.isInstancedMesh&&zt.instancing===!0||j.isSkinnedMesh&&zt.skinning===!1||!j.isSkinnedMesh&&zt.skinning===!0||j.isInstancedMesh&&zt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&zt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&zt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&zt.instancingMorph===!1&&j.morphTexture!==null||zt.envMap!==Dt||it.fog===!0&&zt.fog!==_t||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==vt.numPlanes||zt.numIntersection!==vt.numIntersection)||zt.vertexAlphas!==Ht||zt.vertexTangents!==Wt||zt.morphTargets!==Ut||zt.morphNormals!==ie||zt.morphColors!==me||zt.toneMapping!==ve||zt.morphTargetsCount!==re)&&(ae=!0):(ae=!0,zt.__version=it.version);let Sn=zt.currentProgram;ae===!0&&(Sn=xr(it,q,j));let Xi=!1,rn=!1,Us=!1;const _e=Sn.getUniforms(),Dn=zt.uniforms;if(ht.useProgram(Sn.program)&&(Xi=!0,rn=!0,Us=!0),it.id!==b&&(b=it.id,rn=!0),Xi||M!==I){ht.buffers.depth.getReversed()?(O.copy(I.projectionMatrix),pp(O),mp(O),_e.setValue(D,"projectionMatrix",O)):_e.setValue(D,"projectionMatrix",I.projectionMatrix),_e.setValue(D,"viewMatrix",I.matrixWorldInverse);const si=_e.map.cameraPosition;si!==void 0&&si.setValue(D,dt.setFromMatrixPosition(I.matrixWorld)),rt.logarithmicDepthBuffer&&_e.setValue(D,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&_e.setValue(D,"isOrthographic",I.isOrthographicCamera===!0),M!==I&&(M=I,rn=!0,Us=!0)}if(j.isSkinnedMesh){_e.setOptional(D,j,"bindMatrix"),_e.setOptional(D,j,"bindMatrixInverse");const mn=j.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),_e.setValue(D,"boneTexture",mn.boneTexture,k))}j.isBatchedMesh&&(_e.setOptional(D,j,"batchingTexture"),_e.setValue(D,"batchingTexture",j._matricesTexture,k),_e.setOptional(D,j,"batchingIdTexture"),_e.setValue(D,"batchingIdTexture",j._indirectTexture,k),_e.setOptional(D,j,"batchingColorTexture"),j._colorsTexture!==null&&_e.setValue(D,"batchingColorTexture",j._colorsTexture,k));const Ns=et.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0)&&Bt.update(j,et,Sn),(rn||zt.receiveShadow!==j.receiveShadow)&&(zt.receiveShadow=j.receiveShadow,_e.setValue(D,"receiveShadow",j.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Dn.envMap.value=Dt,Dn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&q.environment!==null&&(Dn.envMapIntensity.value=q.environmentIntensity),rn&&(_e.setValue(D,"toneMappingExposure",_.toneMappingExposure),zt.needsLights&&Rd(Dn,Us),_t&&it.fog===!0&&Mt.refreshFogUniforms(Dn,_t),Mt.refreshMaterialUniforms(Dn,it,W,Y,m.state.transmissionRenderTarget[I.id]),xa.upload(D,Bc(zt),Dn,k)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(xa.upload(D,Bc(zt),Dn,k),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&_e.setValue(D,"center",j.center),_e.setValue(D,"modelViewMatrix",j.modelViewMatrix),_e.setValue(D,"normalMatrix",j.normalMatrix),_e.setValue(D,"modelMatrix",j.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const mn=it.uniformsGroups;for(let si=0,ri=mn.length;si<ri;si++){const Gc=mn[si];X.update(Gc,Sn),X.bind(Gc,Sn)}}return Sn}function Rd(I,q){I.ambientLightColor.needsUpdate=q,I.lightProbe.needsUpdate=q,I.directionalLights.needsUpdate=q,I.directionalLightShadows.needsUpdate=q,I.pointLights.needsUpdate=q,I.pointLightShadows.needsUpdate=q,I.spotLights.needsUpdate=q,I.spotLightShadows.needsUpdate=q,I.rectAreaLights.needsUpdate=q,I.hemisphereLights.needsUpdate=q}function Pd(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(I,q,et){bt.get(I.texture).__webglTexture=q,bt.get(I.depthTexture).__webglTexture=et;const it=bt.get(I);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=et===void 0,it.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,q){const et=bt.get(I);et.__webglFramebuffer=q,et.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(I,q=0,et=0){A=I,w=q,S=et;let it=!0,j=null,_t=!1,Tt=!1;if(I){const Dt=bt.get(I);if(Dt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(D.FRAMEBUFFER,null),it=!1;else if(Dt.__webglFramebuffer===void 0)k.setupRenderTarget(I);else if(Dt.__hasExternalTextures)k.rebindTextures(I,bt.get(I.texture).__webglTexture,bt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ut=I.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&bt.has(Ut)&&(I.width!==Ut.image.width||I.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(I)}}const Ht=I.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Tt=!0);const Wt=bt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Wt[q])?j=Wt[q][et]:j=Wt[q],_t=!0):I.samples>0&&k.useMultisampledRTT(I)===!1?j=bt.get(I).__webglMultisampledFramebuffer:Array.isArray(Wt)?j=Wt[et]:j=Wt,P.copy(I.viewport),z.copy(I.scissor),U=I.scissorTest}else P.copy(tt).multiplyScalar(W).floor(),z.copy(ut).multiplyScalar(W).floor(),U=L;if(ht.bindFramebuffer(D.FRAMEBUFFER,j)&&it&&ht.drawBuffers(I,j),ht.viewport(P),ht.scissor(z),ht.setScissorTest(U),_t){const Dt=bt.get(I.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+q,Dt.__webglTexture,et)}else if(Tt){const Dt=bt.get(I.texture),Ht=q||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,et||0,Ht)}b=-1},this.readRenderTargetPixels=function(I,q,et,it,j,_t,Tt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=bt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Tt!==void 0&&(kt=kt[Tt]),kt){ht.bindFramebuffer(D.FRAMEBUFFER,kt);try{const Dt=I.texture,Ht=Dt.format,Wt=Dt.type;if(!rt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=I.width-it&&et>=0&&et<=I.height-j&&D.readPixels(q,et,it,j,qt.convert(Ht),qt.convert(Wt),_t)}finally{const Dt=A!==null?bt.get(A).__webglFramebuffer:null;ht.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(I,q,et,it,j,_t,Tt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=bt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Tt!==void 0&&(kt=kt[Tt]),kt){const Dt=I.texture,Ht=Dt.format,Wt=Dt.type;if(!rt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=I.width-it&&et>=0&&et<=I.height-j){ht.bindFramebuffer(D.FRAMEBUFFER,kt);const Ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ut),D.bufferData(D.PIXEL_PACK_BUFFER,_t.byteLength,D.STREAM_READ),D.readPixels(q,et,it,j,qt.convert(Ht),qt.convert(Wt),0);const ie=A!==null?bt.get(A).__webglFramebuffer:null;ht.bindFramebuffer(D.FRAMEBUFFER,ie);const me=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await dp(D,me,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,_t),D.deleteBuffer(Ut),D.deleteSync(me),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,q=null,et=0){I.isTexture!==!0&&(tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,I=arguments[1]);const it=Math.pow(2,-et),j=Math.floor(I.image.width*it),_t=Math.floor(I.image.height*it),Tt=q!==null?q.x:0,kt=q!==null?q.y:0;k.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,et,0,0,Tt,kt,j,_t),ht.unbindTexture()},this.copyTextureToTexture=function(I,q,et=null,it=null,j=0){I.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,I=arguments[1],q=arguments[2],j=arguments[3]||0,et=null);let _t,Tt,kt,Dt,Ht,Wt,Ut,ie,me;const ve=I.isCompressedTexture?I.mipmaps[j]:I.image;et!==null?(_t=et.max.x-et.min.x,Tt=et.max.y-et.min.y,kt=et.isBox3?et.max.z-et.min.z:1,Dt=et.min.x,Ht=et.min.y,Wt=et.isBox3?et.min.z:0):(_t=ve.width,Tt=ve.height,kt=ve.depth||1,Dt=0,Ht=0,Wt=0),it!==null?(Ut=it.x,ie=it.y,me=it.z):(Ut=0,ie=0,me=0);const Je=qt.convert(q.format),re=qt.convert(q.type);let zt;q.isData3DTexture?(k.setTexture3D(q,0),zt=D.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(k.setTexture2DArray(q,0),zt=D.TEXTURE_2D_ARRAY):(k.setTexture2D(q,0),zt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment);const Vn=D.getParameter(D.UNPACK_ROW_LENGTH),ae=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Sn=D.getParameter(D.UNPACK_SKIP_PIXELS),Xi=D.getParameter(D.UNPACK_SKIP_ROWS),rn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Wt);const Us=I.isDataArrayTexture||I.isData3DTexture,_e=q.isDataArrayTexture||q.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const Dn=bt.get(I),Ns=bt.get(q),mn=bt.get(Dn.__renderTarget),si=bt.get(Ns.__renderTarget);ht.bindFramebuffer(D.READ_FRAMEBUFFER,mn.__webglFramebuffer),ht.bindFramebuffer(D.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ri=0;ri<kt;ri++)Us&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(I).__webglTexture,j,Wt+ri),I.isDepthTexture?(_e&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(q).__webglTexture,j,me+ri),D.blitFramebuffer(Dt,Ht,_t,Tt,Ut,ie,_t,Tt,D.DEPTH_BUFFER_BIT,D.NEAREST)):_e?D.copyTexSubImage3D(zt,j,Ut,ie,me+ri,Dt,Ht,_t,Tt):D.copyTexSubImage2D(zt,j,Ut,ie,me+ri,Dt,Ht,_t,Tt);ht.bindFramebuffer(D.READ_FRAMEBUFFER,null),ht.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else _e?I.isDataTexture||I.isData3DTexture?D.texSubImage3D(zt,j,Ut,ie,me,_t,Tt,kt,Je,re,ve.data):q.isCompressedArrayTexture?D.compressedTexSubImage3D(zt,j,Ut,ie,me,_t,Tt,kt,Je,ve.data):D.texSubImage3D(zt,j,Ut,ie,me,_t,Tt,kt,Je,re,ve):I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,j,Ut,ie,_t,Tt,Je,re,ve.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,j,Ut,ie,ve.width,ve.height,Je,ve.data):D.texSubImage2D(D.TEXTURE_2D,j,Ut,ie,_t,Tt,Je,re,ve);D.pixelStorei(D.UNPACK_ROW_LENGTH,Vn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Sn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,rn),j===0&&q.generateMipmaps&&D.generateMipmap(zt),ht.unbindTexture()},this.copyTextureToTexture3D=function(I,q,et=null,it=null,j=0){return I.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,it=arguments[1]||null,I=arguments[2],q=arguments[3],j=arguments[4]||0),tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,q,et,it,j)},this.initRenderTarget=function(I){bt.get(I).__webglFramebuffer===void 0&&k.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?k.setTextureCube(I,0):I.isData3DTexture?k.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?k.setTexture2DArray(I,0):k.setTexture2D(I,0),ht.unbindTexture()},this.resetState=function(){w=0,S=0,A=null,ht.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class ks{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=n}clone(){return new ks(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ku extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Dl,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $e=new N;class wa{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Zt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pc extends bi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let as;const Hs=new N,os=new N,ls=new N,cs=new ft,Gs=new ft,Du=new ee,Or=new N,Vs=new N,Br=new N,Fh=new ft,yo=new ft,Oh=new ft;class Uu extends Ce{constructor(t=new pc){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sx(e,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new wa(n,3,0,!1)),as.setAttribute("uv",new wa(n,2,3,!1))}this.geometry=as,this.material=t,this.center=new ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),os.setFromMatrixScale(this.matrixWorld),Du.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-ls.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Hr(Or.set(-.5,-.5,0),ls,a,os,s,r),Hr(Vs.set(.5,-.5,0),ls,a,os,s,r),Hr(Br.set(.5,.5,0),ls,a,os,s,r),Fh.set(0,0),yo.set(1,0),Oh.set(1,1);let o=t.ray.intersectTriangle(Or,Vs,Br,!1,Hs);if(o===null&&(Hr(Vs.set(-.5,.5,0),ls,a,os,s,r),yo.set(0,1),o=t.ray.intersectTriangle(Or,Br,Vs,!1,Hs),o===null))return;const l=t.ray.origin.distanceTo(Hs);l<t.near||l>t.far||e.push({distance:l,point:Hs.clone(),uv:yn.getInterpolation(Hs,Or,Vs,Br,Fh,yo,Oh,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Hr(i,t,e,n,s,r){cs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Gs.x=r*cs.x-s*cs.y,Gs.y=s*cs.x+r*cs.y):Gs.copy(cs),i.copy(t),i.x+=Gs.x,i.y+=Gs.y,i.applyMatrix4(Du)}class Tx extends je{constructor(t=null,e=1,n=1,s,r,a,o,l,c=un,f=un,h,u){super(null,a,o,l,c,f,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bh extends Zt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const hs=new ee,Hh=new ee,Gr=[],Gh=new Vi,Ex=new ee,Ws=new Ct,Xs=new Ls;class Sa extends Ct{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ex)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Gh.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(Gh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ls),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Xs.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),t.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),Hh.multiplyMatrices(n,hs),Ws.matrixWorld=Hh,Ws.raycast(t,Gr);for(let a=0,o=Gr.length;a<o;a++){const l=Gr[a];l.instanceId=r,l.object=this,e.push(l)}Gr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Bh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tx(new Float32Array(s*this.count),s,this.count,ac,Fn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ax extends bi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vh=new ee,Fl=new _u,Vr=new Ls,Wr=new N;class Cx extends Ce{constructor(t=new fe,e=new Ax){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;Vh.copy(s).invert(),Fl.copy(t.ray).applyMatrix4(Vh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=u,x=d;g<x;g++){const p=c.getX(g);Wr.fromBufferAttribute(h,p),Wh(Wr,p,l,s,t,e,this)}}else{const u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=u,x=d;g<x;g++)Wr.fromBufferAttribute(h,g),Wh(Wr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Wh(i,t,e,n,s,r,a){const o=Fl.distanceSqToPoint(i);if(o<e){const l=new N;Fl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class mc extends je{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const f=n[s],u=n[s+1]-f,d=(a-f)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ft:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,s=[],r=[],a=[],o=new N,l=new ee;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE;const f=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);f<=c&&(c=f,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ue(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ue(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class gc extends Hn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ft){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*f-d*h+this.aX,c=u*h+d*f+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Rx extends gc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function xc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,f,h){let u=(a-r)/c-(o-r)/(c+f)+(o-a)/f,d=(o-a)/f-(l-a)/(f+h)+(l-o)/h;u*=f,d*=f,s(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Xr=new N,bo=new xc,Mo=new xc,wo=new xc;class vc extends Hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,f;this.closed||o>0?c=s[(o-1)%r]:(Xr.subVectors(s[0],s[1]).add(s[0]),c=Xr);const h=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?f=s[(o+2)%r]:(Xr.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Xr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(f),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),bo.initNonuniformCatmullRom(c.x,h.x,u.x,f.x,g,x,p),Mo.initNonuniformCatmullRom(c.y,h.y,u.y,f.y,g,x,p),wo.initNonuniformCatmullRom(c.z,h.z,u.z,f.z,g,x,p)}else this.curveType==="catmullrom"&&(bo.initCatmullRom(c.x,h.x,u.x,f.x,this.tension),Mo.initCatmullRom(c.y,h.y,u.y,f.y,this.tension),wo.initCatmullRom(c.z,h.z,u.z,f.z,this.tension));return n.set(bo.calc(l),Mo.calc(l),wo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Px(i,t){const e=1-i;return e*e*t}function Lx(i,t){return 2*(1-i)*i*t}function Ix(i,t){return i*i*t}function sr(i,t,e,n){return Px(i,t)+Lx(i,e)+Ix(i,n)}function kx(i,t){const e=1-i;return e*e*e*t}function Dx(i,t){const e=1-i;return 3*e*e*i*t}function Ux(i,t){return 3*(1-i)*i*i*t}function Nx(i,t){return i*i*i*t}function rr(i,t,e,n,s){return kx(i,t)+Dx(i,e)+Ux(i,n)+Nx(i,s)}class Nu extends Hn{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rr(t,s.x,r.x,a.x,o.x),rr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zx extends Hn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rr(t,s.x,r.x,a.x,o.x),rr(t,s.y,r.y,a.y,o.y),rr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zu extends Hn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fx extends Hn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fu extends Hn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(sr(t,s.x,r.x,a.x),sr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ou extends Hn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(sr(t,s.x,r.x,a.x),sr(t,s.y,r.y,a.y),sr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bu extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],f=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Xh(o,l.x,c.x,f.x,h.x),Xh(o,l.y,c.y,f.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var Ta=Object.freeze({__proto__:null,ArcCurve:Rx,CatmullRomCurve3:vc,CubicBezierCurve:Nu,CubicBezierCurve3:zx,EllipseCurve:gc,LineCurve:zu,LineCurve3:Fx,QuadraticBezierCurve:Fu,QuadraticBezierCurve3:Ou,SplineCurve:Bu});class Ox extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ta[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const f=l[c];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ta[s.type]().fromJSON(s))}return this}}class qh extends Ox{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new zu(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Fu(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Nu(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Bu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,e+f,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new gc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class _c extends fe{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ue(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],f=1/e,h=new N,u=new ft,d=new N,g=new N,x=new N;let p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=e;y++){const v=n+y*f*s,_=Math.sin(v),E=Math.cos(v);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*_,h.y=t[w].y,h.z=t[w].x*E,a.push(h.x,h.y,h.z),u.x=y/e,u.y=w/(t.length-1),o.push(u.x,u.y);const S=l[3*w+0]*_,A=l[3*w+1],b=l[3*w+0]*E;c.push(S,A,b)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){const _=v+y*t.length,E=_,w=_+t.length,S=_+t.length+1,A=_+1;r.push(E,w,A),r.push(S,A,w)}this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("uv",new Jt(o,2)),this.setAttribute("normal",new Jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _c(t.points,t.segments,t.phiStart,t.phiLength)}}class hr extends fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new N,f=new ft;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){const d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[u]/t+1)/2,f.y=(a[u+1]/t+1)/2,l.push(f.x,f.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ge extends fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const f=[],h=[],u=[],d=[];let g=0;const x=[],p=n/2;let m=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(d,2));function y(){const _=new N,E=new N;let w=0;const S=(e-t)/n;for(let A=0;A<=r;A++){const b=[],M=A/r,P=M*(e-t)+t;for(let z=0;z<=s;z++){const U=z/s,F=U*l+o,H=Math.sin(F),G=Math.cos(F);E.x=P*H,E.y=-M*n+p,E.z=P*G,h.push(E.x,E.y,E.z),_.set(H,S,G).normalize(),u.push(_.x,_.y,_.z),d.push(U,1-M),b.push(g++)}x.push(b)}for(let A=0;A<s;A++)for(let b=0;b<r;b++){const M=x[b][A],P=x[b+1][A],z=x[b+1][A+1],U=x[b][A+1];(t>0||b!==0)&&(f.push(M,P,U),w+=3),(e>0||b!==r-1)&&(f.push(P,z,U),w+=3)}c.addGroup(m,w,0),m+=w}function v(_){const E=g,w=new ft,S=new N;let A=0;const b=_===!0?t:e,M=_===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,p*M,0),u.push(0,M,0),d.push(.5,.5),g++;const P=g;for(let z=0;z<=s;z++){const F=z/s*l+o,H=Math.cos(F),G=Math.sin(F);S.x=b*G,S.y=p*M,S.z=b*H,h.push(S.x,S.y,S.z),u.push(0,M,0),w.x=H*.5+.5,w.y=G*.5*M+.5,d.push(w.x,w.y),g++}for(let z=0;z<s;z++){const U=E+z,F=P+z;_===!0?f.push(F,F+1,U):f.push(F+1,F,U),A+=3}c.addGroup(m,A,_===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dn extends ge{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new dn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yc extends fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),f(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new N,_=new N,E=new N;for(let w=0;w<e.length;w+=3)d(e[w+0],v),d(e[w+1],_),d(e[w+2],E),l(v,_,E,y)}function l(y,v,_,E){const w=E+1,S=[];for(let A=0;A<=w;A++){S[A]=[];const b=y.clone().lerp(_,A/w),M=v.clone().lerp(_,A/w),P=w-A;for(let z=0;z<=P;z++)z===0&&A===w?S[A][z]=b:S[A][z]=b.clone().lerp(M,z/P)}for(let A=0;A<w;A++)for(let b=0;b<2*(w-A)-1;b++){const M=Math.floor(b/2);b%2===0?(u(S[A][M+1]),u(S[A+1][M]),u(S[A][M])):(u(S[A][M+1]),u(S[A+1][M+1]),u(S[A+1][M]))}}function c(y){const v=new N;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function f(){const y=new N;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const _=p(y)/2/Math.PI+.5,E=m(y)/Math.PI+.5;a.push(_,1-E)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){const v=a[y+0],_=a[y+2],E=a[y+4],w=Math.max(v,_,E),S=Math.min(v,_,E);w>.9&&S<.1&&(v<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,v){const _=y*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){const y=new N,v=new N,_=new N,E=new N,w=new ft,S=new ft,A=new ft;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),w.set(a[M+0],a[M+1]),S.set(a[M+2],a[M+3]),A.set(a[M+4],a[M+5]),E.copy(y).add(v).add(_).divideScalar(3);const P=p(E);x(w,M+0,y,P),x(S,M+2,v,P),x(A,M+4,_,P)}}function x(y,v,_,E){E<0&&y.x===1&&(a[v]=y.x-1),_.x===0&&_.z===0&&(a[v]=E/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yc(t.vertices,t.indices,t.radius,t.details)}}class bc extends yc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bc(t.radius,t.detail)}}class Mc extends qh{constructor(t){super(t),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new qh().fromJSON(s))}return this}}const Bx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Hu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,f,h,u,d;if(n&&(r=Xx(i,t,r,e)),i.length>80*e){o=c=i[0],l=f=i[1];for(let g=e;g<s;g+=e)h=i[g],u=i[g+1],h<o&&(o=h),u<l&&(l=u),h>c&&(c=h),u>f&&(f=u);d=Math.max(c-o,f-l),d=d!==0?32767/d:0}return fr(r,a,e,o,l,d,0),a}};function Hu(i,t,e,n,s){let r,a;if(s===nv(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Yh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Yh(r,i[r],i[r+1],a);return a&&Ua(a,a.next)&&(dr(a),a=a.next),a}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ua(e,e.next)||be(e.prev,e,e.next)===0)){if(dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function fr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&$x(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Gx(i,n,s,r):Hx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),dr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Vx(Bi(i),t,e),fr(i,t,e,n,s,r,2)):a===2&&Wx(i,t,e,n,s,r):fr(Bi(i),t,e,n,s,r,1);break}}}function Hx(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,f=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=f&&g.x<=u&&g.y>=h&&g.y<=d&&gs(s,o,r,l,a,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Gx(i,t,e,n){const s=i.prev,r=i,a=i.next;if(be(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,f=s.y,h=r.y,u=a.y,d=o<l?o<c?o:c:l<c?l:c,g=f<h?f<u?f:u:h<u?h:u,x=o>l?o>c?o:c:l>c?l:c,p=f>h?f>u?f:u:h>u?h:u,m=Ol(d,g,t,e,n),y=Ol(x,p,t,e,n);let v=i.prevZ,_=i.nextZ;for(;v&&v.z>=m&&_&&_.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&gs(o,f,l,h,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&gs(o,f,l,h,c,u,_.x,_.y)&&be(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&gs(o,f,l,h,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&gs(o,f,l,h,c,u,_.x,_.y)&&be(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Vx(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Ua(s,r)&&Gu(s,n,n.next,r)&&ur(s,r)&&ur(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),dr(n),dr(n.next),n=i=r),n=n.next}while(n!==i);return Bi(n)}function Wx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qx(a,o)){let l=Vu(a,o);a=Bi(a,a.next),l=Bi(l,l.next),fr(a,t,e,n,s,r,0),fr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Xx(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Hu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Jx(c));for(s.sort(qx),r=0;r<s.length;r++)e=Yx(s[r],e);return e}function qx(i,t){return i.x-t.x}function Yx(i,t){const e=jx(i,t);if(!e)return t;const n=Vu(e,i);return Bi(n,n.next),Bi(e,e.next)}function jx(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let f=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&gs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),ur(e,i)&&(h<f||h===f&&(e.x>s.x||e.x===s.x&&Zx(s,e)))&&(s=e,f=h)),e=e.next;while(e!==o);return s}function Zx(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function $x(i,t,e,n){let s=i;do s.z===0&&(s.z=Ol(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kx(s)}function Kx(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Ol(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Jx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Qx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!tv(i,t)&&(ur(i,t)&&ur(t,i)&&ev(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||Ua(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ua(i,t){return i.x===t.x&&i.y===t.y}function Gu(i,t,e,n){const s=Yr(be(i,t,e)),r=Yr(be(i,t,n)),a=Yr(be(e,n,i)),o=Yr(be(e,n,t));return!!(s!==r&&a!==o||s===0&&qr(i,e,t)||r===0&&qr(i,n,t)||a===0&&qr(e,i,n)||o===0&&qr(e,t,n))}function qr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Yr(i){return i>0?1:i<0?-1:0}function tv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ur(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function ev(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Vu(i,t){const e=new Bl(i.i,i.x,i.y),n=new Bl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Yh(i,t,e,n){const s=new Bl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nv(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class ar{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ar.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];jh(t),Zh(n,t);let a=t.length;e.forEach(jh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Zh(n,e[l]);const o=Bx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function jh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Na extends fe{constructor(t=new Mc([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:iv;let v,_=!1,E,w,S,A;m&&(v=m.getSpacedPoints(f),_=!0,u=!1,E=m.computeFrenetFrames(f,!1),w=new N,S=new N,A=new N),u||(p=0,d=0,g=0,x=0);const b=o.extractPoints(c);let M=b.shape;const P=b.holes;if(!ar.isClockWise(M)){M=M.reverse();for(let K=0,st=P.length;K<st;K++){const D=P[K];ar.isClockWise(D)&&(P[K]=D.reverse())}}const U=ar.triangulateShape(M,P),F=M;for(let K=0,st=P.length;K<st;K++){const D=P[K];M=M.concat(D)}function H(K,st,D){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(st,D)}const G=M.length,Y=U.length;function W(K,st,D){let xt,Z,rt;const ht=K.x-st.x,Lt=K.y-st.y,bt=D.x-K.x,k=D.y-K.y,R=ht*ht+Lt*Lt,$=ht*k-Lt*bt;if(Math.abs($)>Number.EPSILON){const lt=Math.sqrt(R),mt=Math.sqrt(bt*bt+k*k),ct=st.x-Lt/lt,It=st.y+ht/lt,Mt=D.x-k/mt,At=D.y+bt/mt,$t=((Mt-ct)*k-(At-It)*bt)/(ht*k-Lt*bt);xt=ct+ht*$t-K.x,Z=It+Lt*$t-K.y;const vt=xt*xt+Z*Z;if(vt<=2)return new ft(xt,Z);rt=Math.sqrt(vt/2)}else{let lt=!1;ht>Number.EPSILON?bt>Number.EPSILON&&(lt=!0):ht<-Number.EPSILON?bt<-Number.EPSILON&&(lt=!0):Math.sign(Lt)===Math.sign(k)&&(lt=!0),lt?(xt=-Lt,Z=ht,rt=Math.sqrt(R)):(xt=ht,Z=Lt,rt=Math.sqrt(R/2))}return new ft(xt/rt,Z/rt)}const V=[];for(let K=0,st=F.length,D=st-1,xt=K+1;K<st;K++,D++,xt++)D===st&&(D=0),xt===st&&(xt=0),V[K]=W(F[K],F[D],F[xt]);const Q=[];let tt,ut=V.concat();for(let K=0,st=P.length;K<st;K++){const D=P[K];tt=[];for(let xt=0,Z=D.length,rt=Z-1,ht=xt+1;xt<Z;xt++,rt++,ht++)rt===Z&&(rt=0),ht===Z&&(ht=0),tt[xt]=W(D[xt],D[rt],D[ht]);Q.push(tt),ut=ut.concat(tt)}for(let K=0;K<p;K++){const st=K/p,D=d*Math.cos(st*Math.PI/2),xt=g*Math.sin(st*Math.PI/2)+x;for(let Z=0,rt=F.length;Z<rt;Z++){const ht=H(F[Z],V[Z],xt);O(ht.x,ht.y,-D)}for(let Z=0,rt=P.length;Z<rt;Z++){const ht=P[Z];tt=Q[Z];for(let Lt=0,bt=ht.length;Lt<bt;Lt++){const k=H(ht[Lt],tt[Lt],xt);O(k.x,k.y,-D)}}}const L=g+x;for(let K=0;K<G;K++){const st=u?H(M[K],ut[K],L):M[K];_?(S.copy(E.normals[0]).multiplyScalar(st.x),w.copy(E.binormals[0]).multiplyScalar(st.y),A.copy(v[0]).add(S).add(w),O(A.x,A.y,A.z)):O(st.x,st.y,0)}for(let K=1;K<=f;K++)for(let st=0;st<G;st++){const D=u?H(M[st],ut[st],L):M[st];_?(S.copy(E.normals[K]).multiplyScalar(D.x),w.copy(E.binormals[K]).multiplyScalar(D.y),A.copy(v[K]).add(S).add(w),O(A.x,A.y,A.z)):O(D.x,D.y,h/f*K)}for(let K=p-1;K>=0;K--){const st=K/p,D=d*Math.cos(st*Math.PI/2),xt=g*Math.sin(st*Math.PI/2)+x;for(let Z=0,rt=F.length;Z<rt;Z++){const ht=H(F[Z],V[Z],xt);O(ht.x,ht.y,h+D)}for(let Z=0,rt=P.length;Z<rt;Z++){const ht=P[Z];tt=Q[Z];for(let Lt=0,bt=ht.length;Lt<bt;Lt++){const k=H(ht[Lt],tt[Lt],xt);_?O(k.x,k.y+v[f-1].y,v[f-1].x+D):O(k.x,k.y,h+D)}}}T(),C();function T(){const K=s.length/3;if(u){let st=0,D=G*st;for(let xt=0;xt<Y;xt++){const Z=U[xt];J(Z[2]+D,Z[1]+D,Z[0]+D)}st=f+p*2,D=G*st;for(let xt=0;xt<Y;xt++){const Z=U[xt];J(Z[0]+D,Z[1]+D,Z[2]+D)}}else{for(let st=0;st<Y;st++){const D=U[st];J(D[2],D[1],D[0])}for(let st=0;st<Y;st++){const D=U[st];J(D[0]+G*f,D[1]+G*f,D[2]+G*f)}}n.addGroup(K,s.length/3-K,0)}function C(){const K=s.length/3;let st=0;B(F,st),st+=F.length;for(let D=0,xt=P.length;D<xt;D++){const Z=P[D];B(Z,st),st+=Z.length}n.addGroup(K,s.length/3-K,1)}function B(K,st){let D=K.length;for(;--D>=0;){const xt=D;let Z=D-1;Z<0&&(Z=K.length-1);for(let rt=0,ht=f+p*2;rt<ht;rt++){const Lt=G*rt,bt=G*(rt+1),k=st+xt+Lt,R=st+Z+Lt,$=st+Z+bt,lt=st+xt+bt;dt(k,R,$,lt)}}}function O(K,st,D){l.push(K),l.push(st),l.push(D)}function J(K,st,D){nt(K),nt(st),nt(D);const xt=s.length/3,Z=y.generateTopUV(n,s,xt-3,xt-2,xt-1);gt(Z[0]),gt(Z[1]),gt(Z[2])}function dt(K,st,D,xt){nt(K),nt(st),nt(xt),nt(st),nt(D),nt(xt);const Z=s.length/3,rt=y.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);gt(rt[0]),gt(rt[1]),gt(rt[3]),gt(rt[1]),gt(rt[2]),gt(rt[3])}function nt(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function gt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return sv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ta[s.type]().fromJSON(s)),new Na(n,t.options)}}const iv={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],f=t[s*3+1];return[new ft(r,a),new ft(o,l),new ft(c,f)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],f=t[n*3+1],h=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-f)<Math.abs(a-c)?[new ft(a,1-l),new ft(c,1-h),new ft(u,1-g),new ft(x,1-m)]:[new ft(o,1-l),new ft(f,1-h),new ft(d,1-g),new ft(p,1-m)]}};function sv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class za extends fe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],f=[];let h=t;const u=(e-t)/s,d=new N,g=new ft;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){const m=r+p/n*a;d.x=h*Math.cos(m),d.y=h*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,f.push(g.x,g.y)}h+=u}for(let x=0;x<s;x++){const p=x*(n+1);for(let m=0;m<n;m++){const y=m+p,v=y,_=y+n+1,E=y+n+2,w=y+1;o.push(v,_,w),o.push(_,E,w)}}this.setIndex(o),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ie extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new N,u=new N,d=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){const y=[],v=m/n;let _=0;m===0&&a===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let E=0;E<=e;E++){const w=E/e;h.x=-t*Math.cos(s+w*r)*Math.sin(a+v*o),h.y=t*Math.cos(a+v*o),h.z=t*Math.sin(s+w*r)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),u.copy(h).normalize(),x.push(u.x,u.y,u.z),p.push(w+_,1-v),y.push(c++)}f.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const v=f[m][y+1],_=f[m][y],E=f[m+1][y],w=f[m+1][y+1];(m!==0||a>0)&&d.push(v,_,w),(m!==n-1||l<Math.PI)&&d.push(_,E,w)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pr extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],f=new N,h=new N,u=new N;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*r,p=d/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(x),h.y=(t+e*Math.cos(p))*Math.sin(x),h.z=e*Math.sin(p),o.push(h.x,h.y,h.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),u.subVectors(h,f).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,y=(s+1)*d+g;a.push(x,p,y),a.push(p,m,y)}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class wc extends fe{constructor(t=new Ou(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new N,l=new N,c=new ft;let f=new N;const h=[],u=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(d,2));function x(){for(let v=0;v<e;v++)p(v);p(r===!1?e:0),y(),m()}function p(v){f=t.getPointAt(v/e,f);const _=a.normals[v],E=a.binormals[v];for(let w=0;w<=s;w++){const S=w/s*Math.PI*2,A=Math.sin(S),b=-Math.cos(S);l.x=b*_.x+A*E.x,l.y=b*_.y+A*E.y,l.z=b*_.z+A*E.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=f.x+n*l.x,o.y=f.y+n*l.y,o.z=f.z+n*l.z,h.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){const E=(s+1)*(v-1)+(_-1),w=(s+1)*v+(_-1),S=(s+1)*v+_,A=(s+1)*(v-1)+_;g.push(E,w,A),g.push(w,S,A)}}function y(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)c.x=v/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new wc(new Ta[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class rv extends qe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Te extends bi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class In extends bi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fa extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class av extends Fa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const So=new ee,$h=new N,Kh=new N;class Wu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;$h.setFromMatrixPosition(t.matrixWorld),e.position.copy($h),Kh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kh),e.updateMatrixWorld(),So.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(So)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Jh=new ee,qs=new N,To=new N;class ov extends Wu{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qs.setFromMatrixPosition(t.matrixWorld),n.position.copy(qs),To.copy(n.position),To.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(To),n.updateMatrixWorld(),s.makeTranslation(-qs.x,-qs.y,-qs.z),Jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh)}}class Sc extends Fa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ov}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class lv extends Wu{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cv extends Fa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new lv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hv extends Fa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class fv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Qh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Qh(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tc);function uv(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new fe;let c=0;for(let f=0;f<i.length;++f){const h=i[f];let u=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,f),c+=d}}if(e){let f=0;const h=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+f);f+=i[u].attributes.position.count}l.setIndex(h)}for(const f in r){const h=tf(r[f]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,h)}for(const f in a){const h=a[f][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let u=0;u<h;++u){const d=[];for(let x=0;x<a[f].length;++x)d.push(a[f][x][u]);const g=tf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(g)}}return l}function tf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const f=i[c];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}const a=new t(r),o=new Zt(a,e,n);let l=0;for(let c=0;c<i.length;++c){const f=i[c];if(f.isInterleavedBufferAttribute){const h=l/e;for(let u=0,d=f.count;u<d;u++)for(let g=0;g<e;g++){const x=f.getComponent(u,g);o.setComponent(u+h,g,x)}}else a.set(f.array,l);l+=f.count*e}return s!==void 0&&(o.gpuType=s),o}const dv=typeof document<"u";function pv(i){let t=i>>>0;const e=()=>{t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return e.range=(n,s)=>n+(s-n)*e(),e.int=(n,s)=>Math.floor(n+(s-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e.sign=()=>e()<.5?-1:1,e}const mv=new Nt;function xi(i){return i&&i.isColor?i:new Nt(i)}function Xe(i,t,e=.08){const n=1+(t()-.5)*2*e,s=new Nt(i);return s.r*=n,s.g*=n,s.b*=n,s}function gv(i,t,e,n={}){if(!dv)return null;const s=document.createElement("canvas");s.width=i,s.height=t;const r=s.getContext("2d");e(r,i,t);const a=new mc(s);return a.colorSpace=We,a.wrapS=a.wrapT=n.clamp?gi:ya,a.anisotropy=n.aniso??8,n.repeat&&a.repeat.set(n.repeat[0],n.repeat[1]),a.needsUpdate=!0,a}const ef=new ee,nf=new Mn,sf=new Ze,rf=new N,xv=new N(1,1,1),jr=new N;function vv(i,t){if(i.index){const n=i.toNonIndexed();i.dispose(),i=n}const e=i.attributes.position.count;if(i.attributes.normal||i.computeVertexNormals(),i.attributes.uv||i.setAttribute("uv",new Zt(new Float32Array(e*2),2)),t!=null){const n=new Float32Array(e*3);if(typeof t=="function"){const s=i.attributes.position;for(let r=0;r<e;r++){jr.fromBufferAttribute(s,r);const a=t(jr.x,jr.y,jr.z,mv);n[r*3]=a.r,n[r*3+1]=a.g,n[r*3+2]=a.b}}else{const s=xi(t);for(let r=0;r<e;r++)n[r*3]=s.r,n[r*3+1]=s.g,n[r*3+2]=s.b}i.setAttribute("color",new Zt(n,3))}else if(!i.attributes.color){const n=new Float32Array(e*3).fill(1);i.setAttribute("color",new Zt(n,3))}for(const n of Object.keys(i.attributes))n!=="position"&&n!=="normal"&&n!=="uv"&&n!=="color"&&i.deleteAttribute(n);return i.morphAttributes={},i}class Hi{constructor(){this.buckets={}}add(t,e,n,s=0,r=0,a=0,o=0,l=0,c=0){return e=vv(e,n),sf.set(l,o,c,"YXZ"),nf.setFromEuler(sf),rf.set(s,r,a),ef.compose(rf,nf,xv),e.applyMatrix4(ef),(this.buckets[t]||(this.buckets[t]=[])).push(e),this}box(t,e,n,s,r,a,o,l,c=0,f=0,h=0){return this.add(t,new pn(e,n,s),l,r,a+n/2,o,c,f,h)}cyl(t,e,n,s,r,a,o,l,c=12,f=0,h=0,u=0){return this.add(t,new ge(e,n,s,c),l,r,a+s/2,o,f,h,u)}cone(t,e,n,s,r,a,o,l=12,c=0){return this.add(t,new dn(e,n,l),o,s,r+n/2,a,c)}sphere(t,e,n,s,r,a,o=1,l=1,c=1,f=12,h=9){const u=new Ie(e,f,h);return(o!==1||l!==1||c!==1)&&u.scale(o,l,c),this.add(t,u,a,n,s,r)}torus(t,e,n,s,r,a,o,l=0,c=0,f=0,h=Math.PI*2,u=16,d=6){return this.add(t,new pr(e,n,d,u,h),o,s,r,a,c,l,f)}count(t){return this.buckets[t]?this.buckets[t].length:0}build(t,e={}){const n=[];for(const s of Object.keys(this.buckets)){const r=this.buckets[s];if(!r.length)continue;const a=r.length===1?r[0]:uv(r,!1);if(r.length>1)for(const f of r)f.dispose();if(!a)throw new Error("merge failed for bucket "+s);const o=t[s];if(!o)throw new Error("no material for bucket "+s);const l=new Ct(a,o),c=e[s]||{};l.castShadow=!!c.cast,l.receiveShadow=!!c.receive,l.name="batch:"+s,l.matrixAutoUpdate=!1,n.push(l)}return this.buckets={},n}}class af{constructor(){this.pos=[],this.nor=[],this.colr=[],this.uv=[]}quad(t,e,n,s,r,a,o,l,c){const f=e[0]-t[0],h=e[1]-t[1],u=e[2]-t[2],d=s[0]-t[0],g=s[1]-t[1],x=s[2]-t[2];let p=h*x-u*g,m=u*d-f*x,y=f*g-h*d;const v=Math.hypot(p,m,y)||1;p/=v,m/=v,y/=v;let _=t,E=e,w=n,S=s,A=0,b=1,M=2,P=3;p*r+m*a+y*o<0&&(E=s,S=e,b=3,P=1,p=-p,m=-m,y=-y);const z=this.pos,U=this.nor,F=this.colr,H=this.uv,G=[_,E,w,_,w,S],Y=[A,b,M,A,M,P];for(let W=0;W<6;W++){const V=G[W];z.push(V[0],V[1],V[2]),U.push(p,m,y),F.push(l.r,l.g,l.b),c?H.push(c[Y[W]][0],c[Y[W]][1]):H.push(0,0)}}get empty(){return this.pos.length===0}toGeometry(){const t=new fe;return t.setAttribute("position",new Zt(new Float32Array(this.pos),3)),t.setAttribute("normal",new Zt(new Float32Array(this.nor),3)),t.setAttribute("uv",new Zt(new Float32Array(this.uv),2)),t.setAttribute("color",new Zt(new Float32Array(this.colr),3)),t}}function _v(i,t,e,n,s=4,r=4){const a=new pn(i,t,e),o=n%s,l=Math.floor(n/s)%r,c=o/s,f=1-(l+1)/r,h=1/s,u=1/r,d=a.attributes.uv;for(let g=0;g<d.count;g++){const x=Math.floor(g/4);let p=d.getX(g),m=d.getY(g);x===2||x===3?(p=.03+p*.05,m=.03+m*.05):(p=.01+p*.98,m=.01+m*.98),d.setXY(g,c+p*h,f+m*u)}return a}function yv(i){const t=new Set;i.traverse(e=>{e.geometry&&!t.has(e.geometry)&&(t.add(e.geometry),e.geometry.dispose());const n=e.material?Array.isArray(e.material)?e.material:[e.material]:[];for(const s of n)if(!t.has(s)){t.add(s);for(const r of["map","emissiveMap","alphaMap","normalMap","roughnessMap"])s[r]&&!t.has(s[r])&&(t.add(s[r]),s[r].dispose());s.dispose()}e.isLight&&e.shadow&&e.shadow.map&&e.shadow.map.dispose(),e.dispose&&e.isInstancedMesh&&e.dispose()})}function Oa(i,t,e,n,s,r=1,a=3,o=1){i.globalAlpha=o;for(let l=0;l<n;l++){i.fillStyle=s[Math.random()*s.length|0];const c=r+Math.random()*(a-r);i.fillRect(Math.random()*t,Math.random()*e,c,c)}i.globalAlpha=1}function Hl(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const bv=i=>(t,e,n)=>{const s={paving:{base:"#8d8983",sp:["#7c7872","#9d9992","#a8a39b","#6f6b66"],edge:"#f6f1e4",dash:"#ffd84a"},mat:{base:"#3a3e4b",sp:["#333743","#444958","#2d303b"],edge:"#ffd23c",dash:"#f4f4f4"},neon:{base:"#0f1228",sp:["#141837","#0b0d1e","#1a1f45"],edge:"#27f0ff",dash:"#ff3fd0"},planks:{base:"#b98a55",sp:["#a97b49","#c79a63"],edge:"#fbf6ea",dash:"#fbf6ea"}}[i];if(t.fillStyle=s.base,t.fillRect(0,0,e,n),i==="planks"){const o=n/16,l=["#b98a55","#c2945e","#ad7e4a","#c99c66","#b5854f","#a67743"];for(let c=0;c<16;c++){t.fillStyle=l[(c*5+c*c%3)%l.length],t.fillRect(0,c*o,e,o),t.globalAlpha=.16;for(let f=0;f<26;f++){t.fillStyle=f%2?"#6e4a25":"#e3bd8a";const h=c*o+3+Math.random()*(o-6),u=Math.random()*e;t.fillRect(u,h,40+Math.random()*160,1.5)}t.globalAlpha=1,t.fillStyle="#5a3c1e",t.fillRect(0,c*o,e,3),t.fillStyle="rgba(255,235,200,0.25)",t.fillRect(0,c*o+3,e,2),t.fillStyle="#4b3520";for(const f of[20,e-24,e/2-2])t.beginPath(),t.arc(f,c*o+o/2,3,0,7),t.fill()}}else{if(Oa(t,e,n,9e3,s.sp,1,3,.55),i==="neon"){t.strokeStyle="rgba(80,110,255,0.16)",t.lineWidth=2;for(let a=0;a<=8;a++)t.beginPath(),t.moveTo(0,a*n/8),t.lineTo(e,a*n/8),t.stroke();for(let a=0;a<=4;a++)t.beginPath(),t.moveTo(a*e/4,0),t.lineTo(a*e/4,n),t.stroke()}if(i==="mat"){t.globalAlpha=.07,t.fillStyle="#ffffff";for(let a=0;a<n;a+=4)t.fillRect(0,a,e,1);t.globalAlpha=1}t.globalAlpha=.1,t.fillStyle="#000";for(const a of[.3,.36,.63,.7])t.fillRect(a*e-7,0,14,n);t.globalAlpha=1}const r=i==="neon";r&&(t.shadowColor=s.edge,t.shadowBlur=14),t.fillStyle=s.edge,t.globalAlpha=i==="planks"?.85:1,t.fillRect(e*.035,0,e*.025,n),t.fillRect(e*.94,0,e*.025,n),r&&(t.shadowColor=s.dash),t.fillStyle=s.dash,t.fillRect(e*.488,n*.06,e*.024,n*.26),t.fillRect(e*.488,n*.56,e*.024,n*.26),t.globalAlpha=1,t.shadowBlur=0},Mv=(i="#f7f7f7",t="#16161a")=>(e,n,s)=>{e.fillStyle=i,e.fillRect(0,0,n,s),e.fillStyle=t,e.fillRect(0,0,n/2,s/2),e.fillRect(n/2,s/2,n/2,s/2)},wv=(i,t)=>(e,n,s)=>{e.fillStyle=i,e.fillRect(0,0,n,s),e.fillStyle=t;for(let r=0;r<2;r++){const a=n*(.08+r*.5);e.beginPath(),e.moveTo(a,s*.1),e.lineTo(a+n*.18,s*.1),e.lineTo(a+n*.36,s*.5),e.lineTo(a+n*.18,s*.9),e.lineTo(a,s*.9),e.lineTo(a+n*.18,s*.5),e.closePath(),e.fill()}e.strokeStyle=t,e.lineWidth=6,e.strokeRect(3,3,n-6,s-6)},Sv=(i="#fff36b",t="#ff8a1e")=>(e,n,s)=>{e.clearRect(0,0,n,s);const r=e.createLinearGradient(0,0,n,0);r.addColorStop(0,"rgba(255,140,30,0)"),r.addColorStop(.5,"rgba(255,170,40,0.55)"),r.addColorStop(1,"rgba(255,140,30,0)"),e.fillStyle=r,e.fillRect(0,0,n,s),e.shadowColor=t,e.shadowBlur=18;for(let a=0;a<2;a++){const o=s*(.5*a);e.fillStyle=a?i:"#ffffff",e.beginPath(),e.moveTo(n*.5,o+s*.06),e.lineTo(n*.92,o+s*.34),e.lineTo(n*.92,o+s*.46),e.lineTo(n*.5,o+s*.2),e.lineTo(n*.08,o+s*.46),e.lineTo(n*.08,o+s*.34),e.closePath(),e.fill()}e.shadowBlur=0},Tv=(i,t,e,n)=>(s,r,a)=>{s.fillStyle=t,s.fillRect(0,0,r,a);const o=a/4;for(let c=0;c<r;c+=o)for(let f=0;f<2;f++)s.fillStyle=(c/o+f|0)%2?"#111":"#fafafa",s.fillRect(c,f?a-o*.5:0,o,o*.5);s.fillStyle=n,s.fillRect(0,o*.5,r,6),s.fillRect(0,a-o*.5-6,r,6),s.font=`900 ${Math.floor(a*.42)}px "Arial Black", Impact, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.lineWidth=10,s.strokeStyle="rgba(0,0,0,0.55)";let l=a*.42;for(;s.measureText(i).width>r*.9&&l>10;)l-=4,s.font=`900 ${Math.floor(l)}px "Arial Black", Impact, sans-serif`;s.strokeText(i,r/2,a/2+2),s.fillStyle=e,s.fillText(i,r/2,a/2+2)},Ev=()=>(i,t,e)=>{i.fillStyle="#5fae3c",i.fillRect(0,0,t,e);for(let s=0;s<60;s++)i.fillStyle=["rgba(120,200,80,0.25)","rgba(60,140,50,0.25)","rgba(150,210,90,0.2)"][s%3],i.beginPath(),i.arc(Math.random()*t,Math.random()*e,30+Math.random()*60,0,7),i.fill();const n=["#4b9a32","#6fc048","#88d058","#3f8a2c","#7ac74e"];i.lineWidth=2;for(let s=0;s<5e3;s++){i.strokeStyle=n[Math.random()*n.length|0];const r=Math.random()*t,a=Math.random()*e;i.beginPath(),i.moveTo(r,a),i.lineTo(r+(Math.random()-.5)*7,a-5-Math.random()*9),i.stroke()}for(let s=0;s<40;s++)i.fillStyle=["#fff","#ffe866","#ffd0e8"][s%3],i.beginPath(),i.arc(Math.random()*t,Math.random()*e,2.2,0,7),i.fill()},Xu=(i,t,e,n)=>(s,r,a)=>{const o=r/2;for(let l=0;l<2;l++)for(let c=0;c<2;c++){s.fillStyle=(l+c)%2?i:t,s.fillRect(l*o,c*o,o,o);const f=s.createLinearGradient(l*o,c*o,l*o+o,c*o+o);f.addColorStop(0,"rgba(255,255,255,0.10)"),f.addColorStop(1,"rgba(0,0,0,0.10)"),s.fillStyle=f,s.fillRect(l*o,c*o,o,o)}Oa(s,r,a,2500,n||["rgba(255,255,255,0.5)","rgba(0,0,0,0.35)"],1,2.5,.25),s.fillStyle=e;for(let l=0;l<=2;l++)s.fillRect(l*o-3,0,6,a),s.fillRect(0,l*o-3,r,6)},Av=()=>(i,t,e)=>{i.fillStyle="#ecd29a",i.fillRect(0,0,t,e);for(let n=0;n<40;n++)i.fillStyle=n%2?"rgba(255,236,190,0.3)":"rgba(205,165,105,0.22)",i.beginPath(),i.arc(Math.random()*t,Math.random()*e,30+Math.random()*70,0,7),i.fill();i.lineWidth=3;for(let n=0;n<14;n++){i.strokeStyle=n%2?"rgba(190,150,95,0.35)":"rgba(255,244,210,0.4)";const s=(n+.5)*(e/14);i.beginPath();for(let r=0;r<=t;r+=8){const a=s+Math.sin(r/t*Math.PI*4+n)*6;r===0?i.moveTo(r,a):i.lineTo(r,a)}i.stroke()}Oa(i,t,e,7e3,["#d8b678","#f8e6b8","#c9a468","#fff3cf"],1,2.5,.6)},Cv=(i,t,e)=>(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r),n.fillStyle=t;for(let a=0;a<4;a++)n.fillRect((a+.25)*(s/4),0,s/8,r);n.fillStyle=e;for(let a=0;a<4;a++)for(let o=0;o<4;o++)n.beginPath(),n.arc((a+.75)*(s/4),(o+.5)*(r/4),s/60,0,7),n.fill()},Rv=()=>(i,t,e)=>{i.fillStyle="#f2e9d8",i.fillRect(0,0,t,e);const n=8;for(let s=0;s<n;s++){const r=s*e/n,a=i.createLinearGradient(0,r,0,r+e/n);a.addColorStop(0,"rgba(255,255,255,0.35)"),a.addColorStop(.85,"rgba(0,0,0,0.04)"),a.addColorStop(1,"rgba(0,0,0,0.3)"),i.fillStyle=a,i.fillRect(0,r,t,e/n)}},Pv=()=>(i,t,e)=>{i.fillStyle="#b2433f",i.fillRect(0,0,t,e),i.fillStyle="#f0d9a8",i.fillRect(t*.04,e*.06,t*.92,e*.88),i.fillStyle="#2f5d7c",i.fillRect(t*.07,e*.1,t*.86,e*.8),i.fillStyle="#d98e3f";for(let n=0;n<9;n++)for(let s=0;s<5;s++){const r=t*(.12+n*.095),a=e*(.18+s*.16);i.beginPath(),i.moveTo(r,a-e*.05),i.lineTo(r+t*.03,a),i.lineTo(r,a+e*.05),i.lineTo(r-t*.03,a),i.closePath(),i.fillStyle=(n+s)%2?"#d98e3f":"#f0d9a8",i.fill()}Oa(i,t,e,6e3,["rgba(0,0,0,0.25)","rgba(255,255,255,0.2)"],1,2,.5)},qu=[["ZAPPO","#e6332a","#ffd400"],["MEGA BLOX","#1565c0","#ffeb3b"],["TURBO OATS","#f57c00","#fff8e1"],["STAR BITES","#6a1b9a","#ffd54f"],["ROBO PALS","#00897b","#e0f7fa"],["FIZZ POP","#d81b60","#fff"],["KITE KIT","#29b6f6","#fff59d"],["WOBBLE","#7cb342","#fff"],["DINO CRUNCH","#388e3c","#ffcc80"],["PUZZLE 500","#5d4037","#ffe082"],["GLOW GOO","#212121","#76ff03"],["SPACE CAT","#283593","#ff80ab"],["BUBBLE UP","#00acc1","#ffffff"],["CHOO CHOO","#c62828","#ffffff"],["MARBLES","#fbc02d","#1a237e"],["YUM RINGS","#ef6c00","#fffde7"]],Lv=qu.map(i=>i[1]),Yu=()=>(i,t,e)=>{const n=t/4;qu.forEach(([s,r,a],o)=>{const l=o%4*n,c=Math.floor(o/4)*n;i.save(),i.beginPath(),i.rect(l,c,n,n),i.clip(),i.fillStyle=r,i.fillRect(l,c,n,n),i.fillStyle="rgba(255,255,255,0.16)",i.beginPath(),i.moveTo(l,c+n*.75),i.lineTo(l+n,c+n*.35),i.lineTo(l+n,c+n*.6),i.lineTo(l,c+n),i.closePath(),i.fill(),i.fillStyle=a,i.beginPath();const f=l+n*.5,h=c+n*.6,u=12+o%3*4;for(let g=0;g<u*2;g++){const x=n*(g%2?.22:.3),p=g/(u*2)*Math.PI*2;i.lineTo(f+Math.cos(p)*x,h+Math.sin(p)*x)}i.closePath(),i.fill(),i.fillStyle=r,i.beginPath(),i.arc(f-n*.07,h-n*.02,n*.035,0,7),i.arc(f+n*.07,h-n*.02,n*.035,0,7),i.fill(),i.lineWidth=n*.02,i.strokeStyle=r,i.beginPath(),i.arc(f,h+n*.03,n*.09,.15*Math.PI,.85*Math.PI),i.stroke(),i.fillStyle="rgba(0,0,0,0.28)",Hl(i,l+n*.06,c+n*.07,n*.88,n*.2,n*.04),i.fill();let d=n*.15;for(i.font=`900 ${d}px "Arial Black", Impact, sans-serif`;i.measureText(s).width>n*.8;)d-=2,i.font=`900 ${d}px "Arial Black", Impact, sans-serif`;i.textAlign="center",i.textBaseline="middle",i.fillStyle="#fff",i.fillText(s,l+n*.5,c+n*.175),i.fillStyle=r,i.fillRect(l,c+n*.88,n*.12,n*.12),i.strokeStyle="rgba(0,0,0,0.35)",i.lineWidth=4,i.strokeRect(l+2,c+2,n-4,n-4),i.restore()})},Iv=(i,t)=>(e,n,s)=>{e.clearRect(0,0,n,s),e.fillStyle="rgba(8,8,24,0.82)",Hl(e,4,4,n-8,s-8,26),e.fill(),e.lineWidth=8,e.strokeStyle=t,e.shadowColor=t,e.shadowBlur=26,Hl(e,16,16,n-32,s-32,20),e.stroke();let r=s*.56;for(e.font=`900 ${r}px "Arial Black", Impact, sans-serif`;e.measureText(i).width>n*.82;)r-=4,e.font=`900 ${r}px "Arial Black", Impact, sans-serif`;e.textAlign="center",e.textBaseline="middle",e.fillStyle=t,e.fillText(i,n/2,s/2+4),e.shadowBlur=8,e.fillStyle="#ffffff",e.globalAlpha=.85,e.fillText(i,n/2,s/2+4),e.globalAlpha=1,e.shadowBlur=0},kv=()=>(i,t,e)=>{const n=i.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)},Dv=()=>(i,t,e)=>{const n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#ff9d5c"),n.addColorStop(.5,"#3f8fa6"),n.addColorStop(1,"#2f7f9a"),i.fillStyle="#3a88a2",i.fillRect(0,0,t,e),i.lineWidth=3;for(let s=0;s<22;s++){i.strokeStyle=s%3===0?"rgba(255,214,150,0.55)":s%3===1?"rgba(255,255,255,0.28)":"rgba(20,70,100,0.35)";const r=(s+.5)*(e/22);i.beginPath();for(let a=0;a<=t;a+=8){const o=r+Math.sin(a/t*Math.PI*6+s*1.7)*5;a===0?i.moveTo(a,o):i.lineTo(a,o)}i.stroke()}},ju=(i,t,e)=>(n,s,r)=>{const a=n.createLinearGradient(0,0,0,r);a.addColorStop(0,i),a.addColorStop(1,t),n.fillStyle=a,n.fillRect(0,0,s,r),n.fillStyle="rgba(255,255,255,0.75)";for(let o=0;o<4;o++)n.beginPath(),n.ellipse(s*(.2+o*.22),r*(.25+o%2*.2),s*.12,r*.05,0,0,7),n.fill();n.fillStyle=e,n.fillRect(0,0,s,14),n.fillRect(0,r-14,s,14),n.fillRect(0,0,14,r),n.fillRect(s-14,0,14,r),n.fillRect(s/2-6,0,12,r),n.fillRect(0,r/2-6,s,12)},Gl=Math.PI*2,Uv=.12;function Nv(i){const t=i.waypoints.map(a=>({x:a[0],z:a[1],y:a[2]||0,r:a[3]&&a[3].r||i.cornerRadius,w:a[3]&&a[3].w||i.halfWidth})),e=t.length,n=[];for(let a=0;a<e;a++){const o=t[(a+e-1)%e],l=t[a],c=t[(a+1)%e];let f=l.x-o.x,h=l.z-o.z,u=c.x-l.x,d=c.z-l.z;const g=Math.hypot(f,h),x=Math.hypot(u,d);f/=g,h/=g,u/=x,d/=x;const p=f*d-h*u,m=f*u+h*d,y=Math.atan2(Math.abs(p),m),v=p>=0?1:-1,_=l.r*Math.tan(y/2);n.push({P:l,d1x:f,d1z:h,d2x:u,d2z:d,theta:y,sign:v,T:_,sx:l.x-f*_,sz:l.z-h*_,ex:l.x+u*_,ez:l.z+d*_})}const s=[];let r=0;for(let a=0;a<e;a++){const o=n[a],l=o.P,c=l.r,f=o.sx-o.d1z*o.sign*c,h=o.sz+o.d1x*o.sign*c,u=Math.atan2(o.sz-h,o.sx-f),d=Math.max(2,Math.ceil(o.theta/(Math.PI/14)));for(let v=0;v<=d;v++){const _=u+o.sign*o.theta*v/d;s.push({x:f+Math.cos(_)*c,z:h+Math.sin(_)*c,y:l.y,w:l.w})}const g=n[(a+1)%e],x=Math.hypot(g.sx-o.ex,g.sz-o.ez),p=(g.sx-o.ex)*o.d2x+(g.sz-o.ez)*o.d2z;if(p<2)throw new Error(`track ${i.id}: fillets overlap on edge ${a} (free straight ${p.toFixed(1)})`);let m=[];if(x>9){const v=3.5/x;m.push(v);const _=Math.ceil(x/26);for(let E=1;E<_;E++)m.push(E/_);m.push(1-v)}else m.push(.5);let y=-1;a===0&&(y=i.startFrac??.5,m=m.filter(v=>Math.abs(v-y)*x>5),m.push(y)),m.sort((v,_)=>v-_);for(const v of m)v===y&&(r=s.length),s.push({x:o.ex+(g.sx-o.ex)*v,z:o.ez+(g.sz-o.ez)*v,y:l.y+(g.P.y-l.y)*v,w:l.w+(g.P.w-l.w)*v})}return s.slice(r).concat(s.slice(0,r))}function of(i,t,e){const n=i.length;let s=i,r=new Float64Array(n);for(let a=0;a<e;a++){for(let l=0;l<n;l++){let c=0;for(let f=-t;f<=t;f++)c+=s[(l+f+n)%n];r[l]=c/(2*t+1)}const o=s;s=r,r=o}s!==i&&i.set(s)}function Zu(i){if(i._line)return i._line;const t=Nv(i),e=t.length,n=new vc(t.map(V=>new N(V.x,V.y,V.z)),!0,"centripetal"),s=8e3,r=new Float64Array(s+1),a=new Float64Array(s+1),o=new Float64Array(s+1),l=new Float64Array(s+1),c=new Float64Array(s+1),f=new N;for(let V=0;V<=s;V++){const Q=V/s;n.getPoint(Q,f),r[V]=f.x,a[V]=f.y,o[V]=f.z;const tt=Q*e,ut=Math.floor(tt)%e;let L=tt-Math.floor(tt);L=L*L*(3-2*L),l[V]=t[ut].w+(t[(ut+1)%e].w-t[ut].w)*L,V>0&&(c[V]=c[V-1]+Math.hypot(r[V]-r[V-1],o[V]-o[V-1]))}const h=c[s],u=Math.max(600,Math.min(1200,Math.round(h/.7))),d=h/u,g=new Float64Array(u),x=new Float64Array(u),p=new Float64Array(u),m=new Float64Array(u);let y=0;for(let V=0;V<u;V++){const Q=V*d;for(;y<s-1&&c[y+1]<Q;)y++;const tt=c[y+1]-c[y],ut=tt>1e-9?(Q-c[y])/tt:0;g[V]=r[y]+(r[y+1]-r[y])*ut,x[V]=a[y]+(a[y+1]-a[y])*ut,p[V]=o[y]+(o[y+1]-o[y])*ut,m[V]=l[y]+(l[y+1]-l[y])*ut}const v=Math.max(2,Math.round(7/d));of(x,v,3),of(m,v,2);for(const V of i.humps||[]){const Q=V.at*h,tt=V.len/2;for(let ut=0;ut<u;ut++){let L=Math.abs(ut*d-Q);L>h/2&&(L=h-L),L<tt&&(x[ut]+=V.h*.5*(1+Math.cos(Math.PI*L/tt)))}}let _=1/0;for(let V=0;V<u;V++)_=Math.min(_,x[V]);for(let V=0;V<u;V++)x[V]+=Uv-Math.min(0,_);const E=new Float64Array(u),w=new Float64Array(u),S=new Float64Array(u),A=new Float64Array(u),b=new Float64Array(u),M=new Float64Array(u),P=new Float64Array(u);for(let V=0;V<u;V++){const Q=(V+u-1)%u,tt=(V+1)%u,ut=g[tt]-g[Q],L=x[tt]-x[Q],T=p[tt]-p[Q],C=Math.hypot(ut,L,T),B=Math.hypot(ut,T);E[V]=ut/C,w[V]=L/C,S[V]=T/C,A[V]=-T/B,b[V]=ut/B,M[V]=Math.atan2(ut,T)}let z=0,U=0,F=0;for(let V=0;V<u;V++){let Q=M[(V+2)%u]-M[(V+u-2)%u];for(;Q>Math.PI;)Q-=Gl;for(;Q<-Math.PI;)Q+=Gl;P[V]=Q/(4*d),z=Math.max(z,m[V]),U+=g[V],F+=p[V]}const H=U/u,G=F/u;let Y=0;for(let V=0;V<u;V++)Y=Math.max(Y,Math.hypot(g[V]-H,p[V]-G));const W={N:u,L:h,seg:d,px:g,py:x,pz:p,hw:m,tx:E,ty:w,tz:S,rx:A,rz:b,head:M,curv:P,maxHW:z,cx:H,cz:G,radius:Y};return i._line=W,W}function zv(i){const{N:t,px:e,py:n,pz:s,hw:r,tx:a,ty:o,tz:l,rx:c,rz:f}=i;return function(u,d){u=u-Math.floor(u);const g=u*t;let x=Math.floor(g);x>=t&&(x=t-1);const p=g-x,m=(x+1)%t,y=1-p,v=d||{pos:new N,tangent:new N,right:new N,halfWidth:0};return v.pos.set(e[x]*y+e[m]*p,n[x]*y+n[m]*p,s[x]*y+s[m]*p),v.tangent.set(a[x]*y+a[m]*p,o[x]*y+o[m]*p,l[x]*y+l[m]*p).normalize(),v.right.set(c[x]*y+c[m]*p,0,f[x]*y+f[m]*p).normalize(),v.halfWidth=r[x]*y+r[m]*p,v}}function Fv(i){const{N:t,px:e,py:n,pz:s,hw:r,rx:a,rz:o}=i,l=Math.max(24,Math.round(t*.04)),c=(i.maxHW*2+15)**2;return function(h,u,d){const g=h.x,x=h.z;let p=-1,m=1/0;if(u!=null&&u===u){const C=Math.floor((u-Math.floor(u))*t);for(let B=-l;B<=l;B++){let O=C+B;O<0?O+=t:O>=t&&(O-=t);const J=g-e[O],dt=x-s[O],nt=J*J+dt*dt;nt<m&&(m=nt,p=O)}m>c&&(p=-1)}if(p<0){m=1/0;for(let C=0;C<t;C++){const B=g-e[C],O=x-s[C],J=B*B+O*O;J<m&&(m=J,p=C)}}const y=p===0?t-1:p-1,v=p===t-1?0:p+1;let _=e[y],E=s[y],w=e[p]-_,S=s[p]-E,A=((g-_)*w+(x-E)*S)/(w*w+S*S);A=A<0?0:A>1?1:A;let b=_+w*A-g,M=E+S*A-x;const P=b*b+M*M;_=e[p],E=s[p],w=e[v]-_,S=s[v]-E;let z=((g-_)*w+(x-E)*S)/(w*w+S*S);z=z<0?0:z>1?1:z,b=_+w*z-g,M=E+S*z-x;const U=b*b+M*M;let F,H,G;P<U?(F=y,H=p,G=A):(F=p,H=v,G=z);const Y=1-G,W=e[F]*Y+e[H]*G,V=s[F]*Y+s[H]*G;let Q=a[F]*Y+a[H]*G,tt=o[F]*Y+o[H]*G;const ut=Math.hypot(Q,tt)||1;Q/=ut,tt/=ut;let L=(F+G)/t;L>=1&&(L-=1);const T=d||{};return T.t=L,T.lateral=(g-W)*Q+(x-V)*tt,T.y=n[F]*Y+n[H]*G,T.halfWidth=r[F]*Y+r[H]*G,T}}function Vl(i,t,e,n,s,r,a,o){const{N:l,px:c,py:f,pz:h,rx:u,rz:d}=i,g=new Float32Array((e+1)*6),x=new Float32Array((e+1)*4),p=[];for(let y=0;y<=e;y++){const v=((t+y)%l+l)%l,_=n(v),E=s(v);g.set([c[v]+u[v]*_,f[v]+r,h[v]+d[v]*_,c[v]+u[v]*E,f[v]+r,h[v]+d[v]*E],y*6);const w=y/e*o;if(x.set([0,w,a,w],y*4),y<e){const S=y*2;p.push(S,S+1,S+2,S+1,S+3,S+2)}}const m=new fe;return m.setAttribute("position",new Zt(g,3)),m.setAttribute("uv",new Zt(x,2)),m.setIndex(p),m.computeVertexNormals(),m}class Ov{constructor(t){this.def=t,this.line=Zu(t),this.group=new hn,this.group.name="track:"+t.id,this.batch=new Hi,this.rng=pv(t.seed||1234),this.footprints=[],this.solids=[],this.anims=[],this.edge={kerb:.9,wall:.6,...t.edge||{}},this.edgeTotal=this.edge.kerb+this.edge.wall,this.sample=zv(this.line),this.project=Fv(this.line),this.mats={matte:new In({vertexColors:!0}),gloss:new Te({vertexColors:!0,roughness:.28,metalness:.15}),far:new In({vertexColors:!0}),glow:new xe({vertexColors:!0}),glowNoFog:new xe({vertexColors:!0,fog:!1})},this.flags={matte:{cast:!0,receive:!0},gloss:{cast:!0,receive:!0},far:{cast:!1,receive:!1},glow:{cast:!1,receive:!1},glowNoFog:{cast:!1,receive:!1}},this.background=new Nt(8961006),this.fog=null,this.sun=null,this.sunDir=new N(.4,1,.3).normalize(),this._shadowRange=-1}tex(t,e,n,s){return gv(t,e,n,s)}bucket(t,e,n=!0,s=!0){this.mats[t]=e,this.flags[t]={cast:n,receive:s}}add(t){return this.group.add(t),t}onUpdate(t){this.anims.push(t)}clearance(t,e){const{N:n,px:s,pz:r,hw:a}=this.line;let o=1/0,l=0;for(let c=0;c<n;c++){const f=t-s[c],h=e-r[c],u=f*f+h*h;u<o&&(o=u,l=c)}return Math.sqrt(o)-a[l]-this.edgeTotal}reserve(t,e,n,s=0,r=s>=2.5){const a={name:t,x:e,z:n,r:s};return this.footprints.push(a),r&&this.solids.push(a),!0}reserveBox(t,e,n,s,r,a=0,o=!0){const l=Math.cos(a),c=Math.sin(a),f=Math.max(1,Math.ceil(s/3)),h=Math.max(1,Math.ceil(r/3));for(let u=0;u<=f;u++)for(let d=0;d<=h;d++){const g=(u/f-.5)*s,x=(d/h-.5)*r,p={name:t,x:e+g*l+x*c,z:n-g*c+x*l,r:.2};this.footprints.push(p)}if(o){const u=Math.max(s,r),d=Math.min(s,r),g=d*.72,x=Math.max(1,Math.ceil(u/d));for(let p=0;p<x;p++){const m=x===1?0:(p/(x-1)-.5)*(u-d),y=s>=r?m:0,v=s>=r?0:m;this.solids.push({name:t,x:e+y*l+v*c,z:n-y*c+v*l,r:g})}}}free(t,e,n,s=!0,r=.4){if(this.clearance(t,e)<n+r)return!1;if(s)for(const a of this.solids){const o=n+a.r,l=t-a.x,c=e-a.z;if(l*l+c*c<o*o)return!1}return!0}spot(t,e,n,s,r=!0,a=!0){let o=e,l=n;if(!this.free(e,n,s,a,1))t:for(let c=2;c<=120;c+=2)for(let f=0;f<20;f++){const h=f/20*Gl+c,u=e+Math.cos(h)*c,d=n+Math.sin(h)*c;if(this.free(u,d,s,a,1)){o=u,l=d;break t}}return this.reserve(t,o,l,s,r),{x:o,z:l}}at(t,e=0){const n=this.sample(t);return{x:n.pos.x+n.right.x*e,y:n.pos.y,z:n.pos.z+n.right.z*e,heading:Math.atan2(n.tangent.x,n.tangent.z),halfWidth:n.halfWidth,rx:n.right.x,rz:n.right.z,tx:n.tangent.x,tz:n.tangent.z}}beside(t,e,n,s=0){const r=this.sample(t),a=e*(r.halfWidth+this.edgeTotal+n+s);return{x:r.pos.x+r.right.x*a,y:0,z:r.pos.z+r.right.z*a,heading:Math.atan2(r.tangent.x,r.tangent.z),roadY:r.pos.y}}scatter(t,e,n,s,{avoidSolids:r=!0,tries:a=30,name:o="scatter",solid:l=!1}={}){const c=this.rng;let f=0;for(let h=0;h<t;h++)for(let u=0;u<a;u++){const d=typeof n=="function"?n():n,g=c.range(e[0],e[2]),x=c.range(e[1],e[3]);if(this.free(g,x,d,r)){this.reserve(o,g,x,d,l),s(g,x,d,f++);break}}return f}scatterBeside(t,e,n,s,r,{avoidSolids:a=!0,name:o="trackside",solid:l=!1,tRange:c=[0,1]}={}){const f=this.rng;let h=0;for(let u=0;u<t;u++)for(let d=0;d<12;d++){const g=typeof s=="function"?s():s,x=this.beside(f.range(c[0],c[1]),f.sign(),f.range(e,n),g);if(this.free(x.x,x.z,g,a)){this.reserve(o,x.x,x.z,g,l),r(x.x,x.z,g,h++,x.heading);break}}return h}lights({hemi:t,sun:e,ambient:n}){t&&this.add(new av(t[0],t[1],t[2])),n&&this.add(new hv(n[0],n[1]));const s=this.line,r=new cv(e.color,e.intensity);this.sunDir.set(e.dir[0],e.dir[1],e.dir[2]).normalize(),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.bias=-5e-4,this.add(r),this.add(r.target),this.sun=r,this.center=new N(s.cx,0,s.cz),this.followShadow(this.center,s.radius+30)}followShadow(t,e=70){const n=this.sun;if(n&&(n.target.position.set(t.x,0,t.z),n.position.set(t.x,0,t.z).addScaledVector(this.sunDir,320),n.target.updateMatrixWorld(),e!==this._shadowRange)){this._shadowRange=e;const s=n.shadow.camera;s.left=-e,s.right=e,s.top=e,s.bottom=-e,s.near=10,s.far=320+e*2.2+120,s.updateProjectionMatrix(),n.shadow.normalBias=Math.min(.3,e*2/2048*1.6)}}skyDome(t,e=600){const n=t.map(([c,f])=>[c,xi(f)]),s=new Nt,r=new Ie(e,32,20),a=r.attributes.position,o=new Float32Array(a.count*3);for(let c=0;c<a.count;c++){const f=Math.max(0,Math.min(1,a.getY(c)/e));let h=0;for(;h<n.length-2&&f>n[h+1][0];)h++;const u=Math.max(0,Math.min(1,(f-n[h][0])/(n[h+1][0]-n[h][0])));s.copy(n[h][1]).lerp(n[h+1][1],u),o.set([s.r,s.g,s.b],c*3)}r.setAttribute("color",new Zt(o,3));const l=new Ct(r,new xe({vertexColors:!0,side:Ye,fog:!1,depthWrite:!1}));return l.renderOrder=-10,l.name="sky",l.position.set(this.line.cx,-20,this.line.cz),this.add(l)}ground(t,e,n,s,r={}){t&&t.repeat.set(s,s);const a=new Te({map:t,color:t?16777215:e,roughness:.95,metalness:0,...r}),o=new Ct(new Ae(n,n),a);return o.rotation.x=-Math.PI/2,o.position.set(this.line.cx,0,this.line.cz),o.receiveShadow=!0,o.name="ground",this.add(o)}}function Bv(i){const{def:t,line:e}=i,n=t.road.style,s=Math.max(1,Math.round(e.L/20)),r=i.tex(512,1024,bv(n)),a=Vl(e,0,e.N,g=>-e.hw[g],g=>e.hw[g],0,1,s),o=new Te({map:r,color:r?16777215:t.road.fallback,roughness:t.road.roughness??.9,metalness:t.road.metalness??0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});t.road.emissive&&r&&(o.emissiveMap=r,o.emissive=new Nt(16777215),o.emissiveIntensity=t.road.emissive);const l=new Ct(a,o);l.receiveShadow=!0,l.name="road",i.add(l);const c=i.tex(64,64,Mv(),{aniso:4}),f=e.hw[0],h=Vl(e,-2,4,g=>-e.hw[g],g=>e.hw[g],.035,Math.round(f*2/(e.seg*4)),1),u=new In({map:c,color:c?16777215:14540253,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),d=new Ct(h,u);d.receiveShadow=!0,d.name="startline",i.add(d)}function Hv(i){const{def:t,line:e,edge:n}=i,{N:s,L:r,px:a,py:o,pz:l,rx:c,rz:f,hw:h}=e,u=t.wall,d=new af,g=new af,x=u.palette.map(xi),p=(u.top||u.palette).map(xi),m=xi(u.skirt??u.palette[0]),y=t.kerb.map(xi);let v=Math.max(2,Math.round(r/(u.block||3.2)));v%x.length&&(v+=x.length-v%x.length);let _=Math.max(2,Math.round(r/2.4));_%2&&_++;const E=(A,b,M)=>[a[A]+c[A]*b,M,l[A]+f[A]*b],w=A=>Math.floor(A*v/s),S=A=>u.height*(u.crenellate&&A%2?.62:1);for(const A of[-1,1])for(let b=0;b<s;b++){const M=(b+1)%s,P=w(b),z=S(P),U=x[(P+(A>0?1:0))%x.length],F=p[(P+(A>0?1:0))%p.length],H=A*h[b],G=A*h[M],Y=A*(h[b]+n.kerb),W=A*(h[M]+n.kerb),V=A*(h[b]+n.kerb+n.wall),Q=A*(h[M]+n.kerb+n.wall),tt=c[b]*A,ut=f[b]*A,L=y[Math.floor(b*_/s)%y.length];d.quad(E(b,H,o[b]+.012),E(M,G,o[M]+.012),E(M,W,o[M]+.09),E(b,Y,o[b]+.09),0,1,0,L),d.quad(E(b,Y,o[b]-.05),E(M,W,o[M]-.05),E(M,W,o[M]+z),E(b,Y,o[b]+z),-tt,0,-ut,U),(u.glowTop?g:d).quad(E(b,Y,o[b]+z),E(M,W,o[M]+z),E(M,Q,o[M]+z),E(b,V,o[b]+z),0,1,0,F);const T=o[b]>.35?o[b]-.05:-.1,C=o[M]>.35?o[M]-.05:-.1;if(d.quad(E(b,V,o[b]+z),E(M,Q,o[M]+z),E(M,Q,C),E(b,V,T),tt,0,ut,U),(o[b]>.35||o[M]>.35)&&d.quad(E(b,V,T),E(M,Q,C),E(M,Q,-.3),E(b,V,-.3),tt,0,ut,m),u.crenellate){const B=w((b+s-1)%s);if(B!==P){const O=Math.max(z,S(B)),J=E(b,Y,o[b]),dt=E(b,V,o[b]),nt=E(b,V,o[b]+O),gt=E(b,Y,o[b]+O);d.quad(J,dt,nt,gt,e.tx[b],0,e.tz[b],U),d.quad(J,dt,nt,gt,-e.tx[b],0,-e.tz[b],U)}}}i.batch.add("matte",d.toGeometry(),null),g.empty||i.batch.add("glow",g.toGeometry(),null)}function Gv(i){const{def:t,line:e,edge:n,batch:s}=i,r=t.gantry||{},a=e.head[0],o=e.py[0],l=e.hw[0],c=l+n.kerb+n.wall+.9,f=r.post??3159103,h=r.beam??14826286;for(const p of[-1,1]){const m=e.px[0]+e.rx[0]*c*p,y=e.pz[0]+e.rz[0]*c*p;s.cyl("matte",.45,.55,o+8.2,m,0,y,f,10),s.box("matte",1.6,.5,1.6,m,0,y,h,a),i.reserve("gantry-post",m,y,.8,!1)}s.box("matte",c*2+1.4,.8,.9,e.px[0],o+7.4,e.pz[0],h,a);for(let p=-2;p<=2;p++){const m=e.px[0]+e.rx[0]*p*1.6,y=e.pz[0]+e.rz[0]*p*1.6;s.sphere("glow",.38,m,o+7.15,y,p%2?16769354:5111674)}const u=i.tex(1024,256,Tv(t.name.toUpperCase(),r.bannerBg??"#1c2140",r.bannerFg??"#ffe14a",r.accent??"#ff4b3a"),{clamp:!0}),d=new xe({map:u,color:u?16777215:1843520}),g=new Ae(l*2+1.5,(l*2+1.5)/4.6),x=(l*2+1.5)/4.6;for(const p of[0,1]){const m=new Ct(g,d),y=p?.47:-.47;m.position.set(e.px[0]+e.tx[0]*y,o+8.2+x/2-.1,e.pz[0]+e.tz[0]*y),m.rotation.y=a+(p?0:Math.PI),m.name="banner",i.add(m)}s.box("matte",l*2+1.9,x+.3,.8,e.px[0],o+8.05,e.pz[0],f,a)}function Vv(i){const{def:t,line:e,edge:n,batch:s}=i,{N:r,seg:a,px:o,py:l,pz:c,rx:f,rz:h,tx:u,tz:d,hw:g,curv:x}=e,p=t.chevronCurvature??1/30,m=t.chevron||{},y=[],v=[],_=[],E=[],w=Math.max(1,Math.round(6.5/a));let S=0;for(let P=0;P<r;P+=w){const z=x[(P+Math.round(3/a))%r];if(Math.abs(z)<p||S>=90)continue;const U=z>0?1:-1,F=U*(g[P]+n.kerb+n.wall+.55),H=o[P]+f[P]*F,G=c[P]+h[P]*F,Y=l[P]+t.wall.height+.35,W=1.7,V=1.75,Q=Math.hypot(u[P],d[P]),tt=u[P]/Q,ut=d[P]/Q,L=y.length/3;y.push(H-tt*V,Y,G-ut*V,H+tt*V,Y,G+ut*V,H+tt*V,Y+W,G+ut*V,H-tt*V,Y+W,G-ut*V),v.push(0,0,1,0,1,1,0,1);for(let T=0;T<4;T++)_.push(-f[P]*U,0,-h[P]*U);E.push(L,L+1,L+2,L,L+2,L+3),s.box("matte",.25,Y-.1,.25,H+f[P]*U*.14,0,G+h[P]*U*.14,3817293),i.reserve("chevron",H,G,.3,!1),S++}if(!S)return;const A=new fe;A.setAttribute("position",new Zt(new Float32Array(y),3)),A.setAttribute("normal",new Zt(new Float32Array(_),3)),A.setAttribute("uv",new Zt(new Float32Array(v),2)),A.setIndex(E);const b=i.tex(256,128,wv(m.bg??"#ffd21f",m.fg??"#1b1b22"),{clamp:!0,aniso:4}),M=new Ct(A,new xe({map:b,color:b?16777215:16765471,side:Ne}));M.name="chevrons",i.add(M)}function Wv(i){const{def:t,line:e}=i,n=[],s=[],r=Math.max(2,Math.round(3/e.seg));for(const a of t.boostAt||[]){const o=Math.round(a.t*e.N)%e.N,l=a.lat||0;s.push(Vl(e,o-r,r*2,()=>l-2.3,()=>l+2.3,.05,1,2)),n.push({x:e.px[o]+e.rx[o]*l,z:e.pz[o]+e.rz[o]*l,radius:2.7,heading:e.head[o],y:e.py[o],t:o/e.N})}if(s.length){const a=i.tex(128,256,Sv(),{aniso:4}),o=new xe({map:a,color:a?16777215:16756768,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});for(const l of s){const c=new Ct(l,o);c.name="boostpad",c.renderOrder=2,i.add(c)}i.onUpdate((l,c)=>{a&&(a.offset.y=-(c*1.6)%1);const f=.75+.25*Math.sin(c*9);o.color.setRGB(f,f,f)})}return n}function Xv(i){const{line:t,sample:e}=i,n=[];for(let s=0;s<8;s++){const r=4.5+s*3.3,a=e(1-r/t.L),o=(s%2===0?-1:1)*a.halfWidth*.38;n.push({pos:new N(a.pos.x+a.right.x*o,a.pos.y,a.pos.z+a.right.z*o),heading:Math.atan2(a.tangent.x,a.tangent.z)})}return n}function qv(i){const t=[];for(const e of i.def.pickupAt||[]){const n=i.sample(e);for(const s of[-1,0,1]){const r=s*n.halfWidth*.52;t.push(new N(n.pos.x+n.right.x*r,n.pos.y,n.pos.z+n.right.z*r))}}return t}function Yv(i){const t=[];for(const e of i.def.obstaclesAt||[]){const n=i.at(e.t,e.lat);t.push({x:n.x,z:n.z,radius:e.r,y:n.y,kind:e.kind,heading:n.heading})}return t}function jv(i){const t=new Ov(i),{line:e}=t;Bv(t),Hv(t),Gv(t),Vv(t);const n=Wv(t),s=Xv(t),r=qv(t),a=Yv(t);t.obstacles=a,i.decorate(t);for(const d of t.batch.build(t.mats,t.flags))t.group.add(d);t.group.updateMatrixWorld(!0);const o=[];for(let d=0;d<120;d++){const g=Math.floor(d/120*e.N);o.push([e.px[g],e.pz[g]])}let l=0,c=0,f=0;t.group.traverse(d=>{if(d.isMesh){l++;const g=d.geometry,x=g.index?g.index.count/3:g.attributes.position.count/3;f+=x*(d.isInstancedMesh?d.count:1)}d.isLight&&c++});let h=!1;return{id:i.id,name:i.name,group:t.group,background:t.background,fog:t.fog,length:e.L,sample:t.sample,project:t.project,startGrid:s,pickupSpots:r,obstacles:a.map(d=>({x:d.x,z:d.z,radius:d.radius})),boostPads:n.map(d=>({x:d.x,z:d.z,radius:d.radius,heading:d.heading})),minimap:o,update(d,g){for(const x of t.anims)x(d,g)},dispose(){h||(h=!0,t.group.parent&&t.group.parent.remove(t.group),yv(t.group),t.background&&t.background.isTexture&&t.background.dispose(),t.anims.length=0)},sun:t.sun,sunDirection:t.sunDir.clone(),followShadow:(d,g)=>t.followShadow(d,g),center:new N(e.cx,0,e.cz),radius:e.radius,samples:e.N,ceilingHeight:t.ceilingHeight??null,wallOffset:t.edgeTotal,debug:{footprints:t.footprints,meshCount:l,lightCount:c,triangles:Math.round(f),line:e}}}const ii=Math.PI*2;function zi(i,t=i.length){const e=i.map(xi);return(n,s,r,a)=>{const o=(Math.atan2(r,n)+Math.PI)/ii;return a.copy(e[Math.min(t-1,Math.floor(o*t))%e.length])}}function $u(i,t,e){const n=i.map(xi);return(s,r,a,o)=>{const l=Math.max(0,Math.min(.9999,(r-t)/(e-t)));return o.copy(n[Math.floor(l*n.length)])}}function Eo(i,t,e,n,s,r=16765498){const a=i.batch,o=i.rng,l=(7+o()*6)*n,c=o()*ii,f=-.35-o()*.5;a.cyl("matte",.2*n,.3*n,l,t,0,e,Xe(4168250,o,.1),6);for(let d=0;d<2;d++){const g=new Ie(1,6,4);g.scale(2.2*n,.15*n,.8*n),g.translate(2.2*n,0,0),a.add("matte",g,Xe(5222467,o,.1),t,l*(.3+.25*d),e,c+d*2.6,0,.5)}const h=7+o.int(0,2);for(let d=0;d<h;d++){const g=new Ie(1,6,4);g.scale(.62*n,1.25*n,.2*n),g.translate(0,1.7*n,0),g.rotateZ(d/h*ii),a.add("matte",g,s,t,l,e,c,f)}const u=new Ie(.95*n,8,6);u.scale(1,1,.55),a.add("matte",u,r,t,l,e,c,f)}function Ea(i,t,e,n,s=10132120,r=0){const a=new bc(n,0);a.scale(1,.62,.85),i.batch.add("matte",a,Xe(s,i.rng,.12),t,r+n*.35,e,i.rng()*ii,i.rng()*.4)}function Zv(i,t,e,n){const s=i.batch,r=i.rng;s.cyl("matte",1*n,1.4*n,3.2*n,t,0,e,15985368,8);const a=new Ie(3.4*n,12,6,0,ii,0,Math.PI/2);a.scale(1,.7,1),s.add("matte",a,14235694,t,3*n,e),s.cyl("matte",3.4*n,3.4*n,.2*n,t,2.9*n,e,15786696,12);for(let o=0;o<6;o++){const l=r()*ii,c=.3+r()*.9;s.sphere("matte",.45*n,t+Math.cos(l)*Math.sin(c)*3.3*n,3*n+Math.cos(c)*2.35*n,e+Math.sin(l)*Math.sin(c)*3.3*n,16777215,1,.5,1,6,4)}}function or(i,t,e,n,s,r,a,o=0,l=!1,c=-1){const f=c>=0?c:i.rng.int(0,15),h=_v(t,e,n,f),u=i.atlasTex?16777215:Lv[f];l?i.batch.add("atlas",h,u,s,r+n/2,a,o,Math.PI/2):i.batch.add("atlas",h,u,s,r+e/2,a,o)}function lf(i,t,e,n,s=1){const r=i.batch,a=i.rng,o=[12071468,2908072,3115598,14260779,7028640,2064268,13589550];let l=0;for(let c=0;c<n;c++){const f=(11+a()*4)*s,h=(8+a()*2.5)*s,u=(1.6+a()*1.6)*s,d=a()*ii;r.box("matte",f,u,h,t,l,e,a.pick(o),d),r.box("matte",f*.94,u*.72,h*1.02,t,l+u*.14,e,16052194,d),l+=u}return l}function $v(i,t,e,n,s){const r=i.batch;r.cyl("gloss",4*n,3.6*n,8.5*n,t,0,e,s,16),r.cyl("matte",3.5*n,3.5*n,.3,t,8.3*n,e,4860954,16);const a=i.rng()*ii;r.torus("gloss",2.6*n,.75*n,t+Math.cos(a)*4.2*n,4.4*n,e-Math.sin(a)*4.2*n,s,0,a,0,ii,14,6)}function cf(i,t,e,n,s){const r=i.batch;r.box("matte",1.9*s,.22*s,1.9*s,t,e,n,16738835),r.add("matte",new ge(.16*s,.8*s,2.5*s,12),$u([16738835,16777215,16738835,16777215,16738835],-1.25*s,1.25*s),t,e+.22*s+1.25*s,n)}const Ys=Math.PI*2,Kv={id:"garden",name:"Buttercup Backyard",description:"A sunny lap of the lawn. Wide chalk-lined paving, giant daisies and one very sleepy garden gnome.",difficulty:1,defaultLaps:3,seed:1101,halfWidth:9,cornerRadius:30,startFrac:.45,waypoints:[[-110,-60,0],[110,-60,0],[130,20,1.5],[60,70,3.5],[0,30,1],[-60,75,2.5],[-130,25,.5]],humps:[{at:.6,h:1.3,len:30}],road:{style:"paving",fallback:9275779,roughness:.92},kerb:[15022639,16249834],wall:{height:1,palette:[11895626,11039808,12619605],top:[14462572,13738078,14923895],skirt:8018486,block:3.4},chevronCurvature:1/40,chevron:{bg:"#ffd21f",fg:"#1b1b22"},gantry:{beam:14826286,bannerBg:"#2e7d32",bannerFg:"#fff59d",accent:"#ffd21f"},boostAt:[{t:.12},{t:.47,lat:-3},{t:.8,lat:3}],pickupAt:[.07,.22,.37,.53,.68,.9],obstaclesAt:[{t:.3,lat:4,r:1.3,kind:"pot"},{t:.74,lat:-4,r:1.2,kind:"ball"}],decorate:Jv};function Jv(i){const t=i.batch,e=i.rng;i.background=new Nt(14085375),i.fog=new ks(14085375,280,1150),i.lights({hemi:[13954303,7313989,1.15],sun:{color:16773584,intensity:2.3,dir:[.45,.8,.35]}}),i.skyDome([[0,15004671],[.1,11853055],[.45,6467314],[1,3112918]]),i.ground(i.tex(512,512,Ev()),6270524,1700,95);for(const C of i.obstacles)C.kind==="pot"?(t.cyl("matte",C.radius,C.radius*.72,1.9,C.x,C.y,C.z,13133370,14),t.cyl("matte",C.radius*1.08,C.radius*1.08,.3,C.x,C.y+1.75,C.z,14252618,14),t.cyl("matte",C.radius*.9,C.radius*.9,.1,C.x,C.y+1.98,C.z,4862756,12),t.sphere("matte",.55,C.x,C.y+2.6,C.z,5814344,1,1.3,1,8,6),t.sphere("matte",.4,C.x+.4,C.y+3.2,C.z,16740264,1,1,1,8,6)):t.add("gloss",new Ie(C.radius,16,12),zi([16730938,16777215,2850281,16765471,16777215,3519850]),C.x,C.y+C.radius,C.z,.6,.3);const n=-142,s=i.tex(256,256,Rv(),{repeat:[10,14]}),r=new Ct(new Ae(470,260),new In({map:s,color:s?16777215:15919576}));r.position.set(0,130,n),r.name="house",i.add(r),i.reserveBox("house",0,n-4,470,8),t.box("far",470,12,5,0,0,n+2,10769727),t.box("far",480,14,30,0,252,n+10,7031354);const a=i.tex(256,256,ju("#9fd4ff","#e8f6ff","#ffffff"),{clamp:!0}),o=new xe({map:a,color:a?16777215:12575487});for(const C of[-120,20]){const B=new Ct(new Ae(84,84),o);B.position.set(C,120,n+.6),i.add(B),t.box("far",96,5,9,C,72,n+3,16777215),t.box("far",92,12,12,C,60,n+6,9067066);for(let O=0;O<7;O++)t.sphere("far",6,C-39+O*13,76,n+7,[16735882,16765498,16742970][O%3],1,.9,1,8,6);for(const O of[-1,1])t.box("far",16,88,2,C+O*52,76,n+1.5,4029020)}t.box("far",70,150,4,150,10,n+1.5,12597547),t.box("far",80,158,2,150,8,n+.6,16777215);for(const[C,B]of[[-16,30],[16,30],[-16,95],[16,95]])t.box("far",24,50,1.5,150+C,B,n+3.6,11088422);t.sphere("gloss",3.5,176,82,n+6,15253850),t.box("far",96,10,30,150,0,n+15,12170152),i.reserveBox("doorstep",150,n+15,96,30),t.cyl("far",3.5,3.5,250,-205,0,n+5,8226964,8);const l=-225,c=225,f=160,h=(C,B,O)=>{t.box("far",5.2,30,1.2,C,0,B,16514038,O),t.add("far",new dn(3.7,5.5,4,1),16514038,C,32.6,B,O+Math.PI/4)};for(let C=l;C<=c;C+=7.5)h(C,f,0);for(let C=n;C<=f;C+=7.5)h(l,C,Math.PI/2),h(c,C,Math.PI/2);for(const C of[8,22])t.box("far",c-l,2.4,1,0,C,f+1,15658726),t.box("far",1,2.4,f-n,l-1,C,(f+n)/2,15658726),t.box("far",1,2.4,f-n,c+1,C,(f+n)/2,15658726);i.reserveBox("fence",0,f,c-l,3),i.reserveBox("fence",l,(f+n)/2,3,f-n),i.reserveBox("fence",c,(f+n)/2,3,f-n);for(let C=-260;C<=260;C+=52)t.sphere("far",42,C+e.range(-8,8),22,f+45,Xe(3967546,e,.12),1.35,1+e()*.3,1,10,7);for(let C=n;C<=f+40;C+=52)t.sphere("far",42,l-45,22,C+e.range(-8,8),Xe(3967546,e,.12),1,1+e()*.3,1.35,10,7),t.sphere("far",42,c+45,22,C+e.range(-8,8),Xe(3967546,e,.12),1,1+e()*.3,1.35,10,7);for(const[C,B,O]of[[-330,120,1],[330,60,1.15],[-120,300,1.2],[160,310,1],[360,-90,.9],[-360,-60,1.05],[20,330,.9]]){t.cyl("far",12*O,17*O,170*O,C,0,B,8017462,10);for(let J=0;J<5;J++)t.sphere("far",(60+e()*30)*O,C+e.range(-50,50)*O,(190+e()*70)*O,B+e.range(-50,50)*O,Xe(4166720,e,.14),1,.85,1,10,8)}const u=new Hi;for(let C=0;C<11;C++){const B=C/11*Ys+e()*.4,O=360+e()*140,J=190+e()*110;for(let dt=0;dt<4;dt++)u.sphere("c",30+e()*26,Math.cos(B)*O+(dt-1.5)*34,J+e()*12,Math.sin(B)*O+e.range(-14,14),16777215,1.3,.55,1,10,7)}const d=u.build({c:new xe({vertexColors:!0,fog:!1})})[0];d.matrixAutoUpdate=!0,d.position.set(i.line.cx,0,i.line.cz),d.name="clouds",i.add(d),i.onUpdate(C=>{d.rotation.y+=C*.006});const g=i.spot("pond",15,-14,23);t.cyl("gloss",21,21,.25,g.x,0,g.z,3842264,28),t.cyl("matte",23,23.5,.18,g.x,0,g.z,6969928,28);for(let C=0;C<22;C++){const B=C/22*Ys;Ea(i,g.x+Math.cos(B)*22.3,g.z+Math.sin(B)*22.3,2+e()*1.6,10855068)}for(let C=0;C<7;C++){const B=e()*Ys,O=4+e()*13;t.cyl("matte",2.6,2.6,.12,g.x+Math.cos(B)*O,.28,g.z+Math.sin(B)*O,Xe(4169034,e,.1),10),C%3===0&&t.sphere("matte",1,g.x+Math.cos(B)*O,.9,g.z+Math.sin(B)*O,16748480,1,.7,1,8,5)}const x=new Hi;x.sphere("d",2.6,0,1.6,0,16765471,1.25,.9,1),x.sphere("d",1.7,2.2,3.8,0,16765471),x.sphere("d",.7,3.9,3.6,0,16747038,1.3,.5,1,8,5),x.sphere("d",.24,3.2,4.4,.8,1118481,1,1,1,6,4),x.sphere("d",.24,3.2,4.4,-.8,1118481,1,1,1,6,4),x.cone("d",1.1,1.8,-2.9,1.6,0,16765471,6);const p=x.build({d:i.mats.gloss},{d:{cast:!0}})[0];p.matrixAutoUpdate=!0,p.name="duck",i.add(p),i.onUpdate((C,B)=>{p.position.set(g.x+Math.cos(B*.25)*9,.2+Math.sin(B*2.1)*.25,g.z+Math.sin(B*.25)*9),p.rotation.set(Math.sin(B*1.7)*.06,-B*.25-Math.PI/2,Math.sin(B*2.3)*.06)});const m=i.spot("beachball",-48,-12,9.5);t.add("gloss",new Ie(9,24,16),zi([16730938,16777215,2850281,16765471,16777215,3519850]),m.x,9,m.z,.4,.5);const y=i.spot("blocks",66,-22,11),v=[15022639,2850281,16765471,3519850,16747038];[[-4,0,-3,.2],[4,0,3,-.3],[.5,7,0,.5],[-6,0,6,.9]].forEach(([C,B,O,J],dt)=>{t.box("matte",7,7,7,y.x+C,B,y.z+O,v[dt%v.length],J),t.box("matte",5.4,5.4,7.2,y.x+C,B+.8,y.z+O,16774876,J)});const _=i.spot("gnome",-82,-30,6);t.cyl("matte",3.6,4.6,9,_.x,0,_.z,2843332,12),t.cyl("matte",3.8,3.8,1,_.x,4,_.z,2763306,12),t.sphere("matte",3.5,_.x,11.5,_.z,15910560),t.add("matte",new dn(3.2,6,10),16777215,_.x,8.6,_.z+2.2,0,Math.PI),t.cone("matte",3.9,10,_.x,13,_.z,14233642,12),t.sphere("matte",.9,_.x,11.3,_.z+3.5,15246730,1,1,1,8,6);for(const C of[-1,1])t.sphere("matte",1.9,_.x+C*2.2,.9,_.z+2.6,3811872,1,.6,1.5,8,6);const E=i.spot("wateringcan",96,12,11);t.cyl("gloss",7.5,7.5,14,E.x,0,E.z,2073498,18),t.cyl("gloss",7.9,7.9,.8,E.x,13.6,E.z,1608322,18),t.add("gloss",new ge(1.1,1.6,15,8),2073498,E.x+11,10.5,E.z,0,0,-.9),t.add("gloss",new ge(3,1.2,2.4,10),15253850,E.x+17.6,15.6,E.z,0,0,-.9),t.torus("gloss",6,.9,E.x-7.5,9,E.z,1608322,0,0,0,Math.PI,14,6);const w=i.spot("birdbath",-98,12,9);t.cyl("matte",5,6,1.5,w.x,0,w.z,12170926,12),t.cyl("matte",2,2.8,15,w.x,1.5,w.z,13223614,10),t.cyl("matte",9,5,3,w.x,16.5,w.z,13223614,16),t.cyl("gloss",8,8,.2,w.x,19.4,w.z,5813478,16);for(const[C,B,O]of[[-20,-38,1],[-14,-41,.6],[88,-34,.8],[-70,22,1.1],[44,14,.7],[118,56,1]]){const J=i.spot("mushroom",C,B,3.6*O);Zv(i,J.x,J.z,O)}const S=i.spot("flowerbed",0,86,25,!1);t.cyl("matte",24,25,.5,S.x,0,S.z,5913896,24);const A=[16777215,16740264,16765498,11893759,16734780,16773280,8373503];for(let C=0;C<16;C++){const B=e()*Ys,O=3+e()*18;Eo(i,S.x+Math.cos(B)*O,S.z+Math.sin(B)*O,.9+e()*.6,e.pick(A))}i.solids.push({x:S.x,z:S.z,r:25});const b=[[170,8,n+3],[168,1.2,-126],[140,1.2,-98],[70,1.2,-88],[10,1.2,-95],[-60,1.2,-86],[-125,1.2,-94],[-165,1.2,-84],[-172,1.2,-62]],M=new vc(b.map(C=>new N(C[0],C[1],C[2])));t.add("gloss",new wc(M,160,1.25,8,!1),4173386);for(let C=0;C<=120;C++){const B=M.getPoint(C/120);i.reserve("hose",B.x,B.z,1.4,!1)}t.add("gloss",new ge(.9,1.7,6,10),15253850,-172,1.3,-58,0,Math.PI/2),t.box("far",6,6,6,170,6,n+3,9279910),t.cyl("gloss",12,12,.12,-172,.02,-44,7127278,18),i.reserve("puddle",-172,-44,12,!1),i.scatterBeside(58,1.2,12,2.2,(C,B)=>Eo(i,C,B,.8+e()*.7,e.pick(A)),{name:"flower",solid:!0}),i.scatterBeside(26,.6,14,()=>1+e()*1.6,(C,B,O)=>Ea(i,C,B,O),{name:"rock"}),i.scatter(40,[-215,-130,215,150],2.4,(C,B)=>Eo(i,C,B,1+e()*.9,e.pick(A)),{name:"flower",solid:!0});const P=new dn(.34,1,3,1);P.translate(0,.5,0),P.scale(1,1,.35);const z=7e3,U=new Sa(P,new In({color:16777215}),z),F=new ee,H=new Mn,G=new Ze,Y=new N,W=new N,V=new Nt,Q=[5218100,7127114,8835162,4164140,10213478];let tt=0;const ut=(C,B)=>{if(tt>=z)return;const O=1.6+e()*3.2;G.set((e()-.5)*.5,e()*Ys,(e()-.5)*.5),H.setFromEuler(G),F.compose(W.set(C,0,B),H,Y.set(1+e(),O,1+e())),U.setMatrixAt(tt,F),U.setColorAt(tt,Qv(V,e.pick(Q),e)),tt++};i.scatterBeside(4300,.15,9,.35,ut,{avoidSolids:!1,name:"grass"}),i.scatter(2700,[-220,-135,220,155],.35,ut,{avoidSolids:!1,name:"grass",tries:6}),U.count=tt,U.instanceMatrix.needsUpdate=!0,U.instanceColor&&(U.instanceColor.needsUpdate=!0),U.name="grass",U.frustumCulled=!1,i.add(U);const L=new fe;L.setAttribute("position",new Zt(new Float32Array([0,0,-.9,1.9,0,-1.3,1.6,0,1.1,0,0,-.9,1.6,0,1.1,0,0,.8]),3)),L.computeVertexNormals(),[[g.x,g.z,12],[S.x,S.z,14],[y.x,y.z,6],[_.x,_.z,4],[w.x,w.z,5]].forEach(([C,B,O],J)=>{const dt=new xe({color:[16754470,16777215,9356799,16773494,16744619][J],side:Ne}),nt=new hn,gt=new Ct(L,dt),K=new Ct(L,dt);K.scale.x=-1,nt.add(gt,K),nt.name="butterfly",i.add(nt);const st=J*1.7;i.onUpdate((D,xt)=>{const Z=xt*(.5+J*.07)+st;nt.position.set(C+Math.cos(Z)*O*.8,9+J*1.5+Math.sin(xt*1.3+st)*2,B+Math.sin(Z*1.3)*O*.8),nt.rotation.y=-Z;const rt=Math.sin(xt*16+st)*.9;gt.rotation.z=rt,K.rotation.z=-rt})})}function Qv(i,t,e){i.set(t);const n=.85+e()*.3;return i.r*=n,i.g*=n,i.b*=n,i}const ui=Math.PI*2,t_={id:"kitchen",name:"Breakfast Blitz",description:"Under the kitchen table and over the book ramp. Toy-block walls, spilled cereal and towering chair legs.",difficulty:2,defaultLaps:3,seed:2202,halfWidth:7.5,cornerRadius:18,startFrac:.45,waypoints:[[-110,-70],[100,-70],[120,-10],[60,20],[70,75],[-20,80],[-40,20],[-110,40]],humps:[{at:.475,h:3.4,len:40},{at:.8,h:1.6,len:24}],road:{style:"mat",fallback:3817035,roughness:.95},kerb:[2850281,16249834],wall:{height:1.25,block:3,palette:[15022639,16763176,2850281,3519850,16747038],top:[15886431,16768107,6726642,7327894,16755548],skirt:9059131},chevronCurvature:1/26,chevron:{bg:"#ffffff",fg:"#e53a2f"},gantry:{beam:2850281,bannerBg:"#b3261e",bannerFg:"#fff8e1",accent:"#ffc928"},boostAt:[{t:.05},{t:.42},{t:.72,lat:2}],pickupAt:[.1,.24,.36,.56,.67,.92],obstaclesAt:[{t:.3,lat:-3.5,r:1.2,kind:"salt"},{t:.62,lat:3.5,r:1.2,kind:"sugar"},{t:.86,lat:-3,r:1.2,kind:"salt"}],decorate:e_};function Zr(i,t,e,n){const s=new Ae(i,t),r=s.attributes.uv;for(let a=0;a<r.count;a++)r.setXY(a,r.getX(a)*e,r.getY(a)*n);return s}function e_(i){const t=i.batch,e=i.rng;i.background=new Nt(15981760),i.fog=new ks(15981760,320,1300),i.lights({hemi:[16773596,11569766,1.05],sun:{color:16769197,intensity:2,dir:[.3,.9,.5]}});const n=i.tex(512,512,Xu("#f3e8d2","#d89f76","#b9a58c"));i.ground(n,15124900,900,50,{roughness:.55}),i.atlasTex=i.tex(1024,1024,Yu(),{clamp:!0}),i.bucket("atlas",new In({map:i.atlasTex,vertexColors:!0}));for(const L of i.obstacles)L.kind==="salt"?(t.cyl("gloss",L.radius*.8,L.radius,2.4,L.x,L.y,L.z,16185074,12),t.sphere("gloss",L.radius*.82,L.x,L.y+2.4,L.z,12173512,1,.7,1,12,8)):t.box("matte",L.radius*1.5,L.radius*1.5,L.radius*1.5,L.x,L.y,L.z,16777215,.6);const s=210,r=-170,a=175,o=230,l=i.tex(256,256,Cv("#f6e3b4","#f0d49a","#e2a05a"));i.bucket("wall",new In({map:l,color:l?16777215:16180148,vertexColors:!0}),!1,!1);const c=(r+a)/2,f=a-r;t.add("wall",Zr(s*2,o,14,6),16777215,0,o/2,r,0),t.add("wall",Zr(s*2,o,14,6),16777215,0,o/2,a,Math.PI),t.add("wall",Zr(f,o,12,6),16777215,-s,o/2,c,Math.PI/2),t.add("wall",Zr(f,o,12,6),16777215,s,o/2,c,-Math.PI/2),t.add("far",new Ae(s*2,f),16512489,0,o,c,0,Math.PI/2),i.ceilingHeight=o;for(const[L,T,C,B]of[[0,r+1,s*2,2],[0,a-1,s*2,2],[-s+1,c,2,f],[s-1,c,2,f]])t.box("far",C,10,B,L,0,T,16775920),i.reserveBox("roomwall",L,T,C,B,0,!1);const h=i.tex(256,256,ju("#ffe7b8","#fff7e0","#ffffff"),{clamp:!0}),u=new Ct(new Ae(150,110),new xe({map:h,color:h?16777215:16773836}));u.position.set(40,125,a-.6),u.rotation.y=Math.PI,u.name="window",i.add(u),t.box("far",166,6,10,40,64,a-5,16777215);for(const L of[-1,1])t.box("far",26,132,4,40+L*90,62,a-3,14239290);t.box("far",220,5,5,40,192,a-4,9067066),t.box("far",3,170,78,-s+2,0,90,11040319),t.box("far",1.5,60,50,-s+4,20,90,9725231),t.box("far",1.5,60,50,-s+4,95,90,9725231),t.sphere("gloss",4,-s+7,82,62,15253850);const d=44,g=66;for(let L=0;L<5;L++){const T=-s+32+L*62;if(t.box("matte",60,g,d,T,4,r+d/2,7316384),t.box("matte",60,4,d-6,T,0,r+d/2-3,3095101),L===2)t.box("gloss",48,40,1.5,T,14,r+d+.4,1382172),t.box("glow",40,10,.6,T,18,r+d+1.3,16747054),t.box("gloss",50,3,3,T,58,r+d+2,13620442);else for(const C of[-1,1])t.box("matte",26,54,1.5,T+C*14.5,10,r+d+.4,9224379),t.sphere("gloss",1.8,T+C*4,50,r+d+2.4,15853256)}t.box("matte",318,5,d+6,-s+157,g+4,r+d/2+3,3882822),i.reserveBox("cabinets",-s+157,r+d/2+3,318,d+8,0,!1);for(let L=0;L<4;L++){const T=-s+40+L*66;t.box("far",62,70,26,T,128,r+13,7316384),t.box("far",54,60,1.5,T,133,r+26.5,9224379)}t.cyl("gloss",9,10,20,-150,g+9,r+24,14239290,14),t.box("gloss",30,18,16,-80,g+9,r+22,13620442),t.cyl("matte",14,9,8,0,g+9,r+24,15919832,16);for(let L=0;L<5;L++)t.sphere("matte",5,-6+L*4,g+19+L%2*3,r+22+L%3*3,[16747038,15022639,16765471][L%3]);t.box("gloss",70,200,56,160,2,r+28,14673386),t.box("gloss",3,70,3,132,100,r+58,10134445),t.box("gloss",3,40,3,132,30,r+58,10134445),t.box("matte",71,1.5,57,160,84,r+28,11121339);for(let L=0;L<7;L++)t.box("matte",5,5,.8,140+e()*45,95+e()*60,r+56.4,e.pick([15022639,16763176,2850281,3519850,16736162]),0,0,e()*.6);i.reserveBox("fridge",160,r+28,70,56,0,!1);const x=i.tex(512,320,Pv(),{clamp:!0}),p=new Ct(new Ae(190,112),new In({map:x,color:x?16777215:3104124,polygonOffset:!0,polygonOffsetFactor:-.5,polygonOffsetUnits:-.5}));p.rotation.x=-Math.PI/2,p.position.set(2,.04,-22),p.receiveShadow=!0,p.name="rug",i.add(p);const m=52,y=12157258,v=[[-56,-48],[56,-48],[-56,2],[56,2]].map(([L,T])=>i.spot("table-leg",L,T,3.6));for(const L of v)t.box("matte",5.2,m,5.2,L.x,0,L.z,y),t.box("matte",6.2,1.2,6.2,L.x,0,L.z,7031338);t.box("matte",128,4,66,0,m,-23,13209690),t.box("matte",118,5,56,0,m-5,-23,10251068);const _=(L,T,C,B)=>{const O=Math.cos(C),J=Math.sin(C);for(const[dt,nt]of[[-9,-9],[9,-9],[-9,9],[9,9]]){const gt=L+dt*O+nt*J,K=T-dt*J+nt*O,st=i.spot("chair-leg",gt,K,2.2);t.box("matte",3,nt>0?62:30,3,st.x,0,st.z,B)}t.box("matte",23,3,23,L,30,T,B,C),t.box("matte",21,2,21,L,33,T,14239290,C),t.box("matte",23,16,2.4,L+9.5*J,46,T+9.5*O,B,C)};_(14,46,.3,11039808),_(-78,78,2.4,11039808),_(150,40,-1.3,11039808),t.cyl("far",.6,.6,o-150,0,150,-23,3355443,6),t.add("matte",new dn(26,20,20),14239290,0,140,-23),t.sphere("glow",6,0,131,-23,16773304);const E=new Sc(16763274,900,420,1.6);E.position.set(0,125,-23),i.add(E);const w=new Hi;for(let L=0;L<4;L++)w.box("f",64,1.2,11,Math.cos(L*ui/4)*36,0,-Math.sin(L*ui/4)*36,9067066,L*ui/4);w.cyl("f",7,7,5,0,-1,0,15262420,12);const S=w.build({f:i.mats.far})[0];S.matrixAutoUpdate=!0,S.position.set(110,o-16,80),S.name="fan",i.add(S),t.cyl("far",1.5,1.5,16,110,o-16,80,15262420,8),i.onUpdate(L=>{S.rotation.y+=L*1.4});const A=i.spot("petbowl",155,105,14);t.cyl("gloss",12,14,6,A.x,0,A.z,2850281,18),t.cyl("matte",10.5,10.5,.4,A.x,5.8,A.z,8014378,16);for(let L=0;L<14;L++)t.sphere("matte",1.5,A.x+e.range(-8,8),6.6,A.z+e.range(-8,8),10117684,1,.8,1,6,5);const b=i.spot("slippers",-160,-95,18);for(const L of[-1,1])t.sphere("matte",7,b.x+L*8,2.5,b.z,16744368,1,.45,2.1,10,6),t.sphere("matte",7.2,b.x+L*8,4.5,b.z+6,16735386,1,.6,1.2,10,6);const M=i.spot("milk",-150,20,15,!1);t.cyl("gloss",13,13,.12,M.x,.01,M.z,16645624,20),t.cyl("gloss",7,7,.12,M.x+11,.01,M.z+7,16645624,14),i.scatterBeside(18,1,10,8,(L,T)=>{const C=e()*ui;e()<.25?or(i,13,19,4.6,L,0,T,C,!0):or(i,13,19,4.6,L,0,T,C)},{name:"cereal-box",solid:!0}),i.scatterBeside(13,1,12,8.5,(L,T)=>lf(i,L,T,e.int(2,5)),{name:"books",solid:!0}),i.scatterBeside(9,1.5,10,6.5,(L,T)=>$v(i,L,T,1,e.pick([16777215,15022639,2850281,16763176,3519850])),{name:"mug",solid:!0}),i.scatterBeside(8,1,9,4.2,(L,T)=>{const C=e()<.5;t.sphere("matte",4,L,4*(C?1:.92),T,C?16747038:14233642,1,C?1:.92,1,14,10),t.cyl("matte",.25,.25,1.2,L,7.4,T,4862756,5)},{name:"fruit",solid:!0}),i.scatterBeside(22,.6,9,2.6,(L,T)=>{const C=e.pick([15022639,16763176,2850281,3519850,16777215]),B=e()*ui;t.box("gloss",4,2.4,2,L,0,T,C,B);for(const O of[-1,1])t.cyl("gloss",.6,.6,.5,L+Math.cos(B)*O,2.4,T-Math.sin(B)*O,C,8)},{name:"brick",solid:!0}),i.scatterBeside(8,1,8,7.5,(L,T)=>{const C=e()*ui,B=Math.sin(C),O=Math.cos(C);t.add("matte",new ge(.55,.55,13,6),16763176,L,.55,T,C,Math.PI/2),t.add("matte",new dn(.55,1.6,6),15321504,L+B*7.3,.55,T+O*7.3,C,Math.PI/2),t.add("matte",new ge(.58,.58,1.2,6),16744368,L-B*7.1,.55,T-O*7.1,C,Math.PI/2)},{name:"pencil",solid:!0}),i.scatterBeside(26,.4,8,1.3,(L,T)=>t.sphere("gloss",1.2,L,1.2,T,e.pick([2872553,15022735,8118330,16763176,10116351]),1,1,1,10,8),{name:"marble"});const P=new pr(.62,.26,6,12),z=520,U=new Sa(P,new In({color:16777215}),z),F=new ee,H=new Mn,G=new Ze,Y=new N(1,1,1),W=new N,V=new Nt,Q=[15905354,15238202,15755914,10212442,11832063,16241514];let tt=0;const ut=(L,T)=>{tt>=z||(G.set(Math.PI/2+(e()-.5)*.5,e()*ui,(e()-.5)*.5),H.setFromEuler(G),F.compose(W.set(L,.3,T),H,Y),U.setMatrixAt(tt,F),U.setColorAt(tt,V.set(e.pick(Q))),tt++)};i.scatterBeside(400,.2,7,.9,ut,{name:"cereal"}),i.scatter(120,[-190,-120,190,160],.9,ut,{name:"cereal",tries:8}),U.count=tt,U.instanceMatrix.needsUpdate=!0,U.castShadow=!0,U.frustumCulled=!1,U.name="cereal",i.add(U),i.scatter(16,[-195,-118,195,160],11,(L,T)=>{e()<.5?or(i,20,30,7,L,0,T,e()*ui):lf(i,L,T,e.int(3,7),1.4)},{name:"far-prop",solid:!0})}const fs=Math.PI*2,ke=[2617599,16728016,11992890,16753198,16773194,9071615],n_={id:"toyshop",name:"Midnight Megamart",description:"After closing time in the toy aisles. Tight right-angle turns between towering shelves, lit only by neon.",difficulty:3,defaultLaps:3,seed:3303,halfWidth:6.5,cornerRadius:12,startFrac:.45,waypoints:[[-100,-70],[100,-70],[100,-30],[10,-30],[10,10],[100,10],[100,70],[-50,70],[-50,20],[-100,20]],humps:[{at:.59,h:2.2,len:30},{at:.375,h:1.2,len:22}],road:{style:"neon",fallback:1316922,roughness:.32,metalness:.25,emissive:.85},kerb:[1777469,16769354],wall:{height:1.2,block:4,palette:[2304080,1711680],top:[2617599,16728016],skirt:1382451,glowTop:!0},chevronCurvature:1/20,chevron:{bg:"#12142c",fg:"#27f0ff"},gantry:{beam:16728016,post:2764629,bannerBg:"#0c0e24",bannerFg:"#27f0ff",accent:"#ff3fd0"},boostAt:[{t:.04},{t:.5},{t:.84}],pickupAt:[.09,.22,.33,.46,.63,.92],obstaclesAt:[{t:.25,lat:3,r:1,kind:"cone"},{t:.705,lat:-3,r:1,kind:"cone"},{t:.78,lat:2.5,r:1.1,kind:"wetfloor"}],decorate:i_};function di(i,t,e,n,s,r,a,o,l=0){const c=i.batch,f=i.rng,h=Math.cos(r),u=Math.sin(r),d=(y,v)=>[t+y*h+v*u,e-y*u+v*h],g=2896471,x=Math.floor((a-2)/12);for(let y=0;y<=x;y++)if(c.box("matte",n,.8,s,t,y*12+(y===0?.6:0),e,y===x?3817840:g,r),y>0)for(const v of[-1,1]){if(l&&v!==l)continue;const[_,E]=d(0,v*(s/2+.15));c.box("glow",n,.5,.3,_,y*12+.15,E,o,r)}c.box("matte",n,x*12,.6,t,.6,e,1909058,r);const p=Math.max(2,Math.round(n/22));for(let y=0;y<=p;y++)for(const v of[-1,1]){const[_,E]=d(-n/2+y/p*n,v*(s/2-.4));c.box("matte",.9,x*12+1.4,.9,_,0,E,4476032,r)}const m=s/2-1.3;for(let y=0;y<x;y++)for(const v of[-1,1]){if(l&&v!==l)continue;let _=-n/2+1.5;for(;_<n/2-6;){const E=4.5+f()*4.5,w=5+f()*5.5;if(f()<.9){const[S,A]=d(_+E/2,v*(m/2+.7));f()<.12?c.sphere("gloss",Math.min(E,9)/2,S,y*12+(y===0?1.4:.8)+Math.min(E,9)/2,A,f.pick(ke),1,1,1,10,8):or(i,E,w,m,S,y*12+(y===0?1.4:.8),A,r+(v>0?0:Math.PI))}_+=E+.5+f()*1.2}}i.reserveBox("shelf",t,e,n+1,s+1,r)}function i_(i){const t=i.batch,e=i.rng;i.background=new Nt(460824),i.fog=new ks(658468,140,560),i.lights({hemi:[8359167,2364984,.85],ambient:[4868736,.55],sun:{color:11847935,intensity:1.15,dir:[-.3,1,.45]}});const n=i.tex(512,512,Xu("#161c3c","#1b2248","#2a3470",["rgba(140,170,255,0.8)","rgba(255,120,230,0.6)","rgba(0,0,0,0.5)"]));i.ground(n,1580608,760,38,{roughness:.22,metalness:.35}),i.atlasTex=i.tex(1024,1024,Yu(),{clamp:!0});const s=new In({map:i.atlasTex,vertexColors:!0});i.atlasTex&&(s.emissiveMap=i.atlasTex,s.emissive=new Nt(16777215),s.emissiveIntensity=.42),i.bucket("atlas",s,!0,!0);for(const p of i.obstacles)if(p.kind==="cone")cf(i,p.x,p.y,p.z,p.radius*1.05);else{for(const m of[-1,1])t.box("matte",1.7,2.6,.12,p.x+Math.cos(p.heading)*0+m*.45*Math.sin(p.heading),p.y,p.z+m*.45*Math.cos(p.heading),16765471,p.heading,-m*.33);t.box("glow",.9,.9,.05,p.x,p.y+2.75,p.z,16769354,p.heading)}di(i,0,-50,160,14,0,62,ke[0]),di(i,58,-10,60,14,0,62,ke[1]),di(i,-47.5,-18,75,14,0,62,ke[2]),di(i,27.5,40,115,18,0,62,ke[3]);const r=162,a=120,o=100;di(i,0,-a+9,300,14,0,74,ke[5],1),di(i,0,a-9,300,14,0,62,ke[4],-1),di(i,-r+9,0,200,14,Math.PI/2,74,ke[1],1),di(i,r-9,0,200,14,Math.PI/2,74,ke[0],-1),t.add("far",new Ae(r*2,a*2),724256,0,o,0,0,Math.PI/2);for(const[p,m,y,v,_]of[[0,-a,r*2,2,0],[0,a,r*2,2,Math.PI],[-r,0,2,a*2,Math.PI/2],[r,0,2,a*2,-Math.PI/2]])t.add("far",new Ae(Math.max(y,v),o),1184814,p,o/2,m,_),i.reserveBox("shopwall",p,m,y,v,0,!1);i.ceilingHeight=o;for(let p=-3;p<=3;p++)t.box("glow",30,20,.6,p*42,70,a-1.4,10270975);for(let p=-2;p<=2;p++)for(let m=-1;m<=1;m++)t.box("glow",46,.5,2.2,p*62,o-.6,m*70,7309032),t.box("far",50,1.6,5,p*62,o-1.4,m*70,1843270);const l=[],c=(p,m,y,v,_,E,w=40,S=13)=>{const A=i.tex(512,160,Iv(p,m),{clamp:!0}),b=new xe({map:A,color:A?16777215:m,transparent:!!A}),M=new Ct(new Ae(w,S),b);M.position.set(y,v,_),M.rotation.y=E,M.name="neon-sign",i.add(M),t.box("far",w*.96,S*.9,.8,y-Math.sin(E)*.7,v-S*.45,_-Math.cos(E)*.7,790050,E),l.push(b)};c("TOYS","#27f0ff",-40,70,-57.2,Math.PI),c("GAMES","#ff3fd0",45,70,-42.8,0),c("ROBOTS","#b6ff3a",58,70,-17.2,Math.PI),c("PUZZLES","#ffa22e",27,70,49.2,0),c("SALE","#fff04a",-47,70,-10.8,0,30,13),c("OPEN 24H","#ff3fd0",0,84,-a+17,0,90,24),i.onUpdate((p,m)=>{const y=Math.sin(m*31)>.82||Math.sin(m*2.3)>.97?.35:1;l[1].color.setScalar(y),l[4].color.setScalar(.75+.25*Math.sin(m*3))});const f=[[-60,-60,16728016],[70,-22,2617599],[60,58,16753198],[-78,30,11992890]];for(const[p,m,y]of f){const v=new Sc(y,520,150,1.5);v.position.set(p,26,m),i.add(v)}const h=i.spot("teddy",-112,72,16);{const{x:p,z:m}=h,y=10119740,v=14267530;t.sphere("matte",12,p,12,m,y,1,1.1,.95,16,12),t.sphere("matte",8.5,p,30,m,y,1,.95,.95,16,12);for(const _ of[-1,1])t.sphere("matte",3.2,p+_*6.5,37,m,y),t.sphere("matte",1.8,p+_*6.5,37,m-1.6,v,1,1,.5),t.sphere("matte",4.4,p+_*12,17,m-3,y,1,1.5,1),t.sphere("matte",5,p+_*7.5,3.6,m-9,y,1,.75,1.5),t.sphere("matte",1,p+_*3.2,32,m-7.4,1118481,1,1,1,8,6);t.sphere("matte",4,p,28,m-6.5,v,1,.8,.9),t.sphere("matte",1.3,p,29,m-10,2759186,1,.8,1,8,6),t.sphere("matte",6.5,p,12,m-8.5,v,1,1.1,.5)}const u=i.spot("robot",132,44,13);{const{x:p,z:m}=u;for(const y of[-1,1])t.box("gloss",5,13,6,p+y*4.5,0,m,8950438),t.box("gloss",4,15,4,p+y*10.5,14,m,8950438),t.sphere("glow",1.6,p+y*3,38,m-4.6,16773194,1,1,.4,8,6);t.box("gloss",16,18,10,p,13,m,2865353),t.box("gloss",11,9,9,p,33,m,13160670),t.box("glow",8,1.2,.5,p,34.5,m-4.6,16728016),t.cyl("gloss",.4,.4,6,p,42,m,8950438,6),t.sphere("glow",1.3,p,48.6,m,16727898,1,1,1,8,6);for(let y=0;y<3;y++)t.box("glow",2.4,2.4,.5,p-4+y*4,22,m-5.1,ke[y])}const d=i.spot("rocket",132,-42,11);{const{x:p,z:m}=d;t.cyl("gloss",6,6,34,p,8,m,15921909,16),t.cone("gloss",6,14,p,42,m,15022639,16),t.cyl("gloss",4,6,4,p,4,m,4475484,16);for(let y=0;y<3;y++){const v=y/3*fs;t.box("gloss",1,14,8,p+Math.sin(v)*8.5,0,m+Math.cos(v)*8.5,15022639,v)}t.sphere("glow",2.6,p,30,m-5.4,2617599,1,1,.3,12,8),t.torus("gloss",2.9,.5,p,30,m-5.9,8950438,0,0,0,fs,14,6)}const g=i.spot("ringstack",-130,-38,11);t.cyl("matte",1.6,2.4,26,g.x,0,g.z,16769354,10),[15022639,16753198,16773194,3519850,2850281].forEach((p,m)=>t.torus("gloss",9-m*1.4,2.3-m*.12,g.x,2.4+m*4.4,g.z,p,Math.PI/2,0,0,fs,20,8));const x=i.spot("ballbin",-62,2,10);for(const[p,m]of[[-8,-8],[8,-8],[-8,8],[8,8]])t.box("matte",.8,14,.8,x.x+p,0,x.z+m,8950438);for(const p of[.4,7,13.6])t.box("matte",17,.6,.6,x.x,p,x.z-8,8950438),t.box("matte",17,.6,.6,x.x,p,x.z+8,8950438),t.box("matte",.6,.6,17,x.x-8,p,x.z,8950438),t.box("matte",.6,.6,17,x.x+8,p,x.z,8950438);for(let p=0;p<34;p++)t.add("gloss",new Ie(2.6,10,8),zi([e.pick(ke),16777215]),x.x+e.range(-5,5),2.8+e()*11,x.z+e.range(-5,5),e()*3,e()*3);[[-20,4],[120,95],[-128,98],[60,96]].forEach(([p,m],y)=>{const v=i.spot("balloons",p,m,5);t.box("matte",3,2,3,v.x,0,v.z,3817840);const _=new Hi;for(let w=0;w<5;w++){const S=e.range(-5,5),A=e.range(-5,5),b=26+e()*10;_.sphere("b",4,S,b,A,ke[(y+w)%ke.length],1,1.22,1,12,9);const M=Math.hypot(S,b-2,A),P=new ge(.07,.07,M,4);P.translate(0,M/2,0),P.applyQuaternion(new Mn().setFromUnitVectors(new N(0,1,0),new N(S,b-2,A).normalize())),_.add("b",P,14540253,0,2,0)}const E=_.build({b:i.mats.gloss})[0];E.matrixAutoUpdate=!0,E.position.set(v.x,0,v.z),E.name="balloons",i.add(E),i.onUpdate((w,S)=>{E.position.y=Math.sin(S*1.1+y*2)*.8,E.rotation.y=Math.sin(S*.5+y)*.25})}),i.scatter(46,[-150,-108,150,108],()=>4+e()*3,(p,m,y)=>{const v=e();if(v<.5)or(i,y*1.3,y*1.5,y*1.1,p,0,m,e()*fs);else if(v<.8){const _=y*.9,E=e.pick(ke);t.box("gloss",_,_,_,p,0,m,E,e()*fs),e()<.5&&t.box("gloss",_*.8,_*.8,_*.8,p,_,m,e.pick(ke),e()*fs)}else t.add("gloss",new Ie(y*.8,14,10),zi([e.pick(ke),16777215,e.pick(ke),16777215]),p,y*.8,m,e()*3,e()*3)},{name:"floor-toy",solid:!0}),i.scatterBeside(10,.8,4,1.4,(p,m)=>cf(i,p,0,m,1.3),{name:"cone",solid:!0})}const vn=Math.PI*2,mi=15124620,Ku=13609322,s_={id:"beach",name:"Sandcastle Sunset",description:"A rattling boardwalk through the sandcastles at golden hour. Blind crests, a chicane and no room for error.",difficulty:4,defaultLaps:3,seed:4404,halfWidth:6.5,cornerRadius:14,startFrac:.45,waypoints:[[-110,-60,0],[40,-60,0],[70,-30,1],[110,-30,2.5],[125,30,6],[60,60,4],[30,20,1.5],[-20,20,4.5],[-40,70,1.5],[-110,70,3],[-130,0,.5]],humps:[{at:.27,h:1.8,len:24},{at:.67,h:2.2,len:26},{at:.865,h:1.6,len:22}],road:{style:"planks",fallback:12159573,roughness:.82},kerb:[2789309,16512746],wall:{height:1.3,block:2.6,crenellate:!0,palette:[15255946,14465143,15783324],top:[16179888,15520410,16509632],skirt:Ku},chevronCurvature:1/22,chevron:{bg:"#fbf6ea",fg:"#e5532f"},gantry:{beam:2789309,post:9071176,bannerBg:"#e5532f",bannerFg:"#fff6d8",accent:"#ffd21f"},boostAt:[{t:.03},{t:.38},{t:.75}],pickupAt:[.08,.2,.34,.51,.6,.93],obstaclesAt:[{t:.145,lat:-2.5,r:1,kind:"shell"},{t:.565,lat:2.5,r:1,kind:"pebble"},{t:.8,lat:-2.5,r:1,kind:"shell"}],decorate:r_};function Ao(i,t,e,n,s,r){const a=new dn(s,s*2.4,9,3),o=a.attributes.position;for(let l=0;l<o.count;l++){const c=o.getY(l),f=Math.atan2(o.getZ(l),o.getX(l)),h=1+.12*Math.sin(c*6/s+f);o.setX(l,o.getX(l)*h),o.setZ(l,o.getZ(l)*h)}a.computeVertexNormals(),i.batch.add("matte",a,r,t,e+s*.8,n,i.rng()*vn,Math.PI/2-.25)}function Co(i,t,e,n){const s=i.batch,r=i.rng,a=(l,c,f,h,u,d,g=mi)=>s.cyl("matte",l*n,c*n,f*n,h,u*n,d,Xe(g,r,.05),14);s.cyl("matte",30*n,35*n,4*n,t,0,e,Ku,22);const o=18;for(let l=0;l<4;l++){const c=l/4*vn,f=Math.cos(c),h=Math.sin(c);s.box("matte",o*2*n,10*n,4*n,t+h*o*n,4*n,e+f*o*n,Xe(mi,r,.05),c);for(let g=-3;g<=3;g++)s.box("matte",2.6*n,2.4*n,4*n,t+h*o*n+f*g*5*n,14*n,e+f*o*n-h*g*5*n,mi,c);const u=t+(f+h)*o*n,d=e+(f-h)*o*n;a(5.4,6.4,18,u,4,d),a(6.3,6.3,1.2,u,22,d,15783324);for(let g=0;g<8;g++){const x=g/8*vn;s.box("matte",2*n,2.2*n,2*n,u+Math.cos(x)*5.2*n,23.2*n,d+Math.sin(x)*5.2*n,mi,-x)}s.box("matte",1.6*n,3.4*n,.6*n,u+h*5.7*n+f*0,14*n,d+f*5.7*n,7032627,c)}s.box("matte",7*n,8*n,4.6*n,t,4*n,e+o*n,5914664),s.cyl("matte",3.5*n,3.5*n,4.6*n,t,12*n-2.3*n,e+o*n,5914664,12,0,Math.PI/2),a(9.5,11.5,22,t,4,e),a(10.6,10.6,1.4,t,26,e,15783324),a(6,7,10,t,27.4,e);for(let l=0;l<10;l++){const c=l/10*vn;s.box("matte",2.4*n,2.6*n,2.4*n,t+Math.cos(c)*9.4*n,27.4*n,e+Math.sin(c)*9.4*n,mi,-c)}return s.cone("matte",7*n,9*n,t,37.4*n,e,15783324,14),s.cyl("matte",.3*n,.3*n,12*n,t,46*n,e,7032627,6),{x:t,y:56*n,z:e,s:n}}function r_(i){const t=i.batch,e=i.rng,n=i.line;i.background=new Nt(16758918),i.fog=new ks(16759178,240,1050);const s=[.22,.4,.89];i.lights({hemi:[16764840,14264440,1],sun:{color:16756848,intensity:2.5,dir:s}}),i.skyDome([[0,16766614],[.07,16754021],[.25,14708614],[.55,7622814],[1,2894954]]),i.ground(i.tex(512,512,Av()),15520410,1700,60);const r=i.sunDir,a=new N(n.cx,0,n.cz).addScaledVector(r,560),o=new Ct(new hr(52,40),new xe({color:16773816,fog:!1,depthWrite:!1}));o.position.copy(a),o.lookAt(n.cx,0,n.cz),o.renderOrder=-8,o.name="sun-disc",i.add(o);const l=i.tex(128,128,kv(),{clamp:!0}),c=new Ct(new hr(190,32),new xe({map:l,color:16761466,transparent:!0,opacity:l?.9:.15,fog:!1,depthWrite:!1,blending:_n}));c.position.copy(a).addScaledVector(r,-4),c.lookAt(n.cx,0,n.cz),c.renderOrder=-9,c.name="sun-halo",i.add(c);for(const L of i.obstacles)L.kind==="shell"?Ao(i,L.x,L.y,L.z,L.radius*.95,16763312):Ea(i,L.x,L.z,L.radius*1.25,9407108,L.y);const f=168,h=i.tex(256,256,Dv(),{repeat:[26,12]}),u=new Te({map:h,color:h?16777215:3836066,roughness:.18,metalness:.45,emissive:8010274,emissiveIntensity:.35}),d=new Ct(new Ae(1800,700),u);d.rotation.x=-Math.PI/2,d.position.set(n.cx,.35,f+350),d.name="sea",i.add(d);for(let L=-320;L<=320;L+=16)i.reserve("sea",n.cx+L,f+12,12,!1);const g=new Ct(new Ae(1800,46),new Te({color:12096092,roughness:.35,metalness:.1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));g.rotation.x=-Math.PI/2,g.position.set(n.cx,.04,f-20),g.receiveShadow=!0,g.name="wet-sand",i.add(g);const x=new Ct(new Ae(1800,7),new xe({color:16774890,transparent:!0,opacity:.85}));x.rotation.x=-Math.PI/2,x.position.set(n.cx,.42,f),x.name="foam",i.add(x),i.onUpdate((L,T)=>{h&&h.offset.set(Math.sin(T*.2)*.05,T*.05);const C=Math.sin(T*.7);x.position.z=f-4+C*5,d.position.z=f+346+C*5,x.material.opacity=.55+.3*(.5+.5*Math.cos(T*.7))});const p=[],m=i.spot("castle",-72,2,31);p.push(Co(i,m.x,m.z,.86));const y=i.spot("castle",38,-14,17);p.push(Co(i,y.x,y.z,.46));const v=i.spot("castle",178,-46,24);p.push(Co(i,v.x,v.z,.66));const _=new fe;_.setAttribute("position",new Zt(new Float32Array([0,0,0,9,-2.2,0,0,-4.4,0]),3)),_.computeVertexNormals(),p.forEach((L,T)=>{const C=new Ct(_,new xe({color:[15029039,2789309,16765471][T],side:Ne}));C.position.set(L.x,L.y+1.6*L.s,L.z),C.scale.setScalar(L.s),C.name="flag",i.add(C),i.onUpdate((B,O)=>{C.rotation.y=.6+Math.sin(O*3+T)*.35+Math.sin(O*7.3+T*2)*.1})});const E=i.spot("bucket",-8,-24,13);t.add("gloss",new ge(11,8,17,20,1,!0),15029039,E.x,8.5,E.z),t.cyl("gloss",8,8,.6,E.x,0,E.z,13189919,20),t.cyl("matte",10.4,10.4,.4,E.x,15.4,E.z,mi,20),t.torus("gloss",11.3,.7,E.x,16.8,E.z,16777215,Math.PI/2,0,0,vn,24,6),t.torus("gloss",11.5,.5,E.x,17,E.z,16512746,0,.5,0,Math.PI,18,6);const w=i.spot("sandpie",E.x+24,E.z+8,10);t.cyl("matte",6.4,8.8,13,w.x,0,w.z,mi,18),t.cyl("matte",6.6,6.6,.8,w.x,13,w.z,15783324,18);const S=i.spot("spade",96,16,12);t.add("gloss",new ge(.9,.9,22,8),16765471,S.x,1.2,S.z,.7,Math.PI/2),t.box("gloss",9,1,11,S.x+Math.sin(.7)*15,.4,S.z+Math.cos(.7)*15,2789309,.7),t.torus("gloss",2.6,.8,S.x-Math.sin(.7)*12.5,1.2,S.z-Math.cos(.7)*12.5,16765471,Math.PI/2,0,0,vn,12,6);const A=i.spot("beachball",160,66,12);t.add("gloss",new Ie(11,28,18),zi([15029039,16777215,2789309,16765471,16777215,3519850]),A.x,11,A.z,.3,.6,.2);const b=i.spot("parasol",-176,-92,4);t.cyl("matte",1.3,1.5,92,b.x,0,b.z,16052194,8),t.add("matte",new dn(66,17,16,1,!0),zi([15029039,16512746],16),b.x,92,b.z),t.add("matte",new dn(65.5,16.6,16,1,!0).scale(1,1,-1),zi([13189919,15130576],16),b.x,91.6,b.z),t.sphere("matte",2,b.x,101,b.z,16765471);const M=new Ct(new Ae(84,44,12,1),new In({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));{const L=M.geometry.attributes.position,T=new Float32Array(L.count*3),C=new Nt;for(let J=0;J<L.count;J++)C.set(Math.floor((L.getX(J)+42)/7.01)%2?2789309:16512746),T.set([C.r,C.g,C.b],J*3);M.geometry=M.geometry.toNonIndexed();const B=M.geometry.attributes.position,O=new Float32Array(B.count*3);for(let J=0;J<B.count;J+=3){const dt=(B.getX(J)+B.getX(J+1)+B.getX(J+2))/3;C.set(Math.floor((dt+42)/7)%2?2789309:16512746);for(let nt=0;nt<3;nt++)O.set([C.r,C.g,C.b],(J+nt)*3)}M.geometry.setAttribute("color",new Zt(O,3))}M.rotation.x=-Math.PI/2,M.rotation.z=.25,M.position.set(-196,.06,-112),M.receiveShadow=!0,M.name="towel",i.add(M),i.reserveBox("towel",-196,-112,84,44,.25,!0);for(const L of[-1,1]){const T=i.spot("flipflop",-150+L*7,-128,6,!1);t.sphere("matte",5,T.x,.6,T.z,16765471,1,.14,2.3,12,6),t.torus("matte",3,.4,T.x,1.6,T.z+5,15029039,0,Math.PI/2,0,Math.PI,10,5)}for(const[L,T,C]of[[186,-112,.9],[214,40,-.5],[-214,96,2.2]]){const B=i.spot("palm",L,T,6);let O=B.x,J=0,dt=B.z,nt=.05;for(let gt=0;gt<9;gt++)t.add("matte",new ge(3.6-gt*.16,4-gt*.16,13,9),gt%2?9071176:8019006,O+Math.sin(C)*Math.sin(nt)*13/2,J+Math.cos(nt)*13/2,dt+Math.cos(C)*Math.sin(nt)*13/2,C,nt),O+=Math.sin(C)*Math.sin(nt)*13,dt+=Math.cos(C)*Math.sin(nt)*13,J+=Math.cos(nt)*13,nt+=.045;for(let gt=0;gt<9;gt++){const K=gt/9*vn+e()*.3,st=new Ie(1,8,5);st.scale(26,1.2,6.5),st.translate(24,0,0),t.add("matte",st,Xe(4168266,e,.12),O,J,dt,K,0,-.45-e()*.25)}for(let gt=0;gt<3;gt++)t.sphere("matte",3,O+Math.cos(gt*2.1)*3.5,J-3,dt+Math.sin(gt*2.1)*3.5,5913892)}const P=[2789309,15029039,16765471,16512746,3519850,16744368,2789309,15029039];for(let L=0;L<8;L++){const T=-224+L*64,C=-178;t.box("far",46,52,40,T,6,C,P[L]);for(let B=-2;B<=2;B++)t.box("far",4.6,52,.6,T+B*9.2,6,C+20.3,16512746);t.add("far",new ge(.1,36,22,4,1),16512746,T,69,C,Math.PI/4),t.box("far",14,30,.8,T,6,C+20.7,7032627);for(const[B,O]of[[-20,-17],[20,-17],[-20,17],[20,17]])t.box("far",3,6,3,T+B,0,C+O,7032627);i.reserveBox("hut",T,C,46,40,0,!1)}for(let L=0;L<9;L++){const T=-480+L*120+e.range(-20,20);t.sphere("far",130+e()*40,T,-8,-330+e.range(-20,20),Xe(14728576,e,.06),1.2,.34+e()*.1,1,14,8)}for(const L of[-1,1])for(let T=0;T<5;T++)t.sphere("far",110+e()*40,L*(400+e()*30),-8,-250+T*95,Xe(14728576,e,.06),1,.3+e()*.12,1.25,14,8);for(let L=0;L<90;L++){const T=e()<.5;T?e.sign()*(300+e()*60):e.range(-420,420);const C=T?e.range(-250,120):-250-e()*40,B=T?e.sign()*(285+e()*50):e.range(-420,420),O=T?C:-222-e()*30;for(let J=0;J<4;J++)t.add("far",new dn(1.6,18+e()*12,4),Xe(9414746,e,.15),B+e.range(-4,4),8,O+e.range(-4,4),e()*vn,(e()-.5)*.5)}const z=-330,U=300;t.sphere("far",60,z,0,U,7170674,1.2,.45,1,10,7),t.add("far",new ge(11,17,150,16),$u([16512746,15029039,16512746,15029039,16512746],-75,75),z,98,U),t.cyl("far",15,15,3,z,173,U,3817293,16),t.cyl("glowNoFog",8,8,14,z,176,U,16773816,12),t.cone("far",12,12,z,190,U,15029039,16);const F=new ge(3,36,420,12,1,!0);F.translate(0,-210,0),F.rotateZ(Math.PI/2-.06);const H=new Ct(F,new xe({color:16773824,transparent:!0,opacity:.16,depthWrite:!1,fog:!1,side:Ne,blending:_n}));H.position.set(z,183,U),H.name="lighthouse-beam",i.add(H),i.onUpdate(L=>{H.rotation.y+=L*.5}),t.box("far",46,7,13,210,0,420,16512746,.3),t.cyl("far",.7,.7,60,210,6,420,7032627,6);{const L=new fe;L.setAttribute("position",new Zt(new Float32Array([0,0,0,26,0,0,0,52,0,0,0,0,0,52,0,26,0,0]),3)),t.add("far",L,16773848,211,12,420,.3)}const G=new Hi;for(let L=0;L<6;L++){const T=L/6*vn+e(),C=70+e()*50,B=e()*40;for(const O of[-1,1]){const J=new fe;J.setAttribute("position",new Zt(new Float32Array([0,0,0,O*7,2.4,-1,O*6,2,2.4,0,0,0,O*6,2,2.4,O*7,2.4,-1]),3)),G.add("g",J,16512746,Math.cos(T)*C,B,Math.sin(T)*C,-T)}}const Y=G.build({g:new xe({vertexColors:!0,fog:!1})})[0];Y.matrixAutoUpdate=!0,Y.position.set(60,110,330),Y.name="gulls",i.add(Y),i.onUpdate((L,T)=>{Y.rotation.y+=L*.16,Y.position.y=110+Math.sin(T*.4)*8});const W=i.spot("crab",84,112,16),V=new Hi;V.sphere("k",3.4,0,2.6,0,15029039,1.3,.6,1);for(const L of[-1,1]){V.sphere("k",.55,L*1.2,5.2,2.2,1118481,1,1,1,6,5),V.cyl("k",.2,.2,2,L*1.2,3.4,2.2,15029039,5),V.sphere("k",1.6,L*5.6,3,2.6,15755327,1.2,.8,.8,8,6);for(let T=0;T<3;T++)V.add("k",new ge(.3,.2,4.2,5),13189919,L*(4+T*.4),1.6,-1.6+T*1.5,0,0,L*-.9)}const Q=V.build({k:i.mats.matte},{k:{cast:!0}})[0];Q.matrixAutoUpdate=!0,Q.name="crab",i.add(Q),i.onUpdate((L,T)=>{Q.position.set(W.x+Math.sin(T*.6)*11,Math.abs(Math.sin(T*9))*.3,W.z),Q.rotation.y=Math.PI+Math.sin(T*.3)*.15});const tt=[16767428,16510685,16234912,15257840,16774112];i.scatterBeside(30,.8,11,()=>1.6+e()*1.8,(L,T,C)=>Ao(i,L,0,T,C,e.pick(tt)),{name:"shell",solid:!0});const ut=new Mc;for(let L=0;L<10;L++){const T=L/10*vn,C=L%2?1.5:4;L===0?ut.moveTo(Math.cos(T)*C,Math.sin(T)*C):ut.lineTo(Math.cos(T)*C,Math.sin(T)*C)}ut.closePath(),i.scatterBeside(12,1,10,4.2,(L,T)=>{const C=new Na(ut,{depth:.8,bevelEnabled:!0,bevelSize:.4,bevelThickness:.4,bevelSegments:1,curveSegments:1});t.add("matte",C,e.pick([16747068,15755327,16752560]),L,.5,T,e()*vn,-Math.PI/2)},{name:"starfish",solid:!0}),i.scatterBeside(80,.3,10,()=>.5+e()*1.3,(L,T,C)=>Ea(i,L,T,C,e.pick([10130572,12101776,8354422,13680808])),{name:"pebble"}),i.scatterBeside(7,1.5,12,11,(L,T)=>{const C=e()*vn;t.add("matte",new ge(1.5,1.9,21,8),Xe(10123864,e,.1),L,1.6,T,C,Math.PI/2),t.add("matte",new ge(.6,.9,6,6),9071176,L,3.4,T,C+1,1)},{name:"driftwood",solid:!0}),i.scatter(34,[-250,-150,250,140],()=>5+e()*6,(L,T,C)=>{e()<.6?t.sphere("matte",C,L,-C*.55,T,Xe(mi,e,.05),1,.8,1,12,8):Ao(i,L,0,T,C*.5,e.pick(tt))},{name:"mound",solid:!0})}const Wl=[Kv,t_,n_,s_],_i=Wl.map(i=>{const t=Zu(i);return{id:i.id,name:i.name,description:i.description,difficulty:i.difficulty,defaultLaps:i.defaultLaps,lengthLabel:`${Math.round(t.L)} m`}});function a_(i){const t=Wl.find(e=>e.id===i)||Wl[0];return jv(t)}const Wi=[{id:"pipsqueak",name:"Pip Squeak",type:"kart",class:"Rookie",tagline:"Tiny go-kart, giant grin. Turns on a coin.",color:"#ffd23f",accent:"#e63946",stats:{speed:2,accel:8,grip:9,weight:2},topSpeed:29,acceleration:26,gripFactor:1.15,mass:.7,turnRate:3.1,radius:.9},{id:"hopscotch",name:"Hopscotch",type:"buggy",class:"Rookie",tagline:"Bouncy dune buggy that shrugs off bumps.",color:"#ff7b1c",accent:"#1d3557",stats:{speed:4,accel:6,grip:7,weight:4},topSpeed:31,acceleration:22,gripFactor:1,mass:.9,turnRate:2.9,radius:1},{id:"biscuitbus",name:"Biscuit Bus",type:"van",class:"Rookie",tagline:"Slow to wake up, impossible to shove aside.",color:"#3db2a5",accent:"#fff3d6",stats:{speed:3,accel:4,grip:6,weight:8},topSpeed:30,acceleration:18,gripFactor:.95,mass:1.5,turnRate:2.6,radius:1.05},{id:"mudmuffin",name:"Mud Muffin",type:"rally",class:"Amateur",tagline:"Rally hatch that sticks like jam to toast.",color:"#2f6fed",accent:"#ffffff",stats:{speed:6,accel:6,grip:8,weight:5},topSpeed:34,acceleration:23,gripFactor:1.1,mass:1,turnRate:2.9,radius:1},{id:"gruffstomper",name:"Gruff Stomper",type:"monster",class:"Amateur",tagline:"Big wheels, bigger attitude. Bullies the pack.",color:"#7a3ff2",accent:"#b6ff3b",stats:{speed:5,accel:5,grip:5,weight:10},topSpeed:33,acceleration:20,gripFactor:.9,mass:1.8,turnRate:2.5,radius:1.15},{id:"brassknuckle",name:"Brass Knuckle",type:"muscle",class:"Amateur",tagline:"All motor, no manners. Loves going sideways.",color:"#c1121f",accent:"#f4c95d",stats:{speed:8,accel:6,grip:4,weight:7},topSpeed:37,acceleration:21,gripFactor:.82,mass:1.3,turnRate:2.6,radius:1.05},{id:"needlenine",name:"Needle Nine",type:"formula",class:"Pro",tagline:"Open-wheel missile. Fastest thing on the carpet.",color:"#f5f5f0",accent:"#ff3d7f",stats:{speed:10,accel:7,grip:9,weight:3},topSpeed:41,acceleration:24,gripFactor:1.2,mass:.8,turnRate:2.8,radius:1},{id:"ionwisp",name:"Ion Wisp",type:"future",class:"Pro",tagline:"Prototype from next Tuesday. Launches like a spark.",color:"#1b1f3b",accent:"#22e6ff",stats:{speed:9,accel:10,grip:7,weight:3},topSpeed:39,acceleration:28,gripFactor:1,mass:.85,turnRate:3,radius:1}],o_=Object.fromEntries(Wi.map(i=>[i.id,i]));function Ju(i){return o_[i]||Wi[0]}const Ft="#1c1f25",l_="#15161a",ne="#d5dae2",fn="#6c727d",Aa=new ee,Ca=new Mn,c_=new Ze,va=new N,Qu=new N,$r=new Nt,Kr=new N,Jr=new N,h_=new N(0,1,0);class Xl{constructor(){this.buckets={}}add(t,e,n="paint",s=!1){let r=t.index?t.toNonIndexed():t;return s&&r.computeVertexNormals(),(this.buckets[n]||(this.buckets[n]=[])).push({g:r,color:e}),this}box(t,e,n,s,r,a,o,l,c=0,f=0,h=0){const u=new pn(t,e,n);return hf(u,s,r,a,c,f,h),this.add(u,o,l)}cyl(t,e,n,s,r,a,o,l,c=10,f=t){const h=new ge(f,t,e,c);return a==="x"?h.rotateZ(-Math.PI/2):a==="z"&&h.rotateX(Math.PI/2),h.translate(n,s,r),this.add(h,o,l)}tube(t,e,n,s,r,a,o,l,c,f=6){Kr.set(t,e,n),Jr.set(s,r,a);const h=Kr.distanceTo(Jr),u=new ge(o,o,h,f);return va.copy(Jr).sub(Kr).normalize(),Ca.setFromUnitVectors(h_,va),Aa.compose(Qu.copy(Kr).add(Jr).multiplyScalar(.5),Ca,va.set(1,1,1)),u.applyMatrix4(Aa),this.add(u,l,c)}sphere(t,e,n,s,r,a,o=1,l=1,c=1,f=10){const h=new Ie(t,f,Math.max(6,f-3));return h.scale(o,l,c),h.translate(e,n,s),this.add(h,r,a)}profile(t,e,n,s,{bevel:r=.03,x:a=0,taper:o=null}={}){const l=new Mc;l.moveTo(t[0][0],t[0][1]);for(let h=1;h<t.length;h++)l.lineTo(t[h][0],t[h][1]);l.closePath();const c=Math.max(.001,e-2*r),f=new Na(l,{depth:c,steps:1,bevelEnabled:r>0,bevelThickness:r,bevelSize:r,bevelOffset:-r,bevelSegments:1,curveSegments:4});if(f.translate(0,0,-c/2),f.rotateY(-Math.PI/2),o){const h=f.attributes.position;for(let u=0;u<h.count;u++)h.setX(u,h.getX(u)*o(h.getZ(u),h.getY(u)))}return a&&f.translate(a,0,0),this.add(f,n,s,!!o)}torus(t,e,n,s,r,a,o,l=0,c=0,f=12){const h=new pr(t,e,6,f);return hf(h,n,s,r,l,c,0),this.add(h,a,o)}fender(t,e,n,s,r,a,o){const l=new ge(t,t,e,10,1,!1,0,Math.PI);return l.rotateZ(Math.PI/2),l.translate(n,s,r),this.add(l,a,o)}mirror(t){return t(1),t(-1),this}build(t){const e=this.buckets[t];if(!e||!e.length)return null;let n=0;for(const c of e)n+=c.g.attributes.position.count;const s=new Float32Array(n*3),r=new Float32Array(n*3),a=new Float32Array(n*3);let o=0;for(const c of e){const f=c.g.attributes.position.count;s.set(c.g.attributes.position.array,o*3),r.set(c.g.attributes.normal.array,o*3),$r.set(c.color);for(let h=0;h<f;h++)a[(o+h)*3]=$r.r,a[(o+h)*3+1]=$r.g,a[(o+h)*3+2]=$r.b;o+=f,c.g.dispose()}const l=new fe;return l.setAttribute("position",new Zt(s,3)),l.setAttribute("normal",new Zt(r,3)),l.setAttribute("color",new Zt(a,3)),l.computeBoundingSphere(),l.computeBoundingBox(),l}}function hf(i,t,e,n,s,r,a){s||r||a?(Ca.setFromEuler(c_.set(s,r,a,"YXZ")),Aa.compose(va.set(t,e,n),Ca,Qu.set(1,1,1)),i.applyMatrix4(Aa)):i.translate(t,e,n)}let Qr=null;function Tc(){return Qr||(Qr={paint:new Te({vertexColors:!0,roughness:.42,metalness:.12}),wheel:new Te({vertexColors:!0,roughness:.78,metalness:.05}),glass:new Te({color:1583162,roughness:.12,metalness:.35}),head:new Te({color:16774872,emissive:16773312,emissiveIntensity:1.1,roughness:.3}),tail:new Te({color:16722474,emissive:16718362,emissiveIntensity:1,roughness:.3}),glow:{}},Qr)}function f_(i){const t=Tc();return t.glow[i]||(t.glow[i]=new Te({color:i,emissive:i,emissiveIntensity:1.4,roughness:.4})),t.glow[i]}const Ro=new Map;function u_(i,t,e,n,s){const r=`${i}|${t}|${e}|${n}|${s}`;if(Ro.has(r))return Ro.get(r);const a=new Xl,o=t/2,l=i*.6,c=Math.min(.05,t*.22),f=[new ft(l,-o),new ft(i-c,-o),new ft(i,-o+c),new ft(i,o-c),new ft(i-c,o),new ft(l,o)],h=new _c(f,14);if(h.rotateZ(-Math.PI/2),a.add(h,l_,"w"),s)for(let d=0;d<8;d++){const g=d/8*Math.PI*2,x=new pn(t*.92,i*.1,i*.2);x.translate(0,i*.95,0),x.rotateX(g),a.add(x,"#24262c","w")}a.cyl(l*1.02,t*.8,0,0,0,"x",e,"w",12);for(let d=0;d<5;d++){const g=new pn(t*.9,l*.95,l*.22);g.translate(0,l*.45,0),g.rotateX(d/5*Math.PI*2),a.add(g,n,"w")}a.cyl(l*.3,t*1,0,0,0,"x",n,"w",8);const u=a.build("w");return Ro.set(r,u),u}function d_(i,t){const e=Tc(),n=[],s=[],r=[],a=[{s:t.front,side:1,front:!0},{s:t.front,side:-1,front:!0},{s:t.rear,side:1,front:!1},{s:t.rear,side:-1,front:!1}];for(const o of a){const l=u_(o.s.r,o.s.w,t.rim||ne,t.hub||fn,!!t.knobbly),c=new Ct(l,e.wheel);if(c.castShadow=!0,c.name=(o.front?"wheel-f":"wheel-r")+(o.side>0?"l":"r"),c.userData.radius=o.s.r,o.front){const f=new hn;f.position.set(o.side*o.s.x,o.s.r,o.s.z),f.add(c),i.add(f),s.push(f)}else c.position.set(o.side*o.s.x,o.s.r,o.s.z),i.add(c);n.push(c),r.push(o.s.r)}i.userData.wheels=n,i.userData.steerPivots=s,i.userData.wheelRadii=r}function p_(i,t,e){return i.box(.6,.05,1.5,0,.15,.02,Ft),i.profile([[.42,.13],[.96,.13],[1,.2],[.72,.36],[.42,.3]],.42,t,"paint",{taper:n=>n>.7?1-(n-.7)*1.1:1}),i.box(.2,.012,.2,0,.345,.6,"#ffffff","paint",.22),i.mirror(n=>{i.profile([[-.38,.13],[.36,.13],[.42,.2],[.3,.29],[-.38,.29]],.17,t,"paint",{x:n*.36}),i.box(.175,.012,.5,n*.36,.296,-.05,e)}),i.profile([[-.44,.17],[-.04,.17],[-.02,.25],[-.28,.27],[-.36,.6],[-.47,.6]],.38,e),i.cyl(.12,.26,0,.4,-.2,"y","#2b4c9b","paint",8,.1),i.sphere(.15,0,.66,-.2,"#ffffff"),i.box(.31,.03,.31,0,.7,-.2,e),i.box(.2,.075,.06,0,.665,-.075,Ft,"glass"),i.mirror(n=>i.tube(n*.13,.47,-.16,n*.09,.45,.2,.03,"#2b4c9b")),i.tube(0,.2,.55,0,.45,.24,.02,fn),i.torus(.1,.02,0,.455,.235,Ft,"paint",-.85),i.box(.3,.2,.24,.1,.28,-.66,fn),i.cyl(.07,.2,-.12,.3,-.66,"y",ne,"paint",8),i.cyl(.035,.34,.26,.24,-.8,"z",ne,"paint",6),i.cyl(.035,.84,0,.15,1.02,"x",ne,"paint",6),i.cyl(.035,.9,0,.22,-.92,"x",ne,"paint",6),i.cyl(.025,.86,0,.16,.62,"x",fn,"paint",6),i.cyl(.03,.9,0,.2,-.6,"x",fn,"paint",6),i.mirror(n=>{i.box(.07,.05,.03,n*.12,.25,.99,"#fff","head"),i.box(.08,.05,.03,n*.2,.22,-.94,"#f00","tail")}),{wheels:{front:{r:.16,w:.14,x:.44,z:.62},rear:{r:.2,w:.2,x:.46,z:-.6},rim:e,hub:"#ffffff"},antenna:[-.2,.36,-.72]}}function m_(i,t,e){const n=s=>s>.5?1-(s-.5)*.7:1;return i.profile([[-.85,.3],[.7,.3],[1.02,.37],[1.02,.43],[.45,.57],[-.1,.61],[-.85,.61]],.64,t,"paint",{taper:n}),i.box(.3,.012,.4,0,.535,.68,e,"paint",.245),i.box(.46,.02,.56,0,.615,-.3,Ft),i.mirror(s=>{i.box(.17,.26,.07,s*.12,.74,-.52,e),i.tube(s*.28,.58,.22,s*.25,.93,-.02,.03,Ft),i.tube(s*.25,.93,-.02,s*.25,.93,-.58,.03,Ft),i.tube(s*.25,.93,-.58,s*.28,.6,-.86,.03,Ft),i.tube(s*.2,.36,.68,s*.44,.26,.68,.025,fn),i.tube(s*.25,.36,-.62,s*.44,.29,-.62,.03,fn),i.tube(s*.3,.62,-.66,s*.4,.34,-.62,.035,ne),i.tube(s*.2,.52,.6,s*.38,.3,.68,.03,ne),i.cyl(.055,.05,s*.13,1,0,"z","#fff","head",8),i.box(.1,.06,.03,s*.24,.5,-.86,"#f00","tail"),i.box(.025,.14,.3,s*.42,.97,-.84,Ft)}),i.tube(-.25,.93,-.02,.25,.93,-.02,.03,Ft),i.tube(-.25,.93,-.58,.25,.93,-.58,.03,Ft),i.box(.52,.03,.5,0,.955,-.3,e),i.box(.84,.03,.26,0,1,-.84,e,"paint",-.12),i.box(.34,.2,.22,0,.5,-.92,fn),i.cyl(.05,.14,0,.5,-1.05,"z",ne,"paint",8),i.cyl(.035,.6,0,.36,1.07,"x",ne,"paint",6),i.mirror(s=>i.tube(s*.2,.36,1.07,s*.16,.36,.9,.03,ne)),{wheels:{front:{r:.25,w:.2,x:.47,z:.68},rear:{r:.29,w:.26,x:.47,z:-.62},rim:"#f2f2f2",hub:e,knobbly:!0},antenna:[.22,.6,-.8]}}function g_(i,t,e){return i.profile([[-.98,.2],[.95,.2],[1.01,.28],[1.01,.56],[-.98,.56]],1,t,"paint",{bevel:.04}),i.profile([[-.98,.55],[1.01,.55],[.84,1],[.72,1.07],[-.94,1.07],[-.98,1]],.98,e,"paint",{bevel:.05}),i.box(1.012,.05,1.94,0,.56,.01,Ft),i.profile([[1,.56],[1,.3],[1.02,.3],[1.02,.56]],.3,e,"paint",{bevel:0}),i.box(.82,.36,.02,0,.79,.935,Ft,"glass",-.37),i.box(.7,.26,.02,0,.82,-.975,Ft,"glass",.04),i.mirror(n=>{i.box(.02,.27,.42,n*.487,.8,.45,Ft,"glass"),i.box(.02,.27,.5,n*.487,.8,-.08,Ft,"glass"),i.box(.02,.27,.42,n*.487,.8,-.6,Ft,"glass"),i.cyl(.08,.04,n*.34,.42,1.01,"z","#fff","head",10),i.cyl(.1,.02,n*.34,.42,1,"z",ne,"paint",10),i.box(.1,.16,.03,n*.4,.42,-.985,"#f00","tail"),i.tube(n*.36,1.13,.4,n*.36,1.13,-.8,.02,ne),i.tube(n*.36,1.07,.4,n*.36,1.13,.4,.02,ne),i.tube(n*.36,1.07,-.8,n*.36,1.13,-.8,.02,ne),i.box(.1,.07,.04,n*.55,.66,.72,t)}),i.box(.36,.1,.03,0,.42,1.012,Ft),i.box(1.06,.1,.1,0,.25,1,ne),i.box(1.06,.1,.1,0,.25,-.97,ne),i.box(.44,.16,.4,-.04,1.22,-.45,"#c98a4b"),i.box(.46,.03,.06,-.04,1.24,-.45,Ft),i.cyl(.07,.56,0,1.2,.05,"x",t,"paint",8),{wheels:{front:{r:.2,w:.16,x:.46,z:.62},rear:{r:.2,w:.16,x:.46,z:-.62},rim:e,hub:ne},antenna:[.4,1.06,.55]}}function td(i,t,e){const n=s=>s>.6?1-(s-.6)*.22:1;return i.profile([[-.95,.2],[.92,.2],[1.01,.3],[.99,.46],[.4,.57],[-.9,.59],[-.98,.5]],1.02,t,"paint",{taper:n,bevel:.04}),i.profile([[.39,.56],[.1,.87],[-.62,.87],[-.89,.58]],.86,Ft,"glass",{bevel:.02}),i.profile([[.15,.85],[.1,.9],[-.63,.9],[-.69,.85]],.89,t,"paint",{bevel:.02}),i.box(.885,.32,.07,0,.72,-.22,t),i.profile([[.1,.9],[-.2,.9],[-.2,.97],[.04,.97]],.26,e,"paint",{bevel:.015}),i.box(.2,.04,.02,0,.94,.085,Ft),i.box(.94,.03,.2,0,.96,-.76,e,"paint",-.14),i.mirror(s=>{i.box(.03,.12,.22,s*.46,.93,-.76,t),i.tube(s*.3,.84,-.7,s*.3,.95,-.76,.02,Ft),i.box(.02,.07,1.5,s*.512,.37,-.05,e),i.cyl(.13,.02,s*.512,.46,-.05,"x","#ffffff","paint",12),i.box(.2,.2,.02,s*.44,.2,.36,e),i.box(.2,.2,.02,s*.44,.2,-.88,e),i.cyl(.07,.05,s*.1,.62,.74,"z","#fff","head",8),i.cyl(.07,.05,s*.28,.61,.72,"z","#fff","head",8),i.box(.16,.08,.03,s*.36,.4,.985,"#fff","head"),i.box(.2,.07,.03,s*.34,.48,-.965,"#f00","tail"),i.box(.1,.06,.04,s*.54,.62,.38,t)}),i.box(.8,.12,.08,0,.6,.67,Ft),i.box(.7,.02,.5,0,.535,.62,e,"paint",.185),i.box(1,.1,.08,0,.25,1,Ft),i.box(1,.1,.08,0,.25,-.96,Ft),i.cyl(.04,.16,-.3,.2,-1,"z",ne,"paint",6),{wheels:{front:{r:.23,w:.19,x:.46,z:.64},rear:{r:.23,w:.19,x:.46,z:-.6},rim:"#ffffff",hub:e},antenna:[-.3,.9,-.5]}}function x_(i,t,e){return i.box(.46,.12,1.5,0,.52,0,Ft),i.cyl(.07,.9,0,.42,.68,"x",fn,"paint",8),i.cyl(.07,.9,0,.42,-.68,"x",fn,"paint",8),i.sphere(.13,0,.42,.68,fn),i.sphere(.13,0,.42,-.68,fn),i.mirror(n=>{for(const s of[.68,-.68]){const r=s>0?.22:-.22;i.tube(n*.2,.52,r,n*.3,.42,s,.03,ne),i.tube(n*.22,.72,s*.82,n*.32,.44,s,.045,e)}i.cyl(.045,.5,n*.44,1.18,-.42,"y",ne,"paint",8),i.box(.02,.09,1.5,n*.502,.83,-.1,e),i.box(.16,.1,.03,n*.36,.84,1.03,"#fff","head"),i.box(.12,.12,.03,n*.4,.84,-1.01,"#f00","tail"),i.tube(n*.36,.98,-.5,n*.34,1.36,-.5,.035,ne),i.cyl(.06,.05,n*.16,1.43,-.48,"z","#fff","head",8),i.tube(n*.24,.7,1.1,n*.24,.94,1.1,.03,ne),i.tube(n*.24,.7,1.1,n*.24,.7,.98,.03,ne)}),i.tube(-.34,1.36,-.5,.34,1.36,-.5,.035,ne),i.tube(-.3,.94,1.1,.3,.94,1.1,.03,ne),i.tube(-.3,.8,1.1,.3,.8,1.1,.03,ne),i.profile([[-1,.66],[.95,.66],[1.02,.74],[1.02,.93],[.3,.99],[-1,.99]],1,t,"paint",{bevel:.04}),i.profile([[.3,.98],[.1,1.29],[-.3,1.29],[-.36,.98]],.86,Ft,"glass",{bevel:.02}),i.profile([[.15,1.27],[.1,1.32],[-.3,1.32],[-.34,1.27]],.9,t,"paint",{bevel:.02}),i.box(.88,.31,.06,0,1.13,-.33,t),i.box(.8,.02,.56,0,.995,-.69,Ft),i.box(.5,.1,.03,0,.84,1.03,Ft),i.box(1.04,.1,.08,0,.7,-1,ne),i.box(.5,.02,.5,0,.972,.64,e,"paint",.083),{wheels:{front:{r:.42,w:.36,x:.52,z:.68},rear:{r:.42,w:.36,x:.52,z:-.68},rim:e,hub:ne,knobbly:!0},antenna:[-.4,.99,-.9]}}function v_(i,t,e){const n=s=>s>.75?1-(s-.75)*.25:s<-.8?1+(s+.8)*.3:1;i.profile([[-1,.24],[1,.24],[1.03,.3],[1.02,.5],[.25,.56],[-.55,.58],[-1,.6],[-1.03,.5]],1.06,t,"paint",{taper:n,bevel:.04}),i.profile([[.22,.56],[-.04,.81],[-.45,.81],[-.9,.59]],.84,Ft,"glass",{bevel:.02}),i.profile([[0,.79],[-.05,.84],[-.46,.84],[-.53,.79]],.87,t,"paint",{bevel:.02}),i.box(.865,.26,.06,0,.69,-.3,t);for(let s=0;s<3;s++)i.box(.7,.02,.07,0,.765-s*.055,-.56-s*.11,Ft,"paint",.3);return i.mirror(s=>{i.box(.13,.012,.76,s*.11,.538,.63,e,"paint",.078),i.box(.13,.012,.44,s*.11,.846,-.26,e),i.box(.13,.012,.14,s*.11,.606,-.95,e),i.cyl(.04,.8,s*.55,.23,-.08,"z",ne,"paint",8),i.cyl(.055,.04,s*.42,.42,1.01,"z","#fff","head",8),i.cyl(.055,.04,s*.29,.42,1.015,"z","#fff","head",8),i.box(.3,.07,.03,s*.3,.5,-1,"#f00","tail"),i.box(.1,.05,.04,s*.55,.6,.2,t)}),i.box(.26,.14,.32,0,.61,.52,ne),i.box(.3,.07,.36,0,.71,.53,Ft),i.box(.26,.05,.03,0,.71,.715,e),i.box(.5,.1,.03,0,.42,1,Ft),i.box(1.04,.07,.08,0,.29,1,ne),i.box(1.02,.07,.08,0,.3,-1,ne),i.profile([[-1.03,.58],[-.84,.6],[-1.05,.69]],1,t,"paint",{bevel:.015}),{wheels:{front:{r:.22,w:.18,x:.47,z:.66},rear:{r:.26,w:.26,x:.45,z:-.6},rim:ne,hub:Ft},antenna:[.38,.59,-.86]}}function __(i,t,e){const n=s=>s>.25?Math.max(.3,1-(s-.25)*.82):1;return i.box(.86,.03,1.3,0,.09,-.15,Ft),i.profile([[-.9,.11],[1.06,.11],[1.16,.15],[1.16,.2],[.3,.36],[.05,.4],[-.2,.4],[-.9,.3]],.4,t,"paint",{taper:n}),i.mirror(s=>{i.profile([[-.78,.11],[.3,.11],[.36,.3],[-.3,.33],[-.78,.22]],.25,t,"paint",{x:s*.31}),i.box(.19,.13,.03,s*.31,.22,.345,Ft,"paint",-.3),i.box(.255,.04,.6,s*.31,.2,-.2,e),i.box(.025,.14,.3,s*.56,.14,1.06,e),i.box(.03,.36,.34,s*.4,.5,-.94,e),i.tube(s*.1,.27,.8,s*.42,.25,.72,.016,Ft,"paint",5),i.tube(s*.14,.24,.5,s*.42,.2,.72,.016,Ft,"paint",5),i.tube(s*.1,.18,.82,s*.42,.18,.72,.016,Ft,"paint",5),i.tube(s*.18,.28,-.62,s*.4,.26,-.66,.02,Ft,"paint",5),i.tube(s*.18,.2,-.86,s*.4,.22,-.66,.02,Ft,"paint",5),i.box(.06,.03,.02,s*.07,.19,1.165,"#fff","head")}),i.profile([[-.14,.4],[-.28,.6],[-.4,.6],[-.96,.3],[-.2,.3]],.2,e,"paint",{taper:s=>s<-.4?Math.max(.35,1+(s+.4)*1.2):1}),i.box(.14,.09,.02,0,.53,-.2,Ft,"paint",-.6),i.box(.24,.02,.3,0,.405,-.02,Ft),i.sphere(.1,0,.47,-.04,e),i.box(.15,.05,.05,0,.475,.04,Ft,"glass"),i.box(1.1,.025,.24,0,.09,1.08,e),i.box(1.08,.02,.12,0,.16,1,t,"paint",-.25),i.box(.8,.03,.24,0,.66,-.95,t,"paint",-.18),i.box(.8,.025,.16,0,.36,-.98,Ft),i.tube(0,.3,-.86,0,.64,-.94,.03,Ft,"paint",5),i.box(.1,.06,.03,0,.26,-1,"#f00","tail"),{wheels:{front:{r:.22,w:.2,x:.5,z:.72},rear:{r:.25,w:.3,x:.47,z:-.66},rim:Ft,hub:e},antenna:[0,.58,-.36]}}function y_(i,t,e){const n=s=>s>.3?Math.max(.45,1-(s-.3)*.62):s<-.6?1+(s+.6)*.4:1;return i.profile([[-1,.2],[.6,.16],[1.09,.22],[1.09,.27],[.4,.44],[-.5,.53],[-1,.47]],.68,t,"paint",{taper:n,bevel:.04}),i.sphere(.3,0,.47,-.08,Ft,"glass",.86,.72,1.75,12),i.mirror(s=>{i.fender(.31,.27,s*.455,.22,.64,t),i.fender(.31,.27,s*.455,.22,-.64,t),i.profile([[-.5,.16],[.5,.16],[.5,.36],[-.5,.4]],.24,t,"paint",{x:s*.455,bevel:.03}),i.box(.02,.035,1,s*.58,.28,0,e,"glow"),i.box(.2,.02,.05,s*.455,.535,.64,e,"glow"),i.box(.2,.02,.05,s*.455,.535,-.64,e,"glow"),i.profile([[-.55,.5],[-1,.86],[-1.07,.86],[-1,.44]],.04,t,"paint",{x:s*.27,bevel:.01}),i.box(.045,.03,.08,s*.27,.87,-1.03,"#f00","tail"),i.box(.13,.025,.02,s*.14,.25,1.085,"#fff","head"),i.box(.12,.07,.03,s*.2,.4,.42,Ft,"paint",-.4)}),i.box(.05,.02,.9,0,.5,-.2,e,"glow",-.085),i.cyl(.15,.14,0,.34,-1,"z",Ft,"paint",12),i.torus(.13,.03,0,.34,-1.07,e,"glow"),i.cyl(.09,.02,0,.34,-1.075,"z",e,"glow",10),{wheels:{front:{r:.23,w:.2,x:.455,z:.64},rear:{r:.23,w:.2,x:.455,z:-.64},rim:Ft,hub:e},antenna:[-.2,.5,-.7],glow:e}}const b_={kart:p_,buggy:m_,van:g_,rally:td,monster:x_,muscle:v_,formula:__,future:y_};function ed(i,t){const e=Ju(i),n=Tc(),s=t||e.color,r=e.accent,a=new Xl,o=(b_[e.type]||td)(a,s,r),l=new hn;l.name="car-"+e.id;const c=new hn;c.name="body",l.add(c);const f=(d,g)=>{const x=a.build(d);if(!x)return;const p=new Ct(x,g);p.castShadow=!0,p.name=d,c.add(p)};f("paint",n.paint),f("glass",n.glass),f("head",n.head),f("tail",n.tail),o.glow&&f("glow",f_(o.glow));const h=new Xl;h.cyl(.012,.56,0,.28,0,"y",Ft,"paint",5),h.cyl(.03,.04,0,.02,0,"y",fn,"paint",6),h.sphere(.05,0,.58,0,r==="#ffffff"||r==="#fff3d6"?"#ff5a36":r,"paint",1,1,1,8);const u=new Ct(h.build("paint"),n.paint);return u.castShadow=!0,u.name="antenna",u.position.set(o.antenna[0],o.antenna[1],o.antenna[2]),u.rotation.x=-.12,c.add(u),d_(l,o.wheels),l.userData.carId=e.id,l.userData.body=c,l.userData.antenna=u,l.userData.color=s,l.userData.dispose=()=>{c.traverse(d=>{d.isMesh&&d.geometry.dispose()})},l}const ta=30,ff=1.35,M_=1.8,uf=1.2,df=1/30,w_=.3,S_=.4,T_=.8,xs=Math.PI*2,Ee=(i,t,e)=>i<t?t:i>e?e:i;function Ec(i){return i=(i+Math.PI)%xs,i<0&&(i+=xs),i-Math.PI}function ql(i,t,e=i.topSpeed){const n=Math.abs(t),s=n<4.5?n/4.5:1;let r=(n/e-.3)/.7;r=r<0?0:r>1?1:r;const a=1-.4*r*r*(3-2*r);return i.turnRate*s*a}function nd(i){return 60*i.gripFactor}function Yl(i){return 36+8*i.gripFactor}class E_{constructor(t,e={}){this.def=Ju(t),this.name=e.name||this.def.name,this.isPlayer=!!e.isPlayer,this.color=e.color||this.def.color,this.mesh=ed(this.def.id,e.color),this.pos=new N,this.vel=new N,this.heading=0,this.speed=0,this.radius=this.def.radius||1,this.onGround=!0,this.trackT=0,this.lateral=0,this.halfWidth=8,this.controls={throttle:0,steer:0,handbrake:!1},this.boostTime=0,this.spinTime=0,this.frozen=!1,this.puppet=!1,this.wallHit=0,this.drifting=!1,this.carHit=0,this.landed=0,this.boostPadHit=!1,this.slip=0,this.yawRate=0,this.steerAngle=0,this.airTime=0,this.sideSpeed=0,this._vy=0,this._pitch=0,this._bodyRoll=0,this._bodyPitch=0,this._squash=0,this._squashVel=0,this._antX=0,this._antXv=0,this._antZ=0,this._antZv=0,this._wheelSpin=0,this._rearSpin=0,this._spinVis=0,this._spinDir=1,this._padIndex=-1,this._hasTrack=!1,this._groundY=0;const n=this.mesh.userData;this._body=n.body,this._wheels=n.wheels,this._pivots=n.steerPivots,this._antenna=n.antenna,this._radii=n.wheelRadii,this._antBaseX=this._antenna?this._antenna.rotation.x:0,this._rollGain=this.def.type==="monster"?1.7:this.def.type==="formula"||this.def.type==="kart"?.55:1,this._syncMesh()}get topSpeedNow(){return this.def.topSpeed*(this.boostTime>0?ff:1)}placeAt(t,e,n){if(this.pos.copy(t),this.heading=e,this.vel.set(0,0,0),this.speed=0,this.sideSpeed=0,this.slip=0,this.yawRate=0,this.steerAngle=0,this._vy=0,this.onGround=!0,this.airTime=0,this.boostTime=0,this.spinTime=0,this._spinVis=0,this.wallHit=0,this.drifting=!1,this.carHit=0,this.landed=0,this._pitch=0,this._bodyRoll=0,this._bodyPitch=0,this._squash=0,this._squashVel=0,this._padIndex=-1,n){const s=n.project(this.pos);this.trackT=s.t,this.lateral=s.lateral,this.halfWidth=s.halfWidth,this.pos.y=s.y,this._hasTrack=!0}this._groundY=this.pos.y,this._syncMesh()}applyImpulse(t){this.vel.x+=t.x,this.vel.z+=t.z,t.y>.01&&this.launch(t.y)}launch(t){this.onGround=!1,this._vy=Math.max(this._vy,0)+t,this.airTime=0}update(t,e){if(this.wallHit=0,this.landed=0,this.boostPadHit=!1,this.frozen||!(t>0)){this.drifting=!1,this.carHit=0,this._syncMesh();return}if(t>df&&(t=df),this.puppet){this._updatePuppet(t,e);return}this.carHit=0;const n=this.def,s=this.controls,r=this.spinTime>0;if(r)this._spinVis===0&&(this._spinDir=this.yawRate<0?-1:1),this.spinTime=Math.max(0,this.spinTime-t),this._spinVis+=this._spinDir*11*t;else if(this._spinVis!==0){const M=Math.round(this._spinVis/xs+this._spinDir*.35)*xs,P=11*t;Math.abs(M-this._spinVis)<=P?this._spinVis=0:this._spinVis+=Math.sign(M-this._spinVis)*P}const a=this.boostTime>0;a&&(this.boostTime=Math.max(0,this.boostTime-t));let o=r?0:Ee(+s.throttle||0,-1,1);const l=r?0:Ee(+s.steer||0,-1,1),c=!r&&!!s.handbrake;a&&o>-.1&&(o=1);const f=Math.sin(this.heading),h=Math.cos(this.heading);let u=this.vel.x*f+this.vel.z*h,d=this.vel.x*h-this.vel.z*f;const g=u,x=n.topSpeed*(a?ff:1),p=n.acceleration*(a?M_:1),m=this.onGround||this.airTime<.07,y=Math.abs(l)>Math.abs(this.steerAngle)||l*this.steerAngle<0?9:12;this.steerAngle+=Ee(l-this.steerAngle,-y*t,y*t);let v=this.steerAngle*ql(n,u,n.topSpeed)*(u>=0?1:-1);if(c&&m&&(v*=1.3),!m)v*=.3;else if(this.drifting&&v*this.sideSpeed<0){const M=Math.hypot(u,d),P=M>1?Math.abs(d)/M:0,z=c?.62:.42;P>z&&(v*=Ee(1-(P-z)/.25,.1,1))}this.yawRate+=(v-this.yawRate)*Math.min(1,14*t);const _=this.yawRate*t;if(this.heading+=_,_!==0){const M=Math.cos(_),P=Math.sin(_),z=u*M+d*P;d=d*M-u*P,u=z}if(m){if(o>0)if(u<-.5)u+=Yl(n)*o*t;else{const Q=u/x;let tt=Q<.55?1:(1-Q)/.45;tt<-1.2&&(tt=-1.2),u+=p*(tt>0?o*tt:tt)*t}else if(o<0)if(u>.8)u=Math.max(0,u+Yl(n)*o*t);else{const Q=n.topSpeed*.42,tt=Ee(1+u/Q,0,1);u+=p*.75*o*tt*t}const M=1-Math.abs(o);let P=(1.5+.22*Math.abs(u))*M;if(u>x&&(P+=(u-x)*1.6),c&&(P+=9),r&&(P+=7),P>0){const Q=P*t;u=Math.abs(u)<=Q?0:u-Math.sign(u)*Q}const z=Math.hypot(u,d);let U=15*n.gripFactor,F=nd(n);c?(U*=.16,F*=.32):r?(U*=.12,F*=.25):this.drifting&&(U*=.6,F*=.85);let H=U*Math.abs(d);H>F&&(H=F);const G=H*t,Y=u*u+d*d;d=Math.abs(d)<=G?0:d-Math.sign(d)*G;const W=c?.3:r?0:.7;if(W>0&&Math.abs(u)>1){const Q=u*u+d*d,tt=Q+(Y-Q)*W;u=Math.sign(u)*Math.sqrt(Math.max(0,tt-d*d))}const V=z>1?Math.abs(d)/z:0;this.drifting?this.drifting=z>5&&(V>.16||c&&z>7):this.drifting=z>7&&(V>.3||c&&Math.abs(u)>7||r)}else{const M=1-.15*t;u*=M,d*=M,this.drifting=!1}const E=Math.sin(this.heading),w=Math.cos(this.heading);this.vel.x=E*u+w*d,this.vel.z=w*u-E*d,this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;let S=this._groundY;if(e){const M=e.project(this.pos,this._hasTrack?this.trackT:void 0);this._hasTrack=!0,this.trackT=M.t,this.lateral=M.lateral,this.halfWidth=M.halfWidth,S=this._groundY=M.y;const P=Math.max(.2,M.halfWidth-this.radius);if(this.lateral>P||this.lateral<-P){const F=this.lateral>0?1:-1,H=e.sample(this.trackT),G=H.right.x*F,Y=H.right.z*F,W=Math.abs(this.lateral)-P;this.pos.x-=G*W,this.pos.z-=Y*W,this.lateral=F*P;const V=this.vel.x*G+this.vel.z*Y;if(V>0){const Q=1-.1*Math.min(1,V/8);let tt=this.vel.x-G*V,ut=this.vel.z-Y*V;tt*=Q,ut*=Q;const L=V*w_+Math.min(V,1);if(this.vel.x=tt-G*L,this.vel.z=ut-Y*L,V>1.2&&(this.wallHit=V),E*G+w*Y>.05&&u>2&&Math.hypot(tt,ut)>1){const B=Math.atan2(tt,ut),O=Ec(B-this.heading);Math.abs(O)<1.6&&(this.heading+=O*Math.min(1,(3+V*.6)*t))}}}const z=e.obstacles;if(z)for(let F=0;F<z.length;F++){const H=z[F],G=this.pos.x-H.x,Y=this.pos.z-H.z,W=H.radius+this.radius*.8,V=G*G+Y*Y;if(V<W*W&&this.pos.y-S<1.2){let Q=Math.sqrt(V),tt,ut;Q<1e-4?(tt=-E,ut=-w,Q=0):(tt=G/Q,ut=Y/Q),this.pos.x+=tt*(W-Q),this.pos.z+=ut*(W-Q);const L=this.vel.x*tt+this.vel.z*ut;if(L<0){const B=-L*(1+S_)+.8;this.vel.x+=tt*B,this.vel.z+=ut*B,this.vel.x*=.94,this.vel.z*=.94,-L>1.2&&-L>this.wallHit&&(this.wallHit=-L)}const T=Math.sin(this.heading),C=Math.cos(this.heading);if(T*tt+C*ut<-.2){const B=T*ut-C*tt>=0?1:-1;this.vel.x+=ut*B*1.6,this.vel.z+=-tt*B*1.6}}}const U=e.boostPads;if(U){let F=-1;if(this.pos.y-S<.6)for(let H=0;H<U.length;H++){const G=U[H],Y=this.pos.x-G.x,W=this.pos.z-G.z,V=G.radius+.4;if(Y*Y+W*W<V*V){F=H;break}}F>=0&&F!==this._padIndex&&(this.boostTime<uf&&(this.boostTime=uf),this.boostPadHit=!0),this._padIndex=F}}if(this.onGround){const M=(S-this.pos.y)/t;this.pos.y+this._vy*t-.5*ta*t*t>S+.5*ta*t*t&&this._vy>M?(this.onGround=!1,this.airTime=0,this._vy*=T_,this.pos.y=Math.max(S,this.pos.y+this._vy*t),this._vy-=ta*t):(this.pos.y=S,this._vy=Ee(M,-25,25),this.airTime=0)}else if(this.airTime+=t,this._vy-=ta*t,this.pos.y+=this._vy*t,this.pos.y<=S){this.pos.y=S,this.onGround=!0;const M=-this._vy;M>3&&this.airTime>.08&&(this.landed=M,this._squashVel-=Math.min(M,18)*.11),this._vy>0&&(this._vy=0)}this.vel.y=this.onGround?0:this._vy;const A=Math.sin(this.heading),b=Math.cos(this.heading);this.speed=this.vel.x*A+this.vel.z*b,this.sideSpeed=this.vel.x*b-this.vel.z*A,this.slip=this.sideSpeed,this._animate(t,(u-g)/t,c),this._syncMesh()}_updatePuppet(t,e){if(this.carHit=0,this.spinTime>0)this._spinVis===0&&(this._spinDir=this.yawRate<0?-1:1),this.spinTime=Math.max(0,this.spinTime-t),this._spinVis+=this._spinDir*11*t;else if(this._spinVis!==0){const f=Math.round(this._spinVis/xs+this._spinDir*.35)*xs,h=11*t;Math.abs(f-this._spinVis)<=h?this._spinVis=0:this._spinVis+=Math.sign(f-this._spinVis)*h}this.boostTime>0&&(this.boostTime=Math.max(0,this.boostTime-t));const n=this.controls,s=this.spinTime>0?0:Ee(+n.steer||0,-1,1);if(this.steerAngle+=Ee(s-this.steerAngle,-12*t,12*t),e){const f=e.project(this.pos,this._hasTrack?this.trackT:void 0);this._hasTrack=!0,this.trackT=f.t,this.lateral=f.lateral,this.halfWidth=f.halfWidth,this._groundY=f.y,(this.onGround||this.pos.y<f.y)&&(this.pos.y=f.y)}const r=this.pos.y,a=this._pupY===void 0?0:Ee((r-this._pupY)/t,-25,25);this._pupY=r,this.onGround?(this._vy+=(a-this._vy)*Math.min(1,12*t),this.airTime=0):(this._vy=Number.isFinite(this.vel.y)?this.vel.y:a,this.airTime+=t);const o=Math.sin(this.heading),l=Math.cos(this.heading),c=this.speed;this.speed=this.vel.x*o+this.vel.z*l,this.sideSpeed=this.vel.x*l-this.vel.z*o,this.slip=this.sideSpeed,this._animate(t,Ee((this.speed-c)/t,-80,80),!!n.handbrake),this._syncMesh()}puppetSnap(){this._hasTrack=!1,this._pupY=void 0}_animate(t,e,n){const s=this.speed;let r=this._pitch;this.onGround?Math.abs(s)>2&&(r=Math.atan2(this._vy,Math.abs(s))*(s>0?1:-1)):r=Ee(Math.atan2(this._vy,Math.max(6,Math.abs(s)))*.55,-.45,.45),r=Ee(r,-.5,.5),this._pitch+=(r-this._pitch)*Math.min(1,(this.onGround?10:5)*t);const a=this.onGround?this.yawRate*s-this.slip*2:0,o=Ee(a*.0035*this._rollGain,-.2,.2),l=Ee(-e*.0025*this._rollGain,-.1,.12),c=Math.min(1,9*t);this._bodyRoll+=(o-this._bodyRoll)*c,this._bodyPitch+=(l-this._bodyPitch)*c,this._squashVel+=(-260*this._squash-16*this._squashVel)*t,this._squash=Ee(this._squash+this._squashVel*t,-.14,.07);const f=Ee(e,-60,60);this._antXv+=(-140*this._antX-7*this._antXv-f*.9)*t,this._antX=Ee(this._antX+this._antXv*t,-.7,.7),this._antZv+=(-140*this._antZ-7*this._antZv+Ee(a,-70,70)*.6)*t,this._antZ=Ee(this._antZ+this._antZv*t,-.7,.7),this._wheelSpin+=s*t,n&&this.onGround||(this._rearSpin+=s*t)}_syncMesh(){const t=this.mesh;t.position.copy(this.pos),t.rotation.set(-this._pitch,this.heading+this._spinVis,0,"YXZ");const e=this._body;e&&(e.rotation.set(this._bodyPitch,0,this._bodyRoll),e.position.y=this._squash);const n=this._wheels;if(n){const s=this._radii;n[0].rotation.x=this._wheelSpin/s[0],n[1].rotation.x=this._wheelSpin/s[1],n[2].rotation.x=this._rearSpin/s[2],n[3].rotation.x=this._rearSpin/s[3];const r=this.steerAngle*.5;this._pivots[0].rotation.y=r,this._pivots[1].rotation.y=r}this._antenna&&(this._antenna.rotation.x=this._antBaseX+this._antX,this._antenna.rotation.z=this._antZ)}}const Cn=(i,t,e)=>i<t?t:i>e?e:i,pf=new WeakMap;function A_(i){let t=pf.get(i);if(t)return t;const e=i.length||600,n=Math.max(64,Math.min(1024,Math.round(e/2))),s=e/n,r=new Float32Array(n),a=new Float32Array(n),o=new Float32Array(n);let l=0;for(let u=0;u<n;u++){const d=i.sample(u/n);r[u]=Math.atan2(d.tangent.x,d.tangent.z),o[u]=d.halfWidth,l+=d.right.x*-d.tangent.z+d.right.z*d.tangent.x}l=l>=0?1:-1;const c=new Float32Array(n);for(let u=0;u<n;u++)c[u]=Ec(r[(u+1)%n]-r[(u+n-1)%n])/(2*s);for(let u=0;u<n;u++)a[u]=.25*c[(u+n-1)%n]+.5*c[u]+.25*c[(u+1)%n];const f=(i.obstacles||[]).map(u=>{const d=i.project(new N(u.x,0,u.z));return{t:d.t,lateral:d.lateral,radius:u.radius}}),h=(i.boostPads||[]).map(u=>{const d=i.project(new N(u.x,0,u.z));return{t:d.t,lateral:d.lateral,radius:u.radius}});return t={length:e,n,ds:s,curv:a,hw:o,rightSign:l,obstacles:f,pads:h},pf.set(i,t),t}function Po(i,t,e){let n=t-i;return n-=Math.round(n),n*e}let C_=1;class R_{constructor(t,e={}){this.car=t,this.skill=Cn(e.skill===void 0?.7:+e.skill,0,1),this.wantsToFire=!1,this.playerProgressDelta=0;const n=C_++;this._phase=n*1.913,this._lanePref=(n*.61803%1-.5)*1.4,this._lane=0,this._time=0,this._stuckTime=0,this._reverseTime=0,this._reverseSteer=0,this._wrongTime=0,this._fireCooldown=1.5+n%5*.6,this._laneInit=!1,this.targetSpeed=0}update(t,e,n){const s=this.car,r=s.controls;if(s.frozen){r.throttle=0,r.steer=0,r.handbrake=!1,this._stuckTime=0,this._reverseTime=0;return}t>.05&&(t=.05),this._time+=t;const a=A_(e),o=s.def,l=this.skill,c=a.length,f=s.speed,h=Math.abs(f),u=s.halfWidth||8;this._laneInit||(this._lane=s.lateral,this._laneInit=!0);const d=1-Cn((this.playerProgressDelta||0)*.3,-.06,.08),g=s.topSpeedNow*Cn((.8+.2*l)*d,.5,1.02),x=nd(o)*(.55+.33*l)*d,p=Yl(o)*(.5+.35*l),m=a.n,y=a.ds,v=s.trackT*m,_=Math.floor(v),E=3+h*(.2-.1*l),w=h*h/(2*p)+E+12,S=Math.min(m,Math.ceil(w/y));let A=g,b=0,M=1e9;for(let nt=0;nt<=S;nt++){const gt=(_+nt)%m,K=a.curv[gt],st=Math.abs(K);if(st<.004)continue;let D=Math.sqrt(x/st);if(D<g){for(let rt=0;rt<6&&st*D>.85*ql(o,D);rt++)D*=.93;const xt=Math.max(0,nt*y-E),Z=Math.sqrt(D*D+2*p*xt);Z<A&&(A=Z)}st>.03&&M>1e8&&nt*y<45&&(M=nt*y,b=K>0?1:-1)}const P=Math.max(.5,u-s.radius-.9);let z;if(b!==0?z=-b*a.rightSign*P*(.3+.25*l):z=this._lanePref*P+Math.sin(this._time*.35+this._phase)*(1-l)*1.2,l>.25)for(let nt=0;nt<a.pads.length;nt++){const gt=a.pads[nt],K=Po(s.trackT,gt.t,c);if(K>2&&K<45&&Math.abs(gt.lateral-s.lateral)<5){z=gt.lateral;break}}let U=-1,F=!1,H=!1;if(n){const nt=5+h*.55;for(let gt=0;gt<n.length;gt++){const K=n[gt];if(K===s)continue;const st=Po(s.trackT,K.trackT,c),D=K.lateral-s.lateral;if(st>.5&&st<nt&&K.speed<f+2){if(Math.abs(K.lateral-z)<2.4){let xt=D>0?-1:1,Z=K.lateral+xt*2.7;Math.abs(Z)>P&&(xt=-xt,Z=K.lateral+xt*2.7),Math.abs(Z)>P&&(Z=Cn(Z,-P,P)),z=Z}st<4.5&&Math.abs(D)<1.7&&(U=U<0?K.speed:Math.min(U,K.speed))}else Math.abs(st)<=2.4&&Math.abs(D)<2.6&&(z+=D>0?-1:1);st>5&&st<34&&Math.abs(D)<2.2&&(F=!0),st<-1.5&&st>-9&&Math.abs(D)<2.5&&(H=!0)}}{const nt=12+h*.95;for(let gt=0;gt<a.obstacles.length;gt++){const K=a.obstacles[gt],st=Po(s.trackT,K.t,c);if(st<-2.5||st>nt)continue;const D=K.radius+s.radius+.9;if(Math.abs(K.lateral-z)<D){const xt=K.lateral-D,Z=K.lateral+D,rt=xt>-P-.3,ht=Z<P+.3;rt&&ht?z=Math.abs(xt-s.lateral)<Math.abs(Z-s.lateral)?xt:Z:rt?z=xt:ht?z=Z:z=K.lateral>0?-P:P}}}z=Cn(z,-P,P);const G=5+4*l;this._lane+=Cn(z-this._lane,-G*t,G*t);const Y=Cn(4.5+h*.32,5,17);let W=s.trackT+Y/c;W-=Math.floor(W);const V=e.sample(W),Q=Cn(this._lane,-(V.halfWidth-s.radius-.6),V.halfWidth-s.radius-.6),tt=V.pos.x+V.right.x*Q-s.pos.x,ut=V.pos.z+V.right.z*Q-s.pos.z,L=Ec(Math.atan2(tt,ut)-s.heading),T=Math.abs(L),C=Math.hypot(tt,ut)||1;let B;if(T>1.35)B=L>0?1:-1;else{const nt=Math.max(h,4),gt=2*nt*Math.sin(L)/C;B=Cn(gt/Math.max(.3,ql(o,nt))*1.25,-1,1)}B+=(1-l)*.14*Math.sin(this._time*2.3+this._phase)*Math.min(1,h/10),T>.7&&(A=Math.min(A,13-5*Math.min(1,(T-.7)/1.2))),U>=0&&(A=Math.min(A,Math.max(6,U+1))),this.targetSpeed=A;const O=A-f;let J=Cn(.45+O*.5,-1,1);J<0&&f<5&&(J=0);let dt=!1;if(s.spinTime>0?(this._stuckTime=0,this._wrongTime=0):(T>1.9?this._wrongTime+=t:this._wrongTime=0,h<1.3&&this._reverseTime<=0?this._stuckTime+=t:h>2.5&&(this._stuckTime=0),this._reverseTime<=0&&(this._stuckTime>1||this._wrongTime>.35&&h<6)&&(this._reverseTime=this._wrongTime>.35?1.5:1.1,T>.15?this._reverseSteer=L>0?-1:1:this._reverseSteer=s.lateral*a.rightSign>0?-1:1,this._stuckTime=0,this._wrongTime=0)),this._reverseTime>0&&(this._reverseTime-=t,J=-1,B=this._reverseSteer,this._reverseTime>.3&&T<.5&&f<-3&&(this._reverseTime=0)),r.throttle=J,r.steer=Cn(B,-1,1),r.handbrake=dt,this._fireCooldown-=t,this._fireCooldown<=0&&this._reverseTime<=0&&s.spinTime<=0){const nt=T<.25;F&&nt||H||nt&&A>=g*.98&&f>g*.6?(this.wantsToFire=!0,this._fireCooldown=1.2+(1-l)*3+(this._time*7.3+this._phase)%1*1.5):this._fireCooldown=.25}}}function P_(i){let t=0;const e=i.length;for(let n=0;n<e;n++){const s=i[n];for(let r=n+1;r<e;r++){const a=i[r];if(s.frozen&&a.frozen||Math.abs(s.pos.y-a.pos.y)>.9)continue;let o=a.pos.x-s.pos.x,l=a.pos.z-s.pos.z;const c=(s.radius+a.radius)*.82,f=o*o+l*l;if(f>=c*c)continue;let h=Math.sqrt(f);h<1e-4&&(o=Math.sin(n*2.4+r),l=Math.cos(n*2.4+r),h=1);const u=o/h,d=l/h,g=s.def?s.def.mass:1,x=a.def?a.def.mass:1,p=s.frozen?0:1/g,m=a.frozen?0:1/x,y=p+m;if(y<=0)continue;const v=c-h,_=v*(p/y),E=v*(m/y);s.pos.x-=u*_,s.pos.z-=d*_,a.pos.x+=u*E,a.pos.z+=d*E;const w=(a.vel.x-s.vel.x)*u+(a.vel.z-s.vel.z)*d;if(w<0){const S=-1.45*w/y;s.vel.x-=u*S*p,s.vel.z-=d*S*p,a.vel.x+=u*S*m,a.vel.z+=d*S*m,-w>t&&(t=-w),s.carHit!==void 0&&(s.carHit=Math.max(s.carHit,-w)),a.carHit!==void 0&&(a.carHit=Math.max(a.carHit,-w))}}}return t}const tn=[{id:"rocket",name:"Fizz Rocket",icon:"🚀",description:"A shaken-up bottle rocket. Chases the racer ahead and pops them into the air."},{id:"turbo",name:"Turbo Cell",icon:"🔋",description:"An overcharged battery. A couple of seconds of flat-out extra speed."},{id:"glue",name:"Goo Blob",icon:"🟢",description:"Drops a sticky puddle behind you. Anyone who drives through it spins out."},{id:"pulse",name:"Zap Ring",icon:"⚡",description:"A static shock-wave that bursts outward and scrambles every car close to you."},{id:"marble",name:"Mega Marble",icon:"🔮",description:"A giant glass marble that rolls down the track, bouncing off the walls."},{id:"shield",name:"Bubble Shield",icon:"🫧",description:"A soapy force bubble. Shrugs off the next hit for a few seconds."},{id:"zaptow",name:"Magna Tug",icon:"🧲",description:"A crackling magnet beam. Latches onto the racer ahead and reels you in while they drag."},{id:"shockcloud",name:"Grumble Cloud",icon:"🌩️",description:"A grumpy little storm. Zaps everyone ahead of you tiny and slow for a moment."},{id:"pogo",name:"Pogo Spring",icon:"🦘",description:"A giant spring under the chassis. Hop clean over goo, marbles and rivals — the landing thump shoves cars nearby."}],id=Object.create(null);for(const i of tn)id[i.id]=i;const Yt={rocket:{spin:1.1,launch:5.5,impulse:4,life:4,turn:3.2},turbo:{boost:2.4},glue:{spin:.9,slow:.45,life:18,radius:2,arm:1.2},pulse:{spin:.9,launch:3.5,impulse:5,radius:10,duration:.45},marble:{spin:.8,launch:4,impulse:9,life:7,speed:46,radius:.75},shield:{time:6},zaptow:{time:2.5,range:45,snap:62,pull:30,top:1.22,slow:.88,fizzleBoost:.7},shockcloud:{time:2.5,slow:.65,scale:.6},pogo:{launch:14,kick:9,radius:6.5,nudge:6,hop:2.5,ring:.4}},jl=2.5,L_=2.5,ln=new Float32Array(tn.length);function I_(i,t,e=Math.random){const n=t>1?(i-1)/(t-1):.5,s=1-Math.abs(2*n-1);ln[0]=.35+1.7*n,ln[1]=.55+1.7*n,ln[2]=1.5-1.05*n,ln[3]=.55+.8*s,ln[4]=.75+.45*n,ln[5]=1.5-1.15*n,ln[6]=.2+.7*n+.6*s,ln[7]=.03+1.25*n*n,ln[8]=.6;let r=0;for(let o=0;o<ln.length;o++)r+=ln[o];let a=e()*r;for(let o=0;o<ln.length;o++)if(a-=ln[o],a<=0)return tn[o];return tn[tn.length-1]}const k_=`
attribute vec4 aColor;
attribute float aSize;
uniform float uPx;
varying vec4 vColor;
void main() {
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPx * projectionMatrix[1][1] / max(0.1, -mv.z);
}`,D_=`
varying vec4 vColor;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d) * 2.0;
  float a = smoothstep(1.0, 0.15, r) * vColor.a;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor.rgb, a);
}`,mf=new ft;class gf{constructor(t=1024,e=!0){this.capacity=t,this.count=0,this._pos=new Float32Array(t*3),this._col=new Float32Array(t*4),this._siz=new Float32Array(t),this._sim=new Float32Array(t*10);const n=this.geometry=new fe;this._aPos=new Zt(this._pos,3),this._aCol=new Zt(this._col,4),this._aSiz=new Zt(this._siz,1),this._aPos.setUsage(ir),this._aCol.setUsage(ir),this._aSiz.setUsage(ir),n.setAttribute("position",this._aPos),n.setAttribute("aColor",this._aCol),n.setAttribute("aSize",this._aSiz),n.setDrawRange(0,0),this.material=new qe({uniforms:{uPx:{value:360}},vertexShader:k_,fragmentShader:D_,transparent:!0,depthWrite:!1,blending:e?_n:Ni}),this.points=new Cx(n,this.material),this.points.frustumCulled=!1,this.points.renderOrder=e?11:10;const s=this.material.uniforms.uPx;this.points.onBeforeRender=r=>{r.getDrawingBufferSize(mf),s.value=mf.y*.5}}emit(t,e,n,s,r,a,o,l,c,f,h,u,d,g,x){if(this.count>=this.capacity)return;const p=this.count++,m=p*3,y=p*4,v=p*10;this._pos[m]=t,this._pos[m+1]=e,this._pos[m+2]=n,this._col[y]=f,this._col[y+1]=h,this._col[y+2]=u,this._col[y+3]=d,this._siz[p]=l;const _=this._sim;_[v]=s,_[v+1]=r,_[v+2]=a,_[v+3]=o,_[v+4]=o,_[v+5]=l,_[v+6]=c,_[v+7]=d,_[v+8]=g||0,_[v+9]=x||0}burst(t,e,n,s,r,a,o,l,c,f,h,u,d,g,x=.5,p=Math.random){for(let m=0;m<s;m++){const y=p()*Math.PI*2,v=(p()-.5+x)*1.6,_=r*(.35+p()*.65),E=Math.cos(Math.atan(v));this.emit(t,e,n,Math.sin(y)*_*E,Math.sin(Math.atan(v))*_,Math.cos(y)*_*E,a*(.6+p()*.4),o,l,c,f,h,u,d,g)}}update(t){const e=this._pos,n=this._col,s=this._siz,r=this._sim;let a=this.count;for(let o=0;o<a;){const l=o*10,c=r[l+3]-t;if(c<=0){if(a--,o!==a){const d=o*3,g=o*4,x=a*3,p=a*4,m=a*10;e[d]=e[x],e[d+1]=e[x+1],e[d+2]=e[x+2],n[g]=n[p],n[g+1]=n[p+1],n[g+2]=n[p+2],n[g+3]=n[p+3],s[o]=s[a];for(let y=0;y<10;y++)r[l+y]=r[m+y]}continue}r[l+3]=c;const f=o*3,h=r[l+9];if(h>0){const d=Math.max(0,1-h*t);r[l]*=d,r[l+1]*=d,r[l+2]*=d}r[l+1]-=r[l+8]*t,e[f]+=r[l]*t,e[f+1]+=r[l+1]*t,e[f+2]+=r[l+2]*t;const u=c/r[l+4];s[o]=r[l+6]+(r[l+5]-r[l+6])*u,n[o*4+3]=r[l+7]*(u<.6?u/.6:1),o++}this.count=a,this.geometry.setDrawRange(0,a),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSiz.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose(),this.points.onBeforeRender=()=>{}}}function Zl(i,t){if(typeof document>"u")return null;const e=document.createElement("canvas");e.width=e.height=i;const n=e.getContext("2d");if(!n)return null;t(n,i);const s=new mc(e);return"colorSpace"in s&&(s.colorSpace=We),s.anisotropy=4,s}const U_=6,xf=2.5,vf=2.1,ea=new ee,na=new N,_f=new Mn,ia=new N,yf=new Ze,bf=new Mn;class N_{constructor(t,e){this.race=t,this.replica=!!t._replica;const n=e.length;this.spots=[];for(let r=0;r<n;r++){const a=e[r];this.spots.push({x:a.x,y:a.y||0,z:a.z,timer:0,scale:1,phase:r*1.7,off:!1,pred:0})}const s=this.tex=Zl(128,(r,a)=>{const o=r.createLinearGradient(0,0,a,a);o.addColorStop(0,"#ffd23f"),o.addColorStop(.5,"#ff7a1a"),o.addColorStop(1,"#ff3d7f"),r.fillStyle=o,r.fillRect(0,0,a,a),r.lineWidth=12,r.strokeStyle="#fff6c8",r.strokeRect(6,6,a-12,a-12),r.fillStyle="#ffffff",r.font="bold 92px sans-serif",r.textAlign="center",r.textBaseline="middle",r.shadowColor="rgba(120,30,0,0.8)",r.shadowBlur=8,r.fillText("?",a/2,a/2+6)});this.boxGeo=new pn(1.3,1.3,1.3),this.boxMat=new Te({color:s?16777215:16753692,map:s,emissive:s?16777215:16742938,emissiveMap:s,emissiveIntensity:.65,roughness:.35,metalness:.1}),this.boxes=new Sa(this.boxGeo,this.boxMat,Math.max(1,n)),this.boxes.count=n,this.boxes.frustumCulled=!1,this.boxes.instanceMatrix.setUsage(ir),this.ringGeo=new za(.75,1.25,28),this.ringMat=new xe({color:16762698,transparent:!0,opacity:.55,blending:_n,depthWrite:!1,side:Ne}),this.rings=new Sa(this.ringGeo,this.ringMat,Math.max(1,n)),this.rings.count=n,this.rings.frustumCulled=!1,this.rings.instanceMatrix.setUsage(ir),this.rings.renderOrder=5,bf.setFromAxisAngle(new N(1,0,0),-Math.PI/2),t.root.add(this.boxes,this.rings),this._sparkAcc=0,this.update(0,0)}get activeCount(){let t=0;for(const e of this.spots)e.timer<=0&&t++;return t}mask(){const t=[0];for(let e=0;e<this.spots.length;e++){const n=e/30|0;for(;t.length<=n;)t.push(0);this.spots[e].timer>0&&(t[n]|=1<<e%30)}return t}setMask(t){if(Array.isArray(t))for(let e=0;e<this.spots.length;e++){const n=t[e/30|0];this.spots[e].off=typeof n=="number"?!!(n&1<<e%30):!1}}_updateReplica(t){const e=this.race,n=e.fx,s=e.random,r=this.spots,a=e._pst,o=a&&!a.pup&&!a.item&&!a.finished&&e.state!=="countdown",l=a?a.car.pos:null;for(let c=0;c<r.length;c++){const f=r[c];if(f.pred>0&&(f.pred-=t),o&&!f.off&&f.timer<=0){const u=l.x-f.x,d=l.z-f.z;u*u+d*d<vf*vf&&Math.abs(l.y-f.y)<3&&(f.pred=.6)}const h=f.off||f.pred>0;h&&f.timer<=0?(f.timer=1,n.burst(f.x,f.y+1.1,f.z,22,9,.5,.7,.1,1,.75,.25,1,6,1.5,.5,s)):!h&&f.timer>0&&(f.timer=0,n.burst(f.x,f.y+1.1,f.z,10,4,.4,.5,.1,1,.9,.5,.9,0,2,.5,s))}}update(t,e){const n=this.race,s=n.fx,r=n.random,a=this.spots;if(this.replica)this._updateReplica(t);else if(n.state!=="countdown"){const o=n.states;for(let l=0;l<o.length;l++){const c=o[l];if(c.item||c.finished)continue;const f=c.car.pos;for(let h=0;h<a.length;h++){const u=a[h];if(u.timer>0)continue;const d=f.x-u.x,g=f.z-u.z;if(d*d+g*g<xf*xf&&Math.abs(f.y-u.y)<3){u.timer=U_,s.burst(u.x,u.y+1.1,u.z,22,9,.5,.7,.1,1,.75,.25,1,6,1.5,.5,r),n._givePickup(c);break}}}}this._sparkAcc+=t*.9*a.length;for(let o=0;o<a.length;o++){const l=a[o];l.timer>0&&!this.replica&&(l.timer-=t,l.timer<=0&&(l.timer=0,s.burst(l.x,l.y+1.1,l.z,10,4,.4,.5,.1,1,.9,.5,.9,0,2,.5,r)));const c=l.timer>0?0:1;l.scale+=(c-l.scale)*Math.min(1,t*10);const f=l.scale<.01?0:l.scale,h=Math.sin(e*2.4+l.phase)*.18;na.set(l.x,l.y+1.15+h,l.z),yf.set(.5,e*1.9+l.phase,.35),_f.setFromEuler(yf),ia.set(f,f,f),ea.compose(na,_f,ia),this.boxes.setMatrixAt(o,ea);const u=f*(1+.12*Math.sin(e*5+l.phase));na.set(l.x,l.y+.06,l.z),ia.set(u,u,u),ea.compose(na,bf,ia),this.rings.setMatrixAt(o,ea)}for(;this._sparkAcc>=1&&a.length;){this._sparkAcc-=1;const o=a[r()*a.length|0];o.timer>0||s.emit(o.x+(r()-.5)*1.4,o.y+.5+r()*1.2,o.z+(r()-.5)*1.4,0,1.2+r(),0,.7,.35,.05,1,.85,.4,.9,0,0)}this.boxes.instanceMatrix.needsUpdate=!0,this.rings.instanceMatrix.needsUpdate=!0}dispose(){this.race.root.remove(this.boxes,this.rings),this.boxes.dispose(),this.rings.dispose(),this.boxGeo.dispose(),this.boxMat.dispose(),this.ringGeo.dispose(),this.ringMat.dispose(),this.tex&&this.tex.dispose()}}const Ra=Math.PI*2,Lo=new N,js=new N;function Mf(i){for(;i>Math.PI;)i-=Ra;for(;i<-Math.PI;)i+=Ra;return i}class z_{constructor(t){this.race=t,this.replica=!!t._replica,this.rockets=[],this.marbles=[],this.puddles=[],this.pulses=[],this.rings=[],this._res=[];const e=h=>(h&&this._res.push(h),h),n=new ge(.17,.17,.9,10);n.rotateX(Math.PI/2);const s=new dn(.2,.42,10);s.rotateX(Math.PI/2),s.translate(0,0,.66);const r=new ge(.035,.035,1.5,5);r.rotateX(Math.PI/2),r.translate(.16,-.05,-.9);const a=new pn(.5,.04,.26);a.translate(0,0,-.4),this.rocketGeo={body:e(n),nose:e(s),stick:e(r),fin:e(a)},this.rocketMat={body:e(new Te({color:15921906,roughness:.4,emissive:3355443})),nose:e(new Te({color:16724804,roughness:.35,emissive:6688792})),stick:e(new Te({color:13214315,roughness:.8}))},this.glowTex=e(Zl(64,(h,u)=>{const d=h.createRadialGradient(u/2,u/2,0,u/2,u/2,u/2);d.addColorStop(0,"rgba(255,255,255,1)"),d.addColorStop(.3,"rgba(255,220,140,0.7)"),d.addColorStop(1,"rgba(255,120,20,0)"),h.fillStyle=d,h.fillRect(0,0,u,u)})),this.glowMat=e(new pc({map:this.glowTex,color:16760944,transparent:!0,opacity:this.glowTex?.9:0,blending:_n,depthWrite:!1})),this.marbleGeo=e(new Ie(Yt.marble.radius,20,14)),this.marbleTex=e(Zl(128,(h,u)=>{h.fillStyle="#bfe9ff",h.fillRect(0,0,u,u);const d=["#2f6bff","#ff4fa3","#ffe14a","#ffffff"];for(let g=0;g<4;g++){h.strokeStyle=d[g],h.lineWidth=12,h.beginPath();for(let x=0;x<=u;x+=4){const p=u*(.2+g*.2)+Math.sin(x/u*Ra*2+g)*14;x===0?h.moveTo(x,p):h.lineTo(x,p)}h.stroke()}})),this.marbleMat=e(new Te({color:this.marbleTex?16777215:8376575,map:this.marbleTex,emissive:2245836,emissiveIntensity:.45,roughness:.12,metalness:.25}));const o=new hr(1,22),l=o.attributes.position;for(let h=1;h<l.count;h++){const u=Math.atan2(l.getY(h),l.getX(h)),d=1+.16*Math.sin(u*3+.6)+.1*Math.sin(u*7+2);l.setXY(h,l.getX(h)*d,l.getY(h)*d)}o.rotateX(-Math.PI/2),this.gooGeo=e(o),this.gooMat=e(new Te({color:8843324,emissive:2914816,emissiveIntensity:.6,roughness:.15,metalness:0,transparent:!0,opacity:.92,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));const c=new za(.8,1,48);c.rotateX(-Math.PI/2),this.ringGeo=e(c),this.shieldGeo=e(new Ie(1.55,18,12)),this.shieldMat=e(new xe({color:8382975,transparent:!0,opacity:.28,blending:_n,depthWrite:!1}));const f=new ge(.09,.09,1,6,1,!0);f.rotateX(Math.PI/2),f.translate(0,0,.5),this.beamGeo=e(f),this.beamMat=e(new xe({color:16739029,transparent:!0,opacity:.85,blending:_n,depthWrite:!1,side:Ne})),this.cloudGeo=e(new Ie(.5,10,7)),this.cloudMat=e(new Te({color:5988469,emissive:2303546,roughness:.95}))}use(t,e){switch(e){case"rocket":this._fireRocket(t);break;case"turbo":this._turbo(t);break;case"glue":this._dropGoo(t);break;case"pulse":this._pulse(t);break;case"marble":this._rollMarble(t);break;case"shield":this._shield(t);break;case"zaptow":this._tow(t);break;case"shockcloud":this._storm(t);break;case"pogo":this._pogo(t);break}}_turbo(t,e=Yt.turbo.boost){const n=t.car;n.boostTime=Math.max(n.boostTime||0,e),t.wasBoosting=!0,t.pup&&this.race._net&&this.race._net.effect(t,"turbo",0,0,0,0,0,e),this.race._boostBurst(t),this.race._emit("boost",n)}_shield(t,e=Yt.shield.time,n=!1){if(t.shieldTime=e,t.shieldMesh||(t.shieldMesh=new Ct(this.shieldGeo,this.shieldMat),t.shieldMesh.renderOrder=8,this.race.root.add(t.shieldMesh)),t.shieldMesh.visible=!0,n)return;const s=t.car.pos;this.race.fx.burst(s.x,s.y+.6,s.z,16,5,.45,.5,.1,.5,.9,1,.9,0,2,.5,this.race.random)}_fireRocket(t){const e=this.race,n=t.car,s=n.heading,r=Math.sin(s),a=Math.cos(s),o=this._spawnRocket(++e._nextId,n.pos.x+r*1.9,n.pos.y+.75,n.pos.z+a*1.9,s,Math.max(52,Math.max(0,n.speed||0)+30));o.owner=t,o.target=e._targetAhead(t,.35),o.t=n.trackT}_spawnRocket(t,e,n,s,r,a){const o=new hn;o.add(new Ct(this.rocketGeo.body,this.rocketMat.body),new Ct(this.rocketGeo.nose,this.rocketMat.nose),new Ct(this.rocketGeo.stick,this.rocketMat.stick),new Ct(this.rocketGeo.fin,this.rocketMat.nose));const l=new Uu(this.glowMat);l.scale.set(1.6,1.6,1),l.position.z=-.6,o.add(l);const c={id:t,owner:null,target:null,mesh:o,pos:new N(e,n,s),ang:r,speed:a,life:Yt.rocket.life,t:void 0,age:0,net:null,nt:0};return o.position.copy(c.pos),o.rotation.y=r,this.race.root.add(o),this.rockets.push(c),c}_rollMarble(t){const e=this.race,n=t.car,s=n.heading,r=Math.sin(s),a=Math.cos(s),o=this._spawnMarble(++e._nextId,n.pos.x+r*2.2,n.pos.y+Yt.marble.radius,n.pos.z+a*2.2,r,a,Math.max(Yt.marble.speed,Math.max(0,n.speed||0)+16));o.owner=t,o.t=n.trackT}_spawnMarble(t,e,n,s,r,a,o){const l=new Ct(this.marbleGeo,this.marbleMat);l.castShadow=!0;const c={id:t,owner:null,mesh:l,pos:new N(e,n,s),dx:r,dz:a,speed:o,life:Yt.marble.life,t:void 0,age:0,net:null,nt:0};return l.position.copy(c.pos),this.race.root.add(l),this.marbles.push(c),c}_dropGoo(t){const e=this.race,n=t.car,s=n.heading,r=n.pos.x-Math.sin(s)*2.6,a=n.pos.z-Math.cos(s)*2.6;Lo.set(r,n.pos.y,a);const o=e.track.project(Lo,n.trackT),l=o&&Number.isFinite(o.y)?o.y:n.pos.y;this._spawnPuddle(++e._nextId,r,l,a).owner=t}_spawnPuddle(t,e,n,s){const r=this.race,a=new Ct(this.gooGeo,this.gooMat);a.position.set(e,n+.07,s),a.rotation.y=r.random()*Ra,a.scale.setScalar(.01),a.renderOrder=2,r.root.add(a);const o={id:t,owner:null,mesh:a,x:e,y:n,z:s,life:this.replica?1/0:Yt.glue.life,age:0,radius:Yt.glue.radius,dying:0};return this.puddles.push(o),r.fx.burst(e,n+.3,s,10,4,.4,.5,.15,.5,1,.25,.9,12,1,.6,r.random),o}_pulse(t){const e=this.race,n=new xe({color:10475775,transparent:!0,opacity:.95,blending:_n,depthWrite:!1,side:Ne}),s=new Ct(this.ringGeo,n);s.renderOrder=9,s.scale.setScalar(.1),e.root.add(s),this.pulses.push({owner:t,mesh:s,mat:n,age:0,hit:new Uint8Array(e.states.length)});const r=t.car.pos;e.fx.burst(r.x,r.y+.5,r.z,40,22,.4,.55,.1,.6,.85,1,1,0,3,.15,e.random)}_towTarget(t){const e=this.race,n=e.states,s=Yt.zaptow,r=e.track.length||500,a=t.car.pos,o=s.range+10;let l=null,c=s.range/r;for(let f=0;f<n.length;f++){const h=n[f];if(h===t||h.finished)continue;let u=(h.progress-t.progress)%1;if(u<0&&(u+=1),u>=c)continue;const d=h.car.pos.x-a.x,g=h.car.pos.z-a.z;d*d+g*g>o*o||(c=u,l=h)}return l}_tow(t){const e=this.race,n=Yt.zaptow,s=t.car.pos,r=this._towTarget(t);if(!r){e.fx.burst(s.x,s.y+.6,s.z,14,6,.4,.4,.08,1,.45,.85,.9,0,2,.5,e.random),this._turbo(t,n.fizzleBoost);return}e._slowHit(r,"zaptow",n.time,n.slow,!1)!==2&&(this._latch(t,r,n.time),e._emit("tow",t.car,r.car,n.time))}_latch(t,e,n){if(!e||e===t||!(n>0))return;t.towTarget=e,t.towTime=Math.min(Yt.zaptow.time,n),t.towMesh||(t.towMesh=new Ct(this.beamGeo,this.beamMat),t.towMesh.renderOrder=9,t.towMesh.frustumCulled=!1,this.race.root.add(t.towMesh)),this._beam(t,0);const s=t.car.pos,r=e.car.pos,a=this.race.fx,o=this.race.random;a.burst(s.x,s.y+.6,s.z,10,5,.35,.4,.08,1,.45,.85,1,0,2,.5,o),a.burst(r.x,r.y+.6,r.z,10,5,.35,.4,.08,.5,.75,1,1,0,2,.5,o)}_unlatch(t){t.towTarget=null,t.towTime=0,t.towMesh&&(t.towMesh.visible=!1)}_beam(t,e){const n=t.towMesh,s=t.car.pos,r=t.towTarget.car.pos,a=r.x-s.x,o=r.y-s.y,l=r.z-s.z,c=Math.sqrt(a*a+o*o+l*l);if(!(c>.2))return n.visible=!1,c;n.visible=!0,n.position.set(s.x,s.y+.55,s.z),n.lookAt(r.x,r.y+.55,r.z);const f=1+.35*Math.sin(e*43+t.index);return n.scale.set(f,f,c),c}_storm(t){const e=this.race,n=e.states,s=Yt.shockcloud;this._stormFx(t);for(let r=0;r<n.length;r++){const a=n[r];a===t||a.finished||a.position>=t.position||e._slowHit(a,"shockcloud",s.time,s.slow,!0)}}_stormFx(t){const e=t.car.pos,n=this.race;n.smoke.burst(e.x,e.y+1.2,e.z,10,3,.9,.8,2.4,.4,.42,.55,.5,-3,1.5,.9,n.random),n.fx.burst(e.x,e.y+1.4,e.z,18,9,.4,.4,.06,1,.95,.4,1,0,2,.9,n.random)}_shrink(t,e){if(t.shrinkTime=Math.min(Yt.shockcloud.time,e),!t.cloudMesh){const n=new hn,s=new Ct(this.cloudGeo,this.cloudMat),r=new Ct(this.cloudGeo,this.cloudMat),a=new Ct(this.cloudGeo,this.cloudMat);s.scale.set(1.5,.8,1.1),r.position.set(.55,.12,.1),r.scale.set(1,.75,.9),a.position.set(-.55,.08,-.1),a.scale.set(1.1,.7,.9),n.add(s,r,a),t.cloudMesh=n,this.race.root.add(n)}t.cloudMesh.visible=!0}_pogo(t){const e=this.race,n=t.car,s=Yt.pogo;t.pup&&e._net?e._net.effect(t,"pogo",0,s.launch,0,0,0,0,0,0,s.kick):(n.launch(s.launch),n.applyImpulse(Lo.set(Math.sin(n.heading)*s.kick,0,Math.cos(n.heading)*s.kick))),this._pogoArm(t)}_pogoArm(t){const e=t.car.pos,n=this.race;t.pogo=1,t.pogoT=0,n.fx.burst(e.x,e.y+.2,e.z,16,7,.35,.45,.08,1,.8,.3,1,14,1,.2,n.random),n.smoke.burst(e.x,e.y+.2,e.z,6,3,.6,.6,1.8,.85,.85,.85,.35,0,1.5,.2,n.random)}_pogoLand(t){const e=this.race,n=e.states,s=Yt.pogo,r=t.car.pos,a=new xe({color:16766826,transparent:!0,opacity:.9,blending:_n,depthWrite:!1,side:Ne}),o=new Ct(this.ringGeo,a);if(o.renderOrder=9,o.position.set(r.x,r.y+.2,r.z),o.scale.setScalar(.1),e.root.add(o),this.rings.push({mesh:o,mat:a,age:0}),e.smoke.burst(r.x,r.y+.2,r.z,10,5,.7,.6,2,.8,.8,.8,.4,0,2,.15,e.random),e._emit("land",t.car,"pogo"),!this.replica)for(let l=0;l<n.length;l++){const c=n[l];if(c===t)continue;const f=c.car.pos,h=f.x-r.x,u=f.z-r.z,d=Math.hypot(h,u);if(d<s.radius+(c.car.radius||1)&&Math.abs(f.y-r.y)<2){const g=d>.001?1/d:0;e._hit(c,"pogo",0,s.hop,h*g*s.nudge,u*g*s.nudge)}}}_updateStatus(t,e){const n=this.race,s=n.states,r=n.fx,a=n.random,o=Yt.zaptow,l=Yt.shockcloud.scale;for(let f=0;f<s.length;f++){const h=s[f],u=h.car,d=u.pos;h.slowTime>0&&(h.slowTime-=t),h.slowImmune>0&&(h.slowImmune-=t);let g=1;h.shrinkTime>0&&(h.shrinkTime-=t,h.shrinkTime>0&&(g=l)),h.scaleVis!==g&&(h.scaleVis+=(g-h.scaleVis)*Math.min(1,12*t),Math.abs(g-h.scaleVis)<.004&&(h.scaleVis=g),u.mesh&&u.mesh.scale.setScalar(h.scaleVis));const x=h.cloudMesh;if(x)if(h.shrinkTime>0)for(x.visible=!0,x.position.set(d.x,d.y+1.55+.08*Math.sin(e*6+f),d.z),x.rotation.y=e*.8+f,h.cloudAcc+=t*16;h.cloudAcc>=1;)h.cloudAcc-=1,r.emit(d.x+(a()-.5)*1.2,d.y+1.4,d.z+(a()-.5)*1.2,(a()-.5)*2,-3-a()*4,(a()-.5)*2,.22,.3,.05,1,.95,.35,1,0,0);else x.visible&&(x.visible=!1);const p=h.towTarget;if(p){h.towTime-=t;let m=0;if(h.towTime>0&&(m=this._beam(h,e)),!(h.towTime>0)||!this.replica&&(m>o.snap||p.finished||h.finished))this._unlatch(h);else if(a()<.5){const y=a(),v=p.car.pos;r.emit(d.x+(v.x-d.x)*y,d.y+.55+(v.y-d.y)*y,d.z+(v.z-d.z)*y,(a()-.5)*3,a()*2,(a()-.5)*3,.2,.3,.05,y<.5?1:.5,y<.5?.45:.75,y<.5?.85:1,1,0,0)}}h.pogo&&(h.pogoT+=t,h.pogo===1?u.onGround===!1&&(h.pogo=2):u.onGround!==!1&&h.pogoT>.15&&(h.pogo=0,this._pogoLand(h)),h.pogoT>3&&(h.pogo=0))}const c=Yt.pogo;for(let f=this.rings.length-1;f>=0;f--){const h=this.rings[f];h.age+=t;const u=Math.min(1,h.age/c.ring),d=c.radius*(1-(1-u)*(1-u));h.mesh.scale.set(d,1,d),h.mat.opacity=.9*(1-u*u),u>=1&&(n.root.remove(h.mesh),h.mat.dispose(),this.rings.splice(f,1))}}update(t,e){this.replica?this._updateReplica(t):(this._updateRockets(t),this._updateMarbles(t)),this._updatePuddles(t,e),this._updatePulses(t),this._updateShields(t,e),this._updateStatus(t,e)}sync(t,e,n,s){this.replica&&(this._syncList(this.rockets,t,6,s,0),this._syncList(this.marbles,e,7,s,1),this._syncList(this.puddles,n,4,s,2))}_syncList(t,e,n,s,r){const a=this.race.fx,o=this.race.random;Array.isArray(e)||(e=[]);for(let l=0;l<t.length;l++)t[l]._seen=!1;for(let l=0;l<e.length&&l<64;l++){const c=e[l];if(!Array.isArray(c)||c.length<n)continue;let f=!0;for(let u=0;u<n;u++)if(typeof c[u]!="number"||!Number.isFinite(c[u])){f=!1;break}if(!f)continue;let h=null;for(let u=0;u<t.length;u++)if(t[u].id===c[0]){h=t[u];break}h||(r===0?h=this._spawnRocket(c[0],c[1],c[2],c[3],c[4],c[5]):r===1?h=this._spawnMarble(c[0],c[1],c[2],c[3],c[4],c[5],c[6]):h=this._spawnPuddle(c[0],c[1],c[2],c[3])),h._seen=!0,h.net=c,h.nt=s}for(let l=t.length-1;l>=0;l--){const c=t[l];if(!c._seen){if(r===2){c.dying||(c.dying=1e-4);continue}r===0?this._explode(c.pos.x,c.pos.y,c.pos.z,!0):a.burst(c.pos.x,c.pos.y,c.pos.z,30,12,.5,.6,.1,.6,.85,1,1,12,1,.6,o),this.race.root.remove(c.mesh),t.splice(l,1)}}}_updateReplica(t){const e=this.race,n=e._net?e._net.wallNow:0,s=1-Math.exp(-10*t);for(let a=0;a<this.rockets.length;a++){const o=this.rockets[a],l=o.net;if(o.age+=t,l){let c=n-o.nt;c=c<0?0:c>.5?.5:c,o.ang+=Mf(l[4]-o.ang)*s,o.speed=l[5];const f=Math.sin(o.ang),h=Math.cos(o.ang);o.pos.x+=f*o.speed*t,o.pos.z+=h*o.speed*t,o.pos.x+=(l[1]+Math.sin(l[4])*l[5]*c-o.pos.x)*s,o.pos.z+=(l[3]+Math.cos(l[4])*l[5]*c-o.pos.z)*s,o.pos.y+=(l[2]-o.pos.y)*s}o.mesh.position.copy(o.pos),o.mesh.rotation.y=o.ang,o.mesh.rotation.z+=t*9,this._rocketTrail(o,Math.sin(o.ang),Math.cos(o.ang))}const r=Yt.marble.radius;for(let a=0;a<this.marbles.length;a++){const o=this.marbles[a],l=o.net;if(o.age+=t,l){let c=n-o.nt;c=c<0?0:c>.5?.5:c,o.dx=l[4],o.dz=l[5],o.speed=l[6],o.pos.x+=o.dx*o.speed*t,o.pos.z+=o.dz*o.speed*t,o.pos.x+=(l[1]+l[4]*l[6]*c-o.pos.x)*s,o.pos.z+=(l[3]+l[5]*l[6]*c-o.pos.z)*s,o.pos.y+=(l[2]-o.pos.y)*s}o.mesh.position.copy(o.pos),js.set(o.dz,0,-o.dx),js.lengthSq()>1e-6&&o.mesh.rotateOnWorldAxis(js.normalize(),o.speed*t/r),this._marbleTrail(o)}}_rocketTrail(t,e,n){const s=this.race,r=s.fx,a=s.random;r.emit(t.pos.x-e*.7,t.pos.y,t.pos.z-n*.7,-e*6+(a()-.5)*2,(a()-.5)*2,-n*6+(a()-.5)*2,.28,.6,.1,1,.7+a()*.3,.25,1,0,0),a()<.5&&s.smoke.emit(t.pos.x-e,t.pos.y,t.pos.z-n,0,.8,0,.6,.4,1.4,.8,.8,.8,.3,0,1)}_marbleTrail(t){const e=this.race.fx,n=this.race.random,s=Yt.marble.radius;n()<.5&&e.emit(t.pos.x,t.pos.y-s*.6,t.pos.z,(n()-.5)*3,1+n()*2,(n()-.5)*3,.35,.35,.05,.6,.85,1,.9,6,0)}_explode(t,e,n,s){const r=this.race.fx,a=this.race.smoke,o=this.race.random;r.burst(t,e,n,s?46:24,s?17:11,.55,.9,.15,1,.62,.18,1,14,1.2,.55,o),r.burst(t,e,n,s?12:6,5,.3,2.6,.6,1,.9,.6,.9,0,3,.5,o),a.burst(t,e+.3,n,s?12:6,4,.9,1,3,.55,.55,.55,.5,-1.5,1.5,.7,o)}_updateRockets(t){const e=this.race,n=e.track,s=e.states;e.fx,e.random;const r=n.length||500;for(let a=this.rockets.length-1;a>=0;a--){const o=this.rockets[a];o.life-=t,o.age+=t;let l=o.life<=0,c=n.project(o.pos,o.t);c&&Number.isFinite(c.t)?o.t=c.t:c=null;let f=NaN,h=NaN;const u=o.target;if(u){const m=u.car.pos,y=m.x-o.pos.x,v=m.z-o.pos.z;y*y+v*v<34*34&&(f=m.x,h=m.z)}if(f!==f){let m=(o.t+16/r)%1;m<0&&(m+=1);const y=n.sample(m);y&&y.pos&&(f=y.pos.x,h=y.pos.z)}if(f===f){const m=Math.atan2(f-o.pos.x,h-o.pos.z),y=Mf(m-o.ang),v=Yt.rocket.turn*t;o.ang+=y>v?v:y<-v?-v:y}const d=Math.sin(o.ang),g=Math.cos(o.ang);o.pos.x+=d*o.speed*t,o.pos.z+=g*o.speed*t,c&&Number.isFinite(c.y)&&(o.pos.y+=(c.y+.75-o.pos.y)*Math.min(1,t*10)),o.mesh.position.copy(o.pos),o.mesh.rotation.y=o.ang,o.mesh.rotation.z+=t*9,this._rocketTrail(o,d,g),c&&Math.abs(c.lateral)>c.halfWidth+.4&&(l=!0);const x=n.obstacles;if(x&&!l)for(let m=0;m<x.length;m++){const y=x[m],v=y.x-o.pos.x,_=y.z-o.pos.z,E=y.radius+.3;if(v*v+_*_<E*E){l=!0;break}}let p=!1;if(!l)for(let m=0;m<s.length;m++){const y=s[m];if(y===o.owner)continue;const v=y.car.pos,_=v.x-o.pos.x,E=v.z-o.pos.z,w=(y.car.radius||1)+.75;if(_*_+E*E<w*w&&Math.abs(v.y+.5-o.pos.y)<2.6){e._hit(y,"rocket",Yt.rocket.spin,Yt.rocket.launch,d*Yt.rocket.impulse,g*Yt.rocket.impulse),l=p=!0;break}}l&&(this._explode(o.pos.x,o.pos.y,o.pos.z,!0),p||e._emit("explode",o.pos,"rocket"),e.root.remove(o.mesh),this.rockets.splice(a,1))}}_updateMarbles(t){const e=this.race,n=e.track,s=e.states,r=e.fx,a=e.random,o=Yt.marble.radius;for(let l=this.marbles.length-1;l>=0;l--){const c=this.marbles[l];c.life-=t,c.age+=t;let f=c.life<=0;c.pos.x+=c.dx*c.speed*t,c.pos.z+=c.dz*c.speed*t;const h=n.project(c.pos,c.t);if(h&&Number.isFinite(h.t)){c.t=h.t;const d=n.sample(c.t);if(d&&d.right&&d.tangent){const g=d.right.x,x=d.right.z,p=Math.max(.5,h.halfWidth-o);if(Math.abs(h.lateral)>p){const v=h.lateral>0?1:-1,_=c.dx*g+c.dz*x;_*v>0&&(c.dx-=2*_*g,c.dz-=2*_*x,r.burst(c.pos.x,c.pos.y,c.pos.z,8,7,.3,.4,.05,.7,.9,1,1,10,1,.5,a),e._emit("bounce",c.pos,"marble"));const E=Math.abs(h.lateral)-p;c.pos.x-=g*v*E,c.pos.z-=x*v*E}const m=1.6*t;c.dx+=d.tangent.x*m,c.dz+=d.tangent.z*m;const y=Math.hypot(c.dx,c.dz)||1;c.dx/=y,c.dz/=y}Number.isFinite(h.y)&&(c.pos.y+=(h.y+o-c.pos.y)*Math.min(1,t*14))}const u=n.obstacles;if(u)for(let d=0;d<u.length;d++){const g=u[d];let x=c.pos.x-g.x,p=c.pos.z-g.z;const m=Math.hypot(x,p),y=g.radius+o;if(m<y&&m>1e-4){x/=m,p/=m;const v=c.dx*x+c.dz*p;v<0&&(c.dx-=2*v*x,c.dz-=2*v*p),c.pos.x=g.x+x*y,c.pos.z=g.z+p*y}}if(c.mesh.position.copy(c.pos),js.set(c.dz,0,-c.dx),c.mesh.rotateOnWorldAxis(js,c.speed*t/o),this._marbleTrail(c),!f)for(let d=0;d<s.length;d++){const g=s[d];if(g===c.owner&&c.age<1)continue;const x=g.car.pos,p=x.x-c.pos.x,m=x.z-c.pos.z,y=(g.car.radius||1)+o;if(p*p+m*m<y*y&&Math.abs(x.y-(c.pos.y-o))<2.2&&e._hit(g,"marble",Yt.marble.spin,Yt.marble.launch,c.dx*Yt.marble.impulse,c.dz*Yt.marble.impulse)){f=!0;break}}f&&(r.burst(c.pos.x,c.pos.y,c.pos.z,30,12,.5,.6,.1,.6,.85,1,1,12,1,.6,a),e.root.remove(c.mesh),this.marbles.splice(l,1))}}_updatePuddles(t,e){const n=this.race,s=n.states;for(let r=this.puddles.length-1;r>=0;r--){const a=this.puddles[r];if(a.age+=t,a.life-=t,a.life<=0&&!a.dying&&(a.dying=1e-4),a.dying){a.dying+=t;const c=Math.max(0,1-a.dying/.35);a.mesh.scale.setScalar(Math.max(.001,a.radius*c)),c<=0&&(n.root.remove(a.mesh),this.puddles.splice(r,1));continue}const o=Math.min(1,a.age/.25),l=1+.04*Math.sin(e*4+r);if(a.mesh.scale.set(a.radius*o*l,1,a.radius*o*(2-l)),!this.replica)for(let c=0;c<s.length;c++){const f=s[c];if(f===a.owner&&a.age<Yt.glue.arm)continue;const h=f.car;if(h.onGround===!1)continue;const u=h.pos.x-a.x,d=h.pos.z-a.z,g=a.radius+.35;if(u*u+d*d<g*g&&Math.abs(h.pos.y-a.y)<1.5&&n._hit(f,"glue",Yt.glue.spin,0,-h.vel.x*Yt.glue.slow,-h.vel.z*Yt.glue.slow,Yt.glue.slow)){n.fx.burst(a.x,a.y+.3,a.z,18,7,.5,.6,.15,.5,1,.25,1,14,1,.7,n.random),a.dying=1e-4;break}}}}_updatePulses(t){const e=this.race,n=e.states,s=Yt.pulse;for(let r=this.pulses.length-1;r>=0;r--){const a=this.pulses[r];a.age+=t;const o=Math.min(1,a.age/s.duration),l=s.radius*(1-(1-o)*(1-o)),c=a.owner.car.pos;a.mesh.position.set(c.x,c.y+.45,c.z),a.mesh.scale.set(l,1,l),a.mat.opacity=.95*(1-o*o);for(let f=0;f<n.length&&!this.replica;f++){const h=n[f];if(h===a.owner||a.hit[f])continue;const u=h.car.pos,d=u.x-c.x,g=u.z-c.z,x=Math.hypot(d,g);if(x<l+(h.car.radius||1)&&Math.abs(u.y-c.y)<4){a.hit[f]=1;const p=x>.001?1/x:0;e._hit(h,"pulse",s.spin,s.launch,d*p*s.impulse,g*p*s.impulse)}}o>=1&&(e.root.remove(a.mesh),a.mat.dispose(),this.pulses.splice(r,1))}}_updateShields(t,e){const n=this.race.states;for(let s=0;s<n.length;s++){const r=n[s];r.shieldTime>0&&(r.shieldTime-=t);const a=r.shieldMesh;if(a)if(r.shieldTime>0){a.visible=r.shieldTime>1.2||Math.sin(e*28)>-.2;const o=r.car.pos;a.position.set(o.x,o.y+.55,o.z);const l=1+.05*Math.sin(e*7+s);a.scale.set(l,.82*(2-l),l),a.rotation.y=e*1.5}else a.visible=!1}}dispose(){const t=this.race.root;for(const e of this.rockets)t.remove(e.mesh);for(const e of this.marbles)t.remove(e.mesh);for(const e of this.puddles)t.remove(e.mesh);for(const e of this.pulses)t.remove(e.mesh),e.mat.dispose();for(const e of this.rings)t.remove(e.mesh),e.mat.dispose();for(const e of this.race.states)e.shieldMesh&&(t.remove(e.shieldMesh),e.shieldMesh=null),e.towMesh&&(t.remove(e.towMesh),e.towMesh=null),e.cloudMesh&&(t.remove(e.cloudMesh),e.cloudMesh=null),e.towTarget=null,e.scaleVis!==1&&e.car.mesh&&(e.scaleVis=1,e.car.mesh.scale.setScalar(1));this.rockets.length=this.marbles.length=this.puddles.length=this.pulses.length=this.rings.length=0;for(const e of this._res)e.dispose();this._res.length=0}}const wf=Math.PI*2,Sf=12,Tf=.5,F_=12,Ef=30,Zs=i=>Math.round(i*10)/10,oe=i=>Math.round(i*100)/100,De=i=>Math.round(i*1e3)/1e3,O_=i=>typeof i=="number"&&i===i&&i!==1/0&&i!==-1/0;function $l(i){return i=(i+Math.PI)%wf,i<0&&(i+=wf),i-Math.PI}function sd(i,t,e){const n=i.controls||{},s=e>0?e>31?31:Math.round(e):0,r=(i.onGround!==!1?1:0)|(i.drifting?2:0)|(n.handbrake?4:0)|(t&15)<<4|s<<8,a=i.vel;return[oe(i.pos.x),oe(i.pos.y),oe(i.pos.z),De($l(i.heading)),oe(a.x),oe(a.y||0),oe(a.z),De(i.yawRate||0),oe(n.steer||0),r,oe(i.spinTime>0?i.spinTime:0),oe(i.boostTime>0?i.boostTime:0)]}function rd(i){if(!Array.isArray(i)||i.length<Sf)return!1;for(let t=0;t<Sf;t++)if(!O_(i[t]))return!1;return Math.abs(i[0])<1e6&&Math.abs(i[1])<1e6&&Math.abs(i[2])<1e6}class Af{constructor(){this.a=null,this.b=null,this.lastT=-1/0,this.tp=-1,this.fresh=!1,this.init=!1,this.hold=0,this.stale=!1,this.snapped=!1,this.age=1/0,this._wh=0,this.wallHit=0}push(t,e){if(!(t>this.lastT))return!1;const n=this.a||{t:0,s:null};this.a=this.b,n.t=t,n.s=e,this.b=n,this.lastT=t;const s=e[9]>>8&31;return s>this._wh&&(this._wh=s),this.fresh=!0,!0}advance(t,e,n){this.snapped=!1;const s=this.b;if(!s)return;const r=s.s;this.hold>0&&(this.hold-=n);let a=e-s.t;this.age=a;let o,l,c,f,h,u,d,g;const x=this.a;if(a<0&&x&&s.t-x.t>1e-6&&s.t-x.t<1){let _=(e-x.t)/(s.t-x.t);_<0&&(_=0);const E=x.s;o=E[0]+(r[0]-E[0])*_,l=E[1]+(r[1]-E[1])*_,c=E[2]+(r[2]-E[2])*_,f=E[3]+$l(r[3]-E[3])*_,h=E[4]+(r[4]-E[4])*_,u=E[5]+(r[5]-E[5])*_,d=E[6]+(r[6]-E[6])*_,g=E[7]+(r[7]-E[7])*_,this.stale=!1}else{a<0&&(a=0),this.stale=a>Tf;const _=this.stale?Tf:a;g=r[7]>6?6:r[7]<-6?-6:r[7];const E=!(r[9]&1),w=g*_,S=Math.cos(w*.5),A=Math.sin(w*.5);if(o=r[0]+(r[4]*S+r[6]*A)*_,c=r[2]+(r[6]*S-r[4]*A)*_,l=r[1]+r[5]*_-(E?.5*Ef*_*_:0),f=r[3]+w,this.stale)h=u=d=g=0;else{const b=Math.cos(w),M=Math.sin(w);h=r[4]*b+r[6]*M,d=r[6]*b-r[4]*M,u=r[5]-(E?Ef*_:0)}}const p=r[9]>>4&15,m=t.pos;let y=!this.init||p!==this.tp;if(this.tp=p,!y){m.x+=h*n,m.z+=d*n;const _=o-m.x,E=c-m.z,w=Math.hypot(_,E);if(w>F_)y=!0;else if(w>1e-5){let A=w*(1-Math.exp(-12*n));const b=Math.hypot(h,d),M=(b>6?b:6)*n;A>M&&(A=M),m.x+=_/w*A,m.z+=E/w*A}m.y+=(l-m.y)*Math.min(1,18*n),t.heading+=g*n;const S=$l(f-t.heading);S>2||S<-2?t.heading=f:t.heading+=S*(1-Math.exp(-14*n))}y&&(m.x=o,m.y=l,m.z=c,t.heading=f,this.init=!0,this.snapped=!0,typeof t.puppetSnap=="function"&&t.puppetSnap()),t.vel.x=h,t.vel.y=u,t.vel.z=d,t.yawRate=g,t.onGround=!!(r[9]&1),t.drifting=!!(r[9]&2)&&!this.stale;const v=t.controls;if(v&&(v.steer=r[8],v.handbrake=!!(r[9]&4),v.throttle=0),this.fresh){this.fresh=!1,this.wallHit=this._wh,this._wh=0;const _=a>0?a:0,E=Math.max(0,r[10]-_),w=Math.max(0,r[11]-_);this.hold>0?(t.spinTime=Math.max(t.spinTime||0,E),t.boostTime=Math.max(t.boostTime||0,w)):(t.spinTime=E,t.boostTime=w)}}}const sa=1/20,ra=1/30,B_=4,H_=.7,Io=5,ad=1e-4,ko=new N,ye=i=>typeof i=="number"&&Number.isFinite(i),aa=i=>ye(i)?i:0,us=i=>i==null||!ye(i)?-1:De(i),Do=i=>i?tn.indexOf(i):-1,Uo=i=>tn.findIndex(t=>t.id===i);class G_{constructor(t,e){this.race=t,this.role="host",this.localId=e.localId!=null?e.localId:null,this.wall=0,this.wallNow=0,this.byId=new Map,this.waiting=new Set,this.waitTime=0,this.snapAcc=sa,this.n=0,this.seq=0,this.recent=[],this.finalMsg=null}get isWaiting(){return this.waiting.size>0&&this.waitTime<Io}addRemote(t){this.byId.set(t.netId,t),this.waiting.add(t.netId)}begin(t){return this.wall+=t,this.wallNow=this.wall,this.waiting.size&&this.waitTime<Io?(this.waitTime+=t,this.waitTime<Io):!1}_event(t,e){t.unshift(++this.seq),this.recent.push({at:this.wall,e:t}),this.race._emit("net",{t:"e",e:[t]},e??null)}forward(t,e,n,s,r){const a=this.race;switch(t){case"lap":{const o=a._byCar.get(e);o&&this._event(["l",o.index,n|0,De(s),r?1:0,De(o.lapStart)]);break}case"finish":{const o=a._byCar.get(e);o&&this._event(["f",o.index,n|0,us(o.finishTime)]);break}case"pickup":{const o=a._byCar.get(e);o&&this._event(["p",o.index,Do(n)]);break}case"fire":{const o=a._byCar.get(e);o&&this._event(["u",o.index,Do(n)]);break}case"hit":{const o=a._byCar.get(e);o&&this._event(["h",o.index,Uo(n)]);break}case"block":{const o=a._byCar.get(e);o&&this._event(["b",o.index,Uo(n)]);break}case"explode":e&&this._event(["e",oe(e.x),oe(e.y),oe(e.z)]);break;case"tow":{const o=a._byCar.get(e),l=a._byCar.get(n);o&&l&&this._event(["t",o.index,l.index,oe(s||0)]);break}}}effect(t,e,n,s,r,a,o,l,c,f,h){!t.pup||t.netId==null||(t.pup.hold=.35,this._event(["x",t.index,Uo(e),oe(n||0),oe(s||0),oe(r||0),oe(a||0),De(o||0),oe(l||0),oe(c||0),oe(f||0),oe(h||0)],t.netId))}end(t){for(;this.recent.length&&this.recent[0].at<this.wall-H_;)this.recent.shift();this.snapAcc+=t,this.snapAcc>=sa-ad&&(this.snapAcc-=sa,this.snapAcc>sa&&(this.snapAcc=0),this.race._emit("net",this.snapshot(),null))}snapshot(){const t=this.race,e=t.states,n=[];for(let a=0;a<e.length;a++){const o=e[a],l=sd(o.car,o.tp,o.wh);o.wh=0,l.push(De(o.progress)),n.push(l)}const s={t:"w",n:++this.n,c:De(this.wall),d:De(this.wall-t._clock),g:t._goClock>=0?De(t._goClock):-1,k:n};this.isWaiting&&(s.w=1),t.pickups&&(s.pk=t.pickups.mask());const r=t.weapons;if(r.rockets.length&&(s.r=r.rockets.map(a=>[a.id,oe(a.pos.x),oe(a.pos.y),oe(a.pos.z),De(a.ang),Zs(a.speed)])),r.marbles.length&&(s.m=r.marbles.map(a=>[a.id,oe(a.pos.x),oe(a.pos.y),oe(a.pos.z),De(a.dx),De(a.dz),Zs(a.speed)])),r.puddles.length){const a=[];for(const o of r.puddles)o.dying||a.push([o.id,oe(o.x),oe(o.y),oe(o.z)]);a.length&&(s.p=a)}return this.recent.length&&(s.e=this.recent.map(a=>a.e)),this.n%B_===1&&(s.q=this.seq,s.L=t.laps,s.s=e.map(a=>[a.lapsDone,Do(a.item),a.shieldTime>0?Zs(a.shieldTime):0,a.finished?us(a.finishTime):-1,us(a.bestLap),us(a.lastLap),De(a.lapStart),a.human?1:0,a.shrinkTime>0?Zs(a.shrinkTime):0,a.towTarget?a.towTarget.index:-1,a.towTime>0?Zs(a.towTime):0])),this.finalMsg&&(s.o=this.finalMsg),s}sendFinal(t){this.finalMsg=t.map(e=>[V_(this.race,e.car),e.finished?1:0,us(e.finishTime),us(e.bestLap),e.estimated?1:0,e.lapsDone|0]),this.race._emit("net",{t:"o",o:this.finalMsg},null)}receive(t,e){if(!t||typeof t!="object")return;const n=this.byId.get(e);if(n)switch(this.waiting.delete(e),t.t){case"s":{const s=t.n|0;if(s<=n.pupN&&s>n.pupN-1e5||!rd(t.s)||!n.pup)return;n.pupN=s;let r=ye(t.c)?t.c:this.wall-.05;r>this.wall?r=this.wall:r<this.wall-.5&&(r=this.wall-.5),r<=n.pup.lastT&&(r=n.pup.lastT+.001),n.pup.push(r,t.s),this._fireCount(n,t.f);break}case"f":this._fireCount(n,t.f);break;case"p":ye(t.k)&&this.race._emit("net",{t:"q",k:t.k,c:De(this.wall)},e);break}}_fireCount(t,e){ye(e)&&(e|=0,e>t.fireSeen&&(t.fireSeen=e,t.fireReq=1))}}function V_(i,t){const e=i._byCar.get(t);return e?e.index:-1}class W_{constructor(t,e){this.race=t,this.role="client",this.localId=e.localId!=null?e.localId:null,this.localSim=!0,this.local=0,this.off=0,this.offT=0,this.synced=!1,this.pinged=!1,this.rttMin=1/0,this.rtt=0,this.wallNow=0,this.d=0,this.g=-1,this.w=!1,this.holdClock=0,this.pingIn=0,this.sendAcc=ra,this.n=0,this.fireN=0,this.snapN=0,this.seen=new Set,this.maxSeq=0,this.itemHold=0,this.lastSnapAt=-1,this.hostId=null}update(t,e){const n=this.race,s=n.states,r=n.cars,a=n.track;this.local+=t,this.itemHold>0&&(this.itemHold-=t);const o=this.offT-this.off;if(o>.4||o<-.4)this.off=this.offT;else{const x=(n.state==="countdown"?.5:.1)*t;this.off+=o>x?x:o<-x?-x:o}const l=this.wallNow=this.local+this.off;let c=this.synced?this.w?this.holdClock:l-this.d:0;if(c<n._clock&&(c=n._clock),n._clock=c,n.state==="countdown"){n._cd=c;let x=n._cdStep;for(;x<3&&c>=n._countdownAt[x];)x++;if(x>n._cdStep&&(n._cdStep=x,n._emit("countdown",4-x)),!(c>=n._goAt||this.g>=0&&c>=this.g)){for(let m=0;m<s.length;m++){const y=s[m];y.car.frozen=!0,y.pup&&y.pup.advance(y.car,l,t),y.car.update(t,a)}n._updateFx(t),this._send(t);return}n.state="racing";for(let m=0;m<r.length;m++)r[m].frozen=!1;n._emit("go")}const f=c-(this.g>=0?this.g:n._goAt-.008);f>n.time&&(n.time=f);const h=n._pst,u=this.localSim;if(h.ai)h.ai.update(t,a,r);else if(e&&u){const x=h.car.controls;x.throttle=+e.throttle||0,x.steer=+e.steer||0,x.handbrake=!!e.handbrake}for(let x=0;x<s.length;x++){const p=s[x];p.pup&&(p.pup.advance(p.car,l,t),p.teleported=p.pup.snapped)}for(let x=0;x<r.length;x++)r[x].update(t,a);u&&(h.towTarget||h.slowTime>0)&&n._statusPhysics(h,t);const d=r.length>1?n._collideNet():0;u&&n._teleportCheck(h,t);for(let x=0;x<s.length;x++){const p=s[x],m=p.car.trackT;Number.isFinite(m)&&(p.lastT=m)}u&&n._wrongWay(h,t),n._rank();for(let x=0;x<s.length;x++)n._carFx(s[x],t);d>n._crashThreshold&&n._carImpact(d);const g=!!(e&&e.fire);g&&!n._prevFire&&u&&!h.ai&&!h.finished&&(this.fireN++,n._emit("net",{t:"f",f:this.fireN},null),h.item&&(h.item=null,this.itemHold=1)),n._prevFire=g,n._updateFx(t),this._send(t)}_send(t){const e=this.race;if(this.pingIn-=t,this.pingIn<=0&&(this.pingIn=this.local<5||!this.pinged?.2:.5,e._emit("net",{t:"p",k:De(this.local)},null)),!!this.localSim&&(this.sendAcc+=t,this.sendAcc>=ra-ad)){this.sendAcc-=ra,this.sendAcc>ra&&(this.sendAcc=0);const n=e._pst;e._emit("net",{t:"s",n:++this.n,c:De(this.wallNow),s:sd(n.car,n.tp,n.wh),f:this.fireN},null),n.wh=0}}receive(t,e){if(!(!t||typeof t!="object")&&!(t.t==="s"||t.t==="f"||t.t==="p")){if(e!=null){if(this.hostId==null)t.t==="w"&&(this.hostId=e);else if(e!==this.hostId)return}switch(t.t){case"w":this._snapshot(t);break;case"e":this._events(t.e);break;case"q":this._pong(t);break;case"o":this._final(t.o);break}}}_pong(t){if(!ye(t.k)||!ye(t.c))return;const e=this.local-t.k;if(!(e>=0&&e<2)||(this.rttMin=Math.min(e,this.rttMin+.002),this.pinged&&e>this.rttMin+.06))return;this.rtt=e;const n=t.c+e*.5-this.local;if(!this.pinged)this.pinged=!0,this.offT=n,this.race.state==="countdown"&&(this.off=n);else{const s=n-this.offT;this.offT=s>.12||s<-.12?n:this.offT+s*.2}}_snapshot(t){this._events(t.e);const e=t.n|0;if(!ye(t.c)||!(e>this.snapN||e<this.snapN-1e5))return;this.snapN=e;const n=this.race,s=n.states,r=t.c,a=r-this.local;if(this.synced?(this.pinged?a>this.offT+.02:a>this.offT)&&(this.offT=a):(this.synced=!0,this.pinged||(this.offT=a+.03,this.off=this.offT)),ye(t.d)&&(this.d=t.d),ye(t.g)&&(this.g=t.g),this.w=!!t.w,this.w&&(this.holdClock=r-this.d),this.lastSnapAt=this.local,Array.isArray(t.k))for(let o=0;o<s.length&&o<t.k.length;o++){const l=t.k[o],c=s[o];if(!rd(l))continue;c.pup&&c.pup.push(r,l);const f=l[12];ye(f)&&(c.progress=f,f>c.maxProgress&&(c.maxProgress=f))}n.pickups&&t.pk&&n.pickups.setMask(t.pk),n.weapons.sync(t.r,t.m,t.p,r),Array.isArray(t.s)&&this._slow(t),t.o&&this._final(t.o)}_slow(t){const e=this.race,n=e.states;ye(t.L)&&t.L>=1&&t.L<100&&(e.laps=t.L|0);const s=!ye(t.q)||t.q>=this.maxSeq;for(let r=0;r<n.length&&r<t.s.length;r++){const a=t.s[r],o=n[r];if(!Array.isArray(a)||a.length<8)continue;let l=!0;for(let c=0;c<8;c++)if(!ye(a[c])){l=!1;break}if(l){if(o.human=!!a[7],s&&(a[0]>o.lapsDone&&(o.lapsDone=a[0]|0),o.bestLap=a[4]>=0?a[4]:null,o.lastLap=a[5]>=0?a[5]:null,o.lapStart=a[6],o===e._pst&&this.itemHold>0||(o.item=tn[a[1]]||null),a[2]>0?o.shieldTime>0?o.shieldTime=a[2]:e.weapons._shield(o,a[2],!0):o.shieldTime>.3&&(o.shieldTime=0),a.length>=11&&ye(a[8])&&ye(a[9])&&ye(a[10]))){a[8]>0?o.shrinkTime>0?o.shrinkTime=Math.min(jl,a[8]):e.weapons._shrink(o,a[8]):o.shrinkTime>.3&&(o.shrinkTime=0);const c=a[9]>=0&&a[10]>0?n[a[9]|0]:null;c&&c!==o?o.towTarget!==c?e.weapons._latch(o,c,a[10]):o.towTime=Math.min(Yt.zaptow.time,a[10]):o.towTarget&&o.towTime>.3&&e.weapons._unlatch(o)}a[3]>=0&&!o.finished&&e._clientFinish(o,0,a[3])}}}_events(t){if(Array.isArray(t))for(let e=0;e<t.length&&e<256;e++){const n=t[e];if(!Array.isArray(n)||!ye(n[0])||typeof n[1]!="string")continue;const s=n[0];if(!this.seen.has(s)){if(this.seen.add(s),s>this.maxSeq&&(this.maxSeq=s),this.seen.size>600){const r=this.maxSeq-300;for(const a of this.seen)a<r&&this.seen.delete(a)}try{this._event(n)}catch{}}}}_event(t){const e=this.race,n=e.states,s=t[1];if(s==="e"){ye(t[2])&&ye(t[3])&&ye(t[4])&&e._emit("explode",ko.set(t[2],t[3],t[4]).clone(),"rocket");return}const r=n[t[2]];if(!r)return;const a=r.car;switch(s){case"l":{const o=t[3]|0;if(!(o>r.lapsDone)||!ye(t[4]))return;r.lapsDone=o,r.lastLap=t[4],(r.bestLap==null||t[4]<r.bestLap)&&(r.bestLap=t[4]),ye(t[6])&&(r.lapStart=t[6]),e._emit("lap",a,o,t[4],!!t[5]),o===e.laps-1&&e._emit("finalLap",a);break}case"f":e._clientFinish(r,t[3]|0,ye(t[4])&&t[4]>=0?t[4]:e.time);break;case"p":{const o=tn[t[3]];if(!o)return;r.item=o,r===e._pst&&(this.itemHold=0),e._emit("pickup",a,o);break}case"u":{const o=tn[t[3]];if(!o)return;r.item=null,r===e._pst&&(this.itemHold=0),o.id==="pulse"?e.weapons._pulse(r):o.id==="shield"?e.weapons._shield(r):o.id==="shockcloud"?e.weapons._stormFx(r):o.id==="pogo"&&e.weapons._pogoArm(r),e._emit("fire",a,o);break}case"h":{const o=tn[t[3]],l=o?o.id:"rocket";l==="shockcloud"&&e.weapons._shrink(r,Yt.shockcloud.time),e._hitFx(r,l),e._emit("hit",a,l);break}case"b":{const o=tn[t[3]];r.shieldTime=0,e._blockFx(r),e._emit("block",a,o?o.id:"rocket");break}case"t":{const o=ye(t[3])?n[t[3]|0]:null,l=aa(t[4]);if(!o||o===r||!(l>0))return;e.weapons._latch(r,o,l),e._emit("tow",a,o.car,l);break}case"x":{if(r!==e._pst||!this.localSim)return;const o=+t[4]||0,l=+t[5]||0,c=+t[6]||0,f=+t[7]||0,h=+t[8]||0,u=+t[9]||0;if(o>0&&(a.spinTime=Math.max(a.spinTime||0,Math.min(1.2,o))),h>0){const p=1-Math.min(.9,h);a.vel.x*=p,a.vel.z*=p}(c||f)&&a.applyImpulse(ko.set(Math.max(-30,Math.min(30,c)),0,Math.max(-30,Math.min(30,f)))),l>0&&a.launch(Math.min(16,l)),u>0&&(a.boostTime=Math.max(a.boostTime||0,Math.min(5,u)));const d=aa(t[10]),g=aa(t[11]),x=aa(t[12]);if(d>0&&g>0&&g<1&&(r.slowTime=Math.min(jl,d),r.slowFactor=Math.max(.4,g)),x>0){const p=Math.min(15,x);a.applyImpulse(ko.set(Math.sin(a.heading)*p,0,Math.cos(a.heading)*p))}break}}}_final(t){const e=this.race,n=e.states;if(e._final||!Array.isArray(t))return;const s=[],r=new Set;for(let a=0;a<t.length;a++){const o=t[a];if(!Array.isArray(o))continue;const l=n[o[0]];!l||r.has(l)||(r.add(l),s.push(e._standingEntry(l,s.length+1,!!o[1],o[2]>=0?o[2]:null,!!o[4],o[3]>=0?o[3]:null,o[5]|0)))}for(const a of e._order)r.has(a)||s.push(e._standingEntry(a,s.length+1,a.finished,a.finishTime,!1,a.bestLap,a.lapsDone));e._final=s,e._raceOverFired=!0,e._goAutopilot(),e._emit("raceOver",e.standings())}}const X_=["Zippy Zoe","Sprocket Sam","Captain Cog","Nitro Nell","Dizzy Dax","Pip Piston","Wobbly Wes","Turbo Tam","Bolt Benny","Lulu Lugnut","Axel Fizz","Greta Grip"],Cf=[.2,1.2,2.2],Rf=3.2,No=1.6,Pf=[.45,.68,.88],zo=4,q_=1,Y_=20,j_=["#ff5a3c","#3c8dff","#ffd23f","#41d67a","#c05cff","#ff8ad1","#3fe0d0","#f2f2f2"],Z_=new N;function oa(i,t){for(let e=i.length-1;e>0;e--){const n=t()*(e+1)|0,s=i[e];i[e]=i[n],i[n]=s}return i}function Fo(i,t,e,n,s,r,a){const o=s-i.x,l=r-i.z,c=o*t+l*e,f=o*e-l*t;return c>a&&c<n&&f>-1.6&&f<1.6}function $_(i,t){return i.finished!==t.finished?i.finished?-1:1:i.finished?i.finishTime-t.finishTime||i.index-t.index:t.progress-i.progress||i.index-t.index}class K_{constructor(t,e){const{scene:n,track:s,playerCarId:r,playerName:a="Player",laps:o=3,opponents:l=0,difficulty:c=1,mode:f="race"}=t;this.deps=e,this.scene=n,this.track=s,this.mode=f==="timetrial"?"timetrial":"race",this.laps=Math.max(1,o|0),this.difficulty=Math.min(2,Math.max(0,c|0)),this.random=t.random||Math.random,this.state="countdown",this.time=0,this.cars=[],this.states=[],this._byCar=new Map,this._order=[],this._listeners=new Map,this._cd=0,this._cdStep=0,this._clock=0,this._overTimer=-1,this._raceOverFired=!1,this._final=null,this._finishedCount=0,this._disposed=!1,this._prevFire=!1,this._goClock=-1,this._nextId=0,this._countdownAt=Cf,this._goAt=Rf,this._crashThreshold=zo,this._pair=[null,null];const h=t.net&&(t.net.role==="host"||t.net.role==="client")&&this.mode!=="timetrial"?t.net:null;this.netRole=h?h.role:null,this._replica=this.netRole==="client",this._net=null;const u=this.random,{Car:d,AIDriver:g,CARS:x}=e,p=s.startGrid||[],m=this.netRole==="host"&&Array.isArray(h.remotes)?h.remotes.filter(E=>E&&E.id!=null&&E.id!==h.localId).slice(0,7):[],y=this.mode==="timetrial"?0:Math.min(7,Math.max(0,l|0,m.length),Math.max(0,p.length-1,m.length)),v=y+1;this.root=new hn,this.root.name="race-fx",n.add(this.root),this.fx=new gf(1600,!0),this.smoke=new gf(700,!1),this.root.add(this.smoke.points,this.fx.points);const _=x&&x.length?x:[{id:r,name:String(r)}];if(this._replica)this._net=new W_(this,h),this._buildFromRoster(h,_,p);else{const E=_.some(F=>F.id===r)?r:_[0].id,w=Math.min(v-1,Math.max(0,t.playerGridSlot!=null?t.playerGridSlot|0:v-1)),S=new d(E,{name:a,isPlayer:!0});this.player=S,this._pst=this._addCar(S,null),this._pst.human=!t.autopilot;const A=new Set([E]);if(this.netRole==="host"){this._net=new G_(this,h),this._pst.netId=h.localId!=null?h.localId:null;const F=new Set([String(S.color||"").toLowerCase()]);for(const H of m){const G=_.some(tt=>tt.id===H.carId)?H.carId:_[0].id,Y=_.find(tt=>tt.id===G);let W;F.has(String(Y.color||"").toLowerCase())&&(W=j_.find(tt=>!F.has(tt))||void 0);const V=new d(G,{name:String(H.name||"Player").slice(0,24),isPlayer:!1,color:W});F.add(String(V.color||W||Y.color||"").toLowerCase()),A.add(G);const Q=this._addCar(V,null);Q.human=!0,Q.netId=H.id,Q.pup=new Af,V.puppet=!0,this._net.addRemote(Q)}}const b=y-(this.states.length-1);let M=oa(_.filter(F=>!A.has(F.id)).map(F=>F.id),u);M.length||(M=oa(_.filter(F=>F.id!==E).map(F=>F.id),u)),M.length||(M=[E]);const P=oa(X_.slice(),u),z=Pf[this.difficulty];for(let F=0;F<b;F++){const H=new d(M[F%M.length],{name:P[F%P.length],isPlayer:!1}),G=Math.min(1,Math.max(.05,z+.07-.14*F/Math.max(1,b-1)+(u()-.5)*.06)),Y=new g(H,{skill:G});this._addCar(H,Y).skill=G}t.autopilot&&(this.states[0].ai=new g(S,{skill:z}));let U=0;this.netRole==="host"&&this.states.filter(H=>!H.human).concat(oa(this.states.filter(H=>H.human),u)).forEach((H,G)=>{H.gridSlot=G});for(let F=0;F<this.states.length;F++){const H=this.states[F];let G;this.netRole==="host"?G=H.gridSlot:F===0?G=w:(U===w&&U++,G=U++),H.gridSlot=G}}for(let E=0;E<this.states.length;E++){const w=this.states[E],S=w.gridSlot;{const A=p[S]||p[p.length-1],b=w.car;A&&b.placeAt(A.pos,A.heading,s),b.frozen=!0;let M=b.trackT;!Number.isFinite(M)&&A&&(M=s.project(A.pos).t),Number.isFinite(M)||(M=0),w.lastT=M,w.progress=M>.5?M-1:M,w.maxProgress=w.progress,w.px=b.pos.x,w.pz=b.pos.z,n.add(b.mesh)}}this._rank(),this.weapons=new z_(this),this.pickups=this.mode!=="timetrial"&&s.pickupSpots&&s.pickupSpots.length?new N_(this,s.pickupSpots):null}_addCar(t,e){const n={car:t,ai:e,index:this.states.length,skill:0,gridSlot:0,progress:0,maxProgress:0,lastT:0,jumpTime:0,lapsDone:0,lapStart:0,bestLap:null,lastLap:null,finished:!1,finishTime:null,estimated:!1,position:this.states.length+1,item:null,itemHeld:0,aiFireAt:0,wrongWay:!1,wrongTimer:0,shieldTime:0,shieldMesh:null,hitImmune:0,wasBoosting:!1,crashCd:0,flameAcc:0,smokeAcc:0,slowTime:0,slowFactor:1,slowImmune:0,shrinkTime:0,scaleVis:1,cloudMesh:null,cloudAcc:0,towTarget:null,towTime:0,towMesh:null,pogo:0,pogoT:0,human:!1,netId:null,pup:null,pupN:0,tp:0,wh:0,px:0,pz:0,teleported:!1,fireReq:0,fireSeen:0};return this.states.push(n),this._order.push(n),this.cars.push(t),this._byCar.set(t,n),n}_buildFromRoster(t,e,n){const{Car:s}=this.deps,r=(Array.isArray(t.roster)?t.roster:[]).filter(o=>o&&typeof o=="object").slice().sort((o,l)=>(o.index|0)-(l.index|0)).slice(0,8);let a=null;if(r.forEach((o,l)=>{const c=e.some(d=>d.id===o.carId)?o.carId:e[0].id,f=!a&&t.localId!=null&&o.netId===t.localId,h=new s(c,{name:String(o.name||"Racer").slice(0,24),isPlayer:f,color:typeof o.color=="string"?o.color:void 0}),u=this._addCar(h,null);u.human=o.kind==="human",u.netId=o.netId!=null?o.netId:null,u.gridSlot=Number.isFinite(o.slot)?Math.max(0,Math.min(n.length-1,o.slot|0)):l,f?a=u:(u.pup=new Af,h.puppet=!0)}),!this.states.length){const o=new s(e[0].id,{name:"Player",isPlayer:!0});a=this._addCar(o,null),a.human=!0}a||(this._net.localSim=!1,a=this.states[0]),this._pst=a,this.player=a.car}getRoster(){return this.states.slice().sort((t,e)=>t.gridSlot-e.gridSlot).map(t=>({index:t.index,name:t.car.name,carId:t.car.def&&t.car.def.id,kind:t.human?"human":"bot",netId:t.netId!=null?t.netId:null,color:t.car.color||t.car.def&&t.car.def.color||null,slot:t.gridSlot}))}netReceive(t,e){if(!(this._disposed||!this._net))try{this._net.receive(t,e)}catch{}}dropRemote(t){const e=this._net;if(this._disposed||!e||e.role!=="host")return!1;const n=e.byId.get(t);return n?(e.byId.delete(t),e.waiting.delete(t),n.pup=null,n.human=!1,n.netId=null,n.fireReq=0,n.car.puppet=!1,n.px=n.car.pos.x,n.pz=n.car.pos.z,n.ai=new this.deps.AIDriver(n.car,{skill:n.finished?.55:Pf[this.difficulty]}),n.skill=n.ai.skill||0,this._mpCheckOver(),!0):!1}on(t,e){let n=this._listeners.get(t);return n||this._listeners.set(t,n=[]),n.push(e),()=>this.off(t,e)}off(t,e){const n=this._listeners.get(t);if(!n)return;const s=n.indexOf(e);s>=0&&n.splice(s,1)}_emit(t,e,n,s,r){this.netRole==="host"&&t!=="net"&&this._net.forward(t,e,n,s,r);const a=this._listeners.get(t);if(a)for(let o=0;o<a.length;o++)a[o](e,n,s,r)}info(t){const e=this._byCar.get(t);if(!e)return null;const n=this.state!=="countdown";return{lap:Math.min(e.lapsDone+1,this.laps),laps:this.laps,position:e.position,total:this.states.length,lapTime:e.finished?e.lastLap||0:n?Math.max(0,this.time-e.lapStart):0,bestLap:e.bestLap,lastLap:e.lastLap,item:e.item,wrongWay:e.wrongWay,finished:e.finished,finishTime:e.finishTime,progress:e.maxProgress,shield:e.shieldTime>0,boosting:(t.boostTime||0)>0,slowed:e.slowTime>0,shrunk:e.shrinkTime>0,towing:!!e.towTarget}}standings(){return this._final?this._final.map(t=>({...t})):this._buildStandings(!1)}_buildStandings(t){const e=[];let n=0;for(let s=0;s<this._order.length;s++){const r=this._order[s];let a=r.finished,o=r.finishTime,l=!1;if(!a&&t){const c=this.time/Math.max(.05,r.progress+.02);let f=Math.min(this.time*3+30,c*this.laps);f=Math.max(f,this.time+.4,n+.15),a=!0,l=!0,o=f}o!=null&&(n=o),e.push(this._standingEntry(r,s+1,a,o,l,r.bestLap,r.lapsDone))}return e}_standingEntry(t,e,n,s,r,a,o){return{car:t.car,name:t.car.name,carName:t.car.def&&t.car.def.name?t.car.def.name:"",position:e,finished:n,finishTime:s,bestLap:a,isPlayer:!!t.car.isPlayer,estimated:r,lapsDone:o,isHuman:!!t.human,index:t.index}}giveItem(t,e){const n=this._byCar.get(t),s=id[e];return!n||!s?!1:(n.item=s,n.itemHeld=0,n.aiFireAt=1+this.random()*3,!0)}useItem(t){const e=this._byCar.get(t);return e?this._fire(e):null}update(t,e){if(this._disposed)return;t>0||(t=0),t>.05&&(t=.05);const n=this._net;if(n&&n.role==="client"){n.update(t,e);return}const s=this.states,r=this.cars,a=this.track;if(n&&n.begin(t)&&this.state==="countdown"){for(let h=0;h<r.length;h++)r[h].frozen=!0,r[h].update(t,a);this._updateFx(t),n.end(t);return}if(this._clock+=t,this.state==="countdown"){for(this._cd+=t;this._cdStep<3&&this._cd>=Cf[this._cdStep];)this._emit("countdown",3-this._cdStep),this._cdStep++;if(this._cd<Rf){for(let h=0;h<r.length;h++)r[h].frozen=!0,s[h].pup&&s[h].pup.advance(r[h],n.wall,t),r[h].update(t,a);this._updateFx(t),n&&n.end(t);return}this.state="racing",this._goClock=this._clock-t;for(let h=0;h<r.length;h++)r[h].frozen=!1;this._emit("go")}this.time+=t;const o=this._pst,l=n?this._humanProgress():o.progress;for(let h=0;h<s.length;h++){const u=s[h];if(u.pup)u.pup.advance(u.car,n.wall,t),u.pup.snapped?(u.tp=u.tp+1&15,u.teleported=!0):u.teleported=!1;else if(u.ai)"playerProgressDelta"in u.ai&&(u.ai.playerProgressDelta=u.progress-l),u.ai.update(t,a,r);else if(e&&u===o){const d=u.car.controls;d.throttle=+e.throttle||0,d.steer=+e.steer||0,d.handbrake=!!e.handbrake}}for(let h=0;h<r.length;h++)r[h].update(t,a);for(let h=0;h<s.length;h++)!s[h].pup&&(s[h].towTarget||s[h].slowTime>0)&&this._statusPhysics(s[h],t);const c=r.length>1?n?this._collideNet():this.deps.resolveCarCollisions(r)||0:0;if(n)for(let h=0;h<s.length;h++)s[h].pup||this._teleportCheck(s[h],t);for(let h=0;h<s.length;h++)this._updateProgress(s[h],t);this._rank();for(let h=0;h<s.length;h++)this._carFx(s[h],t);c>zo&&this._carImpact(c);const f=!!(e&&e.fire);f&&!this._prevFire&&!o.ai&&!o.finished&&this._fire(o),this._prevFire=f;for(let h=0;h<s.length;h++){const u=s[h];u.hitImmune>0&&(u.hitImmune-=t),u.ai?this._aiItems(u,t):u.fireReq&&(u.fireReq=0,u.pup&&!u.finished&&this._fire(u))}this._updateFx(t),this._overTimer>=0&&!this._raceOverFired&&(this._overTimer-=t,this._overTimer<=0&&(this._raceOverFired=!0,this._final=this._buildStandings(!0),n&&(this._goAutopilot(),n.sendFinal(this._final)),this._emit("raceOver",this.standings()))),n&&n.end(t)}_humanProgress(){let t=0,e=0;for(let n=0;n<this.states.length;n++){const s=this.states[n];s.human&&!s.finished&&(t+=s.progress,e++)}return e?t/e:this._pst.progress}_collideNet(){const t=this.states,e=this.deps.resolveCarCollisions,n=this._pair;let s=0,r=0;const a=this._sims||(this._sims=[]);a.length=0;for(let o=0;o<t.length;o++)t[o].pup||a.push(t[o].car);if(r=a.length,r>1&&(s=e(a)||0),r===t.length)return s;for(let o=0;o<t.length;o++){if(!t[o].pup)continue;const l=t[o].car,c=l.pos.x,f=l.pos.y,h=l.pos.z,u=l.vel.x,d=l.vel.y,g=l.vel.z;for(let x=0;x<r;x++){const p=a[x],m=p.pos.x-c,y=p.pos.z-h,v=(p.radius||1)+(l.radius||1);if(m*m+y*y>v*v)continue;n[0]=p,n[1]=l;const _=e(n)||0;_>s&&(s=_),l.pos.x=c,l.pos.y=f,l.pos.z=h,l.vel.x=u,l.vel.y=d,l.vel.z=g}}return n[0]=n[1]=null,s}_teleportCheck(t,e){const n=t.car,s=n.pos.x-t.px,r=n.pos.z-t.pz,a=4+1.5*Math.hypot(n.vel.x,n.vel.z)*e;t.teleported=s*s+r*r>a*a,t.teleported&&(t.tp=t.tp+1&15),t.px=n.pos.x,t.pz=n.pos.z}_goAutopilot(){const t=this._pst;this.state="finished",!t.ai&&!t.pup&&(t.ai=new this.deps.AIDriver(t.car,{skill:.55}))}_mpCheckOver(){if(this._raceOverFired||this.netRole!=="host")return;let t=0,e=0;for(let n=0;n<this.states.length;n++){const s=this.states[n];s.human&&(t++,s.finished&&e++)}if(!(!e&&t))if(e>=t){if(this.state==="countdown")return;this._overTimer=this._overTimer<0?No:Math.min(this._overTimer,No)}else this._overTimer<0&&(this._overTimer=Y_)}_clientFinish(t,e,n){t.finished||(t.finished=!0,t.finishTime=n,t.item=null,t.wrongWay=!1,this._finishedCount=Math.max(this._finishedCount+1,e|0),this._emit("finish",t.car,e>0?e:this._finishedCount),t===this._pst&&this._finishFx(t))}_finishFx(t){this.state="finished",!t.ai&&!t.pup&&(t.ai=new this.deps.AIDriver(t.car,{skill:.55}));const e=t.car.pos;this.fx.burst(e.x,e.y+1,e.z,60,14,1.1,.6,.1,1,.85,.3,1,9,.8,.9,this.random)}_updateFx(t){this.pickups&&this.pickups.update(t,this._clock),this.weapons.update(t,this._clock),this.fx.update(t),this.smoke.update(t)}_updateProgress(t,e){const n=t.car,s=this.track;let r=n.trackT;if(!Number.isFinite(r)){const c=s.project(n.pos,t.lastT);if(r=c?c.t:NaN,!Number.isFinite(r))return}let a=r-t.lastT;a>.5?a-=1:a<-.5&&(a+=1);const o=Math.max(.01,160*e/(s.length||500));let l=!0;if(Math.abs(a)>o&&(t.jumpTime+=e,t.jumpTime<(a<0?.4:1.5)&&(l=!1)),l)for(t.jumpTime=0,t.lastT=r,t.progress+=a,t.progress>t.maxProgress&&(t.maxProgress=t.progress);!t.finished&&t.progress>=t.lapsDone+1;){const c=t.lapsDone+1,f=a>1e-9?Math.min(1,Math.max(0,(t.progress-c)/a)):0,h=this.time-e*f,u=h-t.lapStart;t.lapStart=h,t.lapsDone=c,t.lastLap=u;const d=t.bestLap==null||u<t.bestLap;d&&(t.bestLap=u),this._emit("lap",n,c,u,d),c>=this.laps?(t.finished=!0,t.finishTime=h,this._finishedCount++,this._onFinish(t)):c===this.laps-1&&this._emit("finalLap",n)}this._wrongWay(t,e)}_wrongWay(t,e){const n=t.car,s=this.track;let r=!1;if(!t.finished&&n.speed>2.5&&!(n.spinTime>0)){const a=s.sample(t.lastT),o=a&&a.tangent;o&&(r=Math.sin(n.heading)*o.x+Math.cos(n.heading)*o.z<-.25)}r?(t.wrongTimer+=e,t.wrongTimer>q_&&(t.wrongWay=!0)):(t.wrongTimer=0,t.wrongWay=!1)}_onFinish(t){const e=t.car;t.item=null,t.wrongWay=!1,this._emit("finish",e,this._finishedCount),t===this._pst&&(this._finishFx(t),this._net||(this._overTimer=No)),this._net&&this._mpCheckOver()}_rank(){const t=this._order;t.sort($_);for(let e=0;e<t.length;e++)t[e].position=e+1}_boostBurst(t){const e=t.car.pos,n=t.car.heading;this.fx.burst(e.x-Math.sin(n),e.y+.4,e.z-Math.cos(n),18,8,.4,.8,.1,.4,.8,1,1,0,2,.4,this.random)}_carFx(t,e){const n=t.car,s=this.random,r=this.fx,a=n.heading,o=Math.sin(a),l=Math.cos(a),c=l,f=-o,h=n.pos,u=n.boostTime>0;if(u&&!t.wasBoosting&&(this._boostBurst(t),this._emit("boost",n)),t.wasBoosting=u,u){t.flameAcc+=e*90;const g=n.vel?n.vel.x:0,x=n.vel?n.vel.z:0;for(;t.flameAcc>=1;){t.flameAcc-=1;const p=s()<.5?-.32:.32,m=s();r.emit(h.x-o*1.05+c*p,h.y+.38,h.z-l*1.05+f*p,g*.35-o*(5+s()*5)+(s()-.5)*1.5,(s()-.3)*1.5,x*.35-l*(5+s()*5)+(s()-.5)*1.5,.16+s()*.14,.75,.12,m<.3?.5:1,m<.3?.8:.45+m*.4,m<.3?1:.12,1,0,0)}}else t.flameAcc=0;if(n.drifting&&n.onGround!==!1&&Math.abs(n.speed)>6)for(t.smokeAcc+=e*34;t.smokeAcc>=1;){t.smokeAcc-=1;const g=s()<.5?-.5:.5,x=.8+s()*.15;this.smoke.emit(h.x-o*.8+c*g,h.y+.15,h.z-l*.8+f*g,(s()-.5)*1.5,.8+s()*.9,(s()-.5)*1.5,.55+s()*.35,.5,2.1,x,x,x,.32,0,1.2)}else t.smokeAcc=0;t.crashCd>0&&(t.crashCd-=e);let d=n.wallHit;if(t.pup&&(d=t.pup.wallHit,t.pup.wallHit=0),this._net&&d>t.wh&&(t.wh=d),d>1.5){const g=Math.min(14,2+(d|0)),x=s()*Math.PI*2;r.burst(h.x+Math.sin(x)*.6,h.y+.35,h.z+Math.cos(x)*.6,g,6+d*.5,.35,.28,.04,1,.8,.35,1,16,.5,.6,s),d>zo&&t.crashCd<=0&&!t.pup&&(t.crashCd=.3,this._emit("crash",n,d))}}_carImpact(t){const e=this.states,n=this.random;for(let s=0;s<e.length;s++)for(let r=s+1;r<e.length;r++){const a=e[s],o=e[r],l=o.car.pos.x-a.car.pos.x,c=o.car.pos.z-a.car.pos.z,f=(a.car.radius||1)+(o.car.radius||1)+.25;l*l+c*c>f*f||a.crashCd>0&&o.crashCd>0||a.pup&&o.pup||(this.fx.burst(a.car.pos.x+l*.5,a.car.pos.y+.45,a.car.pos.z+c*.5,Math.min(12,3+(t|0)),6+t*.4,.3,.28,.04,1,.85,.4,1,16,.5,.6,n),a.crashCd<=0&&(a.crashCd=.3,a.pup||this._emit("crash",a.car,t)),o.crashCd<=0&&(o.crashCd=.3,o.pup||this._emit("crash",o.car,t)))}}_givePickup(t){t.item=I_(t.position,this.states.length,this.random),t.itemHeld=0,t.aiFireAt=1+this.random()*3,this._emit("pickup",t.car,t.item)}_fire(t){const e=t.item;return!e||this.state==="countdown"?null:(t.item=null,t.itemHeld=0,this.weapons.use(t,e.id),this._emit("fire",t.car,e),e)}_hit(t,e,n,s,r,a,o){if(t.hitImmune>0)return 0;const l=t.car;return t.shieldTime>0?(t.shieldTime=0,t.hitImmune=.6,this._blockFx(t),this._emit("block",l,e),2):(t.hitImmune=1.8,l.spinTime=Math.max(l.spinTime||0,Math.min(1.2,n)),t.pup&&this._net?this._net.effect(t,e,Math.min(1.2,n),s,o?0:r,o?0:a,o||0,0):((r||a)&&l.applyImpulse(Z_.set(r||0,0,a||0)),s>0&&l.launch(s)),this._hitFx(t,e),this._emit("hit",l,e),1)}_slowHit(t,e,n,s,r){if(t.hitImmune>0||t.slowImmune>0)return 0;const a=t.car;return t.shieldTime>0?(t.shieldTime=0,t.hitImmune=.6,this._blockFx(t),this._emit("block",a,e),2):(n=Math.min(jl,n),t.hitImmune=.5,t.slowImmune=n+L_,t.slowTime=n,t.slowFactor=Math.min(1,Math.max(.4,s)),r&&this.weapons._shrink(t,n),t.pup&&this._net&&this._net.effect(t,e,0,0,0,0,0,0,n,t.slowFactor,0),this._hitFx(t,e),this._emit("hit",a,e),1)}_statusPhysics(t,e){const n=t.car,s=n.vel,r=n.def&&n.def.topSpeed||35,a=t.towTarget;if(a&&!(n.spinTime>0)){const o=Yt.zaptow,l=a.car.pos.x-n.pos.x,c=a.car.pos.z-n.pos.z,f=Math.hypot(l,c);if(f>3.5){const h=l/f,u=c/f,d=s.x*h+s.z*u,g=r*o.top;if(d<g){const x=Math.min(o.pull*e,g-d);s.x+=h*x,s.z+=u*x,n.speed+=x*(h*Math.sin(n.heading)+u*Math.cos(n.heading))}}}if(t.slowTime>0){const o=r*t.slowFactor,l=Math.hypot(s.x,s.z);if(l>o){const c=Math.max(o,l-70*e)/l;s.x*=c,s.z*=c,n.speed*=c}}}_blockFx(t){const e=t.car.pos;this.fx.burst(e.x,e.y+.6,e.z,30,11,.5,.5,.08,.5,.92,1,1,5,1.5,.5,this.random)}_hitFx(t,e){const n=t.car.pos,s=e==="glue"?0:1;if(e==="zaptow"){this.fx.burst(n.x,n.y+.6,n.z,10,5,.35,.4,.08,.5,.75,1,1,0,2,.5,this.random);return}this.fx.burst(n.x,n.y+.6,n.z,20,9,.5,.5,.08,s?1:.5,s?.9:1,s?.4:.3,1,10,1,.7,this.random)}_targetAhead(t,e){let n=null,s=e;for(let r=0;r<this.states.length;r++){const a=this.states[r];if(a===t)continue;let o=(a.progress-t.progress)%1;o<0&&(o+=1),o<s&&(s=o,n=a)}return n}_nearestOther(t){let e=1/0;const n=t.car.pos;for(let s=0;s<this.states.length;s++){const r=this.states[s];if(r===t)continue;const a=r.car.pos.x-n.x,o=r.car.pos.z-n.z,l=a*a+o*o;l<e&&(e=l)}return Math.sqrt(e)}_aiItems(t,e){const n=t.ai,s=!!n.wantsToFire;if(s&&(n.wantsToFire=!1),!t.item||t.finished||t.car.spinTime>0||(t.itemHeld+=e,t.itemHeld<.6))return;const r=t.item.id,a=this.track.length||500,o=t.itemHeld>=t.aiFireAt;let l=!1;if(r==="rocket"||r==="marble")l=this._targetAhead(t,70/a)&&(s||o)||t.itemHeld>9;else if(r==="glue"){let c=!1;for(let f=0;f<this.states.length&&!c;f++){const h=this.states[f];if(h===t)continue;let u=(t.progress-h.progress)%1;u<0&&(u+=1),c=u<30/a}l=c&&(s||o)||t.itemHeld>7}else if(r==="pulse")l=this._nearestOther(t)<8.5||t.itemHeld>12;else if(r==="shield")l=o||s;else if(r==="turbo")l=(s||o)&&Math.abs(t.car.controls.steer||0)<.35&&!(t.car.boostTime>0),t.itemHeld>8&&(l=!0);else if(r==="zaptow"){const c=this.weapons._towTarget(t);if(c){const f=c.car.pos.x-t.car.pos.x,h=c.car.pos.z-t.car.pos.z;l=f*f+h*h>64&&!(c.shieldTime>0&&t.itemHeld<4)}t.itemHeld>12&&(l=!0)}else r==="shockcloud"?(l=t.position>1&&(o||s||t.position>3),t.itemHeld>15&&(l=!0)):r==="pogo"&&(l=this._aiPogo(t,o&&s)||t.itemHeld>10,l&&!this._straightAhead(t)&&(l=t.itemHeld>14));l&&this._fire(t)}_straightAhead(t){const e=t.car,n=this.track,s=n.length||500;if(e.onGround===!1||Math.abs(e.controls.steer||0)>.3)return!1;const r=Math.sin(e.heading),a=Math.cos(e.heading),o=n.sample((t.lastT+Math.max(26,Math.abs(e.speed||0)*1.1)/s)%1),l=o&&o.tangent;return!l||r*l.x+a*l.z>.9}_aiPogo(t,e){const n=t.car,s=n.def&&n.def.topSpeed||35;if(!(n.speed>s*.45))return!1;const r=n.pos,a=Math.sin(n.heading),o=Math.cos(n.heading),l=4+n.speed*.3,c=this.states,f=this.weapons;for(let h=0;h<c.length;h++){const u=c[h];if(u!==t&&Fo(r,a,o,l,u.car.pos.x,u.car.pos.z,2.5)&&(u.car.speed||0)<n.speed-1)return!0}for(let h=0;h<f.puddles.length;h++)if(!f.puddles[h].dying&&Fo(r,a,o,l,f.puddles[h].x,f.puddles[h].z,2.5))return!0;for(let h=0;h<f.marbles.length;h++)if(Fo(r,a,o,l,f.marbles[h].pos.x,f.marbles[h].pos.z,1.5))return!0;return e}dispose(){if(!this._disposed){this._disposed=!0,this.pickups&&this.pickups.dispose(),this.weapons.dispose(),this.fx.dispose(),this.smoke.dispose(),this.root.traverse(t=>{t.geometry&&t.geometry.dispose&&t.geometry.dispose();const e=t.material;Array.isArray(e)?e.forEach(n=>n.dispose&&n.dispose()):e&&e.dispose&&e.dispose()}),this.root.clear(),this.scene.remove(this.root);for(const t of this.cars)t.mesh&&(t.mesh.parent?t.mesh.parent.remove(t.mesh):this.scene.remove(t.mesh)),typeof t.dispose=="function"&&t.dispose();this._listeners.clear()}}}class J_ extends K_{constructor(t){super(t,{Car:E_,AIDriver:R_,CARS:Wi,resolveCarCollisions:P_,...t&&t.deps})}}const Lf="tr-ui-style",Q_=`
.tr-root{
  --ink:#0b0f22; --navy:#141b3a; --panel:rgba(14,19,44,.82); --line:rgba(255,255,255,.13);
  --cream:#fff6e0; --muted:#a9b3d6; --orange:#ff6b1a; --orange-d:#c2410c; --yellow:#ffd02e;
  --teal:#19d3c5; --pink:#ff3d77; --green:#6ee06a;
  --display:"Arial Black","Avenir Next Heavy","Segoe UI Black","Helvetica Neue",Impact,system-ui,sans-serif;
  --body:"Avenir Next","Segoe UI",system-ui,-apple-system,"Helvetica Neue",Arial,sans-serif;
  --sat:env(safe-area-inset-top,0px); --sar:env(safe-area-inset-right,0px); --sab:env(safe-area-inset-bottom,0px); --sal:env(safe-area-inset-left,0px);
  --tb:max(44px,3.3em);
  position:absolute; inset:0; overflow:hidden; pointer-events:none; z-index:10;
  font-family:var(--body); font-size:clamp(11px,1.9cqmin,27px); line-height:1.25; color:var(--cream);
  -webkit-font-smoothing:antialiased; user-select:none; -webkit-user-select:none; -webkit-touch-callout:none; -webkit-tap-highlight-color:transparent;
  -webkit-text-size-adjust:100%; text-size-adjust:100%;
}
/* stage rotated 90deg clockwise: stage left = screen top, stage top = screen right, stage right = screen bottom, stage bottom = screen left */
html.tr-rotated .tr-root{--sal:env(safe-area-inset-top,0px); --sat:env(safe-area-inset-right,0px); --sar:env(safe-area-inset-bottom,0px); --sab:env(safe-area-inset-left,0px)}
.tr-root *{box-sizing:border-box}
.tr-layer{position:absolute; inset:0; display:none}
.tr-layer.on{display:block}
.tr-disp{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; letter-spacing:.02em}

/* ------------------------------------------------------------------ logo */
.tr-logo{display:inline-flex; flex-direction:column; align-items:flex-start; font-family:var(--display); font-weight:900; font-style:italic; line-height:.9; filter:drop-shadow(0 .06em .08em rgba(0,0,0,.45))}
.tr-logo-toyz{display:inline-flex; gap:.04em; background:var(--yellow); color:var(--ink); font-size:.36em; letter-spacing:.14em; padding:.2em .5em .16em .6em; border:.14em solid var(--ink); border-radius:.3em; transform:rotate(-5deg) translate(.5em,.34em); box-shadow:.14em .16em 0 var(--ink); position:relative; z-index:2}
.tr-logo-toyz::before{content:""; position:absolute; left:.22em; top:50%; width:.2em; height:.2em; margin-top:-.1em; border-radius:50%; background:var(--ink); opacity:.85}
.tr-logo-toyz span:first-child{margin-left:.3em}
.tr-logo-race{display:flex; align-items:baseline; color:var(--cream); letter-spacing:-.02em; -webkit-text-stroke:.07em var(--ink); paint-order:stroke fill;
  text-shadow:.025em .03em 0 var(--orange),.05em .06em 0 var(--orange),.075em .09em 0 var(--orange),.1em .12em 0 var(--orange-d),.125em .15em 0 var(--ink),.15em .18em 0 var(--ink)}
.tr-logo-race span{display:inline-block}
.tr-logo-race span:nth-child(1){transform:rotate(-4deg)}
.tr-logo-race span:nth-child(2){transform:rotate(3deg) translateY(.02em)}
.tr-logo-race span:nth-child(3){transform:rotate(-2deg) translateY(-.02em); color:var(--yellow)}
.tr-logo-race span:nth-child(4){transform:rotate(2deg) translateY(.015em)}
.tr-logo-o{width:.84em; height:.84em; margin:0 .05em 0 .03em; align-self:center; transform:translateY(.015em); filter:drop-shadow(.055em .07em 0 var(--ink))}
.tr-logo-o svg{width:100%; height:100%; display:block; animation:tr-spin 5s linear infinite}
.tr-logo-strip{align-self:stretch; height:.11em; margin:.1em .1em 0 .15em; border-radius:.03em; border:.03em solid var(--ink); transform:skewX(-14deg);
  background:repeating-linear-gradient(90deg,var(--ink) 0 .11em,var(--cream) .11em .22em)}
@keyframes tr-spin{to{transform:rotate(360deg)}}

/* ------------------------------------------------------------------ menu shell */
.tr-menu{pointer-events:none}
.tr-screen{position:absolute; inset:0; display:none; pointer-events:none}
.tr-screen.on{display:block; animation:tr-fade .28s ease-out}
@keyframes tr-fade{from{opacity:0}to{opacity:1}}
.tr-screen.tr-left::before{content:""; position:absolute; inset:0; background:linear-gradient(90deg,rgba(8,11,28,.9) 0%,rgba(8,11,28,.72) 30%,rgba(8,11,28,.25) 50%,rgba(8,11,28,0) 62%)}
.tr-screen.tr-center::before{content:""; position:absolute; inset:0; background:rgba(8,11,28,.62)}
.tr-side{position:absolute; left:calc(2.4em + var(--sal)); top:calc(1.6em + var(--sat)); bottom:calc(3.6em + var(--sab)); width:45%; max-width:44em; min-width:34em; display:flex; flex-direction:column; gap:.7em; pointer-events:auto; animation:tr-slide .3s cubic-bezier(.2,.9,.3,1.1)}
@keyframes tr-slide{from{transform:translateX(-1.6em); opacity:0}to{transform:none; opacity:1}}
.tr-mid{position:absolute; left:50%; top:calc(1.6em + var(--sat)); bottom:calc(3.6em + var(--sab)); width:66em; max-width:calc(100% - 4em - var(--sal) - var(--sar)); transform:translateX(-50%); display:flex; flex-direction:column; gap:.7em; pointer-events:auto}
.tr-head{display:flex; align-items:center; gap:.8em; margin-bottom:.1em}
.tr-backbtn{display:none; flex:none; place-items:center; width:2.1em; height:2.1em; border-radius:.6em; background:rgba(22,29,62,.9); border:.15em solid var(--ink); box-shadow:0 .17em 0 var(--ink); color:var(--cream); font-style:normal; font-size:1.15em; cursor:pointer; pointer-events:auto}
.tr-backbtn:active{transform:translateY(.12em); box-shadow:0 .06em 0 var(--ink); background:var(--yellow); color:var(--ink)}
.tr-bottom{display:flex; flex-direction:column; gap:.7em}
.tr-head h2{margin:0; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:2.1em; letter-spacing:.01em; color:var(--cream); -webkit-text-stroke:.14em var(--ink); paint-order:stroke fill; text-shadow:.06em .08em 0 var(--orange),.11em .14em 0 var(--ink)}
.tr-chip{display:inline-block; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.78em; letter-spacing:.08em; padding:.3em .7em .26em; border-radius:.5em; background:var(--teal); color:var(--ink); border:.16em solid var(--ink); box-shadow:.12em .14em 0 var(--ink); white-space:nowrap}
.tr-chip.y{background:var(--yellow)} .tr-chip.p{background:var(--pink); color:#fff} .tr-chip.o{background:var(--orange)}
.tr-card{background:var(--panel); border:.14em solid var(--line); border-radius:1em; padding:.9em 1.1em; -webkit-backdrop-filter:blur(8px); backdrop-filter:blur(8px); box-shadow:0 .5em 1.4em rgba(0,0,0,.35)}
.tr-list{display:flex; flex-direction:column; gap:.55em}

/* buttons */
.tr-btn{position:relative; display:flex; align-items:center; justify-content:space-between; gap:1em; padding:.62em 1.1em .58em 1.2em; background:rgba(22,29,62,.9); border:.17em solid var(--ink); border-radius:.75em; box-shadow:0 .26em 0 var(--ink); color:var(--cream); cursor:pointer; pointer-events:auto; transition:transform .13s cubic-bezier(.2,.9,.3,1.4),background .1s,color .1s}
.tr-btn-l{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1.25em; letter-spacing:.03em; white-space:nowrap}
.tr-btn-s{font-size:.82em; color:var(--muted); text-align:right; font-weight:600}
.tr-btn.tr-focus{background:var(--yellow); color:var(--ink); transform:translateX(.7em); box-shadow:0 .26em 0 var(--ink),0 0 0 .14em var(--cream),0 0 1.4em rgba(255,208,46,.45)}
.tr-btn.tr-focus .tr-btn-s{color:#5a4a10}
.tr-btn.tr-focus::before{content:""; position:absolute; left:-1.05em; top:50%; margin-top:-.45em; border:.45em solid transparent; border-left:.7em solid var(--yellow); filter:drop-shadow(0 0 .1em var(--ink)); animation:tr-nudge .7s ease-in-out infinite}
@keyframes tr-nudge{50%{transform:translateX(.2em)}}
.tr-btn.tr-go{background:var(--orange); justify-content:center; color:#fff}
.tr-btn.tr-go .tr-btn-l{font-size:1.4em; text-shadow:.05em .07em 0 var(--ink)}
.tr-btn.tr-go.tr-focus{background:var(--yellow); color:var(--ink); transform:scale(1.03)}
.tr-btn.tr-go.tr-focus .tr-btn-l{text-shadow:none}
.tr-btn.tr-go.tr-focus::before{display:none}
.tr-btn.tr-small{padding:.4em 1em .36em}
.tr-btn.tr-small .tr-btn-l{font-size:1em}
.tr-btn:active{transform:translateY(.16em); box-shadow:0 .1em 0 var(--ink)}

/* rows (selectors / sliders / inputs) */
.tr-row{display:flex; align-items:center; justify-content:space-between; gap:1em; padding:.42em .7em .42em 1em; border-radius:.7em; border:.14em solid transparent; background:rgba(255,255,255,.05); cursor:pointer; pointer-events:auto; transition:background .1s,border-color .1s}
.tr-row-l{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.95em; letter-spacing:.05em; color:var(--muted)}
.tr-row.tr-focus{background:rgba(255,208,46,.16); border-color:var(--yellow); box-shadow:0 0 1em rgba(255,208,46,.22)}
.tr-row.tr-focus .tr-row-l{color:var(--yellow)}
.tr-sel{display:flex; align-items:center; gap:.3em}
.tr-sel b{min-width:6.2em; text-align:center; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1.05em}
.tr-arr{display:grid; place-items:center; width:1.7em; height:1.7em; border-radius:.45em; font-style:normal; font-size:.8em; color:var(--cream); background:rgba(255,255,255,.1); transition:transform .1s,background .1s}
.tr-arr:hover{background:var(--yellow); color:var(--ink)}
.tr-arr.off{opacity:.25}
.tr-row.tr-focus .tr-arr{background:rgba(255,208,46,.28)}
.tr-row.tr-focus .tr-arr:hover{background:var(--yellow)}
.tr-arr.bump{animation:tr-bump .16s}
@keyframes tr-bump{50%{transform:scale(1.35)}}
.tr-slider{position:relative; width:13em; height:1.5em; display:flex; align-items:center; touch-action:none}
.tr-slider::before{content:""; position:absolute; left:0; right:0; height:.55em; border-radius:.3em; background:rgba(255,255,255,.14); border:.1em solid var(--ink)}
.tr-slider-fill{position:absolute; left:0; height:.55em; border-radius:.3em; background:linear-gradient(90deg,var(--teal),var(--yellow)); border:.1em solid var(--ink)}
.tr-slider-knob{position:absolute; width:1.15em; height:1.15em; margin-left:-.57em; border-radius:50%; background:var(--cream); border:.2em solid var(--ink); box-shadow:0 .12em 0 var(--ink)}
.tr-row.tr-focus .tr-slider-knob{background:var(--yellow)}
.tr-val{min-width:2.6em; text-align:right; font-family:var(--display); font-weight:900; font-style:italic; font-variant-numeric:tabular-nums}
.tr-rowr{display:flex; align-items:center; gap:.8em}
.tr-input{width:11em; font:inherit; font-family:var(--display); font-weight:900; font-style:italic; font-size:1.05em; color:var(--cream); text-align:center; background:rgba(0,0,0,.35); border:.14em solid var(--line); border-radius:.5em; padding:.28em .5em; outline:none; user-select:text; -webkit-user-select:text}
.tr-input:focus{border-color:var(--yellow); background:rgba(0,0,0,.6); box-shadow:0 0 0 .16em rgba(255,208,46,.35)}

/* hints bar */
.tr-hints{position:absolute; left:calc(2.4em + var(--sal)); bottom:calc(1.1em + var(--sab)); display:flex; gap:1.3em; align-items:center; font-size:.82em; font-weight:700; color:var(--muted); text-shadow:0 .08em .2em rgba(0,0,0,.8); letter-spacing:.03em}
.tr-hints span{display:flex; align-items:center; gap:.4em}
.tr-key{display:inline-grid; place-items:center; min-width:1.75em; height:1.75em; padding:0 .45em; font-family:var(--body); font-style:normal; font-weight:800; font-size:.9em; color:var(--ink); background:var(--cream); border:.14em solid var(--ink); border-radius:.4em; box-shadow:0 .16em 0 var(--ink); white-space:nowrap}

/* ------------------------------------------------------------------ title */
.tr-title::before{content:""; position:absolute; inset:0; background:radial-gradient(ellipse at 50% 40%,rgba(8,11,28,.05) 0%,rgba(8,11,28,.5) 70%,rgba(8,11,28,.82) 100%)}
.tr-title-in{position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1.4em; pointer-events:auto; cursor:pointer; padding-bottom:3em}
.tr-title .tr-logo{font-size:9.6em; animation:tr-logo-in .7s cubic-bezier(.2,1.2,.3,1) both}
@keyframes tr-logo-in{from{transform:scale(.6) rotate(-6deg); opacity:0}to{transform:none; opacity:1}}
.tr-tagline{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; letter-spacing:.32em; font-size:1em; color:var(--cream); text-shadow:0 .1em .3em rgba(0,0,0,.9); opacity:.92; margin-top:.4em}
.tr-tagline i{color:var(--yellow); font-style:normal; margin:0 .5em}
.tr-press{margin-top:2.2em; display:flex; align-items:center; gap:.7em; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1.5em; letter-spacing:.14em; color:var(--cream); -webkit-text-stroke:.12em var(--ink); paint-order:stroke fill; animation:tr-pulse 1.3s ease-in-out infinite}
.tr-press .tr-key{font-size:.62em; -webkit-text-stroke:0; letter-spacing:.06em; padding:0 .7em; background:var(--yellow)}
@keyframes tr-pulse{0%,100%{opacity:1; transform:scale(1)}50%{opacity:.55; transform:scale(.97)}}
.tr-foot{position:absolute; right:calc(2.4em + var(--sar)); bottom:calc(1.1em + var(--sab)); font-size:.75em; font-weight:700; color:var(--muted); letter-spacing:.14em; text-transform:uppercase; text-shadow:0 .08em .2em rgba(0,0,0,.8)}

/* ------------------------------------------------------------------ main menu */
.tr-main .tr-side{width:36%; min-width:31em; max-width:36em; justify-content:center; gap:1.3em; top:calc(1em + var(--sat))}
.tr-main .tr-logo{font-size:5.2em; margin-bottom:.05em}
.tr-main .tr-list{padding-right:1.2em}
.tr-hello{font-size:.9em; font-weight:700; color:var(--muted); letter-spacing:.04em; margin-top:-.4em; padding-left:.3em; text-shadow:0 .08em .2em rgba(0,0,0,.8)}
.tr-hello b{color:var(--yellow)}

/* ------------------------------------------------------------------ car select */
.tr-cargrid{display:grid; grid-template-columns:repeat(4,1fr); gap:.55em}
.tr-cartile{position:relative; display:flex; flex-direction:column; align-items:center; gap:.1em; padding:.45em .3em .4em; border-radius:.8em; background:rgba(22,29,62,.88); border:.16em solid var(--ink); box-shadow:0 .22em 0 var(--ink); cursor:pointer; pointer-events:auto; transition:transform .13s cubic-bezier(.2,.9,.3,1.4),background .1s}
.tr-carsvg{width:4.6em; height:2.45em; display:block; overflow:visible}
.tr-cartile span{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.72em; letter-spacing:.03em; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:100%}
.tr-cartile.sel{background:var(--cream); color:var(--ink); transform:translateY(-.2em) rotate(-1.5deg); box-shadow:0 .4em 0 var(--ink)}
.tr-cartile.sel::after{content:""; position:absolute; inset:-.42em; border-radius:1.05em; border:.17em solid var(--cream); opacity:.35}
.tr-focus > .tr-cartile.sel, .tr-focus > .tr-trktile.sel{background:var(--yellow)}
.tr-focus > .tr-cartile.sel::after, .tr-focus > .tr-trktile.sel::after{border-color:var(--yellow); opacity:1; animation:tr-ring 1s ease-in-out infinite}
@keyframes tr-ring{50%{opacity:.45}}
.tr-cardetail{display:flex; flex-direction:column; gap:.55em}
.tr-cd-top{display:flex; align-items:center; justify-content:space-between; gap:.8em}
.tr-cd-name{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1.9em; line-height:1; letter-spacing:.01em}
.tr-cd-tag{font-size:.95em; color:var(--muted); font-weight:600; font-style:italic; min-height:1.25em}
.tr-swatch{display:inline-block; width:.62em; height:.62em; border-radius:50%; border:.1em solid var(--ink); margin-right:.35em; vertical-align:.06em; box-shadow:0 0 0 .08em rgba(255,255,255,.5)}
.tr-stats{display:grid; grid-template-columns:auto 1fr auto; gap:.42em .8em; align-items:center; margin-top:.15em}
.tr-stats label{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.78em; letter-spacing:.08em; color:var(--muted)}
.tr-bar{position:relative; height:.85em; border-radius:.3em; background:rgba(255,255,255,.1); border:.1em solid var(--ink); overflow:hidden; transform:skewX(-14deg)}
.tr-bar i{position:absolute; left:0; top:0; bottom:0; width:0; background:linear-gradient(90deg,var(--teal),var(--yellow) 70%,var(--orange)); background-size:var(--bw,100%) 100%; transition:width .45s cubic-bezier(.2,.9,.25,1.15)}
.tr-bar::after{content:""; position:absolute; inset:0; background:repeating-linear-gradient(90deg,transparent 0 calc(10% - .12em),rgba(11,15,34,.85) calc(10% - .12em) 10%)}
.tr-stats b{font-family:var(--display); font-weight:900; font-style:italic; font-size:.9em; min-width:1.4em; text-align:right; font-variant-numeric:tabular-nums}

/* ------------------------------------------------------------------ track select */
.tr-trkgrid{display:grid; grid-template-columns:repeat(2,1fr); gap:.55em}
.tr-trktile{position:relative; display:flex; align-items:center; gap:.7em; padding:.5em .8em; border-radius:.8em; background:rgba(22,29,62,.88); border:.16em solid var(--ink); box-shadow:0 .22em 0 var(--ink); cursor:pointer; pointer-events:auto; transition:transform .13s cubic-bezier(.2,.9,.3,1.4),background .1s}
.tr-trktile.sel{background:var(--cream); color:var(--ink); transform:translateY(-.15em); box-shadow:0 .37em 0 var(--ink)}
.tr-trktile.sel::after{content:""; position:absolute; inset:-.42em; border-radius:1.05em; border:.17em solid var(--cream); opacity:.35}
.tr-trknum{display:grid; place-items:center; flex:none; width:1.9em; height:1.9em; border-radius:50%; background:var(--orange); color:#fff; border:.15em solid var(--ink); font-family:var(--display); font-weight:900; font-style:italic; font-size:1em}
.tr-trkname{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.98em; line-height:1.05; letter-spacing:.02em}
.tr-stars{display:inline-flex; gap:.08em; font-size:.85em; line-height:1}
.tr-stars i{font-style:normal; color:rgba(128,128,150,.45)}
.tr-stars i.on{color:var(--orange); text-shadow:0 0 .02em var(--ink)}
.tr-trkdetail{display:flex; flex-direction:column; gap:.45em}
.tr-td-desc{font-size:.95em; color:var(--cream); opacity:.9; min-height:2.5em; line-height:1.3}
.tr-td-meta{display:flex; gap:1.6em; align-items:flex-end}
.tr-meta{display:flex; flex-direction:column; gap:.1em}
.tr-meta small{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.68em; letter-spacing:.1em; color:var(--muted)}
.tr-meta b{font-family:var(--display); font-weight:900; font-style:italic; font-size:1.15em; font-variant-numeric:tabular-nums}
.tr-meta b.rec{color:var(--yellow)}
.tr-rows{display:flex; flex-direction:column; gap:.35em}

/* ------------------------------------------------------------------ options / controls */
.tr-options .tr-mid{width:46em; justify-content:center}
.tr-controls .tr-mid{justify-content:center}
.tr-cols{display:grid; grid-template-columns:1.05fr 1fr; gap:.9em}
.tr-cols h3{margin:0 0 .6em; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1em; letter-spacing:.1em; color:var(--yellow)}
.tr-keys{display:grid; grid-template-columns:auto 1fr; gap:.55em 1em; align-items:center; font-weight:600; font-size:.98em}
.tr-keys .k{display:flex; gap:.3em; align-items:center; flex-wrap:wrap}
.tr-keys .k em{font-style:normal; color:var(--muted); font-size:.8em; margin:0 .1em}
.tr-items{display:flex; flex-direction:column; gap:.5em}
.tr-item{display:flex; gap:.7em; align-items:center}
.tr-item-ic{flex:none; display:grid; place-items:center; width:2.3em; height:2.3em; border-radius:.6em; background:rgba(255,255,255,.1); border:.14em solid var(--ink); font-size:1.15em}
.tr-item b{display:block; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.9em; letter-spacing:.03em}
.tr-item small{display:block; font-size:.82em; color:var(--muted); line-height:1.25}
.tr-foot-row{display:flex; justify-content:center; margin-top:.3em}
.tr-foot-row .tr-btn{min-width:14em; justify-content:center}
.tr-foot-row .tr-btn.tr-focus{transform:scale(1.04)}
.tr-foot-row .tr-btn.tr-focus::before{display:none}

/* ------------------------------------------------------------------ HUD */
.tr-hud{pointer-events:none; font-family:var(--display); font-weight:900; font-style:italic}
.tr-hud .tr-st{-webkit-text-stroke:.16em var(--ink); paint-order:stroke fill}
.tr-h-pos{position:absolute; left:calc(1.6em + var(--sal)); top:calc(1.1em + var(--sat)); display:flex; align-items:flex-end; gap:.5em; transform:rotate(-3deg); transform-origin:left top}
.tr-h-posn{font-size:5.4em; line-height:.85; color:var(--cream); -webkit-text-stroke:.09em var(--ink); paint-order:stroke fill; text-shadow:.045em .06em 0 var(--orange),.08em .1em 0 var(--ink)}
.tr-h-posn sup{font-size:.42em; vertical-align:.95em; margin-left:.04em; letter-spacing:.02em}
.tr-h-pos.p1 .tr-h-posn{color:var(--yellow)}
.tr-h-post{font-size:1.7em; color:var(--cream); opacity:.95; padding-bottom:.1em}
.tr-h-pos.pop .tr-h-posn{animation:tr-pop .35s cubic-bezier(.2,1.6,.4,1)}
@keyframes tr-pop{0%{transform:scale(1.5)}100%{transform:scale(1)}}
.tr-h-lap{position:absolute; left:calc(1.7em + var(--sal)); top:calc(7.6em + var(--sat)); display:flex; align-items:baseline; gap:.5em; padding:.3em .9em .26em .8em; background:rgba(11,15,34,.72); border:.14em solid var(--ink); border-radius:.6em; transform:skewX(-8deg)}
.tr-h-lap small{font-size:.8em; letter-spacing:.14em; color:var(--yellow)}
.tr-h-lap b{font-size:1.5em; font-variant-numeric:tabular-nums}
.tr-h-lap.final{background:var(--orange)}
.tr-h-lap.final small{color:var(--ink)}
.tr-h-times{position:absolute; right:calc(1.4em + var(--sar)); top:calc(1.1em + var(--sat)); display:grid; grid-template-columns:auto auto; gap:.12em .8em; align-items:baseline; padding:.55em .95em .5em; background:rgba(11,15,34,.72); border:.14em solid var(--ink); border-radius:.7em; font-variant-numeric:tabular-nums}
.tr-h-times small{font-size:.7em; letter-spacing:.14em; color:var(--muted); text-align:right}
.tr-h-times b{font-size:1.2em; text-align:right; min-width:4.6em}
.tr-h-times b.big{font-size:1.75em; color:var(--cream)}
.tr-h-times b.best{color:var(--yellow)}
.tr-h-times .dim{opacity:.75}
.tr-h-item{position:absolute; left:50%; top:calc(1.1em + var(--sat)); transform:translateX(-50%); display:flex; align-items:center; gap:.7em; padding:.4em .9em .4em .45em; background:rgba(11,15,34,.72); border:.14em solid var(--ink); border-radius:.9em; min-width:11.5em}
.tr-h-itemic{flex:none; display:grid; place-items:center; width:2.05em; height:2.05em; border-radius:.32em; font-size:1.55em; font-style:normal; background:rgba(255,255,255,.08); border:.09em dashed rgba(255,255,255,.3)}
.tr-h-item.has .tr-h-itemic{background:var(--yellow); border:.09em solid var(--ink); box-shadow:0 .1em 0 var(--ink); animation:tr-wiggle 1.2s ease-in-out infinite}
.tr-h-item.pop .tr-h-itemic{animation:tr-pop .4s cubic-bezier(.2,1.6,.4,1)}
@keyframes tr-wiggle{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}
.tr-h-itemt{display:flex; flex-direction:column; gap:.2em; line-height:1}
.tr-h-itemt b{font-size:1em; text-transform:uppercase; letter-spacing:.03em; white-space:nowrap}
.tr-h-itemt small{font-family:var(--body); font-style:normal; font-weight:700; font-size:.7em; color:var(--muted); display:flex; align-items:center; gap:.4em; letter-spacing:.04em}
.tr-h-itemt .tr-key{font-size:.9em; height:1.5em; box-shadow:0 .12em 0 var(--ink)}
.tr-h-item:not(.has) .tr-h-itemt b{color:var(--muted)}
.tr-h-item:not(.has) .tr-h-itemt small{visibility:hidden}
.tr-h-speed{position:absolute; right:calc(1.4em + var(--sar)); bottom:calc(1.2em + var(--sab)); width:13em; height:11.2em}
.tr-h-speed svg{position:absolute; inset:0; width:100%; height:100%; overflow:visible}
.tr-h-arcbg{fill:none; stroke:rgba(11,15,34,.78); stroke-width:15; stroke-linecap:round}
.tr-h-arcbg2{fill:none; stroke:rgba(255,255,255,.14); stroke-width:9; stroke-linecap:round}
.tr-h-arc{fill:none; stroke:url(#tr-speedgrad); stroke-width:9; stroke-linecap:round; stroke-dasharray:100 200; stroke-dashoffset:100}
.tr-h-speed.boost .tr-h-arc{stroke:var(--pink); filter:drop-shadow(0 0 3px var(--pink))}
.tr-h-kmh{position:absolute; left:0; right:0; top:3.5em; text-align:center; line-height:1}
.tr-h-kmh b{display:block; font-size:3.5em; font-variant-numeric:tabular-nums; -webkit-text-stroke:.1em var(--ink); paint-order:stroke fill; text-shadow:.04em .06em 0 var(--ink)}
.tr-h-kmh small{font-size:.8em; letter-spacing:.2em; color:var(--yellow); -webkit-text-stroke:.22em var(--ink); paint-order:stroke fill}
.tr-h-boost{position:absolute; left:50%; bottom:.5em; transform:translateX(-50%) skewX(-10deg); padding:.14em .8em .1em; border-radius:.4em; border:.14em solid var(--ink); background:rgba(11,15,34,.72); color:rgba(255,255,255,.3); font-size:.85em; letter-spacing:.2em; white-space:nowrap}
.tr-h-speed.boost .tr-h-boost{background:var(--pink); color:#fff; box-shadow:0 0 1.2em rgba(255,61,119,.8); animation:tr-flick .12s steps(2) infinite}
@keyframes tr-flick{50%{filter:brightness(1.35)}}
.tr-h-map{position:absolute; left:calc(1.4em + var(--sal)); bottom:calc(1.2em + var(--sab)); width:14.5em; height:14.5em; background:rgba(11,15,34,.6); border:.14em solid var(--ink); border-radius:1.1em; overflow:hidden}
.tr-h-map canvas{position:absolute; inset:0; width:100%; height:100%; display:block}
.tr-h-wrong{position:absolute; left:50%; top:31%; transform:translateX(-50%) skewX(-8deg); display:none; align-items:center; gap:.5em; padding:.3em 1.1em .24em; background:var(--pink); color:#fff; border:.16em solid var(--ink); border-radius:.6em; box-shadow:0 .25em 0 var(--ink); font-size:2em; letter-spacing:.08em; white-space:nowrap}
.tr-h-wrong.on{display:flex; animation:tr-blink .5s steps(1) infinite}
@keyframes tr-blink{50%{opacity:.25}}
.tr-h-count{position:absolute; left:50%; top:40%; transform:translate(-50%,-50%); font-size:14em; line-height:1; color:var(--yellow); -webkit-text-stroke:.07em var(--ink); paint-order:stroke fill; text-shadow:.035em .045em 0 var(--orange),.06em .08em 0 var(--ink); opacity:0; white-space:nowrap}
.tr-h-count.go{color:var(--green)}
.tr-h-count.run{animation:tr-count .95s cubic-bezier(.2,1.3,.4,1) both}
.tr-h-count.go.run{animation:tr-count-go 1.2s cubic-bezier(.2,1.3,.4,1) both}
@keyframes tr-count{0%{opacity:0; transform:translate(-50%,-50%) scale(2.2) rotate(-8deg)}22%{opacity:1; transform:translate(-50%,-50%) scale(1) rotate(-3deg)}75%{opacity:1; transform:translate(-50%,-50%) scale(.95) rotate(-3deg)}100%{opacity:0; transform:translate(-50%,-50%) scale(.7) rotate(-3deg)}}
@keyframes tr-count-go{0%{opacity:0; transform:translate(-50%,-50%) scale(.4)}18%{opacity:1; transform:translate(-50%,-50%) scale(1.15) rotate(-4deg)}70%{opacity:1; transform:translate(-50%,-50%) scale(1.05) rotate(-4deg)}100%{opacity:0; transform:translate(-50%,-50%) scale(1.9) rotate(-4deg)}}
.tr-h-flash{position:absolute; left:50%; top:22%; transform:translate(-50%,-50%) skewX(-8deg); padding:.3em 1.4em .24em; background:var(--yellow); color:var(--ink); border:.16em solid var(--ink); border-radius:.6em; box-shadow:0 .25em 0 var(--ink); font-size:2.1em; letter-spacing:.05em; white-space:nowrap; opacity:0; visibility:hidden}
.tr-h-flash.on{visibility:visible; animation:tr-flash-in .3s cubic-bezier(.2,1.5,.4,1) both}
.tr-h-flash.out{visibility:visible; animation:tr-flash-out .25s ease-in both}
@keyframes tr-flash-in{from{opacity:0; transform:translate(-50%,-50%) skewX(-8deg) scale(.5)}to{opacity:1; transform:translate(-50%,-50%) skewX(-8deg) scale(1)}}
@keyframes tr-flash-out{from{opacity:1; transform:translate(-50%,-50%) skewX(-8deg)}to{opacity:0; transform:translate(-50%,-90%) skewX(-8deg)}}

/* ------------------------------------------------------------------ pause */
.tr-pause{background:rgba(8,11,28,.66); pointer-events:auto}
.tr-pause.on{animation:tr-fade .18s ease-out}
.tr-pause-box{position:absolute; left:50%; top:50%; transform:translate(-50%,-52%); width:25em; display:flex; flex-direction:column; align-items:stretch; gap:1.1em}
.tr-pause-box h2{margin:0 0 .1em; text-align:center; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:3.6em; line-height:1; color:var(--cream); -webkit-text-stroke:.11em var(--ink); paint-order:stroke fill; text-shadow:.05em .07em 0 var(--orange),.09em .12em 0 var(--ink); transform:rotate(-3deg)}
.tr-pause-box .tr-btn{justify-content:center}
.tr-pause-box .tr-btn.tr-focus{transform:scale(1.05)}
.tr-pause-box .tr-btn.tr-focus::before{display:none}
.tr-pause .tr-hints{left:50%; transform:translateX(-50%)}

/* ------------------------------------------------------------------ results */
.tr-results{background:rgba(8,11,28,.6); pointer-events:auto}
.tr-results.on{animation:tr-fade .3s ease-out}
.tr-res-box{position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:72em; max-width:calc(100% - 3em - var(--sal) - var(--sar)); max-height:calc(100% - 2em - var(--sat) - var(--sab)); display:flex; flex-direction:column; gap:.75em}
.tr-res-head{display:flex; align-items:flex-end; justify-content:space-between; gap:1em; padding:0 .4em}
.tr-res-head h2{margin:0; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:2.9em; line-height:1; color:var(--cream); -webkit-text-stroke:.12em var(--ink); paint-order:stroke fill; text-shadow:.05em .07em 0 var(--orange),.09em .12em 0 var(--ink)}
.tr-res-head h2 em{color:var(--yellow); font-style:inherit}
.tr-res-sub{display:flex; align-items:center; gap:.6em; flex-wrap:wrap; justify-content:flex-end; padding-bottom:.3em}
.tr-res-sub span.t{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; letter-spacing:.08em; color:var(--muted); font-size:.95em}
.tr-badge{display:inline-flex; align-items:center; gap:.4em; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.95em; letter-spacing:.06em; padding:.34em .8em .28em; background:var(--pink); color:#fff; border:.16em solid var(--ink); border-radius:.55em; box-shadow:.12em .16em 0 var(--ink); transform:rotate(-3deg); animation:tr-badge 1s ease-in-out infinite; white-space:nowrap}
@keyframes tr-badge{50%{transform:rotate(-3deg) scale(1.08)}}
.tr-res-body{display:flex; gap:.8em; min-height:0; align-items:flex-start}
.tr-res-body .tr-card{padding:.6em .7em; min-width:0; overflow:auto; max-height:100%; touch-action:pan-x pan-y; -webkit-overflow-scrolling:touch}
.tr-res-main{flex:1 1 auto}
.tr-res-champ{flex:0 0 21em}
.tr-res-champ h3{margin:.1em .3em .45em; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.95em; letter-spacing:.08em; color:var(--yellow); display:flex; justify-content:space-between}
.tr-res-champ h3 span{color:var(--muted)}
.tr-table{width:100%; border-collapse:separate; border-spacing:0 .22em; font-variant-numeric:tabular-nums}
.tr-table th{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.68em; letter-spacing:.12em; color:var(--muted); text-align:left; padding:0 .8em .15em; white-space:nowrap}
.tr-table td{padding:.36em .8em .32em; background:rgba(255,255,255,.06); font-weight:700; font-size:.98em; white-space:nowrap}
.tr-table td:first-child{border-radius:.55em 0 0 .55em; font-family:var(--display); font-weight:900; font-style:italic; width:3em}
.tr-table td:last-child{border-radius:0 .55em .55em 0}
.tr-table .r{text-align:right}
.tr-table td.n{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; letter-spacing:.02em}
.tr-table td.c{color:var(--muted)}
.tr-table tr.me td{background:var(--yellow); color:var(--ink)}
.tr-table tr.me td.c{color:#5a4a10}
.tr-table tr{animation:tr-rowin .35s ease-out both}
@keyframes tr-rowin{from{opacity:0; transform:translateX(-1em)}to{opacity:1; transform:none}}
.tr-table .pts{color:var(--teal); font-family:var(--display); font-weight:900; font-style:italic}
.tr-table tr.me .pts{color:var(--orange-d)}
.tr-podium{display:flex; align-items:flex-end; justify-content:center; gap:.5em; height:10.5em; padding-top:.4em}
.tr-pod{display:flex; flex-direction:column; align-items:center; justify-content:flex-end; width:13em; animation:tr-rise .6s cubic-bezier(.2,1.2,.3,1) both}
.tr-pod b{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1.05em; margin-bottom:.1em; text-shadow:0 .1em .2em rgba(0,0,0,.8); white-space:nowrap}
.tr-pod small{font-weight:800; font-size:.8em; color:var(--yellow); margin-bottom:.3em; text-shadow:0 .1em .2em rgba(0,0,0,.8)}
.tr-pod div{width:100%; display:grid; place-items:center; border:.16em solid var(--ink); border-bottom:0; border-radius:.7em .7em 0 0; font-family:var(--display); font-weight:900; font-style:italic; font-size:2.2em; color:var(--ink)}
.tr-pod.p1 div{height:2.6em; background:var(--yellow)} .tr-pod.p2 div{height:1.9em; background:#cfd6ea} .tr-pod.p3 div{height:1.4em; background:#e39a5c}
.tr-pod.p1{animation-delay:.25s} .tr-pod.p3{animation-delay:.12s}
.tr-pod.me b{color:var(--yellow)}
.tr-pod.me b::after{content:" \\2605"}
@keyframes tr-rise{from{transform:translateY(3em); opacity:0}to{transform:none; opacity:1}}
.tr-res-btns{display:flex; justify-content:center; gap:1em; padding:.2em 0 .4em}
.tr-res-btns .tr-btn{min-width:13em; justify-content:center}
.tr-res-btns .tr-btn.tr-focus{transform:scale(1.06)}
.tr-res-btns .tr-btn.tr-focus::before{display:none}

/* ------------------------------------------------------------------ multiplayer: host / join */
.tr-note{text-align:center; font-size:.92em; font-weight:600; color:var(--muted); text-shadow:0 .08em .2em rgba(0,0,0,.8)}
.tr-note b{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; letter-spacing:.06em; font-size:.9em; color:var(--yellow); margin-right:.3em}
.tr-mp .tr-side{width:38%; min-width:31em; max-width:37em; justify-content:center; gap:.8em; top:calc(1em + var(--sat))}
.tr-mp-form{display:flex; flex-direction:column; gap:.6em; padding-right:1.2em}
.tr-mp.busy .tr-mp-form{display:none}
.tr-mp-or{display:flex; align-items:center; gap:.8em; margin:.25em 0 .05em; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.72em; letter-spacing:.16em; color:var(--muted); text-shadow:0 .08em .2em rgba(0,0,0,.8)}
.tr-mp-or::before,.tr-mp-or::after{content:""; flex:1; height:.16em; border-radius:.1em; background:var(--line)}
.tr-mp .tr-row{background:rgba(22,29,62,.82)}
.tr-mp .tr-row.tr-focus{background:rgba(72,62,30,.92)}
.tr-input.tr-code{width:6.6em; font-size:1.3em; letter-spacing:.32em; text-indent:.32em; text-transform:uppercase; padding:.2em .2em}
.tr-input.tr-code::placeholder{color:rgba(255,255,255,.28)}
.tr-mp-msg{min-height:1.3em; padding-left:.3em; font-size:.92em; font-weight:700; color:var(--muted); text-shadow:0 .08em .2em rgba(0,0,0,.8)}
.tr-mp-msg.err{color:#ffb0c6; animation:tr-shake .3s}
@keyframes tr-shake{25%{transform:translateX(-.3em)}75%{transform:translateX(.3em)}}
.tr-mp-foot{display:flex}
.tr-mp-foot .tr-btn{min-width:9em; justify-content:center}
.tr-mp-busy{display:none; align-items:center; gap:1.1em; margin-right:1.2em; padding:1.1em 1.2em}
.tr-mp.busy .tr-mp-busy{display:flex}
.tr-spinner{flex:none; width:2.5em; height:2.5em; border-radius:50%; border:.36em solid rgba(255,255,255,.16); border-top-color:var(--yellow); border-right-color:var(--orange); animation:tr-spin .8s linear infinite}
.tr-mp-busyt{flex:1; min-width:0; display:flex; flex-direction:column; gap:.15em}
.tr-mp-busyt b{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1.35em; letter-spacing:.03em}
.tr-mp-busyt small{font-size:.9em; font-weight:600; color:var(--muted)}
.tr-mp-busy .tr-btn.tr-focus{transform:none}
.tr-mp-busy .tr-btn.tr-focus::before{display:none}

/* ------------------------------------------------------------------ multiplayer: lobby */
.tr-lobby .tr-side{gap:.6em; top:calc(1.3em + var(--sat))}
.tr-lb-a,.tr-lb-b{display:contents}
.tr-lb-status{margin-left:auto; display:flex; align-items:center; gap:.5em; font-size:.8em; font-weight:700; color:var(--muted); letter-spacing:.03em; text-shadow:0 .08em .2em rgba(0,0,0,.8); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; min-width:0}
.tr-lb-status::before{content:""; flex:none; width:.62em; height:.62em; border-radius:50%; background:var(--green); box-shadow:0 0 .5em var(--green)}
.tr-lb-code{display:flex; align-items:center; gap:1.2em; padding:.55em 1em .6em}
.tr-lb-code small{display:block; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.68em; letter-spacing:.1em; color:var(--muted); margin-bottom:.25em}
.tr-lb-codebox{flex:none}
.tr-lb-codebox b{display:block; font-family:var(--display); font-weight:900; font-style:italic; font-size:3.3em; line-height:.95; letter-spacing:.12em; color:var(--yellow); -webkit-text-stroke:.1em var(--ink); paint-order:stroke fill; text-shadow:.05em .07em 0 var(--orange),.09em .12em 0 var(--ink); user-select:text; -webkit-user-select:text}
.tr-lb-linkwrap{flex:1; min-width:0}
.tr-lb-links{display:flex; flex-direction:column; gap:.25em; border-radius:.6em}
.tr-lb-link{display:flex; align-items:center; gap:.6em; padding:.26em .55em .24em .7em; border-radius:.5em; background:rgba(255,255,255,.07); border:.12em solid transparent; cursor:pointer; pointer-events:auto; transition:background .1s,border-color .1s}
.tr-lb-link span{flex:1; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-family:ui-monospace,"SF Mono",Menlo,Consolas,monospace; font-size:.84em; font-weight:600; user-select:text; -webkit-user-select:text}
.tr-lb-link em{flex:none; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.66em; letter-spacing:.08em; color:var(--teal)}
.tr-lb-link:hover,.tr-lb-links.tr-focus .tr-lb-link:first-child{background:rgba(255,208,46,.16); border-color:var(--yellow)}
.tr-lb-link.copied{background:rgba(110,224,106,.18); border-color:var(--green)}
.tr-lb-link.copied em{color:var(--green)}
.tr-lb-players{padding:.55em .7em .65em}
.tr-lb-players h3{display:flex; justify-content:space-between; gap:1em; margin:0 .2em .4em; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.82em; letter-spacing:.1em; color:var(--yellow)}
.tr-lb-players h3 span:last-child{color:var(--muted); letter-spacing:.05em}
.tr-lb-grid{display:grid; grid-template-columns:1fr 1fr; grid-template-rows:repeat(4,2.3em); grid-auto-flow:column; gap:.28em .5em}
.tr-lb-p{display:flex; align-items:center; gap:.55em; min-width:0; padding:0 .6em 0 .45em; border-radius:.55em; background:rgba(255,255,255,.08); border:.12em solid transparent}
.tr-lb-p .tr-carsvg{flex:none; width:2.7em; height:1.44em}
.tr-lb-ic{flex:none; display:grid; place-items:center; width:2.7em; font-size:1em; color:var(--muted)}
.tr-lb-pn{flex:1; min-width:0; display:flex; flex-direction:column; line-height:1.08}
.tr-lb-pn b{display:flex; align-items:center; gap:.3em; min-width:0; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.88em; letter-spacing:.02em}
.tr-lb-pn b span{overflow:hidden; text-overflow:ellipsis; white-space:nowrap}
.tr-lb-pn small{font-size:.7em; font-weight:600; color:var(--muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis}
.tr-lb-crown{flex:none; font-style:normal; color:var(--yellow); font-size:1.15em; line-height:.8; text-shadow:0 .06em 0 var(--ink)}
.tr-lb-tag{flex:none; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.6em; letter-spacing:.1em; padding:.22em .55em .16em; border-radius:.4em; background:var(--yellow); color:var(--ink)}
.tr-lb-p.you{background:rgba(255,208,46,.17); border-color:rgba(255,208,46,.75)}
.tr-lb-p.bot{background:rgba(255,255,255,.035); border:.12em dashed var(--line)}
.tr-lb-p.bot b{color:var(--muted)}
.tr-lb-p.open{background:none; border:.12em dashed rgba(255,255,255,.08); justify-content:center; text-align:center}
.tr-lb-p.open b{justify-content:center; color:rgba(169,179,214,.45); font-size:.72em; letter-spacing:.1em}
.tr-lobby .tr-rows .tr-row{background:rgba(22,29,62,.82); padding-top:.3em; padding-bottom:.3em}
.tr-lobby .tr-rows .tr-row.tr-focus{background:rgba(72,62,30,.92)}
.tr-lobby .tr-sel b{min-width:9.5em; white-space:nowrap}
.tr-lobby:not(.host) [data-r="rows"], .tr-lobby:not(.host) [data-r="go"], .tr-lobby.host .tr-lb-guest{display:none}
.tr-lb-guest{display:flex; flex-direction:column; gap:.6em}
.tr-lb-guest .tr-td-meta{gap:1.4em; flex-wrap:wrap}
.tr-lb-wait{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1.1em; letter-spacing:.08em; color:var(--yellow)}
.tr-lb-wait i{font-style:normal; animation:tr-dots 1.2s infinite both}
.tr-lb-wait i:nth-child(2){animation-delay:.2s} .tr-lb-wait i:nth-child(3){animation-delay:.4s}
@keyframes tr-dots{0%,60%,100%{opacity:.2}30%{opacity:1}}
.tr-lb-foot{display:flex; gap:.7em}
.tr-lb-foot .tr-btn{flex:1; justify-content:center}
.tr-lb-foot .tr-btn.tr-focus{transform:scale(1.03)}
.tr-lb-foot .tr-btn.tr-focus::before{display:none}
.tr-hum{display:inline-block; margin-left:.7em; padding:.2em .5em .14em; border-radius:.4em; background:var(--teal); color:var(--ink); font-family:var(--display); font-weight:900; font-style:italic; font-size:.58em; letter-spacing:.1em; vertical-align:.2em}
.tr-table tr.me .tr-hum{background:var(--ink); color:var(--yellow)}

/* ================================================================== touch controls (shown while racing on html.tr-touch) */
.tr-tc{pointer-events:none; font-family:var(--display); font-weight:900; font-style:italic}
.tr-tc-top{position:absolute; right:calc(1em + var(--sar)); top:calc(.6em + var(--sat)); display:flex; gap:.5em}
.tr-tc-sm{display:grid; place-items:center; width:var(--tb); height:var(--tb); border-radius:.75em; background:rgba(11,15,34,.72); border:.14em solid var(--ink); color:var(--cream); pointer-events:auto; cursor:pointer; touch-action:none}
.tr-tc-sm svg{width:52%; height:52%; display:block; pointer-events:none}
.tr-tc-sm:active{background:var(--yellow); color:var(--ink)}
.tr-tc-btn{position:absolute; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:.15em; pointer-events:auto; touch-action:none; cursor:pointer; color:var(--cream); background:rgba(11,15,34,.46); border:.18em solid rgba(255,246,224,.62); border-radius:1.5em; box-shadow:0 .28em 0 rgba(11,15,34,.5); transition:transform .06s,background .06s}
.tr-tc-btn > *{pointer-events:none}
.tr-tc-btn b{font-size:1.3em; line-height:1; letter-spacing:.06em; text-transform:uppercase; -webkit-text-stroke:.16em var(--ink); paint-order:stroke fill}
.tr-tc-btn small{font-family:var(--body); font-style:normal; font-weight:800; font-size:.66em; line-height:1; letter-spacing:.12em; text-transform:uppercase; opacity:.85}
.tr-tc-btn svg{width:44%; height:44%; display:block; overflow:visible}
.tr-tc-btn.on{background:rgba(255,208,46,.92); border-color:var(--ink); color:var(--ink); transform:translateY(.16em) scale(.97); box-shadow:0 .08em 0 var(--ink)}
.tr-tc-btn.on b{-webkit-text-stroke:0}
.tr-tc-l{left:calc(1em + var(--sal)); bottom:calc(1em + var(--sab)); width:8.6em; height:8.6em}
.tr-tc-r{left:calc(10.3em + var(--sal)); bottom:calc(1em + var(--sab)); width:8.6em; height:8.6em}
.tr-tc-gas{right:calc(1em + var(--sar)); bottom:calc(1em + var(--sab)); width:8.6em; height:9.6em; background:rgba(58,160,70,.5)}
.tr-tc-brake{right:calc(10.3em + var(--sar)); bottom:calc(1em + var(--sab)); width:7.2em; height:7.2em; background:rgba(214,40,90,.46)}
.tr-tc-drift{right:calc(10.9em + var(--sar)); bottom:calc(9.1em + var(--sab)); width:6em; height:6em; border-radius:50%}
.tr-tc-drift b{font-size:.95em}
.tr-tc-item{right:calc(2em + var(--sar)); bottom:calc(11.5em + var(--sab)); width:6.6em; height:6.6em; border-radius:50%; background:rgba(255,208,46,.9); border-color:var(--ink); color:var(--ink)}
.tr-tc-item i{font-style:normal; font-size:2.5em; line-height:1.1}
.tr-tc-item small{font-size:.6em}
.tr-tc-item.empty{background:rgba(11,15,34,.3); border-color:rgba(255,246,224,.28); color:rgba(255,246,224,.5); box-shadow:none}
.tr-tc-item.empty i{display:none}
.tr-tc-item.empty small{font-size:.8em}
.tr-tc.auto .tr-tc-gas{display:none}
.tr-tc.auto .tr-tc-brake{right:calc(1em + var(--sar)); width:8.6em; height:8.6em}
.tr-tc.auto .tr-tc-drift{right:calc(10.3em + var(--sar)); bottom:calc(1em + var(--sab)); width:7.2em; height:7.2em; border-radius:1.5em}
.tr-tc.auto .tr-tc-drift b{font-size:1.15em}
.tr-tc.auto .tr-tc-item{bottom:calc(10.5em + var(--sab))}

/* ================================================================== touch-first devices */
html:not(.tr-touch) .tr-root .tr-if-touch{display:none !important}
html.tr-touch .tr-root .tr-if-keys{display:none !important}
html.tr-touch .tr-hints{display:none}
html.tr-touch .tr-side, html.tr-touch .tr-mid{bottom:calc(1.2em + var(--sab))}
html.tr-touch .tr-backbtn{display:grid; min-width:44px; min-height:44px}
html.tr-touch .tr-btn{min-height:44px}
html.tr-touch .tr-row, html.tr-touch .tr-lobby .tr-rows .tr-row{min-height:44px; padding-top:0; padding-bottom:0}
html.tr-touch .tr-arr{min-width:44px; min-height:44px; font-size:1em}
html.tr-touch .tr-slider{height:44px}
html.tr-touch .tr-input{min-height:34px}
html.tr-touch .tr-lb-link{min-height:44px}
html.tr-touch .tr-lb-link:nth-child(n+3){display:none}
html.tr-touch .tr-cartile, html.tr-touch .tr-trktile{min-height:44px}
/* HUD: the bottom corners belong to the thumbs */
html.tr-touch .tr-h-times{top:calc(var(--tb) + 1.2em + var(--sat))}
html.tr-touch .tr-h-item{pointer-events:auto; touch-action:none; cursor:pointer; min-height:44px}
html.tr-touch .tr-h-item > *{pointer-events:none}
html.tr-touch .tr-h-item.has{border-color:var(--yellow)}
html.tr-touch .tr-h-item.on{background:var(--yellow); color:var(--ink)}
html.tr-touch .tr-h-itemt small{display:none}
html.tr-touch .tr-h-map{bottom:auto; top:calc(11.6em + var(--sat)); width:11em; height:11em}
html.tr-touch .tr-h-speed{left:50%; right:auto; bottom:calc(.9em + var(--sab)); width:auto; height:auto; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:.25em}
html.tr-touch .tr-h-speed svg{display:none}
html.tr-touch .tr-h-kmh{position:static; display:flex; align-items:baseline; gap:.35em}
html.tr-touch .tr-h-kmh b{font-size:2.5em}
html.tr-touch .tr-h-boost{position:static; order:-1; transform:skewX(-10deg); visibility:hidden}
html.tr-touch .tr-h-speed.boost .tr-h-boost{visibility:visible}

/* ================================================================== compact: phone landscape (stage up to 520px high) */
@container stage (max-height:520px){
  .tr-root{font-size:clamp(10px,3.1cqh,14px)}
  .tr-hints,.tr-foot,.tr-note{display:none}
  .tr-backbtn{display:grid}
  .tr-side{left:calc(1.2em + var(--sal)); top:calc(.8em + var(--sat)); bottom:calc(.8em + var(--sab)); width:38em; min-width:0; max-width:calc(100% - 2.4em - var(--sal) - var(--sar)); gap:.5em}
  html.tr-touch .tr-side, html.tr-touch .tr-mid{bottom:calc(.8em + var(--sab))}
  .tr-mid{top:calc(.8em + var(--sat)); bottom:calc(.8em + var(--sab)); max-width:calc(100% - 2.4em - var(--sal) - var(--sar)); gap:.5em}
  .tr-head{gap:.6em; margin-bottom:0}
  .tr-head h2{font-size:1.65em}
  .tr-card{padding:.6em .9em; border-radius:.8em}
  .tr-bottom{flex-direction:row; align-items:stretch; gap:.5em}
  .tr-bottom > .tr-rows{flex:none}
  .tr-bottom > .tr-rows.tr-empty{display:none}
  .tr-bottom > [data-r="go"]{flex:1 1 0; min-width:0; display:flex}
  .tr-bottom > [data-r="go"] > .tr-btn{flex:1; padding-left:.5em; padding-right:.5em}
  .tr-btn.tr-go .tr-btn-l{font-size:1.2em}
  /* selector rows become compact cells: label on top, the two arrows are the left / right half of the cell */
  .tr-cells{display:flex; flex-direction:row; gap:.4em}
  .tr-cells .tr-row{position:relative; flex:0 0 8.5em; flex-direction:column; justify-content:center; align-items:stretch; gap:.15em; padding:.25em 0; min-width:0; text-align:center}
  .tr-cells .tr-row-l{font-size:.66em; letter-spacing:.08em}
  .tr-cells .tr-sel{display:block; padding:0 1.25em}
  .tr-cells .tr-sel b{display:block; min-width:0; font-size:.9em; white-space:nowrap; overflow:hidden; text-overflow:ellipsis}
  .tr-cells .tr-arr, html.tr-touch .tr-cells .tr-arr{position:absolute; top:0; bottom:0; width:50%; height:auto; min-width:0; min-height:0; display:flex; align-items:center; padding:.9em .45em 0; font-size:.8em; background:none; border-radius:.6em}
  .tr-cells .tr-arr.l{left:0; justify-content:flex-start}
  .tr-cells .tr-arr.r{right:0; justify-content:flex-end}
  .tr-cells .tr-arr:hover, .tr-cells .tr-row.tr-focus .tr-arr, .tr-cells .tr-row.tr-focus .tr-arr:hover{background:none; color:var(--yellow)}
  .tr-cells .tr-arr:active{background:rgba(255,208,46,.22)}

  /* title */
  .tr-title-in{gap:.7em; padding-bottom:.6em}
  .tr-title .tr-logo{font-size:7.2em}
  .tr-tagline{font-size:.85em; margin-top:.2em}
  .tr-press{margin-top:.9em; font-size:1.35em}

  /* main menu: logo on top, the six entries in two columns */
  .tr-main .tr-side{width:40em; min-width:0; max-width:calc(100% - 2.4em - var(--sal) - var(--sar)); gap:.7em; top:calc(.8em + var(--sat))}
  .tr-main .tr-logo{font-size:3.8em}
  .tr-main .tr-list{display:grid; grid-template-columns:1fr 1fr; gap:.55em .8em; padding-right:0}
  .tr-main .tr-btn-s{display:none}
  .tr-main .tr-btn.tr-focus{transform:none}
  .tr-main .tr-btn.tr-focus::before{display:none}
  .tr-hello{margin-top:-.2em}

  /* car select */
  .tr-cargrid{gap:.45em}
  .tr-cartile{padding:.25em .3em .2em}
  .tr-carsvg{width:4em; height:2.1em}
  .tr-cartile span{font-size:.68em}
  .tr-cardetail{gap:.3em}
  .tr-cd-name{font-size:1.4em}
  .tr-cd-tag{font-size:.85em; min-height:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis}
  .tr-stats{grid-template-columns:auto 1fr auto auto 1fr auto; gap:.3em .6em; margin-top:0}
  .tr-stats label{font-size:.7em}
  .tr-bar{height:.75em}

  /* track select */
  .tr-trkgrid{gap:.45em}
  .tr-trktile{padding:.3em .7em}
  .tr-trkdetail{gap:.3em}
  .tr-td-desc{font-size:.85em; min-height:0; line-height:1.2; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden}
  .tr-td-meta{gap:1.2em}
  .tr-meta b{font-size:1em}

  /* options: two columns */
  .tr-options .tr-mid{width:60em; justify-content:flex-start}
  .tr-options .tr-card{padding:.5em .6em; min-height:0; overflow:auto; touch-action:pan-x pan-y; -webkit-overflow-scrolling:touch}
  .tr-options .tr-rows{display:grid; grid-template-columns:1fr 1fr; gap:.35em .6em}
  .tr-options .tr-row{padding-left:.7em; padding-right:.4em; gap:.5em}
  .tr-options .tr-row-l{font-size:.85em; line-height:1.05}
  .tr-options .tr-slider{width:8.5em}
  .tr-options .tr-val{min-width:2.2em}
  .tr-options .tr-rowr{gap:.5em}
  .tr-options .tr-sel b{min-width:4.4em; font-size:.95em}
  .tr-options .tr-input{width:9em}
  .tr-options .tr-foot-row, .tr-controls .tr-foot-row{display:none}

  /* controls */
  .tr-controls .tr-mid{justify-content:flex-start}
  .tr-cols{min-height:0; gap:.6em}
  .tr-cols .tr-card{min-height:0; overflow:auto; touch-action:pan-x pan-y; -webkit-overflow-scrolling:touch}
  .tr-cols h3{margin-bottom:.4em; font-size:.9em}
  .tr-keys{gap:.4em .8em; font-size:.9em}
  .tr-items{gap:.32em}
  .tr-item-ic{width:1.9em; height:1.9em; font-size:1em}
  .tr-item b{font-size:.82em}
  .tr-item small{font-size:.76em; line-height:1.15}

  /* multiplayer: both fields on top (clear of the on-screen keyboard), the two actions below */
  .tr-mp .tr-side{width:40em; justify-content:flex-start; gap:.6em; top:calc(.8em + var(--sat))}
  .tr-mp-form{display:grid; grid-template-columns:1fr 1fr; gap:.5em .7em; padding-right:0}
  .tr-mp-or,.tr-mp-foot{display:none}
  .tr-mp-form > [data-r="name"]{order:1} .tr-mp-form > [data-r="code"]{order:2}
  .tr-mp-form > [data-r="host"]{order:3} .tr-mp-form > [data-r="join"]{order:4}
  .tr-mp-form > .tr-mp-msg{order:5; grid-column:1 / -1}
  .tr-mp .tr-row, html.tr-touch .tr-mp .tr-row{flex-direction:column; align-items:stretch; gap:.2em; padding:.35em .6em .5em}
  .tr-mp .tr-row-l{font-size:.68em}
  .tr-mp .tr-input{width:100%}
  .tr-mp .tr-btn{height:100%; padding-left:.9em}
  .tr-mp .tr-btn-s{display:none}
  .tr-mp .tr-btn.tr-focus{transform:none}
  .tr-mp .tr-btn.tr-focus::before{display:none}
  .tr-mp-busy{margin-right:0; padding:.8em 1em}

  /* lobby: two columns over (almost) the whole stage */
  .tr-lobby.tr-left::before{background:linear-gradient(90deg,rgba(8,11,28,.9) 0%,rgba(8,11,28,.78) 70%,rgba(8,11,28,.5) 100%)}
  .tr-lobby .tr-side{width:auto; right:calc(1.2em + var(--sar)); max-width:66em; top:calc(.8em + var(--sat)); display:grid; grid-template-columns:1.12fr 1fr; grid-template-rows:auto minmax(0,1fr); gap:.45em .8em}
  .tr-lobby .tr-head{grid-column:1 / -1}
  .tr-lb-a,.tr-lb-b{display:flex; flex-direction:column; gap:.45em; min-width:0; min-height:0}
  .tr-lb-code{gap:.9em; padding:.4em .8em .45em}
  .tr-lb-codebox b{font-size:2.5em}
  .tr-lb-link:nth-child(n+2), html.tr-touch .tr-lb-link:nth-child(n+2){display:none}
  .tr-lb-players{padding:.4em .6em .5em}
  .tr-lb-players h3{font-size:.74em; margin-bottom:.3em}
  .tr-lb-grid{grid-template-rows:repeat(4,2.1em); gap:.24em .4em}
  .tr-lobby .tr-cells{display:grid; grid-template-columns:1fr 1fr; gap:.4em}
  .tr-lobby .tr-cells .tr-row{flex:none}
  .tr-lobby .tr-sel b{min-width:0}
  .tr-lb-guest{gap:.4em}
  .tr-lb-foot{gap:.5em}

  /* HUD */
  .tr-h-pos{left:calc(1em + var(--sal)); top:calc(.6em + var(--sat)); gap:.35em}
  .tr-h-posn{font-size:3.4em}
  .tr-h-post{font-size:1.15em}
  .tr-h-lap{left:calc(1.1em + var(--sal)); top:calc(4.4em + var(--sat)); padding:.2em .7em .16em .6em}
  .tr-h-lap small{font-size:.7em}
  .tr-h-lap b{font-size:1.15em}
  .tr-h-times{right:calc(1em + var(--sar)); top:calc(.6em + var(--sat)); padding:.35em .7em .3em; gap:.04em .6em}
  .tr-h-times small{font-size:.62em}
  .tr-h-times b{font-size:1em; min-width:4.3em}
  .tr-h-times b.big{font-size:1.3em}
  .tr-h-times .dim{display:none}
  html.tr-touch .tr-h-times{top:calc(var(--tb) + 1.1em + var(--sat))}
  .tr-h-item{top:calc(.6em + var(--sat)); min-width:0; padding:.3em .8em .3em .35em; gap:.5em}
  .tr-h-itemic{font-size:1.3em}
  .tr-h-itemt b{font-size:.9em}
  .tr-h-speed{right:calc(1em + var(--sar)); bottom:calc(.8em + var(--sab)); width:10em; height:8.6em}
  .tr-h-kmh{top:2.6em}
  .tr-h-kmh b{font-size:2.7em}
  .tr-h-boost{font-size:.75em}
  html.tr-touch .tr-h-speed{bottom:calc(.6em + var(--sab))}
  html.tr-touch .tr-h-kmh b{font-size:2em}
  .tr-h-map{left:calc(1em + var(--sal)); bottom:calc(.8em + var(--sab)); width:10em; height:10em; border-radius:.9em}
  html.tr-touch .tr-h-map{top:calc(7.1em + var(--sat)); width:8.4em; height:8.4em}
  .tr-h-wrong{font-size:1.5em}
  .tr-h-count{font-size:10em}
  .tr-h-flash{font-size:1.5em; top:27%}

  /* pause / results */
  .tr-pause-box{gap:.7em}
  .tr-pause-box h2{font-size:2.6em}
  .tr-res-box{gap:.45em; max-width:calc(100% - 2em - var(--sal) - var(--sar)); max-height:calc(100% - 1.2em - var(--sat) - var(--sab))}
  .tr-res-head h2{font-size:2em}
  .tr-res-sub{padding-bottom:.1em}
  .tr-badge{font-size:.8em}
  .tr-podium{display:none}
  .tr-res-body{gap:.6em}
  .tr-res-body .tr-card{padding:.4em .5em}
  .tr-res-champ{flex-basis:17em}
  .tr-table{border-spacing:0 .14em}
  .tr-table td{padding:.2em .7em .16em; font-size:.92em}
  .tr-res-box.champ .tr-table .c{display:none}
  .tr-res-btns{padding:0 0 .1em}
}

@media (prefers-reduced-motion:reduce){
  .tr-root *, .tr-root *::before, .tr-root *::after{animation-duration:.01s !important; animation-iteration-count:1 !important; transition-duration:.01s !important}
  .tr-h-count.run{animation-duration:.9s !important}
}
`;function ty(){if(typeof document>"u"||document.getElementById(Lf))return;const i=document.createElement("style");i.id=Lf,i.textContent=Q_,document.head.appendChild(i)}const ey=typeof document<"u";function en(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}function Fi(i,t,e){return i<t?t:i>e?e:i}const od=i=>ey&&document.documentElement.classList.contains(i),Ac=()=>od("tr-touch"),ny=()=>od("tr-rotated");function iy(i,t){const e=i.getBoundingClientRect();return ny()?Fi((t.clientY-e.top)/Math.max(1,e.height),0,1):Fi((t.clientX-e.left)/Math.max(1,e.width),0,1)}const sy={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function he(i){return String(i??"").replace(/[&<>"']/g,t=>sy[t])}function Kn(i){if(i==null||!isFinite(i)||i<0)return"-:--.--";const t=Math.floor(i*100+1e-6),e=Math.floor(t/6e3),n=Math.floor(t/100)%60,s=t%100;return e+":"+(n<10?"0":"")+n+"."+(s<10?"0":"")+s}function ld(i){const t=i%100;if(t>=11&&t<=13)return"th";switch(i%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function la(i){return i+ld(i)}function nr(i,t){i.classList.remove(t),i.offsetWidth,i.classList.add(t)}function ry(i){const t=he(i||"#ff6b1a");return'<svg class="tr-carsvg" viewBox="0 0 64 34" aria-hidden="true"><path d="M41 8 L47 -1" stroke="#0b0f22" stroke-width="1.4" stroke-linecap="round" fill="none" transform="translate(0,3)"/><circle cx="47" cy="2" r="1.8" fill="#ffd02e" stroke="#0b0f22" stroke-width="1"/><path d="M3 11 h9 v3 h-3 v4 h-3 v-4 h-3 z" fill="'+t+'" stroke="#0b0f22" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 25 Q3 18 10 17 L20 15 Q26 8 36 8 L44 8 Q50 8 53 14 L58 16 Q62 17 62 21 L62 25 Z" fill="'+t+'" stroke="#0b0f22" stroke-width="2" stroke-linejoin="round"/><path d="M24 15 Q28 10.5 35 10.5 L43 10.5 Q47 10.5 49 15 Z" fill="#cfefff" stroke="#0b0f22" stroke-width="1.4" stroke-linejoin="round"/><path d="M36 10.5 V15" stroke="#0b0f22" stroke-width="1.4"/><path d="M8 21 H58" stroke="rgba(255,255,255,.55)" stroke-width="1.6" stroke-linecap="round"/><circle cx="16" cy="25" r="7" fill="#1b2140" stroke="#0b0f22" stroke-width="2"/><circle cx="16" cy="25" r="2.8" fill="#fff6e0"/><circle cx="48" cy="25" r="7" fill="#1b2140" stroke="#0b0f22" stroke-width="2"/><circle cx="48" cy="25" r="2.8" fill="#fff6e0"/></svg>'}function ay(){let i="";for(let t=0;t<5;t++){const e=t/5*Math.PI*2-Math.PI/2;i+='<circle cx="'+(50+Math.cos(e)*15.5).toFixed(1)+'" cy="'+(50+Math.sin(e)*15.5).toFixed(1)+'" r="5.6" fill="#ff6b1a" stroke="#0b0f22" stroke-width="2.5"/>'}return'<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="43" fill="#232a52" stroke="#0b0f22" stroke-width="8"/><circle cx="50" cy="50" r="40" fill="none" stroke="#4a548c" stroke-width="7" stroke-dasharray="5 5.47"/><circle cx="50" cy="50" r="27.5" fill="#fff6e0" stroke="#0b0f22" stroke-width="6"/>'+i+'<circle cx="50" cy="50" r="5" fill="#0b0f22"/></svg>'}function If(){return'<div class="tr-logo" role="img" aria-label="Toyz Race"><div class="tr-logo-toyz"><span>T</span><span class="tr-logo-o">'+ay()+'</span><span>Y</span><span>Z</span></div><div class="tr-logo-race"><span>R</span><span>A</span><span>C</span><span>E</span></div><div class="tr-logo-strip"></div></div>'}function kf(i,t=4){let e='<span class="tr-stars" aria-label="Difficulty '+i+" of "+t+'">';for(let n=1;n<=t;n++)e+='<i class="'+(n<=i?"on":"")+'">★</i>';return e+"</span>"}const Rn={settings:"toyzrace.settings",records:"toyzrace.records",menu:"toyzrace.menu"},Df={settings:"tinytorque.settings",records:"tinytorque.records",menu:"tinytorque.menu"};function oy(){try{for(const i of Object.keys(Rn)){const t=localStorage.getItem(Df[i]);t!=null&&(localStorage.getItem(Rn[i])==null&&localStorage.setItem(Rn[i],t),localStorage.removeItem(Df[i]))}}catch{}}const cd={masterVolume:.8,musicVolume:.6,sfxVolume:.9,quality:"high",playerName:"Player",cameraShake:!0};function Oo(i){try{const t=localStorage.getItem(i),e=t?JSON.parse(t):null;return e&&typeof e=="object"?e:null}catch{return null}}function $s(i,t){try{localStorage.setItem(i,JSON.stringify(t))}catch{}}const Bo=(i,t)=>typeof i=="number"&&isFinite(i)?Math.min(1,Math.max(0,i)):t;function hd(i){return String(i??"").replace(/[\u0000-\u001f<>]/g,"").replace(/\s+/g," ").trim().slice(0,12)||cd.playerName}function ly(i){const t=cd,e=i||{};return{masterVolume:Bo(e.masterVolume,t.masterVolume),musicVolume:Bo(e.musicVolume,t.musicVolume),sfxVolume:Bo(e.sfxVolume,t.sfxVolume),quality:["low","medium","high"].includes(e.quality)?e.quality:t.quality,playerName:hd(e.playerName),cameraShake:typeof e.cameraShake=="boolean"?e.cameraShake:t.cameraShake,autoGas:typeof e.autoGas=="boolean"?e.autoGas:null}}function cy(){oy();const i=ly(Oo(Rn.settings)),t=Object.assign({mode:"race",carId:null,trackId:null,laps:null,opponents:7,difficulty:1,mainIndex:0},Oo(Rn.menu)||{});let e=Oo(Rn.records)||{};(!e.lap||typeof e.lap!="object")&&(e.lap={}),(!e.race||typeof e.race!="object")&&(e.race={});const n=r=>typeof r=="number"&&isFinite(r)&&r>0,s={getBestLap(r){const a=e.lap[r];return n(a)?a:null},setBestLap(r,a){if(!n(a))return!1;const o=s.getBestLap(r);return o!=null&&o<=a?!1:(e.lap[r]=a,$s(Rn.records,e),!0)},getBestRace(r,a){const o=e.race[r+":"+a];return n(o)?o:null},setBestRace(r,a,o){if(!n(o))return!1;const l=s.getBestRace(r,a);return l!=null&&l<=o?!1:(e.race[r+":"+a]=o,$s(Rn.records,e),!0)},clear(){e={lap:{},race:{}},$s(Rn.records,e)}};return{settings:i,sel:t,records:s,getSettings(){return Object.assign({},i,{autoGas:i.autoGas==null?Ac():!!i.autoGas})},saveSettings(){$s(Rn.settings,i)},saveSel(){$s(Rn.menu,t)}}}function Cc({sound:i,horizontal:t=!1}={}){const e={items:[],index:0,horizontal:t},n=r=>{i&&i(r)},s=r=>r&&!(r.skip&&r.skip());return e.set=(r,a=0)=>{e.items.forEach(o=>o.el.classList.remove("tr-focus")),e.items=r,r.forEach((o,l)=>{o._wired||(o._wired=!0,o.el.addEventListener("mouseenter",()=>{s(o)&&e.focus(e.items.indexOf(o),!0)}),o.el.addEventListener("click",c=>{s(o)&&(e.focus(e.items.indexOf(o),!0),o.click?o.click(c):o.enter&&(n("ui-select"),o.enter()))}))}),e.index=-1,e.focus(Fi(a,0,Math.max(0,r.length-1)),!0)},e.focus=(r,a)=>{if(r<0||r>=e.items.length)return;if(!s(e.items[r])){const l=e.items.findIndex(s);if(l<0)return;r=l}if(r===e.index)return;const o=e.items[e.index];o&&(o.el.classList.remove("tr-focus"),o.blur&&o.blur()),e.index=r,e.items[r].el.classList.add("tr-focus"),a||n("ui-move")},e.move=r=>{const a=e.items.length;if(!a)return;let o=e.index;for(let l=0;l<a&&(o=(o+r+a)%a,!s(e.items[o]));l++);e.focus(o)},e.current=()=>e.items[e.index],e.key=r=>{const a=e.current(),o=r.key,l=e.horizontal?"ArrowLeft":"ArrowUp",c=e.horizontal?"ArrowRight":"ArrowDown";if(o==="ArrowUp"||o==="ArrowDown"||o==="ArrowLeft"||o==="ArrowRight"){const f=a&&a[o==="ArrowUp"?"up":o==="ArrowDown"?"down":o==="ArrowLeft"?"left":"right"];return f&&f()||(o===l?e.move(-1):o===c?e.move(1):e.horizontal&&e.move(o==="ArrowUp"?-1:1)),!0}return o==="Enter"||o===" "||o==="Spacebar"?(r.repeat||a&&a.enter&&(n("ui-select"),a.enter()),!0):!1},e}function Ve(i,t,e,n){const s=en("div","tr-btn"+(n?" "+n:""));return s.setAttribute("role","button"),s.innerHTML='<span class="tr-btn-l">'+he(i)+"</span>"+(t?'<span class="tr-btn-s">'+he(t)+"</span>":""),{el:s,enter:e,setLabel(r){s.querySelector(".tr-btn-l").textContent=r}}}function Ri(i,{options:t,get:e,set:n,sound:s}){const r=en("div","tr-row");r.innerHTML='<span class="tr-row-l">'+he(i)+'</span><span class="tr-sel"><i class="tr-arr l">◀</i><b></b><i class="tr-arr r">▶</i></span>';const a=r.querySelector("b"),o=r.querySelector(".l"),l=r.querySelector(".r"),c=()=>{const u=t(),d=e(),g=u.findIndex(x=>x.value===d);return g<0?0:g};function f(){const u=t(),d=c();a.textContent=u[d]?u[d].label:"",o.classList.toggle("off",d<=0),l.classList.toggle("off",d>=u.length-1)}function h(u,d){const g=t();let x=c()+u;return d&&(x=(x+g.length)%g.length),x<0||x>=g.length||(n(g[x].value),f(),nr(u<0?o:l,"bump"),s&&s("ui-move")),!0}return o.addEventListener("click",u=>{u.stopPropagation(),h(-1)}),l.addEventListener("click",u=>{u.stopPropagation(),h(1)}),f(),{el:r,render:f,left:()=>h(-1),right:()=>h(1),click:()=>h(1,!0),setHidden(u){r.style.display=u?"none":""},skip:()=>r.style.display==="none"}}function hy(i,{get:t,set:e,sound:n}){const s=en("div","tr-row");s.innerHTML='<span class="tr-row-l">'+he(i)+'</span><span class="tr-rowr"><span class="tr-slider"><span class="tr-slider-fill"></span><span class="tr-slider-knob"></span></span><span class="tr-val"></span></span>';const r=s.querySelector(".tr-slider"),a=s.querySelector(".tr-slider-fill"),o=s.querySelector(".tr-slider-knob"),l=s.querySelector(".tr-val");function c(){const g=Math.round(Fi(t(),0,1)*100);a.style.width=g+"%",o.style.left=g+"%",l.textContent=String(g)}function f(g){const x=Math.round(Fi(t(),0,1)*20),p=Fi(x+g,0,20);return p!==x&&(e(p/20),c(),n&&n("ui-move")),!0}let h=!1;const u=g=>{const x=Math.round(iy(r,g)*20)/20;x!==t()&&(e(x),c())};r.addEventListener("pointerdown",g=>{h=!0;try{r.setPointerCapture(g.pointerId)}catch{}u(g)}),r.addEventListener("pointermove",g=>{h&&u(g)});const d=()=>{h&&n&&n("ui-move"),h=!1};return r.addEventListener("pointerup",d),r.addEventListener("pointercancel",d),r.addEventListener("lostpointercapture",d),c(),{el:s,render:c,left:()=>f(-1),right:()=>f(1),click:()=>{}}}function fy(i,{get:t,set:e,maxLength:n=12,live:s=!1,onSubmit:r=null,cls:a="",placeholder:o="",capitalize:l="",enterHint:c="done"}){const f=en("div","tr-row tr-row-in");f.innerHTML='<span class="tr-row-l">'+he(i)+'</span><input class="tr-input'+(a?" "+a:"")+'" type="text" inputmode="text" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="'+(l||(s?"characters":"words"))+'" enterkeyhint="'+c+'" maxlength="'+n+'"'+(o?' placeholder="'+he(o)+'"':"")+">";const h=f.querySelector("input");h.value=t();const u=()=>{e(h.value),h.value=t()};return h.addEventListener("input",()=>{e(h.value),s&&h.value!==t()&&(h.value=t())}),h.addEventListener("blur",u),r&&(h._ttSubmit=r),{el:f,input:h,render(){document.activeElement!==h&&(h.value=t())},enter(){h.focus(),h.select()},click(){h.focus()},blur(){document.activeElement===h&&h.blur()}}}const Uf=!1,Nf=[{value:0,label:"Easy"},{value:1,label:"Normal"},{value:2,label:"Hard"}],Ho={race:"Single Race",championship:"Championship",timetrial:"Time Trial"},uy={Rookie:"",Amateur:"y",Pro:"p"},Go=[["speed","Speed"],["accel","Accel"],["grip","Grip"],["weight","Weight"]],zf={mode:"main",menu:"main",cars:"car",tracks:"track",settings:"options",help:"controls",multiplayer:"mp"},ca='<i class="tr-backbtn" role="button" aria-label="Back">◀</i>';function dy(i){const t=String(i??""),e=/[?&#]join=([a-z]{4})(?![a-z])/i.exec(t);return(e?e[1]:t.replace(/[^a-z]/gi,"").slice(0,4)).toUpperCase()}function Ks(i){return'<div class="tr-hints">'+i.map(([t,e])=>"<span>"+t.map(n=>'<i class="tr-key">'+n+"</i>").join("")+he(e)+"</span>").join("")+"</div>"}function py(i,{tracks:t,cars:e,items:n,handlers:s,store:r}){const{settings:a,sel:o,records:l}=r,c=s||{},f=T=>{c.onUiSound&&c.onUiSound(T)},h=(T,C)=>{const B=[];for(let O=T;O<=C;O++)B.push({value:O,label:String(O)});return B};Ho[o.mode]||(o.mode="race"),e.some(T=>T.id===o.carId)||(o.carId=e.length?e[0].id:null),t.some(T=>T.id===o.trackId)||(o.trackId=t.length?t[0].id:null),o.laps>=2&&o.laps<=8||(o.laps=null),o.opponents>=1&&o.opponents<=7||(o.opponents=7),[0,1,2].includes(o.difficulty)||(o.difficulty=1);const u=()=>Math.max(0,e.findIndex(T=>T.id===o.carId)),d=()=>Math.max(0,t.findIndex(T=>T.id===o.trackId)),g=()=>t[d()],x=()=>o.laps||Math.min(8,Math.max(2,g()&&g().defaultLaps||3)),p=en("div","tr-layer tr-menu");i.appendChild(p);const m=Cc({sound:f}),y={};let v=null,_=!1,E=0,w="main";const S={purpose:null,code:"",busy:!1,msg:"",active:!1,lobby:{players:[],settings:{}}};function A(){const T=v==="lobby"&&S.lobby.settings.trackId;c.onPreview&&c.onPreview({screen:v,carId:o.carId,trackId:T||o.trackId})}function b(){r.saveSettings(),c.onSettings&&c.onSettings(r.getSettings())}function M(T,C,B){const O=en("div","tr-screen "+C,B);return p.appendChild(O),O.querySelectorAll(".tr-backbtn").forEach(J=>J.addEventListener("click",dt=>{dt.stopPropagation(),v===T&&z()})),y[T]={name:T,el:O,items:[],index:0,back:null,onShow:null},y[T]}function P(T,C={}){T=zf[T]||T;const B=y[T]||y.title,O=document.activeElement;O&&O.classList&&O.classList.contains("tr-input")&&O.blur(),v&&y[v]&&(y[v].index=m.index,y[v].el.classList.remove("on")),v=B.name,B.el.classList.add("on"),B.onShow&&B.onShow(C),m.set(B.items,C.index!=null?C.index:B.index),A()}function z(){const T=y[v];return!T||!T.back?!1:(f("ui-back"),T.back(),!0)}{const T=M("title","tr-title",'<div class="tr-title-in">'+If()+'<div class="tr-tagline">Pocket-size racers<i>◆</i>Full-size mayhem</div><div class="tr-press tr-if-keys">Press <i class="tr-key">ENTER</i> to start</div><div class="tr-press tr-if-touch">Tap to start</div></div><div class="tr-foot">Toy-scale arcade racing</div>');T.el.querySelector(".tr-title-in").addEventListener("click",()=>{f("ui-select"),P("main")}),T.key=C=>C.key==="Enter"||C.key===" "?(C.repeat||(f("ui-select"),P("main")),!0):!1}{const T=M("main","tr-main tr-left",'<div class="tr-side">'+If()+'<div class="tr-hello"></div><div class="tr-list"></div></div>'+Ks([[["↑","↓"],"Select"],[["ENTER"],"Confirm"],[["ESC"],"Back"]])),C=T.el.querySelector(".tr-list"),B=T.el.querySelector(".tr-hello"),O=J=>()=>{S.purpose=null,o.mode=J,r.saveSel(),P("car",{index:0})};T.items=[Ve("Single Race","Pick a track, beat the pack",O("race")),Uf,Ve("Championship",t.length+" tracks · points 10-8-6-5-4-3-2-1",O("championship")),Ve("Time Trial","Just you and the clock",O("timetrial")),Ve("Options","Sound, graphics, driver",()=>{w="main",P("options",{index:0})}),Ve("Controls","Keys and pickups",()=>{w="main",P("controls",{index:0})})],T.items=T.items.filter(Boolean),T.items.forEach(J=>C.appendChild(J.el)),T.index=Math.min(T.items.length-1,Math.max(0,o.mainIndex|0)),T.onShow=()=>{B.innerHTML="Driver: <b>"+he(a.playerName)+"</b>"},T.back=()=>{o.mainIndex=m.index,r.saveSel(),P("title")}}{let dt=function(Z){const rt=u(),ht=e[rt];if(J.forEach((k,R)=>k.classList.toggle("sel",R===rt)),!ht)return;C("name").innerHTML='<span class="tr-swatch" style="background:'+he(ht.color)+'"></span>'+he(ht.name);const Lt=C("class");Lt.textContent=ht.class||"",Lt.className="tr-chip "+(uy[ht.class]||""),C("tag").textContent=ht.tagline||"";const bt=()=>{const k=e[u()];Go.forEach(([R])=>{const $=Math.min(10,Math.max(0,k.stats&&k.stats[R]||0)),lt=T.el.querySelector('[data-bar="'+R+'"]');lt.style.width=$*10+"%",lt.style.setProperty("--bw",$>0?1e3/$+"%":"100%"),T.el.querySelector('[data-num="'+R+'"]').textContent=String($)})};Z?bt():(Go.forEach(([k])=>{T.el.querySelector('[data-bar="'+k+'"]').style.width="0%"}),T.el.offsetWidth,setTimeout(bt,40))},nt=function(Z){const rt=e.length;rt&&(Z=(Z%rt+rt)%rt,e[Z].id!==o.carId&&(o.carId=e[Z].id,r.saveSel(),dt(!0),f("ui-move"),A()))},gt=function(Z){const rt=Z==="championship"?t[0]:g();return{mode:Z,trackId:rt?rt.id:null,carId:o.carId,laps:Z==="championship"?Math.min(8,Math.max(2,rt&&rt.defaultLaps||3)):x(),opponents:Z==="timetrial"?0:Z==="championship"?7:o.opponents,difficulty:o.difficulty,playerName:a.playerName}},K=function(){if(S.purpose==="lobby"){r.saveSel(),S.purpose=null;const Z=S.lobby.players.find(rt=>rt.isYou);Z&&(Z.carId=o.carId),P("lobby",{index:y.lobby.carIndex()}),c.onMpCar&&c.onMpCar({carId:o.carId})}else S.purpose?(r.saveSel(),y.mp.connect()):o.mode==="championship"?(r.saveSel(),c.onStart&&c.onStart(gt("championship"))):P("track",{index:0})};var Y=dt,W=nt,V=gt,Q=K;const T=M("car","tr-carsel tr-left",'<div class="tr-side"><div class="tr-head">'+ca+'<h2>Choose your car</h2><span class="tr-chip o" data-r="mode"></span></div><div class="tr-cargrid"></div><div class="tr-card tr-cardetail"><div class="tr-cd-top"><div class="tr-cd-name" data-r="name"></div><span class="tr-chip" data-r="class"></span></div><div class="tr-cd-tag" data-r="tag"></div><div class="tr-stats">'+Go.map(([Z,rt])=>"<label>"+rt+'</label><div class="tr-bar"><i data-bar="'+Z+'"></i></div><b data-num="'+Z+'"></b>').join("")+'</div></div><div class="tr-bottom"><div class="tr-rows tr-cells" data-r="rows"></div><div data-r="go"></div></div></div>'+Ks([[["←","↑","↓","→"],"Choose"],[["ENTER"],"Confirm"],[["ESC"],"Back"]])),C=Z=>T.el.querySelector('[data-r="'+Z+'"]'),B=T.el.querySelector(".tr-cargrid"),O=4,J=e.map((Z,rt)=>{const ht=en("div","tr-cartile",ry(Z.color)+"<span>"+he(Z.name)+"</span>");return ht.addEventListener("click",Lt=>{Lt.stopPropagation(),m.focus(0,!0),rt===u()?(f("ui-select"),K()):nt(rt)}),B.appendChild(ht),ht});T.buildConfig=gt;const st={el:B,left:()=>(nt(u()-1),!0),right:()=>(nt(u()+1),!0),up:()=>{const Z=u();return Z-O<0?!1:(nt(Z-O),!0)},down:()=>{const Z=u();return Z+O>=e.length?!1:(nt(Z+O),!0)},enter:K,click:()=>{}},D=Ri("Difficulty",{options:()=>Nf,get:()=>o.difficulty,set:Z=>{o.difficulty=Z,r.saveSel()},sound:f});C("rows").appendChild(D.el);const xt=Ve("Next: track",null,K,"tr-go");C("go").appendChild(xt.el),T.items=[st,D,xt],T.onShow=()=>{const Z=S.purpose,rt=!Z&&o.mode==="championship";C("mode").textContent=Z?"Multiplayer":Ho[o.mode],D.setHidden(!rt),C("rows").classList.toggle("tr-empty",!rt),D.render(),xt.setLabel(Z==="host"?"Host game":Z==="join"?"Join room "+S.code:Z==="lobby"?"Confirm car":rt?"Start championship":"Next: choose track"),dt(!1)},T.back=()=>{if(S.purpose==="lobby")S.purpose=null,r.saveSel(),P("lobby",{index:y.lobby.carIndex()});else if(S.purpose){const Z=S.purpose==="join";S.purpose=null,P("mp",{index:Z?3:1})}else P("main")}}{let dt=function(){const rt=d(),ht=t[rt];if(J.forEach((R,$)=>R.classList.toggle("sel",$===rt)),!ht)return;C("desc").textContent=ht.description||"",C("stars").innerHTML=kf(ht.difficulty||1),C("len").textContent=ht.lengthLabel||"—";const Lt=l.getBestLap(ht.id);C("best").textContent=Lt!=null?Kn(Lt):"-:--.--";const bt=x(),k=l.getBestRace(ht.id,bt);C("racel").textContent="Best race ("+bt+" laps)",C("race").textContent=k!=null?Kn(k):"-:--.--",st.render()},nt=function(rt){const ht=t.length;ht&&(rt=(rt%ht+ht)%ht,t[rt].id!==o.trackId&&(o.trackId=t[rt].id,r.saveSel(),dt(),f("ui-move"),A()))},gt=function(){r.saveSel(),c.onStart&&c.onStart(y.car.buildConfig(o.mode==="timetrial"?"timetrial":"race"))};var tt=dt,ut=nt,L=gt;const T=M("track","tr-tracksel tr-left",'<div class="tr-side"><div class="tr-head">'+ca+'<h2>Choose a track</h2><span class="tr-chip o" data-r="mode"></span></div><div class="tr-trkgrid"></div><div class="tr-card tr-trkdetail"><div class="tr-td-desc" data-r="desc"></div><div class="tr-td-meta"><div class="tr-meta"><small>Difficulty</small><b data-r="stars"></b></div><div class="tr-meta"><small>Length</small><b data-r="len"></b></div><div class="tr-meta"><small>Best lap</small><b class="rec" data-r="best"></b></div><div class="tr-meta"><small data-r="racel">Best race</small><b class="rec" data-r="race"></b></div></div></div><div class="tr-bottom"><div class="tr-rows tr-cells" data-r="rows"></div><div data-r="go"></div></div></div>'+Ks([[["←","↑","↓","→"],"Choose / adjust"],[["ENTER"],"Start"],[["ESC"],"Back"]])),C=rt=>T.el.querySelector('[data-r="'+rt+'"]'),B=T.el.querySelector(".tr-trkgrid"),O=2,J=t.map((rt,ht)=>{const Lt=en("div","tr-trktile",'<span class="tr-trknum">'+(ht+1)+'</span><span><span class="tr-trkname">'+he(rt.name)+"</span><br>"+kf(rt.difficulty||1)+"</span>");return Lt.addEventListener("click",bt=>{bt.stopPropagation(),m.focus(0,!0),ht===d()?(f("ui-select"),gt()):nt(ht)}),B.appendChild(Lt),Lt}),K={el:B,left:()=>(nt(d()-1),!0),right:()=>(nt(d()+1),!0),up:()=>{const rt=d();return rt-O<0?!1:(nt(rt-O),!0)},down:()=>{const rt=d();return rt+O>=t.length?!1:(nt(rt+O),!0)},enter:gt,click:()=>{}},st=Ri("Laps",{options:()=>h(2,8),get:x,set:rt=>{o.laps=rt,r.saveSel(),dt()},sound:f}),D=Ri("Opponents",{options:()=>h(1,7),get:()=>o.opponents,set:rt=>{o.opponents=rt,r.saveSel()},sound:f}),xt=Ri("Difficulty",{options:()=>Nf,get:()=>o.difficulty,set:rt=>{o.difficulty=rt,r.saveSel()},sound:f});[st,D,xt].forEach(rt=>C("rows").appendChild(rt.el));const Z=Ve("Start race",null,gt,"tr-go");C("go").appendChild(Z.el),T.items=[K,st,D,xt,Z],T.onShow=()=>{const rt=o.mode==="timetrial";C("mode").textContent=Ho[rt?"timetrial":"race"],D.setHidden(rt),xt.setHidden(rt),D.render(),xt.render(),Z.setLabel(rt?"Start time trial":"Start race"),dt()},T.back=()=>P("car")}{const T=M("options","tr-options tr-center",'<div class="tr-mid"><div class="tr-head">'+ca+'<h2>Options</h2></div><div class="tr-card"><div class="tr-rows" data-r="rows"></div></div><div class="tr-foot-row" data-r="foot"></div></div>'+Ks([[["↑","↓"],"Select"],[["←","→"],"Adjust"],[["ESC"],"Back"]])),C=T.el.querySelector('[data-r="rows"]'),B=(nt,gt)=>hy(nt,{get:()=>a[gt],set:K=>{a[gt]=K,b()},sound:f}),O=fy("Driver name",{get:()=>a.playerName,set:nt=>{const gt=hd(nt);gt!==a.playerName&&(a.playerName=gt,b())}});T.items=[B("Master volume","masterVolume"),B("Music volume","musicVolume"),B("Effects volume","sfxVolume"),Ri("Graphics quality",{options:()=>[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],get:()=>a.quality,set:nt=>{a.quality=nt,b()},sound:f}),Ri("Camera shake",{options:()=>[{value:!1,label:"Off"},{value:!0,label:"On"}],get:()=>a.cameraShake,set:nt=>{a.cameraShake=nt,b()},sound:f}),O];const J=Ri("Auto accelerate",{options:()=>[{value:!1,label:"Off"},{value:!0,label:"On"}],get:()=>r.getSettings().autoGas,set:nt=>{a.autoGas=!!nt,b()},sound:f});J.el.classList.add("tr-if-touch"),J.skip=()=>!Ac(),T.items.splice(5,0,J),T.items.forEach(nt=>C.appendChild(nt.el));const dt=Ve("Back",null,()=>{f("ui-back"),T.back()},"tr-small");dt.enter=()=>T.back(),T.el.querySelector('[data-r="foot"]').appendChild(dt.el),T.items.push(dt),T.nameItem=O,T.onShow=()=>T.items.forEach(nt=>nt.render&&nt.render()),T.back=()=>P(w)}{const T=(...nt)=>'<span class="k">'+nt.map(gt=>gt==="/"?"<em>or</em>":'<i class="tr-key">'+gt+"</i>").join("")+"</span>",C=[[T("↑","←","↓","→","/","W","A","S","D"),"Drive: accelerate, steer, brake / reverse"],[T("SHIFT","/","B"),"Handbrake — kick the tail out and drift"],[T("SPACE","/","X"),"Use the item you are holding"],[T("C"),"Change camera"],[T("R"),"Reset car to the track"],[T("ESC","/","P"),"Pause"],[T("M"),"Mute sound"]],B=[[T("◀","▶"),"Steer — slide your left thumb between the two"],[T("GAS","BRAKE"),"Accelerate, brake / reverse"],[T("DRIFT"),"Handbrake — kick the tail out and drift"],[T("ITEM"),"Use the item you are holding (or tap the item slot)"],[T("❚❚","/","◉","/","↺"),"Pause, change camera, reset car to the track"],['<span class="k"><em>Tip</em></span>',"“Auto accelerate” in Options drives for you: just steer, brake and drift"]],O=(n||[]).map(nt=>'<div class="tr-item"><span class="tr-item-ic">'+he(nt.icon||"?")+"</span><span><b>"+he(nt.name)+"</b><small>"+he(nt.description||"")+"</small></span></div>").join(""),J=M("controls","tr-controls tr-center",'<div class="tr-mid"><div class="tr-head">'+ca+'<h2>Controls</h2></div><div class="tr-cols"><div class="tr-card"><h3>Driving</h3><div class="tr-keys tr-if-keys">'+C.map(([nt,gt])=>nt+"<span>"+he(gt)+"</span>").join("")+'</div><div class="tr-keys tr-if-touch">'+B.map(([nt,gt])=>nt+"<span>"+he(gt)+"</span>").join("")+'</div></div><div class="tr-card"><h3>Pickups</h3><div class="tr-items">'+(O||"<small>Smash a crate to grab a random item.</small>")+'</div></div></div><div class="tr-foot-row" data-r="foot"></div></div>'+Ks([[["ENTER"],"Back"],[["ESC"],"Back"]])),dt=Ve("Got it",null,()=>J.back(),"tr-small");J.el.querySelector('[data-r="foot"]').appendChild(dt.el),J.items=[dt],J.back=()=>P(w)}function U(T){}function F(T){}function H(T){}function G(T){const C=y[v];if(!C)return!1;const B=document.activeElement;if(B&&B.classList&&B.classList.contains("tr-input"))return T.key==="Enter"&&B._ttSubmit?(T.repeat||(f("ui-select"),B._ttSubmit()),!0):T.key==="Enter"||T.key==="Escape"?(B.blur(),f("ui-select"),!0):T.key==="ArrowUp"||T.key==="ArrowDown"?(B.blur(),m.key(T)):"pass";const O=C.key?C.key(T):!1;return O||(T.key==="Escape"||T.key==="Backspace"&&!C.escOnly?(T.repeat||C.back&&z(),!0):v==="title"?!1:m.key(T))}return{node:p,handleKey:G,show(T="title",C){_=!0,E=performance.now(),p.classList.add("on"),S.purpose=null,S.busy=!1,S.active=!1;let B=zf[T]||T||"title";if(B==="lobby"&&(B="mp"),B==="mp"&&!Uf&&(B="main"),B==="mp"){S.msg="";const O=C&&C.joinCode!=null?dy(C.joinCode):"";O&&(S.code=O),P("mp",{index:O?3:1})}else P(B)},showLobby:U,updateLobby:F,showMpError:H,get lobbyVisible(){return _&&v==="lobby"},hide(){if(S.busy=!1,S.active=!1,S.purpose=null,!_)return;const T=document.activeElement;T&&T.classList&&T.classList.contains("tr-input")&&T.blur(),v&&y[v]&&(y[v].index=m.index),_=!1,p.classList.remove("on")},get visible(){return _},get shownAt(){return E},get screen(){return v},getSelection(){return{mode:o.mode,carId:o.carId,trackId:o.trackId,laps:x(),opponents:o.opponents,difficulty:o.difficulty}},destroy(){p.remove()}}}const my=50,gy=3.6;function xy(i){const t=en("div","tr-layer tr-hud");t.innerHTML='<div class="tr-h-pos"><span class="tr-h-posn"><span data-r="posn">1</span><sup data-r="poss">st</sup></span><span class="tr-h-post tr-st" data-r="post">/ 8</span></div><div class="tr-h-lap"><small>LAP</small><b data-r="lap">1 / 3</b></div><div class="tr-h-item"><span class="tr-h-itemic" data-r="itemic"></span><span class="tr-h-itemt"><b data-r="itemn">NO ITEM</b><small class="tr-if-keys"><span class="tr-key">SPACE</span>to use</small></span></div><div class="tr-h-times"><small>TIME</small><b class="big" data-r="time">0:00.00</b><small>LAP</small><b data-r="lapt">0:00.00</b><small>BEST</small><b class="best" data-r="best">-:--.--</b><small class="dim">LAST</small><b class="dim" data-r="last">-:--.--</b></div><div class="tr-h-map"><canvas></canvas></div><div class="tr-h-speed"><svg viewBox="0 0 120 104"><defs><linearGradient id="tr-speedgrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#19d3c5"/><stop offset=".6" stop-color="#ffd02e"/><stop offset="1" stop-color="#ff6b1a"/></linearGradient></defs><path class="tr-h-arcbg" d="M16.7 85 A50 50 0 1 1 103.3 85"/><path class="tr-h-arcbg2" d="M16.7 85 A50 50 0 1 1 103.3 85"/><path class="tr-h-arc" pathLength="100" d="M16.7 85 A50 50 0 1 1 103.3 85"/></svg><div class="tr-h-kmh"><b data-r="kmh">0</b><small>KM/H</small></div><div class="tr-h-boost">BOOST</div></div><div class="tr-h-wrong">↺ WRONG WAY</div>',i.appendChild(t);const e=en("div","tr-layer tr-hud tr-fx on",'<div class="tr-h-count"></div><div class="tr-h-flash"></div>');i.appendChild(e);const n={};t.querySelectorAll("[data-r]").forEach(L=>{const T=document.createTextNode(L.textContent);L.textContent="",L.appendChild(T),n[L.getAttribute("data-r")]=T});const s={};function r(L,T){return s[L]!==T?(s[L]=T,n[L].data=T,!0):!1}const a=L=>t.querySelector(L),o=a(".tr-h-pos"),l=a(".tr-h-lap"),c=a(".tr-h-item"),f=a(".tr-h-speed"),h=a(".tr-h-arc"),u=a(".tr-h-wrong"),d=e.querySelector(".tr-h-count"),g=e.querySelector(".tr-h-flash"),x=a(".tr-h-map"),p=a(".tr-h-map canvas"),m=p.getContext?p.getContext("2d"):null;let y=!1,v=0,_=0,E=0,w=0,S=null,A=0,b=null,M=1,P=0,z=0,U=0;function F(){const L=Math.min(2,window.devicePixelRatio||1),T=Math.max(64,Math.round(Math.min(x.clientWidth,x.clientHeight)*L));T!==w&&(w=T,p.width=T,p.height=T,S=null)}function H(L){S=L,A=L.length,b||(b=document.createElement("canvas")),b.width=w,b.height=w;const T=b.getContext("2d");if(T.clearRect(0,0,w,w),!L.length)return;let C=1/0,B=-1/0,O=1/0,J=-1/0;for(let st=0;st<L.length;st++){const D=L[st];D[0]<C&&(C=D[0]),D[0]>B&&(B=D[0]),D[1]<O&&(O=D[1]),D[1]>J&&(J=D[1])}const dt=w*.13,nt=Math.max(.001,B-C),gt=Math.max(.001,J-O);M=Math.min((w-dt*2)/nt,(w-dt*2)/gt),P=(w-nt*M)/2-C*M,z=(w-gt*M)/2-O*M;const K=()=>{T.beginPath();for(let st=0;st<L.length;st++){const D=L[st][0]*M+P,xt=L[st][1]*M+z;st===0?T.moveTo(D,xt):T.lineTo(D,xt)}T.closePath()};if(T.lineJoin="round",T.lineCap="round",K(),T.strokeStyle="#0b0f22",T.lineWidth=w*.075,T.stroke(),K(),T.strokeStyle="#fff6e0",T.lineWidth=w*.042,T.stroke(),K(),T.strokeStyle="#3a4474",T.lineWidth=w*.012,T.setLineDash([w*.02,w*.03]),T.stroke(),T.setLineDash([]),L.length>1){const st=L[0][0]*M+P,D=L[0][1]*M+z;let xt=L[1][0]-L[0][0],Z=L[1][1]-L[0][1];const rt=Math.hypot(xt,Z)||1;xt/=rt,Z/=rt;const ht=w*.045;T.beginPath(),T.moveTo(st-Z*ht,D+xt*ht),T.lineTo(st+Z*ht,D-xt*ht),T.strokeStyle="#0b0f22",T.lineWidth=w*.035,T.lineCap="butt",T.stroke(),T.strokeStyle="#ff6b1a",T.lineWidth=w*.018,T.stroke()}}function G(L,T){if(!m||!L||!L.points||T-U<my)return;U=T,w||F(),(L.points!==S||L.points.length!==A)&&H(L.points),m.clearRect(0,0,w,w),b&&m.drawImage(b,0,0);const C=L.cars;if(!C)return;const B=w*.03;let O=null;m.lineWidth=w*.014,m.strokeStyle="#0b0f22";for(let J=C.length-1;J>=0;J--){const dt=C[J];if(dt.isPlayer){O=dt;continue}m.beginPath(),m.arc(dt.x*M+P,dt.z*M+z,B,0,6.2832),m.fillStyle=dt.color||"#9aa6c8",m.fill(),m.stroke()}if(O){const J=O.x*M+P,dt=O.z*M+z,nt=1+.18*Math.sin(T*.008);m.beginPath(),m.arc(J,dt,B*2.1*nt,0,6.2832),m.fillStyle="rgba(255,208,46,.3)",m.fill(),m.beginPath(),m.arc(J,dt,B*1.45,0,6.2832),m.fillStyle=O.color||"#ffd02e",m.fill(),m.lineWidth=w*.022,m.strokeStyle="#ffffff",m.stroke(),m.lineWidth=w*.008,m.strokeStyle="#0b0f22",m.beginPath(),m.arc(J,dt,B*1.45+w*.014,0,6.2832),m.stroke()}}function Y(){y?F():w=0}window.addEventListener("resize",Y);const W=typeof ResizeObserver<"u"?new ResizeObserver(Y):null;W&&W.observe(x);function V(L){if(!L)return;const T=performance.now();if(L.speed!=null){const O=Math.abs(L.speed);r("kmh",String(Math.round(O*gy)));const J=L.topSpeed>0?L.topSpeed:40,dt=Math.round(Fi(O/(J*1.2),0,1)*200)/2;s.arc!==dt&&(s.arc=dt,h.style.strokeDashoffset=String(100-dt))}const C=!!L.boost;if(s.boost!==C&&(s.boost=C,f.classList.toggle("boost",C)),L.position!=null){const O=L.total||0,J=O>1;s.showPos!==J&&(s.showPos=J,o.style.display=J?"":"none"),J&&(r("posn",String(L.position))&&(n.poss.data=ld(L.position),o.classList.toggle("p1",L.position===1),s.posInit&&nr(o,"pop"),s.posInit=!0),r("post","/ "+O))}if(L.lap!=null&&r("lap",L.lap+" / "+(L.laps||"?"))&&l.classList.toggle("final",L.laps>1&&L.lap>=L.laps),L.time!=null&&r("time",Kn(L.time)),L.lapTime!=null&&r("lapt",Kn(L.lapTime)),L.bestLap!==void 0&&r("best",Kn(L.bestLap)),L.lastLap!==void 0&&r("last",Kn(L.lastLap)),L.item!==void 0){const O=L.item?L.item.id||L.item.name:"";s.item!==O&&(s.item=O,L.item?(n.itemic.data=L.item.icon||"?",n.itemn.data=L.item.name||"ITEM",c.classList.add("has"),nr(c,"pop"),clearTimeout(c._t),c._t=setTimeout(()=>c.classList.remove("pop"),420)):(n.itemic.data="",n.itemn.data="NO ITEM",c.classList.remove("has","pop")))}const B=!!L.wrongWay;s.wrong!==B&&(s.wrong=B,u.classList.toggle("on",B)),L.minimap&&G(L.minimap,T)}function Q(L){const T=String(L);d.textContent=T,d.classList.toggle("go",!/^\d+$/.test(T)),nr(d,"run"),clearTimeout(E),E=setTimeout(()=>d.classList.remove("run"),1300)}function tt(L,T){const C=T>0?T:1800;g.textContent=String(L),g.classList.remove("out"),nr(g,"on"),clearTimeout(v),clearTimeout(_),v=setTimeout(()=>{g.classList.remove("on"),g.classList.add("out"),_=setTimeout(()=>g.classList.remove("out"),300)},C)}function ut(){clearTimeout(v),clearTimeout(_),clearTimeout(E),g.classList.remove("on","out"),d.classList.remove("run"),u.classList.remove("on"),s.wrong=!1,s.posInit=!1}return{node:t,itemEl:c,update:V,showCountdown:Q,flashMessage:tt,show(){y||(y=!0,ut(),t.classList.add("on"),F(),U=0)},hide(){y&&(y=!1,ut(),t.classList.remove("on"))},get visible(){return y},destroy(){window.removeEventListener("resize",Y),W&&W.disconnect(),ut(),t.remove(),e.remove()}}}const vy=[10,8,6,5,4,3,2,1];function fd(i){return'<div class="tr-hints">'+i.map(([t,e])=>"<span>"+t.map(n=>'<i class="tr-key">'+n+"</i>").join("")+he(e)+"</span>").join("")+"</div>"}function _y(i,t){const e=t||{},n=g=>{e.onUiSound&&e.onUiSound(g)},s=en("div","tr-layer tr-pause",'<div class="tr-pause-box"><h2 data-r="title">Paused</h2></div>'+fd([[["↑","↓"],"Select"],[["ENTER"],"Confirm"],[["ESC"],"Resume"]]));i.appendChild(s);const r=s.querySelector(".tr-pause-box"),a=Cc({sound:n}),o=g=>()=>{e[g]&&e[g]()},l=s.querySelector('[data-r="title"]'),c=Ve("Restart race",null,o("onRestart")),f=Ve("Quit to menu",null,o("onQuit")),h=[Ve("Resume",null,o("onResume")),c,f];h.forEach(g=>r.appendChild(g.el)),c.skip=()=>c.el.style.display==="none";let u=!1,d=0;return{node:s,show(g){const x=!!(g&&g.multiplayer);l.textContent=x?"Menu":"Paused",c.el.style.display=x?"none":"",f.setLabel(x?"Leave race":"Quit to menu"),u=!0,d=performance.now(),s.classList.add("on"),a.set(h,0)},hide(){u=!1,s.classList.remove("on")},handleKey(g){return g.key==="Escape"||g.key==="p"||g.key==="P"?(g.repeat||(n("ui-back"),e.onResume&&e.onResume()),!0):a.key(g)},get visible(){return u},get shownAt(){return d},destroy(){s.remove()}}}function yy(i,t){if(!i)return"";if(typeof i=="string")return i;if(typeof i=="object"){const e=i.lap||i.bestLap,n=i.race||i.bestRace;if(e&&n)return"New lap + race record!";if(e)return"New lap record!";if(n)return"New race record!"}return t==="timetrial"?"New best lap!":"New record!"}function by(i,t){const e=t||{},n=h=>{e.onUiSound&&e.onUiSound(h)},s=en("div","tr-layer tr-results",'<div class="tr-res-box"><div class="tr-res-head"><h2 data-r="title"></h2><div class="tr-res-sub" data-r="sub"></div></div><div data-r="podium"></div><div class="tr-res-body"><div class="tr-card tr-res-main" data-r="main"></div><div class="tr-card tr-res-champ" data-r="champ"></div></div><div class="tr-res-btns" data-r="btns"></div></div>'+fd([[["←","→"],"Select"],[["ENTER"],"Confirm"]]));i.appendChild(s);const r=h=>s.querySelector('[data-r="'+h+'"]'),a=Cc({sound:n,horizontal:!0});let o=!1,l=0,c=null;function f(h){const u=h||{},d=u.standings||[],g=u.mode||"race",x=u.championship||null,p=u.multiplayer||null,m=g==="timetrial"&&!p,y=d.find(U=>U.isPlayer);let v;if(x&&x.final){const F=(x.table||[]).slice().sort((H,G)=>G.points-H.points).findIndex(H=>H.isPlayer)+1;v=F===1?"<em>Champion!</em>":F>0?"Championship: <em>"+la(F)+"</em>":"Championship over"}else m?v="Time trial <em>done</em>":y?v=y.position===1?"<em>You win!</em>":"You finished <em>"+la(y.position)+"</em>":v="Race results";r("title").innerHTML=v;const _=yy(u.newRecord,g);r("sub").innerHTML=(_?'<span class="tr-badge">★ '+he(_)+"</span>":"")+'<span class="t">'+he(u.trackName||"")+"</span>"+(p?'<span class="tr-chip p">Multiplayer</span>':x?'<span class="tr-chip y">Round '+he(x.round)+" / "+he(x.rounds)+"</span>":'<span class="tr-chip '+(m?"":"o")+'">'+(m?"Time Trial":"Single Race")+"</span>");const E=d.find(U=>U.finished&&U.finishTime!=null),w=E?E.finishTime:null;let S='<table class="tr-table"><thead><tr><th>Pos</th><th>Driver</th><th class="c">Car</th><th class="r">'+(m?"Total":"Time / gap")+'</th><th class="r">Best lap</th>'+(x?'<th class="r">Pts</th>':"")+"</tr></thead><tbody>";d.forEach((U,F)=>{const H=U.position||F+1;let G;!U.finished||U.finishTime==null?G="DNF":H===1||w==null||U===E?G=Kn(U.finishTime):G="+"+Kn(Math.max(0,U.finishTime-w)),S+='<tr class="'+(U.isPlayer?"me":"")+'" style="animation-delay:'+(F*.05).toFixed(2)+'s"><td>'+la(H)+'</td><td class="n">'+he(U.name)+(p&&(U.isHuman||U.isPlayer)?'<i class="tr-hum" title="Human driver">'+(U.isPlayer?"You":"Human")+"</i>":"")+'</td><td class="c">'+he(U.carName||U.car&&U.car.def&&U.car.def.name||"")+'</td><td class="r">'+G+'</td><td class="r">'+Kn(U.bestLap)+"</td>"+(x?'<td class="r pts">+'+(vy[H-1]||0)+"</td>":"")+"</tr>"}),r("main").innerHTML=S+"</tbody></table>";const A=r("champ"),b=r("podium");if(b.innerHTML="",s.querySelector(".tr-res-box").classList.toggle("champ",!!(x&&x.table)),x&&x.table){const U=x.table.slice().sort((F,H)=>H.points-F.points);if(A.style.display="",A.innerHTML="<h3>"+(x.final?"Final standings":"Championship")+'<span>Pts</span></h3><table class="tr-table"><tbody>'+U.map((F,H)=>'<tr class="'+(F.isPlayer?"me":"")+'" style="animation-delay:'+(.15+H*.05).toFixed(2)+'s"><td>'+la(H+1)+'</td><td class="n">'+he(F.name)+'</td><td class="r pts">'+he(F.points)+"</td></tr>").join("")+"</tbody></table>",x.final){const F=H=>U[H]?'<div class="tr-pod p'+(H+1)+(U[H].isPlayer?" me":"")+'"><b>'+he(U[H].name)+"</b><small>"+he(U[H].points)+" pts</small><div>"+(H+1)+"</div></div>":"";b.innerHTML='<div class="tr-podium">'+F(1)+F(0)+F(2)+"</div>"}}else A.style.display="none",A.innerHTML="";const M=r("btns");M.innerHTML="";const P=U=>()=>{e[U]&&e[U]()},z=[];p?z.push(Ve("Back to lobby",null,P("onMpLobby"),"tr-go")):(x&&!x.final&&z.push(Ve("Next race",null,P("onNextRace"),"tr-go")),x||z.push(Ve(m?"Try again":"Race again",null,P("onRestart"),"tr-go")),z.push(Ve(x&&x.final?"Back to menu":"Menu",null,P("onQuit"),x&&x.final?"tr-go":""))),z.forEach(U=>M.appendChild(U.el)),c=P(p?"onMpLobby":"onQuit"),o=!0,l=performance.now(),s.classList.add("on"),a.set(z,0)}return{node:s,show:f,hide(){o=!1,s.classList.remove("on")},handleKey(h){return h.key==="Escape"?(!h.repeat&&c&&(n("ui-back"),c()),!0):a.key(h)},get visible(){return o},get shownAt(){return l},destroy(){s.remove()}}}const Ff={left:"steer",right:"steer",gas:"pedal",brake:"pedal",drift:"drift",fire:"fire"},My={steer:!0,pedal:!0},Of=i=>'<svg viewBox="0 0 40 40" aria-hidden="true"'+(i?' style="transform:scaleX(-1)"':"")+'><path d="M27 5 L9 20 L27 35 Z" fill="currentColor" stroke="#0b0f22" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke"/></svg>',Vo={pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="4" width="5" height="16" rx="1.5" fill="currentColor"/><rect x="14" y="4" width="5" height="16" rx="1.5" fill="currentColor"/></svg>',camera:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8.5 A2 2 0 0 1 5 6.5 H7.6 L9 4.5 H15 L16.4 6.5 H19 A2 2 0 0 1 21 8.5 V17 A2 2 0 0 1 19 19 H5 A2 2 0 0 1 3 17 Z" fill="currentColor"/><circle cx="12" cy="12.6" r="3.6" fill="none" stroke="#0b0f22" stroke-width="2"/></svg>',reset:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.2 8.2 A7.2 7.2 0 1 1 4.8 12.6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M3.2 4.2 L6.6 8.8 L11.6 6.4" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'};function wy(i,{handlers:t,getAutoGas:e,itemSlot:n}){const s=t||{},r={active:!1,throttle:0,steer:0,handbrake:!1,fire:!1},a=en("div","tr-layer tr-tc",'<div class="tr-tc-top"><div class="tr-tc-sm" data-act="onResetRequest" role="button" aria-label="Reset car to the track">'+Vo.reset+'</div><div class="tr-tc-sm" data-act="onCameraRequest" role="button" aria-label="Change camera">'+Vo.camera+'</div><div class="tr-tc-sm" data-act="onPauseRequest" role="button" aria-label="Pause">'+Vo.pause+'</div></div><div class="tr-tc-btn tr-tc-l" data-tc="left" role="button" aria-label="Steer left">'+Of(!1)+'</div><div class="tr-tc-btn tr-tc-r" data-tc="right" role="button" aria-label="Steer right">'+Of(!0)+'</div><div class="tr-tc-btn tr-tc-drift" data-tc="drift" role="button" aria-label="Handbrake"><b>Drift</b></div><div class="tr-tc-btn tr-tc-item empty" data-tc="fire" role="button" aria-label="Use item"><i></i><small>Item</small></div><div class="tr-tc-btn tr-tc-brake" data-tc="brake" role="button" aria-label="Brake / reverse"><b>Brake</b><small>Reverse</small></div><div class="tr-tc-btn tr-tc-gas" data-tc="gas" role="button" aria-label="Accelerate"><b>Gas</b></div>');i.appendChild(a);const o=a.querySelector(".tr-tc-item"),l=o.querySelector("i"),c=Array.from(a.querySelectorAll("[data-tc]"));n&&(n.setAttribute("data-tc","fire"),c.push(n)),c.forEach(v=>{v._tc=v.getAttribute("data-tc")});const f=new Map;let h=0,u=!1;function d(){let v=0,_=0,E=!1,w=!1,S=!1,A=!1;f.forEach(b=>{b.name==="left"?v=Math.max(v,b.seq):b.name==="right"?_=Math.max(_,b.seq):b.name==="gas"?E=!0:b.name==="brake"?w=!0:b.name==="drift"?S=!0:b.name==="fire"&&(A=!0)}),r.steer=v||_?v>_?1:-1:0,r.throttle=r.active?w?-1:E||u?1:0:0,r.handbrake=S,r.fire=A;for(let b=0;b<c.length;b++){const M=c[b];let P=!1;f.forEach(z=>{z.el===M&&(P=!0)}),M._on!==P&&(M._on=P,M.classList.toggle("on",P))}}function g(v){if(!r.active||v.pointerType==="mouse"&&v.button!==0)return;const _=v.currentTarget;v.preventDefault();try{_.setPointerCapture(v.pointerId)}catch{}f.set(v.pointerId,{el:_,name:_._tc,seq:++h}),d()}function x(v){const _=f.get(v.pointerId);if(!_)return;const E=Ff[_.name];if(!My[E])return;const w=document.elementFromPoint(v.clientX,v.clientY),S=w&&w.closest?w.closest("[data-tc]"):null;S&&S!==_.el&&Ff[S._tc]===E&&(_.el=S,_.name=S._tc,_.seq=++h,d())}function p(v){f.delete(v.pointerId)&&d()}const m=v=>v.preventDefault();c.forEach(v=>{v.addEventListener("pointerdown",g),v.addEventListener("pointermove",x),v.addEventListener("pointerup",p),v.addEventListener("pointercancel",p),v.addEventListener("lostpointercapture",p),v.addEventListener("contextmenu",m),v.addEventListener("touchstart",_=>{r.active&&_.cancelable&&_.preventDefault()},{passive:!1})}),window.addEventListener("pointerup",p,!0),window.addEventListener("pointercancel",p,!0),a.addEventListener("contextmenu",m),a.querySelectorAll("[data-act]").forEach(v=>{const _=v.getAttribute("data-act");v.addEventListener("click",E=>{E.preventDefault(),r.active&&s[_]&&s[_]()})});let y=null;return{node:a,state:r,setActive(v){v=!!v,u=!!(e&&e()),a.classList.toggle("auto",u),r.active!==v&&(r.active=v,a.classList.toggle("on",v),f.clear()),d()},setItem(v){const _=v?v.id||v.name||"?":"";_!==y&&(y=_,l.textContent=v?v.icon||"?":"",o.classList.toggle("empty",!v))},destroy(){window.removeEventListener("pointerup",p,!0),window.removeEventListener("pointercancel",p,!0),a.remove()}}}function Sy(i,{tracks:t=[],cars:e=[],items:n=[],handlers:s={}}={}){const r=cy();if(typeof document>"u"||!i){const p=()=>{};return{showMenu:p,hideMenu:p,showHUD:p,hideHUD:p,updateHUD:p,showCountdown:p,flashMessage:p,showPause:p,hidePause:p,showResults:p,hideResults:p,showLobby:p,updateLobby:p,showMpError:p,isLobbyVisible:()=>!1,getMenuScreen:()=>null,getSettings:()=>r.getSettings(),touch:{active:!1,throttle:0,steer:0,handbrake:!1,fire:!1},records:r.records,isCapturingInput:()=>!1,destroy:p}}ty();const a=en("div","tr-root");i.appendChild(a);const o=py(a,{tracks:t,cars:e,items:n,handlers:s,store:r}),l=xy(a),c=_y(a,s),f=by(a,s),h=wy(a,{handlers:s,getAutoGas:()=>r.getSettings().autoGas,itemSlot:l.itemEl});a.insertBefore(h.node,c.node);const u=()=>h.setActive(l.visible&&Ac()&&!o.visible&&!c.visible&&!f.visible),d=typeof MutationObserver<"u"?new MutationObserver(u):null;d&&d.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const g=()=>f.visible?f:c.visible?c:o.visible?o:null;function x(p){const m=g();if(!m||p.ctrlKey||p.metaKey||p.altKey||p.timeStamp&&p.timeStamp<m.shownAt)return;const y=m.handleKey(p);y===!0?(p.preventDefault(),p.stopPropagation()):y==="pass"&&p.stopPropagation()}return window.addEventListener("keydown",x,!0),{showMenu(p="title",m){c.hide(),f.hide(),o.show(p,m),u()},hideMenu(){o.hide(),u()},showLobby(p){c.hide(),f.hide(),u()},updateLobby(p){},isLobbyVisible(){return o.lobbyVisible},showMpError(p){c.hide(),f.hide(),u()},showHUD(){l.show(),u()},hideHUD(){l.hide(),u()},updateHUD(p){l.update(p),p&&p.item!==void 0&&h.setItem(p.item)},showCountdown(p){l.showCountdown(p)},flashMessage(p,m){l.flashMessage(p,m)},showPause(p){c.visible||c.show(p),u()},hidePause(){c.hide(),u()},showResults(p){c.hide(),f.show(p),u()},hideResults(){f.hide(),u()},getSettings(){return r.getSettings()},touch:h.state,records:r.records,isCapturingInput(){return!!g()},getMenuScreen(){return o.visible?o.screen:null},getSelection(){return o.getSelection()},destroy(){window.removeEventListener("keydown",x,!0),d&&d.disconnect(),h.destroy(),o.destroy(),l.destroy(),c.destroy(),f.destroy(),a.remove()}}}function Gt(i,t,{type:e="sine",f:n=440,f2:s=0,t:r=0,dur:a=.15,vol:o=.2,attack:l=.004,lp:c=0}){const f=i.createOscillator(),h=i.createGain();if(f.type=e,f.frequency.setValueAtTime(n,r),s>0&&f.frequency.exponentialRampToValueAtTime(s,r+a),h.gain.setValueAtTime(1e-4,r),h.gain.linearRampToValueAtTime(o,r+l),h.gain.exponentialRampToValueAtTime(1e-4,r+a),c>0){const u=i.createBiquadFilter();u.type="lowpass",u.frequency.value=c,f.connect(u),u.connect(h)}else f.connect(h);return h.connect(t),f.start(r),f.stop(r+a+.03),f}function Qe(i,t,e,{t:n=0,dur:s=.2,vol:r=.2,type:a="bandpass",f:o=1e3,f2:l=0,q:c=1,attack:f=.003}){const h=i.createBufferSource();h.buffer=e,h.loop=!0;const u=i.createBiquadFilter();u.type=a,u.Q.value=c,u.frequency.setValueAtTime(o,n),l>0&&u.frequency.exponentialRampToValueAtTime(l,n+s);const d=i.createGain();d.gain.setValueAtTime(1e-4,n),d.gain.linearRampToValueAtTime(r,n+f),d.gain.exponentialRampToValueAtTime(1e-4,n+s),h.connect(u),u.connect(d),d.connect(t),h.start(n,Math.random()*1.5),h.stop(n+s+.03)}const He=i=>440*Math.pow(2,(i-69)/12);function Js(i,t,e,n,s,r){Gt(i,t,{type:"sine",f:He(n),t:e,dur:s,vol:r}),Gt(i,t,{type:"triangle",f:He(n+12),t:e,dur:s*.6,vol:r*.35})}function ha(i,t,e,n,s,r){Gt(i,t,{type:"sawtooth",f:He(n),t:e,dur:s,vol:r*.6,attack:.015,lp:2600}),Gt(i,t,{type:"square",f:He(n)*1.004,t:e,dur:s,vol:r*.3,attack:.015,lp:1800})}const Ty={"ui-move":{gap:.03,fn(i,t,e,n,s){Gt(i,t,{type:"triangle",f:720,f2:940,t:n,dur:.06,vol:.16*s})}},"ui-select":{gap:.05,fn(i,t,e,n,s){Gt(i,t,{type:"triangle",f:He(76),t:n,dur:.09,vol:.2*s}),Gt(i,t,{type:"triangle",f:He(83),t:n+.07,dur:.16,vol:.2*s}),Gt(i,t,{type:"sine",f:He(95),t:n+.07,dur:.12,vol:.06*s})}},"ui-back":{gap:.05,fn(i,t,e,n,s){Gt(i,t,{type:"triangle",f:He(76),t:n,dur:.08,vol:.18*s}),Gt(i,t,{type:"triangle",f:He(69),t:n+.06,dur:.14,vol:.18*s})}},count:{gap:.1,fn(i,t,e,n,s){Gt(i,t,{type:"square",f:He(69),t:n,dur:.22,vol:.14*s,lp:1800}),Gt(i,t,{type:"sine",f:He(69),t:n,dur:.28,vol:.22*s})}},go:{gap:.1,fn(i,t,e,n,s){Gt(i,t,{type:"square",f:He(81),t:n,dur:.6,vol:.13*s,lp:2600}),Gt(i,t,{type:"sine",f:He(81),t:n,dur:.7,vol:.22*s}),Gt(i,t,{type:"triangle",f:He(88),t:n,dur:.6,vol:.12*s}),Qe(i,t,e,{t:n,dur:.35,vol:.06*s,type:"highpass",f:5e3})}},pickup:{gap:.05,fn(i,t,e,n,s){[84,88,91,96].forEach((r,a)=>Js(i,t,n+a*.055,r,.2,.17*s))}},boost:{gap:.15,fn(i,t,e,n,s){Qe(i,t,e,{t:n,dur:.75,vol:.22*s,f:500,f2:5200,q:1.4,attack:.05}),Gt(i,t,{type:"sawtooth",f:160,f2:880,t:n,dur:.55,vol:.12*s,attack:.03,lp:2400}),Gt(i,t,{type:"sine",f:320,f2:1760,t:n,dur:.5,vol:.08*s,attack:.03})}},fire:{gap:.06,fn(i,t,e,n,s){Gt(i,t,{type:"square",f:980,f2:190,t:n,dur:.2,vol:.16*s,lp:3200}),Qe(i,t,e,{t:n,dur:.12,vol:.14*s,f:2400,f2:700,q:.8}),Gt(i,t,{type:"sine",f:180,f2:70,t:n,dur:.14,vol:.2*s})}},explosion:{gap:.08,fn(i,t,e,n,s){Qe(i,t,e,{t:n,dur:.75,vol:.4*s,type:"lowpass",f:2600,f2:180,q:.5}),Gt(i,t,{type:"sine",f:130,f2:38,t:n,dur:.55,vol:.45*s}),Gt(i,t,{type:"triangle",f:310,f2:60,t:n,dur:.22,vol:.18*s}),Qe(i,t,e,{t:n+.02,dur:.14,vol:.14*s,type:"highpass",f:3500})}},zap:{gap:.08,fn(i,t,e,n,s){const r=Gt(i,t,{type:"sawtooth",f:1500,t:n,dur:.42,vol:.13*s,lp:4200});for(let a=0;a<12;a++)r.frequency.setValueAtTime((a%2?620:1500)*(1-a*.045),n+a*.032);Gt(i,t,{type:"square",f:2400,f2:300,t:n,dur:.35,vol:.05*s,lp:5e3}),Qe(i,t,e,{t:n,dur:.3,vol:.08*s,type:"highpass",f:4200})}},splat:{gap:.08,fn(i,t,e,n,s){Qe(i,t,e,{t:n,dur:.3,vol:.3*s,type:"lowpass",f:1500,f2:240,q:2}),Gt(i,t,{type:"sine",f:340,f2:70,t:n,dur:.22,vol:.26*s}),Gt(i,t,{type:"sine",f:190,f2:420,t:n+.13,dur:.1,vol:.14*s})}},crash:{gap:.09,fn(i,t,e,n,s){Qe(i,t,e,{t:n,dur:.32,vol:.32*s,f:1300,f2:400,q:.7}),Gt(i,t,{type:"sine",f:120,f2:48,t:n,dur:.25,vol:.36*s}),Gt(i,t,{type:"square",f:420,f2:150,t:n,dur:.07,vol:.08*s,lp:1800})}},bump:{gap:.07,fn(i,t,e,n,s){Gt(i,t,{type:"sine",f:170,f2:72,t:n,dur:.13,vol:.3*s}),Qe(i,t,e,{t:n,dur:.07,vol:.12*s,type:"lowpass",f:1400})}},lap:{gap:.2,fn(i,t,e,n,s){Js(i,t,n,88,.3,.2*s),Js(i,t,n+.12,93,.5,.2*s)}},"final-lap":{gap:.3,fn(i,t,e,n,s){for(let r=0;r<2;r++)[81,85,88].forEach((a,o)=>{Gt(i,t,{type:"square",f:He(a),t:n+r*.3+o*.075,dur:.11,vol:.11*s,lp:3e3}),Gt(i,t,{type:"sine",f:He(a),t:n+r*.3+o*.075,dur:.14,vol:.14*s})});Js(i,t,n+.6,93,.6,.18*s)}},finish:{gap:.5,fn(i,t,e,n,s){[[72,0,.16],[76,.14,.16],[79,.28,.16],[84,.42,.7]].forEach(([r,a,o])=>ha(i,t,n+a,r,o,.2*s)),ha(i,t,n+.42,76,.7,.12*s),Qe(i,t,e,{t:n+.42,dur:.5,vol:.05*s,type:"highpass",f:6e3})}},win:{gap:.5,fn(i,t,e,n,s){[[72,0,.14],[72,.15,.1],[72,.26,.1],[76,.38,.2],[79,.6,.2],[76,.82,.12],[79,.95,.14],[84,1.1,1]].forEach(([a,o,l])=>ha(i,t,n+o,a,l,.2*s)),[[60,.38,.4],[64,.6,.4],[67,1.1,1],[76,1.1,1],[48,1.1,1]].forEach(([a,o,l])=>ha(i,t,n+o,a,l,.1*s)),[1.1,1.2,1.3,1.42].forEach((a,o)=>Js(i,t,n+a,96+[0,4,7,12][o],.5,.08*s)),Qe(i,t,e,{t:n+1.1,dur:.9,vol:.05*s,type:"highpass",f:6e3})}}},xn=i=>440*Math.pow(2,(i-69)/12),Ey=.16,Ay=30,Bf=[[[0,"m"],[-4,"M"],[3,"M"],[-2,"M"]],[[0,"m"],[-2,"M"],[-4,"M"],[-5,"M"]],[[5,"m"],[0,"m"],[-4,"M"],[-2,"M"]],[[-4,"M"],[-2,"M"],[0,"m"],[0,"m"]],[[0,"m"],[3,"M"],[-2,"M"],[5,"m"]]],Hf=[[[0,"M7"],[-3,"m7"],[5,"M7"],[7,"M"]],[[5,"M7"],[4,"m7"],[2,"m7"],[7,"M"]],[[-3,"m7"],[5,"M7"],[0,"M7"],[7,"M"]]],Gf={m:[0,3,7],M:[0,4,7],m7:[0,3,7,10],M7:[0,4,7,11]},Vf=[[0,1,2,3,2,1,0,1,2,3,2,1,0,1,2,3],[0,2,1,3,0,2,1,3,0,2,1,3,3,2,1,0],[3,2,1,0,3,2,1,0,3,2,1,0,1,2,3,2],[0,0,2,0,1,0,3,0,0,0,2,0,1,3,2,1]];function Cy(i,t,e){let n=null,s=null,r=null,a=0,o=0,l=1,c=null;const f=()=>(l=l*1664525+1013904223>>>0,l/4294967296),h=E=>E[Math.floor(f()*E.length)];function u(E){if(s==="race"){const w=[],S=[0,3,5,7,10,12,15];let A=2+Math.floor(f()*3);for(let b=0;b<32;b++)f()<(b%4===0?.85:.5)?(A=Math.max(0,Math.min(S.length-1,A+Math.floor(f()*5)-2)),w.push(S[A])):w.push(null);c={prog:E===0?Bf[0]:h(Bf),arp:h(Vf),lead:E%2===1||f()<.35?w:null,breakdown:E>0&&E%4===3,bassOct:f()<.5,openHat:f()<.6}}else c={prog:E===0?Hf[0]:h(Hf),arp:h(Vf),sparkle:f()<.6}}const d=(E,w)=>Gt(i,r,{type:"sine",f:150,f2:42,t:E,dur:.2,vol:w,attack:.002}),g=(E,w)=>{Qe(i,r,e,{t:E,dur:.15,vol:w,f:1900,q:.7}),Gt(i,r,{type:"triangle",f:210,f2:140,t:E,dur:.09,vol:w*.6})},x=(E,w,S)=>Qe(i,r,e,{t:E,dur:S?.16:.04,vol:w,type:"highpass",f:7500});function p(E,w,S){const A=Math.floor(E/16),b=E%16,M=Math.floor(A/4);E%64===0&&u(M);const[P,z]=c.prog[A%4],U=45+P,F=Gf[z],H=A%4===3;if(!c.breakdown||A%4>=2?(b%4===0&&d(w,.34),(b===4||b===12)&&g(w,.17),H&&b>=12&&g(w,.07+(b-12)*.03)):b===0&&d(w,.3),b%2===0?x(w,b%4===2?.07:.035,c.openHat&&b===14):x(w,.02,!1),b%2===0){const W=c.bassOct?b===6||b===14:b===10;Gt(i,r,{type:"sawtooth",f:xn(U+(W?12:0)-12),t:w,dur:S*1.7,vol:.2,attack:.006,lp:W?900:520}),Gt(i,r,{type:"sine",f:xn(U-12),t:w,dur:S*1.7,vol:.14,attack:.006})}const G=c.arp[b],Y=U+24+(G===3?12:F[G%F.length]);if(Gt(i,r,{type:"square",f:xn(Y),t:w,dur:S*.9,vol:c.breakdown?.05:.036,lp:2600}),b===3||b===10)for(let W=0;W<F.length;W++)Gt(i,r,{type:"sawtooth",f:xn(U+12+F[W]),t:w,dur:S*1.6,vol:.03,attack:.01,lp:1700});if(c.lead&&b%2===0){const W=c.lead[(A%2*16+b)/2+(A%4>=2?16:0)];if(W!=null){const V=69+W;Gt(i,r,{type:"triangle",f:xn(V),t:w,dur:S*2.4,vol:.085,attack:.012}),Gt(i,r,{type:"square",f:xn(V)*1.003,t:w,dur:S*2,vol:.022,attack:.012,lp:3e3})}}}function m(E,w,S){const A=Math.floor(E/16),b=E%16;E%64===0&&u(Math.floor(A/4));const[M,P]=c.prog[A%4],z=48+M,U=Gf[P],F=b%2===1?S*.18:0,H=w+F;if(b===0)for(let G=0;G<U.length;G++)Gt(i,r,{type:"triangle",f:xn(z+12+U[G]),t:w,dur:S*16.5,vol:.038,attack:.25}),Gt(i,r,{type:"sine",f:xn(z+12+U[G])*1.004,t:w,dur:S*16.5,vol:.028,attack:.3});if((b===0||b===7||b===10)&&Gt(i,r,{type:"sine",f:xn(z-12),t:H,dur:S*(b===0?5:2.5),vol:.2,attack:.01}),(b===0||b===10)&&Gt(i,r,{type:"triangle",f:xn(z),t:H,dur:S*2,vol:.05,attack:.01}),(b===0||b===10)&&d(H,.2),(b===4||b===12)&&Qe(i,r,e,{t:H,dur:.09,vol:.05,f:2200,q:1.2}),b%2===0&&x(H,b%4===2?.03:.014,!1),b%2===0&&f()<.72){const G=c.arp[b],Y=z+24+(G===3?12:U[G%U.length]);Gt(i,r,{type:"triangle",f:xn(Y),t:H,dur:S*3,vol:.07,attack:.004})}c.sparkle&&(b===6||b===14)&&f()<.5&&Gt(i,r,{type:"sine",f:xn(z+36+h(U)),t:H,dur:S*4,vol:.035})}function y(){if(!s||i.state!=="running")return;const E=i.currentTime;o<E-.25&&(o=E+.05);const w=s==="race"?60/140/4:60/92/4;let S=0;for(;o<E+Ey&&S++<16;)s==="race"?p(a,o,w):m(a,o,w),o+=w,a++}function v(){if(n!=null&&clearInterval(n),n=null,s=null,r){const E=r,w=i.currentTime;try{E.gain.cancelScheduledValues(w),E.gain.setValueAtTime(E.gain.value,w),E.gain.linearRampToValueAtTime(1e-4,w+.35)}catch{}setTimeout(()=>{try{E.disconnect()}catch{}},1200),r=null}}function _(E){if(E!=="menu"&&E!=="race"&&(E="menu"),s===E)return;v(),s=E,r=i.createGain();const w=i.currentTime;r.gain.setValueAtTime(1e-4,w),r.gain.linearRampToValueAtTime(E==="race"?.85:1,w+.4),r.connect(t),a=0,l=(Math.floor(Math.random()*1e9)|1)>>>0,o=w+.08,n=setInterval(y,Ay),y()}return{start:_,stop:v,get kind(){return s}}}const Pi=(i,t)=>typeof i=="number"&&isFinite(i)?Math.min(1,Math.max(0,i)):t;function Ry(){let i=null,t=null,e=null,n=null,s=null,r=null,a=null,o=null,l=null;const c={master:.8,music:.6,sfx:.9};let f=!1,h=null;const u={rpm:0,throttle:0,active:!1};let d=0;const g={},x=()=>typeof window<"u"?window.AudioContext||window.webkitAudioContext:null;function p(w,S,A=.05){const b=i.currentTime;w.cancelScheduledValues(b),w.setTargetAtTime(S,b,A)}function m(){const w=i.createDynamicsCompressor();w.threshold.value=-14,w.knee.value=12,w.ratio.value=8,w.attack.value=.004,w.release.value=.18,w.connect(i.destination),e=i.createGain(),e.gain.value=f?0:1,e.connect(w),t=i.createGain(),t.gain.value=c.master,t.connect(e),n=i.createGain(),n.gain.value=c.music,n.connect(t),s=i.createGain(),s.gain.value=c.sfx,s.connect(t);const S=Math.floor(i.sampleRate*2);r=i.createBuffer(1,S,i.sampleRate);const A=r.getChannelData(0);for(let b=0;b<S;b++)A[b]=Math.random()*2-1;y(),_(),a=Cy(i,n,r)}function y(){const w=i.createGain();w.gain.value=0;const S=i.createBiquadFilter();S.type="lowpass",S.frequency.value=700,S.Q.value=.8,S.connect(w),w.connect(s);const A=(W,V)=>{const Q=i.createOscillator();Q.type=W;const tt=i.createGain();return tt.gain.value=V,Q.connect(tt),tt.connect(S),Q.start(),{o:Q,g:tt}},b=A("sawtooth",.3),M=A("sawtooth",.22),P=A("triangle",0),z=A("square",.1),U=i.createBufferSource();U.buffer=r,U.loop=!0;const F=i.createBiquadFilter();F.type="bandpass",F.Q.value=2.2,F.frequency.value=900;const H=i.createGain();H.gain.value=0,U.connect(F),F.connect(H),H.connect(w),U.start();const G=i.createOscillator();G.frequency.value=11;const Y=i.createGain();Y.gain.value=2.5,G.connect(Y),Y.connect(b.o.frequency),Y.connect(M.o.frequency),G.start(),o={out:w,lp:S,a:b,b:M,whine:P,sub:z,nf:F,ng:H},v()}function v(){if(!o)return;const w=u.rpm,S=u.throttle,A=70+w*w*150+w*190;p(o.a.o.frequency,A,.06),p(o.b.o.frequency,A*1.012+1.5,.06),p(o.sub.o.frequency,A*.5,.06),p(o.whine.o.frequency,A*4.02,.06),p(o.whine.g.gain,.03+w*.16+S*.05,.08),p(o.lp.frequency,500+w*2300+S*900,.08),p(o.nf.frequency,600+w*3200,.08),p(o.ng.gain,u.active?.01+w*.035+S*.02:0,.1),p(o.out.gain,u.active?.035+w*.05+S*.055:0,u.active?.08:.15)}function _(){const w=i.createBufferSource();w.buffer=r,w.loop=!0;const S=i.createBiquadFilter();S.type="bandpass",S.frequency.value=1700,S.Q.value=4.5;const A=i.createBiquadFilter();A.type="peaking",A.frequency.value=2600,A.Q.value=3,A.gain.value=8;const b=i.createGain();b.gain.value=0,w.connect(S),S.connect(A),A.connect(b),b.connect(s),w.start(),l={bp:S,g:b},E()}function E(){l&&(p(l.g.gain,d*d*.3,.07),p(l.bp.frequency,1300+d*900,.1))}return{unlock(){const w=x();if(w){if(!i)try{i=new w({latencyHint:"interactive"}),m()}catch{i=null;return}if(i.state==="suspended"){const S=i.resume();S&&S.catch&&S.catch(()=>{})}h&&a&&a.kind!==h&&a.start(h)}},setVolumes({master:w,music:S,sfx:A}={}){c.master=Pi(w,c.master),c.music=Pi(S,c.music),c.sfx=Pi(A,c.sfx),i&&(p(t.gain,c.master),p(n.gain,c.music),p(s.gain,c.sfx))},setEngine({rpm:w=0,throttle:S=0,active:A=!1}={}){u.rpm=Pi(w,0),u.throttle=Pi(Math.abs(S),0),u.active=!!A,i&&v()},setSkid(w){const S=Pi(w,0);S!==d&&(d=S,i&&E())},play(w,{volume:S=1}={}){if(!i||i.state==="closed")return;const A=Ty[w];if(!A)return;const b=i.currentTime;if(g[w]!=null&&b-g[w]<A.gap)return;g[w]=b;const M=Pi(S,1);if(!(M<=0))try{A.fn(i,s,r,b+.005,M)}catch{}},startMusic(w){h=w==="race"?"race":"menu",i&&a&&a.start(h)},stopMusic(){h=null,i&&a&&a.stop()},setMuted(w){f=!!w,i&&p(e.gain,f?0:1,.03)},isMuted:()=>f,isUnlocked:()=>!!i&&i.state==="running",get context(){return i}}}const Py=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyW","KeyA","KeyS","KeyD","KeyX","KeyB","ShiftLeft","ShiftRight","ControlLeft","ControlRight"]);function Ly(){const i=new Set,t=[],e=new Set(["Space","KeyX","ControlLeft","ControlRight"]);let n=!1;const s={capture:!1,onPress(r){t.push(r)},isDown:r=>i.has(r),clear(){i.clear(),n=!1},consumeFire(){n=!1},read(r){let a=0,o=0,l=!1,c=!1;(i.has("ArrowUp")||i.has("KeyW"))&&(a+=1),(i.has("ArrowDown")||i.has("KeyS"))&&(a-=1),(i.has("ArrowLeft")||i.has("KeyA"))&&(o+=1),(i.has("ArrowRight")||i.has("KeyD"))&&(o-=1),(i.has("ShiftLeft")||i.has("ShiftRight")||i.has("KeyB"))&&(l=!0),(i.has("Space")||i.has("KeyX")||i.has("ControlLeft")||i.has("ControlRight"))&&(c=!0);const f=typeof navigator<"u"&&navigator.getGamepads?navigator.getGamepads():[];for(const h of f){if(!h||!h.connected)continue;const u=h.axes[0]||0;Math.abs(u)>.15&&(o-=u);const d=g=>h.buttons[g]?h.buttons[g].value:0;a+=d(7)-d(6),d(14)>.5&&(o+=1),d(15)>.5&&(o-=1),(d(0)>.5||d(1)>.5)&&(l=!0),(d(2)>.5||d(5)>.5)&&(c=!0);break}return r.throttle=Math.max(-1,Math.min(1,a)),r.steer=Math.max(-1,Math.min(1,o)),r.handbrake=l,r.fire=c||n,r}};return window.addEventListener("keydown",r=>{if(s.capture&&Py.has(r.code)&&r.preventDefault(),!r.repeat){i.add(r.code),e.has(r.code)&&(n=!0);for(const a of t)a(r.code,r)}}),window.addEventListener("keyup",r=>i.delete(r.code)),window.addEventListener("blur",()=>i.clear()),s}const Wo=[{name:"Chase",dist:6.2,height:2.7,look:3,lookY:.9,stiff:5.5},{name:"Far chase",dist:9.5,height:4.4,look:4,lookY:.8,stiff:4.5},{name:"Bumper",dist:-.9,height:.75,look:8,lookY:.6,stiff:30},{name:"Overhead",dist:3.5,height:24,look:2,lookY:0,stiff:4}];function Wf(i,t,e){let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e}class Iy{constructor(t){this.camera=t,this.mode=0,this.yaw=0,this.shake=0,this.shakeEnabled=!0,this.baseFov=62,this._pos=new N,this._look=new N,this._lookSm=new N,this._init=!1,this._orbit=0}get modeName(){return Wo[this.mode].name}nextMode(){return this.mode=(this.mode+1)%Wo.length,this._init=!1,this.modeName}snap(){this._init=!1}addShake(t){this.shakeEnabled&&(this.shake=Math.min(1,this.shake+t))}follow(t,e,n){const s=Wo[this.mode],r=this.camera;let a=t.heading;if(Math.hypot(t.vel.x,t.vel.z)>6&&t.speed>0){const g=Math.atan2(t.vel.x,t.vel.z);a=Wf(t.heading,g,.35)}this._init||(this.yaw=a);const l=t.spinTime>0;this.yaw=Wf(this.yaw,a,1-Math.exp(-(l?1.2:s.stiff)*e));const c=Math.sin(this.yaw),f=Math.cos(this.yaw);if(this._pos.set(t.pos.x-c*s.dist,t.pos.y+s.height,t.pos.z-f*s.dist),n&&s.dist>0){const g=n.project(this._pos,t.trackT);this._pos.y<g.y+1.2&&(this._pos.y=g.y+1.2)}if(this._look.set(t.pos.x+c*s.look,t.pos.y+s.lookY,t.pos.z+f*s.look),!this._init)r.position.copy(this._pos),this._lookSm.copy(this._look),this._init=!0;else{const g=1-Math.exp(-s.stiff*1.6*e);r.position.lerp(this._pos,g),this._lookSm.lerp(this._look,1-Math.exp(-14*e))}if(this.shake>.001){const g=this.shake*.35;r.position.x+=(Math.random()-.5)*g,r.position.y+=(Math.random()-.5)*g,r.position.z+=(Math.random()-.5)*g,this.shake*=Math.exp(-6*e)}r.lookAt(this._lookSm);const h=t.def&&t.def.topSpeed?t.def.topSpeed:35,u=Math.min(1.4,Math.abs(t.speed)/h),d=this.baseFov+u*14+(t.boostTime>0?8:0);r.fov+=(d-r.fov)*(1-Math.exp(-4*e)),r.updateProjectionMatrix()}orbit(t,e,{radius:n=6,height:s=2.2,speed:r=.5,lookY:a=.5}={}){this._orbit+=e*r;const o=this.camera;o.position.set(t.x+Math.sin(this._orbit)*n,t.y+s,t.z+Math.cos(this._orbit)*n),this._look.set(t.x,t.y+a,t.z),o.lookAt(this._look),o.fov+=(45-o.fov)*(1-Math.exp(-4*e)),o.updateProjectionMatrix(),this._init=!1}flyover(t,e,n,{height:s=7,back:r=12,ahead:a=.03}={}){const o=this.camera,l=t.sample((e%1+1)%1);this._pos.set(l.pos.x-l.tangent.x*r,l.pos.y+s,l.pos.z-l.tangent.z*r);const c=t.sample(((e+a)%1+1)%1);this._look.copy(c.pos),this._fly||(o.position.copy(this._pos),this._lookSm.copy(this._look),this._fly=!0),o.position.lerp(this._pos,1-Math.exp(-2.5*n)),this._lookSm.lerp(this._look,1-Math.exp(-2.5*n)),o.lookAt(this._lookSm),o.fov+=(58-o.fov)*(1-Math.exp(-4*n)),o.updateProjectionMatrix(),this._init=!1}resetFly(){this._fly=!1}}const ud={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ds{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ky=new uc(-1,1,1,-1,0,1);class Dy extends fe{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}}const Uy=new Dy;class Rc{constructor(t){this._mesh=new Ct(Uy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ky)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class dd extends Ds{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=cr.clone(t.uniforms),this.material=new qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Rc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xf extends Ds{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Ny extends Ds{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class zy{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ft);this._width=n.width,this._height=n.height,e=new bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:On}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dd(ud),this.copyPass.material.blending=Qn,this.clock=new fv}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xf!==void 0&&(a instanceof Xf?n=!0:a instanceof Ny&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Fy extends Ds{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Nt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Oy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Nt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class As extends Ds{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ft(t.x,t.y):new ft(256,256),this.clearColor=new Nt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new bn(r,a,{type:On}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new bn(r,a,{type:On});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new bn(r,a,{type:On});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=Oy;this.highPassUniforms=cr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ft(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=ud;this.copyUniforms=cr.clone(f.uniforms),this.blendMaterial=new qe({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:_n,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Nt,this.oldClearAlpha=1,this.basic=new xe,this.fsQuad=new Rc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ft(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=As.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=As.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new qe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new qe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}As.BlurDirectionX=new ft(1,0);As.BlurDirectionY=new ft(0,1);const By={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Hy extends Ds{constructor(){super();const t=By;this.uniforms=cr.clone(t.uniforms),this.material=new rv({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Rc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===tu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===nu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===iu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===su&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gy extends ku{constructor(){super();const t=new pn;t.deleteAttribute("uv");const e=new Te({side:Ye}),n=new Te,s=new Sc(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Ct(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Ct(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Ct(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Ct(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Ct(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const f=new Ct(t,n);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);const h=new Ct(t,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const u=new Ct(t,ds(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const d=new Ct(t,ds(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new Ct(t,ds(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const x=new Ct(t,ds(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const p=new Ct(t,ds(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const m=new Ct(t,ds(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function ds(i){const t=new xe;return t.color.setScalar(i),t}const Vy={uniforms:{tDiffuse:{value:null},vignette:{value:.32},saturation:{value:1.1}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse; uniform float vignette; uniform float saturation;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = mix(vec3(l), c.rgb, saturation);
      float d = distance(vUv, vec2(0.5));
      c.rgb *= 1.0 - vignette * smoothstep(0.38, 0.85, d);
      gl_FragColor = c;
    }`};function Wy(i,t,e){const n=new Nl(i),s=new Gy;t.environment=n.fromScene(s,.04).texture,t.environmentIntensity=.3,n.dispose();const r=i.capabilities.getMaxAnisotropy();let a=null,o=null,l="medium",c=1,f=1;function h(){if(a&&(a.dispose(),a=null),l==="low")return;const u=new bn(c,f,{type:On,samples:l==="high"?4:2});a=new zy(i,u),a.addPass(new Fy(t,e)),o=new As(new ft(c/2,f/2),.32,.55,.9),a.addPass(o),a.addPass(new dd(Vy)),a.addPass(new Hy),a.setPixelRatio(i.getPixelRatio()),a.setSize(c,f)}return{setQuality(u){const d=u==="low"||u==="high"?u:"medium";d===l&&(a||d==="low")||(l=d,h())},resize(u,d){c=Math.max(1,u),f=Math.max(1,d),a?(a.setPixelRatio(i.getPixelRatio()),a.setSize(c,f)):l!=="low"&&h()},prepareTrack(u){const d=Math.min(8,r);u.group.traverse(g=>{if(g.material)for(const x of[].concat(g.material))for(const p of["map","emissiveMap","roughnessMap","normalMap"]){const m=x[p];m&&m.anisotropy!==d&&(m.anisotropy=d,m.needsUpdate=!0)}})},render(u){a?a.render(u):i.render(t,e)}}}function Xy(i,t){const e=document.createElement("canvas"),n=e.getContext("2d"),s='900 44px system-ui, -apple-system, "Segoe UI", sans-serif';n.font=s;const r=String(i||"").slice(0,16),a=Math.ceil(n.measureText(r).width)+44;e.width=Math.max(96,a),e.height=72,n.font=s,n.textAlign="center",n.textBaseline="middle";const o=22;n.beginPath(),n.roundRect(3,3,e.width-6,e.height-6,o),n.fillStyle=t?"rgba(20, 24, 52, 0.88)":"rgba(20, 24, 52, 0.55)",n.fill(),n.lineWidth=5,n.strokeStyle=t?"#e8b730":"rgba(255,255,255,0.35)",n.stroke(),n.fillStyle=t?"#f2c94c":"#d8d8d8",n.fillText(r,e.width/2,e.height/2+2);const l=new mc(e);return l.colorSpace=We,l.anisotropy=4,{tex:l,aspect:e.width/e.height}}function qy(i){let t=[];const e=new hn;e.name="name-tags",i.add(e);function n(){for(const s of t)e.remove(s.sprite),s.sprite.material.map.dispose(),s.sprite.material.dispose();t=[]}return{set(s){n();for(const r of s){const{tex:a,aspect:o}=Xy(r.name,r.human),l=new pc({map:a,transparent:!0,depthWrite:!1,fog:!1}),c=new Uu(l);c.renderOrder=10,e.add(c),t.push({sprite:c,car:r.car,aspect:o,human:!!r.human})}},clear:n,update(s,r=!0){if(e.visible=r,!!r)for(const a of t){const o=a.car.pos,l=s.position.distanceTo(o),c=a.human?160:70;if(l>c||l<2.5){a.sprite.visible=!1;continue}a.sprite.visible=!0;const f=Math.min(4.2,Math.max(.55,l*.034))*(a.human?1.15:.9);a.sprite.scale.set(f*a.aspect,f,1),a.sprite.position.set(o.x,o.y+1.5+f*.6,o.z),a.sprite.material.opacity=Math.min(1,(c-l)/(c*.25))}}}}const pd=[];function Yy(){if(typeof window>"u")return!1;const i=window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,t="ontouchstart"in window||(navigator.maxTouchPoints||0)>0,e=Math.min(window.screen.width,window.screen.height)<=900;return/[?&]mobile=1/.test(location.search)||i&&t&&e}const Ge={el:null,width:1280,height:720,rotated:!1,isTouch:!1,onChange(i){pd.push(i)}};function Qs(){const i=Ge.el,t=document.activeElement;if(Ge.isTouch&&t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")&&Ge.width>0&&Ge.el.style.width)return;const e=window.innerWidth,n=window.innerHeight,s=Ge.isTouch&&n>e;Ge.rotated=s,s?(Ge.width=n,Ge.height=e,i.style.width=`${n}px`,i.style.height=`${e}px`,i.style.left=`${e}px`,i.style.top="0px",i.style.transformOrigin="0 0",i.style.transform="rotate(90deg)"):(Ge.width=e,Ge.height=n,i.style.width=`${e}px`,i.style.height=`${n}px`,i.style.left="0px",i.style.top="0px",i.style.transform="none"),document.documentElement.classList.toggle("tr-touch",Ge.isTouch),document.documentElement.classList.toggle("tr-rotated",s);for(const r of pd)r(Ge)}async function jy(){if(Ge.isTouch){try{const i=document.documentElement;!window.matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches&&!document.fullscreenElement&&i.requestFullscreen&&await i.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}}}function Zy(){return Ge.el=document.getElementById("app"),Ge.isTouch=Yy(),Qs(),window.addEventListener("resize",Qs),document.addEventListener("focusout",()=>setTimeout(Qs,120)),window.addEventListener("orientationchange",()=>setTimeout(Qs,60)),window.visualViewport&&window.visualViewport.addEventListener("resize",Qs),window.addEventListener("pointerup",jy,{passive:!0}),document.addEventListener("gesturestart",i=>i.preventDefault()),document.addEventListener("touchmove",i=>{i.touches.length>1&&i.preventDefault()},{passive:!1}),Ge}const md="tt.pwa.installHintDismissed",Xo="tt.pwa.updateReload",qf="tr-pwa-style";let ys=null,Ba=!1,Yf=!1,jf=!1;const Kl=new Set;function mr(){return typeof window<"u"&&typeof document<"u"}function Pa(){const i=Lc();for(const t of[...Kl])try{t(i)}catch(e){console.error(e)}}function gd(){Yf||!mr()||(Yf=!0,window.addEventListener("beforeinstallprompt",i=>{i.preventDefault(),ys=i,Pa()}),window.addEventListener("appinstalled",()=>{ys=null,Ba=!0,Pa()}))}gd();function Pc(){if(!mr())return!1;try{if(window.matchMedia("(display-mode: standalone), (display-mode: fullscreen), (display-mode: minimal-ui)").matches&&!document.fullscreenElement)return!0}catch{}return navigator.standalone===!0}function xd(){if(typeof navigator>"u")return!1;const i=navigator.userAgent||"";return/iPad|iPhone|iPod/.test(i)?!0:navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Lc(){return!!ys&&!Ba&&!Pc()}function $y(){return Ba||Pc()?!1:Lc()||xd()&&mr()&&window.isSecureContext!==!1}function Ky(i){Kl.add(i);try{i(Lc())}catch(t){console.error(t)}return()=>Kl.delete(i)}async function Jy(){if(Ba||Pc())return{outcome:"installed"};if(ys){const i=ys;ys=null;try{await i.prompt();const t=await i.userChoice;return Pa(),{outcome:t&&t.outcome==="accepted"?"accepted":"dismissed"}}catch{return Pa(),{outcome:"unavailable"}}}return xd()?{outcome:"ios-instructions"}:{outcome:"unavailable"}}async function Qy({applyWaitingOnLaunch:i}){const t="/",e=t+"sw.js",n=!!navigator.serviceWorker.controller,s=mr()&&window.performance?performance.now():0,r=await navigator.serviceWorker.register(e,{scope:t});if(i&&n&&r.waiting&&s<4e3){let a=!1;try{a=sessionStorage.getItem(Xo)==="1",sessionStorage.setItem(Xo,"1")}catch{a=!0}a||(navigator.serviceWorker.addEventListener("controllerchange",()=>window.location.reload(),{once:!0}),r.waiting.postMessage({type:"SKIP_WAITING"}))}else try{sessionStorage.removeItem(Xo)}catch{}return r}function tb(i={}){if(jf)return Promise.resolve(null);jf=!0,gd();const{applyWaitingOnLaunch:t=!0}=i;return!mr()||!("serviceWorker"in navigator)||window.isSecureContext===!1?Promise.resolve(null):new Promise(e=>{const n=()=>Qy({applyWaitingOnLaunch:t}).then(e,()=>e(null));document.readyState==="complete"?n():window.addEventListener("load",n,{once:!0})})}const eb=`
.tr-pwa-hint{position:absolute; top:max(.9em, env(safe-area-inset-top, 0px)); right:max(.9em, env(safe-area-inset-right, 0px)); z-index:40;
  display:none; align-items:center; gap:.15em; max-width:min(26em, 70%); pointer-events:auto;
  font:800 clamp(11px, 1.9vmin, 24px)/1.2 "Avenir Next","Segoe UI",system-ui,-apple-system,"Helvetica Neue",Arial,sans-serif;
  color:#0b0f22; background:linear-gradient(180deg,#ffd02e,#ffb224); border:.16em solid #0b0f22; border-radius:999px;
  box-shadow:.14em .18em 0 #0b0f22; padding:0; -webkit-user-select:none; user-select:none; -webkit-tap-highlight-color:transparent;
  animation:tr-pwa-in .28s ease-out both}
.tr-pwa-hint *{box-sizing:border-box}
.tr-pwa-hint.on{display:inline-flex}
.tr-pwa-hint.ios-open{border-radius:1.1em; align-items:flex-start; background:#fff6e0}
.tr-pwa-hint button{font:inherit; color:inherit; background:none; border:0; margin:0; cursor:pointer; touch-action:manipulation}
.tr-pwa-go{display:inline-flex; align-items:center; gap:.45em; padding:.5em .35em .46em .85em; text-align:left; letter-spacing:.01em}
.tr-pwa-go svg{width:1.15em; height:1.15em; flex:none}
.tr-pwa-go:hover .tr-pwa-label, .tr-pwa-go:focus-visible .tr-pwa-label{text-decoration:underline}
.tr-pwa-x{flex:none; width:1.9em; height:1.9em; margin-right:.2em; border-radius:50%; font-size:1em; line-height:1; display:inline-flex; align-items:center; justify-content:center; opacity:.7}
.tr-pwa-x:hover, .tr-pwa-x:focus-visible{opacity:1; background:rgba(11,15,34,.14)}
.tr-pwa-hint button:focus-visible{outline:.14em solid #0b0f22; outline-offset:-.1em; border-radius:999px}
.tr-pwa-ios{display:none; font-weight:600; padding:.6em .2em .6em .9em}
.tr-pwa-ios b{font-weight:800}
.tr-pwa-ios svg{width:1em; height:1em; vertical-align:-.14em}
.tr-pwa-hint.ios-open .tr-pwa-ios{display:block}
.tr-pwa-hint.ios-open .tr-pwa-go{display:none}
.tr-pwa-hint.ios-open .tr-pwa-x{margin-top:.25em}
@keyframes tr-pwa-in{from{opacity:0; transform:translateY(-.6em)} to{opacity:1; transform:none}}
@media (prefers-reduced-motion: reduce){.tr-pwa-hint{animation:none}}
`,nb='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M6.5 10.5 12 16l5.5-5.5M4 21h16"/></svg>',ib='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3M8 6.5 12 2.5l4 4M7 10H5v11h14V10h-2"/></svg>';function sb(){try{return!!localStorage.getItem(md)}catch{return!1}}function rb(i={}){const t=i.parent||document.getElementById("app")||document.body;if(!document.getElementById(qf)){const u=document.createElement("style");u.id=qf,u.textContent=eb,document.head.appendChild(u)}const e=document.createElement("div");e.className="tr-pwa-hint",e.setAttribute("role","region"),e.setAttribute("aria-label","Install app"),e.innerHTML='<button type="button" class="tr-pwa-go">'+nb+'<span class="tr-pwa-label">Install Toyz Race</span></button><div class="tr-pwa-ios">To install: tap <b>Share</b> '+ib+' in the browser bar, then <b>Add to Home Screen</b>.</div><button type="button" class="tr-pwa-x" aria-label="Dismiss">✕</button>';const n=e.querySelector(".tr-pwa-go"),s=e.querySelector(".tr-pwa-x");let r=!1,a=sb(),o=!1;function l(){if(o)return;const u=r&&!a&&$y();e.classList.toggle("on",u),u||e.classList.remove("ios-open")}function c(){a=!0;try{localStorage.setItem(md,String(Date.now()))}catch{}l()}for(const u of["pointerdown","pointerup","touchstart","touchend","mousedown","click"])e.addEventListener(u,d=>d.stopPropagation());n.addEventListener("click",async()=>{const{outcome:u}=await Jy();u==="ios-instructions"?e.classList.add("ios-open"):(u==="accepted"||u==="installed")&&l(),i.onOutcome&&i.onOutcome(u),u!=="ios-instructions"&&l()}),s.addEventListener("click",c);const f=Ky(l);let h=null;try{h=window.matchMedia("(display-mode: standalone), (display-mode: fullscreen)"),h.addEventListener("change",l)}catch{h=null}return t.appendChild(e),l(),{el:e,setVisible(u){r=!!u,l()},show(){this.setVisible(!0)},hide(){this.setVisible(!1)},dismiss:c,destroy(){o=!0,f(),h&&h.removeEventListener("change",l),e.remove()},get visible(){return e.classList.contains("on")}}}const ab=[10,8,6,5,4,3,2,1],vd=1/60,Jn=Zy();tb();const ob=rb();let Zf=null;const lb=document.getElementById("game"),Bn=new wx({canvas:lb,antialias:!0,powerPreference:"high-performance"});Bn.outputColorSpace=We;Bn.toneMapping=nc;Bn.toneMappingExposure=1.05;Bn.shadowMap.enabled=!0;Bn.shadowMap.type=Qf;const kn=new ku,Pn=new cn(62,1,.1,1500),nn=new Iy(Pn),Cs=Wy(Bn,kn,Pn),Jl=null,Ic=qy(kn),Gi={active:!1,settings:{trackId:_i[0].id,laps:3,difficulty:1,bots:7},peerIds:[]},sn=Ly(),se=Ry(),we={throttle:0,steer:0,handbrake:!1,fire:!1},at={state:"menu",track:null,race:null,config:null,championship:null,preview:{screen:"title",carId:Wi[0].id,trackId:_i[0].id},previewCar:null,previewCarId:null,flyT:0,muted:!1,lastResume:0,pendingTrackTimer:0,sunOffset:new N};function _d(i){const t=window.devicePixelRatio||1,e=Jn.isTouch?i==="low"?1:i==="high"?1.75:1.35:i==="low"?1:i==="high"?2:1.5;Bn.setPixelRatio(Math.min(t,e)),Cs.setQuality(Jn.isTouch?i==="high"?"medium":"low":i),Cs.resize(Jn.width,Jn.height),Bn.shadowMap.enabled=i!=="low",at.track&&at.track.sun&&(at.track.sun.castShadow=i!=="low"),kn.traverse(n=>{n.material&&[].concat(n.material).forEach(s=>{s.needsUpdate=!0})})}function yd(i){i&&(se.setVolumes({master:i.masterVolume,music:i.musicVolume,sfx:i.sfxVolume}),nn.shakeEnabled=i.cameraShake!==!1,i.quality!==at.quality&&(at.quality=i.quality,_d(i.quality)))}function bd(){const i=Jn.width,t=Jn.height;Bn.setSize(i,t,!1),Cs.resize(i,t),Pn.aspect=i/t,Pn.updateProjectionMatrix()}Jn.onChange(bd);function kc(i){if(at.track&&at.track.id===i)return at.track;if(at.track){kn.remove(at.track.group);try{at.track.dispose()}catch(r){console.warn(r)}}const t=a_(i);at.track=t,kn.add(t.group),kn.background=t.background||new Nt(8893920),kn.fog=t.fog||null;const e=1.3,n=t.sample,s=t.project;return t.sample=(r,a)=>{const o=n(r,a);return o.halfWidth+=e,o},t.project=(r,a,o)=>{const l=s(r,a,o);return l.halfWidth+=e,l},t.sun&&(t.sun.castShadow=at.quality!=="low"),Cs.prepareTrack(t),nn.resetFly(),nn.snap(),at.flyT=0,t}const $f=new N;function qo(i){!at.track||!at.track.followShadow||($f.set(Math.round(i.x/4)*4,i.y,Math.round(i.z/4)*4),at.track.followShadow($f,64))}function Ha(){at.previewCar&&(kn.remove(at.previewCar),at.previewCar.userData.dispose&&at.previewCar.userData.dispose(),at.previewCar=null,at.previewCarId=null)}function cb(i){if(at.previewCarId===i&&at.previewCar)return;Ha();const t=ed(i),e=at.track.startGrid[0];t.position.copy(e.pos),t.rotation.y=e.heading,kn.add(t),at.previewCar=t,at.previewCarId=i}function hb(i){if(at.state!=="menu")return;Object.assign(at.preview,i||{});const t=Md()&&at.preview.trackId?at.preview.trackId:null;clearTimeout(at.pendingTrackTimer),t&&(!at.track||at.track.id!==t)&&(at.pendingTrackTimer=setTimeout(()=>{at.state==="menu"&&(Ha(),kc(t))},220))}function Md(){return at.preview.screen==="track"||at.preview.screen==="lobby"}function fb(){const i=String(at.preview.screen||"");return/car/i.test(i)}function wd(){if(Ic.clear(),at.race){try{at.race.dispose()}catch(i){console.warn(i)}at.race=null}}function La(i){clearTimeout(at.pendingTrackTimer),Ha(),wd(),Pn.clearViewOffset(),at.config=i;const t=kc(i.trackId),e=i.mode==="timetrial",n=new J_({scene:kn,track:t,playerCarId:i.carId,playerName:i.playerName||"You",laps:i.laps||t.defaultLaps||3,opponents:e?0:Math.max(0,Math.min(7,i.opponents??7)),difficulty:i.difficulty??1,mode:e?"timetrial":"race",autopilot:!!i.autopilot,net:i.net||void 0});at.race=n,ub(n),Ic.set((n.states||n.cars.map(s=>({car:s}))).filter(s=>s.car!==n.player).map(s=>({car:s.car,name:s.car.name,human:!!i.net&&!!s.human}))),at.state="racing",sn.capture=!0,sn.clear(),Kt.hideMenu(),Kt.hideResults(),Kt.hidePause(),Kt.showHUD(),nn.snap(),se.stopMusic(),se.startMusic("race"),n.update(1e-4,we)}function Kf(i){const t=at.race&&at.race.player;if(!t||i===t)return 1;const e=i.pos.distanceTo(t.pos);return Math.max(0,1-e/55)}function Yo(i){if(i==null||!isFinite(i))return"--:--.--";const t=Math.floor(i/60),e=i-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}function ub(i){const t=at.track.id;i.on("countdown",e=>{Kt.showCountdown(String(e)),se.play("count")}),i.on("go",()=>{Kt.showCountdown("GO!"),se.play("go")}),i.on("lap",(e,n,s,r)=>{if(e!==i.player)return;se.play("lap");const a=Kt.records.getBestLap(t);s>1&&(!a||s<a)?(Kt.records.setBestLap(t,s),at.newRecord=!0,Kt.flashMessage(`NEW LAP RECORD  ${Yo(s)}`,2200)):r?Kt.flashMessage(`BEST LAP  ${Yo(s)}`,1600):Kt.flashMessage(`LAP  ${Yo(s)}`,1400)}),i.on("finalLap",e=>{e===i.player&&(se.play("final-lap"),setTimeout(()=>Kt.flashMessage("FINAL LAP",1800),1500))}),i.on("finish",(e,n)=>{e===i.player&&(se.play(n===1?"win":"finish"),Kt.flashMessage(n===1?"YOU WIN!":"FINISHED!",2500))}),i.on("pickup",e=>{e===i.player&&se.play("pickup")}),i.on("fire",e=>{const n=Kf(e);n>.05&&se.play("fire",{volume:n})}),i.on("hit",(e,n)=>{const s=Kf(e);s>.05&&se.play(/shock|pulse|zap/i.test(String(n))?"zap":/slick|glue|puddle|goo/i.test(String(n))?"splat":"explosion",{volume:s}),e===i.player&&nn.addShake(.8)}),i.on("boost",e=>{e===i.player&&se.play("boost")}),i.on("crash",(e,n)=>{if(e!==i.player)return;const s=Math.min(1,(n||0)/20);se.play(s>.45?"crash":"bump",{volume:.4+s*.6}),nn.addShake(s*.7)}),i.on("raceOver",e=>db(e)),at.newRecord=!1}function db(i){if(at.state!=="racing"&&at.state!=="paused")return;const t=at.race;i=i||t.standings(),at.state="results",sn.capture=!1,Kt.hidePause(),Kt.hideHUD(),se.setEngine({rpm:0,throttle:0,active:!1}),se.setSkid(0);const e=at.config,n=i.find(a=>a.isPlayer);let s=!!at.newRecord;if(n&&n.finished&&n.finishTime>0&&isFinite(n.finishTime)&&e.mode!=="championship"&&!Gi.active){const a=Kt.records.getBestRace(at.track.id,e.laps);(!a||n.finishTime<a)&&(Kt.records.setBestRace(at.track.id,e.laps,n.finishTime),s=!0)}let r=null;if(at.championship){const a=at.championship;if(!a.scored){for(const l of i){const c=a.points.get(l.name)||{name:l.name,points:0,isPlayer:!!l.isPlayer};c.points+=ab[l.position-1]||0,a.points.set(l.name,c)}a.scored=!0}const o=[...a.points.values()].sort((l,c)=>c.points-l.points);r={round:a.round+1,rounds:a.order.length,table:o,final:a.round>=a.order.length-1}}Sd(),Kt.showResults({standings:i,mode:e.mode,trackName:at.track.name,newRecord:s,championship:r,multiplayer:void 0})}function jo(){const i=at.championship;i.scored=!1;const t=i.order[i.round],e=_i.find(n=>n.id===t);La({...i.base,mode:"championship",trackId:t,laps:e.defaultLaps||i.base.laps||3})}function _a(i="title",t){wd(),at.overlay=!1,at.championship=null,at.state="menu",sn.capture=!1,Kt.hideHUD(),Kt.hidePause(),Kt.hideResults(),se.setEngine({rpm:0,throttle:0,active:!1}),se.setSkid(0),se.stopMusic(),se.startMusic("menu"),nn.resetFly(),at.preview.screen=i,Kt.showMenu(i,t)}function pb(i){}function mb(i){}function Sd(){at.overlay&&(at.overlay=!1,Kt.hidePause())}function Dc(){if(at.state==="racing"&&!(performance.now()-at.lastResume<250)){if(Gi.active){if(at.overlay)return;at.overlay=!0,sn.capture=!1,sn.clear(),setTimeout(()=>{at.overlay&&Kt.showPause({multiplayer:!0})},0);return}at.state="paused",sn.capture=!1,se.setEngine({rpm:0,throttle:0,active:!1}),se.setSkid(0),setTimeout(()=>{at.state==="paused"&&Kt.showPause()},0)}}function gb(){if(at.overlay){Sd(),at.lastResume=performance.now(),sn.capture=!0,sn.clear();return}at.state==="paused"&&(at.state="racing",at.lastResume=performance.now(),sn.capture=!0,sn.clear(),Kt.hidePause())}const Kt=Sy(document.getElementById("ui-root"),{tracks:_i,cars:Wi,items:tn,handlers:{onStart(i){se.unlock(),i.mode==="championship"?(at.championship={round:0,order:_i.map(t=>t.id),points:new Map,base:{...i},scored:!1},jo()):(at.championship=null,La({...i,trackId:i.trackId||_i[0].id}))},onPreview:hb,onResume:gb,onRestart(){!at.config||Gi.active||(at.championship?jo():La(at.config))},onQuit(){_a("main")},onMpHost({playerName:i,carId:t}){Jl.host({name:i||"Host",meta:{carId:t}})},onMpJoin({code:i,playerName:t,carId:e}){Jl.join(i,{name:t||"Player",meta:{carId:e}})},onMpLeave(){},onMpCar({carId:i}){},onMpSettings(i){},onMpStart(i){i||Gi.settings},onMpLobby(){{_a("main");return}},onNextRace(){const i=at.championship;if(i){if(i.round>=i.order.length-1){_a("main");return}i.round+=1,jo()}},onSettings:yd,onPauseRequest(){at.state==="racing"&&!at.overlay&&Dc()},onCameraRequest(){at.state==="racing"&&Kt.flashMessage(`CAMERA: ${nn.nextMode().toUpperCase()}`,900)},onResetRequest(){at.state==="racing"&&Td()},onUiSound(i){se.unlock(),se.play(i)}}});sn.onPress(i=>{if(se.unlock(),i==="KeyM"){at.muted=!at.muted,se.setMuted(at.muted),at.state==="racing"&&Kt.flashMessage(at.muted?"SOUND OFF":"SOUND ON",900);return}at.state==="racing"&&!at.overlay&&(i==="Escape"||i==="KeyP"?Dc():i==="KeyC"?Kt.flashMessage(`CAMERA: ${nn.nextMode().toUpperCase()}`,900):i==="KeyR"&&Td())});window.addEventListener("pointerdown",()=>se.unlock(),{once:!1});window.addEventListener("blur",()=>{!Gi.active&&at.state==="racing"&&at.race&&at.race.state!=="finished"&&Dc()});function Td(){const i=at.race;if(!i||i.state!=="racing")return;const t=i.player,e=at.track.sample(t.trackT);t.placeAt(e.pos.clone(),Math.atan2(e.tangent.x,e.tangent.z),at.track),nn.snap()}const Be={minimap:{points:null,cars:[]}};let Ql=performance.now(),ps=1/60,Ed=0,Zo=0;function xb(){const i=at.race,t=i.player,e=i.info(t);Be.speed=Math.abs(t.speed),Be.topSpeed=t.def.topSpeed,Be.lap=e.lap,Be.laps=e.laps,Be.position=e.position,Be.total=e.total,Be.time=i.time,Be.lapTime=e.lapTime,Be.bestLap=e.bestLap,Be.lastLap=e.lastLap,Be.item=e.item,Be.wrongWay=e.wrongWay,Be.boost=t.boostTime>0,Be.minimap.points=at.track.minimap;const n=Be.minimap.cars;n.length=i.cars.length;for(let s=0;s<i.cars.length;s++){const r=i.cars[s],a=n[s]||(n[s]={});a.x=r.pos.x,a.z=r.pos.z,a.isPlayer=r===t,a.color=r.color||r.def&&r.def.color||"#ffffff"}Kt.updateHUD(Be)}function Ad(i){requestAnimationFrame(Ad),Ed=performance.now();let t=(i-Ql)/1e3;if(Ql=i,t>.1&&(t=.1),t<=0)return;Math.abs(t-ps)<ps*.35?(ps+=(t-ps)*.15,t=ps):ps=t,Zo+=t;const e=at.track,n=Jn.width,s=Jn.height;if(at.state==="racing"||at.state==="results"){const a=at.race;sn.read(we);const o=Kt.touch;o&&o.active&&(o.throttle&&(we.throttle=o.throttle),o.steer&&(we.steer=o.steer),o.handbrake&&(we.handbrake=!0),o.fire&&(we.fire=!0)),at.state==="results"&&(we.throttle=0,we.steer=0,we.handbrake=!1,we.fire=!1),at.overlay&&(we.throttle=0,we.steer=0,we.handbrake=!1,we.fire=!1);const l=Math.max(1,Math.ceil(t/vd-.01)),c=t/l;for(let h=0;h<l;h++)a.update(c,we);sn.consumeFire(),e.update(t,Zo);const f=a.player;if(qo(f.pos),Pn.clearViewOffset(),at.state==="racing"){nn.follow(f,t,e),xb();const h=f.def.topSpeed||35,u=a.state!=="countdown"||!0;se.setEngine({rpm:Math.min(1.2,Math.abs(f.speed)/h),throttle:a.state==="countdown"?Math.abs(we.throttle)*.6:Math.abs(we.throttle),active:u}),se.setSkid(f.drifting&&f.onGround?Math.min(1,Math.abs(f.speed)/(h*.6)):0)}else nn.orbit(f.pos,t,{radius:7.5,height:2.6,speed:.35})}else if(at.state!=="paused"){if(e)if(e.update(t,Zo),fb()){cb(at.preview.carId||Wi[0].id);const a=at.previewCar.position;qo(a),nn.orbit(a,t,{radius:5.6,height:1.7,speed:.6,lookY:.45}),Pn.setViewOffset(n,s,-n*.2,-s*.04,n,s)}else{Ha();const a=Md();at.flyT+=t*(a?26:14)/e.length;const o=e.sample((at.flyT%1+1)%1);qo(o.pos),nn.flyover(e,at.flyT,t,a?{height:11,back:16,ahead:.04}:{height:5,back:10,ahead:.03}),a?Pn.setViewOffset(n,s,-n*.16,0,n,s):Pn.clearViewOffset()}}const r=at.state==="menu"&&(!Kt.getMenuScreen||["title","main"].includes(Kt.getMenuScreen()));r!==Zf&&(Zf=r,ob.setVisible(r)),Ic.update(Pn,!!at.race&&at.state!=="menu"),Cs.render(t)}let fa=0;setInterval(()=>{const i=performance.now();if(!(document.hidden||i-Ed>150)||!Gi.active||!at.race||at.state!=="racing"&&at.state!=="results"){fa=0;return}const e=fa?Math.min(1.1,(i-fa)/1e3):0;if(fa=i,e<=0)return;we.throttle=0,we.steer=0,we.handbrake=!1,we.fire=!1;const n=Math.max(1,Math.ceil(e/vd));for(let s=0;s<n;s++)at.race.update(e/n,we);Ql=i},33);bd();yd(Kt.getSettings());at.quality||(at.quality="medium",_d("medium"));kc(_i[0].id);(new URLSearchParams(location.search).get("join")||"").toUpperCase().replace(/[^A-Z]/g,"").slice(0,4);Kt.showMenu("title");se.startMusic("menu");requestAnimationFrame(Ad);window.__game={game:at,net:Jl,mp:Gi,gfx:Cs,mpEnter:pb,mpStart:mb,ui:Kt,audio:se,renderer:Bn,scene:kn,camera:Pn,startRace:La,toMenu:_a,TRACKS:_i,CARS:Wi,ITEMS:tn};
