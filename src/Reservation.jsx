function Reservation() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");

  const handleReservation = () => {
    alert(
      `Reservation Confirmed!\nName: ${name}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`
    );
  };

  return (
    <div>
      <Navbar cartCount={0} />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>🍽 Reservation Page</h1>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br /><br />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Number of Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <br /><br />

        <button onClick={handleReservation}>
          Reserve Table
        </button>
      </div>
    </div>
  );
}