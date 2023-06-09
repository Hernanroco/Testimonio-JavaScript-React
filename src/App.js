import './App.css';
import Testimonio from './componentes/testimonio'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
        </h1>
        <Testimonio 
          nombre='Hernan Rodriguez'
          pais='Colombia'
          imagen='1'
          cargo='Ingeniero de Sorfware'
          empresa='Mercado Libre'
          testimonio='"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida " .'/>

        <Testimonio 
          nombre='Jaime Sanchez'
          pais='Venezuela'
          imagen='2'
          cargo='Ingeniero de Sorfware'
          empresa='Ebay'
          testimonio='"Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños"'/>

      <Testimonio 
          nombre='Ana Ramirez'
          pais='Puerto Rico'
          imagen='3'
          cargo='Ingeniera de Sorfware'
          empresa='Free Code Camp'
          testimonio='" freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble".'/>
      </div>
    </div>
  );
}

export default App;
