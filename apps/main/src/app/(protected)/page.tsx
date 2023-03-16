import { Prose } from "ui";

export const metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {
  return (
    <Prose>
      <h1>Hi!</h1>
      <p className="lead">Help me!</p>
    </Prose>
  );
}
