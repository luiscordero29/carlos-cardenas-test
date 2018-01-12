/*
  constants and global functions
*/
function cargarJson() {
    var JSON_FILE = 'books-schema.json';
    $('#articles').html('');
    var html = '';
    $.getJSON( JSON_FILE, function( data ) {
        $.each( data['data'], function( id , data ) {
            $('#articles').append(
                '<div class="item-result pure-u-7-24">' + 
                    '<div class="img"><img src="'+data['image']+'"></div>'+
                    '<h3>'+data['title']+'</h3>'+
                    '<p>'+data['teaser']+'</p>'+
                '</div>'
            );
        });
    });
}
cargarJson();
