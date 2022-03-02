import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';

// React Hooks
import {useState, useEffect} from 'react';

export default function NoteForm() {

    // Set states
    const [note, setNote] = useState({
        title: '',
        description: ''
    });

    // Custom event
    const handleSubmit = e => {
        e.preventDefault();
        console.log(note);
    }

    const handleChange = e => {
        setNote({...note, [e.target.name]: e.target.value});
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
                        <form onSubmit={ handleSubmit }>
                            <TextField
                                variant='filled'
                                label='Write your title'
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
                                name='title'
                                onChange={handleChange}
                                inputProps={{ style: {color: "#42373B"}}}
                                InputLabelProps={{style: {color: "#42373B"}}}
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
                                inputProps={{ style: {color: "#42373B"}}}
                                InputLabelProps={{style: {color: "#42373B"}}}
                            />

                            <Button
                                variant='contained' color='inherit' type='submit'
                            >
                                Save
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
