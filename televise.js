	var $televise = function ( id, height, width ) {
		if(!height){ height = '280'; }
		if(!width){ width = '360'; }
		if(!id){ return false; }
		for(var i = 0; i < id.length; i++){
			document.write("<iframe type='text/html' src='http://www.youtube.com/embed/"+id[i]+" frameborder='0' width='"+width+"' height='"+height+"' sandbox='allow-same-origin allow-scripts'/></iframe>");
		}
	}
