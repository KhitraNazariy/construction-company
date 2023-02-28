import React from 'react';

import styles from './Header.module.scss';
import Navbar from "../../components/Navbar/Navbar";
import CustomButton from "../../components/UI/CustomButton/CustomButton";
import headerBf from '../../assets/headerBg.png';
import headerBottom from '../../assets/headerBottom.png';
import headerHouse from '../../assets/HeaderHouse.png';
import scrollDown from '../../assets/scrollDown.png';

const Header = () => {
    return (
        <>
            <section className={styles.header} style={{backgroundImage: `url('${headerBf}')`}}>
                <Navbar/>
                <div className={styles.header_topContent}>
                    <div className={styles.header_topContent_info}>
                        <h2 className={styles.title}>
                            <span style={{fontWeight: '600'}}>CUBAX</span> - унікальна технологія будівництва капітальних, розбірних будівель
                        </h2>
                        <div className={styles.subtitle}>
                            <img className={styles.subtitle_scrollDown} src={scrollDown} alt="scroll down img"/>
                            <div>
                                <h3 className={styles.subtitle_text}>
                                    Рухома нерухомість вийшла з області фантастики і стала реальністю.
                                </h3>
                                <CustomButton background={"#FF374F"}>
                                    Відправити заявку
                                </CustomButton>
                            </div>
                        </div>
                        <p className={styles.additionInfo}>
                            Пропонуємо систему будівництва «капітальних» об'єктів з можливістю збирання-розбирання всього за
                            1–10 днів. Така інновація змінює уявлення про нерухомість і дає безліч переваг:
                        </p>
                    </div>
                    <img src={headerHouse} alt="header house"/>
                </div>
            </section>
            <div className={styles.headerBottom} style={{backgroundImage: `url('${headerBottom}')`}}>

            </div>
        </>
    );
};

export default Header;