var i=Object.defineProperty;var l=(o,a)=>i(o,"name",{value:a,configurable:!0});import{j as r}from"./jsx-runtime-69008c6b.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";const n=l(({label:o="No Label",size:a="normal",allCaps:t=!1,color:s="primary",fontColor:c})=>r("span",{className:`${a} text-${s}`,style:{color:c},children:t?o.toUpperCase():o}),"MyLabel");try{n.displayName="MyLabel",n.__docgenInfo={description:"",displayName:"MyLabel",props:{size:{defaultValue:{value:"normal"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'}]}},label:{defaultValue:{value:"No Label"},description:"Button contents",name:"label",required:!1,type:{name:"string"}},allCaps:{defaultValue:{value:"false"},description:"Capital letters",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Font color",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const g={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary']},
        fontColor: {control: 'color'}
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false,
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}
export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}
export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}
export const CustomFontcolor = Template.bind({});
CustomFontcolor.args = {
    size: 'normal',
    fontColor: '#40097a'
}`,locationsMap:{basic:{startLoc:{col:49,line:13},endLoc:{col:80,line:13},startBody:{col:49,line:13},endBody:{col:80,line:13}},"all-caps":{startLoc:{col:49,line:13},endLoc:{col:80,line:13},startBody:{col:49,line:13},endBody:{col:80,line:13}},secondary:{startLoc:{col:49,line:13},endLoc:{col:80,line:13},startBody:{col:49,line:13},endBody:{col:80,line:13}},tertiary:{startLoc:{col:49,line:13},endLoc:{col:80,line:13},startBody:{col:49,line:13},endBody:{col:80,line:13}},"custom-fontcolor":{startLoc:{col:49,line:13},endLoc:{col:80,line:13},startBody:{col:49,line:13},endBody:{col:80,line:13}}}}},title:"UI/MyLabel",component:n,argTypes:{color:{control:"select",options:["primary","secondary","tertiary"]},fontColor:{control:"color"}}},e=l(o=>r(n,{...o}),"Template"),p=e.bind({});p.args={size:"normal",allCaps:!1};const d=e.bind({});d.args={size:"normal",allCaps:!0};const y=e.bind({});y.args={size:"normal",color:"secondary"};const m=e.bind({});m.args={size:"normal",color:"tertiary"};const u=e.bind({});u.args={size:"normal",fontColor:"#40097a"};const B=["Basic","AllCaps","Secondary","Tertiary","CustomFontcolor"];export{d as AllCaps,p as Basic,u as CustomFontcolor,y as Secondary,m as Tertiary,B as __namedExportsOrder,g as default};
//# sourceMappingURL=MyLabel.stories-c17ea64c.js.map
