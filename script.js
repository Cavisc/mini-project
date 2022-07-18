feather.replace()

const menu = document.getElementById('menu')
let elMenuSelected = 1
const cardOne = document.getElementById('bl-1')
const cardTwo = document.getElementById('bl-2')
const cardThree = document.getElementById('bl-3')
const cardFour = document.getElementById('bl-4')

const infoOne = document.getElementById('br-1')
const infoTwo = document.getElementById('br-2')
const infoThree = document.getElementById('br-3')
const infoFour = document.getElementById('br-4')

menu.addEventListener('click', e => {
  const target = e.target.id

  if (target == 'menu' || target == '' || target == elMenuSelected) {
    return
  }

  const elMenu = document.getElementById(target)
  const elMenuReturned = document.getElementById(elMenuSelected)

  elMenu.classList.add('selected')
  elMenuReturned.classList.remove('selected')

  if (target == 1) {
    cardOne.classList.add('visible')
    infoOne.classList.add('visible')

    removeClass(cardTwo, cardThree, cardFour)
    removeClass(infoTwo, infoThree, infoFour)
  } else if (target == 2) {
    cardTwo.classList.add('visible')
    infoTwo.classList.add('visible')

    removeClass(cardOne, cardThree, cardFour)
    removeClass(infoOne, infoThree, infoFour)
  } else if (target == 3) {
    cardThree.classList.add('visible')
    infoThree.classList.add('visible')

    removeClass(cardOne, cardTwo, cardFour)
    removeClass(infoOne, infoTwo, infoFour)
  } else if (target == 4) {
    cardFour.classList.add('visible')
    infoFour.classList.add('visible')

    removeClass(cardOne, cardTwo, cardThree)
    removeClass(infoOne, infoTwo, infoThree)
  }

  elMenuSelected = target
})

function removeClass(el, el2, el3) {
  el.classList.remove('visible')
  el2.classList.remove('visible')
  el3.classList.remove('visible')
}

function removeClassInfo(el, el2, el3) {
  el.classList.remove('visible')
  el2.classList.remove('visible')
  el3.classList.remove('visible')
}
