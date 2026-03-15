window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: 'ch13',
  number: 13,
  title: 'Lp Spaces',
  subtitle: 'The workhorses of analysis',
  sections: [
    // ============================================================
    // Section 1: Measure Theory Review
    // ============================================================
    {
      id: 'measure-theory-review',
      title: 'Measure Theory Review',
      content: `
<div class="bridge-block chapter-opening">
<p><strong>The Workhorses of Analysis.</strong> The \(L^p\) spaces are where abstract functional analysis meets concrete applications. Every concept we have developed, norms, completeness, duality, reflexivity, weak compactness, comes to life in \(L^p\). These spaces are the natural habitat for Fourier analysis, probability theory, PDE, and much of applied mathematics. This chapter provides a self-contained treatment, connecting the abstract theory of Chapters 1-12 to the measure-theoretic foundations.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We review the essential measure theory: sigma-algebras, measures, measurable functions, and the Lebesgue integral. This section ensures we have the prerequisites for defining \(L^p\) rigorously in the next section.</p>
</div>

        <div class="env-block intuition">
          <p><strong>Why measure theory?</strong> The \\(L^p\\) spaces are built on the Lebesgue integral, which extends the Riemann integral to a vastly larger class of functions. To define \\(L^p\\), we need \\(\\sigma\\)-algebras, measurable functions, and the Lebesgue integral. This section is a rapid review of the essential prerequisites.</p>
        </div>

        <div class="env-block definition">
          <p><strong>Definition (\\(\\sigma\\)-Algebra):</strong> Let \\(X\\) be a set. A collection \\(\\mathcal{M} \\subseteq \\mathcal{P}(X)\\) is a <em>\\(\\sigma\\)-algebra</em> if:</p>
          <ol>
            <li>\\(X \\in \\mathcal{M}\\)</li>
            <li>If \\(A \\in \\mathcal{M}\\), then \\(A^c \\in \\mathcal{M}\\)</li>
            <li>If \\(A_1, A_2, \\ldots \\in \\mathcal{M}\\), then \\(\\bigcup_{n=1}^\\infty A_n \\in \\mathcal{M}\\)</li>
          </ol>
          <p>The pair \\((X, \\mathcal{M})\\) is a <em>measurable space</em>.</p>
        </div>

        <div class="env-block definition">
          <p><strong>Definition (Measure):</strong> A <em>measure</em> on \\((X, \\mathcal{M})\\) is a function \\(\\mu: \\mathcal{M} \\to [0, \\infty]\\) satisfying:</p>
          <ol>
            <li>\\(\\mu(\\varnothing) = 0\\)</li>
            <li><em>Countable additivity:</em> if \\(\\{A_n\\}\\) are pairwise disjoint sets in \\(\\mathcal{M}\\), then \\(\\mu\\!\\left(\\bigcup_{n=1}^\\infty A_n\\right) = \\sum_{n=1}^\\infty \\mu(A_n)\\)</li>
          </ol>
          <p>The triple \\((X, \\mathcal{M}, \\mu)\\) is a <em>measure space</em>. If \\(\\mu(X) < \\infty\\), we say \\(\\mu\\) is <em>finite</em>. If \\(\\mu(X) = 1\\), it is a <em>probability measure</em>. If \\(X = \\bigcup_n A_n\\) with \\(\\mu(A_n) < \\infty\\), then \\(\\mu\\) is <em>\\(\\sigma\\)-finite</em>.</p>
        </div>

        <div class="env-block example">
          <p><strong>Key Examples:</strong></p>
          <ul>
            <li><em>Lebesgue measure</em> on \\((\\mathbb{R}^n, \\mathcal{L})\\): the unique translation-invariant measure with \\(\\lambda([0,1]^n) = 1\\). It is \\(\\sigma\\)-finite but not finite.</li>
            <li><em>Counting measure</em> on any set \\(X\\): \\(\\mu(A) = |A|\\). Makes \\(\\ell^p\\) spaces a special case of \\(L^p\\).</li>
            <li><em>Dirac measure</em> \\(\\delta_x(A) = \\mathbf{1}_A(x)\\).</li>
          </ul>
        </div>

        <div class="env-block definition">
          <p><strong>Definition (Measurable Function):</strong> Let \\((X, \\mathcal{M})\\) and \\((Y, \\mathcal{N})\\) be measurable spaces. A function \\(f: X \\to Y\\) is <em>\\((\\mathcal{M}, \\mathcal{N})\\)-measurable</em> if \\(f^{-1}(B) \\in \\mathcal{M}\\) for all \\(B \\in \\mathcal{N}\\).</p>
          <p>When \\(Y = \\mathbb{R}\\) or \\(\\overline{\\mathbb{R}} = [-\\infty, \\infty]\\) with the Borel \\(\\sigma\\)-algebra, it suffices to check \\(f^{-1}((-\\infty, a]) \\in \\mathcal{M}\\) for all \\(a \\in \\mathbb{R}\\).</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (Stability of Measurable Functions):</strong> If \\(f, g: X \\to \\mathbb{R}\\) are measurable, then so are \\(f + g\\), \\(fg\\), \\(|f|\\), \\(\\max(f,g)\\), \\(\\min(f,g)\\). If \\(f_n\\) are measurable, then \\(\\sup_n f_n\\), \\(\\inf_n f_n\\), \\(\\limsup_n f_n\\), \\(\\liminf_n f_n\\) are measurable.</p>
        </div>

        <div class="env-block definition">
          <p><strong>Definition (Simple Function):</strong> A <em>simple function</em> is \\(\\varphi = \\sum_{k=1}^N c_k \\mathbf{1}_{A_k}\\) where \\(c_k \\in \\mathbb{R}\\) and \\(A_k \\in \\mathcal{M}\\). Its integral is</p>
          \\[ \\int_X \\varphi \\, d\\mu = \\sum_{k=1}^N c_k \\, \\mu(A_k). \\]
        </div>

        <div class="env-block definition">
          <p><strong>Definition (Lebesgue Integral):</strong> For measurable \\(f: X \\to [0, \\infty]\\),</p>
          \\[ \\int_X f \\, d\\mu = \\sup\\left\\{ \\int_X \\varphi \\, d\\mu : 0 \\leq \\varphi \\leq f, \\; \\varphi \\text{ simple} \\right\\}. \\]
          <p>For general measurable \\(f\\), write \\(f = f^+ - f^-\\) where \\(f^+ = \\max(f, 0)\\) and \\(f^- = \\max(-f, 0)\\). Then \\(f\\) is <em>integrable</em> (\\(f \\in L^1\\)) if both \\(\\int f^+ \\, d\\mu\\) and \\(\\int f^- \\, d\\mu\\) are finite, and we set \\(\\int f \\, d\\mu = \\int f^+ \\, d\\mu - \\int f^- \\, d\\mu\\).</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (Monotone Convergence \u2014 MCT):</strong> If \\(0 \\leq f_1 \\leq f_2 \\leq \\cdots\\) are measurable and \\(f_n \\uparrow f\\) pointwise, then</p>
          \\[ \\int_X f \\, d\\mu = \\lim_{n \\to \\infty} \\int_X f_n \\, d\\mu. \\]
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (Dominated Convergence \u2014 DCT):</strong> If \\(f_n \\to f\\) pointwise a.e. and \\(|f_n| \\leq g\\) for some \\(g \\in L^1(\\mu)\\), then \\(f \\in L^1(\\mu)\\) and</p>
          \\[ \\int_X f \\, d\\mu = \\lim_{n \\to \\infty} \\int_X f_n \\, d\\mu, \\quad \\lim_{n \\to \\infty} \\int_X |f_n - f| \\, d\\mu = 0. \\]
        </div>

        <div class="env-block theorem">
          <p><strong>Fatou's Lemma:</strong> If \\(f_n \\geq 0\\) are measurable, then</p>
          \\[ \\int_X \\liminf_{n \\to \\infty} f_n \\, d\\mu \\leq \\liminf_{n \\to \\infty} \\int_X f_n \\, d\\mu. \\]
        </div>

        <div class="env-block remark">
          <p><strong>Almost everywhere (a.e.):</strong> A property holds <em>a.e.</em> if the set where it fails has measure zero. For \\(L^p\\) theory, we identify functions that agree a.e. This is essential: \\(L^p\\) elements are <em>equivalence classes</em>, not individual functions.</p>
        </div>

        <div class="viz-placeholder" data-viz="sigma-algebra-viz"></div>
        <div class="viz-placeholder" data-viz="lebesgue-vs-riemann"></div>
      `,
      visualizations: [
        {
          id: 'sigma-algebra-viz',
          title: 'Sigma-Algebra Structure',
          description: 'Visualize a sigma-algebra on a finite set and its closure properties',
          setup: function(body, controls) {
            var engine = new VizEngine(body, { width: 560, height: 400, scale: 40 });
            var sets = ['A', 'B'];
            var showComplement = true;
            var showUnion = true;

            function draw() {
              var ctx = engine.ctx;
              var w = engine.width, h = engine.height;
              ctx.fillStyle = engine.colors.bg;
              ctx.fillRect(0, 0, w, h);

              engine.screenText('sigma-algebra on X = {1, 2, 3, 4}', w / 2, 25, engine.colors.white, 16);

              var cx = w / 2, cy = h / 2 + 10;
              var rx = 180, ry = 130;
              ctx.strokeStyle = engine.colors.axis;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
              ctx.stroke();
              engine.screenText('X', cx + rx + 15, cy, engine.colors.text, 14);

              var positions = {1: [cx - 80, cy - 50], 2: [cx + 60, cy - 50], 3: [cx - 80, cy + 40], 4: [cx + 60, cy + 40]};

              ctx.fillStyle = engine.colors.blue + '30';
              ctx.beginPath();
              ctx.ellipse(cx - 40, cy - 20, 80, 70, 0, 0, Math.PI * 2);
              ctx.fill();
              ctx.strokeStyle = engine.colors.blue;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.ellipse(cx - 40, cy - 20, 80, 70, 0, 0, Math.PI * 2);
              ctx.stroke();
              engine.screenText('A = {1, 3}', cx - 40, cy - 95, engine.colors.blue, 13);

              ctx.fillStyle = engine.colors.orange + '30';
              ctx.beginPath();
              ctx.ellipse(cx + 20, cy - 20, 80, 70, 0, 0, Math.PI * 2);
              ctx.fill();
              ctx.strokeStyle = engine.colors.orange;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.ellipse(cx + 20, cy - 20, 80, 70, 0, 0, Math.PI * 2);
              ctx.stroke();
              engine.screenText('B = {1, 2}', cx + 20, cy - 95, engine.colors.orange, 13);

              for (var key in positions) {
                var pos = positions[key];
                ctx.fillStyle = engine.colors.white;
                ctx.beginPath();
                ctx.arc(pos[0], pos[1], 12, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = engine.colors.bg;
                ctx.font = 'bold 14px -apple-system, sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(key, pos[0], pos[1]);
              }

              var saMembers = ['\u2205', '{1,3}', '{2,4}', '{1,2}', '{3,4}', '{1}', '{2,3,4}', '{1,2,3}', '{4}',
                '{1,3,4}', '{2}', '{3}', '{1,2,4}', '{1,2,3,4}'];
              engine.screenText('M = \u03C3(A, B) has 2\u2074 = 16 elements', w / 2, h - 40, engine.colors.teal, 13);
              engine.screenText('Closed under complement, countable union, intersection', w / 2, h - 20, engine.colors.text, 12);
            }

            draw();
            return engine;
          }
        },
        {
          id: 'lebesgue-vs-riemann',
          title: 'Lebesgue vs Riemann Integration',
          description: 'Compare horizontal slicing (Lebesgue) vs vertical slicing (Riemann)',
          setup: function(body, controls) {
            var engine = new VizEngine(body, { width: 560, height: 380, scale: 50, originX: 80, originY: 320 });
            var mode = 'riemann';
            var nSlices = 8;

            function f(x) { return 2 * Math.exp(-0.5 * x * x) + 0.3 * Math.sin(3 * x); }

            function draw() {
              engine.clear();
              var ctx = engine.ctx;

              engine.screenText(mode === 'riemann' ? 'Riemann: Vertical Slices' : 'Lebesgue: Horizontal Slices',
                engine.width / 2, 20, engine.colors.white, 16);

              ctx.strokeStyle = engine.colors.axis;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(80, 320);
              ctx.lineTo(520, 320);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(80, 320);
              ctx.lineTo(80, 30);
              ctx.stroke();

              if (mode === 'riemann') {
                var dx = 8.0 / nSlices;
                for (var i = 0; i < nSlices; i++) {
                  var xl = i * dx;
                  var xr = (i + 1) * dx;
                  var xm = (xl + xr) / 2;
                  var val = f(xm);
                  var sxl = 80 + xl * 55;
                  var sxr = 80 + xr * 55;
                  var sy = 320 - val * 120;
                  var colors = [engine.colors.blue, engine.colors.teal, engine.colors.purple, engine.colors.orange];
                  ctx.fillStyle = colors[i % 4] + '40';
                  ctx.fillRect(sxl, sy, sxr - sxl, 320 - sy);
                  ctx.strokeStyle = colors[i % 4];
                  ctx.lineWidth = 1;
                  ctx.strokeRect(sxl, sy, sxr - sxl, 320 - sy);
                }
              } else {
                var dy = 2.5 / nSlices;
                for (var j = 0; j < nSlices; j++) {
                  var yl = j * dy;
                  var yr = (j + 1) * dy;
                  var ym = (yl + yr) / 2;
                  var syl = 320 - yl * 120;
                  var syr = 320 - yr * 120;
                  var colors2 = [engine.colors.blue, engine.colors.teal, engine.colors.purple, engine.colors.orange];
                  ctx.fillStyle = colors2[j % 4] + '30';
                  ctx.strokeStyle = colors2[j % 4];
                  ctx.lineWidth = 1;
                  ctx.beginPath();
                  var started = false;
                  for (var xi = 0; xi <= 8; xi += 0.05) {
                    if (f(xi) >= yl && f(xi) <= yr) {
                      var sx = 80 + xi * 55;
                      if (!started) { ctx.moveTo(sx, syr); started = true; }
                      ctx.lineTo(sx, syr);
                    }
                  }
                  for (var xi2 = 8; xi2 >= 0; xi2 -= 0.05) {
                    if (f(xi2) >= yl && f(xi2) <= yr) {
                      var sx2 = 80 + xi2 * 55;
                      ctx.lineTo(sx2, syl);
                    }
                  }
                  ctx.closePath();
                  ctx.fill();
                  ctx.stroke();

                  ctx.setLineDash([4, 3]);
                  ctx.strokeStyle = colors2[j % 4] + '80';
                  ctx.beginPath();
                  ctx.moveTo(75, syl);
                  ctx.lineTo(520, syl);
                  ctx.stroke();
                  ctx.setLineDash([]);
                }
              }

              ctx.strokeStyle = engine.colors.white;
              ctx.lineWidth = 2.5;
              ctx.beginPath();
              for (var t = 0; t <= 8; t += 0.02) {
                var sx3 = 80 + t * 55;
                var sy3 = 320 - f(t) * 120;
                if (t === 0) ctx.moveTo(sx3, sy3); else ctx.lineTo(sx3, sy3);
              }
              ctx.stroke();

              engine.screenText('f(x)', 65, 30, engine.colors.text, 12, 'right');
              engine.screenText('x', 530, 325, engine.colors.text, 12);

              var desc = mode === 'riemann'
                ? 'Partition the domain, sample f on each piece'
                : 'Partition the range, measure {x : f(x) in slice}';
              engine.screenText(desc, engine.width / 2, engine.height - 15, engine.colors.text, 12);
            }

            draw();

            VizEngine.createButton(controls, 'Riemann', function() { mode = 'riemann'; draw(); });
            VizEngine.createButton(controls, 'Lebesgue', function() { mode = 'lebesgue'; draw(); });
            VizEngine.createSlider(controls, 'Slices', 2, 20, nSlices, 1, function(v) { nSlices = Math.round(v); draw(); });
            return engine;
          }
        }
      ],
      exercises: [
        {
          question: 'Show that if \\(f\\) is Riemann integrable on \\([a,b]\\), then \\(f\\) is Lebesgue measurable and the two integrals agree. Give an example of a bounded function that is Lebesgue integrable but not Riemann integrable.',
          hint: 'For the example, consider the characteristic function of the rationals in \\([0,1]\\). For the equivalence, approximate by step functions.',
          solution: 'If \\(f\\) is Riemann integrable on \\([a,b]\\), then \\(f\\) is bounded and continuous a.e. (Lebesgue criterion). Continuous a.e. implies measurable, and one can show the Lebesgue integral equals the Riemann integral by approximating with simple functions that refine Riemann partitions. For the example: \\(\\mathbf{1}_\\mathbb{Q} \\cap [0,1]\\) is Lebesgue integrable with \\(\\int \\mathbf{1}_\\mathbb{Q} = 0\\) (since \\(\\mathbb{Q}\\) has measure zero), but not Riemann integrable since every subinterval contains both rationals and irrationals.'
        },
        {
          question: 'Let \\(f_n = n \\cdot \\mathbf{1}_{[0, 1/n]}\\) on \\([0,1]\\). Show that \\(f_n \\to 0\\) pointwise a.e. and \\(\\int f_n = 1\\) for all \\(n\\). Why does this not contradict DCT?',
          hint: 'Check whether the domination condition \\(|f_n| \\leq g \\in L^1\\) can be satisfied.',
          solution: 'For \\(x > 0\\), once \\(n > 1/x\\) we have \\(f_n(x) = 0\\), so \\(f_n \\to 0\\) pointwise on \\((0,1]\\), which is a.e. But \\(\\int_0^1 f_n = n \\cdot (1/n) = 1 \\not\\to 0\\). This does not contradict DCT because there is no integrable dominating function: any \\(g \\geq f_n\\) for all \\(n\\) would satisfy \\(g(x) \\geq n\\) for \\(x \\in [0, 1/n]\\) for each \\(n\\), forcing \\(g(x) = \\infty\\) at \\(x = 0\\), and moreover \\(\\int g \\geq \\int f_n = 1\\) for all \\(n\\) in a way that prevents \\(g \\in L^1\\).'
        },
        {
          question: 'Let \\((X, \\mathcal{M}, \\mu)\\) be a measure space and \\(f_n \\geq 0\\) measurable with \\(\\sum_{n=1}^\\infty \\int f_n \\, d\\mu < \\infty\\). Prove that \\(\\sum_{n=1}^\\infty f_n(x) < \\infty\\) for \\(\\mu\\)-a.e. \\(x\\).',
          hint: 'Apply MCT to the partial sums \\(S_N = \\sum_{n=1}^N f_n\\) and use the finiteness of the integral.',
          solution: 'Let \\(S_N = \\sum_{n=1}^N f_n\\). Then \\(S_N \\uparrow S := \\sum_{n=1}^\\infty f_n\\). By MCT, \\(\\int S \\, d\\mu = \\lim_N \\int S_N \\, d\\mu = \\sum_{n=1}^\\infty \\int f_n \\, d\\mu < \\infty\\). Since \\(S\\) is a non-negative measurable function with finite integral, \\(S(x) < \\infty\\) for \\(\\mu\\)-a.e. \\(x\\) (otherwise \\(\\int S = \\infty\\)). This is the Borel-Cantelli-type argument used repeatedly in the Riesz-Fischer theorem.'
        }
      ]
    },

    // ============================================================
    // Section 2: Lp Spaces
    // ============================================================
    {
      id: 'lp-spaces-definition',
      title: 'L^p Spaces',
      content: `
<div class="bridge-block section-bridge">
<p><strong>Defining the Spaces.</strong> With measure theory in hand, we define \(L^p\) spaces as equivalence classes of measurable functions with finite \(p\)-th moment. The key challenge is showing that \(\|\cdot\|_p\) is indeed a norm, which requires the classical inequalities of Holder and Minkowski.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define \(L^p(\mu)\) for \(1 \leq p \leq \infty\), prove Holder's and Minkowski's inequalities (establishing the norm), and compare the \(L^p\) norms for different values of \(p\). We also address the quotient construction that identifies functions differing on null sets.</p>
</div>

        <div class="env-block definition">
          <p><strong>Definition (\\(L^p\\) Space):</strong> Let \\((X, \\mathcal{M}, \\mu)\\) be a measure space and \\(1 \\leq p < \\infty\\). Define</p>
          \\[ \\mathcal{L}^p(X, \\mu) = \\left\\{ f: X \\to \\mathbb{R} \\text{ (or } \\mathbb{C}\\text{)} : f \\text{ measurable}, \\; \\int_X |f|^p \\, d\\mu < \\infty \\right\\} \\]
          <p>with the functional</p>
          \\[ \\|f\\|_p = \\left( \\int_X |f|^p \\, d\\mu \\right)^{1/p}. \\]
          <p>This is a <em>seminorm</em>: \\(\\|f\\|_p = 0\\) iff \\(f = 0\\) a.e. We pass to the quotient \\(L^p = \\mathcal{L}^p / \\sim\\) where \\(f \\sim g\\) iff \\(f = g\\) a.e. Then \\(\\|\\cdot\\|_p\\) becomes a genuine norm.</p>
        </div>

        <div class="env-block definition">
          <p><strong>Definition (\\(L^\\infty\\) Space):</strong> For \\(p = \\infty\\),</p>
          \\[ \\|f\\|_\\infty = \\operatorname{ess\\,sup}_{x \\in X} |f(x)| = \\inf \\{ C \\geq 0 : |f(x)| \\leq C \\text{ a.e.} \\} \\]
          \\[ L^\\infty(X, \\mu) = \\{ f \\text{ measurable} : \\|f\\|_\\infty < \\infty \\} / \\sim. \\]
        </div>

        <div class="env-block example">
          <p><strong>Example (Sequence spaces):</strong> When \\(X = \\mathbb{N}\\) with counting measure, \\(L^p(\\mathbb{N}) = \\ell^p\\), the classical sequence space:</p>
          \\[ \\ell^p = \\left\\{ (a_n)_{n \\geq 1} : \\sum_{n=1}^\\infty |a_n|^p < \\infty \\right\\}, \\quad \\|(a_n)\\|_p = \\left( \\sum |a_n|^p \\right)^{1/p}. \\]
        </div>

        <div class="env-block remark">
          <p><strong>Conjugate exponents:</strong> For \\(1 < p < \\infty\\), the <em>conjugate exponent</em> \\(q\\) satisfies \\(\\frac{1}{p} + \\frac{1}{q} = 1\\), i.e., \\(q = \\frac{p}{p-1}\\). When \\(p = 1\\), we set \\(q = \\infty\\) and vice versa. The pair \\((p, q)\\) is central to all duality results.</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Lemma (Young's Inequality):</strong> For \\(a, b \\geq 0\\) and conjugate exponents \\(p, q\\) with \\(1 < p < \\infty\\),</p>
          \\[ ab \\leq \\frac{a^p}{p} + \\frac{b^q}{q}. \\]
          <p>Equality holds iff \\(a^p = b^q\\).</p>
        </div>

        <div class="env-block proof">
          <p><strong>Proof:</strong> The function \\(t \\mapsto e^t\\) is convex. With \\(\\alpha = 1/p\\) and \\(\\beta = 1/q = 1 - 1/p\\), by convexity of \\(\\exp\\):</p>
          \\[ ab = e^{\\ln a + \\ln b} = e^{\\alpha(p \\ln a) + \\beta(q \\ln b)} \\leq \\alpha e^{p \\ln a} + \\beta e^{q \\ln b} = \\frac{a^p}{p} + \\frac{b^q}{q}. \\quad \\square \\]
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (H\u00f6lder's Inequality):</strong> Let \\(1 \\leq p \\leq \\infty\\) and \\(\\frac{1}{p} + \\frac{1}{q} = 1\\). If \\(f \\in L^p\\) and \\(g \\in L^q\\), then \\(fg \\in L^1\\) and</p>
          \\[ \\|fg\\|_1 = \\int_X |fg| \\, d\\mu \\leq \\|f\\|_p \\, \\|g\\|_q. \\]
        </div>

        <div class="env-block proof">
          <p><strong>Proof (for \\(1 < p < \\infty\\)):</strong> If \\(\\|f\\|_p = 0\\) or \\(\\|g\\|_q = 0\\), the result is trivial. Otherwise, set \\(\\tilde{f} = f / \\|f\\|_p\\) and \\(\\tilde{g} = g / \\|g\\|_q\\), so \\(\\|\\tilde{f}\\|_p = \\|\\tilde{g}\\|_q = 1\\). By Young's inequality applied pointwise:</p>
          \\[ |\\tilde{f}(x) \\tilde{g}(x)| \\leq \\frac{|\\tilde{f}(x)|^p}{p} + \\frac{|\\tilde{g}(x)|^q}{q}. \\]
          <p>Integrating: \\(\\int |\\tilde{f} \\tilde{g}| \\leq \\frac{1}{p} + \\frac{1}{q} = 1\\). Unscaling gives the result. \\(\\square\\)</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (Minkowski's Inequality):</strong> For \\(1 \\leq p \\leq \\infty\\) and \\(f, g \\in L^p\\),</p>
          \\[ \\|f + g\\|_p \\leq \\|f\\|_p + \\|g\\|_p. \\]
          <p>This is the triangle inequality for \\(\\|\\cdot\\|_p\\), confirming it is a norm on \\(L^p\\).</p>
        </div>

        <div class="env-block proof">
          <p><strong>Proof (for \\(1 < p < \\infty\\)):</strong></p>
          \\[ \\|f+g\\|_p^p = \\int |f+g|^p \\leq \\int |f+g|^{p-1}|f| + \\int |f+g|^{p-1}|g|. \\]
          <p>Apply H\u00f6lder to each term with exponents \\(p\\) and \\(q = p/(p-1)\\). Note \\(|f+g|^{p-1} \\in L^q\\) since \\((p-1)q = p\\):</p>
          \\[ \\|f+g\\|_p^p \\leq \\|f+g\\|_p^{p-1}(\\|f\\|_p + \\|g\\|_p). \\]
          <p>Dividing by \\(\\|f+g\\|_p^{p-1}\\) (if nonzero) gives the result. \\(\\square\\)</p>
        </div>

        <div class="env-block remark">
          <p><strong>The \\(p < 1\\) case:</strong> For \\(0 < p < 1\\), \\(\\|\\cdot\\|_p\\) is <em>not</em> a norm (Minkowski fails). Instead, \\(d(f,g) = \\int |f - g|^p\\) defines a metric (without the \\(1/p\\) power), making \\(L^p\\) a complete metric space but not a normed space.</p>
        </div>

        <div class="env-block example">
          <p><strong>Example (Interpolation):</strong> If \\(f \\in L^{p_1} \\cap L^{p_2}\\) with \\(p_1 < p_2\\), then \\(f \\in L^p\\) for all \\(p_1 \\leq p \\leq p_2\\). Write \\(|f|^p = |f|^{p\\theta} \\cdot |f|^{p(1-\\theta)}\\) and apply H\u00f6lder. This is a precursor to Riesz-Thorin interpolation.</p>
        </div>

        <div class="viz-placeholder" data-viz="holder-inequality-viz"></div>
        <div class="viz-placeholder" data-viz="lp-norm-unit-ball"></div>
      `,
      visualizations: [
        {
          id: 'holder-inequality-viz',
          title: 'H\u00f6lder Inequality Illustration',
          description: 'Visualize Young inequality and how conjugate exponents balance f and g',
          setup: function(body, controls) {
            var engine = new VizEngine(body, { width: 560, height: 380, scale: 50, originX: 80, originY: 320 });
            var p = 2;

            function draw() {
              engine.clear();
              var ctx = engine.ctx;
              var q = p / (p - 1);

              engine.screenText("H\u00f6lder: ||fg||_1 \u2264 ||f||_p ||g||_q,  1/p + 1/q = 1", engine.width / 2, 20, engine.colors.white, 14);
              engine.screenText('p = ' + p.toFixed(2) + ',  q = ' + q.toFixed(2), engine.width / 2, 42, engine.colors.teal, 13);

              var xMax = 4;
              var steps = 200;

              function fFunc(x) { return Math.exp(-0.5 * x); }
              function gFunc(x) { return Math.pow(Math.max(0, 1 - 0.2 * x), 1.5); }

              var normFp = 0, normGq = 0, integralFG = 0;
              var dx = xMax / steps;
              for (var i = 0; i < steps; i++) {
                var x = (i + 0.5) * dx;
                normFp += Math.pow(fFunc(x), p) * dx;
                normGq += Math.pow(gFunc(x), q) * dx;
                integralFG += fFunc(x) * gFunc(x) * dx;
              }
              normFp = Math.pow(normFp, 1 / p);
              normGq = Math.pow(normGq, 1 / q);

              var scaleX = 420 / xMax;
              var scaleY = 250;
              var baseY = 320;
              var baseX = 80;

              ctx.strokeStyle = engine.colors.axis;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(baseX, baseY);
              ctx.lineTo(baseX + 440, baseY);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(baseX, baseY);
              ctx.lineTo(baseX, 50);
              ctx.stroke();

              ctx.fillStyle = engine.colors.purple + '25';
              ctx.beginPath();
              ctx.moveTo(baseX, baseY);
              for (var j = 0; j <= steps; j++) {
                var xv = j * dx;
                var yv = fFunc(xv) * gFunc(xv);
                ctx.lineTo(baseX + xv * scaleX, baseY - yv * scaleY);
              }
              ctx.lineTo(baseX + xMax * scaleX, baseY);
              ctx.closePath();
              ctx.fill();

              ctx.strokeStyle = engine.colors.blue;
              ctx.lineWidth = 2;
              ctx.beginPath();
              for (var j2 = 0; j2 <= steps; j2++) {
                var xv2 = j2 * dx;
                var yv2 = fFunc(xv2);
                var sx = baseX + xv2 * scaleX;
                var sy = baseY - yv2 * scaleY;
                if (j2 === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
              }
              ctx.stroke();

              ctx.strokeStyle = engine.colors.orange;
              ctx.lineWidth = 2;
              ctx.beginPath();
              for (var j3 = 0; j3 <= steps; j3++) {
                var xv3 = j3 * dx;
                var yv3 = gFunc(xv3);
                var sx3 = baseX + xv3 * scaleX;
                var sy3 = baseY - yv3 * scaleY;
                if (j3 === 0) ctx.moveTo(sx3, sy3); else ctx.lineTo(sx3, sy3);
              }
              ctx.stroke();

              ctx.strokeStyle = engine.colors.purple;
              ctx.lineWidth = 2;
              ctx.beginPath();
              for (var j4 = 0; j4 <= steps; j4++) {
                var xv4 = j4 * dx;
                var yv4 = fFunc(xv4) * gFunc(xv4);
                var sx4 = baseX + xv4 * scaleX;
                var sy4 = baseY - yv4 * scaleY;
                if (j4 === 0) ctx.moveTo(sx4, sy4); else ctx.lineTo(sx4, sy4);
              }
              ctx.stroke();

              engine.screenText('f', baseX + 15, baseY - fFunc(0.2) * scaleY - 10, engine.colors.blue, 14, 'left');
              engine.screenText('g', baseX + 15, baseY - gFunc(0.2) * scaleY - 10, engine.colors.orange, 14, 'left');
              engine.screenText('fg', baseX + 50, baseY - fFunc(0.5) * gFunc(0.5) * scaleY - 10, engine.colors.purple, 14, 'left');

              var lhs = integralFG.toFixed(3);
              var rhs = (normFp * normGq).toFixed(3);
              engine.screenText('\u222B|fg| = ' + lhs + '  \u2264  ||f||_p ||g||_q = ' + rhs, engine.width / 2, engine.height - 15, engine.colors.green, 13);
            }

            draw();
            VizEngine.createSlider(controls, 'p', 1.1, 10, 2, 0.1, function(v) { p = v; draw(); });
            return engine;
          }
        },
        {
          id: 'lp-norm-unit-ball',
          title: 'L^p Unit Ball in R^2',
          description: 'See how the unit ball shape changes with p',
          setup: function(body, controls) {
            var engine = new VizEngine(body, { width: 560, height: 400, scale: 120 });
            var p = 2;

            function draw() {
              engine.clear();
              engine.drawGrid(0.5);
              engine.drawAxes();

              engine.screenText('Unit ball: {(x,y) : |x|^p + |y|^p \u2264 1}', engine.width / 2, 20, engine.colors.white, 14);

              var ctx = engine.ctx;
              ctx.fillStyle = engine.colors.blue + '25';
              ctx.strokeStyle = engine.colors.blue;
              ctx.lineWidth = 2.5;
              ctx.beginPath();
              var steps = 400;
              for (var i = 0; i <= steps; i++) {
                var theta = (i / steps) * 2 * Math.PI;
                var cosT = Math.cos(theta);
                var sinT = Math.sin(theta);
                var r;
                if (p >= 50) {
                  r = 1 / Math.max(Math.abs(cosT), Math.abs(sinT));
                } else {
                  r = 1 / Math.pow(Math.pow(Math.abs(cosT), p) + Math.pow(Math.abs(sinT), p), 1 / p);
                }
                var x = r * cosT;
                var y = r * sinT;
                var pt = engine.toScreen(x, y);
                if (i === 0) ctx.moveTo(pt[0], pt[1]); else ctx.lineTo(pt[0], pt[1]);
              }
              ctx.closePath();
              ctx.fill();
              ctx.stroke();

              var pLabel = p >= 50 ? '\u221E' : p.toFixed(1);
              engine.screenText('p = ' + pLabel, engine.width / 2, engine.height - 15, engine.colors.teal, 15);
            }

            draw();
            VizEngine.createSlider(controls, 'p', 0.5, 50, 2, 0.1, function(v) { p = v; draw(); });
            return engine;
          }
        }
      ],
      exercises: [
        {
          question: 'Prove Young\'s inequality: for \\(a, b \\geq 0\\) and conjugate exponents \\(p, q\\), show \\(ab \\leq \\frac{a^p}{p} + \\frac{b^q}{q}\\) using the concavity of \\(\\ln\\).',
          hint: 'Use the fact that \\(\\ln\\) is concave: \\(\\alpha \\ln u + \\beta \\ln v \\leq \\ln(\\alpha u + \\beta v)\\) for \\(\\alpha + \\beta = 1\\).',
          solution: 'Since \\(\\ln\\) is concave, for \\(\\alpha = 1/p, \\beta = 1/q\\) with \\(\\alpha + \\beta = 1\\): \\(\\ln(ab) = \\ln a + \\ln b = \\alpha(p \\ln a) + \\beta(q \\ln b) \\leq \\ln(\\alpha \\cdot a^p + \\beta \\cdot b^q) = \\ln(a^p/p + b^q/q)\\). Exponentiating: \\(ab \\leq a^p/p + b^q/q\\). Equality when \\(a^p = b^q\\).'
        },
        {
          question: 'Let \\(\\mu(X) < \\infty\\). Show that if \\(1 \\leq p_1 < p_2 \\leq \\infty\\), then \\(L^{p_2}(X) \\subseteq L^{p_1}(X)\\) and \\(\\|f\\|_{p_1} \\leq \\mu(X)^{1/p_1 - 1/p_2} \\|f\\|_{p_2}\\).',
          hint: 'Apply H\u00f6lder with exponents \\(p_2/p_1\\) and its conjugate to \\(|f|^{p_1} \\cdot 1\\).',
          solution: 'Write \\(\\int |f|^{p_1} = \\int |f|^{p_1} \\cdot 1\\). Apply H\u00f6lder with exponent \\(r = p_2/p_1 > 1\\) and \\(r\' = r/(r-1)\\): \\(\\int |f|^{p_1} \\leq (\\int |f|^{p_1 \\cdot r})^{1/r} \\cdot (\\int 1^{r\'})^{1/r\'} = \\|f\\|_{p_2}^{p_1} \\cdot \\mu(X)^{1/r\'}\\). Taking \\(p_1\\)-th roots: \\(\\|f\\|_{p_1} \\leq \\|f\\|_{p_2} \\cdot \\mu(X)^{1/(p_1 r\')} = \\|f\\|_{p_2} \\cdot \\mu(X)^{1/p_1 - 1/p_2}\\).'
        },
        {
          question: 'Show that the inclusion in the previous exercise reverses for counting measure: if \\(X = \\mathbb{N}\\) and \\(p_1 < p_2\\), then \\(\\ell^{p_1} \\subseteq \\ell^{p_2}\\) and \\(\\|x\\|_{p_2} \\leq \\|x\\|_{p_1}\\).',
          hint: 'If \\(\\|x\\|_{p_1} = 1\\), then \\(|x_n| \\leq 1\\) for all \\(n\\), so \\(|x_n|^{p_2} \\leq |x_n|^{p_1}\\).',
          solution: 'WLOG \\(\\|x\\|_{p_1} = 1\\). Then \\(\\sum |x_n|^{p_1} = 1\\), so \\(|x_n| \\leq 1\\) for all \\(n\\). Since \\(p_2 > p_1\\) and \\(|x_n| \\leq 1\\), we have \\(|x_n|^{p_2} \\leq |x_n|^{p_1}\\). Summing: \\(\\sum |x_n|^{p_2} \\leq \\sum |x_n|^{p_1} = 1\\). Hence \\(\\|x\\|_{p_2} \\leq 1 = \\|x\\|_{p_1}\\). The inclusion direction is opposite to the finite measure case.'
        },
        {
          question: 'Prove the generalized H\u00f6lder inequality: if \\(\\frac{1}{p_1} + \\cdots + \\frac{1}{p_k} = 1\\) and \\(f_i \\in L^{p_i}\\), then \\(\\|f_1 \\cdots f_k\\|_1 \\leq \\prod_{i=1}^k \\|f_i\\|_{p_i}\\).',
          hint: 'Induction on \\(k\\), using the two-function H\u00f6lder inequality at each step.',
          solution: 'For \\(k=2\\) this is standard H\u00f6lder. For the inductive step, group \\(f_1 \\cdots f_{k-1}\\) and \\(f_k\\). Apply H\u00f6lder with \\(\\frac{1}{r} + \\frac{1}{p_k} = 1\\) where \\(\\frac{1}{r} = \\frac{1}{p_1} + \\cdots + \\frac{1}{p_{k-1}}\\). Then \\(\\|f_1 \\cdots f_k\\|_1 \\leq \\|f_1 \\cdots f_{k-1}\\|_r \\|f_k\\|_{p_k}\\). By induction on the first factor (with exponents \\(p_i/r\\)), we get the result.'
        }
      ]
    },

    // ============================================================
    // Section 3: Completeness (Riesz-Fischer)
    // ============================================================
    {
      id: 'completeness-riesz-fischer',
      title: 'Completeness (Riesz\u2013Fischer)',
      content: `
<div class="bridge-block section-bridge">
<p><strong>\(L^p\) Spaces Are Banach.</strong> The Riesz-Fischer theorem establishes that \(L^p\) spaces are complete, making them Banach spaces (and \(L^2\) a Hilbert space). The proof technique, extracting an almost-everywhere convergent subsequence from a Cauchy sequence, is a paradigm that recurs throughout measure theory.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove the Riesz-Fischer theorem, carefully distinguishing convergence in \(L^p\)-norm from pointwise convergence. We also study the "typewriter sequence," which shows that \(L^p\)-convergence does not imply pointwise convergence.</p>
</div>

        <div class="env-block intuition">
          <p><strong>The key result:</strong> \\(L^p\\) is a Banach space for \\(1 \\leq p \\leq \\infty\\). The proof strategy \u2014 extracting a rapidly convergent subsequence and using the completeness of \\(\\mathbb{R}\\) pointwise \u2014 is a paradigm that reappears throughout functional analysis.</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (Riesz\u2013Fischer):</strong> For \\(1 \\leq p \\leq \\infty\\), the space \\((L^p(X, \\mu), \\|\\cdot\\|_p)\\) is a Banach space (i.e., complete).</p>
        </div>

        <div class="env-block proof">
          <p><strong>Proof (for \\(1 \\leq p < \\infty\\)):</strong> Let \\((f_n)\\) be Cauchy in \\(L^p\\). We must find \\(f \\in L^p\\) with \\(\\|f_n - f\\|_p \\to 0\\).</p>
          <p><strong>Step 1 (Rapidly convergent subsequence):</strong> Choose \\(n_1 < n_2 < \\cdots\\) with \\(\\|f_{n_{k+1}} - f_{n_k}\\|_p < 2^{-k}\\).</p>
          <p><strong>Step 2 (Pointwise limit):</strong> Define \\(g_N = \\sum_{k=1}^N |f_{n_{k+1}} - f_{n_k}|\\). By Minkowski, \\(\\|g_N\\|_p \\leq \\sum_{k=1}^N 2^{-k} < 1\\). By MCT, \\(g = \\lim g_N\\) satisfies \\(\\|g\\|_p \\leq 1\\), so \\(g(x) < \\infty\\) a.e.</p>
          <p>Where \\(g(x) < \\infty\\), the telescoping series \\(f_{n_1}(x) + \\sum_{k=1}^\\infty (f_{n_{k+1}}(x) - f_{n_k}(x))\\) converges absolutely. Define \\(f(x)\\) as this limit (and \\(0\\) elsewhere). Then \\(f_{n_k} \\to f\\) pointwise a.e.</p>
          <p><strong>Step 3 (\\(L^p\\) convergence):</strong> By Fatou's lemma, for any \\(\\varepsilon > 0\\), choosing \\(K\\) large enough so that \\(\\|f_m - f_n\\|_p < \\varepsilon\\) for \\(m, n \\geq n_K\\):</p>
          \\[ \\|f - f_n\\|_p^p = \\int |f - f_n|^p = \\int \\liminf_{k \\to \\infty} |f_{n_k} - f_n|^p \\leq \\liminf_{k \\to \\infty} \\|f_{n_k} - f_n\\|_p^p \\leq \\varepsilon^p. \\]
          <p>So \\(f_{n_k} \\to f\\) in \\(L^p\\). Since \\((f_n)\\) is Cauchy and has a convergent subsequence, the full sequence converges: \\(\\|f_n - f\\|_p \\to 0\\). \\(\\square\\)</p>
        </div>

        <div class="env-block proof">
          <p><strong>Proof (for \\(p = \\infty\\)):</strong> Let \\((f_n)\\) be Cauchy in \\(L^\\infty\\). For each pair \\(m, n\\), let \\(N_{m,n} = \\{x : |f_m(x) - f_n(x)| > \\|f_m - f_n\\|_\\infty\\}\\), which has measure zero. Let \\(N = \\bigcup_{m,n} N_{m,n}\\) (countable union, still measure zero). On \\(X \\setminus N\\), \\((f_n(x))\\) is Cauchy in \\(\\mathbb{R}\\), hence converges to some \\(f(x)\\). Set \\(f = 0\\) on \\(N\\). Then \\(\\|f_n - f\\|_\\infty \\to 0\\). \\(\\square\\)</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Corollary (\\(L^p\\) convergence implies a.e. subsequential convergence):</strong> If \\(f_n \\to f\\) in \\(L^p\\), then there exists a subsequence \\(f_{n_k} \\to f\\) pointwise a.e.</p>
        </div>

        <div class="env-block remark">
          <p><strong>Warning:</strong> \\(L^p\\) convergence does <em>not</em> imply pointwise a.e. convergence of the full sequence. The "typewriter sequence" on \\([0,1]\\) (indicators of intervals that cycle through \\([0,1]\\) with shrinking length) converges in \\(L^1\\) to \\(0\\) but diverges pointwise everywhere.</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (Modes of Convergence):</strong> For a finite measure space:</p>
          <ul>
            <li>\\(L^p\\) convergence \\(\\Rightarrow\\) convergence in measure</li>
            <li>Pointwise a.e. convergence \\(\\Rightarrow\\) convergence in measure (Egorov's theorem gives "almost uniform")</li>
            <li>Neither \\(L^p\\) convergence nor pointwise a.e. convergence implies the other in general</li>
            <li>Convergence in measure \\(\\Rightarrow\\) a.e. convergence of a subsequence</li>
          </ul>
        </div>

        <div class="viz-placeholder" data-viz="convergent-sequence-l2"></div>
        <div class="viz-placeholder" data-viz="typewriter-sequence"></div>
      `,
      visualizations: [
        {
          id: 'convergent-sequence-l2',
          title: 'Convergent Sequence in L^2',
          description: 'Watch a Cauchy sequence converge in L^2 norm',
          setup: function(body, controls) {
            var engine = new VizEngine(body, { width: 560, height: 380, scale: 50, originX: 60, originY: 300 });
            var nTerms = 1;
            var maxTerms = 12;

            function targetF(x) {
              if (x < 0 || x > Math.PI) return 0;
              return Math.sin(x);
            }

            function approx(x, N) {
              var sum = 0;
              for (var k = 1; k <= N; k++) {
                var ck = 0;
                var steps = 200;
                var dx = Math.PI / steps;
                for (var i = 0; i < steps; i++) {
                  var xi = (i + 0.5) * dx;
                  ck += targetF(xi) * Math.sin(k * xi) * dx;
                }
                ck *= 2 / Math.PI;
                sum += ck * Math.sin(k * x);
              }
              return sum;
            }

            function draw() {
              engine.clear();
              var ctx = engine.ctx;

              engine.screenText('Fourier sine series converging to sin(x) in L\u00B2[0,\u03C0]', engine.width / 2, 20, engine.colors.white, 14);

              ctx.strokeStyle = engine.colors.axis;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(60, 300);
              ctx.lineTo(530, 300);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(60, 300);
              ctx.lineTo(60, 30);
              ctx.stroke();

              var scaleX = 450 / Math.PI;
              var scaleY = 220;
              var baseX = 60, baseY = 300;

              ctx.strokeStyle = engine.colors.white;
              ctx.lineWidth = 2.5;
              ctx.beginPath();
              for (var i = 0; i <= 200; i++) {
                var x = i * Math.PI / 200;
                var y = targetF(x);
                var sx = baseX + x * scaleX;
                var sy = baseY - y * scaleY;
                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
              }
              ctx.stroke();

              ctx.strokeStyle = engine.colors.blue;
              ctx.lineWidth = 2;
              ctx.beginPath();
              for (var j = 0; j <= 200; j++) {
                var x2 = j * Math.PI / 200;
                var y2 = approx(x2, nTerms);
                var sx2 = baseX + x2 * scaleX;
                var sy2 = baseY - y2 * scaleY;
                if (j === 0) ctx.moveTo(sx2, sy2); else ctx.lineTo(sx2, sy2);
              }
              ctx.stroke();

              var l2Error = 0;
              var dx2 = Math.PI / 200;
              for (var k = 0; k < 200; k++) {
                var xk = (k + 0.5) * dx2;
                var diff = targetF(xk) - approx(xk, nTerms);
                l2Error += diff * diff * dx2;
              }
              l2Error = Math.sqrt(l2Error);

              engine.screenText('f(x) = sin(x)', 480, 130, engine.colors.white, 12, 'left');
              engine.screenText('f_' + nTerms, 480, 155, engine.colors.blue, 12, 'left');
              engine.screenText('||f - f_' + nTerms + '||_2 = ' + l2Error.toFixed(4), engine.width / 2, engine.height - 15, engine.colors.green, 13);
            }

            draw();
            VizEngine.createSlider(controls, 'Terms N', 1, maxTerms, 1, 1, function(v) { nTerms = Math.round(v); draw(); });
            return engine;
          }
        },
        {
          id: 'typewriter-sequence',
          title: 'Typewriter Sequence',
          description: 'L^1 convergence without pointwise convergence: intervals cycling through [0,1]',
          setup: function(body, controls) {
            var engine = new VizEngine(body, { width: 560, height: 340, scale: 40, originX: 60, originY: 280 });
            var step = 1;
            var maxStep = 30;

            function getInterval(n) {
              var k = 0;
              var m = n;
              while (m >= (1 << k)) {
                m -= (1 << k);
                k++;
              }
              var denom = 1 << k;
              var left = m / denom;
              var right = (m + 1) / denom;
              return [left, right];
            }

            function draw() {
              engine.clear();
              var ctx = engine.ctx;

              engine.screenText('Typewriter Sequence: f_n = 1_{[a_n, b_n]}', engine.width / 2, 20, engine.colors.white, 14);

              var baseX = 60, baseY = 280;
              var scaleX = 440;
              var scaleY = 180;

              ctx.strokeStyle = engine.colors.axis;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(baseX, baseY);
              ctx.lineTo(baseX + scaleX + 20, baseY);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(baseX, baseY);
              ctx.lineTo(baseX, baseY - scaleY - 30);
              ctx.stroke();

              engine.screenText('0', baseX, baseY + 15, engine.colors.text, 12);
              engine.screenText('1', baseX + scaleX, baseY + 15, engine.colors.text, 12);

              var interval = getInterval(step - 1);
              var left = interval[0];
              var right = interval[1];

              ctx.fillStyle = engine.colors.blue + '40';
              ctx.fillRect(baseX + left * scaleX, baseY - scaleY, (right - left) * scaleX, scaleY);

              ctx.strokeStyle = engine.colors.blue;
              ctx.lineWidth = 2.5;
              ctx.beginPath();
              ctx.moveTo(baseX, baseY);
              ctx.lineTo(baseX + left * scaleX, baseY);
              ctx.lineTo(baseX + left * scaleX, baseY - scaleY);
              ctx.lineTo(baseX + right * scaleX, baseY - scaleY);
              ctx.lineTo(baseX + right * scaleX, baseY);
              ctx.lineTo(baseX + scaleX, baseY);
              ctx.stroke();

              engine.screenText('1', baseX - 15, baseY - scaleY, engine.colors.text, 12);

              var width = right - left;
              engine.screenText('n = ' + step + ':  f_n = 1_{[' + left.toFixed(3) + ', ' + right.toFixed(3) + ']}', engine.width / 2, engine.height - 35, engine.colors.teal, 13);
              engine.screenText('||f_n||_1 = ' + width.toFixed(4) + ' \u2192 0,  but f_n(x) \u219B 0 for any x', engine.width / 2, engine.height - 15, engine.colors.orange, 12);
            }

            draw();
            VizEngine.createSlider(controls, 'Step n', 1, maxStep, 1, 1, function(v) { step = Math.round(v); draw(); });
            return engine;
          }
        }
      ],
      exercises: [
        {
          question: 'Complete the details of the Riesz-Fischer proof: show that \\(f \\in L^p\\) (not just that \\(f\\) is defined a.e.).',
          hint: 'Use Minkowski for partial sums and Fatou to pass to the limit.',
          solution: 'We have \\(f_{n_k}(x) = f_{n_1}(x) + \\sum_{j=1}^{k-1} (f_{n_{j+1}}(x) - f_{n_j}(x))\\). By Minkowski: \\(\\|f_{n_k}\\|_p \\leq \\|f_{n_1}\\|_p + \\sum_{j=1}^{k-1} \\|f_{n_{j+1}} - f_{n_j}\\|_p \\leq \\|f_{n_1}\\|_p + 1\\). By Fatou: \\(\\|f\\|_p^p = \\int |f|^p = \\int \\liminf_k |f_{n_k}|^p \\leq \\liminf_k \\int |f_{n_k}|^p \\leq (\\|f_{n_1}\\|_p + 1)^p < \\infty\\). So \\(f \\in L^p\\).'
        },
        {
          question: 'Show that \\(L^p\\) convergence implies convergence in measure: if \\(\\|f_n - f\\|_p \\to 0\\), then for every \\(\\varepsilon > 0\\), \\(\\mu(\\{|f_n - f| > \\varepsilon\\}) \\to 0\\).',
          hint: 'Use Chebyshev (Markov) inequality.',
          solution: 'By Chebyshev-Markov: \\(\\mu(\\{|f_n - f| > \\varepsilon\\}) = \\mu(\\{|f_n - f|^p > \\varepsilon^p\\}) \\leq \\frac{1}{\\varepsilon^p} \\int |f_n - f|^p = \\frac{\\|f_n - f\\|_p^p}{\\varepsilon^p} \\to 0\\).'
        },
        {
          question: 'Construct the typewriter sequence explicitly and verify: (a) \\(\\|f_n\\|_1 \\to 0\\), (b) for every \\(x \\in [0,1]\\), \\(\\limsup_n f_n(x) = 1\\).',
          hint: 'Enumerate: \\(f_1 = \\mathbf{1}_{[0,1]}\\), \\(f_2 = \\mathbf{1}_{[0,1/2]}\\), \\(f_3 = \\mathbf{1}_{[1/2,1]}\\), \\(f_4 = \\mathbf{1}_{[0,1/3]}\\), etc.',
          solution: 'At stage \\(k\\), we partition \\([0,1]\\) into \\(k\\) equal pieces and cycle through them. The \\(n\\)-th function \\(f_n\\) is the indicator of one such piece. As \\(k\\) grows, the pieces shrink, so \\(\\|f_n\\|_1 = 1/k \\to 0\\). But every point \\(x \\in [0,1]\\) belongs to some piece at every stage, so \\(f_n(x) = 1\\) infinitely often, giving \\(\\limsup f_n(x) = 1\\). Thus \\(f_n \\to 0\\) in \\(L^1\\) but \\(f_n \\not\\to 0\\) pointwise anywhere.'
        }
      ]
    },

    // ============================================================
    // Section 4: Dense Subspaces
    // ============================================================
    {
      id: 'dense-subspaces',
      title: 'Dense Subspaces',
      content: `
<div class="bridge-block section-bridge">
<p><strong>Approximation in \(L^p\).</strong> For many purposes, it suffices to work with "nice" functions (continuous, smooth, simple) and then pass to limits. Dense subspace results tell us exactly which approximations are valid. Separability of \(L^p\) for \(1 \leq p < \infty\) is a direct consequence.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove that simple functions, continuous functions, and \(C_c^\infty\) functions are dense in \(L^p\) for \(1 \leq p < \infty\). We also show that \(L^\infty\) is not separable, highlighting the special role of the endpoint case.</p>
</div>

        <div class="env-block intuition">
          <p><strong>Motivation:</strong> For many purposes (approximation, PDE theory, Fourier analysis), we need to know that "nice" functions are dense in \\(L^p\\). This means any \\(L^p\\) function can be approximated arbitrarily well by simple functions, continuous functions, or even smooth compactly supported functions.</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (Simple Functions are Dense):</strong> For \\(1 \\leq p < \\infty\\), the simple functions in \\(L^p\\) are dense in \\(L^p(X, \\mu)\\).</p>
        </div>

        <div class="env-block proof">
          <p><strong>Proof:</strong> For \\(f \\geq 0\\) measurable, define \\(\\varphi_n = \\sum_{k=0}^{n 2^n - 1} \\frac{k}{2^n} \\mathbf{1}_{\\{k/2^n \\leq f < (k+1)/2^n\\}} + n \\cdot \\mathbf{1}_{\\{f \\geq n\\}}\\). Then \\(0 \\leq \\varphi_n \\leq \\varphi_{n+1} \\leq f\\) and \\(\\varphi_n \\to f\\) pointwise. Since \\(|f - \\varphi_n|^p \\leq |f|^p \\in L^1\\), DCT gives \\(\\|f - \\varphi_n\\|_p \\to 0\\). For general \\(f = f^+ - f^-\\), approximate each part. \\(\\square\\)</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (\\(C_c(\\mathbb{R}^n)\\) is Dense in \\(L^p(\\mathbb{R}^n)\\)):</strong> For \\(1 \\leq p < \\infty\\), the continuous functions with compact support are dense in \\(L^p(\\mathbb{R}^n, \\lambda)\\) (Lebesgue measure).</p>
        </div>

        <div class="env-block proof">
          <p><strong>Proof sketch:</strong> By the previous result, simple functions are dense. It suffices to approximate \\(\\mathbf{1}_A\\) for \\(A\\) measurable with \\(\\lambda(A) < \\infty\\). By regularity of Lebesgue measure, approximate \\(A\\) by a compact set \\(K \\subset A\\) and an open set \\(U \\supset A\\) with \\(\\lambda(U \\setminus K) < \\varepsilon\\). By Urysohn's lemma, there exists \\(g \\in C_c\\) with \\(\\mathbf{1}_K \\leq g \\leq \\mathbf{1}_U\\). Then \\(\\|\\mathbf{1}_A - g\\|_p^p \\leq \\lambda(U \\setminus K) < \\varepsilon\\). \\(\\square\\)</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (\\(C_c^\\infty(\\mathbb{R}^n)\\) is Dense in \\(L^p(\\mathbb{R}^n)\\)):</strong> For \\(1 \\leq p < \\infty\\), smooth compactly supported functions (test functions) are dense in \\(L^p(\\mathbb{R}^n)\\).</p>
        </div>

        <div class="env-block proof">
          <p><strong>Proof sketch:</strong> Given \\(f \\in C_c\\), convolve with a mollifier \\(\\rho_\\varepsilon(x) = \\varepsilon^{-n} \\rho(x/\\varepsilon)\\) where \\(\\rho \\in C_c^\\infty\\), \\(\\rho \\geq 0\\), \\(\\int \\rho = 1\\). Then \\(f * \\rho_\\varepsilon \\in C_c^\\infty\\) and \\(\\|f * \\rho_\\varepsilon - f\\|_p \\to 0\\) as \\(\\varepsilon \\to 0\\) (by uniform continuity of \\(f\\)). Combined with density of \\(C_c\\), this gives density of \\(C_c^\\infty\\). \\(\\square\\)</p>
        </div>

        <div class="env-block remark">
          <p><strong>The chain of dense subspaces:</strong> For \\(1 \\leq p < \\infty\\) on \\(\\mathbb{R}^n\\):</p>
          \\[ C_c^\\infty(\\mathbb{R}^n) \\subset C_c(\\mathbb{R}^n) \\subset L^p(\\mathbb{R}^n) \\]
          <p>and each inclusion is dense. This fails for \\(p = \\infty\\): continuous functions are <em>not</em> dense in \\(L^\\infty\\) (the closure of \\(C_c\\) in \\(\\|\\cdot\\|_\\infty\\) is \\(C_0\\), functions vanishing at infinity).</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (Step Functions):</strong> On \\(\\mathbb{R}\\), step functions (finite linear combinations of indicators of intervals) are dense in \\(L^p(\\mathbb{R})\\) for \\(1 \\leq p < \\infty\\).</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (Lusin's Theorem):</strong> Let \\(f: \\mathbb{R}^n \\to \\mathbb{R}\\) be measurable and finite a.e. For every \\(\\varepsilon > 0\\), there exists a closed set \\(F\\) with \\(\\lambda(F^c) < \\varepsilon\\) such that \\(f|_F\\) is continuous. Informally: "every measurable function is nearly continuous."</p>
        </div>

        <div class="env-block remark">
          <p><strong>Separability:</strong> \\(L^p(\\mathbb{R}^n)\\) is separable for \\(1 \\leq p < \\infty\\): a countable dense subset is given by simple functions with rational coefficients on products of intervals with rational endpoints. In contrast, \\(L^\\infty\\) is <em>not</em> separable.</p>
        </div>

        <div class="viz-placeholder" data-viz="simple-function-approx"></div>
        <div class="viz-placeholder" data-viz="mollifier-convolution"></div>
      `,
      visualizations: [
        {
          id: 'simple-function-approx',
          title: 'Approximation by Simple Functions',
          description: 'Watch simple functions approximate a target function from below',
          setup: function(body, controls) {
            var engine = new VizEngine(body, { width: 560, height: 380, scale: 50, originX: 60, originY: 320 });
            var nBits = 2;

            function target(x) {
              if (x < 0 || x > 4) return 0;
              return 1.5 * Math.exp(-0.3 * (x - 2) * (x - 2)) + 0.5 * Math.sin(2 * x) * Math.exp(-0.1 * x);
            }

            function draw() {
              engine.clear();
              var ctx = engine.ctx;
              var baseX = 60, baseY = 320;
              var scaleX = 110, scaleY = 130;
              var n = Math.pow(2, nBits);

              engine.screenText('Simple function approximation (2^n = ' + n + ' levels)', engine.width / 2, 20, engine.colors.white, 14);

              ctx.strokeStyle = engine.colors.axis;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(baseX, baseY);
              ctx.lineTo(baseX + 470, baseY);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(baseX, baseY);
              ctx.lineTo(baseX, 30);
              ctx.stroke();

              var maxVal = 2;
              var xRange = 4;
              var resolution = 400;
              var dx = xRange / resolution;

              for (var i = 0; i < resolution; i++) {
                var x = i * dx;
                var val = target(x);
                var level = Math.floor(val * n / maxVal);
                if (level >= n) level = n - 1;
                var approxVal = level * maxVal / n;
                var sx = baseX + x * scaleX;
                var sw = dx * scaleX + 1;
                var sh = approxVal * scaleY;
                var hue = (level / n) * 0.7;
                var colors = [engine.colors.blue, engine.colors.teal, engine.colors.green, engine.colors.orange,
                  engine.colors.purple, engine.colors.pink, engine.colors.yellow, engine.colors.red];
                ctx.fillStyle = (colors[level % colors.length] || engine.colors.blue) + '50';
                ctx.fillRect(sx, baseY - sh, sw, sh);
              }

              for (var lev = 0; lev < n; lev++) {
                var yVal = lev * maxVal / n;
                var sy = baseY - yVal * scaleY;
                ctx.setLineDash([3, 3]);
                ctx.strokeStyle = engine.colors.grid;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(baseX, sy);
                ctx.lineTo(baseX + 470, sy);
                ctx.stroke();
                ctx.setLineDash([]);
              }

              ctx.strokeStyle = engine.colors.white;
              ctx.lineWidth = 2.5;
              ctx.beginPath();
              for (var j = 0; j <= resolution; j++) {
                var x2 = j * dx;
                var y2 = target(x2);
                var sx2 = baseX + x2 * scaleX;
                var sy2 = baseY - y2 * scaleY;
                if (j === 0) ctx.moveTo(sx2, sy2); else ctx.lineTo(sx2, sy2);
              }
              ctx.stroke();

              var l2Err = 0;
              for (var k = 0; k < resolution; k++) {
                var xk = (k + 0.5) * dx;
                var vk = target(xk);
                var levK = Math.floor(vk * n / maxVal);
                if (levK >= n) levK = n - 1;
                var approxK = levK * maxVal / n;
                l2Err += (vk - approxK) * (vk - approxK) * dx;
              }
              l2Err = Math.sqrt(l2Err);

              engine.screenText('||f - \u03C6_n||_2 = ' + l2Err.toFixed(4), engine.width / 2, engine.height - 15, engine.colors.green, 13);
            }

            draw();
            VizEngine.createSlider(controls, 'Bits (n)', 1, 7, 2, 1, function(v) { nBits = Math.round(v); draw(); });
            return engine;
          }
        },
        {
          id: 'mollifier-convolution',
          title: 'Mollifier Smoothing',
          description: 'Convolving with a smooth bump function approximates in L^p',
          setup: function(body, controls) {
            var engine = new VizEngine(body, { width: 560, height: 380, scale: 50, originX: 60, originY: 310 });
            var epsilon = 0.5;

            function target(x) {
              if (x < 1) return 0;
              if (x < 2) return 1;
              if (x < 3) return 0.5;
              if (x < 4) return 0;
              return 0;
            }

            function mollifier(x, eps) {
              var r = x / eps;
              if (Math.abs(r) >= 1) return 0;
              return Math.exp(-1 / (1 - r * r)) / eps * 1.7864;
            }

            function convolved(x, eps) {
              var sum = 0;
              var dt = 0.01;
              for (var t = -eps; t <= eps; t += dt) {
                sum += target(x - t) * mollifier(t, eps) * dt;
              }
              return sum;
            }

            function draw() {
              engine.clear();
              var ctx = engine.ctx;
              var baseX = 60, baseY = 310;
              var scaleX = 90, scaleY = 180;

              engine.screenText('Mollifier convolution: f * \u03C1_\u03B5,  \u03B5 = ' + epsilon.toFixed(2), engine.width / 2, 20, engine.colors.white, 14);

              ctx.strokeStyle = engine.colors.axis;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(baseX, baseY);
              ctx.lineTo(baseX + 480, baseY);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(baseX, baseY);
              ctx.lineTo(baseX, 40);
              ctx.stroke();

              ctx.strokeStyle = engine.colors.white + '80';
              ctx.lineWidth = 2;
              ctx.setLineDash([5, 3]);
              ctx.beginPath();
              var steps = 500;
              for (var i = 0; i <= steps; i++) {
                var x = i * 5 / steps;
                var y = target(x);
                var sx = baseX + x * scaleX;
                var sy = baseY - y * scaleY;
                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
              }
              ctx.stroke();
              ctx.setLineDash([]);

              ctx.strokeStyle = engine.colors.blue;
              ctx.lineWidth = 2.5;
              ctx.beginPath();
              for (var j = 0; j <= steps; j++) {
                var x2 = j * 5 / steps;
                var y2 = convolved(x2, epsilon);
                var sx2 = baseX + x2 * scaleX;
                var sy2 = baseY - y2 * scaleY;
                if (j === 0) ctx.moveTo(sx2, sy2); else ctx.lineTo(sx2, sy2);
              }
              ctx.stroke();

              engine.screenText('f (step function)', 400, 80, engine.colors.white, 12, 'left');
              engine.screenText('f * \u03C1_\u03B5 (smooth)', 400, 100, engine.colors.blue, 12, 'left');

              var l2Err = 0;
              var dx = 5 / steps;
              for (var k = 0; k < steps; k++) {
                var xk = (k + 0.5) * dx;
                var diff = target(xk) - convolved(xk, epsilon);
                l2Err += diff * diff * dx;
              }
              l2Err = Math.sqrt(l2Err);

              engine.screenText('||f - f*\u03C1_\u03B5||_2 = ' + l2Err.toFixed(4), engine.width / 2, engine.height - 15, engine.colors.green, 13);
            }

            draw();
            VizEngine.createSlider(controls, '\u03B5', 0.05, 1.0, 0.5, 0.05, function(v) { epsilon = v; draw(); });
            return engine;
          }
        }
      ],
      exercises: [
        {
          question: 'Show that \\(L^\\infty([0,1])\\) is not separable. (Hint: consider the uncountable family \\(\\{\\mathbf{1}_{[0,t]} : t \\in (0,1)\\}\\).)',
          hint: 'Show that \\(\\|\\mathbf{1}_{[0,s]} - \\mathbf{1}_{[0,t]}\\|_\\infty = 1\\) for \\(s \\neq t\\), and use the fact that an uncountable collection of disjoint open balls prevents separability.',
          solution: 'For \\(s < t\\), \\(\\mathbf{1}_{[0,t]}(x) - \\mathbf{1}_{[0,s]}(x) = \\mathbf{1}_{(s,t]}(x)\\), which equals 1 on \\((s,t]\\). So \\(\\|\\mathbf{1}_{[0,s]} - \\mathbf{1}_{[0,t]}\\|_\\infty = 1\\). The open balls \\(B(\\mathbf{1}_{[0,t]}, 1/2)\\) are pairwise disjoint (since any two centers are distance 1 apart). Any dense subset must intersect each of these uncountably many disjoint balls, requiring uncountably many elements. So \\(L^\\infty\\) is not separable.'
        },
        {
          question: 'Prove that \\(C_c(\\mathbb{R}^n)\\) is NOT dense in \\(L^\\infty(\\mathbb{R}^n)\\). What is the closure of \\(C_c(\\mathbb{R}^n)\\) in the \\(L^\\infty\\) norm?',
          hint: 'Consider the constant function \\(f = 1\\). Can it be approximated uniformly by compactly supported continuous functions?',
          solution: 'The constant function \\(f \\equiv 1\\) satisfies \\(\\|f - g\\|_\\infty \\geq 1\\) for any \\(g \\in C_c\\) (since \\(g\\) vanishes outside a compact set while \\(f = 1\\) everywhere). So \\(C_c\\) is not dense in \\(L^\\infty\\). The closure of \\(C_c(\\mathbb{R}^n)\\) in \\(L^\\infty\\) is \\(C_0(\\mathbb{R}^n)\\), the space of continuous functions vanishing at infinity: \\(\\{f \\in C(\\mathbb{R}^n) : \\forall \\varepsilon > 0, \\exists K \\text{ compact}, |f(x)| < \\varepsilon \\text{ for } x \\notin K\\}\\).'
        },
        {
          question: 'Let \\(f \\in L^p(\\mathbb{R})\\) with \\(1 \\leq p < \\infty\\). Show that the translation map \\(t \\mapsto \\tau_t f\\) (where \\((\\tau_t f)(x) = f(x-t)\\)) is continuous from \\(\\mathbb{R}\\) to \\(L^p(\\mathbb{R})\\).',
          hint: 'First prove it for \\(f \\in C_c(\\mathbb{R})\\) using uniform continuity, then extend by density.',
          solution: 'For \\(f \\in C_c(\\mathbb{R})\\), \\(f\\) is uniformly continuous and supported in \\([-R, R]\\). For \\(|t| < 1\\), \\(\\tau_t f\\) is supported in \\([-(R+1), R+1]\\). By uniform continuity, \\(\\sup_x |f(x-t) - f(x)| \\to 0\\) as \\(t \\to 0\\). So \\(\\|\\tau_t f - f\\|_p^p \\leq (2R+2) \\sup_x |f(x-t) - f(x)|^p \\to 0\\). For general \\(f \\in L^p\\), given \\(\\varepsilon > 0\\), pick \\(g \\in C_c\\) with \\(\\|f - g\\|_p < \\varepsilon/3\\). Then \\(\\|\\tau_t f - f\\|_p \\leq \\|\\tau_t f - \\tau_t g\\|_p + \\|\\tau_t g - g\\|_p + \\|g - f\\|_p < 2\\varepsilon/3 + \\|\\tau_t g - g\\|_p\\). Since the last term goes to 0, we get continuity.'
        }
      ]
    },

    // ============================================================
    // Section 5: Duality of Lp
    // ============================================================
    {
      id: 'duality-of-lp',
      title: 'Duality of L^p',
      content: `
<div class="bridge-block section-bridge">
<p><strong>Closing the Duality Circle.</strong> In Chapter 10, we identified \((\ell^p)^* \cong \ell^q\) for sequence spaces. Now we prove the function-space analog: \((L^p)^* \cong L^q\) for \(1 \leq p < \infty\). Combined with the Riesz-Fischer theorem, this confirms that \(L^p\) spaces for \(1 < p < \infty\) are reflexive, while \(L^1\) is not.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove the duality theorem \((L^p)^* \cong L^q\), verify reflexivity for \(1 < p < \infty\), and discuss the failure of reflexivity for \(L^1\) and \(L^\infty\). This completes the duality arc that began in Chapter 10.</p>
</div>

<div class="bridge-block chapter-closing">
<p><strong>Looking Ahead.</strong> With the \(L^p\) spaces thoroughly understood, we are ready for the final arc: compact operators and spectral theory. Chapter 14 introduces compact operators, which bring finite-dimensional intuition back into infinite-dimensional spaces and are the natural setting for eigenvalue problems.</p>
</div>

        <div class="env-block intuition">
          <p><strong>The big picture:</strong> The dual of \\(L^p\\) is \\(L^q\\) (for \\(1 \\leq p < \\infty\\)), realized via the pairing \\(\\langle f, g \\rangle = \\int fg \\, d\\mu\\). This is one of the most important representation theorems in functional analysis. The proof uses the Radon-Nikodym theorem to identify abstract linear functionals with concrete functions.</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (Riesz Representation for \\(L^p\\)):</strong> Let \\(1 \\leq p < \\infty\\) and \\((X, \\mathcal{M}, \\mu)\\) be \\(\\sigma\\)-finite. For every bounded linear functional \\(\\varphi \\in (L^p)^*\\), there exists a unique \\(g \\in L^q\\) (where \\(1/p + 1/q = 1\\)) such that</p>
          \\[ \\varphi(f) = \\int_X fg \\, d\\mu \\quad \\text{for all } f \\in L^p, \\]
          <p>and \\(\\|\\varphi\\| = \\|g\\|_q\\). In short, \\((L^p)^* \\cong L^q\\) isometrically.</p>
        </div>

        <div class="env-block proof">
          <p><strong>Proof sketch (for \\(1 < p < \\infty\\), \\(\\sigma\\)-finite \\(\\mu\\)):</strong></p>
          <p><strong>Step 1:</strong> Given \\(\\varphi \\in (L^p)^*\\), define a signed measure \\(\\nu(A) = \\varphi(\\mathbf{1}_A)\\) for \\(A \\in \\mathcal{M}\\) with \\(\\mu(A) < \\infty\\).</p>
          <p><strong>Step 2:</strong> Show \\(\\nu \\ll \\mu\\) (absolutely continuous): if \\(\\mu(A) = 0\\), then \\(\\mathbf{1}_A = 0\\) in \\(L^p\\), so \\(\\nu(A) = 0\\).</p>
          <p><strong>Step 3:</strong> By the Radon-Nikodym theorem, \\(\\nu = g \\, d\\mu\\) for some measurable \\(g\\), i.e., \\(\\varphi(\\mathbf{1}_A) = \\int_A g \\, d\\mu\\). By linearity, \\(\\varphi(s) = \\int sg \\, d\\mu\\) for all simple \\(s\\).</p>
          <p><strong>Step 4:</strong> Show \\(g \\in L^q\\). Take \\(s_n = |g|^{q-2} g \\cdot \\mathbf{1}_{\\{|g| \\leq n\\}} \\cdot \\mathbf{1}_{E_n}\\) (where \\(E_n\\) has finite measure). Then \\(\\|s_n\\|_p^p = \\int |g|^{(q-1)p} \\mathbf{1}_{\\{|g| \\leq n\\}} = \\int |g|^q \\mathbf{1}_{\\{|g| \\leq n\\}}\\). And \\(\\varphi(s_n) = \\int |g|^q \\mathbf{1}_{\\{|g| \\leq n\\}}\\). By \\(|\\varphi(s_n)| \\leq \\|\\varphi\\| \\|s_n\\|_p\\), we get \\(\\|g\\|_q \\leq \\|\\varphi\\|\\).</p>
          <p><strong>Step 5:</strong> Density of simple functions extends \\(\\varphi(f) = \\int fg\\) to all \\(f \\in L^p\\). H\u00f6lder gives \\(\\|\\varphi\\| \\leq \\|g\\|_q\\), so \\(\\|\\varphi\\| = \\|g\\|_q\\). \\(\\square\\)</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (\\(p = 1\\) case):</strong> \\((L^1)^* \\cong L^\\infty\\) isometrically, provided \\(\\mu\\) is \\(\\sigma\\)-finite.</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (\\(p = \\infty\\) is different):</strong> The natural embedding \\(L^1 \\hookrightarrow (L^\\infty)^*\\) via \\(g \\mapsto \\varphi_g(f) = \\int fg\\) is isometric but <em>not surjective</em> in general. That is,</p>
          \\[ (L^\\infty)^* \\supsetneq L^1. \\]
          <p>The dual \\((L^\\infty)^*\\) consists of all finitely additive signed measures absolutely continuous w.r.t. \\(\\mu\\), which is strictly larger than \\(L^1\\). Equivalently, \\(L^\\infty\\) is not reflexive (in fact, \\(L^1\\) is not reflexive either unless the measure space is trivial).</p>
        </div>

        <div class="env-block example">
          <p><strong>Example (A functional not in \\(L^1\\)):</strong> On \\(L^\\infty([0,1])\\), consider a Banach limit or any Hahn-Banach extension of the functional "evaluate at 0" defined on \\(C([0,1]) \\subset L^\\infty([0,1])\\). This gives an element of \\((L^\\infty)^*\\) that cannot be represented by any \\(g \\in L^1\\).</p>
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (Reflexivity):</strong> \\(L^p\\) is reflexive if and only if \\(1 < p < \\infty\\). Moreover:</p>
          <ul>
            <li>For \\(1 < p < \\infty\\): \\(L^p\\) is reflexive, uniformly convex (Clarkson), and the dual pairing \\((L^p)^{**} \\cong (L^q)^* \\cong L^p\\) is the canonical embedding.</li>
            <li>\\(L^1\\) is not reflexive: \\((L^1)^{**} \\cong (L^\\infty)^* \\supsetneq L^1\\).</li>
            <li>\\(L^\\infty\\) is not reflexive.</li>
          </ul>
        </div>

        <div class="env-block theorem">
          <p><strong>Theorem (Clarkson's Inequalities):</strong> For \\(2 \\leq p < \\infty\\) and \\(f, g \\in L^p\\),</p>
          \\[ \\left\\| \\frac{f+g}{2} \\right\\|_p^p + \\left\\| \\frac{f-g}{2} \\right\\|_p^p \\leq \\frac{1}{2}\\left( \\|f\\|_p^p + \\|g\\|_p^p \\right). \\]
          <p>This implies \\(L^p\\) is <em>uniformly convex</em> for \\(1 < p < \\infty\\), which by the Milman-Pettis theorem implies reflexivity.</p>
        </div>

        <div class="env-block remark">
          <p><strong>Hilbert space structure of \\(L^2\\):</strong> When \\(p = q = 2\\), H\u00f6lder becomes Cauchy-Schwarz, and \\(\\langle f, g \\rangle = \\int f \\bar{g} \\, d\\mu\\) is an inner product. Thus \\(L^2\\) is a Hilbert space, self-dual: \\((L^2)^* \\cong L^2\\). This is the Riesz representation theorem for Hilbert spaces applied to \\(L^2\\).</p>
        </div>

        <div class="viz-placeholder" data-viz="duality-pairing-viz"></div>
        <div class="viz-placeholder" data-viz="reflexivity-diagram"></div>
      `,
      visualizations: [
        {
          id: 'duality-pairing-viz',
          title: 'Duality Pairing (L^p)* = L^q',
          description: 'Visualize the pairing between f in L^p and g in L^q',
          setup: function(body, controls) {
            var engine = new VizEngine(body, { width: 560, height: 400, scale: 50, originX: 60, originY: 330 });
            var p = 2;

            function draw() {
              engine.clear();
              var ctx = engine.ctx;
              var q = p / (p - 1);

              engine.screenText('Duality: (L^p)* \u2245 L^q,  1/p + 1/q = 1', engine.width / 2, 20, engine.colors.white, 14);
              engine.screenText('p = ' + p.toFixed(1) + ',  q = ' + q.toFixed(1), engine.width / 2, 42, engine.colors.teal, 13);

              var baseX = 60, baseY = 330;
              var scaleX = 90, scaleY = 120;
              var xMax = 5;

              ctx.strokeStyle = engine.colors.axis;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(baseX, baseY);
              ctx.lineTo(520, baseY);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(baseX, baseY);
              ctx.lineTo(baseX, 50);
              ctx.stroke();

              function fFunc(x) { return Math.exp(-0.5 * x) * Math.pow(x + 0.1, 1 / p); }
              function gFunc(x) { return Math.exp(-0.3 * x) * Math.pow(x + 0.1, 1 / q); }

              ctx.fillStyle = engine.colors.purple + '20';
              ctx.beginPath();
              ctx.moveTo(baseX, baseY);
              var steps = 300;
              for (var i = 0; i <= steps; i++) {
                var x = i * xMax / steps;
                var y = fFunc(x) * gFunc(x);
                ctx.lineTo(baseX + x * scaleX, baseY - y * scaleY);
              }
              ctx.lineTo(baseX + xMax * scaleX, baseY);
              ctx.closePath();
              ctx.fill();

              var drawCurve = function(fn, color, label, labelX) {
                ctx.strokeStyle = color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                for (var j = 0; j <= steps; j++) {
                  var x2 = j * xMax / steps;
                  var y2 = fn(x2);
                  var sx = baseX + x2 * scaleX;
                  var sy = baseY - y2 * scaleY;
                  if (j === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                }
                ctx.stroke();
                engine.screenText(label, baseX + labelX * scaleX, baseY - fn(labelX) * scaleY - 12, color, 13);
              };

              drawCurve(fFunc, engine.colors.blue, 'f \u2208 L^p', 0.8);
              drawCurve(gFunc, engine.colors.orange, 'g \u2208 L^q', 1.5);
              drawCurve(function(x) { return fFunc(x) * gFunc(x); }, engine.colors.purple, 'fg \u2208 L^1', 0.5);

              var dx = xMax / steps;
              var integralFG = 0;
              var normFp = 0;
              var normGq = 0;
              for (var k = 0; k < steps; k++) {
                var xk = (k + 0.5) * dx;
                integralFG += fFunc(xk) * gFunc(xk) * dx;
                normFp += Math.pow(fFunc(xk), p) * dx;
                normGq += Math.pow(gFunc(xk), q) * dx;
              }
              normFp = Math.pow(normFp, 1 / p);
              normGq = Math.pow(normGq, 1 / q);

              engine.screenText('\u03C6_g(f) = \u222Bfg = ' + integralFG.toFixed(3), engine.width / 2, engine.height - 35, engine.colors.green, 13);
              engine.screenText('||\u03C6_g|| = ||g||_q = ' + normGq.toFixed(3) + ',  ||f||_p = ' + normFp.toFixed(3), engine.width / 2, engine.height - 15, engine.colors.text, 12);
            }

            draw();
            VizEngine.createSlider(controls, 'p', 1.1, 10, 2, 0.1, function(v) { p = v; draw(); });
            return engine;
          }
        },
        {
          id: 'reflexivity-diagram',
          title: 'Reflexivity of L^p Spaces',
          description: 'Diagram showing dual space relationships for different p',
          setup: function(body, controls) {
            var engine = new VizEngine(body, { width: 560, height: 400, scale: 40 });

            function draw() {
              var ctx = engine.ctx;
              var w = engine.width, h = engine.height;
              ctx.fillStyle = engine.colors.bg;
              ctx.fillRect(0, 0, w, h);

              engine.screenText('Duality Map for L^p Spaces', w / 2, 25, engine.colors.white, 16);

              var centerX = w / 2;
              var row1 = 90, row2 = 180, row3 = 270;

              var boxes = [
                { x: 80, y: row1, text: 'L^1', color: engine.colors.blue },
                { x: centerX, y: row1, text: 'L^p (1<p<\u221E)', color: engine.colors.teal },
                { x: w - 80, y: row1, text: 'L^\u221E', color: engine.colors.orange },
                { x: 80, y: row2, text: '(L^1)* = L^\u221E', color: engine.colors.blue },
                { x: centerX, y: row2, text: '(L^p)* = L^q', color: engine.colors.teal },
                { x: w - 80, y: row2, text: '(L^\u221E)* \u2283 L^1', color: engine.colors.orange },
                { x: 80, y: row3, text: '(L^\u221E)* \u2283 L^1', color: engine.colors.blue },
                { x: centerX, y: row3, text: '(L^q)* = L^p \u2713', color: engine.colors.teal },
                { x: w - 80, y: row3, text: 'huge!', color: engine.colors.orange }
              ];

              for (var i = 0; i < boxes.length; i++) {
                var b = boxes[i];
                var bw = 130, bh = 32;
                ctx.fillStyle = b.color + '20';
                ctx.strokeStyle = b.color;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.roundRect(b.x - bw / 2, b.y - bh / 2, bw, bh, 6);
                ctx.fill();
                ctx.stroke();
                engine.screenText(b.text, b.x, b.y, b.color, 12);
              }

              ctx.strokeStyle = engine.colors.text;
              ctx.lineWidth = 1;
              for (var col = 0; col < 3; col++) {
                var x = [80, centerX, w - 80][col];
                for (var r = 0; r < 2; r++) {
                  var y1 = [row1, row2][r] + 18;
                  var y2 = [row2, row3][r] - 18;
                  ctx.beginPath();
                  ctx.moveTo(x, y1);
                  ctx.lineTo(x, y2);
                  ctx.stroke();
                  ctx.beginPath();
                  ctx.moveTo(x - 4, y2 - 6);
                  ctx.lineTo(x, y2);
                  ctx.lineTo(x + 4, y2 - 6);
                  ctx.stroke();
                }
              }

              var labels = ['take dual', 'take dual'];
              for (var r2 = 0; r2 < 2; r2++) {
                var yMid = ([row1, row2][r2] + [row2, row3][r2]) / 2;
                engine.screenText(labels[r2], 30, yMid, engine.colors.text, 10, 'center');
              }

              engine.screenText('NOT reflexive', 80, row3 + 32, engine.colors.red, 11);
              engine.screenText('REFLEXIVE', centerX, row3 + 32, engine.colors.green, 11);
              engine.screenText('NOT reflexive', w - 80, row3 + 32, engine.colors.red, 11);

              engine.screenText('Key: L^p is reflexive iff 1 < p < \u221E', w / 2, h - 30, engine.colors.white, 13);
              engine.screenText('L^2 is special: self-dual Hilbert space, (L^2)* = L^2', w / 2, h - 10, engine.colors.purple, 12);
            }

            draw();
            return engine;
          }
        }
      ],
      exercises: [
        {
          question: 'Let \\(1 < p < \\infty\\). Show that the map \\(J: L^q \\to (L^p)^*\\) defined by \\(J(g)(f) = \\int fg \\, d\\mu\\) is an isometric isomorphism.',
          hint: 'Show \\(J\\) is well-defined and bounded (H\u00f6lder), isometric (choose \\(f\\) to saturate H\u00f6lder), and surjective (Radon-Nikodym).',
          solution: 'Well-defined and bounded: by H\u00f6lder, \\(|J(g)(f)| \\leq \\|f\\|_p \\|g\\|_q\\), so \\(\\|J(g)\\| \\leq \\|g\\|_q\\). Isometric: take \\(f = |g|^{q-2}\\bar{g} / \\|g\\|_q^{q/p}\\) (normalized). Then \\(J(g)(f) = \\|g\\|_q\\), achieving the bound. Surjective: given \\(\\varphi \\in (L^p)^*\\), define \\(\\nu(A) = \\varphi(\\mathbf{1}_A)\\). This is \\(\\sigma\\)-additive and \\(\\nu \\ll \\mu\\). By Radon-Nikodym, \\(\\nu = g \\, d\\mu\\). Extending from indicators to simple functions to all of \\(L^p\\) shows \\(\\varphi = J(g)\\).'
        },
        {
          question: 'Show that \\(L^1([0,1])\\) is not reflexive by constructing an element of \\((L^1)^{**} \\cong (L^\\infty)^*\\) that does not come from \\(L^1\\).',
          hint: 'Use Hahn-Banach to extend point evaluation at 0 from \\(C([0,1])\\) to \\(L^\\infty([0,1])\\).',
          solution: 'Consider \\(C([0,1]) \\subset L^\\infty([0,1])\\). The evaluation functional \\(\\delta_0(f) = f(0)\\) is a bounded linear functional on \\(C([0,1])\\) with \\(\\|\\delta_0\\| = 1\\). By Hahn-Banach, extend to \\(\\Phi \\in (L^\\infty)^*\\) with \\(\\|\\Phi\\| = 1\\). If \\(\\Phi\\) came from \\(g \\in L^1\\), then \\(\\Phi(f) = \\int_0^1 fg \\, dx\\) for all \\(f \\in L^\\infty\\). But for \\(f \\in C([0,1])\\), \\(\\int fg = f(0)\\). Taking \\(f_n\\) continuous with \\(f_n(0) = 1\\) and \\(f_n \\to 0\\) a.e., DCT gives \\(\\int f_n g \\to 0\\) but \\(f_n(0) = 1\\), contradiction. So \\(\\Phi \\notin J(L^1)\\).'
        },
        {
          question: 'Prove that \\(L^2(X, \\mu)\\) is a Hilbert space with inner product \\(\\langle f, g \\rangle = \\int_X f \\bar{g} \\, d\\mu\\), and verify the parallelogram law.',
          hint: 'Check the inner product axioms and expand \\(\\|f+g\\|_2^2 + \\|f-g\\|_2^2\\).',
          solution: 'Linearity in the first argument, conjugate symmetry, and positive-definiteness are straightforward from properties of the integral. \\(\\|f\\|_2 = \\sqrt{\\langle f, f \\rangle}\\). Completeness comes from Riesz-Fischer. Parallelogram law: \\(\\|f+g\\|_2^2 + \\|f-g\\|_2^2 = \\int |f+g|^2 + \\int |f-g|^2 = \\int (|f|^2 + 2\\text{Re}(f\\bar{g}) + |g|^2) + \\int (|f|^2 - 2\\text{Re}(f\\bar{g}) + |g|^2) = 2\\|f\\|_2^2 + 2\\|g\\|_2^2\\). This is the parallelogram law, which characterizes inner product spaces among normed spaces.'
        },
        {
          question: 'Let \\(1 < p < \\infty\\) and \\(f_n \\rightharpoonup f\\) weakly in \\(L^p\\). Show that \\(\\|f\\|_p \\leq \\liminf_n \\|f_n\\|_p\\) (weak lower semicontinuity of the norm).',
          hint: 'Use the duality pairing: \\(\\|f\\|_p = \\sup_{\\|g\\|_q = 1} |\\int fg|\\).',
          solution: 'For any \\(g \\in L^q\\) with \\(\\|g\\|_q = 1\\): \\(\\left|\\int fg\\right| = \\lim_n \\left|\\int f_n g\\right| \\leq \\liminf_n \\|f_n\\|_p \\|g\\|_q = \\liminf_n \\|f_n\\|_p\\). Taking sup over all such \\(g\\): \\(\\|f\\|_p = \\sup_{\\|g\\|_q=1} |\\int fg| \\leq \\liminf_n \\|f_n\\|_p\\). This is a fundamental property of weak convergence and is the functional-analytic analogue of Fatou\'s lemma.'
        }
      ]
    }
  ]
});
