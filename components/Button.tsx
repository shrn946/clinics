import Link from 'next/link';

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'highlighted' | 'border';
  className?: string;
}

export default function Button({
  label,
  href,
  onClick,
  type = 'button',
  variant = 'default',
  className = '',
}: ButtonProps) {
  let variantClass = 'btn-default';
  if (variant === 'highlighted') {
    variantClass = 'btn-default btn-highlighted';
  } else if (variant === 'border') {
    variantClass = 'btn-default btn-border';
  }

  const combinedClass = `${variantClass} ${className}`.trim();

  if (href) {
    if (href.startsWith('http') || href.startsWith('#')) {
      return (
        <a href={href} className={combinedClass} onClick={onClick}>
          {label}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick}>
      {label}
    </button>
  );
}
