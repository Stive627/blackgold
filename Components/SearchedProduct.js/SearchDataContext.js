import { createContext, useContext, useState } from "react";

const SearchDataContext = createContext(undefined);

export const SearchDataProvider = ({ children, products}) => {
  const [data, setData] = useState(products);
  const [filter, setFilter] = useState(100)
  function handleLowerPrice(){
    const prods = [...data]
    const finalProds = prods.sort((a,b) => a.newPrice - b.newPrice)
    setData(finalProds)
  }
    function handleHighestPrice(){
    const prods = [...data]
    const finalProds = prods.sort((a,b) => b.newPrice - a.newPrice)
    setData(finalProds)
  }
  function handleFilter(e){
    setFilter(e.target.value)
    const prods = [...products]
    const finalProds = prods.filter(elt => +elt.newPrice >= +e.target.value)
    setData(finalProds)
  }
  function handleRecommendedPrice(){
    setData(products)
  }
  function filterProds(params){
    const filteredData = [...products].filter(elt => elt.category === params)
    setData(filteredData)
  }
  function filterSubProds(category, subCategory){
    const filteredData = [...products].filter(elt => ((elt.category === category)&&(elt.subCategory === subCategory)))
    setData(filteredData)
  }

  return (
    <SearchDataContext.Provider
      value={{
        data,
        handleData: (data) => setData(data),
        connected:()=>console.log('Well connected'),
        lowerprice:handleLowerPrice,
        highestPrice:handleHighestPrice,
        recommended:handleRecommendedPrice,
        filter,
        handleFilter:handleFilter,
        categorizedProds:filterProds,
        subCategorizedProds:filterSubProds
      }}
    >
      {children}
    </SearchDataContext.Provider>
  );
};

export const useSearchData= () => useContext(SearchDataContext)