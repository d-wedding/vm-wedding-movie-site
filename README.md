# VM Wedding Movie Site

## 確認方法

`index.html` をブラウザで開くとサイトを確認できます。

スマホでHTMLだけを単体確認したい場合は、生成後の `vm-wedding-movie-standalone.html` を使ってください。

## よく触るファイル

- `site-config.js`: 写真、ロゴ、リンク、フォントを変更
- `styles.css`: 余白、色、文字サイズ、カード幅などの見た目を変更
- `index.html`: 商品説明や価格などの文言を変更

## 写真を差し替える

1. `assets` フォルダに新しい写真を入れる
2. `site-config.js` の `images` を変更する

例:

```js
ending: "./assets/new-ending.jpg"
```

## リンクを差し替える

`site-config.js` の `links` を変更します。

```js
links: {
  videographer: "https://example.com",
  sampleMovie: "https://example.com",
  instagram: "https://www.instagram.com/example/"
}
```

## フォントを変更する

`site-config.js` の `fonts` を変更します。

```js
fonts: {
  japanese: '"Noto Serif JP", serif',
  english: '"Helvetica Neue", Arial, sans-serif'
}
```
