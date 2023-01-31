# Evolution des liens sentimentaux entre les personnages principaux de Grey's Anatomy lors de la première saison

## Description

Ce projet a pour objectif de représenter l'évolution des relations entre les personnages principaux de la série américaine télévisée Grey's Anatomy. Diffusée pour la première la fois en Mars 2005 sur la chaîne américaine ABC, cette série connaît un énorme succès avec plus 20 millions de téléspectateur aux Etats-Unis dès le seconde saison en 2006. Avec plus 18 saisons diffusées actuellement, elle continue d'élargir son public en se plaçant en tête des classements des séries de type drame, pour une tranche d'âge située entre de 18 à 49 ans (source : Aurthur 2020). Dans ce projet, je vais tenter d'exposer sous forme de réseaux, les types de relations entre les différents personnages principaux de cette série durant la première saison. Je souhaite avant tout vous prévenir que ce travail n'est pas encore achevé et qui me reste encore améliorations à faire.

Voici le synopsis de la série tiré du site internet Allo-ciné :

« *Meredith Grey, fille d'un chirurgien très réputé, commence son internat de première année en médecine chirurgicale dans un hôpital de Seattle. La jeune femme s'efforce de maintenir de bonnes relations avec ses camarades internes, mais dans ce métier difficile la compétition fait rage...* » (source : Allo-ciné, s.d).

Dans la première saison, on nous introduit les personnages principaux dans un environnement médical. Ils sont distingués selon leurs professions chirurgicales de manière hiérarchique ; - Les internes : ils sont présentés comme des adultes ou jeunes adultes, fraîchement diplômé de l'école de médecine et qui découvre pour la première fois l'univers hospitalier en tant que docteur. Mais leurs objectifs principaux est de devenir chirurgiens certifiés. - Les résidents : ils encadrent les internes dans leur transition entre le domaine universitaire et l'hôpital et se trouvent, à mi-chemin de devenir chirurgiens titulaires. - Les chirurgiens titulaires : ces postes symbolisent le saint Graal autant pour les internes que les résidents. Et le chef de la chirurgie qui coordonne l'unité chirurgicale de l'hôpital.

## Les données

Avant de constituer moi-même ces données, j'ai effectué des recherches les types de relations entre les protagonistes sur chaque épisode de cette saison. Vu qu'elles n'existaient pas, j'ai dû me résoudre à la création de celle-ci, en regardant l'intégralité de la saison 1 (ce qui correspond à 9 épisodes de 45 minutes environ). Et, en fonction des scènes, intrigues et dialogues entre les acteurs, j'ai pu classifier ces relations en 6 catégories ;

1.  Amoureuse

2.  Amitié

3.  Colère

4.  Jalousie

5.  Peur

6.  Dégoût.

![Figure 1: Capture d'écran d'un fichier excel représentant les données récoltées](http///url/to/Figure.png)

Cette méthode représente un point faible sur l'authenticité des données puisque la typologie des relations a été réalisée selon ma perception et non de manière objective. Après la récolte des données, je les ai transformé en JSON, en créant un « *tableau* » pour chaque épisodes contenant :

-   Des nœuds notés « `nodes` » avec comme variables; les « `id` » des personnages (prénoms des personnages) et leur « `groupe` » qui correspond à leur profession dans l'hôpital (internes, résidents, chirurgiens titulaires et le chef de la chirurgie).

-   Et des liens notés « `edges` » avec les « `sources` » qui correspondent, un a sentiment éprouvé par un personne "*A",* « `target` » qui représente le personnage"*B*" auquel le personnage  "*A"* a ressenti des sentiments et/ou des émotions. Ensuite, nous avons la variable  « `value` » qui correspond au type de sentiment sentiments éprouvés par la personnage"*A"*.

Au total, nous 8 personnages (huit nœuds), et sur l'ensemble des épisodes, environ une centaine de liens.

## Procédure d'installation

J'ai usé de la librairie de D3 pour la conception de ce projet pour présenter qu'un seul type de graphique visuel, les réseaux.

## Interface graphique

Il existe deux interfaces qui correspondent à deux versions de mon travail. Le premier dispose de neuf boutons associés à chaque épisode de la saison de la 1. Dans cette version, l'utilisateur devrait normalement cliquer sur un épisode (le troisième par exemple) et un graphique de réseaux apparaîtrait et représenterait les types de liaisons qui auraient pu avoir dans cet épisode. Malheureusement, cette version n'est pas fonctionnelle (plus d'informations sur les limites du projet sur l'onglet « Issues ».

![Figure 2: Capture d'écran de l'interface de la première version](http://url/to/Figure 2.png)

La seconde version est un exemple d'un réseau pour le premier épisode. Nous pouvons observer que l'ensemble les liens sont courbées et dispose d'une flèche indiquant la cible des sentiments. Pour les choix des couleurs, j'ai sélectionné celles qui étaient évocatrices pour nous, occidentaux telle que ; le rouge avec la colère, le jaune qui est synonyme de bonheur donc amitié ou encore le vert pour le dégoût. Les nœuds sont également colorées en fonction des postes occupé par les personnages principaux (un gradient de bleu qui correspond aux blouses de médecins utilisées dans la série).

![Figure 3: Capture d'écran de la seconde version](http://url/to/Fugure 3.png)

Dans les deux versions, aucune interactivité n'est possible pour le moment.

## Procédure d'installation

Pour l'utilisation, il suffit de télécharger de les fichiers et de les regrouper selon leur version dans un même dossier et ouvrir le fichier HTML. Pour ce qui est de l'utilisation avec un terminal, je ne maîtrise pas encore la fonctionnalité.

## Contexte

Ce projet a été réalisé par Jabiro Ntamushobora dans le cadre d'une évaluation dans le cours de « Visualisation des données » enseigné par le professeur Issac Pante à l'Université de Lausanne pour l'automne 2022.

## Remerciements

Je souhaite remercier les communautés de D3, JavaScript, HTML et CSS pour leur partage et de connaissance et leur aides. Je souhaite également remercier le professeur M. Pante et les assistant au cours pour leur aides.

## Bibliographie:

-   AlloCine. s. d. « AlloCiné : Cinéma, Séries TV, BO de films et séries, Vidéos, DVD et VOD ». *AlloCiné*. Consulté 20 janvier 2023 (<https://www.allocine.fr/>).

-   Aurthur, Kate. 2020. « How 'Grey's Anatomy' Revolutionized Pop Culture --- and Why It's Not Done Yet ». *Variety*. Consulté 20 janvier 2023 (<https://variety.com/2020/tv/news/greys-anatomy-ellen-pompeo-debbie-allen-krista-vernoff-chandra-wilson-1234816801/>).

-   Rhimes, S (Réalisatrice). (2005) L'intégrale de la saison 1 [Saison 1, Épisodes 1-9] [Épisode de série TV]. Dans Rhimes, S (Réalisatrice), *Grey's Anatomy*, ABC-Walt Disney ©


