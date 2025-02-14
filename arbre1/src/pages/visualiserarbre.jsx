import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";

const VisualiserArbre = () => {
  const location = useLocation();
  const { tree } = location.state || {};

  if (!tree) {
    return <div>No tree data available</div>;
  }
  return (
    <div className="min-h-screen bg-[#F8F1E7] text-[#3D2B1F] px-8 py-4">
      {/* Navbar */}
      <div className="entete">
        <div className="container mx-auto px-4 flex items-center justify-between mb-4">
              <img
                  src="src\assets\logo.png"
                  alt="image"
                  className="w-30 h-20 ml-8"
              
              />
              <div className="hidden md:flex space-x-8 text-lg">
              <a href="#accueil" className="text-amber-950 hover:bg-orange-50 border-y-0">
                  Accueil
              </a>
              <a href="#connection" className="text-amber-950 hover:bg-orange-50 border-y-0">
                  Connection
              </a>
              <a href="#enregistrement" className="text-amber-950 hover:bg-orange-50 border-y-0">
                  Enregistrement
              </a>
              </div>

              <div className="text-[#6D8E48] text-3xl">🌍</div>
          </div>

          <div className="h-1 bg-amber-950"></div><br />
          <div className="flex w-max">
            <div className="flex ml-12 mr-20">
              <div className="mr-1">✅</div>
              <h4>Informations personnelles</h4>
            </div>
            <div className="flex ml-16 mr-20">
              <div className="mr-1">✅</div>
              <h4>Photos de profil</h4>
            </div>
            <div className="flex ml-16 mr-20">
              <div className="mr-1">✅</div>
              <h4>Biographie</h4>
            </div>
            <div className="flex ml-16 mr-20">
              <div className="mr-1">✅</div>
              <h4>Configuration du compte</h4>
            </div>
          </div><br />
        </div>

      {/* Contenu principal */}
      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-5xl grid grid-cols-2 gap-8 p-4">
          {/* Colonne Gauche */}
          <div className="space-y-6 pr-4">
            <div className="h-40 bg-white rounded ">
            <h3 className="font-bold text-[#4B3B2C] text-left">Nom de l&apos;arbre: {tree.name}</h3>
              <p className="text-sm text-[#4B3B2C] text-left">Créé par: {tree.createdBy.surname} {tree.createdBy.name}</p>
              <p className="text-sm text-[#4B3B2C] text-left">Nombre de membres: {tree.familyMembers.length}</p>
              <p className="text-sm text-[#4B3B2C] text-left">Date de création: {new Date(tree.createdAt).toLocaleDateString()}</p>
              <p className="text-sm text-[#4B3B2C] text-left">Dernière mise à jour: {new Date(tree.updatedAt).toLocaleDateString()}</p>
            </div>
            <div className="h-40 bg-white  rounded">
            <h3 className="font-bold text-[#4B3B2C] text-left mb-4">Membres de l'arbre</h3>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Rang</th>
                    <th className="py-2 px-4 border-b">Nom de famille</th>
                    <th className="py-2 px-4 border-b">Prénoms</th>
                    <th className="py-2 px-4 border-b">Date d&apos;ajout</th>
                    <th className="py-2 px-4 border-b">Nombre de relations</th>
                  </tr>
                </thead>
                <tbody>
                  {tree.familyMembers.map((member, index) => (
                    <tr key={member._id}>
                      <td className="py-2 px-4 border-b">{index + 1}</td>
                      <td className="py-2 px-4 border-b">{member.surname}</td>
                      <td className="py-2 px-4 border-b">{member.name}</td>
                      <td className="py-2 px-4 border-b">{new Date(member.dateAdded).toLocaleDateString()}</td>
                      <td className="py-2 px-4 border-b">{member.relationships.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Colonne Droite */}
          <div className="pl-4">
            <div className="h-full bg-white  rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
VisualiserArbre.propTypes = {
  tree: PropTypes.shape({
    name: PropTypes.string.isRequired,
    createdBy: PropTypes.shape({
      surname: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    familyMembers: PropTypes.arrayOf(PropTypes.object).isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default VisualiserArbre;
