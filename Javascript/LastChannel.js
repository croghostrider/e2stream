var LastChannel =
{
	filename			: tizen.application.getCurrentApplication().appInfo.id + '/lastchannel.cache',
	version				: "v4.3.0",

	lastBouquetId		: "",
	lastChannelId		: "",
};

LastChannel.findLastBouquet = function()
{
	var i;
	for(i=0;i<Data.getBouquetIDs().length;i++)
	{
		console.log("Checking [" + Data.getBouquetIDs()[i] + "] for match with [" + LastChannel.lastBouquetId + "]");
		if(Data.getBouquetIDs()[i] == LastChannel.lastBouquetId)
		{
			console.log("Found match!");
			return i;
		}
	}
	//Can't find it, return -1 to ignore
	console.log("WARN Can't find last active bouquet");
	return -1;
};

LastChannel.findLastChannel = function()
{
	var i;
	for(i=0;i<Data.getAllVideoIDs().length;i++)
	{
		if(Data.getAllVideoIDs()[i] == LastChannel.lastChannelId)
		{
			return i;
		}
	}
	//Can't find it, return -1 to ignore
	return -1;
};

LastChannel.put = function(bouquetId,channelId)
{
	LastChannel.save(bouquetId, channelId);
};

LastChannel.save = function(lastBouquetId,lastChannelId)
{
	LastChannel.lastBouquetId=lastBouquetId;
	LastChannel.lastChannelId=lastChannelId;
	console.log("Saving Last Channel Cache");
	console.log("Bouquet [" + lastBouquetId + "]");
	console.log("Channel [" + lastChannelId + "]");
	localStorage.setItem('Settings.version', Settings.version);
	localStorage.setItem('lastBouquetId', lastBouquetId);
	localStorage.setItem('lastChannelId', lastChannelId);	
	console.log("Saved Last Channel Cache");
};


LastChannel.clear = function()
{
	localStorage.removeItem('lastChannelId');
	localStorage.removeItem('lastBouquetId');
	localStorage.removeItem('lastChannelId');	
	console.log("WARN Cleared Last Channel Cache");
	return bResult;
};

LastChannel.load = function()
{
	var vers =  localStorage.getItem('Settings.version');
	if(vers!=LastChannel.version)
	{
		LastChannel.clear();
		console.log("WARN Old cache file format - therefore cleared!");
		//return false;
	}
	
	var bouquetId = localStorage.getItem('lastBouquetId');
	var channelId = localStorage.getItem('lastChannelId');
	
	console.log("INFO Loaded Channel Cache");
	console.log("Bouquet Id:" + bouquetId);
	console.log("Channel Id: " + channelId);
	
	LastChannel.lastBouquetId = bouquetId;
	LastChannel.lastChannelId = channelId;
	
	return true;
};