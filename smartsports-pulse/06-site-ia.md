# Prompt 6 — Site IA (Phase 1 WordPress)

Sources: approved positioning, categories, content system, voice/safety, SEO map.  
Constraint: simple WordPress **blog**, not an app. English slugs; Korean UI labels.  
Status: **draft — waiting for approval of nav and required pages.**

---

## URL tree

Vanilla WordPress. Category base = `topics` so we do **not** need a permalink plugin. Posts are evergreen `/%postname%/`.

```
/                              Home (latest posts + short mission; not a live board)
/about/                        소개
/privacy/                      개인정보처리방침
/topics/odds-math/             배당 계산 (category archive)
/topics/markets/               마켓 가이드
/topics/football/              유럽 축구
/topics/baseball/              야구
/{postname}/                   Single post (English kebab-case)
```

WP XML sitemap via core/plugin is fine. **No** public `/sitemap/` HTML page in nav.

**Not in the tree:** `/blog/` (home is the blog), `/shop/`, `/contact/`, `/disclaimer/` (footer + About already carry the educational lines), tag archives in nav, author archives in nav, live `/odds/` boards.

If you later want `/odds-math/` with **no** `/topics/` prefix, that is a Phase 2 permalink tweak — not required to launch.

---

## Top nav (Phase 1, short)

Logo (SmartSports Pulse) → `/`

| UI label (Korean) | Path |
|---|---|
| 배당 계산 | `/topics/odds-math/` |
| 마켓 가이드 | `/topics/markets/` |
| 유럽 축구 | `/topics/football/` |
| 야구 | `/topics/baseball/` |

Four items. **소개** and **개인정보처리방침** live in the footer, not the top bar. No 입문, 분석, 뉴스, 검색-as-item (WP search widget is optional chrome, not a nav link).

---

## Footer essentials (every page)

Locked copy, not new slogans:

1. Brand: `SmartSports Pulse`  
2. `본 사이트는 스포츠 분석 및 교육용 정보를 제공하며, 어떠한 형태의 실제 베팅도 진행하지 않습니다.`  
3. 19+ / responsible-analysis **placeholder** until you write the sentence  
4. `이 글은 교육용 가상 예시이며, 승부 예측이 아닙니다.`  
5. Links: 소개 (`/about/`) · 개인정보처리방침 (`/privacy/`)

No social icons (none named). **No ad units** at launch (empty chrome). No “추천 사이트.” No Contact link unless you add Contact later.

---

## Required at launch vs excluded

**Required (build these)**

| Page | Why |
|---|---|
| Home `/` | Hub: mission one-liner + 4 category doorways + latest guides. Static, shareable. |
| About `/about/` | Locked: project, SS Pulse Team, what 분석 means, bilingual brand, educational-only, 19+ placeholder. |
| Privacy `/privacy/` | Boring legal page. Needed for a public WP site; I will **not** invent policy text — placeholder until you supply it (same rule as 19+). |
| 4 category archives | The nav. Each lists posts in that pillar only. |
| Posts (batch of 8, then 9–10) | The library. |

**Excluded at launch (and why)**

| Item | Why |
|---|---|
| Shop / Cart / Account | Not a store. The site does not take bets or sell products. |
| Contact | No inbox or public person decided. A form with nobody behind it is vanity. Footer legal lines already state we do not process bets. |
| Disclaimer as its own URL | Duplicates the locked footer. About can repeat the educational sentence. |
| 입문 / Start here | Parked (tag or later page). First 배당 계산 posts *are* the start. |
| Newsletter / pop-up | Not asked; fights calm voice. |
| Live boards, match listings, “today” | Locked out of Phase 1. |
| Language switcher | Site is Korean-only. |
| Ad / partner pages | Empty chrome; no named partners. |

---

## Post URL pattern

**Use:** WordPress “Post name” → `/%postname%/`  
**Do not use:** `/%year%/%monthnum%/%postname%/`

Rationale: these are evergreen 가이드s, not news or picks; dates in the path make the library look like a match-day blog.

Slugs: English kebab-case, title-safe (no bet/casino/gambling). Proposed for the locked 10 — **confirm or replace; I will not invent extra posts.**

| # | Working title | Proposed slug |
|---|---|---|
| 1 | 소수점 배당, 1만원이면 얼마가 되나 | `decimal-odds-10000-won` |
| 2 | 프로토 배당표 읽는 법 (10만원 예시) | `proto-odds-table-100000-won` |
| 3 | 단폴과 다폴의 차이, 선택이 늘수록 위험은 | `single-vs-parlay` |
| 4 | 다폴 배당 곱셈, 가상 3경기 10만원 | `parlay-odds-multiplication` |
| 5 | 승무패가 의미하는 것 (가상 축구 예시) | `what-seungmupae-means` |
| 6 | 머니라인이 의미하는 것 (가상 야구 예시) | `what-moneyline-means` |
| 7 | 축구에서 오버언더 2.5가 쓰이는 이유 | `football-over-under-2-5` |
| 8 | 야구 오버언더, 이닝과 득점 세는 법 | `baseball-over-under-innings` |
| 9 | 핸디캡 -1.5 읽는 법 | `handicap-minus-1-5` |
| 10 | 배당 2.50, 받을 돈과 순수익은 다르다 | `decimal-payout-vs-profit` |

Each post: one category, optional tag `proto` only where true (not nav). Byline: SS Pulse Team.

---

## Home, in one paragraph

Not Totohot.net. A short Korean mission (payout literacy, not picks), four category links, then the post list. Reading order 1→10 can be a simple numbered list on Home or About — not a second nav.

---

## Phase 2 parking lot (not launch nav)

- `/topics/` prefix removal (`/odds-math/` at root)  
- 입문 page  
- Contact (if you later give an email)  
- American odds posts (still under 배당 계산, not a new nav item)  
- 농구 (NBA/KBL), League of Legends  
- 전략  
- Standalone 마켓 오버언더 post  
- Sidebar/footer **ad** units and named partners  
- Cookie banner / extra legal pages you write  
- Newsletter, HTML sitemap, author-as-personality, live boards, Shop

---

## Decisions to confirm

1. **Top nav = the four categories only** (About/Privacy in footer). Approve or add/cut.  
2. **Required pages = Home, About, Privacy, four archives.** Approve?  
3. **Keep Contact and Shop excluded** at launch?  
4. **Category paths `/topics/{slug}/`** (vanilla WP) vs you want root `/odds-math/` enough to add a permalink plugin now?  
5. **Post slugs 1–10** as tabled, or replace any?
