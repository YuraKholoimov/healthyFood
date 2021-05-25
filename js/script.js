import cards from './modules/cards';
import forms from './modules/forms';
import timer from './modules/timer';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import calc from './modules/calculator';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 2000);

    cards();
    forms('form', modalTimerId);
    timer('.timer', '2021-06-1');
    modal('[data-modal]', '.modal', modalTimerId);
    slider({container: '.offer__slider',
            slide: '.offer__slide',
            nextSelector: '.offer__slider-next',
            prevSelector: '.offer__slider-prev',
            totalCounter: '#total',
            currentCounter: '#current',
            wrapper:'.offer__slider-wrapper',
            field: '.offer__slider-inner',
        });
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    calc();
});


