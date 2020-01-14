import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AuthGuardService } from './providers/auth-guard.service';
// CALIDAD
import { ControlsalidasnoconformesComponent } from './components/pages/calidad/controlsalidasnoconformes/controlsalidasnoconformes.component';
import { ManualcalidadComponent } from './components/pages/calidad/manualcalidad/manualcalidad.component';
import { OfertaeducativaComponent } from './components/pages/calidad/ofertaeducativa/ofertaeducativa.component';
import { SeguimientoegresoComponent } from './components/pages/calidad/seguimientoegreso/seguimientoegreso.component';
import { MedicionsatisfaccionclienteComponent } from './components/pages/calidad/medicionsatisfaccioncliente/medicionsatisfaccioncliente.component';
import { GestionasignaturaComponent } from './components/pages/calidad/ea/gestionasignatura/gestionasignatura.component';
import { EvaluacionaprendizajeComponent } from './components/pages/calidad/ea/evaluacionaprendizaje/evaluacionaprendizaje.component';
import { CapacitaciondesarrollodocenteComponent } from './components/pages/calidad/ea/capacitaciondesarrollodocente/capacitaciondesarrollodocente.component';
import { ProgramainstitucionaltutoriasComponent } from './components/pages/calidad/ea/programainstitucionaltutorias/programainstitucionaltutorias.component';
import { ServiciolaboratorioComponent } from './components/pages/calidad/ea/serviciolaboratorio/serviciolaboratorio.component';
import { ServiciosocialComponent } from './components/pages/calidad/ea/serviciosocial/serviciosocial.component';
import { EstanciaestadiaComponent } from './components/pages/calidad/ea/estanciaestadia/estanciaestadia.component';
import { ServiciosescolaresComponent } from './components/pages/calidad/serviciosescolares/serviciosescolares.component';
import { TitulacionComponent } from './components/pages/calidad/titulacion/titulacion.component';
// INTEGRAL
import { ControlprocesosComponent } from './components/pages/integral/controlprocesos/controlprocesos.component';
import { ComunicacionComponent } from './components/pages/integral/comunicacion/comunicacion.component';
import { CompetenciatomaconcienciaComponent } from './components/pages/integral/competenciatomaconciencia/competenciatomaconciencia.component';
import { TecnologiasinformacionComponent } from './components/pages/integral/tecnologiasinformacion/tecnologiasinformacion.component';
import { CentroscomputoComponent } from './components/pages/integral/centroscomputo/centroscomputo.component';
import { ClimalaboralComponent } from './components/pages/integral/climalaboral/climalaboral.component';
import { AnalisisriesgosoportunidadesComponent } from './components/pages/integral/analisisriesgosoportunidades/analisisriesgosoportunidades.component';
import { MantenimientoinfraestructuraComponent } from './components/pages/integral/mantenimientoinfraestructura/mantenimientoinfraestructura.component';
import { GestionquejasComponent } from './components/pages/integral/gestionquejas/gestionquejas.component';
import { AuditoriasinternasComponent } from './components/pages/integral/auditoriasinternas/auditoriasinternas.component';
import { AccionescorrectivasComponent } from './components/pages/integral/accionescorrectivas/accionescorrectivas.component';
import { RevisiondireccionComponent } from './components/pages/integral/revisiondireccion/revisiondireccion.component';
import { ControlinformaciondocumentadaComponent } from './components/pages/integral/controlinformaciondocumentada/controlinformaciondocumentada.component';
import { CreacioninformaciondocumentadaComponent } from './components/pages/integral/creacioninformaciondocumentada/creacioninformaciondocumentada.component';
import { AsesoriasComponent } from './components/pages/calidad/ea/asesorias/asesorias.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent, canActivate: [AuthGuardService] },
  // CALIDAD
  {
    path: 'manual_calidad',
    component: ManualcalidadComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'oferta_educativa',
    component: OfertaeducativaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'seguimiento_egreso',
    component: SeguimientoegresoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'control_salidas_no_conformes',
    component: ControlsalidasnoconformesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'medicion_satisfaccion_cliente',
    component: MedicionsatisfaccionclienteComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'gestion_asignatura',
    component: GestionasignaturaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'evaluacion_aprendizaje',
    component: EvaluacionaprendizajeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'capacitacion_desarrollo_docente',
    component: CapacitaciondesarrollodocenteComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'programa_institucional_tutorias',
    component: ProgramainstitucionaltutoriasComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'asesorias',
    component: AsesoriasComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'servicio_laboratorio',
    component: ServiciolaboratorioComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'servicio_social',
    component: ServiciosocialComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'estancia_estadia',
    component: EstanciaestadiaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'servicios_escolares',
    component: ServiciosescolaresComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'titulacion',
    component: TitulacionComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'creacion_informacion_documentada',
    component: CreacioninformaciondocumentadaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'control_informacion_documentada',
    component: ControlinformaciondocumentadaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'revision_direccion',
    component: RevisiondireccionComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'analisis_riesgos_oportunidades',
    component: AnalisisriesgosoportunidadesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mantenimiento_infraestructura',
    component: MantenimientoinfraestructuraComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'tecnologias_informacion',
    component: TecnologiasinformacionComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'centros_computo',
    component: CentroscomputoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'clima_laboral',
    component: ClimalaboralComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'competencia_toma_conciencia',
    component: CompetenciatomaconcienciaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'comunicacion',
    component: ComunicacionComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'gestion_quejas_partes_interesadas',
    component: GestionquejasComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'control_procesos_productos_servicios',
    component: ControlprocesosComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'auditorias_internas',
    component: AuditoriasinternasComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'acciones_correctivas',
    component: AccionescorrectivasComponent,
    canActivate: [AuthGuardService]
  },
  //
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
