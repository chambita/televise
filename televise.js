/**
 * Televise.js : Embed online videos with ease.
 * Copyright 2013, Jared Abbott (http://github.com/o0110o)
 *20/02/13
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notices.
 *
 * @copyright     Copyright 2012, Jared Abbott (http://github.com/o0110o)
 * @link          http://github/o0110o/televise
 * @package       Televise v1.0.2
 * @since         Televise v1.0.2
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
var $televise = function ( id, service, height, width ) {
	if(!height){ height = '280'; }
	if(!width){ width = '360'; }
	if(!id){ return false; }
	if( service == 'youtube' ) { var url = 'http://www.youtube.com/embed/'; }
	else if( service == 'vimeo' ) { var url = 'http://player.vimeo.com/video/'; }
	else if( service == 'dailymotion' ) { var url = 'http://www.dailymotion.com/embed/video/'; }
	else if( service == 'bliptv' ) { var url = 'http://a.blip.tv/scripts/shoggplayer.html#file=http://blip.tv/rss/flash/'; }
	else if( service == 'yahooscreen' ) { var url = 'http://d.yimg.com/nl/vyc/site/player.html#vid='; }
	else if( service == 'veoh' ) { var url = 'http://www.veoh.com/static/swf/veoh/SPL.swf?videoAutoPlay=0&permalinkId='; }
	else if( service == 'viddler' ) { var url = 'http://www.viddler.com/simple/'; }
	else if( service == 'justintv' ) { var url = 'http://www.justin.tv/widgets/live_embed_player.swf?start_volume=0.5&amp;hostname=www.justin.tv&amp;auto_play=false&amp;channel='; }
	for(var i = 0; i < id.length; i++){
		document.write("<iframe type='text/html' src='"+url+id[i]+"' frameborder='0' height='"+height+"' width='"+width+"' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
	}
}