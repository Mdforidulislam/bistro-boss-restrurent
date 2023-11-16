import BoxFeatures from "../../Components/Shared/BoxFeatures";
import MenuItem from "../../Components/Shared/MenuItem";
import ShareTitle from "../../Components/Shared/ShareTitle";
import useMenuItem from "../../Hooks/useMenuItem";
import menuImg from '../../assets/menu/banner3.jpg'
import desserts from '../../assets/menu/dessert-bg.jpeg'
import pizza from '../../assets/menu/pizza-bg.jpg'
import salad from '../../assets/menu/salad-bg.jpg'
import soupe from '../../assets/menu/soup-bg.jpg'

const OurMenu = () => {


    const {menuItem} = useMenuItem()

    const menuItemdeser =  menuItem?.filter((item) => item?.category ==='dessert');
    const menuItempizza =  menuItem?.filter((item) => item?.category ==='pizza');
    const menuItemofferd =  menuItem?.filter((item) => item?.category ==='offered');
    const menuItemsoup =  menuItem?.filter((item) => item?.category ==='soup');
    console.log(menuItemdeser,menuItempizza,menuItemofferd,menuItemsoup);


    return (
        <div>
             <BoxFeatures img={menuImg} title='OUR MENU' description='Would you like to try a dish?'></BoxFeatures>

             <ShareTitle title='---Dont miss---' hadingTitle='TODAYS OFFER'></ShareTitle>
             <MenuItem menuItemShareanohte={menuItemofferd}></MenuItem>

             <BoxFeatures img={desserts} title='DESSERTS' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></BoxFeatures>

             <MenuItem menuItemShareanohte={menuItempizza}></MenuItem>
             <BoxFeatures img={pizza} title='PIZZA' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></BoxFeatures>

             <MenuItem menuItemShareanohte={menuItemdeser}></MenuItem>
             <BoxFeatures img={salad} title='SALADS' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></BoxFeatures>


             <MenuItem menuItemShareanohte={menuItemsoup}></MenuItem>
             <BoxFeatures img={soupe} title='SOUPS' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></BoxFeatures>



        </div>
    );
};

export default OurMenu;