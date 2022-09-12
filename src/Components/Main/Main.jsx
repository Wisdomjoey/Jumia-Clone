import styled from "styled-components";
import Exhibit from "./Media/Exhibit";
import Products from "./Products/Products";


const Container = styled.div`
    max-width: 1184px;
    margin: 0 auto;
`

export default function Main() {
    return (
        <Container>
            
            <Exhibit />
            <Products />

        </Container>
    )
}
