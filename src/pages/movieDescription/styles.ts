import styled from 'styled-components';
import media from 'styled-media-query';

export const LoadingSpinner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1rem solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Abel', sans-serif;
    
    ${media.lessThan('small')`
        max-width: 16vw;
    `}
`;

export const MovieContainer = styled.div`
    background-color: #F2F2F2;
    margin-top: 50px;
    width: 60%;    

    ${media.lessThan("small")`
        width: 60%;    
    `}${media.lessThan("medium")`
        width: 95%;
    `}
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #E6E6E6;
`;

export const Title = styled.h2`
    color: #116193;
    padding: 0.62rem;
`;

export const ReleaseDate = styled.p`
    padding: 0.62rem;
    color: #adadad;
`;

export const Main = styled.div`
    display: flex;
`;

export const Content = styled.div`
    max-width: 60vw;
`;

export const SinopseTitle = styled.h3`
    color: #048DCE;
    border-bottom-style: solid;
    border-bottom-color: #00E8E4;
    margin: 1rem;
    margin-top: 2rem;
    margin-bottom: 1rem;

    ${media.lessThan('small')`
        max-width: 40vw;
    `}
`;

export const Sinopse = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    margin: 1rem;
    color: #adadad;
    ${media.lessThan('small')`
        max-width: 70vw;
    `}
`;

export const Info = styled.h3`
    color: #048DCE;
    border-bottom-style: solid;
    border-bottom-color: #00E8E4;
    margin: 1rem;
    margin-top: 2rem;
    ${media.lessThan('small')`
        max-width: 40vw;
    `}
`;

export const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem;
`;

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.62rem;
h4 {
        color: #048DCE;
    }
p {
        font-family: 'Lato', sans-serif;
        font-size: 0.75rem;
        color: #adadad;
    }
`;

export const GenreContainer = styled.div`
    display: flex;
    padding: 0.31rem;
    margin: 1rem;
`;

export const Genre = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border: 0.06rem;
    margin: 0.31rem;
    padding: 0.31rem;
    border-color: #116193;
    border-style: solid;
    border-radius: 1.25rem;
    width: auto;
    color: #116193;
    font-family: 'Abel', sans-serif;
`;

export const ScoreContainer = styled.div`
    height: 33.5vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 2rem ;
`;

export const Score = styled.p`
	font-size: 3.75rem;
	text-align: center;
	color: #00e8e4;
	background-color: #116193;
	border: 0.62rem solid #00e8e4; 
	border-radius: 200px 200px;
	width: 150px;
	height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MoviePoster = styled.img`
    width: 20vw;

    ${media.lessThan('small')`
    width: 40%;
    height: 50%;
    `}
    ${media.lessThan('medium')`
    width: 40%;
    height: 50%;
 `}
`;

export const Trailer = styled.div`
      position: relative;
      margin-top: 2rem;
      margin-bottom: 2rem;
      padding-bottom: 56.25%; /* 16:9 */
      width: 60%;

      ${media.lessThan('medium')`
      width: 95%;
 `}
    
      
iframe {
    position: absolute;
    width: 100%;
    height: 100%;
       
}
`;