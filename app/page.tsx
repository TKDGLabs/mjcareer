const fitRows = [
  {
    task: "신규 리드 발굴",
    experience: "검색광고, 창업 블로그, 브랜드 채널 운영을 통해 고객 접점 콘텐츠를 구성했습니다.",
    action: "업종별 잠재 고객 리스트와 제안 가능 서비스를 정리하겠습니다."
  },
  {
    task: "제안·견적 준비",
    experience: "시장조사, 경쟁 비교, 마케팅 제안서 작성에 참여했습니다.",
    action: "고객 문제, 제안 범위, 필요 자료, 일정, 다음 액션이 보이는 제안서 구조를 만들겠습니다."
  },
  {
    task: "고객 커뮤니케이션",
    experience: "다수 병원 담당자의 요청, 수정사항, 승인 상태, 게시 일정을 정리했습니다.",
    action: "요청사항, 수정 이력, 완료 상태를 남기고 실행팀과 공유하는 운영표를 관리하겠습니다."
  },
  {
    task: "자사 매체 관리",
    experience: "블로그, 스마트스토어, SNS, 카페, 검색광고 등 채널별 콘텐츠 목적을 구분해 운영했습니다.",
    action: "서비스 자료와 포트폴리오를 콘텐츠 캘린더로 재정리하겠습니다."
  }
];

const quickFit = [
  ["일하는 방식", "섬세한 커뮤니케이션과 일정 관리"],
  ["경험 범위", "의료·뷰티, F&B, 커머스, B2B 고객사 운영"],
  ["운영 규모", "최대 8개 고객사 운영 흐름, 일 최대 25건 콘텐츠 상태 관리"],
  ["문서화", "시장조사, 제안서, 운영표, 체크리스트 정리"],
  ["매체 운영", "블로그, 스마트스토어, 카페, SNS, 검색광고 운영 경험"]
];

const cases = [
  {
    no: "01",
    title: "병원 B2B 고객사 콘텐츠 운영 PM",
    body:
      "다수 병원의 콘텐츠 요청, 수정사항, 검수 일정, 게시 상태가 동시에 움직이는 환경에서 고객사와 실행팀 사이의 커뮤니케이션을 정리했습니다.",
    point: "최대 8개 병원 운영 흐름 동시 관리, 일 최대 25건 수준의 콘텐츠 진행 상태 관리."
  },
  {
    no: "02",
    title: "신규 제품 시장조사·마케팅 제안서 작성",
    body:
      "해외 신규 제품 도입 과정에서 시장 상황, 경쟁 제품, 판매 포인트, 콘텐츠 방향을 정리한 마케팅 제안서 작성에 참여했습니다.",
    point: "실제 제안서 원본은 내부 자료로 공개하지 않고, 문서 구조와 사고 흐름 중심으로 재구성했습니다."
  },
  {
    no: "03",
    title: "F&B/커머스 채널 운영 및 리드 접점 설계",
    body:
      "검색광고, 블로그, 스마트스토어, 상세페이지 등 고객 접점 채널을 운영하며 브랜드가 발견되고 문의 또는 구매로 이어지는 흐름을 정리했습니다.",
    point: "참여 프로젝트 내 CTR 6.08%, 구매 전환 97건, 월 조회수 3,149, 방문자 +24.2% 등의 성과를 확인했습니다."
  }
];

export default function Page() {
  return (
    <main className="page">
      <style>{`
        @font-face {
          font-family: "Wanted Sans";
          src: url("/fonts/wanted/WantedSans-Regular.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Wanted Sans";
          src: url("/fonts/wanted/WantedSans-Bold.woff2") format("woff2");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Wanted Sans";
          src: url("/fonts/wanted/WantedSans-Black.woff2") format("woff2");
          font-weight: 900;
          font-style: normal;
          font-display: swap;
        }
        :root {
          --bg: #fffaf1;
          --paper: #fffdf8;
          --text: #15120d;
          --muted: #746a5c;
          --line: #eadfce;
          --blue: #b97800;
          --sun: #f6c744;
          --max: 1120px;
        }
        * { box-sizing: border-box; }
        body {
          margin: 0;
          background:
            linear-gradient(180deg, #fff7e8 0%, #fffdf8 320px, #ffffff 100%);
          color: var(--text);
          font-family: "Wanted Sans", Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }
        a { color: inherit; text-decoration: none; }
        .topbar {
          position: sticky;
          top: 0;
          z-index: 10;
          border-bottom: 1px solid var(--line);
          background: rgba(255, 253, 248, 0.94);
          backdrop-filter: blur(12px);
        }
        .topbar-inner {
          width: min(var(--max), calc(100% - 48px));
          min-height: 66px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .brand strong { display: block; font-size: 16px; font-weight: 900; }
        .brand span { color: var(--muted); font-size: 12px; }
        nav { display: flex; gap: 18px; color: #4f463c; font-size: 13px; font-weight: 700; white-space: nowrap; }
        .wrap { width: min(var(--max), calc(100% - 48px)); margin: 0 auto; }
        section { padding: 84px 0; border-bottom: 1px solid var(--line); }
        .hero { min-height: 650px; display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.82fr); align-items: center; gap: 54px; }
        .eyebrow { margin: 0 0 22px; color: var(--blue); font-size: 14px; font-weight: 900; }
        h1, h2, h3, p { margin-top: 0; }
        h1 { max-width: 760px; margin-bottom: 24px; font-size: 64px; line-height: 1.08; font-weight: 900; }
        h2 { margin-bottom: 16px; font-size: 50px; line-height: 1.08; font-weight: 900; }
        h3 { margin-bottom: 10px; font-size: 26px; line-height: 1.22; font-weight: 900; }
        .lead { max-width: 720px; margin-bottom: 34px; color: #4e463d; font-size: 19px; line-height: 1.72; }
        .actions { display: flex; flex-wrap: wrap; gap: 10px; }
        .button { display: inline-flex; min-height: 46px; align-items: center; justify-content: center; border: 1px solid #b97800; border-radius: 6px; background: var(--sun); color: #15120d; padding: 12px 16px; font-size: 14px; font-weight: 800; }
        .button.secondary { background: transparent; color: var(--text); }
        .quick { border: 1px solid #d7c7aa; border-radius: 8px; background: linear-gradient(180deg, #fffdf8 0%, #fff9ec 100%); padding: 26px; box-shadow: 0 18px 42px rgba(130, 82, 0, 0.08); }
        .quick h2 { color: var(--blue); font-size: 22px; }
        dl { margin: 0; border-top: 1px solid var(--line); }
        .quick-row { display: grid; grid-template-columns: 118px minmax(0, 1fr); gap: 16px; border-bottom: 1px solid var(--line); padding: 14px 0; }
        dt { color: var(--muted); font-size: 13px; font-weight: 800; }
        dd { margin: 0; color: #23262b; font-size: 14px; line-height: 1.55; }
        table { width: 100%; border-collapse: collapse; table-layout: fixed; background: var(--paper); }
        th, td { border: 1px solid var(--line); padding: 18px; vertical-align: top; text-align: left; }
        th { background: #fff4d2; color: #5f4100; font-size: 14px; font-weight: 900; }
        td { color: #3b332b; font-size: 15px; line-height: 1.62; }
        .case { display: grid; grid-template-columns: 88px minmax(0, 1fr); gap: 28px; border-top: 2px solid var(--text); padding-top: 22px; margin-top: 22px; }
        .case-no { color: var(--blue); font-size: 20px; font-weight: 900; }
        .sample-grid, .plan { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
        .sample, .plan-step { border: 1px solid var(--line); border-radius: 8px; background: var(--paper); padding: 22px; }
        .plan-step { border-top: 2px solid var(--blue); }
        .sample ul, .sample ol, .plan-step ul { margin: 0; padding-left: 20px; color: #34383d; font-size: 15px; line-height: 1.72; }
        .note { margin-top: 28px; border-left: 4px solid var(--blue); background: #eef3ff; padding: 18px 20px; color: #27324f; font-size: 15px; line-height: 1.68; }
        @media (max-width: 960px) {
          .topbar-inner { align-items: flex-start; flex-direction: column; padding: 14px 0; gap: 10px; }
          nav { width: 100%; overflow-x: auto; padding-bottom: 4px; }
          .hero { min-height: auto; grid-template-columns: 1fr; gap: 30px; padding-top: 46px; }
          .sample-grid, .plan { grid-template-columns: 1fr; }
        }
        @media (max-width: 720px) {
          .wrap, .topbar-inner { width: min(var(--max), calc(100% - 28px)); }
          section { padding: 58px 0; }
          h1 { font-size: 42px; line-height: 1.12; }
          h2 { font-size: 34px; line-height: 1.16; }
          .lead { font-size: 16px; }
          .quick-row, .case { grid-template-columns: 1fr; gap: 0; }
          table { display: block; overflow-x: auto; white-space: nowrap; }
        }
      `}</style>

      <header className="topbar" aria-label="주요 메뉴">
        <div className="topbar-inner">
          <a className="brand" href="#top">
            <strong>김민지</strong>
          <span>Marketing Planning &amp; Content Operations</span>
          </a>
          <nav>
            <a href="#fit">Profile</a>
            <a href="#work">Work</a>
            <a href="#documents">Docs</a>
            <a href="#plan">Plan</a>
            <a href="/docs/minji_resume.pdf">Resume</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <div className="wrap" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow">MARKETING PLANNING / CONTENT OPERATIONS</p>
            <h1 id="hero-title">정리된 말과 따뜻한 감각으로, 브랜드의 다음 액션을 만듭니다.</h1>
            <p className="lead">
              고객사 커뮤니케이션, 제안 자료 정리, 콘텐츠·매체 운영, 프로젝트 일정 관리를 경험한
              3년 7개월 경력 마케팅 실무자 김민지입니다. 흩어진 요청을 보기 쉬운 문서와 실행 흐름으로 바꾸고,
              브랜드가 고객에게 닿는 접점을 차분하게 다듬습니다.
            </p>
            <div className="actions">
              <a className="button" href="#work">작업 사례 보기</a>
              <a className="button secondary" href="/docs/minji_resume.pdf">이력서 PDF</a>
              <a className="button secondary" href="mailto:mjk8410@naver.com">메일 보내기</a>
            </div>
          </div>

          <aside className="quick" aria-label="직무 적합성 요약">
            <h2>Profile</h2>
            <dl>
              {quickFit.map(([term, desc]) => (
                <div className="quick-row" key={term}>
                  <dt>{term}</dt>
                  <dd>{desc}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        <section id="fit">
          <p className="eyebrow">ROLE FIT</p>
          <h2>채용 공고의 요구를 제 업무 언어로 번역합니다.</h2>
          <p className="lead">
            마케팅 기획 직무는 예쁜 콘텐츠를 혼자 만드는 일보다, 고객과 내부 팀이 같은 정보를 보고
            다음 액션을 결정할 수 있게 만드는 일에 가깝다고 이해합니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>채용 공고의 업무</th>
                <th>제 경험</th>
                <th>입사 후 바로 할 수 있는 일</th>
              </tr>
            </thead>
            <tbody>
              {fitRows.map((row) => (
                <tr key={row.task}>
                  <td><strong>{row.task}</strong></td>
                  <td>{row.experience}</td>
                  <td>{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="work">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>관련 사례 3가지.</h2>
          {cases.map((item) => (
            <article className="case" key={item.no}>
              <span className="case-no">{item.no}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <p><strong>{item.point}</strong></p>
              </div>
            </article>
          ))}
        </section>

        <section id="documents">
          <p className="eyebrow">DOCUMENT SAMPLES</p>
          <h2>실제 자료 대신, 정리 방식을 보여드립니다.</h2>
          <p className="lead">
            내부 제안서나 운영표를 그대로 공개하지 않고, 마케팅 기획 업무에 필요한 정보 구조화 방식을
            포트폴리오용 샘플로 재구성했습니다.
          </p>
          <div className="sample-grid">
            <article className="sample">
              <h3>B2B 콘텐츠 제작 제안서 구조</h3>
              <ol>
                <li>고객 상황</li>
                <li>해결해야 할 문제</li>
                <li>프로젝트 목표</li>
                <li>제안 범위와 제작 산출물</li>
                <li>일정과 필요 자료</li>
                <li>커뮤니케이션 방식</li>
              </ol>
            </article>
            <article className="sample">
              <h3>신규 리드 관리표 구조</h3>
              <ul>
                <li>기업명 / 업종 / 예상 니즈</li>
                <li>접점 채널 / 담당자 / 현재 상태</li>
                <li>다음 액션 / 팔로업 날짜</li>
                <li>확인 필요 자료</li>
              </ul>
            </article>
            <article className="sample">
              <h3>자사 매체 4주 운영안</h3>
              <ul>
                <li>Week 1: 포트폴리오 케이스 소개</li>
                <li>Week 2: 공공기관/브랜드 사례 정리</li>
                <li>Week 3: 제작 프로세스 콘텐츠</li>
                <li>Week 4: 문의 CTA와 서비스 페이지 개선</li>
              </ul>
            </article>
          </div>
          <p className="note">
            Disclosure: 본 포트폴리오는 회사 및 클라이언트의 내부 자료를 공개하지 않습니다.
            광고 관리자 화면, 매출 데이터, 병원명, 내부 운영표, 실제 제안서 원본은 제외하고
            공개 가능한 범위의 역할, 업무 흐름, 문서 구조, 참여 성과 중심으로 재구성했습니다.
          </p>
        </section>

        <section id="plan">
          <p className="eyebrow">FIRST 30 DAYS</p>
          <h2>입사 후 30일 안에 정리할 수 있는 것.</h2>
          <div className="plan">
            <article className="plan-step">
              <h3>1주차</h3>
              <ul>
                <li>기존 포트폴리오와 서비스 자료 구조 파악</li>
                <li>자사 매체 운영 현황 정리</li>
                <li>리드 관리 방식과 고객 문의 흐름 확인</li>
              </ul>
            </article>
            <article className="plan-step">
              <h3>2주차</h3>
              <ul>
                <li>업종별 잠재 고객 리스트 초안 작성</li>
                <li>제안서 기본 목차 템플릿 정리</li>
                <li>블로그/홈페이지 콘텐츠 개선 포인트 정리</li>
              </ul>
            </article>
            <article className="plan-step">
              <h3>3~4주차</h3>
              <ul>
                <li>자사 홍보 콘텐츠 캘린더 제안</li>
                <li>고객 문의 응대/제안 준비 프로세스 문서화</li>
                <li>리드 상태별 후속 액션 관리표 운영</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="contact">
          <p className="eyebrow">CONTACT</p>
          <h2>마케팅 기획·콘텐츠 운영 실무자로 지원합니다.</h2>
          <p className="lead">
            회사 내부 호칭과 직급 체계는 존중하되, 고객 커뮤니케이션, 제안 자료 정리, 자사 매체 운영,
            신규 리드 관리까지 포함되는 책임 범위에서 기여하고 싶습니다.
          </p>
        </section>
      </div>
    </main>
  );
}
