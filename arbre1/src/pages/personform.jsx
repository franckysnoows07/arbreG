import Sidebar1 from "../components/sidebar1";
import AddPersonForm from "../components/addperson";
import UserGreeting from "../components/UserGreeting";

const PersonForm = () => {

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar1 */}
      <Sidebar1 />
      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 space-x-40">
          <h1 className="text-2xl font-bold text-green-700 ">Dashboard</h1>
          <UserGreeting />
        </div>
        {/* Form Section */}
        <section className="flex flex-col items-center justify-center">
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              AJOUTER UNE PERSONNE
            </h2>
          </div>
          {/* Form Component */}
          <AddPersonForm />
        </section>
      </main>
    </div>
  );
};

export default PersonForm;
