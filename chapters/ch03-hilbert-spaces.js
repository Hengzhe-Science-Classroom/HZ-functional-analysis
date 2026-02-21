window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch03',
    number: 3,
    title: 'Inner Product Spaces & Hilbert Spaces',
    subtitle: 'Geometry in infinite dimensions',
    sections: [
        // ===== SECTION 1: Inner Products =====
        {
            id: 'inner-products',
            title: 'Inner Products',
            content: `
                <h2>Inner Product Spaces</h2>

                <p>An inner product endows a vector space with geometric structure: lengths, angles, and orthogonality. This section develops the algebraic foundations and the fundamental inequalities that govern inner product spaces.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.1 (Inner Product)</div>
                    <div class="env-body">
                        <p>Let \\(V\\) be a vector space over \\(\\mathbb{F}\\) (where \\(\\mathbb{F} = \\mathbb{R}\\) or \\(\\mathbb{C}\\)). An <strong>inner product</strong> on \\(V\\) is a function \\(\\langle \\cdot, \\cdot \\rangle: V \\times V \\to \\mathbb{F}\\) satisfying:</p>
                        <ol>
                            <li><strong>Conjugate symmetry:</strong> \\(\\langle x, y \\rangle = \\overline{\\langle y, x \\rangle}\\) for all \\(x, y \\in V\\).</li>
                            <li><strong>Linearity in the first argument:</strong> \\(\\langle \\alpha x + \\beta y, z \\rangle = \\alpha \\langle x, z \\rangle + \\beta \\langle y, z \\rangle\\).</li>
                            <li><strong>Positive definiteness:</strong> \\(\\langle x, x \\rangle \\ge 0\\) with equality iff \\(x = 0\\).</li>
                        </ol>
                        <p>A vector space equipped with an inner product is called an <strong>inner product space</strong> (or pre-Hilbert space).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Convention)</div>
                    <div class="env-body">
                        <p>We adopt the physics convention: linearity in the <em>first</em> argument, conjugate-linearity in the second. Some texts (e.g., Reed &amp; Simon) use the opposite convention. The inner product is <strong>sesquilinear</strong>: \\(\\langle x, \\alpha y \\rangle = \\bar{\\alpha} \\langle x, y \\rangle\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.2</div>
                    <div class="env-body">
                        <p><strong>(a)</strong> On \\(\\mathbb{R}^n\\): \\(\\langle x, y \\rangle = \\sum_{i=1}^n x_i y_i\\) (the dot product).</p>
                        <p><strong>(b)</strong> On \\(\\mathbb{C}^n\\): \\(\\langle x, y \\rangle = \\sum_{i=1}^n x_i \\overline{y_i}\\).</p>
                        <p><strong>(c)</strong> On \\(L^2[0,1]\\): \\(\\langle f, g \\rangle = \\int_0^1 f(t)\\overline{g(t)}\\, dt\\).</p>
                        <p><strong>(d)</strong> On \\(\\ell^2\\): \\(\\langle x, y \\rangle = \\sum_{n=1}^\\infty x_n \\overline{y_n}\\).</p>
                    </div>
                </div>

                <p>Every inner product induces a norm via \\(\\|x\\| = \\sqrt{\\langle x, x \\rangle}\\). The key question: when does a norm come from an inner product? The answer is given by the parallelogram law.</p>

                <div class="viz-placeholder" data-viz="inner-product-r2"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.3 (Cauchy&ndash;Schwarz Inequality)</div>
                    <div class="env-body">
                        <p>For all \\(x, y\\) in an inner product space,</p>
                        <p>\\[|\\langle x, y \\rangle| \\le \\|x\\| \\cdot \\|y\\|\\]</p>
                        <p>with equality if and only if \\(x\\) and \\(y\\) are linearly dependent.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>If \\(y = 0\\), both sides vanish. Assume \\(y \\neq 0\\). For any \\(\\lambda \\in \\mathbb{F}\\),</p>
                        <p>\\[0 \\le \\|x - \\lambda y\\|^2 = \\|x\\|^2 - \\lambda \\langle y, x \\rangle - \\bar{\\lambda} \\langle x, y \\rangle + |\\lambda|^2 \\|y\\|^2.\\]</p>
                        <p>Choose \\(\\lambda = \\langle x, y \\rangle / \\|y\\|^2\\). Then:</p>
                        <p>\\[0 \\le \\|x\\|^2 - \\frac{|\\langle x, y \\rangle|^2}{\\|y\\|^2}\\]</p>
                        <p>which gives \\(|\\langle x, y \\rangle|^2 \\le \\|x\\|^2 \\|y\\|^2\\). Equality holds iff \\(x = \\lambda y\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="cauchy-schwarz-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.4 (Parallelogram Law)</div>
                    <div class="env-body">
                        <p>In any inner product space,</p>
                        <p>\\[\\|x + y\\|^2 + \\|x - y\\|^2 = 2(\\|x\\|^2 + \\|y\\|^2).\\]</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Expand both sides using \\(\\|u\\|^2 = \\langle u, u \\rangle\\):</p>
                        <p>\\[\\|x + y\\|^2 = \\|x\\|^2 + \\langle x, y \\rangle + \\langle y, x \\rangle + \\|y\\|^2\\]</p>
                        <p>\\[\\|x - y\\|^2 = \\|x\\|^2 - \\langle x, y \\rangle - \\langle y, x \\rangle + \\|y\\|^2\\]</p>
                        <p>Adding yields the result.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.5 (Jordan&ndash;von Neumann)</div>
                    <div class="env-body">
                        <p>A norm on a vector space arises from an inner product if and only if it satisfies the parallelogram law. In that case, the inner product is recovered by the <strong>polarization identity</strong>:</p>
                        <p>\\[\\langle x, y \\rangle = \\frac{1}{4}\\bigl(\\|x+y\\|^2 - \\|x-y\\|^2 + i\\|x+iy\\|^2 - i\\|x-iy\\|^2\\bigr)\\]</p>
                        <p>(over \\(\\mathbb{R}\\), only the first two terms appear, divided by 4).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The parallelogram law fails in \\(L^p[0,1]\\) for \\(p \\neq 2\\). Thus among the \\(L^p\\) spaces, only \\(L^2\\) is an inner product space. Similarly, among the \\(\\ell^p\\) spaces, only \\(\\ell^2\\) carries an inner product.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'inner-product-r2',
                    title: 'Inner Product in R^2',
                    description: 'Drag vectors to explore inner product, angle, and projection',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { scale: 45 });
                        var u = engine.addDraggable('u', 3, 2, engine.colors.blue, 8);
                        var v = engine.addDraggable('v', 1, 3, engine.colors.teal, 8);

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();
                            var dot = u.x * v.x + u.y * v.y;
                            var uLen = Math.sqrt(u.x * u.x + u.y * u.y);
                            var vLen = Math.sqrt(v.x * v.x + v.y * v.y);
                            var cosTheta = (uLen > 0.01 && vLen > 0.01) ? dot / (uLen * vLen) : 0;
                            cosTheta = Math.max(-1, Math.min(1, cosTheta));
                            var angle = Math.acos(cosTheta) * 180 / Math.PI;

                            // draw projection of u onto v
                            if (vLen > 0.01) {
                                var projScale = dot / (vLen * vLen);
                                var px = v.x * projScale;
                                var py = v.y * projScale;
                                engine.drawSegment(u.x, u.y, px, py, engine.colors.yellow, 1, true);
                                engine.drawVector(0, 0, px, py, engine.colors.yellow, 'proj', 1.5);
                            }

                            // draw angle arc
                            if (uLen > 0.3 && vLen > 0.3) {
                                var arcR = 0.8;
                                var aU = Math.atan2(u.y, u.x);
                                var aV = Math.atan2(v.y, v.x);
                                var ctx = engine.ctx;
                                var su = engine.toScreen(0, 0);
                                ctx.strokeStyle = engine.colors.orange;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                var startA = Math.min(aU, aV);
                                var endA = Math.max(aU, aV);
                                if (endA - startA > Math.PI) { var tmp = startA; startA = endA; endA = tmp + 2 * Math.PI; }
                                ctx.arc(su[0], su[1], arcR * engine.scale, -endA, -startA);
                                ctx.stroke();
                            }

                            engine.drawVector(0, 0, u.x, u.y, engine.colors.blue, 'u');
                            engine.drawVector(0, 0, v.x, v.y, engine.colors.teal, 'v');
                            engine.drawDraggables();

                            engine.screenText('<u, v> = ' + dot.toFixed(2), 10, 20, engine.colors.white, 13, 'left', 'top');
                            engine.screenText('||u|| = ' + uLen.toFixed(2) + ',  ||v|| = ' + vLen.toFixed(2), 10, 40, engine.colors.text, 12, 'left', 'top');
                            engine.screenText('angle = ' + angle.toFixed(1) + '\u00B0', 10, 58, engine.colors.orange, 12, 'left', 'top');
                            engine.screenText('cos \u03B8 = ' + cosTheta.toFixed(3), 10, 76, engine.colors.text, 12, 'left', 'top');
                        }

                        engine.animate(function() { draw(); });
                        draw();
                        return engine;
                    }
                },
                {
                    id: 'cauchy-schwarz-viz',
                    title: 'Cauchy-Schwarz Inequality',
                    description: 'Visualize |<u,v>| <= ||u|| ||v|| as you drag vectors',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { scale: 45 });
                        var u = engine.addDraggable('u', 3, 1, engine.colors.blue, 8);
                        var v = engine.addDraggable('v', 2, 3, engine.colors.teal, 8);

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            var dot = u.x * v.x + u.y * v.y;
                            var uLen = Math.sqrt(u.x * u.x + u.y * u.y);
                            var vLen = Math.sqrt(v.x * v.x + v.y * v.y);
                            var lhs = Math.abs(dot);
                            var rhs = uLen * vLen;
                            var ratio = rhs > 0.001 ? lhs / rhs : 0;

                            engine.drawVector(0, 0, u.x, u.y, engine.colors.blue, 'u');
                            engine.drawVector(0, 0, v.x, v.y, engine.colors.teal, 'v');
                            engine.drawDraggables();

                            // bar chart for LHS vs RHS
                            var barX = engine.width - 140;
                            var barW = 30;
                            var barMaxH = 120;
                            var barBase = engine.height - 30;
                            var maxVal = Math.max(lhs, rhs, 0.1);
                            var h1 = (lhs / maxVal) * barMaxH;
                            var h2 = (rhs / maxVal) * barMaxH;
                            var ctx = engine.ctx;

                            ctx.fillStyle = engine.colors.purple;
                            ctx.fillRect(barX, barBase - h1, barW, h1);
                            ctx.fillStyle = engine.colors.green;
                            ctx.fillRect(barX + barW + 10, barBase - h2, barW, h2);

                            ctx.fillStyle = engine.colors.white;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('|<u,v>|', barX + barW / 2, barBase + 14);
                            ctx.fillText(lhs.toFixed(2), barX + barW / 2, barBase - h1 - 5);
                            ctx.fillText('||u||||v||', barX + barW + 10 + barW / 2, barBase + 14);
                            ctx.fillText(rhs.toFixed(2), barX + barW + 10 + barW / 2, barBase - h2 - 5);

                            var ineqColor = ratio > 0.999 ? engine.colors.yellow : engine.colors.green;
                            engine.screenText('|<u,v>| / (||u|| ||v||) = ' + ratio.toFixed(4), 10, 20, ineqColor, 13, 'left', 'top');
                            var label = ratio > 0.999 ? 'EQUALITY (linearly dependent)' : 'STRICT INEQUALITY';
                            engine.screenText(label, 10, 40, ineqColor, 12, 'left', 'top');
                        }

                        engine.animate(function() { draw(); });
                        draw();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Verify that \\(\\langle f, g \\rangle = \\int_0^1 f(t)\\overline{g(t)}\\,dt\\) defines an inner product on \\(C[0,1]\\). Is \\(C[0,1]\\) complete with respect to the induced norm?',
                    hint: 'Check the three axioms. For completeness, consider the sequence \\(f_n(t) = t^n\\) or piecewise linear approximations to discontinuous functions.',
                    solution: 'Conjugate symmetry: \\(\\overline{\\int f\\bar{g}} = \\int \\bar{f}g = \\int g\\bar{f}\\). Linearity is immediate. Positive definiteness: \\(\\int |f|^2 \\ge 0\\) with equality iff \\(f = 0\\) (since \\(f\\) is continuous). However, \\(C[0,1]\\) is NOT complete: consider \\(f_n\\) converging in \\(L^2\\)-norm to a step function, which is not continuous. The completion is \\(L^2[0,1]\\).'
                },
                {
                    question: 'Prove that the norm \\(\\|x\\|_p = (\\sum |x_i|^p)^{1/p}\\) on \\(\\mathbb{R}^2\\) does NOT satisfy the parallelogram law for \\(p \\neq 2\\). Test with \\(x = (1,0)\\) and \\(y = (0,1)\\).',
                    hint: 'Compute \\(\\|x+y\\|_p^2 + \\|x-y\\|_p^2\\) and \\(2(\\|x\\|_p^2 + \\|y\\|_p^2)\\).',
                    solution: 'With \\(x=(1,0), y=(0,1)\\): \\(\\|x+y\\|_p = (1+1)^{1/p} = 2^{1/p}\\), \\(\\|x-y\\|_p = (1+1)^{1/p} = 2^{1/p}\\). LHS = \\(2 \\cdot 2^{2/p}\\). RHS = \\(2(1+1) = 4\\). Equality requires \\(2^{1+2/p} = 4 = 2^2\\), so \\(1 + 2/p = 2\\), giving \\(p = 2\\).'
                },
                {
                    question: 'Use the polarization identity to recover \\(\\langle x, y \\rangle\\) from the norm in \\(\\mathbb{R}^2\\). Verify for \\(x = (1, 2)\\) and \\(y = (3, -1)\\).',
                    hint: 'In the real case: \\(\\langle x, y \\rangle = \\frac{1}{4}(\\|x+y\\|^2 - \\|x-y\\|^2)\\).',
                    solution: 'Direct: \\(\\langle x, y \\rangle = 1 \\cdot 3 + 2 \\cdot (-1) = 1\\). Via polarization: \\(x+y = (4,1)\\), \\(\\|x+y\\|^2 = 17\\). \\(x-y = (-2,3)\\), \\(\\|x-y\\|^2 = 13\\). So \\(\\frac{1}{4}(17 - 13) = 1\\). They agree.'
                }
            ]
        },

        // ===== SECTION 2: Hilbert Spaces =====
        {
            id: 'hilbert-spaces',
            title: 'Hilbert Spaces',
            content: `
                <h2>Hilbert Spaces</h2>

                <p>A Hilbert space is an inner product space that is complete with respect to the induced norm. These are the natural infinite-dimensional generalization of Euclidean space and are central to quantum mechanics, signal processing, and PDE theory.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.6 (Hilbert Space)</div>
                    <div class="env-body">
                        <p>A <strong>Hilbert space</strong> is an inner product space \\((H, \\langle \\cdot, \\cdot \\rangle)\\) that is complete with respect to the norm \\(\\|x\\| = \\sqrt{\\langle x, x \\rangle}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.7 (Key Examples)</div>
                    <div class="env-body">
                        <p><strong>(a) \\(\\ell^2\\):</strong> The space of square-summable sequences \\(x = (x_1, x_2, \\ldots)\\) with \\(\\sum |x_n|^2 < \\infty\\) and inner product \\(\\langle x, y \\rangle = \\sum x_n \\overline{y_n}\\). Completeness follows from the Riesz&ndash;Fischer theorem.</p>
                        <p><strong>(b) \\(L^2[0,1]\\):</strong> Square-integrable functions with \\(\\langle f, g \\rangle = \\int_0^1 f\\bar{g}\\). This is the completion of \\(C[0,1]\\) in the \\(L^2\\)-norm.</p>
                        <p><strong>(c) \\(L^2(\\mathbb{R})\\):</strong> Square-integrable functions on the real line. The Fourier transform is a unitary operator on this space.</p>
                        <p><strong>(d) \\(\\mathbb{C}^n\\):</strong> Finite-dimensional, hence automatically complete.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why Completeness Matters)</div>
                    <div class="env-body">
                        <p>Completeness is essential for the rich geometry of Hilbert spaces. The closest-point property (existence of best approximations in closed convex sets), the Riesz representation theorem, and spectral theory all require completeness. The space \\(C[0,1]\\) with the \\(L^2\\)-inner product is an inner product space but not a Hilbert space.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="l2-space-viz"></div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 3.8</div>
                    <div class="env-body">
                        <p>Every Hilbert space is a Banach space. Every finite-dimensional inner product space is a Hilbert space.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.9 (Closest Point Property)</div>
                    <div class="env-body">
                        <p>Let \\(C\\) be a nonempty closed convex subset of a Hilbert space \\(H\\), and let \\(x \\in H\\). Then there exists a unique \\(y \\in C\\) such that</p>
                        <p>\\[\\|x - y\\| = \\inf_{z \\in C} \\|x - z\\| = d(x, C).\\]</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch)</div>
                    <div class="env-body">
                        <p>Let \\(d = \\inf_{z \\in C} \\|x - z\\|\\) and pick \\((y_n) \\subset C\\) with \\(\\|x - y_n\\| \\to d\\). The parallelogram law gives:</p>
                        <p>\\[\\|y_m - y_n\\|^2 = 2\\|x - y_m\\|^2 + 2\\|x - y_n\\|^2 - \\|2x - y_m - y_n\\|^2\\]</p>
                        <p>Since \\(\\frac{y_m + y_n}{2} \\in C\\) (by convexity), \\(\\|2x - y_m - y_n\\|^2 = 4\\|x - \\frac{y_m+y_n}{2}\\|^2 \\ge 4d^2\\). Thus \\(\\|y_m - y_n\\|^2 \\le 2\\|x-y_m\\|^2 + 2\\|x-y_n\\|^2 - 4d^2 \\to 0\\). So \\((y_n)\\) is Cauchy. By completeness, \\(y_n \\to y \\in C\\) and \\(\\|x - y\\| = d\\). Uniqueness: if \\(y, y'\\) both achieve the infimum, the same parallelogram argument gives \\(\\|y - y'\\| = 0\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="closest-point-viz"></div>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.10 (Orthogonal Complement)</div>
                    <div class="env-body">
                        <p>If \\(M \\subset H\\) is a subset, the <strong>orthogonal complement</strong> is \\(M^\\perp = \\{x \\in H : \\langle x, m \\rangle = 0 \\text{ for all } m \\in M\\}\\). This is always a closed subspace of \\(H\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.11 (Orthogonal Decomposition)</div>
                    <div class="env-body">
                        <p>If \\(M\\) is a closed subspace of a Hilbert space \\(H\\), then \\(H = M \\oplus M^\\perp\\). Every \\(x \\in H\\) has a unique decomposition \\(x = m + m^\\perp\\) with \\(m \\in M\\) and \\(m^\\perp \\in M^\\perp\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'l2-space-viz',
                    title: 'Function Space L^2[0,1]',
                    description: 'Visualize functions as points in an infinite-dimensional space',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { scale: 60, originX: 80, originY: null });
                        engine.originY = engine.height - 50;

                        var nCoeffs = 5;
                        var coeffsA = [0.5, 0.8, -0.3, 0.2, -0.1];
                        var coeffsB = [0.3, -0.5, 0.6, 0.1, 0.4];

                        var tSlider = VizEngine.createSlider(controls, 'Blend t', 0, 1, 0.5, 0.01, function() { draw(); });

                        function evalFunc(coeffs, x) {
                            var val = coeffs[0];
                            for (var k = 1; k < coeffs.length; k++) {
                                val += coeffs[k] * Math.sin(k * Math.PI * x);
                            }
                            return val;
                        }

                        function draw() {
                            engine.clear();
                            var ctx = engine.ctx;
                            var t = parseFloat(tSlider.value);
                            var blended = coeffsA.map(function(a, i) { return a * (1 - t) + coeffsB[i] * t; });

                            // axes
                            ctx.strokeStyle = engine.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(80, engine.height - 50);
                            ctx.lineTo(engine.width - 20, engine.height - 50);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(80, 10);
                            ctx.lineTo(80, engine.height - 50);
                            ctx.stroke();

                            ctx.fillStyle = engine.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('0', 80, engine.height - 35);
                            ctx.fillText('1', engine.width - 20, engine.height - 35);
                            ctx.textAlign = 'right';
                            ctx.fillText('0', 72, engine.height - 48);

                            var plotW = engine.width - 100;
                            var plotH = engine.height - 80;
                            var baseY = engine.height - 50;

                            function plotFunc(coeffs, color, lw) {
                                ctx.strokeStyle = color;
                                ctx.lineWidth = lw;
                                ctx.beginPath();
                                for (var i = 0; i <= 200; i++) {
                                    var x = i / 200;
                                    var y = evalFunc(coeffs, x);
                                    var px = 80 + x * plotW;
                                    var py = baseY - y * plotH * 0.4;
                                    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                                }
                                ctx.stroke();
                            }

                            plotFunc(coeffsA, engine.colors.blue, 1.5);
                            plotFunc(coeffsB, engine.colors.teal, 1.5);
                            plotFunc(blended, engine.colors.orange, 2.5);

                            // L2 norms
                            function l2Norm(coeffs) {
                                var s = 0;
                                for (var i = 0; i <= 500; i++) {
                                    var x = i / 500;
                                    var v = evalFunc(coeffs, x);
                                    s += v * v / 500;
                                }
                                return Math.sqrt(s);
                            }

                            var nA = l2Norm(coeffsA);
                            var nB = l2Norm(coeffsB);
                            var nBlend = l2Norm(blended);

                            engine.screenText('f (blue): ||f|| = ' + nA.toFixed(3), 10, 15, engine.colors.blue, 12, 'left', 'top');
                            engine.screenText('g (teal): ||g|| = ' + nB.toFixed(3), 10, 33, engine.colors.teal, 12, 'left', 'top');
                            engine.screenText('(1-t)f + tg: ||h|| = ' + nBlend.toFixed(3), 10, 51, engine.colors.orange, 12, 'left', 'top');
                        }

                        draw();
                        return engine;
                    }
                },
                {
                    id: 'closest-point-viz',
                    title: 'Closest Point in a Convex Set',
                    description: 'Drag the point to see the unique closest point on a closed convex set',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { scale: 45 });
                        var pt = engine.addDraggable('pt', 3, 3, engine.colors.orange, 8);

                        // convex set: a disk centered at (-1, 0) with radius 2
                        var cx = -1, cy = 0, cr = 2;

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // draw the convex set (filled disk)
                            engine.drawCircle(cx, cy, cr, engine.colors.blue + '22', engine.colors.blue, 1.5);
                            engine.drawText('C', cx, cy, engine.colors.blue, 14);

                            var dx = pt.x - cx;
                            var dy = pt.y - cy;
                            var dist = Math.sqrt(dx * dx + dy * dy);

                            var closestX, closestY;
                            if (dist <= cr) {
                                closestX = pt.x;
                                closestY = pt.y;
                            } else {
                                closestX = cx + dx / dist * cr;
                                closestY = cy + dy / dist * cr;
                            }

                            engine.drawSegment(pt.x, pt.y, closestX, closestY, engine.colors.yellow, 2, true);
                            engine.drawPoint(closestX, closestY, engine.colors.green, 'y*', 6);
                            engine.drawPoint(pt.x, pt.y, engine.colors.orange, 'x', 6);
                            engine.drawDraggables();

                            var d = Math.sqrt((pt.x - closestX) * (pt.x - closestX) + (pt.y - closestY) * (pt.y - closestY));
                            engine.screenText('d(x, C) = ' + d.toFixed(3), 10, 20, engine.colors.white, 13, 'left', 'top');
                            engine.screenText(dist <= cr ? 'x is inside C' : 'y* is the unique closest point', 10, 40, engine.colors.green, 12, 'left', 'top');
                        }

                        engine.animate(function() { draw(); });
                        draw();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that \\(\\ell^2\\) is complete. (Outline: if \\((x^{(n)})\\) is Cauchy in \\(\\ell^2\\), show each coordinate converges, then prove the limit is in \\(\\ell^2\\) and convergence is in norm.)',
                    hint: 'For each fixed \\(k\\), \\(|x_k^{(m)} - x_k^{(n)}| \\le \\|x^{(m)} - x^{(n)}\\|_{\\ell^2}\\), so coordinate sequences are Cauchy in \\(\\mathbb{F}\\).',
                    solution: 'Since \\((x^{(n)})\\) is Cauchy in \\(\\ell^2\\), for each \\(k\\), \\((x_k^{(n)})_n\\) is Cauchy in \\(\\mathbb{F}\\). Let \\(x_k = \\lim_n x_k^{(n)}\\). Fix \\(\\varepsilon > 0\\), choose \\(N\\) so that \\(\\|x^{(m)}-x^{(n)}\\|^2 < \\varepsilon^2\\) for \\(m,n \\ge N\\). Then for any finite \\(K\\), \\(\\sum_{k=1}^K |x_k^{(m)}-x_k^{(n)}|^2 < \\varepsilon^2\\). Letting \\(m \\to \\infty\\): \\(\\sum_{k=1}^K |x_k - x_k^{(n)}|^2 \\le \\varepsilon^2\\). Since \\(K\\) is arbitrary, \\(x - x^{(n)} \\in \\ell^2\\), hence \\(x \\in \\ell^2\\), and \\(\\|x - x^{(n)}\\| \\le \\varepsilon\\).'
                },
                {
                    question: 'Let \\(M = \\{f \\in L^2[0,1] : \\int_0^1 f(t)\\,dt = 0\\}\\). Show that \\(M\\) is a closed subspace and find \\(M^\\perp\\).',
                    hint: 'The map \\(f \\mapsto \\int_0^1 f(t)\\,dt = \\langle f, \\mathbf{1} \\rangle\\) is a continuous linear functional.',
                    solution: '\\(M = \\ker(\\varphi)\\) where \\(\\varphi(f) = \\langle f, \\mathbf{1} \\rangle\\) is a continuous linear functional, so \\(M\\) is closed. By the orthogonal decomposition, \\(M^\\perp = \\operatorname{span}\\{\\mathbf{1}\\}\\) (the constant functions), since \\(f \\in M^\\perp\\) iff \\(\\langle f, g \\rangle = 0\\) for all \\(g\\) with \\(\\int g = 0\\), which forces \\(f\\) to be constant a.e.'
                },
                {
                    question: 'Prove that in a Hilbert space, \\(x_n \\rightharpoonup x\\) (weak convergence) and \\(\\|x_n\\| \\to \\|x\\|\\) imply \\(x_n \\to x\\) (strong convergence).',
                    hint: 'Expand \\(\\|x_n - x\\|^2 = \\|x_n\\|^2 - 2\\operatorname{Re}\\langle x_n, x \\rangle + \\|x\\|^2\\).',
                    solution: '\\(\\|x_n - x\\|^2 = \\|x_n\\|^2 - 2\\operatorname{Re}\\langle x_n, x \\rangle + \\|x\\|^2\\). Weak convergence gives \\(\\langle x_n, x \\rangle \\to \\langle x, x \\rangle = \\|x\\|^2\\). Combined with \\(\\|x_n\\| \\to \\|x\\|\\): \\(\\|x_n - x\\|^2 \\to \\|x\\|^2 - 2\\|x\\|^2 + \\|x\\|^2 = 0\\).'
                }
            ]
        },

        // ===== SECTION 3: Orthonormal Systems =====
        {
            id: 'orthonormal-systems',
            title: 'Orthonormal Systems',
            content: `
                <h2>Orthonormal Systems</h2>

                <p>Orthonormal sets bring the power of coordinate systems to infinite-dimensional spaces. The Gram&ndash;Schmidt process constructs them, and Bessel's inequality controls the size of Fourier coefficients.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.12 (Orthonormal System)</div>
                    <div class="env-body">
                        <p>A set \\(\\{e_\\alpha\\}_{\\alpha \\in A}\\) in an inner product space is <strong>orthonormal</strong> if</p>
                        <p>\\[\\langle e_\\alpha, e_\\beta \\rangle = \\delta_{\\alpha\\beta} = \\begin{cases} 1 & \\alpha = \\beta \\\\ 0 & \\alpha \\neq \\beta \\end{cases}\\]</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.13</div>
                    <div class="env-body">
                        <p><strong>(a)</strong> Standard basis \\(e_1 = (1,0,0,\\ldots), e_2 = (0,1,0,\\ldots), \\ldots\\) in \\(\\ell^2\\).</p>
                        <p><strong>(b)</strong> Trigonometric system \\(\\{e^{2\\pi i n t}\\}_{n \\in \\mathbb{Z}}\\) in \\(L^2[0,1]\\).</p>
                        <p><strong>(c)</strong> Normalized Legendre polynomials in \\(L^2[-1,1]\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.14 (Gram&ndash;Schmidt Orthogonalization)</div>
                    <div class="env-body">
                        <p>Given a linearly independent set \\(\\{x_1, x_2, \\ldots\\}\\) in an inner product space, there exists an orthonormal set \\(\\{e_1, e_2, \\ldots\\}\\) with \\(\\operatorname{span}(e_1, \\ldots, e_n) = \\operatorname{span}(x_1, \\ldots, x_n)\\) for each \\(n\\). The construction is:</p>
                        <p>\\[\\tilde{e}_1 = x_1, \\quad e_1 = \\frac{\\tilde{e}_1}{\\|\\tilde{e}_1\\|}\\]</p>
                        <p>\\[\\tilde{e}_n = x_n - \\sum_{k=1}^{n-1} \\langle x_n, e_k \\rangle e_k, \\quad e_n = \\frac{\\tilde{e}_n}{\\|\\tilde{e}_n\\|}\\]</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By induction. Base: \\(e_1 = x_1/\\|x_1\\|\\) has norm 1. Step: \\(\\tilde{e}_n = x_n - \\sum_{k=1}^{n-1} \\langle x_n, e_k \\rangle e_k\\) is the component of \\(x_n\\) orthogonal to \\(\\operatorname{span}(e_1,\\ldots,e_{n-1})\\). Indeed, for \\(j < n\\):</p>
                        <p>\\[\\langle \\tilde{e}_n, e_j \\rangle = \\langle x_n, e_j \\rangle - \\langle x_n, e_j \\rangle = 0.\\]</p>
                        <p>Since \\(x_n \\notin \\operatorname{span}(x_1,\\ldots,x_{n-1})\\) (linear independence), \\(\\tilde{e}_n \\neq 0\\), so \\(e_n = \\tilde{e}_n/\\|\\tilde{e}_n\\|\\) is well-defined. The span condition holds because \\(x_n \\in \\operatorname{span}(e_1,\\ldots,e_n)\\) and vice versa.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="gram-schmidt-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.15 (Bessel's Inequality)</div>
                    <div class="env-body">
                        <p>If \\(\\{e_n\\}\\) is an orthonormal set in \\(H\\) and \\(x \\in H\\), then</p>
                        <p>\\[\\sum_{n} |\\langle x, e_n \\rangle|^2 \\le \\|x\\|^2.\\]</p>
                        <p>The numbers \\(\\hat{x}_n = \\langle x, e_n \\rangle\\) are the <strong>Fourier coefficients</strong> of \\(x\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>For any finite subset \\(F\\), let \\(s_F = \\sum_{n \\in F} \\langle x, e_n \\rangle e_n\\). Then:</p>
                        <p>\\[0 \\le \\|x - s_F\\|^2 = \\|x\\|^2 - 2\\operatorname{Re}\\sum_{n \\in F} |\\langle x, e_n \\rangle|^2 + \\sum_{n \\in F} |\\langle x, e_n \\rangle|^2 = \\|x\\|^2 - \\sum_{n \\in F} |\\langle x, e_n \\rangle|^2.\\]</p>
                        <p>Thus \\(\\sum_{n \\in F} |\\langle x, e_n \\rangle|^2 \\le \\|x\\|^2\\) for every finite \\(F\\), hence the full sum converges and satisfies the inequality.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="bessel-viz"></div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 3.16</div>
                    <div class="env-body">
                        <p>For any \\(x\\) in an inner product space with orthonormal set \\(\\{e_n\\}\\), at most countably many Fourier coefficients \\(\\langle x, e_n \\rangle\\) are nonzero.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'gram-schmidt-viz',
                    title: 'Gram-Schmidt Process',
                    description: 'Watch Gram-Schmidt orthogonalize 3 vectors step by step',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { scale: 50 });

                        var v1 = [3, 1];
                        var v2 = [2, 3];
                        var v3 = [1, -1]; // only 2D, we show the process in 2D with 2 vectors + a bonus

                        var step = 0;
                        var animT = 0;
                        var animating = false;

                        var stepBtn = VizEngine.createButton(controls, 'Next Step', function() {
                            if (step < 4) { step++; animT = 0; animating = true; }
                        });
                        var resetBtn = VizEngine.createButton(controls, 'Reset', function() {
                            step = 0; animT = 0; animating = false;
                        });

                        // compute Gram-Schmidt
                        var e1Len = Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1]);
                        var e1 = [v1[0] / e1Len, v1[1] / e1Len];
                        var proj21 = v2[0] * e1[0] + v2[1] * e1[1];
                        var tilde2 = [v2[0] - proj21 * e1[0], v2[1] - proj21 * e1[1]];
                        var e2Len = Math.sqrt(tilde2[0] * tilde2[0] + tilde2[1] * tilde2[1]);
                        var e2 = e2Len > 0.001 ? [tilde2[0] / e2Len, tilde2[1] / e2Len] : [0, 0];

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // Step 0: original vectors
                            engine.drawVector(0, 0, v1[0], v1[1], engine.colors.blue, 'v1');
                            engine.drawVector(0, 0, v2[0], v2[1], engine.colors.teal, 'v2');

                            if (step >= 1) {
                                // Step 1: normalize v1 to get e1
                                var t1 = Math.min(animT, 1);
                                var showE1 = [v1[0] + (e1[0] - v1[0]) * t1 * e1Len / Math.max(VizEngine.vecLen(v1), 0.01),
                                              v1[1] + (e1[1] - v1[1]) * t1 * e1Len / Math.max(VizEngine.vecLen(v1), 0.01)];
                                // actually just show e1
                                engine.drawVector(0, 0, e1[0] * 2, e1[1] * 2, engine.colors.orange, 'e1', 2.5);
                            }

                            if (step >= 2) {
                                // Step 2: show projection of v2 onto e1
                                var projVec = [proj21 * e1[0], proj21 * e1[1]];
                                engine.drawVector(0, 0, projVec[0], projVec[1], engine.colors.yellow, 'proj', 1.5);
                                engine.drawSegment(v2[0], v2[1], projVec[0], projVec[1], engine.colors.yellow, 1, true);
                            }

                            if (step >= 3) {
                                // Step 3: show tilde e2 (residual)
                                engine.drawVector(0, 0, tilde2[0], tilde2[1], engine.colors.red, 'v2 - proj');
                            }

                            if (step >= 4) {
                                // Step 4: normalize to get e2
                                engine.drawVector(0, 0, e2[0] * 2, e2[1] * 2, engine.colors.purple, 'e2', 2.5);

                                // draw right angle indicator
                                var sz = 0.3;
                                var ctx = engine.ctx;
                                var s1 = engine.toScreen(e1[0] * sz, e1[1] * sz);
                                var s2 = engine.toScreen(e1[0] * sz + e2[0] * sz, e1[1] * sz + e2[1] * sz);
                                var s3 = engine.toScreen(e2[0] * sz, e2[1] * sz);
                                ctx.strokeStyle = engine.colors.white;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(s1[0], s1[1]);
                                ctx.lineTo(s2[0], s2[1]);
                                ctx.lineTo(s3[0], s3[1]);
                                ctx.stroke();
                            }

                            var labels = [
                                'Step 0: Original vectors v1, v2',
                                'Step 1: Normalize v1 to get e1',
                                'Step 2: Project v2 onto e1',
                                'Step 3: Subtract projection to get residual',
                                'Step 4: Normalize to get e2 (orthonormal!)'
                            ];
                            engine.screenText(labels[step], engine.width / 2, engine.height - 15, engine.colors.white, 13, 'center', 'bottom');
                        }

                        engine.animate(function() {
                            if (animating) {
                                animT += 0.03;
                                if (animT >= 1) animating = false;
                            }
                            draw();
                        });
                        draw();
                        return engine;
                    }
                },
                {
                    id: 'bessel-viz',
                    title: "Bessel's Inequality",
                    description: 'See how partial sums of Fourier coefficients are bounded by ||x||^2',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { scale: 1 });
                        var ctx = engine.ctx;

                        // Fourier coefficients of a sawtooth-like function
                        var maxN = 20;
                        var coeffs = [];
                        for (var k = 1; k <= maxN; k++) {
                            coeffs.push(2 * Math.pow(-1, k + 1) / (k * Math.PI));
                        }
                        // ||x||^2 for f(t)=t-0.5 on [0,1]: integral of (t-0.5)^2 = 1/12
                        var xNormSq = 1 / 12;

                        var nSlider = VizEngine.createSlider(controls, 'Terms N', 1, maxN, 5, 1, function() { draw(); });

                        function draw() {
                            engine.clear();
                            var N = Math.round(parseFloat(nSlider.value));
                            var padL = 60, padR = 20, padT = 40, padB = 50;
                            var plotW = engine.width - padL - padR;
                            var plotH = engine.height - padT - padB;

                            // axes
                            ctx.strokeStyle = engine.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(padL, padT);
                            ctx.lineTo(padL, padT + plotH);
                            ctx.lineTo(padL + plotW, padT + plotH);
                            ctx.stroke();

                            // ||x||^2 line
                            var yMax = xNormSq * 1.3;
                            var normY = padT + plotH - (xNormSq / yMax) * plotH;
                            ctx.strokeStyle = engine.colors.red;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            ctx.moveTo(padL, normY);
                            ctx.lineTo(padL + plotW, normY);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = engine.colors.red;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('||x||^2 = ' + xNormSq.toFixed(4), padL + plotW - 120, normY - 8);

                            // bars for |c_k|^2
                            var barW = plotW / (maxN + 1);
                            var cumSum = 0;
                            for (var k = 0; k < maxN; k++) {
                                var ck2 = coeffs[k] * coeffs[k];
                                var barH = (ck2 / yMax) * plotH;
                                var x = padL + (k + 0.5) * barW;
                                var active = k < N;
                                ctx.fillStyle = active ? engine.colors.blue : engine.colors.grid;
                                ctx.fillRect(x, padT + plotH - barH, barW * 0.7, barH);
                                if (active) cumSum += ck2;
                            }

                            // cumulative line
                            var cumY = padT + plotH - (cumSum / yMax) * plotH;
                            ctx.strokeStyle = engine.colors.green;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath();
                            ctx.moveTo(padL, cumY);
                            ctx.lineTo(padL + N * barW + barW * 0.5, cumY);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            ctx.fillStyle = engine.colors.green;
                            ctx.textAlign = 'left';
                            ctx.fillText('Sum |c_k|^2 = ' + cumSum.toFixed(5), padL + 5, cumY - 8);

                            engine.screenText("Bessel: partial Fourier energy vs ||x||^2", engine.width / 2, 15, engine.colors.white, 13, 'center', 'top');
                            engine.screenText('N = ' + N + ' terms', engine.width / 2, padT + plotH + 25, engine.colors.text, 12, 'center', 'top');

                            // x-axis labels
                            ctx.fillStyle = engine.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            for (var k = 0; k < maxN; k += 4) {
                                ctx.fillText(k + 1, padL + (k + 0.85) * barW, padT + plotH + 14);
                            }
                        }

                        draw();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Apply Gram-Schmidt to \\(\\{1, t, t^2\\}\\) in \\(L^2[0,1]\\) to obtain the first three orthonormal polynomials.',
                    hint: 'Start with \\(e_1 = 1\\) (already norm 1). For \\(e_2\\), subtract the projection of \\(t\\) onto \\(e_1\\) and normalize.',
                    solution: '\\(e_1(t) = 1\\). For \\(t\\): \\(\\langle t, e_1 \\rangle = 1/2\\), so \\(\\tilde{e}_2 = t - 1/2\\), \\(\\|\\tilde{e}_2\\|^2 = 1/12\\), \\(e_2 = \\sqrt{12}(t - 1/2) = 2\\sqrt{3}(t - 1/2)\\). For \\(t^2\\): \\(\\langle t^2, e_1 \\rangle = 1/3\\), \\(\\langle t^2, e_2 \\rangle = 2\\sqrt{3}(1/3 - 1/4) = 2\\sqrt{3}/12 = \\sqrt{3}/6\\). Then \\(\\tilde{e}_3 = t^2 - 1/3 - (\\sqrt{3}/6)(2\\sqrt{3})(t-1/2) = t^2 - t + 1/6\\). Normalize: \\(\\|\\tilde{e}_3\\|^2 = 1/180\\), so \\(e_3 = \\sqrt{180}(t^2 - t + 1/6) = 6\\sqrt{5}(t^2 - t + 1/6)\\). These are shifted Legendre polynomials.'
                },
                {
                    question: 'Prove Bessel\'s inequality directly: if \\(\\{e_1,\\ldots,e_N\\}\\) is orthonormal and \\(x \\in H\\), show that \\(\\sum_{k=1}^N |\\langle x, e_k \\rangle|^2 \\le \\|x\\|^2\\).',
                    hint: 'Let \\(y = \\sum_{k=1}^N \\langle x, e_k \\rangle e_k\\) and compute \\(\\|x - y\\|^2 \\ge 0\\).',
                    solution: 'Let \\(y = \\sum_{k=1}^N c_k e_k\\) where \\(c_k = \\langle x, e_k \\rangle\\). Then \\(\\|x-y\\|^2 = \\|x\\|^2 - \\langle x, y \\rangle - \\langle y, x \\rangle + \\|y\\|^2 = \\|x\\|^2 - \\sum |c_k|^2 - \\sum |c_k|^2 + \\sum |c_k|^2 = \\|x\\|^2 - \\sum |c_k|^2\\). Since \\(\\|x-y\\|^2 \\ge 0\\), we get \\(\\sum |c_k|^2 \\le \\|x\\|^2\\).'
                },
                {
                    question: 'Show that the Fourier partial sum \\(s_N = \\sum_{k=1}^N \\langle x, e_k \\rangle e_k\\) is the best approximation to \\(x\\) from \\(\\operatorname{span}(e_1,\\ldots,e_N)\\).',
                    hint: 'For any \\(y = \\sum \\alpha_k e_k\\), expand \\(\\|x - y\\|^2\\) and complete the square.',
                    solution: 'For \\(y = \\sum_{k=1}^N \\alpha_k e_k\\): \\(\\|x - y\\|^2 = \\|x\\|^2 - \\sum \\bar{\\alpha}_k \\langle x, e_k \\rangle - \\sum \\alpha_k \\overline{\\langle x, e_k \\rangle} + \\sum |\\alpha_k|^2 = \\|x\\|^2 - \\sum |\\langle x, e_k \\rangle|^2 + \\sum |\\alpha_k - \\langle x, e_k \\rangle|^2\\). This is minimized when \\(\\alpha_k = \\langle x, e_k \\rangle\\), giving minimum \\(\\|x\\|^2 - \\sum_{k=1}^N |\\langle x, e_k \\rangle|^2\\).'
                },
                {
                    question: 'Let \\(H = L^2[-\\pi, \\pi]\\) with the orthonormal system \\(e_n(t) = \\frac{1}{\\sqrt{2\\pi}} e^{int}\\). Compute the Fourier coefficients of \\(f(t) = t\\) and verify Bessel\'s inequality.',
                    hint: 'Integrate by parts: \\(\\langle t, e_n \\rangle = \\frac{1}{\\sqrt{2\\pi}}\\int_{-\\pi}^\\pi t e^{-int}\\,dt\\).',
                    solution: 'For \\(n \\neq 0\\): \\(\\hat{f}(n) = \\frac{1}{\\sqrt{2\\pi}}\\int_{-\\pi}^\\pi t e^{-int}\\,dt = \\frac{1}{\\sqrt{2\\pi}} \\cdot \\frac{2\\pi(-1)^{n+1}}{in} \\cdot (-i) = \\frac{(-1)^{n+1}}{n}\\sqrt{2\\pi} \\cdot \\frac{1}{i}\\). Actually: integrate by parts gives \\(\\hat{f}(n) = \\sqrt{2\\pi}\\frac{(-1)^{n+1}}{in}\\) for \\(n \\neq 0\\), and \\(\\hat{f}(0) = 0\\). So \\(|\\hat{f}(n)|^2 = \\frac{2\\pi}{n^2}\\) and \\(\\sum_{n \\neq 0} \\frac{2\\pi}{n^2} = 2\\pi \\cdot \\frac{\\pi^2}{3} = \\frac{2\\pi^3}{3} = \\|f\\|^2 = \\int_{-\\pi}^\\pi t^2 dt = \\frac{2\\pi^3}{3}\\). Equality holds (Parseval).'
                }
            ]
        },

        // ===== SECTION 4: Orthonormal Bases =====
        {
            id: 'orthonormal-bases',
            title: 'Orthonormal Bases',
            content: `
                <h2>Orthonormal Bases</h2>

                <p>An orthonormal basis (ONB) for a Hilbert space is an orthonormal set that is maximal&mdash;or equivalently, one whose span is dense. The existence of an ONB and Parseval's identity transform abstract Hilbert spaces into concrete sequence spaces.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.17 (Orthonormal Basis)</div>
                    <div class="env-body">
                        <p>An orthonormal set \\(\\{e_\\alpha\\}_{\\alpha \\in A}\\) in a Hilbert space \\(H\\) is an <strong>orthonormal basis</strong> (ONB, or complete orthonormal system) if it satisfies any of the following equivalent conditions:</p>
                        <ol>
                            <li>\\(\\overline{\\operatorname{span}}\\{e_\\alpha\\} = H\\) (the closed linear span is all of \\(H\\)).</li>
                            <li>If \\(\\langle x, e_\\alpha \\rangle = 0\\) for all \\(\\alpha\\), then \\(x = 0\\).</li>
                            <li>For all \\(x \\in H\\): \\(x = \\sum_\\alpha \\langle x, e_\\alpha \\rangle e_\\alpha\\) (convergence in norm).</li>
                            <li>The set is maximal orthonormal (no larger orthonormal set contains it).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Warning)</div>
                    <div class="env-body">
                        <p>An orthonormal basis is generally <em>not</em> a Hamel (algebraic) basis. In an infinite-dimensional Hilbert space, the ONB spans a dense subspace (via finite linear combinations), but every element is a limit of partial sums, not a finite combination.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.18 (Parseval's Identity)</div>
                    <div class="env-body">
                        <p>Let \\(\\{e_\\alpha\\}\\) be an orthonormal basis for \\(H\\). Then for all \\(x, y \\in H\\):</p>
                        <p>\\[\\langle x, y \\rangle = \\sum_\\alpha \\langle x, e_\\alpha \\rangle \\overline{\\langle y, e_\\alpha \\rangle}\\]</p>
                        <p>In particular (\\(x = y\\)):</p>
                        <p>\\[\\|x\\|^2 = \\sum_\\alpha |\\langle x, e_\\alpha \\rangle|^2 \\qquad \\text{(Parseval's equality)}\\]</p>
                        <p>Conversely, if Parseval's equality holds for all \\(x\\), then the orthonormal set is a basis.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>If \\(\\{e_\\alpha\\}\\) is an ONB, then \\(x = \\sum \\langle x, e_\\alpha \\rangle e_\\alpha\\). Hence:</p>
                        <p>\\[\\langle x, y \\rangle = \\Bigl\\langle \\sum_\\alpha \\langle x, e_\\alpha \\rangle e_\\alpha,\\, y \\Bigr\\rangle = \\sum_\\alpha \\langle x, e_\\alpha \\rangle \\langle e_\\alpha, y \\rangle = \\sum_\\alpha \\langle x, e_\\alpha \\rangle \\overline{\\langle y, e_\\alpha \\rangle}.\\]</p>
                        <p>For the converse, if Parseval holds for all \\(x\\) and \\(\\langle x, e_\\alpha \\rangle = 0\\) for all \\(\\alpha\\), then \\(\\|x\\|^2 = 0\\), so \\(x = 0\\). Hence condition (2) is satisfied.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="fourier-coeffs-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.19 (Isomorphism with \\(\\ell^2\\))</div>
                    <div class="env-body">
                        <p>Every separable Hilbert space is isometrically isomorphic to \\(\\ell^2\\). The isomorphism \\(U: H \\to \\ell^2\\) is given by \\(Ux = (\\langle x, e_n \\rangle)_{n=1}^\\infty\\) where \\(\\{e_n\\}\\) is a countable ONB.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>Well-defined and isometric:</strong> By Parseval, \\(\\sum |\\langle x, e_n \\rangle|^2 = \\|x\\|^2 < \\infty\\), so \\(Ux \\in \\ell^2\\) and \\(\\|Ux\\|_{\\ell^2} = \\|x\\|_H\\).</p>
                        <p><strong>Surjective:</strong> Given \\((c_n) \\in \\ell^2\\), the partial sums \\(s_N = \\sum_{n=1}^N c_n e_n\\) form a Cauchy sequence (since \\(\\|s_M - s_N\\|^2 = \\sum_{n=N+1}^M |c_n|^2 \\to 0\\)). By completeness, \\(x = \\sum c_n e_n\\) exists, and \\(Ux = (c_n)\\).</p>
                        <p><strong>Linear:</strong> Immediate from linearity of the inner product.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="parseval-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.20 (Existence of ONB)</div>
                    <div class="env-body">
                        <p>Every Hilbert space has an orthonormal basis. If \\(H\\) is separable (has a countable dense subset), then any ONB is countable.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch)</div>
                    <div class="env-body">
                        <p>By Zorn's lemma: the collection of orthonormal sets, ordered by inclusion, has the property that every chain has an upper bound (the union). Hence a maximal element exists. For separability: if \\(\\{e_\\alpha\\}\\) is an ONB and \\(\\alpha \\neq \\beta\\), then \\(\\|e_\\alpha - e_\\beta\\|^2 = 2\\), so the balls \\(B(e_\\alpha, 1/2)\\) are disjoint. A countable dense set must meet each, so the ONB is countable.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'fourier-coeffs-viz',
                    title: 'Fourier Approximation',
                    description: 'See how Fourier partial sums approximate a function',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { scale: 1 });
                        var ctx = engine.ctx;

                        var funcSelect = document.createElement('select');
                        funcSelect.style.cssText = 'padding:4px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.78rem;margin-right:8px;';
                        funcSelect.innerHTML = '<option value="square">Square wave</option><option value="sawtooth">Sawtooth</option><option value="triangle">Triangle</option>';
                        controls.appendChild(funcSelect);

                        var nSlider = VizEngine.createSlider(controls, 'Terms N', 1, 30, 5, 1, function() { draw(); });
                        funcSelect.addEventListener('change', function() { draw(); });

                        function getCoeffs(type, n) {
                            // Fourier sine coefficients for functions on [0, 2pi]
                            var c = [];
                            for (var k = 1; k <= n; k++) {
                                if (type === 'square') {
                                    c.push(k % 2 === 1 ? 4 / (Math.PI * k) : 0);
                                } else if (type === 'sawtooth') {
                                    c.push(2 * Math.pow(-1, k + 1) / (Math.PI * k));
                                } else {
                                    c.push(k % 2 === 1 ? 8 / (Math.PI * Math.PI * k * k) * (k % 4 === 1 ? 1 : -1) : 0);
                                }
                            }
                            return c;
                        }

                        function targetFunc(type, t) {
                            // t in [0, 2pi]
                            var x = t / (2 * Math.PI); // [0,1]
                            if (type === 'square') return t < Math.PI ? 1 : -1;
                            if (type === 'sawtooth') return 1 - t / Math.PI; // roughly
                            // triangle
                            return t < Math.PI ? 2 * t / Math.PI - 1 : 3 - 2 * t / Math.PI;
                        }

                        function draw() {
                            engine.clear();
                            var N = Math.round(parseFloat(nSlider.value));
                            var type = funcSelect.value;
                            var coeffs = getCoeffs(type, N);

                            var padL = 60, padR = 20, padT = 30, padB = 40;
                            var plotW = engine.width - padL - padR;
                            var plotH = engine.height - padT - padB;
                            var midY = padT + plotH / 2;

                            // axes
                            ctx.strokeStyle = engine.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(padL, midY);
                            ctx.lineTo(padL + plotW, midY);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(padL, padT);
                            ctx.lineTo(padL, padT + plotH);
                            ctx.stroke();

                            var yScale = plotH * 0.35;
                            var steps = 400;

                            // target function
                            ctx.strokeStyle = engine.colors.text;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath();
                            for (var i = 0; i <= steps; i++) {
                                var t = (i / steps) * 2 * Math.PI;
                                var y = targetFunc(type, t);
                                var px = padL + (i / steps) * plotW;
                                var py = midY - y * yScale;
                                if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Fourier partial sum
                            ctx.strokeStyle = engine.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= steps; i++) {
                                var t = (i / steps) * 2 * Math.PI;
                                var y = 0;
                                for (var k = 0; k < coeffs.length; k++) {
                                    y += coeffs[k] * Math.sin((k + 1) * t);
                                }
                                var px = padL + (i / steps) * plotW;
                                var py = midY - y * yScale;
                                if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            engine.screenText('Fourier partial sum S_' + N + ' (blue) vs target (gray dashed)', engine.width / 2, 14, engine.colors.white, 12, 'center', 'top');
                        }

                        draw();
                        return engine;
                    }
                },
                {
                    id: 'parseval-viz',
                    title: "Parseval's Identity: Energy Conservation",
                    description: 'See how the energy (||x||^2) is distributed among Fourier coefficients',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { scale: 1 });
                        var ctx = engine.ctx;

                        var maxN = 25;
                        // Use square wave coefficients
                        var allCoeffs = [];
                        for (var k = 1; k <= maxN; k++) {
                            allCoeffs.push(k % 2 === 1 ? 4 / (Math.PI * k) : 0);
                        }
                        // ||f||^2 for square wave on [0,2pi] with amplitude 1 = 2*pi
                        // but with our normalization sum |c_k|^2 -> pi^2/8 * (2/pi) = pi/4... let's compute
                        var totalEnergy = Math.PI; // integral of 1 over [0,2pi] = ... actually ||square wave||^2 = 2pi

                        // Actually for a square wave with amplitude 1 on [0,2pi]:
                        // f = 1 on [0,pi), f=-1 on [pi,2pi), ||f||^2 = 2pi
                        // Fourier: f(t) = sum b_k sin(kt), b_k = 4/(pi*k) for odd k
                        // Parseval (sin/cos): sum |b_k|^2 * pi = ||f||^2 = 2pi => sum |b_k|^2 = 2
                        var parsevalTotal = 0;
                        for (var k = 0; k < maxN; k++) {
                            parsevalTotal += allCoeffs[k] * allCoeffs[k];
                        }
                        // This converges to 8/pi^2 * sum 1/k^2 (odd k) = 8/pi^2 * pi^2/8 = 1
                        // With normalization factor pi: sum |b_k|^2 * pi = ... let's just use raw sum

                        var nSlider = VizEngine.createSlider(controls, 'Terms N', 1, maxN, 10, 1, function() { draw(); });

                        function draw() {
                            engine.clear();
                            var N = Math.round(parseFloat(nSlider.value));
                            var padL = 60, padR = 30, padT = 40, padB = 50;
                            var plotW = engine.width - padL - padR;
                            var plotH = engine.height - padT - padB;

                            // compute partial sum
                            var partial = 0;
                            for (var k = 0; k < N; k++) {
                                partial += allCoeffs[k] * allCoeffs[k];
                            }

                            var yMax = 1.2; // approx limit is 1

                            // draw bar: total energy
                            var barW = 60;
                            var barX1 = padL + plotW - barW * 2 - 20;
                            var barX2 = barX1 + barW + 10;
                            var barMaxH = plotH * 0.8;
                            var barBase = padT + plotH;

                            // partial energy bar
                            var h1 = (partial / yMax) * barMaxH;
                            ctx.fillStyle = engine.colors.blue;
                            ctx.fillRect(barX1, barBase - h1, barW, h1);
                            ctx.fillStyle = engine.colors.white;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Partial', barX1 + barW / 2, barBase + 14);
                            ctx.fillText(partial.toFixed(4), barX1 + barW / 2, barBase - h1 - 8);

                            // total energy bar (limit = 1 for our normalization)
                            var totalNorm = 1.0;
                            var h2 = (totalNorm / yMax) * barMaxH;
                            ctx.fillStyle = engine.colors.green + '66';
                            ctx.fillRect(barX2, barBase - h2, barW, h2);
                            ctx.strokeStyle = engine.colors.green;
                            ctx.lineWidth = 2;
                            ctx.strokeRect(barX2, barBase - h2, barW, h2);
                            ctx.fillStyle = engine.colors.green;
                            ctx.fillText('||f||^2', barX2 + barW / 2, barBase + 14);
                            ctx.fillText(totalNorm.toFixed(4), barX2 + barW / 2, barBase - h2 - 8);

                            // Coefficient spectrum (left portion)
                            var specW = barX1 - padL - 40;
                            var specBarW = specW / maxN;
                            for (var k = 0; k < maxN; k++) {
                                var ck2 = allCoeffs[k] * allCoeffs[k];
                                var bh = (ck2 / 0.7) * barMaxH; // scale for visibility
                                var bx = padL + k * specBarW;
                                ctx.fillStyle = k < N ? engine.colors.purple : engine.colors.grid;
                                ctx.fillRect(bx + 1, barBase - bh, specBarW - 2, bh);
                            }

                            // ratio
                            var ratio = partial / totalNorm;
                            engine.screenText("Parseval: sum |c_k|^2 / ||f||^2 = " + (ratio * 100).toFixed(1) + '%', engine.width / 2, 15, ratio > 0.99 ? engine.colors.green : engine.colors.white, 13, 'center', 'top');
                        }

                        draw();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that the trigonometric system \\(\\{e^{2\\pi i n t}\\}_{n \\in \\mathbb{Z}}\\) is an orthonormal basis for \\(L^2[0,1]\\).',
                    hint: 'Orthonormality: compute \\(\\int_0^1 e^{2\\pi i m t} e^{-2\\pi i n t}\\,dt\\). Completeness: use Stone-Weierstrass or direct density arguments.',
                    solution: 'Orthonormality: \\(\\int_0^1 e^{2\\pi i(m-n)t}dt = \\delta_{mn}\\). Completeness: trigonometric polynomials are dense in \\(C[0,1]\\) by Stone-Weierstrass (they separate points, contain constants, and are closed under conjugation). Since \\(C[0,1]\\) is dense in \\(L^2[0,1]\\), the trigonometric system spans a dense subspace. Hence it is an ONB.'
                },
                {
                    question: 'Prove that every separable infinite-dimensional Hilbert space is isometrically isomorphic to \\(\\ell^2\\). Deduce that \\(L^2[0,1] \\cong \\ell^2\\).',
                    hint: 'Use any countable ONB to define the isomorphism. For \\(L^2[0,1]\\), use the trigonometric system.',
                    solution: 'Let \\(\\{e_n\\}_{n=1}^\\infty\\) be a countable ONB (exists since \\(H\\) is separable). Define \\(U: H \\to \\ell^2\\) by \\(Ux = (\\langle x, e_n \\rangle)_n\\). By Parseval, \\(\\|Ux\\| = \\|x\\|\\), so \\(U\\) is an isometry (hence injective). Surjectivity: for \\((c_n) \\in \\ell^2\\), \\(x = \\sum c_n e_n\\) converges and \\(Ux = (c_n)\\). Since \\(L^2[0,1]\\) is separable with ONB \\(\\{e^{2\\pi int}\\}\\), we get \\(L^2[0,1] \\cong \\ell^2\\).'
                },
                {
                    question: 'Use Parseval\'s identity with the ONB \\(\\{e^{2\\pi int}\\}\\) in \\(L^2[0,1]\\) and \\(f(t) = t\\) to evaluate \\(\\sum_{n=1}^\\infty \\frac{1}{n^2}\\).',
                    hint: 'Compute \\(\\|f\\|^2 = \\int_0^1 t^2\\,dt\\) and \\(\\hat{f}(n) = \\int_0^1 t e^{-2\\pi int}\\,dt\\).',
                    solution: '\\(\\|f\\|^2 = 1/3\\). For \\(n \\neq 0\\): \\(\\hat{f}(n) = \\int_0^1 t e^{-2\\pi int}dt\\). Integration by parts: \\(= \\frac{t e^{-2\\pi int}}{-2\\pi in}\\Big|_0^1 + \\frac{1}{2\\pi in}\\int_0^1 e^{-2\\pi int}dt = \\frac{-1}{2\\pi in} + 0 = \\frac{-1}{2\\pi in}\\). So \\(|\\hat{f}(n)|^2 = \\frac{1}{4\\pi^2 n^2}\\). Also \\(\\hat{f}(0) = 1/2\\). Parseval: \\(1/3 = 1/4 + \\sum_{n \\neq 0} \\frac{1}{4\\pi^2 n^2} = 1/4 + \\frac{1}{2\\pi^2}\\sum_{n=1}^\\infty \\frac{1}{n^2}\\). Solving: \\(\\sum \\frac{1}{n^2} = 2\\pi^2(1/3 - 1/4) = 2\\pi^2/12 = \\pi^2/6\\).'
                }
            ]
        },

        // ===== SECTION 5: Riesz Representation Theorem =====
        {
            id: 'riesz-representation',
            title: 'Riesz Representation Theorem',
            content: `
                <h2>The Riesz Representation Theorem</h2>

                <p>The Riesz representation theorem is one of the cornerstones of Hilbert space theory. It identifies the dual of a Hilbert space with the space itself, revealing a fundamental self-duality that distinguishes Hilbert spaces from general Banach spaces.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.21 (Riesz&ndash;Fr&eacute;chet Representation Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(H\\) be a Hilbert space and \\(\\varphi: H \\to \\mathbb{F}\\) a continuous linear functional. Then there exists a unique \\(h \\in H\\) such that</p>
                        <p>\\[\\varphi(x) = \\langle x, h \\rangle \\quad \\text{for all } x \\in H,\\]</p>
                        <p>and \\(\\|\\varphi\\|_{H^*} = \\|h\\|_H\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>Existence:</strong> If \\(\\varphi = 0\\), take \\(h = 0\\). Otherwise, \\(M = \\ker(\\varphi)\\) is a closed subspace with \\(M \\neq H\\). By the orthogonal decomposition, \\(M^\\perp \\neq \\{0\\}\\). Choose \\(z \\in M^\\perp\\) with \\(\\|z\\| = 1\\) (possible since \\(M\\) has codimension 1, so \\(\\dim M^\\perp = 1\\)).</p>
                        <p>For any \\(x \\in H\\), the element \\(x - \\frac{\\varphi(x)}{\\varphi(z)} z \\in M\\) (verify: \\(\\varphi\\) of this is 0). So:</p>
                        <p>\\[0 = \\Bigl\\langle x - \\frac{\\varphi(x)}{\\varphi(z)} z,\\, z \\Bigr\\rangle = \\langle x, z \\rangle - \\frac{\\varphi(x)}{\\varphi(z)}.\\]</p>
                        <p>Thus \\(\\varphi(x) = \\varphi(z) \\langle x, z \\rangle = \\langle x, \\overline{\\varphi(z)} z \\rangle\\). Setting \\(h = \\overline{\\varphi(z)} z\\) gives \\(\\varphi(x) = \\langle x, h \\rangle\\).</p>
                        <p><strong>Uniqueness:</strong> If \\(\\langle x, h_1 \\rangle = \\langle x, h_2 \\rangle\\) for all \\(x\\), set \\(x = h_1 - h_2\\) to get \\(\\|h_1 - h_2\\|^2 = 0\\).</p>
                        <p><strong>Isometry:</strong> \\(\\|\\varphi\\| = \\sup_{\\|x\\|=1} |\\langle x, h \\rangle| \\le \\|h\\|\\) by Cauchy&ndash;Schwarz, and equality is attained at \\(x = h/\\|h\\|\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="riesz-rep-viz"></div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 3.22 (Self-Duality)</div>
                    <div class="env-body">
                        <p>The map \\(J: H \\to H^*\\) defined by \\(Jh = \\langle \\cdot, h \\rangle\\) is a <strong>conjugate-linear isometric isomorphism</strong>. In particular, \\(H^* \\cong H\\) (as Banach spaces). Every Hilbert space is reflexive.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The conjugate-linearity of \\(J\\) means \\(J(\\alpha h) = \\bar{\\alpha} Jh\\). In the real case, \\(J\\) is linear and \\(H \\cong H^*\\) isometrically and isomorphically. The Riesz theorem fails for general Banach spaces: \\(\\ell^1\\) has dual \\(\\ell^\\infty \\ncong \\ell^1\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.23 (Lax&ndash;Milgram, Generalization)</div>
                    <div class="env-body">
                        <p>Let \\(a: H \\times H \\to \\mathbb{F}\\) be a bounded, coercive sesquilinear form (i.e., \\(|a(x,y)| \\le M\\|x\\|\\|y\\|\\) and \\(\\operatorname{Re} a(x,x) \\ge \\alpha \\|x\\|^2\\) for some \\(\\alpha > 0\\)). Then for every \\(\\varphi \\in H^*\\), there exists a unique \\(u \\in H\\) with \\(a(u, v) = \\varphi(v)\\) for all \\(v \\in H\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch)</div>
                    <div class="env-body">
                        <p>For fixed \\(u\\), the map \\(v \\mapsto a(u, v)\\) is a bounded linear functional. By Riesz, there exists a unique \\(Au \\in H\\) with \\(a(u,v) = \\langle Au, v \\rangle\\). The operator \\(A\\) is bounded and coercivity gives \\(\\operatorname{Re}\\langle Au, u \\rangle \\ge \\alpha\\|u\\|^2\\), which implies \\(A\\) is injective with closed range. Surjectivity follows from the coercivity estimate, and the equation \\(a(u,v) = \\varphi(v)\\) becomes \\(Au = h\\) where \\(\\varphi = \\langle \\cdot, h \\rangle\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="functional-level-sets"></div>

                <div class="env-block example">
                    <div class="env-title">Example 3.24 (Application to PDEs)</div>
                    <div class="env-body">
                        <p>The Riesz theorem (and its Lax&ndash;Milgram extension) is the workhorse for weak solutions of elliptic PDEs. Consider the Dirichlet problem \\(-\\Delta u = f\\) in \\(H_0^1(\\Omega)\\). The bilinear form \\(a(u,v) = \\int_\\Omega \\nabla u \\cdot \\nabla v\\) is coercive by the Poincar&eacute; inequality, and \\(\\varphi(v) = \\int_\\Omega fv\\) is a bounded functional. Lax&ndash;Milgram gives a unique weak solution.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'riesz-rep-viz',
                    title: 'Riesz Representation: Functional as Inner Product',
                    description: 'A linear functional on R^2 is represented by inner product with a unique vector h',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { scale: 45 });
                        // The representing vector h
                        var h = engine.addDraggable('h', 2, 1, engine.colors.green, 8);
                        // A test point
                        var x = engine.addDraggable('x', 1, 3, engine.colors.blue, 8);

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // phi(x) = <x, h> = x1*h1 + x2*h2
                            var phiVal = x.x * h.x + x.y * h.y;

                            // Draw level sets of phi (lines perpendicular to h)
                            var hLen = Math.sqrt(h.x * h.x + h.y * h.y);
                            if (hLen > 0.01) {
                                for (var c = -6; c <= 6; c++) {
                                    // <x, h> = c => h1*x1 + h2*x2 = c
                                    // direction perpendicular to h: (-h2, h1)
                                    var px = c * h.x / (hLen * hLen);
                                    var py = c * h.y / (hLen * hLen);
                                    var dx = -h.y / hLen;
                                    var dy = h.x / hLen;
                                    engine.drawSegment(px - dx * 10, py - dy * 10, px + dx * 10, py + dy * 10,
                                        c === 0 ? engine.colors.axis : engine.colors.grid, 0.7);
                                }

                                // level set through x
                                var cpx = phiVal * h.x / (hLen * hLen);
                                var cpy = phiVal * h.y / (hLen * hLen);
                                var dx = -h.y / hLen;
                                var dy = h.x / hLen;
                                engine.drawSegment(cpx - dx * 10, cpy - dy * 10, cpx + dx * 10, cpy + dy * 10, engine.colors.orange, 1.5);
                            }

                            engine.drawVector(0, 0, h.x, h.y, engine.colors.green, 'h');
                            engine.drawVector(0, 0, x.x, x.y, engine.colors.blue, 'x');
                            engine.drawDraggables();

                            engine.screenText('h = Riesz representative of phi', 10, 20, engine.colors.green, 12, 'left', 'top');
                            engine.screenText('phi(x) = <x, h> = ' + phiVal.toFixed(2), 10, 40, engine.colors.orange, 13, 'left', 'top');
                            engine.screenText('||phi|| = ||h|| = ' + hLen.toFixed(3), 10, 60, engine.colors.text, 12, 'left', 'top');
                        }

                        engine.animate(function() { draw(); });
                        draw();
                        return engine;
                    }
                },
                {
                    id: 'functional-level-sets',
                    title: 'Kernel and Level Sets of a Functional',
                    description: 'Visualize ker(phi) and the orthogonal complement in R^2',
                    setup: function(body, controls) {
                        var engine = new VizEngine(body, { scale: 45 });
                        var h = engine.addDraggable('h', 1.5, 2.5, engine.colors.green, 8);

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            var hLen = Math.sqrt(h.x * h.x + h.y * h.y);
                            if (hLen < 0.01) {
                                engine.drawDraggables();
                                return;
                            }

                            // ker(phi) = {x : <x,h> = 0} = h^perp
                            var perpX = -h.y / hLen;
                            var perpY = h.x / hLen;

                            // Draw kernel line (through origin, direction perp to h)
                            engine.drawLine(0, 0, perpX, perpY, engine.colors.red, 2);
                            engine.drawText('ker(phi) = h^perp', perpX * 3.5, perpY * 3.5, engine.colors.red, 12);

                            // Draw h direction line
                            engine.drawLine(0, 0, h.x, h.y, engine.colors.green, 1, true);

                            // Shade the half-planes
                            var ctx = engine.ctx;

                            // Draw several level sets
                            for (var c = -4; c <= 4; c++) {
                                if (c === 0) continue;
                                var cx = c * h.x / (hLen * hLen);
                                var cy = c * h.y / (hLen * hLen);
                                engine.drawSegment(cx - perpX * 10, cy - perpY * 10, cx + perpX * 10, cy + perpY * 10,
                                    c > 0 ? engine.colors.blue + '44' : engine.colors.purple + '44', 0.8);
                            }

                            engine.drawVector(0, 0, h.x, h.y, engine.colors.green, 'h');

                            // orthogonal decomposition example
                            var ex = 3, ey = 1;
                            var projH = (ex * h.x + ey * h.y) / (hLen * hLen);
                            var projPx = projH * h.x;
                            var projPy = projH * h.y;
                            var perpCompX = ex - projPx;
                            var perpCompY = ey - projPy;

                            engine.drawVector(0, 0, ex, ey, engine.colors.white, 'x', 1.5);
                            engine.drawVector(0, 0, projPx, projPy, engine.colors.yellow, 'x_M^perp', 1.5);
                            engine.drawVector(projPx, projPy, ex, ey, engine.colors.red, 'x_M', 1.5);

                            engine.drawDraggables();

                            engine.screenText('H = ker(phi) + span{h}', 10, 20, engine.colors.white, 13, 'left', 'top');
                            engine.screenText('Every x = x_M + x_M^perp', 10, 40, engine.colors.text, 12, 'left', 'top');
                        }

                        engine.animate(function() { draw(); });
                        draw();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(\\varphi: \\ell^2 \\to \\mathbb{R}\\) be defined by \\(\\varphi(x) = \\sum_{n=1}^\\infty x_n / 2^n\\). Show \\(\\varphi\\) is a bounded linear functional, find the Riesz representative, and compute \\(\\|\\varphi\\|\\).',
                    hint: 'The Riesz representative \\(h\\) satisfies \\(\\varphi(x) = \\langle x, h \\rangle = \\sum x_n h_n\\).',
                    solution: 'Linearity is clear. Boundedness: \\(|\\varphi(x)| \\le \\sum |x_n|/2^n \\le \\|x\\|(\\sum 1/4^n)^{1/2} = \\|x\\|/\\sqrt{3}\\) by Cauchy-Schwarz. The Riesz representative is \\(h = (1/2, 1/4, 1/8, \\ldots)\\) since \\(\\varphi(x) = \\sum x_n \\cdot (1/2^n) = \\langle x, h \\rangle\\). The norm \\(\\|\\varphi\\| = \\|h\\| = (\\sum 1/4^n)^{1/2} = (1/3)^{1/2} = 1/\\sqrt{3}\\).'
                },
                {
                    question: 'Prove that every Hilbert space is reflexive (i.e., the canonical embedding \\(J: H \\to H^{**}\\) is surjective).',
                    hint: 'Use the Riesz theorem twice: once for \\(H^*\\) and once for the original space.',
                    solution: 'Let \\(\\Phi \\in H^{**}\\). The Riesz map \\(R: H \\to H^*\\) is \\(Rh(x) = \\langle x, h \\rangle\\), a conjugate-linear isometry. For \\(\\Phi \\in H^{**}\\), the composition \\(\\Phi \\circ R: H \\to \\mathbb{F}\\) is a bounded conjugate-linear functional on \\(H\\). Thus \\(x \\mapsto \\overline{\\Phi(Rx)}\\) is a bounded linear functional, so by Riesz there exists \\(y \\in H\\) with \\(\\overline{\\Phi(Rx)} = \\langle x, y \\rangle\\) for all \\(x\\). One checks that \\(\\Phi = Jy\\) where \\(Jy(f) = f(y)\\) is the canonical embedding. Hence \\(J\\) is surjective.'
                },
                {
                    question: 'Let \\(H = L^2[0,1]\\) and define \\(\\varphi(f) = \\int_0^1 t^2 f(t)\\,dt\\). Find the Riesz representative and \\(\\|\\varphi\\|\\).',
                    hint: 'Write \\(\\varphi(f) = \\langle f, h \\rangle\\) for some \\(h \\in L^2[0,1]\\).',
                    solution: 'We have \\(\\varphi(f) = \\int_0^1 f(t) \\cdot t^2\\,dt = \\langle f, t^2 \\rangle\\). So the Riesz representative is \\(h(t) = t^2\\). The norm: \\(\\|\\varphi\\| = \\|h\\| = \\left(\\int_0^1 t^4\\,dt\\right)^{1/2} = (1/5)^{1/2} = 1/\\sqrt{5}\\).'
                }
            ]
        }
    ]
});
