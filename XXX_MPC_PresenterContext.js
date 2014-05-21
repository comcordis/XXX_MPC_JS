var XXX_MPC_PresenterContext = 
{
	pathPrefixes: {},
	
	getURIPathPrefix: function (key, suffix)
	{
		var result = '';
		
		result += this.pathPrefixes[key + 'URIPathPrefix'];
		
		if (suffix)
		{
			result += suffix;
		}
		
		result = XXX_URI.currentHTTPServerProtocolPrefix + XXX_URI.staticURIPathPrefix + result;
		
		return result;
	}
};