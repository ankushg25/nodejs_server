import Wizard from "@/components/CreateProject";
import Sidebar from "@/components/sidebar";
import TopNavBar from "@/components/topnavbar";

export default function Projects() {
    return (
        <main className="d-flex flex-row bg-secondary">
            <Sidebar />
            <div className="w-100">
                <TopNavBar
                    // companyName="Ayda (Trading as Parcity Limited)"
                    // isVerified={true}
                    text="Create Project"
                />
                <div className="p-2 ps-3 min-vh-100">
                    <Wizard />
                </div>
            </div>
        </main>
    )
}