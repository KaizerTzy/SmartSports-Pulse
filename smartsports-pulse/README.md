# SmartSports Pulse

초보 스포츠 팬과 분석 입문자를 위한 한국어 데스크. 경기 분석 가이드, 배당 해설, AI 경기 프리뷰를 [smart-sportshq.com](https://smart-sportshq.com)에 발행합니다.

- 제목에 bet / casino / slots / gambling 및 도박 홍보 표현을 쓰지 않습니다.
- 수익·적중을 보장하지 않습니다.
- 불법 사이트를 홍보하지 않습니다.

런치 카탈로그는 아티클 60편, 가이드 8편입니다. 제휴 배너는 기본값으로 내부 가이드를 가리킵니다. 합법 파트너 URL이 준비되면 `src/data/banners.ts`의 `href`만 바꾸면 됩니다.

## 로컬 실행

```bash
cd smartsports-pulse
npm install
npm run dev
```

프로덕션 빌드:

```bash
npm run build
npm run preview
```

`npm run build`는 글 제목의 금지 키워드를 먼저 검사합니다.

## 콘텐츠

| 경로 | 역할 |
| --- | --- |
| `src/content/guides` | 학습 경로 가이드 |
| `src/content/blog` | 아티클 |
| `src/data/banners.ts` | 제휴 배너 슬롯 (URL 교체) |
| `src/site.ts` | 사이트 메타 |

제휴 배너는 기본값으로 내부 가이드를 가리킵니다. 합법 파트너 URL이 준비되면 `href`만 바꾸면 됩니다.
