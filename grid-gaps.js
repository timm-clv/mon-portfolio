/* =====================================================================
   grid-gaps.js
   Coupe les pointillés VERTICAUX (fixes) à hauteur de chaque cadre "+",
   pour qu'ils n'entrent pas dans la zone encadrée.
   Principe : un masque CSS dégradé est recalculé au scroll pour laisser
   un trou transparent autour de chaque croix visible.
   ===================================================================== */
(function () {
    'use strict';

    var GAP = 16;        // demi-hauteur de la coupure (px) ; cohérent avec --cross-gap
    var Y_OFFSET = 1;    // le cadre est ~1px plus bas que le centre de la croix
    var ticking = false;

    function build() {
        ticking = false;

        var lines = document.querySelectorAll('.grid-line-vertical');
        if (!lines.length) return;

        var h = window.innerHeight;
        var centers = [];

        document.querySelectorAll('.grid-divider .grid-cross.left').forEach(function (c) {
            var r = c.getBoundingClientRect();
            var y = r.top + r.height / 2 + Y_OFFSET;
            if (y > -GAP * 2 && y < h + GAP * 2) centers.push(y);
        });
        centers.sort(function (a, b) { return a - b; });

        var stops = ['#000 0'];
        centers.forEach(function (y) {
            stops.push(
                '#000 ' + (y - GAP) + 'px',
                'transparent ' + (y - GAP) + 'px',
                'transparent ' + (y + GAP) + 'px',
                '#000 ' + (y + GAP) + 'px'
            );
        });
        var mask = 'linear-gradient(to bottom, ' + stops.join(', ') + ')';

        lines.forEach(function (l) {
            l.style.webkitMaskImage = mask;
            l.style.maskImage = mask;
        });
    }

    function request() {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(build);
        }
    }

    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    window.addEventListener('load', request);
    document.addEventListener('DOMContentLoaded', request);
    request();
})();