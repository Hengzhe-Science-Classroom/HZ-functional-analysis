window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch17',
    number: 17,
    title: 'Banach Algebras & Gelfand Theory',
    subtitle: 'Algebraic structure meets topology',
    sections: [
        // ================================================================
        // SECTION 1: Banach Algebras
        // ================================================================
        {
            id: 'ch17-sec01',
            title: 'Banach Algebras',
            content: `<h2>Banach Algebras</h2>
<p>A Banach algebra is a Banach space equipped with a compatible multiplication. This algebraic structure enables a powerful synthesis of algebra and analysis, with far-reaching consequences in operator theory, harmonic analysis, and quantum mechanics.</p>

<div class="env-block definition">
<div class="env-title">Definition 17.1 (Banach Algebra)</div>
<div class="env-body"><p>A <strong>Banach algebra</strong> is a Banach space \\((A, \\|\\cdot\\|)\\) over \\(\\mathbb{C}\\) equipped with an associative multiplication \\(A \\times A \\to A\\) satisfying:</p>
<ol>
<li><strong>Bilinearity:</strong> \\(a(\\alpha b + \\beta c) = \\alpha(ab) + \\beta(ac)\\) and \\((\\alpha a + \\beta b)c = \\alpha(ac) + \\beta(bc)\\) for all \\(a,b,c \\in A\\), \\(\\alpha,\\beta \\in \\mathbb{C}\\).</li>
<li><strong>Submultiplicativity:</strong> \\(\\|ab\\| \\le \\|a\\|\\,\\|b\\|\\) for all \\(a,b \\in A\\).</li>
</ol>
<p>If there exists an element \\(e \\in A\\) with \\(ea = ae = a\\) for all \\(a\\) and \\(\\|e\\| = 1\\), we say \\(A\\) is <strong>unital</strong>.</p></div>
</div>

<p>The submultiplicativity condition ensures that multiplication is jointly continuous: if \\(a_n \\to a\\) and \\(b_n \\to b\\), then \\(a_n b_n \\to ab\\).</p>

<div class="env-block example">
<div class="env-title">Example 17.2 (Key Examples)</div>
<div class="env-body">
<p><strong>(a) \\(B(X)\\) &mdash; Bounded operators.</strong> For a Banach space \\(X\\), the space \\(B(X)\\) of bounded linear operators with operator norm and composition is a unital Banach algebra. The identity operator \\(I\\) is the unit.</p>
<p><strong>(b) \\(C(K)\\) &mdash; Continuous functions.</strong> For a compact Hausdorff space \\(K\\), the space \\(C(K)\\) with the supremum norm and pointwise multiplication is a commutative unital Banach algebra.</p>
<p><strong>(c) \\(\\ell^1(\\mathbb{Z})\\) &mdash; Convolution algebra.</strong> The space \\(\\ell^1(\\mathbb{Z})\\) with convolution product \\((a * b)_n = \\sum_{k \\in \\mathbb{Z}} a_k b_{n-k}\\) is a commutative unital Banach algebra (the unit is \\(\\delta_0\\)).</p>
<p><strong>(d) Disk algebra \\(A(\\mathbb{D})\\).</strong> The space of functions continuous on \\(\\overline{\\mathbb{D}}\\) and analytic on \\(\\mathbb{D}\\), with supremum norm, is a commutative unital Banach algebra.</p>
</div>
</div>

<div class="env-block proposition">
<div class="env-title">Proposition 17.3 (Invertibility Is Open)</div>
<div class="env-body"><p>In a unital Banach algebra \\(A\\), the set \\(\\mathrm{Inv}(A)\\) of invertible elements is open, and inversion \\(a \\mapsto a^{-1}\\) is continuous.</p></div>
</div>

<div class="env-block proof">
<div class="env-title">Proof Sketch</div>
<div class="env-body"><p>If \\(a \\in \\mathrm{Inv}(A)\\) and \\(\\|b - a\\| < \\|a^{-1}\\|^{-1}\\), write \\(b = a(e - a^{-1}(a - b))\\). Since \\(\\|a^{-1}(a-b)\\| < 1\\), the Neumann series \\(\\sum_{n=0}^{\\infty}(a^{-1}(a-b))^n\\) converges, giving \\(b^{-1}\\).</p></div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 17.4 (Neumann Series)</div>
<div class="env-body"><p>Let \\(A\\) be a unital Banach algebra with identity \\(e\\). If \\(a \\in A\\) with \\(\\|a\\| < 1\\), then \\(e - a\\) is invertible and \\[(e - a)^{-1} = \\sum_{n=0}^{\\infty} a^n,\\] with \\(\\|(e-a)^{-1}\\| \\le \\frac{1}{1 - \\|a\\|}\\).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-banach-algebra-examples"></div>
<div class="viz-placeholder" data-viz="viz-neumann-series"></div>`,
            visualizations: [
                {
                    id: 'viz-banach-algebra-examples',
                    title: 'Banach Algebra Examples',
                    description: 'Compare the key examples of Banach algebras and their properties.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400});
                        var ctx = viz.ctx;

                        var examples = [
                            {name: 'B(X)', comm: false, unital: true, star: false, color: viz.colors.blue,
                             desc: 'Bounded operators on a Banach space X', norm: '||T|| = sup ||Tx||/||x||'},
                            {name: 'C(K)', comm: true, unital: true, star: true, color: viz.colors.teal,
                             desc: 'Continuous functions on compact K', norm: '||f|| = sup |f(x)|'},
                            {name: 'l\u00B9(Z)', comm: true, unital: true, star: false, color: viz.colors.orange,
                             desc: 'Summable sequences with convolution', norm: '||a|| = \u03A3|a_n|'},
                            {name: 'A(D)', comm: true, unital: true, star: false, color: viz.colors.purple,
                             desc: 'Disk algebra (analytic on D)', norm: '||f|| = sup |f(z)|'}
                        ];

                        var selected = 0;

                        function draw() {
                            viz.clear();
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Banach Algebra Examples', viz.width / 2, 25);

                            var boxW = 150, boxH = 60, gap = 20;
                            var startX = (viz.width - (examples.length * boxW + (examples.length - 1) * gap)) / 2;

                            for (var i = 0; i < examples.length; i++) {
                                var ex = examples[i];
                                var x = startX + i * (boxW + gap);
                                var y = 55;
                                var isSelected = (i === selected);

                                ctx.fillStyle = isSelected ? ex.color + '44' : ex.color + '18';
                                ctx.strokeStyle = ex.color;
                                ctx.lineWidth = isSelected ? 3 : 1;
                                ctx.beginPath();
                                ctx.roundRect(x, y, boxW, boxH, 8);
                                ctx.fill();
                                ctx.stroke();

                                ctx.fillStyle = ex.color;
                                ctx.font = 'bold 18px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(ex.name, x + boxW / 2, y + boxH / 2 + 6);
                            }

                            var ex = examples[selected];
                            var infoY = 150;

                            ctx.fillStyle = ex.color;
                            ctx.font = 'bold 20px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText(ex.name, 50, infoY);

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.fillText(ex.desc, 50, infoY + 30);

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('Norm: ' + ex.norm, 50, infoY + 58);

                            var props = [
                                {label: 'Commutative', val: ex.comm},
                                {label: 'Unital', val: ex.unital},
                                {label: 'C*-algebra', val: ex.star}
                            ];

                            for (var j = 0; j < props.length; j++) {
                                var px = 50 + j * 180;
                                var py = infoY + 90;
                                ctx.fillStyle = props[j].val ? viz.colors.green : viz.colors.red;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.fillText(props[j].val ? '\u2713' : '\u2717', px, py);
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.fillText(props[j].label, px + 18, py);
                            }

                            var diagramY = infoY + 130;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Hierarchy of Algebras', viz.width / 2, diagramY);

                            var levels = [
                                {label: 'Algebra', w: 500, color: viz.colors.text},
                                {label: 'Normed Algebra', w: 420, color: viz.colors.yellow},
                                {label: 'Banach Algebra', w: 340, color: viz.colors.orange},
                                {label: 'C*-Algebra', w: 260, color: viz.colors.blue},
                                {label: 'Commutative C*', w: 180, color: viz.colors.teal}
                            ];

                            for (var k = 0; k < levels.length; k++) {
                                var lv = levels[k];
                                var ly = diagramY + 18 + k * 28;
                                var lx = (viz.width - lv.w) / 2;
                                ctx.fillStyle = lv.color + '22';
                                ctx.strokeStyle = lv.color;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.roundRect(lx, ly, lv.w, 24, 4);
                                ctx.fill();
                                ctx.stroke();
                                ctx.fillStyle = lv.color;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(lv.label, viz.width / 2, ly + 15);
                            }
                        }

                        draw();

                        viz.canvas.addEventListener('click', function(e) {
                            var rect = viz.canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left;
                            var my = e.clientY - rect.top;
                            var boxW = 150, boxH = 60, gap = 20;
                            var startX = (viz.width - (examples.length * boxW + (examples.length - 1) * gap)) / 2;
                            for (var i = 0; i < examples.length; i++) {
                                var x = startX + i * (boxW + gap);
                                if (mx >= x && mx <= x + boxW && my >= 55 && my <= 55 + boxH) {
                                    selected = i;
                                    draw();
                                    break;
                                }
                            }
                        });
                    }
                },
                {
                    id: 'viz-neumann-series',
                    title: 'Neumann Series Convergence',
                    description: 'Visualize partial sums of the Neumann series (e - a)^{-1} = sum a^n for a scalar element.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400, scale: 60, originX: 120, originY: 350});
                        var ctx = viz.ctx;
                        var aVal = 0.6;

                        function draw() {
                            viz.clear();
                            viz.drawGrid(0.5);
                            viz.drawAxes();

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Neumann Series: (1 - a)\u207B\u00B9 = 1 + a + a\u00B2 + a\u00B3 + ...', 140, 25);

                            var exactVal = 1 / (1 - aVal);
                            var partials = [];
                            var sum = 0;
                            var maxN = 15;
                            for (var n = 0; n < maxN; n++) {
                                sum += Math.pow(aVal, n);
                                partials.push(sum);
                            }

                            ctx.strokeStyle = viz.colors.red + '66';
                            ctx.lineWidth = 1;
                            ctx.setLineDash([5, 3]);
                            var ey = viz.originY - exactVal * viz.scale;
                            ctx.beginPath();
                            ctx.moveTo(0, ey);
                            ctx.lineTo(viz.width, ey);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            ctx.fillStyle = viz.colors.red;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('Exact = ' + exactVal.toFixed(3), viz.width - 20, ey - 8);

                            var barW = 30;
                            var gap = 8;
                            for (var i = 0; i < partials.length; i++) {
                                var bx = viz.originX + 20 + i * (barW + gap);
                                var bh = partials[i] * viz.scale;
                                var by = viz.originY - bh;

                                var t = i / maxN;
                                var col = i < 3 ? viz.colors.orange : (i < 7 ? viz.colors.yellow : viz.colors.green);
                                ctx.fillStyle = col + '88';
                                ctx.fillRect(bx, by, barW, bh);
                                ctx.strokeStyle = col;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(bx, by, barW, bh);

                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('S' + i, bx + barW / 2, viz.originY + 14);
                            }

                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('a = ' + aVal.toFixed(2) + ',  ||a|| < 1  \u21D2  converges', 140, 50);
                        }

                        draw();

                        VizEngine.createSlider(controls, 'a', 0.05, 0.95, aVal, 0.05, function(v) {
                            aVal = v;
                            draw();
                        });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch17-ex01',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Show that if A is a unital Banach algebra and ||a|| < 1, then e - a is invertible with ||(e - a)^{-1}|| <= 1/(1 - ||a||). (Hint: Neumann series.)',
                    hint: 'Consider the series sum_{n=0}^{infty} a^n. Show it converges absolutely using ||a^n|| <= ||a||^n.',
                    solution: 'Since ||a^n|| <= ||a||^n and ||a|| < 1, the series sum a^n converges absolutely in the Banach algebra A. Let s = sum_{n=0}^{infty} a^n. Then (e - a)s = lim_{N} (e - a)(e + a + ... + a^N) = lim_{N}(e - a^{N+1}) = e, since ||a^{N+1}|| <= ||a||^{N+1} -> 0. Similarly s(e - a) = e. Thus (e - a)^{-1} = s and ||s|| <= sum ||a||^n = 1/(1 - ||a||).'
                },
                {
                    id: 'ch17-ex02',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Prove that in a unital Banach algebra, the set of invertible elements is open and inversion is continuous.',
                    hint: 'If a is invertible and ||b - a|| < ||a^{-1}||^{-1}, write b = a(e - a^{-1}(a - b)).',
                    solution: 'Let a be invertible and set c = a^{-1}(a - b). If ||b - a|| < ||a^{-1}||^{-1}, then ||c|| <= ||a^{-1}|| ||a - b|| < 1. So e - c is invertible by Neumann series, and b = a(e - c) is invertible with b^{-1} = (e - c)^{-1} a^{-1}. This shows Inv(A) is open. For continuity: ||b^{-1} - a^{-1}|| = ||(e - c)^{-1}a^{-1} - a^{-1}|| = ||((e-c)^{-1} - e)a^{-1}|| which tends to 0 as b -> a.'
                },
                {
                    id: 'ch17-ex03',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Show that l^1(Z) with convolution is a commutative unital Banach algebra. Identify the unit and verify submultiplicativity.',
                    hint: 'The unit is delta_0. For submultiplicativity, use the triangle inequality and Fubini-Tonelli.',
                    solution: 'The unit is delta_0 = (...,0,0,1,0,0,...) at index 0. For f,g in l^1(Z), ||f * g||_1 = sum_n |sum_k f_k g_{n-k}| <= sum_n sum_k |f_k||g_{n-k}| = sum_k |f_k| sum_n |g_{n-k}| = ||f||_1 ||g||_1. Commutativity: (f*g)_n = sum_k f_k g_{n-k} = sum_j f_{n-j} g_j = (g*f)_n by change of variable j = n - k.'
                }
            ]
        },
        // ================================================================
        // SECTION 2: Spectrum and Resolvent
        // ================================================================
        {
            id: 'ch17-sec02',
            title: 'Spectrum and Resolvent',
            content: `<h2>Spectrum and Resolvent</h2>
<p>The spectrum generalizes eigenvalues from matrix theory to the Banach algebra setting. It is one of the most fundamental concepts in operator theory and functional analysis.</p>

<div class="env-block definition">
<div class="env-title">Definition 17.5 (Spectrum and Resolvent Set)</div>
<div class="env-body"><p>Let \\(A\\) be a unital Banach algebra and \\(a \\in A\\). The <strong>spectrum</strong> of \\(a\\) is
\\[\\sigma(a) = \\{\\lambda \\in \\mathbb{C} : \\lambda e - a \\text{ is not invertible in } A\\}.\\]
The <strong>resolvent set</strong> is \\(\\rho(a) = \\mathbb{C} \\setminus \\sigma(a)\\), and the <strong>resolvent function</strong> is
\\[R(\\lambda, a) = (\\lambda e - a)^{-1}, \\quad \\lambda \\in \\rho(a).\\]</p></div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 17.6 (Basic Properties of the Spectrum)</div>
<div class="env-body"><p>For \\(a\\) in a unital Banach algebra \\(A\\):</p>
<ol>
<li>\\(\\sigma(a)\\) is a <strong>nonempty compact</strong> subset of \\(\\{\\lambda : |\\lambda| \\le \\|a\\|\\}\\).</li>
<li>The resolvent \\(\\rho(a)\\) is open and \\(R(\\cdot, a): \\rho(a) \\to A\\) is analytic.</li>
<li><strong>Resolvent identity:</strong> \\(R(\\lambda, a) - R(\\mu, a) = (\\mu - \\lambda)R(\\lambda, a)R(\\mu, a)\\).</li>
</ol></div>
</div>

<div class="env-block proof">
<div class="env-title">Proof Sketch (Nonemptiness)</div>
<div class="env-body"><p>If \\(\\sigma(a) = \\emptyset\\), then \\(R(\\cdot, a)\\) is an entire \\(A\\)-valued function. For \\(|\\lambda| > \\|a\\|\\), we have \\(\\|R(\\lambda,a)\\| \\le (|\\lambda| - \\|a\\|)^{-1} \\to 0\\) as \\(|\\lambda| \\to \\infty\\). By Liouville's theorem (in Banach-valued form), \\(R(\\cdot,a) \\equiv 0\\), which contradicts invertibility. So \\(\\sigma(a) \\ne \\emptyset\\).</p></div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 17.7 (Spectral Radius)</div>
<div class="env-body"><p>The <strong>spectral radius</strong> of \\(a\\) is
\\[r(a) = \\sup\\{|\\lambda| : \\lambda \\in \\sigma(a)\\}.\\]</p></div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 17.8 (Spectral Radius Formula)</div>
<div class="env-body"><p>For any element \\(a\\) in a unital Banach algebra,
\\[r(a) = \\lim_{n \\to \\infty} \\|a^n\\|^{1/n} = \\inf_{n \\ge 1} \\|a^n\\|^{1/n}.\\]</p></div>
</div>

<div class="env-block remark">
<div class="env-title">Remark 17.9</div>
<div class="env-body"><p>The spectral radius formula is remarkable: the left side is purely algebraic (defined via invertibility), while the right side is purely metric. Note that in general \\(r(a) \\le \\|a\\|\\), with equality when \\(a\\) is normal in a C*-algebra.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-spectrum-complex-plane"></div>
<div class="viz-placeholder" data-viz="viz-spectral-radius"></div>`,
            visualizations: [
                {
                    id: 'viz-spectrum-complex-plane',
                    title: 'Spectrum in the Complex Plane',
                    description: 'Visualize the spectrum of different operators/elements in the complex plane.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 450, scale: 80});
                        var ctx = viz.ctx;
                        var mode = 0;

                        var modes = [
                            {name: 'Finite Matrix', desc: 'Eigenvalues of a 3x3 matrix'},
                            {name: 'Shift Operator', desc: 'Spectrum = closed unit disk'},
                            {name: 'Multiplication', desc: 'Spectrum = range of f on [0,1]'},
                            {name: 'Rotation', desc: 'Spectrum on the unit circle'}
                        ];

                        function draw() {
                            viz.clear();
                            viz.drawGrid(0.5);
                            viz.drawAxes();

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(modes[mode].name + ': ' + modes[mode].desc, viz.width / 2, 22);

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('Re(\u03BB)', viz.width - 30, viz.originY - 10);
                            ctx.fillText('Im(\u03BB)', viz.originX + 25, 15);

                            if (mode === 0) {
                                var eigenvalues = [
                                    {re: 1.5, im: 0.8}, {re: 1.5, im: -0.8}, {re: -0.7, im: 0}
                                ];
                                var rSpec = 0;
                                for (var i = 0; i < eigenvalues.length; i++) {
                                    var ev = eigenvalues[i];
                                    viz.drawPoint(ev.re, ev.im, viz.colors.blue, '\u03BB' + (i + 1), 7);
                                    var modulus = Math.sqrt(ev.re * ev.re + ev.im * ev.im);
                                    if (modulus > rSpec) rSpec = modulus;
                                }
                                viz.drawCircle(0, 0, rSpec, null, viz.colors.yellow + '55', 1.5);
                                ctx.fillStyle = viz.colors.yellow;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('r(a) = ' + rSpec.toFixed(2), viz.originX + rSpec * viz.scale + 8, viz.originY - 4);
                            } else if (mode === 1) {
                                viz.drawCircle(0, 0, 1, viz.colors.blue + '22', viz.colors.blue, 2);
                                ctx.fillStyle = viz.colors.blue;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('\u03C3(S) = closed unit disk', viz.originX + 100, viz.originY - 100);
                            } else if (mode === 2) {
                                var steps = 200;
                                ctx.strokeStyle = viz.colors.teal;
                                ctx.lineWidth = 3;
                                ctx.beginPath();
                                for (var i = 0; i <= steps; i++) {
                                    var t = i / steps;
                                    var fVal = t * t + 0.5 * t;
                                    var sx = viz.originX + fVal * viz.scale;
                                    var sy = viz.originY;
                                    if (i === 0) ctx.moveTo(sx, sy);
                                    else ctx.lineTo(sx, sy);
                                }
                                ctx.stroke();
                                viz.drawPoint(0, 0, viz.colors.teal, 'f(0)=0', 5);
                                viz.drawPoint(1.5, 0, viz.colors.teal, 'f(1)=1.5', 5);
                                ctx.fillStyle = viz.colors.teal;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('\u03C3(M_f) = range(f) = [0, 1.5]', viz.width / 2, viz.originY + 30);
                            } else {
                                var nPoints = 30;
                                for (var i = 0; i < nPoints; i++) {
                                    var theta = 2 * Math.PI * i / nPoints;
                                    viz.drawPoint(Math.cos(theta), Math.sin(theta), viz.colors.purple, '', 4);
                                }
                                viz.drawCircle(0, 0, 1, null, viz.colors.purple + '55', 1.5);
                                ctx.fillStyle = viz.colors.purple;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('\u03C3(U) = unit circle, r(U) = 1', viz.width / 2, 45);
                            }
                        }

                        draw();

                        VizEngine.createButton(controls, 'Finite Matrix', function() { mode = 0; draw(); });
                        VizEngine.createButton(controls, 'Shift Operator', function() { mode = 1; draw(); });
                        VizEngine.createButton(controls, 'Multiplication', function() { mode = 2; draw(); });
                        VizEngine.createButton(controls, 'Rotation', function() { mode = 3; draw(); });
                    }
                },
                {
                    id: 'viz-spectral-radius',
                    title: 'Spectral Radius Formula',
                    description: 'Watch ||a^n||^{1/n} converge to the spectral radius r(a).',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 380, scale: 1, originX: 60, originY: 320});
                        var ctx = viz.ctx;
                        var normA = 0.8;
                        var rA = 0.5;

                        function draw() {
                            viz.clear();

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('||a^n||^(1/n) converges to r(a)', viz.width / 2, 22);

                            var maxN = 20;
                            var plotW = viz.width - 120;
                            var plotH = 260;
                            var plotX = 80;
                            var plotY = 50;

                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(plotX, plotY + plotH);
                            ctx.lineTo(plotX + plotW, plotY + plotH);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(plotX, plotY);
                            ctx.lineTo(plotX, plotY + plotH);
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            for (var n = 1; n <= maxN; n++) {
                                var nx = plotX + (n / maxN) * plotW;
                                if (n % 2 === 0) ctx.fillText(n, nx, plotY + plotH + 14);
                            }
                            ctx.fillText('n', plotX + plotW + 15, plotY + plotH + 4);

                            ctx.textAlign = 'right';
                            var yLabels = [0, 0.2, 0.4, 0.6, 0.8, 1.0];
                            for (var j = 0; j < yLabels.length; j++) {
                                var yy = plotY + plotH - yLabels[j] * plotH;
                                ctx.fillText(yLabels[j].toFixed(1), plotX - 6, yy + 4);
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.beginPath();
                                ctx.moveTo(plotX, yy);
                                ctx.lineTo(plotX + plotW, yy);
                                ctx.stroke();
                            }

                            ctx.strokeStyle = viz.colors.red + '66';
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([5, 3]);
                            var rY = plotY + plotH - rA * plotH;
                            ctx.beginPath();
                            ctx.moveTo(plotX, rY);
                            ctx.lineTo(plotX + plotW, rY);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.red;
                            ctx.textAlign = 'left';
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('r(a) = ' + rA.toFixed(2), plotX + plotW + 5, rY + 4);

                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var n = 1; n <= maxN; n++) {
                                var val = rA + (normA - rA) * Math.pow(0.7, n - 1) + 0.03 * Math.sin(n * 1.5);
                                val = Math.max(val, rA);
                                var nx = plotX + (n / maxN) * plotW;
                                var ny = plotY + plotH - val * plotH;
                                if (n === 1) ctx.moveTo(nx, ny);
                                else ctx.lineTo(nx, ny);
                            }
                            ctx.stroke();

                            for (var n = 1; n <= maxN; n++) {
                                var val = rA + (normA - rA) * Math.pow(0.7, n - 1) + 0.03 * Math.sin(n * 1.5);
                                val = Math.max(val, rA);
                                var nx = plotX + (n / maxN) * plotW;
                                var ny = plotY + plotH - val * plotH;
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath();
                                ctx.arc(nx, ny, 3, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('||a|| = ' + normA.toFixed(2) + ', r(a) = ' + rA.toFixed(2), plotX + 10, plotY + plotH + 36);
                        }

                        draw();

                        VizEngine.createSlider(controls, '||a||', 0.1, 1.0, normA, 0.05, function(v) {
                            normA = v;
                            if (rA > normA) rA = normA;
                            draw();
                        });
                        VizEngine.createSlider(controls, 'r(a)', 0.05, 1.0, rA, 0.05, function(v) {
                            rA = Math.min(v, normA);
                            draw();
                        });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch17-ex04',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Prove the spectral radius formula: r(a) = lim_{n->infty} ||a^n||^{1/n}.',
                    hint: 'Show r(a) <= inf ||a^n||^{1/n} using the Neumann series, then r(a) >= lim sup ||a^n||^{1/n} using the Cauchy-Hadamard formula for the Laurent series of the resolvent.',
                    solution: 'Step 1: r(a) <= inf ||a^n||^{1/n}. If |lambda| > ||a^n||^{1/n} for some n, then ||(a/lambda)^n|| < 1 and using the Neumann series we can show lambda e - a is invertible. Step 2: The resolvent R(lambda, a) = sum_{n=0}^{infty} a^n / lambda^{n+1} for |lambda| > r(a). By the Cauchy-Hadamard formula, 1/r(a) = limsup ||a^n||^{1/n} which gives r(a) >= lim sup ||a^n||^{1/n}. Since lim sup <= inf we get equality, and the limit exists.'
                },
                {
                    id: 'ch17-ex05',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Show that the spectrum sigma(a) is nonempty for every element a of a unital Banach algebra.',
                    hint: 'Assume sigma(a) is empty. Then R(lambda, a) is entire. Use the Liouville theorem for Banach-valued analytic functions.',
                    solution: 'If sigma(a) = empty, then R(lambda, a) = (lambda e - a)^{-1} is defined for all lambda in C. For |lambda| > ||a||, ||R(lambda, a)|| <= 1/(|lambda| - ||a||) -> 0 as |lambda| -> infty. So R is a bounded entire Banach-valued function. By Liouville theorem, R = 0 everywhere. But R(lambda,a)(lambda e - a) = e implies e = 0, contradiction.'
                },
                {
                    id: 'ch17-ex06',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Prove the resolvent identity: R(lambda, a) - R(mu, a) = (mu - lambda) R(lambda, a) R(mu, a).',
                    hint: 'Write R(lambda, a) - R(mu, a) = R(lambda,a)[(mu e - a) - (lambda e - a)]R(mu, a).',
                    solution: 'R(lambda,a) - R(mu,a) = R(lambda,a)(mu e - a)R(mu,a) - R(lambda,a)(lambda e - a)R(mu,a) = R(lambda,a)[(mu e - a) - (lambda e - a)]R(mu,a) = (mu - lambda) R(lambda,a) R(mu,a). Here we used that R(lambda,a)(lambda e - a) = e and (mu e - a)R(mu,a) = e.'
                }
            ]
        },
        // ================================================================
        // SECTION 3: Gelfand Transform
        // ================================================================
        {
            id: 'ch17-sec03',
            title: 'The Gelfand Transform',
            content: `<h2>The Gelfand Transform</h2>
<p>The Gelfand transform is the key tool that connects commutative Banach algebras to function algebras. It provides a concrete representation of abstract algebraic elements as continuous functions.</p>

<div class="env-block definition">
<div class="env-title">Definition 17.10 (Character)</div>
<div class="env-body"><p>Let \\(A\\) be a commutative unital Banach algebra. A <strong>character</strong> (or <strong>multiplicative linear functional</strong>) on \\(A\\) is a nonzero algebra homomorphism \\(\\varphi: A \\to \\mathbb{C}\\), i.e., \\(\\varphi\\) is linear and \\(\\varphi(ab) = \\varphi(a)\\varphi(b)\\) for all \\(a, b \\in A\\).</p></div>
</div>

<div class="env-block proposition">
<div class="env-title">Proposition 17.11 (Characters Are Bounded)</div>
<div class="env-body"><p>Every character \\(\\varphi\\) on a commutative unital Banach algebra satisfies:</p>
<ol>
<li>\\(\\varphi(e) = 1\\).</li>
<li>\\(|\\varphi(a)| \\le \\|a\\|\\) for all \\(a\\), so \\(\\|\\varphi\\| = 1\\).</li>
<li>\\(\\ker \\varphi\\) is a maximal ideal in \\(A\\).</li>
</ol></div>
</div>

<div class="env-block proof">
<div class="env-title">Proof (Boundedness)</div>
<div class="env-body"><p>Since \\(\\varphi \\ne 0\\), there exists \\(a\\) with \\(\\varphi(a) \\ne 0\\). Then \\(\\varphi(e) \\cdot \\varphi(a) = \\varphi(ea) = \\varphi(a)\\), so \\(\\varphi(e) = 1\\). If \\(|\\varphi(a)| > \\|a\\|\\), set \\(\\lambda = \\varphi(a)\\). Then \\(\\lambda e - a\\) is invertible (since \\(|\\lambda| > \\|a\\|\\)), but \\(\\varphi(\\lambda e - a) = \\lambda - \\varphi(a) = 0\\), contradicting \\(\\varphi(b \\cdot b^{-1}) = \\varphi(e) = 1\\). Thus \\(|\\varphi(a)| \\le \\|a\\|\\).</p></div>
</div>

<div class="env-block definition">
<div class="env-title">Definition 17.12 (Maximal Ideal Space and Gelfand Transform)</div>
<div class="env-body"><p>The <strong>maximal ideal space</strong> (or <strong>Gelfand space</strong>) of \\(A\\) is
\\[\\Delta(A) = \\{\\varphi : A \\to \\mathbb{C} : \\varphi \\text{ is a character}\\},\\]
equipped with the weak* topology inherited from \\(A^*\\).</p>
<p>The <strong>Gelfand transform</strong> of \\(a \\in A\\) is the function \\(\\hat{a}: \\Delta(A) \\to \\mathbb{C}\\) defined by
\\[\\hat{a}(\\varphi) = \\varphi(a).\\]</p></div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 17.13 (Properties of the Gelfand Transform)</div>
<div class="env-body"><p>Let \\(A\\) be a commutative unital Banach algebra.</p>
<ol>
<li>\\(\\Delta(A)\\) is a <strong>compact Hausdorff</strong> space (in the weak* topology).</li>
<li>The Gelfand transform \\(\\Gamma: A \\to C(\\Delta(A))\\), \\(a \\mapsto \\hat{a}\\), is a continuous algebra homomorphism with \\(\\|\\hat{a}\\|_\\infty \\le \\|a\\|\\).</li>
<li>\\(\\sigma(a) = \\hat{a}(\\Delta(A)) = \\{\\varphi(a) : \\varphi \\in \\Delta(A)\\}\\).</li>
<li>\\(\\|\\hat{a}\\|_\\infty = r(a)\\).</li>
</ol></div>
</div>

<div class="env-block example">
<div class="env-title">Example 17.14 (Gelfand Transform of C(K))</div>
<div class="env-body"><p>For \\(A = C(K)\\), every character is an evaluation functional \\(\\varphi_x(f) = f(x)\\) for some \\(x \\in K\\). Thus \\(\\Delta(C(K)) \\cong K\\) and the Gelfand transform is the identity map. This is the prototypical example that the Gelfand-Naimark theorem generalizes.</p></div>
</div>

<div class="env-block example">
<div class="env-title">Example 17.15 (Gelfand Transform of \\(\\ell^1(\\mathbb{Z})\\))</div>
<div class="env-body"><p>Characters on \\(\\ell^1(\\mathbb{Z})\\) are determined by \\(z = \\varphi(\\delta_1) \\in \\mathbb{T}\\) (the unit circle). The Gelfand transform is the <strong>Fourier transform</strong>: \\(\\hat{a}(z) = \\sum_{n} a_n z^n\\). Thus \\(\\Delta(\\ell^1(\\mathbb{Z})) \\cong \\mathbb{T}\\).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-character-space"></div>
<div class="viz-placeholder" data-viz="viz-gelfand-transform"></div>`,
            visualizations: [
                {
                    id: 'viz-character-space',
                    title: 'Character Space Illustration',
                    description: 'Visualize the maximal ideal space for key examples of commutative Banach algebras.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 70});
                        var ctx = viz.ctx;
                        var mode = 0;

                        function draw() {
                            viz.clear();

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';

                            if (mode === 0) {
                                ctx.fillText('Delta(C[0,1]) = [0,1]', viz.width / 2, 22);
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('Characters = evaluation functionals: phi_x(f) = f(x)', viz.width / 2, 44);

                                var lineY = viz.height / 2;
                                var startX = 100;
                                var endX = viz.width - 100;
                                ctx.strokeStyle = viz.colors.teal;
                                ctx.lineWidth = 4;
                                ctx.beginPath();
                                ctx.moveTo(startX, lineY);
                                ctx.lineTo(endX, lineY);
                                ctx.stroke();

                                for (var i = 0; i <= 10; i++) {
                                    var t = i / 10;
                                    var px = startX + t * (endX - startX);
                                    ctx.fillStyle = viz.colors.teal;
                                    ctx.beginPath();
                                    ctx.arc(px, lineY, 5, 0, Math.PI * 2);
                                    ctx.fill();
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText(t.toFixed(1), px, lineY + 20);
                                }

                                ctx.fillStyle = viz.colors.white;
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.fillText('phi_x', startX + 0.3 * (endX - startX), lineY - 30);

                                var fY = lineY + 70;
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i <= 100; i++) {
                                    var t = i / 100;
                                    var px = startX + t * (endX - startX);
                                    var fy = fY - 40 * Math.sin(Math.PI * t);
                                    if (i === 0) ctx.moveTo(px, fy); else ctx.lineTo(px, fy);
                                }
                                ctx.stroke();

                                ctx.fillStyle = viz.colors.orange;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('f(x) = sin(pi x)', viz.width / 2, fY + 20);

                            } else if (mode === 1) {
                                ctx.fillText('Delta(l\u00B9(Z)) = T (unit circle)', viz.width / 2, 22);
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('Characters parametrized by z in T: phi_z(a) = sum a_n z^n (Fourier transform)', viz.width / 2, 44);

                                viz.drawGrid(0.5);
                                viz.drawAxes();

                                var nPts = 60;
                                ctx.strokeStyle = viz.colors.purple;
                                ctx.lineWidth = 3;
                                ctx.beginPath();
                                for (var i = 0; i <= nPts; i++) {
                                    var theta = 2 * Math.PI * i / nPts;
                                    var sx = viz.originX + Math.cos(theta) * viz.scale;
                                    var sy = viz.originY - Math.sin(theta) * viz.scale;
                                    if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                                }
                                ctx.stroke();

                                for (var i = 0; i < 8; i++) {
                                    var theta = 2 * Math.PI * i / 8;
                                    var px = Math.cos(theta);
                                    var py = Math.sin(theta);
                                    viz.drawPoint(px, py, viz.colors.purple, '', 4);
                                }

                                ctx.fillStyle = viz.colors.purple;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('T = {z in C : |z| = 1}', viz.width / 2, viz.height - 20);

                            } else {
                                ctx.fillText('Delta(A(D)) = closed disk', viz.width / 2, 22);
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('Characters = evaluation at z in closed D', viz.width / 2, 44);

                                viz.drawGrid(0.5);
                                viz.drawAxes();

                                viz.drawCircle(0, 0, 1, viz.colors.blue + '22', viz.colors.blue, 2);

                                for (var i = 0; i < 20; i++) {
                                    var r = Math.random() * 0.9;
                                    var theta = Math.random() * 2 * Math.PI;
                                    viz.drawPoint(r * Math.cos(theta), r * Math.sin(theta), viz.colors.blue + '88', '', 3);
                                }

                                ctx.fillStyle = viz.colors.blue;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Maximal ideal space = closed unit disk', viz.width / 2, viz.height - 20);
                            }
                        }

                        draw();

                        VizEngine.createButton(controls, 'C[0,1]', function() { mode = 0; draw(); });
                        VizEngine.createButton(controls, 'l\u00B9(Z)', function() { mode = 1; draw(); });
                        VizEngine.createButton(controls, 'A(D)', function() { mode = 2; draw(); });
                    }
                },
                {
                    id: 'viz-gelfand-transform',
                    title: 'Gelfand Transform as Fourier Transform',
                    description: 'For l^1(Z), the Gelfand transform is the Fourier transform. Visualize how a sequence maps to a function on the circle.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400});
                        var ctx = viz.ctx;
                        var decay = 0.5;

                        function draw() {
                            viz.clear();

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Gelfand Transform of l\u00B9(Z): Fourier Series', viz.width / 2, 22);

                            var seqY = 140;
                            var seqStartX = 60;
                            var seqW = 280;

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Sequence a = (..., a_{-2}, a_{-1}, a_0, a_1, a_2, ...)', seqStartX + seqW / 2, 50);

                            var indices = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
                            var barW = 22;
                            var maxH = 80;
                            for (var i = 0; i < indices.length; i++) {
                                var n = indices[i];
                                var coeff = Math.pow(decay, Math.abs(n));
                                var bx = seqStartX + 20 + i * (barW + 8);
                                var bh = coeff * maxH;
                                var by = seqY - bh;

                                ctx.fillStyle = n === 0 ? viz.colors.blue : viz.colors.blue + '88';
                                ctx.fillRect(bx, by, barW, bh);
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '9px -apple-system,sans-serif';
                                ctx.fillText(n, bx + barW / 2, seqY + 12);
                            }

                            var arrowX = seqStartX + seqW + 30;
                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(arrowX, seqY - maxH / 2);
                            ctx.lineTo(arrowX + 40, seqY - maxH / 2);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(arrowX + 40, seqY - maxH / 2);
                            ctx.lineTo(arrowX + 34, seqY - maxH / 2 - 5);
                            ctx.lineTo(arrowX + 34, seqY - maxH / 2 + 5);
                            ctx.closePath();
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.fill();
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Gelfand', arrowX + 20, seqY - maxH / 2 - 14);

                            var circCX = 540;
                            var circCY = 120;
                            var circR = 70;

                            ctx.strokeStyle = viz.colors.purple;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.arc(circCX, circCY, circR, 0, Math.PI * 2);
                            ctx.stroke();

                            var fPoints = 100;
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= fPoints; i++) {
                                var theta = 2 * Math.PI * i / fPoints;
                                var val = 0;
                                for (var n = -4; n <= 4; n++) {
                                    val += Math.pow(decay, Math.abs(n)) * Math.cos(n * theta);
                                }
                                var r = circR + val * 8;
                                var px = circCX + r * Math.cos(theta);
                                var py = circCY - r * Math.sin(theta);
                                if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                            }
                            ctx.closePath();
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('a-hat on T', circCX, circCY + circR + 25);

                            var graphY = 250;
                            var graphH = 100;
                            var graphX = 80;
                            var graphW = 540;

                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(graphX, graphY + graphH);
                            ctx.lineTo(graphX + graphW, graphY + graphH);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(graphX, graphY);
                            ctx.lineTo(graphX, graphY + graphH);
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('0', graphX, graphY + graphH + 12);
                            ctx.fillText('\u03C0', graphX + graphW / 2, graphY + graphH + 12);
                            ctx.fillText('2\u03C0', graphX + graphW, graphY + graphH + 12);
                            ctx.textAlign = 'left';
                            ctx.fillText('\u03B8', graphX + graphW + 8, graphY + graphH);

                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= 200; i++) {
                                var theta = 2 * Math.PI * i / 200;
                                var val = 0;
                                for (var n = -4; n <= 4; n++) {
                                    val += Math.pow(decay, Math.abs(n)) * Math.cos(n * theta);
                                }
                                var px = graphX + (theta / (2 * Math.PI)) * graphW;
                                var maxVal = (1 + 2 * (decay + decay * decay + decay * decay * decay + decay * decay * decay * decay));
                                var py = graphY + graphH - ((val + maxVal) / (2 * maxVal)) * graphH;
                                if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('a-hat(e^{i theta}) = sum a_n e^{in theta}', graphX + graphW / 2, graphY - 8);
                        }

                        draw();

                        VizEngine.createSlider(controls, 'decay', 0.1, 0.9, decay, 0.05, function(v) {
                            decay = v;
                            draw();
                        });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch17-ex07',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Let A be a commutative unital Banach algebra and phi a character on A. Show that phi(e) = 1 and |phi(a)| <= ||a|| for all a in A.',
                    hint: 'For phi(e) = 1, use phi(a) = phi(ea) = phi(e)phi(a) with phi nonzero. For boundedness, use that |phi(a)| > ||a|| would make phi(a)e - a invertible.',
                    solution: 'Since phi is nonzero, choose b with phi(b) != 0. Then phi(b) = phi(eb) = phi(e)phi(b), so phi(e) = 1. Now suppose |phi(a)| > ||a||. Set lambda = phi(a). Then ||a/lambda|| < 1, so lambda e - a = lambda(e - a/lambda) is invertible. Let c = (lambda e - a)^{-1}. Then 1 = phi(e) = phi((lambda e - a)c) = phi(lambda e - a)phi(c) = (lambda - phi(a))phi(c) = 0, contradiction.'
                },
                {
                    id: 'ch17-ex08',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Show that sigma(a) = {phi(a) : phi in Delta(A)} for any element a in a commutative unital Banach algebra A.',
                    hint: 'Show lambda in sigma(a) iff lambda e - a is contained in some maximal ideal iff there exists a character vanishing on lambda e - a.',
                    solution: 'If lambda = phi(a) for some character phi, then phi(lambda e - a) = 0. Since phi is nonzero, ker(phi) is a proper ideal, so lambda e - a is not invertible (invertible elements are not in any proper ideal). Thus lambda in sigma(a). Conversely, if lambda in sigma(a), then lambda e - a is not invertible, so the ideal (lambda e - a)A is proper. By Zorn lemma, it is contained in a maximal ideal M. Since A/M is a field extending C and is a Banach algebra, by the Gelfand-Mazur theorem A/M = C. The quotient map gives a character phi with phi(lambda e - a) = 0, so phi(a) = lambda.'
                },
                {
                    id: 'ch17-ex09',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Identify the character space of l^1(Z) with the unit circle T and show the Gelfand transform coincides with the Fourier transform.',
                    hint: 'A character is determined by phi(delta_1) = z with |z| <= 1 and phi(delta_{-1}) = z^{-1} with |z^{-1}| <= 1, so |z| = 1.',
                    solution: 'A character phi on l^1(Z) is determined by z = phi(delta_1) since delta_n = delta_1^n (convolution powers). We need |z| = |phi(delta_1)| <= 1. Also delta_{-1} = delta_1^{-1} (in convolution), so phi(delta_{-1}) = z^{-1} and |z^{-1}| <= 1. Thus |z| = 1, i.e., z in T. For a = sum a_n delta_n, the Gelfand transform is a-hat(z) = phi_z(a) = sum a_n phi_z(delta_n) = sum a_n z^n, which is the Fourier transform.'
                }
            ]
        },
        // ================================================================
        // SECTION 4: C*-Algebras
        // ================================================================
        {
            id: 'ch17-sec04',
            title: 'C*-Algebras',
            content: `<h2>C*-Algebras</h2>
<p>C*-algebras are Banach algebras with an involution satisfying a fundamental identity. They provide the mathematical framework for quantum mechanics and are among the most beautiful objects in functional analysis.</p>

<div class="env-block definition">
<div class="env-title">Definition 17.16 (C*-Algebra)</div>
<div class="env-body"><p>A <strong>C*-algebra</strong> is a Banach algebra \\(A\\) equipped with an <strong>involution</strong> \\(*: A \\to A\\) (an antilinear map satisfying \\((a^*)^* = a\\), \\((ab)^* = b^* a^*\\)) such that the <strong>C*-identity</strong> holds:
\\[\\|a^* a\\| = \\|a\\|^2 \\quad \\text{for all } a \\in A.\\]</p></div>
</div>

<div class="env-block example">
<div class="env-title">Example 17.17</div>
<div class="env-body">
<p><strong>(a)</strong> \\(B(H)\\) for a Hilbert space \\(H\\), with the adjoint as involution, is a C*-algebra.</p>
<p><strong>(b)</strong> \\(C(K)\\) with \\(f^*(x) = \\overline{f(x)}\\) is a commutative C*-algebra.</p>
<p><strong>(c)</strong> Any norm-closed *-subalgebra of \\(B(H)\\) is a C*-algebra.</p>
</div>
</div>

<div class="env-block proposition">
<div class="env-title">Proposition 17.18 (Consequences of C*-Identity)</div>
<div class="env-body"><p>In a C*-algebra:</p>
<ol>
<li>\\(\\|a^*\\| = \\|a\\|\\) for all \\(a\\).</li>
<li>If \\(a = a^*\\) (self-adjoint), then \\(r(a) = \\|a\\|\\).</li>
<li>If \\(a\\) is normal (\\(a^*a = aa^*\\)), then \\(r(a) = \\|a\\|\\).</li>
</ol></div>
</div>

<div class="env-block proof">
<div class="env-title">Proof (Self-adjoint Case)</div>
<div class="env-body"><p>If \\(a = a^*\\), then \\(\\|a^2\\| = \\|a^*a\\| = \\|a\\|^2\\). By induction, \\(\\|a^{2^n}\\| = \\|a\\|^{2^n}\\). The spectral radius formula gives \\(r(a) = \\lim \\|a^{2^n}\\|^{1/2^n} = \\|a\\|\\).</p></div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 17.19 (Gelfand&ndash;Naimark Theorem)</div>
<div class="env-body"><p>Every commutative unital C*-algebra \\(A\\) is isometrically *-isomorphic to \\(C(\\Delta(A))\\), where \\(\\Delta(A)\\) is the maximal ideal space. The isomorphism is the Gelfand transform:
\\[\\Gamma: A \\xrightarrow{\\sim} C(\\Delta(A)), \\quad a \\mapsto \\hat{a}.\\]
Moreover, \\(\\widehat{a^*} = \\overline{\\hat{a}}\\) (the transform intertwines involution and complex conjugation).</p></div>
</div>

<div class="env-block proof">
<div class="env-title">Proof Sketch</div>
<div class="env-body"><p>By Proposition 17.18, for normal elements \\(\\|\\hat{a}\\|_\\infty = r(a) = \\|a\\|\\), so \\(\\Gamma\\) is an isometry. By Stone-Weierstrass, \\(\\Gamma(A)\\) separates points and is closed under conjugation, hence is all of \\(C(\\Delta(A))\\).</p></div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 17.20 (Gelfand&ndash;Mazur Theorem)</div>
<div class="env-body"><p>If \\(A\\) is a unital Banach algebra in which every nonzero element is invertible (a <strong>division algebra</strong>), then \\(A \\cong \\mathbb{C}\\).</p></div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body"><p>For any \\(a \\in A\\), \\(\\sigma(a) \\ne \\emptyset\\), so there exists \\(\\lambda \\in \\mathbb{C}\\) with \\(\\lambda e - a\\) not invertible. Since \\(A\\) is a division algebra, \\(\\lambda e - a = 0\\), i.e., \\(a = \\lambda e\\). The map \\(\\lambda e \\mapsto \\lambda\\) is the desired isomorphism.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-cstar-identity"></div>
<div class="viz-placeholder" data-viz="viz-gelfand-naimark"></div>`,
            visualizations: [
                {
                    id: 'viz-cstar-identity',
                    title: 'The C*-Identity',
                    description: 'Visualize how the C*-identity ||a*a|| = ||a||^2 constrains the norm.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400});
                        var ctx = viz.ctx;

                        function draw() {
                            viz.clear();

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('The C*-Identity: ||a*a|| = ||a||\u00B2', viz.width / 2, 25);

                            var cx = 200, cy = 220, radius = 130;

                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.arc(cx, cy, radius, 0, Math.PI * 2);
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.blue + '11';
                            ctx.fill();

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillText('Banach Algebra', cx, cy - radius - 12);

                            var categories = [
                                {label: '||ab|| \u2264 ||a||||b||', y: cy - 60, color: viz.colors.text},
                                {label: '||a*|| = ||a||', y: cy - 20, color: viz.colors.teal},
                                {label: '||a*a|| = ||a||\u00B2', y: cy + 20, color: viz.colors.orange},
                                {label: 'r(a) = ||a|| (normal)', y: cy + 60, color: viz.colors.purple}
                            ];

                            for (var i = 0; i < categories.length; i++) {
                                var cat = categories[i];
                                ctx.fillStyle = cat.color;
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(cat.label, cx, cat.y);
                            }

                            var rhsX = 500, rhsY = 100;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Key Consequence', rhsX, rhsY - 10);

                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('Self-adjoint: a = a*', rhsX, rhsY + 20);
                            ctx.fillText('||a\u00B2|| = ||a*a|| = ||a||\u00B2', rhsX, rhsY + 45);
                            ctx.fillText('||a^{2^n}|| = ||a||^{2^n}', rhsX, rhsY + 70);

                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(rhsX - 100, rhsY + 90);
                            ctx.lineTo(rhsX + 100, rhsY + 90);
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.green;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.fillText('r(a) = lim ||a^{2^n}||^{1/2^n} = ||a||', rhsX, rhsY + 115);

                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Gelfand Transform is an ISOMETRY', rhsX, rhsY + 160);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('||a-hat||_inf = r(a) = ||a||', rhsX, rhsY + 185);

                            var tableY = 300;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Algebra Type Comparison', viz.width / 2, tableY);

                            var cols = ['Property', 'Banach Alg', 'C*-Algebra'];
                            var rows = [
                                ['||ab|| \u2264 ||a||||b||', '\u2713', '\u2713'],
                                ['Involution *', '\u2717', '\u2713'],
                                ['||a*a|| = ||a||\u00B2', '\u2717', '\u2713'],
                                ['Gelfand isometry', '\u2717', '\u2713']
                            ];

                            var colW = 140;
                            var rowH = 22;
                            var startX = (viz.width - cols.length * colW) / 2;

                            ctx.font = 'bold 11px -apple-system,sans-serif';
                            for (var c = 0; c < cols.length; c++) {
                                ctx.fillStyle = viz.colors.blue;
                                ctx.fillText(cols[c], startX + c * colW + colW / 2, tableY + 22);
                            }
                            for (var r = 0; r < rows.length; r++) {
                                for (var c = 0; c < rows[r].length; c++) {
                                    var val = rows[r][c];
                                    ctx.fillStyle = val === '\u2713' ? viz.colors.green : (val === '\u2717' ? viz.colors.red : viz.colors.text);
                                    ctx.font = c === 0 ? '11px -apple-system,sans-serif' : '13px -apple-system,sans-serif';
                                    ctx.fillText(val, startX + c * colW + colW / 2, tableY + 45 + r * rowH);
                                }
                            }
                        }

                        draw();
                    }
                },
                {
                    id: 'viz-gelfand-naimark',
                    title: 'Gelfand-Naimark Theorem',
                    description: 'The commutative Gelfand-Naimark theorem: every commutative C*-algebra is C(K).',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400});
                        var ctx = viz.ctx;

                        function draw() {
                            viz.clear();

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Gelfand\u2013Naimark Theorem (Commutative Case)', viz.width / 2, 25);

                            var boxW = 200, boxH = 80;

                            var leftX = 80, topY = 80;
                            ctx.fillStyle = viz.colors.blue + '22';
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.roundRect(leftX, topY, boxW, boxH, 8);
                            ctx.fill();
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('A', leftX + boxW / 2, topY + 30);
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('Commutative', leftX + boxW / 2, topY + 52);
                            ctx.fillText('unital C*-algebra', leftX + boxW / 2, topY + 68);

                            var rightX = 420;
                            ctx.fillStyle = viz.colors.teal + '22';
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.roundRect(rightX, topY, boxW, boxH, 8);
                            ctx.fill();
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('C(\u0394(A))', rightX + boxW / 2, topY + 30);
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('Continuous functions on', rightX + boxW / 2, topY + 52);
                            ctx.fillText('character space', rightX + boxW / 2, topY + 68);

                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 2;
                            var arrowY = topY + boxH / 2;
                            ctx.beginPath();
                            ctx.moveTo(leftX + boxW + 10, arrowY);
                            ctx.lineTo(rightX - 10, arrowY);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(rightX - 10, arrowY);
                            ctx.lineTo(rightX - 20, arrowY - 6);
                            ctx.lineTo(rightX - 20, arrowY + 6);
                            ctx.closePath();
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.fill();

                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('\u0393: a \u21A6 a-hat', (leftX + boxW + rightX) / 2, arrowY - 14);
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText('isometric *-isomorphism', (leftX + boxW + rightX) / 2, arrowY + 18);

                            var propsY = 200;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('What the Transform Preserves', viz.width / 2, propsY);

                            var props = [
                                {left: 'a + b', right: 'a-hat + b-hat', label: 'Addition', color: viz.colors.text},
                                {left: 'ab', right: 'a-hat \u00B7 b-hat', label: 'Multiplication', color: viz.colors.blue},
                                {left: 'a*', right: 'a-hat conjugate', label: 'Involution', color: viz.colors.teal},
                                {left: '||a||', right: '||a-hat||_inf', label: 'Norm (isometry)', color: viz.colors.orange},
                                {left: '\u03C3(a)', right: 'range(a-hat)', label: 'Spectrum', color: viz.colors.purple}
                            ];

                            for (var i = 0; i < props.length; i++) {
                                var p = props[i];
                                var py = propsY + 26 + i * 28;

                                ctx.fillStyle = p.color;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText(p.left, 250, py);

                                ctx.textAlign = 'center';
                                ctx.fillText('\u27F7', 290, py);

                                ctx.textAlign = 'left';
                                ctx.fillText(p.right, 330, py);

                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('(' + p.label + ')', 500, py);
                            }
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch17-ex10',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Show that in a C*-algebra, ||a*|| = ||a|| for all a.',
                    hint: 'Use the C*-identity ||a*a|| = ||a||^2 and submultiplicativity.',
                    solution: '||a||^2 = ||a*a|| <= ||a*|| ||a||, so ||a|| <= ||a*||. Applying the same to a* gives ||a*|| <= ||(a*)*|| = ||a||. Hence ||a*|| = ||a||.'
                },
                {
                    id: 'ch17-ex11',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Prove the Gelfand-Mazur theorem: if A is a Banach algebra in which every nonzero element is invertible, then A is isomorphic to C.',
                    hint: 'Use nonemptiness of the spectrum to show every element is a scalar multiple of the identity.',
                    solution: 'For any a in A, sigma(a) is nonempty, so there exists lambda in C with lambda e - a not invertible. Since A is a division algebra, lambda e - a = 0, hence a = lambda e. The map phi: A -> C given by phi(lambda e) = lambda is well-defined, linear, multiplicative, and bijective.'
                },
                {
                    id: 'ch17-ex12',
                    type: 'proof',
                    difficulty: 5,
                    question: 'Prove the commutative Gelfand-Naimark theorem: every commutative unital C*-algebra is isometrically *-isomorphic to C(K) for some compact Hausdorff space K.',
                    hint: 'Show the Gelfand transform is an isometry (use C*-identity to prove r(a) = ||a|| for all a) and is surjective (use Stone-Weierstrass).',
                    solution: 'Step 1: For self-adjoint a, ||a^2|| = ||a*a|| = ||a||^2, so ||a^{2^n}|| = ||a||^{2^n}. The spectral radius formula gives r(a) = ||a||. Step 2: For general a, ||a||^2 = ||a*a|| and r(a*a) = ||a*a|| = ||a||^2. Also ||a-hat||_inf^2 = ||a-hat conjugate * a-hat||_inf = ||widehat{a*a}||_inf = r(a*a) = ||a||^2. So ||a-hat||_inf = ||a||, i.e., Gamma is an isometry. Step 3: Gamma(A) is a closed subalgebra of C(Delta(A)) that separates points (since if phi != psi, there exists a with phi(a) != psi(a)), contains constants, and is closed under conjugation (since widehat{a*} = a-hat conjugate). By Stone-Weierstrass, Gamma(A) = C(Delta(A)).'
                }
            ]
        },
        // ================================================================
        // SECTION 5: Continuous Functional Calculus
        // ================================================================
        {
            id: 'ch17-sec05',
            title: 'Continuous Functional Calculus',
            content: `<h2>Continuous Functional Calculus</h2>
<p>The continuous functional calculus allows us to apply continuous functions to elements of a C*-algebra. This is one of the most powerful tools in operator theory, enabling us to take square roots, absolute values, and more.</p>

<div class="env-block theorem">
<div class="env-title">Theorem 17.21 (Continuous Functional Calculus)</div>
<div class="env-body"><p>Let \\(A\\) be a unital C*-algebra and \\(a \\in A\\) be normal (\\(a^*a = aa^*\\)). There exists a unique isometric *-isomorphism
\\[\\Phi_a: C(\\sigma(a)) \\to C^*(a, e) \\subset A\\]
such that \\(\\Phi_a(\\mathrm{id}) = a\\) and \\(\\Phi_a(1) = e\\), where \\(C^*(a,e)\\) is the C*-subalgebra generated by \\(a\\) and \\(e\\).</p>
<p>For \\(f \\in C(\\sigma(a))\\), we write \\(f(a) := \\Phi_a(f)\\).</p></div>
</div>

<div class="env-block proof">
<div class="env-title">Proof Idea</div>
<div class="env-body"><p>The C*-algebra \\(C^*(a,e)\\) is commutative (since \\(a\\) is normal). By Gelfand-Naimark, \\(C^*(a,e) \\cong C(\\Delta)\\). The map \\(\\varphi \\mapsto \\varphi(a)\\) identifies \\(\\Delta\\) with \\(\\sigma(a)\\). Composing gives \\(C(\\sigma(a)) \\cong C^*(a,e)\\).</p></div>
</div>

<div class="env-block theorem">
<div class="env-title">Theorem 17.22 (Spectral Mapping Theorem)</div>
<div class="env-body"><p>Let \\(a\\) be a normal element of a unital C*-algebra and \\(f \\in C(\\sigma(a))\\). Then
\\[\\sigma(f(a)) = f(\\sigma(a)) = \\{f(\\lambda) : \\lambda \\in \\sigma(a)\\}.\\]</p></div>
</div>

<div class="env-block proof">
<div class="env-title">Proof</div>
<div class="env-body"><p>Under the isomorphism \\(\\Phi_a: C(\\sigma(a)) \\to C^*(a,e)\\), the element \\(f(a)\\) corresponds to \\(f\\). By the general Gelfand theory, \\(\\sigma(f(a)) = \\{\\varphi(f(a)) : \\varphi \\in \\Delta\\} = \\{f(\\varphi(a)) : \\varphi \\in \\Delta\\} = f(\\sigma(a))\\).</p></div>
</div>

<div class="env-block example">
<div class="env-title">Example 17.23 (Applications)</div>
<div class="env-body">
<p><strong>(a) Square roots.</strong> If \\(a \\ge 0\\) (self-adjoint with \\(\\sigma(a) \\subset [0,\\infty)\\)), then \\(f(t) = \\sqrt{t}\\) gives \\(\\sqrt{a}\\) with \\((\\sqrt{a})^2 = a\\) and \\(\\sqrt{a} \\ge 0\\).</p>
<p><strong>(b) Absolute value.</strong> For self-adjoint \\(a\\), \\(|a| = f(a)\\) where \\(f(t) = |t|\\). We have \\(|a| = \\sqrt{a^2} = \\sqrt{a^*a}\\).</p>
<p><strong>(c) Positive/negative parts.</strong> \\(a_+ = \\max(a, 0)\\) and \\(a_- = \\max(-a, 0)\\) give \\(a = a_+ - a_-\\), \\(|a| = a_+ + a_-\\), \\(a_+ a_- = 0\\).</p>
<p><strong>(d) Projections.</strong> If \\(\\sigma(a) \\subset \\{0, 1\\}\\), then \\(a\\) is already a projection (\\(a^2 = a = a^*\\)). The functional calculus for characteristic functions of clopen subsets of \\(\\sigma(a)\\) yields spectral projections.</p>
</div>
</div>

<div class="env-block remark">
<div class="env-title">Remark 17.24 (Beyond the Continuous Calculus)</div>
<div class="env-body"><p>For self-adjoint operators on a Hilbert space, the continuous functional calculus extends to the <strong>Borel functional calculus</strong>, allowing us to apply measurable functions. This is the foundation of the spectral theorem for unbounded operators (Chapter 18).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-functional-calculus"></div>
<div class="viz-placeholder" data-viz="viz-spectral-mapping"></div>`,
            visualizations: [
                {
                    id: 'viz-functional-calculus',
                    title: 'Continuous Functional Calculus',
                    description: 'Apply continuous functions to a self-adjoint operator and see how the spectrum transforms.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 80, originX: 350, originY: 300});
                        var ctx = viz.ctx;
                        var funcMode = 0;

                        var funcs = [
                            {name: 'f(t) = t\u00B2', fn: function(t) { return t * t; }, label: 'a\u00B2'},
                            {name: 'f(t) = \u221At', fn: function(t) { return t >= 0 ? Math.sqrt(t) : 0; }, label: '\u221Aa'},
                            {name: 'f(t) = |t|', fn: function(t) { return Math.abs(t); }, label: '|a|'},
                            {name: 'f(t) = max(t,0)', fn: function(t) { return Math.max(t, 0); }, label: 'a+'},
                            {name: 'f(t) = e^t', fn: function(t) { return Math.exp(t); }, label: 'e^a'}
                        ];

                        var spectrumPts = [-1.5, -0.5, 0.3, 1.0, 2.0];

                        function draw() {
                            viz.clear();
                            viz.drawGrid(0.5);
                            viz.drawAxes();

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Functional Calculus: ' + funcs[funcMode].name, viz.width / 2, 22);

                            var f = funcs[funcMode].fn;

                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            var steps = 300;
                            for (var i = 0; i <= steps; i++) {
                                var t = -2 + 4 * i / steps;
                                var val = f(t);
                                if (Math.abs(val) > 5) continue;
                                var sx = viz.originX + t * viz.scale;
                                var sy = viz.originY - val * viz.scale;
                                if (i === 0 || Math.abs(val) > 4.9) ctx.moveTo(sx, sy);
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            for (var i = 0; i < spectrumPts.length; i++) {
                                var t = spectrumPts[i];
                                var fVal = f(t);
                                if (Math.abs(fVal) > 5) continue;

                                viz.drawPoint(t, 0, viz.colors.blue, '', 6);

                                ctx.strokeStyle = viz.colors.blue + '44';
                                ctx.lineWidth = 1;
                                ctx.setLineDash([3, 3]);
                                var sx = viz.originX + t * viz.scale;
                                var sy = viz.originY - fVal * viz.scale;
                                ctx.beginPath();
                                ctx.moveTo(sx, viz.originY);
                                ctx.lineTo(sx, sy);
                                ctx.stroke();
                                ctx.beginPath();
                                ctx.moveTo(sx, sy);
                                ctx.lineTo(viz.originX, sy);
                                ctx.stroke();
                                ctx.setLineDash([]);

                                viz.drawPoint(0, fVal, viz.colors.teal, '', 6);

                                ctx.fillStyle = viz.colors.orange;
                                ctx.beginPath();
                                ctx.arc(sx, sy, 4, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('\u03C3(a) on horizontal axis', viz.width / 2, viz.height - 40);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('\u03C3(f(a)) = f(\u03C3(a)) on vertical axis', viz.width / 2, viz.height - 20);
                        }

                        draw();

                        for (var i = 0; i < funcs.length; i++) {
                            (function(idx) {
                                VizEngine.createButton(controls, funcs[idx].name, function() {
                                    funcMode = idx;
                                    draw();
                                });
                            })(i);
                        }
                    }
                },
                {
                    id: 'viz-spectral-mapping',
                    title: 'Spectral Mapping Theorem',
                    description: 'See how f maps the spectrum of a to the spectrum of f(a).',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400, scale: 50});
                        var ctx = viz.ctx;
                        var angle = 0;

                        function draw(t) {
                            viz.clear();

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Spectral Mapping: \u03C3(f(a)) = f(\u03C3(a))', viz.width / 2, 22);

                            var specPts = [];
                            var nPts = 8;
                            for (var i = 0; i < nPts; i++) {
                                var theta = 2 * Math.PI * i / nPts;
                                specPts.push({
                                    re: 1.5 * Math.cos(theta),
                                    im: Math.sin(theta)
                                });
                            }

                            var leftCX = 180;
                            var rightCX = 520;
                            var cy = 220;

                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('\u03C3(a)', leftCX, 55);

                            ctx.strokeStyle = viz.colors.blue + '44';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            for (var i = 0; i <= 60; i++) {
                                var theta = 2 * Math.PI * i / 60;
                                var sx = leftCX + 1.5 * Math.cos(theta) * viz.scale;
                                var sy = cy - Math.sin(theta) * viz.scale;
                                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                            }
                            ctx.closePath();
                            ctx.stroke();

                            for (var i = 0; i < specPts.length; i++) {
                                var p = specPts[i];
                                var sx = leftCX + p.re * viz.scale;
                                var sy = cy - p.im * viz.scale;
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath();
                                ctx.arc(sx, sy, 5, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(leftCX + 100, cy);
                            ctx.lineTo(rightCX - 100, cy);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(rightCX - 100, cy);
                            ctx.lineTo(rightCX - 108, cy - 5);
                            ctx.lineTo(rightCX - 108, cy + 5);
                            ctx.closePath();
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.fill();

                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('f(z) = z\u00B2', (leftCX + rightCX) / 2, cy - 18);

                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.fillText('\u03C3(f(a)) = f(\u03C3(a))', rightCX, 55);

                            for (var i = 0; i < specPts.length; i++) {
                                var p = specPts[i];
                                var zSqRe = p.re * p.re - p.im * p.im;
                                var zSqIm = 2 * p.re * p.im;
                                var sx = rightCX + zSqRe * viz.scale * 0.4;
                                var sy = cy - zSqIm * viz.scale * 0.4;
                                ctx.fillStyle = viz.colors.teal;
                                ctx.beginPath();
                                ctx.arc(sx, sy, 5, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            ctx.strokeStyle = viz.colors.teal + '44';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            for (var i = 0; i <= 60; i++) {
                                var theta = 2 * Math.PI * i / 60;
                                var re = 1.5 * Math.cos(theta);
                                var im = Math.sin(theta);
                                var zSqRe = re * re - im * im;
                                var zSqIm = 2 * re * im;
                                var sx = rightCX + zSqRe * viz.scale * 0.4;
                                var sy = cy - zSqIm * viz.scale * 0.4;
                                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                            }
                            ctx.closePath();
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Each \u03BB \u2208 \u03C3(a) maps to f(\u03BB) = \u03BB\u00B2 \u2208 \u03C3(a\u00B2)', viz.width / 2, viz.height - 15);
                        }

                        draw(0);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch17-ex13',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Let a be a positive element (self-adjoint with sigma(a) subset [0,infty)) in a C*-algebra. Show that there exists a unique positive element b with b^2 = a.',
                    hint: 'Apply the continuous functional calculus with f(t) = sqrt(t) on sigma(a) subset [0, infty).',
                    solution: 'Since a is self-adjoint with sigma(a) subset [0, infty), the function f(t) = sqrt(t) is continuous on sigma(a). Define b = f(a) via the continuous functional calculus. Then b^2 = f(a)^2 = (f^2)(a) = id(a) = a. Since f >= 0 on sigma(a), sigma(b) = f(sigma(a)) subset [0, infty), so b is positive. Also b = b* since f is real-valued. Uniqueness: if c >= 0 and c^2 = a, then c commutes with a (since c commutes with c^2 = a), so c and b are in the same commutative C*-algebra. Applying Gelfand-Naimark reduces to uniqueness of positive square root in C(K).'
                },
                {
                    id: 'ch17-ex14',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Prove the spectral mapping theorem: if a is normal in a unital C*-algebra and f is continuous on sigma(a), then sigma(f(a)) = f(sigma(a)).',
                    hint: 'Use the Gelfand transform on C*(a, e) and the identification Delta = sigma(a).',
                    solution: 'The C*-subalgebra C*(a,e) is commutative. By Gelfand-Naimark, C*(a,e) cong C(Delta) where Delta = sigma(a) via phi -> phi(a). Under this isomorphism, a corresponds to id, so f(a) corresponds to f. Then sigma(f(a)) = {phi(f(a)) : phi in Delta} = {f(phi(a)) : phi in Delta} = {f(lambda) : lambda in sigma(a)} = f(sigma(a)).'
                },
                {
                    id: 'ch17-ex15',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Show that every self-adjoint element a in a C*-algebra can be written as a = a_+ - a_- where a_+, a_- >= 0 and a_+ a_- = 0.',
                    hint: 'Define a_+ = max(a, 0) and a_- = max(-a, 0) via the functional calculus with f_+(t) = max(t, 0) and f_-(t) = max(-t, 0).',
                    solution: 'Define f_+(t) = max(t, 0) and f_-(t) = max(-t, 0). These are continuous on sigma(a) subset R. Set a_+ = f_+(a) and a_- = f_-(a). Since f_+ >= 0 and f_- >= 0, both a_+ and a_- are positive. Since f_+(t) - f_-(t) = t, we have a_+ - a_- = id(a) = a. Since f_+(t) f_-(t) = 0 for all t, we have a_+ a_- = (f_+ f_-)(a) = 0(a) = 0.'
                }
            ]
        }
    ]
});
