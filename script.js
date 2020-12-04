const $topTheTop = $('.to-the-top')

$topTheTop.on('click', () => {
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    'slow'
  )
})

$(window).on('scroll', () => {
  $('.futer').text('aktualna pozycja: ' + $(document).scrollTop() + 'px')

  if ($(window).scrollTop() > 99) {
    $topTheTop.addClass('show')
    $('.futer').addClass('show')
  } else {
    $('.futer').removeClass('show')
    $topTheTop.removeClass('show')
  }

  if ($(window).scrollTop() > 10) {
    $('.section-selector').addClass('show')
    $('nav').addClass('smaller')
  } else {
    $('.section-selector').removeClass('show')
    $('nav').removeClass('smaller')
  }
})

$('nav a').on('click', function () {
  const keep = '#' + $(this).attr('class')
  $('body, html').animate(
    {
      scrollTop: $(keep).offset().top,
    },
    500
  )
})

$(document).on('scroll', () => {
  const windowHeight = $(window).height()
  const scrollValue = $(this).scrollTop()
  const $expand1 = $('.expand1')
  const $expand2 = $('.expand2')
  const $expand3 = $('.expand3')
  const $expand4 = $('.expand4')
  const expandHeight = $expand1.outerHeight()
  const expand1FromTop = $expand1.offset().top
  const expand2FromTop = $expand2.offset().top
  const expand3FromTop = $expand3.offset().top
  const expand4FromTop = $expand4.offset().top

  if (scrollValue > expand1FromTop + expandHeight - windowHeight) {
    $($expand1).addClass('show')
  }

  if (scrollValue > expand2FromTop + expandHeight - windowHeight) {
    $($expand2).addClass('show')
  }

  if (scrollValue > expand3FromTop + expandHeight - windowHeight) {
    $($expand3).addClass('show')
  }

  if (scrollValue > expand4FromTop + expandHeight - windowHeight) {
    $($expand4).addClass('show')
  }

  if (scrollValue < 100) {
    $($expand1).removeClass('show')
    $($expand2).removeClass('show')
    $($expand3).removeClass('show')
    $($expand4).removeClass('show')
  }
})

const whichSectionIsIt = () => {
  const scrollPosition = $(window).scrollTop()
  const sectionHeight = $('.s1').height()

  if (scrollPosition < sectionHeight) {
    $('p').text('1')
  } else if (scrollPosition < sectionHeight * 2) {
    $('p').text('2')
  } else if (scrollPosition < sectionHeight * 3) {
    $('p').text('3')
  } else if (scrollPosition < sectionHeight * 4) {
    $('p').text('4')
  }
}

$(document).on('scroll', whichSectionIsIt)
