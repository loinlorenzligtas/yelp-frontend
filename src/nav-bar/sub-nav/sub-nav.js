import React from "react";
import { SubNavItem } from "./sub-nav-item/sub-nav-item";
import styles from "./sub-nav.module.css";

export function SubNav() {
  return (
    <div className={styles.container}>
      <div className={styles["sub-nav"]}>
        <div>
          <SubNavItem label="Restaurant" icon="fa-utensils" />
          <SubNavItem label="Home Services" icon="fa-home" />
          <SubNavItem label="Auto Services" icon="fa-car-side" />
          <SubNavItem label="More" icon="fa-info-circle" showRightBorder />
        </div>
        <div>
          <button className={`button ${styles["sub-nav-btn"]}`}>
            <span className="icon">
              <i className="fas fa-pen" />
            </span>
            <span>Write a Review</span>
          </button>
          <button
            className={`button ${styles["sub-nav-btn"]} ${styles["omit-right-border"]}`}
          >
            <span className="icon">
              <i className="fas fa-hotel" />
            </span>
            <span>For Businesses</span>
          </button>
        </div>
      </div>
    </div>
  );
}
