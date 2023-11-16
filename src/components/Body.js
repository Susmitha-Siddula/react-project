import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/resList";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body-content">
      <div className="filter-res">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search-section input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="search"
          aria-label="search"
        />
        <button type="button" className="btn btn-primary">
          Search
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
