import React from 'react';



function Table() {
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
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td class="px-6 py-4">
                
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
            
            <td class="px-6 py-4">
                924
            </td>
            <td class="px-6 py-4">
                Avatar
            </td>
            <td class="px-6 py-4">
                2009
            </td>
            <td class="px-6 py-4">
                162
            </td>
            <td class="px-6 py-4">
                Ingles
            </td>
            <td class="px-6 py-4">
                2009/12/17
            </td>
            <td class="px-6 py-4">
                UK
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                imagen
            </th>
           
        </tr>
        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                924
            </th>
            <td class="px-6 py-4">
                Avatar
            </td>
            <td class="px-6 py-4">
                2009
            </td>
            <td class="px-6 py-4">
                162
            </td>
            <td class="px-6 py-4">
                Ingles
            </td>
            <td class="px-6 py-4">
                2009/12/17
            </td>
            <td class="px-6 py-4">
                UK
            </td>
            <td class="px-6 py-4">
                imagen
            </td>
            
        </tr>
       
    </tbody>
</table>
</div>
);
}

export default Table;