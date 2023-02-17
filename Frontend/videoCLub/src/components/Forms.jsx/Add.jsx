import axios from "axios";
import { useState } from "react";
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
            <h2 className="text-2xl font-bold">ADD MOVIE</h2>
            <form className="w-[50%] h-full flex flex-col mt-2">
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="text"
                    placeholder="Inserta titulo"
                />
                <input
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="year"
                    placeholder="Inserta año"
                />
                <input
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="text"
                    placeholder="Inserta duración"
                />
                <input
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="text"
                    placeholder="Inserta lenguaje"
                />
                <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="date"
                    placeholder="Inserta fecha de estreno"
                />
                <input
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="text"
                    placeholder="inserta ciudad"
                />
                <input
                    value={genreTitle}
                    onChange={(e) => setGenreTitle(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder="Inserta genero"
                />
                
                <button
                    className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
                    type="submit"
                    onClick={submitForm}
                >
                    ADD MOVIE
                </button>
               
                <button
                
                    className="bg-red-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
                    type="cancel"
                    onClick='nodal=false'

                    
                >
                    CANCELAR
                </button>

            </form>
        </div>
    );
}

export default Add;
