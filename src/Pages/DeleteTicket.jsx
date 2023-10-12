import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const DeleteTicket = () => {
  const [band, setBand] = useState("");
  const [loading, setLoading] = useState(false);
  const [confrimDelete, setConfrimDelete] = useState(true);
  const [inputPassword, setInputPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [backToHome, setBackToHome] = useState(false)

  const password = 1234;
  const { id } = useParams();

  // Loading data
  useEffect(() => {
    setLoading(true);

    axios.get(`http://localhost:5555/tickets/${id} `).then((response) => {
      setLoading(false);
      setBand(response.data.band);
    });
  }, []);

  // Vymazání lístku + kontrola hesla
  const handleDeleteTicket = () => {
    setLoading(true);
    if (parseFloat(inputPassword) === password) {
      axios
        .delete(`http://localhost:5555/tickets/${id} `)
        .then((response) => {
          setLoading(false);
          setCheckPassword("Lístek úspěšně vymazán");
          setBackToHome(true)
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    } else {
      setLoading(false);
      setCheckPassword("Chybné heslo!");
    }
  };

  // Smazání hesla po potvrzení
  useEffect(() => {
    setInputPassword("");
  }, [checkPassword], 5000);

  return (
    <div className="flex w-[350px] items-center justify-center m-auto flex-col mt-10">
      <h1 className="text-2xl">Odstranění záznamu</h1>
      <Link className="text-blue-700 font-semibold" to={"/"}>
        Home
      </Link>
      <div className="mt-6 text-center mb-10">
        <p>Jsi si jstý že chceš smazat záznám lístků skupiny:</p>
        <span className="uppercase font-bold">{band}</span>?
      </div>

      {confrimDelete ? (
        <button
          className="bg-red-400 px-4 py-1 text-xl rounded-xl font-semibold hover:bg-red-700 transition-all"
          onClick={() => setConfrimDelete(false)}
        >
          Smazat
        </button>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <label>Heslo pro potvrzení:</label>

          <input
            className="border-b-2 px-2 outline-none border-gray-500"
            type="text"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <button
            className="mt-8 bg-green-400 px-4 py-1 text-xl rounded-xl font-semibold hover:bg-green-600 transition-all"
            onClick={handleDeleteTicket}
            type="submit"
          >
            Potvrdit
          </button>
          <div className="bg-orange-400 flex items-center justify-center mt-8 px-4 rounded-md">
            {checkPassword}
          </div>
          <div className="mt-8">{backToHome ? <Link className="text-blue-700 text-xl" to={"/"}>Návrat zpět na přehled Lístků.</Link> :  ""}</div> 
        </div>
      )}
    </div>
  );
};

export default DeleteTicket;
