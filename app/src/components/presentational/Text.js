import React from 'react';
import styled from "styled-components";
import colors from '../../config/colors.js';
import estilos from "../../config/estilos";


export const Texto = styled.Text`
    color: ${colors.PrimLight};
    position: relative;
    align-self: flex-start;
    margin-left: 57px;
    margin-bottom:3px;
    font-size: 16px;
`;

export const Title = styled.Text`
    color: ${colors.PrimLight};
    font-size: 24px;
`;

export const TextoButton = styled.Text`
    color: ${colors.PrimLight};
    font-size: 18px;
`;

export default Texto;
