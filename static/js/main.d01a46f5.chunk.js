(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),s=n(5),o=n.n(s),a=(n(11),n(2)),d=n(3),c=n(0),l=function(e){return Object(c.jsxs)("div",{className:"bg-scooter border-t border-l border-r border-b shadow-2xl-trl flex items-center",children:[Object(c.jsx)(d.c,{className:"inline text-4xl pl-2"}),Object(c.jsx)("span",{className:"pl-2 font-semibold font-mono inline",children:e.children}),Object(c.jsx)("span",{className:"justify-self-end ml-auto mr-3 pb-1 cursor-pointer hover:text-turquoise",onClick:function(){return e.setMaximized(!e.isMaximized)},children:e.isMaximized?Object(c.jsx)(d.b,{}):Object(c.jsx)(d.a,{})})]})},b=function(e){return Object(c.jsxs)("div",{className:"mx-auto w-4/12 h-80 mt-6 mb-20",style:e.editorMaximized?{height:"90vh"}:{},children:[Object(c.jsx)(l,{isMaximized:e.editorMaximized,setMaximized:e.setEditorMaximized,children:"Editor"}),Object(c.jsx)("textarea",{id:"editor",className:"bg-iceberg p-2 pb-4 min-w-full h-full border-b border-r border-l shadow-2xl-lrb font-mono",defaultValue:e.text,onChange:function(t){return e.setText(t.target.value)}})]})},m=n(6),u=n.n(m),x=function(e){return Object(c.jsxs)("div",{className:"mx-auto w-6/12 h-full mb-10 mt-5",children:[Object(c.jsx)(l,{isMaximized:e.previewerMaximized,setMaximized:e.setPreviewerMaximized,children:"Previewer"}),Object(c.jsx)("div",{id:"preview",className:"bg-iceberg p-3 pb-4 min-w-full border-b border-r border-l shadow-2xl-lrb prose prose-sm",dangerouslySetInnerHTML:{__html:u()(e.text)}})]})};var h=function(){var e=Object(r.useState)("# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n"),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(r.useState)(!1),o=Object(a.a)(s,2),d=o[0],l=o[1],m=Object(r.useState)(!1),u=Object(a.a)(m,2),h=u[0],f=u[1];return Object(c.jsxs)("div",{className:"App min-h-screen",children:[h?"":Object(c.jsx)(b,{text:n,setText:i,editorMaximized:d,setEditorMaximized:function(){return l(!d)}}),d?"":Object(c.jsx)(x,{text:n,previewerMaximized:h,setPreviewerMaximized:function(){return f(!h)}})]})};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d01a46f5.chunk.js.map