import React, {useState} from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpService } from '../service/service'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log('state check',state);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(signUpService({email, username, password, name, surname, phonenumber}))
            navigate('/success');
        } catch (error) {
            setError(error);
        }
        
    }

    return(
        <div>
            <Typography variant="h4">Sign Up</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    sx={{ display: 'block', marginBottom: 2, width: '100%' }}
                    onChange={(e) => setEmail(e.target.value)}> Email*</TextField>
                <TextField
                    label="Phone Number"
                    variant="outlined"
                    type="text"
                    value={phonenumber}
                    sx={{ display: 'block', marginBottom: 2, width: '100%' }}
                    onChange={(e) => setPhonenumber(e.target.value)}> Phone Number*</TextField>

                   <Button type="submit" variant="contained" color="primary">Sign Up</Button> 
            </form>
        </div>
    )
}

export default Signup;