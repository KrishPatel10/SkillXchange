import Navbar from "./Navbar"
import Profile_card from "./Profile_card"
import Profile_details from "./Profile_details"
import Profile_links from "./Profile_links"

export default function profile(){
    return(
        <div className="flex">
            <div className="w-1/4">
                <Profile_card/>
                <Profile_links/>
            </div>
            <div className="w-full">
                <Profile_details/>
            </div>
        </div>
    )
};