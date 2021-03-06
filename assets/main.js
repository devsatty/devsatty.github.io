$(document).ready(function(){
        
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
    
        
        $(".youmax").youmax({
            apiKey:"AIzaSyAlhAqP5RS7Gxwg_0r_rh9jOv_5WfaJgXw",

            channelLink:"https://www.youtube.com/user/PenseGeek",
            playlistLink:"https://www.youtube.com/playlist?list=PLI_D9kCSvQnYBYDqQTjSzTsBKKCjEpnYg",
            
            defaultTab:"Uploads",         //Uploads|Playlists|Featured
            videoDisplayMode:"popup",       //popup|link|inline

            maxResults:"9",
            autoPlay:false,
            displayFirstVideoOnLoad:true,       //for inline video display mode only
            

            responsiveBreakpoints   :[600,900,2000,2500],

            loadMoreText            :"<i class=\"fa fa-plus\"></i>&nbsp;&nbsp;Carregar mais vídeos",
            previousButtonText      :"<i class=\"fa fa-angle-left\"></i>&nbsp;&nbsp;Previous",
            nextButtonText          :"Next&nbsp;&nbsp;<i class=\"fa fa-angle-right\"></i>",
            loadingText             :"loading...",
            allDoneText             :"<i class=\"fa fa-times\"></i>&nbsp;&nbsp;All done..",

            hideHeader              :false,
            hideTabs                :false,
            hideLoadingMechanism    :false,
            showVideoInLightbox     :false,
            translatorFile          : '/assets/youmax-translation.json',
        });
        
        
        $('.social-feed-container').socialfeed({
            // INSTAGRAM
            instagram:{
                accounts: ['@_satty'],  //Array: Specify a list of accounts from which to pull posts
                limit: 14,                                    //Integer: max number of posts to load
                client_id: 'f9cea9afc6734285b54ad328ec640a63',
                access_token: '32061117.f9cea9a.1d75e99d681a4b0e958165f1821ff36b',
            },

            // GENERAL SETTINGS
            length:400,                                      //Integer: For posts with text longer than this length, show an ellipsis.
            show_media: true
            
        });
        
        setTimeout(function(){
             $('.social-feed-element').each(function(){
        	    $(this).css({'background-image' : 'url(' + $(this).find('.attachment').attr('src') + ')'});
            });
        },5000);
        
        
        var i = 0;
        $('.post-link').each(function(){
            $(this).find('.post-image').css({'background-image' : 'url(' + $($('.post-list img')[i]).attr('src') + ')'});
            i++;
        });
        
        
        $('.social-feed-element ').on('click', function(){
            window.location = 'https://www.instagram.com/_satty/';
        });
        
        $('.mostrarmais').on('click', function(){
            
          $('.wrapper .home .post-list').css({'max-height':'none'});
            $('.fade').hide();
            $('.mostrarmais').hide();
            
        });
        
        particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
          console.log('callback - particles.js config loaded');
        });
        
        $('#youtube').on('click', function(){
            $('#modalYoutube').fadeIn('fast');
        });
        
        $('#agenda').on('click', function(){
            $('#modalAgenda').fadeIn('fast');
        });
        
         $('#cosplay').on('click', function(){
            $('#modalCosplay').fadeIn('fast');
        });
        
        $('#sobre').on('click', function(){
            $('#modalSobre').fadeIn('fast');
        });
        
        $('#parceiros').on('click', function(){
            $('#modalParceiros').fadeIn('fast');
        });
        
        $('.overlay').click(function(){ $('.modal').fadeOut('fast') });
        
        $('.close').click(function(){  $('.modal').fadeOut('fast')  });
        
        $("#contato").click(function() {
            $('html,body').animate({
                scrollTop: $("p.parceria.email").offset().top
            }, 'slow');
        });
      
        
       
       
        $('body').on('click', '.social-feed-element', function(){
            window.open('https://instagram.com/_satty','_newtab');
        });
       
       
      
});
