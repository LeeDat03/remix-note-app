import type { MetaFunction } from "@remix-run/node";

import { Link } from "@remix-run/react";
import "~/styles/home.css";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main id="content">
      <h1>A better way of keep track of your note</h1>
      <p>Try out our early beta and never loose track of your note again</p>
      <p id="cta">
        <Link to="/note">Try now!</Link>
      </p>
    </main>
  );
}
