import { useRouter } from "next/router";

const ClientsPage = () => {
  const router = useRouter();

  const loadClientHandler = () => {
    router.push("clients/max/projects");
  };

  //   Alternate
  //   const loadClientHandler = () => {
  //     router.push({pathname: "clients/[max]/[projectId]", query: {id: "max", projectId: "projectA"}});
  //   };

  return (
    <div>
      <h1>Clients page</h1>

      <button onClick={loadClientHandler}>
        Navigate to client Max projects
      </button>
    </div>
  );
};

export default ClientsPage;
