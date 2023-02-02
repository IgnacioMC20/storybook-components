import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components/MyLabel";
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        fontColor: { control: 'color' }
    }
};
const Template = (args) => _jsx(MyLabel, { ...args });
export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false,
};
export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
};
export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
};
export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
};
export const CustomFontcolor = Template.bind({});
CustomFontcolor.args = {
    size: 'normal',
    fontColor: '#40097a'
};
