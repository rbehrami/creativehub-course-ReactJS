import React from 'react'
 import {MicrosoftStoreMenu} from '../Footer/footer-menu/microsoftstoremenu'

const MicrosoftStore = () => {
  return (
      
            <>
                <div className="text-base font-medium text-gray-600">
                    {MicrosoftStoreMenu.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <ul className='mt-5'>
                                {item.submenu.map((subItem) => (
                                <li key={subItem.id}>
                                    <a
                                    href={subItem.link}
                                    className="block mt-5 text-xs font-normal text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
                                    >
                                    {subItem.title}
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </>
      )
    }
    
export default MicrosoftStore
