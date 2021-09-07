import React, { useState, Component, useEffect } from "react";
import RocketCore from "./RocketCore";

export function FunctionalRocket() {
    const [initialLaunchTime, setInitialLaunchTime] = useState();

    useEffect(() => {
        setInitialLaunchTime(-1);
    }, []);

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
}

export class ClassRocket extends Component {
    constructor() {
        super();

        this.state = {
            initialLaunchTime: Date.now(),
        };
    }
    componentDidMount() {
        this.setState({ initialLaunchTime: 0 });
    }
    render() {
        const { initialLaunchTime } = this.state;

        return <RocketCore initialLaunchTime={initialLaunchTime} />;
    }
}
