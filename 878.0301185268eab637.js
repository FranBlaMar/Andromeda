"use strict";(self.webpackChunkProyectoAstronomia=self.webpackChunkProyectoAstronomia||[]).push([[878],{8878:(C,u,a)=>{a.r(u),a.d(u,{UsuarioModule:()=>h});var c=a(9808),s=a(5358),t=a(1223),m=a(6404);const l=function(){return["editar"]};function g(r,e){if(1&r&&(t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"div",4),t.TgZ(4,"div",5),t._UZ(5,"img",6),t.qZA(),t.TgZ(6,"div",7),t.TgZ(7,"h2",8),t._uU(8),t.qZA(),t.TgZ(9,"p",9),t.TgZ(10,"strong"),t._uU(11,"Descripci\xf3n: "),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"p",9),t.TgZ(14,"strong"),t._uU(15,"Email: "),t.qZA(),t._uU(16),t.qZA(),t.TgZ(17,"button",10),t._uU(18," Editar informaci\xf3n "),t.qZA(),t.qZA(),t.TgZ(19,"div",11),t.TgZ(20,"div",12),t.TgZ(21,"h2"),t.TgZ(22,"strong"),t._uU(23),t.qZA(),t.qZA(),t.TgZ(24,"p"),t.TgZ(25,"small"),t._uU(26,"N\xfamero de posts"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"div",12),t.TgZ(28,"h2"),t.TgZ(29,"strong"),t._uU(30),t.qZA(),t.qZA(),t.TgZ(31,"p"),t.TgZ(32,"small"),t._uU(33,"N\xfamero de comentarios"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r){const o=t.oxw();t.xp6(8),t.hij("Nombre: ",o.user.name,""),t.xp6(4),t.hij(" ",o.user.aboutMe," "),t.xp6(4),t.hij(" ",o.user.email," "),t.xp6(1),t.Q6J("routerLink",t.DdM(6,l)),t.xp6(6),t.Oqu(o.user.numberOfPosts),t.xp6(7),t.Oqu(o.user.numberOfComents)}}let f=(()=>{class r{constructor(o){this.servicio=o,this.carga=!1}ngOnInit(){this.servicio.obtenerUsuario().subscribe(o=>{this.user=o,this.carga=!0})}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(m.Z))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-datos"]],decls:1,vars:1,consts:[["class","contenedor",4,"ngIf"],[1,"contenedor"],[1,"card","card-inverse"],[1,"card-block","containerCarta"],[1,"row","datosUser"],[1,"col-md-4","col-sm-4","text-center"],["src","../../../assets/img/perfil.png","alt","",1,"img-fluid","fotoPerfil"],[1,"col-md-8","col-sm-8",2,"padding","3rem"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-dark","btn-lg","btn-block",3,"routerLink"],[1,"row"],[1,"col-md-6","col-sm-6","text-center","numeros"]],template:function(o,i){1&o&&t.YNc(0,g,34,7,"div",0),2&o&&t.Q6J("ngIf",i.carga)},directives:[c.O5,s.rH],styles:[".contenedor[_ngcontent-%COMP%]{margin:2rem;min-height:80vh}h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#fff}.card[_ngcontent-%COMP%]{background-color:#000}.containerCarta[_ngcontent-%COMP%]{padding:2rem}.row[_ngcontent-%COMP%]{margin:auto}.fotoPerfil[_ngcontent-%COMP%]{width:10rem;height:10rem;border-radius:150px;border:5px solid #FFF}.card-title[_ngcontent-%COMP%]{margin-bottom:3rem}.numeros[_ngcontent-%COMP%]{margin:100px auto auto}button[_ngcontent-%COMP%]:hover{box-shadow:0 0 5px #fff}"]}),r})();var n=a(2382);function Z(r,e){1&r&&(t.TgZ(0,"p",14),t._uU(1,"Nombre no v\xe1lido "),t.qZA())}const p=[{path:"",component:f,pathMatch:"full"},{path:"editar",component:(()=>{class r{constructor(o,i,d){this.builder=o,this.servicio=i,this.router=d,this.carga=!1,this.formularioEditarDatos=this.builder.group({userName:[],name:[,[n.kI.required,n.kI.pattern("^[A-Za-z ]+$")]],aboutMe:[],email:[,],numberOfComents:[],numberOfPosts:[]})}ngOnInit(){this.servicio.obtenerUsuario().subscribe(o=>{this.formularioEditarDatos.reset({userName:o.userName,name:o.name,aboutMe:o.aboutMe,email:o.email,numberOfComents:o.numberOfComents,numberOfPosts:o.numberOfPosts})})}editarUsuario(){this.servicio.modificarUsuario(this.formularioEditarDatos.value).subscribe(o=>{this.router.navigateByUrl("usuario")})}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(n.qu),t.Y36(m.Z),t.Y36(s.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-edit-datos"]],decls:23,vars:3,consts:[[1,"contenedor"],[1,"card","card-inverse"],[1,"card-block","containerCarta"],[1,"row","datosUser"],[1,"col-md-4","col-sm-4","text-center"],["src","../../../assets/img/perfil.png","alt","",1,"img-fluid","fotoPerfil",2,"border-radius","50%"],[1,"col-md-8","col-sm-8",2,"padding","3rem"],["id","formEdit",3,"formGroup","submit"],[1,"card-title"],["type","text","formControlName","name"],["class","form-text text-danger",4,"ngIf"],[1,"card-text"],["cols","40","rows","5","form","formEdit","formControlName","aboutMe"],[1,"btn","btn-dark","btn-lg","btn-block",3,"disabled"],[1,"form-text","text-danger"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"div",6),t.TgZ(7,"form",7),t.NdJ("submit",function(){return i.editarUsuario()}),t.TgZ(8,"h2",8),t._uU(9,"Nombre: "),t._UZ(10,"input",9),t._UZ(11,"br"),t.YNc(12,Z,2,0,"p",10),t.qZA(),t.TgZ(13,"p",11),t.TgZ(14,"strong"),t._uU(15,"Descripci\xf3n: "),t.qZA(),t.qZA(),t.TgZ(16,"textarea",12),t._uU(17," "),t.qZA(),t._UZ(18,"br"),t._UZ(19,"br"),t._UZ(20,"br"),t.TgZ(21,"button",13),t._uU(22," Realizar cambios "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(7),t.Q6J("formGroup",i.formularioEditarDatos),t.xp6(5),t.Q6J("ngIf",i.formularioEditarDatos.controls.name.errors&&i.formularioEditarDatos.controls.name.touched),t.xp6(9),t.Q6J("disabled",i.formularioEditarDatos.invalid))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,c.O5],styles:[".contenedor[_ngcontent-%COMP%]{margin:2rem}.text-danger[_ngcontent-%COMP%]{font-size:15px}h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#fff}.card[_ngcontent-%COMP%]{background-color:#000}.containerCarta[_ngcontent-%COMP%]{padding:2rem}.fotoPerfil[_ngcontent-%COMP%]{width:10rem;height:10rem;border-radius:150px;border:5px solid #FFF}.card-title[_ngcontent-%COMP%]{margin-bottom:3rem}button[_ngcontent-%COMP%]:hover{box-shadow:0 0 5px #fff}"]}),r})()},{path:"**",redirectTo:""}];let b=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[s.Bz.forChild(p)]]}),r})(),h=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[c.ez,b,s.Bz,n.UX]]}),r})()}}]);