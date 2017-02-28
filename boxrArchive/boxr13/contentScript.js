console.log( 'loaded contentscript.js' );

chrome.runtime.onMessage.addListener( function(request, sender) {
  if (request.state == "false") {
    console.log( 'recieved: ' + request.state);      
    animation();
  } else {
    console.log( 'recieved: ' + request.state);
    console.log( 'now turned off :)' );      
    $( document ).unbind( "mousedown" );
    $( document ).unbind( "mousemove" );
    $( document ).unbind( "mouseup" );
    $( '#recordedData' ).remove();
    $( '#container' ).remove();
  }
});

function animation() {
  console.log( 'animation' );


  $( document ).mousedown(function() {
    console.log( 'mouse is down' );
    $( '#recordedData' ).remove();
    $( '#container' ).remove();
    
    // Create a container div and append required elements
    $( 'body' ).append("<div id='infoBox'></div>");
    $( '#infoBox' ).append("<div id='yValueInfo'><p>Height: </p></div>");
    $( '#infoBox' ).append("<div id='xValueInfo'><p>Width: </p></div>");
    $( 'body' ).append("<div id='container'><div id='bgLayer'></div><div id='recordedData'><p id='recordedWidth'>Width: </p><p id='recordedHeight'>Height: </p><p id='aspectRatio'>Aspect Ratio: </p><p id='recordedAspectRatio'>Aspect Ratio: </p><p id='closeBtn' style='margin: 0px; font-family: arial; font-weight: bold; font-size: 11px;'>Click to Close Extension</p></div></div>");
   
    // Get X and Y co-ordinates of mouse                          
    startYvalue = event.pageY;
    startXvalue = event.pageX;

    // Style elements
    $( 'p' ).css({margin:0, 'font-family':'arial', 'font-weight':'bold', 'font-size':'11' + 'px'});
    $( '#infoBox' ).css({top: startYvalue, left: startXvalue, height: 1, width: 1, position:'absolute', backgroundColor: 'red', overflow:'visible', backgroundColor: 'rgba(0,200,150,0.6)', zIndex: '99999999'});
    $( '#yValueInfo, #xValueInfo' ).css({padding:5, position:'absolute', backgroundColor: 'rgba(255,255,255,0.8)'});
    $( '#yValueInfo p, #xValueInfo p' ).append( '1px' );
    // ensure 'X and Y' info boxes stay positioned correctly
    $( '#yValueInfo' ).css({ top: 0, left: ( 0-$( '#yValueInfo' ).outerWidth() ) });
    $( '#xValueInfo' ).css({ top: ( 0-$( '#xValueInfo' ).outerHeight() ), left: 0 });
    $( '#recordedData' ).css({position:'fixed', top:0, left: 0, zIndex:'9999999', padding:10, width:'130', backgroundColor: 'rgba(255,255,255,1)'});
    $( '#bgLayer' ).css({position:'fixed', top:0, left: 0, zIndex:'9999998', width:'100%', height:'100%', backgroundColor: 'rgba(0,0,0,0.3)'});
    $( '#container' ).css({position:'fixed', top:0, left: 0, zIndex:'9999999', width:'100%', height:'100%'});
    $( '#closeBtn' ).css({position:'fixed', top:56, left: 0, zIndex:'9999999999', padding:10, width:'130', backgroundColor: 'rgba(255,255,255,1)'});

    $( this ).mousemove(function() {
      // console.log( 'mouse is moving' );
      // update co-ordinates
      currentYvalue = event.pageY;
      currentXvalue = event.pageX;
      console.log( 'currentYvalue = ' + event.pageY);
      console.log( 'currentXvalue = ' + event.pageX);
      
      // box dimensions
      boxWidth = (currentXvalue - startXvalue);
      boxHeight = (currentYvalue - startYvalue);

      // ensure 'X and Y' info boxes stay positioned correctly
      $( '#yValueInfo' ).css({ top: 0, left: ( 0-$( '#yValueInfo' ).outerWidth() ) });
      $( '#xValueInfo' ).css({ top: ( 0-$( '#xValueInfo' ).outerHeight() ), left: 0 });

      // ensure the main div keeps in track with the mouse drags
      $( '#infoBox' ).css({height: boxHeight, width: boxWidth});
      // console.log( 'new width = ' + boxWidth);
      // console.log( 'new height = ' + boxHeight);
      // $( '#closeBtn' ).css({position:'fixed', top:56, left: 0, zIndex:'9999999999', padding:10, width:'130', backgroundColor: 'rgba(255,255,255,1)'});

   
      
      if ( boxHeight < 0 ) {
        console.log( 'boxHeight is negative' );
        boxHeight = Math.abs( boxHeight );
        console.log(boxHeight);
        $( '#infoBox' ).css({top: (startYvalue - boxHeight), height:boxHeight});
      }
      if ( boxWidth < 0 ) {
        console.log( 'boxWidth is negative' );
        boxWidth = Math.abs( boxWidth );
        console.log(boxWidth);
        $( '#infoBox' ).css({left: (startXvalue - boxWidth), width:boxWidth});
      }

      // Calculate aspect ratio
      if ( boxWidth || boxHeight != 0 ) {
          aspectRatio = (boxWidth / boxHeight).toFixed(3) ;
          console.log('aspectRatio = ' + aspectRatio);
      }
      // if ( boxWidth || boxHeight == 0 ) {
          // aspectRatio = 0;
        // }
          // get width to display in 'X and Y' info boxes
      $( "#yValueInfo p" ).replaceWith( "<p>Height: "+ boxHeight + 'px' + "</p>" );
      $( "#xValueInfo p" ).replaceWith( "<p>Width: "+ boxWidth + 'px' + "</p>" );
      $( '#aspectRatio p' ).replaceWith("Aspect Ratio: " + 1 + ' : ' + aspectRatio);
      
      $( '#recordedData ' ).replaceWith("<div id='recordedData'><p>Width: " + boxWidth + " px</p><p>Height: " + boxHeight +" px</p><p>Aspect Ratio: " + 1 + " : " + aspectRatio + "</div>");

      $( '#recordedData' ).css({position:'fixed', top:0, left: 0, zIndex:'9999999', padding:10, width:'130', backgroundColor: 'rgba(255,255,255,1)'});
      $( 'p' ).css({margin:0, 'font-family':'arial', 'font-weight':'bold', 'font-size':'11' + 'px'});
      
      $( '#closeBtn' ).css({position:'fixed', top:56, left: 0, zIndex:'99999999', padding:10, width:'130', backgroundColor: 'rgba(255,255,255,1)'});

    })

    $( document ).mouseup(function() {
      console.log( 'mouse is up' );
      $( '#infoBox' ).remove();
      $( '#recordedData' ).css({padding:10, backgroundColor: 'rgba(255,255,255,1)'});
      $( 'p #recordedWidth' ).replaceWith("Width: " + boxWidth);
      $( 'p #recordedHeight' ).replaceWith("Height: " + boxHeight);
      $( 'p #aspectRatio' ).replaceWith("Aspect Ratio: " + 1 + ' : ' + aspectRatio);
      $( document ).unbind( "mousemove" );
      
    }) 

  })
};