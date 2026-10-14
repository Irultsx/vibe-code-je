<template>
  <section id="home" class="hero-section d-flex align-items-center">
    <!-- Background Shapes -->
    <div class="hero-bg-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <div class="container position-relative">
      <div class="row align-items-center min-vh-100">

        <!-- Left: Text -->
        <div class="col-lg-7 col-md-12">
          <div class="hero-badge mb-3">
            <i class="bi bi-stars me-2"></i>
            <span>Available for Collaboration</span>
          </div>

          <h1 class="hero-title mb-3">
            Hi, I'm <span class="gradient-text">{{ name }}</span><br />
            <span class="typing-wrapper">
              <span class="typed-text">{{ typedText }}</span>
              <span class="cursor">|</span>
            </span>
          </h1>

          <p class="hero-subtitle mb-4">
            Mahasiswa <strong>Teknologi Informasi</strong> di
            <span class="highlight-text">Polnes</span> yang passionate dalam
            dunia tech. Sedang dalam perjalanan menjadi
            <span class="highlight-text">Full Stack Developer</span> yang
            handal. Suka ngulik, belajar hal baru, dan explore teknologi! 🚀
          </p>

          <div class="hero-cta d-flex flex-wrap gap-3">
            <a href="#projects" class="btn-primary-custom" @click.prevent="scrollTo('#projects')">
              <i class="bi bi-folder2-open me-2"></i>Lihat Project
            </a>
            <a href="#contact" class="btn-outline-custom" @click.prevent="scrollTo('#contact')">
              <i class="bi bi-send me-2"></i>Hubungi Saya
            </a>
          </div>

          <div class="hero-quote mt-5">
            <i class="bi bi-quote quote-open"></i>
            <span class="quote-words">Always Commit Become Software Engineer</span>
            <i class="bi bi-quote quote-close"></i>
          </div>
        </div>

        <!-- Right: Code Card -->
        <div class="col-lg-5 d-none d-lg-block">
          <div class="hero-code-card">
            <div class="code-card-header">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
              <span class="code-filename ms-2">portfolio.py</span>
            </div>
            <pre class="code-content"><span class="kw">class</span> <span class="cl">Developer</span>:
  <span class="kw">def</span> <span class="fn">__init__</span>(self):
    self.name    = <span class="st">"{{ name }}"</span>
    self.role    = <span class="st">"Full Stack Learner"</span>
    self.campus  = <span class="st">"Polnes — TI"</span>
    self.stack   = [
      <span class="st">"HTML"</span>, <span class="st">"CSS"</span>, <span class="st">"JS"</span>,
      <span class="st">"Python"</span>, <span class="st">"PHP"</span>
    ]

  <span class="kw">def</span> <span class="fn">motto</span>(self):
    <span class="kw">return</span> <span class="st">"Keep Learning, Keep Building!"</span></pre>
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const name = 'Khoirul Huda'

// ── Typing effect ──
const roles = [
  'Full Stack Learner',
  'Tech Enthusiast',
  'Web Develope💻',
  'Python Coder 🐍',
  'Problem Solver 🧩',
]

const typedText = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let timer = null

const typeEffect = () => {
  const current = roles[roleIndex]
  typedText.value = isDeleting
    ? current.substring(0, charIndex - 1)
    : current.substring(0, charIndex + 1)

  isDeleting ? charIndex-- : charIndex++

  let delay = isDeleting ? 60 : 110
  if (!isDeleting && charIndex === current.length) {
    delay = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    roleIndex = (roleIndex + 1) % roles.length
    delay = 400
  }
  timer = setTimeout(typeEffect, delay)
}

const scrollTo = (href) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => typeEffect())
onUnmounted(() => clearTimeout(timer))
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  background: linear-gradient(160deg, #ffffff 0%, #f0fdf4 50%, #dcfce7 100%);
}

/* Shapes */
.hero-bg-shapes { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.45;
}

.shape-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, #34d399, transparent);
  top: -150px; right: -100px;
  animation: floatShape 8s ease-in-out infinite;
}

.shape-2 {
  width: 350px; height: 350px;
  background: radial-gradient(circle, #06b6d4, transparent);
  bottom: 0; left: -80px;
  animation: floatShape 10s ease-in-out infinite reverse;
}

.shape-3 {
  width: 200px; height: 200px;
  background: radial-gradient(circle, #3b82f6, transparent);
  top: 40%; left: 40%;
  animation: floatShape 6s ease-in-out infinite 2s;
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(16, 185, 129, 0.1);
  color: var(--primary-dark);
  border: 1px solid rgba(16, 185, 129, 0.3);
  padding: 0.35rem 1rem;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 600;
  animation: fadeInDown 0.6s ease both;
}

/* Title */
.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--text-primary);
  animation: fadeInUp 0.7s ease 0.1s both;
}

.typing-wrapper { display: inline-flex; align-items: center; }

.typed-text {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: clamp(1.4rem, 3.5vw, 2.4rem);
  font-weight: 700;
}

.cursor {
  color: var(--primary);
  -webkit-text-fill-color: var(--primary);
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}

/* Quote */
.hero-quote {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(16, 185, 129, 0.07);
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: 50px;
  padding: 0.7rem 1.4rem;
  animation: fadeInUp 0.7s ease 0.4s both;
}

.quote-words {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--primary-dark);
  font-style: italic;
}

.quote-open {
  color: var(--primary);
  font-size: 1.1rem;
  flex-shrink: 0;
}

.quote-close {
  color: var(--primary);
  font-size: 1.1rem;
  transform: rotate(180deg);
  flex-shrink: 0;
}

/* Stats (tidak terpakai, bisa dihapus) */

/* Code Card */
.hero-code-card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card), 0 0 40px rgba(16, 185, 129, 0.12);
  animation: fadeInRight 0.8s ease 0.3s both;
}

.code-card-header {
  background: var(--bg-card2);
  padding: 0.8rem 1.2rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border);
}

.dot { width: 12px; height: 12px; border-radius: 50%; margin-right: 6px; }
.dot-red    { background: #ff5f57; }
.dot-yellow { background: #ffbd2e; }
.dot-green  { background: #27c93f; }

.code-filename {
  color: var(--text-muted);
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
}

.code-content {
  padding: 1.5rem;
  margin: 0;
  font-family: 'Fira Code', monospace;
  font-size: 0.82rem;
  line-height: 2;
  color: var(--text-secondary);
  white-space: pre;
  overflow-x: auto;
  background: #f0fdf4;
}

.kw { color: #059669; }
.cl { color: #0d9488; }
.fn { color: #0284c7; }
.st { color: #16a34a; }

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  animation: bounce 2s infinite;
}

.scroll-mouse {
  width: 26px; height: 40px;
  border: 2px solid rgba(16, 185, 129, 0.4);
  border-radius: 13px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.scroll-wheel {
  width: 4px; height: 8px;
  background: var(--primary);
  border-radius: 2px;
  animation: scrollWheel 1.5s infinite;
}

@keyframes scrollWheel {
  0%   { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(8px); opacity: 0; }
}

@media (max-width: 576px) {
  .hero-cta { flex-direction: column; }
}
</style>
