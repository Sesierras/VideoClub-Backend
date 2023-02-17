import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [time, setTime] = useState("");
    const [language, setLanguage] = useState("");
    const [date, setDate] = useState("");
    const [country, setCountry] = useState("");
    // const [director, setDirector] = useState("");
    // const [actor, setActor] = useState("");
    const [genreTitle, setGenreTitle] = useState("");

    useEffect(() => {
        axios.get(`mongodb+srv://Administrador:Admin1342**@videoclubdatabase.ry0toej.mongodb.net/?retryWrites=true&w=majority`).then((res) => {
            setTitle(res.data.title);
            setYear(res.data.year);
            setTime(res.data.time);
            setLanguage(res.data.language);
            setDate(res.data.date);
            setCountry(res.data.country)
            setGenreTitle(res.data.genretitle)
        });
    }, []);

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
    }

    function Update(e) {
                e.preventDefault();
                axios.put(`mongodb+srv://Administrador:Admin1342**@videoclubdatabase.ry0toej.mongodb.net/videoClubDataBase?retryWrites=true&w=majority`, data).then(navigate("/"));
            }
    return(
        <div className = "w-screen h-full flex flex-col justify-center items-center mt-16" >
            <h2 className="text-2xl font-bold">User Details</h2>
            <form className="w-[50%] h-full flex flex-col mt-2">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="text"
                    placeholder="Ingrese el título de la película"
                />
                <input
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="email"
                    pattern="[0-9]"
                    placeholder="Ingrese el año de estreno de la película"
                />
                <input
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    pattern="[0-9]"
                    placeholder="Ingrese la duración en minutos"
                />
                <input
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder="Ingrese el lenguaje"
                />
                <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder="dd/MM/AAAA"
                />
                <input
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder="Ingrese el país de origen"
                />
                <input
                    value={genreTitle}
                    onChange={(e) => setGenre(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder="Ingrese el género"
                />
                <button
                    className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
                    type="submit"
                    onClick={Update}
                >
                    UPDATE MOVIE
                </button>
            </form>
        </div >
    );
}

export default Edit;
