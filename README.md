# Udon-house
###  Result
![image](https://user-images.githubusercontent.com/91236732/228298406-8f91154d-26a4-4ff9-84d9-cb74d64b0811.png)
---
# 🚀 배포

[![Netlify Status](https://api.netlify.com/api/v1/badges/8c963488-351b-41d4-9152-60535ac564b2/deploy-status)](https://udon-house.netlify.app/)


# 🗣 팀 구성(5명)

  <a href="https://github.com/leejh4197">
    <img src="https://github.com/leejh4197.png" width="130">
  </a>
  <span style="color:red">이주형</span>
  <a href="https://github.com/dydgh142">
    <img src="https://github.com/dydgh142.png" width="130">
  </a>
  <span>조윤호</span>
  <a href="https://github.com/YUhari0901">
    <img src="https://github.com/YUhari0901.png" width="130">
  </a>
  <span>유하리</span>
  <a href="https://github.com/oweaj">
    <img src="https://github.com/oweaj.png" width="130">
  </a>
  <span>장재우</span>
  <a href="https://github.com/sumin-Kim-00">
    <img src="https://github.com/sumin-Kim-00.png" width="130">
  </a>
  <span>김수민</span>



# 📝 기획 과정

1일) 주제정하기

2일) 공공api데이터 찾기, 참조할 사이트 찾기
(레퍼런스 사이트 https://i-nara.co.kr/#full0)

3일) 기술스택, 코드컨벤션, 라이브러리 선정


# 🔧 기술 스택

- React
- Recoil
- React-router-dom
- Axios
- tailwind

## 폴더 구조
```sh
📦public
 ┣ 📂aboutUs
 ┣ 📂imageSilde
 ┣ 📂main
 ┣ 📂map
 ┗ 📂myPage

📦src
 ┣ 📂Atom
 ┃ ┗ 📜atom.js
 ┣ 📂components
 ┃ ┣ 📂Community
 ┃ ┃ ┣ 📜BoardItem.js
 ┃ ┃ ┣ 📜BoardList.js
 ┃ ┃ ┣ 📜BoardListItem.js
 ┃ ┃ ┣ 📜CancelButton.js
 ┃ ┃ ┗ 📜WriteButton.js
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜Footer.js
 ┃ ┃ ┗ 📜MainFooter.js
 ┃ ┣ 📂Header
 ┃ ┃ ┗ 📜Header.js
 ┃ ┣ 📂Mains
 ┃ ┃ ┣ 📜FirstMain.js
 ┃ ┃ ┣ 📜SecondMain.js
 ┃ ┃ ┗ 📜ThirdMain.js
 ┃ ┣ 📂MapInfo
 ┃ ┃ ┣ 📜KindergartenList.js
 ┃ ┃ ┣ 📜KindergartenMap.js
 ┃ ┃ ┗ 📜KindergartenModal.js
 ┃ ┣ 📂MyPage
 ┃ ┃ ┣ 📜AddPhoto.js
 ┃ ┃ ┣ 📜Favorite.js
 ┃ ┃ ┣ 📜MyBoard.js
 ┃ ┃ ┗ 📜ProfilePopup.js
 ┃ ┣ 📂Nav
 ┃ ┃ ┗ 📜Nav.js
 ┃ ┗ 📂utilCss
 ┃ ┃ ┣ 📜boardListItem.css
 ┃ ┃ ┗ 📜main.css
 ┣ 📂pages
 ┃ ┣ 📂AboutUs
 ┃ ┃ ┗ 📜AboutUs.js
 ┃ ┣ 📂Community
 ┃ ┃ ┣ 📜Community.js
 ┃ ┃ ┗ 📜WriteCommunity.js
 ┃ ┣ 📂Main
 ┃ ┃ ┗ 📜Main.js
 ┃ ┣ 📂Map
 ┃ ┃ ┗ 📜Map.js
 ┃ ┣ 📂MyPage
 ┃ ┃ ┗ 📜MyPage.js
 ┃ ┣ 📂NotFound
 ┃ ┃ ┗ 📜NotFound.js
 ┃ ┣ 📂SignIn
 ┃ ┃ ┗ 📜SignIn.js
 ┃ ┗ 📂SignUp
 ┃ ┃ ┗ 📜SignUp.js
 ┣ 📂util
 ┃ ┣ 📜data.js
 ┃ ┣ 📜fbase.js
 ┃ ┗ 📜util.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜reportWebVitals.js

```

# 💡 구현 내용

## 1. 로그인 벨리데이션 체크

firebase사용하여 정규식과 조합해 로그인 회원가입을 구현/구글,깃허브 소셜로그인도 구현

## 2. 공공api데이터와 kakaomap을 사용하여 지도구현
서울시공공데이터에 유치원api를 요청받아 kakaomap과 결합하여 구현하였습니다. 필터링 기능도 추가하여 본인이 찾고 싶은 데이터를 검색할 수 있도록 구현하였고, 각각의 세부 정보는 모달창을 띄워 확인이 가능하도록 구현하였습니다.

## 3. 글쓰기, 즐겨찾기, 내가쓴글
커뮤니티 페이지에서 글쓰기가 가능하고 좋아요 기능도 구현하였습니다. 
좋아요 수에 맞게 Top3 게시물이 바뀌고 본인이 쓴글은 수정,삭제가 가능하며 마이페이지에서 본인이 쓴 글도 확인이 가능합니다.
map페이지에서 즐겨찾기 해둔 유치원 리스트도 마이페이지에서 확인이 가능합니다.

## 4. 회원 검색 결과 페이지네이션
회원 검색 결과를 페이지 당 5명씩 보여줄 수 있도록, 회원 데이터 배열에 slice((page - 1) * 5, (page - 1) * 5 + 5) 함수를 적용해 구현했습니다. 이에 따라 회원 수가 많아질 경우에도 스크롤 없이 관리할 수 있게 하였습니다.


## 5. 마이페이지
내가 쓴 글, 유치원 즐겨찾기 확인이 가능하고 프로필 수정도 가능하게 만들었습니다 react-dropzone 라이브러리를 활용하여 구현하였습니다.

## 6. 존재하지 않는 url 검색
notfound페이지도 따로 만들어 존재하지 않는 url에 접근시 잘못된 경로임을 사용자에게 알려주도록 notfound페이지를 따로 만들었습니다.
