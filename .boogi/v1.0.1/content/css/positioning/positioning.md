---
title: 'Positioning & centering'
---

## Centering basics

 - *Inline element* -> `text-align: center;`
 - *Block element* -> `margin: 0 auto`


 ## Step-by-step 

 <iframe width="100%" height="700" frameborder="0" id="Step-by-step" src="https://css-tricks.com/centering-css-complete-guide/"></iframe>

<br />
<br />
<br />
<br />

## Absolute centering with translate (h+v)

```css
  .parent {
  	position: relative;
  }

  .child {
  	position: absolute;
  	top: 50%;
  	left: 50%;
  	transform: translate(-50%, -50%);
  }
```

<br />

<iframe width="100%" height="500" scrolling="no" frameborder="0" id="player" src="https://codepen.io/jscodelover/embed/preview/EGXZEM?default-tabs=css%2Cresult&amp;height=600&amp;host=https%3A%2F%2Fcodepen.io&amp;referrer=https%3A%2F%2Fmedium.com%2Ffront-end-weekly%2Fabsolute-centering-in-css-ea3a9d0ad72e&amp;slug-hash=EGXZEM" allowfullscreen="true"></iframe>

<br />
<br />
<br />
<br />

## Absolute centering with viewport (h+v)

<iframe height="515" style="width: 100%;" scrolling="no" title="Absolute Center using translate" src="https://codepen.io/jscodelover/embed/preview/EGXZEM?height=515&theme-id=dark&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jscodelover/pen/EGXZEM'>Absolute Center using translate</a> by jscodelover
  (<a href='https://codepen.io/jscodelover'>@jscodelover</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>