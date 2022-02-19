import { Button } from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import "./index.css"



const AddContent = ({removeAnItem, inputValue, editAnItem, strikeOut}) => {
    return ( 
        <div className="content">
            {inputValue.map((val) => (
                <table>
                <tr>
                <td><div className="box-content" key={val.id}>

                <td><h3 className="content_area">{val.id+1}.</h3></td>
                &nbsp;&nbsp;
                <p className="content_area">{val.title}</p>
            <strike id="parah" style={{
                   fontSize:"20px",wordWrap:"break-word",width:"110px",fontWeight:"bold", marginBottom:"30px"
            }}></strike>
                <div className="buttons">

                <Checkbox defaultUnChecked sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                                                },
                }} onChange={()=>{
                    strikeOut(val.id);
                }}/>

                <Button className = "buttons" variant="contained" onClick={() =>{
                    removeAnItem(val.id)
                }}>Remove</Button>

                <Fab size="medium" style={{
                    marginLeft:"3em"
                }}color="secondary" aria-label="edit" onClick={()=>{
                    editAnItem(val.id)
                }}>
                    <EditIcon />
                </Fab>
                
                </div>
                </div></td>
                </tr>
                </table>            
            ))} 
            
        </div>
        
     );
}
 
export default AddContent;