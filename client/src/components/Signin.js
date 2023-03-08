//import React from "react";
import React from "react";
import {useState, useRef } from "react";
import { Link } from "react-router-dom";


const Signin = () => {
    const SHEET_ID = '1BKA1gZL7_hJhY2ytYX59PTRNpQFNeG3LjV1k7U7X5cs'
    const ACCESS_TOKEN = `findanotheryoudolt`
    const formRef = useRef(null)
    const [name, setName] = useState("");
    const [voltype, setVoltype] = useState("");
    const [starttime, setStart] = useState("");
    const locale = 'en';
    const [today, setDate] = React.useState(new Date());
    const [loading, setLoading] = useState(false)

//Here is where the information to both save to LocalStorage AND send to Google Sheets logic will probably have to go.
    const scriptURL = ""
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //update this token with yours. 
                Authorization: `Bearer ${ACCESS_TOKEN}`, 
            },
            body: JSON.stringify({

                "requests": [
                  {
                    "updateCells": {
                      "range": {
                        "startRowIndex": 0,
                        "startColumnIndex": 0,
                        "endColumnIndex": 1,
                        "endRowIndex": 3,
                        "sheetId": 0
                      },
                      " ": [
                        {
                          "values": [
                            {
                              "userEnteredValue": {
                                "stringValue": {name}
                              }
                            }
                          ]
                        },
                    ],
                      "fields": "*"
                    }
                  }
                ]
        
              })
            })

        alert(`Your name is: ${name}
                you are volunteering to: ${voltype}
                starting at: ${starttime}`)
            }

    const handleValueChange = (event) => {
        event.preventDefault();
        setVoltype(event.target.value)
    }

    React.useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer);
        }
    },[]);

    const day = today.toLocaleDateString(locale, {weekday: 'long'});
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

  
  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
    return(
        
        <div>
            <h1>{date}</h1>
            <h2>{time}</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <th>First and Last Name</th>
                        <th>Select Volunteer Type</th>
                        <th>Select Start Time</th>
                    </tr>
                    <tr>
                        <td><input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}/></td>
                        <td>
                        <table onChange={handleValueChange}>
                                <tr>
                                    <input type="radio" id="voltype1" name="voltype" value="Monster"/>Monster Town
                                    <input type="radio" id="voltype1" name="voltype" value="Tavern"/>Tavern Shift
                                    <input type="radio" id="voltype1" name="voltype" value="Safety"/>Safety Check In
                                </tr>
                                <tr>
                                    <input type="radio" id="voltype1" name="voltype" value="Cleanup"/>Set Up / Clean Up
                                    <input type="radio" id="voltype1" name="voltype" value="Marshal"/>Marshalling
                                    <input type="radio" id="voltype1" name="voltype" value="Media"/>Social Media
                                </tr>
                        </table>
                        </td>
                        <td><input 
                                type="datetime-local" 
                                value={starttime}
                                onChange={(e) => setStart(e.target.value)}/></td>
                    </tr>
                    <tr>
                        
                        
                    </tr>
                    <tr><td><input type='submit' value="Submit"/></td></tr>
                </table>
                
            </form>
        </div>
    )

};

export default Signin;
