import React, { useState } from 'react';
import './CustomCalendar.css'
const CustomCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const daysInMonth = (month, year) => {
      return new Date(year, month + 1, 0).getDate();
    };
  
    const getMonthDays = () => {
      const currentDate = new Date();
      const month = currentDate.getMonth();
      const year = currentDate.getFullYear();
      const totalDays = daysInMonth(month, year);
  
      const monthDays = [];
      for (let day = 1; day <= totalDays; day++) {
        monthDays.push(new Date(year, month, day));
      }
  
      return monthDays;
    };
  
    const handleDateClick = (date) => {
      setSelectedDate(date);
      // You can perform any additional actions on date selection
    };
  
    const renderCalendar = () => {
      const monthDays = getMonthDays();
  
      return (
        <div className="custom-calendar">
          <div className="header">Calendar</div>
          <div className="days">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="day">
                {day}
              </div>
            ))}
          </div>
          <div className="dates">
            {monthDays.map((date) => (
              <div
                key={date.toISOString()}
                className={`date ${selectedDate && date.toISOString() === selectedDate.toISOString() ? 'selected' : ''}`}
                onClick={() => handleDateClick(date)}
              >
                {date.getDate()}
              </div>
            ))}
          </div>
        </div>
      );
    };
  
    return <div>{renderCalendar()}</div>;
  };

export default CustomCalendar
