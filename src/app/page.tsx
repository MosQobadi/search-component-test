import MainSearch from "./components/MainSearch";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1>Task Search Component</h1> */}
      <MainSearch />
    </main>
  );
}
