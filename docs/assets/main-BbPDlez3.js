var Eh=Object.defineProperty;var bh=(n,e,t)=>e in n?Eh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var B=(n,e,t)=>bh(n,typeof e!="symbol"?e+"":e,t);import{l as Br,m as pa,D as tr,a as aa,S as Ko,L as Zo}from"./pose-match-shared-Bu_67_Xk.js";const Ar=5,Th=200,Jo={precise:.5,normal:1,loose:2},wh=.35,Ah=12*Math.PI/180,kr=()=>wh*Jo[ne.tolLevel],zr=()=>Ah*Jo[ne.tolLevel],Rh=400,Ws=2.5,Ch=.4,qi=["rot","trans","6dof"],Ph=[20,30,45,60],qs={rot:"rotation",trans:"translation","6dof":"rotation + translation"},bu=1e4,Tu=1200,jc=(()=>{const n=+localStorage.getItem("pose-match-top-pct");return Number.isInteger(n)&&n>=0&&n<100?n:0})(),ne={booth:localStorage.getItem("pose-match-booth")==="1",gameMode:qi.includes(localStorage.getItem("pose-match-mode"))?localStorage.getItem("pose-match-mode"):"6dof",tolLevel:localStorage.getItem("pose-match-tol")in Jo?localStorage.getItem("pose-match-tol"):"loose",timeLimit:Ph.includes(+localStorage.getItem("pose-match-limit"))?+localStorage.getItem("pose-match-limit"):30,topPct:jc,lastTopN:jc||25,graphPlayer:(localStorage.getItem("pose-match-graph-player")||"").trim(),lbRange:["today","all"].includes(localStorage.getItem("pose-match-lb-range"))?localStorage.getItem("pose-match-lb-range"):"today",mouseRotType:["tumbler","trackball"].includes(localStorage.getItem("pose-match-mouserot"))?localStorage.getItem("pose-match-mouserot"):"trackball"},wu=()=>ne.lbRange==="today"?"today":"all time",Dt=()=>ne.gameMode!=="trans",cn=()=>ne.gameMode!=="rot",We={inputMode:null,spaceHeld:!1,startBoardHover:null},fe={state:"idle",poses:[],index:0,startTime:0,poseStartTime:0,motions:[],segmentFrom:null,dwellStart:null,phase:"active",previewStart:0,doneAt:0};function $r(){return fe.state==="running"&&fe.phase==="preview"}const wt={pendingScore:null,lastRun:null},Ae={active:!1,poses:[],index:0,shown:0,phase:"move",phaseT0:0,from:null,rng:null,savedMode:null,lastActivity:performance.now(),sticky:!1},Xs=n=>n.stopPropagation(),Rr=document.getElementById("pill-input"),Au={mouse:{text:"input: Mouse",cls:"pill"},"mouse-holroyd":{text:"input: Mouse (trackball)",cls:"pill"},touch:{text:"input: Touch",cls:"pill"},spacemouse:{text:"3Dconnexion: not initialized",cls:"pill"},rotatrix:{text:"OpenAxis: not initialized",cls:"pill"}};function Yn(n,e,t){Au[n]={text:e,cls:t},We.inputMode===n&&(Rr.textContent=e,Rr.className=t),dispatchEvent(new CustomEvent("backend-status",{detail:{backend:n,cls:t}}))}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="172",Lh=0,Yc=1,Ih=2,Ru=1,Dh=2,In=3,ni=0,$t=1,Mn=2,Zn=0,Zi=1,Kc=2,Zc=3,Jc=4,Uh=5,_i=100,Nh=101,Fh=102,Oh=103,Bh=104,kh=200,zh=201,Hh=202,Vh=203,ja=204,Ya=205,Gh=206,Wh=207,qh=208,Xh=209,$h=210,jh=211,Yh=212,Kh=213,Zh=214,Ka=0,Za=1,Ja=2,nr=3,Qa=4,eo=5,to=6,no=7,Cu=0,Jh=1,Qh=2,Jn=0,ef=1,tf=2,nf=3,rf=4,sf=5,af=6,of=7,Pu=300,ir=301,rr=302,io=303,ro=304,oa=306,so=1e3,Mi=1001,ao=1002,vn=1003,cf=1004,ns=1005,Sn=1006,ma=1007,Si=1008,kn=1009,Lu=1010,Iu=1011,Hr=1012,ec=1013,Ti=1014,Dn=1015,jr=1016,tc=1017,nc=1018,sr=1020,Du=35902,Uu=1021,Nu=1022,_n=1023,Fu=1024,Ou=1025,Ji=1026,ar=1027,Bu=1028,ic=1029,ku=1030,rc=1031,sc=1033,Ds=33776,Us=33777,Ns=33778,Fs=33779,oo=35840,co=35841,lo=35842,uo=35843,ho=36196,fo=37492,po=37496,mo=37808,go=37809,_o=37810,vo=37811,xo=37812,yo=37813,Mo=37814,So=37815,Eo=37816,bo=37817,To=37818,wo=37819,Ao=37820,Ro=37821,Os=36492,Co=36494,Po=36495,zu=36283,Lo=36284,Io=36285,Do=36286,lf=3200,uf=3201,Hu=0,df=1,jn="",Xt="srgb",or="srgb-linear",$s="linear",at="srgb",Pi=7680,Qc=519,hf=512,ff=513,pf=514,Vu=515,mf=516,gf=517,_f=518,vf=519,el=35044,tl="300 es",Un=2e3,js=2001;class ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nl=1234567;const Cr=Math.PI/180,Vr=180/Math.PI;function dr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function ac(n,e){return(n%e+e)%e}function xf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function yf(n,e,t){return n!==e?(t-n)/(e-n):0}function Pr(n,e,t){return(1-t)*n+t*e}function Mf(n,e,t,i){return Pr(n,e,1-Math.exp(-t*i))}function Sf(n,e=1){return e-Math.abs(ac(n,e*2)-e)}function Ef(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function bf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Tf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function wf(n,e){return n+Math.random()*(e-n)}function Af(n){return n*(.5-Math.random())}function Rf(n){n!==void 0&&(nl=n);let e=nl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cf(n){return n*Cr}function Pf(n){return n*Vr}function Lf(n){return(n&n-1)===0&&n!==0}function If(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Df(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Uf(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*h,c*f,o*l);break;case"YZY":n.set(c*f,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*f,o*u,o*l);break;case"XZX":n.set(o*u,c*_,c*p,o*l);break;case"YXY":n.set(c*p,o*u,c*_,o*l);break;case"ZYZ":n.set(c*_,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Gu={DEG2RAD:Cr,RAD2DEG:Vr,generateUUID:dr,clamp:qe,euclideanModulo:ac,mapLinear:xf,inverseLerp:yf,lerp:Pr,damp:Mf,pingpong:Sf,smoothstep:Ef,smootherstep:bf,randInt:Tf,randFloat:wf,randFloatSpread:Af,seededRandom:Rf,degToRad:Cf,radToDeg:Pf,isPowerOfTwo:Lf,ceilPowerOfTwo:If,floorPowerOfTwo:Df,setQuaternionFromProperEuler:Uf,normalize:Ot,denormalize:Xi};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,i,r,s,a,o,c,l){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],_=i[8],v=r[0],m=r[3],d=r[6],w=r[1],b=r[4],E=r[7],L=r[2],R=r[5],C=r[8];return s[0]=a*v+o*w+c*L,s[3]=a*m+o*b+c*R,s[6]=a*d+o*E+c*C,s[1]=l*v+u*w+h*L,s[4]=l*m+u*b+h*R,s[7]=l*d+u*E+h*C,s[2]=f*v+p*w+_*L,s[5]=f*m+p*b+_*R,s[8]=f*d+p*E+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,p=l*s-a*c,_=t*h+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(r*l-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new Ne;function Wu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Nf(){const n=Ys("canvas");return n.style.display="block",n}const il={};function $i(n){n in il||(il[n]=!0,console.warn(n))}function Ff(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Of(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Bf(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rl=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kf(){const n={enabled:!0,workingColorSpace:or,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=Fn(r.r),r.g=Fn(r.g),r.b=Fn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Qi(r.r),r.g=Qi(r.g),r.b=Qi(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jn?$s:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[or]:{primaries:e,whitePoint:i,transfer:$s,toXYZ:rl,fromXYZ:sl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:at,toXYZ:rl,fromXYZ:sl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}const Je=kf();function Fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Li;class zf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=Ys("canvas")),Li.width=e.width,Li.height=e.height;const i=Li.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Fn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fn(t[i]/255)*255):t[i]=Fn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hf=0;class qu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(_a(r[a].image)):s.push(_a(r[a]))}else s=_a(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function _a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vf=0;class Ht extends ur{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=Mi,r=Mi,s=Sn,a=Si,o=_n,c=kn,l=Ht.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=dr(),this.name="",this.source=new qu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Pu;Ht.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],_=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,E=(p+1)/2,L=(d+1)/2,R=(u+f)/4,C=(h+v)/4,F=(_+m)/4;return b>E&&b>L?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=R/i,s=C/i):E>L?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=F/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=C/s,r=F/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-_)*(m-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(h-v)/w,this.z=(f-u)/w,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gf extends ur{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ht(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new qu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Gf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xu extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wf extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ut{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],p=s[a+1],_=s[a+2],v=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(h!==v||c!==f||l!==p||u!==_){let m=1-o;const d=c*f+l*p+u*_+h*v,w=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const L=Math.sqrt(b),R=Math.atan2(L,d*w);m=Math.sin(m*R)/L,o=Math.sin(o*R)/L}const E=o*w;if(c=c*m+f*E,l=l*m+p*E,u=u*m+_*E,h=h*m+v*E,m===1-o){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+u*h+c*p-l*f,e[t+1]=c*_+u*f+l*h-o*p,e[t+2]=l*_+u*p+o*f-c*h,e[t+3]=u*_-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),f=c(i/2),p=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"YZX":this._x=f*u*h+l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h-f*p*_;break;case"XZY":this._x=f*u*h-l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new D,al=new Ut;class Ri{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),is.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),is.copy(i.boundingBox)),is.applyMatrix4(e.matrixWorld),this.union(is)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),rs.subVectors(this.max,gr),Ii.subVectors(e.a,gr),Di.subVectors(e.b,gr),Ui.subVectors(e.c,gr),Hn.subVectors(Di,Ii),Vn.subVectors(Ui,Di),ci.subVectors(Ii,Ui);let t=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ci.z,ci.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ci.z,0,-ci.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ci.y,ci.x,0];return!xa(t,Ii,Di,Ui,rs)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,Ii,Di,Ui,rs))?!1:(ss.crossVectors(Hn,Vn),t=[ss.x,ss.y,ss.z],xa(t,Ii,Di,Ui,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new D,new D,new D,new D,new D,new D,new D,new D],hn=new D,is=new Ri,Ii=new D,Di=new D,Ui=new D,Hn=new D,Vn=new D,ci=new D,gr=new D,rs=new D,ss=new D,li=new D;function xa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){li.fromArray(n,s);const o=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),c=e.dot(li),l=t.dot(li),u=i.dot(li);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const qf=new Ri,_r=new D,ya=new D;class ca{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):qf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_r,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(ya)),this.expandByPoint(_r.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new D,Ma=new D,as=new D,Gn=new D,Sa=new D,os=new D,Ea=new D;class oc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ma.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Ma);const s=e.distanceTo(t)*.5,a=-this.direction.dot(as),o=Gn.dot(this.direction),c=-Gn.dot(as),l=Gn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,_;if(u>0)if(h=a*c-o,f=a*o-c,_=s*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ma).addScaledVector(as,f),p}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const i=Rn.dot(this.direction),r=Rn.dot(Rn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,i,r,s){Sa.subVectors(t,e),os.subVectors(i,e),Ea.crossVectors(Sa,os);let a=this.direction.dot(Ea),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const c=o*this.direction.dot(os.crossVectors(Gn,os));if(c<0)return null;const l=o*this.direction.dot(Sa.cross(Gn));if(l<0||c+l>a)return null;const u=-o*Gn.dot(Ea);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,i,r,s,a,o,c,l,u,h,f,p,_,v,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,f,p,_,v,m)}set(e,t,i,r,s,a,o,c,l,u,h,f,p,_,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ni.setFromMatrixColumn(e,0).length(),s=1/Ni.setFromMatrixColumn(e,1).length(),a=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,_=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=_+p*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,_=l*u,v=l*h;t[0]=f+v*o,t[4]=_*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,_=l*u,v=l*h;t[0]=f-v*o,t[4]=-a*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,p=a*h,_=o*u,v=o*h;t[0]=c*u,t[4]=_*l-p,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,_=o*c,v=o*l;t[0]=c*u,t[4]=v-f*h,t[8]=_*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+_,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*c,p=a*l,_=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=a*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,$f)}lookAt(e,t,i){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Wn.crossVectors(i,Kt),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Wn.crossVectors(i,Kt)),Wn.normalize(),cs.crossVectors(Kt,Wn),r[0]=Wn.x,r[4]=cs.x,r[8]=Kt.x,r[1]=Wn.y,r[5]=cs.y,r[9]=Kt.y,r[2]=Wn.z,r[6]=cs.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],_=i[2],v=i[6],m=i[10],d=i[14],w=i[3],b=i[7],E=i[11],L=i[15],R=r[0],C=r[4],F=r[8],S=r[12],y=r[1],A=r[5],j=r[9],H=r[13],W=r[2],Z=r[6],G=r[10],Q=r[14],z=r[3],ie=r[7],he=r[11],ye=r[15];return s[0]=a*R+o*y+c*W+l*z,s[4]=a*C+o*A+c*Z+l*ie,s[8]=a*F+o*j+c*G+l*he,s[12]=a*S+o*H+c*Q+l*ye,s[1]=u*R+h*y+f*W+p*z,s[5]=u*C+h*A+f*Z+p*ie,s[9]=u*F+h*j+f*G+p*he,s[13]=u*S+h*H+f*Q+p*ye,s[2]=_*R+v*y+m*W+d*z,s[6]=_*C+v*A+m*Z+d*ie,s[10]=_*F+v*j+m*G+d*he,s[14]=_*S+v*H+m*Q+d*ye,s[3]=w*R+b*y+E*W+L*z,s[7]=w*C+b*A+E*Z+L*ie,s[11]=w*F+b*j+E*G+L*he,s[15]=w*S+b*H+E*Q+L*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15];return _*(+s*c*h-r*l*h-s*o*f+i*l*f+r*o*p-i*c*p)+v*(+t*c*p-t*l*f+s*a*f-r*a*p+r*l*u-s*c*u)+m*(+t*l*h-t*o*p-s*a*h+i*a*p+s*o*u-i*l*u)+d*(-r*o*u-t*c*h+t*o*f+r*a*h-i*a*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],w=h*m*l-v*f*l+v*c*p-o*m*p-h*c*d+o*f*d,b=_*f*l-u*m*l-_*c*p+a*m*p+u*c*d-a*f*d,E=u*v*l-_*h*l+_*o*p-a*v*p-u*o*d+a*h*d,L=_*h*c-u*v*c-_*o*f+a*v*f+u*o*m-a*h*m,R=t*w+i*b+r*E+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=w*C,e[1]=(v*f*s-h*m*s-v*r*p+i*m*p+h*r*d-i*f*d)*C,e[2]=(o*m*s-v*c*s+v*r*l-i*m*l-o*r*d+i*c*d)*C,e[3]=(h*c*s-o*f*s-h*r*l+i*f*l+o*r*p-i*c*p)*C,e[4]=b*C,e[5]=(u*m*s-_*f*s+_*r*p-t*m*p-u*r*d+t*f*d)*C,e[6]=(_*c*s-a*m*s-_*r*l+t*m*l+a*r*d-t*c*d)*C,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*p+t*c*p)*C,e[8]=E*C,e[9]=(_*h*s-u*v*s-_*i*p+t*v*p+u*i*d-t*h*d)*C,e[10]=(a*v*s-_*o*s+_*i*l-t*v*l-a*i*d+t*o*d)*C,e[11]=(u*o*s-a*h*s-u*i*l+t*h*l+a*i*p-t*o*p)*C,e[12]=L*C,e[13]=(u*v*r-_*h*r+_*i*f-t*v*f-u*i*m+t*h*m)*C,e[14]=(_*o*r-a*v*r-_*i*c+t*v*c+a*i*m-t*o*m)*C,e[15]=(a*h*r-u*o*r+u*i*c-t*h*c-a*i*f+t*o*f)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,p=s*u,_=s*h,v=a*u,m=a*h,d=o*h,w=c*l,b=c*u,E=c*h,L=i.x,R=i.y,C=i.z;return r[0]=(1-(v+d))*L,r[1]=(p+E)*L,r[2]=(_-b)*L,r[3]=0,r[4]=(p-E)*R,r[5]=(1-(f+d))*R,r[6]=(m+w)*R,r[7]=0,r[8]=(_+b)*C,r[9]=(m-w)*C,r[10]=(1-(f+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ni.set(r[0],r[1],r[2]).length();const a=Ni.set(r[4],r[5],r[6]).length(),o=Ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fn.copy(this);const l=1/s,u=1/a,h=1/o;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,t.setFromRotationMatrix(fn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Un){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(o===Un)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===js)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Un){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(a-s),f=(t+e)*l,p=(i+r)*u;let _,v;if(o===Un)_=(a+s)*h,v=-2*h;else if(o===js)_=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ni=new D,fn=new st,Xf=new D(0,0,0),$f=new D(1,1,1),Wn=new D,cs=new D,Kt=new D,ol=new st,cl=new Ut;class bn{constructor(e=0,t=0,i=0,r=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ol,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cl.setFromEuler(this),this.setFromQuaternion(cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class cc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jf=0;const ll=new D,Fi=new Ut,Cn=new st,ls=new D,vr=new D,Yf=new D,Kf=new Ut,ul=new D(1,0,0),dl=new D(0,1,0),hl=new D(0,0,1),fl={type:"added"},Zf={type:"removed"},Oi={type:"childadded",child:null},ba={type:"childremoved",child:null};class At extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new D,t=new bn,i=new Ut,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new Ne}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(ul,e)}rotateY(e){return this.rotateOnAxis(dl,e)}rotateZ(e){return this.rotateOnAxis(hl,e)}translateOnAxis(e,t){return ll.copy(e).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ul,e)}translateY(e){return this.translateOnAxis(dl,e)}translateZ(e){return this.translateOnAxis(hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ls.copy(e):ls.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(vr,ls,this.up):Cn.lookAt(ls,vr,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zf),ba.child=e,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,Yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}At.DEFAULT_UP=new D(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new D,Pn=new D,Ta=new D,Ln=new D,Bi=new D,ki=new D,pl=new D,wa=new D,Aa=new D,Ra=new D,Ca=new ut,Pa=new ut,La=new ut;class mn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),pn.subVectors(e,t),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){pn.subVectors(r,t),Pn.subVectors(i,t),Ta.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Pn),c=pn.dot(Ta),l=Pn.dot(Pn),u=Pn.dot(Ta),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-o*u)*f,_=(a*u-o*c)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ln.x),c.addScaledVector(a,Ln.y),c.addScaledVector(o,Ln.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ca.setScalar(0),Pa.setScalar(0),La.setScalar(0),Ca.fromBufferAttribute(e,t),Pa.fromBufferAttribute(e,i),La.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ca,s.x),a.addScaledVector(Pa,s.y),a.addScaledVector(La,s.z),a}static isFrontFacing(e,t,i,r){return pn.subVectors(i,t),Pn.subVectors(e,t),pn.cross(Pn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),pn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Bi.subVectors(r,i),ki.subVectors(s,i),wa.subVectors(e,i);const c=Bi.dot(wa),l=ki.dot(wa);if(c<=0&&l<=0)return t.copy(i);Aa.subVectors(e,r);const u=Bi.dot(Aa),h=ki.dot(Aa);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Bi,a);Ra.subVectors(e,s);const p=Bi.dot(Ra),_=ki.dot(Ra);if(_>=0&&p<=_)return t.copy(s);const v=p*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(ki,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return pl.subVectors(s,r),o=(h-u)/(h-u+(p-_)),t.copy(r).addScaledVector(pl,o);const d=1/(m+v+f);return a=v*d,o=f*d,t.copy(i).addScaledVector(Bi,a).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},us={h:0,s:0,l:0};function Ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=ac(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ia(a,s,e+1/3),this.g=Ia(a,s,e),this.b=Ia(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=$u[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Je.fromWorkingColorSpace(Lt.copy(this),e),Math.round(qe(Lt.r*255,0,255))*65536+Math.round(qe(Lt.g*255,0,255))*256+Math.round(qe(Lt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Xt){Je.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(us);const i=Pr(qn.h,us.h,t),r=Pr(qn.s,us.s,t),s=Pr(qn.l,us.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Fe;Fe.NAMES=$u;let Jf=0;class hr extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=Zi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Ya,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ja&&(i.blendSrc=this.blendSrc),this.blendDst!==Ya&&(i.blendDst=this.blendDst),this.blendEquation!==_i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class la extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new D,ds=new Qe;class kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=el,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==el&&(e.usage=this.usage),e}}class ju extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yu extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class jt extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Qf=0;const sn=new st,Da=new At,zi=new D,Zt=new Ri,xr=new Ri,bt=new D;class ln extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wu(e)?Yu:ju)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Zt.min,xr.min),Zt.expandByPoint(bt),bt.addVectors(Zt.max,xr.max),Zt.expandByPoint(bt)):(Zt.expandByPoint(xr.min),Zt.expandByPoint(xr.max))}Zt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)bt.fromBufferAttribute(o,l),c&&(zi.fromBufferAttribute(e,l),bt.add(zi)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<i.count;F++)o[F]=new D,c[F]=new D;const l=new D,u=new D,h=new D,f=new Qe,p=new Qe,_=new Qe,v=new D,m=new D;function d(F,S,y){l.fromBufferAttribute(i,F),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,F),p.fromBufferAttribute(s,S),_.fromBufferAttribute(s,y),u.sub(l),h.sub(l),p.sub(f),_.sub(f);const A=1/(p.x*_.y-_.x*p.y);isFinite(A)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(A),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(A),o[F].add(v),o[S].add(v),o[y].add(v),c[F].add(m),c[S].add(m),c[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,S=w.length;F<S;++F){const y=w[F],A=y.start,j=y.count;for(let H=A,W=A+j;H<W;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new D,E=new D,L=new D,R=new D;function C(F){L.fromBufferAttribute(r,F),R.copy(L);const S=o[F];b.copy(S),b.sub(L.multiplyScalar(L.dot(S))).normalize(),E.crossVectors(R,S);const A=E.dot(c[F])<0?-1:1;a.setXYZW(F,b.x,b.y,b.z,A)}for(let F=0,S=w.length;F<S;++F){const y=w[F],A=y.start,j=y.count;for(let H=A,W=A+j;H<W;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let p=0,_=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*u;for(let d=0;d<u;d++)f[_++]=l[p++]}return new kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new st,ui=new oc,hs=new ca,gl=new D,fs=new D,ps=new D,ms=new D,Ua=new D,gs=new D,_l=new D,_s=new D;class Qt extends At{constructor(e=new ln,t=new la){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){gs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Ua.fromBufferAttribute(h,e),a?gs.addScaledVector(Ua,u):gs.addScaledVector(Ua.sub(t),u))}t.add(gs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(s),ui.copy(e.ray).recast(e.near),!(hs.containsPoint(ui.origin)===!1&&(ui.intersectSphere(hs,gl)===null||ui.origin.distanceToSquared(gl)>(e.far-e.near)**2))&&(ml.copy(s).invert(),ui.copy(e.ray).applyMatrix4(ml),!(i.boundingBox!==null&&ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const m=f[_],d=a[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,L=b;E<L;E+=3){const R=o.getX(E),C=o.getX(E+1),F=o.getX(E+2);r=vs(this,d,e,i,l,u,h,R,C,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const w=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);r=vs(this,a,e,i,l,u,h,w,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const m=f[_],d=a[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,L=b;E<L;E+=3){const R=E,C=E+1,F=E+2;r=vs(this,d,e,i,l,u,h,R,C,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const w=m,b=m+1,E=m+2;r=vs(this,a,e,i,l,u,h,w,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ep(n,e,t,i,r,s,a,o){let c;if(e.side===$t?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===ni,o),c===null)return null;_s.copy(o),_s.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(_s);return l<t.near||l>t.far?null:{distance:l,point:_s.clone(),object:n}}function vs(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,fs),n.getVertexPosition(c,ps),n.getVertexPosition(l,ms);const u=ep(n,e,t,i,fs,ps,ms,_l);if(u){const h=new D;mn.getBarycoord(_l,fs,ps,ms,h),r&&(u.uv=mn.getInterpolatedAttribute(r,o,c,l,h,new Qe)),s&&(u.uv1=mn.getInterpolatedAttribute(s,o,c,l,h,new Qe)),a&&(u.normal=mn.getInterpolatedAttribute(a,o,c,l,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new D,materialIndex:0};mn.getNormal(fs,ps,ms,f.normal),u.face=f,u.barycoord=h}return u}class Yr extends ln{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2));function _(v,m,d,w,b,E,L,R,C,F,S){const y=E/C,A=L/F,j=E/2,H=L/2,W=R/2,Z=C+1,G=F+1;let Q=0,z=0;const ie=new D;for(let he=0;he<G;he++){const ye=he*A-H;for(let Oe=0;Oe<Z;Oe++){const et=Oe*y-j;ie[v]=et*w,ie[m]=ye*b,ie[d]=W,l.push(ie.x,ie.y,ie.z),ie[v]=0,ie[m]=0,ie[d]=R>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Oe/C),h.push(1-he/F),Q+=1}}for(let he=0;he<F;he++)for(let ye=0;ye<C;ye++){const Oe=f+ye+Z*he,et=f+ye+Z*(he+1),q=f+(ye+1)+Z*(he+1),te=f+(ye+1)+Z*he;c.push(Oe,et,te),c.push(et,q,te),z+=6}o.addGroup(p,z,S),p+=z,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=cr(n[t]);for(const r in i)e[r]=i[r]}return e}function tp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ku(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const np={clone:cr,merge:Bt};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zu extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new D,vl=new Qe,xl=new Qe;class on extends Zu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,vl,xl),t.subVectors(xl,vl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Vi=1;class sp extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(Hi,Vi,e,t);r.layers=this.layers,this.add(r);const s=new on(Hi,Vi,e,t);s.layers=this.layers,this.add(s);const a=new on(Hi,Vi,e,t);a.layers=this.layers,this.add(a);const o=new on(Hi,Vi,e,t);o.layers=this.layers,this.add(o);const c=new on(Hi,Vi,e,t);c.layers=this.layers,this.add(c);const l=new on(Hi,Vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ju extends Ht{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ap extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ju(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yr(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Zn});s.uniforms.tEquirect.value=t;const a=new Qt(r,s),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=Sn),new sp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class lc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=i}clone(){return new lc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class op extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Na=new D,cp=new D,lp=new Ne;class mi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Na.subVectors(i,t).cross(cp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Na),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lp.getNormalMatrix(e),r=this.coplanarPoint(Na).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new ca,xs=new D;class uc{constructor(e=new mi,t=new mi,i=new mi,r=new mi,s=new mi,a=new mi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],p=r[8],_=r[9],v=r[10],m=r[11],d=r[12],w=r[13],b=r[14],E=r[15];if(i[0].setComponents(c-s,f-l,m-p,E-d).normalize(),i[1].setComponents(c+s,f+l,m+p,E+d).normalize(),i[2].setComponents(c+a,f+u,m+_,E+w).normalize(),i[3].setComponents(c-a,f-u,m-_,E-w).normalize(),i[4].setComponents(c-o,f-h,m-v,E-b).normalize(),t===Un)i[5].setComponents(c+o,f+h,m+v,E+b).normalize();else if(t===js)i[5].setComponents(o,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(xs.x=r.normal.x>0?e.max.x:e.min.x,xs.y=r.normal.y>0?e.max.y:e.min.y,xs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dc extends hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ks=new D,Zs=new D,yl=new st,yr=new oc,ys=new ca,Fa=new D,Ml=new D;class Qu extends At{constructor(e=new ln,t=new dc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ks.fromBufferAttribute(t,r-1),Zs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ks.distanceTo(Zs);e.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(r),ys.radius+=s,e.ray.intersectsSphere(ys)===!1)return;yl.copy(r).invert(),yr.copy(e.ray).applyMatrix4(yl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=p,m=_-1;v<m;v+=l){const d=u.getX(v),w=u.getX(v+1),b=Ms(this,e,yr,c,d,w);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(p),d=Ms(this,e,yr,c,v,m);d&&t.push(d)}}else{const p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let v=p,m=_-1;v<m;v+=l){const d=Ms(this,e,yr,c,v,v+1);d&&t.push(d)}if(this.isLineLoop){const v=Ms(this,e,yr,c,_-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ms(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(Ks.fromBufferAttribute(a,r),Zs.fromBufferAttribute(a,s),t.distanceSqToSegment(Ks,Zs,Fa,Ml)>i)return;Fa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Fa);if(!(c<e.near||c>e.far))return{distance:c,point:Ml.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Sl=new D,El=new D;class up extends Qu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Sl.fromBufferAttribute(t,r),El.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Sl.distanceTo(El);e.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ji extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}class dp extends Ht{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ed extends Ht{constructor(e,t,i,r,s,a,o,c,l,u=Ji){if(u!==Ji&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ji&&(i=Ti),i===void 0&&u===ar&&(i=sr),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vn,this.minFilter=c!==void 0?c:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ua extends ln{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,p=[],_=[],v=[],m=[];for(let d=0;d<u;d++){const w=d*f-a;for(let b=0;b<l;b++){const E=b*h-s;_.push(E,-w,0),v.push(0,0,1),m.push(b/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let w=0;w<o;w++){const b=w+l*d,E=w+l*(d+1),L=w+1+l*(d+1),R=w+1+l*d;p.push(b,E,R),p.push(E,L,R)}this.setIndex(p),this.setAttribute("position",new jt(_,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.widthSegments,e.heightSegments)}}class hc extends ln{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let h=e;const f=(t-e)/r,p=new D,_=new Qe;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const d=s+m/i*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}h+=f}for(let v=0;v<r;v++){const m=v*(i+1);for(let d=0;d<i;d++){const w=d+m,b=w,E=w+i+1,L=w+i+2,R=w+1;o.push(b,E,R),o.push(E,L,R)}}this.setIndex(o),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Js extends hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hu,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hp extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fp extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fc extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class pp extends fc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Oa=new st,bl=new D,Tl=new D;class mp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uc,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(bl),Tl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tl),t.updateMatrixWorld(),Oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class td extends Zu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gp extends mp{constructor(){super(new td(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _p extends fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new gp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vp extends fc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xp extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const wl=new st;class nd{constructor(e,t,i=0,r=1/0){this.ray=new oc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new cc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wl),this}intersectObject(e,t=!0,i=[]){return Uo(e,this,i,t),i.sort(Al),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Uo(e[r],this,i,t);return i.sort(Al),i}}function Al(n,e){return n.distance-e.distance}function Uo(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Uo(s[a],e,t,!0)}}class yp extends up{constructor(e=10,t=10,i=4473924,r=8947848){i=new Fe(i),r=new Fe(r);const s=t/2,a=e/t,o=e/2,c=[],l=[];for(let f=0,p=0,_=-o;f<=t;f++,_+=a){c.push(-o,0,_,o,0,_),c.push(_,0,-o,_,0,o);const v=f===s?i:r;v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3}const u=new ln;u.setAttribute("position",new jt(c,3)),u.setAttribute("color",new jt(l,3));const h=new dc({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Rl(n,e,t,i){const r=Mp(i);switch(t){case Uu:return n*e;case Fu:return n*e;case Ou:return n*e*2;case Bu:return n*e/r.components*r.byteLength;case ic:return n*e/r.components*r.byteLength;case ku:return n*e*2/r.components*r.byteLength;case rc:return n*e*2/r.components*r.byteLength;case Nu:return n*e*3/r.components*r.byteLength;case _n:return n*e*4/r.components*r.byteLength;case sc:return n*e*4/r.components*r.byteLength;case Ds:case Us:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ns:case Fs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case co:case uo:return Math.max(n,16)*Math.max(e,8)/4;case oo:case lo:return Math.max(n,8)*Math.max(e,8)/2;case ho:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _o:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case To:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Os:case Co:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*16;case zu:case Lo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Io:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mp(n){switch(n){case kn:case Lu:return{byteLength:1,components:1};case Hr:case Iu:case jr:return{byteLength:2,components:1};case tc:case nc:return{byteLength:2,components:4};case Ti:case ec:case Dn:return{byteLength:4,components:1};case Du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function id(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Sp(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],v=h[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const v=h[p];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
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
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
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
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fp=`#ifdef USE_IRIDESCENCE
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
#endif`,Op=`#ifdef USE_BUMPMAP
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jp=`vec3 transformedNormal = objectNormal;
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
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,um=`#ifdef USE_GRADIENTMAP
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
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pm=`uniform bool receiveShadow;
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
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
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
#endif`,Mm=`struct PhysicalMaterial {
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
}`,Sm=`
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Im=`#if defined( USE_POINTS_UV )
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
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
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
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
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
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,og=`float getShadowMask() {
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
}`,cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eg=`uniform sampler2D t2D;
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`#include <common>
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
}`,Cg=`#if DEPTH_PACKING == 3200
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
}`,Pg=`#define DISTANCE
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
}`,Lg=`#define DISTANCE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`uniform float scale;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Fg=`#include <common>
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
}`,Og=`uniform vec3 diffuse;
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
}`,Bg=`#define LAMBERT
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
}`,kg=`#define LAMBERT
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
}`,zg=`#define MATCAP
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
}`,Hg=`#define MATCAP
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
}`,Vg=`#define NORMAL
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
}`,Gg=`#define NORMAL
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
}`,Wg=`#define PHONG
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
}`,qg=`#define PHONG
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
}`,Xg=`#define STANDARD
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
}`,$g=`#define STANDARD
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
}`,jg=`#define TOON
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
}`,Yg=`#define TOON
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
}`,Kg=`uniform float size;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,Qg=`uniform vec3 color;
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
}`,e0=`uniform float rotation;
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
}`,t0=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Ep,alphahash_pars_fragment:bp,alphamap_fragment:Tp,alphamap_pars_fragment:wp,alphatest_fragment:Ap,alphatest_pars_fragment:Rp,aomap_fragment:Cp,aomap_pars_fragment:Pp,batching_pars_vertex:Lp,batching_vertex:Ip,begin_vertex:Dp,beginnormal_vertex:Up,bsdfs:Np,iridescence_fragment:Fp,bumpmap_pars_fragment:Op,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Hp,color_fragment:Vp,color_pars_fragment:Gp,color_pars_vertex:Wp,color_vertex:qp,common:Xp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:jp,displacementmap_pars_vertex:Yp,displacementmap_vertex:Kp,emissivemap_fragment:Zp,emissivemap_pars_fragment:Jp,colorspace_fragment:Qp,colorspace_pars_fragment:em,envmap_fragment:tm,envmap_common_pars_fragment:nm,envmap_pars_fragment:im,envmap_pars_vertex:rm,envmap_physical_pars_fragment:mm,envmap_vertex:sm,fog_vertex:am,fog_pars_vertex:om,fog_fragment:cm,fog_pars_fragment:lm,gradientmap_pars_fragment:um,lightmap_pars_fragment:dm,lights_lambert_fragment:hm,lights_lambert_pars_fragment:fm,lights_pars_begin:pm,lights_toon_fragment:gm,lights_toon_pars_fragment:_m,lights_phong_fragment:vm,lights_phong_pars_fragment:xm,lights_physical_fragment:ym,lights_physical_pars_fragment:Mm,lights_fragment_begin:Sm,lights_fragment_maps:Em,lights_fragment_end:bm,logdepthbuf_fragment:Tm,logdepthbuf_pars_fragment:wm,logdepthbuf_pars_vertex:Am,logdepthbuf_vertex:Rm,map_fragment:Cm,map_pars_fragment:Pm,map_particle_fragment:Lm,map_particle_pars_fragment:Im,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Um,morphinstance_vertex:Nm,morphcolor_vertex:Fm,morphnormal_vertex:Om,morphtarget_pars_vertex:Bm,morphtarget_vertex:km,normal_fragment_begin:zm,normal_fragment_maps:Hm,normal_pars_fragment:Vm,normal_pars_vertex:Gm,normal_vertex:Wm,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Ym,opaque_fragment:Km,packing:Zm,premultiplied_alpha_fragment:Jm,project_vertex:Qm,dithering_fragment:eg,dithering_pars_fragment:tg,roughnessmap_fragment:ng,roughnessmap_pars_fragment:ig,shadowmap_pars_fragment:rg,shadowmap_pars_vertex:sg,shadowmap_vertex:ag,shadowmask_pars_fragment:og,skinbase_vertex:cg,skinning_pars_vertex:lg,skinning_vertex:ug,skinnormal_vertex:dg,specularmap_fragment:hg,specularmap_pars_fragment:fg,tonemapping_fragment:pg,tonemapping_pars_fragment:mg,transmission_fragment:gg,transmission_pars_fragment:_g,uv_pars_fragment:vg,uv_pars_vertex:xg,uv_vertex:yg,worldpos_vertex:Mg,background_vert:Sg,background_frag:Eg,backgroundCube_vert:bg,backgroundCube_frag:Tg,cube_vert:wg,cube_frag:Ag,depth_vert:Rg,depth_frag:Cg,distanceRGBA_vert:Pg,distanceRGBA_frag:Lg,equirect_vert:Ig,equirect_frag:Dg,linedashed_vert:Ug,linedashed_frag:Ng,meshbasic_vert:Fg,meshbasic_frag:Og,meshlambert_vert:Bg,meshlambert_frag:kg,meshmatcap_vert:zg,meshmatcap_frag:Hg,meshnormal_vert:Vg,meshnormal_frag:Gg,meshphong_vert:Wg,meshphong_frag:qg,meshphysical_vert:Xg,meshphysical_frag:$g,meshtoon_vert:jg,meshtoon_frag:Yg,points_vert:Kg,points_frag:Zg,shadow_vert:Jg,shadow_frag:Qg,sprite_vert:e0,sprite_frag:t0},re={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},yn={basic:{uniforms:Bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Bt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Bt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Bt([re.points,re.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Bt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Bt([re.common,re.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Bt([re.sprite,re.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Bt([re.common,re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Bt([re.lights,re.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};yn.physical={uniforms:Bt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ss={r:0,b:0,g:0},hi=new bn,n0=new st;function i0(n,e,t,i,r,s,a){const o=new Fe(0);let c=s===!0?0:1,l,u,h=null,f=0,p=null;function _(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function v(b){let E=!1;const L=_(b);L===null?d(o,c):L&&L.isColor&&(d(L,1),E=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,E){const L=_(E);L&&(L.isCubeTexture||L.mapping===oa)?(u===void 0&&(u=new Qt(new Yr(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:cr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hi.copy(E.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(n0.makeRotationFromEuler(hi)),u.material.toneMapped=Je.getTransfer(L.colorSpace)!==at,(h!==L||f!==L.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=L,f=L.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new Qt(new ua(2,2),new ii({name:"BackgroundMaterial",uniforms:cr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Je.getTransfer(L.colorSpace)!==at,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||f!==L.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=L,f=L.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function d(b,E){b.getRGB(Ss,Ku(n)),i.buffers.color.setClear(Ss.r,Ss.g,Ss.b,E,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),c=E,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,d(o,c)},render:v,addToRenderList:m,dispose:w}}function r0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,A,j,H,W){let Z=!1;const G=h(H,j,A);s!==G&&(s=G,l(s.object)),Z=p(y,H,j,W),Z&&_(y,H,j,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,E(y,A,j,H),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,A,j){const H=j.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let Z=W[A.id];Z===void 0&&(Z={},W[A.id]=Z);let G=Z[H];return G===void 0&&(G=f(c()),Z[H]=G),G}function f(y){const A=[],j=[],H=[];for(let W=0;W<t;W++)A[W]=0,j[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:j,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,A,j,H){const W=s.attributes,Z=A.attributes;let G=0;const Q=j.getAttributes();for(const z in Q)if(Q[z].location>=0){const he=W[z];let ye=Z[z];if(ye===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),he===void 0||he.attribute!==ye||ye&&he.data!==ye.data)return!0;G++}return s.attributesNum!==G||s.index!==H}function _(y,A,j,H){const W={},Z=A.attributes;let G=0;const Q=j.getAttributes();for(const z in Q)if(Q[z].location>=0){let he=Z[z];he===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(he=y.instanceColor));const ye={};ye.attribute=he,he&&he.data&&(ye.data=he.data),W[z]=ye,G++}s.attributes=W,s.attributesNum=G,s.index=H}function v(){const y=s.newAttributes;for(let A=0,j=y.length;A<j;A++)y[A]=0}function m(y){d(y,0)}function d(y,A){const j=s.newAttributes,H=s.enabledAttributes,W=s.attributeDivisors;j[y]=1,H[y]===0&&(n.enableVertexAttribArray(y),H[y]=1),W[y]!==A&&(n.vertexAttribDivisor(y,A),W[y]=A)}function w(){const y=s.newAttributes,A=s.enabledAttributes;for(let j=0,H=A.length;j<H;j++)A[j]!==y[j]&&(n.disableVertexAttribArray(j),A[j]=0)}function b(y,A,j,H,W,Z,G){G===!0?n.vertexAttribIPointer(y,A,j,W,Z):n.vertexAttribPointer(y,A,j,H,W,Z)}function E(y,A,j,H){v();const W=H.attributes,Z=j.getAttributes(),G=A.defaultAttributeValues;for(const Q in Z){const z=Z[Q];if(z.location>=0){let ie=W[Q];if(ie===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),ie!==void 0){const he=ie.normalized,ye=ie.itemSize,Oe=e.get(ie);if(Oe===void 0)continue;const et=Oe.buffer,q=Oe.type,te=Oe.bytesPerElement,xe=q===n.INT||q===n.UNSIGNED_INT||ie.gpuType===ec;if(ie.isInterleavedBufferAttribute){const se=ie.data,be=se.stride,Ce=ie.offset;if(se.isInstancedInterleavedBuffer){for(let Be=0;Be<z.locationSize;Be++)d(z.location+Be,se.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Be=0;Be<z.locationSize;Be++)m(z.location+Be);n.bindBuffer(n.ARRAY_BUFFER,et);for(let Be=0;Be<z.locationSize;Be++)b(z.location+Be,ye/z.locationSize,q,he,be*te,(Ce+ye/z.locationSize*Be)*te,xe)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<z.locationSize;se++)d(z.location+se,ie.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<z.locationSize;se++)m(z.location+se);n.bindBuffer(n.ARRAY_BUFFER,et);for(let se=0;se<z.locationSize;se++)b(z.location+se,ye/z.locationSize,q,he,ye*te,ye/z.locationSize*se*te,xe)}}else if(G!==void 0){const he=G[Q];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(z.location,he);break;case 3:n.vertexAttrib3fv(z.location,he);break;case 4:n.vertexAttrib4fv(z.location,he);break;default:n.vertexAttrib1fv(z.location,he)}}}}w()}function L(){F();for(const y in i){const A=i[y];for(const j in A){const H=A[j];for(const W in H)u(H[W].object),delete H[W];delete A[j]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const A=i[y.id];for(const j in A){const H=A[j];for(const W in H)u(H[W].object),delete H[W];delete A[j]}delete i[y.id]}function C(y){for(const A in i){const j=i[A];if(j[y.id]===void 0)continue;const H=j[y.id];for(const W in H)u(H[W].object),delete H[W];delete j[y.id]}}function F(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function s0(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,i,1)}function c(l,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)a(l[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*f[v];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function a0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==_n&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const F=C===jr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==kn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Dn&&!F)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:L,maxSamples:R}}function o0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new mi,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const w=s?0:i,b=w*4;let E=d.clippingState||null;c.value=E,E=u(_,f,b,p);for(let L=0;L!==b;++L)E[L]=t[L];d.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,_){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const d=p+v*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,E=p;b!==v;++b,E+=4)a.copy(h[b]).applyMatrix4(w,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function c0(n){let e=new WeakMap;function t(a,o){return o===io?a.mapping=ir:o===ro&&(a.mapping=rr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===io||o===ro)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ap(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Yi=4,Cl=[.125,.215,.35,.446,.526,.582],vi=20,Ba=new td,Pl=new Fe;let ka=null,za=0,Ha=0,Va=!1;const gi=(1+Math.sqrt(5))/2,Gi=1/gi,Ll=[new D(-gi,Gi,0),new D(gi,Gi,0),new D(-Gi,0,gi),new D(Gi,0,gi),new D(0,gi,-Gi),new D(0,gi,Gi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ka=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,za,Ha),this._renderer.xr.enabled=Va,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:jr,format:_n,colorSpace:or,depthBuffer:!1},r=Dl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l0(s)),this._blurMaterial=u0(s,e,t)}return r}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,i,r){const o=new on(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Pl),u.toneMapping=Jn,u.autoClear=!1;const p=new la({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),_=new Qt(new Yr,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Pl),v=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):w===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const b=this._cubeSize;Es(r,w*b,d>2?b:0,b,b),u.setRenderTarget(r),v&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ir||e.mapping===rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Es(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Ba)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ll[(r-s-1)%Ll.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Qt(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vi-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):vi;m>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const d=[];let w=0;for(let C=0;C<vi;++C){const F=C/v,S=Math.exp(-F*F/2);d.push(S),C===0?w+=S:C<m&&(w+=2*S)}for(let C=0;C<d.length;C++)d[C]=d[C]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const E=this._sizeLods[r],L=3*E*(r>b-Yi?r-b+Yi:0),R=4*(this._cubeSize-E);Es(t,L,R,3*E,2*E),c.setRenderTarget(t),c.render(h,Ba)}}function l0(n){const e=[],t=[],i=[];let r=n;const s=n-Yi+1+Cl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Yi?c=Cl[a-n+Yi-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,v=3,m=2,d=1,w=new Float32Array(v*_*p),b=new Float32Array(m*_*p),E=new Float32Array(d*_*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,F=R>2?0:-1,S=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];w.set(S,v*_*R),b.set(f,m*_*R);const y=[R,R,R,R,R,R];E.set(y,d*_*R)}const L=new ln;L.setAttribute("position",new kt(w,v)),L.setAttribute("uv",new kt(b,m)),L.setAttribute("faceIndex",new kt(E,d)),e.push(L),r>Yi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Dl(n,e,t){const i=new wi(n,e,t);return i.texture.mapping=oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function u0(n,e,t){const i=new Float32Array(vi),r=new D(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ul(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Nl(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function pc(){return`

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
	`}function d0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===io||c===ro,u=c===ir||c===rr;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Il(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Il(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function h0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&$i("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function f0(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,_=h.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let b=0,E=w.length;b<E;b+=3){const L=w[b+0],R=w[b+1],C=w[b+2];f.push(L,R,R,C,C,L)}}else if(_!==void 0){const w=_.array;v=_.version;for(let b=0,E=w.length/3-1;b<E;b+=3){const L=b+0,R=b+1,C=b+2;f.push(L,R,R,C,C,L)}}else return;const m=new(Wu(f)?Yu:ju)(f,1);m.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function p0(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*a),t.update(p,i,1)}function l(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,f*a,_),t.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function h(f,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,_);let d=0;for(let w=0;w<_;w++)d+=p[w]*v[w];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function m0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function g0(n,e,t){const i=new WeakMap,r=new ut;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let S=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),_===!0&&(b=2),v===!0&&(b=3);let E=o.attributes.position.count*b,L=1;E>e.maxTextureSize&&(L=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*L*4*h),C=new Xu(R,E,L,h);C.type=Dn,C.needsUpdate=!0;const F=b*4;for(let y=0;y<h;y++){const A=m[y],j=d[y],H=w[y],W=E*L*4*y;for(let Z=0;Z<A.count;Z++){const G=Z*F;p===!0&&(r.fromBufferAttribute(A,Z),R[W+G+0]=r.x,R[W+G+1]=r.y,R[W+G+2]=r.z,R[W+G+3]=0),_===!0&&(r.fromBufferAttribute(j,Z),R[W+G+4]=r.x,R[W+G+5]=r.y,R[W+G+6]=r.z,R[W+G+7]=0),v===!0&&(r.fromBufferAttribute(H,Z),R[W+G+8]=r.x,R[W+G+9]=r.y,R[W+G+10]=r.z,R[W+G+11]=H.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new Qe(E,L)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function _0(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const rd=new Ht,Fl=new ed(1,1),sd=new Xu,ad=new Wf,od=new Ju,Ol=[],Bl=[],kl=new Float32Array(16),zl=new Float32Array(9),Hl=new Float32Array(4);function fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ol[r];if(s===void 0&&(s=new Float32Array(r),Ol[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function da(n,e){let t=Bl[e];t===void 0&&(t=new Int32Array(e),Bl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function v0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function x0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function y0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function M0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function S0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Hl.set(i),n.uniformMatrix2fv(this.addr,!1,Hl),Et(t,i)}}function E0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;zl.set(i),n.uniformMatrix3fv(this.addr,!1,zl),Et(t,i)}}function b0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;kl.set(i),n.uniformMatrix4fv(this.addr,!1,kl),Et(t,i)}}function T0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function w0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function A0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function R0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function C0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function P0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function L0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function I0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function D0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Fl.compareFunction=Vu,s=Fl):s=rd,t.setTexture2D(e||s,r)}function U0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ad,r)}function N0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||od,r)}function F0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||sd,r)}function O0(n){switch(n){case 5126:return v0;case 35664:return x0;case 35665:return y0;case 35666:return M0;case 35674:return S0;case 35675:return E0;case 35676:return b0;case 5124:case 35670:return T0;case 35667:case 35671:return w0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return L0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return F0}}function B0(n,e){n.uniform1fv(this.addr,e)}function k0(n,e){const t=fr(e,this.size,2);n.uniform2fv(this.addr,t)}function z0(n,e){const t=fr(e,this.size,3);n.uniform3fv(this.addr,t)}function H0(n,e){const t=fr(e,this.size,4);n.uniform4fv(this.addr,t)}function V0(n,e){const t=fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function G0(n,e){const t=fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function W0(n,e){const t=fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function q0(n,e){n.uniform1iv(this.addr,e)}function X0(n,e){n.uniform2iv(this.addr,e)}function $0(n,e){n.uniform3iv(this.addr,e)}function j0(n,e){n.uniform4iv(this.addr,e)}function Y0(n,e){n.uniform1uiv(this.addr,e)}function K0(n,e){n.uniform2uiv(this.addr,e)}function Z0(n,e){n.uniform3uiv(this.addr,e)}function J0(n,e){n.uniform4uiv(this.addr,e)}function Q0(n,e,t){const i=this.cache,r=e.length,s=da(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||rd,s[a])}function e_(n,e,t){const i=this.cache,r=e.length,s=da(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ad,s[a])}function t_(n,e,t){const i=this.cache,r=e.length,s=da(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||od,s[a])}function n_(n,e,t){const i=this.cache,r=e.length,s=da(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||sd,s[a])}function i_(n){switch(n){case 5126:return B0;case 35664:return k0;case 35665:return z0;case 35666:return H0;case 35674:return V0;case 35675:return G0;case 35676:return W0;case 5124:case 35670:return q0;case 35667:case 35671:return X0;case 35668:case 35672:return $0;case 35669:case 35673:return j0;case 5125:return Y0;case 36294:return K0;case 36295:return Z0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}class r_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=O0(t.type)}}class s_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i_(t.type)}}class a_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Vl(n,e){n.seq.push(e),n.map[e.id]=e}function o_(n,e,t){const i=n.name,r=i.length;for(Ga.lastIndex=0;;){const s=Ga.exec(i),a=Ga.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Vl(t,l===void 0?new r_(o,n,e):new s_(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new a_(o),Vl(t,h)),t=h}}}class Bs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);o_(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Gl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const c_=37297;let l_=0;function u_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Wl=new Ne;function d_(n){Je._getMatrix(Wl,Je.workingColorSpace,n);const e=`mat3( ${Wl.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case $s:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ql(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+u_(n.getShaderSource(e),a)}else return r}function h_(n,e){const t=d_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function f_(n,e){let t;switch(e){case ef:t="Linear";break;case tf:t="Reinhard";break;case nf:t="Cineon";break;case rf:t="ACESFilmic";break;case af:t="AgX";break;case of:t="Neutral";break;case sf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bs=new D;function p_(){Je.getLuminanceCoefficients(bs);const n=bs.x.toFixed(4),e=bs.y.toFixed(4),t=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function g_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function __(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Er(n){return n!==""}function Xl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $l(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v_=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(n){return n.replace(v_,y_)}const x_=new Map;function y_(n,e){let t=ze[e];if(t===void 0){const i=x_.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return No(t)}const M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(n){return n.replace(M_,S_)}function S_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ru?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function b_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ir:case rr:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function w_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Cu:e="ENVMAP_BLENDING_MULTIPLY";break;case Jh:e="ENVMAP_BLENDING_MIX";break;case Qh:e="ENVMAP_BLENDING_ADD";break}return e}function A_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function R_(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=E_(t),l=b_(t),u=T_(t),h=w_(t),f=A_(t),p=m_(t),_=g_(s),v=r.createProgram();let m,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Er).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Er).join(`
`),d.length>0&&(d+=`
`)):(m=[Yl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),d=[Yl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Jn?f_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,h_("linearToOutputTexel",t.outputColorSpace),p_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),a=No(a),a=Xl(a,t),a=$l(a,t),o=No(o),o=Xl(o,t),o=$l(o,t),a=jl(a),o=jl(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=w+m+a,E=w+d+o,L=Gl(r,r.VERTEX_SHADER,b),R=Gl(r,r.FRAGMENT_SHADER,E);r.attachShader(v,L),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(A){if(n.debug.checkShaderErrors){const j=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(L).trim(),W=r.getShaderInfoLog(R).trim();let Z=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,L,R);else{const Q=ql(r,L,"vertex"),z=ql(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+j+`
`+Q+`
`+z)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(H===""||W==="")&&(G=!1);G&&(A.diagnostics={runnable:Z,programLog:j,vertexShader:{log:H,prefix:m},fragmentShader:{log:W,prefix:d}})}r.deleteShader(L),r.deleteShader(R),F=new Bs(r,v),S=__(r,v)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,c_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=R,this}let C_=0;class P_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new L_(e),t.set(e,i)),i}}class L_{constructor(e){this.id=C_++,this.code=e,this.usedTimes=0}}function I_(n,e,t,i,r,s,a){const o=new cc,c=new P_,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,A,j,H){const W=j.fog,Z=H.geometry,G=S.isMeshStandardMaterial?j.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),z=Q&&Q.mapping===oa?Q.image.height:null,ie=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const he=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ye=he!==void 0?he.length:0;let Oe=0;Z.morphAttributes.position!==void 0&&(Oe=1),Z.morphAttributes.normal!==void 0&&(Oe=2),Z.morphAttributes.color!==void 0&&(Oe=3);let et,q,te,xe;if(ie){const rt=yn[ie];et=rt.vertexShader,q=rt.fragmentShader}else et=S.vertexShader,q=S.fragmentShader,c.update(S),te=c.getVertexShaderID(S),xe=c.getFragmentShaderID(S);const se=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Ce=H.isInstancedMesh===!0,Be=H.isBatchedMesh===!0,ot=!!S.map,Xe=!!S.matcap,ft=!!Q,T=!!S.aoMap,Nt=!!S.lightMap,Ve=!!S.bumpMap,Ge=!!S.normalMap,Me=!!S.displacementMap,Ke=!!S.emissiveMap,ae=!!S.metalnessMap,M=!!S.roughnessMap,g=S.anisotropy>0,N=S.clearcoat>0,$=S.dispersion>0,Y=S.iridescence>0,X=S.sheen>0,Se=S.transmission>0,le=g&&!!S.anisotropyMap,me=N&&!!S.clearcoatMap,je=N&&!!S.clearcoatNormalMap,ee=N&&!!S.clearcoatRoughnessMap,ge=Y&&!!S.iridescenceMap,we=Y&&!!S.iridescenceThicknessMap,Pe=X&&!!S.sheenColorMap,_e=X&&!!S.sheenRoughnessMap,$e=!!S.specularMap,ke=!!S.specularColorMap,ct=!!S.specularIntensityMap,P=Se&&!!S.transmissionMap,oe=Se&&!!S.thicknessMap,V=!!S.gradientMap,K=!!S.alphaMap,de=S.alphaTest>0,ue=!!S.alphaHash,Ue=!!S.extensions;let pt=Jn;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(pt=n.toneMapping);const Ct={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:et,fragmentShader:q,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Be,batchingColor:Be&&H._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&H.instanceColor!==null,instancingMorph:Ce&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:or,alphaToCoverage:!!S.alphaToCoverage,map:ot,matcap:Xe,envMap:ft,envMapMode:ft&&Q.mapping,envMapCubeUVHeight:z,aoMap:T,lightMap:Nt,bumpMap:Ve,normalMap:Ge,displacementMap:f&&Me,emissiveMap:Ke,normalMapObjectSpace:Ge&&S.normalMapType===df,normalMapTangentSpace:Ge&&S.normalMapType===Hu,metalnessMap:ae,roughnessMap:M,anisotropy:g,anisotropyMap:le,clearcoat:N,clearcoatMap:me,clearcoatNormalMap:je,clearcoatRoughnessMap:ee,dispersion:$,iridescence:Y,iridescenceMap:ge,iridescenceThicknessMap:we,sheen:X,sheenColorMap:Pe,sheenRoughnessMap:_e,specularMap:$e,specularColorMap:ke,specularIntensityMap:ct,transmission:Se,transmissionMap:P,thicknessMap:oe,gradientMap:V,opaque:S.transparent===!1&&S.blending===Zi&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:de,alphaHash:ue,combine:S.combine,mapUv:ot&&v(S.map.channel),aoMapUv:T&&v(S.aoMap.channel),lightMapUv:Nt&&v(S.lightMap.channel),bumpMapUv:Ve&&v(S.bumpMap.channel),normalMapUv:Ge&&v(S.normalMap.channel),displacementMapUv:Me&&v(S.displacementMap.channel),emissiveMapUv:Ke&&v(S.emissiveMap.channel),metalnessMapUv:ae&&v(S.metalnessMap.channel),roughnessMapUv:M&&v(S.roughnessMap.channel),anisotropyMapUv:le&&v(S.anisotropyMap.channel),clearcoatMapUv:me&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:we&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(S.sheenRoughnessMap.channel),specularMapUv:$e&&v(S.specularMap.channel),specularColorMapUv:ke&&v(S.specularColorMap.channel),specularIntensityMapUv:ct&&v(S.specularIntensityMap.channel),transmissionMapUv:P&&v(S.transmissionMap.channel),thicknessMapUv:oe&&v(S.thicknessMap.channel),alphaMapUv:K&&v(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ge||g),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(ot||K),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:be,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:ot&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===at,decodeVideoTextureEmissive:Ke&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mn,flipSided:S.side===$t,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&S.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function d(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)y.push(A),y.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(w(y,S),b(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function w(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const y=_[S.type];let A;if(y){const j=yn[y];A=np.clone(j.uniforms)}else A=S.uniforms;return A}function L(S,y){let A;for(let j=0,H=u.length;j<H;j++){const W=u[j];if(W.cacheKey===y){A=W,++A.usedTimes;break}}return A===void 0&&(A=new R_(n,y,S,s),u.push(A)),A}function R(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function C(S){c.remove(S)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:F}}function D_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function U_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Kl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,p,_,v,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:v,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function o(h,f,p,_,v,m){const d=a(h,f,p,_,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(h,f,p,_,v,m){const d=a(h,f,p,_,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||U_),i.length>1&&i.sort(f||Kl),r.length>1&&r.sort(f||Kl)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function N_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Zl,n.set(i,[a])):r>=s.length?(a=new Zl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function F_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Fe};break;case"SpotLight":t={position:new D,direction:new D,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function O_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let B_=0;function k_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function z_(n){const e=new F_,t=O_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const r=new D,s=new st,a=new st;function o(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,w=0,b=0,E=0,L=0,R=0,C=0;l.sort(k_);for(let S=0,y=l.length;S<y;S++){const A=l[S],j=A.color,H=A.intensity,W=A.distance,Z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=j.r*H,h+=j.g*H,f+=j.b*H;else if(A.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(A.sh.coefficients[G],H);C++}else if(A.isDirectionalLight){const G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Q=A.shadow,z=t.get(A);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=A.shadow.matrix,w++}i.directional[p]=G,p++}else if(A.isSpotLight){const G=e.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(j).multiplyScalar(H),G.distance=W,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,i.spot[v]=G;const Q=A.shadow;if(A.map&&(i.spotLightMap[L]=A.map,L++,Q.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[v]=Q.matrix,A.castShadow){const z=t.get(A);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=Z,E++}v++}else if(A.isRectAreaLight){const G=e.get(A);G.color.copy(j).multiplyScalar(H),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=G,m++}else if(A.isPointLight){const G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){const Q=A.shadow,z=t.get(A);z.shadowIntensity=Q.intensity,z.shadowBias=Q.bias,z.shadowNormalBias=Q.normalBias,z.shadowRadius=Q.radius,z.shadowMapSize=Q.mapSize,z.shadowCameraNear=Q.camera.near,z.shadowCameraFar=Q.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=A.shadow.matrix,b++}i.point[_]=G,_++}else if(A.isHemisphereLight){const G=e.get(A);G.skyColor.copy(A.color).multiplyScalar(H),G.groundColor.copy(A.groundColor).multiplyScalar(H),i.hemi[d]=G,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==d||F.numDirectionalShadows!==w||F.numPointShadows!==b||F.numSpotShadows!==E||F.numSpotMaps!==L||F.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,F.directionalLength=p,F.pointLength=_,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=d,F.numDirectionalShadows=w,F.numPointShadows=b,F.numSpotShadows=E,F.numSpotMaps=L,F.numLightProbes=C,i.version=B_++)}function c(l,u){let h=0,f=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let d=0,w=l.length;d<w;d++){const b=l[d];if(b.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function Jl(n){const e=new z_(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function H_(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Jl(n),e.set(r,[o])):s>=a.length?(o=new Jl(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
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
}`;function W_(n,e,t){let i=new uc;const r=new Qe,s=new Qe,a=new ut,o=new hp({depthPacking:uf}),c=new fp,l={},u=t.maxTextureSize,h={[ni]:$t,[$t]:ni,[Mn]:Mn},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:V_,fragmentShader:G_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new ln;_.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let d=this.type;this.render=function(R,C,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Zn),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const H=d!==In&&this.type===In,W=d===In&&this.type!==In;for(let Z=0,G=R.length;Z<G;Z++){const Q=R[Z],z=Q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ie=z.getFrameExtents();if(r.multiply(ie),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,z.mapSize.y=s.y)),z.map===null||H===!0||W===!0){const ye=this.type!==In?{minFilter:vn,magFilter:vn}:{};z.map!==null&&z.map.dispose(),z.map=new wi(r.x,r.y,ye),z.map.texture.name=Q.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const he=z.getViewportCount();for(let ye=0;ye<he;ye++){const Oe=z.getViewport(ye);a.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),j.viewport(a),z.updateMatrices(Q,ye),i=z.getFrustum(),E(C,F,z.camera,Q,this.type)}z.isPointLightShadow!==!0&&this.type===In&&w(z,F),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,A)};function w(R,C){const F=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new wi(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,F,f,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,F,p,v,null)}function b(R,C,F,S){let y=null;const A=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)y=A;else if(y=F.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const j=y.uuid,H=C.uuid;let W=l[j];W===void 0&&(W={},l[j]=W);let Z=W[H];Z===void 0&&(Z=y.clone(),W[H]=Z,C.addEventListener("dispose",L)),y=Z}if(y.visible=C.visible,y.wireframe=C.wireframe,S===In?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:h[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const j=n.properties.get(y);j.light=F}return y}function E(R,C,F,S,y){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===In)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const H=e.update(R),W=R.material;if(Array.isArray(W)){const Z=H.groups;for(let G=0,Q=Z.length;G<Q;G++){const z=Z[G],ie=W[z.materialIndex];if(ie&&ie.visible){const he=b(R,ie,S,y);R.onBeforeShadow(n,R,C,F,H,he,z),n.renderBufferDirect(F,null,H,he,R,z),R.onAfterShadow(n,R,C,F,H,he,z)}}}else if(W.visible){const Z=b(R,W,S,y);R.onBeforeShadow(n,R,C,F,H,Z,null),n.renderBufferDirect(F,null,H,Z,R,null),R.onAfterShadow(n,R,C,F,H,Z,null)}}const j=R.children;for(let H=0,W=j.length;H<W;H++)E(j[H],C,F,S,y)}function L(R){R.target.removeEventListener("dispose",L);for(const F in l){const S=l[F],y=R.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const q_={[Ka]:Za,[Ja]:to,[Qa]:no,[nr]:eo,[Za]:Ka,[to]:Ja,[no]:Qa,[eo]:nr};function X_(n,e){function t(){let P=!1;const oe=new ut;let V=null;const K=new ut(0,0,0,0);return{setMask:function(de){V!==de&&!P&&(n.colorMask(de,de,de,de),V=de)},setLocked:function(de){P=de},setClear:function(de,ue,Ue,pt,Ct){Ct===!0&&(de*=pt,ue*=pt,Ue*=pt),oe.set(de,ue,Ue,pt),K.equals(oe)===!1&&(n.clearColor(de,ue,Ue,pt),K.copy(oe))},reset:function(){P=!1,V=null,K.set(-1,0,0,0)}}}function i(){let P=!1,oe=!1,V=null,K=null,de=null;return{setReversed:function(ue){if(oe!==ue){const Ue=e.get("EXT_clip_control");oe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const pt=de;de=null,this.setClear(pt)}oe=ue},getReversed:function(){return oe},setTest:function(ue){ue?se(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ue){V!==ue&&!P&&(n.depthMask(ue),V=ue)},setFunc:function(ue){if(oe&&(ue=q_[ue]),K!==ue){switch(ue){case Ka:n.depthFunc(n.NEVER);break;case Za:n.depthFunc(n.ALWAYS);break;case Ja:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case Qa:n.depthFunc(n.EQUAL);break;case eo:n.depthFunc(n.GEQUAL);break;case to:n.depthFunc(n.GREATER);break;case no:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ue}},setLocked:function(ue){P=ue},setClear:function(ue){de!==ue&&(oe&&(ue=1-ue),n.clearDepth(ue),de=ue)},reset:function(){P=!1,V=null,K=null,de=null,oe=!1}}}function r(){let P=!1,oe=null,V=null,K=null,de=null,ue=null,Ue=null,pt=null,Ct=null;return{setTest:function(rt){P||(rt?se(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(rt){oe!==rt&&!P&&(n.stencilMask(rt),oe=rt)},setFunc:function(rt,un,wn){(V!==rt||K!==un||de!==wn)&&(n.stencilFunc(rt,un,wn),V=rt,K=un,de=wn)},setOp:function(rt,un,wn){(ue!==rt||Ue!==un||pt!==wn)&&(n.stencilOp(rt,un,wn),ue=rt,Ue=un,pt=wn)},setLocked:function(rt){P=rt},setClear:function(rt){Ct!==rt&&(n.clearStencil(rt),Ct=rt)},reset:function(){P=!1,oe=null,V=null,K=null,de=null,ue=null,Ue=null,pt=null,Ct=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],_=null,v=!1,m=null,d=null,w=null,b=null,E=null,L=null,R=null,C=new Fe(0,0,0),F=0,S=!1,y=null,A=null,j=null,H=null,W=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=Q>=1):z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=Q>=2);let ie=null,he={};const ye=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),et=new ut().fromArray(ye),q=new ut().fromArray(Oe);function te(P,oe,V,K){const de=new Uint8Array(4),ue=n.createTexture();n.bindTexture(P,ue),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<V;Ue++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(oe+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ue}const xe={};xe[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(n.DEPTH_TEST),a.setFunc(nr),Ve(!1),Ge(Yc),se(n.CULL_FACE),T(Zn);function se(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function be(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function Ce(P,oe){return h[P]!==oe?(n.bindFramebuffer(P,oe),h[P]=oe,P===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=oe),P===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Be(P,oe){let V=p,K=!1;if(P){V=f.get(oe),V===void 0&&(V=[],f.set(oe,V));const de=P.textures;if(V.length!==de.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Ue=de.length;ue<Ue;ue++)V[ue]=n.COLOR_ATTACHMENT0+ue;V.length=de.length,K=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,K=!0);K&&n.drawBuffers(V)}function ot(P){return _!==P?(n.useProgram(P),_=P,!0):!1}const Xe={[_i]:n.FUNC_ADD,[Nh]:n.FUNC_SUBTRACT,[Fh]:n.FUNC_REVERSE_SUBTRACT};Xe[Oh]=n.MIN,Xe[Bh]=n.MAX;const ft={[kh]:n.ZERO,[zh]:n.ONE,[Hh]:n.SRC_COLOR,[ja]:n.SRC_ALPHA,[$h]:n.SRC_ALPHA_SATURATE,[qh]:n.DST_COLOR,[Gh]:n.DST_ALPHA,[Vh]:n.ONE_MINUS_SRC_COLOR,[Ya]:n.ONE_MINUS_SRC_ALPHA,[Xh]:n.ONE_MINUS_DST_COLOR,[Wh]:n.ONE_MINUS_DST_ALPHA,[jh]:n.CONSTANT_COLOR,[Yh]:n.ONE_MINUS_CONSTANT_COLOR,[Kh]:n.CONSTANT_ALPHA,[Zh]:n.ONE_MINUS_CONSTANT_ALPHA};function T(P,oe,V,K,de,ue,Ue,pt,Ct,rt){if(P===Zn){v===!0&&(be(n.BLEND),v=!1);return}if(v===!1&&(se(n.BLEND),v=!0),P!==Uh){if(P!==m||rt!==S){if((d!==_i||E!==_i)&&(n.blendEquation(n.FUNC_ADD),d=_i,E=_i),rt)switch(P){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.ONE,n.ONE);break;case Zc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,b=null,L=null,R=null,C.set(0,0,0),F=0,m=P,S=rt}return}de=de||oe,ue=ue||V,Ue=Ue||K,(oe!==d||de!==E)&&(n.blendEquationSeparate(Xe[oe],Xe[de]),d=oe,E=de),(V!==w||K!==b||ue!==L||Ue!==R)&&(n.blendFuncSeparate(ft[V],ft[K],ft[ue],ft[Ue]),w=V,b=K,L=ue,R=Ue),(pt.equals(C)===!1||Ct!==F)&&(n.blendColor(pt.r,pt.g,pt.b,Ct),C.copy(pt),F=Ct),m=P,S=!1}function Nt(P,oe){P.side===Mn?be(n.CULL_FACE):se(n.CULL_FACE);let V=P.side===$t;oe&&(V=!V),Ve(V),P.blending===Zi&&P.transparent===!1?T(Zn):T(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const K=P.stencilWrite;o.setTest(K),K&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ke(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(P){y!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),y=P)}function Ge(P){P!==Lh?(se(n.CULL_FACE),P!==A&&(P===Yc?n.cullFace(n.BACK):P===Ih?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),A=P}function Me(P){P!==j&&(G&&n.lineWidth(P),j=P)}function Ke(P,oe,V){P?(se(n.POLYGON_OFFSET_FILL),(H!==oe||W!==V)&&(n.polygonOffset(oe,V),H=oe,W=V)):be(n.POLYGON_OFFSET_FILL)}function ae(P){P?se(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function M(P){P===void 0&&(P=n.TEXTURE0+Z-1),ie!==P&&(n.activeTexture(P),ie=P)}function g(P,oe,V){V===void 0&&(ie===null?V=n.TEXTURE0+Z-1:V=ie);let K=he[V];K===void 0&&(K={type:void 0,texture:void 0},he[V]=K),(K.type!==P||K.texture!==oe)&&(ie!==V&&(n.activeTexture(V),ie=V),n.bindTexture(P,oe||xe[P]),K.type=P,K.texture=oe)}function N(){const P=he[ie];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function je(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(P){et.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),et.copy(P))}function _e(P){q.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function $e(P,oe){let V=l.get(oe);V===void 0&&(V=new WeakMap,l.set(oe,V));let K=V.get(P);K===void 0&&(K=n.getUniformBlockIndex(oe,P.name),V.set(P,K))}function ke(P,oe){const K=l.get(oe).get(P);c.get(oe)!==K&&(n.uniformBlockBinding(oe,K,P.__bindingPointIndex),c.set(oe,K))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ie=null,he={},h={},f=new WeakMap,p=[],_=null,v=!1,m=null,d=null,w=null,b=null,E=null,L=null,R=null,C=new Fe(0,0,0),F=0,S=!1,y=null,A=null,j=null,H=null,W=null,et.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:be,bindFramebuffer:Ce,drawBuffers:Be,useProgram:ot,setBlending:T,setMaterial:Nt,setFlipSided:Ve,setCullFace:Ge,setLineWidth:Me,setPolygonOffset:Ke,setScissorTest:ae,activeTexture:M,bindTexture:g,unbindTexture:N,compressedTexImage2D:$,compressedTexImage3D:Y,texImage2D:ge,texImage3D:we,updateUBOMapping:$e,uniformBlockBinding:ke,texStorage2D:je,texStorage3D:ee,texSubImage2D:X,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Pe,viewport:_e,reset:ct}}function $_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return p?new OffscreenCanvas(M,g):Ys("canvas")}function v(M,g,N){let $=1;const Y=ae(M);if((Y.width>N||Y.height>N)&&($=N/Math.max(Y.width,Y.height)),$<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const X=Math.floor($*Y.width),Se=Math.floor($*Y.height);h===void 0&&(h=_(X,Se));const le=g?_(X,Se):h;return le.width=X,le.height=Se,le.getContext("2d").drawImage(M,0,0,X,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+X+"x"+Se+")."),le}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),M;return M}function m(M){return M.generateMipmaps}function d(M){n.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(M,g,N,$,Y=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let X=g;if(g===n.RED&&(N===n.FLOAT&&(X=n.R32F),N===n.HALF_FLOAT&&(X=n.R16F),N===n.UNSIGNED_BYTE&&(X=n.R8)),g===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.R8UI),N===n.UNSIGNED_SHORT&&(X=n.R16UI),N===n.UNSIGNED_INT&&(X=n.R32UI),N===n.BYTE&&(X=n.R8I),N===n.SHORT&&(X=n.R16I),N===n.INT&&(X=n.R32I)),g===n.RG&&(N===n.FLOAT&&(X=n.RG32F),N===n.HALF_FLOAT&&(X=n.RG16F),N===n.UNSIGNED_BYTE&&(X=n.RG8)),g===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RG8UI),N===n.UNSIGNED_SHORT&&(X=n.RG16UI),N===n.UNSIGNED_INT&&(X=n.RG32UI),N===n.BYTE&&(X=n.RG8I),N===n.SHORT&&(X=n.RG16I),N===n.INT&&(X=n.RG32I)),g===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGB8UI),N===n.UNSIGNED_SHORT&&(X=n.RGB16UI),N===n.UNSIGNED_INT&&(X=n.RGB32UI),N===n.BYTE&&(X=n.RGB8I),N===n.SHORT&&(X=n.RGB16I),N===n.INT&&(X=n.RGB32I)),g===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),N===n.UNSIGNED_INT&&(X=n.RGBA32UI),N===n.BYTE&&(X=n.RGBA8I),N===n.SHORT&&(X=n.RGBA16I),N===n.INT&&(X=n.RGBA32I)),g===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),g===n.RGBA){const Se=Y?$s:Je.getTransfer($);N===n.FLOAT&&(X=n.RGBA32F),N===n.HALF_FLOAT&&(X=n.RGBA16F),N===n.UNSIGNED_BYTE&&(X=Se===at?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function E(M,g){let N;return M?g===null||g===Ti||g===sr?N=n.DEPTH24_STENCIL8:g===Dn?N=n.DEPTH32F_STENCIL8:g===Hr&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ti||g===sr?N=n.DEPTH_COMPONENT24:g===Dn?N=n.DEPTH_COMPONENT32F:g===Hr&&(N=n.DEPTH_COMPONENT16),N}function L(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==vn&&M.minFilter!==Sn?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function R(M){const g=M.target;g.removeEventListener("dispose",R),F(g),g.isVideoTexture&&u.delete(g)}function C(M){const g=M.target;g.removeEventListener("dispose",C),y(g)}function F(M){const g=i.get(M);if(g.__webglInit===void 0)return;const N=M.source,$=f.get(N);if($){const Y=$[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&S(M),Object.keys($).length===0&&f.delete(N)}i.remove(M)}function S(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const N=M.source,$=f.get(N);delete $[g.__cacheKey],a.memory.textures--}function y(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let Y=0;Y<g.__webglFramebuffer[$].length;Y++)n.deleteFramebuffer(g.__webglFramebuffer[$][Y]);else n.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)n.deleteFramebuffer(g.__webglFramebuffer[$]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=M.textures;for(let $=0,Y=N.length;$<Y;$++){const X=i.get(N[$]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(N[$])}i.remove(M)}let A=0;function j(){A=0}function H(){const M=A;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),A+=1,M}function W(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function Z(M,g){const N=i.get(M);if(M.isVideoTexture&&Me(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){const $=M.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,M,g);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+g)}function G(M,g){const N=i.get(M);if(M.version>0&&N.__version!==M.version){q(N,M,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+g)}function Q(M,g){const N=i.get(M);if(M.version>0&&N.__version!==M.version){q(N,M,g);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+g)}function z(M,g){const N=i.get(M);if(M.version>0&&N.__version!==M.version){te(N,M,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+g)}const ie={[so]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[ao]:n.MIRRORED_REPEAT},he={[vn]:n.NEAREST,[cf]:n.NEAREST_MIPMAP_NEAREST,[ns]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[ma]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},ye={[hf]:n.NEVER,[vf]:n.ALWAYS,[ff]:n.LESS,[Vu]:n.LEQUAL,[pf]:n.EQUAL,[_f]:n.GEQUAL,[mf]:n.GREATER,[gf]:n.NOTEQUAL};function Oe(M,g){if(g.type===Dn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Sn||g.magFilter===ma||g.magFilter===ns||g.magFilter===Si||g.minFilter===Sn||g.minFilter===ma||g.minFilter===ns||g.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ie[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ie[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ie[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,he[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,ye[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===vn||g.minFilter!==ns&&g.minFilter!==Si||g.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function et(M,g){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",R));const $=g.source;let Y=f.get($);Y===void 0&&(Y={},f.set($,Y));const X=W(g);if(X!==M.__cacheKey){Y[X]===void 0&&(Y[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Y[X].usedTimes++;const Se=Y[M.__cacheKey];Se!==void 0&&(Y[M.__cacheKey].usedTimes--,Se.usedTimes===0&&S(g)),M.__cacheKey=X,M.__webglTexture=Y[X].texture}return N}function q(M,g,N){let $=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=n.TEXTURE_3D);const Y=et(M,g),X=g.source;t.bindTexture($,M.__webglTexture,n.TEXTURE0+N);const Se=i.get(X);if(X.version!==Se.__version||Y===!0){t.activeTexture(n.TEXTURE0+N);const le=Je.getPrimaries(Je.workingColorSpace),me=g.colorSpace===jn?null:Je.getPrimaries(g.colorSpace),je=g.colorSpace===jn||le===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ee=v(g.image,!1,r.maxTextureSize);ee=Ke(g,ee);const ge=s.convert(g.format,g.colorSpace),we=s.convert(g.type);let Pe=b(g.internalFormat,ge,we,g.colorSpace,g.isVideoTexture);Oe($,g);let _e;const $e=g.mipmaps,ke=g.isVideoTexture!==!0,ct=Se.__version===void 0||Y===!0,P=X.dataReady,oe=L(g,ee);if(g.isDepthTexture)Pe=E(g.format===ar,g.type),ct&&(ke?t.texStorage2D(n.TEXTURE_2D,1,Pe,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ee.width,ee.height,0,ge,we,null));else if(g.isDataTexture)if($e.length>0){ke&&ct&&t.texStorage2D(n.TEXTURE_2D,oe,Pe,$e[0].width,$e[0].height);for(let V=0,K=$e.length;V<K;V++)_e=$e[V],ke?P&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,we,_e.data):t.texImage2D(n.TEXTURE_2D,V,Pe,_e.width,_e.height,0,ge,we,_e.data);g.generateMipmaps=!1}else ke?(ct&&t.texStorage2D(n.TEXTURE_2D,oe,Pe,ee.width,ee.height),P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,ge,we,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,ee.width,ee.height,0,ge,we,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ke&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Pe,$e[0].width,$e[0].height,ee.depth);for(let V=0,K=$e.length;V<K;V++)if(_e=$e[V],g.format!==_n)if(ge!==null)if(ke){if(P)if(g.layerUpdates.size>0){const de=Rl(_e.width,_e.height,g.format,g.type);for(const ue of g.layerUpdates){const Ue=_e.data.subarray(ue*de/_e.data.BYTES_PER_ELEMENT,(ue+1)*de/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ue,_e.width,_e.height,1,ge,Ue)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,ee.depth,ge,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Pe,_e.width,_e.height,ee.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,ee.depth,ge,we,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Pe,_e.width,_e.height,ee.depth,0,ge,we,_e.data)}else{ke&&ct&&t.texStorage2D(n.TEXTURE_2D,oe,Pe,$e[0].width,$e[0].height);for(let V=0,K=$e.length;V<K;V++)_e=$e[V],g.format!==_n?ge!==null?ke?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?P&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,we,_e.data):t.texImage2D(n.TEXTURE_2D,V,Pe,_e.width,_e.height,0,ge,we,_e.data)}else if(g.isDataArrayTexture)if(ke){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Pe,ee.width,ee.height,ee.depth),P)if(g.layerUpdates.size>0){const V=Rl(ee.width,ee.height,g.format,g.type);for(const K of g.layerUpdates){const de=ee.data.subarray(K*V/ee.data.BYTES_PER_ELEMENT,(K+1)*V/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,ge,we,de)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ge,we,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ee.width,ee.height,ee.depth,0,ge,we,ee.data);else if(g.isData3DTexture)ke?(ct&&t.texStorage3D(n.TEXTURE_3D,oe,Pe,ee.width,ee.height,ee.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ge,we,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ee.width,ee.height,ee.depth,0,ge,we,ee.data);else if(g.isFramebufferTexture){if(ct)if(ke)t.texStorage2D(n.TEXTURE_2D,oe,Pe,ee.width,ee.height);else{let V=ee.width,K=ee.height;for(let de=0;de<oe;de++)t.texImage2D(n.TEXTURE_2D,de,Pe,V,K,0,ge,we,null),V>>=1,K>>=1}}else if($e.length>0){if(ke&&ct){const V=ae($e[0]);t.texStorage2D(n.TEXTURE_2D,oe,Pe,V.width,V.height)}for(let V=0,K=$e.length;V<K;V++)_e=$e[V],ke?P&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,ge,we,_e):t.texImage2D(n.TEXTURE_2D,V,Pe,ge,we,_e);g.generateMipmaps=!1}else if(ke){if(ct){const V=ae(ee);t.texStorage2D(n.TEXTURE_2D,oe,Pe,V.width,V.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,we,ee)}else t.texImage2D(n.TEXTURE_2D,0,Pe,ge,we,ee);m(g)&&d($),Se.__version=X.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function te(M,g,N){if(g.image.length!==6)return;const $=et(M,g),Y=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+N);const X=i.get(Y);if(Y.version!==X.__version||$===!0){t.activeTexture(n.TEXTURE0+N);const Se=Je.getPrimaries(Je.workingColorSpace),le=g.colorSpace===jn?null:Je.getPrimaries(g.colorSpace),me=g.colorSpace===jn||Se===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const je=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,ge=[];for(let K=0;K<6;K++)!je&&!ee?ge[K]=v(g.image[K],!0,r.maxCubemapSize):ge[K]=ee?g.image[K].image:g.image[K],ge[K]=Ke(g,ge[K]);const we=ge[0],Pe=s.convert(g.format,g.colorSpace),_e=s.convert(g.type),$e=b(g.internalFormat,Pe,_e,g.colorSpace),ke=g.isVideoTexture!==!0,ct=X.__version===void 0||$===!0,P=Y.dataReady;let oe=L(g,we);Oe(n.TEXTURE_CUBE_MAP,g);let V;if(je){ke&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,$e,we.width,we.height);for(let K=0;K<6;K++){V=ge[K].mipmaps;for(let de=0;de<V.length;de++){const ue=V[de];g.format!==_n?Pe!==null?ke?P&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,ue.width,ue.height,Pe,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,$e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,ue.width,ue.height,Pe,_e,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,$e,ue.width,ue.height,0,Pe,_e,ue.data)}}}else{if(V=g.mipmaps,ke&&ct){V.length>0&&oe++;const K=ae(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,$e,K.width,K.height)}for(let K=0;K<6;K++)if(ee){ke?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ge[K].width,ge[K].height,Pe,_e,ge[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,ge[K].width,ge[K].height,0,Pe,_e,ge[K].data);for(let de=0;de<V.length;de++){const Ue=V[de].image[K].image;ke?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,Ue.width,Ue.height,Pe,_e,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,$e,Ue.width,Ue.height,0,Pe,_e,Ue.data)}}else{ke?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pe,_e,ge[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,Pe,_e,ge[K]);for(let de=0;de<V.length;de++){const ue=V[de];ke?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,Pe,_e,ue.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,$e,Pe,_e,ue.image[K])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),X.__version=Y.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function xe(M,g,N,$,Y,X){const Se=s.convert(N.format,N.colorSpace),le=s.convert(N.type),me=b(N.internalFormat,Se,le,N.colorSpace),je=i.get(g),ee=i.get(N);if(ee.__renderTarget=g,!je.__hasExternalTextures){const ge=Math.max(1,g.width>>X),we=Math.max(1,g.height>>X);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,X,me,ge,we,g.depth,0,Se,le,null):t.texImage2D(Y,X,me,ge,we,0,Se,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Ge(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Y,ee.__webglTexture,0,Ve(g)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Y,ee.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(M,g,N){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer){const $=g.depthTexture,Y=$&&$.isDepthTexture?$.type:null,X=E(g.stencilBuffer,Y),Se=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=Ve(g);Ge(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,X,g.width,g.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,X,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,X,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,M)}else{const $=g.textures;for(let Y=0;Y<$.length;Y++){const X=$[Y],Se=s.convert(X.format,X.colorSpace),le=s.convert(X.type),me=b(X.internalFormat,Se,le,X.colorSpace),je=Ve(g);N&&Ge(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,me,g.width,g.height):Ge(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,me,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,me,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(g.depthTexture);$.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z(g.depthTexture,0);const Y=$.__webglTexture,X=Ve(g);if(g.depthTexture.format===Ji)Ge(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(g.depthTexture.format===ar)Ge(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ce(M){const g=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const $=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",Y)};$.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=$}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");be(g.__webglFramebuffer,M)}else if(N){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=n.createRenderbuffer(),se(g.__webglDepthbuffer[$],M,!1);else{const Y=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,X)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),se(g.__webglDepthbuffer,M,!1);else{const $=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Y)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(M,g,N){const $=i.get(M);g!==void 0&&xe($.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Ce(M)}function ot(M){const g=M.texture,N=i.get(M),$=i.get(g);M.addEventListener("dispose",C);const Y=M.textures,X=M.isWebGLCubeRenderTarget===!0,Se=Y.length>1;if(Se||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=g.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let me=0;me<g.mipmaps.length;me++)N.__webglFramebuffer[le][me]=n.createFramebuffer()}else N.__webglFramebuffer[le]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<g.mipmaps.length;le++)N.__webglFramebuffer[le]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Se)for(let le=0,me=Y.length;le<me;le++){const je=i.get(Y[le]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&Ge(M)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<Y.length;le++){const me=Y[le];N.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[le]);const je=s.convert(me.format,me.colorSpace),ee=s.convert(me.type),ge=b(me.internalFormat,je,ee,me.colorSpace,M.isXRRenderTarget===!0),we=Ve(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ge,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,N.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),se(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,g);for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0)for(let me=0;me<g.mipmaps.length;me++)xe(N.__webglFramebuffer[le][me],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else xe(N.__webglFramebuffer[le],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,me=Y.length;le<me;le++){const je=Y[le],ee=i.get(je);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),Oe(n.TEXTURE_2D,je),xe(N.__webglFramebuffer,M,je,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m(je)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(le=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),Oe(le,g),g.mipmaps&&g.mipmaps.length>0)for(let me=0;me<g.mipmaps.length;me++)xe(N.__webglFramebuffer[me],M,g,n.COLOR_ATTACHMENT0,le,me);else xe(N.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,le,0);m(g)&&d(le),t.unbindTexture()}M.depthBuffer&&Ce(M)}function Xe(M){const g=M.textures;for(let N=0,$=g.length;N<$;N++){const Y=g[N];if(m(Y)){const X=w(M),Se=i.get(Y).__webglTexture;t.bindTexture(X,Se),d(X),t.unbindTexture()}}}const ft=[],T=[];function Nt(M){if(M.samples>0){if(Ge(M)===!1){const g=M.textures,N=M.width,$=M.height;let Y=n.COLOR_BUFFER_BIT;const X=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(M),le=g.length>1;if(le)for(let me=0;me<g.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let me=0;me<g.length;me++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);const je=i.get(g[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,je,0)}n.blitFramebuffer(0,0,N,$,0,0,N,$,Y,n.NEAREST),c===!0&&(ft.length=0,T.length=0,ft.push(n.COLOR_ATTACHMENT0+me),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ft.push(X),T.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<g.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);const je=i.get(g[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const g=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Ve(M){return Math.min(r.maxSamples,M.samples)}function Ge(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Me(M){const g=a.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function Ke(M,g){const N=M.colorSpace,$=M.format,Y=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==or&&N!==jn&&(Je.getTransfer(N)===at?($!==_n||Y!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}function ae(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=j,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=z,this.rebindTextures=Be,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ge}function j_(n,e){function t(i,r=jn){let s;const a=Je.getTransfer(r);if(i===kn)return n.UNSIGNED_BYTE;if(i===tc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Du)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lu)return n.BYTE;if(i===Iu)return n.SHORT;if(i===Hr)return n.UNSIGNED_SHORT;if(i===ec)return n.INT;if(i===Ti)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===jr)return n.HALF_FLOAT;if(i===Uu)return n.ALPHA;if(i===Nu)return n.RGB;if(i===_n)return n.RGBA;if(i===Fu)return n.LUMINANCE;if(i===Ou)return n.LUMINANCE_ALPHA;if(i===Ji)return n.DEPTH_COMPONENT;if(i===ar)return n.DEPTH_STENCIL;if(i===Bu)return n.RED;if(i===ic)return n.RED_INTEGER;if(i===ku)return n.RG;if(i===rc)return n.RG_INTEGER;if(i===sc)return n.RGBA_INTEGER;if(i===Ds||i===Us||i===Ns||i===Fs)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ds)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ds)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Us)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oo||i===co||i===lo||i===uo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===oo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===co)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ho||i===fo||i===po)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ho||i===fo)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===po)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===mo||i===go||i===_o||i===vo||i===xo||i===yo||i===Mo||i===So||i===Eo||i===bo||i===To||i===wo||i===Ao||i===Ro)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===mo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===go)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_o)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===So)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===To)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ao)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ro)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Os||i===Co||i===Po)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Os)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Co)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Po)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zu||i===Lo||i===Io||i===Do)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Os)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Lo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Io)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Do)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Y_={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Y_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ji;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const K_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z_=`
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

}`;class J_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ht,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ii({vertexShader:K_,fragmentShader:Z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q_ extends ur{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,_=null;const v=new J_,m=t.getContextAttributes();let d=null,w=null;const b=[],E=[],L=new Qe;let R=null;const C=new on;C.viewport=new ut;const F=new on;F.viewport=new ut;const S=[C,F],y=new xp;let A=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=b[q];return te===void 0&&(te=new Wa,b[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=b[q];return te===void 0&&(te=new Wa,b[q]=te),te.getGripSpace()},this.getHand=function(q){let te=b[q];return te===void 0&&(te=new Wa,b[q]=te),te.getHandSpace()};function H(q){const te=E.indexOf(q.inputSource);if(te===-1)return;const xe=b[te];xe!==void 0&&(xe.update(q.inputSource,q.frame,l||a),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Z);for(let q=0;q<b.length;q++){const te=E[q];te!==null&&(E[q]=null,b[q].disconnect(te))}A=null,j=null,v.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,w=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let xe=null,se=null,be=null;m.depth&&(be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=m.stencil?ar:Ji,se=m.stencil?sr:Ti);const Ce={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new wi(f.textureWidth,f.textureHeight,{format:_n,type:kn,depthTexture:new ed(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new wi(p.framebufferWidth,p.framebufferHeight,{format:_n,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(q){for(let te=0;te<q.removed.length;te++){const xe=q.removed[te],se=E.indexOf(xe);se>=0&&(E[se]=null,b[se].disconnect(xe))}for(let te=0;te<q.added.length;te++){const xe=q.added[te];let se=E.indexOf(xe);if(se===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=E.length){E.push(xe),se=Ce;break}else if(E[Ce]===null){E[Ce]=xe,se=Ce;break}if(se===-1)break}const be=b[se];be&&be.connect(xe)}}const G=new D,Q=new D;function z(q,te,xe){G.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(xe.matrixWorld);const se=G.distanceTo(Q),be=te.projectionMatrix.elements,Ce=xe.projectionMatrix.elements,Be=be[14]/(be[10]-1),ot=be[14]/(be[10]+1),Xe=(be[9]+1)/be[5],ft=(be[9]-1)/be[5],T=(be[8]-1)/be[0],Nt=(Ce[8]+1)/Ce[0],Ve=Be*T,Ge=Be*Nt,Me=se/(-T+Nt),Ke=Me*-T;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ke),q.translateZ(Me),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ae=Be+Me,M=ot+Me,g=Ve-Ke,N=Ge+(se-Ke),$=Xe*ot/M*ae,Y=ft*ot/M*ae;q.projectionMatrix.makePerspective(g,N,$,Y,ae,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let te=q.near,xe=q.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(xe=v.depthFar)),y.near=F.near=C.near=te,y.far=F.far=C.far=xe,(A!==y.near||j!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,j=y.far),C.layers.mask=q.layers.mask|2,F.layers.mask=q.layers.mask|4,y.layers.mask=C.layers.mask|F.layers.mask;const se=q.parent,be=y.cameras;ie(y,se);for(let Ce=0;Ce<be.length;Ce++)ie(be[Ce],se);be.length===2?z(y,C,F):y.projectionMatrix.copy(C.projectionMatrix),he(q,y,se)};function he(q,te,xe){xe===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Vr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ye=null;function Oe(q,te){if(u=te.getViewerPose(l||a),_=te,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let se=!1;xe.length!==y.cameras.length&&(y.cameras.length=0,se=!0);for(let Ce=0;Ce<xe.length;Ce++){const Be=xe[Ce];let ot=null;if(p!==null)ot=p.getViewport(Be);else{const ft=h.getViewSubImage(f,Be);ot=ft.viewport,Ce===0&&(e.setRenderTargetTextures(w,ft.colorTexture,f.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(w))}let Xe=S[Ce];Xe===void 0&&(Xe=new on,Xe.layers.enable(Ce),Xe.viewport=new ut,S[Ce]=Xe),Xe.matrix.fromArray(Be.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Be.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ot.x,ot.y,ot.width,ot.height),Ce===0&&(y.matrix.copy(Xe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),se===!0&&y.cameras.push(Xe)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ce=h.getDepthInformation(xe[0]);Ce&&Ce.isValid&&Ce.texture&&v.init(e,Ce,r.renderState)}}for(let xe=0;xe<b.length;xe++){const se=E[xe],be=b[xe];se!==null&&be!==void 0&&be.update(se,te,l||a)}ye&&ye(q,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const et=new id;et.setAnimationLoop(Oe),this.setAnimationLoop=function(q){ye=q},this.dispose=function(){}}}const fi=new bn,ev=new st;function tv(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ku(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,w,b,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,w,b):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===$t&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===$t&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=e.get(d),b=w.envMap,E=w.envMapRotation;b&&(m.envMap.value=b,fi.copy(E),fi.x*=-1,fi.y*=-1,fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(ev.makeRotationFromEuler(fi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,w,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,b){const E=b.program;i.uniformBlockBinding(w,E)}function l(w,b){let E=r[w.id];E===void 0&&(_(w),E=u(w),r[w.id]=E,w.addEventListener("dispose",m));const L=b.program;i.updateUBOMapping(w,L);const R=e.render.frame;s[w.id]!==R&&(f(w),s[w.id]=R)}function u(w){const b=h();w.__bindingPointIndex=b;const E=n.createBuffer(),L=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const b=r[w.id],E=w.uniforms,L=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,C=E.length;R<C;R++){const F=Array.isArray(E[R])?E[R]:[E[R]];for(let S=0,y=F.length;S<y;S++){const A=F[S];if(p(A,R,S,L)===!0){const j=A.__offset,H=Array.isArray(A.value)?A.value:[A.value];let W=0;for(let Z=0;Z<H.length;Z++){const G=H[Z],Q=v(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,j+W,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,W),W+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,b,E,L){const R=w.value,C=b+"_"+E;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{const F=L[C];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return L[C]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function _(w){const b=w.uniforms;let E=0;const L=16;for(let C=0,F=b.length;C<F;C++){const S=Array.isArray(b[C])?b[C]:[b[C]];for(let y=0,A=S.length;y<A;y++){const j=S[y],H=Array.isArray(j.value)?j.value:[j.value];for(let W=0,Z=H.length;W<Z;W++){const G=H[W],Q=v(G),z=E%L,ie=z%Q.boundary,he=z+ie;E+=ie,he!==0&&L-he<Q.storage&&(E+=L-he),j.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=E,E+=Q.storage}}}const R=E%L;return R>0&&(E+=L-R),w.__size=E,w.__cache={},this}function v(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}class iv{constructor(e={}){const{canvas:t=Nf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=Jn,this.toneMappingExposure=1;const E=this;let L=!1,R=0,C=0,F=null,S=-1,y=null;const A=new ut,j=new ut;let H=null;const W=new Fe(0);let Z=0,G=t.width,Q=t.height,z=1,ie=null,he=null;const ye=new ut(0,0,G,Q),Oe=new ut(0,0,G,Q);let et=!1;const q=new uc;let te=!1,xe=!1;this.transmissionResolutionScale=1;const se=new st,be=new st,Ce=new D,Be=new ut,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ft(){return F===null?z:1}let T=i;function Nt(x,I){return t.getContext(x,I)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qo}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ue,!1),T===null){const I="webgl2";if(T=Nt(I,x),T===null)throw Nt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ve,Ge,Me,Ke,ae,M,g,N,$,Y,X,Se,le,me,je,ee,ge,we,Pe,_e,$e,ke,ct,P;function oe(){Ve=new h0(T),Ve.init(),ke=new j_(T,Ve),Ge=new a0(T,Ve,e,ke),Me=new X_(T,Ve),Ge.reverseDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),Ke=new m0(T),ae=new D_,M=new $_(T,Ve,Me,ae,Ge,ke,Ke),g=new c0(E),N=new d0(E),$=new Sp(T),ct=new r0(T,$),Y=new f0(T,$,Ke,ct),X=new _0(T,Y,$,Ke),Pe=new g0(T,Ge,M),ee=new o0(ae),Se=new I_(E,g,N,Ve,Ge,ct,ee),le=new tv(E,ae),me=new N_,je=new H_(Ve),we=new i0(E,g,N,Me,X,p,c),ge=new W_(E,X,Ge),P=new nv(T,Ke,Ge,Me),_e=new s0(T,Ve,Ke),$e=new p0(T,Ve,Ke),Ke.programs=Se.programs,E.capabilities=Ge,E.extensions=Ve,E.properties=ae,E.renderLists=me,E.shadowMap=ge,E.state=Me,E.info=Ke}oe();const V=new Q_(E,T);this.xr=V,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const x=Ve.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ve.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(x){x!==void 0&&(z=x,this.setSize(G,Q,!1))},this.getSize=function(x){return x.set(G,Q)},this.setSize=function(x,I,O=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,Q=I,t.width=Math.floor(x*z),t.height=Math.floor(I*z),O===!0&&(t.style.width=x+"px",t.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(G*z,Q*z).floor()},this.setDrawingBufferSize=function(x,I,O){G=x,Q=I,z=O,t.width=Math.floor(x*O),t.height=Math.floor(I*O),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(A)},this.getViewport=function(x){return x.copy(ye)},this.setViewport=function(x,I,O,k){x.isVector4?ye.set(x.x,x.y,x.z,x.w):ye.set(x,I,O,k),Me.viewport(A.copy(ye).multiplyScalar(z).round())},this.getScissor=function(x){return x.copy(Oe)},this.setScissor=function(x,I,O,k){x.isVector4?Oe.set(x.x,x.y,x.z,x.w):Oe.set(x,I,O,k),Me.scissor(j.copy(Oe).multiplyScalar(z).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(x){Me.setScissorTest(et=x)},this.setOpaqueSort=function(x){ie=x},this.setTransparentSort=function(x){he=x},this.getClearColor=function(x){return x.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(x=!0,I=!0,O=!0){let k=0;if(x){let U=!1;if(F!==null){const J=F.texture.format;U=J===sc||J===rc||J===ic}if(U){const J=F.texture.type,ce=J===kn||J===Ti||J===Hr||J===sr||J===tc||J===nc,pe=we.getClearColor(),ve=we.getClearAlpha(),Le=pe.r,Ie=pe.g,Ee=pe.b;ce?(_[0]=Le,_[1]=Ie,_[2]=Ee,_[3]=ve,T.clearBufferuiv(T.COLOR,0,_)):(v[0]=Le,v[1]=Ie,v[2]=Ee,v[3]=ve,T.clearBufferiv(T.COLOR,0,v))}else k|=T.COLOR_BUFFER_BIT}I&&(k|=T.DEPTH_BUFFER_BIT),O&&(k|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),we.dispose(),me.dispose(),je.dispose(),ae.dispose(),g.dispose(),N.dispose(),X.dispose(),ct.dispose(),P.dispose(),Se.dispose(),V.dispose(),V.removeEventListener("sessionstart",Hc),V.removeEventListener("sessionend",Vc),ai.stop()};function K(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const x=Ke.autoReset,I=ge.enabled,O=ge.autoUpdate,k=ge.needsUpdate,U=ge.type;oe(),Ke.autoReset=x,ge.enabled=I,ge.autoUpdate=O,ge.needsUpdate=k,ge.type=U}function ue(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ue(x){const I=x.target;I.removeEventListener("dispose",Ue),pt(I)}function pt(x){Ct(x),ae.remove(x)}function Ct(x){const I=ae.get(x).programs;I!==void 0&&(I.forEach(function(O){Se.releaseProgram(O)}),x.isShaderMaterial&&Se.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,O,k,U,J){I===null&&(I=ot);const ce=U.isMesh&&U.matrixWorld.determinant()<0,pe=_h(x,I,O,k,U);Me.setMaterial(k,ce);let ve=O.index,Le=1;if(k.wireframe===!0){if(ve=Y.getWireframeAttribute(O),ve===void 0)return;Le=2}const Ie=O.drawRange,Ee=O.attributes.position;let Ye=Ie.start*Le,tt=(Ie.start+Ie.count)*Le;J!==null&&(Ye=Math.max(Ye,J.start*Le),tt=Math.min(tt,(J.start+J.count)*Le)),ve!==null?(Ye=Math.max(Ye,0),tt=Math.min(tt,ve.count)):Ee!=null&&(Ye=Math.max(Ye,0),tt=Math.min(tt,Ee.count));const _t=tt-Ye;if(_t<0||_t===1/0)return;ct.setup(U,k,pe,O,ve);let mt,Ze=_e;if(ve!==null&&(mt=$.get(ve),Ze=$e,Ze.setIndex(mt)),U.isMesh)k.wireframe===!0?(Me.setLineWidth(k.wireframeLinewidth*ft()),Ze.setMode(T.LINES)):Ze.setMode(T.TRIANGLES);else if(U.isLine){let Te=k.linewidth;Te===void 0&&(Te=1),Me.setLineWidth(Te*ft()),U.isLineSegments?Ze.setMode(T.LINES):U.isLineLoop?Ze.setMode(T.LINE_LOOP):Ze.setMode(T.LINE_STRIP)}else U.isPoints?Ze.setMode(T.POINTS):U.isSprite&&Ze.setMode(T.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ze.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ze.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Te=U._multiDrawStarts,Rt=U._multiDrawCounts,nt=U._multiDrawCount,dn=ve?$.get(ve).bytesPerElement:1,Ci=ae.get(k).currentProgram.getUniforms();for(let Yt=0;Yt<nt;Yt++)Ci.setValue(T,"_gl_DrawID",Yt),Ze.render(Te[Yt]/dn,Rt[Yt])}else if(U.isInstancedMesh)Ze.renderInstances(Ye,_t,U.count);else if(O.isInstancedBufferGeometry){const Te=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Rt=Math.min(O.instanceCount,Te);Ze.renderInstances(Ye,_t,Rt)}else Ze.render(Ye,_t)};function rt(x,I,O){x.transparent===!0&&x.side===Mn&&x.forceSinglePass===!1?(x.side=$t,x.needsUpdate=!0,ts(x,I,O),x.side=ni,x.needsUpdate=!0,ts(x,I,O),x.side=Mn):ts(x,I,O)}this.compile=function(x,I,O=null){O===null&&(O=x),d=je.get(O),d.init(I),b.push(d),O.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),x!==O&&x.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const k=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const J=U.material;if(J)if(Array.isArray(J))for(let ce=0;ce<J.length;ce++){const pe=J[ce];rt(pe,O,U),k.add(pe)}else rt(J,O,U),k.add(J)}),b.pop(),d=null,k},this.compileAsync=function(x,I,O=null){const k=this.compile(x,I,O);return new Promise(U=>{function J(){if(k.forEach(function(ce){ae.get(ce).currentProgram.isReady()&&k.delete(ce)}),k.size===0){U(x);return}setTimeout(J,10)}Ve.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let un=null;function wn(x){un&&un(x)}function Hc(){ai.stop()}function Vc(){ai.start()}const ai=new id;ai.setAnimationLoop(wn),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(x){un=x,V.setAnimationLoop(x),x===null?ai.stop():ai.start()},V.addEventListener("sessionstart",Hc),V.addEventListener("sessionend",Vc),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,I,F),d=je.get(x,b.length),d.init(I),b.push(d),be.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(be),xe=this.localClippingEnabled,te=ee.init(this.clippingPlanes,xe),m=me.get(x,w.length),m.init(),w.push(m),V.enabled===!0&&V.isPresenting===!0){const J=E.xr.getDepthSensingMesh();J!==null&&ha(J,I,-1/0,E.sortObjects)}ha(x,I,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(ie,he),Xe=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Xe&&we.addToRenderList(m,x),this.info.render.frame++,te===!0&&ee.beginShadows();const O=d.state.shadowsArray;ge.render(O,x,I),te===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(d.setupLights(),I.isArrayCamera){const J=I.cameras;if(U.length>0)for(let ce=0,pe=J.length;ce<pe;ce++){const ve=J[ce];Wc(k,U,x,ve)}Xe&&we.render(x);for(let ce=0,pe=J.length;ce<pe;ce++){const ve=J[ce];Gc(m,x,ve,ve.viewport)}}else U.length>0&&Wc(k,U,x,I),Xe&&we.render(x),Gc(m,x,I);F!==null&&C===0&&(M.updateMultisampleRenderTarget(F),M.updateRenderTargetMipmap(F)),x.isScene===!0&&x.onAfterRender(E,x,I),ct.resetDefaultState(),S=-1,y=null,b.pop(),b.length>0?(d=b[b.length-1],te===!0&&ee.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ha(x,I,O,k){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||q.intersectsSprite(x)){k&&Be.setFromMatrixPosition(x.matrixWorld).applyMatrix4(be);const ce=X.update(x),pe=x.material;pe.visible&&m.push(x,ce,pe,O,Be.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||q.intersectsObject(x))){const ce=X.update(x),pe=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Be.copy(x.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Be.copy(ce.boundingSphere.center)),Be.applyMatrix4(x.matrixWorld).applyMatrix4(be)),Array.isArray(pe)){const ve=ce.groups;for(let Le=0,Ie=ve.length;Le<Ie;Le++){const Ee=ve[Le],Ye=pe[Ee.materialIndex];Ye&&Ye.visible&&m.push(x,ce,Ye,O,Be.z,Ee)}}else pe.visible&&m.push(x,ce,pe,O,Be.z,null)}}const J=x.children;for(let ce=0,pe=J.length;ce<pe;ce++)ha(J[ce],I,O,k)}function Gc(x,I,O,k){const U=x.opaque,J=x.transmissive,ce=x.transparent;d.setupLightsView(O),te===!0&&ee.setGlobalState(E.clippingPlanes,O),k&&Me.viewport(A.copy(k)),U.length>0&&es(U,I,O),J.length>0&&es(J,I,O),ce.length>0&&es(ce,I,O),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Wc(x,I,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new wi(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?jr:kn,minFilter:Si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const J=d.state.transmissionRenderTarget[k.id],ce=k.viewport||A;J.setSize(ce.z*E.transmissionResolutionScale,ce.w*E.transmissionResolutionScale);const pe=E.getRenderTarget();E.setRenderTarget(J),E.getClearColor(W),Z=E.getClearAlpha(),Z<1&&E.setClearColor(16777215,.5),E.clear(),Xe&&we.render(O);const ve=E.toneMapping;E.toneMapping=Jn;const Le=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),te===!0&&ee.setGlobalState(E.clippingPlanes,k),es(x,O,k),M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ee=0,Ye=I.length;Ee<Ye;Ee++){const tt=I[Ee],_t=tt.object,mt=tt.geometry,Ze=tt.material,Te=tt.group;if(Ze.side===Mn&&_t.layers.test(k.layers)){const Rt=Ze.side;Ze.side=$t,Ze.needsUpdate=!0,qc(_t,O,k,mt,Ze,Te),Ze.side=Rt,Ze.needsUpdate=!0,Ie=!0}}Ie===!0&&(M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J))}E.setRenderTarget(pe),E.setClearColor(W,Z),Le!==void 0&&(k.viewport=Le),E.toneMapping=ve}function es(x,I,O){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,J=x.length;U<J;U++){const ce=x[U],pe=ce.object,ve=ce.geometry,Le=k===null?ce.material:k,Ie=ce.group;pe.layers.test(O.layers)&&qc(pe,I,O,ve,Le,Ie)}}function qc(x,I,O,k,U,J){x.onBeforeRender(E,I,O,k,U,J),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(E,I,O,k,x,J),U.transparent===!0&&U.side===Mn&&U.forceSinglePass===!1?(U.side=$t,U.needsUpdate=!0,E.renderBufferDirect(O,I,k,U,x,J),U.side=ni,U.needsUpdate=!0,E.renderBufferDirect(O,I,k,U,x,J),U.side=Mn):E.renderBufferDirect(O,I,k,U,x,J),x.onAfterRender(E,I,O,k,U,J)}function ts(x,I,O){I.isScene!==!0&&(I=ot);const k=ae.get(x),U=d.state.lights,J=d.state.shadowsArray,ce=U.state.version,pe=Se.getParameters(x,U.state,J,I,O),ve=Se.getProgramCacheKey(pe);let Le=k.programs;k.environment=x.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(x.isMeshStandardMaterial?N:g).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Le===void 0&&(x.addEventListener("dispose",Ue),Le=new Map,k.programs=Le);let Ie=Le.get(ve);if(Ie!==void 0){if(k.currentProgram===Ie&&k.lightsStateVersion===ce)return $c(x,pe),Ie}else pe.uniforms=Se.getUniforms(x),x.onBeforeCompile(pe,E),Ie=Se.acquireProgram(pe,ve),Le.set(ve,Ie),k.uniforms=pe.uniforms;const Ee=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ee.clippingPlanes=ee.uniform),$c(x,pe),k.needsLights=xh(x),k.lightsStateVersion=ce,k.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Ie,k.uniformsList=null,Ie}function Xc(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=Bs.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function $c(x,I){const O=ae.get(x);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function _h(x,I,O,k,U){I.isScene!==!0&&(I=ot),M.resetTextureUnits();const J=I.fog,ce=k.isMeshStandardMaterial?I.environment:null,pe=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:or,ve=(k.isMeshStandardMaterial?N:g).get(k.envMap||ce),Le=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ie=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ee=!!O.morphAttributes.position,Ye=!!O.morphAttributes.normal,tt=!!O.morphAttributes.color;let _t=Jn;k.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(_t=E.toneMapping);const mt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ze=mt!==void 0?mt.length:0,Te=ae.get(k),Rt=d.state.lights;if(te===!0&&(xe===!0||x!==y)){const Ft=x===y&&k.id===S;ee.setState(k,x,Ft)}let nt=!1;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Rt.state.version||Te.outputColorSpace!==pe||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==ve||k.fog===!0&&Te.fog!==J||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ee.numPlanes||Te.numIntersection!==ee.numIntersection)||Te.vertexAlphas!==Le||Te.vertexTangents!==Ie||Te.morphTargets!==Ee||Te.morphNormals!==Ye||Te.morphColors!==tt||Te.toneMapping!==_t||Te.morphTargetsCount!==Ze)&&(nt=!0):(nt=!0,Te.__version=k.version);let dn=Te.currentProgram;nt===!0&&(dn=ts(k,I,U));let Ci=!1,Yt=!1,mr=!1;const dt=dn.getUniforms(),nn=Te.uniforms;if(Me.useProgram(dn.program)&&(Ci=!0,Yt=!0,mr=!0),k.id!==S&&(S=k.id,Yt=!0),Ci||y!==x){Me.buffers.depth.getReversed()?(se.copy(x.projectionMatrix),Of(se),Bf(se),dt.setValue(T,"projectionMatrix",se)):dt.setValue(T,"projectionMatrix",x.projectionMatrix),dt.setValue(T,"viewMatrix",x.matrixWorldInverse);const Vt=dt.map.cameraPosition;Vt!==void 0&&Vt.setValue(T,Ce.setFromMatrixPosition(x.matrixWorld)),Ge.logarithmicDepthBuffer&&dt.setValue(T,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&dt.setValue(T,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Yt=!0,mr=!0)}if(U.isSkinnedMesh){dt.setOptional(T,U,"bindMatrix"),dt.setOptional(T,U,"bindMatrixInverse");const Ft=U.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),dt.setValue(T,"boneTexture",Ft.boneTexture,M))}U.isBatchedMesh&&(dt.setOptional(T,U,"batchingTexture"),dt.setValue(T,"batchingTexture",U._matricesTexture,M),dt.setOptional(T,U,"batchingIdTexture"),dt.setValue(T,"batchingIdTexture",U._indirectTexture,M),dt.setOptional(T,U,"batchingColorTexture"),U._colorsTexture!==null&&dt.setValue(T,"batchingColorTexture",U._colorsTexture,M));const rn=O.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Pe.update(U,O,dn),(Yt||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,dt.setValue(T,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(nn.envMap.value=ve,nn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(nn.envMapIntensity.value=I.environmentIntensity),Yt&&(dt.setValue(T,"toneMappingExposure",E.toneMappingExposure),Te.needsLights&&vh(nn,mr),J&&k.fog===!0&&le.refreshFogUniforms(nn,J),le.refreshMaterialUniforms(nn,k,z,Q,d.state.transmissionRenderTarget[x.id]),Bs.upload(T,Xc(Te),nn,M)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Bs.upload(T,Xc(Te),nn,M),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&dt.setValue(T,"center",U.center),dt.setValue(T,"modelViewMatrix",U.modelViewMatrix),dt.setValue(T,"normalMatrix",U.normalMatrix),dt.setValue(T,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ft=k.uniformsGroups;for(let Vt=0,fa=Ft.length;Vt<fa;Vt++){const oi=Ft[Vt];P.update(oi,dn),P.bind(oi,dn)}}return dn}function vh(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function xh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(x,I,O){ae.get(x.texture).__webglTexture=I,ae.get(x.depthTexture).__webglTexture=O;const k=ae.get(x);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,I){const O=ae.get(x);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0};const yh=T.createFramebuffer();this.setRenderTarget=function(x,I=0,O=0){F=x,R=I,C=O;let k=!0,U=null,J=!1,ce=!1;if(x){const ve=ae.get(x);if(ve.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(T.FRAMEBUFFER,null),k=!1;else if(ve.__webglFramebuffer===void 0)M.setupRenderTarget(x);else if(ve.__hasExternalTextures)M.rebindTextures(x,ae.get(x.texture).__webglTexture,ae.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ee=x.depthTexture;if(ve.__boundDepthTexture!==Ee){if(Ee!==null&&ae.has(Ee)&&(x.width!==Ee.image.width||x.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(x)}}const Le=x.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ce=!0);const Ie=ae.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?U=Ie[I][O]:U=Ie[I],J=!0):x.samples>0&&M.useMultisampledRTT(x)===!1?U=ae.get(x).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[O]:U=Ie,A.copy(x.viewport),j.copy(x.scissor),H=x.scissorTest}else A.copy(ye).multiplyScalar(z).floor(),j.copy(Oe).multiplyScalar(z).floor(),H=et;if(O!==0&&(U=yh),Me.bindFramebuffer(T.FRAMEBUFFER,U)&&k&&Me.drawBuffers(x,U),Me.viewport(A),Me.scissor(j),Me.setScissorTest(H),J){const ve=ae.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+I,ve.__webglTexture,O)}else if(ce){const ve=ae.get(x.texture),Le=I;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,ve.__webglTexture,O,Le)}else if(x!==null&&O!==0){const ve=ae.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ve.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(x,I,O,k,U,J,ce){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=ae.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(pe=pe[ce]),pe){Me.bindFramebuffer(T.FRAMEBUFFER,pe);try{const ve=x.texture,Le=ve.format,Ie=ve.type;if(!Ge.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-k&&O>=0&&O<=x.height-U&&T.readPixels(I,O,k,U,ke.convert(Le),ke.convert(Ie),J)}finally{const ve=F!==null?ae.get(F).__webglFramebuffer:null;Me.bindFramebuffer(T.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(x,I,O,k,U,J,ce){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=ae.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(pe=pe[ce]),pe){const ve=x.texture,Le=ve.format,Ie=ve.type;if(!Ge.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=x.width-k&&O>=0&&O<=x.height-U){Me.bindFramebuffer(T.FRAMEBUFFER,pe);const Ee=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ee),T.bufferData(T.PIXEL_PACK_BUFFER,J.byteLength,T.STREAM_READ),T.readPixels(I,O,k,U,ke.convert(Le),ke.convert(Ie),0);const Ye=F!==null?ae.get(F).__webglFramebuffer:null;Me.bindFramebuffer(T.FRAMEBUFFER,Ye);const tt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Ff(T,tt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ee),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,J),T.deleteBuffer(Ee),T.deleteSync(tt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,I=null,O=0){x.isTexture!==!0&&($i("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,x=arguments[1]);const k=Math.pow(2,-O),U=Math.floor(x.image.width*k),J=Math.floor(x.image.height*k),ce=I!==null?I.x:0,pe=I!==null?I.y:0;M.setTexture2D(x,0),T.copyTexSubImage2D(T.TEXTURE_2D,O,0,0,ce,pe,U,J),Me.unbindTexture()};const Mh=T.createFramebuffer(),Sh=T.createFramebuffer();this.copyTextureToTexture=function(x,I,O=null,k=null,U=0,J=null){x.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,x=arguments[1],I=arguments[2],J=arguments[3]||0,O=null),J===null&&(U!==0?($i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=U,U=0):J=0);let ce,pe,ve,Le,Ie,Ee,Ye,tt,_t;const mt=x.isCompressedTexture?x.mipmaps[J]:x.image;if(O!==null)ce=O.max.x-O.min.x,pe=O.max.y-O.min.y,ve=O.isBox3?O.max.z-O.min.z:1,Le=O.min.x,Ie=O.min.y,Ee=O.isBox3?O.min.z:0;else{const rn=Math.pow(2,-U);ce=Math.floor(mt.width*rn),pe=Math.floor(mt.height*rn),x.isDataArrayTexture?ve=mt.depth:x.isData3DTexture?ve=Math.floor(mt.depth*rn):ve=1,Le=0,Ie=0,Ee=0}k!==null?(Ye=k.x,tt=k.y,_t=k.z):(Ye=0,tt=0,_t=0);const Ze=ke.convert(I.format),Te=ke.convert(I.type);let Rt;I.isData3DTexture?(M.setTexture3D(I,0),Rt=T.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(M.setTexture2DArray(I,0),Rt=T.TEXTURE_2D_ARRAY):(M.setTexture2D(I,0),Rt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,I.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,I.unpackAlignment);const nt=T.getParameter(T.UNPACK_ROW_LENGTH),dn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ci=T.getParameter(T.UNPACK_SKIP_PIXELS),Yt=T.getParameter(T.UNPACK_SKIP_ROWS),mr=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,mt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,mt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Le),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ie),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ee);const dt=x.isDataArrayTexture||x.isData3DTexture,nn=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const rn=ae.get(x),Ft=ae.get(I),Vt=ae.get(rn.__renderTarget),fa=ae.get(Ft.__renderTarget);Me.bindFramebuffer(T.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Me.bindFramebuffer(T.DRAW_FRAMEBUFFER,fa.__webglFramebuffer);for(let oi=0;oi<ve;oi++)dt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ae.get(x).__webglTexture,U,Ee+oi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ae.get(I).__webglTexture,J,_t+oi)),T.blitFramebuffer(Le,Ie,ce,pe,Ye,tt,ce,pe,T.DEPTH_BUFFER_BIT,T.NEAREST);Me.bindFramebuffer(T.READ_FRAMEBUFFER,null),Me.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(U!==0||x.isRenderTargetTexture||ae.has(x)){const rn=ae.get(x),Ft=ae.get(I);Me.bindFramebuffer(T.READ_FRAMEBUFFER,Mh),Me.bindFramebuffer(T.DRAW_FRAMEBUFFER,Sh);for(let Vt=0;Vt<ve;Vt++)dt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,rn.__webglTexture,U,Ee+Vt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,rn.__webglTexture,U),nn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ft.__webglTexture,J,_t+Vt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ft.__webglTexture,J),U!==0?T.blitFramebuffer(Le,Ie,ce,pe,Ye,tt,ce,pe,T.COLOR_BUFFER_BIT,T.NEAREST):nn?T.copyTexSubImage3D(Rt,J,Ye,tt,_t+Vt,Le,Ie,ce,pe):T.copyTexSubImage2D(Rt,J,Ye,tt,Le,Ie,ce,pe);Me.bindFramebuffer(T.READ_FRAMEBUFFER,null),Me.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else nn?x.isDataTexture||x.isData3DTexture?T.texSubImage3D(Rt,J,Ye,tt,_t,ce,pe,ve,Ze,Te,mt.data):I.isCompressedArrayTexture?T.compressedTexSubImage3D(Rt,J,Ye,tt,_t,ce,pe,ve,Ze,mt.data):T.texSubImage3D(Rt,J,Ye,tt,_t,ce,pe,ve,Ze,Te,mt):x.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,J,Ye,tt,ce,pe,Ze,Te,mt.data):x.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,J,Ye,tt,mt.width,mt.height,Ze,mt.data):T.texSubImage2D(T.TEXTURE_2D,J,Ye,tt,ce,pe,Ze,Te,mt);T.pixelStorei(T.UNPACK_ROW_LENGTH,nt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,dn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ci),T.pixelStorei(T.UNPACK_SKIP_ROWS,Yt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,mr),J===0&&I.generateMipmaps&&T.generateMipmap(Rt),Me.unbindTexture()},this.copyTextureToTexture3D=function(x,I,O=null,k=null,U=0){return x.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,x=arguments[2],I=arguments[3],U=arguments[4]||0),$i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,I,O,k,U)},this.initRenderTarget=function(x){ae.get(x).__webglFramebuffer===void 0&&M.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?M.setTextureCube(x,0):x.isData3DTexture?M.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?M.setTexture2DArray(x,0):M.setTexture2D(x,0),Me.unbindTexture()},this.resetState=function(){R=0,C=0,F=null,Me.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class rv extends ln{constructor(e=50,t=10,i=!0,r=!0,s=!0,a=!0,o=!0){const c=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,3,16,17,18,7,19,20,21,11,22,23,24,15,25,26,27,18,28,29,30,21,31,32,33,24,34,35,36,27,37,38,39,30,40,41,0,33,42,43,4,36,44,45,8,39,46,47,12,12,13,14,15,48,49,50,51,52,53,54,55,56,57,58,59,15,25,26,27,51,60,61,62,55,63,64,65,59,66,67,68,27,37,38,39,62,69,70,71,65,72,73,74,68,75,76,77,39,46,47,12,71,78,79,48,74,80,81,52,77,82,83,56,56,57,58,59,84,85,86,87,88,89,90,91,92,93,94,95,59,66,67,68,87,96,97,98,91,99,100,101,95,102,103,104,68,75,76,77,98,105,106,107,101,108,109,110,104,111,112,113,77,82,83,56,107,114,115,84,110,116,117,88,113,118,119,92,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,123,136,137,120,127,138,139,124,131,140,141,128,135,142,143,132,132,133,134,135,144,145,146,147,148,149,150,151,68,152,153,154,135,142,143,132,147,155,156,144,151,157,158,148,154,159,160,68,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,164,177,178,161,168,179,180,165,172,181,182,169,176,183,184,173,173,174,175,176,185,186,187,188,189,190,191,192,193,194,195,196,176,183,184,173,188,197,198,185,192,199,200,189,196,201,202,193,203,203,203,203,204,205,206,207,208,208,208,208,209,210,211,212,203,203,203,203,207,213,214,215,208,208,208,208,212,216,217,218,203,203,203,203,215,219,220,221,208,208,208,208,218,222,223,224,203,203,203,203,221,225,226,204,208,208,208,208,224,227,228,209,209,210,211,212,229,230,231,232,233,234,235,236,237,238,239,240,212,216,217,218,232,241,242,243,236,244,245,246,240,247,248,249,218,222,223,224,243,250,251,252,246,253,254,255,249,256,257,258,224,227,228,209,252,259,260,229,255,261,262,233,258,263,264,237,265,265,265,265,266,267,268,269,270,271,272,273,92,119,118,113,265,265,265,265,269,274,275,276,273,277,278,279,113,112,111,104,265,265,265,265,276,280,281,282,279,283,284,285,104,103,102,95,265,265,265,265,282,286,287,266,285,288,289,270,95,94,93,92],l=[1.4,0,2.4,1.4,-.784,2.4,.784,-1.4,2.4,0,-1.4,2.4,1.3375,0,2.53125,1.3375,-.749,2.53125,.749,-1.3375,2.53125,0,-1.3375,2.53125,1.4375,0,2.53125,1.4375,-.805,2.53125,.805,-1.4375,2.53125,0,-1.4375,2.53125,1.5,0,2.4,1.5,-.84,2.4,.84,-1.5,2.4,0,-1.5,2.4,-.784,-1.4,2.4,-1.4,-.784,2.4,-1.4,0,2.4,-.749,-1.3375,2.53125,-1.3375,-.749,2.53125,-1.3375,0,2.53125,-.805,-1.4375,2.53125,-1.4375,-.805,2.53125,-1.4375,0,2.53125,-.84,-1.5,2.4,-1.5,-.84,2.4,-1.5,0,2.4,-1.4,.784,2.4,-.784,1.4,2.4,0,1.4,2.4,-1.3375,.749,2.53125,-.749,1.3375,2.53125,0,1.3375,2.53125,-1.4375,.805,2.53125,-.805,1.4375,2.53125,0,1.4375,2.53125,-1.5,.84,2.4,-.84,1.5,2.4,0,1.5,2.4,.784,1.4,2.4,1.4,.784,2.4,.749,1.3375,2.53125,1.3375,.749,2.53125,.805,1.4375,2.53125,1.4375,.805,2.53125,.84,1.5,2.4,1.5,.84,2.4,1.75,0,1.875,1.75,-.98,1.875,.98,-1.75,1.875,0,-1.75,1.875,2,0,1.35,2,-1.12,1.35,1.12,-2,1.35,0,-2,1.35,2,0,.9,2,-1.12,.9,1.12,-2,.9,0,-2,.9,-.98,-1.75,1.875,-1.75,-.98,1.875,-1.75,0,1.875,-1.12,-2,1.35,-2,-1.12,1.35,-2,0,1.35,-1.12,-2,.9,-2,-1.12,.9,-2,0,.9,-1.75,.98,1.875,-.98,1.75,1.875,0,1.75,1.875,-2,1.12,1.35,-1.12,2,1.35,0,2,1.35,-2,1.12,.9,-1.12,2,.9,0,2,.9,.98,1.75,1.875,1.75,.98,1.875,1.12,2,1.35,2,1.12,1.35,1.12,2,.9,2,1.12,.9,2,0,.45,2,-1.12,.45,1.12,-2,.45,0,-2,.45,1.5,0,.225,1.5,-.84,.225,.84,-1.5,.225,0,-1.5,.225,1.5,0,.15,1.5,-.84,.15,.84,-1.5,.15,0,-1.5,.15,-1.12,-2,.45,-2,-1.12,.45,-2,0,.45,-.84,-1.5,.225,-1.5,-.84,.225,-1.5,0,.225,-.84,-1.5,.15,-1.5,-.84,.15,-1.5,0,.15,-2,1.12,.45,-1.12,2,.45,0,2,.45,-1.5,.84,.225,-.84,1.5,.225,0,1.5,.225,-1.5,.84,.15,-.84,1.5,.15,0,1.5,.15,1.12,2,.45,2,1.12,.45,.84,1.5,.225,1.5,.84,.225,.84,1.5,.15,1.5,.84,.15,-1.6,0,2.025,-1.6,-.3,2.025,-1.5,-.3,2.25,-1.5,0,2.25,-2.3,0,2.025,-2.3,-.3,2.025,-2.5,-.3,2.25,-2.5,0,2.25,-2.7,0,2.025,-2.7,-.3,2.025,-3,-.3,2.25,-3,0,2.25,-2.7,0,1.8,-2.7,-.3,1.8,-3,-.3,1.8,-3,0,1.8,-1.5,.3,2.25,-1.6,.3,2.025,-2.5,.3,2.25,-2.3,.3,2.025,-3,.3,2.25,-2.7,.3,2.025,-3,.3,1.8,-2.7,.3,1.8,-2.7,0,1.575,-2.7,-.3,1.575,-3,-.3,1.35,-3,0,1.35,-2.5,0,1.125,-2.5,-.3,1.125,-2.65,-.3,.9375,-2.65,0,.9375,-2,-.3,.9,-1.9,-.3,.6,-1.9,0,.6,-3,.3,1.35,-2.7,.3,1.575,-2.65,.3,.9375,-2.5,.3,1.125,-1.9,.3,.6,-2,.3,.9,1.7,0,1.425,1.7,-.66,1.425,1.7,-.66,.6,1.7,0,.6,2.6,0,1.425,2.6,-.66,1.425,3.1,-.66,.825,3.1,0,.825,2.3,0,2.1,2.3,-.25,2.1,2.4,-.25,2.025,2.4,0,2.025,2.7,0,2.4,2.7,-.25,2.4,3.3,-.25,2.4,3.3,0,2.4,1.7,.66,.6,1.7,.66,1.425,3.1,.66,.825,2.6,.66,1.425,2.4,.25,2.025,2.3,.25,2.1,3.3,.25,2.4,2.7,.25,2.4,2.8,0,2.475,2.8,-.25,2.475,3.525,-.25,2.49375,3.525,0,2.49375,2.9,0,2.475,2.9,-.15,2.475,3.45,-.15,2.5125,3.45,0,2.5125,2.8,0,2.4,2.8,-.15,2.4,3.2,-.15,2.4,3.2,0,2.4,3.525,.25,2.49375,2.8,.25,2.475,3.45,.15,2.5125,2.9,.15,2.475,3.2,.15,2.4,2.8,.15,2.4,0,0,3.15,.8,0,3.15,.8,-.45,3.15,.45,-.8,3.15,0,-.8,3.15,0,0,2.85,.2,0,2.7,.2,-.112,2.7,.112,-.2,2.7,0,-.2,2.7,-.45,-.8,3.15,-.8,-.45,3.15,-.8,0,3.15,-.112,-.2,2.7,-.2,-.112,2.7,-.2,0,2.7,-.8,.45,3.15,-.45,.8,3.15,0,.8,3.15,-.2,.112,2.7,-.112,.2,2.7,0,.2,2.7,.45,.8,3.15,.8,.45,3.15,.112,.2,2.7,.2,.112,2.7,.4,0,2.55,.4,-.224,2.55,.224,-.4,2.55,0,-.4,2.55,1.3,0,2.55,1.3,-.728,2.55,.728,-1.3,2.55,0,-1.3,2.55,1.3,0,2.4,1.3,-.728,2.4,.728,-1.3,2.4,0,-1.3,2.4,-.224,-.4,2.55,-.4,-.224,2.55,-.4,0,2.55,-.728,-1.3,2.55,-1.3,-.728,2.55,-1.3,0,2.55,-.728,-1.3,2.4,-1.3,-.728,2.4,-1.3,0,2.4,-.4,.224,2.55,-.224,.4,2.55,0,.4,2.55,-1.3,.728,2.55,-.728,1.3,2.55,0,1.3,2.55,-1.3,.728,2.4,-.728,1.3,2.4,0,1.3,2.4,.224,.4,2.55,.4,.224,2.55,.728,1.3,2.55,1.3,.728,2.55,.728,1.3,2.4,1.3,.728,2.4,0,0,0,1.425,0,0,1.425,.798,0,.798,1.425,0,0,1.425,0,1.5,0,.075,1.5,.84,.075,.84,1.5,.075,0,1.5,.075,-.798,1.425,0,-1.425,.798,0,-1.425,0,0,-.84,1.5,.075,-1.5,.84,.075,-1.5,0,.075,-1.425,-.798,0,-.798,-1.425,0,0,-1.425,0,-1.5,-.84,.075,-.84,-1.5,.075,0,-1.5,.075,.798,-1.425,0,1.425,-.798,0,.84,-1.5,.075,1.5,-.84,.075];super(),t=Math.max(2,Math.floor(t));const u=1.3,f=3.15*(o?1:u)/2,p=e/f;let _=i?(8*t-4)*t:0;_+=r?(16*t-4)*t:0,_+=s?40*t*t:0;const v=new Uint32Array(_*3);let m=i?4:0;m+=r?8:0,m+=s?20:0,m*=(t+1)*(t+1);const d=new Float32Array(m*3),w=new Float32Array(m*3),b=new Float32Array(m*2),E=new st;E.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);const L=[],R=[],C=[],F=[],S=[],y=[],A=[],j=[],H=[],W=new D;let Z,G,Q,z,ie=0,he=0;const ye=new D,Oe=new st,et=new st,q=new ut,te=new ut,xe=new ut,se=new ut,be=new D,Ce=new D,Be=E.clone();Be.transpose();const ot=(ae,M,g)=>!(d[ae*3]===d[M*3]&&d[ae*3+1]===d[M*3+1]&&d[ae*3+2]===d[M*3+2]||d[ae*3]===d[g*3]&&d[ae*3+1]===d[g*3+1]&&d[ae*3+2]===d[g*3+2]||d[M*3]===d[g*3]&&d[M*3+1]===d[g*3+1]&&d[M*3+2]===d[g*3+2]);for(let ae=0;ae<3;ae++)y[ae]=new st;const Xe=s?0:20,ft=i?32:28,T=t+1;let Nt=0,Ve=0,Ge=0,Me=0,Ke=0;for(let ae=Xe;ae<ft;ae++)if(r||ae<20||ae>=28){for(let M=0;M<3;M++){for(let g=0;g<4;g++)for(let N=0;N<4;N++)L[N*4+g]=l[c[ae*16+g*4+N]*3+M],a&&ae>=20&&ae<28&&M!==2&&(L[N*4+g]*=1.077),!o&&M===2&&(L[N*4+g]*=u);Oe.set(L[0],L[1],L[2],L[3],L[4],L[5],L[6],L[7],L[8],L[9],L[10],L[11],L[12],L[13],L[14],L[15]),et.multiplyMatrices(Oe,E),y[M].multiplyMatrices(Be,et)}for(let M=0;M<=t;M++){const g=M/t;for(let N=0;N<=t;N++){const $=N/t;for(z=4,G=Q=1;z--;)R[z]=G,C[z]=Q,G*=g,Q*=$,z===3?(F[z]=S[z]=0,ie=he=1):(F[z]=ie*(3-z),S[z]=he*(3-z),ie*=g,he*=$);q.fromArray(R),te.fromArray(C),xe.fromArray(F),se.fromArray(S);for(let Y=0;Y<3;Y++)Z=q.clone(),Z.applyMatrix4(y[Y]),A[Y]=Z.dot(te),Z=xe.clone(),Z.applyMatrix4(y[Y]),j[Y]=Z.dot(te),Z=q.clone(),Z.applyMatrix4(y[Y]),H[Y]=Z.dot(se);be.fromArray(j),Ce.fromArray(H),W.crossVectors(Ce,be),W.normalize(),A[0]===0&&A[1]===0?ye.set(0,A[2]>f?1:-1,0):ye.set(W.x,W.z,-W.y),d[Ve++]=p*A[0],d[Ve++]=p*(A[2]-f),d[Ve++]=-p*A[1],w[Ge++]=ye.x,w[Ge++]=ye.y,w[Ge++]=ye.z,b[Me++]=1-$,b[Me++]=1-g}}for(let M=0;M<t;M++)for(let g=0;g<t;g++){const N=Nt*T*T+M*T+g,$=N+1,Y=$+T,X=N+T;ot(N,$,Y)&&(v[Ke++]=N,v[Ke++]=$,v[Ke++]=Y),ot(N,Y,X)&&(v[Ke++]=N,v[Ke++]=Y,v[Ke++]=X)}Nt++}this.setIndex(new kt(v,1)),this.setAttribute("position",new kt(d,3)),this.setAttribute("normal",new kt(w,3)),this.setAttribute("uv",new kt(b,2)),this.computeBoundingSphere()}}function sv(n){const e=n.length;let t=0,i=0;for(;i<e;){let r=n.charCodeAt(i++);if((r&4294967168)===0){t++;continue}else if((r&4294965248)===0)t+=2;else{if(r>=55296&&r<=56319&&i<e){const s=n.charCodeAt(i);(s&64512)===56320&&(++i,r=((r&1023)<<10)+(s&1023)+65536)}(r&4294901760)===0?t+=3:t+=4}}return t}function av(n,e,t){const i=n.length;let r=t,s=0;for(;s<i;){let a=n.charCodeAt(s++);if((a&4294967168)===0){e[r++]=a;continue}else if((a&4294965248)===0)e[r++]=a>>6&31|192;else{if(a>=55296&&a<=56319&&s<i){const o=n.charCodeAt(s);(o&64512)===56320&&(++s,a=((a&1023)<<10)+(o&1023)+65536)}(a&4294901760)===0?(e[r++]=a>>12&15|224,e[r++]=a>>6&63|128):(e[r++]=a>>18&7|240,e[r++]=a>>12&63|128,e[r++]=a>>6&63|128)}e[r++]=a&63|128}}const ov=new TextEncoder,cv=50;function lv(n,e,t){ov.encodeInto(n,e.subarray(t))}function uv(n,e,t){n.length>cv?lv(n,e,t):av(n,e,t)}const dv=4096;function cd(n,e,t){let i=e;const r=i+t,s=[];let a="";for(;i<r;){const o=n[i++];if((o&128)===0)s.push(o);else if((o&224)===192){const c=n[i++]&63;s.push((o&31)<<6|c)}else if((o&240)===224){const c=n[i++]&63,l=n[i++]&63;s.push((o&31)<<12|c<<6|l)}else if((o&248)===240){const c=n[i++]&63,l=n[i++]&63,u=n[i++]&63;let h=(o&7)<<18|c<<12|l<<6|u;h>65535&&(h-=65536,s.push(h>>>10&1023|55296),h=56320|h&1023),s.push(h)}else s.push(o);s.length>=dv&&(a+=String.fromCharCode(...s),s.length=0)}return s.length>0&&(a+=String.fromCharCode(...s)),a}const hv=new TextDecoder,fv=200;function pv(n,e,t){const i=n.subarray(e,e+t);return hv.decode(i)}function mv(n,e,t){return t>fv?pv(n,e,t):cd(n,e,t)}class Ts{constructor(e,t){B(this,"type");B(this,"data");this.type=e,this.data=t}}class Jt extends Error{constructor(e){super(e);const t=Object.create(Jt.prototype);Object.setPrototypeOf(this,t),Object.defineProperty(this,"name",{configurable:!0,enumerable:!1,value:Jt.name})}}const Mr=4294967295;function gv(n,e,t){const i=t/4294967296,r=t;n.setUint32(e,i),n.setUint32(e+4,r)}function ld(n,e,t){const i=Math.floor(t/4294967296),r=t;n.setUint32(e,i),n.setUint32(e+4,r)}function ud(n,e){const t=n.getInt32(e),i=n.getUint32(e+4);return t*4294967296+i}function _v(n,e){const t=n.getUint32(e),i=n.getUint32(e+4);return t*4294967296+i}const vv=-1,xv=4294967296-1,yv=17179869184-1;function Mv({sec:n,nsec:e}){if(n>=0&&e>=0&&n<=yv)if(e===0&&n<=xv){const t=new Uint8Array(4);return new DataView(t.buffer).setUint32(0,n),t}else{const t=n/4294967296,i=n&4294967295,r=new Uint8Array(8),s=new DataView(r.buffer);return s.setUint32(0,e<<2|t&3),s.setUint32(4,i),r}else{const t=new Uint8Array(12),i=new DataView(t.buffer);return i.setUint32(0,e),ld(i,4,n),t}}function Sv(n){const e=n.getTime(),t=Math.floor(e/1e3),i=(e-t*1e3)*1e6,r=Math.floor(i/1e9);return{sec:t+r,nsec:i-r*1e9}}function Ev(n){if(n instanceof Date){const e=Sv(n);return Mv(e)}else return null}function bv(n){const e=new DataView(n.buffer,n.byteOffset,n.byteLength);switch(n.byteLength){case 4:return{sec:e.getUint32(0),nsec:0};case 8:{const t=e.getUint32(0),i=e.getUint32(4),r=(t&3)*4294967296+i,s=t>>>2;return{sec:r,nsec:s}}case 12:{const t=ud(e,4),i=e.getUint32(0);return{sec:t,nsec:i}}default:throw new Jt(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${n.length}`)}}function Tv(n){const e=bv(n);return new Date(e.sec*1e3+e.nsec/1e6)}const wv={type:vv,encode:Ev,decode:Tv},sa=class sa{constructor(){B(this,"__brand");B(this,"builtInEncoders",[]);B(this,"builtInDecoders",[]);B(this,"encoders",[]);B(this,"decoders",[]);this.register(wv)}register({type:e,encode:t,decode:i}){if(e>=0)this.encoders[e]=t,this.decoders[e]=i;else{const r=-1-e;this.builtInEncoders[r]=t,this.builtInDecoders[r]=i}}tryToEncode(e,t){for(let i=0;i<this.builtInEncoders.length;i++){const r=this.builtInEncoders[i];if(r!=null){const s=r(e,t);if(s!=null){const a=-1-i;return new Ts(a,s)}}}for(let i=0;i<this.encoders.length;i++){const r=this.encoders[i];if(r!=null){const s=r(e,t);if(s!=null){const a=i;return new Ts(a,s)}}}return e instanceof Ts?e:null}decode(e,t,i){const r=t<0?this.builtInDecoders[-1-t]:this.decoders[t];return r?r(e,t,i):new Ts(t,e)}};B(sa,"defaultCodec",new sa);let Qs=sa;function Av(n){return n instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&n instanceof SharedArrayBuffer}function Fo(n){return n instanceof Uint8Array?n:ArrayBuffer.isView(n)?new Uint8Array(n.buffer,n.byteOffset,n.byteLength):Av(n)?new Uint8Array(n):Uint8Array.from(n)}const Rv=100,Cv=2048;class mc{constructor(e){B(this,"extensionCodec");B(this,"context");B(this,"useBigInt64");B(this,"maxDepth");B(this,"initialBufferSize");B(this,"sortKeys");B(this,"forceFloat32");B(this,"ignoreUndefined");B(this,"forceIntegerToFloat");B(this,"pos");B(this,"view");B(this,"bytes");B(this,"entered",!1);this.extensionCodec=(e==null?void 0:e.extensionCodec)??Qs.defaultCodec,this.context=e==null?void 0:e.context,this.useBigInt64=(e==null?void 0:e.useBigInt64)??!1,this.maxDepth=(e==null?void 0:e.maxDepth)??Rv,this.initialBufferSize=(e==null?void 0:e.initialBufferSize)??Cv,this.sortKeys=(e==null?void 0:e.sortKeys)??!1,this.forceFloat32=(e==null?void 0:e.forceFloat32)??!1,this.ignoreUndefined=(e==null?void 0:e.ignoreUndefined)??!1,this.forceIntegerToFloat=(e==null?void 0:e.forceIntegerToFloat)??!1,this.pos=0,this.view=new DataView(new ArrayBuffer(this.initialBufferSize)),this.bytes=new Uint8Array(this.view.buffer)}clone(){return new mc({extensionCodec:this.extensionCodec,context:this.context,useBigInt64:this.useBigInt64,maxDepth:this.maxDepth,initialBufferSize:this.initialBufferSize,sortKeys:this.sortKeys,forceFloat32:this.forceFloat32,ignoreUndefined:this.ignoreUndefined,forceIntegerToFloat:this.forceIntegerToFloat})}reinitializeState(){this.pos=0}encodeSharedRef(e){if(this.entered)return this.clone().encodeSharedRef(e);try{return this.entered=!0,this.reinitializeState(),this.doEncode(e,1),this.bytes.subarray(0,this.pos)}finally{this.entered=!1}}encode(e){if(this.entered)return this.clone().encode(e);try{return this.entered=!0,this.reinitializeState(),this.doEncode(e,1),this.bytes.slice(0,this.pos)}finally{this.entered=!1}}doEncode(e,t){if(t>this.maxDepth)throw new Error(`Too deep objects in depth ${t}`);e==null?this.encodeNil():typeof e=="boolean"?this.encodeBoolean(e):typeof e=="number"?this.forceIntegerToFloat?this.encodeNumberAsFloat(e):this.encodeNumber(e):typeof e=="string"?this.encodeString(e):this.useBigInt64&&typeof e=="bigint"?this.encodeBigInt64(e):this.encodeObject(e,t)}ensureBufferSizeToWrite(e){const t=this.pos+e;this.view.byteLength<t&&this.resizeBuffer(t*2)}resizeBuffer(e){const t=new ArrayBuffer(e),i=new Uint8Array(t),r=new DataView(t);i.set(this.bytes),this.view=r,this.bytes=i}encodeNil(){this.writeU8(192)}encodeBoolean(e){e===!1?this.writeU8(194):this.writeU8(195)}encodeNumber(e){!this.forceIntegerToFloat&&Number.isSafeInteger(e)?e>=0?e<128?this.writeU8(e):e<256?(this.writeU8(204),this.writeU8(e)):e<65536?(this.writeU8(205),this.writeU16(e)):e<4294967296?(this.writeU8(206),this.writeU32(e)):this.useBigInt64?this.encodeNumberAsFloat(e):(this.writeU8(207),this.writeU64(e)):e>=-32?this.writeU8(224|e+32):e>=-128?(this.writeU8(208),this.writeI8(e)):e>=-32768?(this.writeU8(209),this.writeI16(e)):e>=-2147483648?(this.writeU8(210),this.writeI32(e)):this.useBigInt64?this.encodeNumberAsFloat(e):(this.writeU8(211),this.writeI64(e)):this.encodeNumberAsFloat(e)}encodeNumberAsFloat(e){this.forceFloat32?(this.writeU8(202),this.writeF32(e)):(this.writeU8(203),this.writeF64(e))}encodeBigInt64(e){e>=BigInt(0)?(this.writeU8(207),this.writeBigUint64(e)):(this.writeU8(211),this.writeBigInt64(e))}writeStringHeader(e){if(e<32)this.writeU8(160+e);else if(e<256)this.writeU8(217),this.writeU8(e);else if(e<65536)this.writeU8(218),this.writeU16(e);else if(e<4294967296)this.writeU8(219),this.writeU32(e);else throw new Error(`Too long string: ${e} bytes in UTF-8`)}encodeString(e){const i=sv(e);this.ensureBufferSizeToWrite(5+i),this.writeStringHeader(i),uv(e,this.bytes,this.pos),this.pos+=i}encodeObject(e,t){const i=this.extensionCodec.tryToEncode(e,this.context);if(i!=null)this.encodeExtension(i);else if(Array.isArray(e))this.encodeArray(e,t);else if(ArrayBuffer.isView(e))this.encodeBinary(e);else if(typeof e=="object")this.encodeMap(e,t);else throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(e)}`)}encodeBinary(e){const t=e.byteLength;if(t<256)this.writeU8(196),this.writeU8(t);else if(t<65536)this.writeU8(197),this.writeU16(t);else if(t<4294967296)this.writeU8(198),this.writeU32(t);else throw new Error(`Too large binary: ${t}`);const i=Fo(e);this.writeU8a(i)}encodeArray(e,t){const i=e.length;if(i<16)this.writeU8(144+i);else if(i<65536)this.writeU8(220),this.writeU16(i);else if(i<4294967296)this.writeU8(221),this.writeU32(i);else throw new Error(`Too large array: ${i}`);for(const r of e)this.doEncode(r,t+1)}countWithoutUndefined(e,t){let i=0;for(const r of t)e[r]!==void 0&&i++;return i}encodeMap(e,t){const i=Object.keys(e);this.sortKeys&&i.sort();const r=this.ignoreUndefined?this.countWithoutUndefined(e,i):i.length;if(r<16)this.writeU8(128+r);else if(r<65536)this.writeU8(222),this.writeU16(r);else if(r<4294967296)this.writeU8(223),this.writeU32(r);else throw new Error(`Too large map object: ${r}`);for(const s of i){const a=e[s];this.ignoreUndefined&&a===void 0||(this.encodeString(s),this.doEncode(a,t+1))}}encodeExtension(e){if(typeof e.data=="function"){const i=e.data(this.pos+6),r=i.length;if(r>=4294967296)throw new Error(`Too large extension object: ${r}`);this.writeU8(201),this.writeU32(r),this.writeI8(e.type),this.writeU8a(i);return}const t=e.data.length;if(t===1)this.writeU8(212);else if(t===2)this.writeU8(213);else if(t===4)this.writeU8(214);else if(t===8)this.writeU8(215);else if(t===16)this.writeU8(216);else if(t<256)this.writeU8(199),this.writeU8(t);else if(t<65536)this.writeU8(200),this.writeU16(t);else if(t<4294967296)this.writeU8(201),this.writeU32(t);else throw new Error(`Too large extension object: ${t}`);this.writeI8(e.type),this.writeU8a(e.data)}writeU8(e){this.ensureBufferSizeToWrite(1),this.view.setUint8(this.pos,e),this.pos++}writeU8a(e){const t=e.length;this.ensureBufferSizeToWrite(t),this.bytes.set(e,this.pos),this.pos+=t}writeI8(e){this.ensureBufferSizeToWrite(1),this.view.setInt8(this.pos,e),this.pos++}writeU16(e){this.ensureBufferSizeToWrite(2),this.view.setUint16(this.pos,e),this.pos+=2}writeI16(e){this.ensureBufferSizeToWrite(2),this.view.setInt16(this.pos,e),this.pos+=2}writeU32(e){this.ensureBufferSizeToWrite(4),this.view.setUint32(this.pos,e),this.pos+=4}writeI32(e){this.ensureBufferSizeToWrite(4),this.view.setInt32(this.pos,e),this.pos+=4}writeF32(e){this.ensureBufferSizeToWrite(4),this.view.setFloat32(this.pos,e),this.pos+=4}writeF64(e){this.ensureBufferSizeToWrite(8),this.view.setFloat64(this.pos,e),this.pos+=8}writeU64(e){this.ensureBufferSizeToWrite(8),gv(this.view,this.pos,e),this.pos+=8}writeI64(e){this.ensureBufferSizeToWrite(8),ld(this.view,this.pos,e),this.pos+=8}writeBigUint64(e){this.ensureBufferSizeToWrite(8),this.view.setBigUint64(this.pos,e),this.pos+=8}writeBigInt64(e){this.ensureBufferSizeToWrite(8),this.view.setBigInt64(this.pos,e),this.pos+=8}}function Ql(n,e){return new mc(e).encodeSharedRef(n)}function qa(n){return`${n<0?"-":""}0x${Math.abs(n).toString(16).padStart(2,"0")}`}const Pv=16,Lv=16;class Iv{constructor(e=Pv,t=Lv){B(this,"hit",0);B(this,"miss",0);B(this,"caches");B(this,"maxKeyLength");B(this,"maxLengthPerKey");this.maxKeyLength=e,this.maxLengthPerKey=t,this.caches=[];for(let i=0;i<this.maxKeyLength;i++)this.caches.push([])}canBeCached(e){return e>0&&e<=this.maxKeyLength}find(e,t,i){const r=this.caches[i-1];e:for(const s of r){const a=s.bytes;for(let o=0;o<i;o++)if(a[o]!==e[t+o])continue e;return s.str}return null}store(e,t){const i=this.caches[e.length-1],r={bytes:e,str:t};i.length>=this.maxLengthPerKey?i[Math.random()*i.length|0]=r:i.push(r)}decode(e,t,i){const r=this.find(e,t,i);if(r!=null)return this.hit++,r;this.miss++;const s=cd(e,t,i),a=Uint8Array.prototype.slice.call(e,t,t+i);return this.store(a,s),s}}const Oo="array",Lr="map_key",dd="map_value",Dv=n=>{if(typeof n=="string"||typeof n=="number")return n;throw new Jt("The type of key must be string or number but "+typeof n)};class Uv{constructor(){B(this,"stack",[]);B(this,"stackHeadPosition",-1)}get length(){return this.stackHeadPosition+1}top(){return this.stack[this.stackHeadPosition]}pushArrayState(e){const t=this.getUninitializedStateFromPool();t.type=Oo,t.position=0,t.size=e,t.array=new Array(e)}pushMapState(e){const t=this.getUninitializedStateFromPool();t.type=Lr,t.readCount=0,t.size=e,t.map={}}getUninitializedStateFromPool(){if(this.stackHeadPosition++,this.stackHeadPosition===this.stack.length){const e={type:void 0,size:0,array:void 0,position:0,readCount:0,map:void 0,key:null};this.stack.push(e)}return this.stack[this.stackHeadPosition]}release(e){if(this.stack[this.stackHeadPosition]!==e)throw new Error("Invalid stack state. Released state is not on top of the stack.");if(e.type===Oo){const i=e;i.size=0,i.array=void 0,i.position=0,i.type=void 0}if(e.type===Lr||e.type===dd){const i=e;i.size=0,i.map=void 0,i.readCount=0,i.type=void 0}this.stackHeadPosition--}reset(){this.stack.length=0,this.stackHeadPosition=-1}}const Sr=-1,gc=new DataView(new ArrayBuffer(0)),Nv=new Uint8Array(gc.buffer);try{gc.getInt8(0)}catch(n){if(!(n instanceof RangeError))throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access")}const eu=new RangeError("Insufficient data"),Fv=new Iv;class _c{constructor(e){B(this,"extensionCodec");B(this,"context");B(this,"useBigInt64");B(this,"rawStrings");B(this,"maxStrLength");B(this,"maxBinLength");B(this,"maxArrayLength");B(this,"maxMapLength");B(this,"maxExtLength");B(this,"keyDecoder");B(this,"mapKeyConverter");B(this,"totalPos",0);B(this,"pos",0);B(this,"view",gc);B(this,"bytes",Nv);B(this,"headByte",Sr);B(this,"stack",new Uv);B(this,"entered",!1);this.extensionCodec=(e==null?void 0:e.extensionCodec)??Qs.defaultCodec,this.context=e==null?void 0:e.context,this.useBigInt64=(e==null?void 0:e.useBigInt64)??!1,this.rawStrings=(e==null?void 0:e.rawStrings)??!1,this.maxStrLength=(e==null?void 0:e.maxStrLength)??Mr,this.maxBinLength=(e==null?void 0:e.maxBinLength)??Mr,this.maxArrayLength=(e==null?void 0:e.maxArrayLength)??Mr,this.maxMapLength=(e==null?void 0:e.maxMapLength)??Mr,this.maxExtLength=(e==null?void 0:e.maxExtLength)??Mr,this.keyDecoder=(e==null?void 0:e.keyDecoder)!==void 0?e.keyDecoder:Fv,this.mapKeyConverter=(e==null?void 0:e.mapKeyConverter)??Dv}clone(){return new _c({extensionCodec:this.extensionCodec,context:this.context,useBigInt64:this.useBigInt64,rawStrings:this.rawStrings,maxStrLength:this.maxStrLength,maxBinLength:this.maxBinLength,maxArrayLength:this.maxArrayLength,maxMapLength:this.maxMapLength,maxExtLength:this.maxExtLength,keyDecoder:this.keyDecoder})}reinitializeState(){this.totalPos=0,this.headByte=Sr,this.stack.reset()}setBuffer(e){const t=Fo(e);this.bytes=t,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength),this.pos=0}appendBuffer(e){if(this.headByte===Sr&&!this.hasRemaining(1))this.setBuffer(e);else{const t=this.bytes.subarray(this.pos),i=Fo(e),r=new Uint8Array(t.length+i.length);r.set(t),r.set(i,t.length),this.setBuffer(r)}}hasRemaining(e){return this.view.byteLength-this.pos>=e}createExtraByteError(e){const{view:t,pos:i}=this;return new RangeError(`Extra ${t.byteLength-i} of ${t.byteLength} byte(s) found at buffer[${e}]`)}decode(e){if(this.entered)return this.clone().decode(e);try{this.entered=!0,this.reinitializeState(),this.setBuffer(e);const t=this.doDecodeSync();if(this.hasRemaining(1))throw this.createExtraByteError(this.pos);return t}finally{this.entered=!1}}*decodeMulti(e){if(this.entered){yield*this.clone().decodeMulti(e);return}try{for(this.entered=!0,this.reinitializeState(),this.setBuffer(e);this.hasRemaining(1);)yield this.doDecodeSync()}finally{this.entered=!1}}async decodeAsync(e){if(this.entered)return this.clone().decodeAsync(e);try{this.entered=!0;let t=!1,i;for await(const o of e){if(t)throw this.entered=!1,this.createExtraByteError(this.totalPos);this.appendBuffer(o);try{i=this.doDecodeSync(),t=!0}catch(c){if(!(c instanceof RangeError))throw c}this.totalPos+=this.pos}if(t){if(this.hasRemaining(1))throw this.createExtraByteError(this.totalPos);return i}const{headByte:r,pos:s,totalPos:a}=this;throw new RangeError(`Insufficient data in parsing ${qa(r)} at ${a} (${s} in the current buffer)`)}finally{this.entered=!1}}decodeArrayStream(e){return this.decodeMultiAsync(e,!0)}decodeStream(e){return this.decodeMultiAsync(e,!1)}async*decodeMultiAsync(e,t){if(this.entered){yield*this.clone().decodeMultiAsync(e,t);return}try{this.entered=!0;let i=t,r=-1;for await(const s of e){if(t&&r===0)throw this.createExtraByteError(this.totalPos);this.appendBuffer(s),i&&(r=this.readArraySize(),i=!1,this.complete());try{for(;yield this.doDecodeSync(),--r!==0;);}catch(a){if(!(a instanceof RangeError))throw a}this.totalPos+=this.pos}}finally{this.entered=!1}}doDecodeSync(){e:for(;;){const e=this.readHeadByte();let t;if(e>=224)t=e-256;else if(e<192)if(e<128)t=e;else if(e<144){const r=e-128;if(r!==0){this.pushMapState(r),this.complete();continue e}else t={}}else if(e<160){const r=e-144;if(r!==0){this.pushArrayState(r),this.complete();continue e}else t=[]}else{const r=e-160;t=this.decodeString(r,0)}else if(e===192)t=null;else if(e===194)t=!1;else if(e===195)t=!0;else if(e===202)t=this.readF32();else if(e===203)t=this.readF64();else if(e===204)t=this.readU8();else if(e===205)t=this.readU16();else if(e===206)t=this.readU32();else if(e===207)this.useBigInt64?t=this.readU64AsBigInt():t=this.readU64();else if(e===208)t=this.readI8();else if(e===209)t=this.readI16();else if(e===210)t=this.readI32();else if(e===211)this.useBigInt64?t=this.readI64AsBigInt():t=this.readI64();else if(e===217){const r=this.lookU8();t=this.decodeString(r,1)}else if(e===218){const r=this.lookU16();t=this.decodeString(r,2)}else if(e===219){const r=this.lookU32();t=this.decodeString(r,4)}else if(e===220){const r=this.readU16();if(r!==0){this.pushArrayState(r),this.complete();continue e}else t=[]}else if(e===221){const r=this.readU32();if(r!==0){this.pushArrayState(r),this.complete();continue e}else t=[]}else if(e===222){const r=this.readU16();if(r!==0){this.pushMapState(r),this.complete();continue e}else t={}}else if(e===223){const r=this.readU32();if(r!==0){this.pushMapState(r),this.complete();continue e}else t={}}else if(e===196){const r=this.lookU8();t=this.decodeBinary(r,1)}else if(e===197){const r=this.lookU16();t=this.decodeBinary(r,2)}else if(e===198){const r=this.lookU32();t=this.decodeBinary(r,4)}else if(e===212)t=this.decodeExtension(1,0);else if(e===213)t=this.decodeExtension(2,0);else if(e===214)t=this.decodeExtension(4,0);else if(e===215)t=this.decodeExtension(8,0);else if(e===216)t=this.decodeExtension(16,0);else if(e===199){const r=this.lookU8();t=this.decodeExtension(r,1)}else if(e===200){const r=this.lookU16();t=this.decodeExtension(r,2)}else if(e===201){const r=this.lookU32();t=this.decodeExtension(r,4)}else throw new Jt(`Unrecognized type byte: ${qa(e)}`);this.complete();const i=this.stack;for(;i.length>0;){const r=i.top();if(r.type===Oo)if(r.array[r.position]=t,r.position++,r.position===r.size)t=r.array,i.release(r);else continue e;else if(r.type===Lr){if(t==="__proto__")throw new Jt("The key __proto__ is not allowed");r.key=this.mapKeyConverter(t),r.type=dd;continue e}else if(r.map[r.key]=t,r.readCount++,r.readCount===r.size)t=r.map,i.release(r);else{r.key=null,r.type=Lr;continue e}}return t}}readHeadByte(){return this.headByte===Sr&&(this.headByte=this.readU8()),this.headByte}complete(){this.headByte=Sr}readArraySize(){const e=this.readHeadByte();switch(e){case 220:return this.readU16();case 221:return this.readU32();default:{if(e<160)return e-144;throw new Jt(`Unrecognized array type byte: ${qa(e)}`)}}}pushMapState(e){if(e>this.maxMapLength)throw new Jt(`Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`);this.stack.pushMapState(e)}pushArrayState(e){if(e>this.maxArrayLength)throw new Jt(`Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`);this.stack.pushArrayState(e)}decodeString(e,t){return!this.rawStrings||this.stateIsMapKey()?this.decodeUtf8String(e,t):this.decodeBinary(e,t)}decodeUtf8String(e,t){var s;if(e>this.maxStrLength)throw new Jt(`Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`);if(this.bytes.byteLength<this.pos+t+e)throw eu;const i=this.pos+t;let r;return this.stateIsMapKey()&&((s=this.keyDecoder)!=null&&s.canBeCached(e))?r=this.keyDecoder.decode(this.bytes,i,e):r=mv(this.bytes,i,e),this.pos+=t+e,r}stateIsMapKey(){return this.stack.length>0?this.stack.top().type===Lr:!1}decodeBinary(e,t){if(e>this.maxBinLength)throw new Jt(`Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`);if(!this.hasRemaining(e+t))throw eu;const i=this.pos+t,r=this.bytes.subarray(i,i+e);return this.pos+=t+e,r}decodeExtension(e,t){if(e>this.maxExtLength)throw new Jt(`Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`);const i=this.view.getInt8(this.pos+t),r=this.decodeBinary(e,t+1);return this.extensionCodec.decode(r,i,this.context)}lookU8(){return this.view.getUint8(this.pos)}lookU16(){return this.view.getUint16(this.pos)}lookU32(){return this.view.getUint32(this.pos)}readU8(){const e=this.view.getUint8(this.pos);return this.pos++,e}readI8(){const e=this.view.getInt8(this.pos);return this.pos++,e}readU16(){const e=this.view.getUint16(this.pos);return this.pos+=2,e}readI16(){const e=this.view.getInt16(this.pos);return this.pos+=2,e}readU32(){const e=this.view.getUint32(this.pos);return this.pos+=4,e}readI32(){const e=this.view.getInt32(this.pos);return this.pos+=4,e}readU64(){const e=_v(this.view,this.pos);return this.pos+=8,e}readI64(){const e=ud(this.view,this.pos);return this.pos+=8,e}readU64AsBigInt(){const e=this.view.getBigUint64(this.pos);return this.pos+=8,e}readI64AsBigInt(){const e=this.view.getBigInt64(this.pos);return this.pos+=8,e}readF32(){const e=this.view.getFloat32(this.pos);return this.pos+=4,e}readF64(){const e=this.view.getFloat64(this.pos);return this.pos+=8,e}}function hd(n,e){return new _c(e).decode(n)}var Bo="openaxis/1.0",Ov="ws://localhost:6607",Bv=new Set(["hello","hello_ack","heartbeat","error","request","response","tags","focus","capabilities","subscribe","axes","motion_start","motion_end","motion_cancel","viewport.settled","buttons","frame","navigation.state","camera.pose","camera.delta","camera.pivot","object.pose","object.delta","object.pivot"]),En=class extends Error{constructor(e){super(e);B(this,"requestId");this.name="ProtocolValidationError"}};function yt(n){throw new En(n)}function en(n,e="value"){(n===null||typeof n!="object")&&yt(`${e} must be a map`);const t=Object.getPrototypeOf(n);return t!==null&&(Object.getPrototypeOf(t)!==null||!Object.prototype.hasOwnProperty.call(t,"constructor")||typeof t.constructor!="function"||Function.prototype.toString.call(t.constructor)!==Function.prototype.toString.call(Object))&&yt(`${e} must be a map`),n}function Re(n,e,t){return e in n||yt(`${t} missing required '${e}'`),n[e]}function Tt(n,e,t=!1){return(typeof n!="string"||!t&&n.trim().length===0)&&yt(`${e} must be a${t?"":" non-empty"} string`),n}function Ir(n,e){return typeof n!="boolean"&&yt(`${e} must be a boolean`),n}function ht(n,e){return(typeof n!="number"||!Number.isSafeInteger(n)||n<0)&&yt(`${e} must be a non-negative safe integer`),n}function Dr(n,e){return(typeof n!="number"||!Number.isFinite(n))&&yt(`${e} must be finite`),n}function ea(n,e){const t=Dr(n,e);return t<=0&&yt(`${e} must be positive and finite`),t}function an(n,e){return(!Array.isArray(n)||n.length!==3)&&yt(`${e} must have exactly 3 elements`),[Dr(n[0],`${e}[0]`),Dr(n[1],`${e}[1]`),Dr(n[2],`${e}[2]`)]}function ws(n,e){return Array.isArray(n)||yt(`${e} must be an array`),n.map((t,i)=>Tt(t,`${e}[${i}]`))}function kv(n,e){return Array.isArray(n)||yt(`${e} must be an array`),n.map((t,i)=>Dr(t,`${e}[${i}]`))}function fd(n){const e=en(n,"camera.pose"),t="fov"in e,i="ortho_extent"in e;t===i&&yt("camera.pose requires exactly one projection");const r={t:an(Re(e,"t","camera.pose"),"camera.pose.t"),r:an(Re(e,"r","camera.pose"),"camera.pose.r")};return t?r.fov=ea(e.fov,"camera.pose.fov"):r.ortho_extent=ea(e.ortho_extent,"camera.pose.ortho_extent"),r}function zv(n){const e=en(n,"navigation.state.camera"),t=Tt(Re(e,"mode","navigation.state.camera"),"navigation.state.camera.mode");if(t==="orbit")return("lock_roll"in e||"lock_translation_plane"in e||"translation_scale"in e)&&yt("orbit navigation state cannot contain free-camera fields"),{mode:t};t!=="free_camera"&&yt("navigation.state.camera.mode must be orbit or free_camera");const i={mode:t,lock_roll:Ir(Re(e,"lock_roll","navigation.state.camera"),"navigation.state.camera.lock_roll"),lock_translation_plane:Ir(Re(e,"lock_translation_plane","navigation.state.camera"),"navigation.state.camera.lock_translation_plane")};return"translation_scale"in e&&(i.translation_scale=ea(e.translation_scale,"navigation.state.camera.translation_scale")),i}function Hv(n){const e=en(n,"response.error"),t={code:Tt(Re(e,"code","response.error"),"response.error.code")};return"message"in e&&(t.message=Tt(e.message,"response.error.message",!0)),t}function pd(n){var i;const e=en(n,"hello.target");!("pid"in e)&&!("app"in e)&&yt("hello.target requires pid or app");const t={};if("pid"in e){const r=e.pid;(typeof r!="string"||((i=/^[1-9][0-9]*(?::[1-9][0-9]*)?$/.exec(r))==null?void 0:i[0])!==r)&&yt("hello.target.pid must be a canonical positive PID string"),t.pid=r}return"app"in e&&(t.app=Tt(e.app,"hello.target.app")),"app_version"in e&&(t.app_version=Tt(e.app_version,"hello.target.app_version")),t}function Vv(n){const e=en(n,"hello.sdk");return{name:Tt(Re(e,"name","hello.sdk"),"hello.sdk.name"),version:Tt(Re(e,"version","hello.sdk"),"hello.sdk.version")}}function md(n){const e=en(n,"OpenAxis message"),t=Tt(Re(e,"type","OpenAxis message"),"message.type");if(!Bv.has(t))return{...e,type:t};switch(t){case"hello":return{type:t,proto:Tt(Re(e,"proto",t),"hello.proto"),client_name:Tt(Re(e,"client_name",t),"hello.client_name"),..."target"in e?{target:pd(e.target)}:{},..."client_version"in e?{client_version:Tt(e.client_version,"hello.client_version")}:{},..."sdk"in e?{sdk:Vv(e.sdk)}:{}};case"hello_ack":return{type:t,proto:Tt(Re(e,"proto",t),"hello_ack.proto"),server_name:Tt(Re(e,"server_name",t),"hello_ack.server_name")};case"heartbeat":return{type:t};case"focus":return{type:t,focused:Ir(Re(e,"focused",t),"focus.focused")};case"error":return{type:t,code:Tt(Re(e,"code",t),"error.code"),message:Tt(Re(e,"message",t),"error.message",!0)};case"request":return{type:t,id:ht(Re(e,"id",t),"request.id"),method:Tt(Re(e,"method",t),"request.method"),params:"params"in e?en(e.params,"request.params"):{}};case"response":{const i="result"in e,r="error"in e;return i===r&&yt("response requires exactly one of result or error"),i?{type:t,id:ht(Re(e,"id",t),"response.id"),result:en(e.result,"response.result")}:{type:t,id:ht(Re(e,"id",t),"response.id"),error:Hv(e.error)}}case"tags":return{type:t,tags:ws(Re(e,"tags",t),"tags.tags")};case"capabilities":return{type:t,capabilities:ws(Re(e,"capabilities",t),"capabilities.capabilities")};case"subscribe":return{type:t,axes:ws(Re(e,"axes",t),"subscribe.axes")};case"axes":return{type:t,axes:ws(Re(e,"axes",t),"axes.axes")};case"motion_start":return{type:t,gesture_id:ht(Re(e,"gesture_id",t),"motion_start.gesture_id")};case"motion_end":return{type:t,gesture_id:ht(Re(e,"gesture_id",t),"motion_end.gesture_id")};case"motion_cancel":{const i={type:t,gesture_id:ht(Re(e,"gesture_id",t),"motion_cancel.gesture_id")};return"reason"in e&&(i.reason=Tt(e.reason,"motion_cancel.reason",!0)),i}case"viewport.settled":return{type:t};case"buttons":return{type:t,buttons:ht(Re(e,"buttons",t),"buttons.buttons")};case"frame":return{type:t,seq:ht(Re(e,"seq",t),"frame.seq"),t_us:ht(Re(e,"t_us",t),"frame.t_us"),values:kv(Re(e,"values",t),"frame.values")};case"navigation.state":{!("camera"in e)&&!("object"in e)&&yt("navigation.state requires an active camera or object");const i={type:t,gesture_id:ht(Re(e,"gesture_id",t),"navigation.state.gesture_id")};if("camera"in e&&(i.camera=zv(e.camera)),"object"in e){const r=en(e.object,"navigation.state.object");i.object={allow_translation:Ir(Re(r,"allow_translation","navigation.state.object"),"navigation.state.object.allow_translation"),allow_rotation:Ir(Re(r,"allow_rotation","navigation.state.object"),"navigation.state.object.allow_rotation")}}return i}case"camera.pose":{const i=fd(e),r={type:t,gesture_id:ht(Re(e,"gesture_id",t),"camera.pose.gesture_id"),...i};return"seq"in e&&(r.seq=ht(e.seq,"camera.pose.seq")),"applied_delta_id"in e&&(r.applied_delta_id=ht(e.applied_delta_id,"camera.pose.applied_delta_id")),r}case"camera.delta":{const i={type:t,gesture_id:ht(Re(e,"gesture_id",t),"camera.delta.gesture_id"),t:an(Re(e,"t",t),"camera.delta.t"),r:an(Re(e,"r",t),"camera.delta.r")};return"ortho_extent_scale"in e&&(i.ortho_extent_scale=ea(e.ortho_extent_scale,"camera.delta.ortho_extent_scale")),"delta_id"in e&&(i.delta_id=ht(e.delta_id,"camera.delta.delta_id")),i}case"camera.pivot":return{type:t,gesture_id:ht(Re(e,"gesture_id",t),"camera.pivot.gesture_id"),point:an(Re(e,"point",t),"camera.pivot.point")};case"object.pose":{tu(e);const i={type:t,gesture_id:ht(Re(e,"gesture_id",t),"object.pose.gesture_id"),t:an(Re(e,"t",t),"object.pose.t"),r:an(Re(e,"r",t),"object.pose.r")};return"seq"in e&&(i.seq=ht(e.seq,"object.pose.seq")),"applied_delta_id"in e&&(i.applied_delta_id=ht(e.applied_delta_id,"object.pose.applied_delta_id")),i}case"object.delta":{tu(e);const i={type:t,gesture_id:ht(Re(e,"gesture_id",t),"object.delta.gesture_id"),t:an(Re(e,"t",t),"object.delta.t"),r:an(Re(e,"r",t),"object.delta.r")};return"delta_id"in e&&(i.delta_id=ht(e.delta_id,"object.delta.delta_id")),i}case"object.pivot":return{type:t,gesture_id:ht(Re(e,"gesture_id",t),"object.pivot.gesture_id"),point:an(Re(e,"point",t),"object.pivot.point")}}return yt(`Unsupported standard message type: ${t}`)}function tu(n){["fov","ortho_extent","ortho_extent_scale"].some(e=>e in n)&&yt("object messages cannot contain projection fields")}function nu(n){return md(n)}function Gv(n){const e=new DataView(n.buffer,n.byteOffset,n.byteLength),t=new Map;let i=0;const r=a=>{const o=a===1?e.getUint8(i):a===2?e.getUint16(i):e.getUint32(i);return i+=a,o},s=(a,o)=>{if(a>128)throw new En("MessagePack nesting exceeds 128");const c=r(1);let l=-1,u=-1;if(!(c<=127||c>=224||c===192||c===194||c===195)){if((c&224)===160){i+=c&31;return}if((c&240)===144)l=c&15;else if((c&240)===128)u=c&15;else if(c===220||c===221)l=r(c===220?2:4);else if(c===222||c===223)u=r(c===222?2:4);else if(c>=204&&c<=207){i+=2**(c-204);return}else if(c>=208&&c<=211){i+=2**(c-208);return}else if(c===202||c===203){i+=c===202?4:8;return}else if(c>=212&&c<=216){i+=1+2**(c-212);return}else if(c>=196&&c<=201||c>=217&&c<=219){const h=c>=217?2**(c-217):2**((c-196)%3),f=r(h);i+=f+(c>=199&&c<=201?1:0);return}else throw new En("Invalid MessagePack tag");for(let h=0;h<l;h++)s(a+1);for(let h=0;h<u;h++){const f=i;s(a+1);const p=o===void 0?void 0:hd(n.subarray(f,i)),_=typeof p=="string"?`${o}${p}`:void 0;_!==void 0&&(o==="params."?p==="gesture_id":["id","gesture_id","seq","t_us","delta_id","applied_delta_id","buttons"].includes(String(p)))&&t.set(_,i),s(a+1,_==="params"?"params.":void 0)}}};if(s(0,""),i!==n.length)throw new En("Expected exactly one MessagePack value");return t}var iu={request:["id"],response:["id"],buttons:["buttons"],frame:["seq","t_us"],motion_start:["gesture_id"],motion_end:["gesture_id"],motion_cancel:["gesture_id"],"navigation.state":["gesture_id"],"camera.pivot":["gesture_id"],"object.pivot":["gesture_id"],"camera.pose":["gesture_id","seq","applied_delta_id"],"object.pose":["gesture_id","seq","applied_delta_id"],"camera.delta":["gesture_id","delta_id"],"object.delta":["gesture_id","delta_id"]};function Wv(n){if(n.length>1024*1024)throw new En("Message exceeds 1 MiB");const e=Gv(n),t=en(hd(n),"message"),i=r=>{const s=e.get(r);if(s===void 0)return!1;const a=n[s];return a<=127||a>=224||a>=204&&a<=211};try{const r=String(t.type),s=[...Object.hasOwn(iu,r)?iu[r]:[]];t.type==="request"&&t.method==="navigation.query"&&s.push("params.gesture_id");for(const a of s)if(e.has(a)&&!i(a))throw new En(`${a} must use a MessagePack integer`);return md(t)}catch(r){if(r instanceof En&&t.type==="request"&&i("id"))try{r.requestId=ht(t.id,"request.id")}catch{}throw r}}var qv=class $n{constructor(e,t,i){this.x=e,this.y=t,this.z=i}add(e){return new $n(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new $n(this.x-e.x,this.y-e.y,this.z-e.z)}mul(e){return new $n(this.x*e,this.y*e,this.z*e)}negated(){return new $n(-this.x,-this.y,-this.z)}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){return new $n(this.y*e.z-this.z*e.y,this.z*e.x-this.x*e.z,this.x*e.y-this.y*e.x)}length(){return Math.sqrt(this.dot(this))}normalized(){const e=this.length();return e>1e-12?this.mul(1/e):new $n(0,0,0)}toArray(){return[this.x,this.y,this.z]}static fromArray(e){return new $n(e[0],e[1],e[2])}},gt,ru=(gt=class{constructor(e,t,i,r){this.w=e,this.x=t,this.y=i,this.z=r}multiply(e){return new gt(this.w*e.w-this.x*e.x-this.y*e.y-this.z*e.z,this.w*e.x+this.x*e.w+this.y*e.z-this.z*e.y,this.w*e.y-this.x*e.z+this.y*e.w+this.z*e.x,this.w*e.z+this.x*e.y-this.y*e.x+this.z*e.w)}normalize(){const e=Math.sqrt(this.w**2+this.x**2+this.y**2+this.z**2);return e<1e-12?gt.identity:new gt(this.w/e,this.x/e,this.y/e,this.z/e)}inverse(){const e=this.normalize();return new gt(e.w,-e.x,-e.y,-e.z)}slerp(e,t){let i=this.w*e.w+this.x*e.x+this.y*e.y+this.z*e.z;if(i<0&&(e=new gt(-e.w,-e.x,-e.y,-e.z),i=-i),i>.9995)return new gt(this.w+t*(e.w-this.w),this.x+t*(e.x-this.x),this.y+t*(e.y-this.y),this.z+t*(e.z-this.z)).normalize();const r=Math.acos(Math.min(i,1)),s=Math.sin(r),a=Math.sin((1-t)*r)/s,o=Math.sin(t*r)/s;return new gt(a*this.w+o*e.w,a*this.x+o*e.x,a*this.y+o*e.y,a*this.z+o*e.z)}rotate(e){const t=new qv(this.x,this.y,this.z),i=t.cross(e).mul(2);return e.add(i.mul(this.w)).add(t.cross(i))}toRotvec(){const e=this.w>=0?this:new gt(-this.w,-this.x,-this.y,-this.z),t=Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z);if(t<1e-10)return[0,0,0];const i=2*Math.atan2(t,e.w)/t;return[e.x*i,e.y*i,e.z*i]}static fromRotvec(e,t,i){const r=Math.sqrt(e*e+t*t+i*i);if(r<1e-10)return new gt(1,e*.5,t*.5,i*.5).normalize();const s=r*.5,a=Math.sin(s)/r;return new gt(Math.cos(s),e*a,t*a,i*a)}static fromAxes(e,t,i){const r=e.x,s=t.y,a=i.z,o=t.x,c=i.x,l=e.y,u=i.y,h=e.z,f=t.z,p=r+s+a;if(p>0){const v=.5/Math.sqrt(p+1);return new gt(.25/v,(f-u)*v,(c-h)*v,(l-o)*v)}if(r>s&&r>a){const v=2*Math.sqrt(1+r-s-a);return new gt((f-u)/v,.25*v,(o+l)/v,(c+h)/v)}if(s>a){const v=2*Math.sqrt(1+s-r-a);return new gt((c-h)/v,(o+l)/v,.25*v,(u+f)/v)}const _=2*Math.sqrt(1+a-r-s);return new gt((l-o)/_,(c+h)/_,(u+f)/_,.25*_)}},B(gt,"identity",new gt(1,0,0,0)),gt),xt=n=>String(n).replace(/[_-]/g," "),Gr=n=>typeof n=="number"&&Number.isFinite(n)?n.toFixed(3):typeof n=="boolean"?n?"yes":"no":String(n),ko=n=>n!==null&&typeof n=="object"&&!Array.isArray(n)?n:{},As=n=>Array.isArray(n)?n:[];function Wt(n){return Array.isArray(n)&&n.length===3&&n.every(e=>typeof e=="number")?`(${n.map(Gr).join(", ")})`:void 0}function br(n){const e=ko(n),t=Wt(e.min),i=Wt(e.max);return t&&i?`${t} … ${i}`:void 0}function xi(n){const e=Wt(n)??br(n);return e||(n==null?"missing":typeof n=="number"||typeof n=="boolean"?Gr(n):Array.isArray(n)?n.map(xi).join(", "):typeof n=="object"?Object.entries(n).filter(([,t])=>t!=null).map(([t,i])=>`${xt(t)}: ${xi(i)}`).join("; "):String(n))}function Gt(n,e=!0,t=!0,i=!0){const r=[];return e&&n.client!=null&&r.push(String(n.client)),t&&n.gesture!=null&&r.push(`gesture ${n.gesture}`),i&&n.request!=null&&r.push(`request ${n.request}`),r.length?` · ${r.join(", ")}`:""}var Xa=n=>n.duration_ms==null?"":` · ${Gr(n.duration_ms)} ms`;function su(n){const e=String(n);return e.startsWith("query:")?e.slice(6):e.startsWith("viewport.center:")?`viewport center (${xt(e.slice(16).replace(/-depth$/,""))} depth)`:{locked:"locked pivot","selection.viewport-clipped-center":"selection center","last-used":"last pivot","model.viewport-clipped-center":"model center","model.bounds":"model bounds","world.origin":"origin",query:"queried pick"}[e]??xt(e.replaceAll("."," "))}function Rs(n,e={}){switch(n){case"gesture.start":return"motion started"+Gt(e,!1,!0,!1);case"gesture.end":return"motion ended"+Gt(e,!1,!0,!1);case"gesture.cancel":return`motion canceled — ${xt(e.reason??"unknown reason")}`+Gt(e,!1,!0,!1);case"navigation.fact":{const r=Wt(ko(e.value).point),s=br(ko(e.value).bounds),a=e.result==="error"?`error: ${e.error??"unknown failure"}`:e.result!=="ok"?String(e.fact??"").startsWith("pick.")?"miss":"missing":r?`hit at ${r}${s?` | bounds ${s}`:""}`:e.value==null?"found":`found ${xi(e.value)}`;return`  ${e.fact??"fact"} — ${a}`+Xa(e)}case"navigation.fact.error":return`  ${e.fact??"fact"} — error: ${e.error}`+Gt(e,!1,!1);case"navigation.query.complete":{const r=[],s=As(e.missing);return s.length&&r.push(`missing ${s.join(", ")}`),e.first!=null&&r.push(`first: ${e.first}`),"query complete"+(r.length?` — ${r.join("; ")}`:"")+Xa(e)+Gt(e,!1,!1)}case"navigation.query.rejected":return`query rejected — ${xt(e.reason??"unknown reason")}`+Gt(e);case"navigation.query.error":return`query failed — ${e.error??"unknown failure"}`+Xa(e)+Gt(e);case"navigation.pivot.order":return`pivot order: ${As(e.candidates).map(su).join(" → ")}`+Gt(e);case"navigation.pivot":return`  ${su(e.source??"pivot")} — ${xt(e.result??"considered")}`+(e.reason?` — ${xt(e.reason)}`:"")+(Wt(e.point)?` at ${Wt(e.point)}`:"")+Gt(e);case"navigation.policy":return`navigation: ${e.target==null||e.target==="camera"?e.camera_mode?`${xt(e.camera_mode)} camera`:"camera":xt(e.target)}`+Gt(e,!0,!0,!1);case"navigation.object.selected":return"object control: "+([e.translation&&"translation",e.rotation&&"rotation"].filter(Boolean).join(" + ")||"disabled")+(Wt(e.pivot)?` around ${Wt(e.pivot)}`:"")+Gt(e);case"interaction.object.detected":return"object interaction: "+(As(e.actions).map(xt).join(" + ")||"detected")+(e.target?` · ${e.target}`:"")+(e.type?` (${e.type})`:"")+(e.unresolved?` — target unavailable: ${xi(e.unresolved)}`:"")+(e.operations?` · ${xi(e.operations)}`:"");case"interaction.object.ended":return"object interaction ended";case"camera.external.delta":{const r=[];return Wt(e.translation)&&r.push(`translation ${Wt(e.translation)}`),Wt(e.rotation)&&r.push(`rotation ${Wt(e.rotation)}`),e.ortho_extent_scale!=null&&r.push(`ortho scale ${Gr(e.ortho_extent_scale)}`),"external camera change: "+(As(e.changes).map(xt).join(" + ")||r.join(", ")||"observed")}case"object.native_override":return"native object motion overridden by Rotatrix"+Gt(e,!1,!0,!1);case"object.native_override.summary":return`native object motion overridden ${e.count??0} times`+Gt(e,!1,!0,!1);case"pivot.selection":if(e.result==="empty")return"selection — empty";if(e.result==="inspect")return`selection — inspecting ${e.count??0} item(s)`;break;case"pivot.selection.item":{const r=e.type??e.entity_type??"entity",s=`${r}${e.id!=null?` #${e.id}`:""}${e.name?` ${e.name}`:""}`,a=e.result==="ok"?`bounds ${br(e.bounds)??"found"}`:e.result==="missing_bounds"?"missing bounds":e.result==="error"?`error: ${e.error??"unknown failure"}`:xt(e.result??"inspected"),o=[];e.occurrence&&o.push(String(e.occurrence)),e.source&&o.push(xt(e.source)),e.geometry_type&&o.push(`geometry ${xt(e.geometry_type)}`),(e.native_type||e.native_id!=null)&&o.push(`native ${e.native_type??r}${e.native_id!=null?` #${e.native_id}`:""}`);for(const c of["reported_bounds","native_bounds","transform"])e[c]!=null&&o.push(`${xt(c)} ${xi(e[c])}`);return`  selection ${e.item}: ${s} — ${a}`+(o.length?` · ${o.join(", ")}`:"")}case"pivot.pick":{const r=e.type??e.entity_type;return`  ${xt(e.kind??"pick")} pick — ${e.result==="outside_selection"?"hit outside selection":xt(e.result??"complete")}`+(Wt(e.point)?` at ${Wt(e.point)}`:"")+(e.reason?` — ${xt(e.reason)}`:"")+(r?` · ${r}${e.id!=null?` #${e.id}`:""}${e.occurrence?` in ${e.occurrence}`:""}`:"")+(br(e.bounds)?` · bounds ${br(e.bounds)}`:"")}case"connection.start":return`connecting to ${e.url}`;case"connection.open":return`connected to ${e.url} · ${e.protocol}`;case"connection.stop":return"connection stopped";case"connection.lost":return"connection lost"+(e.retry?" — retrying":"");case"connection.retry_failed":return`connection failed — ${e.error??"unknown failure"} · retrying in ${Gr(e.retry_delay_s??0)} s`;case"command.rejected":return`command rejected: ${e.name}`;case"command.error":return`command failed: ${e.name} — ${e.error}`}const t=new Set(["client","gesture","request","delta_id","seq"]),i=Object.entries(e).filter(([r,s])=>!t.has(r)&&s!=null).map(([r,s])=>`${xt(r)}: ${xi(s)}`);return xt(n.replaceAll("."," "))+(i.length?` — ${i.join("; ")}`:"")+Gt(e)}var gd="1.0.0-rc.1";function _d(n){const e=n.toLowerCase();return e==="warn"?"warning":e==="critical"?"error":["debug","info","warning","error"].includes(e)?e:"info"}function Xv(n,e,t=new Date,i=-t.getTimezoneOffset()){const r=new Date(t.getTime()+i*6e4).toISOString().slice(0,23).replace("T"," "),s=c=>String(c).padStart(2,"0"),a=`${i<0?"-":"+"}${s(Math.floor(Math.abs(i)/60))}:${s(Math.abs(i)%60)}`,o=e.replace(/\x1b\[[0-?]*[ -/]*[@-~]/g,"").replace(/\r\n?/g,`
`).replace(/\n/g,`
    `);return`${r} ${a} ${_d(n).toUpperCase()} ${o}
`}var $v=class{constructor(n,e={}){B(this,"sinks");B(this,"debug");B(this,"closed",!1);B(this,"write",(n,e)=>{if(this.closed)return;const t=_d(n);if(!(t==="debug"&&!this.debug))for(const i of[...this.sinks])try{i(t,e)}catch{}});if(this.client=n,!/^[a-z0-9][a-z0-9_-]*$/.test(n)||n.includes(`
`))throw new Error("Invalid client identifier");this.debug=e.debug??!1,this.sinks=e.sinks??[(t,i)=>{const r=Xv(t,i).slice(0,-1);t==="error"?console.error(r):t==="warning"?console.warn(r):console.info(r)}],this.write("info",`OpenAxis SDK ${gd} (TypeScript); client=${n}; client_version=${e.clientVersion||"unknown"}`)}close(){this.closed=!0}},jv;function Kn(n,e){(jv??(jv=new $v("openaxis"))).write(n,e)}var vd={"rotatrix-root-1":Uint8Array.from("56786e04d5ce1b9a0d5235712e8fdb514f3dccaaa5f808d43dd209bc0952e5ee49e26a76dc1ca860436aca88869329e945c8fd25221ca902ba2b4a6d54ba1f37".match(/../g),n=>parseInt(n,16))},zo=new TextEncoder,Nn=class extends Error{constructor(n="invalid_proof"){super(n),this.code=n,this.name="VerificationError"}};function lt(n,e="invalid_proof"){if(!n)throw new Nn(e)}function Ei(n,e){return lt(n instanceof Uint8Array&&n.length===e),n}function vc(n){return lt(n!==null&&typeof n=="object"&&!Array.isArray(n)&&!(n instanceof Uint8Array)),n}function yi(n,e){const t=vc(n);return lt(Object.keys(t).sort().join("|")===e.sort().join("|")),t}function Ur(n){return lt(typeof n=="string"&&/^[\x00-\x7f]{1,128}$/.test(n)),n}function Nr(n){lt(typeof n=="string"&&/^[A-Za-z0-9_-]+$/.test(n));const e=Uint8Array.from(atob(n.replace(/-/g,"+").replace(/_/g,"/")),t=>t.charCodeAt(0));return lt(btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")===n),e}function au(n){const e=new TextDecoder("utf-8",{fatal:!0}).decode(n),t=JSON.parse(e),i=a=>{typeof a=="number"?lt(Number.isFinite(a)):a&&typeof a=="object"&&Object.values(a).forEach(i)};i(t);const r=e.match(/"(?:\\.|[^"\\])*"|[{}\[\],:]|[^\s{}\[\],:]+/g),s=[];for(const a of r){const o=s[s.length-1];if(a==="{")s.push({keys:new Set,key:!0});else if(a==="[")s.push({key:!1});else if(a==="}"||a==="]")s.pop();else if(a===","&&(o!=null&&o.keys))o.key=!0;else if(o!=null&&o.keys&&o.key){const c=JSON.parse(a);lt(!o.keys.has(c)),o.keys.add(c),o.key=!1}}return vc(t)}function ks(n){const e=yi(n,["kty","crv","x","y"]);return lt(e.kty==="EC"&&e.crv==="P-256"),xc(Ei(Nr(e.x),32),Ei(Nr(e.y),32))}function xc(...n){const e=new Uint8Array(n.reduce((i,r)=>i+r.length,0));let t=0;for(const i of n)e.set(i,t),t+=i.length;return e}async function zs(n,e,t){const i=await crypto.subtle.importKey("raw",xc(new Uint8Array([4]),Ei(n,64)),{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]);lt(await crypto.subtle.verify({name:"ECDSA",hash:"SHA-256"},i,new Uint8Array(Ei(t,64)),new Uint8Array(e)),"invalid_signature")}async function $a(n,e,t){lt(typeof n=="string"&&n.length<=8192&&/^[\x00-\x7f]*$/.test(n));const i=n.split(".");lt(i.length===3);const r=yi(au(Nr(i[0])),["alg","typ","kid"]);lt(r.alg==="ES256"&&r.typ===t);const s=e[Ur(r.kid)];lt(s,"untrusted_issuer"),await zs(s,zo.encode(i[0]+"."+i[1]),Nr(i[2]));const a=au(Nr(i[1]));return lt(a.v===1),ks(a.key),a}function ou(n,e){lt(Number.isSafeInteger(n.nbf)&&Number.isSafeInteger(n.exp)&&n.nbf>=0&&n.nbf<n.exp),lt(e>=n.nbf-120,"not_yet_valid"),lt(e<n.exp+120,"expired"),lt(Array.isArray(n.scopes)&&n.scopes.length<=16),n.scopes.forEach(Ur);const t=new Set(n.scopes);return lt(t.size===n.scopes.length),t}async function Yv(n,e,t=vd,i=Date.now()/1e3,r=s=>Kn("warning",s)){let s="envelope";try{const a=yi(yi(n,["token"]).token,["v","kind","challenge","credential","signature"]);lt(a.v===1,"unsupported_credential"),lt(Ei(a.challenge,32).every((p,_)=>p===Ei(e,32)[_]),"challenge_mismatch");const o=vc(a.credential);if(a.kind==="hardware"){s="hardware_issuer",yi(o,["key","ca_signature","issuer"]);const p=await $a(o.issuer,t,"openaxis-issuer-v1");yi(p,["v","purpose","issuer_id","key"]),lt(p.purpose==="hardware-issuer"),Ur(p.issuer_id);const _=ks(p.key);return s="hardware_credential",await zs(_,Ei(o.key,64),o.ca_signature),s="hardware_signature",await zs(o.key,e,a.signature),{kind:"hardware"}}lt(a.kind==="software","unsupported_credential"),yi(o,["issuer","license"]),s="software_credential";const c=await $a(o.issuer,t,"openaxis-issuer-v1");lt(c.purpose==="software-issuer");const l=ou(c,i),u=await $a(o.license,{[Ur(c.issuer_id)]:ks(c.key)},"openaxis-credential-v1");Ur(u.credential_id);const h=ou(u,i);lt(h.has("openaxis.session")&&[...h].every(p=>l.has(p))&&c.nbf<=u.nbf&&u.exp<=c.exp,"scope_denied");const f=async p=>new Uint8Array(await crypto.subtle.digest("SHA-256",zo.encode(p)));return s="software_signature",await zs(ks(u.key),xc(zo.encode("OpenAxis software proof v1\0openaxis/1.0\0"),e,await f(o.issuer),await f(o.license)),a.signature),{kind:"software",expiresAt:u.exp+120}}catch(a){const o=a instanceof Nn?a.code:"invalid_proof";throw r(`verification.failed stage=${s} reason=${o}`),new Nn(o)}}function Kv(){var e,t;if((t=(e=globalThis.process)==null?void 0:e.versions)!=null&&t.node)return!0;if(typeof navigator<"u"&&(typeof window<"u"||typeof self<"u"))return!1;throw new Nn("unsupported_runtime")}function Zv(n,e=t=>Kn("warning",t)){const t=["unavailable","busy","forbidden","bad_request"].includes(n)?n:"remote_error";return e(`verification.failed stage=server_response reason=${t}`),new Nn(t)}var gn=Symbol("OpenAxis.NavigationQuery.unavailable");function cu(n,e){if(["pick.cursor","pick.viewport_center","pick.cursor.selection","pick.viewport_center.selection"].includes(n)&&e!==null&&typeof e=="object"){const{markerPosition:t,...i}=e;return i.point==null?gn:i}return e}var Jv=class{constructor(n,e,t){B(this,"requestId");B(this,"gestureId");B(this,"values");B(this,"first");B(this,"scoped");B(this,"hasFirst");B(this,"terminal",!1);if(this.completeCallback=e,this.failCallback=t,n.method!=="navigation.query")throw new TypeError("NavigationQuery requires a navigation.query request");const i=n.params;this.requestId=n.id,this.scoped="gesture_id"in i,this.scoped&&(this.gestureId=ht(i.gesture_id,"navigation.query.gesture_id")),this.values=this.parseNames("values"in i?i.values:[],"values"),this.hasFirst="first"in i,this.first=this.parseNames(this.hasFirst?i.first:[],"first")}get completed(){return this.terminal}evaluate(n){const e=new Map,t=s=>(e.has(s)||e.set(s,cu(s,n(s))),e.get(s)),i={};for(const s of this.values){const a=t(s);a!=null&&a!==gn&&(i[s]=a)}const r={values:i};if(this.hasFirst){r.first=null;for(const s of this.first){const a=t(s);if(!(a==null||a===gn)){r.first={name:s,value:a};break}}}return r}async evaluateAsync(n){const e=new Map,t=async s=>(e.has(s)||e.set(s,cu(s,await n(s))),e.get(s)),i={};for(const s of this.values){const a=await t(s);a!=null&&a!==gn&&(i[s]=a)}const r={values:i};if(this.hasFirst){r.first=null;for(const s of this.first){const a=await t(s);if(!(a==null||a===gn)){r.first={name:s,value:a};break}}}return r}complete(n){en(n,"navigation.query result"),this.claim(),this.completeCallback(en(n,"navigation.query result"))}fail(n,e){if(typeof n!="string"||n.trim().length===0)throw new TypeError("Error code is required");if(e!==void 0&&typeof e!="string")throw new TypeError("Error message must be a string");this.claim(),this.failCallback(n,e)}parseNames(n,e){if(!Array.isArray(n)||!n.every(t=>typeof t=="string"&&t.length>0))throw new TypeError(`navigation.query.${e} must contain non-empty strings`);return[...n]}claim(){if(this.terminal)throw new Error("NavigationQuery has already been completed");this.terminal=!0}},Cs=1,lu=1e3,Qv=class extends Error{constructor(n,e){super(e?`${n}: ${e}`:n),this.code=n,this.name="RpcRequestError"}},ex=class{constructor(n,e){B(this,"socket",null);B(this,"connectionState","disconnected");B(this,"listeners",new Set);B(this,"navigationOwner");B(this,"url");B(this,"clientName");B(this,"clientVersion");B(this,"target");B(this,"handshakeTimeoutMs");B(this,"handshakeReject");B(this,"heartbeatTimer");B(this,"lastSendAt",0);B(this,"verificationExpiry");B(this,"verificationRoots",vd);B(this,"verifyDevice",Yv);B(this,"lastVerificationFailure");B(this,"reportVerificationFailure",n=>{n!==this.lastVerificationFailure&&(this.lastVerificationFailure=n,Kn("warning",n))});B(this,"verificationDeadline");B(this,"verificationStatus");B(this,"nextRequestId",0);B(this,"pending",new Map);var t;if(!((t=n.clientName)!=null&&t.trim()))throw new TypeError("clientName is required");if(this.clientName=n.clientName,n.clientVersion!==void 0&&(typeof n.clientVersion!="string"||!n.clientVersion.trim()))throw new TypeError("clientVersion must be a non-empty string");if(this.clientVersion=n.clientVersion,this.target=n.target===void 0?void 0:pd(n.target),this.url=n.url??Ov,this.handshakeTimeoutMs=n.handshakeTimeoutMs??5e3,!Number.isFinite(this.handshakeTimeoutMs)||this.handshakeTimeoutMs<=0)throw new TypeError("handshakeTimeoutMs must be a positive finite number");e&&this.listeners.add(e)}get state(){return this.connectionState}getState(){return this.connectionState}addListener(n){return this.listeners.add(n),()=>this.listeners.delete(n)}attachNavigation(n){if(this.navigationOwner)throw new Error("A NavigationSession is already attached");return this.navigationOwner=n,()=>{this.navigationOwner===n&&(this.navigationOwner=void 0)}}captureNavigationSender(){const n=this.socket;if(!n||this.state!=="connected")throw new Error("OpenAxis client is not connected");return e=>{if(this.verificationExpired())throw this.disconnect(),new Nn("expired");if(n!==this.socket||n.readyState!==Cs||this.state!=="connected")throw new Error("Navigation connection retired");n.send(Ql(nu(e))),this.lastSendAt=Date.now()}}async connect(){if(this.connectionState!=="disconnected")throw new Error(`Cannot connect from state: ${this.connectionState}`);this.setState("connecting");try{const n=new WebSocket(this.url);if(n.binaryType="arraybuffer",this.socket=n,await new Promise((e,t)=>{let i=!1;const r=a=>{i||(i=!0,clearTimeout(s),this.handshakeReject=void 0,a===void 0?e():t(a))},s=setTimeout(()=>r(new Error("Timed out waiting for hello_ack")),this.handshakeTimeoutMs);this.handshakeReject=r,n.onopen=()=>{try{this.sendRaw({type:"hello",proto:Bo,client_name:this.clientName,sdk:{name:"openaxis-typescript",version:gd},...this.clientVersion!==void 0?{client_version:this.clientVersion}:{},...this.target?{target:this.target}:{}})}catch(a){r(a)}},n.onerror=()=>r(new Error("WebSocket error during OpenAxis handshake")),n.onclose=()=>r(new Error("OpenAxis connection closed during handshake")),n.onmessage=a=>{try{const o=this.decodeEvent(a.data);if(o.type==="error"){const l=o;r(new Error(`OpenAxis handshake rejected: ${l.code}: ${l.message}`));return}if(o.type!=="hello_ack")throw new Error(`Expected hello_ack, got ${o.type}`);const c=o;if(c.proto!==Bo)throw new Error(`Server selected unsupported protocol ${c.proto}`);r()}catch(o){r(o)}}}),this.socket!==n)throw new Error("OpenAxis connection closed during handshake");if(Kv()){const e=crypto.getRandomValues(new Uint8Array(32)),t=this.allocateRequestId(),i=await new Promise((s,a)=>{const o=setTimeout(()=>l(new Nn("timeout")),1e4);let c=!1;const l=(u,h)=>{c||(c=!0,clearTimeout(o),this.handshakeReject=void 0,u===void 0?s(h):a(u))};this.handshakeReject=l,n.onclose=()=>l(new Error("Connection closed during verification")),n.onerror=()=>l(new Error("WebSocket verification failed")),n.onmessage=u=>{try{const h=this.decodeEvent(u.data);if(h.type!=="response"||h.id!==t)return;const f=h;if(u.data.byteLength>20*1024)throw new Nn;if(f.error)throw Zv(f.error.code,this.reportVerificationFailure);l(void 0,f.result??{})}catch(h){l(h)}};try{this.sendRaw({type:"request",id:t,method:"q",params:{v:1,c:e}})}catch(u){l(u)}}),r=await this.verifyDevice(i,e,this.verificationRoots,void 0,this.reportVerificationFailure);if(this.socket!==n||n.readyState!==Cs)throw new Error("Connection closed during verification");this.lastVerificationFailure=void 0,this.verificationStatus=r.kind+"_verified",this.verificationExpiry=r.expiresAt,this.verificationDeadline=r.expiresAt===void 0?void 0:performance.now()+Math.max(0,r.expiresAt*1e3-Date.now())}else this.verificationStatus="not_checked_browser";n.onmessage=e=>this.handleMessage(e.data),n.onerror=()=>{},n.onclose=()=>this.handleClose(),this.setState("connected"),this.startHeartbeat()}catch(n){throw this.closeSocket(),this.setState("disconnected"),n}}async disconnect(){var n;this.connectionState!=="disconnected"&&(this.setState("disconnecting"),(n=this.handshakeReject)==null||n.call(this,new Error("OpenAxis connection closed")),this.closeSocket(),this.rejectPending(new Error("OpenAxis connection closed")),this.setState("disconnected"))}sendTags(n){this.sendMessage({type:"tags",tags:[...n]})}sendFocus(n){this.sendMessage({type:"focus",focused:n})}sendCapabilities(n){this.sendMessage({type:"capabilities",capabilities:[...n]})}subscribe(n){this.sendMessage({type:"subscribe",axes:[...n]})}sendMotionCancel(n,e){this.sendMessage({type:"motion_cancel",gesture_id:n,...e===void 0?{}:{reason:e}})}sendViewportSettled(){this.sendMessage({type:"viewport.settled"})}sendCameraPose(n,e,t,i){const r={type:"camera.pose",gesture_id:n,t:e,r:t};i.fov!==void 0?r.fov=i.fov:r.ortho_extent=i.orthoExtent,this.sendMessage(r)}sendCameraDelta(n,e,t,i={}){const r={type:"camera.delta",gesture_id:n,t:e,r:t};i.orthoExtentScale!==void 0&&(r.ortho_extent_scale=i.orthoExtentScale),i.deltaId!==void 0&&(r.delta_id=i.deltaId),this.sendMessage(r)}sendObjectPose(n,e,t){this.sendMessage({type:"object.pose",gesture_id:n,t:e,r:t})}sendObjectDelta(n,e,t,i){const r={type:"object.delta",gesture_id:n,t:e,r:t};i!==void 0&&(r.delta_id=i),this.sendMessage(r)}sendResponse(n,e){this.sendMessage({type:"response",id:n,result:e})}sendResponseError(n,e,t){this.sendMessage({type:"response",id:n,error:{code:e,...t===void 0?{}:{message:t}}})}request(n,e={},t={}){var s;if(!n.trim())return Promise.reject(new TypeError("Request method is required"));if((s=t.signal)!=null&&s.aborted)return Promise.reject(t.signal.reason??new DOMException("Aborted","AbortError"));const i=t.timeoutMs===void 0?5e3:t.timeoutMs;if(i!==null&&(!Number.isFinite(i)||i<0))return Promise.reject(new TypeError("timeoutMs must be a non-negative finite number or null"));const r=this.allocateRequestId();return new Promise((a,o)=>{const c={resolve:a,reject:o,signal:t.signal};i!==null&&(c.timer=setTimeout(()=>{this.finishPending(r),o(new Error(`OpenAxis request timed out: ${n}`))},i)),t.signal&&(c.abort=()=>{this.pending.delete(r),c.timer&&clearTimeout(c.timer),o(t.signal.reason??new DOMException("Aborted","AbortError"))},t.signal.addEventListener("abort",c.abort,{once:!0})),this.pending.set(r,c);try{this.sendMessage({type:"request",id:r,method:n,params:e})}catch(l){this.finishPending(r),o(l)}})}executeCommand(n,e={},t){return n.trim()?Object.hasOwn(e,"name")?Promise.reject(new TypeError("Command parameters must not contain the reserved 'name' field")):this.request("command.execute",{name:n,...e},t):Promise.reject(new TypeError("Command name is required"))}sendMessage(n){if(this.verificationExpired())throw this.disconnect(),new Nn("expired");if(!this.socket||this.socket.readyState!==Cs||this.connectionState!=="connected")throw new Error("OpenAxis client is not connected");this.sendRaw(n)}sendRaw(n){if(!this.socket||this.socket.readyState!==Cs)throw new Error("WebSocket is not open");this.socket.send(Ql(nu(n))),this.lastSendAt=Date.now()}decodeEvent(n){if(!(n instanceof ArrayBuffer)&&!ArrayBuffer.isView(n))throw new En("Expected a binary WebSocket message");return Wv(n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}handleMessage(n){try{this.dispatch(this.decodeEvent(n))}catch(e){e instanceof En&&e.requestId!==void 0?this.sendResponseError(e.requestId,"bad_request",e.message):Kn("error",`Failed to handle OpenAxis message: ${e}`)}}dispatch(n){if(this.verificationExpired()){this.disconnect();return}switch(n.type){case"response":return this.dispatchResponse(n);case"request":return this.dispatchRequest(n);case"frame":return this.notify(e=>{var t;return(t=e.onFrame)==null?void 0:t.call(e,n)});case"buttons":return this.notify(e=>{var t;return(t=e.onButtons)==null?void 0:t.call(e,n.buttons)});case"motion_start":return this.notifyLifecycle(e=>{var t;return(t=e.onMotionStart)==null?void 0:t.call(e,n.gesture_id)});case"motion_end":return this.notifyLifecycle(e=>{var t;return(t=e.onMotionEnd)==null?void 0:t.call(e,n.gesture_id)});case"navigation.state":return this.notifyNavigation(e=>{var t;return(t=e.onNavigationState)==null?void 0:t.call(e,n)});case"camera.pose":return this.notifyNavigation(e=>{var t;return(t=e.onCameraPose)==null?void 0:t.call(e,n)});case"camera.pivot":return this.notifyNavigation(e=>{var t;return(t=e.onCameraPivot)==null?void 0:t.call(e,n)});case"object.pose":return this.notifyNavigation(e=>{var t;return(t=e.onObjectPose)==null?void 0:t.call(e,n)});case"object.pivot":return this.notifyNavigation(e=>{var t;return(t=e.onObjectPivot)==null?void 0:t.call(e,n)});case"axes":return this.notify(e=>{var t;return(t=e.onAxes)==null?void 0:t.call(e,n.axes)});case"error":{const e=n;return this.notify(t=>{var i;return(i=t.onError)==null?void 0:i.call(t,e.code,e.message)})}case"hello_ack":case"hello":case"heartbeat":case"tags":case"capabilities":case"subscribe":case"motion_cancel":case"viewport.settled":case"camera.delta":case"object.delta":return;default:return this.notify(e=>{var t;return(t=e.onExtension)==null?void 0:t.call(e,n.type,n)})}}verificationExpired(){return this.verificationExpiry!==void 0&&(Date.now()/1e3>=this.verificationExpiry||performance.now()>=this.verificationDeadline)}dispatchResponse(n){const e=this.pending.get(n.id);if(!e){this.notify(t=>{var i;return(i=t.onResponse)==null?void 0:i.call(t,n)});return}this.finishPending(n.id),n.error?e.reject(new Qv(n.error.code,n.error.message)):e.resolve(n.result??{})}dispatchRequest(n){var i,r;let e;const t=this.captureNavigationSender();try{let s=!1;if(n.method==="navigation.query"){e=new Jv(n,o=>t({type:"response",id:n.id,result:o}),(o,c)=>t({type:"response",id:n.id,error:{code:o,...c===void 0?{}:{message:c}}}));const a=e;s=this.navigationOwner?((r=(i=this.navigationOwner).onNavigationQuery)==null?void 0:r.call(i,a))===!0:this.accept(o=>{var c;return((c=o.onNavigationQuery)==null?void 0:c.call(o,a))===!0||a.completed}),s||(s=e.completed)}s||(s=this.accept(a=>{var o;return((o=a.onRequest)==null?void 0:o.call(a,n))===!0||(e==null?void 0:e.completed)===!0})),!s&&!(e!=null&&e.completed)&&t({type:"response",id:n.id,error:{code:"unsupported",message:`Unsupported method: ${n.method}`}})}catch(s){if(e!=null&&e.completed)return;const a=s instanceof En||s instanceof TypeError?"bad_request":"unavailable";t({type:"response",id:n.id,error:{code:a,message:s instanceof Error?s.message:String(s)}})}}notify(n){for(const e of[...this.listeners])try{n(e)}catch(t){Kn("error",`OpenAxis listener callback failed: ${t}`)}}notifyNavigation(n){this.navigationOwner?n(this.navigationOwner):this.notify(n)}accept(n){for(const e of[...this.listeners])if(n(e)===!0)return!0;return!1}allocateRequestId(){if(this.nextRequestId>Number.MAX_SAFE_INTEGER)throw new Error("OpenAxis request IDs exhausted");return this.nextRequestId++}notifyLifecycle(n){const e=new Set([...this.navigationOwner?[this.navigationOwner]:[],...this.listeners]);for(const t of e)try{n(t)}catch(i){Kn("error",`OpenAxis lifecycle listener failed: ${i}`)}}finishPending(n){const e=this.pending.get(n);if(e)return this.pending.delete(n),e.timer&&clearTimeout(e.timer),e.signal&&e.abort&&e.signal.removeEventListener("abort",e.abort),e}rejectPending(n){var e;for(const t of[...this.pending.keys()])(e=this.finishPending(t))==null||e.reject(n)}startHeartbeat(){this.stopHeartbeat(),this.heartbeatTimer=setInterval(()=>{if(this.verificationExpired()){this.disconnect();return}if(!(Date.now()-this.lastSendAt<lu))try{this.sendMessage({type:"heartbeat"})}catch{}},lu)}stopHeartbeat(){this.heartbeatTimer!==void 0&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0}closeSocket(){this.verificationExpiry=void 0,this.verificationDeadline=void 0,this.verificationStatus=void 0,this.stopHeartbeat();const n=this.socket;if(this.socket=null,n){n.onopen=n.onmessage=n.onerror=n.onclose=null;try{n.close()}catch{}}}handleClose(){this.closeSocket(),this.rejectPending(new Error("OpenAxis connection closed")),this.setState("disconnected")}setState(n){this.connectionState!==n&&(this.connectionState=n,this.notifyLifecycle(e=>{var t;return(t=e.onStateChange)==null?void 0:t.call(e,n)}))}},tx=class{constructor(n,e){B(this,"task");B(this,"outageLogged",!1);B(this,"controller");B(this,"currentState","stopped");B(this,"retry");B(this,"timeout");B(this,"announcements",Promise.resolve());this.client=n,this.options=e,this.retry={initialDelayMs:2e3,maxDelayMs:4e3,multiplier:2,jitter:.2,...e.retry},this.timeout=e.startupTimeoutMs??5e3;const t=this.retry;if(![t.initialDelayMs,t.maxDelayMs,t.multiplier,t.jitter,this.timeout].every(Number.isFinite)||t.initialDelayMs<=0||t.maxDelayMs<t.initialDelayMs||t.multiplier<1||t.maxDelayMs>2147483647||this.timeout>2147483647||t.jitter<0||t.jitter>1||this.timeout<=0)throw new TypeError("Invalid lifecycle timing options")}get state(){return this.currentState}start(){if(this.task)return this.task;if(this.client.state!=="disconnected")throw new Error("Client already in use");const n=this.controller=new AbortController;return this.task=Promise.resolve().then(()=>this.run(n.signal)).finally(()=>{this.task=void 0,this.controller=void 0,this.notify("stopped")}),this.task}async stop(){this.task&&(this.notify("stopping"),this.controller.abort(),await this.task)}async refreshMetadata(){this.state==="ready"&&await this.announce()}announce(){const n=this.client.captureNavigationSender(),e=this.announcements.then(async()=>{const t=this.options.metadata();n({type:"tags",tags:[...t.tags??[]]}),n({type:"capabilities",capabilities:[...t.capabilities??[]]}),t.axes!==void 0&&n({type:"subscribe",axes:[...t.axes]}),t.focused!==void 0&&n({type:"focus",focused:t.focused})});return this.announcements=e.catch(()=>{}),e}notify(n,e,t){var r,s;const i=this.outageLogged&&(n==="connecting"||n==="retrying");n==="retrying"?this.outageLogged=!0:(n==="ready"||n==="stopped")&&(this.outageLogged=!1),this.currentState=n;try{const a=this.options.log??Kn;n==="connecting"&&!i?a("info",Rs("connection.start",{url:this.client.url})):n==="ready"?a("info",Rs("connection.open",{url:this.client.url,protocol:Bo})):n==="retrying"&&!i?a("warning",Rs("connection.retry_failed",{error:e instanceof Error?e.message:e==null?"connection lost":String(e),retry_delay_s:(t??0)/1e3})):n==="stopped"&&a("info",Rs("connection.stop"))}catch(a){console.error("OpenAxis lifecycle log sink failed",a)}try{(s=(r=this.options).onState)==null||s.call(r,n,e,t)}catch(a){console.error("OpenAxis lifecycle observer failed",a)}}async run(n){let e=this.retry.initialDelayMs;for(;!n.aborted;){let t;this.notify("connecting");const i=new AbortController,r=()=>i.abort();n.addEventListener("abort",r,{once:!0}),n.aborted&&r();const s=setTimeout(r,this.timeout);try{if(await this.interruptible(async()=>{var o,c;if(await(((c=(o=this.options).connect)==null?void 0:c.call(o,i.signal))??this.client.connect()),i.signal.aborted)throw new Error("Startup cancelled or timed out");await this.announce()},i.signal),n.aborted)break;if(this.client.state!=="connected")throw new Error("Connection lost during startup");clearTimeout(s),this.notify("ready"),e=this.retry.initialDelayMs,await this.waitForClose(n)}catch(o){t=o}finally{clearTimeout(s),n.removeEventListener("abort",r),await this.client.disconnect()}if(n.aborted)break;const a=Math.min(this.retry.maxDelayMs,e*(1+(Math.random()*2-1)*this.retry.jitter));this.notify("retrying",t,a),await this.sleep(a,n),e=Math.min(this.retry.maxDelayMs,e*this.retry.multiplier)}}async interruptible(n,e){if(e.aborted)throw new Error("Startup cancelled");const t=()=>{this.client.disconnect()};e.addEventListener("abort",t,{once:!0});try{if(await n(),e.aborted)throw new Error("Startup cancelled or timed out")}finally{e.removeEventListener("abort",t)}}waitForClose(n){return new Promise(e=>{const t=()=>{i(),n.removeEventListener("abort",t),e()},i=this.client.addListener({onStateChange:r=>{r==="disconnected"&&t()}});n.addEventListener("abort",t,{once:!0}),(n.aborted||this.client.state==="disconnected")&&t()})}sleep(n,e){return new Promise(t=>{const i=()=>{clearTimeout(r),e.removeEventListener("abort",i),t()},r=setTimeout(i,n);e.addEventListener("abort",i,{once:!0}),e.aborted&&i()})}},Wi=class{constructor(){B(this,"count",0);B(this,"total",0);B(this,"max",0)}add(n){const e=Math.max(0,n*1e3);this.count++,this.total+=e,this.max=Math.max(this.max,e)}text(){return`${(this.count?this.total/this.count:0).toFixed(1)}/${this.max.toFixed(1)} [${this.count}]`}},uu=class{constructor(){B(this,"received",0);B(this,"coalesced",0);B(this,"succeeded",0);B(this,"failed",0);B(this,"incomingGap",new Wi);B(this,"queueWait",new Wi);B(this,"observation",new Wi);B(this,"apply",new Wi);B(this,"applyGap",new Wi);B(this,"turnaround",new Wi);B(this,"lastReceived");B(this,"lastApply");B(this,"pending");B(this,"queuedAt",0)}receive(n,e){this.received++,this.lastReceived!==void 0&&this.incomingGap.add(e-this.lastReceived),this.lastReceived=e,this.pending=n,this.queuedAt=e}process(n,e){if(this.pending===n)return this.queueWait.add(e-this.queuedAt),this.pending=void 0,this.queuedAt}applied(n,e,t,i){this.lastApply!==void 0&&this.applyGap.add(n-this.lastApply),this.lastApply=n,this.apply.add(e-n),t?(this.succeeded++,i!==void 0&&this.turnaround.add(e-i)):this.failed++}text(n){if(!this.received&&!this.observation.count&&!this.apply.count)return`${n}: no activity`;const e=this.turnaround.count?`turnaround avg ${(this.turnaround.total/this.turnaround.count).toFixed(1)} ms, max ${this.turnaround.max.toFixed(1)} ms [${this.turnaround.count} applied]`:"no updates applied",t=this.received?100*this.coalesced/this.received:0;return`${n} responsiveness: ${e}; pending poses replaced ${t.toFixed(1)}%
${n}: poses ${this.received}, coalesced ${this.coalesced}, writes ${this.succeeded} ok/${this.failed} failed
  timings avg/max ms [samples]: input gap ${this.incomingGap.text()}; queue wait ${this.queueWait.text()}; observation ${this.observation.text()}; apply ${this.apply.text()}; apply gap ${this.applyGap.text()}`}},nx=class{constructor(n,e,t){B(this,"camera",new uu);B(this,"object",new uu);B(this,"reason","");B(this,"ended",0);this.id=n,this.token=e,this.started=t}},ix=class{constructor(){B(this,"active");B(this,"retired",[])}begin(n,e,t){this.finish("superseded",t),this.active=new nx(n,e,t)}stream(n,e=!1){const t=this.active;return t&&t.token.epoch===n.epoch&&t.token.generation===n.generation?e?t.object:t.camera:void 0}finish(n,e,t){if(!this.active||t&&!this.stream(t))return;const i=this.active;this.active=void 0,i.reason=n,i.ended=e,this.retired.push(i)}flush(){if(!this.retired.length)return;const n=this.retired;this.retired=[];for(const e of n)try{Kn("info",`navigation.performance gesture=${e.id} reason=${e.reason} duration=${Math.max(0,(e.ended-e.started)*1e3).toFixed(1)} ms
${e.camera.text("camera")}
${e.object.text("object")}`)}catch{}}};function xd(n,e,t={}){const i=e.t.map((u,h)=>u-n.t[h]),r=ru.fromRotvec(...e.r).multiply(ru.fromRotvec(...n.r).inverse()).normalize().toRotvec(),s=t.projection??1e-7,a=n.fov===void 0!=(e.fov===void 0)||n.fov!==void 0&&e.fov!==void 0&&Math.abs(n.fov-e.fov)>s,o=n.ortho_extent!==void 0&&e.ortho_extent!==void 0?e.ortho_extent/n.ortho_extent:1,c=Math.abs(o-1)>s?o:void 0,l=Math.max(t.absolute??1e-7,(t.relative??1e-9)*Math.max(1,Math.hypot(...n.t),Math.hypot(...e.t)));return{t:i,r,scale:c,discontinuity:a,changed:Math.hypot(...i)>l||Math.hypot(...r)>(t.angular??1e-7)||c!==void 0}}function rx(n,e,t={}){return xd({t:n.t,r:n.r},{t:e.t,r:e.r},t)}var Ps=(n,e)=>n===e,du=class{constructor(n=void 0,e=1,t="camera"){B(this,"epoch",0);B(this,"generation",0);B(this,"gestureId");B(this,"lastReceived",-1);B(this,"lastApplied",-1);B(this,"lastConsumed",-1);B(this,"nextDeltaId",0);B(this,"baseline");B(this,"pendingId");B(this,"deadline");B(this,"requestedReference");B(this,"ready",!1);B(this,"ending",!1);B(this,"write");B(this,"comparison");if(this.timeout=e,this.stream=t,this.comparison=n??(t==="object"?rx:xd),!Number.isFinite(e)||e<=0)throw new TypeError("timeout must be positive and finite")}get token(){return{epoch:this.epoch,generation:this.generation}}current(n){return n.epoch===this.epoch&&n.generation===this.generation&&this.gestureId!==void 0}retire(){this.generation++,this.gestureId=void 0,this.ready=this.ending=!1,this.baseline=void 0,this.requestedReference=void 0,this.pendingId=void 0,this.deadline=void 0}connection(){this.retire(),this.epoch++,this.lastReceived=this.lastApplied=this.lastConsumed=-1,this.nextDeltaId=0}start(n){return this.retire(),this.gestureId=n,this.token}end(n){return this.current(n)?(this.ending=!0,!0):!1}finish(n){return this.current(n)?(this.retire(),!0):!1}query(n,e,t=!0,i=!0,r=!1){return!t||!i||!this.current(n)||this.ending&&!r||this.write?!1:(this.ready||(this.ready=!0,this.baseline=e),!0)}receive(n,e){if(!(n!==this.epoch||this.gestureId===void 0||this.ending||!Ps(e.gesture_id,this.gestureId)||e.seq===void 0||e.seq<=this.lastReceived))return this.lastReceived=e.seq,{token:this.token,pose:e}}cancel(n,e){if(!this.current(n))return{kind:"reject"};const t=this.gestureId;return this.retire(),{kind:"cancel",token:n,gestureId:t,reason:e}}sendFailed(n,e){return this.current(n)&&Ps(e,this.pendingId)?this.cancel(n,`${this.stream}_delta_send_failed`):{kind:"reject"}}expire(n,e,t){return this.current(n)&&Ps(e,this.pendingId)&&this.deadline!==void 0&&t>=this.deadline?this.cancel(n,`${this.stream}_delta_timeout`):{kind:"reject"}}delta(n,e,t){if(this.nextDeltaId>Number.MAX_SAFE_INTEGER)return this.cancel(this.token,`${this.stream}_delta_id_exhausted`);const i=this.nextDeltaId;return this.nextDeltaId++,this.pendingId=i,this.deadline=t+this.timeout,this.baseline=n,this.requestedReference=void 0,{kind:"delta",token:this.token,gestureId:this.gestureId,deltaId:i,difference:e}}rebase(n,e){if(this.ending)return{kind:"hold"};const t=this.delta(n,{t:[0,0,0],r:[0,0,0],changed:!1,discontinuity:!1},e);return t.kind==="cancel"?t:{...t,kind:"rebase",pose:n}}observe(n,e,t){if(!this.current(n)||!this.ready)return{kind:"reject"};if(this.write)return{kind:"hold"};if(!e)return{kind:"skip"};const i=this.baseline??this.requestedReference;if(!i)return this.baseline=e,{kind:"skip"};const r=this.comparison(i,e);return r.discontinuity?this.rebase(e,t):r.changed?this.pendingId!==void 0||this.ending?{kind:"hold"}:this.delta(e,r,t):(this.baseline||(this.baseline=e,this.requestedReference=void 0),{kind:"skip"})}process(n,e,t){const i=n.pose;if(!this.current(n.token)||!this.ready||!Ps(i.seq,this.lastReceived)||i.seq<=this.lastConsumed)return{kind:"reject"};if(this.write)return{kind:"hold"};this.pendingId!==void 0&&i.applied_delta_id!==void 0&&i.applied_delta_id>=this.pendingId&&(this.pendingId=void 0,this.deadline=void 0);const s=this.observe(n.token,e,t);if(s.kind!=="skip")return s;if(this.pendingId!==void 0)return{kind:"hold"};const a=e??this.baseline;if(a){const o=this.comparison(a,i);if(!o.changed&&!o.discontinuity)return this.lastConsumed=i.seq,{kind:"skip"}}return this.write={accepted:n},{kind:"apply",token:this.token,gestureId:this.gestureId,write:this.write}}complete(n,e,t,i=!0){if(this.write!==n)return{kind:"reject"};if(this.write=void 0,!this.current(n.accepted.token))return{kind:"reject"};if(!i)return this.cancel(n.accepted.token,`${this.stream}_write_failed`);if(this.lastApplied=this.lastConsumed=n.accepted.pose.seq,this.baseline=e,this.requestedReference=e?void 0:n.accepted.pose,e&&!this.ending){const r=this.comparison(n.accepted.pose,e);if(r.discontinuity)return this.rebase(e,t);if(r.changed)return this.delta(e,r,t)}return{kind:"skip"}}},yd=()=>performance.now()/1e3,sx={post:n=>queueMicrotask(n),postAt:(n,e)=>{setTimeout(e,Math.max(0,(n-yd())*1e3))}},ax=class{constructor(n,e,t={}){B(this,"camera");B(this,"object");B(this,"scheduler");B(this,"clock");B(this,"maxQueries");B(this,"maxWork");B(this,"budget");B(this,"detach");B(this,"performance",new ix);B(this,"queue",[]);B(this,"queries",new Set);B(this,"send");B(this,"scheduled",!1);B(this,"draining",!1);B(this,"closed",!1);B(this,"cleanup");B(this,"uiGesture");B(this,"navigation");B(this,"deferred");var i;if(this.client=n,this.options=t,this.clock=t.clock??yd,this.scheduler=t.scheduler??sx,t.clock&&!t.scheduler)throw new TypeError("A custom clock requires a matching scheduler");this.maxQueries=t.maxQueries??32,this.maxWork=t.maxWork??64,this.budget=t.drainBudget??32;for(const r of[this.maxQueries,this.maxWork,this.budget])if(!Number.isInteger(r)||r<1)throw new TypeError("Queue limits must be positive integers");this.camera={state:new du(t.comparison,t.timeout),adapter:e,observation:t.observation},this.object={state:new du(t.objectComparison,t.timeout,"object"),adapter:t.objectAdapter,observation:t.objectObservation},(i=t.diagnostics)==null||i.bind(t.comparison,t.objectComparison),this.detach=n.attachNavigation(this);try{n.state==="connected"&&this.onStateChange(n.state)}catch(r){throw this.detach(),r}}get isActive(){return!this.closed&&this.camera.state.gestureId!==void 0&&!this.camera.state.ending}notify(n,e){var t,i,r,s,a;try{(t=this.options.diagnostics)==null||t.observe(n,e)}catch{}try{(r=(i=this.options).onEvent)==null||r.call(i,{event:n,values:e})}catch{}try{(a=(s=this.options).observer)==null||a.call(s,n,e)}catch{}}wake(){if(!(this.scheduled||this.draining||!this.queue.length&&!this.cleanup&&!this.camera.state.ending)){this.scheduled=!0;try{this.scheduler.post(()=>this.drain())}catch(n){throw this.scheduled=!1,n}}}enqueue(n){var t,i,r,s;if(n.kind==="pose"){if(n.value.pose.seq!==n.stream.state.lastReceived)return!0;const a=l=>{var u,h,f,p;return l.kind==="pose"&&l.stream===n.stream&&((u=l.token)==null?void 0:u.epoch)===((h=n.token)==null?void 0:h.epoch)&&((f=l.token)==null?void 0:f.generation)===((p=n.token)==null?void 0:p.generation)},o=this.performance.stream(n.token,n.stream===this.object),c=this.queue.length;return this.queue=this.queue.filter(l=>!a(l)),o&&(o.coalesced+=c-this.queue.length),this.deferred&&a(this.deferred)&&(o&&o.coalesced++,this.deferred=void 0),this.queue.push(n),!0}const e=this.queue.at(-1);if(n.kind!=="query"&&(e==null?void 0:e.kind)===n.kind&&e.stream===n.stream&&((t=e.token)==null?void 0:t.epoch)===((i=n.token)==null?void 0:i.epoch)&&((r=e.token)==null?void 0:r.generation)===((s=n.token)==null?void 0:s.generation))this.queue[this.queue.length-1]=n;else if(this.queue.filter(a=>a.kind!=="pose").length<this.maxWork)this.queue.push(n);else return!1;return!0}onStateChange(n){if(!this.closed){this.performance.finish("connection_changed",this.clock()),this.camera.state.connection(),this.object.state.connection();for(const e of this.queries)this.reply(e);this.queue=[],this.cleanup="connection_changed",this.send=n==="connected"?this.client.captureNavigationSender():void 0,this.wake()}}onMotionStart(n){if(!(this.closed||!this.send)){this.camera.state.start(n),this.object.state.start(n),this.performance.begin(n,this.camera.state.token,this.clock());for(const e of this.queries)e.token&&this.reply(e);this.queue=this.queue.filter(e=>e.kind==="query"&&!e.token),this.cleanup="superseded",this.wake()}}onMotionEnd(n){this.closed||n!==this.camera.state.gestureId||(this.camera.state.end(this.camera.state.token),this.object.state.end(this.object.state.token),this.wake())}onNavigationQuery(n){const e=this.camera.state,t={query:n,epoch:e.epoch,token:n.scoped?e.token:void 0};return this.queries.add(t),(this.closed||!this.send||this.queries.size>this.maxQueries||n.scoped&&(n.gestureId!==e.gestureId||e.ending)||!this.enqueue({kind:"query",token:t.token,value:t}))&&this.reply(t),this.wake(),!0}onCameraPose(n){this.receive(this.camera,n)}onObjectPose(n){this.object.adapter?this.receive(this.object,n):n.gesture_id===this.camera.state.gestureId&&this.effect(this.camera,this.camera.state.cancel(this.camera.state.token,"object_navigation_unsupported"))}receive(n,e){var i;if(this.closed)return;const t=n.state.receive(n.state.epoch,e);t?((i=this.performance.stream(t.token,n===this.object))==null||i.receive(e.seq,this.clock()),this.enqueue({kind:"pose",token:t.token,value:t,stream:n})):this.notify("output_rejected",{kind:e.type,gestureId:e.gesture_id,reason:"inactive_or_stale_output"}),this.wake()}onNavigationState(n){this.feedback("navigation",n.gesture_id,n)}onCameraPivot(n){this.feedback("pivot",n.gesture_id,n.point,this.camera)}onObjectPivot(n){this.feedback("pivot",n.gesture_id,n.point,this.object)}feedback(n,e,t,i){!this.closed&&e===this.camera.state.gestureId&&!this.camera.state.ending&&this.enqueue({kind:n,value:t,token:this.camera.state.token,stream:i}),this.wake()}nativeCameraChanged(){this.changed(this.camera)}nativeObjectChanged(){this.changed(this.object)}changed(n){!this.closed&&n.state.ready&&this.enqueue({kind:"observe",token:n.state.token,stream:n}),this.wake()}contextChanged(){this.effect(this.camera,this.camera.state.cancel(this.camera.state.token,"context_changed"))}checkContext(){const n=this.camera.bound??this.object.bound;n&&this.valid(n.token)}valid(n){let e=!0;for(const i of[this.camera,this.object])if(i.bound)try{e=i.adapter.isCurrent(i.bound.context)&&e}catch{e=!1}const t=!this.closed&&this.camera.state.current(n);return t&&!e&&this.effect(this.camera,this.camera.state.cancel(n,"context_changed")),t&&e}reply(n,e){if(this.queries.delete(n))try{this.closed||n.epoch!==this.camera.state.epoch?n.query.claim():e?n.query.complete(e):n.query.fail("unavailable","Navigation context unavailable")}catch{n.token&&this.effect(this.camera,this.camera.state.cancel(n.token,"navigation_reply_send_failed"))}}query(n){var i,r;if(!this.queries.has(n))return;const e=this.clock();this.notify("query_started",{query:n.query});const t=new Map;try{const s=n.query.evaluate(c=>{const l=c.startsWith("object.")?this.object:this.camera;let u=gn,h;const f=this.clock();try{if(l.adapter){let p=t.get(l);if(!p){const _=n.token&&l.bound?l.bound.context:l.adapter.captureContext();_!==void 0&&l.adapter.isCurrent(_)&&(p={context:_,capture:l.adapter.beginQuery(_)},t.set(l,p),(l===this.camera||!t.has(this.camera))&&this.notify("query_context",{query:n.query,context:_}))}if(u=(p==null?void 0:p.capture.resolve(c))??gn,u!==gn&&c==="camera.pose"&&fd(u),u!==gn&&c==="object.pose"){const _=en(u);an(_.t,"object.pose.t"),an(_.r,"object.pose.r")}}}catch(p){u=gn,h=String(p)}return this.notify("fact",{query:n.query,name:c,value:u,error:h,durationMs:(this.clock()-f)*1e3}),u});let a=!this.closed&&this.queries.has(n)&&n.epoch===this.camera.state.epoch&&(!n.token||this.valid(n.token));const o=new Map;for(const[c,l]of t){a=c.adapter.isCurrent(l.context)&&a;try{o.set(c,c.observation?(r=(i=l.capture).initialObservation)==null?void 0:r.call(i):void 0)}catch{}}if(a=a&&!this.closed&&this.queries.has(n)&&n.epoch===this.camera.state.epoch&&(!n.token||this.valid(n.token)),a&&n.token)for(const[c,l]of t){c.bound={token:n.token,context:l.context};const u=c===this.camera?"camera.pose":"object.pose",h=s.first,f=s.values[u]??((h==null?void 0:h.name)===u?h.value:void 0);if(f!==void 0){const p=c===this.object&&!c.observation?f:o.get(c);a=c.state.query(n.token,p,!0,!0,!0)&&a}}!a&&n.token&&this.effect(this.camera,this.camera.state.cancel(n.token,"context_changed")),this.reply(n,a?s:void 0),a?this.notify("query_completed",{query:n.query,result:s,durationMs:(this.clock()-e)*1e3}):this.notify("query_failed",{query:n.query,error:"Navigation context unavailable",durationMs:(this.clock()-e)*1e3})}catch(s){this.reply(n),this.notify("query_failed",{query:n.query,error:String(s),durationMs:(this.clock()-e)*1e3})}}needsPivot(){var n,e;return((e=(n=this.navigation)==null?void 0:n.camera)==null?void 0:e.mode)==="orbit"&&!this.camera.pivot}process(n){var t,i;const e=n.token;if(this.valid(e)){if(n.kind==="navigation")this.navigation=n.value,this.notify("navigation_state",{state:n.value});else{const r=n.stream;if(!r.bound)return;if(n.kind==="pivot"){r.pivot=n.value;try{(i=(t=r.adapter)==null?void 0:t.showPivot)==null||i.call(t,r.bound.context,r.pivot)}catch{}}else{if(r===this.camera&&n.kind==="pose"&&this.needsPivot()){this.deferred=n;return}let s;const a=this.performance.stream(e,r===this.object);let o=n.kind==="pose"?a==null?void 0:a.process(n.value.pose.seq,this.clock()):void 0;if(r.observation){const h=this.clock();try{s=r.observation(r.bound.context)}catch{}a==null||a.observation.add(this.clock()-h)}if(!this.valid(e))return;const c=n.value,l=r.state.pendingId;let u=n.kind==="pose"?r.state.process(c,s,this.clock()):r.state.observe(e,s,this.clock());if(n.kind==="pose"&&l!==void 0&&l!==r.state.pendingId&&(c.pose.applied_delta_id??-1)>=l&&this.notify(r===this.object?"object_correction_applied":"correction_applied",{deltaId:l}),u.kind==="apply"){if(!this.valid(e)){r.state.complete(u.write,void 0,this.clock(),!1);return}let h;const f=r.bound.context,p=this.clock();try{h=r.adapter.applyPose(r.bound.context,c.pose,this.navigation,r.pivot)}catch{h={success:!1}}a==null||a.applied(p,this.clock(),h.success,o),this.valid(e),u=r.state.complete(u.write,r===this.object||r.observation?h.realizedPose:void 0,this.clock(),h.success),(this.camera.state.current(e)||u.kind==="cancel")&&this.notify(r===this.object?"object_write":"camera_write",{context:f,desired:c.pose,realized:h.realizedPose,success:h.success}),h.success&&this.notify(r===this.object?"object_applied":"camera_applied",{desired:c.pose,realized:h.realizedPose})}u.kind==="hold"&&r.state.pendingId!==void 0&&this.notify(r===this.object?"object_correction_waiting":"correction_waiting",{deltaId:r.state.pendingId}),(u.kind==="delta"||u.kind==="rebase")&&this.notify(r===this.object?"object_correction_sent":"correction_sent",{deltaId:u.deltaId,difference:u.difference}),this.effect(r,u)}}if(this.deferred&&!this.needsPivot()){const r=this.deferred;this.deferred=void 0,this.enqueue(r)}}}effect(n,e){var i,r,s,a;if(!["cancel","delta","rebase"].includes(e.kind))return;const t=e.token;if(e.kind==="cancel"){this.performance.finish(e.reason,this.clock(),t),(n===this.camera?this.object:this.camera).state.cancel(t,e.reason),t.epoch===this.camera.state.epoch&&this.camera.state.generation===t.generation+1&&(this.cleanup=e.reason),this.queue=this.queue.filter(c=>{var l,u;return((l=c.token)==null?void 0:l.generation)!==t.generation||((u=c.token)==null?void 0:u.epoch)!==t.epoch});for(const c of this.queries)((i=c.token)==null?void 0:i.generation)===t.generation&&c.epoch===t.epoch&&this.reply(c);if(this.notify("cancelled",{gestureId:e.gestureId,reason:e.reason}),!this.closed&&t.epoch===this.camera.state.epoch)try{(r=this.send)==null||r.call(this,{type:"motion_cancel",gesture_id:e.gestureId,reason:e.reason})}catch{}}else{if(!n.state.current(t)||n.state.pendingId!==e.deltaId)return;const o=e.difference;try{if(e.kind==="rebase"){const c=e.pose;(s=this.send)==null||s.call(this,{type:"camera.pose",gesture_id:e.gestureId,t:c.t,r:c.r,...c.fov===void 0?{ortho_extent:c.ortho_extent}:{fov:c.fov}})}if(!n.state.current(t)||n.state.pendingId!==e.deltaId)return;(a=this.send)==null||a.call(this,n===this.object?{type:"object.delta",gesture_id:e.gestureId,delta_id:e.deltaId,t:o.t,r:o.r}:{type:"camera.delta",gesture_id:e.gestureId,delta_id:e.deltaId,t:o.t,r:o.r,...o.scale===void 0?{}:{ortho_extent_scale:o.scale}}),n.state.deadline!==void 0&&this.scheduler.postAt(n.state.deadline,()=>this.effect(n,n.state.expire(t,e.deltaId,this.clock())))}catch{this.effect(n,n.state.sendFailed(t,e.deltaId))}}this.wake()}drain(){var n,e;if(this.scheduled=!1,!this.draining){this.draining=!0;try{for(let t=0;t<this.budget;t++){if(this.cleanup){const s=this.cleanup;this.cleanup=void 0;for(const a of[this.camera,this.object]){if(a.bound)try{(e=(n=a.adapter)==null?void 0:n.showPivot)==null||e.call(n,a.bound.context,void 0)}catch{}a.bound=void 0,a.pivot=void 0}if(this.navigation=void 0,this.deferred=void 0,this.uiGesture!==void 0){const a=this.uiGesture;this.uiGesture=void 0,this.notify("gesture_finished",{gestureId:a,reason:s})}}const i=this.closed?void 0:this.camera.state.gestureId;i!==void 0&&this.uiGesture!==i&&(this.uiGesture=i,this.notify("gesture_started",{gestureId:i}));const r=this.queue.shift();if(!r){this.camera.state.ending&&(this.performance.finish("motion_end",this.clock()),this.camera.state.finish(this.camera.state.token),this.object.state.finish(this.object.state.token),this.cleanup="motion_end");break}r.kind==="query"?this.query(r.value):this.process(r)}}finally{this.performance.flush(),this.draining=!1,this.wake()}}}close(){if(!this.closed){this.performance.finish("closed",this.clock()),this.closed=!0,this.camera.state.connection(),this.object.state.connection();for(const n of this.queries)this.reply(n);this.queue=[],this.cleanup="closed",this.detach(),this.wake()}}},ox=Object.freeze({text:[245,245,245],missing:[255,130,130],skipped:[165,165,165],pass:[80,255,110],selection:[255,150,40],model:[40,210,255],target:[255,70,220],cursor:[255,235,40],center:[100,170,255],object:[255,70,220],sketch:[190,120,255],axis_x:[255,60,60],axis_y:[60,255,60],axis_z:[60,130,255],ray:[175,175,175],correction:[255,210,40]});for(const n of Object.values(ox))Object.freeze(n);function hu(n){const e=n.quaternion,t=Math.hypot(e.x,e.y,e.z),i=t<1e-8?0:2*Math.atan2(t,e.w)/t;return{t:n.position.toArray(),r:[e.x*i,e.y*i,e.z*i]}}function cx(n){return["app.teapot_showdown",...n!=="trans"?["interaction.object.rotate"]:[],...n!=="rot"?["interaction.object.translate"]:[]]}function lx(n){const e=c=>c===n.context()&&n.active(),t=()=>n.active()?n.context():void 0,i=()=>({...hu(n.camera),fov:n.camera.fov*Math.PI/180}),r=()=>n.objectOrigin.clone().applyQuaternion(n.object.quaternion),s=()=>({...hu(n.object),t:r().add(n.object.position).toArray()}),a=()=>{n.object.updateMatrixWorld(!0);const c=new Ri().setFromObject(n.object,!0);return{min:c.min.toArray(),max:c.max.toArray()}},o=(c,l)=>({initialObservation:()=>structuredClone(c),resolve:u=>Object.hasOwn(l,u)?structuredClone(l[u]):gn});return{readCamera:i,readObject:s,camera:{captureContext:t,isCurrent:e,beginQuery(){const c=i(),l=a();return o(c,{"document.id":"teapot-showdown","camera.pose":c,"world.orientation":{forward:[0,0,-1],up:[0,1,0],handedness:"right"},"viewport.aspect":n.camera.aspect,"model.bounds":l,"selection.bounds":l})},applyPose:c=>({success:e(c),realizedPose:i()})},object:{captureContext:t,isCurrent:e,beginQuery(){const c=s();return o(c,{"object.pose":c})},applyPose(c,l){if(!e(c))return{success:!1};const u=new D().fromArray(n.mode()==="rot"?s().t:l.t);if(n.mode()!=="trans"){const h=Math.hypot(...l.r),f=h<1e-8?.5:Math.sin(h/2)/h;n.object.quaternion.set(...l.r.map(p=>p*f),Math.cos(h/2))}return n.object.position.copy(u).sub(r()),n.activity(),{success:!0,realizedPose:s()}}}}}let ta=null;function ux(n){ta=n}const Ho=document.getElementById("chk-attract");Ho.checked=localStorage.getItem("pose-match-attract")!=="0";Ho.addEventListener("change",()=>{localStorage.setItem("pose-match-attract",Ho.checked?"1":"0"),Kr()});const dx=2600,hx=700,fx=3;function Md(n=!1){Ae.sticky=n,Ae.lastActivity=performance.now()-bu}function Kr(){Ae.lastActivity=performance.now(),Ae.active&&(Ae.active=!1,Ae.sticky=!1,document.body.classList.remove("attracting"),tn.visible=!1,zt.color.setHex(14867923),zt.opacity=Qn,Ai(),Ae.savedMode&&Ae.savedMode!==ne.gameMode&&ta(Ae.savedMode))}for(const n of["pointermove","pointerdown","keydown","wheel","touchstart"])addEventListener(n,e=>{Ae.active&&Ae.sticky&&(e.type==="pointermove"||e.type==="wheel")||Kr()},{capture:!0,passive:!0});function fu(n){Ae.phase="move",Ae.phaseT0=n,Ae.from={pos:De.position.clone(),quat:De.quaternion.clone()};const e=Ae.poses[Ae.index];tn.position.copy(e.pos),tn.quaternion.copy(e.quat),tn.visible=!0}const px=n=>n*n*(3-2*n);function mx(n){Ae.active||(Ae.active=!0,Ae.savedMode=ne.gameMode,Ae.shown=0,document.body.classList.add("attracting"),Ae.rng=Ac(Math.floor(n)%1e5*13+777),ta(qi[Math.floor(Ae.rng()*qi.length)]),Ai(),Ae.poses=Or(Ae.rng,Ar),Ae.index=0,fu(n));const e=Ae.poses[Ae.index];if(Ae.phase==="move"){const t=px(Math.min(1,(n-Ae.phaseT0)/dx));De.position.lerpVectors(Ae.from.pos,e.pos,t),De.quaternion.slerpQuaternions(Ae.from.quat,e.quat,t);const i=De.position.distanceTo(e.pos),r=Math.min(1,Math.abs(Fd.copy(De.quaternion).dot(e.quat))),s=2*Math.acos(r),a=!cn()||i<=kr(),o=!cn()||i<=kr()*Ws,c=!Dt()||s<=zr(),l=!Dt()||s<=zr()*Ws;Tc.setColor(a?5615722:o?13214015:16777215);const u=Dt()?c:a,h=Dt()?l:o;zt.color.setHex(u?5615722:h?13214015:14867923),t>=1&&(Ae.phase="hold",Ae.phaseT0=n,zt.opacity=.95)}else if(n-Ae.phaseT0>=hx){if(zt.color.setHex(14867923),zt.opacity=Qn,Ae.index+=1,Ae.shown+=1,Ae.shown%fx===0)ta(qi[(qi.indexOf(ne.gameMode)+1)%qi.length]),Ai(),Ae.poses=Or(Ae.rng,Ar),Ae.index=0;else if(Ae.index>=Ae.poses.length){const t=Ae.poses[Ae.poses.length-1];Ae.poses.push(...Or(Ae.rng,Ar,t.pos,t.quat))}fu(n)}}let On,er,Sd={},Wr=!1,Tr=!1,bi=Promise.resolve();const Ed=location.protocol==="https:"?"wss://localhost:6609":"ws://localhost:6607";function Zr(){Sd={},er==null||er.contextChanged()}function wr(){On==null||On.refreshMetadata().catch(n=>console.debug("OpenAxis metadata refresh interrupted",n))}function bd(){bi=bi.then(()=>{Wr&&!Tr&&On.start().catch(n=>console.error("OpenAxis connection failed",n))}),bi.catch(n=>console.error("OpenAxis resume failed",n))}function Td(){Zr(),bi=bi.then(()=>On==null?void 0:On.stop()),bi.catch(n=>console.error("OpenAxis shutdown failed",n))}function yc(){Wr=!1,Td()}function gx(){On||vx(),Wr=!0,Zr(),wr(),bd()}function _x(n=1200){return new Promise(e=>{let t;try{t=new WebSocket(Ed)}catch{e(!1);return}const i=s=>{clearTimeout(r),t.close(),e(s)},r=setTimeout(()=>i(!1),n);t.onopen=()=>i(!0),t.onerror=()=>i(!1),t.onclose=()=>{clearTimeout(r),e(!1)}})}function vx(){const n=new ex({clientName:"teapot-showdown",url:Ed}),e=lx({camera:He,object:De,objectOrigin:Mc,context:()=>Sd,active:()=>Wr&&!Tr&&We.inputMode==="rotatrix"&&fe.state==="running"&&!$r(),mode:()=>ne.gameMode,activity:Kr});er=new ax(n,e.camera,{observation:e.readCamera,objectAdapter:e.object,objectObservation:e.readObject}),On=new tx(n,{metadata:()=>({capabilities:["navigation"],tags:Wr?cx(ne.gameMode):[],focused:!Tr&&!document.hidden&&document.hasFocus()}),onState(t){Yn("rotatrix","OpenAxis: "+t,t==="ready"?"pill ok":"pill err")}}),window.addEventListener("focus",wr),window.addEventListener("blur",wr),document.addEventListener("visibilitychange",wr),window.addEventListener("pagehide",t=>{Tr=!0,Td(),t.persisted||bi.then(()=>er.close()).catch(console.error)}),window.addEventListener("pageshow",()=>{Tr=!1,bd(),wr()}),window.addEventListener("resize",()=>er.nativeCameraChanged())}const xx=document.getElementById("chk-invert");let wd=0,Ad=0;addEventListener("mousemove",n=>{wd=n.pageX,Ad=n.pageY});let pi=null;const it={animating:!1,controller:null,getCoordinateSystem(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},getFrontView(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},phantomShift(){return pi?new D().setFromMatrixPosition(pi).sub(new D().setFromMatrixPosition(He.matrixWorld)):new D},getConstructionPlane(){return[0,1,0,-it.phantomShift().y]},getFloorPlane(){return[0,1,0,-it.phantomShift().y]},getUnitsToMeters(){return Ch},getPerspective(){return!0},getViewRotatable(){return!0},getFov(){const n=He.fov*Math.PI/180;return 2*Math.atan(Math.tan(n/2)*Math.sqrt(1+He.aspect*He.aspect))},setFov(){},getViewMatrix(){return He.updateMatrixWorld(),(pi??He.matrixWorld).toArray()},setViewMatrix(n){if(We.inputMode!=="spacemouse")return;Kr();const e=new st().fromArray(n),t=(pi??He.matrixWorld).clone().invert();if(pi=e,$r())return;const i=t.multiply(e),r=He.matrixWorld.clone().multiply(i).multiply(He.matrixWorld.clone().invert());if(xx.checked||r.invert(),ne.gameMode==="rot"){wc(new Ut().setFromRotationMatrix(r));return}if(ne.gameMode==="trans"){De.position.applyMatrix4(r);return}De.updateMatrixWorld(),r.multiply(De.matrixWorld).decompose(De.position,De.quaternion,De.scale),De.scale.set(1,1,1)},getViewFrustum(){const n=Math.tan(He.fov*Math.PI/360),e=-He.near*n,t=e*He.aspect;return[t,-t,e,-e,He.near,He.far]},getViewExtents(){return null},setViewExtents(){},getModelExtents(){const n=new Ri().setFromObject(De);return n.translate(it.phantomShift()),[n.min.x,n.min.y,n.min.z,n.max.x,n.max.y,n.max.z]},getPivotPosition(){return Fr().add(it.phantomShift()).toArray()},setPivotPosition(n){console.log("[pose-match] navlib pivot:",n,"bowl:",Fr().add(it.phantomShift()).toArray())},setPivotVisible(){},getSelectionEmpty(){return!0},look:{origin:new D,direction:new D,aperture:.01,selection:!1},setLookFrom(n){it.look.origin.set(n[0],n[1],n[2])},setLookDirection(n){it.look.direction.set(n[0],n[1],n[2])},setLookAperture(n){it.look.aperture=n},setSelectionOnly(n){it.look.selection=n},getLookAt(){const n=it.phantomShift(),t=new nd(it.look.origin.clone().sub(n),it.look.direction,He.near,He.far).intersectObjects([De]);return t.length>0?t[0].point.add(n).toArray():null},getPointerPosition(){const n=Mt.domElement.getBoundingClientRect(),e=new D((wd-n.left)/n.width*2-1,-((Ad-n.top)/n.height)*2+1,-1);return He.updateProjectionMatrix(),He.updateMatrixWorld(),e.unproject(He),e.add(it.phantomShift()).toArray()},setTransaction(){},onStartMotion(){it.animating=!0,pi=null},onStopMotion(){it.animating=!1,pi=null,it.pushPivot()},setActiveCommand(){},setSettingsChanged(){},pushPivot(){it.controller&&it.controller.update3dcontroller({pivot:{position:Fr().add(it.phantomShift()).toArray()}})},onConnect(){Yn("spacemouse","3Dconnexion: connected","pill ok"),it.controller.create3dmouse(Mt.domElement,"OpenAxis Teapot Showdown")},on3dmouseCreated(){Yn("spacemouse","3Dconnexion: 3D mouse ready","pill ok"),it.controller.update3dcontroller({frame:{timingSource:1}})},onDisconnect(n){Yn("spacemouse","3Dconnexion: disconnected","pill err"),console.log("[pose-match] NL-Proxy disconnected:",n)}};async function Rd(){if(!it.controller&&(Yn("spacemouse","3Dconnexion: loading SDK…","pill"),await window._3dxReady,!it.controller)){if(typeof _3Dconnexion>"u"){Yn("spacemouse","3Dconnexion: SDK not loaded","pill err");return}it.controller=new _3Dconnexion(it),Yn("spacemouse","3Dconnexion: connecting…","pill"),it.controller.connect()||Yn("spacemouse","3Dconnexion: driver not found","pill err")}}const xn=new op;xn.background=new Fe(1184016);xn.fog=new lc(1184016,25,60);const Mt=new iv({antialias:!0});Mt.setSize(innerWidth,innerHeight);Mt.setPixelRatio(devicePixelRatio);Mt.outputColorSpace=Xt;document.body.appendChild(Mt.domElement);Mt.domElement.tabIndex=0;Mt.domElement.style.outline="none";const pu=50;function Cd(n){return n>=1?pu:Math.atan(Math.tan(pu*Math.PI/360)/n)*360/Math.PI}const He=new on(Cd(innerWidth/innerHeight),innerWidth/innerHeight,.1,200);He.position.set(0,2.2,12);xn.add(He);xn.add(new yp(30,30,4867650,2828325));xn.add(new vp(16777215,.45));const Pd=new _p(16777215,1.4);Pd.position.set(6,10,7);xn.add(Pd);xn.add(new pp(11774358,3682346,.5));const It=new rv(.9,8);It.computeBoundingBox();{const n=It.attributes.position;let e=0,t=0;for(let c=0;c<n.count;c++)e=Math.max(e,n.getX(c)),t=Math.min(t,n.getX(c));const i=new Fe("#4d5878"),r=new Fe("#a2714e"),s=new Fe(1,1,1),a=new Float32Array(n.count*3),o=new Fe;for(let c=0;c<n.count;c++){const l=n.getX(c);o.copy(s),l>.55*e?o.lerp(i,Math.min(1,(l-.55*e)/(.2*e))):l<.55*t&&o.lerp(r,Math.min(1,(l-.55*t)/(.2*t))),a.set([o.r,o.g,o.b],c*3)}It.setAttribute("color",new kt(a,3))}{const n=It.index,e=It.attributes.position,t=It.attributes.normal,i=It.boundingBox,r=i.min.y+.1*(i.max.y-i.min.y),s=c=>e.getY(c)<r&&t.getY(c)<-.5,a=[],o=[];for(let c=0;c<n.count;c+=3){const l=n.getX(c),u=n.getX(c+1),h=n.getX(c+2);(s(l)&&s(u)&&s(h)?o:a).push(l,u,h)}It.setIndex([...a,...o]),It.clearGroups(),It.addGroup(0,a.length,0),It.addGroup(a.length,o.length,1)}const Mc=new D(0,(It.boundingBox.min.y+It.boundingBox.max.y)/2,0);function Ld(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");t.fillStyle="#e9e3d7",t.fillRect(0,0,512,512);const i=Ac(7);for(let r=0;r<400;r++){t.fillStyle=i()>.5?"#d6cdbc":"#f4efe6";const s=2+i()*5;t.beginPath(),t.arc(i()*512,i()*512,s,0,Math.PI*2),t.fill()}return{c:e,g:t,size:512}}function Id(n){const e=new dp(n);return e.colorSpace=Xt,e}const Dd=Id(Ld().c);function yx(){const{c:n,g:e,size:t}=Ld();e.fillStyle="#9d9280",e.fillRect(0,.46*t,t,.08*t),e.fillRect(0,.13*t,t,.02*t);for(let i=0;i<3;i++)e.fillRect((i/3+.15)*t,.15*t,.04*t,.31*t);return Id(n)}const Ud=yx(),De=new Qt(It,[new Js({map:Dd,vertexColors:!0,roughness:.4,metalness:.15}),new Js({map:Ud,vertexColors:!0,roughness:.85,metalness:0})]);xn.add(De);function Fr(){return De.updateMatrixWorld(),De.localToWorld(Mc.clone())}const Qn=.5,zt=new Js({map:Dd,vertexColors:!0,color:14867923,emissive:2762274,transparent:!0,opacity:Qn,roughness:.8,depthWrite:!1}),Sc=new Qt(It,new la({colorWrite:!1,transparent:!0}));Sc.renderOrder=1;Sc.raycast=()=>{};const Ec=new Js({map:Ud,vertexColors:!0,emissive:2762274,transparent:!0,opacity:Qn,roughness:.9,depthWrite:!1});Ec.color=zt.color;const bc=new Qt(It,[zt,Ec]);bc.onBeforeRender=()=>{Ec.opacity=zt.opacity};bc.renderOrder=2;const tn=new ji;tn.add(Sc,bc);xn.add(tn);function Nd(n,e,t=!1){const i=new Qt(new hc(.3,.38,40),new la({color:n,transparent:!0,opacity:e,depthWrite:!1,side:Mn}));i.rotation.x=-Math.PI/2;const r=new Qu(new ln().setFromPoints([new D,new D(0,1,0)]),new dc({color:n,transparent:!0,opacity:e*.5})),s=new ji;return s.add(i,r),s.visible=!1,xn.add(s),{group:s,stem:r,probeStem:t,top:0,atPos:new D(NaN,NaN,NaN),atQuat:new Ut,setColor(a){i.material.color.setHex(a),r.material.color.setHex(a)}}}const Tc=Nd(16777215,.85),Mx=Nd(14867923,.45,!0),mu=new nd,Sx=new D,Ex=new D(0,1,0),Ls=[];function bx(n,e,t){return n.probeStem?(e.position.equals(n.atPos)&&e.quaternion.equals(n.atQuat)||(Ls.length=0,mu.set(Sx.set(t.x,0,t.z),Ex),mu.intersectObject(e,!0,Ls),n.top=Ls.length?Ls[0].point.y:t.y,n.atPos.copy(e.position),n.atQuat.copy(e.quaternion)),n.top):t.y}function gu(n,e,t){if(n.group.visible=t,!t)return;e.updateMatrixWorld();const i=e.localToWorld(Mc.clone());n.group.position.set(i.x,.02,i.z),n.stem.scale.y=Math.max(.01,bx(n,e,i)-.02)}const Vo=new D(0,2.2,4);function Ai(){De.position.copy(Vo),De.quaternion.identity(),We.inputMode==="rotatrix"&&Zr(),We.inputMode==="spacemouse"&&it.pushPivot()}Ai();function wc(n){const e=Fr();De.position.sub(e).applyQuaternion(n).add(e),De.quaternion.premultiply(n)}const Fd=new Ut;function Ac(n){let e=n;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}const Tx=21*Math.PI/180,wx=1.3,Ax=()=>Tx+2*zr(),Rx=()=>wx+2*kr();function Or(n,e,t=Vo,i=new Ut){const r=[];let s=t,a=i;for(let o=0;o<e;o++){let c,l;for(let u=0;u<100;u++){if(c=cn()?new D((n()*2-1)*3.2,.9+n()*2.8,(n()*2-1)*2.2):Vo.clone(),Dt()){const _=new D(n()*2-1,n()*2-1,n()*2-1).normalize(),v=(40+n()*140)*Math.PI/180;l=new Ut().setFromAxisAngle(_,v)}else l=new Ut;const h=Math.min(1,Math.abs(l.dot(a))),f=!Dt()||2*Math.acos(h)>=Ax(),p=!cn()||c.distanceTo(s)>=Rx();if(f&&p)break}r.push({pos:c,quat:l}),s=c,a=l}return r}const Tn=n=>n.startsWith("mouse")?"mouse":n,Od=n=>`<span class="dot" style="background:${tr[Tn(n.input)].hex}"></span>`,Bd=n=>{var e;return((e=tr[Tn(n.input)])==null?void 0:e.label)??n.input},kd=()=>new Set((localStorage.getItem("pose-match-lb-exclude")||"").split(",").map(n=>n.trim().toLowerCase()).filter(Boolean));function Rc(n,e){const t=new Date().setHours(0,0,0,0),i=kd(),r=aa().filter(a=>a.mode===ne.gameMode&&a.limit===ne.timeLimit&&(a.tol??"normal")===ne.tolLevel&&(ne.lbRange!=="today"||a.ts>=t)&&!i.has((a.name||"").trim().toLowerCase())&&n(a)).sort(zd);if(!ne.booth)return r;const s=new Set;return r.filter(a=>{const o=(a.name||"").trim().toLowerCase();if(!o)return a.ts===e;const c=`${o}|${Tn(a.input)}`;return s.has(c)?!1:(s.add(c),!0)})}const zd=(n,e)=>e.poses-n.poses||(n.ms??1/0)-(e.ms??1/0)||n.ts-e.ts,Hd=n=>Rc(e=>Tn(e.input)===Tn(We.inputMode),n),Cx=n=>ne.booth?`<td>${n.name||"—"}</td>`:`<td>${new Date(n.ts).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</td>`;function Go(n,e,t){return n.map((i,r)=>`<tr${i.ts===e?' class="me"':""}>
      <td class="rank">${r+1}</td>${Cx(i)}
      <td>${i.poses} match${i.poses===1?"":"es"}${i.ms!=null?` · ${(i.ms/1e3).toFixed(1)}s`:""}</td>
      <td>${Od(i)}${t(i)}</td></tr>`).join("")}function Cc(n){const e=Hd(n).slice(0,10),t=Rc(()=>!0,n).slice(0,10);document.getElementById("lb-title").textContent=`Best scores ${wu()} · ${qs[ne.gameMode]}`,document.getElementById("lb-title-all").textContent=`All devices · ${qs[ne.gameMode]}`,document.getElementById("lb-sub").textContent=Wo(tr[Tn(We.inputMode)].label),document.getElementById("lb-sub-all").textContent=Wo(null),document.getElementById("lb-board").innerHTML=Go(e,n,()=>""),document.getElementById("lb-board-all").innerHTML=Go(t,n,Bd),document.getElementById("lb-wrap").classList.toggle("hidden",!t.length)}const Wo=n=>[n,`time: ${ne.timeLimit}s`,`tolerance: ${ne.tolLevel}`].filter(Boolean).join(" · ");function ri(){lr("start-bars"),na()}function na(){document.getElementById("start-board").classList.remove("hidden");const e=Rc(i=>!We.startBoardHover||Tn(i.input)===We.startBoardHover).slice(0,10);document.getElementById("start-board-title").textContent=`Best scores ${wu()} · ${qs[ne.gameMode]}`,document.getElementById("start-board-sub").textContent=Wo(We.startBoardHover?tr[We.startBoardHover].label:null);const t=Array.from({length:Math.max(0,10-e.length)},(i,r)=>`<tr class="lb-empty"><td class="rank">${e.length+r+1}</td><td>—</td><td></td><td></td></tr>`).join("");document.getElementById("start-board-table").innerHTML=Go(e,null,Bd)+t}function lr(n){const e=new Map,t=kd();for(const f of Br()){if(f.mode!==ne.gameMode||(f.tol??"normal")!==ne.tolLevel||!f.motions.length)continue;const p=(f.name||"").trim().toLowerCase();if(ne.graphPlayer){if(p!==ne.graphPlayer.toLowerCase())continue}else if(t.has(p))continue;const _=Tn(f.input);e.has(_)||e.set(_,[]),e.get(_).push(f.motions.map(v=>v.ms))}const i=[...e.entries()].map(([f,p])=>{let _=p;ne.topPct&&(_=[...p].sort((m,d)=>pa(m)-pa(d)).slice(0,Math.max(1,Math.ceil(p.length*ne.topPct/100))));const v=_.flat();return{input:f,n:v.length,med:pa(v)}}).sort((f,p)=>f.med-p.med),r=document.getElementById(n),s=i.length>0||!!ne.graphPlayer||Br().length>0;if(r.classList.toggle("hidden",!s),!s)return;const a=i.length?Math.max(...i.map(f=>f.med)):0,o=i[0];r.innerHTML=`<div class="lb-title">Median motion time · ${qs[ne.gameMode]}</div><div class="lb-sub">tolerance: ${ne.tolLevel}${ne.topPct?` · top ${ne.topPct}% of sessions`:""}${ne.graphPlayer?` · player: ${ne.graphPlayer}`:""}</div>`+(i.length?"":`<div class="mbar-empty">${ne.graphPlayer?"no named sessions for this player yet":"no sessions for this mode / tolerance yet"}</div>`)+i.map(f=>{const p=i.length<2?"":f===o?'<span class="mbar-delta fastest">fastest</span>':`<span class="mbar-delta">+${Math.round((f.med/o.med-1)*100)}%</span>`;return`<div class="mbar-row">
        <span class="mbar-label">${Od(f)}${tr[f.input].label} <span class="mbar-n">&times;${f.n}</span></span>
        <span class="mbar-track"><span class="mbar-bar" style="width:${(f.med/a*100).toFixed(1)}%;background:${tr[Tn(f.input)].hex}"></span></span>
        <span class="mbar-val">${(f.med/1e3).toFixed(1)}s${p}</span>
      </div>`}).join("")+`<div class="mbar-filter"><span class="mbar-filter-label">sessions:</span><button data-toppct="0"${ne.topPct===0?' class="active"':""}>All</button><span class="mbar-top${ne.topPct?" active":""}">Top&nbsp;<input class="mbar-custom" type="number" min="1" max="99" value="${ne.topPct||ne.lastTopN}" />%</span><input class="mbar-player${ne.graphPlayer?" active":""}" type="text" maxlength="8" placeholder="player" value="${ne.graphPlayer.replace(/"/g,"&quot;")}" /></div><div class="mbar-foot"><a class="stats-link" href="stats.html">view stats &rarr;</a></div>`,r.querySelector(".stats-link").addEventListener("click",Xs),r.querySelector("[data-toppct]").addEventListener("click",f=>{f.stopPropagation(),_u(0)});const c=r.querySelector(".mbar-top"),l=r.querySelector(".mbar-custom"),u=()=>{const f=Math.round(+l.value);Number.isFinite(f)&&f>=1&&f<=99&&_u(f)};c.addEventListener("click",f=>{f.stopPropagation(),f.target!==l&&u()}),l.addEventListener("change",u);const h=r.querySelector(".mbar-player");h.addEventListener("click",Xs),h.addEventListener("change",()=>{ne.graphPlayer=h.value.trim(),localStorage.setItem("pose-match-graph-player",ne.graphPlayer),lr("start-bars"),lr("result-bars")})}function _u(n){ne.topPct=n,n&&(ne.lastTopN=n),localStorage.setItem("pose-match-top-pct",String(n)),lr("start-bars"),lr("result-bars")}const ia=document.getElementById("staff-names");ia.value=localStorage.getItem("pose-match-staff")||"";ia.addEventListener("input",()=>{localStorage.setItem("pose-match-staff",ia.value)});const Px=()=>ia.value.split(",").map(n=>n.trim().slice(0,8)).filter(Boolean),qo=document.getElementById("lb-exclude");qo.value=localStorage.getItem("pose-match-lb-exclude")||"";qo.addEventListener("input",()=>{localStorage.setItem("pose-match-lb-exclude",qo.value),ri()});function Vd(){const n=document.getElementById("lb-claim"),e=Px();if(n.classList.toggle("hidden",!e.length||!wt.lastRun),!(!e.length||!wt.lastRun)){n.innerHTML='<span class="lb-claim-label">claim:</span>'+e.map(t=>`<button data-claim="${t.replace(/"/g,"&quot;")}"${wt.lastRun.name===t?' class="active"':""}>${t}</button>`).join("");for(const t of n.querySelectorAll("[data-claim]"))t.addEventListener("click",i=>{i.stopPropagation(),Ox(t.dataset.claim)})}}const vu=document.getElementById("timer"),Lx=document.getElementById("pose-count"),Is=document.getElementById("delta"),Gd=document.getElementById("overlay-start"),qr=document.getElementById("overlay-results"),Hs=document.getElementById("lb-name"),Ix=document.getElementById("lb-entry");function si(){De.visible=!(We.spaceHeld||fe.state==="running"&&fe.phase==="preview")}function Dx(){const n=fe.poses[fe.poses.length-1];fe.poses.push(...Or(fe.rng,Ar,n.pos,n.quat))}function Ux(){fe.rng=Ac(Math.floor(performance.now())%1e5*7+12345),fe.poses=Or(fe.rng,Ar),fe.index=0,fe.motions=[],fe.dwellStart=null,fe.startTime=performance.now(),fe.poseStartTime=fe.startTime,fe.state="running",We.inputMode==="rotatrix"&&gx(),Ai(),qd(),Gd.classList.add("hidden"),qr.classList.add("hidden"),document.body.classList.toggle("playing",We.inputMode==="rotatrix"),document.body.classList.add("ingame"),Mt.domElement.focus()}function Wd(n,e){return{t:n.toArray().map(t=>+t.toFixed(4)),q:e.toArray().map(t=>+t.toFixed(5))}}function qd(){const n=fe.poses[fe.index];tn.position.copy(n.pos),tn.quaternion.copy(n.quat),tn.visible=!0,zt.color.setHex(14867923),zt.opacity=Qn,fe.segmentFrom=Wd(De.position,De.quaternion),fe.phase="preview",We.inputMode==="rotatrix"&&Zr(),fe.previewStart=performance.now(),si()}function Nx(n){const e=Math.max(0,n)/1e3,t=Math.floor(e/60),i=e-t*60;return`${t}:${i.toFixed(1).padStart(4,"0")}`}let xu=null;function Fx(){clearTimeout(xu),qr.classList.remove("armed"),xu=setTimeout(()=>qr.classList.add("armed"),Tu)}function yu(n){fe.state="done",fe.doneAt=n,Fx(),tn.visible=!1,document.body.classList.remove("playing","ingame"),We.inputMode==="rotatrix"&&yc();const e=n-fe.startTime,t=fe.motions.length,i=+fe.motions.reduce((l,u)=>l+u.ms,0).toFixed(1);Kr(),document.getElementById("total").textContent=t?`${t} match${t===1?"":"es"} in ${(i/1e3).toFixed(1)}s`:"0 matches";const r=Date.now(),s=Br();s.push({ts:r,input:We.inputMode,mode:ne.gameMode,tol:ne.tolLevel,limit:ne.timeLimit,total:+e.toFixed(1),motions:fe.motions}),localStorage.setItem(Ko,JSON.stringify(s));const a={name:"",poses:t,ms:i,input:We.inputMode,mode:ne.gameMode,tol:ne.tolLevel,limit:ne.timeLimit,ts:r},o=aa(),c=[...Hd(a.ts),a].sort(zd);o.push(a),localStorage.setItem(Zo,JSON.stringify(o)),wt.pendingScore=ne.booth&&c.indexOf(a)<10?a:null,wt.lastRun=a,Hs.value="",Cc(a.ts),document.getElementById("lb-entry").classList.toggle("hidden",!wt.pendingScore),Vd(),lr("result-bars"),qr.classList.remove("hidden"),wt.pendingScore&&(Hs.focus(),Hs.select())}function Ox(n){if(!wt.lastRun)return;wt.lastRun.name=n;const e=aa(),t=e.find(s=>s.ts===wt.lastRun.ts);t&&(t.name=n),localStorage.setItem(Zo,JSON.stringify(e));const i=Br(),r=i.find(s=>s.ts===wt.lastRun.ts);r&&(r.name=n,localStorage.setItem(Ko,JSON.stringify(i))),wt.pendingScore=null,document.getElementById("lb-entry").classList.add("hidden"),Cc(wt.lastRun.ts),Vd()}function Xd(){if(!wt.pendingScore)return;const n=Hs.value.trim().slice(0,8),e=aa(),t=e.find(s=>s.ts===wt.pendingScore.ts);t&&(t.name=n),localStorage.setItem(Zo,JSON.stringify(e));const i=Br(),r=i.find(s=>s.ts===wt.pendingScore.ts);r&&(r.name=n||void 0,localStorage.setItem(Ko,JSON.stringify(i))),Cc(wt.pendingScore.ts),wt.pendingScore=null,Ix.classList.add("hidden")}function Bx(){const n=fe.poses[fe.index],e=De.position.distanceTo(n.pos),t=Math.min(1,Math.abs(Fd.copy(De.quaternion).dot(n.quat))),i=2*Math.acos(t);return{dist:e,angle:i}}function kx(n){if(fe.state!=="running")return;Lx.textContent=`${fe.index} matched`;const e=p=>Nx(ne.timeLimit*1e3-p);if(fe.phase==="preview"){const p=n-fe.startTime;if(p>=ne.timeLimit*1e3){yu(n);return}vu.textContent=e(p),Is.textContent="memorize the target…",Is.className="delta",n-fe.previewStart>=Th&&(fe.poseStartTime=n,fe.phase="active",si(),We.inputMode==="rotatrix"&&Zr());return}const t=n-fe.startTime;if(t>=ne.timeLimit*1e3){yu(n);return}vu.textContent=e(t);const{dist:i,angle:r}=Bx(),s=!cn()||i<=kr(),a=!cn()||i<=kr()*Ws,o=!Dt()||r<=zr(),c=!Dt()||r<=zr()*Ws,l=s&&o,u=a&&c;Is.textContent="Δ "+[cn()?`${i.toFixed(2)}u`:null,Dt()?`${(r*180/Math.PI).toFixed(0)}°`:null].filter(Boolean).join("  "),Is.className="delta"+(l?" locked":u?" near":""),Tc.setColor(s?5615722:a?13214015:16777215);const h=Dt()?o:s,f=Dt()?c:a;if(l){fe.dwellStart===null&&(fe.dwellStart=n);const p=Math.min(1,(n-fe.dwellStart)/Rh);if(zt.color.setHex(5615722),zt.opacity=Qn+(.95-Qn)*p,p>=1){const _=fe.poses[fe.index];fe.motions.push({from:fe.segmentFrom,to:Wd(_.pos,_.quat),ms:+(n-fe.poseStartTime).toFixed(1)}),fe.poseStartTime=n,fe.dwellStart=null,fe.index+=1,fe.index>=fe.poses.length&&Dx(),qd()}}else fe.dwellStart=null,zt.color.setHex(h?5615722:f?13214015:14867923),zt.opacity=Qn}function $d(){fe.state==="running"&&(fe.state="idle",tn.visible=!1,document.body.classList.remove("playing","ingame"),si(),We.inputMode==="rotatrix"&&yc(),qr.classList.add("hidden"),Gd.classList.remove("hidden"),ri())}const zx=document.getElementById("chk-revwheel"),ra=.011,Mu=.006;let Pc=!1,Xo=!1,Ki=!1,$o=0,jo=0,qt=null;const Hx=2;function jd(n,e,t,i){const r=(n-t[0])/i,s=(t[1]-e)/i,a=r*r+s*s,o=a<=.5?Math.sqrt(1-a):1/(2*Math.sqrt(a));return new D(r,s,o).normalize()}function Lc(n){const e=Fr(),t=e.clone().project(He),i=[(t.x+1)/2*innerWidth,(1-t.y)/2*innerHeight],r=He.position.distanceTo(e),s=innerHeight/2/(r*Math.tan(He.fov*Math.PI/360)),a=Gu.clamp(2.2*s,90,.45*Math.min(innerWidth,innerHeight));qt={center:i,radius:a,pivot:e,v0:jd(n.clientX,n.clientY,i,a),quat0:De.quaternion.clone(),pos0:De.position.clone()}}function Yd(n,e){const t=jd(n,e,qt.center,qt.radius),i=new D().crossVectors(qt.v0,t);if(i.lengthSq()<1e-14)return;const r=Hx*Math.acos(Gu.clamp(qt.v0.dot(t),-1,1));i.normalize().applyQuaternion(He.quaternion);const s=new Ut().setFromAxisAngle(i,r);De.quaternion.copy(s).multiply(qt.quat0),De.position.copy(qt.pos0).sub(qt.pivot).applyQuaternion(s).add(qt.pivot)}const Kd=()=>We.inputMode==="mouse"||We.inputMode==="mouse-holroyd"||We.inputMode==="touch",Xr=()=>We.inputMode==="mouse-holroyd"||We.inputMode==="touch"&&ne.mouseRotType==="trackball",Bn=new Map;let Yo=0;const Ic=n=>n.pointerType!=="mouse";function Su(){return 2*He.position.distanceTo(De.position)*Math.tan(He.fov*Math.PI/360)/innerHeight}function Zd(){const[n,e]=[...Bn.values()];return Math.hypot(n.x-e.x,n.y-e.y)}function Jd(){if(qt=null,Bn.size===1&&Dt()&&Xr()){const[n]=Bn.values();Lc({clientX:n.x,clientY:n.y})}else Bn.size===2&&(Yo=Zd())}function Vx(n){const e=Bn.get(n.pointerId);if(!e)return;const t=e.x,i=e.y;if(e.x=n.clientX,e.y=n.clientY,fe.state!=="running"||$r())return;const r=new D().setFromMatrixColumn(He.matrixWorld,0),s=new D().setFromMatrixColumn(He.matrixWorld,1);if(Bn.size===1){if(Dt())if(Xr())qt&&Yd(e.x,e.y);else{const l=new Ut().setFromAxisAngle(s,(e.x-t)*ra).multiply(new Ut().setFromAxisAngle(r,(e.y-i)*ra));wc(l)}else{if(!cn())return;const l=Su();De.position.addScaledVector(r,(e.x-t)*l),De.position.addScaledVector(s,-(e.y-i)*l)}return}if(!cn())return;const a=Su();De.position.addScaledVector(r,(e.x-t)/2*a),De.position.addScaledVector(s,-(e.y-i)/2*a);const o=Zd(),c=new D().setFromMatrixColumn(He.matrixWorld,2).negate();De.position.addScaledVector(c,-(o-Yo)*a),Yo=o}Mt.domElement.addEventListener("contextmenu",n=>n.preventDefault());Mt.domElement.addEventListener("pointerdown",n=>{if(Kd()){if(Ic(n)){if(Bn.size>=2)return;Bn.set(n.pointerId,{x:n.clientX,y:n.clientY}),Mt.domElement.setPointerCapture(n.pointerId),Jd();return}Pc=!0,Xo=n.button===2,Ki=Xo||n.shiftKey||!Dt(),$o=n.clientX,jo=n.clientY,!Ki&&Xr()&&Lc(n),Mt.domElement.setPointerCapture(n.pointerId)}});function Qd(n){if(Ic(n)){Bn.delete(n.pointerId)&&Jd();return}Pc=!1,qt=null}Mt.domElement.addEventListener("pointerup",Qd);Mt.domElement.addEventListener("pointercancel",Qd);Mt.domElement.addEventListener("pointermove",n=>{if(Ic(n)){Vx(n);return}if(!Pc||fe.state!=="running"||$r())return;const e=Xo||n.shiftKey||!Dt();e!==Ki&&(Ki=e,qt=null,!Ki&&Xr()&&Lc(n));const t=n.clientX-$o,i=n.clientY-jo;$o=n.clientX,jo=n.clientY;const r=new D().setFromMatrixColumn(He.matrixWorld,0),s=new D().setFromMatrixColumn(He.matrixWorld,1);if(Ki){if(!cn())return;De.position.addScaledVector(r,t*Mu),De.position.addScaledVector(s,-i*Mu)}else if(Dt())if(Xr())qt&&Yd(n.clientX,n.clientY);else{const a=new Ut().setFromAxisAngle(s,t*ra).multiply(new Ut().setFromAxisAngle(r,i*ra));wc(a)}});Mt.domElement.addEventListener("wheel",n=>{if(!Kd()||fe.state!=="running"||!cn()||$r())return;n.preventDefault();const e=new D().setFromMatrixColumn(He.matrixWorld,2).negate(),t=zx.checked?-1:1,i=n.deltaY||(n.shiftKey?n.deltaX:0);De.position.addScaledVector(e,i*.004*t)},{passive:!1});const eh=new Map;let ei=null;const Gx="[data-modal], [data-setup]";document.addEventListener("click",n=>{const e=n.target.closest("[data-modal]");e&&Wx(e.dataset.modal)});function Jr(n,e){eh.set(n,e)}const th=()=>ei;function nh(n){pr(),ei=n,document.body.classList.add("modal-open",`modal-${n}`)}function Wx(n){ei===n?pr():nh(n)}function pr(){ei&&(document.body.classList.remove("modal-open",`modal-${ei}`),ei=null)}document.addEventListener("click",n=>{ei&&(n.target.closest(eh.get(ei))||n.target.closest(Gx)||pr())});const Dc=matchMedia("(pointer: coarse)").matches;Dc&&(document.body.classList.add("touch"),document.querySelector('[data-input="mouse"] .input-label').textContent="Touch");window._3dxReady.then(n=>{n||document.getElementById("sdk-note").classList.remove("hidden")});const ih=document.getElementById("chk-invert"),rh=document.getElementById("chk-revwheel");for(const[n,e]of[[ih,"pose-match-invert-3dx"],[rh,"pose-match-revwheel"]])n.checked=localStorage.getItem(e)==="1",n.addEventListener("change",()=>{localStorage.setItem(e,n.checked?"1":"0")});const zn=document.getElementById("overlay-start"),Uc=document.getElementById("overlay-results"),qx=document.getElementById("lb-name"),Vs=document.getElementById("chk-booth"),sh=document.getElementById("booth-extras");Vs.checked=ne.booth;sh.classList.toggle("hidden",!ne.booth);Vs.addEventListener("change",()=>{ne.booth=Vs.checked,localStorage.setItem("pose-match-booth",Vs.checked?"1":"0"),sh.classList.toggle("hidden",!ne.booth),ri()});Jr("setup",".setup-panel");Jr("about",".setup-panel");Jr("options",".settings");Jr("scores","#start-board");Jr("stats","#start-bars");document.getElementById("panel-close").addEventListener("click",pr);function ah(n){for(const e of document.querySelectorAll("[data-setup-section]"))e.classList.toggle("hidden",e.dataset.setupSection!==n);nh("setup")}for(const n of zn.querySelectorAll("[data-setup]"))n.addEventListener("click",()=>ah(n.dataset.setup));document.getElementById("tc-exit").addEventListener("click",$d);document.getElementById("tc-reset").addEventListener("click",Ai);const oh=document.getElementById("tc-peek");oh.addEventListener("pointerdown",n=>{n.preventDefault(),We.spaceHeld=!0,si()});for(const n of["pointerup","pointercancel","pointerleave"])oh.addEventListener(n,()=>{We.spaceHeld=!1,si()});const ti={spacemouse:null,rotatrix:null};function Nc(){for(const n of["spacemouse","rotatrix"]){const e=zn.querySelector(`[data-input="${n}"]`);e.classList.toggle("unavailable",ti[n]!==!0),e.title=ti[n]===!0?"":ti[n]===null?"connecting…":"not detected — click for setup instructions"}}Nc();addEventListener("backend-status",n=>{n.detail.backend==="spacemouse"&&(n.detail.cls.includes("ok")?ti.spacemouse=!0:n.detail.cls.includes("err")&&(ti.spacemouse=!1),Nc())});Rd();const ch=async()=>{zn.classList.contains("hidden")||(ti.rotatrix=await _x(),Nc())};ch();setInterval(ch,5e3);function Xx(n){if(pr(),n in ti&&ti[n]!==!0){ah(n);return}n==="mouse"&&Dc?n="touch":n==="mouse"&&ne.mouseRotType==="trackball"&&ne.gameMode!=="trans"&&(n="mouse-holroyd"),We.inputMode==="rotatrix"&&n!=="rotatrix"&&yc(),We.inputMode=n,n==="spacemouse"&&Rd();const e=Au[n];Rr.textContent=e.text,Rr.className=e.cls,Rr.classList.remove("hidden"),uh(),Ux()}for(const n of zn.querySelectorAll("[data-input]"))n.addEventListener("click",()=>Xx(n.dataset.input)),n.addEventListener("mouseenter",()=>{We.startBoardHover=Tn(n.dataset.input),na()}),n.addEventListener("mouseleave",()=>{We.startBoardHover=null,na()});const Qr=(n,e,t)=>{for(const i of n)i.classList.toggle("active",i.dataset[e]===String(t))},lh=zn.querySelectorAll("[data-mode]"),Eu=document.getElementById("hint");function Fc(n){ne.gameMode=n,Ae.active||localStorage.setItem("pose-match-mode",n),Qr(lh,"mode",n),uh(),ri()}function uh(){if(Dc){Eu.innerHTML=(ne.gameMode==="trans"?["drag: move","two fingers: pan","pinch: depth"]:ne.gameMode==="rot"?["drag: rotate"]:["drag: rotate","two fingers: pan","pinch: depth"]).join(" &middot; ");return}const e=We.inputMode==="mouse"||We.inputMode==="mouse-holroyd"?ne.gameMode==="trans"?["drag: move","wheel: depth"]:["drag: rotate","shift/right-drag: pan","wheel: depth"]:We.inputMode==="rotatrix"?ne.gameMode==="trans"?["ball: move"]:ne.gameMode==="rot"?["ball: rotate"]:["ball: rotate","Shift + ball: move"]:[];Eu.innerHTML=[...e,"space: peek at target","R: reset teapot","Esc: cancel"].join(" &middot; ")}Fc(ne.gameMode);for(const n of lh)n.addEventListener("click",()=>Fc(n.dataset.mode));const dh=zn.querySelectorAll("[data-tol]");function Oc(n){ne.tolLevel=n,localStorage.setItem("pose-match-tol",n),Qr(dh,"tol",n),ri()}Oc(ne.tolLevel);for(const n of dh)n.addEventListener("click",()=>Oc(n.dataset.tol));const hh=zn.querySelectorAll("[data-limit]");function Bc(n){ne.timeLimit=n,localStorage.setItem("pose-match-limit",String(n)),Qr(hh,"limit",n),ri()}Bc(ne.timeLimit);for(const n of hh)n.addEventListener("click",()=>Bc(+n.dataset.limit));const fh=zn.querySelectorAll("[data-mouserot]");function kc(n){ne.mouseRotType=n,localStorage.setItem("pose-match-mouserot",n),Qr(fh,"mouserot",n)}kc(ne.mouseRotType);for(const n of fh)n.addEventListener("click",()=>kc(n.dataset.mouserot));const ph=document.querySelectorAll("#lb-range [data-range]");function zc(n){ne.lbRange=n,localStorage.setItem("pose-match-lb-range",n),Qr(ph,"range",n),na()}zc(ne.lbRange);for(const n of ph)n.addEventListener("click",()=>zc(n.dataset.range));const Gs=document.getElementById("chk-attract");document.getElementById("btn-defaults").addEventListener("click",()=>{Oc("loose"),Bc(30),kc("trackball");for(const n of[ih,rh])n.checked&&(n.checked=!1,n.dispatchEvent(new Event("change")));Gs.checked||(Gs.checked=!0,Gs.dispatchEvent(new Event("change"))),zc("today"),ri()});function mh(){fe.state==="done"&&performance.now()-fe.doneAt<Tu||(Uc.classList.add("hidden"),zn.classList.remove("hidden"),ri())}Uc.addEventListener("click",mh);const $x=document.getElementById("lb-entry");$x.addEventListener("click",Xs);document.getElementById("lb-board").addEventListener("click",Xs);document.getElementById("lb-save").addEventListener("click",Xd);qx.addEventListener("keydown",n=>{n.key==="Enter"&&Xd()});addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement&&(n.target.type==="text"||n.target.type==="number"))){if(n.key==="Escape"&&th()){pr();return}if((n.key==="Enter"||n.key==="Escape")&&fe.state==="done"&&!Uc.classList.contains("hidden")){mh();return}if(n.key==="Escape"&&fe.state==="idle"){Md(!0);return}(n.key==="r"||n.key==="R")&&Ai(),n.key==="Escape"&&$d(),n.code==="Space"&&fe.state==="running"&&(n.preventDefault(),We.spaceHeld=!0,si())}});addEventListener("keyup",n=>{n.code==="Space"&&(We.spaceHeld=!1,si())});addEventListener("blur",()=>{We.spaceHeld=!1,si()});ux(Fc);Md(!0);function gh(n){requestAnimationFrame(gh),it.animating&&it.controller&&it.controller.update3dcontroller({frame:{time:n}}),kx(performance.now()),fe.state!=="running"&&Gs.checked&&!th()&&performance.now()-Ae.lastActivity>bu&&mx(performance.now());const e=(fe.state==="running"||Ae.active)&&cn();gu(Tc,De,e&&De.visible),gu(Mx,tn,e&&tn.visible),Mt.render(xn,He)}requestAnimationFrame(gh);addEventListener("resize",()=>{Mt.setSize(innerWidth,innerHeight),He.aspect=innerWidth/innerHeight,He.fov=Cd(He.aspect),He.updateProjectionMatrix()});
