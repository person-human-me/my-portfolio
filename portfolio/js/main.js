// ---------- data (PDF 내용 + QR 링크) ----------
const projects = [
  {
    img: 'work01', color: '#b23a3a', type: '인터뷰 기사 작성 프로젝트',
    title: '특별사법경찰관이 무슨 일인가요?',
    rows: [
      ['PROJECT', '인터뷰 기사 작성'],
      ['INTERVIEW', '소방관 (특별사법경찰관)'],
      ['ROLE', '인터뷰 진행 · 기사 작성'],
      ['DESCRIPTION', '당시 이태원 사태로 소방관과 관련된 이야기가 많아, 소방관님과 직접 인터뷰를 진행하여 기사를 작성하였습니다.'],
    ],
    links: [['기사 원문 확인', 'https://drive.google.com/file/d/1M7uF8onod1zyjIoaqKnONt20T8Tgd01l/view?usp=drive_link']],
  },
  {
    img: 'work07', color: '#2b4c8c', type: '마케팅 보고서 작성 프로젝트',
    title: '「지도가 지구를 덮은 날」 도서 마케팅 기획 보고서',
    rows: [
      ['PROJECT', '도서 마케팅 기획 보고서 · 팀 프로젝트'],
      ['ROLE', '자료조사 (팀원 전원) / Ⅵ 마케팅 전략 ~ Ⅷ 결론 작성'],
      ['DESCRIPTION', '보고서 작성 당시 자료조사는 팀원 전원이 함께 하였으며, 제가 담당한 부분은 후반부로 Ⅵ 마케팅 전략부터 Ⅷ 결론까지 작성하였습니다.'],
    ],
    links: [['보고서 확인', 'https://drive.google.com/file/d/1x0ff32U6h3_ZM-SbGYD7YRTf9yo7YamR/view?usp=drive_link']],
  },
  {
    img: 'work08', color: '#a8452c', type: '잡지 제작 프로젝트',
    title: '추억을 기념하고 시간을 지키다',
    rows: [
      ['PROJECT', '잡지 제작 · 팀 프로젝트'],
      ['CONCEPT', '추억을 보존한다'],
      ['ROLE', '개인 주제 ‘여행의 추억’ 기획 · 총 11페이지 제작'],
      ['DESCRIPTION', '팀은 ‘추억을 보존한다’는 컨셉으로 잡지를 제작하였습니다. 저는 여행을 주제로 개인적인 추억을 담아 총 11페이지를 제작하였습니다.'],
    ],
    links: [['작품 확인', 'https://drive.google.com/file/d/1ufv8vFVs2itDQLeNyNc5_f5Mc1IZ0M6B/view?usp=drive_link']],
  },
  {
    img: 'work09', color: '#4f7a3a', type: '그림책 제작 프로젝트',
    title: '나무의 일기',
    rows: [
      ['PROJECT', '그림책 창작'],
      ['ROLE', '지은이 · 기획'],
      ['CONCEPT', '세 가지 순서로 읽히는 그림책'],
      ['DESCRIPTION', '홀수 페이지 순서대로 읽어도, 짝수 페이지 순서대로 읽어도, 평범하게 순서대로 읽어도 이야기가 이어지도록 그림책을 제작하였습니다.'],
    ],
    links: [['작품 확인', 'https://drive.google.com/file/d/1ndvXVcpjXv2jd-hqBvwdRHLeSyzYwZVQ/view?usp=drive_link']],
  },
  {
    img: 'work10', color: '#3d4a5c', type: '단편 영화 제작 프로젝트',
    title: '비상계단',
    rows: [
      ['PROJECT', '단편 공포영화'],
      ['THEME', '반복되는 공간'],
      ['ROLE', '촬영 구도 아이디어 제안 · 출연'],
      ['DESCRIPTION', '반복되는 공간을 주제로 한 짧은 공포영화입니다. 제작 당시 촬영 구도에 대한 아이디어를 내고 직접 영상에 출연하였습니다.'],
    ],
    links: [['영상 감상', 'https://drive.google.com/file/d/1mW5WiLdQttEQ1L9NQgHmapidxf_9o4hJ/view?usp=drive_link']],
  },
  {
    img: 'work11', color: '#7a5a2f', type: '뮤직비디오 제작 프로젝트',
    title: '과제곡은 힘들어..',
    rows: [
      ['PROJECT', '뮤직비디오 제작'],
      ['ROLE', '팀장 · 촬영 · 편집 · 아이디어 · 출연'],
      ['DESCRIPTION', '제작 당시 팀장, 촬영, 편집, 아이디어, 출연 등 모든 역할을 담당했습니다. 제 노력과 시간, 열정이 모두 담겨 있는 뮤직비디오입니다.'],
    ],
    links: [['영상 감상', 'https://drive.google.com/file/d/14lGKBbBSIVEFMilGc3l_1F6XK7Wp2NdK/view?usp=drive_link']],
  },
  {
    img: 'work12', color: '#c0613f', type: '영어 교과서 내지 제작 프로젝트',
    title: '영어 교과서 내지 제작',
    rows: [
      ['PROJECT', '교재 내지 디자인'],
      ['REFERENCE', '퍼즐 · 십자말풀이'],
      ['DESCRIPTION', '문제를 풀이하는 사람이 즐거웠으면 하는 마음으로 퍼즐이나 십자말풀이 등을 레퍼런스로 찾고, 이를 참고하여 문제를 만들었습니다.'],
    ],
    links: [['내지 확인', 'https://drive.google.com/file/d/1Q5s6tbgZPGnEjQB8IsYFsNrGe7HOeA7e/view?usp=drive_link']],
  },
];

const articles = [
  { img: 'work02', src: '한겨레', color: '#1f6f5c', title: '출판계 “출판물에 AI 활용 정도 밝히는 ‘표시 제도’ 도입하자”', url: 'https://blog.naver.com/domooa/224426377458' },
  { img: 'work03', src: '경향게임스', color: '#2b4c8c', title: '[인터뷰] ‘평균 연령 40.1세’ 격투게임 대표팀, 아시안 게임 금메달로 증명한 ‘열정의 힘’', url: 'https://blog.naver.com/domooa/224445641339' },
  { img: 'work04', src: '경향게임스', color: '#2b4c8c', title: '[지스타 2026] 조영기 게임산업협회장, “외연 확장…차별화로 글로벌 게임쇼 키울 것”', url: 'https://blog.naver.com/domooa/224425281674' },
  { img: 'work05', src: '경향게임스', color: '#2b4c8c', title: '[인터뷰] LoL 개발진, “올해 모토는 ‘백 투 더 베이직’…포지션 정체성·전략적 창의성에 집중”', url: 'https://blog.naver.com/domooa/224423980551' },
  { img: 'work06', src: '경향게임스', color: '#2b4c8c', title: '[줌인 인터뷰-플리더스] ‘오픈형’ 테스트 플랫폼, 유저-개발자 ‘함께 완성하는 게임’', url: 'https://blog.naver.com/domooa/224423474796' },
];

const pageNames = ['표지', '목차', '저는 이런 사람입니다!', '이런 사람은 어떠신가요?', '특별사법경찰관이 무슨 일인가요?', '출판 뉴스 기사 분석',
  '경향게임스 기사 분석 1', '경향게임스 기사 분석 2', '경향게임스 기사 분석 3', '경향게임스 기사 분석 4', '도서 마케팅 기획 보고서',
  '추억을 기념하고 시간을 지키다', '나무의 일기', '비상계단', '과제곡은 힘들어..', '영어 교과서 내지 제작', '마무리', '뒷표지'];

// ---------- render ----------
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

document.getElementById('projects').innerHTML = projects.map((p, i) => `
  <article class="project reveal" style="--c:${p.color}">
    <div class="visual"><img src="images/${p.img}.jpg" alt="${esc(p.title)} 작업물" loading="lazy" data-zoom="images/page${String(+p.img.slice(4) + 4).padStart(2, '0')}.jpg"></div>
    <div class="head"><h3>${esc(p.title)}</h3><span>${esc(p.type)}</span></div>
    <dl>${p.rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
    <div class="btns">${p.links.map(([t, u]) => `<a class="btn" href="${u}" target="_blank" rel="noopener">${t}</a>`).join('')}</div>
  </article>`).join('');

document.getElementById('articles').innerHTML = articles.map((a, i) => `
  <div class="acard" style="--c:${a.color}">
    <div class="thumb"><img src="images/${a.img}.jpg" alt="${esc(a.src)} 기사 분석" loading="lazy" data-zoom="images/page${String(+a.img.slice(4) + 4).padStart(2, '0')}.jpg"></div>
    <div class="body">
      <span class="src">${a.src}</span>
      <h4>${esc(a.title)}</h4>
      <a class="btn" href="${a.url}" target="_blank" rel="noopener">기사 분석 확인</a>
    </div>
  </div>`).join('');

const pagesEl = document.getElementById('pages');
pagesEl.innerHTML = pageNames.map((n, i) => {
  const f = `images/page${String(i + 1).padStart(2, '0')}.jpg`;
  return `<figure data-idx="${i}"><img src="${f}" alt="${esc(n)}" loading="lazy"><figcaption>${String(i + 1).padStart(2, '0')}. ${esc(n)}</figcaption></figure>`;
}).join('');

// ---------- typing ----------
const typing = document.querySelector('.typing');
const text = typing.dataset.text;
let t = 0;
(function type() {
  typing.textContent = text.slice(0, ++t);
  if (t < text.length) setTimeout(type, 110);
})();

// ---------- nav + progress ----------
const links = [...document.querySelectorAll('.gnb a')];
const bar = document.querySelector('.progress span');
const map = { home: 'home', about: 'about', ability: 'about', portfolio: 'portfolio', analysis: 'portfolio', book: 'portfolio', contact: 'contact' };
const secs = Object.keys(map).map(id => document.getElementById(id));
function onScroll() {
  const h = document.documentElement;
  bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
  let cur = 'home';
  secs.forEach(s => { if (s.getBoundingClientRect().top <= innerHeight * 0.35) cur = map[s.id]; });
  if (innerHeight + scrollY >= h.scrollHeight - 4) cur = 'contact';
  links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + cur));
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- reveal ----------
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---------- slider ----------
document.querySelectorAll('.slider .arrow').forEach(b => b.addEventListener('click', () => {
  const step = pagesEl.querySelector('figure').offsetWidth + 20;
  pagesEl.scrollBy({ left: b.classList.contains('next') ? step : -step });
}));

// ---------- lightbox ----------
const lb = document.getElementById('lightbox');
const lbImg = lb.querySelector('img');
const lbCount = lb.querySelector('.count');
const all = pageNames.map((_, i) => `images/page${String(i + 1).padStart(2, '0')}.jpg`);
let cur = 0;
function show(i) {
  cur = (i + all.length) % all.length;
  lbImg.src = all[cur];
  lbImg.alt = pageNames[cur];
  lbCount.textContent = `${cur + 1} / ${all.length}`;
}
function open(src) {
  show(Math.max(0, all.indexOf(src)));
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
}
function close() { lb.hidden = true; document.body.style.overflow = ''; }
document.addEventListener('click', e => {
  const z = e.target.closest('[data-zoom]');
  if (z) return open(z.dataset.zoom);
  const f = e.target.closest('#pages figure');
  if (f) return open(all[+f.dataset.idx]);
});
lb.querySelector('.close').onclick = close;
lb.querySelector('.prev').onclick = () => show(cur - 1);
lb.querySelector('.next').onclick = () => show(cur + 1);
lb.addEventListener('click', e => { if (e.target === lb) close(); });
addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') show(cur - 1);
  if (e.key === 'ArrowRight') show(cur + 1);
});
