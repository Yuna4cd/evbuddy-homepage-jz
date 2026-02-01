import "./RentPage.css"

import RentHeader from "../components/RentPageComponenets/RentHeader"
import RentSections from "../components/RentPageComponenets/RentSections";

export default function RentPage() {
  return (
    <div className='home'>
      <RentHeader />
      <RentSections />
    </div>
  );
}