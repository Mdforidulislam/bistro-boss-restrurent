const ShareTitle = ({title,hadingTitle}) => {
    return (
        <div className="w-[300px] text-center mx-auto py-7 space-y-3">
            <h3 className="text-sam text-yellow-400 font-bold border-b-2 border-blue-200">{title}</h3>
            <h1 className="text-2xl text-yellow-400 font-bold border-b-2 border-blue-200">{hadingTitle}</h1>
        </div>
    );
};

export default ShareTitle;