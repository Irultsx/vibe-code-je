<template>
  <section id="skills" class="section-padding section-alt">
    <div class="container">
      <div class="section-header text-center mb-5">
        <span class="section-tag">Kemampuan</span>
        <h2 class="section-title">Tech <span class="gradient-text">Stack</span></h2>
        <p class="section-subtitle">Teknologi yang sedang saya pelajari & kuasai</p>
      </div>

      <!-- Skill Cards -->
      <div class="row g-4 mb-5">
        <div
          class="col-lg-4 col-md-6"
          v-for="category in skillCategories"
          :key="category.title"
        >
          <div class="skill-card h-100">
            <div class="skill-card-header">
              <div class="skill-icon-wrap" :style="{ background: category.color }">
                <i :class="category.icon"></i>
              </div>
              <h5 class="skill-category-title">{{ category.title }}</h5>
            </div>
            <div class="skill-tags mt-3">
              <span
                class="skill-tag"
                v-for="skill in category.skills"
                :key="skill.name"
                :style="{ borderColor: category.accent }"
              >
                <i :class="skill.icon + ' me-1'"></i>{{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Progress Bars -->
      <div class="progress-section">
        <h4 class="text-center mb-4 fw-semibold">
          <i class="bi bi-graph-up-arrow me-2 gradient-text"></i>Learning Progress
        </h4>
        <div class="row g-3">
          <div
            class="col-md-6"
            v-for="prog in learningProgress"
            :key="prog.skill"
          >
            <div class="progress-item">
              <div class="d-flex justify-content-between mb-2">
                <span class="progress-label">
                  <i :class="prog.icon + ' me-2'"></i>{{ prog.skill }}
                </span>
                <span class="progress-percent">{{ prog.percent }}%</span>
              </div>
              <div class="progress custom-progress">
                <div
                  class="progress-bar"
                  :style="{ width: prog.percent + '%', background: prog.color }"
                  role="progressbar"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    title: 'Frontend',
    icon: 'bi bi-layout-text-window',
    color: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    accent: 'rgba(99, 102, 241, 0.4)',
    skills: [
      { name: 'HTML5',      icon: 'bi bi-filetype-html'  },
      { name: 'CSS3',       icon: 'bi bi-filetype-css'   },
      { name: 'JavaScript', icon: 'bi bi-filetype-js'    },
      { name: 'Bootstrap',  icon: 'bi bi-bootstrap-fill' },
      { name: 'Vue.js',     icon: 'bi bi-code-slash'     },
    ],
  },
  {
    title: 'Backend',
    icon: 'bi bi-server',
    color: 'linear-gradient(135deg, #06b6d4, #0284c7)',
    accent: 'rgba(6, 182, 212, 0.4)',
    skills: [
      { name: 'Python', icon: 'bi bi-filetype-py'  },
      { name: 'PHP',    icon: 'bi bi-filetype-php' },
      { name: 'MySQL',  icon: 'bi bi-database'     },
    ],
  },
  {
    title: 'Tools & Lainnya',
    icon: 'bi bi-tools',
    color: 'linear-gradient(135deg, #10b981, #059669)',
    accent: 'rgba(16, 185, 129, 0.4)',
    skills: [
      { name: 'Git',      icon: 'bi bi-git'           },
      { name: 'GitHub',   icon: 'bi bi-github'        },
      { name: 'VS Code',  icon: 'bi bi-code-square'   },
      { name: 'Terminal', icon: 'bi bi-terminal-fill' },
      { name: 'Figma',    icon: 'bi bi-palette'       },
    ],
  },
]

const learningProgress = [
  { skill: 'HTML & CSS',  icon: 'bi bi-filetype-html', percent: 80, color: 'linear-gradient(90deg, #6366f1, #8b5cf6)' },
  { skill: 'JavaScript',  icon: 'bi bi-filetype-js',   percent: 65, color: 'linear-gradient(90deg, #f59e0b, #ef4444)' },
  { skill: 'Python',      icon: 'bi bi-filetype-py',   percent: 70, color: 'linear-gradient(90deg, #06b6d4, #0284c7)' },
  { skill: 'PHP',         icon: 'bi bi-filetype-php',  percent: 60, color: 'linear-gradient(90deg, #8b5cf6, #6366f1)' },
  { skill: 'Bootstrap',   icon: 'bi bi-bootstrap-fill',percent: 75, color: 'linear-gradient(90deg, #7c3aed, #4f46e5)' },
  { skill: 'Vue.js',      icon: 'bi bi-code-slash',    percent: 45, color: 'linear-gradient(90deg, #10b981, #059669)' },
]
</script>

<style scoped>
.skill-card {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.6rem;
  transition: var(--transition);
  box-shadow: 0 2px 12px rgba(16, 185, 129,0.08);
}

.skill-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(16, 185, 129,0.15);
}

.skill-card-header { display: flex; align-items: center; gap: 1rem; }

.skill-icon-wrap {
  width: 46px; height: 46px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: white;
  flex-shrink: 0;
}

.skill-category-title { font-weight: 700; font-size: 1rem; color: var(--text-primary); margin: 0; }

.skill-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.skill-tag {
  display: inline-flex;
  align-items: center;
  background: rgba(16, 185, 129, 0.07);
  color: var(--primary-dark);
  border: 1px solid;
  border-radius: 6px;
  padding: 0.3rem 0.7rem;
  font-size: 0.82rem;
  font-weight: 500;
  transition: var(--transition);
}

.skill-tag:hover {
  background: rgba(16, 185, 129, 0.15);
  color: var(--primary-dark);
}

.progress-section {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 2.5rem;
  box-shadow: 0 2px 12px rgba(16, 185, 129,0.08);
}

.custom-progress {
  height: 8px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.custom-progress .progress-bar { border-radius: 4px; transition: width 1.5s ease; }

.progress-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.progress-percent {
  color: var(--primary-dark);
  font-size: 0.85rem;
  font-weight: 700;
  font-family: 'Fira Code', monospace;
}

@media (max-width: 768px) {
  .progress-section { padding: 1.5rem; }
}
</style>
