window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch12',
    number: 12,
    title: 'Reflexive Spaces',
    subtitle: 'When X equals its double dual',
    sections: [
        // ============================================================
        // SECTION 1: Reflexivity
        // ============================================================
        {
            id: 'ch12-sec01',
            title: 'Reflexivity',
            content: `<h2>Reflexivity</h2>
<p>Every normed space \\(X\\) embeds isometrically into its double dual \\(X^{**}\\) via the <strong>canonical embedding</strong>. A space is <em>reflexive</em> when this embedding is surjective&mdash;meaning \\(X\\) and \\(X^{**}\\) are essentially the same space.</p>

<h3>The Canonical Embedding</h3>
<div class="env-block definition">
    <div class="env-title">Definition 12.1 (Canonical Embedding)</div>
    <div class="env-body"><p>For a normed space \\(X\\), define \\(J: X \\to X^{**}\\) by
    \\[ J(x)(f) = f(x) \\quad \\text{for all } f \\in X^*. \\]
    The map \\(J\\) is called the <strong>canonical embedding</strong> (or <strong>evaluation map</strong>) of \\(X\\) into \\(X^{**}\\).</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 12.2 (Properties of the Canonical Embedding)</div>
    <div class="env-body"><p>For any normed space \\(X\\), the canonical embedding \\(J: X \\to X^{**}\\) satisfies:</p>
    <ol>
        <li>\\(J\\) is linear.</li>
        <li>\\(\\|J(x)\\| = \\|x\\|\\) for all \\(x \\in X\\) (isometry).</li>
        <li>\\(J(X)\\) is a closed subspace of \\(X^{**}\\) if and only if \\(X\\) is a Banach space.</li>
    </ol></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>(1) Linearity is immediate: for \\(x, y \\in X\\) and \\(\\alpha \\in \\mathbb{K}\\),
    \\[ J(\\alpha x + y)(f) = f(\\alpha x + y) = \\alpha f(x) + f(y) = (\\alpha J(x) + J(y))(f). \\]</p>
    <p>(2) For the isometry, note \\(\\|J(x)\\| = \\sup_{\\|f\\| \\le 1} |J(x)(f)| = \\sup_{\\|f\\| \\le 1} |f(x)| = \\|x\\|\\), where the last equality is a consequence of the Hahn&ndash;Banach theorem (the norming lemma).</p>
    <p>(3) Since \\(J\\) is an isometry, \\(J(X)\\) is complete (hence closed in \\(X^{**}\\)) if and only if \\(X\\) is complete. \\(\\square\\)</p></div>
</div>

<h3>The Definition of Reflexivity</h3>
<div class="env-block definition">
    <div class="env-title">Definition 12.3 (Reflexive Space)</div>
    <div class="env-body"><p>A Banach space \\(X\\) is called <strong>reflexive</strong> if the canonical embedding \\(J: X \\to X^{**}\\) is surjective, i.e., \\(J(X) = X^{**}\\).</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark</div>
    <div class="env-body"><p>It is crucial that the isometric isomorphism be the <em>canonical</em> one. There exist non-reflexive Banach spaces \\(X\\) with \\(X \\cong X^{**}\\) isometrically via a non-canonical map (James constructed such a space in 1951). Reflexivity is a statement about a specific map, not merely about isomorphism.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-canonical-embedding"></div>

<h3>Equivalent Characterizations</h3>
<div class="env-block theorem">
    <div class="env-title">Theorem 12.4 (Equivalent Conditions for Reflexivity)</div>
    <div class="env-body"><p>For a Banach space \\(X\\), the following are equivalent:</p>
    <ol>
        <li>\\(X\\) is reflexive (i.e., \\(J(X) = X^{**}\\)).</li>
        <li>The closed unit ball \\(B_X\\) is weakly compact.</li>
        <li>Every bounded sequence in \\(X\\) has a weakly convergent subsequence.</li>
        <li>\\(X^*\\) is reflexive.</li>
        <li>Every closed convex bounded subset of \\(X\\) is weakly compact.</li>
    </ol></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof sketch</div>
    <div class="env-body"><p>(1)\\(\\Rightarrow\\)(2): If \\(J\\) is surjective, then \\(J(B_X) = B_{X^{**}}\\). By Banach&ndash;Alaoglu, \\(B_{X^{**}}\\) is weak*-compact in \\(X^{**}\\). Under the identification \\(J\\), the weak* topology on \\(X^{**}\\) restricted to \\(J(X)\\) coincides with the weak topology on \\(X\\). Hence \\(B_X\\) is weakly compact.</p>
    <p>(2)\\(\\Rightarrow\\)(3): Follows from the Eberlein&ndash;Smulian theorem (Section 4).</p>
    <p>(2)\\(\\Rightarrow\\)(1): If \\(B_X\\) is weakly compact, then \\(J(B_X)\\) is weak*-compact in \\(X^{**}\\), hence weak*-closed. But \\(J(B_X)\\) is also weak*-dense in \\(B_{X^{**}}\\) (by Goldstine's theorem). Thus \\(J(B_X) = B_{X^{**}}\\), so \\(J\\) is surjective.</p>
    <p>(1)\\(\\Leftrightarrow\\)(4): If \\(X\\) is reflexive, then \\(X^{**} = J(X)\\), so \\(X^{***} = (X^{**})^* = (J(X))^* \\cong X^*\\) canonically, proving \\(X^*\\) is reflexive. The converse follows by applying the forward direction to \\(X^*\\). \\(\\square\\)</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-reflexivity-diagram"></div>`,
            visualizations: [
                {
                    id: 'viz-canonical-embedding',
                    title: 'Canonical Embedding J: X to X**',
                    description: 'Visualize how the canonical embedding maps a space into its double dual. Drag the point to see the evaluation map in action.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 50});
                        var ctx = viz.ctx;

                        var pt = viz.addDraggable('x', 1.5, 1.0, viz.colors.blue, 8);

                        function draw() {
                            viz.clear();

                            // Draw X space (left)
                            var xCenter = viz.width * 0.25;
                            var yCenter = viz.height * 0.45;
                            var radius = 100;

                            // X ellipse
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.ellipse(xCenter, yCenter, radius, radius * 0.7, 0, 0, Math.PI * 2);
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.blue + '15';
                            ctx.fill();

                            // X* space (middle)
                            var xsCenter = viz.width * 0.5;
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.ellipse(xsCenter, yCenter, radius, radius * 0.7, 0, 0, Math.PI * 2);
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.teal + '15';
                            ctx.fill();

                            // X** space (right)
                            var xssCenter = viz.width * 0.75;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.ellipse(xssCenter, yCenter, radius * 1.15, radius * 0.8, 0, 0, Math.PI * 2);
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.orange + '15';
                            ctx.fill();

                            // J(X) inside X**
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([5, 4]);
                            ctx.beginPath();
                            ctx.ellipse(xssCenter, yCenter, radius * 0.85, radius * 0.6, 0, 0, Math.PI * 2);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Labels
                            ctx.font = 'bold 18px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('X', xCenter, yCenter - radius * 0.7 - 8);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('X*', xsCenter, yCenter - radius * 0.7 - 8);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('X**', xssCenter, yCenter - radius * 0.8 - 8);

                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('J(X)', xssCenter, yCenter + radius * 0.6 + 16);

                            // Point x in X
                            var xNorm = Math.sqrt(pt.x * pt.x + pt.y * pt.y);
                            var angle = Math.atan2(pt.y, pt.x);
                            var r = Math.min(xNorm / 3, 0.9);
                            var px = xCenter + r * radius * Math.cos(angle);
                            var py = yCenter - r * radius * 0.7 * Math.sin(angle);

                            ctx.fillStyle = viz.colors.blue;
                            ctx.beginPath();
                            ctx.arc(px, py, 6, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillText('x', px, py - 12);

                            // J(x) in X**
                            var jx = xssCenter + r * radius * 0.85 * Math.cos(angle);
                            var jy = yCenter - r * radius * 0.6 * Math.sin(angle);

                            ctx.fillStyle = viz.colors.orange;
                            ctx.beginPath();
                            ctx.arc(jx, jy, 6, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.fillText('J(x)', jx, jy - 12);

                            // Arrow from x to J(x)
                            ctx.strokeStyle = viz.colors.white + '80';
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath();
                            ctx.moveTo(px + 8, py);
                            ctx.bezierCurveTo(px + 60, py - 60, jx - 60, jy - 60, jx - 8, jy);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Arrow for J label
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('J', (px + jx) / 2, Math.min(py, jy) - 50);

                            // f in X*
                            var fAngle = angle + 0.5;
                            var fx = xsCenter + 0.6 * radius * Math.cos(fAngle);
                            var fy = yCenter - 0.6 * radius * 0.7 * Math.sin(fAngle);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.beginPath();
                            ctx.arc(fx, fy, 5, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('f', fx, fy - 10);

                            // Info box
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            var infoY = viz.height - 55;
                            ctx.fillText('J(x)(f) = f(x)  for all f in X*', 20, infoY);
                            ctx.fillText('||J(x)|| = ||x|| = ' + xNorm.toFixed(2) + '  (isometry)', 20, infoY + 20);

                            // Reflexive indicator
                            ctx.textAlign = 'right';
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.fillText('Reflexive: J(X) = X**', viz.width - 20, infoY);
                            ctx.fillStyle = viz.colors.red;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('Non-reflexive: J(X) is proper subspace', viz.width - 20, infoY + 20);
                        }

                        draw();
                        viz.animate(function() { draw(); });
                    }
                },
                {
                    id: 'viz-reflexivity-diagram',
                    title: 'Reflexivity Equivalences',
                    description: 'A diagram showing the logical equivalences between the main characterizations of reflexivity.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 380});
                        var ctx = viz.ctx;

                        viz.clear();

                        var conditions = [
                            {text: 'J(X) = X**', x: 350, y: 50, color: viz.colors.blue},
                            {text: 'B_X weakly compact', x: 140, y: 155, color: viz.colors.teal},
                            {text: 'Bdd seq has weak subseq', x: 560, y: 155, color: viz.colors.green},
                            {text: 'X* is reflexive', x: 140, y: 280, color: viz.colors.orange},
                            {text: 'Closed cvx bdd sets w-compact', x: 560, y: 280, color: viz.colors.purple}
                        ];

                        // Draw edges (double arrows)
                        var edges = [
                            [0, 1], [0, 2], [0, 3], [0, 4],
                            [1, 2], [1, 3], [2, 4], [3, 4]
                        ];

                        ctx.lineWidth = 1.5;
                        edges.forEach(function(e) {
                            var a = conditions[e[0]], b = conditions[e[1]];
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.beginPath();
                            ctx.moveTo(a.x, a.y + 15);
                            ctx.lineTo(b.x, b.y - 15);
                            ctx.stroke();
                        });

                        // Draw nodes
                        conditions.forEach(function(c) {
                            // Background box
                            ctx.font = '12px -apple-system,sans-serif';
                            var tw = ctx.measureText(c.text).width;
                            var pad = 12;
                            ctx.fillStyle = '#0c0c20';
                            ctx.strokeStyle = c.color;
                            ctx.lineWidth = 2;

                            var rx = c.x - tw / 2 - pad;
                            var ry = c.y - 14;
                            var rw = tw + 2 * pad;
                            var rh = 28;
                            ctx.beginPath();
                            ctx.roundRect(rx, ry, rw, rh, 6);
                            ctx.fill();
                            ctx.stroke();

                            ctx.fillStyle = c.color;
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.fillText(c.text, c.x, c.y);
                        });

                        // Title
                        ctx.fillStyle = viz.colors.white;
                        ctx.font = 'bold 14px -apple-system,sans-serif';
                        ctx.textAlign = 'center';
                        ctx.fillText('All conditions are equivalent for Banach spaces', 350, 340);

                        // Double arrow legend
                        ctx.font = '11px -apple-system,sans-serif';
                        ctx.fillStyle = viz.colors.text;
                        ctx.fillText('Lines indicate mutual implication (iff)', 350, 360);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch12-ex01',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Prove that if X is a reflexive Banach space and Y is a closed subspace of X, then Y is also reflexive.',
                    hint: 'Use the fact that the closed unit ball of Y is a weakly closed subset of the weakly compact ball B_X.',
                    solution: 'Since X is reflexive, B_X is weakly compact. The subspace Y is closed, hence weakly closed (by the Hahn-Banach separation theorem, norm-closed convex sets are weakly closed). Therefore B_Y = B_X intersection Y is weakly compact in X, hence in Y (the weak topology on Y is the restriction of the weak topology on X). By the equivalence theorem, Y is reflexive.'
                },
                {
                    id: 'ch12-ex02',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Show that the canonical embedding J: X to X** is the unique isometric embedding T: X to X** such that for every f in X*, the functional f can be recovered as f(x) = T(x)(f).',
                    hint: 'Suppose T is another such embedding. Show T(x)(f) = J(x)(f) for all f, hence T = J.',
                    solution: 'Suppose T: X to X** is an isometric embedding with T(x)(f) = f(x) for all f in X* and x in X. Then for any x in X and f in X*, T(x)(f) = f(x) = J(x)(f). Since this holds for all f in X*, we have T(x) = J(x) as elements of X**. Since x was arbitrary, T = J.'
                },
                {
                    id: 'ch12-ex03',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Prove that if X is reflexive and T: X to Y is a bounded linear surjection, then Y is reflexive.',
                    hint: 'Use the open mapping theorem and the fact that T maps weakly compact sets to weakly compact sets.',
                    solution: 'Since X is reflexive, B_X is weakly compact. The map T is weak-to-weak continuous (bounded linear maps between Banach spaces are weakly continuous). Hence T(B_X) is weakly compact in Y. By the open mapping theorem, T is open, so T(B_X) contains a ball rB_Y for some r > 0. Thus rB_Y is contained in the weakly compact set T(B_X), so rB_Y is relatively weakly compact. Since rB_Y is also weakly closed (norm-closed convex), it is weakly compact. Hence B_Y is weakly compact and Y is reflexive.'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Examples and Non-Examples
        // ============================================================
        {
            id: 'ch12-sec02',
            title: 'Examples and Non-Examples',
            content: `<h2>Examples and Non-Examples</h2>
<p>Reflexivity is a delicate property&mdash;many classical spaces are reflexive, but several important spaces are not. Understanding which spaces are reflexive is essential for applications in PDE theory, optimization, and probability.</p>

<h3>Reflexive Spaces</h3>
<div class="env-block theorem">
    <div class="env-title">Theorem 12.5 (Reflexive Spaces)</div>
    <div class="env-body"><p>The following spaces are reflexive:</p>
    <ol>
        <li>Every finite-dimensional normed space.</li>
        <li>Every Hilbert space.</li>
        <li>\\(\\ell^p\\) for \\(1 < p < \\infty\\).</li>
        <li>\\(L^p(\\mu)\\) for \\(1 < p < \\infty\\) and any \\(\\sigma\\)-finite measure \\(\\mu\\).</li>
        <li>Closed subspaces and quotients of reflexive spaces.</li>
    </ol></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof (Hilbert space case)</div>
    <div class="env-body"><p>Let \\(H\\) be a Hilbert space. By the Riesz representation theorem, the map \\(\\Phi: H \\to H^*\\) given by \\(\\Phi(y)(x) = \\langle x, y \\rangle\\) is a conjugate-linear isometric isomorphism. Applying this again, \\(H^{**} \\cong (H^*)^* \\cong H\\). One checks that the composition is exactly the canonical embedding \\(J\\). \\(\\square\\)</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof sketch (\\(\\ell^p\\) case, \\(1 < p < \\infty\\))</div>
    <div class="env-body"><p>We know \\((\\ell^p)^* \\cong \\ell^q\\) where \\(1/p + 1/q = 1\\), via the pairing \\(f_y(x) = \\sum_n x_n y_n\\). Then \\((\\ell^p)^{**} \\cong (\\ell^q)^* \\cong \\ell^p\\). One verifies this identification is the canonical embedding. \\(\\square\\)</p></div>
</div>

<h3>Non-Reflexive Spaces</h3>
<div class="env-block theorem">
    <div class="env-title">Theorem 12.6 (Non-Reflexive Spaces)</div>
    <div class="env-body"><p>The following spaces are <strong>not</strong> reflexive:</p>
    <ol>
        <li>\\(\\ell^1\\). Its dual is \\(\\ell^\\infty\\), and \\((\\ell^1)^{**} = (\\ell^\\infty)^* \\supsetneq \\ell^1\\).</li>
        <li>\\(\\ell^\\infty\\). It is not even separable, while its predual \\(\\ell^1\\) is separable.</li>
        <li>\\(c_0\\). Its dual is \\(\\ell^1\\), hence \\(c_0^{**} = \\ell^\\infty \\neq c_0\\).</li>
        <li>\\(L^1(\\mu)\\) for non-trivial \\(\\mu\\). Its dual is \\(L^\\infty(\\mu)\\).</li>
        <li>\\(C[0,1]\\). Its dual is the space of regular Borel measures on \\([0,1]\\).</li>
    </ol></div>
</div>

<div class="env-block intuition">
    <div class="env-title">Key Insight</div>
    <div class="env-body"><p>A useful heuristic: among \\(L^p\\) spaces, only the "middle" values \\(1 < p < \\infty\\) give reflexivity. The endpoints \\(p = 1\\) and \\(p = \\infty\\) fail because their dual spaces are "much larger" and contain pathological functionals (finitely additive measures, elements of \\(\\text{ba}(\\mathbb{N})\\), etc.).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-reflexivity-table"></div>

<h3>The Separability Connection</h3>
<div class="env-block theorem">
    <div class="env-title">Proposition 12.7</div>
    <div class="env-body"><p>If \\(X\\) is reflexive and separable, then \\(X^*\\) is also separable. More generally, a Banach space is reflexive and separable if and only if \\(X^*\\) is reflexive and separable.</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark</div>
    <div class="env-body"><p>The converse fails without reflexivity: \\(\\ell^1\\) is separable but \\((\\ell^1)^* = \\ell^\\infty\\) is not separable. This gives another proof that \\(\\ell^1\\) is not reflexive, since reflexivity of \\(X\\) would imply \\(X^*\\) is also separable.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-dual-chain"></div>`,
            visualizations: [
                {
                    id: 'viz-reflexivity-table',
                    title: 'Reflexivity Comparison Table',
                    description: 'A comprehensive comparison of classical Banach spaces and their reflexivity status.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420});
                        var ctx = viz.ctx;

                        viz.clear();

                        var spaces = [
                            {name: 'Finite-dim', dual: 'Same', reflexive: true, reason: 'Dim X = Dim X**'},
                            {name: 'Hilbert H', dual: 'H (Riesz)', reflexive: true, reason: 'Riesz rep thm'},
                            {name: 'lp (1<p<inf)', dual: 'lq', reflexive: true, reason: '(lq)* = lp'},
                            {name: 'Lp (1<p<inf)', dual: 'Lq', reflexive: true, reason: '(Lq)* = Lp'},
                            {name: 'l1', dual: 'l_inf', reflexive: false, reason: '(l_inf)* >> l1'},
                            {name: 'l_inf', dual: '(l_inf)*', reflexive: false, reason: 'Not separable'},
                            {name: 'c0', dual: 'l1', reflexive: false, reason: 'l1* = l_inf != c0'},
                            {name: 'L1', dual: 'L_inf', reflexive: false, reason: '(L_inf)* >> L1'},
                            {name: 'C[0,1]', dual: 'M[0,1]', reflexive: false, reason: 'M* >> C[0,1]'}
                        ];

                        var colX = [40, 180, 300, 400, 510];
                        var headers = ['Space', 'Dual Space', 'Reflexive?', 'Why'];
                        var rowH = 36;
                        var startY = 45;

                        // Title
                        ctx.fillStyle = viz.colors.white;
                        ctx.font = 'bold 15px -apple-system,sans-serif';
                        ctx.textAlign = 'center';
                        ctx.fillText('Reflexivity of Classical Banach Spaces', viz.width / 2, 22);

                        // Header row
                        ctx.fillStyle = viz.colors.blue + '30';
                        ctx.fillRect(10, startY - 14, viz.width - 20, rowH);
                        ctx.font = 'bold 13px -apple-system,sans-serif';
                        ctx.textAlign = 'left';
                        headers.forEach(function(h, i) {
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText(h, colX[i], startY + 6);
                        });

                        // Data rows
                        spaces.forEach(function(s, i) {
                            var y = startY + (i + 1) * rowH;

                            // Alternating row bg
                            if (i % 2 === 0) {
                                ctx.fillStyle = '#ffffff08';
                                ctx.fillRect(10, y - 14, viz.width - 20, rowH);
                            }

                            // Separator between reflexive and non-reflexive
                            if (i === 4) {
                                ctx.strokeStyle = viz.colors.red + '60';
                                ctx.lineWidth = 1;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath();
                                ctx.moveTo(10, y - 16);
                                ctx.lineTo(viz.width - 10, y - 16);
                                ctx.stroke();
                                ctx.setLineDash([]);
                            }

                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';

                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText(s.name, colX[0], y + 6);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText(s.dual, colX[1], y + 6);

                            ctx.fillStyle = s.reflexive ? viz.colors.green : viz.colors.red;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.fillText(s.reflexive ? 'Yes' : 'No', colX[2] + 20, y + 6);

                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText(s.reason, colX[3], y + 6);
                        });

                        // Legend
                        ctx.font = '11px -apple-system,sans-serif';
                        ctx.textAlign = 'center';
                        ctx.fillStyle = viz.colors.text;
                        ctx.fillText('Key pattern: reflexivity holds for 1 < p < infinity, fails at endpoints p = 1 and p = infinity', viz.width / 2, viz.height - 12);
                    }
                },
                {
                    id: 'viz-dual-chain',
                    title: 'Dual Space Chains',
                    description: 'Compare the dual chains for reflexive vs non-reflexive spaces.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 360});
                        var ctx = viz.ctx;

                        viz.clear();

                        // Title
                        ctx.fillStyle = viz.colors.white;
                        ctx.font = 'bold 15px -apple-system,sans-serif';
                        ctx.textAlign = 'center';
                        ctx.fillText('Dual Chains: Reflexive vs Non-Reflexive', viz.width / 2, 25);

                        // Reflexive chain: l2 -> l2 -> l2 -> ...
                        var chainY1 = 100;
                        var chainY2 = 220;
                        var startX = 60;
                        var stepX = 150;

                        // Reflexive: l2
                        ctx.font = 'bold 13px -apple-system,sans-serif';
                        ctx.fillStyle = viz.colors.green;
                        ctx.textAlign = 'left';
                        ctx.fillText('Reflexive:', 15, chainY1 - 30);

                        var refLabels = ['l2', '(l2)* = l2', '(l2)** = l2', '...'];
                        refLabels.forEach(function(label, i) {
                            var x = startX + i * stepX;
                            var w = ctx.measureText(label).width + 20;

                            ctx.fillStyle = viz.colors.green + '20';
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.roundRect(x - w / 2, chainY1 - 16, w, 32, 6);
                            ctx.fill();
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.green;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(label, x, chainY1 + 2);

                            if (i < refLabels.length - 1) {
                                ctx.strokeStyle = viz.colors.green + '80';
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                ctx.moveTo(x + w / 2 + 4, chainY1);
                                ctx.lineTo(startX + (i + 1) * stepX - ctx.measureText(refLabels[i + 1]).width / 2 - 14, chainY1);
                                ctx.stroke();
                                // Arrow
                                var ax = startX + (i + 1) * stepX - ctx.measureText(refLabels[i + 1]).width / 2 - 14;
                                ctx.fillStyle = viz.colors.green + '80';
                                ctx.beginPath();
                                ctx.moveTo(ax, chainY1);
                                ctx.lineTo(ax - 6, chainY1 - 4);
                                ctx.lineTo(ax - 6, chainY1 + 4);
                                ctx.closePath();
                                ctx.fill();
                            }
                        });

                        // Reflexive cycle annotation
                        ctx.font = '11px -apple-system,sans-serif';
                        ctx.fillStyle = viz.colors.green;
                        ctx.textAlign = 'center';
                        ctx.fillText('Stabilizes immediately: the chain is periodic with period 1', viz.width / 2, chainY1 + 35);

                        // Non-reflexive: c0
                        ctx.font = 'bold 13px -apple-system,sans-serif';
                        ctx.fillStyle = viz.colors.red;
                        ctx.textAlign = 'left';
                        ctx.fillText('Non-reflexive:', 15, chainY2 - 30);

                        var nonrefLabels = ['c0', 'l1', 'l_inf', 'ba(N)', '...'];
                        nonrefLabels.forEach(function(label, i) {
                            var x = startX + i * (stepX * 0.95);
                            ctx.font = '13px -apple-system,sans-serif';
                            var w = ctx.measureText(label).width + 20;

                            ctx.fillStyle = viz.colors.red + '20';
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.roundRect(x - w / 2, chainY2 - 16, w, 32, 6);
                            ctx.fill();
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.red;
                            ctx.textAlign = 'center';
                            ctx.fillText(label, x, chainY2 + 2);

                            if (i < nonrefLabels.length - 1) {
                                ctx.strokeStyle = viz.colors.red + '80';
                                ctx.lineWidth = 1.5;
                                var nextX = startX + (i + 1) * (stepX * 0.95);
                                ctx.font = '13px -apple-system,sans-serif';
                                var nextW = ctx.measureText(nonrefLabels[i + 1]).width + 20;
                                ctx.beginPath();
                                ctx.moveTo(x + w / 2 + 4, chainY2);
                                ctx.lineTo(nextX - nextW / 2 - 4, chainY2);
                                ctx.stroke();
                                var ax2 = nextX - nextW / 2 - 4;
                                ctx.fillStyle = viz.colors.red + '80';
                                ctx.beginPath();
                                ctx.moveTo(ax2, chainY2);
                                ctx.lineTo(ax2 - 6, chainY2 - 4);
                                ctx.lineTo(ax2 - 6, chainY2 + 4);
                                ctx.closePath();
                                ctx.fill();
                            }
                        });

                        ctx.font = '11px -apple-system,sans-serif';
                        ctx.fillStyle = viz.colors.red;
                        ctx.textAlign = 'center';
                        ctx.fillText('Grows strictly: each dual is strictly larger than the previous', viz.width / 2, chainY2 + 35);

                        // Arrows showing inclusion
                        ctx.font = '11px -apple-system,sans-serif';
                        ctx.fillStyle = viz.colors.text;
                        ctx.textAlign = 'center';
                        ctx.fillText('* = taking dual', viz.width / 2, chainY2 + 60);
                        ctx.fillText('Non-reflexive spaces produce strictly growing chains of duals', viz.width / 2, chainY2 + 80);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch12-ex04',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Prove that every finite-dimensional normed space is reflexive.',
                    hint: 'Show that the canonical embedding J is a linear injection between spaces of the same finite dimension.',
                    solution: 'If dim(X) = n, then dim(X*) = n (since X* is isomorphic to X via a choice of basis and dual basis). Therefore dim(X**) = n. The canonical embedding J: X to X** is injective (since it is an isometry). An injective linear map between spaces of equal finite dimension is surjective. Hence J is surjective and X is reflexive.'
                },
                {
                    id: 'ch12-ex05',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Show that c_0 is not reflexive by explicitly exhibiting an element of c_0** = (l1)* = l_inf that is not in the image of J(c_0).',
                    hint: 'The constant sequence (1, 1, 1, ...) is in l_inf but cannot be the image of any element of c_0 under J.',
                    solution: 'We have c_0* = l1 and c_0** = (l1)* = l_inf. The canonical embedding J: c_0 to l_inf sends x = (x_n) to the functional on l1 given by J(x)(y) = sum x_n y_n. The image J(c_0) consists of sequences converging to 0. The constant sequence e = (1, 1, 1, ...) is in l_inf but does not converge to 0, so e is not in J(c_0). Hence c_0 is not reflexive.'
                },
                {
                    id: 'ch12-ex06',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Prove that if X is reflexive, then X is separable if and only if X* is separable.',
                    hint: 'Use the general fact that if X* is separable then X is separable, combined with the reflexivity of X*.',
                    solution: 'Forward: Assume X is reflexive and separable. Since X is reflexive, X* is also reflexive (Theorem 12.4(4)). A theorem from dual space theory says: if X is separable, then B_{X*} is weak*-metrizable; if additionally X* is reflexive, the weak* and weak topologies on X* coincide, so B_{X*} is weakly metrizable and weakly compact, hence weakly sequentially compact, hence separable. Backward: If X* is separable, then X is always separable (this holds without reflexivity).'
                }
            ]
        },

        // ============================================================
        // SECTION 3: James' Theorem
        // ============================================================
        {
            id: 'ch12-sec03',
            title: "James' Theorem",
            content: `<h2>James' Theorem</h2>
<p>James' theorem provides a beautiful geometric characterization of reflexivity: a Banach space is reflexive if and only if every continuous linear functional attains its supremum on the closed unit ball. This is one of the deepest results connecting the geometry and topology of Banach spaces.</p>

<h3>Norm-Attaining Functionals</h3>
<div class="env-block definition">
    <div class="env-title">Definition 12.8 (Norm-Attaining Functional)</div>
    <div class="env-body"><p>A bounded linear functional \\(f \\in X^*\\) is said to <strong>attain its norm</strong> if there exists \\(x_0 \\in X\\) with \\(\\|x_0\\| = 1\\) such that \\(|f(x_0)| = \\|f\\|\\).</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark</div>
    <div class="env-body"><p>Equivalently, \\(f\\) attains its norm if the supremum \\(\\sup_{\\|x\\| \\le 1} |f(x)|\\) is achieved&mdash;it is a maximum rather than merely a supremum.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-norm-attaining"></div>

<h3>Statement of James' Theorem</h3>
<div class="env-block theorem">
    <div class="env-title">Theorem 12.9 (James, 1964)</div>
    <div class="env-body"><p>A Banach space \\(X\\) is reflexive if and only if every \\(f \\in X^*\\) attains its norm on \\(B_X\\).</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof sketch</div>
    <div class="env-body"><p><strong>(\\(\\Rightarrow\\))</strong> Assume \\(X\\) is reflexive and let \\(f \\in X^*\\), \\(\\|f\\| = 1\\). Since \\(B_X\\) is weakly compact (by reflexivity), and \\(f\\) is weakly continuous, the image \\(f(B_X)\\) is a compact subset of \\(\\mathbb{K}\\). Hence the supremum \\(\\sup_{x \\in B_X} |f(x)| = 1\\) is attained.</p>
    <p><strong>(\\(\\Leftarrow\\))</strong> This is the hard direction. Assume every \\(f \\in X^*\\) attains its norm. Suppose toward contradiction that \\(X\\) is not reflexive, so \\(J(X) \\neq X^{**}\\). Pick \\(\\xi \\in X^{**} \\setminus J(X)\\) with \\(\\|\\xi\\| = 1\\). The key idea (due to James) is to construct iteratively sequences of functionals and vectors using the non-reflexivity to build a contradiction with the norm-attaining hypothesis.</p>
    <p>The full proof uses a delicate construction involving weakly Cauchy sequences and the principle that norm-attaining functionals define supporting hyperplanes. James originally proved this for separable spaces (1957) and later extended it to the general case (1964). \\(\\square\\)</p></div>
</div>

<div class="env-block intuition">
    <div class="env-title">Geometric Intuition</div>
    <div class="env-body"><p>In a reflexive space, the unit ball is weakly compact, so continuous linear functionals always achieve their supremum (like continuous functions on compact sets). In a non-reflexive space, the unit ball has "holes" in the weak topology, and some functionals approach their supremum only asymptotically&mdash;like the function \\(f(x) = x\\) on the open interval \\((0,1)\\) never achieving its supremum of 1.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-james-geometry"></div>

<h3>Application: Bishop&ndash;Phelps Theorem</h3>
<div class="env-block theorem">
    <div class="env-title">Theorem 12.10 (Bishop&ndash;Phelps, 1961)</div>
    <div class="env-body"><p>In any Banach space \\(X\\), the set of norm-attaining functionals is <strong>norm-dense</strong> in \\(X^*\\).</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark</div>
    <div class="env-body"><p>James' theorem says: <em>all</em> functionals attain their norm iff \\(X\\) is reflexive. Bishop&ndash;Phelps says: even in non-reflexive spaces, <em>most</em> functionals (in the sense of density) still attain their norm. The non-attaining functionals form a meager set but can be non-empty precisely when \\(X\\) is not reflexive.</p></div>
</div>`,
            visualizations: [
                {
                    id: 'viz-norm-attaining',
                    title: 'Norm-Attaining vs Non-Attaining Functionals',
                    description: 'Visualize when a functional achieves its supremum on the unit ball. Drag the functional direction to see which supporting hyperplanes touch the ball.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 80});
                        var ctx = viz.ctx;

                        var fAngle = viz.addDraggable('fdir', 1.5, 1.0, viz.colors.teal, 8);

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            // Unit ball (l2 ball = circle)
                            viz.drawCircle(0, 0, 1, viz.colors.blue + '15', viz.colors.blue, 2);

                            // Functional direction
                            var norm = Math.sqrt(fAngle.x * fAngle.x + fAngle.y * fAngle.y);
                            if (norm < 0.01) norm = 0.01;
                            var fx = fAngle.x / norm;
                            var fy = fAngle.y / norm;

                            // Draw functional direction
                            viz.drawVector(0, 0, fx * 1.5, fy * 1.5, viz.colors.teal, 'f', 2);

                            // Supporting hyperplane (tangent to unit ball perpendicular to f)
                            // Point on unit ball where f attains max: (fx, fy)
                            var px = fx;
                            var py = fy;

                            viz.drawPoint(px, py, viz.colors.orange, 'x0 (norm-attaining)', 6);

                            // Supporting hyperplane direction (perpendicular to f)
                            var hx = -fy;
                            var hy = fx;

                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([5, 4]);
                            var s1 = viz.toScreen(px - hx * 3, py - hy * 3);
                            var s2 = viz.toScreen(px + hx * 3, py + hy * 3);
                            ctx.beginPath();
                            ctx.moveTo(s1[0], s1[1]);
                            ctx.lineTo(s2[0], s2[1]);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Level sets of f
                            for (var lev = -1.5; lev <= 1.5; lev += 0.5) {
                                if (Math.abs(lev) < 0.01) continue;
                                var cx = fx * lev;
                                var cy = fy * lev;
                                ctx.strokeStyle = viz.colors.teal + '25';
                                ctx.lineWidth = 1;
                                var ls1 = viz.toScreen(cx - hx * 3, cy - hy * 3);
                                var ls2 = viz.toScreen(cx + hx * 3, cy + hy * 3);
                                ctx.beginPath();
                                ctx.moveTo(ls1[0], ls1[1]);
                                ctx.lineTo(ls2[0], ls2[1]);
                                ctx.stroke();
                            }

                            // Info
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Reflexive (l2): every f attains its norm at x0 on the boundary', 20, viz.height - 40);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('f(x0) = ||f|| = ' + (1).toFixed(2) + '  (supremum achieved)', 20, viz.height - 20);
                        }

                        draw();
                        viz.animate(function() { draw(); });
                    }
                },
                {
                    id: 'viz-james-geometry',
                    title: 'James Theorem: Geometry of Norm Attainment',
                    description: 'Compare reflexive and non-reflexive unit balls. In reflexive spaces, every supporting hyperplane touches the ball; in non-reflexive spaces, some hyperplanes only approach asymptotically.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400});
                        var ctx = viz.ctx;

                        var time = 0;

                        function draw(t) {
                            time = t * 0.001;
                            viz.clear();

                            // Left: reflexive case (closed ball)
                            var cx1 = viz.width * 0.25;
                            var cy1 = viz.height * 0.45;
                            var R = 100;

                            ctx.fillStyle = viz.colors.green + '15';
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.arc(cx1, cy1, R, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.stroke();

                            // Supporting hyperplane touching
                            var angle1 = time * 0.3;
                            var tx1 = cx1 + R * Math.cos(angle1);
                            var ty1 = cy1 - R * Math.sin(angle1);

                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 1.5;
                            var nx = Math.cos(angle1);
                            var ny = -Math.sin(angle1);
                            ctx.beginPath();
                            ctx.moveTo(tx1 - ny * 120, ty1 - nx * 120);
                            ctx.lineTo(tx1 + ny * 120, ty1 + nx * 120);
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.orange;
                            ctx.beginPath();
                            ctx.arc(tx1, ty1, 5, 0, Math.PI * 2);
                            ctx.fill();

                            // Label
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.green;
                            ctx.textAlign = 'center';
                            ctx.fillText('Reflexive: B_X weakly compact', cx1, cy1 - R - 20);
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('f always attains max', cx1, cy1 + R + 25);

                            // Right: non-reflexive case (open-ish ball)
                            var cx2 = viz.width * 0.72;
                            var cy2 = viz.height * 0.45;

                            // Draw a ball with a "gap" to suggest non-compactness
                            ctx.fillStyle = viz.colors.red + '10';
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.arc(cx2, cy2, R, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.stroke();

                            // Dashed part to indicate "missing boundary" in weak topology
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 3;
                            ctx.setLineDash([4, 6]);
                            ctx.beginPath();
                            ctx.arc(cx2, cy2, R, -0.3, 0.3);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Non-attaining: hyperplane approaching but not touching
                            var gapAngle = 0;
                            var approach = R + 6 + 4 * Math.sin(time * 2);
                            var tx2 = cx2 + approach * Math.cos(gapAngle);
                            var ty2 = cy2 - approach * Math.sin(gapAngle);

                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([5, 4]);
                            ctx.beginPath();
                            ctx.moveTo(tx2, ty2 - 120);
                            ctx.lineTo(tx2, ty2 + 120);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Approaching points
                            for (var k = 1; k <= 5; k++) {
                                var pr = R * (1 - 0.15 / k);
                                var ppx = cx2 + pr * Math.cos(gapAngle);
                                var ppy = cy2 - pr * Math.sin(gapAngle) + (k - 3) * 15;
                                ctx.fillStyle = viz.colors.yellow + (155 + k * 20 > 255 ? 'ff' : (155 + k * 20).toString(16));
                                ctx.beginPath();
                                ctx.arc(ppx, ppy, 3, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.red;
                            ctx.textAlign = 'center';
                            ctx.fillText('Non-reflexive: B_X not w-compact', cx2, cy2 - R - 20);
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.fillText('some f only approaches sup', cx2, cy2 + R + 25);

                            // Bottom text
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText("James' Theorem: X reflexive  iff  every f in X* attains its norm", viz.width / 2, viz.height - 15);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch12-ex07',
                    type: 'proof',
                    difficulty: 3,
                    question: "Prove the easy direction of James' theorem: if X is reflexive, then every f in X* attains its norm on B_X.",
                    hint: 'Use the weak compactness of B_X and the weak continuity of f.',
                    solution: 'Let f in X* with ||f|| = 1. Since X is reflexive, B_X is weakly compact. The functional f: X to K is weakly continuous (bounded linear functionals are always weakly continuous). The continuous image of a compact set is compact, so f(B_X) is a compact subset of K. In particular, sup{|f(x)|: x in B_X} = ||f|| is attained at some x0 in B_X. Thus |f(x0)| = ||f||, and since ||x0|| <= 1, we may replace x0 by x0/||x0|| if needed (when f(x0) != 0) to get a unit vector where f attains its norm.'
                },
                {
                    id: 'ch12-ex08',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Give an explicit example of a bounded linear functional on c_0 that does not attain its norm.',
                    hint: 'Consider the functional f(x) = sum (1 - 1/n) x_n / 2^n appropriately normalized, or work with a simpler construction using the identification c_0* = l1.',
                    solution: 'Consider f = (1/2, 1/3, 1/4, ..., 1/(n+1), ...) in l1 = c_0*. Then ||f|| = sum 1/(n+1) for n >= 1, which diverges, so we need to normalize. Instead, take f = (a_n) where a_n = (1 - 1/n) / 2^n for n >= 1. Then ||f|| = sum |a_n| = sum (1 - 1/n)/2^n < sum 1/2^n = 1. For any x in c_0 with ||x||_inf <= 1, |f(x)| = |sum a_n x_n| <= sum |a_n| = ||f||. Equality requires |x_n| = 1 for all n, but then x does not converge to 0, contradicting x in c_0. Hence f does not attain its norm.'
                },
                {
                    id: 'ch12-ex09',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Use the Bishop-Phelps theorem to show that the set of support functionals of B_X (functionals achieving their norm on B_X) is dense in X*.',
                    hint: 'This is essentially a restatement. Show that if f is norm-attaining, then f is a support functional of B_X at the point where it attains its norm.',
                    solution: 'A support functional of the convex set B_X at a point x0 in the boundary of B_X is a nonzero f in X* such that Re f(x0) = sup{Re f(x): x in B_X} = ||f||. If f attains its norm at x0 with f(x0) = ||f||, then Re f(x0) = ||f|| = sup Re f(x) over B_X (since |f(x)| <= ||f|| implies Re f(x) <= ||f||), so f is a support functional. By Bishop-Phelps, the set of norm-attaining functionals is dense in X*, hence the set of support functionals is dense in X*.'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Weak Compactness in Reflexive Spaces
        // ============================================================
        {
            id: 'ch12-sec04',
            title: 'Weak Compactness in Reflexive Spaces',
            content: `<h2>Weak Compactness in Reflexive Spaces</h2>
<p>One of the most powerful consequences of reflexivity is the equivalence between weak compactness and weak sequential compactness. This is the content of the Eberlein&ndash;Smulian theorem, which is indispensable in variational methods, PDE theory, and optimization.</p>

<h3>Goldstine's Theorem</h3>
<div class="env-block theorem">
    <div class="env-title">Theorem 12.11 (Goldstine, 1938)</div>
    <div class="env-body"><p>For any normed space \\(X\\), the image \\(J(B_X)\\) is weak*-dense in \\(B_{X^{**}}\\). That is,
    \\[ \\overline{J(B_X)}^{w^*} = B_{X^{**}}. \\]</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof sketch</div>
    <div class="env-body"><p>Suppose there exists \\(\\xi \\in B_{X^{**}} \\setminus \\overline{J(B_X)}^{w^*}\\). Since \\(J(B_X)\\) is convex and weak*-closed sets separate from points outside them, by the Hahn&ndash;Banach separation theorem in the weak* topology, there exists \\(f \\in X^*\\) (since \\((X^{**}, w^*)^* = X^*\\) under canonical identification) with
    \\[ \\sup_{x \\in B_X} \\text{Re} \\, f(x) < \\text{Re} \\, \\xi(f). \\]
    But the left side equals \\(\\|f\\|\\) and the right side is at most \\(\\|\\xi\\| \\cdot \\|f\\| \\le \\|f\\|\\), a contradiction. \\(\\square\\)</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Consequence</div>
    <div class="env-body"><p>Goldstine's theorem immediately implies: \\(X\\) is reflexive iff \\(J(B_X)\\) is weak*-closed in \\(X^{**}\\), iff \\(J(B_X) = B_{X^{**}}\\). This connects reflexivity to the topological property of the canonical image being closed.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-goldstine"></div>

<h3>The Eberlein&ndash;Smulian Theorem</h3>
<div class="env-block theorem">
    <div class="env-title">Theorem 12.12 (Eberlein&ndash;Smulian)</div>
    <div class="env-body"><p>For a subset \\(A\\) of a Banach space \\(X\\), the following are equivalent:</p>
    <ol>
        <li>\\(A\\) is relatively weakly compact (its weak closure is weakly compact).</li>
        <li>\\(A\\) is relatively weakly sequentially compact (every sequence in \\(A\\) has a weakly convergent subsequence with limit in \\(X\\)).</li>
        <li>Every sequence in \\(A\\) has a weak cluster point in \\(X\\).</li>
    </ol></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof overview</div>
    <div class="env-body"><p>(1)\\(\\Rightarrow\\)(3) is immediate: in a compact space, every sequence (indeed every net) has a cluster point.</p>
    <p>(3)\\(\\Rightarrow\\)(2): Given a sequence \\((x_n)\\) in \\(A\\), let \\(Y = \\overline{\\text{span}}\\{x_n\\}\\), which is separable. One can show the weak topology on bounded subsets of a separable space is metrizable, so cluster points yield convergent subsequences.</p>
    <p>(2)\\(\\Rightarrow\\)(1): This is the deepest part. One shows that \\(\\overline{A}^w\\) is weakly countably compact, then uses the fact that in the weak topology of a Banach space, countable compactness implies compactness (via the Eberlein theorem). \\(\\square\\)</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Corollary 12.13</div>
    <div class="env-body"><p>A Banach space \\(X\\) is reflexive if and only if \\(B_X\\) is weakly sequentially compact.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-eberlein-smulian"></div>

<h3>Applications to Bounded Sequences</h3>
<div class="env-block theorem">
    <div class="env-title">Corollary 12.14</div>
    <div class="env-body"><p>In a reflexive Banach space, every bounded sequence has a weakly convergent subsequence.</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Comparison with Finite Dimensions</div>
    <div class="env-body"><p>In \\(\\mathbb{R}^n\\), the Bolzano&ndash;Weierstrass theorem says every bounded sequence has a (norm-)convergent subsequence. In infinite-dimensional reflexive spaces, we get only <em>weak</em> convergence of subsequences. In non-reflexive spaces, even this weaker conclusion fails.</p></div>
</div>`,
            visualizations: [
                {
                    id: 'viz-goldstine',
                    title: 'Goldstine Theorem: Weak* Density',
                    description: 'Visualize how J(B_X) is dense in B_{X**} under the weak* topology. In reflexive spaces they coincide; in non-reflexive spaces J(B_X) is a proper dense subset.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400});
                        var ctx = viz.ctx;

                        var isReflexive = true;
                        var btn = VizEngine.createButton(controls, 'Toggle: Reflexive / Non-Reflexive', function() {
                            isReflexive = !isReflexive;
                            draw();
                        });

                        function draw() {
                            viz.clear();

                            var cx = viz.width / 2;
                            var cy = viz.height * 0.48;
                            var R1 = 140; // B_{X**}
                            var R2 = isReflexive ? 140 : 105; // J(B_X)

                            // B_{X**} - outer ball
                            ctx.fillStyle = viz.colors.orange + '12';
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.arc(cx, cy, R1, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.stroke();

                            // J(B_X) - inner region
                            ctx.fillStyle = viz.colors.blue + '20';
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            if (isReflexive) {
                                ctx.beginPath();
                                ctx.arc(cx, cy, R2 - 2, 0, Math.PI * 2);
                                ctx.fill();
                                ctx.stroke();
                            } else {
                                ctx.setLineDash([5, 4]);
                                ctx.beginPath();
                                ctx.arc(cx, cy, R2, 0, Math.PI * 2);
                                ctx.fill();
                                ctx.stroke();
                                ctx.setLineDash([]);

                                // Scattered dots showing density
                                for (var i = 0; i < 60; i++) {
                                    var angle = (i / 60) * Math.PI * 2 + 0.1;
                                    var r = R2 + Math.random() * (R1 - R2 - 5);
                                    var dx = cx + r * Math.cos(angle);
                                    var dy = cy + r * Math.sin(angle);
                                    ctx.fillStyle = viz.colors.blue + '40';
                                    ctx.beginPath();
                                    ctx.arc(dx, dy, 2, 0, Math.PI * 2);
                                    ctx.fill();
                                }
                            }

                            // Labels
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('B_{X**}', cx + R1 + 25, cy - 10);
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('J(B_X)', cx, cy);

                            // Title
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText(isReflexive ? 'Reflexive: J(B_X) = B_{X**}' : 'Non-Reflexive: J(B_X) dense in B_{X**}', cx, 25);

                            // Status text
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillStyle = isReflexive ? viz.colors.green : viz.colors.yellow;
                            ctx.fillText(
                                isReflexive
                                    ? 'J(B_X) is w*-closed => J(B_X) = B_{X**}  (Goldstine + reflexivity)'
                                    : 'J(B_X) is w*-dense but NOT w*-closed in B_{X**}  (Goldstine)',
                                cx, viz.height - 20
                            );
                        }

                        draw();
                    }
                },
                {
                    id: 'viz-eberlein-smulian',
                    title: 'Eberlein-Smulian: Weak Sequential Compactness',
                    description: 'Animate a bounded sequence in a reflexive space producing a weakly convergent subsequence, versus a non-reflexive space where no weak subsequence converges.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400});
                        var ctx = viz.ctx;

                        var time = 0;
                        var N = 20;

                        // Generate a bounded "sequence" in 2D for visualization
                        var seqX = [];
                        var seqY = [];
                        for (var i = 0; i < N; i++) {
                            var t = i / N * Math.PI * 4;
                            seqX.push(0.8 * Math.cos(t) * (1 - i / (N * 1.5)));
                            seqY.push(0.8 * Math.sin(t) * (1 - i / (N * 1.5)));
                        }

                        // Subsequence indices (every other)
                        var subseq = [];
                        for (var j = 0; j < N; j += 2) subseq.push(j);

                        function draw(t) {
                            time = t * 0.001;
                            viz.clear();

                            // Left panel: Reflexive
                            var leftOX = viz.width * 0.25;
                            var leftOY = viz.height * 0.5;
                            var sc = 120;

                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.green;
                            ctx.textAlign = 'center';
                            ctx.fillText('Reflexive (e.g. l2)', leftOX, 25);

                            // Unit ball
                            ctx.strokeStyle = viz.colors.green + '40';
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.arc(leftOX, leftOY, sc, 0, Math.PI * 2);
                            ctx.stroke();

                            // Draw sequence spiraling in
                            var shown = Math.min(N, Math.floor(time * 2) + 1);
                            for (var k = 0; k < shown; k++) {
                                var isSubseq = subseq.indexOf(k) >= 0;
                                var px = leftOX + seqX[k] * sc;
                                var py = leftOY - seqY[k] * sc;
                                ctx.fillStyle = isSubseq ? viz.colors.blue : viz.colors.text + '60';
                                ctx.beginPath();
                                ctx.arc(px, py, isSubseq ? 5 : 3, 0, Math.PI * 2);
                                ctx.fill();
                                if (isSubseq && k > 0) {
                                    ctx.font = '9px -apple-system,sans-serif';
                                    ctx.fillText('x' + k, px + 8, py - 5);
                                }
                            }

                            // Limit point
                            ctx.fillStyle = viz.colors.orange;
                            ctx.beginPath();
                            ctx.arc(leftOX, leftOY, 6, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.fillText('weak limit', leftOX, leftOY + 20);

                            // Right panel: Non-reflexive
                            var rightOX = viz.width * 0.72;
                            var rightOY = viz.height * 0.5;

                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.red;
                            ctx.textAlign = 'center';
                            ctx.fillText('Non-reflexive (e.g. l1)', rightOX, 25);

                            ctx.strokeStyle = viz.colors.red + '40';
                            ctx.lineWidth = 1.5;
                            // l1 ball (diamond shape)
                            ctx.beginPath();
                            ctx.moveTo(rightOX, rightOY - sc);
                            ctx.lineTo(rightOX + sc, rightOY);
                            ctx.lineTo(rightOX, rightOY + sc);
                            ctx.lineTo(rightOX - sc, rightOY);
                            ctx.closePath();
                            ctx.stroke();

                            // Standard basis vectors (no weakly convergent subsequence)
                            var basisN = Math.min(8, Math.floor(time * 2) + 1);
                            for (var m = 0; m < basisN; m++) {
                                var bAngle = (m / 8) * Math.PI * 2;
                                var bx = rightOX + sc * 0.85 * Math.cos(bAngle);
                                var by = rightOY - sc * 0.85 * Math.sin(bAngle);
                                ctx.fillStyle = viz.colors.yellow;
                                ctx.beginPath();
                                ctx.arc(bx, by, 5, 0, Math.PI * 2);
                                ctx.fill();
                                ctx.font = '9px -apple-system,sans-serif';
                                ctx.fillText('e' + (m + 1), bx + 8, by - 5);
                            }

                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.fillText('||e_n - e_m|| = 2 for n != m', rightOX, rightOY + sc + 25);
                            ctx.fillText('No weakly convergent subsequence', rightOX, rightOY + sc + 42);

                            // Bottom text
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.white;
                            ctx.textAlign = 'center';
                            ctx.fillText('Eberlein-Smulian: weak compactness = weak sequential compactness in Banach spaces', viz.width / 2, viz.height - 12);
                        }

                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch12-ex10',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Use Goldstine\'s theorem to prove that a Banach space X is reflexive if and only if B_X is weakly compact.',
                    hint: 'One direction uses Goldstine plus the fact that a weakly compact set is weak*-closed under J. The other uses Banach-Alaoglu.',
                    solution: 'Forward: If X is reflexive, J(B_X) = B_{X**}. By Banach-Alaoglu, B_{X**} is w*-compact. Since J is a homeomorphism from (X, weak) to (J(X), w*) and J is surjective, B_X is weakly compact. Backward: If B_X is weakly compact, then J(B_X) is w*-compact in X**, hence w*-closed. By Goldstine, J(B_X) is w*-dense in B_{X**}. A dense closed set equals the whole space, so J(B_X) = B_{X**}, hence J is surjective and X is reflexive.'
                },
                {
                    id: 'ch12-ex11',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Prove that in l1, the standard basis vectors e_n = (0,...,0,1,0,...) form a bounded sequence with no weakly convergent subsequence.',
                    hint: 'For any subsequence e_{n_k}, construct a functional f in (l1)* = l_inf such that f(e_{n_k}) does not converge.',
                    solution: 'The sequence (e_n) lies in the unit ball of l1. Suppose some subsequence e_{n_k} converges weakly to some x in l1. For each fixed m, the coordinate functional f_m(y) = y_m is in (l1)* = l_inf. Then f_m(e_{n_k}) = delta_{m,n_k} -> f_m(x) = x_m. Since n_k -> infinity, for large enough k, n_k != m, so f_m(e_{n_k}) = 0 eventually. Thus x_m = 0 for all m, giving x = 0. But consider f = (1,1,1,...) in l_inf. Then f(e_{n_k}) = 1 for all k, while f(0) = 0 != 1. This contradicts weak convergence to 0. Hence no subsequence converges weakly.'
                },
                {
                    id: 'ch12-ex12',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Show that in a reflexive space X, every closed bounded convex set C is weakly compact.',
                    hint: 'C is contained in some multiple of B_X, which is weakly compact. A closed convex set is weakly closed.',
                    solution: 'Since C is bounded, there exists r > 0 with C subset rB_X. Since X is reflexive, B_X is weakly compact, hence rB_X is weakly compact. The set C is convex and norm-closed. By the Hahn-Banach separation theorem (or Mazur), a convex set is norm-closed iff weakly closed. Hence C is a weakly closed subset of the weakly compact set rB_X, so C is weakly compact.'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Uniformly Convex Spaces
        // ============================================================
        {
            id: 'ch12-sec05',
            title: 'Uniformly Convex Spaces',
            content: `<h2>Uniformly Convex Spaces</h2>
<p>Uniform convexity is a geometric condition on the unit ball that implies reflexivity. This gives a powerful sufficient condition that is easy to verify for many concrete spaces.</p>

<h3>Definition and Basic Properties</h3>
<div class="env-block definition">
    <div class="env-title">Definition 12.15 (Uniform Convexity)</div>
    <div class="env-body"><p>A normed space \\(X\\) is <strong>uniformly convex</strong> if for every \\(\\varepsilon > 0\\), there exists \\(\\delta > 0\\) such that for all \\(x, y \\in X\\) with \\(\\|x\\| \\le 1\\), \\(\\|y\\| \\le 1\\), and \\(\\|x - y\\| \\ge \\varepsilon\\), we have
    \\[ \\left\\|\\frac{x + y}{2}\\right\\| \\le 1 - \\delta. \\]</p></div>
</div>

<div class="env-block intuition">
    <div class="env-title">Geometric Meaning</div>
    <div class="env-body"><p>Uniform convexity means the unit ball is "uniformly round"&mdash;the midpoint of any chord connecting two points on the unit sphere must lie strictly inside the ball, with the amount of "indentation" depending only on the chord length (not the location). In contrast, the unit ball of \\(\\ell^1\\) or \\(\\ell^\\infty\\) in \\(\\mathbb{R}^2\\) has flat faces where the midpoint of a chord can lie on the boundary.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-uniform-convexity"></div>

<div class="env-block definition">
    <div class="env-title">Definition 12.16 (Modulus of Convexity)</div>
    <div class="env-body"><p>The <strong>modulus of convexity</strong> of a normed space \\(X\\) is the function \\(\\delta_X: [0, 2] \\to [0, 1]\\) defined by
    \\[ \\delta_X(\\varepsilon) = \\inf\\left\\{1 - \\left\\|\\frac{x+y}{2}\\right\\| : \\|x\\| \\le 1,\\, \\|y\\| \\le 1,\\, \\|x - y\\| \\ge \\varepsilon\\right\\}. \\]
    Then \\(X\\) is uniformly convex if and only if \\(\\delta_X(\\varepsilon) > 0\\) for all \\(\\varepsilon > 0\\).</p></div>
</div>

<h3>The Milman&ndash;Pettis Theorem</h3>
<div class="env-block theorem">
    <div class="env-title">Theorem 12.17 (Milman&ndash;Pettis, 1938/1939)</div>
    <div class="env-body"><p>Every uniformly convex Banach space is reflexive.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>Let \\(X\\) be uniformly convex and let \\(\\xi \\in X^{**}\\) with \\(\\|\\xi\\| = 1\\). By Goldstine's theorem, there exists a net \\((x_\\alpha)\\) in \\(B_X\\) with \\(J(x_\\alpha) \\to \\xi\\) in the weak* topology.</p>
    <p>We claim \\((x_\\alpha)\\) is a Cauchy net in norm. Suppose not: then there exist \\(\\varepsilon > 0\\) and subnets with \\(\\|x_\\alpha - x_\\beta\\| \\ge \\varepsilon\\). By uniform convexity, \\(\\|(x_\\alpha + x_\\beta)/2\\| \\le 1 - \\delta\\) for some \\(\\delta > 0\\). But \\(J((x_\\alpha + x_\\beta)/2) \\to \\xi\\) in weak*, and \\(\\|\\xi\\| = 1\\), while \\(\\|(x_\\alpha + x_\\beta)/2\\| \\le 1 - \\delta\\), giving \\(\\|\\xi\\| \\le 1 - \\delta < 1\\), a contradiction.</p>
    <p>Since \\(X\\) is complete, \\(x_\\alpha \\to x\\) in norm for some \\(x \\in X\\). Then \\(J(x_\\alpha) \\to J(x)\\) in norm, hence in weak*, so \\(\\xi = J(x)\\). Thus \\(J\\) is surjective. \\(\\square\\)</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark</div>
    <div class="env-body"><p>The converse is false: there exist reflexive spaces that are not uniformly convex. For example, \\(\\ell^2\\) with an equivalent non-uniformly-convex norm is still reflexive (reflexivity is preserved under equivalent norms) but not uniformly convex.</p></div>
</div>

<h3>Examples: \\(L^p\\) Spaces</h3>
<div class="env-block theorem">
    <div class="env-title">Theorem 12.18 (Clarkson, 1936)</div>
    <div class="env-body"><p>For \\(1 < p < \\infty\\), the space \\(L^p(\\mu)\\) is uniformly convex. The modulus of convexity satisfies:</p>
    <ul>
        <li>For \\(2 \\le p < \\infty\\): \\(\\delta_{L^p}(\\varepsilon) \\ge 1 - \\left(1 - (\\varepsilon/2)^p\\right)^{1/p}\\).</li>
        <li>For \\(1 < p \\le 2\\): \\(\\delta_{L^p}(\\varepsilon) \\ge (p-1)\\varepsilon^2/8\\) (Hanner's inequalities).</li>
    </ul></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof sketch (via Clarkson's inequalities)</div>
    <div class="env-body"><p>For \\(2 \\le p < \\infty\\), Clarkson proved:
    \\[ \\left\\|\\frac{f+g}{2}\\right\\|_p^p + \\left\\|\\frac{f-g}{2}\\right\\|_p^p \\le \\frac{\\|f\\|_p^p + \\|g\\|_p^p}{2}. \\]
    If \\(\\|f\\|_p \\le 1\\), \\(\\|g\\|_p \\le 1\\), and \\(\\|f - g\\|_p \\ge \\varepsilon\\), then
    \\[ \\left\\|\\frac{f+g}{2}\\right\\|_p^p \\le 1 - \\left(\\frac{\\varepsilon}{2}\\right)^p, \\]
    giving uniform convexity with explicit bounds. \\(\\square\\)</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-unit-balls-lp"></div>

<div class="env-block theorem">
    <div class="env-title">Corollary 12.19</div>
    <div class="env-body"><p>Combining Clarkson and Milman&ndash;Pettis: \\(L^p(\\mu)\\) is reflexive for all \\(1 < p < \\infty\\).</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Summary of Implications</div>
    <div class="env-body"><p>
    \\[ \\text{Uniformly convex} \\implies \\text{Reflexive} \\implies \\text{Every } f \\in X^* \\text{ attains its norm} \\implies B_X \\text{ weakly compact.} \\]
    None of the reverse implications hold in general.</p></div>
</div>`,
            visualizations: [
                {
                    id: 'viz-uniform-convexity',
                    title: 'Uniform Convexity: Unit Ball Shapes',
                    description: 'Compare unit balls for different norms. Adjust p to see how the l^p unit ball transitions from diamond (p=1) to circle (p=2) to square (p=inf). Only 1 < p < infinity gives uniform convexity.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 100});
                        var ctx = viz.ctx;

                        var pVal = 2.0;
                        var slider = VizEngine.createSlider(controls, 'p = ', 1.0, 10.0, pVal, 0.1, function(v) {
                            pVal = v;
                        });

                        function lpNorm(x, y, p) {
                            if (p >= 50) return Math.max(Math.abs(x), Math.abs(y));
                            return Math.pow(Math.pow(Math.abs(x), p) + Math.pow(Math.abs(y), p), 1 / p);
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var p = pVal;

                            // Draw unit ball boundary: {(x,y): |x|^p + |y|^p = 1}
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var steps = 400;
                            for (var i = 0; i <= steps; i++) {
                                var theta = (i / steps) * Math.PI * 2;
                                var cs = Math.cos(theta);
                                var sn = Math.sin(theta);
                                var r;
                                if (p >= 50) {
                                    r = 1 / Math.max(Math.abs(cs), Math.abs(sn));
                                } else {
                                    r = 1 / Math.pow(Math.pow(Math.abs(cs), p) + Math.pow(Math.abs(sn), p), 1 / p);
                                }
                                var sx = viz.originX + r * cs * viz.scale;
                                var sy = viz.originY - r * sn * viz.scale;
                                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                            }
                            ctx.closePath();
                            ctx.fillStyle = viz.colors.blue + '12';
                            ctx.fill();
                            ctx.stroke();

                            // Show two points on the ball and their midpoint
                            var angle1 = 0.4;
                            var angle2 = 1.2;

                            function pointOnBall(angle) {
                                var cs = Math.cos(angle);
                                var sn = Math.sin(angle);
                                var r;
                                if (p >= 50) {
                                    r = 1 / Math.max(Math.abs(cs), Math.abs(sn));
                                } else {
                                    r = 1 / Math.pow(Math.pow(Math.abs(cs), p) + Math.pow(Math.abs(sn), p), 1 / p);
                                }
                                return [r * cs, r * sn];
                            }

                            var pt1 = pointOnBall(angle1);
                            var pt2 = pointOnBall(angle2);
                            var mid = [(pt1[0] + pt2[0]) / 2, (pt1[1] + pt2[1]) / 2];

                            viz.drawPoint(pt1[0], pt1[1], viz.colors.teal, 'x', 6);
                            viz.drawPoint(pt2[0], pt2[1], viz.colors.orange, 'y', 6);
                            viz.drawSegment(pt1[0], pt1[1], pt2[0], pt2[1], viz.colors.white + '40', 1, true);
                            viz.drawPoint(mid[0], mid[1], viz.colors.green, '(x+y)/2', 6);

                            // Compute how deep the midpoint is
                            var midNorm = lpNorm(mid[0], mid[1], p);
                            var indent = 1 - midNorm;

                            // Info panel
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('p = ' + p.toFixed(1), 20, 30);

                            var isUC = (p > 1.001 && p < 49);
                            ctx.fillStyle = isUC ? viz.colors.green : viz.colors.red;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.fillText(isUC ? 'Uniformly Convex' : 'NOT Uniformly Convex', 20, 50);

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('||(x+y)/2|| = ' + midNorm.toFixed(4), 20, 70);
                            ctx.fillText('Indentation: 1 - ||(x+y)/2|| = ' + indent.toFixed(4), 20, 88);

                            // Milman-Pettis note
                            ctx.textAlign = 'right';
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            if (isUC) {
                                ctx.fillText('Milman-Pettis: uniformly convex => reflexive', viz.width - 20, 30);
                            } else if (p <= 1.001) {
                                ctx.fillText('p = 1: not uniformly convex, not reflexive', viz.width - 20, 30);
                            } else {
                                ctx.fillText('p = inf: not uniformly convex, not reflexive', viz.width - 20, 30);
                            }
                        }

                        viz.animate(function() { draw(); });
                    }
                },
                {
                    id: 'viz-unit-balls-lp',
                    title: 'L^p Unit Balls: Side-by-Side Comparison',
                    description: 'See the unit balls of l^1, l^2, l^4, and l^infinity side by side, highlighting which are uniformly convex.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 380});
                        var ctx = viz.ctx;

                        viz.clear();

                        var pValues = [1, 2, 4, 1000];
                        var labels = ['l1 (p=1)', 'l2 (p=2)', 'l4 (p=4)', 'l_inf (p=inf)'];
                        var ucStatus = [false, true, true, false];
                        var colors = [viz.colors.red, viz.colors.green, viz.colors.green, viz.colors.red];
                        var spacing = viz.width / 4;

                        pValues.forEach(function(p, idx) {
                            var cx = spacing * (idx + 0.5);
                            var cy = viz.height * 0.5;
                            var R = 70;

                            // Draw unit ball
                            ctx.beginPath();
                            var steps = 300;
                            for (var i = 0; i <= steps; i++) {
                                var theta = (i / steps) * Math.PI * 2;
                                var cs = Math.cos(theta);
                                var sn = Math.sin(theta);
                                var r;
                                if (p >= 50) {
                                    r = 1 / Math.max(Math.abs(cs), Math.abs(sn));
                                } else {
                                    r = 1 / Math.pow(Math.pow(Math.abs(cs), p) + Math.pow(Math.abs(sn), p), 1 / p);
                                }
                                var sx = cx + r * R * cs;
                                var sy = cy - r * R * sn;
                                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                            }
                            ctx.closePath();
                            ctx.fillStyle = colors[idx] + '15';
                            ctx.fill();
                            ctx.strokeStyle = colors[idx];
                            ctx.lineWidth = 2;
                            ctx.stroke();

                            // Label
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.fillStyle = colors[idx];
                            ctx.textAlign = 'center';
                            ctx.fillText(labels[idx], cx, cy - R - 15);

                            // UC status
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillStyle = ucStatus[idx] ? viz.colors.green : viz.colors.red;
                            ctx.fillText(ucStatus[idx] ? 'UC + Reflexive' : 'Not UC, Not Reflexive', cx, cy + R + 20);
                        });

                        // Bottom note
                        ctx.font = '13px -apple-system,sans-serif';
                        ctx.fillStyle = viz.colors.white;
                        ctx.textAlign = 'center';
                        ctx.fillText('Uniformly convex (UC) for 1 < p < inf. Flat faces at p=1 and p=inf break uniform convexity.', viz.width / 2, viz.height - 20);

                        // Implication chain
                        ctx.font = 'bold 12px -apple-system,sans-serif';
                        ctx.fillStyle = viz.colors.teal;
                        ctx.fillText('UC  =>  Reflexive  =>  f attains norm  =>  B_X weakly compact', viz.width / 2, viz.height - 45);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch12-ex13',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Prove that the space l^1 (in R^2, i.e., R^2 with the l^1 norm) is NOT uniformly convex by exhibiting x, y on the unit sphere with ||x - y|| >= 1 but ||(x+y)/2|| = 1.',
                    hint: 'Try x = (1, 0) and y = (0, 1).',
                    solution: 'Take x = (1, 0) and y = (0, 1) in R^2 with the l^1 norm. Then ||x||_1 = 1, ||y||_1 = 1, and ||x - y||_1 = ||(1, -1)||_1 = 2 >= epsilon for any epsilon <= 2. The midpoint is (x+y)/2 = (1/2, 1/2), and ||(1/2, 1/2)||_1 = 1. So the midpoint lies on the unit sphere, not strictly inside. This shows delta(epsilon) = 0 for epsilon <= 2, violating uniform convexity.'
                },
                {
                    id: 'ch12-ex14',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Prove that a Hilbert space H is uniformly convex with modulus of convexity delta(epsilon) = 1 - sqrt(1 - epsilon^2/4).',
                    hint: 'Use the parallelogram law: ||x + y||^2 + ||x - y||^2 = 2(||x||^2 + ||y||^2).',
                    solution: 'Let ||x|| <= 1, ||y|| <= 1, ||x - y|| >= epsilon. By the parallelogram law: ||(x+y)/2||^2 = (||x+y||^2)/4 = (2||x||^2 + 2||y||^2 - ||x-y||^2)/4 <= (2 + 2 - epsilon^2)/4 = 1 - epsilon^2/4. Hence ||(x+y)/2|| <= sqrt(1 - epsilon^2/4), giving delta(epsilon) >= 1 - sqrt(1 - epsilon^2/4) > 0 for epsilon > 0. To show this is sharp, take x, y unit vectors with ||x-y|| = epsilon; by the computation above equality holds when ||x|| = ||y|| = 1.'
                },
                {
                    id: 'ch12-ex15',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Prove that uniform convexity is NOT preserved under isomorphism (equivalent renorming). That is, give an example of a uniformly convex space X and an equivalent norm on X that makes it not uniformly convex.',
                    hint: 'Consider l^2 with the norm ||x|| = max(||x||_2, 2|x_1|). This is equivalent to the l^2 norm but has a flat spot.',
                    solution: 'On X = R^2, the l^2 norm is uniformly convex. Define |||x||| = max(||x||_2, sqrt(2)|x_1|). This is an equivalent norm since ||x||_2 <= |||x||| <= sqrt(2)||x||_2. However, the points x = (1/sqrt(2), 1/sqrt(2)) and y = (1/sqrt(2), -1/sqrt(2)) both have |||x||| = |||y||| = 1 (both norms give 1). Their midpoint is (1/sqrt(2), 0), with |||(1/sqrt(2), 0)||| = max(1/sqrt(2), sqrt(2)/sqrt(2)) = max(1/sqrt(2), 1) = 1. So the midpoint is on the unit sphere, violating uniform convexity.'
                },
                {
                    id: 'ch12-ex16',
                    type: 'proof',
                    difficulty: 5,
                    question: 'Prove the Milman-Pettis theorem: every uniformly convex Banach space is reflexive.',
                    hint: 'Use Goldstine to approximate any xi in B_{X**} by a net in J(B_X), then use uniform convexity to show the net is Cauchy.',
                    solution: 'Let X be uniformly convex and xi in X** with ||xi|| = 1. By Goldstine, there is a net (x_alpha) in B_X with J(x_alpha) -> xi weak*. Claim: (x_alpha) is norm-Cauchy. If not, there exist epsilon > 0 and indices alpha, beta with ||x_alpha - x_beta|| >= epsilon. By uniform convexity, ||(x_alpha + x_beta)/2|| <= 1 - delta for some delta > 0. For any f in X* with ||f|| <= 1, |J((x_alpha + x_beta)/2)(f)| = |f((x_alpha+x_beta)/2)| <= 1 - delta, so ||J((x_alpha+x_beta)/2)|| <= 1-delta. But J((x_alpha+x_beta)/2) = (J(x_alpha)+J(x_beta))/2 -> xi in weak*, and the norm is weak*-lower-semicontinuous, so ||xi|| <= 1 - delta < 1, contradicting ||xi|| = 1. Hence (x_alpha) is Cauchy, converges to some x in X, and xi = J(x). So J is surjective.'
                }
            ]
        }
    ]
});
