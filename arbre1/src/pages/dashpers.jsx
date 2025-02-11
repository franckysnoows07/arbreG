import Sidebar1 from "../components/sidebar1";
import PersonsTable from "../components/personnes";
import UserGreeting from "../components/UserGreeting";

function DashPersonne() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar1 />
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
        
        <h2 className="text-2xl font-semibold text-green-700">Dashboard</h2>
        <UserGreeting />
      </div>
       
        {/* Table */}
        <PersonsTable />
      </main>
    </div>
  );
}

export default DashPersonne;
