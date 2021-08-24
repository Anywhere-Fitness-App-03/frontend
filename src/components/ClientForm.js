import React from 'react';

const ClientForm = () => {

    return (

        <form>
            <label htmlFor={"classTime"}> class Time
            <select id="classTime" name="classTime">
                <option>time 1</option>
                <option>time 2</option>
                <option>time 3</option>
            </select>
            </label>

            <label htmlFor={"classDate"}> class Date
                <select id="classDate" name="classDate">
                    <option>date 1</option>
                    <option>date 2</option>
                    <option>date 3</option>
                </select>
            </label>

            {/*// dont forget this*/}

            <label htmlFor={"classDuration"}> class Duration </label>


            <label htmlFor={"classType"}> class Type </label>
            <select id="classDate" name="classDate">
                <option>type 1</option>
                <option>type 2</option>
                <option>type 3</option>
            </select>

            <label htmlFor={"intensityLvl"}> intensity Level
                <select id="intensityLvl" name="intensityLvl">
                    <option>Level 1</option>
                    <option>Level 2</option>
                    <option>Level 3</option>
                </select>
            </label>

            <label htmlFor={"location"}> intensity Level
                <select id="location" name="location">
                    <option>location 1</option>
                    <option>location 2</option>
                    <option>location 3</option>
                </select>
            </label>

        </form>
    )

}
export default  ClientForm