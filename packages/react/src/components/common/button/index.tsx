import { ButtonProps } from '~/interfaces/components/common/button.interface';
import './style.css';

function Button({
    text,
    icon: Icon = undefined,
    onClick,
    submit = false,
    disabled = false,
    variant = 'primary',
    outline = false,
    className = '',
}: ButtonProps) {
    const buttonClasses = `button ${
        outline
            ? `outline outline-${variant} ${className}`
            : `${variant} ${className}`
    }`;

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            type={submit ? 'submit' : 'button'}
            disabled={disabled}
        >
            {text && <span>{text}</span>}
            {Icon && <Icon />}
        </button>
    );
}

export default Button;
