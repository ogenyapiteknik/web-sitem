
/* =========================================================
   OGEN YAPI TEKNİK - ORTAK SİTE AYARLARI
   ========================================================= */

/* ÜST MENÜ */
(function () {
    var MENU = [
        { label: 'Anasayfa', href: 'index.html', match: ['index.html'] },
        { label: 'Hakkımızda', href: 'about.html', match: ['about.html'] },
        { label: 'Hizmetlerimiz', href: 'hizmetlerimiz.html', match: ['hizmetlerimiz.html'] },
        { label: 'Referanslar', href: 'portfolio-overview.html', match: ['portfolio-overview.html', 'portfolio-item.html'] },
        { label: 'İletişim', href: 'contact.html', match: ['contact.html'] }
    ];

    var nav = document.querySelector('nav.navbar');
    if (!nav) return;

    document.documentElement.lang = 'tr';

    var page = window.location.pathname.split('/').pop() || 'index.html';

    var items = MENU.map(function (m) {
        var active = m.match.indexOf(page) !== -1;

        return '<li class="nav-item"><a class="nav-link' +
            (active ? ' active' : '') + '"' +
            (active ? ' aria-current="page"' : '') +
            ' href="' + m.href + '">' + m.label + '</a></li>';
    }).join('');

    nav.innerHTML =
        '<div class="container px-5">' +
            '<a class="navbar-brand" href="index.html">' +
                '<img src="logo.png" alt="Ogen Yapı Teknik" style="height:45px;width:auto;">' +
            '</a>' +
            '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Menüyü aç/kapat">' +
                '<span class="navbar-toggler-icon"></span>' +
            '</button>' +
            '<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
                '<ul class="navbar-nav ms-auto mb-2 mb-lg-0">' + items + '</ul>' +
            '</div>' +
        '</div>';
})();


/* ALT MENÜ VE ORTALANMIŞ TELİF YAZISI */
(function () {
    var footer = document.querySelector('footer');
    if (!footer) return;

    var links = [
        ['Anasayfa', 'index.html'],
        ['Hakkımızda', 'about.html'],
        ['Hizmetlerimiz', 'hizmetlerimiz.html'],
        ['Referanslar', 'portfolio-overview.html'],
        ['İletişim', 'contact.html']
    ];

    var container = footer.querySelector('.container') || footer;
    var oldMenu = container.querySelector('ul');
    var menu = oldMenu || document.createElement('ul');

    menu.className = 'list-unstyled d-flex flex-wrap justify-content-center gap-3 gap-sm-4 mb-3';

    menu.innerHTML = links.map(function (item) {
        return '<li><a class="link-light text-decoration-none" href="' +
            item[1] + '">' + item[0] + '</a></li>';
    }).join('');

    if (!oldMenu) {
        container.insertBefore(menu, container.firstChild);
    }

    Array.prototype.slice.call(container.querySelectorAll('a')).forEach(function (link) {
        if (link.closest('ul') === menu) return;

        if (
            link.textContent.trim() === 'Privacy' ||
            link.textContent.trim() === 'Terms' ||
            link.textContent.trim() === 'Contact'
        ) {
            var parent = link.parentElement;

            if (parent && parent.children.length <= 3) {
                parent.remove();
            } else {
                link.remove();
            }
        }
    });

    var copyright = container.querySelector('.small');

    if (copyright) {
        copyright.className = 'small text-center text-white-50 og-footer-copy';
        copyright.textContent = 'Copyright © Ogen Yapı Teknik';
    } else {
        copyright = document.createElement('div');
        copyright.className = 'small text-center text-white-50 og-footer-copy';
        copyright.textContent = 'Copyright © Ogen Yapı Teknik';
        container.appendChild(copyright);
    }

    var footerStyle = document.createElement('style');
    footerStyle.textContent = `
        footer .og-footer-copy {
            display: block !important;
            width: 100% !important;
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
        }

        footer .container > .row {
            justify-content: center !important;
            text-align: center !important;
        }

        footer .container > .row > .col-auto {
            width: 100% !important;
            text-align: center !important;
        }
    `;
    document.head.appendChild(footerStyle);
})();


/* WHATSAPP BUTONU */
(function () {
    var WA_NUMBER = '905438604944';
    var WA_MESSAGE = 'Merhaba, web sitenizden ulaşıyorum.';

    var css =
        '.og-wa{position:fixed;right:20px;bottom:calc(20px + env(safe-area-inset-bottom, 0px));width:60px;height:60px;border-radius:50%;' +
        'background:#25D366;color:#fff;display:flex;align-items:center;justify-content:center;z-index:1030;' +
        'box-shadow:0 6px 18px rgba(0,0,0,.35);transition:transform .25s ease,box-shadow .25s ease;text-decoration:none;}' +
        '.og-wa:hover{color:#fff;transform:scale(1.08);box-shadow:0 8px 22px rgba(0,0,0,.45);}' +
        '.og-wa svg{width:32px;height:32px;fill:currentColor;display:block;}' +
        '@media (max-width:575.98px){.og-wa{right:14px;bottom:calc(14px + env(safe-area-inset-bottom, 0px));width:54px;height:54px;}.og-wa svg{width:28px;height:28px;}}';

    var style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    var url = 'https://wa.me/' + WA_NUMBER +
        (WA_MESSAGE ? '?text=' + encodeURIComponent(WA_MESSAGE) : '');

    var a = document.createElement('a');
    a.className = 'og-wa';
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', 'WhatsApp ile bize yazın');
    a.title = 'WhatsApp ile bize yazın';

    a.innerHTML =
        '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.560 6.560 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>';

    document.body.appendChild(a);
})();


/* FRANK RUHL LIBRE - TÜM SİTE */
(function () {
    var fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;500;600;700;800;900&display=swap';
    document.head.appendChild(fontLink);

    var fontStyle = document.createElement('style');
    fontStyle.textContent = `
        body,
        body *:not(i):not([class*="bi-"]):not([class*="fa-"]) {
            font-family: 'Frank Ruhl Libre', serif !important;
        }
    `;
    document.head.appendChild(fontStyle);
})();
