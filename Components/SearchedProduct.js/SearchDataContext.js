import { createContext, useContext, useState } from "react";

const SearchDataContext = createContext(undefined);

export const SearchDataProvider = ({ children}) => {
  const [products, setProducts] = useState(undefined)
  const [data, setData] = useState(undefined);
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
  function getSingleProduct(id){
    const product = [...products].find(elt => elt._id === id)
    setData(product)
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
        subCategorizedProds:filterSubProds,
        getProduct:(value) => {setProducts(value); setData(value)}
      }}
    >
      {children}
    </SearchDataContext.Provider>
  );
};

export const useSearchData= () => useContext(SearchDataContext)