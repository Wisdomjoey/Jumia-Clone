import styled from "styled-components";
import Boards from "../Sales/Boards";
import Sales from "../Sales/Sales";
import { board1, collection1, dontMiss, flashSales, recommended, topDeals } from "./data";
import ProductSlider from "./ProductSlider";
import icon1 from '../../../images/ic1.png';
import icon2 from '../../../images/ic2.png';
import icon3 from '../../../images/ic3.png';
import icon4 from '../../../images/ic4.png';
import Collection from "../Sales/Collection";

const Container = styled.div`
    width: 100%;
    padding: 8px 15px;
`
const HustleCon = styled.div`
    width: 100%;
    height: fit-content;
	display: flex;
	align-items: center;
	gap: 16px;
	margin-top: 16px;
`
const Hustle = styled.div`
    flex: 1;
	display: flex;
	align-items: center;
	gap: 16px;
	background: #FFF;
	border-radius: 4px;
	padding: 8px;
`
const HustleIcon = styled.img`
    width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: contain;
`
const HustleTxt = styled.span`
    color: #282828;
	font-weight: 600;
	font-size: 14px;
`

export default function Products() {
  return (
    <Container>

        <ProductSlider />
        <Sales sId1='sPrev' sId2='sNext' anc='anchor' svg hTitle='Flash Sales' tc='#FFF' hTime hLink='#FFF' hBg='#e61601' data={ flashSales } />
        <Sales sId1='sPrev1' sId2='sNext1' anc='anchor1' hTitle='Recommended for you' tc='#282828' hBg='#FFF' data={ recommended } />
        <Boards hTitle="Don't Miss Out On These!!!" hBg='#FDECF0' tc='#282828' data={ dontMiss } />
        <Boards data={ board1 } />
        <Sales sId1='sPrev2' sId2='sNext2' anc='anchor2' hTitle='Top Deals' dm=' | Free Delivery' tc='#282828' hBg='#FDECF0' data={ topDeals } />
		<HustleCon>

			<Hustle>

				<HustleIcon src={ icon1 } />
				<HustleTxt>Free Delivery</HustleTxt>

			</Hustle>
			<Hustle>

				<HustleIcon src={ icon2 } />
				<HustleTxt>Jumia Prime</HustleTxt>

			</Hustle>
			<Hustle>

				<HustleIcon src={ icon3 } />
				<HustleTxt>Borrow Money</HustleTxt>

			</Hustle>
			<Hustle>

				<HustleIcon src={ icon4 } />
				<HustleTxt>Jumia Food</HustleTxt>

			</Hustle>

		</HustleCon>
		<Collection hTitle='Shop From Our Collections!' tc='#282828' hBg='#FDECF0' data1={ collection1.first } data2={ collection1.second } />
		<Sales sId1='sPrev3' sId2='sNext3' anc='anchor3' hTitle='Warranty Guaranteed' hLink='#282828' dm=' | Free Delivery' tc='#282828' hBg='#FDECF0' data={ topDeals } />
		<Boards hTitle="Fashion Week" hBg='#FEE2CC' tc='#282828' data={ dontMiss } />
		<Sales sId1='sPrev4' sId2='sNext4' anc='anchor4' hTitle='Top Deals' hLink='#282828' dm=' | Sneakers Collection' tc='#282828' hBg='#FDECF0' data={ topDeals } />

    </Container>
  )
}
