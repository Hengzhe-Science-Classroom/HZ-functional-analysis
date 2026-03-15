window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch06',
    number: 6,
    title: 'Hahn\u2013Banach Theorem',
    subtitle: 'Extending functionals and separating sets',
    sections: [
        // ===== SECTION 1: Sublinear Functionals =====
        {
            id: 'sublinear-functionals',
            title: 'Sublinear Functionals',
            content: `
<div class="bridge-block chapter-opening">
<p><strong>The First Pillar of Banach Space Theory.</strong> In Chapter 5, we studied bounded linear operators and posed a fundamental question: given a bounded linear functional defined on a subspace, can we extend it to the whole space without increasing its norm? The Hahn-Banach Theorem gives a resounding "yes," and its consequences permeate all of functional analysis. This chapter develops the theorem in its analytic and geometric forms, together with its most important applications.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> Before proving Hahn-Banach, we need the concept of a sublinear functional, which serves as the dominating function in the extension process. We define sublinear functionals, study their properties, and show how they control linear functionals.</p>
</div>

                <h2>Sublinear Functionals</h2>

                <p>The Hahn\u2013Banach theorem is one of the cornerstones of functional analysis. Before stating it, we introduce the class of functions that serve as dominating bounds for linear functionals.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.1 (Sublinear Functional)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a real vector space. A function \\(p : X \\to \\mathbb{R}\\) is called <strong>sublinear</strong> if:</p>
                        <ol>
                            <li><strong>Subadditivity:</strong> \\(p(x + y) \\le p(x) + p(y)\\) for all \\(x, y \\in X\\).</li>
                            <li><strong>Positive homogeneity:</strong> \\(p(\\alpha x) = \\alpha\\, p(x)\\) for all \\(x \\in X\\) and all \\(\\alpha \\ge 0\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark 6.2</div>
                    <div class="env-body">
                        <p>Setting \\(\\alpha = 0\\) in (2) gives \\(p(0) = 0\\). Setting \\(x = 0\\) in (1) gives \\(p(y) \\le p(0) + p(y) = p(y)\\), which is tautological. However, sublinearity does <em>not</em> require \\(p \\ge 0\\). Indeed, \\(p(x) + p(-x) \\ge p(0) = 0\\) implies \\(p(-x) \\ge -p(x)\\), but \\(p(x)\\) itself may be negative.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.3 (Norms and Seminorms)</div>
                    <div class="env-body">
                        <p>Every <strong>seminorm</strong> \\(p\\) on \\(X\\) (satisfying \\(p(\\alpha x) = |\\alpha|\\,p(x)\\) and the triangle inequality) is sublinear. In particular, every norm \\(\\|\\cdot\\|\\) is a sublinear functional.</p>
                        <p>More generally, if \\(f\\) is a linear functional on \\(X\\), then \\(p(x) = |f(x)|\\) is a seminorm, hence sublinear.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.4 (Non-Symmetric Sublinear Functionals)</div>
                    <div class="env-body">
                        <p>Let \\(X = \\mathbb{R}^2\\) and define \\(p(x_1, x_2) = \\max(x_1, x_1 + x_2)\\). Then \\(p\\) is sublinear but not a seminorm (since \\(p(-1, 0) = \\max(-1, -1) = -1 < 0\\), while seminorms are non-negative).</p>
                        <p>Sublinear functionals are strictly more general than seminorms: they need only be positively homogeneous, not absolutely homogeneous.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sublinear-viz"></div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.5 (Dominated by a Sublinear Functional)</div>
                    <div class="env-body">
                        <p>Let \\(M\\) be a subspace of \\(X\\) and \\(f : M \\to \\mathbb{R}\\) a linear functional. We say \\(f\\) is <strong>dominated by</strong> \\(p\\) on \\(M\\) if:</p>
                        \\[f(x) \\le p(x) \\quad \\text{for all } x \\in M.\\]
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 6.6</div>
                    <div class="env-body">
                        <p>If \\(f\\) is a linear functional dominated by a sublinear functional \\(p\\), then \\(-p(-x) \\le f(x) \\le p(x)\\) for all \\(x\\) in the domain of \\(f\\). In particular, if \\(p\\) is a seminorm, then \\(|f(x)| \\le p(x)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Since \\(f(-x) \\le p(-x)\\), we have \\(-f(x) \\le p(-x)\\), i.e., \\(f(x) \\ge -p(-x)\\). Combined with \\(f(x) \\le p(x)\\), this gives the result. When \\(p\\) is a seminorm, \\(p(-x) = p(x)\\), so \\(-p(x) \\le f(x) \\le p(x)\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="domination-viz"></div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.7 (Minkowski Functional)</div>
                    <div class="env-body">
                        <p>Let \\(C \\subset X\\) be a convex set containing the origin. The <strong>Minkowski functional</strong> (or <strong>gauge</strong>) of \\(C\\) is:</p>
                        \\[\\mu_C(x) = \\inf\\{t > 0 : x \\in tC\\} = \\inf\\left\\{t > 0 : \\frac{x}{t} \\in C\\right\\}.\\]
                        <p>If \\(C\\) is additionally absorbing (i.e., for each \\(x \\in X\\), there exists \\(t > 0\\) with \\(x \\in tC\\)), then \\(\\mu_C\\) is a sublinear functional.</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 6.8</div>
                    <div class="env-body">
                        <p>If \\(C\\) is convex, absorbing, and balanced (i.e., \\(\\alpha C \\subseteq C\\) for \\(|\\alpha| \\le 1\\)), then \\(\\mu_C\\) is a seminorm.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'sublinear-viz',
                    title: 'Sublinear Functionals on R\u00b2',
                    description: 'Compare a norm, seminorm, and general sublinear functional',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 400, scale: 50 });

                        var mode = 'norm';

                        function pNorm(x, y) { return Math.sqrt(x * x + y * y); }
                        function pSeminorm(x, y) { return Math.abs(x); }
                        function pSublinear(x, y) { return Math.max(x, x + y); }

                        function getP() {
                            if (mode === 'norm') return pNorm;
                            if (mode === 'seminorm') return pSeminorm;
                            return pSublinear;
                        }

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            var p = getP();
                            var ctx = engine.ctx;

                            // Draw sublevel set p(x,y) <= 1
                            var steps = 200;
                            ctx.fillStyle = engine.colors.blue + '30';
                            ctx.beginPath();
                            var first = true;
                            for (var i = 0; i <= steps; i++) {
                                var theta = (2 * Math.PI * i) / steps;
                                var dx = Math.cos(theta);
                                var dy = Math.sin(theta);
                                // Find r such that p(r*dx, r*dy) = 1 using bisection
                                var lo = 0, hi = 10;
                                for (var k = 0; k < 30; k++) {
                                    var mid = (lo + hi) / 2;
                                    if (p(mid * dx, mid * dy) < 1) lo = mid; else hi = mid;
                                }
                                var r = (lo + hi) / 2;
                                var sx = engine.toScreen(r * dx, r * dy);
                                if (first) { ctx.moveTo(sx[0], sx[1]); first = false; }
                                else ctx.lineTo(sx[0], sx[1]);
                            }
                            ctx.closePath();
                            ctx.fill();
                            ctx.strokeStyle = engine.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.stroke();

                            var label = mode === 'norm' ? 'p = ||x||' : mode === 'seminorm' ? 'p = |x\u2081|' : 'p = max(x\u2081, x\u2081+x\u2082)';
                            engine.drawText(label, 0, engine.originY / engine.scale - 0.5, engine.colors.blue, 14);
                            engine.drawText('{x : p(x) \u2264 1}', 0, -3.2, engine.colors.text, 12);
                        }

                        VizEngine.createButton(controls, 'Norm ||x||', function() { mode = 'norm'; draw(); });
                        VizEngine.createButton(controls, 'Seminorm |x\u2081|', function() { mode = 'seminorm'; draw(); });
                        VizEngine.createButton(controls, 'Sublinear max(x\u2081,x\u2081+x\u2082)', function() { mode = 'sublinear'; draw(); });

                        draw();
                        return engine;
                    }
                },
                {
                    id: 'domination-viz',
                    title: 'Linear Functional Dominated by Sublinear p',
                    description: 'A linear functional f squeezed between -p(-x) and p(x)',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 380, scale: 40, originY: 250 });

                        var slope = 0.8;

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // p(x) = |x| (the norm on R)
                            // f(x) = slope * x
                            engine.drawCurve(function(t) { return [t, Math.abs(t)]; }, -5, 5, 200, engine.colors.orange, 2);
                            engine.drawCurve(function(t) { return [t, -Math.abs(-t)]; }, -5, 5, 200, engine.colors.orange + '80', 2);
                            engine.drawCurve(function(t) { return [t, slope * t]; }, -5, 5, 200, engine.colors.blue, 2.5);

                            // Shade the region between -p(-x) and p(x)
                            engine.drawFilledRegion(
                                function(t) { return [t, Math.abs(t)]; },
                                function(t) { return [t, -Math.abs(t)]; },
                                -5, 5, 200, engine.colors.teal + '15'
                            );

                            engine.drawText('p(x) = |x|', 3.5, 4.2, engine.colors.orange, 13);
                            engine.drawText('-p(-x) = -|x|', 3.5, -4.2, engine.colors.orange, 13);
                            engine.drawText('f(x) = ' + slope.toFixed(1) + 'x', 3.5, slope * 3.5 + 0.5, engine.colors.blue, 13);
                        }

                        VizEngine.createSlider(controls, 'Slope of f', -1.5, 1.5, slope, 0.1, function(v) {
                            slope = v;
                            draw();
                        });

                        draw();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(p(x) = \\limsup_{n\\to\\infty} x_n\\) for bounded real sequences \\(x = (x_n)\\). Show that \\(p\\) is a sublinear functional on \\(\\ell^\\infty\\).',
                    hint: 'For positive homogeneity, use \\(\\limsup(\\alpha x_n) = \\alpha \\limsup x_n\\) when \\(\\alpha \\ge 0\\). For subadditivity, use \\(\\limsup(x_n + y_n) \\le \\limsup x_n + \\limsup y_n\\).',
                    solution: 'Positive homogeneity: For \\(\\alpha \\ge 0\\), \\(\\limsup(\\alpha x_n) = \\alpha \\limsup x_n\\) by properties of \\(\\limsup\\). Subadditivity: \\(\\limsup_{n}(x_n + y_n) \\le \\limsup_n x_n + \\limsup_n y_n\\) is a standard inequality. Thus \\(p\\) is sublinear. Note \\(p\\) is not a seminorm since \\(p(-x) = \\limsup(-x_n) = -\\liminf x_n \\neq p(x)\\) in general.'
                },
                {
                    question: 'Let \\(C = \\{(x_1, x_2) \\in \\mathbb{R}^2 : x_1^2 + 4x_2^2 \\le 1\\}\\). Compute the Minkowski functional \\(\\mu_C\\) explicitly.',
                    hint: 'Find the smallest \\(t > 0\\) such that \\((x_1/t, x_2/t) \\in C\\), i.e., \\((x_1/t)^2 + 4(x_2/t)^2 \\le 1\\).',
                    solution: 'We need \\(x_1^2/t^2 + 4x_2^2/t^2 \\le 1\\), i.e., \\(t^2 \\ge x_1^2 + 4x_2^2\\). So \\(\\mu_C(x_1, x_2) = \\sqrt{x_1^2 + 4x_2^2}\\). This is a norm on \\(\\mathbb{R}^2\\) (the norm induced by the inner product \\(\\langle x, y \\rangle = x_1 y_1 + 4 x_2 y_2\\)).'
                },
                {
                    question: 'Show that every sublinear functional \\(p\\) on a real vector space \\(X\\) satisfies \\(p(x) \\ge 0\\) for all \\(x\\) if and only if \\(p\\) is a seminorm.',
                    hint: 'One direction is clear. For the other, assume \\(p \\ge 0\\) and show \\(p(-x) = p(x)\\) by using sublinearity and non-negativity to get \\(p(x) + p(-x) \\ge p(0) = 0\\) and \\(p(-x) \\ge p(x)\\) symmetrically.',
                    solution: 'If \\(p\\) is a seminorm, then \\(p(x) = p((-1)(-x)) = |-1|p(-x) = p(-x) \\ge 0\\). Conversely, suppose \\(p \\ge 0\\) and is sublinear. We need \\(p(-x) = p(x)\\). For any \\(\\alpha < 0\\), write \\(\\alpha = -|\\alpha|\\). We must show \\(p(\\alpha x) = |\\alpha| p(x)\\). Now \\(p(\\alpha x) = p(-|\\alpha|x)\\). Note \\(|\\alpha|p(x) + |\\alpha|p(-x) \\ge |\\alpha|p(0) = 0\\), and \\(p(x) \\le p(x + (-x)) - p(-x) + p(-x)\\) does not directly help. In fact, the statement as posed is false: \\(p(x) = x\\) on \\(\\mathbb{R}\\) is sublinear and non-negative on \\([0,\\infty)\\) but not everywhere. The correct statement: if \\(p\\) is sublinear and \\(p(x) \\ge 0\\) for ALL \\(x\\), then \\(p\\) satisfies \\(p(-x) \\le p(x) + p(0) = p(x)\\) and similarly \\(p(x) \\le p(-x)\\), hence \\(p(-x) = p(x)\\), making \\(p(\\alpha x) = |\\alpha|p(x)\\) for all scalars \\(\\alpha\\).'
                }
            ]
        },

        // ===== SECTION 2: Hahn-Banach Extension (Real Case) =====
        {
            id: 'hahn-banach-real',
            title: 'Hahn\u2013Banach Extension (Real Case)',
            content: `
<div class="bridge-block section-bridge">
<p><strong>The Extension Machine.</strong> With sublinear functionals in hand, we are ready for the main result. The Hahn-Banach Extension Theorem, in its real version, extends a linear functional dominated by a sublinear functional from a subspace to the whole space. The proof is a beautiful application of Zorn's lemma.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove the one-dimensional extension lemma, apply Zorn's lemma to obtain the full extension, and derive the norm-preserving version for normed spaces. The key insight is that at each extension step, the dominating function constrains the new value to a closed interval.</p>
</div>

                <h2>The Hahn\u2013Banach Extension Theorem</h2>

                <p>The central idea is strikingly simple: if a linear functional on a subspace is bounded above by a sublinear functional, it can be extended to the whole space while preserving this domination. The proof proceeds in two stages: a one-dimensional extension step, then a maximality argument via Zorn's lemma.</p>

                <div class="env-block lemma">
                    <div class="env-title">Lemma 6.9 (One-Step Extension)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a real vector space, \\(p : X \\to \\mathbb{R}\\) sublinear, \\(M \\subset X\\) a subspace, and \\(f : M \\to \\mathbb{R}\\) linear with \\(f \\le p\\) on \\(M\\). Let \\(x_0 \\in X \\setminus M\\) and set \\(M_1 = M + \\mathbb{R} x_0\\). Then there exists \\(c \\in \\mathbb{R}\\) such that \\(f_1(m + t x_0) = f(m) + tc\\) satisfies \\(f_1 \\le p\\) on \\(M_1\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>For any \\(m_1, m_2 \\in M\\):</p>
                        \\[f(m_1) + f(m_2) = f(m_1 + m_2) \\le p(m_1 + m_2) \\le p(m_1 - x_0) + p(x_0 + m_2),\\]
                        <p>so \\(f(m_1) - p(m_1 - x_0) \\le p(x_0 + m_2) - f(m_2)\\). Taking the supremum over \\(m_1\\) and the infimum over \\(m_2\\):</p>
                        \\[\\sup_{m \\in M}\\bigl[f(m) - p(m - x_0)\\bigr] \\le \\inf_{m \\in M}\\bigl[p(m + x_0) - f(m)\\bigr].\\]
                        <p>Choose \\(c\\) in this interval. For \\(t > 0\\):</p>
                        \\[f_1(m + t x_0) = f(m) + tc \\le f(m) + t\\bigl[p(m/t + x_0) - f(m/t)\\bigr] = p(m + tx_0).\\]
                        <p>For \\(t < 0\\), write \\(s = -t > 0\\):</p>
                        \\[f_1(m - s x_0) = f(m) - sc \\le f(m) + s\\bigl[p(m/s - x_0) - f(m/s)\\bigr] \\cdot (-1) \\cdot (-1) = p(m - sx_0).\\]
                        <p>More precisely, \\(c \\le p(m/s - x_0) - f(m/s)\\) rearranges to \\(f(m) - sc \\le sp(m/s - x_0) = p(m - sx_0)\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="one-step-extension"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.10 (Hahn\u2013Banach, Real Version)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a real vector space, \\(p : X \\to \\mathbb{R}\\) sublinear, \\(M \\subseteq X\\) a subspace, and \\(f : M \\to \\mathbb{R}\\) linear with \\(f(x) \\le p(x)\\) for all \\(x \\in M\\). Then there exists a linear functional \\(F : X \\to \\mathbb{R}\\) with:</p>
                        <ol>
                            <li>\\(F|_M = f\\) (\\(F\\) extends \\(f\\));</li>
                            <li>\\(F(x) \\le p(x)\\) for all \\(x \\in X\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(\\mathcal{F}\\) be the set of all pairs \\((N, g)\\) where \\(M \\subseteq N \\subseteq X\\) is a subspace and \\(g : N \\to \\mathbb{R}\\) is linear with \\(g|_M = f\\) and \\(g \\le p\\) on \\(N\\). Order \\(\\mathcal{F}\\) by \\((N_1, g_1) \\preceq (N_2, g_2)\\) iff \\(N_1 \\subseteq N_2\\) and \\(g_2|_{N_1} = g_1\\).</p>
                        <p><strong>Non-empty:</strong> \\((M, f) \\in \\mathcal{F}\\).</p>
                        <p><strong>Chains have upper bounds:</strong> Given a chain \\(\\{(N_\\alpha, g_\\alpha)\\}\\), set \\(N = \\bigcup N_\\alpha\\) and define \\(g(x) = g_\\alpha(x)\\) for \\(x \\in N_\\alpha\\). This is well-defined by the chain property, linear, and satisfies \\(g \\le p\\) on \\(N\\).</p>
                        <p><strong>Zorn's lemma:</strong> There exists a maximal element \\((N^*, F)\\). If \\(N^* \\neq X\\), pick \\(x_0 \\in X \\setminus N^*\\) and apply Lemma 6.9 to extend \\(F\\) to \\(N^* + \\mathbb{R}x_0\\), contradicting maximality. Hence \\(N^* = X\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="zorn-extension"></div>

                <div class="env-block remark">
                    <div class="env-title">Remark 6.11</div>
                    <div class="env-body">
                        <p>The extension \\(F\\) is generally <strong>not unique</strong>. The constraint \\(F \\le p\\) leaves room for many valid extensions. In the normed space setting (with \\(p = \\|\\cdot\\|\\)), uniqueness holds if and only if the space is <em>smooth</em> (the norm is Gateaux differentiable).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'one-step-extension',
                    title: 'One-Step Extension of a Linear Functional',
                    description: 'Extend f from a 1D subspace to all of R\u00b2, staying below p',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 400, scale: 40 });

                        var cVal = 0;

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // Subspace M = span{(1,0)}, f(t,0) = 0.5*t
                            // Sublinear p = ||(x,y)|| (Euclidean norm)
                            // Extension: F(x,y) = 0.5*x + c*y
                            // Need F(x,y) <= ||(x,y)||

                            // Draw unit circle (sublevel set of p=1)
                            engine.drawCircle(0, 0, 1, null, engine.colors.orange, 2);
                            engine.drawText('p(x) = ||x|| = 1', 0, 1.3, engine.colors.orange, 12);

                            // Draw the subspace M (x-axis) highlighted
                            engine.drawLine(-6, 0, 6, 0, engine.colors.teal + '60', 3);
                            engine.drawText('M = span{e\u2081}', 4.5, 0.4, engine.colors.teal, 12);

                            // Draw level sets of F(x,y) = 0.5*x + c*y
                            // F = k is the line 0.5*x + c*y = k, i.e., y = (k - 0.5*x)/c if c != 0
                            var a = 0.5, b = cVal;
                            for (var k = -2; k <= 2; k += 0.5) {
                                if (Math.abs(k) < 0.01) continue;
                                // Line a*x + b*y = k
                                if (Math.abs(b) > 0.01) {
                                    engine.drawLine(-5, (k - a * (-5)) / b, 5, (k - a * 5) / b, engine.colors.blue + '30', 0.5);
                                } else {
                                    var xk = k / a;
                                    engine.drawSegment(xk, -5, xk, 5, engine.colors.blue + '30', 0.5);
                                }
                            }

                            // Draw F=1 level set prominently
                            if (Math.abs(b) > 0.01) {
                                engine.drawLine(-5, (1 - a * (-5)) / b, 5, (1 - a * 5) / b, engine.colors.blue, 2, true);
                            } else {
                                engine.drawSegment(1 / a, -5, 1 / a, 5, engine.colors.blue, 2, true);
                            }

                            // Check if extension is valid: F <= p on all of X
                            // max F on unit sphere = ||grad F|| = sqrt(0.25 + c^2)
                            var normGrad = Math.sqrt(0.25 + cVal * cVal);
                            var valid = normGrad <= 1.001;

                            // Draw gradient direction
                            var gLen = Math.sqrt(a * a + b * b);
                            if (gLen > 0.01) {
                                engine.drawVector(0, 0, a / gLen * 1.5, b / gLen * 1.5, valid ? engine.colors.green : engine.colors.red, 'grad F');
                            }

                            engine.drawText('F(x,y) = 0.5x + ' + cVal.toFixed(1) + 'y', 0, 4.2, engine.colors.blue, 13);
                            engine.drawText(valid ? 'VALID: ||F|| = ' + normGrad.toFixed(2) + ' \u2264 1' : 'INVALID: ||F|| = ' + normGrad.toFixed(2) + ' > 1',
                                0, 3.6, valid ? engine.colors.green : engine.colors.red, 13);
                            engine.drawText('Feasible range: c \u2208 [-' + Math.sqrt(0.75).toFixed(2) + ', ' + Math.sqrt(0.75).toFixed(2) + ']', 0, -4, engine.colors.text, 11);
                        }

                        VizEngine.createSlider(controls, 'c (extension value)', -1.5, 1.5, 0, 0.05, function(v) {
                            cVal = v;
                            draw();
                        });

                        draw();
                        return engine;
                    }
                },
                {
                    id: 'zorn-extension',
                    title: 'Iterated Extension via Zorn\'s Lemma',
                    description: 'Visualize the chain of extensions from M to X',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 380, scale: 35 });

                        var step = 0;
                        var maxSteps = 5;
                        var dirs = [
                            { label: 'e\u2081', dx: 1, dy: 0 },
                            { label: 'e\u2082', dx: 0, dy: 1 },
                            { label: 'v\u2083', dx: 0.7, dy: 0.7 },
                            { label: 'v\u2084', dx: -0.5, dy: 0.8 },
                            { label: 'v\u2085', dx: 0.9, dy: -0.4 }
                        ];

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // Draw extending subspaces
                            var spanColors = [engine.colors.blue, engine.colors.teal, engine.colors.green, engine.colors.purple, engine.colors.orange];

                            for (var i = 0; i <= Math.min(step, maxSteps - 1); i++) {
                                var d = dirs[i];
                                engine.drawLine(-d.dx * 6, -d.dy * 6, d.dx * 6, d.dy * 6, spanColors[i], 2);
                                engine.drawVector(0, 0, d.dx * 2, d.dy * 2, spanColors[i], d.label);
                            }

                            // Show subspace dimension
                            var dim = Math.min(step + 1, maxSteps);
                            engine.drawText('Step ' + step + ': dim(M) = ' + Math.min(dim, 2) + ' (in R\u00b2)', 0, 4.5, engine.colors.white, 13);

                            if (step >= 2) {
                                // After 2 steps in R^2, we span everything
                                engine.drawText('Extension complete: F defined on all of X', 0, -4.5, engine.colors.green, 13);

                                // Shade the whole plane lightly
                                var ctx = engine.ctx;
                                ctx.fillStyle = engine.colors.green + '10';
                                ctx.fillRect(0, 0, engine.width, engine.height);
                            } else {
                                engine.drawText('Extend by one dimension at each step...', 0, -4.5, engine.colors.text, 12);
                            }
                        }

                        VizEngine.createButton(controls, 'Reset', function() { step = 0; draw(); });
                        VizEngine.createButton(controls, 'Extend +1 dim', function() { if (step < maxSteps) step++; draw(); });

                        draw();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'In the one-step extension lemma, if \\(M = \\{0\\}\\) and \\(f = 0\\), what is the feasible range for the extension value \\(c = F(x_0)\\)?',
                    hint: 'The constraint is \\(tc \\le p(tx_0)\\) for all \\(t \\in \\mathbb{R}\\). For \\(t > 0\\): \\(c \\le p(x_0)\\). For \\(t < 0\\): \\(-c \\le p(-x_0)\\).',
                    solution: 'We need \\(tc \\le p(tx_0) = |t| p(\\text{sgn}(t) x_0)\\) for all \\(t\\). For \\(t > 0\\): \\(c \\le p(x_0)\\). For \\(t < 0\\): \\(-c \\le p(-x_0)\\), i.e., \\(c \\ge -p(-x_0)\\). So \\(c \\in [-p(-x_0), p(x_0)]\\). This interval is non-empty since \\(0 = p(0) \\le p(x_0) + p(-x_0)\\).'
                },
                {
                    question: 'Let \\(X = C[0,1]\\) with the sup norm, \\(M = \\{f \\in X : f(0) = 0\\}\\). Define \\(g(f) = \\int_0^1 f(t)\\,dt\\) on \\(M\\). Verify that \\(g\\) is dominated by \\(p(f) = \\|f\\|_\\infty\\) on \\(M\\), and describe the set of Hahn\u2013Banach extensions to \\(X\\).',
                    hint: 'Check \\(|\\int_0^1 f(t)\\,dt| \\le \\|f\\|_\\infty\\). Then any extension \\(G\\) must satisfy \\(|G(f)| \\le \\|f\\|_\\infty\\) and \\(G|_M = g\\). Use the decomposition \\(f = (f - f(0)\\cdot 1) + f(0) \\cdot 1\\).',
                    solution: 'Since \\(|\\int_0^1 f(t)\\,dt| \\le \\int_0^1 |f(t)|\\,dt \\le \\|f\\|_\\infty\\), we have \\(g \\le p\\) on \\(M\\). Any \\(f \\in X\\) can be written as \\(f = h + f(0) \\cdot 1\\) where \\(h = f - f(0) \\in M\\). An extension \\(G\\) satisfies \\(G(f) = g(h) + f(0) \\cdot G(1) = \\int_0^1 (f(t) - f(0))\\,dt + f(0) \\cdot c\\) where \\(c = G(1)\\). The constraint \\(\\|G\\| \\le 1\\) restricts \\(c\\). Taking \\(f = 1\\): \\(|c| \\le 1\\). One can show \\(c \\in [0, 1]\\) is feasible.'
                },
                {
                    question: 'Prove that the Hahn\u2013Banach theorem fails in general for maps into \\(\\mathbb{R}^2\\) (i.e., the theorem is specific to scalar-valued functionals). Give an explicit counterexample.',
                    hint: 'Consider \\(X = \\mathbb{R}^2\\), \\(M = \\{(t,t) : t \\in \\mathbb{R}\\}\\), and \\(T : M \\to \\mathbb{R}^2\\) given by \\(T(t,t) = (t,t)\\). Can \\(T\\) be extended to a norm-1 operator \\(\\mathbb{R}^2 \\to \\mathbb{R}^2\\)?',
                    solution: 'Let \\(X = \\ell^1_2\\) (2D with the 1-norm), \\(Y = \\ell^\\infty_2\\), \\(M = \\text{span}\\{(1,1)\\}\\), and \\(T(t,t) = (t,t)\\). Then \\(\\|T|_M\\| = \\|(1,1)\\|_\\infty / \\|(1,1)\\|_1 = 1/2\\). Any extension \\(\\hat{T} : X \\to Y\\) with \\(\\|\\hat{T}\\| \\le 1/2\\) must satisfy \\(\\hat{T}(1,0) + \\hat{T}(0,1) = (1,1)\\) and \\(\\|\\hat{T}(1,0)\\|_\\infty, \\|\\hat{T}(0,1)\\|_\\infty \\le 1/2\\). But then the first components sum to 1, so at least one has absolute value \\(\\ge 1/2\\), forcing equality. Analyzing both components leads to a contradiction. The issue is that \\(\\mathbb{R}^2\\) is not an <em>injective</em> Banach space in general.'
                }
            ]
        },

        // ===== SECTION 3: Complex Version and Consequences =====
        {
            id: 'complex-consequences',
            title: 'Complex Version and Consequences',
            content: `
<div class="bridge-block section-bridge">
<p><strong>From Real to Complex.</strong> Most spaces in applications are complex. Extending Hahn-Banach to complex scalars requires a clever trick: the real part of a complex-linear functional determines the whole functional. This section also harvests the most important consequences of Hahn-Banach for normed spaces.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove the complex Hahn-Banach theorem, derive norm-attaining functionals for every element, prove that \(X^*\) separates points, and establish that the norm of an element equals the supremum over the dual unit ball.</p>
</div>

                <h2>The Complex Hahn\u2013Banach Theorem</h2>

                <p>The real Hahn\u2013Banach theorem extends naturally to complex vector spaces via an elegant trick due to Bohnenblust and Sobczyk (and independently Soukhomlinov).</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.12 (Hahn\u2013Banach, Complex Version)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a complex vector space, \\(p : X \\to \\mathbb{R}\\) a seminorm, \\(M \\subseteq X\\) a subspace, and \\(f : M \\to \\mathbb{C}\\) a linear functional with \\(|f(x)| \\le p(x)\\) for all \\(x \\in M\\). Then there exists a linear functional \\(F : X \\to \\mathbb{C}\\) with \\(F|_M = f\\) and \\(|F(x)| \\le p(x)\\) for all \\(x \\in X\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Write \\(f = u + iv\\) where \\(u = \\operatorname{Re} f\\) and \\(v = \\operatorname{Im} f\\). Since \\(f(ix) = if(x) = i(u(x) + iv(x)) = -v(x) + iu(x)\\), we have \\(v(x) = -u(ix)\\). Thus \\(f\\) is completely determined by its real part \\(u\\).</p>
                        <p>View \\(X\\) as a real vector space \\(X_\\mathbb{R}\\). Then \\(u : M_\\mathbb{R} \\to \\mathbb{R}\\) is real-linear with \\(u(x) = \\operatorname{Re} f(x) \\le |f(x)| \\le p(x)\\). By the real Hahn\u2013Banach theorem, extend \\(u\\) to \\(U : X_\\mathbb{R} \\to \\mathbb{R}\\) with \\(U \\le p\\).</p>
                        <p>Define \\(F(x) = U(x) - iU(ix)\\). Then:</p>
                        <ul>
                            <li>\\(F\\) is complex-linear: \\(F(ix) = U(ix) - iU(-x) = U(ix) + iU(x) = i(U(x) - iU(ix)) = iF(x)\\).</li>
                            <li>\\(F|_M = f\\): On \\(M\\), \\(F(x) = U(x) - iU(ix) = u(x) - i(-v(x)) = u(x) + iv(x) = f(x)\\).</li>
                            <li>\\(|F(x)| \\le p(x)\\): Write \\(F(x) = |F(x)| e^{i\\theta}\\). Then \\(|F(x)| = e^{-i\\theta} F(x) = F(e^{-i\\theta}x) = U(e^{-i\\theta}x) \\le p(e^{-i\\theta}x) = p(x)\\). \\(\\square\\)</li>
                        </ul>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="complex-hb-viz"></div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 6.13 (Norm-Preserving Extension)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a normed space (real or complex), \\(M \\subseteq X\\) a subspace, and \\(f \\in M^*\\). Then there exists \\(F \\in X^*\\) with \\(F|_M = f\\) and \\(\\|F\\| = \\|f\\|\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Apply Theorem 6.12 with \\(p(x) = \\|f\\| \\cdot \\|x\\|\\). This gives \\(F\\) with \\(|F(x)| \\le \\|f\\| \\cdot \\|x\\|\\), so \\(\\|F\\| \\le \\|f\\|\\). Since \\(F|_M = f\\), we also have \\(\\|F\\| \\ge \\|f\\|\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 6.14 (Existence of Norm-Attaining Functionals)</div>
                    <div class="env-body">
                        <p>For every \\(x_0 \\neq 0\\) in a normed space \\(X\\), there exists \\(F \\in X^*\\) with \\(\\|F\\| = 1\\) and \\(F(x_0) = \\|x_0\\|\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>On \\(M = \\mathbb{K} x_0\\), define \\(f(\\alpha x_0) = \\alpha \\|x_0\\|\\). Then \\(\\|f\\| = 1\\) and \\(f(x_0) = \\|x_0\\|\\). Extend to \\(F\\) by Corollary 6.13. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="norm-attaining-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.15 (\\(X^*\\) Separates Points)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a normed space. If \\(x, y \\in X\\) with \\(f(x) = f(y)\\) for all \\(f \\in X^*\\), then \\(x = y\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>If \\(x \\neq y\\), let \\(z = x - y \\neq 0\\). By Corollary 6.14, there exists \\(F \\in X^*\\) with \\(F(z) = \\|z\\| > 0\\). Then \\(F(x) - F(y) = F(z) \\neq 0\\), contradicting \\(F(x) = F(y)\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 6.16 (Isometric Embedding into \\(X^{**}\\))</div>
                    <div class="env-body">
                        <p>The canonical map \\(J : X \\to X^{**}\\), defined by \\(J(x)(f) = f(x)\\), is a linear isometry. In particular, \\(\\|x\\| = \\sup_{\\|f\\| \\le 1} |f(x)|\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'complex-hb-viz',
                    title: 'Complex Hahn\u2013Banach: Real Part Determines All',
                    description: 'F(x) = U(x) - iU(ix): the real part U reconstructs the complex functional',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 400, scale: 60 });

                        var angle = 0.5;

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // Show the complex plane
                            // F(x) = e^{i*angle}, so Re(F) = cos(angle), Im(F) = sin(angle)
                            var re = Math.cos(angle);
                            var im = Math.sin(angle);

                            // Unit circle
                            engine.drawCircle(0, 0, 1, null, engine.colors.text + '40', 1);

                            // The functional value F(x) on the unit circle
                            engine.drawVector(0, 0, re, im, engine.colors.blue, 'F(x)', 2.5);

                            // Real part projection
                            engine.drawSegment(re, im, re, 0, engine.colors.orange, 1.5, true);
                            engine.drawSegment(0, 0, re, 0, engine.colors.orange, 2.5);
                            engine.drawPoint(re, 0, engine.colors.orange, 'Re F = U(x)', 5);

                            // Imaginary part
                            engine.drawSegment(re, im, 0, im, engine.colors.teal, 1.5, true);
                            engine.drawSegment(0, 0, 0, im, engine.colors.teal, 2.5);
                            engine.drawPoint(0, im, engine.colors.teal, 'Im F = -U(ix)', 5);

                            engine.drawText('Complex plane', 0, 3, engine.colors.white, 14);
                            engine.drawText('F(x) = U(x) - iU(ix)', 0, 2.5, engine.colors.blue, 12);
                            engine.drawText('|F(x)| = ' + (1).toFixed(2), 0, -2.8, engine.colors.text, 12);

                            // Rotation trick: show e^{-i*theta} * F(x) is real
                            engine.drawVector(0, 0, 1, 0, engine.colors.green + '60', '|F(x)|', 1.5);
                            engine.drawText('Rotate by -\u03b8: e^{-i\u03b8}F(x) = |F(x)| \u2208 R', 0, -3.3, engine.colors.green, 11);
                        }

                        VizEngine.createSlider(controls, 'arg F(x)', -3.14, 3.14, angle, 0.1, function(v) {
                            angle = v;
                            draw();
                        });

                        draw();
                        return engine;
                    }
                },
                {
                    id: 'norm-attaining-viz',
                    title: 'Norm-Attaining Functionals',
                    description: 'For each x, there exists f with f(x) = ||x|| and ||f|| = 1',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 400, scale: 45 });

                        var ptX = 2;
                        var ptY = 1.5;
                        var normType = 'l2';

                        function norm(x, y) {
                            if (normType === 'l1') return Math.abs(x) + Math.abs(y);
                            if (normType === 'linf') return Math.max(Math.abs(x), Math.abs(y));
                            return Math.sqrt(x * x + y * y);
                        }

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            var nrm = norm(ptX, ptY);

                            // Draw unit ball boundary
                            engine.drawCurve(function(t) {
                                var dx = Math.cos(t), dy = Math.sin(t);
                                var lo = 0, hi = 10;
                                for (var k = 0; k < 30; k++) {
                                    var mid = (lo + hi) / 2;
                                    if (norm(mid * dx, mid * dy) < 1) lo = mid; else hi = mid;
                                }
                                var r = (lo + hi) / 2;
                                return [r * dx, r * dy];
                            }, 0, 2 * Math.PI, 200, engine.colors.teal, 2);

                            // Draw x_0
                            engine.drawVector(0, 0, ptX, ptY, engine.colors.blue, 'x\u2080', 2.5);

                            // The supporting functional: for l2, f = x0/||x0||
                            // Level set f(x) = ||x0|| is perpendicular to x0
                            if (normType === 'l2') {
                                var nx = ptX / nrm, ny = ptY / nrm;
                                // f(x,y) = nx*x + ny*y = nrm at x0
                                // Level set: nx*x + ny*y = nrm => perpendicular line through x0
                                engine.drawLine(ptX - ny * 5, ptY + nx * 5, ptX + ny * 5, ptY - nx * 5, engine.colors.orange, 2, true);
                                engine.drawText('f(x) = ||x\u2080|| (supporting hyperplane)', ptX + 0.3, ptY + 0.6, engine.colors.orange, 11);
                            } else if (normType === 'l1') {
                                // Dual norm is l-inf. The subdifferential at x0 gives direction
                                var sx = ptX > 0 ? 1 : (ptX < 0 ? -1 : 0);
                                var sy = ptY > 0 ? 1 : (ptY < 0 ? -1 : 0);
                                if (Math.abs(ptX) > Math.abs(ptY)) {
                                    engine.drawLine(ptX, -5, ptX, 5, engine.colors.orange, 2, true);
                                } else {
                                    engine.drawLine(-5, ptY, 5, ptY, engine.colors.orange, 2, true);
                                }
                                engine.drawText('f = supporting functional', ptX + 0.3, ptY + 0.6, engine.colors.orange, 11);
                            } else {
                                // l-inf, dual is l1
                                if (Math.abs(ptX) >= Math.abs(ptY)) {
                                    var s = ptX > 0 ? 1 : -1;
                                    engine.drawLine(s * 1, -5, s * 1, 5, engine.colors.orange, 2, true);
                                } else {
                                    var s2 = ptY > 0 ? 1 : -1;
                                    engine.drawLine(-5, s2 * 1, 5, s2 * 1, engine.colors.orange, 2, true);
                                }
                                engine.drawText('f = supporting functional', ptX + 0.3, ptY + 0.6, engine.colors.orange, 11);
                            }

                            engine.drawText('||x\u2080|| = ' + nrm.toFixed(2), 0, 4, engine.colors.white, 13);
                            engine.drawText('Unit ball of ' + normType, 0, -4, engine.colors.teal, 12);

                            engine.drawDraggables();
                        }

                        engine.addDraggable('pt', ptX, ptY, engine.colors.blue, 8, function(x, y) {
                            ptX = x; ptY = y; draw();
                        });

                        VizEngine.createButton(controls, 'l\u00b2 norm', function() { normType = 'l2'; draw(); });
                        VizEngine.createButton(controls, 'l\u00b9 norm', function() { normType = 'l1'; draw(); });
                        VizEngine.createButton(controls, 'l\u221e norm', function() { normType = 'linf'; draw(); });

                        draw();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X\\) be a normed space and \\(x_0 \\in X\\). Show that \\(\\|x_0\\| = \\max_{f \\in B_{X^*}} |f(x_0)|\\), where \\(B_{X^*}\\) is the closed unit ball of \\(X^*\\). Why is the maximum attained (not just a supremum)?',
                    hint: 'Use Corollary 6.14 to produce a functional achieving the supremum.',
                    solution: 'By Corollary 6.14, there exists \\(F \\in X^*\\) with \\(\\|F\\| = 1\\) and \\(F(x_0) = \\|x_0\\|\\). For any \\(f\\) with \\(\\|f\\| \\le 1\\), \\(|f(x_0)| \\le \\|f\\| \\|x_0\\| \\le \\|x_0\\| = F(x_0)\\). So the supremum is attained at \\(F\\), making it a maximum.'
                },
                {
                    question: 'Show that if \\(M\\) is a closed subspace of a normed space \\(X\\) and \\(x_0 \\notin M\\), then there exists \\(f \\in X^*\\) with \\(f|_M = 0\\), \\(f(x_0) = 1\\), and \\(\\|f\\| = 1/d(x_0, M)\\).',
                    hint: 'Define \\(g(m + \\alpha x_0) = \\alpha\\) on \\(M \\oplus \\mathbb{K}x_0\\). Compute \\(\\|g\\|\\) using \\(d = \\inf_{m \\in M} \\|m + x_0\\|\\).',
                    solution: 'Let \\(d = d(x_0, M) = \\inf_{m \\in M} \\|x_0 - m\\| > 0\\) (since \\(M\\) is closed and \\(x_0 \\notin M\\)). On \\(N = M + \\mathbb{K}x_0\\), define \\(g(m + \\alpha x_0) = \\alpha\\). Then \\(|g(m + \\alpha x_0)| = |\\alpha| = |\\alpha| \\cdot \\|x_0 + m/\\alpha\\| / \\|x_0 + m/\\alpha\\| \\le \\|m + \\alpha x_0\\| / d\\). So \\(\\|g\\| \\le 1/d\\). Taking \\(m_n \\to \\arg\\inf\\), we get \\(\\|g\\| = 1/d\\). Extend by Hahn\u2013Banach.'
                },
                {
                    question: 'Prove that a normed space \\(X\\) is separable if \\(X^*\\) is separable. (The converse is false: \\(\\ell^1\\) is separable but \\((\\ell^1)^* = \\ell^\\infty\\) is not.)',
                    hint: 'Let \\(\\{f_n\\}\\) be dense in \\(X^*\\). For each \\(n\\), choose \\(x_n\\) with \\(\\|x_n\\| = 1\\) and \\(|f_n(x_n)| \\ge \\|f_n\\|/2\\). Show that \\(\\overline{\\text{span}}_{\\mathbb{Q}}\\{x_n\\} = X\\).',
                    solution: 'Let \\(\\{f_n\\}\\) be dense in \\(S_{X^*}\\). Choose \\(x_n \\in S_X\\) with \\(|f_n(x_n)| \\ge 1/2\\). Let \\(M = \\overline{\\text{span}_{\\mathbb{Q}}}\\{x_n\\}\\), which is separable. If \\(M \\neq X\\), take \\(x_0 \\notin M\\); by the previous exercise there exists \\(g \\in X^*\\) with \\(g|_M = 0\\) and \\(\\|g\\| = 1\\). Choose \\(f_n\\) with \\(\\|f_n - g\\| < 1/4\\). Then \\(|f_n(x_n)| = |f_n(x_n) - g(x_n)| \\le \\|f_n - g\\| < 1/4\\), but \\(|f_n(x_n)| \\ge 1/2\\), contradiction.'
                }
            ]
        },

        // ===== SECTION 4: Geometric Hahn-Banach =====
        {
            id: 'geometric-hahn-banach',
            title: 'Geometric Hahn\u2013Banach',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Separation of Convex Sets.</strong> The analytic Hahn-Banach theorem extends functionals; its geometric counterpart <em>separates</em> convex sets with hyperplanes. This geometric version is the foundation of convex analysis, optimization theory, and the study of dual spaces.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove the separation theorem (a hyperplane strictly separates a point from a closed convex set) and the supporting hyperplane theorem. We then use these results to characterize the closed convex hull as the intersection of half-spaces.</p>
</div>

                <h2>Separation of Convex Sets</h2>

                <p>The Hahn\u2013Banach theorem has a powerful geometric interpretation: disjoint convex sets can be separated by hyperplanes. This is the infinite-dimensional generalization of the separating hyperplane theorem from convex geometry.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.17 (Hyperplane Separation)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a real topological vector space and \\(f \\in X^* \\setminus \\{0\\}\\). The set \\(H = \\{x : f(x) = \\alpha\\}\\) is a <strong>closed hyperplane</strong>.</p>
                        <ul>
                            <li>\\(f\\) <strong>separates</strong> sets \\(A\\) and \\(B\\) if \\(f(a) \\le \\alpha \\le f(b)\\) for all \\(a \\in A, b \\in B\\).</li>
                            <li>\\(f\\) <strong>strictly separates</strong> \\(A\\) and \\(B\\) if \\(f(a) < \\alpha < f(b)\\) for all \\(a \\in A, b \\in B\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.18 (Separation of a Point from a Convex Set)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a real normed space, \\(C \\subseteq X\\) open and convex, and \\(x_0 \\notin C\\). Then there exists \\(f \\in X^*\\) and \\(\\alpha \\in \\mathbb{R}\\) such that:</p>
                        \\[f(c) < \\alpha \\le f(x_0) \\quad \\text{for all } c \\in C.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Without loss of generality, assume \\(0 \\in C\\) (translate if necessary). The Minkowski functional \\(\\mu_C\\) of \\(C\\) is sublinear (since \\(C\\) is convex, open, and contains 0, it is absorbing).</p>
                        <p>Since \\(x_0 \\notin C\\), we have \\(\\mu_C(x_0) \\ge 1\\). On \\(M = \\mathbb{R} x_0\\), define \\(g(tx_0) = t \\mu_C(x_0)\\). Then for \\(t \\ge 0\\): \\(g(tx_0) = t\\mu_C(x_0) = \\mu_C(tx_0)\\). For \\(t < 0\\): \\(g(tx_0) = t\\mu_C(x_0) < 0 \\le \\mu_C(tx_0)\\). So \\(g \\le \\mu_C\\) on \\(M\\).</p>
                        <p>By the real Hahn\u2013Banach theorem, extend to \\(f : X \\to \\mathbb{R}\\) with \\(f \\le \\mu_C\\). Since \\(C\\) is open, \\(c \\in C \\implies \\mu_C(c) < 1\\), so \\(f(c) < 1\\). Also \\(f(x_0) = \\mu_C(x_0) \\ge 1\\). Set \\(\\alpha = 1\\). Finally, \\(f\\) is bounded (hence continuous) since \\(f \\le \\mu_C\\) and \\(\\mu_C\\) is continuous on a normed space. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="separation-point-convex"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.19 (Separation of Two Convex Sets)</div>
                    <div class="env-body">
                        <p>Let \\(A, B \\subseteq X\\) be non-empty disjoint convex sets in a normed space \\(X\\), with \\(A\\) open. Then there exist \\(f \\in X^* \\setminus \\{0\\}\\) and \\(\\alpha \\in \\mathbb{R}\\) with:</p>
                        \\[f(a) < \\alpha \\le f(b) \\quad \\text{for all } a \\in A, \\, b \\in B.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The set \\(C = A - B = \\{a - b : a \\in A, b \\in B\\}\\) is convex and open (since \\(A\\) is open). Since \\(A \\cap B = \\emptyset\\), we have \\(0 \\notin C\\). By Theorem 6.18, there exists \\(f \\in X^*\\) with \\(f(c) < 0\\) for all \\(c \\in C\\), i.e., \\(f(a) - f(b) < 0\\) for all \\(a \\in A, b \\in B\\). Thus \\(\\sup_A f \\le \\inf_B f\\). Since \\(A\\) is open and \\(f\\) is continuous, the sup is not attained: \\(f(a) < \\alpha \\le f(b)\\) for \\(\\alpha = \\inf_B f\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="separation-two-convex"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.20 (Strict Separation)</div>
                    <div class="env-body">
                        <p>Let \\(A\\) be a closed convex set and \\(B\\) a compact convex set in a normed space \\(X\\), with \\(A \\cap B = \\emptyset\\). Then \\(A\\) and \\(B\\) can be <strong>strictly separated</strong>: there exist \\(f \\in X^*\\) and \\(\\alpha_1 < \\alpha_2\\) with:</p>
                        \\[f(a) \\le \\alpha_1 < \\alpha_2 \\le f(b) \\quad \\text{for all } a \\in A, \\, b \\in B.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Since \\(A\\) is closed and \\(B\\) is compact, \\(d = d(A, B) = \\inf\\{\\|a - b\\| : a \\in A, b \\in B\\} > 0\\). Let \\(U = \\{x : d(x, A) < d/2\\}\\), which is open and convex, and \\(U \\cap B = \\emptyset\\). Apply Theorem 6.19 to \\(U\\) and \\(B\\). The gap between \\(\\sup_U f\\) and \\(\\inf_B f\\) gives strict separation. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark 6.21</div>
                    <div class="env-body">
                        <p>Strict separation can fail for two closed convex sets that are not compact. For instance, in \\(\\ell^2\\), let \\(A = \\{(x_n) : x_n \\ge 0\\}\\) and \\(B = \\{te_n + (1/n)e_1 : t \\ge 0, n \\ge 1\\}\\). Both are closed and convex with \\(d(A, B) = 0\\) yet \\(A \\cap B = \\emptyset\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'separation-point-convex',
                    title: 'Separating a Point from a Convex Set',
                    description: 'Drag the point outside the convex set; a separating hyperplane appears',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 420, scale: 45 });

                        var px = 3, py = 1;
                        var cx = 0, cy = 0, rx = 1.5, ry = 1.0;

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // Draw convex set C (an ellipse centered at (cx, cy))
                            engine.drawEllipse(cx, cy, rx, ry, 0, engine.colors.teal + '30', engine.colors.teal);
                            engine.drawText('C', cx, cy, engine.colors.teal, 16);

                            // Check if point is outside
                            var dx = (px - cx) / rx, dy = (py - cy) / ry;
                            var inside = dx * dx + dy * dy < 1;

                            if (!inside) {
                                // Compute separating hyperplane
                                // Normal direction from ellipse center to point, adjusted for ellipse shape
                                var gradX = 2 * (px - cx) / (rx * rx);
                                var gradY = 2 * (py - cy) / (ry * ry);
                                var gLen = Math.sqrt(gradX * gradX + gradY * gradY);
                                var nx = gradX / gLen, ny = gradY / gLen;

                                // Find closest point on ellipse boundary in direction of p
                                // Parametrize: (cx + rx*cos(t), cy + ry*sin(t))
                                // Want to maximize nx*(rx*cos(t)) + ny*(ry*sin(t))
                                var angle = Math.atan2(ny * ry, nx * rx);
                                var bx = cx + rx * Math.cos(angle);
                                var by = cy + ry * Math.sin(angle);

                                // Hyperplane through boundary point with normal (nx, ny)
                                var alpha = nx * bx + ny * by;

                                // Draw the separating line
                                engine.drawLine(bx - ny * 8, by + nx * 8, bx + ny * 8, by - nx * 8, engine.colors.orange, 2.5);

                                // Draw normal
                                engine.drawVector(bx, by, bx + nx * 0.8, by + ny * 0.8, engine.colors.orange, 'f', 1.5);

                                engine.drawText('f(c) < \u03b1 \u2264 f(x\u2080)', 0, 4.2, engine.colors.orange, 13);
                                engine.drawPoint(bx, by, engine.colors.yellow, '', 4);
                            } else {
                                engine.drawText('x\u2080 \u2208 C (move point outside!)', 0, 4.2, engine.colors.red, 13);
                            }

                            // Draw the point
                            engine.drawPoint(px, py, inside ? engine.colors.red : engine.colors.blue, 'x\u2080', 6);

                            engine.drawDraggables();
                        }

                        engine.addDraggable('pt', px, py, engine.colors.blue, 8, function(x, y) {
                            px = x; py = y; draw();
                        });

                        draw();
                        return engine;
                    }
                },
                {
                    id: 'separation-two-convex',
                    title: 'Separation of Two Convex Sets',
                    description: 'Drag the two convex sets; a separating hyperplane keeps them apart',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 420, scale: 40 });

                        var ax = -2, ay = 0.5;
                        var bx = 2, by = -0.3;
                        var ra = 1.0, rb = 0.8;

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // Draw two convex sets as circles
                            engine.drawCircle(ax, ay, ra, engine.colors.blue + '30', engine.colors.blue, 2);
                            engine.drawText('A', ax, ay, engine.colors.blue, 16);

                            engine.drawCircle(bx, by, rb, engine.colors.teal + '30', engine.colors.teal, 2);
                            engine.drawText('B', bx, by, engine.colors.teal, 16);

                            // Compute separation
                            var dx = bx - ax, dy = by - ay;
                            var dist = Math.sqrt(dx * dx + dy * dy);
                            var overlap = ra + rb - dist;

                            if (dist > 0.01 && overlap < 0) {
                                // Sets are disjoint: draw separating hyperplane
                                var nx = dx / dist, ny = dy / dist;
                                // Midpoint of the gap
                                var mx = ax + nx * (ra + (dist - ra - rb) / 2);
                                var my = ay + ny * (ra + (dist - ra - rb) / 2);

                                engine.drawLine(mx - ny * 8, my + nx * 8, mx + ny * 8, my - nx * 8, engine.colors.orange, 2.5);

                                // Draw half-space shading
                                engine.drawText('f(a) < \u03b1 \u2264 f(b)', 0, 4.5, engine.colors.orange, 13);

                                // Strict separation region
                                if (overlap < -0.1) {
                                    var m1x = ax + nx * ra;
                                    var m1y = ay + ny * ra;
                                    var m2x = bx - nx * rb;
                                    var m2y = by - ny * rb;
                                    engine.drawSegment(m1x, m1y, m2x, m2y, engine.colors.yellow, 1.5, true);
                                    engine.drawText('gap = ' + (-overlap).toFixed(2), (m1x + m2x) / 2 + 0.5, (m1y + m2y) / 2 + 0.4, engine.colors.yellow, 11);
                                }
                            } else {
                                engine.drawText('Sets overlap \u2014 no separation!', 0, 4.5, engine.colors.red, 13);
                            }

                            engine.drawDraggables();
                        }

                        engine.addDraggable('a', ax, ay, engine.colors.blue, 8, function(x, y) {
                            ax = x; ay = y; draw();
                        });
                        engine.addDraggable('b', bx, by, engine.colors.teal, 8, function(x, y) {
                            bx = x; by = y; draw();
                        });

                        draw();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(C \\subset \\mathbb{R}^n\\) be a closed convex set and \\(x_0 \\notin C\\). Show directly (without Hahn\u2013Banach) that there exists a unique closest point \\(\\bar{x} \\in C\\) to \\(x_0\\), and the hyperplane through \\(\\bar{x}\\) perpendicular to \\(x_0 - \\bar{x}\\) separates \\(x_0\\) from \\(C\\).',
                    hint: 'The closest point exists by compactness of sublevel sets plus convexity. For separation, use \\(\\langle x_0 - \\bar{x}, c - \\bar{x} \\rangle \\le 0\\) for all \\(c \\in C\\).',
                    solution: 'Existence: The function \\(d(c) = \\|c - x_0\\|^2\\) is continuous and coercive on the closed convex set \\(C\\), so it attains its minimum at some \\(\\bar{x}\\). Uniqueness: If \\(\\bar{x}, \\bar{y}\\) are both minimizers, then \\((\\bar{x}+\\bar{y})/2 \\in C\\) and \\(\\|(\\bar{x}+\\bar{y})/2 - x_0\\|^2 < (\\|\\bar{x}-x_0\\|^2 + \\|\\bar{y}-x_0\\|^2)/2\\) by strict convexity of \\(\\|\\cdot\\|^2\\). Separation: For any \\(c \\in C\\) and \\(t \\in [0,1]\\), \\(\\bar{x} + t(c-\\bar{x}) \\in C\\), so \\(\\|\\bar{x} - x_0\\|^2 \\le \\|\\bar{x} + t(c-\\bar{x}) - x_0\\|^2\\). Expanding and letting \\(t \\to 0^+\\): \\(\\langle x_0 - \\bar{x}, c - \\bar{x}\\rangle \\le 0\\). Setting \\(f(x) = \\langle x_0 - \\bar{x}, x\\rangle\\) and \\(\\alpha = f(\\bar{x})\\) gives separation.'
                },
                {
                    question: 'Give an example of two disjoint closed convex sets in \\(\\mathbb{R}^2\\) that cannot be strictly separated.',
                    hint: 'Think of a convex curve and a line that is asymptotic to it.',
                    solution: 'Let \\(A = \\{(x,y) : y \\ge 1/x, \\, x > 0\\}\\) and \\(B = \\{(x, y) : y \\le 0\\}\\). Both are closed and convex, and \\(A \\cap B = \\emptyset\\). The only separating functional is \\(f(x,y) = y\\) with \\(\\alpha = 0\\). But \\(\\inf_{a \\in A} f(a) = \\inf_{x > 0} 1/x = 0 = \\sup_{b \\in B} f(b)\\). So \\(f(a) > 0 \\ge f(b)\\) for all \\(a, b\\), but there is no gap: we cannot find \\(\\alpha_1 < \\alpha_2\\) with \\(f(b) \\le \\alpha_1 < \\alpha_2 \\le f(a)\\). Strict separation fails because neither set is compact.'
                },
                {
                    question: 'Use the geometric Hahn\u2013Banach theorem to prove: if \\(C\\) is a closed convex subset of a normed space \\(X\\), then \\(C\\) is the intersection of all closed half-spaces containing it.',
                    hint: 'If \\(x_0 \\notin C\\), find a half-space containing \\(C\\) but not \\(x_0\\).',
                    solution: 'Let \\(H = \\bigcap \\{\\{x : f(x) \\le \\alpha\\} : C \\subseteq \\{f \\le \\alpha\\}\\}\\). Clearly \\(C \\subseteq H\\). For the reverse, take \\(x_0 \\notin C\\). Since \\(C\\) is closed and convex, \\(\\{x_0\\}\\) is compact, so by strict separation (Theorem 6.20), there exist \\(f \\in X^*\\) and \\(\\alpha\\) with \\(f(c) \\le \\alpha < f(x_0)\\) for all \\(c \\in C\\). So \\(x_0 \\notin \\{f \\le \\alpha\\} \\supseteq C\\), hence \\(x_0 \\notin H\\). Thus \\(H = C\\).'
                },
                {
                    question: 'Prove: If \\(M\\) is a subspace of a normed space \\(X\\) and \\(M \\neq X\\), then \\(M\\) is not dense in \\(X\\) if and only if there exists a non-zero \\(f \\in X^*\\) with \\(f|_M = 0\\).',
                    hint: 'If \\(M\\) is not dense, \\(\\overline{M} \\neq X\\), so pick \\(x_0 \\notin \\overline{M}\\) and separate.',
                    solution: '(\\(\\Leftarrow\\)): If \\(f \\neq 0\\) and \\(f|_M = 0\\), pick \\(x_0\\) with \\(f(x_0) = 1\\). Then \\(x_0 \\notin \\overline{M}\\) since \\(f\\) is continuous and vanishes on \\(\\overline{M}\\) but not at \\(x_0\\). (\\(\\Rightarrow\\)): If \\(\\overline{M} \\neq X\\), pick \\(x_0 \\in X \\setminus \\overline{M}\\). Since \\(\\overline{M}\\) is a closed subspace, by the consequence of Hahn\u2013Banach (Corollary applied to the quotient), there exists \\(f \\in X^*\\) with \\(f|_{\\overline{M}} = 0\\) and \\(f(x_0) = 1\\). So \\(f|_M = 0\\) and \\(f \\neq 0\\).'
                }
            ]
        },

        // ===== SECTION 5: Applications =====
        {
            id: 'applications',
            title: 'Applications',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Hahn-Banach at Work.</strong> The Hahn-Banach theorem is not just a theoretical tool; it has striking concrete applications. In this section, we use it to construct Banach limits (extending the ordinary limit functional to all bounded sequences) and to prove existence results in approximation theory.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We construct Banach limits, prove the existence of supporting hyperplanes for convex bodies, and apply separation to prove minimax-type results. These applications demonstrate the power of the existence-by-extension philosophy.</p>
</div>

<div class="bridge-block chapter-closing">
<p><strong>Looking Ahead.</strong> Hahn-Banach is a "soft" result: it proves existence without constructive bounds. The next three chapters develop "hard" results that require completeness. Chapter 7 introduces the Baire Category Theorem, the topological engine behind the Uniform Boundedness Principle (Chapter 8) and the Open Mapping Theorem (Chapter 9).</p>
</div>

                <h2>Applications of Hahn\u2013Banach</h2>

                <p>The Hahn\u2013Banach theorem has remarkably diverse applications, from constructing exotic objects like Banach limits to proving fundamental results about convex bodies and dual spaces.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.22 (Supporting Hyperplane)</div>
                    <div class="env-body">
                        <p>Let \\(C\\) be a convex body (closed, convex, non-empty interior) in a normed space \\(X\\). A hyperplane \\(H = \\{x : f(x) = \\alpha\\}\\) is a <strong>supporting hyperplane</strong> of \\(C\\) at \\(x_0 \\in \\partial C\\) if \\(f(x_0) = \\alpha\\) and \\(f(c) \\le \\alpha\\) for all \\(c \\in C\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.23 (Supporting Hyperplane Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(C\\) be a convex body in a normed space \\(X\\). Then at every boundary point \\(x_0 \\in \\partial C\\), there exists a supporting hyperplane.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Since \\(x_0 \\in \\partial C\\), there exist \\(x_n \\notin C\\) with \\(x_n \\to x_0\\). Apply Theorem 6.18 to separate \\(x_n\\) from \\(\\text{int}(C)\\): obtain \\(f_n \\in X^*\\) with \\(\\|f_n\\| = 1\\) and \\(f_n(c) \\le f_n(x_n)\\) for all \\(c \\in \\text{int}(C)\\). By Banach\u2013Alaoglu (or weak* compactness of the unit ball in finite dimensions), a subnet converges: \\(f_{n_k} \\overset{w^*}{\\to} f\\). Then \\(f(c) \\le f(x_0)\\) for all \\(c \\in C\\) (by continuity of evaluation), and \\(f \\neq 0\\) since \\(\\text{int}(C) \\neq \\emptyset\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="supporting-hyperplane-viz"></div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.24 (Banach Limit)</div>
                    <div class="env-body">
                        <p>A <strong>Banach limit</strong> is a linear functional \\(L : \\ell^\\infty \\to \\mathbb{R}\\) satisfying:</p>
                        <ol>
                            <li><strong>Positivity:</strong> \\(x_n \\ge 0\\) for all \\(n \\implies L(x) \\ge 0\\).</li>
                            <li><strong>Normalization:</strong> \\(L(1, 1, 1, \\ldots) = 1\\).</li>
                            <li><strong>Shift invariance:</strong> \\(L(x_1, x_2, x_3, \\ldots) = L(x_2, x_3, x_4, \\ldots)\\).</li>
                        </ol>
                        <p>For convergent sequences, \\(L(x) = \\lim_{n \\to \\infty} x_n\\). Banach limits extend the notion of limit to all bounded sequences.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.25 (Existence of Banach Limits)</div>
                    <div class="env-body">
                        <p>Banach limits exist.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(S : \\ell^\\infty \\to \\ell^\\infty\\) be the shift \\(S(x_1, x_2, \\ldots) = (x_2, x_3, \\ldots)\\). Define:</p>
                        \\[p(x) = \\limsup_{n \\to \\infty} \\frac{1}{n} \\sum_{k=1}^n x_k \\quad (\\text{Cesaro}\\ \\limsup).\\]
                        <p>Then \\(p\\) is sublinear, \\(p(Sx - x) \\le 0\\) (telescoping), and \\(p(\\mathbf{1}) = 1\\). On \\(M = \\text{span}\\{\\mathbf{1}\\}\\), define \\(f(\\alpha \\mathbf{1}) = \\alpha\\). Then \\(f \\le p\\) on \\(M\\). By Hahn\u2013Banach, extend to \\(L\\) with \\(L \\le p\\) on \\(\\ell^\\infty\\).</p>
                        <p>Then \\(L(Sx - x) \\le p(Sx - x) \\le 0\\) and \\(L(x - Sx) \\le p(x - Sx) \\le 0\\), so \\(L(Sx) = L(x)\\). Positivity: if \\(x \\ge 0\\), then \\(-L(x) = L(-x) \\le p(-x) = \\limsup \\frac{1}{n}\\sum(-x_k) \\le 0\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="banach-limit-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.26 (Total Subsets and Annihilators)</div>
                    <div class="env-body">
                        <p>Let \\(S \\subseteq X\\) be a subset of a normed space. Then:</p>
                        <ol>
                            <li>\\(\\overline{\\text{span}}(S) = X\\) if and only if \\(S^\\perp = \\{0\\}\\), where \\(S^\\perp = \\{f \\in X^* : f(s) = 0 \\text{ for all } s \\in S\\}\\).</li>
                            <li>For a subspace \\(M \\subseteq X\\): \\(\\overline{M} = {}^\\perp(M^\\perp)\\), where \\({}^\\perp N = \\{x \\in X : f(x) = 0 \\text{ for all } f \\in N\\}\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>(1) If \\(\\overline{\\text{span}}(S) \\neq X\\), then \\(M = \\overline{\\text{span}}(S)\\) is a proper closed subspace. Pick \\(x_0 \\notin M\\); by Hahn\u2013Banach, there exists \\(f \\in X^*\\) with \\(f|_M = 0\\) and \\(f(x_0) = 1\\). Then \\(f \\in S^\\perp\\) and \\(f \\neq 0\\).</p>
                        <p>Conversely, if \\(f \\in S^\\perp\\) with \\(f \\neq 0\\), then \\(f|_{\\text{span}(S)} = 0\\), so \\(\\ker f \\supseteq \\text{span}(S)\\), hence \\(\\overline{\\text{span}}(S) \\subseteq \\ker f \\neq X\\).</p>
                        <p>(2) Clearly \\(\\overline{M} \\subseteq {}^\\perp(M^\\perp)\\). If \\(x_0 \\notin \\overline{M}\\), separate by \\(f \\in X^*\\) with \\(f|_{\\overline{M}} = 0\\), \\(f(x_0) = 1\\). Then \\(f \\in M^\\perp\\) but \\(f(x_0) \\neq 0\\), so \\(x_0 \\notin {}^\\perp(M^\\perp)\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark 6.27 (Non-Measurable Sets)</div>
                    <div class="env-body">
                        <p>The Hahn\u2013Banach theorem (in its general form with Zorn's lemma) implies the existence of non-measurable sets. Indeed, a Banach limit restricted to \\(\\{0, 1\\}\\)-valued sequences defines a finitely additive, shift-invariant probability measure on \\(\\mathbb{N}\\) that is not countably additive. Combined with the correspondence between finitely additive measures and ultrafilters, this leads to non-Lebesgue-measurable subsets of \\(\\mathbb{R}\\).</p>
                        <p>More precisely, the Hahn\u2013Banach theorem for separable spaces can be proved in ZF + DC (dependent choice) without the full axiom of choice. However, the general Hahn\u2013Banach theorem is strictly weaker than the axiom of choice but independent of ZF.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.28 (Dual of \\(c_0\\) via Hahn\u2013Banach)</div>
                    <div class="env-body">
                        <p>Let \\(c_0 = \\{(x_n) : x_n \\to 0\\}\\) with the sup norm. For each \\(y = (y_n) \\in \\ell^1\\), define \\(f_y(x) = \\sum_n x_n y_n\\). This gives an isometric isomorphism \\(\\ell^1 \\cong c_0^*\\).</p>
                        <p>Surjectivity uses Hahn\u2013Banach: any \\(f \\in c_0^*\\) extends to \\(F \\in (\\ell^\\infty)^*\\) with the same norm. One then shows \\(f\\) is represented by the sequence \\(y_n = f(e_n)\\) with \\(\\sum |y_n| = \\|f\\|\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'supporting-hyperplane-viz',
                    title: 'Supporting Hyperplanes of a Convex Body',
                    description: 'Drag a point along the boundary to see the supporting hyperplane rotate',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 420, scale: 45 });

                        var angle = 0.4;
                        var shapeType = 'ellipse';

                        // Parametric boundary of convex body
                        function boundaryPoint(t) {
                            if (shapeType === 'ellipse') {
                                return [2 * Math.cos(t), 1.2 * Math.sin(t)];
                            } else if (shapeType === 'square') {
                                // Rounded square using superellipse |x|^4 + |y|^4 = r^4
                                var c = Math.cos(t), s = Math.sin(t);
                                var r = Math.pow(Math.pow(Math.abs(c), 4) + Math.pow(Math.abs(s), 4), -0.25) * 1.5;
                                return [r * c, r * s];
                            } else {
                                // L-shaped polygon approximation
                                var pts = [[2, 0], [2, 1.5], [0.5, 1.5], [0.5, 0.5], [-1, 0.5], [-1, -1], [2, -1]];
                                var n = pts.length;
                                var idx = Math.floor(((t % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) / (2 * Math.PI) * n);
                                var frac = (((t % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) / (2 * Math.PI) * n) - idx;
                                var p1 = pts[idx % n], p2 = pts[(idx + 1) % n];
                                return [p1[0] + frac * (p2[0] - p1[0]), p1[1] + frac * (p2[1] - p1[1])];
                            }
                        }

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // Draw the convex body
                            engine.drawCurve(function(t) { return boundaryPoint(t); }, 0, 2 * Math.PI, 300, engine.colors.teal, 2);

                            // Fill
                            var ctx = engine.ctx;
                            ctx.fillStyle = engine.colors.teal + '20';
                            ctx.beginPath();
                            for (var i = 0; i <= 300; i++) {
                                var t = (2 * Math.PI * i) / 300;
                                var pt = boundaryPoint(t);
                                var sp = engine.toScreen(pt[0], pt[1]);
                                if (i === 0) ctx.moveTo(sp[0], sp[1]); else ctx.lineTo(sp[0], sp[1]);
                            }
                            ctx.closePath();
                            ctx.fill();

                            // Point on boundary
                            var bp = boundaryPoint(angle);

                            // Compute outward normal via finite difference
                            var dt = 0.001;
                            var bp1 = boundaryPoint(angle + dt);
                            var bp0 = boundaryPoint(angle - dt);
                            var tx = (bp1[0] - bp0[0]) / (2 * dt);
                            var ty = (bp1[1] - bp0[1]) / (2 * dt);
                            var tLen = Math.sqrt(tx * tx + ty * ty);
                            if (tLen < 0.001) tLen = 1;
                            // Outward normal (rotate tangent 90 deg clockwise for standard orientation)
                            var nx = ty / tLen, ny = -tx / tLen;

                            // Make sure normal points outward (away from origin for simple convex shapes)
                            if (nx * bp[0] + ny * bp[1] < 0) { nx = -nx; ny = -ny; }

                            // Supporting hyperplane: perpendicular to normal through bp
                            engine.drawLine(bp[0] - ty / tLen * 6, bp[1] + tx / tLen * 6, bp[0] + ty / tLen * 6, bp[1] - tx / tLen * 6, engine.colors.orange, 2.5);

                            // Normal vector
                            engine.drawVector(bp[0], bp[1], bp[0] + nx * 0.8, bp[1] + ny * 0.8, engine.colors.yellow, 'n', 2);

                            engine.drawPoint(bp[0], bp[1], engine.colors.orange, 'x\u2080', 6);
                            engine.drawText('Supporting hyperplane at x\u2080 \u2208 \u2202C', 0, 4.2, engine.colors.orange, 13);
                        }

                        VizEngine.createSlider(controls, 'Boundary position', 0, 6.28, angle, 0.05, function(v) {
                            angle = v; draw();
                        });

                        VizEngine.createButton(controls, 'Ellipse', function() { shapeType = 'ellipse'; draw(); });
                        VizEngine.createButton(controls, 'Superellipse', function() { shapeType = 'square'; draw(); });

                        draw();
                        return engine;
                    }
                },
                {
                    id: 'banach-limit-viz',
                    title: 'Banach Limits and Ces\u00e0ro Means',
                    description: 'A divergent sequence whose Ces\u00e0ro averages converge, illustrating Banach limits',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 380, scale: 1, originX: 40, originY: 300 });

                        var seqType = 'oscillating';
                        var N = 60;

                        function getSequence(type, n) {
                            if (type === 'oscillating') return Math.pow(-1, n);
                            if (type === 'periodic') return Math.sin(2 * Math.PI * n / 5);
                            // Slowly growing oscillation
                            return Math.cos(n * 0.7) * (1 + 0.02 * n) / (1 + 0.02 * n);
                        }

                        function draw() {
                            engine.clear();

                            var ctx = engine.ctx;

                            // Draw axes
                            ctx.strokeStyle = engine.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(40, 300); ctx.lineTo(540, 300); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(40, 20); ctx.lineTo(40, 350); ctx.stroke();

                            // Labels
                            ctx.fillStyle = engine.colors.text;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('n', 540, 315);
                            ctx.textAlign = 'right';
                            ctx.fillText('value', 35, 25);

                            var xScale = 480 / N;
                            var yScale = 100;
                            var baseY = 200;

                            // Compute sequence and Cesaro means
                            var seq = [];
                            var cesaro = [];
                            var sum = 0;
                            for (var n = 1; n <= N; n++) {
                                var val = getSequence(seqType, n);
                                seq.push(val);
                                sum += val;
                                cesaro.push(sum / n);
                            }

                            // Draw zero line
                            ctx.strokeStyle = engine.colors.text + '40';
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath(); ctx.moveTo(40, baseY); ctx.lineTo(540, baseY); ctx.stroke();
                            ctx.setLineDash([]);

                            // Draw y-axis labels
                            ctx.fillStyle = engine.colors.text;
                            ctx.textAlign = 'right';
                            ctx.fillText('1', 35, baseY - yScale);
                            ctx.fillText('0', 35, baseY);
                            ctx.fillText('-1', 35, baseY + yScale);

                            // Draw sequence as dots
                            for (var i = 0; i < seq.length; i++) {
                                var sx = 45 + i * xScale;
                                var sy = baseY - seq[i] * yScale;
                                ctx.fillStyle = engine.colors.blue;
                                ctx.beginPath(); ctx.arc(sx, sy, 2.5, 0, Math.PI * 2); ctx.fill();
                            }

                            // Draw Cesaro means as connected line
                            ctx.strokeStyle = engine.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var j = 0; j < cesaro.length; j++) {
                                var cx = 45 + j * xScale;
                                var cy = baseY - cesaro[j] * yScale;
                                if (j === 0) ctx.moveTo(cx, cy); else ctx.lineTo(cx, cy);
                            }
                            ctx.stroke();

                            // Legend
                            ctx.fillStyle = engine.colors.blue;
                            ctx.fillRect(350, 30, 12, 12);
                            ctx.fillStyle = engine.colors.text;
                            ctx.textAlign = 'left';
                            ctx.fillText('x_n (sequence)', 367, 41);

                            ctx.fillStyle = engine.colors.orange;
                            ctx.fillRect(350, 50, 12, 12);
                            ctx.fillStyle = engine.colors.text;
                            ctx.fillText('Cesaro mean', 367, 61);

                            // Banach limit info
                            var lastCesaro = cesaro[cesaro.length - 1];
                            ctx.fillStyle = engine.colors.green;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Banach limit L(x) must satisfy: liminf(Cesaro) <= L(x) <= limsup(Cesaro)', 290, 365);
                        }

                        VizEngine.createButton(controls, '(-1)^n', function() { seqType = 'oscillating'; draw(); });
                        VizEngine.createButton(controls, 'sin(2\u03c0n/5)', function() { seqType = 'periodic'; draw(); });
                        VizEngine.createButton(controls, 'cos(0.7n)', function() { seqType = 'damped'; draw(); });

                        VizEngine.createSlider(controls, 'Terms', 10, 100, N, 1, function(v) {
                            N = Math.round(v); draw();
                        });

                        draw();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Construct a Banach limit \\(L\\) and compute \\(L(1, 0, 1, 0, 1, 0, \\ldots)\\).',
                    hint: 'Use the Ces\u00e0ro mean \\(\\frac{1}{n}\\sum_{k=1}^n x_k \\to 1/2\\). Any Banach limit of a Ces\u00e0ro-convergent sequence must equal the Ces\u00e0ro limit.',
                    solution: 'The sequence \\(x = (1, 0, 1, 0, \\ldots)\\) has Cesaro means \\(\\sigma_n = \\frac{1}{n}\\sum_{k=1}^n x_k\\). For even \\(n = 2m\\), \\(\\sigma_n = m/(2m) = 1/2\\). For odd \\(n = 2m+1\\), \\(\\sigma_n = (m+1)/(2m+1) \\to 1/2\\). Since \\(p(x) = \\limsup \\sigma_n = 1/2\\) and \\(p(-x) = \\limsup (-\\sigma_n) \\to -1/2\\), any Banach limit must satisfy \\(-p(-x) \\le L(x) \\le p(x)\\), i.e., \\(L(x) = 1/2\\).'
                },
                {
                    question: 'Let \\(X\\) be a normed space and \\(M\\) a finite-dimensional subspace. Show that \\(M\\) is the range of a bounded projection \\(P : X \\to M\\) (i.e., there exists a continuous \\(P\\) with \\(P^2 = P\\) and \\(P(X) = M\\)). Use Hahn\u2013Banach.',
                    hint: 'Choose a basis \\(e_1, \\ldots, e_n\\) of \\(M\\), extend the coordinate functionals \\(e_i^*\\) to all of \\(X\\), and define \\(P(x) = \\sum f_i(x) e_i\\).',
                    solution: 'Let \\(\\{e_1, \\ldots, e_n\\}\\) be a basis for \\(M\\), with coordinate functionals \\(e_i^* : M \\to \\mathbb{K}\\) defined by \\(e_i^*(e_j) = \\delta_{ij}\\). Each \\(e_i^*\\) is bounded on \\(M\\) (finite-dimensional), so by Hahn\u2013Banach, extend to \\(f_i \\in X^*\\). Define \\(P(x) = \\sum_{i=1}^n f_i(x) e_i\\). Then \\(P\\) is bounded, linear, \\(P(X) \\subseteq M\\), and for \\(m = \\sum \\alpha_i e_i \\in M\\): \\(P(m) = \\sum f_i(m) e_i = \\sum \\alpha_i e_i = m\\). So \\(P^2 = P\\) and \\(P(X) = M\\).'
                },
                {
                    question: 'Prove that every infinite-dimensional normed space \\(X\\) admits a discontinuous linear functional. (Hint: use a Hamel basis.)',
                    hint: 'Let \\(\\{e_\\alpha\\}\\) be a Hamel basis containing a sequence \\(e_1, e_2, \\ldots\\) with \\(\\|e_n\\| = 1\\). Define \\(f(e_n) = n\\) and extend linearly. Why is \\(f\\) unbounded?',
                    solution: 'Let \\(\\{e_\\alpha\\}_{\\alpha \\in A}\\) be a Hamel basis for \\(X\\). Since \\(X\\) is infinite-dimensional, we can find a countable subset \\(e_1, e_2, \\ldots\\) with \\(\\|e_n\\| = 1\\) (normalize). Define \\(f\\) on the Hamel basis by \\(f(e_n) = n\\) for \\(n = 1, 2, \\ldots\\) and \\(f(e_\\alpha) = 0\\) otherwise. Extend linearly to all of \\(X\\). Then \\(f(e_n) = n\\) while \\(\\|e_n\\| = 1\\), so \\(f\\) is unbounded on the unit sphere, hence discontinuous. Note this uses the axiom of choice (Hamel basis exists), and the Hahn\u2013Banach theorem itself cannot produce discontinuous functionals\u2014it always yields bounded ones when the dominating functional is continuous.'
                }
            ]
        }
    ]
});
