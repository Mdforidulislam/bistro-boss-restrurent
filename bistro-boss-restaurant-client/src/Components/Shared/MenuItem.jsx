import { Link } from "react-router-dom";
import useMenuItem from "../../Hooks/useMenuItem";


const MenuItem = ({menuItemShareanohte}) => {
    const {menuItem} = useMenuItem()

    const menuItemSare = menuItem || menuItemShareanohte ;

    
    
    return (
       <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-screen-xl mx-auto px-6">
            {
                menuItemSare?.slice(0,8)?.map(menu => (
                    <div key={menu.id} className="flex gap-6">
                            <img className="w-[100px] h-[100px] rounded-full" src={menu?.image} alt="" />
                            <div>
                                <h1>{menu?.name}----------------</h1>
                                <p>{menu?.recipe}</p>
                            </div>
                            <p>${menu?.price}</p>
                    </div>
                ))
            }  
        </div>
            <div className="flex justify-center mt-10">
               <Link to={`/ourShope`}><button className="btn  border-b-4 border-black badge-outline border-r-0 border-l-0 border-t-0 hover:bg-green">View Full  Menu</button></Link>
            </div>
       </div>
    );
};

export default MenuItem;