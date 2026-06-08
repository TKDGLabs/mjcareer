# Minji Portfolio 2026

정적 HTML 기반의 취업용 마케팅 포트폴리오입니다.  
핵심 화면은 `index.html`에서 관리합니다.

## 구성

- `index.html` : 배포용 정적 페이지
- `public/docs/minji_resume.pdf` : Resume PDF 버튼에 연결되는 이력서
- `public/images/projects/` : 공개 가능한 실제 업무 사례 이미지

## 현재 포지셔닝

콘텐츠·채널 운영 기반의 마케팅 PM형 실무자 포트폴리오입니다.  
특정 회사 전용 문구를 줄이고, 마케팅 기획/운영, 콘텐츠·채널 운영, AE/PM, 커머스 마케팅에 범용으로 사용할 수 있게 정리했습니다.

## 로컬 미리보기

```bash
python3 -m http.server 4181
```

브라우저에서 `http://localhost:4181` 접속

## 배포 메모

`vercel.json`이 포함되어 있어 루트의 `index.html`을 정적 페이지로 배포하는 구성을 기준으로 합니다.
