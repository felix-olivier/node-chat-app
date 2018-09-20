const socket = io();

socket.on('connect', function() {

  socket.on('loadRooms', function (rooms) {
    // var rooms = ['room1', 'runescape', 'node course']; // get rooms dynamically


    jQuery.each(rooms, function(key, value) {
     console.log(key, value);
     jQuery('#room-list')
         .append(jQuery("<option></option>")
                    .attr("value",value)
                    .text(value));
    });
  });

});
