// Chapter 0 - Metric Spaces & Topological Preliminaries (Version B)
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
id: 'ch00',
number: 0,
title: 'Metric Spaces & Topological Preliminaries',
subtitle: 'The foundation of analysis in abstract spaces',
sections: [
// ===== SECTION 1: Metric Spaces =====
{
id: 'sec-metric-spaces',
title: 'Metric Spaces',
content: `
<p>Before we can study functional analysis — the analysis of infinite-dimensional spaces — we need a rigorous language for measuring <em>distance</em>. The concept of a metric space extracts the essential properties of distance from familiar settings like \\(\\mathbb{R}^n\\) and applies them universally.</p>

<div class="env-block definition">
<div class="env-title">Definition 0.1 (Metric Space)</div>
<div class="env-body">
<p>A <strong>metric space</strong> is a pair \\((X, d)\\) where \\(X\\) is a non-empty set and \\(d: X \\times X \\to [0, \\infty)\\) is a function (called a <strong>metric</strong> or <strong>distance function</strong>) satisfying for all \\(x, y, z \\in X\\):</p>
<ol>
<li><strong>Positivity:</strong> \\(d(x, y) \\geq 0\\), with \\(d(x, y) = 0 \\iff x = y\\)</li>
<li><strong>Symmetry:</strong> \\(d(x, y) = d(y, x)\\)</li>
<li><strong>Triangle inequality:</strong> \\(d(x, z) \\leq d(x, y) + d(y, z)\\)</li>
</ol>
</div>
</div>

<div class="env-block intuition">
<div class="env-title">Intuition</div>
<div class="env-body">
<p>Think of \\(d(x,y)\\) as the "cost" of traveling from \\(x\\) to \\(y\\). The axioms say: (1) travel costs something unless you stay put, (2) the cost is the same in both directions, and (3) a detour through \\(y\\) can never be cheaper than going directly.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 0.2 (Euclidean Metric on \\(\\mathbb{R}^n\\))</div>
<div class="env-body">
<p>The most familiar metric is the Euclidean distance:</p>
\\[d_2(x, y) = \\sqrt{\\sum_{i=1}^{n} (x_i - y_i)^2}\\]
<p>This is the "straight-line" distance that matches our geometric intuition.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 0.3 (The \\(\\ell^p\\) Metrics on \\(\\mathbb{R}^n\\))</div>
<div class="env-body">
<p>For \\(1 \\leq p \\leq \\infty\\), define on \\(\\mathbb{R}^n\\):</p>
\\[d_p(x, y) = \\left(\\sum_{i=1}^{n} |x_i - y_i|^p\\right)^{1/p}, \\qquad d_\\infty(x, y) = \\max_{1 \\leq i \\leq n} |x_i - y_i|\\]
<p>Important special cases:</p>
<ul>
<li>\\(p = 1\\): the <strong>taxicab</strong> (Manhattan) metric — distance along coordinate axes</li>
<li>\\(p = 2\\): the Euclidean metric</li>
<li>\\(p = \\infty\\): the <strong>Chebyshev</strong> (max) metric — the largest coordinate difference</li>
</ul>
<p>That \\(d_p\\) satisfies the triangle inequality is the <strong>Minkowski inequality</strong>, a cornerstone result we will revisit in \\(L^p\\) spaces.</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-lp-unit-balls"></div>

<div class="env-block example">
<div class="env-title">Example 0.4 (Discrete Metric)</div>
<div class="env-body">
<p>On any set \\(X\\), the <strong>discrete metric</strong> is:</p>
\\[d(x, y) = \\begin{cases} 0 & \\text{if } x = y \\\\ 1 & \\text{if } x \\neq y \\end{cases}\\]
<p>This is the "laziest" metric that still separates points. Every subset is open, and the topology it induces is the <strong>discrete topology</strong>.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 0.5 (The Sup Metric on \\(C[0,1]\\))</div>
<div class="env-body">
<p>On the space \\(C[0,1]\\) of continuous functions \\(f: [0,1] \\to \\mathbb{R}\\), define:</p>
\\[d_\\infty(f, g) = \\sup_{t \\in [0,1]} |f(t) - g(t)|\\]
<p>This measures the <strong>worst-case</strong> pointwise deviation. Two functions are "close" only if they are close <em>everywhere</em> simultaneously. This space — with this metric — is the gateway to functional analysis.</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-sup-metric"></div>

<div class="env-block theorem">
<div class="env-title">Proposition 0.6 (Reverse Triangle Inequality)</div>
<div class="env-body">
<p>In any metric space \\((X, d)\\), for all \\(x, y \\in X\\):</p>
\\[|d(x, z) - d(y, z)| \\leq d(x, y)\\]
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body">
<p>By the triangle inequality, \\(d(x, z) \\leq d(x, y) + d(y, z)\\), so \\(d(x, z) - d(y, z) \\leq d(x, y)\\). Swapping \\(x\\) and \\(y\\) gives \\(d(y, z) - d(x, z) \\leq d(x, y)\\). Combining yields the result. \\(\\square\\)</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark (Why Metrics Matter for Functional Analysis)</div>
<div class="env-body">
<p>In functional analysis, the "points" are functions, operators, or sequences. The metric (or later, the norm) tells us what it means for a sequence of functions to <em>converge</em>, for a set of operators to be <em>bounded</em>, or for an approximation to be <em>good enough</em>. Different metrics on the same set of functions lead to very different notions of convergence — a theme that runs throughout this course.</p>
</div>
</div>
`,
visualizations: [
{
id: 'viz-lp-unit-balls',
title: 'Unit Balls in \\(\\ell^p\\) Metrics',
description: 'Drag the slider to change \\(p\\). Watch how the "unit ball" \\(\\{x \\in \\mathbb{R}^2 : d_p(x,0) \\leq 1\\}\\) morphs from a diamond (\\(p=1\\)) to a circle (\\(p=2\\)) to a square (\\(p=\\infty\\)).',
setup: function(body, controls) {
    const engine = new VizEngine(body, {width: 560, height: 380, scale: 120});
    let p = 2;
    const slider = VizEngine.createSlider(controls, 'p', 0.5, 10, 2, 0.1, function(v) { p = v; draw(); });

    function draw() {
        engine.clear();
        // Draw grid lines
        const ctx = engine.ctx;
        ctx.strokeStyle = engine.colors.grid; ctx.lineWidth = 0.5;
        for (let i = -2; i <= 2; i++) {
            const sx = engine.originX + i * engine.scale;
            ctx.beginPath(); ctx.moveTo(sx, 0); ctx.lineTo(sx, engine.height); ctx.stroke();
            const sy = engine.originY - i * engine.scale;
            ctx.beginPath(); ctx.moveTo(0, sy); ctx.lineTo(engine.width, sy); ctx.stroke();
        }
        // Draw axes
        ctx.strokeStyle = engine.colors.axis; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(0, engine.originY); ctx.lineTo(engine.width, engine.originY); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(engine.originX, 0); ctx.lineTo(engine.originX, engine.height); ctx.stroke();

        // Draw unit ball boundary
        const steps = 400;
        ctx.fillStyle = engine.colors.blue + '25';
        ctx.strokeStyle = engine.colors.blue;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let i = 0; i <= steps; i++) {
            const theta = (2 * Math.PI * i) / steps;
            const cosT = Math.cos(theta);
            const sinT = Math.sin(theta);
            // On the boundary: |x|^p + |y|^p = 1
            // Parametrize: x = r*cos(t), y = r*sin(t), find r
            const denom = Math.pow(Math.abs(cosT), p) + Math.pow(Math.abs(sinT), p);
            const r = Math.pow(1 / denom, 1 / p);
            const x = r * cosT;
            const y = r * sinT;
            const sx = engine.originX + x * engine.scale;
            const sy = engine.originY - y * engine.scale;
            if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Labels
        const pLabel = p >= 10 ? '\u221E' : p.toFixed(1);
        engine.screenText('p = ' + pLabel, engine.width - 60, 30, engine.colors.white, 18);
        engine.screenText('Unit ball: {x : ||x||_p \u2264 1}', engine.width / 2, engine.height - 15, engine.colors.text, 12);
    }
    draw();
    return engine;
}
},
{
id: 'viz-sup-metric',
title: 'Sup Metric on \\(C[0,1]\\)',
description: 'Two functions \\(f\\) (blue) and \\(g\\) (orange) on \\([0,1]\\). The sup metric \\(d_\\infty(f,g)\\) is the height of the tallest vertical bar between them. Drag the slider to shift \\(g\\).',
setup: function(body, controls) {
    const engine = new VizEngine(body, {width: 560, height: 380, scale: 200, originX: 60, originY: 320});
    let shift = 0.1;
    VizEngine.createSlider(controls, 'Shift g', -0.5, 0.5, 0.1, 0.01, function(v) { shift = v; draw(); });

    function f(t) { return 0.5 * Math.sin(2 * Math.PI * t) + 0.3; }
    function g(t) { return 0.4 * Math.cos(3 * Math.PI * t) + 0.2 + shift; }

    function draw() {
        engine.clear();
        const ctx = engine.ctx;
        // Axes
        ctx.strokeStyle = engine.colors.axis; ctx.lineWidth = 1;
        // x-axis
        const x0 = engine.originX, y0 = engine.originY;
        const xEnd = engine.originX + 1 * engine.scale;
        ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(xEnd + 10, y0); ctx.stroke();
        // y-axis
        ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0, y0 - 1.2 * engine.scale); ctx.stroke();
        // tick labels
        ctx.fillStyle = engine.colors.text; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('0', x0, y0 + 14); ctx.fillText('1', xEnd, y0 + 14);
        ctx.textAlign = 'right';
        ctx.fillText('0', x0 - 5, y0 + 3);
        ctx.fillText('1', x0 - 5, y0 - engine.scale + 3);

        // Find sup distance
        let maxDiff = 0, maxT = 0;
        const N = 200;
        for (let i = 0; i <= N; i++) {
            const t = i / N;
            const diff = Math.abs(f(t) - g(t));
            if (diff > maxDiff) { maxDiff = diff; maxT = t; }
        }

        // Draw vertical bars (light) at several points
        ctx.globalAlpha = 0.15;
        for (let i = 0; i <= 20; i++) {
            const t = i / 20;
            const fv = f(t), gv = g(t);
            const sx = x0 + t * engine.scale;
            const syF = y0 - fv * engine.scale;
            const syG = y0 - gv * engine.scale;
            ctx.strokeStyle = engine.colors.purple; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(sx, syF); ctx.lineTo(sx, syG); ctx.stroke();
        }
        ctx.globalAlpha = 1;

        // Highlight max distance bar
        const sxMax = x0 + maxT * engine.scale;
        const syFMax = y0 - f(maxT) * engine.scale;
        const syGMax = y0 - g(maxT) * engine.scale;
        ctx.strokeStyle = engine.colors.red; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(sxMax, syFMax); ctx.lineTo(sxMax, syGMax); ctx.stroke();

        // Draw f
        ctx.strokeStyle = engine.colors.blue; ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let i = 0; i <= N; i++) {
            const t = i / N;
            const sx = x0 + t * engine.scale;
            const sy = y0 - f(t) * engine.scale;
            if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
        }
        ctx.stroke();

        // Draw g
        ctx.strokeStyle = engine.colors.orange; ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let i = 0; i <= N; i++) {
            const t = i / N;
            const sx = x0 + t * engine.scale;
            const sy = y0 - g(t) * engine.scale;
            if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
        }
        ctx.stroke();

        // Labels
        engine.screenText('f', x0 + engine.scale + 15, y0 - f(1) * engine.scale, engine.colors.blue, 14);
        engine.screenText('g', x0 + engine.scale + 15, y0 - g(1) * engine.scale, engine.colors.orange, 14);
        engine.screenText('d\u221E(f,g) = ' + maxDiff.toFixed(3), engine.width / 2, 25, engine.colors.red, 16);
        engine.screenText('sup distance (red bar)', engine.width / 2, 45, engine.colors.text, 11);
    }
    draw();
    return engine;
}
}
],
exercises: [
{
    question: 'Verify that the discrete metric satisfies all three metric axioms. Which axiom is the hardest to check?',
    hint: 'For the triangle inequality, consider the cases where some of \\(x, y, z\\) are equal and where they are all distinct.',
    solution: '<p><strong>Positivity:</strong> \\(d(x,y) \\in \\{0,1\\} \\subseteq [0,\\infty)\\). And \\(d(x,y) = 0 \\iff x = y\\) by definition.</p><p><strong>Symmetry:</strong> \\(d(x,y) = d(y,x)\\) since \\(x = y \\iff y = x\\).</p><p><strong>Triangle inequality:</strong> If \\(x = z\\), then \\(d(x,z) = 0 \\leq d(x,y) + d(y,z)\\). If \\(x \\neq z\\), then \\(d(x,z) = 1\\). At least one of \\(x \\neq y\\) or \\(y \\neq z\\) must hold (if both were equal, \\(x = y = z\\)), so \\(d(x,y) + d(y,z) \\geq 1 = d(x,z)\\). The triangle inequality requires the most case analysis.</p>'
},
{
    question: 'Let \\(d\\) be a metric on \\(X\\). Show that \\(\\tilde{d}(x,y) = \\frac{d(x,y)}{1 + d(x,y)}\\) is also a metric on \\(X\\). What is the range of \\(\\tilde{d}\\)?',
    hint: 'For the triangle inequality, use the fact that \\(t \\mapsto \\frac{t}{1+t}\\) is increasing and subadditive (verify this!).',
    solution: '<p>The function \\(\\varphi(t) = \\frac{t}{1+t}\\) is increasing on \\([0,\\infty)\\), maps \\(0 \\mapsto 0\\), and is <em>subadditive</em>: \\(\\varphi(a+b) \\leq \\varphi(a) + \\varphi(b)\\) for \\(a,b \\geq 0\\). Positivity and symmetry transfer directly from \\(d\\). For the triangle inequality: \\(\\tilde{d}(x,z) = \\varphi(d(x,z)) \\leq \\varphi(d(x,y) + d(y,z)) \\leq \\varphi(d(x,y)) + \\varphi(d(y,z)) = \\tilde{d}(x,y) + \\tilde{d}(y,z)\\). The range of \\(\\tilde{d}\\) is \\([0, 1)\\), so this "bounded metric" generates the same topology as \\(d\\).</p>'
},
{
    question: 'On \\(\\mathbb{R}^2\\), sketch the unit balls \\(B_1(0)\\) for \\(d_1\\), \\(d_2\\), and \\(d_\\infty\\). Which ball is the largest (contains the others)?',
    hint: 'Compute \\(d_p(x, 0)\\) for \\(x = (1, 0)\\), \\((1/\\sqrt{2}, 1/\\sqrt{2})\\), and \\((1, 1)\\) under each metric.',
    solution: '<p>\\(d_1\\): diamond with vertices \\((\\pm 1, 0), (0, \\pm 1)\\). \\(d_2\\): disk of radius 1. \\(d_\\infty\\): square \\([-1,1]^2\\). We have the containment \\(B_\\infty \\supseteq B_2 \\supseteq B_1\\), corresponding to the norm inequality \\(\\|x\\|_\\infty \\leq \\|x\\|_2 \\leq \\|x\\|_1\\). The \\(d_\\infty\\) ball is the largest.</p>'
},
{
    question: 'Prove that \\(d_\\infty(f, g) = \\sup_{t \\in [0,1]} |f(t) - g(t)|\\) is indeed a metric on \\(C[0,1]\\). Why is it important that \\(f - g\\) is continuous on a <em>compact</em> set?',
    hint: 'Continuity on \\([0,1]\\) guarantees the supremum is attained (it is a maximum). What could go wrong on an open interval?',
    solution: '<p>Positivity: \\(\\sup|f(t)-g(t)| \\geq 0\\), and equals 0 iff \\(f(t) = g(t)\\) for all \\(t\\). Symmetry: \\(|f-g| = |g-f|\\). Triangle inequality: \\(|f(t)-h(t)| \\leq |f(t)-g(t)| + |g(t)-h(t)| \\leq d_\\infty(f,g) + d_\\infty(g,h)\\) for each \\(t\\), so taking sup gives \\(d_\\infty(f,h) \\leq d_\\infty(f,g) + d_\\infty(g,h)\\). Compactness of \\([0,1]\\) ensures the sup is actually achieved (extreme value theorem), so \\(d_\\infty\\) is a finite real number. On \\((0,1)\\), the continuous function \\(f(t) = 1/t\\) is unbounded, and \\(\\sup|f(t)| = \\infty\\) is not a valid metric value.</p>'
}
],
},
// ===== SECTION 2: Open and Closed Sets =====
{
id: 'sec-open-closed',
title: 'Open and Closed Sets',
content: `
<p>Once we have a metric, we can define the topology of the space — which sets are "open," which are "closed," and what it means for a point to be near a set. These ideas are the skeleton of analysis.</p>

<div class="env-block definition">
<div class="env-title">Definition 0.7 (Open Ball)</div>
<div class="env-body">
<p>Let \\((X, d)\\) be a metric space. The <strong>open ball</strong> of radius \\(r > 0\\) centered at \\(x \\in X\\) is:</p>
\\[B(x, r) = B_r(x) = \\{y \\in X : d(x, y) < r\\}\\]
<p>The <strong>closed ball</strong> is \\(\\overline{B}(x, r) = \\{y \\in X : d(x, y) \\leq r\\}\\).</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-open-ball-drag"></div>

<div class="env-block definition">
<div class="env-title">Definition 0.8 (Open Set)</div>
<div class="env-body">
<p>A set \\(U \\subseteq X\\) is <strong>open</strong> if for every \\(x \\in U\\), there exists \\(r > 0\\) such that \\(B(x, r) \\subseteq U\\). In other words, every point of \\(U\\) has some "breathing room" — a ball around it still inside \\(U\\).</p>
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Proposition 0.9 (Properties of Open Sets)</div>
<div class="env-body">
<p>In any metric space \\((X, d)\\):</p>
<ol>
<li>\\(\\emptyset\\) and \\(X\\) are open.</li>
<li>Any union of open sets is open.</li>
<li>Any <em>finite</em> intersection of open sets is open.</li>
</ol>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof (Sketch for (3))</div>
<div class="env-body">
<p>Let \\(U_1, \\ldots, U_n\\) be open and \\(x \\in \\bigcap U_i\\). For each \\(i\\), pick \\(r_i > 0\\) with \\(B(x, r_i) \\subseteq U_i\\). Then \\(r = \\min(r_1, \\ldots, r_n) > 0\\) (this is where finiteness is used!) and \\(B(x, r) \\subseteq \\bigcap U_i\\). \\(\\square\\)</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Warning: Infinite Intersections</div>
<div class="env-body">
<p>An infinite intersection of open sets need <em>not</em> be open. For example, \\(\\bigcap_{n=1}^{\\infty} (-1/n, 1/n) = \\{0\\}\\), which is not open in \\(\\mathbb{R}\\).</p>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 0.10 (Closed Set, Interior, Closure, Boundary)</div>
<div class="env-body">
<p>A set \\(F \\subseteq X\\) is <strong>closed</strong> if its complement \\(X \\setminus F\\) is open. Equivalently, \\(F\\) contains all its limit points.</p>
<ul>
<li><strong>Interior:</strong> \\(\\text{int}(A) = A^\\circ\\) = largest open set contained in \\(A\\) = \\(\\{x \\in A : \\exists r > 0,\\ B(x,r) \\subseteq A\\}\\)</li>
<li><strong>Closure:</strong> \\(\\overline{A}\\) = smallest closed set containing \\(A\\) = \\(A \\cup \\{\\text{limit points of } A\\}\\)</li>
<li><strong>Boundary:</strong> \\(\\partial A = \\overline{A} \\setminus A^\\circ\\)</li>
</ul>
</div>
</div>

<div class="env-block intuition">
<div class="env-title">Intuition: Open vs. Closed</div>
<div class="env-body">
<p>"Open" and "closed" are <strong>not</strong> opposites! A set can be both (clopen), or neither. Think of a set as open if you can "wiggle" any of its points and stay inside, and closed if limits of convergent sequences from the set stay in the set. The interval \\((0,1]\\) in \\(\\mathbb{R}\\) is neither open nor closed.</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-interior-closure"></div>

<div class="env-block theorem">
<div class="env-title">Proposition 0.11 (Sequential Characterization of Closure)</div>
<div class="env-body">
<p>In a metric space, \\(x \\in \\overline{A}\\) if and only if there exists a sequence \\((x_n)\\) in \\(A\\) with \\(x_n \\to x\\).</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 0.12 (Dense Subsets)</div>
<div class="env-body">
<p>A set \\(A \\subseteq X\\) is <strong>dense</strong> if \\(\\overline{A} = X\\), i.e., every point of \\(X\\) is the limit of a sequence from \\(A\\). For instance:</p>
<ul>
<li>\\(\\mathbb{Q}\\) is dense in \\(\\mathbb{R}\\)</li>
<li>Polynomials are dense in \\((C[0,1], d_\\infty)\\) — this is the <strong>Weierstrass approximation theorem</strong></li>
</ul>
<p>A metric space with a countable dense subset is called <strong>separable</strong>. Most spaces in functional analysis are separable.</p>
</div>
</div>
`,
visualizations: [
{
id: 'viz-open-ball-drag',
title: 'Interactive Open Ball',
description: 'Drag the center point to move it. Use the slider to change the radius. The blue region is the open ball \\(B(x, r)\\). Points inside are colored green; the boundary circle is dashed (not included in the open ball).',
setup: function(body, controls) {
    const engine = new VizEngine(body, {width: 560, height: 380, scale: 40});
    let radius = 2;
    VizEngine.createSlider(controls, 'r', 0.3, 4, 2, 0.1, function(v) { radius = v; draw(); });

    const center = engine.addDraggable('center', 0, 0, engine.colors.blue, 8, function() { draw(); });

    // Scatter some test points
    const testPoints = [];
    for (let i = 0; i < 30; i++) {
        testPoints.push({
            x: (Math.random() - 0.5) * 12,
            y: (Math.random() - 0.5) * 8
        });
    }

    function draw() {
        engine.clear();
        engine.drawGrid();
        engine.drawAxes();

        const cx = center.x, cy = center.y;
        // Draw filled ball
        engine.drawCircle(cx, cy, radius, engine.colors.blue + '18', null);
        // Dashed boundary
        const ctx = engine.ctx;
        const [sx, sy] = engine.toScreen(cx, cy);
        ctx.setLineDash([6, 4]);
        ctx.strokeStyle = engine.colors.blue + '80';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(sx, sy, radius * engine.scale, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw test points
        for (const p of testPoints) {
            const dist = Math.sqrt((p.x - cx) * (p.x - cx) + (p.y - cy) * (p.y - cy));
            const inside = dist < radius;
            engine.drawPoint(p.x, p.y, inside ? engine.colors.green : engine.colors.red + '60', null, inside ? 5 : 3);
        }

        engine.drawDraggables();
        engine.screenText('B(x, ' + radius.toFixed(1) + ')', engine.width / 2, 20, engine.colors.white, 15);
    }
    draw();
    return engine;
}
},
{
id: 'viz-interior-closure',
title: 'Interior, Closure, and Boundary',
description: 'Visualizing a set \\(A\\) (white region) with its interior (blue), closure (blue + boundary), and boundary (orange ring).',
setup: function(body, controls) {
    const engine = new VizEngine(body, {width: 560, height: 380, scale: 40});
    let showInterior = true, showClosure = false, showBoundary = false;

    const btnI = VizEngine.createButton(controls, 'Interior', function() { showInterior = true; showClosure = false; showBoundary = false; draw(); });
    const btnCl = VizEngine.createButton(controls, 'Closure', function() { showInterior = false; showClosure = true; showBoundary = false; draw(); });
    const btnBd = VizEngine.createButton(controls, 'Boundary', function() { showInterior = false; showClosure = false; showBoundary = true; draw(); });

    // Define a set as a polygon-ish region
    function inSet(x, y) {
        // L-shaped region: [−3,3]×[−2,2] minus [0,3]×[0,2]
        return (x >= -3 && x <= 3 && y >= -2 && y <= 2) && !(x > 0 && y > 0);
    }

    function draw() {
        engine.clear();
        engine.drawGrid();
        engine.drawAxes();
        const ctx = engine.ctx;

        // Draw the set A
        // L-shape outline
        const pts = [[-3,-2],[3,-2],[3,0],[0,0],[0,2],[-3,2]];
        ctx.beginPath();
        for (let i = 0; i < pts.length; i++) {
            const [sx, sy] = engine.toScreen(pts[i][0], pts[i][1]);
            if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
        }
        ctx.closePath();
        ctx.fillStyle = engine.colors.white + '12';
        ctx.fill();
        ctx.strokeStyle = engine.colors.white + '40';
        ctx.lineWidth = 1;
        ctx.stroke();

        if (showInterior) {
            // Interior: same shape but "shrunken" slightly — conceptually the set minus boundary
            ctx.beginPath();
            for (let i = 0; i < pts.length; i++) {
                const [sx, sy] = engine.toScreen(pts[i][0], pts[i][1]);
                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
            }
            ctx.closePath();
            ctx.fillStyle = engine.colors.blue + '35';
            ctx.fill();
            engine.screenText('Interior A\u00B0 (blue fill)', engine.width / 2, 20, engine.colors.blue, 14);
            engine.screenText('Every interior point has a ball entirely inside A', engine.width / 2, 38, engine.colors.text, 11);
            // Show a sample ball inside
            engine.drawCircle(-1.5, -1, 0.8, engine.colors.teal + '25', engine.colors.teal, 1.5);
            engine.drawPoint(-1.5, -1, engine.colors.teal, 'x', 5);
        }
        if (showClosure) {
            ctx.beginPath();
            for (let i = 0; i < pts.length; i++) {
                const [sx, sy] = engine.toScreen(pts[i][0], pts[i][1]);
                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
            }
            ctx.closePath();
            ctx.fillStyle = engine.colors.blue + '30';
            ctx.fill();
            ctx.strokeStyle = engine.colors.orange;
            ctx.lineWidth = 3;
            ctx.stroke();
            engine.screenText('Closure \u0100 (fill + orange boundary)', engine.width / 2, 20, engine.colors.orange, 14);
            engine.screenText('A\u0304 = A \u222A limit points = smallest closed set \u2287 A', engine.width / 2, 38, engine.colors.text, 11);
        }
        if (showBoundary) {
            ctx.beginPath();
            for (let i = 0; i < pts.length; i++) {
                const [sx, sy] = engine.toScreen(pts[i][0], pts[i][1]);
                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
            }
            ctx.closePath();
            ctx.strokeStyle = engine.colors.orange;
            ctx.lineWidth = 4;
            ctx.stroke();
            engine.screenText('\u2202A = boundary (orange outline)', engine.width / 2, 20, engine.colors.orange, 14);
            engine.screenText('\u2202A = \u0100 \\ A\u00B0 : points that are limits of both A and X\\A', engine.width / 2, 38, engine.colors.text, 11);
        }
    }
    draw();
    return engine;
}
}
],
exercises: [
{
    question: 'Prove that every open ball \\(B(x, r)\\) is an open set.',
    hint: 'For \\(y \\in B(x, r)\\), consider the radius \\(\\rho = r - d(x, y) > 0\\) and show \\(B(y, \\rho) \\subseteq B(x, r)\\).',
    solution: '<p>Let \\(y \\in B(x,r)\\), so \\(d(x,y) < r\\). Set \\(\\rho = r - d(x,y) > 0\\). For any \\(z \\in B(y, \\rho)\\), we have \\(d(x,z) \\leq d(x,y) + d(y,z) < d(x,y) + \\rho = r\\), so \\(z \\in B(x,r)\\). Thus \\(B(y, \\rho) \\subseteq B(x,r)\\), proving \\(B(x,r)\\) is open.</p>'
},
{
    question: 'In the discrete metric on a set \\(X\\), describe all open balls \\(B(x, r)\\) for various values of \\(r\\). Which subsets of \\(X\\) are open?',
    hint: 'Consider the cases \\(r \\leq 1\\) and \\(r > 1\\) separately.',
    solution: '<p>If \\(0 < r \\leq 1\\), then \\(B(x, r) = \\{x\\}\\) (only \\(x\\) has distance \\(< r\\) from itself). If \\(r > 1\\), then \\(B(x, r) = X\\) (all points have distance \\(\\leq 1 < r\\) from \\(x\\)). Since every singleton \\(\\{x\\} = B(x, 1)\\) is open, and any set is a union of singletons, <em>every subset of \\(X\\) is open</em> in the discrete metric. This is the discrete topology.</p>'
},
{
    question: 'Give an example of a subset of \\(\\mathbb{R}\\) (with the usual metric) that is neither open nor closed. Compute its interior, closure, and boundary.',
    hint: 'Try the half-open interval \\([0, 1)\\) or the rationals \\(\\mathbb{Q}\\).',
    solution: '<p>Take \\(A = [0,1)\\). It is not open because \\(0 \\in A\\) but no ball around \\(0\\) fits inside \\(A\\). It is not closed because \\(1\\) is a limit point not in \\(A\\). Interior: \\(A^\\circ = (0,1)\\). Closure: \\(\\overline{A} = [0,1]\\). Boundary: \\(\\partial A = \\{0, 1\\}\\).</p>'
}
],
},
// ===== SECTION 3: Completeness and Completion =====
{
id: 'sec-completeness',
title: 'Completeness and Completion',
content: `
<p>Completeness — the guarantee that "Cauchy sequences converge" — is the most important structural property a metric space can have. Without it, limits can "escape" the space, and analysis becomes unreliable. Functional analysis lives almost exclusively in complete spaces.</p>

<div class="env-block definition">
<div class="env-title">Definition 0.13 (Cauchy Sequence)</div>
<div class="env-body">
<p>A sequence \\((x_n)\\) in a metric space \\((X, d)\\) is <strong>Cauchy</strong> if for every \\(\\varepsilon > 0\\), there exists \\(N \\in \\mathbb{N}\\) such that:</p>
\\[m, n \\geq N \\implies d(x_m, x_n) < \\varepsilon\\]
<p>Intuitively, the terms become arbitrarily close to <em>each other</em> (not necessarily to a specific limit).</p>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 0.14 (Complete Metric Space)</div>
<div class="env-body">
<p>A metric space \\((X, d)\\) is <strong>complete</strong> if every Cauchy sequence in \\(X\\) converges to a limit in \\(X\\).</p>
</div>
</div>

<div class="env-block intuition">
<div class="env-title">Intuition: Completeness as "No Holes"</div>
<div class="env-body">
<p>Think of \\(\\mathbb{Q}\\) with the usual metric. The sequence \\(1, 1.4, 1.41, 1.414, \\ldots\\) converges to \\(\\sqrt{2}\\), which is <em>not</em> in \\(\\mathbb{Q}\\). The space has a "hole" where \\(\\sqrt{2}\\) should be. Completeness means there are no such holes: if a sequence "wants" to converge (its terms cluster tighter and tighter), the limit actually exists in the space.</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-cauchy-animation"></div>

<div class="env-block theorem">
<div class="env-title">Theorem 0.15 (Key Examples)</div>
<div class="env-body">
<ul>
<li>\\(\\mathbb{R}^n\\) with any \\(\\ell^p\\) metric is complete.</li>
<li>\\((C[0,1], d_\\infty)\\) is complete: the uniform limit of continuous functions is continuous.</li>
<li>\\(\\mathbb{Q}\\) with the usual metric is <strong>not</strong> complete.</li>
<li>The open interval \\((0, 1)\\) with the usual metric is <strong>not</strong> complete (the sequence \\(1/n\\) is Cauchy but converges to \\(0 \\notin (0,1)\\)).</li>
</ul>
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Proposition 0.16</div>
<div class="env-body">
<p>Every convergent sequence is Cauchy. The converse holds if and only if the space is complete.</p>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof (Convergent \\(\\Rightarrow\\) Cauchy)</div>
<div class="env-body">
<p>If \\(x_n \\to x\\), given \\(\\varepsilon > 0\\), pick \\(N\\) with \\(d(x_n, x) < \\varepsilon/2\\) for \\(n \\geq N\\). Then for \\(m, n \\geq N\\): \\(d(x_m, x_n) \\leq d(x_m, x) + d(x, x_n) < \\varepsilon\\). \\(\\square\\)</p>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 0.17 (Completion)</div>
<div class="env-body">
<p>A <strong>completion</strong> of a metric space \\((X, d)\\) is a complete metric space \\((\\hat{X}, \\hat{d})\\) together with an isometric embedding \\(\\iota: X \\to \\hat{X}\\) such that \\(\\iota(X)\\) is dense in \\(\\hat{X}\\).</p>
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 0.18 (Existence and Uniqueness of Completion)</div>
<div class="env-body">
<p>Every metric space has a completion, and it is unique up to isometry. The construction identifies points of \\(\\hat{X}\\) with equivalence classes of Cauchy sequences in \\(X\\).</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-completion-filling"></div>

<div class="env-block example">
<div class="env-title">Example 0.19 (\\(\\mathbb{Q} \\to \\mathbb{R}\\))</div>
<div class="env-body">
<p>The completion of \\(\\mathbb{Q}\\) is \\(\\mathbb{R}\\). This is one construction of the real numbers (Cauchy sequences of rationals, modulo the equivalence \\((a_n) \\sim (b_n)\\) iff \\(|a_n - b_n| \\to 0\\)).</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Why This Matters</div>
<div class="env-body">
<p>In functional analysis, a <strong>Banach space</strong> is a complete normed space, and a <strong>Hilbert space</strong> is a complete inner product space. Completeness is not optional — it is required for the fundamental theorems (Baire category, uniform boundedness, open mapping, closed graph). Starting from an incomplete normed space, we always pass to its completion.</p>
</div>
</div>
`,
visualizations: [
{
id: 'viz-cauchy-animation',
title: 'Cauchy Sequence Convergence',
description: 'A Cauchy sequence in \\(\\mathbb{R}^2\\) spiraling toward its limit. The shrinking circle shows the "Cauchy tube" — eventually all terms fit inside any \\(\\varepsilon\\)-ball.',
setup: function(body, controls) {
    const engine = new VizEngine(body, {width: 560, height: 380, scale: 40});
    let nTerms = 20;
    let animating = false;
    let currentN = 0;
    VizEngine.createSlider(controls, 'Terms', 5, 50, 20, 1, function(v) { nTerms = Math.round(v); currentN = 0; draw(); });
    const playBtn = VizEngine.createButton(controls, 'Animate', function() {
        if (animating) { engine.stopAnimation(); animating = false; playBtn.textContent = 'Animate'; return; }
        animating = true; currentN = 0; playBtn.textContent = 'Stop';
        engine.animate(function() {
            currentN += 0.15;
            if (currentN > nTerms) { currentN = 0; }
            draw();
        });
    });

    // Generate a spiral Cauchy sequence converging to (1, 1)
    const limX = 1, limY = 1;
    function seqPoint(n) {
        const r = 3 / (n + 1);
        const angle = n * 1.2;
        return [limX + r * Math.cos(angle), limY + r * Math.sin(angle)];
    }

    function draw() {
        engine.clear();
        engine.drawGrid();
        engine.drawAxes();
        const showN = Math.min(Math.floor(currentN) + 1, nTerms);

        // Draw epsilon tube around later terms
        if (showN > 3) {
            const eps = 3 / showN;
            engine.drawCircle(limX, limY, eps, engine.colors.teal + '15', engine.colors.teal + '50', 1);
            engine.drawText('\u03B5=' + eps.toFixed(2), limX + eps + 0.3, limY + eps + 0.3, engine.colors.teal, 11);
        }

        // Draw limit point
        engine.drawPoint(limX, limY, engine.colors.red, 'limit', 6);

        // Draw sequence trail
        const ctx = engine.ctx;
        ctx.strokeStyle = engine.colors.blue + '40';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < showN; i++) {
            const [px, py] = seqPoint(i);
            const [sx, sy] = engine.toScreen(px, py);
            if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
        }
        ctx.stroke();

        // Draw points
        for (let i = 0; i < showN; i++) {
            const [px, py] = seqPoint(i);
            const alpha = i === showN - 1 ? 'ff' : '80';
            const sz = i === showN - 1 ? 5 : 3;
            engine.drawPoint(px, py, engine.colors.blue + alpha, i === showN - 1 ? 'x\u2099' : null, sz);
        }

        engine.screenText('Cauchy sequence: terms ' + showN + '/' + nTerms, engine.width / 2, 20, engine.colors.white, 14);
    }
    draw();
    return engine;
}
},
{
id: 'viz-completion-filling',
title: 'Completing a Space: Filling the Gaps',
description: 'Rational numbers (blue) are "sparse" on the real line. The completion fills in irrationals (orange) so that every Cauchy sequence has a limit.',
setup: function(body, controls) {
    const engine = new VizEngine(body, {width: 560, height: 380, scale: 60, originY: 190});
    let resolution = 10;
    VizEngine.createSlider(controls, 'Density', 3, 50, 10, 1, function(v) { resolution = Math.round(v); draw(); });
    VizEngine.createButton(controls, 'Show \u221A2 sequence', function() { showSqrt2 = !showSqrt2; draw(); });
    let showSqrt2 = false;

    function draw() {
        engine.clear();
        const ctx = engine.ctx;

        // Draw number line
        ctx.strokeStyle = engine.colors.axis; ctx.lineWidth = 2;
        const yLine = engine.originY;
        ctx.beginPath(); ctx.moveTo(20, yLine); ctx.lineTo(engine.width - 20, yLine); ctx.stroke();

        // Tick marks
        ctx.fillStyle = engine.colors.text; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
        for (let i = -4; i <= 4; i++) {
            const sx = engine.originX + i * engine.scale;
            ctx.beginPath(); ctx.moveTo(sx, yLine - 5); ctx.lineTo(sx, yLine + 5); ctx.stroke();
            ctx.fillText(i.toString(), sx, yLine + 18);
        }

        // Draw rationals p/q with |p/q| <= 4, q <= resolution
        const rationals = new Set();
        for (let q = 1; q <= resolution; q++) {
            for (let p = -4 * q; p <= 4 * q; p++) {
                const val = p / q;
                if (val < -4 || val > 4) continue;
                const key = val.toFixed(8);
                if (!rationals.has(key)) {
                    rationals.add(key);
                    const sx = engine.originX + val * engine.scale;
                    const yOff = 10 + (q % 3) * 5;
                    ctx.fillStyle = engine.colors.blue;
                    ctx.beginPath(); ctx.arc(sx, yLine - yOff, 2, 0, Math.PI * 2); ctx.fill();
                }
            }
        }

        // Draw some irrational points
        const irrationals = [Math.sqrt(2), -Math.sqrt(2), Math.PI, -Math.PI, Math.E, Math.sqrt(3), -Math.sqrt(3), Math.sqrt(5)];
        for (const val of irrationals) {
            if (val < -4 || val > 4) continue;
            const sx = engine.originX + val * engine.scale;
            ctx.fillStyle = engine.colors.orange;
            ctx.beginPath(); ctx.arc(sx, yLine + 25, 3, 0, Math.PI * 2); ctx.fill();
        }

        engine.screenText('Rationals Q (blue, above line)', engine.width / 2, 25, engine.colors.blue, 13);
        engine.screenText('Irrationals (orange, below line) = "holes" filled by completion', engine.width / 2, 45, engine.colors.orange, 12);

        if (showSqrt2) {
            // Show successive rational approximations to sqrt(2)
            const approx = [1, 1.4, 1.41, 1.414, 1.4142, 1.41421];
            const ySeq = yLine + 70;
            ctx.strokeStyle = engine.colors.teal; ctx.lineWidth = 1;
            for (let i = 0; i < approx.length; i++) {
                const sx = engine.originX + approx[i] * engine.scale;
                ctx.fillStyle = engine.colors.teal;
                ctx.beginPath(); ctx.arc(sx, ySeq, 4, 0, Math.PI * 2); ctx.fill();
                if (i > 0) {
                    const prevSx = engine.originX + approx[i - 1] * engine.scale;
                    ctx.beginPath(); ctx.moveTo(prevSx, ySeq); ctx.lineTo(sx, ySeq); ctx.stroke();
                }
            }
            // Target
            const sqrtSx = engine.originX + Math.sqrt(2) * engine.scale;
            ctx.fillStyle = engine.colors.red;
            ctx.beginPath(); ctx.arc(sqrtSx, ySeq, 5, 0, Math.PI * 2); ctx.fill();
            engine.screenText('Cauchy seq in Q converging to \u221A2 \u2209 Q', engine.width / 2, ySeq + 25, engine.colors.teal, 12);
            engine.screenText('\u221A2', sqrtSx + 10, ySeq - 10, engine.colors.red, 13);
        }

        engine.screenText('Density: fractions with denominator \u2264 ' + resolution, engine.width / 2, engine.height - 15, engine.colors.text, 11);
    }
    draw();
    return engine;
}
}
],
exercises: [
{
    question: 'Prove that the sequence \\(x_n = \\sum_{k=0}^{n} \\frac{1}{k!}\\) is Cauchy in \\(\\mathbb{R}\\). What is its limit?',
    hint: 'For \\(m > n\\), estimate \\(|x_m - x_n| = \\sum_{k=n+1}^{m} \\frac{1}{k!}\\). Compare \\(\\frac{1}{k!}\\) with a geometric series.',
    solution: '<p>For \\(m > n\\), \\(|x_m - x_n| = \\sum_{k=n+1}^{m} \\frac{1}{k!} \\leq \\sum_{k=n+1}^{m} \\frac{1}{2^k} \\leq \\frac{1}{2^n}\\) (since \\(k! \\geq 2^k\\) for \\(k \\geq 3\\)). Given \\(\\varepsilon > 0\\), choose \\(N\\) with \\(2^{-N} < \\varepsilon\\). Then \\(m, n \\geq N \\implies |x_m - x_n| < \\varepsilon\\). The limit is \\(e = \\sum_{k=0}^{\\infty} \\frac{1}{k!}\\).</p>'
},
{
    question: 'Show that \\((0, 1)\\) with the usual metric is not complete by exhibiting a Cauchy sequence that does not converge in \\((0,1)\\). Then show that \\([0,1]\\) is complete.',
    hint: 'For \\((0,1)\\): try \\(x_n = 1/n\\). For \\([0,1]\\): a closed subset of a complete space is complete.',
    solution: '<p>In \\((0,1)\\), the sequence \\(x_n = 1/(n+1)\\) satisfies \\(|x_m - x_n| \\to 0\\) so it is Cauchy, but its limit \\(0 \\notin (0,1)\\). For \\([0,1]\\): it is a closed subset of \\(\\mathbb{R}\\), which is complete. A closed subset of a complete metric space is complete (if \\((x_n)\\) is Cauchy in \\(F\\), it converges to some \\(x \\in X\\) by completeness of \\(X\\); since \\(F\\) is closed and contains all its limit points, \\(x \\in F\\)).</p>'
},
{
    question: 'Let \\(X = C[0,1]\\) with the metric \\(d_1(f,g) = \\int_0^1 |f(t) - g(t)|\\, dt\\). Is \\((X, d_1)\\) complete? Justify your answer.',
    hint: 'Consider piecewise linear functions that approximate a step function (which is discontinuous).',
    solution: '<p>No, \\((C[0,1], d_1)\\) is <strong>not</strong> complete. Define \\(f_n\\) to be the piecewise linear function that is 0 on \\([0, 1/2 - 1/n]\\), 1 on \\([1/2 + 1/n, 1]\\), and linear in between. Each \\(f_n\\) is continuous, and \\(d_1(f_m, f_n) \\to 0\\), so \\((f_n)\\) is Cauchy. But the "limit" is the step function \\(\\mathbf{1}_{[1/2, 1]}\\), which is <em>not</em> continuous. The completion of \\((C[0,1], d_1)\\) is the space \\(L^1[0,1]\\), a central object in functional analysis.</p>'
}
],
},
// ===== SECTION 4: Compactness =====
{
id: 'sec-compactness',
title: 'Compactness',
content: `
<p>Compactness is a finiteness condition that gives us extraordinary analytic power. In compact spaces, continuous functions achieve their bounds, sequences have convergent subsequences, and many otherwise difficult problems become tractable. Understanding compactness in metric spaces is essential because <strong>in infinite-dimensional spaces, compactness is rare and precious</strong>.</p>

<div class="env-block definition">
<div class="env-title">Definition 0.20 (Compactness — Three Equivalent Forms)</div>
<div class="env-body">
<p>For a metric space \\((X, d)\\), the following are equivalent:</p>
<ol>
<li><strong>Open cover compactness:</strong> Every open cover of \\(X\\) has a finite subcover.</li>
<li><strong>Sequential compactness:</strong> Every sequence in \\(X\\) has a convergent subsequence.</li>
<li><strong>Complete + totally bounded:</strong> \\(X\\) is complete and for every \\(\\varepsilon > 0\\), \\(X\\) can be covered by finitely many \\(\\varepsilon\\)-balls.</li>
</ol>
</div>
</div>

<div class="env-block intuition">
<div class="env-title">Intuition</div>
<div class="env-body">
<p>Compact spaces are "small enough" that you cannot escape to infinity, even along subsequences. Think of a compact set as a "bounded jail with no holes in the walls" — every sequence has to cluster somewhere inside.</p>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 0.21 (Total Boundedness)</div>
<div class="env-body">
<p>A metric space \\(X\\) is <strong>totally bounded</strong> if for every \\(\\varepsilon > 0\\), there exist finitely many points \\(x_1, \\ldots, x_N \\in X\\) such that \\(X = \\bigcup_{i=1}^{N} B(x_i, \\varepsilon)\\). The set \\(\\{x_1, \\ldots, x_N\\}\\) is called an <strong>\\(\\varepsilon\\)-net</strong>.</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-epsilon-net"></div>

<div class="env-block theorem">
<div class="env-title">Theorem 0.22 (Heine-Borel)</div>
<div class="env-body">
<p>In \\(\\mathbb{R}^n\\) (with the Euclidean metric), a set is compact if and only if it is <strong>closed and bounded</strong>.</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Warning: Heine-Borel Fails in Infinite Dimensions!</div>
<div class="env-body">
<p>In the space \\(\\ell^2\\) of square-summable sequences, the closed unit ball \\(\\overline{B}(0, 1)\\) is closed and bounded but <strong>not compact</strong>. The sequence \\(e_n = (0, \\ldots, 0, 1, 0, \\ldots)\\) (1 in position \\(n\\)) satisfies \\(\\|e_n\\| = 1\\) and \\(\\|e_n - e_m\\| = \\sqrt{2}\\) for \\(n \\neq m\\), so it has no convergent subsequence. This failure is a central theme of functional analysis.</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-no-compact-ball"></div>

<div class="env-block theorem">
<div class="env-title">Theorem 0.23 (Properties of Compact Sets)</div>
<div class="env-body">
<ol>
<li>A compact subset of a metric space is closed and bounded.</li>
<li>A closed subset of a compact space is compact.</li>
<li>A continuous image of a compact set is compact.</li>
<li>A continuous real-valued function on a compact set attains its maximum and minimum.</li>
</ol>
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 0.24 (Arzel\u00E0-Ascoli)</div>
<div class="env-body">
<p>A subset \\(\\mathcal{F} \\subseteq C[0,1]\\) has compact closure (in the sup metric) if and only if:</p>
<ol>
<li>\\(\\mathcal{F}\\) is <strong>uniformly bounded</strong>: \\(\\exists M,\\ \\sup_{f \\in \\mathcal{F}} \\|f\\|_\\infty \\leq M\\)</li>
<li>\\(\\mathcal{F}\\) is <strong>equicontinuous</strong>: \\(\\forall \\varepsilon > 0,\\ \\exists \\delta > 0\\) such that \\(|s - t| < \\delta \\implies |f(s) - f(t)| < \\varepsilon\\) for <em>all</em> \\(f \\in \\mathcal{F}\\)</li>
</ol>
<p>This is the correct generalization of Heine-Borel to infinite-dimensional function spaces, and is one of the most useful results in analysis.</p>
</div>
</div>
`,
visualizations: [
{
id: 'viz-epsilon-net',
title: '\\(\\varepsilon\\)-Net Covering',
description: 'A totally bounded set covered by \\(\\varepsilon\\)-balls. Decrease \\(\\varepsilon\\) to see that more balls are needed, but finitely many always suffice.',
setup: function(body, controls) {
    const engine = new VizEngine(body, {width: 560, height: 380, scale: 40});
    let eps = 1.5;
    VizEngine.createSlider(controls, '\u03B5', 0.3, 3, 1.5, 0.1, function(v) { eps = v; draw(); });

    // The "set" is a filled region (an ellipse-like shape)
    const setPoints = [];
    for (let i = 0; i < 200; i++) {
        const angle = 2 * Math.PI * i / 200;
        const r = 3 + 0.5 * Math.sin(3 * angle);
        setPoints.push([r * Math.cos(angle), r * Math.sin(angle) * 0.7]);
    }

    function inSet(x, y) {
        const angle = Math.atan2(y / 0.7, x);
        const r = 3 + 0.5 * Math.sin(3 * angle);
        return Math.sqrt(x * x + (y / 0.7) * (y / 0.7)) <= r;
    }

    function draw() {
        engine.clear();
        engine.drawGrid();
        engine.drawAxes();
        const ctx = engine.ctx;

        // Draw the set boundary
        ctx.beginPath();
        for (let i = 0; i < setPoints.length; i++) {
            const [sx, sy] = engine.toScreen(setPoints[i][0], setPoints[i][1]);
            if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
        }
        ctx.closePath();
        ctx.fillStyle = engine.colors.white + '08';
        ctx.fill();
        ctx.strokeStyle = engine.colors.white + '30';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Generate epsilon-net via greedy covering
        const centers = [];
        const gridStep = eps * 0.8;
        for (let x = -4; x <= 4; x += gridStep) {
            for (let y = -3; y <= 3; y += gridStep) {
                if (!inSet(x, y)) continue;
                let covered = false;
                for (const c of centers) {
                    if (Math.sqrt((x - c[0]) * (x - c[0]) + (y - c[1]) * (y - c[1])) < eps * 0.7) {
                        covered = true; break;
                    }
                }
                if (!covered) centers.push([x, y]);
            }
        }

        // Draw epsilon balls
        for (const c of centers) {
            engine.drawCircle(c[0], c[1], eps, engine.colors.teal + '12', engine.colors.teal + '40', 1);
            engine.drawPoint(c[0], c[1], engine.colors.teal, null, 3);
        }

        engine.screenText(centers.length + ' balls of radius \u03B5=' + eps.toFixed(1) + ' cover the set', engine.width / 2, 20, engine.colors.white, 14);
        engine.screenText('Totally bounded: finite \u03B5-net exists for every \u03B5 > 0', engine.width / 2, engine.height - 15, engine.colors.text, 11);
    }
    draw();
    return engine;
}
},
{
id: 'viz-no-compact-ball',
title: 'Failure of Heine-Borel in \\(\\ell^2\\)',
description: 'The standard basis vectors \\(e_1, e_2, \\ldots\\) in \\(\\ell^2\\) all lie on the unit sphere, yet \\(\\|e_i - e_j\\| = \\sqrt{2}\\) for \\(i \\neq j\\). No subsequence can converge.',
setup: function(body, controls) {
    const engine = new VizEngine(body, {width: 560, height: 380, scale: 100, originX: 280, originY: 280});
    let numVecs = 8;
    VizEngine.createSlider(controls, 'Vectors', 3, 20, 8, 1, function(v) { numVecs = Math.round(v); draw(); });

    function draw() {
        engine.clear();
        const ctx = engine.ctx;

        // Draw "unit circle" as reference
        const cx = engine.originX, cy = engine.originY;
        ctx.strokeStyle = engine.colors.axis + '60';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.arc(cx, cy - engine.scale * 0.3, engine.scale, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw basis vectors arranged in a fan (projecting high-dim onto 2D)
        const colors = [engine.colors.blue, engine.colors.teal, engine.colors.orange, engine.colors.green,
                        engine.colors.purple, engine.colors.red, engine.colors.yellow, engine.colors.pink,
                        engine.colors.blue, engine.colors.teal, engine.colors.orange, engine.colors.green,
                        engine.colors.purple, engine.colors.red, engine.colors.yellow, engine.colors.pink,
                        engine.colors.blue, engine.colors.teal, engine.colors.orange, engine.colors.green];

        for (let i = 0; i < numVecs; i++) {
            const angle = (Math.PI * i) / (numVecs - 1 || 1);
            const ex = Math.cos(angle);
            const ey = Math.sin(angle) + 0.3;
            engine.drawVector(0, 0, ex, ey, colors[i % colors.length], 'e' + (i + 1), 2);
        }

        // Show distance between adjacent vectors
        if (numVecs >= 2) {
            const a1 = 0;
            const a2 = Math.PI / (numVecs - 1 || 1);
            const midAngle = a2 / 2;
            const midX = 0.5 * Math.cos(midAngle);
            const midY = 0.5 * Math.sin(midAngle) + 0.3;
            engine.drawText('\u221A2', midX, midY + 0.2, engine.colors.red, 14);
        }

        engine.screenText('||e_i - e_j|| = \u221A2 for all i \u2260 j', engine.width / 2, 20, engine.colors.red, 14);
        engine.screenText('No convergent subsequence \u2192 unit ball not compact in \u2113\u00B2', engine.width / 2, 40, engine.colors.text, 12);
        engine.screenText(numVecs + ' basis vectors on the unit sphere', engine.width / 2, engine.height - 15, engine.colors.text, 11);
    }
    draw();
    return engine;
}
}
],
exercises: [
{
    question: 'Prove that a compact metric space is complete.',
    hint: 'Let \\((x_n)\\) be Cauchy. Use sequential compactness to extract a convergent subsequence, then show the full sequence converges to the same limit.',
    solution: '<p>Let \\((x_n)\\) be Cauchy in a compact space \\(X\\). By sequential compactness, there is a subsequence \\(x_{n_k} \\to x\\) for some \\(x \\in X\\). Given \\(\\varepsilon > 0\\), pick \\(K\\) with \\(d(x_{n_k}, x) < \\varepsilon/2\\) for \\(k \\geq K\\), and \\(N\\) with \\(d(x_m, x_n) < \\varepsilon/2\\) for \\(m,n \\geq N\\). For \\(n \\geq \\max(N, n_K)\\), pick \\(k \\geq K\\) with \\(n_k \\geq N\\). Then \\(d(x_n, x) \\leq d(x_n, x_{n_k}) + d(x_{n_k}, x) < \\varepsilon\\). So \\(x_n \\to x\\).</p>'
},
{
    question: 'Show that a totally bounded metric space is bounded (i.e., has finite diameter), but give an example showing the converse fails.',
    hint: 'Cover \\(X\\) with finitely many balls of radius 1. Use the triangle inequality. For the converse, think of \\(\\ell^2\\).',
    solution: '<p>If \\(X\\) is totally bounded, cover it by balls \\(B(x_1, 1), \\ldots, B(x_N, 1)\\). For any \\(a, b \\in X\\), we have \\(a \\in B(x_i, 1)\\) and \\(b \\in B(x_j, 1)\\) for some \\(i, j\\), so \\(d(a,b) \\leq d(a, x_i) + d(x_i, x_j) + d(x_j, b) < 1 + \\max d(x_i, x_j) + 1\\), giving finite diameter. Converse fails: in \\(\\ell^2\\), the closed unit ball is bounded (diameter 2) but not totally bounded — the basis vectors \\(e_n\\) are distance \\(\\sqrt{2}\\) apart, so no finite \\(\\varepsilon\\)-net with \\(\\varepsilon < \\sqrt{2}/2\\) exists.</p>'
},
{
    question: '(Arzel\\`a-Ascoli) Let \\(f_n(t) = t^n\\) on \\([0, 1]\\). Is the set \\(\\{f_n : n \\geq 1\\}\\) equicontinuous? Does it have compact closure in \\(C[0,1]\\)?',
    hint: 'Check equicontinuity at \\(t = 1\\). Near \\(t = 1\\), the functions become steeper and steeper.',
    solution: '<p>The set is uniformly bounded (\\(\\|f_n\\|_\\infty = 1\\)). However, it is <strong>not equicontinuous</strong> at \\(t = 1\\): for \\(\\varepsilon = 1/2\\), we need \\(|1 - t^n| < 1/2\\), i.e., \\(t^n > 1/2\\), i.e., \\(t > (1/2)^{1/n}\\). As \\(n \\to \\infty\\), \\((1/2)^{1/n} \\to 1\\), so the required \\(\\delta\\) shrinks to 0. By Arzel\\`a-Ascoli, the closure is <strong>not compact</strong>. Indeed, \\(f_n \\to \\mathbf{1}_{\\{1\\}}\\) pointwise, which is discontinuous, so no subsequence converges uniformly to a continuous function on \\([0,1]\\).</p>'
},
{
    question: 'Prove that a compact metric space is separable (has a countable dense subset).',
    hint: 'For each \\(n \\in \\mathbb{N}\\), use total boundedness to find a finite \\(1/n\\)-net. Take the union over all \\(n\\).',
    solution: '<p>For each \\(n \\geq 1\\), since \\(X\\) is totally bounded, there exists a finite \\(1/n\\)-net \\(F_n\\). Let \\(D = \\bigcup_{n=1}^{\\infty} F_n\\), which is a countable union of finite sets, hence countable. For any \\(x \\in X\\) and \\(\\varepsilon > 0\\), pick \\(n > 1/\\varepsilon\\); then some \\(y \\in F_n \\subseteq D\\) has \\(d(x,y) < 1/n < \\varepsilon\\). So \\(D\\) is dense.</p>'
}
],
},
// ===== SECTION 5: Continuous Maps =====
{
id: 'sec-continuous-maps',
title: 'Continuous Maps',
content: `
<p>Continuous maps are the morphisms of the category of metric spaces — they are the structure-preserving maps. A deep understanding of continuity in metric spaces prepares us for the bounded linear operators that are the central objects of functional analysis.</p>

<div class="env-block definition">
<div class="env-title">Definition 0.25 (Continuity)</div>
<div class="env-body">
<p>Let \\((X, d_X)\\) and \\((Y, d_Y)\\) be metric spaces. A map \\(f: X \\to Y\\) is <strong>continuous at \\(x_0\\)</strong> if:</p>
\\[\\forall \\varepsilon > 0,\\ \\exists \\delta > 0 \\text{ such that } d_X(x, x_0) < \\delta \\implies d_Y(f(x), f(x_0)) < \\varepsilon\\]
<p>\\(f\\) is <strong>continuous</strong> if it is continuous at every point of \\(X\\).</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-epsilon-delta"></div>

<div class="env-block theorem">
<div class="env-title">Theorem 0.26 (Equivalent Characterizations of Continuity)</div>
<div class="env-body">
<p>For \\(f: X \\to Y\\) between metric spaces, the following are equivalent:</p>
<ol>
<li>\\(f\\) is continuous (\\(\\varepsilon\\)-\\(\\delta\\) definition).</li>
<li><strong>Sequential:</strong> \\(x_n \\to x \\implies f(x_n) \\to f(x)\\) for every sequence.</li>
<li><strong>Topological:</strong> \\(f^{-1}(U)\\) is open in \\(X\\) for every open \\(U \\subseteq Y\\).</li>
</ol>
</div>
</div>

<div class="env-block proof">
<div class="env-title">Proof (1 \\(\\Leftrightarrow\\) 2, sketch)</div>
<div class="env-body">
<p>\\((1 \\Rightarrow 2)\\): Given \\(\\varepsilon > 0\\), pick \\(\\delta\\) from continuity at \\(x\\). Since \\(x_n \\to x\\), eventually \\(d(x_n, x) < \\delta\\), so \\(d(f(x_n), f(x)) < \\varepsilon\\).</p>
<p>\\((2 \\Rightarrow 1)\\): Contrapositive. If \\(f\\) is not \\(\\varepsilon\\)-\\(\\delta\\) continuous at \\(x\\), then for some \\(\\varepsilon_0\\) and every \\(\\delta = 1/n\\), pick \\(x_n\\) with \\(d(x_n, x) < 1/n\\) but \\(d(f(x_n), f(x)) \\geq \\varepsilon_0\\). Then \\(x_n \\to x\\) but \\(f(x_n) \\not\\to f(x)\\). \\(\\square\\)</p>
</div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 0.27 (Uniform Continuity and Lipschitz Maps)</div>
<div class="env-body">
<p>\\(f: X \\to Y\\) is:</p>
<ul>
<li><strong>Uniformly continuous</strong> if \\(\\delta\\) depends only on \\(\\varepsilon\\) (not on the point): \\(\\forall \\varepsilon > 0,\\ \\exists \\delta > 0,\\ \\forall x, x' \\in X:\\) \\(d_X(x, x') < \\delta \\implies d_Y(f(x), f(x')) < \\varepsilon\\)</li>
<li><strong>Lipschitz</strong> with constant \\(L\\) if \\(d_Y(f(x), f(x')) \\leq L \\cdot d_X(x, x')\\) for all \\(x, x'\\).</li>
<li>An <strong>isometry</strong> if \\(d_Y(f(x), f(x')) = d_X(x, x')\\) for all \\(x, x'\\).</li>
</ul>
<p>We have: isometry \\(\\Rightarrow\\) Lipschitz \\(\\Rightarrow\\) uniformly continuous \\(\\Rightarrow\\) continuous.</p>
</div>
</div>

<div class="viz-placeholder" data-viz="viz-lipschitz"></div>

<div class="env-block definition">
<div class="env-title">Definition 0.28 (Homeomorphism)</div>
<div class="env-body">
<p>A bijection \\(f: X \\to Y\\) is a <strong>homeomorphism</strong> if both \\(f\\) and \\(f^{-1}\\) are continuous. Homeomorphic spaces have identical topological properties.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 0.29</div>
<div class="env-body">
<p>The map \\(f: (0, 1) \\to \\mathbb{R}\\) given by \\(f(x) = \\tan(\\pi x - \\pi/2)\\) is a homeomorphism. So \\((0, 1)\\) and \\(\\mathbb{R}\\) are homeomorphic — but not isometric! A homeomorphism preserves topology but may distort distances.</p>
</div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 0.30 (Continuous Functions on Compact Spaces)</div>
<div class="env-body">
<p>If \\(X\\) is compact and \\(f: X \\to Y\\) is continuous, then:</p>
<ol>
<li>\\(f(X)\\) is compact.</li>
<li>If \\(Y = \\mathbb{R}\\), then \\(f\\) attains its maximum and minimum.</li>
<li>\\(f\\) is <strong>uniformly continuous</strong>.</li>
<li>If \\(f\\) is a continuous bijection onto \\(Y\\), then \\(f\\) is a homeomorphism (the inverse is automatically continuous).</li>
</ol>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Looking Ahead</div>
<div class="env-body">
<p>In functional analysis, we replace general continuous maps by <strong>bounded linear operators</strong> between normed spaces. Linearity plus continuity gives remarkably strong structure. The operator norm \\(\\|T\\| = \\sup_{\\|x\\| \\leq 1} \\|Tx\\|\\) turns the space of operators itself into a normed space. The interplay between the topology of the domain, the range, and the operator space drives the entire subject.</p>
</div>
</div>
`,
visualizations: [
{
id: 'viz-epsilon-delta',
title: 'The \\(\\varepsilon\\)-\\(\\delta\\) Definition of Continuity',
description: 'For a continuous function \\(f\\), given any \\(\\varepsilon\\)-band around \\(f(x_0)\\) in the range, there exists a \\(\\delta\\)-interval around \\(x_0\\) whose image fits inside the band. Drag \\(x_0\\) or adjust \\(\\varepsilon\\).',
setup: function(body, controls) {
    const engine = new VizEngine(body, {width: 560, height: 380, scale: 50, originX: 80, originY: 300});
    let epsilon = 0.8;
    VizEngine.createSlider(controls, '\u03B5', 0.1, 2, 0.8, 0.05, function(v) { epsilon = v; draw(); });

    const x0Drag = engine.addDraggable('x0', 3, 0, engine.colors.blue, 7, function(wx) {
        x0Drag.x = Math.max(0.2, Math.min(wx, 7));
        x0Drag.y = 0;
        draw();
    });

    function func(x) { return 0.3 * x + 0.5 * Math.sin(1.5 * x) + 0.5; }

    function draw() {
        engine.clear();
        const ctx = engine.ctx;
        const ox = engine.originX, oy = engine.originY, sc = engine.scale;

        // Axes
        ctx.strokeStyle = engine.colors.axis; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + 8 * sc, oy); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox, oy - 5 * sc); ctx.stroke();
        ctx.fillStyle = engine.colors.text; ctx.font = '12px sans-serif';
        ctx.textAlign = 'center'; ctx.fillText('x', ox + 8 * sc - 5, oy + 15);
        ctx.fillText('f(x)', ox - 5, oy - 5 * sc + 15);

        const x0 = x0Drag.x;
        const fx0 = func(x0);

        // epsilon band in y
        const yTop = oy - (fx0 + epsilon) * sc;
        const yBot = oy - (fx0 - epsilon) * sc;
        ctx.fillStyle = engine.colors.orange + '15';
        ctx.fillRect(ox, yTop, 8 * sc, yBot - yTop);
        ctx.strokeStyle = engine.colors.orange + '60'; ctx.lineWidth = 1;
        ctx.setLineDash([4, 3]);
        ctx.beginPath(); ctx.moveTo(ox, yTop); ctx.lineTo(ox + 8 * sc, yTop); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(ox, yBot); ctx.lineTo(ox + 8 * sc, yBot); ctx.stroke();
        ctx.setLineDash([]);

        // Find delta: largest interval around x0 where |f(x)-f(x0)| < epsilon
        let deltaL = x0, deltaR = x0;
        for (let t = x0 - 0.01; t >= 0; t -= 0.01) {
            if (Math.abs(func(t) - fx0) >= epsilon) break;
            deltaL = t;
        }
        for (let t = x0 + 0.01; t <= 8; t += 0.01) {
            if (Math.abs(func(t) - fx0) >= epsilon) break;
            deltaR = t;
        }
        const delta = Math.min(x0 - deltaL, deltaR - x0);

        // delta band in x
        const xLeft = ox + (x0 - delta) * sc;
        const xRight = ox + (x0 + delta) * sc;
        ctx.fillStyle = engine.colors.teal + '15';
        ctx.fillRect(xLeft, oy - 5 * sc, xRight - xLeft, 5 * sc);
        ctx.strokeStyle = engine.colors.teal + '60'; ctx.lineWidth = 1;
        ctx.setLineDash([4, 3]);
        ctx.beginPath(); ctx.moveTo(xLeft, oy); ctx.lineTo(xLeft, oy - 5 * sc); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(xRight, oy); ctx.lineTo(xRight, oy - 5 * sc); ctx.stroke();
        ctx.setLineDash([]);

        // Draw curve
        ctx.strokeStyle = engine.colors.blue; ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let i = 0; i <= 300; i++) {
            const x = (i / 300) * 8;
            const y = func(x);
            const sx = ox + x * sc, sy = oy - y * sc;
            if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
        }
        ctx.stroke();

        // Mark x0, f(x0)
        const sx0 = ox + x0 * sc, sy0 = oy - fx0 * sc;
        engine.drawPoint(x0, func(x0), engine.colors.white, null, 5);
        ctx.setLineDash([2, 2]);
        ctx.strokeStyle = engine.colors.white + '50'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(sx0, oy); ctx.lineTo(sx0, sy0); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(ox, sy0); ctx.lineTo(sx0, sy0); ctx.stroke();
        ctx.setLineDash([]);

        engine.screenText('\u03B5 = ' + epsilon.toFixed(2) + '  \u03B4 = ' + delta.toFixed(2), engine.width / 2, 20, engine.colors.white, 14);
        engine.screenText('x\u2080 = ' + x0.toFixed(2) + ', f(x\u2080) = ' + fx0.toFixed(2), engine.width / 2, 40, engine.colors.text, 12);

        // Labels
        ctx.fillStyle = engine.colors.orange; ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
        ctx.fillText('\u03B5-band', ox + 8 * sc + 3, (yTop + yBot) / 2);
        ctx.fillStyle = engine.colors.teal; ctx.textAlign = 'center';
        ctx.fillText('\u03B4', (xLeft + xRight) / 2, oy + 14);

        engine.drawDraggables();
    }
    draw();
    return engine;
}
},
{
id: 'viz-lipschitz',
title: 'Lipschitz Continuity: The Cone Constraint',
description: 'A Lipschitz function with constant \\(L\\) must stay inside a "cone" of slope \\(\\pm L\\) emanating from any point. Drag the reference point and adjust \\(L\\).',
setup: function(body, controls) {
    const engine = new VizEngine(body, {width: 560, height: 380, scale: 40, originX: 80, originY: 300});
    let L = 1.5;
    VizEngine.createSlider(controls, 'L', 0.3, 5, 1.5, 0.1, function(v) { L = v; draw(); });

    const refDrag = engine.addDraggable('ref', 4, 0, engine.colors.orange, 7, function(wx) {
        refDrag.x = Math.max(0.5, Math.min(wx, 9));
        refDrag.y = 0;
        draw();
    });

    function func(x) { return 1.2 * Math.sin(0.8 * x) + 0.3 * x + 1; }

    function draw() {
        engine.clear();
        const ctx = engine.ctx;
        const ox = engine.originX, oy = engine.originY, sc = engine.scale;

        // Axes
        ctx.strokeStyle = engine.colors.axis; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + 10 * sc, oy); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox, oy - 6 * sc); ctx.stroke();

        const x0 = refDrag.x;
        const fx0 = func(x0);

        // Draw cone from (x0, f(x0))
        const px0 = ox + x0 * sc, py0 = oy - fx0 * sc;
        ctx.fillStyle = engine.colors.orange + '10';
        ctx.beginPath();
        ctx.moveTo(px0, py0);
        ctx.lineTo(ox + 10 * sc, py0 - L * (10 - x0) * sc);
        ctx.lineTo(ox + 10 * sc, py0 + L * (10 - x0) * sc);
        ctx.closePath(); ctx.fill();
        ctx.beginPath();
        ctx.moveTo(px0, py0);
        ctx.lineTo(ox, py0 - L * x0 * sc);
        ctx.lineTo(ox, py0 + L * x0 * sc);
        ctx.closePath(); ctx.fill();

        // Cone edges
        ctx.strokeStyle = engine.colors.orange + '50'; ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(ox, py0 + L * x0 * sc);
        ctx.lineTo(px0, py0);
        ctx.lineTo(ox + 10 * sc, py0 - L * (10 - x0) * sc);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(ox, py0 - L * x0 * sc);
        ctx.lineTo(px0, py0);
        ctx.lineTo(ox + 10 * sc, py0 + L * (10 - x0) * sc);
        ctx.stroke();

        // Draw curve
        ctx.strokeStyle = engine.colors.blue; ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let i = 0; i <= 300; i++) {
            const x = (i / 300) * 10;
            const y = func(x);
            const sx = ox + x * sc, sy = oy - y * sc;
            if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
        }
        ctx.stroke();

        // Reference point
        engine.drawPoint(x0, func(x0), engine.colors.orange, null, 6);

        engine.screenText('Lipschitz constant L = ' + L.toFixed(1), engine.width / 2, 20, engine.colors.white, 14);
        engine.screenText('|f(x) - f(x\u2080)| \u2264 L\u00B7|x - x\u2080|: curve stays in the cone', engine.width / 2, engine.height - 15, engine.colors.text, 11);

        engine.drawDraggables();
    }
    draw();
    return engine;
}
}
],
exercises: [
{
    question: 'Prove that \\(f: \\mathbb{R} \\to \\mathbb{R}\\) defined by \\(f(x) = x^2\\) is continuous but not uniformly continuous.',
    hint: 'For continuity, use the identity \\(|x^2 - x_0^2| = |x - x_0||x + x_0|\\). For non-uniform continuity, find sequences \\(x_n, y_n\\) with \\(|x_n - y_n| \\to 0\\) but \\(|f(x_n) - f(y_n)| \\not\\to 0\\).',
    solution: '<p><strong>Continuous:</strong> Given \\(\\varepsilon > 0\\) and \\(x_0\\), restrict to \\(|x - x_0| < 1\\), so \\(|x + x_0| < 2|x_0| + 1\\). Then \\(|x^2 - x_0^2| = |x - x_0| \\cdot |x + x_0| < \\delta(2|x_0| + 1) < \\varepsilon\\) for \\(\\delta = \\min(1, \\varepsilon/(2|x_0| + 1))\\).</p><p><strong>Not uniformly continuous:</strong> Take \\(x_n = n + 1/(2n)\\) and \\(y_n = n\\). Then \\(|x_n - y_n| = 1/(2n) \\to 0\\) but \\(|x_n^2 - y_n^2| = |x_n - y_n||x_n + y_n| = \\frac{1}{2n}(2n + \\frac{1}{2n}) > 1\\). So \\(\\delta\\) must depend on the point.</p>'
},
{
    question: 'Show that if \\(f: X \\to Y\\) is continuous and \\(X\\) is compact, then \\(f\\) is uniformly continuous.',
    hint: 'Assume not. Get sequences with \\(d(x_n, y_n) \\to 0\\) but \\(d(f(x_n), f(y_n)) \\geq \\varepsilon_0\\). Use compactness to extract a convergent subsequence.',
    solution: '<p>Suppose \\(f\\) is not uniformly continuous. Then \\(\\exists \\varepsilon_0 > 0\\) and sequences \\((x_n), (y_n)\\) with \\(d_X(x_n, y_n) < 1/n\\) but \\(d_Y(f(x_n), f(y_n)) \\geq \\varepsilon_0\\). By compactness, \\(x_{n_k} \\to x\\) for some subsequence. Since \\(d(y_{n_k}, x) \\leq d(y_{n_k}, x_{n_k}) + d(x_{n_k}, x) \\to 0\\), also \\(y_{n_k} \\to x\\). By continuity at \\(x\\): \\(f(x_{n_k}) \\to f(x)\\) and \\(f(y_{n_k}) \\to f(x)\\), so \\(d_Y(f(x_{n_k}), f(y_{n_k})) \\to 0\\), contradicting \\(\\geq \\varepsilon_0\\).</p>'
},
{
    question: 'Let \\(f: X \\to Y\\) be a continuous bijection between metric spaces. Give an example showing \\(f^{-1}\\) need not be continuous. Why does this not happen when \\(X\\) is compact?',
    hint: 'Try \\(X = [0, 2\\pi)\\), \\(Y = S^1\\) (the unit circle), \\(f(t) = (\\cos t, \\sin t)\\).',
    solution: '<p>The map \\(f: [0, 2\\pi) \\to S^1\\) given by \\(f(t) = (\\cos t, \\sin t)\\) is a continuous bijection, but \\(f^{-1}\\) is not continuous at \\((1,0)\\): as we approach \\((1,0)\\) from "below" on the circle, \\(f^{-1}\\) jumps from near \\(2\\pi\\) to \\(0\\). When \\(X\\) is compact, \\(f\\) maps closed sets (compact subsets of \\(X\\)) to compact subsets of \\(Y\\) (hence closed in \\(Y\\) if \\(Y\\) is Hausdorff). So \\(f\\) maps closed sets to closed sets, which means \\(f^{-1}\\) maps open sets to open sets, i.e., \\(f^{-1}\\) is continuous.</p>'
},
{
    question: 'Prove that the composition of two Lipschitz maps is Lipschitz. What is the Lipschitz constant of the composition?',
    hint: 'If \\(f\\) is \\(L_1\\)-Lipschitz and \\(g\\) is \\(L_2\\)-Lipschitz, directly estimate \\(d(g(f(x)), g(f(y)))\\).',
    solution: '<p>Let \\(f: X \\to Y\\) be \\(L_1\\)-Lipschitz and \\(g: Y \\to Z\\) be \\(L_2\\)-Lipschitz. Then \\(d_Z(g(f(x)), g(f(y))) \\leq L_2 \\cdot d_Y(f(x), f(y)) \\leq L_2 \\cdot L_1 \\cdot d_X(x, y)\\). So \\(g \\circ f\\) is Lipschitz with constant \\(L_1 L_2\\).</p>'
}
],
}
]
});
