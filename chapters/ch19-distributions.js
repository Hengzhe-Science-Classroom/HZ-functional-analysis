window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch19',
    number: 19,
    title: 'Distributions & Sobolev Spaces',
    subtitle: 'Generalized functions and weak solutions',
    sections: [
        // ============================================================
        // Section 1: Test Functions and Distributions
        // ============================================================
        {
            id: 'test-functions-distributions',
            title: 'Test Functions and Distributions',
            content: `
<div class="bridge-block chapter-opening">
<p><strong>Generalized Functions and Weak Solutions.</strong> Chapter 18 showed that unbounded operators like \(-d^2/dx^2\) are central to physics and PDE. But classical solutions of differential equations may not exist, or may be too restrictive. Distributions, introduced by Laurent Schwartz, generalize functions to a broader class of objects where differentiation always makes sense. Combined with Sobolev spaces, they provide the natural framework for modern PDE theory, bringing our course from abstract functional analysis to its most powerful application.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define test functions \(C_c^\infty(\Omega)\), equip them with a topology, and define distributions as continuous linear functionals on test functions. We identify regular distributions (given by locally integrable functions) and singular distributions (like the Dirac delta).</p>
</div>

                <h2>Test Functions and Distributions</h2>

                <p>Classical analysis requires functions to be pointwise-defined. But many objects arising in physics and PDE theory (such as point masses, impulses, and densities concentrated on surfaces) resist pointwise description. <strong>Distribution theory</strong>, pioneered by Laurent Schwartz in the 1940s, provides a rigorous framework for these "generalized functions."</p>

                <p>The key insight: rather than asking "what is the value of \\(f\\) at \\(x\\)?", we ask "how does \\(f\\) act on smooth test functions?" This duality viewpoint unifies classical and generalized functions.</p>

                <h3>The Space of Test Functions</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.1 (Test Functions)</div>
                    <div class="env-body">
                        <p>Let \\(\\Omega \\subseteq \\mathbb{R}^n\\) be open. The space of <strong>test functions</strong> is</p>
                        \\[\\mathcal{D}(\\Omega) = C_c^\\infty(\\Omega) = \\{\\varphi \\in C^\\infty(\\Omega) : \\operatorname{supp}(\\varphi) \\text{ is compact and contained in } \\Omega\\}.\\]
                        <p>We equip \\(\\mathcal{D}(\\Omega)\\) with the following notion of convergence: a sequence \\(\\varphi_j \\to \\varphi\\) in \\(\\mathcal{D}(\\Omega)\\) if:</p>
                        <ol>
                            <li>There exists a compact set \\(K \\subset \\Omega\\) with \\(\\operatorname{supp}(\\varphi_j) \\subseteq K\\) for all \\(j\\).</li>
                            <li>\\(\\partial^\\alpha \\varphi_j \\to \\partial^\\alpha \\varphi\\) uniformly on \\(K\\) for every multi-index \\(\\alpha\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 19.2 (Standard Bump Function)</div>
                    <div class="env-body">
                        <p>The prototypical test function on \\(\\mathbb{R}\\) is the <strong>bump function</strong>:</p>
                        \\[\\varphi(x) = \\begin{cases} C \\exp\\!\\left(-\\frac{1}{1 - x^2}\\right) & \\text{if } |x| < 1, \\\\ 0 & \\text{if } |x| \\geq 1, \\end{cases}\\]
                        <p>where \\(C > 0\\) is chosen so that \\(\\int_\\mathbb{R} \\varphi = 1\\). This function is \\(C^\\infty\\), compactly supported in \\((-1,1)\\), and non-negative.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="bump-function-viz"></div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Topology on \\(\\mathcal{D}(\\Omega)\\))</div>
                    <div class="env-body">
                        <p>The convergence in \\(\\mathcal{D}(\\Omega)\\) is <em>not</em> metrizable and cannot be described by a single norm. Instead, \\(\\mathcal{D}(\\Omega)\\) is a strict inductive limit (LF-space) of the Frechet spaces \\(\\mathcal{D}_K(\\Omega) = \\{\\varphi \\in C^\\infty(\\Omega) : \\operatorname{supp}(\\varphi) \\subseteq K\\}\\), taken over an exhaustion \\(K_1 \\subset K_2 \\subset \\cdots\\) of \\(\\Omega\\).</p>
                    </div>
                </div>

                <h3>Distributions</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.3 (Distribution)</div>
                    <div class="env-body">
                        <p>A <strong>distribution</strong> on \\(\\Omega\\) is a continuous linear functional \\(T: \\mathcal{D}(\\Omega) \\to \\mathbb{R}\\) (or \\(\\mathbb{C}\\)). The space of all distributions is denoted \\(\\mathcal{D}'(\\Omega)\\).</p>
                        <p>We write \\(\\langle T, \\varphi \\rangle\\) for the action of \\(T\\) on \\(\\varphi\\). Continuity means: if \\(\\varphi_j \\to \\varphi\\) in \\(\\mathcal{D}(\\Omega)\\), then \\(\\langle T, \\varphi_j \\rangle \\to \\langle T, \\varphi \\rangle\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 19.4 (Characterization of Continuity)</div>
                    <div class="env-body">
                        <p>A linear functional \\(T: \\mathcal{D}(\\Omega) \\to \\mathbb{C}\\) is a distribution if and only if for every compact \\(K \\subset \\Omega\\), there exist \\(C > 0\\) and \\(N \\in \\mathbb{N}\\) such that</p>
                        \\[|\\langle T, \\varphi \\rangle| \\leq C \\sum_{|\\alpha| \\leq N} \\sup_{x \\in K} |\\partial^\\alpha \\varphi(x)|\\]
                        <p>for all \\(\\varphi \\in \\mathcal{D}_K(\\Omega)\\).</p>
                    </div>
                </div>

                <h3>Regular Distributions</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.5 (Regular Distribution)</div>
                    <div class="env-body">
                        <p>Every locally integrable function \\(f \\in L^1_{\\mathrm{loc}}(\\Omega)\\) defines a distribution \\(T_f\\) by</p>
                        \\[\\langle T_f, \\varphi \\rangle = \\int_\\Omega f(x) \\varphi(x) \\, dx, \\quad \\varphi \\in \\mathcal{D}(\\Omega).\\]
                        <p>Such distributions are called <strong>regular</strong>. The map \\(f \\mapsto T_f\\) is injective (two \\(L^1_{\\mathrm{loc}}\\) functions that agree as distributions are equal a.e.), so we may identify \\(f\\) with \\(T_f\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.6 (Dirac Delta Distribution)</div>
                    <div class="env-body">
                        <p>The <strong>Dirac delta</strong> at \\(x_0 \\in \\Omega\\) is the distribution</p>
                        \\[\\langle \\delta_{x_0}, \\varphi \\rangle = \\varphi(x_0).\\]
                        <p>This is a distribution of order 0. It is <em>not</em> a regular distribution: there is no \\(f \\in L^1_{\\mathrm{loc}}\\) such that \\(\\int f \\varphi = \\varphi(0)\\) for all \\(\\varphi\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="delta-approximation-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.7 (Approximation to Identity)</div>
                    <div class="env-body">
                        <p>Let \\(\\varphi \\in \\mathcal{D}(\\mathbb{R}^n)\\) with \\(\\int \\varphi = 1\\), and set \\(\\varphi_\\varepsilon(x) = \\varepsilon^{-n} \\varphi(x/\\varepsilon)\\). Then for any \\(f \\in L^1_{\\mathrm{loc}}(\\mathbb{R}^n)\\),</p>
                        \\[T_{\\varphi_\\varepsilon} \\to \\delta_0 \\quad \\text{in } \\mathcal{D}'(\\mathbb{R}^n) \\text{ as } \\varepsilon \\to 0^+,\\]
                        <p>meaning \\(\\int \\varphi_\\varepsilon(x) \\psi(x) \\, dx \\to \\psi(0)\\) for all \\(\\psi \\in \\mathcal{D}(\\mathbb{R}^n)\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.8 (Order of a Distribution)</div>
                    <div class="env-body">
                        <p>A distribution \\(T \\in \\mathcal{D}'(\\Omega)\\) has <strong>order</strong> \\(\\leq N\\) if for every compact \\(K \\subset \\Omega\\) there exists \\(C_K > 0\\) such that</p>
                        \\[|\\langle T, \\varphi \\rangle| \\leq C_K \\sum_{|\\alpha| \\leq N} \\sup |\\partial^\\alpha \\varphi|\\]
                        <p>for all \\(\\varphi \\in \\mathcal{D}_K(\\Omega)\\). The minimum such \\(N\\) is the <strong>order</strong> of \\(T\\). Distributions of finite order form a proper subclass; some distributions (e.g., \\(\\sum_{k=1}^\\infty k! \\delta_{1/k}\\)) have infinite order.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 19.9 (Principal Value Distribution)</div>
                    <div class="env-body">
                        <p>The <strong>Cauchy principal value</strong> distribution on \\(\\mathbb{R}\\) is defined by</p>
                        \\[\\langle \\mathrm{p.v.}\\tfrac{1}{x}, \\varphi \\rangle = \\lim_{\\varepsilon \\to 0^+} \\int_{|x| > \\varepsilon} \\frac{\\varphi(x)}{x} \\, dx.\\]
                        <p>This limit exists for all \\(\\varphi \\in \\mathcal{D}(\\mathbb{R})\\) because the odd singularity cancels. It is a distribution of order 0.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'bump-function-viz',
                    title: 'Bump Function and Scaled Variants',
                    setup: function(container) {
                        var viz = new VizEngine(container, { width: 560, height: 380, scale: 80, originY: 300 });
                        var slider = VizEngine.createSlider(container, 'Width parameter a', 0.2, 2.0, 1.0, 0.1, function(v) { draw(v); });

                        function bump(x, a) {
                            var r = x / a;
                            if (Math.abs(r) >= 1) return 0;
                            return Math.exp(-1 / (1 - r * r));
                        }

                        function draw(a) {
                            viz.clear();
                            viz.drawGrid(0.5);
                            viz.drawAxes();

                            // Normalize: integrate numerically
                            var sum = 0;
                            var N = 400;
                            var dx = 2 * a / N;
                            for (var i = 0; i <= N; i++) {
                                var x = -a + i * dx;
                                sum += bump(x, a) * dx;
                            }
                            var norm = sum > 0 ? 1 / sum : 1;

                            // Draw normalized bump
                            viz.drawCurve(function(t) { return [t, bump(t, a) * norm]; }, -3, 3, 600, viz.colors.blue, 2.5);

                            // Draw support indicators
                            var sA = viz.toScreen(-a, 0);
                            var sB = viz.toScreen(a, 0);
                            viz.ctx.strokeStyle = viz.colors.orange;
                            viz.ctx.lineWidth = 1;
                            viz.ctx.setLineDash([4, 4]);
                            viz.ctx.beginPath(); viz.ctx.moveTo(sA[0], 0); viz.ctx.lineTo(sA[0], viz.height); viz.ctx.stroke();
                            viz.ctx.beginPath(); viz.ctx.moveTo(sB[0], 0); viz.ctx.lineTo(sB[0], viz.height); viz.ctx.stroke();
                            viz.ctx.setLineDash([]);

                            viz.screenText('supp(phi) = [-a, a]', viz.width / 2, 30, viz.colors.orange, 13);
                            viz.screenText('Normalized bump: integral = 1', viz.width / 2, 50, viz.colors.text, 12);
                            viz.screenText('a = ' + a.toFixed(1), viz.width - 60, 30, viz.colors.white, 13);
                        }

                        draw(1.0);
                    }
                },
                {
                    id: 'delta-approximation-viz',
                    title: 'Delta Approximation (Approximation to Identity)',
                    setup: function(container) {
                        var viz = new VizEngine(container, { width: 560, height: 400, scale: 60, originY: 320 });

                        function bump(x, eps) {
                            var r = x / eps;
                            if (Math.abs(r) >= 1) return 0;
                            return Math.exp(-1 / (1 - r * r));
                        }

                        function normalizedBump(x, eps) {
                            // phi_eps(x) = (1/eps) * phi(x/eps) normalized
                            var sum = 0;
                            var N = 400;
                            var dx = 2 * eps / N;
                            for (var i = 0; i <= N; i++) {
                                var xi = -eps + i * dx;
                                sum += bump(xi, eps) * dx;
                            }
                            return sum > 0 ? bump(x, eps) / sum : 0;
                        }

                        var epsilons = [1.0, 0.5, 0.25, 0.1];
                        var colorList = [viz.colors.blue, viz.colors.teal, viz.colors.orange, viz.colors.red];
                        var animating = false;
                        var epsVal = 1.0;

                        function drawStatic() {
                            viz.clear();
                            viz.drawGrid(0.5);
                            viz.drawAxes();

                            for (var i = 0; i < epsilons.length; i++) {
                                var e = epsilons[i];
                                var c = colorList[i];
                                viz.drawCurve(function(t) { return [t, normalizedBump(t, e)]; }, -3, 3, 600, c, 2);
                            }

                            viz.screenText('Approximation to Identity: phi_eps -> delta', viz.width / 2, 25, viz.colors.white, 13);
                            for (var j = 0; j < epsilons.length; j++) {
                                viz.screenText('eps = ' + epsilons[j].toFixed(2), viz.width - 80, 50 + j * 18, colorList[j], 12, 'center');
                            }
                            viz.screenText('As eps -> 0, mass concentrates at origin', viz.width / 2, viz.height - 15, viz.colors.text, 11);
                        }

                        var animBtn = VizEngine.createButton(container, 'Animate eps -> 0', function() {
                            if (animating) { viz.stopAnimation(); animating = false; animBtn.textContent = 'Animate eps -> 0'; drawStatic(); return; }
                            animating = true;
                            epsVal = 1.0;
                            animBtn.textContent = 'Stop';
                            viz.animate(function() {
                                epsVal *= 0.995;
                                if (epsVal < 0.05) epsVal = 1.0;
                                viz.clear();
                                viz.drawGrid(0.5);
                                viz.drawAxes();
                                viz.drawCurve(function(t) { return [t, normalizedBump(t, epsVal)]; }, -3, 3, 600, viz.colors.blue, 2.5);
                                viz.screenText('eps = ' + epsVal.toFixed(3), viz.width - 80, 30, viz.colors.white, 14);
                                viz.screenText('phi_eps -> delta_0 as eps -> 0', viz.width / 2, 25, viz.colors.orange, 13);
                            });
                        });

                        drawStatic();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that the bump function \\(\\varphi(x) = e^{-1/(1-x^2)}\\) for \\(|x| < 1\\), \\(\\varphi(x) = 0\\) for \\(|x| \\geq 1\\), is \\(C^\\infty\\) at \\(x = \\pm 1\\).',
                    hint: 'Show that all one-sided derivatives vanish at \\(x = \\pm 1\\) by examining the rate at which \\(e^{-1/(1-x^2)} \\to 0\\).',
                    solution: 'At \\(x = 1^-\\), let \\(t = 1 - x\\). Then \\(1 - x^2 = t(2-t) \\approx 2t\\), so \\(\\varphi(x) = e^{-1/t(2-t)}\\). As \\(t \\to 0^+\\), \\(e^{-1/(2t)} \\to 0\\) faster than any polynomial in \\(t\\). By induction, \\(\\varphi^{(k)}(x) \\to 0\\) as \\(x \\to 1^-\\) for all \\(k\\), matching the zero derivatives from the right. Hence \\(\\varphi \\in C^\\infty(\\mathbb{R})\\).'
                },
                {
                    question: 'Prove that the Dirac delta \\(\\delta_0\\) is not a regular distribution. That is, there is no \\(f \\in L^1_{\\mathrm{loc}}(\\mathbb{R})\\) with \\(\\int f \\varphi = \\varphi(0)\\) for all \\(\\varphi \\in \\mathcal{D}(\\mathbb{R})\\).',
                    hint: 'Choose test functions \\(\\varphi_n\\) with \\(\\varphi_n(0) = 1\\) but \\(\\operatorname{supp}(\\varphi_n) \\to \\{0\\}\\).',
                    solution: 'Suppose \\(f \\in L^1_{\\mathrm{loc}}\\) satisfies \\(\\int f \\varphi = \\varphi(0)\\). Choose \\(\\varphi_n \\in \\mathcal{D}\\) with \\(0 \\leq \\varphi_n \\leq 1\\), \\(\\varphi_n(0) = 1\\), \\(\\operatorname{supp}(\\varphi_n) \\subseteq [-1/n, 1/n]\\). Then \\(1 = \\varphi_n(0) = \\int f \\varphi_n \\leq \\int_{-1/n}^{1/n} |f|\\). But \\(\\int_{-1/n}^{1/n} |f| \\to 0\\) as \\(n \\to \\infty\\) since \\(f \\in L^1_{\\mathrm{loc}}\\) (Lebesgue differentiation). This contradiction shows no such \\(f\\) exists.'
                },
                {
                    question: 'Show that the principal value distribution \\(\\mathrm{p.v.}\\frac{1}{x}\\) is well-defined: verify the limit \\(\\lim_{\\varepsilon \\to 0^+} \\int_{|x|>\\varepsilon} \\frac{\\varphi(x)}{x} dx\\) exists for all \\(\\varphi \\in \\mathcal{D}(\\mathbb{R})\\).',
                    hint: 'Write \\(\\varphi(x) = \\varphi(0) + x \\psi(x)\\) where \\(\\psi\\) is smooth, then note the \\(\\varphi(0)/x\\) part cancels by symmetry.',
                    solution: 'Write \\(\\varphi(x) = \\varphi(0) + x\\psi(x)\\) where \\(\\psi(x) = \\int_0^1 \\varphi\'(tx) dt\\) is smooth. Then \\(\\int_{|x|>\\varepsilon} \\frac{\\varphi(x)}{x} dx = \\varphi(0) \\int_{|x|>\\varepsilon} \\frac{dx}{x} + \\int_{|x|>\\varepsilon} \\psi(x) dx\\). The first integral vanishes by symmetry (odd integrand). The second integral converges absolutely as \\(\\varepsilon \\to 0\\) since \\(\\psi\\) is continuous and compactly supported.'
                },
                {
                    question: 'Let \\(H(x)\\) be the Heaviside step function (\\(H(x) = 1\\) for \\(x > 0\\), \\(H(x) = 0\\) for \\(x < 0\\)). Show that \\(H\\) defines a distribution in \\(\\mathcal{D}\'(\\mathbb{R})\\) and determine \\(\\langle T_H, \\varphi \\rangle\\).',
                    hint: '\\(H \\in L^1_{\\mathrm{loc}}(\\mathbb{R})\\), so it defines a regular distribution.',
                    solution: 'Since \\(H\\) is bounded and measurable, \\(H \\in L^1_{\\mathrm{loc}}(\\mathbb{R})\\). It defines the regular distribution \\(\\langle T_H, \\varphi \\rangle = \\int_\\mathbb{R} H(x) \\varphi(x) \\, dx = \\int_0^\\infty \\varphi(x) \\, dx\\). Continuity holds: if \\(\\varphi_j \\to 0\\) in \\(\\mathcal{D}\\), then \\(|\\langle T_H, \\varphi_j \\rangle| \\leq \\int_K |\\varphi_j| \\to 0\\) by uniform convergence.'
                }
            ]
        },

        // ============================================================
        // Section 2: Operations on Distributions
        // ============================================================
        {
            id: 'operations-distributions',
            title: 'Operations on Distributions',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Calculus for Distributions.</strong> The power of distributions lies in the fact that every distribution is infinitely differentiable. The derivative of a distribution is defined by "integration by parts" against test functions. This makes differentiation a universal operation, applicable even to functions with jumps and corners.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define the distributional derivative, verify it extends the classical derivative, compute distributional derivatives of non-smooth functions (\(|x|\), Heaviside step), and study multiplication by smooth functions and convolution with distributions.</p>
</div>

                <h2>Operations on Distributions</h2>

                <p>One of the great advantages of distribution theory is that every distribution is infinitely differentiable. The definition of differentiation is forced upon us by integration by parts: if \\(f\\) is smooth, then \\(\\int f' \\varphi = -\\int f \\varphi'\\).</p>

                <h3>Distributional Derivative</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.10 (Distributional Derivative)</div>
                    <div class="env-body">
                        <p>Let \\(T \\in \\mathcal{D}'(\\Omega)\\). The <strong>distributional derivative</strong> \\(\\partial^\\alpha T\\) is defined by</p>
                        \\[\\langle \\partial^\\alpha T, \\varphi \\rangle = (-1)^{|\\alpha|} \\langle T, \\partial^\\alpha \\varphi \\rangle, \\quad \\varphi \\in \\mathcal{D}(\\Omega).\\]
                        <p>Since \\(\\partial^\\alpha \\varphi \\in \\mathcal{D}(\\Omega)\\) and \\(T\\) is continuous, \\(\\partial^\\alpha T\\) is again a distribution. Every distribution has derivatives of all orders.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 19.11 (Derivative of the Heaviside Function)</div>
                    <div class="env-body">
                        <p>The Heaviside function \\(H(x) = \\mathbf{1}_{[0,\\infty)}(x)\\) has distributional derivative:</p>
                        \\[\\langle H', \\varphi \\rangle = -\\langle H, \\varphi' \\rangle = -\\int_0^\\infty \\varphi'(x) \\, dx = \\varphi(0) = \\langle \\delta_0, \\varphi \\rangle.\\]
                        <p>Thus \\(H' = \\delta_0\\) in \\(\\mathcal{D}'(\\mathbb{R})\\). The jump discontinuity at \\(0\\) manifests as a Dirac delta.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 19.12 (Derivative of \\(|x|\\))</div>
                    <div class="env-body">
                        <p>Consider \\(f(x) = |x|\\). We compute:</p>
                        \\[\\langle f', \\varphi \\rangle = -\\int_{-\\infty}^\\infty |x| \\varphi'(x) \\, dx = -\\int_{-\\infty}^0 (-x) \\varphi'(x) \\, dx - \\int_0^\\infty x \\varphi'(x) \\, dx.\\]
                        <p>Integrating by parts:</p>
                        \\[= -\\int_{-\\infty}^0 \\varphi(x) \\, dx + \\int_0^\\infty \\varphi(x) \\, dx = \\int_{-\\infty}^\\infty \\operatorname{sgn}(x) \\varphi(x) \\, dx.\\]
                        <p>So \\(|x|' = \\operatorname{sgn}(x)\\) as distributions. Differentiating again: \\(\\operatorname{sgn}'(x) = 2\\delta_0\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="distributional-derivative-viz"></div>

                <h3>Multiplication by Smooth Functions</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.13 (Multiplication by \\(C^\\infty\\) Functions)</div>
                    <div class="env-body">
                        <p>If \\(T \\in \\mathcal{D}'(\\Omega)\\) and \\(\\psi \\in C^\\infty(\\Omega)\\), define \\(\\psi T \\in \\mathcal{D}'(\\Omega)\\) by</p>
                        \\[\\langle \\psi T, \\varphi \\rangle = \\langle T, \\psi \\varphi \\rangle, \\quad \\varphi \\in \\mathcal{D}(\\Omega).\\]
                        <p>This is well-defined since \\(\\psi \\varphi \\in \\mathcal{D}(\\Omega)\\). Note that one <em>cannot</em> multiply two arbitrary distributions.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 19.14 (Leibniz Rule for Distributions)</div>
                    <div class="env-body">
                        <p>For \\(\\psi \\in C^\\infty(\\Omega)\\) and \\(T \\in \\mathcal{D}'(\\Omega)\\):</p>
                        \\[\\partial_i(\\psi T) = (\\partial_i \\psi) T + \\psi (\\partial_i T).\\]
                        <p>More generally, the Leibniz formula holds for all multi-indices.</p>
                    </div>
                </div>

                <h3>Convolution</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.15 (Convolution with Test Functions)</div>
                    <div class="env-body">
                        <p>If \\(T \\in \\mathcal{D}'(\\mathbb{R}^n)\\) has compact support (i.e., \\(T \\in \\mathcal{E}'(\\mathbb{R}^n)\\)) and \\(\\varphi \\in C^\\infty(\\mathbb{R}^n)\\), the <strong>convolution</strong> is</p>
                        \\[(T * \\varphi)(x) = \\langle T_y, \\varphi(x - y) \\rangle.\\]
                        <p>This gives a \\(C^\\infty\\) function. More generally, \\(T * S\\) is defined when at least one of \\(T, S\\) has compact support.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.16 (Convolution Properties)</div>
                    <div class="env-body">
                        <p>For distributions \\(T, S\\) (one with compact support):</p>
                        <ol>
                            <li>\\(\\partial^\\alpha(T * S) = (\\partial^\\alpha T) * S = T * (\\partial^\\alpha S)\\).</li>
                            <li>\\(\\delta_0 * T = T\\) (the Dirac delta is the convolution identity).</li>
                            <li>If \\(T = T_f\\) and \\(S = T_g\\) are regular, \\(T * S = T_{f * g}\\) coincides with the classical convolution.</li>
                        </ol>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="convolution-smoothing-viz"></div>

                <h3>Structure Theorem</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.17 (Local Structure of Distributions)</div>
                    <div class="env-body">
                        <p>Every distribution is locally a derivative of a continuous function. More precisely: for any \\(T \\in \\mathcal{D}'(\\Omega)\\) and any open \\(U \\Subset \\Omega\\), there exist a continuous function \\(g\\) on \\(U\\) and a multi-index \\(\\alpha\\) such that</p>
                        \\[T\\big|_U = \\partial^\\alpha g \\quad \\text{in } \\mathcal{D}'(U).\\]
                        <p>This theorem shows that distributions, despite their generality, are "not too far" from classical functions.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Schwartz Impossibility Result)</div>
                    <div class="env-body">
                        <p>Schwartz proved (1954) that there is no associative, commutative algebra containing \\(\\mathcal{D}'\\) that extends pointwise multiplication and satisfies the Leibniz rule. This is why multiplying arbitrary distributions is problematic. Colombeau algebras provide a partial workaround.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'distributional-derivative-viz',
                    title: 'Distributional Derivative of |x|',
                    setup: function(container) {
                        var viz = new VizEngine(container, { width: 560, height: 400, scale: 50 });

                        var mode = 0; // 0: |x|, 1: sgn, 2: 2*delta
                        var titles = ['f(x) = |x|', "f'(x) = sgn(x)", "f''(x) = 2 delta_0"];
                        var descriptions = [
                            'Continuous, not differentiable at 0',
                            'First distributional derivative: sign function',
                            'Second derivative: 2 times Dirac delta'
                        ];

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            if (mode === 0) {
                                // |x|
                                viz.drawCurve(function(t) { return [t, Math.abs(t)]; }, -5, 5, 400, viz.colors.blue, 2.5);
                                viz.drawPoint(0, 0, viz.colors.orange, 'kink', 5);
                            } else if (mode === 1) {
                                // sgn(x)
                                viz.drawCurve(function(t) { return [t, -1]; }, -5, -0.01, 200, viz.colors.teal, 2.5);
                                viz.drawCurve(function(t) { return [t, 1]; }, 0.01, 5, 200, viz.colors.teal, 2.5);
                                // Open circles at discontinuity
                                var s0 = viz.toScreen(0, 1);
                                var s1 = viz.toScreen(0, -1);
                                viz.ctx.strokeStyle = viz.colors.teal;
                                viz.ctx.lineWidth = 2;
                                viz.ctx.beginPath(); viz.ctx.arc(s0[0], s0[1], 5, 0, Math.PI * 2); viz.ctx.stroke();
                                viz.ctx.beginPath(); viz.ctx.arc(s1[0], s1[1], 5, 0, Math.PI * 2); viz.ctx.stroke();
                                // Jump indicator
                                viz.ctx.strokeStyle = viz.colors.orange;
                                viz.ctx.setLineDash([3, 3]);
                                viz.ctx.beginPath(); viz.ctx.moveTo(s1[0], s1[1]); viz.ctx.lineTo(s0[0], s0[1]); viz.ctx.stroke();
                                viz.ctx.setLineDash([]);
                                viz.screenText('Jump = 2', s0[0] + 40, (s0[1] + s1[1]) / 2, viz.colors.orange, 12);
                            } else {
                                // 2*delta_0 as a tall spike
                                viz.drawCurve(function(t) { return [t, 0]; }, -5, 5, 200, viz.colors.text, 1);
                                // Arrow representing delta
                                var base = viz.toScreen(0, 0);
                                var tip = viz.toScreen(0, 4);
                                viz.ctx.strokeStyle = viz.colors.red;
                                viz.ctx.lineWidth = 3;
                                viz.ctx.beginPath(); viz.ctx.moveTo(base[0], base[1]); viz.ctx.lineTo(tip[0], tip[1]); viz.ctx.stroke();
                                // Arrowhead
                                viz.ctx.fillStyle = viz.colors.red;
                                viz.ctx.beginPath();
                                viz.ctx.moveTo(tip[0], tip[1]);
                                viz.ctx.lineTo(tip[0] - 8, tip[1] + 15);
                                viz.ctx.lineTo(tip[0] + 8, tip[1] + 15);
                                viz.ctx.closePath();
                                viz.ctx.fill();
                                viz.drawText('2 delta_0', 1.2, 3.5, viz.colors.red, 14, 'left');
                            }

                            viz.screenText(titles[mode], viz.width / 2, 25, viz.colors.white, 14);
                            viz.screenText(descriptions[mode], viz.width / 2, viz.height - 15, viz.colors.text, 11);
                        }

                        VizEngine.createButton(container, 'f(x) = |x|', function() { mode = 0; draw(); });
                        VizEngine.createButton(container, "f' = sgn(x)", function() { mode = 1; draw(); });
                        VizEngine.createButton(container, "f'' = 2 delta", function() { mode = 2; draw(); });

                        draw();
                    }
                },
                {
                    id: 'convolution-smoothing-viz',
                    title: 'Convolution Smoothing Effect',
                    setup: function(container) {
                        var viz = new VizEngine(container, { width: 560, height: 380, scale: 40, originY: 280 });

                        function bump(x, eps) {
                            var r = x / eps;
                            if (Math.abs(r) >= 1) return 0;
                            return Math.exp(-1 / (1 - r * r));
                        }

                        function bumpNorm(eps) {
                            var sum = 0;
                            var N = 200;
                            var dx = 2 * eps / N;
                            for (var i = 0; i <= N; i++) {
                                sum += bump(-eps + i * dx, eps) * dx;
                            }
                            return sum;
                        }

                        // f = step function with jump at 0 and at 2
                        function f(x) {
                            if (x < 0) return 0;
                            if (x < 2) return 1;
                            return 0.5;
                        }

                        // Numerical convolution (f * phi_eps)
                        function fConv(x, eps) {
                            var norm = bumpNorm(eps);
                            if (norm < 1e-10) return f(x);
                            var sum = 0;
                            var N = 100;
                            var dx = 2 * eps / N;
                            for (var i = 0; i <= N; i++) {
                                var y = -eps + i * dx;
                                sum += f(x - y) * bump(y, eps) * dx;
                            }
                            return sum / norm;
                        }

                        var epsVal = 0.5;
                        var slider = VizEngine.createSlider(container, 'Smoothing eps', 0.1, 2.0, 0.5, 0.1, function(v) {
                            epsVal = v;
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Original function
                            viz.drawCurve(function(t) { return [t, f(t)]; }, -3, 5, 500, viz.colors.text, 1.5);

                            // Smoothed function
                            var eps = epsVal;
                            viz.drawCurve(function(t) { return [t, fConv(t, eps)]; }, -3, 5, 400, viz.colors.blue, 2.5);

                            viz.screenText('Gray: original f (step function)', 150, 25, viz.colors.text, 11);
                            viz.screenText('Blue: f * phi_eps (smoothed)', 150, 42, viz.colors.blue, 11);
                            viz.screenText('Convolution with bump function smooths discontinuities', viz.width / 2, viz.height - 15, viz.colors.text, 11);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute the distributional derivative of \\(f(x) = x^+ = \\max(x, 0)\\).',
                    hint: 'Use integration by parts: \\(\\langle (x^+)\', \\varphi \\rangle = -\\int_0^\\infty x \\varphi\'(x) dx\\).',
                    solution: '\\(\\langle (x^+)\', \\varphi \\rangle = -\\langle x^+, \\varphi\' \\rangle = -\\int_0^\\infty x \\varphi\'(x) dx\\). Integrating by parts: \\(= -[x\\varphi(x)]_0^\\infty + \\int_0^\\infty \\varphi(x) dx = \\int_0^\\infty \\varphi(x) dx = \\langle H, \\varphi \\rangle\\). So \\((x^+)\' = H\\) (the Heaviside function). Note: \\((x^+)\'\' = H\' = \\delta_0\\).'
                },
                {
                    question: 'Prove the Leibniz rule for distributions: if \\(\\psi \\in C^\\infty\\) and \\(T \\in \\mathcal{D}\'\\), show \\((\\psi T)\' = \\psi\' T + \\psi T\'\\).',
                    hint: 'Compute \\(\\langle (\\psi T)\', \\varphi \\rangle = -\\langle \\psi T, \\varphi\' \\rangle\\) and use the classical product rule on \\(\\psi \\varphi\'\\).',
                    solution: '\\(\\langle (\\psi T)\', \\varphi \\rangle = -\\langle \\psi T, \\varphi\' \\rangle = -\\langle T, \\psi \\varphi\' \\rangle\\). Now \\(\\psi \\varphi\' = (\\psi \\varphi)\' - \\psi\' \\varphi\\), so \\(= -\\langle T, (\\psi\\varphi)\' \\rangle + \\langle T, \\psi\' \\varphi \\rangle = \\langle T\', \\psi \\varphi \\rangle + \\langle \\psi\' T, \\varphi \\rangle = \\langle \\psi T\', \\varphi \\rangle + \\langle \\psi\' T, \\varphi \\rangle\\). Thus \\((\\psi T)\' = \\psi T\' + \\psi\' T\\).'
                },
                {
                    question: 'Show that \\(x \\delta_0 = 0\\) and \\(x \\delta_0\' = -\\delta_0\\) in \\(\\mathcal{D}\'(\\mathbb{R})\\).',
                    hint: 'For the first: \\(\\langle x\\delta_0, \\varphi \\rangle = \\langle \\delta_0, x\\varphi \\rangle\\). For the second, use \\(\\langle x\\delta_0\', \\varphi \\rangle = \\langle \\delta_0\', x\\varphi \\rangle\\).',
                    solution: 'First: \\(\\langle x\\delta_0, \\varphi \\rangle = \\langle \\delta_0, x\\varphi(x) \\rangle = (x\\varphi(x))|_{x=0} = 0\\). So \\(x\\delta_0 = 0\\). Second: \\(\\langle x\\delta_0\', \\varphi \\rangle = \\langle \\delta_0\', x\\varphi \\rangle = -\\langle \\delta_0, (x\\varphi)\' \\rangle = -\\langle \\delta_0, \\varphi + x\\varphi\' \\rangle = -(\\varphi(0) + 0) = -\\varphi(0) = -\\langle \\delta_0, \\varphi \\rangle\\). Thus \\(x\\delta_0\' = -\\delta_0\\).'
                }
            ]
        },

        // ============================================================
        // Section 3: Tempered Distributions
        // ============================================================
        {
            id: 'tempered-distributions',
            title: 'Tempered Distributions',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Distributions with Growth Control.</strong> General distributions can grow arbitrarily at infinity. Tempered distributions are those with at most polynomial growth, and they are the natural domain for the Fourier transform. The Schwartz space of rapidly decreasing functions is the corresponding space of test functions.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define the Schwartz space \(\mathcal{S}(\mathbb{R}^n)\), tempered distributions \(\mathcal{S}'(\mathbb{R}^n)\), and extend the Fourier transform to tempered distributions. We prove the fundamental identity: the Fourier transform converts differentiation to multiplication.</p>
</div>

                <h2>Tempered Distributions and the Fourier Transform</h2>

                <p>The Fourier transform is the most important tool in harmonic analysis. To extend it to distributions, we need a space of test functions that is preserved by the Fourier transform. This leads to the Schwartz space.</p>

                <h3>The Schwartz Space</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.18 (Schwartz Space)</div>
                    <div class="env-body">
                        <p>The <strong>Schwartz space</strong> (or space of rapidly decreasing functions) is</p>
                        \\[\\mathcal{S}(\\mathbb{R}^n) = \\{\\varphi \\in C^\\infty(\\mathbb{R}^n) : \\|\\varphi\\|_{\\alpha,\\beta} < \\infty \\text{ for all multi-indices } \\alpha, \\beta\\},\\]
                        <p>where \\(\\|\\varphi\\|_{\\alpha,\\beta} = \\sup_{x \\in \\mathbb{R}^n} |x^\\alpha \\partial^\\beta \\varphi(x)|\\).</p>
                        <p>Equivalently, \\(\\varphi \\in \\mathcal{S}\\) iff \\(\\varphi\\) and all its derivatives decay faster than any polynomial: for all \\(N, k\\),</p>
                        \\[\\sup_{x} (1 + |x|)^N |\\partial^\\alpha \\varphi(x)| < \\infty, \\quad |\\alpha| \\leq k.\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 19.19 (Schwartz Functions)</div>
                    <div class="env-body">
                        <ul>
                            <li>The Gaussian \\(\\varphi(x) = e^{-|x|^2}\\) is in \\(\\mathcal{S}(\\mathbb{R}^n)\\). More generally, \\(p(x) e^{-|x|^2}\\) for any polynomial \\(p\\).</li>
                            <li>Every \\(\\varphi \\in \\mathcal{D}(\\mathbb{R}^n)\\) is in \\(\\mathcal{S}(\\mathbb{R}^n)\\) (compact support implies rapid decay).</li>
                            <li>The function \\(e^{-|x|}\\) is <em>not</em> in \\(\\mathcal{S}\\) since it is not \\(C^\\infty\\) at \\(x = 0\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Proposition 19.20 (Inclusions)</div>
                    <div class="env-body">
                        <p>We have the continuous dense inclusions:</p>
                        \\[\\mathcal{D}(\\mathbb{R}^n) \\hookrightarrow \\mathcal{S}(\\mathbb{R}^n) \\hookrightarrow L^p(\\mathbb{R}^n) \\quad (1 \\leq p \\leq \\infty).\\]
                        <p>The Schwartz space is a Frechet space (metrizable and complete), unlike \\(\\mathcal{D}\\).</p>
                    </div>
                </div>

                <h3>Tempered Distributions</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.21 (Tempered Distribution)</div>
                    <div class="env-body">
                        <p>A <strong>tempered distribution</strong> is a continuous linear functional on \\(\\mathcal{S}(\\mathbb{R}^n)\\). The space of all tempered distributions is \\(\\mathcal{S}'(\\mathbb{R}^n)\\).</p>
                        <p>We have \\(\\mathcal{S}'(\\mathbb{R}^n) \\subset \\mathcal{D}'(\\mathbb{R}^n)\\) (every tempered distribution restricts to a distribution, but not conversely). A distribution \\(T \\in \\mathcal{D}'\\) is tempered iff it has at most polynomial growth.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 19.22 (Tempered vs. Non-Tempered)</div>
                    <div class="env-body">
                        <ul>
                            <li>Every \\(f \\in L^p(\\mathbb{R}^n)\\) (\\(1 \\leq p \\leq \\infty\\)) defines a tempered distribution.</li>
                            <li>Every polynomial defines a tempered distribution.</li>
                            <li>\\(\\delta_0, \\delta_0', \\ldots\\) are tempered.</li>
                            <li>\\(T_f\\) with \\(f(x) = e^{x^2}\\) is <em>not</em> tempered (super-polynomial growth).</li>
                        </ul>
                    </div>
                </div>

                <h3>Fourier Transform on \\(\\mathcal{S}'\\)</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.23 (Fourier Transform on \\(\\mathcal{S}\\))</div>
                    <div class="env-body">
                        <p>For \\(\\varphi \\in \\mathcal{S}(\\mathbb{R}^n)\\), the <strong>Fourier transform</strong> is</p>
                        \\[\\hat{\\varphi}(\\xi) = \\mathcal{F}[\\varphi](\\xi) = \\int_{\\mathbb{R}^n} \\varphi(x) e^{-2\\pi i x \\cdot \\xi} \\, dx.\\]
                        <p>The Fourier transform is a continuous linear bijection \\(\\mathcal{F}: \\mathcal{S} \\to \\mathcal{S}\\) with inverse</p>
                        \\[\\varphi(x) = \\int_{\\mathbb{R}^n} \\hat{\\varphi}(\\xi) e^{2\\pi i x \\cdot \\xi} \\, d\\xi.\\]
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.24 (Fourier Transform on \\(\\mathcal{S}'\\))</div>
                    <div class="env-body">
                        <p>For \\(T \\in \\mathcal{S}'(\\mathbb{R}^n)\\), we define \\(\\hat{T} = \\mathcal{F}[T] \\in \\mathcal{S}'\\) by</p>
                        \\[\\langle \\hat{T}, \\varphi \\rangle = \\langle T, \\hat{\\varphi} \\rangle, \\quad \\varphi \\in \\mathcal{S}.\\]
                        <p>This extends the classical Fourier transform. The map \\(\\mathcal{F}: \\mathcal{S}' \\to \\mathcal{S}'\\) is a continuous bijection.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="fourier-schwartz-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.25 (Fourier Transform Properties on \\(\\mathcal{S}'\\))</div>
                    <div class="env-body">
                        <p>For \\(T \\in \\mathcal{S}'(\\mathbb{R}^n)\\):</p>
                        <ol>
                            <li>\\(\\mathcal{F}[\\partial^\\alpha T](\\xi) = (2\\pi i \\xi)^\\alpha \\hat{T}(\\xi)\\) (differentiation becomes multiplication).</li>
                            <li>\\(\\mathcal{F}[x^\\alpha T](\\xi) = \\left(\\frac{-1}{2\\pi i}\\right)^{|\\alpha|} \\partial^\\alpha_\\xi \\hat{T}(\\xi)\\) (multiplication becomes differentiation).</li>
                            <li>\\(\\hat{\\delta}_0 = 1\\) (constant function) and \\(\\hat{1} = \\delta_0\\).</li>
                            <li>Parseval: \\(\\langle \\hat{T}, \\varphi \\rangle = \\langle T, \\hat{\\varphi} \\rangle\\) for all \\(\\varphi \\in \\mathcal{S}\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="fourier-duality-viz"></div>

                <div class="env-block example">
                    <div class="env-title">Example 19.26 (Fourier Transform of the Dirac Comb)</div>
                    <div class="env-body">
                        <p>The <strong>Dirac comb</strong> (or Shah function) is the tempered distribution</p>
                        \\[\\text{III}(x) = \\sum_{k \\in \\mathbb{Z}} \\delta_k.\\]
                        <p>Its Fourier transform is itself: \\(\\widehat{\\text{III}} = \\text{III}\\). This is the distributional form of the Poisson summation formula:</p>
                        \\[\\sum_{k \\in \\mathbb{Z}} \\varphi(k) = \\sum_{k \\in \\mathbb{Z}} \\hat{\\varphi}(k).\\]
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'fourier-schwartz-viz',
                    title: 'Fourier Transform of Schwartz Functions',
                    setup: function(container) {
                        var viz = new VizEngine(container, { width: 560, height: 400, scale: 30, originY: 280 });

                        var sigma = 1.0;
                        var slider = VizEngine.createSlider(container, 'Gaussian width sigma', 0.3, 3.0, 1.0, 0.1, function(v) {
                            sigma = v;
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var s = sigma;

                            // Gaussian: f(x) = exp(-x^2/(2*sigma^2))
                            viz.drawCurve(function(t) {
                                return [t, Math.exp(-t * t / (2 * s * s))];
                            }, -8, 8, 500, viz.colors.blue, 2.5);

                            // Its Fourier transform: sigma*sqrt(2*pi)*exp(-2*pi^2*sigma^2*xi^2)
                            var A = s * Math.sqrt(2 * Math.PI);
                            viz.drawCurve(function(t) {
                                return [t, A * Math.exp(-2 * Math.PI * Math.PI * s * s * t * t)];
                            }, -8, 8, 500, viz.colors.orange, 2.5);

                            viz.screenText('Blue: f(x) = exp(-x^2 / (2 sigma^2))', 180, 25, viz.colors.blue, 12);
                            viz.screenText('Orange: F[f](xi) = sigma sqrt(2 pi) exp(-2 pi^2 sigma^2 xi^2)', viz.width / 2, 45, viz.colors.orange, 11);
                            viz.screenText('Narrow Gaussian <-> Wide Fourier transform (uncertainty principle)', viz.width / 2, viz.height - 15, viz.colors.text, 11);
                        }

                        draw();
                    }
                },
                {
                    id: 'fourier-duality-viz',
                    title: 'Differentiation-Multiplication Duality',
                    setup: function(container) {
                        var viz = new VizEngine(container, { width: 560, height: 380, scale: 25, originY: 260 });

                        var showDeriv = false;

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var sigma = 1.0;

                            if (!showDeriv) {
                                // f(x) = exp(-x^2/2)
                                viz.drawCurve(function(t) {
                                    return [t, Math.exp(-t * t / 2)];
                                }, -8, 8, 500, viz.colors.blue, 2.5);

                                // Fourier: sqrt(2pi) exp(-2pi^2 xi^2)
                                var A = Math.sqrt(2 * Math.PI);
                                viz.drawCurve(function(t) {
                                    return [t, A * Math.exp(-2 * Math.PI * Math.PI * t * t)];
                                }, -8, 8, 500, viz.colors.orange, 2.5);

                                viz.screenText('Blue: f(x) = exp(-x^2/2)', 160, 20, viz.colors.blue, 12);
                                viz.screenText('Orange: F[f]', 160, 38, viz.colors.orange, 12);
                            } else {
                                // f'(x) = -x exp(-x^2/2)
                                viz.drawCurve(function(t) {
                                    return [t, -t * Math.exp(-t * t / 2)];
                                }, -8, 8, 500, viz.colors.teal, 2.5);

                                // F[f'](xi) = 2pi i xi * F[f](xi): magnitude
                                var A = Math.sqrt(2 * Math.PI);
                                viz.drawCurve(function(t) {
                                    return [t, 2 * Math.PI * t * A * Math.exp(-2 * Math.PI * Math.PI * t * t)];
                                }, -8, 8, 500, viz.colors.red, 2.5);

                                viz.screenText("Teal: f'(x) = -x exp(-x^2/2)", 180, 20, viz.colors.teal, 12);
                                viz.screenText('Red: F[f\'](xi) = 2 pi i xi F[f](xi)', 180, 38, viz.colors.red, 12);
                                viz.screenText('Differentiation in x <-> multiplication by 2 pi i xi', viz.width / 2, viz.height - 15, viz.colors.text, 11);
                            }
                        }

                        VizEngine.createButton(container, 'Show f and F[f]', function() { showDeriv = false; draw(); });
                        VizEngine.createButton(container, "Show f' and F[f']", function() { showDeriv = true; draw(); });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that the Gaussian \\(g(x) = e^{-\\pi x^2}\\) is its own Fourier transform: \\(\\hat{g} = g\\).',
                    hint: 'Complete the square in the exponent of the Fourier integral, then use \\(\\int e^{-\\pi t^2} dt = 1\\).',
                    solution: '\\(\\hat{g}(\\xi) = \\int e^{-\\pi x^2} e^{-2\\pi i x \\xi} dx = \\int e^{-\\pi(x^2 + 2ix\\xi)} dx = e^{-\\pi \\xi^2} \\int e^{-\\pi(x + i\\xi)^2} dx\\). By contour shifting (the integrand is entire and decays in a strip), the integral equals \\(\\int e^{-\\pi t^2} dt = 1\\). So \\(\\hat{g}(\\xi) = e^{-\\pi \\xi^2} = g(\\xi)\\).'
                },
                {
                    question: 'Compute the Fourier transform of \\(\\delta_0\'\\) (the derivative of the Dirac delta) in \\(\\mathcal{S}\'(\\mathbb{R})\\).',
                    hint: 'Use \\(\\mathcal{F}[\\partial T] = 2\\pi i \\xi \\cdot \\hat{T}\\) and \\(\\hat{\\delta}_0 = 1\\).',
                    solution: '\\(\\widehat{\\delta_0\'} = 2\\pi i \\xi \\cdot \\hat{\\delta}_0 = 2\\pi i \\xi \\cdot 1 = 2\\pi i \\xi\\). So the Fourier transform of \\(\\delta_0\'\\) is the function \\(\\xi \\mapsto 2\\pi i \\xi\\) (a regular tempered distribution defined by a polynomial).'
                },
                {
                    question: 'Prove the Poisson summation formula: if \\(\\varphi \\in \\mathcal{S}(\\mathbb{R})\\), then \\(\\sum_{n \\in \\mathbb{Z}} \\varphi(n) = \\sum_{n \\in \\mathbb{Z}} \\hat{\\varphi}(n)\\).',
                    hint: 'Define \\(F(x) = \\sum_{n \\in \\mathbb{Z}} \\varphi(x + n)\\), show it is periodic with Fourier coefficients \\(\\hat{\\varphi}(n)\\), then evaluate at \\(x = 0\\).',
                    solution: 'Let \\(F(x) = \\sum_{n} \\varphi(x+n)\\). Since \\(\\varphi \\in \\mathcal{S}\\), the sum converges uniformly and \\(F\\) is smooth and 1-periodic. Its Fourier coefficients are \\(c_k = \\int_0^1 F(x) e^{-2\\pi ikx} dx = \\int_0^1 \\sum_n \\varphi(x+n) e^{-2\\pi ikx} dx = \\int_{-\\infty}^\\infty \\varphi(x) e^{-2\\pi ikx} dx = \\hat{\\varphi}(k)\\). By pointwise convergence of Fourier series for smooth periodic functions: \\(F(0) = \\sum_k c_k = \\sum_k \\hat{\\varphi}(k)\\). But \\(F(0) = \\sum_n \\varphi(n)\\).'
                }
            ]
        },

        // ============================================================
        // Section 4: Sobolev Spaces
        // ============================================================
        {
            id: 'sobolev-spaces',
            title: 'Sobolev Spaces',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Function Spaces for PDE.</strong> Sobolev spaces \(W^{k,p}(\Omega)\) consist of \(L^p\) functions whose distributional derivatives up to order \(k\) are also in \(L^p\). They are the "right" function spaces for weak solutions of PDE: large enough to contain solutions, but structured enough that the solutions are useful.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define Sobolev spaces, prove they are Banach spaces (Hilbert spaces when \(p = 2\)), establish the Sobolev embedding theorem (relating integrability to continuity), and prove the Rellich-Kondrachov compactness theorem.</p>
</div>

                <h2>Sobolev Spaces</h2>

                <p>Sobolev spaces bridge distribution theory and PDE theory. They consist of functions possessing "weak derivatives" up to a specified order in \\(L^p\\). These spaces provide the natural setting for variational problems and weak solutions of PDEs.</p>

                <h3>Weak Derivatives</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.27 (Weak Derivative)</div>
                    <div class="env-body">
                        <p>Let \\(u \\in L^1_{\\mathrm{loc}}(\\Omega)\\). A function \\(v \\in L^1_{\\mathrm{loc}}(\\Omega)\\) is the <strong>weak \\(\\alpha\\)-th derivative</strong> of \\(u\\), written \\(v = D^\\alpha u\\) or \\(\\partial^\\alpha u\\), if</p>
                        \\[\\int_\\Omega u \\, \\partial^\\alpha \\varphi \\, dx = (-1)^{|\\alpha|} \\int_\\Omega v \\, \\varphi \\, dx, \\quad \\forall \\varphi \\in C_c^\\infty(\\Omega).\\]
                        <p>When it exists, the weak derivative is unique (in the \\(L^1_{\\mathrm{loc}}\\) sense). If \\(u\\) is classically \\(C^{|\\alpha|}\\), the weak and classical derivatives coincide.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 19.28 (Weak Derivatives)</div>
                    <div class="env-body">
                        <ul>
                            <li>\\(u(x) = |x|\\) on \\((-1, 1)\\): the weak derivative is \\(u'(x) = \\operatorname{sgn}(x)\\) (in \\(L^\\infty\\)).</li>
                            <li>The Heaviside function \\(H(x)\\) on \\((-1,1)\\): \\(H\\) does <em>not</em> have a weak derivative in \\(L^1_{\\mathrm{loc}}\\) (the distributional derivative \\(\\delta_0\\) is not a function).</li>
                            <li>\\(u(x) = |x|^{1/2}\\) on \\((-1,1)\\): weak derivative exists \\(u'(x) = \\frac{\\operatorname{sgn}(x)}{2|x|^{1/2}}\\) which is in \\(L^p\\) for \\(p < 2\\).</li>
                        </ul>
                    </div>
                </div>

                <h3>Definition of Sobolev Spaces</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.29 (Sobolev Space \\(W^{k,p}\\))</div>
                    <div class="env-body">
                        <p>For \\(k \\in \\mathbb{N}_0\\) and \\(1 \\leq p \\leq \\infty\\), the <strong>Sobolev space</strong> is</p>
                        \\[W^{k,p}(\\Omega) = \\{u \\in L^p(\\Omega) : D^\\alpha u \\in L^p(\\Omega) \\text{ for all } |\\alpha| \\leq k\\},\\]
                        <p>equipped with the norm</p>
                        \\[\\|u\\|_{W^{k,p}} = \\begin{cases} \\left(\\sum_{|\\alpha| \\leq k} \\|D^\\alpha u\\|_{L^p}^p\\right)^{1/p} & \\text{if } p < \\infty, \\\\ \\max_{|\\alpha| \\leq k} \\|D^\\alpha u\\|_{L^\\infty} & \\text{if } p = \\infty. \\end{cases}\\]
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.30 (Hilbert-Sobolev Space \\(H^k\\))</div>
                    <div class="env-body">
                        <p>The special case \\(p = 2\\) is denoted \\(H^k(\\Omega) = W^{k,2}(\\Omega)\\). This is a <strong>Hilbert space</strong> with inner product</p>
                        \\[\\langle u, v \\rangle_{H^k} = \\sum_{|\\alpha| \\leq k} \\int_\\Omega D^\\alpha u \\cdot \\overline{D^\\alpha v} \\, dx.\\]
                        <p>In particular, \\(H^0(\\Omega) = L^2(\\Omega)\\) and \\(H^1(\\Omega) = \\{u \\in L^2 : \\nabla u \\in L^2\\}\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sobolev-smoothness-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.31 (Completeness of Sobolev Spaces)</div>
                    <div class="env-body">
                        <p>\\(W^{k,p}(\\Omega)\\) is a Banach space for \\(1 \\leq p \\leq \\infty\\). For \\(p = 2\\), \\(H^k(\\Omega)\\) is a Hilbert space. For \\(1 \\leq p < \\infty\\), \\(W^{k,p}\\) is separable; for \\(1 < p < \\infty\\), it is reflexive.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.32 (Meyers-Serrin: \\(H = W\\))</div>
                    <div class="env-body">
                        <p>For \\(1 \\leq p < \\infty\\), the smooth functions \\(C^\\infty(\\Omega) \\cap W^{k,p}(\\Omega)\\) are dense in \\(W^{k,p}(\\Omega)\\). Equivalently, \\(W^{k,p}(\\Omega)\\) is the completion of \\(\\{u \\in C^\\infty(\\Omega) : \\|u\\|_{W^{k,p}} < \\infty\\}\\).</p>
                    </div>
                </div>

                <h3>Sobolev Spaces via Fourier Transform</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.33 (Fractional Sobolev Space \\(H^s\\))</div>
                    <div class="env-body">
                        <p>For \\(s \\in \\mathbb{R}\\), define</p>
                        \\[H^s(\\mathbb{R}^n) = \\{u \\in \\mathcal{S}'(\\mathbb{R}^n) : (1 + |\\xi|^2)^{s/2} \\hat{u}(\\xi) \\in L^2(\\mathbb{R}^n)\\},\\]
                        <p>with norm \\(\\|u\\|_{H^s} = \\|(1 + |\\xi|^2)^{s/2} \\hat{u}\\|_{L^2}\\).</p>
                        <p>For \\(s = k \\in \\mathbb{N}_0\\), this coincides with \\(W^{k,2}(\\mathbb{R}^n)\\) by Plancherel's theorem. The Fourier characterization allows \\(s\\) to be any real number, giving fractional and negative Sobolev spaces.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sobolev-fourier-viz"></div>

                <div class="env-block remark">
                    <div class="env-title">Remark (\\(H^0_0(\\Omega)\\) and Poincare Inequality)</div>
                    <div class="env-body">
                        <p>The space \\(H^1_0(\\Omega)\\) is defined as the closure of \\(C_c^\\infty(\\Omega)\\) in \\(H^1(\\Omega)\\). Functions in \\(H^1_0\\) "vanish on \\(\\partial\\Omega\\)" in a generalized sense. If \\(\\Omega\\) is bounded in some direction, the <strong>Poincare inequality</strong> holds:</p>
                        \\[\\|u\\|_{L^2(\\Omega)} \\leq C_\\Omega \\|\\nabla u\\|_{L^2(\\Omega)}, \\quad u \\in H^1_0(\\Omega).\\]
                        <p>This makes \\(\\|\\nabla u\\|_{L^2}\\) an equivalent norm on \\(H^1_0(\\Omega)\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'sobolev-smoothness-viz',
                    title: 'Function Smoothness Levels in Sobolev Spaces',
                    setup: function(container) {
                        var viz = new VizEngine(container, { width: 560, height: 400, scale: 40, originY: 200 });

                        var mode = 0;
                        var titles = [
                            'L^2 function (not in H^1): discontinuous',
                            'H^1 function: continuous, corners allowed',
                            'H^2 function: differentiable, kinks in derivative',
                            'H^3 function: twice differentiable, smooth'
                        ];

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            if (mode === 0) {
                                // Step function: in L^2 but not H^1
                                viz.drawCurve(function(t) {
                                    if (t < -2) return [t, 0.5];
                                    if (t < 0) return [t, -1];
                                    if (t < 1.5) return [t, 1.5];
                                    return [t, 0];
                                }, -5, 5, 600, viz.colors.red, 2.5);
                                viz.screenText('Discontinuities => not in H^1', viz.width / 2, viz.height - 30, viz.colors.red, 11);
                            } else if (mode === 1) {
                                // |x|-type: in H^1 not H^2
                                viz.drawCurve(function(t) {
                                    return [t, Math.max(0, 2 - Math.abs(t)) - Math.max(0, 1 - Math.abs(t - 2))];
                                }, -5, 5, 600, viz.colors.orange, 2.5);
                                viz.screenText('Continuous with corners => in H^1, not in H^2', viz.width / 2, viz.height - 30, viz.colors.orange, 11);
                            } else if (mode === 2) {
                                // Smooth-ish parabolic pieces: in H^2
                                viz.drawCurve(function(t) {
                                    if (t < -2) return [t, 0];
                                    if (t < 0) return [t, (t + 2) * (t + 2) / 4];
                                    if (t < 2) return [t, 1 - t * t / 4];
                                    return [t, 0];
                                }, -5, 5, 600, viz.colors.teal, 2.5);
                                viz.screenText('C^1, piecewise C^2 => in H^2', viz.width / 2, viz.height - 30, viz.colors.teal, 11);
                            } else {
                                // Gaussian: in all H^k
                                viz.drawCurve(function(t) {
                                    return [t, 2 * Math.exp(-t * t / 2)];
                                }, -5, 5, 600, viz.colors.blue, 2.5);
                                viz.screenText('C^infinity with rapid decay => in all H^s', viz.width / 2, viz.height - 30, viz.colors.blue, 11);
                            }

                            viz.screenText(titles[mode], viz.width / 2, 25, viz.colors.white, 13);
                        }

                        VizEngine.createButton(container, 'L^2 (not H^1)', function() { mode = 0; draw(); });
                        VizEngine.createButton(container, 'H^1', function() { mode = 1; draw(); });
                        VizEngine.createButton(container, 'H^2', function() { mode = 2; draw(); });
                        VizEngine.createButton(container, 'H^k for all k', function() { mode = 3; draw(); });

                        draw();
                    }
                },
                {
                    id: 'sobolev-fourier-viz',
                    title: 'Sobolev Regularity via Fourier Decay',
                    setup: function(container) {
                        var viz = new VizEngine(container, { width: 560, height: 380, scale: 25, originY: 280 });

                        var sVal = 1.0;
                        var slider = VizEngine.createSlider(container, 'Sobolev index s', 0.0, 4.0, 1.0, 0.5, function(v) {
                            sVal = v;
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Weight (1+|xi|^2)^{s/2}
                            viz.drawCurve(function(t) {
                                return [t, Math.pow(1 + t * t, sVal / 2)];
                            }, -8, 8, 400, viz.colors.orange, 2);

                            // A sample Schwartz function Fourier transform
                            viz.drawCurve(function(t) {
                                return [t, 2 * Math.exp(-t * t / 2)];
                            }, -8, 8, 400, viz.colors.blue, 2);

                            // Weighted: (1+|xi|^2)^{s/2} * hat{u}
                            viz.drawCurve(function(t) {
                                return [t, 2 * Math.exp(-t * t / 2) * Math.pow(1 + t * t, sVal / 2)];
                            }, -8, 8, 400, viz.colors.teal, 2.5);

                            viz.screenText('Blue: |u^(xi)|   Orange: (1+|xi|^2)^{s/2}   Teal: weighted', viz.width / 2, 25, viz.colors.white, 11);
                            viz.screenText('u in H^s iff teal curve is in L^2', viz.width / 2, 45, viz.colors.text, 11);
                            viz.screenText('s = ' + sVal.toFixed(1) + ': higher s requires faster Fourier decay', viz.width / 2, viz.height - 15, viz.colors.text, 11);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that \\(u(x) = |x|^\\alpha\\) is in \\(H^1((-1,1))\\) if and only if \\(\\alpha > 1/2\\).',
                    hint: 'Compute the weak derivative \\(u\' = \\alpha |x|^{\\alpha-1} \\operatorname{sgn}(x)\\) and check \\(L^2\\) integrability near \\(x = 0\\).',
                    solution: 'The weak derivative is \\(u\'(x) = \\alpha |x|^{\\alpha - 1} \\operatorname{sgn}(x)\\). For \\(u \\in H^1\\), we need \\(u \\in L^2\\) and \\(u\' \\in L^2\\). We have \\(\\int_0^1 x^{2\\alpha} dx < \\infty\\) iff \\(2\\alpha > -1\\), i.e., \\(\\alpha > -1/2\\). And \\(\\int_0^1 \\alpha^2 x^{2(\\alpha-1)} dx < \\infty\\) iff \\(2(\\alpha - 1) > -1\\), i.e., \\(\\alpha > 1/2\\). The binding condition is \\(\\alpha > 1/2\\).'
                },
                {
                    question: 'Prove the Poincare inequality: for \\(\\Omega = (0, L)\\) and \\(u \\in H^1_0(0,L)\\), show \\(\\|u\\|_{L^2} \\leq L \\|u\'\\|_{L^2}\\).',
                    hint: 'Write \\(u(x) = \\int_0^x u\'(t) dt\\) and apply Cauchy-Schwarz.',
                    solution: 'Since \\(u \\in H^1_0\\), \\(u(0) = 0\\) (in the trace sense), so \\(u(x) = \\int_0^x u\'(t) dt\\). By Cauchy-Schwarz: \\(|u(x)|^2 \\leq x \\int_0^x |u\'(t)|^2 dt \\leq x \\|u\'\\|_{L^2}^2\\). Integrating: \\(\\|u\\|_{L^2}^2 = \\int_0^L |u(x)|^2 dx \\leq \\|u\'\\|_{L^2}^2 \\int_0^L x \\, dx = \\frac{L^2}{2} \\|u\'\\|_{L^2}^2\\). So \\(\\|u\\|_{L^2} \\leq \\frac{L}{\\sqrt{2}} \\|u\'\\|_{L^2} \\leq L \\|u\'\\|_{L^2}\\).'
                },
                {
                    question: 'For \\(u \\in H^s(\\mathbb{R}^n)\\), show that \\(\\|u\\|_{H^s}^2 = \\sum_{|\\alpha| \\leq k} \\|D^\\alpha u\\|_{L^2}^2\\) when \\(s = k\\) is a non-negative integer, using the Fourier characterization.',
                    hint: 'Use Plancherel and the fact that \\((1 + |\\xi|^2)^k \\sim \\sum_{|\\alpha| \\leq k} |\\xi^\\alpha|^2\\) up to constants.',
                    solution: 'By Plancherel, \\(\\|D^\\alpha u\\|_{L^2}^2 = \\|(2\\pi i \\xi)^\\alpha \\hat{u}\\|_{L^2}^2 = (2\\pi)^{2|\\alpha|} \\int |\\xi^\\alpha|^2 |\\hat{u}|^2 d\\xi\\). The Fourier characterization gives \\(\\|u\\|_{H^k}^2 = \\int (1+|\\xi|^2)^k |\\hat{u}(\\xi)|^2 d\\xi\\). Expanding \\((1+|\\xi|^2)^k = \\sum_{j=0}^k \\binom{k}{j} |\\xi|^{2j}\\), and noting \\(|\\xi|^{2j} = \\sum_{|\\alpha|=j} \\frac{j!}{\\alpha!} |\\xi^\\alpha|^2\\), we get equivalence (up to constants depending on dimension and \\(k\\)) with \\(\\sum_{|\\alpha| \\leq k} \\|D^\\alpha u\\|_{L^2}^2\\).'
                }
            ]
        },

        // ============================================================
        // Section 5: Sobolev Embedding and PDE Applications
        // ============================================================
        {
            id: 'sobolev-embedding-pde',
            title: 'Sobolev Embedding and PDE Applications',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Weak Solutions via Functional Analysis.</strong> The ultimate application of functional analysis to PDE: the Lax-Milgram theorem guarantees existence and uniqueness of weak solutions to elliptic PDE. This combines Hilbert space theory, Sobolev embeddings, and coercivity into a single, elegant existence machine.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We formulate the weak formulation of the Dirichlet problem, state and prove the Lax-Milgram theorem, verify its hypotheses for the Poisson equation, and discuss regularity theory that bootstraps weak solutions to classical ones.</p>
</div>

<div class="bridge-block chapter-closing">
<p><strong>Course Conclusion.</strong> From metric spaces to distributions, from abstract norms to concrete PDE solutions, functional analysis provides a unified language for infinite-dimensional problems. The four pillars (Hahn-Banach, Baire, UBP, OMT), the geometry of Hilbert spaces, the spectral theory of operators, and the distributional framework for PDE together form a toolkit of extraordinary power. Every topic in this course connects to the others, and the ideas developed here are the foundation for research in analysis, geometry, physics, and applied mathematics.</p>
</div>

                <h2>Sobolev Embedding and PDE Applications</h2>

                <p>The crowning achievements of Sobolev space theory are the <strong>embedding theorems</strong>, which convert regularity in the Sobolev sense (integrability of derivatives) into classical regularity (continuity, differentiability). These results are the bridge between weak and classical solutions of PDEs.</p>

                <h3>Sobolev Embedding Theorems</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.34 (Sobolev Embedding, \\(L^p\\) Case)</div>
                    <div class="env-body">
                        <p>Let \\(\\Omega \\subseteq \\mathbb{R}^n\\) be open with Lipschitz boundary, \\(k \\in \\mathbb{N}\\), \\(1 \\leq p < \\infty\\).</p>
                        <ol>
                            <li><strong>Subcritical case</strong> (\\(kp < n\\)): \\(W^{k,p}(\\Omega) \\hookrightarrow L^{p^*}(\\Omega)\\) where \\(p^* = \\frac{np}{n - kp}\\) (Sobolev conjugate). The embedding is continuous.</li>
                            <li><strong>Critical case</strong> (\\(kp = n\\)): \\(W^{k,p}(\\Omega) \\hookrightarrow L^q(\\Omega)\\) for all \\(q \\in [p, \\infty)\\), but not into \\(L^\\infty\\) in general.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.35 (Morrey's Inequality / Sobolev Embedding into \\(C^k\\))</div>
                    <div class="env-body">
                        <p><strong>Supercritical case</strong> (\\(kp > n\\)): If \\(k - n/p > m + \\gamma\\) with \\(m \\in \\mathbb{N}_0\\) and \\(0 < \\gamma \\leq 1\\), then</p>
                        \\[W^{k,p}(\\Omega) \\hookrightarrow C^{m,\\gamma}(\\bar{\\Omega}),\\]
                        <p>where \\(C^{m,\\gamma}\\) is the Holder space. In particular, for \\(p = 2\\):</p>
                        \\[H^s(\\mathbb{R}^n) \\hookrightarrow C^k(\\mathbb{R}^n) \\quad \\text{when } s > \\frac{n}{2} + k.\\]
                        <p>Every function in \\(H^s\\) has a continuous representative when \\(s > n/2\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sobolev-embedding-viz"></div>

                <div class="env-block example">
                    <div class="env-title">Example 19.36 (Sobolev Embedding in Dimensions 1, 2, 3)</div>
                    <div class="env-body">
                        <ul>
                            <li><strong>\\(n = 1\\)</strong>: \\(H^1(\\mathbb{R}) \\hookrightarrow C^0(\\mathbb{R}) \\cap L^\\infty(\\mathbb{R})\\). Every \\(H^1\\) function is (a.e. equal to) a continuous function. This fails in higher dimensions.</li>
                            <li><strong>\\(n = 2\\)</strong>: \\(H^1(\\mathbb{R}^2) \\hookrightarrow L^q\\) for all \\(q < \\infty\\) (critical case), but \\(H^1 \\not\\hookrightarrow L^\\infty\\). Need \\(s > 1\\) for continuity.</li>
                            <li><strong>\\(n = 3\\)</strong>: \\(H^1(\\mathbb{R}^3) \\hookrightarrow L^6(\\mathbb{R}^3)\\) (subcritical, \\(p^* = 6\\)). Need \\(s > 3/2\\) for continuity.</li>
                        </ul>
                    </div>
                </div>

                <h3>Trace Theorem</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.37 (Trace Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(\\Omega \\subset \\mathbb{R}^n\\) be a bounded domain with \\(C^1\\) boundary. There exists a unique bounded linear operator</p>
                        \\[\\gamma: H^1(\\Omega) \\to L^2(\\partial\\Omega)\\]
                        <p>called the <strong>trace operator</strong>, such that \\(\\gamma u = u\\big|_{\\partial\\Omega}\\) for \\(u \\in C^\\infty(\\bar{\\Omega})\\). Moreover:</p>
                        <ol>
                            <li>\\(\\gamma\\) is surjective onto \\(H^{1/2}(\\partial\\Omega)\\).</li>
                            <li>\\(\\ker(\\gamma) = H^1_0(\\Omega)\\).</li>
                            <li>\\(\\|\\gamma u\\|_{L^2(\\partial\\Omega)} \\leq C \\|u\\|_{H^1(\\Omega)}\\).</li>
                        </ol>
                        <p>The trace theorem gives rigorous meaning to "boundary values" of Sobolev functions.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why Traces Matter)</div>
                    <div class="env-body">
                        <p>For an \\(H^1\\) function on a domain in \\(\\mathbb{R}^n\\) (\\(n \\geq 2\\)), pointwise evaluation on \\(\\partial\\Omega\\) is meaningless since \\(\\partial\\Omega\\) has measure zero. The trace theorem provides the correct replacement: boundary values are defined as elements of \\(H^{1/2}(\\partial\\Omega)\\), not pointwise.</p>
                    </div>
                </div>

                <h3>Weak Solutions and the Lax-Milgram Theorem</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 19.38 (Weak Solution of Elliptic PDE)</div>
                    <div class="env-body">
                        <p>Consider the Dirichlet problem for the Laplacian:</p>
                        \\[-\\Delta u = f \\text{ in } \\Omega, \\quad u = 0 \\text{ on } \\partial\\Omega.\\]
                        <p>A <strong>weak solution</strong> is \\(u \\in H^1_0(\\Omega)\\) satisfying</p>
                        \\[\\int_\\Omega \\nabla u \\cdot \\nabla v \\, dx = \\int_\\Omega f v \\, dx, \\quad \\forall v \\in H^1_0(\\Omega).\\]
                        <p>This is obtained by multiplying \\(-\\Delta u = f\\) by a test function \\(v\\), integrating by parts, and using \\(v|_{\\partial\\Omega} = 0\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="weak-solution-pde-viz"></div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.39 (Lax-Milgram)</div>
                    <div class="env-body">
                        <p>Let \\(H\\) be a Hilbert space, \\(a: H \\times H \\to \\mathbb{R}\\) a bilinear form that is:</p>
                        <ol>
                            <li><strong>Continuous</strong>: \\(|a(u,v)| \\leq M \\|u\\| \\|v\\|\\) for some \\(M > 0\\).</li>
                            <li><strong>Coercive</strong>: \\(a(u,u) \\geq \\alpha \\|u\\|^2\\) for some \\(\\alpha > 0\\).</li>
                        </ol>
                        <p>Then for every continuous linear functional \\(F \\in H^*\\), there exists a unique \\(u \\in H\\) such that</p>
                        \\[a(u, v) = F(v), \\quad \\forall v \\in H,\\]
                        <p>and \\(\\|u\\| \\leq \\frac{1}{\\alpha} \\|F\\|_{H^*}\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 19.40 (Existence for Elliptic PDE)</div>
                    <div class="env-body">
                        <p>For \\(f \\in L^2(\\Omega)\\) and \\(\\Omega\\) bounded, the Dirichlet problem \\(-\\Delta u = f\\) has a unique weak solution \\(u \\in H^1_0(\\Omega)\\).</p>
                        <p><em>Proof sketch.</em> Set \\(H = H^1_0(\\Omega)\\), \\(a(u,v) = \\int \\nabla u \\cdot \\nabla v\\), \\(F(v) = \\int fv\\). Continuity of \\(a\\) is clear. Coercivity follows from the Poincare inequality: \\(a(u,u) = \\|\\nabla u\\|_{L^2}^2 \\geq C \\|u\\|_{H^1}^2\\). Apply Lax-Milgram.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="lax-milgram-viz"></div>

                <h3>Elliptic Regularity</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 19.41 (Elliptic Regularity)</div>
                    <div class="env-body">
                        <p>Let \\(\\Omega\\) have \\(C^\\infty\\) boundary. If \\(u \\in H^1_0(\\Omega)\\) is the weak solution of \\(-\\Delta u = f\\) with \\(f \\in H^k(\\Omega)\\), then \\(u \\in H^{k+2}(\\Omega)\\) and</p>
                        \\[\\|u\\|_{H^{k+2}} \\leq C(\\|f\\|_{H^k} + \\|u\\|_{L^2}).\\]
                        <p>Combined with Sobolev embedding: if \\(f \\in C^\\infty\\), then \\(u \\in C^\\infty\\). Weak solutions are automatically classical when the data is smooth enough.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Sobolev Space Philosophy)</div>
                    <div class="env-body">
                        <p>The modern approach to PDE is a three-step program:</p>
                        <ol>
                            <li><strong>Existence</strong>: Find a weak solution in a Sobolev space (via Lax-Milgram, Galerkin, or variational methods).</li>
                            <li><strong>Uniqueness</strong>: Use the structure of the bilinear form (coercivity).</li>
                            <li><strong>Regularity</strong>: Prove the weak solution is actually smooth (elliptic regularity + Sobolev embedding).</li>
                        </ol>
                        <p>This program, central to modern PDE theory, is built entirely on the distribution and Sobolev space framework developed in this chapter.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'sobolev-embedding-viz',
                    title: 'Sobolev Embedding Diagram',
                    setup: function(container) {
                        var viz = new VizEngine(container, { width: 560, height: 420, scale: 1, originX: 0, originY: 0 });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var W = viz.width, H = viz.height;

                            // Background
                            ctx.fillStyle = viz.colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Sobolev Embedding: H^s(R^n) -> C^k when s > n/2 + k', W / 2, 25);

                            // Draw dimension axis (horizontal) and regularity axis (vertical)
                            var ox = 80, oy = H - 60;
                            var axW = W - 140, axH = H - 100;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + axW, oy); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox, oy - axH); ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Dimension n', ox + axW / 2, oy + 35);
                            ctx.save();
                            ctx.translate(ox - 40, oy - axH / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillText('Sobolev index s', 0, 0);
                            ctx.restore();

                            // Regions
                            var dims = [1, 2, 3, 4, 5];
                            var cellW = axW / 6;
                            var cellH = axH / 6;

                            // Color code: s > n/2 => continuous (blue), s > n/2 + 1 => C^1 (teal)
                            for (var ni = 0; ni < dims.length; ni++) {
                                var n = dims[ni];
                                var xp = ox + (ni + 0.5) * cellW;

                                // Label
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText('n=' + n, xp, oy + 18);

                                // Draw colored blocks for s values
                                for (var si = 0; si < 5; si++) {
                                    var s = si + 0.5;
                                    var yp = oy - (si + 0.5) * cellH;

                                    var color;
                                    if (s > n / 2 + 1) {
                                        color = viz.colors.blue + '88'; // C^1
                                    } else if (s > n / 2) {
                                        color = viz.colors.teal + '88'; // C^0
                                    } else {
                                        color = viz.colors.red + '44'; // only L^p
                                    }

                                    ctx.fillStyle = color;
                                    ctx.fillRect(xp - cellW * 0.4, yp - cellH * 0.35, cellW * 0.8, cellH * 0.7);
                                }
                            }

                            // s-axis labels
                            for (var si = 0; si < 5; si++) {
                                var s = si + 0.5;
                                var yp = oy - (si + 0.5) * cellH;
                                ctx.fillStyle = viz.colors.text;
                                ctx.textAlign = 'right';
                                ctx.fillText('s=' + s.toFixed(1), ox - 8, yp + 4);
                            }

                            // Legend
                            ctx.textAlign = 'left';
                            var ly = oy - axH - 10;
                            ctx.fillStyle = viz.colors.red + '88';
                            ctx.fillRect(ox + 10, ly, 15, 12);
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Only L^p embedding', ox + 30, ly + 10);

                            ctx.fillStyle = viz.colors.teal + 'cc';
                            ctx.fillRect(ox + 190, ly, 15, 12);
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Embeds into C^0', ox + 210, ly + 10);

                            ctx.fillStyle = viz.colors.blue + 'cc';
                            ctx.fillRect(ox + 350, ly, 15, 12);
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Embeds into C^1', ox + 370, ly + 10);

                            // Critical line s = n/2
                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([5, 5]);
                            ctx.beginPath();
                            for (var ni = 0; ni < dims.length; ni++) {
                                var n = dims[ni];
                                var xp = ox + (ni + 0.5) * cellW;
                                var yp = oy - (n / 2) * (cellH / 1);
                                if (yp < oy - axH) continue;
                                if (ni === 0) ctx.moveTo(xp, yp);
                                else ctx.lineTo(xp, yp);
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.textAlign = 'right';
                            ctx.fillText('s = n/2 (critical line)', ox + axW - 5, oy - 2.5 * cellH + 15);
                        }

                        draw();
                    }
                },
                {
                    id: 'weak-solution-pde-viz',
                    title: 'Weak Solution of -Delta u = f',
                    setup: function(container) {
                        var viz = new VizEngine(container, { width: 560, height: 380, scale: 50, originY: 300, originX: 80 });

                        var fMode = 0;
                        var labels = ['f(x) = 1 (constant)', 'f(x) = sin(pi x)', 'f(x) = x'];

                        // Exact solutions on (0,1) with u(0)=u(1)=0
                        // -u'' = 1 => u = x(1-x)/2
                        // -u'' = sin(pi x) => u = sin(pi x)/pi^2
                        // -u'' = x => u = x(1-x^2)/6... actually u = (x - x^3)/6

                        function f0(x) { return 1; }
                        function u0(x) { return x * (1 - x) / 2; }

                        function f1(x) { return Math.sin(Math.PI * x); }
                        function u1(x) { return Math.sin(Math.PI * x) / (Math.PI * Math.PI); }

                        function f2(x) { return x; }
                        function u2(x) { return (x - x * x * x) / 6; }

                        var fs = [f0, f1, f2];
                        var us = [u0, u1, u2];

                        function draw() {
                            viz.clear();
                            viz.drawGrid(0.5);
                            viz.drawAxes();

                            var fFn = fs[fMode];
                            var uFn = us[fMode];

                            // Draw f (right-hand side)
                            viz.drawCurve(function(t) { return [t, fFn(t) * 0.3]; }, 0, 1, 200, viz.colors.orange, 2);

                            // Draw u (solution)
                            viz.drawCurve(function(t) { return [t, uFn(t) * 4]; }, 0, 1, 200, viz.colors.blue, 2.5);

                            // Boundary markers
                            viz.drawPoint(0, 0, viz.colors.red, 'u(0)=0', 4);
                            viz.drawPoint(1, 0, viz.colors.red, 'u(1)=0', 4);

                            viz.screenText(labels[fMode], viz.width / 2, 25, viz.colors.white, 13);
                            viz.screenText('Orange: f (scaled)   Blue: weak solution u (scaled)', viz.width / 2, 45, viz.colors.text, 11);
                            viz.screenText('-u\'\' = f on (0,1), u(0) = u(1) = 0', viz.width / 2, viz.height - 15, viz.colors.text, 11);
                        }

                        VizEngine.createButton(container, 'f = 1', function() { fMode = 0; draw(); });
                        VizEngine.createButton(container, 'f = sin(pi x)', function() { fMode = 1; draw(); });
                        VizEngine.createButton(container, 'f = x', function() { fMode = 2; draw(); });

                        draw();
                    }
                },
                {
                    id: 'lax-milgram-viz',
                    title: 'Lax-Milgram: Coercivity and Existence',
                    setup: function(container) {
                        var viz = new VizEngine(container, { width: 560, height: 380, scale: 40 });

                        var alpha = 1.0;
                        var slider = VizEngine.createSlider(container, 'Coercivity alpha', 0.2, 3.0, 1.0, 0.1, function(v) {
                            alpha = v;
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Show a(u,u) >= alpha ||u||^2 as a paraboloid cross-section
                            // a(u,u) as function of ||u||
                            var r = alpha;

                            // Coercivity bound: a(u,u) >= alpha ||u||^2
                            viz.drawCurve(function(t) {
                                return [t, r * t * t];
                            }, -4, 4, 300, viz.colors.teal, 2.5);

                            // Continuity bound: a(u,u) <= M ||u||^2 (M = 3)
                            var M = 3;
                            viz.drawCurve(function(t) {
                                return [t, M * t * t];
                            }, -4, 4, 300, viz.colors.red + '88', 1.5);

                            // Shade the feasible region
                            viz.drawFilledRegion(
                                function(t) { return [t, r * t * t]; },
                                function(t) { return [t, M * t * t]; },
                                -3.5, 3.5, 200, viz.colors.purple + '22'
                            );

                            // Mark the unique solution point
                            viz.drawPoint(1.5, r * 1.5 * 1.5, viz.colors.orange, 'u*', 6);

                            viz.screenText('a(u,u) lies between alpha ||u||^2 and M||u||^2', viz.width / 2, 25, viz.colors.white, 12);
                            viz.screenText('Teal: coercivity bound   Red: continuity bound', viz.width / 2, 45, viz.colors.text, 11);
                            viz.screenText('alpha = ' + alpha.toFixed(1) + ': stronger coercivity => tighter bound on ||u||', viz.width / 2, viz.height - 15, viz.colors.text, 11);

                            viz.drawText('||u||', 5, -0.3, viz.colors.text, 12, 'left');
                            viz.drawText('a(u,u)', -0.3, 4.5, viz.colors.text, 12, 'right');
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that \\(H^1(\\mathbb{R}) \\hookrightarrow C^0(\\mathbb{R}) \\cap L^\\infty(\\mathbb{R})\\) with \\(\\|u\\|_{L^\\infty} \\leq C \\|u\\|_{H^1}\\). (This is the 1D Sobolev embedding.)',
                    hint: 'For \\(u \\in C_c^\\infty\\), write \\(u(x)^2 = 2 \\int_{-\\infty}^x u(t) u\'(t) dt\\) and apply Cauchy-Schwarz.',
                    solution: 'For \\(u \\in C_c^\\infty(\\mathbb{R})\\): \\(u(x)^2 = 2\\int_{-\\infty}^x u(t)u\'(t) dt\\), so \\(|u(x)|^2 \\leq 2 \\int |u| |u\'| \\leq 2 \\|u\\|_{L^2} \\|u\'\\|_{L^2} \\leq \\|u\\|_{L^2}^2 + \\|u\'\\|_{L^2}^2 = \\|u\\|_{H^1}^2\\). Thus \\(\\|u\\|_{L^\\infty} \\leq \\|u\\|_{H^1}\\). By density (Meyers-Serrin), this extends to all \\(u \\in H^1\\), which therefore has a continuous representative. Note \\(n/2 = 1/2 < 1 = s\\), confirming the embedding \\(s > n/2\\).'
                },
                {
                    question: 'Use the Lax-Milgram theorem to prove existence and uniqueness of the weak solution to \\(-\\Delta u + u = f\\) in \\(H^1(\\mathbb{R}^n)\\) for \\(f \\in L^2(\\mathbb{R}^n)\\).',
                    hint: 'Define \\(a(u,v) = \\int (\\nabla u \\cdot \\nabla v + uv)\\) and verify coercivity and continuity.',
                    solution: 'Set \\(a(u,v) = \\int_{\\mathbb{R}^n} (\\nabla u \\cdot \\nabla v + uv) dx\\) and \\(F(v) = \\int fv\\). Continuity: \\(|a(u,v)| \\leq \\|\\nabla u\\|_{L^2} \\|\\nabla v\\|_{L^2} + \\|u\\|_{L^2} \\|v\\|_{L^2} \\leq \\|u\\|_{H^1} \\|v\\|_{H^1}\\). Coercivity: \\(a(u,u) = \\|\\nabla u\\|_{L^2}^2 + \\|u\\|_{L^2}^2 = \\|u\\|_{H^1}^2\\). The functional \\(F(v) = \\int fv\\) satisfies \\(|F(v)| \\leq \\|f\\|_{L^2} \\|v\\|_{L^2} \\leq \\|f\\|_{L^2} \\|v\\|_{H^1}\\), so \\(F \\in (H^1)^*\\). Lax-Milgram gives unique \\(u \\in H^1\\) with \\(a(u,v) = F(v)\\) for all \\(v\\).'
                },
                {
                    question: 'Show that the critical Sobolev embedding fails: construct a function in \\(H^1(\\mathbb{R}^2)\\) that is not in \\(L^\\infty(\\mathbb{R}^2)\\). (Hint: consider \\(u(x) = \\eta(x) \\log\\log(1/|x|)\\) near the origin.)',
                    hint: 'Verify that the logarithmic singularity is in \\(H^1\\) by computing \\(\\|\\nabla u\\|_{L^2}\\) in polar coordinates.',
                    solution: 'Let \\(\\eta \\in C_c^\\infty\\) with \\(\\eta = 1\\) near \\(0\\), and set \\(u(x) = \\eta(x) \\log\\log(e/|x|)\\) for small \\(|x|\\). Then \\(u\\) is unbounded as \\(|x| \\to 0\\), so \\(u \\notin L^\\infty\\). For \\(u \\in H^1\\): in polar coordinates, \\(|\\nabla u|^2 \\sim \\frac{1}{r^2 (\\log(e/r))^2}\\), so \\(\\int |\\nabla u|^2 dx \\sim \\int_0^\\epsilon \\frac{r \\, dr}{r^2 (\\log(e/r))^2} = \\int_0^\\epsilon \\frac{dr}{r(\\log(e/r))^2}\\). Substituting \\(s = \\log(e/r)\\): integral \\(= \\int_1^\\infty s^{-2} ds < \\infty\\). So \\(u \\in H^1(\\mathbb{R}^2) \\setminus L^\\infty\\).'
                }
            ]
        }
    ]
});
