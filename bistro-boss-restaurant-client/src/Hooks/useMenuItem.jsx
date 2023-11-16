import {  useState } from "react";
import useAxionurl from "./useAxionurl";
import { useQuery } from "@tanstack/react-query";


const useMenuItem = () => {
  const [menuItem, setMenuItem] = useState([]);

  const instance = useAxionurl()
   
  const query = useQuery({

     queryKey: ['menu'],
      queryFn: async () =>{
        const data = await instance.get('/product')
        setMenuItem(data)
        console.log(data);
      }
    })
  return { menuItem };
};

export default useMenuItem;
