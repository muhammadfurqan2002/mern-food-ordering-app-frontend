import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function UserNameMenu() {
  const { user,logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 hover:text-orange-500 gap-2">
        <CircleUserRound className="text-orange-500" />
        {user?.email}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {/* <DropdownMenuLabel></DropdownMenuLabel> */}
        <DropdownMenuItem>
          <Link
            to={"/user-profile"}
            className="font-semibold hover:text-orange-500 tracking-wide"
          >
            User Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
       
        <DropdownMenuItem>
            <Button onClick={()=>logout()} className="flex flex-1 font-semibold bg-orange-500">
                Log Out
            </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
