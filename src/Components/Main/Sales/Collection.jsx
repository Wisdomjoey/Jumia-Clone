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
const CollectionCon = styled.div`
    height: fit-content;
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`
const CollectionsCon = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    align-items: center;
`
const Collections = styled.div`
    height: fit-content;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const CollectionBox = styled.div`
    height: fit-content;
    padding: 4px 0;
    width: calc(100% - 8px);
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    }
`
const TopCollection = styled.div`
    width: 100%;
`
const TopCollectionImg = styled.img`
    width: 100%;
`
const BottomCollection = styled.div`
    padding: 4px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const BottomCollectionTxt = styled.span`
    font-weight: 400;
    color: #282828;
    font-size: 14px;
`

export default function Collection({ hTitle, hBg, data1, data2, tc }) {
    return (
        <Container>
            
            { hTitle && 
                <HeaderCon bg={ hBg }>
                    <HeaderTitle color={ tc }>{ hTitle }</HeaderTitle>
                </HeaderCon> 
            }
            <CollectionCon>
            
                <CollectionsCon>

                    { data1.map((val, ind) => (
                        <Collections key={ ind }>
                            <CollectionBox>
                            
                                <TopCollection>
                                    <TopCollectionImg src={ val.img } />
                                </TopCollection>
                                <BottomCollection>
                                    <BottomCollectionTxt>{ val.txt }</BottomCollectionTxt>
                                </BottomCollection>
                            
                            </CollectionBox>
                        </Collections>
                    )) }

                </CollectionsCon>
                <CollectionsCon>
                    
                    { data2.map((val, ind) => (
                        <Collections key={ ind }>
                            <CollectionBox>
                            
                                <TopCollection>
                                    <TopCollectionImg src={ val.img } />
                                </TopCollection>
                                <BottomCollection>
                                    <BottomCollectionTxt>{ val.txt }</BottomCollectionTxt>
                                </BottomCollection>
                            
                            </CollectionBox>
                        </Collections>
                    )) }

                </CollectionsCon>
            
            </CollectionCon>

        </Container>
    )
}
