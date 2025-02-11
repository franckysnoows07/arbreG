// HomePage.js
import {Link} from 'react-router-dom';

const HomePage = () => {


  return (
    <div className="font-montserrat bg-orange-50 text-amber-950">
      {/* Barre de navigation */}
      <br />
      <div className="container mx-auto px-4 flex items-center justify-between mb-4">
            <img
              src="src/assets/logo.png"
              alt="logo"
              className="w-30 h-20 ml-8"
            />
            <div className="hidden md:flex space-x-8 text-lg">
              <a href="#accueil" className="text-amber-950 hover:bg-orange-50">
                Accueil
              </a>
              <a href="#connection" className="text-amber-950 hover:bg-orange-50">
                Connection
              </a>
              <a
                href="#enregistrement"
                className="text-amber-950 hover:bg-orange-50"
              >
                Enregistrement
              </a>
            </div>
      </div>
      <div className="h-px bg-amber-950"></div>
      {/* Section principale */}
      <section className="flex flex-col lg:flex-row items-center py-12 px-8 lg:px-16">
        {/* Texte et formulaire */}
        <div className="flex-1 space-y-6">
          <p className="text-lg leading-relaxed">
            Bienvenue sur notre plateforme ! Découvrez des fonctionnalités innovantes,
            une interface intuitive et une expérience utilisateur unique. Profitez
            d&apos;une navigation fluide et intuitive adaptée à vos besoins.
            Explorez de nouvelles possibilités avec notre plateforme. Nous vous
            aidons à découvrir des solutions innovantes adaptées à vos besoins.
            Plongez dans une aventure numérique unique et épanouissante.
          </p>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Recherchez ici..."
              className="w-full px-4 py-2 bg-orange-50 border rounded-md focus:outline-none focus:ring focus:ring-orange-100"
            />
          </div>
          <div className="flex space-x-4">
            <Link to ="/conf">
              <button className="bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-orange-600">
                S&apos;inscrire
              </button>
            </Link>
            <Link to ="/login">
              <button className="bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-orange-700">
                Se connecter
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 hidden lg:flex justify-center">
          <img
            src="src/assets/img2.png"
            alt="Technology"
            className="object-cover rounded-md shadow-md"
          />
        </div>
      </section>

      {/* Section "Surprenez-vous" */}
      <section className="text-center py-12 px-8 bg-orange-50">
        <h2 className="text-3xl font-bold mb-4">Surprenez-vous</h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg leading-relaxed">
          Explorez de nouvelles possibilités avec notre plateforme. Nous vous
          aidons à découvrir des solutions innovantes adaptées à vos besoins.
          Plongez dans une aventure numérique unique et épanouissante. Explorez 
          de nouvelles possibilités avec notre plateforme. Nous vous
          aidons à découvrir des solutions innovantes adaptées à vos besoins.
          Plongez dans une aventure numérique unique et épanouissante.
          
        </p>
        <button className="bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-orange-600">
          En savoir plus
        </button>
      </section>

      {/* Section double avec image et texte */}
      <section className="space-y-12 py-12 px-8 lg:px-16">
        {/* Première sous-section */}
        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex-1">
            <img
              src="src/assets/image.png"
              alt="Innovation"
              className="object-cover rounded-md shadow-md"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold">Titre de section</h3>
            <p className="text-lg leading-relaxed">
              Découvrez comment nous pouvons transformer vos idées en réalité avec
              nos solutions innovantes et adaptées à vos besoins. Découvrez comment nous pouvons transformer vos idées en réalité avec
              nos solutions innovantes et adaptées à vos besoins. Découvrez comment nous pouvons transformer vos idées en réalité avec
              nos solutions innovantes et adaptées à vos besoins. Découvrez comment nous pouvons transformer vos idées en réalité avec
              nos solutions innovantes et adaptées à vos besoins.
            </p><br />
            <button className="bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-amber-950">
              En savoir plus
            </button>
          </div>
        </div>

        {/* Deuxième sous-section */}
        <div className="flex flex-col lg:flex-row-reverse items-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex-1">
            <img
              src="src/assets/image.png"
              alt="Design"
              className="object-cover rounded-md shadow-md ml-24"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold">Titre de section</h3>
            <p className="text-lg leading-relaxed">
              Nos services vous offrent des designs uniques pour mettre en valeur
              votre créativité et booster votre productivité. Nos services vous offrent des designs uniques pour mettre en valeur
              votre créativité et booster votre productivité. Nos services vous offrent des designs uniques pour mettre en valeur
              votre créativité et booster votre productivité. Nos services vous offrent des designs uniques pour mettre en valeur
              votre créativité et booster votre productivité.
            </p><br />
            <button className="bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-amber-950">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* Section finale */}
      <section className="text-center py-12 px-8 bg-white">
        <h2 className="text-3xl font-bold mb-4">Titre final</h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg leading-relaxed">
          Rejoignez-nous et découvrez comment notre plateforme peut transformer
          votre façon de travailler et de vous connecter avec le monde. Rejoignez-nous et découvrez comment notre plateforme peut transformer
          votre façon de travailler et de vous connecter avec le monde. Rejoignez-nous et découvrez comment notre plateforme peut transformer
          votre façon de travailler et de vous connecter avec le monde.Rejoignez-nous et découvrez comment notre plateforme peut transformer
          votre façon de travailler et de vous connecter avec le monde. Rejoignez-nous et découvrez comment notre plateforme peut transformer
          votre façon de travailler et de vous connecter avec le monde.
        </p>
        <button className="bg-orange-800 text-white px-6 py-2 rounded-md hover:bg-orange-950">
          En savoir plus
        </button>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-amber-950 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 px-8">
          <div className="text-2xl font-bold">
          <img
              src="src/assets/logo.png"
              alt="logo"
              className="w-30 h-20 ml-8"
            />
          </div>
          <nav className="space-x-6">
            <a href="#" className="hover:text-orange-300">Accueil</a>
            <a href="#" className="hover:text-orange-300">Connexion</a>
            <a href="#" className="hover:text-orange-300">Enregistrement</a>
          </nav>
          <div className="space-x-4">
            <a href="#" className="hover:text-orange-300">Facebook</a>
            <a href="#" className="hover:text-orange-300">Twitter</a>
            <a href="#" className="hover:text-orange-300">LinkedIn</a>
          </div>
        </div>
        <p className="text-center mt-6 text-sm">&copy; 2024 Votre Entreprise. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default HomePage;
