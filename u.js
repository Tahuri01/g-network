const _0x1a51e8=_0xda20,_0x3583a1=_0x4c83;(function(_0x5af852,_0x7250cc){const _0x2b50e1=_0x4c83,_0x9f6446=_0xda20,_0x51f506=_0x5af852();while(!![]){try{const _0xbc7865=-parseInt(_0x9f6446(0x1e6,'8iyI'))/0x1+parseInt(_0x9f6446(0xfe,'8iyI'))/0x2+parseInt(_0x2b50e1(0x2e3))/0x3*(-parseInt(_0x9f6446(0x213,'ATcn'))/0x4)+parseInt(_0x2b50e1(0x13d))/0x5+parseInt(_0x9f6446(0x282,'m#)b'))/0x6+parseInt(_0x2b50e1(0x17d))/0x7*(-parseInt(_0x9f6446(0x2ca,'ql$('))/0x8)+parseInt(_0x9f6446(0x1fd,'4VXV'))/0x9;if(_0xbc7865===_0x7250cc)break;else _0x51f506['push'](_0x51f506['shift']());}catch(_0x2a0e02){_0x51f506['push'](_0x51f506['shift']());}}}(_0x399a,0xd8c56));const readline=require(_0x3583a1(0x28f)),axios=require(_0x1a51e8(0x1fc,'$5xC')),fs=require('fs'),{HttpsProxyAgent}=require(_0x1a51e8(0x1be,'b!wu')+'nt'),bytenode=require(_0x1a51e8(0x15f,'14S[')),{spawn}=require(_0x3583a1(0x203)),path=require(_0x3583a1(0x182)),WebSocket=require('ws');let proxy,agent;const proxyFilePath=path[_0x1a51e8(0x151,'s)p!')](__dirname,_0x1a51e8(0x272,'opwu'));try{if(fs[_0x3583a1(0x1de)](proxyFilePath)){const proxies=fs[_0x3583a1(0xf5)](proxyFilePath,_0x1a51e8(0x12b,'opwu'))[_0x1a51e8(0x257,'ql$(')]()[_0x1a51e8(0x286,'DV@@')]('\x0a');proxies[_0x3583a1(0x152)]===0x0?console[_0x3583a1(0x274)](_0x3583a1(0x124)+_0x1a51e8(0x217,'xwa4')+_0x3583a1(0x139)+_0x3583a1(0x2e0)):(proxy=proxies,agent=proxies[0x0]?new HttpsProxyAgent(_0x1a51e8(0x111,'jExh')+proxies[0x0]):null);}else console[_0x3583a1(0x274)](_0x1a51e8(0x143,'$5xC')+_0x1a51e8(0x15c,'H@ZX')+_0x3583a1(0x238)+_0x3583a1(0x29e));}catch(_0x507c84){console[_0x1a51e8(0x1ca,'tO1x')](_0x3583a1(0x2dd)+_0x1a51e8(0x1b2,'MQIV')+_0x3583a1(0x1db),_0x507c84[_0x3583a1(0x25a)]);}const creator=_0x3583a1(0x1f6),_0x52b96c={};_0x52b96c[_0x1a51e8(0x26d,'$5xC')]=process[_0x3583a1(0x109)],_0x52b96c[_0x3583a1(0x122)]=process[_0x1a51e8(0x13a,'DV@@')];const rl=readline[_0x1a51e8(0x29a,'$5xC')](_0x52b96c),_0x1d00b5={};_0x1d00b5[_0x1a51e8(0x273,'I8rD')+'en']=!![],_0x1d00b5[_0x3583a1(0x258)]='',_0x1d00b5[_0x1a51e8(0x184,'ATcn')]='',_0x1d00b5[_0x3583a1(0x16a)]=_0x1a51e8(0x28e,'ATcn');const emailPassword=_0x1d00b5;function maskId(_0x1711e1){const _0x219f35=_0x3583a1,_0x232569=_0x1a51e8,_0xf28a27=Math[_0x232569(0x225,'uZ3D')](_0x1711e1[_0x219f35(0x152)]/0x2),_0x1973be=_0x1711e1[_0x219f35(0x152)]-_0xf28a27;return''+'*'[_0x219f35(0x1d2)](_0x1973be)+_0x1711e1[_0x232569(0x2ad,'D%]W')](-_0xf28a27);}let username=_0x3583a1(0x27c);function connectWebSocket(_0x351354){const _0x4ad213=_0x1a51e8,_0x35432b=_0x3583a1;ws=new WebSocket(_0x351354),ws['on'](_0x35432b(0x22f),()=>{const _0x414a20=_0x35432b,_0x575e93=_0xda20,_0x16e8e2={};_0x16e8e2[_0x575e93(0x12f,'$5xC')]=username,_0x16e8e2[_0x575e93(0x183,'v@pY')]=_0x414a20(0x1f5);const _0x34cba0=_0x16e8e2;ws[_0x575e93(0x18e,'5Df^')]===WebSocket[_0x414a20(0xe7)]&&ws[_0x414a20(0x148)](JSON[_0x414a20(0x2b2)](_0x34cba0));}),ws['on'](_0x35432b(0x25a),async _0x3aa77e=>{const _0x1632bf=_0x35432b,_0x1dc35a=_0xda20,_0xf56a26=JSON[_0x1dc35a(0x1f9,'s)p!')](_0x3aa77e);tokenVip=_0xf56a26[_0x1632bf(0x1b3)][_0x1dc35a(0x2b7,'D%]W')],statusBot=!![];}),ws['on'](_0x35432b(0x25e),()=>{setTimeout(()=>{connectWebSocket(_0x351354);},0xbb8);}),ws['on'](_0x4ad213(0x1d6,'v@pY'),_0x5b6d5c=>{const _0x12f2b1=_0x35432b;console[_0x12f2b1(0x29c)](_0x12f2b1(0x263)+':',_0x5b6d5c);});}const _0x233cc6={};_0x233cc6[_0x3583a1(0x2b9)+_0x3583a1(0x281)]=_0x1a51e8(0x228,'J96c'),_0x233cc6[_0x1a51e8(0x19e,'Z*5^')]=_0x3583a1(0x265)+_0x1a51e8(0x2bf,'ezB0'),_0x233cc6[_0x3583a1(0x2c8)]=_0x3583a1(0x1c8),_0x233cc6[_0x3583a1(0xf4)]=_0x1a51e8(0x241,'n&bu'),_0x233cc6[_0x3583a1(0x1fe)]=_0x3583a1(0x2e1),_0x233cc6[_0x3583a1(0x259)]=_0x3583a1(0x265)+_0x1a51e8(0x28a,'4VXV'),_0x233cc6[_0x1a51e8(0x1d3,'$&t7')]=_0x1a51e8(0x1c9,'Z*5^'),_0x233cc6[_0x1a51e8(0x10d,'J96c')]=_0x3583a1(0x2cd),_0x233cc6[_0x3583a1(0x242)]=_0x1a51e8(0x1bf,'xwa4')+_0x3583a1(0x192)+_0x1a51e8(0x277,'5rkC')+_0x3583a1(0x292)+_0x1a51e8(0x2da,'203M'),_0x233cc6[_0x1a51e8(0x100,'J96c')]=_0x1a51e8(0x18a,'DjNU')+_0x1a51e8(0x1aa,'DA)o')+_0x3583a1(0x178),_0x233cc6[_0x1a51e8(0x1e7,'ebJK')]=_0x1a51e8(0x271,'$5xC')+'n',_0x233cc6[_0x1a51e8(0xed,'v@pY')]=_0x1a51e8(0x1cb,'n&bu')+'br',_0x233cc6[_0x3583a1(0x251)]=_0x1a51e8(0x1ae,'Or$5'),_0x233cc6[_0x3583a1(0x15a)]=_0x1a51e8(0x155,'ebJK'),_0x233cc6[_0x1a51e8(0x1c6,'p!M$')]=_0x3583a1(0x1c0)+_0x1a51e8(0x127,'ZNHs')+_0x3583a1(0x246)+_0x3583a1(0x224)+_0x1a51e8(0x290,'s)p!')+_0x3583a1(0x172)+_0x1a51e8(0x288,'hTI(')+_0x3583a1(0x23b)+'1';const commonHeaders=_0x233cc6;function _0xda20(_0xd4090b,_0x3ef411){const _0x399a74=_0x399a();return _0xda20=function(_0x4c8349,_0x41fcd5){_0x4c8349=_0x4c8349-0xe7;let _0x30c132=_0x399a74[_0x4c8349];if(_0xda20['EdWoJd']===undefined){var _0x43a029=function(_0x595814){const _0x1a62fa='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2ca6b0='',_0x9ce5df='';for(let _0x3dc29a=0x0,_0x5cb4c0,_0x52b96c,_0x1d00b5=0x0;_0x52b96c=_0x595814['charAt'](_0x1d00b5++);~_0x52b96c&&(_0x5cb4c0=_0x3dc29a%0x4?_0x5cb4c0*0x40+_0x52b96c:_0x52b96c,_0x3dc29a++%0x4)?_0x2ca6b0+=String['fromCharCode'](0xff&_0x5cb4c0>>(-0x2*_0x3dc29a&0x6)):0x0){_0x52b96c=_0x1a62fa['indexOf'](_0x52b96c);}for(let _0x2eafd1=0x0,_0x233cc6=_0x2ca6b0['length'];_0x2eafd1<_0x233cc6;_0x2eafd1++){_0x9ce5df+='%'+('00'+_0x2ca6b0['charCodeAt'](_0x2eafd1)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x9ce5df);};const _0xda20d9=function(_0x2d236b,_0x1ef64a){let _0x2341da=[],_0x2cebeb=0x0,_0x258879,_0x27e5f9='';_0x2d236b=_0x43a029(_0x2d236b);let _0x31566e;for(_0x31566e=0x0;_0x31566e<0x100;_0x31566e++){_0x2341da[_0x31566e]=_0x31566e;}for(_0x31566e=0x0;_0x31566e<0x100;_0x31566e++){_0x2cebeb=(_0x2cebeb+_0x2341da[_0x31566e]+_0x1ef64a['charCodeAt'](_0x31566e%_0x1ef64a['length']))%0x100,_0x258879=_0x2341da[_0x31566e],_0x2341da[_0x31566e]=_0x2341da[_0x2cebeb],_0x2341da[_0x2cebeb]=_0x258879;}_0x31566e=0x0,_0x2cebeb=0x0;for(let _0x9ca185=0x0;_0x9ca185<_0x2d236b['length'];_0x9ca185++){_0x31566e=(_0x31566e+0x1)%0x100,_0x2cebeb=(_0x2cebeb+_0x2341da[_0x31566e])%0x100,_0x258879=_0x2341da[_0x31566e],_0x2341da[_0x31566e]=_0x2341da[_0x2cebeb],_0x2341da[_0x2cebeb]=_0x258879,_0x27e5f9+=String['fromCharCode'](_0x2d236b['charCodeAt'](_0x9ca185)^_0x2341da[(_0x2341da[_0x31566e]+_0x2341da[_0x2cebeb])%0x100]);}return _0x27e5f9;};_0xda20['vJLhcd']=_0xda20d9,_0xd4090b=arguments,_0xda20['EdWoJd']=!![];}const _0xc61d55=_0x399a74[0x0],_0x54050f=_0x4c8349+_0xc61d55,_0x1970c0=_0xd4090b[_0x54050f];return!_0x1970c0?(_0xda20['PBekjw']===undefined&&(_0xda20['PBekjw']=!![]),_0x30c132=_0xda20['vJLhcd'](_0x30c132,_0x41fcd5),_0xd4090b[_0x54050f]=_0x30c132):_0x30c132=_0x1970c0,_0x30c132;},_0xda20(_0xd4090b,_0x3ef411);}async function login(){const _0x3c7826=_0x1a51e8,_0xcbb9ba=_0x3583a1;console[_0xcbb9ba(0xe9)]();try{const _0xf1063e=await axios[_0x3c7826(0x279,'681n')](_0x3c7826(0x1a3,'u@H^')+_0x3c7826(0x180,'DjNU')+_0xcbb9ba(0x1e0)+_0x3c7826(0x1d5,'Jto]')+_0xcbb9ba(0x27f)+_0xcbb9ba(0x1f2)+_0x3c7826(0x176,'jExh')+_0xcbb9ba(0x2d8),JSON[_0x3c7826(0x254,'Or$5')](emailPassword),{'headers':{...commonHeaders,'X-Firebase-Gmpid':_0x3c7826(0x221,'$&t7')+_0x3c7826(0x1f8,'n&bu')+_0x3c7826(0x145,'ezB0'),'X-Client-Version':_0xcbb9ba(0x2c3)+_0x3c7826(0x1ef,'Sf*T')+_0x3c7826(0x2a5,'ATcn'),'X-Client-Data':_0xcbb9ba(0x2cb)+_0xcbb9ba(0x159)+_0xcbb9ba(0x160)+_0x3c7826(0x28d,'I8rD'),'X-Firebase-Client':_0xcbb9ba(0x295)+_0xcbb9ba(0x1a0)+_0xcbb9ba(0x1ee)+_0x3c7826(0x27e,'fGNG')+_0xcbb9ba(0x24f)+_0x3c7826(0x2a4,'Sf*T')+_0x3c7826(0x19d,'7kil')+_0xcbb9ba(0x189)+_0x3c7826(0x26b,'J96c')+_0x3c7826(0x223,'H@ZX')+_0xcbb9ba(0x26f)+_0xcbb9ba(0x204)+_0x3c7826(0x1eb,'vgHs')+_0x3c7826(0x289,'$&t7')+_0x3c7826(0x153,'14S[')+_0x3c7826(0x120,'DV@@'),'Content-Length':JSON[_0xcbb9ba(0x2b2)](emailPassword)[_0x3c7826(0x278,'jExh')]},'httpAgent':agent,'httpsAgent':agent}),_0x2aae33=_0xf1063e[_0xcbb9ba(0x268)][_0xcbb9ba(0xee)],_0x2b6c86={};_0x2b6c86[_0xcbb9ba(0x2a9)]=_0xf1063e[_0x3c7826(0x1d4,'s)p!')][_0x3c7826(0xf3,'681n')],_0x2b6c86[_0xcbb9ba(0xee)]=_0xf1063e[_0x3c7826(0x2be,'b!wu')][_0xcbb9ba(0xee)],_0x2b6c86[_0x3c7826(0x165,'5rkC')]=_0xf1063e[_0x3c7826(0x2ce,'p!M$')][_0xcbb9ba(0x21e)];const _0x518592=_0x2b6c86;return fs[_0xcbb9ba(0x2a0)](_0x3c7826(0x208,'opwu')+_0xcbb9ba(0x156),JSON[_0xcbb9ba(0x2b2)](_0x518592,null,0x2),_0xcbb9ba(0x202)),console[_0x3c7826(0x19c,'DA)o')](_0xcbb9ba(0x2a3),_0xcbb9ba(0x1e2)),console[_0x3c7826(0x1b4,'DE9P')](_0x3c7826(0x158,'Sf*T'),_0x3c7826(0x10c,'jExh')+_0xcbb9ba(0x16e)+_0x3c7826(0x1ed,'fGNG')+_0x3c7826(0x2de,'n&bu')),token=_0x2aae33,_0x2aae33;}catch(_0x2d74fd){return console[_0xcbb9ba(0x29c)](_0xcbb9ba(0x2ab),_0x2d74fd[_0xcbb9ba(0x1ba)]?_0x2d74fd[_0xcbb9ba(0x1ba)][_0xcbb9ba(0x268)]:_0x2d74fd[_0x3c7826(0x15b,'D%]W')]),null;}}function _0x4c83(_0xd4090b,_0x3ef411){const _0x399a74=_0x399a();return _0x4c83=function(_0x4c8349,_0x41fcd5){_0x4c8349=_0x4c8349-0xe7;let _0x30c132=_0x399a74[_0x4c8349];if(_0x4c83['rcajCH']===undefined){var _0x43a029=function(_0xda20d9){const _0x595814='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1a62fa='',_0x2ca6b0='';for(let _0x9ce5df=0x0,_0x3dc29a,_0x5cb4c0,_0x52b96c=0x0;_0x5cb4c0=_0xda20d9['charAt'](_0x52b96c++);~_0x5cb4c0&&(_0x3dc29a=_0x9ce5df%0x4?_0x3dc29a*0x40+_0x5cb4c0:_0x5cb4c0,_0x9ce5df++%0x4)?_0x1a62fa+=String['fromCharCode'](0xff&_0x3dc29a>>(-0x2*_0x9ce5df&0x6)):0x0){_0x5cb4c0=_0x595814['indexOf'](_0x5cb4c0);}for(let _0x1d00b5=0x0,_0x2eafd1=_0x1a62fa['length'];_0x1d00b5<_0x2eafd1;_0x1d00b5++){_0x2ca6b0+='%'+('00'+_0x1a62fa['charCodeAt'](_0x1d00b5)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2ca6b0);};_0x4c83['KYkOKs']=_0x43a029,_0xd4090b=arguments,_0x4c83['rcajCH']=!![];}const _0xc61d55=_0x399a74[0x0],_0x54050f=_0x4c8349+_0xc61d55,_0x1970c0=_0xd4090b[_0x54050f];return!_0x1970c0?(_0x30c132=_0x4c83['KYkOKs'](_0x30c132),_0xd4090b[_0x54050f]=_0x30c132):_0x30c132=_0x1970c0,_0x30c132;},_0x4c83(_0xd4090b,_0x3ef411);}function readAccountsFromFile(){const _0x1235b7=_0x1a51e8,_0x47ef27=_0x3583a1;try{const _0x519006=fs[_0x47ef27(0xf5)](_0x1235b7(0x1ad,'DjNU'),_0x1235b7(0x20d,'ATcn')),_0xd77f1=_0x519006[_0x1235b7(0x2d3,'y$uQ')]()[_0x1235b7(0x286,'DV@@')]('\x0a')[_0x47ef27(0x137)](_0x2074bc=>{const _0x282df6=_0x47ef27,[_0x459147,_0x4a4bc3]=_0x2074bc[_0x282df6(0x164)](':'),_0x3d6df8={};return _0x3d6df8[_0x282df6(0x258)]=_0x459147,_0x3d6df8[_0x282df6(0x1ce)]=_0x4a4bc3,_0x3d6df8;});return _0xd77f1;}catch(_0x95b5b5){return console[_0x47ef27(0x29c)](_0x1235b7(0x216,'203M')+_0x47ef27(0x253),_0x95b5b5[_0x1235b7(0x2c7,'fGNG')]),[];}}function readKeyfromFile(){const _0x53fe99=_0x1a51e8,_0x524875=_0x3583a1;try{const _0x3c9004=fs[_0x524875(0xf5)](_0x53fe99(0x212,'Z*5^'),_0x53fe99(0x249,'ooXx')),_0x2119d5=_0x3c9004[_0x524875(0x244)]()[_0x524875(0x164)]('\x0a')[_0x524875(0x137)](_0x4df466=>{const _0x5724f9=_0x524875,[_0x225c8f,_0x118a7f]=_0x4df466[_0x5724f9(0x164)](':'),_0x477230={};return _0x477230[_0x5724f9(0x11f)]=_0x225c8f,_0x477230[_0x5724f9(0x1b3)]=_0x118a7f,_0x477230;});return console[_0x53fe99(0x2a7,'y$uQ')](_0x2119d5),_0x2119d5;}catch(_0x58f1cf){return console[_0x53fe99(0x293,'ql$(')](_0x524875(0x2b4)+_0x53fe99(0x174,'m#)b'),_0x58f1cf[_0x53fe99(0x2bc,'DE9P')]),[];}}async function autoLogin(){const _0x23c77f=_0x3583a1,_0xf4c540=_0x1a51e8,_0x2ca765=readAccountsFromFile();console[_0xf4c540(0x1bd,'Z*5^')](_0x2ca765),emailPassword[_0xf4c540(0x116,'4VXV')]=_0x2ca765[0x0][_0x23c77f(0x258)],emailPassword[_0xf4c540(0x2cf,'5inD')]=_0x2ca765[0x0][_0xf4c540(0x21c,'u@H^')],console[_0xf4c540(0x168,'Z*5^')](),await login(),mainMenu();}async function getNodeList(_0x71ada2){const _0x11c978=_0x1a51e8,_0x373487=_0x3583a1;try{let _0x24f39a=[],_0x49293d=0x1;const _0xf3f354=0x14;let _0x4d7d54=0x0;do{const _0x3eb27b={};_0x3eb27b[_0x373487(0x294)]=_0x49293d,_0x3eb27b[_0x373487(0x107)]=_0xf3f354,_0x3eb27b[_0x11c978(0x11d,'5rkC')]=_0x373487(0x16c),_0x3eb27b[_0x373487(0x106)]=0x0,_0x3eb27b[_0x373487(0x16c)]='',_0x3eb27b[_0x11c978(0x214,'Jto]')]='';const _0x4a903d={...commonHeaders};_0x4a903d[_0x11c978(0x2e2,'jExh')]=_0x373487(0x1cd)+_0x71ada2;const _0x317c5c={};_0x317c5c[_0x11c978(0x17a,'681n')]=_0x4a903d;const _0x354af5=await axios[_0x11c978(0x1c2,'vgHs')](_0x11c978(0x1d0,'7kil')+_0x11c978(0x1cc,'4VXV')+_0x373487(0x260)+_0x11c978(0x2bd,'DV@@'),_0x3eb27b,_0x317c5c),_0xc00c57=_0x354af5[_0x373487(0x268)][_0x373487(0x268)];_0x4d7d54=_0x354af5[_0x11c978(0xfb,'ooXx')][_0x373487(0xf8)],_0x24f39a=_0x24f39a[_0x11c978(0x187,'Or$5')](_0xc00c57),_0x49293d+=0x1;}while(_0x24f39a[_0x373487(0x152)]<_0x4d7d54);return fs[_0x373487(0x2a0)](_0x373487(0x179),JSON[_0x11c978(0x20c,'fGNG')](_0x24f39a,null,0x2),_0x373487(0x202)),console[_0x11c978(0x16f,'faxC')](_0x373487(0x2a3),_0x11c978(0x24c,'ZNHs')+_0x11c978(0x108,'n&bu')+_0x373487(0x169)),_0x24f39a;}catch(_0x2c7c29){_0x2c7c29[_0x373487(0x1ba)]&&_0x2c7c29[_0x373487(0x1ba)][_0x11c978(0x102,'mUBJ')]===0x193?(console[_0x11c978(0x19a,'xwa4')](_0x11c978(0x22c,'fGNG'),_0x11c978(0x132,'xwa4')+_0x11c978(0x2c6,'203M')+'!'),autoLogin()):console[_0x373487(0x29c)](_0x11c978(0x1a9,'DV@@')+_0x11c978(0x276,'DE9P'),_0x2c7c29);}}async function registerNode(_0x52fa21){const _0x3b8cd6=_0x3583a1,_0x280c1f=_0x1a51e8;try{const _0x423c87={...commonHeaders};_0x423c87[_0x280c1f(0x240,'faxC')]=_0x280c1f(0x26e,'5inD')+_0x52fa21,_0x423c87[_0x280c1f(0xf0,'DjNU')]=_0x3b8cd6(0x2c4)+_0x280c1f(0x1e9,'ooXx')+_0x280c1f(0x18b,'DjNU')+_0x280c1f(0x16b,'14S[');const _0x2343fc={};_0x2343fc[_0x3b8cd6(0x28b)]=_0x423c87,_0x2343fc[_0x280c1f(0x23d,'8iyI')]=agent,_0x2343fc[_0x3b8cd6(0x1a5)]=agent;const _0x48a58a=await axios[_0x3b8cd6(0x1df)](_0x3b8cd6(0x17e)+_0x3b8cd6(0xf2)+_0x280c1f(0x1ec,'Or$5')+_0x3b8cd6(0x11e),{},_0x2343fc),_0x2b0104={};_0x2b0104[_0x280c1f(0x2b6,'Z*5^')]=!![],_0x2b0104[_0x280c1f(0x21f,'D%]W')]=0x3c,_0x2b0104[_0x280c1f(0x162,'n&bu')]=_0x3b8cd6(0x1d9),_0x2b0104[_0x280c1f(0x269,'vgHs')]=0x4,_0x2b0104[_0x3b8cd6(0xf1)]=0x3e8,_0x2b0104[_0x3b8cd6(0x2a8)]='',_0x2b0104[_0x280c1f(0x17c,'faxC')]='',_0x2b0104[_0x280c1f(0x190,'y$uQ')]='';const _0x51733f=_0x2b0104;return _0x51733f[_0x280c1f(0x129,'4VXV')]=_0x48a58a[_0x280c1f(0x133,'5rkC')][_0x280c1f(0x252,'v@pY')],_0x51733f[_0x280c1f(0x10b,'s)p!')]=_0x48a58a[_0x280c1f(0x264,'MQIV')][_0x280c1f(0x1ff,'14S[')],_0x51733f[_0x3b8cd6(0x1ce)]=_0x48a58a[_0x3b8cd6(0x268)][_0x280c1f(0x230,'jExh')],fs[_0x3b8cd6(0x2a0)](_0x280c1f(0x2b1,'MQIV')+'on',JSON[_0x3b8cd6(0x2b2)](_0x51733f,null,0x2),_0x3b8cd6(0x202)),_0x48a58a[_0x3b8cd6(0x268)];}catch(_0x5a6ac2){_0x5a6ac2[_0x3b8cd6(0x1ba)]&&_0x5a6ac2[_0x280c1f(0x261,'I8rD')][_0x3b8cd6(0x2c2)]===0x193?console[_0x3b8cd6(0x274)](_0x280c1f(0x154,'hTI('),_0x280c1f(0xf6,'H@ZX')+_0x3b8cd6(0x110)+'!'):console[_0x280c1f(0x1c5,'Jto]')](_0x280c1f(0x1f3,'D%]W')+_0x3b8cd6(0x2db));}}async function performIPCheck(){const _0x457175=_0x3583a1,_0x547f1a=_0x1a51e8,_0x28ff74={};_0x28ff74[_0x547f1a(0x1c4,'v@pY')]=agent;const _0x1687f6=await axios[_0x457175(0x1b1)](_0x457175(0x17e)+_0x457175(0xf2)+_0x547f1a(0x11a,'p!M$'),_0x28ff74),_0x3cd3d8=_0x1687f6[_0x547f1a(0x133,'5rkC')]['ip'];return _0x1687f6[_0x457175(0x268)];}async function loginMenu(){const _0xa25434=_0x3583a1;rl[_0xa25434(0x2df)](_0xa25434(0x15d)+'\x20',async _0x249201=>{const _0x182929=_0xda20,_0x2d1e1d=_0xa25434;emailPassword[_0x2d1e1d(0x258)]=_0x249201,rl[_0x182929(0x15e,'$5xC')](_0x2d1e1d(0x185)+_0x2d1e1d(0xfd),async _0x2564a5=>{const _0x34e8ca=_0x2d1e1d,_0x21e84d=_0x182929;emailPassword[_0x21e84d(0x184,'ATcn')]=_0x2564a5;const _0x5e2b75=await login();_0x5e2b75?(await getNodeList(_0x5e2b75),mainMenu(_0x5e2b75)):(console[_0x21e84d(0x10a,'vgHs')](_0x21e84d(0x247,'hTI(')+_0x34e8ca(0x28c)),loginMenu());});});}function getIdToken(){const _0x5a8348=_0x1a51e8,_0x6c555b=_0x3583a1;try{const _0x38e3e8=fs[_0x6c555b(0xf5)](_0x6c555b(0x1bb)+_0x5a8348(0x2c1,'p!M$'),_0x5a8348(0x21d,'8iyI')),_0x6c3101=JSON[_0x6c555b(0x19f)](_0x38e3e8);return _0x6c3101[_0x6c555b(0xee)];}catch(_0xe2b0c5){}}function clearData(){const _0x20e49e=_0x3583a1,_0x4f2882=_0x1a51e8;fs[_0x4f2882(0x201,'xwa4')](_0x20e49e(0x101)+_0x4f2882(0x12a,'ebJK'),function(_0x3098d1,_0x19fc52){const _0x2ae874=_0x20e49e,_0x24a2ed=_0x4f2882;if(_0x3098d1)return;fs[_0x24a2ed(0x23e,'Jto]')](_0x2ae874(0x101)+_0x2ae874(0x169),function(_0x870f68){const _0x2d529d=_0x24a2ed,_0x96cf79=_0x2ae874;if(_0x870f68)return console[_0x96cf79(0x274)](_0x870f68);console[_0x2d529d(0x1d8,'5rkC')](_0x96cf79(0x135)+_0x96cf79(0x112)+_0x2d529d(0x2ba,'5Df^'));});}),fs[_0x20e49e(0x196)](_0x20e49e(0x22d),function(_0xf6cc19,_0x334435){const _0x5ad306=_0x20e49e;if(_0xf6cc19)return;fs[_0x5ad306(0x255)](_0x5ad306(0x22d),function(_0x5a5162){const _0x3f1ef9=_0xda20,_0x48ef1f=_0x5ad306;if(_0x5a5162)return console[_0x48ef1f(0x274)](_0x5a5162);console[_0x48ef1f(0x274)](_0x3f1ef9(0x1a6,'n&bu')+_0x48ef1f(0x26a));}),fs[_0x5ad306(0x196)](_0x5ad306(0x22b)+_0x5ad306(0x1c3),function(_0x15fd93,_0x2adc5c){const _0x5ba97a=_0xda20,_0x5cf96e=_0x5ad306;console[_0x5cf96e(0x274)](_0x2adc5c);if(_0x15fd93)return;fs[_0x5ba97a(0x22e,'TFkP')](_0x5cf96e(0x22b)+_0x5cf96e(0x1c3),function(_0x2fa3cd){const _0x61a73e=_0x5ba97a,_0x20b9c4=_0x5cf96e;if(_0x2fa3cd)return console[_0x20b9c4(0x274)](_0x2fa3cd);console[_0x61a73e(0x1a4,'ooXx')](_0x20b9c4(0x13c)+_0x20b9c4(0x126));});});});}function readNodeList(){const _0x2076a3=_0x3583a1,_0x29528f=_0x1a51e8;fs[_0x29528f(0x2d2,'ZNHs')](_0x29528f(0x13e,'ATcn'),_0x2076a3(0x202),(_0x4bc9b9,_0x484d7e)=>{const _0x1b6e5c=_0x2076a3,_0x18929c=_0x29528f;if(_0x4bc9b9){console[_0x18929c(0x17f,'J96c')](_0x18929c(0x1a7,'&gbm')+_0x18929c(0x24a,'u@H^'),_0x4bc9b9);return;}try{const _0x5303f8=JSON[_0x18929c(0x194,'m#)b')](_0x484d7e);console[_0x18929c(0x14e,'fGNG')](),console[_0x18929c(0x2d4,'DV@@')](),console[_0x18929c(0x147,'ATcn')](_0x1b6e5c(0x299)+_0x18929c(0x27a,'8iyI')+_0x18929c(0xfa,'mUBJ')+_0x1b6e5c(0x113)+_0x18929c(0x231,'n&bu')+_0x1b6e5c(0x218)),console[_0x1b6e5c(0x274)](_0x18929c(0x191,'vgHs')+_0x1b6e5c(0x21a)+_0x18929c(0x24e,'DA)o')+_0x18929c(0x2c9,'ezB0')+_0x18929c(0x25c,'ql$(')+_0x1b6e5c(0x227)),console[_0x18929c(0x1b4,'DE9P')](_0x18929c(0x2c5,'y$uQ')+_0x1b6e5c(0x250)+_0x18929c(0x1cf,'opwu')+_0x1b6e5c(0x250)+_0x1b6e5c(0x250)+_0x1b6e5c(0x138)),_0x5303f8[_0x18929c(0x175,'n&bu')]((_0x57ae38,_0x4051de)=>{const _0x34bac2=_0x1b6e5c,_0x38f55a=_0x18929c,_0x5e2262=_0x57ae38[_0x38f55a(0x12c,'ql$(')]?_0x34bac2(0x149):_0x38f55a(0x210,'p!M$'),_0x23fe26=_0x57ae38[_0x38f55a(0xef,'n&bu')]?_0x34bac2(0x10f):_0x34bac2(0x181),_0x28c291=parseFloat((_0x57ae38[_0x34bac2(0x267)]/0x3e8/0x3c/0x3c)[_0x38f55a(0x2d5,'D%]W')](0x1))[_0x34bac2(0x24d)]()[_0x38f55a(0x1b6,'DjNU')](0x5,'\x20'),_0x3b5ffd=_0x57ae38['id'][_0x38f55a(0x215,'DV@@')](0x12,'\x20'),_0xca61ff=_0x23fe26[_0x34bac2(0x1e1)](0xa,'\x20'),_0x7d56fd=_0x57ae38[_0x38f55a(0x25d,'DE9P')]!==undefined?_0x57ae38[_0x34bac2(0x16d)][_0x38f55a(0x1f4,'5Df^')]()[_0x34bac2(0x1e1)](0x6,'\x20'):_0x38f55a(0x1f1,'v@pY'),_0x1a9e44=_0x57ae38[_0x34bac2(0x18f)]!==undefined?(_0x57ae38[_0x38f55a(0x2d1,'D%]W')]/0x186a0)[_0x38f55a(0x2ae,'n&bu')](0x2)[_0x38f55a(0x20f,'uZ3D')](0x7,'\x20'):_0x34bac2(0xf7),_0x27ec58=_0x57ae38['ip']||_0x34bac2(0xf7),_0x118449=_0x57ae38[_0x34bac2(0x2b8)]&&_0x57ae38[_0x38f55a(0x140,'I8rD')][_0x38f55a(0x1bc,'ql$(')]?_0x57ae38[_0x34bac2(0x2b8)][_0x38f55a(0x1af,'5rkC')]:_0x34bac2(0x1b0);console[_0x34bac2(0x274)]((_0x4051de+0x1)[_0x34bac2(0x24d)]()[_0x38f55a(0x105,'5Df^')](0x2,'\x20')+_0x38f55a(0x2d6,'xwa4')+_0x3b5ffd+'|\x20'+_0x5e2262+_0xca61ff+_0x38f55a(0x1e4,'xwa4')+_0x7d56fd+_0x34bac2(0x1d7)+_0x1a9e44+_0x38f55a(0xec,'5rkC')+_0x118449+')');}),console[_0x18929c(0x2cc,'H@ZX')](_0x1b6e5c(0x299)+_0x18929c(0x1f7,'DE9P')+_0x1b6e5c(0x299)+_0x18929c(0x2ac,'ebJK')+_0x1b6e5c(0x299)+'=='),mainMenu();}catch(_0xf5e3fe){console[_0x1b6e5c(0x29c)](_0x18929c(0x24b,'faxC')+_0x1b6e5c(0x287),_0xf5e3fe);}});}const delay=_0x1b6d7b=>new Promise(_0x2fc2ae=>setTimeout(_0x2fc2ae,_0x1b6d7b));async function runAllNode(){const _0x2e265d=_0x1a51e8,_0x3e9d9b=_0x3583a1;console[_0x3e9d9b(0x274)](_0x3e9d9b(0x299)+_0x3e9d9b(0x2a6)),console[_0x3e9d9b(0x274)](_0x3e9d9b(0x222),_0x3e9d9b(0x29d)+_0x3e9d9b(0x1a1)),console[_0x2e265d(0x130,'p!M$')](_0x2e265d(0x1c1,'TFkP'),_0x2e265d(0x2d9,'DE9P')+creator),console[_0x3e9d9b(0x274)](_0x2e265d(0x12e,'hTI(')+_0x3e9d9b(0x2a6));let _0x258c9d;const _0xb9d9b=fs[_0x2e265d(0x14b,'DV@@')](_0x2e265d(0x25f,'5inD'));_0xb9d9b&&(_0x258c9d=JSON[_0x3e9d9b(0x19f)](fs[_0x2e265d(0x114,'14S[')](_0x2e265d(0x1e3,'y$uQ'))));let _0x34c047=await axios[_0x3e9d9b(0x1b1)](_0x3e9d9b(0x14d)+_0x2e265d(0x26c,'Sf*T')+'/'+dataUser[_0x2e265d(0x2d0,'Jto]')]),_0x4d9790,_0x213e3e=_0x34c047[_0x3e9d9b(0x268)][_0x2e265d(0x166,'681n')],_0x1e9b20=_0x34c047[_0x3e9d9b(0x268)][_0x3e9d9b(0x11c)],_0x4c2ad2=_0x1e9b20-_0x213e3e;console[_0x2e265d(0x136,'7kil')](_0x4c2ad2),console[_0x3e9d9b(0x274)](_0x2e265d(0x171,'vgHs')+_0x4c2ad2);const _0x2d5440=Math[_0x2e265d(0x1dd,'Z*5^')](_0x4c2ad2,_0x258c9d[_0x2e265d(0x2a1,'ezB0')]);if(_0x4c2ad2>0x0)for(let _0x30193b=0x0;_0x30193b<_0x2d5440;_0x30193b++){if(_0x258c9d[_0x30193b][_0x2e265d(0x1dc,'$&t7')]){console[_0x3e9d9b(0x274)](_0x3e9d9b(0x23f)+_0x258c9d[_0x30193b]['id']+(_0x3e9d9b(0x232)+_0x3e9d9b(0x1ea)+'g.'));continue;}await delay(0x3e8);let _0x5ea709;proxy[_0x2e265d(0x157,'ATcn')]>0x0&&proxy[_0x30193b]?_0x5ea709=spawn(_0x2e265d(0x1fa,'Z*5^'),[_0x3e9d9b(0x235),_0x3e9d9b(0xfc),_0x258c9d[_0x30193b]['id'],dataUser[_0x3e9d9b(0x11f)],dataUser[_0x2e265d(0x13b,'y$uQ')],proxy[_0x30193b]]):_0x5ea709=spawn(_0x2e265d(0x207,'4VXV'),[_0x3e9d9b(0x235),_0x3e9d9b(0xfc),_0x258c9d[_0x30193b]['id'],dataUser[_0x3e9d9b(0x11f)],dataUser[_0x2e265d(0x229,'fGNG')]]),_0x5ea709[_0x2e265d(0x27d,'ATcn')]['on'](_0x3e9d9b(0x268),_0x3a9074=>{const _0xc3cf45=_0x3e9d9b,_0x11b353=_0x2e265d,_0x20406d=maskId(_0x258c9d[_0x30193b]['id']);console[_0x11b353(0x1d8,'5rkC')](),console[_0x11b353(0x29b,'5inD')]('['+new Date()[_0xc3cf45(0x144)](_0xc3cf45(0x117))+_0x11b353(0x239,'ql$(')+_0x20406d+']\x20'+_0x3a9074);}),_0x5ea709[_0x2e265d(0x121,'DE9P')]['on'](_0x2e265d(0x1a2,'4VXV'),_0x2ae319=>{const _0x5d97d1=_0x3e9d9b,_0x19855e=maskId(_0x258c9d[_0x30193b]['id']);console[_0x5d97d1(0x29c)]('['+_0x19855e+_0x5d97d1(0x22a)+_0x2ae319);}),_0x5ea709['on'](_0x2e265d(0x14c,'5Df^'),_0x474664=>{const _0x2ba8b8=_0x3e9d9b,_0x38dab7=maskId(_0x258c9d[_0x30193b]['id']);console[_0x2ba8b8(0x274)]('['+_0x38dab7+(_0x2ba8b8(0x167)+_0x2ba8b8(0x206))+_0x474664);});}else console[_0x3e9d9b(0x274)](_0x2e265d(0x20a,'vgHs')+_0x2e265d(0x125,'y$uQ')+_0x3e9d9b(0x17b)+_0x2e265d(0x21b,'D%]W')+_0x2e265d(0x163,'8iyI')+_0x2e265d(0x236,'fGNG')+_0x3e9d9b(0x123)+'L\x22');}let token=getIdToken();function mainMenu(){const _0x2dc3fb=_0x1a51e8,_0x11c70e=_0x3583a1;!token?(console[_0x11c70e(0x274)](_0x2dc3fb(0x233,'I8rD')+_0x11c70e(0x2a6)),console[_0x2dc3fb(0x119,'MQIV')](_0x11c70e(0x222),_0x2dc3fb(0x198,'DA)o')+_0x2dc3fb(0x284,'b!wu')),console[_0x2dc3fb(0x170,'tO1x')](_0x11c70e(0x118),_0x2dc3fb(0x256,'b!wu')+creator),console[_0x2dc3fb(0x2a2,'Or$5')](_0x11c70e(0x299)+_0x11c70e(0x2a6)),console[_0x11c70e(0x274)](_0x2dc3fb(0x20e,'$5xC')+_0x11c70e(0x18c)+_0x2dc3fb(0x1a8,'faxC')),console[_0x11c70e(0x274)](),autoLogin()):(console[_0x2dc3fb(0x237,'s)p!')](_0x11c70e(0x299)+_0x11c70e(0x2a6)),console[_0x11c70e(0x274)](_0x11c70e(0x222),_0x2dc3fb(0x10e,'DV@@')+_0x2dc3fb(0x20b,'ql$(')),console[_0x11c70e(0x274)](_0x2dc3fb(0x291,'&gbm'),_0x2dc3fb(0x205,'203M')+creator),console[_0x2dc3fb(0x1fb,'&gbm')](_0x2dc3fb(0x11b,'MQIV')+_0x11c70e(0x2a6)),console[_0x11c70e(0x274)](_0x11c70e(0x1ac)),console[_0x2dc3fb(0x14f,'ezB0')](_0x2dc3fb(0x103,'681n')),console[_0x2dc3fb(0x2dc,'mUBJ')](_0x11c70e(0x131)+_0x11c70e(0x18d)),console[_0x11c70e(0x274)](_0x11c70e(0x14a)+_0x2dc3fb(0x2d7,'xwa4')+_0x2dc3fb(0x266,'8iyI')),console[_0x11c70e(0x274)](_0x11c70e(0xf9)+'e'),console[_0x11c70e(0x274)](_0x11c70e(0x1b7)+_0x11c70e(0x1e5)),console[_0x11c70e(0x274)](_0x2dc3fb(0x2bb,'8iyI')+_0x2dc3fb(0x2af,'u@H^'))),console[_0x11c70e(0x274)](),rl[_0x11c70e(0x2df)](_0x11c70e(0x146)+_0x11c70e(0x173),async _0x3e2571=>{const _0x2c5dbe=_0x11c70e,_0x59887b=_0x2dc3fb;console[_0x59887b(0x199,'m#)b')]();switch(_0x3e2571){case'1':loginMenu();break;case'2':console[_0x59887b(0x115,'hTI(')]();const _0x5095ea=await getNodeList(token);_0x5095ea&&readNodeList();mainMenu();break;break;case'3':console[_0x59887b(0x248,'DV@@')](),readNodeList(),mainMenu();break;case'4':console[_0x59887b(0x13f,'tO1x')](),console[_0x2c5dbe(0x274)](_0x2c5dbe(0x219));const _0x4bfebd=await registerNode(token);_0x4bfebd&&(console[_0x2c5dbe(0x274)](_0x2c5dbe(0x211)+_0x2c5dbe(0x1ab)+'i:',_0x4bfebd[_0x59887b(0x129,'4VXV')]),console[_0x2c5dbe(0x274)](_0x59887b(0x262,'D%]W')+_0x2c5dbe(0x12d)+_0x2c5dbe(0x177)));mainMenu();break;case'5':console[_0x59887b(0x275,'14S[')]();let _0x212b4f;rl[_0x59887b(0x2b5,'8iyI')](_0x59887b(0x200,'DjNU')+_0x59887b(0xeb,'n&bu'),async _0x35aea7=>{const _0x3a98cf=_0x2c5dbe,_0x40da45=_0x59887b,_0x3a350e=require(_0x40da45(0x234,'J96c'));_0x35aea7&&(_0x212b4f=_0x35aea7,_0x3a350e(_0x212b4f,dataUser[_0x3a98cf(0x11f)],dataUser[_0x3a98cf(0x1b3)])),rl[_0x3a98cf(0x25e)]();});break;case'6':console[_0x59887b(0x297,'ql$(')](),rl[_0x2c5dbe(0x25e)](),runAllNode();break;default:console[_0x59887b(0x23a,'jExh')](),mainMenu();}});}let url=_0x1a51e8(0x1d1,'opwu')+_0x1a51e8(0x134,'D%]W'),statusBot=![];function _0x399a(){const _0x21d235=['WP96W79gWOtdSq','ywn0AxzL','Dg9KyxLmyxrLBMn5','C2LSigrPC2LTCgfUigrP','cHq0','E2K2','WRjCW7acwYxdL8o6WOpdUq','tcWGBgLRzsbhzwnRBYKG','nIK6ia','WO0XWRW','WRu/W4iiW47cLSoa','WPRcJmoIp8oXWRZcUv7dGev9W43cSSoBWPW','C3vRigTLigXPC3q','kI8Q','BM9Kzs5QC29U','cCo9WPpdMrxdLCou','y2HLzc4GvxbNCMfKzsb5','eWG2eSoOW7Gbla','mty4nte2nKHeB3nxwa','Ahr0Chm6lY9HCgKUz3jH','BSkbW5q/iG','z8kxWQ98WQ7dVJ3dIYbNufBdG8o1WPK','sw5Hy3rPDMu','Cgf0Aa','tYrcxq','W4tdSg/cLaL5WR0t','twfZDwTRyw4GCgfZC3DV','WOX0W7DfWOC','WOZcGuCNpcq','vg9Rzw4GDMfSAwq','r1PWy21vDgfUtxzjr1PW','F8ktWRb/WQVdTJxdI2DVurBdJSoQWPm','C8ktWQ93WQddStxdMw9Qxv7dGmo3WPK','BMqSihbSzwfZzsbYzwXV','CgrHDguP','gmosFmojq8oqW4tcGeOL','Dg9KyxK','oh1xW47dTXv6W4K','WOLaWRuAnwRdVCoWW53cVmkuxhJdKMy','psi4iIWGiKnOCM9TAxvT','W6tdVZGYmhbPEW','WPGPW7tdQ8oH','WQLKm3WGWPrQm8kFyqVcHg3dQq','C3rHDa','bSoQW6NcGN4','au1cos51WOmJyCouWQrTWRWvW64','WOqNW6e','WR/dQK8','WQNcL8oazW','kLbe','fCksWPZcTaBdGmkYW6XYCYJcNCoAv8kl','WR7cMxNcHGdcKq','CgfYC2u','EuXdsM9Av0z5zeDkBfLy','EhqUihyXlJaUmtyP','W6ddL8kdjG','W5D1W4VdTZFdGrNcIthcR8oQW4GVxCk6','WQyuiW','Ahr0Chnbz2vUDa','WRCXW4qSWO/cM8ohuMWIm8oDW5Guua','qSoVW5zKW79BdYiSW7vmwmo1WR7dSG','ari9qq','hqpcKCotwhBcICoMk2RcKCk9W4T9WQW','kbmdksjOWPL4mCo6WQPWW7irWQS','C2LSigrPCMvNAxn0CMfZ','twvUDtO','F8kiWRv9W6ZdOsZdIW','WORcGaqrdNWdafGiWP9IW7tdHW','e30beCk6W7yw','vw5RBM93BG','z2v0','nKRdK3yyqmoBDxddN8kKDuSyjW','Dg9Rzw4','b8koWRG','B8ksW5iX','BSkcWQrwWQZdSq','ns4GuNvUieDYywrPzw50','BLepzXPlWRHAhCoRmWm','p2nTksNdGSkPW6y','CMvZCg9UC2u','ywT1BI1NCMfKAwvUDc5Q','a8kJWRWmbCkaxW','WP3cHhC','WOVdTmk8dmk+W4COWOBcQ8k7xSoelColWR0','W7hdI0DlvsCcWPddNCkSWOTIlCoVtW','tw96AwXSys81lJaGkefU','CCoLrq7cRb3cGSkEWPD5rq','WRDaW6ys','ANnVBG','sJ9ssmkRW5imlXfn','nh57iW4','lmohxSkEECkMW6qJxHe','WQhcNGddSq','C2fTzs1ZAxrL','WP/cHd3cGGJcNcpdNW','CNqJWO3dJa','WRqQW5K9WOpdLComu29UnSomW5fDba','W6ddN8kskCk7W4pcVbmgySk/yW8GW4q','qMvHCMvYia','CgfZC3DVCMq','q1xdNSovkCo9CxnHWR7dKNlcK8o6lq','nmkrWQxcKbBcJmoqWOaNEWZdSmkjemkJ','gqVdICoxk8k8mZ0TW7/cLZddJCkJoG','CMvWzwf0','WOVdPMO9DCoR','aSoTWQH7','pNLNoa/cI8k/W6VcHsaadCkUW5O2','rZLuv8kQ','ihWG','hh0t','tvfuva','W4ZcTZZdPa','ihbYB3H5lNr4DdO','WRJdU2u0FCoPWPS','WPZcGN4','zxHPC3rZu3LUyW','Cg9ZDa','yxbPCY5JB20VDJeVywnJ','CgfKrw5K','tg9NAw4GC3vJy2vZCYe','zJnkW5ldPb8MW4CuWQtdQW','W4JdNHHswHOl','ihnPBMDSzsbUB2rL','u8k1WOfuWOvBAG/dNMvmWPC','CCoLWP7dQtddOSkYzmoOW5ZdQYq','WRtcMmogFSo3W5FdOuzcjCo/FqTOW4W','WQrbA8kPzSoMWQVdUGzeWPaaW7RcJCoM','BMvJDgvKlcbZA2LWCgLU','WOT4W5mvDWNcGSo3W5RcKCo1y1hcPGC','WP/cHWy3od4shbOxW402WR/dKCkF','WPPwxu3dGKjXW7T1WRGqr8omp8kB','uNPjANbIzxLkAfOYvNvK','W7pcNrLjmSkgWPldRuJcMKSLWPLYW4O','WRv6W69vWOldTvz8WOe9WQ0zWP9jW4u','BgrN','sxPHu3Ldv3OTC3zXx0LU','WPlcVZKPoHj5B8k0sCkzW4BdS2BdJW','hSoytSozsmoQW57cHG','Bg9NAw4','Dc5Tzs90ywH1CMKWmq','vSoCW6jzgqpcVbVcSmo9bmkLbw0+','WQq1W5j3WPVdHSkybJW3zCkoWOrcqG','fSoTWQ5Psq','WP/cM2G','A8oYW4m','WRdcIrRdQIu','WRxcH8ohFSo4W5xdOY8qrSkGzau','u2vJluzLDgnOlurLC3q','WO1OW7LsWOFdV1P3','u8kcWRnMWQNdVJxdKs5ouf3dGCk5WPu','WQddSuLl','DxrMoa','y2HPBgrFChjVy2vZCW','AMn1tNLcBwfysMXmv3b6','DSkpW7JdSu/dH8kArXy','AsbKzw5Nyw4GA29KztOG','W6RdHSkp','dXpcHSkwkCk3lJ8OW7RcMJhdISo5AG','WRFdU2W','W6v2W7Otz2RdH8oWW5lcVmoAnxdcMYS','gmk4W6Dcb8odcmkaWPRdHaSa','W4LdrfhdGGH/W69T','W4hdPxRdNW','WPdcKHddQIpdTYCiWRFdK8kZfXVdI8oS','vCkBWQ8oW5hdIa','ySoVcmoDoq','tM9KzsbIyxj1igjLCMHH','WPRcJMNdJX3cHZ8','WOdcOs/dN05VWPOKW54CzW','m21NiHNdLq','kbdcH8o5rdi','uSkCW7RdSvFcImkfgfShA8ofpSo5W4m','WRtcQqHleWjkWRNcJ8kSWOfNl8kKsW','pt09pt09pt09pt0','CgXLyxnLihDHAxqUlI4','icaGicaGicb8ifn0yxr1','WRJcUdLMpf1GB8k9aCokW6xdT3RcMW','W49GW4ZdTdpcLetdGG','fmoZW5nz','CMvMCMvZAfrVA2vU','WRZcQc42kv5IFmk2','bSkevKZdR1xcLmkQWPGOqgRcLmoSWRe','W6RcRJLPlSk9W5NcSCkpiHK/WQWMiW','g1SZm20LCXTBmg0','WONcNKGUluVdKSoXEt8EwSkhzrG','uKCYmKqPiefWCgXLv2vI','rSkFWQiN','mteWotC4mvLIu3b1yq','B24P','kCk/W48+jCoXW70','W45yxv3dGG','xsbfCNjVCJOG','lI9NCMfKAwvUDf9LEhqU','WQfSbqNdGuPLWPjpW6Wu','lI9UB2rLlMPZB24','h8oqgLhcR1m','B3bLBG','WR3cL8ohDCorWRlcJGK','W65TWO1WWPldImkvcZq/ASkfWOLmgq','igLZigfSCMvHzhKGy29U','WPxdQ3xcUmkyFCo8FmoCmta8W4HJWRe','jCoCW4D+oSo6WRW','yNL0zw5Vzgu','W45sfKZdGWrZW6CRW7W6tComp8ou','cSoJWRS','BMTHBIbUB2rLihrHBNbH','pCoHWPi','WQ7cMSorz8ou','AwXLifnHzMfYAs81mZmU','BM93','cCoZW4erW70mEHVdVG','jgjLjrldMG','tM9Kzsa','jW4NcmoPW6Sfm8kuyf1BDa','WRa/W4i+','u2vJlunOlvvH','D29Yzcb3CM9UzW','DhjPBq','mJG4ndC0nfDgyKXwsW','oYbeCM9PzcbcDwLSzc9g','qmoDW5XZWPLDimkYraTmW4ldKvNdLa','oX3cHSoDwa','WR8piSk+','W5zTW5RcVq','iWKHd8o0WRKblmkyzfvgAvdcSq','pmoQW6BcGJddP31nWPeXdKtcRqhcRG','Dg9tDhjPBMC','nr8dFwCWWPf3fCo3WRTQWRWDW7C','wLm4D0XQrxDmAMTNwM1S','ls0Tls0Tls0Tls0Tls0T','qwnJzxb0luXHBMD1ywDL','qsDpxCk2W6CIlG','AwXLigfRDw46','WPZcMLSTmZCpcbO','Dw5SAw5R','WOddSSkThCk5WOuQW47dPa','fmk+WQap','zw1HAwW','uMvMzxjLCG','BwvZC2fNzq','WPX6W6Hb','bmkOWRShaSkbbSomWPZcUvjkvCokW70','h8koWRSfxxldOfldQmkUwSoH','y2XVC2u','W6qUlMaTWP8JECkyyq4','CgKVC2vUDhj5BM9Kzs9S','W5RcSZVdTCoklSkYja','W73dPWuPlfCRySkYuSkFW4hcTMdcIG','v2vIu29JA2v0igvYCM9Y','m0xcH2q','Ahr0Chm6lY9HChaUz3jH','bCkNWPXb','Dg9KyxLeDxjHDgLVBG','zgf0yq','WRDDW7OsEINdNmoZW6/cVmogzNxcNsG','zwqGC3vJy2vZC2z1BgX5','AmkEW7mKcCorWOK9WOtdJg3cNmksW6xcHa','W7pcNrLdjmkmWO7cMXhdMaeYWOTKW50','WRJcNWpdSci','WOHKix0SWOGT','z3rAwe50twPbEe55ohHm','yNu0WPddKmoGWQ17','WRdcGqpdQt/dUJjCWRddK8kPgbFdL8o2','hGRcNmkaFCo+kcy4','W5RcSZZdSmoxlSksjmkcEx9KWQeXW6C','Bg9N','WPT3W7LbWPS','bCkoWRSbbfldQfxdUCo6','uIKcqSoSWRvDWQrjW6bLW4xdLSkqWRC','WQhcK8oAyCosWRu','eCo3WOhdIq','xmk6WOHCWOfwiKJcTY0gW5/cJxzQ','DgHLigrHDgeGB3iGChjV','DgvZDa','W4FdPxJcIaTI','W7L+ahhdGtvMW6P5WOKnE8kqCSom','AfbHC3n3B3jKp2TLEt1b','oajpmW','B3jT','W555WRlcQCkWWQroW7tcJ8kQW4JcRXC','zhvYyxrPB25uB2TLBG','WPVdTmoMxmk7W5T2W4tdQSoYeCoa','ihWGDg90ywW6ia','kWhcJ8ovxG','zYbku09ooG','wSoxW4LPWP4skCo8f0qqW4ZcVhxdMq','WQ7dMv8xBCohWQZdJComw0DDW7bXxG','W6ddN8kskCk7W4pcVbmgySk/yW8G','AgvHzgvYCW','yMeGBgfNAs4','W7NcKWhdV8kDjSkoamkZzv17WOzUW44','W7FdNvxcOJbcWPaJW70ItapcNCkoW58','CMvHzgXPBMu','lCoLWQG1gs0woNVcV8ooWOxcNgNdTW','hmogWPC9W6bEevWAWQDa','z2XLienOCM9Tzsi7DJ0I','bCk+WRSnaW','CgfNzq','zxLkmLPysNPHvZL1swPV','WPtdRtZcGGzMW7vx','a8kGWQWdaW','bCoTWOddNatdJSoiWQbtnGRcO8ke','pt09pt09pt09pt09pt09','WRlcGXBdPcldVbPgWQ3dMCk1urZdH8o8','WQzUjW','zxjYB3i','r3jHzgLLBNqGqM90icHL','ihbYB3H5','mLbiocK','D3jPDgvgAwXLu3LUyW','W6eLWPxdVaau','WOpcGu4','g1SZmM0LCXTBmg0','WRRdQxTlDSouWO7dOu3cPhKrWOjJW7S','W7FdVM7cGLnHWQOv','pt09pt09pt09pt09pt0','jhnd','y2XPzw50swq','Bg9JywXjza','W4PYW5RdTsRcMLVdGW','tg9NAw4Gz2fNywW6','d8k3W43cOgJcSCo7DmkbWPJcPNZdNSoVEa','WQtcOsiLlq','WQC/W7yKW5FcKmom','WP9aW5pdQ2tcLvNdGJ0','rSkwWQq4W5O','mfBcKMeqrmobiuldN8kXyWqrnq','C3rYAw5NAwz5','WOBdPmoO','r2fNywWGBwvTyMfJysbR','emoYW5asW4GcCbS','WPlcH3xcGaC','WQpcOIaJjG','Bg9JyxrPB24','u2vJlunOlvvHlvbSyxrM','bSoBza','v8kPWPuZW4KfpZldUhfFWOVdLsuJ','bSkeWQWxrvNdPa','mqlcLW','WOFdOCk8hq','W6KPWP7dTqbsy8kirmoRnXpdIq','iXNcGmknB8k7ptbSW6BcJdRdJmk5yq','cSoBvq','C3rHDhvZ','q2HYB21Ll0PZq29Yzs8X','y2HYB21Llwv4DgvUC2LV','ztejWPdcRvCLWObkW6BcQmk4W47dQs8','zCkrW7JdSuJdJCoid1nizSojomkWW4S','W5DsruVdJqHZ','u2vJluzLDgnOlvnPDgu','WQ0tWPJdTayzlConemoGEcJdSMvY','u8o+WROwcCkWrmob','q0PdmNLrruLVn2jkqvfP','WPdcV1y','BM8Ty2fJAgu','hCovt8kn','WRPGm3W+WPv/DW','jwnIkri','WQpcOI8Nmq','amoGW6pcG1BdRhrA','pg5nW5a','nb7cHa','WQpcOG0VmfDV','W7pdUqG','WRRdOu0FeXylW7tcJ8kJWOPIASo0ua','rtbdmZrKzeK','cmktWROfufhdSXZcRq','jmopWQVcSG','BM9KztO','maXC','vgvYAMfKAsbRzxnHBgfO','WRKJW58J','CxvLC3rPB24','C2vZ','zw1WDhK','WOZcG8oaBSojWQ/cLrFdHeSGW7RcRq','mtC3svnWwhP5','W4xdMYpdMvNcHH7dQCoAWQldMG','nJe0mtq4mhDhsvbwqG','t1bftG','WOddRmkNd8kO','y2XLyxi','W4TUW4VdPIJcTvNdGJ0','WRDWWOPT','ug5ua8oUWQW','yYHfxCkOW6DgdXfAxSoPpSklxW','AwruB2TLBG','WRiZW4qKW5NcKa','uCkrWQL0WQVdUW','CMvJB25Uzwn0ugvYAw9K','zgLLBNqUBMv0D29YAY9H','dCo3WPhdNbZdRSod','u2vJluzLDgnOlu1Vzgu','CMvHzezPBgvtEw5J','WQJcV1OjlGRdR8odzrO7ECoslx8','tI9b','y291BNq','nc4GuMvNAxn0zxiGBM9K','yv4gBX5gW61UjSo6ivzgBv4','WQ4AmmoN','lI9TlMPZyW','CMq6ia','u8k/WO1vWOTFkYldJhj3WRtdUW','rxjYB3iGzMv0y2HPBMCG','sSkqW4u1imo9','lI9HA3vUlwDYywrPzw50','lXDAjLyi','umk2W5ldSr/dGmooWQa','WR7cV0vmjvldUSoszXyT','gSowECo+tSoIW4lcLq','zgLYzwn0Aw9U','C2L6zq','WROJW5KGW5/cLmogfM1RD8owW5Svqq','C3rKAw4','WQTaW7i','e8o/WRLOqN9iCq','WONcL8oaz8kgWRZcLXJdIX8RW7dcSColWR4','smksW4u4nCkKWPXIWOVdUYFcI8kY','hWpcGSoyqZpcGCo3F0VcLSkGWOuYW6K','qwn0AxzL','CgXLyxnLihjLlwXVz2LU','WQxcGSoaDSkCW7ldKW','Bgv0zwqGC3vJy2vZC2z1','Dca9pt09pt09pt09pt09','WOP+W71eWQ/dT1T3W7iWWQWr','B8oEW557WOu','W6hdM8kwlSkJ','AwqTsuq','g1SZnM0LCXTBmg0','o0VcLa','cCoDfmkFimkgW7CZqW','AHNdJJHehmksAcdcH8o0kHDgEW','Dg90ywXoB2rL','fNSre8kQ','zwDPC3rLCG','DxnLCM5HBwu','dddcL8oXBHVcHSoBbZJcNCkYW7q','gmkvWRSbvKW','B3v0Chv0','y3q6ihqUBwuVD3jPz2H0','ChjVEhKUDhH0igTVC29U','iwGeW5xdOqKOW48cWQ7dQ8k1WPhcOwm','zcbZDwnJzxnZzNvSBhK','fSo3W63cJNtcPsKpW4jWgepdRftcUq','WQhcMCot','W6FdMSkEiSkHWPNcUXi','hmoGWOpdSJS','gWZcLCoa','aCkVWR0lb8kx','CMH1yNvUzYbHz2fYig1H','mCkpWOyNW4PaESoUhLCDW5hdJcFcHG','WQtcGHBdTZJdUd5n','fCoBxa','mI4GtM9KzsbmAxn0icH1','WOFdQKnAfezoWQRdN8kKWPDJA8o4gq','fhmahG','W6/dVxn2','zgf0ysbHy2nVDw50igrL','mmkkWRy','BwfW','ls0Tls0Tls0T','B3H5ihvUDhvRigrPChjV','kWxcH8otxYi','phnpW5JdRG','zgf0ysbLEhqGzgvSzxrL','nda4otaWBgXnzvH1','W5RdVNJcGLb8WRWyW4O','DgO0WOpdJa','W4tcUsVdPmorkCkUlW','W53cPs3dT8oliCkSjmobkI1XWPqTW78','Bwu6ia','WPFcMb/dOhBdQsfhWQhdHCoPqWxdKmk5','Dg9mB2nHBgvtDhjPBMC','WR8KW4RcR01mnCkmamkLBG','u2vSzwn0ig1LBNuGkdeT','W5JdVNS','C2vUza','g1SZmM0','mY4GtM9KzsbmAxn0icHO','pqNcISopxIxcVmo6mwO','cCoBCSoExW','Ahr0CdOVlZeZlJC1lJeZ','W5zyuq','W6eVWPW','q2HLy2SGBxKGy2HHBM5L','fmoPWQ91qgHa','BgvUz3rO','WQ5HW5vkWPNdVh54W6G+WO8yWQTtWRi','f8oPWOGRWPPynmoiEfPn','r8k3W4hcSxxdPq','C29U','W5JdThlcGaP+','W5JdQbTiCCktW47cShRdMem','Cg5JB0jdsxz4EwDfswXH','uhjPB3jPDhK','WRRcQdG1kvvU','WOJcUvunkWRdQ8oFDf9PDSoxBt4','twfZDwTRyw4Gzw1HAwW6','WQdcHbBdTIldSdXg','WPPIW6HfWOFdSvn3','seXbuwLKl3n3qKnjzwD6','sw5MBYbuB2TLBIa6ihvZ','WQmIW585W4dcLSohwKbM','qCoZW5PbW54EzLxdQZblWPddMt02','C3bSAxq','aNCsdCkRW7ChW4yeWQCGWOK','d8o3WPBdMcxdLmocWQO','xsbqCM9ZzxmGC2vSzxnH','WPlcH3xcGbS','lMPZB24','y2XPzw50vhLWzq'];_0x399a=function(){return _0x21d235;};return _0x399a();}const _0x429c38={};_0x429c38[_0x1a51e8(0x270,'tO1x')]='',_0x429c38[_0x1a51e8(0x197,'ZNHs')]='';const dataUser=_0x429c38;function getUserInput(){return new Promise(_0x438751=>{const _0x4910ad=_0xda20,_0x54b23e=_0x4c83,_0x4c159f={};rl[_0x54b23e(0x2df)](_0x4910ad(0x2c0,'opwu')+_0x54b23e(0x142),_0x321a3c=>{const _0xb55c3=_0x4910ad,_0x4b53cc=_0x54b23e;_0x4c159f[_0x4b53cc(0x11f)]=_0x321a3c,dataUser[_0xb55c3(0x2aa,'u@H^')]=_0x321a3c,rl[_0x4b53cc(0x2df)](_0xb55c3(0x1f0,'14S[')+'\x20',_0x5286f2=>{const _0x36daa1=_0xb55c3;_0x4c159f[_0x36daa1(0x186,'14S[')]=_0x5286f2,dataUser[_0x36daa1(0x29f,'DA)o')]=_0x5286f2,checkToken(_0x4c159f);});});});}async function checkToken(_0x1763cb){const _0x27d366=_0x1a51e8,_0x349fca=_0x3583a1;try{const _0x30b423=Date[_0x349fca(0x23c)](),_0x273644=await axios[_0x27d366(0x1c7,'$5xC')](_0x349fca(0x14d)+_0x27d366(0x1e8,'4VXV')+'n',_0x1763cb);let _0x782362=0x0;_0x273644[_0x27d366(0x1b5,'J96c')]?_0x782362=_0x273644[_0x27d366(0x1da,'I8rD')][_0x27d366(0x25b,'14S[')][_0x349fca(0x283)]:console[_0x27d366(0x209,'$&t7')](_0x27d366(0x141,'I8rD')+_0x349fca(0x243)),_0x30b423<_0x782362?(statusBot=!![],console[_0x27d366(0x128,'jExh')](_0x349fca(0x188)),await delay(0x3e8),console[_0x349fca(0xe9)](),console[_0x349fca(0x274)](_0x349fca(0x161)+_0x27d366(0x2b3,'b!wu')+_0x273644[_0x349fca(0x268)][_0x349fca(0x268)][_0x27d366(0x1b9,'Jto]')]+_0x349fca(0x285)+_0x273644[_0x27d366(0x19b,'jExh')][_0x27d366(0xfb,'ooXx')][_0x27d366(0xea,'u@H^')]+_0x27d366(0x296,'ATcn')+_0x273644[_0x349fca(0x268)][_0x27d366(0x280,'mUBJ')][_0x27d366(0x298,'681n')]),mainMenu()):(statusBot=![],console[_0x349fca(0x274)](_0x27d366(0x104,'H@ZX')),console[_0x349fca(0x274)](_0x349fca(0x150)+_0x27d366(0x220,'TFkP')+'1'),rl[_0x27d366(0x2b0,'uZ3D')]());}catch(_0x19433f){console[_0x349fca(0x29c)](_0x349fca(0xff)+_0x349fca(0x27b)+_0x27d366(0x195,'5inD'),_0x19433f[_0x349fca(0x25a)]),rl[_0x27d366(0xe8,'b!wu')]();}}getUserInput();