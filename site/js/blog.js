'use strict';

//
// Custom rendering extensions for <marked.js> in the context of Bulma.
//
const renderer = {
    heading: (t, l) => `<h${l} class="title is-${l}">${t}</h${l}>`,
    table: (h, b) => `<table class="table is-bordered is-striped"><thead>${h}</thead><tbody>${b}</tbody></table>`,
};

// Setup <marked.js> options and install custom renderer extensions.
marked.setOptions({
    breaks: true,
    gfm: true,
    smarypants: true,
});
marked.use({ renderer });

//
// Loading / rendering helpers 
//

function renderError(r) {
    // Set the error messages up.
    $el('#blog-message').text(`ERROR (${r.status}) - ${r.statusText}`);

    // Update visible things.
    $el('#blog-progress').removeClass('is-active');
    $el('#blog-error').removeClass('is-hidden');

    return Promise.reject();
}

function renderBlog(blog, content) {
    const el = $el('#blog-content');
    el.html(marked(content));
    el.highlight();
    feather.replace();

    // Update visible things.
    $el('#blog-progress').removeClass('is-active');
    $el('#blog-content').removeClass('is-hidden');
}

function renderIndex(index, content) {
    const el = $el('#blog-index');
    el.html(marked(content));
    el.highlight();
    feather.replace();

    // Update visible things.
    $el('#blog-progress').removeClass('is-active');
    $el('#blog-index').removeClass('is-hidden');
}

function renderCore(index) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const blog = id ? index.posts.find(p => p.id == id) : null;

    fetch(blog ? blog.loc : index.loc)
        .then(r => !r.ok ? renderError(r) : r.text())
        .then(c => blog ? renderBlog(blog, c) : renderIndex(index, c));
}

function onReady() {
    fetch('/p/index.json')
        .then(resp => !resp.ok ? renderError(resp) : resp.json())
        .then(renderCore);
}

// When the content is ready, finish up loading.
window.addEventListener('DOMContentLoaded', onReady);

