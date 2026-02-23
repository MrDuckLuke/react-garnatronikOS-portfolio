import { useEffect } from "react";

export default function HomePageStaticBlock({ children, onFinished }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onFinished) onFinished();
        }, 1000);
        return () => clearTimeout(timer);
    }, [onFinished])

    return <div>{children}</div>
}