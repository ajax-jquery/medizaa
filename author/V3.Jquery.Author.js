var urlblog = "https://www.sophiainstitute.id";

var numfeed = 4; // Ubah sesusi selera

var startfeed = 0;

var charac = 50;

var urlprevious, urlnext;

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('I e=["\\o","\\h\\q\\m\\j\\i","\\m\\g\\l\\C\\i\\y","\\p","\\j\\l\\r\\g\\K\\1n\\w","\\h\\E\\J\\h\\i\\k\\j\\l\\C","","\\N\\u\\j\\l","\\m\\j\\l\\P","\\w\\g\\g\\r","\\q\\k\\g\\z\\j\\u\\E\\h","\\k\\g\\m","\\y\\k\\g\\w","\\l\\g\\K\\i","\\g\\l\\i\\k\\L","\\1o\\i","\\i\\j\\i\\m\\g","\\f\\m\\i\\g\\k\\l\\f\\i\\g","\\t\\u\\l\\i\\g\\l\\i","\\h\\E\\B\\B\\f\\k\\L","\\B\\g\\r\\j\\f\\1o\\i\\y\\E\\B\\J\\l\\f\\j\\m","\\E\\k\\m","\\y\\i\\i\\q\\h\\W\\s\\s\\1c\\M\\J\\q\\M\\J\\m\\u\\C\\h\\q\\u\\i\\M\\t\\u\\B\\s\\A\\1d\\1e\\E\\1p\\1e\\l\\L\\S\\P\\1n\\P\\s\\1H\\1p\\k\\P\\1I\\L\\K\\1q\\X\\N\\1r\\s\\H\\H\\H\\H\\H\\H\\H\\H\\X\\f\\h\\s\\q\\1J\\1s\\1K\\H\\Y\\1L\\1M\\i\\r\\h\\s\\h\\S\\1N\\1f\\1f\\s\\l\\u\\A\\j\\B\\f\\C\\g\\M\\q\\l\\C","\\o\\r\\j\\z\\v\\t\\m\\f\\h\\h\\x\\n\\k\\g\\t\\g\\l\\i\\q\\u\\h\\i\\g\\m\\n\\p","\\o\\f\\v\\y\\k\\g\\w\\x\\n","\\n\\p\\o\\j\\B\\C\\v\\h\\k\\t\\x\\n","\\n\\v\\s\\p\\o\\s\\f\\p","\\o\\y\\1c\\p\\o\\f\\v\\y\\k\\g\\w\\x\\n","\\n\\p","\\o\\s\\f\\p\\o\\s\\y\\1c\\p","\\o\\q\\p","\\M\\M\\M\\M\\o\\s\\q\\p","\\o\\s\\r\\j\\z\\p","\\j\\l\\l\\g\\k\\1e\\1t\\1O\\1s","\\k\\g\\t\\g\\l\\i\\q\\u\\h\\i\\h\\r\\q","\\C\\g\\i\\Y\\m\\g\\B\\g\\l\\i\\1d\\L\\1r\\r","\\o\\f\\v\\y\\k\\g\\w\\x\\n\\N\\f\\z\\f\\h\\t\\k\\j\\q\\i\\W\\l\\f\\z\\j\\C\\f\\h\\j\\w\\g\\g\\r\\1g\\A\\S\\1h\\1i\\n\\v\\t\\m\\f\\h\\h\\x\\n\\q\\k\\g\\z\\j\\u\\E\\h\\n\\p\\o\\j\\v\\t\\m\\f\\h\\h\\x\\n\\w\\f\\h\\v\\w\\f\\A\\f\\k\\k\\u\\Q\\A\\m\\g\\w\\i\\n\\p\\o\\s\\j\\p\\o\\s\\f\\p","\\o\\h\\q\\f\\l\\v\\t\\m\\f\\h\\h\\x\\n\\l\\u\\f\\t\\i\\j\\z\\g\\r\\v\\q\\k\\g\\z\\j\\u\\E\\h\\n\\p\\o\\j\\v\\t\\m\\f\\h\\h\\x\\n\\w\\f\\h\\v\\w\\f\\A\\f\\k\\k\\u\\Q\\A\\m\\g\\w\\i\\n\\p\\o\\s\\j\\p\\o\\s\\h\\q\\f\\l\\p","\\o\\f\\v\\y\\k\\g\\w\\x\\n\\N\\f\\z\\f\\h\\t\\k\\j\\q\\i\\W\\l\\f\\z\\j\\C\\f\\h\\j\\w\\g\\g\\r\\1g\\S\\1h\\1i\\n\\v\\t\\m\\f\\h\\h\\x\\n\\l\\g\\K\\i\\n\\p\\o\\j\\v\\t\\m\\f\\h\\h\\x\\n\\w\\f\\h\\v\\w\\f\\A\\f\\k\\k\\u\\Q\\A\\k\\j\\C\\y\\i\\n\\p\\o\\s\\j\\p\\o\\s\\f\\p","\\o\\h\\q\\f\\l\\v\\t\\m\\f\\h\\h\\x\\n\\l\\u\\f\\t\\i\\j\\z\\g\\r\\v\\l\\g\\K\\i\\n\\p\\o\\j\\v\\t\\m\\f\\h\\h\\x\\n\\w\\f\\h\\v\\w\\f\\A\\f\\k\\k\\u\\Q\\A\\k\\j\\C\\y\\i\\n\\p\\o\\s\\j\\p\\o\\s\\h\\q\\f\\l\\p","\\o\\f\\v\\y\\k\\g\\w\\x\\n\\N\\f\\z\\f\\h\\t\\k\\j\\q\\i\\W\\l\\f\\z\\j\\C\\f\\h\\j\\w\\g\\g\\r\\1g\\1f\\1h\\1i\\n\\v\\t\\m\\f\\h\\h\\x\\n\\y\\u\\B\\g\\n\\p\\o\\j\\v\\t\\m\\f\\h\\h\\x\\n\\w\\f\\h\\v\\w\\f\\A\\y\\u\\B\\g\\n\\p\\o\\s\\j\\p\\o\\s\\f\\p","\\1P\\j\\P\\j\\k\\f\\l\\1q\\j\\i\\f\\l\\f\\z\\w\\g\\g\\r","\\1u","\\1u\\h\\i\\f\\k\\i\\A\\j\\l\\r\\g\\K\\x\\S\\Z\\B\\f\\K\\A\\k\\g\\h\\E\\m\\i\\h\\x","\\Z\\u\\k\\r\\g\\k\\J\\L\\x\\q\\E\\J\\m\\j\\h\\y\\g\\r\\Z\\f\\m\\i\\x\\N\\h\\u\\l\\A\\j\\l\\A\\h\\t\\k\\j\\q\\i","\\Z\\t\\f\\m\\m\\J\\f\\t\\P\\x\\h\\y\\u\\Q\\k\\g\\t\\g\\l\\i\\q\\u\\h\\i\\h\\r\\q","\\o\\r\\j\\z\\v\\j\\r\\x\\n\\k\\g\\t\\g\\l\\i\\q\\u\\h\\i\\m\\u\\f\\r\\n\\p\\o\\s\\r\\j\\z\\p","\\s\\w\\g\\g\\r\\h\\s\\q\\u\\h\\i\\h\\s\\r\\g\\w\\f\\E\\m\\i\\s\\A\\s\\1Q\\E\\i\\y\\u\\k\\v","\\h\\t\\k\\j\\q\\i","\\t\\k\\g\\f\\i\\g\\Y\\m\\g\\B\\g\\l\\i","\\i\\L\\q\\g","\\i\\g\\K\\i\\s\\N\\f\\z\\f\\h\\t\\k\\j\\q\\i","\\h\\g\\i\\H\\i\\i\\k\\j\\J\\E\\i\\g","\\h\\k\\t","\\j\\r","\\r\\g\\Q\\f\\m\\f\\J\\g\\m","\\f\\q\\q\\g\\l\\r\\X\\y\\j\\m\\r","\\y\\g\\f\\r","\\C\\g\\i\\Y\\m\\g\\B\\g\\l\\i\\h\\1d\\L\\1t\\f\\C\\1v\\f\\B\\g","\\q\\f\\k\\g\\l\\i\\1v\\u\\r\\g","\\k\\g\\B\\u\\z\\g\\X\\y\\j\\m\\r"];R 1w(a,b){1a(I c=a[e[1]](e[0]),F=0;F<c[e[2]];F++){-1!=c[F][e[4]](e[3])&&(c[F]=c[F][e[5]](c[F][e[4]](e[3])+1,c[F][e[2]]))};1R c=c[e[7]](e[6]),c=c[e[5]](0,b-1)}R 1S(a){I b,D,F,1j,1k,G=e[6];T=e[6],U=e[6];1a(I c=0;c<a[e[9]][e[8]][e[2]];c++){e[10]==a[e[9]][e[8]][c][e[11]]&&(T=a[e[9]][e[8]][c][e[12]]),e[13]==a[e[9]][e[8]][c][e[11]]&&(U=a[e[9]][e[8]][c][e[12]])};1a(I d=0;d<1x&&d!=a[e[9]][e[14]][e[2]];d++){b=a[e[9]][e[14]][d],D=b[e[16]][e[15]];1a(I c=0;c<b[e[8]][e[2]];c++){1T(e[17]==b[e[8]][c][e[11]]){F=b[e[8]][c][e[12]];1U}};1k=e[18]1l b?b[e[18]][e[15]]:e[19]1l b?b[e[19]][e[15]]:e[6],1j=e[20]1l b?b[e[20]][e[21]]:e[22],G+=e[23],G+=e[24]+F+e[25]+1j+e[26],G+=e[27]+F+e[28]+D+e[29],G+=e[1V]+1w(1k,1W)+e[1X],G+=e[1Y]};O[e[V]](e[1y])[e[1b]]=G,G=e[6],G+=T?e[1Z]:e[2a],G+=U?e[2b]:e[2c],G+=e[2d],O[e[V]](e[1z])[e[1b]]=G}R 1A(a){I b,D;-1==a?(b=T[e[4]](e[1B]),D=T[e[5]](b)):1==a?(b=U[e[4]](e[1B]),D=U[e[5]](b)):D=e[2e]+1x+e[2f],D+=e[2g],1C(D)}R 1C(a){1==1D&&1E(),O[e[V]](e[1y])[e[1b]]=e[2h],O[e[V]](e[1z])[e[1b]]=e[6];I b=2i+e[2j]+2k+a,D=O[e[2l]](e[2m]);D[e[1m]](e[2n],e[2o]),D[e[1m]](e[2p],b),D[e[1m]](e[2q],e[1F]),O[e[2r]](e[2s])[0][e[2t]](D),1D=1}R 1E(){I a=O[e[V]](e[1F]),1G=a[e[2u]];1G[e[2v]](a)}2w=R(){1A(0)}',62,157,'||||||||||||||_0x6807|x61|x65|x73|x74|x69|x72|x6E|x6C|x27|x3C|x3E|x70|x64|x2F|x63|x6F|x20|x66|x3D|x68|x76|x2D|x6D|x67|_0xc508x4|x75|_0xc508x5|_0xc508x9|x41|var|x62|x78|x79|x2E|x6A|document|x6B|x77|function|x31|urlprevious|urlnext|35|x3A|x43|x45|x26|||||||||||for|33|x33|x42|x48|x30|x28|x29|x3B|_0xc508x7|_0xc508x8|in|52|x4F|x24|x58|x4B|x49|x4C|x54|x3F|x4E|pikiranfeed|numfeed|34|41|navigasifeed|42|incluirscript|startfeed|removerscript|55|_0xc508x3|x56|x53|x5A|x4A|x55|x44|x36|x4D|x50|u13AA|return|showrecentpostsdp|if|break|30|charac|31|32|36|||||||||||37|38|39|40|43|44|45|46|urlblog|47|NamaPenulis|49|48|50|51|53|54|58|57|56|59|60|onload'.split('|'),0,{}));function loadCSS(e,t,n){eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('x b=["\\w\\g\\a\\r\\g\\c\\d\\j\\l\\c","\\f\\j\\h\\F","\\l\\d\\a\\i\\c\\a\\u\\f\\a\\k\\a\\h\\c","\\p\\m\\l\\w\\k\\a\\h\\c","\\g\\l\\d\\j\\D\\c","\\z\\a\\c\\u\\f\\a\\k\\a\\h\\c\\g\\C\\q\\E\\i\\z\\v\\i\\k\\a","\\d\\a\\f","\\g\\c\\q\\f\\a\\g\\A\\a\\a\\c","\\A\\d\\a\\B","\\k\\a\\p\\j\\i","\\m\\h\\f\\q\\r\\G","\\j\\h\\g\\a\\d\\c\\C\\a\\B\\m\\d\\a","\\D\\i\\d\\a\\h\\c\\v\\m\\p\\a","\\i\\f\\f"];b[0];x o=y[b[3]][b[2]](b[1]),s=t||y[b[3]][b[5]](b[4])[0];o[b[6]]=b[7],o[b[8]]=e,o[b[9]]=b[J],s[b[K]][b[H]](o,s),I(L(){o[b[9]]=n||b[M]})',49,49,'||||||||||x65|_0x6bba|x74|x72||x6C|x73|x6E|x61|x69|x6D|x63|x6F|||x64|x79|x20|||x45|x4E|x75|var|window|x67|x68|x66|x42|x70|x54|x6B|x78|11|setTimeout|10|12|function|13'.split('|'),0,{}))}

loadCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");loadCSS("https://pro.fontawesome.com/releases/v5.15.1/css/all.css");loadCSS("https://cdn.jsdelivr.net/gh/ajax-jquery/sophia@main/author/V2.style.author.css");
