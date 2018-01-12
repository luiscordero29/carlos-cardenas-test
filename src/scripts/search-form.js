var act = 0;
function searchForm(){
   var cant = $("#input_search").val().length;
   if (cant >= 3) {
     $("#btn_search").removeAttr("disabled");
     $('#input_search').keypress(function(e) {
         if(e.keyCode == 13) {
            var str = $("#input_search").val();
            buscarJson(str);
            act = 1;
         }
       });
      $( "#btn_search" ).click(function() {
            var str = $("#input_search").val();
            buscarJson(str); 
            act = 1;  
         });
         
   }else if(cant <= 3){
         $("#btn_search").attr('disabled','disabled');
        // $("#input_search").finish();
         if (act == 1) {
            cargarJson();
         }
      }
}


function buscarJson(str){
   //console.log(str);
   var JSON_FILE = 'books-schema.json';
      $('#articles').html('');
      var html = '';
      $.getJSON( JSON_FILE, function( data ) {
          $.each( data['data'], function( id , data ) {
          if (data['title'].indexOf(str) >= 0){
            $('#articles').html('');
            $('#articles').append(
               '<div class="item-result pure-u-7-24">' + 
               '<div class="img"><img src="'+data['image']+'"></div>'+
               '<h3>'+data['title']+'</h3>'+
               '<p>'+data['teaser']+'</p>'+
                '</div>'
            );
         }
      });
   });
}