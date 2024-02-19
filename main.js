import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBzAKiF_au1v-LcqBFSe06YVHwnSIS_daM",
  authDomain: "sayaibrahim-a6e88.firebaseapp.com",
  projectId: "sayaibrahim-a6e88",
  storageBucket: "sayaibrahim-a6e88.appspot.com",
  messagingSenderId: "346001836279",
  appId: "1:346001836279:web:6ae08ca41d407808cc6bf2",
  measurementId: "G-7417G3VVWP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambildaftarProduk() {
  const refDokumen = collection(db, "produk");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikankuery = await getDoc(kueri);

  let hasil = [];
  cuplikankuery.forEach((dok) => {
    hasil.push({
      id: dok.id,
      nama: dok.data().nama,
      harga: dok.data().nama,
      stok: dok.data().stok,

    });
  });
  return hasil;
}