import React from "react";
import chat from "../icon/chat.svg";
import feed from "../icon/feed.svg";
import things from "../icon/things.ico";
import profile from "../icon/profile.svg";
import {Link} from "react-router-dom";

export default function Navbarbtn() {
    return (
        <>
            <div className={"flex justify-center justify-self-center w-full md:mx-8"}>
                <div className="px-4 py-1 w-1/4 md:w-max">
                    <Link to="/feed">
                        <div className={"text-center"}>
                            <div className={"md:hidden m-auto h-8 w-8"}>
                                <img src = {profile}/>
                            </div>
                            Лента
                        </div>
                    </Link>
                </div>
                <div className="px-4 py-1 w-1/4 md:w-max">
                    <Link to="/dialogs">
                        <div className={"text-center"}>
                            <div className={"md:hidden  m-auto h-8 w-8"}>
                                <img src = {chat}/>
                            </div>
                            Чаты
                        </div>
                    </Link>
                </div>
                <div className="px-4 py-1 w-1/4 md:w-max">
                    <Link to="/things">
                        <div className={"text-center"}>
                            <div className={"md:hidden  m-auto h-8 w-8"}>
                                <img src = {things}/>
                            </div>
                        Штуки
                        </div>
                    </Link>
                </div>
                <div className="px-4 py-1 w-1/4 md:w-max">
                    <Link to="/profile">
                        <div className={"text-center"}>
                            <div className={"md:hidden m-auto h-8 w-8"}>
                                <img src = {profile}/>
                            </div>
                            Профиль
                        </div>
                    </Link>
                </div>

            </div>
        </>
    )


}