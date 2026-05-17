/* ─── LOAD DATA & RENDER ─── */

async function loadData() {
  try {
    const res = await fetch('data.json');
    if (!res.ok) throw new Error('Cannot load data.json');
    const data = await res.json();
    render(data);
  } catch (e) {
    console.error('Portfolio: ไม่สามารถโหลด data.json ได้', e);
  }
}

function render(d) {
  /* NAV */
  document.getElementById('nav-name').textContent = d.name || 'Portfolio';

  /* HERO */
  document.getElementById('hero-name').textContent = d.name || '';
  document.getElementById('hero-title').textContent = d.title || '';
  document.getElementById('hero-bio').textContent = d.bio || '';

  /* AVATAR */
  const avatarEl = document.getElementById('hero-avatar');
  const fallbackEl = document.getElementById('avatar-fallback');
  if (d.avatar) {
    avatarEl.src = d.avatar;
    avatarEl.style.display = 'block';
    const initials = (d.name || '?').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    fallbackEl.textContent = initials;
  } else {
    avatarEl.style.display = 'none';
    fallbackEl.style.display = 'flex';
    const initials = (d.name || '?').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    fallbackEl.textContent = initials;
  }

  /* STATS */
  if (d.stats) {
    document.getElementById('stat-years').textContent = d.stats.years || '—';
    document.getElementById('stat-projects').textContent = d.stats.projects || '—';
    document.getElementById('stat-clients').textContent = d.stats.clients || '—';
  }

  /* EXPERIENCE */
  const expList = document.getElementById('exp-list');
  (d.experience || []).forEach((ex, i) => {
    const el = document.createElement('div');
    el.className = 'exp-item fade-in';
    el.innerHTML = `
      <div class="exp-dot-wrap">
        <div class="exp-dot ${i === 0 ? 'filled' : ''}"></div>
      </div>
      <div class="exp-body">
        <div class="exp-role">${ex.role || ''}</div>
        <div class="exp-meta">${ex.company || ''}${ex.type ? ' · ' + ex.type : ''}</div>
        <div class="exp-desc">${ex.desc || ''}</div>
      </div>
      <div class="exp-period">${ex.period || ''}</div>
    `;
    expList.appendChild(el);
  });

  /* GALLERY GRID */
  const gallery = document.getElementById('gallery-grid');
  (d.projects || []).forEach((proj, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item fade-in';
    item.style.animationDelay = `${i * 0.05}s`;

    const hasImage = proj.image && proj.image.trim() !== '';
    const tagsHTML = (proj.tags || []).map(t => `<span class="gallery-tag">${t}</span>`).join('');

    item.innerHTML = `
      ${hasImage
        ? `<img class="gallery-img" src="${proj.image}" alt="${proj.name || ''}" loading="lazy" />`
        : `<div class="gallery-placeholder">
            <div class="gallery-placeholder-icon">🖼️</div>
            <div>${proj.name || 'Project'}</div>
           </div>`
      }
      <div class="gallery-overlay">
        <div class="gallery-item-name">${proj.name || ''}</div>
        <div class="gallery-item-tags">${tagsHTML}</div>
      </div>
    `;

    item.addEventListener('click', () => openLightbox(proj));
    gallery.appendChild(item);
  });

  /* SKILLS */
  const skillsWrap = document.getElementById('skills-wrap');
  (d.skills || []).forEach(skill => {
    const pill = document.createElement('span');
    pill.className = 'skill-pill';
    pill.textContent = skill;
    skillsWrap.appendChild(pill);
  });

  /* EDUCATION */
  const eduList = document.getElementById('edu-list');
  (d.education || []).forEach(edu => {
    const el = document.createElement('div');
    el.className = 'edu-item fade-in';
    el.innerHTML = `
      <div>
        <div class="edu-degree">${edu.degree || ''}</div>
        <div class="edu-school">${edu.school || ''}</div>
      </div>
      <div class="edu-year">${edu.year || ''}</div>
    `;
    eduList.appendChild(el);
  });

  /* CONTACT */
  const contactLinks = document.getElementById('contact-links');
  if (d.contact) {
    if (d.contact.email) {
      contactLinks.innerHTML += `<a class="contact-btn primary-contact" href="mailto:${d.contact.email}">✉ ส่ง Email</a>`;
    }
    if (d.contact.github) {
      contactLinks.innerHTML += `<a class="contact-btn" href="${d.contact.github}" target="_blank" rel="noopener">⌥ GitHub</a>`;
    }
    if (d.contact.linkedin) {
      contactLinks.innerHTML += `<a class="contact-btn" href="${d.contact.linkedin}" target="_blank" rel="noopener">in LinkedIn</a>`;
    }
    if (d.contact.website) {
      contactLinks.innerHTML += `<a class="contact-btn" href="${d.contact.website}" target="_blank" rel="noopener">↗ Website</a>`;
    }
  }

  /* FOOTER */
  document.getElementById('footer-name').textContent = d.name || 'Portfolio';
  document.title = `${d.name || 'Portfolio'} — ${d.title || ''}`;

  /* INIT OBSERVERS */
  initScrollObserver();
}

/* ─── LIGHTBOX ─── */
function openLightbox(proj) {
  document.getElementById('lb-year').textContent = proj.year || '';
  document.getElementById('lb-name').textContent = proj.name || '';
  document.getElementById('lb-desc').textContent = proj.desc || '';

  const img = document.getElementById('lb-img');
  const placeholder = document.getElementById('lb-placeholder');

  if (proj.image && proj.image.trim() !== '') {
    img.src = proj.image;
    img.alt = proj.name || '';
    img.style.display = 'block';
    placeholder.style.display = 'none';
  } else {
    img.style.display = 'none';
    placeholder.style.display = 'flex';
    placeholder.textContent = '🖼️';
  }

  const tagsEl = document.getElementById('lb-tags');
  tagsEl.innerHTML = (proj.tags || [])
    .map(t => `<span class="lightbox-tag">${t}</span>`)
    .join('');

  const linkEl = document.getElementById('lb-link');
  if (proj.link && proj.link.trim() !== '') {
    linkEl.href = proj.link;
    linkEl.classList.remove('hidden');
  } else {
    linkEl.classList.add('hidden');
  }

  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

/* ─── NAV SCROLL ─── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}, { passive: true });

/* ─── MOBILE MENU ─── */
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});

function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

/* ─── SCROLL FADE IN ─── */
function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ─── SMOOTH NAV LINKS ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = document.getElementById('nav').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 20;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ─── START ─── */
loadData();
