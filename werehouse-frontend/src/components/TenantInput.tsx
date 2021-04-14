import React, {ChangeEvent, FormEvent, useState, useEffect} from "react";
import { Button, Select, MenuItem, TextField, InputLabel, FormControl, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    body: {
      padding: theme.spacing(2),
      textAlign: 'center',
      width: '1150px',
    },
    dropdown: {
        width: '250px',
        padding: '7px',
        height: '56px',
        marginLeft: '40px',
        marginRight: '40px',
        marginTop: '-8px',
    },
    textField: {
        height: '35px',
    },
    menuItem: {
        marginLeft: '40px',
        marginBottom: '10px',
    },
    submitButton: {
        alignContent: 'right',
    },
    line: {
        padding: '15px',
    },
    serial: {
        width: '310px',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    margin: {
        margin: theme.spacing(1),
    },
  }),
);

const SpecialButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);

  const SpecialButtonDefault = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#EAE8E7',
      borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#EAE8E7',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#EAE8E7',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);

interface Props {
}

const TenantInput: React.FC<Props> = () => {

    const classes = useStyles();

    const [name, setName] = useState<string>('');
    const [serial, setSerial] = useState<string>('');
    const [hmdType, setType] = useState<string>('');
    const [assettag, setAssettag] = useState<string>('');

    const handleSubmit =  async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await axios.get('/');
        alert(res);
        console.log(res);
        debugger;
        console.log("tenant: " + name);
        console.log("serial: " + serial);
        console.log("hmdType:" + hmdType);
        console.log("assettag:" + assettag);
    };

    const onTenantChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setName(e.target.value as string);
    };

    const onSerialChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSerial(e.target.value);
    };
    
    const onTypeChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setType(e.target.value as string);
    };
    
    const onAssetTagChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAssettag(e.target.value);
    };

    useEffect(() => {
        console.log('Component mounted');
        return () => {
            console.log('Component will be unmounted');
        }
    }, []);

    useEffect(() => {
        console.log(`Any state changed Name: ${name}, Controller Serial: ${serial}`);
    });

    useEffect(() => {
        console.log(`Name changed: ${name}`);
    }, [name]);

    return (
        <form onSubmit={handleSubmit}>
            <Grid className={classes.body}>
                <Grid container spacing={3} className={classes.line}>
                    <Grid item xs={3}>
                        <FormControl className={classes.textField}>
                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" label="Asset Tag" value={assettag} onChange={onAssetTagChange} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl className={classes.serial}>
                            <TextField id="outlined-basic" variant="outlined" label="Controller Serial" value={serial} onChange={onSerialChange} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel className={classes.menuItem} htmlFor="outlined-tenant-native-simple">Tenant Name</InputLabel>
                            <Select
                            className={classes.dropdown}
                            native
                            value={name}
                            onChange={onTenantChange}
                            label="Tenant Name"
                            inputProps={{
                                name: 'name',
                                id: 'outlined-tenant-native-simple',
                            }}
                            >
                                <option aria-label="Select Tenant Name" value="" />
                                <option value={1}>Walmart</option>
                                <option value={2}>Sprouts</option>
                                <option value={3}>Bank Of America</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel className={classes.menuItem} htmlFor="outlined-hmdtype-native-simple">HMD Type</InputLabel>
                            <Select
                            className={classes.dropdown}
                            native
                            value={hmdType}
                            onChange={onTypeChange}
                            label="HMD Type"
                            inputProps={{
                                name: 'hmdType',
                                id: 'outlined-hmdtype-native-simple',
                            }}
                            >
                                <option aria-label="Select Hmd Type" value="" />
                                <option value={1}>Pico G2 Plus</option>
                                <option value={2}>Pico 4Ks</option>
                            </Select>
                        </FormControl> 
                    </Grid>
                </Grid>
                <Grid container spacing={3} className={classes.line}>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={6}>
                            <FormControl className={classes.submitButton}>
                                <SpecialButton variant="contained" color="primary" disableRipple type="submit" className={classes.margin}>
                                    Provision
                                </SpecialButton>
                                <SpecialButtonDefault variant="contained" disableRipple type="submit" className={classes.margin}>
                                    Cancel
                                </SpecialButtonDefault>
                            </FormControl>
                        </Grid>
                </Grid>
            </Grid>
        </form>
    )
};

export default TenantInput;