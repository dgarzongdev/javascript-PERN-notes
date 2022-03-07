import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material';

// React Hooks
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NoteForm() {

    // Set states
    const [note, setNote] = useState({
        title: '',
        description: '',
    });

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    // Custom event
    const handleSubmit = async (e) => {
        // Evita refrescar la página cada vez que guarda
        e.preventDefault();
        // Establecer estado
        setLoading(true);

        // Especifica la dirección de envío del formulario
        const res = await fetch('http://localhost:4000/note', {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        // Actualizar estado
        setLoading(false);
        // const data = await res.json();
        navigate('/');
    };

    const handleChange = e => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }


    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            justifyContent='center'
        >
            <Grid item xs={3}>
                <Card
                    sx={{ mt: 5 }}
                    style={{
                        backgroundColor: '#B7B4A1',
                        padding: '1rem'
                    }}
                >
                    <Typography
                        variant='5'
                        textAlign='center'
                        color='#42373B'
                    >
                        Create Note
                    </Typography>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                variant='filled'
                                label='Write your title'
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
                                name='title'
                                onChange={handleChange}
                                inputProps={{ style: { color: "#42373B" } }}
                                InputLabelProps={{ style: { color: "#42373B" } }}
                            />

                            <TextField
                                variant='filled'
                                label='Description'
                                multiline
                                rows={4}
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
                                name='description'
                                onChange={handleChange}
                                inputProps={{ style: { color: "#42373B" } }}
                                InputLabelProps={{ style: { color: "#42373B" } }}
                            />

                            <Button
                                variant='contained' color='inherit' type='submit' disabled={!note.title || !note.description}
                                // Si se está cargando la información el botón se deshabilita
                            >
                                {/* Si está cargando ejecutar la propiedad circularProgress */}
                                {loading ? (
                                    <CircularProgress color="secondary" size={12}/>
                                ) : (
                                    // En caso contrario mostar la palabra "Create"
                                    "Create"
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
