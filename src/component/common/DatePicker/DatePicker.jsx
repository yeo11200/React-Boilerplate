import React, {useState} from 'react';
import style from './DatePicker.scss';
import classNames from "classnames";
import moment from "moment";

const cx = classNames.bind(style); // 해당 컨포넌트만 스타일을 적용할 경우, classname의 npm을 추가해서 classname을 강제로 만들어준다.
const DatePicker = (props) => {
    const {value} = props;
    const datas = ['일', '월', '화', '수', '목', '금', '토'];
    const [selectDate, setSelectDate] = useState(moment(value).format('YYYY-MM-DD'));

    const fnChangeDate = (date) => {
        setSelectDate(date);
    }

    /**
     * 달력 ul 그리는 함수
     *
     * return {JSX}
     */
    const fnCalendarHeader = () => {
        return datas.map((value, index) => {
            const classname = index === 0 ? 'date-sun' : index === 6 ? 'date-sat' : 'data-weekday';
            return (
                <div className={cx('RCA-calendar-date-component '+classname)}>
                    {value}
                </div>
            )
        })
    }

    console.log(selectDate);
    return(
        <div className={cx("RCA-calendar-container")}>
            <div className={cx('RCA-calendar-date-header')}>
                {fnCalendarHeader()}
            </div>
        </div>
    )
}

export default DatePicker;
