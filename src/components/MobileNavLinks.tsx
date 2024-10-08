import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function MobileNavLinks() {
    const {logout} =useAuth0();
  return (
    <div className="flex flex-col gap-5">
      <Link
        to={"/user-profile"}
        className="flex items-center bg-white font-semibold hover:text-orange-500 "
      >
        User Profile
      </Link>
      <Button onClick={()=>logout()} className="flex items-center px-3 font-semibold hover:bg-gray-500">
        Log Out
      </Button>
    </div>
  );
}
