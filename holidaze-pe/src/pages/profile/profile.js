import React from "react";
import UpdateAvatar from "./updateAvatar";
import Bookings from "./bookings";


function Profile() {
    return (
        <div>
            <UpdateAvatar />
            <hr></hr>
            <Bookings />
        </div>
    );
}

export default Profile;
