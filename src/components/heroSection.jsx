import Button from '@/src/components/MainButton';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      {/*
      * style={{
      *   background: 'linear-gradient(180.2deg, #000000 -4.03%, #140555 99.86%)'
      * }}
      */}

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-white mb-4">
          <div
            className="uppercase mb-2"
            style={{
              fontFamily: 'Audiowide, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            We Make
          </div>
          <div
            className="uppercase"
            style={{
              fontFamily: 'Audiowide, sans-serif',
              fontWeight: 400,
              fontSize: '64px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            TECHNOLOGY
          </div>
          <div
            className="uppercase mt-2"
            style={{
              fontFamily: 'Audiowide, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Move
          </div>
        </h1>
        <div className="mt-8">
          <Button>Join Us</Button>
        </div>
      </div>
      <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
        rel="stylesheet"
      />
    </section>
  );
}
