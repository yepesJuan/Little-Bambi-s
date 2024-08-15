import Link from "next/link";

const bookingForm = () => {

  return (
    <div className="min-h-screen w-full">
      <Link href="/">
      <button
        className="absolute top-4 left-4 bg-white text-black py-1 px-2 rounded-lg shadow-lg"
      >
        Back Home
      </button>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScK_uLbyOatLiLwV8z23VcuvgppEAUxeGiQKKdh8w2CuLhd_A/viewform?embedded=true"
          width="100%"
          height="1000px"
          sandbox="allow-scripts"
          loading="lazy"
          style={{ border: "none", minHeight: "100vh" }}
          aria-hidden="false"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default bookingForm;