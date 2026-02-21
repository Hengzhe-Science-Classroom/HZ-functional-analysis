window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch10',
    number: 10,
    title: 'Dual Spaces',
    subtitle: 'The space of continuous linear functionals',
    sections: [
        // ============================================================
        // SECTION 1: The Dual Space X*
        // ============================================================
        {
            id: 'sec-dual-space',
            title: 'The Dual Space X*',
            content: `
<p>Throughout functional analysis, understanding a normed space \\(X\\) often requires understanding the <em>continuous linear functionals</em> on \\(X\\). The collection of all such functionals forms a space with its own rich structure.</p>

<div class="env-block definition">
<strong>Definition 10.1 (Dual Space).</strong> Let \\((X, \\|\\cdot\\|)\\) be a normed space over the scalar field \\(\\mathbb{K}\\) (where \\(\\mathbb{K} = \\mathbb{R}\\) or \\(\\mathbb{C}\\)). The <em>dual space</em> of \\(X\\), denoted \\(X^*\\), is the space of all continuous (bounded) linear functionals on \\(X\\):
\\[X^* = \\mathcal{B}(X, \\mathbb{K}) = \\{f : X \\to \\mathbb{K} \\mid f \\text{ is linear and continuous}\\}.\\]
For \\(f \\in X^*\\), the <em>operator norm</em> is
\\[\\|f\\|_{X^*} = \\sup_{\\|x\\| \\leq 1} |f(x)| = \\sup_{\\|x\\| = 1} |f(x)| = \\sup_{x \\neq 0} \\frac{|f(x)|}{\\|x\\|}.\\]
</div>

<p>Recall from Chapter 5 that a linear functional \\(f: X \\to \\mathbb{K}\\) is continuous if and only if it is bounded, i.e., \\(\\|f\\| < \\infty\\). The dual space is simply the special case \\(\\mathcal{B}(X, Y)\\) where \\(Y = \\mathbb{K}\\).</p>

<div class="env-block theorem">
<strong>Theorem 10.2.</strong> For any normed space \\(X\\), the dual space \\(X^*\\) is a Banach space under the operator norm, regardless of whether \\(X\\) itself is complete.
</div>

<div class="env-block proof">
<strong>Proof.</strong> Since \\(\\mathbb{K}\\) is complete (both \\(\\mathbb{R}\\) and \\(\\mathbb{C}\\) are), this follows from the general result that \\(\\mathcal{B}(X, Y)\\) is a Banach space whenever \\(Y\\) is a Banach space (Theorem 5.X). Let \\((f_n)\\) be Cauchy in \\(X^*\\). For each \\(x \\in X\\), \\(|f_n(x) - f_m(x)| \\leq \\|f_n - f_m\\| \\cdot \\|x\\|\\), so \\((f_n(x))\\) is Cauchy in \\(\\mathbb{K}\\). Define \\(f(x) = \\lim_{n \\to \\infty} f_n(x)\\). Then \\(f\\) is linear, and passing to the limit in \\(|f_n(x)| \\leq (\\sup_n \\|f_n\\|) \\|x\\|\\) shows \\(f\\) is bounded. Finally, \\(\\|f_n - f\\| \\to 0\\) follows from the Cauchy property. \\(\\square\\)
</div>

<div class="env-block example">
<strong>Example 10.3 (Dual of \\(\\mathbb{R}^n\\)).</strong> Consider \\(\\mathbb{R}^n\\) with the Euclidean norm. Every linear functional \\(f: \\mathbb{R}^n \\to \\mathbb{R}\\) has the form
\\[f(x) = \\sum_{i=1}^n a_i x_i = \\langle a, x \\rangle\\]
for a unique \\(a = (a_1, \\ldots, a_n) \\in \\mathbb{R}^n\\). The Cauchy&ndash;Schwarz inequality gives \\(\\|f\\| = \\|a\\|_2\\). Thus \\((\\mathbb{R}^n)^* \\cong \\mathbb{R}^n\\) isometrically.
</div>

<div class="env-block example">
<strong>Example 10.4 (Dual of \\(C[0,1]\\)).</strong> For \\(C[0,1]\\) with the supremum norm, consider the evaluation functional \\(\\delta_t : C[0,1] \\to \\mathbb{R}\\) defined by \\(\\delta_t(f) = f(t)\\) for a fixed \\(t \\in [0,1]\\). Then \\(|\\delta_t(f)| \\leq \\|f\\|_\\infty\\) so \\(\\|\\delta_t\\| \\leq 1\\), and equality holds by testing on the constant function \\(f \\equiv 1\\). Similarly, integration \\(\\Lambda(f) = \\int_0^1 f(t)\\,dt\\) defines an element of \\(C[0,1]^*\\) with \\(\\|\\Lambda\\| = 1\\).
</div>

<div class="env-block remark">
<strong>Remark 10.5 (Kernel of a functional).</strong> For any nonzero \\(f \\in X^*\\), the kernel \\(\\ker f = \\{x \\in X : f(x) = 0\\}\\) is a closed subspace of codimension 1 (a <em>hyperplane</em>). Conversely, every closed hyperplane in \\(X\\) is the kernel of some \\(f \\in X^*\\). The level sets \\(\\{x : f(x) = c\\}\\) for \\(c \\in \\mathbb{K}\\) are parallel translates of this hyperplane.
</div>

<div class="viz-placeholder" data-viz="viz-functional-hyperplane">Functional as Hyperplane</div>
<div class="viz-placeholder" data-viz="viz-dual-unit-ball">Dual Unit Ball</div>
            `,
            visualizations: [
                {
                    id: 'viz-functional-hyperplane',
                    title: 'Functional as Hyperplane',
                    description: 'A linear functional f on R^2 defines level sets (lines) f(x)=c. Drag the normal vector a to change the functional f(x) = <a, x>.',
                    setup: function(body, controls) {
                        const engine = new VizEngine(body, { width: 560, height: 380, scale: 40 });

                        var ax = 1.0, ay = 1.5;
                        var drag = engine.addDraggable('a', ax, ay, engine.colors.blue, 8, function(x, y) {
                            ax = x; ay = y;
                        });

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            var norm = Math.sqrt(ax * ax + ay * ay);
                            if (norm < 0.01) { engine.drawDraggables(); engine.animationId = requestAnimationFrame(draw); return; }

                            // Draw level sets f(x) = c for c = -3, -2, -1, 0, 1, 2, 3
                            var colors = ['#f8514933', '#f8514955', '#f8514988', engine.colors.teal, '#3fb95088', '#3fb95055', '#3fb95033'];
                            var levels = [-3, -2, -1, 0, 1, 2, 3];
                            for (var i = 0; i < levels.length; i++) {
                                var c = levels[i];
                                // ax*x + ay*y = c => direction perpendicular to (ax, ay)
                                var px = -ay / norm;
                                var py = ax / norm;
                                var cx = ax * c / (norm * norm);
                                var cy = ay * c / (norm * norm);
                                engine.drawLine(cx - px * 10, cy - py * 10, cx + px * 10, cy + py * 10, i === 3 ? engine.colors.teal : colors[i], i === 3 ? 2 : 1, i !== 3);
                                if (Math.abs(c) <= 2) {
                                    engine.drawText('c=' + c, cx + px * 4.5, cy + py * 4.5, engine.colors.text, 11);
                                }
                            }

                            // Draw the functional direction vector
                            engine.drawVector(0, 0, ax, ay, engine.colors.blue, 'a');

                            // Draw unit ball
                            engine.drawCircle(0, 0, 1, null, engine.colors.white + '44', 1);

                            // Mark the point where f achieves its norm on the unit sphere
                            var ux = ax / norm;
                            var uy = ay / norm;
                            engine.drawPoint(ux, uy, engine.colors.orange, 'x*', 5);

                            engine.screenText('f(x) = a\u2081x\u2081 + a\u2082x\u2082', 10, 18, engine.colors.white, 13, 'left');
                            engine.screenText('||f|| = ||a|| = ' + norm.toFixed(2), 10, 36, engine.colors.yellow, 12, 'left');

                            engine.drawDraggables();
                        }

                        engine.animate(draw);
                        return engine;
                    }
                },
                {
                    id: 'viz-dual-unit-ball',
                    title: 'Dual Unit Ball in R^2',
                    description: 'Compare the unit ball B_X in a normed space X = R^2 with the dual unit ball B_{X*}. The dual ball depends on the choice of norm on X.',
                    setup: function(body, controls) {
                        const engine = new VizEngine(body, { width: 560, height: 380, scale: 50 });

                        var pVal = 2;
                        VizEngine.createSlider(controls, 'p', 1, 10, 2, 0.1, function(v) { pVal = v; });

                        function lpNorm(x, y, p) {
                            if (p >= 20) return Math.max(Math.abs(x), Math.abs(y));
                            return Math.pow(Math.pow(Math.abs(x), p) + Math.pow(Math.abs(y), p), 1.0 / p);
                        }

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            var p = pVal;
                            var q = (p <= 1.01) ? 100 : p / (p - 1);
                            if (q > 100) q = 100;

                            // Draw primal unit ball
                            engine.drawCurve(function(t) {
                                var x = Math.cos(t);
                                var y = Math.sin(t);
                                var r = lpNorm(x, y, p);
                                return [x / r, y / r];
                            }, 0, 2 * Math.PI, 200, engine.colors.blue, 2);

                            // Draw dual unit ball
                            engine.drawCurve(function(t) {
                                var x = Math.cos(t);
                                var y = Math.sin(t);
                                var r = lpNorm(x, y, q);
                                return [x / r, y / r];
                            }, 0, 2 * Math.PI, 200, engine.colors.orange, 2);

                            engine.screenText('B_X  (l^p, p=' + p.toFixed(1) + ')', 10, 18, engine.colors.blue, 13, 'left');
                            engine.screenText('B_{X*} (l^q, q=' + q.toFixed(1) + ')', 10, 36, engine.colors.orange, 13, 'left');
                            engine.screenText('1/p + 1/q = 1', 10, 54, engine.colors.text, 12, 'left');
                        }

                        engine.animate(draw);
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X = \\mathbb{R}^3\\) with the \\(\\ell^1\\)-norm \\(\\|x\\|_1 = |x_1| + |x_2| + |x_3|\\). Determine \\(X^*\\) and find \\(\\|f\\|\\) for the functional \\(f(x) = 2x_1 - x_2 + 3x_3\\).',
                    hint: 'The dual of \\(\\ell^1_n\\) is \\(\\ell^\\infty_n\\). The dual norm is \\(\\|f\\| = \\max_i |a_i|\\).',
                    solution: 'The dual of \\((\\mathbb{R}^3, \\|\\cdot\\|_1)\\) is isometrically isomorphic to \\((\\mathbb{R}^3, \\|\\cdot\\|_\\infty)\\). Every \\(f \\in X^*\\) has the form \\(f(x) = \\sum a_i x_i\\) and \\(\\|f\\| = \\max(|a_1|, |a_2|, |a_3|)\\). For \\(f(x) = 2x_1 - x_2 + 3x_3\\), we get \\(\\|f\\| = \\max(2, 1, 3) = 3\\). The supremum is attained at \\(x = e_3 = (0,0,1)\\).'
                },
                {
                    question: 'Show that for a normed space \\(X\\) and \\(f \\in X^*\\), \\(\\ker f\\) is closed. Conversely, show that if \\(f: X \\to \\mathbb{K}\\) is linear and \\(\\ker f\\) is closed, then \\(f\\) is continuous.',
                    hint: 'For the converse, if \\(f\\) is not continuous, find a sequence \\(x_n \\to 0\\) with \\(f(x_n) = 1\\).',
                    solution: 'If \\(f \\in X^*\\), then \\(\\ker f = f^{-1}(\\{0\\})\\) is closed as the preimage of a closed set under a continuous map. Conversely, suppose \\(f\\) is linear and \\(\\ker f\\) is closed. If \\(f\\) is not continuous, there exist \\(x_n\\) with \\(\\|x_n\\| = 1\\) and \\(|f(x_n)| \\geq n\\). Let \\(y_n = x_n / f(x_n)\\). Then \\(\\|y_n\\| \\leq 1/n \\to 0\\) and \\(f(y_n) = 1\\). Pick any \\(x_0\\) with \\(f(x_0) = 1\\). Then \\(x_0 - y_n \\in \\ker f\\) and \\(x_0 - y_n \\to x_0\\). Since \\(\\ker f\\) is closed, \\(x_0 \\in \\ker f\\), so \\(f(x_0) = 0\\), contradicting \\(f(x_0) = 1\\).'
                },
                {
                    question: 'Let \\(X = c_0\\) (sequences converging to 0) with the supremum norm. Define \\(f(x) = \\sum_{n=1}^\\infty x_n / 2^n\\). Show that \\(f \\in X^*\\) and compute \\(\\|f\\|\\).',
                    hint: 'Use the triangle inequality and the formula for geometric series. For the norm, find the supremum over \\(\\|x\\|_\\infty \\leq 1\\).',
                    solution: 'For \\(x \\in c_0\\) with \\(\\|x\\|_\\infty \\leq 1\\), we have \\(|f(x)| \\leq \\sum_{n=1}^\\infty |x_n|/2^n \\leq \\|x\\|_\\infty \\sum_{n=1}^\\infty 1/2^n = \\|x\\|_\\infty\\). So \\(f\\) is bounded with \\(\\|f\\| \\leq 1\\). Taking \\(x = (1, 1, 1, \\ldots, 1, 0, 0, \\ldots)\\) with \\(N\\) ones, \\(f(x) = \\sum_{n=1}^N 1/2^n = 1 - 1/2^N \\to 1\\). So \\(\\|f\\| = 1\\). Note that the supremum is not attained on \\(c_0\\) since the vector \\((1,1,1,\\ldots)\\) is not in \\(c_0\\). This functional corresponds to the element \\((1/2, 1/4, 1/8, \\ldots) \\in \\ell^1\\), consistent with \\(c_0^* \\cong \\ell^1\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Dual of l^p Spaces
        // ============================================================
        {
            id: 'sec-dual-lp',
            title: 'Dual of l^p Spaces',
            content: `
<p>The duality theory of \\(\\ell^p\\) spaces provides the most concrete and important class of examples. The key result identifies \\((\\ell^p)^*\\) with \\(\\ell^q\\) where \\(p\\) and \\(q\\) are conjugate exponents.</p>

<div class="env-block definition">
<strong>Definition 10.6 (Conjugate Exponents).</strong> We say \\(p\\) and \\(q\\) are <em>conjugate exponents</em> (or H&ouml;lder conjugates) if \\(1 \\leq p \\leq \\infty\\) and
\\[\\frac{1}{p} + \\frac{1}{q} = 1,\\]
with the conventions \\(1/\\infty = 0\\). Thus: \\(p = 1 \\Leftrightarrow q = \\infty\\), \\(p = 2 \\Leftrightarrow q = 2\\), and \\(q = p/(p-1)\\) for \\(1 < p < \\infty\\).
</div>

<div class="env-block theorem">
<strong>Theorem 10.7 (Riesz Representation for \\(\\ell^p\\)).</strong> Let \\(1 \\leq p < \\infty\\) and let \\(q\\) be the conjugate exponent. Then the map
\\[\\Phi: \\ell^q \\to (\\ell^p)^*, \\qquad \\Phi(y)(x) = \\sum_{n=1}^\\infty x_n y_n\\]
is an isometric isomorphism. That is, \\((\\ell^p)^* \\cong \\ell^q\\) isometrically.
</div>

<div class="env-block proof">
<strong>Proof sketch.</strong> The proof proceeds in three steps:

<p><strong>Step 1 (Well-defined and bounded):</strong> For \\(y \\in \\ell^q\\) and \\(x \\in \\ell^p\\), H&ouml;lder's inequality gives
\\[|\\Phi(y)(x)| = \\left|\\sum_{n=1}^\\infty x_n y_n\\right| \\leq \\|x\\|_p \\|y\\|_q,\\]
so \\(\\Phi(y) \\in (\\ell^p)^*\\) with \\(\\|\\Phi(y)\\| \\leq \\|y\\|_q\\).</p>

<p><strong>Step 2 (Isometry):</strong> To show \\(\\|\\Phi(y)\\| = \\|y\\|_q\\), define \\(x_n = |y_n|^{q-1} \\operatorname{sgn}(y_n)\\) (for \\(1 < p < \\infty\\)). Then \\(|x_n|^p = |y_n|^{(q-1)p} = |y_n|^q\\), so \\(\\|x\\|_p^p = \\|y\\|_q^q\\) and \\(\\Phi(y)(x) = \\sum |y_n|^q = \\|y\\|_q^q\\). Hence \\(\\|\\Phi(y)\\| \\geq \\|y\\|_q^q / \\|x\\|_p = \\|y\\|_q\\).</p>

<p><strong>Step 3 (Surjectivity):</strong> Given \\(f \\in (\\ell^p)^*\\), define \\(y_n = f(e_n)\\) where \\(e_n\\) is the \\(n\\)-th standard basis vector. One shows \\(y = (y_n) \\in \\ell^q\\) with \\(\\|y\\|_q \\leq \\|f\\|\\), and \\(\\Phi(y) = f\\) on the dense subspace of finitely supported sequences, hence everywhere by continuity. \\(\\square\\)</p>
</div>

<div class="env-block example">
<strong>Example 10.8.</strong> The important special cases:
<ul>
<li>\\((\\ell^1)^* \\cong \\ell^\\infty\\): functionals on \\(\\ell^1\\) correspond to bounded sequences.</li>
<li>\\((\\ell^2)^* \\cong \\ell^2\\): Hilbert space self-duality (Riesz&ndash;Fr&eacute;chet theorem).</li>
<li>\\((\\ell^\\infty)^* \\supsetneq \\ell^1\\): the dual of \\(\\ell^\\infty\\) is strictly larger than \\(\\ell^1\\) and contains elements not representable as series (related to finitely additive measures and Banach limits).</li>
</ul>
</div>

<div class="env-block remark">
<strong>Remark 10.9.</strong> The case \\(p = \\infty\\) is exceptional. While every \\(y \\in \\ell^1\\) defines a functional on \\(\\ell^\\infty\\) via \\(f(x) = \\sum x_n y_n\\), there exist functionals on \\(\\ell^\\infty\\) that cannot be represented this way. These exotic functionals, whose existence requires the axiom of choice (via Hahn&ndash;Banach), include Banach limits.
</div>

<div class="viz-placeholder" data-viz="viz-lp-pairing">l^p-l^q Pairing Visualization</div>
<div class="viz-placeholder" data-viz="viz-holder-equality">Holder Equality Cases</div>
            `,
            visualizations: [
                {
                    id: 'viz-lp-pairing',
                    title: 'l^p - l^q Pairing',
                    description: 'Visualize the duality pairing between a sequence x in l^p and y in l^q. Each bar shows x_n (blue) and y_n (orange), and the product x_n*y_n (green). The total pairing value is the sum of products.',
                    setup: function(body, controls) {
                        const engine = new VizEngine(body, { width: 560, height: 380, scale: 1, originX: 60, originY: 300 });

                        var N = 8;
                        var xseq = [0.8, -0.5, 0.3, 0.6, -0.2, 0.4, -0.1, 0.15];
                        var yseq = [0.4, 0.7, -0.6, 0.2, 0.5, -0.3, 0.8, -0.4];
                        var pVal = 2;

                        VizEngine.createSlider(controls, 'p', 1.1, 6, 2, 0.1, function(v) { pVal = v; });

                        function draw() {
                            engine.clear();
                            var ctx = engine.ctx;
                            var barW = 50;
                            var gap = 10;
                            var scaleY = 200;
                            var baseY = 300;
                            var startX = 60;

                            // Axis
                            ctx.strokeStyle = engine.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(startX - 10, baseY);
                            ctx.lineTo(startX + N * (barW + gap), baseY);
                            ctx.stroke();

                            var pairing = 0;
                            var p = pVal;
                            var q = p / (p - 1);

                            for (var i = 0; i < N; i++) {
                                var xPos = startX + i * (barW + gap);
                                var xv = xseq[i];
                                var yv = yseq[i];
                                var prod = xv * yv;
                                pairing += prod;

                                // x_n bar (blue, narrow left)
                                var xH = xv * scaleY;
                                ctx.fillStyle = engine.colors.blue + 'aa';
                                ctx.fillRect(xPos, baseY - Math.max(xH, 0), barW / 3, Math.abs(xH));

                                // y_n bar (orange, narrow right)
                                var yH = yv * scaleY;
                                ctx.fillStyle = engine.colors.orange + 'aa';
                                ctx.fillRect(xPos + barW / 3 + 2, baseY - Math.max(yH, 0), barW / 3, Math.abs(yH));

                                // product bar (green, full width below)
                                var pH = prod * scaleY * 0.5;
                                ctx.fillStyle = prod >= 0 ? engine.colors.green + '88' : engine.colors.red + '88';
                                ctx.fillRect(xPos, baseY + 10, barW * 2 / 3 + 2, pH);

                                // Label
                                ctx.fillStyle = engine.colors.text;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('n=' + (i + 1), xPos + barW / 3, baseY + 55);
                            }

                            // Compute norms
                            var xNorm = 0, yNorm = 0;
                            for (var j = 0; j < N; j++) {
                                xNorm += Math.pow(Math.abs(xseq[j]), p);
                                yNorm += Math.pow(Math.abs(yseq[j]), q);
                            }
                            xNorm = Math.pow(xNorm, 1 / p);
                            yNorm = Math.pow(yNorm, 1 / q);

                            ctx.fillStyle = engine.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('p = ' + p.toFixed(1) + ',  q = ' + q.toFixed(1), 10, 18);

                            ctx.fillStyle = engine.colors.blue;
                            ctx.fillText('||x||_p = ' + xNorm.toFixed(3), 10, 38);
                            ctx.fillStyle = engine.colors.orange;
                            ctx.fillText('||y||_q = ' + yNorm.toFixed(3), 200, 38);
                            ctx.fillStyle = engine.colors.green;
                            ctx.fillText('<x, y> = ' + pairing.toFixed(3), 10, 58);
                            ctx.fillStyle = engine.colors.yellow;
                            ctx.fillText('Holder bound: ' + (xNorm * yNorm).toFixed(3), 200, 58);
                        }

                        engine.animate(draw);
                        return engine;
                    }
                },
                {
                    id: 'viz-holder-equality',
                    title: 'Holder Inequality Equality Condition',
                    description: 'Holder inequality becomes equality when |x_n|^p and |y_n|^q are proportional. Adjust lambda to see when equality holds.',
                    setup: function(body, controls) {
                        const engine = new VizEngine(body, { width: 560, height: 380, scale: 40 });

                        var pVal = 2;
                        var lambdaVal = 1;
                        VizEngine.createSlider(controls, 'p', 1.2, 5, 2, 0.1, function(v) { pVal = v; });
                        VizEngine.createSlider(controls, 'lambda', 0.1, 3, 1, 0.05, function(v) { lambdaVal = v; });

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            var p = pVal;
                            var q = p / (p - 1);

                            // Draw the unit sphere in l^p (2D cross-section)
                            engine.drawCurve(function(t) {
                                var x = Math.cos(t);
                                var y = Math.sin(t);
                                var r = Math.pow(Math.pow(Math.abs(x), p) + Math.pow(Math.abs(y), p), 1 / p);
                                return r > 0.001 ? [x / r, y / r] : [0, 0];
                            }, 0, 2 * Math.PI, 300, engine.colors.blue, 2);

                            // For a given x on the l^p sphere, the optimal y has |y_i| = lambda * |x_i|^{p-1}
                            // Show x and optimal y
                            var angle = Math.PI / 4;
                            var cx = Math.cos(angle);
                            var cy = Math.sin(angle);
                            var rr = Math.pow(Math.pow(Math.abs(cx), p) + Math.pow(Math.abs(cy), p), 1 / p);
                            cx /= rr; cy /= rr;

                            // Optimal y: y_i = sign(x_i) * |x_i|^{p-1} * lambda
                            var oy1 = Math.sign(cx) * Math.pow(Math.abs(cx), p - 1) * lambdaVal;
                            var oy2 = Math.sign(cy) * Math.pow(Math.abs(cy), p - 1) * lambdaVal;

                            engine.drawVector(0, 0, cx, cy, engine.colors.blue, 'x');
                            engine.drawVector(0, 0, oy1, oy2, engine.colors.orange, 'y*');

                            // Show the pairing value
                            var pairing = cx * oy1 + cy * oy2;
                            var xNorm = Math.pow(Math.pow(Math.abs(cx), p) + Math.pow(Math.abs(cy), p), 1 / p);
                            var yNorm = Math.pow(Math.pow(Math.abs(oy1), q) + Math.pow(Math.abs(oy2), q), 1 / q);

                            engine.screenText('p = ' + p.toFixed(1) + ', q = ' + q.toFixed(1), 10, 18, engine.colors.white, 13, 'left');
                            engine.screenText('<x,y> = ' + pairing.toFixed(3), 10, 38, engine.colors.green, 12, 'left');
                            engine.screenText('||x||_p ||y||_q = ' + (xNorm * yNorm).toFixed(3), 10, 56, engine.colors.yellow, 12, 'left');

                            var ratio = (xNorm * yNorm > 0.001) ? (pairing / (xNorm * yNorm)) : 0;
                            engine.screenText('Ratio = ' + ratio.toFixed(4), 10, 74, ratio > 0.999 ? engine.colors.green : engine.colors.text, 12, 'left');
                            if (ratio > 0.999) {
                                engine.screenText('Equality holds!', 200, 74, engine.colors.green, 12, 'left');
                            }
                        }

                        engine.animate(draw);
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(1 < p < \\infty\\). Given \\(y = (1, 1/2, 1/4, 1/8, \\ldots) \\in \\ell^q\\), compute \\(\\|\\Phi(y)\\|_{(\\ell^p)^*}\\) for \\(p = 2\\).',
                    hint: 'When \\(p=2\\), \\(q=2\\) and \\(\\|\\Phi(y)\\| = \\|y\\|_2\\). Compute \\(\\sum_{n=0}^\\infty (1/2^n)^2\\).',
                    solution: 'For \\(p = 2\\), we have \\(q = 2\\) and \\(\\|\\Phi(y)\\| = \\|y\\|_2 = \\left(\\sum_{n=0}^\\infty 1/4^n\\right)^{1/2} = \\left(\\frac{1}{1 - 1/4}\\right)^{1/2} = \\left(\\frac{4}{3}\\right)^{1/2} = \\frac{2}{\\sqrt{3}}\\).'
                },
                {
                    question: 'Prove that \\(c_0^* \\cong \\ell^1\\) by explicitly constructing the isometric isomorphism.',
                    hint: 'For \\(f \\in c_0^*\\), set \\(y_n = f(e_n)\\). Show \\(y \\in \\ell^1\\) by considering \\(x^{(N)} = \\sum_{n=1}^N \\operatorname{sgn}(y_n) e_n\\).',
                    solution: 'Define \\(\\Phi: \\ell^1 \\to c_0^*\\) by \\(\\Phi(y)(x) = \\sum y_n x_n\\). This is well-defined since \\(|\\Phi(y)(x)| \\leq \\|y\\|_1 \\|x\\|_\\infty\\), so \\(\\|\\Phi(y)\\| \\leq \\|y\\|_1\\). For the reverse, take \\(x^{(N)} = (\\operatorname{sgn}(y_1), \\ldots, \\operatorname{sgn}(y_N), 0, \\ldots)\\). Then \\(\\|x^{(N)}\\|_\\infty \\leq 1\\) and \\(\\Phi(y)(x^{(N)}) = \\sum_{n=1}^N |y_n|\\). So \\(\\|\\Phi(y)\\| \\geq \\sum_{n=1}^N |y_n|\\) for all \\(N\\), giving \\(\\|\\Phi(y)\\| = \\|y\\|_1\\). Surjectivity: given \\(f \\in c_0^*\\), set \\(y_n = f(e_n)\\). The same argument shows \\(\\sum |y_n| \\leq \\|f\\|\\), so \\(y \\in \\ell^1\\). For any \\(x \\in c_0\\), \\(x = \\lim_N \\sum_{n=1}^N x_n e_n\\) in \\(c_0\\), so \\(f(x) = \\sum x_n y_n = \\Phi(y)(x)\\).'
                },
                {
                    question: 'Show that \\((\\ell^\\infty)^* \\neq \\ell^1\\) by proving that \\(\\ell^1\\) is separable while \\((\\ell^\\infty)^*\\) is not. (Hint: \\(\\ell^\\infty\\) is not separable.)',
                    hint: 'If \\(X^*\\) were separable, then \\(X\\) would be separable. Use the contrapositive: \\(\\ell^\\infty\\) is not separable, so \\((\\ell^\\infty)^*\\) cannot be separable either.',
                    solution: 'First, \\(\\ell^\\infty\\) is not separable: the uncountable set \\(\\{\\mathbf{1}_A : A \\subseteq \\mathbb{N}\\}\\) of characteristic functions of subsets of \\(\\mathbb{N}\\) satisfies \\(\\|\\mathbf{1}_A - \\mathbf{1}_B\\|_\\infty = 1\\) for \\(A \\neq B\\), so no countable set can be dense. Now, if \\((\\ell^\\infty)^*\\) were isomorphic to \\(\\ell^1\\), it would be separable (since \\(\\ell^1\\) is separable: finite rational sequences are dense). But a general result states: if \\(X^*\\) is separable, then \\(X\\) is separable. Since \\(\\ell^\\infty\\) is not separable, \\((\\ell^\\infty)^*\\) cannot be separable, hence \\((\\ell^\\infty)^* \\not\\cong \\ell^1\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Dual of C[0,1]
        // ============================================================
        {
            id: 'sec-dual-c01',
            title: 'Dual of C[0,1]',
            content: `
<p>Identifying the dual of \\(C[0,1]\\) is one of the classical achievements of functional analysis. The answer involves not just functions but <em>measures</em>, connecting the algebraic structure of functionals to the measure-theoretic fabric of the underlying space.</p>

<div class="env-block definition">
<strong>Definition 10.10 (Signed and Complex Borel Measures).</strong> Let \\(\\mathcal{B}([0,1])\\) denote the Borel \\(\\sigma\\)-algebra on \\([0,1]\\). A <em>signed Borel measure</em> is a countably additive function \\(\\mu: \\mathcal{B}([0,1]) \\to \\mathbb{R}\\). The <em>total variation</em> of \\(\\mu\\) is the measure \\(|\\mu|\\) defined by
\\[|\\mu|(E) = \\sup \\sum_{i=1}^n |\\mu(E_i)|,\\]
where the supremum is over all finite partitions \\(\\{E_1, \\ldots, E_n\\}\\) of \\(E\\) into Borel sets. We write \\(\\|\\mu\\| = |\\mu|([0,1])\\) for the total variation norm.
</div>

<div class="env-block definition">
<strong>Definition 10.11 (Regular Borel Measures).</strong> A signed Borel measure \\(\\mu\\) on \\([0,1]\\) is <em>regular</em> if for every Borel set \\(E\\),
\\[|\\mu|(E) = \\inf\\{|\\mu|(U) : U \\supseteq E, \\, U \\text{ open}\\} = \\sup\\{|\\mu|(K) : K \\subseteq E, \\, K \\text{ compact}\\}.\\]
The space of all regular signed Borel measures on \\([0,1]\\) is denoted \\(\\mathcal{M}([0,1])\\) or \\(\\mathrm{rba}([0,1])\\).
</div>

<div class="env-block theorem">
<strong>Theorem 10.12 (Riesz&ndash;Markov Representation Theorem).</strong> For every continuous linear functional \\(\\Lambda \\in C[0,1]^*\\), there exists a unique regular signed Borel measure \\(\\mu\\) on \\([0,1]\\) such that
\\[\\Lambda(f) = \\int_0^1 f\\,d\\mu \\quad \\text{for all } f \\in C[0,1].\\]
Moreover, \\(\\|\\Lambda\\| = \\|\\mu\\| = |\\mu|([0,1])\\). The map \\(\\mu \\mapsto \\Lambda_\\mu\\) is an isometric isomorphism \\(\\mathcal{M}([0,1]) \\cong C[0,1]^*\\).
</div>

<div class="env-block proof">
<strong>Proof outline.</strong> The proof has two main ingredients:

<p><strong>Positive case:</strong> If \\(\\Lambda\\) is a positive functional (\\(f \\geq 0 \\Rightarrow \\Lambda(f) \\geq 0\\)), the Riesz&ndash;Markov theorem for positive functionals yields a unique positive regular Borel measure \\(\\mu\\) with \\(\\Lambda(f) = \\int f \\, d\\mu\\).</p>

<p><strong>General case:</strong> Decompose \\(\\Lambda = \\Lambda^+ - \\Lambda^-\\) using the Jordan decomposition in the dual, analogous to the Jordan decomposition of measures. Alternatively, use the lattice structure: for real-valued \\(\\Lambda\\), define \\(\\Lambda^+(f) = \\sup\\{\\Lambda(g) : 0 \\leq g \\leq f\\}\\) for \\(f \\geq 0\\) and extend. The resulting \\(\\mu = \\mu^+ - \\mu^-\\) is the desired signed measure. \\(\\square\\)</p>
</div>

<div class="env-block example">
<strong>Example 10.13.</strong> Several important elements of \\(C[0,1]^*\\):
<ul>
<li><strong>Point evaluation:</strong> \\(\\delta_t(f) = f(t)\\) corresponds to the Dirac measure \\(\\delta_t\\) at \\(t\\). Here \\(\\|\\delta_t\\| = 1\\).</li>
<li><strong>Integration:</strong> \\(\\Lambda(f) = \\int_0^1 f(t)\\,dt\\) corresponds to Lebesgue measure on \\([0,1]\\). Here \\(\\|\\Lambda\\| = 1\\).</li>
<li><strong>Weighted point masses:</strong> \\(\\Lambda(f) = \\sum_{k=1}^n c_k f(t_k)\\) corresponds to \\(\\mu = \\sum c_k \\delta_{t_k}\\). Here \\(\\|\\Lambda\\| = \\sum |c_k|\\).</li>
<li><strong>Singular functional:</strong> The Cantor measure \\(\\mu_C\\) (supported on the Cantor set) gives a functional singular with respect to Lebesgue measure.</li>
</ul>
</div>

<div class="env-block remark">
<strong>Remark 10.14.</strong> The Riesz&ndash;Markov theorem generalizes to \\(C(K)\\) for any compact Hausdorff space \\(K\\): \\(C(K)^* \\cong \\mathcal{M}(K)\\), the space of regular Borel signed measures on \\(K\\). This is one of the most powerful results connecting topology and measure theory.
</div>

<div class="viz-placeholder" data-viz="viz-measure-functional">Measures as Functionals</div>
<div class="viz-placeholder" data-viz="viz-signed-measure-decomp">Signed Measure Decomposition</div>
            `,
            visualizations: [
                {
                    id: 'viz-measure-functional',
                    title: 'Measures as Functionals on C[0,1]',
                    description: 'A functional on C[0,1] corresponds to a signed measure. See how point masses (Dirac deltas) and distributed measures act on continuous functions.',
                    setup: function(body, controls) {
                        const engine = new VizEngine(body, { width: 560, height: 380, scale: 1, originX: 0, originY: 0 });

                        var measureType = 0; // 0: Dirac, 1: Lebesgue, 2: two-point
                        var tPos = 0.5;

                        VizEngine.createSlider(controls, 't (Dirac pos)', 0, 1, 0.5, 0.01, function(v) { tPos = v; });
                        VizEngine.createButton(controls, 'Dirac', function() { measureType = 0; });
                        VizEngine.createButton(controls, 'Lebesgue', function() { measureType = 1; });
                        VizEngine.createButton(controls, 'Two-point', function() { measureType = 2; });

                        function testFunc(t) {
                            return Math.sin(2 * Math.PI * t) + 0.5 * Math.cos(4 * Math.PI * t);
                        }

                        function draw() {
                            engine.clear();
                            var ctx = engine.ctx;
                            var W = 560, H = 380;
                            var left = 50, right = W - 20;
                            var graphTop = 40, graphBot = 200;
                            var measTop = 220, measBot = 340;
                            var gW = right - left;
                            var gH = graphBot - graphTop;
                            var mH = measBot - measTop;

                            // Graph axes
                            ctx.strokeStyle = engine.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(left, graphBot); ctx.lineTo(right, graphBot); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(left, graphTop); ctx.lineTo(left, graphBot); ctx.stroke();

                            // Measure axes
                            ctx.beginPath(); ctx.moveTo(left, measBot); ctx.lineTo(right, measBot); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(left, measTop); ctx.lineTo(left, measBot); ctx.stroke();

                            // Labels
                            ctx.fillStyle = engine.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('f(t)', left - 20, (graphTop + graphBot) / 2);
                            ctx.fillText('d\u03BC', left - 20, (measTop + measBot) / 2);

                            // Draw function
                            ctx.strokeStyle = engine.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            var mid = (graphTop + graphBot) / 2;
                            var amp = gH * 0.4;
                            for (var i = 0; i <= 200; i++) {
                                var t = i / 200;
                                var px = left + t * gW;
                                var py = mid - testFunc(t) * amp;
                                if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Draw measure and compute integral
                            var integral = 0;
                            var measMid = (measTop + measBot) / 2;
                            var measAmp = mH * 0.35;

                            if (measureType === 0) {
                                // Dirac at tPos
                                var px = left + tPos * gW;
                                ctx.strokeStyle = engine.colors.orange;
                                ctx.lineWidth = 3;
                                ctx.beginPath(); ctx.moveTo(px, measBot); ctx.lineTo(px, measTop + 10); ctx.stroke();
                                ctx.fillStyle = engine.colors.orange;
                                ctx.beginPath(); ctx.arc(px, measTop + 10, 5, 0, Math.PI * 2); ctx.fill();
                                integral = testFunc(tPos);

                                // Highlight on graph
                                var gy = mid - testFunc(tPos) * amp;
                                ctx.fillStyle = engine.colors.orange;
                                ctx.beginPath(); ctx.arc(px, gy, 5, 0, Math.PI * 2); ctx.fill();
                                ctx.setLineDash([4, 4]);
                                ctx.strokeStyle = engine.colors.orange + '88';
                                ctx.lineWidth = 1;
                                ctx.beginPath(); ctx.moveTo(px, gy); ctx.lineTo(px, graphBot); ctx.stroke();
                                ctx.setLineDash([]);

                                ctx.fillStyle = engine.colors.orange;
                                ctx.textAlign = 'left';
                                ctx.fillText('\u03BC = \u03B4_' + tPos.toFixed(2), left + 5, measTop + 5);
                            } else if (measureType === 1) {
                                // Lebesgue measure
                                ctx.fillStyle = engine.colors.teal + '44';
                                ctx.fillRect(left, measMid - measAmp * 0.3, gW, measAmp * 0.6);
                                ctx.strokeStyle = engine.colors.teal;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.moveTo(left, measMid);
                                ctx.lineTo(right, measMid);
                                ctx.stroke();

                                // Shade area under f
                                ctx.fillStyle = engine.colors.teal + '33';
                                ctx.beginPath();
                                ctx.moveTo(left, mid);
                                for (var j = 0; j <= 200; j++) {
                                    var tt = j / 200;
                                    ctx.lineTo(left + tt * gW, mid - testFunc(tt) * amp);
                                }
                                ctx.lineTo(right, mid);
                                ctx.closePath();
                                ctx.fill();

                                // Numerical integration
                                for (var k = 0; k < 1000; k++) {
                                    integral += testFunc(k / 1000) / 1000;
                                }

                                ctx.fillStyle = engine.colors.teal;
                                ctx.textAlign = 'left';
                                ctx.fillText('\u03BC = Lebesgue measure', left + 5, measTop + 5);
                            } else {
                                // Two-point mass: 0.6*delta_0.25 - 0.4*delta_0.75
                                var p1 = left + 0.25 * gW;
                                var p2 = left + 0.75 * gW;
                                ctx.strokeStyle = engine.colors.green;
                                ctx.lineWidth = 3;
                                ctx.beginPath(); ctx.moveTo(p1, measBot); ctx.lineTo(p1, measBot - measAmp * 0.6); ctx.stroke();
                                ctx.fillStyle = engine.colors.green;
                                ctx.beginPath(); ctx.arc(p1, measBot - measAmp * 0.6, 4, 0, Math.PI * 2); ctx.fill();

                                ctx.strokeStyle = engine.colors.red;
                                ctx.lineWidth = 3;
                                ctx.beginPath(); ctx.moveTo(p2, measBot); ctx.lineTo(p2, measBot + measAmp * 0.4); ctx.stroke();
                                ctx.fillStyle = engine.colors.red;
                                ctx.beginPath(); ctx.arc(p2, measBot + measAmp * 0.4, 4, 0, Math.PI * 2); ctx.fill();

                                integral = 0.6 * testFunc(0.25) - 0.4 * testFunc(0.75);

                                ctx.fillStyle = engine.colors.purple;
                                ctx.textAlign = 'left';
                                ctx.fillText('\u03BC = 0.6\u03B4(0.25) - 0.4\u03B4(0.75)', left + 5, measTop + 5);
                            }

                            // Result
                            ctx.fillStyle = engine.colors.yellow;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('\u039B(f) = \u222Bf d\u03BC = ' + integral.toFixed(4), right, 20);
                        }

                        engine.animate(draw);
                        return engine;
                    }
                },
                {
                    id: 'viz-signed-measure-decomp',
                    title: 'Jordan Decomposition of a Signed Measure',
                    description: 'Every signed measure decomposes as mu = mu+ - mu-. Visualize the positive and negative parts and the total variation.',
                    setup: function(body, controls) {
                        const engine = new VizEngine(body, { width: 560, height: 380, scale: 1, originX: 0, originY: 0 });

                        var phaseVal = 0;
                        VizEngine.createSlider(controls, 'phase', 0, 6.28, 0, 0.05, function(v) { phaseVal = v; });

                        function density(t, phi) {
                            return Math.sin(3 * Math.PI * t + phi) + 0.5 * Math.cos(Math.PI * t + phi);
                        }

                        function draw() {
                            engine.clear();
                            var ctx = engine.ctx;
                            var W = 560, H = 380;
                            var left = 50, right = W - 20;
                            var gW = right - left;

                            var panels = [
                                { label: 'd\u03BC (signed)', top: 20, bot: 120 },
                                { label: 'd\u03BC+ (positive part)', top: 140, bot: 220 },
                                { label: 'd\u03BC- (negative part)', top: 240, bot: 320 }
                            ];

                            var totalPos = 0, totalNeg = 0;

                            for (var p = 0; p < panels.length; p++) {
                                var panel = panels[p];
                                var mid = (panel.top + panel.bot) / 2;
                                var amp = (panel.bot - panel.top) * 0.4;

                                ctx.strokeStyle = engine.colors.axis;
                                ctx.lineWidth = 1;
                                ctx.beginPath(); ctx.moveTo(left, mid); ctx.lineTo(right, mid); ctx.stroke();
                                ctx.beginPath(); ctx.moveTo(left, panel.top); ctx.lineTo(left, panel.bot); ctx.stroke();

                                ctx.fillStyle = engine.colors.text;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText(panel.label, left + 5, panel.top + 12);

                                var steps = 200;
                                for (var i = 0; i < steps; i++) {
                                    var t = i / steps;
                                    var val = density(t, phaseVal);
                                    var barX = left + t * gW;
                                    var barW = gW / steps + 1;

                                    if (p === 0) {
                                        // Full signed measure
                                        var h = val * amp;
                                        ctx.fillStyle = val >= 0 ? engine.colors.green + '88' : engine.colors.red + '88';
                                        ctx.fillRect(barX, mid - Math.max(h, 0), barW, Math.abs(h));
                                        if (val >= 0) totalPos += val / steps;
                                        else totalNeg += Math.abs(val) / steps;
                                    } else if (p === 1) {
                                        // Positive part
                                        var posVal = Math.max(val, 0);
                                        var h2 = posVal * amp;
                                        ctx.fillStyle = engine.colors.green + '88';
                                        ctx.fillRect(barX, mid - h2, barW, h2);
                                    } else {
                                        // Negative part
                                        var negVal = Math.max(-val, 0);
                                        var h3 = negVal * amp;
                                        ctx.fillStyle = engine.colors.red + '88';
                                        ctx.fillRect(barX, mid - h3, barW, h3);
                                    }
                                }
                            }

                            ctx.fillStyle = engine.colors.yellow;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('||\u03BC|| = \u03BC+([0,1]) + \u03BC-([0,1]) = ' + (totalPos + totalNeg).toFixed(3), right, H - 15);
                            ctx.fillStyle = engine.colors.green;
                            ctx.fillText('\u03BC+([0,1]) = ' + totalPos.toFixed(3), right - 250, H - 15);
                            ctx.fillStyle = engine.colors.red;
                            ctx.fillText('\u03BC-([0,1]) = ' + totalNeg.toFixed(3), right - 100, H - 15);
                        }

                        engine.animate(draw);
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Determine the measure \\(\\mu\\) corresponding to the functional \\(\\Lambda(f) = 3f(0) - 2f(1/2) + f(1)\\) on \\(C[0,1]\\). What is \\(\\|\\Lambda\\|\\)?',
                    hint: 'This functional is a linear combination of point evaluations, so the measure is a combination of Dirac masses.',
                    solution: 'The corresponding measure is \\(\\mu = 3\\delta_0 - 2\\delta_{1/2} + \\delta_1\\). The total variation is \\(|\\mu|([0,1]) = |3| + |-2| + |1| = 6\\). So \\(\\|\\Lambda\\| = 6\\). To verify: for any \\(f \\in C[0,1]\\) with \\(\\|f\\|_\\infty \\leq 1\\), \\(|\\Lambda(f)| \\leq 3|f(0)| + 2|f(1/2)| + |f(1)| \\leq 6\\). Equality is achieved by any \\(f\\) with \\(f(0) = 1\\), \\(f(1/2) = -1\\), \\(f(1) = 1\\).'
                },
                {
                    question: 'Let \\(\\Lambda(f) = \\int_0^1 t \\cdot f(t)\\,dt\\) for \\(f \\in C[0,1]\\). Show that \\(\\Lambda \\in C[0,1]^*\\) and find the corresponding measure \\(\\mu\\) and \\(\\|\\Lambda\\|\\).',
                    hint: 'The measure \\(\\mu\\) has density \\(g(t) = t\\) with respect to Lebesgue measure, i.e., \\(d\\mu = t\\,dt\\).',
                    solution: 'We have \\(|\\Lambda(f)| \\leq \\int_0^1 t |f(t)| dt \\leq \\|f\\|_\\infty \\int_0^1 t \\, dt = \\|f\\|_\\infty / 2\\). So \\(\\Lambda \\in C[0,1]^*\\) with \\(\\|\\Lambda\\| \\leq 1/2\\). Taking \\(f \\equiv 1\\), \\(\\Lambda(f) = 1/2\\), so \\(\\|\\Lambda\\| = 1/2\\). The corresponding measure is \\(d\\mu = t\\,dt\\), i.e., \\(\\mu\\) is absolutely continuous with respect to Lebesgue measure with Radon&ndash;Nikodym derivative \\(d\\mu/dt = t\\). The total variation is \\(|\\mu|([0,1]) = \\int_0^1 |t| \\, dt = 1/2\\).'
                },
                {
                    question: 'Show that \\(C[0,1]^*\\) is not separable. (Hint: consider the family \\(\\{\\delta_t : t \\in [0,1]\\}\\).)',
                    hint: 'Compute \\(\\|\\delta_s - \\delta_t\\|\\) for \\(s \\neq t\\) using a continuous function that equals 1 at \\(s\\) and 0 at \\(t\\).',
                    solution: 'For \\(s \\neq t\\) in \\([0,1]\\), by Urysohn\'s lemma there exists \\(f \\in C[0,1]\\) with \\(\\|f\\|_\\infty = 1\\), \\(f(s) = 1\\), \\(f(t) = -1\\). Then \\(|\\delta_s(f) - \\delta_t(f)| = |f(s) - f(t)| = 2\\), so \\(\\|\\delta_s - \\delta_t\\| \\geq 2\\). Since \\(\\|\\delta_s - \\delta_t\\| \\leq \\|\\delta_s\\| + \\|\\delta_t\\| = 2\\), we get \\(\\|\\delta_s - \\delta_t\\| = 2\\) for all \\(s \\neq t\\). The uncountable family \\(\\{B(\\delta_t, 1/2) : t \\in [0,1]\\}\\) consists of pairwise disjoint open balls. No countable dense subset can intersect all of them, so \\(C[0,1]^*\\) is not separable.'
                }
            ]
        },

        // ============================================================
        // SECTION 4: The Double Dual X**
        // ============================================================
        {
            id: 'sec-double-dual',
            title: 'The Double Dual X**',
            content: `
<p>Having constructed the dual \\(X^*\\), nothing prevents us from taking the dual again. The resulting <em>double dual</em> (or bidual) \\(X^{**}\\) carries a natural copy of \\(X\\) inside it, providing a fundamental tool for understanding the geometry of Banach spaces.</p>

<div class="env-block definition">
<strong>Definition 10.15 (Double Dual).</strong> The <em>double dual</em> (or bidual) of a normed space \\(X\\) is \\(X^{**} = (X^*)^*\\), the Banach space of all continuous linear functionals on \\(X^*\\).
</div>

<div class="env-block definition">
<strong>Definition 10.16 (Canonical Embedding).</strong> The <em>canonical embedding</em> \\(J: X \\to X^{**}\\) is defined by
\\[J(x)(f) = f(x) \\quad \\text{for all } f \\in X^*, \\, x \\in X.\\]
That is, \\(J(x)\\) is the <em>evaluation-at-\\(x\\)</em> functional on \\(X^*\\).
</div>

<div class="env-block theorem">
<strong>Theorem 10.17.</strong> The canonical embedding \\(J: X \\to X^{**}\\) is a linear isometry. That is:
<ol>
<li>\\(J\\) is linear: \\(J(\\alpha x + \\beta y) = \\alpha J(x) + \\beta J(y)\\).</li>
<li>\\(\\|J(x)\\|_{X^{**}} = \\|x\\|_X\\) for all \\(x \\in X\\).</li>
</ol>
In particular, \\(J\\) is injective, so \\(X\\) embeds isometrically into \\(X^{**}\\).
</div>

<div class="env-block proof">
<strong>Proof.</strong> Linearity is straightforward: \\(J(\\alpha x + \\beta y)(f) = f(\\alpha x + \\beta y) = \\alpha f(x) + \\beta f(y) = (\\alpha J(x) + \\beta J(y))(f)\\).

<p>For the isometry, note \\(|J(x)(f)| = |f(x)| \\leq \\|f\\| \\cdot \\|x\\|\\), so \\(\\|J(x)\\| \\leq \\|x\\|\\). For the reverse inequality, by a corollary of the Hahn&ndash;Banach theorem (Chapter 6), there exists \\(f_0 \\in X^*\\) with \\(\\|f_0\\| = 1\\) and \\(f_0(x) = \\|x\\|\\). Then \\(\\|J(x)\\| \\geq |J(x)(f_0)| = |f_0(x)| = \\|x\\|\\). \\(\\square\\)</p>
</div>

<div class="env-block definition">
<strong>Definition 10.18 (Reflexivity).</strong> A Banach space \\(X\\) is called <em>reflexive</em> if the canonical embedding \\(J: X \\to X^{**}\\) is surjective (hence an isometric isomorphism). That is, \\(X\\) is reflexive if and only if every continuous linear functional on \\(X^*\\) is of the form \\(f \\mapsto f(x)\\) for some \\(x \\in X\\).
</div>

<div class="env-block example">
<strong>Example 10.19.</strong>
<ul>
<li>Every Hilbert space \\(H\\) is reflexive. By the Riesz&ndash;Fr&eacute;chet theorem, \\(H^* \\cong H\\) and \\(H^{**} \\cong H^* \\cong H\\), with the canonical embedding implementing this chain.</li>
<li>\\(\\ell^p\\) is reflexive for \\(1 < p < \\infty\\): \\((\\ell^p)^* \\cong \\ell^q\\) and \\((\\ell^q)^* \\cong \\ell^p\\), with \\(J\\) matching the composition of these isomorphisms.</li>
<li>\\(\\ell^1\\) is <em>not</em> reflexive: \\((\\ell^1)^* \\cong \\ell^\\infty\\), but \\((\\ell^\\infty)^* \\supsetneq \\ell^1\\), so \\(J(\\ell^1) \\subsetneq (\\ell^1)^{**}\\).</li>
<li>\\(c_0\\) is not reflexive: \\(c_0^* \\cong \\ell^1\\), \\((c_0)^{**} \\cong (\\ell^1)^* \\cong \\ell^\\infty \\supsetneq c_0\\).</li>
<li>\\(C[0,1]\\) is not reflexive.</li>
</ul>
</div>

<div class="env-block remark">
<strong>Remark 10.20.</strong> The isometry \\(\\|J(x)\\| = \\|x\\|\\) is sometimes called the <em>Hahn&ndash;Banach isometry</em> because its proof relies essentially on the Hahn&ndash;Banach theorem. Note that reflexivity requires \\(J\\) to be surjective, not merely that \\(X\\) and \\(X^{**}\\) are isometrically isomorphic. James (1951) constructed a non-reflexive Banach space \\(X\\) that is isometrically isomorphic to \\(X^{**}\\) via a non-canonical map.
</div>

<div class="viz-placeholder" data-viz="viz-canonical-embedding">Canonical Embedding J</div>
<div class="viz-placeholder" data-viz="viz-reflexivity-chain">Reflexivity Chain</div>
            `,
            visualizations: [
                {
                    id: 'viz-canonical-embedding',
                    title: 'Canonical Embedding J: X to X**',
                    description: 'Visualize the canonical embedding for X = R^2. Each x in X defines J(x) in X** by J(x)(f) = f(x). Drag x to see how J(x) acts on functionals.',
                    setup: function(body, controls) {
                        const engine = new VizEngine(body, { width: 560, height: 380, scale: 40 });

                        var drag = engine.addDraggable('x', 2, 1, engine.colors.blue, 8);

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            var xx = drag.x;
                            var xy = drag.y;

                            // Draw x as vector
                            engine.drawVector(0, 0, xx, xy, engine.colors.blue, 'x');

                            // Draw unit ball
                            engine.drawCircle(0, 0, 1, null, engine.colors.white + '33', 1);

                            // Show several functionals f_i and their values J(x)(f_i)
                            var functionals = [
                                { a: 1, b: 0, color: engine.colors.orange, label: 'f\u2081(x)=x\u2081' },
                                { a: 0, b: 1, color: engine.colors.teal, label: 'f\u2082(x)=x\u2082' },
                                { a: 0.707, b: 0.707, color: engine.colors.purple, label: 'f\u2083(x)=(x\u2081+x\u2082)/\u221A2' }
                            ];

                            for (var i = 0; i < functionals.length; i++) {
                                var fi = functionals[i];
                                var val = fi.a * xx + fi.b * xy;
                                // Draw normal direction of functional
                                engine.drawLine(0, 0, fi.a * 4, fi.b * 4, fi.color + '44', 1, true);

                                // Draw the projection
                                var norm2 = fi.a * fi.a + fi.b * fi.b;
                                var projX = fi.a * val / norm2;
                                var projY = fi.b * val / norm2;
                                engine.drawSegment(xx, xy, projX, projY, fi.color + '66', 1, true);
                                engine.drawPoint(projX, projY, fi.color, '', 4);

                                // Show value
                                engine.screenText(fi.label + ' = ' + val.toFixed(2), 380, 20 + i * 20, fi.color, 12, 'left');
                            }

                            var norm = Math.sqrt(xx * xx + xy * xy);
                            engine.screenText('||x|| = ' + norm.toFixed(2), 10, 18, engine.colors.white, 13, 'left');
                            engine.screenText('||J(x)||_{X**} = ' + norm.toFixed(2), 10, 38, engine.colors.yellow, 13, 'left');
                            engine.screenText('(isometry: ||J(x)|| = ||x||)', 10, 56, engine.colors.text, 11, 'left');

                            engine.drawDraggables();
                        }

                        engine.animate(draw);
                        return engine;
                    }
                },
                {
                    id: 'viz-reflexivity-chain',
                    title: 'Reflexivity: X vs X** Inclusion',
                    description: 'Schematic of the chain X -> X** for reflexive and non-reflexive spaces. Compare l^p (reflexive for 1<p<inf) vs c_0 (non-reflexive).',
                    setup: function(body, controls) {
                        const engine = new VizEngine(body, { width: 560, height: 380, scale: 1, originX: 0, originY: 0 });

                        var spaceChoice = 0;
                        VizEngine.createButton(controls, 'l^2 (reflexive)', function() { spaceChoice = 0; });
                        VizEngine.createButton(controls, 'l^p, 1<p<inf', function() { spaceChoice = 1; });
                        VizEngine.createButton(controls, 'c_0 (non-refl.)', function() { spaceChoice = 2; });
                        VizEngine.createButton(controls, 'l^1 (non-refl.)', function() { spaceChoice = 3; });

                        function draw() {
                            engine.clear();
                            var ctx = engine.ctx;
                            var W = 560, H = 380;
                            var cx = W / 2, cy = H / 2;

                            var data = [
                                { name: 'l^2', dual: 'l^2', ddual: 'l^2', reflexive: true },
                                { name: 'l^p', dual: 'l^q', ddual: 'l^p', reflexive: true },
                                { name: 'c\u2080', dual: 'l^1', ddual: 'l^\u221E', reflexive: false },
                                { name: 'l^1', dual: 'l^\u221E', ddual: '(l^\u221E)*', reflexive: false }
                            ];
                            var d = data[spaceChoice];

                            // Draw the chain X -> X* -> X**
                            var boxW = 120, boxH = 50;
                            var positions = [
                                { x: 60, y: cy - 25 },
                                { x: 220, y: cy - 25 },
                                { x: 380, y: cy - 25 }
                            ];
                            var labels = ['X = ' + d.name, 'X* = ' + d.dual, 'X** = ' + d.ddual];
                            var boxColors = [engine.colors.blue, engine.colors.orange, engine.colors.purple];

                            for (var i = 0; i < 3; i++) {
                                var pos = positions[i];
                                ctx.strokeStyle = boxColors[i];
                                ctx.lineWidth = 2;
                                ctx.strokeRect(pos.x, pos.y, boxW, boxH);
                                ctx.fillStyle = boxColors[i] + '22';
                                ctx.fillRect(pos.x, pos.y, boxW, boxH);
                                ctx.fillStyle = boxColors[i];
                                ctx.font = 'bold 15px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(labels[i], pos.x + boxW / 2, pos.y + boxH / 2);
                            }

                            // Arrows between boxes
                            ctx.strokeStyle = engine.colors.white;
                            ctx.lineWidth = 2;
                            for (var j = 0; j < 2; j++) {
                                var fromX = positions[j].x + boxW;
                                var toX = positions[j + 1].x;
                                var arrY = cy;
                                ctx.beginPath();
                                ctx.moveTo(fromX + 5, arrY);
                                ctx.lineTo(toX - 15, arrY);
                                ctx.stroke();
                                // Arrowhead
                                ctx.beginPath();
                                ctx.moveTo(toX - 5, arrY);
                                ctx.lineTo(toX - 15, arrY - 6);
                                ctx.lineTo(toX - 15, arrY + 6);
                                ctx.closePath();
                                ctx.fillStyle = engine.colors.white;
                                ctx.fill();
                            }

                            // Arrow labels
                            ctx.fillStyle = engine.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('dual', (positions[0].x + boxW + positions[1].x) / 2, cy - 15);
                            ctx.fillText('dual', (positions[1].x + boxW + positions[2].x) / 2, cy - 15);

                            // Canonical embedding arrow J: X -> X**
                            ctx.strokeStyle = engine.colors.yellow;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            var jStartX = positions[0].x + boxW / 2;
                            var jStartY = positions[0].y + boxH + 5;
                            var jEndX = positions[2].x + boxW / 2;
                            var jEndY = positions[2].y + boxH + 5;
                            ctx.moveTo(jStartX, jStartY);
                            ctx.quadraticCurveTo((jStartX + jEndX) / 2, jStartY + 80, jEndX, jEndY);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            // Arrowhead
                            ctx.beginPath();
                            ctx.fillStyle = engine.colors.yellow;
                            ctx.moveTo(jEndX, jEndY);
                            ctx.lineTo(jEndX - 8, jEndY + 10);
                            ctx.lineTo(jEndX + 8, jEndY + 10);
                            ctx.closePath();
                            ctx.fill();

                            ctx.fillStyle = engine.colors.yellow;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillText('J : X \u2192 X**', (jStartX + jEndX) / 2, jStartY + 60);

                            // Reflexivity status
                            if (d.reflexive) {
                                ctx.fillStyle = engine.colors.green;
                                ctx.font = 'bold 16px -apple-system,sans-serif';
                                ctx.fillText('REFLEXIVE: J is surjective (J(X) = X**)', cx, 40);
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('Every element of X** comes from evaluation at some x \u2208 X', cx, 60);
                            } else {
                                ctx.fillStyle = engine.colors.red;
                                ctx.font = 'bold 16px -apple-system,sans-serif';
                                ctx.fillText('NOT REFLEXIVE: J(X) \u2282 X** strictly', cx, 40);
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillStyle = engine.colors.text;
                                ctx.fillText('X** contains functionals on X* not representable as evaluation', cx, 60);
                            }

                            // Extra info for specific cases
                            ctx.fillStyle = engine.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            if (spaceChoice === 2) {
                                ctx.fillText('c\u2080 \u2282 l^\u221E = c\u2080** via J(x)(f) = \u03A3 x_n f(e_n)', cx, H - 30);
                            } else if (spaceChoice === 3) {
                                ctx.fillText('l^1 \u2282 (l^\u221E)* via J, but (l^\u221E)* also contains Banach limits', cx, H - 30);
                            }
                        }

                        engine.animate(draw);
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X = c_0\\) with the sup norm. Identify \\(X^*\\), \\(X^{**}\\), and describe the canonical embedding \\(J: c_0 \\to X^{**}\\) explicitly.',
                    hint: 'We have \\(c_0^* \\cong \\ell^1\\) and \\((\\ell^1)^* \\cong \\ell^\\infty\\). Write out what \\(J(x)\\) does to an element of \\(\\ell^1\\).',
                    solution: 'We have \\(X^* = c_0^* \\cong \\ell^1\\) and \\(X^{**} = (\\ell^1)^* \\cong \\ell^\\infty\\). For \\(x = (x_n) \\in c_0\\) and \\(y = (y_n) \\in \\ell^1 = X^*\\), the canonical embedding gives \\(J(x)(y) = y(x) = \\sum_{n=1}^\\infty x_n y_n\\). Under the identification \\(X^{**} \\cong \\ell^\\infty\\), \\(J(x)\\) corresponds to the sequence \\((x_n) \\in \\ell^\\infty\\). Since \\(c_0 \\subsetneq \\ell^\\infty\\) (e.g., the constant sequence \\((1,1,1,\\ldots) \\in \\ell^\\infty \\setminus c_0\\)), the embedding is not surjective and \\(c_0\\) is not reflexive.'
                },
                {
                    question: 'Show that every finite-dimensional normed space is reflexive.',
                    hint: 'For finite-dimensional spaces, \\(\\dim X = \\dim X^* = \\dim X^{**}\\). An injective linear map between spaces of equal finite dimension is surjective.',
                    solution: 'Let \\(\\dim X = n < \\infty\\). Then \\(\\dim X^* = n\\) (every linear functional on a finite-dimensional space is continuous) and \\(\\dim X^{**} = n\\). The canonical embedding \\(J: X \\to X^{**}\\) is a linear isometry, hence injective. An injective linear map from an \\(n\\)-dimensional space to an \\(n\\)-dimensional space must be surjective (by the rank-nullity theorem). Therefore \\(J\\) is surjective and \\(X\\) is reflexive.'
                },
                {
                    question: 'Prove that if \\(X\\) is reflexive and \\(M\\) is a closed subspace, then \\(M\\) is reflexive.',
                    hint: 'Use the canonical embeddings \\(J_M: M \\to M^{**}\\) and \\(J_X: X \\to X^{**}\\). Show that surjectivity of \\(J_X\\) implies surjectivity of \\(J_M\\).',
                    solution: 'Let \\(\\Phi \\in M^{**}\\). Define \\(\\Psi \\in X^{**}\\) by \\(\\Psi(f) = \\Phi(f|_M)\\) for \\(f \\in X^*\\), where \\(f|_M\\) denotes the restriction of \\(f\\) to \\(M\\) (which lies in \\(M^*\\) since every element of \\(M^*\\) extends to \\(X^*\\) by Hahn&ndash;Banach, and restriction maps \\(X^* \\to M^*\\) surjectively). Then \\(\\Psi\\) is linear and \\(|\\Psi(f)| = |\\Phi(f|_M)| \\leq \\|\\Phi\\| \\cdot \\|f|_M\\| \\leq \\|\\Phi\\| \\cdot \\|f\\|\\), so \\(\\Psi \\in X^{**}\\). Since \\(X\\) is reflexive, \\(\\Psi = J_X(x)\\) for some \\(x \\in X\\). For any \\(f \\in X^*\\) with \\(M \\subseteq \\ker f\\), we get \\(f(x) = \\Psi(f) = \\Phi(0) = 0\\), so \\(x \\in M^{\\perp\\perp} = \\overline{M} = M\\) (since \\(M\\) is closed). Then for \\(g \\in M^*\\), extend \\(g\\) to \\(f \\in X^*\\) and \\(\\Phi(g) = \\Phi(f|_M) = \\Psi(f) = f(x) = g(x) = J_M(x)(g)\\). So \\(\\Phi = J_M(x)\\) and \\(J_M\\) is surjective.'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Annihilators and Quotient Duals
        // ============================================================
        {
            id: 'sec-annihilators',
            title: 'Annihilators and Quotient Duals',
            content: `
<p>The relationship between subspaces of \\(X\\) and subspaces of \\(X^*\\) is mediated by the notion of <em>annihilator</em>. These connections lead to elegant isometric identifications between quotient duals and annihilators.</p>

<div class="env-block definition">
<strong>Definition 10.21 (Annihilator in \\(X^*\\)).</strong> Let \\(M\\) be a subset of a normed space \\(X\\). The <em>annihilator</em> of \\(M\\) in \\(X^*\\) is
\\[M^\\perp = \\{f \\in X^* : f(x) = 0 \\text{ for all } x \\in M\\}.\\]
</div>

<div class="env-block definition">
<strong>Definition 10.22 (Pre-annihilator).</strong> For a subset \\(N \\subseteq X^*\\), the <em>pre-annihilator</em> of \\(N\\) in \\(X\\) is
\\[{}^\\perp N = \\{x \\in X : f(x) = 0 \\text{ for all } f \\in N\\}.\\]
</div>

<div class="env-block theorem">
<strong>Proposition 10.23 (Basic Properties of Annihilators).</strong>
<ol>
<li>\\(M^\\perp\\) is a closed subspace of \\(X^*\\) (and \\({}^\\perp N\\) is a closed subspace of \\(X\\)).</li>
<li>\\(M_1 \\subseteq M_2 \\implies M_2^\\perp \\subseteq M_1^\\perp\\) (order-reversing).</li>
<li>\\(M^\\perp = (\\overline{\\operatorname{span} M})^\\perp\\).</li>
<li>\\({}^\\perp(M^\\perp) = \\overline{\\operatorname{span} M}\\).</li>
</ol>
</div>

<div class="env-block proof">
<strong>Proof.</strong>
<p>(1) \\(M^\\perp = \\bigcap_{x \\in M} \\ker(\\hat{x})\\) where \\(\\hat{x}: X^* \\to \\mathbb{K}\\) is evaluation at \\(x\\), i.e., \\(\\hat{x}(f) = f(x)\\). Each \\(\\hat{x}\\) is continuous (in fact \\(\\hat{x} \\in X^{**}\\)), so each \\(\\ker(\\hat{x})\\) is closed, and the intersection is closed.</p>

<p>(2) If \\(M_1 \\subseteq M_2\\) and \\(f \\in M_2^\\perp\\), then \\(f\\) vanishes on \\(M_2 \\supseteq M_1\\), so \\(f \\in M_1^\\perp\\).</p>

<p>(3) If \\(f \\in M^\\perp\\), then \\(f\\) vanishes on \\(M\\), hence on \\(\\operatorname{span} M\\) (by linearity), hence on \\(\\overline{\\operatorname{span} M}\\) (by continuity).</p>

<p>(4) The inclusion \\(\\overline{\\operatorname{span} M} \\subseteq {}^\\perp(M^\\perp)\\) is clear. For the reverse, suppose \\(x \\notin \\overline{\\operatorname{span} M}\\). By the Hahn&ndash;Banach separation theorem, there exists \\(f \\in X^*\\) with \\(f(x) \\neq 0\\) and \\(f|_{\\overline{\\operatorname{span} M}} = 0\\). Then \\(f \\in M^\\perp\\) but \\(f(x) \\neq 0\\), so \\(x \\notin {}^\\perp(M^\\perp)\\). \\(\\square\\)</p>
</div>

<div class="env-block theorem">
<strong>Theorem 10.24 (Quotient-Dual Isometry).</strong> Let \\(M\\) be a closed subspace of a normed space \\(X\\). Then:
\\[(X/M)^* \\cong M^\\perp \\quad \\text{(isometric isomorphism)}.\\]
The isomorphism sends \\(\\Lambda \\in (X/M)^*\\) to \\(f = \\Lambda \\circ \\pi \\in M^\\perp\\), where \\(\\pi: X \\to X/M\\) is the quotient map.
</div>

<div class="env-block proof">
<strong>Proof.</strong> Define \\(\\Phi: (X/M)^* \\to M^\\perp\\) by \\(\\Phi(\\Lambda) = \\Lambda \\circ \\pi\\). Since \\(\\pi\\) is linear and continuous, \\(\\Phi(\\Lambda) \\in X^*\\). For \\(m \\in M\\), \\(\\Phi(\\Lambda)(m) = \\Lambda(\\pi(m)) = \\Lambda(0) = 0\\), so \\(\\Phi(\\Lambda) \\in M^\\perp\\).

<p><strong>Isometry:</strong> \\(\\|\\Phi(\\Lambda)\\| = \\sup_{\\|x\\| \\leq 1} |\\Lambda(\\pi(x))| \\leq \\|\\Lambda\\| \\cdot \\|\\pi\\| \\leq \\|\\Lambda\\|\\) (since \\(\\|\\pi\\| \\leq 1\\)). Conversely, for any \\([x] \\in X/M\\) with \\(\\|[x]\\| < 1\\), there exists \\(x' \\in [x]\\) with \\(\\|x'\\| < 1\\), so \\(|\\Lambda([x])| = |\\Phi(\\Lambda)(x')| \\leq \\|\\Phi(\\Lambda)\\|\\). Taking supremum gives \\(\\|\\Lambda\\| \\leq \\|\\Phi(\\Lambda)\\|\\).</p>

<p><strong>Surjectivity:</strong> Given \\(f \\in M^\\perp\\), define \\(\\Lambda([x]) = f(x)\\). This is well-defined since \\(x' \\in [x]\\) implies \\(x - x' \\in M\\), so \\(f(x') = f(x) + f(x' - x) = f(x)\\). Then \\(\\Phi(\\Lambda) = f\\). \\(\\square\\)</p>
</div>

<div class="env-block theorem">
<strong>Theorem 10.25 (Subspace-Dual Isometry).</strong> Let \\(M\\) be a closed subspace of a normed space \\(X\\). Then:
\\[M^* \\cong X^* / M^\\perp \\quad \\text{(isometric isomorphism)}.\\]
The isomorphism sends \\([f] \\in X^*/M^\\perp\\) to \\(f|_M \\in M^*\\).
</div>

<div class="env-block proof">
<strong>Proof sketch.</strong> Define \\(\\Psi: X^*/M^\\perp \\to M^*\\) by \\(\\Psi([f]) = f|_M\\). This is well-defined: if \\(f - g \\in M^\\perp\\), then \\(f|_M = g|_M\\). Surjectivity follows from Hahn&ndash;Banach: every \\(g \\in M^*\\) extends to some \\(f \\in X^*\\) with \\(\\|f\\| = \\|g\\|\\), so \\(g = \\Psi([f])\\). The isometry \\(\\|[f]\\|_{X^*/M^\\perp} = \\inf_{h \\in M^\\perp} \\|f + h\\| = \\|f|_M\\|_{M^*}\\) uses Hahn&ndash;Banach to show the infimum is attained. \\(\\square\\)
</div>

<div class="env-block example">
<strong>Example 10.26.</strong> Let \\(X = \\ell^2\\) and \\(M = \\{x \\in \\ell^2 : x_1 = 0\\}\\). Then:
<ul>
<li>\\(M^\\perp = \\{f \\in (\\ell^2)^* \\cong \\ell^2 : \\langle f, x \\rangle = 0 \\text{ for all } x \\in M\\} = \\operatorname{span}(e_1) \\cong \\mathbb{R}\\).</li>
<li>\\(X/M \\cong \\mathbb{R}\\) via \\([x] \\mapsto x_1\\), and \\((X/M)^* \\cong M^\\perp \\cong \\mathbb{R}\\). \\(\\checkmark\\)</li>
<li>\\(M^* \\cong X^*/M^\\perp \\cong \\ell^2 / \\operatorname{span}(e_1)\\), which identifies with the closed subspace \\(\\{y \\in \\ell^2 : y_1 = 0\\} = M\\) itself (self-duality of Hilbert spaces).</li>
</ul>
</div>

<div class="viz-placeholder" data-viz="viz-annihilator">Annihilator in R^3</div>
<div class="viz-placeholder" data-viz="viz-quotient-dual">Quotient-Dual Isometry</div>
            `,
            visualizations: [
                {
                    id: 'viz-annihilator',
                    title: 'Annihilator of a Subspace in R^3',
                    description: 'In R^3 with the Euclidean inner product, M^perp is the orthogonal complement. Drag to rotate the view and see a subspace M and its annihilator.',
                    setup: function(body, controls) {
                        const engine = new VizEngine(body, { width: 560, height: 380, scale: 50 });

                        var angleX = 0.4;
                        var angleZ = 0.6;
                        var subspaceType = 0; // 0: line, 1: plane

                        VizEngine.createSlider(controls, 'Rotate X', -1.5, 1.5, 0.4, 0.05, function(v) { angleX = v; });
                        VizEngine.createSlider(controls, 'Rotate Z', -3.14, 3.14, 0.6, 0.05, function(v) { angleZ = v; });
                        VizEngine.createButton(controls, 'M = line', function() { subspaceType = 0; });
                        VizEngine.createButton(controls, 'M = plane', function() { subspaceType = 1; });

                        function project3D(x, y, z) {
                            // Rotate around Z then X
                            var cz = Math.cos(angleZ), sz = Math.sin(angleZ);
                            var x1 = x * cz - y * sz;
                            var y1 = x * sz + y * cz;
                            var z1 = z;
                            var cx = Math.cos(angleX), sx = Math.sin(angleX);
                            var y2 = y1 * cx - z1 * sx;
                            var z2 = y1 * sx + z1 * cx;
                            return [x1, z2]; // project to (x, z) plane
                        }

                        function drawVec3D(x, y, z, color, label) {
                            var p = project3D(x, y, z);
                            engine.drawVector(0, 0, p[0], p[1], color, label);
                        }

                        function draw() {
                            engine.clear();
                            engine.drawGrid();

                            // Draw axes
                            var ax = project3D(3, 0, 0);
                            var ay = project3D(0, 3, 0);
                            var az = project3D(0, 0, 3);
                            engine.drawSegment(0, 0, ax[0], ax[1], engine.colors.axis, 1.5);
                            engine.drawSegment(0, 0, ay[0], ay[1], engine.colors.axis, 1.5);
                            engine.drawSegment(0, 0, az[0], az[1], engine.colors.axis, 1.5);
                            engine.drawText('x', ax[0] + 0.2, ax[1], engine.colors.text, 11);
                            engine.drawText('y', ay[0] + 0.2, ay[1], engine.colors.text, 11);
                            engine.drawText('z', az[0] + 0.2, az[1], engine.colors.text, 11);

                            if (subspaceType === 0) {
                                // M = span{(1,0,0)} = x-axis
                                // M^perp = {f: f(e1)=0} = span{e2,e3} = yz-plane
                                var p1 = project3D(3, 0, 0);
                                var p2 = project3D(-3, 0, 0);
                                engine.drawSegment(p1[0], p1[1], p2[0], p2[1], engine.colors.blue, 3);
                                engine.drawText('M (line)', p1[0] + 0.3, p1[1] + 0.3, engine.colors.blue, 12);

                                // Draw M^perp plane (yz-plane)
                                var corners = [
                                    project3D(0, -2, -2),
                                    project3D(0, 2, -2),
                                    project3D(0, 2, 2),
                                    project3D(0, -2, 2)
                                ];
                                var ctx = engine.ctx;
                                ctx.fillStyle = engine.colors.orange + '33';
                                ctx.beginPath();
                                var sc = engine.toScreen(corners[0][0], corners[0][1]);
                                ctx.moveTo(sc[0], sc[1]);
                                for (var i = 1; i < 4; i++) {
                                    sc = engine.toScreen(corners[i][0], corners[i][1]);
                                    ctx.lineTo(sc[0], sc[1]);
                                }
                                ctx.closePath();
                                ctx.fill();
                                ctx.strokeStyle = engine.colors.orange;
                                ctx.lineWidth = 1;
                                ctx.stroke();

                                engine.screenText('M = span{e\u2081} (line)', 10, 18, engine.colors.blue, 13, 'left');
                                engine.screenText('M\u22A5 = span{e\u2082, e\u2083} (plane)', 10, 38, engine.colors.orange, 13, 'left');
                                engine.screenText('dim M + dim M\u22A5 = 1 + 2 = 3 = dim X', 10, 58, engine.colors.text, 11, 'left');
                            } else {
                                // M = span{e1, e2} = xy-plane
                                // M^perp = span{e3} = z-axis
                                var corners2 = [
                                    project3D(-2, -2, 0),
                                    project3D(2, -2, 0),
                                    project3D(2, 2, 0),
                                    project3D(-2, 2, 0)
                                ];
                                var ctx2 = engine.ctx;
                                ctx2.fillStyle = engine.colors.blue + '33';
                                ctx2.beginPath();
                                var sc2 = engine.toScreen(corners2[0][0], corners2[0][1]);
                                ctx2.moveTo(sc2[0], sc2[1]);
                                for (var j = 1; j < 4; j++) {
                                    sc2 = engine.toScreen(corners2[j][0], corners2[j][1]);
                                    ctx2.lineTo(sc2[0], sc2[1]);
                                }
                                ctx2.closePath();
                                ctx2.fill();
                                ctx2.strokeStyle = engine.colors.blue;
                                ctx2.lineWidth = 1;
                                ctx2.stroke();

                                engine.drawText('M (plane)', project3D(1.5, 1.5, 0)[0], project3D(1.5, 1.5, 0)[1], engine.colors.blue, 12);

                                var zp = project3D(0, 0, 3);
                                var zn = project3D(0, 0, -3);
                                engine.drawSegment(zp[0], zp[1], zn[0], zn[1], engine.colors.orange, 3);
                                engine.drawText('M\u22A5', zp[0] + 0.3, zp[1] + 0.3, engine.colors.orange, 12);

                                engine.screenText('M = span{e\u2081, e\u2082} (plane)', 10, 18, engine.colors.blue, 13, 'left');
                                engine.screenText('M\u22A5 = span{e\u2083} (line)', 10, 38, engine.colors.orange, 13, 'left');
                                engine.screenText('dim M + dim M\u22A5 = 2 + 1 = 3 = dim X', 10, 58, engine.colors.text, 11, 'left');
                            }
                        }

                        engine.animate(draw);
                        return engine;
                    }
                },
                {
                    id: 'viz-quotient-dual',
                    title: 'Quotient-Dual Isometry (X/M)* = M^perp',
                    description: 'Visualize the isometric isomorphism (X/M)* = M^perp. A functional on the quotient X/M corresponds to a functional on X that vanishes on M.',
                    setup: function(body, controls) {
                        const engine = new VizEngine(body, { width: 560, height: 380, scale: 40 });

                        var mAngle = Math.PI / 4;
                        VizEngine.createSlider(controls, 'M direction', 0, 3.14, 0.785, 0.05, function(v) { mAngle = v; });

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // M is a line through origin at mAngle in R^2
                            var mx = Math.cos(mAngle);
                            var my = Math.sin(mAngle);

                            // Draw M (subspace)
                            engine.drawLine(-5 * mx, -5 * my, 5 * mx, 5 * my, engine.colors.blue, 2.5);
                            engine.drawText('M', 4 * mx + 0.3, 4 * my + 0.3, engine.colors.blue, 14);

                            // M^perp direction (perpendicular)
                            var px = -my;
                            var py = mx;

                            // Draw M^perp (annihilator direction)
                            engine.drawLine(-5 * px, -5 * py, 5 * px, 5 * py, engine.colors.orange, 2.5);
                            engine.drawText('M\u22A5', 4 * px + 0.3, 4 * py + 0.3, engine.colors.orange, 14);

                            // Show a coset: [x] = x + M
                            var testX = 2 * px;
                            var testY = 2 * py;
                            engine.drawLine(testX - 5 * mx, testY - 5 * my, testX + 5 * mx, testY + 5 * my, engine.colors.teal, 1.5, true);
                            engine.drawPoint(testX, testY, engine.colors.teal, '[x]', 5);

                            // Show a functional f in M^perp
                            var fScale = 1.5;
                            engine.drawVector(0, 0, fScale * px, fScale * py, engine.colors.orange, 'f \u2208 M\u22A5');

                            // Show that f acts on coset representatives
                            // f(x) = f_perp . x = fScale * (px * testX + py * testY)
                            var fVal = fScale * (px * testX + py * testY);

                            engine.screenText('M = span{(' + mx.toFixed(2) + ', ' + my.toFixed(2) + ')}', 10, 18, engine.colors.blue, 12, 'left');
                            engine.screenText('M\u22A5 = span{(' + px.toFixed(2) + ', ' + py.toFixed(2) + ')}', 10, 36, engine.colors.orange, 12, 'left');
                            engine.screenText('f \u2208 M\u22A5 acts on X/M:', 10, 58, engine.colors.white, 12, 'left');
                            engine.screenText('f(x) = ' + fVal.toFixed(2) + ' (constant on coset [x])', 10, 76, engine.colors.yellow, 12, 'left');

                            // Show (X/M)* = M^perp visually
                            engine.screenText('(X/M)* \u2245 M\u22A5', engine.width - 10, 18, engine.colors.purple, 14, 'right');
                            engine.screenText('M* \u2245 X*/M\u22A5', engine.width - 10, 38, engine.colors.green, 14, 'right');
                        }

                        engine.animate(draw);
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X = \\ell^2\\) and \\(M = \\{x \\in \\ell^2 : x_1 = x_2 = 0\\}\\). Determine \\(M^\\perp\\), \\((X/M)^*\\), and verify the isomorphism \\((X/M)^* \\cong M^\\perp\\).',
                    hint: 'By self-duality of \\(\\ell^2\\), \\(M^\\perp\\) corresponds to the orthogonal complement of \\(M\\) in \\(\\ell^2\\). The quotient \\(X/M\\) is 2-dimensional.',
                    solution: 'Under the identification \\((\\ell^2)^* \\cong \\ell^2\\), we have \\(M^\\perp = \\{y \\in \\ell^2 : \\sum y_n x_n = 0 \\text{ for all } x \\text{ with } x_1 = x_2 = 0\\}\\). This means \\(y_n = 0\\) for \\(n \\geq 3\\), so \\(M^\\perp = \\operatorname{span}\\{e_1, e_2\\} \\cong \\mathbb{R}^2\\). The quotient \\(X/M \\cong \\mathbb{R}^2\\) via \\([x] \\mapsto (x_1, x_2)\\). So \\((X/M)^* \\cong (\\mathbb{R}^2)^* \\cong \\mathbb{R}^2 \\cong M^\\perp\\). The isomorphism sends \\(\\Lambda \\in (X/M)^*\\) to \\(f = \\Lambda \\circ \\pi \\in M^\\perp\\): if \\(\\Lambda([x]) = a_1 x_1 + a_2 x_2\\), then \\(f(x) = a_1 x_1 + a_2 x_2\\), corresponding to \\((a_1, a_2, 0, 0, \\ldots) \\in M^\\perp\\).'
                },
                {
                    question: 'Prove that for any closed subspace \\(M\\) of \\(X\\), \\(M = {}^\\perp(M^\\perp)\\).',
                    hint: 'The inclusion \\(M \\subseteq {}^\\perp(M^\\perp)\\) is immediate. For the reverse, use Hahn-Banach: if \\(x \\notin M\\), separate \\(x\\) from \\(M\\).',
                    solution: 'If \\(x \\in M\\) and \\(f \\in M^\\perp\\), then \\(f(x) = 0\\) by definition, so \\(x \\in {}^\\perp(M^\\perp)\\). For the reverse, suppose \\(x_0 \\notin M\\). Since \\(M\\) is closed, \\(d = \\operatorname{dist}(x_0, M) > 0\\). By the Hahn&ndash;Banach theorem, there exists \\(f \\in X^*\\) with \\(f|_M = 0\\) and \\(f(x_0) = d > 0\\). (Specifically, define \\(g\\) on \\(M + \\mathbb{K}x_0\\) by \\(g(m + \\lambda x_0) = \\lambda d\\) and extend.) Then \\(f \\in M^\\perp\\) but \\(f(x_0) \\neq 0\\), so \\(x_0 \\notin {}^\\perp(M^\\perp)\\). This shows \\({}^\\perp(M^\\perp) \\subseteq M\\).'
                },
                {
                    question: 'Let \\(X = C[0,1]\\) and \\(M = \\{f \\in C[0,1] : f(0) = f(1) = 0\\}\\). Describe \\(M^\\perp \\subseteq X^* \\cong \\mathcal{M}([0,1])\\) and identify \\((X/M)^*\\).',
                    hint: 'A measure \\(\\mu \\in M^\\perp\\) must satisfy \\(\\int f \\, d\\mu = 0\\) for all continuous \\(f\\) vanishing at 0 and 1. What measures have this property?',
                    solution: 'A measure \\(\\mu \\in M^\\perp\\) satisfies \\(\\int f \\, d\\mu = 0\\) for all \\(f \\in C[0,1]\\) with \\(f(0) = f(1) = 0\\). By the Riesz&ndash;Markov theorem, \\(\\mu\\) must be supported on \\(\\{0, 1\\}\\). So \\(M^\\perp = \\{a\\delta_0 + b\\delta_1 : a, b \\in \\mathbb{R}\\} \\cong \\mathbb{R}^2\\). The quotient map \\(X \\to X/M\\) sends \\(f \\mapsto (f(0), f(1))\\), giving \\(X/M \\cong \\mathbb{R}^2\\) with norm \\(\\|(c_0, c_1)\\| = \\inf\\{\\|f\\|_\\infty : f(0) = c_0, f(1) = c_1\\} = \\max(|c_0|, |c_1|)\\). Thus \\((X/M)^* \\cong (\\mathbb{R}^2, \\|\\cdot\\|_1) \\cong M^\\perp\\) with \\(\\|a\\delta_0 + b\\delta_1\\| = |a| + |b|\\).'
                },
                {
                    question: 'Show that for a closed subspace \\(M\\) of a normed space \\(X\\), \\(\\dim M^\\perp = \\operatorname{codim} M\\) when \\(M\\) has finite codimension.',
                    hint: 'If \\(\\operatorname{codim} M = n\\), then \\(X/M\\) is \\(n\\)-dimensional. Use the isomorphism \\((X/M)^* \\cong M^\\perp\\).',
                    solution: 'If \\(M\\) has finite codimension \\(n\\), then \\(X/M\\) is an \\(n\\)-dimensional normed space. By Theorem 10.24, \\((X/M)^* \\cong M^\\perp\\) isometrically. Since \\(X/M\\) is finite-dimensional, \\(\\dim(X/M)^* = \\dim(X/M) = n\\). Therefore \\(\\dim M^\\perp = n = \\operatorname{codim} M\\). In particular, if \\(M\\) is a closed hyperplane (codimension 1), then \\(M^\\perp\\) is 1-dimensional, confirming that \\(M = \\ker f\\) for some \\(f \\in X^*\\) (unique up to scalar multiple).'
                }
            ]
        }
    ]
});
