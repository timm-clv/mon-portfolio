/* =====================================================================
   skills.js  -  script de la page skills.html
   1. Onglets des certifications
   2. Bandeaux défilants (duplication + vitesse)
   3. Lien actif dans la barre de navigation
   ===================================================================== */

/* ---------- 1. ONGLETS ---------- */
(function () {
    const tabs = document.querySelectorAll('.fs-tab');
    if (!tabs.length) return;

    function select(tab) {
        tabs.forEach(t => {
            const active = t === tab;
            t.setAttribute('aria-selected', active ? 'true' : 'false');
            t.tabIndex = active ? 0 : -1;
            const panel = document.getElementById(t.getAttribute('aria-controls'));
            if (panel) panel.hidden = !active;
        });
    }

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => select(tab));
        tab.addEventListener('keydown', e => {
            let n = null;
            if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
            if (e.key === 'ArrowLeft')  n = tabs[(i - 1 + tabs.length) % tabs.length];
            if (n) { e.preventDefault(); n.focus(); select(n); }
        });
    });
})();

/* ---------- 2. BANDEAUX DÉFILANTS ---------- */
(function () {
    const marquees = document.querySelectorAll('.marquee');
    if (!marquees.length) return;
    
    function setup(m) {
        const track = m.querySelector('.mq-track');
        const first = track.querySelector('.mq-group');
        if (!track || !first) return;

        track.querySelectorAll('.mq-group[data-clone]').forEach(g => g.remove());
        m.classList.remove('is-ready');

        // Vertical si le marquee est dans la section TOOLS
        const isVertical = !!m.closest('#tools');

        const rect = first.getBoundingClientRect();
        const groupSize = isVertical ? rect.height : rect.width;
        if (groupSize < 10) return;

        const containerSize = isVertical ? m.clientHeight : m.clientWidth;
        const copies = Math.ceil(containerSize / groupSize) + 1;
        for (let i = 0; i < copies; i++) {
            const clone = first.cloneNode(true);
            clone.setAttribute('data-clone', '1');
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
        }

        const speed = parseFloat(m.dataset.speed) || 40;
        m.style.setProperty('--mq-shift', groupSize + 'px');
        m.style.setProperty('--mq-duration', (groupSize / speed) + 's');
        m.classList.add('is-ready');
    }

    function setupAll() { marquees.forEach(setup); }

    // attendre les images (logos) pour mesurer les bonnes largeurs
    window.addEventListener('load', setupAll);
    setupAll();

    let t;
    window.addEventListener('resize', () => {
        clearTimeout(t);
        t = setTimeout(setupAll, 200);
    });
})();

/* ---------- 3. SCROLL-SPY ---------- */
(function () {
    const links = document.querySelectorAll('#sk-nav ul li a');
    const sections = document.querySelectorAll('section[id]');
    if (!links.length || !sections.length) return;

    const spy = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
            links.forEach(a => a.classList.toggle('active-link', a.getAttribute('href') === '#' + id));
        });
    }, { rootMargin: '-35% 0px -45% 0px', threshold: 0 });

    sections.forEach(s => spy.observe(s));
})();