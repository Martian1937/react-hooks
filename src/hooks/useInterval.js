import { useEffect, useRef } from 'react';
function useInterval(fn = ()=> {}, delay, option = { immediate: false}) {
    const { immediate } = option;
    const fnRef = useRef();
    fnRef.current = fn;
    useEffect(() => {
        if (delay === undefined || delay === null) return ;
        if (immediate) fnRef.current();
        const timer = setInterval(() => {
                fnRef.current();
        }, delay);
        return () => {
            clearInterval(timer);
        }
    }, [delay])

}

export default useInterval;