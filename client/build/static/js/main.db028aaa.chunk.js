(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){},32:function(e,t,a){e.exports=a(68)},56:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),s=a.n(l),i=a(3),c=a(4),o=a(2),u=a(5),d=a(6),p=a(70),m=a(72),h=a(71),E=a(29),y=a.n(E).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_URL||"http://localhost:3001"});function f(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.log,n=void 0===a?{}:a,r=t.logToServer;(void 0===r||r)&&(e=n,y.post("/log_event",e).then(function(e){}).catch(function(e){}))}var v=a(7),b=a(69),g=(a(18),a(56),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={redirectToReferrer:!1},a.handleLogin=a.handleLogin.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleLogin",value:function(e){var t=this;e.preventDefault();var a=document.getElementById("email_login").value,n={email:a,pass:document.getElementById("email_pass").value};y.post("/login",n).then(function(e){var n=document.getElementById("login_failed_msg");e.data.success?(n.style.display="none",localStorage.setItem("isLoggedIn","true"),localStorage.setItem("email",a),t.setState(function(){return{redirectToReferrer:!0}})):n.style.display="block"}).catch(function(e){document.getElementById("login_error_msg").style.display="block",e&&e.response&&e.response.data&&e.response.data.serverSideError||f({log:{message:e.toString(),level:"info",origin:"client"},logToServer:!0})})}},{key:"render",value:function(){var e={pathname:"/update_properties"};return!0===this.state.redirectToReferrer?r.a.createElement(b.a,{to:e}):r.a.createElement("div",{id:"login-container"},r.a.createElement("div",{id:"login-img-container"},r.a.createElement("img",{src:"/img/house.png",alt:"house"})),r.a.createElement("div",{id:"login-title-container"},r.a.createElement("span",{id:"affordable-housing-data-hub-title"},"Austin Affordable Housing Data Portal")),r.a.createElement("br",null),r.a.createElement("div",{className:"login-form-container"},r.a.createElement("div",null,r.a.createElement("form",{className:"form-group"},r.a.createElement("span",null,"Email"),r.a.createElement("br",null),r.a.createElement("input",{id:"email_login",className:"login_input form-control",autoComplete:"on"}),r.a.createElement("br",null),r.a.createElement("span",null,"Password"),r.a.createElement("br",null),r.a.createElement("input",{id:"email_pass",className:"login_input form-control",type:"password",autoComplete:"on"}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary btn-login",onClick:this.handleLogin},"Login"))),r.a.createElement("div",{id:"login_failed_msg"},"Login failed. Username and password combination is incorrect."),r.a.createElement("div",{id:"login_error_msg"},"Login failed. Please contact system adminstrator for details.")))}}]),t}(n.Component)),k=(a(60),a(61),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleAllPropertiesClick",value:function(e){"/update_properties"!==window.location.pathname&&this.setState({redirectTo:"/update_properties"})}},{key:"handleLogoutClick",value:function(e){this.setState({redirectTo:"/"})}},{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(b.a,{to:this.state.redirectTo}):r.a.createElement("div",{className:"top-nav"},r.a.createElement("div",{className:"top-nav-header-container"},r.a.createElement("span",{className:"top-nav-header"},"Austin Affordable Housing Data Portal")),r.a.createElement("ul",{className:"top-nav-links"},r.a.createElement("li",{onClick:this.handleAllPropertiesClick.bind(this)},"All Properties"),r.a.createElement("li",{onClick:this.handleLogoutClick.bind(this)},"Logout")))}}]),t}(n.Component)),C=a(10),_=a.n(C),I=(a(62),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={propertyData:e.propertyData,searchBy:"Address",value:"Address"},a.handlePropertyClick=a.handlePropertyClick.bind(Object(v.a)(a)),a.getTotalFieldCount=a.getTotalFieldCount.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handlePropertyClick",value:function(e){e&&e.currentTarget&&e.currentTarget.dataset&&e.currentTarget.dataset.propertyId&&this.setState({redirectTo:"/update_property/"+e.currentTarget.dataset.propertyId})}},{key:"handleNewPropertyClick",value:function(e){this.setState({redirectTo:"/new_property"})}},{key:"renderFlags",value:function(e){var t,a;return t=e.basicPropertyInfoVerified?r.a.createElement("button",{className:"table-flag btn btn-success table-flag-verified"},"Basic Info Verified"):r.a.createElement("button",{className:"table-flag btn btn-danger table-flag-unverified"},"Basic Info Unverified"),a=e.tenantCriteriaVerified?r.a.createElement("button",{className:"table-flag btn btn-success table-flag-verified affordability-info-flag"},"Tenant Criteria Verified"):r.a.createElement("button",{className:"table-flag btn btn-danger table-flag-unverified affordability-info-flag"},"Tenant Criteria Unverified"),r.a.createElement("span",null,t," ",a)}},{key:"renderDataSources",value:function(e){return r.a.createElement("span",null,e.data_source_ahi?"AHI":""," ",e.data_source_tdhca?"TDHCA":""," ",e.data_source_atc_guide?"GAGHAA":"")}},{key:"renderFundingSources",value:function(e){return r.a.createElement("span",null,e.funding_source_nhcd?"NHCD":""," ",e.funding_source_tdhca?"TDHCA":""," ",e.funding_source_aahc?"HACA":""," ",e.funding_source_hatc?"HATC":"")}},{key:"renderRows",value:function(){var e=this.state.propertyData;(e=_.a.sortBy(e,"total_income_restricted_units")).reverse();var t=[],a=!0,n=!1,l=void 0;try{for(var s,i=e[Symbol.iterator]();!(a=(s=i.next()).done);a=!0){var c=s.value;t.push(r.a.createElement("tr",{key:c.id},r.a.createElement("td",null,c.id),r.a.createElement("td",null,c.property_name),r.a.createElement("td",null,c.address),r.a.createElement("td",null,c.city),r.a.createElement("td",null,c.zipcode),r.a.createElement("td",null,c.total_income_restricted_units?c.total_income_restricted_units:r.a.createElement("span",{className:"text-danger"},"unknown")),r.a.createElement("td",null,c.phone),r.a.createElement("td",null,this.renderDataSources(c)),r.a.createElement("td",null,this.renderFundingSources(c)),r.a.createElement("td",null,c.assigned_user_email?c.assigned_user_email:"none"),r.a.createElement("td",null,this.renderFlags(c)),r.a.createElement("td",null,r.a.createElement("button",{"data-property-id":c.id,onClick:this.handlePropertyClick,className:"table-view-btn btn-primary btn"},"View"))))}}catch(o){n=!0,l=o}finally{try{a||null==i.return||i.return()}finally{if(n)throw l}}return t}},{key:"handleSearchKeyUp",value:function(){var e,t,a,n,r={Address:2,"Property ID":0,"Property Name":1,"Assigned To":9,"Data Source":7,"Funding Source":8,Flag:10}[this.state.searchBy];for(e=document.getElementById("table-search-input").value.toUpperCase(),t=document.getElementById("update-properties-table").getElementsByTagName("tr"),n=0;n<t.length;n++)(a=t[n].getElementsByTagName("td")[r])&&(a.innerHTML.toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none")}},{key:"handleSearchSelectChange",value:function(e){var t=e.target.value;this.setState({searchBy:t,value:t}),this.changeInputPlaceHolder(t)}},{key:"changeInputPlaceHolder",value:function(e){document.getElementById("table-search-input").placeholder="Search by ".concat(e.toLowerCase(),"...")}},{key:"getTotalFieldCount",value:function(e){var t=this.state.propertyData,a=0,n=!0,r=!1,l=void 0;try{for(var s,i=t[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){s.value[e]&&(a+=1)}}catch(c){r=!0,l=c}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}},{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(b.a,{to:this.state.redirectTo}):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{style:{marginLeft:"50px"}},r.a.createElement("span",null,r.a.createElement("b",null,"Basic Info Verified (complete / total):")," ",this.getTotalFieldCount("basicPropertyInfoVerified")," / ",this.state.propertyData.length),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"Tenant Criteria Verified (complete / total):")," ",this.getTotalFieldCount("tenantCriteriaVerified")," / ",this.state.propertyData.length)),r.a.createElement("br",null),r.a.createElement("button",{id:"new-property-id",className:"btn btn-primary",onClick:this.handleNewPropertyClick.bind(this),disabled:!1},"New Property"),r.a.createElement("input",{onKeyUp:this.handleSearchKeyUp.bind(this),className:"form-control",type:"text",id:"table-search-input",placeholder:"Search by address..."}),r.a.createElement("select",{value:this.state.value,id:"table-search-select",onChange:this.handleSearchSelectChange.bind(this),className:"custom-select"},r.a.createElement("option",null,"Address"),r.a.createElement("option",null,"Property ID"),r.a.createElement("option",null,"Property Name"),r.a.createElement("option",null,"Assigned To"),r.a.createElement("option",null,"Data Source"),r.a.createElement("option",null,"Funding Source"),r.a.createElement("option",null,"Flag"))),r.a.createElement("table",{id:"update-properties-table",className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Address"),r.a.createElement("th",{scope:"col"},"City"),r.a.createElement("th",{scope:"col"},"Zip"),r.a.createElement("th",{scope:"col"},"Total Income Restricted Units"),r.a.createElement("th",{scope:"col"},"Contact"),r.a.createElement("th",{scope:"col"},"Data Source(s)"),r.a.createElement("th",{scope:"col"},"Funding Source(s)"),r.a.createElement("th",{scope:"col"},"Assigned To"),r.a.createElement("th",{scope:"col"},"Flags"),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.renderRows())))}}]),t}(n.Component)),w=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={redirectTo:null,showUpdateProperties:!1};var n="/update_properties_list?userEmail="+localStorage.getItem("email");return y.get(n).then(function(e){console.log(e),a.setState({data:e.data.data,showUpdateProperties:!0})}).catch(function(e){console.log(e.response),e&&e.response&&!e.response.data.success&&e.response.data.redirect&&a.setState({redirectTo:"/"})}),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(b.a,{to:this.state.redirectTo}):this.state.showUpdateProperties?r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(I,{propertyData:this.state.data})):r.a.createElement("div",null)}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={groupName:e.name,data:e.data},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderGroup",value:function(){var e=this.state.data,t=[];for(var a in e)t.push(r.a.createElement("div",{key:a},r.a.createElement("span",null,r.a.createElement("b",null,a,":")," ",e[a].value)));return t}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("u",null,this.state.groupName)),r.a.createElement("br",null),this.renderGroup())}}]),t}(n.Component),N=(a(63),a(64),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={unitTypes:{},newUnitTypes:0},a.handleAddUnitType=a.handleAddUnitType.bind(Object(v.a)(a)),a.renderUnitTypes=a.renderUnitTypes.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleAddUnitType",value:function(){var e=this.state.newUnitTypes;e+=1,this.setState({newUnitTypes:e})}},{key:"onInputChange",value:function(e,t,a){var n=a.target.value,r=this.props.updatePropertyThis.state.updatedData;_.a.has(r.newUnitInfo,e)||(this.props.updatePropertyThis.state.updatedData.newUnitInfo[e]={}),this.props.updatePropertyThis.state.updatedData.newUnitInfo[e][t]=n}},{key:"renderUnitTypes",value:function(){var e=this.state.unitTypes,t=[];for(var a in e){var n=e[a],l=r.a.createElement("div",{key:a},r.a.createElement("span",null,r.a.createElement("span",null,"Beds:"),r.a.createElement("input",{type:"number",onChange:this.onInputChange.bind(this,a,"beds"),defaultValue:n.beds})),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("span",null,"Baths:"),r.a.createElement("input",{type:"number",onChange:this.onInputChange.bind(this,"baths"),defaultValue:n.baths})),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("span",null,"Total Income Restricted Units:"),r.a.createElement("input",{type:"number",onChange:this.onInputChange.bind(this,"total_ir_units"),defaultValue:n.total_ir_units})),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("span",null,"Total Accessible Income Restricted Units:"),r.a.createElement("input",{type:"number",onChange:this.onInputChange.bind(this,"total_accessible_ir_units"),defaultValue:n.total_accessible_ir_units})),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("span",null,"Total AVAILABLE Income Restricted Units:"),r.a.createElement("input",{type:"number",onChange:this.onInputChange.bind(this,"total_available_ir_units"),defaultValue:n.total_available_ir_units})),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("span",null,"Total AVAILABLE Accessible Income Restricted Units:"),r.a.createElement("input",{type:"number",onChange:this.onInputChange.bind(this,"total_available_accessible_ir_units"),defaultValue:n.total_available_accessible_ir_units})),r.a.createElement("hr",null));t.push(l)}for(var s=0;s<this.state.newUnitTypes;)l=r.a.createElement("div",{key:"new-"+s},r.a.createElement("span",null,r.a.createElement("span",null,"Beds:"),r.a.createElement("input",{type:"number",onChange:this.onInputChange.bind(this,s,"beds"),defaultValue:""})),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("span",null,"Baths:"),r.a.createElement("input",{type:"number",onChange:this.onInputChange.bind(this,s,"baths"),defaultValue:""})),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("span",null,"Total Income Restricted Units:"),r.a.createElement("input",{type:"number",onChange:this.onInputChange.bind(this,s,"total_ir_units"),defaultValue:""})),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("span",null,"Total Accessible Income Restricted Units:"),r.a.createElement("input",{type:"number",onChange:this.onInputChange.bind(this,s,"total_accessible_ir_units"),defaultValue:""})),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("span",null,"Total AVAILABLE Income Restricted Units:"),r.a.createElement("input",{type:"number",onChange:this.onInputChange.bind(this,s,"total_available_ir_units"),defaultValue:""})),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("span",null,"Total AVAILABLE Accessible Income Restricted Units:"),r.a.createElement("input",{type:"number",onChange:this.onInputChange.bind(this,s,"total_available_accessible_ir_units"),defaultValue:""})),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("span",null,"Rent Minimum:"),r.a.createElement("input",{type:"number",onChange:this.onInputChange.bind(this,s,"rent_min"),defaultValue:""})),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("span",null,"Rent Maximum:"),r.a.createElement("input",{type:"number",onChange:this.onInputChange.bind(this,s,"rent_max"),defaultValue:""})),r.a.createElement("hr",null)),t.push(l),s+=1;return t}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.unitTypes&&this.renderUnitTypes(),r.a.createElement("button",{className:"btn btn-primary add-another-unit-type-btn",onClick:this.handleAddUnitType},"Add Another Unit Type"))}}]),t}(n.Component)),O=a(30),S=a.n(O),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={groupName:e.name,data:e.data,showGroup:!1},Object(o.a)(a)}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleInfoClick",value:function(e){var t=this.state.data[e].description;alert(t)}},{key:"handleSortRightClick",value:function(){var e=this.state.showGroup;this.setState({showGroup:!e})}},{key:"onInputChange",value:function(e,t){var a={field:e,value:t.target.value};this.props.handleUpdateData(a),this.props.data[e].value=t.target.value,this.setVerifyFalse(e)}},{key:"setVerifyFalse",value:function(e){var t=e+"-verify-btn",a=document.getElementById(t);a.innerText="VERIFY",a.classList.remove("verified-btn"),a.classList.add("verify-btn"),this.props.updatePropertyThis.state.updatedData[e].verify=!1,this.props.updateVerifications(e,0)}},{key:"onRadioChange",value:function(e,t,a){var n={field:e,value:t};this.props.handleUpdateData(n),this.props.data[e].value=t,this.setVerifyFalse(e)}},{key:"handleClickVerify",value:function(e,t){var a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=this.props.updatePropertyThis.state.updatedData;if(_.a.has(r,e)||(this.props.updatePropertyThis.state.updatedData[e]={}),_.a.isNull(n)){if(a=this.props.updatePropertyThis.state.updatedData[e].verify,_.a.isUndefined(a)){var l=this.props.verifications;_.a.has(l,e)&&(a=l[e].verified)}}else a=!n;!0===a?(this.props.updatePropertyThis.state.updatedData[e].verify=!1,t.target.innerText="VERIFY",t.target.classList.remove("verified-btn"),t.target.classList.add("verify-btn"),this.props.updateVerifications(e,0)):(this.props.updatePropertyThis.state.updatedData[e].verify=!0,t.target.innerText="VERIFIED",t.target.classList.remove("verify-btn"),t.target.classList.add("verified-btn"),this.props.updateVerifications(e,1)),console.log(this.props.updatePropertyThis.state.updatedData)}},{key:"renderGroupEdit",value:function(){var e=this,t=this.state.data,a=[];function n(e){return!!e.match(/^varchar.*/)}var l=function(t){var a=e.props.verifications;return!(!a||!_.a.has(a,t)||1!==a[t].verified)},s=function(t){var a=r.a.createElement("span",null),n=r.a.createElement("span",null),l=e.props.verifications;return l&&_.a.has(l,t)&&(l[t].lastUpdated&&(a=r.a.createElement("span",null,"updated/verified on ",r.a.createElement("b",null,S()(l[t].lastUpdated).format("YYYY-MM-DD h:mma")))),l[t].updateUserEmail&&(n=r.a.createElement("span",null,"by ",r.a.createElement("b",null,l[t].updateUserEmail)))),r.a.createElement("p",null,a," ",n)},i=function(t,a,i,c){if(n(a)||function(e){return!!e.match(/^int.*/)}(a))return r.a.createElement("span",{className:"form-group"},r.a.createElement("input",{type:n(a)?"text":"number",readOnly:!c,className:"form-control text-or-num-input",id:t,defaultValue:i||0===i?i:"",onChange:e.onInputChange.bind(e,t)}),"id"!==t&&r.a.createElement("span",null,r.a.createElement("button",{id:t+"-verify-btn",onClick:e.handleClickVerify.bind(e,t),className:"btn btn-primary "+(l(t)?"verified-btn":"verify-btn")},l(t)?"verified":"verify"),r.a.createElement("span",{style:{marginLeft:"20px"}},s(t))));if(function(e){return!!e.match(/^tinyint.*/)}(a))return r.a.createElement("span",null,r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("label",{className:"form-check-label",htmlFor:t+"_yes"},r.a.createElement("input",{id:t+"_yes",className:"form-check-input",readOnly:!c,name:t,type:"radio",defaultChecked:1===i,onClick:e.onRadioChange.bind(e,t,!0)}),"yes")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("label",{className:"form-check-label",htmlFor:t+"_no"},r.a.createElement("input",{id:t+"_no",className:"form-check-input",readOnly:!c,name:t,type:"radio",defaultChecked:0===i,onClick:e.onRadioChange.bind(e,t,!1)}),"no")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("label",{className:"form-check-label",htmlFor:t+"_null"},r.a.createElement("input",{id:t+"_null",className:"form-check-input",readOnly:!c,name:t,type:"radio",defaultChecked:0!==i&&1!==i,onClick:e.onRadioChange.bind(e,t,null)}),"unknown")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("button",{id:t+"-verify-btn",onClick:e.handleClickVerify.bind(e,t),className:"btn btn-primary "+(l(t)?"verified-btn":"verify-btn")},l(t)?"verified":"verify"),r.a.createElement("span",{style:{marginLeft:"20px"}},s(t))));if(a.match(/.*enum.*/)){var o=[];for(var u in a)"'"===a[u]&&o.push(parseInt(u));var d=[];for(var p in o)if(p%2===0){var m=o[p]+1,h=o[parseInt(p)+1],E=a.substring(m,h);d.push(E)}d.push("unknown");for(var y=[],f=0;f<d.length;f++){var v=d[f];if("unknown"===v)var b=r.a.createElement("span",{key:t+"_"+v},r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("label",{className:"form-check-label",htmlFor:t+"_"+v},r.a.createElement("input",{id:t+"_"+v,className:"form-check-input",readOnly:!c,name:t,type:"radio",defaultChecked:null==i,onClick:e.onRadioChange.bind(e,t,null)}),v)));else b=r.a.createElement("span",{key:t+"_"+v},r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("label",{className:"form-check-label",htmlFor:t+"_"+v},r.a.createElement("input",{id:t+"_"+v,className:"form-check-input",readOnly:!c,name:t,type:"radio",defaultChecked:v===i,onClick:e.onRadioChange.bind(e,t,v)}),v)));y.push(b)}return y.push(r.a.createElement("span",{key:t+"_verify_btn"},r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("button",{id:t+"-verify-btn",onClick:e.handleClickVerify.bind(e,t),className:"btn btn-primary "+(l(t)?"verified-btn":"verify-btn")},l(t)?"verified":"verify"),r.a.createElement("span",{style:{marginLeft:"20px"}},s(t))))),y}return r.a.createElement("div",null,"ERROR")};for(var c in t)a.push(r.a.createElement("div",{className:"property-group-input-container",key:c},r.a.createElement("span",null,r.a.createElement("b",null,t[c].name,": "),r.a.createElement("img",{width:"16",onClick:this.handleInfoClick.bind(this,c),className:"info-img",src:"/img/info.png",alt:"info"})),r.a.createElement("br",null),r.a.createElement("div",{className:"property-group-input"},i(c,t[c].dataType,t[c].value,t[c].editable))));return a}},{key:"render",value:function(){return r.a.createElement("div",{className:"property-group"},r.a.createElement("span",null,r.a.createElement("img",{width:"16",onClick:this.handleSortRightClick.bind(this),className:"dropdown-triangle",src:this.state.showGroup?"/img/sort-down.png":"/img/sort-right.png",alt:"up/down"}),r.a.createElement("u",null,this.state.groupName)),this.state.showGroup&&"Unit Information"!==this.state.groupName&&r.a.createElement("div",{className:"property-group-inputs"},this.renderGroupEdit()),this.state.showGroup&&"Unit Information"===this.state.groupName&&r.a.createElement("div",null,r.a.createElement(N,{updatePropertyThis:this.props.updatePropertyThis})))}}]),t}(n.Component),A=(a(65),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-info-container"},r.a.createElement("div",{className:"contact-info-content"},r.a.createElement("span",{className:"contact-info-title"},"Contact Info:"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"Property Manager:")," ",this.props.data.property_manager_or_landlord),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"Phone:")," ",this.props.data.phone),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"Email:")," ",this.props.data.email),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"Website:")," ",this.props.data.website)))}}]),t}(n.Component)),U=(a(66),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a.getAssignedUser=a.getAssignedUser.bind(Object(v.a)(a)),a.renderAssignedTo=a.renderAssignedTo.bind(Object(v.a)(a)),a.getAssignedUser(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"getAssignedUser",value:function(){var e=this,t=this.props.propertyId,a="/get_assigned_user?propertyId=".concat(t,"&userEmail=").concat(localStorage.getItem("email"));y.get(a).then(function(t){var a=null;t.data.data.length>0&&(a=t.data.data[0].email),e.setState({assignedTo:a,showAssignedUserInfo:!0})}).catch(function(t){t&&t.response&&!t.response.data.success&&t.response.data.redirect&&e.setState({redirectTo:"/"})})}},{key:"renderAssignedTo",value:function(){return this.state.assignedTo?this.state.assignedTo:"None"}},{key:"handleUnassignUser",value:function(){var e=this,t=this.props.propertyId,a="/unassign_user?propertyId=".concat(t,"&userEmail=").concat(localStorage.getItem("email"));y.get(a).then(function(t){e.setState({assignedTo:null,showAssignedUserInfo:!0})}).catch(function(t){t&&t.response&&!t.response.data.success&&t.response.data.redirect&&e.setState({redirectTo:"/"})})}},{key:"handleAssignToMe",value:function(){var e=this,t=this.props.propertyId,a="/assign_property_to_user?propertyId=".concat(t,"&userEmail=").concat(localStorage.getItem("email"));y.get(a).then(function(t){e.setState({assignedTo:t.data.assignedTo,showAssignedUserInfo:!0})}).catch(function(t){t&&t.response&&!t.response.data.success&&t.response.data.redirect&&e.setState({redirectTo:"/"})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"assigned-info-container"},this.state.showAssignedUserInfo&&r.a.createElement("div",{className:"assigned-info-content"},r.a.createElement("span",{className:"assigned-info-title"},"Assignee Info:"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"Assigned To:")," ",this.renderAssignedTo()),r.a.createElement("br",null),this.state.assignedTo&&r.a.createElement("span",null,r.a.createElement("button",{onClick:this.handleUnassignUser.bind(this),className:"btn assign-info-btn "},"Unassign User"),r.a.createElement("br",null)),r.a.createElement("span",null,r.a.createElement("button",{onClick:this.handleAssignToMe.bind(this),className:"btn assign-info-btn"},"Assign To Me"))))}}]),t}(n.Component)),P=(a(27),function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={redirectTo:null,showUpdateProperty:!1,showEditProperty:!1,groups:["Basic Property Information","Contact Information","Communities Served","Affordability Information","Amenities","Schools"],updatedData:{}},a.handleUpdateData=a.handleUpdateData.bind(Object(v.a)(a)),a.updateVerifications=a.updateVerifications.bind(Object(v.a)(a));var n=a.props.match.params.id,r="/property?propertyId=".concat(n,"&userEmail=").concat(localStorage.getItem("email"));return y.get(r).then(function(e){a.setState({data:e.data.data,fieldsMap:e.data.fieldsMap,showEditProperty:!0,propertyId:n,verifications:e.data.verifications})}).catch(function(e){e&&e.response&&!e.response.data.success&&e.response.data.redirect&&a.setState({redirectTo:"/"})}),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleUpdateData",value:function(e){_.a.has(this.state.updatedData,e.field)||(this.props.updatedData[e.field]={}),"string"===typeof e.value&&0===e.value.trim().length?this.props.updatedData[e.field].value=null:this.props.updatedData[e.field].value=e.value}},{key:"updateVerifications",value:function(e,t){_.a.has(this.verifications,e)||(this.props.verifications[e]={}),this.props.verifications[e].verified=t}},{key:"renderGroups",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];function t(e,t){var a={};for(var n in t)t[n].active&&t[n].group&&t[n].group===e&&(a[n]=t[n]);return a}function a(e,t){for(var a in e){var n=t[a];e[a].value=0===n||n?n:null}return e}var n=[],l=this.state.groups,s=this.state.fieldsMap,i=!0,c=!1,o=void 0;try{for(var u,d=l[Symbol.iterator]();!(i=(u=d.next()).done);i=!0){var p=u.value,m=t(p,s);m=a(m,this.state.data),e?n.push(r.a.createElement(j,{key:p,name:p,data:m,updatePropertyThis:this,handleUpdateData:this.handleUpdateData,updateVerifications:this.updateVerifications,verifications:this.state.verifications})):n.push(r.a.createElement(T,{key:p,name:p,data:m}))}}catch(h){c=!0,o=h}finally{try{i||null==d.return||d.return()}finally{if(c)throw o}}return n}},{key:"handleEditPropertyClick",value:function(e){e?this.setState({showUpdateProperty:!1,showEditProperty:!0}):this.setState({showUpdateProperty:!0,showEditProperty:!1})}},{key:"getPropertyAddress",value:function(){return(this.state.data.address?this.state.data.address:"")+" "+(this.state.data.city?this.state.data.city:"")+", "+(this.state.data.state?this.state.data.state:"")+" "+(this.state.data.zipcode?this.state.data.zipcode:"")}},{key:"getPropertyId",value:function(){return this.state.data.id}},{key:"hideSaveButton",value:function(){document.getElementById("update-property-save-btn").style.display="none"}},{key:"showSaveButton",value:function(){document.getElementById("update-property-save-btn").style.display="block"}},{key:"showSaveMessage",value:function(){document.getElementById("save-message-success").style.display="block"}},{key:"hideSaveMessage",value:function(){document.getElementById("save-message-success").style.display="none"}},{key:"showFailureMessage",value:function(){document.getElementById("save-message-failure").style.display="block"}},{key:"hideFailureMessage",value:function(){document.getElementById("save-message-failure").style.display="none"}},{key:"handleSave",value:function(){var e=this;this.hideSaveButton(),this.hideSaveMessage(),this.hideFailureMessage();var t=this.props.match.params.id;y.post("/update_property?userEmail=".concat(localStorage.getItem("email")),{updatedData:this.state.updatedData,propertyId:t}).then(function(t){e.showSaveButton(),e.showSaveMessage()}).catch(function(t){e.showSaveButton(),e.showFailureMessage()})}},{key:"render",value:function(){var e=this;return this.state.redirectTo?r.a.createElement(b.a,{to:this.state.redirectTo}):this.state.showUpdateProperty?r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("br",null),r.a.createElement("div",{className:"property-groups-container"},r.a.createElement("button",{onClick:function(){e.handleEditPropertyClick(!0)}},"Edit Property"),r.a.createElement("br",null),r.a.createElement("br",null),this.renderGroups())):this.state.showEditProperty?r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("br",null),r.a.createElement("div",{className:"update-property-left"},r.a.createElement("div",{className:"property-groups-container"},this.getPropertyId()&&r.a.createElement("h2",null,"Property ID: ",this.getPropertyId()),this.getPropertyAddress()&&r.a.createElement("h2",null,this.getPropertyAddress()),r.a.createElement("br",null),this.renderGroups(!0)),r.a.createElement("div",{className:"save-btn-container"},r.a.createElement("button",{id:"update-property-save-btn",onClick:this.handleSave.bind(this),className:"save-btn btn btn-success"},"SAVE"),r.a.createElement("span",{id:"save-message-success",className:"text-success"},"Success! Your data was saved!"),r.a.createElement("span",{id:"save-message-failure",className:"text-danger"},"There was an issue saving your data. Please try again or contact system adminstrator.")),r.a.createElement("br",null),r.a.createElement("div",{style:{marginLeft:"100px"}},r.a.createElement("h6",null,"What data is 'Basic Info'?"),r.a.createElement("div",null,"- website"),r.a.createElement("div",null,"- unit type"),r.a.createElement("div",null,"- council district"),r.a.createElement("div",null,"- total units"),r.a.createElement("div",null,"- total psh units"),r.a.createElement("div",null,"- total income restricted units"),r.a.createElement("div",null,"- property name"),r.a.createElement("div",null,"- street address"),r.a.createElement("div",null,"- city"),r.a.createElement("div",null,"- state"),r.a.createElement("div",null,"- zip code"),r.a.createElement("div",null,"- phone")),r.a.createElement("br",null),r.a.createElement("div",{style:{marginLeft:"100px"}},r.a.createElement("h6",null,"What data is 'Tenant Criteria'?"),r.a.createElement("div",null,"- accepts section 8 "),r.a.createElement("div",null,"- has available units"),r.a.createElement("div",null,"- only serves students"),r.a.createElement("div",null,"- only serves elderly"),r.a.createElement("div",null,"- only serves physically disabled persons"),r.a.createElement("div",null,"- only serves mentally disabled person"),r.a.createElement("div",null,"- only serves veterans"),r.a.createElement("div",null,"- only serves military"),r.a.createElement("div",null,"- only serves domestic abuse survivors"),r.a.createElement("div",null,"- other community served information"),r.a.createElement("div",null,"- does this property accept applicants with history of broken leases (and other criteria)"),r.a.createElement("div",null,"- does this property accept applicants with an eviction history (and other criteria)"),r.a.createElement("div",null,"- does this property accept criminal history (and other criteria)"),r.a.createElement("div",null,"- has waitlist"),r.a.createElement("div",null,"- schools")),r.a.createElement("br",null)),r.a.createElement("div",{className:"update-property-right"},r.a.createElement(A,{data:this.state.data}),r.a.createElement("br",null),r.a.createElement(U,{propertyId:this.state.propertyId}))):r.a.createElement("div",null)}}]),t}(n.Component)),D=a(31),V=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.component,a=Object(D.a)(e,["component"]);return"true"===localStorage.getItem("isLoggedIn")&&localStorage.getItem("email")?r.a.createElement(h.a,Object.assign({},a,{render:function(e){return r.a.createElement(t,e)}})):r.a.createElement(b.a,{to:{pathname:"/",state:{from:this.props.location}}})}}]),t}(n.Component),B=(a(67),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleSave=a.handleSave.bind(Object(v.a)(a)),a.showFailureMessage=a.showFailureMessage.bind(Object(v.a)(a)),a.hideFailureMessage=a.hideFailureMessage.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"showFailureMessage",value:function(){document.getElementById("new-property-save-message-failure").style.display="block"}},{key:"hideFailureMessage",value:function(){document.getElementById("new-property-save-message-failure").style.display="none"}},{key:"handleSave",value:function(){var e=this;this.hideFailureMessage();var t="/new_property?userEmail=".concat(localStorage.getItem("email"));y.post(t,{property_name:document.getElementById("new-property-name").value,street_address:document.getElementById("new-property-address").value,city:document.getElementById("new-property-city").value,state:document.getElementById("new-property-state").value,zipcode:document.getElementById("new-property-zip").value}).then(function(t){console.log(t),e.setState({redirectTo:t.data.redirect})}).catch(function(t){console.log(t),e.showFailureMessage()})}},{key:"render",value:function(){return this.state&&this.state.redirectTo?r.a.createElement(b.a,{to:this.state.redirectTo}):r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("br",null),r.a.createElement("div",{className:"new-property-left"},r.a.createElement("div",null,"After the new property has been created you will be redirected to a page where you can edit additional attributes."),r.a.createElement("br",null),r.a.createElement("div",{className:"new-property-input-container"},r.a.createElement("span",null,r.a.createElement("b",null,"Property Name:")),r.a.createElement("br",null),r.a.createElement("span",{className:"form-group"},r.a.createElement("input",{id:"new-property-name",type:"text",className:"form-control text-or-num-input"}))),r.a.createElement("div",{className:"new-property-input-container"},r.a.createElement("span",null,r.a.createElement("b",null,"Street Address:")),r.a.createElement("br",null),r.a.createElement("span",{className:"form-group"},r.a.createElement("input",{id:"new-property-address",type:"text",className:"form-control text-or-num-input"}))),r.a.createElement("div",{className:"new-property-input-container"},r.a.createElement("span",null,r.a.createElement("b",null,"City:")),r.a.createElement("br",null),r.a.createElement("span",{className:"form-group"},r.a.createElement("input",{id:"new-property-city",type:"text",className:"form-control text-or-num-input"}))),r.a.createElement("div",{className:"new-property-input-container"},r.a.createElement("span",null,r.a.createElement("b",null,"State:")),r.a.createElement("br",null),r.a.createElement("span",{className:"form-group"},r.a.createElement("input",{id:"new-property-state",type:"text",className:"form-control text-or-num-input"}))),r.a.createElement("div",{className:"new-property-input-container"},r.a.createElement("span",null,r.a.createElement("b",null,"Zip Code:")),r.a.createElement("br",null),r.a.createElement("span",{className:"form-group"},r.a.createElement("input",{id:"new-property-zip",type:"text",className:"form-control text-or-num-input"}))),r.a.createElement("div",{className:"save-btn-continer"},r.a.createElement("button",{onClick:this.handleSave,id:"new-property-save-btn",className:"btn btn-success"},"SAVE"),r.a.createElement("span",{id:"new-property-save-message-success",className:"text-success"},"Success! Your data was saved!"),r.a.createElement("span",{id:"new-property-save-message-failure",className:"text-danger"},"There was an issue saving your data. Please note that all fields are required. Please try again or contact system adminstrator."))))}}]),t}(n.Component));f({log:{message:"testing debug log",level:"info",origin:"client"},logToServer:!0});var x=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement(m.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:g}),r.a.createElement(V,{exact:!0,path:"/update_property/:id",component:P}),r.a.createElement(V,{exact:!0,path:"/update_properties",component:w}),r.a.createElement(V,{exact:!0,path:"/new_property",component:B}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.db028aaa.chunk.js.map