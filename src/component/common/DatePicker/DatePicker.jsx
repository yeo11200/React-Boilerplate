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
     * 달력 헤더 ul 그리는 함수
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

    /**
     * 달력 몸체 ul 그리는 함수
     *
     * return {JSX}
     */
    const fnDate = () => {
        const firstDayOfMonth = moment(value).startOf('month');
        const firstDateOfMonth = firstDayOfMonth.get('d');

        const firstDayOfWeek = firstDayOfMonth.clone().add('d', -firstDateOfMonth);

        console.log(firstDayOfWeek);
        // const lastDayOfThisCalendar = dayOfThisCalendar.clone().add('d', 6 * 7);

        const _Weeks = [];

        for (let i = 0; i < 6; i++) {
            console.log(firstDayOfWeek.clone().add('d', i * 7).format("YYYY-MM-DD"));

            _Weeks.push((
                fnDays(firstDayOfWeek.clone().add('d', i * 7).format("YYYY-MM-DD"))
            ))
        }
        return _Weeks
    }

    const fnDays = (firstDayOfWeek) => {
        const _days = [];

        for (let i = 0; i < 7; i++) {

            const Day = moment(firstDayOfWeek).add('d', i);
            _days.push({
                yearMonthDayFormat: Day.format("YYYY-MM-DD"),
                getDay: Day.format('D'),
                isHolyDay: false
            });
        }

        return _days.map((dayInfo, i) => {

            let className = "date-weekday-label";

            if (i === 0) {
                className = "date-sun";
            } else if (i === 6) {
                className = "date-sat"
            }

            return (
                <div className={"RCA-calendar-day " + className} onClick={() => fnChangeDate(dayInfo.yearMonthDayFormat)}>
                    <label className="RCA-calendar-day-label">
                        {dayInfo.getDay}
                    </label>
                    {/* <label className="RCA-calendar-day">{dayInfo.getDay}</label> */}
                </div>
            )
        })
    }

    fnDate();

    return(
        <div className={cx("RCA-calendar-container")}>
            <div className={cx('RCA-calendar-date-header')}>
                {fnCalendarHeader()}
            </div>
            <div className={cx('RCA-calendar-day-label')}>
                {fnDate()}
            </div>
        </div>
    )
}

export default DatePicker;
