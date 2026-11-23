(() => {
  const root = document.documentElement;
  root.classList.add('js');
  let hlObs = null;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- i18n ---------- */
  const EN = {
    'skip': 'Skip to case studies',
    'nav.cases': 'Work', 'nav.method': 'Process', 'nav.about': 'About', 'nav.contact': 'Contact',
    'hero.hello': 'hi, I’m',
    'hero.lede': 'Marketer specialized in content strategy and event production. I design how a brand communicates and coordinate how it’s experienced: from the content calendar to the logistics of the big day.',
    'hero.cta1': 'Let’s work together', 'hero.cta2': 'See my profile',
    'hero.note': 'strategy + content + analysis',
    'pol.1': 'hands on', 'pol.2': 'behind the camera', 'pol.3': 'ready for your brand',
    'pass.h': 'THE<br>STRATEGIST', 'pass.name': 'NAME', 'pass.role': 'OCCUPATION', 'pass.roleval': 'content + events', 'pass.base': 'BASE',
    'mq.1': 'Strategy with purpose', 'mq.2': 'Content that connects', 'mq.3': 'Events people remember', 'mq.4': 'Data you can explain',
    'cases.t1': 'Real', 'cases.t2': 'cases',
    'cases.sub': 'Here are some of the projects I’ve been part of: the challenge behind each one, how I approached it and what we achieved.',
    'open': 'Open file', 'close': 'Close file',
    'lbl.challenge': 'The challenge', 'lbl.did': 'What I did', 'lbl.result': 'The result',
    'lbl.comms': 'Communication strategy by channel', 'lbl.logistics': 'Management and logistics', 'lbl.content': 'Communication and content',
    'hw.title': 'A community from zero, without a cent in ads',
    'hw.sum': 'We introduced a festival nobody knew on Instagram. In its first month we reached 13,594 people, and 3 out of 4 accounts reached didn’t follow the brand yet.',
    'hw.stamp': 'people reached in 30 days',
    'hw.challenge': 'Position Heywave, a wellness festival, in a city that had never heard of it, before tickets were even on sale.',
    'hw.d1': 'Identified opportunity areas and proposed solutions.',
    'hw.d2': 'Defined goals and the communication and content strategy.',
    'hw.d3': 'Set content pillars with weekly themes and subthemes.',
    'hw.d4': 'Built the monthly calendar and created content: reels and posts.',
    'hw.d5': '“The First Wave” activation with wellness content creators from Ensenada.',
    'hw.d6': 'Performance report and next steps.',
    'hw.n1': 'impressions', 'hw.n2': 'new organic followers', 'hw.n3': 'of accounts reached didn’t follow the brand',
    'hw.n4': 'views on creators’ profiles', 'hw.n5': 'direct clicks to the ticket page', 'hw.n6': 'brands asked to take part',
    'hw.insight': 'The carousel “The wave is coming” was the star piece: 10,845 views and 48 new followers on its own.',
    'as.title': 'From a dormant account to a trust system',
    'as.sum': 'Karla Gaytan is an exclusive Allstate insurance agent in San Diego. She had 3,455 followers bringing no business and 350 five-star reviews nobody saw. I turned them into her strongest sales argument.',
    'as.stamp': 'reviews turned into content',
    'as.challenge': 'Build trust with two different audiences: San Diego’s Latino community on Instagram and Facebook, and her professional network of clients and referral partners on LinkedIn. All in an industry that can’t promise prices or coverage, for an agent who prefers to stay off camera.',
    'as.d1': 'Audit of the profile, the audience and the most common complaint: “nobody answers after the accident”.',
    'as.d2': 'Lead funnel with auto insurance as the entry point and cross-selling afterwards.',
    'as.d3': 'The strategy and all the content: design, copy, reels and posts.',
    'as.es': '· Spanish', 'as.en': '· English',
    'as.ig': 'A warm, first-person voice, like a family member who knows insurance. Educational content, real reviews and clear calls to send a message.',
    'as.li': 'A professional voice for business owners and partners who refer clients, such as realtors, lenders and car dealers. Content about coverage, liability and real cases.',
    'as.insight': 'The most common complaint became the difference: a direct-message channel always visible to anyone who just had an accident.',
    'hr.title': 'From the first sketch to event day',
    'hr.sum': 'I was part of the production of the first edition of a night run with a party, organized for a running club in Ensenada: venue, vendors, sponsors, content and everything in between.',
    'hr.stamp': 'tickets for the first edition',
    'hr.challenge': 'Produce a first edition from scratch in under a month, with a small team, no track record and 500 tickets to sell.',
    'hr.d1': 'Scouted and selected the event venue.', 'hr.d2': 'Managed vendors and sponsors.',
    'hr.d3': 'Coordinated the sound and lighting setup with the provider.', 'hr.d4': 'Purchasing, decoration and venue setup.',
    'hr.d5': 'Follow-up meetings and on-the-spot problem solving.',
    'hr.c1': 'Directed the content shoots.', 'hr.c2': 'Coordinated with the designer what went on the ticketing page and social media.',
    'hr.c3': 'Communication and content strategy, plus a calendar of reels and posts.',
        'also.t': 'Also in the field',
    'also.lbr': 'Content and production for concerts, festivals and stand-up shows in Ensenada, Tijuana and Mexicali.',
    'also.pub': 'Logistics for press conferences and food experiences.',
    'also.ab': 'Coordination of a kids’ drawing and painting contest: logistics, registration, press and content shoots.',
    'm.t1': 'The way I', 'm.t2': 'work',
    'm.sub': 'The process I follow in every project, whether as part of a team or as a partner to a brand.',
    'm.s1': 'Analysis', 'm.s1p': 'I research the brand, its audience and its competitors to find opportunity areas.',
    'm.s2': 'Strategy', 'm.s2p': 'I define goals, messages, content pillars and the communication plan.',
    'm.s3': 'Execution', 'm.s3p': 'Content, calendars and event production: I coordinate vendors, timelines and people so the plan happens.',
    'm.s4': 'Measurement', 'm.s4p': 'I analyze results, share learnings and propose next steps.',
    'p.t1': 'About', 'p.t2': 'me',
    'p.lede': 'I hold a degree in Marketing and a technical background in Logistics. That’s why my projects have two things: <span class="hl">an idea that connects</span> and <span class="hl hl-s">a plan that can actually be executed</span>.',
    'p.body': 'I have worked with service brands, events and experiences in Baja California and San Diego.',
    'p.ai': 'I love staying up to date with technology, and I use artificial intelligence: used well, it’s an incredible tool to analyze, create and execute better.',
    'st.1': 'Detail-oriented', 'st.2': 'Responsible', 'st.3': 'Organized', 'st.4': 'Proactive', 'st.5': 'Punctual', 'st.6': 'Problem solver', 'st.7': 'Passionate about my work',
    'p.c.t': 'Services', 'p.c.1': 'Social media analysis', 'p.c.2': 'Content strategy', 'p.c.3': 'Calendars, copy and content',
    'p.c.4': 'Event logistics', 'p.c.5': 'Performance reports', 'p.c.cta': 'Get a quote on WhatsApp',
    'p.r.t': 'Education', 'p.r.edu.k': 'Education', 'p.r.e1': 'B.A. in Marketing', 'p.r.e2': 'Logistics Technician',
    'p.r.aw.k': 'Awards',
    'p.r.a1': '1st place at the 10th CEUX Research Symposium.', 'p.r.a2': 'Highest score (193 pts.) at the Business Models & Entrepreneurship Fair.',
    'p.r.a3': 'Participant, MKT Talks 4th edition.', 'p.r.a4': 'Financial Education diploma (150 h), CONDUSEF.', 'p.r.a5': 'Office 365 and Microsoft Teams course, Microsoft Mexico.',
    'p.r.sk.k': 'Tools', 'p.r.cta': 'Download CV (PDF)',
    'c.hello': 'shall we talk?', 'c.t': 'Let’s bring ideas together and make them <span class="hl hl-dark">happen</span>.',
    'c.sub': 'Whether it’s for your brand or your team, I’d love to hear from you.',
    'foot': '© 2026 Alejandra Martain · Ensenada, Baja California'
  };
  const ES = {};
  $$('[data-i18n]').forEach(el => { ES[el.dataset.i18n] ??= el.innerHTML; });
  ES.close = 'Cerrar expediente';
  let lang = 'es';
  const store = { get(){ try { return localStorage.getItem('lang'); } catch { return null; } }, set(v){ try { localStorage.setItem('lang', v); } catch {} } };

  function setLang(l, animate) {
    lang = l;
    const dict = l === 'en' ? EN : ES;
    const apply = () => {
      $$('[data-i18n]').forEach(el => {
        const k = el.dataset.i18n;
        if (k === 'open' && el.closest('.file')?.classList.contains('open')) { el.innerHTML = dict.close; return; }
        if (dict[k] != null) el.innerHTML = dict[k];
      });
      root.lang = l;
      document.title = l === 'en' ? 'Alejandra Martain · Marketer: content strategy and events' : 'Alejandra Martain · Mercadóloga: estrategia de contenido y eventos';
      handles();
      $('.lang-on').textContent = l.toUpperCase();
      $('.lang-off').textContent = l === 'en' ? 'ES' : 'EN';
      $$('[data-cv]').forEach(a => a.href = `cv/Alejandra-Martain-CV-${l.toUpperCase()}.pdf`);
    };
    if (animate && !reduce) {
      document.body.animate([{ filter: 'blur(0)', opacity: 1 }, { filter: 'blur(8px)', opacity: .2 }], { duration: 180, easing: 'ease-in' })
        .finished.then(() => { apply(); document.body.animate([{ filter: 'blur(8px)', opacity: .2 }, { filter: 'blur(0)', opacity: 1 }], { duration: 320, easing: 'cubic-bezier(.16,1,.3,1)' }); });
    } else apply();
    store.set(l);
  }
  const urlLang = new URLSearchParams(location.search).get('lang');
  const initial = urlLang || store.get();
  if (initial === 'en') setLang('en');
  $('.lang').addEventListener('click', () => setLang(lang === 'es' ? 'en' : 'es', true));

  function handles(){ $$('.hl').forEach(h => { if (!h.querySelector('i.h1')) h.insertAdjacentHTML('beforeend','<i class="h1"></i><i class="h2"></i>'); if (root.dataset.hlin) h.classList.add('in'); hlObs && hlObs.observe(h); }); }

  /* ---------- intro ---------- */
  $$('.deco').forEach((el, i) => el.style.setProperty('--i', i));
  $$('.stk').forEach((el, i) => el.style.setProperty('--i', i));
  $$('.swirl path').forEach(p => p.style.setProperty('--len', Math.ceil(p.getTotalLength())));
  $$('.desk .drop').forEach((el, i) => el.style.setProperty('--i', i));
  $$('.gallery').forEach(g => $$('img', g).forEach((im, i) => { im.style.setProperty('--i', i); im.loading = 'lazy'; }));
  $$('.step').forEach((el, i) => el.style.setProperty('--i', i));
  requestAnimationFrame(() => requestAnimationFrame(() => $('.hero').classList.add('ready')));

  /* ---------- counters ---------- */
  const fmt = (n, dec) => n.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  function count(el) {
    const target = parseFloat(el.dataset.count); if (isNaN(target)) return;
    const dec = +(el.dataset.dec || 0), pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
    if (reduce) { el.textContent = pre + fmt(target, dec) + suf; return; }
    const t0 = performance.now(), dur = 1400 + Math.min(target, 20000) / 40;
    const tick = now => {
      const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(2, -10 * p);
      el.textContent = pre + fmt(target * (p === 1 ? 1 : e), dec) + suf;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---------- reveals ---------- */
  $$('.sec-head, .also, .profile-copy > *, .contact h2, .contact-links').forEach(el => el.classList.add('rv'));
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target; el.classList.add('in'); io.unobserve(el);
    if (el.matches('.file')) $$('.stamp [data-count], .stamp b[data-count]', el).forEach(count);
  }), { threshold: .2, rootMargin: '0px 0px -8% 0px' });
  $$('.rv, .file, .steps, .swirl-2, .stickers, .profile-photo').forEach(el => io.observe(el));
  hlObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); hlObs.unobserve(e.target); } }), { threshold: .6 });
  handles();

  /* ---------- files ---------- */
  $$('[data-file]').forEach(file => {
    const btn = $('.file-open', file), label = $('[data-i18n="open"]', btn);
    let counted = false;
    btn.addEventListener('click', () => {
      const open = file.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      label.innerHTML = (lang === 'en' ? EN : ES)[open ? 'close' : 'open'];
      if (open && !counted) { counted = true; $$('.nums [data-count]', file).forEach(count); }
      if (open && !reduce) setTimeout(() => file.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
    });
  });

  /* ---------- lanyard follows pointer ---------- */
  const lan = $('.lanyard');
  if (lan && !reduce && matchMedia('(pointer:fine)').matches) {
    let angle = 0, vel = 0, lastX = null, target = 0;
    lan.addEventListener('animationend', () => {
      lan.style.animation = 'none';
      const loop = () => {
        const f = -angle * 0.04 + target * 0.02; vel = (vel + f) * 0.93; angle += vel; target *= 0.9;
        lan.style.transform = `rotate(${angle.toFixed(2)}deg)`; requestAnimationFrame(loop);
      };
      loop();
    });
    $('.hero').addEventListener('pointermove', e => {
      if (lastX !== null) target += Math.max(-6, Math.min(6, (e.clientX - lastX) * 0.25));
      lastX = e.clientX;
    });
  }

  /* ---------- parallax + topbar ---------- */
  const bar = $('.topbar');
  const par = $$('.desk .polaroid, .desk .sticker, .tape-note').map((el, i) => ({ el, k: [0.12, -0.08, 0.16, -0.2, 0.1][i % 5] }));
  let lastY = scrollY, ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      const y = scrollY;
      bar.classList.toggle('hide', y > lastY && y > 400);
      lastY = y;
      if (!reduce && y < innerHeight * 1.2) par.forEach(({ el, k }) => el.style.transform = `translateY(${(y * k).toFixed(1)}px) rotate(var(--r,0deg))`);
      ticking = false;
    });
  }, { passive: true });
})();
