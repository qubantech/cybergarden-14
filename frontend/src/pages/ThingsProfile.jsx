import React from 'react';
import plus from "../icon/plus.svg";
import my from "../icon/my.svg";
import {Link} from "react-router-dom";

export default function ThingsProfile() {
    return (
        <>
            <main className="things-page">
                <section className="relative md:mt-10 block" style={{ height: "50px" }}>
                    <div className="absolute top-0 w-full h-full bg-gradient-to-b bg-gradient-to-b from-purple ...">
                        <div className={"flex w-full mx-5"}>
                            <div className={"sm:w-1/2"}>
                                <h1 className="text-3xl sm:text-4xl font-semibold leading-normal text-gray-900 text-left mt-4">
                                    Сделки
                                </h1>
                            </div>
                            <div className={"sm:w-1/4"}>

                            </div>
                            <div className={"w-1/2 ml-4 text-center sm:w-1/4 place-items-end content-end"}>
                                <Link to="/things">
                                    <button type="button"
                                            className="mt-4 content-end rounded-full h-12 w-11 py-2 px-4 bg-transparent hover:bg-purple-secondary-200 focus:ring-purple-secondary focus:ring-offset-purple-secondary
                                  text-white w-full transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full">
                                        <img src={my} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative py-4 mt-8 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col w-full items-center justify-center">
                            <ul className="w-full">
                                <li className="border-gray-500 flex flex-col mb-10 gap-y-1 ">
                                    <h1 className="text-3xl sm:text-4xl font-semibold leading-normal text-gray-900 text-left mt-4">
                                        Отклики на твои предложения
                                    </h1>
                                    <div
                                        className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto mb-0">
                                        <p className="text-black dark:text-gray-300 font-light text-md">
                                            По "Кошачий корм" (+10)
                                        </p>
                                    </div>
                                    <div
                                        className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
                                        <a href="#" className="w-full block h-full">
                                            <div className="bg-white dark:bg-gray-800 w-full p-3">
                                                <p className="text-gray-800 dark:text-white text-xl font-medium mb-1">
                                                    Привет, я очень голоден!!
                                                </p>
                                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                                    Корпус Б, этаж 2, комната 231
                                                </p>
                                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                                    Обменов за последний месяц - 5
                                                </p>
                                                <div className="flex items-center mt-4">
                                                    <a href="#" className="block relative min-w-10 max-w-10">
                                                        <img alt="profil" src="https://i.redd.it/v0caqchbtn741.jpg"
                                                             className="mx-auto object-cover rounded-full h-10 max-w-sm"/>
                                                    </a>
                                                    <div className="flex flex-col justify-between ml-4 text-sm">
                                                        <p className="text-gray-800 w-max dark:text-white">
                                                            Петр Иванов
                                                        </p>
                                                        <p className="text-gray-400 w-max dark:text-gray-300">
                                                            6 часов назад
                                                        </p>
                                                    </div>
                                                    <div className={'w-full'}></div>
                                                    <div className={"items-end text-3xl"}>
                                                        <div>
                                                            +2
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-white rounded-lg w-full mt-2 m-auto">
                                                    <div className="w-full h-4 bg-gray-400 rounded-full">
                                                        <div
                                                            className="w-1/5 h-full text-center text-xs text-black bg-purple rounded-full">
                                                            20
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div
                                        className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
                                        <a href="#" className="w-full block h-full">
                                            <div className="bg-white dark:bg-gray-800 w-full p-3">
                                                <p className="text-gray-800 dark:text-white text-xl font-medium mb-1">
                                                    Моя кошка была бы рада!
                                                </p>
                                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                                    Корпус Б, этаж 2, комната 236
                                                </p>
                                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                                    Обменов за последний месяц - 2
                                                </p>
                                                <div className="flex items-center mt-4">
                                                    <a href="#" className="block relative min-w-10 max-w-10">
                                                        <img alt="profil" src="https://i.redd.it/v0caqchbtn741.jpg"
                                                             className="mx-auto object-cover rounded-full h-10 max-w-sm"/>
                                                    </a>
                                                    <div className="flex flex-col justify-between ml-4 text-sm">
                                                        <p className="text-gray-800 w-max dark:text-white">
                                                            Иванов Петр
                                                        </p>
                                                        <p className="text-gray-400 w-max dark:text-gray-300">
                                                            3 часа назад
                                                        </p>
                                                    </div>
                                                    <div className={'w-full'}></div>
                                                    <div className={"items-end text-3xl"}>
                                                        <div>
                                                            +1
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-white rounded-lg w-full mt-2 m-auto">
                                                    <div className="w-full h-4 bg-gray-400 rounded-full">
                                                        <div
                                                            className="w-1/5 h-full text-center text-xs text-black bg-purple rounded-full">
                                                            20
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>





                                    <h1 className="text-3xl sm:text-4xl font-semibold leading-normal text-gray-900 text-left mt-4">
                                        Твои предложения
                                    </h1>
                                    <div
                                        className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
                                        <a href="#" className="w-full block h-full">
                                            <div className="bg-white dark:bg-gray-800 w-full p-3">
                                                <p className="text-gray-800 dark:text-white text-xl font-medium mb-1">
                                                    Хлеб пшеничный
                                                </p>
                                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                                    Очень вкусный. Почти свежий....
                                                </p>
                                                <div className="flex items-center mt-4">
                                                    <a href="#" className="block relative min-w-10 max-w-10">
                                                        <img alt="profil" src="https://i.redd.it/v0caqchbtn741.jpg"
                                                             className="mx-auto object-cover rounded-full h-10 max-w-sm"/>
                                                    </a>
                                                    <div className="flex flex-col justify-between ml-4 text-sm">
                                                        <p className="text-gray-800 w-max dark:text-white">
                                                            Петр Иванов
                                                        </p>
                                                        <p className="text-gray-400 w-max dark:text-gray-300">
                                                            28 минут назад
                                                        </p>
                                                    </div>
                                                    <div className={'w-full'}></div>
                                                    <div className={"items-end text-3xl"}>
                                                        <div>
                                                            -2 <div className={"text-sm w-max"}>(Требуют -3) </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={"text-gray-800 dark:text-white text-sm mt-2"}>
                                                    Корпус Г, этаж 4, комната 420
                                                </div>
                                                <div className="bg-white rounded-lg w-full mt-2 m-auto">
                                                    <div className="w-full h-4 bg-gray-400 rounded-full">
                                                        <div
                                                            className="w-2/5 h-full text-center text-xs text-black bg-purple rounded-full">
                                                            40
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}