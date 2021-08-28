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
6. axios
7. paging
   - 페이징 로직 추가
   ```javascript
    const block = Math.ceil(1.0 * pageCnt / want); // 소수점을 반올림하는 함수
    const first = (block -1) * want + 1; // 시작하는 로직
    let end = block * want; // 끝나는 로직
    
    if (end > pages) { // totalCnt의 갯수만큼 페이지가 왔다면, end를 페이지로 변환해서 더 큰 페이지가 나오기 방지
      end = pages;
    }
   
    for (let i = first; i <= end; i++) {
      page.push(
        <li>
          {i}
        </li>
      )
    }
   ```
   - 추가할 로직 
      - <, > 눌렀을 경우, 원하는 페이지만큼 이동이거나 혹은 원하는 페이지 숫자이동 만큼을 추가
   - 퍼블리싱 추가 
   
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
