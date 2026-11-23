
/* =========================================================
   OGEN YAPI TEKNİK - ORTAK SİTE AYARLARI
   ========================================================= */

/* ÜST MENÜ - TÜM SAYFALARDA AYNI MARKA ALANI */
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
    nav.classList.add('og-nav');

    var page = window.location.pathname.split('/').pop() || 'index.html';

    /* Bütün sayfalarda aynı marka alanını oluştur. */
    var brand = document.createElement('a');
    brand.className = 'navbar-brand og-brand';
    brand.href = 'index.html';
    brand.setAttribute('aria-label', 'OGEN Yapı Teknik - Anasayfa');

    var logo = document.createElement('img');
    logo.className = 'og-logo';
    logo.src = 'logo.png';
    logo.alt = 'OGEN Yapı Teknik';
    logo.decoding = 'async';
    brand.appendChild(logo);

    var brandText = document.createElement('span');
    brandText.className = 'og-brand-text';
    brandText.textContent = 'OGEN Yapı Teknik';
    brand.appendChild(brandText);

    var items = MENU.map(function (item) {
        var active = item.match.indexOf(page) !== -1;

        return '<li class="nav-item"><a class="nav-link' +
            (active ? ' active' : '') + '"' +
            (active ? ' aria-current="page"' : '') +
            ' href="' + item.href + '">' + item.label + '</a></li>';
    }).join('');

    nav.innerHTML = '';

    var container = document.createElement('div');
    container.className = 'container px-4 px-lg-5';
    container.appendChild(brand);

    var toggler = document.createElement('button');
    toggler.className = 'navbar-toggler';
    toggler.type = 'button';
    toggler.setAttribute('data-bs-toggle', 'collapse');
    toggler.setAttribute('data-bs-target', '#navbarSupportedContent');
    toggler.setAttribute('aria-controls', 'navbarSupportedContent');
    toggler.setAttribute('aria-expanded', 'false');
    toggler.setAttribute('aria-label', 'Menüyü aç/kapat');
    toggler.innerHTML = '<span class="navbar-toggler-icon"></span>';
    container.appendChild(toggler);

    var collapse = document.createElement('div');
    collapse.className = 'collapse navbar-collapse';
    collapse.id = 'navbarSupportedContent';

    var list = document.createElement('ul');
    list.className = 'navbar-nav ms-auto mb-2 mb-lg-0';
    list.innerHTML = items;

    collapse.appendChild(list);
    container.appendChild(collapse);
    nav.appendChild(container);

    /* Logo ve yazı ölçüleri tüm sayfalarda aynı. */
    var brandStyle = document.getElementById('og-global-brand-style');

    if (!brandStyle) {
        brandStyle = document.createElement('style');
        brandStyle.id = 'og-global-brand-style';
        brandStyle.textContent = `
            nav.og-nav {
                padding-top: 16px !important;
                padding-bottom: 16px !important;
                overflow: visible !important;
            }

            nav.og-nav,
            nav.og-nav > .container,
            nav.og-nav .og-brand {
                overflow: visible !important;
            }

            nav.og-nav > .container {
                display: flex !important;
                align-items: center !important;
            }

            nav.og-nav .og-brand {
                display: flex !important;
                align-items: center !important;
                flex-wrap: nowrap !important;
                gap: 16px !important;
                min-height: 0 !important;
                padding: 0 !important;
                margin: 0 !important;
                text-decoration: none !important;
                flex: 0 0 auto !important;
            }

            nav.og-nav .og-brand .og-logo {
                display: block !important;
                width: auto !important;
                height: 114px !important;
                max-width: 190px !important;
                max-height: 114px !important;
                object-fit: contain !important;
                flex: 0 0 auto !important;
                position: relative !important;
                z-index: 20 !important;
                margin: -14px 0 -43px !important;
            }

            nav.og-nav .og-brand .og-brand-text {
                display: inline-block !important;
                visibility: visible !important;
                opacity: 1 !important;
                color: #d6121c !important;
                font-size: 1.6rem !important;
                font-weight: 800 !important;
                line-height: 1.1 !important;
                letter-spacing: .01em !important;
                white-space: nowrap !important;
                position: relative !important;
                z-index: 20 !important;
                margin: 0 !important;
                transform: translateY(14px);
            }

            @media (max-width: 991.98px) {
                nav.og-nav .og-brand {
                    gap: 10px !important;
                }

                nav.og-nav .og-brand .og-logo {
                    height: 88px !important;
                    max-height: 88px !important;
                    max-width: 145px !important;
                    margin: -8px 0 -23px !important;
                }

                nav.og-nav .og-brand .og-brand-text {
                    font-size: 1.1rem !important;
                    transform: translateY(7px);
                }
            }

            @media (max-width: 575.98px) {
                nav.og-nav {
                    padding-top: 12px !important;
                    padding-bottom: 12px !important;
                }

                nav.og-nav .og-brand {
                    gap: 8px !important;
                }

                nav.og-nav .og-brand .og-logo {
                    height: 72px !important;
                    max-height: 72px !important;
                    max-width: 118px !important;
                    margin: -5px 0 -17px !important;
                }

                nav.og-nav .og-brand .og-brand-text {
                    font-size: .95rem !important;
                    transform: translateY(5px);
                }
            }
        `;
        document.head.appendChild(brandStyle);
    }
})();


/* ALT MENÜ VE TELİF YAZISI */
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
