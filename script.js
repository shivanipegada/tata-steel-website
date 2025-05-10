 
// slide code 

const dots = document.querySelectorAll('.dot');
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');

function goToSlide(index) {
  const position = slides[index].offsetTop;
  carousel.scrollTo({ top: position, behavior: 'smooth' });

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

carousel.addEventListener('scroll', () => {
  let currentIndex = 0;
  slides.forEach((slide, index) => {
    const rect = slide.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
      currentIndex = index;
    }
  });

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
});



// search bar code 

document.querySelector(".fa-magnifying-glass").addEventListener("click", function () {
    const box = document.getElementById("search-box");
    box.classList.toggle("d-none");
    document.getElementById("search-result").innerText = '';
    document.getElementById("search-input").value = '';
  });


  function handleSearch() {
    const value = document.getElementById("search-input").value.toLowerCase().trim();
    const result = document.getElementById("search-result");

    const routes = {
      corporate: "index3corporate.html",
      sustainability: "index4sustainability.html",
      investors: "index6investors.html",
      careers: "index7carrer.html",
      contact: "index2contact.html",
      products: "index5productsandSolution.html"
    };

    if (routes[value]) {
      window.location.href = routes[value];
    } else {
      result.innerText = "Result not found. Please try another keyword.";
    }
  }


  