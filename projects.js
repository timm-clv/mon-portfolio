document.addEventListener('DOMContentLoaded', () => {
    
    const filterButtons = document.querySelectorAll('.btn-filter');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Gestion de la classe active sur les boutons
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Récupération du filtre
            const filterValue = btn.dataset.filter;

            // 3. Filtrage des cartes
            projectCards.forEach(card => {
                const category = card.dataset.category;

                if (filterValue === 'all' || category === filterValue) {
                    // Affiche la carte
                    card.style.display = 'flex';
                    // Petite animation de reset
                    card.style.animation = 'none';
                    card.offsetHeight; /* Trigger reflow */
                    card.style.animation = 'fadeIn 0.5s ease-out forwards';
                } else {
                    // Cache la carte
                    card.style.display = 'none';
                }
            });
        });
    });
});