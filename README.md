# Minji Portfolio 2026

정적 HTML 기반 포트폴리오입니다.  
파일 수정은 `index.html` 한 곳에서 대부분 가능합니다.

이번 버전은 사용자가 제공한 `all_rounder_marketer_portfolio.html`의 에디토리얼 무드를 기반으로
마케팅 기획·콘텐츠 운영 포지션에 사용할 수 있는 포트폴리오형 웹페이지로 재구성했습니다.
경력 나열보다 히어로 비주얼, 일하는 방식, 프로젝트 아카이브, 공개 가능한 임팩트 지표가 먼저 읽히도록 설계했습니다.

- `index.html` : 배포용 정적 페이지
- `public/docs/minji_b2b_marketing_portfolio.html` : 포트폴리오 PDF 원본 HTML
- `public/docs/minji_b2b_marketing_portfolio.pdf` : 제출용 보조 PDF
- `public/images/hero/minji-office-editorial-ai.png` : 히어로 비주얼 이미지

## 프로필 사진 반영

현재 페이지는 첨부된 AI 생성 이미지를 히어로 비주얼로 사용합니다.  
이미지 근처에는 `*이 이미지는 생성형 AI로 제작되었습니다.` 고지를 포함했습니다.

## 문서 링크

사이트 내 다운로드 버튼은 아래 파일을 사용합니다.

- `/public/docs/minji_resume.pdf`
- `/public/docs/minji_b2b_marketing_portfolio.pdf`
- `/public/docs/minji_marketing_portfolio.pdf`

## 로컬 미리보기

```bash
cd "minji-portfolio-2026"
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173` 접속

## PDF 재생성

`public/docs/minji_b2b_marketing_portfolio.html`을 수정한 뒤 Chrome 또는 Playwright로 PDF를 다시 만들면 됩니다.
현재 저장된 PDF는 A4 기준 6페이지입니다.

## GitHub 업로드

프로젝트 루트(`/Users/office/Documents/New project 2`) 기준:

```bash
git add "minji-portfolio-2026"
git commit -m "Add deploy-ready 2026 portfolio homepage"
git push origin <your-branch>
```

## Vercel 배포

1. Vercel에서 **New Project** 생성
2. 이 저장소 연결
3. **Root Directory**는 저장소 구조에 맞게 지정
   - `index.html`이 저장소 루트에 있으면 `./`
   - 서브폴더 안에 있으면 해당 폴더명 (예: `minji-portfolio-2026`)
4. Framework Preset은 `Other`
5. Deploy

`vercel.json`이 포함되어 있어 clean URL 설정이 적용됩니다.

## 404 Not Found가 뜰 때

아래 2가지를 먼저 확인하세요.

1. `Settings > General > Root Directory`가 실제 파일 위치와 일치하는지
2. 최신 커밋이 배포됐는지 (`Deployments`에서 최신 배포 확인)

`Redeploy` 버튼이 안 보이면, 파일 1줄 수정 후 커밋/푸시하면 새 배포가 자동으로 생성됩니다.
