function getEvents(page) {

    $('#events-panel').show();
    $('#attraction-panel').hide();
  
    if (page < 0) {
      page = 0;
      return;
    }
    if (page > 0) {
      if (page > getEvents.json.page.totalPages-1) {
        page=0;
      }
    }
    
    $.ajax({
      type:"GET",
      url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=zfiyUNmT9IxDeM95i1L8aXyC5vKaVLkd"+page,
      async:true,
      dataType: "json",
      success: function(json) {
            getEvents.json = json;
                  showEvents(json);
               },
      error: function(xhr, status, err) {
                  console.log(err);
               }
    });
  }
  