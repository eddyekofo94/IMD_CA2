// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      function localRequire(x) {
        return newRequire(localRequire.resolve(x));
      }

      localRequire.resolve = function (x) {
        return modules[name][1][x] || x;
      };

      var module = cache[name] = new newRequire.Module;
      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({32:[function(require,module,exports) {
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // $(".skills").addClass('.zoom');

    var $nav = $('.navbar');//Caching element
    // hide .navbar first - you can also do this in css .nav{display:none;}
    $nav.hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 200) { //For dynamic effect use $nav.height() instead of '100'
                $nav.fadeIn();
            } else {
                $nav.fadeOut();
            }
        });
    });



// //    Show, hide navbar
//     // hide .navbar first
//     $(".navbar").hide();
//
//     // fade in .navbar
//     $(function () {
//         $(window).scroll(function () {
//
//             // set distance user needs to scroll before we start fadeIn
//             if ($(this).scrollTop() > 200) {
//                 $('.navbar').fadeIn();
//             } else {
//                 $('.navbar').fadeOut();
//             }
//         });
//     });

//    Skills

    $(document).ready(function() {

        mySkills.init();

    });
    $('#programming-tab').click(function () {
        mySkills.init();
    });

    $('#spoken-lang-tab').click(function () {
        // mySkills.init();
        // alert("Hello world");
        myLanguages.init();
    });

    var myLanguages = (function () {
        var that = {};
        that.init = function () {
            $('#en').LineProgressbar({
                percentage: 90,
                fillBackgroundColor: '#000',
                backgroundColor: '#EEEEEE',
                radius: '0px',
                height: '10px',
                width: '100%'
            });
            $('#fr').LineProgressbar({
                percentage: 80,
                fillBackgroundColor: '#000',
                backgroundColor: '#ffffff',
                radius: '0px',
                height: '10px',
                width: '100%'
            });
            $('#li').LineProgressbar({
                percentage: 70,
                fillBackgroundColor: '#000',
                backgroundColor: '#EEEEEE',
                radius: '0px',
                height: '10px',
                width: '100%'
            });
        };
        return that;
    })();

    var mySkills = (function () {
        var that = {};
        that.init = function () {

            $('#java').LineProgressbar({
            percentage: 80,
            fillBackgroundColor: '#000',
            backgroundColor: '#EEEEEE',
            radius: '0px',
            height: '10px',
            width: '100%'
        });
        $('#c-sharp').LineProgressbar({
            percentage: 70,
            fillBackgroundColor: '#000',
            backgroundColor: '#EEEEEE',
            radius: '0px',
            height: '10px',
            width: '100%'
        });
        $('#python').LineProgressbar({
            percentage: 70,
            fillBackgroundColor: '#000',
            backgroundColor: '#EEEEEE',
            radius: '0px',
            height: '10px',
            width: '100%'
        });
        $('#cpp').LineProgressbar({
            percentage: 60,
            fillBackgroundColor: '#000',
            backgroundColor: '#EEEEEE',
            radius: '0px',
            height: '10px',
            width: '100%'
        });
        $('#js').LineProgressbar({
            percentage: 70,
            fillBackgroundColor: '#000',
            backgroundColor: '#EEEEEE',
            radius: '0px',
            height: '10px',
            width: '100%'
        });
        $('#typescript').LineProgressbar({
            percentage: 60,
            fillBackgroundColor: '#000',
            backgroundColor: '#EEEEEE',
            radius: '0px',
            height: '10px',
            width: '100%'
        });

        $('#shell').LineProgressbar({
            percentage: 50,
            fillBackgroundColor: '#000',
            backgroundColor: '#EEEEEE',
            radius: '0px',
            height: '10px',
            width: '100%'
        });
        };

        return that;
    })();

    $("#fullBackground").bgswitcher({
        images: ["./assets/img/winter-16.jpg",
            "./assets/img/winter-23.jpg",
            "./assets/img/winter-22.jpg",
            "./assets/img/winter-17.jpg",
            "./assets/img/winter-19.jpg",
            "./assets/img/winter-21.jpg",
            "./assets/img/winter-20.jpg",
            "./assets/img/winter-3.jpg",
        ],
        interval: 50000,
        shuffle: true,
        duration: 8000
    });

    // terminal
    var welcomeArray = ["> Hi!^1500, this is\n" +
    "<strong>Eddy Ekofo</strong>.^1000 Welcome to my website.",
"> I am a\n" +"<em>Software Developer</em>^1500 .^1000.^1500. emm ^1500 and a Christian,^1000 a Baptist to be\n" +
"specific.^5000 😎"
    ];


    var typed = new Typed('#typedDesktop', {
        // stringsElement: '#typed-strings',
        strings: welcomeArray,
        typeSpeed: 40,
        backDelay: 1000,
        backSpeed: 10,
        smartBackspace: true,
    });
//            snow effect
//            $.fn.snow({ minSize: 1, maxSize: 7, newOn: 300, flakeColor: "#ffffff" });
    $('#contactMe').modal('show');

})(jQuery); // End of use strict


var header = document.getElementById("fullBackground");
// var test = header.firstElementChild("")
var current = 0;

var slides = header.getElementsByTagName("img");

// var some_fancy_gradient = 'linear-gradient(45deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.45) 100%) !important;';


// var background = header.getElementsByClassName[0];
// console.log( header, slides, "hello");
// your code goes here
// document.addEventListener('DOMContentLoaded', function(){
//
// // header.style.background = some_fancy_gradient;
//     setInterval(function() {
//         for (var i = 0; i < slides.length; i++) {
//             slides[i].style.opacity = 0;
//             // slides[i].style.bac = "fixed";
//
//             // $('header').css("background", "center fixed");
//         }
//         current = (current != slides.length - 1) ? current + 1 : 0;
//         slides[current].style.opacity = 1;
//         // slides[current].style.background = some_fancy_gradient;
//     }, 80000); //change to 30000
// // header.style.linearGradient()
// }, false);

// (function ($) {
//     $(document).ready(function(){
//
//
//
//     });
// }(jQuery));



},{}],0:[function(require,module,exports) {
var global = (1,eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent) {
  var ws = new WebSocket('ws://localhost:53506/');
  ws.onmessage = (e) => {
    var data = JSON.parse(e.data);

    if (data.type === 'update') {
      for (let asset of data.assets) {
        hmrApply(global.require, asset);
      }

      for (let asset of data.assets) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      }
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  let parents = [];
  for (let k in modules) {
    for (let d in modules[k][1]) {
      let dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    let fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  let cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(id => hmrAccept(global.require, id));
}
},{}]},{},[0,32])