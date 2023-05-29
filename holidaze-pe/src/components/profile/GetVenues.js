// import { useEffect, useState } from "react";
// import ApiHook from "../../hooks/apiHook"
// import { profileUrl } from "../constants"

// function GetVenues() {
//     const [length, setLength] = useState("")

//     const userInfo = JSON.parse(localStorage.getItem("user"));
//     const { name } = userInfo;
//     const getVenuesUrl = profileUrl + name + "?_venues=true&sort=created";
//     const { data } = ApiHook(getVenuesUrl);

//     useEffect(() => {
//         if (data) {
//             setLength(data.venues.length)
//         }
//     })

//     return <p>Ownes {length} venue(s)</p>
// }

// export default GetVenues;