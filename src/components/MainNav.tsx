import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserNameMenu from "./UserNameMenu";

export default function MainNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const loginWithAuth = async () => {
    await loginWithRedirect();
  };
  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <UserNameMenu />
      ) : (
        <Button
          onClick={loginWithAuth}
          variant={"ghost"}
          className="font-bold hover:text-orange-500 hover:bg-white text-[1em]"
        >
          Log In
        </Button>
      )}
    </span>
  );
}
