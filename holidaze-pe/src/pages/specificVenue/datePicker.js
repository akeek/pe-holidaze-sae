import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateRange() {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
        </div>
    )
}

export default DateRange;