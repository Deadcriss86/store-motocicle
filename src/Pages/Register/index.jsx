const SingUp = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl text-white mb-6 text-center">Registrate</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="email"
              ></label>
              <input
                className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Correo"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold"
                htmlFor="password"
              ></label>
              <input
                className="w-full px-3 py-2 mb-4 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Contraseña"
              />
              <input
                className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Confirmar Contraseña"
              />
            </div>
            <div className="mb-4">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2 leading-tight"
              />
              <label htmlFor="rememberMe" className="text-gray-300 text-sm">
                Recordarme
              </label>
            </div>
            <div className="flex items-center justify-center mb-4">
              <button className="bg-black text-white font-bold py-2 px-4 rounded-full w-full flex items-center justify-center gap-2">
                <img src="" alt="Google" className="w-6 h-6" />
                Registrarme con Google
              </button>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-gray-300 mx-2">o</span>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full w-full">
                Registro
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-300">
              ¿Aún no tienes cuenta?{" "}
              <a href="#" className="text-green-500">
                Regístrate
              </a>
            </p>
            <p className="text-gray-300 mt-2">
              <a href="#" className="text-green-500">
                Olvidé mi contraseña
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
