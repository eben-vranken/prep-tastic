"use client";

import { FunctionComponent, useState } from "react";

type MealPlan = {
    breakfast: string[];
    lunch: string[];
    dinner: string[];
};

type DayDetails = {
    date: string;
    mealsPlanned: MealPlan;
    notes?: string;
};

const weekDays: { [key: string]: DayDetails } = {
    Monday: {
        date: "2024-08-12",
        mealsPlanned: {
            breakfast: ["Overnight Oats"],
            lunch: ["Chicken, rice and broccoli"],
            dinner: []
        },
        notes: "",
    },
    Tuesday: {
        date: "2024-08-13",
        mealsPlanned: {
            breakfast: ["Overnight Oats"],
            lunch: ["Chicken, rice and broccoli"],
            dinner: []
        },
        notes: "",
    },
    Wednesday: {
        date: "2024-08-14",
        mealsPlanned: {
            breakfast: ["Overnight Oats"],
            lunch: ["Chicken, rice and broccoli"],
            dinner: []
        },
        notes: "",
    },
    Thursday: {
        date: "2024-08-15",
        mealsPlanned: {
            breakfast: ["Overnight Oats"],
            lunch: ["Chicken, rice and broccoli"],
            dinner: []
        },
        notes: "",
    },
    Friday: {
        date: "2024-08-16",
        mealsPlanned: {
            breakfast: ["Overnight Oats"],
            lunch: ["Chicken, rice and broccoli"],
            dinner: []
        },
        notes: "",
    },
    Saturday: {
        date: "2024-08-10",
        mealsPlanned: {
            breakfast: ["Overnight Oats"],
            lunch: ["Chicken, rice and broccoli"],
            dinner: []
        },
        notes: "",
    },
    Sunday: {
        date: "2024-08-18",
        mealsPlanned: {
            breakfast: ["Overnight Oats"],
            lunch: ["Chicken, rice and broccoli"],
            dinner: []
        },
        notes: "",
    },
};

const Page: FunctionComponent = () => {
    const currentDate = new Date().toJSON().slice(0, 10);
    const todayEntry = Object.entries(weekDays).find(([, dayDetails]) => dayDetails.date === currentDate);
    const [selectedDay, setSelectedDay] = useState<{ dayName: string; dayDetails: DayDetails } | null>(
        todayEntry ? { dayName: todayEntry[0], dayDetails: todayEntry[1] } : null
    );

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
                    <section key={index} className="flex flex-col text-center items-center justify-center rounded w-3/4 bg-text/[2.5%] hover:bg-text/[4%] px-3 h-32 cursor-pointer">
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
            <section className="flex justify-between h-full gap-x-4 flex-1">
                {Object.entries(weekDays).map(([dayName, dayDetails], index) => (
                    <section
                        key={index}
                        className={`flex flex-1 flex-col items-center p-3 cursor-pointer rounded h-full ${selectedDay?.dayDetails.date === dayDetails.date ? "bg-text/[6%] outline outline-text/25 text-primary" : "bg-text/[2.5%] hover:bg-text/[4%] text-text/75"}`}
                        onClick={() => setSelectedDay({ dayName, dayDetails })}
                    >
                        <h1 className="font-medium text-lg">{dayName}</h1>
                        <h2 className="text-text/40">{dayDetails.date}</h2>
                    </section>
                ))}
            </section>

            {/* Selected Day */}
            <section className="flex flex-col flex-1">
                {selectedDay ? (
                    <>
                        <section className="flex justify-center gap-x-2 flex-col border-b-2 border-text/15 pb-2 mb-2">
                            <h1 className="text-2xl font-bold text-primary">{selectedDay.dayName}</h1>
                            <span className="font-medium text-text/50 text-xs">{selectedDay.dayDetails.date}</span>
                        </section>

                        {/* Flex Grid */}
                        <p>Meals Planned:</p>
                        <section className="flex gap-x-1 h-full py-2 [&>*]:flex [&>*]:flex-col [&>*]:flex-1 [&>*]:border-[1.5px] [&>*]:border-text/10 [&>*]:rounded [&>*]:p-1">
                            <section className="cursor-pointer hover:bg-text/[2.5%]">
                                <h3 className="font-medium text-text">Breakfast</h3>
                                <p className="text-text/75">{selectedDay.dayDetails.mealsPlanned.breakfast}</p>
                            </section>

                            <section className="cursor-pointer hover:bg-text/[2.5%]">
                                <h3 className="font-medium text-text/75">Lunch</h3>

                                <p className="text-text/75">{selectedDay.dayDetails.mealsPlanned.lunch}</p>
                            </section>

                            <section className="cursor-pointer hover:bg-text/[2.5%]">
                                <h3 className="font-medium text-text/75">Dinner</h3>

                                <p className="text-text/75">{selectedDay.dayDetails.mealsPlanned.dinner}</p>
                            </section>
                        </section>
                    </>
                ) : (
                    <h1 className="text-lg font-bold">Select a Day</h1>
                )}
            </section>
        </main >
    );
}

export default Page;
