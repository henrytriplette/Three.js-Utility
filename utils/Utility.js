// Manage Colors
function colorConvert(color) {

		var color = color.replace('#', '0x');
		return new THREE.Color( parseInt( color , 16) );

}

// Get Object Lenght
function objLength(obj){
  var i=0;
  for (var x in obj){
    if(obj.hasOwnProperty(x)){
      i++;
    }
  }
  return i;
}

// Custom Round 
function roundTo(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
};

// Fast round
function fastRound(num) {
  var x = (num + 0.5) | 0;
  return (x)
}

// Console log info
function info(output) {
  return console.info(output);
}

// Is Element in Array?
function inArray(needle,haystack) {
    var count=haystack.length;
    for(var i=0;i<count;i++)
    {
        if(haystack[i]===needle){return true;}
    }
    return false;
}

// Convert url parameters back to array <3
function queryStringToHash  (query) {
  var query_string = {};
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    pair[0] = decodeURIComponent(pair[0]);
    pair[1] = decodeURIComponent(pair[1]);
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  }
  return query_string;
};

// Normalize angles
function normalize(angle) {
  var result = 0;
  if (typeof angle === 'number') {
    result = angle % 360;
    if (result < 0) {
      result += 360;
    }
  }

  return result;
}

function isPortrait() {
    // we can't rely on window.orientation, because some devices
    // report 0deg rotation for landscape mode :/
    // Check for screen dimensions instead
    return (window.innerHeight > window.innerWidth);
};

// Fullscreen
function enterFullscreen (el) {
	if (el.requestFullscreen) {
		el.requestFullscreen();
	} else if (el.mozRequestFullScreen) {
		el.mozRequestFullScreen();
	} else if (el.webkitRequestFullscreen) {
		el.webkitRequestFullscreen();
	} else if (el.msRequestFullscreen) {
		el.msRequestFullscreen();
	}

	document.getElementById( 'fullscreen' ).style.display = 'none';
	document.getElementById( 'exitfullscreen' ).style.display = 'block';
}
jQuery('#fullscreen').on('click', function(){
	enterFullscreen(document.body);
});

function exitFullscreen() {
	if(document.exitFullscreen) {
		document.exitFullscreen();
	} else if(document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if(document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if(document.msExitFullscreen) {
		document.msExitFullscreen();
	}

	document.getElementById( 'fullscreen' ).style.display = 'block';
	document.getElementById( 'exitfullscreen' ).style.display = 'none';
}
jQuery('#exitfullscreen').on('click', function(){
	exitFullscreen();
});
