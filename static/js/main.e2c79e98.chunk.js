(this["webpackJsonpmeu-curriculo-react-app"]=this["webpackJsonpmeu-curriculo-react-app"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(6),c=t.n(o),i=t(1),l=t(2),s=t(3),u=t(4),m=t(7),d=t.n(m);function p(e){var a=e.conteudo,t=a.nome,n=a.ocupacao,o=a.resumo,c=a.perfilProfissional;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"perfil"},r.a.createElement("img",{src:d.a,alt:"Perfil"})),r.a.createElement("div",{className:"biografia"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"ocupacao"},n),r.a.createElement("p",null,o)),r.a.createElement("div",{className:"titulo"},"Perfil ",r.a.createElement("br",null)," Profissional"),r.a.createElement("div",{className:"perfil-profissional"},r.a.createElement("p",null,c)))}function E(e){var a=e.conteudo;return r.a.createElement("li",null,r.a.createElement("div",{className:"item-contato"},r.a.createElement("h4",null,a.tipo),r.a.createElement("p",null,a.contato)))}function f(e){var a=e.conteudo;return r.a.createElement("div",{className:"lista-de-formacao"},r.a.createElement("li",null,r.a.createElement("h4",null,a.instituicao),r.a.createElement("p",null,a.curso)))}function v(e){var a=e.contatos,t=e.educacao;return r.a.createElement("aside",null,r.a.createElement("div",{className:"sidebar"},r.a.createElement("h3",null,"Contatos"),r.a.createElement("div",{className:"lista-de-contatos"},a.map((function(e){return r.a.createElement(E,{conteudo:e,key:e.id})})))),r.a.createElement("div",{className:"sidebar"},r.a.createElement("h3",null,"Educa\xe7\xe3o"),t.map((function(e){return r.a.createElement(f,{conteudo:e,key:e.id})}))))}var g=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={arrayDeExperiencias:e.props.experiencia},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"experience"},r.a.createElement("h2",null,"Experi\xeancia Profissional"),this.state.arrayDeExperiencias.map((function(e){return r.a.createElement("div",{className:"experience-item",key:e.id},r.a.createElement("div",null,r.a.createElement("h4",null,e.cargo),r.a.createElement("date",null,e.periodo),r.a.createElement("strong",null,e.empresa),r.a.createElement("span",null,e.local)),r.a.createElement("p",null,e.conteudo))})))}}]),t}(n.Component),b=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={infos:[{nome:"Luane Aquino",ocupacao:"nodejs | womenCanCode react",resumo:"nodejs, api, react, javascript, html, css",perfilProfissional:"Com interesse em tecnologias web e participando do womenCanCode react",contatos:[{id:1,tipo:"telefone",contato:"66 99716-9562"},{id:2,tipo:"email",contato:"luane.aquino.br@gmail.com"}],educacao:[{id:1,instituicao:"Universidade do Estado de Mato Grosso",curso:"Ci\xeancia da computa\xe7\xe3o"}],experiencia:[{id:1,cargo:"Instrutora de inform\xe1tica aplicada",periodo:"Out/Nov 2019",empresa:"SENAI",local:"Tangar\xe1 da serra-MT",conteudo:"Ministrar a disciplina de inform\xe1tica aplicada no curso de assistente administrativo.",atual:!1},{id:2,cargo:"Est\xe1gio supervisionado",periodo:"Jul 2017 - Jan 2018",empresa:"UNEMAT",local:"Barra do bugres-MT",conteudo:"Desenvolvimento de aplicativo android utilizando linguagem java",atual:!1},{id:3,cargo:"Agente de pesquisas e mapeamento",periodo:"Jan 2017 - Dez 2019",empresa:"IBGE",local:"Barra do bugres-MT",conteudo:"Visita\xe7\xe3o a domic\xedlios e estabelecimentos de qualquer natureza de acordo com o tema a ser pesquisado, visando \xe0 gera\xe7\xe3o de estat\xedsticas.",atual:!1},{id:4,cargo:"Suporte t\xe9cnico",periodo:"Jan 2016 - Out 2016",empresa:"Solu\xe7\xe3o Sistemas",local:"Tangar\xe1 da serra-MT",conteudo:"Atendimento aos chamados de clientes. Garantir a atualiza\xe7\xe3o, disponibilidade e estabilidade do software.",atual:!1}]}]},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state.infos[0];return r.a.createElement("main",null,r.a.createElement(p,{conteudo:e}),r.a.createElement(v,{contatos:e.contatos,educacao:e.educacao}),r.a.createElement(g,{experiencia:e.experiencia}))}}]),t}(n.Component);t(13);var h=function(){return r.a.createElement(b,null)};c.a.render(r.a.createElement(h,null),document.getElementById("root"))},7:function(e,a,t){e.exports=t.p+"static/media/profile_picture.e7bf5bf0.png"},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e2c79e98.chunk.js.map