import "./App.css";
import { useEffect, useState } from "react";
import { getEndDayOfMonth, getMonthList, getYearList } from "./utils";

function App() {
  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  // const [yearList, setYearList] = useState(getYearList());
  // const [monthList, setMonthList] = useState(getMonthList());
  const yearList = getYearList();
  const monthList = getMonthList();
  const [dayList, setDayList] = useState([...Array(31)].map((_, i) => 1 + i));
  const [dayOfWeek, setDayOfWeek] = useState("");

  useEffect(() => {
    const l = [...Array(getEndDayOfMonth(Number(year), Number(month)))].map(
      (_, i) => i + 1
    );
    // console.log(l);
    setDayList(l);
  }, [year, month]);

  const onClickButton = () => {
    let totalDays = 0;
    for (let i = 2000; i <= 2023; i++) {
      for (let j = 1; j <= 12; j++) {
        const endDayOfMonth = getEndDayOfMonth(i, j);

        if (i === Number(year) && j === Number(month)) {
          totalDays += Number(day);
          setDayOfWeek("金土日月火水木"[totalDays % 7] + "曜日");
          return;
        } else {
          totalDays += endDayOfMonth;
        }
      }
    }
  };

  return (
    <div className="App">
      <div>
        <select onChange={(e) => setYear(e.target.value)}>
          {yearList.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
        年
        <select onChange={(e) => setMonth(e.target.value)}>
          {monthList.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
        月
        <select onChange={(e) => setDay(e.target.value)}>
          {dayList.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
        日<button onClick={onClickButton}>曜日を出力</button>
      </div>
      <div style={{ fontSize: "72px", color: "red" }}>{dayOfWeek}</div>
    </div>
  );
}

export default App;
