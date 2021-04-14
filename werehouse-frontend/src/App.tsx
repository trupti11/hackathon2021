import './App.css';
import TenantInput from './components/TenantInput';
import Heading from './components/Heading';
import Footer from './components/Footer';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Heading name="STRIVR Virtual Warehouse" />
        </Grid>
        <Grid>
          <TenantInput />
        </Grid>
        <Grid item xs={12}>
          <Footer name="© 2021 Strivr Labs, Inc." />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
