import styles from "./main-header.module.css"
import Navbar from "./navbar"
export default function LayoutBackground() {
  return (
    <>
      <div className={styles["header-background"]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: '#59453c', stopOpacity: '1' }}
              />
              <stop
                offset="100%"
                style={{ stopColor: '#8f3a09', stopOpacity: '1' }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            d="M0,100 C480,200 960,60 1440,120 L1440,0 L0,0 Z"
            ></path>
        </svg>
      </div>
      <Navbar></Navbar>
    </>

  )
}