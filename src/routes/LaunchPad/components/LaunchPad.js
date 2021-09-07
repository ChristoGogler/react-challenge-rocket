import React, { useEffect, useState } from "react";
import { ClassRocket, FunctionalRocket } from "./Rocket";
import "../styles/_launchpad.scss";

export default function LaunchPad() {
    const [rerenderCount, triggerRerender] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            triggerRerender(rerenderCount + 1);
        }, 500);
    }, [rerenderCount]);

    return (
        <div className="launchpad">
            {/* <FunctionalRocket /> */}
            <ClassRocket />
        </div>
    );
}
