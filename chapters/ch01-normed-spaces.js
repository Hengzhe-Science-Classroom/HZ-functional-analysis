// === Chapter 1: Normed Spaces (Version B) ===
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch01',
    number: 1,
    title: 'Normed Spaces',
    subtitle: 'From vector spaces to analysis',
    sections: [
        // ========== SECTION 1: Vector Spaces Review ==========
        {
            id: 'sec01-vector-spaces',
            title: 'Vector Spaces Review',
            content: `
<div class="bridge-block chapter-opening">
<p><strong>From Metric Spaces to Normed Spaces.</strong> In Chapter 0, we studied metric spaces, where distance was the fundamental concept. But metric spaces lack algebraic structure: we cannot add points or scale them. In this chapter, we bring together the algebra of vector spaces and the topology of metrics by introducing <em>norms</em>. A norm measures the "size" of a vector, and from it a metric naturally emerges. This marriage of algebra and analysis is the defining feature of functional analysis.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We review vector spaces, subspaces, linear independence, and the notion of dimension. The key takeaway is that infinite-dimensional spaces require topological tools beyond pure algebra, motivating the norm concept in the next section.</p>
</div>

<h2>1.1 Vector Spaces Review</h2>

<p>Before embarking on functional analysis proper, we must ensure a solid command of the algebraic structures that underpin the entire theory. A <em>vector space</em> (or <em>linear space</em>) over a field \\(\\mathbb{F}\\) (where \\(\\mathbb{F} = \\mathbb{R}\\) or \\(\\mathbb{C}\\)) is the fundamental object of study.</p>

<div class="env-block definition">
<strong>Definition 1.1.1 (Vector Space).</strong> A <em>vector space</em> over a field \\(\\mathbb{F}\\) is a nonempty set \\(V\\) together with two operations:
<ul>
<li><em>Vector addition:</em> \\(+: V \\times V \\to V\\)</li>
<li><em>Scalar multiplication:</em> \\(\\cdot: \\mathbb{F} \\times V \\to V\\)</li>
</ul>
satisfying the following axioms for all \\(x, y, z \\in V\\) and \\(\\alpha, \\beta \\in \\mathbb{F}\\):
<ol>
<li>\\(x + y = y + x\\) &emsp;(commutativity)</li>
<li>\\((x + y) + z = x + (y + z)\\) &emsp;(associativity of addition)</li>
<li>There exists \\(0 \\in V\\) such that \\(x + 0 = x\\) &emsp;(additive identity)</li>
<li>For each \\(x\\) there exists \\(-x \\in V\\) with \\(x + (-x) = 0\\) &emsp;(additive inverse)</li>
<li>\\(\\alpha(\\beta x) = (\\alpha\\beta)x\\) &emsp;(compatibility of scalar multiplication)</li>
<li>\\(1 \\cdot x = x\\) &emsp;(identity element of scalar multiplication)</li>
<li>\\(\\alpha(x + y) = \\alpha x + \\alpha y\\) &emsp;(distributivity over vector addition)</li>
<li>\\((\\alpha + \\beta)x = \\alpha x + \\beta x\\) &emsp;(distributivity over field addition)</li>
</ol>
</div>

<div class="env-block example">
<strong>Example 1.1.2.</strong> The following are vector spaces over \\(\\mathbb{R}\\):
<ul>
<li>\\(\\mathbb{R}^n\\) with componentwise operations</li>
<li>\\(C[a,b]\\), the space of continuous functions \\(f: [a,b] \\to \\mathbb{R}\\)</li>
<li>\\(\\ell^p\\) for \\(1 \\le p \\le \\infty\\), the space of \\(p\\)-summable sequences</li>
<li>\\(\\mathcal{P}_n\\), the space of polynomials of degree \\(\\le n\\)</li>
</ul>
</div>

<div class="viz-placeholder" data-viz="viz-vec-operations"></div>

<h3>Subspaces</h3>

<div class="env-block definition">
<strong>Definition 1.1.3 (Subspace).</strong> A nonempty subset \\(W \\subseteq V\\) is a <em>subspace</em> of \\(V\\) if \\(W\\) is itself a vector space under the inherited operations. Equivalently, \\(W\\) is a subspace if and only if for all \\(x, y \\in W\\) and \\(\\alpha \\in \\mathbb{F}\\),
\\[
\\alpha x + y \\in W.
\\]
</div>

<div class="env-block remark">
<strong>Remark 1.1.4.</strong> The "one-line test" above combines closure under addition and scalar multiplication into a single condition. Note that taking \\(\\alpha = 0\\) shows \\(0 \\in W\\), so \\(W\\) is automatically nonempty if the condition holds for any pair.
</div>

<h3>Linear Independence, Span, and Basis</h3>

<div class="env-block definition">
<strong>Definition 1.1.5.</strong> A set \\(\\{v_1, \\ldots, v_n\\} \\subseteq V\\) is <em>linearly independent</em> if
\\[
\\sum_{i=1}^n \\alpha_i v_i = 0 \\implies \\alpha_i = 0 \\text{ for all } i.
\\]
The <em>span</em> of a subset \\(S \\subseteq V\\) is the set of all finite linear combinations of elements in \\(S\\):
\\[
\\mathrm{span}(S) = \\left\\{ \\sum_{i=1}^n \\alpha_i v_i \\;:\\; v_i \\in S,\\; \\alpha_i \\in \\mathbb{F},\\; n \\in \\mathbb{N} \\right\\}.
\\]
</div>

<div class="env-block definition">
<strong>Definition 1.1.6 (Hamel Basis).</strong> A <em>Hamel basis</em> (or <em>algebraic basis</em>) of \\(V\\) is a linearly independent set \\(B\\) whose span is all of \\(V\\). Every vector space has a Hamel basis (by Zorn's lemma), and any two bases have the same cardinality.
</div>

<div class="env-block definition">
<strong>Definition 1.1.7 (Dimension).</strong> The <em>dimension</em> of \\(V\\), written \\(\\dim(V)\\), is the cardinality of any Hamel basis. If \\(\\dim(V) < \\infty\\), we say \\(V\\) is <em>finite-dimensional</em>; otherwise \\(V\\) is <em>infinite-dimensional</em>.
</div>

<div class="viz-placeholder" data-viz="viz-linear-independence"></div>

<div class="env-block example">
<strong>Example 1.1.8.</strong>
<ul>
<li>\\(\\dim(\\mathbb{R}^n) = n\\), with the standard basis \\(\\{e_1, \\ldots, e_n\\}\\).</li>
<li>\\(\\dim(\\mathcal{P}_n) = n+1\\), with basis \\(\\{1, t, t^2, \\ldots, t^n\\}\\).</li>
<li>\\(C[0,1]\\) is infinite-dimensional: \\(\\{1, t, t^2, \\ldots\\}\\) is linearly independent, and no finite set spans \\(C[0,1]\\).</li>
</ul>
</div>

<div class="env-block remark">
<strong>Remark 1.1.9 (Why Hamel Bases Are Insufficient).</strong> In infinite-dimensional spaces, Hamel bases are unwieldy. For example, a Hamel basis of \\(C[0,1]\\) is uncountable and cannot be explicitly constructed without the axiom of choice. Functional analysis replaces Hamel bases with topological notions: Schauder bases, orthonormal bases, etc. The passage from algebra to topology is mediated by the <em>norm</em>.
</div>
`,
            visualizations: [
                {
                    id: 'viz-vec-operations',
                    title: 'Vector Space Operations in \\(\\mathbb{R}^2\\)',
                    setup(body, controls) {
                        const engine = new VizEngine(body, { scale: 50 });

                        const v1 = engine.addDraggable('v1', 2, 1, engine.colors.blue, 8);
                        const v2 = engine.addDraggable('v2', -1, 2, engine.colors.teal, 8);

                        let alpha = 1.0;
                        VizEngine.createSlider(controls, 'Scalar alpha', -2, 3, 1, 0.1, val => { alpha = val; });

                        let showSum = true;
                        let showScaled = true;
                        VizEngine.createButton(controls, 'Toggle Sum', () => { showSum = !showSum; });
                        VizEngine.createButton(controls, 'Toggle Scaled', () => { showScaled = !showScaled; });

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // Original vectors
                            engine.drawVector(0, 0, v1.x, v1.y, engine.colors.blue, 'v', 2.5);
                            engine.drawVector(0, 0, v2.x, v2.y, engine.colors.teal, 'w', 2.5);

                            // Sum v + w
                            if (showSum) {
                                const sx = v1.x + v2.x;
                                const sy = v1.y + v2.y;
                                engine.drawSegment(v1.x, v1.y, sx, sy, engine.colors.teal + '66', 1, true);
                                engine.drawSegment(v2.x, v2.y, sx, sy, engine.colors.blue + '66', 1, true);
                                engine.drawVector(0, 0, sx, sy, engine.colors.orange, 'v+w', 2.5);
                            }

                            // Scalar multiple alpha*v
                            if (showScaled) {
                                const ax = alpha * v1.x;
                                const ay = alpha * v1.y;
                                engine.drawVector(0, 0, ax, ay, engine.colors.purple, 'av', 2);
                            }

                            engine.drawDraggables();

                            // Labels
                            engine.screenText('v = (' + v1.x.toFixed(1) + ', ' + v1.y.toFixed(1) + ')', 12, 20, engine.colors.blue, 12, 'left', 'top');
                            engine.screenText('w = (' + v2.x.toFixed(1) + ', ' + v2.y.toFixed(1) + ')', 12, 38, engine.colors.teal, 12, 'left', 'top');
                        }

                        engine.animate(() => draw());
                        return engine;
                    }
                },
                {
                    id: 'viz-linear-independence',
                    title: 'Linear Independence and Span in \\(\\mathbb{R}^2\\)',
                    setup(body, controls) {
                        const engine = new VizEngine(body, { scale: 50 });

                        const v1 = engine.addDraggable('v1', 2, 1, engine.colors.blue, 8);
                        const v2 = engine.addDraggable('v2', 1, 2, engine.colors.teal, 8);

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            const det = v1.x * v2.y - v1.y * v2.x;
                            const independent = Math.abs(det) > 0.05;

                            // Show span region
                            if (independent) {
                                // Draw a parallelogram grid to show the span fills R^2
                                const ctx = engine.ctx;
                                ctx.globalAlpha = 0.06;
                                for (let a = -5; a <= 5; a++) {
                                    for (let b = -5; b <= 5; b++) {
                                        const px = a * v1.x + b * v2.x;
                                        const py = a * v1.y + b * v2.y;
                                        engine.drawPolygon([
                                            [px, py],
                                            [px + v1.x, py + v1.y],
                                            [px + v1.x + v2.x, py + v1.y + v2.y],
                                            [px + v2.x, py + v2.y]
                                        ], engine.colors.green, null);
                                    }
                                }
                                ctx.globalAlpha = 1.0;
                            } else {
                                // Draw the line that is the 1D span
                                const len = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
                                if (len > 0.01) {
                                    engine.drawLine(0, 0, v1.x, v1.y, engine.colors.red + '55', 3);
                                }
                            }

                            // Lattice points
                            if (independent) {
                                for (let a = -3; a <= 3; a++) {
                                    for (let b = -3; b <= 3; b++) {
                                        if (a === 0 && b === 0) continue;
                                        const px = a * v1.x + b * v2.x;
                                        const py = a * v1.y + b * v2.y;
                                        engine.drawPoint(px, py, engine.colors.green + '66', null, 2);
                                    }
                                }
                            }

                            engine.drawVector(0, 0, v1.x, v1.y, engine.colors.blue, 'v1', 2.5);
                            engine.drawVector(0, 0, v2.x, v2.y, engine.colors.teal, 'v2', 2.5);

                            engine.drawDraggables();

                            const status = independent ? 'LINEARLY INDEPENDENT' : 'LINEARLY DEPENDENT';
                            const color = independent ? engine.colors.green : engine.colors.red;
                            engine.screenText(status, engine.width / 2, 22, color, 14, 'center', 'top');
                            engine.screenText('det = ' + det.toFixed(3), engine.width / 2, 42, engine.colors.text, 12, 'center', 'top');
                            engine.screenText(independent ? 'span{v1,v2} = R^2' : 'span{v1,v2} = line', engine.width / 2, 58, color, 12, 'center', 'top');
                        }

                        engine.animate(() => draw());
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that in any vector space \\(V\\), the zero vector is unique and the additive inverse of each vector is unique.',
                    hint: 'Suppose there are two zero vectors \\(0\\) and \\(0\'\\). Use the identity axiom with each acting on the other.',
                    solution: '<strong>Uniqueness of \\(0\\):</strong> Suppose \\(0\\) and \\(0\'\\) are both additive identities. Then \\(0 = 0 + 0\' = 0\'\\), where the first equality uses that \\(0\'\\) is an identity and the second uses that \\(0\\) is an identity. <br><br><strong>Uniqueness of \\(-x\\):</strong> Suppose \\(y\\) and \\(z\\) both satisfy \\(x + y = 0\\) and \\(x + z = 0\\). Then \\(y = y + 0 = y + (x + z) = (y + x) + z = 0 + z = z\\).'
                },
                {
                    question: 'Let \\(V = C[0,1]\\) and define \\(W = \\{f \\in V : f(0) = 0\\}\\). Prove that \\(W\\) is a subspace of \\(V\\). Is \\(W\' = \\{f \\in V : f(0) = 1\\}\\) a subspace?',
                    hint: 'For \\(W\\), check the one-line subspace test: \\(\\alpha f + g \\in W\\) for all \\(f, g \\in W\\) and \\(\\alpha \\in \\mathbb{R}\\). For \\(W\'\\), consider the zero function.',
                    solution: '<strong>\\(W\\) is a subspace:</strong> Let \\(f, g \\in W\\) and \\(\\alpha \\in \\mathbb{R}\\). Then \\((\\alpha f + g)(0) = \\alpha f(0) + g(0) = \\alpha \\cdot 0 + 0 = 0\\), so \\(\\alpha f + g \\in W\\). Since the zero function is in \\(W\\), \\(W \\neq \\emptyset\\). <br><br><strong>\\(W\'\\) is NOT a subspace:</strong> The zero function satisfies \\(0(0) = 0 \\neq 1\\), so \\(0 \\notin W\'\\). Alternatively, if \\(f \\in W\'\\) then \\(2f(0) = 2 \\neq 1\\), so \\(W\'\\) is not closed under scalar multiplication.'
                },
                {
                    question: 'Show that \\(\\{1, t, t^2, \\ldots\\}\\) is linearly independent in \\(C[0,1]\\). Conclude that \\(C[0,1]\\) is infinite-dimensional.',
                    hint: 'A polynomial of degree \\(n\\) that is identically zero on \\([0,1]\\) must have all coefficients equal to zero. Use the fact that a nonzero polynomial of degree \\(n\\) has at most \\(n\\) roots.',
                    solution: 'Suppose \\(\\sum_{k=0}^n \\alpha_k t^k = 0\\) for all \\(t \\in [0,1]\\). Since \\([0,1]\\) is an infinite set and a nonzero polynomial of degree \\(n\\) has at most \\(n\\) roots, the polynomial must be the zero polynomial, i.e., \\(\\alpha_k = 0\\) for all \\(k\\). <br><br>Since \\(\\{1, t, \\ldots, t^n\\}\\) is linearly independent for every \\(n\\), the space \\(C[0,1]\\) contains linearly independent sets of arbitrarily large cardinality. If \\(C[0,1]\\) were finite-dimensional with \\(\\dim(C[0,1]) = N\\), then every set of \\(N+1\\) vectors would be dependent, a contradiction. Hence \\(C[0,1]\\) is infinite-dimensional.'
                },
                {
                    question: 'Let \\(V\\) and \\(W\\) be subspaces of a vector space \\(X\\). Prove that \\(V \\cup W\\) is a subspace of \\(X\\) if and only if \\(V \\subseteq W\\) or \\(W \\subseteq V\\).',
                    hint: 'For the nontrivial direction, assume \\(V \\not\\subseteq W\\) and \\(W \\not\\subseteq V\\), so there exist \\(v \\in V \\setminus W\\) and \\(w \\in W \\setminus V\\). Consider \\(v + w\\).',
                    solution: '(\\(\\Leftarrow\\)): If \\(V \\subseteq W\\), then \\(V \\cup W = W\\), which is a subspace. Similarly if \\(W \\subseteq V\\). <br><br>(\\(\\Rightarrow\\)): Suppose \\(V \\cup W\\) is a subspace, \\(V \\not\\subseteq W\\), and \\(W \\not\\subseteq V\\). Pick \\(v \\in V \\setminus W\\) and \\(w \\in W \\setminus V\\). Since \\(V \\cup W\\) is a subspace, \\(v + w \\in V \\cup W\\). <br>Case 1: \\(v + w \\in V\\). Then \\(w = (v+w) - v \\in V\\), contradicting \\(w \\notin V\\). <br>Case 2: \\(v + w \\in W\\). Then \\(v = (v+w) - w \\in W\\), contradicting \\(v \\notin W\\). <br>Both cases yield a contradiction, so the assumption \\(V \\not\\subseteq W\\) and \\(W \\not\\subseteq V\\) is impossible.'
                }
            ]
        },

        // ========== SECTION 2: Norms and Normed Spaces ==========
        {
            id: 'sec02-norms',
            title: 'Norms and Normed Spaces',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Adding Size to Structure.</strong> With the algebraic framework of vector spaces in place, we now introduce the concept that bridges algebra and analysis: the <em>norm</em>. A norm assigns a non-negative "length" to each vector and, through it, defines a metric compatible with the linear structure.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define norms axiomatically, show how every norm induces a metric, and explore the fundamental examples. We emphasize translation invariance and homogeneity, properties that distinguish normed spaces from general metric spaces.</p>
</div>

<h2>1.2 Norms and Normed Spaces</h2>

<p>The transition from pure algebra to analysis requires a notion of <em>size</em> or <em>distance</em>. A norm is a function that assigns a "length" to each vector, and from it we derive a metric, a topology, and the tools of convergence and continuity.</p>

<div class="env-block definition">
<strong>Definition 1.2.1 (Norm).</strong> Let \\(V\\) be a vector space over \\(\\mathbb{F}\\). A function \\(\\|\\cdot\\|: V \\to [0, \\infty)\\) is a <em>norm</em> if it satisfies:
<ol>
<li><strong>(Positive definiteness)</strong> \\(\\|x\\| = 0 \\iff x = 0\\)</li>
<li><strong>(Absolute homogeneity)</strong> \\(\\|\\alpha x\\| = |\\alpha| \\cdot \\|x\\|\\) for all \\(\\alpha \\in \\mathbb{F}\\), \\(x \\in V\\)</li>
<li><strong>(Triangle inequality)</strong> \\(\\|x + y\\| \\le \\|x\\| + \\|y\\|\\) for all \\(x, y \\in V\\)</li>
</ol>
The pair \\((V, \\|\\cdot\\|)\\) is called a <em>normed space</em> (or <em>normed linear space</em>).
</div>

<div class="env-block remark">
<strong>Remark 1.2.2.</strong> If we drop condition (1) and only require \\(\\|x\\| \\ge 0\\) with \\(\\|0\\| = 0\\), the function is called a <em>seminorm</em>. Seminorms appear naturally in the theory of locally convex spaces (Chapter 11).
</div>

<div class="viz-placeholder" data-viz="viz-norm-properties"></div>

<h3>The Induced Metric</h3>

<div class="env-block theorem">
<strong>Proposition 1.2.3.</strong> Every norm \\(\\|\\cdot\\|\\) on \\(V\\) induces a metric \\(d: V \\times V \\to [0,\\infty)\\) by
\\[
d(x, y) = \\|x - y\\|.
\\]
This metric is <em>translation-invariant</em> (\\(d(x+z, y+z) = d(x,y)\\)) and <em>absolutely homogeneous</em> (\\(d(\\alpha x, \\alpha y) = |\\alpha| \\, d(x,y)\\)).
</div>

<div class="env-block proof">
<strong>Proof.</strong> We verify the metric axioms:
<ul>
<li>\\(d(x,y) = \\|x-y\\| \\ge 0\\), and \\(d(x,y) = 0 \\iff \\|x-y\\| = 0 \\iff x = y\\).</li>
<li>\\(d(x,y) = \\|x-y\\| = \\|{-1}\\cdot(y-x)\\| = |{-1}|\\cdot\\|y-x\\| = d(y,x)\\).</li>
<li>\\(d(x,z) = \\|x-z\\| = \\|(x-y)+(y-z)\\| \\le \\|x-y\\| + \\|y-z\\| = d(x,y) + d(y,z)\\).</li>
</ul>
Translation invariance: \\(d(x+z, y+z) = \\|(x+z)-(y+z)\\| = \\|x-y\\| = d(x,y)\\). \\(\\square\\)
</div>

<div class="env-block remark">
<strong>Remark 1.2.4.</strong> Not every metric on a vector space comes from a norm. A metric \\(d\\) is induced by a norm if and only if it is translation-invariant and satisfies \\(d(\\alpha x, 0) = |\\alpha| \\, d(x, 0)\\). For example, the discrete metric \\(d(x,y) = \\mathbf{1}_{x \\neq y}\\) on \\(\\mathbb{R}^n\\) is not induced by any norm.
</div>

<div class="viz-placeholder" data-viz="viz-norm-as-metric"></div>

<h3>Fundamental Examples of Normed Spaces</h3>

<div class="env-block example">
<strong>Example 1.2.5.</strong> Some key normed spaces:
<ol>
<li><strong>\\(\\mathbb{R}^n\\) with the Euclidean norm:</strong> \\(\\|x\\|_2 = \\left(\\sum_{i=1}^n |x_i|^2\\right)^{1/2}\\)</li>
<li><strong>\\(C[a,b]\\) with the sup norm:</strong> \\(\\|f\\|_\\infty = \\sup_{t \\in [a,b]} |f(t)|\\)</li>
<li><strong>\\(\\ell^p\\) spaces:</strong> \\(\\|x\\|_p = \\left(\\sum_{i=1}^\\infty |x_i|^p\\right)^{1/p}\\) for \\(1 \\le p < \\infty\\)</li>
<li><strong>\\(\\ell^\\infty\\):</strong> \\(\\|x\\|_\\infty = \\sup_{i \\ge 1} |x_i|\\)</li>
</ol>
</div>

<div class="env-block theorem">
<strong>Proposition 1.2.6 (Reverse Triangle Inequality).</strong> In any normed space,
\\[
\\big| \\|x\\| - \\|y\\| \\big| \\le \\|x - y\\| \\quad \\text{for all } x, y \\in V.
\\]
</div>

<div class="env-block proof">
<strong>Proof.</strong> From \\(\\|x\\| = \\|(x-y)+y\\| \\le \\|x-y\\| + \\|y\\|\\), we get \\(\\|x\\| - \\|y\\| \\le \\|x-y\\|\\). Swapping \\(x\\) and \\(y\\) gives \\(\\|y\\| - \\|x\\| \\le \\|y-x\\| = \\|x-y\\|\\). Combining: \\(|\\|x\\| - \\|y\\|| \\le \\|x-y\\|\\). \\(\\square\\)
</div>
`,
            visualizations: [
                {
                    id: 'viz-norm-properties',
                    title: 'Norm Properties: Triangle Inequality',
                    setup(body, controls) {
                        const engine = new VizEngine(body, { scale: 50 });

                        const px = engine.addDraggable('x', 2, 1, engine.colors.blue, 8);
                        const py = engine.addDraggable('y', -1, 2.5, engine.colors.teal, 8);

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            const normX = Math.sqrt(px.x * px.x + px.y * px.y);
                            const normY = Math.sqrt(py.x * py.x + py.y * py.y);
                            const sx = px.x + py.x;
                            const sy = px.y + py.y;
                            const normSum = Math.sqrt(sx * sx + sy * sy);

                            // Draw the parallelogram
                            engine.drawSegment(px.x, px.y, sx, sy, engine.colors.teal + '44', 1, true);
                            engine.drawSegment(py.x, py.y, sx, sy, engine.colors.blue + '44', 1, true);

                            // Vectors
                            engine.drawVector(0, 0, px.x, px.y, engine.colors.blue, 'x', 2.5);
                            engine.drawVector(0, 0, py.x, py.y, engine.colors.teal, 'y', 2.5);
                            engine.drawVector(0, 0, sx, sy, engine.colors.orange, 'x+y', 2.5);

                            // Norm circles
                            engine.drawCircle(0, 0, normX, null, engine.colors.blue + '33', 1);
                            engine.drawCircle(0, 0, normY, null, engine.colors.teal + '33', 1);

                            engine.drawDraggables();

                            // Info
                            const lhs = normSum.toFixed(3);
                            const rhs = (normX + normY).toFixed(3);
                            const satisfied = normSum <= normX + normY + 0.001;
                            engine.screenText('||x|| = ' + normX.toFixed(2), 12, 18, engine.colors.blue, 12, 'left', 'top');
                            engine.screenText('||y|| = ' + normY.toFixed(2), 12, 34, engine.colors.teal, 12, 'left', 'top');
                            engine.screenText('||x+y|| = ' + lhs + '  <=  ||x||+||y|| = ' + rhs, 12, 54, satisfied ? engine.colors.green : engine.colors.red, 12, 'left', 'top');
                        }

                        engine.animate(() => draw());
                        return engine;
                    }
                },
                {
                    id: 'viz-norm-as-metric',
                    title: 'The Norm-Induced Metric: Translation Invariance',
                    setup(body, controls) {
                        const engine = new VizEngine(body, { scale: 50 });

                        const pa = engine.addDraggable('a', 1, 0.5, engine.colors.blue, 8);
                        const pb = engine.addDraggable('b', -1, 1.5, engine.colors.teal, 8);
                        const pt = engine.addDraggable('t', 1, -1, engine.colors.yellow, 8);

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            const d = Math.sqrt((pa.x - pb.x) ** 2 + (pa.y - pb.y) ** 2);

                            // Original pair
                            engine.drawSegment(pa.x, pa.y, pb.x, pb.y, engine.colors.orange, 2);
                            engine.drawPoint(pa.x, pa.y, engine.colors.blue, 'x', 6);
                            engine.drawPoint(pb.x, pb.y, engine.colors.teal, 'y', 6);

                            // Translated pair
                            const ax = pa.x + pt.x;
                            const ay = pa.y + pt.y;
                            const bx = pb.x + pt.x;
                            const by = pb.y + pt.y;
                            engine.drawSegment(ax, ay, bx, by, engine.colors.purple, 2);
                            engine.drawPoint(ax, ay, engine.colors.blue + '88', 'x+z', 5);
                            engine.drawPoint(bx, by, engine.colors.teal + '88', 'y+z', 5);

                            // Translation vectors
                            engine.drawSegment(pa.x, pa.y, ax, ay, engine.colors.yellow + '44', 1, true);
                            engine.drawSegment(pb.x, pb.y, bx, by, engine.colors.yellow + '44', 1, true);

                            engine.drawDraggables();

                            const dt = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);
                            engine.screenText('d(x,y) = ' + d.toFixed(3), 12, 18, engine.colors.orange, 13, 'left', 'top');
                            engine.screenText('d(x+z,y+z) = ' + dt.toFixed(3), 12, 38, engine.colors.purple, 13, 'left', 'top');
                            engine.screenText('z = (' + pt.x.toFixed(1) + ', ' + pt.y.toFixed(1) + ')', 12, 58, engine.colors.yellow, 12, 'left', 'top');
                        }

                        engine.animate(() => draw());
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that \\(\\|f\\|_\\infty = \\sup_{t \\in [a,b]} |f(t)|\\) defines a norm on \\(C[a,b]\\).',
                    hint: 'The key step is the triangle inequality. Use \\(|f(t) + g(t)| \\le |f(t)| + |g(t)| \\le \\|f\\|_\\infty + \\|g\\|_\\infty\\) and then take the sup over \\(t\\).',
                    solution: '<strong>Positive definiteness:</strong> \\(\\|f\\|_\\infty = \\sup |f(t)| \\ge 0\\). If \\(\\|f\\|_\\infty = 0\\), then \\(|f(t)| \\le 0\\) for all \\(t\\), so \\(f = 0\\). Conversely, \\(\\|0\\|_\\infty = 0\\). <br><br><strong>Homogeneity:</strong> \\(\\|\\alpha f\\|_\\infty = \\sup |\\alpha f(t)| = |\\alpha| \\sup |f(t)| = |\\alpha| \\, \\|f\\|_\\infty\\). <br><br><strong>Triangle inequality:</strong> For each \\(t\\), \\(|f(t)+g(t)| \\le |f(t)|+|g(t)| \\le \\|f\\|_\\infty + \\|g\\|_\\infty\\). Taking sup: \\(\\|f+g\\|_\\infty \\le \\|f\\|_\\infty + \\|g\\|_\\infty\\).'
                },
                {
                    question: 'Prove the reverse triangle inequality: \\(|\\|x\\| - \\|y\\|| \\le \\|x - y\\|\\).',
                    hint: 'Write \\(x = (x - y) + y\\) and apply the triangle inequality, then swap the roles of \\(x\\) and \\(y\\).',
                    solution: 'From \\(\\|x\\| = \\|(x-y)+y\\| \\le \\|x-y\\| + \\|y\\|\\), we get \\(\\|x\\| - \\|y\\| \\le \\|x-y\\|\\). <br>Similarly, \\(\\|y\\| = \\|(y-x)+x\\| \\le \\|y-x\\|+\\|x\\| = \\|x-y\\|+\\|x\\|\\), giving \\(\\|y\\|-\\|x\\| \\le \\|x-y\\|\\). <br>Combining: \\(|\\|x\\|-\\|y\\|| \\le \\|x-y\\|\\).'
                },
                {
                    question: 'Let \\(V\\) be a normed space and \\(x_n \\to x\\), \\(y_n \\to y\\), \\(\\alpha_n \\to \\alpha\\). Prove that \\(\\alpha_n x_n + y_n \\to \\alpha x + y\\). (This shows vector space operations are continuous in the norm topology.)',
                    hint: 'Estimate \\(\\|\\alpha_n x_n + y_n - \\alpha x - y\\| \\le \\|\\alpha_n x_n - \\alpha x\\| + \\|y_n - y\\|\\) and then split the first term using \\(\\alpha_n x_n - \\alpha x = \\alpha_n(x_n - x) + (\\alpha_n - \\alpha)x\\).',
                    solution: 'We have \\(\\|\\alpha_n x_n + y_n - \\alpha x - y\\| \\le \\|\\alpha_n x_n - \\alpha x\\| + \\|y_n - y\\|\\). For the first term: \\[\\|\\alpha_n x_n - \\alpha x\\| = \\|\\alpha_n(x_n - x) + (\\alpha_n - \\alpha)x\\| \\le |\\alpha_n| \\|x_n - x\\| + |\\alpha_n - \\alpha| \\|x\\|.\\] Since \\(\\alpha_n \\to \\alpha\\), the sequence \\((\\alpha_n)\\) is bounded, say \\(|\\alpha_n| \\le M\\). So \\(\\|\\alpha_n x_n + y_n - \\alpha x - y\\| \\le M\\|x_n - x\\| + |\\alpha_n - \\alpha| \\|x\\| + \\|y_n - y\\| \\to 0\\).'
                }
            ]
        },

        // ========== SECTION 3: The p-norms ==========
        {
            id: 'sec03-p-norms',
            title: 'The p-norms',
            content: `
<div class="bridge-block section-bridge">
<p><strong>A Family of Norms.</strong> Having defined norms abstractly, we now study the most important concrete family: the \(p\)-norms. These norms on \(\mathbb{R}^n\) and sequence spaces provide the prototypical examples that recur throughout functional analysis, and their study requires the classical inequalities of Young, Holder, and Minkowski.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove Young's inequality, derive Holder's inequality, establish the Minkowski inequality (which shows the triangle inequality for \(\|\cdot\|_p\)), and visualize how \(p\)-norm unit balls change shape as \(p\) varies.</p>
</div>

<h2>1.3 The \\(p\\)-Norms</h2>

<p>The \\(p\\)-norms form one of the most important families of norms in analysis. They interpolate between the "taxicab" norm (\\(p=1\\)), the Euclidean norm (\\(p=2\\)), and the max norm (\\(p=\\infty\\)).</p>

<div class="env-block definition">
<strong>Definition 1.3.1 (\\(p\\)-norm on \\(\\mathbb{R}^n\\)).</strong> For \\(1 \\le p < \\infty\\) and \\(x = (x_1, \\ldots, x_n) \\in \\mathbb{R}^n\\), define
\\[
\\|x\\|_p = \\left( \\sum_{i=1}^n |x_i|^p \\right)^{1/p}.
\\]
For \\(p = \\infty\\), define \\(\\|x\\|_\\infty = \\max_{1 \\le i \\le n} |x_i|\\).
</div>

<p>That \\(\\|\\cdot\\|_p\\) satisfies positive definiteness and absolute homogeneity is straightforward. The triangle inequality (known as <em>Minkowski's inequality</em>) requires more work. The key ingredient is:</p>

<div class="env-block theorem">
<strong>Theorem 1.3.2 (Young's Inequality).</strong> Let \\(p, q > 1\\) with \\(\\frac{1}{p} + \\frac{1}{q} = 1\\). For \\(a, b \\ge 0\\),
\\[
ab \\le \\frac{a^p}{p} + \\frac{b^q}{q}.
\\]
</div>

<div class="env-block proof">
<strong>Proof.</strong> If \\(a = 0\\) or \\(b = 0\\), the inequality is trivial. For \\(a, b > 0\\), use the concavity of the logarithm: \\(\\log(ab) = \\log a + \\log b\\), and
\\[
\\log\\left(\\frac{a^p}{p} + \\frac{b^q}{q}\\right) \\ge \\frac{1}{p}\\log(a^p) + \\frac{1}{q}\\log(b^q) = \\log a + \\log b = \\log(ab),
\\]
where we used \\(\\log\\) being concave and \\(\\frac{1}{p}+\\frac{1}{q} = 1\\). Exponentiating gives the result. \\(\\square\\)
</div>

<div class="viz-placeholder" data-viz="viz-young-inequality"></div>

<div class="env-block theorem">
<strong>Theorem 1.3.3 (Holder's Inequality).</strong> Let \\(p, q > 1\\) with \\(\\frac{1}{p} + \\frac{1}{q} = 1\\). For \\(x, y \\in \\mathbb{R}^n\\),
\\[
\\sum_{i=1}^n |x_i y_i| \\le \\|x\\|_p \\|y\\|_q.
\\]
</div>

<div class="env-block proof">
<strong>Proof.</strong> If \\(\\|x\\|_p = 0\\) or \\(\\|y\\|_q = 0\\), the result is trivial. Otherwise, set \\(a_i = |x_i|/\\|x\\|_p\\) and \\(b_i = |y_i|/\\|y\\|_q\\). By Young's inequality:
\\[
\\frac{|x_i y_i|}{\\|x\\|_p\\|y\\|_q} = a_i b_i \\le \\frac{a_i^p}{p} + \\frac{b_i^q}{q}.
\\]
Summing: \\(\\frac{\\sum |x_i y_i|}{\\|x\\|_p \\|y\\|_q} \\le \\frac{1}{p}\\sum \\frac{|x_i|^p}{\\|x\\|_p^p} + \\frac{1}{q}\\sum \\frac{|y_i|^q}{\\|y\\|_q^q} = \\frac{1}{p}+\\frac{1}{q} = 1\\). \\(\\square\\)
</div>

<div class="env-block theorem">
<strong>Theorem 1.3.4 (Minkowski's Inequality).</strong> For \\(1 \\le p \\le \\infty\\) and \\(x, y \\in \\mathbb{R}^n\\),
\\[
\\|x + y\\|_p \\le \\|x\\|_p + \\|y\\|_p.
\\]
Hence \\(\\|\\cdot\\|_p\\) is a norm on \\(\\mathbb{R}^n\\).
</div>

<div class="env-block proof">
<strong>Proof sketch (for \\(1 < p < \\infty\\)).</strong> Write \\(\\|x+y\\|_p^p = \\sum |x_i + y_i|^p \\le \\sum |x_i + y_i|^{p-1}(|x_i| + |y_i|)\\). Apply Holder's inequality with exponents \\(p\\) and \\(q = p/(p-1)\\) to each sum, then divide both sides by \\(\\|x+y\\|_p^{p-1}\\). \\(\\square\\)
</div>

<div class="viz-placeholder" data-viz="viz-unit-ball-morphing"></div>

<h3>Nesting of \\(\\ell^p\\) Norms</h3>

<div class="env-block theorem">
<strong>Proposition 1.3.5 (Norm Comparisons on \\(\\mathbb{R}^n\\)).</strong> For \\(1 \\le p \\le q \\le \\infty\\) and \\(x \\in \\mathbb{R}^n\\):
\\[
\\|x\\|_q \\le \\|x\\|_p \\le n^{1/p - 1/q} \\|x\\|_q.
\\]
In particular, \\(\\|x\\|_\\infty \\le \\|x\\|_2 \\le \\|x\\|_1 \\le n \\|x\\|_\\infty\\) and \\(\\|x\\|_\\infty \\le \\|x\\|_2 \\le \\sqrt{n} \\|x\\|_\\infty\\).
</div>

<div class="viz-placeholder" data-viz="viz-norm-comparison"></div>

<div class="env-block remark">
<strong>Remark 1.3.6.</strong> As \\(p \\to \\infty\\), we have \\(\\|x\\|_p \\to \\|x\\|_\\infty\\). This can be seen from the fact that \\(\\max_i |x_i| \\le \\left(\\sum |x_i|^p\\right)^{1/p} \\le n^{1/p} \\max_i |x_i|\\), and \\(n^{1/p} \\to 1\\).
</div>
`,
            visualizations: [
                {
                    id: 'viz-young-inequality',
                    title: "Young's Inequality: \\(ab \\le \\frac{a^p}{p} + \\frac{b^q}{q}\\)",
                    setup(body, controls) {
                        const engine = new VizEngine(body, {
                            scale: 60,
                            originX: 80,
                            originY: undefined
                        });
                        engine.originY = engine.height - 50;

                        let pVal = 2.0;
                        let aVal = 1.5;
                        VizEngine.createSlider(controls, 'p', 1.1, 6, 2, 0.1, v => { pVal = v; });
                        VizEngine.createSlider(controls, 'a', 0.1, 3, 1.5, 0.1, v => { aVal = v; });

                        function draw() {
                            engine.clear();

                            const q = pVal / (pVal - 1);
                            const b = Math.pow(aVal, pVal - 1); // a^(p-1) = point where equality holds in conjugate sense

                            const ctx = engine.ctx;

                            // Draw axes manually for this non-standard origin
                            ctx.strokeStyle = engine.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(engine.originX, 0);
                            ctx.lineTo(engine.originX, engine.height);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(0, engine.originY);
                            ctx.lineTo(engine.width, engine.originY);
                            ctx.stroke();

                            // Draw t^(p-1) curve
                            const steps = 200;
                            ctx.strokeStyle = engine.colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            for (let i = 0; i <= steps; i++) {
                                const t = i / steps * 3.5;
                                const val = Math.pow(t, pVal - 1);
                                const sx = engine.originX + t * engine.scale;
                                const sy = engine.originY - val * engine.scale;
                                if (sy < 0 || sy > engine.height) { if (i > 0) ctx.stroke(); ctx.beginPath(); continue; }
                                if (i === 0) ctx.moveTo(sx, sy);
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Fill region under curve from 0 to a (= a^p / p)
                            ctx.fillStyle = engine.colors.blue + '33';
                            ctx.beginPath();
                            ctx.moveTo(engine.originX, engine.originY);
                            for (let i = 0; i <= 100; i++) {
                                const t = aVal * i / 100;
                                const val = Math.pow(t, pVal - 1);
                                const sx = engine.originX + t * engine.scale;
                                const sy = engine.originY - Math.min(val, 4) * engine.scale;
                                ctx.lineTo(sx, sy);
                            }
                            ctx.lineTo(engine.originX + aVal * engine.scale, engine.originY);
                            ctx.closePath();
                            ctx.fill();

                            // Fill region left of curve from 0 to b (= b^q / q)
                            ctx.fillStyle = engine.colors.teal + '33';
                            ctx.beginPath();
                            ctx.moveTo(engine.originX, engine.originY);
                            for (let i = 0; i <= 100; i++) {
                                const s = b * i / 100;
                                // Inverse: if s = t^(p-1), then t = s^(1/(p-1)) = s^(q-1)
                                const t = Math.pow(s, 1 / (pVal - 1));
                                const sx = engine.originX + t * engine.scale;
                                const sy = engine.originY - s * engine.scale;
                                if (sy < 0) continue;
                                ctx.lineTo(sx, sy);
                            }
                            ctx.lineTo(engine.originX, engine.originY - Math.min(b, 4) * engine.scale);
                            ctx.closePath();
                            ctx.fill();

                            // Mark point (a, b) = (a, a^(p-1))
                            const markSx = engine.originX + aVal * engine.scale;
                            const markSy = engine.originY - Math.min(b, 4) * engine.scale;
                            ctx.setLineDash([4, 4]);
                            ctx.strokeStyle = engine.colors.orange;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(markSx, engine.originY); ctx.lineTo(markSx, markSy); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(engine.originX, markSy); ctx.lineTo(markSx, markSy); ctx.stroke();
                            ctx.setLineDash([]);

                            // Rectangle ab
                            ctx.strokeStyle = engine.colors.orange + '66';
                            ctx.lineWidth = 1;
                            ctx.strokeRect(engine.originX, markSy, aVal * engine.scale, b * engine.scale);

                            engine.drawPoint(aVal, b, engine.colors.orange, null, 5);

                            // Labels
                            const ab = aVal * b;
                            const apOverP = Math.pow(aVal, pVal) / pVal;
                            const bqOverQ = Math.pow(b, q) / q;

                            engine.screenText('s = t^(p-1),  p = ' + pVal.toFixed(1) + ',  q = ' + q.toFixed(2), engine.width / 2, 16, engine.colors.white, 13, 'center', 'top');
                            engine.screenText('a = ' + aVal.toFixed(1), markSx, engine.originY + 16, engine.colors.orange, 12, 'center', 'top');
                            engine.screenText('b = ' + b.toFixed(2), engine.originX - 8, markSy, engine.colors.orange, 11, 'right', 'middle');

                            const y0 = engine.height - 30;
                            engine.screenText('ab = ' + ab.toFixed(2), engine.width * 0.2, y0, engine.colors.orange, 12, 'center', 'top');
                            engine.screenText('a^p/p = ' + apOverP.toFixed(2), engine.width * 0.5, y0, engine.colors.blue, 12, 'center', 'top');
                            engine.screenText('b^q/q = ' + bqOverQ.toFixed(2), engine.width * 0.8, y0, engine.colors.teal, 12, 'center', 'top');
                        }

                        engine.animate(() => draw());
                        return engine;
                    }
                },
                {
                    id: 'viz-unit-ball-morphing',
                    title: 'Unit Balls of \\(\\ell^p\\) Norms: Morphing with \\(p\\)',
                    setup(body, controls) {
                        const engine = new VizEngine(body, { scale: 80 });

                        let p = 2.0;
                        let animating = false;
                        let animDir = 1;
                        let animP = 1.0;

                        const slider = VizEngine.createSlider(controls, 'p', 0.5, 20, 2, 0.1, val => {
                            p = val;
                            if (!animating) p = val;
                        });

                        VizEngine.createButton(controls, 'Animate p: 1 to inf', () => {
                            animating = !animating;
                            if (animating) { animP = 1.0; animDir = 1; }
                        });

                        function lpNorm(x, y, pv) {
                            if (pv >= 50) return Math.max(Math.abs(x), Math.abs(y));
                            return Math.pow(Math.pow(Math.abs(x), pv) + Math.pow(Math.abs(y), pv), 1 / pv);
                        }

                        function draw(t) {
                            if (animating) {
                                animP += animDir * 0.02;
                                if (animP > 20) { animP = 20; animDir = -1; }
                                if (animP < 0.5) { animP = 0.5; animDir = 1; }
                                p = animP;
                                slider.value = p;
                                slider.dispatchEvent(new Event('input'));
                            }

                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // Draw unit ball boundary
                            const steps = 500;
                            const ctx = engine.ctx;

                            // Fill
                            ctx.fillStyle = engine.colors.blue + '18';
                            ctx.beginPath();
                            for (let i = 0; i <= steps; i++) {
                                const theta = (2 * Math.PI * i) / steps;
                                const dx = Math.cos(theta);
                                const dy = Math.sin(theta);
                                const r = 1 / lpNorm(dx, dy, p);
                                const x = r * dx;
                                const y = r * dy;
                                const [sx, sy] = engine.toScreen(x, y);
                                if (i === 0) ctx.moveTo(sx, sy);
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.closePath();
                            ctx.fill();

                            // Stroke
                            ctx.strokeStyle = engine.colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            for (let i = 0; i <= steps; i++) {
                                const theta = (2 * Math.PI * i) / steps;
                                const dx = Math.cos(theta);
                                const dy = Math.sin(theta);
                                const r = 1 / lpNorm(dx, dy, p);
                                const x = r * dx;
                                const y = r * dy;
                                const [sx, sy] = engine.toScreen(x, y);
                                if (i === 0) ctx.moveTo(sx, sy);
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.closePath();
                            ctx.stroke();

                            // Mark special points
                            const r1 = 1 / lpNorm(1, 0, p);
                            engine.drawPoint(r1, 0, engine.colors.orange, '(1,0)', 4);
                            engine.drawPoint(0, r1, engine.colors.orange, '(0,1)', 4);

                            // Diagonal point
                            const dg = 1 / lpNorm(1, 1, p);
                            engine.drawPoint(dg, dg, engine.colors.teal, null, 4);

                            // Labels
                            const pLabel = p >= 20 ? 'inf' : p.toFixed(1);
                            engine.screenText('p = ' + pLabel, engine.width / 2, 16, engine.colors.white, 16, 'center', 'top');
                            engine.screenText('Unit ball: {x : ||x||_p <= 1}', engine.width / 2, 38, engine.colors.text, 12, 'center', 'top');

                            // Descriptions for special p values
                            let desc = '';
                            if (Math.abs(p - 1) < 0.15) desc = 'Diamond (L1 / taxicab)';
                            else if (Math.abs(p - 2) < 0.15) desc = 'Circle (Euclidean)';
                            else if (p > 15) desc = 'Square (L-infinity / max)';
                            else if (p < 1) desc = 'Non-convex (not a norm for p < 1)';
                            if (desc) engine.screenText(desc, engine.width / 2, engine.height - 16, engine.colors.yellow, 13, 'center', 'bottom');
                        }

                        engine.animate(draw);
                        return engine;
                    }
                },
                {
                    id: 'viz-norm-comparison',
                    title: 'Comparing \\(\\ell^p\\) Norms on \\(\\mathbb{R}^2\\)',
                    setup(body, controls) {
                        const engine = new VizEngine(body, { scale: 55 });

                        const pt = engine.addDraggable('pt', 1.5, 1, engine.colors.white, 8);

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            const x = pt.x;
                            const y = pt.y;

                            const norm1 = Math.abs(x) + Math.abs(y);
                            const norm2 = Math.sqrt(x * x + y * y);
                            const normInf = Math.max(Math.abs(x), Math.abs(y));

                            // Draw unit spheres scaled to each norm value
                            // L1 ball of radius norm1
                            const ctx = engine.ctx;
                            function drawLpBall(pv, radius, color) {
                                ctx.strokeStyle = color;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                const steps = 300;
                                for (let i = 0; i <= steps; i++) {
                                    const theta = (2 * Math.PI * i) / steps;
                                    const dx = Math.cos(theta);
                                    const dy = Math.sin(theta);
                                    let r;
                                    if (pv >= 50) r = radius / Math.max(Math.abs(dx), Math.abs(dy));
                                    else r = radius / Math.pow(Math.pow(Math.abs(dx), pv) + Math.pow(Math.abs(dy), pv), 1 / pv);
                                    const [sx, sy] = engine.toScreen(r * dx, r * dy);
                                    if (i === 0) ctx.moveTo(sx, sy);
                                    else ctx.lineTo(sx, sy);
                                }
                                ctx.closePath();
                                ctx.stroke();
                            }

                            drawLpBall(1, norm1, engine.colors.orange);
                            drawLpBall(2, norm2, engine.colors.blue);
                            drawLpBall(100, normInf, engine.colors.teal);

                            engine.drawVector(0, 0, x, y, engine.colors.white, null, 1.5);
                            engine.drawDraggables();

                            // Legend
                            engine.screenText('||x||_1 = ' + norm1.toFixed(3), 12, 18, engine.colors.orange, 13, 'left', 'top');
                            engine.screenText('||x||_2 = ' + norm2.toFixed(3), 12, 38, engine.colors.blue, 13, 'left', 'top');
                            engine.screenText('||x||_inf = ' + normInf.toFixed(3), 12, 58, engine.colors.teal, 13, 'left', 'top');
                            engine.screenText('||x||_inf <= ||x||_2 <= ||x||_1', engine.width / 2, engine.height - 14, engine.colors.yellow, 12, 'center', 'bottom');
                        }

                        engine.animate(() => draw());
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Verify directly that \\(\\|\\cdot\\|_1\\) is a norm on \\(\\mathbb{R}^n\\) (without using Minkowski\'s inequality).',
                    hint: 'The triangle inequality for \\(\\|\\cdot\\|_1\\) follows from the ordinary triangle inequality \\(|a + b| \\le |a| + |b|\\) applied componentwise.',
                    solution: '<strong>Positive definiteness:</strong> \\(\\|x\\|_1 = \\sum |x_i| \\ge 0\\), and \\(\\|x\\|_1 = 0\\) iff \\(|x_i| = 0\\) for all \\(i\\), iff \\(x = 0\\). <br><br><strong>Homogeneity:</strong> \\(\\|\\alpha x\\|_1 = \\sum |\\alpha x_i| = |\\alpha| \\sum |x_i| = |\\alpha| \\|x\\|_1\\). <br><br><strong>Triangle inequality:</strong> \\(\\|x+y\\|_1 = \\sum |x_i+y_i| \\le \\sum (|x_i|+|y_i|) = \\sum |x_i| + \\sum |y_i| = \\|x\\|_1 + \\|y\\|_1\\).'
                },
                {
                    question: 'Prove that \\(\\lim_{p \\to \\infty} \\|x\\|_p = \\|x\\|_\\infty\\) for any \\(x \\in \\mathbb{R}^n\\).',
                    hint: 'Let \\(M = \\max_i |x_i|\\). Show \\(M \\le \\|x\\|_p \\le n^{1/p} M\\) and use \\(n^{1/p} \\to 1\\).',
                    solution: 'Let \\(M = \\|x\\|_\\infty = \\max_i |x_i|\\). Then \\(M^p \\le \\sum_i |x_i|^p \\le n M^p\\), so \\(M \\le \\|x\\|_p \\le n^{1/p} M\\). As \\(p \\to \\infty\\), \\(n^{1/p} = e^{(\\ln n)/p} \\to 1\\). By the squeeze theorem, \\(\\|x\\|_p \\to M = \\|x\\|_\\infty\\).'
                },
                {
                    question: 'Show that \\(\\|\\cdot\\|_p\\) with \\(0 < p < 1\\) does NOT satisfy the triangle inequality on \\(\\mathbb{R}^2\\). (So it is not a norm.) Provide a specific counterexample.',
                    hint: 'Try \\(x = (1, 0)\\) and \\(y = (0, 1)\\) with \\(p = 1/2\\).',
                    solution: 'Take \\(p = 1/2\\) and \\(x = (1,0)\\), \\(y = (0,1)\\). Then: <br> \\(\\|x\\|_{1/2} = (1^{1/2} + 0^{1/2})^{2} = 1\\), <br> \\(\\|y\\|_{1/2} = (0^{1/2} + 1^{1/2})^{2} = 1\\), <br> \\(\\|x+y\\|_{1/2} = (1^{1/2} + 1^{1/2})^{2} = (2)^2 = 4\\). <br>But \\(4 > 1 + 1 = 2\\), violating the triangle inequality. In fact, for any \\(0 < p < 1\\), the unit ball \\(\\{x : \\|x\\|_p \\le 1\\}\\) is not convex, which is equivalent to the failure of the triangle inequality.'
                },
                {
                    question: 'Prove Holder\'s inequality for sums using Young\'s inequality. That is, for \\(1 < p < \\infty\\), \\(q = p/(p-1)\\), prove \\(\\sum_{i=1}^n |a_i b_i| \\le \\|a\\|_p \\|b\\|_q\\).',
                    hint: 'WLOG \\(\\|a\\|_p = \\|b\\|_q = 1\\) (why?). Apply Young\'s inequality to each term \\(|a_i| \\cdot |b_i|\\) and sum.',
                    solution: 'If \\(\\|a\\|_p = 0\\) or \\(\\|b\\|_q = 0\\), the result is trivial. Otherwise, set \\(\\tilde{a}_i = |a_i|/\\|a\\|_p\\) and \\(\\tilde{b}_i = |b_i|/\\|b\\|_q\\). It suffices to show \\(\\sum \\tilde{a}_i \\tilde{b}_i \\le 1\\). By Young\'s inequality: \\[\\sum_{i=1}^n \\tilde{a}_i \\tilde{b}_i \\le \\sum_{i=1}^n \\left(\\frac{\\tilde{a}_i^p}{p} + \\frac{\\tilde{b}_i^q}{q}\\right) = \\frac{1}{p} \\sum \\frac{|a_i|^p}{\\|a\\|_p^p} + \\frac{1}{q} \\sum \\frac{|b_i|^q}{\\|b\\|_q^q} = \\frac{1}{p} + \\frac{1}{q} = 1.\\]'
                }
            ]
        },

        // ========== SECTION 4: Equivalent Norms ==========
        {
            id: 'sec04-equivalent-norms',
            title: 'Equivalent Norms',
            content: `
<div class="bridge-block section-bridge">
<p><strong>When Do Different Norms Agree?</strong> Different norms on the same vector space can produce different topologies and different notions of convergence. A central question is: when do two norms lead to the <em>same</em> topology? The answer reveals a striking dichotomy between finite and infinite dimensions.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define norm equivalence, prove that all norms on finite-dimensional spaces are equivalent, and show that this fails in infinite dimensions. This is the first glimpse of how infinite-dimensional analysis diverges fundamentally from finite-dimensional linear algebra.</p>
</div>

<h2>1.4 Equivalent Norms</h2>

<p>Different norms on the same vector space can give rise to different metrics and topologies. When two norms generate the <em>same</em> topology, they are called <em>equivalent</em>. The main theorem of this section is one of the most important finite-dimensional results in functional analysis.</p>

<div class="env-block definition">
<strong>Definition 1.4.1 (Equivalent Norms).</strong> Two norms \\(\\|\\cdot\\|_a\\) and \\(\\|\\cdot\\|_b\\) on a vector space \\(V\\) are <em>equivalent</em> if there exist constants \\(c, C > 0\\) such that
\\[
c \\, \\|x\\|_a \\le \\|x\\|_b \\le C \\, \\|x\\|_a \\quad \\text{for all } x \\in V.
\\]
</div>

<div class="env-block remark">
<strong>Remark 1.4.2.</strong> Norm equivalence is an equivalence relation. Two norms are equivalent if and only if they generate the same topology (the same open sets, the same convergent sequences, the same continuous functions).
</div>

<div class="viz-placeholder" data-viz="viz-equiv-norms-balls"></div>

<div class="env-block theorem">
<strong>Theorem 1.4.3 (Equivalence of Norms in Finite Dimensions).</strong> On a finite-dimensional vector space, all norms are equivalent.
</div>

<div class="env-block proof">
<strong>Proof.</strong> Let \\(V\\) be a vector space with \\(\\dim(V) = n\\) and basis \\(\\{e_1, \\ldots, e_n\\}\\). It suffices to show that every norm \\(\\|\\cdot\\|\\) on \\(V\\) is equivalent to \\(\\|\\cdot\\|_1\\) defined by \\(\\|x\\|_1 = \\sum_{i=1}^n |\\alpha_i|\\), where \\(x = \\sum \\alpha_i e_i\\).

<p><em>Step 1: Upper bound.</em> Set \\(M = \\max_{1 \\le i \\le n} \\|e_i\\|\\). Then
\\[
\\|x\\| = \\left\\| \\sum_{i=1}^n \\alpha_i e_i \\right\\| \\le \\sum_{i=1}^n |\\alpha_i| \\, \\|e_i\\| \\le M \\sum_{i=1}^n |\\alpha_i| = M \\|x\\|_1.
\\]
So \\(\\|\\cdot\\|\\) is <em>Lipschitz continuous</em> with respect to \\(\\|\\cdot\\|_1\\).</p>

<p><em>Step 2: Lower bound.</em> The unit sphere \\(S = \\{x \\in V : \\|x\\|_1 = 1\\}\\) is compact in the \\(\\|\\cdot\\|_1\\)-topology (it is closed and bounded in \\(\\mathbb{R}^n\\) via the coordinate map). The function \\(x \\mapsto \\|x\\|\\) is continuous on \\(S\\) (by Step 1) and positive on \\(S\\) (since \\(\\|x\\| = 0 \\implies x = 0 \\implies \\|x\\|_1 = 0\\), contradicting \\(x \\in S\\)). By the extreme value theorem, there exists \\(m = \\min_{x \\in S} \\|x\\| > 0\\). Then for any \\(x \\neq 0\\):
\\[
\\|x\\| = \\|x\\|_1 \\cdot \\left\\| \\frac{x}{\\|x\\|_1} \\right\\| \\ge m \\, \\|x\\|_1.
\\]
Combining: \\(m\\|x\\|_1 \\le \\|x\\| \\le M\\|x\\|_1\\). \\(\\square\\)</p>
</div>

<div class="env-block remark">
<strong>Remark 1.4.4 (Failure in Infinite Dimensions).</strong> The theorem fails spectacularly in infinite dimensions. On \\(C[0,1]\\), the norms \\(\\|f\\|_\\infty\\) and \\(\\|f\\|_1 = \\int_0^1 |f(t)|\\,dt\\) are <strong>not</strong> equivalent: consider \\(f_n(t) = t^n\\), for which \\(\\|f_n\\|_\\infty = 1\\) but \\(\\|f_n\\|_1 = 1/(n+1) \\to 0\\).
</div>

<div class="viz-placeholder" data-viz="viz-norms-not-equiv-infty"></div>

<h3>Riesz's Lemma</h3>

<p>The failure of norm equivalence in infinite dimensions is intimately connected to the following fundamental lemma, which is the infinite-dimensional substitute for the compactness of the unit ball.</p>

<div class="env-block theorem">
<strong>Lemma 1.4.5 (Riesz's Lemma).</strong> Let \\(Y\\) be a <em>proper closed</em> subspace of a normed space \\(X\\) (i.e., \\(Y \\subsetneq X\\), \\(Y\\) closed). Then for every \\(0 < \\theta < 1\\), there exists \\(x_\\theta \\in X\\) with \\(\\|x_\\theta\\| = 1\\) and
\\[
\\mathrm{dist}(x_\\theta, Y) = \\inf_{y \\in Y} \\|x_\\theta - y\\| \\ge \\theta.
\\]
</div>

<div class="env-block proof">
<strong>Proof.</strong> Pick any \\(x_0 \\in X \\setminus Y\\). Since \\(Y\\) is closed, \\(d := \\mathrm{dist}(x_0, Y) > 0\\). Choose \\(y_0 \\in Y\\) such that \\(\\|x_0 - y_0\\| \\le d/\\theta\\) (possible since \\(d/\\theta > d = \\inf\\)). Set
\\[
x_\\theta = \\frac{x_0 - y_0}{\\|x_0 - y_0\\|}.
\\]
Then \\(\\|x_\\theta\\| = 1\\). For any \\(y \\in Y\\):
\\[
\\|x_\\theta - y\\| = \\frac{\\|x_0 - y_0 - \\|x_0 - y_0\\| y\\|}{\\|x_0 - y_0\\|} = \\frac{\\|x_0 - (y_0 + \\|x_0-y_0\\| y)\\|}{\\|x_0-y_0\\|}.
\\]
Since \\(y_0 + \\|x_0-y_0\\| y \\in Y\\), the numerator is \\(\\ge d\\). So \\(\\|x_\\theta - y\\| \\ge d/\\|x_0-y_0\\| \\ge d/(d/\\theta) = \\theta\\). \\(\\square\\)
</div>

<div class="viz-placeholder" data-viz="viz-riesz-lemma"></div>

<div class="env-block remark">
<strong>Remark 1.4.6.</strong> In finite dimensions, one can always achieve \\(\\theta = 1\\) (take the nearest point on \\(Y\\) and move perpendicular to it). In infinite dimensions, \\(\\theta = 1\\) is not always achievable: there may be no \\(x\\) with \\(\\|x\\| = 1\\) and \\(\\mathrm{dist}(x, Y) = 1\\). This is related to the non-compactness of the unit ball.
</div>
`,
            visualizations: [
                {
                    id: 'viz-equiv-norms-balls',
                    title: 'Equivalent Norms: Sandwiched Unit Balls',
                    setup(body, controls) {
                        const engine = new VizEngine(body, { scale: 70 });

                        let pA = 1;
                        let pB = 2;
                        VizEngine.createSlider(controls, 'p (inner)', 1, 10, 1, 0.1, v => { pA = v; });
                        VizEngine.createSlider(controls, 'q (outer)', 1, 10, 2, 0.1, v => { pB = v; });

                        function lpNorm(x, y, p) {
                            if (p >= 50) return Math.max(Math.abs(x), Math.abs(y));
                            return Math.pow(Math.pow(Math.abs(x), p) + Math.pow(Math.abs(y), p), 1 / p);
                        }

                        function drawBall(pv, color, lw) {
                            const ctx = engine.ctx;
                            ctx.strokeStyle = color;
                            ctx.lineWidth = lw;
                            ctx.beginPath();
                            const steps = 400;
                            for (let i = 0; i <= steps; i++) {
                                const theta = (2 * Math.PI * i) / steps;
                                const dx = Math.cos(theta);
                                const dy = Math.sin(theta);
                                const r = 1 / lpNorm(dx, dy, pv);
                                const [sx, sy] = engine.toScreen(r * dx, r * dy);
                                if (i === 0) ctx.moveTo(sx, sy);
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.closePath();
                            ctx.stroke();
                        }

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // Compute equivalence constants
                            // For R^2: ||x||_q <= C * ||x||_p
                            // C = n^(1/q - 1/p) when q < p, C = 1 when q >= p  (for finite-dim norms)
                            const n = 2;

                            drawBall(pA, engine.colors.blue, 2.5);
                            drawBall(pB, engine.colors.teal, 2.5);

                            // Find actual constants by sampling
                            let maxRatio = 0;
                            let minRatio = Infinity;
                            for (let i = 0; i < 1000; i++) {
                                const theta = (2 * Math.PI * i) / 1000;
                                const x = Math.cos(theta);
                                const y = Math.sin(theta);
                                const na = lpNorm(x, y, pA);
                                const nb = lpNorm(x, y, pB);
                                const ratio = nb / na;
                                if (ratio > maxRatio) maxRatio = ratio;
                                if (ratio < minRatio) minRatio = ratio;
                            }

                            engine.screenText('Blue: ||.||_' + pA.toFixed(1) + ' ball', 12, 18, engine.colors.blue, 12, 'left', 'top');
                            engine.screenText('Teal: ||.||_' + pB.toFixed(1) + ' ball', 12, 36, engine.colors.teal, 12, 'left', 'top');
                            engine.screenText(minRatio.toFixed(2) + ' * ||x||_p <= ||x||_q <= ' + maxRatio.toFixed(2) + ' * ||x||_p', engine.width / 2, engine.height - 14, engine.colors.yellow, 12, 'center', 'bottom');
                        }

                        engine.animate(() => draw());
                        return engine;
                    }
                },
                {
                    id: 'viz-norms-not-equiv-infty',
                    title: 'Non-Equivalent Norms on \\(C[0,1]\\): \\(f_n(t) = t^n\\)',
                    setup(body, controls) {
                        const engine = new VizEngine(body, {
                            scale: 200,
                            originX: 60,
                            originY: undefined
                        });
                        engine.originY = engine.height - 50;

                        let nVal = 1;
                        VizEngine.createSlider(controls, 'n', 1, 30, 1, 1, v => { nVal = Math.round(v); });

                        function draw() {
                            engine.clear();

                            const ctx = engine.ctx;

                            // Axes
                            ctx.strokeStyle = engine.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(engine.originX, 0);
                            ctx.lineTo(engine.originX, engine.height);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(0, engine.originY);
                            ctx.lineTo(engine.width, engine.originY);
                            ctx.stroke();

                            // Tick marks
                            ctx.fillStyle = engine.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            const [s1x] = engine.toScreen(1, 0);
                            ctx.fillText('1', s1x, engine.originY + 4);
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                            const [, s1y] = engine.toScreen(0, 1);
                            ctx.fillText('1', engine.originX - 6, s1y);

                            // Draw t^n for several n values
                            const maxN = nVal;
                            for (let k = 1; k <= maxN; k++) {
                                const alpha = k === maxN ? 1 : 0.25;
                                const color = k === maxN ? engine.colors.blue : engine.colors.blue + '44';
                                ctx.strokeStyle = color;
                                ctx.lineWidth = k === maxN ? 2.5 : 1;
                                ctx.beginPath();
                                const steps = 200;
                                for (let i = 0; i <= steps; i++) {
                                    const t = i / steps;
                                    const val = Math.pow(t, k);
                                    const [sx, sy] = engine.toScreen(t, val);
                                    if (i === 0) ctx.moveTo(sx, sy);
                                    else ctx.lineTo(sx, sy);
                                }
                                ctx.stroke();
                            }

                            // Shade area under current curve = 1/(n+1)
                            ctx.fillStyle = engine.colors.blue + '22';
                            ctx.beginPath();
                            ctx.moveTo(engine.originX, engine.originY);
                            for (let i = 0; i <= 200; i++) {
                                const t = i / 200;
                                const val = Math.pow(t, nVal);
                                const [sx, sy] = engine.toScreen(t, val);
                                ctx.lineTo(sx, sy);
                            }
                            const [endX] = engine.toScreen(1, 0);
                            ctx.lineTo(endX, engine.originY);
                            ctx.closePath();
                            ctx.fill();

                            const supNorm = 1;
                            const l1Norm = 1 / (nVal + 1);

                            engine.screenText('f_n(t) = t^' + nVal, engine.width / 2, 16, engine.colors.blue, 15, 'center', 'top');
                            engine.screenText('||f_n||_sup = ' + supNorm.toFixed(1) + '  (always 1)', 12, engine.height - 44, engine.colors.orange, 13, 'left', 'bottom');
                            engine.screenText('||f_n||_1  = 1/' + (nVal + 1) + ' = ' + l1Norm.toFixed(4) + '  -> 0', 12, engine.height - 24, engine.colors.teal, 13, 'left', 'bottom');
                            engine.screenText('No constant C: C*||f||_1 >= ||f||_sup fails!', engine.width / 2, engine.height - 4, engine.colors.red, 12, 'center', 'bottom');
                        }

                        engine.animate(() => draw());
                        return engine;
                    }
                },
                {
                    id: 'viz-riesz-lemma',
                    title: "Riesz's Lemma: Almost-Orthogonal Vectors",
                    setup(body, controls) {
                        const engine = new VizEngine(body, { scale: 70 });

                        let theta = 0.8;
                        let subspaceAngle = 0;
                        VizEngine.createSlider(controls, 'theta', 0.1, 0.99, 0.8, 0.01, v => { theta = v; });
                        VizEngine.createSlider(controls, 'Subspace angle', -1.5, 1.5, 0, 0.05, v => { subspaceAngle = v; });

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // Subspace Y: a line through origin at angle subspaceAngle
                            const ux = Math.cos(subspaceAngle);
                            const uy = Math.sin(subspaceAngle);
                            engine.drawLine(0, 0, ux, uy, engine.colors.teal + '55', 2);
                            engine.drawText('Y', 3.5 * ux + 0.15, 3.5 * uy + 0.15, engine.colors.teal, 14, 'left');

                            // Unit circle
                            engine.drawCircle(0, 0, 1, null, engine.colors.white + '33', 1);

                            // Find x_theta on the unit circle that is at distance >= theta from Y
                            // Distance from (cos a, sin a) to line Y is |sin(a - subspaceAngle)|
                            // We want |sin(a - subspaceAngle)| >= theta
                            // So a - subspaceAngle >= arcsin(theta)
                            const offset = Math.asin(Math.min(theta, 0.999));
                            const bestAngle = subspaceAngle + offset;
                            const xTh = Math.cos(bestAngle);
                            const yTh = Math.sin(bestAngle);

                            // Nearest point on Y to x_theta
                            const proj = xTh * ux + yTh * uy;
                            const nearX = proj * ux;
                            const nearY = proj * uy;

                            // Distance
                            const dist = Math.sqrt((xTh - nearX) ** 2 + (yTh - nearY) ** 2);

                            // Draw the theta-neighborhood of Y
                            const perpX = -uy;
                            const perpY = ux;
                            const ctx = engine.ctx;
                            ctx.fillStyle = engine.colors.teal + '11';
                            ctx.beginPath();
                            const ext = 5;
                            const [s1x, s1y] = engine.toScreen(-ext * ux + theta * perpX, -ext * uy + theta * perpY);
                            const [s2x, s2y] = engine.toScreen(ext * ux + theta * perpX, ext * uy + theta * perpY);
                            const [s3x, s3y] = engine.toScreen(ext * ux - theta * perpX, ext * uy - theta * perpY);
                            const [s4x, s4y] = engine.toScreen(-ext * ux - theta * perpX, -ext * uy - theta * perpY);
                            ctx.moveTo(s1x, s1y);
                            ctx.lineTo(s2x, s2y);
                            ctx.lineTo(s3x, s3y);
                            ctx.lineTo(s4x, s4y);
                            ctx.closePath();
                            ctx.fill();

                            // Draw x_theta
                            engine.drawPoint(xTh, yTh, engine.colors.orange, 'x_theta', 6);

                            // Draw distance line
                            engine.drawSegment(xTh, yTh, nearX, nearY, engine.colors.red, 2);
                            engine.drawPoint(nearX, nearY, engine.colors.teal, 'proj', 4);

                            engine.screenText('theta = ' + theta.toFixed(2), 12, 18, engine.colors.white, 13, 'left', 'top');
                            engine.screenText('||x_theta|| = 1', 12, 38, engine.colors.orange, 12, 'left', 'top');
                            engine.screenText('dist(x_theta, Y) = ' + dist.toFixed(3) + ' >= ' + theta.toFixed(2), 12, 58, engine.colors.red, 12, 'left', 'top');
                        }

                        engine.animate(() => draw());
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that norm equivalence is an equivalence relation (reflexive, symmetric, transitive).',
                    hint: 'Reflexivity: take \\(c = C = 1\\). Symmetry: flip the inequality. Transitivity: chain the inequalities.',
                    solution: '<strong>Reflexive:</strong> \\(1 \\cdot \\|x\\|_a \\le \\|x\\|_a \\le 1 \\cdot \\|x\\|_a\\). <br><br><strong>Symmetric:</strong> If \\(c\\|x\\|_a \\le \\|x\\|_b \\le C\\|x\\|_a\\), then \\(\\frac{1}{C}\\|x\\|_b \\le \\|x\\|_a \\le \\frac{1}{c}\\|x\\|_b\\). <br><br><strong>Transitive:</strong> If \\(c_1 \\|x\\|_a \\le \\|x\\|_b \\le C_1 \\|x\\|_a\\) and \\(c_2 \\|x\\|_b \\le \\|x\\|_c \\le C_2 \\|x\\|_b\\), then \\(c_1 c_2 \\|x\\|_a \\le c_2 \\|x\\|_b \\le \\|x\\|_c \\le C_2 \\|x\\|_b \\le C_1 C_2 \\|x\\|_a\\).'
                },
                {
                    question: 'On \\(C[0,1]\\), define \\(\\|f\\|_2 = \\left(\\int_0^1 |f(t)|^2 \\, dt\\right)^{1/2}\\). Show that \\(\\|\\cdot\\|_2\\) and \\(\\|\\cdot\\|_\\infty\\) are NOT equivalent by finding a sequence \\((f_n)\\) that converges in one norm but not the other.',
                    hint: 'Consider a "spike" function that is tall but narrow: \\(f_n\\) takes value \\(n\\) on a small interval and \\(0\\) elsewhere (smoothed to be continuous).',
                    solution: 'Define \\(f_n \\in C[0,1]\\) as a triangle with peak \\(n\\) at \\(t=0\\) and support on \\([0, 1/n^2]\\): \\(f_n(t) = n(1 - n^2 t)\\) for \\(t \\in [0, 1/n^2]\\), and \\(f_n(t) = 0\\) for \\(t > 1/n^2\\). Then: <br> \\(\\|f_n\\|_\\infty = n \\to \\infty\\). <br> \\(\\|f_n\\|_2^2 = \\int_0^{1/n^2} n^2(1-n^2 t)^2\\,dt = n^2 \\cdot \\frac{1}{3n^2} = \\frac{1}{3}\\), <br>so \\(\\|f_n\\|_2 = 1/\\sqrt{3}\\) stays bounded. <br>Thus \\(f_n/\\|f_n\\|_2\\) has bounded \\(\\|\\cdot\\|_2\\)-norm but unbounded \\(\\|\\cdot\\|_\\infty\\)-norm, so no constant \\(C\\) can satisfy \\(\\|f\\|_\\infty \\le C \\|f\\|_2\\).'
                },
                {
                    question: 'Use Riesz\'s lemma to prove: if \\(X\\) is an infinite-dimensional normed space, then the closed unit ball \\(\\overline{B}(0,1)\\) is NOT compact.',
                    hint: 'Inductively construct a sequence \\((x_n)\\) in the unit ball with \\(\\|x_m - x_n\\| \\ge 1/2\\) for \\(m \\neq n\\). Use Riesz\'s lemma with \\(\\theta = 1/2\\) at each step.',
                    solution: 'Construct \\((x_n)\\) inductively. Pick \\(x_1\\) with \\(\\|x_1\\| = 1\\). Let \\(Y_1 = \\mathrm{span}\\{x_1\\}\\), which is a proper closed subspace (finite-dimensional). By Riesz with \\(\\theta = 1/2\\), choose \\(x_2\\) with \\(\\|x_2\\| = 1\\) and \\(\\|x_2 - y\\| \\ge 1/2\\) for all \\(y \\in Y_1\\). In particular, \\(\\|x_2 - x_1\\| \\ge 1/2\\). <br><br>Inductively: given \\(x_1, \\ldots, x_n\\), let \\(Y_n = \\mathrm{span}\\{x_1,\\ldots,x_n\\}\\). This is finite-dimensional, hence closed and proper (since \\(X\\) is infinite-dimensional). By Riesz, choose \\(x_{n+1}\\) with \\(\\|x_{n+1}\\| = 1\\) and \\(\\mathrm{dist}(x_{n+1}, Y_n) \\ge 1/2\\). <br><br>The sequence \\((x_n) \\subseteq \\overline{B}(0,1)\\) satisfies \\(\\|x_m - x_n\\| \\ge 1/2\\) for \\(m \\neq n\\), so it has no convergent subsequence. Therefore \\(\\overline{B}(0,1)\\) is not (sequentially) compact.'
                }
            ]
        },

        // ========== SECTION 5: Quotient and Product Spaces ==========
        {
            id: 'sec05-quotient-product',
            title: 'Quotient and Product Spaces',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Building New Spaces from Old.</strong> Just as algebra constructs quotient groups and product groups, functional analysis builds quotient normed spaces and product normed spaces. These constructions are essential for duality theory, the isomorphism theorems, and many applications throughout the course.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define product norms and quotient norms, verify they satisfy the norm axioms, and show that completeness is preserved under these constructions. These tools will reappear when we study dual spaces and Fredholm theory.</p>
</div>

<div class="bridge-block chapter-closing">
<p><strong>Looking Ahead.</strong> We have seen that normed spaces unify algebra and metric geometry. But a normed space can have "holes," sequences that are Cauchy but fail to converge. In Chapter 2, we study Banach spaces, the complete normed spaces where limits always exist and the deep theorems of functional analysis live.</p>
</div>

<h2>1.5 Quotient and Product Spaces</h2>

<p>Vector spaces can be combined or decomposed in several ways. Two fundamental constructions are the <em>product</em> (direct sum) and <em>quotient</em> of normed spaces. Both carry natural norms and play essential roles in the structural theory of Banach spaces.</p>

<h3>Product Spaces</h3>

<div class="env-block definition">
<strong>Definition 1.5.1 (Product Normed Space).</strong> Given normed spaces \\((X_1, \\|\\cdot\\|_1), \\ldots, (X_k, \\|\\cdot\\|_k)\\), their <em>product</em> is the vector space
\\[
X = X_1 \\times \\cdots \\times X_k = \\{(x_1, \\ldots, x_k) : x_i \\in X_i\\}
\\]
equipped with any of the product norms:
\\[
\\|(x_1, \\ldots, x_k)\\|_p = \\left( \\sum_{i=1}^k \\|x_i\\|_i^p \\right)^{1/p} \\quad (1 \\le p < \\infty), \\qquad \\|(x_1, \\ldots, x_k)\\|_\\infty = \\max_i \\|x_i\\|_i.
\\]
All these product norms are equivalent (since the indexing space is finite-dimensional).
</div>

<div class="env-block example">
<strong>Example 1.5.2.</strong> The product \\(\\mathbb{R}^m \\times \\mathbb{R}^n\\) with the \\(p\\)-product norm is isometrically isomorphic to \\(\\mathbb{R}^{m+n}\\) with the \\(\\|\\cdot\\|_p\\) norm when we use the same \\(p\\) for the product and the components.
</div>

<div class="viz-placeholder" data-viz="viz-product-space"></div>

<h3>Quotient Spaces</h3>

<div class="env-block definition">
<strong>Definition 1.5.3 (Quotient Space).</strong> Let \\(X\\) be a vector space and \\(M \\subseteq X\\) a subspace. The <em>quotient space</em> \\(X/M\\) is the set of cosets
\\[
X/M = \\{[x] = x + M : x \\in X\\},
\\]
with operations \\([x] + [y] = [x+y]\\) and \\(\\alpha[x] = [\\alpha x]\\).
</div>

<div class="env-block theorem">
<strong>Proposition 1.5.4.</strong> If \\((X, \\|\\cdot\\|)\\) is a normed space and \\(M\\) is a <em>closed</em> subspace, then
\\[
\\|[x]\\| = \\inf_{m \\in M} \\|x - m\\| = \\mathrm{dist}(x, M)
\\]
defines a norm on \\(X/M\\).
</div>

<div class="env-block proof">
<strong>Proof.</strong> We verify the norm axioms.
<ul>
<li><strong>Well-defined:</strong> If \\([x] = [x']\\), then \\(x - x' \\in M\\), so \\(\\inf_{m \\in M} \\|x - m\\| = \\inf_{m \\in M} \\|x' - (m - x + x')\\| = \\inf_{m' \\in M} \\|x' - m'\\|\\).</li>
<li><strong>Positive definiteness:</strong> \\(\\|[x]\\| = 0 \\iff \\inf_m \\|x-m\\| = 0 \\iff x \\in \\overline{M} = M\\) (since \\(M\\) is closed) \\(\\iff [x] = [0]\\).</li>
<li><strong>Homogeneity:</strong> \\(\\|\\alpha[x]\\| = \\|[\\alpha x]\\| = \\inf_m \\|\\alpha x - m\\| = |\\alpha| \\inf_m \\|x - m/\\alpha\\| = |\\alpha| \\, \\|[x]\\|\\).</li>
<li><strong>Triangle inequality:</strong> For any \\(m_1, m_2 \\in M\\),
\\(\\|[x+y]\\| = \\inf_m \\|x+y-m\\| \\le \\|x - m_1\\| + \\|y - m_2\\|\\).
Taking infimum over \\(m_1\\) and \\(m_2\\): \\(\\|[x+y]\\| \\le \\|[x]\\| + \\|[y]\\|\\). \\(\\square\\)</li>
</ul>
</div>

<div class="env-block remark">
<strong>Remark 1.5.5.</strong> The closedness of \\(M\\) is crucial. If \\(M\\) is not closed, then \\(\\|[x]\\| = 0\\) does not imply \\(x \\in M\\), so we only get a seminorm. The resulting quotient has the trivial topology (all open balls around 0 contain nonzero elements).
</div>

<div class="viz-placeholder" data-viz="viz-quotient-space"></div>

<h3>The Quotient Map</h3>

<div class="env-block theorem">
<strong>Proposition 1.5.6.</strong> The quotient map \\(\\pi: X \\to X/M\\) defined by \\(\\pi(x) = [x]\\) is a bounded linear map with \\(\\|\\pi\\| = 1\\) (provided \\(M \\neq X\\)). Moreover, \\(\\pi\\) is an <em>open map</em>: it maps open sets to open sets.
</div>

<div class="env-block proof">
<strong>Proof.</strong> Linearity is clear. For boundedness: \\(\\|\\pi(x)\\| = \\|[x]\\| = \\inf_m \\|x-m\\| \\le \\|x - 0\\| = \\|x\\|\\), so \\(\\|\\pi\\| \\le 1\\). For the reverse, given \\(\\varepsilon > 0\\) and \\(x \\notin M\\) with \\(\\|[x]\\| > 0\\), choose \\(m \\in M\\) with \\(\\|x-m\\| < \\|[x]\\| + \\varepsilon\\). Then \\(\\|\\pi(x-m)\\|/\\|x-m\\| = \\|[x]\\|/\\|x-m\\| > \\|[x]\\|/(\\|[x]\\|+\\varepsilon)\\). Letting \\(\\varepsilon \\to 0\\) gives \\(\\|\\pi\\| \\ge 1\\).

<p>For openness: let \\(U \\subseteq X\\) be open. Then \\(\\pi^{-1}(\\pi(U)) = U + M = \\bigcup_{m \\in M} (U + m)\\), which is a union of open sets, hence open. Since \\(\\pi\\) is surjective, a set \\(V \\subseteq X/M\\) is open iff \\(\\pi^{-1}(V)\\) is open, so \\(\\pi(U)\\) is open. \\(\\square\\)</p>
</div>

<div class="env-block remark">
<strong>Remark 1.5.7 (Looking Ahead).</strong> The quotient construction will be essential in:
<ul>
<li>Constructing \\(L^p\\) spaces from \\(\\mathcal{L}^p\\) by modding out null functions (Chapter 13)</li>
<li>The first isomorphism theorem for bounded operators (Chapter 5)</li>
<li>Proving the open mapping theorem via quotient techniques (Chapter 9)</li>
</ul>
</div>
`,
            visualizations: [
                {
                    id: 'viz-product-space',
                    title: 'Product Norms on \\(\\mathbb{R} \\times \\mathbb{R}\\)',
                    setup(body, controls) {
                        const engine = new VizEngine(body, { scale: 60 });

                        let pProd = 2;
                        VizEngine.createSlider(controls, 'Product norm p', 1, 20, 2, 0.1, v => { pProd = v; });

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            // Unit ball of R x R with product p-norm
                            // ||(x,y)||_p = (|x|^p + |y|^p)^(1/p)
                            // This is just the lp ball in R^2!
                            const ctx = engine.ctx;
                            const steps = 400;

                            // Fill
                            ctx.fillStyle = engine.colors.purple + '18';
                            ctx.beginPath();
                            for (let i = 0; i <= steps; i++) {
                                const theta = (2 * Math.PI * i) / steps;
                                const dx = Math.cos(theta);
                                const dy = Math.sin(theta);
                                let r;
                                if (pProd >= 20) r = 1 / Math.max(Math.abs(dx), Math.abs(dy));
                                else r = 1 / Math.pow(Math.pow(Math.abs(dx), pProd) + Math.pow(Math.abs(dy), pProd), 1 / pProd);
                                const [sx, sy] = engine.toScreen(r * dx, r * dy);
                                if (i === 0) ctx.moveTo(sx, sy);
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.closePath();
                            ctx.fill();

                            // Stroke
                            ctx.strokeStyle = engine.colors.purple;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            for (let i = 0; i <= steps; i++) {
                                const theta = (2 * Math.PI * i) / steps;
                                const dx = Math.cos(theta);
                                const dy = Math.sin(theta);
                                let r;
                                if (pProd >= 20) r = 1 / Math.max(Math.abs(dx), Math.abs(dy));
                                else r = 1 / Math.pow(Math.pow(Math.abs(dx), pProd) + Math.pow(Math.abs(dy), pProd), 1 / pProd);
                                const [sx, sy] = engine.toScreen(r * dx, r * dy);
                                if (i === 0) ctx.moveTo(sx, sy);
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.closePath();
                            ctx.stroke();

                            // Also show the product-infinity ball for reference
                            ctx.strokeStyle = engine.colors.text + '44';
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 4]);
                            ctx.strokeRect(
                                engine.originX - engine.scale,
                                engine.originY - engine.scale,
                                2 * engine.scale,
                                2 * engine.scale
                            );
                            ctx.setLineDash([]);

                            const pLabel = pProd >= 20 ? 'inf' : pProd.toFixed(1);
                            engine.screenText('Product norm: ||(x,y)||_' + pLabel, engine.width / 2, 16, engine.colors.purple, 14, 'center', 'top');
                            engine.screenText('Dashed: L-infinity product ball', engine.width / 2, engine.height - 14, engine.colors.text, 11, 'center', 'bottom');

                            // Component axes labels
                            engine.drawText('X1', 3.5, -0.3, engine.colors.text, 12);
                            engine.drawText('X2', 0.2, 3.2, engine.colors.text, 12);
                        }

                        engine.animate(() => draw());
                        return engine;
                    }
                },
                {
                    id: 'viz-quotient-space',
                    title: 'Quotient Space \\(\\mathbb{R}^2 / M\\): Cosets as Parallel Lines',
                    setup(body, controls) {
                        const engine = new VizEngine(body, { scale: 50 });

                        let subAngle = 0.5;
                        VizEngine.createSlider(controls, 'Subspace angle', -1.5, 1.5, 0.5, 0.05, v => { subAngle = v; });

                        const pt = engine.addDraggable('x', 1.5, 2, engine.colors.orange, 8);

                        function draw() {
                            engine.clear();
                            engine.drawGrid();
                            engine.drawAxes();

                            const ux = Math.cos(subAngle);
                            const uy = Math.sin(subAngle);

                            // Draw M (the subspace line)
                            engine.drawLine(0, 0, ux, uy, engine.colors.teal, 2.5);
                            engine.drawText('M', 3.5 * ux + 0.2, 3.5 * uy + 0.2, engine.colors.teal, 14, 'left');

                            // Draw several cosets (parallel lines)
                            const perpX = -uy;
                            const perpY = ux;
                            for (let k = -4; k <= 4; k++) {
                                if (k === 0) continue;
                                const cx = k * 0.8 * perpX;
                                const cy = k * 0.8 * perpY;
                                engine.drawLine(cx, cy, cx + ux, cy + uy, engine.colors.teal + '22', 0.8);
                            }

                            // Draw the coset of pt
                            const proj = pt.x * ux + pt.y * uy;
                            const cosetBaseX = pt.x - proj * ux;
                            const cosetBaseY = pt.y - proj * uy;
                            engine.drawLine(cosetBaseX, cosetBaseY, cosetBaseX + ux, cosetBaseY + uy, engine.colors.orange + '66', 2);

                            // Draw the point and its nearest point on M
                            const nearX = proj * ux;
                            const nearY = proj * uy;
                            engine.drawSegment(pt.x, pt.y, nearX, nearY, engine.colors.red, 2, true);
                            engine.drawPoint(nearX, nearY, engine.colors.teal, 'proj', 4);

                            // Quotient norm = distance to M
                            const dist = Math.sqrt((pt.x - nearX) ** 2 + (pt.y - nearY) ** 2);

                            engine.drawDraggables();

                            engine.screenText('||[x]|| = dist(x, M) = ' + dist.toFixed(3), engine.width / 2, 16, engine.colors.red, 14, 'center', 'top');
                            engine.screenText('Coset [x] = x + M (orange line)', engine.width / 2, 38, engine.colors.orange, 12, 'center', 'top');
                            engine.screenText('X/M is 1-dimensional: each coset is a parallel line', engine.width / 2, engine.height - 14, engine.colors.text, 11, 'center', 'bottom');
                        }

                        engine.animate(() => draw());
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Verify that \\(\\|(x_1, x_2)\\|_\\infty = \\max(\\|x_1\\|_1, \\|x_2\\|_2)\\) defines a norm on the product \\(X_1 \\times X_2\\) of two normed spaces.',
                    hint: 'Check the three norm axioms directly using properties of the max function and the norms on \\(X_1\\) and \\(X_2\\).',
                    solution: '<strong>Positive definiteness:</strong> \\(\\|(x_1,x_2)\\|_\\infty = 0 \\iff \\max(\\|x_1\\|, \\|x_2\\|) = 0 \\iff \\|x_1\\| = 0\\) and \\(\\|x_2\\| = 0 \\iff x_1 = 0\\) and \\(x_2 = 0\\). <br><br><strong>Homogeneity:</strong> \\(\\|\\alpha(x_1,x_2)\\|_\\infty = \\max(\\|\\alpha x_1\\|, \\|\\alpha x_2\\|) = \\max(|\\alpha|\\|x_1\\|, |\\alpha|\\|x_2\\|) = |\\alpha| \\max(\\|x_1\\|, \\|x_2\\|)\\). <br><br><strong>Triangle inequality:</strong> \\(\\|(x_1+y_1, x_2+y_2)\\|_\\infty = \\max(\\|x_1+y_1\\|, \\|x_2+y_2\\|) \\le \\max(\\|x_1\\|+\\|y_1\\|, \\|x_2\\|+\\|y_2\\|) \\le \\max(\\|x_1\\|,\\|x_2\\|) + \\max(\\|y_1\\|,\\|y_2\\|)\\).'
                },
                {
                    question: 'Let \\(X = \\mathbb{R}^2\\) with the Euclidean norm and \\(M = \\{(t, 0) : t \\in \\mathbb{R}\\}\\). Describe \\(X/M\\) geometrically and compute \\(\\|[(a,b)]\\|\\) explicitly.',
                    hint: 'The coset \\([(a,b)] = \\{(a+t, b) : t \\in \\mathbb{R}\\}\\) is a horizontal line at height \\(b\\). Minimize \\(\\sqrt{(a+t)^2 + b^2}\\) over \\(t\\).',
                    solution: 'The coset \\([(a,b)]\\) is the horizontal line \\(\\{(s, b) : s \\in \\mathbb{R}\\}\\). Two vectors are in the same coset iff they have the same \\(y\\)-coordinate. <br><br>\\(\\|[(a,b)]\\| = \\inf_{t \\in \\mathbb{R}} \\|(a,b) - (t,0)\\|_2 = \\inf_t \\sqrt{(a-t)^2 + b^2}\\). Minimizing over \\(t\\): take \\(t = a\\), giving \\(\\|[(a,b)]\\| = |b|\\). <br><br>So \\(X/M \\cong \\mathbb{R}\\) with the absolute value norm, via the isometric isomorphism \\([(a,b)] \\mapsto b\\).'
                },
                {
                    question: 'Let \\(X\\) be a normed space, \\(M\\) a closed subspace. Prove that if \\(X\\) is a Banach space (complete), then \\(X/M\\) is also a Banach space.',
                    hint: 'Use the "absolutely summable implies summable" criterion for completeness: show that if \\(\\sum \\|[x_n]\\| < \\infty\\), then \\(\\sum [x_n]\\) converges in \\(X/M\\). Choose representatives \\(x_n\'\\) close to the cosets.',
                    solution: 'Let \\(\\sum_{n=1}^\\infty \\|[x_n]\\| < \\infty\\). For each \\(n\\), choose \\(x_n\' \\in [x_n]\\) with \\(\\|x_n\'\\| < \\|[x_n]\\| + 2^{-n}\\). Then \\(\\sum \\|x_n\'\\| < \\sum \\|[x_n]\\| + 1 < \\infty\\). Since \\(X\\) is Banach, \\(s = \\sum x_n\'\\) converges in \\(X\\). <br><br>Let \\(S_N = \\sum_{n=1}^N x_n\'\\). Then \\(\\|[s] - \\sum_{n=1}^N [x_n]\\| = \\|[s - S_N]\\| \\le \\|s - S_N\\| \\to 0\\) as \\(N \\to \\infty\\). So \\(\\sum [x_n] = [s]\\) converges in \\(X/M\\). By the absolutely summable criterion, \\(X/M\\) is Banach.'
                }
            ]
        }
    ]
});
