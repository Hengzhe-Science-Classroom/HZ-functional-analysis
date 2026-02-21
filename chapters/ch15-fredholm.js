window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch15',
    number: 15,
    title: 'Fredholm Theory',
    subtitle: 'Index theory and integral equations',
    sections: [
        // ==================== SECTION 1 ====================
        {
            id: 'ch15-sec01',
            title: 'Fredholm Operators',
            content: `<h2>Fredholm Operators</h2>
<p>Fredholm operators are a distinguished class of bounded linear operators that behave, in many respects, like finite-dimensional linear maps. They arise naturally in the study of integral equations, differential equations, and index theory. The defining feature is that their "defects" — the kernel and cokernel — are finite-dimensional, even though the underlying spaces may be infinite-dimensional.</p>

<div class="env-block definition">
    <div class="env-title">Definition (Fredholm Operator)</div>
    <div class="env-body"><p>Let \\(X\\) and \\(Y\\) be Banach spaces. A bounded linear operator \\(T \\in \\mathcal{B}(X,Y)\\) is called a <strong>Fredholm operator</strong> if:</p>
    <ol>
        <li>\\(\\dim \\ker T < \\infty\\) (the kernel is finite-dimensional),</li>
        <li>\\(\\dim \\operatorname{coker} T < \\infty\\) (the cokernel is finite-dimensional),</li>
        <li>\\(\\operatorname{ran} T\\) is closed in \\(Y\\).</li>
    </ol>
    <p>Here \\(\\operatorname{coker} T = Y / \\operatorname{ran} T\\). The set of all Fredholm operators from \\(X\\) to \\(Y\\) is denoted \\(\\Phi(X,Y)\\).</p></div>
</div>

<p>Condition (3) is actually redundant when both (1) and (2) hold and the spaces are Banach: if the cokernel is finite-dimensional, one can show that the range is automatically closed. However, including it makes the definition more transparent.</p>

<div class="env-block definition">
    <div class="env-title">Definition (Fredholm Index)</div>
    <div class="env-body"><p>For a Fredholm operator \\(T\\), the <strong>Fredholm index</strong> (or simply <strong>index</strong>) is defined as:</p>
    \\[\\operatorname{ind}(T) = \\dim \\ker T - \\dim \\operatorname{coker} T.\\]
    <p>Equivalently, since \\(\\operatorname{coker} T \\cong (\\operatorname{ran} T)^\\perp\\) in the Hilbert space setting,</p>
    \\[\\operatorname{ind}(T) = \\dim \\ker T - \\dim \\ker T^*.\\]</div>
</div>

<div class="env-block intuition">
    <div class="env-title">Intuition: Finite-Dimensional Analogy</div>
    <div class="env-body"><p>For a linear map \\(A: \\mathbb{R}^n \\to \\mathbb{R}^m\\), the rank-nullity theorem gives \\(\\dim \\ker A + \\operatorname{rank} A = n\\), hence \\(\\operatorname{ind}(A) = \\dim \\ker A - (m - \\operatorname{rank} A) = n - m\\). The index depends only on the dimensions of the domain and codomain, not on the particular map! This remarkable stability persists in infinite dimensions: the index of a Fredholm operator is robust under perturbations.</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example (Shift Operators on \\(\\ell^2\\))</div>
    <div class="env-body"><p>Consider the right shift \\(R: \\ell^2 \\to \\ell^2\\) defined by \\(R(x_1, x_2, \\ldots) = (0, x_1, x_2, \\ldots)\\). Then:</p>
    <ul>
        <li>\\(\\ker R = \\{0\\}\\), so \\(\\dim \\ker R = 0\\).</li>
        <li>\\(\\operatorname{ran} R = \\{(y_n) : y_1 = 0\\}\\), so \\(\\operatorname{coker} R\\) has dimension 1.</li>
        <li>\\(\\operatorname{ind}(R) = 0 - 1 = -1\\).</li>
    </ul>
    <p>The left shift \\(L(x_1, x_2, \\ldots) = (x_2, x_3, \\ldots)\\) has \\(\\ker L = \\operatorname{span}\\{e_1\\}\\), \\(\\operatorname{ran} L = \\ell^2\\), so \\(\\operatorname{ind}(L) = 1 - 0 = 1\\).</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Proposition (Composition of Fredholm Operators)</div>
    <div class="env-body"><p>If \\(S \\in \\Phi(X,Y)\\) and \\(T \\in \\Phi(Y,Z)\\), then \\(TS \\in \\Phi(X,Z)\\) and</p>
    \\[\\operatorname{ind}(TS) = \\operatorname{ind}(T) + \\operatorname{ind}(S).\\]</div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof Sketch</div>
    <div class="env-body"><p>One shows \\(\\ker(TS)\\) fits into an exact sequence \\(0 \\to \\ker S \\to \\ker(TS) \\to \\ker T \\cap \\operatorname{ran} S\\), which gives a bound on \\(\\dim \\ker(TS)\\). Similarly for the cokernel. The index formula follows from the alternating sum in the resulting exact sequence.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-fredholm-kernel-cokernel"></div>
<div class="viz-placeholder" data-viz="viz-fredholm-index-shifts"></div>`,
            visualizations: [
                {
                    id: 'viz-fredholm-kernel-cokernel',
                    title: 'Kernel and Cokernel of a Fredholm Operator',
                    description: 'Visualize how a Fredholm operator maps between spaces, showing the finite-dimensional kernel and cokernel.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400, scale: 1});
                        viz.originX = 0;
                        viz.originY = 0;
                        var ctx = viz.ctx;
                        var W = viz.width, H = viz.height;
                        var dimKer = 2;
                        var dimCoker = 1;

                        var kerSlider = VizEngine.createSlider(controls, 'dim ker T', 0, 5, dimKer, 1, function(v) {
                            dimKer = Math.round(v);
                            draw();
                        });
                        var cokerSlider = VizEngine.createSlider(controls, 'dim coker T', 0, 5, dimCoker, 1, function(v) {
                            dimCoker = Math.round(v);
                            draw();
                        });

                        function draw() {
                            ctx.fillStyle = viz.colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            // Domain X (left)
                            var xCenter = 170, yCenter = H / 2;
                            var rx = 110, ry = 140;
                            ctx.beginPath();
                            ctx.ellipse(xCenter, yCenter, rx, ry, 0, 0, Math.PI * 2);
                            ctx.fillStyle = 'rgba(88,166,255,0.08)';
                            ctx.fill();
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 18px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('X', xCenter, 30);

                            // Kernel region inside X
                            if (dimKer > 0) {
                                var kerH = Math.min(20 + dimKer * 20, ry * 1.2);
                                ctx.beginPath();
                                ctx.ellipse(xCenter, yCenter + ry - kerH / 2 - 10, 40, kerH / 2, 0, 0, Math.PI * 2);
                                ctx.fillStyle = 'rgba(248,81,73,0.2)';
                                ctx.fill();
                                ctx.strokeStyle = viz.colors.red;
                                ctx.lineWidth = 1.5;
                                ctx.stroke();
                                ctx.fillStyle = viz.colors.red;
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.fillText('ker T', xCenter, yCenter + ry - kerH / 2 - 10);
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.fillText('dim = ' + dimKer, xCenter, yCenter + ry - kerH / 2 + 8);
                            }

                            // Codomain Y (right)
                            var x2Center = 530;
                            ctx.beginPath();
                            ctx.ellipse(x2Center, yCenter, rx, ry, 0, 0, Math.PI * 2);
                            ctx.fillStyle = 'rgba(63,185,160,0.08)';
                            ctx.fill();
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 2;
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = 'bold 18px -apple-system,sans-serif';
                            ctx.fillText('Y', x2Center, 30);

                            // Range inside Y
                            var rangeRy = ry - (dimCoker > 0 ? 15 + dimCoker * 8 : 0);
                            ctx.beginPath();
                            ctx.ellipse(x2Center, yCenter, rx - 15, Math.max(rangeRy, 40), 0, 0, Math.PI * 2);
                            ctx.fillStyle = 'rgba(63,185,80,0.12)';
                            ctx.fill();
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 1.5;
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('ran T', x2Center, yCenter);

                            // Cokernel region
                            if (dimCoker > 0) {
                                ctx.fillStyle = viz.colors.orange;
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.fillText('coker T', x2Center + rx - 20, yCenter - ry + 25);
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.fillText('dim = ' + dimCoker, x2Center + rx - 20, yCenter - ry + 43);
                            }

                            // Arrow T
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(xCenter + rx + 15, yCenter - 10);
                            ctx.lineTo(x2Center - rx - 15, yCenter - 10);
                            ctx.stroke();
                            // arrowhead
                            var ax = x2Center - rx - 15, ay = yCenter - 10;
                            ctx.fillStyle = viz.colors.white;
                            ctx.beginPath();
                            ctx.moveTo(ax, ay);
                            ctx.lineTo(ax - 10, ay - 6);
                            ctx.lineTo(ax - 10, ay + 6);
                            ctx.closePath();
                            ctx.fill();
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('T', (xCenter + x2Center) / 2, yCenter - 30);

                            // Index display
                            var idx = dimKer - dimCoker;
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.fillText('ind(T) = ' + dimKer + ' - ' + dimCoker + ' = ' + idx, W / 2, H - 30);
                        }

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'viz-fredholm-index-shifts',
                    title: 'Shift Operators and Their Fredholm Index',
                    description: 'See how left and right shifts on sequence spaces create nontrivial kernels and cokernels.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 380, scale: 1});
                        viz.originX = 0;
                        viz.originY = 0;
                        var ctx = viz.ctx;
                        var W = viz.width, H = viz.height;
                        var shiftPower = 1;
                        var isRight = true;

                        VizEngine.createSlider(controls, 'Shift power k', 1, 5, 1, 1, function(v) {
                            shiftPower = Math.round(v);
                            draw();
                        });
                        VizEngine.createButton(controls, 'Toggle L/R', function() {
                            isRight = !isRight;
                            draw();
                        });

                        function draw() {
                            ctx.fillStyle = viz.colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            var n = 10;
                            var boxW = 45, boxH = 30;
                            var startX = 30, gapY = 100;
                            var y1 = 80, y2 = y1 + gapY + boxH + 40;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            var opName = isRight ? 'R' : 'L';
                            var supText = shiftPower > 1 ? '^' + shiftPower : '';
                            ctx.fillText(opName + supText + ' : sequence space', startX, 30);

                            // Top row (domain)
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.text;
                            ctx.textAlign = 'center';
                            for (var i = 0; i < n; i++) {
                                var x = startX + i * (boxW + 6);
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 1.5;
                                ctx.strokeRect(x, y1, boxW, boxH);
                                ctx.fillStyle = viz.colors.blue;
                                ctx.fillText('x' + (i + 1), x + boxW / 2, y1 + boxH / 2 + 1);
                            }
                            ctx.fillStyle = viz.colors.text;
                            ctx.textAlign = 'left';
                            ctx.fillText('...', startX + n * (boxW + 6), y1 + boxH / 2);

                            // Bottom row (codomain)
                            for (var i = 0; i < n; i++) {
                                var x = startX + i * (boxW + 6);
                                var inRange = false;
                                var label = '';
                                if (isRight) {
                                    if (i < shiftPower) {
                                        label = '0';
                                        ctx.strokeStyle = viz.colors.red;
                                        ctx.fillStyle = 'rgba(248,81,73,0.15)';
                                        ctx.fillRect(x, y2, boxW, boxH);
                                    } else {
                                        label = 'x' + (i + 1 - shiftPower);
                                        inRange = true;
                                        ctx.strokeStyle = viz.colors.teal;
                                    }
                                } else {
                                    label = 'x' + (i + 1 + shiftPower);
                                    inRange = true;
                                    ctx.strokeStyle = viz.colors.teal;
                                }
                                ctx.lineWidth = 1.5;
                                ctx.strokeRect(x, y2, boxW, boxH);
                                ctx.fillStyle = inRange ? viz.colors.teal : viz.colors.red;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(label, x + boxW / 2, y2 + boxH / 2 + 1);
                            }
                            ctx.fillStyle = viz.colors.text;
                            ctx.textAlign = 'left';
                            ctx.fillText('...', startX + n * (boxW + 6), y2 + boxH / 2);

                            // Arrows
                            for (var i = 0; i < n; i++) {
                                var xFrom = startX + i * (boxW + 6) + boxW / 2;
                                var targetI = isRight ? i + shiftPower : i - shiftPower;
                                if (targetI >= 0 && targetI < n) {
                                    var xTo = startX + targetI * (boxW + 6) + boxW / 2;
                                    ctx.strokeStyle = 'rgba(240,246,252,0.3)';
                                    ctx.lineWidth = 1;
                                    ctx.beginPath();
                                    ctx.moveTo(xFrom, y1 + boxH);
                                    ctx.lineTo(xTo, y2);
                                    ctx.stroke();
                                }
                            }

                            // Kernel info for left shift
                            if (!isRight) {
                                ctx.fillStyle = viz.colors.red;
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('ker L' + supText + ' = span{e1, ..., e' + shiftPower + '}', startX, y2 + boxH + 35);
                                ctx.fillText('dim ker = ' + shiftPower + ', dim coker = 0', startX, y2 + boxH + 55);
                            } else {
                                ctx.fillStyle = viz.colors.red;
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('ker R' + supText + ' = {0}', startX, y2 + boxH + 35);
                                ctx.fillText('dim ker = 0, dim coker = ' + shiftPower, startX, y2 + boxH + 55);
                            }

                            // Index
                            var idx = isRight ? -shiftPower : shiftPower;
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.fillText('ind(' + opName + supText + ') = ' + idx, startX, y2 + boxH + 80);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that if T is a Fredholm operator, then T* (the adjoint) is also Fredholm, and ind(T*) = -ind(T).',
                    hint: 'Use the fact that ker(T*) is isomorphic to coker(T) and vice versa.',
                    solution: 'We have ker(T*) = (ran T)^perp and ran(T*) is closed (since ran T is closed). Also coker(T*) = X**/ran(T*), and by reflexivity considerations, dim coker(T*) = dim ker T. Therefore ind(T*) = dim ker(T*) - dim coker(T*) = dim coker(T) - dim ker(T) = -ind(T).'
                },
                {
                    question: 'Let R^k denote the right shift applied k times on l^2. Compute ind(R^k) and verify the composition formula ind(R^k) = k * ind(R).',
                    hint: 'R^k maps (x1, x2, ...) to (0, ..., 0, x1, x2, ...) with k leading zeros.',
                    solution: 'For R^k: ker(R^k) = {0} so dim ker = 0. The range consists of sequences with the first k entries equal to 0, so coker has dimension k. Thus ind(R^k) = 0 - k = -k. Since ind(R) = -1, we get ind(R^k) = k * (-1) = -k = k * ind(R), confirming the composition formula.'
                },
                {
                    question: 'Let T be a Fredholm operator with ind(T) = 0. Show that T is invertible if and only if ker T = {0}.',
                    hint: 'If ind(T) = 0 and ker T = {0}, what is dim coker T?',
                    solution: 'If ind(T) = 0, then dim ker T = dim coker T. If ker T = {0}, then dim ker T = 0, so dim coker T = 0, meaning ran T = Y. Since T is injective and surjective with closed range, T is bijective, hence invertible by the open mapping theorem. Conversely, if T is invertible, then ker T = {0}.'
                }
            ]
        },
        // ==================== SECTION 2 ====================
        {
            id: 'ch15-sec02',
            title: 'Riesz-Schauder Theory',
            content: `<h2>Riesz-Schauder Theory</h2>
<p>The Riesz-Schauder theory describes the spectral properties of compact operators and establishes a fundamental connection: compact perturbations of the identity are always Fredholm of index zero. This is one of the most powerful results linking compactness to the Fredholm property.</p>

<div class="env-block theorem">
    <div class="env-title">Theorem (Riesz-Schauder)</div>
    <div class="env-body"><p>Let \\(X\\) be a Banach space and \\(K \\in \\mathcal{B}(X)\\) a compact operator. Then:</p>
    <ol>
        <li>\\(I - K\\) is a Fredholm operator of index zero: \\(\\operatorname{ind}(I - K) = 0\\).</li>
        <li>The spectrum \\(\\sigma(K)\\) is at most countable, with \\(0\\) as the only possible accumulation point.</li>
        <li>Every nonzero \\(\\lambda \\in \\sigma(K)\\) is an eigenvalue of finite multiplicity.</li>
    </ol></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof Sketch (Index Zero)</div>
    <div class="env-body"><p>Consider the homotopy \\(T_t = I - tK\\) for \\(t \\in [0,1]\\). At \\(t = 0\\), \\(T_0 = I\\) has index 0. Each \\(T_t\\) is a compact perturbation of the identity. Since the index is continuous on the Fredholm operators (and takes integer values, hence is locally constant), \\(\\operatorname{ind}(T_1) = \\operatorname{ind}(T_0) = 0\\).</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark</div>
    <div class="env-body"><p>The proof that \\(I - K\\) is Fredholm uses the Riesz lemma: if \\(\\ker(I - K)\\) were infinite-dimensional, the unit ball of \\(\\ker(I - K)\\) would be compact (since \\(K = I\\) on it), contradicting the fact that the unit ball in an infinite-dimensional space is not compact.</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem (Spectral Properties of Compact Operators)</div>
    <div class="env-body"><p>Let \\(K\\) be a compact operator on an infinite-dimensional Banach space \\(X\\). Then:</p>
    <ol>
        <li>\\(0 \\in \\sigma(K)\\).</li>
        <li>\\(\\sigma(K) \\setminus \\{0\\}\\) consists entirely of eigenvalues.</li>
        <li>For each \\(\\epsilon > 0\\), there are only finitely many eigenvalues with \\(|\\lambda| > \\epsilon\\).</li>
        <li>If \\(\\sigma(K)\\) is infinite, the eigenvalues form a sequence converging to 0.</li>
    </ol></div>
</div>

<div class="env-block example">
    <div class="env-title">Example (Integral Operator)</div>
    <div class="env-body"><p>Let \\(K: L^2[0,1] \\to L^2[0,1]\\) be defined by \\((Kf)(x) = \\int_0^1 k(x,t)f(t)\\,dt\\) where \\(k \\in L^2([0,1]^2)\\). Then \\(K\\) is a Hilbert-Schmidt (hence compact) operator. Its eigenvalues \\(\\{\\lambda_n\\}\\) satisfy \\(\\sum |\\lambda_n|^2 \\leq \\|k\\|_{L^2}^2\\), and they accumulate only at 0.</p></div>
</div>

<div class="env-block definition">
    <div class="env-title">Definition (Riesz Number)</div>
    <div class="env-body"><p>For \\(T \\in \\mathcal{B}(X)\\), the <strong>ascent</strong> (or Riesz number) of \\(T\\) is the smallest integer \\(p\\) such that \\(\\ker T^p = \\ker T^{p+1}\\). For \\(I - K\\) with \\(K\\) compact, the ascent is always finite. Similarly, the <strong>descent</strong> is the smallest \\(q\\) with \\(\\operatorname{ran} T^q = \\operatorname{ran} T^{q+1}\\), and for \\(I - K\\) we have \\(p = q\\).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-riesz-schauder-spectrum"></div>
<div class="viz-placeholder" data-viz="viz-compact-spectrum-accumulation"></div>`,
            visualizations: [
                {
                    id: 'viz-riesz-schauder-spectrum',
                    title: 'Spectrum of a Compact Operator',
                    description: 'See how eigenvalues of a compact operator cluster toward zero, with only finitely many outside any disk.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 450, scale: 120});
                        var ctx = viz.ctx;
                        var numEigs = 15;
                        var decayRate = 0.7;

                        VizEngine.createSlider(controls, 'Number of eigenvalues', 5, 30, numEigs, 1, function(v) {
                            numEigs = Math.round(v);
                            draw();
                        });
                        VizEngine.createSlider(controls, 'Decay rate', 0.3, 0.95, decayRate, 0.05, function(v) {
                            decayRate = v;
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(0.5);
                            viz.drawAxes();

                            // Draw unit circle
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 4]);
                            var cx = viz.originX, cy = viz.originY, r = viz.scale;
                            ctx.beginPath();
                            ctx.arc(cx, cy, r, 0, Math.PI * 2);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Label
                            viz.screenText('||K|| circle', viz.originX + viz.scale + 10, viz.originY - viz.scale - 5, viz.colors.text, 11, 'left');

                            // Draw epsilon disk
                            var eps = 0.15;
                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([3, 3]);
                            ctx.beginPath();
                            ctx.arc(cx, cy, eps * viz.scale, 0, Math.PI * 2);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            viz.drawText('epsilon-disk', eps + 0.15, -eps - 0.1, viz.colors.yellow, 10);

                            // Generate eigenvalues
                            // Use a pseudo-random but deterministic seed
                            var eigs = [];
                            for (var i = 0; i < numEigs; i++) {
                                var mag = Math.pow(decayRate, i) * 0.9;
                                var angle = (i * 2.39996) + 0.5; // golden angle spacing
                                eigs.push({re: mag * Math.cos(angle), im: mag * Math.sin(angle), mag: mag});
                            }

                            // Draw eigenvalues
                            for (var i = 0; i < eigs.length; i++) {
                                var e = eigs[i];
                                var col = e.mag > eps ? viz.colors.blue : viz.colors.purple;
                                var sz = Math.max(3, 7 - i * 0.3);
                                viz.drawPoint(e.re, e.im, col, '', sz);
                            }

                            // Mark origin (0 in spectrum)
                            viz.drawPoint(0, 0, viz.colors.red, '0', 6);

                            // Count outside epsilon
                            var outsideCount = eigs.filter(function(e) { return e.mag > eps; }).length;
                            viz.screenText('Eigenvalues outside epsilon-disk: ' + outsideCount + ' (finitely many)', 20, viz.height - 40, viz.colors.yellow, 13, 'left');
                            viz.screenText('sigma(K) \\ {0} are all eigenvalues, accumulating only at 0', 20, viz.height - 20, viz.colors.text, 12, 'left');
                        }

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'viz-compact-spectrum-accumulation',
                    title: 'Eigenvalue Accumulation at Zero',
                    description: 'Watch eigenvalues of a compact operator converge to zero as more eigenvalues are revealed.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 350, scale: 1});
                        viz.originX = 0;
                        viz.originY = 0;
                        var ctx = viz.ctx;
                        var W = viz.width, H = viz.height;
                        var animN = 1;
                        var maxN = 25;
                        var running = false;
                        var animId = null;

                        VizEngine.createButton(controls, 'Animate', function() {
                            if (running) return;
                            running = true;
                            animN = 1;
                            function step() {
                                draw();
                                animN++;
                                if (animN <= maxN) {
                                    animId = setTimeout(step, 300);
                                } else {
                                    running = false;
                                }
                            }
                            step();
                        });
                        VizEngine.createButton(controls, 'Reset', function() {
                            running = false;
                            if (animId) clearTimeout(animId);
                            animN = 1;
                            draw();
                        });

                        function draw() {
                            ctx.fillStyle = viz.colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            var margin = 60;
                            var axisY = H / 2;
                            var barTop = axisY - 80;
                            var barBot = axisY + 80;

                            // Real axis
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(margin, axisY);
                            ctx.lineTo(W - margin, axisY);
                            ctx.stroke();

                            // Tick at 0
                            var zeroX = margin + 30;
                            ctx.strokeStyle = viz.colors.text;
                            ctx.beginPath();
                            ctx.moveTo(zeroX, axisY - 5);
                            ctx.lineTo(zeroX, axisY + 5);
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('0', zeroX, axisY + 20);

                            // Scale: map eigenvalue magnitude to x position
                            var maxMag = 1.2;
                            var plotW = W - 2 * margin - 60;
                            function magToX(m) { return zeroX + (m / maxMag) * plotW; }

                            // Eigenvalues: lambda_n = 1/n
                            for (var n = 1; n <= animN; n++) {
                                var lam = 1 / n;
                                var px = magToX(lam);
                                var col = viz.colors.blue;
                                ctx.fillStyle = col;
                                ctx.beginPath();
                                ctx.arc(px, axisY, 6, 0, Math.PI * 2);
                                ctx.fill();

                                // Label
                                var labelY = (n % 2 === 0) ? axisY - 20 : axisY + 28;
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('1/' + n, px, labelY);
                            }

                            // Mark zero accumulation point
                            ctx.fillStyle = viz.colors.red;
                            ctx.beginPath();
                            ctx.arc(zeroX, axisY, 5, 0, Math.PI * 2);
                            ctx.fill();

                            // Info
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Eigenvalues shown: ' + animN, margin, 30);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('Eigenvalues = {1/n : n = 1, 2, ...} accumulate at 0', margin, H - 20);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let K be a compact operator on a Banach space X. Prove that dim ker(I - K) < infinity using the Riesz lemma.',
                    hint: 'If ker(I - K) were infinite-dimensional, its closed unit ball would be compact. Why is that a contradiction?',
                    solution: 'On ker(I - K), we have Kx = x for all x, so K acts as the identity. If ker(I - K) is infinite-dimensional, the closed unit ball B of ker(I - K) satisfies K(B) = B, so B is compact (since K maps bounded sets to precompact sets). But the unit ball of an infinite-dimensional normed space is never compact (by the Riesz lemma), giving a contradiction. Hence dim ker(I - K) < infinity.'
                },
                {
                    question: 'Show that if lambda != 0 is not an eigenvalue of the compact operator K, then (lambda I - K)^{-1} exists and is bounded.',
                    hint: 'Write lambda I - K = lambda(I - K/lambda) and use the Fredholm alternative.',
                    solution: 'Since lambda != 0, we write lambda I - K = lambda(I - (1/lambda)K). The operator (1/lambda)K is compact. By the Riesz-Schauder theorem, I - (1/lambda)K is Fredholm of index 0. If lambda is not an eigenvalue, then ker(lambda I - K) = {0}, so ker(I - (1/lambda)K) = {0}. Since the index is 0, this implies coker = {0} also, meaning the range is all of X. Hence (lambda I - K) is bijective, and by the open mapping theorem, the inverse is bounded.'
                },
                {
                    question: 'Let K be a compact self-adjoint operator on a Hilbert space H with eigenvalues {lambda_n}. Prove that sum |lambda_n|^2 <= ||K||^2 if K is Hilbert-Schmidt.',
                    hint: 'Use the fact that for a Hilbert-Schmidt operator, ||K||_HS^2 = sum_n ||Ke_n||^2 for any orthonormal basis, and relate this to the eigenvalues.',
                    solution: 'Let {phi_n} be an orthonormal basis of eigenvectors of K (which exists since K is self-adjoint and compact). Then ||K||_HS^2 = sum_n ||K phi_n||^2 = sum_n |lambda_n|^2 * ||phi_n||^2 = sum_n |lambda_n|^2. Since ||K||_HS >= ||K||_op (Hilbert-Schmidt norm dominates operator norm), and the eigenvalue expansion gives ||K||_op = sup |lambda_n|, we have sum |lambda_n|^2 = ||K||_HS^2. In particular, if we only assume K is compact (not necessarily HS), then the Hilbert-Schmidt condition sum |lambda_n|^2 < infinity is equivalent to K being HS.'
                }
            ]
        },
        // ==================== SECTION 3 ====================
        {
            id: 'ch15-sec03',
            title: 'Fredholm Alternative',
            content: `<h2>The Fredholm Alternative</h2>
<p>The Fredholm alternative is one of the most elegant results in linear analysis. It provides a complete dichotomy for equations of the form \\((I - K)x = y\\): either the equation has a unique solution for every right-hand side, or the associated homogeneous equation has nontrivial solutions. There is no middle ground. This result is the infinite-dimensional generalization of the fact that an \\(n \\times n\\) matrix is either invertible or has a nontrivial null space.</p>

<div class="env-block theorem">
    <div class="env-title">Theorem (Fredholm Alternative)</div>
    <div class="env-body"><p>Let \\(X\\) be a Banach space and \\(K \\in \\mathcal{B}(X)\\) a compact operator. Then exactly one of the following holds:</p>
    <ol>
        <li><strong>Alternative I:</strong> The equation \\((I - K)x = y\\) has a unique solution \\(x \\in X\\) for every \\(y \\in X\\). Equivalently, \\(I - K\\) is invertible.</li>
        <li><strong>Alternative II:</strong> The homogeneous equation \\((I - K)x = 0\\) has a nontrivial solution. In this case, \\(\\dim \\ker(I - K) = \\dim \\ker(I - K^*) \\geq 1\\), and \\((I - K)x = y\\) is solvable if and only if \\(y \\perp \\ker(I - K^*)\\).</li>
    </ol></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof</div>
    <div class="env-body"><p>By the Riesz-Schauder theorem, \\(I - K\\) is Fredholm of index 0, so \\(\\dim \\ker(I - K) = \\dim \\operatorname{coker}(I - K) = \\dim \\ker(I - K^*)\\).</p>
    <p><strong>Case 1:</strong> If \\(\\ker(I - K) = \\{0\\}\\), then \\(\\dim \\ker(I - K^*) = 0\\) as well, so \\(\\operatorname{ran}(I - K) = X\\) (the cokernel is trivial). Thus \\(I - K\\) is bijective, and by the open mapping theorem, \\((I - K)^{-1}\\) is bounded.</p>
    <p><strong>Case 2:</strong> If \\(\\ker(I - K) \\neq \\{0\\}\\), then \\(\\dim \\ker(I - K^*) \\geq 1\\), and \\(\\operatorname{ran}(I - K)\\) is a proper closed subspace. The equation \\((I - K)x = y\\) is solvable if and only if \\(y \\in \\operatorname{ran}(I - K) = \\ker(I - K^*)^\\perp\\).</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem (Fredholm Alternative for Integral Equations)</div>
    <div class="env-body"><p>Consider the Fredholm integral equation of the second kind:</p>
    \\[f(x) - \\lambda \\int_a^b k(x,t)f(t)\\,dt = g(x), \\quad x \\in [a,b].\\]
    <p>Either:</p>
    <ol>
        <li>For every \\(g \\in L^2[a,b]\\), there exists a unique solution \\(f \\in L^2[a,b]\\), or</li>
        <li>The homogeneous equation \\(f(x) = \\lambda \\int_a^b k(x,t)f(t)\\,dt\\) has nontrivial solutions \\(\\{\\phi_1, \\ldots, \\phi_n\\}\\), and the inhomogeneous equation is solvable if and only if \\(\\int_a^b g(x)\\psi_j(x)\\,dx = 0\\) for all solutions \\(\\psi_j\\) of the adjoint homogeneous equation \\(\\psi(x) = \\bar{\\lambda}\\int_a^b \\overline{k(t,x)}\\psi(t)\\,dt\\).</li>
    </ol></div>
</div>

<div class="env-block intuition">
    <div class="env-title">Geometric Interpretation</div>
    <div class="env-body"><p>Think of \\(I - K\\) as a "near-identity" map. The Fredholm alternative says: either the map is a genuine bijection (no information is lost or created), or there is a finite-dimensional subspace that collapses to zero (the kernel), and correspondingly a finite-dimensional set of directions that are not reached (the cokernel). The index-zero condition ensures these two defects have the same dimension.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-fredholm-alternative-dichotomy"></div>
<div class="viz-placeholder" data-viz="viz-integral-equation-solvability"></div>`,
            visualizations: [
                {
                    id: 'viz-fredholm-alternative-dichotomy',
                    title: 'Fredholm Alternative: Two Cases',
                    description: 'Visualize the dichotomy: either (I-K) is invertible for all y, or ker(I-K) is nontrivial and solvability depends on orthogonality.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 1});
                        viz.originX = 0;
                        viz.originY = 0;
                        var ctx = viz.ctx;
                        var W = viz.width, H = viz.height;
                        var showCase = 1;

                        VizEngine.createButton(controls, 'Case I: Unique Solution', function() {
                            showCase = 1;
                            draw();
                        });
                        VizEngine.createButton(controls, 'Case II: Nontrivial Kernel', function() {
                            showCase = 2;
                            draw();
                        });

                        function draw() {
                            ctx.fillStyle = viz.colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            var midX = W / 2;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';

                            if (showCase === 1) {
                                ctx.fillText('Alternative I: (I - K) is invertible', midX, 30);

                                // Draw X -> Y bijection
                                var xc = 180, yc = 220, r = 100;
                                var x2c = 520;

                                // Domain
                                ctx.beginPath();
                                ctx.ellipse(xc, yc, r, 130, 0, 0, Math.PI * 2);
                                ctx.fillStyle = 'rgba(88,166,255,0.1)';
                                ctx.fill();
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 2;
                                ctx.stroke();
                                ctx.fillStyle = viz.colors.blue;
                                ctx.font = 'bold 16px -apple-system,sans-serif';
                                ctx.fillText('X', xc, 65);

                                // Codomain
                                ctx.beginPath();
                                ctx.ellipse(x2c, yc, r, 130, 0, 0, Math.PI * 2);
                                ctx.fillStyle = 'rgba(63,185,80,0.1)';
                                ctx.fill();
                                ctx.strokeStyle = viz.colors.green;
                                ctx.lineWidth = 2;
                                ctx.stroke();
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = 'bold 16px -apple-system,sans-serif';
                                ctx.fillText('Y', x2c, 65);

                                // Bijection arrows
                                var pts = [{y: 150}, {y: 200}, {y: 250}, {y: 300}];
                                for (var i = 0; i < pts.length; i++) {
                                    var py = pts[i].y;
                                    ctx.strokeStyle = viz.colors.teal;
                                    ctx.lineWidth = 1.5;
                                    ctx.beginPath();
                                    ctx.moveTo(xc + r + 10, py);
                                    ctx.lineTo(x2c - r - 20, py);
                                    ctx.stroke();
                                    // arrowhead
                                    var ax = x2c - r - 20;
                                    ctx.fillStyle = viz.colors.teal;
                                    ctx.beginPath();
                                    ctx.moveTo(ax, py);
                                    ctx.lineTo(ax - 8, py - 4);
                                    ctx.lineTo(ax - 8, py + 4);
                                    ctx.closePath();
                                    ctx.fill();
                                    // points
                                    ctx.fillStyle = viz.colors.blue;
                                    ctx.beginPath();
                                    ctx.arc(xc + 20, py, 4, 0, Math.PI * 2);
                                    ctx.fill();
                                    ctx.fillStyle = viz.colors.green;
                                    ctx.beginPath();
                                    ctx.arc(x2c - 20, py, 4, 0, Math.PI * 2);
                                    ctx.fill();
                                }

                                ctx.fillStyle = viz.colors.white;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.fillText('I - K', midX, 170);
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.fillText('bijection', midX, 190);

                                ctx.fillStyle = viz.colors.yellow;
                                ctx.font = '14px -apple-system,sans-serif';
                                ctx.fillText('ker(I - K) = {0}   and   ran(I - K) = Y', midX, H - 30);
                                ctx.fillText('For every y in Y, there is a unique x with (I-K)x = y', midX, H - 10);

                            } else {
                                ctx.fillText('Alternative II: ker(I - K) is nontrivial', midX, 30);

                                var xc = 180, yc = 220, r = 100;
                                var x2c = 520;

                                // Domain
                                ctx.beginPath();
                                ctx.ellipse(xc, yc, r, 130, 0, 0, Math.PI * 2);
                                ctx.fillStyle = 'rgba(88,166,255,0.1)';
                                ctx.fill();
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 2;
                                ctx.stroke();
                                ctx.fillStyle = viz.colors.blue;
                                ctx.font = 'bold 16px -apple-system,sans-serif';
                                ctx.fillText('X', xc, 65);

                                // Kernel inside X
                                ctx.beginPath();
                                ctx.ellipse(xc, yc + 70, 35, 35, 0, 0, Math.PI * 2);
                                ctx.fillStyle = 'rgba(248,81,73,0.2)';
                                ctx.fill();
                                ctx.strokeStyle = viz.colors.red;
                                ctx.lineWidth = 1.5;
                                ctx.stroke();
                                ctx.fillStyle = viz.colors.red;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('ker(I-K)', xc, yc + 70);

                                // Codomain
                                ctx.beginPath();
                                ctx.ellipse(x2c, yc, r, 130, 0, 0, Math.PI * 2);
                                ctx.fillStyle = 'rgba(63,185,80,0.05)';
                                ctx.fill();
                                ctx.strokeStyle = viz.colors.green;
                                ctx.lineWidth = 2;
                                ctx.stroke();
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = 'bold 16px -apple-system,sans-serif';
                                ctx.fillText('Y', x2c, 65);

                                // Range (proper subset)
                                ctx.beginPath();
                                ctx.ellipse(x2c, yc + 10, r - 15, 105, 0, 0, Math.PI * 2);
                                ctx.fillStyle = 'rgba(63,185,80,0.1)';
                                ctx.fill();
                                ctx.strokeStyle = viz.colors.teal;
                                ctx.lineWidth = 1.5;
                                ctx.setLineDash([4, 3]);
                                ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.fillStyle = viz.colors.teal;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.fillText('ran(I-K)', x2c, yc + 10);

                                // Cokernel direction
                                ctx.fillStyle = viz.colors.orange;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.fillText('coker', x2c + r - 25, yc - 110);

                                // Arrow
                                ctx.strokeStyle = viz.colors.white;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.moveTo(xc + r + 10, yc - 10);
                                ctx.lineTo(x2c - r - 20, yc - 10);
                                ctx.stroke();
                                var ax = x2c - r - 20;
                                ctx.fillStyle = viz.colors.white;
                                ctx.beginPath();
                                ctx.moveTo(ax, yc - 10);
                                ctx.lineTo(ax - 10, yc - 16);
                                ctx.lineTo(ax - 10, yc - 4);
                                ctx.closePath();
                                ctx.fill();
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.fillText('I - K', midX, yc - 30);

                                ctx.fillStyle = viz.colors.yellow;
                                ctx.font = '13px -apple-system,sans-serif';
                                ctx.fillText('dim ker(I-K) = dim ker(I-K*) >= 1', midX, H - 50);
                                ctx.fillText('(I-K)x = y solvable iff y is orthogonal to ker(I-K*)', midX, H - 30);
                                ctx.fillText('Solvability requires orthogonality conditions', midX, H - 10);
                            }
                        }

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'viz-integral-equation-solvability',
                    title: 'Integral Equation Solution Existence',
                    description: 'Explore when the Fredholm integral equation f - lambda Kf = g has a solution.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400, scale: 50});
                        var ctx = viz.ctx;
                        viz.originX = 100;
                        viz.originY = viz.height - 60;
                        var lambda = 0.5;
                        var gType = 0;

                        VizEngine.createSlider(controls, 'lambda', 0.1, 3.0, lambda, 0.1, function(v) {
                            lambda = v;
                            draw();
                        });
                        VizEngine.createButton(controls, 'g(x) = 1', function() { gType = 0; draw(); });
                        VizEngine.createButton(controls, 'g(x) = sin(pi x)', function() { gType = 1; draw(); });
                        VizEngine.createButton(controls, 'g(x) = x(1-x)', function() { gType = 2; draw(); });

                        function kernelK(x, t) {
                            return Math.sin(Math.PI * x) * Math.sin(Math.PI * t);
                        }

                        function gFunc(x) {
                            if (gType === 0) return 1;
                            if (gType === 1) return Math.sin(Math.PI * x);
                            return x * (1 - x);
                        }

                        function draw() {
                            viz.clear();

                            // Title
                            viz.screenText('f(x) - lambda * integral K(x,t)f(t)dt = g(x)', viz.width / 2, 20, viz.colors.white, 14);
                            viz.screenText('K(x,t) = sin(pi x) sin(pi t),  eigenvalue = 1/2 at lambda*=2', viz.width / 2, 40, viz.colors.text, 11);

                            // The kernel sin(pi x)sin(pi t) has eigenvalue 1/2 for eigenfunction sin(pi x)
                            // So lambda = 2 is the critical value
                            var criticalLambda = 2.0;
                            var isCritical = Math.abs(lambda - criticalLambda) < 0.15;

                            // Draw axes for the plot
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(viz.originX, viz.originY);
                            ctx.lineTo(viz.originX + 11 * viz.scale, viz.originY);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(viz.originX, viz.originY);
                            ctx.lineTo(viz.originX, viz.originY - 7 * viz.scale);
                            ctx.stroke();

                            // x-axis ticks
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            for (var i = 0; i <= 10; i += 2) {
                                var px = viz.originX + i * viz.scale;
                                ctx.beginPath();
                                ctx.moveTo(px, viz.originY);
                                ctx.lineTo(px, viz.originY + 4);
                                ctx.stroke();
                                ctx.fillText((i / 10).toFixed(1), px, viz.originY + 16);
                            }

                            // Plot g(x)
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= 200; i++) {
                                var x = i / 200;
                                var y = gFunc(x);
                                var px = viz.originX + x * 10 * viz.scale;
                                var py = viz.originY - y * viz.scale * 3;
                                if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Solve using Neumann series approximation (if |lambda| < 2)
                            // For this rank-1 kernel: solution is f = g + (lambda/2)/(1-lambda/2) * <g, sin(pi .)> sin(pi .)
                            // provided lambda != 2
                            var innerProd = 0;
                            var dx = 0.005;
                            for (var x = 0; x <= 1; x += dx) {
                                innerProd += gFunc(x) * Math.sin(Math.PI * x) * dx;
                            }

                            if (!isCritical) {
                                var coeff = (lambda / 2) / (1 - lambda / 2);
                                ctx.strokeStyle = viz.colors.green;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var i = 0; i <= 200; i++) {
                                    var x = i / 200;
                                    var y = gFunc(x) + coeff * innerProd * Math.sin(Math.PI * x);
                                    var px = viz.originX + x * 10 * viz.scale;
                                    var py = viz.originY - y * viz.scale * 3;
                                    if (py < 10) py = 10;
                                    if (py > viz.height - 10) py = viz.height - 10;
                                    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                                }
                                ctx.stroke();

                                viz.screenText('Solution f(x) exists and is unique', viz.width / 2, viz.height - 15, viz.colors.green, 13);
                            } else {
                                // Check solvability
                                if (Math.abs(innerProd) < 0.05) {
                                    viz.screenText('lambda = critical value: g satisfies orthogonality, infinitely many solutions', viz.width / 2, viz.height - 15, viz.colors.orange, 12);
                                } else {
                                    viz.screenText('lambda = critical value: <g, phi> != 0, NO SOLUTION EXISTS', viz.width / 2, viz.height - 15, viz.colors.red, 13);
                                }
                            }

                            // Legend
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillRect(viz.width - 160, 60, 15, 3);
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('g(x)', viz.width - 140, 65);
                            if (!isCritical) {
                                ctx.fillStyle = viz.colors.green;
                                ctx.fillRect(viz.width - 160, 80, 15, 3);
                                ctx.fillText('f(x) solution', viz.width - 140, 85);
                            }

                            viz.screenText('lambda = ' + lambda.toFixed(1) + (isCritical ? ' (CRITICAL)' : ''), viz.width - 100, 110, isCritical ? viz.colors.red : viz.colors.yellow, 12);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove the Fredholm alternative for the equation f(x) - lambda integral_0^1 k(x,t)f(t)dt = g(x) when k(x,t) = sin(pi x)sin(pi t), directly by computing eigenvalues.',
                    hint: 'The kernel has rank 1. Find the eigenvalue by computing integral_0^1 sin^2(pi t) dt.',
                    solution: 'The operator Kf(x) = integral_0^1 sin(pi x)sin(pi t)f(t)dt = sin(pi x) * <f, sin(pi .)>. So K has rank 1 with eigenfunction phi(x) = sin(pi x) and eigenvalue mu = integral_0^1 sin^2(pi t)dt = 1/2. The equation (I - lambda K)f = g becomes: f = g + lambda <f, phi> phi. Taking inner product with phi: <f, phi> = <g, phi> + lambda/2 <f, phi>, so <f, phi>(1 - lambda/2) = <g, phi>. If lambda != 2: <f, phi> = <g, phi>/(1-lambda/2), giving a unique solution f = g + (lambda <g,phi>)/(2-lambda) phi. If lambda = 2: solvable iff <g, phi> = 0, and solutions form f = g + c*phi for arbitrary c.'
                },
                {
                    question: 'Show that the Fredholm alternative cannot hold for general bounded (non-compact) operators by providing a counterexample.',
                    hint: 'Find a bounded operator T such that ker T = {0} but ran T is not all of X (so T is injective but not surjective, violating the dichotomy).',
                    solution: 'Consider the right shift R on l^2: R(x1, x2, ...) = (0, x1, x2, ...). Then ker R = {0} (R is injective), but ran R = {(y_n) : y_1 = 0} != l^2. So R is injective but not surjective. For I - R with R non-compact, the Fredholm alternative fails: ker(I - R) = {0} (one can verify no nonzero fixed point), yet (I - R) is not surjective — the equation (I - R)x = y need not have a solution for all y. The issue is that ind(I - R) != 0 since R is not compact.'
                },
                {
                    question: 'Let T = I - K where K is compact and self-adjoint on a Hilbert space H. If Tx = y is solvable, show that the solution of minimum norm is unique and lies in (ker T)^perp.',
                    hint: 'Decompose H = ker T + (ker T)^perp and show T is injective on (ker T)^perp.',
                    solution: 'Since T is Fredholm, ker T is finite-dimensional, so H = ker T + (ker T)^perp (orthogonal direct sum). If Tx = y has a solution x0, then any solution has the form x = x0 + z with z in ker T. Write x0 = u + v with u in ker T, v in (ker T)^perp. Then x = (u + z) + v, and ||x||^2 = ||u + z||^2 + ||v||^2 >= ||v||^2, with equality iff z = -u. So the minimum norm solution is x_min = v, which lies in (ker T)^perp. This is the unique element of (ker T)^perp mapping to y.'
                },
                {
                    question: 'Consider the Fredholm integral equation f(x) - integral_0^1 e^{x+t} f(t) dt = g(x). Determine for which g this equation has a solution.',
                    hint: 'Factor the kernel: e^{x+t} = e^x * e^t. This is a rank-1 kernel.',
                    solution: 'The operator Kf(x) = integral_0^1 e^{x+t} f(t) dt = e^x integral_0^1 e^t f(t) dt. This is rank 1 with K = e^x <., e^t>. The eigenvalue is mu = integral_0^1 e^{2t} dt = (e^2 - 1)/2 approx 3.19. Since lambda = 1 and mu approx 3.19, we have lambda*mu = 3.19 != 1, so I - K is invertible (Alternative I applies). The equation has a unique solution for all g. Explicitly: f = g + c e^x where c = <g, e^t>/(1 - (e^2-1)/2).'
                }
            ]
        },
        // ==================== SECTION 4 ====================
        {
            id: 'ch15-sec04',
            title: 'Index Theory',
            content: `<h2>Index Theory</h2>
<p>The Fredholm index is a remarkably robust invariant. It is stable under compact perturbations and continuous under small perturbations in operator norm. These stability properties make the index a topological invariant — it captures deep structural information about operators that is immune to "small" or "finite-rank" changes.</p>

<div class="env-block theorem">
    <div class="env-title">Theorem (Stability Under Compact Perturbations)</div>
    <div class="env-body"><p>Let \\(T \\in \\Phi(X,Y)\\) be a Fredholm operator and \\(K \\in \\mathcal{K}(X,Y)\\) a compact operator. Then \\(T + K\\) is Fredholm and</p>
    \\[\\operatorname{ind}(T + K) = \\operatorname{ind}(T).\\]</div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof Sketch</div>
    <div class="env-body"><p>Since \\(T\\) is Fredholm, there exists a parametrix \\(S\\) (approximate inverse) such that \\(ST = I - K_1\\) and \\(TS = I - K_2\\) with \\(K_1, K_2\\) compact. Then \\(S(T + K) = I - K_1 + SK\\), where \\(K_1 - SK\\) is compact. So \\(T + K\\) has a parametrix, hence is Fredholm. The index is preserved because the path \\(T + tK\\) consists entirely of Fredholm operators (for \\(t \\in [0,1]\\)) and the index is continuous and integer-valued, hence constant.</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem (Local Constancy of Index)</div>
    <div class="env-body"><p>The set \\(\\Phi(X,Y)\\) of Fredholm operators is open in \\(\\mathcal{B}(X,Y)\\), and the index function</p>
    \\[\\operatorname{ind}: \\Phi(X,Y) \\to \\mathbb{Z}\\]
    <p>is continuous (hence locally constant, since \\(\\mathbb{Z}\\) is discrete). That is, if \\(T\\) is Fredholm and \\(\\|S - T\\|\\) is sufficiently small, then \\(S\\) is Fredholm with \\(\\operatorname{ind}(S) = \\operatorname{ind}(T)\\).</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem (Atkinson's Theorem)</div>
    <div class="env-body"><p>Let \\(X\\) and \\(Y\\) be Banach spaces. An operator \\(T \\in \\mathcal{B}(X,Y)\\) is Fredholm if and only if its image \\(\\pi(T)\\) in the Calkin algebra \\(\\mathcal{B}(X,Y)/\\mathcal{K}(X,Y)\\) is invertible. That is,</p>
    \\[T \\in \\Phi(X,Y) \\iff \\exists S \\in \\mathcal{B}(Y,X) \\text{ such that } ST - I_X \\in \\mathcal{K}(X) \\text{ and } TS - I_Y \\in \\mathcal{K}(Y).\\]
    <p>Such an \\(S\\) is called a <strong>parametrix</strong> (or Fredholm inverse) of \\(T\\).</p></div>
</div>

<div class="env-block remark">
    <div class="env-title">Remark (The Calkin Algebra Perspective)</div>
    <div class="env-body"><p>Atkinson's theorem says that Fredholm operators are precisely those that become invertible modulo compact operators. The Calkin algebra \\(\\mathcal{Q}(X) = \\mathcal{B}(X)/\\mathcal{K}(X)\\) is the quotient algebra obtained by "ignoring" compact operators. From this viewpoint, the Fredholm index is a homomorphism from the group of invertible elements in \\(\\mathcal{Q}(X)\\) to \\(\\mathbb{Z}\\).</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example (Index Stability)</div>
    <div class="env-body"><p>Let \\(L\\) be the left shift on \\(\\ell^2\\) with \\(\\operatorname{ind}(L) = 1\\). For any compact operator \\(K\\) on \\(\\ell^2\\), \\(\\operatorname{ind}(L + K) = 1\\). The kernel dimension may change (it could increase or decrease), but the difference \\(\\dim \\ker(L+K) - \\dim \\ker(L+K)^*\\) remains 1.</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-index-stability-perturbation"></div>
<div class="viz-placeholder" data-viz="viz-calkin-algebra-picture"></div>`,
            visualizations: [
                {
                    id: 'viz-index-stability-perturbation',
                    title: 'Index Stability Under Perturbations',
                    description: 'Perturb a Fredholm operator and observe that the index remains constant even as kernel and cokernel dimensions change.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 1});
                        viz.originX = 0;
                        viz.originY = 0;
                        var ctx = viz.ctx;
                        var W = viz.width, H = viz.height;
                        var pertSize = 0;
                        var baseIndex = 1;

                        VizEngine.createSlider(controls, 'Base index', -3, 3, baseIndex, 1, function(v) {
                            baseIndex = Math.round(v);
                            draw();
                        });
                        VizEngine.createSlider(controls, 'Compact perturbation size', 0, 5, pertSize, 1, function(v) {
                            pertSize = Math.round(v);
                            draw();
                        });

                        function draw() {
                            ctx.fillStyle = viz.colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Index Stability: ind(T + K) = ind(T)', W / 2, 30);

                            // Base operator
                            var baseKer = Math.max(0, baseIndex);
                            var baseCoker = Math.max(0, -baseIndex);

                            // Perturbed: kernel and cokernel can change, but difference stays same
                            var pertKer = baseKer + pertSize;
                            var pertCoker = baseCoker + pertSize;

                            var colW = 280, gap = 80;
                            var x1 = (W - 2 * colW - gap) / 2;
                            var x2 = x1 + colW + gap;
                            var topY = 70;

                            // Box for T
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.strokeRect(x1, topY, colW, 280);
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Original T', x1 + colW / 2, topY - 10);

                            // Bar chart for T
                            var barW = 80, barMaxH = 150;
                            var barY = topY + 220;
                            // Kernel bar
                            var kerH = Math.min(baseKer * 30 + 10, barMaxH);
                            if (baseKer === 0) kerH = 5;
                            ctx.fillStyle = viz.colors.red;
                            ctx.fillRect(x1 + 40, barY - kerH, barW, kerH);
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('ker T', x1 + 40 + barW / 2, barY + 15);
                            ctx.fillText('dim = ' + baseKer, x1 + 40 + barW / 2, barY - kerH - 8);

                            // Cokernel bar
                            var cokerH = Math.min(baseCoker * 30 + 10, barMaxH);
                            if (baseCoker === 0) cokerH = 5;
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillRect(x1 + 160, barY - cokerH, barW, cokerH);
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('coker T', x1 + 160 + barW / 2, barY + 15);
                            ctx.fillText('dim = ' + baseCoker, x1 + 160 + barW / 2, barY - cokerH - 8);

                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillText('ind(T) = ' + baseIndex, x1 + colW / 2, topY + 265);

                            // Box for T + K
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 2;
                            ctx.strokeRect(x2, topY, colW, 280);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.fillText('Perturbed T + K', x2 + colW / 2, topY - 10);

                            // Kernel bar for T+K
                            var pertKerH = Math.min(pertKer * 30 + 10, barMaxH);
                            if (pertKer === 0) pertKerH = 5;
                            ctx.fillStyle = viz.colors.red;
                            ctx.fillRect(x2 + 40, barY - pertKerH, barW, pertKerH);
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('ker(T+K)', x2 + 40 + barW / 2, barY + 15);
                            ctx.fillText('dim = ' + pertKer, x2 + 40 + barW / 2, barY - pertKerH - 8);

                            // Cokernel bar for T+K
                            var pertCokerH = Math.min(pertCoker * 30 + 10, barMaxH);
                            if (pertCoker === 0) pertCokerH = 5;
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillRect(x2 + 160, barY - pertCokerH, barW, pertCokerH);
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('coker(T+K)', x2 + 160 + barW / 2, barY + 15);
                            ctx.fillText('dim = ' + pertCoker, x2 + 160 + barW / 2, barY - pertCokerH - 8);

                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillText('ind(T+K) = ' + (pertKer - pertCoker), x2 + colW / 2, topY + 265);

                            // Equality
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = 'bold 18px -apple-system,sans-serif';
                            ctx.fillText('=', W / 2, topY + 265);

                            // Bottom note
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('Compact perturbation K changes ker and coker dimensions equally, preserving the index', W / 2, H - 15);
                        }

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'viz-calkin-algebra-picture',
                    title: 'The Calkin Algebra and Atkinson\'s Theorem',
                    description: 'Visualize how operators project to the Calkin algebra, where Fredholm operators become invertible elements.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 400, scale: 1});
                        viz.originX = 0;
                        viz.originY = 0;
                        var ctx = viz.ctx;
                        var W = viz.width, H = viz.height;
                        var t = 0;

                        function draw() {
                            ctx.fillStyle = viz.colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            // B(X) big circle
                            var cx1 = 200, cy = 200, r1 = 150;
                            ctx.beginPath();
                            ctx.ellipse(cx1, cy, r1, r1, 0, 0, Math.PI * 2);
                            ctx.fillStyle = 'rgba(88,166,255,0.05)';
                            ctx.fill();
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('B(X)', cx1, cy - r1 - 15);

                            // K(X) inside B(X)
                            var rk = 50;
                            ctx.beginPath();
                            ctx.ellipse(cx1, cy + 40, rk, rk, 0, 0, Math.PI * 2);
                            ctx.fillStyle = 'rgba(248,81,73,0.15)';
                            ctx.fill();
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 1.5;
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.red;
                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.fillText('K(X)', cx1, cy + 40);
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText('compact ops', cx1, cy + 55);

                            // Fredholm region (annular)
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([5, 3]);
                            ctx.beginPath();
                            ctx.ellipse(cx1, cy - 20, r1 - 25, r1 - 40, 0, 0, Math.PI * 2);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillText('Fredholm', cx1 + r1 - 60, cy - r1 + 50);
                            ctx.fillText('operators', cx1 + r1 - 60, cy - r1 + 65);

                            // Arrow: quotient map
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(cx1 + r1 + 20, cy);
                            ctx.lineTo(cx1 + r1 + 100, cy);
                            ctx.stroke();
                            var ax = cx1 + r1 + 100;
                            ctx.fillStyle = viz.colors.white;
                            ctx.beginPath();
                            ctx.moveTo(ax, cy);
                            ctx.lineTo(ax - 10, cy - 6);
                            ctx.lineTo(ax - 10, cy + 6);
                            ctx.closePath();
                            ctx.fill();
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('quotient', cx1 + r1 + 60, cy - 15);
                            ctx.fillText('pi: T -> [T]', cx1 + r1 + 60, cy + 20);

                            // Calkin algebra
                            var cx2 = 550, r2 = 100;
                            ctx.beginPath();
                            ctx.ellipse(cx2, cy, r2, r2, 0, 0, Math.PI * 2);
                            ctx.fillStyle = 'rgba(63,185,160,0.08)';
                            ctx.fill();
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 2;
                            ctx.stroke();
                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.fillText('Q(X) = B(X)/K(X)', cx2, cy - r2 - 15);
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('Calkin algebra', cx2, cy - r2 + 5);

                            // Zero in Calkin
                            ctx.fillStyle = viz.colors.red;
                            ctx.beginPath();
                            ctx.arc(cx2, cy + 30, 6, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.fillStyle = viz.colors.red;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('[0] = K(X)', cx2, cy + 50);

                            // Invertible elements
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath();
                            ctx.ellipse(cx2, cy - 15, r2 - 20, r2 - 30, 0, 0, Math.PI * 2);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('invertible', cx2, cy - 30);
                            ctx.fillText('= pi(Fredholm)', cx2, cy - 15);

                            // Bottom text
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Atkinson: T is Fredholm iff [T] is invertible in Q(X)', W / 2, H - 40);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('ind: pi_0(GL(Q(X))) -> Z is the connecting map in K-theory', W / 2, H - 18);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that the set of Fredholm operators is open in B(X,Y). Specifically, show that if T is Fredholm and ||S - T|| < 1/||T^{-1}_partial||, then S is Fredholm.',
                    hint: 'Use the parametrix: if S has a left approximate inverse modulo compacts, then S is Fredholm. Show the Neumann series argument works for the parametrix.',
                    solution: 'Let T be Fredholm with parametrix P: PT = I - K1, TP = I - K2 (K1, K2 compact). For S near T, write PS = P(T + (S-T)) = I - K1 + P(S-T). If ||P(S-T)|| < 1, then I - K1 + P(S-T) = (I + P(S-T))(I - (I+P(S-T))^{-1}K1). The first factor is invertible (Neumann series), and K1 is compact, so PS = invertible - compact term. Therefore S has a left parametrix, hence is Fredholm. Similarly for the right parametrix. The index is preserved since the path T + t(S-T) stays in the Fredholm operators for ||S-T|| small enough, and ind is continuous and integer-valued.'
                },
                {
                    question: 'Let T be Fredholm of index 0. Show that T = S + K where S is invertible and K is a finite-rank (hence compact) operator.',
                    hint: 'Since ind(T) = 0, dim ker T = dim coker T = n. Construct a finite-rank operator that maps a basis of ker T onto elements spanning a complement of ran T.',
                    solution: 'Let {x1,...,xn} be a basis for ker T and {y1,...,yn} be a basis for a complement of ran T in Y (this complement has dimension n = dim coker T since ind = 0). Choose functionals f1,...,fn in X* with fi(xj) = delta_ij (possible by Hahn-Banach since ker T is finite-dimensional). Define K(x) = sum_{i=1}^n fi(x) yi. Then K is finite-rank. We claim S = T + K is invertible. If Sx = 0, then Tx = -Kx in ran T intersect span{yi} = {0}, so Tx = 0 and Kx = 0. But Tx = 0 means x in ker T, so x = sum ci xi, and Kx = sum ci yi = 0 implies ci = 0, hence x = 0. Surjectivity follows since ind(S) = ind(T) = 0 and ker S = {0}.'
                },
                {
                    question: 'Use Atkinson\'s theorem to prove the index formula ind(TS) = ind(T) + ind(S) for Fredholm operators T and S.',
                    hint: 'In the Calkin algebra, [TS] = [T][S]. The index is a group homomorphism from the invertible elements of Q(X) to Z.',
                    solution: 'By Atkinson\'s theorem, T is Fredholm iff pi(T) is invertible in Q(X). In Q(X), pi(TS) = pi(T)pi(S). Since pi(T) and pi(S) are invertible, so is pi(TS), confirming TS is Fredholm. For the index formula, consider the map ind: Phi(X) -> Z. The homotopy (T, tS + (1-t)I) shows that ind varies continuously in the Fredholm operators, and ind(I) = 0. More directly, one can show ind is a group homomorphism by constructing explicit parametrices: if P is a parametrix for T and Q for S, then QP is a parametrix for TS, and tracking the compact error terms gives ind(TS) = ind(T) + ind(S).'
                }
            ]
        },
        // ==================== SECTION 5 ====================
        {
            id: 'ch15-sec05',
            title: 'Applications to Integral Equations',
            content: `<h2>Applications to Integral Equations</h2>
<p>Fredholm theory finds its most classical and illuminating applications in the study of integral equations. The two main types — Volterra and Fredholm equations of the second kind — have strikingly different behaviors, both explained by the underlying operator theory.</p>

<div class="env-block definition">
    <div class="env-title">Definition (Integral Equations of the Second Kind)</div>
    <div class="env-body"><p>A <strong>Fredholm integral equation of the second kind</strong> is:</p>
    \\[f(x) - \\lambda \\int_a^b k(x,t) f(t)\\,dt = g(x), \\quad x \\in [a,b],\\]
    <p>where \\(k\\) is the kernel, \\(\\lambda\\) is a parameter, and \\(g\\) is given.</p>
    <p>A <strong>Volterra integral equation of the second kind</strong> is:</p>
    \\[f(x) - \\lambda \\int_a^x k(x,t) f(t)\\,dt = g(x), \\quad x \\in [a,b].\\]
    <p>The key difference: the upper limit of integration is \\(x\\) (variable) in the Volterra case, and \\(b\\) (fixed) in the Fredholm case.</p></div>
</div>

<div class="env-block theorem">
    <div class="env-title">Theorem (Volterra Equations Always Have Unique Solutions)</div>
    <div class="env-body"><p>Let \\(k \\in C([a,b]^2)\\). The Volterra operator \\(V: C[a,b] \\to C[a,b]\\) defined by</p>
    \\[(Vf)(x) = \\int_a^x k(x,t)f(t)\\,dt\\]
    <p>is compact and <strong>quasinilpotent</strong>: \\(\\sigma(V) = \\{0\\}\\). Consequently, for any \\(\\lambda \\neq 0\\) and any \\(g\\), the Volterra equation \\(f - \\lambda Vf = g\\) has a unique solution.</p></div>
</div>

<div class="env-block proof">
    <div class="env-title">Proof Sketch</div>
    <div class="env-body"><p>One shows by induction that \\(\\|V^n\\| \\leq M^n (b-a)^n / n!\\), where \\(M = \\sup|k|\\). Therefore the spectral radius \\(r(V) = \\lim \\|V^n\\|^{1/n} = 0\\). The resolvent \\((I - \\lambda V)^{-1} = \\sum_{n=0}^\\infty \\lambda^n V^n\\) converges for all \\(\\lambda\\), giving the unique solution via the Neumann series.</p></div>
</div>

<div class="env-block definition">
    <div class="env-title">Definition (Resolvent Kernel)</div>
    <div class="env-body"><p>The <strong>resolvent kernel</strong> (or iterated kernel) is defined by:</p>
    \\[k_1(x,t) = k(x,t), \\quad k_n(x,t) = \\int_a^b k(x,s)k_{n-1}(s,t)\\,ds \\quad (\\text{Fredholm}),\\]
    \\[k_1(x,t) = k(x,t), \\quad k_n(x,t) = \\int_t^x k(x,s)k_{n-1}(s,t)\\,ds \\quad (\\text{Volterra}).\\]
    <p>The solution is then \\(f(x) = g(x) + \\lambda \\int R(x,t;\\lambda) g(t)\\,dt\\), where \\(R(x,t;\\lambda) = \\sum_{n=1}^\\infty \\lambda^{n-1} k_n(x,t)\\).</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example (Volterra Equation with Exponential Kernel)</div>
    <div class="env-body"><p>Solve \\(f(x) - \\int_0^x e^{x-t} f(t)\\,dt = 1\\).</p>
    <p>Setting \\(\\lambda = 1\\), \\(k(x,t) = e^{x-t}\\), we compute iterated kernels:</p>
    <ul>
        <li>\\(k_1(x,t) = e^{x-t}\\)</li>
        <li>\\(k_2(x,t) = \\int_t^x e^{x-s}e^{s-t}\\,ds = (x-t)e^{x-t}\\)</li>
        <li>\\(k_n(x,t) = \\frac{(x-t)^{n-1}}{(n-1)!}e^{x-t}\\)</li>
    </ul>
    <p>The resolvent kernel is \\(R(x,t) = \\sum_{n=0}^\\infty \\frac{(x-t)^n}{n!}e^{x-t} = e^{x-t}e^{x-t} = e^{2(x-t)}\\).</p>
    <p>So \\(f(x) = 1 + \\int_0^x e^{2(x-t)}\\,dt = 1 + \\frac{1}{2}(e^{2x} - 1) = \\frac{1}{2}(e^{2x} + 1)\\).</p></div>
</div>

<div class="env-block example">
    <div class="env-title">Example (Fredholm Equation with Degenerate Kernel)</div>
    <div class="env-body"><p>Consider \\(f(x) - \\lambda \\int_0^1 xt\\, f(t)\\,dt = g(x)\\). The kernel \\(k(x,t) = xt\\) is degenerate (rank 1). Write \\(c = \\int_0^1 t f(t)\\,dt\\), so \\(f(x) = g(x) + \\lambda c x\\). Substituting back:</p>
    \\[c = \\int_0^1 t[g(t) + \\lambda c t]\\,dt = \\int_0^1 tg(t)\\,dt + \\frac{\\lambda c}{3}.\\]
    <p>So \\(c(1 - \\lambda/3) = \\int_0^1 tg(t)\\,dt\\). If \\(\\lambda \\neq 3\\), \\(c = \\frac{\\int_0^1 tg(t)\\,dt}{1 - \\lambda/3}\\) and \\(f\\) is uniquely determined. If \\(\\lambda = 3\\), solvability requires \\(\\int_0^1 tg(t)\\,dt = 0\\).</p></div>
</div>

<div class="viz-placeholder" data-viz="viz-volterra-iteration"></div>
<div class="viz-placeholder" data-viz="viz-fredholm-vs-volterra"></div>`,
            visualizations: [
                {
                    id: 'viz-volterra-iteration',
                    title: 'Volterra Equation: Iterative Solution (Neumann Series)',
                    description: 'Watch the Neumann series converge to the solution of a Volterra integral equation step by step.',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 420, scale: 50});
                        var ctx = viz.ctx;
                        viz.originX = 80;
                        viz.originY = viz.height - 60;
                        var maxIter = 1;
                        var lambda = 1.0;
                        var running = false;
                        var animId = null;

                        VizEngine.createSlider(controls, 'lambda', 0.5, 3.0, lambda, 0.1, function(v) {
                            lambda = v;
                            draw();
                        });
                        VizEngine.createButton(controls, 'Animate Iterations', function() {
                            if (running) return;
                            running = true;
                            maxIter = 0;
                            function step() {
                                maxIter++;
                                draw();
                                if (maxIter < 12) {
                                    animId = setTimeout(step, 500);
                                } else {
                                    running = false;
                                }
                            }
                            step();
                        });
                        VizEngine.createButton(controls, 'Reset', function() {
                            running = false;
                            if (animId) clearTimeout(animId);
                            maxIter = 1;
                            draw();
                        });

                        function draw() {
                            viz.clear();

                            // Equation: f(x) - lambda * int_0^x f(t)dt = 1
                            // Kernel k(x,t) = 1, exact solution: f(x) = exp(lambda * x)
                            viz.screenText('f(x) - lambda * integral_0^x f(t) dt = 1', viz.width / 2, 20, viz.colors.white, 14);
                            viz.screenText('Kernel: k(x,t) = 1.  Exact solution: f(x) = exp(lambda x)', viz.width / 2, 40, viz.colors.text, 11);

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(viz.originX, viz.originY);
                            ctx.lineTo(viz.originX + 11 * viz.scale, viz.originY);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(viz.originX, viz.originY);
                            ctx.lineTo(viz.originX, viz.originY - 7 * viz.scale);
                            ctx.stroke();

                            // Ticks
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            for (var i = 0; i <= 10; i += 2) {
                                var px = viz.originX + i * viz.scale;
                                ctx.beginPath();
                                ctx.moveTo(px, viz.originY);
                                ctx.lineTo(px, viz.originY + 4);
                                ctx.stroke();
                                ctx.fillText((i / 10).toFixed(1), px, viz.originY + 16);
                            }
                            ctx.textAlign = 'right';
                            for (var j = 0; j <= 6; j++) {
                                var py = viz.originY - j * viz.scale;
                                ctx.beginPath();
                                ctx.moveTo(viz.originX - 4, py);
                                ctx.lineTo(viz.originX, py);
                                ctx.stroke();
                                ctx.fillText(j, viz.originX - 6, py + 3);
                            }

                            // Exact solution
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 3]);
                            ctx.beginPath();
                            for (var i = 0; i <= 200; i++) {
                                var x = i / 200;
                                var y = Math.exp(lambda * x);
                                var px = viz.originX + x * 10 * viz.scale;
                                var py = viz.originY - y * viz.scale;
                                if (py < 10) break;
                                if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Neumann series iterates: f_n(x) = sum_{k=0}^{n} (lambda x)^k / k!
                            var colors = [viz.colors.blue, viz.colors.teal, viz.colors.green, viz.colors.orange,
                                          viz.colors.purple, viz.colors.pink, viz.colors.yellow, viz.colors.red,
                                          viz.colors.blue, viz.colors.teal, viz.colors.green, viz.colors.orange];

                            for (var n = 0; n < maxIter; n++) {
                                ctx.strokeStyle = colors[n % colors.length];
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                for (var i = 0; i <= 200; i++) {
                                    var x = i / 200;
                                    var y = 0;
                                    var term = 1;
                                    for (var k = 0; k <= n; k++) {
                                        if (k > 0) term *= (lambda * x) / k;
                                        y += term;
                                    }
                                    var px = viz.originX + x * 10 * viz.scale;
                                    var py = viz.originY - y * viz.scale;
                                    if (py < 10) py = 10;
                                    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                                }
                                ctx.stroke();
                            }

                            // Legend
                            ctx.textAlign = 'left';
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('--- exact: exp(lambda x)', viz.width - 200, 70);
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Iterations: ' + maxIter, viz.width - 200, 90);
                            ctx.fillText('lambda = ' + lambda.toFixed(1), viz.width - 200, 110);

                            viz.screenText('Neumann series ALWAYS converges (Volterra: spectral radius = 0)', viz.width / 2, viz.height - 10, viz.colors.green, 12);
                        }

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'viz-fredholm-vs-volterra',
                    title: 'Fredholm vs Volterra: Kernel Structure',
                    description: 'Compare the triangular kernel of Volterra equations (always solvable) with the full kernel of Fredholm equations (solvability depends on lambda).',
                    setup: function(body, controls) {
                        var viz = new VizEngine(body, {width: 700, height: 380, scale: 1});
                        viz.originX = 0;
                        viz.originY = 0;
                        var ctx = viz.ctx;
                        var W = viz.width, H = viz.height;
                        var showType = 'both';

                        VizEngine.createButton(controls, 'Show Both', function() { showType = 'both'; draw(); });
                        VizEngine.createButton(controls, 'Fredholm Only', function() { showType = 'fredholm'; draw(); });
                        VizEngine.createButton(controls, 'Volterra Only', function() { showType = 'volterra'; draw(); });

                        function drawKernelHeatmap(ox, oy, size, isVolterra, title) {
                            var n = 40;
                            var cellSize = size / n;

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(title, ox + size / 2, oy - 10);

                            for (var i = 0; i < n; i++) {
                                for (var j = 0; j < n; j++) {
                                    var x = i / n, t = j / n;
                                    var val;
                                    if (isVolterra) {
                                        val = (t <= x) ? Math.sin(Math.PI * x) * Math.cos(Math.PI * t / 2) : 0;
                                    } else {
                                        val = Math.sin(Math.PI * x) * Math.cos(Math.PI * t / 2);
                                    }
                                    var intensity = Math.abs(val);
                                    var r, g, b;
                                    if (val >= 0) {
                                        r = Math.round(88 + intensity * 100);
                                        g = Math.round(166 - intensity * 50);
                                        b = 255;
                                    } else {
                                        r = 255;
                                        g = Math.round(100 - intensity * 50);
                                        b = Math.round(100 - intensity * 50);
                                    }
                                    if (isVolterra && t > x) {
                                        r = 12; g = 12; b = 32;
                                    }
                                    ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
                                    ctx.fillRect(ox + i * cellSize, oy + j * cellSize, cellSize + 0.5, cellSize + 0.5);
                                }
                            }

                            // Border
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.strokeRect(ox, oy, size, size);

                            // Labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('x', ox + size / 2, oy + size + 18);
                            ctx.save();
                            ctx.translate(ox - 15, oy + size / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillText('t', 0, 0);
                            ctx.restore();

                            // Diagonal line for Volterra
                            if (isVolterra) {
                                ctx.strokeStyle = viz.colors.yellow;
                                ctx.lineWidth = 1.5;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath();
                                ctx.moveTo(ox, oy);
                                ctx.lineTo(ox + size, oy + size);
                                ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.fillStyle = viz.colors.yellow;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.fillText('t = x', ox + size - 20, oy + size - 5);
                            }
                        }

                        function draw() {
                            ctx.fillStyle = viz.colors.bg;
                            ctx.fillRect(0, 0, W, H);

                            var size = 220;
                            var topY = 50;

                            if (showType === 'both' || showType === 'fredholm') {
                                var ox = showType === 'both' ? 70 : (W - size) / 2;
                                drawKernelHeatmap(ox, topY, size, false, 'Fredholm kernel k(x,t)');
                                ctx.fillStyle = viz.colors.blue;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Full [a,b] x [a,b] support', ox + size / 2, topY + size + 35);
                                ctx.fillText('May have eigenvalues => resonances', ox + size / 2, topY + size + 52);
                            }
                            if (showType === 'both' || showType === 'volterra') {
                                var ox2 = showType === 'both' ? 400 : (W - size) / 2;
                                drawKernelHeatmap(ox2, topY, size, true, 'Volterra kernel k(x,t)');
                                ctx.fillStyle = viz.colors.teal;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Triangular support: t <= x', ox2 + size / 2, topY + size + 35);
                                ctx.fillText('Quasinilpotent => always solvable', ox2 + size / 2, topY + size + 52);
                            }

                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('The triangular structure of Volterra kernels forces the spectral radius to be 0', W / 2, H - 15);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that the Volterra operator Vf(x) = integral_0^x f(t) dt on C[0,1] satisfies ||V^n|| <= 1/n!, and conclude that sigma(V) = {0}.',
                    hint: 'Show by induction that (V^n f)(x) = integral_0^x (x-t)^{n-1}/(n-1)! f(t) dt. Then estimate the sup norm.',
                    solution: 'By induction: (V^1 f)(x) = integral_0^x f(t)dt. Assume (V^n f)(x) = integral_0^x ((x-t)^{n-1}/(n-1)!) f(t) dt. Then (V^{n+1} f)(x) = integral_0^x (V^n f)(s) ds = integral_0^x integral_0^s ((s-t)^{n-1}/(n-1)!) f(t) dt ds. Switching the order: = integral_0^x f(t) integral_t^x ((s-t)^{n-1}/(n-1)!) ds dt = integral_0^x f(t) (x-t)^n/n! dt. So ||V^n f||_infty <= ||f||_infty * sup_x integral_0^x (x-t)^{n-1}/(n-1)! dt = ||f||_infty * 1/n!. Hence ||V^n|| <= 1/n!, giving r(V) = lim (1/n!)^{1/n} = 0. Therefore sigma(V) = {0}.'
                },
                {
                    question: 'Solve the Fredholm equation f(x) - 2 integral_0^1 (3x^2 t + 2x t^2) f(t) dt = x using the method of degenerate kernels.',
                    hint: 'The kernel k(x,t) = 3x^2 t + 2x t^2 is degenerate of rank 2. Set c1 = integral_0^1 t f(t) dt and c2 = integral_0^1 t^2 f(t) dt.',
                    solution: 'Write f(x) = x + 2(3x^2 c1 + 2x c2) = x + 6c1 x^2 + 4c2 x, where c1 = integral_0^1 t f(t) dt and c2 = integral_0^1 t^2 f(t) dt. Substituting: c1 = integral_0^1 t(t + 6c1 t^2 + 4c2 t) dt = 1/3 + 6c1/4 + 4c2/3 = 1/3 + 3c1/2 + 4c2/3. And c2 = integral_0^1 t^2(t + 6c1 t^2 + 4c2 t) dt = 1/4 + 6c1/5 + 4c2/4 = 1/4 + 6c1/5 + c2. From the second equation: 0 = 1/4 + 6c1/5, so c1 = -5/24. From the first: c1(1 - 3/2) = 1/3 + 4c2/3, giving -c1/2 = 1/3 + 4c2/3, so 5/48 = 1/3 + 4c2/3, giving c2 = (5/48 - 1/3)/(4/3) = (5/48 - 16/48)/(4/3) = (-11/48)(3/4) = -11/64. Then f(x) = x + 6(-5/24)x^2 + 4(-11/64)x = x - 5x^2/4 - 11x/16 = 5x/16 - 5x^2/4.'
                },
                {
                    question: 'Show that the resolvent kernel for the Volterra equation with k(x,t) = 1 and lambda = 1 is R(x,t) = e^{x-t}, and verify the solution formula for f(x) - integral_0^x f(t) dt = g(x).',
                    hint: 'Compute the iterated kernels k_n(x,t) = (x-t)^{n-1}/(n-1)! and sum the geometric-like series.',
                    solution: 'The iterated kernels are k_1(x,t) = 1, and k_n(x,t) = integral_t^x k_{n-1}(s,t) ds. By induction, k_n(x,t) = (x-t)^{n-1}/(n-1)!. The resolvent kernel is R(x,t;1) = sum_{n=1}^infty k_n(x,t) = sum_{n=1}^infty (x-t)^{n-1}/(n-1)! = sum_{m=0}^infty (x-t)^m/m! = e^{x-t}. The solution formula gives f(x) = g(x) + integral_0^x e^{x-t} g(t) dt. We verify: integral_0^x f(t)dt = integral_0^x [g(t) + integral_0^t e^{t-s} g(s) ds] dt = integral_0^x g(t) dt + integral_0^x g(s) integral_s^x e^{t-s} dt ds = integral_0^x g(t) dt + integral_0^x g(s)(e^{x-s} - 1) ds = integral_0^x e^{x-t} g(t) dt. So f - Vf = g + integral_0^x e^{x-t} g(t) dt - integral_0^x e^{x-t} g(t) dt = g. Verified.'
                }
            ]
        }
    ]
});
