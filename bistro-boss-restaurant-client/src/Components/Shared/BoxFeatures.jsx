

const BoxFeatures = ({img,title,description}) => {
    return (
        <div
        className="w-full h-full flex justify-center items-center max-w-screen-xl mx-auto mt-12 mb-12"
        style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', height:'400px'  }}
      >
        <div className="bg-slate-200 bg-opacity-60 p-4 w-[1000px] h-[300px] flex justify-center items-center">
          <div className="text-center w-[700px] mx-auto">
            <h1 className="text-5xl text-white">{title}</h1>
            <p className="text-base text-white">{description}</p>
          </div>
        </div>
      </div>
    );
};

export default BoxFeatures;