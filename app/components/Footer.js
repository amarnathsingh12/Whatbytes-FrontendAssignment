import { Facebook, Twitter, Instagram } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-sm pb-4">
      <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Whatbytes. All rights reserved.</p>
      <div className="flex justify-center text-gray-600 gap-4 mt-4">
        <div className='flex mx-2'>
            <Facebook className='size-5' />
        <a className = "ml-1" href="#">Facebook</a>
        </div>
        <div className='flex mx-2'>
            <Twitter className='size-5'/>
        <a className = "ml-1" href="#">Twitter</a>
        </div>
        <div className='flex mx-2'>
            <Instagram className='size-5'/>
        <a className = "ml-1" href="#">Instagram</a>
        </div>
      </div>
    </footer>
  )
}