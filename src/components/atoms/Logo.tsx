import logoCB from '~/assets/images/logocb.png';
import Image from 'next/image';

const Logo = () => (
  <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
   {logoCB && (
            <div>
              <Image
                className="mx-auto h-auto w-72 rounded-md bg-transparent"
                src={logoCB}
                alt="Logo Cerrajeria Beto\'s"
                width={1024}
                height={607}
                sizes="(max-width: 64rem) 100vw, 1024px"
                loading="eager"
                placeholder="blur"
                priority
              />
            </div>
          )}
  </span>
);

export default Logo;
