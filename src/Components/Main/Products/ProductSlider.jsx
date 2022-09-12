import styled from "styled-components";
import sl1 from '../../../images/sl1.jpg';
import sl2 from '../../../images/sl2.jpg';
import sl3 from '../../../images/sl3.gif';
import sl4 from '../../../images/sl4.png';
import sl5 from '../../../images/sl5.jpg';
import sl6 from '../../../images/sl6.jpg';
import sl7 from '../../../images/sl7.jpg';
import sl8 from '../../../images/sl8.jpg';
import sl9 from '../../../images/sl9.jpg';

const Container = styled.div`
    width: 100%;
`
const Content = styled.div`
    width: 100%;
    border-radius: 4px;
    height: 135px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Prev = styled.div`
    height: 100%;
    flex-basis: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ProductCon = styled.div`
    height: 100%;
    flex-basis: 90%;
    overflow-x: hidden;
`
const Products = styled.div`
    height: 100%;
    width: fit-content;
    display: flex;
    transition: all .3s;
`
const ProductsCon = styled.div`
    width: 130px;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ProductImg = styled.img`
    width: 120px;
    object-fit: contain;
    border-radius: 4px;
    cursor: pointer;
    transition: all .05s;

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, .15);
        width: 125px;
    }
`
const Next = styled.div`
    height: 100%;
    flex-basis: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Switch = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(40, 40, 40, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background: #75757A;
    }

    &.disabled {
        background: #C7C7CD;
        cursor: default;
    }
`

export default function ProductSlider() {

    const moveLeft = (e) => {
        const prod = document.getElementById('products');
        const pNext = document.getElementById('pNext');
        const pPrev = document.getElementById('pPrev');

        if (e.target.classList.contains('disabled') === false) {
            prod.style.transform = 'translateX(0px)';
            pPrev.classList.add('disabled');
            pNext.classList.remove('disabled');
        }
    }

    const moveRight = (e) => {
        const prod = document.getElementById('products');
        const pNext = document.getElementById('pNext');
        const pPrev = document.getElementById('pPrev');

        if (e.target.classList.contains('disabled') === false) {
            prod.style.transform = 'translateX(-125px)';
            pNext.classList.add('disabled');
            pPrev.classList.remove('disabled');
        }
    }

    return (
        <Container>
            <Content>

                <Prev>
                    <Switch id='pPrev' className="pPrev disabled" onClick={ (e) => moveLeft(e) }>
                        <svg viewBox="0 0 24 24" width='24' height='24' fill="#FFF">
                            <path fillRule="evenodd" d='M15.18 15.84L11.34 12l3.84-3.82L14 7l-5 5 5 5z' />
                        </svg>
                    </Switch>
                </Prev>
                <ProductCon>
                    <Products id='products'>

                        <ProductsCon>
                        
                            <ProductImg src={ sl1 } />

                        </ProductsCon>
                        <ProductsCon>
                        
                            <ProductImg src={ sl2 } />

                        </ProductsCon>
                        <ProductsCon>
                        
                            <ProductImg src={ sl3 } />

                        </ProductsCon>
                        <ProductsCon>
                        
                            <ProductImg src={ sl4 } />

                        </ProductsCon>
                        <ProductsCon>
                        
                            <ProductImg src={ sl5 } />

                        </ProductsCon>
                        <ProductsCon>
                        
                            <ProductImg src={ sl6 } />

                        </ProductsCon>
                        <ProductsCon>
                        
                            <ProductImg src={ sl7 } />

                        </ProductsCon>
                        <ProductsCon>
                        
                            <ProductImg src={ sl8 } />

                        </ProductsCon>
                        <ProductsCon>
                        
                            <ProductImg src={ sl9 } />

                        </ProductsCon>

                    </Products>
                </ProductCon>
                <Next>
                    <Switch id="pNext" className="pNext" onClick={ (e) => moveRight(e) }>
                        <svg viewBox="0 0 24 24" width='24' height='24' fill="#FFF">
                            <path fillRule="evenodd" d="M9 15.84L12.84 12 9 8.18 10.18 7l5 5-5 5z" />
                        </svg>
                    </Switch>
                </Next>

            </Content>
        </Container>
    )
}
