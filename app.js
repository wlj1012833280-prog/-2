const main = document.querySelector('#main');
const ordered = items => [...items].sort((a, b) => a.order - b.order);
const projects = ordered(content.projects);
const experiments = ordered(content.experiments);
const carouselItems = content.carouselMedia.slice(0,13);
const carouselDepth = [
  [0, 0, 1, 1], [.69, 52, .73, .98], [.99, 61, .61, .86],
  [1.22, 53, .53, .71], [1.39, 45, .44, .49], [1.51, 36, .37, .30],
  [1.60, 29, .30, .16]
];
const profile = content.profile;
const filters = [['all','全部'], ['product','产品体验'], ['brand','品牌视觉']];
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
})[char]);
const e = escapeHtml;
const arrow = '<span aria-hidden="true">↗</span>';
document.querySelector('#name').textContent = profile.name;

function picture({src, alt, ratio = 'landscape', caption, tone}, eager = false) {
  return `<figure class="picture ${e(ratio)}" style="--tone:${e(tone || '#e8e4db')}"><div class="image-frame"><img src="${e(src)}" alt="${e(alt)}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"></div>${caption ? `<figcaption>${e(caption)}</figcaption>` : ''}</figure>`;
}

function card(item, collection, wide = false) {
  const cover = picture({src:item.cover, alt:item.alt, ratio:wide ? 'wide' : item.ratio, tone:item.tone}, wide);
  const href = collection ? '#/' + collection + '/' + e(item.id) : e(item.cover);
  return `<a class="card ${wide ? 'featured' : ''}" href="${href}" ${collection ? '' : 'target="_blank" rel="noopener"'}>
    <div class="cover">${cover}${item.placeholder ? '<span class="placeholder">示意封面</span>' : ''}</div>
    <div class="card-info"><div><h3>${e(item.title)}</h3><p>${e([item.category, ...(item.tags || [])].join(' / '))}</p></div><span class="card-arrow" aria-hidden="true">↗</span></div>
  </a>`;
}

function sectionTitle(title, english, link, label) {
  return `<div class="section-title"><div><div class="eyebrow"><span class="dot">●</span> ${english}</div><h2>${title}</h2></div>${link ? `<a class="text-link" href="${link}">${label} ${arrow}</a>` : ''}</div>`;
}

function carousel(items) {
  return `<div class="carousel" role="region" aria-label="作品轮播">
    <div class="carousel-stage">
      ${items.map((item, index) => `<a class="carousel-slide" data-slide="${index}" href="${item.collection ? '#/' + item.collection + '/' + e(item.id) : e(item.cover)}" ${item.collection ? '' : 'target="_blank" rel="noopener"'} aria-label="${e(item.title)}，${item.collection ? '打开作品' : '查看大图'}">
        <img src="${e(item.cover)}" alt="${e(item.alt)}" draggable="false" decoding="async">
      </a>`).join('')}
    </div>
    <div class="carousel-controls">
      <button type="button" data-step="-1" aria-label="上一项作品">←</button>
      <div class="carousel-caption" aria-live="polite"></div>
      <button type="button" data-step="1" aria-label="下一项作品">→</button>
    </div>
  </div>`;
}

function home() {
  return `<section class="dusk-hero" aria-labelledby="home-title">
    <div class="hero-type">
      <h1 id="home-title">${e(profile.headline.join(''))}</h1>
      <p>${e(profile.intro)}</p>
    </div>
    ${carouselItems.length ? carousel(carouselItems) : ''}
    <a class="hero-scroll" href="#/selected">浏览全部作品 <span aria-hidden="true">↓</span></a>
    </section>
    <section id="selected" class="home-gallery" tabindex="-1">${sectionTitle('精选作品', 'SELECTED WORK', '#/works', '查看全部作品')}<div class="waterfall">${content.carouselMedia.map((item, index, items) => card(item, null, index === 2 || (items.length % 2 === 0 && index === items.length - 1))).join('')}</div></section>
    <section class="spaced">${sectionTitle('实验', 'EXPERIMENTS', '#/experiments', '查看全部实验')}<div class="grid">${experiments.slice(0,2).map(item => card(item, 'experiments')).join('')}</div></section>
    <section class="spaced home-about">${sectionTitle('关于我', 'ABOUT', '#/about', '了解更多与联系')}<p>${e(profile.about)}</p></section>`;
}

function pageTitle(chinese, english, description) {
  return `<div class="page-title"><div class="eyebrow"><span class="dot">●</span> ${english}</div><h1>${chinese}</h1><p>${description}</p></div>`;
}

function works(filter) {
  const current = filters.find(([key]) => key === filter) || filters[0];
  const visible = current[0] === 'all' ? projects : projects.filter(item => item.category === current[1]);
  return `${pageTitle('作品', 'WORK', '产品体验与品牌视觉的项目选集。')}
    <div class="filterbar"><nav aria-label="作品筛选">${filters.map(([key,label]) => `<a href="#/works${key === 'all' ? '' : '?filter=' + key}" ${key === current[0] ? 'aria-current="true"' : ''}>${label}</a>`).join('')}</nav><span aria-live="polite">${visible.length} 项作品</span></div>
    <div class="grid">${visible.map(item => card(item,'works')).join('')}</div>`;
}

function navigationDetail(item, collection, items) {
  const next = items[(items.indexOf(item) + 1) % items.length];
  const label = collection === 'works' ? '作品' : '实验';
  const filter = new URLSearchParams(location.hash.split('?')[1]).get('from');
  const validFilter = collection === 'works' && filters.some(([key]) => key === filter && key !== 'all');
  const back = `#/${collection}${validFilter ? '?filter=' + filter : ''}`;
  return `<div class="detail-nav"><a class="text-link" href="${back}">← 返回${label}列表</a><a class="text-link" href="#/${collection}/${e(next.id)}${validFilter ? '?from=' + filter : ''}">下一${label} · ${e(next.title)} ${arrow}</a></div>`;
}

function detail(item, collection, items) {
  return `<article>${pageTitle(e(item.title), e(item.category), e(item.tags.join(' / ')) + (item.placeholder ? ' · 案例与图片为占位示意' : ''))}
    ${picture({src:item.cover, alt:item.alt, caption:item.lead, ratio:item.ratio, tone:item.tone}, true)}
    ${item.sections.map(section => `<section class="case-section"><div class="case-copy"><h2>${e(section.title)}</h2><p>${e(section.text)}</p></div>
      ${section.images?.length ? `<div class="grid case-images ${section.images.length === 1 ? 'single' : ''}">${section.images.map(img => picture(img)).join('')}</div>` : ''}</section>`).join('')}
    ${navigationDetail(item,collection,items)}</article>`;
}

function about() {
  return `${pageTitle('关于', 'ABOUT', e(profile.name) + ' · UI、品牌与市场视觉')}
    <div class="about-grid">${profile.photo ? picture({src:profile.photo, alt:'设计师个人照片', ratio:'poster'}) : '<div class="photo-placeholder">个人照片待补充</div>'}
    <div><h2>设计经历</h2><p>${e(profile.about)}</p><h2>联系与交流</h2><ul class="contact">
    <li>${profile.email ? `<a class="text-link" href="mailto:${e(profile.email)}">${e(profile.email)} ${arrow}</a>` : '邮箱待补充'}</li>
    ${profile.social.map(item => `<li>${item.url ? `<a class="text-link" href="${e(item.url)}">${e(item.label)} ${arrow}</a>` : e(item.label) + '链接待补充'}</li>`).join('')}</ul></div></div>`;
}

function bindCarousel() {
  const region = main.querySelector('.carousel');
  if (!region) return;
  const stage = region.querySelector('.carousel-stage');
  const slides = Array.from(stage.children);
  const caption = region.querySelector('.carousel-caption');
  const controls = region.querySelectorAll('[data-step]');
  let active = 0;
  let touchX;
  let touchY;
  let pointerX;
  let pointerDistance = 0;
  let lastTurn = -Infinity;
  const trackPointer = matchMedia('(any-pointer: fine) and (prefers-reduced-motion: no-preference)');

  function resetPointer() {
    pointerX = undefined;
    pointerDistance = 0;
  }

  function show(index) {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      let offset = (i - active + slides.length) % slides.length;
      if (offset > Math.floor(slides.length / 2)) offset -= slides.length;
      const previousOffset = Number(slide.dataset.slot);
      slide.classList.toggle('wrap', Math.abs(offset - previousOffset) > slides.length / 2);
      slide.dataset.slot = offset;
      const depth = Math.abs(offset);
      const [shift, turn, scale, opacity] = carouselDepth[depth];
      const side = Math.sign(offset);
      slide.style.setProperty('--shift', 'calc(var(--slide-width) * ' + side * shift + ')');
      slide.style.setProperty('--turn', -side * turn + 'deg');
      slide.style.setProperty('--scale', scale);
      slide.style.setProperty('--opacity', opacity);
      slide.style.setProperty('--depth', carouselDepth.length - depth);
      slide.tabIndex = offset === 0 ? 0 : -1;
      slide.setAttribute('aria-hidden', String(offset !== 0));
    });
    const item = carouselItems[active];
    caption.innerHTML = `<strong>${e(item.title)}</strong><span>${e(item.category)}${item.placeholder ? ' · 示意作品' : ''}</span>`;
  }

  controls.forEach(button => {
    button.disabled = slides.length < 2;
    button.addEventListener('click', () => show(active + Number(button.dataset.step)));
  });
  stage.addEventListener('click', event => {
    const slide = event.target.closest('[data-slide]');
    if (!slide || Number(slide.dataset.slide) === active) return;
    event.preventDefault();
    show(Number(slide.dataset.slide));
  });
  region.addEventListener('keydown', event => {
    if (!['ArrowLeft','ArrowRight'].includes(event.key) || slides.length < 2) return;
    event.preventDefault();
    const fromSlide = event.target.closest('[data-slide]');
    show(active + (event.key === 'ArrowRight' ? 1 : -1));
    if (fromSlide) slides[active].focus({preventScroll:true});
  });
  const hero = region.closest('.dusk-hero');
  hero.addEventListener('pointerleave', resetPointer);
  hero.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse' || !trackPointer.matches || slides.length < 2 ||
      event.target.closest('.carousel-controls, .hero-scroll') || region.contains(document.activeElement)) {
      resetPointer();
      return;
    }
    const delta = pointerX === undefined ? 0 : event.clientX - pointerX;
    pointerX = event.clientX;
    if (!delta) return;
    if (Math.sign(delta) !== Math.sign(pointerDistance)) pointerDistance = 0;
    const distancePerCard = Math.max(35, hero.clientWidth * .034);
    pointerDistance = Math.max(-distancePerCard, Math.min(distancePerCard, pointerDistance + delta));
    if (Math.abs(pointerDistance) < distancePerCard || event.timeStamp - lastTurn < 165) return;
    show(active + (pointerDistance < 0 ? 1 : -1));
    pointerDistance = 0;
    lastTurn = event.timeStamp;
  });
  stage.addEventListener('touchstart', event => {
    touchX = event.touches[0].clientX;
    touchY = event.touches[0].clientY;
  }, {passive:true});
  stage.addEventListener('touchend', event => {
    const dx = event.changedTouches[0].clientX - touchX;
    const dy = event.changedTouches[0].clientY - touchY;
    if (Math.abs(dx) >= 36 && Math.abs(dx) > Math.abs(dy)) show(active + (dx < 0 ? 1 : -1));
  }, {passive:true});
  show(0);
}

let previous = '';
function render() {
  if (location.hash && !location.hash.startsWith('#/')) return;
  const [path, query] = location.hash.slice(2).split('?');
  const [page, id] = path.split('/');
  const params = new URLSearchParams(query);
  const items = page === 'works' ? projects : experiments;
  const item = ['works','experiments'].includes(page) && id && items.find(entry => entry.id === id);
  const homePage = !page || page === 'selected';
  let title = '设计手记';
  let html;
  if (item) {
    title = item.title;
    html = detail(item,page,items);
  } else if (page === 'works' && !id) {
    title = '作品';
    html = works(params.get('filter'));
  } else if (page === 'experiments' && !id) {
    title = '实验';
    html = pageTitle('实验','EXPERIMENTS','记录 AI 创作和设计方法的探索过程。') + `<div class="grid">${experiments.map(entry => card(entry,'experiments')).join('')}</div>`;
  } else if (page === 'about') {
    title = '关于';
    html = about();
  } else if (homePage) {
    html = home();
  } else {
    title = '页面未找到';
    html = pageTitle(title,'404','这个页面暂时无法访问。') + '<a class="button" href="#/">返回首页 ←</a>';
  }

  document.body.classList.toggle('dusk-home', homePage);
  main.innerHTML = html;
  bindCarousel();
  document.title = title + '｜个人作品集';
  document.querySelectorAll('[data-tab]').forEach(link => {
    if (link.dataset.tab === page) link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });
  const filter = params.get('filter');
  if (page === 'works' && !id && filter && filters.some(([key]) => key === filter)) {
    main.querySelectorAll('.card').forEach(link => { link.href += '?from=' + filter; });
  }
  if (page === 'selected') {
    const selected = document.querySelector('#selected');
    selected.focus({preventScroll:true});
    selected.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  } else if (path === 'works' && previous === 'works') {
    main.querySelector('[aria-current="true"]')?.focus({preventScroll:true});
  } else {
    main.focus({preventScroll:true});
    window.scrollTo(0, 0);
  }
  previous = path;
}

window.addEventListener('hashchange', render);
render();
