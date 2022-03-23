import { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom'

export default function NoteList() {

    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();

    // Función para emplear async y await en la petición de datos al backend
    const loadNote = async () => {
        const response = await fetch('http://localhost:4000/notes');
        const data = await response.json();
        setNotes(data);
    }

    const handleDelete = async (id) => {
        try {
            // Deleted in backend
            const res = await fetch(`http://localhost:4000/note/${id}`, {
                method: "DELETE",
            })

            //Deleted in frontend
            setNotes(
                notes.filter(note => note.id !== id)
            );

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        loadNote();
    }, []);

    return (
        <>
            <h1> NoteList </h1>
            {notes.map((note) => (
                <Card key={note.id} style={{
                    marginBottom: ".7rem",
                    backgroundColor: "#B7B4A1"
                }}>
                    <CardContent
                        style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <div style={{ color: "#42373B" }}>
                            <Typography>{note.title}</Typography>
                            <Typography>{note.description}</Typography>

                        </div>
                        <div>
                            <Button
                                variant="contained"
                                style={{
                                    backgroundColor: "#808274"
                                }}
                                onClick={() => navigate(`note/${note.id}/edit`)}
                            >Edit</Button>
                            <Button
                                variant="contained"
                                style={{
                                    backgroundColor: "#42373B",
                                    marginLeft: ".5rem"
                                }}
                                onClick={() => handleDelete(note.id)}
                            >Delete</Button>
                        </div>

                    </CardContent>
                </Card>
            ))}
        </>
    );
}
