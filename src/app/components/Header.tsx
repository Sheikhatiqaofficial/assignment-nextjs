import Link from "next/link";

interface HeaderProps {
  font:{
    className : string;
  };
}

export default function Header({font} : HeaderProps ) {
    return (
      <>
     <header className={`${font.className} links-parent`}>
    <ul className="links">

        <li className="link"> <Link href="/work">Work</Link></li>
        <li className="link"><Link href="/about">About</Link></li>
        <li className="link"><Link href="/contact">Contact</Link></li>
        <li className="link"><Link href="/">Main</Link></li>
    </ul>
     </header>
      </>
    );
  }
  