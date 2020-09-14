$(function(){

    // Mobile menu
    $('.menu-btn').click(function(){
        $('.menu-mobile ul').slideToggle()
    })

    // Auto Type
    var words = ['Sistemas', 'Sites Institucionais', 'Portfólios'];
    var indexWord = 0;
    var indexChar = 0;
    var interval;
    var elInput = $('.bg-content input[type=text]');
    elInput.focus();
    autoType();
    function autoType() {
        interval = setInterval(function() {
            if (indexChar < words[indexWord].length) {
                indexChar++;
                elInput.val(words[indexWord].substr(0, indexChar));
            } else if (indexWord < words.length - 1) {
                indexWord++;
                indexChar = 0;
            } else {
                indexWord = 0;
                indexChar = 0;
            }
        }, 200);
    }

    $('nav a, .contact').click(function(){
    	var href = $(this).attr('href');
    	var offScrollTop = $(href).offset().top;

    	$('html,body').animate({
    		'scrollTop': offScrollTop
    	})

    	return false;
    })
    
})
