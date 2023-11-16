import backgorunImg from '../../assets/home/chef-service.jpg'
import ShareTitle from '../Shared/ShareTitle';
const Scoller = () => {
    return (
        <div style={{backgroundImage:`url(${backgorunImg})`, backgroundPosition:'cover'}} className='w-full h-auto mt-12'>
                <div className='bg-slate-900 w-full h-full bg-opacity-70'>
                    <div>
                        <ShareTitle title='---Check it out---' hadingTitle='FROM OUR MENU'></ShareTitle>
                    </div>
                    <div className='flex gap-6 p-14 max-w-screen-xl mx-auto items-center'>
                        <div>
                            <img className='w-[400px] h-[300px]' src={backgorunImg} alt="" />
                        </div>
                        <div className='w-[500px] space-y-6'>
                            <h1 className='text-white'>
                                March 20, 2023
                                WHERE CAN I GET SOME?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.

                            </h1>
                            <button className='btn'>READ MORE</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Scoller;