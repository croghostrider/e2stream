var Settings =
{
	filename 			: tizen.application.getCurrentApplication().appInfo.id + '/settings.config',
	version				: "v4.3.0"
};


Settings.save = function()
{
	Display.setScreenValuesToData();
	ParentalSettings.setData();
	
	localStorage.setItem('Settings.version', Settings.version);
	localStorage.setItem('ip', Data.getIPAddress());
	localStorage.setItem('port', Data.getStreamPort());
	localStorage.setItem('tport', Data.getTranscodePort());
	localStorage.setItem('remNum', Data.getRemoveNumbers());
	localStorage.setItem('startb', Data.getStartBouquetForSettings());
	localStorage.setItem('zapm', Data.getZap());
	localStorage.setItem('playerNme', Data.getPlayerName());
	localStorage.setItem('p1', ParentalSettings.p1Val);
	localStorage.setItem('p2', ParentalSettings.p2Val);
	localStorage.setItem('p3', ParentalSettings.p3Val);
	localStorage.setItem('p4', ParentalSettings.p4Val);
	
	localStorage.setItem('sLock', ParentalSettings.lockSettingsVal);
	localStorage.setItem('bLock', ParentalSettings.lockBouquetVal);
	
	localStorage.setItem('mtEnabled', Data.getMtEnabled());
	localStorage.setItem('mtBr', Data.getMtBitrate());
	localStorage.setItem('mtW', Data.getMtWidth());
	localStorage.setItem('mtH', Data.getMtHeight());
	localStorage.setItem('mtAR', Data.getMtAspectRatio());
	localStorage.setItem('mtIn', Data.getMtInterlaced());
	
	localStorage.setItem('streamMode', Data.getStreamMode().toString());
	
	console.log("Saved Settings");
	console.log("IPv:" + Data.getIPAddress());
	console.log("Port: " + Data.getStreamPort());
	console.log("Transcode Port: " + Data.getTranscodePort());
	console.log("Remove Num Prefix: " + Data.getRemoveNumbers());
	console.log("Starting Bouquet: " + Data.getStartBouquet());
	console.log("Zap: " + Data.getZap());
	console.log("Player: " + Data.getPlayerName());
	console.log("PC/lockSettings: " + ParentalSettings.lockSettingsVal);
	console.log("PC/Lock Bouquet: " + ParentalSettings.lockBouquetVal);
	
	console.log("Multi-transcode Enabled: " + Data.getMtEnabled());
	console.log("MT/Bit rate: " + Data.getMtBitrate());
	console.log("MT/Width   : " + Data.getMtWidth());
	console.log("MT/Height  : " + Data.getMtHeight());
	console.log("MT/Aspect  : " + Data.getMtAspectRatio());
	console.log("MT/Intrlcd : " + Data.getMtInterlaced());
	console.log("Stream Mode: [" + Data.getStreamMode() + "] " +Data.getStreamModeDesc());
};

Settings.clear = function()
{
	localStorage.removeItem('testFile');
	localStorage.removeItem('Settings.version');
	localStorage.removeItem('ip');
	localStorage.removeItem('port');
	localStorage.removeItem('tport');
	localStorage.removeItem('remNum');
	localStorage.removeItem('startb');
	localStorage.removeItem('zapm');
	localStorage.removeItem('playerNme');
	localStorage.removeItem('p1');
	localStorage.removeItem('p2');
	localStorage.removeItem('p3');
	localStorage.removeItem('p4');
	
	localStorage.removeItem('sLock');
	localStorage.removeItem('bLock');
	
	localStorage.removeItem('mtEnabled');
	localStorage.removeItem('mtBr');
	localStorage.removeItem('mtW');
	localStorage.removeItem('mtH');
	localStorage.removeItem('mtAR');
	localStorage.removeItem('mtIn');
	
	localStorage.removeItem('streamMode');
	
	console.error("Cleared Settings");
	return true;
};


Settings.load = function()
{
	var vers = localStorage.getItem('Settings.version');
	
	if(vers!=Settings.version)
	{
		Settings.clear();
		console.error("Old settings file - please set settings again!");
		return false;
	}
		
	var ip = localStorage.getItem('ip');
	var port = localStorage.getItem('port');
	var tport = localStorage.getItem('tport');
	var remNum = localStorage.getItem('remNum');
	var startb = localStorage.getItem('startb');
	var zapm = localStorage.getItem('zapm');
	var playerNme = localStorage.getItem('playerNme');
	var p1 = localStorage.getItem('p1');
	var p2 = localStorage.getItem('p2');
	var p3 = localStorage.getItem('p3');
	var p4 = localStorage.getItem('p4');
	var sLock = localStorage.getItem('sLock');
	var bLock = localStorage.getItem('bLock');

	var mtEnabled = localStorage.getItem('mtEnabled');
	var mtBr = localStorage.getItem('mtBr');
	var mtW = localStorage.getItem('mtW');;
	var mtH = localStorage.getItem('mtH');
	var mtAR = localStorage.getItem('mtAR');;
	var mtIn = localStorage.getItem('mtIn');
	var streamMode = localStorage.getItem('streamMode');
	
	
	Data.setStreamMode(0);
	if(streamMode==null)Data.setStreamMode(0);
	if(streamMode=='0')Data.setStreamMode(0);
	else Data.setStreamMode(1);
	
	if(mtEnabled==null)mtEnabled="N";
	if(zapm==null)zapm="N";
	if(playerNme==null)playerNme="Default";
	
	if(sLock==null)slock="N";
	if(bLock==null)bLock="N";
	
	if(p1==null)p1=" ";
	if(p2==null)p2=" ";
	if(p3==null)p3=" ";
	if(p4==null)p4=" ";
	
	if(mtBr==null)mtBr="3000000";
	if(mtW==null)mtW="720";
	if(mtH==null)mtH="480";
	if(mtAR==null)mtAR="2";
	if(mtIn==null)mtIn="0";
	
	console.log("Loaded Settings");
	console.log("IP:" + ip);
	console.log("Port: " + port);
	console.log("Transcode Port: " + tport);
	console.log("Remove Num Prefix: " + remNum);
	console.log("Starting Bouqeut: " + startb);
	console.log("ZapMode: " + zapm);
	console.log("Player: " + playerNme);
	console.log("PC/Settings Lock: " + sLock);
	console.log("PC/Bouquet Lock : " + bLock);

	console.log("Multi-transcode Enabled: " + mtEnabled);
	console.log("MT/Bit rate: " + mtBr);
	console.log("MT/Width   : " + mtW);
	console.log("MT/Height  : " + mtH);
	console.log("MT/Aspect  : " + mtAR);
	console.log("MT/Intrlcd : " + mtIn);
	
	console.log("Stream Mode: [" + streamMode + "] " + Data.getStreamModeDesc());
	
	Data.setIPAddress(ip);
	Data.setPort(port);
	Data.setTranscodePort(tport);
	Data.setRemoveNumbers(remNum);
	Data.setStartBouquet(startb);
	Data.setZap(zapm);
	Data.setPlayerName(playerNme);
	

	ParentalSettings.p1Val = p1;
	ParentalSettings.p2Val = p2;
	ParentalSettings.p3Val = p3;
	ParentalSettings.p4Val = p4;

	ParentalSettings.lockBouquetVal = bLock;
	ParentalSettings.lockSettingsVal = sLock;
	
	Data.setMtEnabled(mtEnabled);
	Data.setMtBitrate(mtBr);
	Data.setMtWidth(mtW);
	Data.setMtHeight(mtH);
	Data.setMtAspectRatio(mtAR);
	Data.setMtInterlaced(mtIn);
	/*
	console.log("Creating Player Instance");
	
	if(Data.getPlayerName()=="Legacy"){Main.playerObj = PlayerLegacy.instance();}
	else {Main.playerObj = Player.instance();};
	console.log("Using Player Implementation: " + Main.playerObj.name() );
*/
	
	
	Display.setSettingsScreenValues();
	
	return true;
};