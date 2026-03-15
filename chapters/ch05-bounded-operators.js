window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch05',
    number: 5,
    title: 'Bounded Linear Operators',
    subtitle: 'The algebra of continuous linear maps',
    sections: [
        // ============================================================
        // SECTION 1: Linear Operators
        // ============================================================
        {
            id: 'ch05-sec01',
            title: 'Linear Operators',
            content: `
<div class="bridge-block chapter-opening">
<p><strong>From Spaces to Operators.</strong> Chapters 0-4 built a hierarchy of increasingly structured spaces: metric, normed, Banach, Hilbert. Now we shift focus from the spaces themselves to the <em>maps between them</em>. In functional analysis, these maps, called operators, are the primary objects of study. Understanding when an operator is "well-behaved" (bounded, continuous, compact) is the central theme of Chapters 5-9.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define linear operators between normed spaces, examine key examples (differentiation, integration, shift, multiplication), and observe that some operators amplify arbitrarily while others do not. This contrast motivates the notion of boundedness.</p>
</div>

<h2>Linear Operators</h2>
<p>Throughout functional analysis, the central objects of study are not just spaces but the <strong>maps between them</strong>. Just as linear algebra studies matrices as linear maps between finite-dimensional spaces, functional analysis studies <em>operators</em> between infinite-dimensional normed spaces.</p>

<div class="env-block definition">
    <div class="env-title">Definition (Linear Operator)</div>
    <div class="env-body"><p>Let \\(X\\) and \\(Y\\) be vector spaces over \\(\\mathbb{F}\\) (where \\(\\mathbb{F} = \\mathbb{R}\\) or \\(\\mathbb{C}\\)). A map \\(T: X \\to Y\\) is called a <strong>linear operator</strong> if for all \\(x, y \\in X\\) and \\(\\alpha \\in \\mathbb{F}\\):</p>
    <p>\\[T(\\alpha x + y) = \\alpha T(x) + T(y).\\]</p>
    <p>When \\(Y = \\mathbb{F}\\), we call \\(T\\) a <strong>linear functional</strong>.</p></div>
</div>

<p>The notion is identical to that in linear algebra, but the spaces involved are typically infinite-dimensional. This seemingly modest generalization leads to profound new phenomena.</p>

<h3>Key Examples</h3>

<div class="env-block example">
    <div class="env-title">Example 1: Differentiation Operator</div>
    <div class="env-body"><p>Let \\(X = C^1([0,1])\\) with the sup-norm and \\(Y = C([0,1])\\). Define:</p>
    <p>\\[D: X \\to Y, \\quad (Df)(t) = f'(t).\\]</p>
    <p>This is linear: \\(D(\\alpha f + g) = \\alpha f' + g' = \\alpha Df + Dg\\). However, consider \\(f_n(t) = t^n / n\\). Then \\(\\|f_n\\|_\\infty = 1/n \\to 0\\) but \\(\\|Df_n\\|_\\infty = \\|t^{n-1}\\|_\\infty = 1\\). The differentiation operator is <strong>unbounded</strong> — small inputs can produce large outputs.</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 2: Integration Operator (Volterra)</div>
    <div class="env-body"><p>On \\(C([0,1])\\) with the sup-norm, define:</p>
    <p>\\[(Vf)(t) = \\int_0^t f(s)\\, ds.\\]</p>
    <p>This is linear, and \\(\\|Vf\\|_\\infty \\leq \\|f\\|_\\infty \\cdot 1\\), so \\(\\|V\\| \\leq 1\\). In fact \\(\\|V\\| = 1\\) (achieved at \\(f \\equiv 1\\)). The Volterra operator is <strong>bounded</strong>.</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 3: Shift Operators</div>
    <div class="env-body"><p>On \\(\\ell^2\\), the <strong>right shift</strong> \\(R(x_1, x_2, \\ldots) = (0, x_1, x_2, \\ldots)\\) and <strong>left shift</strong> \\(L(x_1, x_2, \\ldots) = (x_2, x_3, \\ldots)\\) are both bounded with \\(\\|R\\| = \\|L\\| = 1\\). Note \\(LR = I\\) but \\(RL \\neq I\\) — a purely infinite-dimensional phenomenon.</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 4: Multiplication Operator</div>
    <div class="env-body"><p>For \\(g \\in L^\\infty(\\mu)\\), define \\(M_g: L^2(\\mu) \\to L^2(\\mu)\\) by \\((M_g f)(x) = g(x)f(x)\\). Then \\(\\|M_g\\| = \\|g\\|_\\infty\\). Multiplication operators form a commutative algebra isometric to \\(L^\\infty\\).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-linear-operators-gallery"></div>

<h3>The Vector Space of Operators</h3>

<p>If \\(T, S: X \\to Y\\) are linear and \\(\\alpha \\in \\mathbb{F}\\), then \\(\\alpha T + S\\) defined by \\((\\alpha T + S)(x) = \\alpha T(x) + S(x)\\) is linear. The set of all linear operators from \\(X\\) to \\(Y\\) forms a vector space, denoted \\(\\mathcal{L}(X, Y)\\).</p>

<div class="env-block remark">
    <div class="env-title">Remark</div>
    <div class="env-body"><p>The kernel \\(\\ker T = \\{x \\in X : Tx = 0\\}\\) is a subspace of \\(X\\), and the range \\(\\operatorname{ran} T = \\{Tx : x \\in X\\}\\) is a subspace of \\(Y\\). For bounded operators, \\(\\ker T\\) is always closed (as \\(T^{-1}(\\{0\\})\\) and \\(T\\) is continuous), but \\(\\operatorname{ran} T\\) need not be closed.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-kernel-range-demo"></div>`,
            visualizations: [
                {
                    id: 'viz-linear-operators-gallery',
                    title: 'Gallery of Linear Operators in R^2',
                    description: 'Drag the input vector to see how different linear operators transform it. Toggle between rotation, projection, shear, and scaling.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 50});
                        var ctx = viz.ctx;
                        var mode = 0;
                        var modes = ['Rotation (45 deg)', 'Projection onto x-axis', 'Shear', 'Scaling (2,0.5)'];
                        var matrices = [
                            [[Math.cos(Math.PI/4), -Math.sin(Math.PI/4)], [Math.sin(Math.PI/4), Math.cos(Math.PI/4)]],
                            [[1, 0], [0, 0]],
                            [[1, 1], [0, 1]],
                            [[2, 0], [0, 0.5]]
                        ];

                        var pt = viz.addDraggable('v', 2, 1, viz.colors.blue);

                        VizEngine.createButton(controls, 'Next Operator', function() {
                            mode = (mode + 1) % modes.length;
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var M = matrices[mode];
                            var vx = pt.x, vy = pt.y;
                            var tv = VizEngine.matVec(M, [vx, vy]);

                            // Draw unit circle and its image
                            var N = 120;
                            ctx.strokeStyle = viz.colors.blue + '55';
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var cx = Math.cos(th), cy = Math.sin(th);
                                var sc = viz.toScreen(cx, cy);
                                if (i === 0) ctx.moveTo(sc[0], sc[1]); else ctx.lineTo(sc[0], sc[1]);
                            }
                            ctx.stroke();

                            ctx.strokeStyle = viz.colors.orange + '77';
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var cx = Math.cos(th), cy = Math.sin(th);
                                var im = VizEngine.matVec(M, [cx, cy]);
                                var sc = viz.toScreen(im[0], im[1]);
                                if (i === 0) ctx.moveTo(sc[0], sc[1]); else ctx.lineTo(sc[0], sc[1]);
                            }
                            ctx.stroke();

                            viz.drawVector(0, 0, vx, vy, viz.colors.blue, 'x');
                            viz.drawVector(0, 0, tv[0], tv[1], viz.colors.orange, 'Tx');

                            viz.drawDraggables();

                            // Labels
                            viz.screenText(modes[mode], viz.width / 2, 22, viz.colors.white, 16);
                            var nrm = Math.sqrt(vx * vx + vy * vy);
                            var tnrm = Math.sqrt(tv[0] * tv[0] + tv[1] * tv[1]);
                            viz.screenText('||x|| = ' + nrm.toFixed(2) + '    ||Tx|| = ' + tnrm.toFixed(2), viz.width / 2, viz.height - 16, viz.colors.text, 13);
                            if (nrm > 0.01) {
                                viz.screenText('||Tx||/||x|| = ' + (tnrm / nrm).toFixed(3), viz.width / 2, viz.height - 36, viz.colors.teal, 13);
                            }
                        }

                        viz.animate(function() { draw(); });
                    }
                },
                {
                    id: 'viz-kernel-range-demo',
                    title: 'Kernel and Range of a Projection',
                    description: 'Visualize how a projection operator splits R^2 into kernel and range. Drag the projection direction to explore.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400, scale: 55});
                        var ctx = viz.ctx;

                        var dir = viz.addDraggable('dir', 2.5, 1, viz.colors.teal, 8);
                        var inputPt = viz.addDraggable('inp', 1, 2.5, viz.colors.blue, 7);

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var dx = dir.x, dy = dir.y;
                            var len = Math.sqrt(dx * dx + dy * dy);
                            if (len < 0.01) { dx = 1; dy = 0; len = 1; }
                            var ux = dx / len, uy = dy / len;

                            // Range line (projection direction)
                            viz.drawLine(0, 0, ux, uy, viz.colors.teal + '55', 1, true);

                            // Kernel line (perpendicular)
                            viz.drawLine(0, 0, -uy, ux, viz.colors.red + '55', 1, true);

                            // Project inputPt onto direction
                            var dot = inputPt.x * ux + inputPt.y * uy;
                            var px = dot * ux, py = dot * uy;

                            // Projection line
                            ctx.strokeStyle = viz.colors.purple + '88';
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 3]);
                            var s1 = viz.toScreen(inputPt.x, inputPt.y);
                            var s2 = viz.toScreen(px, py);
                            ctx.beginPath(); ctx.moveTo(s1[0], s1[1]); ctx.lineTo(s2[0], s2[1]); ctx.stroke();
                            ctx.setLineDash([]);

                            viz.drawVector(0, 0, inputPt.x, inputPt.y, viz.colors.blue, 'x');
                            viz.drawVector(0, 0, px, py, viz.colors.orange, 'Px');

                            viz.drawDraggables();

                            viz.screenText('Range (projection direction)', 110, 18, viz.colors.teal, 12, 'left');
                            viz.screenText('Kernel (perpendicular)', 110, 36, viz.colors.red, 12, 'left');
                            viz.screenText('P is idempotent: P^2 = P', viz.width / 2, viz.height - 16, viz.colors.text, 12);
                        }

                        viz.animate(function() { draw(); });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch05-ex01',
                    type: 'proof',
                    difficulty: 2,
                    question: 'Prove that the left shift operator L on l^2 is linear and compute its kernel.',
                    hint: 'For linearity, verify L(alpha x + y) = alpha L(x) + L(y) componentwise. For the kernel, L(x_1, x_2, ...) = (x_2, x_3, ...) = 0 requires all x_n = 0 for n >= 2.',
                    solution: 'Linearity: L(alpha x + y)_n = (alpha x + y)_{n+1} = alpha x_{n+1} + y_{n+1} = alpha(Lx)_n + (Ly)_n. Kernel: Lx = 0 means x_{n+1} = 0 for all n >= 1, so x = (x_1, 0, 0, ...). Thus ker(L) = span{e_1}, which is one-dimensional.'
                },
                {
                    id: 'ch05-ex02',
                    type: 'computation',
                    difficulty: 2,
                    question: 'Let T: R^3 -> R^2 be defined by T(x,y,z) = (x + 2y, y - z). Find ker(T) and ran(T). Is T surjective?',
                    hint: 'Set T(x,y,z) = (0,0) and solve. For the range, determine whether every (a,b) in R^2 is achievable.',
                    solution: 'Kernel: x + 2y = 0, y - z = 0, so y = z, x = -2y. Thus ker(T) = {(-2t, t, t) : t in R} = span{(-2,1,1)}. Range: given (a,b), set x = a - 2b, y = b, z = 0. Then T(a-2b, b, 0) = (a, b). So ran(T) = R^2 and T is surjective.'
                },
                {
                    id: 'ch05-ex03',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Let V: C([0,1]) -> C([0,1]) be the Volterra operator (Vf)(t) = integral from 0 to t of f(s) ds. Show that V has no eigenvalues.',
                    hint: 'If Vf = lambda f, differentiate both sides to get a first-order ODE. What initial condition does f satisfy?',
                    solution: 'Suppose Vf = lambda f for some lambda != 0 and f != 0. Then f(0) = (Vf)(0) = 0. Differentiating: f(t) = lambda f\'(t), giving f\'(t) = (1/lambda)f(t). The solution is f(t) = Ce^{t/lambda} with f(0) = 0, so C = 0, meaning f = 0, a contradiction. For lambda = 0: Vf = 0 implies the integral from 0 to t of f(s) ds = 0 for all t, so f = 0. Thus V has no eigenvalues.'
                },
                {
                    id: 'ch05-ex04',
                    type: 'proof',
                    difficulty: 2,
                    question: 'Show that for the right shift R on l^2, ||Rx|| = ||x|| for all x, but R is not surjective.',
                    hint: 'Compute ||Rx||^2 directly. For non-surjectivity, find an element not in the range.',
                    solution: '||Rx||^2 = |0|^2 + |x_1|^2 + |x_2|^2 + ... = sum |x_n|^2 = ||x||^2, so ||Rx|| = ||x|| (R is an isometry). Non-surjectivity: e_1 = (1,0,0,...) is not in ran(R) since Rx always has 0 as its first component.'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Boundedness = Continuity
        // ============================================================
        {
            id: 'ch05-sec02',
            title: 'Boundedness Equals Continuity',
            content: `
<div class="bridge-block section-bridge">
<p><strong>The Central Equivalence.</strong> In analysis, continuity is the fundamental notion of "well-behaved." For linear operators, continuity takes a particularly clean form: it is equivalent to boundedness, a condition that can be checked at a single point. This equivalence is one of the cornerstones of functional analysis.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove that a linear operator is continuous if and only if it is bounded, show that continuity at zero implies continuity everywhere, and identify operators that fail to be bounded (like differentiation on \(C^1\) with the sup-norm).</p>
</div>

<h2>Boundedness Equals Continuity</h2>
<p>In finite dimensions, every linear operator is automatically continuous. In infinite dimensions, this fails spectacularly — the differentiation operator showed us that. The correct condition is <strong>boundedness</strong>.</p>

<div class="env-block definition">
    <div class="env-title">Definition (Bounded Operator)</div>
    <div class="env-body"><p>A linear operator \\(T: X \\to Y\\) between normed spaces is <strong>bounded</strong> if there exists \\(C \\geq 0\\) such that</p>
    <p>\\[\\|Tx\\| \\leq C\\|x\\| \\quad \\text{for all } x \\in X.\\]</p>
    <p>The infimum of all such \\(C\\) is the <strong>operator norm</strong> \\(\\|T\\|\\).</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem (Boundedness = Continuity)</div>
    <div class="env-body"><p>Let \\(T: X \\to Y\\) be a linear operator between normed spaces. The following are equivalent:</p>
    <ol>
        <li>\\(T\\) is continuous on \\(X\\).</li>
        <li>\\(T\\) is continuous at \\(0\\).</li>
        <li>\\(T\\) is bounded.</li>
        <li>\\(T\\) maps bounded sets to bounded sets.</li>
        <li>\\(T\\) is Lipschitz continuous with Lipschitz constant \\(\\|T\\|\\).</li>
    </ol></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof Sketch</div>
    <div class="env-body">
    <p><strong>(1) \\(\\Rightarrow\\) (2):</strong> Trivial.</p>
    <p><strong>(2) \\(\\Rightarrow\\) (3):</strong> Suppose \\(T\\) is continuous at \\(0\\) but unbounded. Then for each \\(n\\) there exists \\(x_n\\) with \\(\\|x_n\\| = 1\\) and \\(\\|Tx_n\\| > n\\). Set \\(y_n = x_n / n\\). Then \\(y_n \\to 0\\) but \\(\\|Ty_n\\| = \\|Tx_n\\|/n > 1\\), contradicting continuity at \\(0\\).</p>
    <p><strong>(3) \\(\\Rightarrow\\) (5):</strong> \\(\\|Tx - Ty\\| = \\|T(x-y)\\| \\leq \\|T\\| \\cdot \\|x - y\\|\\).</p>
    <p><strong>(5) \\(\\Rightarrow\\) (1):</strong> Lipschitz implies uniformly continuous.</p>
    <p><strong>(3) \\(\\Leftrightarrow\\) (4):</strong> If \\(T\\) is bounded and \\(S\\) is bounded (say \\(\\|x\\| \\leq M\\) for \\(x \\in S\\)), then \\(\\|Tx\\| \\leq \\|T\\| M\\). Conversely, if \\(T\\) maps the unit ball \\(B_X\\) to a bounded set, then \\(\\sup_{\\|x\\| \\leq 1} \\|Tx\\| < \\infty\\), which is boundedness.</p>
    </div>
</div>

<div class="viz-placeholder" data-viz="viz-continuity-at-zero"></div>

<div class="env-block intuition">
    <div class="env-title">Intuition</div>
    <div class="env-body"><p>A linear map is determined by its behavior on the unit sphere. If the image of the unit sphere is bounded, the map is "well-behaved" — it cannot stretch vectors by an arbitrarily large factor. The key insight is that <strong>linearity converts local information (continuity at 0) to global information (Lipschitz continuity everywhere)</strong>.</p></div>
</div>

<h3>Discontinuous Linear Functionals</h3>

<p>Using the axiom of choice (specifically, a Hamel basis), one can construct <em>discontinuous</em> linear functionals on any infinite-dimensional normed space. These are pathological and non-constructive — you cannot write one down explicitly.</p>

<div class="env-block proposition">
    <div class="env-title">Proposition (Finite-Dimensional Operators Are Bounded)</div>
    <div class="env-body"><p>If \\(\\dim X < \\infty\\), then every linear operator \\(T: X \\to Y\\) is bounded. This follows because all norms on a finite-dimensional space are equivalent, and the unit sphere is compact.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-bounded-vs-unbounded"></div>`,
            visualizations: [
                {
                    id: 'viz-continuity-at-zero',
                    title: 'Continuity at Zero Implies Everywhere',
                    description: 'See how continuity at 0 propagates via linearity. The epsilon-delta ball at 0 translates to every point by linearity.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400, scale: 45});
                        var ctx = viz.ctx;
                        var eps = 0.8;
                        var center = viz.addDraggable('c', 2, 1.5, viz.colors.teal, 7);

                        VizEngine.createSlider(controls, 'epsilon', 0.2, 2.0, eps, 0.1, function(v) { eps = v; });

                        var M = [[1.5, 0.4], [0.3, 1.2]];

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Delta ball at origin
                            var delta = eps / 2;
                            viz.drawCircle(0, 0, delta, viz.colors.blue + '22', viz.colors.blue, 1.5);
                            viz.drawText('delta-ball at 0', 0, -delta - 0.4, viz.colors.blue, 11);

                            // Delta ball translated to center
                            viz.drawCircle(center.x, center.y, delta, viz.colors.teal + '22', viz.colors.teal, 1.5);
                            viz.drawText('delta-ball at x', center.x, center.y - delta - 0.4, viz.colors.teal, 11);

                            // Image of delta ball at origin (ellipse)
                            var N = 80;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var px = delta * Math.cos(th), py = delta * Math.sin(th);
                                var tp = VizEngine.matVec(M, [px, py]);
                                var sc = viz.toScreen(tp[0], tp[1]);
                                if (i === 0) ctx.moveTo(sc[0], sc[1]); else ctx.lineTo(sc[0], sc[1]);
                            }
                            ctx.stroke();

                            // Image of delta ball at center
                            var Tc = VizEngine.matVec(M, [center.x, center.y]);
                            ctx.strokeStyle = viz.colors.purple;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var px = delta * Math.cos(th), py = delta * Math.sin(th);
                                var tp = VizEngine.matVec(M, [px, py]);
                                var sc = viz.toScreen(Tc[0] + tp[0], Tc[1] + tp[1]);
                                if (i === 0) ctx.moveTo(sc[0], sc[1]); else ctx.lineTo(sc[0], sc[1]);
                            }
                            ctx.stroke();

                            viz.drawPoint(0, 0, viz.colors.blue, '0', 4);
                            viz.drawPoint(Tc[0], Tc[1], viz.colors.purple, 'Tx', 4);

                            viz.drawDraggables();

                            viz.screenText('T(delta-ball at 0) = orange ellipse', viz.width / 2, 18, viz.colors.orange, 12);
                            viz.screenText('T(delta-ball at x) = purple ellipse (same shape, translated by Tx)', viz.width / 2, 36, viz.colors.purple, 12);
                        }

                        viz.animate(function() { draw(); });
                    }
                },
                {
                    id: 'viz-bounded-vs-unbounded',
                    title: 'Bounded vs Unbounded Operators',
                    description: 'Compare how a bounded operator (integration) and an unbounded operator (differentiation) act on functions f_n(t) = sin(n*t)/n.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400, scale: 1, originX: 60, originY: 200});
                        var ctx = viz.ctx;
                        var n = 2;
                        var showType = 0;

                        VizEngine.createSlider(controls, 'n', 1, 20, n, 1, function(v) { n = Math.round(v); });
                        VizEngine.createButton(controls, 'Toggle: Derivative / Integral', function() { showType = 1 - showType; });

                        function draw() {
                            viz.clear();

                            var W = viz.width - 120;
                            var H = 160;
                            var midY = viz.height / 2;

                            // axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(60, midY); ctx.lineTo(60 + W, midY); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(60, midY - H); ctx.lineTo(60, midY + H); ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('0', 60, midY + 14);
                            ctx.fillText('1', 60 + W, midY + 14);

                            var steps = 300;

                            // f_n(t) = sin(n*pi*t) / n
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= steps; i++) {
                                var t = i / steps;
                                var y = Math.sin(n * Math.PI * t) / n;
                                var px = 60 + t * W;
                                var py = midY - y * H * 2;
                                if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // derivative or integral
                            if (showType === 0) {
                                // derivative: f'_n(t) = pi*cos(n*pi*t)
                                ctx.strokeStyle = viz.colors.red;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i <= steps; i++) {
                                    var t = i / steps;
                                    var y = Math.PI * Math.cos(n * Math.PI * t);
                                    var py = midY - y * H * 0.15;
                                    var px = 60 + t * W;
                                    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                                }
                                ctx.stroke();
                            } else {
                                // integral: integral of sin(n*pi*s)/n ds from 0 to t = (1 - cos(n*pi*t))/(n^2*pi)
                                ctx.strokeStyle = viz.colors.green;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i <= steps; i++) {
                                    var t = i / steps;
                                    var y = (1 - Math.cos(n * Math.PI * t)) / (n * n * Math.PI);
                                    var py = midY - y * H * 40;
                                    var px = 60 + t * W;
                                    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                                }
                                ctx.stroke();
                            }

                            var fnNorm = (1 / n).toFixed(4);
                            viz.screenText('f_n(t) = sin(' + n + 'pi t)/' + n + '    ||f_n|| = ' + fnNorm, viz.width / 2, 20, viz.colors.blue, 13);
                            if (showType === 0) {
                                var dfNorm = (Math.PI).toFixed(2);
                                viz.screenText("f'_n(t) = pi cos(" + n + "pi t)    ||Df_n|| = " + dfNorm + " (constant!)", viz.width / 2, 40, viz.colors.red, 13);
                                viz.screenText('||Df_n||/||f_n|| = ' + (Math.PI * n).toFixed(1) + ' -> infinity: UNBOUNDED', viz.width / 2, viz.height - 16, viz.colors.red, 13);
                            } else {
                                var intNorm = (2 / (n * n * Math.PI)).toFixed(6);
                                viz.screenText('(Vf_n)(t)    ||Vf_n|| ~ ' + intNorm, viz.width / 2, 40, viz.colors.green, 13);
                                viz.screenText('||Vf_n||/||f_n|| = ' + (2 / (n * Math.PI)).toFixed(4) + ' -> 0: BOUNDED (ratio stays small)', viz.width / 2, viz.height - 16, viz.colors.green, 13);
                            }
                        }

                        viz.animate(function() { draw(); });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch05-ex05',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Let X be an infinite-dimensional normed space. Show that there exists a discontinuous linear functional on X. (You may use the existence of a Hamel basis.)',
                    hint: 'Take a Hamel basis {e_alpha}, normalize them, and define f(e_alpha) = alpha for a countable subset with alpha -> infinity. Extend linearly.',
                    solution: 'Let {e_n}_{n=1}^infty be a countably infinite linearly independent set in X, normalized so ||e_n|| = 1. Extend to a Hamel basis B of X. Define f on B by f(e_n) = n and f(b) = 0 for b in B \\ {e_n}. Extend f linearly to X. Then f(e_n) = n but ||e_n|| = 1, so ||f(e_n)||/||e_n|| = n -> infinity. Thus f is unbounded, hence discontinuous.'
                },
                {
                    id: 'ch05-ex06',
                    type: 'proof',
                    difficulty: 2,
                    question: 'Let T: X -> Y be a bounded linear operator between normed spaces. Prove that ker(T) is a closed subspace of X.',
                    hint: 'Use the sequential characterization of closed sets together with the continuity of T.',
                    solution: 'Let (x_n) be a sequence in ker(T) with x_n -> x. Then Tx_n = 0 for all n. Since T is bounded, it is continuous, so Tx = T(lim x_n) = lim Tx_n = lim 0 = 0. Thus x in ker(T), so ker(T) is closed.'
                },
                {
                    id: 'ch05-ex07',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Let T: X -> Y be linear. Show that T is bounded if and only if T maps Cauchy sequences to Cauchy sequences.',
                    hint: 'Forward: use ||Tx_n - Tx_m|| <= ||T|| ||x_n - x_m||. Backward: if T is unbounded, construct a Cauchy sequence whose image is not Cauchy.',
                    solution: 'Forward: If T is bounded and (x_n) is Cauchy, then ||Tx_n - Tx_m|| = ||T(x_n - x_m)|| <= ||T|| ||x_n - x_m|| -> 0, so (Tx_n) is Cauchy. Backward: Suppose T is unbounded. There exist unit vectors u_n with ||Tu_n|| > n^2. Define x_n = sum_{k=1}^n u_k/k^2. This is Cauchy (tail of convergent series), but ||Tx_n - Tx_{n-1}|| = ||Tu_n||/n^2 > 1, so (Tx_n) is not Cauchy.'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Operator Norm
        // ============================================================
        {
            id: 'ch05-sec03',
            title: 'The Operator Norm',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Measuring Operators.</strong> Now that we know which operators are bounded, we need to measure <em>how bounded</em> they are. The operator norm quantifies the maximum stretching factor of an operator and turns the set of bounded operators into a normed space, bringing our Chapter 1 tools to bear on operators themselves.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define the operator norm, prove equivalent formulations (supremum over the unit ball, unit sphere, and ratios), show that \(\mathcal{B}(X, Y)\) is a Banach space when \(Y\) is Banach, and compute operator norms for concrete examples.</p>
</div>

<h2>The Operator Norm</h2>
<p>The operator norm gives us a way to measure the "size" of a bounded linear operator — how much it can stretch vectors.</p>

<div class="env-block definition">
    <div class="env-title">Definition (Operator Norm)</div>
    <div class="env-body"><p>For a bounded linear operator \\(T: X \\to Y\\), the <strong>operator norm</strong> is</p>
    <p>\\[\\|T\\| = \\sup_{x \\neq 0} \\frac{\\|Tx\\|}{\\|x\\|} = \\sup_{\\|x\\| \\leq 1} \\|Tx\\| = \\sup_{\\|x\\| = 1} \\|Tx\\|.\\]</p>
    <p>All three formulations are equivalent.</p></div>
</div>

<div class="env-block proposition">
    <div class="env-title">Proposition (Norm Properties)</div>
    <div class="env-body"><p>The operator norm satisfies:</p>
    <ol>
        <li>\\(\\|T\\| \\geq 0\\), and \\(\\|T\\| = 0 \\Leftrightarrow T = 0\\).</li>
        <li>\\(\\|\\alpha T\\| = |\\alpha| \\cdot \\|T\\|\\).</li>
        <li>\\(\\|T + S\\| \\leq \\|T\\| + \\|S\\|\\).</li>
        <li>\\(\\|Tx\\| \\leq \\|T\\| \\cdot \\|x\\|\\) for all \\(x\\).</li>
    </ol>
    <p>Thus the space \\(\\mathcal{B}(X, Y)\\) of bounded linear operators is itself a normed space.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-operator-norm-unit-ball"></div>

<h3>Completeness of the Operator Space</h3>

<div class="env-block theorem">
    <div class="env-title">Theorem (B(X,Y) is Banach when Y is Banach)</div>
    <div class="env-body"><p>If \\(X\\) is a normed space and \\(Y\\) is a Banach space, then \\(\\mathcal{B}(X, Y)\\) is a Banach space with the operator norm.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>Let \\((T_n)\\) be a Cauchy sequence in \\(\\mathcal{B}(X, Y)\\). For each \\(x \\in X\\):</p>
    <p>\\[\\|T_n x - T_m x\\| \\leq \\|T_n - T_m\\| \\cdot \\|x\\| \\to 0,\\]</p>
    <p>so \\((T_n x)\\) is Cauchy in \\(Y\\). Since \\(Y\\) is complete, \\(T_n x \\to Tx\\) for some \\(Tx \\in Y\\).</p>
    <p><strong>Linearity of \\(T\\):</strong> \\(T(\\alpha x + y) = \\lim T_n(\\alpha x + y) = \\lim(\\alpha T_n x + T_n y) = \\alpha Tx + Ty\\).</p>
    <p><strong>Boundedness:</strong> Since \\((T_n)\\) is Cauchy, \\(\\sup_n \\|T_n\\| < \\infty\\) (say \\(\\leq M\\)). Then \\(\\|Tx\\| = \\lim \\|T_n x\\| \\leq M \\|x\\|\\).</p>
    <p><strong>Convergence in norm:</strong> Given \\(\\varepsilon > 0\\), choose \\(N\\) so that \\(\\|T_n - T_m\\| < \\varepsilon\\) for \\(n, m \\geq N\\). For any \\(\\|x\\| \\leq 1\\): \\(\\|T_n x - Tx\\| = \\lim_{m \\to \\infty} \\|T_n x - T_m x\\| \\leq \\varepsilon\\). Thus \\(\\|T_n - T\\| \\leq \\varepsilon\\).</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark</div>
    <div class="env-body"><p>The converse is also essentially true: if \\(\\mathcal{B}(X, Y)\\) is complete for every normed space \\(X\\), then \\(Y\\) must be complete. In particular, the dual space \\(X^* = \\mathcal{B}(X, \\mathbb{F})\\) is always a Banach space since \\(\\mathbb{F}\\) is complete.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-cauchy-operators"></div>

<h3>Computing Operator Norms</h3>

<div class="env-block example">
    <div class="env-title">Example: Norm of a Matrix</div>
    <div class="env-body"><p>For \\(A: \\ell^2_n \\to \\ell^2_n\\) (a matrix), \\(\\|A\\| = \\sigma_1(A)\\), the largest singular value. For \\(A: \\ell^1_n \\to \\ell^1_n\\), \\(\\|A\\| = \\max_j \\sum_i |a_{ij}|\\) (maximum column sum). For \\(A: \\ell^\\infty_n \\to \\ell^\\infty_n\\), \\(\\|A\\| = \\max_i \\sum_j |a_{ij}|\\) (maximum row sum).</p></div>
</div>`,
            visualizations: [
                {
                    id: 'viz-operator-norm-unit-ball',
                    title: 'Unit Ball Under an Operator',
                    description: 'Drag the matrix entries to reshape the operator. The operator norm equals the maximum distance from the origin to the boundary of the image of the unit ball.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 440, scale: 50});
                        var ctx = viz.ctx;

                        var a = 1.8, b = 0.5, c = -0.3, d = 1.2;
                        var normType = 0;
                        var normNames = ['l^2 (circle)', 'l^1 (diamond)', 'l^inf (square)'];

                        VizEngine.createSlider(controls, 'a', -3, 3, a, 0.1, function(v) { a = v; });
                        VizEngine.createSlider(controls, 'b', -3, 3, b, 0.1, function(v) { b = v; });
                        VizEngine.createSlider(controls, 'c', -3, 3, c, 0.1, function(v) { c = v; });
                        VizEngine.createSlider(controls, 'd', -3, 3, d, 0.1, function(v) { d = v; });
                        VizEngine.createButton(controls, 'Cycle Norm', function() { normType = (normType + 1) % 3; });

                        function unitBallPoint(th, type) {
                            if (type === 0) return [Math.cos(th), Math.sin(th)];
                            if (type === 1) {
                                var x = Math.cos(th), y = Math.sin(th);
                                var s = Math.abs(x) + Math.abs(y);
                                return s > 0.001 ? [x / s, y / s] : [0, 0];
                            }
                            var x = Math.cos(th), y = Math.sin(th);
                            var s = Math.max(Math.abs(x), Math.abs(y));
                            return s > 0.001 ? [x / s, y / s] : [0, 0];
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var M = [[a, b], [c, d]];
                            var N = 200;
                            var maxDist = 0;
                            var maxPt = [0, 0];

                            // Draw unit ball
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var p = unitBallPoint(th, normType);
                                var sc = viz.toScreen(p[0], p[1]);
                                if (i === 0) ctx.moveTo(sc[0], sc[1]); else ctx.lineTo(sc[0], sc[1]);
                            }
                            ctx.closePath();
                            ctx.stroke();

                            // Draw image of unit ball
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.fillStyle = viz.colors.orange + '18';
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var p = unitBallPoint(th, normType);
                                var tp = VizEngine.matVec(M, p);
                                var dist = Math.sqrt(tp[0] * tp[0] + tp[1] * tp[1]);
                                if (dist > maxDist) { maxDist = dist; maxPt = tp; }
                                var sc = viz.toScreen(tp[0], tp[1]);
                                if (i === 0) ctx.moveTo(sc[0], sc[1]); else ctx.lineTo(sc[0], sc[1]);
                            }
                            ctx.closePath();
                            ctx.fill();
                            ctx.stroke();

                            // Draw max stretch vector
                            viz.drawVector(0, 0, maxPt[0], maxPt[1], viz.colors.red, '||T||', 2.5);
                            viz.drawCircle(0, 0, maxDist, null, viz.colors.red + '44', 1);

                            viz.screenText('Unit ball: ' + normNames[normType], 130, 18, viz.colors.blue, 13, 'center');
                            viz.screenText('Image T(B_X) in orange', 130, 36, viz.colors.orange, 13, 'center');
                            viz.screenText('||T|| ~ ' + maxDist.toFixed(3), viz.width / 2, viz.height - 16, viz.colors.red, 15);

                            var detVal = a * d - b * c;
                            viz.screenText('det(T) = ' + detVal.toFixed(2), viz.width - 100, 18, viz.colors.text, 12);
                        }

                        viz.animate(function() { draw(); });
                    }
                },
                {
                    id: 'viz-cauchy-operators',
                    title: 'Cauchy Sequence of Operators Converging',
                    description: 'Watch a sequence of operators T_n converge to a limit operator T in the operator norm. The images of the unit circle converge.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400, scale: 50});
                        var ctx = viz.ctx;
                        var nShow = 3;
                        var t = 0;

                        VizEngine.createSlider(controls, 'Terms n', 1, 15, nShow, 1, function(v) { nShow = Math.round(v); });

                        function Tn(n) {
                            return [[1 + 1/n, 0.5 * Math.pow(-1, n) / n], [0.3 / n, 1 - 1/(n+1)]];
                        }
                        var Tlimit = [[1, 0], [0, 1]];

                        function draw() {
                            t += 0.01;
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var N = 120;

                            // Draw limit operator image
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var p = [Math.cos(th), Math.sin(th)];
                                var tp = VizEngine.matVec(Tlimit, p);
                                var sc = viz.toScreen(tp[0], tp[1]);
                                if (i === 0) ctx.moveTo(sc[0], sc[1]); else ctx.lineTo(sc[0], sc[1]);
                            }
                            ctx.stroke();

                            // Draw T_n images
                            var colorList = [viz.colors.red, viz.colors.orange, viz.colors.yellow, viz.colors.green, viz.colors.teal, viz.colors.blue, viz.colors.purple, viz.colors.pink];
                            for (var k = 1; k <= nShow; k++) {
                                var M = Tn(k);
                                var col = colorList[(k - 1) % colorList.length];
                                ctx.strokeStyle = col + (k === nShow ? 'cc' : '55');
                                ctx.lineWidth = k === nShow ? 2 : 1;
                                ctx.beginPath();
                                for (var i = 0; i <= N; i++) {
                                    var th = 2 * Math.PI * i / N;
                                    var p = [Math.cos(th), Math.sin(th)];
                                    var tp = VizEngine.matVec(M, p);
                                    var sc = viz.toScreen(tp[0], tp[1]);
                                    if (i === 0) ctx.moveTo(sc[0], sc[1]); else ctx.lineTo(sc[0], sc[1]);
                                }
                                ctx.stroke();
                            }

                            // Compute ||T_n - T||
                            var Mn = Tn(nShow);
                            var opNorm = 0;
                            for (var i = 0; i < N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var p = [Math.cos(th), Math.sin(th)];
                                var diff = [VizEngine.matVec(Mn, p)[0] - VizEngine.matVec(Tlimit, p)[0],
                                            VizEngine.matVec(Mn, p)[1] - VizEngine.matVec(Tlimit, p)[1]];
                                var dd = Math.sqrt(diff[0] * diff[0] + diff[1] * diff[1]);
                                if (dd > opNorm) opNorm = dd;
                            }

                            viz.screenText('White = limit T = I (identity)', viz.width / 2, 18, viz.colors.white, 13);
                            viz.screenText('Colored = T_n (converging to T)', viz.width / 2, 36, viz.colors.teal, 12);
                            viz.screenText('||T_' + nShow + ' - T|| ~ ' + opNorm.toFixed(4), viz.width / 2, viz.height - 16, viz.colors.yellow, 14);
                        }

                        viz.animate(function() { draw(); });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch05-ex08',
                    type: 'computation',
                    difficulty: 2,
                    question: 'Compute the operator norm of T: l^2 -> l^2 defined by T(x_1, x_2, x_3, ...) = (x_1, x_2/2, x_3/3, ...).',
                    hint: 'Find sup ||Tx|| over ||x|| = 1. Each component is scaled by 1/n, so the largest scaling is at n = 1.',
                    solution: '||Tx||^2 = sum |x_n/n|^2 = sum |x_n|^2/n^2 <= sum |x_n|^2 = ||x||^2. So ||T|| <= 1. Equality holds at x = e_1: ||Te_1|| = ||e_1|| = 1. Thus ||T|| = 1.'
                },
                {
                    id: 'ch05-ex09',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Let T: X -> Y be bounded and S: Y -> Z be bounded. Prove ||ST|| <= ||S|| ||T|| (submultiplicativity).',
                    hint: 'Use the definition ||STx|| <= ||S|| ||Tx|| <= ||S|| ||T|| ||x||.',
                    solution: 'For any x in X: ||STx|| = ||S(Tx)|| <= ||S|| ||Tx|| <= ||S|| ||T|| ||x||. Taking supremum over ||x|| <= 1: ||ST|| = sup ||STx|| <= ||S|| ||T||.'
                },
                {
                    id: 'ch05-ex10',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Show that B(X, Y) is NOT complete when Y is not complete, by constructing a Cauchy sequence of operators with no limit in B(X, Y).',
                    hint: 'Let Y be a non-complete normed space with a Cauchy sequence (y_n) that does not converge. Let f be a bounded linear functional on X with ||f|| = 1. Consider T_n(x) = f(x) y_n.',
                    solution: 'Let (y_n) be Cauchy in Y with no limit in Y. Fix f in X* with ||f|| = 1. Define T_n: X -> Y by T_n(x) = f(x)y_n. Then T_n is bounded with ||T_n|| = ||y_n||. Also ||T_n - T_m|| = sup_{||x||<=1} ||f(x)(y_n - y_m)|| = ||y_n - y_m||. Since (y_n) is Cauchy, (T_n) is Cauchy. If T_n -> T in B(X,Y), then for x_0 with f(x_0) = 1: T_n(x_0) = y_n -> T(x_0) in Y, contradicting that (y_n) has no limit in Y.'
                },
                {
                    id: 'ch05-ex11',
                    type: 'computation',
                    difficulty: 2,
                    question: 'Let A be the 2x2 matrix [[3, 1], [0, 2]]. Compute ||A|| as an operator on l^1_2, l^2_2, and l^inf_2.',
                    hint: 'For l^1: max column sum. For l^inf: max row sum. For l^2: largest singular value.',
                    solution: 'l^1 norm: max(|3|+|0|, |1|+|2|) = max(3, 3) = 3. l^inf norm: max(|3|+|1|, |0|+|2|) = max(4, 2) = 4. l^2 norm: singular values of A. A^T A = [[9,3],[3,5]], eigenvalues (14 +/- sqrt(196-144))/2 = (14 +/- sqrt(36))/2 = {10, 4}/2... Actually: tr = 14, det = 45-9 = 36. lambda = (14 +/- sqrt(196-144))/2 = (14 +/- sqrt(52))/2. So ||A||_2 = sqrt((14+sqrt(52))/2) = sqrt((14+2sqrt(13))/2) ~ sqrt(10.606) ~ 3.257.'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Composition and Invertibility
        // ============================================================
        {
            id: 'ch05-sec04',
            title: 'Composition and Invertibility',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Algebraic Structure of Operators.</strong> Bounded linear operators can be composed (like matrix multiplication) and, when bijective and bounded, inverted. The space \(\mathcal{B}(X)\) of bounded operators on a Banach space forms a Banach algebra, a structure we will explore deeply in Chapter 17. For now, we focus on the basics of composition and invertibility.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove submultiplicativity of the operator norm (\(\|TS\| \leq \|T\|\|S\|\)), study invertibility, and introduce the Neumann series, which inverts operators close to the identity. This is the operator analog of the geometric series \(\frac{1}{1-x} = \sum x^n\).</p>
</div>

<h2>Composition and Invertibility</h2>
<p>When \\(X = Y\\), the space \\(\\mathcal{B}(X) = \\mathcal{B}(X, X)\\) becomes a <strong>Banach algebra</strong>: a Banach space that is also an algebra with submultiplicative norm \\(\\|ST\\| \\leq \\|S\\| \\cdot \\|T\\|\\).</p>

<div class="env-block definition">
    <div class="env-title">Definition (Invertible Operator)</div>
    <div class="env-body"><p>An operator \\(T \\in \\mathcal{B}(X)\\) is <strong>invertible</strong> if there exists \\(S \\in \\mathcal{B}(X)\\) with \\(ST = TS = I\\). We write \\(S = T^{-1}\\). The set of invertible operators is denoted \\(\\mathrm{GL}(X)\\).</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem (Neumann Series)</div>
    <div class="env-body"><p>Let \\(X\\) be a Banach space and \\(T \\in \\mathcal{B}(X)\\) with \\(\\|T\\| < 1\\). Then \\(I - T\\) is invertible and</p>
    <p>\\[(I - T)^{-1} = \\sum_{n=0}^{\\infty} T^n = I + T + T^2 + T^3 + \\cdots\\]</p>
    <p>Moreover, \\(\\|(I-T)^{-1}\\| \\leq \\frac{1}{1 - \\|T\\|}\\).</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>Since \\(\\|T^n\\| \\leq \\|T\\|^n\\) and \\(\\|T\\| < 1\\), the series \\(\\sum \\|T^n\\| \\leq \\sum \\|T\\|^n = 1/(1-\\|T\\|) < \\infty\\). Since \\(\\mathcal{B}(X)\\) is a Banach space (as \\(X\\) is Banach), the series converges absolutely to some \\(S \\in \\mathcal{B}(X)\\).</p>
    <p>Let \\(S_N = \\sum_{n=0}^N T^n\\). Then \\((I - T)S_N = I - T^{N+1}\\) (telescoping). As \\(N \\to \\infty\\), \\(T^{N+1} \\to 0\\) in norm, so \\((I-T)S = I\\). Similarly \\(S(I-T) = I\\).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-neumann-series"></div>

<h3>Invertibility Is Open</h3>

<div class="env-block corollary">
    <div class="env-title">Corollary (GL(X) is open)</div>
    <div class="env-body"><p>The set \\(\\mathrm{GL}(X)\\) of invertible operators is <strong>open</strong> in \\(\\mathcal{B}(X)\\), and the map \\(T \\mapsto T^{-1}\\) is continuous.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof Sketch</div>
    <div class="env-body"><p>If \\(T_0\\) is invertible and \\(\\|T - T_0\\| < 1/\\|T_0^{-1}\\|\\), then \\(T = T_0(I - T_0^{-1}(T_0 - T))\\) and \\(\\|T_0^{-1}(T_0 - T)\\| \\leq \\|T_0^{-1}\\| \\cdot \\|T_0 - T\\| < 1\\), so the Neumann series applies and \\(T\\) is invertible.</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Key Insight</div>
    <div class="env-body"><p>The Neumann series is the operator-valued generalization of the geometric series \\(\\frac{1}{1-z} = \\sum z^n\\) for \\(|z| < 1\\). It is one of the most versatile tools in functional analysis, appearing in perturbation theory, spectral theory, and the theory of Banach algebras.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-gl-open-set"></div>

<h3>Powers and Spectral Radius Preview</h3>
<p>For \\(T \\in \\mathcal{B}(X)\\), the sequence \\(\\|T^n\\|^{1/n}\\) converges to the <strong>spectral radius</strong> \\(r(T)\\). The Neumann series converges when \\(r(T) < 1\\), which is weaker than \\(\\|T\\| < 1\\). We will study this in detail in the spectral theory chapters.</p>`,
            visualizations: [
                {
                    id: 'viz-neumann-series',
                    title: 'Neumann Series Convergence',
                    description: 'Watch the partial sums S_N = I + T + T^2 + ... + T^N converge to (I-T)^{-1}. Adjust ||T|| to see convergence speed.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 440, scale: 40});
                        var ctx = viz.ctx;
                        var angle = 0.3;
                        var rVal = 0.6;
                        var nTerms = 1;
                        var autoAnimate = true;
                        var time = 0;

                        VizEngine.createSlider(controls, '||T||', 0.05, 0.95, rVal, 0.05, function(v) { rVal = v; });
                        VizEngine.createSlider(controls, 'N (terms)', 0, 20, nTerms, 1, function(v) { nTerms = Math.round(v); });
                        VizEngine.createSlider(controls, 'angle', 0, 6.28, angle, 0.1, function(v) { angle = v; });

                        function matPow(M, n) {
                            var result = [[1, 0], [0, 1]];
                            for (var i = 0; i < n; i++) result = VizEngine.matMul(result, M);
                            return result;
                        }

                        function matAdd(A, B) {
                            return [[A[0][0]+B[0][0], A[0][1]+B[0][1]], [A[1][0]+B[1][0], A[1][1]+B[1][1]]];
                        }

                        function draw() {
                            time += 0.01;
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var T = [[rVal * Math.cos(angle), -rVal * Math.sin(angle)],
                                     [rVal * Math.sin(angle),  rVal * Math.cos(angle)]];

                            // Compute partial sum S_N = sum_{k=0}^{N} T^k
                            var SN = [[0, 0], [0, 0]];
                            for (var k = 0; k <= nTerms; k++) {
                                var Tk = matPow(T, k);
                                SN = matAdd(SN, Tk);
                            }

                            // Exact inverse (I-T)^{-1}
                            var det = (1 - T[0][0]) * (1 - T[1][1]) - T[0][1] * T[1][0];
                            var exact = [[0,0],[0,0]];
                            if (Math.abs(det) > 1e-10) {
                                exact = [[(1 - T[1][1]) / det, T[0][1] / det],
                                         [T[1][0] / det, (1 - T[0][0]) / det]];
                            }

                            var N = 100;

                            // Draw unit circle
                            ctx.strokeStyle = viz.colors.blue + '44';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var sc = viz.toScreen(Math.cos(th), Math.sin(th));
                                if (i === 0) ctx.moveTo(sc[0], sc[1]); else ctx.lineTo(sc[0], sc[1]);
                            }
                            ctx.stroke();

                            // Image under exact inverse
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var p = [Math.cos(th), Math.sin(th)];
                                var tp = VizEngine.matVec(exact, p);
                                var sc = viz.toScreen(tp[0], tp[1]);
                                if (i === 0) ctx.moveTo(sc[0], sc[1]); else ctx.lineTo(sc[0], sc[1]);
                            }
                            ctx.stroke();

                            // Image under partial sum
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var p = [Math.cos(th), Math.sin(th)];
                                var tp = VizEngine.matVec(SN, p);
                                var sc = viz.toScreen(tp[0], tp[1]);
                                if (i === 0) ctx.moveTo(sc[0], sc[1]); else ctx.lineTo(sc[0], sc[1]);
                            }
                            ctx.stroke();

                            // Error
                            var errNorm = 0;
                            for (var i = 0; i < N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var p = [Math.cos(th), Math.sin(th)];
                                var tp1 = VizEngine.matVec(exact, p);
                                var tp2 = VizEngine.matVec(SN, p);
                                var dd = Math.sqrt((tp1[0]-tp2[0])*(tp1[0]-tp2[0]) + (tp1[1]-tp2[1])*(tp1[1]-tp2[1]));
                                if (dd > errNorm) errNorm = dd;
                            }

                            viz.screenText('White = exact (I-T)^{-1}', 140, 18, viz.colors.white, 13, 'center');
                            viz.screenText('Orange = partial sum S_' + nTerms, 140, 36, viz.colors.orange, 13, 'center');
                            viz.screenText('||T|| = ' + rVal.toFixed(2) + '    ||S_N - (I-T)^{-1}|| ~ ' + errNorm.toFixed(6), viz.width / 2, viz.height - 16, viz.colors.teal, 13);
                            viz.screenText('Geometric bound: ||T||^{' + (nTerms + 1) + '} / (1-||T||) = ' + (Math.pow(rVal, nTerms + 1) / (1 - rVal)).toFixed(6), viz.width / 2, viz.height - 36, viz.colors.text, 12);
                        }

                        viz.animate(function() { draw(); });
                    }
                },
                {
                    id: 'viz-gl-open-set',
                    title: 'GL(X) Is Open: Perturbation of Invertible Operators',
                    description: 'See how a small perturbation of an invertible operator remains invertible. The safe radius is 1/||T^{-1}||.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400, scale: 1, originX: 350, originY: 200});
                        var ctx = viz.ctx;

                        var baseAngle = 0.5;
                        var perturbX = 0;
                        var perturbY = 0;

                        var pt = viz.addDraggable('perturb', 0, 0, viz.colors.orange, 8);

                        VizEngine.createSlider(controls, 'Base operator angle', 0, 6.28, baseAngle, 0.1, function(v) { baseAngle = v; });

                        function draw() {
                            viz.clear();

                            // Abstract operator space visualization
                            var cx = viz.width / 2, cy = viz.height / 2;

                            // Draw "space of operators" as background
                            ctx.fillStyle = '#111133';
                            ctx.fillRect(0, 0, viz.width, viz.height);

                            // GL(X) region - show as a "nice" region
                            ctx.fillStyle = viz.colors.green + '15';
                            ctx.strokeStyle = viz.colors.green + '44';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.arc(cx, cy, 160, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.stroke();

                            // Non-invertible boundary
                            ctx.strokeStyle = viz.colors.red + '66';
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            ctx.arc(cx, cy, 160, 0, Math.PI * 2);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Base operator T0
                            var baseX = cx + 50 * Math.cos(baseAngle);
                            var baseY = cy + 50 * Math.sin(baseAngle);

                            // Safe radius (proportional to distance from boundary)
                            var distToBdry = 160 - Math.sqrt((baseX - cx) * (baseX - cx) + (baseY - cy) * (baseY - cy));
                            var safeR = Math.max(distToBdry * 0.5, 10);

                            // Safe ball
                            ctx.fillStyle = viz.colors.teal + '22';
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.arc(baseX, baseY, safeR, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.stroke();

                            // Perturbation point
                            var px = baseX + pt.x * 80;
                            var py = baseY - pt.y * 80;
                            var pertDist = Math.sqrt((px - baseX) * (px - baseX) + (py - baseY) * (py - baseY));
                            var isInSafe = pertDist < safeR;
                            var isInGL = Math.sqrt((px - cx) * (px - cx) + (py - cy) * (py - cy)) < 160;

                            // Draw perturbation
                            ctx.fillStyle = isInSafe ? viz.colors.green : (isInGL ? viz.colors.yellow : viz.colors.red);
                            ctx.beginPath();
                            ctx.arc(px, py, 6, 0, Math.PI * 2);
                            ctx.fill();

                            // Base point
                            ctx.fillStyle = viz.colors.blue;
                            ctx.beginPath();
                            ctx.arc(baseX, baseY, 7, 0, Math.PI * 2);
                            ctx.fill();

                            // Connection line
                            ctx.strokeStyle = viz.colors.white + '44';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(baseX, baseY);
                            ctx.lineTo(px, py);
                            ctx.stroke();

                            // Labels
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('T_0 (invertible)', baseX, baseY - 14);

                            ctx.fillStyle = viz.colors.green;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('GL(X)', cx, cy - 170);

                            ctx.fillStyle = viz.colors.red + 'aa';
                            ctx.fillText('Singular operators', cx, cy + 180);

                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText('Safe ball: r = 1/||T_0^{-1}||', baseX, baseY + safeR + 16);

                            var status = isInSafe ? 'In safe ball: guaranteed invertible' : (isInGL ? 'In GL(X) but outside safe ball' : 'SINGULAR: not invertible!');
                            var statusCol = isInSafe ? viz.colors.green : (isInGL ? viz.colors.yellow : viz.colors.red);
                            viz.screenText(status, viz.width / 2, viz.height - 16, statusCol, 14);

                            viz.drawDraggables();
                        }

                        viz.animate(function() { draw(); });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch05-ex12',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Using the Neumann series, prove that if T is invertible and ||S - T|| < 1/||T^{-1}||, then S is invertible and ||S^{-1}|| <= ||T^{-1}|| / (1 - ||T^{-1}|| ||S - T||).',
                    hint: 'Write S = T(I - T^{-1}(T - S)) and apply the Neumann series to I - T^{-1}(T - S).',
                    solution: 'Write S = T - (T - S) = T(I - T^{-1}(T - S)). Let A = T^{-1}(T - S). Then ||A|| <= ||T^{-1}|| ||T - S|| < 1. By Neumann series, I - A is invertible, so S = T(I - A) is invertible with S^{-1} = (I - A)^{-1} T^{-1}. Then ||S^{-1}|| <= ||(I-A)^{-1}|| ||T^{-1}|| <= ||T^{-1}|| / (1 - ||A||) <= ||T^{-1}|| / (1 - ||T^{-1}|| ||S - T||).'
                },
                {
                    id: 'ch05-ex13',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Show that the map Inv: GL(X) -> GL(X) defined by Inv(T) = T^{-1} is continuous.',
                    hint: 'Use the identity T^{-1} - S^{-1} = T^{-1}(S - T)S^{-1} and the bound on ||S^{-1}|| from the Neumann series.',
                    solution: 'For S near T with ||S - T|| < 1/(2||T^{-1}||), we have ||S^{-1}|| <= 2||T^{-1}||. Then ||T^{-1} - S^{-1}|| = ||T^{-1}(S-T)S^{-1}|| <= ||T^{-1}|| ||S-T|| ||S^{-1}|| <= 2||T^{-1}||^2 ||S - T|| -> 0 as S -> T. So Inv is continuous.'
                },
                {
                    id: 'ch05-ex14',
                    type: 'computation',
                    difficulty: 2,
                    question: 'Let T: l^2 -> l^2 be defined by T(x_1, x_2, ...) = (x_1/2, x_2/3, x_3/4, ...). Show ||T|| < 1 and find the first 3 terms of (I - T)^{-1} e_1.',
                    hint: '||T|| = sup_n 1/(n+1) = 1/2. The Neumann series gives (I-T)^{-1} = I + T + T^2 + ...',
                    solution: '||T|| = sup_n 1/(n+1) = 1/2 < 1. (I-T)^{-1} e_1 = e_1 + Te_1 + T^2 e_1 + ... Now Te_1 = (1/2)e_1, T^2 e_1 = (1/4)e_1, T^n e_1 = (1/2^n)e_1. So (I-T)^{-1} e_1 = sum_{n=0}^inf (1/2^n) e_1 = 2e_1 = (2, 0, 0, ...). First 3 partial sums: S_0 e_1 = e_1 = (1,...), S_1 e_1 = (3/2,...), S_2 e_1 = (7/4,...).'
                },
                {
                    id: 'ch05-ex15',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Let X be a Banach space and T in B(X) with ||T^n|| < 1 for some n. Show that I - T is invertible. (Hint: this does NOT require ||T|| < 1.)',
                    hint: 'Factor I - T^n = (I - T)(I + T + ... + T^{n-1}) and use the Neumann series for I - T^n.',
                    solution: 'Since ||T^n|| < 1, the Neumann series gives (I - T^n)^{-1} = sum_{k=0}^inf T^{nk}. Now I - T^n = (I - T)(I + T + T^2 + ... + T^{n-1}). So I - T^n is invertible and equals (I - T) times S where S = sum_{j=0}^{n-1} T^j. Thus (I - T) is left-invertible with left inverse S(I - T^n)^{-1}. Similarly I - T^n = (I + T + ... + T^{n-1})(I - T), giving right inverse (I - T^n)^{-1} S. Since left = right inverse, (I - T)^{-1} = S (I - T^n)^{-1}.'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Finite Rank Operators
        // ============================================================
        {
            id: 'ch05-sec05',
            title: 'Finite Rank Operators',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Bridging Finite and Infinite Dimensions.</strong> Finite-rank operators are the simplest infinite-dimensional operators: their range is finite-dimensional, so they behave like matrices. They serve as building blocks for compact operators, which we will study systematically in Chapter 14.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define finite-rank operators, express them as sums of rank-one operators \(y \otimes f\), and prove they are compact. We also show that compact operators are norm-limits of finite-rank operators (in Hilbert spaces), previewing the theory to come.</p>
</div>

<div class="bridge-block chapter-closing">
<p><strong>Looking Ahead.</strong> We now have a rich theory of bounded operators. But many deep questions remain: Can a bounded functional always be extended to a larger space? Is a pointwise-bounded family of operators uniformly bounded? When is a bijective bounded operator automatically an isomorphism? These are answered by the "big theorems" of Chapters 6-9, starting with the Hahn-Banach Theorem.</p>
</div>

<h2>Finite Rank Operators</h2>
<p>Between the trivial zero operator and general bounded operators lies a particularly tractable class: operators whose range is finite-dimensional.</p>

<div class="env-block definition">
    <div class="env-title">Definition (Finite Rank Operator)</div>
    <div class="env-body"><p>A bounded linear operator \\(T: X \\to Y\\) is <strong>finite rank</strong> if \\(\\dim \\operatorname{ran}(T) < \\infty\\). The <strong>rank</strong> of \\(T\\) is \\(\\dim \\operatorname{ran}(T)\\). We denote the space of finite rank operators by \\(\\mathcal{F}(X, Y)\\).</p></div>
</div>

<div class="env-block proposition">
    <div class="env-title">Proposition (Structure of Finite Rank Operators)</div>
    <div class="env-body"><p>Every finite rank operator \\(T: X \\to Y\\) of rank \\(n\\) can be written as</p>
    <p>\\[Tx = \\sum_{k=1}^n f_k(x) \\, y_k\\]</p>
    <p>where \\(f_1, \\ldots, f_n \\in X^*\\) are bounded linear functionals and \\(y_1, \\ldots, y_n \\in Y\\) are linearly independent. In other words, \\(T = \\sum_{k=1}^n y_k \\otimes f_k\\).</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>Let \\(\\{y_1, \\ldots, y_n\\}\\) be a basis for \\(\\operatorname{ran}(T)\\). For each \\(x \\in X\\), write \\(Tx = \\sum_{k=1}^n \\alpha_k(x) y_k\\). The coefficient functions \\(\\alpha_k: X \\to \\mathbb{F}\\) are linear (since \\(T\\) is linear and the \\(y_k\\) are linearly independent). Each \\(\\alpha_k\\) is bounded since the projection onto coordinates in a finite-dimensional space is continuous. Set \\(f_k = \\alpha_k\\).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-finite-rank-decomposition"></div>

<h3>Finite Rank Operators and Compact Operators</h3>

<div class="env-block definition">
    <div class="env-title">Definition (Compact Operator)</div>
    <div class="env-body"><p>A bounded operator \\(T: X \\to Y\\) is <strong>compact</strong> if the image \\(T(B_X)\\) of the closed unit ball has compact closure in \\(Y\\). Equivalently, every bounded sequence \\((x_n)\\) has a subsequence such that \\((Tx_{n_k})\\) converges.</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem (Finite Rank Operators Are Compact)</div>
    <div class="env-body"><p>Every finite rank operator is compact.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>If \\(T\\) has rank \\(n\\), then \\(T(B_X)\\) is a bounded subset of the \\(n\\)-dimensional space \\(\\operatorname{ran}(T)\\). By the Heine-Borel theorem, its closure is compact.</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem (Density of Finite Rank Operators)</div>
    <div class="env-body"><p>If \\(Y\\) is a Banach space with the <strong>approximation property</strong> (which includes all Hilbert spaces, \\(L^p\\) spaces, \\(C(K)\\) spaces), then every compact operator \\(T: X \\to Y\\) is the norm-limit of finite rank operators:</p>
    <p>\\[\\mathcal{K}(X, Y) = \\overline{\\mathcal{F}(X, Y)}.\\]</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark</div>
    <div class="env-body"><p>Enflo (1973) showed that not every Banach space has the approximation property, constructing a remarkable counterexample. However, for the vast majority of spaces encountered in practice, the approximation property holds.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-finite-rank-approximation"></div>

<h3>The Ideal Structure</h3>

<div class="env-block proposition">
    <div class="env-title">Proposition (Operator Ideals)</div>
    <div class="env-body"><p>Both \\(\\mathcal{F}(X)\\) and \\(\\mathcal{K}(X)\\) are two-sided ideals in \\(\\mathcal{B}(X)\\): if \\(T \\in \\mathcal{F}(X)\\) (resp. \\(\\mathcal{K}(X)\\)) and \\(S \\in \\mathcal{B}(X)\\), then \\(ST, TS \\in \\mathcal{F}(X)\\) (resp. \\(\\mathcal{K}(X)\\)).</p></div>
</div>

<p>This ideal structure is crucial: the quotient algebra \\(\\mathcal{B}(X)/\\mathcal{K}(X)\\) (the <strong>Calkin algebra</strong>) captures essential properties of operators modulo compact perturbations, and will be key in Fredholm theory (Chapter 15).</p>`,
            visualizations: [
                {
                    id: 'viz-finite-rank-decomposition',
                    title: 'Rank-1 Operator: T = y tensor f',
                    description: 'A rank-1 operator projects onto f then scales by y. Drag the input vector to see Tx = f(x) * y.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 50});
                        var ctx = viz.ctx;

                        var fDir = viz.addDraggable('f', 2, 0.5, viz.colors.teal, 7);
                        var yDir = viz.addDraggable('y', 0.5, 2.5, viz.colors.purple, 7);
                        var input = viz.addDraggable('x', 1.5, 1.8, viz.colors.blue, 7);

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var fx = fDir.x, fy = fDir.y;
                            var fLen = Math.sqrt(fx * fx + fy * fy);
                            if (fLen < 0.01) { fx = 1; fy = 0; fLen = 1; }

                            // f as a direction (the functional f(x) = <x, fDir/||fDir||> * ||fDir||)
                            var fVal = (input.x * fx + input.y * fy);

                            // Tx = f(x) * y
                            var tx = fVal * yDir.x;
                            var ty = fVal * yDir.y;

                            // Draw f direction line
                            viz.drawLine(0, 0, fx, fy, viz.colors.teal + '44', 1, true);

                            // Draw projection of x onto f
                            var projScale = fVal / (fx * fx + fy * fy);
                            var projX = projScale * fx, projY = projScale * fy;

                            // Dashed line from x to projection
                            ctx.strokeStyle = viz.colors.text + '44';
                            ctx.lineWidth = 1;
                            ctx.setLineDash([3, 3]);
                            var s1 = viz.toScreen(input.x, input.y);
                            var s2 = viz.toScreen(projX, projY);
                            ctx.beginPath(); ctx.moveTo(s1[0], s1[1]); ctx.lineTo(s2[0], s2[1]); ctx.stroke();
                            ctx.setLineDash([]);

                            // Draw vectors
                            viz.drawVector(0, 0, fx, fy, viz.colors.teal, 'f');
                            viz.drawVector(0, 0, yDir.x, yDir.y, viz.colors.purple, 'y');
                            viz.drawVector(0, 0, input.x, input.y, viz.colors.blue, 'x');
                            viz.drawVector(0, 0, tx, ty, viz.colors.orange, 'Tx', 2.5);

                            // Range line (span of y)
                            viz.drawLine(0, 0, yDir.x, yDir.y, viz.colors.purple + '33', 1, true);

                            viz.drawDraggables();

                            viz.screenText('Rank-1: Tx = f(x) y', viz.width / 2, 18, viz.colors.white, 15);
                            viz.screenText('f(x) = ' + fVal.toFixed(2) + '    Range = span{y}    Kernel = ker(f)', viz.width / 2, viz.height - 16, viz.colors.text, 12);
                        }

                        viz.animate(function() { draw(); });
                    }
                },
                {
                    id: 'viz-finite-rank-approximation',
                    title: 'Approximating a Compact Operator by Finite Rank',
                    description: 'A compact diagonal operator T with eigenvalues 1/n is approximated by truncations T_N (rank-N operators). Watch the error shrink.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400, scale: 1, originX: 60, originY: 30});
                        var ctx = viz.ctx;
                        var rankN = 3;
                        var numBars = 20;

                        VizEngine.createSlider(controls, 'Rank N', 1, 20, rankN, 1, function(v) { rankN = Math.round(v); });

                        function draw() {
                            viz.clear();

                            var W = viz.width - 120;
                            var H = viz.height - 80;
                            var baseY = viz.height - 40;
                            var barW = W / (numBars + 1);

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(60, baseY); ctx.lineTo(60 + W, baseY); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(60, baseY); ctx.lineTo(60, 40); ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';

                            for (var n = 1; n <= numBars; n++) {
                                var eigenval = 1 / n;
                                var approxVal = n <= rankN ? eigenval : 0;
                                var error = eigenval - approxVal;
                                var x = 60 + n * barW;

                                // Full eigenvalue bar
                                var fullH = eigenval * H;
                                ctx.fillStyle = viz.colors.blue + '44';
                                ctx.fillRect(x - barW * 0.35, baseY - fullH, barW * 0.35, fullH);
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(x - barW * 0.35, baseY - fullH, barW * 0.35, fullH);

                                // Approximation bar
                                var apH = approxVal * H;
                                ctx.fillStyle = viz.colors.orange + '88';
                                ctx.fillRect(x, baseY - apH, barW * 0.35, apH);
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.strokeRect(x, baseY - apH, barW * 0.35, apH);

                                // Label
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText(n, x, baseY + 14);
                            }

                            // Error computation: ||T - T_N|| = sup_{n > N} 1/n = 1/(N+1)
                            var opError = 1 / (rankN + 1);

                            // Y-axis labels
                            ctx.textAlign = 'right';
                            for (var v = 0; v <= 1; v += 0.25) {
                                var yy = baseY - v * H;
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText(v.toFixed(2), 55, yy + 4);
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.beginPath(); ctx.moveTo(60, yy); ctx.lineTo(60 + W, yy); ctx.stroke();
                            }

                            // Legend and info
                            viz.screenText('Blue = T eigenvalues (1/n)', 200, 20, viz.colors.blue, 13, 'center');
                            viz.screenText('Orange = T_' + rankN + ' (rank-' + rankN + ' truncation)', 500, 20, viz.colors.orange, 13, 'center');
                            viz.screenText('||T - T_' + rankN + '|| = 1/' + (rankN + 1) + ' = ' + opError.toFixed(4) + ' -> 0 as N -> infinity', viz.width / 2, viz.height - 10, viz.colors.teal, 14);

                            // Error bar
                            var errBarW = 8;
                            ctx.fillStyle = viz.colors.red + '88';
                            var errH = opError * H;
                            ctx.fillRect(viz.width - 40, baseY - errH, errBarW, errH);
                            ctx.strokeStyle = viz.colors.red;
                            ctx.strokeRect(viz.width - 40, baseY - errH, errBarW, errH);
                            ctx.fillStyle = viz.colors.red;
                            ctx.textAlign = 'center';
                            ctx.fillText('err', viz.width - 36, baseY + 14);
                        }

                        viz.animate(function() { draw(); });
                    }
                },
                {
                    id: 'viz-compact-unit-ball',
                    title: 'Compact Operator: Image of Unit Ball Has Compact Closure',
                    description: 'Compare the image of the unit ball under a compact operator (finite rank) vs a non-compact operator. Compact: image can be covered by finitely many balls.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400, scale: 40});
                        var ctx = viz.ctx;
                        var showCompact = true;
                        var numPts = 60;
                        var time = 0;

                        VizEngine.createButton(controls, 'Toggle: Compact / Non-compact', function() { showCompact = !showCompact; });

                        // Generate random points on unit circle
                        var pts = [];
                        for (var i = 0; i < numPts; i++) {
                            var th = 2 * Math.PI * i / numPts;
                            pts.push([Math.cos(th), Math.sin(th)]);
                        }

                        function draw() {
                            time += 0.015;
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Draw unit circle
                            viz.drawCircle(0, 0, 1, null, viz.colors.blue + '44', 1);

                            if (showCompact) {
                                // Compact (rank-1): T(x,y) = (x, 0) (projection)
                                var M = [[1.5, 0.3], [0, 0]];
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i <= 120; i++) {
                                    var th = 2 * Math.PI * i / 120;
                                    var p = [Math.cos(th), Math.sin(th)];
                                    var tp = VizEngine.matVec(M, p);
                                    var sc = viz.toScreen(tp[0], tp[1]);
                                    if (i === 0) ctx.moveTo(sc[0], sc[1]); else ctx.lineTo(sc[0], sc[1]);
                                }
                                ctx.stroke();

                                // Sample points
                                for (var i = 0; i < numPts; i++) {
                                    var tp = VizEngine.matVec(M, pts[i]);
                                    viz.drawPoint(tp[0], tp[1], viz.colors.orange, '', 3);
                                }

                                viz.screenText('Compact (rank 1): T(B) collapses to a line segment', viz.width / 2, 18, viz.colors.orange, 13);
                                viz.screenText('Image is bounded & finite-dimensional => compact closure', viz.width / 2, 38, viz.colors.teal, 12);
                            } else {
                                // Identity (non-compact in infinite dim, but we show the concept)
                                ctx.strokeStyle = viz.colors.red;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i <= 120; i++) {
                                    var th = 2 * Math.PI * i / 120;
                                    var sc = viz.toScreen(Math.cos(th), Math.sin(th));
                                    if (i === 0) ctx.moveTo(sc[0], sc[1]); else ctx.lineTo(sc[0], sc[1]);
                                }
                                ctx.stroke();

                                // Points spread around the full circle
                                for (var i = 0; i < numPts; i++) {
                                    viz.drawPoint(pts[i][0], pts[i][1], viz.colors.red, '', 3);
                                }

                                // Show e_n sequence that has no convergent subsequence
                                var nShow = Math.min(8, numPts);
                                for (var k = 0; k < nShow; k++) {
                                    var th = 2 * Math.PI * k / nShow;
                                    var ex = Math.cos(th), ey = Math.sin(th);
                                    viz.drawPoint(ex, ey, viz.colors.yellow, 'e_' + (k+1), 5);
                                }

                                viz.screenText('Non-compact (identity): T(B) = B, not precompact', viz.width / 2, 18, viz.colors.red, 13);
                                viz.screenText('In infinite dim: {e_n} on unit sphere, ||e_i - e_j|| = sqrt(2), no convergent subseq', viz.width / 2, 38, viz.colors.yellow, 11);
                            }
                        }

                        viz.animate(function() { draw(); });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch05-ex16',
                    type: 'proof',
                    difficulty: 2,
                    question: 'Show that if T: X -> Y is finite rank and S: Y -> Z is bounded, then ST is finite rank with rank(ST) <= rank(T).',
                    hint: 'ran(ST) is contained in S(ran(T)). What is the dimension of the image of a finite-dimensional space under a linear map?',
                    solution: 'ran(ST) = {S(Tx) : x in X} = S(ran(T)). Since ran(T) is finite-dimensional with dim = n, its image S(ran(T)) is also finite-dimensional with dim <= n. Thus ST is finite rank with rank(ST) <= rank(T).'
                },
                {
                    id: 'ch05-ex17',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Let H be a Hilbert space and T: H -> H be compact. Show that T maps weakly convergent sequences to strongly convergent sequences.',
                    hint: 'If x_n converges weakly to x, then (x_n) is bounded. Use the compactness of T and uniqueness of weak limits to show the full sequence Tx_n converges strongly.',
                    solution: 'Let x_n -> x weakly. By uniform boundedness, (x_n) is bounded. Let (x_{n_k}) be any subsequence. Since T is compact and (x_{n_k}) is bounded, there exists a further subsequence (x_{n_{k_j}}) with Tx_{n_{k_j}} -> y strongly. For any f in H*, f(Tx_{n_{k_j}}) -> f(y). But also Tx_{n_{k_j}} -> Tx weakly (since T is continuous weak-to-weak), so f(y) = f(Tx) for all f, giving y = Tx. Since every subsequence of (Tx_n) has a further subsequence converging to Tx, the full sequence Tx_n -> Tx strongly.'
                },
                {
                    id: 'ch05-ex18',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Show that the set of compact operators K(X, Y) is closed in B(X, Y) when Y is a Banach space.',
                    hint: 'Let T_n -> T with each T_n compact. Use a diagonal argument: given a bounded sequence (x_k), extract a subsequence that works for all T_n simultaneously.',
                    solution: 'Let T_n -> T in operator norm, each T_n compact. Let (x_k) be bounded in X. By compactness of T_1, extract (x_k^{(1)}) so T_1 x_k^{(1)} converges. From this, extract (x_k^{(2)}) so T_2 x_k^{(2)} converges. Diagonalize: z_k = x_k^{(k)}. Then T_n z_k converges for each n. Given epsilon > 0, choose n with ||T - T_n|| < epsilon/3. Choose K so ||T_n z_j - T_n z_k|| < epsilon/3 for j,k >= K. Then ||Tz_j - Tz_k|| <= ||T - T_n|| (||z_j|| + ||z_k||) ... More precisely: ||Tz_j - Tz_k|| <= ||(T - T_n)(z_j - z_k)|| + ||T_n(z_j - z_k)|| <= 2M||T - T_n|| + ||T_n z_j - T_n z_k|| < epsilon. So (Tz_k) is Cauchy, hence convergent.'
                },
                {
                    id: 'ch05-ex19',
                    type: 'computation',
                    difficulty: 2,
                    question: 'Write the operator T: R^3 -> R^2 defined by T(x,y,z) = (2x + y, 3z) as a sum of rank-1 operators using the tensor product notation y_k tensor f_k.',
                    hint: 'Identify the functionals f_k and the vectors y_k such that T = sum f_k(.) y_k.',
                    solution: 'T(x,y,z) = (2x + y, 0) + (0, 3z). Define f_1(x,y,z) = 2x + y, y_1 = (1,0) and f_2(x,y,z) = 3z, y_2 = (0,1). Then T = y_1 tensor f_1 + y_2 tensor f_2. This is a rank-2 operator. Alternatively: T = (1,0) tensor (2,1,0) + (0,1) tensor (0,0,3).'
                }
            ]
        }
    ]
});
