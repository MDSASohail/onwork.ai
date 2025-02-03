
const dataForBarChart = [
    { name: "google.com", views: 16 },
    { name: "bing.com", views: 90 },
    { name: "yandex.ru", views: 150 },
    { name: "facebook.com", views: 70 },
    { name: "instagram.com", views: 60 },
];

const totalRefferers = dataForBarChart.reduce((sum, eachReffer)=>sum+eachReffer.views,0)

// let indexOfHighestViews =0;
// const maxViews = Math.max(...dataForBarChart.map((item, index) => {
//     if(item.views > dataForBarChart[indexOfHighestViews].views) indexOfHighestViews = index
//     return item.views
// }));

const objectOfHighestReffer = dataForBarChart.reduce((maxViews, item) => item.views > maxViews.views ? item : maxViews);
export const totalHighestAndMostReffer = [{text:"Total Reffers", value:totalRefferers}, {text: "Highest Reffer", value: objectOfHighestReffer.name}, {text:" Most Reffered Page", value:"/home"}]
console.log("Total re",totalRefferers, objectOfHighestReffer);
const BarChart = () => {
    // Normalize the bar width dynamically based on the max value in the data


    return (
        <HelperFunction data={dataForBarChart} />
    );
};



function HelperFunction({ data }) {
    return (
        <>
            <div className=" w-full">
                {data.map((item) => (
                    <div className="my-3" key={item.name}>
                        <div className="flex justify-between px-3 my-1 text-sm text-black">
                            <strong className="">{item.name}</strong>
                            <strong className="">{item.views} views</strong>
                        </div>
                        <div className="h-5 rounded-xl bg-[#DBE3F5]">
                            <div
                                className={`h-full bg-borderColor rounded-xl`} style={{ width: `${(item.views / objectOfHighestReffer.views) * 100}%` }}></div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}

export default BarChart;
