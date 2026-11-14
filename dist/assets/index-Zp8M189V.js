(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="170",Vd=0,Qc=1,Wd=2,hu=1,fu=2,ei=3,Ai=0,Ke=1,He=2,ri=0,Vi=1,Tn=2,th=3,eh=4,Xd=5,Bi=100,qd=101,Yd=102,jd=103,Zd=104,$d=200,Kd=201,Jd=202,Qd=203,al=204,ol=205,tp=206,ep=207,np=208,ip=209,sp=210,rp=211,ap=212,op=213,lp=214,ll=0,cl=1,hl=2,Cs=3,fl=4,ul=5,dl=6,pl=7,uc=0,cp=1,hp=2,Ti=0,uu=1,du=2,pu=3,dc=4,fp=5,mu=6,gu=7,vu=300,Rs=301,Ps=302,ml=303,gl=304,Ha=306,Ra=1e3,wi=1001,vl=1002,gn=1003,up=1004,Rr=1005,Vn=1006,Ka=1007,Gi=1008,li=1009,xu=1010,_u=1011,_r=1012,pc=1013,qi=1014,Wn=1015,Xn=1016,mc=1017,gc=1018,Ls=1020,yu=35902,bu=1021,Mu=1022,zn=1023,wu=1024,Su=1025,Ts=1026,Is=1027,vc=1028,xc=1029,Tu=1030,_c=1031,yc=1033,Ma=33776,wa=33777,Sa=33778,Ta=33779,xl=35840,_l=35841,yl=35842,bl=35843,Ml=36196,wl=37492,Sl=37496,Tl=37808,El=37809,Al=37810,Cl=37811,Rl=37812,Pl=37813,Ll=37814,Il=37815,kl=37816,Dl=37817,Ul=37818,Nl=37819,zl=37820,Fl=37821,Ea=36492,Ol=36494,Bl=36495,Eu=36283,Hl=36284,Gl=36285,Vl=36286,dp=3200,pp=3201,bc=0,mp=1,bi="",je="srgb",zs="srgb-linear",Ga="linear",me="srgb",Ki=7680,nh=519,gp=512,vp=513,xp=514,Au=515,_p=516,yp=517,bp=518,Mp=519,Wl=35044,dr=35048,ih="300 es",ni=2e3,Pa=2001;class Fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ja=Math.PI/180,Xl=180/Math.PI;function ai(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function wp(i,t){return(i%t+t)%t}function Qa(i,t,e){return(1-e)*i+e*t}function Gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,s,r,a,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],h=n[7],u=n[2],d=n[5],g=n[8],v=s[0],p=s[3],m=s[6],x=s[1],_=s[4],y=s[7],T=s[2],S=s[5],w=s[8];return r[0]=a*v+o*x+l*T,r[3]=a*p+o*_+l*S,r[6]=a*m+o*y+l*w,r[1]=c*v+f*x+h*T,r[4]=c*p+f*_+h*S,r[7]=c*m+f*y+h*w,r[2]=u*v+d*x+g*T,r[5]=u*p+d*_+g*S,r[8]=u*m+d*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*a*f-e*o*c-n*r*f+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],h=f*a-o*c,u=o*l-f*r,d=c*r-a*l,g=e*h+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*c-f*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(f*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(to.makeScale(t,e)),this}rotate(t){return this.premultiply(to.makeRotation(-t)),this}translate(t,e){return this.premultiply(to.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const to=new $t;function Cu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function La(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sp(){const i=La("canvas");return i.style.display="block",i}const sh={};function hr(i){i in sh||(sh[i]=!0,console.warn(i))}function Tp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ep(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ap(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const se={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bi?Ga:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const rh=[.64,.33,.3,.6,.15,.06],ah=[.2126,.7152,.0722],oh=[.3127,.329],lh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ch=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[zs]:{primaries:rh,whitePoint:oh,transfer:Ga,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:ah,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:rh,whitePoint:oh,transfer:me,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:ah,outputColorSpaceConfig:{drawingBufferColorSpace:je}}});let Ji;class Cp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=La("canvas")),Ji.width=t.width,Ji.height=t.height;const n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=La("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rp=0;class Ru{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(eo(s[a].image)):r.push(eo(s[a]))}else r=eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pp=0;class Je extends Fs{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=wi,s=wi,r=Vn,a=Gi,o=zn,l=li,c=Je.DEFAULT_ANISOTROPY,f=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=ai(),this.name="",this.source=new Ru(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ra:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ra:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=vu;Je.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],f=l[4],h=l[8],u=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(d+1)/2,T=(m+1)/2,S=(f+u)/4,w=(h+v)/4,A=(g+p)/4;return _>y&&_>T?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=S/n,r=w/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=A/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=A/r),this.set(n,s,r,e),this}let x=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(u-f)*(u-f));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(h-v)/x,this.z=(u-f)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lp extends Fs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ru(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends Lp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Pu extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ip extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],f=n[s+2],h=n[s+3];const u=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h;return}if(o===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==u||c!==d||f!==g){let p=1-o;const m=l*u+c*d+f*g+h*v,x=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const T=Math.sqrt(_),S=Math.atan2(T,m*x);p=Math.sin(p*S)/T,o=Math.sin(o*S)/T}const y=o*x;if(l=l*p+u*y,c=c*p+d*y,f=f*p+g*y,h=h*p+v*y,p===1-o){const T=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=T,c*=T,f*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],f=n[s+3],h=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+f*h+l*d-c*u,t[e+1]=l*g+f*u+c*h-o*d,t[e+2]=c*g+f*d+o*u-l*h,t[e+3]=f*g-o*h-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(s/2),h=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*f*h+c*d*g,this._y=c*d*h-u*f*g,this._z=c*f*g+u*d*h,this._w=c*f*h-u*d*g;break;case"YXZ":this._x=u*f*h+c*d*g,this._y=c*d*h-u*f*g,this._z=c*f*g-u*d*h,this._w=c*f*h+u*d*g;break;case"ZXY":this._x=u*f*h-c*d*g,this._y=c*d*h+u*f*g,this._z=c*f*g+u*d*h,this._w=c*f*h-u*d*g;break;case"ZYX":this._x=u*f*h-c*d*g,this._y=c*d*h+u*f*g,this._z=c*f*g-u*d*h,this._w=c*f*h+u*d*g;break;case"YZX":this._x=u*f*h+c*d*g,this._y=c*d*h+u*f*g,this._z=c*f*g-u*d*h,this._w=c*f*h-u*d*g;break;case"XZY":this._x=u*f*h-c*d*g,this._y=c*d*h-u*f*g,this._z=c*f*g+u*d*h,this._w=c*f*h+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],f=e[6],h=e[10],u=n+o+h;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(f-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-n*c,this._z=r*f+a*c+n*l-s*o,this._w=a*f-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),h=Math.sin((1-e)*f)/c,u=Math.sin(e*f)/c;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),f=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*f,this.y=n+l*f+o*c-r*h,this.z=s+l*h+r*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return no.copy(this).projectOnVector(t),this.sub(no)}reflect(t){return this.sub(no.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const no=new z,hh=new Cn;class Zi{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Lr.subVectors(this.max,Ys),Qi.subVectors(t.a,Ys),ts.subVectors(t.b,Ys),es.subVectors(t.c,Ys),ui.subVectors(ts,Qi),di.subVectors(es,ts),Ri.subVectors(Qi,es);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ri.z,Ri.y,ui.z,0,-ui.x,di.z,0,-di.x,Ri.z,0,-Ri.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ri.y,Ri.x,0];return!io(e,Qi,ts,es,Lr)||(e=[1,0,0,0,1,0,0,0,1],!io(e,Qi,ts,es,Lr))?!1:(Ir.crossVectors(ui,di),e=[Ir.x,Ir.y,Ir.z],io(e,Qi,ts,es,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $n=[new z,new z,new z,new z,new z,new z,new z,new z],Pn=new z,Pr=new Zi,Qi=new z,ts=new z,es=new z,ui=new z,di=new z,Ri=new z,Ys=new z,Lr=new z,Ir=new z,Pi=new z;function io(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pi.fromArray(i,r);const o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),f=n.dot(Pi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const kp=new Zi,js=new z,so=new z;class Os{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);const e=js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(so)),this.expandByPoint(js.copy(t.center).sub(so))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new z,ro=new z,kr=new z,pi=new z,ao=new z,Dr=new z,oo=new z;class Lu{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ro.copy(t).add(e).multiplyScalar(.5),kr.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(ro);const r=t.distanceTo(e)*.5,a=-this.direction.dot(kr),o=pi.dot(this.direction),l=-pi.dot(kr),c=pi.lengthSq(),f=Math.abs(1-a*a);let h,u,d,g;if(f>0)if(h=a*l-o,u=a*o-l,g=r*f,h>=0)if(u>=-g)if(u<=g){const v=1/f;h*=v,u*=v,d=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ro).addScaledVector(kr,u),d}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(r=(t.min.y-u.y)*f,a=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,a=(t.min.y-u.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){ao.subVectors(e,t),Dr.subVectors(n,t),oo.crossVectors(ao,Dr);let a=this.direction.dot(oo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,t);const l=o*this.direction.dot(Dr.crossVectors(pi,Dr));if(l<0)return null;const c=o*this.direction.dot(ao.cross(pi));if(c<0||l+c>a)return null;const f=-o*pi.dot(oo);return f<0?null:this.at(f/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,r,a,o,l,c,f,h,u,d,g,v,p){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,f,h,u,d,g,v,p)}set(t,e,n,s,r,a,o,l,c,f,h,u,d,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=f,m[10]=h,m[14]=u,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),a=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const u=a*f,d=a*h,g=o*f,v=o*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*f,d=l*h,g=c*f,v=c*h;e[0]=u+v*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*f,e[9]=-o,e[2]=d*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*f,d=l*h,g=c*f,v=c*h;e[0]=u-v*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*f,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*f,d=a*h,g=o*f,v=o*h;e[0]=l*f,e[4]=g*c-d,e[8]=u*c+v,e[1]=l*h,e[5]=v*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*f,e[4]=v-u*h,e[8]=g*h+d,e[1]=h,e[5]=a*f,e[9]=-o*f,e[2]=-c*f,e[6]=d*h+g,e[10]=u-v*h}else if(t.order==="XZY"){const u=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=u*h+v,e[5]=a*f,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*f,e[10]=v*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dp,t,Up)}lookAt(t,e,n){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),mi.crossVectors(n,hn),mi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),mi.crossVectors(n,hn)),mi.normalize(),Ur.crossVectors(hn,mi),s[0]=mi.x,s[4]=Ur.x,s[8]=hn.x,s[1]=mi.y,s[5]=Ur.y,s[9]=hn.y,s[2]=mi.z,s[6]=Ur.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],h=n[5],u=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],x=n[3],_=n[7],y=n[11],T=n[15],S=s[0],w=s[4],A=s[8],M=s[12],b=s[1],C=s[5],N=s[9],U=s[13],O=s[2],H=s[6],G=s[10],j=s[14],W=s[3],V=s[7],Q=s[11],et=s[15];return r[0]=a*S+o*b+l*O+c*W,r[4]=a*w+o*C+l*H+c*V,r[8]=a*A+o*N+l*G+c*Q,r[12]=a*M+o*U+l*j+c*et,r[1]=f*S+h*b+u*O+d*W,r[5]=f*w+h*C+u*H+d*V,r[9]=f*A+h*N+u*G+d*Q,r[13]=f*M+h*U+u*j+d*et,r[2]=g*S+v*b+p*O+m*W,r[6]=g*w+v*C+p*H+m*V,r[10]=g*A+v*N+p*G+m*Q,r[14]=g*M+v*U+p*j+m*et,r[3]=x*S+_*b+y*O+T*W,r[7]=x*w+_*C+y*H+T*V,r[11]=x*A+_*N+y*G+T*Q,r[15]=x*M+_*U+y*j+T*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],f=t[2],h=t[6],u=t[10],d=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*l*h-s*c*h-r*o*u+n*c*u+s*o*d-n*l*d)+v*(+e*l*d-e*c*u+r*a*u-s*a*d+s*c*f-r*l*f)+p*(+e*c*h-e*o*d-r*a*h+n*a*d+r*o*f-n*c*f)+m*(-s*o*f-e*l*h+e*o*u+s*a*h-n*a*u+n*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],h=t[9],u=t[10],d=t[11],g=t[12],v=t[13],p=t[14],m=t[15],x=h*p*c-v*u*c+v*l*d-o*p*d-h*l*m+o*u*m,_=g*u*c-f*p*c-g*l*d+a*p*d+f*l*m-a*u*m,y=f*v*c-g*h*c+g*o*d-a*v*d-f*o*m+a*h*m,T=g*h*l-f*v*l-g*o*u+a*v*u+f*o*p-a*h*p,S=e*x+n*_+s*y+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/S;return t[0]=x*w,t[1]=(v*u*r-h*p*r-v*s*d+n*p*d+h*s*m-n*u*m)*w,t[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*m+n*l*m)*w,t[3]=(h*l*r-o*u*r-h*s*c+n*u*c+o*s*d-n*l*d)*w,t[4]=_*w,t[5]=(f*p*r-g*u*r+g*s*d-e*p*d-f*s*m+e*u*m)*w,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*m-e*l*m)*w,t[7]=(a*u*r-f*l*r+f*s*c-e*u*c-a*s*d+e*l*d)*w,t[8]=y*w,t[9]=(g*h*r-f*v*r-g*n*d+e*v*d+f*n*m-e*h*m)*w,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*m+e*o*m)*w,t[11]=(f*o*r-a*h*r-f*n*c+e*h*c+a*n*d-e*o*d)*w,t[12]=T*w,t[13]=(f*v*s-g*h*s+g*n*u-e*v*u-f*n*p+e*h*p)*w,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*p-e*o*p)*w,t[15]=(a*h*s-f*o*s+f*n*l-e*h*l-a*n*u+e*o*u)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+n,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,f=a+a,h=o+o,u=r*c,d=r*f,g=r*h,v=a*f,p=a*h,m=o*h,x=l*c,_=l*f,y=l*h,T=n.x,S=n.y,w=n.z;return s[0]=(1-(v+m))*T,s[1]=(d+y)*T,s[2]=(g-_)*T,s[3]=0,s[4]=(d-y)*S,s[5]=(1-(u+m))*S,s[6]=(p+x)*S,s[7]=0,s[8]=(g+_)*w,s[9]=(p-x)*w,s[10]=(1-(u+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ns.set(s[0],s[1],s[2]).length();const a=ns.set(s[4],s[5],s[6]).length(),o=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ln.copy(this);const c=1/r,f=1/a,h=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=f,Ln.elements[5]*=f,Ln.elements[6]*=f,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,e.setFromRotationMatrix(Ln),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ni){const l=this.elements,c=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),u=(n+s)/(n-s);let d,g;if(o===ni)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Pa)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ni){const l=this.elements,c=1/(e-t),f=1/(n-s),h=1/(a-r),u=(e+t)*c,d=(n+s)*f;let g,v;if(o===ni)g=(a+r)*h,v=-2*h;else if(o===Pa)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ns=new z,Ln=new re,Dp=new z(0,0,0),Up=new z(1,1,1),mi=new z,Ur=new z,hn=new z,fh=new re,uh=new Cn;class Qe{constructor(t=0,e=0,n=0,s=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],h=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uh.setFromEuler(this),this.setFromQuaternion(uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class Iu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Np=0;const dh=new z,is=new Cn,Jn=new re,Nr=new z,Zs=new z,zp=new z,Fp=new Cn,ph=new z(1,0,0),mh=new z(0,1,0),gh=new z(0,0,1),vh={type:"added"},Op={type:"removed"},ss={type:"childadded",child:null},lo={type:"childremoved",child:null};class ke extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new z,e=new Qe,n=new Cn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new $t}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(ph,t)}rotateY(t){return this.rotateOnAxis(mh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return dh.copy(t).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ph,t)}translateY(t){return this.translateOnAxis(mh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Zs,Nr,this.up):Jn.lookAt(Nr,Zs,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Jn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vh),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Op),lo.child=t,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vh),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Fp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),f=a(t.images),h=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ke.DEFAULT_UP=new z(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new z,Qn=new z,co=new z,ti=new z,rs=new z,as=new z,xh=new z,ho=new z,fo=new z,uo=new z,po=new xe,mo=new xe,go=new xe;class En{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),Qn.subVectors(n,e),co.subVectors(t,e);const a=In.dot(In),o=In.dot(Qn),l=In.dot(co),c=Qn.dot(Qn),f=Qn.dot(co),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,d=(c*l-o*f)*u,g=(a*f-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return po.setScalar(0),mo.setScalar(0),go.setScalar(0),po.fromBufferAttribute(t,e),mo.fromBufferAttribute(t,n),go.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(po,r.x),a.addScaledVector(mo,r.y),a.addScaledVector(go,r.z),a}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),Qn.subVectors(t,e),In.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),In.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;rs.subVectors(s,n),as.subVectors(r,n),ho.subVectors(t,n);const l=rs.dot(ho),c=as.dot(ho);if(l<=0&&c<=0)return e.copy(n);fo.subVectors(t,s);const f=rs.dot(fo),h=as.dot(fo);if(f>=0&&h<=f)return e.copy(s);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(rs,a);uo.subVectors(t,r);const d=rs.dot(uo),g=as.dot(uo);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(as,o);const p=f*g-d*h;if(p<=0&&h-f>=0&&d-g>=0)return xh.subVectors(r,s),o=(h-f)/(h-f+(d-g)),e.copy(s).addScaledVector(xh,o);const m=1/(p+v+u);return a=v*m,o=u*m,e.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},zr={h:0,s:0,l:0};function vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=wp(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=vo(a,r,t+1/3),this.g=vo(a,r,t),this.b=vo(a,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return se.fromWorkingColorSpace(We.copy(this),t),Math.round(Be(We.r*255,0,255))*65536+Math.round(Be(We.g*255,0,255))*256+Math.round(Be(We.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=je){se.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(zr);const n=Qa(gi.h,zr.h,e),s=Qa(gi.s,zr.s,e),r=Qa(gi.l,zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Ot;Ot.NAMES=ku;let Bp=0;class Ci extends Fs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=ai(),this.name="",this.blending=Vi,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ol,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==al&&(n.blendSrc=this.blendSrc),this.blendDst!==ol&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class be extends Ci{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new z,Fr=new mt;class ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wl,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wl&&(t.usage=this.usage),t}}class Du extends ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Uu extends ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hp=0;const Mn=new re,xo=new ke,os=new z,fn=new Zi,$s=new Zi,Ne=new z;class ge extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cu(t)?Uu:Du)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(fn.min,$s.min),fn.expandByPoint(Ne),Ne.addVectors(fn.max,$s.max),fn.expandByPoint(Ne)):(fn.expandByPoint($s.min),fn.expandByPoint($s.max))}fn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ne.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(t,c),Ne.add(os)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ee(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new z,l[A]=new z;const c=new z,f=new z,h=new z,u=new mt,d=new mt,g=new mt,v=new z,p=new z;function m(A,M,b){c.fromBufferAttribute(n,A),f.fromBufferAttribute(n,M),h.fromBufferAttribute(n,b),u.fromBufferAttribute(r,A),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),f.sub(c),h.sub(c),d.sub(u),g.sub(u);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(v.copy(f).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),p.copy(h).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(C),o[A].add(v),o[M].add(v),o[b].add(v),l[A].add(p),l[M].add(p),l[b].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let A=0,M=x.length;A<M;++A){const b=x[A],C=b.start,N=b.count;for(let U=C,O=C+N;U<O;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const _=new z,y=new z,T=new z,S=new z;function w(A){T.fromBufferAttribute(s,A),S.copy(T);const M=o[A];_.copy(M),_.sub(T.multiplyScalar(T.dot(M))).normalize(),y.crossVectors(S,M);const C=y.dot(l[A])<0?-1:1;a.setXYZW(A,_.x,_.y,_.z,C)}for(let A=0,M=x.length;A<M;++A){const b=x[A],C=b.start,N=b.count;for(let U=C,O=C+N;U<O;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,f=new z,h=new z;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(f),l.add(f),c.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,h=o.normalized,u=new c.constructor(l.length*f);let d=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*f;for(let m=0;m<f;m++)u[g++]=c[d++]}return new ee(u,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let f=0,h=c.length;f<h;f++){const u=c[f],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const d=c[h];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(e))}const r=t.morphAttributes;for(const c in r){const f=[],h=r[c];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _h=new re,Li=new Lu,Or=new Os,yh=new z,Br=new z,Hr=new z,Gr=new z,_o=new z,Vr=new z,bh=new z,Wr=new z;class Dt extends ke{constructor(t=new ge,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=o[l],h=r[l];f!==0&&(_o.fromBufferAttribute(h,t),a?Vr.addScaledVector(_o,f):Vr.addScaledVector(_o.sub(e),f))}e.add(Vr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Or.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Or,yh)===null||Li.origin.distanceToSquared(yh)>(t.far-t.near)**2))&&(_h.copy(r).invert(),Li.copy(t.ray).applyMatrix4(_h),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=a[p.materialIndex],x=Math.max(p.start,d.start),_=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=x,T=_;y<T;y+=3){const S=o.getX(y),w=o.getX(y+1),A=o.getX(y+2);s=Xr(this,m,t,n,c,f,h,S,w,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const x=o.getX(p),_=o.getX(p+1),y=o.getX(p+2);s=Xr(this,a,t,n,c,f,h,x,_,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=a[p.materialIndex],x=Math.max(p.start,d.start),_=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=x,T=_;y<T;y+=3){const S=y,w=y+1,A=y+2;s=Xr(this,m,t,n,c,f,h,S,w,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const x=p,_=p+1,y=p+2;s=Xr(this,a,t,n,c,f,h,x,_,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Gp(i,t,e,n,s,r,a,o){let l;if(t.side===Ke?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ai,o),l===null)return null;Wr.copy(o),Wr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Wr);return c<e.near||c>e.far?null:{distance:c,point:Wr.clone(),object:i}}function Xr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Br),i.getVertexPosition(l,Hr),i.getVertexPosition(c,Gr);const f=Gp(i,t,e,n,Br,Hr,Gr,bh);if(f){const h=new z;En.getBarycoord(bh,Br,Hr,Gr,h),s&&(f.uv=En.getInterpolatedAttribute(s,o,l,c,h,new mt)),r&&(f.uv1=En.getInterpolatedAttribute(r,o,l,c,h,new mt)),a&&(f.normal=En.getInterpolatedAttribute(a,o,l,c,h,new z),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new z,materialIndex:0};En.getNormal(Br,Hr,Gr,u.normal),f.face=u,f.barycoord=h}return f}class xn extends ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],f=[],h=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(h,2));function g(v,p,m,x,_,y,T,S,w,A,M){const b=y/w,C=T/A,N=y/2,U=T/2,O=S/2,H=w+1,G=A+1;let j=0,W=0;const V=new z;for(let Q=0;Q<G;Q++){const et=Q*C-U;for(let vt=0;vt<H;vt++){const R=vt*b-N;V[v]=R*x,V[p]=et*_,V[m]=O,c.push(V.x,V.y,V.z),V[v]=0,V[p]=0,V[m]=S>0?1:-1,f.push(V.x,V.y,V.z),h.push(vt/w),h.push(1-Q/A),j+=1}}for(let Q=0;Q<A;Q++)for(let et=0;et<w;et++){const vt=u+et+H*Q,R=u+et+H*(Q+1),I=u+(et+1)+H*(Q+1),k=u+(et+1)+H*Q;l.push(vt,R,k),l.push(R,I,k),W+=6}o.addGroup(d,W,M),d+=W,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ks(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=ks(i[e]);for(const s in n)t[s]=n[s]}return t}function Vp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const yr={clone:ks,merge:en};var Wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $e extends Ci{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wp,this.fragmentShader=Xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=Vp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zu extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new z,Mh=new mt,wh=new mt;class dn extends zu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,Mh,wh),e.subVectors(wh,Mh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ja*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ls=-90,cs=1;class qp extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(ls,cs,t,e);s.layers=this.layers,this.add(s);const r=new dn(ls,cs,t,e);r.layers=this.layers,this.add(r);const a=new dn(ls,cs,t,e);a.layers=this.layers,this.add(a);const o=new dn(ls,cs,t,e);o.layers=this.layers,this.add(o);const l=new dn(ls,cs,t,e);l.layers=this.layers,this.add(l);const c=new dn(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,f),t.setRenderTarget(h,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Fu extends Je{constructor(t,e,n,s,r,a,o,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:Rs,super(t,e,n,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yp extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xn(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:ri});r.uniforms.tEquirect.value=e;const a=new Dt(s,r),o=e.minFilter;return e.minFilter===Gi&&(e.minFilter=Vn),new qp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const yo=new z,jp=new z,Zp=new $t;class Fi{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=yo.subVectors(n,e).cross(jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(yo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zp.getNormalMatrix(t),s=this.coplanarPoint(yo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Os,qr=new z;class Mc{constructor(t=new Fi,e=new Fi,n=new Fi,s=new Fi,r=new Fi,a=new Fi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],f=s[5],h=s[6],u=s[7],d=s[8],g=s[9],v=s[10],p=s[11],m=s[12],x=s[13],_=s[14],y=s[15];if(n[0].setComponents(l-r,u-c,p-d,y-m).normalize(),n[1].setComponents(l+r,u+c,p+d,y+m).normalize(),n[2].setComponents(l+a,u+f,p+g,y+x).normalize(),n[3].setComponents(l-a,u-f,p-g,y-x).normalize(),n[4].setComponents(l-o,u-h,p-v,y-_).normalize(),e===ni)n[5].setComponents(l+o,u+h,p+v,y+_).normalize();else if(e===Pa)n[5].setComponents(o,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(qr.x=s.normal.x>0?t.max.x:t.min.x,qr.y=s.normal.y>0?t.max.y:t.min.y,qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ou(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $p(i){const t=new WeakMap;function e(o,l){const c=o.array,f=o.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const f=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,f);else{h.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<h.length;d++){const g=h[u],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,h[u]=v)}h.length=u+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];i.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Ie extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,f=l+1,h=t/o,u=e/l,d=[],g=[],v=[],p=[];for(let m=0;m<f;m++){const x=m*u-a;for(let _=0;_<c;_++){const y=_*h-r;g.push(y,-x,0),v.push(0,0,1),p.push(_/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const _=x+c*m,y=x+c*(m+1),T=x+1+c*(m+1),S=x+1+c*m;d.push(_,y,S),d.push(y,T,S)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
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
#endif`,Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
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
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0=`#ifdef USE_BATCHING
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
#endif`,a0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h0=`#ifdef USE_IRIDESCENCE
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
#endif`,f0=`#ifdef USE_BUMPMAP
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
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,y0=`#define PI 3.141592653589793
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
} // validated`,b0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M0=`vec3 transformedNormal = objectNormal;
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
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A0="gl_FragColor = linearToOutputTexel( gl_FragColor );",C0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F0=`#ifdef USE_GRADIENTMAP
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
}`,O0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
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
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j0=`PhysicalMaterial material;
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
#endif`,Z0=`struct PhysicalMaterial {
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
}`,$0=`
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,am=`#if defined( USE_POINTS_UV )
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
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_m=`#ifdef USE_NORMALMAP
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
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Um=`float getShadowMask() {
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
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,rg=`#define DISTANCE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,fg=`uniform vec3 diffuse;
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
}`,ug=`#define LAMBERT
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
}`,dg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,vg=`#define NORMAL
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
}`,xg=`#define PHONG
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
}`,_g=`#define PHONG
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
}`,yg=`#define STANDARD
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
}`,bg=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,wg=`#define TOON
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
}`,Sg=`uniform float size;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Ag=`uniform vec3 color;
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
}`,Cg=`uniform float rotation;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:Kp,alphahash_pars_fragment:Jp,alphamap_fragment:Qp,alphamap_pars_fragment:t0,alphatest_fragment:e0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:s0,batching_pars_vertex:r0,batching_vertex:a0,begin_vertex:o0,beginnormal_vertex:l0,bsdfs:c0,iridescence_fragment:h0,bumpmap_pars_fragment:f0,clipping_planes_fragment:u0,clipping_planes_pars_fragment:d0,clipping_planes_pars_vertex:p0,clipping_planes_vertex:m0,color_fragment:g0,color_pars_fragment:v0,color_pars_vertex:x0,color_vertex:_0,common:y0,cube_uv_reflection_fragment:b0,defaultnormal_vertex:M0,displacementmap_pars_vertex:w0,displacementmap_vertex:S0,emissivemap_fragment:T0,emissivemap_pars_fragment:E0,colorspace_fragment:A0,colorspace_pars_fragment:C0,envmap_fragment:R0,envmap_common_pars_fragment:P0,envmap_pars_fragment:L0,envmap_pars_vertex:I0,envmap_physical_pars_fragment:V0,envmap_vertex:k0,fog_vertex:D0,fog_pars_vertex:U0,fog_fragment:N0,fog_pars_fragment:z0,gradientmap_pars_fragment:F0,lightmap_pars_fragment:O0,lights_lambert_fragment:B0,lights_lambert_pars_fragment:H0,lights_pars_begin:G0,lights_toon_fragment:W0,lights_toon_pars_fragment:X0,lights_phong_fragment:q0,lights_phong_pars_fragment:Y0,lights_physical_fragment:j0,lights_physical_pars_fragment:Z0,lights_fragment_begin:$0,lights_fragment_maps:K0,lights_fragment_end:J0,logdepthbuf_fragment:Q0,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:rm,map_particle_pars_fragment:am,metalnessmap_fragment:om,metalnessmap_pars_fragment:lm,morphinstance_vertex:cm,morphcolor_vertex:hm,morphnormal_vertex:fm,morphtarget_pars_vertex:um,morphtarget_vertex:dm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:vm,normal_vertex:xm,normalmap_pars_fragment:_m,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:bm,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:wm,opaque_fragment:Sm,packing:Tm,premultiplied_alpha_fragment:Em,project_vertex:Am,dithering_fragment:Cm,dithering_pars_fragment:Rm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:km,shadowmap_vertex:Dm,shadowmask_pars_fragment:Um,skinbase_vertex:Nm,skinning_pars_vertex:zm,skinning_vertex:Fm,skinnormal_vertex:Om,specularmap_fragment:Bm,specularmap_pars_fragment:Hm,tonemapping_fragment:Gm,tonemapping_pars_fragment:Vm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:qm,uv_pars_vertex:Ym,uv_vertex:jm,worldpos_vertex:Zm,background_vert:$m,background_frag:Km,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:ag,equirect_frag:og,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:fg,meshlambert_vert:ug,meshlambert_frag:dg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:vg,meshphong_vert:xg,meshphong_frag:_g,meshphysical_vert:yg,meshphysical_frag:bg,meshtoon_vert:Mg,meshtoon_frag:wg,points_vert:Sg,points_frag:Tg,shadow_vert:Eg,shadow_frag:Ag,sprite_vert:Cg,sprite_frag:Rg},Pt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Hn={basic:{uniforms:en([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:en([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:en([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:en([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:en([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:en([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:en([Pt.points,Pt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:en([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:en([Pt.common,Pt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:en([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:en([Pt.sprite,Pt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:en([Pt.common,Pt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:en([Pt.lights,Pt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Hn.physical={uniforms:en([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Yr={r:0,b:0,g:0},ki=new Qe,Pg=new re;function Lg(i,t,e,n,s,r,a){const o=new Ot(0);let l=r===!0?0:1,c,f,h=null,u=0,d=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const y=g(x);y===null?m(o,l):y&&y.isColor&&(m(y,1),_=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(x,_){const y=g(_);y&&(y.isCubeTexture||y.mapping===Ha)?(f===void 0&&(f=new Dt(new xn(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:ks(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),ki.copy(_.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(ki)),f.material.toneMapped=se.getTransfer(y.colorSpace)!==me,(h!==y||u!==y.version||d!==i.toneMapping)&&(f.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Dt(new Ie(2,2),new $e({name:"BackgroundMaterial",uniforms:ks(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=se.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,_){x.getRGB(Yr,Nu(i)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(o,l)},render:v,addToRenderList:p}}function Ig(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(b,C,N,U,O){let H=!1;const G=h(U,N,C);r!==G&&(r=G,c(r.object)),H=d(b,U,N,O),H&&g(b,U,N,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,y(b,C,N,U),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function f(b){return i.deleteVertexArray(b)}function h(b,C,N){const U=N.wireframe===!0;let O=n[b.id];O===void 0&&(O={},n[b.id]=O);let H=O[C.id];H===void 0&&(H={},O[C.id]=H);let G=H[U];return G===void 0&&(G=u(l()),H[U]=G),G}function u(b){const C=[],N=[],U=[];for(let O=0;O<e;O++)C[O]=0,N[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:U,object:b,attributes:{},index:null}}function d(b,C,N,U){const O=r.attributes,H=C.attributes;let G=0;const j=N.getAttributes();for(const W in j)if(j[W].location>=0){const Q=O[W];let et=H[W];if(et===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(et=b.instanceColor)),Q===void 0||Q.attribute!==et||et&&Q.data!==et.data)return!0;G++}return r.attributesNum!==G||r.index!==U}function g(b,C,N,U){const O={},H=C.attributes;let G=0;const j=N.getAttributes();for(const W in j)if(j[W].location>=0){let Q=H[W];Q===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor));const et={};et.attribute=Q,Q&&Q.data&&(et.data=Q.data),O[W]=et,G++}r.attributes=O,r.attributesNum=G,r.index=U}function v(){const b=r.newAttributes;for(let C=0,N=b.length;C<N;C++)b[C]=0}function p(b){m(b,0)}function m(b,C){const N=r.newAttributes,U=r.enabledAttributes,O=r.attributeDivisors;N[b]=1,U[b]===0&&(i.enableVertexAttribArray(b),U[b]=1),O[b]!==C&&(i.vertexAttribDivisor(b,C),O[b]=C)}function x(){const b=r.newAttributes,C=r.enabledAttributes;for(let N=0,U=C.length;N<U;N++)C[N]!==b[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function _(b,C,N,U,O,H,G){G===!0?i.vertexAttribIPointer(b,C,N,O,H):i.vertexAttribPointer(b,C,N,U,O,H)}function y(b,C,N,U){v();const O=U.attributes,H=N.getAttributes(),G=C.defaultAttributeValues;for(const j in H){const W=H[j];if(W.location>=0){let V=O[j];if(V===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(V=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(V=b.instanceColor)),V!==void 0){const Q=V.normalized,et=V.itemSize,vt=t.get(V);if(vt===void 0)continue;const R=vt.buffer,I=vt.type,k=vt.bytesPerElement,q=I===i.INT||I===i.UNSIGNED_INT||V.gpuType===pc;if(V.isInterleavedBufferAttribute){const X=V.data,lt=X.stride,Mt=V.offset;if(X.isInstancedInterleavedBuffer){for(let xt=0;xt<W.locationSize;xt++)m(W.location+xt,X.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let xt=0;xt<W.locationSize;xt++)p(W.location+xt);i.bindBuffer(i.ARRAY_BUFFER,R);for(let xt=0;xt<W.locationSize;xt++)_(W.location+xt,et/W.locationSize,I,Q,lt*k,(Mt+et/W.locationSize*xt)*k,q)}else{if(V.isInstancedBufferAttribute){for(let X=0;X<W.locationSize;X++)m(W.location+X,V.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let X=0;X<W.locationSize;X++)p(W.location+X);i.bindBuffer(i.ARRAY_BUFFER,R);for(let X=0;X<W.locationSize;X++)_(W.location+X,et/W.locationSize,I,Q,et*k,et/W.locationSize*X*k,q)}}else if(G!==void 0){const Q=G[j];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(W.location,Q);break;case 3:i.vertexAttrib3fv(W.location,Q);break;case 4:i.vertexAttrib4fv(W.location,Q);break;default:i.vertexAttrib1fv(W.location,Q)}}}}x()}function T(){A();for(const b in n){const C=n[b];for(const N in C){const U=C[N];for(const O in U)f(U[O].object),delete U[O];delete C[N]}delete n[b]}}function S(b){if(n[b.id]===void 0)return;const C=n[b.id];for(const N in C){const U=C[N];for(const O in U)f(U[O].object),delete U[O];delete C[N]}delete n[b.id]}function w(b){for(const C in n){const N=n[C];if(N[b.id]===void 0)continue;const U=N[b.id];for(const O in U)f(U[O].object),delete U[O];delete N[b.id]}}function A(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function kg(i,t,e){let n;function s(c){n=c}function r(c,f){i.drawArrays(n,c,f),e.update(f,n,1)}function a(c,f,h){h!==0&&(i.drawArraysInstanced(n,c,f,h),e.update(f,n,h))}function o(c,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,h);let d=0;for(let g=0;g<h;g++)d+=f[g];e.update(d,n,1)}function l(c,f,h,u){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],f[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,f,0,u,0,h);let g=0;for(let v=0;v<h;v++)g+=f[v]*u[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Dg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==zn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===Xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==li&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Wn&&!A)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:T,maxSamples:S}}function Ug(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Fi,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const d=h.length!==0||u||n!==0||s;return s=u,n=h.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,d){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?f(null):c();else{const x=r?0:n,_=x*4;let y=m.clippingState||null;l.value=y,y=f(g,u,_,d);for(let T=0;T!==_;++T)y[T]=e[T];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(h,u,d,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=d+v*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,y=d;_!==v;++_,y+=4)a.copy(h[_]).applyMatrix4(x,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Ng(i){let t=new WeakMap;function e(a,o){return o===ml?a.mapping=Rs:o===gl&&(a.mapping=Ps),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ml||o===gl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Yp(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class wc extends zu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const bs=4,Sh=[.125,.215,.35,.446,.526,.582],Hi=20,bo=new wc,Th=new Ot;let Mo=null,wo=0,So=0,To=!1;const Oi=(1+Math.sqrt(5))/2,hs=1/Oi,Eh=[new z(-Oi,hs,0),new z(Oi,hs,0),new z(-hs,0,Oi),new z(hs,0,Oi),new z(0,Oi,-hs),new z(0,Oi,hs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class ql{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Mo=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mo,wo,So),this._renderer.xr.enabled=To,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mo=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Xn,format:zn,colorSpace:zs,depthBuffer:!1},s=Ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zg(r)),this._blurMaterial=Fg(r,t,e)}return s}_compileMaterial(t){const e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,bo)}_sceneToCubeUV(t,e,n,s){const o=new dn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(Th),f.toneMapping=Ti,f.autoClear=!1;const d=new be({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),g=new Dt(new xn,d);let v=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,v=!0):(d.color.copy(Th),v=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):x===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const _=this._cubeSize;jr(s,x*_,m>2?_:0,_,_),f.setRenderTarget(s),v&&f.render(g,o),f.render(t,o)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=u,f.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Rs||t.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,bo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Eh[(s-r-1)%Eh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Dt(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Hi-1),v=r/g,p=isFinite(r)?1+Math.floor(f*v):Hi;p>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hi}`);const m=[];let x=0;for(let w=0;w<Hi;++w){const A=w/v,M=Math.exp(-A*A/2);m.push(M),w===0?x+=M:w<p&&(x+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/x;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const y=this._sizeLods[s],T=3*y*(s>_-bs?s-_+bs:0),S=4*(this._cubeSize-y);jr(e,T,S,3*y,2*y),l.setRenderTarget(e),l.render(h,bo)}}function zg(i){const t=[],e=[],n=[];let s=i;const r=i-bs+1+Sh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-bs?l=Sh[a-i+bs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],d=6,g=6,v=3,p=2,m=1,x=new Float32Array(v*g*d),_=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let S=0;S<d;S++){const w=S%3*2/3-1,A=S>2?0:-1,M=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];x.set(M,v*g*S),_.set(u,p*g*S);const b=[S,S,S,S,S,S];y.set(b,m*g*S)}const T=new ge;T.setAttribute("position",new ee(x,v)),T.setAttribute("uv",new ee(_,p)),T.setAttribute("faceIndex",new ee(y,m)),t.push(T),s>bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ah(i,t,e){const n=new An(i,t,e);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fg(i,t,e){const n=new Float32Array(Hi),s=new z(0,1,0);return new $e({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ch(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Rh(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}function Og(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ml||l===gl,f=l===Rs||l===Ps;if(c||f){let h=t.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new ql(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||f&&d&&s(d)?(e===null&&(e=new ql(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Bg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&hr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hg(i,t,e,n){const s={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(h){const u=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let _=0,y=x.length;_<y;_+=3){const T=x[_+0],S=x[_+1],w=x[_+2];u.push(T,S,S,w,w,T)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const T=_+0,S=_+1,w=_+2;u.push(T,S,S,w,w,T)}}else return;const p=new(Cu(u)?Uu:Du)(u,1);p.version=v;const m=r.get(h);m&&t.remove(m),r.set(h,p)}function f(h){const u=r.get(h);if(u){const d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function Gg(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,u*a,g),e.update(d,n,g))}function f(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function h(u,d,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/a,d[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,v,0,g);let m=0;for(let x=0;x<g;x++)m+=d[x]*v[x];e.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Vg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wg(i,t,e){const n=new WeakMap,s=new xe;function r(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var d=b;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),p===!0&&(y=3);let T=o.attributes.position.count*y,S=1;T>t.maxTextureSize&&(S=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*S*4*h),A=new Pu(w,T,S,h);A.type=Wn,A.needsUpdate=!0;const M=y*4;for(let C=0;C<h;C++){const N=m[C],U=x[C],O=_[C],H=T*S*4*C;for(let G=0;G<N.count;G++){const j=G*M;g===!0&&(s.fromBufferAttribute(N,G),w[H+j+0]=s.x,w[H+j+1]=s.y,w[H+j+2]=s.z,w[H+j+3]=0),v===!0&&(s.fromBufferAttribute(U,G),w[H+j+4]=s.x,w[H+j+5]=s.y,w[H+j+6]=s.z,w[H+j+7]=0),p===!0&&(s.fromBufferAttribute(O,G),w[H+j+8]=s.x,w[H+j+9]=s.y,w[H+j+10]=s.z,w[H+j+11]=O.itemSize===4?s.w:1)}}u={count:h,texture:A,size:new mt(T,S)},n.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Xg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Bu extends Je{constructor(t,e,n,s,r,a,o,l,c,f=Ts){if(f!==Ts&&f!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ts&&(n=qi),n===void 0&&f===Is&&(n=Ls),super(null,s,r,a,o,l,f,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Hu=new Je,Ph=new Bu(1,1),Gu=new Pu,Vu=new Ip,Wu=new Fu,Lh=[],Ih=[],kh=new Float32Array(16),Dh=new Float32Array(9),Uh=new Float32Array(4);function Bs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Lh[s];if(r===void 0&&(r=new Float32Array(s),Lh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Va(i,t){let e=Ih[t];e===void 0&&(e=new Int32Array(t),Ih[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function $g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Uh.set(n),i.uniformMatrix2fv(this.addr,!1,Uh),Ue(e,n)}}function Kg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Dh.set(n),i.uniformMatrix3fv(this.addr,!1,Dh),Ue(e,n)}}function Jg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;kh.set(n),i.uniformMatrix4fv(this.addr,!1,kh),Ue(e,n)}}function Qg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function t1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function e1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function n1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function i1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function s1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function r1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function a1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function o1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ph.compareFunction=Au,r=Ph):r=Hu,e.setTexture2D(t||r,s)}function l1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vu,s)}function c1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wu,s)}function h1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gu,s)}function f1(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return jg;case 35666:return Zg;case 35674:return $g;case 35675:return Kg;case 35676:return Jg;case 5124:case 35670:return Qg;case 35667:case 35671:return t1;case 35668:case 35672:return e1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return s1;case 36295:return r1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return h1}}function u1(i,t){i.uniform1fv(this.addr,t)}function d1(i,t){const e=Bs(t,this.size,2);i.uniform2fv(this.addr,e)}function p1(i,t){const e=Bs(t,this.size,3);i.uniform3fv(this.addr,e)}function m1(i,t){const e=Bs(t,this.size,4);i.uniform4fv(this.addr,e)}function g1(i,t){const e=Bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function v1(i,t){const e=Bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function x1(i,t){const e=Bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _1(i,t){i.uniform1iv(this.addr,t)}function y1(i,t){i.uniform2iv(this.addr,t)}function b1(i,t){i.uniform3iv(this.addr,t)}function M1(i,t){i.uniform4iv(this.addr,t)}function w1(i,t){i.uniform1uiv(this.addr,t)}function S1(i,t){i.uniform2uiv(this.addr,t)}function T1(i,t){i.uniform3uiv(this.addr,t)}function E1(i,t){i.uniform4uiv(this.addr,t)}function A1(i,t,e){const n=this.cache,s=t.length,r=Va(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Hu,r[a])}function C1(i,t,e){const n=this.cache,s=t.length,r=Va(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vu,r[a])}function R1(i,t,e){const n=this.cache,s=t.length,r=Va(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Wu,r[a])}function P1(i,t,e){const n=this.cache,s=t.length,r=Va(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Gu,r[a])}function L1(i){switch(i){case 5126:return u1;case 35664:return d1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return v1;case 35676:return x1;case 5124:case 35670:return _1;case 35667:case 35671:return y1;case 35668:case 35672:return b1;case 35669:case 35673:return M1;case 5125:return w1;case 36294:return S1;case 36295:return T1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return R1;case 36289:case 36303:case 36311:case 36292:return P1}}class I1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=f1(e.type)}}class k1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L1(e.type)}}class D1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function Nh(i,t){i.seq.push(t),i.map[t.id]=t}function U1(i,t,e){const n=i.name,s=n.length;for(Eo.lastIndex=0;;){const r=Eo.exec(n),a=Eo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nh(e,c===void 0?new I1(o,i,t):new k1(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new D1(o),Nh(e,h)),e=h}}}class Aa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);U1(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function zh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const N1=37297;let z1=0;function F1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Fh=new $t;function O1(i){se._getMatrix(Fh,se.workingColorSpace,i);const t=`mat3( ${Fh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case Ga:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Oh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+F1(i.getShaderSource(t),a)}else return s}function B1(i,t){const e=O1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function H1(i,t){let e;switch(t){case uu:e="Linear";break;case du:e="Reinhard";break;case pu:e="Cineon";break;case dc:e="ACESFilmic";break;case mu:e="AgX";break;case gu:e="Neutral";break;case fp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zr=new z;function G1(){se.getLuminanceCoefficients(Zr);const i=Zr.x.toFixed(4),t=Zr.y.toFixed(4),e=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function W1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function X1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function fr(i){return i!==""}function Bh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(i){return i.replace(q1,j1)}const Y1=new Map;function j1(i,t){let e=te[t];if(e===void 0){const n=Y1.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yl(e)}const Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(Z1,$1)}function $1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function K1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===fu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function J1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rs:case Ps:t="ENVMAP_TYPE_CUBE";break;case Ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Q1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ps:t="ENVMAP_MODE_REFRACTION";break}return t}function tv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uc:t="ENVMAP_BLENDING_MULTIPLY";break;case cp:t="ENVMAP_BLENDING_MIX";break;case hp:t="ENVMAP_BLENDING_ADD";break}return t}function ev(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function nv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=K1(e),c=J1(e),f=Q1(e),h=tv(e),u=ev(e),d=V1(e),g=W1(r),v=s.createProgram();let p,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`)):(p=[Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),m=[Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?te.tonemapping_pars_fragment:"",e.toneMapping!==Ti?H1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,B1("linearToOutputTexel",e.outputColorSpace),G1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),a=Yl(a),a=Bh(a,e),a=Hh(a,e),o=Yl(o),o=Bh(o,e),o=Hh(o,e),a=Gh(a),o=Gh(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=x+p+a,y=x+m+o,T=zh(s,s.VERTEX_SHADER,_),S=zh(s,s.FRAGMENT_SHADER,y);s.attachShader(v,T),s.attachShader(v,S),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(v).trim(),U=s.getShaderInfoLog(T).trim(),O=s.getShaderInfoLog(S).trim();let H=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,S);else{const j=Oh(s,T,"vertex"),W=Oh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+j+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||O==="")&&(G=!1);G&&(C.diagnostics={runnable:H,programLog:N,vertexShader:{log:U,prefix:p},fragmentShader:{log:O,prefix:m}})}s.deleteShader(T),s.deleteShader(S),A=new Aa(s,v),M=X1(s,v)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,N1)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z1++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=S,this}let iv=0;class sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new rv(t),e.set(t,n)),n}}class rv{constructor(t){this.id=iv++,this.code=t,this.usedTimes=0}}function av(i,t,e,n,s,r,a){const o=new Iu,l=new sv,c=new Set,f=[],h=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,b,C,N,U){const O=N.fog,H=U.geometry,G=M.isMeshStandardMaterial?N.environment:null,j=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),W=j&&j.mapping===Ha?j.image.height:null,V=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,et=Q!==void 0?Q.length:0;let vt=0;H.morphAttributes.position!==void 0&&(vt=1),H.morphAttributes.normal!==void 0&&(vt=2),H.morphAttributes.color!==void 0&&(vt=3);let R,I,k,q;if(V){const Jt=Hn[V];R=Jt.vertexShader,I=Jt.fragmentShader}else R=M.vertexShader,I=M.fragmentShader,l.update(M),k=l.getVertexShaderID(M),q=l.getFragmentShaderID(M);const X=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),Mt=U.isInstancedMesh===!0,xt=U.isBatchedMesh===!0,Ct=!!M.map,st=!!M.matcap,ct=!!j,D=!!M.aoMap,St=!!M.lightMap,F=!!M.bumpMap,J=!!M.normalMap,K=!!M.displacementMap,ut=!!M.emissiveMap,bt=!!M.metalnessMap,L=!!M.roughnessMap,E=M.anisotropy>0,Y=M.clearcoat>0,ot=M.dispersion>0,dt=M.iridescence>0,at=M.sheen>0,Et=M.transmission>0,ft=E&&!!M.anisotropyMap,ht=Y&&!!M.clearcoatMap,It=Y&&!!M.clearcoatNormalMap,gt=Y&&!!M.clearcoatRoughnessMap,_t=dt&&!!M.iridescenceMap,Tt=dt&&!!M.iridescenceThicknessMap,Ft=at&&!!M.sheenColorMap,Lt=at&&!!M.sheenRoughnessMap,jt=!!M.specularMap,Yt=!!M.specularColorMap,he=!!M.specularIntensityMap,B=Et&&!!M.transmissionMap,yt=Et&&!!M.thicknessMap,tt=!!M.gradientMap,pt=!!M.alphaMap,Rt=M.alphaTest>0,At=!!M.alphaHash,Gt=!!M.extensions;let ae=Ti;M.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ae=i.toneMapping);const fe={shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:R,fragmentShader:I,defines:M.defines,customVertexShaderID:k,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:xt,batchingColor:xt&&U._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&U.instanceColor!==null,instancingMorph:Mt&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:zs,alphaToCoverage:!!M.alphaToCoverage,map:Ct,matcap:st,envMap:ct,envMapMode:ct&&j.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:St,bumpMap:F,normalMap:J,displacementMap:u&&K,emissiveMap:ut,normalMapObjectSpace:J&&M.normalMapType===mp,normalMapTangentSpace:J&&M.normalMapType===bc,metalnessMap:bt,roughnessMap:L,anisotropy:E,anisotropyMap:ft,clearcoat:Y,clearcoatMap:ht,clearcoatNormalMap:It,clearcoatRoughnessMap:gt,dispersion:ot,iridescence:dt,iridescenceMap:_t,iridescenceThicknessMap:Tt,sheen:at,sheenColorMap:Ft,sheenRoughnessMap:Lt,specularMap:jt,specularColorMap:Yt,specularIntensityMap:he,transmission:Et,transmissionMap:B,thicknessMap:yt,gradientMap:tt,opaque:M.transparent===!1&&M.blending===Vi&&M.alphaToCoverage===!1,alphaMap:pt,alphaTest:Rt,alphaHash:At,combine:M.combine,mapUv:Ct&&v(M.map.channel),aoMapUv:D&&v(M.aoMap.channel),lightMapUv:St&&v(M.lightMap.channel),bumpMapUv:F&&v(M.bumpMap.channel),normalMapUv:J&&v(M.normalMap.channel),displacementMapUv:K&&v(M.displacementMap.channel),emissiveMapUv:ut&&v(M.emissiveMap.channel),metalnessMapUv:bt&&v(M.metalnessMap.channel),roughnessMapUv:L&&v(M.roughnessMap.channel),anisotropyMapUv:ft&&v(M.anisotropyMap.channel),clearcoatMapUv:ht&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:It&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&v(M.sheenRoughnessMap.channel),specularMapUv:jt&&v(M.specularMap.channel),specularColorMapUv:Yt&&v(M.specularColorMap.channel),specularIntensityMapUv:he&&v(M.specularIntensityMap.channel),transmissionMapUv:B&&v(M.transmissionMap.channel),thicknessMapUv:yt&&v(M.thicknessMap.channel),alphaMapUv:pt&&v(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(J||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Ct||pt),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:lt,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:vt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ct&&M.map.isVideoTexture===!0&&se.getTransfer(M.map.colorSpace)===me,decodeVideoTextureEmissive:ut&&M.emissiveMap.isVideoTexture===!0&&se.getTransfer(M.emissiveMap.colorSpace)===me,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===He,flipSided:M.side===Ke,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Gt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&M.extensions.multiDraw===!0||xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function m(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)b.push(C),b.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(x(b,M),_(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function x(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function _(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const b=g[M.type];let C;if(b){const N=Hn[b];C=yr.clone(N.uniforms)}else C=M.uniforms;return C}function T(M,b){let C;for(let N=0,U=f.length;N<U;N++){const O=f[N];if(O.cacheKey===b){C=O,++C.usedTimes;break}}return C===void 0&&(C=new nv(i,b,M,r),f.push(C)),C}function S(M){if(--M.usedTimes===0){const b=f.indexOf(M);f[b]=f[f.length-1],f.pop(),M.destroy()}}function w(M){l.remove(M)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:S,releaseShaderCache:w,programs:f,dispose:A}}function ov(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function lv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,u,d,g,v,p){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:u,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},i[t]=m):(m.id=h.id,m.object=h,m.geometry=u,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=v,m.group=p),t++,m}function o(h,u,d,g,v,p){const m=a(h,u,d,g,v,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(h,u,d,g,v,p){const m=a(h,u,d,g,v,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(h,u){e.length>1&&e.sort(h||lv),n.length>1&&n.sort(u||Wh),s.length>1&&s.sort(u||Wh)}function f(){for(let h=t,u=i.length;h<u;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:f,sort:c}}function cv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Xh,i.set(n,[a])):s>=r.length?(a=new Xh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function hv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Ot};break;case"SpotLight":e={position:new z,direction:new z,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function fv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let uv=0;function dv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function pv(i){const t=new hv,e=fv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,r=new re,a=new re;function o(c){let f=0,h=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,x=0,_=0,y=0,T=0,S=0,w=0;c.sort(dv);for(let M=0,b=c.length;M<b;M++){const C=c[M],N=C.color,U=C.intensity,O=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=N.r*U,h+=N.g*U,u+=N.b*U;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],U);w++}else if(C.isDirectionalLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,W=e.get(C);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=C.shadow.matrix,x++}n.directional[d]=G,d++}else if(C.isSpotLight){const G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(N).multiplyScalar(U),G.distance=O,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[v]=G;const j=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,j.updateMatrices(C),C.castShadow&&S++),n.spotLightMatrix[v]=j.matrix,C.castShadow){const W=e.get(C);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=H,y++}v++}else if(C.isRectAreaLight){const G=t.get(C);G.color.copy(N).multiplyScalar(U),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=G,p++}else if(C.isPointLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const j=C.shadow,W=e.get(C);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=C.shadow.matrix,_++}n.point[g]=G,g++}else if(C.isHemisphereLight){const G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(U),G.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[m]=G,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=u;const A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==x||A.numPointShadows!==_||A.numSpotShadows!==y||A.numSpotMaps!==T||A.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,A.directionalLength=d,A.pointLength=g,A.spotLength=v,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=x,A.numPointShadows=_,A.numSpotShadows=y,A.numSpotMaps=T,A.numLightProbes=w,n.version=uv++)}function l(c,f){let h=0,u=0,d=0,g=0,v=0;const p=f.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const _=c[m];if(_.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(_.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(_.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),u++}else if(_.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function qh(i){const t=new pv(i),e=[],n=[];function s(f){c.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function a(f){n.push(f)}function o(){t.setup(e)}function l(f){t.setupView(e,f)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function mv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new qh(i),t.set(s,[o])):r>=a.length?(o=new qh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class gv extends Ci{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vv extends Ci{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
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
}`;function yv(i,t,e){let n=new Mc;const s=new mt,r=new mt,a=new xe,o=new gv({depthPacking:pp}),l=new vv,c={},f=e.maxTextureSize,h={[Ai]:Ke,[Ke]:Ai,[He]:He},u=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:xv,fragmentShader:_v}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new ge;g.setAttribute("position",new ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Dt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let m=this.type;this.render=function(S,w,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const M=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ri),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=m!==ei&&this.type===ei,O=m===ei&&this.type!==ei;for(let H=0,G=S.length;H<G;H++){const j=S[H],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const V=W.getFrameExtents();if(s.multiply(V),r.copy(W.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/V.x),s.x=r.x*V.x,W.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/V.y),s.y=r.y*V.y,W.mapSize.y=r.y)),W.map===null||U===!0||O===!0){const et=this.type!==ei?{minFilter:gn,magFilter:gn}:{};W.map!==null&&W.map.dispose(),W.map=new An(s.x,s.y,et),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const Q=W.getViewportCount();for(let et=0;et<Q;et++){const vt=W.getViewport(et);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),N.viewport(a),W.updateMatrices(j,et),n=W.getFrustum(),y(w,A,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===ei&&x(W,A),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(M,b,C)};function x(S,w){const A=t.update(v);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new An(s.x,s.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,A,u,v,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,A,d,v,null)}function _(S,w,A,M){let b=null;const C=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)b=C;else if(b=A.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=b.uuid,U=w.uuid;let O=c[N];O===void 0&&(O={},c[N]=O);let H=O[U];H===void 0&&(H=b.clone(),O[U]=H,w.addEventListener("dispose",T)),b=H}if(b.visible=w.visible,b.wireframe=w.wireframe,M===ei?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=i.properties.get(b);N.light=A}return b}function y(S,w,A,M,b){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===ei)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const U=t.update(S),O=S.material;if(Array.isArray(O)){const H=U.groups;for(let G=0,j=H.length;G<j;G++){const W=H[G],V=O[W.materialIndex];if(V&&V.visible){const Q=_(S,V,M,b);S.onBeforeShadow(i,S,w,A,U,Q,W),i.renderBufferDirect(A,null,U,Q,S,W),S.onAfterShadow(i,S,w,A,U,Q,W)}}}else if(O.visible){const H=_(S,O,M,b);S.onBeforeShadow(i,S,w,A,U,H,null),i.renderBufferDirect(A,null,U,H,S,null),S.onAfterShadow(i,S,w,A,U,H,null)}}const N=S.children;for(let U=0,O=N.length;U<O;U++)y(N[U],w,A,M,b)}function T(S){S.target.removeEventListener("dispose",T);for(const A in c){const M=c[A],b=S.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const bv={[ll]:cl,[hl]:dl,[fl]:pl,[Cs]:ul,[cl]:ll,[dl]:hl,[pl]:fl,[ul]:Cs};function Mv(i,t){function e(){let B=!1;const yt=new xe;let tt=null;const pt=new xe(0,0,0,0);return{setMask:function(Rt){tt!==Rt&&!B&&(i.colorMask(Rt,Rt,Rt,Rt),tt=Rt)},setLocked:function(Rt){B=Rt},setClear:function(Rt,At,Gt,ae,fe){fe===!0&&(Rt*=ae,At*=ae,Gt*=ae),yt.set(Rt,At,Gt,ae),pt.equals(yt)===!1&&(i.clearColor(Rt,At,Gt,ae),pt.copy(yt))},reset:function(){B=!1,tt=null,pt.set(-1,0,0,0)}}}function n(){let B=!1,yt=!1,tt=null,pt=null,Rt=null;return{setReversed:function(At){if(yt!==At){const Gt=t.get("EXT_clip_control");yt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const ae=Rt;Rt=null,this.setClear(ae)}yt=At},getReversed:function(){return yt},setTest:function(At){At?X(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(At){tt!==At&&!B&&(i.depthMask(At),tt=At)},setFunc:function(At){if(yt&&(At=bv[At]),pt!==At){switch(At){case ll:i.depthFunc(i.NEVER);break;case cl:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case fl:i.depthFunc(i.EQUAL);break;case ul:i.depthFunc(i.GEQUAL);break;case dl:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=At}},setLocked:function(At){B=At},setClear:function(At){Rt!==At&&(yt&&(At=1-At),i.clearDepth(At),Rt=At)},reset:function(){B=!1,tt=null,pt=null,Rt=null,yt=!1}}}function s(){let B=!1,yt=null,tt=null,pt=null,Rt=null,At=null,Gt=null,ae=null,fe=null;return{setTest:function(Jt){B||(Jt?X(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(Jt){yt!==Jt&&!B&&(i.stencilMask(Jt),yt=Jt)},setFunc:function(Jt,Ge,_n){(tt!==Jt||pt!==Ge||Rt!==_n)&&(i.stencilFunc(Jt,Ge,_n),tt=Jt,pt=Ge,Rt=_n)},setOp:function(Jt,Ge,_n){(At!==Jt||Gt!==Ge||ae!==_n)&&(i.stencilOp(Jt,Ge,_n),At=Jt,Gt=Ge,ae=_n)},setLocked:function(Jt){B=Jt},setClear:function(Jt){fe!==Jt&&(i.clearStencil(Jt),fe=Jt)},reset:function(){B=!1,yt=null,tt=null,pt=null,Rt=null,At=null,Gt=null,ae=null,fe=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let f={},h={},u=new WeakMap,d=[],g=null,v=!1,p=null,m=null,x=null,_=null,y=null,T=null,S=null,w=new Ot(0,0,0),A=0,M=!1,b=null,C=null,N=null,U=null,O=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=j>=2);let V=null,Q={};const et=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),R=new xe().fromArray(et),I=new xe().fromArray(vt);function k(B,yt,tt,pt){const Rt=new Uint8Array(4),At=i.createTexture();i.bindTexture(B,At),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<tt;Gt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(yt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return At}const q={};q[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(i.DEPTH_TEST),a.setFunc(Cs),F(!1),J(Qc),X(i.CULL_FACE),D(ri);function X(B){f[B]!==!0&&(i.enable(B),f[B]=!0)}function lt(B){f[B]!==!1&&(i.disable(B),f[B]=!1)}function Mt(B,yt){return h[B]!==yt?(i.bindFramebuffer(B,yt),h[B]=yt,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=yt),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function xt(B,yt){let tt=d,pt=!1;if(B){tt=u.get(yt),tt===void 0&&(tt=[],u.set(yt,tt));const Rt=B.textures;if(tt.length!==Rt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let At=0,Gt=Rt.length;At<Gt;At++)tt[At]=i.COLOR_ATTACHMENT0+At;tt.length=Rt.length,pt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,pt=!0);pt&&i.drawBuffers(tt)}function Ct(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const st={[Bi]:i.FUNC_ADD,[qd]:i.FUNC_SUBTRACT,[Yd]:i.FUNC_REVERSE_SUBTRACT};st[jd]=i.MIN,st[Zd]=i.MAX;const ct={[$d]:i.ZERO,[Kd]:i.ONE,[Jd]:i.SRC_COLOR,[al]:i.SRC_ALPHA,[sp]:i.SRC_ALPHA_SATURATE,[np]:i.DST_COLOR,[tp]:i.DST_ALPHA,[Qd]:i.ONE_MINUS_SRC_COLOR,[ol]:i.ONE_MINUS_SRC_ALPHA,[ip]:i.ONE_MINUS_DST_COLOR,[ep]:i.ONE_MINUS_DST_ALPHA,[rp]:i.CONSTANT_COLOR,[ap]:i.ONE_MINUS_CONSTANT_COLOR,[op]:i.CONSTANT_ALPHA,[lp]:i.ONE_MINUS_CONSTANT_ALPHA};function D(B,yt,tt,pt,Rt,At,Gt,ae,fe,Jt){if(B===ri){v===!0&&(lt(i.BLEND),v=!1);return}if(v===!1&&(X(i.BLEND),v=!0),B!==Xd){if(B!==p||Jt!==M){if((m!==Bi||y!==Bi)&&(i.blendEquation(i.FUNC_ADD),m=Bi,y=Bi),Jt)switch(B){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tn:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,_=null,T=null,S=null,w.set(0,0,0),A=0,p=B,M=Jt}return}Rt=Rt||yt,At=At||tt,Gt=Gt||pt,(yt!==m||Rt!==y)&&(i.blendEquationSeparate(st[yt],st[Rt]),m=yt,y=Rt),(tt!==x||pt!==_||At!==T||Gt!==S)&&(i.blendFuncSeparate(ct[tt],ct[pt],ct[At],ct[Gt]),x=tt,_=pt,T=At,S=Gt),(ae.equals(w)===!1||fe!==A)&&(i.blendColor(ae.r,ae.g,ae.b,fe),w.copy(ae),A=fe),p=B,M=!1}function St(B,yt){B.side===He?lt(i.CULL_FACE):X(i.CULL_FACE);let tt=B.side===Ke;yt&&(tt=!tt),F(tt),B.blending===Vi&&B.transparent===!1?D(ri):D(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const pt=B.stencilWrite;o.setTest(pt),pt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ut(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function F(B){b!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),b=B)}function J(B){B!==Vd?(X(i.CULL_FACE),B!==C&&(B===Qc?i.cullFace(i.BACK):B===Wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),C=B}function K(B){B!==N&&(G&&i.lineWidth(B),N=B)}function ut(B,yt,tt){B?(X(i.POLYGON_OFFSET_FILL),(U!==yt||O!==tt)&&(i.polygonOffset(yt,tt),U=yt,O=tt)):lt(i.POLYGON_OFFSET_FILL)}function bt(B){B?X(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function L(B){B===void 0&&(B=i.TEXTURE0+H-1),V!==B&&(i.activeTexture(B),V=B)}function E(B,yt,tt){tt===void 0&&(V===null?tt=i.TEXTURE0+H-1:tt=V);let pt=Q[tt];pt===void 0&&(pt={type:void 0,texture:void 0},Q[tt]=pt),(pt.type!==B||pt.texture!==yt)&&(V!==tt&&(i.activeTexture(tt),V=tt),i.bindTexture(B,yt||q[B]),pt.type=B,pt.texture=yt)}function Y(){const B=Q[V];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function It(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ft(B){R.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),R.copy(B))}function Lt(B){I.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),I.copy(B))}function jt(B,yt){let tt=c.get(yt);tt===void 0&&(tt=new WeakMap,c.set(yt,tt));let pt=tt.get(B);pt===void 0&&(pt=i.getUniformBlockIndex(yt,B.name),tt.set(B,pt))}function Yt(B,yt){const pt=c.get(yt).get(B);l.get(yt)!==pt&&(i.uniformBlockBinding(yt,pt,B.__bindingPointIndex),l.set(yt,pt))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},V=null,Q={},h={},u=new WeakMap,d=[],g=null,v=!1,p=null,m=null,x=null,_=null,y=null,T=null,S=null,w=new Ot(0,0,0),A=0,M=!1,b=null,C=null,N=null,U=null,O=null,R.set(0,0,i.canvas.width,i.canvas.height),I.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:X,disable:lt,bindFramebuffer:Mt,drawBuffers:xt,useProgram:Ct,setBlending:D,setMaterial:St,setFlipSided:F,setCullFace:J,setLineWidth:K,setPolygonOffset:ut,setScissorTest:bt,activeTexture:L,bindTexture:E,unbindTexture:Y,compressedTexImage2D:ot,compressedTexImage3D:dt,texImage2D:_t,texImage3D:Tt,updateUBOMapping:jt,uniformBlockBinding:Yt,texStorage2D:It,texStorage3D:gt,texSubImage2D:at,texSubImage3D:Et,compressedTexSubImage2D:ft,compressedTexSubImage3D:ht,scissor:Ft,viewport:Lt,reset:he}}function Yh(i,t,e,n){const s=wv(n);switch(e){case bu:return i*t;case wu:return i*t;case Su:return i*t*2;case vc:return i*t/s.components*s.byteLength;case xc:return i*t/s.components*s.byteLength;case Tu:return i*t*2/s.components*s.byteLength;case _c:return i*t*2/s.components*s.byteLength;case Mu:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case yc:return i*t*4/s.components*s.byteLength;case Ma:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sa:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:case bl:return Math.max(i,16)*Math.max(t,8)/4;case xl:case yl:return Math.max(i,8)*Math.max(t,8)/2;case Ml:case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ea:case Ol:case Bl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Eu:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Gl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wv(i){switch(i){case li:case xu:return{byteLength:1,components:1};case _r:case _u:case Xn:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case qi:case pc:case Wn:return{byteLength:4,components:1};case yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Sv(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,f=new WeakMap;let h;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,E){return d?new OffscreenCanvas(L,E):La("canvas")}function v(L,E,Y){let ot=1;const dt=bt(L);if((dt.width>Y||dt.height>Y)&&(ot=Y/Math.max(dt.width,dt.height)),ot<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const at=Math.floor(ot*dt.width),Et=Math.floor(ot*dt.height);h===void 0&&(h=g(at,Et));const ft=E?g(at,Et):h;return ft.width=at,ft.height=Et,ft.getContext("2d").drawImage(L,0,0,at,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+at+"x"+Et+")."),ft}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),L;return L}function p(L){return L.generateMipmaps}function m(L){i.generateMipmap(L)}function x(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(L,E,Y,ot,dt=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let at=E;if(E===i.RED&&(Y===i.FLOAT&&(at=i.R32F),Y===i.HALF_FLOAT&&(at=i.R16F),Y===i.UNSIGNED_BYTE&&(at=i.R8)),E===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(at=i.R8UI),Y===i.UNSIGNED_SHORT&&(at=i.R16UI),Y===i.UNSIGNED_INT&&(at=i.R32UI),Y===i.BYTE&&(at=i.R8I),Y===i.SHORT&&(at=i.R16I),Y===i.INT&&(at=i.R32I)),E===i.RG&&(Y===i.FLOAT&&(at=i.RG32F),Y===i.HALF_FLOAT&&(at=i.RG16F),Y===i.UNSIGNED_BYTE&&(at=i.RG8)),E===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(at=i.RG8UI),Y===i.UNSIGNED_SHORT&&(at=i.RG16UI),Y===i.UNSIGNED_INT&&(at=i.RG32UI),Y===i.BYTE&&(at=i.RG8I),Y===i.SHORT&&(at=i.RG16I),Y===i.INT&&(at=i.RG32I)),E===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(at=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(at=i.RGB16UI),Y===i.UNSIGNED_INT&&(at=i.RGB32UI),Y===i.BYTE&&(at=i.RGB8I),Y===i.SHORT&&(at=i.RGB16I),Y===i.INT&&(at=i.RGB32I)),E===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),Y===i.UNSIGNED_INT&&(at=i.RGBA32UI),Y===i.BYTE&&(at=i.RGBA8I),Y===i.SHORT&&(at=i.RGBA16I),Y===i.INT&&(at=i.RGBA32I)),E===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),E===i.RGBA){const Et=dt?Ga:se.getTransfer(ot);Y===i.FLOAT&&(at=i.RGBA32F),Y===i.HALF_FLOAT&&(at=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(at=Et===me?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function y(L,E){let Y;return L?E===null||E===qi||E===Ls?Y=i.DEPTH24_STENCIL8:E===Wn?Y=i.DEPTH32F_STENCIL8:E===_r&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qi||E===Ls?Y=i.DEPTH_COMPONENT24:E===Wn?Y=i.DEPTH_COMPONENT32F:E===_r&&(Y=i.DEPTH_COMPONENT16),Y}function T(L,E){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==gn&&L.minFilter!==Vn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function S(L){const E=L.target;E.removeEventListener("dispose",S),A(E),E.isVideoTexture&&f.delete(E)}function w(L){const E=L.target;E.removeEventListener("dispose",w),b(E)}function A(L){const E=n.get(L);if(E.__webglInit===void 0)return;const Y=L.source,ot=u.get(Y);if(ot){const dt=ot[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&M(L),Object.keys(ot).length===0&&u.delete(Y)}n.remove(L)}function M(L){const E=n.get(L);i.deleteTexture(E.__webglTexture);const Y=L.source,ot=u.get(Y);delete ot[E.__cacheKey],a.memory.textures--}function b(L){const E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(E.__webglFramebuffer[ot]))for(let dt=0;dt<E.__webglFramebuffer[ot].length;dt++)i.deleteFramebuffer(E.__webglFramebuffer[ot][dt]);else i.deleteFramebuffer(E.__webglFramebuffer[ot]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ot])}else{if(Array.isArray(E.__webglFramebuffer))for(let ot=0;ot<E.__webglFramebuffer.length;ot++)i.deleteFramebuffer(E.__webglFramebuffer[ot]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ot=0;ot<E.__webglColorRenderbuffer.length;ot++)E.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ot]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=L.textures;for(let ot=0,dt=Y.length;ot<dt;ot++){const at=n.get(Y[ot]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(Y[ot])}n.remove(L)}let C=0;function N(){C=0}function U(){const L=C;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),C+=1,L}function O(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function H(L,E){const Y=n.get(L);if(L.isVideoTexture&&K(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const ot=L.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(Y,L,E);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+E)}function G(L,E){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){I(Y,L,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+E)}function j(L,E){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){I(Y,L,E);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+E)}function W(L,E){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){k(Y,L,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+E)}const V={[Ra]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[vl]:i.MIRRORED_REPEAT},Q={[gn]:i.NEAREST,[up]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[Ka]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},et={[gp]:i.NEVER,[Mp]:i.ALWAYS,[vp]:i.LESS,[Au]:i.LEQUAL,[xp]:i.EQUAL,[bp]:i.GEQUAL,[_p]:i.GREATER,[yp]:i.NOTEQUAL};function vt(L,E){if(E.type===Wn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Vn||E.magFilter===Ka||E.magFilter===Rr||E.magFilter===Gi||E.minFilter===Vn||E.minFilter===Ka||E.minFilter===Rr||E.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,V[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,V[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,V[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Q[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,et[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===gn||E.minFilter!==Rr&&E.minFilter!==Gi||E.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function R(L,E){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",S));const ot=E.source;let dt=u.get(ot);dt===void 0&&(dt={},u.set(ot,dt));const at=O(E);if(at!==L.__cacheKey){dt[at]===void 0&&(dt[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),dt[at].usedTimes++;const Et=dt[L.__cacheKey];Et!==void 0&&(dt[L.__cacheKey].usedTimes--,Et.usedTimes===0&&M(E)),L.__cacheKey=at,L.__webglTexture=dt[at].texture}return Y}function I(L,E,Y){let ot=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ot=i.TEXTURE_3D);const dt=R(L,E),at=E.source;e.bindTexture(ot,L.__webglTexture,i.TEXTURE0+Y);const Et=n.get(at);if(at.version!==Et.__version||dt===!0){e.activeTexture(i.TEXTURE0+Y);const ft=se.getPrimaries(se.workingColorSpace),ht=E.colorSpace===bi?null:se.getPrimaries(E.colorSpace),It=E.colorSpace===bi||ft===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let gt=v(E.image,!1,s.maxTextureSize);gt=ut(E,gt);const _t=r.convert(E.format,E.colorSpace),Tt=r.convert(E.type);let Ft=_(E.internalFormat,_t,Tt,E.colorSpace,E.isVideoTexture);vt(ot,E);let Lt;const jt=E.mipmaps,Yt=E.isVideoTexture!==!0,he=Et.__version===void 0||dt===!0,B=at.dataReady,yt=T(E,gt);if(E.isDepthTexture)Ft=y(E.format===Is,E.type),he&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Ft,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Ft,gt.width,gt.height,0,_t,Tt,null));else if(E.isDataTexture)if(jt.length>0){Yt&&he&&e.texStorage2D(i.TEXTURE_2D,yt,Ft,jt[0].width,jt[0].height);for(let tt=0,pt=jt.length;tt<pt;tt++)Lt=jt[tt],Yt?B&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Lt.width,Lt.height,_t,Tt,Lt.data):e.texImage2D(i.TEXTURE_2D,tt,Ft,Lt.width,Lt.height,0,_t,Tt,Lt.data);E.generateMipmaps=!1}else Yt?(he&&e.texStorage2D(i.TEXTURE_2D,yt,Ft,gt.width,gt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,_t,Tt,gt.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,gt.width,gt.height,0,_t,Tt,gt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Yt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Ft,jt[0].width,jt[0].height,gt.depth);for(let tt=0,pt=jt.length;tt<pt;tt++)if(Lt=jt[tt],E.format!==zn)if(_t!==null)if(Yt){if(B)if(E.layerUpdates.size>0){const Rt=Yh(Lt.width,Lt.height,E.format,E.type);for(const At of E.layerUpdates){const Gt=Lt.data.subarray(At*Rt/Lt.data.BYTES_PER_ELEMENT,(At+1)*Rt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,At,Lt.width,Lt.height,1,_t,Gt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Lt.width,Lt.height,gt.depth,_t,Lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Ft,Lt.width,Lt.height,gt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Lt.width,Lt.height,gt.depth,_t,Tt,Lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Ft,Lt.width,Lt.height,gt.depth,0,_t,Tt,Lt.data)}else{Yt&&he&&e.texStorage2D(i.TEXTURE_2D,yt,Ft,jt[0].width,jt[0].height);for(let tt=0,pt=jt.length;tt<pt;tt++)Lt=jt[tt],E.format!==zn?_t!==null?Yt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,Lt.width,Lt.height,_t,Lt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Ft,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?B&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Lt.width,Lt.height,_t,Tt,Lt.data):e.texImage2D(i.TEXTURE_2D,tt,Ft,Lt.width,Lt.height,0,_t,Tt,Lt.data)}else if(E.isDataArrayTexture)if(Yt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Ft,gt.width,gt.height,gt.depth),B)if(E.layerUpdates.size>0){const tt=Yh(gt.width,gt.height,E.format,E.type);for(const pt of E.layerUpdates){const Rt=gt.data.subarray(pt*tt/gt.data.BYTES_PER_ELEMENT,(pt+1)*tt/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,gt.width,gt.height,1,_t,Tt,Rt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,_t,Tt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,gt.width,gt.height,gt.depth,0,_t,Tt,gt.data);else if(E.isData3DTexture)Yt?(he&&e.texStorage3D(i.TEXTURE_3D,yt,Ft,gt.width,gt.height,gt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,_t,Tt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,gt.width,gt.height,gt.depth,0,_t,Tt,gt.data);else if(E.isFramebufferTexture){if(he)if(Yt)e.texStorage2D(i.TEXTURE_2D,yt,Ft,gt.width,gt.height);else{let tt=gt.width,pt=gt.height;for(let Rt=0;Rt<yt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Ft,tt,pt,0,_t,Tt,null),tt>>=1,pt>>=1}}else if(jt.length>0){if(Yt&&he){const tt=bt(jt[0]);e.texStorage2D(i.TEXTURE_2D,yt,Ft,tt.width,tt.height)}for(let tt=0,pt=jt.length;tt<pt;tt++)Lt=jt[tt],Yt?B&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,_t,Tt,Lt):e.texImage2D(i.TEXTURE_2D,tt,Ft,_t,Tt,Lt);E.generateMipmaps=!1}else if(Yt){if(he){const tt=bt(gt);e.texStorage2D(i.TEXTURE_2D,yt,Ft,tt.width,tt.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Tt,gt)}else e.texImage2D(i.TEXTURE_2D,0,Ft,_t,Tt,gt);p(E)&&m(ot),Et.__version=at.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function k(L,E,Y){if(E.image.length!==6)return;const ot=R(L,E),dt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Y);const at=n.get(dt);if(dt.version!==at.__version||ot===!0){e.activeTexture(i.TEXTURE0+Y);const Et=se.getPrimaries(se.workingColorSpace),ft=E.colorSpace===bi?null:se.getPrimaries(E.colorSpace),ht=E.colorSpace===bi||Et===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const It=E.isCompressedTexture||E.image[0].isCompressedTexture,gt=E.image[0]&&E.image[0].isDataTexture,_t=[];for(let pt=0;pt<6;pt++)!It&&!gt?_t[pt]=v(E.image[pt],!0,s.maxCubemapSize):_t[pt]=gt?E.image[pt].image:E.image[pt],_t[pt]=ut(E,_t[pt]);const Tt=_t[0],Ft=r.convert(E.format,E.colorSpace),Lt=r.convert(E.type),jt=_(E.internalFormat,Ft,Lt,E.colorSpace),Yt=E.isVideoTexture!==!0,he=at.__version===void 0||ot===!0,B=dt.dataReady;let yt=T(E,Tt);vt(i.TEXTURE_CUBE_MAP,E);let tt;if(It){Yt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,jt,Tt.width,Tt.height);for(let pt=0;pt<6;pt++){tt=_t[pt].mipmaps;for(let Rt=0;Rt<tt.length;Rt++){const At=tt[Rt];E.format!==zn?Ft!==null?Yt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt,0,0,At.width,At.height,Ft,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt,jt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt,0,0,At.width,At.height,Ft,Lt,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt,jt,At.width,At.height,0,Ft,Lt,At.data)}}}else{if(tt=E.mipmaps,Yt&&he){tt.length>0&&yt++;const pt=bt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,jt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(gt){Yt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,_t[pt].width,_t[pt].height,Ft,Lt,_t[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,jt,_t[pt].width,_t[pt].height,0,Ft,Lt,_t[pt].data);for(let Rt=0;Rt<tt.length;Rt++){const Gt=tt[Rt].image[pt].image;Yt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt+1,0,0,Gt.width,Gt.height,Ft,Lt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt+1,jt,Gt.width,Gt.height,0,Ft,Lt,Gt.data)}}else{Yt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ft,Lt,_t[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,jt,Ft,Lt,_t[pt]);for(let Rt=0;Rt<tt.length;Rt++){const At=tt[Rt];Yt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt+1,0,0,Ft,Lt,At.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt+1,jt,Ft,Lt,At.image[pt])}}}p(E)&&m(i.TEXTURE_CUBE_MAP),at.__version=dt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function q(L,E,Y,ot,dt,at){const Et=r.convert(Y.format,Y.colorSpace),ft=r.convert(Y.type),ht=_(Y.internalFormat,Et,ft,Y.colorSpace),It=n.get(E),gt=n.get(Y);if(gt.__renderTarget=E,!It.__hasExternalTextures){const _t=Math.max(1,E.width>>at),Tt=Math.max(1,E.height>>at);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,at,ht,_t,Tt,E.depth,0,Et,ft,null):e.texImage2D(dt,at,ht,_t,Tt,0,Et,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),J(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,dt,gt.__webglTexture,0,F(E)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,dt,gt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(L,E,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){const ot=E.depthTexture,dt=ot&&ot.isDepthTexture?ot.type:null,at=y(E.stencilBuffer,dt),Et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=F(E);J(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,at,E.width,E.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,at,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,at,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,L)}else{const ot=E.textures;for(let dt=0;dt<ot.length;dt++){const at=ot[dt],Et=r.convert(at.format,at.colorSpace),ft=r.convert(at.type),ht=_(at.internalFormat,Et,ft,at.colorSpace),It=F(E);Y&&J(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,ht,E.width,E.height):J(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,ht,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ht,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ot=n.get(E.depthTexture);ot.__renderTarget=E,(!ot.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const dt=ot.__webglTexture,at=F(E);if(E.depthTexture.format===Ts)J(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0);else if(E.depthTexture.format===Is)J(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Mt(L){const E=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ot=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ot){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ot.removeEventListener("dispose",dt)};ot.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ot}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");lt(E.__webglFramebuffer,L)}else if(Y){E.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ot]),E.__webglDepthbuffer[ot]===void 0)E.__webglDepthbuffer[ot]=i.createRenderbuffer(),X(E.__webglDepthbuffer[ot],L,!1);else{const dt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=E.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,at)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),X(E.__webglDepthbuffer,L,!1);else{const ot=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(L,E,Y){const ot=n.get(L);E!==void 0&&q(ot.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Mt(L)}function Ct(L){const E=L.texture,Y=n.get(L),ot=n.get(E);L.addEventListener("dispose",w);const dt=L.textures,at=L.isWebGLCubeRenderTarget===!0,Et=dt.length>1;if(Et||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=E.version,a.memory.textures++),at){Y.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[ft]=[];for(let ht=0;ht<E.mipmaps.length;ht++)Y.__webglFramebuffer[ft][ht]=i.createFramebuffer()}else Y.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ft=0;ft<E.mipmaps.length;ft++)Y.__webglFramebuffer[ft]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ft=0,ht=dt.length;ft<ht;ft++){const It=n.get(dt[ft]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&J(L)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ft=0;ft<dt.length;ft++){const ht=dt[ft];Y.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ft]);const It=r.convert(ht.format,ht.colorSpace),gt=r.convert(ht.type),_t=_(ht.internalFormat,It,gt,ht.colorSpace,L.isXRRenderTarget===!0),Tt=F(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,_t,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),X(Y.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),vt(i.TEXTURE_CUBE_MAP,E);for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0)for(let ht=0;ht<E.mipmaps.length;ht++)q(Y.__webglFramebuffer[ft][ht],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ht);else q(Y.__webglFramebuffer[ft],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);p(E)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ft=0,ht=dt.length;ft<ht;ft++){const It=dt[ft],gt=n.get(It);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),vt(i.TEXTURE_2D,It),q(Y.__webglFramebuffer,L,It,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),p(It)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ft=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,ot.__webglTexture),vt(ft,E),E.mipmaps&&E.mipmaps.length>0)for(let ht=0;ht<E.mipmaps.length;ht++)q(Y.__webglFramebuffer[ht],L,E,i.COLOR_ATTACHMENT0,ft,ht);else q(Y.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,ft,0);p(E)&&m(ft),e.unbindTexture()}L.depthBuffer&&Mt(L)}function st(L){const E=L.textures;for(let Y=0,ot=E.length;Y<ot;Y++){const dt=E[Y];if(p(dt)){const at=x(L),Et=n.get(dt).__webglTexture;e.bindTexture(at,Et),m(at),e.unbindTexture()}}}const ct=[],D=[];function St(L){if(L.samples>0){if(J(L)===!1){const E=L.textures,Y=L.width,ot=L.height;let dt=i.COLOR_BUFFER_BIT;const at=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(L),ft=E.length>1;if(ft)for(let ht=0;ht<E.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let ht=0;ht<E.length;ht++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ht]);const It=n.get(E[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,It,0)}i.blitFramebuffer(0,0,Y,ot,0,0,Y,ot,dt,i.NEAREST),l===!0&&(ct.length=0,D.length=0,ct.push(i.COLOR_ATTACHMENT0+ht),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ct.push(at),D.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let ht=0;ht<E.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ht]);const It=n.get(E[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function F(L){return Math.min(s.maxSamples,L.samples)}function J(L){const E=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function K(L){const E=a.render.frame;f.get(L)!==E&&(f.set(L,E),L.update())}function ut(L,E){const Y=L.colorSpace,ot=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==zs&&Y!==bi&&(se.getTransfer(Y)===me?(ot!==zn||dt!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}function bt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=xt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=q,this.useMultisampledRTT=J}function Tv(i,t){function e(n,s=bi){let r;const a=se.getTransfer(s);if(n===li)return i.UNSIGNED_BYTE;if(n===mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xu)return i.BYTE;if(n===_u)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===pc)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Xn)return i.HALF_FLOAT;if(n===bu)return i.ALPHA;if(n===Mu)return i.RGB;if(n===zn)return i.RGBA;if(n===wu)return i.LUMINANCE;if(n===Su)return i.LUMINANCE_ALPHA;if(n===Ts)return i.DEPTH_COMPONENT;if(n===Is)return i.DEPTH_STENCIL;if(n===vc)return i.RED;if(n===xc)return i.RED_INTEGER;if(n===Tu)return i.RG;if(n===_c)return i.RG_INTEGER;if(n===yc)return i.RGBA_INTEGER;if(n===Ma||n===wa||n===Sa||n===Ta)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===_l||n===yl||n===bl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===wl||n===Sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ml||n===wl)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tl||n===El||n===Al||n===Cl||n===Rl||n===Pl||n===Ll||n===Il||n===kl||n===Dl||n===Ul||n===Nl||n===zl||n===Fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===El)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ll)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===Ol||n===Bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ea)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eu||n===Hl||n===Gl||n===Vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Ev extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pn extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Av={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Av)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
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

}`;class Pv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $e({vertexShader:Cv,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new Ie(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lv extends Fs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,u=null,d=null,g=null;const v=new Pv,p=e.getContextAttributes();let m=null,x=null;const _=[],y=[],T=new mt;let S=null;const w=new dn;w.viewport=new xe;const A=new dn;A.viewport=new xe;const M=[w,A],b=new Ev;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let k=_[I];return k===void 0&&(k=new Ao,_[I]=k),k.getTargetRaySpace()},this.getControllerGrip=function(I){let k=_[I];return k===void 0&&(k=new Ao,_[I]=k),k.getGripSpace()},this.getHand=function(I){let k=_[I];return k===void 0&&(k=new Ao,_[I]=k),k.getHandSpace()};function U(I){const k=y.indexOf(I.inputSource);if(k===-1)return;const q=_[k];q!==void 0&&(q.update(I.inputSource,I.frame,c||a),q.dispatchEvent({type:I.type,data:I.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",H);for(let I=0;I<_.length;I++){const k=y[I];k!==null&&(y[I]=null,_[I].disconnect(k))}C=null,N=null,v.reset(),t.setRenderTarget(m),d=null,u=null,h=null,s=null,x=null,R.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const k={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new An(d.framebufferWidth,d.framebufferHeight,{format:zn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let k=null,q=null,X=null;p.depth&&(X=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=p.stencil?Is:Ts,q=p.stencil?Ls:qi);const lt={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};h=new XRWebGLBinding(s,e),u=h.createProjectionLayer(lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new An(u.textureWidth,u.textureHeight,{format:zn,type:li,depthTexture:new Bu(u.textureWidth,u.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),R.setContext(s),R.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(I){for(let k=0;k<I.removed.length;k++){const q=I.removed[k],X=y.indexOf(q);X>=0&&(y[X]=null,_[X].disconnect(q))}for(let k=0;k<I.added.length;k++){const q=I.added[k];let X=y.indexOf(q);if(X===-1){for(let Mt=0;Mt<_.length;Mt++)if(Mt>=y.length){y.push(q),X=Mt;break}else if(y[Mt]===null){y[Mt]=q,X=Mt;break}if(X===-1)break}const lt=_[X];lt&&lt.connect(q)}}const G=new z,j=new z;function W(I,k,q){G.setFromMatrixPosition(k.matrixWorld),j.setFromMatrixPosition(q.matrixWorld);const X=G.distanceTo(j),lt=k.projectionMatrix.elements,Mt=q.projectionMatrix.elements,xt=lt[14]/(lt[10]-1),Ct=lt[14]/(lt[10]+1),st=(lt[9]+1)/lt[5],ct=(lt[9]-1)/lt[5],D=(lt[8]-1)/lt[0],St=(Mt[8]+1)/Mt[0],F=xt*D,J=xt*St,K=X/(-D+St),ut=K*-D;if(k.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(ut),I.translateZ(K),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),lt[10]===-1)I.projectionMatrix.copy(k.projectionMatrix),I.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const bt=xt+K,L=Ct+K,E=F-ut,Y=J+(X-ut),ot=st*Ct/L*bt,dt=ct*Ct/L*bt;I.projectionMatrix.makePerspective(E,Y,ot,dt,bt,L),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function V(I,k){k===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(k.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let k=I.near,q=I.far;v.texture!==null&&(v.depthNear>0&&(k=v.depthNear),v.depthFar>0&&(q=v.depthFar)),b.near=A.near=w.near=k,b.far=A.far=w.far=q,(C!==b.near||N!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,N=b.far),w.layers.mask=I.layers.mask|2,A.layers.mask=I.layers.mask|4,b.layers.mask=w.layers.mask|A.layers.mask;const X=I.parent,lt=b.cameras;V(b,X);for(let Mt=0;Mt<lt.length;Mt++)V(lt[Mt],X);lt.length===2?W(b,w,A):b.projectionMatrix.copy(w.projectionMatrix),Q(I,b,X)};function Q(I,k,q){q===null?I.matrix.copy(k.matrixWorld):(I.matrix.copy(q.matrixWorld),I.matrix.invert(),I.matrix.multiply(k.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(k.projectionMatrix),I.projectionMatrixInverse.copy(k.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Xl*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(I){l=I,u!==null&&(u.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let et=null;function vt(I,k){if(f=k.getViewerPose(c||a),g=k,f!==null){const q=f.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let X=!1;q.length!==b.cameras.length&&(b.cameras.length=0,X=!0);for(let Mt=0;Mt<q.length;Mt++){const xt=q[Mt];let Ct=null;if(d!==null)Ct=d.getViewport(xt);else{const ct=h.getViewSubImage(u,xt);Ct=ct.viewport,Mt===0&&(t.setRenderTargetTextures(x,ct.colorTexture,u.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(x))}let st=M[Mt];st===void 0&&(st=new dn,st.layers.enable(Mt),st.viewport=new xe,M[Mt]=st),st.matrix.fromArray(xt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(xt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Mt===0&&(b.matrix.copy(st.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),X===!0&&b.cameras.push(st)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")){const Mt=h.getDepthInformation(q[0]);Mt&&Mt.isValid&&Mt.texture&&v.init(t,Mt,s.renderState)}}for(let q=0;q<_.length;q++){const X=y[q],lt=_[q];X!==null&&lt!==void 0&&lt.update(X,k,c||a)}et&&et(I,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}const R=new Ou;R.setAnimationLoop(vt),this.setAnimationLoop=function(I){et=I},this.dispose=function(){}}}const Di=new Qe,Iv=new re;function kv(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Nu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),f(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,x,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ke&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ke&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=t.get(m),_=x.envMap,y=x.envMapRotation;_&&(p.envMap.value=_,Di.copy(y),Di.x*=-1,Di.y*=-1,Di.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),p.envMapRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(Di)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function f(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ke&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dv(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const y=_.program;n.uniformBlockBinding(x,y)}function c(x,_){let y=s[x.id];y===void 0&&(g(x),y=f(x),s[x.id]=y,x.addEventListener("dispose",p));const T=_.program;n.updateUBOMapping(x,T);const S=t.render.frame;r[x.id]!==S&&(u(x),r[x.id]=S)}function f(x){const _=h();x.__bindingPointIndex=_;const y=i.createBuffer(),T=x.__size,S=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const _=s[x.id],y=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,w=y.length;S<w;S++){const A=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,b=A.length;M<b;M++){const C=A[M];if(d(C,S,M,T)===!0){const N=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let H=0;H<U.length;H++){const G=U[H],j=v(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,N+O,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,O),O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,_,y,T){const S=x.value,w=_+"_"+y;if(T[w]===void 0)return typeof S=="number"||typeof S=="boolean"?T[w]=S:T[w]=S.clone(),!0;{const A=T[w];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return T[w]=S,!0}else if(A.equals(S)===!1)return A.copy(S),!0}return!1}function g(x){const _=x.uniforms;let y=0;const T=16;for(let w=0,A=_.length;w<A;w++){const M=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,C=M.length;b<C;b++){const N=M[b],U=Array.isArray(N.value)?N.value:[N.value];for(let O=0,H=U.length;O<H;O++){const G=U[O],j=v(G),W=y%T,V=W%j.boundary,Q=W+V;y+=V,Q!==0&&T-Q<j.storage&&(y+=T-Q),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=j.storage}}}const S=y%T;return S>0&&(y+=T-S),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function p(x){const _=x.target;_.removeEventListener("dispose",p);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Uv{constructor(t={}){const{canvas:e=Sp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,m=null;const x=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=Ti,this.toneMappingExposure=1;const y=this;let T=!1,S=0,w=0,A=null,M=-1,b=null;const C=new xe,N=new xe;let U=null;const O=new Ot(0);let H=0,G=e.width,j=e.height,W=1,V=null,Q=null;const et=new xe(0,0,G,j),vt=new xe(0,0,G,j);let R=!1;const I=new Mc;let k=!1,q=!1;const X=new re,lt=new re,Mt=new z,xt=new xe,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function ct(){return A===null?W:1}let D=n;function St(P,Z){return e.getContext(P,Z)}try{const P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fc}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",At,!1),D===null){const Z="webgl2";if(D=St(Z,P),D===null)throw St(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let F,J,K,ut,bt,L,E,Y,ot,dt,at,Et,ft,ht,It,gt,_t,Tt,Ft,Lt,jt,Yt,he,B;function yt(){F=new Bg(D),F.init(),Yt=new Tv(D,F),J=new Dg(D,F,t,Yt),K=new Mv(D,F),J.reverseDepthBuffer&&u&&K.buffers.depth.setReversed(!0),ut=new Vg(D),bt=new ov,L=new Sv(D,F,K,bt,J,Yt,ut),E=new Ng(y),Y=new Og(y),ot=new $p(D),he=new Ig(D,ot),dt=new Hg(D,ot,ut,he),at=new Xg(D,dt,ot,ut),Ft=new Wg(D,J,L),gt=new Ug(bt),Et=new av(y,E,Y,F,J,he,gt),ft=new kv(y,bt),ht=new cv,It=new mv(F),Tt=new Lg(y,E,Y,K,at,d,l),_t=new yv(y,at,J),B=new Dv(D,ut,J,K),Lt=new kg(D,F,ut),jt=new Gg(D,F,ut),ut.programs=Et.programs,y.capabilities=J,y.extensions=F,y.properties=bt,y.renderLists=ht,y.shadowMap=_t,y.state=K,y.info=ut}yt();const tt=new Lv(y,D);this.xr=tt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const P=F.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=F.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(G,j,!1))},this.getSize=function(P){return P.set(G,j)},this.setSize=function(P,Z,it=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,j=Z,e.width=Math.floor(P*W),e.height=Math.floor(Z*W),it===!0&&(e.style.width=P+"px",e.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(G*W,j*W).floor()},this.setDrawingBufferSize=function(P,Z,it){G=P,j=Z,W=it,e.width=Math.floor(P*it),e.height=Math.floor(Z*it),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(et)},this.setViewport=function(P,Z,it,rt){P.isVector4?et.set(P.x,P.y,P.z,P.w):et.set(P,Z,it,rt),K.viewport(C.copy(et).multiplyScalar(W).round())},this.getScissor=function(P){return P.copy(vt)},this.setScissor=function(P,Z,it,rt){P.isVector4?vt.set(P.x,P.y,P.z,P.w):vt.set(P,Z,it,rt),K.scissor(N.copy(vt).multiplyScalar(W).round())},this.getScissorTest=function(){return R},this.setScissorTest=function(P){K.setScissorTest(R=P)},this.setOpaqueSort=function(P){V=P},this.setTransparentSort=function(P){Q=P},this.getClearColor=function(P){return P.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(P=!0,Z=!0,it=!0){let rt=0;if(P){let $=!1;if(A!==null){const wt=A.texture.format;$=wt===yc||wt===_c||wt===xc}if($){const wt=A.texture.type,kt=wt===li||wt===qi||wt===_r||wt===Ls||wt===mc||wt===gc,Ut=Tt.getClearColor(),Nt=Tt.getClearAlpha(),Wt=Ut.r,Zt=Ut.g,zt=Ut.b;kt?(g[0]=Wt,g[1]=Zt,g[2]=zt,g[3]=Nt,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Wt,v[1]=Zt,v[2]=zt,v[3]=Nt,D.clearBufferiv(D.COLOR,0,v))}else rt|=D.COLOR_BUFFER_BIT}Z&&(rt|=D.DEPTH_BUFFER_BIT),it&&(rt|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),ht.dispose(),It.dispose(),bt.dispose(),E.dispose(),Y.dispose(),at.dispose(),he.dispose(),B.dispose(),Et.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Vs),tt.removeEventListener("sessionend",Ce),yn.stop()};function pt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const P=ut.autoReset,Z=_t.enabled,it=_t.autoUpdate,rt=_t.needsUpdate,$=_t.type;yt(),ut.autoReset=P,_t.enabled=Z,_t.autoUpdate=it,_t.needsUpdate=rt,_t.type=$}function At(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Gt(P){const Z=P.target;Z.removeEventListener("dispose",Gt),ae(Z)}function ae(P){fe(P),bt.remove(P)}function fe(P){const Z=bt.get(P).programs;Z!==void 0&&(Z.forEach(function(it){Et.releaseProgram(it)}),P.isShaderMaterial&&Et.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,it,rt,$,wt){Z===null&&(Z=Ct);const kt=$.isMesh&&$.matrixWorld.determinant()<0,Ut=Bd(P,Z,it,rt,$);K.setMaterial(rt,kt);let Nt=it.index,Wt=1;if(rt.wireframe===!0){if(Nt=dt.getWireframeAttribute(it),Nt===void 0)return;Wt=2}const Zt=it.drawRange,zt=it.attributes.position;let ce=Zt.start*Wt,_e=(Zt.start+Zt.count)*Wt;wt!==null&&(ce=Math.max(ce,wt.start*Wt),_e=Math.min(_e,(wt.start+wt.count)*Wt)),Nt!==null?(ce=Math.max(ce,0),_e=Math.min(_e,Nt.count)):zt!=null&&(ce=Math.max(ce,0),_e=Math.min(_e,zt.count));const Me=_e-ce;if(Me<0||Me===1/0)return;he.setup($,rt,Ut,it,Nt);let rn,ue=Lt;if(Nt!==null&&(rn=ot.get(Nt),ue=jt,ue.setIndex(rn)),$.isMesh)rt.wireframe===!0?(K.setLineWidth(rt.wireframeLinewidth*ct()),ue.setMode(D.LINES)):ue.setMode(D.TRIANGLES);else if($.isLine){let Bt=rt.linewidth;Bt===void 0&&(Bt=1),K.setLineWidth(Bt*ct()),$.isLineSegments?ue.setMode(D.LINES):$.isLineLoop?ue.setMode(D.LINE_LOOP):ue.setMode(D.LINE_STRIP)}else $.isPoints?ue.setMode(D.POINTS):$.isSprite&&ue.setMode(D.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ue.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(F.get("WEBGL_multi_draw"))ue.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Bt=$._multiDrawStarts,Zn=$._multiDrawCounts,de=$._multiDrawCount,Rn=Nt?ot.get(Nt).bytesPerElement:1,$i=bt.get(rt).currentProgram.getUniforms();for(let cn=0;cn<de;cn++)$i.setValue(D,"_gl_DrawID",cn),ue.render(Bt[cn]/Rn,Zn[cn])}else if($.isInstancedMesh)ue.renderInstances(ce,Me,$.count);else if(it.isInstancedBufferGeometry){const Bt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Zn=Math.min(it.instanceCount,Bt);ue.renderInstances(ce,Me,Zn)}else ue.render(ce,Me)};function Jt(P,Z,it){P.transparent===!0&&P.side===He&&P.forceSinglePass===!1?(P.side=Ke,P.needsUpdate=!0,Cr(P,Z,it),P.side=Ai,P.needsUpdate=!0,Cr(P,Z,it),P.side=He):Cr(P,Z,it)}this.compile=function(P,Z,it=null){it===null&&(it=P),m=It.get(it),m.init(Z),_.push(m),it.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),P!==it&&P.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();const rt=new Set;return P.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const wt=$.material;if(wt)if(Array.isArray(wt))for(let kt=0;kt<wt.length;kt++){const Ut=wt[kt];Jt(Ut,it,$),rt.add(Ut)}else Jt(wt,it,$),rt.add(wt)}),_.pop(),m=null,rt},this.compileAsync=function(P,Z,it=null){const rt=this.compile(P,Z,it);return new Promise($=>{function wt(){if(rt.forEach(function(kt){bt.get(kt).currentProgram.isReady()&&rt.delete(kt)}),rt.size===0){$(P);return}setTimeout(wt,10)}F.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ge=null;function _n(P){Ge&&Ge(P)}function Vs(){yn.stop()}function Ce(){yn.start()}const yn=new Ou;yn.setAnimationLoop(_n),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(P){Ge=P,tt.setAnimationLoop(P),P===null?yn.stop():yn.start()},tt.addEventListener("sessionstart",Vs),tt.addEventListener("sessionend",Ce),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(Z),Z=tt.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,Z,A),m=It.get(P,_.length),m.init(Z),_.push(m),lt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),I.setFromProjectionMatrix(lt),q=this.localClippingEnabled,k=gt.init(this.clippingPlanes,q),p=ht.get(P,x.length),p.init(),x.push(p),tt.enabled===!0&&tt.isPresenting===!0){const wt=y.xr.getDepthSensingMesh();wt!==null&&Ws(wt,Z,-1/0,y.sortObjects)}Ws(P,Z,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(V,Q),st=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,st&&Tt.addToRenderList(p,P),this.info.render.frame++,k===!0&&gt.beginShadows();const it=m.state.shadowsArray;_t.render(it,P,Z),k===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=p.opaque,$=p.transmissive;if(m.setupLights(),Z.isArrayCamera){const wt=Z.cameras;if($.length>0)for(let kt=0,Ut=wt.length;kt<Ut;kt++){const Nt=wt[kt];jc(rt,$,P,Nt)}st&&Tt.render(P);for(let kt=0,Ut=wt.length;kt<Ut;kt++){const Nt=wt[kt];Yc(p,P,Nt,Nt.viewport)}}else $.length>0&&jc(rt,$,P,Z),st&&Tt.render(P),Yc(p,P,Z);A!==null&&(L.updateMultisampleRenderTarget(A),L.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(y,P,Z),he.resetDefaultState(),M=-1,b=null,_.pop(),_.length>0?(m=_[_.length-1],k===!0&&gt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function Ws(P,Z,it,rt){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)it=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||I.intersectsSprite(P)){rt&&xt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(lt);const kt=at.update(P),Ut=P.material;Ut.visible&&p.push(P,kt,Ut,it,xt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||I.intersectsObject(P))){const kt=at.update(P),Ut=P.material;if(rt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),xt.copy(P.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),xt.copy(kt.boundingSphere.center)),xt.applyMatrix4(P.matrixWorld).applyMatrix4(lt)),Array.isArray(Ut)){const Nt=kt.groups;for(let Wt=0,Zt=Nt.length;Wt<Zt;Wt++){const zt=Nt[Wt],ce=Ut[zt.materialIndex];ce&&ce.visible&&p.push(P,kt,ce,it,xt.z,zt)}}else Ut.visible&&p.push(P,kt,Ut,it,xt.z,null)}}const wt=P.children;for(let kt=0,Ut=wt.length;kt<Ut;kt++)Ws(wt[kt],Z,it,rt)}function Yc(P,Z,it,rt){const $=P.opaque,wt=P.transmissive,kt=P.transparent;m.setupLightsView(it),k===!0&&gt.setGlobalState(y.clippingPlanes,it),rt&&K.viewport(C.copy(rt)),$.length>0&&Ar($,Z,it),wt.length>0&&Ar(wt,Z,it),kt.length>0&&Ar(kt,Z,it),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function jc(P,Z,it,rt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[rt.id]===void 0&&(m.state.transmissionRenderTarget[rt.id]=new An(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")||F.has("EXT_color_buffer_float")?Xn:li,minFilter:Gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const wt=m.state.transmissionRenderTarget[rt.id],kt=rt.viewport||C;wt.setSize(kt.z,kt.w);const Ut=y.getRenderTarget();y.setRenderTarget(wt),y.getClearColor(O),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),st&&Tt.render(it);const Nt=y.toneMapping;y.toneMapping=Ti;const Wt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),m.setupLightsView(rt),k===!0&&gt.setGlobalState(y.clippingPlanes,rt),Ar(P,it,rt),L.updateMultisampleRenderTarget(wt),L.updateRenderTargetMipmap(wt),F.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let zt=0,ce=Z.length;zt<ce;zt++){const _e=Z[zt],Me=_e.object,rn=_e.geometry,ue=_e.material,Bt=_e.group;if(ue.side===He&&Me.layers.test(rt.layers)){const Zn=ue.side;ue.side=Ke,ue.needsUpdate=!0,Zc(Me,it,rt,rn,ue,Bt),ue.side=Zn,ue.needsUpdate=!0,Zt=!0}}Zt===!0&&(L.updateMultisampleRenderTarget(wt),L.updateRenderTargetMipmap(wt))}y.setRenderTarget(Ut),y.setClearColor(O,H),Wt!==void 0&&(rt.viewport=Wt),y.toneMapping=Nt}function Ar(P,Z,it){const rt=Z.isScene===!0?Z.overrideMaterial:null;for(let $=0,wt=P.length;$<wt;$++){const kt=P[$],Ut=kt.object,Nt=kt.geometry,Wt=rt===null?kt.material:rt,Zt=kt.group;Ut.layers.test(it.layers)&&Zc(Ut,Z,it,Nt,Wt,Zt)}}function Zc(P,Z,it,rt,$,wt){P.onBeforeRender(y,Z,it,rt,$,wt),P.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),$.onBeforeRender(y,Z,it,rt,P,wt),$.transparent===!0&&$.side===He&&$.forceSinglePass===!1?($.side=Ke,$.needsUpdate=!0,y.renderBufferDirect(it,Z,rt,$,P,wt),$.side=Ai,$.needsUpdate=!0,y.renderBufferDirect(it,Z,rt,$,P,wt),$.side=He):y.renderBufferDirect(it,Z,rt,$,P,wt),P.onAfterRender(y,Z,it,rt,$,wt)}function Cr(P,Z,it){Z.isScene!==!0&&(Z=Ct);const rt=bt.get(P),$=m.state.lights,wt=m.state.shadowsArray,kt=$.state.version,Ut=Et.getParameters(P,$.state,wt,Z,it),Nt=Et.getProgramCacheKey(Ut);let Wt=rt.programs;rt.environment=P.isMeshStandardMaterial?Z.environment:null,rt.fog=Z.fog,rt.envMap=(P.isMeshStandardMaterial?Y:E).get(P.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&P.envMap===null?Z.environmentRotation:P.envMapRotation,Wt===void 0&&(P.addEventListener("dispose",Gt),Wt=new Map,rt.programs=Wt);let Zt=Wt.get(Nt);if(Zt!==void 0){if(rt.currentProgram===Zt&&rt.lightsStateVersion===kt)return Kc(P,Ut),Zt}else Ut.uniforms=Et.getUniforms(P),P.onBeforeCompile(Ut,y),Zt=Et.acquireProgram(Ut,Nt),Wt.set(Nt,Zt),rt.uniforms=Ut.uniforms;const zt=rt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(zt.clippingPlanes=gt.uniform),Kc(P,Ut),rt.needsLights=Gd(P),rt.lightsStateVersion=kt,rt.needsLights&&(zt.ambientLightColor.value=$.state.ambient,zt.lightProbe.value=$.state.probe,zt.directionalLights.value=$.state.directional,zt.directionalLightShadows.value=$.state.directionalShadow,zt.spotLights.value=$.state.spot,zt.spotLightShadows.value=$.state.spotShadow,zt.rectAreaLights.value=$.state.rectArea,zt.ltc_1.value=$.state.rectAreaLTC1,zt.ltc_2.value=$.state.rectAreaLTC2,zt.pointLights.value=$.state.point,zt.pointLightShadows.value=$.state.pointShadow,zt.hemisphereLights.value=$.state.hemi,zt.directionalShadowMap.value=$.state.directionalShadowMap,zt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,zt.spotShadowMap.value=$.state.spotShadowMap,zt.spotLightMatrix.value=$.state.spotLightMatrix,zt.spotLightMap.value=$.state.spotLightMap,zt.pointShadowMap.value=$.state.pointShadowMap,zt.pointShadowMatrix.value=$.state.pointShadowMatrix),rt.currentProgram=Zt,rt.uniformsList=null,Zt}function $c(P){if(P.uniformsList===null){const Z=P.currentProgram.getUniforms();P.uniformsList=Aa.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function Kc(P,Z){const it=bt.get(P);it.outputColorSpace=Z.outputColorSpace,it.batching=Z.batching,it.batchingColor=Z.batchingColor,it.instancing=Z.instancing,it.instancingColor=Z.instancingColor,it.instancingMorph=Z.instancingMorph,it.skinning=Z.skinning,it.morphTargets=Z.morphTargets,it.morphNormals=Z.morphNormals,it.morphColors=Z.morphColors,it.morphTargetsCount=Z.morphTargetsCount,it.numClippingPlanes=Z.numClippingPlanes,it.numIntersection=Z.numClipIntersection,it.vertexAlphas=Z.vertexAlphas,it.vertexTangents=Z.vertexTangents,it.toneMapping=Z.toneMapping}function Bd(P,Z,it,rt,$){Z.isScene!==!0&&(Z=Ct),L.resetTextureUnits();const wt=Z.fog,kt=rt.isMeshStandardMaterial?Z.environment:null,Ut=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:zs,Nt=(rt.isMeshStandardMaterial?Y:E).get(rt.envMap||kt),Wt=rt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Zt=!!it.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),zt=!!it.morphAttributes.position,ce=!!it.morphAttributes.normal,_e=!!it.morphAttributes.color;let Me=Ti;rt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Me=y.toneMapping);const rn=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ue=rn!==void 0?rn.length:0,Bt=bt.get(rt),Zn=m.state.lights;if(k===!0&&(q===!0||P!==b)){const bn=P===b&&rt.id===M;gt.setState(rt,P,bn)}let de=!1;rt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Zn.state.version||Bt.outputColorSpace!==Ut||$.isBatchedMesh&&Bt.batching===!1||!$.isBatchedMesh&&Bt.batching===!0||$.isBatchedMesh&&Bt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Bt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Bt.instancing===!1||!$.isInstancedMesh&&Bt.instancing===!0||$.isSkinnedMesh&&Bt.skinning===!1||!$.isSkinnedMesh&&Bt.skinning===!0||$.isInstancedMesh&&Bt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Bt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Bt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Bt.instancingMorph===!1&&$.morphTexture!==null||Bt.envMap!==Nt||rt.fog===!0&&Bt.fog!==wt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==gt.numPlanes||Bt.numIntersection!==gt.numIntersection)||Bt.vertexAlphas!==Wt||Bt.vertexTangents!==Zt||Bt.morphTargets!==zt||Bt.morphNormals!==ce||Bt.morphColors!==_e||Bt.toneMapping!==Me||Bt.morphTargetsCount!==ue)&&(de=!0):(de=!0,Bt.__version=rt.version);let Rn=Bt.currentProgram;de===!0&&(Rn=Cr(rt,Z,$));let $i=!1,cn=!1,Xs=!1;const we=Rn.getUniforms(),Bn=Bt.uniforms;if(K.useProgram(Rn.program)&&($i=!0,cn=!0,Xs=!0),rt.id!==M&&(M=rt.id,cn=!0),$i||b!==P){K.buffers.depth.getReversed()?(X.copy(P.projectionMatrix),Ep(X),Ap(X),we.setValue(D,"projectionMatrix",X)):we.setValue(D,"projectionMatrix",P.projectionMatrix),we.setValue(D,"viewMatrix",P.matrixWorldInverse);const hi=we.map.cameraPosition;hi!==void 0&&hi.setValue(D,Mt.setFromMatrixPosition(P.matrixWorld)),J.logarithmicDepthBuffer&&we.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&we.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,cn=!0,Xs=!0)}if($.isSkinnedMesh){we.setOptional(D,$,"bindMatrix"),we.setOptional(D,$,"bindMatrixInverse");const bn=$.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),we.setValue(D,"boneTexture",bn.boneTexture,L))}$.isBatchedMesh&&(we.setOptional(D,$,"batchingTexture"),we.setValue(D,"batchingTexture",$._matricesTexture,L),we.setOptional(D,$,"batchingIdTexture"),we.setValue(D,"batchingIdTexture",$._indirectTexture,L),we.setOptional(D,$,"batchingColorTexture"),$._colorsTexture!==null&&we.setValue(D,"batchingColorTexture",$._colorsTexture,L));const qs=it.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&Ft.update($,it,Rn),(cn||Bt.receiveShadow!==$.receiveShadow)&&(Bt.receiveShadow=$.receiveShadow,we.setValue(D,"receiveShadow",$.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Bn.envMap.value=Nt,Bn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Z.environment!==null&&(Bn.envMapIntensity.value=Z.environmentIntensity),cn&&(we.setValue(D,"toneMappingExposure",y.toneMappingExposure),Bt.needsLights&&Hd(Bn,Xs),wt&&rt.fog===!0&&ft.refreshFogUniforms(Bn,wt),ft.refreshMaterialUniforms(Bn,rt,W,j,m.state.transmissionRenderTarget[P.id]),Aa.upload(D,$c(Bt),Bn,L)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Aa.upload(D,$c(Bt),Bn,L),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&we.setValue(D,"center",$.center),we.setValue(D,"modelViewMatrix",$.modelViewMatrix),we.setValue(D,"normalMatrix",$.normalMatrix),we.setValue(D,"modelMatrix",$.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const bn=rt.uniformsGroups;for(let hi=0,fi=bn.length;hi<fi;hi++){const Jc=bn[hi];B.update(Jc,Rn),B.bind(Jc,Rn)}}return Rn}function Hd(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function Gd(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,Z,it){bt.get(P.texture).__webglTexture=Z,bt.get(P.depthTexture).__webglTexture=it;const rt=bt.get(P);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=it===void 0,rt.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Z){const it=bt.get(P);it.__webglFramebuffer=Z,it.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(P,Z=0,it=0){A=P,S=Z,w=it;let rt=!0,$=null,wt=!1,kt=!1;if(P){const Nt=bt.get(P);if(Nt.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(D.FRAMEBUFFER,null),rt=!1;else if(Nt.__webglFramebuffer===void 0)L.setupRenderTarget(P);else if(Nt.__hasExternalTextures)L.rebindTextures(P,bt.get(P.texture).__webglTexture,bt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const zt=P.depthTexture;if(Nt.__boundDepthTexture!==zt){if(zt!==null&&bt.has(zt)&&(P.width!==zt.image.width||P.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(P)}}const Wt=P.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(kt=!0);const Zt=bt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Zt[Z])?$=Zt[Z][it]:$=Zt[Z],wt=!0):P.samples>0&&L.useMultisampledRTT(P)===!1?$=bt.get(P).__webglMultisampledFramebuffer:Array.isArray(Zt)?$=Zt[it]:$=Zt,C.copy(P.viewport),N.copy(P.scissor),U=P.scissorTest}else C.copy(et).multiplyScalar(W).floor(),N.copy(vt).multiplyScalar(W).floor(),U=R;if(K.bindFramebuffer(D.FRAMEBUFFER,$)&&rt&&K.drawBuffers(P,$),K.viewport(C),K.scissor(N),K.setScissorTest(U),wt){const Nt=bt.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Nt.__webglTexture,it)}else if(kt){const Nt=bt.get(P.texture),Wt=Z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.__webglTexture,it||0,Wt)}M=-1},this.readRenderTargetPixels=function(P,Z,it,rt,$,wt,kt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=bt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&kt!==void 0&&(Ut=Ut[kt]),Ut){K.bindFramebuffer(D.FRAMEBUFFER,Ut);try{const Nt=P.texture,Wt=Nt.format,Zt=Nt.type;if(!J.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-rt&&it>=0&&it<=P.height-$&&D.readPixels(Z,it,rt,$,Yt.convert(Wt),Yt.convert(Zt),wt)}finally{const Nt=A!==null?bt.get(A).__webglFramebuffer:null;K.bindFramebuffer(D.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(P,Z,it,rt,$,wt,kt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=bt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&kt!==void 0&&(Ut=Ut[kt]),Ut){const Nt=P.texture,Wt=Nt.format,Zt=Nt.type;if(!J.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=P.width-rt&&it>=0&&it<=P.height-$){K.bindFramebuffer(D.FRAMEBUFFER,Ut);const zt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,zt),D.bufferData(D.PIXEL_PACK_BUFFER,wt.byteLength,D.STREAM_READ),D.readPixels(Z,it,rt,$,Yt.convert(Wt),Yt.convert(Zt),0);const ce=A!==null?bt.get(A).__webglFramebuffer:null;K.bindFramebuffer(D.FRAMEBUFFER,ce);const _e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Tp(D,_e,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,zt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,wt),D.deleteBuffer(zt),D.deleteSync(_e),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Z=null,it=0){P.isTexture!==!0&&(hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,P=arguments[1]);const rt=Math.pow(2,-it),$=Math.floor(P.image.width*rt),wt=Math.floor(P.image.height*rt),kt=Z!==null?Z.x:0,Ut=Z!==null?Z.y:0;L.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,it,0,0,kt,Ut,$,wt),K.unbindTexture()},this.copyTextureToTexture=function(P,Z,it=null,rt=null,$=0){P.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,P=arguments[1],Z=arguments[2],$=arguments[3]||0,it=null);let wt,kt,Ut,Nt,Wt,Zt,zt,ce,_e;const Me=P.isCompressedTexture?P.mipmaps[$]:P.image;it!==null?(wt=it.max.x-it.min.x,kt=it.max.y-it.min.y,Ut=it.isBox3?it.max.z-it.min.z:1,Nt=it.min.x,Wt=it.min.y,Zt=it.isBox3?it.min.z:0):(wt=Me.width,kt=Me.height,Ut=Me.depth||1,Nt=0,Wt=0,Zt=0),rt!==null?(zt=rt.x,ce=rt.y,_e=rt.z):(zt=0,ce=0,_e=0);const rn=Yt.convert(Z.format),ue=Yt.convert(Z.type);let Bt;Z.isData3DTexture?(L.setTexture3D(Z,0),Bt=D.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(L.setTexture2DArray(Z,0),Bt=D.TEXTURE_2D_ARRAY):(L.setTexture2D(Z,0),Bt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Z.unpackAlignment);const Zn=D.getParameter(D.UNPACK_ROW_LENGTH),de=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Rn=D.getParameter(D.UNPACK_SKIP_PIXELS),$i=D.getParameter(D.UNPACK_SKIP_ROWS),cn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Zt);const Xs=P.isDataArrayTexture||P.isData3DTexture,we=Z.isDataArrayTexture||Z.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const Bn=bt.get(P),qs=bt.get(Z),bn=bt.get(Bn.__renderTarget),hi=bt.get(qs.__renderTarget);K.bindFramebuffer(D.READ_FRAMEBUFFER,bn.__webglFramebuffer),K.bindFramebuffer(D.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let fi=0;fi<Ut;fi++)Xs&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(P).__webglTexture,$,Zt+fi),P.isDepthTexture?(we&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(Z).__webglTexture,$,_e+fi),D.blitFramebuffer(Nt,Wt,wt,kt,zt,ce,wt,kt,D.DEPTH_BUFFER_BIT,D.NEAREST)):we?D.copyTexSubImage3D(Bt,$,zt,ce,_e+fi,Nt,Wt,wt,kt):D.copyTexSubImage2D(Bt,$,zt,ce,_e+fi,Nt,Wt,wt,kt);K.bindFramebuffer(D.READ_FRAMEBUFFER,null),K.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else we?P.isDataTexture||P.isData3DTexture?D.texSubImage3D(Bt,$,zt,ce,_e,wt,kt,Ut,rn,ue,Me.data):Z.isCompressedArrayTexture?D.compressedTexSubImage3D(Bt,$,zt,ce,_e,wt,kt,Ut,rn,Me.data):D.texSubImage3D(Bt,$,zt,ce,_e,wt,kt,Ut,rn,ue,Me):P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,$,zt,ce,wt,kt,rn,ue,Me.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,$,zt,ce,Me.width,Me.height,rn,Me.data):D.texSubImage2D(D.TEXTURE_2D,$,zt,ce,wt,kt,rn,ue,Me);D.pixelStorei(D.UNPACK_ROW_LENGTH,Zn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rn),D.pixelStorei(D.UNPACK_SKIP_ROWS,$i),D.pixelStorei(D.UNPACK_SKIP_IMAGES,cn),$===0&&Z.generateMipmaps&&D.generateMipmap(Bt),K.unbindTexture()},this.copyTextureToTexture3D=function(P,Z,it=null,rt=null,$=0){return P.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,rt=arguments[1]||null,P=arguments[2],Z=arguments[3],$=arguments[4]||0),hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Z,it,rt,$)},this.initRenderTarget=function(P){bt.get(P).__webglFramebuffer===void 0&&L.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),K.unbindTexture()},this.resetState=function(){S=0,w=0,A=null,K.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}class Hs{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new Hs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xu extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wl,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new z;class Ia{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ia(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Tc extends Ci{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let fs;const Ks=new z,us=new z,ds=new z,ps=new mt,Js=new mt,qu=new re,$r=new z,Qs=new z,Kr=new z,jh=new mt,Co=new mt,Zh=new mt;class Yu extends ke{constructor(t=new Tc){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new ge;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nv(e,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new Ia(n,3,0,!1)),fs.setAttribute("uv",new Ia(n,2,3,!1))}this.geometry=fs,this.material=t,this.center=new mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),qu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Jr($r.set(-.5,-.5,0),ds,a,us,s,r),Jr(Qs.set(.5,-.5,0),ds,a,us,s,r),Jr(Kr.set(.5,.5,0),ds,a,us,s,r),jh.set(0,0),Co.set(1,0),Zh.set(1,1);let o=t.ray.intersectTriangle($r,Qs,Kr,!1,Ks);if(o===null&&(Jr(Qs.set(-.5,.5,0),ds,a,us,s,r),Co.set(0,1),o=t.ray.intersectTriangle($r,Kr,Qs,!1,Ks),o===null))return;const l=t.ray.origin.distanceTo(Ks);l<t.near||l>t.far||e.push({distance:l,point:Ks.clone(),uv:En.getInterpolation(Ks,$r,Qs,Kr,jh,Co,Zh,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Jr(i,t,e,n,s,r){ps.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Js.x=r*ps.x-s*ps.y,Js.y=s*ps.x+r*ps.y):Js.copy(ps),i.copy(t),i.x+=Js.x,i.y+=Js.y,i.applyMatrix4(qu)}class zv extends Je{constructor(t=null,e=1,n=1,s,r,a,o,l,c=gn,f=gn,h,u){super(null,a,o,l,c,f,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $h extends ee{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ms=new re,Kh=new re,Qr=[],Jh=new Zi,Fv=new re,tr=new Dt,er=new Os;class ka extends Dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $h(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Fv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),Jh.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(Jh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Os),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),er.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),t.ray.intersectsSphere(er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ms),Kh.multiplyMatrices(n,ms),tr.matrixWorld=Kh,tr.raycast(t,Qr);for(let a=0,o=Qr.length;a<o;a++){const l=Qr[a];l.instanceId=r,l.object=this,e.push(l)}Qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $h(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zv(new Float32Array(s*this.count),s,this.count,vc,Wn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ov extends Ci{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qh=new re,jl=new Lu,ta=new Os,ea=new z;class Bv extends ke{constructor(t=new ge,e=new Ov){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(s),ta.radius+=r,t.ray.intersectsSphere(ta)===!1)return;Qh.copy(s).invert(),jl.copy(t.ray).applyMatrix4(Qh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=u,v=d;g<v;g++){const p=c.getX(g);ea.fromBufferAttribute(h,p),tf(ea,p,l,s,t,e,this)}}else{const u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=u,v=d;g<v;g++)ea.fromBufferAttribute(h,g),tf(ea,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function tf(i,t,e,n,s,r,a){const o=jl.distanceSqToPoint(i);if(o<e){const l=new z;jl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ec extends Je{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const f=n[s],u=n[s+1]-f,d=(a-f)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new mt:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new z,s=[],r=[],a=[],o=new z,l=new re;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE;const f=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);f<=c&&(c=f,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Be(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Be(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ac extends jn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new mt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*f-d*h+this.aX,c=u*h+d*f+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Hv extends Ac{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Cc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,f,h){let u=(a-r)/c-(o-r)/(c+f)+(o-a)/f,d=(o-a)/f-(l-a)/(f+h)+(l-o)/h;u*=f,d*=f,s(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const na=new z,Ro=new Cc,Po=new Cc,Lo=new Cc;class Rc extends jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,f;this.closed||o>0?c=s[(o-1)%r]:(na.subVectors(s[0],s[1]).add(s[0]),c=na);const h=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?f=s[(o+2)%r]:(na.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=na),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(f),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Ro.initNonuniformCatmullRom(c.x,h.x,u.x,f.x,g,v,p),Po.initNonuniformCatmullRom(c.y,h.y,u.y,f.y,g,v,p),Lo.initNonuniformCatmullRom(c.z,h.z,u.z,f.z,g,v,p)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(c.x,h.x,u.x,f.x,this.tension),Po.initCatmullRom(c.y,h.y,u.y,f.y,this.tension),Lo.initCatmullRom(c.z,h.z,u.z,f.z,this.tension));return n.set(Ro.calc(l),Po.calc(l),Lo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ef(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Gv(i,t){const e=1-i;return e*e*t}function Vv(i,t){return 2*(1-i)*i*t}function Wv(i,t){return i*i*t}function pr(i,t,e,n){return Gv(i,t)+Vv(i,e)+Wv(i,n)}function Xv(i,t){const e=1-i;return e*e*e*t}function qv(i,t){const e=1-i;return 3*e*e*i*t}function Yv(i,t){return 3*(1-i)*i*i*t}function jv(i,t){return i*i*i*t}function mr(i,t,e,n,s){return Xv(i,t)+qv(i,e)+Yv(i,n)+jv(i,s)}class ju extends jn{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(mr(t,s.x,r.x,a.x,o.x),mr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zv extends jn{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(mr(t,s.x,r.x,a.x,o.x),mr(t,s.y,r.y,a.y,o.y),mr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zu extends jn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $v extends jn{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $u extends jn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(pr(t,s.x,r.x,a.x),pr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ku extends jn{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(pr(t,s.x,r.x,a.x),pr(t,s.y,r.y,a.y),pr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ju extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],f=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(ef(o,l.x,c.x,f.x,h.x),ef(o,l.y,c.y,f.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new mt().fromArray(s))}return this}}var Da=Object.freeze({__proto__:null,ArcCurve:Hv,CatmullRomCurve3:Rc,CubicBezierCurve:ju,CubicBezierCurve3:Zv,EllipseCurve:Ac,LineCurve:Zu,LineCurve3:$v,QuadraticBezierCurve:$u,QuadraticBezierCurve3:Ku,SplineCurve:Ju});class Kv extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Da[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const f=l[c];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Da[s.type]().fromJSON(s))}return this}}class nf extends Kv{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Zu(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new $u(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new ju(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ju(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,e+f,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Ac(t,e,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Pc extends ge{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Be(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],f=1/e,h=new z,u=new mt,d=new z,g=new z,v=new z;let p=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,d.x=m*1,d.y=-p,d.z=m*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let x=0;x<=e;x++){const _=n+x*f*s,y=Math.sin(_),T=Math.cos(_);for(let S=0;S<=t.length-1;S++){h.x=t[S].x*y,h.y=t[S].y,h.z=t[S].x*T,a.push(h.x,h.y,h.z),u.x=x/e,u.y=S/(t.length-1),o.push(u.x,u.y);const w=l[3*S+0]*y,A=l[3*S+1],M=l[3*S+0]*T;c.push(w,A,M)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){const y=_+x*t.length,T=y,S=y+t.length,w=y+t.length+1,A=y+1;r.push(T,S,A),r.push(w,A,S)}this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("uv",new ie(o,2)),this.setAttribute("normal",new ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pc(t.points,t.segments,t.phiStart,t.phiLength)}}class br extends ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new z,f=new mt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){const d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[u]/t+1)/2,f.y=(a[u+1]/t+1)/2,l.push(f.x,f.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ye extends ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const f=[],h=[],u=[],d=[];let g=0;const v=[],p=n/2;let m=0;x(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2));function x(){const y=new z,T=new z;let S=0;const w=(e-t)/n;for(let A=0;A<=r;A++){const M=[],b=A/r,C=b*(e-t)+t;for(let N=0;N<=s;N++){const U=N/s,O=U*l+o,H=Math.sin(O),G=Math.cos(O);T.x=C*H,T.y=-b*n+p,T.z=C*G,h.push(T.x,T.y,T.z),y.set(H,w,G).normalize(),u.push(y.x,y.y,y.z),d.push(U,1-b),M.push(g++)}v.push(M)}for(let A=0;A<s;A++)for(let M=0;M<r;M++){const b=v[M][A],C=v[M+1][A],N=v[M+1][A+1],U=v[M][A+1];(t>0||M!==0)&&(f.push(b,C,U),S+=3),(e>0||M!==r-1)&&(f.push(C,N,U),S+=3)}c.addGroup(m,S,0),m+=S}function _(y){const T=g,S=new mt,w=new z;let A=0;const M=y===!0?t:e,b=y===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,p*b,0),u.push(0,b,0),d.push(.5,.5),g++;const C=g;for(let N=0;N<=s;N++){const O=N/s*l+o,H=Math.cos(O),G=Math.sin(O);w.x=M*G,w.y=p*b,w.z=M*H,h.push(w.x,w.y,w.z),u.push(0,b,0),S.x=H*.5+.5,S.y=G*.5*b+.5,d.push(S.x,S.y),g++}for(let N=0;N<s;N++){const U=T+N,O=C+N;y===!0?f.push(O,O+1,U):f.push(O+1,O,U),A+=3}c.addGroup(m,A,y===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vn extends ye{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new vn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Lc extends ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),f(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const _=new z,y=new z,T=new z;for(let S=0;S<e.length;S+=3)d(e[S+0],_),d(e[S+1],y),d(e[S+2],T),l(_,y,T,x)}function l(x,_,y,T){const S=T+1,w=[];for(let A=0;A<=S;A++){w[A]=[];const M=x.clone().lerp(y,A/S),b=_.clone().lerp(y,A/S),C=S-A;for(let N=0;N<=C;N++)N===0&&A===S?w[A][N]=M:w[A][N]=M.clone().lerp(b,N/C)}for(let A=0;A<S;A++)for(let M=0;M<2*(S-A)-1;M++){const b=Math.floor(M/2);M%2===0?(u(w[A][b+1]),u(w[A+1][b]),u(w[A][b])):(u(w[A][b+1]),u(w[A+1][b+1]),u(w[A+1][b]))}}function c(x){const _=new z;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(x),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function f(){const x=new z;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];const y=p(x)/2/Math.PI+.5,T=m(x)/Math.PI+.5;a.push(y,1-T)}g(),h()}function h(){for(let x=0;x<a.length;x+=6){const _=a[x+0],y=a[x+2],T=a[x+4],S=Math.max(_,y,T),w=Math.min(_,y,T);S>.9&&w<.1&&(_<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function d(x,_){const y=x*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){const x=new z,_=new z,y=new z,T=new z,S=new mt,w=new mt,A=new mt;for(let M=0,b=0;M<r.length;M+=9,b+=6){x.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),S.set(a[b+0],a[b+1]),w.set(a[b+2],a[b+3]),A.set(a[b+4],a[b+5]),T.copy(x).add(_).add(y).divideScalar(3);const C=p(T);v(S,b+0,x,C),v(w,b+2,_,C),v(A,b+4,y,C)}}function v(x,_,y,T){T<0&&x.x===1&&(a[_]=x.x-1),y.x===0&&y.z===0&&(a[_]=T/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.vertices,t.indices,t.radius,t.details)}}class Ic extends Lc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ic(t.radius,t.detail)}}class kc extends nf{constructor(t){super(t),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new nf().fromJSON(s))}return this}}const Jv={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Qu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,f,h,u,d;if(n&&(r=ix(i,t,r,e)),i.length>80*e){o=c=i[0],l=f=i[1];for(let g=e;g<s;g+=e)h=i[g],u=i[g+1],h<o&&(o=h),u<l&&(l=u),h>c&&(c=h),u>f&&(f=u);d=Math.max(c-o,f-l),d=d!==0?32767/d:0}return Mr(r,a,e,o,l,d,0),a}};function Qu(i,t,e,n,s){let r,a;if(s===px(i,t,e,n)>0)for(r=t;r<e;r+=n)a=sf(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=sf(r,i[r],i[r+1],a);return a&&Wa(a,a.next)&&(Sr(a),a=a.next),a}function Yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Wa(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Sr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Mr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&lx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?tx(i,n,s,r):Qv(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Sr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ex(Yi(i),t,e),Mr(i,t,e,n,s,r,2)):a===2&&nx(i,t,e,n,s,r):Mr(Yi(i),t,e,n,s,r,1);break}}}function Qv(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,f=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=f&&g.x<=u&&g.y>=h&&g.y<=d&&Ms(s,o,r,l,a,c,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tx(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ee(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,f=s.y,h=r.y,u=a.y,d=o<l?o<c?o:c:l<c?l:c,g=f<h?f<u?f:u:h<u?h:u,v=o>l?o>c?o:c:l>c?l:c,p=f>h?f>u?f:u:h>u?h:u,m=Zl(d,g,t,e,n),x=Zl(v,p,t,e,n);let _=i.prevZ,y=i.nextZ;for(;_&&_.z>=m&&y&&y.z<=x;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&Ms(o,f,l,h,c,u,_.x,_.y)&&Ee(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Ms(o,f,l,h,c,u,y.x,y.y)&&Ee(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&Ms(o,f,l,h,c,u,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Ms(o,f,l,h,c,u,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ex(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Wa(s,r)&&td(s,n,n.next,r)&&wr(s,r)&&wr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Sr(n),Sr(n.next),n=i=r),n=n.next}while(n!==i);return Yi(n)}function nx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fx(a,o)){let l=ed(a,o);a=Yi(a,a.next),l=Yi(l,l.next),Mr(a,t,e,n,s,r,0),Mr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ix(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Qu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(hx(c));for(s.sort(sx),r=0;r<s.length;r++)e=rx(s[r],e);return e}function sx(i,t){return i.x-t.x}function rx(i,t){const e=ax(i,t);if(!e)return t;const n=ed(e,i);return Yi(n,n.next),Yi(e,e.next)}function ax(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let f=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ms(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),wr(e,i)&&(h<f||h===f&&(e.x>s.x||e.x===s.x&&ox(s,e)))&&(s=e,f=h)),e=e.next;while(e!==o);return s}function ox(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function lx(i,t,e,n){let s=i;do s.z===0&&(s.z=Zl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cx(s)}function cx(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Zl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function hx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ms(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function fx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ux(i,t)&&(wr(i,t)&&wr(t,i)&&dx(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||Wa(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Wa(i,t){return i.x===t.x&&i.y===t.y}function td(i,t,e,n){const s=sa(Ee(i,t,e)),r=sa(Ee(i,t,n)),a=sa(Ee(e,n,i)),o=sa(Ee(e,n,t));return!!(s!==r&&a!==o||s===0&&ia(i,e,t)||r===0&&ia(i,n,t)||a===0&&ia(e,i,n)||o===0&&ia(e,t,n))}function ia(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function sa(i){return i>0?1:i<0?-1:0}function ux(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&td(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function wr(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function dx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ed(i,t){const e=new $l(i.i,i.x,i.y),n=new $l(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function sf(i,t,e,n){const s=new $l(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $l(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function px(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class gr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return gr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];rf(t),af(n,t);let a=t.length;e.forEach(rf);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,af(n,e[l]);const o=Jv.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function rf(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function af(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Xa extends ge{constructor(t=new kc([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:mx;let _,y=!1,T,S,w,A;m&&(_=m.getSpacedPoints(f),y=!0,u=!1,T=m.computeFrenetFrames(f,!1),S=new z,w=new z,A=new z),u||(p=0,d=0,g=0,v=0);const M=o.extractPoints(c);let b=M.shape;const C=M.holes;if(!gr.isClockWise(b)){b=b.reverse();for(let st=0,ct=C.length;st<ct;st++){const D=C[st];gr.isClockWise(D)&&(C[st]=D.reverse())}}const U=gr.triangulateShape(b,C),O=b;for(let st=0,ct=C.length;st<ct;st++){const D=C[st];b=b.concat(D)}function H(st,ct,D){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(ct,D)}const G=b.length,j=U.length;function W(st,ct,D){let St,F,J;const K=st.x-ct.x,ut=st.y-ct.y,bt=D.x-st.x,L=D.y-st.y,E=K*K+ut*ut,Y=K*L-ut*bt;if(Math.abs(Y)>Number.EPSILON){const ot=Math.sqrt(E),dt=Math.sqrt(bt*bt+L*L),at=ct.x-ut/ot,Et=ct.y+K/ot,ft=D.x-L/dt,ht=D.y+bt/dt,It=((ft-at)*L-(ht-Et)*bt)/(K*L-ut*bt);St=at+K*It-st.x,F=Et+ut*It-st.y;const gt=St*St+F*F;if(gt<=2)return new mt(St,F);J=Math.sqrt(gt/2)}else{let ot=!1;K>Number.EPSILON?bt>Number.EPSILON&&(ot=!0):K<-Number.EPSILON?bt<-Number.EPSILON&&(ot=!0):Math.sign(ut)===Math.sign(L)&&(ot=!0),ot?(St=-ut,F=K,J=Math.sqrt(E)):(St=K,F=ut,J=Math.sqrt(E/2))}return new mt(St/J,F/J)}const V=[];for(let st=0,ct=O.length,D=ct-1,St=st+1;st<ct;st++,D++,St++)D===ct&&(D=0),St===ct&&(St=0),V[st]=W(O[st],O[D],O[St]);const Q=[];let et,vt=V.concat();for(let st=0,ct=C.length;st<ct;st++){const D=C[st];et=[];for(let St=0,F=D.length,J=F-1,K=St+1;St<F;St++,J++,K++)J===F&&(J=0),K===F&&(K=0),et[St]=W(D[St],D[J],D[K]);Q.push(et),vt=vt.concat(et)}for(let st=0;st<p;st++){const ct=st/p,D=d*Math.cos(ct*Math.PI/2),St=g*Math.sin(ct*Math.PI/2)+v;for(let F=0,J=O.length;F<J;F++){const K=H(O[F],V[F],St);X(K.x,K.y,-D)}for(let F=0,J=C.length;F<J;F++){const K=C[F];et=Q[F];for(let ut=0,bt=K.length;ut<bt;ut++){const L=H(K[ut],et[ut],St);X(L.x,L.y,-D)}}}const R=g+v;for(let st=0;st<G;st++){const ct=u?H(b[st],vt[st],R):b[st];y?(w.copy(T.normals[0]).multiplyScalar(ct.x),S.copy(T.binormals[0]).multiplyScalar(ct.y),A.copy(_[0]).add(w).add(S),X(A.x,A.y,A.z)):X(ct.x,ct.y,0)}for(let st=1;st<=f;st++)for(let ct=0;ct<G;ct++){const D=u?H(b[ct],vt[ct],R):b[ct];y?(w.copy(T.normals[st]).multiplyScalar(D.x),S.copy(T.binormals[st]).multiplyScalar(D.y),A.copy(_[st]).add(w).add(S),X(A.x,A.y,A.z)):X(D.x,D.y,h/f*st)}for(let st=p-1;st>=0;st--){const ct=st/p,D=d*Math.cos(ct*Math.PI/2),St=g*Math.sin(ct*Math.PI/2)+v;for(let F=0,J=O.length;F<J;F++){const K=H(O[F],V[F],St);X(K.x,K.y,h+D)}for(let F=0,J=C.length;F<J;F++){const K=C[F];et=Q[F];for(let ut=0,bt=K.length;ut<bt;ut++){const L=H(K[ut],et[ut],St);y?X(L.x,L.y+_[f-1].y,_[f-1].x+D):X(L.x,L.y,h+D)}}}I(),k();function I(){const st=s.length/3;if(u){let ct=0,D=G*ct;for(let St=0;St<j;St++){const F=U[St];lt(F[2]+D,F[1]+D,F[0]+D)}ct=f+p*2,D=G*ct;for(let St=0;St<j;St++){const F=U[St];lt(F[0]+D,F[1]+D,F[2]+D)}}else{for(let ct=0;ct<j;ct++){const D=U[ct];lt(D[2],D[1],D[0])}for(let ct=0;ct<j;ct++){const D=U[ct];lt(D[0]+G*f,D[1]+G*f,D[2]+G*f)}}n.addGroup(st,s.length/3-st,0)}function k(){const st=s.length/3;let ct=0;q(O,ct),ct+=O.length;for(let D=0,St=C.length;D<St;D++){const F=C[D];q(F,ct),ct+=F.length}n.addGroup(st,s.length/3-st,1)}function q(st,ct){let D=st.length;for(;--D>=0;){const St=D;let F=D-1;F<0&&(F=st.length-1);for(let J=0,K=f+p*2;J<K;J++){const ut=G*J,bt=G*(J+1),L=ct+St+ut,E=ct+F+ut,Y=ct+F+bt,ot=ct+St+bt;Mt(L,E,Y,ot)}}}function X(st,ct,D){l.push(st),l.push(ct),l.push(D)}function lt(st,ct,D){xt(st),xt(ct),xt(D);const St=s.length/3,F=x.generateTopUV(n,s,St-3,St-2,St-1);Ct(F[0]),Ct(F[1]),Ct(F[2])}function Mt(st,ct,D,St){xt(st),xt(ct),xt(St),xt(ct),xt(D),xt(St);const F=s.length/3,J=x.generateSideWallUV(n,s,F-6,F-3,F-2,F-1);Ct(J[0]),Ct(J[1]),Ct(J[3]),Ct(J[1]),Ct(J[2]),Ct(J[3])}function xt(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function Ct(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Da[s.type]().fromJSON(s)),new Xa(n,t.options)}}const mx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],f=t[s*3+1];return[new mt(r,a),new mt(o,l),new mt(c,f)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],f=t[n*3+1],h=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],v=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-f)<Math.abs(a-c)?[new mt(a,1-l),new mt(c,1-h),new mt(u,1-g),new mt(v,1-m)]:[new mt(o,1-l),new mt(f,1-h),new mt(d,1-g),new mt(p,1-m)]}};function gx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class qa extends ge{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],f=[];let h=t;const u=(e-t)/s,d=new z,g=new mt;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=r+p/n*a;d.x=h*Math.cos(m),d.y=h*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,f.push(g.x,g.y)}h+=u}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const x=m+p,_=x,y=x+n+1,T=x+n+2,S=x+1;o.push(_,y,S),o.push(y,T,S)}}this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ze extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new z,u=new z,d=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const x=[],_=m/n;let y=0;m===0&&a===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const S=T/e;h.x=-t*Math.cos(s+S*r)*Math.sin(a+_*o),h.y=t*Math.cos(a+_*o),h.z=t*Math.sin(s+S*r)*Math.sin(a+_*o),g.push(h.x,h.y,h.z),u.copy(h).normalize(),v.push(u.x,u.y,u.z),p.push(S+y,1-_),x.push(c++)}f.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const _=f[m][x+1],y=f[m][x],T=f[m+1][x],S=f[m+1][x+1];(m!==0||a>0)&&d.push(_,y,S),(m!==n-1||l<Math.PI)&&d.push(y,T,S)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Tr extends ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],f=new z,h=new z,u=new z;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*r,p=d/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(v),h.y=(t+e*Math.cos(p))*Math.sin(v),h.z=e*Math.sin(p),o.push(h.x,h.y,h.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),u.subVectors(h,f).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,x=(s+1)*d+g;a.push(v,p,x),a.push(p,m,x)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Dc extends ge{constructor(t=new Ku(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new z,l=new z,c=new mt;let f=new z;const h=[],u=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2));function v(){for(let _=0;_<e;_++)p(_);p(r===!1?e:0),x(),m()}function p(_){f=t.getPointAt(_/e,f);const y=a.normals[_],T=a.binormals[_];for(let S=0;S<=s;S++){const w=S/s*Math.PI*2,A=Math.sin(w),M=-Math.cos(w);l.x=M*y.x+A*T.x,l.y=M*y.y+A*T.y,l.z=M*y.z+A*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=f.x+n*l.x,o.y=f.y+n*l.y,o.z=f.z+n*l.z,h.push(o.x,o.y,o.z)}}function m(){for(let _=1;_<=e;_++)for(let y=1;y<=s;y++){const T=(s+1)*(_-1)+(y-1),S=(s+1)*_+(y-1),w=(s+1)*_+y,A=(s+1)*(_-1)+y;g.push(T,S,A),g.push(S,w,A)}}function x(){for(let _=0;_<=e;_++)for(let y=0;y<=s;y++)c.x=_/e,c.y=y/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Dc(new Da[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class vx extends $e{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Pe extends Ci{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fn extends Ci{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ya extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class xx extends Ya{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Io=new re,of=new z,lf=new z;class nd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mc,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;of.setFromMatrixPosition(t.matrixWorld),e.position.copy(of),lf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lf),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const cf=new re,nr=new z,ko=new z;class _x extends nd{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(t.matrixWorld),n.position.copy(nr),ko.copy(n.position),ko.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ko),n.updateMatrixWorld(),s.makeTranslation(-nr.x,-nr.y,-nr.z),cf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cf)}}class Uc extends Ya{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _x}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class yx extends nd{constructor(){super(new wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bx extends Ya{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new yx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Mx extends Ya{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class wx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=hf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function hf(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);function Sx(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ge;let c=0;for(let f=0;f<i.length;++f){const h=i[f];let u=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,f),c+=d}}if(e){let f=0;const h=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+f);f+=i[u].attributes.position.count}l.setIndex(h)}for(const f in r){const h=ff(r[f]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,h)}for(const f in a){const h=a[f][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let u=0;u<h;++u){const d=[];for(let v=0;v<a[f].length;++v)d.push(a[f][v][u]);const g=ff(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(g)}}return l}function ff(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const f=i[c];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}const a=new t(r),o=new ee(a,e,n);let l=0;for(let c=0;c<i.length;++c){const f=i[c];if(f.isInterleavedBufferAttribute){const h=l/e;for(let u=0,d=f.count;u<d;u++)for(let g=0;g<e;g++){const v=f.getComponent(u,g);o.setComponent(u+h,g,v)}}else a.set(f.array,l);l+=f.count*e}return s!==void 0&&(o.gpuType=s),o}const Tx=typeof document<"u";function Ex(i){let t=i>>>0;const e=()=>{t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return e.range=(n,s)=>n+(s-n)*e(),e.int=(n,s)=>Math.floor(n+(s-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e.sign=()=>e()<.5?-1:1,e}const Ax=new Ot;function Si(i){return i&&i.isColor?i:new Ot(i)}function Ze(i,t,e=.08){const n=1+(t()-.5)*2*e,s=new Ot(i);return s.r*=n,s.g*=n,s.b*=n,s}function Cx(i,t,e,n={}){if(!Tx)return null;const s=document.createElement("canvas");s.width=i,s.height=t;const r=s.getContext("2d");e(r,i,t);const a=new Ec(s);return a.colorSpace=je,a.wrapS=a.wrapT=n.clamp?wi:Ra,a.anisotropy=n.aniso??8,n.repeat&&a.repeat.set(n.repeat[0],n.repeat[1]),a.needsUpdate=!0,a}const uf=new re,df=new Cn,pf=new Qe,mf=new z,Rx=new z(1,1,1),ra=new z;function Px(i,t){if(i.index){const n=i.toNonIndexed();i.dispose(),i=n}const e=i.attributes.position.count;if(i.attributes.normal||i.computeVertexNormals(),i.attributes.uv||i.setAttribute("uv",new ee(new Float32Array(e*2),2)),t!=null){const n=new Float32Array(e*3);if(typeof t=="function"){const s=i.attributes.position;for(let r=0;r<e;r++){ra.fromBufferAttribute(s,r);const a=t(ra.x,ra.y,ra.z,Ax);n[r*3]=a.r,n[r*3+1]=a.g,n[r*3+2]=a.b}}else{const s=Si(t);for(let r=0;r<e;r++)n[r*3]=s.r,n[r*3+1]=s.g,n[r*3+2]=s.b}i.setAttribute("color",new ee(n,3))}else if(!i.attributes.color){const n=new Float32Array(e*3).fill(1);i.setAttribute("color",new ee(n,3))}for(const n of Object.keys(i.attributes))n!=="position"&&n!=="normal"&&n!=="uv"&&n!=="color"&&i.deleteAttribute(n);return i.morphAttributes={},i}class ji{constructor(){this.buckets={}}add(t,e,n,s=0,r=0,a=0,o=0,l=0,c=0){return e=Px(e,n),pf.set(l,o,c,"YXZ"),df.setFromEuler(pf),mf.set(s,r,a),uf.compose(mf,df,Rx),e.applyMatrix4(uf),(this.buckets[t]||(this.buckets[t]=[])).push(e),this}box(t,e,n,s,r,a,o,l,c=0,f=0,h=0){return this.add(t,new xn(e,n,s),l,r,a+n/2,o,c,f,h)}cyl(t,e,n,s,r,a,o,l,c=12,f=0,h=0,u=0){return this.add(t,new ye(e,n,s,c),l,r,a+s/2,o,f,h,u)}cone(t,e,n,s,r,a,o,l=12,c=0){return this.add(t,new vn(e,n,l),o,s,r+n/2,a,c)}sphere(t,e,n,s,r,a,o=1,l=1,c=1,f=12,h=9){const u=new ze(e,f,h);return(o!==1||l!==1||c!==1)&&u.scale(o,l,c),this.add(t,u,a,n,s,r)}torus(t,e,n,s,r,a,o,l=0,c=0,f=0,h=Math.PI*2,u=16,d=6){return this.add(t,new Tr(e,n,d,u,h),o,s,r,a,c,l,f)}count(t){return this.buckets[t]?this.buckets[t].length:0}build(t,e={}){const n=[];for(const s of Object.keys(this.buckets)){const r=this.buckets[s];if(!r.length)continue;const a=r.length===1?r[0]:Sx(r,!1);if(r.length>1)for(const f of r)f.dispose();if(!a)throw new Error("merge failed for bucket "+s);const o=t[s];if(!o)throw new Error("no material for bucket "+s);const l=new Dt(a,o),c=e[s]||{};l.castShadow=!!c.cast,l.receiveShadow=!!c.receive,l.name="batch:"+s,l.matrixAutoUpdate=!1,n.push(l)}return this.buckets={},n}}class gf{constructor(){this.pos=[],this.nor=[],this.colr=[],this.uv=[]}quad(t,e,n,s,r,a,o,l,c){const f=e[0]-t[0],h=e[1]-t[1],u=e[2]-t[2],d=s[0]-t[0],g=s[1]-t[1],v=s[2]-t[2];let p=h*v-u*g,m=u*d-f*v,x=f*g-h*d;const _=Math.hypot(p,m,x)||1;p/=_,m/=_,x/=_;let y=t,T=e,S=n,w=s,A=0,M=1,b=2,C=3;p*r+m*a+x*o<0&&(T=s,w=e,M=3,C=1,p=-p,m=-m,x=-x);const N=this.pos,U=this.nor,O=this.colr,H=this.uv,G=[y,T,S,y,S,w],j=[A,M,b,A,b,C];for(let W=0;W<6;W++){const V=G[W];N.push(V[0],V[1],V[2]),U.push(p,m,x),O.push(l.r,l.g,l.b),c?H.push(c[j[W]][0],c[j[W]][1]):H.push(0,0)}}get empty(){return this.pos.length===0}toGeometry(){const t=new ge;return t.setAttribute("position",new ee(new Float32Array(this.pos),3)),t.setAttribute("normal",new ee(new Float32Array(this.nor),3)),t.setAttribute("uv",new ee(new Float32Array(this.uv),2)),t.setAttribute("color",new ee(new Float32Array(this.colr),3)),t}}function Lx(i,t,e,n,s=4,r=4){const a=new xn(i,t,e),o=n%s,l=Math.floor(n/s)%r,c=o/s,f=1-(l+1)/r,h=1/s,u=1/r,d=a.attributes.uv;for(let g=0;g<d.count;g++){const v=Math.floor(g/4);let p=d.getX(g),m=d.getY(g);v===2||v===3?(p=.03+p*.05,m=.03+m*.05):(p=.01+p*.98,m=.01+m*.98),d.setXY(g,c+p*h,f+m*u)}return a}function Ix(i){const t=new Set;i.traverse(e=>{e.geometry&&!t.has(e.geometry)&&(t.add(e.geometry),e.geometry.dispose());const n=e.material?Array.isArray(e.material)?e.material:[e.material]:[];for(const s of n)if(!t.has(s)){t.add(s);for(const r of["map","emissiveMap","alphaMap","normalMap","roughnessMap"])s[r]&&!t.has(s[r])&&(t.add(s[r]),s[r].dispose());s.dispose()}e.isLight&&e.shadow&&e.shadow.map&&e.shadow.map.dispose(),e.dispose&&e.isInstancedMesh&&e.dispose()})}function ja(i,t,e,n,s,r=1,a=3,o=1){i.globalAlpha=o;for(let l=0;l<n;l++){i.fillStyle=s[Math.random()*s.length|0];const c=r+Math.random()*(a-r);i.fillRect(Math.random()*t,Math.random()*e,c,c)}i.globalAlpha=1}function Kl(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const kx=i=>(t,e,n)=>{const s={paving:{base:"#8d8983",sp:["#7c7872","#9d9992","#a8a39b","#6f6b66"],edge:"#f6f1e4",dash:"#ffd84a"},mat:{base:"#3a3e4b",sp:["#333743","#444958","#2d303b"],edge:"#ffd23c",dash:"#f4f4f4"},neon:{base:"#0f1228",sp:["#141837","#0b0d1e","#1a1f45"],edge:"#27f0ff",dash:"#ff3fd0"},planks:{base:"#b98a55",sp:["#a97b49","#c79a63"],edge:"#fbf6ea",dash:"#fbf6ea"}}[i];if(t.fillStyle=s.base,t.fillRect(0,0,e,n),i==="planks"){const o=n/16,l=["#b98a55","#c2945e","#ad7e4a","#c99c66","#b5854f","#a67743"];for(let c=0;c<16;c++){t.fillStyle=l[(c*5+c*c%3)%l.length],t.fillRect(0,c*o,e,o),t.globalAlpha=.16;for(let f=0;f<26;f++){t.fillStyle=f%2?"#6e4a25":"#e3bd8a";const h=c*o+3+Math.random()*(o-6),u=Math.random()*e;t.fillRect(u,h,40+Math.random()*160,1.5)}t.globalAlpha=1,t.fillStyle="#5a3c1e",t.fillRect(0,c*o,e,3),t.fillStyle="rgba(255,235,200,0.25)",t.fillRect(0,c*o+3,e,2),t.fillStyle="#4b3520";for(const f of[20,e-24,e/2-2])t.beginPath(),t.arc(f,c*o+o/2,3,0,7),t.fill()}}else{if(ja(t,e,n,9e3,s.sp,1,3,.55),i==="neon"){t.strokeStyle="rgba(80,110,255,0.16)",t.lineWidth=2;for(let a=0;a<=8;a++)t.beginPath(),t.moveTo(0,a*n/8),t.lineTo(e,a*n/8),t.stroke();for(let a=0;a<=4;a++)t.beginPath(),t.moveTo(a*e/4,0),t.lineTo(a*e/4,n),t.stroke()}if(i==="mat"){t.globalAlpha=.07,t.fillStyle="#ffffff";for(let a=0;a<n;a+=4)t.fillRect(0,a,e,1);t.globalAlpha=1}t.globalAlpha=.1,t.fillStyle="#000";for(const a of[.3,.36,.63,.7])t.fillRect(a*e-7,0,14,n);t.globalAlpha=1}const r=i==="neon";r&&(t.shadowColor=s.edge,t.shadowBlur=14),t.fillStyle=s.edge,t.globalAlpha=i==="planks"?.85:1,t.fillRect(e*.035,0,e*.025,n),t.fillRect(e*.94,0,e*.025,n),r&&(t.shadowColor=s.dash),t.fillStyle=s.dash,t.fillRect(e*.488,n*.06,e*.024,n*.26),t.fillRect(e*.488,n*.56,e*.024,n*.26),t.globalAlpha=1,t.shadowBlur=0},Dx=(i="#f7f7f7",t="#16161a")=>(e,n,s)=>{e.fillStyle=i,e.fillRect(0,0,n,s),e.fillStyle=t,e.fillRect(0,0,n/2,s/2),e.fillRect(n/2,s/2,n/2,s/2)},Ux=(i,t)=>(e,n,s)=>{e.fillStyle=i,e.fillRect(0,0,n,s),e.fillStyle=t;for(let r=0;r<2;r++){const a=n*(.08+r*.5);e.beginPath(),e.moveTo(a,s*.1),e.lineTo(a+n*.18,s*.1),e.lineTo(a+n*.36,s*.5),e.lineTo(a+n*.18,s*.9),e.lineTo(a,s*.9),e.lineTo(a+n*.18,s*.5),e.closePath(),e.fill()}e.strokeStyle=t,e.lineWidth=6,e.strokeRect(3,3,n-6,s-6)},Nx=(i="#fff36b",t="#ff8a1e")=>(e,n,s)=>{e.clearRect(0,0,n,s);const r=e.createLinearGradient(0,0,n,0);r.addColorStop(0,"rgba(255,140,30,0)"),r.addColorStop(.5,"rgba(255,170,40,0.55)"),r.addColorStop(1,"rgba(255,140,30,0)"),e.fillStyle=r,e.fillRect(0,0,n,s),e.shadowColor=t,e.shadowBlur=18;for(let a=0;a<2;a++){const o=s*(.5*a);e.fillStyle=a?i:"#ffffff",e.beginPath(),e.moveTo(n*.5,o+s*.06),e.lineTo(n*.92,o+s*.34),e.lineTo(n*.92,o+s*.46),e.lineTo(n*.5,o+s*.2),e.lineTo(n*.08,o+s*.46),e.lineTo(n*.08,o+s*.34),e.closePath(),e.fill()}e.shadowBlur=0},zx=(i,t,e,n)=>(s,r,a)=>{s.fillStyle=t,s.fillRect(0,0,r,a);const o=a/4;for(let c=0;c<r;c+=o)for(let f=0;f<2;f++)s.fillStyle=(c/o+f|0)%2?"#111":"#fafafa",s.fillRect(c,f?a-o*.5:0,o,o*.5);s.fillStyle=n,s.fillRect(0,o*.5,r,6),s.fillRect(0,a-o*.5-6,r,6),s.font=`900 ${Math.floor(a*.42)}px "Arial Black", Impact, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.lineWidth=10,s.strokeStyle="rgba(0,0,0,0.55)";let l=a*.42;for(;s.measureText(i).width>r*.9&&l>10;)l-=4,s.font=`900 ${Math.floor(l)}px "Arial Black", Impact, sans-serif`;s.strokeText(i,r/2,a/2+2),s.fillStyle=e,s.fillText(i,r/2,a/2+2)},Fx=()=>(i,t,e)=>{i.fillStyle="#5fae3c",i.fillRect(0,0,t,e);for(let s=0;s<60;s++)i.fillStyle=["rgba(120,200,80,0.25)","rgba(60,140,50,0.25)","rgba(150,210,90,0.2)"][s%3],i.beginPath(),i.arc(Math.random()*t,Math.random()*e,30+Math.random()*60,0,7),i.fill();const n=["#4b9a32","#6fc048","#88d058","#3f8a2c","#7ac74e"];i.lineWidth=2;for(let s=0;s<5e3;s++){i.strokeStyle=n[Math.random()*n.length|0];const r=Math.random()*t,a=Math.random()*e;i.beginPath(),i.moveTo(r,a),i.lineTo(r+(Math.random()-.5)*7,a-5-Math.random()*9),i.stroke()}for(let s=0;s<40;s++)i.fillStyle=["#fff","#ffe866","#ffd0e8"][s%3],i.beginPath(),i.arc(Math.random()*t,Math.random()*e,2.2,0,7),i.fill()},id=(i,t,e,n)=>(s,r,a)=>{const o=r/2;for(let l=0;l<2;l++)for(let c=0;c<2;c++){s.fillStyle=(l+c)%2?i:t,s.fillRect(l*o,c*o,o,o);const f=s.createLinearGradient(l*o,c*o,l*o+o,c*o+o);f.addColorStop(0,"rgba(255,255,255,0.10)"),f.addColorStop(1,"rgba(0,0,0,0.10)"),s.fillStyle=f,s.fillRect(l*o,c*o,o,o)}ja(s,r,a,2500,n||["rgba(255,255,255,0.5)","rgba(0,0,0,0.35)"],1,2.5,.25),s.fillStyle=e;for(let l=0;l<=2;l++)s.fillRect(l*o-3,0,6,a),s.fillRect(0,l*o-3,r,6)},Ox=()=>(i,t,e)=>{i.fillStyle="#ecd29a",i.fillRect(0,0,t,e);for(let n=0;n<40;n++)i.fillStyle=n%2?"rgba(255,236,190,0.3)":"rgba(205,165,105,0.22)",i.beginPath(),i.arc(Math.random()*t,Math.random()*e,30+Math.random()*70,0,7),i.fill();i.lineWidth=3;for(let n=0;n<14;n++){i.strokeStyle=n%2?"rgba(190,150,95,0.35)":"rgba(255,244,210,0.4)";const s=(n+.5)*(e/14);i.beginPath();for(let r=0;r<=t;r+=8){const a=s+Math.sin(r/t*Math.PI*4+n)*6;r===0?i.moveTo(r,a):i.lineTo(r,a)}i.stroke()}ja(i,t,e,7e3,["#d8b678","#f8e6b8","#c9a468","#fff3cf"],1,2.5,.6)},Bx=(i,t,e)=>(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r),n.fillStyle=t;for(let a=0;a<4;a++)n.fillRect((a+.25)*(s/4),0,s/8,r);n.fillStyle=e;for(let a=0;a<4;a++)for(let o=0;o<4;o++)n.beginPath(),n.arc((a+.75)*(s/4),(o+.5)*(r/4),s/60,0,7),n.fill()},Hx=()=>(i,t,e)=>{i.fillStyle="#f2e9d8",i.fillRect(0,0,t,e);const n=8;for(let s=0;s<n;s++){const r=s*e/n,a=i.createLinearGradient(0,r,0,r+e/n);a.addColorStop(0,"rgba(255,255,255,0.35)"),a.addColorStop(.85,"rgba(0,0,0,0.04)"),a.addColorStop(1,"rgba(0,0,0,0.3)"),i.fillStyle=a,i.fillRect(0,r,t,e/n)}},Gx=()=>(i,t,e)=>{i.fillStyle="#b2433f",i.fillRect(0,0,t,e),i.fillStyle="#f0d9a8",i.fillRect(t*.04,e*.06,t*.92,e*.88),i.fillStyle="#2f5d7c",i.fillRect(t*.07,e*.1,t*.86,e*.8),i.fillStyle="#d98e3f";for(let n=0;n<9;n++)for(let s=0;s<5;s++){const r=t*(.12+n*.095),a=e*(.18+s*.16);i.beginPath(),i.moveTo(r,a-e*.05),i.lineTo(r+t*.03,a),i.lineTo(r,a+e*.05),i.lineTo(r-t*.03,a),i.closePath(),i.fillStyle=(n+s)%2?"#d98e3f":"#f0d9a8",i.fill()}ja(i,t,e,6e3,["rgba(0,0,0,0.25)","rgba(255,255,255,0.2)"],1,2,.5)},sd=[["ZAPPO","#e6332a","#ffd400"],["MEGA BLOX","#1565c0","#ffeb3b"],["TURBO OATS","#f57c00","#fff8e1"],["STAR BITES","#6a1b9a","#ffd54f"],["ROBO PALS","#00897b","#e0f7fa"],["FIZZ POP","#d81b60","#fff"],["KITE KIT","#29b6f6","#fff59d"],["WOBBLE","#7cb342","#fff"],["DINO CRUNCH","#388e3c","#ffcc80"],["PUZZLE 500","#5d4037","#ffe082"],["GLOW GOO","#212121","#76ff03"],["SPACE CAT","#283593","#ff80ab"],["BUBBLE UP","#00acc1","#ffffff"],["CHOO CHOO","#c62828","#ffffff"],["MARBLES","#fbc02d","#1a237e"],["YUM RINGS","#ef6c00","#fffde7"]],Vx=sd.map(i=>i[1]),rd=()=>(i,t,e)=>{const n=t/4;sd.forEach(([s,r,a],o)=>{const l=o%4*n,c=Math.floor(o/4)*n;i.save(),i.beginPath(),i.rect(l,c,n,n),i.clip(),i.fillStyle=r,i.fillRect(l,c,n,n),i.fillStyle="rgba(255,255,255,0.16)",i.beginPath(),i.moveTo(l,c+n*.75),i.lineTo(l+n,c+n*.35),i.lineTo(l+n,c+n*.6),i.lineTo(l,c+n),i.closePath(),i.fill(),i.fillStyle=a,i.beginPath();const f=l+n*.5,h=c+n*.6,u=12+o%3*4;for(let g=0;g<u*2;g++){const v=n*(g%2?.22:.3),p=g/(u*2)*Math.PI*2;i.lineTo(f+Math.cos(p)*v,h+Math.sin(p)*v)}i.closePath(),i.fill(),i.fillStyle=r,i.beginPath(),i.arc(f-n*.07,h-n*.02,n*.035,0,7),i.arc(f+n*.07,h-n*.02,n*.035,0,7),i.fill(),i.lineWidth=n*.02,i.strokeStyle=r,i.beginPath(),i.arc(f,h+n*.03,n*.09,.15*Math.PI,.85*Math.PI),i.stroke(),i.fillStyle="rgba(0,0,0,0.28)",Kl(i,l+n*.06,c+n*.07,n*.88,n*.2,n*.04),i.fill();let d=n*.15;for(i.font=`900 ${d}px "Arial Black", Impact, sans-serif`;i.measureText(s).width>n*.8;)d-=2,i.font=`900 ${d}px "Arial Black", Impact, sans-serif`;i.textAlign="center",i.textBaseline="middle",i.fillStyle="#fff",i.fillText(s,l+n*.5,c+n*.175),i.fillStyle=r,i.fillRect(l,c+n*.88,n*.12,n*.12),i.strokeStyle="rgba(0,0,0,0.35)",i.lineWidth=4,i.strokeRect(l+2,c+2,n-4,n-4),i.restore()})},Wx=(i,t)=>(e,n,s)=>{e.clearRect(0,0,n,s),e.fillStyle="rgba(8,8,24,0.82)",Kl(e,4,4,n-8,s-8,26),e.fill(),e.lineWidth=8,e.strokeStyle=t,e.shadowColor=t,e.shadowBlur=26,Kl(e,16,16,n-32,s-32,20),e.stroke();let r=s*.56;for(e.font=`900 ${r}px "Arial Black", Impact, sans-serif`;e.measureText(i).width>n*.82;)r-=4,e.font=`900 ${r}px "Arial Black", Impact, sans-serif`;e.textAlign="center",e.textBaseline="middle",e.fillStyle=t,e.fillText(i,n/2,s/2+4),e.shadowBlur=8,e.fillStyle="#ffffff",e.globalAlpha=.85,e.fillText(i,n/2,s/2+4),e.globalAlpha=1,e.shadowBlur=0},Xx=()=>(i,t,e)=>{const n=i.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)},qx=()=>(i,t,e)=>{const n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#ff9d5c"),n.addColorStop(.5,"#3f8fa6"),n.addColorStop(1,"#2f7f9a"),i.fillStyle="#3a88a2",i.fillRect(0,0,t,e),i.lineWidth=3;for(let s=0;s<22;s++){i.strokeStyle=s%3===0?"rgba(255,214,150,0.55)":s%3===1?"rgba(255,255,255,0.28)":"rgba(20,70,100,0.35)";const r=(s+.5)*(e/22);i.beginPath();for(let a=0;a<=t;a+=8){const o=r+Math.sin(a/t*Math.PI*6+s*1.7)*5;a===0?i.moveTo(a,o):i.lineTo(a,o)}i.stroke()}},ad=(i,t,e)=>(n,s,r)=>{const a=n.createLinearGradient(0,0,0,r);a.addColorStop(0,i),a.addColorStop(1,t),n.fillStyle=a,n.fillRect(0,0,s,r),n.fillStyle="rgba(255,255,255,0.75)";for(let o=0;o<4;o++)n.beginPath(),n.ellipse(s*(.2+o*.22),r*(.25+o%2*.2),s*.12,r*.05,0,0,7),n.fill();n.fillStyle=e,n.fillRect(0,0,s,14),n.fillRect(0,r-14,s,14),n.fillRect(0,0,14,r),n.fillRect(s-14,0,14,r),n.fillRect(s/2-6,0,12,r),n.fillRect(0,r/2-6,s,12)},Jl=Math.PI*2,Yx=.12;function jx(i){const t=i.waypoints.map(a=>({x:a[0],z:a[1],y:a[2]||0,r:a[3]&&a[3].r||i.cornerRadius,w:a[3]&&a[3].w||i.halfWidth})),e=t.length,n=[];for(let a=0;a<e;a++){const o=t[(a+e-1)%e],l=t[a],c=t[(a+1)%e];let f=l.x-o.x,h=l.z-o.z,u=c.x-l.x,d=c.z-l.z;const g=Math.hypot(f,h),v=Math.hypot(u,d);f/=g,h/=g,u/=v,d/=v;const p=f*d-h*u,m=f*u+h*d,x=Math.atan2(Math.abs(p),m),_=p>=0?1:-1,y=l.r*Math.tan(x/2);n.push({P:l,d1x:f,d1z:h,d2x:u,d2z:d,theta:x,sign:_,T:y,sx:l.x-f*y,sz:l.z-h*y,ex:l.x+u*y,ez:l.z+d*y})}const s=[];let r=0;for(let a=0;a<e;a++){const o=n[a],l=o.P,c=l.r,f=o.sx-o.d1z*o.sign*c,h=o.sz+o.d1x*o.sign*c,u=Math.atan2(o.sz-h,o.sx-f),d=Math.max(2,Math.ceil(o.theta/(Math.PI/14)));for(let _=0;_<=d;_++){const y=u+o.sign*o.theta*_/d;s.push({x:f+Math.cos(y)*c,z:h+Math.sin(y)*c,y:l.y,w:l.w})}const g=n[(a+1)%e],v=Math.hypot(g.sx-o.ex,g.sz-o.ez),p=(g.sx-o.ex)*o.d2x+(g.sz-o.ez)*o.d2z;if(p<2)throw new Error(`track ${i.id}: fillets overlap on edge ${a} (free straight ${p.toFixed(1)})`);let m=[];if(v>9){const _=3.5/v;m.push(_);const y=Math.ceil(v/26);for(let T=1;T<y;T++)m.push(T/y);m.push(1-_)}else m.push(.5);let x=-1;a===0&&(x=i.startFrac??.5,m=m.filter(_=>Math.abs(_-x)*v>5),m.push(x)),m.sort((_,y)=>_-y);for(const _ of m)_===x&&(r=s.length),s.push({x:o.ex+(g.sx-o.ex)*_,z:o.ez+(g.sz-o.ez)*_,y:l.y+(g.P.y-l.y)*_,w:l.w+(g.P.w-l.w)*_})}return s.slice(r).concat(s.slice(0,r))}function vf(i,t,e){const n=i.length;let s=i,r=new Float64Array(n);for(let a=0;a<e;a++){for(let l=0;l<n;l++){let c=0;for(let f=-t;f<=t;f++)c+=s[(l+f+n)%n];r[l]=c/(2*t+1)}const o=s;s=r,r=o}s!==i&&i.set(s)}function od(i){if(i._line)return i._line;const t=jx(i),e=t.length,n=new Rc(t.map(V=>new z(V.x,V.y,V.z)),!0,"centripetal"),s=8e3,r=new Float64Array(s+1),a=new Float64Array(s+1),o=new Float64Array(s+1),l=new Float64Array(s+1),c=new Float64Array(s+1),f=new z;for(let V=0;V<=s;V++){const Q=V/s;n.getPoint(Q,f),r[V]=f.x,a[V]=f.y,o[V]=f.z;const et=Q*e,vt=Math.floor(et)%e;let R=et-Math.floor(et);R=R*R*(3-2*R),l[V]=t[vt].w+(t[(vt+1)%e].w-t[vt].w)*R,V>0&&(c[V]=c[V-1]+Math.hypot(r[V]-r[V-1],o[V]-o[V-1]))}const h=c[s],u=Math.max(600,Math.min(1200,Math.round(h/.7))),d=h/u,g=new Float64Array(u),v=new Float64Array(u),p=new Float64Array(u),m=new Float64Array(u);let x=0;for(let V=0;V<u;V++){const Q=V*d;for(;x<s-1&&c[x+1]<Q;)x++;const et=c[x+1]-c[x],vt=et>1e-9?(Q-c[x])/et:0;g[V]=r[x]+(r[x+1]-r[x])*vt,v[V]=a[x]+(a[x+1]-a[x])*vt,p[V]=o[x]+(o[x+1]-o[x])*vt,m[V]=l[x]+(l[x+1]-l[x])*vt}const _=Math.max(2,Math.round(7/d));vf(v,_,3),vf(m,_,2);for(const V of i.humps||[]){const Q=V.at*h,et=V.len/2;for(let vt=0;vt<u;vt++){let R=Math.abs(vt*d-Q);R>h/2&&(R=h-R),R<et&&(v[vt]+=V.h*.5*(1+Math.cos(Math.PI*R/et)))}}let y=1/0;for(let V=0;V<u;V++)y=Math.min(y,v[V]);for(let V=0;V<u;V++)v[V]+=Yx-Math.min(0,y);const T=new Float64Array(u),S=new Float64Array(u),w=new Float64Array(u),A=new Float64Array(u),M=new Float64Array(u),b=new Float64Array(u),C=new Float64Array(u);for(let V=0;V<u;V++){const Q=(V+u-1)%u,et=(V+1)%u,vt=g[et]-g[Q],R=v[et]-v[Q],I=p[et]-p[Q],k=Math.hypot(vt,R,I),q=Math.hypot(vt,I);T[V]=vt/k,S[V]=R/k,w[V]=I/k,A[V]=-I/q,M[V]=vt/q,b[V]=Math.atan2(vt,I)}let N=0,U=0,O=0;for(let V=0;V<u;V++){let Q=b[(V+2)%u]-b[(V+u-2)%u];for(;Q>Math.PI;)Q-=Jl;for(;Q<-Math.PI;)Q+=Jl;C[V]=Q/(4*d),N=Math.max(N,m[V]),U+=g[V],O+=p[V]}const H=U/u,G=O/u;let j=0;for(let V=0;V<u;V++)j=Math.max(j,Math.hypot(g[V]-H,p[V]-G));const W={N:u,L:h,seg:d,px:g,py:v,pz:p,hw:m,tx:T,ty:S,tz:w,rx:A,rz:M,head:b,curv:C,maxHW:N,cx:H,cz:G,radius:j};return i._line=W,W}function Zx(i){const{N:t,px:e,py:n,pz:s,hw:r,tx:a,ty:o,tz:l,rx:c,rz:f}=i;return function(u,d){u=u-Math.floor(u);const g=u*t;let v=Math.floor(g);v>=t&&(v=t-1);const p=g-v,m=(v+1)%t,x=1-p,_=d||{pos:new z,tangent:new z,right:new z,halfWidth:0};return _.pos.set(e[v]*x+e[m]*p,n[v]*x+n[m]*p,s[v]*x+s[m]*p),_.tangent.set(a[v]*x+a[m]*p,o[v]*x+o[m]*p,l[v]*x+l[m]*p).normalize(),_.right.set(c[v]*x+c[m]*p,0,f[v]*x+f[m]*p).normalize(),_.halfWidth=r[v]*x+r[m]*p,_}}function $x(i){const{N:t,px:e,py:n,pz:s,hw:r,rx:a,rz:o}=i,l=Math.max(24,Math.round(t*.04)),c=(i.maxHW*2+15)**2;return function(h,u,d){const g=h.x,v=h.z;let p=-1,m=1/0;if(u!=null&&u===u){const k=Math.floor((u-Math.floor(u))*t);for(let q=-l;q<=l;q++){let X=k+q;X<0?X+=t:X>=t&&(X-=t);const lt=g-e[X],Mt=v-s[X],xt=lt*lt+Mt*Mt;xt<m&&(m=xt,p=X)}m>c&&(p=-1)}if(p<0){m=1/0;for(let k=0;k<t;k++){const q=g-e[k],X=v-s[k],lt=q*q+X*X;lt<m&&(m=lt,p=k)}}const x=p===0?t-1:p-1,_=p===t-1?0:p+1;let y=e[x],T=s[x],S=e[p]-y,w=s[p]-T,A=((g-y)*S+(v-T)*w)/(S*S+w*w);A=A<0?0:A>1?1:A;let M=y+S*A-g,b=T+w*A-v;const C=M*M+b*b;y=e[p],T=s[p],S=e[_]-y,w=s[_]-T;let N=((g-y)*S+(v-T)*w)/(S*S+w*w);N=N<0?0:N>1?1:N,M=y+S*N-g,b=T+w*N-v;const U=M*M+b*b;let O,H,G;C<U?(O=x,H=p,G=A):(O=p,H=_,G=N);const j=1-G,W=e[O]*j+e[H]*G,V=s[O]*j+s[H]*G;let Q=a[O]*j+a[H]*G,et=o[O]*j+o[H]*G;const vt=Math.hypot(Q,et)||1;Q/=vt,et/=vt;let R=(O+G)/t;R>=1&&(R-=1);const I=d||{};return I.t=R,I.lateral=(g-W)*Q+(v-V)*et,I.y=n[O]*j+n[H]*G,I.halfWidth=r[O]*j+r[H]*G,I}}function Ql(i,t,e,n,s,r,a,o){const{N:l,px:c,py:f,pz:h,rx:u,rz:d}=i,g=new Float32Array((e+1)*6),v=new Float32Array((e+1)*4),p=[];for(let x=0;x<=e;x++){const _=((t+x)%l+l)%l,y=n(_),T=s(_);g.set([c[_]+u[_]*y,f[_]+r,h[_]+d[_]*y,c[_]+u[_]*T,f[_]+r,h[_]+d[_]*T],x*6);const S=x/e*o;if(v.set([0,S,a,S],x*4),x<e){const w=x*2;p.push(w,w+1,w+2,w+1,w+3,w+2)}}const m=new ge;return m.setAttribute("position",new ee(g,3)),m.setAttribute("uv",new ee(v,2)),m.setIndex(p),m.computeVertexNormals(),m}class Kx{constructor(t){this.def=t,this.line=od(t),this.group=new pn,this.group.name="track:"+t.id,this.batch=new ji,this.rng=Ex(t.seed||1234),this.footprints=[],this.solids=[],this.anims=[],this.edge={kerb:.9,wall:.6,...t.edge||{}},this.edgeTotal=this.edge.kerb+this.edge.wall,this.sample=Zx(this.line),this.project=$x(this.line),this.mats={matte:new Fn({vertexColors:!0}),gloss:new Pe({vertexColors:!0,roughness:.28,metalness:.15}),far:new Fn({vertexColors:!0}),glow:new be({vertexColors:!0}),glowNoFog:new be({vertexColors:!0,fog:!1})},this.flags={matte:{cast:!0,receive:!0},gloss:{cast:!0,receive:!0},far:{cast:!1,receive:!1},glow:{cast:!1,receive:!1},glowNoFog:{cast:!1,receive:!1}},this.background=new Ot(8961006),this.fog=null,this.sun=null,this.sunDir=new z(.4,1,.3).normalize(),this._shadowRange=-1}tex(t,e,n,s){return Cx(t,e,n,s)}bucket(t,e,n=!0,s=!0){this.mats[t]=e,this.flags[t]={cast:n,receive:s}}add(t){return this.group.add(t),t}onUpdate(t){this.anims.push(t)}clearance(t,e){const{N:n,px:s,pz:r,hw:a}=this.line;let o=1/0,l=0;for(let c=0;c<n;c++){const f=t-s[c],h=e-r[c],u=f*f+h*h;u<o&&(o=u,l=c)}return Math.sqrt(o)-a[l]-this.edgeTotal}reserve(t,e,n,s=0,r=s>=2.5){const a={name:t,x:e,z:n,r:s};return this.footprints.push(a),r&&this.solids.push(a),!0}reserveBox(t,e,n,s,r,a=0,o=!0){const l=Math.cos(a),c=Math.sin(a),f=Math.max(1,Math.ceil(s/3)),h=Math.max(1,Math.ceil(r/3));for(let u=0;u<=f;u++)for(let d=0;d<=h;d++){const g=(u/f-.5)*s,v=(d/h-.5)*r,p={name:t,x:e+g*l+v*c,z:n-g*c+v*l,r:.2};this.footprints.push(p)}if(o){const u=Math.max(s,r),d=Math.min(s,r),g=d*.72,v=Math.max(1,Math.ceil(u/d));for(let p=0;p<v;p++){const m=v===1?0:(p/(v-1)-.5)*(u-d),x=s>=r?m:0,_=s>=r?0:m;this.solids.push({name:t,x:e+x*l+_*c,z:n-x*c+_*l,r:g})}}}free(t,e,n,s=!0,r=.4){if(this.clearance(t,e)<n+r)return!1;if(s)for(const a of this.solids){const o=n+a.r,l=t-a.x,c=e-a.z;if(l*l+c*c<o*o)return!1}return!0}spot(t,e,n,s,r=!0,a=!0){let o=e,l=n;if(!this.free(e,n,s,a,1))t:for(let c=2;c<=120;c+=2)for(let f=0;f<20;f++){const h=f/20*Jl+c,u=e+Math.cos(h)*c,d=n+Math.sin(h)*c;if(this.free(u,d,s,a,1)){o=u,l=d;break t}}return this.reserve(t,o,l,s,r),{x:o,z:l}}at(t,e=0){const n=this.sample(t);return{x:n.pos.x+n.right.x*e,y:n.pos.y,z:n.pos.z+n.right.z*e,heading:Math.atan2(n.tangent.x,n.tangent.z),halfWidth:n.halfWidth,rx:n.right.x,rz:n.right.z,tx:n.tangent.x,tz:n.tangent.z}}beside(t,e,n,s=0){const r=this.sample(t),a=e*(r.halfWidth+this.edgeTotal+n+s);return{x:r.pos.x+r.right.x*a,y:0,z:r.pos.z+r.right.z*a,heading:Math.atan2(r.tangent.x,r.tangent.z),roadY:r.pos.y}}scatter(t,e,n,s,{avoidSolids:r=!0,tries:a=30,name:o="scatter",solid:l=!1}={}){const c=this.rng;let f=0;for(let h=0;h<t;h++)for(let u=0;u<a;u++){const d=typeof n=="function"?n():n,g=c.range(e[0],e[2]),v=c.range(e[1],e[3]);if(this.free(g,v,d,r)){this.reserve(o,g,v,d,l),s(g,v,d,f++);break}}return f}scatterBeside(t,e,n,s,r,{avoidSolids:a=!0,name:o="trackside",solid:l=!1,tRange:c=[0,1]}={}){const f=this.rng;let h=0;for(let u=0;u<t;u++)for(let d=0;d<12;d++){const g=typeof s=="function"?s():s,v=this.beside(f.range(c[0],c[1]),f.sign(),f.range(e,n),g);if(this.free(v.x,v.z,g,a)){this.reserve(o,v.x,v.z,g,l),r(v.x,v.z,g,h++,v.heading);break}}return h}lights({hemi:t,sun:e,ambient:n}){t&&this.add(new xx(t[0],t[1],t[2])),n&&this.add(new Mx(n[0],n[1]));const s=this.line,r=new bx(e.color,e.intensity);this.sunDir.set(e.dir[0],e.dir[1],e.dir[2]).normalize(),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.bias=-5e-4,this.add(r),this.add(r.target),this.sun=r,this.center=new z(s.cx,0,s.cz),this.followShadow(this.center,s.radius+30)}followShadow(t,e=70){const n=this.sun;if(n&&(n.target.position.set(t.x,0,t.z),n.position.set(t.x,0,t.z).addScaledVector(this.sunDir,320),n.target.updateMatrixWorld(),e!==this._shadowRange)){this._shadowRange=e;const s=n.shadow.camera;s.left=-e,s.right=e,s.top=e,s.bottom=-e,s.near=10,s.far=320+e*2.2+120,s.updateProjectionMatrix(),n.shadow.normalBias=Math.min(.3,e*2/2048*1.6)}}skyDome(t,e=600){const n=t.map(([c,f])=>[c,Si(f)]),s=new Ot,r=new ze(e,32,20),a=r.attributes.position,o=new Float32Array(a.count*3);for(let c=0;c<a.count;c++){const f=Math.max(0,Math.min(1,a.getY(c)/e));let h=0;for(;h<n.length-2&&f>n[h+1][0];)h++;const u=Math.max(0,Math.min(1,(f-n[h][0])/(n[h+1][0]-n[h][0])));s.copy(n[h][1]).lerp(n[h+1][1],u),o.set([s.r,s.g,s.b],c*3)}r.setAttribute("color",new ee(o,3));const l=new Dt(r,new be({vertexColors:!0,side:Ke,fog:!1,depthWrite:!1}));return l.renderOrder=-10,l.name="sky",l.position.set(this.line.cx,-20,this.line.cz),this.add(l)}ground(t,e,n,s,r={}){t&&t.repeat.set(s,s);const a=new Pe({map:t,color:t?16777215:e,roughness:.95,metalness:0,...r}),o=new Dt(new Ie(n,n),a);return o.rotation.x=-Math.PI/2,o.position.set(this.line.cx,0,this.line.cz),o.receiveShadow=!0,o.name="ground",this.add(o)}}function Jx(i){const{def:t,line:e}=i,n=t.road.style,s=Math.max(1,Math.round(e.L/20)),r=i.tex(512,1024,kx(n)),a=Ql(e,0,e.N,g=>-e.hw[g],g=>e.hw[g],0,1,s),o=new Pe({map:r,color:r?16777215:t.road.fallback,roughness:t.road.roughness??.9,metalness:t.road.metalness??0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});t.road.emissive&&r&&(o.emissiveMap=r,o.emissive=new Ot(16777215),o.emissiveIntensity=t.road.emissive);const l=new Dt(a,o);l.receiveShadow=!0,l.name="road",i.add(l);const c=i.tex(64,64,Dx(),{aniso:4}),f=e.hw[0],h=Ql(e,-2,4,g=>-e.hw[g],g=>e.hw[g],.035,Math.round(f*2/(e.seg*4)),1),u=new Fn({map:c,color:c?16777215:14540253,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),d=new Dt(h,u);d.receiveShadow=!0,d.name="startline",i.add(d)}function Qx(i){const{def:t,line:e,edge:n}=i,{N:s,L:r,px:a,py:o,pz:l,rx:c,rz:f,hw:h}=e,u=t.wall,d=new gf,g=new gf,v=u.palette.map(Si),p=(u.top||u.palette).map(Si),m=Si(u.skirt??u.palette[0]),x=t.kerb.map(Si);let _=Math.max(2,Math.round(r/(u.block||3.2)));_%v.length&&(_+=v.length-_%v.length);let y=Math.max(2,Math.round(r/2.4));y%2&&y++;const T=(A,M,b)=>[a[A]+c[A]*M,b,l[A]+f[A]*M],S=A=>Math.floor(A*_/s),w=A=>u.height*(u.crenellate&&A%2?.62:1);for(const A of[-1,1])for(let M=0;M<s;M++){const b=(M+1)%s,C=S(M),N=w(C),U=v[(C+(A>0?1:0))%v.length],O=p[(C+(A>0?1:0))%p.length],H=A*h[M],G=A*h[b],j=A*(h[M]+n.kerb),W=A*(h[b]+n.kerb),V=A*(h[M]+n.kerb+n.wall),Q=A*(h[b]+n.kerb+n.wall),et=c[M]*A,vt=f[M]*A,R=x[Math.floor(M*y/s)%x.length];d.quad(T(M,H,o[M]+.012),T(b,G,o[b]+.012),T(b,W,o[b]+.09),T(M,j,o[M]+.09),0,1,0,R),d.quad(T(M,j,o[M]-.05),T(b,W,o[b]-.05),T(b,W,o[b]+N),T(M,j,o[M]+N),-et,0,-vt,U),(u.glowTop?g:d).quad(T(M,j,o[M]+N),T(b,W,o[b]+N),T(b,Q,o[b]+N),T(M,V,o[M]+N),0,1,0,O);const I=o[M]>.35?o[M]-.05:-.1,k=o[b]>.35?o[b]-.05:-.1;if(d.quad(T(M,V,o[M]+N),T(b,Q,o[b]+N),T(b,Q,k),T(M,V,I),et,0,vt,U),(o[M]>.35||o[b]>.35)&&d.quad(T(M,V,I),T(b,Q,k),T(b,Q,-.3),T(M,V,-.3),et,0,vt,m),u.crenellate){const q=S((M+s-1)%s);if(q!==C){const X=Math.max(N,w(q)),lt=T(M,j,o[M]),Mt=T(M,V,o[M]),xt=T(M,V,o[M]+X),Ct=T(M,j,o[M]+X);d.quad(lt,Mt,xt,Ct,e.tx[M],0,e.tz[M],U),d.quad(lt,Mt,xt,Ct,-e.tx[M],0,-e.tz[M],U)}}}i.batch.add("matte",d.toGeometry(),null),g.empty||i.batch.add("glow",g.toGeometry(),null)}function t_(i){const{def:t,line:e,edge:n,batch:s}=i,r=t.gantry||{},a=e.head[0],o=e.py[0],l=e.hw[0],c=l+n.kerb+n.wall+.9,f=r.post??3159103,h=r.beam??14826286;for(const p of[-1,1]){const m=e.px[0]+e.rx[0]*c*p,x=e.pz[0]+e.rz[0]*c*p;s.cyl("matte",.45,.55,o+8.2,m,0,x,f,10),s.box("matte",1.6,.5,1.6,m,0,x,h,a),i.reserve("gantry-post",m,x,.8,!1)}s.box("matte",c*2+1.4,.8,.9,e.px[0],o+7.4,e.pz[0],h,a);for(let p=-2;p<=2;p++){const m=e.px[0]+e.rx[0]*p*1.6,x=e.pz[0]+e.rz[0]*p*1.6;s.sphere("glow",.38,m,o+7.15,x,p%2?16769354:5111674)}const u=i.tex(1024,256,zx(t.name.toUpperCase(),r.bannerBg??"#1c2140",r.bannerFg??"#ffe14a",r.accent??"#ff4b3a"),{clamp:!0}),d=new be({map:u,color:u?16777215:1843520}),g=new Ie(l*2+1.5,(l*2+1.5)/4.6),v=(l*2+1.5)/4.6;for(const p of[0,1]){const m=new Dt(g,d),x=p?.47:-.47;m.position.set(e.px[0]+e.tx[0]*x,o+8.2+v/2-.1,e.pz[0]+e.tz[0]*x),m.rotation.y=a+(p?0:Math.PI),m.name="banner",i.add(m)}s.box("matte",l*2+1.9,v+.3,.8,e.px[0],o+8.05,e.pz[0],f,a)}function e_(i){const{def:t,line:e,edge:n,batch:s}=i,{N:r,seg:a,px:o,py:l,pz:c,rx:f,rz:h,tx:u,tz:d,hw:g,curv:v}=e,p=t.chevronCurvature??1/30,m=t.chevron||{},x=[],_=[],y=[],T=[],S=Math.max(1,Math.round(6.5/a));let w=0;for(let C=0;C<r;C+=S){const N=v[(C+Math.round(3/a))%r];if(Math.abs(N)<p||w>=90)continue;const U=N>0?1:-1,O=U*(g[C]+n.kerb+n.wall+.55),H=o[C]+f[C]*O,G=c[C]+h[C]*O,j=l[C]+t.wall.height+.35,W=1.7,V=1.75,Q=Math.hypot(u[C],d[C]),et=u[C]/Q,vt=d[C]/Q,R=x.length/3;x.push(H-et*V,j,G-vt*V,H+et*V,j,G+vt*V,H+et*V,j+W,G+vt*V,H-et*V,j+W,G-vt*V),_.push(0,0,1,0,1,1,0,1);for(let I=0;I<4;I++)y.push(-f[C]*U,0,-h[C]*U);T.push(R,R+1,R+2,R,R+2,R+3),s.box("matte",.25,j-.1,.25,H+f[C]*U*.14,0,G+h[C]*U*.14,3817293),i.reserve("chevron",H,G,.3,!1),w++}if(!w)return;const A=new ge;A.setAttribute("position",new ee(new Float32Array(x),3)),A.setAttribute("normal",new ee(new Float32Array(y),3)),A.setAttribute("uv",new ee(new Float32Array(_),2)),A.setIndex(T);const M=i.tex(256,128,Ux(m.bg??"#ffd21f",m.fg??"#1b1b22"),{clamp:!0,aniso:4}),b=new Dt(A,new be({map:M,color:M?16777215:16765471,side:He}));b.name="chevrons",i.add(b)}function n_(i){const{def:t,line:e}=i,n=[],s=[],r=Math.max(2,Math.round(3/e.seg));for(const a of t.boostAt||[]){const o=Math.round(a.t*e.N)%e.N,l=a.lat||0;s.push(Ql(e,o-r,r*2,()=>l-2.3,()=>l+2.3,.05,1,2)),n.push({x:e.px[o]+e.rx[o]*l,z:e.pz[o]+e.rz[o]*l,radius:2.7,heading:e.head[o],y:e.py[o],t:o/e.N})}if(s.length){const a=i.tex(128,256,Nx(),{aniso:4}),o=new be({map:a,color:a?16777215:16756768,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});for(const l of s){const c=new Dt(l,o);c.name="boostpad",c.renderOrder=2,i.add(c)}i.onUpdate((l,c)=>{a&&(a.offset.y=-(c*1.6)%1);const f=.75+.25*Math.sin(c*9);o.color.setRGB(f,f,f)})}return n}function i_(i){const{line:t,sample:e}=i,n=[];for(let s=0;s<8;s++){const r=4.5+s*3.3,a=e(1-r/t.L),o=(s%2===0?-1:1)*a.halfWidth*.38;n.push({pos:new z(a.pos.x+a.right.x*o,a.pos.y,a.pos.z+a.right.z*o),heading:Math.atan2(a.tangent.x,a.tangent.z)})}return n}function s_(i){const t=[];for(const e of i.def.pickupAt||[]){const n=i.sample(e);for(const s of[-1,0,1]){const r=s*n.halfWidth*.52;t.push(new z(n.pos.x+n.right.x*r,n.pos.y,n.pos.z+n.right.z*r))}}return t}function r_(i){const t=[];for(const e of i.def.obstaclesAt||[]){const n=i.at(e.t,e.lat);t.push({x:n.x,z:n.z,radius:e.r,y:n.y,kind:e.kind,heading:n.heading})}return t}function a_(i){const t=new Kx(i),{line:e}=t;Jx(t),Qx(t),t_(t),e_(t);const n=n_(t),s=i_(t),r=s_(t),a=r_(t);t.obstacles=a,i.decorate(t);for(const d of t.batch.build(t.mats,t.flags))t.group.add(d);t.group.updateMatrixWorld(!0);const o=[];for(let d=0;d<120;d++){const g=Math.floor(d/120*e.N);o.push([e.px[g],e.pz[g]])}let l=0,c=0,f=0;t.group.traverse(d=>{if(d.isMesh){l++;const g=d.geometry,v=g.index?g.index.count/3:g.attributes.position.count/3;f+=v*(d.isInstancedMesh?d.count:1)}d.isLight&&c++});let h=!1;return{id:i.id,name:i.name,group:t.group,background:t.background,fog:t.fog,length:e.L,sample:t.sample,project:t.project,startGrid:s,pickupSpots:r,obstacles:a.map(d=>({x:d.x,z:d.z,radius:d.radius})),boostPads:n.map(d=>({x:d.x,z:d.z,radius:d.radius,heading:d.heading})),minimap:o,update(d,g){for(const v of t.anims)v(d,g)},dispose(){h||(h=!0,t.group.parent&&t.group.parent.remove(t.group),Ix(t.group),t.background&&t.background.isTexture&&t.background.dispose(),t.anims.length=0)},sun:t.sun,sunDirection:t.sunDir.clone(),followShadow:(d,g)=>t.followShadow(d,g),center:new z(e.cx,0,e.cz),radius:e.radius,samples:e.N,ceilingHeight:t.ceilingHeight??null,wallOffset:t.edgeTotal,debug:{footprints:t.footprints,meshCount:l,lightCount:c,triangles:Math.round(f),line:e}}}const ci=Math.PI*2;function Wi(i,t=i.length){const e=i.map(Si);return(n,s,r,a)=>{const o=(Math.atan2(r,n)+Math.PI)/ci;return a.copy(e[Math.min(t-1,Math.floor(o*t))%e.length])}}function ld(i,t,e){const n=i.map(Si);return(s,r,a,o)=>{const l=Math.max(0,Math.min(.9999,(r-t)/(e-t)));return o.copy(n[Math.floor(l*n.length)])}}function Do(i,t,e,n,s,r=16765498){const a=i.batch,o=i.rng,l=(7+o()*6)*n,c=o()*ci,f=-.35-o()*.5;a.cyl("matte",.2*n,.3*n,l,t,0,e,Ze(4168250,o,.1),6);for(let d=0;d<2;d++){const g=new ze(1,6,4);g.scale(2.2*n,.15*n,.8*n),g.translate(2.2*n,0,0),a.add("matte",g,Ze(5222467,o,.1),t,l*(.3+.25*d),e,c+d*2.6,0,.5)}const h=7+o.int(0,2);for(let d=0;d<h;d++){const g=new ze(1,6,4);g.scale(.62*n,1.25*n,.2*n),g.translate(0,1.7*n,0),g.rotateZ(d/h*ci),a.add("matte",g,s,t,l,e,c,f)}const u=new ze(.95*n,8,6);u.scale(1,1,.55),a.add("matte",u,r,t,l,e,c,f)}function Ua(i,t,e,n,s=10132120,r=0){const a=new Ic(n,0);a.scale(1,.62,.85),i.batch.add("matte",a,Ze(s,i.rng,.12),t,r+n*.35,e,i.rng()*ci,i.rng()*.4)}function o_(i,t,e,n){const s=i.batch,r=i.rng;s.cyl("matte",1*n,1.4*n,3.2*n,t,0,e,15985368,8);const a=new ze(3.4*n,12,6,0,ci,0,Math.PI/2);a.scale(1,.7,1),s.add("matte",a,14235694,t,3*n,e),s.cyl("matte",3.4*n,3.4*n,.2*n,t,2.9*n,e,15786696,12);for(let o=0;o<6;o++){const l=r()*ci,c=.3+r()*.9;s.sphere("matte",.45*n,t+Math.cos(l)*Math.sin(c)*3.3*n,3*n+Math.cos(c)*2.35*n,e+Math.sin(l)*Math.sin(c)*3.3*n,16777215,1,.5,1,6,4)}}function vr(i,t,e,n,s,r,a,o=0,l=!1,c=-1){const f=c>=0?c:i.rng.int(0,15),h=Lx(t,e,n,f),u=i.atlasTex?16777215:Vx[f];l?i.batch.add("atlas",h,u,s,r+n/2,a,o,Math.PI/2):i.batch.add("atlas",h,u,s,r+e/2,a,o)}function xf(i,t,e,n,s=1){const r=i.batch,a=i.rng,o=[12071468,2908072,3115598,14260779,7028640,2064268,13589550];let l=0;for(let c=0;c<n;c++){const f=(11+a()*4)*s,h=(8+a()*2.5)*s,u=(1.6+a()*1.6)*s,d=a()*ci;r.box("matte",f,u,h,t,l,e,a.pick(o),d),r.box("matte",f*.94,u*.72,h*1.02,t,l+u*.14,e,16052194,d),l+=u}return l}function l_(i,t,e,n,s){const r=i.batch;r.cyl("gloss",4*n,3.6*n,8.5*n,t,0,e,s,16),r.cyl("matte",3.5*n,3.5*n,.3,t,8.3*n,e,4860954,16);const a=i.rng()*ci;r.torus("gloss",2.6*n,.75*n,t+Math.cos(a)*4.2*n,4.4*n,e-Math.sin(a)*4.2*n,s,0,a,0,ci,14,6)}function _f(i,t,e,n,s){const r=i.batch;r.box("matte",1.9*s,.22*s,1.9*s,t,e,n,16738835),r.add("matte",new ye(.16*s,.8*s,2.5*s,12),ld([16738835,16777215,16738835,16777215,16738835],-1.25*s,1.25*s),t,e+.22*s+1.25*s,n)}const ir=Math.PI*2,c_={id:"garden",name:"Buttercup Backyard",description:"A sunny lap of the lawn. Wide chalk-lined paving, giant daisies and one very sleepy garden gnome.",difficulty:1,defaultLaps:3,seed:1101,halfWidth:9,cornerRadius:30,startFrac:.45,waypoints:[[-110,-60,0],[110,-60,0],[130,20,1.5],[60,70,3.5],[0,30,1],[-60,75,2.5],[-130,25,.5]],humps:[{at:.6,h:1.3,len:30}],road:{style:"paving",fallback:9275779,roughness:.92},kerb:[15022639,16249834],wall:{height:1,palette:[11895626,11039808,12619605],top:[14462572,13738078,14923895],skirt:8018486,block:3.4},chevronCurvature:1/40,chevron:{bg:"#ffd21f",fg:"#1b1b22"},gantry:{beam:14826286,bannerBg:"#2e7d32",bannerFg:"#fff59d",accent:"#ffd21f"},boostAt:[{t:.12},{t:.47,lat:-3},{t:.8,lat:3}],pickupAt:[.07,.22,.37,.53,.68,.9],obstaclesAt:[{t:.3,lat:4,r:1.3,kind:"pot"},{t:.74,lat:-4,r:1.2,kind:"ball"}],decorate:h_};function h_(i){const t=i.batch,e=i.rng;i.background=new Ot(14085375),i.fog=new Hs(14085375,280,1150),i.lights({hemi:[13954303,7313989,1.15],sun:{color:16773584,intensity:2.3,dir:[.45,.8,.35]}}),i.skyDome([[0,15004671],[.1,11853055],[.45,6467314],[1,3112918]]),i.ground(i.tex(512,512,Fx()),6270524,1700,95);for(const k of i.obstacles)k.kind==="pot"?(t.cyl("matte",k.radius,k.radius*.72,1.9,k.x,k.y,k.z,13133370,14),t.cyl("matte",k.radius*1.08,k.radius*1.08,.3,k.x,k.y+1.75,k.z,14252618,14),t.cyl("matte",k.radius*.9,k.radius*.9,.1,k.x,k.y+1.98,k.z,4862756,12),t.sphere("matte",.55,k.x,k.y+2.6,k.z,5814344,1,1.3,1,8,6),t.sphere("matte",.4,k.x+.4,k.y+3.2,k.z,16740264,1,1,1,8,6)):t.add("gloss",new ze(k.radius,16,12),Wi([16730938,16777215,2850281,16765471,16777215,3519850]),k.x,k.y+k.radius,k.z,.6,.3);const n=-142,s=i.tex(256,256,Hx(),{repeat:[10,14]}),r=new Dt(new Ie(470,260),new Fn({map:s,color:s?16777215:15919576}));r.position.set(0,130,n),r.name="house",i.add(r),i.reserveBox("house",0,n-4,470,8),t.box("far",470,12,5,0,0,n+2,10769727),t.box("far",480,14,30,0,252,n+10,7031354);const a=i.tex(256,256,ad("#9fd4ff","#e8f6ff","#ffffff"),{clamp:!0}),o=new be({map:a,color:a?16777215:12575487});for(const k of[-120,20]){const q=new Dt(new Ie(84,84),o);q.position.set(k,120,n+.6),i.add(q),t.box("far",96,5,9,k,72,n+3,16777215),t.box("far",92,12,12,k,60,n+6,9067066);for(let X=0;X<7;X++)t.sphere("far",6,k-39+X*13,76,n+7,[16735882,16765498,16742970][X%3],1,.9,1,8,6);for(const X of[-1,1])t.box("far",16,88,2,k+X*52,76,n+1.5,4029020)}t.box("far",70,150,4,150,10,n+1.5,12597547),t.box("far",80,158,2,150,8,n+.6,16777215);for(const[k,q]of[[-16,30],[16,30],[-16,95],[16,95]])t.box("far",24,50,1.5,150+k,q,n+3.6,11088422);t.sphere("gloss",3.5,176,82,n+6,15253850),t.box("far",96,10,30,150,0,n+15,12170152),i.reserveBox("doorstep",150,n+15,96,30),t.cyl("far",3.5,3.5,250,-205,0,n+5,8226964,8);const l=-225,c=225,f=160,h=(k,q,X)=>{t.box("far",5.2,30,1.2,k,0,q,16514038,X),t.add("far",new vn(3.7,5.5,4,1),16514038,k,32.6,q,X+Math.PI/4)};for(let k=l;k<=c;k+=7.5)h(k,f,0);for(let k=n;k<=f;k+=7.5)h(l,k,Math.PI/2),h(c,k,Math.PI/2);for(const k of[8,22])t.box("far",c-l,2.4,1,0,k,f+1,15658726),t.box("far",1,2.4,f-n,l-1,k,(f+n)/2,15658726),t.box("far",1,2.4,f-n,c+1,k,(f+n)/2,15658726);i.reserveBox("fence",0,f,c-l,3),i.reserveBox("fence",l,(f+n)/2,3,f-n),i.reserveBox("fence",c,(f+n)/2,3,f-n);for(let k=-260;k<=260;k+=52)t.sphere("far",42,k+e.range(-8,8),22,f+45,Ze(3967546,e,.12),1.35,1+e()*.3,1,10,7);for(let k=n;k<=f+40;k+=52)t.sphere("far",42,l-45,22,k+e.range(-8,8),Ze(3967546,e,.12),1,1+e()*.3,1.35,10,7),t.sphere("far",42,c+45,22,k+e.range(-8,8),Ze(3967546,e,.12),1,1+e()*.3,1.35,10,7);for(const[k,q,X]of[[-330,120,1],[330,60,1.15],[-120,300,1.2],[160,310,1],[360,-90,.9],[-360,-60,1.05],[20,330,.9]]){t.cyl("far",12*X,17*X,170*X,k,0,q,8017462,10);for(let lt=0;lt<5;lt++)t.sphere("far",(60+e()*30)*X,k+e.range(-50,50)*X,(190+e()*70)*X,q+e.range(-50,50)*X,Ze(4166720,e,.14),1,.85,1,10,8)}const u=new ji;for(let k=0;k<11;k++){const q=k/11*ir+e()*.4,X=360+e()*140,lt=190+e()*110;for(let Mt=0;Mt<4;Mt++)u.sphere("c",30+e()*26,Math.cos(q)*X+(Mt-1.5)*34,lt+e()*12,Math.sin(q)*X+e.range(-14,14),16777215,1.3,.55,1,10,7)}const d=u.build({c:new be({vertexColors:!0,fog:!1})})[0];d.matrixAutoUpdate=!0,d.position.set(i.line.cx,0,i.line.cz),d.name="clouds",i.add(d),i.onUpdate(k=>{d.rotation.y+=k*.006});const g=i.spot("pond",15,-14,23);t.cyl("gloss",21,21,.25,g.x,0,g.z,3842264,28),t.cyl("matte",23,23.5,.18,g.x,0,g.z,6969928,28);for(let k=0;k<22;k++){const q=k/22*ir;Ua(i,g.x+Math.cos(q)*22.3,g.z+Math.sin(q)*22.3,2+e()*1.6,10855068)}for(let k=0;k<7;k++){const q=e()*ir,X=4+e()*13;t.cyl("matte",2.6,2.6,.12,g.x+Math.cos(q)*X,.28,g.z+Math.sin(q)*X,Ze(4169034,e,.1),10),k%3===0&&t.sphere("matte",1,g.x+Math.cos(q)*X,.9,g.z+Math.sin(q)*X,16748480,1,.7,1,8,5)}const v=new ji;v.sphere("d",2.6,0,1.6,0,16765471,1.25,.9,1),v.sphere("d",1.7,2.2,3.8,0,16765471),v.sphere("d",.7,3.9,3.6,0,16747038,1.3,.5,1,8,5),v.sphere("d",.24,3.2,4.4,.8,1118481,1,1,1,6,4),v.sphere("d",.24,3.2,4.4,-.8,1118481,1,1,1,6,4),v.cone("d",1.1,1.8,-2.9,1.6,0,16765471,6);const p=v.build({d:i.mats.gloss},{d:{cast:!0}})[0];p.matrixAutoUpdate=!0,p.name="duck",i.add(p),i.onUpdate((k,q)=>{p.position.set(g.x+Math.cos(q*.25)*9,.2+Math.sin(q*2.1)*.25,g.z+Math.sin(q*.25)*9),p.rotation.set(Math.sin(q*1.7)*.06,-q*.25-Math.PI/2,Math.sin(q*2.3)*.06)});const m=i.spot("beachball",-48,-12,9.5);t.add("gloss",new ze(9,24,16),Wi([16730938,16777215,2850281,16765471,16777215,3519850]),m.x,9,m.z,.4,.5);const x=i.spot("blocks",66,-22,11),_=[15022639,2850281,16765471,3519850,16747038];[[-4,0,-3,.2],[4,0,3,-.3],[.5,7,0,.5],[-6,0,6,.9]].forEach(([k,q,X,lt],Mt)=>{t.box("matte",7,7,7,x.x+k,q,x.z+X,_[Mt%_.length],lt),t.box("matte",5.4,5.4,7.2,x.x+k,q+.8,x.z+X,16774876,lt)});const y=i.spot("gnome",-82,-30,6);t.cyl("matte",3.6,4.6,9,y.x,0,y.z,2843332,12),t.cyl("matte",3.8,3.8,1,y.x,4,y.z,2763306,12),t.sphere("matte",3.5,y.x,11.5,y.z,15910560),t.add("matte",new vn(3.2,6,10),16777215,y.x,8.6,y.z+2.2,0,Math.PI),t.cone("matte",3.9,10,y.x,13,y.z,14233642,12),t.sphere("matte",.9,y.x,11.3,y.z+3.5,15246730,1,1,1,8,6);for(const k of[-1,1])t.sphere("matte",1.9,y.x+k*2.2,.9,y.z+2.6,3811872,1,.6,1.5,8,6);const T=i.spot("wateringcan",96,12,11);t.cyl("gloss",7.5,7.5,14,T.x,0,T.z,2073498,18),t.cyl("gloss",7.9,7.9,.8,T.x,13.6,T.z,1608322,18),t.add("gloss",new ye(1.1,1.6,15,8),2073498,T.x+11,10.5,T.z,0,0,-.9),t.add("gloss",new ye(3,1.2,2.4,10),15253850,T.x+17.6,15.6,T.z,0,0,-.9),t.torus("gloss",6,.9,T.x-7.5,9,T.z,1608322,0,0,0,Math.PI,14,6);const S=i.spot("birdbath",-98,12,9);t.cyl("matte",5,6,1.5,S.x,0,S.z,12170926,12),t.cyl("matte",2,2.8,15,S.x,1.5,S.z,13223614,10),t.cyl("matte",9,5,3,S.x,16.5,S.z,13223614,16),t.cyl("gloss",8,8,.2,S.x,19.4,S.z,5813478,16);for(const[k,q,X]of[[-20,-38,1],[-14,-41,.6],[88,-34,.8],[-70,22,1.1],[44,14,.7],[118,56,1]]){const lt=i.spot("mushroom",k,q,3.6*X);o_(i,lt.x,lt.z,X)}const w=i.spot("flowerbed",0,86,25,!1);t.cyl("matte",24,25,.5,w.x,0,w.z,5913896,24);const A=[16777215,16740264,16765498,11893759,16734780,16773280,8373503];for(let k=0;k<16;k++){const q=e()*ir,X=3+e()*18;Do(i,w.x+Math.cos(q)*X,w.z+Math.sin(q)*X,.9+e()*.6,e.pick(A))}i.solids.push({x:w.x,z:w.z,r:25});const M=[[170,8,n+3],[168,1.2,-126],[140,1.2,-98],[70,1.2,-88],[10,1.2,-95],[-60,1.2,-86],[-125,1.2,-94],[-165,1.2,-84],[-172,1.2,-62]],b=new Rc(M.map(k=>new z(k[0],k[1],k[2])));t.add("gloss",new Dc(b,160,1.25,8,!1),4173386);for(let k=0;k<=120;k++){const q=b.getPoint(k/120);i.reserve("hose",q.x,q.z,1.4,!1)}t.add("gloss",new ye(.9,1.7,6,10),15253850,-172,1.3,-58,0,Math.PI/2),t.box("far",6,6,6,170,6,n+3,9279910),t.cyl("gloss",12,12,.12,-172,.02,-44,7127278,18),i.reserve("puddle",-172,-44,12,!1),i.scatterBeside(58,1.2,12,2.2,(k,q)=>Do(i,k,q,.8+e()*.7,e.pick(A)),{name:"flower",solid:!0}),i.scatterBeside(26,.6,14,()=>1+e()*1.6,(k,q,X)=>Ua(i,k,q,X),{name:"rock"}),i.scatter(40,[-215,-130,215,150],2.4,(k,q)=>Do(i,k,q,1+e()*.9,e.pick(A)),{name:"flower",solid:!0});const C=new vn(.34,1,3,1);C.translate(0,.5,0),C.scale(1,1,.35);const N=7e3,U=new ka(C,new Fn({color:16777215}),N),O=new re,H=new Cn,G=new Qe,j=new z,W=new z,V=new Ot,Q=[5218100,7127114,8835162,4164140,10213478];let et=0;const vt=(k,q)=>{if(et>=N)return;const X=1.6+e()*3.2;G.set((e()-.5)*.5,e()*ir,(e()-.5)*.5),H.setFromEuler(G),O.compose(W.set(k,0,q),H,j.set(1+e(),X,1+e())),U.setMatrixAt(et,O),U.setColorAt(et,f_(V,e.pick(Q),e)),et++};i.scatterBeside(4300,.15,9,.35,vt,{avoidSolids:!1,name:"grass"}),i.scatter(2700,[-220,-135,220,155],.35,vt,{avoidSolids:!1,name:"grass",tries:6}),U.count=et,U.instanceMatrix.needsUpdate=!0,U.instanceColor&&(U.instanceColor.needsUpdate=!0),U.name="grass",U.frustumCulled=!1,i.add(U);const R=new ge;R.setAttribute("position",new ee(new Float32Array([0,0,-.9,1.9,0,-1.3,1.6,0,1.1,0,0,-.9,1.6,0,1.1,0,0,.8]),3)),R.computeVertexNormals(),[[g.x,g.z,12],[w.x,w.z,14],[x.x,x.z,6],[y.x,y.z,4],[S.x,S.z,5]].forEach(([k,q,X],lt)=>{const Mt=new be({color:[16754470,16777215,9356799,16773494,16744619][lt],side:He}),xt=new pn,Ct=new Dt(R,Mt),st=new Dt(R,Mt);st.scale.x=-1,xt.add(Ct,st),xt.name="butterfly",i.add(xt);const ct=lt*1.7;i.onUpdate((D,St)=>{const F=St*(.5+lt*.07)+ct;xt.position.set(k+Math.cos(F)*X*.8,9+lt*1.5+Math.sin(St*1.3+ct)*2,q+Math.sin(F*1.3)*X*.8),xt.rotation.y=-F;const J=Math.sin(St*16+ct)*.9;Ct.rotation.z=J,st.rotation.z=-J})})}function f_(i,t,e){i.set(t);const n=.85+e()*.3;return i.r*=n,i.g*=n,i.b*=n,i}const xi=Math.PI*2,u_={id:"kitchen",name:"Breakfast Blitz",description:"Under the kitchen table and over the book ramp. Toy-block walls, spilled cereal and towering chair legs.",difficulty:2,defaultLaps:3,seed:2202,halfWidth:7.5,cornerRadius:18,startFrac:.45,waypoints:[[-110,-70],[100,-70],[120,-10],[60,20],[70,75],[-20,80],[-40,20],[-110,40]],humps:[{at:.475,h:3.4,len:40},{at:.8,h:1.6,len:24}],road:{style:"mat",fallback:3817035,roughness:.95},kerb:[2850281,16249834],wall:{height:1.25,block:3,palette:[15022639,16763176,2850281,3519850,16747038],top:[15886431,16768107,6726642,7327894,16755548],skirt:9059131},chevronCurvature:1/26,chevron:{bg:"#ffffff",fg:"#e53a2f"},gantry:{beam:2850281,bannerBg:"#b3261e",bannerFg:"#fff8e1",accent:"#ffc928"},boostAt:[{t:.05},{t:.42},{t:.72,lat:2}],pickupAt:[.1,.24,.36,.56,.67,.92],obstaclesAt:[{t:.3,lat:-3.5,r:1.2,kind:"salt"},{t:.62,lat:3.5,r:1.2,kind:"sugar"},{t:.86,lat:-3,r:1.2,kind:"salt"}],decorate:d_};function aa(i,t,e,n){const s=new Ie(i,t),r=s.attributes.uv;for(let a=0;a<r.count;a++)r.setXY(a,r.getX(a)*e,r.getY(a)*n);return s}function d_(i){const t=i.batch,e=i.rng;i.background=new Ot(15981760),i.fog=new Hs(15981760,320,1300),i.lights({hemi:[16773596,11569766,1.05],sun:{color:16769197,intensity:2,dir:[.3,.9,.5]}});const n=i.tex(512,512,id("#f3e8d2","#d89f76","#b9a58c"));i.ground(n,15124900,900,50,{roughness:.55}),i.atlasTex=i.tex(1024,1024,rd(),{clamp:!0}),i.bucket("atlas",new Fn({map:i.atlasTex,vertexColors:!0}));for(const R of i.obstacles)R.kind==="salt"?(t.cyl("gloss",R.radius*.8,R.radius,2.4,R.x,R.y,R.z,16185074,12),t.sphere("gloss",R.radius*.82,R.x,R.y+2.4,R.z,12173512,1,.7,1,12,8)):t.box("matte",R.radius*1.5,R.radius*1.5,R.radius*1.5,R.x,R.y,R.z,16777215,.6);const s=210,r=-170,a=175,o=230,l=i.tex(256,256,Bx("#f6e3b4","#f0d49a","#e2a05a"));i.bucket("wall",new Fn({map:l,color:l?16777215:16180148,vertexColors:!0}),!1,!1);const c=(r+a)/2,f=a-r;t.add("wall",aa(s*2,o,14,6),16777215,0,o/2,r,0),t.add("wall",aa(s*2,o,14,6),16777215,0,o/2,a,Math.PI),t.add("wall",aa(f,o,12,6),16777215,-s,o/2,c,Math.PI/2),t.add("wall",aa(f,o,12,6),16777215,s,o/2,c,-Math.PI/2),t.add("far",new Ie(s*2,f),16512489,0,o,c,0,Math.PI/2),i.ceilingHeight=o;for(const[R,I,k,q]of[[0,r+1,s*2,2],[0,a-1,s*2,2],[-s+1,c,2,f],[s-1,c,2,f]])t.box("far",k,10,q,R,0,I,16775920),i.reserveBox("roomwall",R,I,k,q,0,!1);const h=i.tex(256,256,ad("#ffe7b8","#fff7e0","#ffffff"),{clamp:!0}),u=new Dt(new Ie(150,110),new be({map:h,color:h?16777215:16773836}));u.position.set(40,125,a-.6),u.rotation.y=Math.PI,u.name="window",i.add(u),t.box("far",166,6,10,40,64,a-5,16777215);for(const R of[-1,1])t.box("far",26,132,4,40+R*90,62,a-3,14239290);t.box("far",220,5,5,40,192,a-4,9067066),t.box("far",3,170,78,-s+2,0,90,11040319),t.box("far",1.5,60,50,-s+4,20,90,9725231),t.box("far",1.5,60,50,-s+4,95,90,9725231),t.sphere("gloss",4,-s+7,82,62,15253850);const d=44,g=66;for(let R=0;R<5;R++){const I=-s+32+R*62;if(t.box("matte",60,g,d,I,4,r+d/2,7316384),t.box("matte",60,4,d-6,I,0,r+d/2-3,3095101),R===2)t.box("gloss",48,40,1.5,I,14,r+d+.4,1382172),t.box("glow",40,10,.6,I,18,r+d+1.3,16747054),t.box("gloss",50,3,3,I,58,r+d+2,13620442);else for(const k of[-1,1])t.box("matte",26,54,1.5,I+k*14.5,10,r+d+.4,9224379),t.sphere("gloss",1.8,I+k*4,50,r+d+2.4,15853256)}t.box("matte",318,5,d+6,-s+157,g+4,r+d/2+3,3882822),i.reserveBox("cabinets",-s+157,r+d/2+3,318,d+8,0,!1);for(let R=0;R<4;R++){const I=-s+40+R*66;t.box("far",62,70,26,I,128,r+13,7316384),t.box("far",54,60,1.5,I,133,r+26.5,9224379)}t.cyl("gloss",9,10,20,-150,g+9,r+24,14239290,14),t.box("gloss",30,18,16,-80,g+9,r+22,13620442),t.cyl("matte",14,9,8,0,g+9,r+24,15919832,16);for(let R=0;R<5;R++)t.sphere("matte",5,-6+R*4,g+19+R%2*3,r+22+R%3*3,[16747038,15022639,16765471][R%3]);t.box("gloss",70,200,56,160,2,r+28,14673386),t.box("gloss",3,70,3,132,100,r+58,10134445),t.box("gloss",3,40,3,132,30,r+58,10134445),t.box("matte",71,1.5,57,160,84,r+28,11121339);for(let R=0;R<7;R++)t.box("matte",5,5,.8,140+e()*45,95+e()*60,r+56.4,e.pick([15022639,16763176,2850281,3519850,16736162]),0,0,e()*.6);i.reserveBox("fridge",160,r+28,70,56,0,!1);const v=i.tex(512,320,Gx(),{clamp:!0}),p=new Dt(new Ie(190,112),new Fn({map:v,color:v?16777215:3104124,polygonOffset:!0,polygonOffsetFactor:-.5,polygonOffsetUnits:-.5}));p.rotation.x=-Math.PI/2,p.position.set(2,.04,-22),p.receiveShadow=!0,p.name="rug",i.add(p);const m=52,x=12157258,_=[[-56,-48],[56,-48],[-56,2],[56,2]].map(([R,I])=>i.spot("table-leg",R,I,3.6));for(const R of _)t.box("matte",5.2,m,5.2,R.x,0,R.z,x),t.box("matte",6.2,1.2,6.2,R.x,0,R.z,7031338);t.box("matte",128,4,66,0,m,-23,13209690),t.box("matte",118,5,56,0,m-5,-23,10251068);const y=(R,I,k,q)=>{const X=Math.cos(k),lt=Math.sin(k);for(const[Mt,xt]of[[-9,-9],[9,-9],[-9,9],[9,9]]){const Ct=R+Mt*X+xt*lt,st=I-Mt*lt+xt*X,ct=i.spot("chair-leg",Ct,st,2.2);t.box("matte",3,xt>0?62:30,3,ct.x,0,ct.z,q)}t.box("matte",23,3,23,R,30,I,q,k),t.box("matte",21,2,21,R,33,I,14239290,k),t.box("matte",23,16,2.4,R+9.5*lt,46,I+9.5*X,q,k)};y(14,46,.3,11039808),y(-78,78,2.4,11039808),y(150,40,-1.3,11039808),t.cyl("far",.6,.6,o-150,0,150,-23,3355443,6),t.add("matte",new vn(26,20,20),14239290,0,140,-23),t.sphere("glow",6,0,131,-23,16773304);const T=new Uc(16763274,900,420,1.6);T.position.set(0,125,-23),i.add(T);const S=new ji;for(let R=0;R<4;R++)S.box("f",64,1.2,11,Math.cos(R*xi/4)*36,0,-Math.sin(R*xi/4)*36,9067066,R*xi/4);S.cyl("f",7,7,5,0,-1,0,15262420,12);const w=S.build({f:i.mats.far})[0];w.matrixAutoUpdate=!0,w.position.set(110,o-16,80),w.name="fan",i.add(w),t.cyl("far",1.5,1.5,16,110,o-16,80,15262420,8),i.onUpdate(R=>{w.rotation.y+=R*1.4});const A=i.spot("petbowl",155,105,14);t.cyl("gloss",12,14,6,A.x,0,A.z,2850281,18),t.cyl("matte",10.5,10.5,.4,A.x,5.8,A.z,8014378,16);for(let R=0;R<14;R++)t.sphere("matte",1.5,A.x+e.range(-8,8),6.6,A.z+e.range(-8,8),10117684,1,.8,1,6,5);const M=i.spot("slippers",-160,-95,18);for(const R of[-1,1])t.sphere("matte",7,M.x+R*8,2.5,M.z,16744368,1,.45,2.1,10,6),t.sphere("matte",7.2,M.x+R*8,4.5,M.z+6,16735386,1,.6,1.2,10,6);const b=i.spot("milk",-150,20,15,!1);t.cyl("gloss",13,13,.12,b.x,.01,b.z,16645624,20),t.cyl("gloss",7,7,.12,b.x+11,.01,b.z+7,16645624,14),i.scatterBeside(18,1,10,8,(R,I)=>{const k=e()*xi;e()<.25?vr(i,13,19,4.6,R,0,I,k,!0):vr(i,13,19,4.6,R,0,I,k)},{name:"cereal-box",solid:!0}),i.scatterBeside(13,1,12,8.5,(R,I)=>xf(i,R,I,e.int(2,5)),{name:"books",solid:!0}),i.scatterBeside(9,1.5,10,6.5,(R,I)=>l_(i,R,I,1,e.pick([16777215,15022639,2850281,16763176,3519850])),{name:"mug",solid:!0}),i.scatterBeside(8,1,9,4.2,(R,I)=>{const k=e()<.5;t.sphere("matte",4,R,4*(k?1:.92),I,k?16747038:14233642,1,k?1:.92,1,14,10),t.cyl("matte",.25,.25,1.2,R,7.4,I,4862756,5)},{name:"fruit",solid:!0}),i.scatterBeside(22,.6,9,2.6,(R,I)=>{const k=e.pick([15022639,16763176,2850281,3519850,16777215]),q=e()*xi;t.box("gloss",4,2.4,2,R,0,I,k,q);for(const X of[-1,1])t.cyl("gloss",.6,.6,.5,R+Math.cos(q)*X,2.4,I-Math.sin(q)*X,k,8)},{name:"brick",solid:!0}),i.scatterBeside(8,1,8,7.5,(R,I)=>{const k=e()*xi,q=Math.sin(k),X=Math.cos(k);t.add("matte",new ye(.55,.55,13,6),16763176,R,.55,I,k,Math.PI/2),t.add("matte",new vn(.55,1.6,6),15321504,R+q*7.3,.55,I+X*7.3,k,Math.PI/2),t.add("matte",new ye(.58,.58,1.2,6),16744368,R-q*7.1,.55,I-X*7.1,k,Math.PI/2)},{name:"pencil",solid:!0}),i.scatterBeside(26,.4,8,1.3,(R,I)=>t.sphere("gloss",1.2,R,1.2,I,e.pick([2872553,15022735,8118330,16763176,10116351]),1,1,1,10,8),{name:"marble"});const C=new Tr(.62,.26,6,12),N=520,U=new ka(C,new Fn({color:16777215}),N),O=new re,H=new Cn,G=new Qe,j=new z(1,1,1),W=new z,V=new Ot,Q=[15905354,15238202,15755914,10212442,11832063,16241514];let et=0;const vt=(R,I)=>{et>=N||(G.set(Math.PI/2+(e()-.5)*.5,e()*xi,(e()-.5)*.5),H.setFromEuler(G),O.compose(W.set(R,.3,I),H,j),U.setMatrixAt(et,O),U.setColorAt(et,V.set(e.pick(Q))),et++)};i.scatterBeside(400,.2,7,.9,vt,{name:"cereal"}),i.scatter(120,[-190,-120,190,160],.9,vt,{name:"cereal",tries:8}),U.count=et,U.instanceMatrix.needsUpdate=!0,U.castShadow=!0,U.frustumCulled=!1,U.name="cereal",i.add(U),i.scatter(16,[-195,-118,195,160],11,(R,I)=>{e()<.5?vr(i,20,30,7,R,0,I,e()*xi):xf(i,R,I,e.int(3,7),1.4)},{name:"far-prop",solid:!0})}const gs=Math.PI*2,Fe=[2617599,16728016,11992890,16753198,16773194,9071615],p_={id:"toyshop",name:"Midnight Megamart",description:"After closing time in the toy aisles. Tight right-angle turns between towering shelves, lit only by neon.",difficulty:3,defaultLaps:3,seed:3303,halfWidth:6.5,cornerRadius:12,startFrac:.45,waypoints:[[-100,-70],[100,-70],[100,-30],[10,-30],[10,10],[100,10],[100,70],[-50,70],[-50,20],[-100,20]],humps:[{at:.59,h:2.2,len:30},{at:.375,h:1.2,len:22}],road:{style:"neon",fallback:1316922,roughness:.32,metalness:.25,emissive:.85},kerb:[1777469,16769354],wall:{height:1.2,block:4,palette:[2304080,1711680],top:[2617599,16728016],skirt:1382451,glowTop:!0},chevronCurvature:1/20,chevron:{bg:"#12142c",fg:"#27f0ff"},gantry:{beam:16728016,post:2764629,bannerBg:"#0c0e24",bannerFg:"#27f0ff",accent:"#ff3fd0"},boostAt:[{t:.04},{t:.5},{t:.84}],pickupAt:[.09,.22,.33,.46,.63,.92],obstaclesAt:[{t:.25,lat:3,r:1,kind:"cone"},{t:.705,lat:-3,r:1,kind:"cone"},{t:.78,lat:2.5,r:1.1,kind:"wetfloor"}],decorate:m_};function _i(i,t,e,n,s,r,a,o,l=0){const c=i.batch,f=i.rng,h=Math.cos(r),u=Math.sin(r),d=(x,_)=>[t+x*h+_*u,e-x*u+_*h],g=2896471,v=Math.floor((a-2)/12);for(let x=0;x<=v;x++)if(c.box("matte",n,.8,s,t,x*12+(x===0?.6:0),e,x===v?3817840:g,r),x>0)for(const _ of[-1,1]){if(l&&_!==l)continue;const[y,T]=d(0,_*(s/2+.15));c.box("glow",n,.5,.3,y,x*12+.15,T,o,r)}c.box("matte",n,v*12,.6,t,.6,e,1909058,r);const p=Math.max(2,Math.round(n/22));for(let x=0;x<=p;x++)for(const _ of[-1,1]){const[y,T]=d(-n/2+x/p*n,_*(s/2-.4));c.box("matte",.9,v*12+1.4,.9,y,0,T,4476032,r)}const m=s/2-1.3;for(let x=0;x<v;x++)for(const _ of[-1,1]){if(l&&_!==l)continue;let y=-n/2+1.5;for(;y<n/2-6;){const T=4.5+f()*4.5,S=5+f()*5.5;if(f()<.9){const[w,A]=d(y+T/2,_*(m/2+.7));f()<.12?c.sphere("gloss",Math.min(T,9)/2,w,x*12+(x===0?1.4:.8)+Math.min(T,9)/2,A,f.pick(Fe),1,1,1,10,8):vr(i,T,S,m,w,x*12+(x===0?1.4:.8),A,r+(_>0?0:Math.PI))}y+=T+.5+f()*1.2}}i.reserveBox("shelf",t,e,n+1,s+1,r)}function m_(i){const t=i.batch,e=i.rng;i.background=new Ot(460824),i.fog=new Hs(658468,140,560),i.lights({hemi:[8359167,2364984,.85],ambient:[4868736,.55],sun:{color:11847935,intensity:1.15,dir:[-.3,1,.45]}});const n=i.tex(512,512,id("#161c3c","#1b2248","#2a3470",["rgba(140,170,255,0.8)","rgba(255,120,230,0.6)","rgba(0,0,0,0.5)"]));i.ground(n,1580608,760,38,{roughness:.22,metalness:.35}),i.atlasTex=i.tex(1024,1024,rd(),{clamp:!0});const s=new Fn({map:i.atlasTex,vertexColors:!0});i.atlasTex&&(s.emissiveMap=i.atlasTex,s.emissive=new Ot(16777215),s.emissiveIntensity=.42),i.bucket("atlas",s,!0,!0);for(const p of i.obstacles)if(p.kind==="cone")_f(i,p.x,p.y,p.z,p.radius*1.05);else{for(const m of[-1,1])t.box("matte",1.7,2.6,.12,p.x+Math.cos(p.heading)*0+m*.45*Math.sin(p.heading),p.y,p.z+m*.45*Math.cos(p.heading),16765471,p.heading,-m*.33);t.box("glow",.9,.9,.05,p.x,p.y+2.75,p.z,16769354,p.heading)}_i(i,0,-50,160,14,0,62,Fe[0]),_i(i,58,-10,60,14,0,62,Fe[1]),_i(i,-47.5,-18,75,14,0,62,Fe[2]),_i(i,27.5,40,115,18,0,62,Fe[3]);const r=162,a=120,o=100;_i(i,0,-a+9,300,14,0,74,Fe[5],1),_i(i,0,a-9,300,14,0,62,Fe[4],-1),_i(i,-r+9,0,200,14,Math.PI/2,74,Fe[1],1),_i(i,r-9,0,200,14,Math.PI/2,74,Fe[0],-1),t.add("far",new Ie(r*2,a*2),724256,0,o,0,0,Math.PI/2);for(const[p,m,x,_,y]of[[0,-a,r*2,2,0],[0,a,r*2,2,Math.PI],[-r,0,2,a*2,Math.PI/2],[r,0,2,a*2,-Math.PI/2]])t.add("far",new Ie(Math.max(x,_),o),1184814,p,o/2,m,y),i.reserveBox("shopwall",p,m,x,_,0,!1);i.ceilingHeight=o;for(let p=-3;p<=3;p++)t.box("glow",30,20,.6,p*42,70,a-1.4,10270975);for(let p=-2;p<=2;p++)for(let m=-1;m<=1;m++)t.box("glow",46,.5,2.2,p*62,o-.6,m*70,7309032),t.box("far",50,1.6,5,p*62,o-1.4,m*70,1843270);const l=[],c=(p,m,x,_,y,T,S=40,w=13)=>{const A=i.tex(512,160,Wx(p,m),{clamp:!0}),M=new be({map:A,color:A?16777215:m,transparent:!!A}),b=new Dt(new Ie(S,w),M);b.position.set(x,_,y),b.rotation.y=T,b.name="neon-sign",i.add(b),t.box("far",S*.96,w*.9,.8,x-Math.sin(T)*.7,_-w*.45,y-Math.cos(T)*.7,790050,T),l.push(M)};c("TOYS","#27f0ff",-40,70,-57.2,Math.PI),c("GAMES","#ff3fd0",45,70,-42.8,0),c("ROBOTS","#b6ff3a",58,70,-17.2,Math.PI),c("PUZZLES","#ffa22e",27,70,49.2,0),c("SALE","#fff04a",-47,70,-10.8,0,30,13),c("OPEN 24H","#ff3fd0",0,84,-a+17,0,90,24),i.onUpdate((p,m)=>{const x=Math.sin(m*31)>.82||Math.sin(m*2.3)>.97?.35:1;l[1].color.setScalar(x),l[4].color.setScalar(.75+.25*Math.sin(m*3))});const f=[[-60,-60,16728016],[70,-22,2617599],[60,58,16753198],[-78,30,11992890]];for(const[p,m,x]of f){const _=new Uc(x,520,150,1.5);_.position.set(p,26,m),i.add(_)}const h=i.spot("teddy",-112,72,16);{const{x:p,z:m}=h,x=10119740,_=14267530;t.sphere("matte",12,p,12,m,x,1,1.1,.95,16,12),t.sphere("matte",8.5,p,30,m,x,1,.95,.95,16,12);for(const y of[-1,1])t.sphere("matte",3.2,p+y*6.5,37,m,x),t.sphere("matte",1.8,p+y*6.5,37,m-1.6,_,1,1,.5),t.sphere("matte",4.4,p+y*12,17,m-3,x,1,1.5,1),t.sphere("matte",5,p+y*7.5,3.6,m-9,x,1,.75,1.5),t.sphere("matte",1,p+y*3.2,32,m-7.4,1118481,1,1,1,8,6);t.sphere("matte",4,p,28,m-6.5,_,1,.8,.9),t.sphere("matte",1.3,p,29,m-10,2759186,1,.8,1,8,6),t.sphere("matte",6.5,p,12,m-8.5,_,1,1.1,.5)}const u=i.spot("robot",132,44,13);{const{x:p,z:m}=u;for(const x of[-1,1])t.box("gloss",5,13,6,p+x*4.5,0,m,8950438),t.box("gloss",4,15,4,p+x*10.5,14,m,8950438),t.sphere("glow",1.6,p+x*3,38,m-4.6,16773194,1,1,.4,8,6);t.box("gloss",16,18,10,p,13,m,2865353),t.box("gloss",11,9,9,p,33,m,13160670),t.box("glow",8,1.2,.5,p,34.5,m-4.6,16728016),t.cyl("gloss",.4,.4,6,p,42,m,8950438,6),t.sphere("glow",1.3,p,48.6,m,16727898,1,1,1,8,6);for(let x=0;x<3;x++)t.box("glow",2.4,2.4,.5,p-4+x*4,22,m-5.1,Fe[x])}const d=i.spot("rocket",132,-42,11);{const{x:p,z:m}=d;t.cyl("gloss",6,6,34,p,8,m,15921909,16),t.cone("gloss",6,14,p,42,m,15022639,16),t.cyl("gloss",4,6,4,p,4,m,4475484,16);for(let x=0;x<3;x++){const _=x/3*gs;t.box("gloss",1,14,8,p+Math.sin(_)*8.5,0,m+Math.cos(_)*8.5,15022639,_)}t.sphere("glow",2.6,p,30,m-5.4,2617599,1,1,.3,12,8),t.torus("gloss",2.9,.5,p,30,m-5.9,8950438,0,0,0,gs,14,6)}const g=i.spot("ringstack",-130,-38,11);t.cyl("matte",1.6,2.4,26,g.x,0,g.z,16769354,10),[15022639,16753198,16773194,3519850,2850281].forEach((p,m)=>t.torus("gloss",9-m*1.4,2.3-m*.12,g.x,2.4+m*4.4,g.z,p,Math.PI/2,0,0,gs,20,8));const v=i.spot("ballbin",-62,2,10);for(const[p,m]of[[-8,-8],[8,-8],[-8,8],[8,8]])t.box("matte",.8,14,.8,v.x+p,0,v.z+m,8950438);for(const p of[.4,7,13.6])t.box("matte",17,.6,.6,v.x,p,v.z-8,8950438),t.box("matte",17,.6,.6,v.x,p,v.z+8,8950438),t.box("matte",.6,.6,17,v.x-8,p,v.z,8950438),t.box("matte",.6,.6,17,v.x+8,p,v.z,8950438);for(let p=0;p<34;p++)t.add("gloss",new ze(2.6,10,8),Wi([e.pick(Fe),16777215]),v.x+e.range(-5,5),2.8+e()*11,v.z+e.range(-5,5),e()*3,e()*3);[[-20,4],[120,95],[-128,98],[60,96]].forEach(([p,m],x)=>{const _=i.spot("balloons",p,m,5);t.box("matte",3,2,3,_.x,0,_.z,3817840);const y=new ji;for(let S=0;S<5;S++){const w=e.range(-5,5),A=e.range(-5,5),M=26+e()*10;y.sphere("b",4,w,M,A,Fe[(x+S)%Fe.length],1,1.22,1,12,9);const b=Math.hypot(w,M-2,A),C=new ye(.07,.07,b,4);C.translate(0,b/2,0),C.applyQuaternion(new Cn().setFromUnitVectors(new z(0,1,0),new z(w,M-2,A).normalize())),y.add("b",C,14540253,0,2,0)}const T=y.build({b:i.mats.gloss})[0];T.matrixAutoUpdate=!0,T.position.set(_.x,0,_.z),T.name="balloons",i.add(T),i.onUpdate((S,w)=>{T.position.y=Math.sin(w*1.1+x*2)*.8,T.rotation.y=Math.sin(w*.5+x)*.25})}),i.scatter(46,[-150,-108,150,108],()=>4+e()*3,(p,m,x)=>{const _=e();if(_<.5)vr(i,x*1.3,x*1.5,x*1.1,p,0,m,e()*gs);else if(_<.8){const y=x*.9,T=e.pick(Fe);t.box("gloss",y,y,y,p,0,m,T,e()*gs),e()<.5&&t.box("gloss",y*.8,y*.8,y*.8,p,y,m,e.pick(Fe),e()*gs)}else t.add("gloss",new ze(x*.8,14,10),Wi([e.pick(Fe),16777215,e.pick(Fe),16777215]),p,x*.8,m,e()*3,e()*3)},{name:"floor-toy",solid:!0}),i.scatterBeside(10,.8,4,1.4,(p,m)=>_f(i,p,0,m,1.3),{name:"cone",solid:!0})}const Sn=Math.PI*2,Mi=15124620,cd=13609322,g_={id:"beach",name:"Sandcastle Sunset",description:"A rattling boardwalk through the sandcastles at golden hour. Blind crests, a chicane and no room for error.",difficulty:4,defaultLaps:3,seed:4404,halfWidth:6.5,cornerRadius:14,startFrac:.45,waypoints:[[-110,-60,0],[40,-60,0],[70,-30,1],[110,-30,2.5],[125,30,6],[60,60,4],[30,20,1.5],[-20,20,4.5],[-40,70,1.5],[-110,70,3],[-130,0,.5]],humps:[{at:.27,h:1.8,len:24},{at:.67,h:2.2,len:26},{at:.865,h:1.6,len:22}],road:{style:"planks",fallback:12159573,roughness:.82},kerb:[2789309,16512746],wall:{height:1.3,block:2.6,crenellate:!0,palette:[15255946,14465143,15783324],top:[16179888,15520410,16509632],skirt:cd},chevronCurvature:1/22,chevron:{bg:"#fbf6ea",fg:"#e5532f"},gantry:{beam:2789309,post:9071176,bannerBg:"#e5532f",bannerFg:"#fff6d8",accent:"#ffd21f"},boostAt:[{t:.03},{t:.38},{t:.75}],pickupAt:[.08,.2,.34,.51,.6,.93],obstaclesAt:[{t:.145,lat:-2.5,r:1,kind:"shell"},{t:.565,lat:2.5,r:1,kind:"pebble"},{t:.8,lat:-2.5,r:1,kind:"shell"}],decorate:v_};function Uo(i,t,e,n,s,r){const a=new vn(s,s*2.4,9,3),o=a.attributes.position;for(let l=0;l<o.count;l++){const c=o.getY(l),f=Math.atan2(o.getZ(l),o.getX(l)),h=1+.12*Math.sin(c*6/s+f);o.setX(l,o.getX(l)*h),o.setZ(l,o.getZ(l)*h)}a.computeVertexNormals(),i.batch.add("matte",a,r,t,e+s*.8,n,i.rng()*Sn,Math.PI/2-.25)}function No(i,t,e,n){const s=i.batch,r=i.rng,a=(l,c,f,h,u,d,g=Mi)=>s.cyl("matte",l*n,c*n,f*n,h,u*n,d,Ze(g,r,.05),14);s.cyl("matte",30*n,35*n,4*n,t,0,e,cd,22);const o=18;for(let l=0;l<4;l++){const c=l/4*Sn,f=Math.cos(c),h=Math.sin(c);s.box("matte",o*2*n,10*n,4*n,t+h*o*n,4*n,e+f*o*n,Ze(Mi,r,.05),c);for(let g=-3;g<=3;g++)s.box("matte",2.6*n,2.4*n,4*n,t+h*o*n+f*g*5*n,14*n,e+f*o*n-h*g*5*n,Mi,c);const u=t+(f+h)*o*n,d=e+(f-h)*o*n;a(5.4,6.4,18,u,4,d),a(6.3,6.3,1.2,u,22,d,15783324);for(let g=0;g<8;g++){const v=g/8*Sn;s.box("matte",2*n,2.2*n,2*n,u+Math.cos(v)*5.2*n,23.2*n,d+Math.sin(v)*5.2*n,Mi,-v)}s.box("matte",1.6*n,3.4*n,.6*n,u+h*5.7*n+f*0,14*n,d+f*5.7*n,7032627,c)}s.box("matte",7*n,8*n,4.6*n,t,4*n,e+o*n,5914664),s.cyl("matte",3.5*n,3.5*n,4.6*n,t,12*n-2.3*n,e+o*n,5914664,12,0,Math.PI/2),a(9.5,11.5,22,t,4,e),a(10.6,10.6,1.4,t,26,e,15783324),a(6,7,10,t,27.4,e);for(let l=0;l<10;l++){const c=l/10*Sn;s.box("matte",2.4*n,2.6*n,2.4*n,t+Math.cos(c)*9.4*n,27.4*n,e+Math.sin(c)*9.4*n,Mi,-c)}return s.cone("matte",7*n,9*n,t,37.4*n,e,15783324,14),s.cyl("matte",.3*n,.3*n,12*n,t,46*n,e,7032627,6),{x:t,y:56*n,z:e,s:n}}function v_(i){const t=i.batch,e=i.rng,n=i.line;i.background=new Ot(16758918),i.fog=new Hs(16759178,240,1050);const s=[.22,.4,.89];i.lights({hemi:[16764840,14264440,1],sun:{color:16756848,intensity:2.5,dir:s}}),i.skyDome([[0,16766614],[.07,16754021],[.25,14708614],[.55,7622814],[1,2894954]]),i.ground(i.tex(512,512,Ox()),15520410,1700,60);const r=i.sunDir,a=new z(n.cx,0,n.cz).addScaledVector(r,560),o=new Dt(new br(52,40),new be({color:16773816,fog:!1,depthWrite:!1}));o.position.copy(a),o.lookAt(n.cx,0,n.cz),o.renderOrder=-8,o.name="sun-disc",i.add(o);const l=i.tex(128,128,Xx(),{clamp:!0}),c=new Dt(new br(190,32),new be({map:l,color:16761466,transparent:!0,opacity:l?.9:.15,fog:!1,depthWrite:!1,blending:Tn}));c.position.copy(a).addScaledVector(r,-4),c.lookAt(n.cx,0,n.cz),c.renderOrder=-9,c.name="sun-halo",i.add(c);for(const R of i.obstacles)R.kind==="shell"?Uo(i,R.x,R.y,R.z,R.radius*.95,16763312):Ua(i,R.x,R.z,R.radius*1.25,9407108,R.y);const f=168,h=i.tex(256,256,qx(),{repeat:[26,12]}),u=new Pe({map:h,color:h?16777215:3836066,roughness:.18,metalness:.45,emissive:8010274,emissiveIntensity:.35}),d=new Dt(new Ie(1800,700),u);d.rotation.x=-Math.PI/2,d.position.set(n.cx,.35,f+350),d.name="sea",i.add(d);for(let R=-320;R<=320;R+=16)i.reserve("sea",n.cx+R,f+12,12,!1);const g=new Dt(new Ie(1800,46),new Pe({color:12096092,roughness:.35,metalness:.1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));g.rotation.x=-Math.PI/2,g.position.set(n.cx,.04,f-20),g.receiveShadow=!0,g.name="wet-sand",i.add(g);const v=new Dt(new Ie(1800,7),new be({color:16774890,transparent:!0,opacity:.85}));v.rotation.x=-Math.PI/2,v.position.set(n.cx,.42,f),v.name="foam",i.add(v),i.onUpdate((R,I)=>{h&&h.offset.set(Math.sin(I*.2)*.05,I*.05);const k=Math.sin(I*.7);v.position.z=f-4+k*5,d.position.z=f+346+k*5,v.material.opacity=.55+.3*(.5+.5*Math.cos(I*.7))});const p=[],m=i.spot("castle",-72,2,31);p.push(No(i,m.x,m.z,.86));const x=i.spot("castle",38,-14,17);p.push(No(i,x.x,x.z,.46));const _=i.spot("castle",178,-46,24);p.push(No(i,_.x,_.z,.66));const y=new ge;y.setAttribute("position",new ee(new Float32Array([0,0,0,9,-2.2,0,0,-4.4,0]),3)),y.computeVertexNormals(),p.forEach((R,I)=>{const k=new Dt(y,new be({color:[15029039,2789309,16765471][I],side:He}));k.position.set(R.x,R.y+1.6*R.s,R.z),k.scale.setScalar(R.s),k.name="flag",i.add(k),i.onUpdate((q,X)=>{k.rotation.y=.6+Math.sin(X*3+I)*.35+Math.sin(X*7.3+I*2)*.1})});const T=i.spot("bucket",-8,-24,13);t.add("gloss",new ye(11,8,17,20,1,!0),15029039,T.x,8.5,T.z),t.cyl("gloss",8,8,.6,T.x,0,T.z,13189919,20),t.cyl("matte",10.4,10.4,.4,T.x,15.4,T.z,Mi,20),t.torus("gloss",11.3,.7,T.x,16.8,T.z,16777215,Math.PI/2,0,0,Sn,24,6),t.torus("gloss",11.5,.5,T.x,17,T.z,16512746,0,.5,0,Math.PI,18,6);const S=i.spot("sandpie",T.x+24,T.z+8,10);t.cyl("matte",6.4,8.8,13,S.x,0,S.z,Mi,18),t.cyl("matte",6.6,6.6,.8,S.x,13,S.z,15783324,18);const w=i.spot("spade",96,16,12);t.add("gloss",new ye(.9,.9,22,8),16765471,w.x,1.2,w.z,.7,Math.PI/2),t.box("gloss",9,1,11,w.x+Math.sin(.7)*15,.4,w.z+Math.cos(.7)*15,2789309,.7),t.torus("gloss",2.6,.8,w.x-Math.sin(.7)*12.5,1.2,w.z-Math.cos(.7)*12.5,16765471,Math.PI/2,0,0,Sn,12,6);const A=i.spot("beachball",160,66,12);t.add("gloss",new ze(11,28,18),Wi([15029039,16777215,2789309,16765471,16777215,3519850]),A.x,11,A.z,.3,.6,.2);const M=i.spot("parasol",-176,-92,4);t.cyl("matte",1.3,1.5,92,M.x,0,M.z,16052194,8),t.add("matte",new vn(66,17,16,1,!0),Wi([15029039,16512746],16),M.x,92,M.z),t.add("matte",new vn(65.5,16.6,16,1,!0).scale(1,1,-1),Wi([13189919,15130576],16),M.x,91.6,M.z),t.sphere("matte",2,M.x,101,M.z,16765471);const b=new Dt(new Ie(84,44,12,1),new Fn({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));{const R=b.geometry.attributes.position,I=new Float32Array(R.count*3),k=new Ot;for(let lt=0;lt<R.count;lt++)k.set(Math.floor((R.getX(lt)+42)/7.01)%2?2789309:16512746),I.set([k.r,k.g,k.b],lt*3);b.geometry=b.geometry.toNonIndexed();const q=b.geometry.attributes.position,X=new Float32Array(q.count*3);for(let lt=0;lt<q.count;lt+=3){const Mt=(q.getX(lt)+q.getX(lt+1)+q.getX(lt+2))/3;k.set(Math.floor((Mt+42)/7)%2?2789309:16512746);for(let xt=0;xt<3;xt++)X.set([k.r,k.g,k.b],(lt+xt)*3)}b.geometry.setAttribute("color",new ee(X,3))}b.rotation.x=-Math.PI/2,b.rotation.z=.25,b.position.set(-196,.06,-112),b.receiveShadow=!0,b.name="towel",i.add(b),i.reserveBox("towel",-196,-112,84,44,.25,!0);for(const R of[-1,1]){const I=i.spot("flipflop",-150+R*7,-128,6,!1);t.sphere("matte",5,I.x,.6,I.z,16765471,1,.14,2.3,12,6),t.torus("matte",3,.4,I.x,1.6,I.z+5,15029039,0,Math.PI/2,0,Math.PI,10,5)}for(const[R,I,k]of[[186,-112,.9],[214,40,-.5],[-214,96,2.2]]){const q=i.spot("palm",R,I,6);let X=q.x,lt=0,Mt=q.z,xt=.05;for(let Ct=0;Ct<9;Ct++)t.add("matte",new ye(3.6-Ct*.16,4-Ct*.16,13,9),Ct%2?9071176:8019006,X+Math.sin(k)*Math.sin(xt)*13/2,lt+Math.cos(xt)*13/2,Mt+Math.cos(k)*Math.sin(xt)*13/2,k,xt),X+=Math.sin(k)*Math.sin(xt)*13,Mt+=Math.cos(k)*Math.sin(xt)*13,lt+=Math.cos(xt)*13,xt+=.045;for(let Ct=0;Ct<9;Ct++){const st=Ct/9*Sn+e()*.3,ct=new ze(1,8,5);ct.scale(26,1.2,6.5),ct.translate(24,0,0),t.add("matte",ct,Ze(4168266,e,.12),X,lt,Mt,st,0,-.45-e()*.25)}for(let Ct=0;Ct<3;Ct++)t.sphere("matte",3,X+Math.cos(Ct*2.1)*3.5,lt-3,Mt+Math.sin(Ct*2.1)*3.5,5913892)}const C=[2789309,15029039,16765471,16512746,3519850,16744368,2789309,15029039];for(let R=0;R<8;R++){const I=-224+R*64,k=-178;t.box("far",46,52,40,I,6,k,C[R]);for(let q=-2;q<=2;q++)t.box("far",4.6,52,.6,I+q*9.2,6,k+20.3,16512746);t.add("far",new ye(.1,36,22,4,1),16512746,I,69,k,Math.PI/4),t.box("far",14,30,.8,I,6,k+20.7,7032627);for(const[q,X]of[[-20,-17],[20,-17],[-20,17],[20,17]])t.box("far",3,6,3,I+q,0,k+X,7032627);i.reserveBox("hut",I,k,46,40,0,!1)}for(let R=0;R<9;R++){const I=-480+R*120+e.range(-20,20);t.sphere("far",130+e()*40,I,-8,-330+e.range(-20,20),Ze(14728576,e,.06),1.2,.34+e()*.1,1,14,8)}for(const R of[-1,1])for(let I=0;I<5;I++)t.sphere("far",110+e()*40,R*(400+e()*30),-8,-250+I*95,Ze(14728576,e,.06),1,.3+e()*.12,1.25,14,8);for(let R=0;R<90;R++){const I=e()<.5;I?e.sign()*(300+e()*60):e.range(-420,420);const k=I?e.range(-250,120):-250-e()*40,q=I?e.sign()*(285+e()*50):e.range(-420,420),X=I?k:-222-e()*30;for(let lt=0;lt<4;lt++)t.add("far",new vn(1.6,18+e()*12,4),Ze(9414746,e,.15),q+e.range(-4,4),8,X+e.range(-4,4),e()*Sn,(e()-.5)*.5)}const N=-330,U=300;t.sphere("far",60,N,0,U,7170674,1.2,.45,1,10,7),t.add("far",new ye(11,17,150,16),ld([16512746,15029039,16512746,15029039,16512746],-75,75),N,98,U),t.cyl("far",15,15,3,N,173,U,3817293,16),t.cyl("glowNoFog",8,8,14,N,176,U,16773816,12),t.cone("far",12,12,N,190,U,15029039,16);const O=new ye(3,36,420,12,1,!0);O.translate(0,-210,0),O.rotateZ(Math.PI/2-.06);const H=new Dt(O,new be({color:16773824,transparent:!0,opacity:.16,depthWrite:!1,fog:!1,side:He,blending:Tn}));H.position.set(N,183,U),H.name="lighthouse-beam",i.add(H),i.onUpdate(R=>{H.rotation.y+=R*.5}),t.box("far",46,7,13,210,0,420,16512746,.3),t.cyl("far",.7,.7,60,210,6,420,7032627,6);{const R=new ge;R.setAttribute("position",new ee(new Float32Array([0,0,0,26,0,0,0,52,0,0,0,0,0,52,0,26,0,0]),3)),t.add("far",R,16773848,211,12,420,.3)}const G=new ji;for(let R=0;R<6;R++){const I=R/6*Sn+e(),k=70+e()*50,q=e()*40;for(const X of[-1,1]){const lt=new ge;lt.setAttribute("position",new ee(new Float32Array([0,0,0,X*7,2.4,-1,X*6,2,2.4,0,0,0,X*6,2,2.4,X*7,2.4,-1]),3)),G.add("g",lt,16512746,Math.cos(I)*k,q,Math.sin(I)*k,-I)}}const j=G.build({g:new be({vertexColors:!0,fog:!1})})[0];j.matrixAutoUpdate=!0,j.position.set(60,110,330),j.name="gulls",i.add(j),i.onUpdate((R,I)=>{j.rotation.y+=R*.16,j.position.y=110+Math.sin(I*.4)*8});const W=i.spot("crab",84,112,16),V=new ji;V.sphere("k",3.4,0,2.6,0,15029039,1.3,.6,1);for(const R of[-1,1]){V.sphere("k",.55,R*1.2,5.2,2.2,1118481,1,1,1,6,5),V.cyl("k",.2,.2,2,R*1.2,3.4,2.2,15029039,5),V.sphere("k",1.6,R*5.6,3,2.6,15755327,1.2,.8,.8,8,6);for(let I=0;I<3;I++)V.add("k",new ye(.3,.2,4.2,5),13189919,R*(4+I*.4),1.6,-1.6+I*1.5,0,0,R*-.9)}const Q=V.build({k:i.mats.matte},{k:{cast:!0}})[0];Q.matrixAutoUpdate=!0,Q.name="crab",i.add(Q),i.onUpdate((R,I)=>{Q.position.set(W.x+Math.sin(I*.6)*11,Math.abs(Math.sin(I*9))*.3,W.z),Q.rotation.y=Math.PI+Math.sin(I*.3)*.15});const et=[16767428,16510685,16234912,15257840,16774112];i.scatterBeside(30,.8,11,()=>1.6+e()*1.8,(R,I,k)=>Uo(i,R,0,I,k,e.pick(et)),{name:"shell",solid:!0});const vt=new kc;for(let R=0;R<10;R++){const I=R/10*Sn,k=R%2?1.5:4;R===0?vt.moveTo(Math.cos(I)*k,Math.sin(I)*k):vt.lineTo(Math.cos(I)*k,Math.sin(I)*k)}vt.closePath(),i.scatterBeside(12,1,10,4.2,(R,I)=>{const k=new Xa(vt,{depth:.8,bevelEnabled:!0,bevelSize:.4,bevelThickness:.4,bevelSegments:1,curveSegments:1});t.add("matte",k,e.pick([16747068,15755327,16752560]),R,.5,I,e()*Sn,-Math.PI/2)},{name:"starfish",solid:!0}),i.scatterBeside(80,.3,10,()=>.5+e()*1.3,(R,I,k)=>Ua(i,R,I,k,e.pick([10130572,12101776,8354422,13680808])),{name:"pebble"}),i.scatterBeside(7,1.5,12,11,(R,I)=>{const k=e()*Sn;t.add("matte",new ye(1.5,1.9,21,8),Ze(10123864,e,.1),R,1.6,I,k,Math.PI/2),t.add("matte",new ye(.6,.9,6,6),9071176,R,3.4,I,k+1,1)},{name:"driftwood",solid:!0}),i.scatter(34,[-250,-150,250,140],()=>5+e()*6,(R,I,k)=>{e()<.6?t.sphere("matte",k,R,-k*.55,I,Ze(Mi,e,.05),1,.8,1,12,8):Uo(i,R,0,I,k*.5,e.pick(et))},{name:"mound",solid:!0})}const tc=[c_,u_,p_,g_],Ei=tc.map(i=>{const t=od(i);return{id:i.id,name:i.name,description:i.description,difficulty:i.difficulty,defaultLaps:i.defaultLaps,lengthLabel:`${Math.round(t.L)} m`}});function x_(i){const t=tc.find(e=>e.id===i)||tc[0];return a_(t)}const qn=[{id:"pipsqueak",name:"Pip Squeak",type:"kart",class:"Rookie",tagline:"Tiny go-kart, giant grin. Turns on a coin.",color:"#ffd23f",accent:"#e63946",stats:{speed:2,accel:8,grip:9,weight:2},topSpeed:29,acceleration:26,gripFactor:1.15,mass:.7,turnRate:3.1,radius:.9},{id:"hopscotch",name:"Hopscotch",type:"buggy",class:"Rookie",tagline:"Bouncy dune buggy that shrugs off bumps.",color:"#ff7b1c",accent:"#1d3557",stats:{speed:4,accel:6,grip:7,weight:4},topSpeed:31,acceleration:22,gripFactor:1,mass:.9,turnRate:2.9,radius:1},{id:"biscuitbus",name:"Biscuit Bus",type:"van",class:"Rookie",tagline:"Slow to wake up, impossible to shove aside.",color:"#3db2a5",accent:"#fff3d6",stats:{speed:3,accel:4,grip:6,weight:8},topSpeed:30,acceleration:18,gripFactor:.95,mass:1.5,turnRate:2.6,radius:1.05},{id:"mudmuffin",name:"Mud Muffin",type:"rally",class:"Amateur",tagline:"Rally hatch that sticks like jam to toast.",color:"#2f6fed",accent:"#ffffff",stats:{speed:6,accel:6,grip:8,weight:5},topSpeed:34,acceleration:23,gripFactor:1.1,mass:1,turnRate:2.9,radius:1},{id:"gruffstomper",name:"Gruff Stomper",type:"monster",class:"Amateur",tagline:"Big wheels, bigger attitude. Bullies the pack.",color:"#7a3ff2",accent:"#b6ff3b",stats:{speed:5,accel:5,grip:5,weight:10},topSpeed:33,acceleration:20,gripFactor:.9,mass:1.8,turnRate:2.5,radius:1.15},{id:"brassknuckle",name:"Brass Knuckle",type:"muscle",class:"Amateur",tagline:"All motor, no manners. Loves going sideways.",color:"#c1121f",accent:"#f4c95d",stats:{speed:8,accel:6,grip:4,weight:7},topSpeed:37,acceleration:21,gripFactor:.82,mass:1.3,turnRate:2.6,radius:1.05},{id:"needlenine",name:"Needle Nine",type:"formula",class:"Pro",tagline:"Open-wheel missile. Fastest thing on the carpet.",color:"#f5f5f0",accent:"#ff3d7f",stats:{speed:10,accel:7,grip:9,weight:3},topSpeed:41,acceleration:24,gripFactor:1.2,mass:.8,turnRate:2.8,radius:1},{id:"ionwisp",name:"Ion Wisp",type:"future",class:"Pro",tagline:"Prototype from next Tuesday. Launches like a spark.",color:"#1b1f3b",accent:"#22e6ff",stats:{speed:9,accel:10,grip:7,weight:3},topSpeed:39,acceleration:28,gripFactor:1,mass:.85,turnRate:3,radius:1}],__=Object.fromEntries(qn.map(i=>[i.id,i]));function hd(i){return __[i]||qn[0]}const Ht="#1c1f25",y_="#15161a",le="#d5dae2",mn="#6c727d",Na=new re,za=new Cn,b_=new Qe,Ca=new z,fd=new z,oa=new Ot,la=new z,ca=new z,M_=new z(0,1,0);class ec{constructor(){this.buckets={}}add(t,e,n="paint",s=!1){let r=t.index?t.toNonIndexed():t;return s&&r.computeVertexNormals(),(this.buckets[n]||(this.buckets[n]=[])).push({g:r,color:e}),this}box(t,e,n,s,r,a,o,l,c=0,f=0,h=0){const u=new xn(t,e,n);return yf(u,s,r,a,c,f,h),this.add(u,o,l)}cyl(t,e,n,s,r,a,o,l,c=10,f=t){const h=new ye(f,t,e,c);return a==="x"?h.rotateZ(-Math.PI/2):a==="z"&&h.rotateX(Math.PI/2),h.translate(n,s,r),this.add(h,o,l)}tube(t,e,n,s,r,a,o,l,c,f=6){la.set(t,e,n),ca.set(s,r,a);const h=la.distanceTo(ca),u=new ye(o,o,h,f);return Ca.copy(ca).sub(la).normalize(),za.setFromUnitVectors(M_,Ca),Na.compose(fd.copy(la).add(ca).multiplyScalar(.5),za,Ca.set(1,1,1)),u.applyMatrix4(Na),this.add(u,l,c)}sphere(t,e,n,s,r,a,o=1,l=1,c=1,f=10){const h=new ze(t,f,Math.max(6,f-3));return h.scale(o,l,c),h.translate(e,n,s),this.add(h,r,a)}profile(t,e,n,s,{bevel:r=.03,x:a=0,taper:o=null}={}){const l=new kc;l.moveTo(t[0][0],t[0][1]);for(let h=1;h<t.length;h++)l.lineTo(t[h][0],t[h][1]);l.closePath();const c=Math.max(.001,e-2*r),f=new Xa(l,{depth:c,steps:1,bevelEnabled:r>0,bevelThickness:r,bevelSize:r,bevelOffset:-r,bevelSegments:1,curveSegments:4});if(f.translate(0,0,-c/2),f.rotateY(-Math.PI/2),o){const h=f.attributes.position;for(let u=0;u<h.count;u++)h.setX(u,h.getX(u)*o(h.getZ(u),h.getY(u)))}return a&&f.translate(a,0,0),this.add(f,n,s,!!o)}torus(t,e,n,s,r,a,o,l=0,c=0,f=12){const h=new Tr(t,e,6,f);return yf(h,n,s,r,l,c,0),this.add(h,a,o)}fender(t,e,n,s,r,a,o){const l=new ye(t,t,e,10,1,!1,0,Math.PI);return l.rotateZ(Math.PI/2),l.translate(n,s,r),this.add(l,a,o)}mirror(t){return t(1),t(-1),this}build(t){const e=this.buckets[t];if(!e||!e.length)return null;let n=0;for(const c of e)n+=c.g.attributes.position.count;const s=new Float32Array(n*3),r=new Float32Array(n*3),a=new Float32Array(n*3);let o=0;for(const c of e){const f=c.g.attributes.position.count;s.set(c.g.attributes.position.array,o*3),r.set(c.g.attributes.normal.array,o*3),oa.set(c.color);for(let h=0;h<f;h++)a[(o+h)*3]=oa.r,a[(o+h)*3+1]=oa.g,a[(o+h)*3+2]=oa.b;o+=f,c.g.dispose()}const l=new ge;return l.setAttribute("position",new ee(s,3)),l.setAttribute("normal",new ee(r,3)),l.setAttribute("color",new ee(a,3)),l.computeBoundingSphere(),l.computeBoundingBox(),l}}function yf(i,t,e,n,s,r,a){s||r||a?(za.setFromEuler(b_.set(s,r,a,"YXZ")),Na.compose(Ca.set(t,e,n),za,fd.set(1,1,1)),i.applyMatrix4(Na)):i.translate(t,e,n)}let ha=null;function Nc(){return ha||(ha={paint:new Pe({vertexColors:!0,roughness:.42,metalness:.12}),wheel:new Pe({vertexColors:!0,roughness:.78,metalness:.05}),glass:new Pe({color:1583162,roughness:.12,metalness:.35}),head:new Pe({color:16774872,emissive:16773312,emissiveIntensity:1.1,roughness:.3}),tail:new Pe({color:16722474,emissive:16718362,emissiveIntensity:1,roughness:.3}),glow:{}},ha)}function w_(i){const t=Nc();return t.glow[i]||(t.glow[i]=new Pe({color:i,emissive:i,emissiveIntensity:1.4,roughness:.4})),t.glow[i]}const zo=new Map;function S_(i,t,e,n,s){const r=`${i}|${t}|${e}|${n}|${s}`;if(zo.has(r))return zo.get(r);const a=new ec,o=t/2,l=i*.6,c=Math.min(.05,t*.22),f=[new mt(l,-o),new mt(i-c,-o),new mt(i,-o+c),new mt(i,o-c),new mt(i-c,o),new mt(l,o)],h=new Pc(f,14);if(h.rotateZ(-Math.PI/2),a.add(h,y_,"w"),s)for(let d=0;d<8;d++){const g=d/8*Math.PI*2,v=new xn(t*.92,i*.1,i*.2);v.translate(0,i*.95,0),v.rotateX(g),a.add(v,"#24262c","w")}a.cyl(l*1.02,t*.8,0,0,0,"x",e,"w",12);for(let d=0;d<5;d++){const g=new xn(t*.9,l*.95,l*.22);g.translate(0,l*.45,0),g.rotateX(d/5*Math.PI*2),a.add(g,n,"w")}a.cyl(l*.3,t*1,0,0,0,"x",n,"w",8);const u=a.build("w");return zo.set(r,u),u}function T_(i,t){const e=Nc(),n=[],s=[],r=[],a=[{s:t.front,side:1,front:!0},{s:t.front,side:-1,front:!0},{s:t.rear,side:1,front:!1},{s:t.rear,side:-1,front:!1}];for(const o of a){const l=S_(o.s.r,o.s.w,t.rim||le,t.hub||mn,!!t.knobbly),c=new Dt(l,e.wheel);if(c.castShadow=!0,c.name=(o.front?"wheel-f":"wheel-r")+(o.side>0?"l":"r"),c.userData.radius=o.s.r,o.front){const f=new pn;f.position.set(o.side*o.s.x,o.s.r,o.s.z),f.add(c),i.add(f),s.push(f)}else c.position.set(o.side*o.s.x,o.s.r,o.s.z),i.add(c);n.push(c),r.push(o.s.r)}i.userData.wheels=n,i.userData.steerPivots=s,i.userData.wheelRadii=r}function E_(i,t,e){return i.box(.6,.05,1.5,0,.15,.02,Ht),i.profile([[.42,.13],[.96,.13],[1,.2],[.72,.36],[.42,.3]],.42,t,"paint",{taper:n=>n>.7?1-(n-.7)*1.1:1}),i.box(.2,.012,.2,0,.345,.6,"#ffffff","paint",.22),i.mirror(n=>{i.profile([[-.38,.13],[.36,.13],[.42,.2],[.3,.29],[-.38,.29]],.17,t,"paint",{x:n*.36}),i.box(.175,.012,.5,n*.36,.296,-.05,e)}),i.profile([[-.44,.17],[-.04,.17],[-.02,.25],[-.28,.27],[-.36,.6],[-.47,.6]],.38,e),i.cyl(.12,.26,0,.4,-.2,"y","#2b4c9b","paint",8,.1),i.sphere(.15,0,.66,-.2,"#ffffff"),i.box(.31,.03,.31,0,.7,-.2,e),i.box(.2,.075,.06,0,.665,-.075,Ht,"glass"),i.mirror(n=>i.tube(n*.13,.47,-.16,n*.09,.45,.2,.03,"#2b4c9b")),i.tube(0,.2,.55,0,.45,.24,.02,mn),i.torus(.1,.02,0,.455,.235,Ht,"paint",-.85),i.box(.3,.2,.24,.1,.28,-.66,mn),i.cyl(.07,.2,-.12,.3,-.66,"y",le,"paint",8),i.cyl(.035,.34,.26,.24,-.8,"z",le,"paint",6),i.cyl(.035,.84,0,.15,1.02,"x",le,"paint",6),i.cyl(.035,.9,0,.22,-.92,"x",le,"paint",6),i.cyl(.025,.86,0,.16,.62,"x",mn,"paint",6),i.cyl(.03,.9,0,.2,-.6,"x",mn,"paint",6),i.mirror(n=>{i.box(.07,.05,.03,n*.12,.25,.99,"#fff","head"),i.box(.08,.05,.03,n*.2,.22,-.94,"#f00","tail")}),{wheels:{front:{r:.16,w:.14,x:.44,z:.62},rear:{r:.2,w:.2,x:.46,z:-.6},rim:e,hub:"#ffffff"},antenna:[-.2,.36,-.72]}}function A_(i,t,e){const n=s=>s>.5?1-(s-.5)*.7:1;return i.profile([[-.85,.3],[.7,.3],[1.02,.37],[1.02,.43],[.45,.57],[-.1,.61],[-.85,.61]],.64,t,"paint",{taper:n}),i.box(.3,.012,.4,0,.535,.68,e,"paint",.245),i.box(.46,.02,.56,0,.615,-.3,Ht),i.mirror(s=>{i.box(.17,.26,.07,s*.12,.74,-.52,e),i.tube(s*.28,.58,.22,s*.25,.93,-.02,.03,Ht),i.tube(s*.25,.93,-.02,s*.25,.93,-.58,.03,Ht),i.tube(s*.25,.93,-.58,s*.28,.6,-.86,.03,Ht),i.tube(s*.2,.36,.68,s*.44,.26,.68,.025,mn),i.tube(s*.25,.36,-.62,s*.44,.29,-.62,.03,mn),i.tube(s*.3,.62,-.66,s*.4,.34,-.62,.035,le),i.tube(s*.2,.52,.6,s*.38,.3,.68,.03,le),i.cyl(.055,.05,s*.13,1,0,"z","#fff","head",8),i.box(.1,.06,.03,s*.24,.5,-.86,"#f00","tail"),i.box(.025,.14,.3,s*.42,.97,-.84,Ht)}),i.tube(-.25,.93,-.02,.25,.93,-.02,.03,Ht),i.tube(-.25,.93,-.58,.25,.93,-.58,.03,Ht),i.box(.52,.03,.5,0,.955,-.3,e),i.box(.84,.03,.26,0,1,-.84,e,"paint",-.12),i.box(.34,.2,.22,0,.5,-.92,mn),i.cyl(.05,.14,0,.5,-1.05,"z",le,"paint",8),i.cyl(.035,.6,0,.36,1.07,"x",le,"paint",6),i.mirror(s=>i.tube(s*.2,.36,1.07,s*.16,.36,.9,.03,le)),{wheels:{front:{r:.25,w:.2,x:.47,z:.68},rear:{r:.29,w:.26,x:.47,z:-.62},rim:"#f2f2f2",hub:e,knobbly:!0},antenna:[.22,.6,-.8]}}function C_(i,t,e){return i.profile([[-.98,.2],[.95,.2],[1.01,.28],[1.01,.56],[-.98,.56]],1,t,"paint",{bevel:.04}),i.profile([[-.98,.55],[1.01,.55],[.84,1],[.72,1.07],[-.94,1.07],[-.98,1]],.98,e,"paint",{bevel:.05}),i.box(1.012,.05,1.94,0,.56,.01,Ht),i.profile([[1,.56],[1,.3],[1.02,.3],[1.02,.56]],.3,e,"paint",{bevel:0}),i.box(.82,.36,.02,0,.79,.935,Ht,"glass",-.37),i.box(.7,.26,.02,0,.82,-.975,Ht,"glass",.04),i.mirror(n=>{i.box(.02,.27,.42,n*.487,.8,.45,Ht,"glass"),i.box(.02,.27,.5,n*.487,.8,-.08,Ht,"glass"),i.box(.02,.27,.42,n*.487,.8,-.6,Ht,"glass"),i.cyl(.08,.04,n*.34,.42,1.01,"z","#fff","head",10),i.cyl(.1,.02,n*.34,.42,1,"z",le,"paint",10),i.box(.1,.16,.03,n*.4,.42,-.985,"#f00","tail"),i.tube(n*.36,1.13,.4,n*.36,1.13,-.8,.02,le),i.tube(n*.36,1.07,.4,n*.36,1.13,.4,.02,le),i.tube(n*.36,1.07,-.8,n*.36,1.13,-.8,.02,le),i.box(.1,.07,.04,n*.55,.66,.72,t)}),i.box(.36,.1,.03,0,.42,1.012,Ht),i.box(1.06,.1,.1,0,.25,1,le),i.box(1.06,.1,.1,0,.25,-.97,le),i.box(.44,.16,.4,-.04,1.22,-.45,"#c98a4b"),i.box(.46,.03,.06,-.04,1.24,-.45,Ht),i.cyl(.07,.56,0,1.2,.05,"x",t,"paint",8),{wheels:{front:{r:.2,w:.16,x:.46,z:.62},rear:{r:.2,w:.16,x:.46,z:-.62},rim:e,hub:le},antenna:[.4,1.06,.55]}}function ud(i,t,e){const n=s=>s>.6?1-(s-.6)*.22:1;return i.profile([[-.95,.2],[.92,.2],[1.01,.3],[.99,.46],[.4,.57],[-.9,.59],[-.98,.5]],1.02,t,"paint",{taper:n,bevel:.04}),i.profile([[.39,.56],[.1,.87],[-.62,.87],[-.89,.58]],.86,Ht,"glass",{bevel:.02}),i.profile([[.15,.85],[.1,.9],[-.63,.9],[-.69,.85]],.89,t,"paint",{bevel:.02}),i.box(.885,.32,.07,0,.72,-.22,t),i.profile([[.1,.9],[-.2,.9],[-.2,.97],[.04,.97]],.26,e,"paint",{bevel:.015}),i.box(.2,.04,.02,0,.94,.085,Ht),i.box(.94,.03,.2,0,.96,-.76,e,"paint",-.14),i.mirror(s=>{i.box(.03,.12,.22,s*.46,.93,-.76,t),i.tube(s*.3,.84,-.7,s*.3,.95,-.76,.02,Ht),i.box(.02,.07,1.5,s*.512,.37,-.05,e),i.cyl(.13,.02,s*.512,.46,-.05,"x","#ffffff","paint",12),i.box(.2,.2,.02,s*.44,.2,.36,e),i.box(.2,.2,.02,s*.44,.2,-.88,e),i.cyl(.07,.05,s*.1,.62,.74,"z","#fff","head",8),i.cyl(.07,.05,s*.28,.61,.72,"z","#fff","head",8),i.box(.16,.08,.03,s*.36,.4,.985,"#fff","head"),i.box(.2,.07,.03,s*.34,.48,-.965,"#f00","tail"),i.box(.1,.06,.04,s*.54,.62,.38,t)}),i.box(.8,.12,.08,0,.6,.67,Ht),i.box(.7,.02,.5,0,.535,.62,e,"paint",.185),i.box(1,.1,.08,0,.25,1,Ht),i.box(1,.1,.08,0,.25,-.96,Ht),i.cyl(.04,.16,-.3,.2,-1,"z",le,"paint",6),{wheels:{front:{r:.23,w:.19,x:.46,z:.64},rear:{r:.23,w:.19,x:.46,z:-.6},rim:"#ffffff",hub:e},antenna:[-.3,.9,-.5]}}function R_(i,t,e){return i.box(.46,.12,1.5,0,.52,0,Ht),i.cyl(.07,.9,0,.42,.68,"x",mn,"paint",8),i.cyl(.07,.9,0,.42,-.68,"x",mn,"paint",8),i.sphere(.13,0,.42,.68,mn),i.sphere(.13,0,.42,-.68,mn),i.mirror(n=>{for(const s of[.68,-.68]){const r=s>0?.22:-.22;i.tube(n*.2,.52,r,n*.3,.42,s,.03,le),i.tube(n*.22,.72,s*.82,n*.32,.44,s,.045,e)}i.cyl(.045,.5,n*.44,1.18,-.42,"y",le,"paint",8),i.box(.02,.09,1.5,n*.502,.83,-.1,e),i.box(.16,.1,.03,n*.36,.84,1.03,"#fff","head"),i.box(.12,.12,.03,n*.4,.84,-1.01,"#f00","tail"),i.tube(n*.36,.98,-.5,n*.34,1.36,-.5,.035,le),i.cyl(.06,.05,n*.16,1.43,-.48,"z","#fff","head",8),i.tube(n*.24,.7,1.1,n*.24,.94,1.1,.03,le),i.tube(n*.24,.7,1.1,n*.24,.7,.98,.03,le)}),i.tube(-.34,1.36,-.5,.34,1.36,-.5,.035,le),i.tube(-.3,.94,1.1,.3,.94,1.1,.03,le),i.tube(-.3,.8,1.1,.3,.8,1.1,.03,le),i.profile([[-1,.66],[.95,.66],[1.02,.74],[1.02,.93],[.3,.99],[-1,.99]],1,t,"paint",{bevel:.04}),i.profile([[.3,.98],[.1,1.29],[-.3,1.29],[-.36,.98]],.86,Ht,"glass",{bevel:.02}),i.profile([[.15,1.27],[.1,1.32],[-.3,1.32],[-.34,1.27]],.9,t,"paint",{bevel:.02}),i.box(.88,.31,.06,0,1.13,-.33,t),i.box(.8,.02,.56,0,.995,-.69,Ht),i.box(.5,.1,.03,0,.84,1.03,Ht),i.box(1.04,.1,.08,0,.7,-1,le),i.box(.5,.02,.5,0,.972,.64,e,"paint",.083),{wheels:{front:{r:.42,w:.36,x:.52,z:.68},rear:{r:.42,w:.36,x:.52,z:-.68},rim:e,hub:le,knobbly:!0},antenna:[-.4,.99,-.9]}}function P_(i,t,e){const n=s=>s>.75?1-(s-.75)*.25:s<-.8?1+(s+.8)*.3:1;i.profile([[-1,.24],[1,.24],[1.03,.3],[1.02,.5],[.25,.56],[-.55,.58],[-1,.6],[-1.03,.5]],1.06,t,"paint",{taper:n,bevel:.04}),i.profile([[.22,.56],[-.04,.81],[-.45,.81],[-.9,.59]],.84,Ht,"glass",{bevel:.02}),i.profile([[0,.79],[-.05,.84],[-.46,.84],[-.53,.79]],.87,t,"paint",{bevel:.02}),i.box(.865,.26,.06,0,.69,-.3,t);for(let s=0;s<3;s++)i.box(.7,.02,.07,0,.765-s*.055,-.56-s*.11,Ht,"paint",.3);return i.mirror(s=>{i.box(.13,.012,.76,s*.11,.538,.63,e,"paint",.078),i.box(.13,.012,.44,s*.11,.846,-.26,e),i.box(.13,.012,.14,s*.11,.606,-.95,e),i.cyl(.04,.8,s*.55,.23,-.08,"z",le,"paint",8),i.cyl(.055,.04,s*.42,.42,1.01,"z","#fff","head",8),i.cyl(.055,.04,s*.29,.42,1.015,"z","#fff","head",8),i.box(.3,.07,.03,s*.3,.5,-1,"#f00","tail"),i.box(.1,.05,.04,s*.55,.6,.2,t)}),i.box(.26,.14,.32,0,.61,.52,le),i.box(.3,.07,.36,0,.71,.53,Ht),i.box(.26,.05,.03,0,.71,.715,e),i.box(.5,.1,.03,0,.42,1,Ht),i.box(1.04,.07,.08,0,.29,1,le),i.box(1.02,.07,.08,0,.3,-1,le),i.profile([[-1.03,.58],[-.84,.6],[-1.05,.69]],1,t,"paint",{bevel:.015}),{wheels:{front:{r:.22,w:.18,x:.47,z:.66},rear:{r:.26,w:.26,x:.45,z:-.6},rim:le,hub:Ht},antenna:[.38,.59,-.86]}}function L_(i,t,e){const n=s=>s>.25?Math.max(.3,1-(s-.25)*.82):1;return i.box(.86,.03,1.3,0,.09,-.15,Ht),i.profile([[-.9,.11],[1.06,.11],[1.16,.15],[1.16,.2],[.3,.36],[.05,.4],[-.2,.4],[-.9,.3]],.4,t,"paint",{taper:n}),i.mirror(s=>{i.profile([[-.78,.11],[.3,.11],[.36,.3],[-.3,.33],[-.78,.22]],.25,t,"paint",{x:s*.31}),i.box(.19,.13,.03,s*.31,.22,.345,Ht,"paint",-.3),i.box(.255,.04,.6,s*.31,.2,-.2,e),i.box(.025,.14,.3,s*.56,.14,1.06,e),i.box(.03,.36,.34,s*.4,.5,-.94,e),i.tube(s*.1,.27,.8,s*.42,.25,.72,.016,Ht,"paint",5),i.tube(s*.14,.24,.5,s*.42,.2,.72,.016,Ht,"paint",5),i.tube(s*.1,.18,.82,s*.42,.18,.72,.016,Ht,"paint",5),i.tube(s*.18,.28,-.62,s*.4,.26,-.66,.02,Ht,"paint",5),i.tube(s*.18,.2,-.86,s*.4,.22,-.66,.02,Ht,"paint",5),i.box(.06,.03,.02,s*.07,.19,1.165,"#fff","head")}),i.profile([[-.14,.4],[-.28,.6],[-.4,.6],[-.96,.3],[-.2,.3]],.2,e,"paint",{taper:s=>s<-.4?Math.max(.35,1+(s+.4)*1.2):1}),i.box(.14,.09,.02,0,.53,-.2,Ht,"paint",-.6),i.box(.24,.02,.3,0,.405,-.02,Ht),i.sphere(.1,0,.47,-.04,e),i.box(.15,.05,.05,0,.475,.04,Ht,"glass"),i.box(1.1,.025,.24,0,.09,1.08,e),i.box(1.08,.02,.12,0,.16,1,t,"paint",-.25),i.box(.8,.03,.24,0,.66,-.95,t,"paint",-.18),i.box(.8,.025,.16,0,.36,-.98,Ht),i.tube(0,.3,-.86,0,.64,-.94,.03,Ht,"paint",5),i.box(.1,.06,.03,0,.26,-1,"#f00","tail"),{wheels:{front:{r:.22,w:.2,x:.5,z:.72},rear:{r:.25,w:.3,x:.47,z:-.66},rim:Ht,hub:e},antenna:[0,.58,-.36]}}function I_(i,t,e){const n=s=>s>.3?Math.max(.45,1-(s-.3)*.62):s<-.6?1+(s+.6)*.4:1;return i.profile([[-1,.2],[.6,.16],[1.09,.22],[1.09,.27],[.4,.44],[-.5,.53],[-1,.47]],.68,t,"paint",{taper:n,bevel:.04}),i.sphere(.3,0,.47,-.08,Ht,"glass",.86,.72,1.75,12),i.mirror(s=>{i.fender(.31,.27,s*.455,.22,.64,t),i.fender(.31,.27,s*.455,.22,-.64,t),i.profile([[-.5,.16],[.5,.16],[.5,.36],[-.5,.4]],.24,t,"paint",{x:s*.455,bevel:.03}),i.box(.02,.035,1,s*.58,.28,0,e,"glow"),i.box(.2,.02,.05,s*.455,.535,.64,e,"glow"),i.box(.2,.02,.05,s*.455,.535,-.64,e,"glow"),i.profile([[-.55,.5],[-1,.86],[-1.07,.86],[-1,.44]],.04,t,"paint",{x:s*.27,bevel:.01}),i.box(.045,.03,.08,s*.27,.87,-1.03,"#f00","tail"),i.box(.13,.025,.02,s*.14,.25,1.085,"#fff","head"),i.box(.12,.07,.03,s*.2,.4,.42,Ht,"paint",-.4)}),i.box(.05,.02,.9,0,.5,-.2,e,"glow",-.085),i.cyl(.15,.14,0,.34,-1,"z",Ht,"paint",12),i.torus(.13,.03,0,.34,-1.07,e,"glow"),i.cyl(.09,.02,0,.34,-1.075,"z",e,"glow",10),{wheels:{front:{r:.23,w:.2,x:.455,z:.64},rear:{r:.23,w:.2,x:.455,z:-.64},rim:Ht,hub:e},antenna:[-.2,.5,-.7],glow:e}}const k_={kart:E_,buggy:A_,van:C_,rally:ud,monster:R_,muscle:P_,formula:L_,future:I_};function dd(i,t){const e=hd(i),n=Nc(),s=t||e.color,r=e.accent,a=new ec,o=(k_[e.type]||ud)(a,s,r),l=new pn;l.name="car-"+e.id;const c=new pn;c.name="body",l.add(c);const f=(d,g)=>{const v=a.build(d);if(!v)return;const p=new Dt(v,g);p.castShadow=!0,p.name=d,c.add(p)};f("paint",n.paint),f("glass",n.glass),f("head",n.head),f("tail",n.tail),o.glow&&f("glow",w_(o.glow));const h=new ec;h.cyl(.012,.56,0,.28,0,"y",Ht,"paint",5),h.cyl(.03,.04,0,.02,0,"y",mn,"paint",6),h.sphere(.05,0,.58,0,r==="#ffffff"||r==="#fff3d6"?"#ff5a36":r,"paint",1,1,1,8);const u=new Dt(h.build("paint"),n.paint);return u.castShadow=!0,u.name="antenna",u.position.set(o.antenna[0],o.antenna[1],o.antenna[2]),u.rotation.x=-.12,c.add(u),T_(l,o.wheels),l.userData.carId=e.id,l.userData.body=c,l.userData.antenna=u,l.userData.color=s,l.userData.dispose=()=>{c.traverse(d=>{d.isMesh&&d.geometry.dispose()})},l}const fa=30,bf=1.35,D_=1.8,Mf=1.2,wf=1/30,U_=.3,N_=.4,z_=.8,ws=Math.PI*2,Le=(i,t,e)=>i<t?t:i>e?e:i;function zc(i){return i=(i+Math.PI)%ws,i<0&&(i+=ws),i-Math.PI}function nc(i,t,e=i.topSpeed){const n=Math.abs(t),s=n<4.5?n/4.5:1;let r=(n/e-.3)/.7;r=r<0?0:r>1?1:r;const a=1-.4*r*r*(3-2*r);return i.turnRate*s*a}function pd(i){return 60*i.gripFactor}function ic(i){return 36+8*i.gripFactor}class F_{constructor(t,e={}){this.def=hd(t),this.name=e.name||this.def.name,this.isPlayer=!!e.isPlayer,this.color=e.color||this.def.color,this.mesh=dd(this.def.id,e.color),this.pos=new z,this.vel=new z,this.heading=0,this.speed=0,this.radius=this.def.radius||1,this.onGround=!0,this.trackT=0,this.lateral=0,this.halfWidth=8,this.controls={throttle:0,steer:0,handbrake:!1},this.boostTime=0,this.spinTime=0,this.frozen=!1,this.puppet=!1,this.wallHit=0,this.drifting=!1,this.carHit=0,this.landed=0,this.boostPadHit=!1,this.slip=0,this.yawRate=0,this.steerAngle=0,this.airTime=0,this.sideSpeed=0,this._vy=0,this._pitch=0,this._bodyRoll=0,this._bodyPitch=0,this._squash=0,this._squashVel=0,this._antX=0,this._antXv=0,this._antZ=0,this._antZv=0,this._wheelSpin=0,this._rearSpin=0,this._spinVis=0,this._spinDir=1,this._padIndex=-1,this._hasTrack=!1,this._groundY=0;const n=this.mesh.userData;this._body=n.body,this._wheels=n.wheels,this._pivots=n.steerPivots,this._antenna=n.antenna,this._radii=n.wheelRadii,this._antBaseX=this._antenna?this._antenna.rotation.x:0,this._rollGain=this.def.type==="monster"?1.7:this.def.type==="formula"||this.def.type==="kart"?.55:1,this._syncMesh()}get topSpeedNow(){return this.def.topSpeed*(this.boostTime>0?bf:1)}placeAt(t,e,n){if(this.pos.copy(t),this.heading=e,this.vel.set(0,0,0),this.speed=0,this.sideSpeed=0,this.slip=0,this.yawRate=0,this.steerAngle=0,this._vy=0,this.onGround=!0,this.airTime=0,this.boostTime=0,this.spinTime=0,this._spinVis=0,this.wallHit=0,this.drifting=!1,this.carHit=0,this.landed=0,this._pitch=0,this._bodyRoll=0,this._bodyPitch=0,this._squash=0,this._squashVel=0,this._padIndex=-1,n){const s=n.project(this.pos);this.trackT=s.t,this.lateral=s.lateral,this.halfWidth=s.halfWidth,this.pos.y=s.y,this._hasTrack=!0}this._groundY=this.pos.y,this._syncMesh()}applyImpulse(t){this.vel.x+=t.x,this.vel.z+=t.z,t.y>.01&&this.launch(t.y)}launch(t){this.onGround=!1,this._vy=Math.max(this._vy,0)+t,this.airTime=0}update(t,e){if(this.wallHit=0,this.landed=0,this.boostPadHit=!1,this.frozen||!(t>0)){this.drifting=!1,this.carHit=0,this._syncMesh();return}if(t>wf&&(t=wf),this.puppet){this._updatePuppet(t,e);return}this.carHit=0;const n=this.def,s=this.controls,r=this.spinTime>0;if(r)this._spinVis===0&&(this._spinDir=this.yawRate<0?-1:1),this.spinTime=Math.max(0,this.spinTime-t),this._spinVis+=this._spinDir*11*t;else if(this._spinVis!==0){const b=Math.round(this._spinVis/ws+this._spinDir*.35)*ws,C=11*t;Math.abs(b-this._spinVis)<=C?this._spinVis=0:this._spinVis+=Math.sign(b-this._spinVis)*C}const a=this.boostTime>0;a&&(this.boostTime=Math.max(0,this.boostTime-t));let o=r?0:Le(+s.throttle||0,-1,1);const l=r?0:Le(+s.steer||0,-1,1),c=!r&&!!s.handbrake;a&&o>-.1&&(o=1);const f=Math.sin(this.heading),h=Math.cos(this.heading);let u=this.vel.x*f+this.vel.z*h,d=this.vel.x*h-this.vel.z*f;const g=u,v=n.topSpeed*(a?bf:1),p=n.acceleration*(a?D_:1),m=this.onGround||this.airTime<.07,x=Math.abs(l)>Math.abs(this.steerAngle)||l*this.steerAngle<0?9:12;this.steerAngle+=Le(l-this.steerAngle,-x*t,x*t);let _=this.steerAngle*nc(n,u,n.topSpeed)*(u>=0?1:-1);if(c&&m&&(_*=1.3),!m)_*=.3;else if(this.drifting&&_*this.sideSpeed<0){const b=Math.hypot(u,d),C=b>1?Math.abs(d)/b:0,N=c?.62:.42;C>N&&(_*=Le(1-(C-N)/.25,.1,1))}this.yawRate+=(_-this.yawRate)*Math.min(1,14*t);const y=this.yawRate*t;if(this.heading+=y,y!==0){const b=Math.cos(y),C=Math.sin(y),N=u*b+d*C;d=d*b-u*C,u=N}if(m){if(o>0)if(u<-.5)u+=ic(n)*o*t;else{const Q=u/v;let et=Q<.55?1:(1-Q)/.45;et<-1.2&&(et=-1.2),u+=p*(et>0?o*et:et)*t}else if(o<0)if(u>.8)u=Math.max(0,u+ic(n)*o*t);else{const Q=n.topSpeed*.42,et=Le(1+u/Q,0,1);u+=p*.75*o*et*t}const b=1-Math.abs(o);let C=(1.5+.22*Math.abs(u))*b;if(u>v&&(C+=(u-v)*1.6),c&&(C+=9),r&&(C+=7),C>0){const Q=C*t;u=Math.abs(u)<=Q?0:u-Math.sign(u)*Q}const N=Math.hypot(u,d);let U=15*n.gripFactor,O=pd(n);c?(U*=.16,O*=.32):r?(U*=.12,O*=.25):this.drifting&&(U*=.6,O*=.85);let H=U*Math.abs(d);H>O&&(H=O);const G=H*t,j=u*u+d*d;d=Math.abs(d)<=G?0:d-Math.sign(d)*G;const W=c?.3:r?0:.7;if(W>0&&Math.abs(u)>1){const Q=u*u+d*d,et=Q+(j-Q)*W;u=Math.sign(u)*Math.sqrt(Math.max(0,et-d*d))}const V=N>1?Math.abs(d)/N:0;this.drifting?this.drifting=N>5&&(V>.16||c&&N>7):this.drifting=N>7&&(V>.3||c&&Math.abs(u)>7||r)}else{const b=1-.15*t;u*=b,d*=b,this.drifting=!1}const T=Math.sin(this.heading),S=Math.cos(this.heading);this.vel.x=T*u+S*d,this.vel.z=S*u-T*d,this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;let w=this._groundY;if(e){const b=e.project(this.pos,this._hasTrack?this.trackT:void 0);this._hasTrack=!0,this.trackT=b.t,this.lateral=b.lateral,this.halfWidth=b.halfWidth,w=this._groundY=b.y;const C=Math.max(.2,b.halfWidth-this.radius);if(this.lateral>C||this.lateral<-C){const O=this.lateral>0?1:-1,H=e.sample(this.trackT),G=H.right.x*O,j=H.right.z*O,W=Math.abs(this.lateral)-C;this.pos.x-=G*W,this.pos.z-=j*W,this.lateral=O*C;const V=this.vel.x*G+this.vel.z*j;if(V>0){const Q=1-.1*Math.min(1,V/8);let et=this.vel.x-G*V,vt=this.vel.z-j*V;et*=Q,vt*=Q;const R=V*U_+Math.min(V,1);if(this.vel.x=et-G*R,this.vel.z=vt-j*R,V>1.2&&(this.wallHit=V),T*G+S*j>.05&&u>2&&Math.hypot(et,vt)>1){const q=Math.atan2(et,vt),X=zc(q-this.heading);Math.abs(X)<1.6&&(this.heading+=X*Math.min(1,(3+V*.6)*t))}}}const N=e.obstacles;if(N)for(let O=0;O<N.length;O++){const H=N[O],G=this.pos.x-H.x,j=this.pos.z-H.z,W=H.radius+this.radius*.8,V=G*G+j*j;if(V<W*W&&this.pos.y-w<1.2){let Q=Math.sqrt(V),et,vt;Q<1e-4?(et=-T,vt=-S,Q=0):(et=G/Q,vt=j/Q),this.pos.x+=et*(W-Q),this.pos.z+=vt*(W-Q);const R=this.vel.x*et+this.vel.z*vt;if(R<0){const q=-R*(1+N_)+.8;this.vel.x+=et*q,this.vel.z+=vt*q,this.vel.x*=.94,this.vel.z*=.94,-R>1.2&&-R>this.wallHit&&(this.wallHit=-R)}const I=Math.sin(this.heading),k=Math.cos(this.heading);if(I*et+k*vt<-.2){const q=I*vt-k*et>=0?1:-1;this.vel.x+=vt*q*1.6,this.vel.z+=-et*q*1.6}}}const U=e.boostPads;if(U){let O=-1;if(this.pos.y-w<.6)for(let H=0;H<U.length;H++){const G=U[H],j=this.pos.x-G.x,W=this.pos.z-G.z,V=G.radius+.4;if(j*j+W*W<V*V){O=H;break}}O>=0&&O!==this._padIndex&&(this.boostTime<Mf&&(this.boostTime=Mf),this.boostPadHit=!0),this._padIndex=O}}if(this.onGround){const b=(w-this.pos.y)/t;this.pos.y+this._vy*t-.5*fa*t*t>w+.5*fa*t*t&&this._vy>b?(this.onGround=!1,this.airTime=0,this._vy*=z_,this.pos.y=Math.max(w,this.pos.y+this._vy*t),this._vy-=fa*t):(this.pos.y=w,this._vy=Le(b,-25,25),this.airTime=0)}else if(this.airTime+=t,this._vy-=fa*t,this.pos.y+=this._vy*t,this.pos.y<=w){this.pos.y=w,this.onGround=!0;const b=-this._vy;b>3&&this.airTime>.08&&(this.landed=b,this._squashVel-=Math.min(b,18)*.11),this._vy>0&&(this._vy=0)}this.vel.y=this.onGround?0:this._vy;const A=Math.sin(this.heading),M=Math.cos(this.heading);this.speed=this.vel.x*A+this.vel.z*M,this.sideSpeed=this.vel.x*M-this.vel.z*A,this.slip=this.sideSpeed,this._animate(t,(u-g)/t,c),this._syncMesh()}_updatePuppet(t,e){if(this.carHit=0,this.spinTime>0)this._spinVis===0&&(this._spinDir=this.yawRate<0?-1:1),this.spinTime=Math.max(0,this.spinTime-t),this._spinVis+=this._spinDir*11*t;else if(this._spinVis!==0){const f=Math.round(this._spinVis/ws+this._spinDir*.35)*ws,h=11*t;Math.abs(f-this._spinVis)<=h?this._spinVis=0:this._spinVis+=Math.sign(f-this._spinVis)*h}this.boostTime>0&&(this.boostTime=Math.max(0,this.boostTime-t));const n=this.controls,s=this.spinTime>0?0:Le(+n.steer||0,-1,1);if(this.steerAngle+=Le(s-this.steerAngle,-12*t,12*t),e){const f=e.project(this.pos,this._hasTrack?this.trackT:void 0);this._hasTrack=!0,this.trackT=f.t,this.lateral=f.lateral,this.halfWidth=f.halfWidth,this._groundY=f.y,(this.onGround||this.pos.y<f.y)&&(this.pos.y=f.y)}const r=this.pos.y,a=this._pupY===void 0?0:Le((r-this._pupY)/t,-25,25);this._pupY=r,this.onGround?(this._vy+=(a-this._vy)*Math.min(1,12*t),this.airTime=0):(this._vy=Number.isFinite(this.vel.y)?this.vel.y:a,this.airTime+=t);const o=Math.sin(this.heading),l=Math.cos(this.heading),c=this.speed;this.speed=this.vel.x*o+this.vel.z*l,this.sideSpeed=this.vel.x*l-this.vel.z*o,this.slip=this.sideSpeed,this._animate(t,Le((this.speed-c)/t,-80,80),!!n.handbrake),this._syncMesh()}puppetSnap(){this._hasTrack=!1,this._pupY=void 0}_animate(t,e,n){const s=this.speed;let r=this._pitch;this.onGround?Math.abs(s)>2&&(r=Math.atan2(this._vy,Math.abs(s))*(s>0?1:-1)):r=Le(Math.atan2(this._vy,Math.max(6,Math.abs(s)))*.55,-.45,.45),r=Le(r,-.5,.5),this._pitch+=(r-this._pitch)*Math.min(1,(this.onGround?10:5)*t);const a=this.onGround?this.yawRate*s-this.slip*2:0,o=Le(a*.0035*this._rollGain,-.2,.2),l=Le(-e*.0025*this._rollGain,-.1,.12),c=Math.min(1,9*t);this._bodyRoll+=(o-this._bodyRoll)*c,this._bodyPitch+=(l-this._bodyPitch)*c,this._squashVel+=(-260*this._squash-16*this._squashVel)*t,this._squash=Le(this._squash+this._squashVel*t,-.14,.07);const f=Le(e,-60,60);this._antXv+=(-140*this._antX-7*this._antXv-f*.9)*t,this._antX=Le(this._antX+this._antXv*t,-.7,.7),this._antZv+=(-140*this._antZ-7*this._antZv+Le(a,-70,70)*.6)*t,this._antZ=Le(this._antZ+this._antZv*t,-.7,.7),this._wheelSpin+=s*t,n&&this.onGround||(this._rearSpin+=s*t)}_syncMesh(){const t=this.mesh;t.position.copy(this.pos),t.rotation.set(-this._pitch,this.heading+this._spinVis,0,"YXZ");const e=this._body;e&&(e.rotation.set(this._bodyPitch,0,this._bodyRoll),e.position.y=this._squash);const n=this._wheels;if(n){const s=this._radii;n[0].rotation.x=this._wheelSpin/s[0],n[1].rotation.x=this._wheelSpin/s[1],n[2].rotation.x=this._rearSpin/s[2],n[3].rotation.x=this._rearSpin/s[3];const r=this.steerAngle*.5;this._pivots[0].rotation.y=r,this._pivots[1].rotation.y=r}this._antenna&&(this._antenna.rotation.x=this._antBaseX+this._antX,this._antenna.rotation.z=this._antZ)}}const kn=(i,t,e)=>i<t?t:i>e?e:i,Sf=new WeakMap;function O_(i){let t=Sf.get(i);if(t)return t;const e=i.length||600,n=Math.max(64,Math.min(1024,Math.round(e/2))),s=e/n,r=new Float32Array(n),a=new Float32Array(n),o=new Float32Array(n);let l=0;for(let u=0;u<n;u++){const d=i.sample(u/n);r[u]=Math.atan2(d.tangent.x,d.tangent.z),o[u]=d.halfWidth,l+=d.right.x*-d.tangent.z+d.right.z*d.tangent.x}l=l>=0?1:-1;const c=new Float32Array(n);for(let u=0;u<n;u++)c[u]=zc(r[(u+1)%n]-r[(u+n-1)%n])/(2*s);for(let u=0;u<n;u++)a[u]=.25*c[(u+n-1)%n]+.5*c[u]+.25*c[(u+1)%n];const f=(i.obstacles||[]).map(u=>{const d=i.project(new z(u.x,0,u.z));return{t:d.t,lateral:d.lateral,radius:u.radius}}),h=(i.boostPads||[]).map(u=>{const d=i.project(new z(u.x,0,u.z));return{t:d.t,lateral:d.lateral,radius:u.radius}});return t={length:e,n,ds:s,curv:a,hw:o,rightSign:l,obstacles:f,pads:h},Sf.set(i,t),t}function Fo(i,t,e){let n=t-i;return n-=Math.round(n),n*e}let B_=1;class H_{constructor(t,e={}){this.car=t,this.skill=kn(e.skill===void 0?.7:+e.skill,0,1),this.wantsToFire=!1,this.playerProgressDelta=0;const n=B_++;this._phase=n*1.913,this._lanePref=(n*.61803%1-.5)*1.4,this._lane=0,this._time=0,this._stuckTime=0,this._reverseTime=0,this._reverseSteer=0,this._wrongTime=0,this._fireCooldown=1.5+n%5*.6,this._laneInit=!1,this.targetSpeed=0}update(t,e,n){const s=this.car,r=s.controls;if(s.frozen){r.throttle=0,r.steer=0,r.handbrake=!1,this._stuckTime=0,this._reverseTime=0;return}t>.05&&(t=.05),this._time+=t;const a=O_(e),o=s.def,l=this.skill,c=a.length,f=s.speed,h=Math.abs(f),u=s.halfWidth||8;this._laneInit||(this._lane=s.lateral,this._laneInit=!0);const d=1-kn((this.playerProgressDelta||0)*.3,-.06,.08),g=s.topSpeedNow*kn((.8+.2*l)*d,.5,1.02),v=pd(o)*(.55+.33*l)*d,p=ic(o)*(.5+.35*l),m=a.n,x=a.ds,_=s.trackT*m,y=Math.floor(_),T=3+h*(.2-.1*l),S=h*h/(2*p)+T+12,w=Math.min(m,Math.ceil(S/x));let A=g,M=0,b=1e9;for(let xt=0;xt<=w;xt++){const Ct=(y+xt)%m,st=a.curv[Ct],ct=Math.abs(st);if(ct<.004)continue;let D=Math.sqrt(v/ct);if(D<g){for(let J=0;J<6&&ct*D>.85*nc(o,D);J++)D*=.93;const St=Math.max(0,xt*x-T),F=Math.sqrt(D*D+2*p*St);F<A&&(A=F)}ct>.03&&b>1e8&&xt*x<45&&(b=xt*x,M=st>0?1:-1)}const C=Math.max(.5,u-s.radius-.9);let N;if(M!==0?N=-M*a.rightSign*C*(.3+.25*l):N=this._lanePref*C+Math.sin(this._time*.35+this._phase)*(1-l)*1.2,l>.25)for(let xt=0;xt<a.pads.length;xt++){const Ct=a.pads[xt],st=Fo(s.trackT,Ct.t,c);if(st>2&&st<45&&Math.abs(Ct.lateral-s.lateral)<5){N=Ct.lateral;break}}let U=-1,O=!1,H=!1;if(n){const xt=5+h*.55;for(let Ct=0;Ct<n.length;Ct++){const st=n[Ct];if(st===s)continue;const ct=Fo(s.trackT,st.trackT,c),D=st.lateral-s.lateral;if(ct>.5&&ct<xt&&st.speed<f+2){if(Math.abs(st.lateral-N)<2.4){let St=D>0?-1:1,F=st.lateral+St*2.7;Math.abs(F)>C&&(St=-St,F=st.lateral+St*2.7),Math.abs(F)>C&&(F=kn(F,-C,C)),N=F}ct<4.5&&Math.abs(D)<1.7&&(U=U<0?st.speed:Math.min(U,st.speed))}else Math.abs(ct)<=2.4&&Math.abs(D)<2.6&&(N+=D>0?-1:1);ct>5&&ct<34&&Math.abs(D)<2.2&&(O=!0),ct<-1.5&&ct>-9&&Math.abs(D)<2.5&&(H=!0)}}{const xt=12+h*.95;for(let Ct=0;Ct<a.obstacles.length;Ct++){const st=a.obstacles[Ct],ct=Fo(s.trackT,st.t,c);if(ct<-2.5||ct>xt)continue;const D=st.radius+s.radius+.9;if(Math.abs(st.lateral-N)<D){const St=st.lateral-D,F=st.lateral+D,J=St>-C-.3,K=F<C+.3;J&&K?N=Math.abs(St-s.lateral)<Math.abs(F-s.lateral)?St:F:J?N=St:K?N=F:N=st.lateral>0?-C:C}}}N=kn(N,-C,C);const G=5+4*l;this._lane+=kn(N-this._lane,-G*t,G*t);const j=kn(4.5+h*.32,5,17);let W=s.trackT+j/c;W-=Math.floor(W);const V=e.sample(W),Q=kn(this._lane,-(V.halfWidth-s.radius-.6),V.halfWidth-s.radius-.6),et=V.pos.x+V.right.x*Q-s.pos.x,vt=V.pos.z+V.right.z*Q-s.pos.z,R=zc(Math.atan2(et,vt)-s.heading),I=Math.abs(R),k=Math.hypot(et,vt)||1;let q;if(I>1.35)q=R>0?1:-1;else{const xt=Math.max(h,4),Ct=2*xt*Math.sin(R)/k;q=kn(Ct/Math.max(.3,nc(o,xt))*1.25,-1,1)}q+=(1-l)*.14*Math.sin(this._time*2.3+this._phase)*Math.min(1,h/10),I>.7&&(A=Math.min(A,13-5*Math.min(1,(I-.7)/1.2))),U>=0&&(A=Math.min(A,Math.max(6,U+1))),this.targetSpeed=A;const X=A-f;let lt=kn(.45+X*.5,-1,1);lt<0&&f<5&&(lt=0);let Mt=!1;if(s.spinTime>0?(this._stuckTime=0,this._wrongTime=0):(I>1.9?this._wrongTime+=t:this._wrongTime=0,h<1.3&&this._reverseTime<=0?this._stuckTime+=t:h>2.5&&(this._stuckTime=0),this._reverseTime<=0&&(this._stuckTime>1||this._wrongTime>.35&&h<6)&&(this._reverseTime=this._wrongTime>.35?1.5:1.1,I>.15?this._reverseSteer=R>0?-1:1:this._reverseSteer=s.lateral*a.rightSign>0?-1:1,this._stuckTime=0,this._wrongTime=0)),this._reverseTime>0&&(this._reverseTime-=t,lt=-1,q=this._reverseSteer,this._reverseTime>.3&&I<.5&&f<-3&&(this._reverseTime=0)),r.throttle=lt,r.steer=kn(q,-1,1),r.handbrake=Mt,this._fireCooldown-=t,this._fireCooldown<=0&&this._reverseTime<=0&&s.spinTime<=0){const xt=I<.25;O&&xt||H||xt&&A>=g*.98&&f>g*.6?(this.wantsToFire=!0,this._fireCooldown=1.2+(1-l)*3+(this._time*7.3+this._phase)%1*1.5):this._fireCooldown=.25}}}function G_(i){let t=0;const e=i.length;for(let n=0;n<e;n++){const s=i[n];for(let r=n+1;r<e;r++){const a=i[r];if(s.frozen&&a.frozen||Math.abs(s.pos.y-a.pos.y)>.9)continue;let o=a.pos.x-s.pos.x,l=a.pos.z-s.pos.z;const c=(s.radius+a.radius)*.82,f=o*o+l*l;if(f>=c*c)continue;let h=Math.sqrt(f);h<1e-4&&(o=Math.sin(n*2.4+r),l=Math.cos(n*2.4+r),h=1);const u=o/h,d=l/h,g=s.def?s.def.mass:1,v=a.def?a.def.mass:1,p=s.frozen?0:1/g,m=a.frozen?0:1/v,x=p+m;if(x<=0)continue;const _=c-h,y=_*(p/x),T=_*(m/x);s.pos.x-=u*y,s.pos.z-=d*y,a.pos.x+=u*T,a.pos.z+=d*T;const S=(a.vel.x-s.vel.x)*u+(a.vel.z-s.vel.z)*d;if(S<0){const w=-1.45*S/x;s.vel.x-=u*w*p,s.vel.z-=d*w*p,a.vel.x+=u*w*m,a.vel.z+=d*w*m,-S>t&&(t=-S),s.carHit!==void 0&&(s.carHit=Math.max(s.carHit,-S)),a.carHit!==void 0&&(a.carHit=Math.max(a.carHit,-S))}}}return t}const on=[{id:"rocket",name:"Fizz Rocket",icon:"🚀",description:"A shaken-up bottle rocket. Chases the racer ahead and pops them into the air."},{id:"turbo",name:"Turbo Cell",icon:"🔋",description:"An overcharged battery. A couple of seconds of flat-out extra speed."},{id:"glue",name:"Goo Blob",icon:"🟢",description:"Drops a sticky puddle behind you. Anyone who drives through it spins out."},{id:"pulse",name:"Zap Ring",icon:"⚡",description:"A static shock-wave that bursts outward and scrambles every car close to you."},{id:"marble",name:"Mega Marble",icon:"🔮",description:"A giant glass marble that rolls down the track, bouncing off the walls."},{id:"shield",name:"Bubble Shield",icon:"🫧",description:"A soapy force bubble. Shrugs off the next hit for a few seconds."},{id:"zaptow",name:"Magna Tug",icon:"🧲",description:"A crackling magnet beam. Latches onto the racer ahead and reels you in while they drag."},{id:"shockcloud",name:"Grumble Cloud",icon:"🌩️",description:"A grumpy little storm. Zaps everyone ahead of you tiny and slow for a moment."},{id:"pogo",name:"Pogo Spring",icon:"🦘",description:"A giant spring under the chassis. Hop clean over goo, marbles and rivals — the landing thump shoves cars nearby."}],md=Object.create(null);for(const i of on)md[i.id]=i;const Qt={rocket:{spin:1.1,launch:5.5,impulse:4,life:4,turn:3.2},turbo:{boost:2.4},glue:{spin:.9,slow:.45,life:18,radius:2,arm:1.2},pulse:{spin:.9,launch:3.5,impulse:5,radius:10,duration:.45},marble:{spin:.8,launch:4,impulse:9,life:7,speed:46,radius:.75},shield:{time:6},zaptow:{time:2.5,range:45,snap:62,pull:30,top:1.22,slow:.88,fizzleBoost:.7},shockcloud:{time:2.5,slow:.65,scale:.6},pogo:{launch:14,kick:9,radius:6.5,nudge:6,hop:2.5,ring:.4}},sc=2.5,V_=2.5,un=new Float32Array(on.length);function W_(i,t,e=Math.random){const n=t>1?(i-1)/(t-1):.5,s=1-Math.abs(2*n-1);un[0]=.35+1.7*n,un[1]=.55+1.7*n,un[2]=1.5-1.05*n,un[3]=.55+.8*s,un[4]=.75+.45*n,un[5]=1.5-1.15*n,un[6]=.2+.7*n+.6*s,un[7]=.03+1.25*n*n,un[8]=.6;let r=0;for(let o=0;o<un.length;o++)r+=un[o];let a=e()*r;for(let o=0;o<un.length;o++)if(a-=un[o],a<=0)return on[o];return on[on.length-1]}const X_=`
attribute vec4 aColor;
attribute float aSize;
uniform float uPx;
varying vec4 vColor;
void main() {
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPx * projectionMatrix[1][1] / max(0.1, -mv.z);
}`,q_=`
varying vec4 vColor;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d) * 2.0;
  float a = smoothstep(1.0, 0.15, r) * vColor.a;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor.rgb, a);
}`,Tf=new mt;class Ef{constructor(t=1024,e=!0){this.capacity=t,this.count=0,this._pos=new Float32Array(t*3),this._col=new Float32Array(t*4),this._siz=new Float32Array(t),this._sim=new Float32Array(t*10);const n=this.geometry=new ge;this._aPos=new ee(this._pos,3),this._aCol=new ee(this._col,4),this._aSiz=new ee(this._siz,1),this._aPos.setUsage(dr),this._aCol.setUsage(dr),this._aSiz.setUsage(dr),n.setAttribute("position",this._aPos),n.setAttribute("aColor",this._aCol),n.setAttribute("aSize",this._aSiz),n.setDrawRange(0,0),this.material=new $e({uniforms:{uPx:{value:360}},vertexShader:X_,fragmentShader:q_,transparent:!0,depthWrite:!1,blending:e?Tn:Vi}),this.points=new Bv(n,this.material),this.points.frustumCulled=!1,this.points.renderOrder=e?11:10;const s=this.material.uniforms.uPx;this.points.onBeforeRender=r=>{r.getDrawingBufferSize(Tf),s.value=Tf.y*.5}}emit(t,e,n,s,r,a,o,l,c,f,h,u,d,g,v){if(this.count>=this.capacity)return;const p=this.count++,m=p*3,x=p*4,_=p*10;this._pos[m]=t,this._pos[m+1]=e,this._pos[m+2]=n,this._col[x]=f,this._col[x+1]=h,this._col[x+2]=u,this._col[x+3]=d,this._siz[p]=l;const y=this._sim;y[_]=s,y[_+1]=r,y[_+2]=a,y[_+3]=o,y[_+4]=o,y[_+5]=l,y[_+6]=c,y[_+7]=d,y[_+8]=g||0,y[_+9]=v||0}burst(t,e,n,s,r,a,o,l,c,f,h,u,d,g,v=.5,p=Math.random){for(let m=0;m<s;m++){const x=p()*Math.PI*2,_=(p()-.5+v)*1.6,y=r*(.35+p()*.65),T=Math.cos(Math.atan(_));this.emit(t,e,n,Math.sin(x)*y*T,Math.sin(Math.atan(_))*y,Math.cos(x)*y*T,a*(.6+p()*.4),o,l,c,f,h,u,d,g)}}update(t){const e=this._pos,n=this._col,s=this._siz,r=this._sim;let a=this.count;for(let o=0;o<a;){const l=o*10,c=r[l+3]-t;if(c<=0){if(a--,o!==a){const d=o*3,g=o*4,v=a*3,p=a*4,m=a*10;e[d]=e[v],e[d+1]=e[v+1],e[d+2]=e[v+2],n[g]=n[p],n[g+1]=n[p+1],n[g+2]=n[p+2],n[g+3]=n[p+3],s[o]=s[a];for(let x=0;x<10;x++)r[l+x]=r[m+x]}continue}r[l+3]=c;const f=o*3,h=r[l+9];if(h>0){const d=Math.max(0,1-h*t);r[l]*=d,r[l+1]*=d,r[l+2]*=d}r[l+1]-=r[l+8]*t,e[f]+=r[l]*t,e[f+1]+=r[l+1]*t,e[f+2]+=r[l+2]*t;const u=c/r[l+4];s[o]=r[l+6]+(r[l+5]-r[l+6])*u,n[o*4+3]=r[l+7]*(u<.6?u/.6:1),o++}this.count=a,this.geometry.setDrawRange(0,a),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSiz.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose(),this.points.onBeforeRender=()=>{}}}function rc(i,t){if(typeof document>"u")return null;const e=document.createElement("canvas");e.width=e.height=i;const n=e.getContext("2d");if(!n)return null;t(n,i);const s=new Ec(e);return"colorSpace"in s&&(s.colorSpace=je),s.anisotropy=4,s}const Y_=6,Af=2.5,Cf=2.1,ua=new re,da=new z,Rf=new Cn,pa=new z,Pf=new Qe,Lf=new Cn;class j_{constructor(t,e){this.race=t,this.replica=!!t._replica;const n=e.length;this.spots=[];for(let r=0;r<n;r++){const a=e[r];this.spots.push({x:a.x,y:a.y||0,z:a.z,timer:0,scale:1,phase:r*1.7,off:!1,pred:0})}const s=this.tex=rc(128,(r,a)=>{const o=r.createLinearGradient(0,0,a,a);o.addColorStop(0,"#ffd23f"),o.addColorStop(.5,"#ff7a1a"),o.addColorStop(1,"#ff3d7f"),r.fillStyle=o,r.fillRect(0,0,a,a),r.lineWidth=12,r.strokeStyle="#fff6c8",r.strokeRect(6,6,a-12,a-12),r.fillStyle="#ffffff",r.font="bold 92px sans-serif",r.textAlign="center",r.textBaseline="middle",r.shadowColor="rgba(120,30,0,0.8)",r.shadowBlur=8,r.fillText("?",a/2,a/2+6)});this.boxGeo=new xn(1.3,1.3,1.3),this.boxMat=new Pe({color:s?16777215:16753692,map:s,emissive:s?16777215:16742938,emissiveMap:s,emissiveIntensity:.65,roughness:.35,metalness:.1}),this.boxes=new ka(this.boxGeo,this.boxMat,Math.max(1,n)),this.boxes.count=n,this.boxes.frustumCulled=!1,this.boxes.instanceMatrix.setUsage(dr),this.ringGeo=new qa(.75,1.25,28),this.ringMat=new be({color:16762698,transparent:!0,opacity:.55,blending:Tn,depthWrite:!1,side:He}),this.rings=new ka(this.ringGeo,this.ringMat,Math.max(1,n)),this.rings.count=n,this.rings.frustumCulled=!1,this.rings.instanceMatrix.setUsage(dr),this.rings.renderOrder=5,Lf.setFromAxisAngle(new z(1,0,0),-Math.PI/2),t.root.add(this.boxes,this.rings),this._sparkAcc=0,this.update(0,0)}get activeCount(){let t=0;for(const e of this.spots)e.timer<=0&&t++;return t}mask(){const t=[0];for(let e=0;e<this.spots.length;e++){const n=e/30|0;for(;t.length<=n;)t.push(0);this.spots[e].timer>0&&(t[n]|=1<<e%30)}return t}setMask(t){if(Array.isArray(t))for(let e=0;e<this.spots.length;e++){const n=t[e/30|0];this.spots[e].off=typeof n=="number"?!!(n&1<<e%30):!1}}_updateReplica(t){const e=this.race,n=e.fx,s=e.random,r=this.spots,a=e._pst,o=a&&!a.pup&&!a.item&&!a.finished&&e.state!=="countdown",l=a?a.car.pos:null;for(let c=0;c<r.length;c++){const f=r[c];if(f.pred>0&&(f.pred-=t),o&&!f.off&&f.timer<=0){const u=l.x-f.x,d=l.z-f.z;u*u+d*d<Cf*Cf&&Math.abs(l.y-f.y)<3&&(f.pred=.6)}const h=f.off||f.pred>0;h&&f.timer<=0?(f.timer=1,n.burst(f.x,f.y+1.1,f.z,22,9,.5,.7,.1,1,.75,.25,1,6,1.5,.5,s)):!h&&f.timer>0&&(f.timer=0,n.burst(f.x,f.y+1.1,f.z,10,4,.4,.5,.1,1,.9,.5,.9,0,2,.5,s))}}update(t,e){const n=this.race,s=n.fx,r=n.random,a=this.spots;if(this.replica)this._updateReplica(t);else if(n.state!=="countdown"){const o=n.states;for(let l=0;l<o.length;l++){const c=o[l];if(c.item||c.finished)continue;const f=c.car.pos;for(let h=0;h<a.length;h++){const u=a[h];if(u.timer>0)continue;const d=f.x-u.x,g=f.z-u.z;if(d*d+g*g<Af*Af&&Math.abs(f.y-u.y)<3){u.timer=Y_,s.burst(u.x,u.y+1.1,u.z,22,9,.5,.7,.1,1,.75,.25,1,6,1.5,.5,r),n._givePickup(c);break}}}}this._sparkAcc+=t*.9*a.length;for(let o=0;o<a.length;o++){const l=a[o];l.timer>0&&!this.replica&&(l.timer-=t,l.timer<=0&&(l.timer=0,s.burst(l.x,l.y+1.1,l.z,10,4,.4,.5,.1,1,.9,.5,.9,0,2,.5,r)));const c=l.timer>0?0:1;l.scale+=(c-l.scale)*Math.min(1,t*10);const f=l.scale<.01?0:l.scale,h=Math.sin(e*2.4+l.phase)*.18;da.set(l.x,l.y+1.15+h,l.z),Pf.set(.5,e*1.9+l.phase,.35),Rf.setFromEuler(Pf),pa.set(f,f,f),ua.compose(da,Rf,pa),this.boxes.setMatrixAt(o,ua);const u=f*(1+.12*Math.sin(e*5+l.phase));da.set(l.x,l.y+.06,l.z),pa.set(u,u,u),ua.compose(da,Lf,pa),this.rings.setMatrixAt(o,ua)}for(;this._sparkAcc>=1&&a.length;){this._sparkAcc-=1;const o=a[r()*a.length|0];o.timer>0||s.emit(o.x+(r()-.5)*1.4,o.y+.5+r()*1.2,o.z+(r()-.5)*1.4,0,1.2+r(),0,.7,.35,.05,1,.85,.4,.9,0,0)}this.boxes.instanceMatrix.needsUpdate=!0,this.rings.instanceMatrix.needsUpdate=!0}dispose(){this.race.root.remove(this.boxes,this.rings),this.boxes.dispose(),this.rings.dispose(),this.boxGeo.dispose(),this.boxMat.dispose(),this.ringGeo.dispose(),this.ringMat.dispose(),this.tex&&this.tex.dispose()}}const Fa=Math.PI*2,Oo=new z,sr=new z;function If(i){for(;i>Math.PI;)i-=Fa;for(;i<-Math.PI;)i+=Fa;return i}class Z_{constructor(t){this.race=t,this.replica=!!t._replica,this.rockets=[],this.marbles=[],this.puddles=[],this.pulses=[],this.rings=[],this._res=[];const e=h=>(h&&this._res.push(h),h),n=new ye(.17,.17,.9,10);n.rotateX(Math.PI/2);const s=new vn(.2,.42,10);s.rotateX(Math.PI/2),s.translate(0,0,.66);const r=new ye(.035,.035,1.5,5);r.rotateX(Math.PI/2),r.translate(.16,-.05,-.9);const a=new xn(.5,.04,.26);a.translate(0,0,-.4),this.rocketGeo={body:e(n),nose:e(s),stick:e(r),fin:e(a)},this.rocketMat={body:e(new Pe({color:15921906,roughness:.4,emissive:3355443})),nose:e(new Pe({color:16724804,roughness:.35,emissive:6688792})),stick:e(new Pe({color:13214315,roughness:.8}))},this.glowTex=e(rc(64,(h,u)=>{const d=h.createRadialGradient(u/2,u/2,0,u/2,u/2,u/2);d.addColorStop(0,"rgba(255,255,255,1)"),d.addColorStop(.3,"rgba(255,220,140,0.7)"),d.addColorStop(1,"rgba(255,120,20,0)"),h.fillStyle=d,h.fillRect(0,0,u,u)})),this.glowMat=e(new Tc({map:this.glowTex,color:16760944,transparent:!0,opacity:this.glowTex?.9:0,blending:Tn,depthWrite:!1})),this.marbleGeo=e(new ze(Qt.marble.radius,20,14)),this.marbleTex=e(rc(128,(h,u)=>{h.fillStyle="#bfe9ff",h.fillRect(0,0,u,u);const d=["#2f6bff","#ff4fa3","#ffe14a","#ffffff"];for(let g=0;g<4;g++){h.strokeStyle=d[g],h.lineWidth=12,h.beginPath();for(let v=0;v<=u;v+=4){const p=u*(.2+g*.2)+Math.sin(v/u*Fa*2+g)*14;v===0?h.moveTo(v,p):h.lineTo(v,p)}h.stroke()}})),this.marbleMat=e(new Pe({color:this.marbleTex?16777215:8376575,map:this.marbleTex,emissive:2245836,emissiveIntensity:.45,roughness:.12,metalness:.25}));const o=new br(1,22),l=o.attributes.position;for(let h=1;h<l.count;h++){const u=Math.atan2(l.getY(h),l.getX(h)),d=1+.16*Math.sin(u*3+.6)+.1*Math.sin(u*7+2);l.setXY(h,l.getX(h)*d,l.getY(h)*d)}o.rotateX(-Math.PI/2),this.gooGeo=e(o),this.gooMat=e(new Pe({color:8843324,emissive:2914816,emissiveIntensity:.6,roughness:.15,metalness:0,transparent:!0,opacity:.92,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));const c=new qa(.8,1,48);c.rotateX(-Math.PI/2),this.ringGeo=e(c),this.shieldGeo=e(new ze(1.55,18,12)),this.shieldMat=e(new be({color:8382975,transparent:!0,opacity:.28,blending:Tn,depthWrite:!1}));const f=new ye(.09,.09,1,6,1,!0);f.rotateX(Math.PI/2),f.translate(0,0,.5),this.beamGeo=e(f),this.beamMat=e(new be({color:16739029,transparent:!0,opacity:.85,blending:Tn,depthWrite:!1,side:He})),this.cloudGeo=e(new ze(.5,10,7)),this.cloudMat=e(new Pe({color:5988469,emissive:2303546,roughness:.95}))}use(t,e){switch(e){case"rocket":this._fireRocket(t);break;case"turbo":this._turbo(t);break;case"glue":this._dropGoo(t);break;case"pulse":this._pulse(t);break;case"marble":this._rollMarble(t);break;case"shield":this._shield(t);break;case"zaptow":this._tow(t);break;case"shockcloud":this._storm(t);break;case"pogo":this._pogo(t);break}}_turbo(t,e=Qt.turbo.boost){const n=t.car;n.boostTime=Math.max(n.boostTime||0,e),t.wasBoosting=!0,t.pup&&this.race._net&&this.race._net.effect(t,"turbo",0,0,0,0,0,e),this.race._boostBurst(t),this.race._emit("boost",n)}_shield(t,e=Qt.shield.time,n=!1){if(t.shieldTime=e,t.shieldMesh||(t.shieldMesh=new Dt(this.shieldGeo,this.shieldMat),t.shieldMesh.renderOrder=8,this.race.root.add(t.shieldMesh)),t.shieldMesh.visible=!0,n)return;const s=t.car.pos;this.race.fx.burst(s.x,s.y+.6,s.z,16,5,.45,.5,.1,.5,.9,1,.9,0,2,.5,this.race.random)}_fireRocket(t){const e=this.race,n=t.car,s=n.heading,r=Math.sin(s),a=Math.cos(s),o=this._spawnRocket(++e._nextId,n.pos.x+r*1.9,n.pos.y+.75,n.pos.z+a*1.9,s,Math.max(52,Math.max(0,n.speed||0)+30));o.owner=t,o.target=e._targetAhead(t,.35),o.t=n.trackT}_spawnRocket(t,e,n,s,r,a){const o=new pn;o.add(new Dt(this.rocketGeo.body,this.rocketMat.body),new Dt(this.rocketGeo.nose,this.rocketMat.nose),new Dt(this.rocketGeo.stick,this.rocketMat.stick),new Dt(this.rocketGeo.fin,this.rocketMat.nose));const l=new Yu(this.glowMat);l.scale.set(1.6,1.6,1),l.position.z=-.6,o.add(l);const c={id:t,owner:null,target:null,mesh:o,pos:new z(e,n,s),ang:r,speed:a,life:Qt.rocket.life,t:void 0,age:0,net:null,nt:0};return o.position.copy(c.pos),o.rotation.y=r,this.race.root.add(o),this.rockets.push(c),c}_rollMarble(t){const e=this.race,n=t.car,s=n.heading,r=Math.sin(s),a=Math.cos(s),o=this._spawnMarble(++e._nextId,n.pos.x+r*2.2,n.pos.y+Qt.marble.radius,n.pos.z+a*2.2,r,a,Math.max(Qt.marble.speed,Math.max(0,n.speed||0)+16));o.owner=t,o.t=n.trackT}_spawnMarble(t,e,n,s,r,a,o){const l=new Dt(this.marbleGeo,this.marbleMat);l.castShadow=!0;const c={id:t,owner:null,mesh:l,pos:new z(e,n,s),dx:r,dz:a,speed:o,life:Qt.marble.life,t:void 0,age:0,net:null,nt:0};return l.position.copy(c.pos),this.race.root.add(l),this.marbles.push(c),c}_dropGoo(t){const e=this.race,n=t.car,s=n.heading,r=n.pos.x-Math.sin(s)*2.6,a=n.pos.z-Math.cos(s)*2.6;Oo.set(r,n.pos.y,a);const o=e.track.project(Oo,n.trackT),l=o&&Number.isFinite(o.y)?o.y:n.pos.y;this._spawnPuddle(++e._nextId,r,l,a).owner=t}_spawnPuddle(t,e,n,s){const r=this.race,a=new Dt(this.gooGeo,this.gooMat);a.position.set(e,n+.07,s),a.rotation.y=r.random()*Fa,a.scale.setScalar(.01),a.renderOrder=2,r.root.add(a);const o={id:t,owner:null,mesh:a,x:e,y:n,z:s,life:this.replica?1/0:Qt.glue.life,age:0,radius:Qt.glue.radius,dying:0};return this.puddles.push(o),r.fx.burst(e,n+.3,s,10,4,.4,.5,.15,.5,1,.25,.9,12,1,.6,r.random),o}_pulse(t){const e=this.race,n=new be({color:10475775,transparent:!0,opacity:.95,blending:Tn,depthWrite:!1,side:He}),s=new Dt(this.ringGeo,n);s.renderOrder=9,s.scale.setScalar(.1),e.root.add(s),this.pulses.push({owner:t,mesh:s,mat:n,age:0,hit:new Uint8Array(e.states.length)});const r=t.car.pos;e.fx.burst(r.x,r.y+.5,r.z,40,22,.4,.55,.1,.6,.85,1,1,0,3,.15,e.random)}_towTarget(t){const e=this.race,n=e.states,s=Qt.zaptow,r=e.track.length||500,a=t.car.pos,o=s.range+10;let l=null,c=s.range/r;for(let f=0;f<n.length;f++){const h=n[f];if(h===t||h.finished)continue;let u=(h.progress-t.progress)%1;if(u<0&&(u+=1),u>=c)continue;const d=h.car.pos.x-a.x,g=h.car.pos.z-a.z;d*d+g*g>o*o||(c=u,l=h)}return l}_tow(t){const e=this.race,n=Qt.zaptow,s=t.car.pos,r=this._towTarget(t);if(!r){e.fx.burst(s.x,s.y+.6,s.z,14,6,.4,.4,.08,1,.45,.85,.9,0,2,.5,e.random),this._turbo(t,n.fizzleBoost);return}e._slowHit(r,"zaptow",n.time,n.slow,!1)!==2&&(this._latch(t,r,n.time),e._emit("tow",t.car,r.car,n.time))}_latch(t,e,n){if(!e||e===t||!(n>0))return;t.towTarget=e,t.towTime=Math.min(Qt.zaptow.time,n),t.towMesh||(t.towMesh=new Dt(this.beamGeo,this.beamMat),t.towMesh.renderOrder=9,t.towMesh.frustumCulled=!1,this.race.root.add(t.towMesh)),this._beam(t,0);const s=t.car.pos,r=e.car.pos,a=this.race.fx,o=this.race.random;a.burst(s.x,s.y+.6,s.z,10,5,.35,.4,.08,1,.45,.85,1,0,2,.5,o),a.burst(r.x,r.y+.6,r.z,10,5,.35,.4,.08,.5,.75,1,1,0,2,.5,o)}_unlatch(t){t.towTarget=null,t.towTime=0,t.towMesh&&(t.towMesh.visible=!1)}_beam(t,e){const n=t.towMesh,s=t.car.pos,r=t.towTarget.car.pos,a=r.x-s.x,o=r.y-s.y,l=r.z-s.z,c=Math.sqrt(a*a+o*o+l*l);if(!(c>.2))return n.visible=!1,c;n.visible=!0,n.position.set(s.x,s.y+.55,s.z),n.lookAt(r.x,r.y+.55,r.z);const f=1+.35*Math.sin(e*43+t.index);return n.scale.set(f,f,c),c}_storm(t){const e=this.race,n=e.states,s=Qt.shockcloud;this._stormFx(t);for(let r=0;r<n.length;r++){const a=n[r];a===t||a.finished||a.position>=t.position||e._slowHit(a,"shockcloud",s.time,s.slow,!0)}}_stormFx(t){const e=t.car.pos,n=this.race;n.smoke.burst(e.x,e.y+1.2,e.z,10,3,.9,.8,2.4,.4,.42,.55,.5,-3,1.5,.9,n.random),n.fx.burst(e.x,e.y+1.4,e.z,18,9,.4,.4,.06,1,.95,.4,1,0,2,.9,n.random)}_shrink(t,e){if(t.shrinkTime=Math.min(Qt.shockcloud.time,e),!t.cloudMesh){const n=new pn,s=new Dt(this.cloudGeo,this.cloudMat),r=new Dt(this.cloudGeo,this.cloudMat),a=new Dt(this.cloudGeo,this.cloudMat);s.scale.set(1.5,.8,1.1),r.position.set(.55,.12,.1),r.scale.set(1,.75,.9),a.position.set(-.55,.08,-.1),a.scale.set(1.1,.7,.9),n.add(s,r,a),t.cloudMesh=n,this.race.root.add(n)}t.cloudMesh.visible=!0}_pogo(t){const e=this.race,n=t.car,s=Qt.pogo;t.pup&&e._net?e._net.effect(t,"pogo",0,s.launch,0,0,0,0,0,0,s.kick):(n.launch(s.launch),n.applyImpulse(Oo.set(Math.sin(n.heading)*s.kick,0,Math.cos(n.heading)*s.kick))),this._pogoArm(t)}_pogoArm(t){const e=t.car.pos,n=this.race;t.pogo=1,t.pogoT=0,n.fx.burst(e.x,e.y+.2,e.z,16,7,.35,.45,.08,1,.8,.3,1,14,1,.2,n.random),n.smoke.burst(e.x,e.y+.2,e.z,6,3,.6,.6,1.8,.85,.85,.85,.35,0,1.5,.2,n.random)}_pogoLand(t){const e=this.race,n=e.states,s=Qt.pogo,r=t.car.pos,a=new be({color:16766826,transparent:!0,opacity:.9,blending:Tn,depthWrite:!1,side:He}),o=new Dt(this.ringGeo,a);if(o.renderOrder=9,o.position.set(r.x,r.y+.2,r.z),o.scale.setScalar(.1),e.root.add(o),this.rings.push({mesh:o,mat:a,age:0}),e.smoke.burst(r.x,r.y+.2,r.z,10,5,.7,.6,2,.8,.8,.8,.4,0,2,.15,e.random),e._emit("land",t.car,"pogo"),!this.replica)for(let l=0;l<n.length;l++){const c=n[l];if(c===t)continue;const f=c.car.pos,h=f.x-r.x,u=f.z-r.z,d=Math.hypot(h,u);if(d<s.radius+(c.car.radius||1)&&Math.abs(f.y-r.y)<2){const g=d>.001?1/d:0;e._hit(c,"pogo",0,s.hop,h*g*s.nudge,u*g*s.nudge)}}}_updateStatus(t,e){const n=this.race,s=n.states,r=n.fx,a=n.random,o=Qt.zaptow,l=Qt.shockcloud.scale;for(let f=0;f<s.length;f++){const h=s[f],u=h.car,d=u.pos;h.slowTime>0&&(h.slowTime-=t),h.slowImmune>0&&(h.slowImmune-=t);let g=1;h.shrinkTime>0&&(h.shrinkTime-=t,h.shrinkTime>0&&(g=l)),h.scaleVis!==g&&(h.scaleVis+=(g-h.scaleVis)*Math.min(1,12*t),Math.abs(g-h.scaleVis)<.004&&(h.scaleVis=g),u.mesh&&u.mesh.scale.setScalar(h.scaleVis));const v=h.cloudMesh;if(v)if(h.shrinkTime>0)for(v.visible=!0,v.position.set(d.x,d.y+1.55+.08*Math.sin(e*6+f),d.z),v.rotation.y=e*.8+f,h.cloudAcc+=t*16;h.cloudAcc>=1;)h.cloudAcc-=1,r.emit(d.x+(a()-.5)*1.2,d.y+1.4,d.z+(a()-.5)*1.2,(a()-.5)*2,-3-a()*4,(a()-.5)*2,.22,.3,.05,1,.95,.35,1,0,0);else v.visible&&(v.visible=!1);const p=h.towTarget;if(p){h.towTime-=t;let m=0;if(h.towTime>0&&(m=this._beam(h,e)),!(h.towTime>0)||!this.replica&&(m>o.snap||p.finished||h.finished))this._unlatch(h);else if(a()<.5){const x=a(),_=p.car.pos;r.emit(d.x+(_.x-d.x)*x,d.y+.55+(_.y-d.y)*x,d.z+(_.z-d.z)*x,(a()-.5)*3,a()*2,(a()-.5)*3,.2,.3,.05,x<.5?1:.5,x<.5?.45:.75,x<.5?.85:1,1,0,0)}}h.pogo&&(h.pogoT+=t,h.pogo===1?u.onGround===!1&&(h.pogo=2):u.onGround!==!1&&h.pogoT>.15&&(h.pogo=0,this._pogoLand(h)),h.pogoT>3&&(h.pogo=0))}const c=Qt.pogo;for(let f=this.rings.length-1;f>=0;f--){const h=this.rings[f];h.age+=t;const u=Math.min(1,h.age/c.ring),d=c.radius*(1-(1-u)*(1-u));h.mesh.scale.set(d,1,d),h.mat.opacity=.9*(1-u*u),u>=1&&(n.root.remove(h.mesh),h.mat.dispose(),this.rings.splice(f,1))}}update(t,e){this.replica?this._updateReplica(t):(this._updateRockets(t),this._updateMarbles(t)),this._updatePuddles(t,e),this._updatePulses(t),this._updateShields(t,e),this._updateStatus(t,e)}sync(t,e,n,s){this.replica&&(this._syncList(this.rockets,t,6,s,0),this._syncList(this.marbles,e,7,s,1),this._syncList(this.puddles,n,4,s,2))}_syncList(t,e,n,s,r){const a=this.race.fx,o=this.race.random;Array.isArray(e)||(e=[]);for(let l=0;l<t.length;l++)t[l]._seen=!1;for(let l=0;l<e.length&&l<64;l++){const c=e[l];if(!Array.isArray(c)||c.length<n)continue;let f=!0;for(let u=0;u<n;u++)if(typeof c[u]!="number"||!Number.isFinite(c[u])){f=!1;break}if(!f)continue;let h=null;for(let u=0;u<t.length;u++)if(t[u].id===c[0]){h=t[u];break}h||(r===0?h=this._spawnRocket(c[0],c[1],c[2],c[3],c[4],c[5]):r===1?h=this._spawnMarble(c[0],c[1],c[2],c[3],c[4],c[5],c[6]):h=this._spawnPuddle(c[0],c[1],c[2],c[3])),h._seen=!0,h.net=c,h.nt=s}for(let l=t.length-1;l>=0;l--){const c=t[l];if(!c._seen){if(r===2){c.dying||(c.dying=1e-4);continue}r===0?this._explode(c.pos.x,c.pos.y,c.pos.z,!0):a.burst(c.pos.x,c.pos.y,c.pos.z,30,12,.5,.6,.1,.6,.85,1,1,12,1,.6,o),this.race.root.remove(c.mesh),t.splice(l,1)}}}_updateReplica(t){const e=this.race,n=e._net?e._net.wallNow:0,s=1-Math.exp(-10*t);for(let a=0;a<this.rockets.length;a++){const o=this.rockets[a],l=o.net;if(o.age+=t,l){let c=n-o.nt;c=c<0?0:c>.5?.5:c,o.ang+=If(l[4]-o.ang)*s,o.speed=l[5];const f=Math.sin(o.ang),h=Math.cos(o.ang);o.pos.x+=f*o.speed*t,o.pos.z+=h*o.speed*t,o.pos.x+=(l[1]+Math.sin(l[4])*l[5]*c-o.pos.x)*s,o.pos.z+=(l[3]+Math.cos(l[4])*l[5]*c-o.pos.z)*s,o.pos.y+=(l[2]-o.pos.y)*s}o.mesh.position.copy(o.pos),o.mesh.rotation.y=o.ang,o.mesh.rotation.z+=t*9,this._rocketTrail(o,Math.sin(o.ang),Math.cos(o.ang))}const r=Qt.marble.radius;for(let a=0;a<this.marbles.length;a++){const o=this.marbles[a],l=o.net;if(o.age+=t,l){let c=n-o.nt;c=c<0?0:c>.5?.5:c,o.dx=l[4],o.dz=l[5],o.speed=l[6],o.pos.x+=o.dx*o.speed*t,o.pos.z+=o.dz*o.speed*t,o.pos.x+=(l[1]+l[4]*l[6]*c-o.pos.x)*s,o.pos.z+=(l[3]+l[5]*l[6]*c-o.pos.z)*s,o.pos.y+=(l[2]-o.pos.y)*s}o.mesh.position.copy(o.pos),sr.set(o.dz,0,-o.dx),sr.lengthSq()>1e-6&&o.mesh.rotateOnWorldAxis(sr.normalize(),o.speed*t/r),this._marbleTrail(o)}}_rocketTrail(t,e,n){const s=this.race,r=s.fx,a=s.random;r.emit(t.pos.x-e*.7,t.pos.y,t.pos.z-n*.7,-e*6+(a()-.5)*2,(a()-.5)*2,-n*6+(a()-.5)*2,.28,.6,.1,1,.7+a()*.3,.25,1,0,0),a()<.5&&s.smoke.emit(t.pos.x-e,t.pos.y,t.pos.z-n,0,.8,0,.6,.4,1.4,.8,.8,.8,.3,0,1)}_marbleTrail(t){const e=this.race.fx,n=this.race.random,s=Qt.marble.radius;n()<.5&&e.emit(t.pos.x,t.pos.y-s*.6,t.pos.z,(n()-.5)*3,1+n()*2,(n()-.5)*3,.35,.35,.05,.6,.85,1,.9,6,0)}_explode(t,e,n,s){const r=this.race.fx,a=this.race.smoke,o=this.race.random;r.burst(t,e,n,s?46:24,s?17:11,.55,.9,.15,1,.62,.18,1,14,1.2,.55,o),r.burst(t,e,n,s?12:6,5,.3,2.6,.6,1,.9,.6,.9,0,3,.5,o),a.burst(t,e+.3,n,s?12:6,4,.9,1,3,.55,.55,.55,.5,-1.5,1.5,.7,o)}_updateRockets(t){const e=this.race,n=e.track,s=e.states;e.fx,e.random;const r=n.length||500;for(let a=this.rockets.length-1;a>=0;a--){const o=this.rockets[a];o.life-=t,o.age+=t;let l=o.life<=0,c=n.project(o.pos,o.t);c&&Number.isFinite(c.t)?o.t=c.t:c=null;let f=NaN,h=NaN;const u=o.target;if(u){const m=u.car.pos,x=m.x-o.pos.x,_=m.z-o.pos.z;x*x+_*_<34*34&&(f=m.x,h=m.z)}if(f!==f){let m=(o.t+16/r)%1;m<0&&(m+=1);const x=n.sample(m);x&&x.pos&&(f=x.pos.x,h=x.pos.z)}if(f===f){const m=Math.atan2(f-o.pos.x,h-o.pos.z),x=If(m-o.ang),_=Qt.rocket.turn*t;o.ang+=x>_?_:x<-_?-_:x}const d=Math.sin(o.ang),g=Math.cos(o.ang);o.pos.x+=d*o.speed*t,o.pos.z+=g*o.speed*t,c&&Number.isFinite(c.y)&&(o.pos.y+=(c.y+.75-o.pos.y)*Math.min(1,t*10)),o.mesh.position.copy(o.pos),o.mesh.rotation.y=o.ang,o.mesh.rotation.z+=t*9,this._rocketTrail(o,d,g),c&&Math.abs(c.lateral)>c.halfWidth+.4&&(l=!0);const v=n.obstacles;if(v&&!l)for(let m=0;m<v.length;m++){const x=v[m],_=x.x-o.pos.x,y=x.z-o.pos.z,T=x.radius+.3;if(_*_+y*y<T*T){l=!0;break}}let p=!1;if(!l)for(let m=0;m<s.length;m++){const x=s[m];if(x===o.owner)continue;const _=x.car.pos,y=_.x-o.pos.x,T=_.z-o.pos.z,S=(x.car.radius||1)+.75;if(y*y+T*T<S*S&&Math.abs(_.y+.5-o.pos.y)<2.6){e._hit(x,"rocket",Qt.rocket.spin,Qt.rocket.launch,d*Qt.rocket.impulse,g*Qt.rocket.impulse),l=p=!0;break}}l&&(this._explode(o.pos.x,o.pos.y,o.pos.z,!0),p||e._emit("explode",o.pos,"rocket"),e.root.remove(o.mesh),this.rockets.splice(a,1))}}_updateMarbles(t){const e=this.race,n=e.track,s=e.states,r=e.fx,a=e.random,o=Qt.marble.radius;for(let l=this.marbles.length-1;l>=0;l--){const c=this.marbles[l];c.life-=t,c.age+=t;let f=c.life<=0;c.pos.x+=c.dx*c.speed*t,c.pos.z+=c.dz*c.speed*t;const h=n.project(c.pos,c.t);if(h&&Number.isFinite(h.t)){c.t=h.t;const d=n.sample(c.t);if(d&&d.right&&d.tangent){const g=d.right.x,v=d.right.z,p=Math.max(.5,h.halfWidth-o);if(Math.abs(h.lateral)>p){const _=h.lateral>0?1:-1,y=c.dx*g+c.dz*v;y*_>0&&(c.dx-=2*y*g,c.dz-=2*y*v,r.burst(c.pos.x,c.pos.y,c.pos.z,8,7,.3,.4,.05,.7,.9,1,1,10,1,.5,a),e._emit("bounce",c.pos,"marble"));const T=Math.abs(h.lateral)-p;c.pos.x-=g*_*T,c.pos.z-=v*_*T}const m=1.6*t;c.dx+=d.tangent.x*m,c.dz+=d.tangent.z*m;const x=Math.hypot(c.dx,c.dz)||1;c.dx/=x,c.dz/=x}Number.isFinite(h.y)&&(c.pos.y+=(h.y+o-c.pos.y)*Math.min(1,t*14))}const u=n.obstacles;if(u)for(let d=0;d<u.length;d++){const g=u[d];let v=c.pos.x-g.x,p=c.pos.z-g.z;const m=Math.hypot(v,p),x=g.radius+o;if(m<x&&m>1e-4){v/=m,p/=m;const _=c.dx*v+c.dz*p;_<0&&(c.dx-=2*_*v,c.dz-=2*_*p),c.pos.x=g.x+v*x,c.pos.z=g.z+p*x}}if(c.mesh.position.copy(c.pos),sr.set(c.dz,0,-c.dx),c.mesh.rotateOnWorldAxis(sr,c.speed*t/o),this._marbleTrail(c),!f)for(let d=0;d<s.length;d++){const g=s[d];if(g===c.owner&&c.age<1)continue;const v=g.car.pos,p=v.x-c.pos.x,m=v.z-c.pos.z,x=(g.car.radius||1)+o;if(p*p+m*m<x*x&&Math.abs(v.y-(c.pos.y-o))<2.2&&e._hit(g,"marble",Qt.marble.spin,Qt.marble.launch,c.dx*Qt.marble.impulse,c.dz*Qt.marble.impulse)){f=!0;break}}f&&(r.burst(c.pos.x,c.pos.y,c.pos.z,30,12,.5,.6,.1,.6,.85,1,1,12,1,.6,a),e.root.remove(c.mesh),this.marbles.splice(l,1))}}_updatePuddles(t,e){const n=this.race,s=n.states;for(let r=this.puddles.length-1;r>=0;r--){const a=this.puddles[r];if(a.age+=t,a.life-=t,a.life<=0&&!a.dying&&(a.dying=1e-4),a.dying){a.dying+=t;const c=Math.max(0,1-a.dying/.35);a.mesh.scale.setScalar(Math.max(.001,a.radius*c)),c<=0&&(n.root.remove(a.mesh),this.puddles.splice(r,1));continue}const o=Math.min(1,a.age/.25),l=1+.04*Math.sin(e*4+r);if(a.mesh.scale.set(a.radius*o*l,1,a.radius*o*(2-l)),!this.replica)for(let c=0;c<s.length;c++){const f=s[c];if(f===a.owner&&a.age<Qt.glue.arm)continue;const h=f.car;if(h.onGround===!1)continue;const u=h.pos.x-a.x,d=h.pos.z-a.z,g=a.radius+.35;if(u*u+d*d<g*g&&Math.abs(h.pos.y-a.y)<1.5&&n._hit(f,"glue",Qt.glue.spin,0,-h.vel.x*Qt.glue.slow,-h.vel.z*Qt.glue.slow,Qt.glue.slow)){n.fx.burst(a.x,a.y+.3,a.z,18,7,.5,.6,.15,.5,1,.25,1,14,1,.7,n.random),a.dying=1e-4;break}}}}_updatePulses(t){const e=this.race,n=e.states,s=Qt.pulse;for(let r=this.pulses.length-1;r>=0;r--){const a=this.pulses[r];a.age+=t;const o=Math.min(1,a.age/s.duration),l=s.radius*(1-(1-o)*(1-o)),c=a.owner.car.pos;a.mesh.position.set(c.x,c.y+.45,c.z),a.mesh.scale.set(l,1,l),a.mat.opacity=.95*(1-o*o);for(let f=0;f<n.length&&!this.replica;f++){const h=n[f];if(h===a.owner||a.hit[f])continue;const u=h.car.pos,d=u.x-c.x,g=u.z-c.z,v=Math.hypot(d,g);if(v<l+(h.car.radius||1)&&Math.abs(u.y-c.y)<4){a.hit[f]=1;const p=v>.001?1/v:0;e._hit(h,"pulse",s.spin,s.launch,d*p*s.impulse,g*p*s.impulse)}}o>=1&&(e.root.remove(a.mesh),a.mat.dispose(),this.pulses.splice(r,1))}}_updateShields(t,e){const n=this.race.states;for(let s=0;s<n.length;s++){const r=n[s];r.shieldTime>0&&(r.shieldTime-=t);const a=r.shieldMesh;if(a)if(r.shieldTime>0){a.visible=r.shieldTime>1.2||Math.sin(e*28)>-.2;const o=r.car.pos;a.position.set(o.x,o.y+.55,o.z);const l=1+.05*Math.sin(e*7+s);a.scale.set(l,.82*(2-l),l),a.rotation.y=e*1.5}else a.visible=!1}}dispose(){const t=this.race.root;for(const e of this.rockets)t.remove(e.mesh);for(const e of this.marbles)t.remove(e.mesh);for(const e of this.puddles)t.remove(e.mesh);for(const e of this.pulses)t.remove(e.mesh),e.mat.dispose();for(const e of this.rings)t.remove(e.mesh),e.mat.dispose();for(const e of this.race.states)e.shieldMesh&&(t.remove(e.shieldMesh),e.shieldMesh=null),e.towMesh&&(t.remove(e.towMesh),e.towMesh=null),e.cloudMesh&&(t.remove(e.cloudMesh),e.cloudMesh=null),e.towTarget=null,e.scaleVis!==1&&e.car.mesh&&(e.scaleVis=1,e.car.mesh.scale.setScalar(1));this.rockets.length=this.marbles.length=this.puddles.length=this.pulses.length=this.rings.length=0;for(const e of this._res)e.dispose();this._res.length=0}}const kf=Math.PI*2,Df=12,Uf=.5,$_=12,Nf=30,rr=i=>Math.round(i*10)/10,pe=i=>Math.round(i*100)/100,Oe=i=>Math.round(i*1e3)/1e3,K_=i=>typeof i=="number"&&i===i&&i!==1/0&&i!==-1/0;function ac(i){return i=(i+Math.PI)%kf,i<0&&(i+=kf),i-Math.PI}function gd(i,t,e){const n=i.controls||{},s=e>0?e>31?31:Math.round(e):0,r=(i.onGround!==!1?1:0)|(i.drifting?2:0)|(n.handbrake?4:0)|(t&15)<<4|s<<8,a=i.vel;return[pe(i.pos.x),pe(i.pos.y),pe(i.pos.z),Oe(ac(i.heading)),pe(a.x),pe(a.y||0),pe(a.z),Oe(i.yawRate||0),pe(n.steer||0),r,pe(i.spinTime>0?i.spinTime:0),pe(i.boostTime>0?i.boostTime:0)]}function vd(i){if(!Array.isArray(i)||i.length<Df)return!1;for(let t=0;t<Df;t++)if(!K_(i[t]))return!1;return Math.abs(i[0])<1e6&&Math.abs(i[1])<1e6&&Math.abs(i[2])<1e6}class zf{constructor(){this.a=null,this.b=null,this.lastT=-1/0,this.tp=-1,this.fresh=!1,this.init=!1,this.hold=0,this.stale=!1,this.snapped=!1,this.age=1/0,this._wh=0,this.wallHit=0}push(t,e){if(!(t>this.lastT))return!1;const n=this.a||{t:0,s:null};this.a=this.b,n.t=t,n.s=e,this.b=n,this.lastT=t;const s=e[9]>>8&31;return s>this._wh&&(this._wh=s),this.fresh=!0,!0}advance(t,e,n){this.snapped=!1;const s=this.b;if(!s)return;const r=s.s;this.hold>0&&(this.hold-=n);let a=e-s.t;this.age=a;let o,l,c,f,h,u,d,g;const v=this.a;if(a<0&&v&&s.t-v.t>1e-6&&s.t-v.t<1){let y=(e-v.t)/(s.t-v.t);y<0&&(y=0);const T=v.s;o=T[0]+(r[0]-T[0])*y,l=T[1]+(r[1]-T[1])*y,c=T[2]+(r[2]-T[2])*y,f=T[3]+ac(r[3]-T[3])*y,h=T[4]+(r[4]-T[4])*y,u=T[5]+(r[5]-T[5])*y,d=T[6]+(r[6]-T[6])*y,g=T[7]+(r[7]-T[7])*y,this.stale=!1}else{a<0&&(a=0),this.stale=a>Uf;const y=this.stale?Uf:a;g=r[7]>6?6:r[7]<-6?-6:r[7];const T=!(r[9]&1),S=g*y,w=Math.cos(S*.5),A=Math.sin(S*.5);if(o=r[0]+(r[4]*w+r[6]*A)*y,c=r[2]+(r[6]*w-r[4]*A)*y,l=r[1]+r[5]*y-(T?.5*Nf*y*y:0),f=r[3]+S,this.stale)h=u=d=g=0;else{const M=Math.cos(S),b=Math.sin(S);h=r[4]*M+r[6]*b,d=r[6]*M-r[4]*b,u=r[5]-(T?Nf*y:0)}}const p=r[9]>>4&15,m=t.pos;let x=!this.init||p!==this.tp;if(this.tp=p,!x){m.x+=h*n,m.z+=d*n;const y=o-m.x,T=c-m.z,S=Math.hypot(y,T);if(S>$_)x=!0;else if(S>1e-5){let A=S*(1-Math.exp(-12*n));const M=Math.hypot(h,d),b=(M>6?M:6)*n;A>b&&(A=b),m.x+=y/S*A,m.z+=T/S*A}m.y+=(l-m.y)*Math.min(1,18*n),t.heading+=g*n;const w=ac(f-t.heading);w>2||w<-2?t.heading=f:t.heading+=w*(1-Math.exp(-14*n))}x&&(m.x=o,m.y=l,m.z=c,t.heading=f,this.init=!0,this.snapped=!0,typeof t.puppetSnap=="function"&&t.puppetSnap()),t.vel.x=h,t.vel.y=u,t.vel.z=d,t.yawRate=g,t.onGround=!!(r[9]&1),t.drifting=!!(r[9]&2)&&!this.stale;const _=t.controls;if(_&&(_.steer=r[8],_.handbrake=!!(r[9]&4),_.throttle=0),this.fresh){this.fresh=!1,this.wallHit=this._wh,this._wh=0;const y=a>0?a:0,T=Math.max(0,r[10]-y),S=Math.max(0,r[11]-y);this.hold>0?(t.spinTime=Math.max(t.spinTime||0,T),t.boostTime=Math.max(t.boostTime||0,S)):(t.spinTime=T,t.boostTime=S)}}}const ma=1/20,ga=1/30,J_=4,Q_=.7,Bo=5,xd=1e-4,Ho=new z,Se=i=>typeof i=="number"&&Number.isFinite(i),va=i=>Se(i)?i:0,vs=i=>i==null||!Se(i)?-1:Oe(i),Go=i=>i?on.indexOf(i):-1,Vo=i=>on.findIndex(t=>t.id===i);class ty{constructor(t,e){this.race=t,this.role="host",this.localId=e.localId!=null?e.localId:null,this.wall=0,this.wallNow=0,this.byId=new Map,this.waiting=new Set,this.waitTime=0,this.snapAcc=ma,this.n=0,this.seq=0,this.recent=[],this.finalMsg=null}get isWaiting(){return this.waiting.size>0&&this.waitTime<Bo}addRemote(t){this.byId.set(t.netId,t),this.waiting.add(t.netId)}begin(t){return this.wall+=t,this.wallNow=this.wall,this.waiting.size&&this.waitTime<Bo?(this.waitTime+=t,this.waitTime<Bo):!1}_event(t,e){t.unshift(++this.seq),this.recent.push({at:this.wall,e:t}),this.race._emit("net",{t:"e",e:[t]},e??null)}forward(t,e,n,s,r){const a=this.race;switch(t){case"lap":{const o=a._byCar.get(e);o&&this._event(["l",o.index,n|0,Oe(s),r?1:0,Oe(o.lapStart)]);break}case"finish":{const o=a._byCar.get(e);o&&this._event(["f",o.index,n|0,vs(o.finishTime)]);break}case"pickup":{const o=a._byCar.get(e);o&&this._event(["p",o.index,Go(n)]);break}case"fire":{const o=a._byCar.get(e);o&&this._event(["u",o.index,Go(n)]);break}case"hit":{const o=a._byCar.get(e);o&&this._event(["h",o.index,Vo(n)]);break}case"block":{const o=a._byCar.get(e);o&&this._event(["b",o.index,Vo(n)]);break}case"explode":e&&this._event(["e",pe(e.x),pe(e.y),pe(e.z)]);break;case"tow":{const o=a._byCar.get(e),l=a._byCar.get(n);o&&l&&this._event(["t",o.index,l.index,pe(s||0)]);break}}}effect(t,e,n,s,r,a,o,l,c,f,h){!t.pup||t.netId==null||(t.pup.hold=.35,this._event(["x",t.index,Vo(e),pe(n||0),pe(s||0),pe(r||0),pe(a||0),Oe(o||0),pe(l||0),pe(c||0),pe(f||0),pe(h||0)],t.netId))}end(t){for(;this.recent.length&&this.recent[0].at<this.wall-Q_;)this.recent.shift();this.snapAcc+=t,this.snapAcc>=ma-xd&&(this.snapAcc-=ma,this.snapAcc>ma&&(this.snapAcc=0),this.race._emit("net",this.snapshot(),null))}snapshot(){const t=this.race,e=t.states,n=[];for(let a=0;a<e.length;a++){const o=e[a],l=gd(o.car,o.tp,o.wh);o.wh=0,l.push(Oe(o.progress)),n.push(l)}const s={t:"w",n:++this.n,c:Oe(this.wall),d:Oe(this.wall-t._clock),g:t._goClock>=0?Oe(t._goClock):-1,k:n};this.isWaiting&&(s.w=1),t.pickups&&(s.pk=t.pickups.mask());const r=t.weapons;if(r.rockets.length&&(s.r=r.rockets.map(a=>[a.id,pe(a.pos.x),pe(a.pos.y),pe(a.pos.z),Oe(a.ang),rr(a.speed)])),r.marbles.length&&(s.m=r.marbles.map(a=>[a.id,pe(a.pos.x),pe(a.pos.y),pe(a.pos.z),Oe(a.dx),Oe(a.dz),rr(a.speed)])),r.puddles.length){const a=[];for(const o of r.puddles)o.dying||a.push([o.id,pe(o.x),pe(o.y),pe(o.z)]);a.length&&(s.p=a)}return this.recent.length&&(s.e=this.recent.map(a=>a.e)),this.n%J_===1&&(s.q=this.seq,s.L=t.laps,s.s=e.map(a=>[a.lapsDone,Go(a.item),a.shieldTime>0?rr(a.shieldTime):0,a.finished?vs(a.finishTime):-1,vs(a.bestLap),vs(a.lastLap),Oe(a.lapStart),a.human?1:0,a.shrinkTime>0?rr(a.shrinkTime):0,a.towTarget?a.towTarget.index:-1,a.towTime>0?rr(a.towTime):0])),this.finalMsg&&(s.o=this.finalMsg),s}sendFinal(t){this.finalMsg=t.map(e=>[ey(this.race,e.car),e.finished?1:0,vs(e.finishTime),vs(e.bestLap),e.estimated?1:0,e.lapsDone|0]),this.race._emit("net",{t:"o",o:this.finalMsg},null)}receive(t,e){if(!t||typeof t!="object")return;const n=this.byId.get(e);if(n)switch(this.waiting.delete(e),t.t){case"s":{const s=t.n|0;if(s<=n.pupN&&s>n.pupN-1e5||!vd(t.s)||!n.pup)return;n.pupN=s;let r=Se(t.c)?t.c:this.wall-.05;r>this.wall?r=this.wall:r<this.wall-.5&&(r=this.wall-.5),r<=n.pup.lastT&&(r=n.pup.lastT+.001),n.pup.push(r,t.s),this._fireCount(n,t.f);break}case"f":this._fireCount(n,t.f);break;case"p":Se(t.k)&&this.race._emit("net",{t:"q",k:t.k,c:Oe(this.wall)},e);break}}_fireCount(t,e){Se(e)&&(e|=0,e>t.fireSeen&&(t.fireSeen=e,t.fireReq=1))}}function ey(i,t){const e=i._byCar.get(t);return e?e.index:-1}class ny{constructor(t,e){this.race=t,this.role="client",this.localId=e.localId!=null?e.localId:null,this.localSim=!0,this.local=0,this.off=0,this.offT=0,this.synced=!1,this.pinged=!1,this.rttMin=1/0,this.rtt=0,this.wallNow=0,this.d=0,this.g=-1,this.w=!1,this.holdClock=0,this.pingIn=0,this.sendAcc=ga,this.n=0,this.fireN=0,this.snapN=0,this.seen=new Set,this.maxSeq=0,this.itemHold=0,this.lastSnapAt=-1,this.hostId=null}update(t,e){const n=this.race,s=n.states,r=n.cars,a=n.track;this.local+=t,this.itemHold>0&&(this.itemHold-=t);const o=this.offT-this.off;if(o>.4||o<-.4)this.off=this.offT;else{const v=(n.state==="countdown"?.5:.1)*t;this.off+=o>v?v:o<-v?-v:o}const l=this.wallNow=this.local+this.off;let c=this.synced?this.w?this.holdClock:l-this.d:0;if(c<n._clock&&(c=n._clock),n._clock=c,n.state==="countdown"){n._cd=c;let v=n._cdStep;for(;v<3&&c>=n._countdownAt[v];)v++;if(v>n._cdStep&&(n._cdStep=v,n._emit("countdown",4-v)),!(c>=n._goAt||this.g>=0&&c>=this.g)){for(let m=0;m<s.length;m++){const x=s[m];x.car.frozen=!0,x.pup&&x.pup.advance(x.car,l,t),x.car.update(t,a)}n._updateFx(t),this._send(t);return}n.state="racing";for(let m=0;m<r.length;m++)r[m].frozen=!1;n._emit("go")}const f=c-(this.g>=0?this.g:n._goAt-.008);f>n.time&&(n.time=f);const h=n._pst,u=this.localSim;if(h.ai)h.ai.update(t,a,r);else if(e&&u){const v=h.car.controls;v.throttle=+e.throttle||0,v.steer=+e.steer||0,v.handbrake=!!e.handbrake}for(let v=0;v<s.length;v++){const p=s[v];p.pup&&(p.pup.advance(p.car,l,t),p.teleported=p.pup.snapped)}for(let v=0;v<r.length;v++)r[v].update(t,a);u&&(h.towTarget||h.slowTime>0)&&n._statusPhysics(h,t);const d=r.length>1?n._collideNet():0;u&&n._teleportCheck(h,t);for(let v=0;v<s.length;v++){const p=s[v],m=p.car.trackT;Number.isFinite(m)&&(p.lastT=m)}u&&n._wrongWay(h,t),n._rank();for(let v=0;v<s.length;v++)n._carFx(s[v],t);d>n._crashThreshold&&n._carImpact(d);const g=!!(e&&e.fire);g&&!n._prevFire&&u&&!h.ai&&!h.finished&&(this.fireN++,n._emit("net",{t:"f",f:this.fireN},null),h.item&&(h.item=null,this.itemHold=1)),n._prevFire=g,n._updateFx(t),this._send(t)}_send(t){const e=this.race;if(this.pingIn-=t,this.pingIn<=0&&(this.pingIn=this.local<5||!this.pinged?.2:.5,e._emit("net",{t:"p",k:Oe(this.local)},null)),!!this.localSim&&(this.sendAcc+=t,this.sendAcc>=ga-xd)){this.sendAcc-=ga,this.sendAcc>ga&&(this.sendAcc=0);const n=e._pst;e._emit("net",{t:"s",n:++this.n,c:Oe(this.wallNow),s:gd(n.car,n.tp,n.wh),f:this.fireN},null),n.wh=0}}receive(t,e){if(!(!t||typeof t!="object")&&!(t.t==="s"||t.t==="f"||t.t==="p")){if(e!=null){if(this.hostId==null)t.t==="w"&&(this.hostId=e);else if(e!==this.hostId)return}switch(t.t){case"w":this._snapshot(t);break;case"e":this._events(t.e);break;case"q":this._pong(t);break;case"o":this._final(t.o);break}}}_pong(t){if(!Se(t.k)||!Se(t.c))return;const e=this.local-t.k;if(!(e>=0&&e<2)||(this.rttMin=Math.min(e,this.rttMin+.002),this.pinged&&e>this.rttMin+.06))return;this.rtt=e;const n=t.c+e*.5-this.local;if(!this.pinged)this.pinged=!0,this.offT=n,this.race.state==="countdown"&&(this.off=n);else{const s=n-this.offT;this.offT=s>.12||s<-.12?n:this.offT+s*.2}}_snapshot(t){this._events(t.e);const e=t.n|0;if(!Se(t.c)||!(e>this.snapN||e<this.snapN-1e5))return;this.snapN=e;const n=this.race,s=n.states,r=t.c,a=r-this.local;if(this.synced?(this.pinged?a>this.offT+.02:a>this.offT)&&(this.offT=a):(this.synced=!0,this.pinged||(this.offT=a+.03,this.off=this.offT)),Se(t.d)&&(this.d=t.d),Se(t.g)&&(this.g=t.g),this.w=!!t.w,this.w&&(this.holdClock=r-this.d),this.lastSnapAt=this.local,Array.isArray(t.k))for(let o=0;o<s.length&&o<t.k.length;o++){const l=t.k[o],c=s[o];if(!vd(l))continue;c.pup&&c.pup.push(r,l);const f=l[12];Se(f)&&(c.progress=f,f>c.maxProgress&&(c.maxProgress=f))}n.pickups&&t.pk&&n.pickups.setMask(t.pk),n.weapons.sync(t.r,t.m,t.p,r),Array.isArray(t.s)&&this._slow(t),t.o&&this._final(t.o)}_slow(t){const e=this.race,n=e.states;Se(t.L)&&t.L>=1&&t.L<100&&(e.laps=t.L|0);const s=!Se(t.q)||t.q>=this.maxSeq;for(let r=0;r<n.length&&r<t.s.length;r++){const a=t.s[r],o=n[r];if(!Array.isArray(a)||a.length<8)continue;let l=!0;for(let c=0;c<8;c++)if(!Se(a[c])){l=!1;break}if(l){if(o.human=!!a[7],s&&(a[0]>o.lapsDone&&(o.lapsDone=a[0]|0),o.bestLap=a[4]>=0?a[4]:null,o.lastLap=a[5]>=0?a[5]:null,o.lapStart=a[6],o===e._pst&&this.itemHold>0||(o.item=on[a[1]]||null),a[2]>0?o.shieldTime>0?o.shieldTime=a[2]:e.weapons._shield(o,a[2],!0):o.shieldTime>.3&&(o.shieldTime=0),a.length>=11&&Se(a[8])&&Se(a[9])&&Se(a[10]))){a[8]>0?o.shrinkTime>0?o.shrinkTime=Math.min(sc,a[8]):e.weapons._shrink(o,a[8]):o.shrinkTime>.3&&(o.shrinkTime=0);const c=a[9]>=0&&a[10]>0?n[a[9]|0]:null;c&&c!==o?o.towTarget!==c?e.weapons._latch(o,c,a[10]):o.towTime=Math.min(Qt.zaptow.time,a[10]):o.towTarget&&o.towTime>.3&&e.weapons._unlatch(o)}a[3]>=0&&!o.finished&&e._clientFinish(o,0,a[3])}}}_events(t){if(Array.isArray(t))for(let e=0;e<t.length&&e<256;e++){const n=t[e];if(!Array.isArray(n)||!Se(n[0])||typeof n[1]!="string")continue;const s=n[0];if(!this.seen.has(s)){if(this.seen.add(s),s>this.maxSeq&&(this.maxSeq=s),this.seen.size>600){const r=this.maxSeq-300;for(const a of this.seen)a<r&&this.seen.delete(a)}try{this._event(n)}catch{}}}}_event(t){const e=this.race,n=e.states,s=t[1];if(s==="e"){Se(t[2])&&Se(t[3])&&Se(t[4])&&e._emit("explode",Ho.set(t[2],t[3],t[4]).clone(),"rocket");return}const r=n[t[2]];if(!r)return;const a=r.car;switch(s){case"l":{const o=t[3]|0;if(!(o>r.lapsDone)||!Se(t[4]))return;r.lapsDone=o,r.lastLap=t[4],(r.bestLap==null||t[4]<r.bestLap)&&(r.bestLap=t[4]),Se(t[6])&&(r.lapStart=t[6]),e._emit("lap",a,o,t[4],!!t[5]),o===e.laps-1&&e._emit("finalLap",a);break}case"f":e._clientFinish(r,t[3]|0,Se(t[4])&&t[4]>=0?t[4]:e.time);break;case"p":{const o=on[t[3]];if(!o)return;r.item=o,r===e._pst&&(this.itemHold=0),e._emit("pickup",a,o);break}case"u":{const o=on[t[3]];if(!o)return;r.item=null,r===e._pst&&(this.itemHold=0),o.id==="pulse"?e.weapons._pulse(r):o.id==="shield"?e.weapons._shield(r):o.id==="shockcloud"?e.weapons._stormFx(r):o.id==="pogo"&&e.weapons._pogoArm(r),e._emit("fire",a,o);break}case"h":{const o=on[t[3]],l=o?o.id:"rocket";l==="shockcloud"&&e.weapons._shrink(r,Qt.shockcloud.time),e._hitFx(r,l),e._emit("hit",a,l);break}case"b":{const o=on[t[3]];r.shieldTime=0,e._blockFx(r),e._emit("block",a,o?o.id:"rocket");break}case"t":{const o=Se(t[3])?n[t[3]|0]:null,l=va(t[4]);if(!o||o===r||!(l>0))return;e.weapons._latch(r,o,l),e._emit("tow",a,o.car,l);break}case"x":{if(r!==e._pst||!this.localSim)return;const o=+t[4]||0,l=+t[5]||0,c=+t[6]||0,f=+t[7]||0,h=+t[8]||0,u=+t[9]||0;if(o>0&&(a.spinTime=Math.max(a.spinTime||0,Math.min(1.2,o))),h>0){const p=1-Math.min(.9,h);a.vel.x*=p,a.vel.z*=p}(c||f)&&a.applyImpulse(Ho.set(Math.max(-30,Math.min(30,c)),0,Math.max(-30,Math.min(30,f)))),l>0&&a.launch(Math.min(16,l)),u>0&&(a.boostTime=Math.max(a.boostTime||0,Math.min(5,u)));const d=va(t[10]),g=va(t[11]),v=va(t[12]);if(d>0&&g>0&&g<1&&(r.slowTime=Math.min(sc,d),r.slowFactor=Math.max(.4,g)),v>0){const p=Math.min(15,v);a.applyImpulse(Ho.set(Math.sin(a.heading)*p,0,Math.cos(a.heading)*p))}break}}}_final(t){const e=this.race,n=e.states;if(e._final||!Array.isArray(t))return;const s=[],r=new Set;for(let a=0;a<t.length;a++){const o=t[a];if(!Array.isArray(o))continue;const l=n[o[0]];!l||r.has(l)||(r.add(l),s.push(e._standingEntry(l,s.length+1,!!o[1],o[2]>=0?o[2]:null,!!o[4],o[3]>=0?o[3]:null,o[5]|0)))}for(const a of e._order)r.has(a)||s.push(e._standingEntry(a,s.length+1,a.finished,a.finishTime,!1,a.bestLap,a.lapsDone));e._final=s,e._raceOverFired=!0,e._goAutopilot(),e._emit("raceOver",e.standings())}}const iy=["Zippy Zoe","Sprocket Sam","Captain Cog","Nitro Nell","Dizzy Dax","Pip Piston","Wobbly Wes","Turbo Tam","Bolt Benny","Lulu Lugnut","Axel Fizz","Greta Grip"],Ff=[.2,1.2,2.2],Of=3.2,Wo=1.6,Bf=[.45,.68,.88],Xo=4,sy=1,ry=20,ay=["#ff5a3c","#3c8dff","#ffd23f","#41d67a","#c05cff","#ff8ad1","#3fe0d0","#f2f2f2"],oy=new z;function xa(i,t){for(let e=i.length-1;e>0;e--){const n=t()*(e+1)|0,s=i[e];i[e]=i[n],i[n]=s}return i}function qo(i,t,e,n,s,r,a){const o=s-i.x,l=r-i.z,c=o*t+l*e,f=o*e-l*t;return c>a&&c<n&&f>-1.6&&f<1.6}function ly(i,t){return i.finished!==t.finished?i.finished?-1:1:i.finished?i.finishTime-t.finishTime||i.index-t.index:t.progress-i.progress||i.index-t.index}class cy{constructor(t,e){const{scene:n,track:s,playerCarId:r,playerName:a="Player",laps:o=3,opponents:l=0,difficulty:c=1,mode:f="race"}=t;this.deps=e,this.scene=n,this.track=s,this.mode=f==="timetrial"?"timetrial":"race",this.laps=Math.max(1,o|0),this.difficulty=Math.min(2,Math.max(0,c|0)),this.random=t.random||Math.random,this.state="countdown",this.time=0,this.cars=[],this.states=[],this._byCar=new Map,this._order=[],this._listeners=new Map,this._cd=0,this._cdStep=0,this._clock=0,this._overTimer=-1,this._raceOverFired=!1,this._final=null,this._finishedCount=0,this._disposed=!1,this._prevFire=!1,this._goClock=-1,this._nextId=0,this._countdownAt=Ff,this._goAt=Of,this._crashThreshold=Xo,this._pair=[null,null];const h=t.net&&(t.net.role==="host"||t.net.role==="client")&&this.mode!=="timetrial"?t.net:null;this.netRole=h?h.role:null,this._replica=this.netRole==="client",this._net=null;const u=this.random,{Car:d,AIDriver:g,CARS:v}=e,p=s.startGrid||[],m=this.netRole==="host"&&Array.isArray(h.remotes)?h.remotes.filter(T=>T&&T.id!=null&&T.id!==h.localId).slice(0,7):[],x=this.mode==="timetrial"?0:Math.min(7,Math.max(0,l|0,m.length),Math.max(0,p.length-1,m.length)),_=x+1;this.root=new pn,this.root.name="race-fx",n.add(this.root),this.fx=new Ef(1600,!0),this.smoke=new Ef(700,!1),this.root.add(this.smoke.points,this.fx.points);const y=v&&v.length?v:[{id:r,name:String(r)}];if(this._replica)this._net=new ny(this,h),this._buildFromRoster(h,y,p);else{const T=y.some(O=>O.id===r)?r:y[0].id,S=Math.min(_-1,Math.max(0,t.playerGridSlot!=null?t.playerGridSlot|0:_-1)),w=new d(T,{name:a,isPlayer:!0});this.player=w,this._pst=this._addCar(w,null),this._pst.human=!t.autopilot;const A=new Set([T]);if(this.netRole==="host"){this._net=new ty(this,h),this._pst.netId=h.localId!=null?h.localId:null;const O=new Set([String(w.color||"").toLowerCase()]);for(const H of m){const G=y.some(et=>et.id===H.carId)?H.carId:y[0].id,j=y.find(et=>et.id===G);let W;O.has(String(j.color||"").toLowerCase())&&(W=ay.find(et=>!O.has(et))||void 0);const V=new d(G,{name:String(H.name||"Player").slice(0,24),isPlayer:!1,color:W});O.add(String(V.color||W||j.color||"").toLowerCase()),A.add(G);const Q=this._addCar(V,null);Q.human=!0,Q.netId=H.id,Q.pup=new zf,V.puppet=!0,this._net.addRemote(Q)}}const M=x-(this.states.length-1);let b=xa(y.filter(O=>!A.has(O.id)).map(O=>O.id),u);b.length||(b=xa(y.filter(O=>O.id!==T).map(O=>O.id),u)),b.length||(b=[T]);const C=xa(iy.slice(),u),N=Bf[this.difficulty];for(let O=0;O<M;O++){const H=new d(b[O%b.length],{name:C[O%C.length],isPlayer:!1}),G=Math.min(1,Math.max(.05,N+.07-.14*O/Math.max(1,M-1)+(u()-.5)*.06)),j=new g(H,{skill:G});this._addCar(H,j).skill=G}t.autopilot&&(this.states[0].ai=new g(w,{skill:N}));let U=0;this.netRole==="host"&&this.states.filter(H=>!H.human).concat(xa(this.states.filter(H=>H.human),u)).forEach((H,G)=>{H.gridSlot=G});for(let O=0;O<this.states.length;O++){const H=this.states[O];let G;this.netRole==="host"?G=H.gridSlot:O===0?G=S:(U===S&&U++,G=U++),H.gridSlot=G}}for(let T=0;T<this.states.length;T++){const S=this.states[T],w=S.gridSlot;{const A=p[w]||p[p.length-1],M=S.car;A&&M.placeAt(A.pos,A.heading,s),M.frozen=!0;let b=M.trackT;!Number.isFinite(b)&&A&&(b=s.project(A.pos).t),Number.isFinite(b)||(b=0),S.lastT=b,S.progress=b>.5?b-1:b,S.maxProgress=S.progress,S.px=M.pos.x,S.pz=M.pos.z,n.add(M.mesh)}}this._rank(),this.weapons=new Z_(this),this.pickups=this.mode!=="timetrial"&&s.pickupSpots&&s.pickupSpots.length?new j_(this,s.pickupSpots):null}_addCar(t,e){const n={car:t,ai:e,index:this.states.length,skill:0,gridSlot:0,progress:0,maxProgress:0,lastT:0,jumpTime:0,lapsDone:0,lapStart:0,bestLap:null,lastLap:null,finished:!1,finishTime:null,estimated:!1,position:this.states.length+1,item:null,itemHeld:0,aiFireAt:0,wrongWay:!1,wrongTimer:0,shieldTime:0,shieldMesh:null,hitImmune:0,wasBoosting:!1,crashCd:0,flameAcc:0,smokeAcc:0,slowTime:0,slowFactor:1,slowImmune:0,shrinkTime:0,scaleVis:1,cloudMesh:null,cloudAcc:0,towTarget:null,towTime:0,towMesh:null,pogo:0,pogoT:0,human:!1,netId:null,pup:null,pupN:0,tp:0,wh:0,px:0,pz:0,teleported:!1,fireReq:0,fireSeen:0};return this.states.push(n),this._order.push(n),this.cars.push(t),this._byCar.set(t,n),n}_buildFromRoster(t,e,n){const{Car:s}=this.deps,r=(Array.isArray(t.roster)?t.roster:[]).filter(o=>o&&typeof o=="object").slice().sort((o,l)=>(o.index|0)-(l.index|0)).slice(0,8);let a=null;if(r.forEach((o,l)=>{const c=e.some(d=>d.id===o.carId)?o.carId:e[0].id,f=!a&&t.localId!=null&&o.netId===t.localId,h=new s(c,{name:String(o.name||"Racer").slice(0,24),isPlayer:f,color:typeof o.color=="string"?o.color:void 0}),u=this._addCar(h,null);u.human=o.kind==="human",u.netId=o.netId!=null?o.netId:null,u.gridSlot=Number.isFinite(o.slot)?Math.max(0,Math.min(n.length-1,o.slot|0)):l,f?a=u:(u.pup=new zf,h.puppet=!0)}),!this.states.length){const o=new s(e[0].id,{name:"Player",isPlayer:!0});a=this._addCar(o,null),a.human=!0}a||(this._net.localSim=!1,a=this.states[0]),this._pst=a,this.player=a.car}getRoster(){return this.states.slice().sort((t,e)=>t.gridSlot-e.gridSlot).map(t=>({index:t.index,name:t.car.name,carId:t.car.def&&t.car.def.id,kind:t.human?"human":"bot",netId:t.netId!=null?t.netId:null,color:t.car.color||t.car.def&&t.car.def.color||null,slot:t.gridSlot}))}netReceive(t,e){if(!(this._disposed||!this._net))try{this._net.receive(t,e)}catch{}}dropRemote(t){const e=this._net;if(this._disposed||!e||e.role!=="host")return!1;const n=e.byId.get(t);return n?(e.byId.delete(t),e.waiting.delete(t),n.pup=null,n.human=!1,n.netId=null,n.fireReq=0,n.car.puppet=!1,n.px=n.car.pos.x,n.pz=n.car.pos.z,n.ai=new this.deps.AIDriver(n.car,{skill:n.finished?.55:Bf[this.difficulty]}),n.skill=n.ai.skill||0,this._mpCheckOver(),!0):!1}on(t,e){let n=this._listeners.get(t);return n||this._listeners.set(t,n=[]),n.push(e),()=>this.off(t,e)}off(t,e){const n=this._listeners.get(t);if(!n)return;const s=n.indexOf(e);s>=0&&n.splice(s,1)}_emit(t,e,n,s,r){this.netRole==="host"&&t!=="net"&&this._net.forward(t,e,n,s,r);const a=this._listeners.get(t);if(a)for(let o=0;o<a.length;o++)a[o](e,n,s,r)}info(t){const e=this._byCar.get(t);if(!e)return null;const n=this.state!=="countdown";return{lap:Math.min(e.lapsDone+1,this.laps),laps:this.laps,position:e.position,total:this.states.length,lapTime:e.finished?e.lastLap||0:n?Math.max(0,this.time-e.lapStart):0,bestLap:e.bestLap,lastLap:e.lastLap,item:e.item,wrongWay:e.wrongWay,finished:e.finished,finishTime:e.finishTime,progress:e.maxProgress,shield:e.shieldTime>0,boosting:(t.boostTime||0)>0,slowed:e.slowTime>0,shrunk:e.shrinkTime>0,towing:!!e.towTarget}}standings(){return this._final?this._final.map(t=>({...t})):this._buildStandings(!1)}_buildStandings(t){const e=[];let n=0;for(let s=0;s<this._order.length;s++){const r=this._order[s];let a=r.finished,o=r.finishTime,l=!1;if(!a&&t){const c=this.time/Math.max(.05,r.progress+.02);let f=Math.min(this.time*3+30,c*this.laps);f=Math.max(f,this.time+.4,n+.15),a=!0,l=!0,o=f}o!=null&&(n=o),e.push(this._standingEntry(r,s+1,a,o,l,r.bestLap,r.lapsDone))}return e}_standingEntry(t,e,n,s,r,a,o){return{car:t.car,name:t.car.name,carName:t.car.def&&t.car.def.name?t.car.def.name:"",position:e,finished:n,finishTime:s,bestLap:a,isPlayer:!!t.car.isPlayer,estimated:r,lapsDone:o,isHuman:!!t.human,index:t.index}}giveItem(t,e){const n=this._byCar.get(t),s=md[e];return!n||!s?!1:(n.item=s,n.itemHeld=0,n.aiFireAt=1+this.random()*3,!0)}useItem(t){const e=this._byCar.get(t);return e?this._fire(e):null}update(t,e){if(this._disposed)return;t>0||(t=0),t>.05&&(t=.05);const n=this._net;if(n&&n.role==="client"){n.update(t,e);return}const s=this.states,r=this.cars,a=this.track;if(n&&n.begin(t)&&this.state==="countdown"){for(let h=0;h<r.length;h++)r[h].frozen=!0,r[h].update(t,a);this._updateFx(t),n.end(t);return}if(this._clock+=t,this.state==="countdown"){for(this._cd+=t;this._cdStep<3&&this._cd>=Ff[this._cdStep];)this._emit("countdown",3-this._cdStep),this._cdStep++;if(this._cd<Of){for(let h=0;h<r.length;h++)r[h].frozen=!0,s[h].pup&&s[h].pup.advance(r[h],n.wall,t),r[h].update(t,a);this._updateFx(t),n&&n.end(t);return}this.state="racing",this._goClock=this._clock-t;for(let h=0;h<r.length;h++)r[h].frozen=!1;this._emit("go")}this.time+=t;const o=this._pst,l=n?this._humanProgress():o.progress;for(let h=0;h<s.length;h++){const u=s[h];if(u.pup)u.pup.advance(u.car,n.wall,t),u.pup.snapped?(u.tp=u.tp+1&15,u.teleported=!0):u.teleported=!1;else if(u.ai)"playerProgressDelta"in u.ai&&(u.ai.playerProgressDelta=u.progress-l),u.ai.update(t,a,r);else if(e&&u===o){const d=u.car.controls;d.throttle=+e.throttle||0,d.steer=+e.steer||0,d.handbrake=!!e.handbrake}}for(let h=0;h<r.length;h++)r[h].update(t,a);for(let h=0;h<s.length;h++)!s[h].pup&&(s[h].towTarget||s[h].slowTime>0)&&this._statusPhysics(s[h],t);const c=r.length>1?n?this._collideNet():this.deps.resolveCarCollisions(r)||0:0;if(n)for(let h=0;h<s.length;h++)s[h].pup||this._teleportCheck(s[h],t);for(let h=0;h<s.length;h++)this._updateProgress(s[h],t);this._rank();for(let h=0;h<s.length;h++)this._carFx(s[h],t);c>Xo&&this._carImpact(c);const f=!!(e&&e.fire);f&&!this._prevFire&&!o.ai&&!o.finished&&this._fire(o),this._prevFire=f;for(let h=0;h<s.length;h++){const u=s[h];u.hitImmune>0&&(u.hitImmune-=t),u.ai?this._aiItems(u,t):u.fireReq&&(u.fireReq=0,u.pup&&!u.finished&&this._fire(u))}this._updateFx(t),this._overTimer>=0&&!this._raceOverFired&&(this._overTimer-=t,this._overTimer<=0&&(this._raceOverFired=!0,this._final=this._buildStandings(!0),n&&(this._goAutopilot(),n.sendFinal(this._final)),this._emit("raceOver",this.standings()))),n&&n.end(t)}_humanProgress(){let t=0,e=0;for(let n=0;n<this.states.length;n++){const s=this.states[n];s.human&&!s.finished&&(t+=s.progress,e++)}return e?t/e:this._pst.progress}_collideNet(){const t=this.states,e=this.deps.resolveCarCollisions,n=this._pair;let s=0,r=0;const a=this._sims||(this._sims=[]);a.length=0;for(let o=0;o<t.length;o++)t[o].pup||a.push(t[o].car);if(r=a.length,r>1&&(s=e(a)||0),r===t.length)return s;for(let o=0;o<t.length;o++){if(!t[o].pup)continue;const l=t[o].car,c=l.pos.x,f=l.pos.y,h=l.pos.z,u=l.vel.x,d=l.vel.y,g=l.vel.z;for(let v=0;v<r;v++){const p=a[v],m=p.pos.x-c,x=p.pos.z-h,_=(p.radius||1)+(l.radius||1);if(m*m+x*x>_*_)continue;n[0]=p,n[1]=l;const y=e(n)||0;y>s&&(s=y),l.pos.x=c,l.pos.y=f,l.pos.z=h,l.vel.x=u,l.vel.y=d,l.vel.z=g}}return n[0]=n[1]=null,s}_teleportCheck(t,e){const n=t.car,s=n.pos.x-t.px,r=n.pos.z-t.pz,a=4+1.5*Math.hypot(n.vel.x,n.vel.z)*e;t.teleported=s*s+r*r>a*a,t.teleported&&(t.tp=t.tp+1&15),t.px=n.pos.x,t.pz=n.pos.z}_goAutopilot(){const t=this._pst;this.state="finished",!t.ai&&!t.pup&&(t.ai=new this.deps.AIDriver(t.car,{skill:.55}))}_mpCheckOver(){if(this._raceOverFired||this.netRole!=="host")return;let t=0,e=0;for(let n=0;n<this.states.length;n++){const s=this.states[n];s.human&&(t++,s.finished&&e++)}if(!(!e&&t))if(e>=t){if(this.state==="countdown")return;this._overTimer=this._overTimer<0?Wo:Math.min(this._overTimer,Wo)}else this._overTimer<0&&(this._overTimer=ry)}_clientFinish(t,e,n){t.finished||(t.finished=!0,t.finishTime=n,t.item=null,t.wrongWay=!1,this._finishedCount=Math.max(this._finishedCount+1,e|0),this._emit("finish",t.car,e>0?e:this._finishedCount),t===this._pst&&this._finishFx(t))}_finishFx(t){this.state="finished",!t.ai&&!t.pup&&(t.ai=new this.deps.AIDriver(t.car,{skill:.55}));const e=t.car.pos;this.fx.burst(e.x,e.y+1,e.z,60,14,1.1,.6,.1,1,.85,.3,1,9,.8,.9,this.random)}_updateFx(t){this.pickups&&this.pickups.update(t,this._clock),this.weapons.update(t,this._clock),this.fx.update(t),this.smoke.update(t)}_updateProgress(t,e){const n=t.car,s=this.track;let r=n.trackT;if(!Number.isFinite(r)){const c=s.project(n.pos,t.lastT);if(r=c?c.t:NaN,!Number.isFinite(r))return}let a=r-t.lastT;a>.5?a-=1:a<-.5&&(a+=1);const o=Math.max(.01,160*e/(s.length||500));let l=!0;if(Math.abs(a)>o&&(t.jumpTime+=e,t.jumpTime<(a<0?.4:1.5)&&(l=!1)),l)for(t.jumpTime=0,t.lastT=r,t.progress+=a,t.progress>t.maxProgress&&(t.maxProgress=t.progress);!t.finished&&t.progress>=t.lapsDone+1;){const c=t.lapsDone+1,f=a>1e-9?Math.min(1,Math.max(0,(t.progress-c)/a)):0,h=this.time-e*f,u=h-t.lapStart;t.lapStart=h,t.lapsDone=c,t.lastLap=u;const d=t.bestLap==null||u<t.bestLap;d&&(t.bestLap=u),this._emit("lap",n,c,u,d),c>=this.laps?(t.finished=!0,t.finishTime=h,this._finishedCount++,this._onFinish(t)):c===this.laps-1&&this._emit("finalLap",n)}this._wrongWay(t,e)}_wrongWay(t,e){const n=t.car,s=this.track;let r=!1;if(!t.finished&&n.speed>2.5&&!(n.spinTime>0)){const a=s.sample(t.lastT),o=a&&a.tangent;o&&(r=Math.sin(n.heading)*o.x+Math.cos(n.heading)*o.z<-.25)}r?(t.wrongTimer+=e,t.wrongTimer>sy&&(t.wrongWay=!0)):(t.wrongTimer=0,t.wrongWay=!1)}_onFinish(t){const e=t.car;t.item=null,t.wrongWay=!1,this._emit("finish",e,this._finishedCount),t===this._pst&&(this._finishFx(t),this._net||(this._overTimer=Wo)),this._net&&this._mpCheckOver()}_rank(){const t=this._order;t.sort(ly);for(let e=0;e<t.length;e++)t[e].position=e+1}_boostBurst(t){const e=t.car.pos,n=t.car.heading;this.fx.burst(e.x-Math.sin(n),e.y+.4,e.z-Math.cos(n),18,8,.4,.8,.1,.4,.8,1,1,0,2,.4,this.random)}_carFx(t,e){const n=t.car,s=this.random,r=this.fx,a=n.heading,o=Math.sin(a),l=Math.cos(a),c=l,f=-o,h=n.pos,u=n.boostTime>0;if(u&&!t.wasBoosting&&(this._boostBurst(t),this._emit("boost",n)),t.wasBoosting=u,u){t.flameAcc+=e*90;const g=n.vel?n.vel.x:0,v=n.vel?n.vel.z:0;for(;t.flameAcc>=1;){t.flameAcc-=1;const p=s()<.5?-.32:.32,m=s();r.emit(h.x-o*1.05+c*p,h.y+.38,h.z-l*1.05+f*p,g*.35-o*(5+s()*5)+(s()-.5)*1.5,(s()-.3)*1.5,v*.35-l*(5+s()*5)+(s()-.5)*1.5,.16+s()*.14,.75,.12,m<.3?.5:1,m<.3?.8:.45+m*.4,m<.3?1:.12,1,0,0)}}else t.flameAcc=0;if(n.drifting&&n.onGround!==!1&&Math.abs(n.speed)>6)for(t.smokeAcc+=e*34;t.smokeAcc>=1;){t.smokeAcc-=1;const g=s()<.5?-.5:.5,v=.8+s()*.15;this.smoke.emit(h.x-o*.8+c*g,h.y+.15,h.z-l*.8+f*g,(s()-.5)*1.5,.8+s()*.9,(s()-.5)*1.5,.55+s()*.35,.5,2.1,v,v,v,.32,0,1.2)}else t.smokeAcc=0;t.crashCd>0&&(t.crashCd-=e);let d=n.wallHit;if(t.pup&&(d=t.pup.wallHit,t.pup.wallHit=0),this._net&&d>t.wh&&(t.wh=d),d>1.5){const g=Math.min(14,2+(d|0)),v=s()*Math.PI*2;r.burst(h.x+Math.sin(v)*.6,h.y+.35,h.z+Math.cos(v)*.6,g,6+d*.5,.35,.28,.04,1,.8,.35,1,16,.5,.6,s),d>Xo&&t.crashCd<=0&&!t.pup&&(t.crashCd=.3,this._emit("crash",n,d))}}_carImpact(t){const e=this.states,n=this.random;for(let s=0;s<e.length;s++)for(let r=s+1;r<e.length;r++){const a=e[s],o=e[r],l=o.car.pos.x-a.car.pos.x,c=o.car.pos.z-a.car.pos.z,f=(a.car.radius||1)+(o.car.radius||1)+.25;l*l+c*c>f*f||a.crashCd>0&&o.crashCd>0||a.pup&&o.pup||(this.fx.burst(a.car.pos.x+l*.5,a.car.pos.y+.45,a.car.pos.z+c*.5,Math.min(12,3+(t|0)),6+t*.4,.3,.28,.04,1,.85,.4,1,16,.5,.6,n),a.crashCd<=0&&(a.crashCd=.3,a.pup||this._emit("crash",a.car,t)),o.crashCd<=0&&(o.crashCd=.3,o.pup||this._emit("crash",o.car,t)))}}_givePickup(t){t.item=W_(t.position,this.states.length,this.random),t.itemHeld=0,t.aiFireAt=1+this.random()*3,this._emit("pickup",t.car,t.item)}_fire(t){const e=t.item;return!e||this.state==="countdown"?null:(t.item=null,t.itemHeld=0,this.weapons.use(t,e.id),this._emit("fire",t.car,e),e)}_hit(t,e,n,s,r,a,o){if(t.hitImmune>0)return 0;const l=t.car;return t.shieldTime>0?(t.shieldTime=0,t.hitImmune=.6,this._blockFx(t),this._emit("block",l,e),2):(t.hitImmune=1.8,l.spinTime=Math.max(l.spinTime||0,Math.min(1.2,n)),t.pup&&this._net?this._net.effect(t,e,Math.min(1.2,n),s,o?0:r,o?0:a,o||0,0):((r||a)&&l.applyImpulse(oy.set(r||0,0,a||0)),s>0&&l.launch(s)),this._hitFx(t,e),this._emit("hit",l,e),1)}_slowHit(t,e,n,s,r){if(t.hitImmune>0||t.slowImmune>0)return 0;const a=t.car;return t.shieldTime>0?(t.shieldTime=0,t.hitImmune=.6,this._blockFx(t),this._emit("block",a,e),2):(n=Math.min(sc,n),t.hitImmune=.5,t.slowImmune=n+V_,t.slowTime=n,t.slowFactor=Math.min(1,Math.max(.4,s)),r&&this.weapons._shrink(t,n),t.pup&&this._net&&this._net.effect(t,e,0,0,0,0,0,0,n,t.slowFactor,0),this._hitFx(t,e),this._emit("hit",a,e),1)}_statusPhysics(t,e){const n=t.car,s=n.vel,r=n.def&&n.def.topSpeed||35,a=t.towTarget;if(a&&!(n.spinTime>0)){const o=Qt.zaptow,l=a.car.pos.x-n.pos.x,c=a.car.pos.z-n.pos.z,f=Math.hypot(l,c);if(f>3.5){const h=l/f,u=c/f,d=s.x*h+s.z*u,g=r*o.top;if(d<g){const v=Math.min(o.pull*e,g-d);s.x+=h*v,s.z+=u*v,n.speed+=v*(h*Math.sin(n.heading)+u*Math.cos(n.heading))}}}if(t.slowTime>0){const o=r*t.slowFactor,l=Math.hypot(s.x,s.z);if(l>o){const c=Math.max(o,l-70*e)/l;s.x*=c,s.z*=c,n.speed*=c}}}_blockFx(t){const e=t.car.pos;this.fx.burst(e.x,e.y+.6,e.z,30,11,.5,.5,.08,.5,.92,1,1,5,1.5,.5,this.random)}_hitFx(t,e){const n=t.car.pos,s=e==="glue"?0:1;if(e==="zaptow"){this.fx.burst(n.x,n.y+.6,n.z,10,5,.35,.4,.08,.5,.75,1,1,0,2,.5,this.random);return}this.fx.burst(n.x,n.y+.6,n.z,20,9,.5,.5,.08,s?1:.5,s?.9:1,s?.4:.3,1,10,1,.7,this.random)}_targetAhead(t,e){let n=null,s=e;for(let r=0;r<this.states.length;r++){const a=this.states[r];if(a===t)continue;let o=(a.progress-t.progress)%1;o<0&&(o+=1),o<s&&(s=o,n=a)}return n}_nearestOther(t){let e=1/0;const n=t.car.pos;for(let s=0;s<this.states.length;s++){const r=this.states[s];if(r===t)continue;const a=r.car.pos.x-n.x,o=r.car.pos.z-n.z,l=a*a+o*o;l<e&&(e=l)}return Math.sqrt(e)}_aiItems(t,e){const n=t.ai,s=!!n.wantsToFire;if(s&&(n.wantsToFire=!1),!t.item||t.finished||t.car.spinTime>0||(t.itemHeld+=e,t.itemHeld<.6))return;const r=t.item.id,a=this.track.length||500,o=t.itemHeld>=t.aiFireAt;let l=!1;if(r==="rocket"||r==="marble")l=this._targetAhead(t,70/a)&&(s||o)||t.itemHeld>9;else if(r==="glue"){let c=!1;for(let f=0;f<this.states.length&&!c;f++){const h=this.states[f];if(h===t)continue;let u=(t.progress-h.progress)%1;u<0&&(u+=1),c=u<30/a}l=c&&(s||o)||t.itemHeld>7}else if(r==="pulse")l=this._nearestOther(t)<8.5||t.itemHeld>12;else if(r==="shield")l=o||s;else if(r==="turbo")l=(s||o)&&Math.abs(t.car.controls.steer||0)<.35&&!(t.car.boostTime>0),t.itemHeld>8&&(l=!0);else if(r==="zaptow"){const c=this.weapons._towTarget(t);if(c){const f=c.car.pos.x-t.car.pos.x,h=c.car.pos.z-t.car.pos.z;l=f*f+h*h>64&&!(c.shieldTime>0&&t.itemHeld<4)}t.itemHeld>12&&(l=!0)}else r==="shockcloud"?(l=t.position>1&&(o||s||t.position>3),t.itemHeld>15&&(l=!0)):r==="pogo"&&(l=this._aiPogo(t,o&&s)||t.itemHeld>10,l&&!this._straightAhead(t)&&(l=t.itemHeld>14));l&&this._fire(t)}_straightAhead(t){const e=t.car,n=this.track,s=n.length||500;if(e.onGround===!1||Math.abs(e.controls.steer||0)>.3)return!1;const r=Math.sin(e.heading),a=Math.cos(e.heading),o=n.sample((t.lastT+Math.max(26,Math.abs(e.speed||0)*1.1)/s)%1),l=o&&o.tangent;return!l||r*l.x+a*l.z>.9}_aiPogo(t,e){const n=t.car,s=n.def&&n.def.topSpeed||35;if(!(n.speed>s*.45))return!1;const r=n.pos,a=Math.sin(n.heading),o=Math.cos(n.heading),l=4+n.speed*.3,c=this.states,f=this.weapons;for(let h=0;h<c.length;h++){const u=c[h];if(u!==t&&qo(r,a,o,l,u.car.pos.x,u.car.pos.z,2.5)&&(u.car.speed||0)<n.speed-1)return!0}for(let h=0;h<f.puddles.length;h++)if(!f.puddles[h].dying&&qo(r,a,o,l,f.puddles[h].x,f.puddles[h].z,2.5))return!0;for(let h=0;h<f.marbles.length;h++)if(qo(r,a,o,l,f.marbles[h].pos.x,f.marbles[h].pos.z,1.5))return!0;return e}dispose(){if(!this._disposed){this._disposed=!0,this.pickups&&this.pickups.dispose(),this.weapons.dispose(),this.fx.dispose(),this.smoke.dispose(),this.root.traverse(t=>{t.geometry&&t.geometry.dispose&&t.geometry.dispose();const e=t.material;Array.isArray(e)?e.forEach(n=>n.dispose&&n.dispose()):e&&e.dispose&&e.dispose()}),this.root.clear(),this.scene.remove(this.root);for(const t of this.cars)t.mesh&&(t.mesh.parent?t.mesh.parent.remove(t.mesh):this.scene.remove(t.mesh)),typeof t.dispose=="function"&&t.dispose();this._listeners.clear()}}}class hy extends cy{constructor(t){super(t,{Car:F_,AIDriver:H_,CARS:qn,resolveCarCollisions:G_,...t&&t.deps})}}const Hf="tr-ui-style",fy=`
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
`;function uy(){if(typeof document>"u"||document.getElementById(Hf))return;const i=document.createElement("style");i.id=Hf,i.textContent=fy,document.head.appendChild(i)}const dy=typeof document<"u";function ln(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}function Xi(i,t,e){return i<t?t:i>e?e:i}const _d=i=>dy&&document.documentElement.classList.contains(i),Ss=()=>_d("tr-touch"),py=()=>_d("tr-rotated");function my(i,t){const e=i.getBoundingClientRect();return py()?Xi((t.clientY-e.top)/Math.max(1,e.height),0,1):Xi((t.clientX-e.left)/Math.max(1,e.width),0,1)}const gy={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function oe(i){return String(i??"").replace(/[&<>"']/g,t=>gy[t])}function ii(i){if(i==null||!isFinite(i)||i<0)return"-:--.--";const t=Math.floor(i*100+1e-6),e=Math.floor(t/6e3),n=Math.floor(t/100)%60,s=t%100;return e+":"+(n<10?"0":"")+n+"."+(s<10?"0":"")+s}function yd(i){const t=i%100;if(t>=11&&t<=13)return"th";switch(i%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function _a(i){return i+yd(i)}function ur(i,t){i.classList.remove(t),i.offsetWidth,i.classList.add(t)}function Gf(i){const t=oe(i||"#ff6b1a");return'<svg class="tr-carsvg" viewBox="0 0 64 34" aria-hidden="true"><path d="M41 8 L47 -1" stroke="#0b0f22" stroke-width="1.4" stroke-linecap="round" fill="none" transform="translate(0,3)"/><circle cx="47" cy="2" r="1.8" fill="#ffd02e" stroke="#0b0f22" stroke-width="1"/><path d="M3 11 h9 v3 h-3 v4 h-3 v-4 h-3 z" fill="'+t+'" stroke="#0b0f22" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 25 Q3 18 10 17 L20 15 Q26 8 36 8 L44 8 Q50 8 53 14 L58 16 Q62 17 62 21 L62 25 Z" fill="'+t+'" stroke="#0b0f22" stroke-width="2" stroke-linejoin="round"/><path d="M24 15 Q28 10.5 35 10.5 L43 10.5 Q47 10.5 49 15 Z" fill="#cfefff" stroke="#0b0f22" stroke-width="1.4" stroke-linejoin="round"/><path d="M36 10.5 V15" stroke="#0b0f22" stroke-width="1.4"/><path d="M8 21 H58" stroke="rgba(255,255,255,.55)" stroke-width="1.6" stroke-linecap="round"/><circle cx="16" cy="25" r="7" fill="#1b2140" stroke="#0b0f22" stroke-width="2"/><circle cx="16" cy="25" r="2.8" fill="#fff6e0"/><circle cx="48" cy="25" r="7" fill="#1b2140" stroke="#0b0f22" stroke-width="2"/><circle cx="48" cy="25" r="2.8" fill="#fff6e0"/></svg>'}function vy(){let i="";for(let t=0;t<5;t++){const e=t/5*Math.PI*2-Math.PI/2;i+='<circle cx="'+(50+Math.cos(e)*15.5).toFixed(1)+'" cy="'+(50+Math.sin(e)*15.5).toFixed(1)+'" r="5.6" fill="#ff6b1a" stroke="#0b0f22" stroke-width="2.5"/>'}return'<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="43" fill="#232a52" stroke="#0b0f22" stroke-width="8"/><circle cx="50" cy="50" r="40" fill="none" stroke="#4a548c" stroke-width="7" stroke-dasharray="5 5.47"/><circle cx="50" cy="50" r="27.5" fill="#fff6e0" stroke="#0b0f22" stroke-width="6"/>'+i+'<circle cx="50" cy="50" r="5" fill="#0b0f22"/></svg>'}function Vf(){return'<div class="tr-logo" role="img" aria-label="Toyz Race"><div class="tr-logo-toyz"><span>T</span><span class="tr-logo-o">'+vy()+'</span><span>Y</span><span>Z</span></div><div class="tr-logo-race"><span>R</span><span>A</span><span>C</span><span>E</span></div><div class="tr-logo-strip"></div></div>'}function Wf(i,t=4){let e='<span class="tr-stars" aria-label="Difficulty '+i+" of "+t+'">';for(let n=1;n<=t;n++)e+='<i class="'+(n<=i?"on":"")+'">★</i>';return e+"</span>"}const Un={settings:"toyzrace.settings",records:"toyzrace.records",menu:"toyzrace.menu"},Xf={settings:"tinytorque.settings",records:"tinytorque.records",menu:"tinytorque.menu"};function xy(){try{for(const i of Object.keys(Un)){const t=localStorage.getItem(Xf[i]);t!=null&&(localStorage.getItem(Un[i])==null&&localStorage.setItem(Un[i],t),localStorage.removeItem(Xf[i]))}}catch{}}const bd={masterVolume:.8,musicVolume:.6,sfxVolume:.9,quality:"high",playerName:"Player",cameraShake:!0};function Yo(i){try{const t=localStorage.getItem(i),e=t?JSON.parse(t):null;return e&&typeof e=="object"?e:null}catch{return null}}function ar(i,t){try{localStorage.setItem(i,JSON.stringify(t))}catch{}}const jo=(i,t)=>typeof i=="number"&&isFinite(i)?Math.min(1,Math.max(0,i)):t;function oc(i){return String(i??"").replace(/[\u0000-\u001f<>]/g,"").replace(/\s+/g," ").trim().slice(0,12)||bd.playerName}function _y(i){const t=bd,e=i||{};return{masterVolume:jo(e.masterVolume,t.masterVolume),musicVolume:jo(e.musicVolume,t.musicVolume),sfxVolume:jo(e.sfxVolume,t.sfxVolume),quality:["low","medium","high"].includes(e.quality)?e.quality:t.quality,playerName:oc(e.playerName),cameraShake:typeof e.cameraShake=="boolean"?e.cameraShake:t.cameraShake,autoGas:typeof e.autoGas=="boolean"?e.autoGas:null}}function yy(){xy();const i=_y(Yo(Un.settings)),t=Object.assign({mode:"race",carId:null,trackId:null,laps:null,opponents:7,difficulty:1,mainIndex:0},Yo(Un.menu)||{});let e=Yo(Un.records)||{};(!e.lap||typeof e.lap!="object")&&(e.lap={}),(!e.race||typeof e.race!="object")&&(e.race={});const n=r=>typeof r=="number"&&isFinite(r)&&r>0,s={getBestLap(r){const a=e.lap[r];return n(a)?a:null},setBestLap(r,a){if(!n(a))return!1;const o=s.getBestLap(r);return o!=null&&o<=a?!1:(e.lap[r]=a,ar(Un.records,e),!0)},getBestRace(r,a){const o=e.race[r+":"+a];return n(o)?o:null},setBestRace(r,a,o){if(!n(o))return!1;const l=s.getBestRace(r,a);return l!=null&&l<=o?!1:(e.race[r+":"+a]=o,ar(Un.records,e),!0)},clear(){e={lap:{},race:{}},ar(Un.records,e)}};return{settings:i,sel:t,records:s,getSettings(){return Object.assign({},i,{autoGas:i.autoGas==null?Ss():!!i.autoGas})},saveSettings(){ar(Un.settings,i)},saveSel(){ar(Un.menu,t)}}}function Fc({sound:i,horizontal:t=!1}={}){const e={items:[],index:0,horizontal:t},n=r=>{i&&i(r)},s=r=>r&&!(r.skip&&r.skip());return e.set=(r,a=0)=>{e.items.forEach(o=>o.el.classList.remove("tr-focus")),e.items=r,r.forEach((o,l)=>{o._wired||(o._wired=!0,o.el.addEventListener("mouseenter",()=>{s(o)&&e.focus(e.items.indexOf(o),!0)}),o.el.addEventListener("click",c=>{s(o)&&(e.focus(e.items.indexOf(o),!0),o.click?o.click(c):o.enter&&(n("ui-select"),o.enter()))}))}),e.index=-1,e.focus(Xi(a,0,Math.max(0,r.length-1)),!0)},e.focus=(r,a)=>{if(r<0||r>=e.items.length)return;if(!s(e.items[r])){const l=e.items.findIndex(s);if(l<0)return;r=l}if(r===e.index)return;const o=e.items[e.index];o&&(o.el.classList.remove("tr-focus"),o.blur&&o.blur()),e.index=r,e.items[r].el.classList.add("tr-focus"),a||n("ui-move")},e.move=r=>{const a=e.items.length;if(!a)return;let o=e.index;for(let l=0;l<a&&(o=(o+r+a)%a,!s(e.items[o]));l++);e.focus(o)},e.current=()=>e.items[e.index],e.key=r=>{const a=e.current(),o=r.key,l=e.horizontal?"ArrowLeft":"ArrowUp",c=e.horizontal?"ArrowRight":"ArrowDown";if(o==="ArrowUp"||o==="ArrowDown"||o==="ArrowLeft"||o==="ArrowRight"){const f=a&&a[o==="ArrowUp"?"up":o==="ArrowDown"?"down":o==="ArrowLeft"?"left":"right"];return f&&f()||(o===l?e.move(-1):o===c?e.move(1):e.horizontal&&e.move(o==="ArrowUp"?-1:1)),!0}return o==="Enter"||o===" "||o==="Spacebar"?(r.repeat||a&&a.enter&&(n("ui-select"),a.enter()),!0):!1},e}function Te(i,t,e,n){const s=ln("div","tr-btn"+(n?" "+n:""));return s.setAttribute("role","button"),s.innerHTML='<span class="tr-btn-l">'+oe(i)+"</span>"+(t?'<span class="tr-btn-s">'+oe(t)+"</span>":""),{el:s,enter:e,setLabel(r){s.querySelector(".tr-btn-l").textContent=r}}}function Dn(i,{options:t,get:e,set:n,sound:s}){const r=ln("div","tr-row");r.innerHTML='<span class="tr-row-l">'+oe(i)+'</span><span class="tr-sel"><i class="tr-arr l">◀</i><b></b><i class="tr-arr r">▶</i></span>';const a=r.querySelector("b"),o=r.querySelector(".l"),l=r.querySelector(".r"),c=()=>{const u=t(),d=e(),g=u.findIndex(v=>v.value===d);return g<0?0:g};function f(){const u=t(),d=c();a.textContent=u[d]?u[d].label:"",o.classList.toggle("off",d<=0),l.classList.toggle("off",d>=u.length-1)}function h(u,d){const g=t();let v=c()+u;return d&&(v=(v+g.length)%g.length),v<0||v>=g.length||(n(g[v].value),f(),ur(u<0?o:l,"bump"),s&&s("ui-move")),!0}return o.addEventListener("click",u=>{u.stopPropagation(),h(-1)}),l.addEventListener("click",u=>{u.stopPropagation(),h(1)}),f(),{el:r,render:f,left:()=>h(-1),right:()=>h(1),click:()=>h(1,!0),setHidden(u){r.style.display=u?"none":""},skip:()=>r.style.display==="none"}}function by(i,{get:t,set:e,sound:n}){const s=ln("div","tr-row");s.innerHTML='<span class="tr-row-l">'+oe(i)+'</span><span class="tr-rowr"><span class="tr-slider"><span class="tr-slider-fill"></span><span class="tr-slider-knob"></span></span><span class="tr-val"></span></span>';const r=s.querySelector(".tr-slider"),a=s.querySelector(".tr-slider-fill"),o=s.querySelector(".tr-slider-knob"),l=s.querySelector(".tr-val");function c(){const g=Math.round(Xi(t(),0,1)*100);a.style.width=g+"%",o.style.left=g+"%",l.textContent=String(g)}function f(g){const v=Math.round(Xi(t(),0,1)*20),p=Xi(v+g,0,20);return p!==v&&(e(p/20),c(),n&&n("ui-move")),!0}let h=!1;const u=g=>{const v=Math.round(my(r,g)*20)/20;v!==t()&&(e(v),c())};r.addEventListener("pointerdown",g=>{h=!0;try{r.setPointerCapture(g.pointerId)}catch{}u(g)}),r.addEventListener("pointermove",g=>{h&&u(g)});const d=()=>{h&&n&&n("ui-move"),h=!1};return r.addEventListener("pointerup",d),r.addEventListener("pointercancel",d),r.addEventListener("lostpointercapture",d),c(),{el:s,render:c,left:()=>f(-1),right:()=>f(1),click:()=>{}}}function Zo(i,{get:t,set:e,maxLength:n=12,live:s=!1,onSubmit:r=null,cls:a="",placeholder:o="",capitalize:l="",enterHint:c="done"}){const f=ln("div","tr-row tr-row-in");f.innerHTML='<span class="tr-row-l">'+oe(i)+'</span><input class="tr-input'+(a?" "+a:"")+'" type="text" inputmode="text" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="'+(l||(s?"characters":"words"))+'" enterkeyhint="'+c+'" maxlength="'+n+'"'+(o?' placeholder="'+oe(o)+'"':"")+">";const h=f.querySelector("input");h.value=t();const u=()=>{e(h.value),h.value=t()};return h.addEventListener("input",()=>{e(h.value),s&&h.value!==t()&&(h.value=t())}),h.addEventListener("blur",u),r&&(h._ttSubmit=r),{el:f,input:h,render(){document.activeElement!==h&&(h.value=t())},enter(){h.focus(),h.select()},click(){h.focus()},blur(){document.activeElement===h&&h.blur()}}}const Ui=[{value:0,label:"Easy"},{value:1,label:"Normal"},{value:2,label:"Hard"}],$o={race:"Single Race",championship:"Championship",timetrial:"Time Trial"},My={Rookie:"",Amateur:"y",Pro:"p"},Ko=[["speed","Speed"],["accel","Accel"],["grip","Grip"],["weight","Weight"]],qf={mode:"main",menu:"main",cars:"car",tracks:"track",settings:"options",help:"controls",multiplayer:"mp"},yi=8,wy=3,or='<i class="tr-backbtn" role="button" aria-label="Back">◀</i>';function Jo(i){const t=String(i??""),e=/[?&#]join=([a-z]{4})(?![a-z])/i.exec(t);return(e?e[1]:t.replace(/[^a-z]/gi,"").slice(0,4)).toUpperCase()}const xs=(i,t,e,n)=>{const s=Math.round(Number(i));return isFinite(s)&&i!=null&&i!==""?Math.min(e,Math.max(t,s)):n};function Ni(i){return'<div class="tr-hints">'+i.map(([t,e])=>"<span>"+t.map(n=>'<i class="tr-key">'+n+"</i>").join("")+oe(e)+"</span>").join("")+"</div>"}function Sy(i,{tracks:t,cars:e,items:n,handlers:s,store:r}){const{settings:a,sel:o,records:l}=r,c=s||{},f=F=>{c.onUiSound&&c.onUiSound(F)},h=(F,J)=>{const K=[];for(let ut=F;ut<=J;ut++)K.push({value:ut,label:String(ut)});return K};$o[o.mode]||(o.mode="race"),e.some(F=>F.id===o.carId)||(o.carId=e.length?e[0].id:null),t.some(F=>F.id===o.trackId)||(o.trackId=t.length?t[0].id:null),o.laps>=2&&o.laps<=8||(o.laps=null),o.opponents>=1&&o.opponents<=7||(o.opponents=7),[0,1,2].includes(o.difficulty)||(o.difficulty=1);const u=()=>Math.max(0,e.findIndex(F=>F.id===o.carId)),d=()=>Math.max(0,t.findIndex(F=>F.id===o.trackId)),g=()=>t[d()],v=()=>o.laps||Math.min(8,Math.max(2,g()&&g().defaultLaps||3)),p=ln("div","tr-layer tr-menu");i.appendChild(p);const m=Fc({sound:f}),x={};let _=null,y=!1,T=0,S="main";const w={purpose:null,code:"",busy:!1,busyText:"",lastJoin:!1,msg:"",msgErr:!1,active:!1,carBefore:null,editAt:-1e9,lobby:{code:"",joinUrls:[],isHost:!1,players:[],settings:{},status:null}};function A(F,J){const K=J||{},ut=Object.assign({},K,F||{});return t.some(bt=>bt.id===ut.trackId)||(ut.trackId=t.some(bt=>bt.id===K.trackId)?K.trackId:g()?g().id:null),ut.laps=xs(ut.laps,2,8,xs(K.laps,2,8,v())),ut.difficulty=xs(ut.difficulty,0,2,xs(K.difficulty,0,2,o.difficulty)),ut.bots=xs(ut.bots,0,yi-1,xs(K.bots,0,yi-1,yi-1)),ut}function M(){const F=_==="lobby"&&w.lobby.settings.trackId;c.onPreview&&c.onPreview({screen:_,carId:o.carId,trackId:F||o.trackId})}function b(){r.saveSettings(),c.onSettings&&c.onSettings(r.getSettings())}function C(F,J,K){const ut=ln("div","tr-screen "+J,K);return p.appendChild(ut),ut.querySelectorAll(".tr-backbtn").forEach(bt=>bt.addEventListener("click",L=>{L.stopPropagation(),_===F&&U()})),x[F]={name:F,el:ut,items:[],index:0,back:null,onShow:null},x[F]}function N(F,J={}){F=qf[F]||F;const K=x[F]||x.title,ut=document.activeElement;ut&&ut.classList&&ut.classList.contains("tr-input")&&ut.blur(),_&&x[_]&&(x[_].index=m.index,x[_].el.classList.remove("on")),_=K.name,K.el.classList.add("on"),K.onShow&&K.onShow(J),m.set(K.items,J.index!=null?J.index:K.index),M()}function U(){const F=x[_];return!F||!F.back?!1:(f("ui-back"),F.back(),!0)}{const F=C("title","tr-title",'<div class="tr-title-in">'+Vf()+'<div class="tr-tagline">Pocket-size racers<i>◆</i>Full-size mayhem</div><div class="tr-press tr-if-keys">Press <i class="tr-key">ENTER</i> to start</div><div class="tr-press tr-if-touch">Tap to start</div></div><div class="tr-foot">Toy-scale arcade racing</div>');F.el.querySelector(".tr-title-in").addEventListener("click",()=>{f("ui-select"),N("main")}),F.key=J=>J.key==="Enter"||J.key===" "?(J.repeat||(f("ui-select"),N("main")),!0):!1}{const F=C("main","tr-main tr-left",'<div class="tr-side">'+Vf()+'<div class="tr-hello"></div><div class="tr-list"></div></div>'+Ni([[["↑","↓"],"Select"],[["ENTER"],"Confirm"],[["ESC"],"Back"]])),J=F.el.querySelector(".tr-list"),K=F.el.querySelector(".tr-hello"),ut=bt=>()=>{w.purpose=null,o.mode=bt,r.saveSel(),N("car",{index:0})};F.items=[Te("Single Race","Pick a track, beat the pack",ut("race")),Te("Multiplayer","Host or join a room · up to 8",()=>{w.msg="",N("mp",{index:1})}),Te("Championship",t.length+" tracks · points 10-8-6-5-4-3-2-1",ut("championship")),Te("Time Trial","Just you and the clock",ut("timetrial")),Te("Options","Sound, graphics, driver",()=>{S="main",N("options",{index:0})}),Te("Controls","Keys and pickups",()=>{S="main",N("controls",{index:0})})],F.items.forEach(bt=>J.appendChild(bt.el)),F.index=Math.min(F.items.length-1,Math.max(0,o.mainIndex|0)),F.onShow=()=>{K.innerHTML="Driver: <b>"+oe(a.playerName)+"</b>"},F.back=()=>{o.mainIndex=m.index,r.saveSel(),N("title")}}{let L=function(ft){const ht=u(),It=e[ht];if(bt.forEach((Tt,Ft)=>Tt.classList.toggle("sel",Ft===ht)),!It)return;J("name").innerHTML='<span class="tr-swatch" style="background:'+oe(It.color)+'"></span>'+oe(It.name);const gt=J("class");gt.textContent=It.class||"",gt.className="tr-chip "+(My[It.class]||""),J("tag").textContent=It.tagline||"";const _t=()=>{const Tt=e[u()];Ko.forEach(([Ft])=>{const Lt=Math.min(10,Math.max(0,Tt.stats&&Tt.stats[Ft]||0)),jt=F.el.querySelector('[data-bar="'+Ft+'"]');jt.style.width=Lt*10+"%",jt.style.setProperty("--bw",Lt>0?1e3/Lt+"%":"100%"),F.el.querySelector('[data-num="'+Ft+'"]').textContent=String(Lt)})};ft?_t():(Ko.forEach(([Tt])=>{F.el.querySelector('[data-bar="'+Tt+'"]').style.width="0%"}),F.el.offsetWidth,setTimeout(_t,40))},E=function(ft){const ht=e.length;ht&&(ft=(ft%ht+ht)%ht,e[ft].id!==o.carId&&(o.carId=e[ft].id,r.saveSel(),L(!0),f("ui-move"),M()))},Y=function(ft){const ht=ft==="championship"?t[0]:g();return{mode:ft,trackId:ht?ht.id:null,carId:o.carId,laps:ft==="championship"?Math.min(8,Math.max(2,ht&&ht.defaultLaps||3)):v(),opponents:ft==="timetrial"?0:ft==="championship"?7:o.opponents,difficulty:o.difficulty,playerName:a.playerName}},ot=function(){if(w.purpose==="lobby"){r.saveSel(),w.purpose=null;const ft=w.lobby.players.find(ht=>ht.isYou);ft&&(ft.carId=o.carId),N("lobby",{index:x.lobby.carIndex()}),c.onMpCar&&c.onMpCar({carId:o.carId})}else w.purpose?(r.saveSel(),x.mp.connect()):o.mode==="championship"?(r.saveSel(),c.onStart&&c.onStart(Y("championship"))):N("track",{index:0})};var V=L,Q=E,et=Y,vt=ot;const F=C("car","tr-carsel tr-left",'<div class="tr-side"><div class="tr-head">'+or+'<h2>Choose your car</h2><span class="tr-chip o" data-r="mode"></span></div><div class="tr-cargrid"></div><div class="tr-card tr-cardetail"><div class="tr-cd-top"><div class="tr-cd-name" data-r="name"></div><span class="tr-chip" data-r="class"></span></div><div class="tr-cd-tag" data-r="tag"></div><div class="tr-stats">'+Ko.map(([ft,ht])=>"<label>"+ht+'</label><div class="tr-bar"><i data-bar="'+ft+'"></i></div><b data-num="'+ft+'"></b>').join("")+'</div></div><div class="tr-bottom"><div class="tr-rows tr-cells" data-r="rows"></div><div data-r="go"></div></div></div>'+Ni([[["←","↑","↓","→"],"Choose"],[["ENTER"],"Confirm"],[["ESC"],"Back"]])),J=ft=>F.el.querySelector('[data-r="'+ft+'"]'),K=F.el.querySelector(".tr-cargrid"),ut=4,bt=e.map((ft,ht)=>{const It=ln("div","tr-cartile",Gf(ft.color)+"<span>"+oe(ft.name)+"</span>");return It.addEventListener("click",gt=>{gt.stopPropagation(),m.focus(0,!0),ht===u()?(f("ui-select"),ot()):E(ht)}),K.appendChild(It),It});F.buildConfig=Y;const dt={el:K,left:()=>(E(u()-1),!0),right:()=>(E(u()+1),!0),up:()=>{const ft=u();return ft-ut<0?!1:(E(ft-ut),!0)},down:()=>{const ft=u();return ft+ut>=e.length?!1:(E(ft+ut),!0)},enter:ot,click:()=>{}},at=Dn("Difficulty",{options:()=>Ui,get:()=>o.difficulty,set:ft=>{o.difficulty=ft,r.saveSel()},sound:f});J("rows").appendChild(at.el);const Et=Te("Next: track",null,ot,"tr-go");J("go").appendChild(Et.el),F.items=[dt,at,Et],F.onShow=()=>{const ft=w.purpose,ht=!ft&&o.mode==="championship";J("mode").textContent=ft?"Multiplayer":$o[o.mode],at.setHidden(!ht),J("rows").classList.toggle("tr-empty",!ht),at.render(),Et.setLabel(ft==="host"?"Host game":ft==="join"?"Join room "+w.code:ft==="lobby"?"Confirm car":ht?"Start championship":"Next: choose track"),L(!1)},F.back=()=>{if(w.purpose==="lobby")w.purpose=null,w.carBefore&&e.some(ft=>ft.id===w.carBefore)&&(o.carId=w.carBefore),r.saveSel(),N("lobby",{index:x.lobby.carIndex()});else if(w.purpose){const ft=w.purpose==="join";w.purpose=null,N("mp",{index:ft?3:1})}else N("main")}}{let L=function(){const ht=d(),It=t[ht];if(bt.forEach((Ft,Lt)=>Ft.classList.toggle("sel",Lt===ht)),!It)return;J("desc").textContent=It.description||"",J("stars").innerHTML=Wf(It.difficulty||1),J("len").textContent=It.lengthLabel||"—";const gt=l.getBestLap(It.id);J("best").textContent=gt!=null?ii(gt):"-:--.--";const _t=v(),Tt=l.getBestRace(It.id,_t);J("racel").textContent="Best race ("+_t+" laps)",J("race").textContent=Tt!=null?ii(Tt):"-:--.--",dt.render()},E=function(ht){const It=t.length;It&&(ht=(ht%It+It)%It,t[ht].id!==o.trackId&&(o.trackId=t[ht].id,r.saveSel(),L(),f("ui-move"),M()))},Y=function(){r.saveSel(),c.onStart&&c.onStart(x.car.buildConfig(o.mode==="timetrial"?"timetrial":"race"))};var R=L,I=E,k=Y;const F=C("track","tr-tracksel tr-left",'<div class="tr-side"><div class="tr-head">'+or+'<h2>Choose a track</h2><span class="tr-chip o" data-r="mode"></span></div><div class="tr-trkgrid"></div><div class="tr-card tr-trkdetail"><div class="tr-td-desc" data-r="desc"></div><div class="tr-td-meta"><div class="tr-meta"><small>Difficulty</small><b data-r="stars"></b></div><div class="tr-meta"><small>Length</small><b data-r="len"></b></div><div class="tr-meta"><small>Best lap</small><b class="rec" data-r="best"></b></div><div class="tr-meta"><small data-r="racel">Best race</small><b class="rec" data-r="race"></b></div></div></div><div class="tr-bottom"><div class="tr-rows tr-cells" data-r="rows"></div><div data-r="go"></div></div></div>'+Ni([[["←","↑","↓","→"],"Choose / adjust"],[["ENTER"],"Start"],[["ESC"],"Back"]])),J=ht=>F.el.querySelector('[data-r="'+ht+'"]'),K=F.el.querySelector(".tr-trkgrid"),ut=2,bt=t.map((ht,It)=>{const gt=ln("div","tr-trktile",'<span class="tr-trknum">'+(It+1)+'</span><span><span class="tr-trkname">'+oe(ht.name)+"</span><br>"+Wf(ht.difficulty||1)+"</span>");return gt.addEventListener("click",_t=>{_t.stopPropagation(),m.focus(0,!0),It===d()?(f("ui-select"),Y()):E(It)}),K.appendChild(gt),gt}),ot={el:K,left:()=>(E(d()-1),!0),right:()=>(E(d()+1),!0),up:()=>{const ht=d();return ht-ut<0?!1:(E(ht-ut),!0)},down:()=>{const ht=d();return ht+ut>=t.length?!1:(E(ht+ut),!0)},enter:Y,click:()=>{}},dt=Dn("Laps",{options:()=>h(2,8),get:v,set:ht=>{o.laps=ht,r.saveSel(),L()},sound:f}),at=Dn("Opponents",{options:()=>h(1,7),get:()=>o.opponents,set:ht=>{o.opponents=ht,r.saveSel()},sound:f}),Et=Dn("Difficulty",{options:()=>Ui,get:()=>o.difficulty,set:ht=>{o.difficulty=ht,r.saveSel()},sound:f});[dt,at,Et].forEach(ht=>J("rows").appendChild(ht.el));const ft=Te("Start race",null,Y,"tr-go");J("go").appendChild(ft.el),F.items=[ot,dt,at,Et,ft],F.onShow=()=>{const ht=o.mode==="timetrial";J("mode").textContent=$o[ht?"timetrial":"race"],at.setHidden(ht),Et.setHidden(ht),at.render(),Et.render(),ft.setLabel(ht?"Start time trial":"Start race"),L()},F.back=()=>N("car")}{const F=C("options","tr-options tr-center",'<div class="tr-mid"><div class="tr-head">'+or+'<h2>Options</h2></div><div class="tr-card"><div class="tr-rows" data-r="rows"></div></div><div class="tr-foot-row" data-r="foot"></div></div>'+Ni([[["↑","↓"],"Select"],[["←","→"],"Adjust"],[["ESC"],"Back"]])),J=F.el.querySelector('[data-r="rows"]'),K=(E,Y)=>by(E,{get:()=>a[Y],set:ot=>{a[Y]=ot,b()},sound:f}),ut=Zo("Driver name",{get:()=>a.playerName,set:E=>{const Y=oc(E);Y!==a.playerName&&(a.playerName=Y,b())}});F.items=[K("Master volume","masterVolume"),K("Music volume","musicVolume"),K("Effects volume","sfxVolume"),Dn("Graphics quality",{options:()=>[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],get:()=>a.quality,set:E=>{a.quality=E,b()},sound:f}),Dn("Camera shake",{options:()=>[{value:!1,label:"Off"},{value:!0,label:"On"}],get:()=>a.cameraShake,set:E=>{a.cameraShake=E,b()},sound:f}),ut];const bt=Dn("Auto accelerate",{options:()=>[{value:!1,label:"Off"},{value:!0,label:"On"}],get:()=>r.getSettings().autoGas,set:E=>{a.autoGas=!!E,b()},sound:f});bt.el.classList.add("tr-if-touch"),bt.skip=()=>!Ss(),F.items.splice(5,0,bt),F.items.forEach(E=>J.appendChild(E.el));const L=Te("Back",null,()=>{f("ui-back"),F.back()},"tr-small");L.enter=()=>F.back(),F.el.querySelector('[data-r="foot"]').appendChild(L.el),F.items.push(L),F.nameItem=ut,F.onShow=()=>F.items.forEach(E=>E.render&&E.render()),F.back=()=>N(S)}{const F=(...E)=>'<span class="k">'+E.map(Y=>Y==="/"?"<em>or</em>":'<i class="tr-key">'+Y+"</i>").join("")+"</span>",J=[[F("↑","←","↓","→","/","W","A","S","D"),"Drive: accelerate, steer, brake / reverse"],[F("SHIFT","/","B"),"Handbrake — kick the tail out and drift"],[F("SPACE","/","X"),"Use the item you are holding"],[F("C"),"Change camera"],[F("R"),"Reset car to the track"],[F("ESC","/","P"),"Pause"],[F("M"),"Mute sound"]],K=[[F("◀","▶"),"Steer — slide your left thumb between the two"],[F("GAS","BRAKE"),"Accelerate, brake / reverse"],[F("DRIFT"),"Handbrake — kick the tail out and drift"],[F("ITEM"),"Use the item you are holding (or tap the item slot)"],[F("❚❚","/","◉","/","↺"),"Pause, change camera, reset car to the track"],['<span class="k"><em>Tip</em></span>',"“Auto accelerate” in Options drives for you: just steer, brake and drift"]],ut=(n||[]).map(E=>'<div class="tr-item"><span class="tr-item-ic">'+oe(E.icon||"?")+"</span><span><b>"+oe(E.name)+"</b><small>"+oe(E.description||"")+"</small></span></div>").join(""),bt=C("controls","tr-controls tr-center",'<div class="tr-mid"><div class="tr-head">'+or+'<h2>Controls</h2></div><div class="tr-cols"><div class="tr-card"><h3>Driving</h3><div class="tr-keys tr-if-keys">'+J.map(([E,Y])=>E+"<span>"+oe(Y)+"</span>").join("")+'</div><div class="tr-keys tr-if-touch">'+K.map(([E,Y])=>E+"<span>"+oe(Y)+"</span>").join("")+'</div></div><div class="tr-card"><h3>Pickups</h3><div class="tr-items">'+(ut||"<small>Smash a crate to grab a random item.</small>")+'</div></div></div><div class="tr-note"><b>Multiplayer:</b> host a room and share the code or link; empty seats are bots.</div><div class="tr-foot-row" data-r="foot"></div></div>'+Ni([[["ENTER"],"Back"],[["ESC"],"Back"]])),L=Te("Got it",null,()=>bt.back(),"tr-small");bt.el.querySelector('[data-r="foot"]').appendChild(L.el),bt.items=[L],bt.back=()=>N(S)}{let bt=function(){const _t=J("msg");_t.textContent=w.msg?(w.msgErr?"⚠ ":"")+w.msg:"",_t.classList.toggle("err",!!w.msg&&w.msgErr)},L=function(_t,Tt){w.msg=_t||"",w.msgErr=!!Tt,bt()},E=function(_t){L(""),w.purpose=_t,N("car",{index:0})},Y=function(){if(w.code=Jo(at.input.value),w.code.length!==4){L(w.code?"Room codes have 4 letters — "+(4-w.code.length)+" more to go.":"Type the 4-letter room code from the host first.",!0),m.focus(K,!0),at.input.focus();return}E("join")},It=function(){w.busy&&(w.busy=!1,L(""),N("mp",{index:1}),c.onMpLeave&&c.onMpLeave())};var q=bt,X=L,lt=E,Mt=Y,xt=It;const F=C("mp","tr-mp tr-left",'<div class="tr-side"><div class="tr-head">'+or+'<h2>Multiplayer</h2><span class="tr-chip o">Up to 8</span></div><div class="tr-mp-form"><div class="tr-rows" data-r="name"></div><div data-r="host"></div><div class="tr-mp-or"><span>or join a friend</span></div><div class="tr-rows" data-r="code"></div><div data-r="join"></div><div class="tr-mp-msg" data-r="msg" role="status"></div><div class="tr-mp-foot" data-r="foot"></div></div><div class="tr-card tr-mp-busy"><div class="tr-spinner"></div><div class="tr-mp-busyt"><b>Connecting…</b><small data-r="busyt"></small></div><div data-r="cancel"></div></div></div>'+Ni([[["↑","↓"],"Select"],[["ENTER"],"Confirm"],[["ESC"],"Back"]])),J=_t=>F.el.querySelector('[data-r="'+_t+'"]'),K=2,ut=3,ot=Zo("Driver name",{get:()=>a.playerName,set:_t=>{const Tt=oc(_t);Tt!==a.playerName&&(a.playerName=Tt,b())}}),dt=Te("Host a game","Open a room, share the code",()=>E("host")),at=Zo("Room code",{get:()=>w.code,set:_t=>{const Tt=Jo(_t);Tt!==w.code&&w.msg&&L(""),w.code=Tt},maxLength:80,live:!0,onSubmit:Y,cls:"tr-code",placeholder:"····",capitalize:"characters",enterHint:"go"}),Et=Te("Join a game","Enter the code, pick a car",Y),ft=Te("Back",null,()=>F.back(),"tr-small");J("name").appendChild(ot.el),J("host").appendChild(dt.el),J("code").appendChild(at.el),J("join").appendChild(Et.el),J("foot").appendChild(ft.el);const ht=[ot,dt,at,Et,ft],gt=Te("Cancel",null,It,"tr-small");J("cancel").appendChild(gt.el),F.connect=()=>{const _t=w.purpose==="host";w.purpose=null,w.lastJoin=!_t;const Tt=_t?c.onMpHost:c.onMpJoin;if(!Tt){L("Multiplayer is not available here.",!0),N("mp",{index:_t?1:ut});return}w.busy=!0,w.busyText=_t?"Opening a new room":"Joining room "+w.code,L(""),N("mp"),Tt(_t?{playerName:a.playerName,carId:o.carId}:{code:w.code,playerName:a.playerName,carId:o.carId})},F.setMsg=L,F.joinIndex=ut,F.onShow=()=>{F.el.classList.toggle("busy",w.busy),F.items=w.busy?[gt]:ht,J("busyt").textContent=w.busyText,ot.render(),at.render(),bt()},F.key=_t=>{if(w.busy)return _t.key==="Escape"?(_t.repeat||(f("ui-back"),It()),!0):_t.key==="Backspace";const Tt=m.current();return(Tt===at||Tt===Et)&&/^[a-zA-Z]$/.test(_t.key)?(m.focus(K,!0),at.input.focus(),at.input.select(),"pass"):!1},F.back=()=>{L(""),N("main")}}{let L=function(B,yt){const tt=K().settings;tt[B]!==yt&&(tt[B]=yt,w.editAt=performance.now(),he(),B==="trackId"&&M(),c.onMpSettings&&c.onMpSettings(Object.assign({},tt)))},ht=function(B){const yt=K().joinUrls[B],tt=Et.children[B];if(!yt||!tt)return;const pt=tt.querySelector("span"),Rt=tt.querySelector("em"),At=ae=>{clearTimeout(ft),Array.from(Et.children).forEach(fe=>{fe.classList.remove("copied"),fe.querySelector("em").textContent="Copy"}),tt.isConnected&&(tt.classList.add("copied"),Rt.textContent=ae?"Copied!":Ss()?"Selected":"Selected — press Ctrl/⌘+C",ft=setTimeout(()=>{tt.classList.remove("copied"),Rt.textContent="Copy"},ae?1500:4e3))},Gt=()=>{let ae=!1;try{const fe=document.createRange();fe.selectNodeContents(pt);const Jt=window.getSelection();Jt.removeAllRanges(),Jt.addRange(fe),ae=!!(document.execCommand&&document.execCommand("copy")),ae&&Jt.removeAllRanges()}catch{ae=!1}At(ae)};try{typeof navigator<"u"&&navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(yt).then(()=>At(!0),Gt):Gt()}catch{Gt()}},Ft=function(){w.active=!1,w.purpose=null,N("main"),c.onMpLeave&&c.onMpLeave()},Yt=function(){const B=!!K().isHost;if(jt===B)return;jt=B;const yt=_==="lobby"?m.current():null;if(F.items=Lt(B),_==="lobby"){const tt=F.items.indexOf(yt);m.set(F.items,tt>=0?tt:F.defaultIndex())}},he=function(){const B=K(),yt=B.settings,tt=!!B.isHost;F.el.classList.toggle("host",tt);const pt=J("role");pt.textContent=tt?"Host":"Guest",pt.className="tr-chip "+(tt?"y":"");const Rt=J("status"),At=B.status==null?"":String(B.status);Rt.textContent!==At&&(Rt.textContent=At),Rt.style.display=At?"":"none",J("code").textContent!==B.code&&(J("code").textContent=B.code||"----");const Gt=B.joinUrls.slice(0,wy);bt("links",Gt.map(Ce=>'<div class="tr-lb-link" role="button" title="Copy the join link"><span>'+oe(Ce.replace(/^https?:\/\//i,""))+"</span><em>Copy</em></div>").join(""));const ae=Ss()?Math.min(Gt.length,1):Gt.length;J("linkl").textContent=Gt.length?"Join link"+(ae>1?"s":"")+(Ss()?" — tap to copy":" — click to copy"):"Share the code with your friends";const fe=B.players.slice(0,yi),Jt=Math.max(0,Math.min(yt.bots|0,yi-fe.length));let Ge="";fe.forEach(Ce=>{const yn=e.find(Ws=>Ws.id===Ce.carId);Ge+='<div class="tr-lb-p'+(Ce.isYou?" you":"")+'">'+Gf(yn?yn.color:"#8892b8")+'<span class="tr-lb-pn"><b>'+(Ce.isHost?'<i class="tr-lb-crown" title="Host">♛</i>':"")+"<span>"+oe(Ce.name||"Player")+"</span></b><small>"+oe(yn?yn.name:"—")+"</small></span>"+(Ce.isYou?'<span class="tr-lb-tag">You</span>':"")+"</div>"});for(let Ce=0;Ce<Jt;Ce++)Ge+='<div class="tr-lb-p bot"><span class="tr-lb-ic">⚙</span><span class="tr-lb-pn"><b><span>Bot</span></b><small>'+oe((Ui[yt.difficulty]||Ui[1]).label)+" AI</small></span></div>";for(let Ce=fe.length+Jt;Ce<yi;Ce++)Ge+='<div class="tr-lb-p open"><span class="tr-lb-pn"><b><span>Open seat</span></b></span></div>';bt("players",Ge);const _n=fe.length+Jt;J("count").textContent=fe.length+(fe.length===1?" player":" players")+(Jt?" + "+Jt+(Jt===1?" bot":" bots"):"")+" · "+_n+(_n===1?" car":" cars"),at.forEach(Ce=>Ce.render());const Vs=t.find(Ce=>Ce.id===yt.trackId);J("g-track").textContent=Vs?Vs.name:"—",J("g-laps").textContent=String(yt.laps),J("g-diff").textContent=(Ui[yt.difficulty]||Ui[1]).label,J("g-bots").textContent=yt.bots?"Up to "+yt.bots:"None",Yt()};var Ct=L,st=ht,ct=Ft,D=Yt,St=he;const F=C("lobby","tr-lobby tr-left",'<div class="tr-side"><div class="tr-head"><h2>Lobby</h2><span class="tr-chip" data-r="role"></span><span class="tr-lb-status" data-r="status"></span></div><div class="tr-lb-a"><div class="tr-card tr-lb-code"><div class="tr-lb-codebox"><small>Room code</small><b data-r="code"></b></div><div class="tr-lb-linkwrap"><small data-r="linkl">Join link — click to copy</small><div class="tr-lb-links" data-r="links"></div></div></div><div class="tr-card tr-lb-players"><h3><span>Starting grid</span><span data-r="count"></span></h3><div class="tr-lb-grid" data-r="players"></div></div></div><div class="tr-lb-b"><div class="tr-rows tr-cells" data-r="rows"></div><div class="tr-card tr-lb-guest" data-r="guest"><div class="tr-td-meta"><div class="tr-meta"><small>Track</small><b data-r="g-track"></b></div><div class="tr-meta"><small>Laps</small><b data-r="g-laps"></b></div><div class="tr-meta"><small>Difficulty</small><b data-r="g-diff"></b></div><div class="tr-meta"><small>Bots</small><b data-r="g-bots"></b></div></div><div class="tr-lb-wait">Waiting for host<i>.</i><i>.</i><i>.</i></div></div><div data-r="go"></div><div class="tr-lb-foot" data-r="foot"></div></div></div>'+Ni([[["↑","↓"],"Select"],[["←","→"],"Adjust"],[["ENTER"],"Confirm"],[["ESC"],"Leave"]])),J=B=>F.el.querySelector('[data-r="'+B+'"]'),K=()=>w.lobby,ut={},bt=(B,yt)=>{ut[B]!==yt&&(ut[B]=yt,J(B).innerHTML=yt)},E=Dn("Track",{options:()=>t.map(B=>({value:B.id,label:B.name})),get:()=>K().settings.trackId,set:B=>L("trackId",B),sound:f}),Y=Dn("Laps",{options:()=>h(2,8),get:()=>K().settings.laps,set:B=>L("laps",B),sound:f}),ot=Dn("Difficulty",{options:()=>Ui,get:()=>K().settings.difficulty,set:B=>L("difficulty",B),sound:f}),dt=Dn("Bots",{options:()=>h(0,yi-1).map(B=>({value:B.value,label:B.value?"Up to "+B.value:"None"})),get:()=>K().settings.bots,set:B=>L("bots",B),sound:f}),at=[E,Y,ot,dt];at.forEach(B=>J("rows").appendChild(B.el));const Et=J("links");let ft=0;const It={el:Et,enter:()=>ht(0),click:B=>{const yt=B&&B.target&&B.target.closest?B.target.closest(".tr-lb-link"):null,tt=yt?Array.prototype.indexOf.call(Et.children,yt):0;f("ui-select"),ht(Math.max(0,tt))},skip:()=>!K().joinUrls.length},gt=Te("Start race",null,()=>{c.onMpStart&&c.onMpStart(Object.assign({},K().settings))},"tr-go");J("go").appendChild(gt.el);const _t=Te("Change car",null,()=>{w.carBefore=o.carId;const B=K().players.find(yt=>yt.isYou);B&&e.some(yt=>yt.id===B.carId)&&(o.carId=B.carId),w.purpose="lobby",N("car",{index:0})},"tr-small"),Tt=Te("Leave",null,()=>Ft(),"tr-small");J("foot").appendChild(_t.el),J("foot").appendChild(Tt.el),_t.right=()=>(m.focus(m.items.indexOf(Tt)),!0),Tt.left=()=>(m.focus(m.items.indexOf(_t)),!0);const Lt=B=>B?[It].concat(at,[gt,_t,Tt]):[It,_t,Tt];let jt=null;F.defaultIndex=()=>F.items.indexOf(K().isHost?gt:_t),F.carIndex=()=>F.items.indexOf(_t),F.render=he,F.onShow=()=>{jt=null,F.items=Lt(!!K().isHost),jt=!!K().isHost,he()},F.escOnly=!0,F.back=Ft}function O(F,J){const K=w.lobby,ut=F||{},bt=K.settings.trackId;"code"in ut&&(K.code=String(ut.code==null?"":ut.code).toUpperCase()),Array.isArray(ut.joinUrls)&&(K.joinUrls=ut.joinUrls.filter(L=>typeof L=="string"&&L)),"isHost"in ut&&(K.isHost=!!ut.isHost),Array.isArray(ut.players)&&(K.players=ut.players.filter(Boolean).map(L=>Object.assign({},L))),ut.settings&&(J||!K.isHost||performance.now()-w.editAt>1500)&&(K.settings=A(ut.settings,K.settings)),"status"in ut&&(K.status=ut.status),x.lobby.render(),_==="lobby"&&K.settings.trackId!==bt&&M()}function H(F){const J=y&&w.active&&_==="car"&&w.purpose==="lobby";if(w.busy=!1,w.msg="",w.active||(w.lobby={code:"",joinUrls:[],isHost:!1,players:[],settings:A(null,{trackId:o.trackId,laps:v(),difficulty:o.difficulty,bots:yi-1}),status:null},w.editAt=-1e9),w.active=!0,J||(w.purpose=null),y||(y=!0,T=performance.now(),p.classList.add("on")),J||_==="lobby"){O(F,!0);return}const K=w.lobby,ut=F||{};"isHost"in ut&&(K.isHost=!!ut.isHost),ut.settings&&(K.settings=A(ut.settings,K.settings)),N("lobby"),O(F,!0),m.focus(x.lobby.defaultIndex(),!0)}function G(F){!y||!w.active||!F||O(F,!1)}function j(F){w.busy=!1,w.active=!1,w.purpose=null,y||(y=!0,T=performance.now(),p.classList.add("on")),w.msg=String(F==null||F===""?"Could not connect.":F),w.msgErr=!0,N("mp",{index:w.lastJoin?x.mp.joinIndex:1})}function W(F){const J=x[_];if(!J)return!1;const K=document.activeElement;if(K&&K.classList&&K.classList.contains("tr-input"))return F.key==="Enter"&&K._ttSubmit?(F.repeat||(f("ui-select"),K._ttSubmit()),!0):F.key==="Enter"||F.key==="Escape"?(K.blur(),f("ui-select"),!0):F.key==="ArrowUp"||F.key==="ArrowDown"?(K.blur(),m.key(F)):"pass";const ut=J.key?J.key(F):!1;return ut||(F.key==="Escape"||F.key==="Backspace"&&!J.escOnly?(F.repeat||J.back&&U(),!0):_==="title"?!1:m.key(F))}return{node:p,handleKey:W,show(F="title",J){y=!0,T=performance.now(),p.classList.add("on"),w.purpose=null,w.busy=!1,w.active=!1;let K=qf[F]||F||"title";if(K==="lobby"&&(K="mp"),K==="mp"){w.msg="";const ut=J&&J.joinCode!=null?Jo(J.joinCode):"";ut&&(w.code=ut),N("mp",{index:ut?3:1})}else N(K)},showLobby:H,updateLobby:G,showMpError:j,get lobbyVisible(){return y&&_==="lobby"},hide(){if(w.busy=!1,w.active=!1,w.purpose=null,!y)return;const F=document.activeElement;F&&F.classList&&F.classList.contains("tr-input")&&F.blur(),_&&x[_]&&(x[_].index=m.index),y=!1,p.classList.remove("on")},get visible(){return y},get shownAt(){return T},get screen(){return _},getSelection(){return{mode:o.mode,carId:o.carId,trackId:o.trackId,laps:v(),opponents:o.opponents,difficulty:o.difficulty}},destroy(){p.remove()}}}const Ty=50,Ey=3.6;function Ay(i){const t=ln("div","tr-layer tr-hud");t.innerHTML='<div class="tr-h-pos"><span class="tr-h-posn"><span data-r="posn">1</span><sup data-r="poss">st</sup></span><span class="tr-h-post tr-st" data-r="post">/ 8</span></div><div class="tr-h-lap"><small>LAP</small><b data-r="lap">1 / 3</b></div><div class="tr-h-item"><span class="tr-h-itemic" data-r="itemic"></span><span class="tr-h-itemt"><b data-r="itemn">NO ITEM</b><small class="tr-if-keys"><span class="tr-key">SPACE</span>to use</small></span></div><div class="tr-h-times"><small>TIME</small><b class="big" data-r="time">0:00.00</b><small>LAP</small><b data-r="lapt">0:00.00</b><small>BEST</small><b class="best" data-r="best">-:--.--</b><small class="dim">LAST</small><b class="dim" data-r="last">-:--.--</b></div><div class="tr-h-map"><canvas></canvas></div><div class="tr-h-speed"><svg viewBox="0 0 120 104"><defs><linearGradient id="tr-speedgrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#19d3c5"/><stop offset=".6" stop-color="#ffd02e"/><stop offset="1" stop-color="#ff6b1a"/></linearGradient></defs><path class="tr-h-arcbg" d="M16.7 85 A50 50 0 1 1 103.3 85"/><path class="tr-h-arcbg2" d="M16.7 85 A50 50 0 1 1 103.3 85"/><path class="tr-h-arc" pathLength="100" d="M16.7 85 A50 50 0 1 1 103.3 85"/></svg><div class="tr-h-kmh"><b data-r="kmh">0</b><small>KM/H</small></div><div class="tr-h-boost">BOOST</div></div><div class="tr-h-wrong">↺ WRONG WAY</div>',i.appendChild(t);const e=ln("div","tr-layer tr-hud tr-fx on",'<div class="tr-h-count"></div><div class="tr-h-flash"></div>');i.appendChild(e);const n={};t.querySelectorAll("[data-r]").forEach(R=>{const I=document.createTextNode(R.textContent);R.textContent="",R.appendChild(I),n[R.getAttribute("data-r")]=I});const s={};function r(R,I){return s[R]!==I?(s[R]=I,n[R].data=I,!0):!1}const a=R=>t.querySelector(R),o=a(".tr-h-pos"),l=a(".tr-h-lap"),c=a(".tr-h-item"),f=a(".tr-h-speed"),h=a(".tr-h-arc"),u=a(".tr-h-wrong"),d=e.querySelector(".tr-h-count"),g=e.querySelector(".tr-h-flash"),v=a(".tr-h-map"),p=a(".tr-h-map canvas"),m=p.getContext?p.getContext("2d"):null;let x=!1,_=0,y=0,T=0,S=0,w=null,A=0,M=null,b=1,C=0,N=0,U=0;function O(){const R=Math.min(2,window.devicePixelRatio||1),I=Math.max(64,Math.round(Math.min(v.clientWidth,v.clientHeight)*R));I!==S&&(S=I,p.width=I,p.height=I,w=null)}function H(R){w=R,A=R.length,M||(M=document.createElement("canvas")),M.width=S,M.height=S;const I=M.getContext("2d");if(I.clearRect(0,0,S,S),!R.length)return;let k=1/0,q=-1/0,X=1/0,lt=-1/0;for(let ct=0;ct<R.length;ct++){const D=R[ct];D[0]<k&&(k=D[0]),D[0]>q&&(q=D[0]),D[1]<X&&(X=D[1]),D[1]>lt&&(lt=D[1])}const Mt=S*.13,xt=Math.max(.001,q-k),Ct=Math.max(.001,lt-X);b=Math.min((S-Mt*2)/xt,(S-Mt*2)/Ct),C=(S-xt*b)/2-k*b,N=(S-Ct*b)/2-X*b;const st=()=>{I.beginPath();for(let ct=0;ct<R.length;ct++){const D=R[ct][0]*b+C,St=R[ct][1]*b+N;ct===0?I.moveTo(D,St):I.lineTo(D,St)}I.closePath()};if(I.lineJoin="round",I.lineCap="round",st(),I.strokeStyle="#0b0f22",I.lineWidth=S*.075,I.stroke(),st(),I.strokeStyle="#fff6e0",I.lineWidth=S*.042,I.stroke(),st(),I.strokeStyle="#3a4474",I.lineWidth=S*.012,I.setLineDash([S*.02,S*.03]),I.stroke(),I.setLineDash([]),R.length>1){const ct=R[0][0]*b+C,D=R[0][1]*b+N;let St=R[1][0]-R[0][0],F=R[1][1]-R[0][1];const J=Math.hypot(St,F)||1;St/=J,F/=J;const K=S*.045;I.beginPath(),I.moveTo(ct-F*K,D+St*K),I.lineTo(ct+F*K,D-St*K),I.strokeStyle="#0b0f22",I.lineWidth=S*.035,I.lineCap="butt",I.stroke(),I.strokeStyle="#ff6b1a",I.lineWidth=S*.018,I.stroke()}}function G(R,I){if(!m||!R||!R.points||I-U<Ty)return;U=I,S||O(),(R.points!==w||R.points.length!==A)&&H(R.points),m.clearRect(0,0,S,S),M&&m.drawImage(M,0,0);const k=R.cars;if(!k)return;const q=S*.03;let X=null;m.lineWidth=S*.014,m.strokeStyle="#0b0f22";for(let lt=k.length-1;lt>=0;lt--){const Mt=k[lt];if(Mt.isPlayer){X=Mt;continue}m.beginPath(),m.arc(Mt.x*b+C,Mt.z*b+N,q,0,6.2832),m.fillStyle=Mt.color||"#9aa6c8",m.fill(),m.stroke()}if(X){const lt=X.x*b+C,Mt=X.z*b+N,xt=1+.18*Math.sin(I*.008);m.beginPath(),m.arc(lt,Mt,q*2.1*xt,0,6.2832),m.fillStyle="rgba(255,208,46,.3)",m.fill(),m.beginPath(),m.arc(lt,Mt,q*1.45,0,6.2832),m.fillStyle=X.color||"#ffd02e",m.fill(),m.lineWidth=S*.022,m.strokeStyle="#ffffff",m.stroke(),m.lineWidth=S*.008,m.strokeStyle="#0b0f22",m.beginPath(),m.arc(lt,Mt,q*1.45+S*.014,0,6.2832),m.stroke()}}function j(){x?O():S=0}window.addEventListener("resize",j);const W=typeof ResizeObserver<"u"?new ResizeObserver(j):null;W&&W.observe(v);function V(R){if(!R)return;const I=performance.now();if(R.speed!=null){const X=Math.abs(R.speed);r("kmh",String(Math.round(X*Ey)));const lt=R.topSpeed>0?R.topSpeed:40,Mt=Math.round(Xi(X/(lt*1.2),0,1)*200)/2;s.arc!==Mt&&(s.arc=Mt,h.style.strokeDashoffset=String(100-Mt))}const k=!!R.boost;if(s.boost!==k&&(s.boost=k,f.classList.toggle("boost",k)),R.position!=null){const X=R.total||0,lt=X>1;s.showPos!==lt&&(s.showPos=lt,o.style.display=lt?"":"none"),lt&&(r("posn",String(R.position))&&(n.poss.data=yd(R.position),o.classList.toggle("p1",R.position===1),s.posInit&&ur(o,"pop"),s.posInit=!0),r("post","/ "+X))}if(R.lap!=null&&r("lap",R.lap+" / "+(R.laps||"?"))&&l.classList.toggle("final",R.laps>1&&R.lap>=R.laps),R.time!=null&&r("time",ii(R.time)),R.lapTime!=null&&r("lapt",ii(R.lapTime)),R.bestLap!==void 0&&r("best",ii(R.bestLap)),R.lastLap!==void 0&&r("last",ii(R.lastLap)),R.item!==void 0){const X=R.item?R.item.id||R.item.name:"";s.item!==X&&(s.item=X,R.item?(n.itemic.data=R.item.icon||"?",n.itemn.data=R.item.name||"ITEM",c.classList.add("has"),ur(c,"pop"),clearTimeout(c._t),c._t=setTimeout(()=>c.classList.remove("pop"),420)):(n.itemic.data="",n.itemn.data="NO ITEM",c.classList.remove("has","pop")))}const q=!!R.wrongWay;s.wrong!==q&&(s.wrong=q,u.classList.toggle("on",q)),R.minimap&&G(R.minimap,I)}function Q(R){const I=String(R);d.textContent=I,d.classList.toggle("go",!/^\d+$/.test(I)),ur(d,"run"),clearTimeout(T),T=setTimeout(()=>d.classList.remove("run"),1300)}function et(R,I){const k=I>0?I:1800;g.textContent=String(R),g.classList.remove("out"),ur(g,"on"),clearTimeout(_),clearTimeout(y),_=setTimeout(()=>{g.classList.remove("on"),g.classList.add("out"),y=setTimeout(()=>g.classList.remove("out"),300)},k)}function vt(){clearTimeout(_),clearTimeout(y),clearTimeout(T),g.classList.remove("on","out"),d.classList.remove("run"),u.classList.remove("on"),s.wrong=!1,s.posInit=!1}return{node:t,itemEl:c,update:V,showCountdown:Q,flashMessage:et,show(){x||(x=!0,vt(),t.classList.add("on"),O(),U=0)},hide(){x&&(x=!1,vt(),t.classList.remove("on"))},get visible(){return x},destroy(){window.removeEventListener("resize",j),W&&W.disconnect(),vt(),t.remove(),e.remove()}}}const Cy=[10,8,6,5,4,3,2,1];function Md(i){return'<div class="tr-hints">'+i.map(([t,e])=>"<span>"+t.map(n=>'<i class="tr-key">'+n+"</i>").join("")+oe(e)+"</span>").join("")+"</div>"}function Ry(i,t){const e=t||{},n=g=>{e.onUiSound&&e.onUiSound(g)},s=ln("div","tr-layer tr-pause",'<div class="tr-pause-box"><h2 data-r="title">Paused</h2></div>'+Md([[["↑","↓"],"Select"],[["ENTER"],"Confirm"],[["ESC"],"Resume"]]));i.appendChild(s);const r=s.querySelector(".tr-pause-box"),a=Fc({sound:n}),o=g=>()=>{e[g]&&e[g]()},l=s.querySelector('[data-r="title"]'),c=Te("Restart race",null,o("onRestart")),f=Te("Quit to menu",null,o("onQuit")),h=[Te("Resume",null,o("onResume")),c,f];h.forEach(g=>r.appendChild(g.el)),c.skip=()=>c.el.style.display==="none";let u=!1,d=0;return{node:s,show(g){const v=!!(g&&g.multiplayer);l.textContent=v?"Menu":"Paused",c.el.style.display=v?"none":"",f.setLabel(v?"Leave race":"Quit to menu"),u=!0,d=performance.now(),s.classList.add("on"),a.set(h,0)},hide(){u=!1,s.classList.remove("on")},handleKey(g){return g.key==="Escape"||g.key==="p"||g.key==="P"?(g.repeat||(n("ui-back"),e.onResume&&e.onResume()),!0):a.key(g)},get visible(){return u},get shownAt(){return d},destroy(){s.remove()}}}function Py(i,t){if(!i)return"";if(typeof i=="string")return i;if(typeof i=="object"){const e=i.lap||i.bestLap,n=i.race||i.bestRace;if(e&&n)return"New lap + race record!";if(e)return"New lap record!";if(n)return"New race record!"}return t==="timetrial"?"New best lap!":"New record!"}function Ly(i,t){const e=t||{},n=h=>{e.onUiSound&&e.onUiSound(h)},s=ln("div","tr-layer tr-results",'<div class="tr-res-box"><div class="tr-res-head"><h2 data-r="title"></h2><div class="tr-res-sub" data-r="sub"></div></div><div data-r="podium"></div><div class="tr-res-body"><div class="tr-card tr-res-main" data-r="main"></div><div class="tr-card tr-res-champ" data-r="champ"></div></div><div class="tr-res-btns" data-r="btns"></div></div>'+Md([[["←","→"],"Select"],[["ENTER"],"Confirm"]]));i.appendChild(s);const r=h=>s.querySelector('[data-r="'+h+'"]'),a=Fc({sound:n,horizontal:!0});let o=!1,l=0,c=null;function f(h){const u=h||{},d=u.standings||[],g=u.mode||"race",v=u.championship||null,p=u.multiplayer||null,m=g==="timetrial"&&!p,x=d.find(U=>U.isPlayer);let _;if(v&&v.final){const O=(v.table||[]).slice().sort((H,G)=>G.points-H.points).findIndex(H=>H.isPlayer)+1;_=O===1?"<em>Champion!</em>":O>0?"Championship: <em>"+_a(O)+"</em>":"Championship over"}else m?_="Time trial <em>done</em>":x?_=x.position===1?"<em>You win!</em>":"You finished <em>"+_a(x.position)+"</em>":_="Race results";r("title").innerHTML=_;const y=Py(u.newRecord,g);r("sub").innerHTML=(y?'<span class="tr-badge">★ '+oe(y)+"</span>":"")+'<span class="t">'+oe(u.trackName||"")+"</span>"+(p?'<span class="tr-chip p">Multiplayer</span>':v?'<span class="tr-chip y">Round '+oe(v.round)+" / "+oe(v.rounds)+"</span>":'<span class="tr-chip '+(m?"":"o")+'">'+(m?"Time Trial":"Single Race")+"</span>");const T=d.find(U=>U.finished&&U.finishTime!=null),S=T?T.finishTime:null;let w='<table class="tr-table"><thead><tr><th>Pos</th><th>Driver</th><th class="c">Car</th><th class="r">'+(m?"Total":"Time / gap")+'</th><th class="r">Best lap</th>'+(v?'<th class="r">Pts</th>':"")+"</tr></thead><tbody>";d.forEach((U,O)=>{const H=U.position||O+1;let G;!U.finished||U.finishTime==null?G="DNF":H===1||S==null||U===T?G=ii(U.finishTime):G="+"+ii(Math.max(0,U.finishTime-S)),w+='<tr class="'+(U.isPlayer?"me":"")+'" style="animation-delay:'+(O*.05).toFixed(2)+'s"><td>'+_a(H)+'</td><td class="n">'+oe(U.name)+(p&&(U.isHuman||U.isPlayer)?'<i class="tr-hum" title="Human driver">'+(U.isPlayer?"You":"Human")+"</i>":"")+'</td><td class="c">'+oe(U.carName||U.car&&U.car.def&&U.car.def.name||"")+'</td><td class="r">'+G+'</td><td class="r">'+ii(U.bestLap)+"</td>"+(v?'<td class="r pts">+'+(Cy[H-1]||0)+"</td>":"")+"</tr>"}),r("main").innerHTML=w+"</tbody></table>";const A=r("champ"),M=r("podium");if(M.innerHTML="",s.querySelector(".tr-res-box").classList.toggle("champ",!!(v&&v.table)),v&&v.table){const U=v.table.slice().sort((O,H)=>H.points-O.points);if(A.style.display="",A.innerHTML="<h3>"+(v.final?"Final standings":"Championship")+'<span>Pts</span></h3><table class="tr-table"><tbody>'+U.map((O,H)=>'<tr class="'+(O.isPlayer?"me":"")+'" style="animation-delay:'+(.15+H*.05).toFixed(2)+'s"><td>'+_a(H+1)+'</td><td class="n">'+oe(O.name)+'</td><td class="r pts">'+oe(O.points)+"</td></tr>").join("")+"</tbody></table>",v.final){const O=H=>U[H]?'<div class="tr-pod p'+(H+1)+(U[H].isPlayer?" me":"")+'"><b>'+oe(U[H].name)+"</b><small>"+oe(U[H].points)+" pts</small><div>"+(H+1)+"</div></div>":"";M.innerHTML='<div class="tr-podium">'+O(1)+O(0)+O(2)+"</div>"}}else A.style.display="none",A.innerHTML="";const b=r("btns");b.innerHTML="";const C=U=>()=>{e[U]&&e[U]()},N=[];p?N.push(Te("Back to lobby",null,C("onMpLobby"),"tr-go")):(v&&!v.final&&N.push(Te("Next race",null,C("onNextRace"),"tr-go")),v||N.push(Te(m?"Try again":"Race again",null,C("onRestart"),"tr-go")),N.push(Te(v&&v.final?"Back to menu":"Menu",null,C("onQuit"),v&&v.final?"tr-go":""))),N.forEach(U=>b.appendChild(U.el)),c=C(p?"onMpLobby":"onQuit"),o=!0,l=performance.now(),s.classList.add("on"),a.set(N,0)}return{node:s,show:f,hide(){o=!1,s.classList.remove("on")},handleKey(h){return h.key==="Escape"?(!h.repeat&&c&&(n("ui-back"),c()),!0):a.key(h)},get visible(){return o},get shownAt(){return l},destroy(){s.remove()}}}const Yf={left:"steer",right:"steer",gas:"pedal",brake:"pedal",drift:"drift",fire:"fire"},Iy={steer:!0,pedal:!0},jf=i=>'<svg viewBox="0 0 40 40" aria-hidden="true"'+(i?' style="transform:scaleX(-1)"':"")+'><path d="M27 5 L9 20 L27 35 Z" fill="currentColor" stroke="#0b0f22" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke"/></svg>',Qo={pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="4" width="5" height="16" rx="1.5" fill="currentColor"/><rect x="14" y="4" width="5" height="16" rx="1.5" fill="currentColor"/></svg>',camera:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8.5 A2 2 0 0 1 5 6.5 H7.6 L9 4.5 H15 L16.4 6.5 H19 A2 2 0 0 1 21 8.5 V17 A2 2 0 0 1 19 19 H5 A2 2 0 0 1 3 17 Z" fill="currentColor"/><circle cx="12" cy="12.6" r="3.6" fill="none" stroke="#0b0f22" stroke-width="2"/></svg>',reset:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.2 8.2 A7.2 7.2 0 1 1 4.8 12.6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M3.2 4.2 L6.6 8.8 L11.6 6.4" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'};function ky(i,{handlers:t,getAutoGas:e,itemSlot:n}){const s=t||{},r={active:!1,throttle:0,steer:0,handbrake:!1,fire:!1},a=ln("div","tr-layer tr-tc",'<div class="tr-tc-top"><div class="tr-tc-sm" data-act="onResetRequest" role="button" aria-label="Reset car to the track">'+Qo.reset+'</div><div class="tr-tc-sm" data-act="onCameraRequest" role="button" aria-label="Change camera">'+Qo.camera+'</div><div class="tr-tc-sm" data-act="onPauseRequest" role="button" aria-label="Pause">'+Qo.pause+'</div></div><div class="tr-tc-btn tr-tc-l" data-tc="left" role="button" aria-label="Steer left">'+jf(!1)+'</div><div class="tr-tc-btn tr-tc-r" data-tc="right" role="button" aria-label="Steer right">'+jf(!0)+'</div><div class="tr-tc-btn tr-tc-drift" data-tc="drift" role="button" aria-label="Handbrake"><b>Drift</b></div><div class="tr-tc-btn tr-tc-item empty" data-tc="fire" role="button" aria-label="Use item"><i></i><small>Item</small></div><div class="tr-tc-btn tr-tc-brake" data-tc="brake" role="button" aria-label="Brake / reverse"><b>Brake</b><small>Reverse</small></div><div class="tr-tc-btn tr-tc-gas" data-tc="gas" role="button" aria-label="Accelerate"><b>Gas</b></div>');i.appendChild(a);const o=a.querySelector(".tr-tc-item"),l=o.querySelector("i"),c=Array.from(a.querySelectorAll("[data-tc]"));n&&(n.setAttribute("data-tc","fire"),c.push(n)),c.forEach(_=>{_._tc=_.getAttribute("data-tc")});const f=new Map;let h=0,u=!1;function d(){let _=0,y=0,T=!1,S=!1,w=!1,A=!1;f.forEach(M=>{M.name==="left"?_=Math.max(_,M.seq):M.name==="right"?y=Math.max(y,M.seq):M.name==="gas"?T=!0:M.name==="brake"?S=!0:M.name==="drift"?w=!0:M.name==="fire"&&(A=!0)}),r.steer=_||y?_>y?1:-1:0,r.throttle=r.active?S?-1:T||u?1:0:0,r.handbrake=w,r.fire=A;for(let M=0;M<c.length;M++){const b=c[M];let C=!1;f.forEach(N=>{N.el===b&&(C=!0)}),b._on!==C&&(b._on=C,b.classList.toggle("on",C))}}function g(_){if(!r.active||_.pointerType==="mouse"&&_.button!==0)return;const y=_.currentTarget;_.preventDefault();try{y.setPointerCapture(_.pointerId)}catch{}f.set(_.pointerId,{el:y,name:y._tc,seq:++h}),d()}function v(_){const y=f.get(_.pointerId);if(!y)return;const T=Yf[y.name];if(!Iy[T])return;const S=document.elementFromPoint(_.clientX,_.clientY),w=S&&S.closest?S.closest("[data-tc]"):null;w&&w!==y.el&&Yf[w._tc]===T&&(y.el=w,y.name=w._tc,y.seq=++h,d())}function p(_){f.delete(_.pointerId)&&d()}const m=_=>_.preventDefault();c.forEach(_=>{_.addEventListener("pointerdown",g),_.addEventListener("pointermove",v),_.addEventListener("pointerup",p),_.addEventListener("pointercancel",p),_.addEventListener("lostpointercapture",p),_.addEventListener("contextmenu",m),_.addEventListener("touchstart",y=>{r.active&&y.cancelable&&y.preventDefault()},{passive:!1})}),window.addEventListener("pointerup",p,!0),window.addEventListener("pointercancel",p,!0),a.addEventListener("contextmenu",m),a.querySelectorAll("[data-act]").forEach(_=>{const y=_.getAttribute("data-act");_.addEventListener("click",T=>{T.preventDefault(),r.active&&s[y]&&s[y]()})});let x=null;return{node:a,state:r,setActive(_){_=!!_,u=!!(e&&e()),a.classList.toggle("auto",u),r.active!==_&&(r.active=_,a.classList.toggle("on",_),f.clear()),d()},setItem(_){const y=_?_.id||_.name||"?":"";y!==x&&(x=y,l.textContent=_?_.icon||"?":"",o.classList.toggle("empty",!_))},destroy(){window.removeEventListener("pointerup",p,!0),window.removeEventListener("pointercancel",p,!0),a.remove()}}}function Dy(i,{tracks:t=[],cars:e=[],items:n=[],handlers:s={}}={}){const r=yy();if(typeof document>"u"||!i){const p=()=>{};return{showMenu:p,hideMenu:p,showHUD:p,hideHUD:p,updateHUD:p,showCountdown:p,flashMessage:p,showPause:p,hidePause:p,showResults:p,hideResults:p,showLobby:p,updateLobby:p,showMpError:p,isLobbyVisible:()=>!1,getMenuScreen:()=>null,getSettings:()=>r.getSettings(),touch:{active:!1,throttle:0,steer:0,handbrake:!1,fire:!1},records:r.records,isCapturingInput:()=>!1,destroy:p}}uy();const a=ln("div","tr-root");i.appendChild(a);const o=Sy(a,{tracks:t,cars:e,items:n,handlers:s,store:r}),l=Ay(a),c=Ry(a,s),f=Ly(a,s),h=ky(a,{handlers:s,getAutoGas:()=>r.getSettings().autoGas,itemSlot:l.itemEl});a.insertBefore(h.node,c.node);const u=()=>h.setActive(l.visible&&Ss()&&!o.visible&&!c.visible&&!f.visible),d=typeof MutationObserver<"u"?new MutationObserver(u):null;d&&d.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const g=()=>f.visible?f:c.visible?c:o.visible?o:null;function v(p){const m=g();if(!m||p.ctrlKey||p.metaKey||p.altKey||p.timeStamp&&p.timeStamp<m.shownAt)return;const x=m.handleKey(p);x===!0?(p.preventDefault(),p.stopPropagation()):x==="pass"&&p.stopPropagation()}return window.addEventListener("keydown",v,!0),{showMenu(p="title",m){c.hide(),f.hide(),o.show(p,m),u()},hideMenu(){o.hide(),u()},showLobby(p){c.hide(),f.hide(),o.showLobby(p),u()},updateLobby(p){o.updateLobby(p)},isLobbyVisible(){return o.lobbyVisible},showMpError(p){c.hide(),f.hide(),o.showMpError(p),u()},showHUD(){l.show(),u()},hideHUD(){l.hide(),u()},updateHUD(p){l.update(p),p&&p.item!==void 0&&h.setItem(p.item)},showCountdown(p){l.showCountdown(p)},flashMessage(p,m){l.flashMessage(p,m)},showPause(p){c.visible||c.show(p),u()},hidePause(){c.hide(),u()},showResults(p){c.hide(),f.show(p),u()},hideResults(){f.hide(),u()},getSettings(){return r.getSettings()},touch:h.state,records:r.records,isCapturingInput(){return!!g()},getMenuScreen(){return o.visible?o.screen:null},getSelection(){return o.getSelection()},destroy(){window.removeEventListener("keydown",v,!0),d&&d.disconnect(),h.destroy(),o.destroy(),l.destroy(),c.destroy(),f.destroy(),a.remove()}}}function Xt(i,t,{type:e="sine",f:n=440,f2:s=0,t:r=0,dur:a=.15,vol:o=.2,attack:l=.004,lp:c=0}){const f=i.createOscillator(),h=i.createGain();if(f.type=e,f.frequency.setValueAtTime(n,r),s>0&&f.frequency.exponentialRampToValueAtTime(s,r+a),h.gain.setValueAtTime(1e-4,r),h.gain.linearRampToValueAtTime(o,r+l),h.gain.exponentialRampToValueAtTime(1e-4,r+a),c>0){const u=i.createBiquadFilter();u.type="lowpass",u.frequency.value=c,f.connect(u),u.connect(h)}else f.connect(h);return h.connect(t),f.start(r),f.stop(r+a+.03),f}function an(i,t,e,{t:n=0,dur:s=.2,vol:r=.2,type:a="bandpass",f:o=1e3,f2:l=0,q:c=1,attack:f=.003}){const h=i.createBufferSource();h.buffer=e,h.loop=!0;const u=i.createBiquadFilter();u.type=a,u.Q.value=c,u.frequency.setValueAtTime(o,n),l>0&&u.frequency.exponentialRampToValueAtTime(l,n+s);const d=i.createGain();d.gain.setValueAtTime(1e-4,n),d.gain.linearRampToValueAtTime(r,n+f),d.gain.exponentialRampToValueAtTime(1e-4,n+s),h.connect(u),u.connect(d),d.connect(t),h.start(n,Math.random()*1.5),h.stop(n+s+.03)}const qe=i=>440*Math.pow(2,(i-69)/12);function lr(i,t,e,n,s,r){Xt(i,t,{type:"sine",f:qe(n),t:e,dur:s,vol:r}),Xt(i,t,{type:"triangle",f:qe(n+12),t:e,dur:s*.6,vol:r*.35})}function ya(i,t,e,n,s,r){Xt(i,t,{type:"sawtooth",f:qe(n),t:e,dur:s,vol:r*.6,attack:.015,lp:2600}),Xt(i,t,{type:"square",f:qe(n)*1.004,t:e,dur:s,vol:r*.3,attack:.015,lp:1800})}const Uy={"ui-move":{gap:.03,fn(i,t,e,n,s){Xt(i,t,{type:"triangle",f:720,f2:940,t:n,dur:.06,vol:.16*s})}},"ui-select":{gap:.05,fn(i,t,e,n,s){Xt(i,t,{type:"triangle",f:qe(76),t:n,dur:.09,vol:.2*s}),Xt(i,t,{type:"triangle",f:qe(83),t:n+.07,dur:.16,vol:.2*s}),Xt(i,t,{type:"sine",f:qe(95),t:n+.07,dur:.12,vol:.06*s})}},"ui-back":{gap:.05,fn(i,t,e,n,s){Xt(i,t,{type:"triangle",f:qe(76),t:n,dur:.08,vol:.18*s}),Xt(i,t,{type:"triangle",f:qe(69),t:n+.06,dur:.14,vol:.18*s})}},count:{gap:.1,fn(i,t,e,n,s){Xt(i,t,{type:"square",f:qe(69),t:n,dur:.22,vol:.14*s,lp:1800}),Xt(i,t,{type:"sine",f:qe(69),t:n,dur:.28,vol:.22*s})}},go:{gap:.1,fn(i,t,e,n,s){Xt(i,t,{type:"square",f:qe(81),t:n,dur:.6,vol:.13*s,lp:2600}),Xt(i,t,{type:"sine",f:qe(81),t:n,dur:.7,vol:.22*s}),Xt(i,t,{type:"triangle",f:qe(88),t:n,dur:.6,vol:.12*s}),an(i,t,e,{t:n,dur:.35,vol:.06*s,type:"highpass",f:5e3})}},pickup:{gap:.05,fn(i,t,e,n,s){[84,88,91,96].forEach((r,a)=>lr(i,t,n+a*.055,r,.2,.17*s))}},boost:{gap:.15,fn(i,t,e,n,s){an(i,t,e,{t:n,dur:.75,vol:.22*s,f:500,f2:5200,q:1.4,attack:.05}),Xt(i,t,{type:"sawtooth",f:160,f2:880,t:n,dur:.55,vol:.12*s,attack:.03,lp:2400}),Xt(i,t,{type:"sine",f:320,f2:1760,t:n,dur:.5,vol:.08*s,attack:.03})}},fire:{gap:.06,fn(i,t,e,n,s){Xt(i,t,{type:"square",f:980,f2:190,t:n,dur:.2,vol:.16*s,lp:3200}),an(i,t,e,{t:n,dur:.12,vol:.14*s,f:2400,f2:700,q:.8}),Xt(i,t,{type:"sine",f:180,f2:70,t:n,dur:.14,vol:.2*s})}},explosion:{gap:.08,fn(i,t,e,n,s){an(i,t,e,{t:n,dur:.75,vol:.4*s,type:"lowpass",f:2600,f2:180,q:.5}),Xt(i,t,{type:"sine",f:130,f2:38,t:n,dur:.55,vol:.45*s}),Xt(i,t,{type:"triangle",f:310,f2:60,t:n,dur:.22,vol:.18*s}),an(i,t,e,{t:n+.02,dur:.14,vol:.14*s,type:"highpass",f:3500})}},zap:{gap:.08,fn(i,t,e,n,s){const r=Xt(i,t,{type:"sawtooth",f:1500,t:n,dur:.42,vol:.13*s,lp:4200});for(let a=0;a<12;a++)r.frequency.setValueAtTime((a%2?620:1500)*(1-a*.045),n+a*.032);Xt(i,t,{type:"square",f:2400,f2:300,t:n,dur:.35,vol:.05*s,lp:5e3}),an(i,t,e,{t:n,dur:.3,vol:.08*s,type:"highpass",f:4200})}},splat:{gap:.08,fn(i,t,e,n,s){an(i,t,e,{t:n,dur:.3,vol:.3*s,type:"lowpass",f:1500,f2:240,q:2}),Xt(i,t,{type:"sine",f:340,f2:70,t:n,dur:.22,vol:.26*s}),Xt(i,t,{type:"sine",f:190,f2:420,t:n+.13,dur:.1,vol:.14*s})}},crash:{gap:.09,fn(i,t,e,n,s){an(i,t,e,{t:n,dur:.32,vol:.32*s,f:1300,f2:400,q:.7}),Xt(i,t,{type:"sine",f:120,f2:48,t:n,dur:.25,vol:.36*s}),Xt(i,t,{type:"square",f:420,f2:150,t:n,dur:.07,vol:.08*s,lp:1800})}},bump:{gap:.07,fn(i,t,e,n,s){Xt(i,t,{type:"sine",f:170,f2:72,t:n,dur:.13,vol:.3*s}),an(i,t,e,{t:n,dur:.07,vol:.12*s,type:"lowpass",f:1400})}},lap:{gap:.2,fn(i,t,e,n,s){lr(i,t,n,88,.3,.2*s),lr(i,t,n+.12,93,.5,.2*s)}},"final-lap":{gap:.3,fn(i,t,e,n,s){for(let r=0;r<2;r++)[81,85,88].forEach((a,o)=>{Xt(i,t,{type:"square",f:qe(a),t:n+r*.3+o*.075,dur:.11,vol:.11*s,lp:3e3}),Xt(i,t,{type:"sine",f:qe(a),t:n+r*.3+o*.075,dur:.14,vol:.14*s})});lr(i,t,n+.6,93,.6,.18*s)}},finish:{gap:.5,fn(i,t,e,n,s){[[72,0,.16],[76,.14,.16],[79,.28,.16],[84,.42,.7]].forEach(([r,a,o])=>ya(i,t,n+a,r,o,.2*s)),ya(i,t,n+.42,76,.7,.12*s),an(i,t,e,{t:n+.42,dur:.5,vol:.05*s,type:"highpass",f:6e3})}},win:{gap:.5,fn(i,t,e,n,s){[[72,0,.14],[72,.15,.1],[72,.26,.1],[76,.38,.2],[79,.6,.2],[76,.82,.12],[79,.95,.14],[84,1.1,1]].forEach(([a,o,l])=>ya(i,t,n+o,a,l,.2*s)),[[60,.38,.4],[64,.6,.4],[67,1.1,1],[76,1.1,1],[48,1.1,1]].forEach(([a,o,l])=>ya(i,t,n+o,a,l,.1*s)),[1.1,1.2,1.3,1.42].forEach((a,o)=>lr(i,t,n+a,96+[0,4,7,12][o],.5,.08*s)),an(i,t,e,{t:n+1.1,dur:.9,vol:.05*s,type:"highpass",f:6e3})}}},wn=i=>440*Math.pow(2,(i-69)/12),Ny=.16,zy=30,Zf=[[[0,"m"],[-4,"M"],[3,"M"],[-2,"M"]],[[0,"m"],[-2,"M"],[-4,"M"],[-5,"M"]],[[5,"m"],[0,"m"],[-4,"M"],[-2,"M"]],[[-4,"M"],[-2,"M"],[0,"m"],[0,"m"]],[[0,"m"],[3,"M"],[-2,"M"],[5,"m"]]],$f=[[[0,"M7"],[-3,"m7"],[5,"M7"],[7,"M"]],[[5,"M7"],[4,"m7"],[2,"m7"],[7,"M"]],[[-3,"m7"],[5,"M7"],[0,"M7"],[7,"M"]]],Kf={m:[0,3,7],M:[0,4,7],m7:[0,3,7,10],M7:[0,4,7,11]},Jf=[[0,1,2,3,2,1,0,1,2,3,2,1,0,1,2,3],[0,2,1,3,0,2,1,3,0,2,1,3,3,2,1,0],[3,2,1,0,3,2,1,0,3,2,1,0,1,2,3,2],[0,0,2,0,1,0,3,0,0,0,2,0,1,3,2,1]];function Fy(i,t,e){let n=null,s=null,r=null,a=0,o=0,l=1,c=null;const f=()=>(l=l*1664525+1013904223>>>0,l/4294967296),h=T=>T[Math.floor(f()*T.length)];function u(T){if(s==="race"){const S=[],w=[0,3,5,7,10,12,15];let A=2+Math.floor(f()*3);for(let M=0;M<32;M++)f()<(M%4===0?.85:.5)?(A=Math.max(0,Math.min(w.length-1,A+Math.floor(f()*5)-2)),S.push(w[A])):S.push(null);c={prog:T===0?Zf[0]:h(Zf),arp:h(Jf),lead:T%2===1||f()<.35?S:null,breakdown:T>0&&T%4===3,bassOct:f()<.5,openHat:f()<.6}}else c={prog:T===0?$f[0]:h($f),arp:h(Jf),sparkle:f()<.6}}const d=(T,S)=>Xt(i,r,{type:"sine",f:150,f2:42,t:T,dur:.2,vol:S,attack:.002}),g=(T,S)=>{an(i,r,e,{t:T,dur:.15,vol:S,f:1900,q:.7}),Xt(i,r,{type:"triangle",f:210,f2:140,t:T,dur:.09,vol:S*.6})},v=(T,S,w)=>an(i,r,e,{t:T,dur:w?.16:.04,vol:S,type:"highpass",f:7500});function p(T,S,w){const A=Math.floor(T/16),M=T%16,b=Math.floor(A/4);T%64===0&&u(b);const[C,N]=c.prog[A%4],U=45+C,O=Kf[N],H=A%4===3;if(!c.breakdown||A%4>=2?(M%4===0&&d(S,.34),(M===4||M===12)&&g(S,.17),H&&M>=12&&g(S,.07+(M-12)*.03)):M===0&&d(S,.3),M%2===0?v(S,M%4===2?.07:.035,c.openHat&&M===14):v(S,.02,!1),M%2===0){const W=c.bassOct?M===6||M===14:M===10;Xt(i,r,{type:"sawtooth",f:wn(U+(W?12:0)-12),t:S,dur:w*1.7,vol:.2,attack:.006,lp:W?900:520}),Xt(i,r,{type:"sine",f:wn(U-12),t:S,dur:w*1.7,vol:.14,attack:.006})}const G=c.arp[M],j=U+24+(G===3?12:O[G%O.length]);if(Xt(i,r,{type:"square",f:wn(j),t:S,dur:w*.9,vol:c.breakdown?.05:.036,lp:2600}),M===3||M===10)for(let W=0;W<O.length;W++)Xt(i,r,{type:"sawtooth",f:wn(U+12+O[W]),t:S,dur:w*1.6,vol:.03,attack:.01,lp:1700});if(c.lead&&M%2===0){const W=c.lead[(A%2*16+M)/2+(A%4>=2?16:0)];if(W!=null){const V=69+W;Xt(i,r,{type:"triangle",f:wn(V),t:S,dur:w*2.4,vol:.085,attack:.012}),Xt(i,r,{type:"square",f:wn(V)*1.003,t:S,dur:w*2,vol:.022,attack:.012,lp:3e3})}}}function m(T,S,w){const A=Math.floor(T/16),M=T%16;T%64===0&&u(Math.floor(A/4));const[b,C]=c.prog[A%4],N=48+b,U=Kf[C],O=M%2===1?w*.18:0,H=S+O;if(M===0)for(let G=0;G<U.length;G++)Xt(i,r,{type:"triangle",f:wn(N+12+U[G]),t:S,dur:w*16.5,vol:.038,attack:.25}),Xt(i,r,{type:"sine",f:wn(N+12+U[G])*1.004,t:S,dur:w*16.5,vol:.028,attack:.3});if((M===0||M===7||M===10)&&Xt(i,r,{type:"sine",f:wn(N-12),t:H,dur:w*(M===0?5:2.5),vol:.2,attack:.01}),(M===0||M===10)&&Xt(i,r,{type:"triangle",f:wn(N),t:H,dur:w*2,vol:.05,attack:.01}),(M===0||M===10)&&d(H,.2),(M===4||M===12)&&an(i,r,e,{t:H,dur:.09,vol:.05,f:2200,q:1.2}),M%2===0&&v(H,M%4===2?.03:.014,!1),M%2===0&&f()<.72){const G=c.arp[M],j=N+24+(G===3?12:U[G%U.length]);Xt(i,r,{type:"triangle",f:wn(j),t:H,dur:w*3,vol:.07,attack:.004})}c.sparkle&&(M===6||M===14)&&f()<.5&&Xt(i,r,{type:"sine",f:wn(N+36+h(U)),t:H,dur:w*4,vol:.035})}function x(){if(!s||i.state!=="running")return;const T=i.currentTime;o<T-.25&&(o=T+.05);const S=s==="race"?60/140/4:60/92/4;let w=0;for(;o<T+Ny&&w++<16;)s==="race"?p(a,o,S):m(a,o,S),o+=S,a++}function _(){if(n!=null&&clearInterval(n),n=null,s=null,r){const T=r,S=i.currentTime;try{T.gain.cancelScheduledValues(S),T.gain.setValueAtTime(T.gain.value,S),T.gain.linearRampToValueAtTime(1e-4,S+.35)}catch{}setTimeout(()=>{try{T.disconnect()}catch{}},1200),r=null}}function y(T){if(T!=="menu"&&T!=="race"&&(T="menu"),s===T)return;_(),s=T,r=i.createGain();const S=i.currentTime;r.gain.setValueAtTime(1e-4,S),r.gain.linearRampToValueAtTime(T==="race"?.85:1,S+.4),r.connect(t),a=0,l=(Math.floor(Math.random()*1e9)|1)>>>0,o=S+.08,n=setInterval(x,zy),x()}return{start:y,stop:_,get kind(){return s}}}const zi=(i,t)=>typeof i=="number"&&isFinite(i)?Math.min(1,Math.max(0,i)):t;function Oy(){let i=null,t=null,e=null,n=null,s=null,r=null,a=null,o=null,l=null;const c={master:.8,music:.6,sfx:.9};let f=!1,h=null;const u={rpm:0,throttle:0,active:!1};let d=0;const g={},v=()=>typeof window<"u"?window.AudioContext||window.webkitAudioContext:null;function p(S,w,A=.05){const M=i.currentTime;S.cancelScheduledValues(M),S.setTargetAtTime(w,M,A)}function m(){const S=i.createDynamicsCompressor();S.threshold.value=-14,S.knee.value=12,S.ratio.value=8,S.attack.value=.004,S.release.value=.18,S.connect(i.destination),e=i.createGain(),e.gain.value=f?0:1,e.connect(S),t=i.createGain(),t.gain.value=c.master,t.connect(e),n=i.createGain(),n.gain.value=c.music,n.connect(t),s=i.createGain(),s.gain.value=c.sfx,s.connect(t);const w=Math.floor(i.sampleRate*2);r=i.createBuffer(1,w,i.sampleRate);const A=r.getChannelData(0);for(let M=0;M<w;M++)A[M]=Math.random()*2-1;x(),y(),a=Fy(i,n,r)}function x(){const S=i.createGain();S.gain.value=0;const w=i.createBiquadFilter();w.type="lowpass",w.frequency.value=700,w.Q.value=.8,w.connect(S),S.connect(s);const A=(W,V)=>{const Q=i.createOscillator();Q.type=W;const et=i.createGain();return et.gain.value=V,Q.connect(et),et.connect(w),Q.start(),{o:Q,g:et}},M=A("sawtooth",.3),b=A("sawtooth",.22),C=A("triangle",0),N=A("square",.1),U=i.createBufferSource();U.buffer=r,U.loop=!0;const O=i.createBiquadFilter();O.type="bandpass",O.Q.value=2.2,O.frequency.value=900;const H=i.createGain();H.gain.value=0,U.connect(O),O.connect(H),H.connect(S),U.start();const G=i.createOscillator();G.frequency.value=11;const j=i.createGain();j.gain.value=2.5,G.connect(j),j.connect(M.o.frequency),j.connect(b.o.frequency),G.start(),o={out:S,lp:w,a:M,b,whine:C,sub:N,nf:O,ng:H},_()}function _(){if(!o)return;const S=u.rpm,w=u.throttle,A=70+S*S*150+S*190;p(o.a.o.frequency,A,.06),p(o.b.o.frequency,A*1.012+1.5,.06),p(o.sub.o.frequency,A*.5,.06),p(o.whine.o.frequency,A*4.02,.06),p(o.whine.g.gain,.03+S*.16+w*.05,.08),p(o.lp.frequency,500+S*2300+w*900,.08),p(o.nf.frequency,600+S*3200,.08),p(o.ng.gain,u.active?.01+S*.035+w*.02:0,.1),p(o.out.gain,u.active?.035+S*.05+w*.055:0,u.active?.08:.15)}function y(){const S=i.createBufferSource();S.buffer=r,S.loop=!0;const w=i.createBiquadFilter();w.type="bandpass",w.frequency.value=1700,w.Q.value=4.5;const A=i.createBiquadFilter();A.type="peaking",A.frequency.value=2600,A.Q.value=3,A.gain.value=8;const M=i.createGain();M.gain.value=0,S.connect(w),w.connect(A),A.connect(M),M.connect(s),S.start(),l={bp:w,g:M},T()}function T(){l&&(p(l.g.gain,d*d*.3,.07),p(l.bp.frequency,1300+d*900,.1))}return{unlock(){const S=v();if(S){if(!i)try{i=new S({latencyHint:"interactive"}),m()}catch{i=null;return}if(i.state==="suspended"){const w=i.resume();w&&w.catch&&w.catch(()=>{})}h&&a&&a.kind!==h&&a.start(h)}},setVolumes({master:S,music:w,sfx:A}={}){c.master=zi(S,c.master),c.music=zi(w,c.music),c.sfx=zi(A,c.sfx),i&&(p(t.gain,c.master),p(n.gain,c.music),p(s.gain,c.sfx))},setEngine({rpm:S=0,throttle:w=0,active:A=!1}={}){u.rpm=zi(S,0),u.throttle=zi(Math.abs(w),0),u.active=!!A,i&&_()},setSkid(S){const w=zi(S,0);w!==d&&(d=w,i&&T())},play(S,{volume:w=1}={}){if(!i||i.state==="closed")return;const A=Uy[S];if(!A)return;const M=i.currentTime;if(g[S]!=null&&M-g[S]<A.gap)return;g[S]=M;const b=zi(w,1);if(!(b<=0))try{A.fn(i,s,r,M+.005,b)}catch{}},startMusic(S){h=S==="race"?"race":"menu",i&&a&&a.start(h)},stopMusic(){h=null,i&&a&&a.stop()},setMuted(S){f=!!S,i&&p(e.gain,f?0:1,.03)},isMuted:()=>f,isUnlocked:()=>!!i&&i.state==="running",get context(){return i}}}const By=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyW","KeyA","KeyS","KeyD","KeyX","KeyB","ShiftLeft","ShiftRight","ControlLeft","ControlRight"]);function Hy(){const i=new Set,t=[],e=new Set(["Space","KeyX","ControlLeft","ControlRight"]);let n=!1;const s={capture:!1,onPress(r){t.push(r)},isDown:r=>i.has(r),clear(){i.clear(),n=!1},consumeFire(){n=!1},read(r){let a=0,o=0,l=!1,c=!1;(i.has("ArrowUp")||i.has("KeyW"))&&(a+=1),(i.has("ArrowDown")||i.has("KeyS"))&&(a-=1),(i.has("ArrowLeft")||i.has("KeyA"))&&(o+=1),(i.has("ArrowRight")||i.has("KeyD"))&&(o-=1),(i.has("ShiftLeft")||i.has("ShiftRight")||i.has("KeyB"))&&(l=!0),(i.has("Space")||i.has("KeyX")||i.has("ControlLeft")||i.has("ControlRight"))&&(c=!0);const f=typeof navigator<"u"&&navigator.getGamepads?navigator.getGamepads():[];for(const h of f){if(!h||!h.connected)continue;const u=h.axes[0]||0;Math.abs(u)>.15&&(o-=u);const d=g=>h.buttons[g]?h.buttons[g].value:0;a+=d(7)-d(6),d(14)>.5&&(o+=1),d(15)>.5&&(o-=1),(d(0)>.5||d(1)>.5)&&(l=!0),(d(2)>.5||d(5)>.5)&&(c=!0);break}return r.throttle=Math.max(-1,Math.min(1,a)),r.steer=Math.max(-1,Math.min(1,o)),r.handbrake=l,r.fire=c||n,r}};return window.addEventListener("keydown",r=>{if(s.capture&&By.has(r.code)&&r.preventDefault(),!r.repeat){i.add(r.code),e.has(r.code)&&(n=!0);for(const a of t)a(r.code,r)}}),window.addEventListener("keyup",r=>i.delete(r.code)),window.addEventListener("blur",()=>i.clear()),s}const tl=[{name:"Chase",dist:6.2,height:2.7,look:3,lookY:.9,stiff:5.5},{name:"Far chase",dist:9.5,height:4.4,look:4,lookY:.8,stiff:4.5},{name:"Bumper",dist:-.9,height:.75,look:8,lookY:.6,stiff:30},{name:"Overhead",dist:3.5,height:24,look:2,lookY:0,stiff:4}];function Qf(i,t,e){let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e}class Gy{constructor(t){this.camera=t,this.mode=0,this.yaw=0,this.shake=0,this.shakeEnabled=!0,this.baseFov=62,this._pos=new z,this._look=new z,this._lookSm=new z,this._init=!1,this._orbit=0}get modeName(){return tl[this.mode].name}nextMode(){return this.mode=(this.mode+1)%tl.length,this._init=!1,this.modeName}snap(){this._init=!1}addShake(t){this.shakeEnabled&&(this.shake=Math.min(1,this.shake+t))}follow(t,e,n){const s=tl[this.mode],r=this.camera;let a=t.heading;if(Math.hypot(t.vel.x,t.vel.z)>6&&t.speed>0){const g=Math.atan2(t.vel.x,t.vel.z);a=Qf(t.heading,g,.35)}this._init||(this.yaw=a);const l=t.spinTime>0;this.yaw=Qf(this.yaw,a,1-Math.exp(-(l?1.2:s.stiff)*e));const c=Math.sin(this.yaw),f=Math.cos(this.yaw);if(this._pos.set(t.pos.x-c*s.dist,t.pos.y+s.height,t.pos.z-f*s.dist),n&&s.dist>0){const g=n.project(this._pos,t.trackT);this._pos.y<g.y+1.2&&(this._pos.y=g.y+1.2)}if(this._look.set(t.pos.x+c*s.look,t.pos.y+s.lookY,t.pos.z+f*s.look),!this._init)r.position.copy(this._pos),this._lookSm.copy(this._look),this._init=!0;else{const g=1-Math.exp(-s.stiff*1.6*e);r.position.lerp(this._pos,g),this._lookSm.lerp(this._look,1-Math.exp(-14*e))}if(this.shake>.001){const g=this.shake*.35;r.position.x+=(Math.random()-.5)*g,r.position.y+=(Math.random()-.5)*g,r.position.z+=(Math.random()-.5)*g,this.shake*=Math.exp(-6*e)}r.lookAt(this._lookSm);const h=t.def&&t.def.topSpeed?t.def.topSpeed:35,u=Math.min(1.4,Math.abs(t.speed)/h),d=this.baseFov+u*14+(t.boostTime>0?8:0);r.fov+=(d-r.fov)*(1-Math.exp(-4*e)),r.updateProjectionMatrix()}orbit(t,e,{radius:n=6,height:s=2.2,speed:r=.5,lookY:a=.5}={}){this._orbit+=e*r;const o=this.camera;o.position.set(t.x+Math.sin(this._orbit)*n,t.y+s,t.z+Math.cos(this._orbit)*n),this._look.set(t.x,t.y+a,t.z),o.lookAt(this._look),o.fov+=(45-o.fov)*(1-Math.exp(-4*e)),o.updateProjectionMatrix(),this._init=!1}flyover(t,e,n,{height:s=7,back:r=12,ahead:a=.03}={}){const o=this.camera,l=t.sample((e%1+1)%1);this._pos.set(l.pos.x-l.tangent.x*r,l.pos.y+s,l.pos.z-l.tangent.z*r);const c=t.sample(((e+a)%1+1)%1);this._look.copy(c.pos),this._fly||(o.position.copy(this._pos),this._lookSm.copy(this._look),this._fly=!0),o.position.lerp(this._pos,1-Math.exp(-2.5*n)),this._lookSm.lerp(this._look,1-Math.exp(-2.5*n)),o.lookAt(this._lookSm),o.fov+=(58-o.fov)*(1-Math.exp(-4*n)),o.updateProjectionMatrix(),this._init=!1}resetFly(){this._fly=!1}}const wd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Gs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Vy=new wc(-1,1,1,-1,0,1);class Wy extends ge{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}}const Xy=new Wy;class Oc{constructor(t){this._mesh=new Dt(Xy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Vy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Sd extends Gs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof $e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=yr.clone(t.uniforms),this.material=new $e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Oc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class tu extends Gs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class qy extends Gs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Yy{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new mt);this._width=n.width,this._height=n.height,e=new An(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Sd(wd),this.copyPass.material.blending=ri,this.clock=new wx}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}tu!==void 0&&(a instanceof tu?n=!0:a instanceof qy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jy extends Gs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ot}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Zy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ds extends Gs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new mt(t.x,t.y):new mt(256,256),this.clearColor=new Ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new An(r,a,{type:Xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new An(r,a,{type:Xn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new An(r,a,{type:Xn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=Zy;this.highPassUniforms=yr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $e({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new mt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=wd;this.copyUniforms=yr.clone(f.uniforms),this.blendMaterial=new $e({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Tn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ot,this.oldClearAlpha=1,this.basic=new be,this.fsQuad=new Oc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new mt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ds.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ds.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new $e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new mt(.5,.5)},direction:{value:new mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new $e({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ds.BlurDirectionX=new mt(1,0);Ds.BlurDirectionY=new mt(0,1);const $y={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Ky extends Gs{constructor(){super();const t=$y;this.uniforms=yr.clone(t.uniforms),this.material=new vx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Oc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},se.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===du?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===pu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===dc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===mu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===gu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Jy extends Xu{constructor(){super();const t=new xn;t.deleteAttribute("uv");const e=new Pe({side:Ke}),n=new Pe,s=new Uc(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Dt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Dt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Dt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Dt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Dt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const f=new Dt(t,n);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);const h=new Dt(t,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const u=new Dt(t,_s(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const d=new Dt(t,_s(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new Dt(t,_s(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new Dt(t,_s(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const p=new Dt(t,_s(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const m=new Dt(t,_s(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function _s(i){const t=new be;return t.color.setScalar(i),t}const Qy={uniforms:{tDiffuse:{value:null},vignette:{value:.32},saturation:{value:1.1}},vertexShader:`
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
    }`};function tb(i,t,e){const n=new ql(i),s=new Jy;t.environment=n.fromScene(s,.04).texture,t.environmentIntensity=.3,n.dispose();const r=i.capabilities.getMaxAnisotropy();let a=null,o=null,l="medium",c=1,f=1;function h(){if(a&&(a.dispose(),a=null),l==="low")return;const u=new An(c,f,{type:Xn,samples:l==="high"?4:2});a=new Yy(i,u),a.addPass(new jy(t,e)),o=new Ds(new mt(c/2,f/2),.32,.55,.9),a.addPass(o),a.addPass(new Sd(Qy)),a.addPass(new Ky),a.setPixelRatio(i.getPixelRatio()),a.setSize(c,f)}return{setQuality(u){const d=u==="low"||u==="high"?u:"medium";d===l&&(a||d==="low")||(l=d,h())},resize(u,d){c=Math.max(1,u),f=Math.max(1,d),a?(a.setPixelRatio(i.getPixelRatio()),a.setSize(c,f)):l!=="low"&&h()},prepareTrack(u){const d=Math.min(8,r);u.group.traverse(g=>{if(g.material)for(const v of[].concat(g.material))for(const p of["map","emissiveMap","roughnessMap","normalMap"]){const m=v[p];m&&m.anisotropy!==d&&(m.anisotropy=d,m.needsUpdate=!0)}})},render(u){a?a.render(u):i.render(t,e)}}}const eb=()=>typeof location<"u"&&!!location&&!!location.host;function eu(i){if(i){const t=new URL(i),e=t.protocol==="https:"||t.protocol==="wss:",n=t.pathname&&t.pathname!=="/"?t.pathname.replace(/\/+$/,""):"/mp";return{ws:`${e?"wss":"ws"}://${t.host}${n}`,http:`${e?"https":"http"}://${t.host}`}}return eb()?{ws:`${location.protocol==="https:"?"wss":"ws"}://${location.host}/mp`,http:location.origin}:{ws:null,http:null}}function nb(i={}){const t=i.timeout??8e3,e=i.pingInterval??2e3,n=new Map;let s=null,r=null,a=0,o=null;const l={connected:!1,isHost:!1,id:null,code:null,peers:[],room:{},ping:null,on(p,m){return n.has(p)||n.set(p,new Set),n.get(p).add(m),()=>l.off(p,m)},off(p,m){var x;(x=n.get(p))==null||x.delete(m)},host({name:p,meta:m}={}){return v({t:"host",name:p,meta:m||{}})},join(p,{name:m,meta:x}={}){const _=String(p??"").trim().toUpperCase();return/^[A-Z]{4}$/.test(_)?v({t:"join",code:_,name:m,meta:x||{}}):Promise.reject(new Error("Enter the 4-letter room code."))},leave(){const p=s,m=l.connected;if(d(),p){u(p);try{m&&p.readyState===1&&p.send(JSON.stringify({t:"leave"})),p.close(1e3)}catch{}}if(c){const x=c;c=null,x(new Error("Cancelled"))}},setMeta(p){if(!l.connected||!p)return!1;const m=l.peers.find(x=>x.id===l.id);return m&&(m.meta={...m.meta,...p}),h({t:"meta",patch:p})},setRoomState(p){return!l.connected||!l.isHost||!p?!1:(l.room={...l.room,...p},h({t:"room",patch:p}))},send(p,m,x){return l.connected?h(x!=null?{t:"msg",type:p,data:m,to:x}:{t:"msg",type:p,data:m}):!1},kick(p){return!l.connected||!l.isHost?!1:h({t:"kick",id:p})},async joinUrls(){const p=l.code||"",m=p?`/?join=${p}`:"/",x=eu(i.url).http,_=[],y=(A,M)=>{_.includes(A)||(M?_.unshift(A):_.push(A))};let T="http:",S=null,w="";if(x){const A=new URL(x);T=A.protocol,S=A.hostname,w=A.port;try{const b=typeof AbortController<"u"?new AbortController:null,C=b&&setTimeout(()=>b.abort(),3e3),N=await fetch(`${x}/mp/info`,b?{signal:b.signal}:void 0);if(C&&clearTimeout(C),N.ok){const U=await N.json(),O=U.port??w;for(const H of U.addresses||[])y(`${T}//${H}${O?":"+O:""}${m}`)}}catch{}const M=S==="localhost"||S==="127.0.0.1"||S==="[::1]"||S==="::1";y(`${x}${m}`,!M)}return _}};let c=null;function f(p,...m){const x=n.get(p);if(x)for(const _ of[...x])try{_(...m)}catch(y){console.error(`[net] '${p}' listener failed`,y)}}function h(p){if(!s||s.readyState!==1)return!1;try{return s.send(JSON.stringify(p)),!0}catch{return!1}}function u(p){p.onopen=p.onmessage=p.onclose=null,p.onerror=()=>{}}function d(){r&&clearInterval(r),r=null,s=null,l.connected=!1,l.isHost=!1,l.id=null,l.code=null,l.peers=[],l.room={},l.ping=null}function g(){var m;a=Date.now();const p=()=>{if(s){if(Date.now()-a>Math.max(1e4,e*5)){const x=s;u(x);try{x.close()}catch{}d(),f("close",{reason:"Connection lost"});return}h({t:"ping",n:Date.now()})}};r=setInterval(p,e),(m=r.unref)==null||m.call(r),p()}function v(p){l.leave();const m=i.WebSocketImpl||globalThis.WebSocket,x=eu(i.url).ws;return!m||!x?Promise.reject(new Error("Multiplayer is not available here.")):new Promise((_,y)=>{let T=!1,S;const w=M=>{if(!T){if(T=!0,clearTimeout(A),c=null,s===S&&d(),S){u(S);try{S.close()}catch{}}y(new Error(M))}},A=setTimeout(()=>w("The game server did not answer. Check the connection and try again."),t);c=M=>{T=!0,clearTimeout(A),y(M)};try{S=new m(x)}catch{w("Could not reach the game server.");return}s=S,o=null,S.onopen=()=>h(p),S.onerror=()=>{T||w("Could not reach the game server.")},S.onclose=()=>{if(s!==S)return;if(!T){w(o||"Could not reach the game server.");return}const M=o||"Connection lost";d(),f("close",{reason:M})},S.onmessage=M=>{if(s!==S||typeof M.data!="string")return;let b;try{b=JSON.parse(M.data)}catch{return}switch(b.t){case"msg":f("message",b.type,b.data,b.from);break;case"pong":a=Date.now(),typeof b.n=="number"&&(l.ping=Math.max(0,a-b.n),f("ping",l.ping));break;case"peers":l.peers=b.peers||[],l.isHost=l.peers.some(C=>C.id===l.id&&C.isHost),f("peers",l.peers);break;case"room":l.room=b.room||{},f("room",l.room);break;case"welcome":if(T)break;T=!0,clearTimeout(A),c=null,l.connected=!0,l.id=b.id,l.code=b.code,l.isHost=!!b.isHost,l.peers=b.peers||[],l.room=b.room||{},g(),_({code:b.code}),f("peers",l.peers),f("room",l.room);break;case"error":T||w(b.message||"Could not join the room.");break;case"closed":o=b.reason||"The room was closed";break}}})}return l}function ib(i,t){const e=document.createElement("canvas"),n=e.getContext("2d"),s='900 44px system-ui, -apple-system, "Segoe UI", sans-serif';n.font=s;const r=String(i||"").slice(0,16),a=Math.ceil(n.measureText(r).width)+44;e.width=Math.max(96,a),e.height=72,n.font=s,n.textAlign="center",n.textBaseline="middle";const o=22;n.beginPath(),n.roundRect(3,3,e.width-6,e.height-6,o),n.fillStyle=t?"rgba(20, 24, 52, 0.88)":"rgba(20, 24, 52, 0.55)",n.fill(),n.lineWidth=5,n.strokeStyle=t?"#e8b730":"rgba(255,255,255,0.35)",n.stroke(),n.fillStyle=t?"#f2c94c":"#d8d8d8",n.fillText(r,e.width/2,e.height/2+2);const l=new Ec(e);return l.colorSpace=je,l.anisotropy=4,{tex:l,aspect:e.width/e.height}}function sb(i){let t=[];const e=new pn;e.name="name-tags",i.add(e);function n(){for(const s of t)e.remove(s.sprite),s.sprite.material.map.dispose(),s.sprite.material.dispose();t=[]}return{set(s){n();for(const r of s){const{tex:a,aspect:o}=ib(r.name,r.human),l=new Tc({map:a,transparent:!0,depthWrite:!1,fog:!1}),c=new Yu(l);c.renderOrder=10,e.add(c),t.push({sprite:c,car:r.car,aspect:o,human:!!r.human})}},clear:n,update(s,r=!0){if(e.visible=r,!!r)for(const a of t){const o=a.car.pos,l=s.position.distanceTo(o),c=a.human?160:70;if(l>c||l<2.5){a.sprite.visible=!1;continue}a.sprite.visible=!0;const f=Math.min(4.2,Math.max(.55,l*.034))*(a.human?1.15:.9);a.sprite.scale.set(f*a.aspect,f,1),a.sprite.position.set(o.x,o.y+1.5+f*.6,o.z),a.sprite.material.opacity=Math.min(1,(c-l)/(c*.25))}}}}const Td=[];function rb(){if(typeof window>"u")return!1;const i=window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,t="ontouchstart"in window||(navigator.maxTouchPoints||0)>0,e=Math.min(window.screen.width,window.screen.height)<=900;return/[?&]mobile=1/.test(location.search)||i&&t&&e}const Ye={el:null,width:1280,height:720,rotated:!1,isTouch:!1,onChange(i){Td.push(i)}};function cr(){const i=Ye.el,t=document.activeElement;if(Ye.isTouch&&t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")&&Ye.width>0&&Ye.el.style.width)return;const e=window.innerWidth,n=window.innerHeight,s=Ye.isTouch&&n>e;Ye.rotated=s,s?(Ye.width=n,Ye.height=e,i.style.width=`${n}px`,i.style.height=`${e}px`,i.style.left=`${e}px`,i.style.top="0px",i.style.transformOrigin="0 0",i.style.transform="rotate(90deg)"):(Ye.width=e,Ye.height=n,i.style.width=`${e}px`,i.style.height=`${n}px`,i.style.left="0px",i.style.top="0px",i.style.transform="none"),document.documentElement.classList.toggle("tr-touch",Ye.isTouch),document.documentElement.classList.toggle("tr-rotated",s);for(const r of Td)r(Ye)}async function ab(){if(Ye.isTouch){try{const i=document.documentElement;!window.matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches&&!document.fullscreenElement&&i.requestFullscreen&&await i.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}}}function ob(){return Ye.el=document.getElementById("app"),Ye.isTouch=rb(),cr(),window.addEventListener("resize",cr),document.addEventListener("focusout",()=>setTimeout(cr,120)),window.addEventListener("orientationchange",()=>setTimeout(cr,60)),window.visualViewport&&window.visualViewport.addEventListener("resize",cr),window.addEventListener("pointerup",ab,{passive:!0}),document.addEventListener("gesturestart",i=>i.preventDefault()),document.addEventListener("touchmove",i=>{i.touches.length>1&&i.preventDefault()},{passive:!1}),Ye}const Ed="tt.pwa.installHintDismissed",el="tt.pwa.updateReload",nu="tr-pwa-style";let As=null,Za=!1,iu=!1,su=!1;const lc=new Set;function Er(){return typeof window<"u"&&typeof document<"u"}function Oa(){const i=Hc();for(const t of[...lc])try{t(i)}catch(e){console.error(e)}}function Ad(){iu||!Er()||(iu=!0,window.addEventListener("beforeinstallprompt",i=>{i.preventDefault(),As=i,Oa()}),window.addEventListener("appinstalled",()=>{As=null,Za=!0,Oa()}))}Ad();function Bc(){if(!Er())return!1;try{if(window.matchMedia("(display-mode: standalone), (display-mode: fullscreen), (display-mode: minimal-ui)").matches&&!document.fullscreenElement)return!0}catch{}return navigator.standalone===!0}function Cd(){if(typeof navigator>"u")return!1;const i=navigator.userAgent||"";return/iPad|iPhone|iPod/.test(i)?!0:navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Hc(){return!!As&&!Za&&!Bc()}function lb(){return Za||Bc()?!1:Hc()||Cd()&&Er()&&window.isSecureContext!==!1}function cb(i){lc.add(i);try{i(Hc())}catch(t){console.error(t)}return()=>lc.delete(i)}async function hb(){if(Za||Bc())return{outcome:"installed"};if(As){const i=As;As=null;try{await i.prompt();const t=await i.userChoice;return Oa(),{outcome:t&&t.outcome==="accepted"?"accepted":"dismissed"}}catch{return Oa(),{outcome:"unavailable"}}}return Cd()?{outcome:"ios-instructions"}:{outcome:"unavailable"}}async function fb({applyWaitingOnLaunch:i}){const t="/",e=t+"sw.js",n=!!navigator.serviceWorker.controller,s=Er()&&window.performance?performance.now():0,r=await navigator.serviceWorker.register(e,{scope:t});if(i&&n&&r.waiting&&s<4e3){let a=!1;try{a=sessionStorage.getItem(el)==="1",sessionStorage.setItem(el,"1")}catch{a=!0}a||(navigator.serviceWorker.addEventListener("controllerchange",()=>window.location.reload(),{once:!0}),r.waiting.postMessage({type:"SKIP_WAITING"}))}else try{sessionStorage.removeItem(el)}catch{}return r}function ub(i={}){if(su)return Promise.resolve(null);su=!0,Ad();const{applyWaitingOnLaunch:t=!0}=i;return!Er()||!("serviceWorker"in navigator)||window.isSecureContext===!1?Promise.resolve(null):new Promise(e=>{const n=()=>fb({applyWaitingOnLaunch:t}).then(e,()=>e(null));document.readyState==="complete"?n():window.addEventListener("load",n,{once:!0})})}const db=`
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
`,pb='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M6.5 10.5 12 16l5.5-5.5M4 21h16"/></svg>',mb='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3M8 6.5 12 2.5l4 4M7 10H5v11h14V10h-2"/></svg>';function gb(){try{return!!localStorage.getItem(Ed)}catch{return!1}}function vb(i={}){const t=i.parent||document.getElementById("app")||document.body;if(!document.getElementById(nu)){const u=document.createElement("style");u.id=nu,u.textContent=db,document.head.appendChild(u)}const e=document.createElement("div");e.className="tr-pwa-hint",e.setAttribute("role","region"),e.setAttribute("aria-label","Install app"),e.innerHTML='<button type="button" class="tr-pwa-go">'+pb+'<span class="tr-pwa-label">Install Toyz Race</span></button><div class="tr-pwa-ios">To install: tap <b>Share</b> '+mb+' in the browser bar, then <b>Add to Home Screen</b>.</div><button type="button" class="tr-pwa-x" aria-label="Dismiss">✕</button>';const n=e.querySelector(".tr-pwa-go"),s=e.querySelector(".tr-pwa-x");let r=!1,a=gb(),o=!1;function l(){if(o)return;const u=r&&!a&&lb();e.classList.toggle("on",u),u||e.classList.remove("ios-open")}function c(){a=!0;try{localStorage.setItem(Ed,String(Date.now()))}catch{}l()}for(const u of["pointerdown","pointerup","touchstart","touchend","mousedown","click"])e.addEventListener(u,d=>d.stopPropagation());n.addEventListener("click",async()=>{const{outcome:u}=await hb();u==="ios-instructions"?e.classList.add("ios-open"):(u==="accepted"||u==="installed")&&l(),i.onOutcome&&i.onOutcome(u),u!=="ios-instructions"&&l()}),s.addEventListener("click",c);const f=cb(l);let h=null;try{h=window.matchMedia("(display-mode: standalone), (display-mode: fullscreen)"),h.addEventListener("change",l)}catch{h=null}return t.appendChild(e),l(),{el:e,setVisible(u){r=!!u,l()},show(){this.setVisible(!0)},hide(){this.setVisible(!1)},dismiss:c,destroy(){o=!0,f(),h&&h.removeEventListener("change",l),e.remove()},get visible(){return e.classList.contains("on")}}}const xb=[10,8,6,5,4,3,2,1],Rd=1/60,si=ob();ub();const _b=vb();let ru=null;const yb=document.getElementById("game"),Yn=new Uv({canvas:yb,antialias:!0,powerPreference:"high-performance"});Yn.outputColorSpace=je;Yn.toneMapping=dc;Yn.toneMappingExposure=1.05;Yn.shadowMap.enabled=!0;Yn.shadowMap.type=fu;const On=new Xu,Nn=new dn(62,1,.1,1500),nn=new Gy(Nn),Us=tb(Yn,On,Nn),qt=nb(),Gc=sb(On),Kt={active:!1,settings:{trackId:Ei[0].id,laps:3,difficulty:1,bots:7},peerIds:[]},sn=Hy(),ne=Oy(),Ae={throttle:0,steer:0,handbrake:!1,fire:!1},nt={state:"menu",track:null,race:null,config:null,championship:null,preview:{screen:"title",carId:qn[0].id,trackId:Ei[0].id},previewCar:null,previewCarId:null,flyT:0,muted:!1,lastResume:0,pendingTrackTimer:0,sunOffset:new z};function Pd(i){const t=window.devicePixelRatio||1,e=si.isTouch?i==="low"?1:i==="high"?1.75:1.35:i==="low"?1:i==="high"?2:1.5;Yn.setPixelRatio(Math.min(t,e)),Us.setQuality(si.isTouch?i==="high"?"medium":"low":i),Us.resize(si.width,si.height),Yn.shadowMap.enabled=i!=="low",nt.track&&nt.track.sun&&(nt.track.sun.castShadow=i!=="low"),On.traverse(n=>{n.material&&[].concat(n.material).forEach(s=>{s.needsUpdate=!0})})}function Ld(i){i&&(ne.setVolumes({master:i.masterVolume,music:i.musicVolume,sfx:i.sfxVolume}),nn.shakeEnabled=i.cameraShake!==!1,i.quality!==nt.quality&&(nt.quality=i.quality,Pd(i.quality)))}function Id(){const i=si.width,t=si.height;Yn.setSize(i,t,!1),Us.resize(i,t),Nn.aspect=i/t,Nn.updateProjectionMatrix()}si.onChange(Id);function Vc(i){if(nt.track&&nt.track.id===i)return nt.track;if(nt.track){On.remove(nt.track.group);try{nt.track.dispose()}catch(r){console.warn(r)}}const t=x_(i);nt.track=t,On.add(t.group),On.background=t.background||new Ot(8893920),On.fog=t.fog||null;const e=1.3,n=t.sample,s=t.project;return t.sample=(r,a)=>{const o=n(r,a);return o.halfWidth+=e,o},t.project=(r,a,o)=>{const l=s(r,a,o);return l.halfWidth+=e,l},t.sun&&(t.sun.castShadow=nt.quality!=="low"),Us.prepareTrack(t),nn.resetFly(),nn.snap(),nt.flyT=0,t}const au=new z;function nl(i){!nt.track||!nt.track.followShadow||(au.set(Math.round(i.x/4)*4,i.y,Math.round(i.z/4)*4),nt.track.followShadow(au,64))}function $a(){nt.previewCar&&(On.remove(nt.previewCar),nt.previewCar.userData.dispose&&nt.previewCar.userData.dispose(),nt.previewCar=null,nt.previewCarId=null)}function bb(i){if(nt.previewCarId===i&&nt.previewCar)return;$a();const t=dd(i),e=nt.track.startGrid[0];t.position.copy(e.pos),t.rotation.y=e.heading,On.add(t),nt.previewCar=t,nt.previewCarId=i}function Ba(i){if(nt.state!=="menu")return;Object.assign(nt.preview,i||{});const t=kd()&&nt.preview.trackId?nt.preview.trackId:null;clearTimeout(nt.pendingTrackTimer),t&&(!nt.track||nt.track.id!==t)&&(nt.pendingTrackTimer=setTimeout(()=>{nt.state==="menu"&&($a(),Vc(t))},220))}function kd(){return nt.preview.screen==="track"||nt.preview.screen==="lobby"}function Mb(){const i=String(nt.preview.screen||"");return/car/i.test(i)}function Wc(){if(Gc.clear(),nt.race){try{nt.race.dispose()}catch(i){console.warn(i)}nt.race=null}}function Ns(i){clearTimeout(nt.pendingTrackTimer),$a(),Wc(),Nn.clearViewOffset(),nt.config=i;const t=Vc(i.trackId),e=i.mode==="timetrial",n=new hy({scene:On,track:t,playerCarId:i.carId,playerName:i.playerName||"You",laps:i.laps||t.defaultLaps||3,opponents:e?0:Math.max(0,Math.min(7,i.opponents??7)),difficulty:i.difficulty??1,mode:e?"timetrial":"race",autopilot:!!i.autopilot,net:i.net||void 0});nt.race=n,wb(n),Gc.set((n.states||n.cars.map(s=>({car:s}))).filter(s=>s.car!==n.player).map(s=>({car:s.car,name:s.car.name,human:!!i.net&&!!s.human}))),nt.state="racing",sn.capture=!0,sn.clear(),Vt.hideMenu(),Vt.hideResults(),Vt.hidePause(),Vt.showHUD(),nn.snap(),ne.stopMusic(),ne.startMusic("race"),n.update(1e-4,Ae)}function ou(i){const t=nt.race&&nt.race.player;if(!t||i===t)return 1;const e=i.pos.distanceTo(t.pos);return Math.max(0,1-e/55)}function il(i){if(i==null||!isFinite(i))return"--:--.--";const t=Math.floor(i/60),e=i-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}function wb(i){const t=nt.track.id;i.on("countdown",e=>{Vt.showCountdown(String(e)),ne.play("count")}),i.on("go",()=>{Vt.showCountdown("GO!"),ne.play("go")}),i.on("lap",(e,n,s,r)=>{if(e!==i.player)return;ne.play("lap");const a=Vt.records.getBestLap(t);s>1&&(!a||s<a)?(Vt.records.setBestLap(t,s),nt.newRecord=!0,Vt.flashMessage(`NEW LAP RECORD  ${il(s)}`,2200)):r?Vt.flashMessage(`BEST LAP  ${il(s)}`,1600):Vt.flashMessage(`LAP  ${il(s)}`,1400)}),i.on("finalLap",e=>{e===i.player&&(ne.play("final-lap"),setTimeout(()=>Vt.flashMessage("FINAL LAP",1800),1500))}),i.on("finish",(e,n)=>{e===i.player&&(ne.play(n===1?"win":"finish"),Vt.flashMessage(n===1?"YOU WIN!":"FINISHED!",2500))}),i.on("pickup",e=>{e===i.player&&ne.play("pickup")}),i.on("fire",e=>{const n=ou(e);n>.05&&ne.play("fire",{volume:n})}),i.on("hit",(e,n)=>{const s=ou(e);s>.05&&ne.play(/shock|pulse|zap/i.test(String(n))?"zap":/slick|glue|puddle|goo/i.test(String(n))?"splat":"explosion",{volume:s}),e===i.player&&nn.addShake(.8)}),i.on("boost",e=>{e===i.player&&ne.play("boost")}),i.on("crash",(e,n)=>{if(e!==i.player)return;const s=Math.min(1,(n||0)/20);ne.play(s>.45?"crash":"bump",{volume:.4+s*.6}),nn.addShake(s*.7)}),i.on("raceOver",e=>Sb(e)),nt.config&&nt.config.net&&i.on("net",(e,n)=>{if(!n&&!qt.isHost){const s=qt.peers.find(r=>r.isHost);n=s&&s.id}qt.send("r",e,n||void 0)}),nt.newRecord=!1}function Sb(i){if(nt.state!=="racing"&&nt.state!=="paused")return;const t=nt.race;i=i||t.standings(),nt.state="results",sn.capture=!1,Vt.hidePause(),Vt.hideHUD(),ne.setEngine({rpm:0,throttle:0,active:!1}),ne.setSkid(0);const e=nt.config,n=i.find(a=>a.isPlayer);let s=!!nt.newRecord;if(n&&n.finished&&n.finishTime>0&&isFinite(n.finishTime)&&e.mode!=="championship"&&!Kt.active){const a=Vt.records.getBestRace(nt.track.id,e.laps);(!a||n.finishTime<a)&&(Vt.records.setBestRace(nt.track.id,e.laps,n.finishTime),s=!0)}let r=null;if(nt.championship){const a=nt.championship;if(!a.scored){for(const l of i){const c=a.points.get(l.name)||{name:l.name,points:0,isPlayer:!!l.isPlayer};c.points+=xb[l.position-1]||0,a.points.set(l.name,c)}a.scored=!0}const o=[...a.points.values()].sort((l,c)=>c.points-l.points);r={round:a.round+1,rounds:a.order.length,table:o,final:a.round>=a.order.length-1}}Nd(),Vt.showResults({standings:i,mode:e.mode,trackName:nt.track.name,newRecord:s,championship:r,multiplayer:Kt.active?{isHost:qt.isHost}:void 0})}function sl(){const i=nt.championship;i.scored=!1;const t=i.order[i.round],e=Ei.find(n=>n.id===t);Ns({...i.base,mode:"championship",trackId:t,laps:e.defaultLaps||i.base.laps||3})}function xr(i="title",t){Wc(),nt.overlay=!1,nt.championship=null,nt.state="menu",sn.capture=!1,Vt.hideHUD(),Vt.hidePause(),Vt.hideResults(),ne.setEngine({rpm:0,throttle:0,active:!1}),ne.setSkid(0),ne.stopMusic(),ne.startMusic("menu"),nn.resetFly(),nt.preview.screen=i,Vt.showMenu(i,t)}function Dd(){return qt.peers.map(i=>({id:i.id,name:i.name,carId:i.meta&&i.meta.carId||qn[0].id,isHost:!!i.isHost,isYou:i.id===qt.id}))}function Xc(){Wc(),nt.overlay=!1,nt.state="menu",sn.capture=!1,Vt.hideHUD(),Vt.hidePause(),Vt.hideResults(),ne.setEngine({rpm:0,throttle:0,active:!1}),ne.setSkid(0),ne.stopMusic(),ne.startMusic("menu"),nn.resetFly();const i=qt.room&&qt.room.settings||Kt.settings;Kt.settings=i,Vt.showLobby({code:qt.code,joinUrls:Kt.joinUrls||[],isHost:qt.isHost,players:Dd(),settings:i,status:null}),Ba({screen:"lobby",trackId:i.trackId}),qt.joinUrls().then(t=>{Kt.joinUrls=t,Vt.updateLobby({joinUrls:t})}).catch(()=>{})}function cc(i){ne.unlock(),i.then(()=>{Kt.active=!0,Kt.peerIds=qt.peers.map(t=>t.id),qt.isHost&&qt.setRoomState({settings:Kt.settings,locked:!1}),Xc()}).catch(t=>{Kt.active=!1,Vt.showMpError(t&&t.message||"Could not connect")})}function lu(){if(!(!Kt.active&&!qt.connected)){Kt.active=!1;try{qt.leave()}catch{}}}function Ud(i){if(!qt.isHost)return;Kt.settings={...Kt.settings,...i};const t=qt.peers.find(r=>r.id===qt.id)||{},e=qt.peers.filter(r=>r.id!==qt.id).slice(0,7).map(r=>({id:r.id,name:r.name,carId:r.meta&&r.meta.carId||qn[0].id})),n=Math.min(7,e.length+Math.max(0,Kt.settings.bots|0)),s={mode:"race",trackId:Kt.settings.trackId,laps:Kt.settings.laps,difficulty:Kt.settings.difficulty,carId:t.meta&&t.meta.carId||qn[0].id,playerName:t.name||"Host",opponents:n,net:{role:"host",localId:qt.id,remotes:e}};qt.setRoomState({settings:Kt.settings,locked:!0}),Ns(s),qt.send("start",{trackId:s.trackId,laps:s.laps,difficulty:s.difficulty,roster:nt.race.getRoster()})}qt.on("message",(i,t,e)=>{if(Kt.active)if(i==="r")nt.race&&nt.race.netReceive&&nt.race.netReceive(t,e);else if(i==="start"&&!qt.isHost&&t&&Array.isArray(t.roster)){const n=t.roster.find(s=>s.netId===qt.id);if(!n)return;Ns({mode:"race",trackId:t.trackId,laps:t.laps,difficulty:t.difficulty,carId:n.carId,playerName:n.name,opponents:t.roster.length-1,net:{role:"client",localId:qt.id,roster:t.roster}})}else i==="lobby"&&!qt.isHost&&Xc()});qt.on("peers",()=>{if(!Kt.active)return;const i=qt.peers.map(t=>t.id);if(qt.isHost&&nt.race&&nt.race.dropRemote)for(const t of Kt.peerIds)i.includes(t)||nt.race.dropRemote(t);Kt.peerIds=i,Vt.updateLobby({players:Dd()})});qt.on("room",i=>{!Kt.active||!i||!i.settings||(Kt.settings=i.settings,Vt.updateLobby({settings:i.settings}),nt.state==="menu"&&Vt.isLobbyVisible()&&Ba({screen:"lobby",trackId:i.settings.trackId}))});qt.on("ping",i=>{Kt.active&&Vt.updateLobby({status:`Connected · ping ${Math.round(i)} ms`})});qt.on("close",i=>{Kt.active&&(Kt.active=!1,xr("mp"),Vt.showMpError(`Disconnected: ${i&&i.reason||"connection lost"}`))});function Nd(){nt.overlay&&(nt.overlay=!1,Vt.hidePause())}function qc(){if(nt.state==="racing"&&!(performance.now()-nt.lastResume<250)){if(Kt.active){if(nt.overlay)return;nt.overlay=!0,sn.capture=!1,sn.clear(),setTimeout(()=>{nt.overlay&&Vt.showPause({multiplayer:!0})},0);return}nt.state="paused",sn.capture=!1,ne.setEngine({rpm:0,throttle:0,active:!1}),ne.setSkid(0),setTimeout(()=>{nt.state==="paused"&&Vt.showPause()},0)}}function Tb(){if(nt.overlay){Nd(),nt.lastResume=performance.now(),sn.capture=!0,sn.clear();return}nt.state==="paused"&&(nt.state="racing",nt.lastResume=performance.now(),sn.capture=!0,sn.clear(),Vt.hidePause())}const Vt=Dy(document.getElementById("ui-root"),{tracks:Ei,cars:qn,items:on,handlers:{onStart(i){ne.unlock(),i.mode==="championship"?(nt.championship={round:0,order:Ei.map(t=>t.id),points:new Map,base:{...i},scored:!1},sl()):(nt.championship=null,Ns({...i,trackId:i.trackId||Ei[0].id}))},onPreview:Ba,onResume:Tb,onRestart(){!nt.config||Kt.active||(nt.championship?sl():Ns(nt.config))},onQuit(){lu(),xr("main")},onMpHost({playerName:i,carId:t}){cc(qt.host({name:i||"Host",meta:{carId:t}}))},onMpJoin({code:i,playerName:t,carId:e}){cc(qt.join(i,{name:t||"Player",meta:{carId:e}}))},onMpLeave(){lu()},onMpCar({carId:i}){Kt.active&&qt.setMeta({carId:i})},onMpSettings(i){!Kt.active||!qt.isHost||(Kt.settings={...Kt.settings,...i},qt.setRoomState({settings:Kt.settings}),Ba({screen:"lobby",trackId:Kt.settings.trackId}))},onMpStart(i){Ud(i||Kt.settings)},onMpLobby(){if(!Kt.active){xr("main");return}qt.isHost&&(qt.setRoomState({locked:!1}),qt.send("lobby",{})),Xc()},onNextRace(){const i=nt.championship;if(i){if(i.round>=i.order.length-1){xr("main");return}i.round+=1,sl()}},onSettings:Ld,onPauseRequest(){nt.state==="racing"&&!nt.overlay&&qc()},onCameraRequest(){nt.state==="racing"&&Vt.flashMessage(`CAMERA: ${nn.nextMode().toUpperCase()}`,900)},onResetRequest(){nt.state==="racing"&&zd()},onUiSound(i){ne.unlock(),ne.play(i)}}});sn.onPress(i=>{if(ne.unlock(),i==="KeyM"){nt.muted=!nt.muted,ne.setMuted(nt.muted),nt.state==="racing"&&Vt.flashMessage(nt.muted?"SOUND OFF":"SOUND ON",900);return}nt.state==="racing"&&!nt.overlay&&(i==="Escape"||i==="KeyP"?qc():i==="KeyC"?Vt.flashMessage(`CAMERA: ${nn.nextMode().toUpperCase()}`,900):i==="KeyR"&&zd())});window.addEventListener("pointerdown",()=>ne.unlock(),{once:!1});window.addEventListener("blur",()=>{!Kt.active&&nt.state==="racing"&&nt.race&&nt.race.state!=="finished"&&qc()});function zd(){const i=nt.race;if(!i||i.state!=="racing")return;const t=i.player,e=nt.track.sample(t.trackT);t.placeAt(e.pos.clone(),Math.atan2(e.tangent.x,e.tangent.z),nt.track),nn.snap()}const Xe={minimap:{points:null,cars:[]}};let hc=performance.now(),ys=1/60,Fd=0,rl=0;function Eb(){const i=nt.race,t=i.player,e=i.info(t);Xe.speed=Math.abs(t.speed),Xe.topSpeed=t.def.topSpeed,Xe.lap=e.lap,Xe.laps=e.laps,Xe.position=e.position,Xe.total=e.total,Xe.time=i.time,Xe.lapTime=e.lapTime,Xe.bestLap=e.bestLap,Xe.lastLap=e.lastLap,Xe.item=e.item,Xe.wrongWay=e.wrongWay,Xe.boost=t.boostTime>0,Xe.minimap.points=nt.track.minimap;const n=Xe.minimap.cars;n.length=i.cars.length;for(let s=0;s<i.cars.length;s++){const r=i.cars[s],a=n[s]||(n[s]={});a.x=r.pos.x,a.z=r.pos.z,a.isPlayer=r===t,a.color=r.color||r.def&&r.def.color||"#ffffff"}Vt.updateHUD(Xe)}function Od(i){requestAnimationFrame(Od),Fd=performance.now();let t=(i-hc)/1e3;if(hc=i,t>.1&&(t=.1),t<=0)return;Math.abs(t-ys)<ys*.35?(ys+=(t-ys)*.15,t=ys):ys=t,rl+=t;const e=nt.track,n=si.width,s=si.height;if(nt.state==="racing"||nt.state==="results"){const a=nt.race;sn.read(Ae);const o=Vt.touch;o&&o.active&&(o.throttle&&(Ae.throttle=o.throttle),o.steer&&(Ae.steer=o.steer),o.handbrake&&(Ae.handbrake=!0),o.fire&&(Ae.fire=!0)),nt.state==="results"&&(Ae.throttle=0,Ae.steer=0,Ae.handbrake=!1,Ae.fire=!1),nt.overlay&&(Ae.throttle=0,Ae.steer=0,Ae.handbrake=!1,Ae.fire=!1);const l=Math.max(1,Math.ceil(t/Rd-.01)),c=t/l;for(let h=0;h<l;h++)a.update(c,Ae);sn.consumeFire(),e.update(t,rl);const f=a.player;if(nl(f.pos),Nn.clearViewOffset(),nt.state==="racing"){nn.follow(f,t,e),Eb();const h=f.def.topSpeed||35,u=a.state!=="countdown"||!0;ne.setEngine({rpm:Math.min(1.2,Math.abs(f.speed)/h),throttle:a.state==="countdown"?Math.abs(Ae.throttle)*.6:Math.abs(Ae.throttle),active:u}),ne.setSkid(f.drifting&&f.onGround?Math.min(1,Math.abs(f.speed)/(h*.6)):0)}else nn.orbit(f.pos,t,{radius:7.5,height:2.6,speed:.35})}else if(nt.state!=="paused"){if(e)if(e.update(t,rl),Mb()){bb(nt.preview.carId||qn[0].id);const a=nt.previewCar.position;nl(a),nn.orbit(a,t,{radius:5.6,height:1.7,speed:.6,lookY:.45}),Nn.setViewOffset(n,s,-n*.2,-s*.04,n,s)}else{$a();const a=kd();nt.flyT+=t*(a?26:14)/e.length;const o=e.sample((nt.flyT%1+1)%1);nl(o.pos),nn.flyover(e,nt.flyT,t,a?{height:11,back:16,ahead:.04}:{height:5,back:10,ahead:.03}),a?Nn.setViewOffset(n,s,-n*.16,0,n,s):Nn.clearViewOffset()}}const r=nt.state==="menu"&&(!Vt.getMenuScreen||["title","main"].includes(Vt.getMenuScreen()));r!==ru&&(ru=r,_b.setVisible(r)),Gc.update(Nn,!!nt.race&&nt.state!=="menu"),Us.render(t)}let ba=0;setInterval(()=>{const i=performance.now();if(!(document.hidden||i-Fd>150)||!Kt.active||!nt.race||nt.state!=="racing"&&nt.state!=="results"){ba=0;return}const e=ba?Math.min(1.1,(i-ba)/1e3):0;if(ba=i,e<=0)return;Ae.throttle=0,Ae.steer=0,Ae.handbrake=!1,Ae.fire=!1;const n=Math.max(1,Math.ceil(e/Rd));for(let s=0;s<n;s++)nt.race.update(e/n,Ae);hc=i},33);Id();Ld(Vt.getSettings());nt.quality||(nt.quality="medium",Pd("medium"));Vc(Ei[0].id);const cu=(new URLSearchParams(location.search).get("join")||"").toUpperCase().replace(/[^A-Z]/g,"").slice(0,4);cu.length===4?(nt.preview.screen="mp",Vt.showMenu("mp",{joinCode:cu})):Vt.showMenu("title");ne.startMusic("menu");requestAnimationFrame(Od);window.__game={game:nt,net:qt,mp:Kt,gfx:Us,mpEnter:cc,mpStart:Ud,ui:Vt,audio:ne,renderer:Yn,scene:On,camera:Nn,startRace:Ns,toMenu:xr,TRACKS:Ei,CARS:qn,ITEMS:on};
