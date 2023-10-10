import FavouritesList from "../../containers/FavouritesList/FavouritesList";
import styles from "./Favourites.module.scss";

const Favourites = () => {
  return (
    <section>
      <h2 className={styles["section-title"]}>Favourites</h2>
      <FavouritesList />
    </section> 
  );
};

export default Favourites;
