import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.12) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            const elements = currentRef.querySelectorAll('.animate-on-scroll');
            elements.forEach((el) => observer.observe(el));
        }

        return () => {
            if (currentRef) {
                const elements = currentRef.querySelectorAll('.animate-on-scroll');
                elements.forEach((el) => observer.unobserve(el));
            }
        };
    }, [threshold]);

    return ref;
};
