import React, { useEffect, useState } from "react";
import { ClassRocket, FunctionalRocket } from "./Rocket";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "../styles/_launchpad.scss";

export default function LaunchPad() {
    const [rerenderCount, triggerRerender] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            triggerRerender(rerenderCount + 1);
        }, 500);
    }, [rerenderCount]);

    return (
        <BrowserRouter>
            <Switch>
                <div className="launchpad">
                    <Route
                        path="/functionalrocket"
                        component={FunctionalRocket}
                    />
                    <Route path="/classrocket" component={ClassRocket} />
                    {/* <Route path="/">
                        <Redirect to="/classrocket" />
                    </Route> */}
                </div>
            </Switch>

            {/* <FunctionalRocket /> */}
            <ClassRocket />
        </BrowserRouter>
    );
}
