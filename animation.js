document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByClassName("pageContainer")[0].classList.add('fade-in');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const newLocation = this.href;

      // Get the current page URL without the hash (if present)
      const currentPageUrl = window.location.href.split('#')[0];
      console.log(currentPageUrl);
      console.log(newLocation);


      if (newLocation !== currentPageUrl) {
        document.getElementsByClassName("pageContainer")[0].classList.remove('fade-in');
        document.getElementsByClassName("pageContainer")[0].classList.add('fade-out');

        setTimeout(() => {
          window.location.href = newLocation;
        }, 1000); 
      } else {
        // window.scrollTo(0, 0);
      }
    });
  });