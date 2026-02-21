window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch04',
    number: 4,
    title: 'Orthogonality & Projections',
    subtitle: 'Decomposing Hilbert spaces',
    sections: [
        // ============================================================
        // SECTION 1: Orthogonal Complements
        // ============================================================
        {
            id: 'ch04-sec01',
            title: 'Orthogonal Complements',
            content: `
<h2>1 &mdash; Orthogonal Complements</h2>

<h3>1.1 Definition and Basic Properties</h3>

<p>Given an inner product space \\(H\\) and a subset \\(M \\subseteq H\\), the <strong>orthogonal complement</strong> of \\(M\\) is</p>
$$M^\\perp = \\{x \\in H : \\langle x, m \\rangle = 0 \\text{ for all } m \\in M\\}.$$

<p>This set captures every vector that is "perpendicular" to all of \\(M\\). Let us record the fundamental properties.</p>

<div class="theorem">
<strong>Proposition 1.1.</strong> Let \\(M\\) be any subset of an inner product space \\(H\\). Then:
<ol>
<li>\\(M^\\perp\\) is a closed subspace of \\(H\\) (even if \\(M\\) is not a subspace).</li>
<li>\\(M \\cap M^\\perp \\subseteq \\{0\\}\\).</li>
<li>If \\(M_1 \\subseteq M_2\\), then \\(M_2^\\perp \\subseteq M_1^\\perp\\).</li>
<li>\\(M \\subseteq (M^\\perp)^\\perp\\).</li>
</ol>
</div>

<div class="proof">
<strong>Proof.</strong>
(1) For each fixed \\(m \\in M\\), the map \\(x \\mapsto \\langle x, m \\rangle\\) is a continuous linear functional. Thus \\(M^\\perp = \\bigcap_{m \\in M} \\ker(\\langle \\cdot, m \\rangle)\\) is an intersection of closed subspaces and is therefore a closed subspace.

(2) If \\(x \\in M \\cap M^\\perp\\), then \\(\\langle x, x \\rangle = 0\\), so \\(x = 0\\).

(3) If \\(x \\perp M_2\\), then certainly \\(x \\perp M_1\\).

(4) If \\(m \\in M\\) and \\(y \\in M^\\perp\\), then \\(\\langle m, y \\rangle = 0\\), so \\(m \\in (M^\\perp)^\\perp\\). \\(\\square\\)
</div>

<h3>1.2 The Orthogonal Decomposition Theorem</h3>

<p>The crown jewel for closed subspaces of a Hilbert space is the direct sum decomposition.</p>

<div class="theorem">
<strong>Theorem 1.2 (Orthogonal Decomposition).</strong> Let \\(H\\) be a Hilbert space and \\(M\\) a closed subspace. Then every \\(x \\in H\\) has a unique decomposition
$$x = m + m^\\perp, \\quad m \\in M, \\; m^\\perp \\in M^\\perp.$$
Equivalently, \\(H = M \\oplus M^\\perp\\).
</div>

<p>The proof relies on the <em>Projection Theorem</em> (Section 2). The key observation is that for a closed convex set in a Hilbert space, a unique nearest point always exists.</p>

<h3>1.3 Double Orthogonal Complement</h3>

<div class="theorem">
<strong>Theorem 1.3.</strong> If \\(M\\) is a closed subspace of a Hilbert space \\(H\\), then \\((M^\\perp)^\\perp = M\\).
</div>

<div class="proof">
<strong>Proof.</strong> We already know \\(M \\subseteq (M^\\perp)^\\perp\\). For the reverse, take any \\(x \\in (M^\\perp)^\\perp\\). By the orthogonal decomposition, write \\(x = m + n\\) with \\(m \\in M\\) and \\(n \\in M^\\perp\\). Then \\(n = x - m \\in (M^\\perp)^\\perp\\) (since both \\(x\\) and \\(m\\) lie there). But also \\(n \\in M^\\perp\\), so \\(\\langle n, n \\rangle = 0\\), giving \\(n = 0\\) and \\(x = m \\in M\\). \\(\\square\\)
</div>

<p>For a <em>non-closed</em> subspace \\(S\\), we get \\((S^\\perp)^\\perp = \\overline{S}\\) (the closure). This underscores the importance of completeness in the Hilbert space setting.</p>

<div class="theorem">
<strong>Corollary 1.4.</strong> For any subset \\(M \\subseteq H\\): \\(\\;M^\\perp = \\{0\\}\\) if and only if \\(\\overline{\\operatorname{span}(M)} = H\\).
</div>

<p>This result is fundamental: a subset has trivial orthogonal complement precisely when it spans a dense subspace&mdash;i.e., it is a <em>total</em> or <em>fundamental</em> set in \\(H\\).</p>
`,
            visualizations: [
                {
                    id: 'viz-orthogonal-complement-2d',
                    title: 'Orthogonal Complement in R^2',
                    description: 'Drag the blue vector to see how M (its span) and its orthogonal complement M^perp decompose the plane.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 50 });
                        const v = viz.addDraggable('v', 3, 1, viz.colors.blue);

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const vx = v.x, vy = v.y;
                            const len = Math.sqrt(vx * vx + vy * vy);
                            if (len < 0.01) { requestAnimationFrame(draw); return; }

                            // Direction of M and M^perp
                            const ux = vx / len, uy = vy / len;
                            const px = -uy, py = ux;

                            // Draw M (the line through v) and M^perp
                            viz.drawLine(0, 0, ux, uy, viz.colors.blue + '66', 2);
                            viz.drawLine(0, 0, px, py, viz.colors.orange + '66', 2);

                            // Shade half-planes lightly
                            const ext = 12;
                            const ctx = viz.ctx;

                            // M shading
                            ctx.save();
                            ctx.fillStyle = viz.colors.blue + '0d';
                            const [s1x, s1y] = viz.toScreen(-ux * ext, -uy * ext);
                            const [s2x, s2y] = viz.toScreen(ux * ext, uy * ext);
                            ctx.fillRect(0, 0, viz.width, viz.height);
                            ctx.restore();

                            // Draw the vector itself
                            viz.drawVector(0, 0, vx, vy, viz.colors.blue, 'v');

                            // Labels
                            viz.drawText('M = span{v}', ux * 4.5, uy * 4.5, viz.colors.blue, 13);
                            viz.drawText('M^perp', px * 3.5, py * 3.5, viz.colors.orange, 13);

                            // Right angle marker
                            const markerSize = 0.3;
                            const cx1 = ux * markerSize + px * markerSize;
                            const cy1 = uy * markerSize + py * markerSize;
                            viz.drawSegment(ux * markerSize, uy * markerSize, cx1, cy1, viz.colors.text, 1);
                            viz.drawSegment(px * markerSize, py * markerSize, cx1, cy1, viz.colors.text, 1);

                            viz.drawDraggables();
                            requestAnimationFrame(draw);
                        }
                        draw();
                    }
                },
                {
                    id: 'viz-decomposition-demo',
                    title: 'Orthogonal Decomposition: x = m + m^perp',
                    description: 'Drag the red point x to see how it decomposes into components in M (blue line) and M^perp.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 50 });
                        const x = viz.addDraggable('x', 2, 3, viz.colors.red);
                        const dir = viz.addDraggable('dir', 4, 1, viz.colors.blue);

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const dx = dir.x, dy = dir.y;
                            const dLen = Math.sqrt(dx * dx + dy * dy);
                            if (dLen < 0.01) { viz.drawDraggables(); requestAnimationFrame(draw); return; }

                            const ux = dx / dLen, uy = dy / dLen;

                            // Draw M line
                            viz.drawLine(0, 0, ux, uy, viz.colors.blue + '55', 2);

                            // Project x onto M
                            const dot = x.x * ux + x.y * uy;
                            const mx = dot * ux, my = dot * uy;
                            const perpX = x.x - mx, perpY = x.y - my;

                            // Shaded parallelogram
                            viz.drawSegment(0, 0, mx, my, viz.colors.blue, 2, true);
                            viz.drawSegment(mx, my, x.x, x.y, viz.colors.orange, 2, true);

                            // The vector x
                            viz.drawVector(0, 0, x.x, x.y, viz.colors.red, 'x', 2.5);

                            // Component vectors
                            viz.drawVector(0, 0, mx, my, viz.colors.blue, 'm');
                            viz.drawVector(mx, my, x.x, x.y, viz.colors.orange, 'n');

                            // Right angle marker at projection
                            const ms = 0.25;
                            const nx = -uy, ny = ux;
                            const c1x = mx + ux * ms + nx * ms * (perpX * nx + perpY * ny > 0 ? 1 : -1);
                            const c1y = my + uy * ms + ny * ms * (perpX * nx + perpY * ny > 0 ? 1 : -1);
                            const signP = (perpX * (-uy) + perpY * ux) > 0 ? 1 : -1;
                            viz.drawSegment(mx + ux * ms, my + uy * ms, mx + ux * ms + (-uy) * ms * signP, my + uy * ms + ux * ms * signP, viz.colors.text, 1);
                            viz.drawSegment(mx + (-uy) * ms * signP, my + ux * ms * signP, mx + ux * ms + (-uy) * ms * signP, my + uy * ms + ux * ms * signP, viz.colors.text, 1);

                            // Info
                            viz.screenText('x = m + n', 15, 20, viz.colors.white, 14, 'left');
                            viz.screenText('m in M (blue)', 15, 38, viz.colors.blue, 12, 'left');
                            viz.screenText('n in M^perp (orange)', 15, 54, viz.colors.orange, 12, 'left');

                            viz.drawText('M', ux * 5, uy * 5, viz.colors.blue, 13);

                            viz.drawDraggables();
                            requestAnimationFrame(draw);
                        }
                        draw();
                    }
                },
                {
                    id: 'viz-double-perp',
                    title: 'Double Orthogonal Complement',
                    description: 'Visualizing (M^perp)^perp = M. The red region shows M, orange shows M^perp, and green shows (M^perp)^perp, which coincides with M.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 50 });
                        const angle = { value: 0.4 };
                        const slider = VizEngine.createSlider(container, 'Angle of M', 0, Math.PI - 0.01, angle.value, 0.01, function(val) { angle.value = val; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            const a = angle.value;
                            const ux = Math.cos(a), uy = Math.sin(a);
                            const px = -uy, py = ux;

                            // M line (red)
                            viz.drawLine(0, 0, ux, uy, viz.colors.red, 3);
                            viz.drawText('M', ux * 5, uy * 5, viz.colors.red, 14);

                            // M^perp line (orange)
                            viz.drawLine(0, 0, px, py, viz.colors.orange, 2, true);
                            viz.drawText('M^perp', px * 4, py * 4, viz.colors.orange, 14);

                            // (M^perp)^perp = M again (green, slightly offset)
                            viz.drawLine(0, 0, ux, uy, viz.colors.green + '88', 6);
                            viz.drawText('(M^perp)^perp', ux * 5 + 0.5, uy * 5 + 0.6, viz.colors.green, 12);

                            // Right angle
                            var ms = 0.35;
                            viz.drawSegment(ux * ms, uy * ms, ux * ms + px * ms, uy * ms + py * ms, viz.colors.text, 1);
                            viz.drawSegment(px * ms, py * ms, ux * ms + px * ms, uy * ms + py * ms, viz.colors.text, 1);

                            viz.screenText('(M^perp)^perp = M (always!)', viz.width / 2, viz.height - 15, viz.colors.green, 13);
                        }

                        draw();
                        slider.addEventListener('input', draw);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ex-1-1',
                    type: 'proof',
                    difficulty: 2,
                    question: 'Prove that if M is any subset of a Hilbert space H, then M^perp is a closed subspace, directly from the definition of inner product continuity.',
                    hint: 'For each m in M, the map f_m(x) = <x, m> is continuous. Express M^perp as an intersection of kernels.',
                    solution: 'For fixed m in M, define f_m: H -> K by f_m(x) = <x, m>. By Cauchy-Schwarz, |f_m(x) - f_m(y)| = |<x - y, m>| <= ||x - y|| ||m||, so f_m is continuous. The kernel ker(f_m) = {x : <x, m> = 0} is a closed subspace. Then M^perp = intersection over m in M of ker(f_m), which is an intersection of closed subspaces and is therefore a closed subspace.'
                },
                {
                    id: 'ex-1-2',
                    type: 'short-answer',
                    difficulty: 2,
                    question: 'In L^2([0,1]), let M = {f in L^2([0,1]) : f(x) = 0 a.e. on [0, 1/2]}. Describe M^perp.',
                    hint: 'A function g is in M^perp iff integral_0^1 f(x)g(x)dx = 0 for all f supported on (1/2, 1].',
                    solution: 'M^perp = {g in L^2([0,1]) : g(x) = 0 a.e. on (1/2, 1]}. Indeed, if g in M^perp then for any f supported on (1/2,1], integral f*g dx = 0, which forces g = 0 a.e. on (1/2,1]. Conversely, any such g is clearly perpendicular to all of M.'
                },
                {
                    id: 'ex-1-3',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Let S be a dense subspace of a Hilbert space H (not necessarily closed). Show that S^perp = {0}.',
                    hint: 'Use continuity of the inner product together with the density of S.',
                    solution: 'Suppose x in S^perp. For any h in H, pick a sequence (s_n) in S with s_n -> h. Then <x, h> = <x, lim s_n> = lim <x, s_n> = lim 0 = 0. So x is perpendicular to all of H, which means <x, x> = 0 and x = 0.'
                },
                {
                    id: 'ex-1-4',
                    type: 'multiple-choice',
                    difficulty: 1,
                    question: 'If M is a closed subspace of a Hilbert space H with dim H = n < infinity, what is dim(M) + dim(M^perp)?',
                    options: ['dim(M)', 'n', 'n - 1', '2n'],
                    correct: 1,
                    explanation: 'Since H = M direct-sum M^perp, the dimensions add: dim(M) + dim(M^perp) = dim(H) = n.'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Projection Theorem
        // ============================================================
        {
            id: 'ch04-sec02',
            title: 'Projection Theorem',
            content: `
<h2>2 &mdash; The Projection Theorem</h2>

<h3>2.1 Closest Point in a Convex Set</h3>

<p>Before stating the projection theorem for subspaces, we need a more general result about convex sets.</p>

<div class="theorem">
<strong>Theorem 2.1 (Best Approximation).</strong> Let \\(C\\) be a nonempty, closed, convex subset of a Hilbert space \\(H\\), and let \\(x \\in H\\). Then there exists a <em>unique</em> point \\(c_0 \\in C\\) such that
$$\\|x - c_0\\| = \\inf_{c \\in C} \\|x - c\\| = d(x, C).$$
</div>

<div class="proof">
<strong>Proof sketch.</strong>
<em>Existence:</em> Let \\(d = \\inf_{c \\in C} \\|x - c\\|\\) and pick a minimizing sequence \\((c_n)\\) with \\(\\|x - c_n\\| \\to d\\). By the <strong>parallelogram identity</strong>,
$$\\|c_n - c_m\\|^2 = 2\\|c_n - x\\|^2 + 2\\|c_m - x\\|^2 - 4\\left\\|\\tfrac{c_n + c_m}{2} - x\\right\\|^2 \\le 2\\|c_n - x\\|^2 + 2\\|c_m - x\\|^2 - 4d^2 \\to 0$$
since \\(\\frac{c_n + c_m}{2} \\in C\\) (convexity), so \\(\\|\\frac{c_n+c_m}{2}-x\\| \\ge d\\). Thus \\((c_n)\\) is Cauchy, so it converges to some \\(c_0 \\in C\\) (since \\(C\\) is closed), with \\(\\|x - c_0\\| = d\\).

<em>Uniqueness:</em> If \\(c_0\\) and \\(c_0'\\) are both closest, the same parallelogram identity gives \\(\\|c_0 - c_0'\\|^2 \\le 2d^2 + 2d^2 - 4d^2 = 0\\). \\(\\square\\)
</div>

<h3>2.2 Projection onto a Closed Subspace</h3>

<div class="theorem">
<strong>Theorem 2.2 (Projection Theorem).</strong> Let \\(M\\) be a closed subspace of a Hilbert space \\(H\\) and let \\(x \\in H\\). The unique closest point \\(m_0 \\in M\\) to \\(x\\) is characterized by the <strong>orthogonality condition</strong>:
$$m_0 \\in M \\quad \\text{and} \\quad (x - m_0) \\perp M.$$
That is, \\(x - m_0 \\in M^\\perp\\).
</div>

<div class="proof">
<strong>Proof.</strong> By Theorem 2.1, \\(m_0\\) exists and is unique. For any \\(m \\in M\\) and \\(t \\in \\mathbb{R}\\),
$$\\|x - m_0\\|^2 \\le \\|x - (m_0 + tm)\\|^2 = \\|x - m_0\\|^2 - 2t\\operatorname{Re}\\langle x - m_0, m \\rangle + t^2\\|m\\|^2.$$
The minimum in \\(t\\) is at \\(t = \\operatorname{Re}\\langle x - m_0, m\\rangle / \\|m\\|^2\\). Since the minimum must be at \\(t = 0\\), we get \\(\\operatorname{Re}\\langle x - m_0, m \\rangle = 0\\) for all \\(m \\in M\\). Replacing \\(m\\) by \\(im\\) gives \\(\\operatorname{Im}\\langle x - m_0, m \\rangle = 0\\), hence \\(\\langle x - m_0, m \\rangle = 0\\) for all \\(m \\in M\\). \\(\\square\\)
</div>

<h3>2.3 Geometric Interpretation</h3>

<p>The Projection Theorem says: <em>drop a perpendicular from \\(x\\) to \\(M\\)</em>. The foot of the perpendicular is the closest point. This generalizes the familiar picture from \\(\\mathbb{R}^n\\) to infinite-dimensional spaces.</p>

<p>In \\(\\mathbb{R}^3\\), projecting a point onto a plane through the origin always produces a right angle between the "shadow" (the projection) and the "height" (the residual). The same principle works in <em>any</em> Hilbert space, no matter the dimension.</p>

<div class="theorem">
<strong>Corollary 2.3 (Pythagorean Theorem).</strong> With the notation above,
$$\\|x\\|^2 = \\|m_0\\|^2 + \\|x - m_0\\|^2.$$
</div>
`,
            visualizations: [
                {
                    id: 'viz-projection-draggable',
                    title: 'Projection onto a Subspace (Interactive)',
                    description: 'Drag point x (red) and the direction of subspace M (blue handle). The projection and perpendicular are shown.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 50 });
                        const x = viz.addDraggable('x', 2, 3.5, viz.colors.red);
                        const mDir = viz.addDraggable('m', 4, 1.5, viz.colors.blue);

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var dx = mDir.x, dy = mDir.y;
                            var dLen = Math.sqrt(dx * dx + dy * dy);
                            if (dLen < 0.01) { viz.drawDraggables(); requestAnimationFrame(draw); return; }
                            var ux = dx / dLen, uy = dy / dLen;

                            // Subspace M as a line
                            viz.drawLine(0, 0, ux, uy, viz.colors.blue + '55', 2);
                            viz.drawText('M', ux * 5.5, uy * 5.5, viz.colors.blue, 14);

                            // Project x onto M
                            var projScalar = x.x * ux + x.y * uy;
                            var projX = projScalar * ux, projY = projScalar * uy;

                            // Perpendicular line
                            viz.drawSegment(x.x, x.y, projX, projY, viz.colors.orange, 2, true);

                            // Right angle marker
                            var ms = 0.25;
                            var nx = -uy, ny = ux;
                            var resX = x.x - projX, resY = x.y - projY;
                            var sn = (resX * nx + resY * ny) > 0 ? 1 : -1;
                            if (Math.sqrt(resX * resX + resY * resY) > 0.3) {
                                viz.drawSegment(projX + ux * ms * (projScalar > 0 ? -1 : 1), projY + uy * ms * (projScalar > 0 ? -1 : 1),
                                    projX + ux * ms * (projScalar > 0 ? -1 : 1) + nx * ms * sn, projY + uy * ms * (projScalar > 0 ? -1 : 1) + ny * ms * sn, viz.colors.text, 1);
                                viz.drawSegment(projX + nx * ms * sn, projY + ny * ms * sn,
                                    projX + ux * ms * (projScalar > 0 ? -1 : 1) + nx * ms * sn, projY + uy * ms * (projScalar > 0 ? -1 : 1) + ny * ms * sn, viz.colors.text, 1);
                            }

                            // Vectors
                            viz.drawVector(0, 0, x.x, x.y, viz.colors.red, 'x', 2.5);
                            viz.drawVector(0, 0, projX, projY, viz.colors.teal, 'Px');
                            viz.drawPoint(projX, projY, viz.colors.teal, '', 6);

                            // Distance readout
                            var dist = Math.sqrt((x.x - projX) * (x.x - projX) + (x.y - projY) * (x.y - projY));
                            viz.screenText('d(x, M) = ' + dist.toFixed(3), viz.width - 10, 20, viz.colors.orange, 13, 'right');

                            // Pythagorean theorem
                            var normX = Math.sqrt(x.x * x.x + x.y * x.y);
                            var normP = Math.sqrt(projX * projX + projY * projY);
                            viz.screenText('||x||^2 = ' + (normX * normX).toFixed(2) + '  =  ||Px||^2 + ||x-Px||^2  =  ' + (normP * normP).toFixed(2) + ' + ' + (dist * dist).toFixed(2), 15, viz.height - 15, viz.colors.text, 11, 'left');

                            viz.drawDraggables();
                            requestAnimationFrame(draw);
                        }
                        draw();
                    }
                },
                {
                    id: 'viz-closest-point-convex',
                    title: 'Closest Point in a Convex Set',
                    description: 'Drag x (red) to see the closest point in a convex region (shaded blue). The minimizing distance is shown.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 50 });
                        const x = viz.addDraggable('x', 4, 3, viz.colors.red);

                        // Convex set: a disk centered at (0,0) with radius 2
                        var R = 2;

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Draw convex set (disk)
                            viz.drawCircle(0, 0, R, viz.colors.blue + '18', viz.colors.blue + '55', 2);
                            viz.drawText('C', 0, 0, viz.colors.blue, 16);

                            var px = x.x, py = x.y;
                            var dist = Math.sqrt(px * px + py * py);

                            var closestX, closestY;
                            if (dist <= R) {
                                closestX = px;
                                closestY = py;
                            } else {
                                closestX = R * px / dist;
                                closestY = R * py / dist;
                            }

                            // Line from x to closest
                            viz.drawSegment(px, py, closestX, closestY, viz.colors.orange, 2, true);
                            viz.drawPoint(closestX, closestY, viz.colors.teal, 'c_0', 6);

                            // The point x
                            viz.drawPoint(px, py, viz.colors.red, 'x', 6);

                            var actualDist = Math.sqrt((px - closestX) * (px - closestX) + (py - closestY) * (py - closestY));
                            viz.screenText('d(x, C) = ' + actualDist.toFixed(3), viz.width - 10, 20, viz.colors.orange, 13, 'right');
                            viz.screenText('Unique closest point c_0 in C', viz.width / 2, viz.height - 15, viz.colors.teal, 12);

                            viz.drawDraggables();
                            requestAnimationFrame(draw);
                        }
                        draw();
                    }
                },
                {
                    id: 'viz-parallelogram-identity',
                    title: 'Parallelogram Law in Action',
                    description: 'The parallelogram identity ||u+v||^2 + ||u-v||^2 = 2||u||^2 + 2||v||^2 is the key tool. Drag u and v to verify.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 45 });
                        const u = viz.addDraggable('u', 3, 1, viz.colors.blue);
                        const v = viz.addDraggable('v', 1, 3, viz.colors.teal);

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Parallelogram
                            viz.drawPolygon([[0, 0], [u.x, u.y], [u.x + v.x, u.y + v.y], [v.x, v.y]], viz.colors.purple + '15', viz.colors.purple + '44', 1);

                            // Diagonals
                            viz.drawSegment(0, 0, u.x + v.x, u.y + v.y, viz.colors.orange, 2);
                            viz.drawSegment(u.x, u.y, v.x, v.y, viz.colors.green, 2);

                            // Vectors
                            viz.drawVector(0, 0, u.x, u.y, viz.colors.blue, 'u');
                            viz.drawVector(0, 0, v.x, v.y, viz.colors.teal, 'v');

                            // Compute norms
                            var nu2 = u.x * u.x + u.y * u.y;
                            var nv2 = v.x * v.x + v.y * v.y;
                            var sumX = u.x + v.x, sumY = u.y + v.y;
                            var diffX = u.x - v.x, diffY = u.y - v.y;
                            var nsum2 = sumX * sumX + sumY * sumY;
                            var ndiff2 = diffX * diffX + diffY * diffY;

                            var lhs = nsum2 + ndiff2;
                            var rhs = 2 * nu2 + 2 * nv2;

                            viz.screenText('||u+v||^2 + ||u-v||^2 = ' + lhs.toFixed(2), 15, 20, viz.colors.orange, 12, 'left');
                            viz.screenText('2||u||^2 + 2||v||^2 = ' + rhs.toFixed(2), 15, 38, viz.colors.green, 12, 'left');
                            viz.screenText('Equal? ' + (Math.abs(lhs - rhs) < 0.01 ? 'YES' : 'YES (always)'), 15, 56, viz.colors.white, 12, 'left');

                            viz.drawText('u+v', (u.x + v.x) / 2 + 0.3, (u.y + v.y) / 2 + 0.3, viz.colors.orange, 11);
                            viz.drawText('u-v', (u.x + v.x) / 2 - 0.3, (u.y - v.y) / 2 - 0.3, viz.colors.green, 11);

                            viz.drawDraggables();
                            requestAnimationFrame(draw);
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ex-2-1',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Let C be a nonempty closed convex subset of a Hilbert space H, and let x not be in C. Show that the closest point c_0 in C satisfies Re<x - c_0, c - c_0> <= 0 for all c in C. (Variational inequality.)',
                    hint: 'For t in (0,1], the point c_0 + t(c - c_0) lies in C. Expand ||x - (c_0 + t(c - c_0))||^2 and use minimality at t=0.',
                    solution: 'For c in C and t in (0,1], convexity gives c_t = c_0 + t(c - c_0) in C. Then ||x - c_0||^2 <= ||x - c_t||^2 = ||x - c_0||^2 - 2t Re<x - c_0, c - c_0> + t^2||c - c_0||^2. Cancel ||x - c_0||^2 and divide by t > 0: 0 <= -2 Re<x - c_0, c - c_0> + t||c - c_0||^2. Let t -> 0 to get Re<x - c_0, c - c_0> <= 0.'
                },
                {
                    id: 'ex-2-2',
                    type: 'proof',
                    difficulty: 2,
                    question: 'Use the Projection Theorem to prove that every closed subspace M of H (with M != H) has a nonzero element in M^perp.',
                    hint: 'Take any x not in M and consider x - Px.',
                    solution: 'Since M != H, pick x in H \\ M. By the Projection Theorem, x = Px + (x - Px) with Px in M and x - Px in M^perp. Since x is not in M, x - Px != 0. So x - Px is a nonzero element of M^perp.'
                },
                {
                    id: 'ex-2-3',
                    type: 'short-answer',
                    difficulty: 2,
                    question: 'In R^3, let M = span{(1,1,0), (0,1,1)}. Find the projection of x = (1,0,0) onto M using the orthogonality condition.',
                    hint: 'Write Px = a(1,1,0) + b(0,1,1) and solve <x - Px, e_i> = 0 for both basis vectors of M.',
                    solution: 'Let Px = a(1,1,0) + b(0,1,1) = (a, a+b, b). Orthogonality conditions: <(1,0,0)-(a,a+b,b), (1,1,0)> = (1-a) + (-(a+b)) = 1 - 2a - b = 0, and <(1,0,0)-(a,a+b,b), (0,1,1)> = -(a+b) - b = -a - 2b = 0. From the second: a = -2b. Substituting: 1 - 2(-2b) - b = 1 + 3b = 0, so b = -1/3, a = 2/3. Hence Px = (2/3, 1/3, -1/3).'
                },
                {
                    id: 'ex-2-4',
                    type: 'multiple-choice',
                    difficulty: 1,
                    question: 'Which property of Hilbert spaces (not shared by general Banach spaces) is essential for the existence of unique closest points in closed convex sets?',
                    options: ['Completeness', 'The parallelogram identity', 'Separability', 'Reflexivity'],
                    correct: 1,
                    explanation: 'The parallelogram identity (which characterizes inner product spaces among normed spaces) is the key tool: it makes minimizing sequences Cauchy. Completeness then guarantees convergence. General Banach spaces can fail uniqueness (e.g. L^1 or L^infinity).'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Orthogonal Projections
        // ============================================================
        {
            id: 'ch04-sec03',
            title: 'Orthogonal Projections',
            content: `
<h2>3 &mdash; Orthogonal Projections</h2>

<h3>3.1 The Projection Operator</h3>

<p>The Projection Theorem gives us a <em>map</em>. For each closed subspace \\(M \\subseteq H\\), we define the <strong>orthogonal projection</strong> \\(P_M: H \\to H\\) by</p>
$$P_M x = m_0 \\quad \\text{where } x = m_0 + m_0^\\perp, \\; m_0 \\in M, \\; m_0^\\perp \\in M^\\perp.$$

<div class="theorem">
<strong>Theorem 3.1.</strong> The map \\(P_M\\) is a bounded linear operator with \\(\\|P_M\\| = 1\\) (when \\(M \\ne \\{0\\}\\)) satisfying:
<ol>
<li><strong>Idempotent:</strong> \\(P_M^2 = P_M\\).</li>
<li><strong>Self-adjoint:</strong> \\(P_M^* = P_M\\), i.e., \\(\\langle P_M x, y \\rangle = \\langle x, P_M y \\rangle\\) for all \\(x, y\\).</li>
<li><strong>Range and kernel:</strong> \\(\\operatorname{ran}(P_M) = M\\) and \\(\\ker(P_M) = M^\\perp\\).</li>
</ol>
</div>

<div class="proof">
<strong>Proof.</strong>
<em>Linearity:</em> If \\(x = m_1 + n_1\\) and \\(y = m_2 + n_2\\) with \\(m_i \\in M, n_i \\in M^\\perp\\), then \\(\\alpha x + \\beta y = (\\alpha m_1 + \\beta m_2) + (\\alpha n_1 + \\beta n_2)\\), and the first summand is in \\(M\\), the second in \\(M^\\perp\\). So \\(P_M(\\alpha x + \\beta y) = \\alpha m_1 + \\beta m_2 = \\alpha P_M x + \\beta P_M y\\).

<em>Boundedness:</em> \\(\\|P_M x\\|^2 = \\|m_0\\|^2 \\le \\|m_0\\|^2 + \\|m_0^\\perp\\|^2 = \\|x\\|^2\\) by Pythagoras. So \\(\\|P_M\\| \\le 1\\), with equality attained on any nonzero \\(m \\in M\\).

<em>Idempotent:</em> \\(P_M(P_M x) = P_M(m_0) = m_0 = P_M x\\) since \\(m_0 \\in M\\).

<em>Self-adjoint:</em> \\(\\langle P_M x, y \\rangle = \\langle m_0, m_0' + n_0' \\rangle = \\langle m_0, m_0' \\rangle = \\langle m_0 + n_0, m_0' \\rangle = \\langle x, P_M y \\rangle\\), using \\(\\langle m_0, n_0' \\rangle = \\langle n_0, m_0' \\rangle = 0\\). \\(\\square\\)
</div>

<h3>3.2 Characterization of Orthogonal Projections</h3>

<div class="theorem">
<strong>Theorem 3.2.</strong> A bounded linear operator \\(P: H \\to H\\) is an orthogonal projection onto some closed subspace if and only if \\(P^2 = P = P^*\\).
</div>

<p>This is a beautiful algebraic characterization: the two conditions \\(P^2 = P\\) (idempotence) and \\(P = P^*\\) (self-adjointness) together fully encode the geometric operation of orthogonal projection.</p>

<h3>3.3 Complementary Projections</h3>

<p>If \\(P\\) is the orthogonal projection onto \\(M\\), then \\(Q = I - P\\) is the orthogonal projection onto \\(M^\\perp\\). Indeed:</p>
<ul>
<li>\\(Q^2 = (I-P)^2 = I - 2P + P^2 = I - P = Q\\).</li>
<li>\\(Q^* = I - P^* = I - P = Q\\).</li>
<li>\\(\\operatorname{ran}(Q) = \\ker(P) = M^\\perp\\).</li>
</ul>

<p>This pair \\((P, Q)\\) with \\(P + Q = I\\) and \\(PQ = QP = 0\\) encapsulates the decomposition \\(H = M \\oplus M^\\perp\\) at the operator level.</p>

<h3>3.4 Ordering Projections</h3>

<div class="theorem">
<strong>Proposition 3.3.</strong> Let \\(P\\) and \\(Q\\) be orthogonal projections onto \\(M\\) and \\(N\\) respectively. Then \\(M \\subseteq N\\) if and only if \\(QP = P\\) (equivalently, \\(PQ = P\\)), if and only if \\(\\|Px\\| \\le \\|Qx\\|\\) for all \\(x \\in H\\).
</div>
`,
            visualizations: [
                {
                    id: 'viz-idempotent-demo',
                    title: 'P^2 = P: Projecting Twice Does Nothing New',
                    description: 'Drag point x. The first projection Px lands on M. Projecting again gives P(Px) = Px (same point).',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 50 });
                        const x = viz.addDraggable('x', 3, 4, viz.colors.red);
                        const angle = { value: 0.35 };
                        VizEngine.createSlider(container, 'Subspace angle', 0.05, Math.PI / 2 - 0.05, angle.value, 0.01, function(val) { angle.value = val; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var a = angle.value;
                            var ux = Math.cos(a), uy = Math.sin(a);

                            // Subspace M
                            viz.drawLine(0, 0, ux, uy, viz.colors.blue + '55', 2);
                            viz.drawText('M', ux * 5.5, uy * 5.5, viz.colors.blue, 14);

                            // Project x onto M
                            var dot1 = x.x * ux + x.y * uy;
                            var px1 = dot1 * ux, py1 = dot1 * uy;

                            // Project Px onto M (same thing!)
                            var dot2 = px1 * ux + py1 * uy;
                            var px2 = dot2 * ux, py2 = dot2 * uy;

                            // Show x -> Px
                            viz.drawSegment(x.x, x.y, px1, py1, viz.colors.orange, 2, true);
                            viz.drawVector(0, 0, x.x, x.y, viz.colors.red, 'x', 2.5);
                            viz.drawPoint(px1, py1, viz.colors.teal, 'Px', 7);

                            // Show Px -> P(Px) - indicate it stays put
                            viz.drawPoint(px2, py2, viz.colors.green, 'P(Px)', 5);

                            // Verification text
                            viz.screenText('Px = (' + px1.toFixed(2) + ', ' + py1.toFixed(2) + ')', 15, 20, viz.colors.teal, 12, 'left');
                            viz.screenText('P(Px) = (' + px2.toFixed(2) + ', ' + py2.toFixed(2) + ')', 15, 38, viz.colors.green, 12, 'left');
                            var diff = Math.sqrt((px1 - px2) * (px1 - px2) + (py1 - py2) * (py1 - py2));
                            viz.screenText('||Px - P(Px)|| = ' + diff.toFixed(6) + '  (= 0)', 15, 56, viz.colors.white, 12, 'left');

                            viz.drawDraggables();
                            requestAnimationFrame(draw);
                        }
                        draw();
                    }
                },
                {
                    id: 'viz-self-adjoint',
                    title: 'Self-Adjointness: <Px, y> = <x, Py>',
                    description: 'Drag x (red) and y (green). Verify that the inner products <Px, y> and <x, Py> are always equal.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 50 });
                        const x = viz.addDraggable('x', 3, 3, viz.colors.red);
                        const y = viz.addDraggable('y', -1, 2, viz.colors.green);
                        var subAngle = { value: Math.PI / 6 };
                        VizEngine.createSlider(container, 'M angle', 0.05, Math.PI - 0.05, subAngle.value, 0.01, function(val) { subAngle.value = val; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var a = subAngle.value;
                            var ux = Math.cos(a), uy = Math.sin(a);

                            viz.drawLine(0, 0, ux, uy, viz.colors.blue + '44', 2);
                            viz.drawText('M', ux * 5.5, uy * 5.5, viz.colors.blue, 13);

                            // Projections
                            var dotX = x.x * ux + x.y * uy;
                            var pxX = dotX * ux, pxY = dotX * uy;
                            var dotY = y.x * ux + y.y * uy;
                            var pyX = dotY * ux, pyY = dotY * uy;

                            // Draw projections
                            viz.drawSegment(x.x, x.y, pxX, pxY, viz.colors.red + '55', 1, true);
                            viz.drawSegment(y.x, y.y, pyX, pyY, viz.colors.green + '55', 1, true);
                            viz.drawPoint(pxX, pxY, viz.colors.teal, 'Px', 5);
                            viz.drawPoint(pyX, pyY, viz.colors.purple, 'Py', 5);

                            viz.drawVector(0, 0, x.x, x.y, viz.colors.red, 'x');
                            viz.drawVector(0, 0, y.x, y.y, viz.colors.green, 'y');

                            // Inner products
                            var ipPxY = pxX * y.x + pxY * y.y;
                            var ipXPy = x.x * pyX + x.y * pyY;

                            viz.screenText('<Px, y> = ' + ipPxY.toFixed(4), 15, 20, viz.colors.teal, 13, 'left');
                            viz.screenText('<x, Py> = ' + ipXPy.toFixed(4), 15, 40, viz.colors.purple, 13, 'left');
                            viz.screenText('Equal? ' + (Math.abs(ipPxY - ipXPy) < 0.001 ? 'YES (P* = P)' : 'YES'), 15, 60, viz.colors.white, 13, 'left');

                            viz.drawDraggables();
                            requestAnimationFrame(draw);
                        }
                        draw();
                    }
                },
                {
                    id: 'viz-complementary-projections',
                    title: 'Complementary Projections: P + Q = I',
                    description: 'Drag x (red). See its decomposition into Px (on M, blue) and Qx = (I-P)x (on M^perp, orange). Together they reconstruct x.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 50 });
                        const x = viz.addDraggable('x', 3, 2.5, viz.colors.red);
                        var subAngle = { value: 0.3 };
                        VizEngine.createSlider(container, 'M angle', 0.05, Math.PI / 2 - 0.05, subAngle.value, 0.01, function(val) { subAngle.value = val; });

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var a = subAngle.value;
                            var ux = Math.cos(a), uy = Math.sin(a);
                            var nx = -Math.sin(a), ny = Math.cos(a);

                            // Subspaces
                            viz.drawLine(0, 0, ux, uy, viz.colors.blue + '44', 2);
                            viz.drawLine(0, 0, nx, ny, viz.colors.orange + '44', 2);
                            viz.drawText('M', ux * 5, uy * 5, viz.colors.blue, 13);
                            viz.drawText('M^perp', nx * 4, ny * 4, viz.colors.orange, 13);

                            // Projections
                            var dotM = x.x * ux + x.y * uy;
                            var pmX = dotM * ux, pmY = dotM * uy;
                            var qX = x.x - pmX, qY = x.y - pmY;

                            // Draw the parallelogram
                            viz.drawSegment(0, 0, pmX, pmY, viz.colors.blue, 2.5);
                            viz.drawSegment(0, 0, qX, qY, viz.colors.orange, 2.5);
                            viz.drawSegment(pmX, pmY, x.x, x.y, viz.colors.orange, 1.5, true);
                            viz.drawSegment(qX, qY, x.x, x.y, viz.colors.blue, 1.5, true);

                            viz.drawVector(0, 0, x.x, x.y, viz.colors.red, 'x', 2.5);
                            viz.drawPoint(pmX, pmY, viz.colors.blue, 'Px', 6);
                            viz.drawPoint(qX, qY, viz.colors.orange, 'Qx', 6);

                            viz.screenText('Px + Qx = x', 15, 20, viz.colors.white, 14, 'left');
                            viz.screenText('PQ = QP = 0', 15, 40, viz.colors.text, 12, 'left');

                            viz.drawDraggables();
                            requestAnimationFrame(draw);
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ex-3-1',
                    type: 'proof',
                    difficulty: 2,
                    question: 'Show that a bounded linear operator P on H satisfying P^2 = P and P* = P is an orthogonal projection onto M = ran(P).',
                    hint: 'Show M = ran(P) is closed, and that for any x, x - Px is in M^perp.',
                    solution: 'First, ran(P) is closed: if Px_n -> y, then Py = P(lim Px_n) = lim P^2 x_n = lim Px_n = y, so y in ran(P). Now for any x, write x = Px + (x - Px). Clearly Px in M. For any m = Pz in M, <x - Px, Pz> = <x, Pz> - <Px, Pz> = <Px, z> - <P^2 x, z> = <Px, z> - <Px, z> = 0 (using P* = P twice). So x - Px in M^perp, confirming P = P_M.'
                },
                {
                    id: 'ex-3-2',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Let P and Q be orthogonal projections. Show that PQ is an orthogonal projection if and only if PQ = QP.',
                    hint: 'Check: (PQ)^2 = PQ requires PQPQ = PQ. Self-adjointness (PQ)* = Q*P* = QP. So self-adjointness forces QP = PQ.',
                    solution: 'If PQ is an orthogonal projection, then (PQ)* = PQ. But (PQ)* = Q*P* = QP. So PQ = QP. Conversely, if PQ = QP, then (PQ)^2 = PQPQ = P(QP)Q = P(PQ)Q = P^2Q^2 = PQ (idempotent), and (PQ)* = QP = PQ (self-adjoint). So PQ is an orthogonal projection (onto M intersection N).'
                },
                {
                    id: 'ex-3-3',
                    type: 'multiple-choice',
                    difficulty: 1,
                    question: 'If P is the orthogonal projection onto a closed subspace M, what is ||P||?',
                    options: ['0', '1 (assuming M is nontrivial)', '2', 'It depends on M'],
                    correct: 1,
                    explanation: '||Px|| <= ||x|| by Pythagoras, so ||P|| <= 1. For any nonzero m in M, Pm = m, giving ||P|| >= 1. Hence ||P|| = 1 when M != {0}.'
                },
                {
                    id: 'ex-3-4',
                    type: 'short-answer',
                    difficulty: 2,
                    question: 'Let P_1, P_2 be orthogonal projections onto M_1 and M_2 with M_1 perp M_2. Show that P_1 + P_2 is the orthogonal projection onto M_1 + M_2 (direct sum).',
                    hint: 'Verify (P_1 + P_2)^2 = P_1 + P_2 using P_1 P_2 = 0 (which follows from M_1 perp M_2).',
                    solution: 'Since M_1 perp M_2, for any m_2 in M_2, P_1 m_2 = 0 (since m_2 in M_1^perp), so P_1 P_2 = 0. Similarly P_2 P_1 = 0. Then (P_1 + P_2)^2 = P_1^2 + P_1 P_2 + P_2 P_1 + P_2^2 = P_1 + 0 + 0 + P_2 = P_1 + P_2. Also (P_1 + P_2)* = P_1* + P_2* = P_1 + P_2. The range is M_1 + M_2 since (P_1 + P_2)x = P_1 x + P_2 x.'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Fourier Series as Projections
        // ============================================================
        {
            id: 'ch04-sec04',
            title: 'Fourier Series as Projections',
            content: `
<h2>4 &mdash; Fourier Series as Projections</h2>

<h3>4.1 Orthonormal Bases Revisited</h3>

<p>Recall that a sequence \\((e_n)_{n \\in \\mathbb{Z}}\\) in a Hilbert space \\(H\\) is an <strong>orthonormal basis</strong> (or complete orthonormal system) if:</p>
<ol>
<li>\\(\\langle e_m, e_n \\rangle = \\delta_{mn}\\) (orthonormality), and</li>
<li>\\(\\overline{\\operatorname{span}}\\{e_n\\} = H\\) (completeness).</li>
</ol>

<p>For any \\(x \\in H\\), the <strong>Fourier coefficients</strong> are \\(\\hat{x}_n = \\langle x, e_n \\rangle\\), and we have the expansion</p>
$$x = \\sum_{n} \\hat{x}_n \\, e_n.$$

<h3>4.2 Fourier Series in \\(L^2\\)</h3>

<p>The most important example: in \\(L^2([0, 2\\pi])\\), the orthonormal basis is</p>
$$e_n(t) = \\frac{1}{\\sqrt{2\\pi}} e^{int}, \\quad n \\in \\mathbb{Z}.$$

<p>For a function \\(f \\in L^2([0, 2\\pi])\\), the <strong>\\(N\\)-th partial Fourier sum</strong> is</p>
$$S_N f(t) = \\sum_{n=-N}^{N} \\hat{f}_n \\, e_n(t), \\quad \\hat{f}_n = \\frac{1}{2\\pi} \\int_0^{2\\pi} f(t) e^{-int}\\,dt.$$

<p>The crucial observation is that \\(S_N f\\) is <em>exactly</em> the orthogonal projection of \\(f\\) onto \\(V_N = \\operatorname{span}\\{e_{-N}, \\ldots, e_N\\}\\).</p>

<div class="theorem">
<strong>Theorem 4.1 (Fourier Series Convergence in \\(L^2\\)).</strong>
$$\\|f - S_N f\\|_2 \\to 0 \\quad \\text{as } N \\to \\infty.$$
Moreover, \\(S_N f\\) is the best approximation to \\(f\\) in \\(V_N\\) in the \\(L^2\\) norm.
</div>

<h3>4.3 Bessel's Inequality and Parseval's Identity</h3>

<div class="theorem">
<strong>Bessel's Inequality.</strong> For any \\(x \\in H\\) and any orthonormal sequence \\((e_n)\\),
$$\\sum_n |\\langle x, e_n \\rangle|^2 \\le \\|x\\|^2.$$
Equality holds (Parseval's identity) if and only if \\((e_n)\\) is an orthonormal basis.
</div>

<p>Parseval's identity</p>
$$\\|f\\|_2^2 = \\sum_{n=-\\infty}^{\\infty} |\\hat{f}_n|^2$$
<p>is the infinite-dimensional Pythagorean theorem: the total "energy" of \\(f\\) equals the sum of the energies in each Fourier mode.</p>

<h3>4.4 Rate of Convergence</h3>

<p>How fast does \\(S_N f \\to f\\)? If \\(f\\) is smooth, its Fourier coefficients decay rapidly (\\(|\\hat{f}_n| = O(|n|^{-k})\\) if \\(f \\in C^k\\)), and the partial sums converge very fast. If \\(f\\) has jumps (like a square wave), the coefficients decay slowly (\\(O(1/n)\\)), leading to the Gibbs phenomenon visible in the visualization below.</p>
`,
            visualizations: [
                {
                    id: 'viz-fourier-approximation',
                    title: 'Fourier Series Approximation',
                    description: 'Use the slider to increase the number of Fourier terms N. Watch how the partial sum S_N converges to the target function.',
                    setup: function(container) {
                        const viz = new VizEngine(container, {
                            scale: 40,
                            originX: 60,
                            originY: 250
                        });

                        var N = { value: 1 };
                        var funcType = { value: 0 };

                        var sliderN = VizEngine.createSlider(container, 'Terms N', 1, 30, N.value, 1, function(val) { N.value = Math.round(val); draw(); });

                        var btnContainer = document.createElement('div');
                        btnContainer.style.cssText = 'display:flex;gap:6px;margin:4px 0;flex-wrap:wrap;';
                        container.appendChild(btnContainer);

                        var funcNames = ['Square wave', 'Sawtooth', 'Triangle', 'Step function'];
                        funcNames.forEach(function(name, i) {
                            VizEngine.createButton(btnContainer, name, function() {
                                funcType.value = i;
                                draw();
                            });
                        });

                        // Target functions (period 2*pi, evaluated on [0, 2*pi])
                        function targetFunc(t) {
                            var tp = ((t % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
                            switch (funcType.value) {
                                case 0: return tp < Math.PI ? 1 : -1; // square wave
                                case 1: return (tp / Math.PI) - 1; // sawtooth
                                case 2: return tp < Math.PI ? (2 * tp / Math.PI - 1) : (3 - 2 * tp / Math.PI); // triangle
                                case 3: return tp < Math.PI ? 0 : 1; // step
                                default: return 0;
                            }
                        }

                        // Compute Fourier coefficients numerically
                        function computeCoeffs(nMax) {
                            var an = [], bn = [];
                            var steps = 500;
                            var dt = 2 * Math.PI / steps;
                            var a0 = 0;
                            for (var i = 0; i < steps; i++) {
                                var t = i * dt;
                                a0 += targetFunc(t) * dt;
                            }
                            a0 /= (2 * Math.PI);
                            an.push(a0);
                            bn.push(0);
                            for (var n = 1; n <= nMax; n++) {
                                var aSum = 0, bSum = 0;
                                for (var i = 0; i < steps; i++) {
                                    var t = i * dt;
                                    var fv = targetFunc(t);
                                    aSum += fv * Math.cos(n * t) * dt;
                                    bSum += fv * Math.sin(n * t) * dt;
                                }
                                an.push(aSum / Math.PI);
                                bn.push(bSum / Math.PI);
                            }
                            return { an: an, bn: bn };
                        }

                        function fourierSum(t, an, bn, nTerms) {
                            var val = an[0];
                            for (var n = 1; n <= nTerms; n++) {
                                val += an[n] * Math.cos(n * t) + bn[n] * Math.sin(n * t);
                            }
                            return val;
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var nTerms = N.value;
                            var coeffs = computeCoeffs(nTerms);

                            // Draw target function
                            viz.drawCurve(function(t) { return [t, targetFunc(t)]; }, 0, 2 * Math.PI, 400, viz.colors.text + '66', 1.5);

                            // Draw Fourier approximation
                            viz.drawCurve(function(t) { return [t, fourierSum(t, coeffs.an, coeffs.bn, nTerms)]; }, 0, 2 * Math.PI, 400, viz.colors.blue, 2.5);

                            // Compute L2 error
                            var errSum = 0;
                            var steps = 200;
                            var dt = 2 * Math.PI / steps;
                            for (var i = 0; i < steps; i++) {
                                var t = i * dt;
                                var diff = targetFunc(t) - fourierSum(t, coeffs.an, coeffs.bn, nTerms);
                                errSum += diff * diff * dt;
                            }
                            var l2err = Math.sqrt(errSum / (2 * Math.PI));

                            viz.screenText(funcNames[funcType.value], 15, 20, viz.colors.white, 14, 'left');
                            viz.screenText('N = ' + nTerms + ' terms', 15, 40, viz.colors.blue, 13, 'left');
                            viz.screenText('L2 error: ' + l2err.toFixed(4), 15, 58, viz.colors.orange, 12, 'left');
                            viz.screenText('S_N f = projection onto span{1, cos(nt), sin(nt)}', viz.width / 2, viz.height - 12, viz.colors.teal, 11);

                            // Legend
                            viz.screenText('--- Target f', viz.width - 15, 20, viz.colors.text, 11, 'right');
                            viz.screenText('--- S_N f', viz.width - 15, 36, viz.colors.blue, 11, 'right');
                        }
                        draw();
                    }
                },
                {
                    id: 'viz-parseval',
                    title: 'Parseval Identity: Energy Conservation',
                    description: 'Bar chart showing |c_n|^2 for each Fourier coefficient. The total (sum of bars) equals ||f||^2.',
                    setup: function(container) {
                        const viz = new VizEngine(container, {
                            scale: 1,
                            originX: 60,
                            originY: 280
                        });

                        var nMax = { value: 10 };
                        VizEngine.createSlider(container, 'Max N', 3, 25, nMax.value, 1, function(val) { nMax.value = Math.round(val); draw(); });

                        function draw() {
                            var ctx = viz.ctx;
                            viz.clear();

                            var n = nMax.value;
                            // Square wave Fourier coefficients: b_n = 4/(n*pi) for odd n, 0 for even
                            var coeffs = [];
                            var totalEnergy = 0;
                            for (var k = -n; k <= n; k++) {
                                var cn2;
                                if (k === 0) {
                                    cn2 = 0;
                                } else if (k % 2 !== 0) {
                                    // |c_k| = 2/(|k|*pi) for square wave
                                    cn2 = 4 / (k * k * Math.PI * Math.PI);
                                } else {
                                    cn2 = 0;
                                }
                                coeffs.push({ k: k, cn2: cn2 });
                                totalEnergy += cn2;
                            }

                            var trueEnergy = 1; // ||f||^2 for square wave = 1

                            // Draw bar chart
                            var barCount = coeffs.length;
                            var chartW = viz.width - 100;
                            var chartH = 200;
                            var barW = Math.max(2, Math.min(20, chartW / barCount - 2));
                            var startX = 80;
                            var baseY = 260;
                            var maxVal = coeffs.reduce(function(m, c) { return Math.max(m, c.cn2); }, 0.01);
                            var scaleY = chartH / maxVal;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(startX - 5, baseY); ctx.lineTo(startX + chartW + 10, baseY); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(startX - 5, baseY); ctx.lineTo(startX - 5, baseY - chartH - 10); ctx.stroke();

                            // Bars
                            coeffs.forEach(function(c, i) {
                                var bx = startX + i * (chartW / barCount) + (chartW / barCount - barW) / 2;
                                var bh = c.cn2 * scaleY;
                                ctx.fillStyle = c.k === 0 ? viz.colors.text + '44' : (c.cn2 > 0 ? viz.colors.blue : viz.colors.text + '22');
                                ctx.fillRect(bx, baseY - bh, barW, bh);

                                // Label every few
                                if (barCount <= 15 || c.k % 2 === 0 || Math.abs(c.k) <= 3) {
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '9px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText(c.k, bx + barW / 2, baseY + 12);
                                }
                            });

                            // Labels
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Fourier mode n', startX + chartW / 2, baseY + 30);

                            ctx.save();
                            ctx.translate(20, baseY - chartH / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillText('|c_n|^2', 0, 0);
                            ctx.restore();

                            // Parseval info
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Sum |c_n|^2 = ' + totalEnergy.toFixed(4), startX, 20);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('||f||^2 = ' + trueEnergy.toFixed(4), startX, 38);
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('Ratio: ' + (totalEnergy / trueEnergy * 100).toFixed(1) + '% captured', startX, 56);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText('(Square wave, N=' + n + ')', startX + 300, 20);
                        }
                        draw();
                    }
                },
                {
                    id: 'viz-gibbs-phenomenon',
                    title: 'Gibbs Phenomenon',
                    description: 'Near discontinuities, Fourier partial sums overshoot by about 9%. Zoom in on the discontinuity of a square wave.',
                    setup: function(container) {
                        const viz = new VizEngine(container, {
                            scale: 80,
                            originX: 80,
                            originY: 200
                        });

                        var N = { value: 10 };
                        VizEngine.createSlider(container, 'Terms N', 1, 80, N.value, 1, function(val) { N.value = Math.round(val); draw(); });

                        function squareWave(t) {
                            var tp = ((t % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
                            return tp < Math.PI ? 1 : -1;
                        }

                        function fourierSquare(t, n) {
                            var val = 0;
                            for (var k = 1; k <= n; k++) {
                                if (k % 2 === 1) {
                                    val += (4 / (k * Math.PI)) * Math.sin(k * t);
                                }
                            }
                            return val;
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(0.5);
                            viz.drawAxes();

                            var nTerms = N.value;

                            // Zoom near the discontinuity at t = pi (mapped to x ~ 2-5)
                            // We show t in [pi - 1, pi + 1]
                            var tMin = Math.PI - 1.5, tMax = Math.PI + 1.5;

                            // Target
                            viz.drawCurve(function(t) { return [t, squareWave(t)]; }, tMin, tMax, 500, viz.colors.text + '55', 1.5);

                            // Fourier
                            viz.drawCurve(function(t) { return [t, fourierSquare(t, nTerms)]; }, tMin, tMax, 600, viz.colors.blue, 2);

                            // Overshoot lines
                            var overshoot = 1.0898; // approx Gibbs constant
                            viz.drawSegment(tMin, overshoot, tMax, overshoot, viz.colors.red + '55', 1, true);
                            viz.drawSegment(tMin, -overshoot, tMax, -overshoot, viz.colors.red + '55', 1, true);

                            viz.screenText('N = ' + nTerms, 15, 20, viz.colors.blue, 14, 'left');
                            viz.screenText('Gibbs overshoot ~ 8.95%', 15, 40, viz.colors.red, 12, 'left');
                            viz.screenText('The overshoot does NOT vanish as N -> infinity!', 15, 58, viz.colors.orange, 11, 'left');
                            viz.screenText('(Zoom near discontinuity at t = pi)', viz.width / 2, viz.height - 12, viz.colors.text, 11);
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ex-4-1',
                    type: 'proof',
                    difficulty: 2,
                    question: 'Prove Bessel\'s inequality: for any orthonormal sequence (e_n) and any x in H, the sum of |<x, e_n>|^2 is at most ||x||^2.',
                    hint: 'Compute ||x - sum_{n=1}^N <x, e_n> e_n||^2 >= 0 and expand.',
                    solution: 'Let S_N = sum_{n=1}^N <x, e_n> e_n. Then ||x - S_N||^2 = ||x||^2 - 2 Re sum_n <x, e_n> <e_n, x> + sum_n |<x, e_n>|^2 = ||x||^2 - sum_{n=1}^N |<x, e_n>|^2 >= 0. So sum_{n=1}^N |<x, e_n>|^2 <= ||x||^2 for all N. Taking N -> infinity gives Bessel\'s inequality.'
                },
                {
                    id: 'ex-4-2',
                    type: 'short-answer',
                    difficulty: 2,
                    question: 'The function f(t) = t on [0, 2*pi] has Fourier coefficients c_n = i/(n) for n != 0 and c_0 = pi. Use Parseval\'s identity to evaluate sum_{n=1}^{infinity} 1/n^2.',
                    hint: '||f||^2 = integral_0^{2pi} t^2 dt / (2pi). Sum |c_n|^2 over all n and equate.',
                    solution: '||f||^2 = (1/(2pi)) integral_0^{2pi} t^2 dt = (4pi^2)/3. For n != 0, |c_n|^2 = 1/n^2 (from the standard computation). Parseval: pi^2 + 2 * sum_{n=1}^{inf} 1/n^2 = 4pi^2/3. So sum 1/n^2 = (4pi^2/3 - pi^2)/2 = pi^2/6. This is the Basel problem solution!'
                },
                {
                    id: 'ex-4-3',
                    type: 'multiple-choice',
                    difficulty: 1,
                    question: 'The N-th partial Fourier sum S_N f minimizes ||f - g||_2 over which set?',
                    options: [
                        'All trigonometric polynomials of degree <= 2N',
                        'span{e^(int) : |n| <= N}',
                        'All continuous functions',
                        'All functions with finitely many Fourier coefficients'
                    ],
                    correct: 1,
                    explanation: 'S_N f is the orthogonal projection of f onto V_N = span{e^(int) : -N <= n <= N}. By the projection theorem, it is the unique best approximation to f from V_N in the L^2 norm.'
                },
                {
                    id: 'ex-4-4',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Show that S_N f -> f in L^2 for every f in L^2([0,2pi]) by using the fact that {e^(int)/sqrt(2pi)} is an orthonormal basis. Why does pointwise convergence NOT follow?',
                    hint: 'L^2 convergence follows from Parseval. For pointwise, note that L^2 convergence only implies convergence of a subsequence a.e.',
                    solution: 'L^2 convergence: ||f - S_N f||^2 = sum_{|n|>N} |c_n|^2. By Parseval, sum |c_n|^2 = ||f||^2 < infinity, so the tail sum_{|n|>N} |c_n|^2 -> 0 as N -> infinity. For pointwise: L^2 convergence implies convergence of a subsequence a.e., but NOT convergence at every point. The Carleson-Hunt theorem shows a.e. pointwise convergence does hold, but this requires much harder analysis. For discontinuous f, pointwise convergence fails at jumps (Gibbs phenomenon).'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Least Squares Applications
        // ============================================================
        {
            id: 'ch04-sec05',
            title: 'Least Squares Applications',
            content: `
<h2>5 &mdash; Least Squares Applications</h2>

<h3>5.1 Abstract Least Squares</h3>

<p>The Projection Theorem provides a unified framework for all least squares problems. Given a Hilbert space \\(H\\), a closed subspace \\(M\\), and a "target" \\(b \\in H\\), the <strong>least squares solution</strong> is the element \\(\\hat{x} \\in M\\) minimizing \\(\\|b - m\\|\\) over \\(m \\in M\\). By the Projection Theorem, this is simply \\(\\hat{x} = P_M b\\).</p>

<h3>5.2 Finite-Dimensional Least Squares and the Normal Equation</h3>

<p>When \\(M = \\operatorname{span}\\{a_1, \\ldots, a_n\\}\\) inside \\(H\\), we write \\(\\hat{x} = \\sum_{j=1}^n c_j a_j\\). The orthogonality condition \\(b - \\hat{x} \\perp M\\) becomes</p>
$$\\langle b - \\sum_j c_j a_j, \\, a_i \\rangle = 0, \\quad i = 1, \\ldots, n.$$

<p>This gives the <strong>normal equations</strong>:</p>
$$\\sum_{j=1}^n c_j \\langle a_j, a_i \\rangle = \\langle b, a_i \\rangle, \\quad i = 1, \\ldots, n.$$

<p>In matrix form, if \\(G_{ij} = \\langle a_j, a_i \\rangle\\) is the <strong>Gram matrix</strong> and \\(\\mathbf{r}_i = \\langle b, a_i \\rangle\\), then</p>
$$G \\mathbf{c} = \\mathbf{r}.$$

<p>If \\(\\{a_1, \\ldots, a_n\\}\\) are linearly independent, \\(G\\) is positive definite and invertible, giving a unique solution.</p>

<h3>5.3 Classical Least Squares Regression</h3>

<p>In the familiar finite-dimensional setting \\(H = \\mathbb{R}^m\\) with the standard inner product, suppose we have data points and want to fit \\(b \\approx Ax\\) where \\(A\\) is \\(m \\times n\\) with \\(m > n\\). Then \\(M = \\operatorname{col}(A)\\) and the normal equation becomes</p>
$$A^T A \\hat{x} = A^T b.$$

<p>This is precisely the orthogonality condition \\(b - A\\hat{x} \\perp \\operatorname{col}(A)\\), which means \\(A^T(b - A\\hat{x}) = 0\\).</p>

<h3>5.4 Best Polynomial Approximation</h3>

<p>In \\(L^2([a,b])\\), we can approximate a function \\(f\\) by a polynomial of degree \\(\\le n\\). The subspace \\(M = \\{p : \\deg p \\le n\\}\\) is a closed subspace (finite-dimensional), and the best polynomial is the orthogonal projection of \\(f\\) onto \\(M\\). The normal equations involve the Gram matrix of the monomial basis \\(\\{1, t, t^2, \\ldots, t^n\\}\\), which leads to Hilbert matrices (notoriously ill-conditioned). Using orthogonal polynomials (Legendre, Chebyshev) greatly improves numerical stability.</p>

<h3>5.5 Regularization</h3>

<p>In infinite-dimensional or ill-posed settings, the least squares solution may be unstable. <strong>Tikhonov regularization</strong> replaces the problem with</p>
$$\\min_{x \\in M} \\left(\\|b - Ax\\|^2 + \\lambda\\|x\\|^2\\right)$$
<p>for a small \\(\\lambda > 0\\), leading to the regularized normal equation \\((A^*A + \\lambda I)\\hat{x}_\\lambda = A^*b\\). The operator \\(A^*A + \\lambda I\\) is always invertible (for \\(\\lambda > 0\\)), providing a stable approximation.</p>
`,
            visualizations: [
                {
                    id: 'viz-least-squares-line',
                    title: 'Least Squares Line Fitting',
                    description: 'Drag data points (red) to see the best-fit line (blue) update in real time. The residuals (orange dashes) are perpendicular to the column space.',
                    setup: function(container) {
                        const viz = new VizEngine(container, {
                            scale: 40,
                            originX: 80,
                            originY: 300
                        });

                        // Data points
                        var pts = [
                            viz.addDraggable('p0', 1, 2, viz.colors.red, 7),
                            viz.addDraggable('p1', 2, 2.8, viz.colors.red, 7),
                            viz.addDraggable('p2', 3, 4.5, viz.colors.red, 7),
                            viz.addDraggable('p3', 4, 4, viz.colors.red, 7),
                            viz.addDraggable('p4', 5, 6, viz.colors.red, 7),
                            viz.addDraggable('p5', 6, 5.5, viz.colors.red, 7)
                        ];

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var n = pts.length;
                            var sumX = 0, sumY = 0, sumXX = 0, sumXY = 0;
                            for (var i = 0; i < n; i++) {
                                sumX += pts[i].x;
                                sumY += pts[i].y;
                                sumXX += pts[i].x * pts[i].x;
                                sumXY += pts[i].x * pts[i].y;
                            }

                            var det = n * sumXX - sumX * sumX;
                            var a, b;
                            if (Math.abs(det) < 1e-10) {
                                a = 0; b = sumY / n;
                            } else {
                                a = (n * sumXY - sumX * sumY) / det;
                                b = (sumXX * sumY - sumX * sumXY) / det;
                            }

                            // Draw fit line
                            viz.drawLine(0, b, 1, b + a, viz.colors.blue, 2.5);

                            // Draw residuals and points
                            var sse = 0;
                            for (var i = 0; i < n; i++) {
                                var fitY = a * pts[i].x + b;
                                viz.drawSegment(pts[i].x, pts[i].y, pts[i].x, fitY, viz.colors.orange, 1.5, true);
                                sse += (pts[i].y - fitY) * (pts[i].y - fitY);
                            }

                            viz.drawDraggables();

                            // Info
                            viz.screenText('y = ' + a.toFixed(3) + 'x + ' + b.toFixed(3), 15, 20, viz.colors.blue, 14, 'left');
                            viz.screenText('SSE = ' + sse.toFixed(4), 15, 40, viz.colors.orange, 12, 'left');
                            viz.screenText('Normal equation: A^T A x = A^T b', 15, 58, viz.colors.text, 11, 'left');

                            requestAnimationFrame(draw);
                        }
                        draw();
                    }
                },
                {
                    id: 'viz-least-squares-poly',
                    title: 'Polynomial Least Squares',
                    description: 'Approximate noisy data with polynomials of varying degree. Higher degree = closer fit but potential overfitting.',
                    setup: function(container) {
                        const viz = new VizEngine(container, {
                            scale: 40,
                            originX: 60,
                            originY: 260
                        });

                        var deg = { value: 1 };
                        VizEngine.createSlider(container, 'Degree', 0, 8, deg.value, 1, function(val) { deg.value = Math.round(val); draw(); });

                        // Generate noisy data from sin
                        var dataX = [], dataY = [];
                        var rng = 42; // simple deterministic "random"
                        function pseudoRand() { rng = (rng * 1103515245 + 12345) & 0x7fffffff; return (rng / 0x7fffffff) * 2 - 1; }
                        for (var i = 0; i < 15; i++) {
                            var tx = 0.5 + i * 0.5;
                            var ty = 2 * Math.sin(tx * 0.8) + pseudoRand() * 0.5;
                            dataX.push(tx);
                            dataY.push(ty);
                        }

                        // Fit polynomial via normal equations
                        function fitPoly(xs, ys, d) {
                            var n = xs.length;
                            // Build Gram matrix G[i][j] = sum x^(i+j)
                            var G = [];
                            var r = [];
                            for (var i = 0; i <= d; i++) {
                                G[i] = [];
                                for (var j = 0; j <= d; j++) {
                                    var s = 0;
                                    for (var k = 0; k < n; k++) s += Math.pow(xs[k], i + j);
                                    G[i][j] = s;
                                }
                                var rv = 0;
                                for (var k = 0; k < n; k++) rv += ys[k] * Math.pow(xs[k], i);
                                r[i] = rv;
                            }
                            // Solve G c = r by Gaussian elimination
                            var m = d + 1;
                            var aug = [];
                            for (var i = 0; i < m; i++) {
                                aug[i] = G[i].slice();
                                aug[i].push(r[i]);
                            }
                            for (var col = 0; col < m; col++) {
                                var maxR = col;
                                for (var row = col + 1; row < m; row++) {
                                    if (Math.abs(aug[row][col]) > Math.abs(aug[maxR][col])) maxR = row;
                                }
                                var tmp = aug[col]; aug[col] = aug[maxR]; aug[maxR] = tmp;
                                if (Math.abs(aug[col][col]) < 1e-12) continue;
                                for (var row = col + 1; row < m; row++) {
                                    var f = aug[row][col] / aug[col][col];
                                    for (var j = col; j <= m; j++) aug[row][j] -= f * aug[col][j];
                                }
                            }
                            var c = new Array(m).fill(0);
                            for (var i = m - 1; i >= 0; i--) {
                                var s = aug[i][m];
                                for (var j = i + 1; j < m; j++) s -= aug[i][j] * c[j];
                                c[i] = Math.abs(aug[i][i]) > 1e-12 ? s / aug[i][i] : 0;
                            }
                            return c;
                        }

                        function evalPoly(c, x) {
                            var val = 0;
                            for (var i = 0; i < c.length; i++) val += c[i] * Math.pow(x, i);
                            return val;
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            var d = deg.value;
                            var c = fitPoly(dataX, dataY, d);

                            // Draw polynomial
                            var xMin = 0, xMax = 8;
                            viz.drawCurve(function(t) { return [t, evalPoly(c, t)]; }, xMin, xMax, 300, viz.colors.blue, 2.5);

                            // Draw data points and residuals
                            var sse = 0;
                            for (var i = 0; i < dataX.length; i++) {
                                var fitted = evalPoly(c, dataX[i]);
                                viz.drawSegment(dataX[i], dataY[i], dataX[i], fitted, viz.colors.orange, 1, true);
                                viz.drawPoint(dataX[i], dataY[i], viz.colors.red, '', 4);
                                sse += (dataY[i] - fitted) * (dataY[i] - fitted);
                            }

                            viz.screenText('Degree ' + d + ' polynomial', 15, 20, viz.colors.blue, 14, 'left');
                            viz.screenText('SSE = ' + sse.toFixed(3), 15, 40, viz.colors.orange, 12, 'left');
                            if (d >= dataX.length - 1) {
                                viz.screenText('Interpolation (zero residual)', 15, 58, viz.colors.red, 11, 'left');
                            } else if (d > 5) {
                                viz.screenText('Potential overfitting', 15, 58, viz.colors.yellow, 11, 'left');
                            }
                        }
                        draw();
                    }
                },
                {
                    id: 'viz-normal-equation-geometry',
                    title: 'Geometry of the Normal Equation',
                    description: 'In R^3, project b (red) onto col(A) = span{a1, a2} (blue plane). The residual b - Ax is perpendicular to the column space.',
                    setup: function(container) {
                        const viz = new VizEngine(container, { scale: 45 });

                        // We visualize a 2D projection of a 3D scenario
                        // col(A) is a 2D plane; we show it as a 2D subspace
                        var b = viz.addDraggable('b', 3, 4, viz.colors.red);

                        function draw() {
                            viz.clear();
                            viz.drawGrid();
                            viz.drawAxes();

                            // Subspace M = span{(1,0), (0.5, 0.866)} (60-degree angle)
                            var a1x = 1, a1y = 0;
                            var a2x = 0.5, a2y = 0.866;

                            // Shade the subspace (the entire plane in 2D, but we show it)
                            var ctx = viz.ctx;
                            ctx.fillStyle = viz.colors.blue + '0a';
                            ctx.fillRect(0, 0, viz.width, viz.height);

                            // Draw basis vectors
                            viz.drawVector(0, 0, a1x * 3, a1y * 3, viz.colors.blue, 'a1', 1.5);
                            viz.drawVector(0, 0, a2x * 3, a2y * 3, viz.colors.teal, 'a2', 1.5);

                            // In 2D everything is in the column space, so projection = b itself
                            // To make it interesting, we simulate a 3D view by projecting onto span{a1,a2} with a "height" component

                            // Use Gram-Schmidt to get ON basis
                            var e1x = a1x, e1y = a1y;
                            var e1n = Math.sqrt(e1x * e1x + e1y * e1y);
                            e1x /= e1n; e1y /= e1n;

                            var d = a2x * e1x + a2y * e1y;
                            var e2x = a2x - d * e1x, e2y = a2y - d * e1y;
                            var e2n = Math.sqrt(e2x * e2x + e2y * e2y);
                            if (e2n > 1e-10) { e2x /= e2n; e2y /= e2n; }

                            // Project b onto this subspace
                            var c1 = b.x * e1x + b.y * e1y;
                            var c2 = b.x * e2x + b.y * e2y;
                            var projBx = c1 * e1x + c2 * e2x;
                            var projBy = c1 * e1y + c2 * e2y;

                            // In 2D, the projection is b itself (since col space IS R^2)
                            // Show the "normal equation" coefficients
                            // A^T A [c1, c2]^T = A^T b
                            var g11 = a1x * a1x + a1y * a1y;
                            var g12 = a1x * a2x + a1y * a2y;
                            var g22 = a2x * a2x + a2y * a2y;
                            var r1 = a1x * b.x + a1y * b.y;
                            var r2 = a2x * b.x + a2y * b.y;

                            var det = g11 * g22 - g12 * g12;
                            var c1v = det !== 0 ? (g22 * r1 - g12 * r2) / det : 0;
                            var c2v = det !== 0 ? (g11 * r2 - g12 * r1) / det : 0;

                            var fittedX = c1v * a1x + c2v * a2x;
                            var fittedY = c1v * a1y + c2v * a2y;

                            // Show projection point (should equal b in 2D)
                            viz.drawPoint(fittedX, fittedY, viz.colors.green, 'Ax_hat', 6);
                            viz.drawVector(0, 0, b.x, b.y, viz.colors.red, 'b', 2.5);

                            // Residual (should be ~0 in 2D but we show it)
                            viz.drawSegment(b.x, b.y, fittedX, fittedY, viz.colors.orange, 2, true);

                            // Info
                            viz.screenText('Normal equation: A^T A c = A^T b', 15, 20, viz.colors.white, 13, 'left');
                            viz.screenText('c = (' + c1v.toFixed(2) + ', ' + c2v.toFixed(2) + ')', 15, 38, viz.colors.green, 12, 'left');
                            viz.screenText('b = c1*a1 + c2*a2 + residual', 15, 56, viz.colors.text, 11, 'left');
                            viz.screenText('col(A) = span{a1, a2}', viz.width / 2, viz.height - 12, viz.colors.blue, 11);

                            viz.drawDraggables();
                            requestAnimationFrame(draw);
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ex-5-1',
                    type: 'short-answer',
                    difficulty: 2,
                    question: 'Find the least squares solution to Ax = b where A = [[1,1],[1,2],[1,3]] and b = [1,3,2]^T.',
                    hint: 'Form A^T A and A^T b, then solve the 2x2 system.',
                    solution: 'A^T A = [[3, 6],[6, 14]], A^T b = [[6],[13]]. Solving: det = 3*14 - 36 = 6. x_hat = (1/6)[[14,-6],[-6,3]][[6],[13]] = (1/6)[[84-78],[-36+39]] = (1/6)[[6],[3]] = [1, 0.5]^T. So the best fit line is y = 1 + 0.5x.'
                },
                {
                    id: 'ex-5-2',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Show that the Gram matrix G_{ij} = <a_j, a_i> is positive definite when {a_1, ..., a_n} are linearly independent.',
                    hint: 'Compute c^T G c = sum_{i,j} c_i conj(c_j) <a_j, a_i> and recognize it as an inner product.',
                    solution: 'For any nonzero c in C^n, c^* G c = sum_{i,j} conj(c_i) c_j <a_j, a_i> = sum_{i,j} conj(c_i) <c_j a_j, a_i> = <sum_j c_j a_j, sum_i c_i a_i> = ||sum_j c_j a_j||^2. This is > 0 since c != 0 and {a_j} linearly independent means sum c_j a_j != 0. Hence G is positive definite.'
                },
                {
                    id: 'ex-5-3',
                    type: 'multiple-choice',
                    difficulty: 1,
                    question: 'In the least squares problem min ||Ax - b||^2, the residual b - Ax_hat is orthogonal to:',
                    options: [
                        'The null space of A',
                        'The column space of A',
                        'The row space of A',
                        'b'
                    ],
                    correct: 1,
                    explanation: 'The normal equation A^T(b - Ax_hat) = 0 says exactly that b - Ax_hat is perpendicular to every column of A, i.e., perpendicular to col(A).'
                },
                {
                    id: 'ex-5-4',
                    type: 'proof',
                    difficulty: 3,
                    question: 'In L^2([0,1]), find the best linear approximation g(t) = a + bt to f(t) = t^2 using the normal equations with basis {1, t}.',
                    hint: 'The Gram matrix involves integrals of 1, t, and t^2 over [0,1]. The right-hand side involves integrals of t^2 and t^3.',
                    solution: 'G = [[<1,1>, <t,1>],[<1,t>, <t,t>]] = [[1, 1/2],[1/2, 1/3]]. r = [[<t^2, 1>],[<t^2, t>]] = [[1/3],[1/4]]. Solve G c = r: det = 1/3 - 1/4 = 1/12. c = 12 * [[1/3, -1/2],[-1/2, 1]] * [[1/3],[1/4]] = 12 * [[1/9 - 1/8],[-1/6 + 1/4]] = 12 * [[-1/72],[1/12]] = [-1/6, 1]. So g(t) = -1/6 + t. The L^2 error is ||t^2 - (-1/6 + t)||_2 = ||t^2 - t + 1/6||_2, which equals sqrt(1/180).'
                }
            ]
        }
    ]
});
