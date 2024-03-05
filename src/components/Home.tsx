type newsProps = {
  news: any;
};

const Home = (props: newsProps) => {
  
  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * props.news.length);
    return props.news[randomIndex];
  };

  //Get random index
  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * props.news.length);
    return randomIndex;
  };

  // Get a random item
  const data:any = getRandomItem();
  const data1:any = getRandomItem();
  const data2:any = getRandomItem();
  const data3:any = getRandomItem();
  
  return (
    <div className="flex bg-gray-100 pl-28 mt-5 w-screen">
      <div className="grid grid-cols-2 p-5 rounded-md bg-white w-8/12">
        <a href={data.url}>
          <div className="w-72">
            <h1 className="text-blue-600 text-xl">Top Stories </h1>
            <hr className="mt-3" />
            <hr className="mt-5" />
            <img
              src={data?.urlToImage}
              className="w-72 h-44 rounded-xl"
            />
            <h1 className="font-bold text-sm">
              {data?.source?.name.toUpperCase()}{" "}
            </h1>
            <h1 className="text-xl w-72 text-lg hover:underline">
              {data?.title}{" "}
            </h1>
          </div>
        </a>
        <div className="w-60 ">
          <a href={data1?.url}>
            <h1 className="font-semibold text-sx mt-3">
              {data1?.source?.name.toUpperCase()}{" "}
            </h1>{" "}
          </a>
          <h1 className="text-sm text-lg hover:underline">
            {data1?.title}{" "}
          </h1>

          <h1 className="font-semibold text-sx mt-3">
            {data2?.source?.name.toUpperCase()}{" "}
          </h1>
          <a href={data2?.url}>
            {" "}
            <h1 className="text-sm text-lg hover:underline">
              {data2?.title}{" "}
            </h1>
          </a>
          <h1 className="font-semibold text-sx mt-3">
            {data3?.source?.name.toUpperCase()}{" "}
          </h1>
          <h1 className="text-sm text-lg hover:underline">
            {data3?.title}{" "}
          </h1>
        </div>
      </div>
      <div className="bg-white w-4/12 rounded-lg  ml-3 p-5">
        <h1 className="text-cyan-800 text-2xl">Local News</h1>
        <hr className="mt-3 " />
        {[1, 2, 3].map((item, index) => (
          <a href={props?.news[getRandomIndex()]?.url}>
            {" "}
            <div className="flex items-center">
              <div className="mt-3">
                <h1 className="font-extrabold">
                  {props?.news[getRandomIndex()]?.source?.name.toUpperCase()}{" "}
                </h1>
                <h1>{props?.news[getRandomIndex()]?.title} </h1>
              </div>

              <img
                src={props?.news[getRandomIndex()]?.urlToImage}
                className="w-16 h-16 rounded-xl"
              />
            </div>
            <hr className="mt-3 " />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Home;
