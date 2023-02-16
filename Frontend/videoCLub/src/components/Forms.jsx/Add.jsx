import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [time, setTime] = useState("");
    const [language, setLanguage] = useState("");
    const [date, setDate] = useState("");
    const [country, setCountry] = useState("");
    // const [director, setDirector] = useState("");
    // const [actor, setActor] = useState("");
    const [genreTitle, setGenreTitle] = useState("");

    const navigate = useNavigate();
    const data = {
        title: title,
        year: year,
        time: time,
        language: language,
        date: date,
        country: country,
        /* director: director[
            {
                lastname: String,
                name: String
            }
        ], */
        genre_title: genreTitle,
        /* actor: actor[
                {
                    lastname: String,
                    name: String,
                    gender: String
                }
            ] */
    };

    function submitForm(e) {
        e.preventDefault();
        axios.post("http://localhost:3001/users", data).then(navigate("/"));
    }
    return (
        <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
            <h2 className="text-2xl font-bold">ADD USER</h2>
            <form className="w-[50%] h-full flex flex-col mt-2">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="text"
                    placeholder="Enter your name"
                />
                <input
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="email"
                    placeholder="Enter your email"
                />
                <input
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder="Enter your phone no."
                />
                <input
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder="Enter your phone no."
                />
                <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder="Enter your phone no."
                />
                <input
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder="Enter your phone no."
                />
                <input
                    value={genreTitle}
                    onChange={(e) => setGenreTitle(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder="Enter your phone no."
                />
                <button
                    className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
                    type="submit"
                    onClick={submitForm}
                >
                    ADD USER
                </button>
            </form>
        </div>
    );
}

export default Add;
