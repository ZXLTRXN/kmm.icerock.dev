"use strict";(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[3868],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=i,w=u["".concat(d,".").concat(s)]||u[s]||m[s]||a;return n?r.createElement(w,o(o({ref:t},c),{},{components:n})):r.createElement(w,o({ref:t},c))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5411:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o={},l="Adapter and listeners",d={unversionedId:"android/adapter",id:"android/adapter",isDocsHomePage:!1,title:"Adapter and listeners",description:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a Adapter",source:"@site/learning/android/adapter.md",sourceDirName:"android",slug:"/android/adapter",permalink:"/learning/android/adapter",editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/learning/android/adapter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0434\u043b\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f",permalink:"/learning/android/study-materials"},next:{title:"Dagger",permalink:"/learning/android/dagger"}},p=[{value:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a Adapter",id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f-\u043a-adapter",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e-\u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430",children:[]},{value:"\u0417\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u0435\u043d \u0432\u044c\u044e\u0445\u043e\u043b\u0434\u0435\u0440?",id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0443\u0436\u0435\u043d-\u0432\u044c\u044e\u0445\u043e\u043b\u0434\u0435\u0440",children:[]},{value:"\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",id:"\u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adapter-and-listeners"},"Adapter and listeners"),(0,a.kt)("h2",{id:"\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f-\u043a-adapter"},"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a Adapter"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/layout/recyclerview"},"RecyclerView"),", \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/androidx/recyclerview/widget/RecyclerView.Adapter"},"Adapter"),", \u0447\u0442\u043e\u0431\u044b \u0441\u0432\u044f\u0437\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c. \u0417\u0430\u0434\u0430\u0447\u0430 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430 - ",(0,a.kt)("inlineCode",{parentName:"p"},"Adapters provide a binding from an app-specific data set to views that are displayed within a RecyclerView")," \u0438\u0437 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/androidx/recyclerview/widget/RecyclerView.Adapter"},"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438")," \u0442.\u0435. \u043b\u0438\u0448\u044c \u0441\u0432\u044f\u0437\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u043d\u0430 UI"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u041a\u0430\u043a \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0430\u0434\u0430\u043f\u0442\u0435\u0440:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0430\u0434\u0430\u043f\u0442\u0435\u0440 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0438\u043a\u0430\u043a\u043e\u0439 \u043b\u043e\u0433\u0438\u043a\u0438 \u043f\u043e \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e \u0441 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0441\u043f\u0438\u0441\u043a\u0430. \u0415\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e \u043d\u0430\u0436\u0430\u0442\u0438\u044e \u043d\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0442\u043e \u0430\u0434\u0430\u043f\u0442\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043b\u044f\u043c\u0431\u0434\u0443 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043f\u043e\u0442\u043e\u043c \u043f\u0440\u0438\u0432\u044f\u0436\u0435\u0442 \u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e \u043d\u0430\u0434 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c"),(0,a.kt)("li",{parentName:"ul"},"\u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430 - \u044d\u0442\u043e \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043a ",(0,a.kt)("inlineCode",{parentName:"li"},"RecyclerView"))),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e-\u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430"),(0,a.kt)("p",null,"\u0420\u0430\u0437\u0431\u0435\u0440\u0435\u043c \u043f\u0440\u0438\u043c\u0435\u0440, \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"Activity")," \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u043c\u044b \u0445\u043e\u0442\u0438\u043c, \u0447\u0442\u043e\u0431\u044b \u043f\u043e \u043d\u0430\u0436\u0430\u0442\u0438\u044e \u043d\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0447\u0442\u043e-\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u043b\u043e, \u0434\u043b\u044f \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u043a\u0430\u0436\u0435\u043c ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/widget/Toast"},"Toast"),"."),(0,a.kt)("p",null,"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u044f\u0447\u0435\u0439\u043a\u0443 \u043d\u0430\u0448\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"text_row_item.xml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<TextView xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:tools="http://schemas.android.com/tools"\n    android:id="@+id/textView"\n    android:layout_width="match_parent"\n    android:layout_height="wrap_content"\n    android:text=""\n    tools:text="sample" />\n')),(0,a.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c, \u0434\u043e\u0431\u0430\u0432\u0438\u043c \u0441\u043f\u0438\u0441\u043e\u043a \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"activity_main.xml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<androidx.recyclerview.widget.RecyclerView \n    android:id="@+id/recyclerView"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    tools:listitem="@layout/text_row_item" />\n')),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomAdapter"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick-\u043b\u044f\u043c\u0431\u0434\u0443"),". \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u0432 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u0435, \u0430 \u043f\u0440\u043e\u0441\u0442\u043e \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e, \u043a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0442\u0441\u044f - \u0432\u044b\u0437\u043e\u0432\u0435\u0442\u0441\u044f ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/widget/BaseAdapter#notifyDataSetChanged()"},"notifyDataSetChanged()"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"class CustomAdapter(private val onItemClick: (Int) -> Unit) :\n    RecyclerView.Adapter<CustomAdapter.ViewHolder>() {\n\n    var items: List<String> = emptyList()\n        set(value) {\n            field = value\n            notifyDataSetChanged()\n        }\n\n    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {\n        val textView: TextView = view.findViewById(R.id.textView)\n    }\n\n    override fun onCreateViewHolder(viewGroup: ViewGroup, viewType: Int): ViewHolder {\n        val view = LayoutInflater.from(viewGroup.context)\n            .inflate(R.layout.text_row_item, viewGroup, false)\n\n        return ViewHolder(view)\n    }\n\n    override fun onBindViewHolder(viewHolder: ViewHolder, position: Int) {\n        viewHolder.textView.text = items[position]\n        viewHolder.itemView.setOnClickListener { onItemClick(position) }\n    }\n\n    override fun getItemCount() = items.size\n}\n")),(0,a.kt)("h2",{id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0443\u0436\u0435\u043d-\u0432\u044c\u044e\u0445\u043e\u043b\u0434\u0435\u0440"},"\u0417\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u0435\u043d \u0432\u044c\u044e\u0445\u043e\u043b\u0434\u0435\u0440?"),(0,a.kt)("p",null,"\u0426\u0435\u043b\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"RecyclerView")," - \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u044c\u044e\u0445\u0438 \u0441\u043f\u0438\u0441\u043a\u0430, \u0430 \u043d\u0435 \u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0440\u0430\u0437\u0443 \u0432\u0441\u0435. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e, \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043b\u0438 \u0432\u0437\u044f\u0442\u044c \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e, \u0438\u043b\u0438 \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e.\n\u0415\u0441\u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c \u0432\u0437\u044f\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e - \u0442\u043e \u0432 \u043d\u0435\u0439 \u043b\u0435\u0436\u0438\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"viewHolder"),", \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0439 \u0432\u044c\u044e\u0445\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c\u0441\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043d\u043e\u0432\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438. \u0442.\u0435. \u043d\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434 ",(0,a.kt)("inlineCode",{parentName:"p"},"findViewById"),", \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0432\u044c\u044e\u0445\u0430\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0441\u043f\u0438\u0441\u043a\u0430."),(0,a.kt)("p",null,"\u0425\u043e\u0442\u044c \u0443 \u043d\u0430\u0441 \u0438 \u0435\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043c\u0435\u0442\u043e\u0434\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"onCreateViewHolder"),", \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u0442\u0430\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"onClickListener")," \u043d\u0435\u043b\u044c\u0437\u044f, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0437\u0430\u0434\u0430\u0447\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"viewHolder-a")," - \u044d\u0442\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0432\u044c\u044e\u0445\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432. \u0418\u0437\u0443\u0447\u0438\u0442\u0435 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/androidx/recyclerview/widget/RecyclerView.ViewHolder"},"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e"),(0,a.kt)("br",{parentName:"p"}),"\n","\u0415\u0449\u0435 \u043e\u0434\u043d\u0430 \u043f\u0440\u0438\u0447\u0438\u043d\u0430, \u043f\u043e\u0447\u0435\u043c\u0443 \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0432 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/androidx/recyclerview/widget/RecyclerView.Adapter#onBindViewHolder(VH,%20int)"},"onBindViewHolder")," - \u044d\u0442\u043e \u0442\u043e, \u0447\u0442\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"viewHolder-\u044b")," \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"recyclerView"),", \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0434\u043b\u044f \u0441\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0445 \u0441\u043f\u0438\u0441\u043a\u043e\u0432 (\u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0438\u0437 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043f\u0438\u0441\u043a\u043e\u0432). \u0411\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"recyclerView"),", \u0438, \u0435\u0441\u043b\u0438 \u043e\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u044b \u0432 \u043e\u0434\u0438\u043d ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/androidx/recyclerview/widget/RecyclerView.RecycledViewPool"},"RecycledViewPool")," \u0442\u043e \u043e\u043d\u0438 \u0441\u043c\u043e\u0433\u0443\u0442 \u043e\u0431\u043c\u0435\u043d\u0438\u0432\u0430\u0442\u044c\u0441\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"viewHolder-\u0430\u043c\u0438"),", \u0438\u043c\u0435\u043d\u043d\u043e \u043f\u043e\u044d\u0442\u043e\u043c\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"viewHolder")," \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043a \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u043c\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0443 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0443, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u043b, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043f\u043e\u0442\u043e\u043c \u0435\u0433\u043e \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u0430\u0434\u0430\u043f\u0442\u0435\u0440. \u0418 \u0438\u043c\u0435\u043d\u043d\u043e \u0432 \u043c\u0435\u0442\u043e\u0434\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"onBindViewHolder")," \u0435\u0441\u0442\u044c \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u044f, \u0447\u0442\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"viewHolder")," \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043a \u043d\u0430\u0448\u0438\u043c \u0434\u0430\u043d\u043d\u044b\u043c."),(0,a.kt)("p",null,"\u041d\u0430\u043a\u043e\u043d\u0435\u0446, \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043d\u0430\u0448 \u0430\u0434\u0430\u043f\u0442\u0435\u0440, \u043f\u0440\u043e\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0441 \u043b\u044f\u043c\u0431\u0434\u043e\u0439 \u0438 \u043f\u0440\u0438\u0432\u044f\u0436\u0435\u043c \u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"recyclerView"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MainActivity : AppCompatActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n\n        val dataSet = listOf("aaa", "bbb", "ccc", "ddd", "fff", "jjj","aaa", "bbb", "ccc", "ddd", "fff", "jjj")\n        val customAdapter = CustomAdapter { onItemClick(dataSet[it]) }\n        customAdapter.items = dataSet\n\n        val recyclerView: RecyclerView = findViewById(R.id.recyclerView)\n        recyclerView.layoutManager = LinearLayoutManager(this)\n        recyclerView.adapter = customAdapter\n    }\n\n    private fun onItemClick(title: String) {\n        Toast.makeText(this, "tap on $title", Toast.LENGTH_SHORT).show()\n    }\n}\n')),(0,a.kt)("h2",{id:"\u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"},"\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u0430\u0434\u0430\u043f\u0442\u0435\u0440 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u0435 \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440, \u0430 \u0447\u0435\u0440\u0435\u0437 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u043c\u0443\u044e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e"),(0,a.kt)("li",{parentName:"ul"},"\u0432 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c\u0441\u044f \u043d\u0438\u043a\u0430\u043a\u043e\u0439 \u043b\u043e\u0433\u0438\u043a\u0438, \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,a.kt)("li",{parentName:"ul"},"\u0437\u0430\u0434\u0430\u0447\u0430 ",(0,a.kt)("inlineCode",{parentName:"li"},"viewHolder-\u0430")," - \u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0432\u044c\u044e\u0445\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0441\u043f\u0438\u0441\u043a\u0430"),(0,a.kt)("li",{parentName:"ul"},"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 onClick-\u043b\u044f\u043c\u0431\u0434\u044b \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0432 ",(0,a.kt)("inlineCode",{parentName:"li"},"onBindViewHolder"))))}m.isMDXComponent=!0}}]);