"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[6718],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2339:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"customgens",title:"Custom Generators",slug:"custom-generators.html"},l=void 0,p={unversionedId:"proptest/customgens",id:"proptest/customgens",isDocsHomePage:!1,title:"Custom Generators",description:"To write your own generator for a type T, you just create an instance of Arb or Exhaustive.",source:"@site/docs/proptest/customgens.md",sourceDirName:"proptest",slug:"/proptest/custom-generators.html",permalink:"/docs/proptest/custom-generators.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/proptest/customgens.md",tags:[],version:"current",frontMatter:{id:"customgens",title:"Custom Generators",slug:"custom-generators.html"},sidebar:"proptest",previous:{title:"Configuration",permalink:"/docs/proptest/property-test-config.html"},next:{title:"Global Configuration",permalink:"/docs/proptest/property-test-global-config.html"}},c=[{value:"Arbitrary",id:"arbitrary",children:[],level:3},{value:"Exhaustive",id:"exhaustive",children:[],level:3}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To write your own generator for a type T, you just create an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"Arb<T>")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Exhaustive<T>"),"."),(0,o.kt)("h3",{id:"arbitrary"},"Arbitrary"),(0,o.kt)("p",null,"When writing a custom arbitrary we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"arbitrary")," builder which accepts a lambda that must return the type we are generating for.\nThe parameter to this lambda is a ",(0,o.kt)("inlineCode",{parentName:"p"},"RandomSource")," parameter which contains the seed and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Random")," instance. We should typically\nuse the provided ",(0,o.kt)("inlineCode",{parentName:"p"},"RandomSource")," if we need access to a ",(0,o.kt)("inlineCode",{parentName:"p"},"kotlin.Random")," instance, as this instance will have been seeded by the framework to allow for repeatable tests."),(0,o.kt)("p",null,"For example, here is a custom arb that generates a random int between 3 and 6 using the ",(0,o.kt)("inlineCode",{parentName:"p"},"arbitrary")," builder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sillyArb = arbitrary { rs: RandomSource ->\n   rs.random.nextInt(3..6)\n}\n\n")),(0,o.kt)("p",null,"In addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"RandomSource")," parameter, the arbitrary builder lambda also provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"ArbitraryBuilderSyntax")," context which we can leverage\nto compose other arbitraries when building ours."),(0,o.kt)("p",null,"For example, here is an ",(0,o.kt)("inlineCode",{parentName:"p"},"Arbitrary")," that supports a custom class called ",(0,o.kt)("inlineCode",{parentName:"p"},"Person"),", delegating to a String arbitrary and an Int arbitrary."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class Person(val name: String, val age: Int)\n\nval personArb = arbitrary {\n   val name = Arb.string(10..12).bind()\n   val age = Arb.int(21, 150).bind()\n   Person(name, age)\n}\n")),(0,o.kt)("p",null,"The resulting arbitrary produced using this syntax is equivalent to using ",(0,o.kt)("a",{parentName:"p",href:"/docs/proptest/generator-operations.html#map"},"map"),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/proptest/generator-operations.html#flatmap"},"flatMap")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/proptest/generator-operations.html#bind"},"bind"),"."),(0,o.kt)("h3",{id:"exhaustive"},"Exhaustive"),(0,o.kt)("p",null,"When writing a custom exhaustive we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"exhaustive()")," extension function on a List. Nothing more to it than that really!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val singleDigitPrimes = listOf(2,3,5,7).exhaustive()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class PropertyExample: StringSpec({\n    "testing single digit primes" {\n        checkAll(singleDigitPrimes) { prime ->\n           isPrime(prime) shouldBe true\n           isPrime(prime * prime) shouldBe false\n        }\n    }\n})\n')))}m.isMDXComponent=!0}}]);