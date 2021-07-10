import React from 'react';

const Paging = (props) => {
  const {totalCnt, nowCnt, wantCnt} = props
  const [pageCnt, setPageCnt] = React.useState(nowCnt ? nowCnt : 1);
  const want = React.useMemo(() => {
    return wantCnt ? wantCnt : 10;
  }, [wantCnt]);
  
  const pages = parseInt((totalCnt === 0) ? '1' : ((totalCnt -1) / want) + 1); // 소수점이 나올 경우, 정수형으로해서 비교를 해준다.
  
  const fnPageList = React.useCallback(() => {
    const page = [];
    const block = Math.ceil(1.0 * pageCnt / want); // 소수점을 반올림하는 함수
    const first = (block -1) * want + 1;
    let end = block * want; // 원하는 갯수만큼 리턴
    
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
    
    return page;
  }, [nowCnt]);
  
  return (
     <div>
         <ul>
           <li>&lt;</li>
           {fnPageList()}
           <li>&gt;</li>
         </ul>
     </div>
  )
}

export default Paging;
