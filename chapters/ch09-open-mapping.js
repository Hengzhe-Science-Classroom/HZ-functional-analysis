window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch09',
    number: 9,
    title: 'Open Mapping & Closed Graph Theorems',
    subtitle: 'Structure theorems for Banach spaces',
    sections: [
        // ============================================================
        // SECTION 1: Open Mappings
        // ============================================================
        {
            id: 'ch09-sec01',
            title: 'Open Mappings',
            content: `
<div class="bridge-block chapter-opening">
<p><strong>Structure Theorems for Banach Spaces.</strong> The Hahn-Banach Theorem (Chapter 6) extended functionals; the Uniform Boundedness Principle (Chapter 8) controlled families of operators. Now we complete the trio of "big theorems" with the Open Mapping Theorem and the Closed Graph Theorem. These results reveal that Banach spaces have a remarkable rigidity: bijective bounded maps are automatically isomorphisms, and operators with closed graphs are automatically bounded.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> Before proving the Open Mapping Theorem, we study open maps in their own right. We define what it means for a map to send open sets to open sets, characterize openness via the ball criterion, and see why non-surjective maps typically fail to be open.</p>
</div>

<h2>Open Mappings</h2>
<p>In topology, a continuous map sends open sets to... well, not necessarily open sets. The concept of an <em>open mapping</em> captures a stronger structural property that plays a central role in functional analysis.</p>

<div class="env-block definition">
    <div class="env-title">Definition 9.1 (Open Mapping)</div>
    <div class="env-body"><p>A map \\(T: X \\to Y\\) between topological spaces is called an <strong>open mapping</strong> (or <strong>open map</strong>) if for every open set \\(U \\subseteq X\\), the image \\(T(U)\\) is open in \\(Y\\).</p></div>
</div>

<p>For linear maps between normed spaces, openness has a clean characterization in terms of balls.</p>

<div class="env-block proposition">
    <div class="env-title">Proposition 9.2 (Ball Criterion for Openness)</div>
    <div class="env-body"><p>A bounded linear map \\(T: X \\to Y\\) between normed spaces is open if and only if there exists \\(\\delta > 0\\) such that</p>
    \\[B_Y(0, \\delta) \\subseteq T(B_X(0, 1)).\\]
    <p>Equivalently, \\(T\\) is open iff \\(T(B_X(0,r))\\) contains a ball around \\(0\\) in \\(Y\\) for every \\(r > 0\\).</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>If \\(T\\) is open, then \\(T(B_X(0,1))\\) is open and contains \\(T(0) = 0\\), so it contains some ball \\(B_Y(0, \\delta)\\).</p>
    <p>Conversely, suppose \\(B_Y(0,\\delta) \\subseteq T(B_X(0,1))\\). Let \\(U \\subseteq X\\) be open and \\(y_0 = Tx_0 \\in T(U)\\). Since \\(U\\) is open, \\(B_X(x_0, r) \\subseteq U\\) for some \\(r > 0\\). By linearity,</p>
    \\[T(B_X(x_0, r)) = Tx_0 + T(B_X(0, r)) = y_0 + rT(B_X(0,1)) \\supseteq y_0 + B_Y(0, r\\delta) = B_Y(y_0, r\\delta).\\]
    <p>So \\(T(U)\\) contains a ball around each of its points, hence is open. \\(\\blacksquare\\)</p></div>
</div>

<h3>Examples and Non-examples</h3>

<div class="env-block example">
    <div class="env-title">Example 9.3 (Surjections That Are Not Open)</div>
    <div class="env-body"><p><strong>(a)</strong> Consider \\(f: \\mathbb{R}^2 \\to \\mathbb{R}\\), \\(f(x,y) = x^2\\). This is continuous and surjective onto \\([0,\\infty)\\), but the image of the open ball \\(B((0,0),1)\\) is \\([0,1)\\), which is not open in \\(\\mathbb{R}\\). So \\(f\\) is not an open map. (This is nonlinear.)</p>
    <p><strong>(b)</strong> The inclusion \\(\\iota: (C^1[0,1], \\|\\cdot\\|_{C^1}) \\hookrightarrow (C[0,1], \\|\\cdot\\|_\\infty)\\) is bounded and injective but not surjective, and it is not an open map: the \\(C^1\\)-unit ball maps to a "thin" set in the sup-norm topology.</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 9.4 (Projections Are Open)</div>
    <div class="env-body"><p>If \\(X = X_1 \\times X_2\\) is a product of normed spaces, the canonical projection \\(\\pi_1: X \\to X_1\\) given by \\(\\pi_1(x_1, x_2) = x_1\\) is a bounded linear surjection and an open map. Indeed, \\(\\pi_1(B_X(0,r)) \\supseteq B_{X_1}(0,r)\\).</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Key Insight</div>
    <div class="env-body"><p>For general continuous maps, being surjective does not imply openness. The remarkable content of the Open Mapping Theorem is that for <em>bounded linear</em> maps between <em>Banach</em> spaces, surjectivity <em>does</em> imply openness. Both completeness and linearity are essential.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-open-vs-not-open"></div>
<div class="viz-placeholder" data-viz="viz-ball-criterion"></div>`,
            visualizations: [
                {
                    id: 'viz-open-vs-not-open',
                    title: 'Open vs Non-Open Maps',
                    description: 'Compare how an open linear map and a non-open nonlinear map transform an open disk.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 340, scale: 50});
                        var ctx = viz.ctx;
                        viz.originX = 180;
                        viz.originY = 170;

                        var mapType = 0; // 0 = open linear, 1 = non-open
                        VizEngine.createButton(controls, 'Open Linear Map', function() { mapType = 0; });
                        VizEngine.createButton(controls, 'Non-Open Map (x^2)', function() { mapType = 1; });

                        function draw() {
                            viz.clear();

                            // Domain side
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Domain X', 180, 20);
                            ctx.fillText('Codomain Y', 530, 20);

                            // Draw domain ball
                            viz.drawGrid(1);
                            viz.drawAxes();
                            viz.drawCircle(0, 0, 1.5, viz.colors.blue + '22', viz.colors.blue, 2);
                            viz.drawText('B(0,1.5)', 0, -1.9, viz.colors.blue, 12);

                            // Arrow
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(310, 170);
                            ctx.lineTo(360, 170);
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.white;
                            ctx.beginPath();
                            ctx.moveTo(365, 170);
                            ctx.lineTo(355, 165);
                            ctx.lineTo(355, 175);
                            ctx.closePath();
                            ctx.fill();
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(mapType === 0 ? 'T(x,y) = (2x+y, x+y)' : 'f(x,y) = (x\u00B2, y)', 337, 155);

                            // Codomain side
                            ctx.save();
                            var cx2 = 530, cy2 = 170;
                            if (mapType === 0) {
                                // Linear map: [[2,1],[1,1]]
                                var N = 80;
                                ctx.fillStyle = viz.colors.green + '33';
                                ctx.strokeStyle = viz.colors.green;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i <= N; i++) {
                                    var th = 2 * Math.PI * i / N;
                                    var px = 1.5 * Math.cos(th);
                                    var py = 1.5 * Math.sin(th);
                                    var tx = 2 * px + py;
                                    var ty = px + py;
                                    var sx = cx2 + tx * 50;
                                    var sy = cy2 - ty * 50;
                                    if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                                }
                                ctx.closePath();
                                ctx.fill();
                                ctx.stroke();

                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('T(B) is open (ellipse)', cx2, cy2 + 120);
                                ctx.fillStyle = viz.colors.green;
                                ctx.fillText('Contains a ball around 0', cx2, cy2 + 136);
                            } else {
                                // f(x,y) = (x^2, y): image of disk is not open
                                var N2 = 200;
                                ctx.fillStyle = viz.colors.orange + '33';
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i2 = 0; i2 <= N2; i2++) {
                                    var th2 = 2 * Math.PI * i2 / N2;
                                    var px2 = 1.5 * Math.cos(th2);
                                    var py2 = 1.5 * Math.sin(th2);
                                    var tx2 = px2 * px2; // x^2
                                    var ty2 = py2;
                                    var sx2 = cx2 + tx2 * 50 - 60;
                                    var sy2 = cy2 - ty2 * 50;
                                    if (i2 === 0) ctx.moveTo(sx2, sy2); else ctx.lineTo(sx2, sy2);
                                }
                                ctx.closePath();
                                ctx.fill();
                                ctx.stroke();

                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('f(B) has boundary at x=0', cx2, cy2 + 120);
                                ctx.fillStyle = viz.colors.orange;
                                ctx.fillText('Not open! (boundary included)', cx2, cy2 + 136);
                            }
                            ctx.restore();
                        }

                        draw();
                        setInterval(draw, 200);
                    }
                },
                {
                    id: 'viz-ball-criterion',
                    title: 'Ball Criterion for Openness',
                    description: 'Drag the matrix entries to see when T(B(0,1)) contains a ball around 0.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 340, scale: 40});
                        var ctx = viz.ctx;
                        viz.originX = 180;
                        viz.originY = 170;

                        var a = 2, b = 0.5, c = 0.3, d = 1.5;
                        var sliderA = VizEngine.createSlider(controls, 'a=', -3, 3, a, 0.1, function(v) { a = v; draw(); });
                        var sliderB = VizEngine.createSlider(controls, 'b=', -3, 3, b, 0.1, function(v) { b = v; draw(); });
                        var sliderC = VizEngine.createSlider(controls, 'c=', -3, 3, c, 0.1, function(v) { c = v; draw(); });
                        var sliderD = VizEngine.createSlider(controls, 'd=', -3, 3, d, 0.1, function(v) { d = v; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            // Domain unit circle
                            viz.drawCircle(0, 0, 1, viz.colors.blue + '15', viz.colors.blue, 1.5);

                            // Image of unit circle under T = [[a,b],[c,d]]
                            var det = a * d - b * c;
                            var N = 100;
                            ctx.fillStyle = viz.colors.green + '22';
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;

                            var cx2 = 520, cy2 = 170, sc2 = 40;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var px = Math.cos(th);
                                var py = Math.sin(th);
                                var tx = a * px + b * py;
                                var ty = c * px + d * py;
                                var sx = cx2 + tx * sc2;
                                var sy = cy2 - ty * sc2;
                                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                            }
                            ctx.closePath();
                            ctx.fill();
                            ctx.stroke();

                            // Show inner ball radius = smallest singular value
                            var ata00 = a * a + c * c;
                            var ata01 = a * b + c * d;
                            var ata11 = b * b + d * d;
                            var tr = ata00 + ata11;
                            var detATA = ata00 * ata11 - ata01 * ata01;
                            var disc = tr * tr - 4 * detATA;
                            var sigMin = disc >= 0 ? Math.sqrt(Math.max(0, (tr - Math.sqrt(disc)) / 2)) : 0;

                            if (sigMin > 0.01) {
                                ctx.strokeStyle = viz.colors.yellow;
                                ctx.lineWidth = 1.5;
                                ctx.setLineDash([5, 3]);
                                ctx.beginPath();
                                ctx.arc(cx2, cy2, sigMin * sc2, 0, Math.PI * 2);
                                ctx.stroke();
                                ctx.setLineDash([]);
                            }

                            // Labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Domain', 180, 20);
                            ctx.fillText('Image T(B(0,1))', cx2, 20);

                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.fillText('Inner ball radius \u03B4 = \u03C3_min = ' + sigMin.toFixed(3), cx2, cy2 + 140);
                            ctx.fillStyle = Math.abs(det) < 0.01 ? viz.colors.red : viz.colors.green;
                            ctx.fillText('det(T) = ' + det.toFixed(3) + (Math.abs(det) < 0.01 ? ' (singular!)' : ' (invertible)'), cx2, cy2 + 158);

                            // Arrow
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(290, 170); ctx.lineTo(370, 170); ctx.stroke();
                            ctx.fillStyle = viz.colors.white;
                            ctx.beginPath(); ctx.moveTo(375, 170); ctx.lineTo(365, 165); ctx.lineTo(365, 175); ctx.closePath(); ctx.fill();
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('T = [[a,b],[c,d]]', 332, 155);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let T: R^2 -> R^2 be the linear map T(x,y) = (x + y, 0). Is T an open map? Explain using the ball criterion.',
                    hint: 'What is the image of the open unit ball? Does it contain any open ball in R^2?',
                    solution: 'T is not surjective: T(R^2) = R x {0}, which is a proper closed subspace. The image of any open set in R^2 lands in this line and cannot contain an open ball in R^2. So T is not open. Alternatively, T(B(0,1)) = (-2,2) x {0}, which does not contain any ball B_R^2(0, delta). The ball criterion fails.'
                },
                {
                    question: 'Show that if T: X -> Y is a bounded linear surjection and an open map, then T maps closed sets to closed sets (i.e., T is also a closed map).',
                    hint: 'Use the fact that T is surjective and open. If F is closed, consider Y \\ T(F).',
                    solution: 'Let F be closed in X. We want to show T(F) is closed, i.e., Y \\ T(F) is open. Since T is surjective, Y \\ T(F) = T(X \\ F). Since F is closed, X \\ F is open. Since T is an open map, T(X \\ F) is open. Hence Y \\ T(F) is open, so T(F) is closed. Note: this argument uses surjectivity; for non-surjective maps, the conclusion can fail.'
                },
                {
                    question: 'Let X = (C[0,1], ||.||_inf) and define T: X -> X by (Tf)(t) = integral from 0 to t of f(s) ds. Is T an open map?',
                    hint: 'Is T surjective? Think about the range of T.',
                    solution: 'T maps into the subspace {g in C[0,1] : g(0) = 0, g in C^1[0,1]}, which is a proper subspace of C[0,1]. Since T is not surjective, it cannot be an open map (the image of the unit ball is contained in this proper subspace and cannot contain an open ball in C[0,1]). This also follows from the Open Mapping Theorem contrapositive: if T were open, it would be surjective onto a Banach space, but its range is not all of X.'
                }
            ]
        },
        // ============================================================
        // SECTION 2: The Open Mapping Theorem
        // ============================================================
        {
            id: 'ch09-sec02',
            title: 'The Open Mapping Theorem',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Surjectivity Implies Openness.</strong> The Open Mapping Theorem (Banach-Schauder Theorem) is a deep result: every surjective bounded linear operator between Banach spaces is an open map. The proof uses the Baire Category Theorem to show that the image of the unit ball contains a ball around the origin.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove the Open Mapping Theorem in two stages: first showing the image of the unit ball is "almost" a ball (Baire category), then bootstrapping to an exact ball (completeness and iteration). We highlight that both domain and codomain must be complete.</p>
</div>

<h2>The Open Mapping Theorem</h2>
<p>The Open Mapping Theorem (also called the Banach-Schauder theorem) is one of the cornerstones of functional analysis. It says that a surjective bounded linear operator between Banach spaces is automatically an open map. The proof uses the Baire Category Theorem in a fundamental way.</p>

<div class="env-block theorem">
    <div class="env-title">Theorem 9.5 (Open Mapping Theorem)</div>
    <div class="env-body"><p>Let \\(X\\) and \\(Y\\) be Banach spaces and let \\(T: X \\to Y\\) be a bounded linear surjection. Then \\(T\\) is an open map. In particular, there exists \\(\\delta > 0\\) such that</p>
    \\[B_Y(0, \\delta) \\subseteq T(B_X(0, 1)).\\]</div>
</div>

<p>The proof proceeds in two stages. First, we show that the <em>closure</em> of \\(T(B_X(0,1))\\) contains a ball (using Baire). Then, we use completeness to "open up" the closure.</p>

<div class="env-block lemma">
    <div class="env-title">Lemma 9.6 (Baire Step)</div>
    <div class="env-body"><p>Under the hypotheses of Theorem 9.5, \\(\\overline{T(B_X(0,1))}\\) has nonempty interior in \\(Y\\). In fact, there exists \\(\\eta > 0\\) with \\(B_Y(0, \\eta) \\subseteq \\overline{T(B_X(0, 1))}\\).</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof of Lemma 9.6</div>
    <div class="env-body"><p>Since \\(T\\) is surjective,</p>
    \\[Y = T(X) = \\bigcup_{n=1}^{\\infty} T(B_X(0, n)) = \\bigcup_{n=1}^{\\infty} n \\cdot T(B_X(0, 1)).\\]
    <p>Since \\(Y\\) is a Banach space (hence a complete metric space), the Baire Category Theorem implies \\(Y\\) is not a countable union of nowhere dense sets. Therefore, at least one \\(n \\cdot \\overline{T(B_X(0,1))}\\) has nonempty interior. By scaling, \\(\\overline{T(B_X(0, 1))}\\) itself has nonempty interior: there exist \\(y_0 \\in Y\\) and \\(r > 0\\) with</p>
    \\[B_Y(y_0, r) \\subseteq \\overline{T(B_X(0, 1))}.\\]
    <p>Since \\(\\overline{T(B_X(0,1))}\\) is symmetric (if \\(y \\in \\overline{T(B_X(0,1))}\\), then \\(-y \\in \\overline{T(B_X(0,1))}\\)) and convex, we get</p>
    \\[B_Y(0, r) \\subseteq \\overline{T(B_X(0, 1))},\\]
    <p>by the standard midpoint argument: if \\(\\|y\\| < r\\), then \\(y_0 + y\\) and \\(-y_0 + y\\) are both approximable, and \\(y = \\frac{1}{2}(y_0 + y) + \\frac{1}{2}(-y_0 + y)\\). \\(\\blacksquare\\)</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof of Theorem 9.5 (Opening-Up Step)</div>
    <div class="env-body"><p>By Lemma 9.6, choose \\(\\eta > 0\\) with \\(B_Y(0, \\eta) \\subseteq \\overline{T(B_X(0, 1))}\\). By scaling, for each \\(k \\geq 1\\):</p>
    \\[B_Y(0, \\eta / 2^k) \\subseteq \\overline{T(B_X(0, 1/2^k))}.\\]
    <p>Let \\(y \\in B_Y(0, \\eta)\\). We construct \\(x \\in X\\) with \\(Tx = y\\) and \\(\\|x\\| < 2\\).</p>
    <p><strong>Step 1:</strong> Since \\(y \\in B_Y(0, \\eta) \\subseteq \\overline{T(B_X(0,1))}\\), find \\(x_1 \\in B_X(0,1)\\) with \\(\\|y - Tx_1\\| < \\eta/2\\).</p>
    <p><strong>Step 2:</strong> Since \\(y - Tx_1 \\in B_Y(0, \\eta/2) \\subseteq \\overline{T(B_X(0, 1/2))}\\), find \\(x_2 \\in B_X(0, 1/2)\\) with \\(\\|y - Tx_1 - Tx_2\\| < \\eta/4\\).</p>
    <p><strong>Inductively:</strong> Obtain \\(x_k \\in B_X(0, 1/2^{k-1})\\) with \\(\\|y - T(x_1 + \\cdots + x_k)\\| < \\eta/2^k\\).</p>
    <p>Set \\(x = \\sum_{k=1}^{\\infty} x_k\\). This converges in \\(X\\) (since \\(X\\) is Banach and \\(\\sum \\|x_k\\| < 1 + 1/2 + 1/4 + \\cdots = 2\\)), and \\(Tx = y\\) by continuity of \\(T\\). Since \\(\\|x\\| < 2\\), we have shown</p>
    \\[B_Y(0, \\eta) \\subseteq T(B_X(0, 2)),\\]
    <p>or equivalently \\(B_Y(0, \\eta/2) \\subseteq T(B_X(0, 1))\\). Setting \\(\\delta = \\eta/2\\) completes the proof. \\(\\blacksquare\\)</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark 9.7</div>
    <div class="env-body"><p>Both completeness assumptions are essential:</p>
    <ul>
        <li>If \\(X\\) is not complete, the opening-up step fails (the series \\(\\sum x_k\\) may not converge).</li>
        <li>If \\(Y\\) is not complete, the Baire step fails (\\(Y\\) may be a countable union of nowhere dense sets).</li>
    </ul>
    <p>Linearity is also crucial: there exist continuous nonlinear surjections between Banach spaces that are not open.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-omt-mapping-balls"></div>
<div class="viz-placeholder" data-viz="viz-omt-iterative-construction"></div>`,
            visualizations: [
                {
                    id: 'viz-omt-mapping-balls',
                    title: 'Open Mapping Theorem: Balls Map to Sets Containing Balls',
                    description: 'Visualize how a surjective linear map sends open balls to sets that contain open balls.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 360, scale: 45});
                        var ctx = viz.ctx;
                        viz.originX = 175;
                        viz.originY = 180;

                        var radius = 1.0;
                        VizEngine.createSlider(controls, 'Ball radius r=', 0.3, 3, radius, 0.1, function(v) { radius = v; });

                        // Surjective 2x2 matrix
                        var mat = [[1.8, 0.6], [0.4, 1.2]];

                        function draw(t) {
                            viz.clear();
                            var pulse = 0.5 + 0.5 * Math.sin(t / 600);

                            // Domain
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Banach space X', 175, 18);

                            viz.drawGrid(1);
                            viz.drawAxes();
                            viz.drawCircle(0, 0, radius, viz.colors.blue + '20', viz.colors.blue, 2);
                            viz.drawText('B(0,r)', 0, -radius - 0.5, viz.colors.blue, 12);

                            // Arrow
                            ctx.strokeStyle = viz.colors.white; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(300, 180); ctx.lineTo(365, 180); ctx.stroke();
                            ctx.fillStyle = viz.colors.white;
                            ctx.beginPath(); ctx.moveTo(370, 180); ctx.lineTo(360, 175); ctx.lineTo(360, 185); ctx.closePath(); ctx.fill();
                            ctx.fillStyle = viz.colors.text; ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('T (surjective)', 335, 165);

                            // Codomain
                            var cx2 = 530, cy2 = 180, sc = 45;
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillText('Banach space Y', cx2, 18);

                            // Image ellipse
                            var N = 120;
                            ctx.fillStyle = viz.colors.green + '25';
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var px = radius * Math.cos(th);
                                var py = radius * Math.sin(th);
                                var tx = mat[0][0] * px + mat[0][1] * py;
                                var ty = mat[1][0] * px + mat[1][1] * py;
                                var sx = cx2 + tx * sc;
                                var sy = cy2 - ty * sc;
                                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                            }
                            ctx.closePath();
                            ctx.fill();
                            ctx.stroke();

                            // Compute smallest singular value for inner ball
                            var ata00 = mat[0][0] * mat[0][0] + mat[1][0] * mat[1][0];
                            var ata01 = mat[0][0] * mat[0][1] + mat[1][0] * mat[1][1];
                            var ata11 = mat[0][1] * mat[0][1] + mat[1][1] * mat[1][1];
                            var trA = ata00 + ata11;
                            var detA = ata00 * ata11 - ata01 * ata01;
                            var discA = trA * trA - 4 * detA;
                            var sigmaMin = discA >= 0 ? Math.sqrt(Math.max(0, (trA - Math.sqrt(discA)) / 2)) : 0;
                            var innerR = sigmaMin * radius;

                            // Inner ball (pulsing)
                            if (innerR > 0.01) {
                                var pulseR = innerR * (0.9 + 0.1 * pulse);
                                ctx.strokeStyle = viz.colors.yellow;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([5, 3]);
                                ctx.beginPath();
                                ctx.arc(cx2, cy2, pulseR * sc, 0, Math.PI * 2);
                                ctx.stroke();
                                ctx.setLineDash([]);

                                ctx.fillStyle = viz.colors.yellow;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('B(0, \u03B4r) \u2286 T(B(0,r))', cx2, cy2 + innerR * sc + 24);
                                ctx.fillText('\u03B4 = \u03C3_min(T) = ' + sigmaMin.toFixed(3), cx2, cy2 + innerR * sc + 40);
                            }
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'viz-omt-iterative-construction',
                    title: 'Iterative Approximation in the OMT Proof',
                    description: 'Step through the proof: approximate y by Tx_1, correct by Tx_2, and so on. The partial sums converge.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 360, scale: 50});
                        var ctx = viz.ctx;
                        viz.originX = 350;
                        viz.originY = 250;

                        var step = 0;
                        var maxSteps = 6;
                        VizEngine.createButton(controls, 'Reset', function() { step = 0; draw(); });
                        VizEngine.createButton(controls, 'Next Step', function() { if (step < maxSteps) step++; draw(); });

                        // Target point
                        var yTarget = [2.0, 1.5];
                        // Operator T = [[1.5, 0.5], [0.3, 1.2]]
                        var T = [[1.5, 0.5], [0.3, 1.2]];
                        var detT = T[0][0] * T[1][1] - T[0][1] * T[1][0];
                        // T inverse
                        var Tinv = [[T[1][1] / detT, -T[0][1] / detT], [-T[1][0] / detT, T[0][0] / detT]];

                        // Simulate the iterative construction: at each step, pick x_k approximately
                        function getApproxSequence(nSteps) {
                            var residual = [yTarget[0], yTarget[1]];
                            var xs = [];
                            var partialSums = [[0, 0]];
                            var residuals = [residual.slice()];
                            for (var k = 0; k < nSteps; k++) {
                                // True solution of T*x = residual, then round to simulate "approximation"
                                var xExact = [Tinv[0][0] * residual[0] + Tinv[0][1] * residual[1],
                                              Tinv[1][0] * residual[0] + Tinv[1][1] * residual[1]];
                                // Add some error to simulate the "closure" approximation (diminishing)
                                var noise = 0.3 / Math.pow(2, k);
                                var xk = [xExact[0] + noise * Math.cos(k * 1.7), xExact[1] + noise * Math.sin(k * 2.3)];
                                xs.push(xk);
                                var Txk = [T[0][0] * xk[0] + T[0][1] * xk[1], T[1][0] * xk[0] + T[1][1] * xk[1]];
                                residual = [residual[0] - Txk[0], residual[1] - Txk[1]];
                                var prev = partialSums[partialSums.length - 1];
                                partialSums.push([prev[0] + xk[0], prev[1] + xk[1]]);
                                residuals.push(residual.slice());
                            }
                            return {xs: xs, partialSums: partialSums, residuals: residuals};
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Iterative Construction in Y-space', 350, 18);

                            // Target y
                            viz.drawPoint(yTarget[0], yTarget[1], viz.colors.red, 'y (target)', 6);

                            var seq = getApproxSequence(step);

                            // Draw partial images T(x_1 + ... + x_k)
                            var colors = [viz.colors.blue, viz.colors.teal, viz.colors.green, viz.colors.purple, viz.colors.orange, viz.colors.yellow];
                            for (var k = 0; k < step; k++) {
                                var ps = seq.partialSums[k + 1];
                                var Tps = [T[0][0] * ps[0] + T[0][1] * ps[1], T[1][0] * ps[0] + T[1][1] * ps[1]];
                                var col = colors[k % colors.length];

                                // Line from previous to current
                                if (k > 0) {
                                    var psPrev = seq.partialSums[k];
                                    var TpsPrev = [T[0][0] * psPrev[0] + T[0][1] * psPrev[1], T[1][0] * psPrev[0] + T[1][1] * psPrev[1]];
                                    viz.drawSegment(TpsPrev[0], TpsPrev[1], Tps[0], Tps[1], col, 1.5, true);
                                } else {
                                    viz.drawSegment(0, 0, Tps[0], Tps[1], col, 1.5, true);
                                }

                                viz.drawPoint(Tps[0], Tps[1], col, 'T(s_' + (k + 1) + ')', 5);

                                // Residual circle
                                var res = seq.residuals[k + 1];
                                var resNorm = Math.sqrt(res[0] * res[0] + res[1] * res[1]);
                                if (resNorm > 0.02) {
                                    ctx.strokeStyle = col + '66';
                                    ctx.lineWidth = 1;
                                    ctx.setLineDash([3, 3]);
                                    var ctrPt = viz.toScreen(Tps[0], Tps[1]);
                                    ctx.beginPath();
                                    ctx.arc(ctrPt[0], ctrPt[1], resNorm * viz.scale, 0, Math.PI * 2);
                                    ctx.stroke();
                                    ctx.setLineDash([]);
                                }
                            }

                            // Info
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Step ' + step + ' / ' + maxSteps, 15, 25);
                            if (step > 0) {
                                var lastRes = seq.residuals[step];
                                var lastNorm = Math.sqrt(lastRes[0] * lastRes[0] + lastRes[1] * lastRes[1]);
                                ctx.fillText('||y - T(s_' + step + ')|| = ' + lastNorm.toFixed(4), 15, 42);
                            }
                            if (step === 0) {
                                ctx.fillStyle = viz.colors.text;
                                ctx.textAlign = 'center';
                                ctx.fillText('Click "Next Step" to begin approximation', 350, 340);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Why does the Open Mapping Theorem fail for the identity map id: (C[0,1], ||.||_2) -> (C[0,1], ||.||_inf)? Both are the same vector space.',
                    hint: 'Is the domain a Banach space under the L^2 norm?',
                    solution: '(C[0,1], ||.||_2) is NOT a Banach space (it is not complete in the L^2 norm). So the hypothesis of the OMT fails. Indeed, the identity map here is bounded (||f||_2 <= ||f||_inf for f on [0,1]) and bijective, but its inverse (from sup-norm to L^2-norm) is not bounded in the other direction. The OMT requires BOTH spaces to be Banach.'
                },
                {
                    question: 'Let X be a Banach space and T: X -> X a bounded linear surjection. Show that there exists C > 0 such that for every y in X, there exists x in X with Tx = y and ||x|| <= C||y||.',
                    hint: 'Use the ball criterion from the OMT to find delta, then use scaling.',
                    solution: 'By the OMT, there exists delta > 0 such that B(0, delta) is contained in T(B(0,1)). Given y in X with y != 0, set y_0 = (delta / (2||y||)) * y, so ||y_0|| < delta. Then y_0 = Tx_0 for some x_0 with ||x_0|| < 1. Thus x = (2||y|| / delta) * x_0 satisfies Tx = y and ||x|| < 2||y|| / delta. Set C = 2/delta. This is the "bounded right-inverse" property.'
                },
                {
                    question: 'Let X, Y be Banach spaces and T in B(X,Y) with T surjective. Show that there exists delta > 0 such that for all y in Y and all epsilon > 0, there exists x in X with Tx = y, ||x|| <= (1/delta)||y|| + epsilon.',
                    hint: 'Combine the OMT ball criterion with the iterative construction from the proof.',
                    solution: 'By the OMT, B_Y(0, delta) is contained in T(B_X(0,1)) for some delta > 0. Given y in Y, by the iterative construction: pick x_1 with ||x_1|| < ||y||/delta + epsilon/2 and ||y - Tx_1|| < epsilon*delta/2. Then y - Tx_1 is small enough to find x_2 with tiny norm, etc. The geometric series gives x = sum x_k with Tx = y and ||x|| <= ||y||/delta + epsilon. This is a refinement of the standard right-inverse bound, showing we can get arbitrarily close to the optimal constant 1/delta.'
                }
            ]
        },
        // ============================================================
        // SECTION 3: Bounded Inverse Theorem
        // ============================================================
        {
            id: 'ch09-sec03',
            title: 'Bounded Inverse Theorem',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Automatic Continuity of Inverses.</strong> The Open Mapping Theorem has a spectacular corollary: if a bounded linear bijection exists between Banach spaces, then its inverse is automatically bounded. This means that being a topological isomorphism is "automatic" for algebraic isomorphisms between Banach spaces.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We derive the Bounded Inverse Theorem from OMT, prove that two complete norms on the same vector space making a linear map continuous in both must be equivalent, and discuss the failure of the theorem without completeness.</p>
</div>

<h2>Bounded Inverse Theorem</h2>
<p>The Bounded Inverse Theorem (also known as the Inverse Mapping Theorem) is an immediate and powerful corollary of the Open Mapping Theorem. It provides the remarkable conclusion that an algebraic inverse of a bounded linear bijection is automatically bounded.</p>

<div class="env-block theorem">
    <div class="env-title">Theorem 9.8 (Bounded Inverse Theorem / Banach's Theorem)</div>
    <div class="env-body"><p>Let \\(X\\) and \\(Y\\) be Banach spaces and let \\(T: X \\to Y\\) be a bounded linear bijection. Then \\(T^{-1}: Y \\to X\\) is bounded (i.e., continuous).</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>Since \\(T\\) is a bijective bounded linear map between Banach spaces and in particular surjective, the Open Mapping Theorem implies \\(T\\) is an open map. Therefore \\(T^{-1}\\) is continuous: for any open \\(U \\subseteq X\\), the preimage \\((T^{-1})^{-1}(U) = T(U)\\) is open in \\(Y\\). A continuous linear map between normed spaces is bounded, so \\(T^{-1} \\in \\mathcal{B}(Y, X)\\). \\(\\blacksquare\\)</p></div>
</div>

<h3>Equivalence of Norms</h3>

<p>One of the most important applications of the Bounded Inverse Theorem is to detect when two norms on a Banach space are equivalent.</p>

<div class="env-block definition">
    <div class="env-title">Definition 9.9 (Equivalent Norms)</div>
    <div class="env-body"><p>Two norms \\(\\|\\cdot\\|_1\\) and \\(\\|\\cdot\\|_2\\) on a vector space \\(V\\) are <strong>equivalent</strong> if there exist constants \\(0 < c \\leq C < \\infty\\) with</p>
    \\[c\\|x\\|_1 \\leq \\|x\\|_2 \\leq C\\|x\\|_1 \\quad \\text{for all } x \\in V.\\]</div>
</div>

<div class="env-block corollary">
    <div class="env-title">Corollary 9.10 (Uniqueness of Banach Space Topology)</div>
    <div class="env-body"><p>Let \\(\\|\\cdot\\|_1\\) and \\(\\|\\cdot\\|_2\\) be two norms on a vector space \\(V\\). If \\((V, \\|\\cdot\\|_1)\\) and \\((V, \\|\\cdot\\|_2)\\) are both Banach spaces and \\(\\|\\cdot\\|_2 \\leq C\\|\\cdot\\|_1\\) for some constant \\(C\\), then the norms are equivalent.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>The identity map \\(\\mathrm{id}: (V, \\|\\cdot\\|_1) \\to (V, \\|\\cdot\\|_2)\\) is bounded (with norm \\(\\leq C\\)) and bijective. Both spaces are Banach. By the Bounded Inverse Theorem, \\(\\mathrm{id}^{-1}\\) is also bounded, giving \\(\\|x\\|_1 \\leq C'\\|x\\|_2\\) for some \\(C'\\). Combining: \\(\\frac{1}{C'}\\|x\\|_1 \\leq \\|x\\|_2 \\leq C\\|x\\|_1\\). \\(\\blacksquare\\)</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 9.11</div>
    <div class="env-body"><p>Consider \\(V = \\ell^1\\) with the norms \\(\\|x\\|_1 = \\sum |x_n|\\) and \\(\\|x\\|_\\infty = \\sup |x_n|\\). We have \\(\\|x\\|_\\infty \\leq \\|x\\|_1\\), so the identity from \\(\\ell^1\\) to \\((\\ell^1, \\|\\cdot\\|_\\infty)\\) is bounded. However, \\((\\ell^1, \\|\\cdot\\|_\\infty)\\) is <em>not</em> a Banach space (it is not complete under the sup-norm). So the Bounded Inverse Theorem does not apply, and indeed the norms are not equivalent.</p></div>
</div>

<div class="env-block proposition">
    <div class="env-title">Proposition 9.12 (Topological Isomorphism)</div>
    <div class="env-body"><p>A bounded linear bijection \\(T: X \\to Y\\) between Banach spaces is a <strong>topological isomorphism</strong>: it is a homeomorphism that is also linear. We write \\(X \\cong Y\\) and say \\(X\\) and \\(Y\\) are <strong>isomorphic as Banach spaces</strong>.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-bounded-inverse"></div>
<div class="viz-placeholder" data-viz="viz-norm-equivalence"></div>`,
            visualizations: [
                {
                    id: 'viz-bounded-inverse',
                    title: 'Bounded Inverse: T and T^{-1} Both Map Balls to Sets Containing Balls',
                    description: 'A bijective bounded linear T between Banach spaces has bounded inverse: both directions preserve openness.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 340, scale: 40});
                        var ctx = viz.ctx;

                        var a = 1.5, b = 0.4, c = -0.3, d = 1.2;
                        VizEngine.createSlider(controls, 'a=', 0.5, 3, a, 0.1, function(v) { a = v; draw(); });
                        VizEngine.createSlider(controls, 'd=', 0.5, 3, d, 0.1, function(v) { d = v; draw(); });

                        function draw() {
                            viz.clear();

                            var det = a * d - b * c;
                            // T = [[a,b],[c,d]], Tinv = [[d,-b],[-c,a]]/det
                            var N = 100;

                            // Left panel: T forward
                            var cx1 = 180, cy1 = 170, sc = 40;
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('T: X \u2192 Y', cx1, 18);

                            // Unit circle (domain)
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var sx = cx1 + Math.cos(th) * sc;
                                var sy = cy1 - Math.sin(th) * sc;
                                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                            }
                            ctx.closePath();
                            ctx.stroke();

                            // Image ellipse
                            ctx.fillStyle = viz.colors.green + '25';
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i2 = 0; i2 <= N; i2++) {
                                var th2 = 2 * Math.PI * i2 / N;
                                var px = Math.cos(th2), py = Math.sin(th2);
                                var tx = a * px + b * py, ty = c * px + d * py;
                                var sx2 = cx1 + tx * sc, sy2 = cy1 - ty * sc;
                                if (i2 === 0) ctx.moveTo(sx2, sy2); else ctx.lineTo(sx2, sy2);
                            }
                            ctx.closePath();
                            ctx.fill();
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.blue; ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('B_X(0,1)', cx1, cy1 + sc + 20);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('T(B_X(0,1))', cx1, cy1 + sc + 36);

                            // Arrow
                            ctx.strokeStyle = viz.colors.white; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(300, 170); ctx.lineTo(390, 170); ctx.stroke();
                            ctx.fillStyle = viz.colors.white;
                            ctx.beginPath(); ctx.moveTo(395, 170); ctx.lineTo(385, 165); ctx.lineTo(385, 175); ctx.closePath(); ctx.fill();

                            // Right panel: T^{-1}
                            var cx2 = 530, cy2 = 170;
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.fillText('T\u207B\u00B9: Y \u2192 X', cx2, 18);

                            // Unit circle (Y domain)
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i3 = 0; i3 <= N; i3++) {
                                var th3 = 2 * Math.PI * i3 / N;
                                var sx3 = cx2 + Math.cos(th3) * sc;
                                var sy3 = cy2 - Math.sin(th3) * sc;
                                if (i3 === 0) ctx.moveTo(sx3, sy3); else ctx.lineTo(sx3, sy3);
                            }
                            ctx.closePath();
                            ctx.stroke();

                            // Inverse image ellipse
                            ctx.fillStyle = viz.colors.purple + '25';
                            ctx.strokeStyle = viz.colors.purple;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i4 = 0; i4 <= N; i4++) {
                                var th4 = 2 * Math.PI * i4 / N;
                                var px2 = Math.cos(th4), py2 = Math.sin(th4);
                                // Tinv = [[d,-b],[-c,a]]/det
                                var invx = (d * px2 - b * py2) / det;
                                var invy = (-c * px2 + a * py2) / det;
                                var sx4 = cx2 + invx * sc, sy4 = cy2 - invy * sc;
                                if (i4 === 0) ctx.moveTo(sx4, sy4); else ctx.lineTo(sx4, sy4);
                            }
                            ctx.closePath();
                            ctx.fill();
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.green; ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('B_Y(0,1)', cx2, cy2 + sc + 20);
                            ctx.fillStyle = viz.colors.purple;
                            ctx.fillText('T\u207B\u00B9(B_Y(0,1))', cx2, cy2 + sc + 36);

                            // ||T^{-1}||
                            var invNorm = Math.sqrt(Math.max((a * a + b * b + c * c + d * d + Math.sqrt(Math.pow(a * a + b * b - c * c - d * d, 2) + 4 * Math.pow(a * c + b * d, 2))) / 2, 0)) / Math.abs(det);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('det(T) = ' + det.toFixed(2) + ', ||T\u207B\u00B9|| is finite by OMT', 350, 330);
                        }

                        draw();
                    }
                },
                {
                    id: 'viz-norm-equivalence',
                    title: 'Equivalent Norms on a Banach Space',
                    description: 'Two norms making a space Banach, one dominated by the other, must be equivalent. Visualize the unit balls.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 340, scale: 60});
                        var ctx = viz.ctx;
                        viz.originX = 350;
                        viz.originY = 180;

                        var p = 2;
                        VizEngine.createSlider(controls, 'Norm-2 stretch a=', 0.5, 3, 1.5, 0.1, function(v) { p = v; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Unit Balls Under Two Equivalent Norms', 350, 18);

                            // Norm 1: standard Euclidean
                            var N = 100;
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var pt = viz.toScreen(Math.cos(th), Math.sin(th));
                                if (i === 0) ctx.moveTo(pt[0], pt[1]); else ctx.lineTo(pt[0], pt[1]);
                            }
                            ctx.closePath();
                            ctx.stroke();

                            // Norm 2: ellipse (stretched by factor a in x)
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var j = 0; j <= N; j++) {
                                var th2 = 2 * Math.PI * j / N;
                                var pt2 = viz.toScreen(p * Math.cos(th2), Math.sin(th2));
                                if (j === 0) ctx.moveTo(pt2[0], pt2[1]); else ctx.lineTo(pt2[0], pt2[1]);
                            }
                            ctx.closePath();
                            ctx.stroke();

                            // Sandwiching circles
                            var rInner = Math.min(1, 1);
                            var rOuter = Math.max(p, 1);
                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath();
                            ctx.arc(viz.originX, viz.originY, rInner * viz.scale, 0, Math.PI * 2);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.arc(viz.originX, viz.originY, rOuter * viz.scale, 0, Math.PI * 2);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('||.||_1 unit ball', 350, 310);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('||.||_2 unit ball', 350, 326);
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.fillText('c||x||_1 \u2264 ||x||_2 \u2264 C||x||_1', 350, 342);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let X be a Banach space and M a closed subspace. If M has finite codimension (dim(X/M) < infinity), show that any algebraic complement N (so X = M + N, M intersect N = {0}) is closed.',
                    hint: 'Define a bijection from M x N to X and use the Bounded Inverse Theorem. You need N to be finite-dimensional, hence a Banach space.',
                    solution: 'Since N is finite-dimensional (dim N = dim(X/M) < infinity), N is a Banach space under any norm. The map phi: M x N -> X given by phi(m, n) = m + n is a bounded linear bijection (bounded because ||m+n|| <= ||m|| + ||n||; bijective by definition of algebraic complement). Both M x N and X are Banach. By the Bounded Inverse Theorem, phi^{-1} is bounded. In particular, the projection onto N (composing phi^{-1} with the coordinate projection) is bounded, which implies N is closed.'
                },
                {
                    question: 'Give an example of a bijective bounded linear map T: X -> Y where T^{-1} is NOT bounded, by choosing spaces that are not both Banach.',
                    hint: 'Take X to be a dense subspace of a Banach space with a stronger norm.',
                    solution: 'Let X = (C^1[0,1], ||f||_{C^1} = ||f||_inf + ||f\'||_inf) and Y = (C^1[0,1], ||.||_inf). Both have the same underlying vector space. The identity map id: X -> Y is bounded (||f||_inf <= ||f||_{C^1}) and bijective. However, Y = (C^1[0,1], ||.||_inf) is NOT a Banach space (not complete). The inverse id^{-1} sends ||.||_inf to ||.||_{C^1} and is not bounded: consider f_n(t) = t^n/n, then ||f_n||_inf = 1/n -> 0 but ||f_n\'||_inf = 1. The Bounded Inverse Theorem does not apply because Y is not Banach.'
                },
                {
                    question: 'Let T: ell^2 -> ell^2 be defined by T(e_n) = e_n / n, extended linearly. Is T bounded? Is T bijective? Does the Bounded Inverse Theorem apply?',
                    hint: 'Compute ||T|| and determine if T is surjective. Is the range of T all of ell^2?',
                    solution: 'T is bounded with ||T|| = 1 (since ||Te_n|| = 1/n <= 1 = ||e_n||, and ||Te_1|| = 1). T is injective (if Tx = 0, then all x_n/n = 0, so x = 0). However, T is NOT surjective: e_1 is in the range, but consider y = (1/n)_n; then T^{-1}y would be (1)_n which is not in ell^2. So T is not bijective and the Bounded Inverse Theorem does not apply. Indeed T^{-1}, defined on the range of T, is unbounded.'
                }
            ]
        },
        // ============================================================
        // SECTION 4: Closed Graph Theorem
        // ============================================================
        {
            id: 'ch09-sec04',
            title: 'Closed Graph Theorem',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Boundedness from the Graph.</strong> The Closed Graph Theorem provides an alternative route to proving operators are bounded: instead of estimating the operator norm directly, we need only show that the graph \(\{(x, Tx) : x \in X\}\) is closed in \(X \times Y\). This is often far easier to verify in practice.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define the graph of an operator, prove the Closed Graph Theorem using the Open Mapping Theorem, and explain why a closed graph is a natural condition (it says "if \(x_n \to x\) and \(Tx_n \to y\), then \(y = Tx\)").</p>
</div>

<h2>Closed Graph Theorem</h2>
<p>The Closed Graph Theorem provides another way to verify boundedness of a linear operator: instead of directly estimating \\(\\|Tx\\|\\), one can check whether the graph of \\(T\\) is closed. This is often easier in practice.</p>

<div class="env-block definition">
    <div class="env-title">Definition 9.13 (Graph of an Operator)</div>
    <div class="env-body"><p>Let \\(T: X \\to Y\\) be a linear map between normed spaces. The <strong>graph</strong> of \\(T\\) is the set</p>
    \\[\\Gamma(T) = \\{(x, Tx) \\in X \\times Y : x \\in X\\},\\]
    <p>viewed as a subspace of the product space \\(X \\times Y\\) equipped with the norm \\(\\|(x,y)\\| = \\|x\\|_X + \\|y\\|_Y\\).</p></div>
</div>

<div class="env-block definition">
    <div class="env-title">Definition 9.14 (Closed Operator)</div>
    <div class="env-body"><p>A linear map \\(T: X \\to Y\\) is called <strong>closed</strong> (or has a <strong>closed graph</strong>) if \\(\\Gamma(T)\\) is a closed subset of \\(X \\times Y\\). Equivalently, whenever \\(x_n \\to x\\) in \\(X\\) and \\(Tx_n \\to y\\) in \\(Y\\), then \\(y = Tx\\).</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark 9.15 (Closed vs Continuous)</div>
    <div class="env-body"><p>Every bounded (continuous) linear operator has a closed graph. The converse is the content of the Closed Graph Theorem, under the assumption that both spaces are Banach. In general (without completeness), closed graph does NOT imply boundedness.</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem 9.16 (Closed Graph Theorem)</div>
    <div class="env-body"><p>Let \\(X\\) and \\(Y\\) be Banach spaces and let \\(T: X \\to Y\\) be a linear map. If \\(T\\) has a closed graph (i.e., \\(\\Gamma(T)\\) is closed in \\(X \\times Y\\)), then \\(T\\) is bounded.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>Since \\(X\\) and \\(Y\\) are Banach, \\(X \\times Y\\) is Banach under \\(\\|(x,y)\\| = \\|x\\| + \\|y\\|\\). Since \\(\\Gamma(T)\\) is a closed subspace of a Banach space, it is itself a Banach space.</p>
    <p>Consider the projections:</p>
    \\[\\pi_1: \\Gamma(T) \\to X, \\quad \\pi_1(x, Tx) = x,\\]
    \\[\\pi_2: \\Gamma(T) \\to Y, \\quad \\pi_2(x, Tx) = Tx.\\]
    <p>Both are bounded (they are restrictions of the coordinate projections on \\(X \\times Y\\)). Moreover, \\(\\pi_1\\) is a bijection from \\(\\Gamma(T)\\) onto \\(X\\) (since \\(T\\) is defined on all of \\(X\\)).</p>
    <p>By the Bounded Inverse Theorem (Theorem 9.8), \\(\\pi_1^{-1}: X \\to \\Gamma(T)\\) is bounded. Therefore,</p>
    \\[T = \\pi_2 \\circ \\pi_1^{-1}\\]
    <p>is a composition of bounded maps, hence bounded. \\(\\blacksquare\\)</p></div>
</div>

<h3>The Sequential Criterion</h3>
<p>In practice, we verify the closed graph condition using sequences:</p>

<div class="env-block proposition">
    <div class="env-title">Proposition 9.17 (Sequential Closed Graph Test)</div>
    <div class="env-body"><p>\\(T: X \\to Y\\) has closed graph if and only if: whenever \\(x_n \\to 0\\) in \\(X\\) and \\(Tx_n \\to y\\) in \\(Y\\), it follows that \\(y = 0\\).</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>The "only if" direction is immediate. For "if": suppose \\(x_n \\to x\\) and \\(Tx_n \\to y\\). Set \\(z_n = x_n - x\\). Then \\(z_n \\to 0\\) and \\(Tz_n = Tx_n - Tx \\to y - Tx\\). By hypothesis, \\(y - Tx = 0\\), so \\(y = Tx\\). \\(\\blacksquare\\)</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example 9.18 (Differentiation Operator)</div>
    <div class="env-body"><p>Let \\(X = \\{f \\in C^1[0,1] : f(0) = 0\\}\\) with sup-norm, and \\(Y = C[0,1]\\) with sup-norm. The differentiation operator \\(D: X \\to Y\\), \\(Df = f'\\), is unbounded but has a closed graph.</p>
    <p>To see that \\(D\\) is closed: if \\(f_n \\to f\\) uniformly and \\(f_n' \\to g\\) uniformly, then by the uniform limit theorem for derivatives, \\(f\\) is differentiable and \\(f' = g\\), so \\(Df = g\\).</p>
    <p>This does NOT contradict the Closed Graph Theorem because \\(X\\) with the sup-norm is not a Banach space (it is not complete).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-graph-operator"></div>
<div class="viz-placeholder" data-viz="viz-closed-vs-not-closed"></div>`,
            visualizations: [
                {
                    id: 'viz-graph-operator',
                    title: 'Graph of a Linear Operator in Product Space',
                    description: 'Visualize the graph Gamma(T) = {(x, Tx)} as a subspace of X x Y.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 380, scale: 35});
                        var ctx = viz.ctx;
                        viz.originX = 350;
                        viz.originY = 280;

                        var slope = 1.5;
                        VizEngine.createSlider(controls, 'T (slope)=', -3, 3, slope, 0.1, function(v) { slope = v; });

                        function draw(t) {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Graph \u0393(T) in X \u00D7 Y (T: R \u2192 R, Tx = ' + slope.toFixed(1) + 'x)', 350, 18);

                            // Axes labels
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.textAlign = 'right';
                            ctx.fillText('X', viz.width - 10, viz.originY - 5);
                            ctx.fillStyle = viz.colors.green;
                            ctx.textAlign = 'center';
                            ctx.fillText('Y = Tx', viz.originX + 10, 40);

                            // Graph line: y = slope * x
                            viz.drawLine(0, 0, 1, slope, viz.colors.orange, 2.5);

                            // Draw some sample points on the graph
                            var pulse = Math.sin(t / 800) * 0.5 + 0.5;
                            for (var i = -4; i <= 4; i++) {
                                if (i === 0) continue;
                                var x = i;
                                var y = slope * x;
                                if (Math.abs(y) > 8) continue;
                                viz.drawPoint(x, y, viz.colors.orange, '', 3 + pulse);
                                // Dashed lines to axes
                                viz.drawSegment(x, 0, x, y, viz.colors.blue + '44', 1, true);
                                viz.drawSegment(0, y, x, y, viz.colors.green + '44', 1, true);
                            }

                            // Label
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            var labelX = 3, labelY = slope * 3;
                            if (Math.abs(labelY) < 8) {
                                var lp = viz.toScreen(labelX + 0.3, labelY);
                                ctx.fillText('\u0393(T) = {(x, Tx)}', lp[0], lp[1]);
                            }

                            // Show closed: the line contains all its limit points
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Graph is a closed subspace of R \u00D7 R (a line through origin)', 350, viz.height - 15);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'viz-closed-vs-not-closed',
                    title: 'Closed vs Non-Closed Graphs',
                    description: 'Compare the graph of a bounded operator (closed) with a sequence illustrating the closed graph test.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 380, scale: 35});
                        var ctx = viz.ctx;
                        viz.originX = 350;
                        viz.originY = 280;

                        var showSeq = false;
                        var seqStep = 0;
                        VizEngine.createButton(controls, 'Show Convergent Sequence', function() { showSeq = true; seqStep = 0; draw(); });
                        VizEngine.createButton(controls, 'Animate Steps', function() {
                            showSeq = true;
                            seqStep = 0;
                            var interval = setInterval(function() {
                                seqStep++;
                                draw();
                                if (seqStep >= 10) clearInterval(interval);
                            }, 400);
                        });
                        VizEngine.createButton(controls, 'Reset', function() { showSeq = false; seqStep = 0; draw(); });

                        var T = 2.0; // slope of bounded operator

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Closed Graph Test: x_n \u2192 0 and Tx_n \u2192 y implies y = 0', 350, 18);

                            // Graph line
                            viz.drawLine(0, 0, 1, T, viz.colors.green + '66', 1.5);

                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.text;
                            ctx.textAlign = 'right';
                            ctx.fillText('X-axis', viz.width - 10, viz.originY - 5);
                            ctx.textAlign = 'center';
                            ctx.fillText('Y-axis', viz.originX + 12, 40);

                            if (showSeq) {
                                var maxN = Math.min(seqStep, 10);
                                for (var n = 1; n <= maxN; n++) {
                                    var xn = 3.0 / n;
                                    var yn = T * xn;
                                    var col = n === maxN ? viz.colors.yellow : viz.colors.orange;
                                    viz.drawPoint(xn, yn, col, 'n=' + n, 4);
                                    // Show projection to x-axis
                                    viz.drawSegment(xn, 0, xn, yn, viz.colors.blue + '44', 1, true);
                                }

                                // Show the limit
                                viz.drawPoint(0, 0, viz.colors.red, '(0,0) = limit', 6);

                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('x_n = 3/n \u2192 0, Tx_n = ' + T.toFixed(1) + '/n \u00B7 3 \u2192 0 = T(0) \u2713', 350, viz.height - 15);
                            } else {
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('\u0393(T) for Tx = ' + T.toFixed(1) + 'x', 500, 130);
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('For bounded T: graph is always closed', 350, viz.height - 15);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let X = Y = L^2[0,1] and define Tf(t) = t f(t). Show that T has a closed graph and is bounded, directly verifying the Closed Graph Theorem.',
                    hint: 'For the closed graph: if f_n -> f in L^2 and tf_n(t) -> g in L^2, show g(t) = tf(t) a.e. For boundedness: estimate ||Tf||_2.',
                    solution: 'Boundedness: ||Tf||_2^2 = integral of t^2|f(t)|^2 dt <= integral of |f(t)|^2 dt = ||f||_2^2, so ||T|| <= 1. Closed graph: suppose f_n -> f in L^2 and Tf_n = t*f_n -> g in L^2. Since f_n -> f in L^2, there is a subsequence f_{n_k} -> f a.e. Then t*f_{n_k}(t) -> t*f(t) a.e. But t*f_{n_k} -> g in L^2, so g(t) = tf(t) a.e. The graph is closed. This is consistent with the CGT: T is bounded on Banach spaces and has closed graph.'
                },
                {
                    question: 'Let H be a Hilbert space and T: H -> H a linear map. Suppose (Tx, y) = (x, Sy) for all x, y in H, for some linear map S: H -> H. Prove T is bounded.',
                    hint: 'Use the Closed Graph Theorem. If x_n -> 0 and Tx_n -> z, compute (z, y) for arbitrary y.',
                    solution: 'We verify the closed graph condition. Suppose x_n -> 0 in H and Tx_n -> z in H. For any y in H, (z, y) = lim (Tx_n, y) = lim (x_n, Sy) = (0, Sy) = 0. Since this holds for all y, z = 0. So T has closed graph. Since H is a Banach space (in fact a Hilbert space), the Closed Graph Theorem implies T is bounded.'
                },
                {
                    question: 'Explain why the Closed Graph Theorem implies the Open Mapping Theorem, and vice versa. (They are logically equivalent given the Bounded Inverse Theorem.)',
                    hint: 'OMT -> BIT -> CGT, and CGT -> BIT -> OMT. Show the chain.',
                    solution: 'OMT => CGT: The OMT gives the BIT (bounded inverse). The BIT gives the CGT as follows: if T: X -> Y has closed graph, then Gamma(T) is a closed (hence Banach) subspace of X x Y, pi_1: Gamma(T) -> X is a bounded bijection between Banach spaces, and by BIT, pi_1^{-1} is bounded, so T = pi_2 o pi_1^{-1} is bounded. CGT => OMT: Let T: X -> Y be bounded surjective. We need T open. Consider Y x X with the map S: Y -> X that picks a preimage. Instead, directly: let phi: X/ker(T) -> Y be the induced bijection. Show phi has closed graph. By CGT, phi is bounded, hence phi^{-1} is a closed linear map Y -> X/ker(T) between Banach spaces. By CGT again (or directly), phi^{-1} is bounded. So phi is a topological isomorphism, which gives openness of T.'
                }
            ]
        },
        // ============================================================
        // SECTION 5: Applications
        // ============================================================
        {
            id: 'ch09-sec05',
            title: 'Applications',
            content: `
<div class="bridge-block section-bridge">
<p><strong>The Big Theorems at Work.</strong> The Open Mapping and Closed Graph theorems have far-reaching consequences. In this section, we apply them to prove automatic continuity results, the Hellinger-Toeplitz theorem (everywhere-defined symmetric operators on Hilbert spaces are bounded), and characterize complemented subspaces.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove Hellinger-Toeplitz, characterize projections onto complemented subspaces, show that two complete norms with a continuous identity map must be equivalent, and survey additional applications of automatic continuity.</p>
</div>

<div class="bridge-block chapter-closing">
<p><strong>Looking Ahead.</strong> With the four pillars of Banach space theory (Hahn-Banach, Baire, UBP, OMT/CGT) in place, we begin the "duality" arc. Chapter 10 studies dual spaces, the spaces of continuous linear functionals, systematically. The interplay between a space and its dual is one of the richest themes in functional analysis.</p>
</div>

<h2>Applications</h2>
<p>The Open Mapping Theorem, Bounded Inverse Theorem, and Closed Graph Theorem form a triad of structure theorems that have far-reaching consequences. We present several important applications.</p>

<h3>Automatic Continuity</h3>

<div class="env-block theorem">
    <div class="env-title">Theorem 9.19 (Automatic Continuity for Surjections)</div>
    <div class="env-body"><p>Let \\(X\\) be a Banach space and let \\(\\|\\cdot\\|_1\\) and \\(\\|\\cdot\\|_2\\) be two complete norms on \\(X\\). If the identity \\(\\mathrm{id}: (X, \\|\\cdot\\|_1) \\to (X, \\|\\cdot\\|_2)\\) has a closed graph, then the two norms are equivalent.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>By the Closed Graph Theorem, \\(\\mathrm{id}\\) is bounded: \\(\\|x\\|_2 \\leq C\\|x\\|_1\\). By the Bounded Inverse Theorem (applied to the now-bounded bijection), \\(\\|x\\|_1 \\leq C'\\|x\\|_2\\). \\(\\blacksquare\\)</p></div>
</div>

<h3>The Hellinger-Toeplitz Theorem</h3>

<div class="env-block theorem">
    <div class="env-title">Theorem 9.20 (Hellinger-Toeplitz)</div>
    <div class="env-body"><p>Let \\(H\\) be a Hilbert space and \\(T: H \\to H\\) a linear operator satisfying</p>
    \\[\\langle Tx, y \\rangle = \\langle x, Ty \\rangle \\quad \\text{for all } x, y \\in H.\\]
    <p>(That is, \\(T\\) is "everywhere defined and symmetric.") Then \\(T\\) is bounded.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>We use the Closed Graph Theorem. Suppose \\(x_n \\to 0\\) and \\(Tx_n \\to z\\). For any \\(y \\in H\\),</p>
    \\[\\langle z, y \\rangle = \\lim_{n \\to \\infty} \\langle Tx_n, y \\rangle = \\lim_{n \\to \\infty} \\langle x_n, Ty \\rangle = \\langle 0, Ty \\rangle = 0.\\]
    <p>Since this holds for all \\(y\\), we get \\(z = 0\\). So \\(T\\) has a closed graph, and the Closed Graph Theorem yields boundedness. \\(\\blacksquare\\)</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark 9.21</div>
    <div class="env-body"><p>The Hellinger-Toeplitz theorem has a striking consequence in quantum mechanics: a symmetric (self-adjoint) operator that is defined on the entire Hilbert space must be bounded. This is why unbounded self-adjoint operators in quantum mechanics (like the momentum operator \\(-i\\hbar \\frac{d}{dx}\\)) are always defined only on a dense subspace, never on the whole space.</p></div>
</div>

<h3>Projections onto Complemented Subspaces</h3>

<div class="env-block theorem">
    <div class="env-title">Theorem 9.22 (Bounded Projections)</div>
    <div class="env-body"><p>Let \\(X\\) be a Banach space and \\(M, N\\) closed subspaces with \\(X = M \\oplus N\\) (algebraic direct sum, meaning every \\(x\\) has a unique decomposition \\(x = m + n\\)). Then the projection \\(P: X \\to M\\) defined by \\(Px = m\\) is bounded.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>We verify \\(P\\) has a closed graph. Suppose \\(x_k \\to x\\) and \\(Px_k \\to m_0\\). Write \\(x_k = m_k + n_k\\) with \\(m_k \\in M\\), \\(n_k \\in N\\). Then \\(m_k = Px_k \\to m_0\\) and \\(n_k = x_k - m_k \\to x - m_0\\). Since \\(M\\) and \\(N\\) are closed, \\(m_0 \\in M\\) and \\(x - m_0 \\in N\\). So \\(x = m_0 + (x - m_0)\\) is the unique decomposition, giving \\(Px = m_0\\). The graph is closed, and the Closed Graph Theorem yields boundedness. \\(\\blacksquare\\)</p></div>
</div>

<h3>Equivalent Norms and Completions</h3>

<div class="env-block corollary">
    <div class="env-title">Corollary 9.23</div>
    <div class="env-body"><p>Let \\(X\\) be a vector space with two norms \\(\\|\\cdot\\|_a\\) and \\(\\|\\cdot\\|_b\\), both making \\(X\\) into a Banach space. If there exists a sequence \\((x_n)\\) with \\(x_n \\to 0\\) in \\(\\|\\cdot\\|_a\\) and \\(x_n \\to 0\\) in \\(\\|\\cdot\\|_b\\), and these are the only sequences converging to \\(0\\) in both norms simultaneously (i.e., the identity has closed graph), then the norms are equivalent.</p></div>
</div>

<h3>Application to PDEs: Well-Posedness</h3>

<div class="env-block example">
    <div class="env-title">Example 9.24 (Inverting Differential Operators)</div>
    <div class="env-body"><p>Consider the operator \\(L = -\\Delta + I\\) on an appropriate Sobolev space \\(H^2(\\Omega) \\cap H_0^1(\\Omega)\\). If one can show \\(L\\) is a bounded linear bijection from \\(H^2 \\cap H_0^1\\) to \\(L^2(\\Omega)\\), then the Bounded Inverse Theorem immediately gives a bounded inverse \\(L^{-1}: L^2 \\to H^2 \\cap H_0^1\\), establishing well-posedness with the estimate</p>
    \\[\\|u\\|_{H^2} \\leq C\\|f\\|_{L^2}\\]
    <p>for the solution \\(u\\) of \\(Lu = f\\). No separate proof of the a priori estimate is needed — it comes free from the OMT!</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-hellinger-toeplitz"></div>
<div class="viz-placeholder" data-viz="viz-projection-complement"></div>
<div class="viz-placeholder" data-viz="viz-automatic-continuity"></div>`,
            visualizations: [
                {
                    id: 'viz-hellinger-toeplitz',
                    title: 'Hellinger-Toeplitz: Symmetric Implies Bounded',
                    description: 'A symmetric matrix T satisfies (Tx,y) = (x,Ty). Visualize how symmetry forces the graph to be closed.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 360, scale: 40});
                        var ctx = viz.ctx;
                        viz.originX = 350;
                        viz.originY = 200;

                        var a = 2.0, b = 0.8;
                        VizEngine.createSlider(controls, 'T_11=', -3, 3, a, 0.1, function(v) { a = v; });
                        VizEngine.createSlider(controls, 'T_12=T_21=', -2, 2, b, 0.1, function(v) { b = v; });

                        function draw(t) {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            // Symmetric matrix T = [[a, b], [b, a]] (using a for both diags for simplicity)
                            var mat = [[a, b], [b, a]];

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Hellinger-Toeplitz: Symmetric T is automatically bounded', 350, 18);

                            // Show T acting on unit circle
                            var N = 100;
                            // Unit circle
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            for (var i = 0; i <= N; i++) {
                                var th = 2 * Math.PI * i / N;
                                var pt = viz.toScreen(Math.cos(th), Math.sin(th));
                                if (i === 0) ctx.moveTo(pt[0], pt[1]); else ctx.lineTo(pt[0], pt[1]);
                            }
                            ctx.closePath();
                            ctx.stroke();

                            // Image ellipse
                            ctx.fillStyle = viz.colors.green + '20';
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var j = 0; j <= N; j++) {
                                var th2 = 2 * Math.PI * j / N;
                                var px = Math.cos(th2), py = Math.sin(th2);
                                var tx = mat[0][0] * px + mat[0][1] * py;
                                var ty = mat[1][0] * px + mat[1][1] * py;
                                var pt2 = viz.toScreen(tx, ty);
                                if (j === 0) ctx.moveTo(pt2[0], pt2[1]); else ctx.lineTo(pt2[0], pt2[1]);
                            }
                            ctx.closePath();
                            ctx.fill();
                            ctx.stroke();

                            // Eigenvalues (for symmetric 2x2 [[a,b],[b,a]]: lambda = a +/- b)
                            var lam1 = a + b, lam2 = a - b;

                            // Eigenvectors
                            var pulse = 0.5 + 0.5 * Math.sin(t / 700);
                            if (Math.abs(lam1) > 0.01) {
                                viz.drawVector(0, 0, Math.SQRT1_2, Math.SQRT1_2, viz.colors.orange, '', 1.5);
                                viz.drawVector(0, 0, lam1 * Math.SQRT1_2, lam1 * Math.SQRT1_2, viz.colors.orange, '', 2);
                            }
                            if (Math.abs(lam2) > 0.01) {
                                viz.drawVector(0, 0, Math.SQRT1_2, -Math.SQRT1_2, viz.colors.purple, '', 1.5);
                                viz.drawVector(0, 0, lam2 * Math.SQRT1_2, -lam2 * Math.SQRT1_2, viz.colors.purple, '', 2);
                            }

                            // Info
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('T = [[' + a.toFixed(1) + ', ' + b.toFixed(1) + '], [' + b.toFixed(1) + ', ' + a.toFixed(1) + ']]', 15, 340);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('\u03BB\u2081 = ' + lam1.toFixed(2), 15, 356);
                            ctx.fillStyle = viz.colors.purple;
                            ctx.fillText('\u03BB\u2082 = ' + lam2.toFixed(2), 120, 356);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('||T|| = max(|\u03BB\u2081|, |\u03BB\u2082|) = ' + Math.max(Math.abs(lam1), Math.abs(lam2)).toFixed(2), 230, 356);
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Symmetric \u21D2 real eigenvalues \u21D2 bounded by CGT', 15, 322);
                        }

                        viz.animate(draw);
                    }
                },
                {
                    id: 'viz-projection-complement',
                    title: 'Projection onto Complemented Subspace',
                    description: 'X = M + N decomposition. The projection P: X -> M is automatically bounded by the Closed Graph Theorem.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 380, scale: 45});
                        var ctx = viz.ctx;
                        viz.originX = 350;
                        viz.originY = 220;

                        var angle = 1.2; // angle of N from x-axis
                        VizEngine.createSlider(controls, 'Angle of N=', 0.2, 2.9, angle, 0.05, function(v) { angle = v; });

                        var dragPt = viz.addDraggable('pt', 2.5, 2.0, viz.colors.yellow, 8);

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Projection onto M along N: P(x) = m', 350, 18);

                            // M = x-axis
                            viz.drawLine(-6, 0, 6, 0, viz.colors.blue + '88', 2);
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = '14px -apple-system,sans-serif';
                            var mp = viz.toScreen(6.5, 0);
                            ctx.textAlign = 'left';
                            ctx.fillText('M', mp[0], mp[1]);

                            // N at angle
                            var nx = Math.cos(angle), ny = Math.sin(angle);
                            viz.drawLine(-6 * nx, -6 * ny, 6 * nx, 6 * ny, viz.colors.green + '88', 2);
                            var np = viz.toScreen(5.5 * nx, 5.5 * ny);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('N', np[0], np[1]);

                            // Decomposition of dragged point
                            var x = dragPt.x, y = dragPt.y;
                            // x = m + n, where m in M (y=0) and n in N (direction (cos(angle), sin(angle)))
                            // m = (m_val, 0), n = t*(cos(angle), sin(angle))
                            // y component: y = t*sin(angle) => t = y/sin(angle)
                            var t_val = y / Math.sin(angle);
                            var m_val = x - t_val * Math.cos(angle);
                            var n_x = t_val * Math.cos(angle);
                            var n_y = t_val * Math.sin(angle);

                            // Draw decomposition
                            viz.drawSegment(0, 0, m_val, 0, viz.colors.blue, 2.5);
                            viz.drawSegment(m_val, 0, m_val + n_x, n_y, viz.colors.green, 2.5);
                            viz.drawPoint(m_val, 0, viz.colors.blue, 'Px = m', 6);
                            viz.drawPoint(x, y, viz.colors.yellow, 'x', 6);

                            // Parallel to N through x
                            viz.drawSegment(x - 2 * nx, y - 2 * ny, x + 2 * nx, y + 2 * ny, viz.colors.green + '33', 1, true);

                            viz.drawDraggables();

                            // Info
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('||P|| = 1/sin(\u03B8) = ' + (1 / Math.sin(angle)).toFixed(2) + '  (angle \u03B8 = ' + (angle * 180 / Math.PI).toFixed(0) + '\u00B0)', 350, viz.height - 15);
                            ctx.fillText('As N approaches M, ||P|| \u2192 \u221E', 350, viz.height - 32);
                        }

                        viz.animate(function() { draw(); });
                    }
                },
                {
                    id: 'viz-automatic-continuity',
                    title: 'Automatic Continuity: Two Complete Norms',
                    description: 'If both norms make X Banach and one dominates the other, they must be equivalent.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 340, scale: 50});
                        var ctx = viz.ctx;
                        viz.originX = 350;
                        viz.originY = 170;

                        var ratio = 1.5;
                        VizEngine.createSlider(controls, 'C (||.||_2 \u2264 C||.||_1)=', 1.0, 4.0, ratio, 0.1, function(v) { ratio = v; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Automatic Continuity: ||.||_2 \u2264 C||.||_1 \u21D2 norms equivalent', 350, 18);

                            // Norm-1 unit ball (circle)
                            viz.drawCircle(0, 0, 1, viz.colors.blue + '15', viz.colors.blue, 2);

                            // Norm-2 unit ball: contains norm-1 ball scaled by 1/C, contained in norm-1 ball scaled by C'
                            // Represent as ellipse for visualization
                            var C_prime = 1.0 + 0.5 * (ratio - 1); // simulate the reverse bound
                            viz.drawCircle(0, 0, ratio, viz.colors.orange + '10', viz.colors.orange, 2);
                            viz.drawCircle(0, 0, 1 / C_prime, null, viz.colors.yellow, 1.5);

                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('||.||_1 unit ball', 350, viz.originY + 1 * viz.scale + 20);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('||.||_2 unit ball (contains ||.||_1 ball)', 350, viz.originY + ratio * viz.scale + 20);
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.fillText('BIT gives reverse: ||.||_1 ball contains scaled ||.||_2 ball', 350, 320);

                            // The key equation
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('(1/' + C_prime.toFixed(1) + ')||x||_1 \u2264 ||x||_2 \u2264 ' + ratio.toFixed(1) + '||x||_1', 350, 338);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let H = L^2(R) and define T: H -> H by (Tf)(x) = x f(x) (multiplication by x). Show that T cannot be defined on all of H as a bounded operator, and explain the connection to the Hellinger-Toeplitz theorem.',
                    hint: 'If T were defined on all of H, it would be symmetric. What would Hellinger-Toeplitz say? Is multiplication by x bounded?',
                    solution: 'If T were defined on all of L^2(R), it would satisfy (Tf, g) = integral x f(x) g(x) dx = (f, Tg), so T is symmetric. By Hellinger-Toeplitz, T would be bounded. But T is not bounded: take f_n = 1_{[n,n+1]}, then ||f_n||_2 = 1 but ||Tf_n||_2 >= n. Contradiction. Therefore T cannot be defined on all of L^2(R). Its natural domain is {f in L^2 : xf(x) in L^2}, which is a proper dense subspace. This illustrates why unbounded symmetric operators in quantum mechanics must have restricted domains.'
                },
                {
                    question: 'Let X be a Banach space and (T_n) a sequence of bounded linear operators T_n: X -> X. Suppose that for each x in X, the limit Tx = lim T_n x exists. Prove that T is bounded.',
                    hint: 'Use the Closed Graph Theorem. If x_k -> 0 and Tx_k -> y, can you show y = 0?',
                    solution: 'We use the Closed Graph Theorem. First, T is linear (limits of linear maps are linear). To show T has a closed graph: suppose x_k -> 0 in X and Tx_k -> y in X. We need y = 0. By the Uniform Boundedness Principle, sup_n ||T_n|| = M < infinity. For any epsilon > 0, choose k large enough so ||x_k|| < epsilon/(3M) and ||Tx_k - y|| < epsilon/3. Then for large n, ||T_n x_k - Tx_k|| < epsilon/3. So ||T_n x_k|| <= ||T_n|| ||x_k|| < M * epsilon/(3M) = epsilon/3. Thus ||y|| <= ||y - Tx_k|| + ||Tx_k - T_n x_k|| + ||T_n x_k|| < epsilon. Since epsilon is arbitrary, y = 0. By CGT, T is bounded.'
                },
                {
                    question: 'Let X, Y be Banach spaces and T: X -> Y a closed linear operator with domain D(T) = X. Suppose there exists a closed subspace Z of X with finite codimension such that T|_Z is bounded. Prove T is bounded on all of X.',
                    hint: 'Write X = Z + W where W is finite-dimensional. Use the fact that all linear maps on finite-dimensional spaces are bounded.',
                    solution: 'Since Z has finite codimension, there exists a finite-dimensional subspace W with X = Z + W (algebraic direct sum). Since Z is closed and W is finite-dimensional (hence closed), the direct sum is topological and the projection P: X -> Z is bounded (Theorem 9.22). Now for x = z + w (z in Z, w in W), Tx = Tz + Tw. T|_Z is bounded by hypothesis, and T|_W is bounded because W is finite-dimensional. So ||Tx|| <= ||Tz|| + ||Tw|| <= ||T|_Z|| ||z|| + ||T|_W|| ||w|| <= (||T|_Z|| ||P|| + ||T|_W|| ||I-P||) ||x||. Thus T is bounded on X.'
                },
                {
                    question: 'Let X be a Banach space and T: X -> X be a bijective bounded linear operator with ||T - I|| < 1. Show that T is invertible with bounded inverse, without using the Open Mapping Theorem.',
                    hint: 'Use the Neumann series: T = I - (I - T), and the geometric series for operators.',
                    solution: 'Write T = I - S where S = I - T and ||S|| < 1. The Neumann series sum_{n=0}^{infinity} S^n converges absolutely in B(X) since sum ||S||^n = 1/(1-||S||) < infinity. Let R = sum_{n=0}^{infinity} S^n. Then TR = (I - S) sum S^n = sum S^n - sum S^{n+1} = I (telescoping). Similarly RT = I. So T^{-1} = R is bounded with ||T^{-1}|| <= 1/(1 - ||I - T||). This is the "small perturbation" result: operators close to the identity are invertible. Note this gives an explicit bound on ||T^{-1}|| without the OMT.'
                }
            ]
        }
    ]
});
