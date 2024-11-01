import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button type="button" onClick={()=>{

        let news = "Indians are really performed well in paris olympic and won around 25 medals."

        console.log(news.toLowerCase());
        console.log(news.toUpperCase());


      }}>toUpperCase/toLowerCase</button>
       <button type="button" onClick={()=>{
        let firstName = "Sreenath Reddy";
        let lastName = "Reddy";
        let fullName = firstName.concat(lastName);
        console.log(fullName);
        
      }}>concat</button>
       <button type="button" onClick={()=>{
        let player = "   Sachin Tendulkar   ";
        console.log(`--->${player.trimStart()}<---`);
        console.log(`--->${player.trimEnd()}<---`);
        console.log(`--->${player.trim()}<---`);

        
      }}>trim/trimStart/trimEnd</button>
       <button type="button" onClick={()=>{
        let msg = "Oh my God!";
        console.log(msg.padStart(100,"O"));
        console.log(msg.padEnd(100,"!"))        
      }}>padStart/padEnd</button>
       <button type="button" onClick={()=>{
        let jsr = " Jai Shri Ram ";
        console.log(jsr.repeat(1008));
        
      }}>repeat</button>
       <button type="button" onClick={()=>{
        let prayer = "India is my country, all Indians are my brothers and sisters"
        console.log(prayer.replace("India", "Bharath"));
        console.log(prayer.replaceAll("India", "Bharath"));

        
      }}>replace/replaceAll</button>
       <button type="button" onClick={()=>{
        let prayer = "India is my country, all Indians are my brothers and sisters"
        console.log(prayer.split("a"));

        
      }}>split</button>
       <button type="button" onClick={()=>{
        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        console.log(alphabets.length);
        console.log(alphabets.at(0));
        

        
      }}>length</button>
       <button type="button" onClick={()=>{
         let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
         console.log(alphabets.slice(9,14));
         console.log(alphabets.substring(9,14));
         console.log(alphabets.substr(9,5));

        
      }}>slice/subStrig/subStr</button>
       <button type="button" onClick={()=>{
        let warrior = "Shri. Chatrapathi Shivaji Maharaj Ji."
        console.log(warrior.startsWith("Shri"));
        console.log(warrior.endsWith("ji"));
        console.log(warrior.includes("Shivaji"));
        
      }}>startsWith/endsWith</button>
       <button type="button" onClick={()=>{
        let jsr = "Jai Shri Ram Jai Shri Ram";
        console.log(jsr.indexOf("Ram"));
        console.log(jsr.search(/ram/i));
        console.log(jsr.lastIndexOf("Ram"));

        
      }}>indexOf/lastIndexOf</button>
       
    </div>
  );
}

export default App;
