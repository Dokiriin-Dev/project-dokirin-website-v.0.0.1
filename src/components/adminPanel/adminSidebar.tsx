"use client";
import classNames from "classnames";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcAbout } from "react-icons/fc";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Image from "next/image";
import { auth } from "@/firebase/firebase.config";

const menuItems = [
  { id: 1, label: "Manage Home", icon: <FcAbout />, link: "/admin/page/home" },
  {
    id: 2,
    label: "Manage About",
    icon: <FcAbout />,
    link: "/admin/page/about",
  },
  {
    id: 3,
    label: "Manage Contact",
    icon: <FcAbout />,
    link: "/admin/page/contact",
  },
];

const DashboardSidebar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Ascolta gli eventi di cambio di stato dell'autenticazione
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Aggiorna lo stato dell'autenticazione dell'utente
      setIsAuthenticated(!!user);
    });
    // Pulisci l'ascoltatore quando il componente viene smontato
    return () => unsubscribe();
  }, []);

  // Verifica se l'utente è autenticato
  const isAdminPath =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/admin");

  const [user] = useAuthState(auth);
  const router = useRouter();

  const logout = async () => {
    await signOut(auth);
    router.push("/");
  };
  const activeMenu = useMemo(
    () =>
      typeof window !== "undefined"
        ? menuItems.find((menu) => menu.link === window.location.pathname)
        : null,
    [typeof window !== "undefined" && window.location.pathname]
  );

  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const collapseIconClasses = classNames(
    "rounded-full bg-[#F3F4F6] absolute -right-3",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu: {
    id?: number;
    label?: string;
    link?: string;
  }) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-[#F3F4F6] rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-[#FAFBFC]"]: activeMenu?.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };
  if (isAuthenticated && isAdminPath) {
    return (
      <div
        className={classNames(
          "px-4 pb-4 bg-white shadow dark:bg-gray-950 flex justify-between flex-col left-0 top-[4.4rem] border-b",
          "border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30",
          "dark:from-inherit lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 min-h-screen sidebar",
          {
            ["w-64"]: !toggleCollapse,
            ["w-20"]: toggleCollapse,
          }
        )}
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseOver}
        style={{
          top: "4.4rem",
          transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s",
        }}
      >
        <div className="flex flex-col pt-12">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center pl-1 gap-4 absolute">
              {/* <LogoIcon /> */}
              <span
                className={classNames("text-lg font-medium text-[#6C7281]", {
                  hidden: toggleCollapse,
                })}
              >
                Logo
              </span>
            </div>
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <MdKeyboardDoubleArrowLeft
                className="text-zinc-950 w-full"
                size={30}
              />
            </button>
          </div>

          <div className="flex flex-col items-start mt-24">
            {menuItems.map(({ icon: Icon, ...menu }) => {
              const classes = getNavItemClasses(menu);
              return (
                <div className={classes} key={menu.id}>
                  <Link href={menu.link}>
                    <span className="flex py-5 px-4 items-center w-full h-full">
                      <div style={{ width: "2.5rem" }}>
                        <FcAbout />
                      </div>
                      {!toggleCollapse && (
                        <span
                          className={classNames(
                            "text-md font-medium text-[#6C7281]"
                          )}
                        >
                          {menu.label}
                        </span>
                      )}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className={`${getNavItemClasses({})}`} onClick={logout}>
            {/* <Image
              src={user?.photoURL as string}
              alt="Profile picture"
              className={
                toggleCollapse
                  ? "mx-1 my-1 rounded-full h-10 w-10"
                  : "mx-1 my-1 rounded-full h-10 w-10"
              }
              //   className="rounded-full h-10 w-10"
            /> */}
            Image
            {!toggleCollapse && (
              <span
                className={classNames(
                  "mx-2 text-md font-medium text-[#6C7281]"
                )}
              >
                Logout
              </span>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return null; // oppure <></> o <div /> per nascondere la sidebar
  }
};

export default DashboardSidebar;
