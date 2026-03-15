window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch07',
    number: 7,
    title: 'Baire Category Theorem',
    subtitle: 'Why complete spaces are large',
    sections: [

        // ============================================================
        // SECTION 1 — Nowhere Dense Sets
        // ============================================================
        {
            id: 'ch07-sec01',
            title: 'Nowhere Dense Sets',
            content: `
<div class="bridge-block chapter-opening">
<p><strong>The Topological Engine.</strong> Chapter 6 gave us the Hahn-Banach Theorem, which works in all normed spaces. The next three big theorems (Uniform Boundedness, Open Mapping, Closed Graph) all require completeness. Why? Because they all rest on a single topological result: the Baire Category Theorem. This chapter develops the Baire Category Theorem from scratch, giving us the foundational tool that powers Chapters 8 and 9.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We begin with nowhere dense sets: sets so "thin" that they have empty interior even after taking closure. Understanding these "negligible" sets is the first step toward the Baire Category Theorem.</p>
</div>

                <h2>Nowhere Dense Sets</h2>

                <p>Before we can state one of the most powerful results in analysis, we need a precise vocabulary for describing how "thin" or "thick" a set is from a topological point of view. The first concept is that of a <strong>nowhere dense set</strong> -- a set so thin that it cannot dominate any open region, no matter how small.</p>

                <h3>The Closure and Interior</h3>

                <p>Recall that for a subset \\(A\\) of a metric space \\((X, d)\\):</p>
                <ul>
                    <li>The <strong>closure</strong> \\(\\overline{A}\\) is the smallest closed set containing \\(A\\), equivalently the set of all limits of convergent sequences in \\(A\\).</li>
                    <li>The <strong>interior</strong> \\(A^\\circ\\) is the largest open set contained in \\(A\\), equivalently the set of points having an open ball entirely within \\(A\\).</li>
                </ul>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.1 (Nowhere Dense Set)</div>
                    <div class="env-body">
                        <p>A subset \\(A\\) of a metric space \\((X, d)\\) is <strong>nowhere dense</strong> if the interior of its closure is empty:</p>
                        <p>\\[\\left(\\overline{A}\\right)^\\circ = \\emptyset.\\]</p>
                        <p>Equivalently, \\(A\\) is nowhere dense if and only if for every nonempty open set \\(U \\subseteq X\\), there exists a nonempty open set \\(V \\subseteq U\\) with \\(V \\cap A = \\emptyset\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>A nowhere dense set is so "thin" that even after you fill in all its limit points (taking the closure), the result still contains no open ball. No matter where you zoom in, you can always find a gap. Think of scattered dust particles on a table: even if infinitely many, they never cover any patch completely.</p>
                    </div>
                </div>

                <h3>Key Examples</h3>

                <div class="env-block example">
                    <div class="env-title">Example 7.1 (Finite Sets)</div>
                    <div class="env-body">
                        <p>Every finite subset of \\(\\mathbb{R}\\) is nowhere dense. For instance, \\(A = \\{0, 1, 2\\}\\) has \\(\\overline{A} = A\\), whose interior is empty because no open interval fits inside a finite set of points.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.2 (The Integers)</div>
                    <div class="env-body">
                        <p>\\(\\mathbb{Z} \\subseteq \\mathbb{R}\\) is nowhere dense. Its closure is \\(\\overline{\\mathbb{Z}} = \\mathbb{Z}\\) (already closed), and \\(\\mathbb{Z}^\\circ = \\emptyset\\) since no open interval is contained in \\(\\mathbb{Z}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.3 (The Cantor Set)</div>
                    <div class="env-body">
                        <p>The Cantor set \\(\\mathcal{C} \\subseteq [0,1]\\) is nowhere dense despite being uncountable. It is closed (\\(\\overline{\\mathcal{C}} = \\mathcal{C}\\)), and every open interval \\((a,b) \\subseteq [0,1]\\) contains a removed middle third, hence a gap in \\(\\mathcal{C}\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="nowhere-dense-examples"></div>

                <h3>Characterizations</h3>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 7.1 (Equivalent Conditions)</div>
                    <div class="env-body">
                        <p>For \\(A \\subseteq X\\) in a metric space, the following are equivalent:</p>
                        <ol>
                            <li>\\(A\\) is nowhere dense.</li>
                            <li>\\(\\overline{A}\\) is nowhere dense.</li>
                            <li>\\(X \\setminus \\overline{A}\\) is dense in \\(X\\).</li>
                            <li>Every nonempty open set \\(U\\) contains a nonempty open subset disjoint from \\(A\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(1) \\(\\Leftrightarrow\\) (2):</strong> Since \\(\\overline{\\overline{A}} = \\overline{A}\\), the interior of the closure of \\(\\overline{A}\\) equals \\((\\overline{A})^\\circ\\), which is the same condition.</p>
                        <p><strong>(1) \\(\\Leftrightarrow\\) (3):</strong> \\((\\overline{A})^\\circ = \\emptyset\\) means no open ball is contained in \\(\\overline{A}\\), which means every open ball meets \\(X \\setminus \\overline{A}\\), i.e., \\(X \\setminus \\overline{A}\\) is dense.</p>
                        <p><strong>(1) \\(\\Leftrightarrow\\) (4):</strong> If \\((\\overline{A})^\\circ = \\emptyset\\), then any open \\(U\\) is not contained in \\(\\overline{A}\\), so \\(U \\setminus \\overline{A}\\) is a nonempty open subset of \\(U\\) disjoint from \\(A\\). The converse is immediate. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="nowhere-dense-complement"></div>

                <h3>Nowhere Dense vs. Other Notions of Smallness</h3>

                <p>It is important to distinguish <em>nowhere dense</em> from <em>measure zero</em>. The Cantor set is nowhere dense <em>and</em> has measure zero, but the <strong>fat Cantor set</strong> (obtained by removing smaller intervals) is nowhere dense yet has <em>positive</em> Lebesgue measure. Conversely, the rationals \\(\\mathbb{Q}\\) have measure zero but are <em>not</em> nowhere dense (\\(\\overline{\\mathbb{Q}} = \\mathbb{R}\\), so \\((\\overline{\\mathbb{Q}})^\\circ = \\mathbb{R} \\neq \\emptyset\\)).</p>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Nowhere dense \\(\\neq\\) measure zero. These are independent notions. A set can be nowhere dense with positive measure (fat Cantor set), or dense with measure zero (\\(\\mathbb{Q}\\)).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="cantor-set-construction"></div>
            `,
            visualizations: [
                {
                    id: 'nowhere-dense-examples',
                    title: 'Nowhere Dense Sets in R',
                    description: 'Visualize nowhere dense sets: finite sets, integers, and see how open intervals always contain gaps.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 60, originX: 300, originY: 200 });
                        let selectedExample = 0;
                        const examples = ['Finite Set {-1,0,1,2}', 'Integers Z', 'Points 1/n'];

                        const controls = document.createElement('div');
                        controls.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;';
                        examples.forEach((name, i) => {
                            VizEngine.createButton(controls, name, () => { selectedExample = i; draw(); });
                        });
                        container.insertBefore(controls, viz.canvas);

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;

                            // Draw number line
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(20, viz.originY);
                            ctx.lineTo(viz.width - 20, viz.originY);
                            ctx.stroke();

                            // Tick marks
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (let x = -4; x <= 5; x++) {
                                const sx = viz.originX + x * viz.scale;
                                ctx.beginPath();
                                ctx.moveTo(sx, viz.originY - 5);
                                ctx.lineTo(sx, viz.originY + 5);
                                ctx.stroke();
                                ctx.fillText(x, sx, viz.originY + 8);
                            }

                            let points = [];
                            let label = '';
                            if (selectedExample === 0) {
                                points = [-1, 0, 1, 2];
                                label = 'A = {-1, 0, 1, 2}: closure = A, interior of closure = empty';
                            } else if (selectedExample === 1) {
                                points = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
                                label = 'Z: closed, but interior is empty -- nowhere dense';
                            } else {
                                points = [];
                                for (let n = 1; n <= 30; n++) points.push(1 / n);
                                points.push(0);
                                label = '{1/n : n >= 1} U {0}: closure includes 0, still nowhere dense';
                            }

                            // Draw points
                            points.forEach(p => {
                                const sx = viz.originX + p * viz.scale;
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath();
                                ctx.arc(sx, viz.originY, 5, 0, Math.PI * 2);
                                ctx.fill();
                            });

                            // Show an open interval that avoids the set
                            let gapCenter, gapRadius;
                            if (selectedExample === 0) {
                                gapCenter = 0.5; gapRadius = 0.4;
                            } else if (selectedExample === 1) {
                                gapCenter = 0.5; gapRadius = 0.4;
                            } else {
                                gapCenter = 0.7; gapRadius = 0.05;
                            }
                            const gx1 = viz.originX + (gapCenter - gapRadius) * viz.scale;
                            const gx2 = viz.originX + (gapCenter + gapRadius) * viz.scale;
                            ctx.fillStyle = viz.colors.green + '33';
                            ctx.fillRect(gx1, viz.originY - 25, gx2 - gx1, 50);
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 1.5;
                            ctx.strokeRect(gx1, viz.originY - 25, gx2 - gx1, 50);

                            // Label
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('gap (open set avoiding A)', viz.originX + gapCenter * viz.scale, viz.originY - 35);

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(label, viz.width / 2, 25);
                        }
                        draw();
                    }
                },
                {
                    id: 'nowhere-dense-complement',
                    title: 'Dense Complement of a Nowhere Dense Set',
                    description: 'The complement of the closure of a nowhere dense set is open and dense. Drag the probe to verify.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 80, originX: 100, originY: 200 });
                        const probe = viz.addDraggable('probe', 2, 0, viz.colors.orange, 8);

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;

                            // Nowhere dense set: integer points on [0,5]
                            const ndPoints = [0, 1, 2, 3, 4, 5];
                            const lineY = viz.originY;

                            // Draw the complement shading (dense open set)
                            for (let i = 0; i < ndPoints.length - 1; i++) {
                                const x1 = viz.originX + ndPoints[i] * viz.scale + 4;
                                const x2 = viz.originX + ndPoints[i + 1] * viz.scale - 4;
                                ctx.fillStyle = viz.colors.teal + '22';
                                ctx.fillRect(x1, lineY - 30, x2 - x1, 60);
                            }

                            // Number line
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(viz.originX - 40, lineY);
                            ctx.lineTo(viz.originX + 5.5 * viz.scale, lineY);
                            ctx.stroke();

                            // Points of nowhere dense set
                            ndPoints.forEach(p => {
                                const sx = viz.originX + p * viz.scale;
                                ctx.fillStyle = viz.colors.red;
                                ctx.beginPath();
                                ctx.arc(sx, lineY, 6, 0, Math.PI * 2);
                                ctx.fill();
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'top';
                                ctx.fillText(p, sx, lineY + 12);
                            });

                            // Probe
                            const px = Math.max(0, Math.min(5, probe.x));
                            probe.x = px;
                            probe.y = 0;
                            const psx = viz.originX + px * viz.scale;

                            // Find nearest integer
                            const nearest = Math.round(px);
                            const dist = Math.abs(px - nearest);
                            const isInComplement = dist > 0.001;

                            // Draw probe indicator
                            ctx.fillStyle = viz.colors.orange;
                            ctx.beginPath();
                            ctx.arc(psx, lineY, 8, 0, Math.PI * 2);
                            ctx.fill();

                            // Info
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Drag probe along [0,5]. Red = nowhere dense set Z, teal = dense complement.', viz.width / 2, 20);
                            ctx.fillText('x = ' + px.toFixed(3) + (isInComplement ? '  IN complement (dense open set)' : '  ON the nowhere dense set'), viz.width / 2, 45);
                            if (isInComplement) {
                                const eps = dist * 0.8;
                                const bx1 = viz.originX + (px - eps) * viz.scale;
                                const bx2 = viz.originX + (px + eps) * viz.scale;
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 1.5;
                                ctx.setLineDash([4, 3]);
                                ctx.strokeRect(bx1, lineY - 20, bx2 - bx1, 40);
                                ctx.setLineDash([]);
                                ctx.fillStyle = viz.colors.orange;
                                ctx.font = '10px -apple-system, sans-serif';
                                ctx.fillText('B(x, ' + eps.toFixed(2) + ') avoids A', psx, lineY - 28);
                            }
                        }

                        draw();
                        viz.animate(() => draw());
                    }
                },
                {
                    id: 'cantor-set-construction',
                    title: 'Cantor Set: Nowhere Dense yet Uncountable',
                    description: 'Watch the Cantor set emerge through iterative removal of middle thirds. At every level, open gaps appear.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 40, originX: 50, originY: 30 });
                        const maxLevel = 7;
                        let currentLevel = 4;

                        const slider = VizEngine.createSlider(container, 'Iterations', 0, maxLevel, currentLevel, 1, v => {
                            currentLevel = Math.round(v);
                            draw();
                        });

                        function getCantorIntervals(level) {
                            let intervals = [[0, 1]];
                            for (let i = 0; i < level; i++) {
                                const next = [];
                                for (const [a, b] of intervals) {
                                    const third = (b - a) / 3;
                                    next.push([a, a + third]);
                                    next.push([b - third, b]);
                                }
                                intervals = next;
                            }
                            return intervals;
                        }

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;
                            const left = 40;
                            const right = viz.width - 40;
                            const barWidth = right - left;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Cantor Set Construction: Level ' + currentLevel, viz.width / 2, 20);

                            for (let lev = 0; lev <= currentLevel; lev++) {
                                const y = 45 + lev * 38;
                                const intervals = getCantorIntervals(lev);

                                // Draw removed regions in red
                                ctx.fillStyle = viz.colors.bg;
                                ctx.fillRect(left, y, barWidth, 20);

                                // Draw remaining intervals
                                for (const [a, b] of intervals) {
                                    const x1 = left + a * barWidth;
                                    const x2 = left + b * barWidth;
                                    ctx.fillStyle = lev === currentLevel ? viz.colors.blue : viz.colors.purple + '88';
                                    ctx.fillRect(x1, y, Math.max(x2 - x1, 1), 20);
                                }

                                // Level label
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '10px -apple-system, sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText('n=' + lev, left - 8, y + 13);
                                ctx.textAlign = 'left';
                                ctx.fillText(intervals.length + ' intervals', right + 8, y + 13);
                            }

                            // Footer info
                            const finalY = 45 + (currentLevel + 1) * 38 + 10;
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            const numIntervals = Math.pow(2, currentLevel);
                            const totalLength = Math.pow(2.0 / 3.0, currentLevel);
                            ctx.fillText(numIntervals + ' intervals, total length = (2/3)^' + currentLevel + ' = ' + totalLength.toFixed(4), viz.width / 2, finalY);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('Limit: uncountably many points, zero total length, nowhere dense', viz.width / 2, finalY + 18);
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch07-ex01',
                    type: 'proof',
                    difficulty: 2,
                    question: 'Prove that a closed subset of a metric space is nowhere dense if and only if it has empty interior.',
                    hint: 'For a closed set F, we have F-bar = F.',
                    solution: 'If F is closed, then F-bar = F. So (F-bar)^circ = F^circ. Thus F is nowhere dense iff F^circ = empty, which is the same as having empty interior.'
                },
                {
                    id: 'ch07-ex02',
                    type: 'proof',
                    difficulty: 2,
                    question: 'Show that the boundary of any open set U in a metric space is nowhere dense.',
                    hint: 'The boundary is closed. Show its interior is empty by finding gaps near any boundary point.',
                    solution: 'Let B = partial(U) = U-bar \\ U^circ. Since U is open, U^circ = U, so B = U-bar \\ U. B is closed. Suppose B^circ is nonempty, so there is an open ball B(x,r) in B. But B(x,r) is disjoint from U (since B = U-bar \\ U), and B(x,r) is in U-bar, so every point of B(x,r) is a limit of points in U but not in U. But B(x,r) is open and disjoint from U, contradicting that x is in U-bar. Hence B^circ = empty.'
                },
                {
                    id: 'ch07-ex03',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Prove that a finite union of nowhere dense sets is nowhere dense.',
                    hint: 'Use the characterization: A is nowhere dense iff every nonempty open set U contains a nonempty open subset disjoint from A. Apply this iteratively.',
                    solution: 'Let A_1, ..., A_n be nowhere dense. Let U be nonempty open. Since A_1 is nowhere dense, there exists nonempty open V_1 in U with V_1 disjoint from A_1. Since A_2 is nowhere dense, there exists nonempty open V_2 in V_1 with V_2 disjoint from A_2. Continue to get V_n in U disjoint from all A_i. So A_1 union ... union A_n is nowhere dense.'
                },
                {
                    id: 'ch07-ex04',
                    type: 'short',
                    difficulty: 2,
                    question: 'Is the set Q of rationals nowhere dense in R? Justify your answer.',
                    hint: 'What is the closure of Q?',
                    solution: 'No. The closure of Q is R, and the interior of R is R, which is nonempty. So Q is NOT nowhere dense; in fact Q is dense.'
                }
            ]
        },

        // ============================================================
        // SECTION 2 — First and Second Category
        // ============================================================
        {
            id: 'ch07-sec02',
            title: 'First and Second Category',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Classifying Sets by Size.</strong> Nowhere dense sets are individually small, but what about countable unions of them? The Baire category framework classifies sets as "meager" (first category, countable unions of nowhere dense sets) or "non-meager" (second category). This is a topological notion of "smallness" distinct from measure-theoretic smallness.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define first and second category sets, explore examples (\(\mathbb{Q}\) is meager in \(\mathbb{R}\)), and develop the intuition that meager sets are "topologically negligible." We also introduce residual sets (complements of meager sets) as "topologically generic."</p>
</div>

                <h2>First and Second Category</h2>

                <p>A single nowhere dense set is "thin." But what if we stack countably many thin sets together? Do we get something thick, or does the thinness persist? This question leads to Baire's fundamental classification of topological spaces.</p>

                <h3>Meager Sets (First Category)</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.2 (Meager / First Category)</div>
                    <div class="env-body">
                        <p>A subset \\(A\\) of a topological space \\(X\\) is called <strong>meager</strong> (or of <strong>first category</strong>) if it can be written as a countable union of nowhere dense sets:</p>
                        <p>\\[A = \\bigcup_{n=1}^{\\infty} A_n, \\quad \\text{each } A_n \\text{ nowhere dense}.\\]</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.3 (Non-meager / Second Category)</div>
                    <div class="env-body">
                        <p>A set is of <strong>second category</strong> (or <strong>non-meager</strong>) if it is not meager, i.e., it cannot be written as a countable union of nowhere dense sets.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Think of meager sets as "topologically negligible" -- the topological analogue of measure-zero sets. A countable union of thin layers remains thin. A second category set is "topologically substantial" -- it resists being decomposed into countably many negligible pieces.</p>
                    </div>
                </div>

                <h3>Examples</h3>

                <div class="env-block example">
                    <div class="env-title">Example 7.4 (Q is Meager in R)</div>
                    <div class="env-body">
                        <p>The rationals \\(\\mathbb{Q}\\) are meager in \\(\\mathbb{R}\\). Write \\(\\mathbb{Q} = \\{q_1, q_2, q_3, \\ldots\\}\\). Each singleton \\(\\{q_n\\}\\) is closed with empty interior, hence nowhere dense. So \\(\\mathbb{Q} = \\bigcup_n \\{q_n\\}\\) is a countable union of nowhere dense sets.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.5 (R is Second Category in Itself)</div>
                    <div class="env-body">
                        <p>This is not obvious at all! It is precisely the content of the Baire Category Theorem, which we will prove in the next section. For now, accept it as a deep fact: \\(\\mathbb{R}\\) cannot be written as a countable union of nowhere dense sets.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="meager-layering"></div>

                <h3>Baire Spaces</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.4 (Baire Space)</div>
                    <div class="env-body">
                        <p>A topological space \\(X\\) is a <strong>Baire space</strong> if every nonempty open subset of \\(X\\) is non-meager in \\(X\\). Equivalently, \\(X\\) is Baire if the countable intersection of dense open sets is dense.</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 7.2 (Properties of Meager Sets)</div>
                    <div class="env-body">
                        <ol>
                            <li>Any subset of a meager set is meager.</li>
                            <li>A countable union of meager sets is meager.</li>
                            <li>In a Baire space, meager sets have empty interior.</li>
                            <li>In a Baire space, the complement of a meager set is dense.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(1)</strong>: If \\(B \\subseteq A = \\bigcup A_n\\) with each \\(A_n\\) nowhere dense, then \\(B = \\bigcup (B \\cap A_n)\\), and each \\(B \\cap A_n \\subseteq A_n\\) is nowhere dense (subsets of nowhere dense sets are nowhere dense).</p>
                        <p><strong>(2)</strong>: A countable union of countable unions of nowhere dense sets is again a countable union of nowhere dense sets.</p>
                        <p><strong>(3)</strong>: If a meager set \\(A\\) had nonempty interior \\(U\\), then \\(U\\) would be an open set contained in \\(A\\), hence meager. But in a Baire space, nonempty open sets are non-meager -- contradiction.</p>
                        <p><strong>(4)</strong>: If \\(A\\) is meager, then \\(X \\setminus A\\) cannot be non-dense (otherwise \\(X \\setminus \\overline{X \\setminus A}\\) would be a nonempty open meager set). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="category-classification"></div>

                <h3>The Dual View: Residual Sets</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.5 (Residual / Comeager Set)</div>
                    <div class="env-body">
                        <p>A set \\(R \\subseteq X\\) is <strong>residual</strong> (or <strong>comeager</strong>) if its complement \\(X \\setminus R\\) is meager. Equivalently, \\(R\\) contains a countable intersection of dense open sets (a dense \\(G_\\delta\\) set).</p>
                    </div>
                </div>

                <p>In a Baire space, residual sets are "topologically generic" -- they represent the "typical" behavior. We will see striking applications: "most" continuous functions are nowhere differentiable, "most" elements of a complete metric space avoid any given meager set.</p>

                <div class="viz-placeholder" data-viz="residual-dense-gd"></div>
            `,
            visualizations: [
                {
                    id: 'meager-layering',
                    title: 'Building a Meager Set Layer by Layer',
                    description: 'Stack nowhere dense sets to form a meager set. Even countably many thin layers remain topologically thin.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 40, originX: 50, originY: 30 });
                        let numLayers = 3;

                        const slider = VizEngine.createSlider(container, 'Layers', 1, 10, numLayers, 1, v => {
                            numLayers = Math.round(v);
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;
                            const left = 60;
                            const right = viz.width - 30;
                            const barW = right - left;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Q = {q_1} U {q_2} U {q_3} U ... each singleton is nowhere dense', viz.width / 2, 20);

                            // Enumerate some rationals
                            const rationals = [0, 1, -1, 0.5, -0.5, 2, -2, 1/3, -1/3, 2/3];

                            for (let layer = 0; layer < numLayers; layer++) {
                                const y = 45 + layer * 35;
                                const q = rationals[layer % rationals.length];

                                // Number line segment [−3, 3]
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(left, y + 10);
                                ctx.lineTo(right, y + 10);
                                ctx.stroke();

                                // The singleton point
                                const px = left + ((q + 3) / 6) * barW;
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath();
                                ctx.arc(px, y + 10, 5, 0, Math.PI * 2);
                                ctx.fill();

                                // Label
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '10px -apple-system, sans-serif';
                                ctx.textAlign = 'right';
                                const label = layer < rationals.length ? '{' + q.toFixed(2) + '}' : '{q_' + (layer + 1) + '}';
                                ctx.fillText('A_' + (layer + 1) + ' = ' + label, left - 5, y + 13);
                            }

                            // Union summary
                            const summaryY = 45 + numLayers * 35 + 15;
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(left, summaryY + 10);
                            ctx.lineTo(right, summaryY + 10);
                            ctx.stroke();

                            for (let layer = 0; layer < numLayers; layer++) {
                                const q = rationals[layer % rationals.length];
                                const px = left + ((q + 3) / 6) * barW;
                                ctx.fillStyle = viz.colors.orange;
                                ctx.beginPath();
                                ctx.arc(px, summaryY + 10, 4, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Union: ' + numLayers + ' points -- still nowhere dense (finite union)', viz.width / 2, summaryY + 30);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('Need countably infinite union to get all of Q (meager but dense!)', viz.width / 2, summaryY + 48);
                        }
                        draw();
                    }
                },
                {
                    id: 'category-classification',
                    title: 'First vs Second Category',
                    description: 'Compare sets that are first category (meager) vs second category (non-meager).',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 40, originX: 50, originY: 30 });

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;

                            const midX = viz.width / 2;
                            const boxW = viz.width / 2 - 40;

                            // First category column
                            ctx.fillStyle = viz.colors.red + '22';
                            ctx.fillRect(20, 45, boxW, viz.height - 65);
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 1.5;
                            ctx.strokeRect(20, 45, boxW, viz.height - 65);

                            ctx.fillStyle = viz.colors.red;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('First Category (Meager)', 20 + boxW / 2, 25);
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('"Topologically negligible"', 20 + boxW / 2, 40);

                            const firstCat = [
                                'Q (rationals)',
                                'Any countable set',
                                'Cantor set C',
                                'Algebraic numbers',
                                '{f in C[0,1] : f\'(0) exists}',
                                'Finite union of nowhere dense',
                                'Any subset of meager set'
                            ];
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            firstCat.forEach((item, i) => {
                                ctx.fillText('- ' + item, 30, 70 + i * 22);
                            });

                            // Second category column
                            ctx.fillStyle = viz.colors.green + '22';
                            ctx.fillRect(midX + 10, 45, boxW, viz.height - 65);
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 1.5;
                            ctx.strokeRect(midX + 10, 45, boxW, viz.height - 65);

                            ctx.fillStyle = viz.colors.green;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Second Category (Non-meager)', midX + 10 + boxW / 2, 25);
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('"Topologically substantial"', midX + 10 + boxW / 2, 40);

                            const secondCat = [
                                'R (the real line)',
                                'Any complete metric space',
                                'R \\ Q (irrationals)',
                                '[0, 1]',
                                'C[0,1] (continuous functions)',
                                'Any nonempty open set in Baire space',
                                'Residual (comeager) sets in Baire space'
                            ];
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            secondCat.forEach((item, i) => {
                                ctx.fillText('- ' + item, midX + 20, 70 + i * 22);
                            });
                        }
                        draw();
                    }
                },
                {
                    id: 'residual-dense-gd',
                    title: 'Residual Sets as Dense G-delta',
                    description: 'A residual set contains a countable intersection of dense open sets. Visualize how dense open sets nest.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 40, originX: 50, originY: 30 });
                        let numSets = 3;
                        const slider = VizEngine.createSlider(container, 'Open sets', 1, 6, numSets, 1, v => {
                            numSets = Math.round(v);
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;
                            const left = 50;
                            const right = viz.width - 30;
                            const barW = right - left;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Dense open sets: U_n = R \\ {q_n} (removing one rational)', viz.width / 2, 20);

                            const rationals = [0.3, 0.7, 0.15, 0.85, 0.5, 0.95];

                            for (let n = 0; n < numSets; n++) {
                                const y = 45 + n * 42;

                                // Draw the full line
                                ctx.fillStyle = viz.colors.teal + '33';
                                ctx.fillRect(left, y, barW, 22);

                                // Remove the rational point (small gap)
                                const qx = left + rationals[n] * barW;
                                ctx.fillStyle = viz.colors.bg;
                                ctx.fillRect(qx - 3, y, 6, 22);

                                // Border
                                ctx.strokeStyle = viz.colors.teal;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(left, y, barW, 22);

                                // Removed point marker
                                ctx.fillStyle = viz.colors.red;
                                ctx.beginPath();
                                ctx.arc(qx, y + 11, 4, 0, Math.PI * 2);
                                ctx.fill();

                                // Label
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '10px -apple-system, sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText('U_' + (n + 1), left - 5, y + 14);
                            }

                            // Intersection
                            const intY = 45 + numSets * 42 + 10;
                            ctx.fillStyle = viz.colors.green + '44';
                            ctx.fillRect(left, intY, barW, 22);

                            for (let n = 0; n < numSets; n++) {
                                const qx = left + rationals[n] * barW;
                                ctx.fillStyle = viz.colors.bg;
                                ctx.fillRect(qx - 3, intY, 6, 22);
                                ctx.fillStyle = viz.colors.red;
                                ctx.beginPath();
                                ctx.arc(qx, intY + 11, 3, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.strokeRect(left, intY, barW, 22);

                            ctx.fillStyle = viz.colors.green;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Intersection: dense G_delta (residual) -- ' + numSets + ' points removed', viz.width / 2, intY + 40);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('R \\ Q = intersection of all U_n is residual (comeager) in R', viz.width / 2, intY + 58);
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch07-ex05',
                    type: 'proof',
                    difficulty: 2,
                    question: 'Show that every countable set in R is meager.',
                    hint: 'Write it as a countable union of singletons.',
                    solution: 'Let A = {a_1, a_2, ...} be countable. Then A = union of {a_n}. Each {a_n} is closed with empty interior (no open interval is a single point), hence nowhere dense. A countable union of nowhere dense sets is meager.'
                },
                {
                    id: 'ch07-ex06',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Prove that the Cantor set is meager in R.',
                    hint: 'The Cantor set is a single nowhere dense set.',
                    solution: 'The Cantor set C is closed (intersection of closed sets) and has empty interior (every interval (a,b) in [0,1] contains a removed middle third). So C is nowhere dense. Any nowhere dense set is trivially meager (a single-term union).'
                },
                {
                    id: 'ch07-ex07',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Prove that a countable union of meager sets is meager.',
                    hint: 'A meager set is a countable union of nowhere dense sets. Use the fact that a countable union of countable collections is countable.',
                    solution: 'Let {M_k} be countably many meager sets. For each k, M_k = union_{n} A_{k,n} with each A_{k,n} nowhere dense. Then union_k M_k = union_{k,n} A_{k,n}, which is a countable union of nowhere dense sets (since N x N is countable), hence meager.'
                },
                {
                    id: 'ch07-ex08',
                    type: 'short',
                    difficulty: 2,
                    question: 'Is the set of irrationals R \\ Q meager in R? Explain.',
                    hint: 'If both Q and R\\Q were meager, what would that say about R?',
                    solution: 'No. If R\\Q were meager, then R = Q union (R\\Q) would be a union of two meager sets, hence meager. But R is a complete metric space, and by Baire Category Theorem, R is not meager in itself. So R\\Q is non-meager (second category). In fact, R\\Q is residual.'
                }
            ]
        },

        // ============================================================
        // SECTION 3 — Baire Category Theorem
        // ============================================================
        {
            id: 'ch07-sec03',
            title: 'Baire Category Theorem',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Complete Spaces Are Large.</strong> The Baire Category Theorem states that a complete metric space is <em>not</em> meager in itself, equivalently, every countable intersection of dense open sets is dense. This is the fundamental reason that completeness is so powerful. Every subsequent "big theorem" in this course ultimately traces back to this result.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We state and prove the Baire Category Theorem via the nested balls argument, derive both the "intersection" and "union" formulations, and present the first applications: existence of continuous nowhere-differentiable functions and density of polynomials with all roots irrational.</p>
</div>

                <h2>The Baire Category Theorem</h2>

                <p>We now arrive at one of the cornerstones of functional analysis. The Baire Category Theorem tells us that complete metric spaces are "large" in a topological sense: they cannot be decomposed into countably many negligible pieces.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.1 (Baire Category Theorem)</div>
                    <div class="env-body">
                        <p>Let \\((X, d)\\) be a complete metric space. Then:</p>
                        <ol>
                            <li><strong>Dense \\(G_\\delta\\) form:</strong> If \\(\\{U_n\\}_{n=1}^\\infty\\) are dense open subsets of \\(X\\), then \\(\\bigcap_{n=1}^\\infty U_n\\) is dense in \\(X\\).</li>
                            <li><strong>Category form:</strong> \\(X\\) is of second category in itself: \\(X\\) is not a countable union of nowhere dense sets.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: Why Completeness Matters</div>
                    <div class="env-body">
                        <p>The proof constructs a Cauchy sequence by nesting closed balls, each dodging one of the nowhere dense sets. Completeness guarantees this sequence converges to a point that avoids <em>all</em> of them. Without completeness, the limit might "escape" the space (think of \\(\\mathbb{Q}\\), which <em>is</em> a countable union of nowhere dense sets).</p>
                    </div>
                </div>

                <h3>Proof of the Baire Category Theorem</h3>

                <div class="env-block proof">
                    <div class="env-title">Proof (Dense \\(G_\\delta\\) Form)</div>
                    <div class="env-body">
                        <p>Let \\(\\{U_n\\}\\) be dense open subsets of a complete metric space \\(X\\). We must show \\(\\bigcap U_n\\) is dense, i.e., it meets every nonempty open set.</p>

                        <p>Let \\(V_0\\) be any nonempty open set. We construct a nested sequence of closed balls.</p>

                        <p><strong>Step 1:</strong> Since \\(U_1\\) is dense and open, \\(V_0 \\cap U_1\\) is nonempty and open. Choose \\(x_1\\) and \\(r_1 < 1\\) such that \\(\\overline{B(x_1, r_1)} \\subseteq V_0 \\cap U_1\\).</p>

                        <p><strong>Step n:</strong> Since \\(U_n\\) is dense and open, \\(B(x_{n-1}, r_{n-1}) \\cap U_n\\) is nonempty and open. Choose \\(x_n\\) and \\(r_n < 1/n\\) such that \\(\\overline{B(x_n, r_n)} \\subseteq B(x_{n-1}, r_{n-1}) \\cap U_n\\).</p>

                        <p>We obtain nested closed balls \\(\\overline{B(x_1, r_1)} \\supseteq \\overline{B(x_2, r_2)} \\supseteq \\cdots\\) with \\(r_n \\to 0\\).</p>

                        <p>The sequence \\((x_n)\\) is Cauchy: for \\(m > n\\), \\(d(x_m, x_n) < r_n < 1/n\\). By completeness, \\(x_n \\to x^* \\in X\\). Since \\(x^*\\) lies in each closed ball \\(\\overline{B(x_n, r_n)} \\subseteq U_n\\), we have \\(x^* \\in \\bigcap U_n\\). Also \\(x^* \\in \\overline{B(x_1, r_1)} \\subseteq V_0\\). So \\(x^* \\in V_0 \\cap \\bigcap U_n\\). \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="nested-balls-proof"></div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Equivalence of the Two Forms)</div>
                    <div class="env-body">
                        <p><strong>(1) \\(\\Rightarrow\\) (2):</strong> Suppose \\(X = \\bigcup A_n\\) with each \\(A_n\\) nowhere dense. Then \\(U_n = X \\setminus \\overline{A_n}\\) is open and dense (since \\(\\overline{A_n}\\) has empty interior). By (1), \\(\\bigcap U_n\\) is dense, in particular nonempty. But any \\(x \\in \\bigcap U_n\\) satisfies \\(x \\notin \\overline{A_n}\\) for all \\(n\\), hence \\(x \\notin \\bigcup A_n = X\\) -- contradiction.</p>
                        <p><strong>(2) \\(\\Rightarrow\\) (1):</strong> Let \\(U_n\\) be dense open. Then \\(A_n = X \\setminus U_n\\) is closed with empty interior (nowhere dense). If \\(\\bigcap U_n\\) missed some open \\(V\\), then \\(V \\subseteq \\bigcup A_n\\), making \\(V\\) meager. But \\(V\\) is a nonempty open subset of a complete metric space, hence itself is a complete metric space, and by (2) is not meager -- contradiction. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="completeness-essential"></div>

                <h3>Locally Compact Hausdorff Version</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.2 (Baire Category for Locally Compact Spaces)</div>
                    <div class="env-body">
                        <p>Every locally compact Hausdorff space is a Baire space.</p>
                    </div>
                </div>

                <p>The proof is analogous: instead of using completeness to guarantee convergence, one uses compactness to extract a limit point from the nested sets. The key spaces for functional analysis (Banach spaces, Hilbert spaces) are complete metric spaces, so the metric-space version suffices for most applications.</p>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 7.1</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a complete metric space and \\(X = \\bigcup_{n=1}^\\infty F_n\\) with each \\(F_n\\) closed. Then at least one \\(F_n\\) has nonempty interior.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>If all \\(F_n^\\circ = \\emptyset\\), then each \\(F_n\\) is nowhere dense (being closed with empty interior), so \\(X = \\bigcup F_n\\) is meager, contradicting Baire. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="closed-sets-cover"></div>
            `,
            visualizations: [
                {
                    id: 'nested-balls-proof',
                    title: 'Nested Balls in the Baire Category Proof',
                    description: 'Animate the construction: each ball dodges one nowhere dense set and shrinks inside the previous.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 60, originX: 300, originY: 220 });
                        let step = 0;
                        const maxSteps = 7;

                        const controls = document.createElement('div');
                        controls.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;';
                        const stepBtn = VizEngine.createButton(controls, 'Next Step', () => {
                            step = Math.min(step + 1, maxSteps);
                            draw();
                        });
                        const resetBtn = VizEngine.createButton(controls, 'Reset', () => {
                            step = 0;
                            draw();
                        });
                        container.insertBefore(controls, viz.canvas);

                        // Pre-computed nested balls
                        const balls = [];
                        let cx = 0, cy = 0, r = 3.5;
                        for (let i = 0; i <= maxSteps; i++) {
                            balls.push({ cx: cx, cy: cy, r: r });
                            // Shift center slightly and shrink
                            const angle = (i * 2.3 + 0.5);
                            cx += r * 0.3 * Math.cos(angle);
                            cy += r * 0.3 * Math.sin(angle);
                            r *= 0.55;
                        }

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Baire Category Proof: Nested Closed Balls (Step ' + step + '/' + maxSteps + ')', viz.width / 2, 18);

                            const ballColors = [viz.colors.blue, viz.colors.teal, viz.colors.green, viz.colors.orange, viz.colors.purple, viz.colors.pink, viz.colors.yellow, viz.colors.red];

                            // Draw balls from outermost to innermost
                            for (let i = 0; i <= step; i++) {
                                const b = balls[i];
                                const col = ballColors[i % ballColors.length];

                                // Filled ball
                                viz.drawCircle(b.cx, b.cy, b.r, col + '15', col, 2);

                                // Label
                                const [sx, sy] = viz.toScreen(b.cx + b.r * 0.7, b.cy + b.r * 0.7);
                                ctx.fillStyle = col;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                if (b.r * viz.scale > 12) {
                                    ctx.fillText('B_' + (i + 1), sx, sy);
                                }

                                // Center point
                                viz.drawPoint(b.cx, b.cy, col, '', 3);
                            }

                            // Draw limit point if at last step
                            if (step >= maxSteps) {
                                const last = balls[maxSteps];
                                viz.drawPoint(last.cx, last.cy, viz.colors.white, 'x*', 6);
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = 'bold 13px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('x* is in all balls, hence in all U_n!', viz.width / 2, viz.height - 15);
                            }

                            // Info
                            if (step > 0 && step < maxSteps) {
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Each B_{n+1} is chosen inside B_n intersect U_{n+1}, with radius < 1/(n+1)', viz.width / 2, viz.height - 15);
                            }
                        }
                        draw();
                    }
                },
                {
                    id: 'completeness-essential',
                    title: 'Why Completeness is Essential',
                    description: 'Q is NOT a Baire space: it equals a countable union of nowhere dense singletons. Watch the construction fail.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 60, originX: 300, originY: 200 });

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;

                            const centerY = viz.height / 2;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Completeness is Essential: Q vs R', viz.width / 2, 22);

                            // Q side
                            ctx.fillStyle = viz.colors.red + '15';
                            ctx.fillRect(20, 50, viz.width / 2 - 30, viz.height - 70);
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 1.5;
                            ctx.strokeRect(20, 50, viz.width / 2 - 30, viz.height - 70);

                            ctx.fillStyle = viz.colors.red;
                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Q (not complete)', 20 + (viz.width / 2 - 30) / 2, 68);

                            const qLines = [
                                'Q = {q_1} U {q_2} U ...',
                                'Each {q_n} is nowhere dense',
                                'So Q IS meager in itself!',
                                '',
                                'Q is NOT a Baire space.',
                                '',
                                'The nested-ball construction',
                                'produces a Cauchy sequence,',
                                'but its limit may be irrational',
                                '-- it escapes Q!'
                            ];
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            qLines.forEach((line, i) => {
                                ctx.fillText(line, 35, 90 + i * 20);
                            });

                            // R side
                            const rx = viz.width / 2 + 10;
                            ctx.fillStyle = viz.colors.green + '15';
                            ctx.fillRect(rx, 50, viz.width / 2 - 30, viz.height - 70);
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 1.5;
                            ctx.strokeRect(rx, 50, viz.width / 2 - 30, viz.height - 70);

                            ctx.fillStyle = viz.colors.green;
                            ctx.font = 'bold 13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('R (complete)', rx + (viz.width / 2 - 30) / 2, 68);

                            const rLines = [
                                'R != countable union of',
                                'nowhere dense sets.',
                                'R is NOT meager in itself!',
                                '',
                                'R IS a Baire space.',
                                '',
                                'The nested-ball construction',
                                'produces a Cauchy sequence,',
                                'and completeness guarantees',
                                'the limit stays in R.'
                            ];
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            rLines.forEach((line, i) => {
                                ctx.fillText(line, rx + 15, 90 + i * 20);
                            });
                        }
                        draw();
                    }
                },
                {
                    id: 'closed-sets-cover',
                    title: 'Closed Sets Covering a Complete Space',
                    description: 'If X = union of closed sets F_n, at least one F_n must contain an open ball.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 50, originX: 300, originY: 200 });
                        let time = 0;

                        function draw(t) {
                            time = t * 0.001;
                            viz.clear();
                            const ctx = viz.ctx;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Corollary: If X = F_1 U F_2 U ..., some F_n has nonempty interior', viz.width / 2, 18);

                            // Draw a number line representing [0, 5]
                            const left = 50;
                            const right = viz.width - 50;
                            const lineY = viz.height / 2;
                            const barW = right - left;

                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(left, lineY);
                            ctx.lineTo(right, lineY);
                            ctx.stroke();

                            // Draw 5 closed sets covering [0, 5]
                            const sets = [
                                { start: 0, end: 1.2, color: viz.colors.blue, label: 'F_1' },
                                { start: 0.8, end: 2.3, color: viz.colors.teal, label: 'F_2' },
                                { start: 2.0, end: 3.5, color: viz.colors.green, label: 'F_3' },
                                { start: 3.0, end: 4.2, color: viz.colors.orange, label: 'F_4' },
                                { start: 3.8, end: 5.0, color: viz.colors.purple, label: 'F_5' }
                            ];

                            sets.forEach((s, i) => {
                                const x1 = left + (s.start / 5) * barW;
                                const x2 = left + (s.end / 5) * barW;
                                const yOff = (i % 2 === 0) ? -25 : 10;

                                ctx.fillStyle = s.color + '44';
                                ctx.fillRect(x1, lineY + yOff, x2 - x1, 15);
                                ctx.strokeStyle = s.color;
                                ctx.lineWidth = 1.5;
                                ctx.strokeRect(x1, lineY + yOff, x2 - x1, 15);

                                ctx.fillStyle = s.color;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(s.label, (x1 + x2) / 2, lineY + yOff - 5);
                            });

                            // Highlight that F_3 contains an interval
                            const pulse = 0.5 + 0.5 * Math.sin(time * 3);
                            const hx1 = left + (2.2 / 5) * barW;
                            const hx2 = left + (3.3 / 5) * barW;
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 2 + pulse;
                            ctx.setLineDash([4, 3]);
                            ctx.strokeRect(hx1, lineY - 40, hx2 - hx1, 80);
                            ctx.setLineDash([]);

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('F_3 contains an open interval!', (hx1 + hx2) / 2, lineY + 50);
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('By Baire: at least one closed set must have nonempty interior', viz.width / 2, viz.height - 15);
                        }
                        viz.animate(draw);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch07-ex09',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Give a complete proof that Q (with the usual metric) is not a Baire space.',
                    hint: 'Show Q is meager in itself by writing Q as a countable union of singletons.',
                    solution: 'Write Q = union_{n=1}^infty {q_n} where {q_n} is an enumeration. Each {q_n} is closed in Q (singletons are closed in metric spaces) and has empty interior (any ball B(q_n, eps) in Q contains other rationals). So each {q_n} is nowhere dense. Thus Q = countable union of nowhere dense sets, making Q meager in itself. A Baire space cannot be meager in itself, so Q is not Baire.'
                },
                {
                    id: 'ch07-ex10',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Prove that R cannot be written as a countable union of closed sets, each with empty interior.',
                    hint: 'This is a direct restatement of Baire in the contrapositive.',
                    solution: 'Suppose R = union_{n} F_n with each F_n closed and F_n^circ = empty. Then each F_n is nowhere dense (closed + empty interior). So R is a countable union of nowhere dense sets, i.e., meager in itself. But R is a complete metric space, so by Baire, R is not meager in itself -- contradiction.'
                },
                {
                    id: 'ch07-ex11',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Let X be a complete metric space and let {G_n} be a countable family of dense open subsets. Prove that the intersection G = cap_n G_n is uncountable.',
                    hint: 'The intersection is dense by Baire. Then show that a dense G_delta in a perfect complete metric space is uncountable.',
                    solution: 'By Baire, G is dense. If G were countable, G = {x_1, x_2, ...}, then each {x_k} is nowhere dense (closed with empty interior since X has no isolated points -- if X is perfect; if X has isolated points those are in every dense open set). Then G is meager. But G contains a dense G_delta, hence G is non-meager by Baire applied to X. Contradiction. (Note: need X to be perfect or infinite for this argument.)'
                },
                {
                    id: 'ch07-ex12',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Let f: R -> R be continuous. Show that the set of points where f is locally constant contains an open set or is empty. (Hint: use Baire to analyze {x : f is constant on (x-1/n, x+1/n)} if nonempty.)',
                    hint: 'Write the locally constant set as union over n of closed sets.',
                    solution: 'The set where f is locally constant is S = union_{n=1}^infty S_n where S_n = {x : f is constant on (x-1/n, x+1/n)}. Each S_n is closed (by continuity of f). If S is nonempty and dense in some interval (a,b), then (a,b) = union (S_n intersect (a,b)), and by Baire some S_n intersect (a,b) has nonempty interior. An interior point x of S_n has f constant on (x-eps,x+eps) for some eps, so S contains an open set.'
                }
            ]
        },

        // ============================================================
        // SECTION 4 — Applications
        // ============================================================
        {
            id: 'ch07-sec04',
            title: 'Applications',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Baire Category in Action.</strong> The Baire Category Theorem is a versatile tool with surprising applications well beyond the "big three" theorems. In this section, we explore applications to the structure of \(\mathbb{R}\), the existence of pathological functions, and topological games.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove that \(\mathbb{R}\) is uncountable (a Baire category proof), show that continuous nowhere-differentiable functions are "generic," and explore the Banach-Mazur game, which gives an interactive characterization of meager and comeager sets.</p>
</div>

                <h2>Applications of the Baire Category Theorem</h2>

                <p>The Baire Category Theorem is remarkable not just as an abstract result, but as a tool that proves <em>existence</em> theorems -- often showing that "generic" objects have surprising properties, without constructing any specific example.</p>

                <h3>Application 1: Generic Continuous Functions are Nowhere Differentiable</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.3 (Banach, 1931)</div>
                    <div class="env-body">
                        <p>The set of continuous functions \\(f : [0,1] \\to \\mathbb{R}\\) that are differentiable at <em>at least one point</em> is meager in \\(C([0,1])\\) (with the supremum norm). Consequently, the "typical" continuous function is <strong>nowhere differentiable</strong>.</p>
                    </div>
                </div>

                <p>This is astonishing: while the first examples of continuous nowhere-differentiable functions (Weierstrass, 1872) were considered pathological curiosities, Baire's theorem reveals that differentiable functions are the truly exceptional ones!</p>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>For each \\(n \\in \\mathbb{N}\\) and \\(x_0 \\in [0,1]\\), define:</p>
                        <p>\\[A_{n,x_0} = \\left\\{ f \\in C[0,1] : \\sup_{h \\neq 0} \\left|\\frac{f(x_0+h) - f(x_0)}{h}\\right| \\leq n \\right\\}.\\]</p>
                        <p>If \\(f\\) is differentiable at some \\(x_0\\), then \\(f \\in A_{n,x_0}\\) for \\(n\\) large enough. The set of "somewhere-differentiable" functions is contained in \\(\\bigcup_{n, x_0} A_{n,x_0}\\). One shows each \\(A_{n,x_0}\\) is closed with empty interior in \\(C[0,1]\\), hence nowhere dense. Since the union is over countably many \\(n\\) and a separability argument, the set is meager. \\(\\square\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="weierstrass-function"></div>

                <h3>Application 2: Non-convergence of Fourier Series</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.4 (du Bois-Reymond / Carleson contrast)</div>
                    <div class="env-body">
                        <p>There exist continuous functions on \\([0, 2\\pi]\\) whose Fourier series diverges at a given point. Moreover, the set of such functions is residual (comeager) in \\(C([0, 2\\pi])\\).</p>
                    </div>
                </div>

                <p>This application typically goes through the <strong>Uniform Boundedness Principle</strong> (Chapter 8), which is itself proved using the Baire Category Theorem.</p>

                <h3>Application 3: Existence of Continuous Surjections</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.5</div>
                    <div class="env-body">
                        <p>The set of continuous functions \\(f : [0,1] \\to \\mathbb{R}\\) that are <strong>monotone on some subinterval</strong> is meager in \\(C[0,1]\\). The "typical" continuous function is wildly oscillatory on every subinterval.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="oscillatory-functions"></div>

                <h3>Application 4: Algebraic Numbers are "Rare"</h3>

                <div class="env-block example">
                    <div class="env-title">Example 7.6</div>
                    <div class="env-body">
                        <p>The set of algebraic numbers is countable, hence meager in \\(\\mathbb{R}\\). Therefore, the transcendental numbers form a residual (comeager) set. By Baire, the "generic" real number is transcendental -- without ever constructing a single one!</p>
                    </div>
                </div>

                <h3>Application 5: No Continuous Function Equals Its Fourier Series Everywhere Uniformly Fast</h3>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 7.3 (Condensation of Singularities)</div>
                    <div class="env-body">
                        <p>The Baire Category Theorem is the engine behind the <strong>principle of condensation of singularities</strong>: if a "bad" property (e.g., divergence at a point) occurs on a residual set, then the "bad" property actually occurs at "most" points for the "typical" function.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="baire-applications-summary"></div>
            `,
            visualizations: [
                {
                    id: 'weierstrass-function',
                    title: 'Weierstrass Nowhere-Differentiable Function',
                    description: 'Visualize W(x) = sum a^n cos(b^n pi x). Adjust parameters to see how roughness develops at every scale.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 100, originX: 50, originY: 260 });
                        let a = 0.5;
                        let b = 7;
                        let terms = 8;

                        const s1 = VizEngine.createSlider(container, 'a (decay)', 0.1, 0.9, a, 0.05, v => { a = v; draw(); });
                        const s2 = VizEngine.createSlider(container, 'b (frequency)', 3, 15, b, 1, v => { b = Math.round(v); draw(); });
                        const s3 = VizEngine.createSlider(container, 'Terms N', 1, 15, terms, 1, v => { terms = Math.round(v); draw(); });

                        function weierstrass(x, N) {
                            let sum = 0;
                            for (let n = 0; n < N; n++) {
                                sum += Math.pow(a, n) * Math.cos(Math.pow(b, n) * Math.PI * x);
                            }
                            return sum;
                        }

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('W(x) = sum_{n=0}^{N-1} ' + a.toFixed(2) + '^n cos(' + b + '^n pi x), N=' + terms, viz.width / 2, 18);

                            // Draw individual terms faintly
                            for (let n = 0; n < Math.min(terms, 4); n++) {
                                const col = [viz.colors.blue, viz.colors.teal, viz.colors.green, viz.colors.orange][n];
                                ctx.strokeStyle = col + '55';
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                for (let px = 0; px <= viz.width; px++) {
                                    const x = (px - viz.originX) / viz.scale;
                                    const y = Math.pow(a, n) * Math.cos(Math.pow(b, n) * Math.PI * x);
                                    const sy = viz.originY - y * viz.scale;
                                    if (px === 0) ctx.moveTo(px, sy); else ctx.lineTo(px, sy);
                                }
                                ctx.stroke();
                            }

                            // Draw the Weierstrass sum
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (let px = 0; px <= viz.width; px++) {
                                const x = (px - viz.originX) / viz.scale;
                                const y = weierstrass(x, terms);
                                const sy = viz.originY - y * viz.scale;
                                if (px === 0) ctx.moveTo(px, sy); else ctx.lineTo(px, sy);
                            }
                            ctx.stroke();

                            // Condition check
                            const isContinuous = a * b >= 1 ? 'a*b = ' + (a * b).toFixed(2) + ' >= 1: nowhere differentiable!' : 'a*b = ' + (a * b).toFixed(2) + ' < 1: may still be differentiable';
                            ctx.fillStyle = a * b >= 1 ? viz.colors.orange : viz.colors.teal;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.fillText(isContinuous, viz.width / 2, viz.height - 10);

                            // x-axis
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(0, viz.originY);
                            ctx.lineTo(viz.width, viz.originY);
                            ctx.stroke();
                        }
                        draw();
                    }
                },
                {
                    id: 'oscillatory-functions',
                    title: 'Typical Continuous Functions: Wildly Oscillatory',
                    description: 'Zoom into a random continuous function to see oscillation at every scale -- monotonicity on subintervals is non-generic.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 80, originX: 50, originY: 220 });
                        let zoomLevel = 0;
                        let seed = 42;

                        // Simple pseudo-random with seed
                        function rand(s) {
                            s = Math.sin(s * 12.9898 + 78.233) * 43758.5453;
                            return s - Math.floor(s);
                        }

                        function randomContinuous(x, detail) {
                            let sum = 0;
                            for (let k = 1; k <= 15 + detail * 5; k++) {
                                const phase = rand(seed + k * 7.3) * Math.PI * 2;
                                const amp = 1.0 / Math.pow(k, 0.6);
                                sum += amp * Math.sin(k * Math.PI * x * (1 + detail * 0.5) + phase);
                            }
                            return sum;
                        }

                        const controls = document.createElement('div');
                        controls.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;';
                        VizEngine.createButton(controls, 'Zoom In', () => { zoomLevel = Math.min(zoomLevel + 1, 5); draw(); });
                        VizEngine.createButton(controls, 'Zoom Out', () => { zoomLevel = Math.max(zoomLevel - 1, 0); draw(); });
                        VizEngine.createButton(controls, 'New Function', () => { seed = Math.floor(Math.random() * 10000); draw(); });
                        container.insertBefore(controls, viz.canvas);

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;

                            const zoomFactor = Math.pow(3, zoomLevel);
                            const center = 0.5;
                            const halfWidth = 0.5 / zoomFactor;
                            const xMin = center - halfWidth;
                            const xMax = center + halfWidth;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Typical continuous function (zoom level ' + zoomLevel + '): [' + xMin.toFixed(4) + ', ' + xMax.toFixed(4) + ']', viz.width / 2, 18);

                            // Draw the function
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            let minY = Infinity, maxY = -Infinity;
                            const pts = [];
                            for (let px = 0; px <= viz.width; px++) {
                                const t = px / viz.width;
                                const x = xMin + t * (xMax - xMin);
                                const y = randomContinuous(x, zoomLevel);
                                pts.push(y);
                                if (y < minY) minY = y;
                                if (y > maxY) maxY = y;
                            }

                            const range = maxY - minY || 1;
                            const plotTop = 45;
                            const plotBot = viz.height - 40;
                            const plotH = plotBot - plotTop;

                            for (let px = 0; px <= viz.width; px++) {
                                const sy = plotBot - ((pts[px] - minY) / range) * plotH;
                                if (px === 0) ctx.moveTo(px, sy); else ctx.lineTo(px, sy);
                            }
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.fillText('No matter how far you zoom, the function keeps oscillating -- never monotone on any subinterval!', viz.width / 2, viz.height - 8);
                        }
                        draw();
                    }
                },
                {
                    id: 'baire-applications-summary',
                    title: 'Summary of Baire Category Applications',
                    description: 'Overview of what Baire tells us: the generic object often has surprising properties.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 40, originX: 50, originY: 30 });

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('The Baire Category Theorem: A Tool for Existence Proofs', viz.width / 2, 22);

                            const apps = [
                                { space: 'C[0,1]', generic: 'Nowhere differentiable', meager: 'Somewhere differentiable', color: viz.colors.blue },
                                { space: 'C[0,1]', generic: 'Nowhere monotone', meager: 'Monotone on some subinterval', color: viz.colors.teal },
                                { space: 'R', generic: 'Transcendental', meager: 'Algebraic numbers', color: viz.colors.green },
                                { space: 'C[0,2pi]', generic: 'Fourier diverges at a point', meager: 'Fourier converges everywhere uniformly', color: viz.colors.orange },
                                { space: 'Complete X', generic: 'Avoids any given meager set', meager: 'Any countable union of NW dense', color: viz.colors.purple }
                            ];

                            const startY = 50;
                            const rowH = 50;

                            // Header
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = 'bold 11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Space', 20, startY);
                            ctx.fillText('Generic (Residual)', 140, startY);
                            ctx.fillText('Exceptional (Meager)', 380, startY);

                            ctx.strokeStyle = viz.colors.grid;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(20, startY + 8);
                            ctx.lineTo(viz.width - 20, startY + 8);
                            ctx.stroke();

                            apps.forEach((app, i) => {
                                const y = startY + 22 + i * rowH;

                                ctx.fillStyle = app.color;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText(app.space, 20, y);

                                ctx.fillStyle = viz.colors.green;
                                ctx.fillText(app.generic, 140, y);

                                ctx.fillStyle = viz.colors.red;
                                ctx.fillText(app.meager, 380, y);

                                if (i < apps.length - 1) {
                                    ctx.strokeStyle = viz.colors.grid;
                                    ctx.beginPath();
                                    ctx.moveTo(20, y + 18);
                                    ctx.lineTo(viz.width - 20, y + 18);
                                    ctx.stroke();
                                }
                            });
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch07-ex13',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Let f_n: [0,1] -> R be a sequence of continuous functions converging pointwise to f. Use Baire Category to show that f has at least one point of continuity.',
                    hint: 'Define A_m = {x : osc_f(x) >= 1/m} and show each A_m is closed with empty interior using Baire on the space [0,1].',
                    solution: 'The discontinuity set D of f equals union_{m=1}^infty A_m where A_m = {x : osc_f(x) >= 1/m}. Each A_m is closed. If D = [0,1], then [0,1] = union A_m and by Baire some A_m has nonempty interior, say A_m contains [a,b]. But on [a,b], for each x, f_n(x) -> f(x). By the Baire Category Theorem applied to the closed sets F_{n,k} = {x in [a,b] : |f_n(x) - f(x)| <= 1/(4m) for all j >= n}, [a,b] = union F_{n,k}. Some F_{n,k} has interior, giving uniform convergence on a subinterval, hence continuity -- contradiction with osc >= 1/m there.'
                },
                {
                    id: 'ch07-ex14',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Prove that the irrationals R \\ Q, with the usual metric, form a Baire space.',
                    hint: 'R \\ Q is a dense G_delta in R. A G_delta subset of a complete metric space is completely metrizable.',
                    solution: 'R \\ Q = intersection_{q in Q} (R \\ {q}), a countable intersection of open sets, hence a G_delta set in R. By the Alexandrov theorem, a G_delta subset of a complete metric space is completely metrizable (there exists a compatible complete metric). A complete metric space is a Baire space by the Baire Category Theorem. So R \\ Q is Baire.'
                },
                {
                    id: 'ch07-ex15',
                    type: 'short',
                    difficulty: 3,
                    question: 'Why does the Baire Category Theorem fail for Q? Identify where the proof breaks down.',
                    hint: 'Look at the step where completeness is used.',
                    solution: 'In the proof, we construct a Cauchy sequence (x_n) with x_n in B(x_{n-1}, r_{n-1}) intersect U_n. We need completeness to guarantee x_n converges to some x* in X. For Q, the Cauchy sequence may converge to an irrational, which is not in Q. The limit "escapes" the space.'
                },
                {
                    id: 'ch07-ex16',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Use Baire to prove that there exists a continuous function f: [0,1] -> R whose graph {(x, f(x))} has Hausdorff dimension 1 but which is nowhere differentiable.',
                    hint: 'The set of nowhere-differentiable functions is residual. The set of functions with graph dimension exactly 1 contains a dense G_delta.',
                    solution: 'The nowhere-differentiable functions form a residual set R1 in C[0,1] by Banach\'s theorem. The functions with graph dimension <= 1 are residual (functions with bounded variation form a meager set, and graphs of BV functions have dimension 1; the complement -- non-BV functions -- is residual, and for continuous functions, graph dimension is at most 2 but generically exactly 1 by results of Mauldin-Williams). The intersection of two residual sets is residual, hence nonempty.'
                }
            ]
        },

        // ============================================================
        // SECTION 5 — Banach-Mazur Game
        // ============================================================
        {
            id: 'ch07-sec05',
            title: 'Banach-Mazur Game',
            content: `
<div class="bridge-block section-bridge">
<p><strong>Category Through Games.</strong> The Banach-Mazur game provides an elegant game-theoretic characterization of Baire category. Two players alternately choose nested intervals, and the outcome depends on whether the intersection hits a target set. This playful perspective deepens our understanding of meager and comeager sets.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define the Banach-Mazur game, prove that Player II has a winning strategy if and only if the target set is meager, and use this to give alternative proofs of Baire category results.</p>
</div>

<div class="bridge-block chapter-closing">
<p><strong>Looking Ahead.</strong> With the Baire Category Theorem in our toolkit, we are ready for its most celebrated application: the Uniform Boundedness Principle (Banach-Steinhaus Theorem) in Chapter 8. The idea is deceptively simple: if a family of operators is pointwise bounded, it must be uniformly bounded, but the proof requires the full force of Baire category.</p>
</div>

                <h2>The Banach-Mazur Game</h2>

                <p>The Baire Category Theorem has a beautiful <strong>game-theoretic interpretation</strong> due to Banach and Mazur. This viewpoint makes the theorem more intuitive and connects topology to strategic reasoning.</p>

                <h3>The Game Setup</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.6 (Banach-Mazur Game)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a topological space and \\(A \\subseteq X\\). The <strong>Banach-Mazur game</strong> \\(G^{**}(A)\\) is played between two players, <strong>Player I</strong> and <strong>Player II</strong>:</p>
                        <ol>
                            <li>Player I chooses a nonempty open set \\(U_1\\).</li>
                            <li>Player II chooses a nonempty open set \\(V_1 \\subseteq U_1\\).</li>
                            <li>Player I chooses a nonempty open set \\(U_2 \\subseteq V_1\\).</li>
                            <li>Player II chooses a nonempty open set \\(V_2 \\subseteq U_2\\).</li>
                            <li>And so on, producing \\(U_1 \\supseteq V_1 \\supseteq U_2 \\supseteq V_2 \\supseteq \\cdots\\)</li>
                        </ol>
                        <p><strong>Player II wins</strong> if \\(\\bigcap_{n=1}^\\infty V_n \\cap A \\neq \\emptyset\\).</p>
                        <p><strong>Player I wins</strong> if \\(\\bigcap_{n=1}^\\infty V_n \\cap A = \\emptyset\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="banach-mazur-game"></div>

                <h3>The Connection to Baire Category</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.6 (Banach-Mazur Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a topological space:</p>
                        <ol>
                            <li>Player I has a winning strategy in \\(G^{**}(A)\\) if and only if \\(A\\) is meager.</li>
                            <li>If \\(X\\) is a complete metric space (or Baire space), then Player II has a winning strategy in \\(G^{**}(A)\\) if and only if \\(A\\) is comeager (residual) in some open set.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p><strong>If \\(A\\) is meager:</strong> Write \\(A \\subseteq \\bigcup N_k\\) with each \\(N_k\\) nowhere dense. Player I's strategy: on move \\(k\\), choose \\(U_k\\) inside \\(V_{k-1}\\) that avoids \\(\\overline{N_k}\\) (possible since \\(N_k\\) is nowhere dense). The intersection avoids all \\(N_k\\), hence avoids \\(A\\).</p>
                        <p><strong>If \\(A\\) is comeager:</strong> Player II can always "steer" into \\(A\\) because the complement is meager, and completeness guarantees the intersection is nonempty.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="game-strategy-meager"></div>

                <h3>Proof of Player I's Strategy for Meager Sets</h3>

                <div class="env-block proof">
                    <div class="env-title">Proof (Player I wins when A is meager)</div>
                    <div class="env-body">
                        <p>Let \\(A \\subseteq \\bigcup_{k=1}^\\infty N_k\\), each \\(N_k\\) nowhere dense.</p>
                        <p><strong>Strategy for Player I:</strong> On turn \\(k\\), after Player II plays \\(V_{k-1}\\) (an open set), Player I chooses \\(U_k \\subseteq V_{k-1}\\) such that \\(U_k \\cap \\overline{N_k} = \\emptyset\\). This is possible because \\(N_k\\) is nowhere dense: \\(V_{k-1} \\setminus \\overline{N_k}\\) is nonempty and open.</p>
                        <p>At the end: any point \\(x \\in \\bigcap V_n \\subseteq \\bigcap U_n\\) satisfies \\(x \\notin \\overline{N_k}\\) for all \\(k\\), hence \\(x \\notin \\bigcup N_k \\supseteq A\\). So \\(\\bigcap V_n \\cap A = \\emptyset\\), and Player I wins. \\(\\square\\)</p>
                    </div>
                </div>

                <h3>Variants and Extensions</h3>

                <p>The Banach-Mazur game has many variants:</p>
                <ul>
                    <li><strong>Choquet game:</strong> Players choose points and open neighborhoods, characterizing strong Choquet spaces.</li>
                    <li><strong>Determined games:</strong> By the axiom of determinacy (in certain set-theoretic contexts), all Banach-Mazur games on well-behaved sets are determined (one player has a winning strategy).</li>
                    <li><strong>Function space games:</strong> Playing on \\(C[0,1]\\), one can "prove" that generic functions have various properties by designing winning strategies.</li>
                </ul>

                <div class="viz-placeholder" data-viz="game-on-interval"></div>

                <div class="env-block remark">
                    <div class="env-title">Historical Remark</div>
                    <div class="env-body">
                        <p>The Banach-Mazur game was formulated in the Scottish Book (Problem 43, 1935) by Mazur, and the solution characterizing winning strategies was provided by Banach. The game predates much of modern descriptive set theory and remains an active area of research connecting logic, topology, and game theory.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'banach-mazur-game',
                    title: 'The Banach-Mazur Game: Interactive Play',
                    description: 'Watch Players I and II alternate choosing nested intervals. Target set A is shown in blue.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 40, originX: 50, originY: 30 });
                        let moves = [];
                        let turn = 1; // 1 = Player I, 2 = Player II
                        let currentLeft = 0;
                        let currentRight = 1;

                        // Target set: Cantor set points (meager -- Player I should win)
                        function inCantorSet(x, depth) {
                            for (let i = 0; i < depth; i++) {
                                const third = 1 / 3;
                                const frac = x * 3;
                                const digit = Math.floor(frac);
                                if (digit === 1) return false;
                                x = frac - digit;
                            }
                            return true;
                        }

                        const controls = document.createElement('div');
                        controls.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;';
                        VizEngine.createButton(controls, 'Auto Move', () => {
                            autoMove();
                            draw();
                        });
                        VizEngine.createButton(controls, 'Reset Game', () => {
                            moves = [];
                            turn = 1;
                            currentLeft = 0;
                            currentRight = 1;
                            draw();
                        });
                        container.insertBefore(controls, viz.canvas);

                        function autoMove() {
                            if (moves.length >= 14) return;
                            const range = currentRight - currentLeft;
                            let newLeft, newRight;

                            if (turn === 1) {
                                // Player I: avoid middle third of Cantor construction
                                const third = range / 3;
                                // Choose the middle third (which avoids Cantor set)
                                newLeft = currentLeft + third;
                                newRight = currentRight - third;
                            } else {
                                // Player II: pick a sub-interval
                                const quarter = range / 4;
                                newLeft = currentLeft + quarter;
                                newRight = currentRight - quarter;
                            }

                            moves.push({ player: turn, left: newLeft, right: newRight });
                            currentLeft = newLeft;
                            currentRight = newRight;
                            turn = turn === 1 ? 2 : 1;
                        }

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;
                            const left = 40;
                            const right = viz.width - 40;
                            const barW = right - left;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Banach-Mazur Game: Target A = Cantor Set (meager)', viz.width / 2, 18);

                            // Draw Cantor set on top
                            const cantorY = 40;
                            const depth = 6;
                            function drawCantor(a, b, d) {
                                if (d === 0) {
                                    const px1 = left + a * barW;
                                    const px2 = left + b * barW;
                                    ctx.fillStyle = viz.colors.blue + '66';
                                    ctx.fillRect(px1, cantorY, Math.max(px2 - px1, 1), 12);
                                    return;
                                }
                                const third = (b - a) / 3;
                                drawCantor(a, a + third, d - 1);
                                drawCantor(b - third, b, d - 1);
                            }
                            drawCantor(0, 1, depth);

                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Target A (Cantor set)', left, cantorY - 3);

                            // Draw moves
                            moves.forEach((m, i) => {
                                const y = 70 + i * 24;
                                const px1 = left + m.left * barW;
                                const px2 = left + m.right * barW;
                                const col = m.player === 1 ? viz.colors.red : viz.colors.green;

                                ctx.fillStyle = col + '33';
                                ctx.fillRect(px1, y, px2 - px1, 16);
                                ctx.strokeStyle = col;
                                ctx.lineWidth = 1.5;
                                ctx.strokeRect(px1, y, px2 - px1, 16);

                                ctx.fillStyle = col;
                                ctx.font = '10px -apple-system, sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText((m.player === 1 ? 'I' : 'II') + ':', left - 5, y + 12);
                            });

                            // Current status
                            const statusY = 70 + moves.length * 24 + 15;
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            const nextPlayer = turn === 1 ? 'Player I (red)' : 'Player II (green)';
                            ctx.fillText('Next: ' + nextPlayer + ' | Current interval: [' + currentLeft.toFixed(4) + ', ' + currentRight.toFixed(4) + ']', viz.width / 2, statusY);

                            if (moves.length >= 10) {
                                ctx.fillStyle = viz.colors.orange;
                                ctx.fillText('Player I steers away from Cantor set -- the intersection misses A!', viz.width / 2, statusY + 18);
                            }
                        }
                        draw();
                    }
                },
                {
                    id: 'game-strategy-meager',
                    title: 'Winning Strategy for Meager Target',
                    description: 'Visualize how Player I avoids each nowhere dense layer one by one.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 40, originX: 50, originY: 30 });
                        let activeLayer = 0;

                        const controls = document.createElement('div');
                        controls.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;';
                        VizEngine.createButton(controls, 'Next Layer', () => {
                            activeLayer = Math.min(activeLayer + 1, 5);
                            draw();
                        });
                        VizEngine.createButton(controls, 'Reset', () => {
                            activeLayer = 0;
                            draw();
                        });
                        container.insertBefore(controls, viz.canvas);

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;
                            const left = 60;
                            const right = viz.width - 30;
                            const barW = right - left;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Player I\'s Strategy: Avoid N_k on Turn k', viz.width / 2, 18);

                            // The nowhere dense sets (points on number line)
                            const ndSets = [
                                [0.2, 0.5, 0.8],
                                [0.15, 0.35, 0.65, 0.9],
                                [0.1, 0.3, 0.55, 0.75, 0.95],
                                [0.05, 0.25, 0.45, 0.6, 0.85],
                                [0.12, 0.38, 0.58, 0.72, 0.92]
                            ];

                            // Current interval
                            let intLeft = 0, intRight = 1;
                            const intervals = [{ l: 0, r: 1 }];

                            for (let k = 0; k < Math.min(activeLayer, 5); k++) {
                                const pts = ndSets[k];
                                // Find a gap in the current interval
                                const range = intRight - intLeft;
                                const midPts = pts.filter(p => p > intLeft + range * 0.1 && p < intRight - range * 0.1);

                                // Place interval avoiding the nearest point
                                if (midPts.length > 0) {
                                    const avoid = midPts[0];
                                    if (avoid < (intLeft + intRight) / 2) {
                                        intLeft = avoid + range * 0.05;
                                        intRight = intRight - range * 0.05;
                                    } else {
                                        intRight = avoid - range * 0.05;
                                        intLeft = intLeft + range * 0.05;
                                    }
                                } else {
                                    intLeft += range * 0.15;
                                    intRight -= range * 0.15;
                                }
                                intervals.push({ l: intLeft, r: intRight });
                            }

                            // Draw each layer
                            for (let k = 0; k < 5; k++) {
                                const y = 45 + k * 50;
                                const pts = ndSets[k];
                                const isActive = k < activeLayer;

                                // Number line
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(left, y + 15);
                                ctx.lineTo(right, y + 15);
                                ctx.stroke();

                                // Points of N_k
                                const col = isActive ? viz.colors.red : viz.colors.red + '44';
                                pts.forEach(p => {
                                    const px = left + p * barW;
                                    ctx.fillStyle = col;
                                    ctx.beginPath();
                                    ctx.arc(px, y + 15, 4, 0, Math.PI * 2);
                                    ctx.fill();
                                });

                                // Label
                                ctx.fillStyle = isActive ? viz.colors.text : viz.colors.text + '44';
                                ctx.font = '10px -apple-system, sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText('N_' + (k + 1), left - 8, y + 18);

                                // Draw current interval at this stage
                                if (k < intervals.length && isActive) {
                                    const iv = intervals[k + 1] || intervals[intervals.length - 1];
                                    const px1 = left + iv.l * barW;
                                    const px2 = left + iv.r * barW;
                                    ctx.fillStyle = viz.colors.green + '33';
                                    ctx.fillRect(px1, y + 3, px2 - px1, 24);
                                    ctx.strokeStyle = viz.colors.green;
                                    ctx.lineWidth = 1.5;
                                    ctx.strokeRect(px1, y + 3, px2 - px1, 24);
                                }
                            }

                            // Summary
                            const sumY = 45 + 5 * 50 + 10;
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            if (activeLayer >= 5) {
                                ctx.fillText('After avoiding all N_k: intersection avoids A = union N_k. Player I wins!', viz.width / 2, sumY);
                            } else {
                                ctx.fillText('Layer ' + activeLayer + '/5 avoided. Click "Next Layer" to continue.', viz.width / 2, sumY);
                            }
                        }
                        draw();
                    }
                },
                {
                    id: 'game-on-interval',
                    title: 'Banach-Mazur Game on [0,1]',
                    description: 'Play the game interactively. Click to choose subintervals as Player II against an automatic Player I.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 40, originX: 50, originY: 30 });
                        let gameState = [];
                        let currentL = 0, currentR = 1;
                        let turn = 1;
                        let gameOver = false;

                        const controls = document.createElement('div');
                        controls.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;';
                        VizEngine.createButton(controls, 'Auto Play Round', () => {
                            if (gameOver || gameState.length >= 16) {
                                gameOver = true;
                                draw();
                                return;
                            }
                            // Player I picks
                            const range1 = currentR - currentL;
                            const newL1 = currentL + range1 * 0.1;
                            const newR1 = currentR - range1 * 0.15;
                            gameState.push({ player: 1, l: newL1, r: newR1 });
                            currentL = newL1;
                            currentR = newR1;

                            // Player II picks
                            const range2 = currentR - currentL;
                            const newL2 = currentL + range2 * 0.2;
                            const newR2 = currentR - range2 * 0.1;
                            gameState.push({ player: 2, l: newL2, r: newR2 });
                            currentL = newL2;
                            currentR = newR2;

                            if (gameState.length >= 16) gameOver = true;
                            draw();
                        });
                        VizEngine.createButton(controls, 'New Game', () => {
                            gameState = [];
                            currentL = 0;
                            currentR = 1;
                            turn = 1;
                            gameOver = false;
                            draw();
                        });
                        container.insertBefore(controls, viz.canvas);

                        function draw() {
                            viz.clear();
                            const ctx = viz.ctx;
                            const left = 40;
                            const right = viz.width - 40;
                            const barW = right - left;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Banach-Mazur Game on [0,1]', viz.width / 2, 18);

                            // Initial interval
                            ctx.fillStyle = viz.colors.grid;
                            ctx.fillRect(left, 38, barW, 16);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('[0, 1]', left + barW / 2, 50);

                            // Draw each move
                            gameState.forEach((m, i) => {
                                const y = 62 + i * 20;
                                const px1 = left + m.l * barW;
                                const px2 = left + m.r * barW;
                                const col = m.player === 1 ? viz.colors.red : viz.colors.green;

                                ctx.fillStyle = col + '44';
                                ctx.fillRect(px1, y, Math.max(px2 - px1, 2), 14);
                                ctx.strokeStyle = col;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(px1, y, Math.max(px2 - px1, 2), 14);

                                ctx.fillStyle = col;
                                ctx.font = '9px -apple-system, sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText(m.player === 1 ? 'I' : 'II', left - 5, y + 10);
                            });

                            if (gameOver) {
                                const finalY = 62 + gameState.length * 20 + 10;
                                ctx.fillStyle = viz.colors.orange;
                                ctx.font = 'bold 12px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Game over! Final interval: [' + currentL.toFixed(6) + ', ' + currentR.toFixed(6) + ']', viz.width / 2, finalY);
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '11px -apple-system, sans-serif';
                                ctx.fillText('Winner depends on whether intersection meets target set A', viz.width / 2, finalY + 18);
                            }
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch07-ex17',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Describe explicitly a winning strategy for Player I in the Banach-Mazur game when A = Q intersect [0,1].',
                    hint: 'Enumerate Q = {q_1, q_2, ...}. On move k, Player I avoids q_k.',
                    solution: 'Enumerate Q intersect [0,1] = {q_1, q_2, ...}. Player I\'s strategy: on turn k, after Player II plays V_{k-1}, Player I chooses U_k to be an open subinterval of V_{k-1} that does not contain q_k (possible since {q_k} is nowhere dense). Then any x in cap V_n subset cap U_n satisfies x != q_k for all k, so x is irrational. Thus cap V_n intersect Q = empty and Player I wins.'
                },
                {
                    id: 'ch07-ex18',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Prove that if X is a complete metric space and A is residual in X, then Player II has a winning strategy in the Banach-Mazur game G**(A).',
                    hint: 'A is residual means X\\A is meager. Write X\\A = union N_k, N_k nowhere dense. Player II avoids N_k on turn k.',
                    solution: 'Since A is residual, X \\ A = union N_k with N_k nowhere dense. Player II\'s strategy: on turn k, after Player I plays U_k, Player II chooses V_k subset U_k such that V_k is disjoint from N_k (possible since N_k is nowhere dense) and diam(V_k) < 1/k. The sequence of centers of V_k is Cauchy with decreasing diameters. By completeness, cap V_k = {x*} for some x*. Since x* avoids each N_k, x* is not in X \\ A, so x* in A. Hence cap V_n intersect A != empty and Player II wins.'
                },
                {
                    id: 'ch07-ex19',
                    type: 'short',
                    difficulty: 2,
                    question: 'In the Banach-Mazur game on R with target A = R (the whole space), who has a winning strategy and why?',
                    hint: 'The intersection of nested closed intervals is always nonempty (completeness).',
                    solution: 'Player II always wins, regardless of strategy. Since X = R is complete, any nested sequence of closed intervals with diameters shrinking to 0 has nonempty intersection. Any point in the intersection is in R = A. So Player II wins trivially.'
                },
                {
                    id: 'ch07-ex20',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Use the Banach-Mazur game to give an alternative proof that a complete metric space is not meager in itself.',
                    hint: 'If X were meager, Player I would have a winning strategy for G**(X). But Player II trivially wins G**(X).',
                    solution: 'Suppose X is meager. By the Banach-Mazur theorem, Player I has a winning strategy in G**(X). This means Player I can ensure cap V_n intersect X = empty. But cap V_n is a nested intersection of nonempty open sets, and by choosing V_n with diam < 1/n, completeness gives cap V_n != empty. Any point in cap V_n is in X. So cap V_n intersect X != empty -- contradicting Player I\'s alleged win. Hence X is not meager.'
                }
            ]
        }

    ]
});
