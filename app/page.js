import Image from 'next/image';

export default function Home() {

  return (
    <div>
      <Image
        alt='Codeswear Banner'
        src="/banner.webp" 
        priority={true}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}
