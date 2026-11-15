/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/

/* =====================================================================
   ÜST MENÜ (TÜM SAYFALAR İÇİN TEK YERDEN)
   Menüyü değiştirmek istediğinde sadece aşağıdaki "MENU" listesini düzenle.
   - label : Menüde görünen yazı
   - href  : Gidilecek sayfa
   - match : Bu sayfalarda menü maddesi "aktif" (beyaz) görünür
   ===================================================================== */
(function () {
    var MENU = [
        { label: 'Anasayfa',   href: 'index.html',              match: ['index.html'] },
        { label: 'Hakkımızda', href: 'about.html',              match: ['about.html'] },
        { label: 'Referanslar', href: 'portfolio-overview.html', match: ['portfolio-overview.html', 'portfolio-item.html'] },
        { label: 'İletişim',   href: 'contact.html',            match: ['contact.html'] },
        { label: 'Blog',       href: 'blog-home.html',          match: ['blog-home.html', 'blog-post.html'] }
    ];

    var nav = document.querySelector('nav.navbar');
    if (!nav) return;

    document.documentElement.lang = 'tr';

    var page = window.location.pathname.split('/').pop() || 'index.html';

    var items = MENU.map(function (m) {
        var active = m.match.indexOf(page) !== -1;
        return '<li class="nav-item"><a class="nav-link' + (active ? ' active' : '') + '"' +
               (active ? ' aria-current="page"' : '') +
               ' href="' + m.href + '">' + m.label + '</a></li>';
    }).join('');

    nav.innerHTML =
        '<div class="container px-5">' +
            '<a class="navbar-brand" href="index.html">' +
                '<img src="logo.png" alt="Ogen Yapı Teknik" style="height: 45px; width: auto;">' +
            '</a>' +
            '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Menüyü aç/kapat">' +
                '<span class="navbar-toggler-icon"></span>' +
            '</button>' +
            '<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
                '<ul class="navbar-nav ms-auto mb-2 mb-lg-0">' + items + '</ul>' +
            '</div>' +
        '</div>';
})();
