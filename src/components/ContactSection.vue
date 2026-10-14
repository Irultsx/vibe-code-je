<template>
  <section id="contact" class="section-padding">
    <div class="container">
      <div class="section-header text-center mb-5">
        <span class="section-tag">Kontak</span>
        <h2 class="section-title">Let's <span class="gradient-text">Connect!</span></h2>
        <p class="section-subtitle">Jangan ragu untuk menghubungi saya ya!</p>
      </div>

      <div class="row justify-content-center g-4">
        <!-- Info -->
        <div class="col-lg-5">
          <div class="contact-info-card">
            <h4 class="mb-3 fw-semibold">Hubungi Saya</h4>
            <p class="contact-intro mb-4">
              Saya selalu terbuka untuk diskusi tentang teknologi, project kolaborasi,
              atau sekedar ngobrol seputar dunia programming. Feel free to reach out! 😊
            </p>
            <div class="contact-links">
              <a
                :href="contact.href"
                class="contact-link-item"
                v-for="contact in contactLinks"
                :key="contact.label"
                target="_blank"
              >
                <div class="contact-link-icon" :style="{ background: contact.color }">
                  <i :class="contact.icon"></i>
                </div>
                <div class="flex-grow-1">
                  <div class="contact-link-label">{{ contact.label }}</div>
                  <div class="contact-link-value">{{ contact.value }}</div>
                </div>
                <i class="bi bi-arrow-right arrow-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="col-lg-5">
          <div class="contact-form-card">
            <h4 class="mb-3 fw-semibold">Kirim Pesan</h4>
            <form @submit.prevent="sendMessage">
              <div class="mb-3">
                <label class="form-label-custom">Nama</label>
                <input
                  type="text"
                  class="form-control form-control-custom"
                  v-model="form.name"
                  placeholder="Nama kamu"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="form-label-custom">Email</label>
                <input
                  type="email"
                  class="form-control form-control-custom"
                  v-model="form.email"
                  placeholder="email@kamu.com"
                  required
                />
              </div>
              <div class="mb-4">
                <label class="form-label-custom">Pesan</label>
                <textarea
                  class="form-control form-control-custom"
                  v-model="form.message"
                  rows="4"
                  placeholder="Tulis pesanmu di sini..."
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn-primary-custom w-100 justify-content-center">
                <i class="bi bi-send-fill me-2"></i>Kirim Pesan
              </button>
              <div v-if="formSent" class="alert-success-custom mt-3">
                <i class="bi bi-check-circle-fill me-2"></i>
                Pesan berhasil dikirim! Terima kasih 🎉
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const contactLinks = [
  {
    label: 'Email',
    value: 'rahulkhoirulhuda@gmail.com',
    href: 'mailto:rahulkhoirulhuda@gmail.com',
    icon: 'bi bi-envelope-fill',
    color: 'linear-gradient(135deg, #10b981, #06b6d4)',
  },
  {
    label: 'GitHub',
    value: 'github.com/Irultsx',
    href: 'https://github.com/Irultsx',
    icon: 'bi bi-github',
    color: 'linear-gradient(135deg, #1f2937, #374151)',
  },
  {
    label: 'LinkedIn',
    value: 'Khoirul Huda',
    href: 'https://www.linkedin.com/in/khoirul-huda-606363416/',
    icon: 'bi bi-linkedin',
    color: 'linear-gradient(135deg, #0284c7, #0ea5e9)',
  },
  {
    label: 'Instagram',
    value: '@___khoirulhudaa',
    href: 'https://instagram.com/___khoirulhudaa',
    icon: 'bi bi-instagram',
    color: 'linear-gradient(135deg, #e1306c, #f77737)',
  },
]

const form = ref({ name: '', email: '', message: '' })
const formSent = ref(false)

const sendMessage = () => {
  // TODO: hubungkan ke EmailJS / backend sesuai kebutuhan
  formSent.value = true
  form.value = { name: '', email: '', message: '' }
  setTimeout(() => { formSent.value = false }, 4000)
}
</script>

<style scoped>
.contact-info-card,
.contact-form-card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 2.2rem;
  height: 100%;
  box-shadow: 0 2px 12px rgba(16, 185, 129,0.08);
}

.contact-intro { color: var(--text-secondary); font-size: 0.93rem; line-height: 1.8; }

.contact-links { display: flex; flex-direction: column; gap: 0.8rem; }

.contact-link-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--text-primary);
  transition: var(--transition);
}

.contact-link-item:hover {
  border-color: var(--border-hover);
  background: rgba(99,102,241,.08);
  transform: translateX(4px);
  color: var(--text-primary);
}

.contact-link-item:hover .arrow-icon { color: var(--primary-light); transform: translateX(4px); }

.arrow-icon { color: var(--text-muted); transition: var(--transition); }

.contact-link-icon {
  width: 42px; height: 42px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: white;
  flex-shrink: 0;
}

.contact-link-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.contact-link-value { font-size: 0.92rem; color: var(--text-primary); font-weight: 500; }

/* Form */
.form-label-custom {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.4rem;
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-control-custom {
  background: var(--bg-card) !important;
  border: 1px solid var(--border) !important;
  color: var(--text-primary) !important;
  border-radius: var(--radius-sm) !important;
  padding: 0.7rem 1rem !important;
  font-size: 0.93rem !important;
  transition: var(--transition) !important;
}

.form-control-custom::placeholder { color: var(--text-muted) !important; }

.form-control-custom:focus {
  border-color: var(--primary) !important;
  box-shadow: 0 0 0 3px rgba(99,102,241,.15) !important;
  background: var(--bg-card) !important;
}

.alert-success-custom {
  background: rgba(16,185,129,.1);
  border: 1px solid rgba(16,185,129,.3);
  color: var(--accent2);
  border-radius: var(--radius-sm);
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .contact-info-card, .contact-form-card { padding: 1.6rem; }
}
</style>
