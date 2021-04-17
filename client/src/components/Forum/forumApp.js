import { COntainer, Flex, Spinner, VStack } from "@chakra-ui/core"
import React from 'react'
import Poost from "./components/post";
import db from "./lib/firebase";

const App = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      // Hook to handle the initial fetching of posts
  
      db.collection("posts")
        .orderBy("createdAt", "desc")
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          setPosts(data);
        });
    }, []);
    return (
        <div>
            return (
                <div className="div">Hello World</div>
            )
        </div>
    )
}

export default forumApp;
