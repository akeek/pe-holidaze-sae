import { React } from "react";
import Calendar from "../../components/SpecificVenue/bookVenue";

const Book = () => {
    const onChange = (ranges) => {
        console.log(ranges);
    };

    return (
        <div className="App">
            <Calendar onChange={onChange} />
        </div>
    );
};
export default Book;