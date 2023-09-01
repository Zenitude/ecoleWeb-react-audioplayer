import { useState, useEffect } from "react";

export default function useDimension () {
    const [ dimension, setDimension ] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setDimension(window.innerWidth));
    }, [])

    return dimension;
}