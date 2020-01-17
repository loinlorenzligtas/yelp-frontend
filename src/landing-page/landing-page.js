import React from "react";
import { TopNav } from "./top-nav/top-nav";
import logo from "../assets/logo.png";
import styles from "./landing-page.module.css";
import { SearchBar } from "../search-bar/search-bar";
import { SearchSuggestions } from "./search-suggestions/search-suggestions";

export function LandingPage() {
  return (
    <div className={styles.landing}>
      <div className={styles["search-area"]}>
        <TopNav />
        <img src={logo} className={styles.logo} alt="logo" />
        <SearchBar />
        <SearchSuggestions />
      </div>
    </div>
  );
}
