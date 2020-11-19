// SORTING
let btnPrice = document.querySelector('.sorting-product__cost');
let btnAge = document.querySelector('.sorting-product__age');
let parent = document.querySelector('.products');

btnPrice.addEventListener('click', () => {
    Sorting('data-price');
});
btnAge.addEventListener('click', () => {
    Sorting('data-age');
});

function Sorting(sortingType) {
    for (let i = 0; i < parent.children.length; i++) {
        for (let j = i; j < parent.children.length; j++) {
            if (+parent.children[i].getAttribute(sortingType) > +parent.children[j].getAttribute(sortingType)) {
                replacedNode = parent.replaceChild(parent.children[j], parent.children[i]);
                insertAfter(replacedNode, parent.children[i].nextSibling);
            };
        };
    };
};

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
};

// BUTTON LIKE
document.querySelectorAll('.button_like').forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('button_like-active')
    })
})

// BUTTON BACK TO TOP
let goTopBtn = document.querySelector('.button_back-to-top');
window.addEventListener('scroll', function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;
    if (scrolled > coords) {
      goTopBtn.classList.add('button_back-to-top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('button_back-to-top-show');
    }
});
function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}
goTopBtn.addEventListener('click', function (click) {
    click.preventDefault();
    scrollTo(0, 2500);
});