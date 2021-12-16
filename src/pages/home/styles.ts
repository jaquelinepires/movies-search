import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;  

h3 {
    font-family: 'Abel', sans-serif;
    padding: 1.25rem;
    font-size: 1.87rem;
    }
`;

export const SearchInput = styled.input`
    max-width: 60rem;
    width: 60vw;
    border: 0;
    border-radius: 200px 200px;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding: 1rem 2rem;
    background-color: #ebebeb;
    font-family: 'Lato', sans-serif;
    outline: 0;      
`;

export const MovieContent = styled.div`
    display: flex;
    background: #ebebeb;
    margin-bottom: 1.25rem;
    width: 60vw;
    margin: 1rem;
  
    ${media.lessThan("medium")`
    width: 25%;
    height:auto;
    `}
`;

export const MoviePoster = styled.img`
    width: 15vw;

    ${media.lessThan("small")`
    width: 100%;
    height: auto;
       
    `}
    ${media.lessThan("medium")`
    width: 100%;
    height: auto;
       
    `}
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    background: #ebebeb;
`;

export const Title = styled.div`
	font-family: 'Abel', sans-serif;
    font-size: 1.2rem;
	text-align: left;
	color: #00e8e4;
	background-color: #116193;
	padding: 1rem 0 0.5rem 5.6rem;
    width: 45vw;
    margin: 0;

 ${media.lessThan("medium")`
  width: 70vw;
`}
`;

export const Score = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Abel', sans-serif;
    font-size: 1.25rem;
    background-color: #116193;
    color: #00e8e4;
    padding: 0;
    margin: 0;
    border: 0.25rem solid #00e8e4;
    border-radius: 12.5rem;
    width: 60px;
    height: 60px;
    position: relative;
    top: -1.56rem;
    left: 1.25rem;
    z-index: 2;
    line-height: 50px;
`;

export const DateRelease = styled.p`
	position: relative;
	font-family: 'Abel', sans-serif;
	color: #b2b2b2;
	background-color: #ebebeb;
	padding: 0 0 0.6rem 5.6rem;
	margin: 0;
	top: -3.12rem; 
`;

export const Sinopse = styled.p`
	font-family: 'Lato', sans-serif;
	color: #adadad;
	background-color: #ebebeb;
	border: 1.25rem;
	margin: 0;
	padding: 0 0 0.62rem 1.56rem;
	position: relative;
    top: -2.5rem;
    overflow: auto;  
`;

export const GenreContainer = styled.div`
    display: flex;
    padding-left: 1.25rem;
`;

export const Genre = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border: 0.06rem;
    border-color: #116193;
    margin: 0.31rem;
    padding: 0.31rem;
    border-style: solid;
    border-radius: 1.25rem;
    width: auto;
    color: #116193;
    font-family: 'Abel', sans-serif;  
`;

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #116193;
    font-size: 1.2rem;
    padding: 1rem 1rem;   
`;

export const Page = styled.div`
    margin: 0.62rem;
    padding: 0.62rem;
    cursor: pointer;  
`;