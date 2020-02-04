마이 리얼 트립
===============

>포트폴리오 
>>**마이리얼트립 웹 애플리케이션**

<img width="300" height="500" src="https://user-images.githubusercontent.com/59439454/73727875-a698d100-4775-11ea-9318-5922763e7759.png">   

---------------------------------------------

<div>
  <img width="200" height="500" src="https://user-images.githubusercontent.com/59439454/73727877-a698d100-4775-11ea-99a1-a1fe5f76ec4c.png">
  <img width="200" height="500" src="https://user-images.githubusercontent.com/59439454/73727878-a698d100-4775-11ea-9699-7f7e74895658.png">
</div>   

---------------------------------------------

  <img width="200" src="https://user-images.githubusercontent.com/59439454/73727879-a7316780-4775-11ea-9f55-5560fa105ca3.png">
  <img width="200" src="https://user-images.githubusercontent.com/59439454/73727880-a7316780-4775-11ea-8aff-acb5f154bf02.png">

<br>
<br>

## 프로젝트

* Javascript ES6   
* React Router DOM   
* CSS (CSS.module)  

## ES6 Class 기반 프로젝트

클래스 단위로 컴포넌트들을 관리하며, 클래스 내에서 함수들을 바인딩하여 사용합니다.

## 프로젝트 폴더 Structure
```
my-real-trip/
├── js/
│   ├── index.js
│   └── App.js
│
├── jsx/
│   ├── components/
│   │   ├── containers/
│   │   └── layouts/
│   └── pages/
│
└── Css module/
```

<br>

## React Router DOM
react-router-dom 으로 컴포넌트의 위치를 정의 해주었습니다.

* 설치 방법

  npm install

  npm run start

  npm install --save react-router-dom          //react-router-dom 설치

  npm install --save react-router-transition   //react router의 효과 설치
  
```
import { HashRouter as Router, Route } from "react-router-dom";
```
이와 같이 import를 시켜 줍니다.
<br>
* Route 컴포넌트로 특정 주소에 컴포넌트 연결
```
<Router>
  <Route path="/" component={Home} exact />
  <Route path="/Detail" component={Detail} exact />
  <Route path="/TourTicket" component={TourTicket} exact/>
  <Route path="/Airplane" component={Airplane} exact/>
  <Route path="/PromotionTour" component={PromotionTour} exact/>
  <Route path="/Package" component={Package} exact/>
</Router>
```
Route라는 컴포넌트를 사용하여 사용자의 현재 경로에 따라 어떤 컴포넌트를 보여 줄지 정의할 수 있습니다.
<br>
+ <Route path="주소" component={보여 줄 컴포넌트} exact />
