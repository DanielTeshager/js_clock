const more_less_btn = document.querySelector('.more-less');
const details = document.querySelector('.details');
const more_less_icon = document.querySelector('.more-less-icon');
const more_less_text = document.querySelector('.more-less-text');
const quote_container = document.querySelector('.quote-container');


// show/hide .details when more_less_btn is clicked
more_less_btn.addEventListener('click', function() {
  
    // console.log(more_less_icon_img);
    if (details.classList.contains('hide')) {   
        details.classList.remove('hide');
        more_less_icon.classList.add('down');
        more_less_text.innerHTML = 'Less';
        quote_container.classList.add('hide');  // hide quote container
        // scroll to top of page
        window.scrollTo(0, document.body.scrollHeight);
    }else {
        details.classList.add('hide');
        more_less_icon.classList.remove('down');
        more_less_text.innerHTML = 'More';
        quote_container.classList.remove('hide');  // show quote container
        // scroll to the top of the page
        window.scrollTo(0, 0);
        // window.scrollTo(0, details.offsetTop + details.offsetHeight);
    };
    });