$(window).on("load resize", function() {
    // header slick
    if ($(window).width() < 769) {
        $('.header-slick').not('.slick-initialized').slick({
            mobileFirst: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            speed: 300,
            arrows: false,
            dots: false,
            centerMode: true,
            centerPadding: "0px",
            responsive: [{
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                },
                breakpoint: 768,
                settings: "unslick",
            }],
        });
    }
    // Hired slick
    $(".hired").not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: `<svg xmlns="http://www.w3.org/2000/svg" width="40.983" height="14.651" viewBox="0 0 40.983 14.651" fill="#9f9f9f" class="slick-next">
                        <path class="a" d="M10.613,6,9.491,7.291l4.443,5.119H-24v1.831H13.934L9.491,19.36l1.123,1.291,6.37-7.326Z" transform="translate(24 -6)"/>
                        </svg>`,
        prevArrow: `<svg width="40.983" height="14.651" viewBox="0 0 41 15" version="1.1" fill="#9f9f9f" class="slick-prev">
                        <path d="M6.371,0l1.122,1.291l-4.443,5.119l37.934,0l0,1.831l-37.934,0l4.443,5.119l-1.123,1.291l-6.37,-7.326l6.371,-7.325Z" style="fill:#9f9f9f;fill-rule:nonzero;"/>
                        </svg>`,
        responsive: [{
            breakpoint: 992,
            settings: "unslick"
        }]
    });
    $('.slick-next, .slick-prev').appendTo('.slick-arrows');

    if ($(window).width() < 1481) {
        $("#marketing-title").prependTo("#marketing-row")
        $("#techno-title").prependTo("#techno-row")
    } else if ($(window).width() > 1480) {
        $("#marketing-title").prependTo("#marketing-row .card-deck")
        $("#techno-title").prependTo("#techno-row .card-deck")
    }


});

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
}

$(window).one('scroll', function isInVierport() {
    let proffesionals = new countUp.CountUp('proffesionals', 100, {
        duration: 5
    });
    proffesionals.start();

    let offices = new countUp.CountUp('offices', 3, {
        duration: 5
    });
    offices.start();

    let countries = new countUp.CountUp('countries', 2, {
        duration: 5
    });
    countries.start();

    let revenue = new countUp.CountUp('revenue', 7.3, {
        decimalPlaces: 1,
        duration: 5,
        decimal: ','
    });
    revenue.start();
});

// Clock
setInterval(setClock, 1000)
const hourPointers = document.getElementsByClassName('js-hours-pointer')
const minutePointers = document.getElementsByClassName('js-minutes-pointer')
const secondPointers = document.getElementsByClassName('js-seconds-pointer')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    for (let hourPointer of hourPointers) {
        setRotation(hourPointer, hoursRatio)
    }
    for (let minutePointer of minutePointers) {
        setRotation(minutePointer, minutesRatio)
    }
    for (let secondPointer of secondPointers) {
        setRotation(secondPointer, secondsRatio)
    }
};

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
};

// Aos animation init
AOS.init();

var items = ["<span class='grey'>rocking <b>strategy</b></span>", "", "custom tools", "automation", "ai & big data", "marktech",
    "", "<span class='orange'>cutting edge <b>innovations</span>", "digital transformation", "business consulting", "leaders mentoring", "startup ideas validation", "business transformation", "brand consulting",
    "", "<span class='orange'>business and transformation <b>consulting</b></span>", "optimization", "kpis consulting", "learning", "reports", "print",
    "", "<span class='green'>optimizing <b>results & effectivity</b></span>", "", "influencers", "media buying", "digital & social media", "media creativity", "tv commercials",
    "<span class='green'>new way of <b>media & execution</b></span>", "", "special solutions", "brand workshops", "strategic creativity", "creative concepts", "big ideas",
    "<span class='green'>goal oriented <b>creativity</b></span>", "", "market rollout plan", "brand positioning", "segmentation targeting", "Market analysis", "Research research", "",
];

if ($(window).width() > 1300) {
    var length = items.length
    var stred = 500;
    var polomer = 550;
    for (var i = 0; i < length; i++) {
        var text = items[i]
        var x = stred + polomer * Math.sin(2 * Math.PI * -((i) / length));
        var y = stred + polomer * Math.cos(2 * Math.PI * -(i) / length);
        $("#center").append("<div class='point' style='left:" + x + "px;bottom:" + y + "px' data-aos='fade-up'><p>" + text + "</p></div>");
    }
} else if ($(window).width() < 1300) {
    var firstCol = items.slice(0, 6);
    var secondCol = items.slice(7, 15);
    var thirdCol = items.slice(15, 22);
    var fourthCol = items.slice(22, 29);
    var fifthCol = items.slice(29, 36);
    var sixthCol = items.slice(36, 43)

    firstCol.forEach(function(item) {
        $(".texts-1").append("<p>" + item + "</p>");
    })
    secondCol.forEach(function(item) {
        $(".texts-2").append("<p>" + item + "</p>");
    })
    thirdCol.forEach(function(item) {
        $(".texts-3").append("<p>" + item + "</p>");
    })
    fourthCol.forEach(function(item) {
        $(".texts-4").append("<p>" + item + "</p>");
    })
    fifthCol.forEach(function(item) {
        $(".texts-5").append("<p>" + item + "</p>");
    })
    sixthCol.forEach(function(item) {
        $(".texts-6").append("<p>" + item + "</p>");
    })

    $(".flex").appendTo("#circle")
}