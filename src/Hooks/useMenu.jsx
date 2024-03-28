import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    console.log(menu);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/MenuData.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            });
    }, [])
    return [menu, loading]
}

export default useMenu;