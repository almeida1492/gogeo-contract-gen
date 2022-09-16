import { FC, PropsWithChildren, useMemo } from "react";
import { FiSend } from "react-icons/fi";
import { MdPreview, MdOutlineAddBox } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface IProps extends PropsWithChildren {
  hasData: boolean;
}

export const Layout: FC<IProps> = ({ children, hasData }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { breadcrumbs, tail } = useMemo(() => {
    const breadcrumbs = location.pathname.split("/");
    const tail = breadcrumbs.pop();
    return {
      breadcrumbs,
      tail,
    };
  }, [location.pathname]);

  return (
    <>
      <header className="App-header">
        <div className="App-header-logo"></div>
        <div>App</div>
        <div className="App-header-actions">
          <div className="App-header-action" onClick={() => navigate("/add")}>
            <MdOutlineAddBox />
          </div>
          {hasData && (
            <>
              <div
                className="App-header-action"
                onClick={() => navigate("/edit")}
              >
                <BiEdit />
              </div>
              <div
                className="App-header-action"
                onClick={() => navigate("/preview")}
              >
                <MdPreview />
              </div>
              <div
                className="App-header-action"
                onClick={() => navigate("/wip")}
              >
                <FiSend />
              </div>
            </>
          )}
        </div>
      </header>
      <nav className="App-nav">
        <Link to="/">Home</Link>
        {breadcrumbs
          .filter((path) => path)
          .map((path) => {
            return <Link to={`/${path}`}>path</Link>;
          })}
        {tail && <span key="tail"> / {tail}</span>}
      </nav>
      <div className="App-body">{children}</div>
    </>
  );
};
