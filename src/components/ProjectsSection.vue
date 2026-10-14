<template>
  <section id="projects" class="section-padding">
    <div class="container">
      <div class="section-header text-center mb-5">
        <span class="section-tag">Perjalanan Saya</span>
        <h2 class="section-title">Learning <span class="gradient-text">Journey</span></h2>
        <p class="section-subtitle">
          Saya masih dalam tahap belajar — ini hal-hal yang sedang dan sudah saya pelajari 🌱
        </p>
      </div>

      <!-- Quote / Motivasi -->
      <div class="quote-card mb-5">
        <i class="bi bi-quote quote-icon"></i>
        <p class="quote-text">
          "Every expert was once a beginner. Saya bangga dengan proses belajar ini
          dan terus konsisten setiap harinya."
        </p>
        <span class="quote-author">— Prinsip saya</span>
      </div>

      <!-- What I'm Learning -->
      <h4 class="subsection-title mb-4">
        <i class="bi bi-book-half me-2"></i>Yang Sedang Saya Pelajari
      </h4>
      <div class="row g-4 mb-5">
        <div
          class="col-lg-4 col-md-6"
          v-for="item in learning"
          :key="item.title"
        >
          <div class="learn-card h-100">
            <div class="learn-card-top" :style="{ background: item.gradient }">
              <i :class="item.icon + ' learn-icon devicon'"></i>
            </div>
            <div class="learn-card-body">
              <div class="d-flex align-items-center gap-2 mb-2">
                <h5 class="learn-title mb-0">{{ item.title }}</h5>
                <span class="learn-badge" :class="item.statusClass">{{ item.status }}</span>
              </div>
              <p class="learn-desc">{{ item.desc }}</p>
              <div class="learn-progress mt-3">
                <div class="d-flex justify-content-between mb-1">
                  <span class="learn-progress-label">Progress belajar</span>
                  <span class="learn-progress-val">{{ item.percent }}%</span>
                </div>
                <div class="progress learn-bar">
                  <div
                    class="progress-bar"
                    :style="{ width: item.percent + '%', background: item.color }"
                    role="progressbar"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const learning = [
  {
    title: 'HTML5',
    desc: 'Belajar membuat tampilan web yang rapi dan responsive. Sudah bisa bikin layout, styling, dan animasi dasar.',
    icon: 'devicon-html5-plain',
    gradient: 'linear-gradient(135deg, #e44d26, #f16529)',
    color: 'linear-gradient(90deg, #e44d26, #f16529)',
    percent: 80,
    status: 'Aktif',
    statusClass: 'badge-aktif',
  },
  {
    title: 'CSS3',
    desc: 'Mempelajari styling, flexbox, grid, animasi, dan membuat tampilan yang menarik dan responsive.',
    icon: 'devicon-css3-plain',
    gradient: 'linear-gradient(135deg, #1572b6, #33a9dc)',
    color: 'linear-gradient(90deg, #1572b6, #33a9dc)',
    percent: 75,
    status: 'Aktif',
    statusClass: 'badge-aktif',
  },
  {
    title: 'JavaScript',
    desc: 'Mempelajari logika pemrograman di browser, DOM manipulation, event handling, dan dasar-dasar ES6+.',
    icon: 'devicon-javascript-plain',
    gradient: 'linear-gradient(135deg, #f7df1e, #e8c900)',
    color: 'linear-gradient(90deg, #f7df1e, #e8c900)',
    percent: 60,
    status: 'Aktif',
    statusClass: 'badge-aktif',
  },
  {
    title: 'Python',
    desc: 'Belajar Python untuk scripting, logika pemrograman, dan pengolahan data sederhana.',
    icon: 'devicon-python-plain',
    gradient: 'linear-gradient(135deg, #3776ab, #ffd343)',
    color: 'linear-gradient(90deg, #3776ab, #ffd343)',
    percent: 65,
    status: 'Aktif',
    statusClass: 'badge-aktif',
  },
  {
    title: 'PHP',
    desc: 'Belajar PHP untuk backend web — mulai dari syntax dasar, form handling, sampai koneksi database.',
    icon: 'devicon-php-plain',
    gradient: 'linear-gradient(135deg, #777bb4, #4f5b93)',
    color: 'linear-gradient(90deg, #777bb4, #4f5b93)',
    percent: 55,
    status: 'Aktif',
    statusClass: 'badge-aktif',
  },
  {
    title: 'Vue.js',
    desc: 'Mulai belajar Vue 3 sebagai framework JavaScript. Sedang memahami component, reactivity, dan Composition API.',
    icon: 'devicon-vuejs-plain',
    gradient: 'linear-gradient(135deg, #42b883, #35495e)',
    color: 'linear-gradient(90deg, #42b883, #35495e)',
    percent: 40,
    status: 'Baru Mulai',
    statusClass: 'badge-baru',
  },
]

</script>

<style scoped>
/* Quote */
.quote-card {
  background: linear-gradient(135deg, rgba(16, 185, 129,0.08), rgba(6, 182, 212,0.08));
  border: 1px solid rgba(16, 185, 129,0.25);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius-lg);
  padding: 2rem 2.5rem;
  position: relative;
}

.quote-icon {
  font-size: 3rem;
  color: rgba(16, 185, 129,0.2);
  position: absolute;
  top: 10px;
  left: 20px;
  line-height: 1;
}

.quote-text {
  font-size: 1.05rem;
  color: var(--text-primary);
  font-style: italic;
  font-weight: 500;
  margin: 0 0 0.5rem;
  padding-left: 1rem;
}

.quote-author {
  font-size: 0.85rem;
  color: var(--primary-dark);
  font-weight: 600;
  padding-left: 1rem;
}

/* Subsection Title */
.subsection-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
}

.subsection-title i { color: var(--primary); }

/* Learn Card */
.learn-card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition);
  box-shadow: 0 2px 12px rgba(16, 185, 129,0.07);
}

.learn-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(16, 185, 129,0.15);
}

.learn-card-top {
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.learn-icon {
  font-size: 3.2rem;
  color: white;
  transition: var(--transition);
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.15));
}

.devicon-javascript-plain { color: #1a1a1a; }

.learn-card-body { padding: 1.3rem; }

.learn-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); }

.learn-badge {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15rem 0.6rem;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-aktif {
  background: rgba(16, 185, 129,0.12);
  color: var(--primary-dark);
  border: 1px solid rgba(16, 185, 129,0.3);
}

.badge-baru {
  background: rgba(167,139,250,0.12);
  color: #7c3aed;
  border: 1px solid rgba(167,139,250,0.3);
}

.learn-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.learn-bar {
  height: 6px;
  background: rgba(16, 185, 129,0.1);
  border-radius: 3px;
  overflow: hidden;
}

.learn-bar .progress-bar { border-radius: 3px; }

.learn-progress-label { font-size: 0.78rem; color: var(--text-muted); }
.learn-progress-val   { font-size: 0.78rem; color: var(--primary-dark); font-weight: 700; font-family: 'Fira Code', monospace; }

/* Achievements */
.ach-card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.6rem 1.2rem;
  transition: var(--transition);
  box-shadow: 0 2px 8px rgba(16, 185, 129,0.06);
}

.ach-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(16, 185, 129,0.14);
}

.ach-icon-wrap {
  width: 52px; height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: white;
  margin: 0 auto 0.9rem;
}

.ach-title { font-size: 0.92rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.3rem; }
.ach-desc  { font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; margin: 0; }

@media (max-width: 768px) {
  .quote-card { padding: 1.5rem; }
}
</style>
