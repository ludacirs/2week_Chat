
# 목표는 취업이조 2팀
[![Netlify Status](https://api.netlify.com/api/v1/badges/00d459cf-a8e2-475e-9bc0-7488475737a9/deploy-status)](https://app.netlify.com/sites/2weekchat/deploys)

<br>

## 🚀 정보

- [배포주소 바로가기](https://2weekchat.netlify.app/)
- [노션 바로가기](https://sleepy-oxygen-343.notion.site/41970b5fee2d45aebd7b01de061039eb)
- [figma 바로가기](https://www.figma.com/file/4Cd5n1VVGLrAzlldO6FEEe/Swit?node-id=0%3A1)

<br>


## 👀 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/wanted-team2/2week_Chat.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn start
```
<br>

## 😎 팀원

| [김지영(팀장)](https://github.com/Jeong-jeong) | [고병표](https://github.com/kokoball) | [유제호](https://github.com/ludacirs) | [홍수연](https://github.com/suyeon-hong)
|--|--|--|--|
|<img src="https://user-images.githubusercontent.com/68528752/153546074-abd9a7df-771c-4f14-8a2f-a77246210b1c.jpeg" width="400px"/> |<img src="https://user-images.githubusercontent.com/68528752/153546140-b58f43fe-4730-46ca-bfda-0b048f36d24f.JPG" width="400px"/> | <img src="https://user-images.githubusercontent.com/68528752/153545718-c688e091-53a3-4e30-97fd-a2f00ab97aa8.JPG" width="400px">| <img src="https://user-images.githubusercontent.com/68528752/153545721-ecc413f4-9d1b-45e0-9909-423c27128b1c.jpeg" width="400px">
|||||


<br>

## 🔥 프로젝트 과정 소개
| [코딩 컨벤션 규칙](https://sleepy-oxygen-343.notion.site/9c06caa291f44d129f3b707fd4627aa0) | [깃허브 작성 규칙](https://sleepy-oxygen-343.notion.site/9c06caa291f44d129f3b707fd4627aa0) |
|:--:|:--:|
|![1](https://user-images.githubusercontent.com/78653426/152985098-26a0af22-9186-4d1b-b302-ef5246f85b29.png)|![3](https://user-images.githubusercontent.com/78653426/152985107-45acb775-a967-4e8d-a0d9-271171369fed.png)|
|![2](https://user-images.githubusercontent.com/78653426/152985104-7c2ac57a-1491-4d2f-90cf-3d1ae24c6799.png)|![4](https://user-images.githubusercontent.com/78653426/152985109-90d48190-b379-481d-aa1f-66ed1f86e581.png)|
| [정보 공유](https://www.notion.so/5520df8322e549ebb29b4528de020d52) | [구현명세 시각화](https://www.figma.com/file/4Cd5n1VVGLrAzlldO6FEEe/Swit?node-id=0%3A1) |
|![11](https://user-images.githubusercontent.com/78653426/153548448-d9e13041-e5fa-4b66-b69f-9b54b8d8fbdc.png)|![11](https://user-images.githubusercontent.com/78653426/153548281-6e4d5866-29ef-4a4d-b9e2-2c64c4e01dd2.png)|



<br>
<br>


## 📝 담당 기능

- `ChatInput` 컴포넌트
  - 카카오톡이나 다른 메신저의 인풋창 처럼 동작하게 하기 위해 `Enter`키는 전송 `Shift + Enter`키는 줄 바꿈 이벤트 분기 처리
- 메세지 전송, 답글, 삭제 기능 구현
- redux 전역 상태관리 담당
  - 평소 전역 상태관리는 `Context API`로만 관리하다가 `Redux`를 처음으로 도입
  - 어떤식으로 사용해야 best case인지 알기가 너무 힘들었다. 리덕스 사용에 들어가는 보일러 플레이트 코드가 많은 만큼 다양한 structure들이 많았고 어떤 것을 적용해야하는지.. 러닝커브가 좀 있다는 것을 깨달았다.
  - 과제가 끝난 후 따로 [Redux에 대해 공부](https://ludacirs.github.io/posts/Redux/) 를 진행함.
<br>

## 📈 디렉토리 구조
```
.
├── README.md
├── config-overrides.js
├── package.json
├── public
│   ├── _redirects
│   ├── index.html
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── index.tsx
│   ├── models
│   ├── pages
│   ├── react-app-env.d.ts
│   ├── redux
│   ├── setupTests.ts
│   ├── styles
│   ├── types
│   └── utils
├── tsconfig.json
├── tsconfig.paths.json
├── yarn-error.log
└── yarn.lock
```
