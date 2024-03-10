import styles from "./header.module.css"

export default function Header(){
    return (
        <>
        <div className={styles.header}>
            <div className={styles.navs}>
                <a href="#home">    
                <div className={styles.navLinks}>
                    Home
                </div>
                </a>

                <a href="#about">
                <div className={styles.navLinks}>
                About
                </div>
                </a>

                <a href="#portfolio">
                <div className={styles.navLinks}>
                    Portfolio
                </div>
                </a>

                <a href="#contact">
                <div className={styles.navLinks}>
                    Contact Me
                </div>
                </a>

                
            </div>
        </div>

        </>

    )
}