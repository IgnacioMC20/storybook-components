/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
   * How large should the button be?
   */
    size?: 'normal' | 'h1' | 'h2';
    /**
   * Button contents
   */
    label: string;
    /**
   * Capital letters
   */
    allCaps: boolean;
    /**
   * Font color
   */
    color?: 'primary' | 'secondary' | 'tertiary';
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: Props) => JSX.Element;
