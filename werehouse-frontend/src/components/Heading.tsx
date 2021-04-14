import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CustomizedTabs from './CustomizedTabs';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    heading: {
      padding: theme.spacing(2),
      color: '#ffffff',
      backgroundColor: '#000000',
      width: '100%',
      height: '100px',
    },
    strivrLogo: {
        float: 'left',
        height: '50px',
        width: '75px',
        marginLeft: '30px',
        marginRight: '0px',
        marginTop: '25px',
    },
    headingText: {
        float: 'left',
        marginLeft: '20px',
        marginTop: '20px',
        fontWeight: 400,
        marginBottom: '20px',
    }
  }),
);

interface Props {
  name: string;
}

// Notice here we're using the function declaration with the interface Props
const Heading: React.FC<Props> = ({name}) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" component="h1" className={classes.heading}>
        <img alt="" className={classes.strivrLogo} src="strivr-logo-no-text.svg"/>
        <p className={classes.headingText}>{name}</p>
      </Typography>
      {/* <h1 className={classes.heading}>
        <img alt="" className={classes.strivrLogo} src="strivr-logo-no-text.svg"/>
        <p className={classes.headingText}>{name}</p>
      </h1> */}
      <CustomizedTabs />
    </div>
  );
}

export default Heading;