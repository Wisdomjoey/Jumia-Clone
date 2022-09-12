import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    width: 100%;
`
const GridCon = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 10px 0 10px 16px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 7px;
        background: #ededed;
    }

    &::-webkit-scrollbar-thumb {
        width: 6px;
        background: #bdbdbd;
        border-radius: 5px;
    }
`
const GridItem = styled.div`
    flex: 1;
`
const LinkCon = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    a:nth-of-type(2) {
        padding-top: 8px;
    }

    a:last-of-type {
        padding-bottom: 20px;
    }
`
const LinkTitle = styled.a`
    text-transform: uppercase;
    color: #282828;
    font-size: .75rem;
    font-weight: 500;
    padding-bottom: 8px;
    border-bottom: 1px solid #ededed;
    cursor: pointer;

    &:hover {
        color: #F90;
    }
`
const Link = styled.a`
    font-size: .73rem;
    color: #75757A;
    padding: 2px 0;
    
    cursor: pointer;

    &:hover {
        color: #282828;
        font-size: .77rem;
        font-weight: 500;
    }
`

export default function Data({ dep }) {
    return (
        <Container>
            <GridCon>
                { dep.map((val, ind) => (
                    <GridItem key={ ind }>
                        { val.map((val1, ind1) => (
                            <LinkCon key={ ind1 }>
                                <LinkTitle>
                                    { val1.title }
                                </LinkTitle>
                                { val1.links.map((val2, ind2) => (
                                    <Link key={ ind2 }>
                                        { val2 }
                                    </Link>
                                )) }
                            </LinkCon>
                        )) }
                    </GridItem>
                )) }
            </GridCon>
        </Container>
    )
}
