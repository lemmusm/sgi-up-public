import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// AuthService
import { AuthafService } from './providers/authaf.service';
// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';

import { ManualcalidadComponent } from './components/pages/calidad/manualcalidad/manualcalidad.component';
import { OfertaeducativaComponent } from './components/pages/calidad/ofertaeducativa/ofertaeducativa.component';
import { SeguimientoegresoComponent } from './components/pages/calidad/seguimientoegreso/seguimientoegreso.component';
import { ControlsalidasnoconformesComponent } from './components/pages/calidad/controlsalidasnoconformes/controlsalidasnoconformes.component';
import { MedicionsatisfaccionclienteComponent } from './components/pages/calidad/medicionsatisfaccioncliente/medicionsatisfaccioncliente.component';
import { GestionasignaturaComponent } from './components/pages/calidad/ea/gestionasignatura/gestionasignatura.component';
import { EvaluacionaprendizajeComponent } from './components/pages/calidad/ea/evaluacionaprendizaje/evaluacionaprendizaje.component';
import { CapacitaciondesarrollodocenteComponent } from './components/pages/calidad/ea/capacitaciondesarrollodocente/capacitaciondesarrollodocente.component';
import { ProgramainstitucionaltutoriasComponent } from './components/pages/calidad/ea/programainstitucionaltutorias/programainstitucionaltutorias.component';
import { AsesoriasComponent } from './components/pages/calidad/ea/asesorias/asesorias.component';
import { ServiciolaboratorioComponent } from './components/pages/calidad/ea/serviciolaboratorio/serviciolaboratorio.component';
import { ServiciosocialComponent } from './components/pages/calidad/ea/serviciosocial/serviciosocial.component';
import { EstanciaestadiaComponent } from './components/pages/calidad/ea/estanciaestadia/estanciaestadia.component';
import { ServiciosescolaresComponent } from './components/pages/calidad/serviciosescolares/serviciosescolares.component';
import { TitulacionComponent } from './components/pages/calidad/titulacion/titulacion.component';
import { CreacioninformaciondocumentadaComponent } from './components/pages/integral/creacioninformaciondocumentada/creacioninformaciondocumentada.component';
import { ControlinformaciondocumentadaComponent } from './components/pages/integral/controlinformaciondocumentada/controlinformaciondocumentada.component';
import { RevisiondireccionComponent } from './components/pages/integral/revisiondireccion/revisiondireccion.component';
import { AnalisisriesgosoportunidadesComponent } from './components/pages/integral/analisisriesgosoportunidades/analisisriesgosoportunidades.component';
import { MantenimientoinfraestructuraComponent } from './components/pages/integral/mantenimientoinfraestructura/mantenimientoinfraestructura.component';
import { TecnologiasinformacionComponent } from './components/pages/integral/tecnologiasinformacion/tecnologiasinformacion.component';
import { CentroscomputoComponent } from './components/pages/integral/centroscomputo/centroscomputo.component';
import { ClimalaboralComponent } from './components/pages/integral/climalaboral/climalaboral.component';
import { CompetenciatomaconcienciaComponent } from './components/pages/integral/competenciatomaconciencia/competenciatomaconciencia.component';
import { ComunicacionComponent } from './components/pages/integral/comunicacion/comunicacion.component';
import { GestionquejasComponent } from './components/pages/integral/gestionquejas/gestionquejas.component';
import { ControlprocesosComponent } from './components/pages/integral/controlprocesos/controlprocesos.component';
import { AuditoriasinternasComponent } from './components/pages/integral/auditoriasinternas/auditoriasinternas.component';
import { AccionescorrectivasComponent } from './components/pages/integral/accionescorrectivas/accionescorrectivas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    ManualcalidadComponent,
    OfertaeducativaComponent,
    SeguimientoegresoComponent,
    ControlsalidasnoconformesComponent,
    MedicionsatisfaccionclienteComponent,
    GestionasignaturaComponent,
    EvaluacionaprendizajeComponent,
    CapacitaciondesarrollodocenteComponent,
    ProgramainstitucionaltutoriasComponent,
    AsesoriasComponent,
    ServiciolaboratorioComponent,
    ServiciosocialComponent,
    EstanciaestadiaComponent,
    ServiciosescolaresComponent,
    TitulacionComponent,
    CreacioninformaciondocumentadaComponent,
    ControlinformaciondocumentadaComponent,
    RevisiondireccionComponent,
    AnalisisriesgosoportunidadesComponent,
    MantenimientoinfraestructuraComponent,
    TecnologiasinformacionComponent,
    CentroscomputoComponent,
    ClimalaboralComponent,
    CompetenciatomaconcienciaComponent,
    ComunicacionComponent,
    GestionquejasComponent,
    ControlprocesosComponent,
    AuditoriasinternasComponent,
    AccionescorrectivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthafService],
  bootstrap: [AppComponent]
})
export class AppModule { }
