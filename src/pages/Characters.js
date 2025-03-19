import React, { useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Card } from "../components/Card";
import { ClimbingBoxLoader} from "react-spinners";
import ReactPaginate from "react-paginate";
import {useTranslation} from "react-i18next";



export default function CharactersList() {

  const {t} = useTranslation()
const {error, loading, data } = useCharacters();
const [currentPage, setCurrentPage] = useState(0);
const [statusFilter, setStatusFilter] = useState("");
const [speciesFilter, setSpeciesFilter] = useState("");
const charactersPerPage = 6;


const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
}

const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(0);
  };

  const handleSpeciesChange = (e) => {
    setSpeciesFilter(e.target.value);
    setCurrentPage(0);
  };



if (loading)
    return (
      <div className="dark bg-gray-900 text-white min-h-screen">
        <div className="flex justify-center items-center min-h-screen">
          <ClimbingBoxLoader
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
          </div>
        </div>
    );
  
  if (error)
    return (
      <div className="dark bg-gray-900 text-white min-h-screen">
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl font-semibold">Something went wrong</div>
        </div>
      </div>
    );
  
    const filteredData = data.characters.results.filter((character) => {
        const statusMatch = statusFilter ? character.status === statusFilter : true;
        const speciesMatch = speciesFilter ? character.species === speciesFilter : true;
        return statusMatch && speciesMatch;
      });

    const offset = currentPage * charactersPerPage;

  const currentCharacters = filteredData.slice(offset, offset + charactersPerPage);

  const pageCount = Math.ceil(filteredData.length / charactersPerPage);

  const showPagination = pageCount > 1;

return (
    <div className=" dark bg-gray-900 text-white min-h-screen">
        <div className="flex justify-end space-x-4 p-7 px-14 text-white container" >
          <select  className= "bg-gray-700 p-2" onChange={handleStatusChange} value={statusFilter}>
            <option value="">{t("allstatuses")}</option>
            <option value="Alive">{t("alive")}</option>
            <option value="Dead">{t("dead")}</option>
            <option value="unknown">{t("unknown")}</option>
          </select>

          <select className="bg-gray-700 px-3" onChange={handleSpeciesChange} value={speciesFilter}>
            <option value="">{t("allspecies")}</option>
            <option value="Human">{t("human")}</option>
            <option value="Alien">{t("alien")}</option>
          </select>
        </div> 
      
    <div className="flex justify-center items-center min-h-screen pt-14" >

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">


        {currentCharacters.map((character) => (
            <Card
            key={character.id}
            image={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            />
        ))}
      </div>
    </div>
    <div className="flex justify-center mt-5 pb-10">
        {
            showPagination && (

  
  <ReactPaginate
   previousLabel={
    <span className="px-3 py-2 text-l text-white bg-gray-700 rounded-l-md hover:bg-gray-600 w-[150px] text-center">
    {t("previous")}
    </span>
  }
  nextLabel={
    <span className="px-3 py-2 text-l text-white bg-gray-700 rounded-r-md hover:bg-gray-600 w-[150px] text-center">
      {t("next")}
    </span>
  }
  breakLabel={"..."}
    pageCount={pageCount}
    onPageChange={handlePageChange}
    containerClassName={"flex items-center space-x-2"}
    activeClassName={"bg-blue-500 text-white"}
    pageClassName={"page-item"}
    previousClassName={"previous"}
    nextClassName={"next"}
    pageLinkClassName={
      "px-4 py-2 rounded-md cursor-pointer text-white bg-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300"
    }
    breakLinkClassName={
      "px-4 py-2 text-white cursor-pointer bg-gray-700 hover:bg-gray-600 transition-all duration-300"
    }
  />
)
}
</div>


        </div>
  );
  
}