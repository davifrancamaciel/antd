import React, { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";

const Watch: React.FC = () => {
    const [time, setTime] = useState(new Date());
    const dateFormated = useMemo(
        () =>
            format(time, "eeee',' d 'de' MMMM  'de' yyyy HH:mm:ss", { locale: pt }),
        [time]
    );

    useEffect(() => {
        const intervalId = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const tick = () => {
        setTime(new Date());
    };
    return <span>{dateFormated}</span>;
}

export default Watch;