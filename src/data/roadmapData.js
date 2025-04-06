// src/data/roadmapData.js

// 직무별 로드맵 노드 정보
export const roadmapNodes = {
    '프론트엔드 개발자': {
      'html-basics': {
        title: 'HTML 기초',
        description: 'HTML의 기본 구조와 시맨틱 태그에 대해 학습합니다.',
        resources: [
          { title: 'MDN - HTML 소개', url: 'https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML' },
          { title: 'W3Schools HTML 튜토리얼', url: 'https://www.w3schools.com/html/' }
        ]
      },
      'semantic-html': {
        title: '시맨틱 HTML 작성하기',
        description: '의미 있는 HTML 구조를 작성하여 접근성과 SEO를 개선하는 방법을 학습합니다.',
        resources: [
          { title: 'MDN - HTML 요소 레퍼런스', url: 'https://developer.mozilla.org/ko/docs/Web/HTML/Element' },
          { title: '시맨틱 HTML 가이드', url: 'https://www.semrush.com/blog/semantic-html5-guide/' }
        ]
      },
      'forms': {
        title: '폼과 유효성 검사',
        description: 'HTML 폼 요소와 JavaScript를 이용한 폼 유효성 검사 방법을 학습합니다.',
        resources: [
          { title: 'MDN - 폼 가이드', url: 'https://developer.mozilla.org/ko/docs/Learn/Forms' },
          { title: 'JavaScript 폼 유효성 검사', url: 'https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/' }
        ]
      },
      'css-basics': {
        title: 'CSS 기초',
        description: 'CSS 선택자, 박스 모델, 레이아웃 등 기본 개념을 학습합니다.',
        resources: [
          { title: 'MDN - CSS 첫걸음', url: 'https://developer.mozilla.org/ko/docs/Learn/CSS/First_steps' },
          { title: 'CSS-Tricks 가이드', url: 'https://css-tricks.com/guides/' }
        ]
      },
      'layouts': {
        title: '레이아웃 만들기',
        description: 'Flexbox, Grid 등을 활용하여 다양한 레이아웃을 구성하는 방법을 학습합니다.',
        resources: [
          { title: 'Flexbox 완전 가이드', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
          { title: 'CSS Grid 완전 가이드', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/' }
        ]
      },
      'responsive': {
        title: '반응형 디자인',
        description: '다양한 화면 크기와 기기에 맞는 반응형 웹 디자인 방법을 학습합니다.',
        resources: [
          { title: 'MDN - 반응형 디자인', url: 'https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Responsive_Design' },
          { title: '반응형 웹 디자인 기초', url: 'https://web.dev/responsive-web-design-basics/' }
        ]
      },
      'js-basics': {
        title: 'JavaScript 기초',
        description: '변수, 함수, 조건문, 반복문 등 JavaScript 기본 문법을 학습합니다.',
        resources: [
          { title: '모던 JavaScript 튜토리얼', url: 'https://ko.javascript.info/' },
          { title: 'MDN - JavaScript 첫걸음', url: 'https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps' }
        ]
      },
      'dom': {
        title: 'DOM 조작하기',
        description: 'Document Object Model을 이해하고 JavaScript로 조작하는 방법을 학습합니다.',
        resources: [
          { title: 'MDN - DOM 소개', url: 'https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction' },
          { title: 'JavaScript DOM 조작', url: 'https://www.javascripttutorial.net/javascript-dom/' }
        ]
      },
      'fetch': {
        title: 'Fetch API & 비동기 처리',
        description: 'Fetch API를 활용한 데이터 요청과 비동기 처리 방법을 학습합니다.',
        resources: [
          { title: 'MDN - Fetch API 사용하기', url: 'https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch' },
          { title: 'JavaScript Promise와 async/await', url: 'https://ko.javascript.info/async' }
        ]
      }
    },
    '백엔드 개발자': {
      'backend-basics': {
        title: '백엔드 기초',
        description: '서버 측 프로그래밍의 기본 개념과 원리를 학습합니다.',
        resources: [
          { title: '백엔드 로드맵', url: 'https://roadmap.sh/backend' },
          { title: '백엔드 개발 입문', url: 'https://www.freecodecamp.org/news/backend-development-tutorial/' }
        ]
      },
      'server-languages': {
        title: '서버 프로그래밍 언어',
        description: 'Node.js, Python, Java 등 서버 측 프로그래밍 언어를 학습합니다.',
        resources: [
          { title: 'Node.js 공식 문서', url: 'https://nodejs.org/ko/docs/' },
          { title: 'Python Django 튜토리얼', url: 'https://docs.djangoproject.com/ko/4.2/intro/tutorial01/' }
        ]
      },
      'database': {
        title: '데이터베이스',
        description: 'SQL/NoSQL 데이터베이스의 개념과 사용법을 학습합니다.',
        resources: [
          { title: 'SQL 기초 튜토리얼', url: 'https://www.w3schools.com/sql/' },
          { title: 'MongoDB 튜토리얼', url: 'https://docs.mongodb.com/manual/tutorial/' }
        ]
      },
      'apis': {
        title: 'API 설계',
        description: 'RESTful API와 GraphQL 등의 API 설계 원칙을 학습합니다.',
        resources: [
          { title: 'RESTful API 설계 가이드', url: 'https://restfulapi.net/' },
          { title: 'GraphQL 공식 문서', url: 'https://graphql.org/learn/' }
        ]
      },
      'authentication': {
        title: '인증 및 보안',
        description: 'JWT, OAuth 등의 인증 방식과 웹 보안 기초를 학습합니다.',
        resources: [
          { title: 'JWT 인증 가이드', url: 'https://jwt.io/introduction/' },
          { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' }
        ]
      },
      'architecture': {
        title: '서버 아키텍처',
        description: '마이크로서비스, 서버리스 등 다양한 아키텍처 패턴을 학습합니다.',
        resources: [
          { title: '마이크로서비스 아키텍처', url: 'https://microservices.io/' },
          { title: '서버리스 아키텍처', url: 'https://www.serverless.com/framework/docs/' }
        ]
      }
    },
    '데이터 분석가': {
      'statistics-basics': {
        title: '통계 기초',
        description: '데이터 분석의 기반이 되는 통계학 기초 개념을 학습합니다.',
        resources: [
          { title: '칸 아카데미 통계학', url: 'https://ko.khanacademy.org/math/statistics-probability' },
          { title: '통계학 기초 가이드', url: 'https://www.scribbr.com/statistics/statistical-tests/' }
        ]
      },
      'python-data': {
        title: 'Python 데이터 분석',
        description: 'Python을 활용한 데이터 분석 방법을 학습합니다.',
        resources: [
          { title: 'Pandas 공식 문서', url: 'https://pandas.pydata.org/docs/' },
          { title: 'NumPy 튜토리얼', url: 'https://numpy.org/doc/stable/user/quickstart.html' }
        ]
      },
      'data-visualization': {
        title: '데이터 시각화',
        description: '데이터를 효과적으로 시각화하는 방법을 학습합니다.',
        resources: [
          { title: 'Matplotlib 튜토리얼', url: 'https://matplotlib.org/stable/tutorials/index.html' },
          { title: 'Seaborn 가이드', url: 'https://seaborn.pydata.org/tutorial.html' }
        ]
      },
      'sql-analysis': {
        title: 'SQL 데이터 분석',
        description: 'SQL을 활용한 데이터 조회와 분석 방법을 학습합니다.',
        resources: [
          { title: 'SQL for Data Analysis', url: 'https://mode.com/sql-tutorial/' },
          { title: 'Advanced SQL 기법', url: 'https://dataschool.com/how-to-teach-people-sql/' }
        ]
      },
      'machine-learning-basics': {
        title: '머신러닝 기초',
        description: '머신러닝의 기본 개념과 알고리즘을 학습합니다.',
        resources: [
          { title: 'scikit-learn 튜토리얼', url: 'https://scikit-learn.org/stable/tutorial/index.html' },
          { title: '머신러닝 입문 가이드', url: 'https://www.coursera.org/learn/machine-learning' }
        ]
      },
      'data-storytelling': {
        title: '데이터 스토리텔링',
        description: '데이터 분석 결과를 효과적으로 전달하는 방법을 학습합니다.',
        resources: [
          { title: '데이터 스토리텔링 기법', url: 'https://www.storytellingwithdata.com/' },
          { title: '효과적인 데이터 시각화', url: 'https://www.tableau.com/learn/articles/data-visualization' }
        ]
      }
    },
    'UX/UI 디자이너': {
      'design-principles': {
        title: '디자인 원칙',
        description: 'UX/UI 디자인의 기본 원칙과 이론을 학습합니다.',
        resources: [
          { title: 'UX 디자인 기초', url: 'https://www.interaction-design.org/literature/topics/ux-design' },
          { title: 'UI 디자인 패턴', url: 'https://ui-patterns.com/' }
        ]
      },
      'user-research': {
        title: '사용자 조사',
        description: '사용자 중심 디자인을 위한 조사 방법론을 학습합니다.',
        resources: [
          { title: '사용자 인터뷰 가이드', url: 'https://www.nngroup.com/articles/user-interviews/' },
          { title: '사용성 테스트 방법', url: 'https://www.usability.gov/how-to-and-tools/methods/usability-testing.html' }
        ]
      },
      'prototyping': {
        title: '프로토타이핑',
        description: '디자인 아이디어를 빠르게 프로토타입으로 만드는 방법을 학습합니다.',
        resources: [
          { title: 'Figma 튜토리얼', url: 'https://help.figma.com/hc/en-us/categories/360002051634-Getting-Started' },
          { title: '프로토타이핑 방법론', url: 'https://www.smashingmagazine.com/2019/09/guidelines-mobile-web-development/' }
        ]
      },
      'visual-design': {
        title: '시각 디자인',
        description: '색상, 타이포그래피, 레이아웃 등 시각 디자인 요소를 학습합니다.',
        resources: [
          { title: '색상 이론', url: 'https://www.interaction-design.org/literature/topics/color-theory' },
          { title: '타이포그래피 기초', url: 'https://material.io/design/typography/the-type-system.html' }
        ]
      },
      'interaction-design': {
        title: '인터랙션 디자인',
        description: '사용자와 제품 간의 상호작용을 디자인하는 방법을 학습합니다.',
        resources: [
          { title: '마이크로인터랙션', url: 'https://www.nngroup.com/articles/microinteractions/' },
          { title: '애니메이션 UX', url: 'https://www.smashingmagazine.com/2015/05/functional-ux-design-animations/' }
        ]
      },
      'design-systems': {
        title: '디자인 시스템',
        description: '확장 가능한 디자인 시스템을 구축하고 관리하는 방법을 학습합니다.',
        resources: [
          { title: '디자인 시스템 가이드', url: 'https://www.invisionapp.com/inside-design/guide-to-design-systems/' },
          { title: '컴포넌트 기반 디자인', url: 'https://bradfrost.com/blog/post/atomic-web-design/' }
        ]
      }
    },
    '프로젝트 매니저': {
      'product-management': {
        title: '제품 관리 기초',
        description: '제품 관리의 기본 개념과 프로세스를 학습합니다.',
        resources: [
          { title: '제품 관리 가이드', url: 'https://www.productplan.com/learn/what-is-product-management/' },
          { title: '제품 매니저 핸드북', url: 'https://www.productschool.com/blog/product-management-2/the-product-manager-handbook/' }
        ]
      },
      'roadmapping': {
        title: '로드맵 계획',
        description: '효과적인 제품 로드맵을 계획하고 관리하는 방법을 학습합니다.',
        resources: [
          { title: '로드맵 작성 가이드', url: 'https://roadmunk.com/guides/product-roadmap-guide/' },
          { title: '제품 전략 수립', url: 'https://www.productplan.com/learn/product-strategy/' }
        ]
      },
      'stakeholder-management': {
        title: '이해관계자 관리',
        description: '다양한 이해관계자와 효과적으로 소통하고 관계를 관리하는 방법을 학습합니다.',
        resources: [
          { title: '이해관계자 매핑', url: 'https://www.mindtools.com/pages/article/newPPM_07.htm' },
          { title: '효과적인 커뮤니케이션 전략', url: 'https://www.pmi.org/learning/library/effective-communication-better-project-management-6480' }
        ]
      },
      'agile-methodologies': {
        title: '애자일 방법론',
        description: 'Scrum, Kanban 등 애자일 방법론의 개념과 적용 방법을 학습합니다.',
        resources: [
          { title: 'Scrum 가이드', url: 'https://scrumguides.org/scrum-guide.html' },
          { title: 'Kanban 방법론', url: 'https://www.atlassian.com/agile/kanban' }
        ]
      },
      'product-metrics': {
        title: '제품 지표',
        description: '제품 성과를 측정하고 개선하기 위한 지표와 분석 방법을 학습합니다.',
        resources: [
          { title: '제품 지표 가이드', url: 'https://amplitude.com/blog/product-metrics' },
          { title: '데이터 기반 의사결정', url: 'https://hbr.org/2020/05/a-data-driven-approach-to-identifying-future-leaders' }
        ]
      },
      'product-launch': {
        title: '제품 출시',
        description: '성공적인 제품 출시를 위한 전략과 실행 계획을 학습합니다.',
        resources: [
          { title: '제품 출시 체크리스트', url: 'https://www.productplan.com/learn/product-launch-checklist/' },
          { title: '고객 획득 전략', url: 'https://www.productplan.com/learn/customer-acquisition-strategy/' }
        ]
      }
    }
  };
  
  // 직무별 카테고리 구조
  export const roadmapCategories = {
    '프론트엔드 개발자': [
      {
        name: 'HTML',
        nodes: ['html-basics', 'semantic-html', 'forms']
      },
      {
        name: 'CSS',
        nodes: ['css-basics', 'layouts', 'responsive']
      },
      {
        name: 'JavaScript',
        nodes: ['js-basics', 'dom', 'fetch']
      }
    ],
    '백엔드 개발자': [
      {
        name: '기초',
        nodes: ['backend-basics']
      },
      {
        name: '언어 & 프레임워크',
        nodes: ['server-languages']
      },
      {
        name: '데이터베이스',
        nodes: ['database']
      },
      {
        name: 'API & 통신',
        nodes: ['apis']
      },
      {
        name: '보안',
        nodes: ['authentication']
      },
      {
        name: '아키텍처',
        nodes: ['architecture']
      }
    ],
    '데이터 분석가': [
      {
        name: '통계 & 수학',
        nodes: ['statistics-basics']
      },
      {
        name: '프로그래밍',
        nodes: ['python-data', 'sql-analysis']
      },
      {
        name: '데이터 처리',
        nodes: ['data-visualization', 'data-storytelling']
      },
      {
        name: '고급 분석',
        nodes: ['machine-learning-basics']
      }
    ],
    'UX/UI 디자이너': [
      {
        name: '디자인 이론',
        nodes: ['design-principles', 'visual-design']
      },
      {
        name: '사용자 중심 디자인',
        nodes: ['user-research', 'interaction-design']
      },
      {
        name: '도구 & 기술',
        nodes: ['prototyping', 'design-systems']
      }
    ],
    '프로젝트 매니저': [
      {
        name: '제품 관리',
        nodes: ['product-management', 'product-metrics']
      },
      {
        name: '전략 & 계획',
        nodes: ['roadmapping', 'product-launch']
      },
      {
        name: '프로세스 & 방법론',
        nodes: ['agile-methodologies']
      },
      {
        name: '이해관계자 관리',
        nodes: ['stakeholder-management']
      }
    ]
  };
  
  // 직무별 로드맵 설명
  export const roadmapDescriptions = {
    '프론트엔드 개발자': '이 로드맵은 프론트엔드 개발자가 되기 위해 필요한 기술, 도구, 개념을 단계별로 보여줍니다. HTML, CSS, JavaScript부터 시작하여 프레임워크, 테스팅, 성능 최적화까지의 여정을 안내합니다.',
    '백엔드 개발자': '백엔드 개발자 로드맵은 서버 측 프로그래밍, 데이터베이스, API 설계, 인증, 보안 등의 주요 개념을 다룹니다. 언어 선택부터 아키텍처 패턴과 성능 최적화까지 백엔드 개발의 모든 측면을 살펴봅니다.',
    '데이터 분석가': '데이터 분석가 로드맵은 데이터 수집, 처리, 분석, 시각화를 위한 기술과 도구를 안내합니다. 통계 기본부터 머신러닝 기초까지 데이터를 통해 인사이트를 도출하는 방법을 배울 수 있습니다.',
    'UX/UI 디자이너': 'UX/UI 디자인 로드맵은 사용자 중심 디자인의 원칙, 프로토타이핑, 사용성 테스트, 디자인 시스템 등을 다룹니다. 사용자 경험을 개선하고 직관적인 인터페이스를 설계하는 방법을 안내합니다.',
    '프로젝트 매니저': '프로젝트 매니저 로드맵은 제품 개발 주기, 이해관계자 관리, 로드맵 계획, 데이터 기반 의사결정 등 제품 관리의 핵심적인 측면을 다룹니다. 비전 설정부터, 출시 전략, 제품 성장까지 전체 과정을 안내합니다.'
  };
  
  // 직무별 추천 학습 자원
  export const learningResources = {
    '프론트엔드 개발자': [
      { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/ko/', description: 'HTML, CSS, JavaScript 등 웹 기술에 대한 포괄적인 문서' },
      { title: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/', description: '웹 개발을 배울 수 있는 무료 자원' },
      { title: 'React 공식 문서', url: 'https://ko.reactjs.org/', description: 'React 프레임워크 학습을 위한 공식 가이드' },
      { title: 'CSS-Tricks', url: 'https://css-tricks.com/', description: 'CSS 기법과 팁을 배울 수 있는 사이트' }
    ],
    '백엔드 개발자': [
      { title: 'Node.js 공식 문서', url: 'https://nodejs.org/ko/docs/', description: 'Node.js 백엔드 개발을 위한 공식 문서' },
      { title: 'MDN HTTP 문서', url: 'https://developer.mozilla.org/ko/docs/Web/HTTP', description: 'HTTP 프로토콜에 대한 상세한 가이드' },
      { title: 'SQL Tutorial', url: 'https://www.w3schools.com/sql/', description: 'SQL 기초를 배우기 위한 튜토리얼' },
      { title: 'RESTful API 디자인 가이드', url: 'https://restfulapi.net/', description: 'REST API 설계 원칙 및 베스트 프랙티스' }
    ],
    '데이터 분석가': [
      { title: 'Kaggle', url: 'https://www.kaggle.com/', description: '데이터 과학 학습 및 경쟁을 위한 플랫폼' },
      { title: 'Pandas 문서', url: 'https://pandas.pydata.org/docs/', description: '데이터 분석을 위한 Python 라이브러리 문서' },
      { title: 'Matplotlib 튜토리얼', url: 'https://matplotlib.org/stable/tutorials/index.html', description: '데이터 시각화 라이브러리 가이드' },
      { title: '통계학 기초 코스', url: 'https://www.khanacademy.org/math/statistics-probability', description: '통계학 기초 개념을 배울 수 있는 무료 강의' }
    ],
    'UX/UI 디자이너': [
      { title: 'Nielsen Norman Group', url: 'https://www.nngroup.com/', description: 'UX 연구 및 교육 자료' },
      { title: 'Figma 튜토리얼', url: 'https://www.figma.com/resources/learn-design/', description: 'Figma 디자인 도구 사용법' },
      { title: 'UI 패턴 갤러리', url: 'https://ui-patterns.com/', description: '효과적인 UI 패턴 모음' },
      { title: '사용성 테스트 가이드', url: 'https://www.usability.gov/how-to-and-tools/methods/usability-testing.html', description: '사용성 테스트 수행 방법' }
    ],
    '프로젝트 매니저': [
      { title: '제품 관리 가이드', url: 'https://www.productplan.com/learn/what-is-product-management/', description: '제품 관리의 기초를 배울 수 있는 자료' },
      { title: 'Scrum 가이드', url: 'https://scrumguides.org/', description: 'Scrum 방법론 공식 가이드' },
      { title: '로드맵 계획 리소스', url: 'https://roadmunk.com/guides/product-roadmap-guide/', description: '효과적인 제품 로드맵 작성 방법' },
      { title: '데이터 기반 의사결정', url: 'https://amplitude.com/blog', description: '데이터를 활용한 제품 결정 관련 블로그' }
    ]
  };