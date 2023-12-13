//----------------------------------

//section buttons

// smooth scrolling
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

//-----------------------------------

// Navbar Modal
document.getElementById('open-modal-btn').addEventListener('click', function() {
  document.getElementById('myModal').style.display = 'block';
});

document.getElementById('close-modal-btn').addEventListener('click', function() {
  document.getElementById('myModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  var modal = document.getElementById('myModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

//----------------------------------
