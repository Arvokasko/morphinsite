import { motion } from 'framer-motion';

interface GradientBackgroundProps {
    currentPage: number;
}

const GradientBackground = ({ currentPage }: GradientBackgroundProps) => {
    // One continuous gradient that flows across all segments
    const continuousGradient =
        'linear-gradient(90deg, #000000 0%, #4a0a7d 25%, #b30056 50%, #a63d0f 75%, #b30056 100%)';

    // Calculate background position offset based on current page
    // Each page shift moves the gradient by 50% (to reveal the next segment)
    const backgroundPositionX = currentPage * 50;

    return (
        <motion.div
            layoutId="gradient-background"
            animate={{
                backgroundPosition: `${backgroundPositionX}% 0%`,
            }}
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
            }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: continuousGradient,
                backgroundSize: '300% 100%',
                backgroundPosition: `${backgroundPositionX}% 0%`,
                zIndex: -1,
            }}
        />
    );
};

export default GradientBackground;
