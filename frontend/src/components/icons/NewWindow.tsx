interface Props {
    className?: string;
    color?: string;
}

export default function NewWindowIcon({
    className = "mx-auto",
    color = "#1A1D3C",
}: Props) {
    return (
        <svg
            className={className}
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M35 5H25M35 5L20 20M35 5V15"
                stroke="#1A1D3C"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M35 21.6667V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V8.33333C5 7.44928 5.35119 6.60143 5.97631 5.97631C6.60143 5.35119 7.44928 5 8.33333 5H18.3333"
                stroke={color}
                stroke-width="2.5"
                stroke-linecap="round"
            />
        </svg>
    );
}
