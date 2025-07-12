<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NeetComputers Documentation</title>
  <style>
    :root {
      --bg-light: #f9f9f9;
      --bg-dark: #1e1e1e;
      --text-light: #333;
      --text-dark: #eee;
      --accent: #4CAF50;
      --link: #2196F3;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: var(--bg-light);
      color: var(--text-light);
      display: flex;
      min-height: 100vh;
    }

    .dark {
      background-color: var(--bg-dark);
      color: var(--text-dark);
    }

    .sidebar {
      width: 250px;
      background: #2c3e50;
      color: white;
      padding: 1rem;
      box-shadow: 2px 0 5px rgba(0,0,0,0.1);
      position: fixed;
      height: 100%;
      overflow-y: auto;
    }

    .sidebar h2 {
      font-size: 1.2rem;
      border-bottom: 2px solid #4CAF50;
      padding-bottom: 0.5rem;
    }

    .sidebar a {
      color: #ecf0f1;
      text-decoration: none;
      display: block;
      margin: 0.3rem 0;
    }

    .sidebar a:hover {
      text-decoration: underline;
    }

    .content {
      margin-left: 260px;
      padding: 2rem;
      flex: 1;
    }

    h1 {
      border-bottom: 3px solid var(--accent);
      padding-bottom: 0.5rem;
      text-align: center;
    }

    h2 {
      margin-top: 2rem;
      border-left: 5px solid var(--accent);
      padding-left: 0.5rem;
    }

    h3 {
      margin-top: 1.5rem;
      color: var(--accent);
      cursor: pointer;
    }

    p {
      margin: 0.5rem 0 1rem 0;
    }

    a {
      color: var(--link);
    }

    code {
      background-color: #eee;
      padding: 2px 4px;
      border-radius: 4px;
      font-family: monospace;
    }

    .dark code {
      background-color: #444;
    }

    .toggle-theme {
      margin-top: 2rem;
      padding: 0.5rem;
      background: var(--accent);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .collapsible + p {
      display: none;
    }

    .collapsible.open + p {
      display: block;
    }

    #backToTop {
      display: none;
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 99;
      background-color: var(--accent);
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
    }

    #searchBar {
      width: 100%;
      padding: 10px;
      margin-bottom: 1.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 6px;
    }

    .dark #searchBar {
      background-color: #333;
      color: white;
      border-color: #555;
    }

    @media (max-width: 768px) {
      .sidebar {
        display: none;
      }

      .content {
        margin-left: 0;
        padding: 1rem;
      }
    }
  </style>
</head>
<body>
  <div class="sidebar">
    <h2>Navigation</h2>
    <a href="#basic">Basic Functions</a>
    <a href="#color">Color & Transparency</a>
    <a href="#rotation">Rotation</a>
    <a href="#simple">Simple Drawing</a>
    <a href="#complex">Complex Drawing</a>
    <button class="toggle-theme">Toggle Theme</button>
  </div>

  <div class="content">
    <h1>Screen API Documentation</h1>

    <input type="text" id="searchBar" placeholder="Search functions..." />

    <h2 id="basic">Basic Functions</h2>
    <h3 id="draw" class="collapsible">draw()</h3>
    <p>Renders the current contents of the <a href="https://en.wikipedia.org/wiki/Multiple_buffering">graphics buffer</a> to the screen.</p>

    <h3 id="getsize" class="collapsible">getSize()</h3>
    <p>Returns the current screen dimensions.</p>

    <h2 id="color">Color & Transparency</h2>
    <h3 id="setcolor-rgb" class="collapsible">setColor(R, G, B)</h3>
    <p>Sets the default RGB color for future drawing operations. You can override this color per call, e.g. <code>drawPixel(x, y, R, G, B)</code>.</p>

    <h3 id="setcolor-alpha" class="collapsible">setColor(Alpha)</h3>
    <p>Sets the global transparency (1–256). Cannot be overridden per function call.</p>

    <h3 id="setcolor-rgba" class="collapsible">setColor(R, G, B, A)</h3>
    <p>Sets both color and alpha. Equivalent to combining the above.</p>

    <h2 id="rotation">Rotation</h2>
    <h3 id="setrotation-center" class="collapsible">setRotation(Angle, X, Y)</h3>
    <p>Applies rotation to future complex drawings around (<code>X</code>, <code>Y</code>).</p>

    <h3 id="setrotation-next" class="collapsible">setRotation(Angle)</h3>
    <p>Rotates only the next drawing, around its center.</p>

    <h3 id="clearrotation" class="collapsible">setRotation()</h3>
    <p>Clears all rotation settings.</p>

    <h2 id="simple">Simple Drawing</h2>
    <h3 id="drawpixel" class="collapsible">drawPixel(X, Y)</h3>
    <p>Draws a single pixel at the specified location.</p>

    <h3 id="drawline" class="collapsible">drawLine(x1, y1, x2, y2)</h3>
    <p>Draws a straight line between two points.</p>

    <h3 id="fill-rect" class="collapsible">fill(x1, y1, x2, y2)</h3>
    <p>Fills a rectangle between two coordinates.</p>

    <h3 id="fill-screen" class="collapsible">fill(R, G, B)</h3>
    <p>Fills the entire screen with the specified color. Combine with alpha for fades.</p>

    <h3 id="floodfill-strict" class="collapsible">floodFill(X, Y, R, G, B)</h3>
    <p>Flood fill from a point, replacing matching colors.</p>

    <h3 id="floodfill-tolerance" class="collapsible">floodFill(X, Y, Tolerance, R, G, B)</h3>
    <p>Flood fill with color tolerance for near-matches.</p>

    <h2 id="complex">Complex Drawing</h2>
    <h3 id="drawrect" class="collapsible">drawRectangle(x1, y1, x2, y2)</h3>
    <p>Draws a wireframe rectangle.</p>

    <h3 id="drawcircle-2pt" class="collapsible">drawCircle(x1, y1, x2, y2)</h3>
    <p>Draws an ellipse between two points.</p>

    <h3 id="drawcircle-radius" class="collapsible">drawCircle(X, Y, Radius)</h3>
    <p>Draws a circle at (<code>X</code>, <code>Y</code>) with radius.</p>

    <h3 id="drawpolygon" class="collapsible">drawPolygon(X, Y, n, Radius)</h3>
    <p>Draws a regular polygon with <code>n</code> sides inside the radius.</p>

    <h3 id="toradius" class="collapsible">toRadius(n, Apothem)</h3>
    <p>Converts apothem to radius for use with polygons.</p>

    <h3 id="drawbezier" class="collapsible">drawBezier(x1, y1, x2, y2, x3, y3)</h3>
    <p>Draws a <a href="https://en.wikipedia.org/wiki/B%C3%A9zier_curve">Bézier curve</a> using three points.</p>

    <h3 id="drawspline-list" class="collapsible">drawSpline(Xs, Ys)</h3>
    <p>Draws a <a href="https://en.wikipedia.org/wiki/Spline_(mathematics)">spline</a> through coordinate lists.</p>

    <h3 id="drawspline-flat" class="collapsible">drawSpline(Coordinates)</h3>
    <p>Draws a spline using interleaved X, Y coordinate list.</p>
  </div>

  <button id="backToTop">Return</button>

  <script>
    document.querySelectorAll(".collapsible").forEach(header => {
      header.addEventListener("click", () => {
        header.classList.toggle("open");
      });
    });

    document.querySelector(".toggle-theme").addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });

    const backToTop = document.getElementById("backToTop");
    window.onscroll = () => {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    };
    backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const searchInput = document.getElementById("searchBar");
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      document.querySelectorAll(".collapsible").forEach(header => {
        const para = header.nextElementSibling;
        const visible = header.textContent.toLowerCase().includes(query) || (para && para.textContent.toLowerCase().includes(query));
        header.style.display = para.style.display = visible ? "" : "none";
      });
    });
  </script>
</body>
</html>