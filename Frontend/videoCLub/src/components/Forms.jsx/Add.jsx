import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add(addData) {
    const data = [
        {
            "title": "",
            "year": "",
            "time": "",
            "language": "",
            "date": "",
            "country": "",
            "director": [
            
            ],
            "genres": [

            ],
            "actor": [
            
            ]
        }
    ]
    
    const [sendDataBack, setSendDataBack] = useState(data)
        
    const [title, setTitle] = useState("");
    const handleSetTitle = (e) => {
        setTitle(e.target.value)
    }


    const [year, setYear] = useState("");
    const handleSetYear = (e) => {setYear(e.target.value)}


    const [time, setTime] = useState("");
    const handleSetTime = (e) => {setTime(e.target.value)}


    const [language, setLanguage] = useState("");
    const handleSetLanguage = (e) => {setLanguage(e.target.value)}


    const [date, setDate] = useState("");
    const handleSetDate = (e) => {setDate(e.target.value)}


    const [country, setCountry] = useState("");
    const handleSetCountry = (e) => {setCountry(e.target.value)}
    
    const [genre, setGenre] = useState("");
    const handleSetGenre = (e) => {
        const sendDataToBack = [...data];
        sendDataToBack[0].genres = [...data[0].genres, {kind: genre}]
    }

    const [actorN, setActorN] = useState("");
    const handleSetActorN = (e) => {setActorN(e.target.value)}
    const [actorLn, setActorLn] = useState("");
    const handleSetActorLn = (e) => {setActorLn(e.target.value)}

    const [directorN, setDirectorN] = useState("");
    const handleSetDirector = (e) => {setDirectorN(e.target.value)}
    const [directorLn, setDirectorLn]= useState("");
    const handleSetDirectorLn = (e) => {setDirectorLn(e.target.value)}

    const handleSubmit = () => {
        const sendDataToBack = [...data];
        sendDataToBack[0].title = title;
        sendDataToBack[0].year = year;
        sendDataToBack[0].time = time;
        sendDataToBack[0].language = language;
        sendDataToBack[0].date = date;
        sendDataToBack[0].country = country;
        sendDataToBack[0].director.push({name: directorN, lastname: directorLn});
        sendDataToBack[0].actor.push({name: actorN, lastname: directorLn});

        addData(sendDataToBack);
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
                    onChange={handleSetTitle}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="text"
                    placeholder="Inserta titulo"
                />
                <input
                    onChange = {handleSetYear}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="year"
                    placeholder="Inserta año"
                />
                <input
                    onChange={handleSetTime}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="text"
                    placeholder="Inserta duración"
                />
                <input
                    onChange={handleSetLanguage}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="text"
                    placeholder="Inserta lenguaje"
                />
                <input
                    onChange={handleSetLanguage}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="date"
                    placeholder="Inserta fecha de estreno"
                />
                <input
                    onChange={handleSetCountry}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="text"
                    placeholder="inserta ciudad"
                />
                <input
                    onChange={handleSetGenre}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder="Inserta genero"
                />
                
                <button
                    className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
                    type="submit"
                    onSubmit={handleSubmit}
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
