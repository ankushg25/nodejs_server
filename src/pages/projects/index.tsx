import Wizard from "@/components/CreateProject";
import Sidebar from "@/components/sidebar";
import TopNavBar from "@/components/topnavbar";

export default function Projects(): JSX.Element {
  return (
    <main className="d-flex flex-row bg-secondary">
      <Sidebar />
      <div className="w-100">
        <TopNavBar text="Create Project" />
        <div className="min-vh-100">
          <Wizard />
        </div>
      </div>
    </main>
  );
}
