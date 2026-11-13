(function () {
  const roles = ["Laravel 11 & Core PHP Architecture","High-Throughput RESTful APIs","MySQL & Redis Query Optimization","Bootstrap 5 & JavaScript Admin Panels"];
  const archTabs = [{"id":"api","label":"REST API Profiler","endpoint":"GET /api/v1/cts/orders?include=items,warehouse","latency":"42 ms (down from 60 ms)","codeLines":[{"key":"Controller","val":"OrderAnalyticsController@index"},{"key":"Pattern","val":"Service + Repository Layer"},{"key":"Query","val":"Order::with([\"items:id,order_id,sku\", \"warehouse\"])"},{"key":"Validation","val":"StoreOrderFormRequest (+40% throughput)"},{"key":"Outcome","val":"-30% API response latency across 4 datasets"}]},{"id":"cache","label":"Redis Caching","endpoint":"Cache::tags([\"inventory\", \"sales\"])-\u003eremember(...)","latency":"14 ms cached hit","codeLines":[{"key":"Driver","val":"Redis + File Fallback"},{"key":"Strategy","val":"Tagged TTL invalidation on stock mutation"},{"key":"Charting","val":"Aggregated daily purchase & sales rollups"},{"key":"LoadTime","val":"-20% overall dashboard page load"},{"key":"Decision","val":"+35% reporting clarity for operations"}]},{"id":"auth","label":"Sanctum RBAC","endpoint":"POST /api/v1/auth/token · Middleware: role:supervisor","latency":"18 ms token verify","codeLines":[{"key":"Guard","val":"Laravel Sanctum / Passport + JWT"},{"key":"Access","val":"Middleware Role-Based Access Control (RBAC)"},{"key":"Security","val":"CSRF Protection + PDO Prepared Statements"},{"key":"Clients","val":"Synced Web Blade Admin + Mobile App APIs"},{"key":"Audit","val":"Activity log stream per authenticated role"}]}];
  const projects = [{"id":"cts-dashboard","title":"CTS Dashboard — Ecommerce Backend","clientOrOrg":"Capecom Solution","category":"Laravel","tags":["Laravel","REST APIs"],"period":"2022 – 2025","headlineMetric":"-30% Latency · +40% Form Speed","metricLabel":"4 E-Commerce Datasets Unified","featured":true,"summary":"Enterprise Laravel backend managing inventory, sales, and purchase orders across 4 distinct e-commerce datasets with Redis caching and Service/Repository architecture.","architectureSnippet":["Service & Repository Pattern · Redis / File Cache","Laravel Form Request Validation · Eager Loading","Automated Backend Charting & Reporting"],"highlights":["Built and maintained a Laravel backend managing inventory, sales, and purchase orders across 4 e-commerce datasets.","Increased form processing efficiency by 40% using Laravel Form Request validation and custom request classes.","Reduced API response latency by 30% through RESTful API optimization, eager loading, and query refactoring.","Applied Laravel caching (Redis/file) and query optimization, cutting overall load time by 20%.","Integrated backend charting and reporting tools, improving data-driven decision-making by 35%.","Centralized state logic using Laravel Service and Repository patterns for consistent data management."]},{"id":"haaicards","title":"HaaiCards — Digital Visiting Card Platform","clientOrOrg":"Heroapps (Dubai Remote)","category":"Core PHP","tags":["Core PHP"],"period":"2025 – 2026","headlineMetric":"Dynamic Templates · QR Contact Share","metricLabel":"Custom Schema & Renderer","summary":"Digital visiting card platform engineered in Core PHP and JavaScript enabling instant QR code contact sharing and customizable card templates.","architectureSnippet":["Core PHP 8.x · Vanilla JavaScript · QR Integration","Dynamic Template Rendering Engine","Relational User & Card Schema Design"],"highlights":["Built using Core PHP and JavaScript with QR code-based contact sharing functionality.","Implemented a dynamic template system allowing users to generate and customize digital visiting cards.","Designed the full database schema and backend logic for template rendering and user management."]},{"id":"housing-guards","title":"Housing Guards Listings — Service Management","clientOrOrg":"Capecom Solution","category":"Laravel","tags":["Laravel","REST APIs"],"period":"2023 – 2024","headlineMetric":"End-to-End Contractor Workflows","metricLabel":"Laravel Blade + REST APIs","summary":"Full-cycle service management platform connecting contractors, service requests, and project workflows with a dynamic Laravel Blade admin panel.","architectureSnippet":["Laravel Blade Admin · Contractor & Project Flows","RESTful API Client Synchronization","User & Service Listing Lifecycle"],"highlights":["Developed a Laravel backend to manage contractors, service requests, and project workflows end-to-end.","Built a dynamic admin panel using Laravel Blade with user, project, and service listing management.","Designed RESTful APIs for seamless communication between the backend and frontend clients."]},{"id":"kiran-smart-apron","title":"Kiran Smart Apron — Workflow & Sync Platform","clientOrOrg":"Capecom Solution","category":"REST APIs","tags":["Laravel","REST APIs"],"period":"2023 – 2025","headlineMetric":"Real-Time Web & Mobile API Sync","metricLabel":"Middleware RBAC Security","summary":"Multi-client workflow management system powering web and mobile apps with real-time REST synchronization, middleware RBAC, and activity audit dashboards.","architectureSnippet":["Web + Mobile RESTful Sync Endpoints","Laravel Middleware RBAC & Auth Guards","Activity Logs & Reporting Blade Dashboard"],"highlights":["Built RESTful APIs supporting both web and mobile apps with real-time data synchronization.","Implemented secure authentication and RBAC using Laravel middleware for safe, restricted data access.","Developed a responsive Laravel Blade admin dashboard for activity logs, reporting, and user management."]},{"id":"hmi-guitars","title":"HMI Guitars — Ecommerce Platform","clientOrOrg":"Web & Ecommerce Build","category":"Core PHP","tags":["Core PHP","REST APIs"],"period":"2022","headlineMetric":"PDO Prepared Statements · Full Order Flow","metricLabel":"Core PHP + MySQL Storefront","summary":"Complete eCommerce backend and admin management suite built from scratch with Core PHP, MySQL, and PDO prepared statements for products, inventory, and orders.","architectureSnippet":["Core PHP + MySQL · PDO Prepared Statements","Product, Inventory & Payment Order Workflows","Bootstrap & JavaScript Admin Operations Panel"],"highlights":["Developed and maintained the complete backend of an eCommerce platform using Core PHP and MySQL, managing products, orders, customers and payment workflows.","Built an admin panel for product management, inventory tracking and order processing, using PHP, HTML, CSS and JavaScript.","Designed and implemented RESTful APIs for frontend-backend integration, with secure data handling through PDO prepared statements and server-side validation."]}];

  // 1. Scroll Progress Bar, Sticky Navbar & Scrollspy
  const progressBar = document.getElementById('scrollProgressBar');
  const navbar = document.getElementById('topNavbar');
  const navLinks = document.querySelectorAll('.gk-nav-link');
  const sectionIds = ['about', 'projects', 'experience', 'skills', 'contact'];

  const handleScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (progressBar) progressBar.style.transform = 'scaleX(' + ratio + ')';
    if (navbar) navbar.classList.toggle('is-scrolled', window.scrollY > 18);

    const offset = window.scrollY + 130;
    let activeId = 'about';
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= offset) activeId = id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + activeId);
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Scroll Reveal via IntersectionObserver
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    reveals.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => revealObserver.observe(el));
  }

  // 3. Animated Numeric Counters
  const metricsRow = document.getElementById('metricsRow');
  if (metricsRow && !reducedMotion) {
    let counted = false;
    const counterObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0] && entries[0].isIntersecting && !counted) {
          counted = true;
          const counters = metricsRow.querySelectorAll('.js-counter');
          const duration = 850;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            counters.forEach((node) => {
              const target = Number(node.getAttribute('data-target') || 0);
              const prefix = node.getAttribute('data-prefix') || '';
              const suffix = node.getAttribute('data-suffix') || '';
              node.textContent = prefix + Math.round(target * eased) + suffix;
            });
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          counterObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    counterObserver.observe(metricsRow);
  }

  // 4. Kinetic Role Rotator
  const roleEl = document.getElementById('roleRotator');
  let roleIdx = 0;
  if (roleEl && !reducedMotion) {
    setInterval(() => {
      roleIdx = (roleIdx + 1) % roles.length;
      roleEl.style.animation = 'none';
      void roleEl.offsetWidth;
      roleEl.textContent = roles[roleIdx];
      roleEl.style.animation = 'roleEnter 0.42s cubic-bezier(0.16, 1, 0.3, 1) both';
    }, 2800);
  }

  // 5. 3D Mouse Tilt Card
  const tiltCard = document.getElementById('tiltCard');
  if (tiltCard && !reducedMotion) {
    tiltCard.addEventListener('mousemove', (e) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      tiltCard.style.transform =
        'perspective(900px) rotateX(' + (-y * 4).toFixed(2) + 'deg) rotateY(' + (x * 4).toFixed(2) + 'deg)';
    });
    tiltCard.addEventListener('mouseleave', () => {
      tiltCard.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    });
  }

  // 6. Backend Architecture Tabs
  const archPanel = document.getElementById('archCodePanel');
  const renderArchTab = (id) => {
    const tab = archTabs.find((t) => t.id === id) || archTabs[0];
    if (!archPanel || !tab) return;
    const rows = tab.codeLines
      .map(
        (line) =>
          '<div class="mb-1"><span class="arch-code-key">' +
          line.key +
          ':</span> <span class="arch-code-val">' +
          line.val +
          '</span></div>'
      )
      .join('');
    archPanel.innerHTML =
      '<div class="text-secondary small mb-2">' + tab.endpoint + ' · ' + tab.latency + '</div>' + rows;
  };
  renderArchTab('api');
  document.querySelectorAll('[data-arch-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-arch-id]').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderArchTab(btn.getAttribute('data-arch-id'));
    });
  });

  // 7. Project Stack Filter
  document.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('[data-filter]').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.js-project-col').forEach((col) => {
        const tags = (col.getAttribute('data-tags') || '').split(',');
        const isFeatured = col.getAttribute('data-featured') === 'true';
        const show = filter === 'All' || tags.includes(filter);
        col.classList.toggle('d-none', !show);
        if (isFeatured) {
          col.classList.toggle('col-12', filter === 'All');
          col.classList.toggle('col-md-6', filter !== 'All');
        }
      });
    });
  });

  // 8. Bootstrap 5 Case Study Modal
  const modalEl = document.getElementById('projectModal');
  const bsModal = modalEl && window.bootstrap ? new window.bootstrap.Modal(modalEl) : null;
  document.querySelectorAll('[data-project-id]').forEach((card) => {
    const openModal = () => {
      const proj = projects.find((p) => p.id === card.getAttribute('data-project-id'));
      if (!proj || !bsModal) return;
      document.getElementById('projectModalMeta').textContent =
        proj.clientOrOrg + ' · ' + proj.tags.join(' / ') + ' · ' + proj.period;
      document.getElementById('projectModalTitle').textContent = proj.title;
      document.getElementById('projectModalMetric').textContent = proj.headlineMetric;
      document.getElementById('projectModalMetricSub').textContent = proj.metricLabel;
      document.getElementById('projectModalSummary').textContent = proj.summary;
      document.getElementById('projectModalHighlights').innerHTML = proj.highlights
        .map((h) => '<li class="experience-bullet">' + h + '</li>')
        .join('');
      bsModal.show();
    };
    card.addEventListener('click', openModal);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal();
      }
    });
  });

  // 9. Copy Email Action
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('gunganesh33@gmail.com');
        copyEmailBtn.textContent = 'Copied';
        setTimeout(() => {
          copyEmailBtn.textContent = 'Copy';
        }, 2200);
      } catch (err) {
        console.error(err);
      }
    });
  }

  // 10. Contact Form Validation
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.classList.add('was-validated');
      if (!form.checkValidity()) return;
      const name = document.getElementById('cName').value.trim();
      const email = document.getElementById('cEmail').value.trim();
      const msg = document.getElementById('cMessage').value.trim();
      const subject = encodeURIComponent('Portfolio Inquiry from ' + name);
      const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + msg);
      window.location.href = 'mailto:gunganesh33@gmail.com?subject=' + subject + '&body=' + body;
      const status = document.getElementById('formStatus');
      if (status) status.textContent = 'Prepared email draft to gunganesh33@gmail.com';
    });
  }
})();
