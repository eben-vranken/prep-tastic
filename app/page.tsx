"use client";

import { CheckCircle, Pencil, XCircle } from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent, useState } from "react";

type Meal = {
    name: string;
    calories: number;
};

type MealPlan = {
    breakfast: Meal[];
    lunch: Meal[];
    dinner: Meal[];
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
            breakfast: [
                { name: "Overnight Oats", calories: 300 },
            ],
            lunch: [
                { name: "Chicken, rice and broccoli", calories: 600 },
            ],
            dinner: []
        },
        notes: "",
    },
    Tuesday: {
        date: "2024-08-13",
        mealsPlanned: {
            breakfast: [
                { name: "Overnight Oats", calories: 300 },
            ],
            lunch: [
                { name: "Chicken, rice and broccoli", calories: 600 },
            ],
            dinner: []
        },
        notes: "",
    },
    Wednesday: {
        date: "2024-08-14",
        mealsPlanned: {
            breakfast: [
                { name: "Overnight Oats", calories: 800 },
            ],
            lunch: [
                { name: "Chicken, rice and broccoli", calories: 600 },
            ],
            dinner: []
        },
        notes: "",
    },
    Thursday: {
        date: "2024-08-15",
        mealsPlanned: {
            breakfast: [
                { name: "Overnight Oats", calories: 300 },
            ],
            lunch: [
                { name: "Chicken, rice and broccoli", calories: 600 },
            ],
            dinner: []
        },
        notes: "",
    },
    Friday: {
        date: "2024-08-16",
        mealsPlanned: {
            breakfast: [
                { name: "Overnight Oats", calories: 300 },
            ],
            lunch: [
                { name: "Chicken, rice and broccoli", calories: 600 },
            ],
            dinner: []
        },
        notes: "",
    },
    Saturday: {
        date: "2024-08-11",
        mealsPlanned: {
            breakfast: [
                { name: "Overnight Oats", calories: 300 },
            ],
            lunch: [
                { name: "Chicken, rice and broccoli", calories: 600 },
            ],
            dinner: []
        },
        notes: "",
    },
    Sunday: {
        date: "2024-08-18",
        mealsPlanned: {
            breakfast: [
                { name: "Overnight Oats", calories: 300 },
            ],
            lunch: [
                { name: "Chicken, rice and broccoli", calories: 600 },
            ],
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
                        className={`flex flex-1 flex-col justify-between items-center text-justify p-3 cursor-pointer rounded w-full h-full ${selectedDay?.dayDetails.date === dayDetails.date ? "bg-text/[6%] outline outline-text/25" : "bg-text/[2.5%] hover:bg-text/[4%] text-text/75"}`}
                        onClick={() => setSelectedDay({ dayName, dayDetails })}
                    >
                        <section className="text-center">
                            <h1 className={`font-medium text-lg ${selectedDay?.dayDetails.date === dayDetails.date ? "text-primary" : "text-text/75"}`}>{dayName}</h1>
                            <h2 className="text-text/40">{dayDetails.date}</h2>
                        </section>

                        {/* Meal Checklist */}
                        <section className="flex flex-col text-sm">
                            {/* Breakfast */}
                            <span className="flex items-center gap-x-2">
                                <span className="text-text/50">Breakfast:</span>
                                {dayDetails.mealsPlanned.breakfast.length != 0 ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                            </span>

                            {/* Lunch */}
                            <span className="flex items-center gap-x-2">
                                <span className="text-text/50">Lunch:</span>
                                {dayDetails.mealsPlanned.lunch.length != 0 ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                            </span>

                            {/* Dinner */}
                            <span className="flex items-center gap-x-2">
                                <span className="text-text/50">Dinner:</span>
                                {dayDetails.mealsPlanned.dinner.length != 0 ? <CheckCircle className="text-green-500" size={20} /> : <XCircle className="text-red-500" size={20} />}
                            </span>
                        </section>

                        <section>
                            <span className="text-secondary">
                                {dayDetails.mealsPlanned.breakfast.reduce((total, meal) => total + meal.calories, 0) +
                                    dayDetails.mealsPlanned.lunch.reduce((total, meal) => total + meal.calories, 0) +
                                    dayDetails.mealsPlanned.dinner.reduce((total, meal) => total + meal.calories, 0)}
                            </span>
                            <span>
                                &nbsp;Calories
                            </span>
                        </section>
                    </section>
                ))}
            </section>

            {/* Selected Day */}
            <section className="flex flex-col flex-1">
                {selectedDay ? (
                    <>
                        <section className="flex justify-between items-center border-b-2 border-text/15 pb-2 mb-2">
                            <section className="flex justify-center gap-x-2 flex-col">
                                <h1 className="text-2xl font-bold text-primary">{selectedDay.dayName}</h1>
                                <span className="font-medium text-text/50 text-xs">{selectedDay.dayDetails.date}</span>
                            </section>

                            {/* Day Options and Total Calories */}
                            <section className="flex items-center gap-x-4">
                                {/* Total Calories */}
                                <section className="flex items-center">
                                    <span className="text-secondary font-bold text-lg">
                                        {selectedDay.dayDetails.mealsPlanned.breakfast.reduce((total, meal) => total + meal.calories, 0) +
                                            selectedDay.dayDetails.mealsPlanned.lunch.reduce((total, meal) => total + meal.calories, 0) +
                                            selectedDay.dayDetails.mealsPlanned.dinner.reduce((total, meal) => total + meal.calories, 0)}
                                    </span>
                                    &nbsp;Calories
                                </section>

                                {/* Day Options */}
                                <section className="p-2 bg-tertiary/75 rounded-full hover:bg-tertiary/60 cursor-pointer">
                                    <Pencil size={25} weight="bold" className="text-gray-300" alt="Edit day" />
                                </section>
                            </section>
                        </section>

                        {/* Flex Grid */}
                        <section className="flex gap-x-1 h-full py-2 [&>*]:flex [&>*]:flex-col [&>*]:flex-1 [&>*]:border-[1.5px] [&>*]:border-text/10 [&>*]:rounded [&>*]:p-2">
                            <section className="cursor-pointer hover:bg-text/[2.5%] flex flex-col justify-between">
                                <section>
                                    <h3 className="font-medium text-lg text-text">Breakfast</h3>
                                    <section className="text-text/75">
                                        {selectedDay.dayDetails.mealsPlanned.breakfast.map((meal, index) => (
                                            <p key={index}>{meal.name}</p>
                                        ))}
                                    </section>
                                </section>

                                {/* Meal nutrients */}
                                <section className="flex justify-end">
                                    <span className="">
                                        <span className="text-secondary font-bold">
                                            {selectedDay.dayDetails.mealsPlanned.breakfast.reduce((total, meal) => total + meal.calories, 0)}
                                        </span>
                                        &nbsp;Calories
                                    </span>
                                </section>
                            </section>

                            <section className="cursor-pointer hover:bg-text/[2.5%] flex flex-col justify-between">
                                <section>
                                    <h3 className="font-medium text-lg text-text">Lunch</h3>
                                    <section className="text-text/75">
                                        {selectedDay.dayDetails.mealsPlanned.lunch.map((meal, index) => (
                                            <p key={index}>{meal.name}</p>
                                        ))}
                                    </section>
                                </section>

                                {/* Meal nutrients */}
                                <section className="flex justify-end">
                                    <span className="">
                                        <span className="text-secondary font-bold">
                                            {selectedDay.dayDetails.mealsPlanned.lunch.reduce((total, meal) => total + meal.calories, 0)}
                                        </span>
                                        &nbsp;Calories
                                    </span>
                                </section>
                            </section>

                            <section className="cursor-pointer hover:bg-text/[2.5%] flex flex-col justify-between">
                                <section>
                                    <h3 className="font-medium text-lg text-text">Dinner</h3>
                                    <section className="text-text/75">
                                        {selectedDay.dayDetails.mealsPlanned.dinner.map((meal, index) => (
                                            <p key={index}>{meal.name}</p>
                                        ))}
                                    </section>
                                </section>

                                {/* Meal nutrients */}
                                <section className="flex justify-end">
                                    <span className="">
                                        <span className="text-secondary font-bold">
                                            {selectedDay.dayDetails.mealsPlanned.dinner.reduce((total, meal) => total + meal.calories, 0)}
                                        </span>
                                        &nbsp;Calories
                                    </span>
                                </section>
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
