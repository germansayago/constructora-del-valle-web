import Link from 'next/link';

export default function Experience() {
  return (
    <section className='experience'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 pr-md-5'>
            <h1 className='soft mb-4'>
              EXPERIENCIA <br /> VENETO
            </h1>
            <p>
              Una vez que seas parte de la EXPERIENCIA VENETO, el disfrute y los
              servicios serán parte de tu equilibrio cotidiano, para estar cerca
              de todo y lejos de todo a la vez.
            </p>
            <p>
              Una torre única, de esas que solo se conciben cada mucho tiempo,
              con una ubicación estratégica en la ciudad y una magnífica
              combinación de la mejor arquitectura, exclusivos amenities y los
              mejores servicios.
            </p>
            <p>
              Un proyecto con el respaldo de un equipo interdisciplinario de
              profesionales y empresas de primera línea en el país, que brindan
              lo mejor en cada disciplina para el éxito del emprendimiento.
            </p>
            <p>
              Es por esto que invertir en VENETO es invertir en seguridad, que
              se valorizará rápidamente a través del tiempo, y usted vera como
              crecer rápidamente su inversión.
            </p>
            <div className='my-4'>
              <Link href='/emprendimientos'>
                <a className='btn btn-outline-dark mb-3'>
                  Ver Empredimientos de inversión
                </a>
              </Link>
              <Link href='/la-empresa'>
                <a className='btn btn-link mb-3'>Conocer la empresa</a>
              </Link>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='grid-container'>
              <div className='grid-item image-1'>
                <img
                  src='/home/experience-image-1.jpg'
                  loading='lazy'
                  alt='experiencia veneto 1'
                />
              </div>
              <div className='grid-item image-2'>
                <img
                  src='/home/experience-image-2.jpg'
                  loading='lazy'
                  alt='experiencia veneto 2'
                />
              </div>
              <div className='grid-item image-3'>
                <img
                  src='/home/experience-image-3.jpg'
                  loading='lazy'
                  alt='experiencia veneto 3'
                />
              </div>
              <div className='grid-item image-4'>
                <img
                  src='/home/experience-image-4.jpg'
                  loading='lazy'
                  alt='experiencia veneto 4'
                />
              </div>
              <div className='grid-item image-5'>
                <img
                  src='/home/experience-image-5.jpg'
                  loading='lazy'
                  alt='experiencia veneto 5'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
