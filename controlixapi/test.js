var express = require("express");
var app = express();
var http = require("http");
var firebase = require("firebase-admin");
const cors = require("cors");
const { parse } = require("path");
const { json } = require("express");
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const firebaseConfig = {
  apiKey: "AIzaSyABCxzLM5_Cj3ilhH-sY-88LeJ4btaSHEc",
  authDomain: "esp32iot-c268c.firebaseapp.com",
  databaseURL: "https://esp32iot-c268c-default-rtdb.firebaseio.com",
  projectId: "esp32iot-c268c",
  storageBucket: "esp32iot-c268c.appspot.com",
  messagingSenderId: "772096193750",
  appId: "1:772096193750:web:db445c80cb755fd4c8c577",
  credential: firebase.credential.cert({
    type: "service_account",
    project_id: "esp32iot-c268c",
    private_key_id: "0d335ce1a8307be33d4321645d1da8fe65f8dc4",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAACBKkwggSlAgEAAoIBAQCn7nwICoOhJ+I1\nrpdShevq8BVLtCu+KeONfuvBQ1I/pVzmQBFqM9pPQ9ktzb2c12u50pb6BUN/xZJx\nmk+r62gaUXzq18V6l8hhB8SNir8b1G91aUTZDAlUhrGA1rAbIUV0yelN76VvgJEf\nzBq3IsfW8OYqUnUiShcMQF7Kv41Pt1o7XLH8jCP/3q7+kfW1da0Djy+q3wEZjV5+\nCBTueZGmKlshe4eWHe+bzo38HX+9XClsC06YYuwGtRpTt+CRh7lEQAIEGAL1XZh0\n3LIA4AHFVxcPJD2qsKkMbARwT0ARvGdZUH56SKIJoihJbppuH9+QhkdQGEZA2FxB\nQvzRPB3LAgMBAAECggEAMe5I1qM5rAsNyWRV/eVv1fT4f//cGbievg2Ez3vS0rW6\nP4PBKdCtEnBb/LB1tlKe5ytkVIaIIU9/UWPOWJGv7FNaTwFE6ESFAcSrfmJInF+3\nnDNmkxpvE8DQujwbNJXZ7vWx9shQaizR+aBYOSeQP6p05RSLW1yoKa5iAOqfe5nO\nshCxA/jSR4IJZRWTtnnpXJyfdMLdg1FwlzBm3Zas0XpDvMof9jUMqeqLSZXOUe+x\nZzz1SHQC1FX/JAs8+iixPZdRuPqcfx7hIT3t4/A8wJbE2EyacAJYc0RCAM+T4buz\nxwyUZflcVmOwDe8rL9b+Fzbdd5zHoCuvFjiA90YyMQKBgQDmRfI+etE0p1+vVadx\njWaAbKxPvTT8Mg3kG++PhIW6vc31hToPMG7sxLLAj50Up+kYkqYRM0Ig1uZPJRBc\nI9bxAJhOl2huh6QQ67MfH74pQwEji4Ed2ZTc7jc1bP5gwyquZHOa3O3NjRdlPfa5\nAcoSCJrje6ojr/3fukripYbpfQKBgQC6sYCWSVh6aph5TLQQOrGBRIorIuTEXquK\n+xwle6RMg4dJ2Y7J31nk369Lx6mXyArXKalkGzLhaTwUVQLjqHJIAszjsDV8SQAF\n0CupMFm5Y2qBhJ3cC3theMSR/NuSA5yAdGyzcd9VB0ZwurVS3deNEzExxOX11TRb\njZHSweiG5wKBgQC4s4wNz4d0u3fFdGe9bhS0l/ZSc0pHq4J24G1z6XE2iz3jXDxo\nqImgwlk6mTb+tXwDaMVpcHrvSlArVWhc76ZdYwPHrixm08emhtgC8/wcrpEASMqE\n/dwopa6E3OrhBEp83TfZFLJtuGj2nRAD70p80ogiRTQAMg7pYEzmpKylJQKBgQCQ\n+63/iEA0+Tkl4kJn5BzbZa3jZ/q+4UJY8T/fgBCM9wwGdvTjoxd9nZTVxd3XqJt6\nkrkgq9qsoPvuUkKnJ7ZwY/RX0g0HUu24lfyCLLFRPnqE0MeDDkun25DUSsj9sN5G\nB6QvCvzEXJ0AiI6uJufxf/kRTHbFnehGPUAEq1/3+wKBgQDkxW6Zt0B+kmrq8StU\nlgqeaDDRGklSb3njtn7PbBY21q74+q5/fQWtwad7gLzQYuhY4T81bgR383f5CsCL\ns09lne9+n86JUiVdsKMXB5mQFoVEnuD1b1eFPkcztPNITChhR4KBO8xQvknHlDx7\n9AlTsVgWyJmECN4IQAwrBW0rug==\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-cgdak@esp32iot-c268c.iam.gserviceaccunt.com",
    client_id: "118286938462151809620",
    auth_uri: "https://accounts.google.com/o/oauth2/uth",
    token_uri: "https://oauth2.googleapis.com/oken",
    auth_provider_x509_cert_url: "https://wwwgoogleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebas-adminsdk-cgdak%40esp32iot-c268c.iam.gserviceaccount.com",
  }),
};

const firebaseCamConfig = {
  apiKey: "AIzaSyCtcl3wmRwJxp8F--J1Efpm8dPtwYlBRAo",
  authDomain: "esp32cam-93d6c.firebaseapp.com",
  databaseURL: "https://esp32cam-93d6c-default-rtdb.firebaseio.com",
  projectId: "esp32cam-93d6c",
  storageBucket: "esp32cam-93d6c.appspot.om",
  messagingSenderId: "472080264454",
  appId: "1:472080264454:web:d1568318a191268ee0287",
  measurementId: "G-4HTBG2BXEE",
  credential: firebase.credential.cert({
    type: "service_account",
    project_id: "esp32cam-93d6c",
    private_key_id: "13de2700ecb80a1f36a893acf4d7b8118b82c1c",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDO03q57xpDQ76j\nRhjZob87kskqWqY/U+dYXExgoLZq6NhdvhetRi6qZltf2+F2aGsfVjYnyp8J3lZV\npKhADmRntNAQmmhdgCI3QKT16aLkxRGikiT+1qc90Cj+5Bcn4iOB0mPuvsUh1alS\n/HNzkzXfp86LYe2OhzL28LcRC2udFUyg/U1hxUUtYg8J6AE45N0oxVlb6EC/pqGr\nV0Wf4u8tFcCT22C23q9sW9D90GNutuXsw2fVzI5ldVL+sGrQxc2kvKIFLi8ADKLT\nuSlPS3jVF+wGdR67BOPWTBMhTOafTTwShizA4bkxLFn/TMwlZCKX22l12tRvzimV\n80own1C1AgMBAAECggEAFw1SIfQo6LNdxaPz9BnHjzPCkSJuYiOPZvVOm/x9qHfQ\nWc5spCbs35gt+gavX/uuaN06hv/Z7wcld0E1cYJJJZftEtSq6jT0W1Usra3/NmFS\noFyKnA6/sC+JyjMQ86SMUZVqBvujTCycxT+W/Jw9RnLVHgrpp9eg0g4tUUyFD4pT\nK8GGsuJT/Du3fF37cT2Nk6oIHSem8Uc/mlxVUJxg8jVkL8fxYHUaDb8zIfDwsWUy\nSvh5AzewjlEvobjbMB6zc+t7DJ/eRQ8FvoFtZVRQxxVxy8PAsj7muM6m2i8+Zbgo\na34TOo9BTpE2AEMG840Bj8ge9M66GjRrbmS3hegkkQKBgQD9HvU8uvqTAuerztju\nnwxbJxMd/iiEEqrrgbtSUjf5YMQGKxFDAP8NFn0YkTlNc4WDsZIWzxwWkXbcZuJ/\naZwpwBTl0fzb1fqqjP/3BKjNh0N4i6oAcOkKGUq/lX5xVPGysqjbWIgc63tuVGZS\negabvNVJS33oXQgywZ5zupp4+QKBgQDRLbgkZ1IoIbEWkAx35WysypBL+M366+K+\nrNO0L5c+iO4F/9rGe3N/Hl1HaRm368+qmOGV3nvD95xVcRzvl4gAXDPWD5aCSZWq\nWTjgL2oDGZosHerfRnXjGyVC55LJuD7CHDBsh3jk+7TcZ9ZLLU2cjpkIq0bLD8Is\nogivC+QgnQKBgQCFINQxBdKmoZ+BoIA+OM7B3nJSkwtyM3NL/GaubGneMoPHDr28\ndPiwRIS0+CSgVMMDOdCxSGrof8d5Mm+sPbqRxuH24hPQ9+En9JLns76oopzc+PAH\n3VrkIdtLmm/vYZLhvs/K1ex48W1w4NkURfPV02KGczscjFm0gFs7WQjH2QKBgQCO\n7Ik0PnBxQUwJmZUbWuQdUC616iN7fi8oj1f7dsUFknPoH4BxO6qXwbyEbXiIJZR4\nAQup5iF0rbvg2W+m+UeQz28PpQj2rqaXhW0KKPtrcNPZrvtrYW5tJYAZLbcrIzum\nT7J6hToCY0WZj01pgmPUQ86mkLjHSFYpPvFmAV73NQKBgGfkO6lX64zb5yFqyYba\nOBYgRFkDTaarAbikJz+p/NBHP87PNK+sJBP9D7Ccn8SeOruvCxTlGocQRdiuGet1\nwCfRygjVQZ0bHEU9lqYQCWT5gRr/e8WLHXBIFFHMCc+mR2gRWc/tvUbxvq2uXX8N\nXsPI2ZBD/yT6WxR86cI/no3Y\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-zhomy@esp32cam-93dc.iam.gserviceaccount.com",
    client_id: "11288279995413498578",
    auth_uri: "https://accounts.goole.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googeapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/irebase-adminsdk-zhomy%40sp32cam-93d6c.iam.gserviceaccount.com",
  }),
};

//EMİR TEST FB
// const firebaseConfig = {
//   apiKey: "AIzaSyBFZUYAG05GS64G8b6Kys0TPvKi4wU7cU",
//   authDomain: "controlixtest.firebaseapp.com",
//   databaseURL:
//     "https://controlixtest-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "controlixtest",
//   storageBucket: "controlixtest.appspot.com",
//   messagingSenderId: "75278646494",
//   appId: "1:752781646494:web:f6c8b4cf4de6a5a29f98f",
//   measurementId: "G-592955H1NJ",
//   credential: firebase.credential.cert({
//     type: "service_account",
//     project_id: "controlixtest",
//     private_key_id: "826f4436d161dff076d7c5379aeb292227e5d",
//     private_key:
//       "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADAgkqhkiGw0BAQEFAASCBKgwggSkAgEAAoIBAQC8SQh4+NbXCgRk\nbM5i6X8RJdkrYGBFjNbOKjCELllVkV7fl5U7cBXZPlUg67fc5bY/PJtN+fUdAdRM\nOUmdHL06qVMOJN4U+7IfyR9jyjgguY4bTlpLPRt6h4wyXiW8HeTG+A4vEScwomvN\nWDUXQWVQ3ZkgDTQOOQsLxeYWNtswZHIReInM8WW5WhmQMfw9gsCzZCoDdpav6iRN\nF0GxgPnvjRB/0HzPLk4kWyR8ZcMCz9lAPCg/rVcWuHgeh9IyTvy0W/0ww6DArHbh\nhvYfQKpXGGlfj3pv4vRLqkbjw73OuJQWJABHR0pBOY3B/PiSXiyJW3kJYLFk0xTH\n+CYj0TEhAgMBAAECggEAAXBh9BG7y5wwHSffOm6MKfCC/MPBbJqnVB9KrGHxzRd9\ntQICshf41MaXDje6+aFYT5qqGbIWu1xll9kKvNyIvjNn1vh1aY3kZj2KY7/6hpaA\ndWk3g7JxfLHfQo3JZksIsfQYoKe2B9c/8WtyiW1WpcPxzQbIznCFavc9207bRT8F\n6KcylJgSPZ/KmGejeT/5iK49AwJOkCuTlHiCZzyxLJ4dTIobflI6gqKXLuHwcjCg\n/EAaX8MwoGB1sW/XYG81VmgKAanGN5A0UsoziOIkljF52dEZCbJ38XMaBgpJanFg\nf2Zb0DtqufawM1JJteaq1EeagUCBCe5QE4ysTOflAQKBgQDxeW/CLqbL2sEPhlVC\nLzOw7Fx1bs3yal9qmTJ/+fAzpUPdI8APuxbTuZXLBkyKoml3B0s7MdvzZL8KU2sM\nuAoD0+V4ar32LYvrDID+15+nxkIwbYcgPvOuGJ3gC/TCNX51vmrfDpvgXgquKBlj\nuHEkpkHVpsWiFrvpJN+NQVbZ4QKBgQDHnIQXpiLRvFZbAymExCk4+EbK4QixUQjG\n1uwrEgveWHMGr96Tk18OIeMFyBGDcWt4EeyU9P8gUqxHtHp2f6gNMtBj1ORxGC65\nMhiE8McqpLzmcaTC0Sm5XiZq/LR94IEg8soUNKeZ/g9K7ab/xHVAIsRkyOLZaqkW\nXmqkeNW/QQKBgCf0jAV5aqf4flFvTNQysz7nHTVhLDqcV0VwK+b5GEGzatNAgxsX\nPeOypZJ+bFPUI9dKIaydx2MynFm9C82C9kVD3ohaQSxmxOwTmZSRYR2FtJYGyYEQ\naYm5EQZtdAZei5o3878Mz8YESYgfonPZpP8Hc4VCnxj+4gDl1QeudAyBAoGBAJx6\n5lJjuwgQTOIsKHAcFvTCLTz+DIJ0tBysf5eEHim/zOyBEks+TFYX2pC9tn0EfOsz\nofNj3FzKcqQDp70ddfBi1VptmmfOPVKRIweUeY3EdxFwJWlT7xGR7SwRzqyfQptB\nuYj9fiYKNJLYmwIGUKRmnO8lTDCEnOkcOx2UXHwBAoGBAMqVlvQrspftvI4e+7RF\nQ/7ZpWn/BRUPqSHh8ckyGsLdbA75S96TJQoXtvHVa6LwJmaBRQ9DIdKOvbqSLfIP\n5nLcT63qiJSUPFW7QDw8+wi+Zzu1lilCVKhA7rmlWVspO7e+mM7OPakL55GdgW6a\n6UhFq7qt+DTJd6PtqY6ESNJO\n-----END PRIVATE KEY-----\n",
//     client_email:
//       "firebase-adminsdk-vrfgq@controlixtest.iam.gserviceaccount.com",
//     client_id: "111797952921671080504",
//     auth_uri: "https://accounts.google.com/o/outh2/auh",
//     token_uri: "https://oauth2.googleapis.com/token",
//     auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//     client_x509_cert_url:
//       "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vrfgq%40contolixtest.iam.gserviceaccount.com",
//   }),
// };

const appinit = firebase.initializeApp(firebaseConfig);
//const camappinit = firebase.initializeApp(firebaseCamConfig);

var db = firebase.database();

app.get("/", (req, res) => {
  db.ref()
    .get()
    .then((data) => res.status(200).send(data.val()));
});

app.post("/command", (req, res) => {
  obj = req.body;
  key = Object.keys(obj);
  keyX = key[0];
  val = obj[keyX];

  db.ref(keyX).set(val).then(
    ()=>{
      res.status(200).send("done");
    }
  )
  
});

server.listen(8081, () => console.log("App running on http://localhost:8081"));
