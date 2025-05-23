function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // width document
  var widthDoc = document.querySelector("body");

  // show menu pc
  var barPc = document.getElementById("nav");
  if (barPc) {
    var offset = barPc.offsetTop;
  }
  // tabs
  var tabs = document.querySelectorAll(".tab-item");
  var panes = document.querySelectorAll(".tab-pane");

  // show popup login
  var linkAccounts = document.querySelectorAll(".js_popup_show");
  var popupLogin = document.getElementById("cmt-account-header");

  // change password to show text
  var boxPass = document.querySelectorAll(".box_pass");

  // show menu mobile
  var menu = document.getElementById("menu");
  var showMenus = document.querySelectorAll(".js_menu_show");

  // show search mobile
  var showSearchMb = document.getElementById("header-btn-search");
  var searchMb = document.getElementById("search-form-mb");

  // scroll hide footer mb
  var prevScrollpos = window.pageYOffset;

  // show categories top
  var barBreadcumCate = document.querySelector(".js_breadcum_show");
  var breadcumList = document.querySelector(".breadcum-mb-list");

  // headerTalk
  var headerTalk = document.querySelector(".headerother");

  // header detail
  var headerDetail = document.querySelector(".header_detail");

  // range radio
  var ranges = document.querySelectorAll('input[type="range"]');
  var playsRadio = document.querySelectorAll(".js__playRadio");
  var volumsRadio = document.querySelectorAll(".js__radioVolum");


  // swiper
  const oneSlides = document.querySelectorAll(".js__oneSlidesContainer");
  const autoSlides = document.querySelectorAll(".js__autoSlideContainer");
  const threeSlides = document.querySelectorAll(".js__threeSlidesContainer");


  // fillter search
  const dropDownContainers = document.querySelectorAll(".js__dropDownContainer");


  // show hide sticky detail
  var stickyStart = document.querySelector(".sticky-start");
  var stickyEnd = document.querySelector(".sticky-end");
  var stickyEl = document.querySelector(".sticky-ele");

  const fancyboxes = document.querySelectorAll(".fancybox-full");

  console.log(fancyboxes)

  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;

      // when click back top
      if (backTop) {
        backTop.onclick = function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };
      }

      // emagazin
      if (widthDoc) {
        var expNoEditFull = document.querySelectorAll(".expNoEdit.full");
        expNoEditFull.forEach(function (a) {
          a.style.width = widthDoc.clientWidth + "px";
          a.style.marginLeft = "-" + a.offsetLeft + "px";
        });
      }

      // show menu pc
      if (barPc) {
        var btnMenu = barPc.querySelector(".icon-expandmenu");
        var menuPc = barPc.querySelector(".expand-bar");

        btnMenu.onclick = () => {
          menuPc.classList.toggle("active");
          btnMenu.classList.toggle("active");
        };
      }

      // tabs
      if (tabs && panes) {
        tabs.forEach(function (tab, index) {
          var pane = panes[index];
          tab.onclick = function () {
            document
              .querySelector(".tab-item.active")
              .classList.remove("active");
            document
              .querySelector(".tab-pane.active")
              .classList.remove("active");

            this.classList.add("active");
            pane.classList.add("active");
          };
        });
      }

      // show login
      if (linkAccounts && popupLogin) {
        linkAccounts.forEach(function (linkAccount) {
          linkAccount.onclick = () => {
            popupLogin.style.display = "block";
            widthDoc.style.overflow = "hidden";
          };
        });
        var closePopup = popupLogin.querySelector(".close");
        closePopup.onclick = () => {
          popupLogin.style.display = "none";
          widthDoc.style.overflow = "unset";
        };
      }

      // change password to show text
      if (boxPass) {
        boxPass.forEach(function (el) {
          var eyeIcon = el.querySelector(".iconew-eye");
          var typeInput = el.querySelector(".type-input");

          eyeIcon.onclick = () => {
            eyeIcon.classList.toggle("closed");
            if (typeInput.getAttribute("type") == "password") {
              typeInput.setAttribute("type", "text");
            } else {
              typeInput.setAttribute("type", "password");
            }
          };
        });
      }

      // show menu mobile
      if (showMenus) {
        showMenus.forEach((showMenu) => {
          showMenu.onclick = function () {
            if (menu.matches(".hide")) {
              menu.classList.remove("hide");
            }
          };
        });
      }
      if (menu) {
        var closeMenu = menu.querySelector("#menu-btn-close");
        closeMenu.onclick = () => {
          menu.classList.add("hide");
        };
      }

      // show search mobile
      if (showSearchMb) {
        showSearchMb.onclick = () => {
          searchMb.classList.toggle("hidden");
        };
      }

      // show breadcum cate mobile
      if (barBreadcumCate) {
        barBreadcumCate.onclick = () => {
          breadcumList.classList.toggle("show");
        };
      }

      // ranges
      if (ranges) {
        ranges.forEach(function (input) {
            var valueRange = input.value + "%";
            var maxRange = input.max + "%";
            input.style.backgroundSize = `${valueRange} ${maxRange}`;
            input.oninput = function (e) {
                var min = e.target.min;
                var max = e.target.max;
                var val = e.target.value;
                e.target.style.backgroundSize =
                    ((val - min) * 100) / (max - min) + "% 100%";
            };
        });
      }
      if (playsRadio) {
        playsRadio.forEach((playRadio) => {
            playRadio.onclick = function () {
                this.classList.toggle("active");
            };
        });
      }
      if (volumsRadio) {
          volumsRadio.forEach((volumRadio) => {
              volumRadio.onclick = function () {
                  this.classList.toggle("active");
              };
          });
      }

      // filter search
      if(dropDownContainers){
        if(dropDownContainers.length === 0) return

        dropDownContainers.forEach((dropDownContainer)=>{
          const showDropDown = dropDownContainer.querySelector('.js__showDropDown')
          const filterDropDownItems = dropDownContainer.querySelectorAll('.js__filterDropdownItem')

          showDropDown.onclick = function() {
            dropDownContainer.classList.toggle('active')
          }
          if(filterDropDownItems.length === 0) return;

          let currentActive = dropDownContainer.querySelector('.js__filterDropdownItem.active');

          filterDropDownItems.forEach((filterDropDownItem)=>{

            filterDropDownItem.onclick = function() {
              if(currentActive){
                currentActive.classList.remove('active')
              }
              this.classList.add('active')
              currentActive = this
             
            }
          })
        })
      }


      // match action

      

      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {
        if (menuPc && btnMenu) {
          if (
            !menuPc.querySelector(".wrapper").contains(e.target) &&
            !e.target.matches(".icon-expandmenu")
          ) {
            menuPc.classList.remove("active");
            btnMenu.classList.remove("active");
          }
        }
      });
    },

     // Khởi tạo fancybox
      initFancybox: function() {
      if (fancyboxes) {
          fancyboxes.forEach(function () {
              $(".fancybox-full a").fancybox();
          });
      }
  },

    // Xử lý tăng giảm font size
    handleChangeFontSize: function() {
      var sizeDefaults = document.querySelectorAll('.size-default');
      var sizePlus = document.querySelectorAll('.size-plus');
      if(sizePlus.length > 0 && sizeDefaults.length > 0){
        size = parseInt(window.getComputedStyle(document.querySelector(".js_change_size")).fontSize, 10);
        size2 = parseInt(window.getComputedStyle(document.querySelector(".js_change_size2")).fontSize, 10);
        size3 = parseInt(window.getComputedStyle(document.querySelector(".js_change_size3")).fontSize, 10);

        sizePlus.forEach((item)=>{
          item.onclick = function(){
            document.querySelector(".js_change_size").style.fontSize = (size + 2) + "px";
            document.querySelector(".js_change_size2").style.fontSize = (size2 + 2) + "px";
            document.querySelector(".js_change_size3").style.fontSize = (size3 + 2) + "px";
            document.querySelector(".js_change_size3").classList.add('plusSize');
          }
        })

        sizeDefaults.forEach((item)=>{
          item.onclick = function(){
            document.querySelector(".js_change_size").style.fontSize = size + "px";
            document.querySelector(".js_change_size2").style.fontSize = size2 + "px";
            document.querySelector(".js_change_size3").style.fontSize = size3 + "px";
            document.querySelector(".js_change_size3").classList.remove('plusSize');
          }
        })
      }

    },
    // match action pc
    handleMatchAction: function() {

    const matchActions = document.querySelectorAll('.js__matchAction');
    if (matchActions.length === 0) return;

    matchActions.forEach((matchAction)=>{
      const latest = matchAction.querySelector('.js__latest')
      const shorten = matchAction.querySelector('.js__shorten')
      const timeLineContainer = matchAction.querySelector('.js__timeLineContainer')
      const timeLineActionContainers = matchAction.querySelectorAll('.js__timeLineActionContainer')
      
      if (timeLineActionContainers.length === 0) return;
      
      timeLineActionContainers.forEach(container => {
        const timeLineAction = container.querySelector('.js__timeLineAction');
        if (timeLineAction) {
            timeLineAction.onclick = () => {
                const isActive = container.classList.toggle('action');
                timeLineAction.querySelector('.text').innerText = isActive ? 'Rút gọn' : 'Xem chi tiết';
            };
        }
    });


      if(latest){
        latest.onclick = function() {
          this.innerText = this.innerText === 'Xem mới nhất' ? 'Xem cũ nhất' : 'Xem mới nhất';
          let items = Array.from(timeLineContainer.children); 
          items.reverse().forEach(item => timeLineContainer.appendChild(item));
        }
      }

      if(shorten){
        shorten.onclick = function() {
          const isShortened = this.innerText === 'Rút gọn';
            this.innerText = isShortened ? 'Xem chi tiết' : 'Rút gọn';

          timeLineActionContainers.forEach((timeLineActionContainer)=>{

          const timeLineAction = timeLineActionContainer.querySelector('.js__timeLineAction')

          if(timeLineActionContainer.classList.contains('action')){
            timeLineActionContainer.classList.remove('action')
            timeLineAction.querySelector('.text').innerText = 'Xem chi tiết'
          } else {
            timeLineActionContainer.classList.add('action')
            timeLineAction.querySelector('.text').innerText = 'Rút gọn'
          }

          })
        }
      }
    })
      
    },

    // match action mb
    handleMatchActionMb: function() {

    const matchActions = document.querySelectorAll('.js__matchActionMb');
    if (matchActions.length === 0) return;

    matchActions.forEach((matchAction)=>{
      const sortAll = matchAction.querySelector('.js__sortAll')
      const timeLineContainer = matchAction.querySelector('.js__timeLineContainer')
    

      if(sortAll){
        sortAll.onclick = function() {
          let items = Array.from(timeLineContainer.children); 
          items.reverse().forEach(item => timeLineContainer.appendChild(item));
        }
      }

    })
      
    },
    // slide topic list
    slideToppicList: function () {
      $(".topic-hot-mb__content").slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    },


    // Khởi tạo slider với một item
    initSliderOneItems: function() {
      if (oneSlides) {
          oneSlides.forEach((item) => {
              var slider = item.querySelector(".js__oneSlide");
              var next = item.querySelector(".swiper-button-next");
              var prev = item.querySelector(".swiper-button-prev");
              var pagi = item.querySelector(".swiper-pagination");

              new Swiper(slider, {
                  slidesPerView: 1,
                  spaceBetween: 30,
                  slidesPerGroup: 1,
                  navigation: {
                      nextEl: next || null,
                      prevEl: prev || null,
                  },
                  pagination: {
                      el: pagi,
                      clickable: true,
                  },
                  autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                  },
              });
          });
      }
    },

    // khởi tạo slider với nhiều item có width auto
     initSliderAutoItems: function() {
      if (autoSlides) {
          autoSlides.forEach((item) => {
              var slider = item.querySelector(".js__swiperAuto");
              var next = item.querySelector(".swiper-button-next");
              var prev = item.querySelector(".swiper-button-prev");
              new Swiper(slider, {
                  slidesPerView: "auto",
                  spaceBetween: 0,
                  loop:true,
                  navigation: {
                      nextEl: next || null,
                      prevEl: prev || null,
                  },
                  autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                  },
              });
          });
      }
    },

    // khởi tạo slider với 3 item
    initSliderThreeItems: function() {
      if (threeSlides) {
          threeSlides.forEach((item) => {
              var slider = item.querySelector(".js__threeSlide");
              var next = item.querySelector(".swiper-button-next");
              var prev = item.querySelector(".swiper-button-prev");
              var pagi = item.querySelector(".swiper-pagination");
              new Swiper(slider, {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  slidesPerGroup: 1,
                  navigation: {
                      nextEl: next || null,
                      prevEl: prev || null,
                  },
                  pagination: {
                      el: pagi || null,
                  },
                  autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                  },
                  breakpoints: {
                      640: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                      },
                      768: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                      },
                      1024: {
                          slidesPerView: 3,
                          spaceBetween: 0,
                      }
                  },
              });
          });
      }
  },
   
    // scroll top
    scrollFunc: function () {
      if (stickyStart && stickyEnd && stickyEl) {
        if (
          window.scrollY > stickyStart.offsetTop &&
          window.scrollY < stickyEnd.offsetTop
        ) {
          setTimeout(() => {
            if (!stickyEl.matches(".sticking")) {
              stickyEl.classList.add("sticking");
            }
          }, 100);
        } else {
          setTimeout(() => {
            if (stickyEl.matches(".sticking")) {
              stickyEl.classList.remove("sticking");
            }
          }, 100);
        }
      }
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }

      if (barPc) {
        if (window.pageYOffset >= offset) {
          barPc.classList.add("sticky");
          barPc.classList.remove("active");
        } else {
          barPc.classList.remove("sticky");
          barPc.classList.add("active");
        }
      }

      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("bottom-bar").style.bottom = "0";
        if (headerTalk) {
          if (headerTalk.matches(".sticky")) {
            document.querySelector(".headerother").classList.remove("sticky");
            document.querySelector(".headerother").classList.add("active");
          }
        }

        if (headerDetail) {
          if (headerDetail.matches(".add_sticky")) {
            headerDetail.classList.remove("add_sticky");
          }
        }
      } else {
        document.getElementById("bottom-bar").style.bottom = "-56px";
        if (headerTalk) {
          if (headerTalk.matches(".active")) {
            document.querySelector(".headerother").classList.add("sticky");
            document.querySelector(".headerother").classList.remove("active");
          }
        }

        if (headerDetail) {
          if (!headerDetail.matches(".add_sticky")) {
            headerDetail.classList.add("add_sticky");
          }
        }
      }
      prevScrollpos = currentScrollPos;
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      window.addEventListener('scroll', throttle(this.windowScroll.bind(this),300));
      // slide one item
      this.initSliderOneItems();
      // slide auto item
      this.initSliderAutoItems();
      // slide three item
      this.initSliderThreeItems();
      // change font size
      this.handleChangeFontSize();
      // match action
      this.handleMatchAction();
      this.handleMatchActionMb();
      this.initFancybox();
      
    },
  };

  app.start();
});
