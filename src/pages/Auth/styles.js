import styled from "styled-components/native";

export const Container = styled.View`
flex:1;
height:100%;
justify-content: center;
padding: 0 36px 0 36px;
`;

export const Form = styled.View`
color:#000;
heigth:100%;
width:100%;
`;

export const H1 = styled.Text`

font-size: 40px;
font-weight: 800;
color: #000;
`;

export const P = styled.Text`
font-size: 20px;
color: #000;
`;

export const LabelInput = styled.Text`
font-size: 20px;
font-weight: bol;
font-family: 'Cochin';
`;
export const SubForm = styled.View`
width: 100%;
background-color:gray;
height: auto;
padding:18px;
border-radius:10px
`;

export const Email = styled.View`
flex-direction: row;
align-items: center;
width: 100%;
padding:${obj => obj.email ? '5px 10px 0px 10px' : '5px 10px 0px 10px'};
margin-top:20px
margin-bottom: 20px;
border-bottom-width: ${p => p.email ? '0' : '3'};
${obj => !obj.email ? 'justify-content: space-between;' : ''}
${obj => obj.email ? 'shadow-color: "#000";shadow-offset: {width: 0, height: 5,};shadow-opacity:0.34};shadow-radius: 6.27;elevation:5};background-color: #fff;' : ''}
border-radius: 3px;
border-color:lightgrey;
border-weight: 5px;
`;
export const Button = styled.TouchableOpacity`
width: 100%;
flex-direction: row;
color: #FFF;
justify-content: flex-end;
`;
export const SmallLabel = styled.Text`
`;
export const Input = styled.TextInput`
width: ${obj => obj.width ? obj.width + '%' : '100%'};
font-size: 18px;
height: 100%
`;