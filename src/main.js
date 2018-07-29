import './assets/style/main.scss';
import {
  get
} from 'http';

const config = {
  opening: {
    duration: 5
  }
}

let ans = [];

function opening() {

  var $star = $('.star');
  var $rect = $('.rect');
  var $circle = $('.circle');
  TweenLite.to($star, config.opening.duration, {
    rotation: 360,
    ease: Power2.easeOut
  })
  TweenLite.to($rect, config.opening.duration, {
    rotation: -360,
    ease: Power2.easeOut
  })
  TweenLite.to($circle, config.opening.duration / 2, {
    css: {
      scale: 1.1
    }
  });
  TweenLite.to($circle, config.opening.duration / 2, {
    css: {
      scale: 1
    },
    delay: config.opening.duration / 2
  });


  TweenLite.to($rect, 0.6, {
    css: {
      scale: 7
    },
    ease: Power2.easeOut,
    delay: config.opening.duration
  });
  TweenLite.to($circle, 1.6, {
    css: {
      scale: 7
    },
    ease: Power2.easeOut,
    delay: config.opening.duration + 0.3
  })
  TweenLite.to($star, 1.6, {
    css: {
      scale: 7
    },
    ease: Power2.easeOut,
    delay: config.opening.duration + 0.6,
    onComplete: function () {
      $('.opening').remove();
      q1Start();
    }
  })
}
opening();
// q1Start()

function q1Start() {
  $('.q1').css('background', '#1469FF');
  $('.q1 .text-content').animate({
    opacity: 0
  }, 200, function () {
    $('.q1 .q-section').animate({
      opacity: 1
    }, 500);
  });
  $('.q1 .q-section__options li').click(function (e) {
    let value = $(e.target).data('value');
    if (!value) return;
    // console.log(value);
    ans.push(value);
    $rect.remove()
    $tri.remove()
    $circle.remove()
    TweenLite.to($('.q1 .animate-section'), 0.5, {
      css: {
        left: '0%'
      },
      onComplete: function () {
        $('.q1').remove()
        q2Start();
      }
    })
  })

  var $rect = $('.q1 .animate-section__rect');
  var $tri = $('.q1 .animate-section__tri');
  var $circle = $('.q1 .animate-section__circle');
  TweenLite.to($('.q1 .animate-section'), 1, {
    css: {
      left: '60%'
    },
    delay: 1
  });
  TweenLite.to($rect, 2, {
    css: {
      top: '100px'
    },
    ease: Power2.easeOut,
    delay: 2
  });
  TweenLite.to($tri, 2, {
    css: {
      top: '250px'
    },
    ease: Power2.easeOut,
    delay: 2
  });
  TweenLite.to($circle, 2, {
    css: {
      bottom: '-100px'
    },
    ease: Power2.easeOut,
    delay: 2
  });


  TweenLite.to($rect, 4, {
    css: {
      rotation: 360
    },
    ease: Power2.easeOut,
    delay: 4
  });
  TweenLite.to($tri, 4, {
    css: {
      rotation: -360
    },
    ease: Power2.easeOut,
    delay: 4
  });
  TweenLite.to($circle, 4, {
    css: {
      x: '+= 20',
      y: '+=30'
    },
    ease: Power2.easeOut,
    delay: 4
  });

}

function q2Start() {
  $('.q2 .animate-section').css('right', '100%');
  $('.q2 .q-section').animate({
    opacity: 1
  }, 500);

  // 加入 on click
  $('.q2 .q-section__options li').click(function (e) {
    var value = $(e.target).attr('data-value');
    ans.push(value);

    $rect.fadeOut();
    $tri.fadeOut()
    $circle.fadeOut()
    TweenLite.to('.q2 .animate-section', 0.5, {
      css: {
        right: '0%'
      },
      onComplete: function () {
        $('.q2').remove();
        q3Start();
      }
    })
  });

  var $rect = $('.q2 .animate-section__rect');
  var $tri = $('.q2 .animate-section__tri');
  var $circle = $('.q2 .animate-section__circle');
  TweenLite.to($('.q2 .animate-section'), 1, {
    css: {
      right: '60%'
    },
    delay: 0.5
  });
  TweenLite.to($rect, 2, {
    css: {
      bottom: '200px'
    },
    ease: Power3.easeOut,
    delay: 2
  });
  TweenLite.to($tri, 2, {
    css: {
      top: '-50px'
    },
    ease: Power2.easeOut,
    delay: 2
  });
  TweenLite.to($circle, 2, {
    css: {
      bottom: '200px'
    },
    ease: Power2.easeOut,
    delay: 2
  });
  TweenLite.to($rect, 4, {
    rotation: '+=360',
    ease: Power3.easeOut,
    delay: 4
  })
  TweenLite.to($tri, 4, {
    rotation: '+=360',
    ease: Power2.easeOut,
    delay: 4
  })
  TweenLite.to($circle, 4, {
    css: {
      x: '+=20',
      y: '+=30'
    },
    ease: Power2.easeOut,
    delay: 4
  })
}

function q3Start() {
  TweenLite.to($('.q3 .q-section'), 1, {
    css: {
      right: '40%',
    },
    delay: 1
  });
  TweenLite.to($('.q3 .q-section'), 1, {
    css: {
      opacity: 1
    },
    delay: 1.5
  });
  TweenLite.to($('.q3 .animate-section'), 1, {
    css: {
      left: '60%'
    },
    delay: 0.5
  });

  $('.q3 .q-section__options li').click(function (e) {
    var value = $(e.target).attr('data-value');
    ans.push(value);

    $rect.fadeOut();
    $tri.fadeOut()
    $circle.fadeOut()
    TweenLite.to('.q3 .animate-section', 0.5, {
      css: {
        left: '0%'
      },
      onComplete: function () {
        $('.q3').remove();
        calculating();
      }
    })
  })

  var $rect = $('.q3 .animate-section__rect');
  var $tri = $('.q3 .animate-section__tri');
  var $circle = $('.q3 .animate-section__circle');
  TweenLite.to($rect, 3, {
    css: {
      top: '100px'
    },
    ease: Power3.easeOut,
    delay: 2
  });
  TweenLite.to($tri, 3, {
    css: {
      top: '400px'
    },
    ease: Power2.easeOut,
    delay: 2
  });
  TweenLite.to($circle, 3, {
    css: {
      top: '-50px'
    },
    ease: Power2.easeOut,
    delay: 2
  });
  TweenLite.to($rect, 7, {
    rotation: '-=30',
    ease: Power3.easeOut,
    delay: 4
  });
  TweenLite.to($tri, 7, {
    rotation: '+=360',
    ease: Power2.easeOut,
    delay: 4
  });
  TweenLite.to($circle, 7, {
    css: {
      x: '+=15',
      y: '+=40'
    },
    ease: Power2.easeOut,
    delay: 4
  });

}

// calculating();

function calculating() {
  $('.calculating').removeClass('hide');
  $('body').css('overflow', 'auto');

  function getRandom(lower, upper) {
    return Math.random() * (upper - lower) + lower
  }
  var controller = new ScrollMagic.Controller();
  var total = 30;
  var colors = ['white', '#0027C8', '#FF3C82'];
  for (let i = 0; i < total; i++) {
    var size = Math.floor(Math.random() * 100 + 100)
    var color = colors[i % 3]
    $('.calculating').append(`<div class="small-circle small-circle${i}" style="background:${color}; width:${size}px; height:${size}px; position:fixed; bottom:-300px; left: -200px;"></div>`)
  }

  for (let i = 0; i < total; i++) {
    var topP = getRandom(300, 500)
    var left = getRandom(500, 3000)
    new ScrollMagic.Scene({
        triggerElement: ".trigger" + ((i % 4) + 1),
        duration: Math.random() * 3000 + 500
      })
      .setTween(TweenLite.to($('.small-circle' + i), 10, {
        css: {
          top: `-${topP}px`,
          left: `${left}px`
        }
      }))
      .addTo(controller);
  }
}
