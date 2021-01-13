import styled from 'styled-components'  

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    margin: 25px auto;
    width: 1000px;
`;

export const FooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FooterMedia = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 30%;

    img {
        margin: 0 5px;
    }
    
`;
