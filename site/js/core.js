'use strict';

//
// Helper functions
//

const isundef = (x) => typeof x === 'undefined';

function elCore(el) {
    if (!el) throw 'element is undefined';
    return {
        element: _ => el,

        addClass: c => el.classList.add(c),
        hasClass: c => el.classList.contains(c),
        removeClass: c => el.classList.remove(c),
        toggleClass: c => el.classList.toggle(c),

        data: nim => el.dataset[nim],

        html(h) {
            if (isundef(h))
                return el.innerHTML;
            el.innerHTML = h;
        },
        text(t) {
            if (isundef(t))
                return el.textContent;
            el.textContent = t;
        },

        highlight: _ => Prism.highlightAllUnder(el, true),
    };
};

const $el = (sel) => {
    const el = document.querySelector(sel);
    if (!el) throw 'no element for selector "${sel}" found';
    return elCore(el);
};

const $els = (sel) => {
    const els = document.querySelectorAll(sel);
    return {
        count: _ => els.length,
        elements: i => els.item(i),

        on: (ev, cb) => els.forEach(el => el.addEventListener(ev, _ => cb(elCore(el)))),
    };
};

//
// Setup logic / functions
//

function onReady() {
    $els('.navbar-burger').on('click', el => {
        const t = $el(el.data('target'));
        el.toggleClass('is-active');
        t.toggleClass('is-active');
    });
}

// When the content is ready, finish up loading.
window.addEventListener('DOMContentLoaded', onReady);

