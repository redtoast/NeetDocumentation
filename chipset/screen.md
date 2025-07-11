# <b>Screen API</b>
The defacto API for controling the in-game screen opened when the computer is interacted with

## draw()
The draw function takes no arguments and draws [the graphics buffer](https://en.wikipedia.org/wiki/Multiple_buffering) to the screen!

# g

### setColor(R, G, B)
The most basic function for seting the defualt color of drawn graphics, note that every draw function can have its RGB color overriden by adding the RGB values after the functions ariginal parameters. (I.E. drawPixel(x, y, R, G, B))

### setColor(Alpha)
sets the transperensy of drawn graphics, ranging 1 - 256 with 1 being fully invisible. note that unlike RGB graphics you can not manualy override the alpha value for each function call.

### setColor(R, G, B, A)
combined functionality of setColor(R, G, B) with setColor(Aplha), pretty strait forward.
