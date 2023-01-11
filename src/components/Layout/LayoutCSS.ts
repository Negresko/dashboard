import styled from "styled-components";

export const ContainerLayout = styled.div`
    
    /*
    * LAYOUT
    * AS = Aside
    * CT = Content
    * MH = Main Header
    */
    
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;

    grid-template-areas: 'AS MH' 'AS CT';

    height: 100vh;
`;