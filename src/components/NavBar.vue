<template>
  <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <!-- Brand -->
      <a class="navbar-brand fw-bold" href="#home" @click.prevent="scrollTo('#home')">
        <span class="brand-bracket">&lt;</span>
        <span class="brand-name">Dev</span>
        <span class="brand-bracket">/&gt;</span>
      </a>

      <!-- Toggler mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-list"></i>
      </button>

      <!-- Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto gap-1">
          <li class="nav-item" v-for="link in navLinks" :key="link.href">
            <a
              class="nav-link nav-pill"
              :href="link.href"
              @click.prevent="scrollTo(link.href)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const navLinks = [
  { href: '#home',      label: 'Home'         },
  { href: '#about',     label: 'About'        },
  { href: '#skills',    label: 'Skills'       },
  { href: '#projects',  label: 'Progres Saya' },
  { href: '#education', label: 'Education'    },
  { href: '#contact',   label: 'Contact'      },
]

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  // tutup navbar mobile kalau terbuka
  const nav = document.getElementById('navbarNav')
  if (nav?.classList.contains('show')) nav.classList.remove('show')
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  background: transparent;
  padding: 1.2rem 0;
  transition: var(--transition);
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.92) !important;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  padding: 0.8rem 0;
  box-shadow: 0 4px 24px rgba(16, 185, 129, 0.1);
}

.navbar-brand { font-size: 1.4rem; text-decoration: none; }

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

.nav-pill {
  color: var(--text-secondary) !important;
  padding: 0.4rem 1rem !important;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: var(--transition);
}

.nav-pill:hover {
  color: var(--primary-dark) !important;
  background: rgba(16, 185, 129, 0.1);
}

.navbar-toggler {
  border: 1px solid var(--border);
  padding: 0.3rem 0.6rem;
  border-radius: var(--radius-sm);
}

.navbar-toggler .bi {
  font-size: 1.3rem;
  color: var(--primary);
}
</style>
