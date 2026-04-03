# Projet de reproduction — Cours de Design Web
Site de référence : https://atelierdegeraldine.fr/

Ma version : https://reproduction.eline-schmitz.com/

---

## 1. Structure générale du site
La page d’accueil est organisée de façon verticale et 
linéaire, avec des sections bien délimitées. 
L’ensemble repose sur une structure simple et efficace :

### Header
- Barre de promotion
- Logo placé à gauche
- Menu horizontal centré ou burger menu à droite selon la largeur de l’écran
- Navigation courte et efficace, limitant la charge cognitive  

### Bannière « héros »
- Carrousel plein écran, très visuel
- Grandes images
- Mise en avant de l’univers gourmand et artisanal
- Textes courts ludiques et engageants  

### Division
- Bandeau animé en continu
- Illustrations et qualités

### Section d’introduction
- Illustration douce et simple, accueillante
- Court texte présentant l’atelier
- CTA incitant à découvrir les produits

### Section « produits »
- 2 catégories de filtres
- Grille régulière de cartes : image + nom + catégorie + prix + CTA
- Mise en avant d’articles avec des badges « nouveau », « incontournable », etc.
- Présentation répétitive et cohérente

### Division
- Illustrations et noms d’ingrédients

### Section « à propos »
- 4 cartes : histoire, découvrir, en savoir plus, personnalisation
- Textes : ton narratif et chaleureux
- Images et illustrations

### Division
- Bandeau animé en continu
- Noms d’ingrédients, pastilles colorées  

### Footer
- Sections « newsletter » et « points de vente »
- Informations légales, contact, liens pratiques

---

## 2. Éléments clés du site
- **Visuels gourmands** essentiels à l’identité de la marque
- **Cartes produits** faciles à comprendre, cohérentes
- **Images** omniprésentes, fortes, attirent l’œil
- **Ambiance artisanale :** illustrations, tons doux
- **Storytelling :** textes chaleureux, proximité  

---

## 3. Palette de couleurs
L’univers graphique évoque la pâtisserie artisanale :
- **Fonds :** beiges, oranges, teintes chaleureuses
- **Textes :** noir
- **Ambiance générale :** douce, naturelle, gourmande
- **Intentions visuelles :** authenticité, fait-main, simplicité  

---

## 4. Typographie
Le site s’appuie sur une combinaison de trois polices cohérentes et complémentaires :
- **FK Screamer :** police très expressive qui donne une identité visuelle forte pour les titres
- **Bricolage Grotesque :** police moderne, chaleureuse et accessible pour les textes secondaires
- **Helvetica Neue LT STD :** police neutre et lisible pour les paragraphes

La hiérarchie typographique est bien marquée :
- **Titres très visibles** en gras et en capitales
- **Paragraphes simples**, interlignage assez généreux

---

## 5. Principes de mise en page
- **Sections espacées :** rythme visuel aéré, agréable
- **Usage massif d’images :** rythme visuel basé sur la gourmandise
- **Grilles régulières** pour les produits
- **Alignements cohérents** entre les textes ou avec les images
- **Design responsive :** burger menu, grilles transformées en scroll vertical

---

## 6. Analyse UX/UI

### A. Forces
1. **Clarté et structure lisible**
    - Les sections s’enchaînent logiquement (navigation, bannière hero, introduction, produits, à propos, footer), ce qui facilite la compréhension
2. **Hiérarchie visuelle efficace**
    - Le hero capte immédiatement l’attention
    - Les produits sont mis en valeur (répétition des cartes)
3. **Navigation simple et intuitive**
    - Peu de catégories, pas de surcharge cognitive
4. **Tonalité chaleureuse et cohérente**
    - L’univers est homogène et compréhensible très rapidement
5. **Lisibilité globale correcte**
    - Taille du texte confortable
    - Structure épurée

### B. Faiblesses
1. **Images lourdes**, risque de lenteur
2. **Contrastes insuffisants** à de nombreux endroits
3. **Accessibilité et référencement**
    - Pas d’attribut title sur les liens
    - Certains liens ne sont pas différenciés des autres textes (pas d’animation au hover, pas de couleur différente, …)
    - Attribut alt vide sur beaucoup d’images
    - Hiérarchie incohérente des titres : le h1 n’en est pas un, pas de h2, les h3 ressemblent aux autres textes
    - Pas de label sur le champ pour l’adresse email, mais seulement un placeholder
    - …
4. **Mauvais affichage** d’éléments dans certaines sections

---

## 7. Adaptations

### A. Mon objet fétiche

En comparant le site de l’Atelier de Géraldine et ma trompette, j’ai réussi à dégager quelques points communs :
- La passion  
- Une ambiance chaleureuse  
- Le partage

Ce sont des éléments que j’avais envie de garder dans ma version du site, en employant :
- Le même **ton narratif** dans les textes
- Les **icônes et illustrations** très graphiques
- Le même style de **couleurs chaudes et accueillantes**, même si j’ai dû en modifier quelques-unes pour respecter les critères de contraste des WCAG

### B. Images et éléments graphiques

Le site est rempli d’images, d’illustrations, d’icônes et d’éléments de décoration.  

Certains éléments ont été **retravaillés** pour correspondre à l’univers de la **musique** :
- Logos  
- Personnage qui me représente  
- Les miettes de biscuits sont transformées en ondes sonores  
- La séparation en forme de bord de biscuit est transformé en onde sinusoïdale
- Le biscuit est transformé en vinyle
- Illustrations diverses et variées, notamment la trompette et toutes les petites icônes décoratives dans les bandeaux animés

D’autres ont été **repris** :
- Le motif de damier que l’on voit à plusieurs reprises
- Les formes servant de masques à plusieurs images
- Les formes qui servent de lien dans les cartes de la section « à propos »  

Pour les images, j’ai choisi de séparer les **vectorielles** des **matricielles**. Sur le site, il y a des images très lourdes qui combinent des fonds graphiques, qui pourraient être exportés en SVG, des images matricielles avec une transparence en PNG et des masques en SVG. J’ai donc créé des éléments SVG pour tout ce que j’ai pu, et exporter tout le reste en WebP, en 3 formats pour les différentes tailles d’écran. Cela permet d’avoir des images beaucoup plus légères, de séparer ce qui est extensible de ce qui ne l’est pas, et donc d’adhérer au mieux au principe d’un site responsive.

### C. Newsletter

Il y a une section du footer où l’on peut normalement entrer notre adresse email pour s’inscrire à la newsletter. J'ai retiré le champ et écrit mon adresse email en dur à la place.

### D. Contrastes

En inspectant le site, Wave a indiqué **39 erreurs de contraste**. C’est toujours avec le même orange `#FE5400`, associé à une des autres couleurs principales du site, un beige `#FEF6E6`, ou avec la couleur de fond du héros, un rose pâle `#FFD5C2`.

Pour les textes du héros, j’ai utilisé le rouge `#DA3E25` de la section « notre histoire », que j’ai légèrement foncé pour pouvoir mettre un fond clair derrière, tout en veillant bien à ce qu’il y ait toujours assez de contraste entre ce rouge modifié et le texte noir utilisé plus bas. J’ai donc obtenu `#D63C24`.

Pour le fond du héros, j’ai alors repris cette même teinte de rouge en augmentant sa luminosité, ce qui donne `#FEFBFA`. J’aurais bien voulu garder des couleurs un peu plus chaleureuses que ce rouge pâle presque blanc, mais j’ai dû faire en sorte de respecter le niveau de contraste requis des WCAG, qui est de 4.5:1.

J’ai préféré changer les couleurs du héros, ce qui me permettait de garder le orange `#FE5400` dans d’autres parties du site, plutôt que de changer celui-ci, et donc aussi les couleurs du site entier.

### E. Menu de navigation (formats mobile et tablette)

Quand j’ai ouvert le burger menu, j’ai eu du mal à faire la différence entre les premiers items du menu et les autres sous-items car ils étaient affichés exactement de la même manière, en noir, même police, sans espace vertical supplémentaire.

J’ai donc décidé de modifier la couleur des sous-items en un mélange de la couleur de fond beige `#FEF6E6` et de noir, ce qui donne `#986706`.

J’ai ajouté une flèche de retour à l’accueil pour fermer le menu car il n’y en avait pas. Il n’y avait qu’un lien « accueil », mais lorsque je suis sur une autre page du site, je n’ai pas envie de retourner à l’accueil, mais juste en arrière.

J’ai également tourné les flèches vers le haut lorsque la liste était dépliée.

### F. Header

En regardant un peu les autres pages du site, j’ai remarqué que certaines avaient un header différent de celui de la page d’accueil. Il y avait un fond beige pour que les éléments, qui sont en noir, soient plus visibles. Je me suis donc inspirée de ce header là pour le mettre sur ma page.

Je n’ai pas fait de barre de recherche ni de lien menant à une page « profil » car dans mon cas, je n’en voyais pas l’utilité. Sur le site il y a des icônes de loupe pour la recherche, un émoji pour aller sur la page « profil », ainsi qu’un autre lien pour aller à la page « panier ». J’ai utilisé l’icône qui le représentait pour amener au site de référence.

---

## 8. Section intégrée

Pour cette section créative, j’ai choisi de réutiliser les mêmes éléments que l’on retrouve dans les cartes « découvrir » et « en savoir + » plus bas, avec :
- Des couleurs vives
- Des icônes très graphiques pour les liens avec du texte à l’endroit et à l’envers
- Du texte en noir toujours sur le même ton un peu humoristique avec de références musicales et où la trompette parle d’elle-même
- Des superpositions d’images vectorielles et matricielles  

J’ai créé 2 cartes :

### Consignes

- Un titre
- Un petit paragraphe pour présenter ce qui était demandé pour ce projet
- Une illustration à mon effigie — une héroïne qui tient une trompette — avec une photo de mon visage
- Un lien vers le site de référence

### Avant / après

Cette carte se présente en recto-verso. En fouillant un peu sur le site, je suis tombée sur la page des saveurs de biscuits (https://atelierdegeraldine.fr/saveurs/), où d’un côté de la carte il y a le nom et la photo avec des boutons pour ajouter au panier, et d’un autre la description. Au hover (ou au click sur mobile et tablette), la carte se retourne et laisse apparaître le verso.

Cet effet a été recréé, cette fois-ci au click sur un bouton « Voir le après » sur la face recto qui parle de l’univers artisanal de Géraldine, et « Voir le avant » au verso qui parle de notre (ma trompette et moi) univers musical.

Sur les 2 faces, il y a :
- Un titre
- Un petit paragraphe pour présenter chaque univers
- Le logo à l’image de Géraldine / à notre image
- Une séparation en forme de biscuit / onde
- Une image de biscuit / vinyle
- Le bouton qui permet de retourner la carte  

---

## 9. Conclusion

Ce projet m’a permis :
- D’analyser un site professionnel
- De comprendre ses forces et ses limites
- D’en proposer une version personnelle cohérente
- D’utiliser tout ce que j’ai appris et de découvrir de nouvelles choses afin d’améliorer l’accessibilité, la performance et la structure
