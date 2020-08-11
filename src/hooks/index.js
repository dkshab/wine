import { useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "../utilities/firebase";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      // console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setUser({
            user: { uid: snapshot.id, ...snapshot.data() },
          });
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return { user, setUser };
};
