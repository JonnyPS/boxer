chrome.runtime.onMessage.addListener(
  function(request, sender) {
    // console.log(sender.tab ?
                // "from a content script:" + sender.tab.url :
                // "from the extension");
    if (request.state == "false") {
      console.log('recieved: ' + request.state);
    



    console.log('loaded contentscript.js');

      // $( document ).mousedown(function() {
      //   console.log('mouse is down');
      //   $( '#recordedData' ).remove();
        
      //   // Create a container div and have the 'X and Y' info boxes within
      //   $( 'body' ).append("<div id='infoBox'></div>");
      //   $( '#infoBox' ).append("<div id='yValueInfo'><p>Height: </p></div>");
      //   $( '#infoBox' ).append("<div id='xValueInfo'><p>Width: </p></div>");
      //   $( 'body' ).append("<div id='recordedData'><p id='recordedWidth'>Width: </p><p id='recordedHeight'>Height: </p></div>");
      //   $( 'body' ).append("<button id='closeBtn'><p>CLose</p></button>");
                             
        
      //   startYvalue = event.pageY;
      //   startXvalue = event.pageX;
      //   // console.log('startYvalue = ' + event.pageY);
      //   // console.log('startXvalue = ' + event.pageX);

      //   // Style the divs
      //   $('p').css({margin:0, 'font-family':'arial', 'font-weight':'normal', 'font-size':'11' + 'px'});
        
      //   $('#infoBox').css({top: startYvalue, left: startXvalue, height: 1, width: 1, position:'absolute', backgroundColor: 'red', overflow:'visible', backgroundColor: 'rgba(0,200,150,0.6)', zIndex: '1'});
      //   $('#yValueInfo, #xValueInfo').css({padding:5, position:'absolute'});
      //   $( '#yValueInfo p, #xValueInfo p' ).append('1px');
      //   // ensure 'X and Y' info boxes stay positioned correctly
      //   $('#yValueInfo').css({ top: 0, left: ( 0-$('#yValueInfo').outerWidth() ) });
      //   $('#xValueInfo').css({ top: ( 0-$('#xValueInfo').outerHeight() ), left: 0 });
      //   $('#recordedData').css({position:'fixed', top:20, left: 0, zIndex:'9998', padding:10, width:'60', backgroundColor: 'rgba(255,255,255,0.6)'});
      //   $('#closeBtn').css({position:'fixed', top:0, left: 0, zIndex:'99999999', padding:10, width:'60', fontWeight:'bold', backgroundColor: 'rgba(255,255,255,0.6)'});
        
      //   $( this ).mousemove(function() {
      //     // console.log('mouse is moving');
      //     // update co-ordinates
      //     currentYvalue = event.pageY;
      //     currentXvalue = event.pageX;
      //     console.log('currentYvalue = ' + event.pageY);
      //     console.log('currentXvalue = ' + event.pageX);
          
      //     boxWidth = (currentXvalue - startXvalue);
      //     boxHeight = (currentYvalue - startYvalue);
          
      //     // ensure 'X and Y' info boxes stay positioned correctly
      //     $('#yValueInfo').css({ top: 0, left: ( 0-$('#yValueInfo').outerWidth() ) });
      //     $('#xValueInfo').css({ top: ( 0-$('#xValueInfo').outerHeight() ), left: 0 });

          
          
      //     // ensure the main div keeps in track with the mouse drags
      //     $('#infoBox').css({height: boxHeight, width: boxWidth});
      //     // console.log('new width = ' + boxWidth);
      //     // console.log('new height = ' + boxHeight);

       
          
      //     if (boxHeight < 0) {
      //       console.log('boxHeight is negative');
      //       boxHeight = Math.abs( boxHeight );
      //       console.log(boxHeight);
      //       $('#infoBox').css({top: (startYvalue - boxHeight), height:boxHeight});
      //     }
      //     if (boxWidth < 0) {
      //       console.log('boxWidth is negative');
      //       boxWidth = Math.abs( boxWidth );
      //       console.log(boxWidth);
      //       $('#infoBox').css({left: (startXvalue - boxWidth), width:boxWidth});
              
      //     }
      //         // get width to display in 'X and Y' info boxes
      //     $( "#yValueInfo p" ).replaceWith( "<p>Height: "+ boxHeight + 'px' + "</p>" );
      //     $( "#xValueInfo p" ).replaceWith( "<p>Width: "+ boxWidth + 'px' + "</p>" );
          
      //     $( '#recordedData ' ).replaceWith("<div id='recordedData'><p>Width: " + boxWidth + "</p><p>Height: " + boxHeight +"</p></div>");
      //     $('#recordedData').css({padding:10, width:'60', backgroundColor: 'rgba(255,255,255,0.6)'});
      //     $('p').css({margin:0, 'font-family':'arial', 'font-weight':'normal', 'font-size':'11' + 'px'});
         
      //   })


      //   $( document ).mouseup(function() {
      //     console.log('mouse is up');
      //     $( '#infoBox' ).remove();
      //     $('#recordedData').css({padding:10, backgroundColor: 'rgba(255,255,255,0.6)'});
          
      //     $( 'p #recordedWidth' ).replaceWith("Width: " + boxWidth);
      //     $( 'p #recordedHeight' ).replaceWith("Height: " + boxHeight);
      //     // $('p').css({margin:0, 'font-family':'arial', 'font-weight':'normal', 'font-size':'11' + 'px'});
          
      //     $( this ).unbind( "mousemove" );
      //     $('#closeBtn').click ( function() {
      //         console.log('closeBtn clicked');
      //       $( document ).unbind( "mousedown" );
                
      //       function init() {
      //         console.log('init evoked as empty');
      //         //do nothing
      //       };
      //       $( document ).unbind( "mouseup" );

      //     });
      //     // closeBtn.addEventListener('click', function() {
          
        
      //   }) 

      // })
    }

    else {
      console.log('recieved: ' + request.state);
    }


  });
