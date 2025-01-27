# HTML

## Structure de base

Une page HTML commence avec la déclaration `<!DOCTYPE html>`, puis est organisée ainsi :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Titre de la page</title>
</head>
<body>
    <!-- Contenu ici -->
</body>
</html>
```

## Titres

Les balises `<h1>` à `<h6>` permettent de créer des titres, du plus important (`<h1>`) au moins important (`<h6>`).

```html
<h1>Titre principal</h1>
<h2>Sous-titre</h2>
```

## Paragraphes

La balise `<p>` est utilisée pour les paragraphes 

```html
<p>Ceci est un paragraphe.</p>

```

## Images

Pour afficher une image, on utilise la balise `<img>`, avec les attributs `src` et `alt` :

```html
<img src="image.jpg" alt="Description de l'image">
```

## Hyperliens

Les liens hypertextes sont créés avec la balise `<a>` :

```html
<a href="<https://exemple.com>">Cliquez ici</a>
```

## Listes

Liste non ordonnée : `<ul>` 

(avec `<li>` pour chaque élément)

```html
<ul>
    <li>Élément 1</li>
    <li>Élément 2</li>
</ul>
```

Liste ordonnée **:** `<ol>`

(avec `<li>` pour chaque élément)

```html
<ol>
    <li>Élément 1</li>
    <li>Élément 2</li>
</ol>
```

## Tableaux

Un tableau est défini avec `<table>`, `<tr>` pour les lignes, `<th>` pour les en-têtes, et `<td>` pour les cellules.

```html
<table>
    <tr>
        <th>Colonne Entête 1</th>
        <th>Colonne Entête 2</th>
    </tr>
    <tr>
        <td>Donnée 1</td>
        <td>Donnée 2</td>
    </tr>
</table>
```

