import { bree } from '../fonts/font'
import Screen from './screen'

export default function Examples() {
  return (
    <div className='w-full p-6 min-h-screen' id='loaders' >
      <h1 className={`${bree.className} text-xl font-[800]`}>loaders</h1>
      <div className='w-full flex items-center justify-center'>
      <div className='w-full md:w-[90%] grid grid-cols-1  md:grid-cols-3 gap-10 md:gap-4  my-6 place-items-center'>
       <Screen/>
      </div>
      </div>
    </div>
  )
}
