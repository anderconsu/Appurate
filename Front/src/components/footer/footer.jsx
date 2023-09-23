import React from 'react'
import { useContext } from 'react';
import PageContext from '../../context/pageContext';

const noCargues = ["admin", "login"];
const Footer = () => {
  const { page, setPage } = useContext(PageContext);
  return (
    <header className="footer">
      {!noCargues.includes(page)  ? (
        <>
      <img src="./static/footer.png" alt="footer" className="footer" />
        </>
      ): (<></>)}
    </header>
  );
};

export default Footer;