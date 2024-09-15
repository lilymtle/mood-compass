import { Button } from "../../components/Button/Button";
import "./ProfilePage.scss";

import { logoutUser } from "../../auth/authUtils";
import { navigationHandler } from "../../utils/navigationHandler";

export function ProfilePage() {
    const navigateTo = navigationHandler();

    const handleLogout = () => {
        logoutUser();
        navigateTo("/");
    }

    return (
        <main>
            Placeholder for profile

            <Button
            className="logout-btn"
            type="submit"
            text="Logout"
            onClick={handleLogout} />
        </main>
    )
};