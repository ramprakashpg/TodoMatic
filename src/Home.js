import { TextField } from "@material-ui/core";
import { useState } from "react";
import AddContent from './Add.js'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
    const [inputValue, setinputValue] = useState([]);

    function getValue(e){
        let val = document.getElementById("inputValue").value;
        if (val!==""){
            const newInput = [...inputValue,{"title":document.getElementById("inputValue").value, "id":inputValue.length, completed:"false"}]
            setinputValue(newInput)
            document.getElementById("inputValue").value = "";
            
        }else{
            alert("Value is empty")
        }
    }
    
    function removeAnItem(id){
        const newItems = inputValue.filter(val => val.id!==id)
        setinputValue(newItems)
    }


    function editAnItem(id){
        const editedTaskList = inputValue.map(value => {
              if (id === value.id) {
                let newName = prompt("Enter new value:",value.title)
                if(newName != null){
                return {...value, title: newName}
                }else{
                    return {...value, title:value.title}
                }
              }
              return value;
            });
            setinputValue(editedTaskList);
          }    

    function strikeOut(id){
        const complete = inputValue.map(value =>{
            if(id === value.id){
                if(value.completed === "false") return {...value, completed:"true"}
                else if(value.completed === "true") return {...value, completed:"false"}
            }
            return value;
        })
        setinputValue(complete)
        console.log(complete)
       }
       
    

    return (
        
        <div className="home">
            <h1>TodoMatic</h1> 
            <div style={{
                display:"flex",
                flexDirection:"row",
                color:"white",
                height:"59px"
            }}>
            <TextField id="outlined-basic" InputLabelProps={{style:{color:'white'}}} InputProps={{style:{
                    width:"500px",
                    color:'white'}}} label="Enter here..." variant="outlined" id="inputValue" />
           
            <Fab color="primary" aria-label="add" onClick={getValue} style={{
                display:"flex",
                alignSelf:"flex-end",
                marginBottom:"10px",
                marginLeft:"20px"
            }}>
            <AddIcon />
            </Fab>
            </div>
            <AddContent inputValue={inputValue} removeAnItem = {removeAnItem} editAnItem = {editAnItem} strikeOut={strikeOut}/>

        </div>
     );
}
 
export default Home;