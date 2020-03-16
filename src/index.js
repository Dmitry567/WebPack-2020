import Post from "./Post";
import json from "../assets/json.json";
import WebpackLogo from "../assets/Webpack logo png.png";
import "./styles/styles.css";

const post = new Post("Webpack Post Title", WebpackLogo);

console.log("Post to String: ", post.toString());

// WebPack understand just javaScript, do not understand CSS etc
console.log("JSON:", json);
