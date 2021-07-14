import Header from "./Header.js";

export default function LandingPage({
  loggedIn,
  handleMySkyLogin,
  handleMySkyLogout,
}) {
  return (
    <div>
      {/* <Header handleMySkyLogout={() => handleMySkyLogout(mySky, dispatch)} /> */}
      <Header handleMySkyLogout={handleMySkyLogout} />
      {loggedIn ? (
        <div>
          <h1 className="text-xl bg-red-300">hello user</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-xl bg-red-300">login to get access</h1>
          <button
            className="m-4 px-8 text-xl text-white rounded border-2 border-red-300 bg-red-500 hover:bg-red-300"
            onClick={handleMySkyLogin}
          >
            log in
          </button>
        </div>
      )}
      {/* placeholder start */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        distinctio ea quaerat nesciunt vitae quos aliquam tenetur ut beatae,
        natus exercitationem, cum debitis. Ullam voluptatum perferendis quam.
        Ex, pariatur error.
      </p>
      {/* placeholder end */}
    </div>
  );
}
