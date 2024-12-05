import dp from "../assets/dp.png";

export default function Og() {
  return (
    <div>
      <img
        style={{
          display: "block",
          WebkitUserSelect: "none",
          margin: "auto",
          cursor: "zoom-in",
          backgroundColor: "hsl(0, 0%, 90%)",
          transition: "background-color 300ms",
        }}
        src={dp}
        alt="clarence aigbuza portfolio preview"
      />
    </div>
  );
}
