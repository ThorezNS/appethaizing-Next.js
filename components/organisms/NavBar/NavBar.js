import styles from './NavBar.module.css';
import useScrollTop from '../../../hooks/useScrollTop';
// import Header from '../../molecules/Header/Header';
// import Category from '../../molecules/Category/Category';

const NavBar = () => {
  const { isScrolledTop } = useScrollTop(70);

  return (
    <nav
      className={`${styles.navBarContainer} ${
        isScrolledTop ? styles.narrow : styles.thick
      }`}
    >
      {/* <Header isScrolledTop={isScrolledTop} />
      {!isScrolledTop && <Category />} */}
    </nav>
  );
};

export default NavBar;
