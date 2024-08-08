import { FunctionComponent } from "react";

const Page: FunctionComponent = () => {
    const username = "Eben";

    const stats = [
        {
            label: "Total Meals Planned",
            value: 21,
            change: "+5 (31%)",
            positive: true
        },
        {
            label: "Average Calories per Meal",
            value: "667 kcal",
            change: "+50 kcal (8%)",
            positive: true
        },
        {
            label: "Total Prep Time",
            value: "7 hours",
            change: "-30 mins (6%)",
            positive: false
        },
        {
            label: "Grocery Cost",
            value: "$150",
            change: "+$20 (15%)",
            positive: false
        },
        {
            label: "Active Days",
            value: 5,
            change: "+1 day (25%)",
            positive: true
        },
    ];

    return (
        <main className="flex flex-col w-full h-full p-4 gap-y-4">
            {/* Week Statistics */}
            <section className="flex justify-between items-center rounded-md gap-x-4">
                {stats.map((stat, index) => (
                    <section key={index} className="flex flex-col text-center items-center justify-center rounded w-3/4 bg-text/[2.5%] px-3 h-32">
                        <section className="font-semibold">{stat.value}</section>
                        <section className="text-gray-500">{stat.label}</section>
                        {stat.change && (
                            <section className={`${stat.positive ? "text-green-500" : "text-red-500"} text-sm`}>
                                {stat.change}
                            </section>
                        )}
                    </section>
                ))}
            </section>

            {/* Week plan */}
            <section className="flex justify-between h-full gap-x-4">
                {/* Monday */}
                <section className="flex flex-1 p-3 bg-text/[3%] hover:bg-text/[3%] cursor-pointer rounded h-full">
                    <h1 className="font-semibold opacity-50 text-lg">Monday</h1>
                </section>

                {/* Tuesday */}
                <section className="flex flex-1 p-3 bg-text/[2.5%] hover:bg-text/[3%] cursor-pointer rounded h-full">
                    <h1 className="font-semibold opacity-50 text-lg">Tuesday</h1>

                </section>

                {/* Wednesday */}
                <section className="flex flex-1 p-3 bg-text/[2.5%] hover:bg-text/[3%] cursor-pointer rounded h-full">
                    <h1 className="font-semibold opacity-50 text-lg">Wednesday</h1>

                </section>

                {/* Thursday */}
                <section className="flex flex-1 p-3 bg-text/[2.5%] hover:bg-text/[3%] cursor-pointer rounded h-full">
                    <h1 className="font-semibold opacity-50 text-lg">Thursday</h1>

                </section>

                {/* Friday */}
                <section className="flex flex-1 p-3 bg-text/[2.5%] hover:bg-text/[3%] cursor-pointer rounded h-full">
                    <h1 className="font-semibold opacity-50 text-lg">Friday</h1>

                </section>

                {/* Saturday */}
                <section className="flex flex-1 p-3 bg-text/[2.5%] hover:bg-text/[3%] cursor-pointer rounded h-full">
                    <h1 className="font-semibold opacity-50 text-lg">Saturday</h1>

                </section>

                {/* Sunday */}
                <section className="flex flex-1 p-3 bg-text/[2.5%] hover:bg-text/[3%] cursor-pointer rounded h-full">
                    <h1 className="font-semibold opacity-50 text-lg">Sunday</h1>

                </section>

            </section>

            {/* Active Weekda */}
            <section className="h-full">
                <h1 className="text-lg font-bold">Monday</h1>
            </section>
        </main>
    );
}

export default Page;
