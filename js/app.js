const { createApp, ref, computed, onMounted, onUnmounted } = Vue;

createApp({
  setup() {
    // ── Data Pribadi ──
    const name = ref("Khoirul Huda"); // Ganti dengan nama kamu!

    // ── Navbar scroll ──
    const isScrolled = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    // ── Nav Links ──
    const navLinks = ref([
      { href: "#home",      label: "Home"       },
      { href: "#about",     label: "About"      },
      { href: "#skills",    label: "Skills"     },
      { href: "#projects",  label: "Projects"   },
      { href: "#education", label: "Education"  },
      { href: "#contact",   label: "Contact"    },
    ]);

    // ── Smooth scroll ──
    const scrollTo = (href) => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      // Close mobile navbar if open
      const navCollapse = document.getElementById("navbarNav");
      if (navCollapse && navCollapse.classList.contains("show")) {
        navCollapse.classList.remove("show");
      }
    };

    // ── Typing effect ──
    const roles = [
      "Full Stack Learner",
      "Tech Enthusiast",
      "Web Developer",
      "Python Coder",
      "Problem Solver",
    ];
    const typedText = ref("");
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimer = null;

    const typeEffect = () => {
      const current = roles[roleIndex];
      if (isDeleting) {
        typedText.value = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedText.value = current.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? 60 : 110;

      if (!isDeleting && charIndex === current.length) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 400;
      }

      typingTimer = setTimeout(typeEffect, delay);
    };

    // ── Stats ──
    const stats = ref([
      { value: "5+",  label: "Tech Stack"     },
      { value: "10+", label: "Projects"        },
      { value: "2+",  label: "Tahun Belajar"  },
      { value: "∞",   label: "Semangat"       },
    ]);

    // ── About Info ──
    const aboutInfo = ref([
      {
        icon: "bi bi-mortarboard-fill",
        label: "Kampus",
        value: "Politeknik Negeri Samarinda",
      },
      {
        icon: "bi bi-journal-code",
        label: "Prodi",
        value: "Teknologi Informasi",
      },
      {
        icon: "bi bi-geo-alt-fill",
        label: "Lokasi",
        value: "Samarinda, Kalimantan Timur",
      },
      {
        icon: "bi bi-building-fill",
        label: "SMA",
        value: "SMA Budi Luhur Samarinda",
      },
      {
        icon: "bi bi-stars",
        label: "Passion",
        value: "Full Stack Development",
      },
      {
        icon: "bi bi-person-circle",
        label: "Status",
        value: "Mahasiswa Aktif",
      },
    ]);

    // ── Skills ──
    const skillCategories = ref([
      {
        title: "Frontend",
        icon: "bi bi-layout-text-window",
        color: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        accent: "rgba(99, 102, 241, 0.4)",
        skills: [
          { name: "HTML5",      icon: "bi bi-filetype-html" },
          { name: "CSS3",       icon: "bi bi-filetype-css"  },
          { name: "JavaScript", icon: "bi bi-filetype-js"   },
          { name: "Bootstrap",  icon: "bi bi-bootstrap-fill"},
          { name: "Vue.js",     icon: "bi bi-code-slash"    },
        ],
      },
      {
        title: "Backend",
        icon: "bi bi-server",
        color: "linear-gradient(135deg, #06b6d4, #0284c7)",
        accent: "rgba(6, 182, 212, 0.4)",
        skills: [
          { name: "Python",   icon: "bi bi-filetype-py" },
          { name: "PHP",      icon: "bi bi-filetype-php"},
          { name: "MySQL",    icon: "bi bi-database"    },
        ],
      },
      {
        title: "Tools & Lainnya",
        icon: "bi bi-tools",
        color: "linear-gradient(135deg, #10b981, #059669)",
        accent: "rgba(16, 185, 129, 0.4)",
        skills: [
          { name: "Git",      icon: "bi bi-git"              },
          { name: "GitHub",   icon: "bi bi-github"           },
          { name: "VS Code",  icon: "bi bi-code-square"      },
          { name: "Terminal", icon: "bi bi-terminal-fill"    },
          { name: "Figma",    icon: "bi bi-palette"          },
        ],
      },
    ]);

    const learningProgress = ref([
      {
        skill: "HTML & CSS",
        icon: "bi bi-filetype-html",
        percent: 80,
        color: "linear-gradient(90deg, #6366f1, #8b5cf6)",
      },
      {
        skill: "JavaScript",
        icon: "bi bi-filetype-js",
        percent: 65,
        color: "linear-gradient(90deg, #f59e0b, #ef4444)",
      },
      {
        skill: "Python",
        icon: "bi bi-filetype-py",
        percent: 70,
        color: "linear-gradient(90deg, #06b6d4, #0284c7)",
      },
      {
        skill: "PHP",
        icon: "bi bi-filetype-php",
        percent: 60,
        color: "linear-gradient(90deg, #8b5cf6, #6366f1)",
      },
      {
        skill: "Bootstrap",
        icon: "bi bi-bootstrap-fill",
        percent: 75,
        color: "linear-gradient(90deg, #7c3aed, #4f46e5)",
      },
      {
        skill: "Vue.js",
        icon: "bi bi-code-slash",
        percent: 45,
        color: "linear-gradient(90deg, #10b981, #059669)",
      },
    ]);

    // ── Projects ──
    const projects = ref([
      {
        title: "Personal Portfolio",
        desc: "Website portofolio pribadi yang dibangun dengan Vue.js dan Bootstrap 5. Menampilkan skill, project, dan informasi pribadi.",
        icon: "bi bi-person-badge-fill",
        gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        tech: ["Vue.js", "Bootstrap", "CSS"],
        status: "Done",
        statusClass: "status-done",
      },
      {
        title: "Simple CRUD App",
        desc: "Aplikasi CRUD sederhana menggunakan PHP dan MySQL untuk manajemen data. Salah satu project belajar pertama saya.",
        icon: "bi bi-table",
        gradient: "linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)",
        tech: ["PHP", "MySQL", "Bootstrap"],
        status: "Done",
        statusClass: "status-done",
      },
      {
        title: "Python Data Script",
        desc: "Script Python untuk automasi tugas-tugas sederhana dan pengolahan data menggunakan library standar Python.",
        icon: "bi bi-terminal-fill",
        gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        tech: ["Python", "Pandas"],
        status: "WIP",
        statusClass: "status-wip",
      },
      {
        title: "Landing Page UI",
        desc: "Desain landing page modern dan responsive menggunakan HTML, CSS dan sedikit JavaScript vanilla.",
        icon: "bi bi-window-fullscreen",
        gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
        tech: ["HTML", "CSS", "JavaScript"],
        status: "Done",
        statusClass: "status-done",
      },
      {
        title: "REST API — PHP",
        desc: "Belajar membangun REST API sederhana menggunakan PHP native dengan JSON response.",
        icon: "bi bi-diagram-3-fill",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
        tech: ["PHP", "MySQL", "JSON"],
        status: "WIP",
        statusClass: "status-wip",
      },
      {
        title: "Vue Dashboard",
        desc: "Mini dashboard dengan Vue 3 yang menampilkan data dinamis. Dalam tahap perencanaan dan akan segera dikembangkan.",
        icon: "bi bi-speedometer2",
        gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
        tech: ["Vue.js", "Chart.js", "Bootstrap"],
        status: "Planned",
        statusClass: "status-plan",
      },
    ]);

    // ── Education ──
    const education = ref([
      {
        period: "2023 — Sekarang",
        school: "Politeknik Negeri Samarinda (Polnes)",
        major: "D4 Teknologi Informasi",
        desc: "Mempelajari dasar-dasar dan praktik teknologi informasi mulai dari pemrograman, basis data, jaringan, hingga pengembangan aplikasi web. Aktif mengikuti kegiatan kemahasiswaan dan terus mengasah skill coding.",
        icon: "bi bi-mortarboard-fill",
        current: true,
      },
      {
        period: "2020 — 2023",
        school: "SMA Budi Luhur Samarinda",
        major: "IPA",
        desc: "Menyelesaikan pendidikan SMA dengan penuh semangat. Di sinilah awal ketertarikan saya terhadap dunia komputer dan teknologi mulai tumbuh.",
        icon: "bi bi-building-fill",
        current: false,
      },
    ]);

    // ── Contact Links ──
    const contactLinks = ref([
      {
        label: "Email",
        value: "yourname@email.com",
        href: "mailto:yourname@email.com",
        icon: "bi bi-envelope-fill",
        color: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      },
      {
        label: "GitHub",
        value: "github.com/yourname",
        href: "https://github.com/yourname",
        icon: "bi bi-github",
        color: "linear-gradient(135deg, #1f2937, #374151)",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/yourname",
        href: "https://linkedin.com/in/yourname",
        icon: "bi bi-linkedin",
        color: "linear-gradient(135deg, #0284c7, #0ea5e9)",
      },
      {
        label: "Instagram",
        value: "@yourname",
        href: "https://instagram.com/yourname",
        icon: "bi bi-instagram",
        color: "linear-gradient(135deg, #e1306c, #f77737)",
      },
    ]);

    // ── Social Links (Footer) ──
    const socialLinks = ref([
      { icon: "bi bi-github",    href: "https://github.com/yourname",          label: "GitHub"    },
      { icon: "bi bi-linkedin",  href: "https://linkedin.com/in/yourname",     label: "LinkedIn"  },
      { icon: "bi bi-instagram", href: "https://instagram.com/yourname",       label: "Instagram" },
      { icon: "bi bi-envelope",  href: "mailto:yourname@email.com",            label: "Email"     },
    ]);

    // ── Contact Form ──
    const form = ref({ name: "", email: "", message: "" });
    const formSent = ref(false);

    const sendMessage = () => {
      // Simulasi kirim pesan — hubungkan ke backend / EmailJS sesuai kebutuhan
      formSent.value = true;
      form.value = { name: "", email: "", message: "" };
      setTimeout(() => { formSent.value = false; }, 4000);
    };

    // ── Year ──
    const currentYear = computed(() => new Date().getFullYear());

    // ── Intersection Observer (reveal on scroll) ──
    let observer = null;

    const initReveal = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    };

    // ── Lifecycle ──
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      typeEffect();
      setTimeout(initReveal, 300);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      if (typingTimer) clearTimeout(typingTimer);
      if (observer) observer.disconnect();
    });

    return {
      name,
      isScrolled,
      navLinks,
      scrollTo,
      typedText,
      stats,
      aboutInfo,
      skillCategories,
      learningProgress,
      projects,
      education,
      contactLinks,
      socialLinks,
      form,
      formSent,
      sendMessage,
      currentYear,
    };
  },
}).mount("#app");
