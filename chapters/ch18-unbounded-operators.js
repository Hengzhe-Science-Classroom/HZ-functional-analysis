window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch18',
    number: 18,
    title: 'Unbounded Operators',
    subtitle: 'Beyond bounded operators to quantum mechanics',
    sections: [
        // ============================================================
        // SECTION 1: Densely Defined Operators
        // ============================================================
        {
            id: 'ch18-sec01',
            title: 'Densely Defined Operators',
            content: `
<div class="bridge-block chapter-opening">
<p><strong>Beyond Bounded Operators.</strong> Throughout Chapters 5-17, we studied bounded operators, which are defined on the entire space and continuous. But many of the most important operators in mathematics and physics, differentiation, the Laplacian, the momentum operator in quantum mechanics, are <em>unbounded</em>. They are only defined on a dense subspace and cannot be extended continuously to the whole space. This chapter develops the theory needed to handle these essential operators.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define unbounded operators as linear maps \(T: \mathcal{D}(T) \to H\) where \(\mathcal{D}(T)\) is a dense subspace. We study their graphs, closedness, and closability, establishing the framework needed for adjoint and spectral theory.</p>
</div>

<h2>Densely Defined Operators</h2>
<p>Up to now we have studied operators \\(T: X \\to Y\\) defined on the entire space \\(X\\). Many of the most important operators in analysis and physics, however, are only defined on a <em>dense subspace</em> of the Hilbert space. The differential operator \\(d/dx\\) on \\(L^2(\\mathbb{R})\\), for instance, cannot act on every \\(L^2\\) function&mdash;only on those that are differentiable in a suitable sense.</p>

<div class="env-block definition">
    <div class="env-title">Definition 18.1 (Unbounded Operator)</div>
    <div class="env-body"><p>Let \\(H\\) be a Hilbert space. An <strong>unbounded operator</strong> on \\(H\\) is a linear map \\(T: \\mathcal{D}(T) \\to H\\), where the <strong>domain</strong> \\(\\mathcal{D}(T)\\) is a linear subspace of \\(H\\). We say \\(T\\) is <strong>densely defined</strong> if \\(\\overline{\\mathcal{D}(T)} = H\\).</p></div>
</div>

<p>The terminology "unbounded operator" is slightly misleading: such operators <em>may</em> be bounded, but we do not require it. The essential point is that the domain is not necessarily all of \\(H\\).</p>

<div class="env-block example">
    <div class="env-title">Example 18.2 (Differentiation Operator)</div>
    <div class="env-body"><p>On \\(H = L^2([0,1])\\), define \\(T f = f'\\) with domain \\(\\mathcal{D}(T) = \\{f \\in L^2([0,1]) : f \\text{ is absolutely continuous and } f' \\in L^2([0,1])\\}\\). This is the Sobolev space \\(H^1([0,1])\\), which is dense in \\(L^2([0,1])\\). The operator \\(T\\) is unbounded: consider \\(f_n(x) = e^{2\\pi i n x}\\) with \\(\\|f_n\\| = 1\\) but \\(\\|Tf_n\\| = 2\\pi n \\to \\infty\\).</p></div>
</div>

<div class="env-block definition">
    <div class="env-title">Definition 18.3 (Graph of an Operator)</div>
    <div class="env-body"><p>The <strong>graph</strong> of \\(T\\) is the subspace \\(\\Gamma(T) = \\{(x, Tx) : x \\in \\mathcal{D}(T)\\} \\subset H \\oplus H\\). The operator \\(T\\) is <strong>closed</strong> if \\(\\Gamma(T)\\) is a closed subspace of \\(H \\oplus H\\). Equivalently, \\(T\\) is closed if whenever \\(x_n \\in \\mathcal{D}(T)\\), \\(x_n \\to x\\), and \\(Tx_n \\to y\\), we have \\(x \\in \\mathcal{D}(T)\\) and \\(Tx = y\\).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-graph-operator"></div>

<div class="env-block definition">
    <div class="env-title">Definition 18.4 (Closable Operator)</div>
    <div class="env-body"><p>An operator \\(T\\) is <strong>closable</strong> if the closure \\(\\overline{\\Gamma(T)}\\) of its graph in \\(H \\oplus H\\) is itself the graph of an operator. Equivalently, \\(T\\) is closable if and only if: whenever \\(x_n \\in \\mathcal{D}(T)\\), \\(x_n \\to 0\\), and \\(Tx_n \\to y\\), we have \\(y = 0\\). The operator \\(\\overline{T}\\) whose graph is \\(\\overline{\\Gamma(T)}\\) is called the <strong>closure</strong> of \\(T\\).</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Proposition 18.5</div>
    <div class="env-body"><p>A bounded operator \\(T: \\mathcal{D}(T) \\to H\\) with \\(\\mathcal{D}(T)\\) dense is always closable. Its closure \\(\\overline{T}\\) is the unique bounded extension to all of \\(H\\) (this is the BLT theorem from Chapter 5).</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 18.6 (A Non-Closable Operator)</div>
    <div class="env-body"><p>Fix a nonzero \\(\\phi \\in H\\) and a discontinuous linear functional \\(\\ell\\) on \\(H\\) (which exists by the axiom of choice). Define \\(T x = \\ell(x) \\phi\\). Then \\(T\\) is everywhere defined but not closable in the graph sense when restricted to suitable subdomains, because discontinuous functionals violate the closability criterion.</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark 18.7 (Operator Extensions)</div>
    <div class="env-body"><p>If \\(S\\) and \\(T\\) are operators with \\(\\mathcal{D}(S) \\subset \\mathcal{D}(T)\\) and \\(Sx = Tx\\) for all \\(x \\in \\mathcal{D}(S)\\), we write \\(S \\subset T\\) and say \\(T\\) is an <strong>extension</strong> of \\(S\\). The choice of domain profoundly affects the spectral properties. Two operators that agree on a dense set can have completely different spectra depending on boundary conditions.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-domain-extension"></div>

<div class="env-block theorem">
    <div class="env-title">Theorem 18.8 (Closed Graph Theorem Revisited)</div>
    <div class="env-body"><p>If \\(T: H \\to H\\) is a closed operator defined on all of \\(H\\), then \\(T\\) is bounded. Equivalently, a truly unbounded operator on a Hilbert space <em>cannot</em> be both closed and everywhere defined. This is why unbounded operators must have proper domains.</p></div>
</div>`,
            visualizations: [
                {
                    id: 'viz-graph-operator',
                    title: 'Graph of an Operator in H + H',
                    description: 'Visualize the graph of a closed vs non-closed operator as a subspace of the direct sum.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 50});
                        viz.originX = 350;
                        viz.originY = 350;
                        var ctx = viz.ctx;
                        var isClosed = true;

                        VizEngine.createButton(controls, 'Closed Operator', function() {
                            isClosed = true; draw();
                        });
                        VizEngine.createButton(controls, 'Non-Closed Operator', function() {
                            isClosed = false; draw();
                        });

                        function draw() {
                            viz.clear();
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            // H axis (horizontal)
                            ctx.beginPath(); ctx.moveTo(30, 350); ctx.lineTo(670, 350); ctx.stroke();
                            // H axis (vertical)
                            ctx.beginPath(); ctx.moveTo(350, 390); ctx.lineTo(350, 20); ctx.stroke();

                            viz.screenText('H (domain)', 650, 370, viz.colors.text, 13, 'right');
                            viz.screenText('H (range)', 370, 30, viz.colors.text, 13, 'left');
                            viz.screenText('0', 340, 360, viz.colors.text, 12, 'right');

                            if (isClosed) {
                                // Closed operator: graph is a closed line through origin
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 2.5;
                                ctx.beginPath();
                                ctx.moveTo(50, 310); ctx.lineTo(650, 50); ctx.stroke();

                                // Points on graph
                                var pts = [[100, 284], [200, 241], [350, 170], [450, 127], [550, 84]];
                                for (var i = 0; i < pts.length; i++) {
                                    ctx.fillStyle = viz.colors.teal;
                                    ctx.beginPath(); ctx.arc(pts[i][0], pts[i][1], 5, 0, Math.PI * 2); ctx.fill();
                                }

                                // Limit point also on graph
                                ctx.fillStyle = viz.colors.green;
                                ctx.beginPath(); ctx.arc(300, 192, 7, 0, Math.PI * 2); ctx.fill();
                                viz.screenText('limit point on graph', 310, 180, viz.colors.green, 11, 'left');
                                viz.screenText('Graph closed: (x,Tx) stays on line', 350, 405, viz.colors.blue, 13);
                            } else {
                                // Non-closed: graph approaches a point not in the graph
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath();
                                ctx.moveTo(80, 300);
                                ctx.quadraticCurveTo(250, 200, 400, 150);
                                ctx.stroke();
                                ctx.setLineDash([]);

                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 2.5;
                                ctx.beginPath();
                                ctx.moveTo(400, 150);
                                ctx.quadraticCurveTo(500, 120, 620, 60);
                                ctx.stroke();

                                // Points converging
                                var cpts = [[150, 268], [220, 230], [290, 190], [340, 165], [370, 155]];
                                for (var j = 0; j < cpts.length; j++) {
                                    ctx.fillStyle = viz.colors.teal;
                                    ctx.beginPath(); ctx.arc(cpts[j][0], cpts[j][1], 4, 0, Math.PI * 2); ctx.fill();
                                }

                                // Limit point NOT on graph
                                ctx.fillStyle = viz.colors.red;
                                ctx.strokeStyle = viz.colors.red;
                                ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.arc(400, 150, 8, 0, Math.PI * 2); ctx.stroke();
                                viz.screenText('limit NOT in graph!', 415, 138, viz.colors.red, 11, 'left');
                                viz.screenText('Graph not closed: limit escapes the graph', 350, 405, viz.colors.orange, 13);
                            }
                        }
                        draw();
                    }
                },
                {
                    id: 'viz-domain-extension',
                    title: 'Domain Choice and Operator Extensions',
                    description: 'See how different domain choices for d/dx on [0,1] yield different operators with different eigenvalues.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400, scale: 40});
                        viz.originX = 80;
                        viz.originY = 320;
                        var ctx = viz.ctx;
                        var mode = 0; // 0=Dirichlet, 1=Neumann, 2=Periodic

                        VizEngine.createButton(controls, 'Dirichlet: f(0)=f(1)=0', function() { mode = 0; draw(); });
                        VizEngine.createButton(controls, 'Neumann: f\'(0)=f\'(1)=0', function() { mode = 1; draw(); });
                        VizEngine.createButton(controls, 'Periodic: f(0)=f(1)', function() { mode = 2; draw(); });

                        function draw() {
                            viz.clear();
                            // axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(80, 320); ctx.lineTo(660, 320); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(80, 320); ctx.lineTo(80, 30); ctx.stroke();
                            viz.screenText('x', 660, 335, viz.colors.text, 12);
                            viz.screenText('f(x)', 65, 30, viz.colors.text, 12);
                            viz.screenText('0', 75, 332, viz.colors.text, 11);
                            viz.screenText('1', 640, 332, viz.colors.text, 11);

                            var W = 560;
                            var H = 250;
                            var colors = [viz.colors.blue, viz.colors.teal, viz.colors.orange];
                            var labels, funcs;

                            if (mode === 0) {
                                labels = ['sin(pi x)', 'sin(2 pi x)', 'sin(3 pi x)'];
                                funcs = [
                                    function(x) { return Math.sin(Math.PI * x); },
                                    function(x) { return Math.sin(2 * Math.PI * x); },
                                    function(x) { return Math.sin(3 * Math.PI * x); }
                                ];
                                viz.screenText('Dirichlet BC: eigenfunctions sin(n pi x), eigenvalues n pi i', 370, 18, viz.colors.white, 13);
                            } else if (mode === 1) {
                                labels = ['cos(0) = 1', 'cos(pi x)', 'cos(2 pi x)'];
                                funcs = [
                                    function(x) { return 0.8; },
                                    function(x) { return Math.cos(Math.PI * x); },
                                    function(x) { return Math.cos(2 * Math.PI * x); }
                                ];
                                viz.screenText('Neumann BC: eigenfunctions cos(n pi x), eigenvalues n pi i', 370, 18, viz.colors.white, 13);
                            } else {
                                labels = ['exp(0) = 1', 'exp(2 pi i x)', 'exp(-2 pi i x)'];
                                funcs = [
                                    function(x) { return 0.8; },
                                    function(x) { return Math.cos(2 * Math.PI * x); },
                                    function(x) { return Math.sin(2 * Math.PI * x); }
                                ];
                                viz.screenText('Periodic BC: eigenfunctions exp(2 pi i n x), eigenvalues 2 pi n i', 370, 18, viz.colors.white, 13);
                            }

                            for (var k = 0; k < 3; k++) {
                                ctx.strokeStyle = colors[k];
                                ctx.lineWidth = 2.5;
                                ctx.beginPath();
                                for (var j = 0; j <= 200; j++) {
                                    var t = j / 200;
                                    var px = 80 + t * W;
                                    var py = 320 - (funcs[k](t) * 0.4 + 0.5) * H;
                                    if (j === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                                }
                                ctx.stroke();
                                viz.screenText(labels[k], 80 + W + 10, 320 - (funcs[k](1) * 0.4 + 0.5) * H, colors[k], 11, 'left');
                            }

                            // zero line
                            ctx.strokeStyle = viz.colors.grid; ctx.lineWidth = 0.5;
                            var zy = 320 - 0.5 * H;
                            ctx.beginPath(); ctx.moveTo(80, zy); ctx.lineTo(80 + W, zy); ctx.stroke();
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch18-ex01',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Show that the multiplication operator (Mf)(x) = xf(x) on L^2([0,1]) with domain D(M) = {f in L^2 : xf(x) in L^2} is a closed, densely defined operator. Is it bounded?',
                    hint: 'For density, note that D(M) = L^2([0,1]) since x is bounded on [0,1]. For closedness, use the sequential characterization. Is the operator bounded on this interval?',
                    solution: 'Since x is in [0,1], we have |xf(x)| <= |f(x)|, so Mf is in L^2 whenever f is. Thus D(M) = L^2([0,1]) and M is everywhere defined (hence densely defined) and bounded with ||M|| <= 1. For closedness: if f_n -> f and Mf_n -> g, then xf_n(x) -> xf(x) = g(x) a.e., so M is closed. On [0,1], M is bounded. On L^2(R), however, M is unbounded and closed with D(M) = {f : integral of x^2|f(x)|^2 < infinity}.'
                },
                {
                    id: 'ch18-ex02',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Prove that an operator T is closable if and only if there is no sequence (x_n) in D(T) with x_n -> 0 and Tx_n -> y for some y != 0.',
                    hint: 'Suppose (0,y) is in the closure of the graph with y != 0. Then the closure is not a graph because (0,0) must also be in any graph through the origin. Conversely, if no such sequence exists, show the closure of the graph passes the vertical line test.',
                    solution: 'If T is closable, its graph closure is a graph of some operator S. Since S is linear, S(0) = 0, so (0,y) in the closed graph implies y = 0. Conversely, suppose the condition holds. We must show the closure of Gamma(T) is a graph: if (x,y1) and (x,y2) are both in the closure, then (0, y1-y2) is in the closure (by linearity of limits), so y1 - y2 = 0 by hypothesis. Hence the closure is a graph.'
                },
                {
                    id: 'ch18-ex03',
                    type: 'proof',
                    difficulty: 5,
                    question: 'Let T be a closed densely defined operator on H. Show that the resolvent set of T (the set of lambda in C for which T - lambda I has a bounded everywhere-defined inverse) is an open subset of C.',
                    hint: 'Fix lambda_0 in the resolvent set. For |lambda - lambda_0| < 1/||R(lambda_0)||, show that (T - lambda I) is invertible using a Neumann series argument with R(lambda_0) = (T - lambda_0 I)^{-1}.',
                    solution: 'Write T - lambda I = (T - lambda_0 I)(I - (lambda - lambda_0)R(lambda_0)) where R(lambda_0) = (T - lambda_0 I)^{-1} is bounded. If |lambda - lambda_0| ||R(lambda_0)|| < 1, the Neumann series sum_{n=0}^{infty} ((lambda - lambda_0)R(lambda_0))^n converges to a bounded inverse of I - (lambda - lambda_0)R(lambda_0). Hence T - lambda I is invertible with bounded inverse, so lambda is in the resolvent set. The resolvent set contains an open ball of radius 1/||R(lambda_0)|| around lambda_0.'
                }
            ]
        },
        // ============================================================
        // SECTION 2: Adjoint of Unbounded Operator
        // ============================================================
        {
            id: 'ch18-sec02',
            title: 'Adjoint of an Unbounded Operator',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Defining the Adjoint Carefully.</strong> For bounded operators, the adjoint \(T^*\) is defined on the whole space. For unbounded operators, the domain of \(T^*\) must be carefully constructed. The adjoint's domain encodes regularity information, and the relationship between \(\mathcal{D}(T)\) and \(\mathcal{D}(T^*)\) is central to self-adjointness theory.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define \(T^*\) for densely defined operators, prove the graph decomposition \(H \oplus H = \overline{\operatorname{Graph}(T)} \oplus U\operatorname{Graph}(T^*)\), and show that \(T\) is closable if and only if \(T^*\) is densely defined.</p>
</div>

<h2>Adjoint of an Unbounded Operator</h2>
<p>For bounded operators \\(T \\in B(H)\\), the adjoint \\(T^*\\) is defined on all of \\(H\\) by the Riesz representation theorem. For unbounded operators, the construction is more delicate: the adjoint may have a smaller (or even trivial) domain.</p>

<div class="env-block definition">
    <div class="env-title">Definition 18.9 (Adjoint of an Unbounded Operator)</div>
    <div class="env-body"><p>Let \\(T: \\mathcal{D}(T) \\to H\\) be a densely defined operator. The <strong>adjoint</strong> \\(T^*\\) is defined as follows. The domain \\(\\mathcal{D}(T^*)\\) consists of all \\(y \\in H\\) such that the map \\(x \\mapsto \\langle Tx, y \\rangle\\) is a bounded linear functional on \\(\\mathcal{D}(T)\\). For each such \\(y\\), by the Riesz representation theorem, there exists a unique \\(z \\in H\\) with \\(\\langle Tx, y \\rangle = \\langle x, z \\rangle\\) for all \\(x \\in \\mathcal{D}(T)\\). We set \\(T^* y = z\\).</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark 18.10</div>
    <div class="env-body"><p>The density of \\(\\mathcal{D}(T)\\) is essential: it guarantees uniqueness of \\(z\\) in the definition. Without density, \\(T^*\\) is not well-defined. The adjoint satisfies \\(\\langle Tx, y \\rangle = \\langle x, T^* y \\rangle\\) for all \\(x \\in \\mathcal{D}(T)\\), \\(y \\in \\mathcal{D}(T^*)\\).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-adjoint-construction"></div>

<div class="env-block theorem">
    <div class="env-title">Theorem 18.11 (Properties of the Adjoint)</div>
    <div class="env-body"><p>Let \\(T\\) be densely defined. Then:<br>
    (i) \\(T^*\\) is always a closed operator.<br>
    (ii) \\(T\\) is closable if and only if \\(\\mathcal{D}(T^*)\\) is dense in \\(H\\).<br>
    (iii) If \\(T\\) is closable, then \\(\\overline{T} = T^{**}\\) (the closure equals the double adjoint).<br>
    (iv) If \\(T\\) is closed, then \\(T^{**} = T\\).</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof Sketch</div>
    <div class="env-body"><p>(i) Define \\(U: H \\oplus H \\to H \\oplus H\\) by \\(U(x,y) = (-y,x)\\). One verifies that \\(\\Gamma(T^*) = (U \\Gamma(T))^\\perp\\). Since the orthogonal complement of any set is closed, \\(\\Gamma(T^*)\\) is closed, hence \\(T^*\\) is closed.</p>
    <p>(ii) If \\(\\mathcal{D}(T^*)\\) is not dense, there exists \\(0 \\neq x \\in \\mathcal{D}(T^*)^\\perp\\). Then \\((x,0)\\) is orthogonal to all \\((-T^*y, y)\\) for \\(y \\in \\mathcal{D}(T^*)\\), which means \\((0,x)\\) lies in \\(\\overline{\\Gamma(T)}\\). Since \\(x \\neq 0\\), the closure of the graph is not a graph, so \\(T\\) is not closable.</p>
    <p>(iii)-(iv) Follow from the double orthogonal complement identity \\(\\Gamma(T^{**}) = (U\\Gamma(T^*))^\\perp = \\overline{\\Gamma(T)}\\).</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 18.12</div>
    <div class="env-body"><p>Let \\(T = -i\\frac{d}{dx}\\) on \\(L^2([0,1])\\) with domain \\(\\mathcal{D}(T) = C_c^\\infty((0,1))\\) (smooth functions with compact support in the open interval). Then \\(T^*\\) acts as \\(T^* g = -ig'\\) with domain \\(\\mathcal{D}(T^*) = H^1([0,1])\\) (no boundary conditions). Since \\(\\mathcal{D}(T^*)\\) is dense, \\(T\\) is closable. The closure \\(\\overline{T}\\) has domain \\(H^1_0([0,1])\\) (functions vanishing at the boundary).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-adjoint-graph"></div>

<div class="env-block theorem">
    <div class="env-title">Proposition 18.13 (Graph Decomposition)</div>
    <div class="env-body"><p>For a densely defined closed operator \\(T\\), we have the orthogonal decomposition
    \\[H \\oplus H = \\Gamma(T) \\oplus U\\Gamma(T^*)\\]
    where \\(U(x,y) = (-y,x)\\). This is the fundamental structural theorem relating \\(T\\) and \\(T^*\\).</p></div>
</div>`,
            visualizations: [
                {
                    id: 'viz-adjoint-construction',
                    title: 'Adjoint Domain Construction',
                    description: 'Visualize which elements y lie in D(T*) by checking whether the functional x -> <Tx,y> is bounded.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400, scale: 35});
                        viz.originX = 350;
                        viz.originY = 200;
                        var ctx = viz.ctx;
                        var testIndex = 0;
                        var testVectors = [
                            {label: 'y in D(T*): bounded functional', bounded: true, color: '#3fb950'},
                            {label: 'y not in D(T*): unbounded functional', bounded: false, color: '#f85149'}
                        ];

                        VizEngine.createButton(controls, 'y in D(T*)', function() { testIndex = 0; draw(); });
                        VizEngine.createButton(controls, 'y not in D(T*)', function() { testIndex = 1; draw(); });

                        function draw() {
                            viz.clear();
                            var tv = testVectors[testIndex];

                            // D(T) region
                            ctx.fillStyle = viz.colors.blue + '22';
                            ctx.beginPath();
                            ctx.ellipse(180, 200, 140, 130, 0, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.ellipse(180, 200, 140, 130, 0, 0, Math.PI * 2);
                            ctx.stroke();
                            viz.screenText('D(T)', 180, 340, viz.colors.blue, 14);
                            viz.screenText('H', 180, 55, viz.colors.text, 12);

                            // T arrow
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(330, 160); ctx.lineTo(390, 160); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(390, 160); ctx.lineTo(382, 154); ctx.lineTo(382, 166); ctx.closePath(); ctx.fillStyle = viz.colors.white; ctx.fill();
                            viz.screenText('T', 360, 148, viz.colors.white, 14);

                            // Range region
                            ctx.fillStyle = viz.colors.purple + '22';
                            ctx.beginPath();
                            ctx.ellipse(520, 200, 140, 130, 0, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.strokeStyle = viz.colors.purple;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.ellipse(520, 200, 140, 130, 0, 0, Math.PI * 2);
                            ctx.stroke();
                            viz.screenText('H (range)', 520, 340, viz.colors.purple, 14);

                            // Test vector y
                            ctx.fillStyle = tv.color;
                            ctx.beginPath(); ctx.arc(520, 180, 7, 0, Math.PI * 2); ctx.fill();
                            viz.screenText('y', 534, 175, tv.color, 14, 'left');

                            // Functional arrow back
                            ctx.setLineDash([5, 3]);
                            ctx.strokeStyle = tv.color;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(500, 210); ctx.lineTo(320, 240); ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('x -> <Tx, y>', 400, 235, tv.color, 11);

                            if (tv.bounded) {
                                // Bounded functional visualization
                                var barX = 80, barY = 380;
                                viz.screenText('|<Tx,y>| bounded on D(T)', 350, 380, viz.colors.green, 13);
                                viz.screenText('=> Riesz gives T*y with <Tx,y> = <x,T*y>', 350, 396, viz.colors.green, 11);
                            } else {
                                viz.screenText('|<Tx,y>| unbounded on D(T)', 350, 380, viz.colors.red, 13);
                                viz.screenText('=> No T*y exists; y is outside D(T*)', 350, 396, viz.colors.red, 11);
                            }

                            viz.screenText(tv.label, 350, 25, viz.colors.white, 14);
                        }
                        draw();
                    }
                },
                {
                    id: 'viz-adjoint-graph',
                    title: 'Graph Decomposition: H+H = Graph(T) + U Graph(T*)',
                    description: 'The direct sum H+H decomposes orthogonally into the graph of T and the rotated graph of T*.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 45});
                        viz.originX = 350;
                        viz.originY = 210;
                        var ctx = viz.ctx;
                        var angle = 0;

                        viz.animate(function(t) {
                            angle = t * 0.0005;
                            viz.clear();

                            // Draw H+H as a box
                            ctx.strokeStyle = viz.colors.grid;
                            ctx.lineWidth = 1;
                            ctx.strokeRect(40, 20, 620, 380);
                            viz.screenText('H + H', 60, 15, viz.colors.text, 12);

                            // Graph(T) - a subspace shown as a rotating plane/line
                            var cos1 = Math.cos(0.6 + 0.2 * Math.sin(angle));
                            var sin1 = Math.sin(0.6 + 0.2 * Math.sin(angle));

                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(350 - cos1 * 300, 210 + sin1 * 300);
                            ctx.lineTo(350 + cos1 * 300, 210 - sin1 * 300);
                            ctx.stroke();
                            viz.screenText('Graph(T)', 350 + cos1 * 250 + 10, 210 - sin1 * 250, viz.colors.blue, 13, 'left');

                            // U Graph(T*) - orthogonal complement
                            var cos2 = -sin1;
                            var sin2 = cos1;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(350 - cos2 * 300, 210 + sin2 * 300);
                            ctx.lineTo(350 + cos2 * 300, 210 - sin2 * 300);
                            ctx.stroke();
                            viz.screenText('U Graph(T*)', 350 + cos2 * 220, 210 - sin2 * 220 - 15, viz.colors.orange, 13);

                            // Right angle marker
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 1;
                            var s = 15;
                            ctx.beginPath();
                            ctx.moveTo(350 + cos1 * s, 210 - sin1 * s);
                            ctx.lineTo(350 + cos1 * s + cos2 * s, 210 - sin1 * s - sin2 * s);
                            ctx.lineTo(350 + cos2 * s, 210 - sin2 * s);
                            ctx.stroke();

                            viz.screenText('H + H = Graph(T) +(orthogonal) U Graph(T*)', 350, 410, viz.colors.white, 13);
                        });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch18-ex04',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Let T = d/dx on L^2([0,1]) with D(T) = {f in H^1([0,1]) : f(0) = 0}. Find T* and its domain.',
                    hint: 'Integrate by parts: for f in D(T) and g in D(T*), we need <f\', g> = <f, T*g>. The integration by parts gives a boundary term f(1)g(1) - f(0)g(0). Since f(0) = 0, we need g(1) = 0 to kill the boundary term.',
                    solution: 'Integration by parts: integral_0^1 f\'(x) g(x) dx = [f g]_0^1 - integral_0^1 f(x) g\'(x) dx = f(1)g(1) - integral_0^1 f g\' dx (since f(0)=0). For this to equal <f, T*g> for all f in D(T), we need: (1) g in H^1 so that g\' makes sense, and (2) g(1) = 0 to kill the boundary term. Thus T* = -d/dx with D(T*) = {g in H^1([0,1]) : g(1) = 0}.'
                },
                {
                    id: 'ch18-ex05',
                    type: 'proof',
                    difficulty: 5,
                    question: 'Prove that T* is always a closed operator (for any densely defined T).',
                    hint: 'Use the characterization Graph(T*) = (U Graph(T))^perp where U(x,y) = (-y,x). The orthogonal complement of any set in a Hilbert space is closed.',
                    solution: 'Define U: H+H -> H+H by U(x,y) = (-y,x). Then (y,z) is in Graph(T*) iff <Tx,y> = <x,z> for all x in D(T), iff <(x,Tx), (-z,y)> = 0 for all x in D(T), iff (-z,y) is in Graph(T)^perp, iff (y,z) is in U^{-1}(Graph(T)^perp) = (U Graph(T))^perp. Since orthogonal complements are always closed in a Hilbert space, Graph(T*) is closed, hence T* is closed.'
                },
                {
                    id: 'ch18-ex06',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Show that if S is a subset of T (i.e., S is a restriction of T), then T* is a subset of S*.',
                    hint: 'If S subset T, then D(S) subset D(T). For y in D(T*), the functional x -> <Tx,y> is bounded on D(T), hence also bounded on the smaller domain D(S).',
                    solution: 'Let y in D(T*). Then for all x in D(S) subset D(T), we have <Sx, y> = <Tx, y> = <x, T*y>. Thus the map x -> <Sx,y> is bounded on D(S) (since it equals x -> <x, T*y>). So y is in D(S*) and S*y = T*y. Hence T* subset S*. This reversal of inclusions is a key feature: restricting the operator enlarges the adjoint.'
                }
            ]
        },
        // ============================================================
        // SECTION 3: Symmetric and Self-Adjoint Operators
        // ============================================================
        {
            id: 'ch18-sec03',
            title: 'Symmetric and Self-Adjoint Operators',
            content: `
<div class="bridge-block section-bridge">
<p><strong>The Crucial Distinction.</strong> A symmetric operator satisfies \(\langle Tx, y \rangle = \langle x, Ty \rangle\) for all \(x, y \in \mathcal{D}(T)\). A self-adjoint operator satisfies \(T = T^*\), meaning additionally \(\mathcal{D}(T) = \mathcal{D}(T^*)\). In finite dimensions these are the same; in infinite dimensions, the gap between symmetry and self-adjointness is where the deepest phenomena live.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define symmetric and self-adjoint operators, prove that self-adjoint operators have real spectrum, introduce deficiency indices as the obstruction to self-adjoint extensions, and study von Neumann's extension theory.</p>
</div>

<h2>Symmetric and Self-Adjoint Operators</h2>
<p>The distinction between symmetric and self-adjoint operators is one of the most subtle and important points in functional analysis. In finite dimensions, the notions coincide. In infinite dimensions, they diverge dramatically, and only self-adjoint operators have a full spectral theorem.</p>

<div class="env-block definition">
    <div class="env-title">Definition 18.14 (Symmetric Operator)</div>
    <div class="env-body"><p>A densely defined operator \\(T\\) is <strong>symmetric</strong> (or <strong>Hermitian</strong>) if \\(T \\subset T^*\\), i.e., \\(\\mathcal{D}(T) \\subset \\mathcal{D}(T^*)\\) and \\(Tx = T^*x\\) for all \\(x \\in \\mathcal{D}(T)\\). Equivalently, \\(\\langle Tx, y \\rangle = \\langle x, Ty \\rangle\\) for all \\(x, y \\in \\mathcal{D}(T)\\).</p></div>
</div>

<div class="env-block definition">
    <div class="env-title">Definition 18.15 (Self-Adjoint Operator)</div>
    <div class="env-body"><p>A densely defined operator \\(T\\) is <strong>self-adjoint</strong> if \\(T = T^*\\), meaning \\(\\mathcal{D}(T) = \\mathcal{D}(T^*)\\) and \\(Tx = T^*x\\) for all \\(x\\) in this common domain. Self-adjointness is strictly stronger than symmetry.</p></div>
</div>

<div class="env-block intuition">
    <div class="env-title">The Crucial Distinction</div>
    <div class="env-body"><p>Symmetric means \\(T \\subset T^*\\): the adjoint may be defined on a larger domain. Self-adjoint means \\(T = T^*\\): the domains match exactly. A symmetric operator that is not self-adjoint has "too small" a domain. Self-adjointness is what guarantees the spectral theorem.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-symmetric-vs-sa"></div>

<div class="env-block example">
    <div class="env-title">Example 18.16 (Symmetric but Not Self-Adjoint)</div>
    <div class="env-body"><p>On \\(L^2([0,1])\\), let \\(T = -i\\frac{d}{dx}\\) with \\(\\mathcal{D}(T) = \\{f \\in H^1([0,1]) : f(0) = f(1) = 0\\}\\). Integration by parts shows \\(T\\) is symmetric: boundary terms vanish. But \\(T^*\\) acts as \\(-id/dx\\) on all of \\(H^1([0,1])\\) (no boundary conditions), so \\(\\mathcal{D}(T) \\subsetneq \\mathcal{D}(T^*)\\). Hence \\(T\\) is symmetric but not self-adjoint.</p></div>
</div>

<div class="env-block definition">
    <div class="env-title">Definition 18.17 (Deficiency Indices)</div>
    <div class="env-body"><p>For a closed symmetric operator \\(T\\), the <strong>deficiency subspaces</strong> are
    \\[\\mathcal{N}_\\pm = \\ker(T^* \\mp i I) = \\{y \\in \\mathcal{D}(T^*) : T^* y = \\pm iy\\}.\\]
    The <strong>deficiency indices</strong> are \\(n_\\pm = \\dim \\mathcal{N}_\\pm\\). These measure how far \\(T\\) is from being self-adjoint.</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 18.18 (Von Neumann)</div>
    <div class="env-body"><p>Let \\(T\\) be a closed symmetric operator with deficiency indices \\((n_+, n_-)\\). Then:<br>
    (i) \\(T\\) is self-adjoint if and only if \\(n_+ = n_- = 0\\).<br>
    (ii) \\(T\\) has self-adjoint extensions if and only if \\(n_+ = n_-\\).<br>
    (iii) When \\(n_+ = n_- = n < \\infty\\), the self-adjoint extensions are parametrized by the unitary group \\(U(n)\\).<br>
    (iv) When \\(n_+ \\neq n_-\\), \\(T\\) has no self-adjoint extension at all.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-deficiency-indices"></div>

<div class="env-block example">
    <div class="env-title">Example 18.19 (Momentum on a Half-Line)</div>
    <div class="env-body"><p>Let \\(T = -i\\frac{d}{dx}\\) on \\(L^2([0,\\infty))\\) with \\(\\mathcal{D}(T) = \\{f \\in H^1([0,\\infty)) : f(0) = 0\\}\\). The deficiency equation \\(T^* g = ig\\) gives \\(g(x) = ce^{-x}\\), so \\(n_+ = 1\\). The equation \\(T^* g = -ig\\) gives \\(g(x) = ce^{x}\\), which is not in \\(L^2\\), so \\(n_- = 0\\). Since \\(n_+ \\neq n_-\\), \\(T\\) has <em>no</em> self-adjoint extension. The momentum operator on a half-line is fundamentally non-self-adjoint.</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 18.20 (Momentum on an Interval)</div>
    <div class="env-body"><p>Let \\(T = -i\\frac{d}{dx}\\) on \\(L^2([0,1])\\) with \\(\\mathcal{D}(T) = \\{f \\in H^1([0,1]) : f(0) = f(1) = 0\\}\\). Both deficiency equations \\(T^*g = \\pm ig\\) yield solutions \\(g(x) = ce^{\\mp x}\\) in \\(L^2([0,1])\\), so \\(n_+ = n_- = 1\\). The self-adjoint extensions are parametrized by \\(U(1) \\cong S^1\\): each \\(\\theta \\in [0, 2\\pi)\\) gives the extension \\(T_\\theta\\) with \\(\\mathcal{D}(T_\\theta) = \\{f \\in H^1 : f(1) = e^{i\\theta}f(0)\\}\\).</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 18.21 (Essential Self-Adjointness)</div>
    <div class="env-body"><p>A symmetric operator \\(T\\) is <strong>essentially self-adjoint</strong> if its closure \\(\\overline{T}\\) is self-adjoint, or equivalently, if \\(T\\) has a unique self-adjoint extension. This occurs iff \\(n_+ = n_- = 0\\) for \\(\\overline{T}\\), i.e., iff \\(\\text{ran}(T + iI)\\) and \\(\\text{ran}(T - iI)\\) are both dense in \\(H\\).</p></div>
</div>`,
            visualizations: [
                {
                    id: 'viz-symmetric-vs-sa',
                    title: 'Symmetric vs Self-Adjoint: Domain Comparison',
                    description: 'Compare the domains of T and T* for symmetric vs self-adjoint operators.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 380, scale: 40});
                        var ctx = viz.ctx;
                        var mode = 0;

                        VizEngine.createButton(controls, 'Symmetric Only (T subset T*)', function() { mode = 0; draw(); });
                        VizEngine.createButton(controls, 'Self-Adjoint (T = T*)', function() { mode = 1; draw(); });
                        VizEngine.createButton(controls, 'Not Even Symmetric', function() { mode = 2; draw(); });

                        function draw() {
                            viz.clear();

                            if (mode === 0) {
                                // D(T) small circle inside D(T*) big circle
                                ctx.fillStyle = viz.colors.orange + '22';
                                ctx.beginPath(); ctx.ellipse(350, 190, 200, 150, 0, 0, Math.PI * 2); ctx.fill();
                                ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.ellipse(350, 190, 200, 150, 0, 0, Math.PI * 2); ctx.stroke();
                                viz.screenText('D(T*)', 530, 80, viz.colors.orange, 14);

                                ctx.fillStyle = viz.colors.blue + '33';
                                ctx.beginPath(); ctx.ellipse(330, 200, 100, 80, 0, 0, Math.PI * 2); ctx.fill();
                                ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2.5;
                                ctx.beginPath(); ctx.ellipse(330, 200, 100, 80, 0, 0, Math.PI * 2); ctx.stroke();
                                viz.screenText('D(T)', 330, 200, viz.colors.blue, 14);

                                viz.screenText('T subset T*: Symmetric, NOT self-adjoint', 350, 365, viz.colors.white, 14);
                                viz.screenText('Gap between D(T) and D(T*) measured by deficiency indices', 350, 20, viz.colors.text, 12);
                            } else if (mode === 1) {
                                // D(T) = D(T*) same circle
                                ctx.fillStyle = viz.colors.green + '22';
                                ctx.beginPath(); ctx.ellipse(350, 190, 160, 130, 0, 0, Math.PI * 2); ctx.fill();
                                ctx.strokeStyle = viz.colors.green; ctx.lineWidth = 3;
                                ctx.beginPath(); ctx.ellipse(350, 190, 160, 130, 0, 0, Math.PI * 2); ctx.stroke();
                                viz.screenText('D(T) = D(T*)', 350, 190, viz.colors.green, 16);

                                viz.screenText('T = T*: Self-adjoint! Spectral theorem applies.', 350, 365, viz.colors.green, 14);
                            } else {
                                // D(T) and D(T*) partially overlapping
                                ctx.fillStyle = viz.colors.blue + '22';
                                ctx.beginPath(); ctx.ellipse(280, 190, 140, 110, 0, 0, Math.PI * 2); ctx.fill();
                                ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.ellipse(280, 190, 140, 110, 0, 0, Math.PI * 2); ctx.stroke();
                                viz.screenText('D(T)', 210, 130, viz.colors.blue, 14);

                                ctx.fillStyle = viz.colors.orange + '22';
                                ctx.beginPath(); ctx.ellipse(420, 190, 140, 110, 0, 0, Math.PI * 2); ctx.fill();
                                ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.ellipse(420, 190, 140, 110, 0, 0, Math.PI * 2); ctx.stroke();
                                viz.screenText('D(T*)', 490, 130, viz.colors.orange, 14);

                                viz.screenText('D(T) not subset D(T*): NOT symmetric', 350, 365, viz.colors.red, 14);
                            }
                        }
                        draw();
                    }
                },
                {
                    id: 'viz-deficiency-indices',
                    title: 'Deficiency Indices and Self-Adjoint Extensions',
                    description: 'Explore how deficiency indices determine the existence of self-adjoint extensions.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 40});
                        var ctx = viz.ctx;
                        var caseIdx = 0;

                        var cases = [
                            {n_plus: 0, n_minus: 0, desc: 'Already self-adjoint', color: '#3fb950',
                             detail: 'n+ = n- = 0: T is self-adjoint.\nNo extensions needed.'},
                            {n_plus: 1, n_minus: 1, desc: 'Extensions parametrized by U(1)', color: '#58a6ff',
                             detail: 'n+ = n- = 1: Family of self-adjoint\nextensions labeled by angle theta.'},
                            {n_plus: 2, n_minus: 2, desc: 'Extensions parametrized by U(2)', color: '#bc8cff',
                             detail: 'n+ = n- = 2: Extensions labeled\nby 2x2 unitary matrices.'},
                            {n_plus: 1, n_minus: 0, desc: 'No self-adjoint extension!', color: '#f85149',
                             detail: 'n+ != n-: No self-adjoint\nextension exists at all.'}
                        ];

                        VizEngine.createButton(controls, 'n+=n-=0', function() { caseIdx = 0; draw(); });
                        VizEngine.createButton(controls, 'n+=n-=1', function() { caseIdx = 1; draw(); });
                        VizEngine.createButton(controls, 'n+=n-=2', function() { caseIdx = 2; draw(); });
                        VizEngine.createButton(controls, 'n+=1, n-=0', function() { caseIdx = 3; draw(); });

                        function draw() {
                            viz.clear();
                            var c = cases[caseIdx];

                            viz.screenText('Von Neumann Deficiency Index Theory', 350, 25, viz.colors.white, 16);

                            // Draw two boxes for N+ and N-
                            var boxW = 180, boxH = 120;
                            // N+ box
                            ctx.strokeStyle = viz.colors.teal; ctx.lineWidth = 2;
                            ctx.strokeRect(100, 80, boxW, boxH);
                            viz.screenText('N+ = ker(T* - iI)', 190, 75, viz.colors.teal, 12);
                            viz.screenText('dim = ' + c.n_plus, 190, 140, viz.colors.teal, 20);

                            // N- box
                            ctx.strokeStyle = viz.colors.yellow; ctx.lineWidth = 2;
                            ctx.strokeRect(420, 80, boxW, boxH);
                            viz.screenText('N- = ker(T* + iI)', 510, 75, viz.colors.yellow, 12);
                            viz.screenText('dim = ' + c.n_minus, 510, 140, viz.colors.yellow, 20);

                            // Arrow between them
                            if (c.n_plus === c.n_minus && c.n_plus > 0) {
                                ctx.strokeStyle = c.color; ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.moveTo(280, 140); ctx.lineTo(420, 140); ctx.stroke();
                                ctx.beginPath(); ctx.moveTo(415, 135); ctx.lineTo(420, 140); ctx.lineTo(415, 145); ctx.stroke();
                                viz.screenText('U: N+ -> N-', 350, 130, c.color, 12);
                            }

                            // Result box
                            ctx.fillStyle = c.color + '22';
                            ctx.fillRect(100, 240, 500, 80);
                            ctx.strokeStyle = c.color; ctx.lineWidth = 2;
                            ctx.strokeRect(100, 240, 500, 80);
                            viz.screenText(c.desc, 350, 265, c.color, 16);

                            var lines = c.detail.split('\n');
                            for (var i = 0; i < lines.length; i++) {
                                viz.screenText(lines[i], 350, 290 + i * 16, viz.colors.text, 12);
                            }

                            // Visual for extensions
                            if (caseIdx === 1) {
                                // Draw a circle for U(1) parametrization
                                ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.arc(350, 380, 30, 0, Math.PI * 2); ctx.stroke();
                                for (var a = 0; a < 8; a++) {
                                    var th = a * Math.PI / 4;
                                    ctx.fillStyle = viz.colors.blue;
                                    ctx.beginPath();
                                    ctx.arc(350 + 30 * Math.cos(th), 380 + 30 * Math.sin(th), 3, 0, Math.PI * 2);
                                    ctx.fill();
                                }
                                viz.screenText('S^1 of extensions', 350, 415, viz.colors.blue, 11);
                            }
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch18-ex07',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Show that every eigenvalue of a symmetric operator is real.',
                    hint: 'If Tx = lambda x with x != 0, compute <Tx, x> in two ways using symmetry.',
                    solution: 'Let Tx = lambda x with x != 0. Then lambda ||x||^2 = <lambda x, x> = <Tx, x> = <x, Tx> = <x, lambda x> = conjugate(lambda) ||x||^2. Since ||x||^2 > 0, we get lambda = conjugate(lambda), so lambda is real.'
                },
                {
                    id: 'ch18-ex08',
                    type: 'proof',
                    difficulty: 5,
                    question: 'Let T = -id/dx on L^2([0,1]) with D(T) = {f in H^1([0,1]) : f(0) = f(1) = 0}. Compute the deficiency indices of T.',
                    hint: 'Solve T*g = ig, i.e., -ig\' = ig, giving g\' = -g, so g(x) = Ce^{-x}. Similarly solve T*g = -ig.',
                    solution: 'D(T*) = H^1([0,1]) (no boundary conditions). For n+: solve T*g = ig, i.e., -ig\'(x) = ig(x), so g\'(x) = -g(x), giving g(x) = Ce^{-x}. This is in L^2([0,1]) for any C, so N+ = span{e^{-x}} and n+ = 1. For n-: solve T*g = -ig, i.e., -ig\'(x) = -ig(x), so g\'(x) = g(x), giving g(x) = Ce^{x}. Also in L^2([0,1]), so N- = span{e^x} and n- = 1. Since n+ = n- = 1, the self-adjoint extensions are parametrized by U(1) = {e^{i theta}}. Each gives the boundary condition f(1) = e^{i theta} f(0).'
                },
                {
                    id: 'ch18-ex09',
                    type: 'proof',
                    difficulty: 5,
                    question: 'Prove that if T is self-adjoint, then the spectrum of T is a subset of the real line.',
                    hint: 'Show that for lambda = a + ib with b != 0, we have ||(T - lambda I)x|| >= |b| ||x|| for all x in D(T). This implies T - lambda I is injective with closed range.',
                    solution: 'Let lambda = a + ib with b != 0 and x in D(T). Then ||(T - lambda)x||^2 = ||(T-a)x||^2 - ib<(T-a)x, x> + ib<x, (T-a)x> + b^2 ||x||^2. Since T is self-adjoint, T-a is also self-adjoint, so <(T-a)x, x> is real, and the cross terms cancel: ||(T-lambda)x||^2 = ||(T-a)x||^2 + b^2 ||x||^2 >= b^2 ||x||^2. So ||(T-lambda)x|| >= |b| ||x||, which means T - lambda I is injective with closed range. By a similar argument applied to T* - conjugate(lambda) I = T - conjugate(lambda) I, the range is also dense. Therefore T - lambda I is bijective with bounded inverse, so lambda is in the resolvent set.'
                }
            ]
        },
        // ============================================================
        // SECTION 4: Spectral Theorem (Statement)
        // ============================================================
        {
            id: 'ch18-sec04',
            title: 'Spectral Theorem for Unbounded Self-Adjoint Operators',
            content: `
<div class="bridge-block section-bridge">
<p><strong>The General Spectral Theorem.</strong> The spectral theorem for compact self-adjoint operators (Chapter 16) decomposed an operator into a sum over eigenvalues. The general spectral theorem replaces the sum with an integral: \(T = \int \lambda \, dE(\lambda)\), where \(E\) is a projection-valued measure. This is the mathematical foundation of quantum mechanics.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We state the spectral theorem for unbounded self-adjoint operators, define projection-valued measures, and construct the functional calculus \(f(T) = \int f(\lambda) \, dE(\lambda)\). We then derive consequences for the spectrum and discuss the relationship to the compact case.</p>
</div>

<h2>Spectral Theorem for Unbounded Self-Adjoint Operators</h2>
<p>The spectral theorem is the crown jewel of operator theory. For bounded self-adjoint operators, we established it in earlier chapters. For unbounded self-adjoint operators, the statement requires <strong>projection-valued measures</strong> (spectral measures) on the real line.</p>

<div class="env-block definition">
    <div class="env-title">Definition 18.22 (Projection-Valued Measure)</div>
    <div class="env-body"><p>A <strong>projection-valued measure</strong> (PVM) on \\(\\mathbb{R}\\) is a map \\(E\\) from the Borel sets of \\(\\mathbb{R}\\) to orthogonal projections on \\(H\\) satisfying:<br>
    (i) \\(E(\\emptyset) = 0\\), \\(E(\\mathbb{R}) = I\\).<br>
    (ii) \\(E(A \\cap B) = E(A)E(B)\\) for all Borel sets \\(A, B\\).<br>
    (iii) If \\(A_1, A_2, \\ldots\\) are pairwise disjoint, then \\(E(\\bigcup_n A_n) = \\sum_n E(A_n)\\) (strong convergence).<br>
    For each \\(x, y \\in H\\), the map \\(A \\mapsto \\langle E(A)x, y \\rangle\\) is a complex Borel measure \\(\\mu_{x,y}\\), and \\(A \\mapsto \\|E(A)x\\|^2\\) is a positive measure \\(\\mu_x\\).</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 18.23 (Spectral Theorem for Unbounded Self-Adjoint Operators)</div>
    <div class="env-body"><p>Let \\(T\\) be a self-adjoint operator on a Hilbert space \\(H\\). There exists a unique projection-valued measure \\(E\\) on \\(\\mathbb{R}\\) such that
    \\[T = \\int_{-\\infty}^{\\infty} \\lambda \\, dE(\\lambda),\\]
    meaning: \\(\\mathcal{D}(T) = \\{x \\in H : \\int_{-\\infty}^\\infty \\lambda^2 \\, d\\|E(\\lambda)x\\|^2 < \\infty\\}\\) and for \\(x \\in \\mathcal{D}(T)\\), \\(y \\in H\\):
    \\[\\langle Tx, y \\rangle = \\int_{-\\infty}^{\\infty} \\lambda \\, d\\langle E(\\lambda)x, y \\rangle.\\]
    The support of \\(E\\) equals the spectrum \\(\\sigma(T)\\).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-spectral-measure"></div>

<div class="env-block definition">
    <div class="env-title">Definition 18.24 (Functional Calculus)</div>
    <div class="env-body"><p>For any Borel measurable function \\(f: \\mathbb{R} \\to \\mathbb{C}\\) and self-adjoint \\(T\\) with spectral measure \\(E\\), we define
    \\[f(T) = \\int_{-\\infty}^{\\infty} f(\\lambda) \\, dE(\\lambda)\\]
    with domain \\(\\mathcal{D}(f(T)) = \\{x \\in H : \\int |f(\\lambda)|^2 \\, d\\|E(\\lambda)x\\|^2 < \\infty\\}\\). This <strong>Borel functional calculus</strong> extends the polynomial and continuous functional calculi.</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 18.25</div>
    <div class="env-body"><p>Key instances of the functional calculus:<br>
    (i) \\(f(\\lambda) = e^{it\\lambda}\\) gives the <strong>unitary group</strong> \\(e^{itT}\\), a bounded operator for each \\(t\\).<br>
    (ii) \\(f(\\lambda) = (\\lambda - z)^{-1}\\) for \\(z \\notin \\sigma(T)\\) gives the <strong>resolvent</strong> \\((T - zI)^{-1}\\).<br>
    (iii) \\(f(\\lambda) = \\chi_{(-\\infty, a]}(\\lambda)\\) gives the <strong>spectral projection</strong> \\(E((-\\infty, a])\\).<br>
    (iv) \\(f(\\lambda) = |\\lambda|\\) gives \\(|T|\\), the <strong>absolute value</strong> of \\(T\\).</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 18.26 (Spectral Mapping)</div>
    <div class="env-body"><p>If \\(f: \\mathbb{R} \\to \\mathbb{C}\\) is continuous, then \\(\\sigma(f(T)) = f(\\sigma(T)) = \\{f(\\lambda) : \\lambda \\in \\sigma(T)\\}\\).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-functional-calculus"></div>

<div class="env-block remark">
    <div class="env-title">Remark 18.27 (Spectral Theorem via Cayley Transform)</div>
    <div class="env-body"><p>One proof strategy reduces the unbounded case to the bounded case using the <strong>Cayley transform</strong>: \\(U = (T - iI)(T + iI)^{-1}\\). When \\(T\\) is self-adjoint, \\(U\\) is unitary. The spectral theorem for \\(U\\) (bounded case) then pulls back to give the spectral theorem for \\(T\\). The map \\(\\lambda \\mapsto (\\lambda - i)/(\\lambda + i)\\) sends \\(\\mathbb{R}\\) bijectively to \\(S^1 \\setminus \\{1\\}\\).</p></div>
</div>`,
            visualizations: [
                {
                    id: 'viz-spectral-measure',
                    title: 'Spectral Measure Visualization',
                    description: 'Visualize the projection-valued measure E and how it assigns projections to intervals on the real line.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 40});
                        var ctx = viz.ctx;
                        var specType = 0; // 0 = discrete, 1 = continuous, 2 = mixed

                        VizEngine.createButton(controls, 'Discrete Spectrum', function() { specType = 0; draw(); });
                        VizEngine.createButton(controls, 'Continuous Spectrum', function() { specType = 1; draw(); });
                        VizEngine.createButton(controls, 'Mixed Spectrum', function() { specType = 2; draw(); });

                        function draw() {
                            viz.clear();
                            viz.screenText('Spectral Measure E on the Real Line', 350, 20, viz.colors.white, 15);

                            // Real line axis
                            var axisY = 300;
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(40, axisY); ctx.lineTo(660, axisY); ctx.stroke();
                            // Arrow
                            ctx.beginPath(); ctx.moveTo(660, axisY); ctx.lineTo(652, axisY - 5); ctx.lineTo(652, axisY + 5); ctx.closePath();
                            ctx.fillStyle = viz.colors.axis; ctx.fill();
                            viz.screenText('lambda', 670, axisY, viz.colors.text, 13, 'left');

                            // Tick marks
                            for (var t = -3; t <= 3; t++) {
                                var tx = 350 + t * 80;
                                ctx.strokeStyle = viz.colors.text; ctx.lineWidth = 1;
                                ctx.beginPath(); ctx.moveTo(tx, axisY - 4); ctx.lineTo(tx, axisY + 4); ctx.stroke();
                                viz.screenText(String(t), tx, axisY + 16, viz.colors.text, 11);
                            }

                            if (specType === 0) {
                                // Discrete: delta measures at eigenvalues
                                var evals = [-2, -0.5, 1, 2.5];
                                var heights = [60, 90, 120, 50];
                                for (var i = 0; i < evals.length; i++) {
                                    var ex = 350 + evals[i] * 80;
                                    ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 3;
                                    ctx.beginPath(); ctx.moveTo(ex, axisY); ctx.lineTo(ex, axisY - heights[i]); ctx.stroke();
                                    ctx.fillStyle = viz.colors.blue;
                                    ctx.beginPath(); ctx.arc(ex, axisY - heights[i], 5, 0, Math.PI * 2); ctx.fill();
                                    viz.screenText('E({' + evals[i] + '})', ex, axisY - heights[i] - 15, viz.colors.blue, 10);
                                }
                                viz.screenText('Discrete spectrum: E = sum of rank-1 projections at eigenvalues', 350, 370, viz.colors.blue, 12);
                                viz.screenText('T = sum lambda_n |e_n><e_n|', 350, 390, viz.colors.teal, 12);

                            } else if (specType === 1) {
                                // Continuous: smooth density
                                ctx.strokeStyle = viz.colors.teal; ctx.lineWidth = 2;
                                ctx.fillStyle = viz.colors.teal + '33';
                                ctx.beginPath();
                                ctx.moveTo(110, axisY);
                                for (var j = 0; j <= 200; j++) {
                                    var lam = -3 + 6 * j / 200;
                                    var px = 350 + lam * 80;
                                    var density = 0.4 * Math.exp(-lam * lam / 2);
                                    var py = axisY - density * 400;
                                    if (j === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                                }
                                ctx.lineTo(590, axisY);
                                ctx.closePath();
                                ctx.fill();
                                ctx.stroke();

                                viz.screenText('Continuous spectrum: E has a smooth spectral density', 350, 370, viz.colors.teal, 12);
                                viz.screenText('d||E(lambda)x||^2 / d lambda = spectral density', 350, 390, viz.colors.text, 12);

                            } else {
                                // Mixed: continuous part + point masses
                                ctx.fillStyle = viz.colors.teal + '22';
                                ctx.strokeStyle = viz.colors.teal; ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                ctx.moveTo(190, axisY);
                                for (var k = 0; k <= 150; k++) {
                                    var lm = -2 + 4 * k / 150;
                                    var pkx = 350 + lm * 80;
                                    var d2 = 0.2 * Math.max(0, 1 - lm * lm / 4);
                                    var pky = axisY - d2 * 350;
                                    if (k === 0) ctx.moveTo(pkx, pky); else ctx.lineTo(pkx, pky);
                                }
                                ctx.lineTo(350 + 2 * 80, axisY);
                                ctx.closePath(); ctx.fill(); ctx.stroke();

                                // Point masses
                                var pts2 = [[-2.5, 80], [2.8, 55]];
                                for (var m = 0; m < pts2.length; m++) {
                                    var mx = 350 + pts2[m][0] * 80;
                                    ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 3;
                                    ctx.beginPath(); ctx.moveTo(mx, axisY); ctx.lineTo(mx, axisY - pts2[m][1]); ctx.stroke();
                                    ctx.fillStyle = viz.colors.orange;
                                    ctx.beginPath(); ctx.arc(mx, axisY - pts2[m][1], 5, 0, Math.PI * 2); ctx.fill();
                                }

                                viz.screenText('Mixed spectrum: continuous part + isolated eigenvalues', 350, 370, viz.colors.white, 12);
                                viz.screenText('Hydrogen atom: continuous [0,inf) + discrete {-1/n^2}', 350, 390, viz.colors.text, 12);
                            }

                            // Interval highlight
                            if (specType < 2) {
                                ctx.fillStyle = viz.colors.yellow + '22';
                                ctx.fillRect(350 - 0.5 * 80, axisY + 25, 1.5 * 80, 20);
                                ctx.strokeStyle = viz.colors.yellow; ctx.lineWidth = 1;
                                ctx.strokeRect(350 - 0.5 * 80, axisY + 25, 1.5 * 80, 20);
                                viz.screenText('E([-0.5, 1]) = projection', 350 + 0.25 * 80, axisY + 50, viz.colors.yellow, 10);
                            }
                        }
                        draw();
                    }
                },
                {
                    id: 'viz-functional-calculus',
                    title: 'Functional Calculus: f(T) from f and Spectrum',
                    description: 'See how a measurable function f applied to T transforms the spectral measure.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 40});
                        var ctx = viz.ctx;
                        var funcType = 0;

                        VizEngine.createButton(controls, 'f(x) = x^2', function() { funcType = 0; draw(); });
                        VizEngine.createButton(controls, 'f(x) = exp(ix)', function() { funcType = 1; draw(); });
                        VizEngine.createButton(controls, 'f(x) = 1/(x-z)', function() { funcType = 2; draw(); });
                        VizEngine.createButton(controls, 'f = indicator', function() { funcType = 3; draw(); });

                        function draw() {
                            viz.clear();

                            // Spectrum of T on top
                            viz.screenText('Spectrum of T (real line)', 200, 20, viz.colors.white, 13);
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(30, 60); ctx.lineTo(370, 60); ctx.stroke();

                            // Eigenvalues
                            var evals = [-2, -1, 0, 1, 2];
                            for (var i = 0; i < evals.length; i++) {
                                var ex = 200 + evals[i] * 50;
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.arc(ex, 60, 5, 0, Math.PI * 2); ctx.fill();
                                viz.screenText(String(evals[i]), ex, 78, viz.colors.text, 10);
                            }

                            // Function graph
                            viz.screenText('f(lambda)', 550, 20, viz.colors.white, 13);
                            var gx = 420, gy = 30, gw = 250, gh = 150;
                            ctx.strokeStyle = viz.colors.grid; ctx.lineWidth = 0.5;
                            ctx.strokeRect(gx, gy, gw, gh);
                            // x-axis in graph
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(gx, gy + gh / 2); ctx.lineTo(gx + gw, gy + gh / 2); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(gx + gw / 2, gy); ctx.lineTo(gx + gw / 2, gy + gh); ctx.stroke();

                            var fname, fvals;
                            if (funcType === 0) {
                                fname = 'f(lambda) = lambda^2';
                                fvals = [4, 1, 0, 1, 4];
                                // Draw parabola
                                ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var j = 0; j <= 100; j++) {
                                    var lam = -3 + 6 * j / 100;
                                    var fl = lam * lam;
                                    var px = gx + gw / 2 + lam * gw / 6;
                                    var py = gy + gh / 2 - fl * gh / 10;
                                    if (j === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                                }
                                ctx.stroke();
                            } else if (funcType === 1) {
                                fname = 'f(lambda) = exp(i lambda)';
                                fvals = ['e^{-2i}', 'e^{-i}', '1', 'e^i', 'e^{2i}'];
                                ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var k = 0; k <= 100; k++) {
                                    var l2 = -3 + 6 * k / 100;
                                    var re = Math.cos(l2);
                                    var pkx = gx + gw / 2 + l2 * gw / 6;
                                    var pky = gy + gh / 2 - re * gh / 3;
                                    if (k === 0) ctx.moveTo(pkx, pky); else ctx.lineTo(pkx, pky);
                                }
                                ctx.stroke();
                                viz.screenText('Re part shown', gx + gw / 2, gy + gh + 15, viz.colors.text, 10);
                            } else if (funcType === 2) {
                                fname = 'f(lambda) = 1/(lambda - 0.5i)';
                                fvals = ['resolvent values...'];
                                ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var m = 0; m <= 100; m++) {
                                    var l3 = -3 + 6 * m / 100;
                                    var mag = 1 / Math.sqrt(l3 * l3 + 0.25);
                                    var pmx = gx + gw / 2 + l3 * gw / 6;
                                    var pmy = gy + gh / 2 - mag * gh / 5;
                                    if (m === 0) ctx.moveTo(pmx, pmy); else ctx.lineTo(pmx, pmy);
                                }
                                ctx.stroke();
                            } else {
                                fname = 'f = chi_{[-1, 1]}';
                                fvals = [0, 1, 1, 1, 0];
                                ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2;
                                var lx = gx + gw / 2 - gw / 6;
                                var rx = gx + gw / 2 + gw / 6;
                                ctx.beginPath();
                                ctx.moveTo(gx, gy + gh / 2); ctx.lineTo(lx, gy + gh / 2);
                                ctx.lineTo(lx, gy + gh / 2 - gh / 4); ctx.lineTo(rx, gy + gh / 2 - gh / 4);
                                ctx.lineTo(rx, gy + gh / 2); ctx.lineTo(gx + gw, gy + gh / 2);
                                ctx.stroke();
                            }
                            viz.screenText(fname, gx + gw / 2, gy + gh + 30, viz.colors.orange, 12);

                            // f(T) result
                            viz.screenText('f(T) = integral f(lambda) dE(lambda)', 350, 230, viz.colors.white, 14);

                            // Arrow
                            ctx.strokeStyle = viz.colors.yellow; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(200, 90); ctx.lineTo(200, 210); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(200, 210); ctx.lineTo(195, 202); ctx.lineTo(205, 202); ctx.closePath();
                            ctx.fillStyle = viz.colors.yellow; ctx.fill();

                            // Spectrum of f(T)
                            viz.screenText('Spectrum of f(T)', 200, 260, viz.colors.teal, 13);
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(30, 290); ctx.lineTo(370, 290); ctx.stroke();

                            if (funcType === 0) {
                                var fev = [0, 1, 4];
                                for (var n = 0; n < fev.length; n++) {
                                    var fx = 200 + fev[n] * 40;
                                    ctx.fillStyle = viz.colors.teal;
                                    ctx.beginPath(); ctx.arc(fx, 290, 5, 0, Math.PI * 2); ctx.fill();
                                    viz.screenText(String(fev[n]), fx, 308, viz.colors.text, 10);
                                }
                                viz.screenText('sigma(T^2) = {0, 1, 4} = {lambda^2 : lambda in sigma(T)}', 350, 350, viz.colors.teal, 12);
                            } else if (funcType === 3) {
                                ctx.fillStyle = viz.colors.teal;
                                ctx.beginPath(); ctx.arc(200, 290, 5, 0, Math.PI * 2); ctx.fill();
                                ctx.beginPath(); ctx.arc(200 + 40, 290, 5, 0, Math.PI * 2); ctx.fill();
                                viz.screenText('0', 200, 308, viz.colors.text, 10);
                                viz.screenText('1', 240, 308, viz.colors.text, 10);
                                viz.screenText('E([-1,1]) is an orthogonal projection (eigenvalues 0 and 1)', 350, 350, viz.colors.teal, 12);
                            } else {
                                viz.screenText('sigma(f(T)) = f(sigma(T)) by the spectral mapping theorem', 350, 350, viz.colors.teal, 12);
                            }
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch18-ex10',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Let T be self-adjoint with spectral measure E. Show that lambda_0 is an eigenvalue of T if and only if E({lambda_0}) != 0, and in that case E({lambda_0}) is the orthogonal projection onto the eigenspace.',
                    hint: 'If Tx = lambda_0 x, show that x is in the range of E({lambda_0}). Conversely, if E({lambda_0})y != 0, show that T(E({lambda_0})y) = lambda_0 E({lambda_0})y.',
                    solution: 'If E({lambda_0}) != 0, pick x = E({lambda_0})y != 0. Then Tx = integral lambda dE(lambda) E({lambda_0})y = integral lambda d(E(lambda)E({lambda_0})y). Since E(A)E({lambda_0}) = E(A intersect {lambda_0}) = lambda_0 if lambda_0 in A and 0 otherwise, we get Tx = lambda_0 x. Conversely, if Tx = lambda_0 x, then 0 = ||(T - lambda_0)x||^2 = integral (lambda - lambda_0)^2 d||E(lambda)x||^2. Since the integrand is non-negative, the measure must be supported at {lambda_0}, so x = E({lambda_0})x. Thus the eigenspace equals ran(E({lambda_0})).'
                },
                {
                    id: 'ch18-ex11',
                    type: 'proof',
                    difficulty: 5,
                    question: 'State and prove the spectral theorem for the multiplication operator M on L^2(R, mu), (Mf)(x) = xf(x), by explicitly constructing its spectral measure.',
                    hint: 'The spectral projection E(A) is multiplication by the indicator function chi_A. Verify all the PVM axioms and the integral formula.',
                    solution: 'Define E(A)f = chi_A f for Borel A subset R. Then: (i) E(empty)f = 0, E(R)f = f. (ii) E(A)E(B)f = chi_A chi_B f = chi_{A intersect B} f = E(A intersect B)f. (iii) For disjoint A_n, chi_{union A_n} = sum chi_{A_n} pointwise, so E(union A_n)f = sum E(A_n)f in L^2 by dominated convergence. Now integral lambda dE(lambda)f = integral lambda chi_{d lambda} f = x f(x) = Mf. Domain: D(M) = {f : integral x^2 |f(x)|^2 dmu < infty} = {f : integral lambda^2 d||E(lambda)f||^2 < infty}. This is the canonical model: every self-adjoint operator is unitarily equivalent to a multiplication operator on some L^2 space.'
                },
                {
                    id: 'ch18-ex12',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Using the functional calculus, show that e^{itT} is a unitary operator for each t in R when T is self-adjoint.',
                    hint: 'Show that (e^{itT})* = e^{-itT} and e^{itT} e^{-itT} = I using properties of the functional calculus.',
                    solution: 'By the functional calculus, f(T)* = conjugate(f)(T) where conjugate(f)(lambda) = conjugate(f(lambda)). For f(lambda) = e^{it lambda}, conjugate(f)(lambda) = e^{-it lambda}, so (e^{itT})* = e^{-itT}. Also, the functional calculus is multiplicative: e^{itT} e^{-itT} = (fg)(T) where g(lambda) = e^{-it lambda}, and f(lambda)g(lambda) = 1 for all lambda. So e^{itT} e^{-itT} = I. Similarly e^{-itT} e^{itT} = I. Hence e^{itT} is unitary.'
                }
            ]
        },
        // ============================================================
        // SECTION 5: Quantum Mechanics Applications
        // ============================================================
        {
            id: 'ch18-sec05',
            title: 'Applications to Quantum Mechanics',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Operators as Observables.</strong> In quantum mechanics, physical observables (position, momentum, energy) are represented by self-adjoint operators on a Hilbert space. The spectral theorem determines the possible measurement outcomes (the spectrum) and the probability of each outcome (the spectral measure). This section shows how the abstract theory of unbounded operators directly models physical reality.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define the position and momentum operators, verify they are self-adjoint (on appropriate domains), prove the canonical commutation relation \([X, P] = i\hbar I\), and discuss Stone's theorem on one-parameter unitary groups and time evolution.</p>
</div>

<div class="bridge-block chapter-closing">
<p><strong>Looking Ahead.</strong> Self-adjoint operators and spectral theory give us the tools for quantum mechanics and PDE. The final chapter, Chapter 19, introduces distributions and Sobolev spaces, the functional-analytic framework for weak solutions of partial differential equations, bringing the entire course full circle from abstract spaces to concrete applications.</p>
</div>

<h2>Applications to Quantum Mechanics</h2>
<p>Quantum mechanics is the primary source and motivation for the theory of unbounded operators. The mathematical framework of quantum mechanics, formalized by von Neumann, is built directly on self-adjoint operators on Hilbert spaces.</p>

<div class="env-block definition">
    <div class="env-title">Definition 18.28 (Quantum Mechanical Framework)</div>
    <div class="env-body"><p>In quantum mechanics:<br>
    (i) <strong>States</strong> are unit vectors \\(\\psi \\in H\\) (up to phase) in a Hilbert space \\(H\\), typically \\(H = L^2(\\mathbb{R}^n)\\).<br>
    (ii) <strong>Observables</strong> are self-adjoint operators \\(T\\) on \\(H\\).<br>
    (iii) The <strong>expected value</strong> of \\(T\\) in state \\(\\psi\\) is \\(\\langle T\\psi, \\psi \\rangle = \\int \\lambda \\, d\\|E(\\lambda)\\psi\\|^2\\).<br>
    (iv) The <strong>probability</strong> of measuring \\(T\\) in a Borel set \\(A\\) is \\(\\|E(A)\\psi\\|^2\\).<br>
    (v) <strong>Time evolution</strong> is governed by \\(\\psi(t) = e^{-iHt/\\hbar}\\psi(0)\\), where \\(H\\) is the Hamiltonian.</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 18.29 (Position Operator)</div>
    <div class="env-body"><p>On \\(H = L^2(\\mathbb{R})\\), the <strong>position operator</strong> is
    \\[(Q\\psi)(x) = x\\psi(x)\\]
    with domain \\(\\mathcal{D}(Q) = \\{\\psi \\in L^2(\\mathbb{R}) : \\int_{-\\infty}^\\infty x^2 |\\psi(x)|^2 \\, dx < \\infty\\}\\). This is the multiplication operator by the coordinate function. It is self-adjoint with purely continuous spectrum \\(\\sigma(Q) = \\mathbb{R}\\) and spectral measure \\(E(A)\\psi = \\chi_A \\psi\\). The expected position is \\(\\langle Q\\psi, \\psi \\rangle = \\int x |\\psi(x)|^2 dx\\).</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 18.30 (Momentum Operator)</div>
    <div class="env-body"><p>The <strong>momentum operator</strong> is
    \\[(P\\psi)(x) = -i\\hbar \\frac{d\\psi}{dx}\\]
    with domain \\(\\mathcal{D}(P) = H^1(\\mathbb{R})\\). On the whole line (not an interval!), \\(P\\) is self-adjoint. Under the Fourier transform \\(\\mathcal{F}\\), \\(P\\) becomes the multiplication operator \\((\\mathcal{F}P\\mathcal{F}^{-1}\\hat{\\psi})(\\xi) = \\hbar\\xi \\hat{\\psi}(\\xi)\\). The spectrum is again \\(\\sigma(P) = \\mathbb{R}\\), purely continuous.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-wave-function"></div>

<div class="env-block theorem">
    <div class="env-title">Theorem 18.31 (Canonical Commutation Relation)</div>
    <div class="env-body"><p>The position and momentum operators satisfy the <strong>canonical commutation relation</strong> (CCR):
    \\[[Q, P]\\psi = QP\\psi - PQ\\psi = i\\hbar \\psi\\]
    for all \\(\\psi\\) in a suitable dense domain. That is, \\([Q, P] = i\\hbar I\\) on this domain. This relation implies that \\(Q\\) and \\(P\\) cannot both be bounded (since \\([A,B] = cI\\) with \\(c \\neq 0\\) is impossible for bounded operators on infinite-dimensional spaces).</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>For \\(\\psi \\in \\mathcal{S}(\\mathbb{R})\\) (Schwartz space):
    \\[(QP\\psi)(x) = x \\cdot (-i\\hbar \\psi'(x)) = -i\\hbar x \\psi'(x),\\]
    \\[(PQ\\psi)(x) = -i\\hbar \\frac{d}{dx}(x\\psi(x)) = -i\\hbar(\\psi(x) + x\\psi'(x)).\\]
    Therefore \\([Q,P]\\psi = -i\\hbar x\\psi' - (-i\\hbar\\psi - i\\hbar x\\psi') = i\\hbar\\psi\\). \\(\\square\\)</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 18.32 (Stone's Theorem)</div>
    <div class="env-body"><p>There is a one-to-one correspondence between self-adjoint operators \\(T\\) on \\(H\\) and strongly continuous one-parameter unitary groups \\(\\{U(t)\\}_{t \\in \\mathbb{R}}\\) on \\(H\\), given by \\(U(t) = e^{itT}\\). The <strong>generator</strong> \\(T\\) is recovered by
    \\[T\\psi = \\lim_{t \\to 0} \\frac{U(t)\\psi - \\psi}{it}\\]
    on the domain of vectors for which this limit exists. Stone's theorem shows that self-adjoint operators are precisely the infinitesimal generators of quantum dynamics.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-qm-operators"></div>

<div class="env-block example">
    <div class="env-title">Example 18.33 (Harmonic Oscillator)</div>
    <div class="env-body"><p>The quantum harmonic oscillator has Hamiltonian \\(H = \\frac{P^2}{2m} + \\frac{1}{2}m\\omega^2 Q^2 = -\\frac{\\hbar^2}{2m}\\frac{d^2}{dx^2} + \\frac{1}{2}m\\omega^2 x^2\\). This is self-adjoint on a suitable domain in \\(L^2(\\mathbb{R})\\). Its spectrum is purely discrete: \\(\\sigma(H) = \\{\\hbar\\omega(n + \\tfrac{1}{2}) : n = 0, 1, 2, \\ldots\\}\\), with eigenfunctions given by Hermite functions.</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark 18.34 (The Uncertainty Principle)</div>
    <div class="env-body"><p>The CCR \\([Q,P] = i\\hbar I\\) implies the <strong>Heisenberg uncertainty principle</strong>: for any state \\(\\psi\\),
    \\[\\Delta Q \\cdot \\Delta P \\geq \\frac{\\hbar}{2},\\]
    where \\(\\Delta Q = \\sqrt{\\langle Q^2\\rangle - \\langle Q\\rangle^2}\\) and similarly for \\(P\\). This is a direct consequence of the Cauchy&ndash;Schwarz inequality applied to the commutator. Perfect knowledge of position (\\(\\Delta Q = 0\\)) implies infinite uncertainty in momentum (\\(\\Delta P = \\infty\\)), and vice versa.</p></div>
</div>`,
            visualizations: [
                {
                    id: 'viz-wave-function',
                    title: 'Position and Momentum Operators on Wave Functions',
                    description: 'Visualize how Q and P act on a Gaussian wave packet, and see the probability density.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 40});
                        var ctx = viz.ctx;
                        var sigma = 1.0;
                        var k0 = 2.0;
                        var time = 0;
                        var running = true;

                        var sigSlider = VizEngine.createSlider(controls, 'Width sigma', 0.3, 3.0, sigma, 0.1, function(v) {
                            sigma = v;
                        });
                        var kSlider = VizEngine.createSlider(controls, 'Momentum k0', 0, 6, k0, 0.5, function(v) {
                            k0 = v;
                        });
                        VizEngine.createButton(controls, 'Reset', function() { time = 0; });

                        function psi(x, t) {
                            // Gaussian wave packet
                            var s2 = sigma * sigma;
                            var env = Math.exp(-x * x / (4 * s2));
                            var phase = k0 * x - 0.5 * k0 * k0 * t;
                            return {re: env * Math.cos(phase), im: env * Math.sin(phase)};
                        }

                        viz.animate(function(t) {
                            time = t * 0.002;
                            viz.clear();

                            var axisY1 = 140;
                            var axisY2 = 320;
                            var leftX = 60, rightX = 640;
                            var W = rightX - leftX;
                            var xMin = -6, xMax = 6;

                            // Top plot: |psi(x)|^2
                            viz.screenText('|psi(x)|^2 = probability density (Q measures this)', 350, 18, viz.colors.blue, 13);
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(leftX, axisY1); ctx.lineTo(rightX, axisY1); ctx.stroke();

                            ctx.fillStyle = viz.colors.blue + '33';
                            ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2;
                            ctx.beginPath();
                            var first = true;
                            for (var j = 0; j <= 300; j++) {
                                var x = xMin + (xMax - xMin) * j / 300;
                                var p = psi(x, 0);
                                var prob = p.re * p.re + p.im * p.im;
                                var px = leftX + j / 300 * W;
                                var py = axisY1 - prob * 100;
                                if (first) { ctx.moveTo(px, py); first = false; } else ctx.lineTo(px, py);
                            }
                            ctx.stroke();
                            // Fill
                            ctx.lineTo(rightX, axisY1);
                            ctx.lineTo(leftX, axisY1);
                            ctx.closePath(); ctx.fill();

                            // Expected position
                            viz.screenText('<Q> = integral x |psi|^2 dx = 0', leftX + 10, axisY1 - 110, viz.colors.yellow, 11, 'left');

                            // Bottom plot: Re(psi) showing oscillation (momentum)
                            viz.screenText('Re(psi(x)): oscillations encode momentum (P = -i hbar d/dx)', 350, axisY1 + 25, viz.colors.teal, 13);
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(leftX, axisY2); ctx.lineTo(rightX, axisY2); ctx.stroke();

                            ctx.strokeStyle = viz.colors.teal; ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var k = 0; k <= 300; k++) {
                                var x2 = xMin + (xMax - xMin) * k / 300;
                                var p2 = psi(x2, 0);
                                var pkx = leftX + k / 300 * W;
                                var pky = axisY2 - p2.re * 80;
                                if (k === 0) ctx.moveTo(pkx, pky); else ctx.lineTo(pkx, pky);
                            }
                            ctx.stroke();

                            // Im part dashed
                            ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 1.5;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath();
                            for (var m = 0; m <= 300; m++) {
                                var x3 = xMin + (xMax - xMin) * m / 300;
                                var p3 = psi(x3, 0);
                                var pmx = leftX + m / 300 * W;
                                var pmy = axisY2 - p3.im * 80;
                                if (m === 0) ctx.moveTo(pmx, pmy); else ctx.lineTo(pmx, pmy);
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            viz.screenText('<P> = hbar k0 = ' + k0.toFixed(1) + ' hbar', leftX + 10, axisY2 - 80, viz.colors.yellow, 11, 'left');
                            viz.screenText('Re(psi)', rightX + 5, axisY2 - 30, viz.colors.teal, 10, 'left');
                            viz.screenText('Im(psi)', rightX + 5, axisY2 - 10, viz.colors.orange, 10, 'left');

                            // Uncertainty
                            var dq = sigma;
                            var dp = 1 / (2 * sigma);
                            viz.screenText('Delta Q = ' + dq.toFixed(2) + ',  Delta P = ' + dp.toFixed(2) + ',  Delta Q * Delta P = ' + (dq * dp).toFixed(2) + ' >= 1/2', 350, 400, viz.colors.yellow, 12);
                        });
                    }
                },
                {
                    id: 'viz-qm-operators',
                    title: 'Quantum Operators and Time Evolution',
                    description: 'Watch a quantum state evolve under the harmonic oscillator Hamiltonian via the unitary group e^{-iHt}.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 40});
                        var ctx = viz.ctx;
                        var speed = 1.0;
                        var nMax = 4;
                        var coeffs = [0.5, 0.5, 0.3, 0.2, 0.1];

                        VizEngine.createSlider(controls, 'Speed', 0.1, 3.0, speed, 0.1, function(v) { speed = v; });
                        VizEngine.createButton(controls, 'Ground State', function() {
                            coeffs = [1, 0, 0, 0, 0]; normalize();
                        });
                        VizEngine.createButton(controls, 'Superposition', function() {
                            coeffs = [0.5, 0.5, 0.3, 0.2, 0.1]; normalize();
                        });
                        VizEngine.createButton(controls, 'Coherent-like', function() {
                            coeffs = [0.6, 0.5, 0.35, 0.2, 0.1]; normalize();
                        });

                        function normalize() {
                            var norm = 0;
                            for (var i = 0; i < coeffs.length; i++) norm += coeffs[i] * coeffs[i];
                            norm = Math.sqrt(norm);
                            for (var j = 0; j < coeffs.length; j++) coeffs[j] /= norm;
                        }
                        normalize();

                        // Hermite functions (pre-computed for n=0..4)
                        function hermiteFunc(n, x) {
                            var g = Math.exp(-x * x / 2);
                            if (n === 0) return 0.7511 * g;
                            if (n === 1) return 1.0627 * x * g;
                            if (n === 2) return 0.5311 * (2 * x * x - 1) * g;
                            if (n === 3) return 0.3066 * (2 * x * x * x - 3 * x) * g;
                            if (n === 4) return 0.1533 * (4 * x * x * x * x - 12 * x * x + 3) * g;
                            return 0;
                        }

                        viz.animate(function(t) {
                            var time = t * 0.001 * speed;
                            viz.clear();

                            viz.screenText('Harmonic Oscillator: psi(x,t) = sum c_n e^{-i E_n t} phi_n(x)', 350, 18, viz.colors.white, 13);

                            var axisY = 280;
                            var leftX = 60, rightX = 640, W = rightX - leftX;
                            var xMin = -5, xMax = 5;

                            // Potential well
                            ctx.strokeStyle = viz.colors.grid; ctx.lineWidth = 1;
                            ctx.beginPath();
                            for (var v = 0; v <= 200; v++) {
                                var xv = xMin + (xMax - xMin) * v / 200;
                                var pot = 0.5 * xv * xv;
                                var pvx = leftX + v / 200 * W;
                                var pvy = axisY - pot * 30;
                                if (v === 0) ctx.moveTo(pvx, pvy); else ctx.lineTo(pvx, pvy);
                            }
                            ctx.stroke();
                            viz.screenText('V(x) = x^2/2', rightX - 40, 100, viz.colors.grid, 10);

                            // Energy levels
                            for (var n = 0; n <= nMax; n++) {
                                var en = n + 0.5;
                                var ey = axisY - en * 30;
                                if (ey > 30) {
                                    ctx.strokeStyle = viz.colors.axis + '66'; ctx.lineWidth = 0.5;
                                    ctx.setLineDash([3, 3]);
                                    ctx.beginPath(); ctx.moveTo(leftX, ey); ctx.lineTo(rightX, ey); ctx.stroke();
                                    ctx.setLineDash([]);
                                    viz.screenText('E' + n + '=' + en.toFixed(1), rightX + 5, ey, viz.colors.text, 9, 'left');
                                }
                            }

                            // Axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(leftX, axisY); ctx.lineTo(rightX, axisY); ctx.stroke();

                            // Compute psi(x,t) = sum c_n e^{-i(n+0.5)t} phi_n(x)
                            ctx.fillStyle = viz.colors.blue + '33';
                            ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2;
                            ctx.beginPath();
                            var pts = [];
                            for (var j = 0; j <= 300; j++) {
                                var xx = xMin + (xMax - xMin) * j / 300;
                                var reP = 0, imP = 0;
                                for (var nn = 0; nn <= nMax; nn++) {
                                    var phi = hermiteFunc(nn, xx);
                                    var phase = -(nn + 0.5) * time;
                                    reP += coeffs[nn] * phi * Math.cos(phase);
                                    imP += coeffs[nn] * phi * Math.sin(phase);
                                }
                                var prob2 = reP * reP + imP * imP;
                                pts.push({x: xx, prob: prob2, re: reP, im: imP});
                                var pjx = leftX + j / 300 * W;
                                var pjy = axisY - prob2 * 200;
                                if (j === 0) ctx.moveTo(pjx, pjy); else ctx.lineTo(pjx, pjy);
                            }
                            ctx.stroke();
                            // Fill
                            var lastPx = leftX + W;
                            ctx.lineTo(lastPx, axisY);
                            ctx.lineTo(leftX, axisY);
                            ctx.closePath(); ctx.fill();

                            // Re(psi) trace
                            ctx.strokeStyle = viz.colors.teal; ctx.lineWidth = 1;
                            ctx.beginPath();
                            for (var k = 0; k <= 300; k++) {
                                var pkx2 = leftX + k / 300 * W;
                                var pky2 = axisY - pts[k].re * 120;
                                if (k === 0) ctx.moveTo(pkx2, pky2); else ctx.lineTo(pkx2, pky2);
                            }
                            ctx.stroke();

                            // Legend
                            ctx.fillStyle = viz.colors.blue; ctx.fillRect(leftX, axisY + 20, 12, 3);
                            viz.screenText('|psi(x,t)|^2', leftX + 18, axisY + 22, viz.colors.blue, 11, 'left');
                            ctx.fillStyle = viz.colors.teal; ctx.fillRect(leftX + 150, axisY + 20, 12, 3);
                            viz.screenText('Re(psi)', leftX + 168, axisY + 22, viz.colors.teal, 11, 'left');

                            // Expected position
                            var avgX = 0, totalProb = 0;
                            for (var m = 0; m < pts.length; m++) {
                                avgX += pts[m].x * pts[m].prob;
                                totalProb += pts[m].prob;
                            }
                            avgX /= totalProb;

                            var markerX = leftX + (avgX - xMin) / (xMax - xMin) * W;
                            ctx.strokeStyle = viz.colors.yellow; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(markerX, axisY - 5); ctx.lineTo(markerX, axisY + 5); ctx.stroke();
                            viz.screenText('<Q>(t) = ' + avgX.toFixed(2), 350, axisY + 50, viz.colors.yellow, 12);

                            viz.screenText('e^{-iHt} evolves the state; Stone\'s theorem guarantees unitarity', 350, 405, viz.colors.text, 11);
                        });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch18-ex13',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Verify the canonical commutation relation [Q, P] = i hbar I directly on the Schwartz space S(R). Why can\'t both Q and P be bounded operators?',
                    hint: 'Compute QP psi and PQ psi explicitly. For the second part, recall that Tr([A,B]) = 0 for bounded operators on a finite-dimensional space, and extend this reasoning.',
                    solution: '(QP psi)(x) = x(-i hbar psi\'(x)) = -i hbar x psi\'(x). (PQ psi)(x) = -i hbar d/dx(x psi(x)) = -i hbar(psi(x) + x psi\'(x)). So [Q,P]psi = -i hbar x psi\' - (-i hbar psi - i hbar x psi\') = i hbar psi. For boundedness: if Q, P were both bounded, then [Q,P] = i hbar I would be bounded with ||[Q,P]|| = hbar. But for any bounded A, B, we have ||[A,B]|| <= 2||A|| ||B||. Taking the n-th power: [Q, P^n] = in hbar P^{n-1}, so n hbar ||P^{n-1}|| <= 2||Q|| ||P^n|| <= 2||Q|| ||P|| ||P^{n-1}||. This gives n hbar <= 2||Q|| ||P|| for all n, a contradiction.'
                },
                {
                    id: 'ch18-ex14',
                    type: 'proof',
                    difficulty: 5,
                    question: 'Prove the uncertainty principle: for self-adjoint A, B and any state psi, (Delta A)(Delta B) >= (1/2)|<[A,B] psi, psi>|.',
                    hint: 'Let A\' = A - <A>I and B\' = B - <B>I. Apply Cauchy-Schwarz to <A\' psi, B\' psi> and take the imaginary part.',
                    solution: 'Let a = <A psi, psi>, b = <B psi, psi>, A\' = A - aI, B\' = B - bI. Then (Delta A)^2 = ||A\' psi||^2, (Delta B)^2 = ||B\' psi||^2. By Cauchy-Schwarz: ||A\' psi||^2 ||B\' psi||^2 >= |<A\' psi, B\' psi>|^2. Now <A\' psi, B\' psi> = <A\'B\' psi, psi> (since A\' is self-adjoint). Write A\'B\' = (1/2)(A\'B\' + B\'A\') + (1/2)(A\'B\' - B\'A\'). The first term is self-adjoint so its expectation is real; the second equals (1/2)[A\',B\'] = (1/2)[A,B] and is anti-self-adjoint so its expectation is purely imaginary. Therefore |<A\' psi, B\' psi>|^2 >= |Im <A\' psi, B\' psi>|^2 = (1/4)|<[A,B]psi, psi>|^2. Taking square roots: Delta A Delta B >= (1/2)|<[A,B]psi, psi>|.'
                },
                {
                    id: 'ch18-ex15',
                    type: 'proof',
                    difficulty: 5,
                    question: 'Let {U(t)} be a strongly continuous one-parameter unitary group on H. Define D(T) = {psi in H : lim_{t->0} (U(t)psi - psi)/(it) exists} and Tpsi = this limit. Show that T is self-adjoint (this is Stone\'s theorem, the non-trivial direction).',
                    hint: 'Show T is symmetric first. Then show ran(T +- iI) = H by considering the integrals integral_0^infty e^{-epsilon t} e^{mp t} U(t) psi dt as epsilon -> 0+.',
                    solution: 'Symmetry: <Tpsi, phi> = lim <(U(t)-I)psi/(it), phi> = lim <psi, (U(t)^*-I)phi/(it)>^* = lim <psi, (U(-t)-I)phi/(it)>^* = <psi, T phi>. For surjectivity of T+iI: given f in H, define R_epsilon(f) = integral_0^infty e^{-(1+epsilon)t} U(t)f dt (convergent for epsilon > 0). One shows R_epsilon(f) is in D(T) and (T+iI)R_epsilon(f) converges to f as epsilon -> 0+. Similarly for T-iI using integral over negative t. Since ran(T+iI) and ran(T-iI) are both dense and closed (T is closed as a limit of bounded operators), they equal H. So the deficiency indices are (0,0) and T is self-adjoint.'
                }
            ]
        }
    ]
});
