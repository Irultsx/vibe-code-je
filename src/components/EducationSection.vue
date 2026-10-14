<template>
  <section id="education" class="section-padding section-alt">
    <div class="container">
      <div class="section-header text-center mb-5">
        <span class="section-tag">Pendidikan</span>
        <h2 class="section-title">Education <span class="gradient-text">Journey</span></h2>
        <p class="section-subtitle">Perjalanan pendidikan saya</p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="timeline">
            <div
              class="timeline-item"
              v-for="edu in education"
              :key="edu.school"
              :class="{ active: edu.current }"
            >
              <div class="timeline-dot">
                <i :class="edu.icon"></i>
              </div>
              <div class="timeline-content">
                <div class="timeline-period">{{ edu.period }}</div>
                <h5 class="timeline-school">{{ edu.school }}</h5>
                <p class="timeline-major">{{ edu.major }}</p>
                <p class="timeline-desc">{{ edu.desc }}</p>
                <span v-if="edu.current" class="timeline-badge">
                  <i class="bi bi-circle-fill me-1 blink"></i>Sedang Berjalan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const education = [
  {
    period: '2025 — Sekarang',
    school: 'Politeknik Negeri Samarinda (Polnes)',
    major: 'D4 Teknologi Informasi',
    desc: 'Mempelajari dasar-dasar dan praktik teknologi informasi mulai dari pemrograman, basis data, jaringan, hingga pengembangan aplikasi web. Aktif mengikuti kegiatan kemahasiswaan dan terus mengasah skill coding.',
    icon: 'bi bi-mortarboard-fill',
    current: true,
  },
  {
    period: '2022 — 2025',
    school: 'SMA Budi Luhur Samarinda',
    major: 'IPA',
    desc: 'Menyelesaikan pendidikan SMA dengan penuh semangat. Di sinilah awal ketertarikan saya terhadap dunia komputer dan teknologi mulai tumbuh dan berkembang.',
    icon: 'bi bi-building-fill',
    current: false,
  },
]
</script>

<style scoped>
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 18px; top: 0; bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary), var(--secondary), transparent);
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 2.5rem;
}
.timeline-item:last-child { margin-bottom: 0; }

.timeline-dot {
  position: absolute;
  left: -8px; top: 0;
  width: 36px; height: 36px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 0.95rem;
  transition: var(--transition);
}

.timeline-item.active .timeline-dot {
  border-color: var(--primary);
  color: var(--primary-dark);
  background: rgba(16, 185, 129,.08);
  box-shadow: 0 0 0 4px rgba(16, 185, 129,.15);
}

.timeline-content {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1.4rem 1.6rem;
  transition: var(--transition);
  box-shadow: 0 2px 8px rgba(16, 185, 129,.06);
}

.timeline-item.active .timeline-content {
  border-color: rgba(16, 185, 129,.3);
  box-shadow: 0 4px 20px rgba(16, 185, 129,.12);
}

.timeline-content:hover {
  border-color: var(--border-hover);
  transform: translateX(4px);
}

.timeline-period {
  font-size: 0.78rem;
  color: var(--primary-dark);
  font-weight: 600;
  font-family: 'Fira Code', monospace;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.timeline-school { font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.2rem; }
.timeline-major  { font-size: 0.9rem; color: var(--primary); font-weight: 500; margin-bottom: 0.5rem; }
.timeline-desc   { font-size: 0.87rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 0.6rem; }

.timeline-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(16, 185, 129,.1);
  color: var(--primary-dark);
  border: 1px solid rgba(16, 185, 129,.3);
  padding: 0.25rem 0.8rem;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 600;
}

.blink {
  font-size: 0.5rem;
  animation: blink 1.2s ease infinite;
}

@media (max-width: 768px) {
  .timeline { padding-left: 1.5rem; }
  .timeline-item { padding-left: 2rem; }
}
</style>
