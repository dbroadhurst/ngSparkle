# ngSparkle

#### A collection of Angular directives to add extra UI sparkle

## Install

```
bower install ngSparkle
```

## add modules to app
```javascript
  angular.module('ngApp', [
    'sparkle.typing',
    'sparkle.loadanim',
    'sparkle.flip'
  ])
```

---
### ```sparkle-typing```
---

attribute to display typing / teletype effects

```html
<div
sparkle-typing speed="100" delay-speed="2000" repeat="true"
message="\pauseCall trans opt: received. 2-19-98 13:24:18
REC:Log&gt\pause\cls Trace program: running\pause\cls \pauseSHALL WE PLAY A
GAME?\pause GLOBAL THERMONUCLEAR\backspace(4) WAR\pause">
</div>
```

* sparkle-typing="100" speed in ms
* delay-speed="2000" delay in ms
* repeat="true" restart when ended

message cursor commands

* \pause - pause cursor
* \backspace - cursor back
* \cls - clear screen

---
### ```<sparkle-flip>```
---

directive to add a flip card

## flip card on x axis
```html
<sparkle-flip direction="x">
  <div class="front">Front</div>
  <div class="back-x">Back X direction flip</div>
</sparkle-flip>
```

## flip card on y axis
```html
<sparkle-flip direction="y">
  <div class="front">Front</div>
  <div class="back-y">Back Y direction flip</div>
</sparkle-flip>
```

direction="x" or direction="y" flip direction

### ```sparkle-load-anim```
---

Use the ```sparkle-load-anim``` to gracefully animate an image or background image after the image has loaded

```html
<img sparkle-load-anim
class="sparkle-load-zoom-hide"
show="sparkle-load-zoom-show"
image="http://eskipaper.com/images/sparkles-wallpaper-2.jpg"
speed="1000"
width="192" height="192"/>
```

* class="sparkle-load-zoom-hide" - hide
* show="sparkle-load-zoom-show" - animation to show image
* speed="1000" - animation speed

### available animations

The following classes provide different load effects. Extending is trivial, look loadanim.css for reference

```css
.sparkle-load-fade-hide
.sparkle-load-fade-show

.sparkle-load-scale-hide
.sparkle-load-scale-show

.sparkle-load-zoom-hide
.sparkle-load-zoom-show
```
