//swiper
    let ArrowPrevious = $('.CustomSwiperButtonPrevious');
    let ArrowNext = $('.CustomSwiperButtonNext');

    $('.swiper').each(function (index, element)
    {
        $(this).addClass('swiper' + index);
        
        ArrowPrevious[index].classList.add('CustomSwiperButtonPrevious' + index);
        ArrowNext[index].classList.add('CustomSwiperButtonNext' + index);

        new Swiper('.swiper' + index, {
            freeMode: true,
            slidesPerView: 'auto',
            breakpoints: {
                0: {
                    centeredSlides: true,
                    centeredSlidesBounds: true,
                },
                320: {
                    centeredSlides: true,
                    centeredSlidesBounds: true,
                },
                480: {
                    centeredSlides: false,
                    centeredSlidesBounds: false,
                },
                576: {
                    centeredSlides: false,
                    centeredSlidesBounds: false,
                },
                768: {
                    centeredSlides: false,
                    centeredSlidesBounds: false,
                }
            },
            navigation: {
                nextEl: '.CustomSwiperButtonNext' + index,
                prevEl: '.CustomSwiperButtonPrevious' + index
            },
        });
    });
///////////

//swiper tags
    $('.swiper-tags').each(function (index, element)
    {
        $(this).addClass('swiper-tags' + index);

        new Swiper('.swiper-tags' + index, {
            grabCursor: true,
            touchEventsTarget: "container",
            freeMode: true,
            slidesPerView: "auto",
        });
    });
///////////

//swiper links
$('.swiper-links').each(function (index, element)
{
    $(this).addClass('swiper-links' + index);

    new Swiper('.swiper-links' + index, {
        grabCursor: true,
        touchEventsTarget: "container",
        freeMode: true,
        slidesPerView: 'auto'
    });
});
///////////

//hearts
    $(".HeartButton").click( function (){
        if($(this).val() == 0)
        {
            $(this).val("1");
            $(this).children(":first").attr("src", "icons/heart_red.png");
        }
        else if($(this).val() == 1)
        {
            $(this).val("0");
            $(this).children(":first").attr("src", "icons/heart.png");
        }
    });
///////////

//+- buttons
    function IncreaseValue(ElementID)
    {
        var IncrementNumber = document.getElementsByClassName('IncNumber')[ElementID];
        var IncrementNumberValue = IncrementNumber.value;
        IncrementNumberValue >= 8 ? '' : IncrementNumberValue++;
        IncrementNumber.value = IncrementNumberValue;
    }
    function DecreaseValue(ElementID)
    {
        var IncrementNumber = document.getElementsByClassName('IncNumber')[ElementID];
        var IncrementNumberValue = IncrementNumber.value;
        IncrementNumberValue <= 1 ? '' : IncrementNumberValue--;
        IncrementNumber.value = IncrementNumberValue;
    }
///////////

//+- time buttons
    if(document.getElementsByClassName('IncTime')[0])
    {
        const InputTime = document.getElementsByClassName('IncTime')[0].placeholder;
        const Increment = 15;
        var Minutes = String(InputTime).slice(-2);
        var Hours = '12';

        function UpdateTime(id)
        {
            if(id)
            {
                document.getElementsByClassName('IncTime')[id].placeholder = Hours + ':' + Minutes;
            }
            else
            {
                document.getElementsByClassName('IncTime')[0].placeholder = Hours + ':' + Minutes;
            }
        }

        function AddTime(id)
        {
            if (Minutes  < 45)
            {
                Minutes = Minutes * 1 + Increment;
            }
            else if (Minutes >= 45)
            {
                Minutes = 0;
                Hours++;
                if (Hours > 23)
                {
                    Minutes = 0;
                    Hours = 0;
                } 
            }
            UpdateTime(id);
        }

        function SubTime(id)
        {
            if (Minutes > 0)
            {
                Minutes = Minutes * 1 - Increment;
            }
            else if (Minutes  <= 0)
            {
                Minutes = 45;
                Hours--;
                if (Hours < 0)
                {
                    Hours = 23;
                    Minutes = 45;
                }
            }
            UpdateTime(id);
        }        
    }

///////////

//Overlays
    const { body, documentElement } = document;
    let { ScrollTop } = document.documentElement;

    function OpenNavMenu(MenuID, ButtonID)
    {
        if(MenuID == 'FilterSection')
        {
            document.getElementsByClassName('FilterFooter')[0].style.bottom = '3.3rem';
        }

        $('.ActiveGreenFilter').removeClass('ActiveGreenFilter');
        document.getElementById('MobileMenuButton').children[0].src="icons/menu_white.png";

        var Overlays = document.querySelectorAll('.NavOverlay');

        for(i = 0; i < Overlays.length; i++)
        {
            if(Overlays[i].style.height == '100%')
            {
                Overlays[i].style.height = 0;
            }
        }

        if(ButtonID)
        {
            document.getElementById(ButtonID).children[0].classList.add("ActiveGreenFilter");
            document.getElementById(ButtonID).children[1].classList.add("ActiveGreenFilter");

            if(ButtonID == 'MobileMenuButton')
            {
                document.getElementById(ButtonID).children[0].src="icons/close_white.png";
            }            
        }

        ScrollTop = documentElement.ScrollTop;
        body.style.top = `-${ScrollTop}px`;
        body.classList.add("ScrollDisabled");

        document.getElementById(MenuID).style.height = "100%";
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
    }
    function CloseNavMenu(MenuID)
    {

        document.getElementsByClassName('FilterFooter')[0].style.bottom = '-3.3rem';

        document.getElementById(MenuID).value = '';

        $('.ActiveGreenFilter').removeClass('ActiveGreenFilter');

        document.getElementById('MobileMenuButton').children[0].src="icons/menu_white.png";

        body.classList.remove("ScrollDisabled");
        documentElement.style.scrollBehavior = "auto";
        documentElement.ScrollTop = ScrollTop;
        documentElement.style.removeProperty("scroll-behavior");
        body.style.removeProperty("top");
        
        document.getElementById(MenuID).style.height = "0%";
        document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    }
///////////

//Result map expansion
    function ExpandResultMap()
    {
        const MapArrowButton = document.getElementsByClassName("MapArrowButton")[0];
        const ResultHalf = document.getElementsByClassName("ResultHalf")[0];
        const MapHalf = document.getElementsByClassName("MapHalf")[0];

        if(MapArrowButton.value == "shrunk")
        {
            ResultHalf.style.whiteSpace = "nowrap";
            ResultHalf.style.width = "0%";
            MapHalf.style.width = "100%";
            console.log('Expanded the map');
            MapArrowButton.value = "expanded";
            MapArrowButton.innerHTML = "&gt";
        }
        else if(MapArrowButton.value == "expanded")
        {

            ResultHalf.style.removeProperty('width');
            MapHalf.style.removeProperty('width');
            console.log('Shrunk the map');
            MapArrowButton.value = "shrunk";
            MapArrowButton.innerHTML = "&lt";
            ResultHalf.style.whiteSpace = "normal";
        }
    }
///////////

//Category selector in restaurant view
//FoodMenuDiv, OffersDiv

    if(document.querySelectorAll("div[value=DynamicDiv]")[1])
    {
        $(document).ready(function() {
            document.querySelectorAll("div[value=DynamicDiv]")[1].style.display = 'none';
        });   
    }

    function ShowRestaurantMenu(DivClass, ButtonClass)
    {
        document.querySelectorAll("div[value=DynamicDiv]").forEach(function(element)
        {
            element.style.display = 'none';
        });
        document.querySelectorAll(".SelectableLink").forEach(function(element)
        {
            element.classList.remove("LinkSelected");
        });

        document.getElementsByClassName(ButtonClass)[0].classList.add("LinkSelected");

        document.getElementsByClassName(DivClass)[0].style.display = 'block';
    }
///////////

//Hide mobile navbar when scrolling
    var lastScrollTop;
    navbar = document.getElementsByClassName('TopNavbar')[0];
    window.addEventListener('scroll',function()
    {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop > lastScrollTop)
        {
            navbar.style.top='-5rem';
        }
        else
        {
            navbar.style.top='0';
        }
        lastScrollTop = scrollTop;
    });
///////////

//Location search popup
function LocationSearchPopup()
{
    var LocationSearchWithDropdown = document.getElementsByClassName('LocationSearchWithDropdown');
    var LocationSearchResultBox = document.getElementsByClassName('LocationSearchResultBox');

    document.querySelectorAll('.LocationSearchWithDropdown').forEach(element =>
    {
        element.addEventListener('input', event =>
        {
            ElementNumber = element.getAttribute('data-dropdown-id');
            if (element.value !== '')
            {
                LocationSearchResultBox[ElementNumber].style.display = 'block';
            }
            else
            {
                LocationSearchResultBox[ElementNumber].style.display = 'none';
            }
        })
    })
}
LocationSearchPopup();
///////////

//Container selector in profile
    window.onload = (event) =>
    {
        document.querySelectorAll(".HiddenByDefault").forEach(function(element)
        {
            element.style.display = 'none';
        });
    };   

    function ShowProfileContainer(id)
    {
        if(id == 2)
        {
            document.querySelectorAll(".SelectionLinkHeart")[0].src="icons/heart_red.png";
        }
        else
        {
            document.querySelectorAll(".SelectionLinkHeart")[0].src="icons/heart.png";
        }
        
        document.querySelectorAll(".SelectionLink").forEach(function(element)
        {
            element.classList.remove("SelectionLinkClicked");
        });
        document.querySelectorAll(".SelectionLink")[id].classList.add("SelectionLinkClicked");

        document.querySelectorAll("div[id^='SelectedContainer']").forEach(function(element)
        {
            element.style.display = 'none';
        });
        document.querySelectorAll("#SelectedContainer" + id).forEach(function(element)
        {
            element.style.display = 'flex';
        });
    }
///////////
