# Évolution des liens sentimentaux entre les personnages principaux de Grey's Anatomy lors de la première saison

## Description

Ce projet a pour objectif de représenter l'évolution des relations entre les personnages principaux de la série américaine télévisée Grey's Anatomy. Diffusée pour la première fois en mars 2005 sur la chaîne américaine ABC, cette série connaît un énorme succès avec plus 20 millions de téléspectateurs aux Etats-Unis dès la seconde saison en 2006. Avec plus 18 saisons diffusées actuellement, elle continue d'élargir son public en se plaçant en tête des classements des séries de type drame, pour une tranche d'âge située entre de 18 à 49 ans (source : Aurthur 2020). Dans ce projet, je vais tenter d'exposer sous forme de réseaux, les types de relations entre les différents personnages principaux de cette série durant la première saison. Je souhaite avant tout vous prévenir que ce travail n'est pas encore achevé et qui me reste encore améliorations à faire.

Voici le synopsis de la série tiré du site internet Allo-ciné :

« *Meredith Grey, fille d'un chirurgien très réputé, commence son internat de première année en médecine chirurgicale dans un hôpital de Seattle. La jeune femme s'efforce de maintenir de bonnes relations avec ses camarades internes, mais dans ce métier difficile la compétition fait rage...* » (source : Allo-ciné, s.d).

Dans la première saison, on nous introduit les personnages principaux dans un environnement médical. Ils sont distingués selon leurs professions chirurgicales de manière hiérarchique ; 
- les internes : présentés comme des adultes ou jeunes adultes, fraîchement diplômés de l'école de médecine et qui découvrent pour la première fois l'univers hospitalier en tant que docteur. Mais leur objectif principal est de devenir chirurgiens certifiés. 
- les résidents : ils encadrent les internes dans leur transition entre le domaine universitaire et l'hôpital et se trouvent, à mi-chemin de devenir chirurgiens titulaires. 
- les chirurgiens titulaires : ces postes symbolisent le saint Graal autant pour les internes que les résidents. Et le chef de la chirurgie qui coordonne l'unité chirurgicale de l'hôpital.

## Les données

Avant de constituer moi-même ces données, j'ai effectué des recherches sur les types de relations entre les protagonistes sur chaque épisode de cette saison. Vu qu'elles n'existaient pas, j'ai dû me résoudre à la création de celle-ci, en regardant l'intégralité de la saison 1 (ce qui correspond à 9 épisodes de 45 minutes environ). Et, en fonction des scènes, intrigues et dialogues entre les acteurs, j'ai pu classifier ces relations en 6 catégories ;

1.  Amoureuses

2.  Amitiées

3.  Colères

4.  Jalousies

5.  Peur

6.  Dégoûts.

![Figure 1: Capture d'écran d'un fichier excel représentant les données récoltées](https://github.com/Aaeilo/Visulation-des-relations-travers-un-r-seau-le-cas-avec-Grey-s-Anatomy/blob/main/figure_readme/Figure%201.png)
*Figure 1: Capture d'écran d'un fichier excel représentant les données récoltées*

Cette méthode représente un point faible sur l'authenticité des données puisque la typologie des relations a été réalisée selon ma perception et non de manière objective. Après la récolte des données, je les ai transformé en JSON, en créant un « *tableau* » pour chaque épisode contenant :

-   Des nœuds notés « `nodes` » avec comme variables; les « `id` » des personnages (prénoms des personnages) et leur « `groupe` » qui correspond à leur profession dans l'hôpital (internes, résidents, chirurgiens titulaires et le chef de la chirurgie).

-   Et des liens notés « `edges` » avec « `sources` » qui correspond, un a sentiment éprouvé par un personne "*A*", « `target` » qui représente le personnage "*B*" auquel le personnage  "*A*" a ressenti des sentiments et/ou des émotions. Ensuite, nous avons la variable  « `value` » qui correspond au type de sentiments éprouvés par la personnage "*A*".

Au total, nous avons 8 personnages (huit nœuds), et sur l'ensemble des épisodes, environ une centaine de liens.

## Procédure d'installation

J'ai usé de la librairie de D3 pour la conception de ce projet.

## Interface graphique

Il existe deux interfaces qui correspondent à deux versions de mon travail. Le premier dispose de neuf boutons associés à chaque épisode de la saison une. Dans cette version, l'utilisateur peut cliquer sur l'un des boutons (le troisième par exemple) et un graphique de réseaux apparaît. Il représente les types de liaisons qui ont eu lieu dans cet épisode. Nous pouvons observer que l'ensemble des liens disposent d'une flèche indiquant la cible des sentiments éprouvés. Pour le choix des couleurs, j'ai sélectionné celles qui étaient évocatrices pour nous occidentaux telle que ; le rouge avec la colère, le jaune qui est synonyme de bonheur donc amitié ou encore le vert pour le dégoût. Les nœuds sont également colorés en fonction des postes occupés par les personnages principaux (un gradient de bleu qui correspond aux blouses de médecines utilisées dans la série).
Même si les liens sont affichés et que l'utilisateur puisse faire bouger les noeuds avec la souris, le graphique ne représente pas les liens dans son intégralité, ils sont superposés. (Plus d'informations sur les limites du projet sur l'onglet « Issues »).

Pour régler ce problème, j'ai créé une seconde version, similaire à la première au niveau de la visualisation, mais avec des liens courbés ce qui donne une meilleure lecture des typologies des relations (comme le montre la figure 3). Le souci est que ces liens ne s'affichent pas et que seuls les noeuds sont visibles. De plus, les interactions semblent fonctionner normalement (changement des graphes en fonction des épisodes et déplacement d'un neoud par la souris). 

![Figure 2: Capture d'écran de l'interface de la première version](https://github.com/Aaeilo/Visulation-des-relations-travers-un-r-seau-le-cas-avec-Grey-s-Anatomy/blob/main/figure_readme/Figure%202.png)
*Figure 2: Capture d'écran de l'interface de la première version*


![Figure 3: Capture d'écran de la seconde version](https://github.com/Aaeilo/Visulation-des-relations-travers-un-r-seau-le-cas-avec-Grey-s-Anatomy/blob/main/figure_readme/Figure%203.png)
*Figure 3: Capture d'écran de la seconde version*


## Procédure d'installation

Pour l'utilisation, il suffit de télécharger de les fichiers et de les regrouper selon leur version dans un même dossier et ouvrir le fichier HTML avec un navigateur d'Internet. Pour ce qui est de l'utilisation avec un terminal, je ne maîtrise pas encore cette fonctionnalité.

## Contexte

Ce projet a été réalisé par Jabiro Ntamushobora dans le cadre d'une évaluation dans le cours de « Visualisation des données » enseigné par le professeur Isaac Pante à l'Université de Lausanne pour l'automne 2022.

## Remerciements

Je souhaite remercier les communautés de D3, JavaScript, HTML et CSS pour leur partage de connaissance et leur aides. Je souhaite également remercier le professeur M. Pante et les assistants au cours pour leurs aides.

## Bibliographie:

-   AlloCine. s. d. « AlloCiné : Cinéma, Séries TV, BO de films et séries, Vidéos, DVD et VOD ». *AlloCiné*. Consulté 20 janvier 2023 (<https://www.allocine.fr/>).

-   Aurthur, Kate. 2020. « How 'Grey's Anatomy' Revolutionized Pop Culture --- and Why It's Not Done Yet ». *Variety*. Consulté 20 janvier 2023 (<https://variety.com/2020/tv/news/greys-anatomy-ellen-pompeo-debbie-allen-krista-vernoff-chandra-wilson-1234816801/>).

-   Rhimes, S (Réalisatrice). (2005) L'intégrale de la saison 1 [Saison 1, Épisodes 1-9] [Épisode de série TV]. Dans Rhimes, S (Réalisatrice), *Grey's Anatomy*, ABC-Walt Disney ©


