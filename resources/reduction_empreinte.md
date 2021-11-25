# Réduire l’empreinte écologique d’un service numérique

L’essentiel de l’empreinte écologique d’un service numérique se décide lors de la conception. Néanmoins, une fois le service mis en production, il est encore possible de *réduire* son impact environnemental. Quelle démarche adopter pour cela ? 

Les bonnes pratiques listées dans cet ouvrage sont issues d’un travail collaboratif entre des experts de ce domaine. Vont-elles réduire significativement les émissions de votre propre site ? Cela dépend de nombreux facteurs, et il n’y a pas de réponse simple.

C’est pourquoi la démarche à suivre pour réduire son impact n’est pas d’appliquer les bonnes pratiques une à une, mais d’abord de *faire un premier bilan* sur cet impact, de *prioriser les bonnes pratiques*, de *mesurer leur efficacité*, et d’*itérer*. C’est une démarche classique d’amélioration continue.

## Faire un premier bilan  

Il faut commencer par mesurer l’impact de votre site. Et malheureusement, c’est plus facile à dire qu’à faire. Il existe des méthodes et des outils pour mesurer une partie de cet impact, mais aucune ne permet de le quantifier totalement en continu. Car l’impact, rappelons-le, est multiple :
-	Impact lié à la construction des terminaux et à leur acheminement
-	Impact lié à la consommation d’énergie côté client, réseau et serveur
-	Impact lié à la fin de vie 

L’approche la plus globale consiste à effectuer une Analyse du Cycle de Vie (ACV), audit normalisé de l’impact environnemental d’un produit (ISO 14 044). Ce genre d’audit, effectué habituellement par un cabinet spécialisé, prend plusieurs semaines et coûte cher – d’autant plus cher que votre site a de nombreuses ramifications et une architecture complexe. Il est néanmoins le seul apte à permettre un affichage environnemental reconnu, que l’on peut inclure par exemple dans un rapport RSE. Mais son caractère ponctuel rend un tel audit peu pratique dans une démarche de réduction de son impact. En effet, comment valider ou invalider une bonne pratique si l’impact n’est mesuré qu’une fois par an ? 

Voici une liste d’outils qui permettent de mesurer plus rapidement une partie de l’impact environnemental, et qui peuvent êtres utiles dans une démarche d’amélioration continue. 
 
-	*GreenIT Analysis* est un plugin pour navigateur qui estime la consommation d’énergie et les émissions de CO2 du client et du réseau. Il se base sur le trafic réseau, la complexité de la page, et le nombre de requêtes HTTP. C’est un outil gratuit et open-source édité par des volontaires du Collectif GreenIT, qui est aussi l’auteur de ce livre. (https://chrome.google.com/webstore/detail/greenit-analysis/mofbfhffeklkbebfclfaiifefjflcpad)
-	*GreenFrame* est un service en SaaS qui estime la consommation électrique et les émissions de gaz à effet de serre du client, du réseau et du serveur sur la base d’une simulation d’un scénario utilisateur dans un infrastructure conteneurisée. Il est conçu pour être appelé dans une Intégration Continue, via une API, et s’interface facilement avec les outils des développeurs. C’est un outil payant, sur abonnement, qui dispose d’un démonstrateur gratuit pour des analyses ponctuelles. (https://greenframe.io/)
-	*Scaphandre* est un agent qui mesure la consommation électrique d’un serveur en temps réel et en production. Il se base sur les métriques système et s’intègre dans les infrastructures physiques et virtualisées. Il dispose d’une intégration à des outils de remontée d’alerte et de représentation graphique. C’est un outil gratuit et open-source. (https://github.com/hubblo-org/scaphandre)
-	*Power API* est également un agent qui mesure la consommation électrique d’un serveur en temps réel et en production. Il se base sur les métriques système, et a été développé par l’université de Lille. C’est un outil gratuit et open-source (http://powerapi.org/).
-	*GreenSpector* est un service en SaaS qui estime la consommation d’énergie et les émissions de CO2 des terminaux mobiles (smartphones et tablettes). Il utilise un banc de test avec des terminaux réels exécutant un scénario utilisateur. Il dispose d’une API pour s’interfacer avec une Intégration Continue. C’est un outil payant. (https://greenspector.com/en/home/)
-	*Microsoft Sustainability Calculator* estime la consommation d’énergie et les émissions de CO2 à l’utilisation d’une infrastructure hébergée sur Azure. C’est un service payant basé sur PowerBI, réservé aux clients Azure. (https://appsource.microsoft.com/en-us/product/power-bi/coi-sustainability.emissions_impact_dashboard)
-	*Google Cloud carbon footprint Calculator* estime la consommation d’énergie et les émissions de CO2 à l’utilisation d’une infrastructure hébergée sur Google Cloud. C’est un service payant gratuit, réservé aux clients Google Cloud. (https://cloud.google.com/carbon-footprint). 

Deux services supplémentaires proposent des services similaires mais sont déconseillés, leur méthodologie ou leur modèle étant très sujets à caution :
-	*Website Carbon* estime les émissions de CO2 du client sur la base du trafic réseau uniquement, et utilise un modèle daté qui surestime ces émissions. C’est un service en ligne gratuit dont le code est open-source. (https://www.websitecarbon.com/).
-	*Ecograder* estime un score sur 100 notant la « vertitude » d’un site. Il se base sur des scores composites (nombre de requêtes réseau, accessibilité, qualité du référencement naturel, etc), dont la corrélation à l’impact environnemental n’est pas prouvée. C’est un service en ligne gratuit. (https://ecograder.com/) 

D’autres services ne mesurent pas directement l’empreinte environnementale, mais la performance perçue par le client. Cet indicateur reflète indirectement l’influence d’un service sur le renouvellement des terminaux, puisqu’un utilisateur aura d’autant plus envie de changer de terminal que le service qu’il utilise est peu performant. Ces outils sont légion, et ce guide ne peut en citer qu’une poignée :
-	*Google LightHouse* est un outil d’audit de performance des pages web, mais aussi de l’accessibilité et du référencement naturel. Il est gratuit et open-source. Il est intégré par défaut dans  les developer tools du navigateur Chrome. (https://developers.google.com/web/tools/lighthouse/) 
-	*PageSpeed Insight* est un service d’audit de performance des pages web en ligne. Il permet de mesurer des métriques clés de la web performance (« First Contentful Paint », « First Input Delay », etc) et liste des suggestions d’améliorations. (https://pagespeed.web.dev/). C’est un service gratuit qui dispose d’une API.

Tous ces outils ne mesurent que l’impact de l’*utilisation* des services, et pas de leur *fabrication* ni l’impact de la *fabrication* des terminaux qui sont nécessaires pour les utiliser. Or une part prépondérante de l’impact environnemental d’un service est lié à la fabrication des équipements nécessaires à leur utilisation.

Pour estimer cet impact, testez la compatibilité de votre service avec des appareils et des systèmes anciens. Le score de votre service peut alors s’exprimer en années de rétro-compatibilité, par exemple : « mon service tourne sur 90% des appareils de plus de 7 ans ».

Il existe peu d’outils permettant d’automatiser ce genre de test.
-	*BrowserStack* permet de tester un service numérique sur un panel d’appareils, d’OS et de navigateurs. Il dispose d’une API permettant d’automatiser des tests end-to-end multiplateformes. C’est un service payant, sur abonnement. 

Au moment de la lecture de ces lignes, il existera sans doute d’autres services venant compléter la liste ci-dessus. N’hésitez pas à les tester, en vérifiant systématiquement les bases scientifiques de leur modèle.

## Prioriser les bonnes pratiques

En général, l’impact environnemental est décroissant dans l’ordre suivant :
1.	Construction des terminaux (smartphones, ordinateurs)
2.	Utilisation des terminaux
3.	Construction des équipements réseau
4.	Utilisation du réseau
5.	Construction des datacenters 
6.	Utilisation des serveurs
7.	Développement du site web et outilllage associé

L’ordre de cette liste varie selon chaque site, son profil d’utilisation (B2B/B2C, pour mobile / pour desktop, trafic important / trafic épisodique), et son niveau de maturité. 

Un premier bilan permet de détecter quelles composantes de votre site contribuent le plus à l’impact carbone. 

Selon l’ordre que vous aurez déterminé pour votre site, vous pourrez prioriser les bonnes pratiques à mettre en œuvre.

Ainsi, si l’on prend en compte l’ordre de base listé ci-dessus, les bonnes pratiques visant à réduire le temps d’utilisation des terminaux (comme les pratiques d’optimisation des JavaScript) sont à mettre en œuvre avant celles d’optimisation des traitements serveur. 

Il résultera de cette phase une liste ordonnée *pour votre contexte* de bonnes pratiques à tester.

## Mesurer l’efficacité

La méthode scientifique permet d’apporter une réponse claire à la question « Est-ce que telle ou telle bonne pratique fonctionne pour moi ? ». La démarche est la suivante :
1.	Formuler une hypothèse. Dans notre cas, l’hypothèse est du genre « l’application de la BP XXX réduira l’empreinte de mon service numérique de YY% ».
2.	Imaginer une expérimentation pour valider ou invalider cette hypothèse. Pour l’empreinte d’un site, cela revient à a) sélectionner un scénario utilisateur, b) effectuer une mesure de l’empreinte de ce scénario, c) faire une modification dans le code ou l’infrastructure du service d) faire une seconde mesure du scénario et comparer. 
3.	Si l’expérimentation valide la bonne pratique, la généraliser à l’ensemble du service. 

Les outils et services énumérés précédemment sont donc indispensables pour piloter une démarche de réduction de l’empreinte environnementale.

## Itérer

L’optimisation de la performance environnementale d’un service numérique est un processus long et progressif. Certaines Bonnes Pratiques amèneront des résultats spectaculaires, d’autres n’auront pas d’effet perceptible. Certaines Bonnes Pratiques fonctionneront sur une page mais pas d’autres. Certaines bonnes pratiques pourront même avoir un effet négatif.

Un chantier de réduction de l’empreinte environnementale se déroule donc en général sur une durée longue, de plusieurs semaines à plusieurs mois. Ce chantier est divisé en petite tâches visant à tester une Bonne Pratique, ou à la généraliser.

Enfin, certains Bonnes Pratiques peuvent ne pas avoir d’effet mesurable en début de chantier (parce qu’une grosse partie de l’empreinte est générée ailleurs) et devenir pertinente une fois les optimisations majeures déjà mises en place. Il est donc important de revisiter les bonnes pratiques régulièrement. 

## De l’audit à l’assurance environnementale

La plupart des services numériques évoluent constamment. Des équipes de développement s’attachent en permanence à ajouter de nouvelles fonctionnalités, ou à corriger des bugs. Dans ce contexte, l’effet d’un chantier ponctuel de réduction de l’empreinte environnementale s’estompe rapidement avec le temps. En effet malgré une optimisation faite en début d’année, le code d’un développeur en fin d’année peut annuler l’optimisation.

Pour adresser ce risque inhérent au mode de développement en continu des services numériques, une solution existe : l’Intégration Continue. En effectuant une mesure de l’empreinte environnementale du service *à chaque changement d’un développeur*, et en définissant une limite haute pour cette empreinte, on peut *garantir* que l’empreinte n’augmentera pas après le chantier d’optimisation. Cela revient à passer d’une démarche d’audit environnementale à une démarche d’assurance environnementale, comme cela se fait couramment pour la sécurité, la performance, la maintenabilité, etc.

Le principe est le suivant :
-	Identifier des scénarios d’usage typique du service
-	Estimer, pour chacun de ces services, un « budget » maximum pour son empreinte environnementale (Consommation d'énergie primaire, émissions de GES, consommation d'eau)
-	A chaque modification du code, exécuter dans l’Intégration Continue une mesure de l’empreinte de chaque scénario
-	Interdire la modification de code si le budget est dépassé

