// Chapter 14 — Compact Operators (B version)
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: 'ch14',
  number: 14,
  title: 'Compact Operators',
  subtitle: 'Finite-dimensional behavior in infinite dimensions',
  sections: [

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 1: Compact Operators — Definition and First Properties
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch14-sec01',
      title: '1. Compact Operators',
      content: `
<div class="bridge-block chapter-opening">
<p><strong>Finite-Dimensional Behavior in Infinite Dimensions.</strong> Chapters 10-13 developed duality and \(L^p\) theory. Now we begin the final arc of the course (Chapters 14-19) with compact operators, the class of operators that behave most like matrices. A compact operator maps bounded sets to relatively compact sets, effectively "compressing" infinite-dimensional problems into something finite-dimensional. This is the key to spectral theory, Fredholm theory, and applications to integral equations and PDE.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We define compact operators, prove equivalent characterizations (including sequential compactness of image of bounded sequences), and establish that finite-rank operators are compact. We also show that the identity operator is compact only in finite dimensions.</p>
</div>

<h2>Definition and Basic Properties</h2>

<p>
Compact operators are the "closest to finite-dimensional" among all bounded linear operators on infinite-dimensional spaces.
They inherit the remarkable property that bounded sequences are mapped to sequences with convergent subsequences,
precisely the behavior we know from finite-dimensional linear algebra.
</p>

<div class="definition">
<strong>Definition (Compact Operator).</strong>
Let \\(X\\) and \\(Y\\) be normed spaces. A linear operator \\(T: X \\to Y\\) is called <em>compact</em> (or <em>completely continuous</em>)
if for every bounded sequence \\((x_n)\\) in \\(X\\), the image sequence \\((Tx_n)\\) has a convergent subsequence in \\(Y\\).
<br><br>
Equivalently, \\(T\\) is compact if and only if \\(T(B_X)\\) is <em>relatively compact</em> (i.e., has compact closure) in \\(Y\\),
where \\(B_X = \\{x \\in X : \\|x\\| \\le 1\\}\\) is the closed unit ball of \\(X\\).
</div>

<p>
The equivalence of these two formulations follows from the characterization of compactness in metric spaces:
a subset of a complete metric space is relatively compact if and only if every sequence in it has a convergent subsequence (sequential compactness).
When \\(Y\\) is a Banach space, both definitions agree.
</p>

<div class="theorem">
<strong>Proposition 14.1.</strong>
Every compact operator is bounded.
</div>

<div class="proof">
<strong>Proof.</strong>
Suppose \\(T: X \\to Y\\) is compact but not bounded. Then there exist \\(x_n \\in X\\) with \\(\\|x_n\\| = 1\\) and \\(\\|Tx_n\\| \\to \\infty\\).
Since \\((x_n)\\) is bounded, compactness of \\(T\\) implies \\((Tx_n)\\) has a convergent subsequence, which is therefore bounded.
This contradicts \\(\\|Tx_n\\| \\to \\infty\\). \\(\\square\\)
</div>

<p>
The converse is false in general: the identity operator \\(I: \\ell^2 \\to \\ell^2\\) is bounded with \\(\\|I\\| = 1\\),
but it is not compact since the standard basis \\((e_n)\\) is a bounded sequence with no convergent subsequence (\\(\\|e_n - e_m\\| = \\sqrt{2}\\) for \\(n \\ne m\\)).
</p>

<div class="definition">
<strong>Notation.</strong>
We write \\(\\mathcal{K}(X,Y)\\) for the set of all compact operators from \\(X\\) to \\(Y\\),
and \\(\\mathcal{K}(X) = \\mathcal{K}(X,X)\\).
The set of all bounded linear operators is \\(\\mathcal{B}(X,Y)\\).
</div>

<h3>Compactness via Total Boundedness</h3>

<p>
Recall that a subset \\(K\\) of a metric space is <em>totally bounded</em> if for every \\(\\varepsilon > 0\\),
\\(K\\) can be covered by finitely many balls of radius \\(\\varepsilon\\).
In a complete metric space, relatively compact is equivalent to totally bounded.
</p>

<div class="theorem">
<strong>Proposition 14.2.</strong>
Let \\(X\\) and \\(Y\\) be Banach spaces and \\(T \\in \\mathcal{B}(X,Y)\\). Then \\(T\\) is compact if and only if for every \\(\\varepsilon > 0\\),
there exists a finite set \\(\\{y_1, \\ldots, y_N\\} \\subset Y\\) such that
\\[
T(B_X) \\subset \\bigcup_{i=1}^N B(y_i, \\varepsilon).
\\]
</div>

<div class="intuition">
<strong>Geometric Intuition.</strong>
Think of a compact operator as one that "compresses" the unit ball into something that is
"almost finite-dimensional" — for any desired precision \\(\\varepsilon\\), the image can be
approximated by finitely many points. The unit ball itself in infinite dimensions is never compact
(Riesz's lemma), but a compact operator squeezes it into a set that <em>is</em> relatively compact.
</div>

<h3>Finite-Dimensional Operators Are Compact</h3>

<div class="theorem">
<strong>Theorem 14.3.</strong>
Every bounded linear operator with finite-dimensional range is compact.
In particular, every linear operator on a finite-dimensional normed space is compact.
</div>

<div class="proof">
<strong>Proof.</strong>
Let \\(T: X \\to Y\\) be bounded with \\(\\dim(\\text{range}(T)) < \\infty\\).
If \\((x_n)\\) is bounded in \\(X\\), then \\((Tx_n)\\) is a bounded sequence in the finite-dimensional subspace \\(\\text{range}(T)\\).
By the Bolzano-Weierstrass theorem (which holds in finite-dimensional spaces), \\((Tx_n)\\) has a convergent subsequence. \\(\\square\\)
</div>

<div class="example">
<strong>Example 14.4 (Rank-one operators).</strong>
Let \\(f \\in X^*\\) and \\(y_0 \\in Y\\). The operator \\(T: X \\to Y\\) defined by \\(Tx = f(x)\\, y_0\\) is compact,
since \\(\\text{range}(T) = \\text{span}\\{y_0\\}\\) is one-dimensional.
These are the building blocks of all finite-rank operators:
\\[T = \\sum_{i=1}^n f_i \\otimes y_i, \\quad f_i \\in X^*, \\; y_i \\in Y.\\]
</div>
`,
      visualizations: [
        {
          id: 'viz-ch14-unit-ball-mapping',
          title: 'Compact Operator Maps Unit Ball to Relatively Compact Set',
          description: 'See how a compact operator compresses the unit ball. Points are mapped from the domain ball into a relatively compact image. Toggle between compact and non-compact operators.',
          type: 'canvas',
          setup: function(container) {
            var viz = new VizEngine(container, { scale: 60, originX: 220, originY: 200 });
            var mode = { compact: true };
            var time = { t: 0 };

            // Generate random points on unit ball
            var points = [];
            for (var i = 0; i < 40; i++) {
              var angle = Math.random() * 2 * Math.PI;
              var r = Math.sqrt(Math.random());
              points.push({ x: r * Math.cos(angle), y: r * Math.sin(angle) });
            }

            var controls = document.createElement('div');
            controls.className = 'viz-controls';
            container.appendChild(controls);

            VizEngine.createButton(controls, 'Compact T', function() {
              mode.compact = true;
              time.t = 0;
            });
            VizEngine.createButton(controls, 'Non-compact I', function() {
              mode.compact = false;
              time.t = 0;
            });

            function compactMap(x, y, t) {
              // Shrinks higher "frequencies" more: simulates diagonal decay
              var s = 0.3 + 0.15 * Math.cos(3 * Math.atan2(y, x));
              var fx = x * s * (0.8 + 0.2 * Math.sin(t * 0.002));
              var fy = y * s * 0.6;
              return { x: fx + 3.5, y: fy };
            }

            function identityMap(x, y) {
              return { x: x + 3.5, y: y };
            }

            viz.animate(function(t) {
              time.t = t;
              viz.clear();

              var ctx = viz.ctx;

              // Left: unit ball domain
              ctx.strokeStyle = viz.colors.blue;
              ctx.lineWidth = 2;
              var cx1 = viz.toScreen(0, 0);
              ctx.beginPath();
              ctx.arc(cx1[0], cx1[1], 1 * viz.scale, 0, Math.PI * 2);
              ctx.stroke();
              viz.drawText('B_X', 0, -1.5, viz.colors.blue, 14);

              // Right: image
              var cx2 = viz.toScreen(3.5, 0);
              if (!mode.compact) {
                ctx.strokeStyle = viz.colors.orange;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(cx2[0], cx2[1], 1 * viz.scale, 0, Math.PI * 2);
                ctx.stroke();
                viz.drawText('I(B_X)', 3.5, -1.5, viz.colors.orange, 14);
              } else {
                viz.drawText('T(B_X)', 3.5, -1.5, viz.colors.teal, 14);
              }

              // Arrow between
              viz.screenText('T', viz.toScreen(1.75, 0.6)[0], viz.toScreen(1.75, 0.6)[1], viz.colors.white, 16);
              ctx.strokeStyle = viz.colors.white + '66';
              ctx.lineWidth = 1;
              ctx.setLineDash([4, 4]);
              ctx.beginPath();
              ctx.moveTo(viz.toScreen(1.2, 0.3)[0], viz.toScreen(1.2, 0.3)[1]);
              ctx.lineTo(viz.toScreen(2.3, 0.3)[0], viz.toScreen(2.3, 0.3)[1]);
              ctx.stroke();
              ctx.setLineDash([]);

              // Draw domain points
              for (var i = 0; i < points.length; i++) {
                var p = points[i];
                viz.drawPoint(p.x, p.y, viz.colors.blue + '88', null, 3);

                // Draw image points
                var img;
                if (mode.compact) {
                  img = compactMap(p.x, p.y, t);
                } else {
                  img = identityMap(p.x, p.y);
                }
                var col = mode.compact ? viz.colors.teal : viz.colors.orange;
                viz.drawPoint(img.x, img.y, col + 'cc', null, 3);
              }

              // Draw compact image boundary (ellipse-like)
              if (mode.compact) {
                ctx.strokeStyle = viz.colors.teal;
                ctx.lineWidth = 1.5;
                ctx.setLineDash([3, 3]);
                ctx.beginPath();
                for (var a = 0; a <= 200; a++) {
                  var theta = (a / 200) * 2 * Math.PI;
                  var s = 0.3 + 0.15 * Math.cos(3 * theta);
                  var bx = s * Math.cos(theta) * (0.8 + 0.2 * Math.sin(t * 0.002)) + 3.5;
                  var by = s * 0.6 * Math.sin(theta);
                  var sp = viz.toScreen(bx, by);
                  if (a === 0) ctx.moveTo(sp[0], sp[1]);
                  else ctx.lineTo(sp[0], sp[1]);
                }
                ctx.closePath();
                ctx.stroke();
                ctx.setLineDash([]);
              }

              // Labels
              viz.screenText('Domain X', 40, 20, viz.colors.text, 12, 'left');
              viz.screenText(mode.compact ? 'Compact: image is relatively compact' : 'Identity: image = unit ball (not compact in infinite dim)', 40, viz.height - 20, mode.compact ? viz.colors.teal : viz.colors.orange, 11, 'left');
            });
          }
        },
        {
          id: 'viz-ch14-epsilon-net',
          title: 'Finite Epsilon-Net Covering',
          description: 'A compact operator maps the unit ball into a totally bounded set. Adjust epsilon to see how finitely many balls cover the image.',
          type: 'canvas',
          setup: function(container) {
            var viz = new VizEngine(container, { scale: 80, originX: 280, originY: 200 });
            var state = { eps: 0.4 };

            var controls = document.createElement('div');
            controls.className = 'viz-controls';
            container.appendChild(controls);
            VizEngine.createSlider(controls, 'Epsilon', 0.1, 1.0, 0.4, 0.05, function(v) { state.eps = v; });

            // Image points (simulating T(B_X) as a compact set)
            var imgPts = [];
            for (var i = 0; i < 60; i++) {
              var angle = Math.random() * 2 * Math.PI;
              var r = Math.pow(Math.random(), 0.7) * 1.5;
              // Concentrate toward an elliptical region
              imgPts.push({
                x: r * Math.cos(angle) * 0.7,
                y: r * Math.sin(angle) * 0.4
              });
            }

            function computeCenters(pts, eps) {
              // Simple greedy eps-net
              var centers = [];
              var covered = new Array(pts.length).fill(false);
              for (var i = 0; i < pts.length; i++) {
                if (covered[i]) continue;
                centers.push({ x: pts[i].x, y: pts[i].y });
                for (var j = i; j < pts.length; j++) {
                  var dx = pts[j].x - pts[i].x;
                  var dy = pts[j].y - pts[i].y;
                  if (Math.sqrt(dx * dx + dy * dy) < eps) {
                    covered[j] = true;
                  }
                }
              }
              return centers;
            }

            viz.animate(function() {
              viz.clear();
              var ctx = viz.ctx;

              var centers = computeCenters(imgPts, state.eps);

              // Draw epsilon balls around centers
              for (var i = 0; i < centers.length; i++) {
                var c = centers[i];
                viz.drawCircle(c.x, c.y, state.eps, viz.colors.purple + '15', viz.colors.purple + '55', 1);
              }

              // Draw image points
              for (var j = 0; j < imgPts.length; j++) {
                viz.drawPoint(imgPts[j].x, imgPts[j].y, viz.colors.teal, null, 3);
              }

              // Draw centers
              for (var k = 0; k < centers.length; k++) {
                viz.drawPoint(centers[k].x, centers[k].y, viz.colors.purple, null, 5);
              }

              viz.screenText('T(B_X) covered by ' + centers.length + ' balls of radius ' + state.eps.toFixed(2), viz.width / 2, 20, viz.colors.white, 13);
              viz.screenText('Finite epsilon-net: totally bounded image', viz.width / 2, viz.height - 15, viz.colors.text, 11);
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch14-ex01',
          type: 'proof',
          difficulty: 2,
          question: 'Prove that if T: X -> Y is compact and (x_n) converges weakly to x in X, then Tx_n -> Tx in norm. (Hint: use the sequential characterization of compactness and uniqueness of weak limits.)',
          hint: 'Suppose Tx_n does not converge to Tx. Extract a subsequence using compactness and derive a contradiction with the uniqueness of weak limits.',
          solution: 'Suppose Tx_n does not converge to Tx in norm. Then there exists epsilon > 0 and a subsequence (x_{n_k}) with ||Tx_{n_k} - Tx|| >= epsilon. Since (x_{n_k}) is bounded (weakly convergent sequences are bounded), compactness gives a further subsequence with Tx_{n_{k_j}} -> y. But x_{n_{k_j}} -> x weakly, so for any f in Y*, f(Tx_{n_{k_j}}) = (T*f)(x_{n_{k_j}}) -> (T*f)(x) = f(Tx). Thus y = Tx, contradicting ||Tx_{n_{k_j}} - Tx|| >= epsilon.'
        },
        {
          id: 'ch14-ex02',
          type: 'computation',
          difficulty: 1,
          question: 'Let T: R^3 -> R^3 be the linear map T(x,y,z) = (x + y, 2z, 0). Is T compact? What is its rank?',
          hint: 'In finite-dimensional spaces, every linear map is compact.',
          solution: 'Yes, T is compact since R^3 is finite-dimensional — every bounded sequence in R^3 has a convergent subsequence by Bolzano-Weierstrass. The range of T is span{(1,0,0),(0,0,0),(0,1,0)} = span{(1,0,0),(0,1,0)}, which has dimension 2. So rank(T) = 2.'
        },
        {
          id: 'ch14-ex03',
          type: 'proof',
          difficulty: 3,
          question: 'Let X be an infinite-dimensional Banach space. Prove that the identity operator I: X -> X is NOT compact.',
          hint: 'Use Riesz lemma to construct a sequence in the unit ball with no convergent subsequence.',
          solution: 'By Riesz lemma, since X is infinite-dimensional, for each n we can find x_n with ||x_n|| = 1 and dist(x_n, span{x_1,...,x_{n-1}}) >= 1/2. Then ||x_n - x_m|| >= 1/2 for n != m, so (x_n) is a bounded sequence with no convergent subsequence. Thus I(B_X) = B_X is not relatively compact, so I is not compact.'
        },
        {
          id: 'ch14-ex04',
          type: 'truefalse',
          difficulty: 1,
          question: 'True or False: Every compact operator is bounded, but not every bounded operator is compact.',
          answer: true,
          explanation: 'True. We proved that compact implies bounded (Proposition 14.1). The identity on an infinite-dimensional space is a bounded operator that is not compact.'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 2: Examples of Compact Operators
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch14-sec02',
      title: '2. Examples',
      content: `
<div class="bridge-block section-bridge">
<p><strong>Compact Operators in the Wild.</strong> The definition of compactness is clean, but recognizing compact operators in practice requires working through examples. Integral operators with nice kernels, diagonal operators with eigenvalues decaying to zero, and the Volterra operator are the prototypical examples.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove compactness for integral operators with \(L^2\) kernels, diagonal operators with eigenvalues tending to zero, and the Volterra operator. Each example illustrates a different mechanism by which compactness arises.</p>
</div>

<h2>Key Examples of Compact Operators</h2>

<p>
Understanding compact operators requires familiarity with the canonical examples.
These arise naturally in integral equations, sequence spaces, and approximation theory.
</p>

<h3>Integral Operators</h3>

<div class="theorem">
<strong>Theorem 14.5 (Hilbert-Schmidt Integral Operators).</strong>
Let \\(k: [a,b] \\times [a,b] \\to \\mathbb{R}\\) be a continuous kernel function. The integral operator
\\[
(Tf)(s) = \\int_a^b k(s,t)\\, f(t)\\, dt
\\]
defines a compact operator \\(T: C[a,b] \\to C[a,b]\\) (with the supremum norm) and \\(T: L^2[a,b] \\to L^2[a,b]\\).
</div>

<div class="proof">
<strong>Proof sketch (on \\(C[a,b]\\)).</strong>
Let \\((f_n)\\) be a bounded sequence in \\(C[a,b]\\) with \\(\\|f_n\\|_\\infty \\le M\\).
<br><br>
<em>Uniform boundedness:</em> \\(|(Tf_n)(s)| \\le \\int_a^b |k(s,t)| \\cdot |f_n(t)|\\, dt \\le M(b-a)\\sup|k|\\).
<br><br>
<em>Equicontinuity:</em> Since \\(k\\) is uniformly continuous on \\([a,b]^2\\), for any \\(\\varepsilon > 0\\), there exists \\(\\delta > 0\\) such that \\(|s_1 - s_2| < \\delta\\) implies
\\[|(Tf_n)(s_1) - (Tf_n)(s_2)| \\le \\int_a^b |k(s_1,t) - k(s_2,t)| \\cdot M\\, dt < \\varepsilon.\\]
By the <strong>Arzel\\(\\grave{\\text{a}}\\)-Ascoli theorem</strong>, \\((Tf_n)\\) has a uniformly convergent subsequence. \\(\\square\\)
</div>

<div class="example">
<strong>Example 14.6 (Volterra Operator).</strong>
The Volterra integral operator on \\(L^2[0,1]\\):
\\[(Vf)(s) = \\int_0^s f(t)\\, dt\\]
is compact. Here \\(k(s,t) = \\mathbf{1}_{\\{t \\le s\\}}\\). Despite being only measurable (not continuous), it is still compact.
The operator \\(V\\) has no eigenvalues: \\(Vf = \\lambda f\\) with \\(\\lambda \\ne 0\\) implies \\(f' = f/\\lambda\\) and \\(f(0) = 0\\),
forcing \\(f \\equiv 0\\).
</div>

<h3>Diagonal Operators on \\(\\ell^2\\)</h3>

<div class="theorem">
<strong>Theorem 14.7.</strong>
Let \\((d_n)_{n \\ge 1}\\) be a bounded sequence of scalars. The diagonal operator \\(D: \\ell^2 \\to \\ell^2\\) defined by
\\[D(x_1, x_2, x_3, \\ldots) = (d_1 x_1, d_2 x_2, d_3 x_3, \\ldots)\\]
is compact if and only if \\(d_n \\to 0\\).
</div>

<div class="proof">
<strong>Proof.</strong>
(\\(\\Leftarrow\\)) If \\(d_n \\to 0\\), define the finite-rank operators \\(D_N(x) = (d_1 x_1, \\ldots, d_N x_N, 0, 0, \\ldots)\\).
Then \\(\\|D - D_N\\| = \\sup_{n > N} |d_n| \\to 0\\), so \\(D\\) is a norm-limit of finite-rank operators, hence compact.
<br><br>
(\\(\\Rightarrow\\)) If \\(d_n \\not\\to 0\\), there exist \\(\\varepsilon > 0\\) and a subsequence with \\(|d_{n_k}| \\ge \\varepsilon\\).
Then \\(De_{n_k} = d_{n_k} e_{n_k}\\) and \\(\\|De_{n_k} - De_{n_j}\\| \\ge \\varepsilon\\sqrt{2}\\) for \\(k \\ne j\\),
so no subsequence of \\((De_{n_k})\\) converges. \\(\\square\\)
</div>

<h3>Finite-Rank Operators</h3>

<div class="definition">
<strong>Definition (Finite-Rank Operator).</strong>
An operator \\(T \\in \\mathcal{B}(X,Y)\\) is called <em>finite-rank</em> if \\(\\dim(\\text{range}(T)) < \\infty\\).
The set of finite-rank operators is denoted \\(\\mathcal{F}(X,Y)\\).
</div>

<p>
We have already shown that every finite-rank operator is compact. The diagonal operator theorem shows the converse approach:
compact operators can be approximated by finite-rank ones (at least on \\(\\ell^2\\)).
</p>

<div class="example">
<strong>Example 14.8 (Shift composed with decay).</strong>
Consider \\(T: \\ell^2 \\to \\ell^2\\) defined by \\(T(x_1, x_2, \\ldots) = (x_1, x_2/2, x_3/3, \\ldots)\\).
This is a diagonal operator with \\(d_n = 1/n \\to 0\\), hence compact.
Its operator norm is \\(\\|T\\| = \\sup_n |d_n| = 1\\), but the image of the unit ball is "pinched"
in higher coordinates.
</div>

<div class="warning">
<strong>Non-example.</strong>
The right shift \\(S: \\ell^2 \\to \\ell^2\\) defined by \\(S(x_1, x_2, \\ldots) = (0, x_1, x_2, \\ldots)\\) is an <em>isometry</em>
(\\(\\|Sx\\| = \\|x\\|\\)) and therefore NOT compact (it maps the unit ball onto a closed subset of the unit ball
with no convergent subsequences extracted from \\((Se_n)\\)).
</div>
`,
      visualizations: [
        {
          id: 'viz-ch14-integral-operator',
          title: 'Integral Operator: Kernel and Image',
          description: 'Visualize how an integral operator with continuous kernel smooths functions. The kernel k(s,t) determines how each input function is transformed.',
          type: 'canvas',
          setup: function(container) {
            var viz = new VizEngine(container, { scale: 50, originX: 80, originY: 300 });
            var state = { kernelType: 0 };

            var controls = document.createElement('div');
            controls.className = 'viz-controls';
            container.appendChild(controls);

            VizEngine.createButton(controls, 'Gaussian kernel', function() { state.kernelType = 0; });
            VizEngine.createButton(controls, 'Volterra kernel', function() { state.kernelType = 1; });
            VizEngine.createButton(controls, 'Polynomial kernel', function() { state.kernelType = 2; });

            // Kernels
            function gaussianK(s, t) { return Math.exp(-3 * (s - t) * (s - t)); }
            function volterraK(s, t) { return t <= s ? 1 : 0; }
            function polyK(s, t) { return 1 + s * t; }

            // Input functions to show
            function inputF(t, time) {
              return Math.sin(4 * Math.PI * t) * 0.7 + 0.3 * Math.cos(2 * Math.PI * t + time * 0.001);
            }

            // Numerical integration
            function applyKernel(kernel, f, s, N) {
              var sum = 0;
              var dt = 1.0 / N;
              for (var i = 0; i <= N; i++) {
                var t = i * dt;
                var w = (i === 0 || i === N) ? 0.5 : 1.0;
                sum += w * kernel(s, t) * f(t) * dt;
              }
              return sum;
            }

            viz.animate(function(time) {
              viz.clear();
              var ctx = viz.ctx;
              var kernel;
              var kernelName;
              if (state.kernelType === 0) { kernel = gaussianK; kernelName = 'Gaussian'; }
              else if (state.kernelType === 1) { kernel = volterraK; kernelName = 'Volterra'; }
              else { kernel = polyK; kernelName = 'Polynomial'; }

              var w = viz.width;
              var h = viz.height;
              var left = 60;
              var plotW = (w - left - 40) / 2 - 20;
              var plotH = 120;
              var topY = 30;

              // Draw kernel heatmap
              viz.screenText('Kernel k(s,t) — ' + kernelName, left + plotW / 2, topY, viz.colors.white, 13);
              var heatSize = Math.min(plotW, plotH);
              var hx = left;
              var hy = topY + 15;
              var N = 40;
              for (var i = 0; i < N; i++) {
                for (var j = 0; j < N; j++) {
                  var s = i / N;
                  var t = j / N;
                  var val = kernel(s, t);
                  var intensity = Math.min(1, Math.max(0, val));
                  var r = Math.round(58 + intensity * 140);
                  var g = Math.round(90 + intensity * 90);
                  var b = Math.round(255 * intensity);
                  ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
                  ctx.fillRect(hx + i * (heatSize / N), hy + j * (heatSize / N), heatSize / N + 1, heatSize / N + 1);
                }
              }
              ctx.strokeStyle = viz.colors.axis;
              ctx.lineWidth = 1;
              ctx.strokeRect(hx, hy, heatSize, heatSize);
              viz.screenText('s', hx + heatSize / 2, hy + heatSize + 14, viz.colors.text, 11);
              viz.screenText('t', hx - 12, hy + heatSize / 2, viz.colors.text, 11);

              // Draw input function
              var fx0 = left;
              var fy0 = hy + heatSize + 40;
              viz.screenText('Input f(t)', fx0 + plotW / 2, fy0, viz.colors.blue, 12);
              var fPlotH = 70;
              ctx.strokeStyle = viz.colors.axis + '44';
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(fx0, fy0 + 15 + fPlotH / 2);
              ctx.lineTo(fx0 + plotW, fy0 + 15 + fPlotH / 2);
              ctx.stroke();

              ctx.strokeStyle = viz.colors.blue;
              ctx.lineWidth = 2;
              ctx.beginPath();
              for (var p = 0; p <= 100; p++) {
                var tt = p / 100;
                var fv = inputF(tt, time);
                var px = fx0 + tt * plotW;
                var py = fy0 + 15 + fPlotH / 2 - fv * fPlotH / 2.5;
                if (p === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
              }
              ctx.stroke();

              // Draw output function
              var ox0 = left + plotW + 60;
              viz.screenText('Output (Tf)(s)', ox0 + plotW / 2, fy0, viz.colors.teal, 12);
              ctx.strokeStyle = viz.colors.axis + '44';
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(ox0, fy0 + 15 + fPlotH / 2);
              ctx.lineTo(ox0 + plotW, fy0 + 15 + fPlotH / 2);
              ctx.stroke();

              ctx.strokeStyle = viz.colors.teal;
              ctx.lineWidth = 2;
              ctx.beginPath();
              for (var q = 0; q <= 100; q++) {
                var ss = q / 100;
                var outVal = applyKernel(kernel, function(t) { return inputF(t, time); }, ss, 50);
                var qx = ox0 + ss * plotW;
                var qy = fy0 + 15 + fPlotH / 2 - outVal * fPlotH / 2.5;
                if (q === 0) ctx.moveTo(qx, qy); else ctx.lineTo(qx, qy);
              }
              ctx.stroke();

              // Arrow
              viz.screenText('T', ox0 - 30, fy0 + 15 + fPlotH / 2, viz.colors.white, 14);
              ctx.strokeStyle = viz.colors.white + '66';
              ctx.lineWidth = 1;
              ctx.setLineDash([3, 3]);
              ctx.beginPath();
              ctx.moveTo(fx0 + plotW + 8, fy0 + 15 + fPlotH / 2);
              ctx.lineTo(ox0 - 45, fy0 + 15 + fPlotH / 2);
              ctx.stroke();
              ctx.setLineDash([]);

              viz.screenText('Compact: oscillations are smoothed out', w / 2, h - 12, viz.colors.text, 11);
            });
          }
        },
        {
          id: 'viz-ch14-diagonal-decay',
          title: 'Diagonal Operator: Decay of Eigenvalues',
          description: 'Explore diagonal operators on l^2. When the diagonal entries d_n -> 0, the operator is compact. Adjust the decay rate and see the effect on the image of basis vectors.',
          type: 'canvas',
          setup: function(container) {
            var viz = new VizEngine(container, { scale: 30, originX: 60, originY: 200 });
            var state = { decayRate: 1.0 };

            var controls = document.createElement('div');
            controls.className = 'viz-controls';
            container.appendChild(controls);
            VizEngine.createSlider(controls, 'Decay rate p (d_n = 1/n^p)', 0.0, 2.0, 1.0, 0.1, function(v) { state.decayRate = v; });

            var N = 15;

            viz.animate(function() {
              viz.clear();
              var ctx = viz.ctx;
              var w = viz.width;
              var h = viz.height;

              var barW = (w - 120) / N;
              var maxH = h - 80;

              // Diagonal entries
              viz.screenText('Diagonal entries d_n = 1/n^p, p = ' + state.decayRate.toFixed(1), w / 2, 20, viz.colors.white, 13);

              for (var n = 1; n <= N; n++) {
                var dn = state.decayRate === 0 ? 1 : 1 / Math.pow(n, state.decayRate);
                var barH = dn * (maxH * 0.7);
                var x = 60 + (n - 1) * barW;
                var y = h - 40 - barH;

                // Bar for |d_n|
                ctx.fillStyle = dn > 0.01 ? viz.colors.blue : viz.colors.blue + '44';
                ctx.fillRect(x + 2, y, barW - 4, barH);

                // Outline
                ctx.strokeStyle = viz.colors.blue + '88';
                ctx.lineWidth = 1;
                ctx.strokeRect(x + 2, y, barW - 4, barH);

                // Label
                viz.screenText(n.toString(), x + barW / 2, h - 28, viz.colors.text, 10);
              }

              // baseline
              ctx.strokeStyle = viz.colors.axis;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(55, h - 40);
              ctx.lineTo(w - 20, h - 40);
              ctx.stroke();

              viz.screenText('n', w - 10, h - 28, viz.colors.text, 11);

              // Compact?
              var isCompact = state.decayRate > 0;
              var label = isCompact ? 'Compact: d_n -> 0' : 'NOT compact: d_n = 1 (identity)';
              var col = isCompact ? viz.colors.teal : viz.colors.red;
              viz.screenText(label, w / 2, h - 8, col, 12);
            });
          }
        },
        {
          id: 'viz-ch14-volterra-action',
          title: 'Volterra Operator in Action',
          description: 'The Volterra operator integrates a function from 0 to s. See how it smooths and dampens the input, demonstrating compactness.',
          type: 'canvas',
          setup: function(container) {
            var viz = new VizEngine(container, { scale: 50 });
            var state = { freq: 3 };

            var controls = document.createElement('div');
            controls.className = 'viz-controls';
            container.appendChild(controls);
            VizEngine.createSlider(controls, 'Input frequency', 1, 10, 3, 1, function(v) { state.freq = v; });

            viz.animate(function(time) {
              viz.clear();
              var ctx = viz.ctx;
              var w = viz.width;
              var h = viz.height;
              var pad = 50;
              var plotW = w - 2 * pad;
              var plotH = (h - 100) / 2;

              // Input
              viz.screenText('f(t) = sin(' + state.freq + 'pi t)', w / 2, 18, viz.colors.blue, 13);
              var baseY1 = 35 + plotH / 2;
              ctx.strokeStyle = viz.colors.axis + '33';
              ctx.lineWidth = 0.5;
              ctx.beginPath(); ctx.moveTo(pad, baseY1); ctx.lineTo(pad + plotW, baseY1); ctx.stroke();

              ctx.strokeStyle = viz.colors.blue;
              ctx.lineWidth = 2;
              ctx.beginPath();
              for (var i = 0; i <= 200; i++) {
                var t = i / 200;
                var v = Math.sin(state.freq * Math.PI * t);
                var px = pad + t * plotW;
                var py = baseY1 - v * plotH * 0.4;
                if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
              }
              ctx.stroke();

              // Output: Vf(s) = integral_0^s sin(k*pi*t) dt = (1 - cos(k*pi*s))/(k*pi)
              viz.screenText('(Vf)(s) = integral from 0 to s of f(t) dt', w / 2, 45 + plotH, viz.colors.teal, 13);
              var baseY2 = 60 + plotH + plotH / 2;
              ctx.strokeStyle = viz.colors.axis + '33';
              ctx.lineWidth = 0.5;
              ctx.beginPath(); ctx.moveTo(pad, baseY2); ctx.lineTo(pad + plotW, baseY2); ctx.stroke();

              ctx.strokeStyle = viz.colors.teal;
              ctx.lineWidth = 2;
              ctx.beginPath();
              var kpi = state.freq * Math.PI;
              for (var j = 0; j <= 200; j++) {
                var s = j / 200;
                var vf = (1 - Math.cos(kpi * s)) / kpi;
                var qx = pad + s * plotW;
                var qy = baseY2 - vf * plotH * 0.4 * kpi;
                if (j === 0) ctx.moveTo(qx, qy); else ctx.lineTo(qx, qy);
              }
              ctx.stroke();

              // Amplitude comparison
              var inputAmp = 1.0;
              var outputAmp = (2 / kpi).toFixed(3);
              viz.screenText('Input amplitude: 1.0   Output amplitude: ~' + outputAmp, w / 2, h - 12, viz.colors.text, 11);
              viz.screenText('Higher frequency => smaller output: compactness in action', w / 2, h - 28, viz.colors.purple, 10);
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch14-ex05',
          type: 'proof',
          difficulty: 3,
          question: 'Let k(s,t) = min(s,t) for s,t in [0,1]. Show that the integral operator (Tf)(s) = integral from 0 to 1 of min(s,t) f(t) dt is compact on L^2[0,1] and compute Tf when f(t) = 1.',
          hint: 'For compactness, note k is continuous. For the computation, split the integral at t = s.',
          solution: 'Since k(s,t) = min(s,t) is continuous on [0,1]^2, the integral operator is compact by the Hilbert-Schmidt theorem. For f(t) = 1: (Tf)(s) = integral_0^s t dt + integral_s^1 s dt = s^2/2 + s(1-s) = s - s^2/2.'
        },
        {
          id: 'ch14-ex06',
          type: 'proof',
          difficulty: 2,
          question: 'Prove that the diagonal operator D on l^2 with d_n = (-1)^n / n is compact.',
          hint: 'Check that |d_n| -> 0 and apply Theorem 14.7.',
          solution: 'We have |d_n| = |(-1)^n / n| = 1/n -> 0 as n -> infinity. By Theorem 14.7, D is compact. Alternatively, the finite-rank truncations D_N converge to D in operator norm: ||D - D_N|| = sup_{n>N} 1/n = 1/(N+1) -> 0.'
        },
        {
          id: 'ch14-ex07',
          type: 'truefalse',
          difficulty: 2,
          question: 'True or False: The Volterra operator V on L^2[0,1] has an eigenvalue.',
          answer: false,
          explanation: 'False. If Vf = lambda f with lambda != 0, differentiating gives f(s) = f(s)/lambda with f(0) = (Vf)(0) = 0, so f = 0. The only eigenvalue would be lambda = 0, but Vf = 0 implies f = 0 a.e., so 0 is not an eigenvalue either.'
        },
        {
          id: 'ch14-ex08',
          type: 'computation',
          difficulty: 2,
          question: 'For the diagonal operator D with d_n = 1/n^2 on l^2, compute ||D|| and ||D - D_3|| where D_3 is the rank-3 truncation.',
          hint: 'The operator norm of a diagonal operator is the supremum of |d_n|.',
          solution: '||D|| = sup_n |d_n| = d_1 = 1. For D_3 we zero out d_1, d_2, d_3 and keep d_n for n >= 4: ||D - D_3|| = sup_{n >= 4} 1/n^2 = 1/16.'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 3: Properties of Compact Operators
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch14-sec03',
      title: '3. Properties',
      content: `
<div class="bridge-block section-bridge">
<p><strong>Algebraic and Topological Structure.</strong> Compact operators form a closed two-sided ideal in \(\mathcal{B}(X)\): sums, scalar multiples, compositions with bounded operators, and norm limits of compact operators are all compact. This ideal property is fundamental for Fredholm theory in Chapter 15.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove the ideal property, show that norm limits of compact operators are compact, and establish that in Hilbert spaces, every compact operator is a norm limit of finite-rank operators (the approximation property).</p>
</div>

<h2>The Space of Compact Operators</h2>

<p>
Compact operators form a particularly well-behaved subclass of bounded operators.
They form a closed two-sided ideal in \\(\\mathcal{B}(X,Y)\\), which makes them amenable to algebraic analysis.
</p>

<h3>Vector Space Structure</h3>

<div class="theorem">
<strong>Theorem 14.9.</strong>
Let \\(X\\) and \\(Y\\) be normed spaces. Then \\(\\mathcal{K}(X,Y)\\) is a linear subspace of \\(\\mathcal{B}(X,Y)\\).
That is, if \\(T_1, T_2 \\in \\mathcal{K}(X,Y)\\) and \\(\\alpha, \\beta \\in \\mathbb{F}\\), then \\(\\alpha T_1 + \\beta T_2 \\in \\mathcal{K}(X,Y)\\).
</div>

<div class="proof">
<strong>Proof.</strong>
Let \\((x_n)\\) be a bounded sequence. Since \\(T_1\\) is compact, there is a subsequence \\((x_{n_k})\\)
such that \\((T_1 x_{n_k})\\) converges. Since \\(T_2\\) is compact, from \\((x_{n_k})\\) we can extract a
further subsequence \\((x_{n_{k_j}})\\) such that \\((T_2 x_{n_{k_j}})\\) converges.
Then \\((\\alpha T_1 + \\beta T_2)(x_{n_{k_j}}) = \\alpha T_1 x_{n_{k_j}} + \\beta T_2 x_{n_{k_j}}\\)
converges. \\(\\square\\)
</div>

<h3>Closedness</h3>

<div class="theorem">
<strong>Theorem 14.10.</strong>
Let \\(Y\\) be a Banach space. Then \\(\\mathcal{K}(X,Y)\\) is <em>closed</em> in \\(\\mathcal{B}(X,Y)\\) with respect to the operator norm.
That is, if \\((T_n)\\) is a sequence of compact operators and \\(T_n \\to T\\) in operator norm, then \\(T\\) is compact.
</div>

<div class="proof">
<strong>Proof.</strong>
We verify that \\(T(B_X)\\) is totally bounded. Given \\(\\varepsilon > 0\\), choose \\(N\\) with \\(\\|T - T_N\\| < \\varepsilon/2\\).
Since \\(T_N\\) is compact, \\(T_N(B_X)\\) is totally bounded: cover it by finitely many balls \\(B(y_j, \\varepsilon/2)\\).
For any \\(x \\in B_X\\), we have \\(T_N x \\in B(y_j, \\varepsilon/2)\\) for some \\(j\\), and
\\[\\|Tx - y_j\\| \\le \\|Tx - T_N x\\| + \\|T_N x - y_j\\| < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon.\\]
So \\(T(B_X)\\) is covered by finitely many \\(\\varepsilon\\)-balls. \\(\\square\\)
</div>

<div class="intuition">
<strong>Why this matters.</strong>
This closedness result is extremely powerful: to prove an operator is compact,
it suffices to approximate it by a sequence of compact operators (often finite-rank ones).
This is the standard strategy for proving many operators are compact.
</div>

<h3>Ideal Property</h3>

<div class="theorem">
<strong>Theorem 14.11 (Two-Sided Ideal).</strong>
Let \\(X, Y, Z\\) be normed spaces. If \\(T \\in \\mathcal{K}(X,Y)\\) and \\(S \\in \\mathcal{B}(Y,Z)\\), then \\(ST \\in \\mathcal{K}(X,Z)\\).
If \\(T \\in \\mathcal{B}(X,Y)\\) and \\(S \\in \\mathcal{K}(Y,Z)\\), then \\(ST \\in \\mathcal{K}(X,Z)\\).
</div>

<div class="proof">
<strong>Proof.</strong>
<em>Case 1:</em> \\(T\\) compact, \\(S\\) bounded. Let \\((x_n)\\) be bounded. Since \\(T\\) is compact, \\((Tx_n)\\) has a convergent subsequence \\(Tx_{n_k} \\to y\\). By continuity of \\(S\\), \\(STx_{n_k} \\to Sy\\).
<br><br>
<em>Case 2:</em> \\(T\\) bounded, \\(S\\) compact. The sequence \\((Tx_n)\\) is bounded (since \\(T\\) is bounded), and \\(S\\) being compact gives a convergent subsequence of \\((STx_n)\\). \\(\\square\\)
</div>

<div class="example">
<strong>Consequence.</strong>
In a Banach algebra \\(\\mathcal{B}(X)\\), the compact operators \\(\\mathcal{K}(X)\\) form a <em>closed two-sided ideal</em>.
In particular:
<ul>
<li>If \\(T\\) is compact and \\(S\\) is any bounded operator, both \\(TS\\) and \\(ST\\) are compact.</li>
<li>The quotient algebra \\(\\mathcal{B}(X)/\\mathcal{K}(X)\\) is called the <strong>Calkin algebra</strong>, fundamental in index theory.</li>
</ul>
</div>

<h3>Composition and Powers</h3>

<div class="theorem">
<strong>Corollary 14.12.</strong>
If \\(T \\in \\mathcal{B}(X)\\) and \\(T^n\\) is compact for some \\(n \\ge 1\\), then \\(T^m\\) is compact for all \\(m \\ge n\\).
</div>

<div class="proof">
<strong>Proof.</strong>
\\(T^m = T^{m-n} \\cdot T^n\\) is the product of a bounded operator and a compact operator. \\(\\square\\)
</div>

<div class="warning">
<strong>Caution.</strong>
The compact operators do NOT form an <em>algebra</em> with identity in infinite dimensions:
the identity operator is not compact (unless the space is finite-dimensional).
So \\(\\mathcal{K}(X)\\) is a <em>non-unital</em> ideal in \\(\\mathcal{B}(X)\\).
</div>
`,
      visualizations: [
        {
          id: 'viz-ch14-norm-limit',
          title: 'Norm Limit of Compact Operators',
          description: 'Watch how a sequence of finite-rank operators T_N converges to a compact operator T. The operator norm ||T - T_N|| decreases, demonstrating Theorem 14.10.',
          type: 'canvas',
          setup: function(container) {
            var viz = new VizEngine(container, { scale: 50, originX: 280, originY: 200 });
            var state = { N: 1 };

            var controls = document.createElement('div');
            controls.className = 'viz-controls';
            container.appendChild(controls);
            VizEngine.createSlider(controls, 'Rank N', 1, 15, 1, 1, function(v) { state.N = Math.round(v); });

            // d_n = 1/n (the target compact operator)
            var maxTerms = 20;

            viz.animate(function() {
              viz.clear();
              var ctx = viz.ctx;
              var w = viz.width;
              var h = viz.height;
              var N = state.N;

              var barW = (w - 100) / maxTerms;
              var maxBarH = h - 100;

              viz.screenText('Diagonal operator D: d_n = 1/n', w / 2, 18, viz.colors.white, 13);
              viz.screenText('Rank-' + N + ' truncation D_N (blue) vs full D (ghost)', w / 2, 36, viz.colors.text, 11);

              for (var n = 1; n <= maxTerms; n++) {
                var dn = 1 / n;
                var barH = dn * maxBarH * 0.8;
                var x = 50 + (n - 1) * barW;
                var y = h - 50 - barH;

                // Full operator (ghost)
                ctx.fillStyle = viz.colors.white + '15';
                ctx.fillRect(x + 2, y, barW - 4, barH);
                ctx.strokeStyle = viz.colors.white + '33';
                ctx.lineWidth = 0.5;
                ctx.strokeRect(x + 2, y, barW - 4, barH);

                // Truncation
                if (n <= N) {
                  ctx.fillStyle = viz.colors.blue + 'aa';
                  ctx.fillRect(x + 2, y, barW - 4, barH);
                  ctx.strokeStyle = viz.colors.blue;
                  ctx.lineWidth = 1;
                  ctx.strokeRect(x + 2, y, barW - 4, barH);
                }

                viz.screenText(n.toString(), x + barW / 2, h - 38, viz.colors.text, 9);
              }

              // Baseline
              ctx.strokeStyle = viz.colors.axis;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(45, h - 50);
              ctx.lineTo(w - 20, h - 50);
              ctx.stroke();

              // Error bar
              var err = 1 / (N + 1);
              var errBarH = err * maxBarH * 0.8;
              var errX = w - 85;
              ctx.fillStyle = viz.colors.red + '55';
              ctx.fillRect(errX, h - 50 - errBarH, 30, errBarH);
              ctx.strokeStyle = viz.colors.red;
              ctx.lineWidth = 1.5;
              ctx.strokeRect(errX, h - 50 - errBarH, 30, errBarH);
              viz.screenText('||D-D_N||', errX + 15, h - 50 - errBarH - 12, viz.colors.red, 10);
              viz.screenText('= ' + err.toFixed(3), errX + 15, h - 50 - errBarH - 24, viz.colors.red, 10);
            });
          }
        },
        {
          id: 'viz-ch14-ideal-composition',
          title: 'Ideal Property: Bounded x Compact = Compact',
          description: 'Visualize the composition of a bounded operator with a compact operator. The compact factor forces the result to be compact regardless of the other factor.',
          type: 'canvas',
          setup: function(container) {
            var viz = new VizEngine(container, { scale: 45, originX: 150, originY: 200 });
            var time = { t: 0 };

            viz.animate(function(t) {
              time.t = t;
              viz.clear();
              var ctx = viz.ctx;
              var w = viz.width;

              // Three circles representing spaces
              var cx1 = 80, cx2 = w / 2, cx3 = w - 80;
              var cy = 180;
              var rad = 55;

              // Space circles
              ctx.strokeStyle = viz.colors.blue;
              ctx.lineWidth = 2;
              ctx.beginPath(); ctx.arc(cx1, cy, rad, 0, Math.PI * 2); ctx.stroke();

              ctx.strokeStyle = viz.colors.teal;
              ctx.lineWidth = 2;
              ctx.beginPath(); ctx.arc(cx2, cy, rad, 0, Math.PI * 2); ctx.stroke();

              ctx.strokeStyle = viz.colors.orange;
              ctx.lineWidth = 2;
              ctx.beginPath(); ctx.arc(cx3, cy, rad, 0, Math.PI * 2); ctx.stroke();

              viz.screenText('X', cx1, cy - rad - 15, viz.colors.blue, 14);
              viz.screenText('Y', cx2, cy - rad - 15, viz.colors.teal, 14);
              viz.screenText('Z', cx3, cy - rad - 15, viz.colors.orange, 14);

              // Points in X (unit ball)
              var numPts = 12;
              for (var i = 0; i < numPts; i++) {
                var angle = (i / numPts) * 2 * Math.PI + t * 0.0005;
                var r = 0.6 + 0.3 * Math.sin(i * 2.5);
                var px = cx1 + r * rad * Math.cos(angle);
                var py = cy + r * rad * Math.sin(angle);

                ctx.fillStyle = viz.colors.blue + '88';
                ctx.beginPath(); ctx.arc(px, py, 3, 0, Math.PI * 2); ctx.fill();

                // T maps to concentrated region (compact)
                var s = 0.25 + 0.1 * Math.cos(angle * 2);
                var mx = cx2 + s * rad * Math.cos(angle * 0.5 + 0.3);
                var my = cy + s * rad * Math.sin(angle * 0.7 - 0.2);

                ctx.fillStyle = viz.colors.teal + '88';
                ctx.beginPath(); ctx.arc(mx, my, 3, 0, Math.PI * 2); ctx.fill();

                // S maps (still concentrated, bounded preserves relative compactness)
                var sx = cx3 + (mx - cx2) * 1.3 / rad * rad * 0.5 + 5 * Math.cos(i + t * 0.001);
                var sy = cy + (my - cy) * 1.1 / rad * rad * 0.5 + 5 * Math.sin(i);

                ctx.fillStyle = viz.colors.orange + '88';
                ctx.beginPath(); ctx.arc(sx, sy, 3, 0, Math.PI * 2); ctx.fill();

                // Connection lines
                ctx.strokeStyle = viz.colors.white + '15';
                ctx.lineWidth = 0.5;
                ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(mx, my); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(mx, my); ctx.lineTo(sx, sy); ctx.stroke();
              }

              // Arrow labels
              viz.screenText('T (compact)', (cx1 + cx2) / 2, cy - rad - 35, viz.colors.purple, 12);
              viz.screenText('S (bounded)', (cx2 + cx3) / 2, cy - rad - 35, viz.colors.yellow, 12);

              // Arrows
              ctx.strokeStyle = viz.colors.white + '55';
              ctx.lineWidth = 1.5;
              ctx.beginPath(); ctx.moveTo(cx1 + rad + 5, cy - 10); ctx.lineTo(cx2 - rad - 5, cy - 10); ctx.stroke();
              ctx.beginPath(); ctx.moveTo(cx2 + rad + 5, cy - 10); ctx.lineTo(cx3 - rad - 5, cy - 10); ctx.stroke();

              viz.screenText('ST is compact: concentrated image in Y stays concentrated in Z', w / 2, cy + rad + 40, viz.colors.white, 11);
              viz.screenText('Compact operators form a two-sided ideal in B(X)', w / 2, cy + rad + 58, viz.colors.text, 10);
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch14-ex09',
          type: 'proof',
          difficulty: 2,
          question: 'Let T: X -> Y be compact and let S: Y -> Z be a bounded operator that is bounded below (there exists c > 0 with ||Sy|| >= c||y|| for all y). Show that ST is compact.',
          hint: 'This follows directly from the ideal property. The "bounded below" condition is not needed for compactness of the composition.',
          solution: 'By the ideal property (Theorem 14.11), the composition of a bounded operator S with a compact operator T is compact. The "bounded below" condition is a red herring: ST is compact regardless, since if (x_n) is bounded, Tx_{n_k} -> y for some subsequence, and then STx_{n_k} -> Sy by continuity of S.'
        },
        {
          id: 'ch14-ex10',
          type: 'proof',
          difficulty: 3,
          question: 'Prove that if T_n are compact operators on a Banach space X and T_n -> T in operator norm, then T is compact, WITHOUT using the total boundedness characterization. (Use a diagonal subsequence argument.)',
          hint: 'Given a bounded sequence (x_k), extract successive subsequences for each T_n, then take the diagonal.',
          solution: 'Let (x_k) be bounded in X with ||x_k|| <= M. Since T_1 is compact, extract a subsequence (x_k^{(1)}) with (T_1 x_k^{(1)}) convergent. From (x_k^{(1)}), extract (x_k^{(2)}) with (T_2 x_k^{(2)}) convergent. Continue to get nested subsequences. Let z_k = x_k^{(k)} (diagonal). Then (T_n z_k)_k converges for every n. Now show (Tz_k) is Cauchy: ||Tz_j - Tz_k|| <= ||Tz_j - T_n z_j|| + ||T_n z_j - T_n z_k|| + ||T_n z_k - Tz_k|| <= 2M||T-T_n|| + ||T_n z_j - T_n z_k||. Choose n so first terms < epsilon/2, then j,k large so last term < epsilon/2.'
        },
        {
          id: 'ch14-ex11',
          type: 'truefalse',
          difficulty: 2,
          question: 'True or False: If T is compact on an infinite-dimensional Banach space X, then T is not invertible.',
          answer: true,
          explanation: 'True. If T were invertible, then I = T^{-1}T would be compact (product of bounded and compact). But the identity is not compact on infinite-dimensional spaces, contradiction.'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 4: The Hilbert Space Case
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch14-sec04',
      title: '4. Hilbert Space Case',
      content: `
<div class="bridge-block section-bridge">
<p><strong>Preview of Spectral Theory.</strong> Compact operators have a remarkably well-behaved spectrum: every nonzero spectral value is an eigenvalue, eigenvalues can only accumulate at zero, and each nonzero eigenvalue has finite multiplicity. These properties bring us close to the finite-dimensional spectral theorem.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove the Riesz-Schauder theorem on the spectrum of compact operators, show that eigenspaces are finite-dimensional, and establish that the only possible accumulation point of eigenvalues is zero. These results are developed fully in Chapter 16.</p>
</div>

<h2>Compact Operators on Hilbert Spaces</h2>

<p>
On Hilbert spaces, the theory of compact operators reaches its most elegant form.
The key result is that every compact operator on a Hilbert space can be approximated in norm by finite-rank operators.
Combined with the spectral theorem (Chapter 16), this gives a complete structure theory.
</p>

<h3>Approximation by Finite-Rank Operators</h3>

<div class="theorem">
<strong>Theorem 14.13 (Approximation Property for Hilbert Spaces).</strong>
Let \\(H\\) be a separable Hilbert space. Then \\(T \\in \\mathcal{B}(H)\\) is compact if and only if
\\(T\\) is the norm-limit of a sequence of finite-rank operators. That is,
\\[
\\mathcal{K}(H) = \\overline{\\mathcal{F}(H)}.
\\]
</div>

<div class="proof">
<strong>Proof.</strong>
(\\(\\Leftarrow\\)) Every finite-rank operator is compact, and \\(\\mathcal{K}(H)\\) is closed. Done.
<br><br>
(\\(\\Rightarrow\\)) Let \\(T\\) be compact and let \\((e_n)_{n \\ge 1}\\) be an orthonormal basis for \\(H\\).
Define \\(P_N: H \\to H\\) as the orthogonal projection onto \\(\\text{span}\\{e_1, \\ldots, e_N\\}\\).
Set \\(T_N = P_N T\\), which has rank at most \\(N\\).
<br><br>
<em>Claim:</em> \\(\\|T - T_N\\| \\to 0\\).
<br><br>
Suppose not. Then there exist \\(\\varepsilon > 0\\) and unit vectors \\(x_N\\) with \\(\\|(T - P_N T)x_N\\| \\ge \\varepsilon\\).
Since \\(T\\) is compact, passing to a subsequence, \\(Tx_{N_k} \\to y\\) for some \\(y \\in H\\).
But \\(P_{N_k} y \\to y\\) (since \\(y = \\sum \\langle y, e_n \\rangle e_n\\) and partial sums converge).
Then
\\[\\|(T - P_{N_k} T)x_{N_k}\\| \\le \\|Tx_{N_k} - y\\| + \\|y - P_{N_k} y\\| + \\|P_{N_k}\\| \\|y - Tx_{N_k}\\| \\to 0,\\]
contradicting \\(\\|(T - P_{N_k} T)x_{N_k}\\| \\ge \\varepsilon\\). \\(\\square\\)
</div>

<div class="warning">
<strong>Beyond Hilbert spaces.</strong>
The statement "every compact operator is a norm limit of finite-rank operators" is called the
<strong>approximation property</strong>. Hilbert spaces always have it, and most "natural" Banach spaces do too.
However, Enflo (1973) constructed a separable Banach space that <em>fails</em> the approximation property —
one of the great surprises of functional analysis.
</div>

<h3>Adjoint of a Compact Operator</h3>

<div class="theorem">
<strong>Theorem 14.14.</strong>
Let \\(H\\) and \\(K\\) be Hilbert spaces and \\(T \\in \\mathcal{B}(H,K)\\). Then \\(T\\) is compact if and only if \\(T^*T\\) is compact.
</div>

<div class="proof">
<strong>Proof.</strong>
If \\(T\\) is compact, \\(T^*T\\) is compact by the ideal property (bounded times compact).
Conversely, if \\(T^*T\\) is compact and \\((x_n)\\) is bounded, pass to a subsequence with \\(T^*Tx_{n_k} \\to z\\).
Then \\(\\|Tx_{n_k} - Tx_{n_j}\\|^2 = \\langle T^*T(x_{n_k} - x_{n_j}), x_{n_k} - x_{n_j}\\rangle \\to 0\\),
so \\((Tx_{n_k})\\) is Cauchy, hence convergent. \\(\\square\\)
</div>

<h3>The Singular Value Decomposition</h3>

<p>
Every compact operator on a Hilbert space has a singular value decomposition (SVD) that generalizes the finite-dimensional SVD.
</p>

<div class="theorem">
<strong>Theorem 14.15 (SVD for Compact Operators).</strong>
Let \\(T: H \\to K\\) be a compact operator between Hilbert spaces. Then there exist orthonormal sequences \\((e_n)\\) in \\(H\\)
and \\((f_n)\\) in \\(K\\), and a decreasing sequence \\(s_1 \\ge s_2 \\ge \\cdots \\ge 0\\) with \\(s_n \\to 0\\), such that
\\[
Tx = \\sum_{n=1}^\\infty s_n \\langle x, e_n \\rangle f_n.
\\]
The numbers \\(s_n\\) are the <strong>singular values</strong> of \\(T\\), equal to the eigenvalues of \\((T^*T)^{1/2}\\).
</div>

<div class="intuition">
<strong>Geometric picture.</strong>
The SVD says: \\(T\\) picks out special directions \\(e_n\\) in the domain, stretches them by factors \\(s_n\\) (which decay to zero!),
and rotates them to directions \\(f_n\\) in the codomain. The decay \\(s_n \\to 0\\) is the essence of compactness:
the operator becomes "infinitely weak" along higher-order directions.
</div>

<div class="example">
<strong>Example 14.16.</strong>
For the diagonal operator \\(D(x_1, x_2, \\ldots) = (x_1, x_2/2, x_3/3, \\ldots)\\) on \\(\\ell^2\\):
<ul>
<li>\\(e_n = f_n = \\) standard basis vector \\(e_n\\)</li>
<li>\\(s_n = 1/n\\)</li>
<li>\\(Dx = \\sum_{n=1}^\\infty \\frac{1}{n} \\langle x, e_n \\rangle e_n\\)</li>
</ul>
The approximation \\(D_N x = \\sum_{n=1}^N \\frac{1}{n} \\langle x, e_n \\rangle e_n\\) has error \\(\\|D - D_N\\| = 1/(N+1)\\).
</div>
`,
      visualizations: [
        {
          id: 'viz-ch14-finite-rank-approx',
          title: 'Finite-Rank Approximation of Compact Operator',
          description: 'See how increasing the rank N of the finite-rank approximation T_N = P_N T brings it closer to the compact operator T. The bars show singular values and the truncation.',
          type: 'canvas',
          setup: function(container) {
            var viz = new VizEngine(container, { scale: 40, originX: 280, originY: 200 });
            var state = { N: 3 };

            var controls = document.createElement('div');
            controls.className = 'viz-controls';
            container.appendChild(controls);
            VizEngine.createSlider(controls, 'Rank N', 1, 20, 3, 1, function(v) { state.N = Math.round(v); });

            // Singular values: s_n = 1/n^0.7
            function sn(n) { return 1 / Math.pow(n, 0.7); }
            var maxN = 25;

            // Generate function to show in 2D
            function originalCurve(t) {
              var x = 0, y = 0;
              for (var n = 1; n <= 40; n++) {
                x += sn(n) * Math.cos(n * t) / n;
                y += sn(n) * Math.sin(n * t) / n;
              }
              return [x * 3, y * 3];
            }

            function approxCurve(t, N) {
              var x = 0, y = 0;
              for (var n = 1; n <= N; n++) {
                x += sn(n) * Math.cos(n * t) / n;
                y += sn(n) * Math.sin(n * t) / n;
              }
              return [x * 3, y * 3];
            }

            viz.animate(function() {
              viz.clear();
              var ctx = viz.ctx;
              var w = viz.width;
              var h = viz.height;
              var N = state.N;

              // Left: singular value bars
              var barRegion = w * 0.35;
              var barW = (barRegion - 20) / maxN;
              var maxBarH = h * 0.5;

              viz.screenText('Singular values s_n', barRegion / 2, 15, viz.colors.white, 12);

              for (var n = 1; n <= maxN; n++) {
                var sv = sn(n);
                var bH = sv * maxBarH;
                var bx = 10 + (n - 1) * barW;
                var by = h * 0.65 - bH;
                var col = n <= N ? viz.colors.blue : viz.colors.white + '22';
                ctx.fillStyle = col;
                ctx.fillRect(bx, by, barW - 1, bH);
              }

              // Cut line
              if (N < maxN) {
                var cutX = 10 + N * barW - 0.5;
                ctx.strokeStyle = viz.colors.red;
                ctx.lineWidth = 2;
                ctx.setLineDash([4, 3]);
                ctx.beginPath();
                ctx.moveTo(cutX, h * 0.15);
                ctx.lineTo(cutX, h * 0.65);
                ctx.stroke();
                ctx.setLineDash([]);
                viz.screenText('N=' + N, cutX, h * 0.13, viz.colors.red, 10);
              }

              // Error
              var err = sn(N + 1);
              viz.screenText('||T - T_N|| = s_{N+1} = ' + err.toFixed(4), barRegion / 2, h * 0.72, viz.colors.red, 11);

              // Right: curve comparison
              var curveOX = w * 0.35 + (w * 0.65) / 2;
              var curveOY = h * 0.45;
              viz.screenText('Image of a curve under T vs T_N', curveOX, 15, viz.colors.white, 12);

              // Draw full T curve
              ctx.strokeStyle = viz.colors.white + '44';
              ctx.lineWidth = 1;
              ctx.beginPath();
              for (var i = 0; i <= 200; i++) {
                var theta = (i / 200) * 2 * Math.PI;
                var pt = originalCurve(theta);
                var sx = curveOX + pt[0] * 40;
                var sy = curveOY + pt[1] * 40;
                if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
              }
              ctx.stroke();

              // Draw T_N approximation
              ctx.strokeStyle = viz.colors.teal;
              ctx.lineWidth = 2;
              ctx.beginPath();
              for (var j = 0; j <= 200; j++) {
                var theta2 = (j / 200) * 2 * Math.PI;
                var pt2 = approxCurve(theta2, N);
                var sx2 = curveOX + pt2[0] * 40;
                var sy2 = curveOY + pt2[1] * 40;
                if (j === 0) ctx.moveTo(sx2, sy2); else ctx.lineTo(sx2, sy2);
              }
              ctx.stroke();

              viz.screenText('White: T (full)   Teal: T_N (rank ' + N + ')', curveOX, h - 15, viz.colors.text, 10);
            });
          }
        },
        {
          id: 'viz-ch14-svd-geometry',
          title: 'SVD Geometry: Stretch and Rotate',
          description: 'Visualize the singular value decomposition of a compact operator. The unit circle in the domain is mapped to an ellipse-like shape with axes determined by singular values.',
          type: 'canvas',
          setup: function(container) {
            var viz = new VizEngine(container, { scale: 50, originX: 280, originY: 200 });
            var state = { s1: 1.5, s2: 0.8, angle: 0.5 };

            var controls = document.createElement('div');
            controls.className = 'viz-controls';
            container.appendChild(controls);
            VizEngine.createSlider(controls, 's1', 0.1, 2.5, 1.5, 0.1, function(v) { state.s1 = v; });
            VizEngine.createSlider(controls, 's2', 0.1, 2.0, 0.8, 0.1, function(v) { state.s2 = v; });
            VizEngine.createSlider(controls, 'Rotation angle', 0, 3.14, 0.5, 0.05, function(v) { state.angle = v; });

            viz.animate(function(t) {
              viz.clear();
              var ctx = viz.ctx;
              var s1 = state.s1, s2 = state.s2, ang = state.angle;

              // Left: domain with unit circle
              var domOX = -2.5;
              var imgOX = 2.8;

              // Unit circle in domain
              ctx.strokeStyle = viz.colors.blue;
              ctx.lineWidth = 2;
              ctx.beginPath();
              for (var i = 0; i <= 100; i++) {
                var theta = (i / 100) * 2 * Math.PI;
                var px = domOX + Math.cos(theta);
                var py = Math.sin(theta);
                var sp = viz.toScreen(px, py);
                if (i === 0) ctx.moveTo(sp[0], sp[1]); else ctx.lineTo(sp[0], sp[1]);
              }
              ctx.stroke();

              // Domain basis vectors e1, e2
              viz.drawVector(domOX, 0, domOX + 1, 0, viz.colors.blue, 'e1');
              viz.drawVector(domOX, 0, domOX, 1, viz.colors.purple, 'e2');
              viz.drawText('Domain', domOX, -2, viz.colors.blue, 12);

              // Image: ellipse with axes s1, s2 rotated by angle
              ctx.strokeStyle = viz.colors.teal;
              ctx.lineWidth = 2;
              ctx.beginPath();
              for (var j = 0; j <= 100; j++) {
                var th = (j / 100) * 2 * Math.PI;
                var ex = s1 * Math.cos(th);
                var ey = s2 * Math.sin(th);
                var rx = ex * Math.cos(ang) - ey * Math.sin(ang) + imgOX;
                var ry = ex * Math.sin(ang) + ey * Math.cos(ang);
                var sp2 = viz.toScreen(rx, ry);
                if (j === 0) ctx.moveTo(sp2[0], sp2[1]); else ctx.lineTo(sp2[0], sp2[1]);
              }
              ctx.stroke();

              // Image basis vectors f1, f2
              var f1x = s1 * Math.cos(ang) + imgOX;
              var f1y = s1 * Math.sin(ang);
              var f2x = -s2 * Math.sin(ang) + imgOX;
              var f2y = s2 * Math.cos(ang);
              viz.drawVector(imgOX, 0, f1x, f1y, viz.colors.teal, 's1 f1');
              viz.drawVector(imgOX, 0, f2x, f2y, viz.colors.pink, 's2 f2');
              viz.drawText('Image', imgOX, -2, viz.colors.teal, 12);

              // Arrow
              viz.drawText('T', 0.2, 1.5, viz.colors.white, 16);
              ctx.strokeStyle = viz.colors.white + '44';
              ctx.lineWidth = 1;
              ctx.setLineDash([4, 3]);
              var a1 = viz.toScreen(-1.2, 1.3);
              var a2 = viz.toScreen(1.5, 1.3);
              ctx.beginPath(); ctx.moveTo(a1[0], a1[1]); ctx.lineTo(a2[0], a2[1]); ctx.stroke();
              ctx.setLineDash([]);

              viz.screenText('Unit circle mapped to ellipse: axes = singular values', viz.width / 2, viz.height - 15, viz.colors.text, 11);
              viz.screenText('s1=' + s1.toFixed(1) + ', s2=' + s2.toFixed(1) + ' (for compact: s_n -> 0 in infinite dim)', viz.width / 2, viz.height - 30, viz.colors.yellow, 10);
            });
          }
        },
        {
          id: 'viz-ch14-hilbert-schmidt',
          title: 'Hilbert-Schmidt Norm and Compactness',
          description: 'Compare the operator norm with the Hilbert-Schmidt norm. If the HS norm is finite, the operator is compact. The HS norm equals sqrt(sum of squared singular values).',
          type: 'canvas',
          setup: function(container) {
            var viz = new VizEngine(container, { scale: 40 });
            var state = { p: 1.0 };

            var controls = document.createElement('div');
            controls.className = 'viz-controls';
            container.appendChild(controls);
            VizEngine.createSlider(controls, 'Decay s_n = 1/n^p', 0.0, 2.0, 1.0, 0.1, function(v) { state.p = v; });

            var maxN = 30;

            viz.animate(function() {
              viz.clear();
              var ctx = viz.ctx;
              var w = viz.width;
              var h = viz.height;
              var p = state.p;

              var barW = (w - 80) / maxN;
              var maxBarH = (h - 120) * 0.4;

              // Singular values
              viz.screenText('Singular values s_n = 1/n^' + p.toFixed(1), w / 2, 18, viz.colors.white, 13);

              var sumSq = 0;
              var opNorm = 0;
              for (var n = 1; n <= maxN; n++) {
                var sv = p === 0 ? 1 : 1 / Math.pow(n, p);
                sumSq += sv * sv;
                if (sv > opNorm) opNorm = sv;

                var bH = sv * maxBarH;
                var bx = 40 + (n - 1) * barW;
                var by = 45 + maxBarH - bH;

                ctx.fillStyle = viz.colors.blue;
                ctx.fillRect(bx, by, barW - 1, bH);
              }

              // Squared singular values
              viz.screenText('Squared: s_n^2', w / 2, 55 + maxBarH + 10, viz.colors.orange, 12);
              var maxBarH2 = (h - 120) * 0.3;
              var baseLine2 = 70 + maxBarH + maxBarH2;

              for (var m = 1; m <= maxN; m++) {
                var sv2 = p === 0 ? 1 : 1 / Math.pow(m, 2 * p);
                var bH2 = sv2 * maxBarH2;
                var bx2 = 40 + (m - 1) * barW;
                var by2 = baseLine2 - bH2;

                ctx.fillStyle = viz.colors.orange;
                ctx.fillRect(bx2, by2, barW - 1, bH2);
              }

              // Info
              var hsNorm = Math.sqrt(sumSq);
              var isHS = 2 * p > 1;
              var isCompact = p > 0;

              viz.screenText('||T|| = s_1 = ' + opNorm.toFixed(3), w / 2, baseLine2 + 18, viz.colors.blue, 11);
              viz.screenText('||T||_HS = sqrt(sum s_n^2) ' + (isHS ? '= ' + hsNorm.toFixed(3) + ' (finite)' : '= infinity'), w / 2, baseLine2 + 34, viz.colors.orange, 11);
              var compactLabel = isCompact ? 'Compact (s_n -> 0)' : 'NOT compact (s_n = 1)';
              var compactCol = isCompact ? viz.colors.teal : viz.colors.red;
              viz.screenText(compactLabel, w / 2, baseLine2 + 50, compactCol, 12);
              if (isHS) {
                viz.screenText('Hilbert-Schmidt: ||T||_HS < infinity => compact', w / 2, baseLine2 + 65, viz.colors.purple, 10);
              } else if (isCompact) {
                viz.screenText('Compact but NOT Hilbert-Schmidt (p <= 0.5 gives sum s_n^2 = infinity)', w / 2, baseLine2 + 65, viz.colors.yellow, 10);
              }
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch14-ex12',
          type: 'proof',
          difficulty: 3,
          question: 'Let H be a separable Hilbert space with ONB (e_n). Let T be compact with T e_n = lambda_n e_n (T diagonal in this basis). Prove that lambda_n -> 0.',
          hint: 'If lambda_n does not converge to 0, find a bounded sequence whose image under T has no convergent subsequence.',
          solution: 'If lambda_n does not converge to 0, there exist epsilon > 0 and a subsequence with |lambda_{n_k}| >= epsilon. Then (e_{n_k}) is bounded and ||Te_{n_k} - Te_{n_j}|| = ||lambda_{n_k} e_{n_k} - lambda_{n_j} e_{n_j}|| = sqrt(|lambda_{n_k}|^2 + |lambda_{n_j}|^2) >= epsilon, so no subsequence of (Te_{n_k}) is Cauchy, contradicting compactness.'
        },
        {
          id: 'ch14-ex13',
          type: 'proof',
          difficulty: 2,
          question: 'Let T be a compact self-adjoint operator on a Hilbert space H with singular values s_1 >= s_2 >= ... Show that s_n = |lambda_n| where lambda_n are the eigenvalues of T ordered by decreasing magnitude.',
          hint: 'For self-adjoint operators, T*T = T^2 and singular values are absolute values of eigenvalues.',
          solution: 'Since T is self-adjoint, T*T = T^2. The eigenvalues of T^2 are lambda_n^2 where lambda_n are eigenvalues of T. The singular values of T are the square roots of eigenvalues of T*T = T^2, which gives s_n = sqrt(lambda_n^2) = |lambda_n|.'
        },
        {
          id: 'ch14-ex14',
          type: 'computation',
          difficulty: 2,
          question: 'Let T: l^2 -> l^2 be defined by T(x_1,x_2,...) = (x_2/2, x_3/3, x_4/4, ...). Find the singular values of T and determine whether T is Hilbert-Schmidt.',
          hint: 'Compute T*T first. For T*T, find what (T*T)e_n equals.',
          solution: 'First, (Tx)(n) = x_{n+1}/(n+1) so T = DS where S is the left shift and D is the diagonal with d_n = 1/(n+1). Then T*T has eigenvalues 1/(n+1)^2 for n >= 1 (as one can verify T*T e_{n+1} = e_{n+1}/(n+1)^2). The singular values are s_n = 1/(n+1). The Hilbert-Schmidt norm is ||T||_HS = sqrt(sum 1/(n+1)^2) = sqrt(pi^2/6 - 1) which is finite, so T is Hilbert-Schmidt (hence compact).'
        },
        {
          id: 'ch14-ex15',
          type: 'truefalse',
          difficulty: 1,
          question: 'True or False: Every compact operator on a Hilbert space can be written as a norm-convergent sum of rank-one operators.',
          answer: true,
          explanation: 'True. By the SVD (Theorem 14.15), T = sum s_n <., e_n> f_n where each term is rank-one and the partial sums converge in operator norm since s_n -> 0.'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 5: Schauder's Theorem
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'ch14-sec05',
      title: '5. Schauder\'s Theorem',
      content: `
<div class="bridge-block section-bridge">
<p><strong>Duality for Compact Operators.</strong> Schauder's theorem states that \(T\) is compact if and only if its adjoint \(T^*\) is compact. This is a deep connection between an operator and its dual, and it leads directly to the Fredholm alternative for compact perturbations of the identity.</p>
</div>

<div class="bridge-block section-roadmap">
<p><strong>Section Roadmap.</strong> We prove Schauder's theorem, preview the Fredholm alternative (\(I - T\) is injective iff surjective when \(T\) is compact), and connect these results to the solvability theory of integral equations in Chapter 15.</p>
</div>

<div class="bridge-block chapter-closing">
<p><strong>Looking Ahead.</strong> Compact operators set the stage for two closely related theories. Chapter 15 develops Fredholm theory (index theory for compact perturbations of the identity), and Chapter 16 develops the full spectral theorem for compact self-adjoint operators on Hilbert spaces.</p>
</div>

<h2>Schauder's Theorem: Compactness of the Adjoint</h2>

<p>
One of the most important structural results about compact operators is Schauder's theorem,
which establishes a perfect duality between compactness of an operator and compactness of its adjoint.
</p>

<div class="theorem">
<strong>Theorem 14.17 (Schauder, 1930).</strong>
Let \\(X\\) and \\(Y\\) be Banach spaces and \\(T \\in \\mathcal{B}(X,Y)\\). Then
\\[
T \\text{ is compact} \\iff T^* \\text{ is compact},
\\]
where \\(T^*: Y^* \\to X^*\\) is the (Banach space) adjoint.
</div>

<div class="proof">
<strong>Proof.</strong>
<br><br>
<em>Step 1: \\(T\\) compact \\(\\Rightarrow\\) \\(T^*\\) compact.</em>
<br><br>
Let \\((g_n)\\) be a bounded sequence in \\(Y^*\\) with \\(\\|g_n\\| \\le M\\).
We must find a convergent subsequence of \\((T^* g_n)\\) in \\(X^*\\).
<br><br>
Since \\(T\\) is compact, \\(K := \\overline{T(B_X)}\\) is compact in \\(Y\\).
The sequence \\((g_n|_K)\\) of restrictions to \\(K\\) is uniformly bounded and equicontinuous
(each \\(g_n\\) is Lipschitz with constant \\(\\|g_n\\| \\le M\\)).
By the <strong>Arzel\\(\\grave{\\text{a}}\\)-Ascoli theorem</strong>, there is a subsequence \\((g_{n_k})\\) converging uniformly on \\(K\\).
<br><br>
Now for \\(x \\in B_X\\),
\\[\\|T^* g_{n_k}(x) - T^* g_{n_j}(x)\\| = |g_{n_k}(Tx) - g_{n_j}(Tx)| \\le \\sup_{y \\in K} |g_{n_k}(y) - g_{n_j}(y)|,\\]
so \\(\\|T^* g_{n_k} - T^* g_{n_j}\\| = \\sup_{x \\in B_X}|\\cdots| \\to 0\\).
Thus \\((T^* g_{n_k})\\) is Cauchy in \\(X^*\\), hence convergent.
<br><br>
<em>Step 2: \\(T^*\\) compact \\(\\Rightarrow\\) \\(T\\) compact.</em>
<br><br>
This is more subtle. If \\(T^*\\) is compact, then \\(T^{**}: X^{**} \\to Y^{**}\\) is compact by Step 1.
Let \\(J_X: X \\to X^{**}\\) and \\(J_Y: Y \\to Y^{**}\\) be the canonical embeddings.
For \\(x \\in X\\) and \\(g \\in Y^*\\):
\\[(T^{**} J_X x)(g) = (J_X x)(T^* g) = (T^* g)(x) = g(Tx) = (J_Y Tx)(g).\\]
So \\(T^{**} \\circ J_X = J_Y \\circ T\\), meaning \\(J_Y \\circ T\\) is compact (restriction of compact \\(T^{**}\\) to \\(J_X(X)\\)).
Since \\(J_Y\\) is an isometry, \\(T\\) itself must be compact. \\(\\square\\)
</div>

<div class="intuition">
<strong>Why Schauder's theorem is deep.</strong>
The forward direction (\\(T\\) compact \\(\\Rightarrow\\) \\(T^*\\) compact) uses the Arzela-Ascoli theorem
and is very concrete. The reverse direction requires passing through the bidual \\(X^{**}\\),
which is a purely Banach space technique with no Hilbert space analogue needed.
On Hilbert spaces, \\(T^*\\) compact \\(\\Leftrightarrow\\) \\(T\\) compact follows more directly from \\(\\|Tx\\|^2 = \\langle T^*Tx, x \\rangle\\).
</div>

<h3>Consequences</h3>

<div class="theorem">
<strong>Corollary 14.18.</strong>
Let \\(T \\in \\mathcal{B}(X,Y)\\) be compact. Then:
<ol>
<li>\\(T^*\\) is compact.</li>
<li>If \\(S \\in \\mathcal{B}(Y,Z)\\), then \\(S^*T^* = (TS)^*\\) is compact if either \\(T\\) or \\(S\\) is compact.</li>
<li>If \\(X\\) is reflexive, then \\(T\\) is compact iff \\(T\\) maps weakly convergent sequences to norm-convergent sequences.</li>
</ol>
</div>

<h3>Application to Fredholm Theory</h3>

<p>
Schauder's theorem is a crucial ingredient in Fredholm theory (Chapter 15).
For the equation \\((I - T)x = y\\) where \\(T\\) is compact, the Fredholm alternative states that either:
</p>
<ul>
<li>The equation has a unique solution for every \\(y\\), or</li>
<li>The homogeneous equation \\((I - T)x = 0\\) has nontrivial solutions, and \\((I - T)x = y\\) is solvable iff \\(y \\perp \\ker(I - T^*)\\).</li>
</ul>
<p>
The role of \\(T^*\\) here is essential, and Schauder's theorem ensures \\(T^*\\) is compact when \\(T\\) is.
</p>

<div class="example">
<strong>Example 14.19.</strong>
Consider the integral equation
\\[f(s) - \\lambda \\int_0^1 k(s,t) f(t)\\, dt = g(s),\\]
i.e., \\((I - \\lambda K)f = g\\) where \\(K\\) is a compact integral operator.
By Schauder, \\(K^*\\) is compact. The adjoint integral operator has kernel \\(k^*(s,t) = \\overline{k(t,s)}\\).
The Fredholm alternative tells us: if \\(1/\\lambda\\) is not an eigenvalue of \\(K\\), then a unique solution exists for every \\(g\\).
</div>

<div class="warning">
<strong>Historical note.</strong>
Schauder proved this theorem in 1930, building on earlier work of F. Riesz on compact operators.
The result was surprising because it shows that compactness, which is defined in terms of the image
of the unit ball (a property of the "forward" direction), automatically transfers to the adjoint
(the "backward" direction). This is a manifestation of the deep duality structure of Banach spaces.
</div>
`,
      visualizations: [
        {
          id: 'viz-ch14-schauder-duality',
          title: 'Schauder Duality: T Compact iff T* Compact',
          description: 'Visualize how compactness of T and T* are linked. When T compresses the unit ball, T* compresses the dual unit ball.',
          type: 'canvas',
          setup: function(container) {
            var viz = new VizEngine(container, { scale: 45, originX: 280, originY: 200 });

            viz.animate(function(t) {
              viz.clear();
              var ctx = viz.ctx;
              var w = viz.width;
              var h = viz.height;

              // Breathing animation
              var breath = 0.9 + 0.1 * Math.sin(t * 0.002);

              // Top: T: X -> Y
              var topY = h * 0.3;
              var leftX = w * 0.22;
              var rightX = w * 0.78;
              var rad = 50;

              // X unit ball
              ctx.strokeStyle = viz.colors.blue;
              ctx.lineWidth = 2;
              ctx.beginPath(); ctx.arc(leftX, topY, rad, 0, Math.PI * 2); ctx.stroke();
              viz.screenText('B_X', leftX, topY - rad - 12, viz.colors.blue, 12);

              // T(B_X) — compact image
              ctx.strokeStyle = viz.colors.teal;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.ellipse(rightX, topY, rad * 0.35 * breath, rad * 0.55 * breath, 0.3, 0, Math.PI * 2);
              ctx.stroke();
              ctx.fillStyle = viz.colors.teal + '15';
              ctx.fill();
              viz.screenText('T(B_X)', rightX, topY - rad * 0.6 - 15, viz.colors.teal, 12);
              viz.screenText('compact', rightX, topY - rad * 0.6 - 3, viz.colors.teal, 9);

              // Arrow T
              ctx.strokeStyle = viz.colors.white + '77';
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(leftX + rad + 10, topY);
              ctx.lineTo(rightX - rad * 0.4 - 10, topY);
              ctx.stroke();
              // arrowhead
              ctx.fillStyle = viz.colors.white + '77';
              ctx.beginPath();
              ctx.moveTo(rightX - rad * 0.4 - 10, topY);
              ctx.lineTo(rightX - rad * 0.4 - 20, topY - 5);
              ctx.lineTo(rightX - rad * 0.4 - 20, topY + 5);
              ctx.closePath(); ctx.fill();
              viz.screenText('T', (leftX + rightX) / 2, topY - 15, viz.colors.white, 14);

              // Double arrow (iff)
              var midY = h * 0.5;
              viz.screenText('Schauder: T compact  <=>  T* compact', w / 2, midY, viz.colors.yellow, 13);

              // Bottom: T*: Y* -> X*
              var botY = h * 0.7;

              // Y* unit ball
              ctx.strokeStyle = viz.colors.orange;
              ctx.lineWidth = 2;
              ctx.beginPath(); ctx.arc(rightX, botY, rad, 0, Math.PI * 2); ctx.stroke();
              viz.screenText('B_{Y*}', rightX, botY - rad - 12, viz.colors.orange, 12);

              // T*(B_{Y*}) — compact image
              ctx.strokeStyle = viz.colors.pink;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.ellipse(leftX, botY, rad * 0.4 * breath, rad * 0.5 * breath, -0.4, 0, Math.PI * 2);
              ctx.stroke();
              ctx.fillStyle = viz.colors.pink + '15';
              ctx.fill();
              viz.screenText('T*(B_{Y*})', leftX, botY - rad * 0.55 - 15, viz.colors.pink, 12);
              viz.screenText('compact', leftX, botY - rad * 0.55 - 3, viz.colors.pink, 9);

              // Arrow T*
              ctx.strokeStyle = viz.colors.white + '77';
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(rightX - rad - 10, botY);
              ctx.lineTo(leftX + rad * 0.45 + 10, botY);
              ctx.stroke();
              ctx.fillStyle = viz.colors.white + '77';
              ctx.beginPath();
              ctx.moveTo(leftX + rad * 0.45 + 10, botY);
              ctx.lineTo(leftX + rad * 0.45 + 20, botY - 5);
              ctx.lineTo(leftX + rad * 0.45 + 20, botY + 5);
              ctx.closePath(); ctx.fill();
              viz.screenText('T*', (leftX + rightX) / 2, botY - 15, viz.colors.white, 14);

              viz.screenText('X', leftX - rad - 15, topY, viz.colors.blue, 11);
              viz.screenText('Y', rightX + rad + 15, topY, viz.colors.teal, 11);
              viz.screenText('Y*', rightX + rad + 15, botY, viz.colors.orange, 11);
              viz.screenText('X*', leftX - rad - 15, botY, viz.colors.pink, 11);
            });
          }
        },
        {
          id: 'viz-ch14-fredholm-alternative',
          title: 'Fredholm Alternative Preview',
          description: 'For T compact, the equation (I - T)x = y either has a unique solution for all y, or the kernel of I - T and I - T* have the same finite dimension. Explore this dichotomy.',
          type: 'canvas',
          setup: function(container) {
            var viz = new VizEngine(container, { scale: 40, originX: 280, originY: 200 });
            var state = { lambda: 0.5 };

            var controls = document.createElement('div');
            controls.className = 'viz-controls';
            container.appendChild(controls);
            VizEngine.createSlider(controls, 'lambda', 0.1, 3.0, 0.5, 0.1, function(v) { state.lambda = v; });

            // Eigenvalues of a "compact operator": 1, 1/2, 1/3, 1/4, ...
            var eigenvalues = [];
            for (var n = 1; n <= 20; n++) {
              eigenvalues.push(1 / n);
            }

            viz.animate(function() {
              viz.clear();
              var ctx = viz.ctx;
              var w = viz.width;
              var h = viz.height;
              var lam = state.lambda;

              viz.screenText('Eigenvalues of compact T on number line', w / 2, 20, viz.colors.white, 13);
              viz.screenText('lambda = ' + lam.toFixed(2) + ': solving (lambda I - T)x = y', w / 2, 38, viz.colors.text, 11);

              // Number line
              var lineY = h * 0.45;
              var lineLeft = 60;
              var lineRight = w - 60;
              var lineLen = lineRight - lineLeft;
              var maxVal = 1.5;

              ctx.strokeStyle = viz.colors.axis;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(lineLeft, lineY);
              ctx.lineTo(lineRight, lineY);
              ctx.stroke();

              // tick marks
              for (var v = 0; v <= maxVal; v += 0.5) {
                var tx = lineLeft + (v / maxVal) * lineLen;
                ctx.beginPath();
                ctx.moveTo(tx, lineY - 5);
                ctx.lineTo(tx, lineY + 5);
                ctx.stroke();
                viz.screenText(v.toFixed(1), tx, lineY + 18, viz.colors.text, 10);
              }

              // Eigenvalues
              for (var i = 0; i < eigenvalues.length; i++) {
                var ev = eigenvalues[i];
                if (ev > maxVal) continue;
                var ex = lineLeft + (ev / maxVal) * lineLen;
                var isResonance = Math.abs(lam - ev) < 0.05;

                ctx.fillStyle = isResonance ? viz.colors.red : viz.colors.teal;
                ctx.beginPath();
                ctx.arc(ex, lineY, isResonance ? 7 : 4, 0, Math.PI * 2);
                ctx.fill();

                if (i < 5) {
                  viz.screenText('1/' + (i + 1), ex, lineY - 15, viz.colors.teal, 9);
                }
              }

              // 0 accumulation point
              var zeroX = lineLeft;
              ctx.fillStyle = viz.colors.yellow + '55';
              ctx.beginPath();
              ctx.arc(zeroX, lineY, 12, 0, Math.PI * 2);
              ctx.fill();
              viz.screenText('0 (accumulation)', zeroX + 5, lineY - 25, viz.colors.yellow, 9);

              // Lambda marker
              var lamX = lineLeft + (lam / maxVal) * lineLen;
              ctx.strokeStyle = viz.colors.purple;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(lamX, lineY - 30);
              ctx.lineTo(lamX, lineY + 30);
              ctx.stroke();
              viz.screenText('lambda', lamX, lineY - 35, viz.colors.purple, 12);

              // Determine case
              var isEigenvalue = false;
              for (var j = 0; j < eigenvalues.length; j++) {
                if (Math.abs(lam - eigenvalues[j]) < 0.05) { isEigenvalue = true; break; }
              }

              var infoY = h * 0.65;
              if (isEigenvalue) {
                viz.screenText('lambda IS an eigenvalue of T', w / 2, infoY, viz.colors.red, 14);
                viz.screenText('ker(lambda I - T) is nontrivial (finite-dimensional)', w / 2, infoY + 20, viz.colors.red, 11);
                viz.screenText('Solvability: (lambda I - T)x = y iff y in range(lambda I - T)', w / 2, infoY + 38, viz.colors.orange, 11);
                viz.screenText('dim ker(lambda I - T) = dim ker(lambda I - T*)', w / 2, infoY + 54, viz.colors.pink, 11);
              } else {
                viz.screenText('lambda is NOT an eigenvalue of T', w / 2, infoY, viz.colors.green, 14);
                viz.screenText('(lambda I - T) is bijective: unique solution for all y', w / 2, infoY + 20, viz.colors.green, 11);
                viz.screenText('(lambda I - T)^{-1} exists and is bounded', w / 2, infoY + 38, viz.colors.teal, 11);
              }

              viz.screenText('Compact: eigenvalues accumulate only at 0', w / 2, h - 12, viz.colors.text, 10);
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch14-ex16',
          type: 'proof',
          difficulty: 3,
          question: 'Give a direct proof that T compact implies T* compact when T is an operator on a Hilbert space H. (Do not use the Arzela-Ascoli theorem.)',
          hint: 'Use the identity ||T*g||^2 = <TT*g, g> and the fact that TT* is compact.',
          solution: 'If T is compact, then TT* is compact (product of compact and bounded). Let (g_n) be bounded in H. Since TT* is compact, there is a subsequence (g_{n_k}) with TT*g_{n_k} convergent. Now ||T*g_{n_k} - T*g_{n_j}||^2 = <T*(g_{n_k}-g_{n_j}), T*(g_{n_k}-g_{n_j})> = <TT*(g_{n_k}-g_{n_j}), g_{n_k}-g_{n_j}> <= ||TT*(g_{n_k}-g_{n_j})|| * ||g_{n_k}-g_{n_j}|| <= 2M * ||TT*(g_{n_k}-g_{n_j})|| -> 0. So (T*g_{n_k}) is Cauchy, hence convergent.'
        },
        {
          id: 'ch14-ex17',
          type: 'proof',
          difficulty: 3,
          question: 'Let K: L^2[0,1] -> L^2[0,1] be the integral operator with kernel k(s,t). Show that the adjoint K* has kernel k*(s,t) = conjugate of k(t,s), and verify K* is compact.',
          hint: 'Compute <Kf, g> using Fubini and identify the kernel of K*. Compactness follows from Schauder.',
          solution: '<Kf,g> = integral integral k(s,t) f(t) conj(g(s)) dt ds = integral f(t) (integral conj(k(s,t)) conj(g(s)) ds)^conj dt... More directly: <Kf,g> = integral_s (integral_t k(s,t)f(t)dt) conj(g(s)) ds = integral_t f(t) (integral_s conj(k(s,t) g(s)) ds) ... = integral_t f(t) conj(integral_s conj(k(s,t)) g(s) ds) dt so (K*g)(t) = integral conj(k(s,t)) g(s) ds, i.e., kernel is k*(s,t) = conj(k(t,s)). Since k is continuous, so is k*, hence K* is compact by the Hilbert-Schmidt theorem (or by Schauder).'
        },
        {
          id: 'ch14-ex18',
          type: 'truefalse',
          difficulty: 2,
          question: 'True or False: If T is a compact operator on a Banach space X and lambda != 0, then ker(lambda I - T) is finite-dimensional.',
          answer: true,
          explanation: 'True. If ker(lambda I - T) were infinite-dimensional, the restriction of T to this kernel would be T = lambda I, making the identity compact on an infinite-dimensional space, which is impossible.'
        },
        {
          id: 'ch14-ex19',
          type: 'proof',
          difficulty: 2,
          question: 'Show that if T is compact on X and lambda != 0, then range(lambda I - T) is closed.',
          hint: 'This is a classical result. Use the fact that T restricted to a complement of the kernel behaves well. You may assume X is a Banach space.',
          solution: 'Let M = ker(lambda I - T), which is finite-dimensional, so it has a closed complement X = M + Z (topological direct sum). On Z, lambda I - T is injective. If it were not bounded below on Z, there would be z_n in Z with ||z_n||=1 and ||(lambda I - T)z_n|| -> 0, i.e., lambda z_n - Tz_n -> 0. Since T is compact, Tz_{n_k} -> y, so z_{n_k} -> y/lambda. But Z is closed, so y/lambda in Z, and (lambda I - T)(y/lambda) = 0 means y/lambda in M, contradiction since M intersect Z = {0} and ||y/lambda|| = 1. So lambda I - T is bounded below on Z, which implies its range is closed.'
        }
      ]
    }

  ]
});
