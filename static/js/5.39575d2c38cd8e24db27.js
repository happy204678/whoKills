webpackJsonp([5],{"8D19":function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=o("7t+N"),s=o.n(e),l={data:function(){return{hastodo:!1,modifyclicked:!1,savespan:"",thisli:"",thisspan:"",step:[!1,!1,!1,!1],todocookie:[],donecookie:[]}},watch:{hastodo:function(t){!0===t?s()(".listplace").css("display","-webkit-box"):s()(".listplace").css("display","none")}},mounted:function(){this.getCookie()},methods:{addTodo:function(){this.modifyclicked&&this.notmod();var t=s()(".input>.text").val();""!==t&&void 0!==t&&(s()(".todolist ul").append('<li class="li" style="margin: 2vw 0 2vw 0"><input type="checkbox" class="check"><span style="width: 40vw;position: absolute;overflow: hidden;height: 5vw;">'+t+"</span></li>"),s()(".input>.text").val("")),this.displaytodolist()},modifyTodo:function(){var t=s()(".todolist ul").children().length,i=0,o=this;if(this.modifyclicked)""!==o.thisli.children("input.modifyval").val()?(o.thisli.append('<span style="width: 39vw;position: absolute;overflow: hidden;height: 5vw;">'+o.thisli.children("input.modifyval").val()+"</span>"),o.thisli.children("input.check").removeAttr("disabled"),o.thisspan="",o.thisli.children("input.modifyval").remove(),o.thisli="",o.savespan="",this.modifyclicked=!1,s()(".modify").removeAttr("style")):o.notmod(),this.displaytodolist();else{for(var e=0;e<t;e++)!0===s()(".todolist ul li .check").eq(e).prop("checked")&&(o.thisspan=s()(".todolist ul li span").eq(e),o.savespan=s()(".todolist ul li span").eq(e).html(),o.thisli=s()(".todolist ul li").eq(e),i++);1===i?(this.modifyclicked=!0,o.thisli.children("input").prop("disabled","disabled"),o.thisli.children("input").prop("checked",!1),s()(".modify").css({"background-color":"#ff9900",color:"white",border:"#ff9900"}),o.history=o.thisspan,o.thisspan.remove(),o.thisli.append('<input class="modifyval" type="text" style="width: 40vw;">')):i<1||alert("一次只能修改一個")}},notmod:function(){this.thisli.append('<span style="width: 39vw;position: absolute;overflow: hidden;height: 5vw;">'+this.savespan+"</span>"),this.thisli.children("input.check").removeAttr("disabled"),this.thisspan="",this.thisli.children("input.modifyval").remove(),this.thisli="",this.savespan="",this.modifyclicked=!1,s()(".modify").removeAttr("style")},deleteTodo:function(){this.modifyclicked&&this.notmod();for(var t=[],i=s()(".todolist ul").children().length,o=0;o<i;o++)if(!1===s()(".todolist ul li .check").eq(o).prop("checked")){var e=s()(".todolist ul li span").eq(o).html();t.push(e)}s()(".todolist ul li").remove();for(var l=0;l<t.length;l++)s()(".todolist ul").append('<li class="li" style="margin: 2vw 0 2vw 0"><input type="checkbox" class="check"><span style="width: 40vw;position: absolute;overflow: hidden;height: 5vw;">'+t[l]+"</span></li>");this.displaytodolist()},done:function(){this.modifyclicked&&this.notmod();for(var t=[],i=0;i<s()(".todolist ul").children().length;i++)if(!0===s()(".todolist ul li .check").eq(i).prop("checked")){var o=s()(".todolist ul li span").eq(i).html();t.push(o)}this.deleteTodo();for(var e=0;e<t.length;e++)s()(".donelist ul").append('<li style="margin: 2vw 0 2vw 0"><input type="checkbox" checked disabled><span style="width: 39vw;position: absolute;overflow: hidden;height: 5vw;">'+t[e]+"</span><li>");this.displaytodolist()},displaytodolist:function(){s()(".todolist ul li").length>0||s()(".donelist ul li").length>0?this.hastodo=!0:this.hastodo=!1,this.reset(),this.setCookie(this.todocookie,this.donecookie,3)},setCookie:function(t,i,o){this.delcoockie("todo"),this.delcoockie("done");var e=new Date;e.setTime(e.getTime()+864e5*o),window.document.cookie="todo="+t+";path=/;expires="+e.toGMTString(),window.document.cookie="done="+i+";path=/;expires="+e.toGMTString()},getCookie:function(){if(document.cookie.length>0){for(var t=document.cookie.split("; "),i=0;i<t.length;i++){var o=t[i].split("=");if("todo"===o[0])for(var e=o[1].split(","),l=0;l<e.length;l++)""!==e[l]&&(console.log(document.cookie),s()(".todolist ul").append('<li class="li" style="margin: 2vw 0 2vw 0"><input type="checkbox" class="check"><span style="width: 40vw;position: absolute;overflow: hidden;height: 5vw;">'+e[l]+"</span></li>"));else if("done"===o[0])for(var n=o[1].split(","),d=0;d<n.length;d++)""!==n[d]&&s()(".donelist ul").append('<li class="li" style="margin: 2vw 0 2vw 0"><input type="checkbox" class="check" disabled checked><span style="width: 40vw;position: absolute;overflow: hidden;height: 5vw;">'+n[d]+"</span></li>")}this.displaytodolist()}},delcoockie:function(t){var i=new Date;i.setTime(i.getTime()-1),document.cookie=t+"=;expires="+i.toGMTString()},reset:function(){this.todocookie=[],this.donecookie=[];for(var t=s()(".todolist ul li").length,i=s()(".donelist ul li").length,o=void 0,e=0;e<t;e++)o=s()(".todolist ul li span").eq(e).html(),this.todocookie.push(o);for(var l=0;l<i;l++)o=s()(".donelist ul li span").eq(l).html(),this.donecookie.push(o)},goBack:function(){this.$router.push({path:"/"})}}},n={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",[o("div",{staticClass:"header bg-color1"},[o("div",{staticClass:"back",on:{click:function(i){return t.goBack()}}},[o("a",{attrs:{href:"javascript://"}},[t._v("返回")])]),t._v(" "),o("h2",[t._v("Todo List")])]),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"input"},[o("input",{staticClass:"text",attrs:{type:"text",placeholder:"add Todo..."}}),t._v(" "),o("input",{attrs:{type:"button",value:"+"},on:{click:t.addTodo}})]),t._v(" "),o("div",{staticClass:"clickfunc"},[o("input",{attrs:{type:"button",value:"Done"},on:{click:function(i){return t.done()}}}),t._v(" "),o("input",{staticClass:"delete",attrs:{type:"button",value:"Delete"},on:{click:function(i){return t.deleteTodo()}}}),t._v(" "),o("input",{staticClass:"modify",attrs:{type:"button",value:"Modify"},on:{click:function(i){return t.modifyTodo()}}})])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"listplace"},[i("div",{staticClass:"list todolist"},[i("h2",[this._v("Todo List:")]),this._v(" "),i("ul")]),this._v(" "),i("div",{staticClass:"list donelist"},[i("h2",[this._v("Done List:")]),this._v(" "),i("ul")])])}]};var d=o("VU/8")(l,n,!1,function(t){o("PWpd")},"data-v-05fca204",null);i.default=d.exports},PWpd:function(t,i){}});
//# sourceMappingURL=5.39575d2c38cd8e24db27.js.map