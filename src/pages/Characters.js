import React, { useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Card } from "../components/Card";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";
import LoadingScreen from "../components/LoadingScreen";
import ErrorScreen from "../components/ErrorScreen";

export default function Characters() {
  const { t } = useTranslation();
  const { error, loading, data } = useCharacters();
  const [currentPage, setCurrentPage] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const charactersPerPage = 6;

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  const handlePageChange = ({ selected }) => setCurrentPage(selected);
  
  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(0);
  };
  const handleSpeciesChange = (e) => {
    setSpeciesFilter(e.target.value);
    setCurrentPage(0);
  };

  const filteredCharacters = data.characters.results.filter((character) =>
    (!statusFilter || character.status === statusFilter) &&
    (!speciesFilter || character.species === speciesFilter)
  );

  const currentCharacters = filteredCharacters.slice(
    currentPage * charactersPerPage,
    (currentPage + 1) * charactersPerPage
  );

  return (
    <div className="dark bg-gray-900 text-white">
     <div className="flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4 px-14">


     <div className="flex sm:flex-row sm:space-x-4 space-x-4">
  <select
    className="bg-gray-700 text-white p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    onChange={handleStatusChange}
    value={statusFilter}
  >
    <option value="">{t("allstatuses")}</option>
    <option value="Alive">{t("alive")}</option>
    <option value="Dead">{t("dead")}</option>
    <option value="unknown">{t("unknown")}</option>
  </select>

  <select
    className="bg-gray-700 text-white px-3 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    onChange={handleSpeciesChange}
    value={speciesFilter}
  >
    <option value="">{t("allspecies")}</option>
    <option value="Human">{t("human")}</option>
    <option value="Alien">{t("alien")}</option>
  </select>
</div>

  {filteredCharacters.length > charactersPerPage && (
    <div className="flex justify-center pb-4">
      <ReactPaginate
        previousLabel={<span className="px-3 py-2 bg-gray-700 rounded-l-md hover:bg-gray-600">{t("previous")}</span>}
        nextLabel={<span className="px-3 py-2 bg-gray-700 rounded-r-md hover:bg-gray-600">{t("next")}</span>}
        pageCount={Math.ceil(filteredCharacters.length / charactersPerPage)}
        onPageChange={handlePageChange}
        containerClassName="flex items-center space-x-2"
        activeClassName="bg-blue-500 text-white"
        pageLinkClassName="px-4 py-2 bg-gray-700 hover:bg-blue-500 text-white rounded-md transition"
        breakLinkClassName="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white transition"
      />
    </div>
  )}



</div>

      <div className="flex justify-center items-center min-h-screen pt-2">
        <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
          {currentCharacters.map((character) => (
            <Card key={character.id} {...character} origin={character.origin.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
