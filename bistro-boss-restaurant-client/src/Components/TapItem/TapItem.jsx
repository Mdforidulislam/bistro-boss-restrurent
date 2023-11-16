import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenuItem from "../../Hooks/useMenuItem";
import CardItem from "./CardItem";

const TapItem = () => {
  const [active, setActive] = useState("salad");

  const { menuItem } = useMenuItem();
  console.log(menuItem);
  const categoryitem = menuItem?.filter((item) => item?.category === active);

  const customStyles = {
    // Style for the TabList (container of tabs)
    tabList: {
      display: 'flex',
      justifyContent: 'center',
      borderBottom: '1px solid #ccc',
      marginBottom: '10px',
    },
    // Style for each individual tab
    tab: {
      padding: '10px 15px',
      cursor: 'pointer',
      borderBottom: 'none',
      marginRight: '10px',
    },
    // Style for the active tab
    selectedTab: {
      backgroundColor: '#007BFF', // Change this to the color you want
      color: '#fff', // Text color for the active tab
    },
  };

  return (
    <div className="max-w-screen-xl mx-auto flex justify-center items-center ">
      <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
        <TabList style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
          <Tab onClick={() => setActive("salad")} style={{ padding: '10px 15px', cursor: 'pointer', borderBottom: 'none', marginRight: '10px' }}>salad</Tab>
          <Tab onClick={() => setActive("pizza")} style={{ padding: '10px 15px', cursor: 'pointer', borderBottom: 'none', marginRight: '10px' }}>PIZZA</Tab>
          <Tab onClick={() => setActive("soup")} style={{ padding: '10px 15px', cursor: 'pointer', borderBottom: 'none', marginRight: '10px' }}>SOUPS</Tab>
          <Tab onClick={() => setActive("dessert")} style={{ padding: '10px 15px', cursor: 'pointer', borderBottom: 'none', marginRight: '10px' }}>DESSERTS</Tab>
          <Tab onClick={() => setActive("drinks")} style={{ padding: '10px 15px', cursor: 'pointer', borderBottom: 'none', marginRight: '10px' }}>DRINKS</Tab>
        </TabList>

        <TabPanel>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 justify-center ">
         {categoryitem?.map((item) => (
              <CardItem key={item._id} item={item}></CardItem>
          ))}
         </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 justify-center ">
         {categoryitem?.map((item) => (
             <CardItem key={item._id} item={item}></CardItem>
          ))}
         </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 justify-center ">
         {categoryitem?.map((item) => (
             <CardItem key={item._id} item={item}></CardItem>
          ))}
         </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 justify-center ">
         {categoryitem?.map((item) => (
            <CardItem key={item._id} item={item}></CardItem>
          ))}
         </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 justify-center ">
         {categoryitem?.map((item) => (
             <CardItem key={item._id} item={item}></CardItem>
          ))}
         </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TapItem;
