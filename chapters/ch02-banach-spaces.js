// Chapter 2: Banach Spaces
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch02',
    number: 2,
    title: 'Banach Spaces',
    subtitle: 'Complete normed spaces and their power',
    sections: [
        // ============================================================
        // Section 1: Complete Normed Spaces
        // ============================================================
        {
            id: 'complete-normed-spaces',
            title: 'Complete Normed Spaces',
            content: `
<div class="bridge-block chapter-opening">
<p><strong>From Normed Spaces to Banach Spaces.</strong> In Chapter 1, we equipped vector spaces with norms, gaining the ability to measure size and distance. But we also saw that normed spaces can be "incomplete," with Cauchy sequences that fail to converge. This chapter introduces Banach spaces, the complete normed spaces, and demonstrates why completeness is the essential hypothesis for virtually every major theorem in functional analysis.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define Banach spaces, prove that finite-dimensional normed spaces are always complete, characterize closed subspaces as the complete ones, and introduce the completion construction that embeds any normed space into a Banach space.</p>
</div>

<h2>2.1 Complete Normed Spaces</h2>

<p>In Chapter 1 we studied normed spaces, which endow a vector space with a notion of distance. A fundamental question now arises: <em>does every Cauchy sequence converge?</em> This is the question of <strong>completeness</strong>, and the spaces where the answer is "yes" form the backbone of functional analysis.</p>

<div class="env-block definition">
<strong>Definition 2.1.1 (Cauchy Sequence).</strong> Let \\((X, \\|\\cdot\\|)\\) be a normed space. A sequence \\((x_n)_{n=1}^\\infty\\) in \\(X\\) is called a <em>Cauchy sequence</em> if for every \\(\\varepsilon > 0\\) there exists \\(N \\in \\mathbb{N}\\) such that
\\[
\\|x_n - x_m\\| < \\varepsilon \\quad \\text{for all } n, m \\geq N.
\\]
</div>

<p>Every convergent sequence is Cauchy (triangle inequality), but the converse fails in general. This failure is precisely what motivates our central definition.</p>

<div class="env-block definition">
<strong>Definition 2.1.2 (Banach Space).</strong> A normed space \\((X, \\|\\cdot\\|)\\) is called a <em>Banach space</em> if it is <strong>complete</strong>, i.e., every Cauchy sequence in \\(X\\) converges to a limit in \\(X\\).
</div>

<p>The concept is named after Stefan Banach (1892-1945), who systematically studied these spaces in his 1932 monograph. The importance of Banach spaces cannot be overstated: essentially all the deep theorems of functional analysis (Hahn-Banach, Open Mapping, Uniform Boundedness) require completeness.</p>

<div class="env-block theorem">
<strong>Proposition 2.1.3.</strong> Every finite-dimensional normed space is a Banach space.
</div>

<div class="env-block proof">
<strong>Proof.</strong> Let \\(X\\) be a normed space with \\(\\dim X = n < \\infty\\) and basis \\(\\{e_1, \\ldots, e_n\\}\\). Any norm on \\(X\\) is equivalent to the Euclidean norm \\(\\|\\cdot\\|_2\\) on \\(\\mathbb{R}^n\\). Since \\(\\mathbb{R}^n\\) is complete under \\(\\|\\cdot\\|_2\\), and equivalent norms have the same Cauchy sequences and convergent sequences, \\(X\\) is complete. \\(\\square\\)
</div>

<p>The power of functional analysis lies in the <em>infinite-dimensional</em> setting, where completeness is no longer automatic. Whether a normed space is complete depends critically on the choice of norm and the underlying set.</p>

<div class="env-block theorem">
<strong>Proposition 2.1.4 (Completeness and Closed Subspaces).</strong> Let \\(X\\) be a Banach space and \\(Y \\subseteq X\\) a subspace. Then \\(Y\\) is a Banach space (with the inherited norm) if and only if \\(Y\\) is closed in \\(X\\).
</div>

<div class="env-block proof">
<strong>Proof.</strong> <em>(\\(\\Rightarrow\\))</em> If \\(Y\\) is complete and \\((y_n) \\subset Y\\) converges to \\(x \\in X\\), then \\((y_n)\\) is Cauchy in \\(Y\\), hence converges to some \\(y \\in Y\\). By uniqueness of limits, \\(x = y \\in Y\\), so \\(Y\\) is closed.<br>
<em>(\\(\\Leftarrow\\))</em> If \\(Y\\) is closed and \\((y_n)\\) is Cauchy in \\(Y\\), then it is Cauchy in \\(X\\), hence converges to some \\(x \\in X\\). Since \\(Y\\) is closed, \\(x \\in Y\\). \\(\\square\\)
</div>

<div class="env-block definition">
<strong>Definition 2.1.5 (Completion).</strong> For any normed space \\(X\\), there exists a Banach space \\(\\widehat{X}\\) and an isometric embedding \\(\\iota: X \\hookrightarrow \\widehat{X}\\) such that \\(\\iota(X)\\) is dense in \\(\\widehat{X}\\). The space \\(\\widehat{X}\\) is called the <em>completion</em> of \\(X\\), and is unique up to isometric isomorphism.
</div>

<p>The completion is constructed by taking equivalence classes of Cauchy sequences, analogous to the construction of \\(\\mathbb{R}\\) from \\(\\mathbb{Q}\\). This guarantees that every normed space can be "enlarged" to a Banach space.</p>

<div class="viz-placeholder" data-viz="viz-cauchy-vs-convergence">
    Visualization: Cauchy sequences that do and do not converge, illustrating the difference between complete and incomplete spaces.
</div>

<div class="viz-placeholder" data-viz="viz-completion-process">
    Visualization: The completion process &mdash; filling in the "holes" of an incomplete normed space.
</div>
`,
            visualizations: [
                {
                    id: 'viz-cauchy-vs-convergence',
                    title: 'Cauchy vs. Convergent Sequences',
                    description: 'Compare a Cauchy sequence that converges (in a Banach space) with one that "tries to converge" but the limit is missing (incomplete space).',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 380, scale: 50, originX: 280, originY: 340 });

                        var n = 10;
                        var speed = 1.0;

                        VizEngine.createSlider(controls, 'Terms n', 3, 30, n, 1, function(v) { n = Math.round(v); draw(); });
                        VizEngine.createSlider(controls, 'Speed', 0.2, 3.0, speed, 0.1, function(v) { speed = v; });

                        var animT = 0;
                        var playing = true;

                        VizEngine.createButton(controls, 'Play/Pause', function() { playing = !playing; });

                        function cauchyConvergent(k) {
                            return 1 / (1 + k);
                        }

                        function cauchyInRationals(k) {
                            var approx = 1.0;
                            for (var i = 0; i < k + 1; i++) {
                                approx = approx - (approx * approx - 2) / (2 * approx);
                            }
                            return approx;
                        }

                        function draw() {
                            engine.clear();

                            var ctx = engine.ctx;
                            var leftW = 260;
                            var rightX = 300;

                            ctx.fillStyle = engine.colors.text;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Complete: 1/(1+k) in R', leftW / 2, 8);
                            ctx.fillText('Incomplete: sqrt(2) in Q', rightX + (560 - rightX) / 2, 8);

                            var activeN = Math.min(n, Math.floor(animT));

                            for (var side = 0; side < 2; side++) {
                                var baseX = side === 0 ? 30 : rightX + 10;
                                var barY = 200;
                                var barW = 200;

                                ctx.strokeStyle = engine.colors.axis;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(baseX, barY);
                                ctx.lineTo(baseX + barW, barY);
                                ctx.stroke();

                                for (var k = 0; k < activeN; k++) {
                                    var val;
                                    if (side === 0) {
                                        val = cauchyConvergent(k);
                                    } else {
                                        val = cauchyInRationals(k) - 1.0;
                                    }

                                    var px, rangeMin, rangeMax;
                                    if (side === 0) {
                                        rangeMin = -0.1;
                                        rangeMax = 1.1;
                                    } else {
                                        rangeMin = -0.1;
                                        rangeMax = 0.6;
                                    }
                                    px = baseX + ((val - rangeMin) / (rangeMax - rangeMin)) * barW;

                                    var alpha = 0.3 + 0.7 * (k / Math.max(1, activeN - 1));
                                    var r = 4 - 2 * (k / Math.max(1, activeN - 1));
                                    var col = side === 0 ? engine.colors.blue : engine.colors.orange;

                                    ctx.globalAlpha = alpha;
                                    ctx.fillStyle = col;
                                    ctx.beginPath();
                                    ctx.arc(px, barY - 15 * (k + 1) / activeN, Math.max(r, 2), 0, Math.PI * 2);
                                    ctx.fill();
                                }
                                ctx.globalAlpha = 1.0;

                                if (side === 0) {
                                    var limPx = baseX + ((0 - (-0.1)) / (1.1 - (-0.1))) * barW;
                                    ctx.fillStyle = engine.colors.green;
                                    ctx.beginPath();
                                    ctx.arc(limPx, barY + 15, 6, 0, Math.PI * 2);
                                    ctx.fill();
                                    ctx.fillStyle = engine.colors.green;
                                    ctx.font = '11px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'top';
                                    ctx.fillText('limit = 0 in R', limPx, barY + 25);
                                } else {
                                    var sqr2 = Math.sqrt(2) - 1.0;
                                    var limPx2 = baseX + ((sqr2 - (-0.1)) / (0.6 - (-0.1))) * barW;
                                    ctx.strokeStyle = engine.colors.red;
                                    ctx.lineWidth = 2;
                                    ctx.setLineDash([4, 4]);
                                    ctx.beginPath();
                                    ctx.arc(limPx2, barY + 15, 6, 0, Math.PI * 2);
                                    ctx.stroke();
                                    ctx.setLineDash([]);
                                    ctx.fillStyle = engine.colors.red;
                                    ctx.font = '11px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'top';
                                    ctx.fillText('sqrt(2) not in Q!', limPx2, barY + 25);
                                }
                            }

                            ctx.strokeStyle = engine.colors.grid;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([3, 3]);
                            ctx.beginPath();
                            ctx.moveTo(280, 30);
                            ctx.lineTo(280, 350);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            ctx.fillStyle = engine.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Cauchy + Complete = Convergent', leftW / 2, 330);
                            ctx.fillText('Cauchy + Incomplete = Gap!', rightX + (560 - rightX) / 2, 330);
                        }

                        engine.animate(function(t) {
                            if (playing) {
                                animT += 0.03 * speed;
                                if (animT > n + 2) animT = 0;
                            }
                            draw();
                        });

                        draw();
                        return engine;
                    }
                },
                {
                    id: 'viz-completion-process',
                    title: 'Completing a Normed Space',
                    description: 'Visualize how the completion of Q produces R by "filling in" the missing limits of Cauchy sequences.',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 380, scale: 40, originX: 280, originY: 190 });

                        var numPoints = 20;
                        var showCompletion = false;

                        VizEngine.createSlider(controls, 'Density', 5, 50, numPoints, 1, function(v) { numPoints = Math.round(v); draw(); });
                        VizEngine.createButton(controls, 'Toggle Completion', function() { showCompletion = !showCompletion; draw(); });

                        function draw() {
                            engine.clear();

                            var ctx = engine.ctx;
                            var lineY1 = 130;
                            var lineY2 = 260;
                            var leftX = 40;
                            var rightX = 520;
                            var w = rightX - leftX;

                            ctx.fillStyle = engine.colors.text;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Q (rationals) - incomplete', 280, lineY1 - 40);

                            ctx.strokeStyle = engine.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(leftX, lineY1);
                            ctx.lineTo(rightX, lineY1);
                            ctx.stroke();

                            var irrationals = [Math.sqrt(2), Math.PI - 2, Math.E - 2, Math.sqrt(3), Math.sqrt(5) - 1, (1 + Math.sqrt(5)) / 2 - 1];

                            for (var i = 0; i < numPoints; i++) {
                                var rat = -2 + 4 * i / (numPoints - 1);
                                var px = leftX + ((rat + 2) / 4) * w;
                                ctx.fillStyle = engine.colors.blue;
                                ctx.beginPath();
                                ctx.arc(px, lineY1, 3, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            for (var j = 0; j < irrationals.length; j++) {
                                var irr = irrationals[j] - 1;
                                if (irr < -2 || irr > 2) continue;
                                var px2 = leftX + ((irr + 2) / 4) * w;
                                ctx.strokeStyle = engine.colors.red;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                ctx.arc(px2, lineY1, 5, 0, Math.PI * 2);
                                ctx.stroke();
                            }

                            ctx.fillStyle = engine.colors.text;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(showCompletion ? 'R (reals) - complete!' : 'R = completion of Q', 280, lineY2 - 40);

                            if (showCompletion) {
                                ctx.strokeStyle = engine.colors.green;
                                ctx.lineWidth = 3;
                                ctx.beginPath();
                                ctx.moveTo(leftX, lineY2);
                                ctx.lineTo(rightX, lineY2);
                                ctx.stroke();

                                ctx.fillStyle = engine.colors.text;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.fillText('Every Cauchy sequence now converges - no gaps!', 280, lineY2 + 25);

                                for (var j2 = 0; j2 < irrationals.length; j2++) {
                                    var irr2 = irrationals[j2] - 1;
                                    if (irr2 < -2 || irr2 > 2) continue;
                                    var px3 = leftX + ((irr2 + 2) / 4) * w;
                                    ctx.fillStyle = engine.colors.green;
                                    ctx.beginPath();
                                    ctx.arc(px3, lineY2, 5, 0, Math.PI * 2);
                                    ctx.fill();
                                }

                                ctx.setLineDash([3, 3]);
                                ctx.strokeStyle = engine.colors.text + '44';
                                for (var j3 = 0; j3 < irrationals.length; j3++) {
                                    var irr3 = irrationals[j3] - 1;
                                    if (irr3 < -2 || irr3 > 2) continue;
                                    var px4 = leftX + ((irr3 + 2) / 4) * w;
                                    ctx.beginPath();
                                    ctx.moveTo(px4, lineY1 + 8);
                                    ctx.lineTo(px4, lineY2 - 8);
                                    ctx.stroke();
                                }
                                ctx.setLineDash([]);
                            } else {
                                ctx.strokeStyle = engine.colors.axis;
                                ctx.lineWidth = 1;
                                ctx.setLineDash([4, 4]);
                                ctx.beginPath();
                                ctx.moveTo(leftX, lineY2);
                                ctx.lineTo(rightX, lineY2);
                                ctx.stroke();
                                ctx.setLineDash([]);

                                ctx.fillStyle = engine.colors.text;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.fillText('Click "Toggle Completion" to fill in the gaps', 280, lineY2 + 25);
                            }

                            ctx.fillStyle = engine.colors.red;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Red circles = missing irrationals (gaps)', leftX, lineY1 + 20);
                        }

                        draw();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that in any normed space, every convergent sequence is Cauchy. Give an explicit N in terms of the convergence condition.',
                    hint: 'Use the triangle inequality: ||x_n - x_m|| <= ||x_n - x|| + ||x - x_m||.',
                    solution: 'Suppose x_n -> x. Given epsilon > 0, choose N such that ||x_n - x|| < epsilon/2 for all n >= N. Then for n, m >= N: ||x_n - x_m|| <= ||x_n - x|| + ||x - x_m|| < epsilon/2 + epsilon/2 = epsilon. So (x_n) is Cauchy.'
                },
                {
                    question: 'Let X = C([0,1]) with the norm ||f||_1 = integral from 0 to 1 of |f(t)| dt. Show that X is NOT a Banach space by constructing a Cauchy sequence that does not converge in this norm.',
                    hint: 'Consider piecewise linear functions that approximate the step function at t = 1/2.',
                    solution: 'Define f_n(t) = 0 for t in [0, 1/2 - 1/n], f_n(t) = 1 for t in [1/2, 1], and linear on [1/2 - 1/n, 1/2]. Then ||f_n - f_m||_1 -> 0 as n, m -> infinity (the functions differ only on a set of measure at most 1/n + 1/m). But the pointwise limit is the step function at 1/2, which is not continuous. Any L^1-limit would have to agree with this step function a.e., and no continuous function equals a step function a.e. So (f_n) is Cauchy in (C[0,1], ||.||_1) but does not converge.'
                },
                {
                    question: 'Prove that a closed subspace of a Banach space is itself a Banach space.',
                    hint: 'A Cauchy sequence in the subspace is Cauchy in the ambient space. Use completeness of the ambient space and closedness of the subspace.',
                    solution: 'Let Y be a closed subspace of the Banach space X. Let (y_n) be Cauchy in Y. Then (y_n) is Cauchy in X. Since X is complete, y_n -> x for some x in X. Since Y is closed and y_n in Y for all n, we have x in Y. Thus (y_n) converges in Y, proving Y is complete.'
                }
            ]
        },

        // ============================================================
        // Section 2: Examples of Banach Spaces
        // ============================================================
        {
            id: 'examples-banach-spaces',
            title: 'Examples of Banach Spaces',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Completeness in Practice.</strong> The definition of a Banach space is simple, but verifying completeness for specific spaces requires real work. In this section, we build a catalog of the most important Banach spaces, each of which appears repeatedly in later chapters.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove that \(\ell^p\) spaces, \(C[a,b]\) with the sup-norm, and \(L^p\) spaces are Banach spaces. We also identify important spaces that are <em>not</em> complete and explain why.</p>
</div>

<h2>2.2 Examples of Banach Spaces</h2>

<p>Let us build a catalog of the most important Banach spaces. These examples recur throughout functional analysis and serve as test cases for all the major theorems.</p>

<h3>The Sequence Spaces \\(\\ell^p\\)</h3>

<div class="env-block definition">
<strong>Definition 2.2.1.</strong> For \\(1 \\leq p < \\infty\\), the space \\(\\ell^p\\) consists of all sequences \\(x = (x_n)_{n=1}^\\infty\\) of scalars such that
\\[
\\|x\\|_p = \\left(\\sum_{n=1}^\\infty |x_n|^p\\right)^{1/p} < \\infty.
\\]
For \\(p = \\infty\\), we define \\(\\ell^\\infty\\) as the space of bounded sequences with
\\[
\\|x\\|_\\infty = \\sup_{n \\geq 1} |x_n|.
\\]
</div>

<div class="env-block theorem">
<strong>Theorem 2.2.2.</strong> For every \\(1 \\leq p \\leq \\infty\\), the space \\(\\ell^p\\) is a Banach space.
</div>

<div class="env-block proof">
<strong>Proof sketch (\\(1 \\leq p < \\infty\\)).</strong> Let \\((x^{(k)})_{k=1}^\\infty\\) be Cauchy in \\(\\ell^p\\). For each fixed \\(n\\), \\(|x_n^{(k)} - x_n^{(j)}| \\leq \\|x^{(k)} - x^{(j)}\\|_p \\to 0\\), so \\((x_n^{(k)})_k\\) is Cauchy in \\(\\mathbb{R}\\) (or \\(\\mathbb{C}\\)), hence convergent to some \\(x_n\\). Set \\(x = (x_n)\\). A truncation argument shows \\(x \\in \\ell^p\\) and \\(\\|x^{(k)} - x\\|_p \\to 0\\). \\(\\square\\)
</div>

<h3>The Function Space \\(C[a,b]\\)</h3>

<div class="env-block definition">
<strong>Definition 2.2.3.</strong> The space \\(C[a,b]\\) of continuous real-valued (or complex-valued) functions on \\([a,b]\\) with the supremum norm
\\[
\\|f\\|_\\infty = \\sup_{t \\in [a,b]} |f(t)|
\\]
is a Banach space.
</div>

<div class="env-block proof">
<strong>Proof sketch.</strong> A Cauchy sequence \\((f_n)\\) in the sup norm converges uniformly to some function \\(f\\). The uniform limit of continuous functions is continuous, so \\(f \\in C[a,b]\\). \\(\\square\\)
</div>

<h3>The Lebesgue Spaces \\(L^p\\)</h3>

<div class="env-block definition">
<strong>Definition 2.2.4.</strong> For a measure space \\((\\Omega, \\mathcal{F}, \\mu)\\) and \\(1 \\leq p \\leq \\infty\\), the space \\(L^p(\\Omega, \\mu)\\) consists of (equivalence classes of) measurable functions with
\\[
\\|f\\|_p = \\left(\\int_\\Omega |f|^p \\, d\\mu\\right)^{1/p} < \\infty \\quad (1 \\leq p < \\infty),
\\]
\\[
\\|f\\|_\\infty = \\operatorname{ess\\,sup} |f| \\quad (p = \\infty).
\\]
</div>

<div class="env-block theorem">
<strong>Theorem 2.2.5 (Riesz-Fischer).</strong> For \\(1 \\leq p \\leq \\infty\\), \\(L^p(\\Omega, \\mu)\\) is a Banach space.
</div>

<h3>Non-Examples</h3>

<div class="env-block example">
<strong>Example 2.2.6.</strong> The space \\(C[0,1]\\) with the \\(L^1\\)-norm \\(\\|f\\|_1 = \\int_0^1 |f(t)|\\, dt\\) is <strong>not</strong> complete. Its completion is \\(L^1[0,1]\\).
</div>

<div class="env-block example">
<strong>Example 2.2.7.</strong> The space of polynomials on \\([0,1]\\) with the sup norm is not complete. Its completion is \\(C[0,1]\\) by the Weierstrass approximation theorem.
</div>

<div class="env-block example">
<strong>Example 2.2.8.</strong> The space \\(c_{00}\\) of eventually-zero sequences with the \\(\\ell^p\\) norm is not complete. Its completion is \\(\\ell^p\\).
</div>

<div class="viz-placeholder" data-viz="viz-lp-unit-balls">
    Visualization: Unit balls of l^p spaces for varying p, showing how the geometry changes.
</div>

<div class="viz-placeholder" data-viz="viz-sequence-convergence-lp">
    Visualization: Convergence of sequences in different l^p norms.
</div>
`,
            visualizations: [
                {
                    id: 'viz-lp-unit-balls',
                    title: 'Unit Balls in l^p Spaces',
                    description: 'Explore how the unit ball {x : ||x||_p <= 1} in R^2 changes shape as p varies from 1 to infinity.',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 380, scale: 120, originX: 280, originY: 190 });

                        var p = 2.0;

                        VizEngine.createSlider(controls, 'p', 0.5, 20, p, 0.1, function(v) { p = v; draw(); });

                        var presets = [1, 2, 4, 100];
                        for (var i = 0; i < presets.length; i++) {
                            (function(pv) {
                                VizEngine.createButton(controls, 'p=' + (pv >= 100 ? '\u221e' : pv), function() { p = pv; draw(); });
                            })(presets[i]);
                        }

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            var pLabel = p >= 20 ? '\u221e' : p.toFixed(1);
                            engine.screenText('Unit ball of l^' + pLabel, 280, 20, engine.colors.white, 14);

                            var pEff = Math.min(p, 100);

                            engine.drawCurve(function(t) {
                                var ct = Math.cos(t);
                                var st = Math.sin(t);
                                var ac = Math.abs(ct);
                                var as = Math.abs(st);
                                var r;
                                if (ac < 1e-10 || as < 1e-10) {
                                    r = 1;
                                } else {
                                    r = Math.pow(Math.pow(ac, pEff) + Math.pow(as, pEff), -1 / pEff);
                                }
                                return [r * ct, r * st];
                            }, 0, 2 * Math.PI, 500, engine.colors.blue, 2.5);

                            var fillAlpha = '33';
                            var ctx = engine.ctx;
                            ctx.fillStyle = engine.colors.blue + fillAlpha;
                            ctx.beginPath();
                            for (var i = 0; i <= 500; i++) {
                                var t = 2 * Math.PI * i / 500;
                                var ct = Math.cos(t);
                                var st = Math.sin(t);
                                var ac = Math.abs(ct);
                                var as = Math.abs(st);
                                var r;
                                if (ac < 1e-10 || as < 1e-10) {
                                    r = 1;
                                } else {
                                    r = Math.pow(Math.pow(ac, pEff) + Math.pow(as, pEff), -1 / pEff);
                                }
                                var pt = engine.toScreen(r * ct, r * st);
                                if (i === 0) ctx.moveTo(pt[0], pt[1]);
                                else ctx.lineTo(pt[0], pt[1]);
                            }
                            ctx.closePath();
                            ctx.fill();

                            engine.drawPoint(1, 0, engine.colors.orange, '(1,0)', 4);
                            engine.drawPoint(0, 1, engine.colors.orange, '(0,1)', 4);
                            engine.drawPoint(-1, 0, engine.colors.orange, '', 4);
                            engine.drawPoint(0, -1, engine.colors.orange, '', 4);
                        }

                        draw();
                        return engine;
                    }
                },
                {
                    id: 'viz-sequence-convergence-lp',
                    title: 'Convergence in Different l^p Norms',
                    description: 'Watch a sequence converge to a limit and compare the speed of convergence under different l^p norms.',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 380, scale: 40, originX: 60, originY: 340 });

                        var maxK = 15;
                        var pVals = [1, 2, Infinity];
                        var animT = 0;
                        var playing = true;

                        VizEngine.createSlider(controls, 'Terms', 3, 30, maxK, 1, function(v) { maxK = Math.round(v); });
                        VizEngine.createButton(controls, 'Play/Pause', function() { playing = !playing; });

                        function seqElement(k, n) {
                            if (n <= k) return 1 / (n + 1);
                            return 0;
                        }

                        function lpNorm(seq, p) {
                            if (p === Infinity) {
                                var m = 0;
                                for (var i = 0; i < seq.length; i++) m = Math.max(m, Math.abs(seq[i]));
                                return m;
                            }
                            var s = 0;
                            for (var i = 0; i < seq.length; i++) s += Math.pow(Math.abs(seq[i]), p);
                            return Math.pow(s, 1 / p);
                        }

                        function draw() {
                            engine.clear();
                            var ctx = engine.ctx;

                            var numTermsShow = Math.min(maxK, Math.max(1, Math.floor(animT)));
                            var limitSeq = [];
                            for (var n = 0; n < 10; n++) limitSeq.push(0);

                            var colors = [engine.colors.blue, engine.colors.teal, engine.colors.orange];
                            var labels = ['l\u00b9', 'l\u00b2', 'l\u221e'];

                            var plotX = 80;
                            var plotW = 440;
                            var plotY = 60;
                            var plotH = 250;

                            ctx.strokeStyle = engine.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(plotX, plotY);
                            ctx.lineTo(plotX, plotY + plotH);
                            ctx.lineTo(plotX + plotW, plotY + plotH);
                            ctx.stroke();

                            ctx.fillStyle = engine.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('k (sequence index)', plotX + plotW / 2, plotY + plotH + 30);
                            ctx.save();
                            ctx.translate(plotX - 35, plotY + plotH / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillText('||x(k) - 0||_p', 0, 0);
                            ctx.restore();

                            for (var pi = 0; pi < 3; pi++) {
                                var pv = pVals[pi];
                                ctx.strokeStyle = colors[pi];
                                ctx.lineWidth = 2;
                                ctx.beginPath();

                                for (var k = 1; k <= numTermsShow; k++) {
                                    var seq = [];
                                    for (var n = 0; n < 10; n++) seq.push(seqElement(k, n));
                                    var norm = lpNorm(seq, pv);

                                    var px = plotX + (k / maxK) * plotW;
                                    var py = plotY + plotH - (norm / 1.5) * plotH;
                                    py = Math.max(plotY, Math.min(plotY + plotH, py));

                                    if (k === 1) ctx.moveTo(px, py);
                                    else ctx.lineTo(px, py);

                                    ctx.fillStyle = colors[pi];
                                    ctx.beginPath();
                                    ctx.arc(px, py, 3, 0, Math.PI * 2);
                                    ctx.fill();
                                    ctx.beginPath();
                                    ctx.moveTo(px, py);
                                }
                                ctx.stroke();
                            }

                            for (var pi2 = 0; pi2 < 3; pi2++) {
                                ctx.fillStyle = colors[pi2];
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText(labels[pi2], plotX + plotW + 10, plotY + 20 + pi2 * 20);
                            }

                            ctx.fillStyle = engine.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('||x(k)||_p norms decrease as k grows (convergence to 0)', 280, 25);
                        }

                        engine.animate(function(t) {
                            if (playing) {
                                animT += 0.04;
                                if (animT > maxK + 3) animT = 0;
                            }
                            draw();
                        });

                        draw();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that l^1 is a Banach space. Give the full details of the convergence argument.',
                    hint: 'For a Cauchy sequence (x^(k)) in l^1, first show each coordinate converges, then use a truncation/Fatou argument to show the limit is in l^1 and convergence holds in the l^1 norm.',
                    solution: 'Let (x^(k)) be Cauchy in l^1. For each n, |x_n^(k) - x_n^(j)| <= ||x^(k) - x^(j)||_1 -> 0, so x_n^(k) -> x_n for some x_n. Define x = (x_n). For any epsilon > 0, choose N so ||x^(k) - x^(j)||_1 < epsilon for k,j >= N. Then for any finite M: sum_{n=1}^M |x_n^(k) - x_n^(j)| < epsilon. Letting j -> infinity: sum_{n=1}^M |x_n^(k) - x_n| <= epsilon for all M. Hence ||x^(k) - x||_1 <= epsilon. By triangle inequality ||x||_1 <= ||x^(k)||_1 + epsilon < infinity, so x in l^1. This shows x^(k) -> x in l^1.'
                },
                {
                    question: 'Show that c_0 (sequences converging to 0) with the sup norm is a Banach space, but c_{00} (eventually zero sequences) is not.',
                    hint: 'For c_0: show it is a closed subspace of l^infinity. For c_{00}: construct a Cauchy sequence in c_{00} whose limit is not eventually zero.',
                    solution: 'c_0 is closed in l^infinity: if x^(k) -> x in sup norm and each x^(k) in c_0, then for any epsilon > 0, pick k with ||x^(k) - x||_inf < epsilon/2. Since x^(k) in c_0, |x_n^(k)| < epsilon/2 for n >= N_k. Then |x_n| <= |x_n - x_n^(k)| + |x_n^(k)| < epsilon. So x in c_0. Since l^infinity is Banach and c_0 is closed, c_0 is Banach. For c_{00}: take x^(k) = (1, 1/2, ..., 1/k, 0, 0, ...). Then ||x^(k) - x^(j)||_inf = max_{n > min(k,j)} 1/n -> 0, but the limit (1, 1/2, 1/3, ...) is not eventually zero.'
                },
                {
                    question: 'Let 1 <= p < q <= infinity. Show that l^p is a proper subset of l^q (as sets), and that ||x||_q <= ||x||_p for all x in l^p.',
                    hint: 'Use the fact that for a sequence with |x_n| <= ||x||_inf, raising to a smaller power gives a larger sum. For the strict inclusion, find an element in l^q but not in l^p.',
                    solution: 'If x in l^p, then |x_n| <= ||x||_p for all n. For finite q: ||x||_q^q = sum |x_n|^q = sum |x_n|^{q-p}|x_n|^p <= ||x||_p^{q-p} sum |x_n|^p = ||x||_p^q. Taking q-th roots: ||x||_q <= ||x||_p. For q=infinity: ||x||_inf = sup|x_n| <= (sum|x_n|^p)^{1/p} = ||x||_p. The sequence x_n = 1/n is in l^2 but not l^1, showing l^1 is strictly contained in l^2. More generally, x_n = n^{-1/r} for p < r < q gives x in l^q but not l^p.'
                }
            ]
        },

        // ============================================================
        // Section 3: Banach Fixed Point Theorem
        // ============================================================
        {
            id: 'banach-fixed-point',
            title: 'Banach Fixed Point Theorem',
            content: `
<div class="bridge-block section-bridge">
<p><strong>The First Payoff of Completeness.</strong> With our catalog of Banach spaces established, we prove the first major theorem that requires completeness: the Banach Fixed Point Theorem (Contraction Mapping Principle). This result is both a powerful existence-and-uniqueness tool and a constructive algorithm, with applications ranging from differential equations to numerical analysis.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We state and prove the contraction mapping principle, analyze the rate of convergence, and apply it to solve differential and integral equations. The iterative nature of the proof foreshadows many fixed-point arguments to come.</p>
</div>

<h2>2.3 Banach Fixed Point Theorem</h2>

<p>The Banach Fixed Point Theorem (also called the Contraction Mapping Theorem) is one of the most powerful and widely applicable results in analysis. It provides not just existence and uniqueness of fixed points, but also a constructive algorithm for finding them.</p>

<div class="env-block definition">
<strong>Definition 2.3.1 (Contraction Mapping).</strong> Let \\((X, d)\\) be a metric space. A map \\(T: X \\to X\\) is called a <em>contraction</em> (or <em>contraction mapping</em>) if there exists a constant \\(0 \\leq q < 1\\) such that
\\[
d(Tx, Ty) \\leq q \\cdot d(x, y) \\quad \\text{for all } x, y \\in X.
\\]
The constant \\(q\\) is called the <em>contraction factor</em> (or Lipschitz constant).
</div>

<div class="env-block theorem">
<strong>Theorem 2.3.2 (Banach Fixed Point Theorem).</strong> Let \\((X, d)\\) be a <em>complete</em> metric space and \\(T: X \\to X\\) a contraction with factor \\(q \\in [0, 1)\\). Then:
<ol>
<li>\\(T\\) has a <strong>unique</strong> fixed point \\(x^* \\in X\\), i.e., \\(Tx^* = x^*\\).</li>
<li>For any starting point \\(x_0 \\in X\\), the iterates \\(x_n = T^n(x_0)\\) converge to \\(x^*\\).</li>
<li><strong>A priori estimate:</strong> \\(d(x_n, x^*) \\leq \\dfrac{q^n}{1 - q} d(x_0, x_1)\\).</li>
<li><strong>A posteriori estimate:</strong> \\(d(x_n, x^*) \\leq \\dfrac{q}{1 - q} d(x_{n-1}, x_n)\\).</li>
</ol>
</div>

<div class="env-block proof">
<strong>Proof.</strong>
<em>Existence.</em> Fix any \\(x_0 \\in X\\) and define \\(x_n = T(x_{n-1})\\). We have
\\[
d(x_{n+1}, x_n) = d(Tx_n, Tx_{n-1}) \\leq q \\cdot d(x_n, x_{n-1}) \\leq \\cdots \\leq q^n d(x_1, x_0).
\\]
For \\(m > n\\):
\\[
d(x_m, x_n) \\leq \\sum_{k=n}^{m-1} d(x_{k+1}, x_k) \\leq \\sum_{k=n}^{m-1} q^k d(x_1, x_0) \\leq \\frac{q^n}{1-q} d(x_1, x_0) \\to 0
\\]
as \\(n \\to \\infty\\). So \\((x_n)\\) is Cauchy. By completeness, \\(x_n \\to x^*\\) for some \\(x^* \\in X\\). Since \\(T\\) is continuous (it is Lipschitz), \\(Tx^* = T(\\lim x_n) = \\lim Tx_n = \\lim x_{n+1} = x^*\\).<br><br>
<em>Uniqueness.</em> If \\(Tx^* = x^*\\) and \\(Ty^* = y^*\\), then \\(d(x^*, y^*) = d(Tx^*, Ty^*) \\leq q \\cdot d(x^*, y^*)\\). Since \\(q < 1\\), this forces \\(d(x^*, y^*) = 0\\), i.e., \\(x^* = y^*\\). \\(\\square\\)
</div>

<div class="env-block example">
<strong>Example 2.3.3 (Picard-Lindel&ouml;f).</strong> The Banach Fixed Point Theorem implies the existence and uniqueness of solutions to ODEs. Given \\(y' = f(t, y)\\), \\(y(t_0) = y_0\\), the integral operator
\\[
(Ty)(t) = y_0 + \\int_{t_0}^t f(s, y(s))\\, ds
\\]
is a contraction on \\(C([t_0 - \\delta, t_0 + \\delta])\\) for small enough \\(\\delta\\), provided \\(f\\) is Lipschitz in \\(y\\).
</div>

<div class="env-block theorem">
<strong>Remark 2.3.4.</strong> The completeness hypothesis is essential. The map \\(T: (0, 1] \\to (0, 1]\\) defined by \\(Tx = x/2\\) is a contraction with \\(q = 1/2\\), but has no fixed point in \\((0, 1]\\).
</div>

<div class="viz-placeholder" data-viz="viz-contraction-iteration">
    Visualization: Animate the iteration of a contraction mapping in R, showing convergence to the unique fixed point.
</div>

<div class="viz-placeholder" data-viz="viz-contraction-2d">
    Visualization: A 2D contraction mapping showing iterates spiraling into the fixed point.
</div>
`,
            visualizations: [
                {
                    id: 'viz-contraction-iteration',
                    title: 'Contraction Mapping Iteration (1D)',
                    description: 'Watch the iteration x_{n+1} = T(x_n) converge to the unique fixed point for a contraction T on [0,1].',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 380, scale: 300, originX: 40, originY: 345 });

                        var q = 0.5;
                        var x0 = 0.9;
                        var maxIter = 20;
                        var animStep = 0;
                        var playing = true;

                        VizEngine.createSlider(controls, 'q (contraction)', 0.1, 0.95, q, 0.05, function(v) { q = v; animStep = 0; });
                        VizEngine.createSlider(controls, 'x\u2080', 0.05, 0.95, x0, 0.05, function(v) { x0 = v; animStep = 0; });
                        VizEngine.createButton(controls, 'Reset', function() { animStep = 0; });
                        VizEngine.createButton(controls, 'Play/Pause', function() { playing = !playing; });

                        function T(x) {
                            return q * Math.sin(Math.PI * x / 2) + (1 - q) * 0.3;
                        }

                        function draw() {
                            engine.clear();
                            engine.drawGrid(0.25);

                            engine.drawCurve(function(t) { return [t, t]; }, 0, 1.1, 200, engine.colors.axis, 1);

                            engine.drawCurve(function(t) { return [t, T(t)]; }, 0, 1.1, 200, engine.colors.blue, 2.5);

                            var fixedPt = x0;
                            for (var i = 0; i < 100; i++) fixedPt = T(fixedPt);

                            engine.drawPoint(fixedPt, fixedPt, engine.colors.green, 'x*', 6);

                            var steps = Math.min(maxIter, Math.floor(animStep));
                            var xCur = x0;

                            for (var s = 0; s < steps; s++) {
                                var xNext = T(xCur);

                                engine.drawSegment(xCur, xCur, xCur, xNext, engine.colors.orange, 1.5, true);
                                engine.drawSegment(xCur, xNext, xNext, xNext, engine.colors.orange, 1.5, true);

                                engine.drawPoint(xCur, xNext, engine.colors.teal, '', 3);

                                xCur = xNext;
                            }

                            engine.drawPoint(x0, 0, engine.colors.red, 'x\u2080', 5);
                            engine.drawPoint(xCur, T(xCur), engine.colors.red, 'x_' + steps, 5);

                            engine.screenText('T(x) = ' + q.toFixed(2) + ' sin(\u03c0x/2) + ' + ((1 - q) * 0.3).toFixed(2), 300, 20, engine.colors.white, 13);
                            engine.screenText('Iteration: n = ' + steps, 300, 40, engine.colors.text, 12);
                            engine.screenText('x_n = ' + xCur.toFixed(6), 300, 58, engine.colors.teal, 12);
                            engine.screenText('x* = ' + fixedPt.toFixed(6), 300, 76, engine.colors.green, 12);
                        }

                        engine.animate(function(t) {
                            if (playing && animStep < maxIter + 1) {
                                animStep += 0.03;
                            }
                            draw();
                        });

                        draw();
                        return engine;
                    }
                },
                {
                    id: 'viz-contraction-2d',
                    title: '2D Contraction Mapping',
                    description: 'Visualize iteration of a 2D contraction T(x,y) = q * R_theta(x,y) + c, showing iterates converging to the fixed point.',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 380, scale: 60, originX: 280, originY: 190 });

                        var q = 0.7;
                        var theta = 0.8;
                        var cx = 0.5;
                        var cy = 0.3;
                        var startX = 3;
                        var startY = 2;
                        var maxIter = 50;
                        var animStep = 0;
                        var playing = true;

                        VizEngine.createSlider(controls, 'q', 0.1, 0.95, q, 0.05, function(v) { q = v; animStep = 0; });
                        VizEngine.createSlider(controls, '\u03b8 (rotation)', 0, 6.28, theta, 0.1, function(v) { theta = v; animStep = 0; });
                        VizEngine.createButton(controls, 'Reset', function() { animStep = 0; });
                        VizEngine.createButton(controls, 'Play/Pause', function() { playing = !playing; });

                        function T(x, y) {
                            var rx = q * (Math.cos(theta) * x - Math.sin(theta) * y) + cx;
                            var ry = q * (Math.sin(theta) * x + Math.cos(theta) * y) + cy;
                            return [rx, ry];
                        }

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            var fpx = startX;
                            var fpy = startY;
                            for (var i = 0; i < 200; i++) {
                                var next = T(fpx, fpy);
                                fpx = next[0];
                                fpy = next[1];
                            }

                            var steps = Math.min(maxIter, Math.floor(animStep));
                            var px = startX;
                            var py = startY;
                            var trail = [[px, py]];

                            for (var s = 0; s < steps; s++) {
                                var nxt = T(px, py);
                                px = nxt[0];
                                py = nxt[1];
                                trail.push([px, py]);
                            }

                            for (var j = 0; j < trail.length - 1; j++) {
                                var alpha = 0.3 + 0.7 * j / Math.max(1, trail.length - 1);
                                var ctx = engine.ctx;
                                var from = engine.toScreen(trail[j][0], trail[j][1]);
                                var to = engine.toScreen(trail[j + 1][0], trail[j + 1][1]);
                                ctx.strokeStyle = engine.colors.orange;
                                ctx.globalAlpha = alpha;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                ctx.moveTo(from[0], from[1]);
                                ctx.lineTo(to[0], to[1]);
                                ctx.stroke();
                                ctx.globalAlpha = 1.0;
                            }

                            for (var j2 = 0; j2 < trail.length; j2++) {
                                var r = 4 - 2 * (j2 / Math.max(1, trail.length - 1));
                                var col = j2 === 0 ? engine.colors.red : engine.colors.teal;
                                engine.drawPoint(trail[j2][0], trail[j2][1], col, '', Math.max(r, 2));
                            }

                            engine.drawPoint(startX, startY, engine.colors.red, 'x\u2080', 5);
                            engine.drawPoint(fpx, fpy, engine.colors.green, 'x*', 7);

                            if (trail.length > 1) {
                                var last = trail[trail.length - 1];
                                engine.drawPoint(last[0], last[1], engine.colors.purple, 'x_' + (trail.length - 1), 4);
                            }

                            engine.screenText('2D Contraction: T(x) = q R_\u03b8 x + c', 280, 15, engine.colors.white, 13);
                            engine.screenText('q = ' + q.toFixed(2) + ', \u03b8 = ' + theta.toFixed(2) + ', step = ' + steps, 280, 35, engine.colors.text, 11);
                        }

                        engine.animate(function(t) {
                            if (playing && animStep < maxIter + 1) {
                                animStep += 0.05;
                            }
                            draw();
                        });

                        draw();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that the map T: [0, infinity) -> [0, infinity) defined by Tx = (x + 2/x)/2 is a contraction on [1, 2] (with the usual metric). What is its fixed point?',
                    hint: 'Compute |T(x) - T(y)|/|x - y| using the mean value theorem. Note T\'(x) = (1 - 2/x^2)/2.',
                    solution: 'T\'(x) = 1/2 - 1/x^2. On [1,2], |T\'(x)| = |1/2 - 1/x^2|. At x=1: |1/2 - 1| = 1/2. At x=2: |1/2 - 1/4| = 1/4. So sup|T\'| = 1/2 < 1 on [1,2]. By MVT, |T(x) - T(y)| <= (1/2)|x - y|. Also T maps [1,2] to [1,2]: T(1) = 3/2, T(2) = 3/2. The fixed point satisfies x = (x + 2/x)/2, giving x^2 = 2, so x* = sqrt(2). This is the Babylonian method for computing square roots.'
                },
                {
                    question: 'Give an example showing that the Banach Fixed Point Theorem fails without completeness. Specifically, find an incomplete metric space and a contraction on it with no fixed point.',
                    hint: 'Consider the open interval (0,1) with the standard metric and T(x) = x/2.',
                    solution: 'Take X = (0, 1] with the standard metric. Define T(x) = x/2. Then |T(x) - T(y)| = |x - y|/2 with q = 1/2 < 1, so T is a contraction. Also T maps (0,1] to (0, 1/2] which is contained in (0,1]. But Tx = x implies x/2 = x, so x = 0, which is not in (0,1]. The space is not complete (e.g. x_n = 1/n is Cauchy but does not converge in (0,1]).'
                },
                {
                    question: 'Let T: X -> X be a map on a complete metric space such that T^N is a contraction for some N >= 1. Show that T has a unique fixed point.',
                    hint: 'Apply the Banach Fixed Point Theorem to T^N. Then show that the fixed point of T^N is also a fixed point of T.',
                    solution: 'Since T^N is a contraction on a complete metric space, it has a unique fixed point x* with T^N(x*) = x*. Now consider T(x*): T^N(T(x*)) = T(T^N(x*)) = T(x*), so T(x*) is also a fixed point of T^N. By uniqueness, T(x*) = x*. So x* is a fixed point of T. Uniqueness: if Ty = y, then T^N(y) = y, so y = x* by uniqueness of the fixed point of T^N.'
                },
                {
                    question: 'Use the Banach Fixed Point Theorem to prove that the integral equation f(x) = lambda * integral from 0 to 1 of K(x,t)f(t) dt + g(x) has a unique solution in C[0,1] when |lambda| * sup|K| < 1.',
                    hint: 'Define the operator T on C[0,1] by (Tf)(x) = lambda * integral_0^1 K(x,t)f(t)dt + g(x). Show T is a contraction in the sup norm.',
                    solution: 'Let M = sup_{x,t}|K(x,t)|. For f, h in C[0,1]: |Tf(x) - Th(x)| = |lambda| |integral_0^1 K(x,t)(f(t) - h(t)) dt| <= |lambda| M ||f - h||_inf. So ||Tf - Th||_inf <= |lambda| M ||f - h||_inf. Since |lambda| M < 1, T is a contraction with q = |lambda| M. The space C[0,1] with sup norm is complete (Banach). By the Banach Fixed Point Theorem, T has a unique fixed point f* in C[0,1], which is the unique solution.'
                }
            ]
        },

        // ============================================================
        // Section 4: Series in Banach Spaces
        // ============================================================
        {
            id: 'series-banach-spaces',
            title: 'Series in Banach Spaces',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Summation in Infinite Dimensions.</strong> In \(\mathbb{R}\), absolute convergence implies convergence. Does this hold in normed spaces? The answer is yes precisely when the space is complete. This characterization gives us an alternative lens on Banach spaces and a practical tool for working with series expansions.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove that absolute convergence implies convergence if and only if the space is Banach, study the Weierstrass M-test in normed spaces, and examine Neumann series for operators, which will become essential in spectral theory.</p>
</div>

<h2>2.4 Series in Banach Spaces</h2>

<p>One of the most elegant characterizations of Banach spaces involves the convergence of series. This connection is both theoretically beautiful and practically useful.</p>

<div class="env-block definition">
<strong>Definition 2.4.1.</strong> Let \\((X, \\|\\cdot\\|)\\) be a normed space and \\((x_n)_{n=1}^\\infty\\) a sequence in \\(X\\).
<ul>
<li>The series \\(\\sum_{n=1}^\\infty x_n\\) <em>converges</em> if the partial sums \\(S_N = \\sum_{n=1}^N x_n\\) converge in \\(X\\).</li>
<li>The series \\(\\sum_{n=1}^\\infty x_n\\) <em>converges absolutely</em> if \\(\\sum_{n=1}^\\infty \\|x_n\\| < \\infty\\).</li>
</ul>
</div>

<div class="env-block theorem">
<strong>Theorem 2.4.2 (Characterization of Completeness).</strong> A normed space \\(X\\) is a Banach space if and only if every absolutely convergent series in \\(X\\) converges.
</div>

<div class="env-block proof">
<strong>Proof.</strong>
<em>(\\(\\Rightarrow\\))</em> Suppose \\(X\\) is Banach and \\(\\sum \\|x_n\\| < \\infty\\). The partial sums \\(S_N\\) are Cauchy:
\\[
\\|S_M - S_N\\| = \\left\\|\\sum_{n=N+1}^M x_n\\right\\| \\leq \\sum_{n=N+1}^M \\|x_n\\| \\to 0
\\]
as \\(N, M \\to \\infty\\). By completeness, \\(S_N\\) converges.<br><br>
<em>(\\(\\Leftarrow\\))</em> Let \\((y_n)\\) be Cauchy in \\(X\\). Choose a subsequence \\((y_{n_k})\\) with \\(\\|y_{n_{k+1}} - y_{n_k}\\| < 2^{-k}\\). Set \\(x_1 = y_{n_1}\\), \\(x_k = y_{n_k} - y_{n_{k-1}}\\) for \\(k \\geq 2\\). Then \\(\\sum \\|x_k\\| < \\|y_{n_1}\\| + 1 < \\infty\\), so \\(\\sum x_k\\) converges by hypothesis. But \\(\\sum_{k=1}^K x_k = y_{n_K}\\), so \\((y_{n_k})\\) converges. Since \\((y_n)\\) is Cauchy with a convergent subsequence, \\((y_n)\\) itself converges. \\(\\square\\)
</div>

<p>This theorem is remarkably useful: to check completeness, one need only verify convergence of absolutely convergent series, which is often easier.</p>

<h3>The Neumann Series</h3>

<div class="env-block theorem">
<strong>Theorem 2.4.3 (Neumann Series).</strong> Let \\(X\\) be a Banach space and \\(T \\in \\mathcal{B}(X)\\) (bounded linear operator on \\(X\\)) with \\(\\|T\\| < 1\\). Then \\(I - T\\) is invertible and
\\[
(I - T)^{-1} = \\sum_{n=0}^\\infty T^n,
\\]
with \\(\\|(I - T)^{-1}\\| \\leq \\frac{1}{1 - \\|T\\|}\\).
</div>

<div class="env-block proof">
<strong>Proof.</strong> Since \\(\\|T^n\\| \\leq \\|T\\|^n\\) and \\(\\|T\\| < 1\\), the series \\(\\sum_{n=0}^\\infty \\|T^n\\| \\leq \\sum_{n=0}^\\infty \\|T\\|^n = \\frac{1}{1 - \\|T\\|} < \\infty\\). By Theorem 2.4.2, \\(S = \\sum T^n\\) converges in the Banach space \\(\\mathcal{B}(X)\\). Now
\\[
(I - T) S = \\lim_{N \\to \\infty} (I - T)\\sum_{n=0}^N T^n = \\lim_{N \\to \\infty} (I - T^{N+1}) = I,
\\]
and similarly \\(S(I - T) = I\\). \\(\\square\\)
</div>

<p>The Neumann series is the operator-theoretic analogue of the geometric series \\(\\frac{1}{1 - r} = \\sum r^n\\). It is fundamental for perturbation theory: if \\(A\\) is invertible and \\(B\\) is "small," then \\(A + B = A(I + A^{-1}B)\\) is also invertible.</p>

<div class="env-block theorem">
<strong>Corollary 2.4.4.</strong> In a Banach algebra with identity, the set of invertible elements is open.
</div>

<div class="viz-placeholder" data-viz="viz-partial-sums-series">
    Visualization: Partial sums of a series in a Banach space, showing how absolute convergence guarantees convergence.
</div>

<div class="viz-placeholder" data-viz="viz-neumann-series">
    Visualization: The Neumann series (I - T)^{-1} = sum T^n converging, showing partial sums of the operator power series.
</div>
`,
            visualizations: [
                {
                    id: 'viz-partial-sums-series',
                    title: 'Absolute vs. Conditional Convergence',
                    description: 'Compare the partial sums of an absolutely convergent series vs. a conditionally convergent series (like the alternating harmonic series).',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 380, scale: 40, originX: 60, originY: 280 });

                        var maxN = 30;
                        var animN = 0;
                        var playing = true;

                        VizEngine.createSlider(controls, 'Max terms', 5, 80, maxN, 1, function(v) { maxN = Math.round(v); });
                        VizEngine.createButton(controls, 'Reset', function() { animN = 0; });
                        VizEngine.createButton(controls, 'Play/Pause', function() { playing = !playing; });

                        function draw() {
                            engine.clear();
                            var ctx = engine.ctx;

                            var plotX = 60;
                            var plotW = 460;
                            var plotY1 = 40;
                            var plotH1 = 130;
                            var plotY2 = 210;
                            var plotH2 = 130;

                            ctx.fillStyle = engine.colors.white;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Absolutely convergent: sum 1/n^2', plotX + plotW / 2, plotY1 - 5);
                            ctx.fillText('Conditionally convergent: sum (-1)^n/n', plotX + plotW / 2, plotY2 - 5);

                            var N = Math.min(maxN, Math.max(1, Math.floor(animN)));

                            for (var panel = 0; panel < 2; panel++) {
                                var py = panel === 0 ? plotY1 : plotY2;
                                var ph = panel === 0 ? plotH1 : plotH2;

                                ctx.strokeStyle = engine.colors.axis;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(plotX, py);
                                ctx.lineTo(plotX, py + ph);
                                ctx.lineTo(plotX + plotW, py + ph);
                                ctx.stroke();

                                var partial = 0;
                                var sumNorms = 0;
                                var limit = panel === 0 ? Math.PI * Math.PI / 6 : -Math.log(2);
                                var yMin, yMax;
                                if (panel === 0) { yMin = 0; yMax = 2.0; }
                                else { yMin = -1.2; yMax = 0.2; }

                                ctx.strokeStyle = engine.colors.green + '44';
                                ctx.setLineDash([4, 4]);
                                var limPy = py + ph - ((limit - yMin) / (yMax - yMin)) * ph;
                                ctx.beginPath();
                                ctx.moveTo(plotX, limPy);
                                ctx.lineTo(plotX + plotW, limPy);
                                ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.fillStyle = engine.colors.green;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText('limit = ' + limit.toFixed(4), plotX + plotW, limPy - 4);

                                var prevPartial = 0;
                                for (var n = 1; n <= N; n++) {
                                    var term;
                                    if (panel === 0) {
                                        term = 1 / (n * n);
                                    } else {
                                        term = Math.pow(-1, n + 1) / n;
                                    }
                                    partial += term;
                                    sumNorms += Math.abs(term);

                                    var px = plotX + (n / maxN) * plotW;
                                    var valY = py + ph - ((partial - yMin) / (yMax - yMin)) * ph;
                                    valY = Math.max(py, Math.min(py + ph, valY));

                                    ctx.fillStyle = engine.colors.blue;
                                    ctx.beginPath();
                                    ctx.arc(px, valY, 3, 0, Math.PI * 2);
                                    ctx.fill();

                                    if (n > 1) {
                                        var prevPx = plotX + ((n - 1) / maxN) * plotW;
                                        var prevPy = py + ph - ((prevPartial - yMin) / (yMax - yMin)) * ph;
                                        prevPy = Math.max(py, Math.min(py + ph, prevPy));
                                        ctx.strokeStyle = engine.colors.blue;
                                        ctx.lineWidth = 1.5;
                                        ctx.beginPath();
                                        ctx.moveTo(prevPx, prevPy);
                                        ctx.lineTo(px, valY);
                                        ctx.stroke();
                                    }

                                    prevPartial = partial;
                                }

                                if (panel === 0) {
                                    ctx.fillStyle = engine.colors.text;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'left';
                                    ctx.fillText('sum|a_n| = ' + sumNorms.toFixed(4) + ' (finite)', plotX + 5, py + ph - 5);
                                } else {
                                    ctx.fillStyle = engine.colors.text;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'left';
                                    ctx.fillText('sum|a_n| = ' + sumNorms.toFixed(2) + ' (diverges!)', plotX + 5, py + ph - 5);
                                }
                            }

                            ctx.fillStyle = engine.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('n = ' + N + ' / ' + maxN, 280, 370);
                        }

                        engine.animate(function(t) {
                            if (playing && animN < maxN + 2) {
                                animN += 0.06;
                            }
                            draw();
                        });

                        draw();
                        return engine;
                    }
                },
                {
                    id: 'viz-neumann-series',
                    title: 'Neumann Series Convergence',
                    description: 'Visualize the partial sums S_N = I + T + T^2 + ... + T^N of the Neumann series converging to (I - T)^{-1} for a 2x2 matrix T with ||T|| < 1.',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 380, scale: 60, originX: 280, originY: 190 });

                        var tScale = 0.4;
                        var angle = 0.5;
                        var maxN = 15;
                        var animN = 0;
                        var playing = true;

                        VizEngine.createSlider(controls, '||T||', 0.1, 0.9, tScale, 0.05, function(v) { tScale = v; animN = 0; });
                        VizEngine.createSlider(controls, 'angle', 0, 6.28, angle, 0.1, function(v) { angle = v; animN = 0; });
                        VizEngine.createButton(controls, 'Reset', function() { animN = 0; });
                        VizEngine.createButton(controls, 'Play/Pause', function() { playing = !playing; });

                        function matMul(A, B) {
                            return [
                                [A[0][0] * B[0][0] + A[0][1] * B[1][0], A[0][0] * B[0][1] + A[0][1] * B[1][1]],
                                [A[1][0] * B[0][0] + A[1][1] * B[1][0], A[1][0] * B[0][1] + A[1][1] * B[1][1]]
                            ];
                        }

                        function matAdd(A, B) {
                            return [
                                [A[0][0] + B[0][0], A[0][1] + B[0][1]],
                                [A[1][0] + B[1][0], A[1][1] + B[1][1]]
                            ];
                        }

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            var T = [
                                [tScale * Math.cos(angle), -tScale * Math.sin(angle)],
                                [tScale * Math.sin(angle), tScale * Math.cos(angle)]
                            ];

                            var steps = Math.min(maxN, Math.max(0, Math.floor(animN)));

                            var S = [[1, 0], [0, 1]];
                            var Tn = [[1, 0], [0, 1]];

                            for (var n = 1; n <= steps; n++) {
                                Tn = matMul(Tn, T);
                                S = matAdd(S, Tn);
                            }

                            var testPt = [2, 1];

                            var detImT = (1 - T[0][0]) * (1 - T[1][1]) - (-T[0][1]) * (-T[1][0]);
                            var invImT = [
                                [(1 - T[1][1]) / detImT, T[0][1] / detImT],
                                [T[1][0] / detImT, (1 - T[0][0]) / detImT]
                            ];
                            var exact = [invImT[0][0] * testPt[0] + invImT[0][1] * testPt[1],
                                         invImT[1][0] * testPt[0] + invImT[1][1] * testPt[1]];

                            var approx = [S[0][0] * testPt[0] + S[0][1] * testPt[1],
                                          S[1][0] * testPt[0] + S[1][1] * testPt[1]];

                            engine.drawVector(0, 0, testPt[0], testPt[1], engine.colors.text, 'v', 1.5);
                            engine.drawVector(0, 0, exact[0], exact[1], engine.colors.green, '(I-T)^{-1}v', 2);
                            engine.drawVector(0, 0, approx[0], approx[1], engine.colors.orange, 'S_N v', 2);

                            engine.drawPoint(exact[0], exact[1], engine.colors.green, '', 5);
                            engine.drawPoint(approx[0], approx[1], engine.colors.orange, '', 5);

                            var err = Math.sqrt((approx[0] - exact[0]) * (approx[0] - exact[0]) +
                                               (approx[1] - exact[1]) * (approx[1] - exact[1]));

                            engine.screenText('Neumann series: S_N = I + T + T^2 + ... + T^N', 280, 15, engine.colors.white, 13);
                            engine.screenText('||T|| = ' + tScale.toFixed(2) + ', N = ' + steps + ', error = ' + err.toFixed(6), 280, 35, engine.colors.text, 11);
                            engine.screenText('Green = exact (I-T)^{-1}v, Orange = S_N v', 280, 365, engine.colors.text, 11);
                        }

                        engine.animate(function(t) {
                            if (playing && animN < maxN + 1) {
                                animN += 0.04;
                            }
                            draw();
                        });

                        draw();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that absolute convergence implies convergence in any Banach space directly (without using the characterization theorem).',
                    hint: 'Show the partial sums form a Cauchy sequence using the triangle inequality and the tail of the convergent real series.',
                    solution: 'Suppose sum ||x_n|| < infinity. Let S_N = sum_{n=1}^N x_n. For M > N: ||S_M - S_N|| = ||sum_{n=N+1}^M x_n|| <= sum_{n=N+1}^M ||x_n||. Since sum ||x_n|| converges (it is a convergent series of non-negative reals), its tail goes to 0: sum_{n=N+1}^M ||x_n|| -> 0 as N,M -> infinity. So (S_N) is Cauchy. Since X is Banach (complete), S_N converges.'
                },
                {
                    question: 'Let T be a bounded operator on a Banach space X with ||T|| < 1. Prove the Neumann series estimate: ||(I - T)^{-1}|| <= 1/(1 - ||T||). Then show that (I - T)^{-1} depends continuously on T.',
                    hint: 'For the estimate, use ||sum T^n|| <= sum ||T^n|| <= sum ||T||^n. For continuity, compare (I - T)^{-1} - (I - S)^{-1} using the resolvent identity.',
                    solution: '||(I-T)^{-1}|| = ||sum_{n=0}^inf T^n|| <= sum ||T^n|| <= sum ||T||^n = 1/(1-||T||). For continuity: (I-T)^{-1} - (I-S)^{-1} = (I-T)^{-1}[(I-S) - (I-T)](I-S)^{-1} = (I-T)^{-1}(T-S)(I-S)^{-1}. So ||(I-T)^{-1} - (I-S)^{-1}|| <= ||(I-T)^{-1}|| ||T-S|| ||(I-S)^{-1}|| <= ||T-S|| / [(1-||T||)(1-||S||)]. As S -> T this goes to 0, proving continuity.'
                },
                {
                    question: 'Let A be an invertible bounded operator and B a bounded operator with ||B|| < 1/||A^{-1}||. Prove that A + B is invertible and give a bound on ||(A + B)^{-1}||.',
                    hint: 'Write A + B = A(I + A^{-1}B) and apply the Neumann series to I + A^{-1}B = I - (-A^{-1}B).',
                    solution: 'A + B = A(I + A^{-1}B). Since ||A^{-1}B|| <= ||A^{-1}|| ||B|| < 1, the operator -A^{-1}B has norm < 1. By the Neumann series, I + A^{-1}B = I - (-A^{-1}B) is invertible. So A + B = A(I + A^{-1}B) is invertible (product of invertibles). Moreover ||(A+B)^{-1}|| = ||(I + A^{-1}B)^{-1} A^{-1}|| <= ||A^{-1}|| / (1 - ||A^{-1}|| ||B||).'
                }
            ]
        },

        // ============================================================
        // Section 5: Schauder Bases and Separability
        // ============================================================
        {
            id: 'schauder-bases-separability',
            title: 'Schauder Bases and Separability',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Beyond Hamel Bases.</strong> In Chapter 1, we saw that Hamel bases are unwieldy in infinite dimensions. Banach spaces offer a topological alternative: Schauder bases, where every element is an infinite (convergent) series. This connects the algebraic notion of basis to the analytic notion of series expansion.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define Schauder bases, prove basic properties, and introduce separability. We show that having a Schauder basis implies separability, and examine the long-standing question of whether every separable Banach space has a Schauder basis (Enflo's negative answer).</p>
</div>

<div class="bridge-block chapter-closing">
<p><strong>Looking Ahead.</strong> Banach spaces give us completeness, but they lack the geometric richness of angles and orthogonality. In Chapter 3, we introduce inner product spaces and Hilbert spaces, where the notion of "perpendicularity" opens the door to projection, decomposition, and Fourier analysis in infinite dimensions.</p>
</div>

<h2>2.5 Schauder Bases and Separability</h2>

<p>In finite-dimensional spaces, every vector is a <em>finite</em> linear combination of basis vectors. In infinite dimensions, we need to extend this notion to allow <em>infinite</em> series representations. This leads to the distinction between algebraic (Hamel) bases and topological (Schauder) bases.</p>

<div class="env-block definition">
<strong>Definition 2.5.1 (Hamel Basis).</strong> A <em>Hamel basis</em> (or algebraic basis) of a vector space \\(X\\) is a set \\(B \\subseteq X\\) such that every \\(x \\in X\\) can be written uniquely as a <strong>finite</strong> linear combination of elements of \\(B\\).
</div>

<div class="env-block theorem">
<strong>Proposition 2.5.2.</strong> Every Hamel basis of an infinite-dimensional Banach space is uncountable.
</div>

<div class="env-block proof">
<strong>Proof.</strong> Suppose for contradiction that \\(\\{e_1, e_2, \\ldots\\}\\) is a countable Hamel basis. Let \\(X_n = \\operatorname{span}\\{e_1, \\ldots, e_n\\}\\). Each \\(X_n\\) is finite-dimensional, hence closed, and has empty interior (since \\(X\\) is infinite-dimensional). We have \\(X = \\bigcup_{n=1}^\\infty X_n\\), contradicting the Baire Category Theorem (since \\(X\\) is a complete metric space and cannot be a countable union of nowhere dense sets). \\(\\square\\)
</div>

<p>This makes Hamel bases impractical for infinite-dimensional analysis. Instead, we use Schauder bases.</p>

<div class="env-block definition">
<strong>Definition 2.5.3 (Schauder Basis).</strong> A sequence \\((e_n)_{n=1}^\\infty\\) in a Banach space \\(X\\) is a <em>Schauder basis</em> if for every \\(x \\in X\\) there exists a unique sequence of scalars \\((\\alpha_n)\\) such that
\\[
x = \\sum_{n=1}^\\infty \\alpha_n e_n,
\\]
where the series converges in the norm of \\(X\\).
</div>

<div class="env-block example">
<strong>Example 2.5.4.</strong> The standard unit vectors \\(e_n = (0, \\ldots, 0, 1, 0, \\ldots)\\) form a Schauder basis for \\(\\ell^p\\) (\\(1 \\leq p < \\infty\\)) and for \\(c_0\\), but <strong>not</strong> for \\(\\ell^\\infty\\).
</div>

<div class="env-block example">
<strong>Example 2.5.5.</strong> The trigonometric system \\(\\{e^{inx}\\}_{n \\in \\mathbb{Z}}\\) forms a Schauder basis for \\(L^p(-\\pi, \\pi)\\) when \\(1 < p < \\infty\\) (by the M. Riesz theorem), but not for \\(p = 1\\) or \\(p = \\infty\\).
</div>

<div class="env-block definition">
<strong>Definition 2.5.6 (Separable Space).</strong> A topological space is <em>separable</em> if it contains a countable dense subset.
</div>

<div class="env-block theorem">
<strong>Proposition 2.5.7.</strong> If a Banach space has a Schauder basis, then it is separable.
</div>

<div class="env-block proof">
<strong>Proof.</strong> Let \\((e_n)\\) be a Schauder basis. The set \\(D = \\{\\sum_{n=1}^N r_n e_n : N \\in \\mathbb{N}, r_n \\in \\mathbb{Q}\\}\\) is countable and dense in \\(X\\). \\(\\square\\)
</div>

<div class="env-block theorem">
<strong>Theorem 2.5.8.</strong> The spaces \\(\\ell^p\\) (\\(1 \\leq p < \\infty\\)), \\(c_0\\), \\(C[a,b]\\), and \\(L^p(\\Omega)\\) (\\(1 \\leq p < \\infty\\)) are separable. The space \\(\\ell^\\infty\\) is <strong>not</strong> separable.
</div>

<div class="env-block proof">
<strong>Proof that \\(\\ell^\\infty\\) is not separable.</strong> For each subset \\(A \\subseteq \\mathbb{N}\\), define \\(\\mathbf{1}_A \\in \\ell^\\infty\\) by \\((\\mathbf{1}_A)_n = 1\\) if \\(n \\in A\\), \\(0\\) otherwise. If \\(A \\neq B\\), then \\(\\|\\mathbf{1}_A - \\mathbf{1}_B\\|_\\infty = 1\\). The open balls \\(B(\\mathbf{1}_A, 1/3)\\) are pairwise disjoint and there are uncountably many (\\(2^{\\aleph_0}\\) subsets of \\(\\mathbb{N}\\)). Any dense set must contain a point in each ball, hence must be uncountable. \\(\\square\\)
</div>

<div class="env-block theorem">
<strong>Remark 2.5.9 (Enflo's Theorem).</strong> Not every separable Banach space has a Schauder basis. Per Enflo (1973) constructed the first example of a separable Banach space without a Schauder basis, resolving a long-standing problem of Banach.
</div>

<div class="viz-placeholder" data-viz="viz-schauder-expansion">
    Visualization: Schauder basis expansion of a vector in l^2, showing how partial sums converge.
</div>

<div class="viz-placeholder" data-viz="viz-separability">
    Visualization: Separability vs. non-separability, illustrating countable dense subsets.
</div>
`,
            visualizations: [
                {
                    id: 'viz-schauder-expansion',
                    title: 'Schauder Basis Expansion',
                    description: 'Visualize the partial sum expansion x = sum alpha_n e_n converging to a target vector in l^2, showing each successive approximation.',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 380, scale: 40, originX: 60, originY: 340 });

                        var numCoeffs = 12;
                        var coeffs = [];
                        for (var i = 0; i < 20; i++) {
                            coeffs.push(2 / ((i + 1) * (i + 1)));
                            if (i % 2 === 1) coeffs[i] = -coeffs[i];
                        }
                        var animN = 0;
                        var playing = true;

                        VizEngine.createSlider(controls, 'Components', 3, 20, numCoeffs, 1, function(v) { numCoeffs = Math.round(v); });
                        VizEngine.createButton(controls, 'Reset', function() { animN = 0; });
                        VizEngine.createButton(controls, 'Play/Pause', function() { playing = !playing; });

                        function draw() {
                            engine.clear();
                            var ctx = engine.ctx;

                            var N = Math.min(numCoeffs, Math.max(0, Math.floor(animN)));

                            var plotX = 60;
                            var plotW = 460;
                            var plotY = 40;
                            var plotH = 140;

                            ctx.fillStyle = engine.colors.white;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Coefficients alpha_n', plotX + plotW / 2, plotY - 8);

                            ctx.strokeStyle = engine.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(plotX, plotY + plotH / 2);
                            ctx.lineTo(plotX + plotW, plotY + plotH / 2);
                            ctx.stroke();

                            for (var i = 0; i < numCoeffs; i++) {
                                var barX = plotX + (i + 0.5) / numCoeffs * plotW;
                                var barW2 = 0.4 / numCoeffs * plotW;
                                var barH = (coeffs[i] / 2.5) * (plotH / 2);
                                var c = i < N ? engine.colors.blue : engine.colors.text + '44';

                                ctx.fillStyle = c;
                                ctx.fillRect(barX - barW2, plotY + plotH / 2, 2 * barW2, -barH);
                            }

                            var errPlotY = 210;
                            var errPlotH = 120;

                            ctx.fillStyle = engine.colors.white;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('||x - S_N||  (error vs. number of terms)', plotX + plotW / 2, errPlotY - 8);

                            ctx.strokeStyle = engine.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(plotX, errPlotY);
                            ctx.lineTo(plotX, errPlotY + errPlotH);
                            ctx.lineTo(plotX + plotW, errPlotY + errPlotH);
                            ctx.stroke();

                            var fullNorm2 = 0;
                            for (var j = 0; j < numCoeffs; j++) fullNorm2 += coeffs[j] * coeffs[j];

                            var prevPx = 0;
                            var prevPy = 0;
                            for (var k = 0; k <= numCoeffs; k++) {
                                var partialNorm2 = 0;
                                for (var j2 = 0; j2 < k; j2++) partialNorm2 += coeffs[j2] * coeffs[j2];
                                var err = Math.sqrt(Math.max(0, fullNorm2 - partialNorm2));

                                var px = plotX + (k / numCoeffs) * plotW;
                                var py = errPlotY + errPlotH - (err / 2.5) * errPlotH;
                                py = Math.max(errPlotY, Math.min(errPlotY + errPlotH, py));

                                var col = k <= N ? engine.colors.orange : engine.colors.text + '44';
                                ctx.fillStyle = col;
                                ctx.beginPath();
                                ctx.arc(px, py, 3, 0, Math.PI * 2);
                                ctx.fill();

                                if (k > 0) {
                                    ctx.strokeStyle = col;
                                    ctx.lineWidth = 1.5;
                                    ctx.beginPath();
                                    ctx.moveTo(prevPx, prevPy);
                                    ctx.lineTo(px, py);
                                    ctx.stroke();
                                }

                                prevPx = px;
                                prevPy = py;
                            }

                            ctx.fillStyle = engine.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('N = ' + N + ' terms included', 280, 365);
                        }

                        engine.animate(function(t) {
                            if (playing && animN < numCoeffs + 2) {
                                animN += 0.04;
                            }
                            draw();
                        });

                        draw();
                        return engine;
                    }
                },
                {
                    id: 'viz-separability',
                    title: 'Separable vs. Non-Separable Spaces',
                    description: 'Illustrate why l^2 is separable (rational finite sequences are dense) while l^infinity is not (uncountably many well-separated points).',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { width: 560, height: 380, scale: 40, originX: 280, originY: 190 });

                        var showSep = true;
                        var numDensePoints = 15;

                        VizEngine.createButton(controls, 'Separable (l^2)', function() { showSep = true; draw(); });
                        VizEngine.createButton(controls, 'Non-Separable (l^inf)', function() { showSep = false; draw(); });
                        VizEngine.createSlider(controls, 'Dense points', 5, 40, numDensePoints, 1, function(v) { numDensePoints = Math.round(v); draw(); });

                        function draw() {
                            engine.clear();
                            var ctx = engine.ctx;

                            if (showSep) {
                                ctx.fillStyle = engine.colors.white;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('l^2 is Separable', 280, 25);
                                ctx.fillStyle = engine.colors.text;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('Rational finite sequences (blue) are dense', 280, 45);

                                var cx = 280;
                                var cy = 200;
                                var radius = 140;

                                ctx.strokeStyle = engine.colors.axis;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.arc(cx, cy, radius, 0, Math.PI * 2);
                                ctx.stroke();
                                ctx.fillStyle = engine.colors.blue + '11';
                                ctx.fill();

                                var seed = 42;
                                function pseudoRandom() {
                                    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
                                    return seed / 0x7fffffff;
                                }

                                seed = 42;
                                for (var i = 0; i < numDensePoints; i++) {
                                    var angle = pseudoRandom() * Math.PI * 2;
                                    var r = pseudoRandom() * radius * 0.9;
                                    var px = cx + r * Math.cos(angle);
                                    var py = cy + r * Math.sin(angle);
                                    ctx.fillStyle = engine.colors.blue;
                                    ctx.beginPath();
                                    ctx.arc(px, py, 3, 0, Math.PI * 2);
                                    ctx.fill();
                                }

                                seed = 137;
                                var targetX = cx + 60;
                                var targetY = cy - 30;
                                ctx.fillStyle = engine.colors.red;
                                ctx.beginPath();
                                ctx.arc(targetX, targetY, 5, 0, Math.PI * 2);
                                ctx.fill();
                                ctx.fillStyle = engine.colors.red;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('any x in l^2', targetX + 8, targetY - 2);

                                ctx.strokeStyle = engine.colors.green + '44';
                                ctx.lineWidth = 1;
                                ctx.setLineDash([3, 3]);
                                ctx.beginPath();
                                ctx.arc(targetX, targetY, 25, 0, Math.PI * 2);
                                ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.fillStyle = engine.colors.green;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.fillText('B(x, eps) always contains dense points', targetX + 30, targetY + 10);
                            } else {
                                ctx.fillStyle = engine.colors.white;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('l^inf is NOT Separable', 280, 25);
                                ctx.fillStyle = engine.colors.text;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('Uncountably many 0-1 sequences, all distance 1 apart', 280, 45);

                                var sequences = [];
                                var bits = 5;
                                var count = Math.min(Math.pow(2, bits), 32);
                                for (var i = 0; i < count; i++) {
                                    var seq = [];
                                    for (var b = 0; b < bits; b++) {
                                        seq.push((i >> b) & 1);
                                    }
                                    sequences.push(seq);
                                }

                                var startY = 70;
                                var rowH = Math.min(9, (300) / count);
                                var colW = 30;
                                var startX = 280 - (bits * colW) / 2;

                                ctx.fillStyle = engine.colors.text;
                                ctx.font = '10px monospace';
                                ctx.textAlign = 'center';
                                for (var b = 0; b < bits; b++) {
                                    ctx.fillText('n=' + (b + 1), startX + b * colW + colW / 2, startY);
                                }
                                ctx.fillText('...', startX + bits * colW + 15, startY);

                                for (var i = 0; i < Math.min(count, 28); i++) {
                                    var y = startY + 15 + i * rowH;
                                    for (var b = 0; b < bits; b++) {
                                        var val = sequences[i][b];
                                        var bx = startX + b * colW + colW / 2;
                                        ctx.fillStyle = val ? engine.colors.orange : engine.colors.blue;
                                        ctx.fillRect(bx - 8, y - 3, 16, 6);
                                        ctx.fillStyle = engine.colors.white;
                                        ctx.font = '8px monospace';
                                        ctx.textAlign = 'center';
                                        ctx.fillText(val, bx, y + 3);
                                    }
                                }

                                ctx.fillStyle = engine.colors.red;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('||1_A - 1_B||_inf = 1 for A != B', 280, 340);
                                ctx.fillStyle = engine.colors.text;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.fillText('B(1_A, 1/3) are disjoint -> no countable dense set', 280, 360);
                            }
                        }

                        draw();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that every Hamel basis of an infinite-dimensional Banach space must be uncountable. (You may use the Baire Category Theorem.)',
                    hint: 'Express X as a countable union of finite-dimensional subspaces span{e_1,...,e_n}. Each is closed and has empty interior.',
                    solution: 'Suppose {e_1, e_2, ...} is a countable Hamel basis for the Banach space X. Let X_n = span{e_1,...,e_n}. Each X_n is finite-dimensional, hence closed. Each X_n has empty interior: if X_n contained an open ball B(x, r), then every element of X within distance r of x would be in X_n, but since X is infinite-dimensional, this is impossible (take e_{n+1} and scale appropriately). So X = union X_n is a countable union of closed sets with empty interior. By Baire Category Theorem, a complete metric space cannot be such a union. Contradiction.'
                },
                {
                    question: 'Show that the standard unit vectors e_n form a Schauder basis for l^p (1 <= p < infinity) but NOT for l^infinity.',
                    hint: 'For l^p: show that x - sum_{k=1}^N x_k e_k has l^p norm tending to 0. For l^infinity: find a bounded sequence that cannot be approximated by finite sums.',
                    solution: 'For l^p (p < inf): let x = (x_1, x_2, ...) in l^p. Then ||x - sum_{k=1}^N x_k e_k||_p^p = sum_{k=N+1}^inf |x_k|^p -> 0 as N -> inf (tail of convergent series). So x = sum x_k e_k in l^p norm. Uniqueness: if x = sum a_k e_k, evaluating the k-th coordinate gives a_k = x_k. For l^inf: take x = (1,1,1,...). Then ||x - sum_{k=1}^N x_k e_k||_inf = ||(0,...,0,1,1,...)||_inf = 1 for all N. The partial sums do not converge to x. So (e_n) is not a Schauder basis for l^inf.'
                },
                {
                    question: 'Prove that l^infinity is not separable by showing it contains an uncountable set of pairwise distance-1 elements.',
                    hint: 'For each subset A of N, define the indicator sequence 1_A. Show ||1_A - 1_B||_inf = 1 for A != B, and use the fact that there are uncountably many subsets of N.',
                    solution: 'For A subset of N, define 1_A in l^inf by (1_A)_n = 1 if n in A, 0 otherwise. If A != B, there exists n in A \\ B (or B \\ A), so |(1_A)_n - (1_B)_n| = 1, hence ||1_A - 1_B||_inf >= 1. Since |1_A - 1_B| only takes values 0 and 1, ||1_A - 1_B||_inf = 1. The balls B(1_A, 1/3) for distinct A are pairwise disjoint. Any dense set D must have at least one point in each such ball, so |D| >= |P(N)| = 2^{aleph_0}, which is uncountable. Hence l^inf is not separable.'
                }
            ]
        }
    ]
});
