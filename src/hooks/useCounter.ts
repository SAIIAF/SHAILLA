import { useState, useEffect, useRef } from 'react';

export const useCounter = (target: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLDivElement | null>(null);
    const startedRef = useRef(false);

    useEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !startedRef.current) {
                    startedRef.current = true;

                    const start = performance.now();

                    const animate = (now: number) => {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) requestAnimationFrame(animate);
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.25, rootMargin: '0px 0px -15% 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);

    return { count, elementRef };
};
