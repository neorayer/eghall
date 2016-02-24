pref("toolkit.defaultChromeURI", "chrome://eghall/content/login.xul");
pref("general.useragent.locale", "zh_CN");    		
pref("general.useragent.extra.eghall", "eghall/0.1");


pref("toolkit.singletonWindowType", "eghall:client");

/* debugging prefs */
pref("browser.dom.window.dump.enabled", true);
pref("javascript.options.showInConsole", true);
pref("javascript.options.strict", true);
pref("nglayout.debug.disable_xul_cache", true);
pref("nglayout.debug.disable_xul_fastload", true);

// suppress external-load warning for standard browser schemes

pref("network.protocol-handler.warn-external.http", false);
pref("network.protocol-handler.warn-external.https", false);
pref("network.protocol-handler.warn-external.ftp", false);

pref("network.http.use-cache", true);

//Link Within an IFrame
//To enable a link inside an html document that is the "src" of an iframe to 
//be opened in the default browser, setting the preference: 
pref("network.protocol-handler.expose-all", false);

netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');











