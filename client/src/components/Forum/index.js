import { ChakraProvider } from "@chakra-ui/core";
import React from 'react'
import ReactDOM from 'react-dom'
import ForumApp from './forumApp';

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
        <ForumApp/>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
