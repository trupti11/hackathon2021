import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    footer: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#ffffff',
      backgroundColor: '#000000',
      fontSize: '15px',
      width: '100%',
      height: '48px',
    },
    strivrLogo: {
        float: 'left',
        height: '20px',
        width: '25px',
        marginLeft: '500px',
        marginRight: '0px',
        marginTop: '15px',
    },
    copyright: {
        float: 'left',
        marginRight: '0px',
        marginLeft: '10px',
    }
  }),
);

interface Props {
  name: string;
}

// Notice here we're using the function declaration with the interface Props
const Footer: React.FC<Props> = ({name}) => {
  const classes = useStyles();
  return (
        <p>
            <h3 className={classes.footer} >
                <img alt="" className={classes.strivrLogo} src="strivr_wordmark_WHITE_4x.webp"/>
                <p className={classes.copyright}>{name}</p>
            </h3>
        </p>
    );
}

export default Footer;