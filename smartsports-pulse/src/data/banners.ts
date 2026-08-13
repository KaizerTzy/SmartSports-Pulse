export type BannerSlot = 'sidebar' | 'in-article' | 'footer' | 'home';

export type AffiliateBanner = {
  id: string;
  slot: BannerSlot;
  kicker: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  rel: string;
};

/**
 * 제휴 배너 슬롯.
 * 실제 파트너 URL이 준비되면 href만 교체하면 됩니다.
 * 불법 운영 사이트, 보장 수익 문구, 도박 키워드 랜딩은 넣지 않습니다.
 */
export const BANNERS: AffiliateBanner[] = [
  {
    id: 'analysis-board',
    slot: 'sidebar',
    kicker: '제휴',
    title: '분석 보드를 한 화면에',
    body: '일정 밀도, 슈팅 품질, 결장 명단을 한 장에 모아 보는 습관부터 만듭니다.',
    cta: '입문 가이드 보기',
    href: '/guides/sports-analysis-basics',
    rel: 'noopener',
  },
  {
    id: 'odds-lab',
    slot: 'in-article',
    kicker: '제휴',
    title: '배당을 확률로 번역하는 연습장',
    body: '암묵 확률과 오버라운드를 직접 계산해 보면, 숫자가 훨씬 덜 낯설게 느껴집니다.',
    cta: '배당 해설 가이드',
    href: '/guides/odds-explained',
    rel: 'noopener',
  },
  {
    id: 'preview-desk',
    slot: 'home',
    kicker: '제휴',
    title: 'AI 초안, 사람 검증',
    body: '모델이 써 준 프리뷰를 그대로 받아들이지 않고, 다섯 단계로 걸러 읽는 법을 배웁니다.',
    cta: '프리뷰 활용법',
    href: '/guides/ai-preview-playbook',
    rel: 'noopener',
  },
  {
    id: 'journal-kit',
    slot: 'footer',
    kicker: '제휴',
    title: '가설-근거-결과 일지 템플릿',
    body: '기억에 의존하지 말고 한 경기씩 남겨 보세요. 복기가 다음 분석의 재료가 됩니다.',
    cta: '루틴 글 읽기',
    href: '/blog/analysis-journal-template',
    rel: 'noopener',
  },
];

export function bannersFor(slot: BannerSlot): AffiliateBanner[] {
  return BANNERS.filter((banner) => banner.slot === slot);
}
