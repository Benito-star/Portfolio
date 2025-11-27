// router/index.js - Le Cerveau de la Navigation
import { createRouter, createWebHistory } from 'vue-router'
// createRouter() - La Factory => Crée une instance du router. C'est là que tu définis TOUTES tes routes.
// history: createWebHistory() => Détermine le mode d'historique du navigateur.
// Deux modes principaux :
// 1. createWebHistory() : URLs normales genre /about (ce qu'on veut)
// 2. createWebHashHistory() : URLs avec # genre /#/about (mode old-school, évite ça)

// Importation des pages principales
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    // La Liste de Tes Routes
    // Un tableau d'objets. Chaque objet = une route.
    {
      path: '/', // L'URL (ce que tu tapes dans la barre d'adresse)
      name: 'home', // Un nom unique pour la route (optionnel, pratique pour la navigation programmatique)
      component: HomeView, // Le composant à afficher quand on visite cette route
    },

    {
      path: '/about',
      name: 'about',
      // Lazy loading : charge le composant SEULEMENT quand on visite la route /about
      component: AboutView,
    },

    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },

    // Ordre important :
    // ✅ BON
    // { path: '/project', ... },      // Liste
    // { path: '/project/:id', ... },  // Détail

    {
      path: '/project/:id', // le :id qui capture n'importe quoi après /project/
      name: 'project',
      component: ProjectDetailView,
      props: true, // facultatif mais utile si tu veux passer params en props
    },

    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
})

export default router // On exporte l'instance du router pour l'utiliser dans main.js

// <RouterLink to="/"> - Le Lien Intelligent => Remplace <a href="/"> partout.
// Bonus : RouterLink ajoute automatiquement la classe CSS router-link-active sur le lien actif.
// Tu peux le styliser différemment pour montrer "où on est" dans la nav. Pratique AF. 🎯

// <RouterView /> - Le Slot Dynamique => C'est là que tes Views s'affichent.
// Pense à ça comme un slot dynamique :
// User va sur / → RouterView affiche <HomeView />
// User va sur /about → RouterView affiche <AboutView />

// Routes Dynamiques avec :id => Utile pour les pages de détails (Blog, Projet, Produit, etc.)
// Exemple : /project/42
// Dans la route, on utilise /project/:id
// Le :id est un paramètre dynamique.
// Dans le composant ProjectDetailView, tu peux accéder à cet id via this.$route.params.id ou en utilisant les props si tu as mis props: true dans la config de la route.

// Au lieu de définir une route fixe, tu mets un paramètre variable précédé de : (deux-points).
// Exemple concret
// Dans router/index.js
// {
//  path: '/articles/:id',    // :id est un paramètre dynamique
//  component: ArticleDetail
// }
