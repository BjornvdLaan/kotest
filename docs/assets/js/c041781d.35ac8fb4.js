"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[9122],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),p=s(a),u=r,k=p["".concat(d,".").concat(u)]||p[u]||h[u]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8576:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={id:"kotlinx_datetime",title:"Kotlinx Datetime Matchers",slug:"kotlinx-datetime-matchers.html",sidebar_label:"Kotlinx Datetime"},d=void 0,s={unversionedId:"assertions/kotlinx_datetime",id:"assertions/kotlinx_datetime",isDocsHomePage:!1,title:"Kotlinx Datetime Matchers",description:"Matchers for the Kotlinx Datetime library are provided by the kotest-assertions-kotlinx-time module.",source:"@site/docs/assertions/kotlinx-datetime.md",sourceDirName:"assertions",slug:"/assertions/kotlinx-datetime-matchers.html",permalink:"/docs/assertions/kotlinx-datetime-matchers.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/kotlinx-datetime.md",tags:[],version:"current",frontMatter:{id:"kotlinx_datetime",title:"Kotlinx Datetime Matchers",slug:"kotlinx-datetime-matchers.html",sidebar_label:"Kotlinx Datetime"},sidebar:"assertions",previous:{title:"Android",permalink:"/docs/assertions/android-matchers.html"},next:{title:"Arrow",permalink:"/docs/assertions/arrow.html"}},m=[],h={toc:m};function p(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Matchers for the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx-datetime"},"Kotlinx Datetime")," library are provided by the ",(0,l.kt)("inlineCode",{parentName:"p"},"kotest-assertions-kotlinx-time")," module."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"LocalDate"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveSameYearAs(otherDate)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date has the same year as the given date.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveSameMonthAs(otherDate)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date has the same month as the given date.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveSameDayAs(otherDate)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date has the same day of the month as the given date.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldBeBefore(otherDate)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date is before the given date.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldBeAfter(otherDate)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date is after the given date.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldBeWithin(period, otherDate)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date is within the period of the given date.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldBeWithin(duration, otherDate)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date is within the duration of the given date.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldBeBetween(firstDate, secondDate)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date is between firstdate and seconddate.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveYear(year)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct year.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveMonth(month)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct month.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveDayOfYear(day)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct day of year.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveDayOfMonth(day)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct day of month.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveDayOfWeek(day)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct day of week.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveHour(hour)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct hour.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveMinute(Minute)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct minute.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveSecond(second)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date.shouldHaveNano(nano)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the date have correct nano second.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"LocalDateTime"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldHaveSameHoursAs(otherTime)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the same hours as the given time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldHaveSameMinutesAs(otherTime)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the same minutes as the given time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldHaveSameSecondsAs(otherTime)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the same seconds as the given time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldHaveSameNanosAs(otherTime)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time has the same nanos as the given time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldBeBefore(otherTime)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time is before the given time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldBeAfter(otherTime)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time is after the given time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time.shouldBeBetween(firstTime, secondTime)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the time is between firstTime and secondTime.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Instant"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"instant.shouldBeAfter(anotherInstant)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the instant is after anotherInstant")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"instant.shouldBeBefore(anotherInstant)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the instant is before anotherInstant")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"instant.shouldBeBetween(fromInstant, toInstant)")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts that the instant is between fromInstant and toInstant")))))}p.isMDXComponent=!0}}]);