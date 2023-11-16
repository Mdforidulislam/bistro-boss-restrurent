import BoxFeatures from "../../Components/Shared/boxFeatures";
import TapItem from "../../Components/TapItem/TapItem";
import ourShope from '../../assets/shop/banner2.jpg'

const Ourshop = () => {
    return (
        <div>
           <BoxFeatures img={ourShope} title='OUR SHOP' description='Would you like to try a dish?'></BoxFeatures>
           <TapItem></TapItem>
        </div>
    );
};

export default Ourshop;