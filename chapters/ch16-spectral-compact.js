window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch16',
    number: 16,
    title: 'Spectral Theory for Compact Operators',
    subtitle: 'Eigenvalues and eigenvectors in infinite dimensions',
    sections: [
        // ===== Section 1: Spectrum of an Operator =====
        {
            id: 'ch16-sec01',
            title: 'Spectrum of an Operator',
            content: `
                <h2>Spectrum of an Operator</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>In finite dimensions, the spectrum of a matrix is simply its set of eigenvalues. In infinite dimensions, the picture is richer: an operator \\\\(T\\\\) can fail to be invertible in ways beyond having a nontrivial kernel. The spectrum decomposes into three parts reflecting these distinct failure modes.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.1 (Resolvent Set and Spectrum)</div>
                    <div class="env-body">
                        <p>Let \\\\(X\\\\) be a complex Banach space and \\\\(T \\\\in \\\\mathcal{B}(X)\\\\). The <strong>resolvent set</strong> of \\\\(T\\\\) is</p>
                        \\\\[\\\\rho(T) = \\\\{\\\\lambda \\\\in \\\\mathbb{C} : (T - \\\\lambda I) \\\\text{ is bijective with bounded inverse}\\\\}.\\\\]
                        <p>The <strong>spectrum</strong> of \\\\(T\\\\) is the complement \\\\(\\\\sigma(T) = \\\\mathbb{C} \\\\setminus \\\\rho(T)\\\\).</p>
                        <p>For \\\\(\\\\lambda \\\\in \\\\rho(T)\\\\), the <strong>resolvent operator</strong> is \\\\(R_\\\\lambda(T) = (T - \\\\lambda I)^{-1} \\\\in \\\\mathcal{B}(X)\\\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.2 (Spectral Decomposition)</div>
                    <div class="env-body">
                        <p>The spectrum \\\\(\\\\sigma(T)\\\\) decomposes into three disjoint parts:</p>
                        <ol>
                            <li><strong>Point spectrum</strong>: \\\\(\\\\sigma_p(T) = \\\\{\\\\lambda \\\\in \\\\mathbb{C} : T - \\\\lambda I \\\\text{ is not injective}\\\\}\\\\) (eigenvalues).</li>
                            <li><strong>Continuous spectrum</strong>: \\\\(\\\\sigma_c(T) = \\\\{\\\\lambda \\\\in \\\\mathbb{C} : T - \\\\lambda I \\\\text{ is injective, } \\\\overline{\\\\operatorname{ran}(T - \\\\lambda I)} = X, \\\\text{ but } (T-\\\\lambda I)^{-1} \\\\text{ is unbounded}\\\\}\\\\).</li>
                            <li><strong>Residual spectrum</strong>: \\\\(\\\\sigma_r(T) = \\\\{\\\\lambda \\\\in \\\\mathbb{C} : T - \\\\lambda I \\\\text{ is injective, but } \\\\overline{\\\\operatorname{ran}(T - \\\\lambda I)} \\\\neq X\\\\}\\\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.3 (Right Shift Operator)</div>
                    <div class="env-body">
                        <p>Consider the right shift \\\\(R: \\\\ell^2 \\\\to \\\\ell^2\\\\) defined by \\\\(R(x_1, x_2, \\\\ldots) = (0, x_1, x_2, \\\\ldots)\\\\).</p>
                        <ul>
                            <li>\\\\(R\\\\) is an isometry, so \\\\(\\\\sigma_p(R) = \\\\emptyset\\\\) (no eigenvalues).</li>
                            <li>Every \\\\(\\\\lambda\\\\) with \\\\(|\\\\lambda| < 1\\\\) belongs to \\\\(\\\\sigma_r(R)\\\\), since \\\\(R - \\\\lambda I\\\\) is injective but \\\\(\\\\operatorname{ran}(R - \\\\lambda I)\\\\) is not dense.</li>
                            <li>Every \\\\(\\\\lambda\\\\) with \\\\(|\\\\lambda| = 1\\\\) belongs to \\\\(\\\\sigma_c(R)\\\\).</li>
                        </ul>
                        <p>By contrast, the left shift \\\\(L = R^*\\\\) has \\\\(\\\\sigma_p(L) = \\\\{\\\\lambda : |\\\\lambda| < 1\\\\}\\\\) (every such \\\\(\\\\lambda\\\\) is an eigenvalue).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.4 (Spectral Radius Bound)</div>
                    <div class="env-body">
                        <p>For \\\\(T \\\\in \\\\mathcal{B}(X)\\\\), the spectrum \\\\(\\\\sigma(T)\\\\) is a nonempty compact subset of \\\\(\\\\mathbb{C}\\\\) contained in the closed disk of radius \\\\(\\\\|T\\\\|\\\\):</p>
                        \\\\[\\\\sigma(T) \\\\subseteq \\\\{\\\\lambda \\\\in \\\\mathbb{C} : |\\\\lambda| \\\\leq \\\\|T\\\\|\\\\}.\\\\]
                        <p>The <strong>spectral radius</strong> satisfies \\\\(r(T) = \\\\lim_{n \\\\to \\\\infty} \\\\|T^n\\\\|^{1/n} = \\\\inf_{n \\\\geq 1} \\\\|T^n\\\\|^{1/n}\\\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch)</div>
                    <div class="env-body">
                        <p>If \\\\(|\\\\lambda| > \\\\|T\\\\|\\\\), then \\\\(T - \\\\lambda I = -\\\\lambda(I - T/\\\\lambda)\\\\), and \\\\(\\\\|T/\\\\lambda\\\\| < 1\\\\), so \\\\(I - T/\\\\lambda\\\\) is invertible by the Neumann series \\\\(\\\\sum_{n=0}^\\\\infty (T/\\\\lambda)^n\\\\). Hence \\\\(\\\\lambda \\\\in \\\\rho(T)\\\\).</p>
                        <p>Compactness follows from \\\\(\\\\sigma(T)\\\\) being closed (since \\\\(\\\\rho(T)\\\\) is open by continuity of inversion) and bounded. Nonemptiness follows from the Liouville theorem applied to the resolvent as an analytic \\\\(\\\\mathcal{B}(X)\\\\)-valued function.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.5 (Resolvent Identity)</div>
                    <div class="env-body">
                        <p>For \\\\(\\\\lambda, \\\\mu \\\\in \\\\rho(T)\\\\), the resolvent operators satisfy the <strong>first resolvent identity</strong>:</p>
                        \\\\[R_\\\\lambda(T) - R_\\\\mu(T) = (\\\\lambda - \\\\mu) R_\\\\lambda(T) R_\\\\mu(T).\\\\]
                        <p>In particular, \\\\(R_\\\\lambda(T)\\\\) and \\\\(R_\\\\mu(T)\\\\) commute.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Write \\\\(R_\\\\lambda - R_\\\\mu = R_\\\\lambda[(T-\\\\mu I) - (T - \\\\lambda I)]R_\\\\mu = R_\\\\lambda(\\\\lambda - \\\\mu)R_\\\\mu\\\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <p>The following visualization shows the spectrum of an operator in the complex plane, illustrating the three types of spectrum and the spectral radius bound.</p>

                <div class="viz-placeholder" data-viz="spectrum-complex-plane-viz"></div>

                <p>The next visualization demonstrates the Neumann series construction of the resolvent. For \\\\(|\\\\lambda| > \\\\|T\\\\|\\\\), the series \\\\(\\\\sum (T/\\\\lambda)^n\\\\) converges and gives the resolvent operator.</p>

                <div class="viz-placeholder" data-viz="neumann-resolvent-viz"></div>
            `,
            visualizations: [
                {
                    id: 'spectrum-complex-plane-viz',
                    title: 'Spectrum in the Complex Plane',
                    description: 'Visualize point, continuous, and residual spectrum with the spectral radius disk',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 480, scale: 100});
                        viz.originX = 280;
                        viz.originY = 240;

                        var showPoint = true;
                        var showCont = true;
                        var showResid = true;
                        var normT = 2.0;

                        VizEngine.createSlider(controls, '||T||', 0.5, 3.0, normT, 0.1, function(v) { normT = v; draw(); });

                        var btnDiv = document.createElement('div');
                        btnDiv.style.cssText = 'display:flex;gap:6px;margin-top:4px;flex-wrap:wrap;';
                        controls.appendChild(btnDiv);
                        VizEngine.createButton(btnDiv, 'Toggle Point', function() { showPoint = !showPoint; draw(); });
                        VizEngine.createButton(btnDiv, 'Toggle Continuous', function() { showCont = !showCont; draw(); });
                        VizEngine.createButton(btnDiv, 'Toggle Residual', function() { showResid = !showResid; draw(); });

                        var pointEigs = [
                            {re: 1.2, im: 0.5}, {re: -0.8, im: 0.3}, {re: 0.4, im: -0.9},
                            {re: -0.3, im: -0.6}, {re: 0.9, im: 0.0}, {re: -1.5, im: 0.2}
                        ];
                        var contSpectrum = [];
                        for (var a = 0; a < 2 * Math.PI; a += 0.02) {
                            contSpectrum.push({re: 0.7 * Math.cos(a), im: 0.7 * Math.sin(a)});
                        }
                        var residSpectrum = [
                            {re: 0.2, im: 0.1}, {re: -0.15, im: 0.25}, {re: 0.1, im: -0.2},
                            {re: -0.3, im: -0.1}, {re: 0.25, im: -0.05}
                        ];

                        function draw() {
                            viz.clear();
                            viz.drawGrid(0.5);
                            viz.drawAxes();

                            var ctx = viz.ctx;
                            var cx = viz.originX;
                            var cy = viz.originY;
                            var r = normT * viz.scale;
                            ctx.beginPath();
                            ctx.arc(cx, cy, r, 0, 2 * Math.PI);
                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([8, 4]);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('||T|| = ' + normT.toFixed(1), cx + r + 4, cy - 4);

                            if (showCont) {
                                ctx.strokeStyle = viz.colors.teal + '99';
                                ctx.lineWidth = 3;
                                ctx.beginPath();
                                for (var i = 0; i < contSpectrum.length; i++) {
                                    var p = contSpectrum[i];
                                    var sx = viz.originX + p.re * viz.scale;
                                    var sy = viz.originY - p.im * viz.scale;
                                    if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                                }
                                ctx.closePath();
                                ctx.stroke();
                            }

                            if (showResid) {
                                for (var j = 0; j < residSpectrum.length; j++) {
                                    var q = residSpectrum[j];
                                    var sqx = viz.originX + q.re * viz.scale;
                                    var sqy = viz.originY - q.im * viz.scale;
                                    ctx.fillStyle = viz.colors.orange + '88';
                                    ctx.fillRect(sqx - 5, sqy - 5, 10, 10);
                                    ctx.strokeStyle = viz.colors.orange;
                                    ctx.lineWidth = 1.5;
                                    ctx.strokeRect(sqx - 5, sqy - 5, 10, 10);
                                }
                            }

                            if (showPoint) {
                                for (var k = 0; k < pointEigs.length; k++) {
                                    var e = pointEigs[k];
                                    viz.drawPoint(e.re, e.im, viz.colors.blue, '', 5);
                                }
                            }

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Re', viz.width - 8, viz.originY + 4);
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                            ctx.fillText('Im', viz.originX + 12, 12);

                            var ly = viz.height - 50;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            if (showPoint) {
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.arc(20, ly, 4, 0, 2 * Math.PI); ctx.fill();
                                ctx.fillText('Point spectrum', 30, ly + 4);
                            }
                            if (showCont) {
                                ctx.strokeStyle = viz.colors.teal;
                                ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.moveTo(140, ly); ctx.lineTo(160, ly); ctx.stroke();
                                ctx.fillStyle = viz.colors.teal;
                                ctx.fillText('Continuous', 165, ly + 4);
                            }
                            if (showResid) {
                                ctx.fillStyle = viz.colors.orange;
                                ctx.fillRect(260, ly - 5, 8, 8);
                                ctx.fillText('Residual', 275, ly + 4);
                            }
                        }
                        draw();
                    }
                },
                {
                    id: 'neumann-resolvent-viz',
                    title: 'Neumann Series for the Resolvent',
                    description: 'Watch partial sums of the Neumann series converge to the resolvent',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 400, scale: 50, originX: 80, originY: 350});

                        var lambda = 1.5;
                        var tNorm = 0.8;
                        var nTerms = 10;

                        VizEngine.createSlider(controls, 'lambda', 1.0, 3.0, lambda, 0.1, function(v) { lambda = v; draw(); });
                        VizEngine.createSlider(controls, '||T||', 0.1, 2.5, tNorm, 0.1, function(v) { tNorm = v; draw(); });
                        VizEngine.createSlider(controls, 'Terms N', 1, 30, nTerms, 1, function(v) { nTerms = Math.round(v); draw(); });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var ratio = tNorm / lambda;
                            var converges = ratio < 1;

                            ctx.fillStyle = viz.colors.bg;
                            ctx.fillRect(0, 0, viz.width, viz.height);

                            ctx.strokeStyle = viz.colors.grid;
                            ctx.lineWidth = 0.5;
                            for (var gx = 0; gx <= 30; gx++) {
                                var sx = 80 + gx * (viz.width - 100) / 30;
                                ctx.beginPath(); ctx.moveTo(sx, 20); ctx.lineTo(sx, viz.height - 30); ctx.stroke();
                            }
                            for (var gy = 0; gy <= 8; gy++) {
                                var sy = viz.height - 30 - gy * (viz.height - 60) / 8;
                                ctx.beginPath(); ctx.moveTo(80, sy); ctx.lineTo(viz.width - 20, sy); ctx.stroke();
                            }

                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(80, viz.height - 30); ctx.lineTo(viz.width - 20, viz.height - 30); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(80, 20); ctx.lineTo(80, viz.height - 30); ctx.stroke();

                            var exactVal = converges ? 1 / (lambda - tNorm) : null;
                            var maxY = converges ? exactVal * 1.5 : 5;
                            if (maxY < 1) maxY = 1;
                            var plotH = viz.height - 60;
                            var plotW = viz.width - 100;

                            if (converges && exactVal !== null) {
                                var ey = viz.height - 30 - (exactVal / maxY) * plotH;
                                ctx.strokeStyle = viz.colors.green;
                                ctx.lineWidth = 1;
                                ctx.setLineDash([6, 4]);
                                ctx.beginPath(); ctx.moveTo(80, ey); ctx.lineTo(viz.width - 20, ey); ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.fillStyle = viz.colors.green;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.textBaseline = 'bottom';
                                ctx.fillText('Exact: 1/(lambda-||T||) = ' + exactVal.toFixed(3), 85, ey - 3);
                            }

                            var partial = 0;
                            ctx.fillStyle = viz.colors.blue;
                            for (var n = 0; n <= nTerms; n++) {
                                partial += Math.pow(tNorm, n) / Math.pow(lambda, n + 1);
                                var bx = 80 + n * plotW / 30;
                                var bh = (partial / maxY) * plotH;
                                if (bh > plotH) bh = plotH;
                                var bw = plotW / 35;
                                ctx.fillStyle = viz.colors.blue + 'cc';
                                ctx.fillRect(bx, viz.height - 30 - bh, bw, bh);
                            }

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('n (term index)', viz.width / 2, viz.height - 6);
                            ctx.save();
                            ctx.translate(15, viz.height / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillText('Partial sum S_N', 0, 0);
                            ctx.restore();

                            ctx.fillStyle = converges ? viz.colors.green : viz.colors.red;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText(converges ? 'Converges: ||T||/lambda = ' + ratio.toFixed(3) + ' < 1' : 'Diverges: ||T||/lambda = ' + ratio.toFixed(3) + ' >= 1', 100, 35);

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText('S_N = sum_{n=0}^{N} T^n / lambda^{n+1},  partial sum = ' + partial.toFixed(4), 100, 55);
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch16-ex01',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Let T be the left shift operator on \\\\(\\\\ell^2\\\\), defined by \\\\(L(x_1, x_2, x_3, \\\\ldots) = (x_2, x_3, \\\\ldots)\\\\). Show that every \\\\(\\\\lambda\\\\) with \\\\(|\\\\lambda| < 1\\\\) is an eigenvalue of \\\\(L\\\\), and find the corresponding eigenvector.',
                    hint: 'Try \\\\(x = (1, \\\\lambda, \\\\lambda^2, \\\\ldots)\\\\) and verify it is in \\\\(\\\\ell^2\\\\).',
                    solution: 'For \\\\(|\\\\lambda| < 1\\\\), set \\\\(x = (1, \\\\lambda, \\\\lambda^2, \\\\ldots)\\\\). Then \\\\(\\\\|x\\\\|^2 = \\\\sum |\\\\lambda|^{2n} = 1/(1-|\\\\lambda|^2) < \\\\infty\\\\), so \\\\(x \\\\in \\\\ell^2\\\\). We have \\\\(Lx = (\\\\lambda, \\\\lambda^2, \\\\ldots) = \\\\lambda x\\\\). Thus \\\\(\\\\lambda \\\\in \\\\sigma_p(L)\\\\).'
                },
                {
                    id: 'ch16-ex02',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Prove the resolvent identity: for \\\\(\\\\lambda, \\\\mu \\\\in \\\\rho(T)\\\\), \\\\(R_\\\\lambda(T) - R_\\\\mu(T) = (\\\\lambda - \\\\mu)R_\\\\lambda(T)R_\\\\mu(T)\\\\).',
                    hint: 'Multiply both sides by \\\\((T - \\\\lambda I)\\\\) on the left and \\\\((T - \\\\mu I)\\\\) on the right.',
                    solution: 'We compute \\\\(R_\\\\lambda[(T-\\\\mu I)-(T-\\\\lambda I)]R_\\\\mu = R_\\\\lambda(\\\\lambda I - \\\\mu I)R_\\\\mu = (\\\\lambda-\\\\mu)R_\\\\lambda R_\\\\mu\\\\). But also \\\\(R_\\\\lambda(T-\\\\mu I)R_\\\\mu = R_\\\\mu\\\\) (since \\\\(R_\\\\lambda(T-\\\\lambda I) = I\\\\) and \\\\((T-\\\\mu I)R_\\\\mu = I\\\\)) and similarly the second term gives \\\\(R_\\\\lambda\\\\). Hence \\\\(R_\\\\mu - R_\\\\lambda = -(\\\\lambda-\\\\mu)R_\\\\lambda R_\\\\mu\\\\), which rearranges to the identity.'
                },
                {
                    id: 'ch16-ex03',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Show that the spectrum \\\\(\\\\sigma(T)\\\\) is closed in \\\\(\\\\mathbb{C}\\\\). (Hint: show that \\\\(\\\\rho(T)\\\\) is open.)',
                    hint: 'If \\\\(\\\\lambda_0 \\\\in \\\\rho(T)\\\\), use the Neumann series to show that \\\\(T - \\\\lambda I\\\\) is invertible for \\\\(\\\\lambda\\\\) near \\\\(\\\\lambda_0\\\\).',
                    solution: 'Let \\\\(\\\\lambda_0 \\\\in \\\\rho(T)\\\\). Write \\\\(T - \\\\lambda I = (T - \\\\lambda_0 I)[I - (\\\\lambda - \\\\lambda_0)(T-\\\\lambda_0 I)^{-1}]\\\\). If \\\\(|\\\\lambda - \\\\lambda_0| < 1/\\\\|R_{\\\\lambda_0}\\\\|\\\\), the Neumann series converges and \\\\(T - \\\\lambda I\\\\) is invertible. Thus \\\\(\\\\rho(T)\\\\) is open, so \\\\(\\\\sigma(T) = \\\\mathbb{C} \\\\setminus \\\\rho(T)\\\\) is closed.'
                }
            ]
        },
        // ===== Section 2: Spectral Properties of Compact Operators =====
        {
            id: 'ch16-sec02',
            title: 'Spectral Properties of Compact Operators',
            content: `
                <h2>Spectral Properties of Compact Operators</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Compact operators are the closest infinite-dimensional analogues of matrices. Their spectral theory is remarkably clean: the nonzero spectrum consists entirely of eigenvalues, each with finite multiplicity, and these eigenvalues can only accumulate at zero. This is the Riesz-Schauder theorem, a cornerstone of spectral theory.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.6 (Riesz-Schauder)</div>
                    <div class="env-body">
                        <p>Let \\\\(K \\\\in \\\\mathcal{B}(X)\\\\) be a compact operator on a Banach space \\\\(X\\\\). Then:</p>
                        <ol>
                            <li>\\\\(\\\\sigma(K) \\\\setminus \\\\{0\\\\} \\\\subseteq \\\\sigma_p(K)\\\\): every nonzero spectral value is an eigenvalue.</li>
                            <li>Each nonzero eigenvalue has <strong>finite algebraic multiplicity</strong>.</li>
                            <li>\\\\(\\\\sigma(K) \\\\setminus \\\\{0\\\\}\\\\) is a countable set (possibly finite or empty) with no accumulation point except possibly \\\\(0\\\\).</li>
                            <li>If \\\\(\\\\dim X = \\\\infty\\\\), then \\\\(0 \\\\in \\\\sigma(K)\\\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Key Steps)</div>
                    <div class="env-body">
                        <p><strong>Step 1</strong> (Eigenvalues have finite multiplicity): Suppose \\\\(\\\\ker(K - \\\\lambda I)\\\\) is infinite-dimensional for some \\\\(\\\\lambda \\\\neq 0\\\\). Pick an orthonormal sequence \\\\(\\\\{e_n\\\\}\\\\) in \\\\(\\\\ker(K - \\\\lambda I)\\\\). Then \\\\(Ke_n = \\\\lambda e_n\\\\), and \\\\(\\\\|Ke_n - Ke_m\\\\| = |\\\\lambda| \\\\|e_n - e_m\\\\| = |\\\\lambda|\\\\sqrt{2}\\\\). This sequence has no convergent subsequence, contradicting compactness of \\\\(K\\\\).</p>
                        <p><strong>Step 2</strong> (Eigenvalues cannot accumulate away from 0): Suppose \\\\(\\\\lambda_n \\\\to \\\\lambda \\\\neq 0\\\\) with distinct eigenvalues \\\\(\\\\lambda_n\\\\) and eigenvectors \\\\(e_n\\\\). By Riesz's lemma, we can find \\\\(\\\\{x_n\\\\}\\\\) in \\\\(\\\\operatorname{span}(e_1, \\\\ldots, e_n)\\\\) with \\\\(\\\\|x_n\\\\| = 1\\\\) and \\\\(\\\\operatorname{dist}(x_n, \\\\operatorname{span}(e_1,\\\\ldots,e_{n-1})) \\\\geq 1/2\\\\). Then \\\\(\\\\{Kx_n\\\\}\\\\) has no convergent subsequence, contradicting compactness.</p>
                        <p><strong>Step 3</strong> (Nonzero spectrum is purely point spectrum): If \\\\(\\\\lambda \\\\neq 0\\\\) and \\\\(\\\\lambda \\\\notin \\\\sigma_p(K)\\\\), then \\\\(K - \\\\lambda I\\\\) is injective. By the Fredholm alternative (Chapter 15), \\\\(K - \\\\lambda I\\\\) is surjective, hence \\\\(\\\\lambda \\\\in \\\\rho(K)\\\\).</p>
                        <p><strong>Step 4</strong> (\\\\(0 \\\\in \\\\sigma(K)\\\\) when \\\\(\\\\dim X = \\\\infty\\\\)): If \\\\(0 \\\\in \\\\rho(K)\\\\), then \\\\(K^{-1}\\\\) exists and is bounded, so \\\\(I = K^{-1}K\\\\) is compact (composition with a compact operator). But the identity on an infinite-dimensional space is not compact, contradiction.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 16.7</div>
                    <div class="env-body">
                        <p>If \\\\(K\\\\) is compact on an infinite-dimensional space, its nonzero eigenvalues can be enumerated as a sequence \\\\(\\\\lambda_1, \\\\lambda_2, \\\\ldots\\\\) (counted with algebraic multiplicity) satisfying \\\\(|\\\\lambda_1| \\\\geq |\\\\lambda_2| \\\\geq \\\\cdots \\\\to 0\\\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.8 (Integral Operator)</div>
                    <div class="env-body">
                        <p>The Volterra operator \\\\(V: L^2[0,1] \\\\to L^2[0,1]\\\\) defined by \\\\((Vf)(x) = \\\\int_0^x f(t)\\,dt\\\\) is compact with \\\\(\\\\sigma(V) = \\\\{0\\\\}\\\\): it has no nonzero eigenvalues. Indeed, if \\\\(Vf = \\\\lambda f\\\\) with \\\\(\\\\lambda \\\\neq 0\\\\), differentiating gives \\\\(f(x) = \\\\lambda f'(x)\\\\) with \\\\(f(0) = 0\\\\), forcing \\\\(f \\\\equiv 0\\\\).</p>
                        <p>By contrast, the operator \\\\((Kf)(x) = \\\\int_0^1 \\\\min(x,t) f(t)\\,dt\\\\) (related to the Green's function of \\\\(-u'' = f\\\\)) has eigenvalues \\\\(\\\\lambda_n = 1/((n-1/2)^2\\\\pi^2)\\\\), which converge to 0.</p>
                    </div>
                </div>

                <p>The visualization below shows the eigenvalues of a compact operator arranged by decreasing magnitude, illustrating their convergence to zero.</p>

                <div class="viz-placeholder" data-viz="compact-eigenvalues-viz"></div>

                <p>The next visualization shows a parametric family of compact operators and how the number of eigenvalues above a threshold grows as the operator norm increases.</p>

                <div class="viz-placeholder" data-viz="eigenvalue-accumulation-viz"></div>
            `,
            visualizations: [
                {
                    id: 'compact-eigenvalues-viz',
                    title: 'Eigenvalues of a Compact Operator',
                    description: 'Eigenvalues arranged by magnitude, converging to zero',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 420, scale: 80});
                        viz.originX = 280;
                        viz.originY = 210;

                        var decayRate = 1.5;
                        var numEigs = 20;
                        var showComplex = true;

                        VizEngine.createSlider(controls, 'Decay rate', 0.5, 3.0, decayRate, 0.1, function(v) { decayRate = v; draw(); });
                        VizEngine.createSlider(controls, 'Num eigenvalues', 5, 40, numEigs, 1, function(v) { numEigs = Math.round(v); draw(); });
                        VizEngine.createButton(controls, 'Toggle Complex/Real', function() { showComplex = !showComplex; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(0.5);
                            viz.drawAxes();

                            var ctx = viz.ctx;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('Re', viz.width - 8, viz.originY + 14);
                            ctx.textAlign = 'center';
                            ctx.fillText('Im', viz.originX + 14, 12);

                            var norm = 2.0;
                            ctx.beginPath();
                            ctx.arc(viz.originX, viz.originY, norm * viz.scale, 0, 2 * Math.PI);
                            ctx.strokeStyle = viz.colors.yellow + '44';
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 4]);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            for (var n = 1; n <= numEigs; n++) {
                                var mag = norm / Math.pow(n, decayRate);
                                var re, im;
                                if (showComplex) {
                                    var angle = n * 2.399;
                                    re = mag * Math.cos(angle);
                                    im = mag * Math.sin(angle);
                                } else {
                                    re = (n % 2 === 0 ? 1 : -1) * mag;
                                    im = 0;
                                }
                                var color = viz.colors.blue;
                                if (n <= 3) color = viz.colors.teal;
                                else if (n <= 8) color = viz.colors.blue;
                                else color = viz.colors.purple;
                                viz.drawPoint(re, im, color, '', 4 + Math.max(0, 3 - n * 0.3));
                                if (n <= 5) {
                                    ctx.fillStyle = color;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'left';
                                    var sx = viz.originX + re * viz.scale;
                                    var sy = viz.originY - im * viz.scale;
                                    ctx.fillText('l' + n, sx + 8, sy - 4);
                                }
                            }

                            viz.drawPoint(0, 0, viz.colors.red, '0', 6);

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('|l_n| ~ 1/n^' + decayRate.toFixed(1) + ' -> 0', 20, viz.height - 15);
                        }
                        draw();
                    }
                },
                {
                    id: 'eigenvalue-accumulation-viz',
                    title: 'Eigenvalue Magnitude Decay',
                    description: 'Bar chart of |lambda_n| showing convergence to 0',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 380, scale: 40});

                        var decayType = 'polynomial';
                        var nShow = 20;

                        VizEngine.createSlider(controls, 'Show N eigenvalues', 5, 40, nShow, 1, function(v) { nShow = Math.round(v); draw(); });
                        var btnDiv = document.createElement('div');
                        btnDiv.style.cssText = 'display:flex;gap:6px;margin-top:4px;';
                        controls.appendChild(btnDiv);
                        VizEngine.createButton(btnDiv, 'Polynomial', function() { decayType = 'polynomial'; draw(); });
                        VizEngine.createButton(btnDiv, 'Exponential', function() { decayType = 'exponential'; draw(); });
                        VizEngine.createButton(btnDiv, 'Logarithmic', function() { decayType = 'logarithmic'; draw(); });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var pad = {left: 60, right: 20, top: 40, bottom: 50};
                            var plotW = viz.width - pad.left - pad.right;
                            var plotH = viz.height - pad.top - pad.bottom;

                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(pad.left, pad.top);
                            ctx.lineTo(pad.left, pad.top + plotH);
                            ctx.lineTo(pad.left + plotW, pad.top + plotH);
                            ctx.stroke();

                            var maxVal = 1.0;
                            var eigenvalues = [];
                            for (var n = 1; n <= nShow; n++) {
                                var val;
                                if (decayType === 'polynomial') val = 1.0 / (n * n);
                                else if (decayType === 'exponential') val = Math.pow(0.7, n);
                                else val = 1.0 / (1 + Math.log(n) * Math.log(n));
                                eigenvalues.push(val);
                                if (n === 1) maxVal = val;
                            }

                            var barW = Math.min(plotW / nShow * 0.75, 25);
                            var gap = (plotW - barW * nShow) / (nShow + 1);

                            for (var i = 0; i < eigenvalues.length; i++) {
                                var bh = (eigenvalues[i] / maxVal) * plotH * 0.9;
                                var bx = pad.left + gap + i * (barW + gap);
                                var by = pad.top + plotH - bh;
                                var t = i / Math.max(eigenvalues.length - 1, 1);
                                var r = Math.round(88 + t * 100);
                                var g = Math.round(166 - t * 80);
                                var b = Math.round(255 - t * 60);
                                ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
                                ctx.fillRect(bx, by, barW, bh);

                                if (nShow <= 25) {
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '9px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText('' + (i + 1), bx + barW / 2, pad.top + plotH + 14);
                                }
                            }

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('n (eigenvalue index)', pad.left + plotW / 2, viz.height - 8);
                            ctx.save();
                            ctx.translate(15, pad.top + plotH / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillText('|lambda_n|', 0, 0);
                            ctx.restore();

                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            var label = decayType === 'polynomial' ? '|l_n| = 1/n^2' : (decayType === 'exponential' ? '|l_n| = 0.7^n' : '|l_n| = 1/(1+ln(n)^2)');
                            ctx.fillText('Decay: ' + label, pad.left + 10, 25);
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch16-ex04',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Prove that if \\\\(K\\\\) is compact and \\\\(\\\\lambda \\\\neq 0\\\\), then \\\\(\\\\ker(K - \\\\lambda I)\\\\) is finite-dimensional.',
                    hint: 'Assume the kernel is infinite-dimensional and derive a contradiction using the compactness of K and an orthonormal sequence in the kernel.',
                    solution: 'Suppose \\\\(\\\\ker(K - \\\\lambda I)\\\\) is infinite-dimensional. Choose a bounded sequence \\\\(\\\\{e_n\\\\}\\\\) with \\\\(\\\\|e_n\\\\| = 1\\\\) and \\\\(\\\\|e_n - e_m\\\\| \\\\geq 1\\\\) (by Riesz lemma). Then \\\\(Ke_n = \\\\lambda e_n\\\\), so \\\\(\\\\|Ke_n - Ke_m\\\\| = |\\\\lambda|\\\\|e_n - e_m\\\\| \\\\geq |\\\\lambda| > 0\\\\). Thus \\\\(\\\\{Ke_n\\\\}\\\\) has no convergent subsequence, contradicting compactness of \\\\(K\\\\).'
                },
                {
                    id: 'ch16-ex05',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Show that the Volterra operator \\\\(V\\\\) on \\\\(L^2[0,1]\\\\) has no nonzero eigenvalues.',
                    hint: 'If \\\\(Vf = \\\\lambda f\\\\) with \\\\(\\\\lambda \\\\neq 0\\\\), differentiate to get an ODE and use the initial condition \\\\(f(0) = (Vf)(0) = 0\\\\).',
                    solution: 'If \\\\(Vf = \\\\lambda f\\\\) with \\\\(\\\\lambda \\\\neq 0\\\\), then \\\\(\\\\int_0^x f(t)\\\\,dt = \\\\lambda f(x)\\\\). Evaluating at \\\\(x = 0\\\\): \\\\(0 = \\\\lambda f(0)\\\\), so \\\\(f(0) = 0\\\\). Differentiating: \\\\(f(x) = \\\\lambda f\\\'(x)\\\\), giving \\\\(f(x) = Ce^{x/\\\\lambda}\\\\). The condition \\\\(f(0) = 0\\\\) forces \\\\(C = 0\\\\), so \\\\(f \\\\equiv 0\\\\). Hence \\\\(\\\\sigma_p(V) = \\\\emptyset\\\\).'
                },
                {
                    id: 'ch16-ex06',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Let \\\\(K\\\\) be compact on an infinite-dimensional Banach space. Prove that \\\\(0 \\\\in \\\\sigma(K)\\\\).',
                    hint: 'If \\\\(0 \\\\in \\\\rho(K)\\\\), then \\\\(K\\\\) is invertible. What can you say about the identity operator?',
                    solution: 'If \\\\(0 \\\\in \\\\rho(K)\\\\), then \\\\(K^{-1} \\\\in \\\\mathcal{B}(X)\\\\) exists. Then \\\\(I = K^{-1} \\\\circ K\\\\) is compact as the composition of a bounded operator with a compact operator. But the identity operator on an infinite-dimensional space is not compact (the unit ball is not relatively compact). Contradiction.'
                }
            ]
        },
        // ===== Section 3: Spectral Theorem for Compact Self-Adjoint Operators =====
        {
            id: 'ch16-sec03',
            title: 'Spectral Theorem for Compact Self-Adjoint Operators',
            content: `
                <h2>Spectral Theorem for Compact Self-Adjoint Operators</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The spectral theorem for compact self-adjoint operators is the infinite-dimensional analogue of the diagonalization theorem for symmetric matrices. Just as every real symmetric matrix has real eigenvalues and an orthonormal basis of eigenvectors, every compact self-adjoint operator on a Hilbert space admits a spectral decomposition \\\\(Tx = \\\\sum \\\\lambda_n \\\\langle x, e_n \\\\rangle e_n\\\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.9 (Eigenvalues of Self-Adjoint Operators are Real)</div>
                    <div class="env-body">
                        <p>Let \\\\(H\\\\) be a complex Hilbert space and \\\\(T \\\\in \\\\mathcal{B}(H)\\\\) self-adjoint (\\\\(T = T^*\\\\)). Then every eigenvalue of \\\\(T\\\\) is real, and eigenvectors corresponding to distinct eigenvalues are orthogonal.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>If \\\\(Tx = \\\\lambda x\\\\) with \\\\(x \\\\neq 0\\\\), then \\\\(\\\\lambda \\\\|x\\\\|^2 = \\\\langle Tx, x \\\\rangle = \\\\langle x, T^*x \\\\rangle = \\\\langle x, Tx \\\\rangle = \\\\overline{\\\\lambda} \\\\|x\\\\|^2\\\\), so \\\\(\\\\lambda = \\\\overline{\\\\lambda}\\\\), i.e., \\\\(\\\\lambda \\\\in \\\\mathbb{R}\\\\).</p>
                        <p>If \\\\(Tx = \\\\lambda x\\\\) and \\\\(Ty = \\\\mu y\\\\) with \\\\(\\\\lambda \\\\neq \\\\mu\\\\), then \\\\(\\\\lambda \\\\langle x, y \\\\rangle = \\\\langle Tx, y \\\\rangle = \\\\langle x, Ty \\\\rangle = \\\\mu \\\\langle x, y \\\\rangle\\\\). Since \\\\(\\\\lambda \\\\neq \\\\mu\\\\), we get \\\\(\\\\langle x, y \\\\rangle = 0\\\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block lemma">
                    <div class="env-title">Lemma 16.10</div>
                    <div class="env-body">
                        <p>Let \\\\(T\\\\) be a compact self-adjoint operator on a Hilbert space \\\\(H\\\\) with \\\\(T \\\\neq 0\\\\). Then \\\\(\\\\|T\\\\|\\\\) or \\\\(-\\\\|T\\\\|\\\\) is an eigenvalue of \\\\(T\\\\). More precisely, \\\\(\\\\|T\\\\| = \\\\sup_{\\\\|x\\\\|=1} |\\\\langle Tx, x \\\\rangle|\\\\), and this supremum is attained.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch)</div>
                    <div class="env-body">
                        <p>Set \\\\(m = \\\\sup_{\\\\|x\\\\|=1} |\\\\langle Tx, x \\\\rangle|\\\\). One can show \\\\(m = \\\\|T\\\\|\\\\) for self-adjoint operators. Choose a maximizing sequence \\\\(\\\\{x_n\\\\}\\\\) with \\\\(|\\\\langle Tx_n, x_n \\\\rangle| \\\\to m\\\\). By compactness, \\\\(\\\\{Tx_n\\\\}\\\\) has a convergent subsequence. A careful argument shows that the limit vector is an eigenvector for eigenvalue \\\\(\\\\pm m\\\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.11 (Spectral Theorem for Compact Self-Adjoint Operators)</div>
                    <div class="env-body">
                        <p>Let \\\\(T\\\\) be a compact self-adjoint operator on a separable Hilbert space \\\\(H\\\\). Then there exists an orthonormal sequence \\\\(\\\\{e_n\\\\}\\\\) of eigenvectors with corresponding real eigenvalues \\\\(\\\\{\\\\lambda_n\\\\}\\\\) satisfying \\\\(|\\\\lambda_1| \\\\geq |\\\\lambda_2| \\\\geq \\\\cdots \\\\to 0\\\\) such that:</p>
                        \\\\[Tx = \\\\sum_{n=1}^{\\\\infty} \\\\lambda_n \\\\langle x, e_n \\\\rangle \\\\, e_n \\\\quad \\\\text{for all } x \\\\in H.\\\\]
                        <p>Moreover, \\\\(\\\\ker T = \\\\{e_n\\\\}^\\\\perp\\\\) and \\\\(H = \\\\ker T \\\\oplus \\\\overline{\\\\operatorname{span}}\\\\{e_n\\\\}\\\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>Step 1</strong>: By Lemma 16.10, there exists a unit eigenvector \\\\(e_1\\\\) with eigenvalue \\\\(\\\\lambda_1\\\\) satisfying \\\\(|\\\\lambda_1| = \\\\|T\\\\|\\\\).</p>
                        <p><strong>Step 2</strong>: The subspace \\\\(\\\\{e_1\\\\}^\\\\perp\\\\) is \\\\(T\\\\)-invariant: if \\\\(\\\\langle x, e_1 \\\\rangle = 0\\\\), then \\\\(\\\\langle Tx, e_1 \\\\rangle = \\\\langle x, Te_1 \\\\rangle = \\\\lambda_1 \\\\langle x, e_1 \\\\rangle = 0\\\\). The restriction \\\\(T|_{\\\\{e_1\\\\}^\\\\perp}\\\\) is still compact and self-adjoint.</p>
                        <p><strong>Step 3</strong>: Apply Lemma 16.10 to \\\\(T|_{\\\\{e_1\\\\}^\\\\perp}\\\\) to obtain \\\\(e_2, \\\\lambda_2\\\\) with \\\\(|\\\\lambda_2| \\\\leq |\\\\lambda_1|\\\\). Continue inductively.</p>
                        <p><strong>Step 4</strong>: Either the process terminates (finite-rank case) or produces an infinite sequence with \\\\(\\\\lambda_n \\\\to 0\\\\) (since \\\\(\\\\{Te_n\\\\} = \\\\{\\\\lambda_n e_n\\\\}\\\\) must have a convergent subsequence by compactness, which forces \\\\(\\\\lambda_n \\\\to 0\\\\)).</p>
                        <p><strong>Step 5</strong>: For any \\\\(x \\\\in H\\\\), write \\\\(x = \\\\sum_n \\\\langle x, e_n \\\\rangle e_n + x_0\\\\) where \\\\(x_0 \\\\perp \\\\operatorname{span}\\\\{e_n\\\\}\\\\). Then \\\\(Tx_0 \\\\perp e_n\\\\) for all \\\\(n\\\\) and \\\\(\\\\|T|_{\\\\{e_n\\\\}^\\\\perp}\\\\| \\\\leq |\\\\lambda_n| \\\\to 0\\\\), so \\\\(Tx_0 = 0\\\\). Hence \\\\(Tx = \\\\sum_n \\\\lambda_n \\\\langle x, e_n \\\\rangle e_n\\\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Operator-Norm Approximation)</div>
                    <div class="env-body">
                        <p>The spectral theorem gives the best finite-rank approximation: if \\\\(T_N = \\\\sum_{n=1}^N \\\\lambda_n \\\\langle \\\\cdot, e_n \\\\rangle e_n\\\\), then \\\\(\\\\|T - T_N\\\\| = |\\\\lambda_{N+1}| \\\\to 0\\\\). This is a key fact in numerical analysis and data compression (cf. SVD truncation).</p>
                    </div>
                </div>

                <p>The visualization below shows the eigendecomposition of a compact self-adjoint operator. Drag the vector \\\\(x\\\\) to see how the output \\\\(Tx\\\\) is assembled from the projections onto eigenvectors.</p>

                <div class="viz-placeholder" data-viz="eigendecomposition-viz"></div>

                <p>This visualization shows a compact self-adjoint operator decomposed as a sum of rank-one projections, with truncation order controlled by a slider.</p>

                <div class="viz-placeholder" data-viz="truncated-expansion-viz"></div>
            `,
            visualizations: [
                {
                    id: 'eigendecomposition-viz',
                    title: 'Spectral Decomposition Tx = sum lambda_n <x,e_n> e_n',
                    description: 'Drag the input vector x to see the eigendecomposition of Tx',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 440, scale: 60});
                        viz.originX = 280;
                        viz.originY = 220;

                        var eigenvalues = [2.0, -1.2, 0.6];
                        var angles = [Math.PI / 6, Math.PI / 6 + Math.PI / 2, Math.PI / 6 + Math.PI];
                        var eigenvecs = angles.map(function(a) { return [Math.cos(a), Math.sin(a)]; });

                        var dragPt = viz.addDraggable('x', 1.5, 1.0, viz.colors.white, 8);

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var x = dragPt.x;
                            var y = dragPt.y;

                            var eColors = [viz.colors.teal, viz.colors.orange, viz.colors.purple];

                            for (var i = 0; i < eigenvecs.length; i++) {
                                var ev = eigenvecs[i];
                                viz.drawSegment(-4 * ev[0], -4 * ev[1], 4 * ev[0], 4 * ev[1], eColors[i] + '33', 1, true);
                            }

                            var tx = 0;
                            var ty = 0;
                            for (var j = 0; j < eigenvecs.length; j++) {
                                var ej = eigenvecs[j];
                                var proj = x * ej[0] + y * ej[1];
                                var compX = proj * ej[0];
                                var compY = proj * ej[1];
                                var lProj = eigenvalues[j] * proj;
                                tx += lProj * ej[0];
                                ty += lProj * ej[1];

                                viz.drawVector(0, 0, compX, compY, eColors[j] + '88', '', 1);
                                viz.drawPoint(compX, compY, eColors[j], '<x,e' + (j + 1) + '>e' + (j + 1), 3);
                            }

                            viz.drawVector(0, 0, x, y, viz.colors.white, 'x', 2);
                            viz.drawVector(0, 0, tx, ty, viz.colors.green, 'Tx', 2);

                            var ctx = viz.ctx;
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            for (var k = 0; k < eigenvalues.length; k++) {
                                ctx.fillStyle = eColors[k];
                                ctx.fillText('l' + (k + 1) + ' = ' + eigenvalues[k].toFixed(1), 10, 20 + k * 16);
                            }
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('Tx = (' + tx.toFixed(2) + ', ' + ty.toFixed(2) + ')', 10, 20 + eigenvalues.length * 16);

                            viz.drawDraggables();
                        }

                        viz.animate(function() { draw(); });
                    }
                },
                {
                    id: 'truncated-expansion-viz',
                    title: 'Truncated Spectral Expansion',
                    description: 'Control the truncation order N and see the approximation error',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 400, scale: 40, originX: 60, originY: 360});

                        var maxN = 20;
                        var truncN = 5;
                        var decayPow = 1.5;

                        VizEngine.createSlider(controls, 'Truncation N', 1, maxN, truncN, 1, function(v) { truncN = Math.round(v); draw(); });
                        VizEngine.createSlider(controls, 'Decay exponent', 0.5, 3.0, decayPow, 0.1, function(v) { decayPow = v; draw(); });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var pad = {left: 60, right: 20, top: 40, bottom: 50};
                            var plotW = viz.width - pad.left - pad.right;
                            var plotH = viz.height - pad.top - pad.bottom;

                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(pad.left, pad.top);
                            ctx.lineTo(pad.left, pad.top + plotH);
                            ctx.lineTo(pad.left + plotW, pad.top + plotH);
                            ctx.stroke();

                            var fullNorm = 0;
                            var allEigs = [];
                            for (var n = 1; n <= maxN; n++) {
                                var lam = 1.0 / Math.pow(n, decayPow);
                                allEigs.push(lam);
                                fullNorm += lam * lam;
                            }
                            fullNorm = Math.sqrt(fullNorm);

                            var errors = [];
                            var partialSqSum = 0;
                            for (var m = 1; m <= maxN; m++) {
                                partialSqSum += allEigs[m - 1] * allEigs[m - 1];
                                var remainingSqSum = 0;
                                for (var r = m; r < maxN; r++) {
                                    remainingSqSum += allEigs[r] * allEigs[r];
                                }
                                errors.push(Math.sqrt(remainingSqSum));
                            }

                            var maxErr = errors[0] || 1;

                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i < errors.length; i++) {
                                var px = pad.left + (i / (maxN - 1)) * plotW;
                                var py = pad.top + plotH - (errors[i] / maxErr) * plotH * 0.9;
                                if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            for (var j = 0; j < errors.length; j++) {
                                var dx = pad.left + (j / (maxN - 1)) * plotW;
                                var dy = pad.top + plotH - (errors[j] / maxErr) * plotH * 0.9;
                                ctx.fillStyle = (j + 1) <= truncN ? viz.colors.teal : viz.colors.text;
                                ctx.beginPath(); ctx.arc(dx, dy, 3, 0, 2 * Math.PI); ctx.fill();
                            }

                            var truncPx = pad.left + ((truncN - 1) / (maxN - 1)) * plotW;
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath(); ctx.moveTo(truncPx, pad.top); ctx.lineTo(truncPx, pad.top + plotH); ctx.stroke();
                            ctx.setLineDash([]);

                            ctx.fillStyle = viz.colors.red;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('N = ' + truncN, truncPx, pad.top - 6);

                            var currentErr = truncN <= errors.length ? errors[truncN - 1] : 0;
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('||T - T_N|| = |l_{N+1}| = ' + (truncN < maxN ? allEigs[truncN].toFixed(4) : '0'), pad.left + 10, 25);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText('HS error: ||T - T_N||_HS = ' + currentErr.toFixed(4), pad.left + 10, 40);

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Truncation order N', pad.left + plotW / 2, viz.height - 8);
                            ctx.save();
                            ctx.translate(15, pad.top + plotH / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillText('||T - T_N||_HS', 0, 0);
                            ctx.restore();
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch16-ex07',
                    type: 'proof',
                    difficulty: 3,
                    question: 'Let \\\\(T\\\\) be a bounded self-adjoint operator on a Hilbert space. Prove that all eigenvalues of \\\\(T\\\\) are real.',
                    hint: 'Use the self-adjointness to show \\\\(\\\\lambda \\\\langle x,x \\\\rangle = \\\\overline{\\\\lambda} \\\\langle x,x \\\\rangle\\\\).',
                    solution: 'If \\\\(Tx = \\\\lambda x\\\\) with \\\\(x \\\\neq 0\\\\), then \\\\(\\\\lambda \\\\|x\\\\|^2 = \\\\langle Tx, x \\\\rangle = \\\\langle x, T^*x \\\\rangle = \\\\langle x, Tx \\\\rangle = \\\\overline{\\\\langle Tx, x\\\\rangle} = \\\\overline{\\\\lambda}\\\\|x\\\\|^2\\\\). Since \\\\(\\\\|x\\\\| \\\\neq 0\\\\), we conclude \\\\(\\\\lambda = \\\\overline{\\\\lambda}\\\\), so \\\\(\\\\lambda \\\\in \\\\mathbb{R}\\\\).'
                },
                {
                    id: 'ch16-ex08',
                    type: 'proof',
                    difficulty: 4,
                    question: 'Prove the spectral theorem for a compact self-adjoint operator \\\\(T\\\\) on a Hilbert space: show that \\\\(\\\\|T\\\\|\\\\) or \\\\(-\\\\|T\\\\|\\\\) is an eigenvalue.',
                    hint: 'Let \\\\(m = \\\\sup_{\\\\|x\\\\|=1}|\\\\langle Tx,x\\\\rangle|\\\\). Find a maximizing sequence and use compactness.',
                    solution: 'Set \\\\(\\\\mu = \\\\sup_{\\\\|x\\\\|=1} \\\\langle Tx,x\\\\rangle\\\\) (which equals \\\\(\\\\|T\\\\|\\\\) or \\\\(-\\\\|T\\\\|\\\\) equals \\\\(\\\\inf\\\\)). Choose \\\\(\\\\{x_n\\\\}\\\\) with \\\\(\\\\|x_n\\\\|=1\\\\) and \\\\(\\\\langle Tx_n,x_n\\\\rangle \\\\to \\\\mu\\\\). Then \\\\(\\\\|Tx_n - \\\\mu x_n\\\\|^2 = \\\\|Tx_n\\\\|^2 - 2\\\\mu\\\\langle Tx_n,x_n\\\\rangle + \\\\mu^2 \\\\leq \\\\mu^2 - 2\\\\mu\\\\langle Tx_n,x_n\\\\rangle + \\\\mu^2 \\\\to 0\\\\). By compactness, \\\\(Tx_{n_k} \\\\to y\\\\), so \\\\(\\\\mu x_{n_k} \\\\to y\\\\) and \\\\(x_{n_k} \\\\to y/\\\\mu\\\\). Setting \\\\(e = y/\\\\|y\\\\|\\\\), we get \\\\(Te = \\\\mu e\\\\).'
                },
                {
                    id: 'ch16-ex09',
                    type: 'computation',
                    difficulty: 3,
                    question: 'Consider the integral operator \\\\((Kf)(x) = \\\\int_0^1 \\\\min(x,t) f(t)\\,dt\\\\) on \\\\(L^2[0,1]\\\\). Find its eigenvalues and eigenfunctions.',
                    hint: 'The kernel \\\\(\\\\min(x,t)\\\\) is the Green\'s function for \\\\(-u\'\' = f\\\\) with \\\\(u(0) = u\'(1) = 0\\\\). Convert \\\\(Kf = \\\\lambda f\\\\) to a boundary value problem.',
                    solution: 'If \\\\(Kf = \\\\lambda f\\\\), differentiating twice gives \\\\(-f = \\\\lambda f\'\'\\\\), i.e., \\\\(f\'\' + (1/\\\\lambda)f = 0\\\\) with \\\\(f(0) = 0\\\\), \\\\(f\'(1) = 0\\\\). The solutions are \\\\(f_n(x) = \\\\sin((n-1/2)\\\\pi x)\\\\) with \\\\(\\\\lambda_n = 1/((n-1/2)^2 \\\\pi^2)\\\\) for \\\\(n = 1,2,\\\\ldots\\\\).'
                }
            ]
        },
        // ===== Section 4 will be added next =====
        // placeholder
    ]
});
