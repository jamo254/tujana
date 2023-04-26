const Auth = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
          <div className="bg-black w-full lg:bg-opacity-50">
              <nav>
                  <img src="/images/logo.png" alt="tujana" className="h-12" />
                 
              </nav>
              <div className="flex justify-center">
                  <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                      <h2 className="text-white">
                          Sign in
                      </h2>
                  </div>
              </div>
      </div>
    </div>
  );
};
export default Auth;
