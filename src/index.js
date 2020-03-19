import * as $ from 'jquery';
import Post from "@models/Post";
//import json from "../assets/json.json";
//import xml from '../assets/data.xml';
//import csv from '../assets/data.csv';
import WebpackLogo from "../assets/Webpack logo png.png";
import "./styles/styles.css";

const post = new Post("Webpack Post Title", WebpackLogo);

$('pre').addClass('code').html(post.toString());


// WebPack understand just javaScript, do not understand CSS etc
//console.log("JSON:", json);
//console.log('XML:', xml);
//console.log('CSV: ', csv);
