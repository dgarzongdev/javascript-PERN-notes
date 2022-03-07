import { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

export default function NoteList() {

    const [notes, setNotes] = useState([]);

    // Función para emplear async y await en la petición de datos al backend
    const loadNote = async () => {
        const response = await fetch('http://localhost:4000/notes');
        const data = await response.json();
        setNotes(data);
    }

    useEffect(() => {
        loadNote();
    }, []);

    return (
        <>
            <h1> NoteList </h1>
            {notes.map((note) => (
                <Card  key={note.id} style={{
                    marginBottom: ".7rem",
                    backgroundColor: "#B7B4A1"
                }}>
                    <CardContent
                        style={{
                            display:"flex",
                            justifyContent:"space-between"
                        }}
                    > 
                    <div style={{color:"#42373B"}}>
                        <Typography>{note.title}</Typography>
                        <Typography>{note.description}</Typography>

                    </div>
                    <div>
                         <Button 
                            variant = "contained"
                            style = {{
                                backgroundColor:"#808274"
                            }}
                            onClick={() => console.log('edit')}
                        >Edit</Button>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor:"#42373B",
                                marginLeft:".5rem"
                            }}
                            onClick={() => console.log('deleted')}
                        >Delete</Button>
                    </div>
                       
                    </CardContent>
                </Card>
            ))}
        </>
    );
}
