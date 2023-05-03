import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ResponseApi, Vehicle, Vehicles } from '../../types/vehicles-types';
import { VehiclesAPI } from '../../services';
import { Box, Card, CardContent, Grid } from '@mui/material';
import Map from '../../components/Map'

const VehicleElement = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <Grid item key={vehicle.identifier} xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {vehicle.identifier}
          </Typography>
          <Typography>
            Placa: {vehicle.license_plate}
          </Typography>
          <Typography>
            Serial Number: {vehicle.tracker_serial_number}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export function Home() {
  const [vehicles, setVehicles] = useState<Vehicles>([]);
  const getVehicles = () => {
    VehiclesAPI.getVehicles()
      .then((response: ResponseApi) => {
        if (response.status === 500) {
          alert('Erro de servidor');
          return;
        }

        if (response.status === 200 && response.data) {
          setVehicles(response.data.vehicles);
          return;
        }
      })
  }
  useEffect(() => {
    getVehicles()
  }, [])

  return (
    <main>
      <Box sx={{bgcolor: 'background.paper', pt: 8, pb: 6, position: 'relative'}}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
            Lista de veíuclos
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Abaixo temos uma lista de todos os carros cadastrados em nosso sistema.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {vehicles && vehicles.length > 0 && vehicles.map((vehicle: Vehicle) => {
            return (
              <VehicleElement vehicle={vehicle} key={vehicle.identifier} />
            )
          })}
        </Grid>
      </Container>
      <Container 
        style={{ 
          width: "100%", 
          height: "calc(100vh - 4rem)", 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
        <Container id="leaflet-map">
          <Map />
        </Container>
      </Container>
    </main>
  )
}