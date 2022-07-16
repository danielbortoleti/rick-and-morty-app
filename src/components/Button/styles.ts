import styled, {css} from "styled-components/native";

export const Container = styled.TouchableOpacity`
    ${({theme}) => css`
        width:90%;
        height:50px;
        background-color: ${theme.colors.green};
        border-radius: 20px;
        margin-top: 80px;
        justify-content:center;
        align-items:center;
    `}

`

export const Title = styled.Text`
    ${({theme}) => css`
        font-size:16px;
        font-weight: bold;
        color: ${theme.colors.white}
    `}
`