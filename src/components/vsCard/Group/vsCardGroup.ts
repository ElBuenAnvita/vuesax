import { VNode } from 'vue'
import { Component } from 'vue-property-decorator'
import VsIconsArrow from '../../../icons/arrow'
import VsComponent from '../../../mixins/component'

let fakeScrollLeft = 0;
let lastMsChanged = 0;
/* function isElementInViewport(el: any) {
  const rect = el.getBoundingClientRect();

  // where $0 is <div> of card
  return (
    rect.top >= 0 &&
    // $0.offsetLeft - $0.parentElement.scrollLeft
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    // $0.offsetLeft + $0.offsetWidth - $0.parentElement.scrollLeft
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
} */

function isElementInViewportVanilla(el: any, parent: any) {
  return (
      ((el.offsetLeft - parent.scrollLeft) >= 0) &&
      // tslint:disable-next-line:max-line-length
      (el.offsetLeft + el.offsetWidth - parent.scrollLeft) <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function isElementInViewportVanillaOffset(el: any, parent: any, lastMs: number, scrollLeft: number, msOffset: number) {
  console.log('el');
  console.log(el);
  console.log('parent');
  console.log(parent);
  console.log('lastMs=' + lastMs + ';sL=' + scrollLeft);
  if ((Date.now() - lastMs) >= msOffset) { return isElementInViewportVanilla(el, parent); }
  return (
      ((el.offsetLeft - scrollLeft) >= 0) &&
      // tslint:disable-next-line:max-line-length
      (el.offsetLeft + el.offsetWidth - scrollLeft) <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

@Component
export default class VsCardGroup extends VsComponent {
  public render(h: any): VNode {
    const arrowPrev = h('button', {
      staticClass: 'vs-card__group-prev',
      on: {
        click: (evt: any) => {
          const cardsI: any = this.$refs.cards
          const childrenI: any[] = Array.prototype.slice.call(cardsI.children).reverse()
          let isChanged = false
          let signedCard: any = null
          childrenI.forEach((el) => {
            if (!isChanged) {
              if (isElementInViewportVanillaOffset(el, cardsI, lastMsChanged, fakeScrollLeft, 400)) {
                isChanged = true
              }
            } else {
              // tslint:disable-next-line:max-line-length
              if (!isElementInViewportVanillaOffset(el, cardsI, lastMsChanged, fakeScrollLeft, 400) && signedCard == null) {
                signedCard = el
              }
            }
          })
          // cardsI.scrollTo(cardsI.scrollLeft - cardsI.clientWidth, 0)
          if (!(signedCard === null || signedCard.offsetLeft === null)) {
            // cardsI.scrollLeft = Math.abs(cardsI.offsetWidth - signedCard.offsetLeft - signedCard.offsetWidth)
            cardsI.scrollLeft = -(cardsI.offsetWidth - signedCard.offsetLeft - signedCard.offsetWidth);
            fakeScrollLeft = -(cardsI.offsetWidth - signedCard.offsetLeft - signedCard.offsetWidth);
            lastMsChanged = Date.now();
          }
        }
      }
    }, [
      h(VsIconsArrow)
    ])

    const arrowNext = h('button', {
      staticClass: 'vs-card__group-next',
      on: {
        click: (evt: any) => {
          const cardsI: any = this.$refs.cards
          const childrenI: any[] = Array.prototype.slice.call(cardsI.children);
          let isChanged = false
          let signedCard: any = null
          childrenI.forEach((el) => {
            if (!isChanged) {
              if (isElementInViewportVanillaOffset(el, cardsI, lastMsChanged, fakeScrollLeft, 400)) {
                isChanged = true
              }
            } else {
              // tslint:disable-next-line:max-line-length
              if (!isElementInViewportVanillaOffset(el, cardsI, lastMsChanged, fakeScrollLeft, 400) && signedCard == null) {
                signedCard = el
              }
            }
          })
          // cardsI.scrollTo(cardsI.scrollLeft + cardsI.clientWidth, 0)
          if (!(signedCard === null || signedCard.offsetLeft === null)) {
            cardsI.scrollLeft = signedCard.offsetLeft;
            fakeScrollLeft = signedCard.offsetLeft;
            lastMsChanged = Date.now();
          }
        }
      }
    }, [
      h(VsIconsArrow)
    ])

    const space = h('div', {
      staticClass: 'vs-card__group-space',
    })

    const cards = h('div', {
      staticClass: 'vs-card__group-cards',
      ref: 'cards'
    }, [
      this.$slots.default,
      space
    ])

    return h('div', {
      staticClass: 'vs-card__group',
    }, [
      arrowPrev,
      cards,
      arrowNext
    ])
  }
}
