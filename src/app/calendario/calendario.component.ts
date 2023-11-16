import { Component } from '@angular/core';
import { DateFilterFn, MatDatepickerInputEvent } from '@angular/material/datepicker';

interface MedicosPorEspecializacion {
  [key: string]: string[];
}

interface FechasOcupadas {
  [key: string]: Date[];
}

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {

  especializaciones = ["Optometra", "Medico General", "Pediatra", "Odontologa"]

  medicosPorEspecializacion: MedicosPorEspecializacion = {
    Optometra: ["Dr. Pérez", "Dra. Gómez"],
    'Medico General': ["Dr. Rodríguez", "Dra. Martínez"],
    Pediatra: ["Dr. Sánchez", "Dra. López"],
    Odontologa: ["Dr. Flores", "Dra. Ramírez"]
  };

  fechasOcupadasPorMedico: FechasOcupadas = {
    "Dr. Pérez": [new Date(2023, 10, 20), new Date(2023, 10, 25)],
    "Dra. Gómez": [new Date(2023, 10, 21), new Date(2023, 10, 22), new Date(2023, 10, 27), new Date(2023, 10, 30)],
    "Dr. Rodríguez": [new Date(2023, 10, 20), new Date(2023, 10, 27), new Date(2023, 10, 28)],
    "Dra. Martínez": [new Date(2023, 10, 19), new Date(2023, 10, 16)],
    "Dr. Sánchez": [new Date(2023, 10, 21), new Date(2023, 10, 17)],
    "Dra. López": [new Date(2023, 10, 18), new Date(2023, 10, 19), new Date(2023, 10, 22)],
    "Dr. Flores": [new Date(2023, 10, 20), new Date(2023, 10, 21), new Date(2023, 10, 22)],
    "Dra. Ramírez": [new Date(2023, 10, 22), new Date(2023, 10, 25)],
  };

  especialidad: string = "Seleccione una especialidad";

  medico: string = "Seleccione un medico";

  fechaCita: Date | null = null;

  hora: String = "Seleccione una hora";

  dateFilter: DateFilterFn<Date | null> = (date: Date | null): boolean => {

    if (!date) return false;

    const fechasOcupadas = this.fechasOcupadasPorMedico[this.medico];

    const anyMatching = fechasOcupadas.some( e => {
      return e.getTime() === date.getTime();
    });
    const currentDate = new Date();
    return !anyMatching && date.getTime() > currentDate.getTime() ;
  }


  generarHoras (){
    let horas = [];
    let minutos = 0;
    let horaString = "";
    for( let i=420; i <= 22*60; i +=20){
      horaString = String(Math.floor(i/60)).padStart(2, '0') + ":" + 
                   String(i%60).padStart(2, '0');
      horas.push(horaString);
    }

    return horas;

  }
onDateSelected(event: MatDatepickerInputEvent<Date>) {
  console.log(event.value); // This will give you the selected date
}
}
