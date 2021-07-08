# React-Boilerplate
[React] 프로젝트 기본틀

우선 순위
- 린트설정
- webpack.config 설정

1. DataPricker
   - 날짜 데이터
    ```npm
        npm install --save moment // moment는 날짜 라이브러리
    ```
2. Modal
3. DropDown
4. Excel
5. 카톡 알림


scss 도입
- scss는 css의 전처리로, css에 프로그래밍적으로 풀어쓸수 있다.
- classname과 같이 쓰면 더욱 편하게 사용할 수 있다.
```npm
   npm install --save node-sass // Sass를 css로 변환해주는 npm
   npm install --save classnames // 동적으로 클래스이름을 추가하고 사용할 수 있다.
   // classname.bind(style)
```

babel 도입
- babel은 트랜스파일러라고 하고, 브라우저가 지원하지않는경우나 ES6이상의 문법을 사용할 경우 트랜스파일링이 필요하다.
- 트랜스파일러 Babel, 모듈 번들러 Webpack을 이용해서 사용을 할 수 있다.
```npm
   npm install -D babel-loader @babel/core @babel/preset-env webpack
```
