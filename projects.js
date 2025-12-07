document.addEventListener('DOMContentLoaded', () => {
    
    const filterButtons = document.querySelectorAll('.btn-filter');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Gestion de la classe active sur les boutons
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Récupération du filtre cliqué (ex: "embedded")
            const filterValue = btn.dataset.filter;

            // 3. Filtrage des cartes
            projectCards.forEach(card => {
                // On récupère la chaîne complète (ex: "embedded robotics")
                const categoriesString = card.dataset.category || ""; 
                
                // On transforme la chaîne en tableau pour une vérification propre
                // .split(' ') coupe la chaîne à chaque espace
                const categoriesArray = categoriesString.split(' ');

                // LOGIQUE MODIFIÉE :
                // On affiche si le filtre est 'all' OU si le tableau des catégories contient la valeur du filtre
                if (filterValue === 'all' || categoriesArray.includes(filterValue)) {
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