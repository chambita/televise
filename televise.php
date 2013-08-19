<?php
/*
Televise.php
-----------
Televise is a plugin for embedding online videos with ease.

Usage
-----
[televise id='' service='' height='' width='']

What Services Does Televise Support?
------------------------------------
* Youtube
* Vimeo
* Dailymotion
* BlipTV
* Yahoo Screen (USA Only)
* Veoh
* Viddler
* LiveStream
* uStream
* Justin.tv
*/

function televise( $id, $service, $height=null, $weight=null ) {

    if (!$height) {
    	$height = '280';
    }
    if (!$weight) {
    	$weight = '360';
    }
    
	if( $service == 'youtube' ) { $url = 'http://www.youtube.com/embed/'; }
	else if( $service == 'vimeo' ) { $url = 'http://player.vimeo.com/video/'; }
	else if( $service == 'dailymotion' ) { $url = 'http://www.dailymotion.com/embed/video/'; }
	else if( $service == 'bliptv' ) { $url = 'http://a.blip.tv/scripts/shoggplayer.html#file=http://blip.tv/rss/flash/'; }
	else if( $service == 'yahooscreen' ) { $url = 'http://d.yimg.com/nl/vyc/site/player.html#vid='; }
	else if( $service == 'veoh' ) { $url = 'http://www.veoh.com/static/swf/veoh/SPL.swf?videoAutoPlay=0&permalinkId='; }
	else if( $service == 'viddler' ) { $url = 'http://www.viddler.com/simple/'; }
	else if( $service == 'livestream' ) { $url = 'http://cdn.livestream.com/embed/'; }
	else if( $service == 'ustream' ) { $url = 'http://www.ustream.tv/embed/'; }
	else if( $service == 'justintv' ) { $url = 'http://www.justin.tv/widgets/live_embed_player.swf?start_volume=0.5&amp;hostname=www.justin.tv&amp;auto_play=false&amp;channel='; }
	return "<iframe type='text/html' src='".$url.$id."' height='".$height."' width='".$width."' scrolling='no' frameborder='0' style='border: 0px none transparent;' webkitAllowFullScreen mozallowfullscreen allowFullScreen>Iframes are not available.</iframe>";
}

?>