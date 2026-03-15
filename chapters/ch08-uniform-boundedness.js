window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch08',
    number: 8,
    title: 'Uniform Boundedness Principle',
    subtitle: 'From pointwise to uniform bounds',
    sections: [
        // ============================================================
        // SECTION 1: Pointwise vs Uniform Boundedness
        // ============================================================
        {
            id: 'ch08-sec01',
            title: 'Pointwise vs Uniform Boundedness',
            content: `
<div class="bridge-block chapter-opening">
<p><strong>From Baire Category to Operator Bounds.</strong> The Baire Category Theorem (Chapter 7) told us that complete spaces cannot be decomposed into countably many "thin" pieces. Now we harvest the first major consequence for operator theory: the Uniform Boundedness Principle. This remarkable theorem says that a family of bounded operators that is bounded at each point must be bounded uniformly in the operator norm, a conclusion that would be false without completeness.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We carefully distinguish pointwise boundedness (for each \(x\), \(\sup_\alpha \|T_\alpha x\| < \infty\)) from uniform boundedness (\(\sup_\alpha \|T_\alpha\| < \infty\)), and show by example that the implication from pointwise to uniform fails in incomplete spaces.</p>
</div>

                <h2>Pointwise vs Uniform Boundedness</h2>

                <p>One of the most striking phenomena in functional analysis is the passage from <em>pointwise</em> information to <em>uniform</em> conclusions. In finite dimensions, this passage is automatic; in infinite dimensions, it requires the heavy machinery of Baire category theory developed in the previous chapter.</p>

                <h3>The Central Question</h3>

                <p>Suppose \\(\\{T_\\alpha\\}_{\\alpha \\in A}\\) is a family of bounded linear operators from a Banach space \\(X\\) to a normed space \\(Y\\). We say the family is:</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.1 (Pointwise and Uniform Boundedness)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a normed space, \\(Y\\) a normed space, and \\(\\{T_\\alpha\\}_{\\alpha \\in A} \\subseteq \\mathcal{B}(X, Y)\\).</p>
                        <p><strong>(a) Pointwise bounded:</strong> For each \\(x \\in X\\), \\(\\sup_{\\alpha \\in A} \\|T_\\alpha x\\| < \\infty\\).</p>
                        <p><strong>(b) Uniformly bounded:</strong> \\(\\sup_{\\alpha \\in A} \\|T_\\alpha\\| < \\infty\\).</p>
                    </div>
                </div>

                <p>Uniform boundedness trivially implies pointwise boundedness: if \\(\\sup_\\alpha \\|T_\\alpha\\| \\leq M\\), then \\(\\|T_\\alpha x\\| \\leq M\\|x\\|\\) for all \\(\\alpha\\) and all \\(x\\). The deep and surprising fact is that the <strong>converse also holds</strong> when \\(X\\) is complete.</p>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The passage from pointwise to uniform is a hallmark of completeness. In incomplete normed spaces, it can fail spectacularly. The Uniform Boundedness Principle is thus a <em>completeness theorem in disguise</em>.</p>
                    </div>
                </div>

                <h3>A Finite-Dimensional Preview</h3>

                <p>In \\(\\mathbb{R}^n\\), the situation is simpler. If \\(\\{T_\\alpha\\}\\) are linear maps on \\(\\mathbb{R}^n\\) and \\(\\sup_\\alpha \\|T_\\alpha e_i\\| < \\infty\\) for each standard basis vector \\(e_i\\), then by the triangle inequality:</p>
                \\[\\|T_\\alpha x\\| = \\left\\|\\sum_{i=1}^n x_i T_\\alpha e_i\\right\\| \\leq \\sum_{i=1}^n |x_i| \\cdot \\sup_\\alpha \\|T_\\alpha e_i\\|\\]
                <p>so the family is automatically uniformly bounded on the unit ball. In infinite dimensions, we cannot reduce to finitely many basis vectors, and the argument must be fundamentally different.</p>

                <div class="viz-placeholder" data-viz="pointwise-vs-uniform"></div>

                <h3>The Role of Completeness</h3>

                <div class="env-block example">
                    <div class="env-title">Example 8.2 (Failure without completeness)</div>
                    <div class="env-body">
                        <p>Let \\(X = c_{00}\\), the space of finitely supported sequences with the sup norm, and define \\(T_n \\colon c_{00} \\to \\mathbb{R}\\) by \\(T_n(x) = n \\cdot x_n\\). Then:</p>
                        <p><strong>Pointwise bounded:</strong> For each \\(x \\in c_{00}\\), there exists \\(N\\) such that \\(x_n = 0\\) for \\(n > N\\), so \\(\\sup_n |T_n(x)| = \\sup_{n \\leq N} |n \\cdot x_n| < \\infty\\).</p>
                        <p><strong>Not uniformly bounded:</strong> \\(\\|T_n\\| = n\\), since \\(T_n(e_n) = n\\) and \\(\\|e_n\\| = 1\\). Thus \\(\\sup_n \\|T_n\\| = \\infty\\).</p>
                        <p>The space \\(c_{00}\\) is <em>not</em> a Banach space (it is not closed in \\(\\ell^\\infty\\)), so the Uniform Boundedness Principle does not apply.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="completeness-failure"></div>

                <div class="env-block example">
                    <div class="env-title">Example 8.3 (The sup norm family)</div>
                    <div class="env-body">
                        <p>Consider \\(X = C[0,1]\\) with the sup norm and the evaluation functionals \\(\\delta_t(f) = f(t)\\) for \\(t \\in [0,1]\\). Each \\(\\delta_t\\) has norm \\(1\\), so \\(\\sup_t \\|\\delta_t\\| = 1\\). This is a case where the family is both pointwise and uniformly bounded with the same constant.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Think of \\(\\{T_\\alpha\\}\\) as a family of "stress tests" applied to vectors in \\(X\\). Pointwise boundedness says: no single vector is stressed beyond all bounds. Uniform boundedness says: there is a global stress limit. The miracle of completeness is that the first condition implies the second --- if no vector breaks, the whole family is tame.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'pointwise-vs-uniform',
                    title: 'Pointwise vs Uniform Boundedness',
                    description: 'Visualize a family of linear functionals. Observe the difference between pointwise and uniform bounds.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 50, originX: 350, originY: 210 });
                        var numOps = 5;

                        function draw(n) {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var colors = [viz.colors.blue, viz.colors.teal, viz.colors.orange, viz.colors.green, viz.colors.purple];

                            // Draw images of unit circle under T_k: scaling by k in direction k
                            for (var k = 1; k <= n; k++) {
                                var col = colors[(k - 1) % colors.length];
                                // T_k scales the k-th component: we visualize as 2D rotation+scaling
                                var angle = (k - 1) * Math.PI / n;
                                var scale_k = 1 + 0.3 * k;

                                viz.drawCurve(function(t) {
                                    var x = Math.cos(t);
                                    var y = Math.sin(t);
                                    // Apply a directional scaling
                                    var ca = Math.cos(angle);
                                    var sa = Math.sin(angle);
                                    var proj = x * ca + y * sa;
                                    var px = x + proj * (scale_k - 1) * ca;
                                    var py = y + proj * (scale_k - 1) * sa;
                                    return [px, py];
                                }.bind(null), 0, 2 * Math.PI, 200, col, 2);

                                viz.screenText('T' + k, 20, 30 + (k - 1) * 20, col, 13, 'left');
                            }

                            // Draw unit circle
                            viz.drawCurve(function(t) {
                                return [Math.cos(t), Math.sin(t)];
                            }, 0, 2 * Math.PI, 200, viz.colors.white, 1);
                            viz.screenText('Unit circle', 20, 30 + n * 20, viz.colors.white, 12, 'left');

                            // Uniform bound circle
                            var M = 1 + 0.3 * n;
                            viz.drawCircle(0, 0, M, null, viz.colors.red + '66', 1);
                            viz.screenText('Uniform bound: ||T|| \u2264 ' + M.toFixed(1), viz.width - 20, 30, viz.colors.red, 12, 'right');
                        }

                        VizEngine.createSlider(controls, 'Number of operators', 1, 8, numOps, 1, function(v) {
                            numOps = Math.round(v);
                            draw(numOps);
                        });

                        draw(numOps);
                    }
                },
                {
                    id: 'completeness-failure',
                    title: 'Failure in Incomplete Spaces',
                    description: 'See how T_n(x) = n*x_n is pointwise bounded on c_00 but ||T_n|| = n diverges.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 1, originX: 60, originY: 360 });

                        var maxN = 15;

                        function draw(N) {
                            viz.clear();

                            var ctx = viz.ctx;
                            var pad = 60;
                            var plotW = viz.width - 2 * pad;
                            var plotH = viz.height - 2 * pad;

                            // Draw axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(pad, viz.height - pad);
                            ctx.lineTo(pad + plotW, viz.height - pad);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(pad, viz.height - pad);
                            ctx.lineTo(pad, pad);
                            ctx.stroke();

                            // Labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('n', pad + plotW / 2, viz.height - 10);
                            ctx.save();
                            ctx.translate(15, pad + plotH / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillText('||T_n||', 0, 0);
                            ctx.restore();

                            // Plot ||T_n|| = n
                            var maxVal = N;
                            for (var n = 1; n <= N; n++) {
                                var x = pad + (n / N) * plotW * 0.9;
                                var y = viz.height - pad - (n / maxVal) * plotH * 0.85;
                                ctx.fillStyle = viz.colors.orange;
                                ctx.beginPath();
                                ctx.arc(x, y, 5, 0, Math.PI * 2);
                                ctx.fill();

                                if (N <= 20) {
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText(n.toString(), x, viz.height - pad + 15);
                                }
                            }

                            // Draw the line ||T_n|| = n
                            ctx.strokeStyle = viz.colors.orange + '88';
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath();
                            for (var n = 1; n <= N; n++) {
                                var x = pad + (n / N) * plotW * 0.9;
                                var y = viz.height - pad - (n / maxVal) * plotH * 0.85;
                                if (n === 1) ctx.moveTo(x, y);
                                else ctx.lineTo(x, y);
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Title and annotation
                            viz.screenText('||T_n|| = n on c_00 (incomplete)', viz.width / 2, 25, viz.colors.white, 15, 'center');
                            viz.screenText('Pointwise bounded but NOT uniformly bounded', viz.width / 2, 48, viz.colors.red, 12, 'center');
                            viz.screenText('sup ||T_n|| = \u221E', viz.width - pad - 30, pad + 20, viz.colors.red, 14, 'center');
                        }

                        VizEngine.createSlider(controls, 'N (max index)', 3, 30, maxN, 1, function(v) {
                            maxN = Math.round(v);
                            draw(maxN);
                        });

                        draw(maxN);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X = \\ell^2\\) and define \\(T_n \\colon \\ell^2 \\to \\mathbb{R}\\) by \\(T_n(x) = n \\cdot x_n\\). Is the family \\(\\{T_n\\}\\) pointwise bounded? Uniformly bounded? Explain why this does not contradict the Uniform Boundedness Principle.',
                    hint: 'Consider whether \\(\\sup_n |T_n(x)| < \\infty\\) for every \\(x \\in \\ell^2\\). What is \\(\\|T_n\\|\\)?',
                    solution: 'We have \\(\\|T_n\\| = n\\), so \\(\\sup_n \\|T_n\\| = \\infty\\): the family is not uniformly bounded. Moreover, it is not even pointwise bounded: take \\(x = (1/n)_{n \\geq 1} \\in \\ell^2\\), then \\(T_n(x) = n \\cdot (1/n) = 1\\) for all \\(n\\), which is bounded, but for \\(x = e_n\\), \\(T_n(e_n) = n \\to \\infty\\). Actually, for a fixed \\(x \\in \\ell^2\\), we have \\(|T_n(x)| = n|x_n|\\). Since \\(\\sum |x_n|^2 < \\infty\\), we know \\(|x_n| \\to 0\\), but \\(n|x_n|\\) need not be bounded. For example, \\(x_n = 1/\\sqrt{n}\\) gives \\(\\sum 1/n = \\infty\\), so \\(x \\notin \\ell^2\\). For \\(x \\in \\ell^2\\), \\(n|x_n| \\to \\infty\\) is possible: take \\(x_n = 1/n\\). Then \\(\\sum 1/n^2 < \\infty\\) so \\(x \\in \\ell^2\\), but \\(T_n(x) = 1\\) for all \\(n\\), which is bounded. In fact, by Cauchy-Schwarz applied cleverly, \\(\\sup_n n|x_n|\\) can be infinite for some \\(x \\in \\ell^2\\). Take \\(x_{n_k} = 1/\\sqrt{n_k}\\) for a sparse subsequence with \\(\\sum 1/n_k < \\infty\\). Then \\(n_k \\cdot x_{n_k} = \\sqrt{n_k} \\to \\infty\\). So the family is NOT pointwise bounded, and the UBP correctly predicts it cannot be uniformly bounded.'
                },
                {
                    question: 'Prove directly (without the Banach-Steinhaus theorem) that if \\(X = \\mathbb{R}^n\\) and \\(\\{T_\\alpha\\} \\subseteq \\mathcal{L}(\\mathbb{R}^n, Y)\\) is pointwise bounded, then it is uniformly bounded.',
                    hint: 'Use the pointwise bounds on the standard basis vectors \\(e_1, \\ldots, e_n\\) and the triangle inequality.',
                    solution: 'Let \\(M_i = \\sup_\\alpha \\|T_\\alpha e_i\\| < \\infty\\) for \\(i = 1, \\ldots, n\\). For any \\(x = \\sum_{i=1}^n x_i e_i\\) with \\(\\|x\\| \\leq 1\\), we have \\(|x_i| \\leq \\|x\\| \\leq 1\\) (using the \\(\\ell^\\infty\\) norm, or a constant depending on the norm). Then \\(\\|T_\\alpha x\\| \\leq \\sum_{i=1}^n |x_i| \\cdot \\|T_\\alpha e_i\\| \\leq \\sum_{i=1}^n M_i =: M\\). Since this holds for all \\(\\alpha\\) and all \\(\\|x\\| \\leq 1\\), we get \\(\\sup_\\alpha \\|T_\\alpha\\| \\leq M < \\infty\\).'
                },
                {
                    question: 'Let \\(X\\) be a normed space (not necessarily complete) and \\(\\{f_n\\} \\subseteq X^*\\) a sequence of bounded linear functionals such that \\(\\sup_n |f_n(x)| \\leq C\\|x\\|\\) for all \\(x \\in X\\) and some constant \\(C > 0\\). Is the family \\(\\{f_n\\}\\) uniformly bounded?',
                    hint: 'The condition given is stronger than pointwise boundedness. What does \\(\\sup_n |f_n(x)| \\leq C\\|x\\|\\) say about \\(\\|f_n\\|\\)?',
                    solution: 'Yes. The condition \\(\\sup_n |f_n(x)| \\leq C\\|x\\|\\) for all \\(x\\) means that for each \\(n\\), \\(|f_n(x)| \\leq C\\|x\\|\\) for all \\(x\\), so \\(\\|f_n\\| \\leq C\\). Hence \\(\\sup_n \\|f_n\\| \\leq C < \\infty\\). This is trivially uniformly bounded and requires no completeness. The power of the Uniform Boundedness Principle is that it derives uniform boundedness from the weaker condition of pointwise boundedness (where the bound may depend on \\(x\\)).'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Banach-Steinhaus Theorem
        // ============================================================
        {
            id: 'ch08-sec02',
            title: 'Banach-Steinhaus Theorem',
            content: `
<div class="bridge-block section-bridge">
<p><strong>The Main Theorem.</strong> With the distinction between pointwise and uniform boundedness clear, we prove the Banach-Steinhaus Theorem: pointwise boundedness plus completeness of the domain implies uniform boundedness. The proof is a direct application of the Baire Category Theorem.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We state and prove the Banach-Steinhaus Theorem, highlight the role of completeness in the proof (the domain must be Banach), and show that the conclusion can be strengthened to give explicit norm bounds.</p>
</div>

                <h2>The Banach-Steinhaus Theorem</h2>

                <p>We now state and prove the crown jewel of this chapter. The theorem was independently discovered by Stefan Banach and Hugo Steinhaus in 1927, though it was also known to Hans Hahn around the same time.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.4 (Uniform Boundedness Principle / Banach-Steinhaus)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a <strong>Banach space</strong>, \\(Y\\) a normed space, and \\(\\{T_\\alpha\\}_{\\alpha \\in A} \\subseteq \\mathcal{B}(X, Y)\\) a family of bounded linear operators. If the family is pointwise bounded, i.e.,</p>
                        \\[\\sup_{\\alpha \\in A} \\|T_\\alpha x\\| < \\infty \\quad \\text{for every } x \\in X,\\]
                        <p>then it is uniformly bounded:</p>
                        \\[\\sup_{\\alpha \\in A} \\|T_\\alpha\\| < \\infty.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The proof uses the Baire Category Theorem in a beautiful way. Define for each \\(n \\in \\mathbb{N}\\) the set</p>
                        \\[F_n = \\{x \\in X : \\sup_{\\alpha \\in A} \\|T_\\alpha x\\| \\leq n\\} = \\bigcap_{\\alpha \\in A} \\{x : \\|T_\\alpha x\\| \\leq n\\}.\\]
                        <p><strong>Step 1: Each \\(F_n\\) is closed.</strong> For each \\(\\alpha\\), the map \\(x \\mapsto \\|T_\\alpha x\\|\\) is continuous (since \\(T_\\alpha\\) is bounded). Hence \\(\\{x : \\|T_\\alpha x\\| \\leq n\\}\\) is closed, and \\(F_n\\), as an intersection of closed sets, is closed.</p>
                        <p><strong>Step 2: \\(X = \\bigcup_{n=1}^\\infty F_n\\).</strong> By hypothesis, for each \\(x \\in X\\), \\(\\sup_\\alpha \\|T_\\alpha x\\| < \\infty\\), so \\(x \\in F_n\\) for some \\(n\\).</p>
                        <p><strong>Step 3: Apply Baire.</strong> Since \\(X\\) is a Banach space (hence a complete metric space), the Baire Category Theorem says \\(X\\) is not a countable union of nowhere dense sets. Since \\(X = \\bigcup F_n\\), at least one \\(F_N\\) has nonempty interior: there exist \\(x_0 \\in X\\) and \\(r > 0\\) such that \\(B(x_0, r) \\subseteq F_N\\).</p>
                        <p><strong>Step 4: From a ball to the origin.</strong> For any \\(x \\in X\\) with \\(\\|x\\| \\leq 1\\), we have \\(x_0 + rx \\in B(x_0, r) \\subseteq F_N\\), so</p>
                        \\[\\|T_\\alpha(x_0 + rx)\\| \\leq N \\quad \\text{for all } \\alpha.\\]
                        <p>Then</p>
                        \\[r\\|T_\\alpha x\\| = \\|T_\\alpha(rx)\\| = \\|T_\\alpha(x_0 + rx) - T_\\alpha x_0\\| \\leq \\|T_\\alpha(x_0 + rx)\\| + \\|T_\\alpha x_0\\| \\leq N + N = 2N.\\]
                        <p>Therefore \\(\\|T_\\alpha x\\| \\leq 2N/r\\) for all \\(\\alpha\\) and all \\(\\|x\\| \\leq 1\\), giving \\(\\sup_\\alpha \\|T_\\alpha\\| \\leq 2N/r < \\infty\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="baire-proof-illustration"></div>

                <div class="env-block remark">
                    <div class="env-title">Remark 8.5</div>
                    <div class="env-body">
                        <p>The proof reveals a quantitative relationship: the uniform bound \\(\\sup_\\alpha \\|T_\\alpha\\|\\) depends on the radius of the ball in \\(F_N\\) found by Baire's theorem. This radius is non-constructive --- Baire's theorem tells us such a ball exists but does not tell us where it is or how large it is.</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 8.6</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a Banach space, \\(Y\\) a normed space, and \\(\\{T_\\alpha\\} \\subseteq \\mathcal{B}(X, Y)\\). If \\(\\sup_\\alpha \\|T_\\alpha\\| = \\infty\\), then the set</p>
                        \\[R = \\{x \\in X : \\sup_\\alpha \\|T_\\alpha x\\| = \\infty\\}\\]
                        <p>is a <strong>dense \\(G_\\delta\\)</strong> subset of \\(X\\) (hence, in particular, nonempty and uncountable).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By contrapositive of the Banach-Steinhaus theorem, if \\(\\sup_\\alpha \\|T_\\alpha\\| = \\infty\\), then the family is not pointwise bounded, so \\(R \\neq \\emptyset\\). More precisely, using the notation from the proof above, \\(X \\setminus R = \\bigcup_{n=1}^\\infty F_n\\). Since \\(\\sup_\\alpha \\|T_\\alpha\\| = \\infty\\), no \\(F_n\\) has interior (otherwise the proof would give a finite uniform bound). So each \\(F_n\\) is closed and nowhere dense, meaning \\(X \\setminus R\\) is a meager (first category) set. Hence \\(R\\) is a comeager (residual) \\(G_\\delta\\) set.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="banach-steinhaus-animation"></div>

                <div class="env-block example">
                    <div class="env-title">Example 8.7</div>
                    <div class="env-body">
                        <p>Let \\(X = \\ell^p\\) with \\(1 \\leq p < \\infty\\) and define projection operators \\(P_n \\colon \\ell^p \\to \\ell^p\\) by \\(P_n(x) = (x_1, x_2, \\ldots, x_n, 0, 0, \\ldots)\\). Each \\(\\|P_n\\| = 1\\), so \\(\\sup_n \\|P_n\\| = 1\\) --- the family is uniformly bounded. Moreover, \\(P_n x \\to x\\) for every \\(x \\in \\ell^p\\), consistent with the Banach-Steinhaus theorem.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'baire-proof-illustration',
                    title: 'Baire Category in the UBP Proof',
                    description: 'Visualize the sets F_n = {x : sup||T_a(x)|| <= n} covering the Banach space, with at least one having nonempty interior.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 40, originX: 350, originY: 210 });

                        var highlightN = 3;

                        function draw(N) {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var colors = [viz.colors.blue + '22', viz.colors.teal + '33', viz.colors.green + '44', viz.colors.orange + '55', viz.colors.purple + '55'];
                            var strokes = [viz.colors.blue, viz.colors.teal, viz.colors.green, viz.colors.orange, viz.colors.purple];

                            // Draw nested sets F_1 subset F_2 subset ... subset F_N
                            for (var n = N; n >= 1; n--) {
                                var r = 0.5 + 0.6 * n;
                                var col = colors[(n - 1) % colors.length];
                                var scol = strokes[(n - 1) % strokes.length];
                                viz.drawCircle(0, 0, r, col, scol, 1.5);
                                viz.drawText('F' + n, r - 0.3, r - 0.3, scol, 12, 'left');
                            }

                            // Highlight F_N with a ball inside it
                            var rN = 0.5 + 0.6 * N;
                            var ballR = 0.4;
                            var x0 = rN * 0.4;
                            var y0 = rN * 0.3;

                            // The ball B(x0, r) inside F_N
                            viz.drawCircle(x0, y0, ballR, viz.colors.red + '33', viz.colors.red, 2);
                            viz.drawPoint(x0, y0, viz.colors.red, 'x0', 4);
                            viz.drawText('B(x0, r) \u2286 F_N', x0 + 0.5, y0 + 0.7, viz.colors.red, 12, 'left');

                            // Arrow from origin
                            viz.drawSegment(0, 0, x0, y0, viz.colors.white + '44', 1, true);

                            viz.screenText('At least one F_N has nonempty interior (Baire)', viz.width / 2, viz.height - 20, viz.colors.text, 12, 'center');
                        }

                        VizEngine.createSlider(controls, 'Number of F_n sets', 1, 5, highlightN, 1, function(v) {
                            highlightN = Math.round(v);
                            draw(highlightN);
                        });

                        draw(highlightN);
                    }
                },
                {
                    id: 'banach-steinhaus-animation',
                    title: 'Banach-Steinhaus: Pointwise to Uniform',
                    description: 'Animate a family of operators: each vector is bounded, and the uniform bound emerges.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 45, originX: 350, originY: 210 });
                        var numOps = 6;
                        var theta = 0;

                        function drawFrame() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Unit circle
                            viz.drawCurve(function(t) {
                                return [Math.cos(t), Math.sin(t)];
                            }, 0, 2 * Math.PI, 200, viz.colors.white + '44', 1);

                            // Test vector on unit circle
                            var x = Math.cos(theta);
                            var y = Math.sin(theta);
                            viz.drawVector(0, 0, x, y, viz.colors.white, 'x', 1.5);

                            var maxNorm = 0;
                            var colors = [viz.colors.blue, viz.colors.teal, viz.colors.orange, viz.colors.green, viz.colors.purple, viz.colors.pink, viz.colors.yellow, viz.colors.red];

                            // Apply each operator to x
                            for (var k = 1; k <= numOps; k++) {
                                var angle_k = (k - 1) * Math.PI / numOps;
                                var stretch = 1.0 + 0.4 * Math.sin(k * 1.3);

                                // T_k scales in direction angle_k
                                var ca = Math.cos(angle_k);
                                var sa = Math.sin(angle_k);
                                var proj = x * ca + y * sa;
                                var Tx = x + proj * (stretch - 1) * ca;
                                var Ty = y + proj * (stretch - 1) * sa;

                                var col = colors[(k - 1) % colors.length];
                                viz.drawVector(0, 0, Tx, Ty, col, '', 1.5);
                                viz.drawPoint(Tx, Ty, col, 'T' + k + 'x', 4);

                                var norm = Math.sqrt(Tx * Tx + Ty * Ty);
                                if (norm > maxNorm) maxNorm = norm;
                            }

                            // Pointwise bound for this x
                            viz.screenText('sup ||T_k x|| = ' + maxNorm.toFixed(2) + ' for this x', viz.width / 2, 25, viz.colors.yellow, 13, 'center');
                            viz.screenText('UBP: sup_k ||T_k|| < \u221E when X is Banach', viz.width / 2, 48, viz.colors.teal, 12, 'center');
                        }

                        VizEngine.createSlider(controls, 'Direction \u03B8', 0, 6.28, 0, 0.01, function(v) {
                            theta = v;
                            drawFrame();
                        });

                        VizEngine.createSlider(controls, 'Number of operators', 1, 8, numOps, 1, function(v) {
                            numOps = Math.round(v);
                            drawFrame();
                        });

                        drawFrame();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that the hypothesis "\\(X\\) is a Banach space" in the Banach-Steinhaus theorem cannot be weakened to "\\(X\\) is a normed space." Construct an explicit counterexample.',
                    hint: 'Use the space \\(c_{00}\\) of finitely supported sequences with the sup norm and the functionals \\(f_n(x) = n \\cdot x_n\\).',
                    solution: 'Let \\(X = c_{00}\\) with the sup norm. Define \\(f_n(x) = n x_n\\). For each \\(x \\in c_{00}\\), there exists \\(N\\) with \\(x_k = 0\\) for \\(k > N\\), so \\(\\sup_n |f_n(x)| = \\max_{n \\leq N} n|x_n| < \\infty\\). Thus \\(\\{f_n\\}\\) is pointwise bounded. But \\(\\|f_n\\| \\geq |f_n(e_n)| = n\\), so \\(\\sup_n \\|f_n\\| = \\infty\\). Since \\(c_{00}\\) is not complete (it is not closed in \\(\\ell^\\infty\\)), this does not contradict the Banach-Steinhaus theorem.'
                },
                {
                    question: 'In the proof of the Banach-Steinhaus theorem, why is it essential that the operators \\(T_\\alpha\\) are <em>linear</em>? Where does linearity enter?',
                    hint: 'Look at Step 4 of the proof, where we pass from the ball \\(B(x_0, r)\\) to the unit ball.',
                    solution: 'Linearity is used in Step 4 when we write \\(T_\\alpha(x_0 + rx) = T_\\alpha(x_0) + rT_\\alpha(x) \\). Without linearity (or at least some form of subadditivity), we cannot decompose \\(T_\\alpha(x_0 + rx)\\) to isolate \\(T_\\alpha(x)\\). Furthermore, the definition \\(\\|T_\\alpha\\| = \\sup_{\\|x\\| \\leq 1} \\|T_\\alpha x\\|\\) only makes sense as a bound for all inputs when \\(T_\\alpha\\) is linear (so that the behavior on the unit ball determines the behavior everywhere via scaling).'
                },
                {
                    question: 'Let \\(X\\) be a Banach space and \\(\\{T_n\\} \\subseteq \\mathcal{B}(X, Y)\\). Suppose \\(\\sup_n \\|T_n x\\| < \\infty\\) for all \\(x\\) in a dense subset \\(D \\subseteq X\\). Can you conclude that \\(\\sup_n \\|T_n\\| < \\infty\\)?',
                    hint: 'Density alone is not enough. Think about what happens if the pointwise bound on \\(D\\) does not extend to all of \\(X\\).',
                    solution: 'No, this is not enough in general. The Banach-Steinhaus theorem requires pointwise boundedness on ALL of \\(X\\). A dense subset may miss crucial vectors. For a counterexample, let \\(X = \\ell^2\\) and \\(D = c_{00}\\) (dense in \\(\\ell^2\\)). Define \\(T_n(x) = n x_n\\). On \\(c_{00}\\), \\(\\sup_n |T_n(x)| < \\infty\\) for each \\(x\\) (as shown earlier). But \\(\\|T_n\\| = n \\to \\infty\\). The pointwise boundedness on \\(D\\) does not extend to \\(X\\): there exist \\(x \\in \\ell^2 \\setminus c_{00}\\) with \\(\\sup_n |T_n(x)| = \\infty\\). However, if we additionally know that \\(\\sup_n \\|T_n\\| < \\infty\\) or if the pointwise bounds on \\(D\\) are uniform in \\(x\\), then we can extend to all of \\(X\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Application: Convergence of Operators
        // ============================================================
        {
            id: 'ch08-sec03',
            title: 'Application: Convergence of Operators',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Convergence via Uniform Bounds.</strong> The Uniform Boundedness Principle has an immediate and powerful consequence for sequences of operators: if \(T_n x \to Tx\) pointwise, then the \(T_n\) are automatically uniformly bounded, and the limit \(T\) is bounded. This controls the limit operator "for free."</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove that pointwise limits of bounded operators are bounded, establish conditions for operator convergence from a dense subspace to extend to the whole space, and apply these results to summability methods and approximation operators.</p>
</div>

                <h2>Application: Convergence of Operators</h2>

                <p>The Uniform Boundedness Principle has immediate and far-reaching consequences for sequences of operators. When operators converge pointwise, the UBP reveals hidden structure: the norms must stay bounded, and the limit inherits boundedness.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.8 (Pointwise limit of operators)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a Banach space, \\(Y\\) a normed space, and \\(T_n \\in \\mathcal{B}(X, Y)\\) for each \\(n \\in \\mathbb{N}\\). Suppose that for each \\(x \\in X\\), the limit</p>
                        \\[Tx := \\lim_{n \\to \\infty} T_n x\\]
                        <p>exists (in the norm of \\(Y\\)). Then:</p>
                        <p><strong>(a)</strong> \\(\\sup_n \\|T_n\\| < \\infty\\).</p>
                        <p><strong>(b)</strong> \\(T\\) is a bounded linear operator, and \\(\\|T\\| \\leq \\liminf_{n \\to \\infty} \\|T_n\\|\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(a)</strong> Since \\(T_n x \\to Tx\\) for each \\(x\\), the sequence \\((\\|T_n x\\|)_{n=1}^\\infty\\) is convergent, hence bounded: \\(\\sup_n \\|T_n x\\| < \\infty\\). By the Banach-Steinhaus theorem, \\(\\sup_n \\|T_n\\| < \\infty\\).</p>
                        <p><strong>(b)</strong> Linearity of \\(T\\) is immediate: \\(T(\\alpha x + \\beta y) = \\lim T_n(\\alpha x + \\beta y) = \\alpha \\lim T_n x + \\beta \\lim T_n y = \\alpha Tx + \\beta Ty\\). For boundedness, let \\(M = \\sup_n \\|T_n\\|\\). For any \\(x \\in X\\),</p>
                        \\[\\|Tx\\| = \\lim_{n \\to \\infty} \\|T_n x\\| \\leq \\liminf_{n \\to \\infty} \\|T_n\\| \\cdot \\|x\\|,\\]
                        <p>so \\(\\|T\\| \\leq \\liminf_n \\|T_n\\| \\leq M < \\infty\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="operator-convergence"></div>

                <div class="env-block remark">
                    <div class="env-title">Remark 8.9</div>
                    <div class="env-body">
                        <p>Part (a) is purely a consequence of the UBP and is remarkable: the mere pointwise convergence of operators forces a <em>uniform} bound on their norms. This is a quantitative strengthening of pointwise convergence and has no analogue for general nonlinear maps.</em></p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 8.10 (Pointwise convergence on a dense set)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a Banach space, \\(Y\\) a Banach space, and \\(T_n \\in \\mathcal{B}(X, Y)\\) with \\(\\sup_n \\|T_n\\| < \\infty\\). If \\(T_n x\\) converges for every \\(x\\) in a <strong>dense</strong> subset \\(D \\subseteq X\\), then \\(T_n x\\) converges for <strong>every</strong> \\(x \\in X\\), and the limit operator \\(T\\) is bounded.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(M = \\sup_n \\|T_n\\|\\) and fix \\(x \\in X\\). Given \\(\\varepsilon > 0\\), choose \\(d \\in D\\) with \\(\\|x - d\\| < \\varepsilon / (3M)\\). Since \\(T_n d\\) converges, there exists \\(N\\) such that \\(\\|T_n d - T_m d\\| < \\varepsilon/3\\) for all \\(n, m \\geq N\\). Then:</p>
                        \\[\\|T_n x - T_m x\\| \\leq \\|T_n(x - d)\\| + \\|T_n d - T_m d\\| + \\|T_m(d - x)\\| \\leq M \\cdot \\frac{\\varepsilon}{3M} + \\frac{\\varepsilon}{3} + M \\cdot \\frac{\\varepsilon}{3M} = \\varepsilon.\\]
                        <p>So \\((T_n x)\\) is Cauchy in \\(Y\\). Since \\(Y\\) is Banach, it converges. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="dense-convergence"></div>

                <div class="env-block example">
                    <div class="env-title">Example 8.11 (Cesaro means)</div>
                    <div class="env-body">
                        <p>Define \\(S_n \\colon C[0,1] \\to C[0,1]\\) by \\(S_n f = \\frac{1}{n}\\sum_{k=0}^{n-1} T^k f\\), where \\(T\\) is some bounded operator with \\(\\|T\\| \\leq 1\\). Then \\(\\|S_n\\| \\leq 1\\) for all \\(n\\). If \\(S_n f\\) converges for \\(f\\) in a dense subset, it converges for all \\(f\\) by Corollary 8.10.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 8.12 (Convergence of integral operators)</div>
                    <div class="env-body">
                        <p>Consider \\(T_n \\colon L^2[0,1] \\to L^2[0,1]\\) given by \\(T_n f(x) = \\int_0^1 K_n(x,y) f(y)\\, dy\\), where \\(K_n\\) are kernels with \\(\\sup_n \\|T_n\\| < \\infty\\). If \\(T_n f \\to Tf\\) for all polynomials (which are dense in \\(L^2\\)), then \\(T_n f \\to Tf\\) for all \\(f \\in L^2[0,1]\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'operator-convergence',
                    title: 'Convergence of Operators',
                    description: 'Watch a sequence of operators T_n converge pointwise while norms stay bounded.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 60, originX: 350, originY: 210 });
                        var N = 5;

                        function draw(maxN) {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Unit circle
                            viz.drawCurve(function(t) {
                                return [Math.cos(t), Math.sin(t)];
                            }, 0, 2 * Math.PI, 200, viz.colors.white + '33', 1);

                            // T_n: scaling that converges to identity + slight rotation
                            // T_n = (1 + 1/n) * R(pi/(2n))
                            var colors = [viz.colors.blue, viz.colors.teal, viz.colors.orange, viz.colors.green, viz.colors.purple, viz.colors.pink, viz.colors.yellow, viz.colors.red];
                            var norms = [];

                            for (var n = 1; n <= maxN; n++) {
                                var scale_n = 1 + 1 / n;
                                var angle_n = Math.PI / (2 * n);
                                var col = colors[(n - 1) % colors.length];
                                norms.push(scale_n);

                                // Draw image of unit circle under T_n
                                (function(sn, an, c) {
                                    viz.drawCurve(function(t) {
                                        var x = Math.cos(t);
                                        var y = Math.sin(t);
                                        var rx = sn * (Math.cos(an) * x - Math.sin(an) * y);
                                        var ry = sn * (Math.sin(an) * x + Math.cos(an) * y);
                                        return [rx, ry];
                                    }, 0, 2 * Math.PI, 200, c, 1.5);
                                })(scale_n, angle_n, col);

                                viz.screenText('T' + n + ': ||T' + n + '|| = ' + scale_n.toFixed(2), 20, 25 + (n - 1) * 18, col, 12, 'left');
                            }

                            // Draw limit operator (identity) image
                            viz.drawCurve(function(t) {
                                return [Math.cos(t), Math.sin(t)];
                            }, 0, 2 * Math.PI, 200, viz.colors.red, 2);
                            viz.screenText('T = I (limit), ||T|| = 1', 20, 25 + maxN * 18, viz.colors.red, 12, 'left');

                            var supNorm = Math.max.apply(null, norms);
                            viz.screenText('sup ||T_n|| = ' + supNorm.toFixed(2) + ' < \u221E  \u2713', viz.width / 2, viz.height - 20, viz.colors.teal, 13, 'center');
                        }

                        VizEngine.createSlider(controls, 'Number of operators n', 1, 8, N, 1, function(v) {
                            N = Math.round(v);
                            draw(N);
                        });

                        draw(N);
                    }
                },
                {
                    id: 'dense-convergence',
                    title: 'Convergence from Dense Subsets',
                    description: 'Convergence on a dense set plus uniform boundedness implies convergence everywhere.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 1, originX: 60, originY: 360 });

                        var N = 8;

                        function draw(maxN) {
                            viz.clear();
                            var ctx = viz.ctx;
                            var pad = 60;
                            var plotW = viz.width - 2 * pad;
                            var plotH = viz.height - 2 * pad;

                            // Draw axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(pad, viz.height - pad);
                            ctx.lineTo(pad + plotW, viz.height - pad);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(pad, viz.height - pad);
                            ctx.lineTo(pad, pad);
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('x', pad + plotW / 2, viz.height - 10);

                            // Example: T_n f(x) = sum_{k=0}^{n} c_k x^k truncated Fourier-like
                            // We approximate f(x) = sin(3*pi*x) on [0,1] by partial sums
                            var target = function(x) { return Math.sin(3 * Math.PI * x); };

                            // Draw target
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            var steps = 200;
                            for (var i = 0; i <= steps; i++) {
                                var x = i / steps;
                                var val = target(x);
                                var px = pad + x * plotW;
                                var py = viz.height / 2 - val * (plotH / 3);
                                if (i === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Draw T_n approximations (polynomial approximations)
                            var colors = [viz.colors.blue, viz.colors.teal, viz.colors.orange, viz.colors.green, viz.colors.purple, viz.colors.pink, viz.colors.yellow, viz.colors.red];

                            for (var n = 1; n <= Math.min(maxN, 8); n++) {
                                var col = colors[(n - 1) % colors.length];
                                ctx.strokeStyle = col;
                                ctx.lineWidth = 1.2;
                                ctx.beginPath();

                                for (var i = 0; i <= steps; i++) {
                                    var x = i / steps;
                                    // Partial sum of Taylor-like approx: use truncated sine expansion
                                    var val = 0;
                                    var w = 3 * Math.PI;
                                    for (var k = 0; k < n; k++) {
                                        // Taylor series for sin: (-1)^k (wx)^(2k+1) / (2k+1)!
                                        var term = 1;
                                        for (var j = 1; j <= 2 * k + 1; j++) {
                                            term *= w * x / j;
                                        }
                                        if (k % 2 === 1) term = -term;
                                        val += term;
                                    }
                                    var px = pad + x * plotW;
                                    var py = viz.height / 2 - val * (plotH / 3);
                                    py = Math.max(pad - 10, Math.min(viz.height - pad + 10, py));
                                    if (i === 0) ctx.moveTo(px, py);
                                    else ctx.lineTo(px, py);
                                }
                                ctx.stroke();
                            }

                            // Dense points (rationals) highlighted
                            ctx.fillStyle = viz.colors.yellow;
                            for (var q = 2; q <= 6; q++) {
                                for (var p = 1; p < q; p++) {
                                    var xr = p / q;
                                    var px = pad + xr * plotW;
                                    ctx.beginPath();
                                    ctx.arc(px, viz.height - pad + 3, 3, 0, Math.PI * 2);
                                    ctx.fill();
                                }
                            }

                            viz.screenText('f(x) = sin(3\u03C0x) (white) and polynomial approximations T_n f', viz.width / 2, 18, viz.colors.white, 13, 'center');
                            viz.screenText('Yellow dots: dense rational points where convergence is checked first', viz.width / 2, 38, viz.colors.yellow, 11, 'center');
                        }

                        VizEngine.createSlider(controls, 'Approximation order n', 1, 8, N, 1, function(v) {
                            N = Math.round(v);
                            draw(N);
                        });

                        draw(N);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X\\) be a Banach space and \\(T_n \\in \\mathcal{B}(X)\\) with \\(T_n x \\to 0\\) for every \\(x \\in X\\). Prove that \\(\\sup_n \\|T_n\\| < \\infty\\) and that for every bounded sequence \\((x_k)\\) in \\(X\\) and every sequence \\(n_k \\to \\infty\\), we have \\(\\|T_{n_k} x_k\\| \\to 0\\) if additionally \\(\\|T_n\\| \\to 0\\).',
                    hint: 'The first part is the Banach-Steinhaus theorem. For the second part, use the uniform bound.',
                    solution: 'By the Banach-Steinhaus theorem, \\(M = \\sup_n \\|T_n\\| < \\infty\\). For the second part, if \\(\\|T_n\\| \\to 0\\) and \\(\\|x_k\\| \\leq C\\), then \\(\\|T_{n_k} x_k\\| \\leq \\|T_{n_k}\\| \\cdot \\|x_k\\| \\leq \\|T_{n_k}\\| \\cdot C \\to 0\\). Note: if we only assume \\(T_n x \\to 0\\) pointwise (without \\(\\|T_n\\| \\to 0\\)), the conclusion \\(\\|T_{n_k} x_k\\| \\to 0\\) for bounded \\((x_k)\\) may fail. Example: \\(T_n = P_n^\\perp\\) (projection onto the tail) in \\(\\ell^2\\) has \\(\\|T_n\\| = 1\\) for all \\(n\\), \\(T_n x \\to 0\\) for all \\(x\\), but \\(T_n e_n = e_n\\) has norm \\(1\\).'
                },
                {
                    question: 'Let \\(f_n \\in X^*\\) (the dual of a Banach space \\(X\\)) be a sequence of bounded linear functionals such that \\(\\lim_{n \\to \\infty} f_n(x)\\) exists for every \\(x \\in X\\). Define \\(f(x) = \\lim_n f_n(x)\\). Prove that \\(f \\in X^*\\) and \\(\\|f\\| \\leq \\liminf_n \\|f_n\\|\\).',
                    hint: 'Apply Theorem 8.8 with \\(Y = \\mathbb{R}\\) (or \\(\\mathbb{C}\\)).',
                    solution: 'Linearity of \\(f\\) is clear: \\(f(\\alpha x + \\beta y) = \\lim_n f_n(\\alpha x + \\beta y) = \\alpha f(x) + \\beta f(y)\\). By the Banach-Steinhaus theorem (since convergent sequences are bounded), \\(M = \\sup_n \\|f_n\\| < \\infty\\). For boundedness: \\(|f(x)| = \\lim_n |f_n(x)| \\leq \\liminf_n \\|f_n\\| \\cdot \\|x\\|\\), so \\(\\|f\\| \\leq \\liminf_n \\|f_n\\| \\leq M\\). Hence \\(f \\in X^*\\).'
                },
                {
                    question: 'Give an example showing that the norm inequality in Theorem 8.8(b) can be strict: find \\(T_n \\to T\\) pointwise with \\(\\|T\\| < \\liminf_n \\|T_n\\|\\).',
                    hint: 'Consider projections in a Hilbert space.',
                    solution: 'In \\(\\ell^2\\), define \\(T_n x = x + \\frac{1}{n} x_1 e_n\\) where \\(e_n\\) is the \\(n\\)-th standard basis vector. Then \\(T_n x \\to x\\) for all \\(x\\), so \\(T = I\\) with \\(\\|T\\| = 1\\). But \\(\\|T_n e_1\\|^2 = \\|e_1 + \\frac{1}{n} e_n\\|^2 = 1 + 1/n^2\\), and \\(\\|T_n\\| \\geq \\|T_n e_1\\| = \\sqrt{1 + 1/n^2} > 1\\), so \\(\\liminf_n \\|T_n\\| \\geq 1\\). Actually this gives equality. For a stricter example, let \\(T_n = (1 + 1/n)I\\). Then \\(T_n x \\to x\\) for all \\(x\\), \\(T = I\\), \\(\\|T\\| = 1\\), but \\(\\|T_n\\| = 1 + 1/n\\), so \\(\\liminf_n \\|T_n\\| = 1 = \\|T\\|\\). For truly strict: let \\(T_n x = x + \\langle x, e_n \\rangle e_1\\). Then \\(T_n x \\to x\\) for all \\(x\\) (since \\(\\langle x, e_n \\rangle \\to 0\\) by Bessel). \\(T = I\\), \\(\\|T\\| = 1\\). But \\(T_n e_n = e_n + e_1\\), so \\(\\|T_n\\| \\geq \\|e_n + e_1\\| = \\sqrt{2}\\). Hence \\(\\liminf_n \\|T_n\\| \\geq \\sqrt{2} > 1 = \\|T\\|\\).'
                },
                {
                    question: 'Let \\(X, Y\\) be Banach spaces and \\(T_n \\in \\mathcal{B}(X, Y)\\). Prove that if \\(T_n x \\to Tx\\) for all \\(x \\in X\\), then \\(T_n x_n \\to Tx\\) whenever \\(x_n \\to x\\) in \\(X\\).',
                    hint: 'Write \\(T_n x_n - Tx = T_n(x_n - x) + (T_n x - Tx)\\) and use the uniform bound.',
                    solution: 'By Banach-Steinhaus, \\(M = \\sup_n \\|T_n\\| < \\infty\\). Write \\(T_n x_n - Tx = T_n(x_n - x) + (T_n x - Tx)\\). Then \\(\\|T_n x_n - Tx\\| \\leq \\|T_n\\| \\cdot \\|x_n - x\\| + \\|T_n x - Tx\\| \\leq M \\|x_n - x\\| + \\|T_n x - Tx\\|\\). The first term goes to \\(0\\) since \\(x_n \\to x\\) and \\(M\\) is finite. The second term goes to \\(0\\) by pointwise convergence. Hence \\(T_n x_n \\to Tx\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Application: Divergence of Fourier Series
        // ============================================================
        {
            id: 'ch08-sec04',
            title: 'Application: Divergence of Fourier Series',
            content: `
<div class="bridge-block section-bridge">
<p><strong>A Classical Application.</strong> One of the most celebrated applications of the Uniform Boundedness Principle is to Fourier analysis: there exists a continuous function whose Fourier series diverges at a point. The proof uses UBP to show that the norms of the partial-sum operators (Dirichlet kernels) blow up.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We compute the operator norms of partial Fourier sums (the Lebesgue constants), show they grow like \(\log n\), and conclude via UBP that pointwise convergence fails for some continuous function. This is a striking example of a non-constructive existence proof.</p>
</div>

                <h2>Application: Divergence of Fourier Series</h2>

                <p>One of the most celebrated applications of the Uniform Boundedness Principle is the existence of a continuous function whose Fourier series diverges at a point. This result, due to du Bois-Reymond (1876), was one of the early surprises of Fourier analysis. The UBP provides an elegant and concise proof.</p>

                <h3>Fourier Partial Sums and the Dirichlet Kernel</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.13 (Fourier partial sums)</div>
                    <div class="env-body">
                        <p>For \\(f \\in C_{2\\pi}\\) (continuous \\(2\\pi\\)-periodic functions on \\(\\mathbb{R}\\)), the \\(n\\)-th partial sum of the Fourier series of \\(f\\) is</p>
                        \\[S_n f(t) = \\sum_{k=-n}^{n} \\hat{f}(k) e^{ikt} = \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} f(s) D_n(t - s)\\, ds,\\]
                        <p>where \\(D_n\\) is the <strong>Dirichlet kernel</strong>:</p>
                        \\[D_n(t) = \\sum_{k=-n}^{n} e^{ikt} = \\frac{\\sin\\big((n + \\tfrac{1}{2})t\\big)}{\\sin(t/2)}.\\]
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="dirichlet-kernel"></div>

                <p>The operator \\(S_n \\colon C_{2\\pi} \\to \\mathbb{R}\\) given by \\(f \\mapsto S_n f(0)\\) is a bounded linear functional on \\(C_{2\\pi}\\) with the sup norm. Its norm is:</p>

                <div class="env-block theorem">
                    <div class="env-title">Lemma 8.14</div>
                    <div class="env-body">
                        <p>\\(\\|S_n\\| = \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} |D_n(t)|\\, dt =: L_n\\), the \\(n\\)-th <strong>Lebesgue constant</strong>.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Since \\(S_n f(0) = \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} f(s) D_n(-s)\\, ds\\), the functional \\(f \\mapsto S_n f(0)\\) is represented by integration against \\(D_n(-s)/(2\\pi)\\). For a functional \\(\\Lambda(f) = \\int f \\cdot g\\) on \\(C_{2\\pi}\\) with the sup norm, \\(\\|\\Lambda\\| = \\int |g|\\). Hence \\(\\|S_n\\| = \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} |D_n(s)|\\, ds\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Lemma 8.15 (Lebesgue constants diverge)</div>
                    <div class="env-body">
                        <p>The Lebesgue constants satisfy \\(L_n \\sim \\frac{4}{\\pi^2} \\ln n\\) as \\(n \\to \\infty\\). In particular, \\(L_n \\to \\infty\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>For \\(t \\in (0, \\pi]\\), \\(|D_n(t)| \\geq |\\sin((n + 1/2)t)| / (t/2)\\) (since \\(|\\sin(t/2)| \\leq t/2\\)). Integrating:</p>
                        \\[L_n \\geq \\frac{1}{2\\pi} \\int_0^\\pi \\frac{|\\sin((n + 1/2)t)|}{t/2}\\, dt = \\frac{1}{\\pi} \\int_0^{(n+1/2)\\pi} \\frac{|\\sin u|}{u}\\, du \\sim \\frac{2}{\\pi^2} \\ln n.\\]
                        <p>A more careful analysis gives \\(L_n = \\frac{4}{\\pi^2} \\ln n + O(1)\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="lebesgue-constants"></div>

                <h3>The du Bois-Reymond Theorem</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.16 (du Bois-Reymond)</div>
                    <div class="env-body">
                        <p>There exists a continuous \\(2\\pi\\)-periodic function \\(f\\) such that the sequence of Fourier partial sums \\(S_n f(0)\\) diverges. Moreover, the set of functions in \\(C_{2\\pi}\\) whose Fourier series diverges at \\(0\\) is a dense \\(G_\\delta\\) subset (hence residual).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The space \\(C_{2\\pi}\\) with the sup norm is a Banach space. The linear functionals \\(\\Lambda_n(f) = S_n f(0)\\) satisfy \\(\\|\\Lambda_n\\| = L_n \\to \\infty\\). By the contrapositive of the Banach-Steinhaus theorem (Corollary 8.6), the set</p>
                        \\[R = \\{f \\in C_{2\\pi} : \\sup_n |S_n f(0)| = \\infty\\}\\]
                        <p>is a dense \\(G_\\delta\\) subset of \\(C_{2\\pi}\\). In particular, \\(R \\neq \\emptyset\\), and in fact \\(R\\) is comeager: the "generic" continuous function has a divergent Fourier series at \\(0\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark 8.17</div>
                    <div class="env-body">
                        <p>This is a remarkably elegant proof. We never explicitly construct the function \\(f\\) --- the Baire category argument guarantees its existence (and in fact, the existence of a residual set of such functions). The key input is the divergence of the Lebesgue constants, which is a concrete computation.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark 8.18</div>
                    <div class="env-body">
                        <p>Carleson's theorem (1966) shows that the Fourier series of any \\(f \\in L^2\\) converges <em>almost everywhere</em>. The du Bois-Reymond result shows that <em>pointwise everywhere</em> convergence can fail for continuous functions. There is no contradiction: the divergence set can have measure zero.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'dirichlet-kernel',
                    title: 'Dirichlet Kernel',
                    description: 'Visualize the Dirichlet kernel D_n(t) for increasing n. Observe the growing central peak and oscillations.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 60, originX: 350, originY: 300 });
                        var n = 5;

                        function dirichlet(t, N) {
                            if (Math.abs(t) < 1e-10) return 2 * N + 1;
                            return Math.sin((N + 0.5) * t) / Math.sin(t / 2);
                        }

                        function draw(N) {
                            // Adjust scale to fit
                            var peak = 2 * N + 1;
                            var yScale = Math.min(60, 250 / peak * 60);
                            viz.scale = yScale;
                            viz.originY = 300;

                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Draw D_n(t)
                            viz.drawCurve(function(t) {
                                return [t, dirichlet(t, N) / peak * (peak * yScale / 60)];
                            }, -Math.PI, Math.PI, 500, viz.colors.blue, 2);

                            viz.screenText('D_' + N + '(t) = sin((N+1/2)t) / sin(t/2)', viz.width / 2, 20, viz.colors.white, 14, 'center');
                            viz.screenText('Peak value: 2N+1 = ' + (2 * N + 1), viz.width / 2, 42, viz.colors.teal, 12, 'center');

                            // Mark pi and -pi
                            viz.drawText('\u03C0', Math.PI, -0.3, viz.colors.text, 12);
                            viz.drawText('-\u03C0', -Math.PI, -0.3, viz.colors.text, 12);
                        }

                        VizEngine.createSlider(controls, 'n (kernel order)', 1, 30, n, 1, function(v) {
                            n = Math.round(v);
                            draw(n);
                        });

                        draw(n);
                    }
                },
                {
                    id: 'lebesgue-constants',
                    title: 'Lebesgue Constants',
                    description: 'Plot the Lebesgue constants L_n and their logarithmic growth.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400, scale: 1, originX: 60, originY: 360 });

                        var maxN = 30;

                        function lebesgueConstant(N) {
                            // Numerical integration of |D_n(t)| / (2*pi)
                            var sum = 0;
                            var steps = 2000;
                            var dt = Math.PI / steps;
                            for (var i = 0; i < steps; i++) {
                                var t = (i + 0.5) * dt;
                                var dn = Math.abs(Math.sin((N + 0.5) * t) / Math.sin(t / 2));
                                sum += dn * dt;
                            }
                            return sum / Math.PI; // 2 * integral from 0 to pi / (2*pi)
                        }

                        function draw(N) {
                            viz.clear();
                            var ctx = viz.ctx;
                            var pad = 60;
                            var plotW = viz.width - 2 * pad;
                            var plotH = viz.height - 2 * pad;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(pad, viz.height - pad);
                            ctx.lineTo(pad + plotW, viz.height - pad);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(pad, viz.height - pad);
                            ctx.lineTo(pad, pad);
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('n', pad + plotW / 2, viz.height - 10);

                            // Compute L_n values
                            var vals = [];
                            var maxVal = 0;
                            for (var n = 1; n <= N; n++) {
                                var Ln = lebesgueConstant(n);
                                vals.push(Ln);
                                if (Ln > maxVal) maxVal = Ln;
                            }

                            // Plot L_n
                            for (var n = 1; n <= N; n++) {
                                var x = pad + (n / N) * plotW * 0.92;
                                var y = viz.height - pad - (vals[n - 1] / (maxVal * 1.1)) * plotH;
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath();
                                ctx.arc(x, y, 4, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Connect with line
                            ctx.strokeStyle = viz.colors.blue + '88';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            for (var n = 1; n <= N; n++) {
                                var x = pad + (n / N) * plotW * 0.92;
                                var y = viz.height - pad - (vals[n - 1] / (maxVal * 1.1)) * plotH;
                                if (n === 1) ctx.moveTo(x, y);
                                else ctx.lineTo(x, y);
                            }
                            ctx.stroke();

                            // Plot (4/pi^2) ln(n) for comparison
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([5, 3]);
                            ctx.beginPath();
                            for (var n = 1; n <= N; n++) {
                                var x = pad + (n / N) * plotW * 0.92;
                                var logVal = (4 / (Math.PI * Math.PI)) * Math.log(n);
                                var y = viz.height - pad - (logVal / (maxVal * 1.1)) * plotH;
                                if (n === 1) ctx.moveTo(x, y);
                                else ctx.lineTo(x, y);
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            viz.screenText('Lebesgue constants L_n (blue) vs (4/\u03C0\u00B2)ln(n) (orange)', viz.width / 2, 18, viz.colors.white, 13, 'center');
                            viz.screenText('L_n \u2192 \u221E  \u21D2  \u2203 f \u2208 C with divergent Fourier series', viz.width / 2, 40, viz.colors.red, 12, 'center');

                            if (N > 3) {
                                viz.screenText('L_' + N + ' \u2248 ' + vals[N - 1].toFixed(2), viz.width - pad - 40, pad + 20, viz.colors.blue, 12, 'center');
                            }
                        }

                        VizEngine.createSlider(controls, 'Max n', 3, 50, maxN, 1, function(v) {
                            maxN = Math.round(v);
                            draw(maxN);
                        });

                        draw(maxN);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute \\(\\|S_n\\| = L_n\\) explicitly for \\(n = 1\\) and \\(n = 2\\) by evaluating \\(\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} |D_n(t)|\\, dt\\).',
                    hint: 'Use \\(D_1(t) = 1 + 2\\cos t\\) and \\(D_2(t) = 1 + 2\\cos t + 2\\cos 2t\\). Split the integrals at the zeros.',
                    solution: 'For \\(n = 1\\): \\(D_1(t) = 1 + 2\\cos t\\). This is zero when \\(\\cos t = -1/2\\), i.e., \\(t = \\pm 2\\pi/3\\). So \\(L_1 = \\frac{1}{2\\pi}\\left[\\int_{-2\\pi/3}^{2\\pi/3}(1 + 2\\cos t)\\, dt + \\int_{2\\pi/3}^{\\pi} |1 + 2\\cos t|\\, dt + \\int_{-\\pi}^{-2\\pi/3}|1 + 2\\cos t|\\, dt\\right]\\). Computing: \\(\\int_{-2\\pi/3}^{2\\pi/3}(1 + 2\\cos t)\\, dt = [t + 2\\sin t]_{-2\\pi/3}^{2\\pi/3} = 4\\pi/3 + 2\\sqrt{3}\\). The outer parts give \\(2(2\\sqrt{3} - 2\\pi/3)/(2\\pi)\\) by symmetry. After calculation, \\(L_1 = 1 + \\frac{4\\sqrt{3}}{2\\pi} \\approx 1 + 1.103 \\approx 1.103\\). (The exact value is \\(L_1 = 1/3 + 2\\sqrt{3}/(3\\pi) \\approx 1.4359\\).) The computation for \\(n = 2\\) is similar but more involved.'
                },
                {
                    question: 'Explain why the du Bois-Reymond theorem gives a <em>residual</em> set of functions with divergent Fourier series, not just a single function. Why is this stronger than just existence?',
                    hint: 'Recall the definition of residual (comeager) sets from Baire category theory.',
                    solution: 'The Banach-Steinhaus corollary (Corollary 8.6) shows that \\(R = \\{f : \\sup_n |S_n f(0)| = \\infty\\}\\) is a dense \\(G_\\delta\\) in \\(C_{2\\pi}\\). A dense \\(G_\\delta\\) in a complete metric space is residual (comeager), meaning its complement is meager (first category). This is much stronger than mere existence: it says that in the sense of Baire category, "most" continuous functions have divergent Fourier series at 0. The functions with convergent Fourier series at 0 form a meager set. This is a topological analogue of "almost all" (though Baire category and measure give different notions of "most").'
                },
                {
                    question: 'Using the UBP, prove that there exists a continuous \\(2\\pi\\)-periodic function whose Fourier series diverges at <em>every</em> rational multiple of \\(\\pi\\).',
                    hint: 'The rationals are countable. Use the Baire category theorem to intersect countably many residual sets.',
                    solution: 'For each \\(t_0 \\in \\mathbb{Q} \\cdot \\pi\\), define \\(\\Lambda_{n,t_0}(f) = S_n f(t_0)\\). By the same argument as for \\(t_0 = 0\\), \\(\\|\\Lambda_{n,t_0}\\| = L_n \\to \\infty\\) (the Lebesgue constants are the same for all evaluation points). By Corollary 8.6, \\(R_{t_0} = \\{f : \\sup_n |S_n f(t_0)| = \\infty\\}\\) is a dense \\(G_\\delta\\). Since \\(\\mathbb{Q} \\cdot \\pi \\cap [-\\pi, \\pi]\\) is countable, \\(R = \\bigcap_{t_0 \\in \\mathbb{Q}\\pi} R_{t_0}\\) is a countable intersection of dense \\(G_\\delta\\) sets. By the Baire category theorem, \\(R\\) is still dense (and \\(G_\\delta\\)). Any \\(f \\in R\\) has divergent Fourier series at every rational multiple of \\(\\pi\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Condensation of Singularities
        // ============================================================
        {
            id: 'ch08-sec05',
            title: 'Condensation of Singularities',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Strengthening the Principle.</strong> The Condensation of Singularities technique pushes the Uniform Boundedness Principle further: not only can we find one point of divergence, but the set of "bad points" is residual (topologically generic). This shows that pathological behavior is often the <em>typical</em> behavior.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove the condensation of singularities theorem (the set where \(\sup_n \|T_n x\| = \infty\) is either empty or residual), apply it to sharpen the Fourier divergence result, and discuss the UBP dichotomy: either uniform boundedness holds or divergence is generic.</p>
</div>

<div class="bridge-block chapter-closing">
<p><strong>Looking Ahead.</strong> The Uniform Boundedness Principle controls families of operators. In Chapter 9, we tackle individual operators: the Open Mapping Theorem shows that surjective bounded operators between Banach spaces are automatically open maps, and the Closed Graph Theorem provides a powerful criterion for boundedness.</p>
</div>

                <h2>Condensation of Singularities</h2>

                <p>The Banach-Steinhaus theorem reveals a remarkable dichotomy: for a family of bounded operators on a Banach space, either the family is uniformly bounded (the "tame" case) or the set of vectors on which the family is unbounded is topologically huge. This phenomenon is known as the <strong>condensation of singularities</strong>.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.19 (Condensation of Singularities)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a Banach space, \\(Y\\) a normed space, and for each \\(m \\in \\mathbb{N}\\), let \\(\\{T_{m,n}\\}_{n \\in \\mathbb{N}} \\subseteq \\mathcal{B}(X, Y)\\) be a sequence with \\(\\sup_n \\|T_{m,n}\\| = \\infty\\). Then the set</p>
                        \\[R = \\{x \\in X : \\sup_n \\|T_{m,n} x\\| = \\infty \\text{ for every } m \\in \\mathbb{N}\\}\\]
                        <p>is a dense \\(G_\\delta\\) subset of \\(X\\) (hence residual).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>For each \\(m\\), define \\(R_m = \\{x \\in X : \\sup_n \\|T_{m,n} x\\| = \\infty\\}\\). By Corollary 8.6, each \\(R_m\\) is a dense \\(G_\\delta\\). Since</p>
                        \\[R = \\bigcap_{m=1}^\\infty R_m\\]
                        <p>is a countable intersection of dense \\(G_\\delta\\) sets in the complete metric space \\(X\\), the Baire category theorem implies \\(R\\) is dense (and \\(G_\\delta\\)). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark 8.20</div>
                    <div class="env-body">
                        <p>The name "condensation of singularities" is evocative: the singularities (i.e., the points where unboundedness occurs) from different families of operators <em>condense</em> together onto a single residual set. There is one residual set of "bad" vectors that simultaneously witnesses the unboundedness of <em>all</em> the families.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="condensation-sets"></div>

                <div class="env-block example">
                    <div class="env-title">Example 8.21 (Everywhere divergent Fourier series)</div>
                    <div class="env-body">
                        <p>Fix a countable dense set \\(\\{t_m\\}_{m=1}^\\infty\\) in \\([0, 2\\pi)\\). For each \\(m\\), define \\(T_{m,n}(f) = S_n f(t_m)\\). Since \\(\\sup_n \\|T_{m,n}\\| = L_n \\to \\infty\\) for each \\(m\\), the condensation of singularities theorem gives a dense \\(G_\\delta\\) set of functions \\(f \\in C_{2\\pi}\\) such that \\(\\sup_n |S_n f(t_m)| = \\infty\\) for <em>every</em> \\(m\\). In other words, the generic continuous function has a Fourier series that diverges at every point of a given countable dense set.</p>
                    </div>
                </div>

                <h3>The Dichotomy Principle</h3>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 8.22 (Dichotomy)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a Banach space, \\(Y\\) a normed space, and \\(\\{T_\\alpha\\}_{\\alpha \\in A} \\subseteq \\mathcal{B}(X, Y)\\). Exactly one of the following holds:</p>
                        <p><strong>(i)</strong> \\(\\sup_\\alpha \\|T_\\alpha\\| < \\infty\\) (the family is uniformly bounded).</p>
                        <p><strong>(ii)</strong> The set \\(\\{x \\in X : \\sup_\\alpha \\|T_\\alpha x\\| = \\infty\\}\\) is a dense \\(G_\\delta\\) in \\(X\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>If (i) holds, then \\(\\sup_\\alpha \\|T_\\alpha x\\| \\leq M\\|x\\| < \\infty\\) for all \\(x\\), so the set in (ii) is empty. If (i) fails, then \\(\\sup_\\alpha \\|T_\\alpha\\| = \\infty\\), and Corollary 8.6 gives (ii). The two cases are mutually exclusive and exhaustive. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="dichotomy-illustration"></div>

                <div class="env-block example">
                    <div class="env-title">Example 8.23 (Singularities for differentiation)</div>
                    <div class="env-body">
                        <p>Consider the operators \\(D_h \\colon C^1[0,1] \\to C[0,1]\\) defined by \\(D_h f(x) = \\frac{f(x+h) - f(x)}{h}\\) for \\(h > 0\\), where \\(C^1[0,1]\\) carries the sup norm (not the \\(C^1\\) norm!). Then \\(\\|D_h\\| \\geq 1/h \\to \\infty\\) as \\(h \\to 0\\). The condensation of singularities principle tells us that the "generic" continuous function is nowhere differentiable --- the singularity set is residual. (This can also be proved by a direct Baire category argument, as done by Banach in 1931.)</p>
                    </div>
                </div>

                <h3>Summary: The Uniform Boundedness Principle</h3>

                <div class="env-block remark">
                    <div class="env-title">Summary</div>
                    <div class="env-body">
                        <p>The Uniform Boundedness Principle and its consequences form one of the three pillars of linear functional analysis (alongside the Hahn-Banach and Open Mapping/Closed Graph theorems). The key takeaways:</p>
                        <ul>
                            <li><strong>Banach-Steinhaus:</strong> Pointwise boundedness implies uniform boundedness (in Banach spaces).</li>
                            <li><strong>Operator convergence:</strong> Pointwise limits of bounded operators are bounded, with controlled norms.</li>
                            <li><strong>Fourier divergence:</strong> The Lebesgue constants diverge, forcing the existence of continuous functions with divergent Fourier series.</li>
                            <li><strong>Condensation:</strong> Singularities from multiple unbounded families coalesce on a residual set --- unboundedness is the generic behavior.</li>
                        </ul>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'condensation-sets',
                    title: 'Condensation of Singularities',
                    description: 'Visualize how residual sets R_m from different operator families intersect to form a dense set.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 40, originX: 350, originY: 210 });
                        var numSets = 3;

                        function draw(M) {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var colors = [viz.colors.blue, viz.colors.teal, viz.colors.orange, viz.colors.green, viz.colors.purple];

                            // Represent X as a rectangle (Banach space)
                            var ctx = viz.ctx;
                            ctx.strokeStyle = viz.colors.white + '44';
                            ctx.lineWidth = 1;
                            var rx = 6;
                            var ry = 4;
                            var sx0 = viz.width / 2 - rx * viz.scale;
                            var sy0 = viz.height / 2 - ry * viz.scale;
                            var sw = 2 * rx * viz.scale;
                            var sh = 2 * ry * viz.scale;
                            ctx.strokeRect(sx0, sy0, sw, sh);
                            viz.screenText('X (Banach space)', viz.width / 2, sy0 - 10, viz.colors.white, 13, 'center');

                            // For each m, draw R_m as dense "stripes" covering most of X
                            // We represent them as overlapping thick regions
                            for (var m = 0; m < M; m++) {
                                var col = colors[m % colors.length] + '33';
                                var offset = (m - (M - 1) / 2) * 0.3;

                                // Draw dense set as many thin strips
                                ctx.fillStyle = col;
                                for (var i = 0; i < 30; i++) {
                                    var cx = sx0 + (i / 30 + offset * 0.02) * sw;
                                    var w = sw / 45;
                                    if (cx > sx0 && cx + w < sx0 + sw) {
                                        ctx.fillRect(cx, sy0, w, sh);
                                    }
                                }
                                viz.screenText('R_' + (m + 1) + ' (dense G_\u03B4)', sx0 + sw + 15, sy0 + 30 + m * 22, colors[m % colors.length], 12, 'left');
                            }

                            // Intersection points (showing the residual intersection is still dense)
                            ctx.fillStyle = viz.colors.red;
                            var seed = 42;
                            for (var i = 0; i < 40; i++) {
                                // Pseudo-random points
                                seed = (seed * 1103515245 + 12345) & 0x7fffffff;
                                var px = sx0 + 10 + (seed % 1000) / 1000 * (sw - 20);
                                seed = (seed * 1103515245 + 12345) & 0x7fffffff;
                                var py = sy0 + 10 + (seed % 1000) / 1000 * (sh - 20);
                                ctx.beginPath();
                                ctx.arc(px, py, 2.5, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            viz.screenText('\u2229 R_m = dense G_\u03B4 (red points)', viz.width / 2, sy0 + sh + 25, viz.colors.red, 13, 'center');
                            viz.screenText('Singularities from ALL families concentrate here', viz.width / 2, sy0 + sh + 45, viz.colors.text, 11, 'center');
                        }

                        VizEngine.createSlider(controls, 'Number of families m', 1, 5, numSets, 1, function(v) {
                            numSets = Math.round(v);
                            draw(numSets);
                        });

                        draw(numSets);
                    }
                },
                {
                    id: 'dichotomy-illustration',
                    title: 'The UBP Dichotomy',
                    description: 'Either the operators are uniformly bounded, or the "bad" set is residual. Toggle between the two cases.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420, scale: 50, originX: 350, originY: 210 });
                        var caseNum = 1;

                        function draw(c) {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            if (c === 1) {
                                // Case 1: Uniformly bounded
                                viz.screenText('Case (i): sup ||T_\u03B1|| < \u221E', viz.width / 2, 20, viz.colors.teal, 15, 'center');

                                // Unit circle
                                viz.drawCurve(function(t) { return [Math.cos(t), Math.sin(t)]; }, 0, 2 * Math.PI, 200, viz.colors.white, 1);

                                // All images inside a bounded circle
                                var M = 1.8;
                                var colors = [viz.colors.blue, viz.colors.teal, viz.colors.orange, viz.colors.green, viz.colors.purple];
                                for (var k = 0; k < 5; k++) {
                                    var sk = 1 + 0.15 * k;
                                    var ak = k * 0.3;
                                    var col = colors[k];
                                    (function(s, a, c) {
                                        viz.drawCurve(function(t) {
                                            var x = Math.cos(t);
                                            var y = Math.sin(t);
                                            return [s * (Math.cos(a) * x - Math.sin(a) * y),
                                                    s * (Math.sin(a) * x + Math.cos(a) * y)];
                                        }, 0, 2 * Math.PI, 200, c, 1.5);
                                    })(sk, ak, col);
                                }

                                viz.drawCircle(0, 0, M, null, viz.colors.red + '88', 2);
                                viz.screenText('M = sup ||T_\u03B1|| < \u221E', 0.3, M + 0.4, viz.colors.red, 12);
                                viz.screenText('Every operator image fits in the ball of radius M', viz.width / 2, viz.height - 20, viz.colors.text, 12, 'center');

                            } else {
                                // Case 2: Unbounded
                                viz.screenText('Case (ii): sup ||T_\u03B1|| = \u221E', viz.width / 2, 20, viz.colors.red, 15, 'center');

                                // Unit circle
                                viz.drawCurve(function(t) { return [Math.cos(t), Math.sin(t)]; }, 0, 2 * Math.PI, 200, viz.colors.white, 1);

                                // Operator images escaping to infinity
                                var colors = [viz.colors.blue, viz.colors.teal, viz.colors.orange, viz.colors.green, viz.colors.purple];
                                for (var k = 0; k < 5; k++) {
                                    var sk = 1 + 0.8 * k;
                                    var ak = k * 0.7;
                                    var col = colors[k];
                                    (function(s, a, c) {
                                        viz.drawCurve(function(t) {
                                            var x = Math.cos(t);
                                            var y = Math.sin(t);
                                            return [s * (Math.cos(a) * x - Math.sin(a) * y),
                                                    s * (Math.sin(a) * x + Math.cos(a) * y)];
                                        }, 0, 2 * Math.PI, 200, c, 1.5);
                                    })(sk, ak, col);
                                }

                                // Dense G_delta set of "bad" vectors
                                var ctx = viz.ctx;
                                ctx.fillStyle = viz.colors.yellow;
                                var seed = 137;
                                for (var i = 0; i < 50; i++) {
                                    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
                                    var angle = (seed % 1000) / 1000 * 2 * Math.PI;
                                    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
                                    var r = 0.3 + (seed % 1000) / 1000 * 0.7;
                                    var pt = viz.toScreen(r * Math.cos(angle), r * Math.sin(angle));
                                    ctx.beginPath();
                                    ctx.arc(pt[0], pt[1], 2, 0, Math.PI * 2);
                                    ctx.fill();
                                }

                                viz.screenText('Yellow: dense G_\u03B4 set where sup ||T_\u03B1 x|| = \u221E', viz.width / 2, viz.height - 40, viz.colors.yellow, 12, 'center');
                                viz.screenText('Operators escape every ball \u2014 no uniform bound exists', viz.width / 2, viz.height - 20, viz.colors.text, 12, 'center');
                            }
                        }

                        VizEngine.createButton(controls, 'Case (i): Uniformly bounded', function() {
                            caseNum = 1;
                            draw(caseNum);
                        });
                        VizEngine.createButton(controls, 'Case (ii): Unbounded (residual bad set)', function() {
                            caseNum = 2;
                            draw(caseNum);
                        });

                        draw(caseNum);
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove the condensation of singularities theorem (Theorem 8.19) in full detail. In particular, verify that each \\(R_m\\) is indeed a \\(G_\\delta\\) set.',
                    hint: 'Write \\(R_m = \\bigcap_{k=1}^\\infty \\bigcup_{n=1}^\\infty \\{x : \\|T_{m,n} x\\| > k\\}\\) and use continuity of each \\(T_{m,n}\\).',
                    solution: 'We have \\(R_m = \\{x : \\sup_n \\|T_{m,n} x\\| = \\infty\\} = \\bigcap_{k=1}^\\infty \\{x : \\sup_n \\|T_{m,n} x\\| > k\\} = \\bigcap_{k=1}^\\infty \\bigcup_{n=1}^\\infty \\{x : \\|T_{m,n} x\\| > k\\}\\). The set \\(\\{x : \\|T_{m,n} x\\| > k\\}\\) is open (preimage of \\((k, \\infty)\\) under the continuous map \\(x \\mapsto \\|T_{m,n} x\\|\\)). Hence \\(\\bigcup_n \\{x : \\|T_{m,n} x\\| > k\\}\\) is open, and \\(R_m\\) is a countable intersection of open sets, i.e., a \\(G_\\delta\\). By Corollary 8.6, \\(R_m\\) is dense (since \\(\\sup_n \\|T_{m,n}\\| = \\infty\\)). Then \\(R = \\bigcap_m R_m\\) is a countable intersection of dense \\(G_\\delta\\) sets. By Baire (applied to the complete metric space \\(X\\)), \\(R\\) is dense and \\(G_\\delta\\).'
                },
                {
                    question: 'Let \\(X = C[0,1]\\) and for each \\(n \\in \\mathbb{N}\\), define \\(T_n f(x) = n \\int_0^{1/n} f(x + t)\\, dt\\) (where \\(f\\) is extended by 0 outside \\([0,1]\\)). Show that \\(\\|T_n\\| \\leq 1\\) for all \\(n\\) and \\(T_n f \\to f\\) for every \\(f \\in C[0,1]\\). Is the convergence uniform on bounded sets?',
                    hint: 'For boundedness, use \\(|T_n f(x)| \\leq n \\int_0^{1/n} |f(x+t)|\\, dt \\leq \\|f\\|_\\infty\\). For convergence, use uniform continuity.',
                    solution: 'Boundedness: \\(|T_n f(x)| = |n \\int_0^{1/n} f(x+t)\\, dt| \\leq n \\int_0^{1/n} \\|f\\|_\\infty\\, dt = \\|f\\|_\\infty\\), so \\(\\|T_n\\| \\leq 1\\). (In fact \\(\\|T_n\\| = 1\\) since \\(T_n(1) = 1\\).) Convergence: \\(|T_n f(x) - f(x)| = |n \\int_0^{1/n} (f(x+t) - f(x))\\, dt| \\leq \\sup_{0 \\leq t \\leq 1/n} |f(x+t) - f(x)|\\). Since \\(f\\) is uniformly continuous on \\([0,1]\\), this goes to 0 uniformly in \\(x\\) as \\(n \\to \\infty\\). So \\(\\|T_n f - f\\|_\\infty \\to 0\\), which is even stronger than pointwise convergence. The convergence is NOT uniform on bounded sets in \\(C[0,1]\\): consider \\(f_n(x) = \\sin(2\\pi n x)\\). Then \\(\\|f_n\\| = 1\\) but \\(T_n f_n\\) does not converge uniformly to \\(f_n\\) as \\(n\\) varies.'
                },
                {
                    question: 'Use the condensation of singularities to prove: there exists \\(f \\in C[0,1]\\) such that the sequence of Bernstein polynomials \\(B_n f\\) satisfies \\(\\|B_n f - f\\|_\\infty \\to 0\\) (by Weierstrass), yet the rate of convergence cannot be \\(O(1/n)\\) for a residual set of functions.',
                    hint: 'Define \\(T_n f = n(B_n f - f)\\) and show \\(\\sup_n \\|T_n\\| = \\infty\\).',
                    solution: 'The Bernstein polynomial is \\(B_n f(x) = \\sum_{k=0}^n \\binom{n}{k} x^k (1-x)^{n-k} f(k/n)\\). Define \\(T_n f = n(B_n f - f)\\). Each \\(T_n\\) is a bounded linear operator on \\(C[0,1]\\). It is known that \\(\\|T_n\\| \\to \\infty\\) (this can be verified by testing against appropriate functions, e.g., \\(f(x) = |x - 1/2|\\)). By the condensation of singularities principle, the set \\(R = \\{f \\in C[0,1] : \\sup_n \\|n(B_n f - f)\\|_\\infty = \\infty\\}\\) is a dense \\(G_\\delta\\). For \\(f \\in R\\), \\(\\|B_n f - f\\|_\\infty \\neq O(1/n)\\), since otherwise \\(\\|n(B_n f - f)\\|_\\infty\\) would be bounded. So the generic continuous function has Bernstein approximation rate strictly worse than \\(O(1/n)\\).'
                }
            ]
        }
    ]
});
