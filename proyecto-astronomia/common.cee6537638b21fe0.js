"use strict";(self.webpackChunkProyectoAstronomia=self.webpackChunkProyectoAstronomia||[]).push([[592],{6404:(_,c,r)=>{r.d(c,{Z:()=>u});var o=r(520),i=r(9019),a=r(1223);let u=(()=>{class e{constructor(t){this.http=t,this.URLBase=i.N.URLBase}obtenerUsuario(){const t=`${this.URLBase}/user`,s=(new o.WM).set("Authorization",`Bearer ${localStorage.getItem("jwt")}`||"");return this.http.get(t,{headers:s})}modificarUsuario(t){const s=`${this.URLBase}/user`,n=(new o.WM).set("Authorization",`Bearer ${localStorage.getItem("jwt")}`||"");return n.set("Access-Control-Allow-Origin","http://localhost:8080"),this.http.put(s,t,{headers:n})}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(o.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);