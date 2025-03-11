import{ef as o,jq as u,eg as h,fy as S,jr as l,bm as D}from"./CodeBlock-DBIw63CI.js";function d(i){i=i.replaceAll(/LTS|LT|L{1,4}|l{1,4}/g,"[$&]");let e="";const t=/(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|M{1,4}|Do|DDDo|D{1,4}|d{2,4}|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;for(const s of i.match(t)||[])switch(s){case"D":e+="d";break;case"DD":e+="dd";break;case"DDD":e+="o";break;case"d":e+="c";break;case"ddd":e+="ccc";break;case"dddd":e+="cccc";break;case"M":e+="L";break;case"MM":e+="LL";break;case"MMM":e+="LLL";break;case"MMMM":e+="LLLL";break;case"YY":e+="yy";break;case"Y":case"YYYY":e+="yyyy";break;case"Q":e+="q";break;case"X":case"x":e+=s;break;default:s.length>=2&&s.slice(0,1)==="["&&s.slice(-1)==="]"?e+=`'${s.slice(1,-1)}'`:e+=`'${s}'`}return e}const f="esri.core.sql.dateonly";let p=class a{constructor(e,t,s){this._year=e,this._month=t,this._day=s,this.declaredRootClass=f}static isDateOnly(e){return typeof e=="object"&&e!=null&&"declaredRootClass"in e&&e.declaredRootClass===f}get month(){return this._month}get monthJS(){return this._month-1}get year(){return this._year}get day(){return this._day}get isValid(){return this.toDateTime("unknown").isValid}equals(e){return a.isDateOnly(e)&&e.day===this.day&&e.month===this.month&&e.year===this.year}clone(){return new a(this._year,this._month,this._day)}toDateTime(e){return o.fromObject({day:this.day,month:this.month,year:this.year},{zone:u(e)})}toDateTimeLuxon(e){return o.fromObject({day:this.day,month:this.month,year:this.year},{zone:u(e)})}toString(){return`${this.year.toString().padStart(4,"0")}-${this.month.toString().padStart(2,"0")}-${this.day.toString().padStart(2,"0")}`}toFormat(e=null,t=!0){if(e===null||e==="")return this.toString();if(t&&(e=d(e)),!e)return"";const s=this.toDateTime("unknown");return h.dateTimeToArcadeDate(s).toFormat(e,{locale:S(),numberingSystem:"latn"})}toArcadeDate(){const e=this.toDateTime("unknown");return h.dateTimeToArcadeDate(e)}toNumber(){return this.toDateTime("unknown").toMillis()}toJSDate(){return this.toDateTime("unknown").toJSDate()}toStorageFormat(){return this.toFormat("yyyy-LL-dd",!1)}toSQLValue(){return this.toFormat("yyyy-LL-dd",!1)}toSQLWithKeyword(){return"date '"+this.toFormat("yyyy-LL-dd",!1)+"'"}plus(e,t){return a.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}toUTCDateTime(){return o.utc(this.year,this.month,this.day,0,0,0,0)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return t==="M"?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}static fromMilliseconds(e){const t=o.fromMillis(e,{zone:l.utcInstance});return t.isValid?a.fromParts(t.year,t.month,t.day):null}static fromSeconds(e){const t=o.fromSeconds(e,{zone:l.utcInstance});return t.isValid?a.fromParts(t.year,t.month,t.day):null}static fromReader(e){if(!e)return null;const t=e.split("-");return t.length!==3?null:new a(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10))}static fromParts(e,t,s){const r=new a(e,t,s);return r.isValid===!1?null:r}static fromDateJS(e){return a.fromParts(e.getFullYear(),e.getMonth()+1,e.getDay())}static fromDateTime(e){return a.fromParts(e.year,e.month,e.day)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(e,t=null){if(e===""||e===null)return null;const s=[];if(t)(t=d(t))&&s.push(t);else if(t===null||t===""){const r=o.fromISO(e,{setZone:!0});return r.isValid?a.fromParts(r.year,r.month,r.day):null}for(const r of s){const n=o.fromFormat(e,t??r);if(n.isValid)return new a(n.year,n.month,n.day)}return null}static fromNow(e="system"){const t=o.fromJSDate(new Date).setZone(u(e));return new a(t.year,t.month,t.day)}};function C(i){if(i==null)return null;switch(i.type){case"polygon":case"multipoint":case"polyline":return i.extent;case"point":return new D({xmin:i.x,ymin:i.y,xmax:i.x,ymax:i.y,spatialReference:i.spatialReference});case"extent":return i}return null}function U(i){if(i==null)return null;const e=i.clone();return i.cache._geVersion!==void 0&&(e.cache._geVersion=i.cache._geVersion),e}function m(i){return typeof i=="number"&&isFinite(i)&&Math.floor(i)===i}function y(i){if(!i)return"";const e=/(a|A|hh?|HH?|mm?|ss?|SSS|S|.)/g;let t="";for(const s of i.match(e)||[])switch(s){case"SSS":case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":t+=s;break;case"A":case"a":t+="a";break;default:t+=`'${s}'`}return t}const T="esri.core.sql.timeonly";class c{constructor(e,t,s,r){this._hour=e,this._minute=t,this._second=s,this._millisecond=r,this.declaredRootClass=T}static isTimeOnly(e){return typeof e=="object"&&e!=null&&"declaredRootClass"in e&&e.declaredRootClass===T}get hour(){return this._hour}get minute(){return this._minute}get second(){return this._second}get millisecond(){return this._millisecond}equals(e){return c.isTimeOnly(e)&&e.hour===this.hour&&e.minute===this.minute&&e.second===this.second&&e.millisecond===this.millisecond}clone(){return new c(this.hour,this.minute,this.second,this.millisecond)}isValid(){return m(this.hour)&&m(this.minute)&&m(this.second)&&m(this.millisecond)&&this.hour>=0&&this.hour<24&&this.minute>=0&&this.minute<60&&this.second>=0&&this.second<60&&this.millisecond>=0&&this.millisecond<1e3}toString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`+(this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):"")}toSQLValue(){return this.toString()}toSQLWithKeyword(){return`time '${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}${this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):""}'`}toStorageString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`}toFormat(e=null){return e===null||e===""?this.toString():(e=y(e))?o.local(1970,1,1,this._hour,this._minute,this._second,this._millisecond).toFormat(e,{locale:S(),numberingSystem:"latn"}):""}toNumber(){return this.millisecond+1e3*this.second+1e3*this.minute*60+60*this.hour*60*1e3}static fromParts(e,t,s,r){const n=new c(e,t,s,r);return n.isValid()?n:null}static fromReader(e){if(!e)return null;const t=e.split(":");return t.length!==3?null:new c(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10),0)}static fromMilliseconds(e){if(e>864e5||e<0)return null;const t=Math.floor(e/1e3%60),s=Math.floor(e/6e4%60),r=Math.floor(e/36e5%24),n=Math.floor(e%1e3);return new c(r,s,t,n)}static fromDateJS(e){return new c(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}static fromDateTime(e){return new c(e.hour,e.minute,e.second,e.millisecond)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(e,t=null){if(e===""||e===null)return null;const s=[];t?(t=y(t))&&s.push(t):t!==null&&t!==""||(s.push("HH:mm:ss"),s.push("HH:mm:ss.SSS"),s.push("hh:mm:ss a"),s.push("hh:mm:ss.SSS a"),s.push("HH:mm"),s.push("hh:mm a"),s.push("H:mm"),s.push("h:mm a"),s.push("H:mm:ss"),s.push("h:mm:ss a"),s.push("H:mm:ss.SSS"),s.push("h:mm:ss.SSS a"));for(const r of s){const n=o.fromFormat(e,r);if(n.isValid)return new c(n.hour,n.minute,n.second,n.millisecond)}return null}plus(e,t){switch(e){case"days":case"years":case"months":return this.clone();case"hours":case"minutes":case"seconds":case"milliseconds":return c.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}return null}toUTCDateTime(){return o.utc(1970,1,1,this.hour,this.minute,this.second,this.millisecond)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return t==="M"?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}}export{p as i,C as n,U as o,c as r};
