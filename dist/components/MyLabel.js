import { jsx as _jsx } from "react/jsx-runtime";
import './mylabel.css';
export const MyLabel = ({ label = 'No Label', size = 'normal', allCaps = false, color = 'primary', fontColor }) => {
    return (_jsx("span", { className: `${size} text-${color}`, style: { color: fontColor }, children: allCaps ? label.toUpperCase() : label }));
};
