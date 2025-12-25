import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function submitRegistration(data) {
  await addDoc(collection(db, "registrations"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}
