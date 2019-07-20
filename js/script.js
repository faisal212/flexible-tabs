$(function () {
    /* flexible tabs code */
    let $items = $('.flexible-tab-item');
    let $flexibleTabs = $('.flexible-tab-content');

    $('.flexible-tab-item').on('click', (event) => {
        let $item = $(event.target);
        let identifier = $item.data('flexible-tab');
        let $flexibleTab = $flexibleTabs.filter(`[data-flexible-tab="${identifier}"]`);

        $items.removeClass('is-active ');
        $flexibleTabs.removeClass('is-active');

        $item.addClass('is-active ');
        $flexibleTab.addClass('is-active');
    });

    // add class to the last tab item
    $items.last().addClass('last-item');


   
     $('.load-more-button button').on('click', function(e)  {
        $('.flexible-loader').addClass('visible');

        $.ajax({
            url:'./morecontent.html',
            type:'GET',
            success: (data) =>{
                $(this).parent().parent().find('.content-area .row').append(data)
            },
            complete: (hr) => {
                $('.flexible-loader').removeClass('visible');
            }
         });
       
      
          
       // console.log( ($(this).parent().parent().find('.content-area .row')[0]));

   })
})

