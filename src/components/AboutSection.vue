<template>
  <section id="about" class="section-padding">
    <div class="container">
      <div class="section-header text-center mb-5">
        <span class="section-tag">Tentang Saya</span>
        <h2 class="section-title">Siapa <span class="gradient-text">Saya?</span></h2>
        <p class="section-subtitle">Kenalan dulu yuk!</p>
      </div>

      <div class="row align-items-center g-5">
        <!-- Profile Card -->
        <div class="col-lg-5 text-center">
          <div class="profile-card">
            <div class="profile-card-top">
              <h4 class="profile-name">{{ name }}</h4>
              <p class="profile-role">
                <i class="bi bi-code-slash me-1"></i>Full Stack Developer in Progress
              </p>
            </div>
            <div class="profile-divider"></div>
            <div class="profile-tags">
              <span class="profile-tag">
                <i class="bi bi-lightning-charge-fill me-1"></i>Tech Enthusiast
              </span>
              <span class="profile-tag">
                <i class="bi bi-mortarboard-fill me-1"></i>Mahasiswa TI
              </span>
              <span class="profile-tag">
                <i class="bi bi-geo-alt-fill me-1"></i>Samarinda
              </span>
              <span class="profile-tag">
                <i class="bi bi-heart-fill me-1"></i>Suka Ngulik
              </span>
            </div>
            <div class="profile-divider"></div>
            <div class="profile-status">
              <span class="status-dot"></span>
              <span>Aktif belajar & open untuk kolaborasi</span>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="col-lg-7">
          <h3 class="about-name mb-1">{{ name }}</h3>
          <p class="about-role mb-4">
            <i class="bi bi-code-slash me-2"></i>Full Stack Developer in Progress
          </p>
          <p class="about-desc mb-3">
            Halo! Saya adalah mahasiswa
            <strong>Teknologi Informasi di Polnes (Politeknik Negeri Samarinda)</strong>
            yang penuh semangat dalam dunia teknologi. Saya percaya bahwa belajar adalah
            proses tanpa henti, dan saya selalu antusias untuk mengeksplorasi teknologi-teknologi baru.
          </p>
          <p class="about-desc mb-4">
            Saat ini saya fokus mengasah skill <strong>Full Stack Development</strong> —
            dari tampilan frontend yang kece sampai logika backend yang solid.
            Saya suka <em>ngulik</em>, problem solving, dan tentunya
            <em>debugging</em> yang bikin pusing tapi puas kalau berhasil! 
          </p>

          <div class="about-info-grid">
            <div class="info-item" v-for="info in aboutInfo" :key="info.label">
              <i :class="info.icon + ' info-icon'"></i>
              <div>
                <div class="info-label">{{ info.label }}</div>
                <div class="info-value">{{ info.value }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const name = 'Khoirul Huda'

const aboutInfo = [
  { icon: 'bi bi-mortarboard-fill', label: 'Kampus',  value: 'Politeknik Negeri Samarinda' },
  { icon: 'bi bi-journal-code',     label: 'Prodi',   value: 'Teknologi Informasi'          },
  { icon: 'bi bi-geo-alt-fill',     label: 'Lokasi',  value: 'Samarinda, Kalimantan Timur'  },
  { icon: 'bi bi-building-fill',    label: 'SMA',     value: 'SMA Budi Luhur Samarinda'     },
  { icon: 'bi bi-stars',            label: 'Passion', value: 'Full Stack Development'       },
  { icon: 'bi bi-person-circle',    label: 'Status',  value: 'Mahasiswa Aktif'               },
]
</script>

<style scoped>
/* Profile Card */
.profile-card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 2rem 1.8rem;
  box-shadow: 0 4px 24px rgba(16, 185, 129, 0.1);
  transition: var(--transition);
}

.profile-card:hover {
  border-color: var(--border-hover);
  box-shadow: 0 8px 36px rgba(16, 185, 129, 0.18);
  transform: translateY(-4px);
}

.profile-card-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}

.profile-name {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
}

.profile-role {
  font-size: 0.88rem;
  color: var(--primary-dark);
  font-weight: 500;
  margin: 0;
}

.profile-divider {
  height: 1px;
  background: var(--border);
  margin: 1rem 0;
}

.profile-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.profile-tag {
  display: inline-flex;
  align-items: center;
  background: rgba(16, 185, 129, 0.08);
  color: var(--primary-dark);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 50px;
  padding: 0.35rem 0.9rem;
  font-size: 0.82rem;
  font-weight: 600;
  transition: var(--transition);
}

.profile-tag:hover {
  background: rgba(16, 185, 129, 0.15);
  border-color: var(--primary);
}

.profile-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.status-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
  animation: pulse 2s ease infinite;
  flex-shrink: 0;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2); }
  50%       { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.08); }
}

/* About Content */
.about-name { font-size: 1.8rem; font-weight: 800; color: var(--text-primary); }
.about-role { color: var(--primary-dark); font-weight: 500; font-size: 0.95rem; }
.about-desc { color: var(--text-secondary); font-size: 0.97rem; line-height: 1.85; }

.about-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 0.9rem 1rem;
  transition: var(--transition);
  box-shadow: 0 2px 8px rgba(16, 185, 129,0.06);
}

.info-item:hover {
  border-color: var(--border-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129,0.12);
}

.info-icon { color: var(--primary); font-size: 1.1rem; margin-top: 2px; }
.info-label { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
.info-value { font-size: 0.9rem; color: var(--text-primary); font-weight: 500; margin-top: 2px; }

@media (max-width: 768px) {
  .about-info-grid { grid-template-columns: 1fr; }
}
</style>
