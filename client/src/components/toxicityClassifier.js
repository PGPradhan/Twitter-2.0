import "./styles.css";
import { useEffect, useState, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import { load } from '@tensorflow-models/toxicity';
import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';

// Set an id counter, so that we can automatically identify each message with a unique number:
let id = 3;
// Initialize our messages list with some sample messages:
const initialMessages = [
  { id: 1, msg: "Hello!" },
  { id: 2, msg: "What's up?"},
  { id: 3, msg: "Hello!"}
]

export default function Toxicity() {
  const [ messages, setMessages ] = useState(initialMessages); // The list of messages
  const [ toxicity, setToxicity ] = useState({ isToxic: false, labels: [] }); // The state of toxicity for the message we just typed 
  const [ isClassifying, setIsClassifying ] = useState(false); // A simple state variable to reflect the classifying process status
  const [ hasLoaded, setHasLoaded ] = useState(false); // Has the Toxicity model been loaded?
  const hasMessages = messages.length > 0;  // Should we render the ul that will hold the messages if no messages are available?
  const model = useRef(null); // Retain a value throughout the Component's render cycles WITHOUT triggering a render, as opposed to a useState variable

  // Handle form submission: check the toxicity of the message and update accordingly:
  const sendMessage = async event =>{
    // console.log("sendMessage()");
    event.preventDefault(); // Prevent default HTML form behaviour that will trigger an HTTP request and a page reload
    const form = event.target;
    const msg = form.message.value;

    // Run the classifier on every message
    setIsClassifying(true);
    const predictions = await model.current.classify([msg]);
    setIsClassifying(false);

    // Is the message toxic?
    const isToxic = predictions[6].results[0].match;

    if ( isToxic ){
      const labels = [];
      // Loop through the toxicity labels and create a list of them along with the corresponding percentagess (level of confidence):
      predictions.forEach( p =>{
        if ( p.results[0].match ){
          labels.push({ 
            label: p.label, 
            prob: Math.round(p.results[0].probabilities[1] * 100) + "%" });
        }
      })
      // console.log(labels);
      setToxicity({ isToxic: true, labels });
    } else {
      setMessages([...messages, { id: ++id, msg: msg }]);
      setToxicity({ isToxic: false, labels: [] });
      form.reset();
    }
  }
  // Load the model just one, when the component mounts (hence the empty dependency array [])
  useEffect(()=>{

    async function loadModel(){
      const threshold = 0.9;
      // Set a state that indicates the model is being loaded...
      model.current = await load(threshold);
      setHasLoaded(true);
      // Set the state to false to let the user know that they can check the text
      console.log("Model loaded");
    } 
    loadModel();


  },[]);

  return (
    <>
      
      <div class = "mainclass" style={{textAlign: 'center'}}>Toxicity Checker
      
      <p>   </p>
      <p>   </p>
      { hasMessages && 
    //     <ul>
    //       { messages.map( message =>{
    //         return <li key={message.id}>{ message.msg }</li>
    //       })}
    //     </ul>
    //   }{
        
        hasLoaded && (
          <form class = "txctform" onSubmit={sendMessage}>
            {/* <input type="text" name="message" placeholder="Enter message" /> */}
            <MDBInput wrapperClass='mb-4' name="message" id='form9Example1' label='Enter Message Here' />
            {/* <button>{ isClassifying ? " ️‍️‍🕵 " : "Send" }</button> */}
            <button class="btn" style={{backgroundColor:"#1DA1F2"}}>{ isClassifying ? " ️‍️‍🕵 " : "Send" }</button>
            
<div >
  <div><span>{ toxicity.isToxic && " 🤐" }</span>
            { toxicity.labels.map( l => ` ${l.label} ${l.prob}` )}</div>

</div>
            
          </form>
          
        )
      }
</div>
    </>
  );
}

