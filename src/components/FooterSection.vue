<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-content text-center">
        <div class="footer-brand mb-2">
          <span class="brand-bracket">&lt;</span>
          <span class="brand-name">{{ name }}</span>
          <span class="brand-bracket">/&gt;</span>
        </div>
        <p class="footer-tagline">"Always Commit Become Software Engineer"</p>

        <div class="footer-social mb-4">
          <a
            :href="s.href"
            class="social-btn"
            v-for="s in socialLinks"
            :key="s.icon"
            target="_blank"
            :title="s.label"
          >
            <i :class="s.icon"></i>
          </a>
        </div>

        <div class="footer-divider"></div>

        <p class="footer-copy">
          © {{ currentYear }} {{ name }} · Designed & Built by Khoirul Huda
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const name = 'Khoirul Huda'
const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { icon: 'bi bi-github',    href: 'https://github.com/Irultsx',                                    label: 'GitHub'    },
  { icon: 'bi bi-linkedin',  href: 'https://www.linkedin.com/in/khoirul-huda-606363416/',           label: 'LinkedIn'  },
  { icon: 'bi bi-instagram', href: 'https://instagram.com/___khoirulhudaa',                         label: 'Instagram' },
  { icon: 'bi bi-envelope',  href: 'mailto:rahulkhoirulhuda@gmail.com',                             label: 'Email'     },
]
</script>

<style scoped>
.footer-section {
  background: var(--bg-alt);
  border-top: 1px solid var(--border);
  padding: 3rem 0;
}

.footer-brand { font-size: 1.5rem; font-weight: 800; }

.brand-bracket {
  color: var(--primary);
  font-family: 'Fira Code', monospace;
}

.brand-name {
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  margin: 0 2px;
}

.footer-tagline { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem; }

.footer-social { display: flex; justify-content: center; gap: 0.8rem; }

.social-btn {
  width: 42px; height: 42px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  text-decoration: none;
  transition: var(--transition);
}

.social-btn:hover {
  background: var(--gradient-main);
  border-color: transparent;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(16, 185, 129,.35);
}

.footer-divider {
  width: 60px; height: 2px;
  background: var(--gradient-main);
  margin: 1.2rem auto;
  border-radius: 2px;
}

.footer-copy {
  color: var(--text-muted);
  font-size: 0.85rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
}
</style>
