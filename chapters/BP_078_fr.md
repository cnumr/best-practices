## Compresser les fichiers CSS, JavaScript, HTML et SVG

### Identifiants

| GreenIT |  V2  |  V3  |  V4  |
|:-------:|:----:|:----:|:----:|
|   86   |  80 | 78  |      |

RGESN : 6.3

### Catégories

| Cycle de vie |  Tiers  |  Responsable  |
|:---------:|:----:|:----:|
| 3. Réalisation (fabrication / développement) | Réseau | Architecte Logiciel/Développeur |

### Indications

| Degré de priorité |      Mise en oeuvre       |  Impact écologique    |
|:-------------------:|:-------------------------:|:---------------------:|
| 4 | 2 | 4 |

|Ressources Economisées                                      |
|:----------------------------------------------------------:|
| Réseau  |

### Description

Pour limiter l’utilisation de la bande passante et améliorer les temps de chargement, compressez les fichiers texte : CSS, JS, HTML et SVG.
L’algorithme permet de compresser à la volée les ressources avant de les envoyer aux clients.
Plus récemment, `BROTLI` a été popularisé avec des performances accrues. Il est supporté par tous les navigateurs les plus répandus.

### Exemple

Pour utiliser `BROTLI` dans Nginx, il suffit d’ajouter la configuration suivante :

```nginxconf
# for compressing responses on-the-fly
load_module modules/ngx_http_brotli_filter_module.so; 
# for serving pre-compressed files
load_module modules/ngx_http_brotli_static_module.so; 

http {
	server {
		brotli on;
		#...
	}
}
```

Pour plus de détails sur l'installation et la configuration, voir https://github.com/google/ngx_brotli.

### Principe de validation

| Le nombre ...     | est inférieur ou égal à   |  
|-------------------|:-------------------------:|
| de fichiers CSS, JavaScript,  HTML et SVG non compressés  |  0 |
