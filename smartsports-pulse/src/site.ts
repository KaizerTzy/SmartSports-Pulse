export const SITE = {
  name: 'SmartSports Pulse',
  nameKo: '스마트스포츠 펄스',
  domain: 'https://smart-sportshq.com',
  tagline: '숫자 뒤에 숨은 경기를 쉽게 읽는 법',
  description:
    '초보 스포츠 팬과 분석 입문자를 위한 경기 분석 가이드, 배당 해설, AI 경기 프리뷰. 확률을 읽고, 근거를 남기고, 결과를 복기하는 습관을 만듭니다.',
  lang: 'ko',
  locale: 'ko_KR',
  email: 'editorial@smart-sportshq.com',
  twitter: '@smartsportspulse',
} as const;

export const CATEGORIES = [
  { slug: 'analysis', label: '분석 가이드', blurb: '경기 전 무엇을, 어떤 순서로 볼지' },
  { slug: 'odds', label: '배당 해설', blurb: '숫자를 확률과 마진으로 번역하기' },
  { slug: 'preview', label: '경기 프리뷰', blurb: 'AI 초안을 사람이 검증하는 법' },
  { slug: 'data', label: '데이터 리터러시', blurb: '지표의 함정과 표본의 크기' },
  { slug: 'routine', label: '초보 루틴', blurb: '일지, 복기, 책임 있는 소비' },
] as const;

export type CategoryLabel = (typeof CATEGORIES)[number]['label'];

export const NAV = [
  { href: '/guides', label: '가이드' },
  { href: '/blog', label: '아티클' },
  { href: '/previews', label: '프리뷰' },
  { href: '/about', label: '소개' },
] as const;
