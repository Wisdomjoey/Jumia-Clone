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
    justify-content: space-between;
    background: ${ props => props.bg };
    color: #FFF;
`
const TitleCon = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
const HeaderTitle = styled.span`
    font-weight: 600;
    font-size: 20px;
    color: ${ props => props.color };
`
const HeaderDemac = styled.span`
    font-weight: 400;
    font-size: 20px;
    color: ${ props => props.color };
`
const HeaderTimer = styled.div`
    font-size: 20px;
`
const HeaderLinkCon = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`
const HeaderLink = styled.span`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    color: ${ props => props.color };
`
const ProductsCon = styled.div`
    display: flex;
    overflow-x: hidden;
    height: 100%;
    width: 100%;
    position: relative;
    padding: 8px;

    &:hover > .pNext1, &:hover > .pPrev1 {
        display: flex;
    }

    &:hover .pNext1.disabled, &:hover .pPrev1.disabled {
        display: none;
    }
`
const Switch = styled.span`
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(40, 40, 40, .5);
    display: flex;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 20;
    cursor: pointer;

    &.pPrev1 {
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
    }

    &.pNext1 {
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
    }

    &:hover {
        background: #75757A;
    }

    &.disabled {
        display: none;
    }
`
const ProductCon = styled.div`
    display: flex;
    height: fit-content;
    align-items: center;
    justify-content: flex-start;
    gap: .5rem;
    width: fit-content;
    transition: all .3s;
`
const PCon = styled.div`
    display: flex;
    height: fit-content;
    width: 183px;
    justify-content: center;
    cursor: pointer;
`
const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;

    &:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, .15);
        transform: scale(1.01);
    }
`
const TopCon = styled.div`
    width: 100%;
    height: 195px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
const TopImg = styled.img`
    width: 183px;
    height: 183px;
    object-fit: contain;
`
const TopBadge = styled.span`
    position: absolute;
    padding: 0 4px;
    top: 10px;
    right: 10px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f68b1e;
    background: #feefde;
`
const BottomCon = styled.div`
    width: 100%;
    height: fit-content;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const PTitle = styled.span`
    white-space: nowrap;
    font-size: 14px;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    height: 17px;
`
const PPrice = styled.strong`
    font-weight: 600;
    margin-top: .21rem;
    height: 19px;
`
const PSlash = styled.small`
    text-decoration: line-through;
    color: #75757A;
    opacity: ${ props => props.op };
    height: 15px;
`
const Stock = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    margin-top: .3rem;
    gap: .1rem;
    align-self: flex-end;
`
const ItemLeft = styled.label`
    font-size: 13px;
    height: 18px;
`
const ProgressBar = styled.progress`
    outline: none;
    border: none;
    height: 8px;
    background: #ededed;

    &::-webkit-progress-bar {
        background: #b9b9b9;
        border-radius: 10px;
    }

    &::-webkit-progress-value {
        background: #f68b1e;
        border-radius: 10px;
    }
`

export default function Sales({ svg, hTitle, hTime, hLink, hBg, data, tc, sId1, sId2, anc, dm }) {

    let sub = 764;
    let add = -764;
    const max = 2865;
    let stabilizer = 1146;

    const moveLeft = (e) => {
        const anchor = document.getElementById(anc);
        const pNext = document.getElementById(sId2);
        const pPrev = document.getElementById(sId1);

        if (e.target.classList.contains('disabled') === false) {

            if (stabilizer <= 1337) {
                anchor.style.transform = `translateX(0px)`;
                add = -764;
                sub = 764;
                stabilizer = 1146;
                pPrev.classList.add('disabled');
            } else {
                if (add <= 0) {
                    pPrev.classList.add('disabled');
                }

                anchor.style.transform = `translateX(${ -add }px)`;
                stabilizer -= 764;
                add -= 764;
                sub -= 764;
            }
            pNext.classList.remove('disabled'); 
        }
    }

    const moveRight = (e) => {
        const anchor = document.getElementById(anc);
        const pNext = document.getElementById(sId2);
        const pPrev = document.getElementById(sId1);

        if (e.target.classList.contains('disabled') === false) {

            if (stabilizer >= 2674) {
                anchor.style.transform = `translateX(${ -(sub - 573) }px)`;
                sub = 1719;
                stabilizer = max;
                add = 955;
                pNext.classList.add('disabled');
            } else {
                anchor.style.transform = `translateX(${ -sub }px)`;
                stabilizer += 764;
                sub += 764;
                add += 764;
            }
            pPrev.classList.remove('disabled');
        }
    }

    return (
        <Container>
            
            <HeaderCon bg={ hBg }>

                <TitleCon>
                    
                    { svg && 
                        <svg viewBox="0 0 24 24" width='32' height='32'>
                            <g fill="#FFBA00" transform="translate(3.75 1.783)">
                                <path d="M11.5812155,2.213275 C10.6670511,1.88706997 9.65908071,2.34883302 9.31128722,3.25315583 C8.96349373,4.15747863 9.40316746,5.1733844 
                                10.3014233,5.54095455 C10.5145603,5.62180974 10.7411413,5.66157779 10.969141,5.65814808 L10.9876887,5.64272788 L10.9876887,5.65814808 
                                C11.7171181,5.64884274 12.367351,5.19734077 12.6294504,4.51815877 C12.8915498,3.83897678 12.7126833,3.06901967 12.1778337,2.57410772 
                                C12.0049057,2.41555877 11.8020996,2.2929023 11.5812155,2.213275 L11.5812155,2.213275 Z M12.1252818,4.32892669 C11.9423217,4.80691201 
                                11.4886613,5.12778635 10.9760002,5.14181436 C10.4633392,5.15584237 9.99273119,4.8602589 9.78378453,4.39299738 C9.57483788,3.92573585 
                                9.6687393,3.37890101 10.0216699,3.00767222 C10.3746005,2.63644342 10.9169919,2.51399582 11.3957384,2.69746934 C12.0469934,2.9488646 
                                12.3728185,3.67749798 12.1252818,4.32892669 Z" />
                                <path d="M16.0759447,6.43532625 L12.9846592,0.57564957 C12.7337459,0.0974779514 12.1659196,-0.120404927 11.6584977,0.0667829108 
                                L5.40791833,2.36130894 C5.11699902,2.46659131 4.88519386,2.6911174 4.77111351,2.97811701 L0.0723594968,15.2125051 C-0.141637025,15.7669124 
                                0.135083622,16.389455 0.690616604,16.6034073 L5.36154905,18.3921507 L10.0293902,20.1778101 C10.5851,20.3913051 11.209105,20.115233 
                                11.42356,19.561002 L16.1254053,7.32969796 C16.2399493,7.03856425 16.2218963,6.71212147 16.0759447,6.43532625 Z M4.89785622,10.7529828 
                                L4.9658645,10.7005541 L4.76493094,10.6450413 L10.969141,5.65814808 C10.7411413,5.66157779 10.5145603,5.62180974 10.3014233,5.54095455 
                                C9.38043113,5.18815918 8.92032615,4.15744164 9.2736149,3.23847958 C9.62690364,2.31951752 10.659875,1.86011557 11.5811245,2.21224161 
                                C12.502374,2.56436764 12.9632314,3.59475057 12.6106136,4.51396911 C12.3497625,5.19052411 11.7048314,5.6426238 10.9784149,5.65814808 
                                L10.8207593,5.99430848 L10.8949502,5.93262767 L8.96598799,9.99739287 L12.4034975,10.9750337 L5.76032488,17.1739548 L8.15607118,11.6781949 
                                L4.89785622,10.7529828 Z" />
                            </g>
                        </svg>
                    }
                    <HeaderTitle color={ tc }>{ hTitle }</HeaderTitle>
                    <HeaderDemac color={ tc }>{ dm }</HeaderDemac>

                </TitleCon>
                { hTime && <HeaderTimer>Time Left: <strong>24h : 12m : 06s</strong></HeaderTimer> }
                { hLink && <HeaderLinkCon>
                    
                    <HeaderLink color={ hLink }>See All</HeaderLink>
                    <svg viewBox="0 0 24 24" width='24' height='24' fill={ hLink }>
                        <path fillRule="evenodd" d="M9 15.84L12.84 12 9 8.18 10.18 7l5 5-5 5z" />
                    </svg>

                </HeaderLinkCon> }

            </HeaderCon>
            <ProductsCon>

                <Switch id={ sId1 } className={ `${ sId1 } pPrev1 disabled` } onClick={ (e) => moveLeft(e) }>
                    <svg viewBox="0 0 24 24" width='24' height='24' fill="#FFF">
                        <path fillRule="evenodd" d='M15.18 15.84L11.34 12l3.84-3.82L14 7l-5 5 5 5z' />
                    </svg>
                </Switch>
                <ProductCon id={ anc }>
                    { data.map((val, ind) => (
                        <PCon  key={ ind }>
                            <Product>

                                <TopCon>

                                    <TopImg src={ val.img } />
                                    { val.discount !== null && <TopBadge>-{ val.discount }%</TopBadge> }

                                </TopCon>
                                <BottomCon>

                                    <PTitle>{ val.title }</PTitle>
                                    <PPrice>{ val.price }</PPrice>
                                    { val.slash === null ? <PSlash op={ 0 }>0</PSlash> : <PSlash op={ 1 }>{ val.slash }</PSlash> }
                                    { val.stock !== null && (
                                        <Stock>
                                        
                                            <ItemLeft htmlFor='stock'>{ val.left } items left</ItemLeft>
                                            <ProgressBar id="stock" value={ val.left } max={ val.stock }></ProgressBar>
                                            
                                        </Stock>
                                    ) }

                                </BottomCon>

                            </Product>
                        </PCon>
                    )) }
                </ProductCon>
                <Switch id={ sId2 } className={ `${ sId2 } pNext1` } onClick={ (e) => moveRight(e) }>
                    <svg viewBox="0 0 24 24" width='24' height='24' fill="#FFF">
                        <path fillRule="evenodd" d="M9 15.84L12.84 12 9 8.18 10.18 7l5 5-5 5z" />
                    </svg>
                </Switch>

            </ProductsCon>

        </Container>
    )
}
