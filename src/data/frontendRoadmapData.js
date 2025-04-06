// src/data/frontendRoadmapData.js

// 직무별 로드맵 노드 정보
export const roadmapNodes = {
  '프론트엔드 개발자': {
    // 인터넷 기초
    'how-internet-works': {
      title: '인터넷 작동 방식',
      description: '인터넷이 어떻게 작동하는지 이해하는 것은 웹 개발의 기초입니다.',
      resources: [
        { title: '인터넷 작동 방식', url: 'https://developer.mozilla.org/ko/docs/Learn/Common_questions/How_does_the_Internet_work' },
        { title: '인터넷의 이해', url: 'https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm' }
      ]
    },
    'http': {
      title: 'HTTP란 무엇인가?',
      description: 'HTTP(Hypertext Transfer Protocol)는 웹에서 데이터를 주고받는 방식을 정의합니다.',
      resources: [
        { title: 'MDN - HTTP 개요', url: 'https://developer.mozilla.org/ko/docs/Web/HTTP/Overview' },
        { title: 'HTTP 기초', url: 'https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP' }
      ]
    },
    'domain-name': {
      title: '도메인 이름이란?',
      description: '도메인 이름은 IP 주소를 인간이 읽을 수 있는 형태로 변환한 것입니다.',
      resources: [
        { title: 'MDN - 도메인 이름이란?', url: 'https://developer.mozilla.org/ko/docs/Learn/Common_questions/What_is_a_domain_name' },
        { title: '도메인 이름 시스템', url: 'https://www.cloudflare.com/ko-kr/learning/dns/what-is-dns/' }
      ]
    },
    'hosting': {
      title: '호스팅이란?',
      description: '웹 호스팅은 웹사이트 파일을 저장하고 인터넷에 접근 가능하게 하는 서비스입니다.',
      resources: [
        { title: '웹 호스팅 기초', url: 'https://www.hostinger.com/tutorials/what-is-web-hosting' },
        { title: '다양한 호스팅 유형', url: 'https://www.website.com/beginnerguide/webhosting/6/1/what-is-web-hosting?.ws' }
      ]
    },
    'dns': {
      title: 'DNS와 작동 방식',
      description: 'DNS(Domain Name System)는 도메인 이름을 IP 주소로 변환하는 시스템입니다.',
      resources: [
        { title: 'MDN - DNS란?', url: 'https://developer.mozilla.org/ko/docs/Glossary/DNS' },
        { title: 'DNS 작동 방식', url: 'https://www.cloudflare.com/ko-kr/learning/dns/what-is-dns/' }
      ]
    },
    'browsers': {
      title: '브라우저와 작동 방식',
      description: '웹 브라우저가 어떻게 웹 페이지를 로드하고 렌더링하는지 이해하는 것은 프론트엔드 개발자에게 필수적입니다.',
      resources: [
        { title: '브라우저의 작동 방식', url: 'https://www.html5rocks.com/ko/tutorials/internals/howbrowserswork/' },
        { title: '브라우저 렌더링 엔진', url: 'https://velog.io/@wijoonwu/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95' }
      ]
    },

    // HTML
    'html-basics': {
      title: 'HTML 기초 배우기',
      description: 'HTML의 기본 구조와 요소에 대해 학습합니다.',
      resources: [
        { title: 'MDN - HTML 시작하기', url: 'https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started' },
        { title: 'HTML 기초', url: 'https://www.w3schools.com/html/html_intro.asp' }
      ]
    },
    'semantic-html': {
      title: '시맨틱 HTML 작성하기',
      description: '의미 있는 HTML 요소를 사용하여 문서의 구조와 의미를 명확하게 표현하는 방법을 학습합니다.',
      resources: [
        { title: 'MDN - HTML 시맨틱', url: 'https://developer.mozilla.org/ko/docs/Glossary/Semantics#HTML_%EC%8B%9C%EB%A7%A8%ED%8B%B1' },
        { title: '시맨틱 HTML 가이드', url: 'https://www.semrush.com/blog/semantic-html5-guide/' }
      ]
    },
    'forms-validation': {
      title: '폼과 유효성 검사',
      description: 'HTML 폼을 생성하고 사용자 입력의 유효성을 검사하는 방법을 학습합니다.',
      resources: [
        { title: 'MDN - 웹 양식 가이드', url: 'https://developer.mozilla.org/ko/docs/Learn/Forms' },
        { title: 'HTML 폼 유효성 검사', url: 'https://developer.mozilla.org/ko/docs/Learn/Forms/Form_validation' }
      ]
    },
    'accessibility': {
      title: '접근성',
      description: '모든 사용자가 웹 콘텐츠에 접근할 수 있도록 웹 접근성을 향상시키는 방법을 학습합니다.',
      resources: [
        { title: 'MDN - 접근성', url: 'https://developer.mozilla.org/ko/docs/Learn/Accessibility' },
        { title: 'WCAG 가이드라인', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/' }
      ]
    },
    'seo-basics': {
      title: 'SEO 기초',
      description: '검색 엔진 최적화(SEO)의 기본 원칙과 HTML에서 SEO를 향상시키는 방법을 학습합니다.',
      resources: [
        { title: 'MDN - SEO 기초', url: 'https://developer.mozilla.org/ko/docs/Glossary/SEO' },
        { title: '기술적 SEO 가이드', url: 'https://www.semrush.com/blog/technical-seo/' }
      ]
    },

    // CSS
    'css-basics': {
      title: 'CSS 기초 배우기',
      description: 'CSS의 기본 구문, 선택자, 속성에 대해 학습합니다.',
      resources: [
        { title: 'MDN - CSS 첫걸음', url: 'https://developer.mozilla.org/ko/docs/Learn/CSS/First_steps/Getting_started' },
        { title: 'CSS 기초', url: 'https://www.w3schools.com/css/css_intro.asp' }
      ]
    },
    'layouts': {
      title: '레이아웃 만들기',
      description: 'CSS를 사용하여 다양한 레이아웃을 구성하는 방법을 학습합니다.',
      resources: [
        { title: 'MDN - CSS 레이아웃', url: 'https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout' },
        { title: 'CSS 레이아웃 기법', url: 'https://www.w3schools.com/css/css_website_layout.asp' }
      ]
    },
    'responsive-design': {
      title: '반응형 디자인',
      description: '다양한 화면 크기와 기기에 맞게 적응하는 반응형 웹 디자인을 학습합니다.',
      resources: [
        { title: 'MDN - 반응형 디자인', url: 'https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Responsive_Design' },
        { title: '반응형 웹 디자인 기초', url: 'https://web.dev/responsive-web-design-basics/' }
      ]
    },
    'css-writing': {
      title: 'CSS 작성 방식',
      description: '효율적인 CSS 작성과 구조화 방법을 학습합니다.',
      resources: [
        { title: 'CSS 아키텍처 패턴', url: 'https://www.sitepoint.com/css-architecture-patterns/' },
        { title: 'CSS 방법론', url: 'https://www.creativebloq.com/features/css-methodologies' }
      ]
    },
    'tailwind': {
      title: 'Tailwind CSS',
      description: '유틸리티 우선 CSS 프레임워크인 Tailwind를 학습합니다.',
      resources: [
        { title: 'Tailwind CSS 공식 문서', url: 'https://tailwindcss.com/docs' },
        { title: 'Tailwind CSS 시작하기', url: 'https://tailwindcss.com/docs/installation' }
      ]
    },
    'BEM': {
      title: 'BEM 방법론',
      description: 'Block Element Modifier(BEM)는 CSS 클래스 명명 규칙을 통한 CSS 아키텍처 방법론입니다.',
      resources: [
        { title: 'BEM 소개', url: 'https://en.bem.info/methodology/quick-start/' },
        { title: 'BEM 명명 규칙', url: 'https://css-tricks.com/bem-101/' }
      ]
    },
    'sass': {
      title: 'Sass',
      description: 'CSS 전처리기인 Sass를 사용하여 더 효율적인 스타일시트를 작성하는 방법을 학습합니다.',
      resources: [
        { title: 'Sass 공식 문서', url: 'https://sass-lang.com/documentation' },
        { title: 'Sass 시작하기', url: 'https://sass-lang.com/guide' }
      ]
    },
    'postcss': {
      title: 'PostCSS',
      description: 'CSS 전처리기이자 후처리기인 PostCSS를 사용하여 CSS를 확장하는 방법을 학습합니다.',
      resources: [
        { title: 'PostCSS 공식 문서', url: 'https://postcss.org/docs/' },
        { title: 'PostCSS 플러그인', url: 'https://postcss.org/docs/plugins' }
      ]
    },

    // JavaScript
    'js-basics': {
      title: 'JavaScript 기초 배우기',
      description: '변수, 데이터 타입, 함수, 조건문, 반복문 등 JavaScript의 기본 개념을 학습합니다.',
      resources: [
        { title: 'MDN - JavaScript 첫걸음', url: 'https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps' },
        { title: 'JavaScript 기초', url: 'https://www.w3schools.com/js/js_intro.asp' }
      ]
    },
    'dom-manipulation': {
      title: 'DOM 조작 배우기',
      description: 'Document Object Model(DOM)을 JavaScript로 조작하는 방법을 학습합니다.',
      resources: [
        { title: 'MDN - DOM 조작', url: 'https://developer.mozilla.org/ko/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents' },
        { title: 'JavaScript DOM 튜토리얼', url: 'https://www.javascripttutorial.net/javascript-dom/' }
      ]
    },
    'fetch-api': {
      title: 'Fetch API / Ajax (XHR)',
      description: '서버와 비동기적으로 데이터를 주고받는 방법을 학습합니다.',
      resources: [
        { title: 'MDN - Fetch API 사용하기', url: 'https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch' },
        { title: 'Ajax 소개', url: 'https://developer.mozilla.org/ko/docs/Web/Guide/AJAX/Getting_Started' }
      ]
    },

    // 버전 관리
    'git': {
      title: 'Git',
      description: '분산 버전 관리 시스템인 Git을 사용하여 코드를 관리하는 방법을 학습합니다.',
      resources: [
        { title: 'Git 공식 문서', url: 'https://git-scm.com/doc' },
        { title: 'Git 시작하기', url: 'https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0' }
      ]
    },
    'github': {
      title: 'GitHub',
      description: 'Git 기반의 코드 호스팅 플랫폼인 GitHub를 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'GitHub 가이드', url: 'https://guides.github.com/' },
        { title: 'GitHub 시작하기', url: 'https://docs.github.com/ko/get-started' }
      ]
    },
    'gitlab': {
      title: 'GitLab',
      description: 'DevOps 플랫폼인 GitLab을 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'GitLab 문서', url: 'https://docs.gitlab.com/' },
        { title: 'GitLab 시작하기', url: 'https://docs.gitlab.com/ee/user/quickstart.html' }
      ]
    },
    'bitbucket': {
      title: 'Bitbucket',
      description: 'Git 기반의 코드 호스팅 플랫폼인 Bitbucket을 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'Bitbucket 문서', url: 'https://support.atlassian.com/bitbucket-cloud/' },
        { title: 'Bitbucket 시작하기', url: 'https://support.atlassian.com/bitbucket-cloud/docs/get-started' }
      ]
    },

    // 패키지 관리자
    'npm': {
      title: 'npm',
      description: 'Node.js 패키지 관리자인 npm을 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'npm 문서', url: 'https://docs.npmjs.com/' },
        { title: 'npm 시작하기', url: 'https://docs.npmjs.com/getting-started' }
      ]
    },
    'yarn': {
      title: 'Yarn',
      description: 'Facebook에서 개발한 패키지 관리자인 Yarn을 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'Yarn 문서', url: 'https://yarnpkg.com/getting-started' },
        { title: 'Yarn 시작하기', url: 'https://yarnpkg.com/getting-started/install' }
      ]
    },
    'pnpm': {
      title: 'pnpm',
      description: '빠르고 디스크 공간을 효율적으로 사용하는 패키지 관리자인 pnpm을 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'pnpm 문서', url: 'https://pnpm.io/ko/' },
        { title: 'pnpm 시작하기', url: 'https://pnpm.io/ko/installation' }
      ]
    },

    // 프레임워크
    'react': {
      title: 'React',
      description: 'Facebook에서 개발한 UI 라이브러리인 React를 학습합니다.',
      resources: [
        { title: 'React 공식 문서', url: 'https://reactjs.org/docs/getting-started.html' },
        { title: 'React 튜토리얼', url: 'https://ko.reactjs.org/tutorial/tutorial.html' }
      ]
    },
    'vue': {
      title: 'Vue.js',
      description: '점진적인 JavaScript 프레임워크인 Vue.js를 학습합니다.',
      resources: [
        { title: 'Vue.js 공식 문서', url: 'https://vuejs.org/guide/introduction.html' },
        { title: 'Vue.js 튜토리얼', url: 'https://vuejs.org/tutorial/' }
      ]
    },
    'angular': {
      title: 'Angular',
      description: 'Google에서 개발한 TypeScript 기반 프레임워크인 Angular를 학습합니다.',
      resources: [
        { title: 'Angular 공식 문서', url: 'https://angular.io/docs' },
        { title: 'Angular 튜토리얼', url: 'https://angular.io/tutorial' }
      ]
    },
    'svelte': {
      title: 'Svelte',
      description: '컴파일 시점에 UI를 생성하는 혁신적인 프레임워크인 Svelte를 학습합니다.',
      resources: [
        { title: 'Svelte 공식 문서', url: 'https://svelte.dev/docs' },
        { title: 'Svelte 튜토리얼', url: 'https://svelte.dev/tutorial' }
      ]
    },
    'solid': {
      title: 'Solid',
      description: '반응형 UI 라이브러리인 Solid를 학습합니다.',
      resources: [
        { title: 'Solid 공식 문서', url: 'https://www.solidjs.com/docs' },
        { title: 'Solid 튜토리얼', url: 'https://www.solidjs.com/tutorial' }
      ]
    },
    'qwik': {
      title: 'Qwik',
      description: '즉시 로드 가능한 웹 애플리케이션을 위한 프레임워크인 Qwik을 학습합니다.',
      resources: [
        { title: 'Qwik 공식 문서', url: 'https://qwik.builder.io/docs/overview/' },
        { title: 'Qwik 시작하기', url: 'https://qwik.builder.io/docs/quickstart/' }
      ]
    },

    // 빌드 도구
    'eslint': {
      title: 'ESLint',
      description: 'JavaScript 코드 품질을 검사하는 린터입니다.',
      resources: [
        { title: 'ESLint 공식 문서', url: 'https://eslint.org/docs/user-guide/' },
        { title: 'ESLint 시작하기', url: 'https://eslint.org/docs/user-guide/getting-started' }
      ]
    },
    'prettier': {
      title: 'Prettier',
      description: '코드 스타일을 자동으로 포맷팅하는 도구입니다.',
      resources: [
        { title: 'Prettier 공식 문서', url: 'https://prettier.io/docs/en/' },
        { title: 'Prettier 시작하기', url: 'https://prettier.io/docs/en/install.html' }
      ]
    },
    'vite': {
      title: 'Vite',
      description: '빠른 개발 서버와 번들링을 제공하는 모던 빌드 도구입니다.',
      resources: [
        { title: 'Vite 공식 문서', url: 'https://vitejs.dev/guide/' },
        { title: 'Vite 시작하기', url: 'https://vitejs.dev/guide/#scaffolding-your-first-vite-project' }
      ]
    },
    'esbuild': {
      title: 'esbuild',
      description: 'Go로 작성된 빠른 JavaScript 번들러입니다.',
      resources: [
        { title: 'esbuild 공식 문서', url: 'https://esbuild.github.io/' },
        { title: 'esbuild 시작하기', url: 'https://esbuild.github.io/getting-started/' }
      ]
    },
    'swc': {
      title: 'SWC',
      description: 'Rust로 작성된 빠른 JavaScript/TypeScript 컴파일러입니다.',
      resources: [
        { title: 'SWC 공식 문서', url: 'https://swc.rs/docs/usage/swc-cli' },
        { title: 'SWC 시작하기', url: 'https://swc.rs/docs/usage/getting-started' }
      ]
    },
    'webpack': {
      title: 'Webpack',
      description: '모듈 번들러의 대표적인 도구입니다.',
      resources: [
        { title: 'Webpack 공식 문서', url: 'https://webpack.js.org/concepts/' },
        { title: 'Webpack 시작하기', url: 'https://webpack.js.org/guides/getting-started/' }
      ]
    },
    'rollup': {
      title: 'Rollup',
      description: '효율적인 번들링을 위한 모듈 번들러입니다.',
      resources: [
        { title: 'Rollup 공식 문서', url: 'https://rollupjs.org/guide/en/' },
        { title: 'Rollup 시작하기', url: 'https://rollupjs.org/guide/en/#quick-start' }
      ]
    },
    'parcel': {
      title: 'Parcel',
      description: '설정이 필요 없는 번들러입니다.',
      resources: [
        { title: 'Parcel 공식 문서', url: 'https://parceljs.org/docs/' },
        { title: 'Parcel 시작하기', url: 'https://parceljs.org/docs/getting-started/webapp/' }
      ]
    },

    // 테스팅
    'vitest': {
      title: 'Vitest',
      description: 'Vite 기반의 빠른 테스트 러너인 Vitest를 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'Vitest 공식 문서', url: 'https://vitest.dev/guide/' },
        { title: 'Vitest 시작하기', url: 'https://vitest.dev/guide/getting-started.html' }
      ]
    },
    'jest': {
      title: 'Jest',
      description: 'JavaScript 테스트 프레임워크인 Jest를 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'Jest 공식 문서', url: 'https://jestjs.io/docs/getting-started' },
        { title: 'Jest 시작하기', url: 'https://jestjs.io/docs/getting-started' }
      ]
    },
    'playwright': {
      title: 'Playwright',
      description: '최신 브라우저를 자동화하는 테스트 프레임워크인 Playwright를 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'Playwright 공식 문서', url: 'https://playwright.dev/docs/intro' },
        { title: 'Playwright 시작하기', url: 'https://playwright.dev/docs/getting-started' }
      ]
    },
    'cypress': {
      title: 'Cypress',
      description: '현대적인 웹 테스트 프레임워크인 Cypress를 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'Cypress 공식 문서', url: 'https://docs.cypress.io/' },
        { title: 'Cypress 시작하기', url: 'https://docs.cypress.io/guides/getting-started/installing-cypress' }
      ]
    },

    // 인증
    'jwt': {
      title: 'JWT',
      description: 'JSON Web Token을 사용한 인증 방식을 학습합니다.',
      resources: [
        { title: 'JWT 소개', url: 'https://jwt.io/introduction' },
        { title: 'JWT 사용하기', url: 'https://developer.mozilla.org/ko/docs/Web/HTTP/Authentication' }
      ]
    },
    'oauth': {
      title: 'OAuth',
      description: 'OAuth 인증 프로토콜을 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'OAuth 소개', url: 'https://oauth.net/2/' },
        { title: 'OAuth 구현하기', url: 'https://developer.mozilla.org/ko/docs/Web/HTTP/Authentication' }
      ]
    },
    'sso': {
      title: 'SSO',
      description: 'Single Sign-On 인증 방식을 학습합니다.',
      resources: [
        { title: 'SSO 소개', url: 'https://www.okta.com/identity-101/what-is-sso/' },
        { title: 'SSO 구현하기', url: 'https://auth0.com/docs/authenticate/identity-providers/enterprise-identity-providers' }
      ]
    },
    'basic-auth': {
      title: 'Basic Auth',
      description: 'HTTP Basic Authentication을 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'Basic Auth 소개', url: 'https://developer.mozilla.org/ko/docs/Web/HTTP/Authentication#Basic_authentication_scheme' },
        { title: 'Basic Auth 구현하기', url: 'https://developer.mozilla.org/ko/docs/Web/HTTP/Authentication' }
      ]
    },
    'session-auth': {
      title: 'Session Auth',
      description: '세션 기반 인증 방식을 학습합니다.',
      resources: [
        { title: '세션 인증 소개', url: 'https://developer.mozilla.org/ko/docs/Web/HTTP/Authentication' },
        { title: '세션 인증 구현하기', url: 'https://developer.mozilla.org/ko/docs/Web/HTTP/Authentication' }
      ]
    },

    // 웹 보안
    'cors': {
      title: 'CORS',
      description: 'Cross-Origin Resource Sharing을 이해하고 구현하는 방법을 학습합니다.',
      resources: [
        { title: 'CORS 소개', url: 'https://developer.mozilla.org/ko/docs/Web/HTTP/CORS' },
        { title: 'CORS 구현하기', url: 'https://developer.mozilla.org/ko/docs/Web/HTTP/CORS' }
      ]
    },
    'https': {
      title: 'HTTPS',
      description: 'HTTPS 프로토콜을 이해하고 구현하는 방법을 학습합니다.',
      resources: [
        { title: 'HTTPS 소개', url: 'https://developer.mozilla.org/ko/docs/Glossary/HTTPS' },
        { title: 'HTTPS 구현하기', url: 'https://developer.mozilla.org/ko/docs/Web/Security/Transport_Layer_Security' }
      ]
    },
    'contnet-security-policy': {
      title: 'Content Security Policy',
      description: '웹 보안 정책인 Content Security Policy를 이해하고 구현하는 방법을 학습합니다.',
      resources: [
        { title: 'CSP 소개', url: 'https://developer.mozilla.org/ko/docs/Web/HTTP/CSP' },
        { title: 'CSP 구현하기', url: 'https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Security-Policy' }
      ]
    },
    'owasp-security-risks': {
      title: 'OWASP 보안 위험',
      description: 'OWASP Top 10 등 웹 애플리케이션 보안 위험을 이해하고 대응하는 방법을 학습합니다.',
      resources: [
        { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
        { title: '웹 보안 가이드', url: 'https://developer.mozilla.org/ko/docs/Web/Security' }
      ]
    },

    // 웹 컴포넌트
    'html-templates': {
      title: 'HTML Templates',
      description: 'HTML 템플릿 요소를 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'HTML Templates 소개', url: 'https://developer.mozilla.org/ko/docs/Web/HTML/Element/template' },
        { title: 'HTML Templates 사용하기', url: 'https://developer.mozilla.org/ko/docs/Web/HTML/Element/template' }
      ]
    },
    'custom-elements': {
      title: 'Custom Elements',
      description: '사용자 정의 HTML 요소를 만드는 방법을 학습합니다.',
      resources: [
        { title: 'Custom Elements 소개', url: 'https://developer.mozilla.org/ko/docs/Web/Web_Components/Using_custom_elements' },
        { title: 'Custom Elements 사용하기', url: 'https://developer.mozilla.org/ko/docs/Web/Web_Components/Using_custom_elements' }
      ]
    },
    'shadow-dom': {
      title: 'Shadow DOM',
      description: '캡슐화된 DOM 트리를 만드는 Shadow DOM을 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'Shadow DOM 소개', url: 'https://developer.mozilla.org/ko/docs/Web/Web_Components/Using_shadow_DOM' },
        { title: 'Shadow DOM 사용하기', url: 'https://developer.mozilla.org/ko/docs/Web/Web_Components/Using_shadow_DOM' }
      ]
    },

    // 타입 체커
    'typescript': {
      title: 'TypeScript',
      description: 'JavaScript의 정적 타입 확장인 TypeScript를 학습합니다.',
      resources: [
        { title: 'TypeScript 공식 문서', url: 'https://www.typescriptlang.org/docs/' },
        { title: 'TypeScript 핸드북', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' }
      ]
    },

    // SSR
    'nextjs': {
      title: 'Next.js',
      description: 'React 기반의 서버 사이드 렌더링 프레임워크인 Next.js를 학습합니다.',
      resources: [
        { title: 'Next.js 공식 문서', url: 'https://nextjs.org/docs' },
        { title: 'Next.js 시작하기', url: 'https://nextjs.org/docs/getting-started' }
      ]
    },
    'astro': {
      title: 'Astro',
      description: '컨텐츠 중심의 정적 사이트 생성기인 Astro를 학습합니다.',
      resources: [
        { title: 'Astro 공식 문서', url: 'https://docs.astro.build/' },
        { title: 'Astro 시작하기', url: 'https://docs.astro.build/ko/getting-started/' }
      ]
    },
    'react-router': {
      title: 'React Router',
      description: 'React 애플리케이션에서 라우팅을 구현하는 React Router를 학습합니다.',
      resources: [
        { title: 'React Router 공식 문서', url: 'https://reactrouter.com/docs/en/v6' },
        { title: 'React Router 시작하기', url: 'https://reactrouter.com/docs/en/v6/getting-started/overview' }
      ]
    },
    'nuxt': {
      title: 'Nuxt.js',
      description: 'Vue.js 기반의 서버 사이드 렌더링 프레임워크인 Nuxt.js를 학습합니다.',
      resources: [
        { title: 'Nuxt.js 공식 문서', url: 'https://nuxt.com/docs' },
        { title: 'Nuxt.js 시작하기', url: 'https://nuxt.com/docs/get-started/introduction' }
      ]
    },
    'sveltekit': {
      title: 'SvelteKit',
      description: 'Svelte 기반의 풀스택 프레임워크인 SvelteKit을 학습합니다.',
      resources: [
        { title: 'SvelteKit 공식 문서', url: 'https://kit.svelte.dev/docs' },
        { title: 'SvelteKit 시작하기', url: 'https://kit.svelte.dev/docs/introduction' }
      ]
    },

    // GraphQL
    'apollo': {
      title: 'Apollo',
      description: 'GraphQL 클라이언트 및 서버 라이브러리인 Apollo를 학습합니다.',
      resources: [
        { title: 'Apollo 공식 문서', url: 'https://www.apollographql.com/docs/' },
        { title: 'Apollo 시작하기', url: 'https://www.apollographql.com/docs/react/get-started/' }
      ]
    },
    'relay-modern': {
      title: 'Relay Modern',
      description: 'Facebook에서 개발한 GraphQL 클라이언트인 Relay Modern을 학습합니다.',
      resources: [
        { title: 'Relay 공식 문서', url: 'https://relay.dev/docs/' },
        { title: 'Relay 시작하기', url: 'https://relay.dev/docs/en/introduction-to-relay' }
      ]
    },

    // PWA
    'prpl': {
      title: 'PRPL 패턴',
      description: 'Progressive Web App을 위한 PRPL 패턴을 학습합니다.',
      resources: [
        { title: 'PRPL 패턴 소개', url: 'https://web.dev/apply-instant-loading-with-prpl/' },
        { title: 'PRPL 패턴 구현하기', url: 'https://web.dev/apply-instant-loading-with-prpl/' }
      ]
    },
    'rail': {
      title: 'RAIL 모델',
      description: '웹 성능 측정을 위한 RAIL 모델을 학습합니다.',
      resources: [
        { title: 'RAIL 모델 소개', url: 'https://web.dev/rail/' },
        { title: 'RAIL 모델 구현하기', url: 'https://web.dev/rail/' }
      ]
    },
    'performance-metrics': {
      title: '성능 메트릭',
      description: '웹 성능을 측정하는 핵심 메트릭을 학습합니다.',
      resources: [
        { title: '핵심 웹 성능 메트릭', url: 'https://web.dev/metrics/' },
        { title: '사용자 중심 성능 메트릭', url: 'https://web.dev/user-centric-performance-metrics/' }
      ]
    },
    'lighthouse': {
      title: 'Lighthouse 사용하기',
      description: '웹사이트 품질 검사 도구인 Lighthouse를 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'Lighthouse 소개', url: 'https://developers.google.com/web/tools/lighthouse' },
        { title: 'Lighthouse 시작하기', url: 'https://developers.google.com/web/tools/lighthouse#get-started' }
      ]
    },
    'devtools': {
      title: 'DevTools 사용하기',
      description: '브라우저 개발자 도구를 사용하여 성능을 분석하는 방법을 학습합니다.',
      resources: [
        { title: 'Chrome DevTools', url: 'https://developers.google.com/web/tools/chrome-devtools/evaluate-performance' },
        { title: 'DevTools 성능 패널', url: 'https://developers.google.com/web/updates/2018/05/devtools' }
      ]
    },
    'storage': {
      title: '저장소',
      description: '브라우저 저장소 API를 사용하는 방법을 학습합니다.',
      resources: [
        { title: 'MDN - 웹 저장소', url: 'https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API' },
        { title: '브라우저 저장소 옵션', url: 'https://web.dev/storage-for-the-web/' }
      ]
    },
    'web-sockets': {
      title: '웹 소켓',
      description: '실시간 양방향 통신을 위한 WebSocket API를 학습합니다.',
      resources: [
        { title: 'MDN - WebSocket', url: 'https://developer.mozilla.org/ko/docs/Web/API/WebSocket' },
        { title: 'WebSocket 가이드', url: 'https://developer.mozilla.org/ko/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications' }
      ]
    },
    'server-snet-events': {
      title: '서버 전송 이벤트',
      description: '서버에서 클라이언트로 업데이트를 푸시하는 SSE(Server-Sent Events)를 학습합니다.',
      resources: [
        { title: 'MDN - Server-sent events', url: 'https://developer.mozilla.org/ko/docs/Web/API/Server-sent_events' },
        { title: 'SSE 사용 가이드', url: 'https://developer.mozilla.org/ko/docs/Web/API/Server-sent_events/Using_server-sent_events' }
      ]
    },
    'service-workers': {
      title: 'Service Workers',
      description: '오프라인 경험, 백그라운드 동기화, 푸시 알림 등을 가능하게 하는 Service Worker를 학습합니다.',
      resources: [
        { title: 'MDN - Service Worker API', url: 'https://developer.mozilla.org/ko/docs/Web/API/Service_Worker_API' },
        { title: 'Service Worker 소개', url: 'https://developers.google.com/web/fundamentals/primers/service-workers' }
      ]
    },
    'location': {
      title: '위치 API',
      description: '브라우저의 위치 정보를 사용하는 Geolocation API를 학습합니다.',
      resources: [
        { title: 'MDN - Geolocation API', url: 'https://developer.mozilla.org/ko/docs/Web/API/Geolocation_API' },
        { title: '위치 API 사용하기', url: 'https://developer.mozilla.org/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API' }
      ]
    },
    'notifications': {
      title: '알림',
      description: '웹 앱에서 시스템 알림을 표시하는 Notifications API를 학습합니다.',
      resources: [
        { title: 'MDN - Notifications API', url: 'https://developer.mozilla.org/ko/docs/Web/API/Notifications_API' },
        { title: '웹 알림 가이드', url: 'https://developers.google.com/web/fundamentals/push-notifications' }
      ]
    },
    'device-orientation': {
      title: '디바이스 방향',
      description: '디바이스의 방향 정보를 사용하는 Device Orientation API를 학습합니다.',
      resources: [
        { title: 'MDN - Device Orientation API', url: 'https://developer.mozilla.org/ko/docs/Web/API/Device_orientation_events' },
        { title: '디바이스 방향 API 사용하기', url: 'https://developer.mozilla.org/ko/docs/Web/API/Device_orientation_events/Detecting_device_orientation' }
      ]
    },
    'payments': {
      title: '결제 API',
      description: '웹 결제를 처리하는 Payment Request API를 학습합니다.',
      resources: [
        { title: 'MDN - Payment Request API', url: 'https://developer.mozilla.org/ko/docs/Web/API/Payment_Request_API' },
        { title: '결제 API 사용하기', url: 'https://developer.mozilla.org/ko/docs/Web/API/Payment_Request_API/Using the Payment Request API' }
      ]
    },
    'credentials': {
      title: '자격 증명 관리',
      description: '웹 자격 증명을 관리하는 Credential Management API를 학습합니다.',
      resources: [
        { title: 'MDN - Credential Management API', url: 'https://developer.mozilla.org/ko/docs/Web/API/Credential_Management_API' },
        { title: '자격 증명 관리 API 사용하기', url: 'https://developer.mozilla.org/ko/docs/Web/API/Credential_Management_API/Using_the_Credential_Management_API' }
      ]
    },

    // 정적 사이트 생성기
    'vuepress': {
      title: 'VuePress',
      description: 'Vue.js 기반의 정적 사이트 생성기인 VuePress를 학습합니다.',
      resources: [
        { title: 'VuePress 공식 문서', url: 'https://v2.vuepress.vuejs.org/' },
        { title: 'VuePress 시작하기', url: 'https://v2.vuepress.vuejs.org/guide/getting-started.html' }
      ]
    },
    'eleventy': {
      title: 'Eleventy',
      description: 'JavaScript 기반의 정적 사이트 생성기인 Eleventy를 학습합니다.',
      resources: [
        { title: 'Eleventy 공식 문서', url: 'https://www.11ty.dev/docs/' },
        { title: 'Eleventy 시작하기', url: 'https://www.11ty.dev/docs/getting-started/' }
      ]
    },

    // 모바일 앱 개발
    'pwas': {
      title: 'PWAs',
      description: '웹사이트를 앱처럼 동작하게 만드는 Progressive Web Apps에 대해 학습합니다.',
      resources: [
        { title: 'MDN - PWA', url: 'https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps' },
        { title: 'PWA 시작하기', url: 'https://web.dev/progressive-web-apps/' }
      ]
    },
    'react-native': {
      title: 'React Native',
      description: 'React를 사용하여 네이티브 모바일 앱을 개발하는 프레임워크를 학습합니다.',
      resources: [
        { title: 'React Native 공식 문서', url: 'https://reactnative.dev/docs/getting-started' },
        { title: 'React Native 튜토리얼', url: 'https://reactnative.dev/docs/tutorial' }
      ]
    },
    'flutter': {
      title: 'Flutter',
      description: 'Google에서 개발한 UI 툴킷인 Flutter를 학습합니다.',
      resources: [
        { title: 'Flutter 공식 문서', url: 'https://flutter.dev/docs' },
        { title: 'Flutter 시작하기', url: 'https://flutter.dev/docs/get-started' }
      ]
    },
    'ionic': {
      title: 'Ionic',
      description: '웹 기술을 사용하여 모바일 앱을 개발하는 프레임워크인 Ionic을 학습합니다.',
      resources: [
        { title: 'Ionic 공식 문서', url: 'https://ionicframework.com/docs' },
        { title: 'Ionic 시작하기', url: 'https://ionicframework.com/docs/angular/your-first-app' }
      ]
    },

    // 데스크톱 앱 개발
    'electron': {
      title: 'Electron',
      description: '웹 기술을 사용하여 데스크톱 앱을 개발하는 프레임워크인 Electron을 학습합니다.',
      resources: [
        { title: 'Electron 공식 문서', url: 'https://www.electronjs.org/docs' },
        { title: 'Electron 시작하기', url: 'https://www.electronjs.org/docs/tutorial/quick-start' }
      ]
    },
    'tauri': {
      title: 'Tauri',
      description: '웹 기술을 사용하여 가볍고 안전한 데스크톱 앱을 개발하는 프레임워크인 Tauri를 학습합니다.',
      resources: [
        { title: 'Tauri 공식 문서', url: 'https://tauri.app/v1/guides/' },
        { title: 'Tauri 시작하기', url: 'https://tauri.app/v1/guides/getting-started/prerequisites' }
      ]
    }
  }
};

// 직무별 카테고리 구조
export const roadmapCategories = {
  '프론트엔드 개발자': [
    {
      name: '인터넷',
      nodes: ['how-internet-works', 'http', 'domain-name', 'hosting', 'dns', 'browsers']
    },
    {
      name: 'HTML',
      nodes: ['html-basics', 'semantic-html', 'forms-validation', 'accessibility', 'seo-basics']
    },
    {
      name: 'CSS',
      nodes: ['css-basics', 'layouts', 'responsive-design', 'css-writing', 'tailwind']
    },
    {
      name: 'CSS 아키텍처',
      nodes: ['BEM']
    },
    {
      name: 'CSS 전처리기',
      nodes: ['sass', 'postcss']
    },
    {
      name: 'JavaScript',
      nodes: ['js-basics', 'dom-manipulation', 'fetch-api']
    },
    {
      name: '버전 관리',
      nodes: ['git']
    },
    {
      name: '버전 관리 호스팅',
      nodes: ['github', 'gitlab', 'bitbucket']
    },
    {
      name: '패키지 관리자',
      nodes: ['npm', 'yarn', 'pnpm']
    },
    {
      name: '프레임워크 선택',
      nodes: ['react', 'vue', 'angular', 'svelte', 'solid', 'qwik']
    },
    {
      name: '타입 체커',
      nodes: ['typescript']
    },
    {
      name: '빌드 도구',
      nodes: [
        {
          name: '린터 및 포맷터',
          nodes: ['eslint', 'prettier']
        },
        {
          name: '모듈 번들러',
          nodes: ['vite', 'esbuild', 'swc', 'webpack', 'rollup', 'parcel']
        }
      ]
    },
    {
      name: '테스팅',
      nodes: ['vitest', 'jest', 'playwright', 'cypress']
    },
    {
      name: '웹 컴포넌트',
      nodes: ['html-templates', 'custom-elements', 'shadow-dom']
    },
    {
      name: 'SSR',
      nodes: [
        {
          name: 'React',
          nodes: ['nextjs', 'astro', 'react-router']
        },
        {
          name: 'Vue',
          nodes: ['nuxt']
        },
        {
          name: 'Svelte',
          nodes: ['sveltekit']
        }
      ]
    },
    {
      name: 'GraphQL',
      nodes: ['apollo', 'relay-modern']
    },
    {
      name: '인증',
      nodes: ['jwt', 'oauth', 'sso', 'basic-auth', 'session-auth']
    },
    {
      name: '웹 보안',
      nodes: ['cors', 'https', 'contnet-security-policy', 'owasp-security-risks']
    },
    {
      name: 'PWA',
      nodes: [
        {
          name: '성능 측정 및 개선',
          nodes: ['prpl', 'rail', 'performance-metrics', 'lighthouse', 'devtools']
        },
        {
          name: '브라우저 API',
          nodes: ['storage', 'web-sockets', 'server-snet-events', 'service-workers', 'location', 'notifications', 'device-orientation', 'payments', 'credentials']
        }
      ]
    },
    {
      name: '정적 사이트 생성기',
      nodes: ['astro', 'nextjs', 'vuepress', 'eleventy', 'nuxt']
    },
    {
      name: '모바일 앱 개발',
      nodes: ['pwas', 'react-native', 'flutter', 'ionic']
    },
    {
      name: '데스크톱 앱 개발',
      nodes: ['electron', 'tauri']
    }
  ]
};

// 직무별 로드맵 설명
export const roadmapDescriptions = {
  '프론트엔드 개발자': {
    main: '이 로드맵은 프론트엔드 개발자가 되기 위해 필요한 기술, 도구, 개념을 단계별로 보여줍니다. 인터넷 기초부터 HTML, CSS, JavaScript는 물론 브라우저 API, 성능 최적화, 모바일 앱 개발에 이르기까지 프론트엔드 개발의 전체 여정을 안내합니다.',
    categories: {
      '인터넷': '웹의 기초가 되는 인터넷 프로토콜, 도메인, 호스팅, DNS, 브라우저 동작 원리 등을 이해합니다.',
      'HTML': '웹 페이지의 구조를 정의하는 마크업 언어의 기본 개념과 시맨틱 태그, 폼, 접근성, SEO 등을 학습합니다.',
      'CSS': '웹 페이지의 스타일과 레이아웃을 담당하는 CSS의 기본 개념, 레이아웃 기법, 반응형 디자인을 익힙니다.',
      'CSS 아키텍처': 'BEM과 같은 CSS 아키텍처 방법론을 통해 확장 가능하고 유지보수가 용이한 스타일시트를 작성하는 방법을 학습합니다.',
      'CSS 전처리기': 'Sass, PostCSS와 같은 전처리기를 사용하여 더 효율적이고 강력한 CSS 작성 방법을 익힙니다.',
      'JavaScript': '웹의 동적 기능을 구현하는 JavaScript의 기본 문법, DOM 조작, 비동기 프로그래밍 등을 학습합니다.',
      '버전 관리': 'Git을 사용한 코드 버전 관리의 기본 개념과 실무적인 사용법을 익힙니다.',
      '버전 관리 호스팅': 'GitHub, GitLab, Bitbucket 등의 플랫폼을 활용한 협업 방법을 학습합니다.',
      '패키지 관리자': 'npm, Yarn, pnpm을 사용한 JavaScript 패키지 관리 방법을 익힙니다.',
      '프레임워크 선택': 'React, Vue, Angular 등 주요 프론트엔드 프레임워크의 특징과 사용법을 이해합니다.',
      '타입 체커': 'TypeScript를 사용하여 정적 타입 검사를 통해 코드의 안정성을 높이는 방법을 익힙니다.',
      '빌드 도구': 'ESLint, Prettier, Webpack, Vite 등의 도구를 사용하여 코드 품질 관리와 번들링을 수행합니다.',
      '테스팅': 'Jest, Cypress, Playwright 등을 사용한 단위 테스트, 통합 테스트, E2E 테스트 방법을 학습합니다.',
      '웹 컴포넌트': '재사용 가능한 커스텀 엘리먼트를 만들고 Shadow DOM을 활용하는 방법을 학습합니다.',
      'SSR': 'Next.js, Nuxt.js, SvelteKit 등을 사용한 서버 사이드 렌더링 구현 방법을 학습합니다.',
      'GraphQL': 'Apollo, Relay를 사용한 GraphQL 클라이언트 구현 방법을 익힙니다.',
      '인증': 'JWT, OAuth, SSO 등 다양한 인증 방식을 이해하고 구현하는 방법을 익힙니다.',
      '웹 보안': 'CORS, HTTPS, CSP 등 웹 보안의 핵심 개념과 OWASP Top 10 등 보안 위험을 이해합니다.',
      'PWA': 'Progressive Web App의 개념과 구현 방법, 성능 최적화, 브라우저 API 활용법을 학습합니다.',
      '정적 사이트 생성기': 'Astro, Next.js, VuePress 등을 사용한 정적 사이트 생성 방법을 익힙니다.',
      '모바일 앱 개발': 'React Native, Flutter, Ionic 등을 사용한 크로스 플랫폼 모바일 앱 개발 방법을 학습합니다.',
      '데스크톱 앱 개발': 'Electron, Tauri를 사용한 데스크톱 애플리케이션 개발 방법을 익힙니다.'
    }
  }
};

// 직무별 추천 학습 자원
export const learningResources = {
  '프론트엔드 개발자': {
    general: [
      { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/ko/', description: 'HTML, CSS, JavaScript 등 웹 기술에 대한 포괄적인 문서' },
      { title: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/', description: '웹 개발을 배울 수 있는 무료 자원' },
      { title: 'web.dev', url: 'https://web.dev/', description: '구글에서 제공하는, 모던 웹 개발에 관한 가이드와 모범 사례' }
    ],
    categories: {
      '인터넷': [
        { title: '인터넷 작동 방식', url: 'https://developer.mozilla.org/ko/docs/Learn/Common_questions/How_does_the_Internet_work', description: '인터넷의 기본 원리 이해하기' },
        { title: 'HTTP 완벽 가이드', url: 'https://developer.mozilla.org/ko/docs/Web/HTTP/Overview', description: 'HTTP 프로토콜의 상세 설명' },
        { title: 'DNS 이해하기', url: 'https://www.cloudflare.com/ko-kr/learning/dns/what-is-dns/', description: 'DNS 시스템의 작동 원리' }
      ],
      'HTML': [
        { title: 'HTML 기초', url: 'https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML', description: 'HTML의 기본 개념과 구조' },
        { title: '시맨틱 HTML', url: 'https://developer.mozilla.org/ko/docs/Glossary/Semantics', description: '의미 있는 HTML 작성하기' },
        { title: '웹 접근성', url: 'https://developer.mozilla.org/ko/docs/Web/Accessibility', description: '웹 접근성 가이드라인' }
      ],
      'CSS': [
        { title: 'CSS 기초', url: 'https://developer.mozilla.org/ko/docs/Learn/CSS/First_steps', description: 'CSS의 기본 개념과 문법' },
        { title: 'CSS 레이아웃', url: 'https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout', description: '모던 CSS 레이아웃 기법' },
        { title: 'CSS-Tricks', url: 'https://css-tricks.com/', description: 'CSS 기법과 팁을 배울 수 있는 사이트' }
      ],
      'CSS 아키텍처': [
        { title: 'BEM 방법론', url: 'https://en.bem.info/methodology/quick-start/', description: 'CSS 아키텍처 방법론' }
      ],
      'CSS 전처리기': [
        { title: 'Sass 가이드', url: 'https://sass-lang.com/guide', description: 'Sass 전처리기 사용법' },
        { title: 'PostCSS 가이드', url: 'https://postcss.org/docs/', description: 'PostCSS 사용법' }
      ],
      'JavaScript': [
        { title: 'JavaScript 기초', url: 'https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps', description: 'JavaScript의 기본 개념과 문법' },
        { title: 'JavaScript.info', url: 'https://ko.javascript.info/', description: '모던 JavaScript 튜토리얼' },
        { title: 'You Don\'t Know JS', url: 'https://github.com/getify/You-Dont-Know-JS', description: 'JavaScript의 깊은 이해를 위한 시리즈' }
      ],
      '버전 관리': [
        { title: 'Git 가이드', url: 'https://git-scm.com/book/ko/v2', description: 'Git 기본 및 고급 사용법' }
      ],
      '버전 관리 호스팅': [
        { title: 'GitHub 가이드', url: 'https://docs.github.com/ko', description: 'GitHub 사용법' },
        { title: 'GitLab 문서', url: 'https://docs.gitlab.com/', description: 'GitLab 사용법' },
        { title: 'Bitbucket 가이드', url: 'https://support.atlassian.com/bitbucket-cloud/', description: 'Bitbucket 사용법' }
      ],
      '패키지 관리자': [
        { title: 'npm 문서', url: 'https://docs.npmjs.com/', description: 'npm 사용법' },
        { title: 'Yarn 가이드', url: 'https://yarnpkg.com/getting-started', description: 'Yarn 사용법' },
        { title: 'pnpm 문서', url: 'https://pnpm.io/ko/', description: 'pnpm 사용법' }
      ],
      '프레임워크 선택': [
        { title: 'React 공식 문서', url: 'https://ko.reactjs.org/', description: 'React 학습을 위한 공식 가이드' },
        { title: 'Vue.js 가이드', url: 'https://v3.ko.vuejs.org/guide/introduction.html', description: 'Vue.js 공식 문서' },
        { title: 'Angular 튜토리얼', url: 'https://angular.io/tutorial', description: 'Angular 시작하기' }
      ],
      '타입 체커': [
        { title: 'TypeScript 핸드북', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', description: 'TypeScript 공식 문서와 가이드' },
        { title: 'TypeScript Deep Dive', url: 'https://basarat.gitbook.io/typescript/', description: 'TypeScript 심화 학습' }
      ],
      '빌드 도구': [
        { title: 'ESLint 가이드', url: 'https://eslint.org/docs/user-guide/', description: 'ESLint 설정과 사용법' },
        { title: 'Prettier 문서', url: 'https://prettier.io/docs/en/', description: 'Prettier 설정과 사용법' },
        { title: 'Webpack 가이드', url: 'https://webpack.js.org/guides/', description: 'Webpack 설정과 사용법' },
        { title: 'Vite 문서', url: 'https://vitejs.dev/guide/', description: 'Vite 설정과 사용법' }
      ],
      '테스팅': [
        { title: 'Jest 공식 문서', url: 'https://jestjs.io/ko/docs/getting-started', description: 'Jest 테스트 프레임워크 가이드' },
        { title: 'Cypress 가이드', url: 'https://docs.cypress.io/guides/overview/why-cypress', description: 'Cypress E2E 테스트 가이드' },
        { title: 'Playwright 문서', url: 'https://playwright.dev/docs/intro', description: 'Playwright 자동화 테스트 가이드' }
      ],
      '웹 컴포넌트': [
        { title: '웹 컴포넌트 가이드', url: 'https://developer.mozilla.org/ko/docs/Web/Web_Components', description: '웹 컴포넌트 기본 개념' },
        { title: 'Shadow DOM', url: 'https://developer.mozilla.org/ko/docs/Web/Web_Components/Using_shadow_DOM', description: 'Shadow DOM 사용법' }
      ],
      'SSR': [
        { title: 'Next.js 문서', url: 'https://nextjs.org/docs', description: 'Next.js SSR 가이드' },
        { title: 'Nuxt.js 가이드', url: 'https://nuxt.com/docs/get-started/introduction', description: 'Nuxt.js SSR 가이드' },
        { title: 'SvelteKit 문서', url: 'https://kit.svelte.dev/docs', description: 'SvelteKit SSR 가이드' }
      ],
      'GraphQL': [
        { title: 'Apollo 클라이언트', url: 'https://www.apollographql.com/docs/react/', description: 'Apollo 클라이언트 가이드' },
        { title: 'Relay 문서', url: 'https://relay.dev/docs/', description: 'Relay 가이드' }
      ],
      '인증': [
        { title: 'JWT 가이드', url: 'https://jwt.io/introduction', description: 'JWT 인증 구현 가이드' },
        { title: 'OAuth 2.0', url: 'https://oauth.net/2/', description: 'OAuth 2.0 구현 가이드' }
      ],
      '웹 보안': [
        { title: 'CORS 가이드', url: 'https://developer.mozilla.org/ko/docs/Web/HTTP/CORS', description: 'CORS 설정 가이드' },
        { title: 'HTTPS 설정', url: 'https://developer.mozilla.org/ko/docs/Web/Security/Transport_Layer_Security', description: 'HTTPS 구현 가이드' }
      ],
      'PWA': [
        { title: 'PWA 가이드', url: 'https://web.dev/progressive-web-apps/', description: 'Progressive Web Apps 개발 가이드' },
        { title: 'Service Workers', url: 'https://developer.mozilla.org/ko/docs/Web/API/Service_Worker_API', description: 'Service Worker API 가이드' }
      ],
      '정적 사이트 생성기': [
        { title: 'Astro 문서', url: 'https://docs.astro.build/ko/', description: 'Astro 사용 가이드' },
        { title: 'VuePress 가이드', url: 'https://v2.vuepress.vuejs.org/', description: 'VuePress 사용 가이드' }
      ],
      '모바일 앱 개발': [
        { title: 'React Native 문서', url: 'https://reactnative.dev/docs/getting-started', description: 'React Native 시작하기' },
        { title: 'Flutter 가이드', url: 'https://flutter.dev/docs/get-started', description: 'Flutter 앱 개발 가이드' },
        { title: 'Ionic 프레임워크', url: 'https://ionicframework.com/docs', description: 'Ionic 크로스 플랫폼 앱 개발 가이드' }
      ],
      '데스크톱 앱 개발': [
        { title: 'Electron 문서', url: 'https://www.electronjs.org/docs/latest/', description: 'Electron 데스크톱 앱 개발 가이드' },
        { title: 'Tauri 가이드', url: 'https://tauri.app/v1/guides/', description: 'Tauri 크로스 플랫폼 앱 개발 가이드' }
      ]
    }
  }
};