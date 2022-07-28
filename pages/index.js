import FilterComponent from "../components/FilterBar/FilterComponent";
import Filters from "../components/FilterBar/Filters";
import Header from "../components/Header";
import ProductsContainer from "../components/Products/ProductsContainer";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="grid grid-cols-[0.22fr_0.8fr] gap-x-4 p-4">
          <Filters/>
          <ProductsContainer/>
      </div>
    </div>
  )
}