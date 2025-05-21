import { ITextLogo } from "@/app/lib/Interfaces/interfaces.textlogo";

export default function TextLogo({ text, style }: ITextLogo) {
    return (
        <span className={style}>
            {text}
        </span>
    );
}
