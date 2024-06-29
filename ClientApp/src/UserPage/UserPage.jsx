import React from "react";
import { useState } from "react";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./UserPage.css";

export default function UserPage() {
  const money=useState('0');
    const date=useState( Date());
    const [priority,setPriority]=useState('High')



    function getCurrentDate() {
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
      const currentDate = new Date();
    
      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      const month = monthsOfYear[currentDate.getMonth()];
      const day = currentDate.getDate();
      const year = currentDate.getFullYear();
    
      const formattedDate = `${dayOfWeek} ${month} ${day} ${year}`;
    
      return formattedDate;
    }
    
  return(
  <>
  <div className="body">
  <div className="ButtonContainer">
    <Popup
      trigger={<button className="button"> Add Budget</button>}
      position="right center"
      style={{ padding: "0" }}
      className="pop-up1"
    >
      <div className="ProcessForm AddBudget">
        <form action="">
          <div className="inline">
            <label htmlFor="">Amount:</label>
            <input type="text" name="" id="" placeholder="Enter Your budget" />
          </div>

          <input type="button" value="submit" />
        </form>
      </div>
    </Popup>
    <Popup
      trigger={<button className="button">Digital Loan</button>}
      position="right center"
      className="pop-up2"
    >
      <div className="DigitalLoan">
        <form action="">
          <div className="inline">
            <label htmlFor="">Needed loan:</label>
            <input type="text" name="" id="" placeholder="Enter Your budget" />
          </div>
          <div className="inline">
            <p>Pay in</p>

            <select name="months" id="months">
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <p>months</p>
          </div>

          <input type="button" value="submit" />
        </form>
      </div>
    </Popup>
    <Popup
      trigger={<button className="button">Add Expense</button>}
      position="right center"
      className="pop-up3"
    >
      <div className="ProcessForm AddExpenses">
        <form action="">
          <div className="inline">
            <label htmlFor="">Category:</label>
            <select name="category" id="category">
              <option value="Entertainment">Entertainment</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="inline">
            <label htmlFor="">Priority:</label>
            <select name="Priority" id="Priority">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="inline">
            <label htmlFor="">Amount:</label>
            <input type="text" name="" id="" placeholder="Enter Your budget" />
          </div>
          <div className="inline">
            <label htmlFor="">Date:</label>
            <input type="date" name="" id="" defaultValue={Date} />
          </div>

          <div>
            <input type="button" value="submit" />
          </div>
        </form>
      </div>
    </Popup>
    </div>

    <div className="MyExpensesContainer">
        <h1>My Expenses</h1>
        <p>Today {getCurrentDate()}</p>
        <div>
        <FontAwesomeIcon icon={faCartShopping} />
            <div>
                <p>spent {money} egp</p>
                <p>priority: {priority}</p>
            </div>
        </div>
      </div>
      </div>
  </>
);
  }
