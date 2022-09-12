import styled from "styled-components";
import { useEffect } from "react";

const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
`
const SlidesCon = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
`
const Slide = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    transition: all .5s;
    opacity: 0;

    &.active {
        opacity: 1;
    }
`
const ControlCon = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
`
const Pagination = styled.div`
    flex-basis: 78%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 20px 0;
    gap: 10px;
`
const Disc = styled.span`
    width: 8px;
    height: 8px;
    background: lightgray;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    cursor: pointer;

    &.active {
        background: #f68b1e;
    }
`
const SwitchCon = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 11%;
    border-radius: ${ props => props.dir === 'left' ? '4px 0 0 4px' : '0 4px 4px 0' };
    cursor: pointer;

    &:hover .prev, &:hover .next {
        opacity: 1;
    }
`
const Switch = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #282828;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

    &:active {
        background: #656565;
    }
`

export default function Slider({ imgList, class1, class2, class3, class4, pagId, slideId }) {

    const discChange = (e, index) => {
        const discs = document.querySelectorAll(class1)[index]
        const activeDisc = document.querySelector(class2);
        const slides = document.querySelectorAll(class3)[index]
        const activeSlide = document.querySelector(class4);

        activeSlide.classList.remove('active');
        activeDisc.classList.remove('active');
        slides.classList.add('active');
        discs.classList.add('active');
    }
    const nextSlide = () => {
        const slides = document.getElementById(slideId);
        const discs = document.getElementById(pagId);
        const activeSlide = document.querySelector(class4);
        let nextSlide = activeSlide.nextElementSibling;
        const activeDisc = document.querySelector(class2);
        let nextDisc = activeDisc.nextElementSibling;

        if (nextSlide === null && nextDisc === null) {
            nextSlide = slides.firstElementChild;
            nextDisc = discs.firstElementChild;
        }

        activeSlide.classList.remove('active');
        activeDisc.classList.remove('active');
        nextSlide.classList.add('active');
        nextDisc.classList.add('active');
    }
    const prevSlide = () => {
        const slides = document.getElementById(slideId);
        const discs = document.getElementById(pagId);
        const activeSlide = document.querySelector(class4);
        let prevSlide = activeSlide.previousElementSibling;
        const activeDisc = document.querySelector(class2);
        let prevDisc = activeDisc.previousElementSibling;

        if (prevSlide === null && prevDisc === null) {
            prevSlide = slides.lastElementChild;
            prevDisc = discs.lastElementChild;
        }

        activeSlide.classList.remove('active');
        activeDisc.classList.remove('active');
        prevSlide.classList.add('active');
        prevDisc.classList.add('active');
    }

    useEffect(() => {
        window.setInterval(() => {
            const slides = document.getElementById(slideId);
            const discs = document.getElementById(pagId);
            const activeSlide = document.querySelector(class4);
            let nextSlide = activeSlide.nextElementSibling;
            const activeDisc = document.querySelector(class2);
            let nextDisc = activeDisc.nextElementSibling;

            if (nextSlide === null && nextDisc === null) {
                nextSlide = slides.firstElementChild;
                nextDisc = discs.firstElementChild;
            }

            activeSlide.classList.remove('active');
            activeDisc.classList.remove('active');
            nextSlide.classList.add('active');
            nextDisc.classList.add('active');
        }, 7000)
    }, [])

    return (
        <Container>

            <SlidesCon id={ slideId }>

                { imgList.map((val, ind) => (
                    <Slide className={ val.class } src={ val.img } alt="" key={ ind } />
                )) }

            </SlidesCon>
            <ControlCon>

                <SwitchCon dir='left' onClick={ () => prevSlide() }>
                    <Switch className="prev">
                        <svg viewBox="0 0 24 24" width='24' height='24' fill="#FFF">
                            <path fillRule="evenodd" d='M15.18 15.84L11.34 12l3.84-3.82L14 7l-5 5 5 5z' />
                        </svg>
                    </Switch>
                </SwitchCon>
                <Pagination id={ pagId }>

                    { imgList.map((val, ind) => (
                        <Disc onClick={ (e) => discChange(e, ind) } className={ val.disc } key={ ind }></Disc>
                    )) }

                </Pagination>
                <SwitchCon dir='right' onClick={ () => nextSlide() }>
                    <Switch  className="next">
                        <svg viewBox="0 0 24 24" width='24' height='24' fill="#FFF">
                            <path fillRule="evenodd" d="M9 15.84L12.84 12 9 8.18 10.18 7l5 5-5 5z" />
                        </svg>
                    </Switch>
                </SwitchCon>

            </ControlCon>

        </Container>
    )
}
