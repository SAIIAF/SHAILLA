import { useState, useEffect, useRef } from 'react';

export const useCounter = (target: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLDivElement | null>(null);
    const startedRef = useRef(false);

    useEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !startedRef.current) {
                    startedRef.current = true;

                    let startTime: number | null = null;

                    const step = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;

                        const progress = Math.min((timestamp - startTime) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);

                        setCount(Math.floor(eased * target));

                        if (progress < 1) {
                            requestAnimationFrame(step);
                        }
                    };

                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [target, duration]);

    return { count, elementRef };
};