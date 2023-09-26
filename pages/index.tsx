import React from "react";
import Link from "next/link";

export default () => {
  const clients = [
    {
      id: "max",
      name: "Maxi",
    },
    { id: "man", name: "Manuel" },
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio page</Link>
        </li>
        <li>
          <Link replace href="/clients">
            Clients page
          </Link>
        </li>
        {clients.map((client) => {
          return (
            <li>
              <Link
                href={{
                  pathname: "/clients/[id]",
                  query: { id: client.id },
                }}
              >
                Clients page
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
