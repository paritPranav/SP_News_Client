"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[117],{8117:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var s=n(9439),i=n(1912),a=n(2791),l=n(6907),c=n(1087),r=n(184);function d(){var e=(0,a.useState)([]),t=(0,s.Z)(e,2),n=t[0],d=t[1];return(0,a.useEffect)((function(){i.Z.get("https://backend.spnews.media/posts/top5").then((function(e){var t=e.data;d(t)}))}),[]),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"LatestNewscontainer",style:{height:"auto"},children:[(0,r.jsx)("div",{style:{backgroundColor:"#e30905"},children:(0,r.jsx)("h2",{className:"title",style:{color:"white",paddingBottom:"5px"},children:"Top 5 News..."})}),(0,r.jsx)("div",{className:"innercontainer",style:{padding:"0",margin:"0",height:"auto"},children:n.map((function(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c.rU,{style:{textDecoration:"none",color:"black"},to:"/fullpost/"+e._id,state:{pid:e._id},children:[(0,r.jsx)("div",{className:"titleHeading",style:{padding:"10px"},children:(0,r.jsxs)("h4",{children:[(0,r.jsx)(l.p6n,{style:{paddingTop:"5px"}}),e.Post_Title.substring(0,80),"..."]})}),(0,r.jsx)("hr",{style:{width:"100%",marginLeft:"0",color:"black",display:"block"}})]})})}))})]})})}}}]);
//# sourceMappingURL=117.f6e97704.chunk.js.map