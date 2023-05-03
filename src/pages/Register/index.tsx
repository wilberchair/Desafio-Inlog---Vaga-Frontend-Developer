import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Vehicle } from '../../types/vehicles-types';
import { VehiclesAPI } from '../../services';
import { useForm } from 'react-hook-form'

export function Register() {
  const { register, reset, handleSubmit } = useForm();
  
  const postVehicle = (vehicle: Vehicle) => {
    VehiclesAPI.postVehicle(vehicle)
      .then(res => console.log(res))
  }
  
  // const onSave = () => {
  //   const vehicle02 = {
  //     identifier: "Vehicle 2",
  //     license_plate: "AAA-9A79",
  //     tracker_serial_number: "A0000000",
  //     coordinates: {
  //       latitude: -25.43247,
  //       longitude: -49.27845,
  //     }
  //   }
  //   postVehicle(vehicle02)
  // }

  const createUser = (data: any) => {
    postVehicle(data);

    alert('Novo carro criado com sucesso!');
    reset();
  }

  return (
    <main>
      <Box sx={{bgcolor: 'background.paper', pt: 8, pb: 6}}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom >
            Registre seu veículo
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Coloque as informações de seu veículo para deixarmos registrado em nosso sistema.
          </Typography>
          <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
            <form onSubmit={handleSubmit(createUser)} style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{padding: '12px 0', display: 'flex', justifyContent: 'space-between'}}>
                <label htmlFor="" style={{fontSize: '14px'}}>Nome</label>
                <input style={{width: '60%'}} autoFocus required type="text" {...register('identifier')} />
              </div>
              <div style={{padding: '12px 0', display: 'flex', justifyContent: 'space-between'}}>
                <label htmlFor="" style={{fontSize: '14px'}}>Placa</label>
                <input style={{width: '60%'}} required type="text" {...register('license_plate')} />
              </div>
              <div style={{padding: '12px 0', display: 'flex', justifyContent: 'space-between'}}>
                <label htmlFor="" style={{fontSize: '14px'}}>Serial number</label>
                <input style={{width: '60%'}} required type="text" {...register('tracker_serial_number')} />
              </div>
              <div style={{padding: '12px 0', display: 'flex', justifyContent: 'space-between'}}>
                <label htmlFor="" style={{fontSize: '14px'}}>Latitude</label>
                <input style={{width: '60%'}} required type="number" {...register('latitude')} />
              </div>
              <div style={{padding: '12px 0', display: 'flex', justifyContent: 'space-between'}}>
                <label htmlFor="" style={{fontSize: '14px'}}>Longitude</label>
                <input style={{width: '60%'}} required type="number" {...register('longitude')} />
              </div>
              <Button variant="contained" type='submit'>Salvar</Button>
            </form>
              {/* <Button variant="contained" onClick={() => {onSave()}}>Salvar</Button> */}
          </Stack>
        </Container>
      </Box>
    </main>
  )
}