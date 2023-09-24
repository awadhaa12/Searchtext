import {useState, useEffect} from 'react';
import sample_show_tech from "./sample_show_tech.txt"

const Search = () => {
    const [query, setQuery] = useState("");
    const [textData, setTextData] = useState("")
    const [showData, setData] = useState("")

    const onSearch = (searchTerm) =>{

        if(searchTerm.includes(query)) {
            setData(query)
        }
        else{
            setData("Data not present in file")
        }       
    }

    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async() => {
           fetch(sample_show_tech)
          .then(r => r.text())
          .then(text => {
          setTextData(text)
          
});
    }

    return (
        <div className="App">

            <h2>Search from a file</h2>
            
         <input type= "text" value= {query} placeholder='Enter text to search' onChange={(e) => setQuery(e.target.value)}></input>
         <button onClick={() => onSearch(textData)}>Search</button>

         {
           showData
         }

         
        </div>
      );
}

export default Search;