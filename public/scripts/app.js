/*
  main script for only runs every function
*/
var input       = document.getElementById("input_search");
var awesomplete = new Awesomplete(input);
function cargar_list() {
	var JSON_FILE = 'books-schema.json';
      $('#mylist').html('');
      var html = '';
      var list = new Array();
      $.getJSON( JSON_FILE, function( data ) {
          $.each( data['data'], function( id , data ) {
          list.push(data['title']);
      });
		  awesomplete.list = list.toString();	
   });
}
cargar_list();


