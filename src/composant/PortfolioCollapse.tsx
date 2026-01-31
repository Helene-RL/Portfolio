import { useEffect } from "react";

export const PortfolioCollapses = () => {
    useEffect(() => {
        const collapseElements = document.querySelectorAll('.collapse');

        collapseElements.forEach((collapseElement) => {
            const card = collapseElement.closest('.card');

            if (!card) return;

            // Avant ouverture → on force la largeur
            const handleShow = () => {
                card.style.flex = '0 0 100%';
                card.style.maxWidth = '100%';
            };

            // Après fermeture → on remet la taille normale
            const handleHidden = () => {
                card.style.flex = '0 0 18rem';
                card.style.maxWidth = '18rem';
            };

            collapseElement.addEventListener('show.bs.collapse', handleShow);
            collapseElement.addEventListener('hidden.bs.collapse', handleHidden);

            // Cleanup à la désinstallation du composant
            return () => {
                collapseElement.removeEventListener('show.bs.collapse', handleShow);
                collapseElement.removeEventListener('hidden.bs.collapse', handleHidden);
            };
        });
    }, []);

    return null; // Pas de rendu, juste le comportement
};
