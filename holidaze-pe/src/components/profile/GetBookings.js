// import { useEffect, useState } from "react";
// import ApiHook from "../../hooks/apiHook"
// import { profileUrl } from "../constants"

// function GetBookings() {
//     const [length, setLength] = useState("")

//     const userInfo = JSON.parse(localStorage.getItem("user"));
//     const { name } = userInfo;
//     const getBookingsUrl = profileUrl + name + "?_bookings=true";
//     const { data } = ApiHook(getBookingsUrl);

//     useEffect(() => {
//         if (data) {
//             setLength(data.bookings.length)
//         }
//     })

//     return <p>Has {length} current booking(s)</p>
// }

// export default GetBookings;