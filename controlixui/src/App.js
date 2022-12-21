import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  const fetchComments = async () => {
    fetch("http://localhost:8081/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((e) => {
        console.log(e);
        setData(e);
      });
  };

  useEffect(() => {
    const comInterval = setInterval(fetchComments, 2000);

    return () => clearInterval(comInterval);
  }, []);

  function sendCommand(data) {
    fetch("http://localhost:8081/command", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    });
  }

  function statusBox(statusCode, InfoText) {
    if (statusCode === 0) {
      return (
        <div className="p-3 rounded-md w-full h-full text-center ml-2 bg-emerald-300 hover:bg-emerald-600 font-bold text-3xl shadow-lg text-white duration-300 ">
          {InfoText}
        </div>
      );
    } else {
      return (
        <div className="p-3 rounded-md w-full h-full text-center place-self-start ml-2 bg-red-400 hover:bg-red-600 font-bold text-3xl shadow-lg text-white duration-300">
          {InfoText}
        </div>
      );
    }
  }

  return (
    <div className="grid grid-cols-1 grid-rows-2 m-5  place-content-center border-2 rounded-md shadow-md p-9 duration-300">
      <div className="block md:grid md:grid-cols-4 duration-300 grid-cols-1 gap-4">
        <div className="grid col-span-1">
          <div className="grid  w-full h-full grid-cols-1">
            <div className="w-full h-full col-span-1 border-2 rounded-md">
              <img
                className="w-full h-full p-5"
                src="https://firebasestorage.googleapis.com/v0/b/esp32cam-93d6c.appspot.com/o/data%2Fphoto.jpg?alt=media&token=a987cfb9-1034-47a6-95a8-8870a996063f"
                alt="new"
              />
            </div>
          </div>
        </div>

        <div className="grid col-span-2 place-items-start grid-rows-1">
          <div className="grid grid-col-3 w-full h-full ">
            <div className="flex py-3">
              <img
                alt="new"
                className=""
                src="https://img.icons8.com/ios/40/ffffff/driving.png"
              />

              <div className="ml-3 text-2xl font-bold text-white">
                : Mahmut Mahmutoğlu
              </div>
            </div>
            <hr className=" "></hr>
            <div className="flex py-3">
              <img
                alt="new"
                src="https://img.icons8.com/ios/40/ffffff/age.png"
              />
              <div className="ml-5 text-2xl font-bold  text-white">
                : 25 years old
              </div>
            </div>
            <hr className=" "></hr>
            <div className="flex py-3">
              <img
                alt="new"
                src="https://img.icons8.com/ios/40/ffffff/licence.png"
              />
              <div className=" ml-5 col-span-2 text-2xl font-bold  text-white">
                A, B1, B2, C1
              </div>
            </div>
            <hr className=" "></hr>
            <div className="flex py-3">
              <img
                alt="new"
                src="https://img.icons8.com/ios-filled/50/ffffff/steering-wheel.png"
              />
              <div className="flex">
                <div className=" text-2xl font-bold  text-white">
                  Driver Type:
                  {
                  data.ledDurum === 1 &&
                  data.buzzerDurum === 1 &&
                  data.kilitliMi === 1 ? (
                    <div className="text-red-500 text-3xl">Agressive</div>
                  ) : (
                    <div className="text-green-500 text-3xl">Carefull</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block md:grid col-span-1 place-self-center text-center duration-300">
          <div className=" w-full h-full place-content-center place-items-center grid duration-300">
            {data.sinirDisi === 1 ||
            data.ledDurum === 1 ||
            data.buzzerDurum === 1 ||
            (data.kilitliMi === 1 && data.motorCalisiyorMu === 1) ? (
              <div className="duration-300 bg-red-500 animate-pulse lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] grid  rounded-full">
                <div></div>
                <div className="md:pt-8 font-bold text-2xl text-white">
                  Car in Danger
                </div>
                <div></div>
              </div>
            ) : (
              <div className="duration-100 bg-emerald-500 lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] grid grid-rows-3 rounded-full">
                <div></div>
                <div className=" font-bold text-2xl text-white">Car is Safe</div>
                <div></div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-rows-3 gap-5 mt-5">
        <div className="grid grid-cols-3 gap-5">
          <div>{statusBox(data.sinirDisi, "Out of Range Status")}</div>
          <div>{statusBox(data.motorCalisiyorMu, "Engine Status")}</div>
          <div>{statusBox(data.ledDurum, "Car Flashes")}</div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div>{statusBox(data.buzzerDurum, "Buzzer")}</div>
          <div>{statusBox(data.kilitliMi, "Car Lock")}</div>
          <div>{statusBox(data.kameraCek, "Camera Used")}</div>
        </div>

        <div className="grid grid-cols-4 gap-5 w-full">
          <div>
            <button
              className="border-2 w-full rounded-lg p-5 text-white hover:text-black hover:bg-white text-lg font-bold duration-300"
              onClick={() => {
                sendCommand({ kilitliMi: 1 });
              }}
            >
              Kilit Aç
            </button>
          </div>
          <div>
            <button
              className="border-2 w-full rounded-lg p-5 text-white hover:text-black hover:bg-white text-lg font-bold duration-300"
              onClick={() => {
                sendCommand({ kilitliMi: 0 });
              }}
            >
              Kilit Kapat
            </button>
          </div>
          <div>
            <button
              className="border-2 w-full rounded-lg p-5 text-white hover:text-black hover:bg-white text-lg font-bold duration-300"
              onClick={() => {
                sendCommand({ motorCalisiyorMu: 1 });
              }}
            >
              Motor Aç
            </button>
          </div>
          <div>
            <button
              className="border-2 w-full rounded-lg p-5 text-white hover:text-black hover:bg-white text-lg font-bold duration-300"
              onClick={() => {
                sendCommand({ motorCalisiyorMu: 0 });
              }}
            >
              Motor Kapa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
