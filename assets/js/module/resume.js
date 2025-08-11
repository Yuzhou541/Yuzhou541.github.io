document.write(`
  <div id="resume">
    <button id="toggle-btn">
      <span><i class="fas fa-sun"></i></span>
    </button>
    <div id="clock">GMT+8 00:00</div>
    <div class="container">
      <div class="resume-heading">Yuzhou Zhu</div>
      <p class="contact-info">
        Dalian, Liaoning 116024<br />
        <span class="email">Email 1: 1730694701@mail.dlut.edu.cn</span>
        <span class="email">Email 2: Yuzhou541@outlook.com</span><br />
        Tel: +86 15140421826
        &nbsp;|&nbsp;
        <!-- (1) Add resume link after Tel -->
        <a class="download-link" href="assets/pdf/Academic_CV_Template.pdf" target="_blank" rel="noopener">Resume (PDF)</a>
      </p>

      <div class="section">
        <h2>Education</h2>
        <div class="subheading">
          <span class="subheading-title">Dalian University of Technology</span>
          <span>Expected June 2027</span>
        </div>
        <div class="subsubheading">Bachelor of Science in Mathematics</div>

        <!-- (2) Collapsible GPA + transcript -->
        <details class="collapsible" style="margin-top:8px;">
          <summary style="cursor:pointer;"><em>Click to expand</em></summary>
          <div style="margin-top:8px;">
            <p><strong>GPA:</strong> 93.1/100</p>
            <p>
              Transcript (PDF):
              <a class="download-link" href="assets/pdf/GPA.pdf" target="_blank" rel="noopener">transcript.pdf</a>
            </p>
          </div>
        </details>
      </div>
      
      <div class="section">
        <h2>Honors and Awards</h2>
        <ul>
          <li>
            <div class="honor-title">National Scholarship of China (2024)</div>
            <details class="collapsible" style="margin-top:6px;">
              <summary style="cursor:pointer;"><em>Click to expand</em></summary>
              <div class="gallery" style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;">
                <a href="assets/images/guojiang1.jpg" target="_blank" rel="noopener">
                  <img src="assets/images/guojiang1.jpg" alt="National Scholarship 2024 — 1" style="height:80px; border-radius:6px;">
                </a>
                <a href="assets/images/guojiang2.jpg" target="_blank" rel="noopener">
                  <img src="assets/images/guojiang2.jpg" alt="National Scholarship 2024 — 2" style="height:80px; border-radius:6px;">
                </a>
                <a href="assets/images/guojiang3.jpg" target="_blank" rel="noopener">
                  <img src="assets/images/guojiang3.jpg" alt="National Scholarship 2024 — 3" style="height:80px; border-radius:6px;">
                </a>
              </div>
            </details>
          </li>

          <li>
            <div class="honor-title">Science and Technology Innovation Scholarship (2024)</div>
            <details class="collapsible" style="margin-top:6px;">
              <summary style="cursor:pointer;"><em>Click to expand</em></summary>
              <div class="gallery" style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;">
                <a href="assets/images/scie1.jpg" target="_blank" rel="noopener">
                  <img src="assets/images/scie1.jpg" alt="STI Scholarship 2024 — 1" style="height:80px; border-radius:6px;">
                </a>
                <a href="assets/images/scie2.jpg" target="_blank" rel="noopener">
                  <img src="assets/images/scie2.jpg" alt="STI Scholarship 2024 — 2" style="height:80px; border-radius:6px;">
                </a>
              </div>
            </details>
          </li>

          <li>
            <div class="honor-title">Academic Excellence Scholarship (2024)</div>
            <details class="collapsible" style="margin-top:6px;">
              <summary style="cursor:pointer;"><em>Click to expand</em></summary>
              <div style="margin-top:8px;">
                <a href="assets/pdf/GPA.pdf" target="_blank" rel="noopener">View certificate (PDF)</a>
              </div>
            </details>
          </li>

          <li>
            <div class="honor-title">Provincial First Prize & National Second Prize, National Undergraduate Mathematics Competition (CMC) — Professional Group (2023 & 2024)</div>
            <details class="collapsible" style="margin-top:6px;">
              <summary style="cursor:pointer;"><em>Click to expand</em></summary>
              <div class="gallery" style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;">
                <a href="assets/images/ma1.jpg" target="_blank" rel="noopener">
                  <img src="assets/images/ma1.jpg" alt="CMC 2023 — 1" style="height:80px; border-radius:6px;">
                </a>
                <a href="assets/images/ma2.jpg" target="_blank" rel="noopener">
                  <img src="assets/images/ma2.jpg" alt="CMC 2023 — 2" style="height:80px; border-radius:6px;">
                </a>
                <a href="assets/images/ma3.jpg" target="_blank" rel="noopener">
                  <img src="assets/images/ma3.jpg" alt="CMC 2024 — 1" style="height:80px; border-radius:6px;">
                </a>
              </div>
            </details>
          </li>

          <li>
            <div class="honor-title">Honorable Mention, Mathematical Contest in Modeling&reg; (MCM), Problem C, 2025</div>
            <details class="collapsible" style="margin-top:6px;">
              <summary style="cursor:pointer;"><em>Click to expand</em></summary>
              <div style="margin-top:8px;">
                <a href="assets/pdf/mcm.pdf" target="_blank" rel="noopener">View certificate (PDF)</a>
              </div>
            </details>
          </li>
        </ul>
      </div>

      
      <div class="section">
        <h2>Work Experience</h2>
        <div class="subheading">
          <span class="subheading-title">ICPC Team Captain / Vice President, DP·AC Algorithm Competition Association </span>
          <span>September 2024 – Present</span>
        </div>
        <div class="subsubheading">"Algorithms in C++" and "Basic Data Structure and Algorithm in Java"</div>
        <p>
          Repositories:
          <a class="download-link" href="https://github.com/Yuzhou541/Algorithm_competition" target="_blank" rel="noopener">Algorithm_competition (C++)</a>
          &nbsp;|&nbsp;
          <a class="download-link" href="https://github.com/Yuzhou541/Data-Structure-and-Algorithms-Dalian-University-of-Technology-" target="_blank" rel="noopener">Data-Structure-and-Algorithms (Java)</a>
        </p>
        <p>
          My "book" for school ICPC competition teams (PDF):
          <a class="download-link" href="assets/pdf/algorithm(First Edition)Always.pdf" target="_blank" rel="noopener">Algorithm (First Edition)</a>
        </p>

        <!-- (4) Collapsible with multiple images -->
        <details class="collapsible" style="margin-top:8px;">
          <summary style="cursor:pointer;"><em>Click to expand</em></summary>
          <div class="gallery" style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;">
            <a href="assets/images/work1.jpg" target="_blank" rel="noopener"><img src="assets/images/work1.jpg" alt="work-1" style="height:80px; border-radius:6px;"></a>
            <a href="assets/images/work2.jpg" target="_blank" rel="noopener"><img src="assets/images/work2.jpg" alt="work-2" style="height:80px; border-radius:6px;"></a>
            <a href="assets/images/work3.jpg" target="_blank" rel="noopener"><img src="assets/images/work3.jpg" alt="work-3" style="height:80px; border-radius:6px;"></a>
          </div>
        </details>
      </div>
      
      <div class="section">
        <h2>Research Projects</h2>

        <div class="subheading">
          <span class="subheading-title">SAKR: Enhancing Retrieval-Augmented Generation via Streaming Algorithm and K-Means Clustering</span>
          <span>2024 – 2025</span>
        </div>
        <div class="subsubheading">Accepted to ICIC 2025 (accepted on 2025-06-26). Advisor: Prof. David P. Woodruff (CMU)</div>
        <ul>
          <li>Streaming RAG with heavy-hitter filtering + online k-means; reproducible code and ablations.</li>
          <li>Links:
            <a href="https://arxiv.org/abs/2407.21300" target="_blank" rel="noopener">arXiv:2407.21300</a> |
            <a href="https://github.com/Yuzhou541/SAKR" target="_blank" rel="noopener">GitHub</a>
            <!-- (5) Extra PDF for acceptance/camera-ready -->
            | <a href="assets/pdf/2509_Invitation Letter.pdf" target="_blank" rel="noopener">Invitation Letter</a>
          </li>
        </ul>
        
        <div class="subheading">
          <span class="subheading-title">SinBasis Networks: Matrix-Equivalent Feature Extraction for Wave-Like Optical Spectrograms</span>
          <span>2025 – Present</span>
        </div>
        <div class="subsubheading">Under review (AAAI 2026)</div>
        <ul>
          <li>Sinusoidal-basis reparameterization to inject periodic priors with matrix-equivalent forms.</li>
          <li>Links:
            <a href="https://arxiv.org/abs/2505.06275" target="_blank" rel="noopener">arXiv:2505.06275</a> |
            <a href="https://github.com/Yuzhou541/SinBasis" target="_blank" rel="noopener">GitHub</a>
          </li>
        </ul>
        
        <div class="subheading">
          <span class="subheading-title">From Static to Dynamic: A Streaming RAG Approach to Real-time Knowledge Base</span>
          <span>2025 – Present</span>
        </div>
        <div class="subsubheading">Under review (AAAI 2026)</div>
        <ul>
          <li>Real-time KB updates with bounded state-change complexity; multi-vector screening + online clustering.</li>
          <li>Link:
            <a href="https://arxiv.org/abs/2508.05662" target="_blank" rel="noopener">arXiv:2508.05662</a> |
            <a href="https://github.com/Yuzhou541/Streaming_RAG" target="_blank" rel="noopener">GitHub</a>
          </li>
        </ul>
        
        <div class="subheading">
          <span class="subheading-title">Functional-Basis Neural Layers: Learning Adaptive Weight Functions for Universal Approximation</span>
          <span>2025 – Present</span>
        </div>
        <div class="subsubheading">In preparation (Target: ICLR 2026)</div>
        <ul>
          <li>Trainable basis-weight layers; functional Stone–Weierstrass style proof and constructive case studies.</li>
          <li>Link:
            <a href="https://github.com/Yuzhou541/functional_basis" target="_blank" rel="noopener">GitHub</a>
          </li>
        </ul>
      </div>
      
      <div class="section">
        <h2>Publications</h2>
        <ul>
          <li><strong>Yuzhou Zhu</strong>, et al. SAKR: Enhancing Retrieval-Augmented Generation via Streaming Algorithm and K-Means Clustering. In <em>ICIC 2025</em>. (Accepted 2025-06-26).
            <a href="https://arxiv.org/abs/2407.21300" target="_blank" rel="noopener">arXiv</a> |
            <a href="https://github.com/Yuzhou541/SAKR" target="_blank" rel="noopener">code</a>
            <!-- (5) Publications: add the PDF link on the first item -->
            | <a href="assets/pdf/2509_Invitation Letter.pdf" target="_blank" rel="noopener">Invitation Letter</a>
          </li>
          <li><strong>Yuzhou Zhu</strong>, et al. SinBasis Networks: Matrix-Equivalent Feature Extraction for Wave-Like Optical Spectrograms. Under review at <em>AAAI 2026</em>.
            <a href="https://arxiv.org/abs/2505.06275" target="_blank" rel="noopener">arXiv</a> |
            <a href="https://github.com/Yuzhou541/SinBasis" target="_blank" rel="noopener">code</a>
          </li>
          <li><strong>Yuzhou Zhu</strong>, et al. From Static to Dynamic: A Streaming RAG Approach to Real-time Knowledge Base. Under review at <em>AAAI 2026</em>.
            <a href="https://arxiv.org/abs/2508.05662" target="_blank" rel="noopener">arXiv</a> |
            <a href="https://github.com/Yuzhou541/Streaming_RAG" target="_blank" rel="noopener">code</a>
          </li>
          <li><strong>Yuzhou Zhu</strong>, et al. Functional-Basis Neural Layers: Learning Adaptive Weight Functions for Universal Approximation. In preparation (Target: <em>ICLR 2026</em>).
            <a href="https://github.com/Yuzhou541/functional_basis" target="_blank" rel="noopener">code</a>
          </li>
        </ul>
      </div>

      <!-- (6) New section: Industry Internship & Tech Exchange -->
      <div class="section">
        <h2>Industry Internship & Tech Exchange</h2>
        <div class="subheading">
          <span class="subheading-title"> 6.30 Google IO Extended(Hangzhou)</span>
          <span>June 2024</span>
        </div>
        <div class="subsubheading">Attended GDG Extended (Hangzhou) in June 2024</div>
        <details class="collapsible" style="margin-top:8px;">
          <summary style="cursor:pointer;"><em>Click to expand</em></summary>
          <div class="gallery" style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;">
            <a href="assets/images/go1.jpg" target="_blank" rel="noopener"><img src="assets/images/go1.jpg" alt="gdc-1" style="height:80px; border-radius:6px;"></a>
            <a href="assets/images/go2.jpg" target="_blank" rel="noopener"><img src="assets/images/go2.jpg" alt="gdc-2" style="height:80px; border-radius:6px;"></a>
            <a href="assets/images/go3.jpg" target="_blank" rel="noopener"><img src="assets/images/go3.jpg" alt="gdc-3" style="height:80px; border-radius:6px;"></a>
            <a href="assets/images/go4.jpg" target="_blank" rel="noopener"><img src="assets/images/go4.jpg" alt="gdc-4" style="height:80px; border-radius:6px;"></a>
            <a href="assets/images/go5.jpg" target="_blank" rel="noopener"><img src="assets/images/go5.jpg" alt="gdc-5" style="height:80px; border-radius:6px;"></a>
            <a href="assets/images/go6.jpg" target="_blank" rel="noopener"><img src="assets/images/go6.jpg" alt="gdc-6" style="height:80px; border-radius:6px;"></a>
            <a href="assets/images/go7.jpg" target="_blank" rel="noopener"><img src="assets/images/go7.jpg" alt="gdc-7" style="height:80px; border-radius:6px;"></a>
          </div>
        </details>
      </div>

      <!-- (7) New section: Summer Research -->
      <div class="section">
        <h2>Summer Research</h2>
        <div class="subheading">
          <span class="subheading-title">Top-notch Innovative Talent Training Program (Shanghai Jiao Tong University)</span>
          <span>July 2024 – August 2024</span>
        </div>
        <div class="subsubheading">The first ICIC paper is an outcome of this project; Advisor: David Woodruff</div>
        <details class="collapsible" style="margin-top:8px;">
          <summary style="cursor:pointer;"><em>Click to expand</em></summary>
          <div class="gallery" style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;">
            <a href="assets/images/s1.jpg" target="_blank" rel="noopener"><img src="assets/images/s1.jpg" alt="sjtu-1" style="height:80px; border-radius:6px;"></a>
            <a href="assets/images/s2.jpg" target="_blank" rel="noopener"><img src="assets/images/s2.jpg" alt="sjtu-2" style="height:80px; border-radius:6px;"></a>
            <a href="assets/images/s3.jpg" target="_blank" rel="noopener"><img src="assets/images/s3.jpg" alt="sjtu-3" style="height:80px; border-radius:6px;"></a>
            <a href="assets/images/s4.jpg" target="_blank" rel="noopener"><img src="assets/images/s4.jpg" alt="sjtu-4" style="height:80px; border-radius:6px;"></a>
          </div>
        </details>
      </div>
      
      <div class="section">
        <h2>Additional Skills/Information</h2>
        <ul>
          <li><strong>Computer Skills:</strong> Python, C, C++, Java, Matlab, LaTeX</li>
          <li><strong>Languages:</strong> Chinese (Native), English (Fluent — TOEFL: )</li>
          <li><strong>Hobbies:</strong> Climbing, swimming, singing, Table Tennis</li>
        </ul>
      </div>
    </div>
    
    <a href="#" class="back-btn" id="resume-back-btn">
      <i class="fas fa-arrow-left"></i>
    </a>
  </div>
`);
