	var $televise = function ( id, height, width, service ) {
		if(!height){ height = '280'; }
		if(!width){ width = '360'; }
		if(!id){ return false; }
		if( service == 'youtube' ){ var url = 'http://www.youtube.com/embed/'; }
		if( service == 'vimeo' ){ var url = 'http://player.vimeo.com/video/'; }
		for(var i = 0; i < id.length; i++){
			document.write("<iframe type='text/html' src='"url+id[i]+"' frameborder='0' height='"+height+"' width='"+width+"' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
		}
	}
