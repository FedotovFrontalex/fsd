import { Link } from "react-router"
import { ROUTES } from "@/shared/routes"

export const MainPage = () => {
    return <>
        <h1>Main Page</h1>
        <Link to={ROUTES.profile.index}>Профиль</Link>
    </>
};
