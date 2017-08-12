$(document).ready(function(){
$($('.post-list li')[0]).addClass('first');
        
        setTimeout(function(){
            $('.post-list').show();
            $('.mostrarmais').css({'display' : 'block'});
            $('#center').css({'display' : 'block'});
            $('.dev').css({'display' : 'block'});
        }, 600);
    
        $('.hamburg').click(function(){
          $('.navbar').slideToggle();
        })
       
       if($('body').width() < 500){
           $('.post-list li.first').removeClass('first');
       }
})
