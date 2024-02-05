import Link from "next/link";
import { useContext } from "react";
import NotificationContext from "@/store/notification-context";
import Notification from "../ui/notification";

const Layout = ({ children }) => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

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
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
};

export default Layout;
