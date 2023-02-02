import './mylabel.css'

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

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
}: Props) => {
    return (
        <span className={`${size} text-${color}`} style={{color: fontColor}}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
