import { useNavigate } from "react-router-dom";

export function navigationHandler() {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return navigateTo;
};