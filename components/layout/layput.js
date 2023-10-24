import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div>
          <Link href="/">NextEvents</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/events">Browse All Events</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
