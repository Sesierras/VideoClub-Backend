import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function Table() {
    const [movie, setMovie] = useState([]);

  function loadMovie() {
    axios.get("mongodb+srv://Administrador:Admin1342**@videoclubdatabase.ry0toej.mongodb.net/?retryWrites=true&w=majority").then((res) => {
      setMovie(res.data.reverse());
    });
  }

  useEffect(() => {
    loadMovie();
  }, []);

  function deleteMovie(id) {
    axios.delete(`mongodb+srv://Administrador:Admin1342**@videoclubdatabase.ry0toej.mongodb.net/?retryWrites=true&w=majority${id}`).then(loadUsers());
  }
	return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                Acciones
            </th>
            <th scope="col" class="px-6 py-3">
                ID
            </th>
            <th scope="col" class="px-6 py-3">
                Titulo
            </th>
            <th scope="col" class="px-6 py-3">
                Año
            </th>
            <th scope="col" class="px-6 py-3">
                Tiempo
            </th>
            <th scope="col" class="px-6 py-3">
                Lenguaje
            </th>
            <th scope="col" class="px-6 py-3">
                Fecha de lanzamiento
            </th>
            <th scope="col" class="px-6 py-3">
                Pais
            </th>
            <th scope="col" class="px-6 py-3">
                Imagen
            </th>
        </tr>
    </thead>
    <tbody>
    {movie.map((data, index) => (
        <tr 
        key={index}
        class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td class="px-6 py-4">
                
            <Link
                            to={`/movie/${data.id}`}
                            className="bg-teal-600 text-white px-6 py-2 rounded-lg"
                          >
                            VIew
                          </Link>
                          <Link
                            to={`/edit-movie/${data.id}`}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                          >
                            Edit
                          </Link>
                          <Link
                            onClick={()=>deleteMovie(data.id)}
                            to={"#"}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                          >
                            Delete
                          </Link>
            </td>
            
            <td class="px-6 py-4">
            {index + 1}
            </td>
            <td class="px-6 py-4">
            {data.title}
            </td>
            <td class="px-6 py-4">
            {data.year}
            </td>
            <td class="px-6 py-4">
            {data.time}
            </td>
            <td class="px-6 py-4">
            {data.language}
            </td>
            <td class="px-6 py-4">
            {data.date}
            </td>
            <td class="px-6 py-4">
            {data.country}
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                imagen
            </th>
           
        </tr>
    ))}
    </tbody>
</table>
</div>
);
}

export default Table;