import styled from 'styled-components'

export const HeroContainer = styled.div`
    display: flex;
    background-image: url('https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size: cover;
    background-color: #ededed;
    background-position: center center;
    height: calc(100vh - 160px);
    width: 100vw;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
`;

export const HeroHeader = styled.div`
    display: flex;
    color: White;
    font-size: 5.9rem;
    letter-spacing: .15rem;
`;

export const HeroInfo = styled.div`
    display: flex;
    flex-direction: column; 
`;

export const HeroText = styled.div`
    display: flex;
    text-align: center;
    margin: auto;
    color: white;
    font-size: 80%;
`;