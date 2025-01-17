import { useState, useEffect } from 'react';
import {
    FaCheckCircle,
    FaExclamationCircle,
    FaExclamationTriangle,
    FaInfoCircle,
} from 'react-icons/fa';
import { AlertProps } from '~/interfaces/components/feedback/alert.interface';
import './style.css';

function Alert({
    type = 'info',
    message,
    duration = 30000,
    icon: IconComponent,
}: AlertProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setIsVisible(true);

        const timer =
            duration !== 0
                ? setTimeout(() => setIsVisible(false), duration)
                : null;

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [duration, message]);

    if (!isVisible) return null;

    const getIcon = () => {
        if (IconComponent) return <IconComponent />;

        switch (type) {
            case 'success':
                return <FaCheckCircle />;
            case 'error':
                return <FaExclamationCircle />;
            case 'warning':
                return <FaExclamationTriangle />;
            case 'info':
            case 'default':
            default:
                return <FaInfoCircle />;
        }
    };

    return isVisible ? (
        <div
            className={`Alert ${type}`}
            onClick={() => setIsVisible(false)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    setIsVisible(false);
                }
            }}
        >
            {getIcon()}
            <p>{message}</p>
        </div>
    ) : null;
}

export default Alert;
