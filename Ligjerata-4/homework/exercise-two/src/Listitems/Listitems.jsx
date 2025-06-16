import { LuMonitor, LuBriefcaseBusiness } from 'react-icons/lu';
import { FaXbox } from 'react-icons/fa6';
import { LiaKeyboardSolid } from 'react-icons/lia';
import styles from './Listitems.module.css';

const Listitems = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">

          {/* Item 1 */}
          <div>
            <a href="#" className="flex flex-col items-center gap-2 text-gray-800 hover:underline">
              <LuMonitor className="text-5xl" />
              <p className={styles.linkitems}>Shop Surface devices</p>
            </a>
          </div>

          {/* Item 2 */}
          <div>
            <a href="#" className="flex flex-col items-center gap-2 text-gray-800 hover:underline">
              <FaXbox className="text-5xl" />
              <p className={styles.linkitems}>Shop Surface devices</p>
            </a>
          </div>

          {/* Item 3 */}
          <div>
            <a href="#" className="flex flex-col items-center gap-2 text-gray-800 hover:underline">
              <LiaKeyboardSolid className="text-5xl" />
              <p className={styles.linkitems}>Shop for accessories</p>
            </a>
          </div>

          {/* Item 4 */}
          <div>
            <a href="#" className="flex flex-col items-center gap-2 text-gray-800 hover:underline">
              <LuBriefcaseBusiness className="text-5xl" />
              <p className={styles.linkitems}>Shop for your business</p>
            </a>
          </div>

          {/* Item 5 */}
          <div>
            <a href="#" className="flex flex-col items-center gap-2 text-gray-800 hover:underline">
              <LuMonitor className="text-5xl" />
              <p className={styles.linkitems}>Find your next PC</p>
            </a>
          </div>

          {/* Item 6 – centered below first row */}
          <div className="col-span-2 sm:col-span-3 md:col-span-5 flex justify-center mt-6">
            <a href="#" className="flex flex-col items-center gap-2 text-gray-800 hover:underline">
              <LuMonitor className="text-5xl" />
              <p className={styles.linkitems}>Find your next PC</p>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Listitems;
