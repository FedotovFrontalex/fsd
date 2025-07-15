import { Outlet } from "react-router"
import { Footer } from "@/shared/ui"
import { Icon } from "@/assets"

export const Layout  = () => {
    return <div>
        <div>Header</div>
        <Icon.Check />
        <Outlet />
        <Footer />
    </div>
}