import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ILinksProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    direction?: 'horizontal' | 'vertical',
    children: ReactNode
}