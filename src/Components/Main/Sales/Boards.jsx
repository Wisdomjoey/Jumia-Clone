import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: fit-content;
    border-radius: 4px;
    overflow: hidden;
    background: #FFF;
    margin-top: 16px;
`
const HeaderCon = styled.div`
    padding: 0 16px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${ props => props.bg };
`
const HeaderTitle = styled.span`
    font-weight: 600;
    font-size: 20px;
    color: ${ props => props.color };
`
const BoardCon = styled.div`
    width: 100%;
    height: fit-content;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Board = styled.div`
    width: 392px;
    height: 268px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const BoardImg = styled.img`
    width: 372px;
    height: 260px;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, .1);
        transform: scale(1.02);
    }
`

export default function Boards({ hTitle, hBg, data, tc }) {
    return (
        <Container>
            
            { hTitle && 
                <HeaderCon bg={ hBg }>
                    <HeaderTitle color={ tc }>{ hTitle }</HeaderTitle>
                </HeaderCon> 
            }
            <BoardCon>

                { data.map((val, ind) => (
                    <Board key={ ind }>
                        <BoardImg src={ val } />
                    </Board>
                )) }

            </BoardCon>

        </Container>
    )
}
