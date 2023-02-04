import Site from "./components/Site";
import SiteList from "./components/SiteList";

export default function App() {
  return (
    <>
      <SiteList
        Sites={[
          <Site
            link=""
            name="GymLog"
            summary="개인 기록을 작성하기 위한 블로그 프로젝트입니다."
            tech_stacks={["react", "mui", "mariadb"]}
          />,
          <Site
            link=""
            name="SomeProject1"
            summary="테스트용 프로젝트1입니다."
            tech_stacks={["react", "mui", "redux", "mongodb"]}
          />,
          <Site
            link=""
            name="SomeProject2"
            summary="테스트용 프로젝트2입니다."
            tech_stacks={["next", "bootstrap", "mariadb"]}
          />,
        ]}
      ></SiteList>
    </>
  );
}
