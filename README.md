# ngSparkle

### A collection of Angular directives to add extra UI sparkle

# Install

```
bower install ngSparkle
```

## sparkle-typing - add this attribute to display typing / teletype effects

```html
<div
style="sparkle-typing speed="100" delay-speed="2000" repeat="true"
message="\pauseCall trans opt: received. 2-19-98 13:24:18
REC:Log&gt\pause\cls Trace program: running\pause\cls \pauseSHALL WE PLAY A
GAME?\pause GLOBAL THERMONUCLEAR\backspace(4) WAR\pause">
</div>
```

## attributes

sparkle-typing="100" speed in ms

delay-speed="2000" delay in ms

repeat="true" restart when ended

## message cursor commands

\pause - pause cursor

\backspace - cursor back

\cls - clear screen
