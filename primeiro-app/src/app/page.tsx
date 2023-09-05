import Square, { Circle } from '@/components/Geo'


const Page = () => {
  return (
    <div>
        <h1 className="font-bold text-2xl">Texto grande</h1>
        <h3>Texto menor</h3>

        <Circle></Circle>
        <Square></Square>
    </div>
  );
}



export default Page;